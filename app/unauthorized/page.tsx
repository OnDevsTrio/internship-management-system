'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'

const Denied = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="w-full h-screen flex items-center flex-col justify-center">
      <Card className="flex items-center flex-col">
        <CardHeader>
          <div className="size-[6rem] rounded-full flex items-center justify-center bg-muted">
            <Icon
              className="text-destructive "
              icon="solar:user-block-bold-duotone"
              height="3.5rem"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold">Unauthorized Access</h1>
            <p className="text-text">
              You don&apos;t have permission to access this page
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleBack}>Back to previous Page</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Denied