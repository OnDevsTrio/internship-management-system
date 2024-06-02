import React from 'react'
import AccountsTable from '../../../components/@core/ui/table/account-table/accounts-table'
import { getUsers } from '@/utils/users'
import { BreadcrumbWrapper } from '@/components/@core/ui/breadcrumb'
import { accountColumns } from './_components/accounts-columns'

const InternManagement = async () => {
  const isArchivePage = false
  const userRole = 'INTERN'
  const data = await getUsers(isArchivePage, userRole)

  return (
    <div className="py-2 space-y-6">
      <BreadcrumbWrapper current="Intern Management" />
      <AccountsTable
        data={data}
        user={userRole}
        accountColumns={accountColumns}
      />
    </div>
  )
}

export default InternManagement
