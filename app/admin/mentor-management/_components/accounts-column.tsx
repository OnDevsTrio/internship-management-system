'use client'

import { UserSubset } from '@/components/@core/ui/table/account-table/types'
import { DataTableColumnHeader } from '@/components/@core/ui/table/column-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { TooltipWrapper } from '@/components/ui/tooltip'
import AvatarPlaceholder from '@/public/general/images/male-avatar.svg'
import { ColumnDef, Row } from '@tanstack/react-table'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { FiEdit3 } from 'react-icons/fi'
import { IoArchiveOutline } from 'react-icons/io5'
import { LuArchiveRestore } from 'react-icons/lu'

export const accountColumns = (actions: {
  [key: string]: (row: Row<UserSubset>) => void
}): ColumnDef<UserSubset>[] => [
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Name" />
      },
      cell: ({ row }) => {
        const name = row.original.name
        const path = `/admin/mentor-management/${row.original.id}`

        return (
          <Link
            href={path}
            className="font-medium text-foreground hover:text-primary"
          >
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={`${row.original.image}`} alt={`${name}`} />
                <AvatarFallback>
                  <Image
                    src={AvatarPlaceholder}
                    width={32}
                    height={32}
                    alt={`${name}`}
                  />
                </AvatarFallback>
              </Avatar>
              <span>{row.original.name}</span>
            </div>
          </Link>
        )
      },
    },
    {
      accessorKey: 'email',
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Email" />
      },
    },
    {
      accessorKey: 'expertise',
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Expertise" />
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: ({ row }) => {
        const formattedDate = format(`${row.original.createdAt}`, 'MM/dd/yyyy')

        return <p>{formattedDate}</p>
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        return (
          <div className="flex justify-end gap-1">
            <TooltipWrapper tooltip="Edit">
              <Button
                variant="ghost"
                size="circle"
                onClick={() => actions.edit(row)}
              >
                {!row.original.isArchived && <FiEdit3 size="1.1rem" />}
              </Button>
            </TooltipWrapper>
            <TooltipWrapper tooltip="Archive">
              <Button
                variant="ghost"
                size="circle"
                onClick={() => actions.openArchiveConfirmation(row)}
              >
                {!row.original.isArchived ? (
                  <>
                    <IoArchiveOutline size="1.1rem" />
                  </>
                ) : (
                  <LuArchiveRestore size="1.1rem" />
                )}
              </Button>
            </TooltipWrapper>
          </div>
        )
      },
    },
  ]
