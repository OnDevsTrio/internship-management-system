import { BreadcrumbWrapper } from '@/components/@core/ui/breadcrumb'
import { getUsers } from '@/utils/users'
import { Metadata } from 'next'
import AccountsTable from '../../../components/@core/ui/table/account-table/accounts-table'
import { accountColumns } from './_components/accounts-column'

export const metadata: Metadata = {
  title: 'Mentor Management',
}

export default async function MentorManagement() {
  const isArchivePage = false
  const userRole = 'MENTOR'
  const data = await getUsers(isArchivePage, userRole)

  return (
    <div className="py-2 space-y-6">
      <BreadcrumbWrapper current="Mentor Management" />
      <AccountsTable
        data={data}
        user={userRole}
        accountColumns={accountColumns}
      />
    </div>
  )
}
