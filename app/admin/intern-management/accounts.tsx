'use client'

import { CustomIcon } from '@/components/@core/iconify'

import { Column, ColumnDef } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DataTableColumnHeader } from '@/components/@core/table/column-header'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

export type InternsUsersSubset = {
  image: string | null
  name: string | null
  email: string | null
  mentor: string | null
}

export const columns: ColumnDef<InternsUsersSubset>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'image',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} />
    },
    cell: ({ row }) => {
      return (
        <Avatar className="w-8 h-8">
          <AvatarImage
            src={`${row.original.image}`}
            alt={`${row.original.name}`}
          />
        </Avatar>
      )
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />
    },
  },
  {
    accessorKey: 'mentor',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Mentor" />
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <CustomIcon icon="fluent:more-horizontal-16-regular" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuItem>View Details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
