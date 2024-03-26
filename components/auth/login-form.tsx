'use client'
import { LoadingSpinner } from '@/components/spinner/circular'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CardWrapper } from './card-wrapper'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { LoginSchema } from './login-schema'

import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { zodResolver } from '@hookform/resolvers/zod'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Session } from 'next-auth'
import { revalidatePath } from 'next/cache'

const LoginForm = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { isSubmitting } = form.formState

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const { email, password } = values

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (res?.error) {
        console.error('An unexpected error happened:', res.error)
      }

      router.push('/')
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  }

  return (
    <CardWrapper
      headerLabel="Welcome To Internship Portal"
      subHeaderLabel="Enter your credentials to access your account"
      backButtonLabel="Don't have an account?"
      backButtonHref="/"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      icon="heroicons:user"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                      icon="heroicons:lock-closed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isSubmitting} className="w-full text-base">
            {isSubmitting ? <LoadingSpinner /> : 'Login'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm
