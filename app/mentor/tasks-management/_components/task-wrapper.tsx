'use client'

import { useState } from 'react'
import { SearchFilter } from './search-filter'
import TaskCard from './task-card'
import NoRecords from '@/components/@core/ui/no-records'
import { TaskStatus } from '@prisma/client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CustomIcon } from '@/components/@core/iconify'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TaskWrapperProps } from './types'

const TaskWrapper = ({ tasks, isInternUser = false }: TaskWrapperProps) => {
  const [searchTasks, setSearchTasks] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | 'default'>(
    'default',
  )

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTasks.toLowerCase()),
  )

  const sortedTasks = filteredTasks.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  const selectedTasks = sortedTasks.filter(task => {
    return selectedStatus === 'default' ? task : task.status === selectedStatus
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <SearchFilter
          className="w-[20rem]"
          search={searchTasks}
          setSearch={setSearchTasks}
        />
        <div className="flex justify-between gap-4">
          <Select
            defaultValue="default"
            onValueChange={(val: TaskStatus | 'default') =>
              setSelectedStatus(val)
            }
          >
            <SelectTrigger className="min-w-20">
              <SelectValue
                placeholder="Select task status"
                defaultValue={selectedStatus}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="default">All</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="in-IN_PROGRESS">In Progress</SelectItem>
                <SelectItem value="COMPLETED">Completed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {!isInternUser && (
            <Link href="/mentor/tasks-management/create-task">
              <Button>
                <span className="mr-2">Create Task</span>
                <CustomIcon icon="lucide:circle-plus" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      {selectedTasks.length ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedTasks.map(task => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              startDate={task.startDate}
              endDate={task.endDate}
            />
          ))}
        </div>
      ) : (
        <NoRecords
          searchOutput={searchTasks}
          className="border bg-card rounded-md pb-8"
        />
      )}
    </div>
  )
}

export default TaskWrapper
