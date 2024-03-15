import { NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'

export { default } from 'next-auth/middleware'

export async function middleware(request: NextRequest) {
  const session = await getSession({
    req: {
      headers: Object.fromEntries(request.headers.entries()),
      url: request.url,
    },
  })
  const currentUser = session?.user
  const role = currentUser?.role

  if (
    !currentUser &&
    (request.nextUrl.pathname.startsWith('/admin') ||
      request.nextUrl.pathname.startsWith('/intern'))
  ) {
    return Response.redirect(new URL('/', request.url))
  }

  if (currentUser) {
    if (
      (role !== 'ADMIN' && request.nextUrl.pathname.startsWith('/admin')) ||
      (role !== 'INTERN' && request.nextUrl.pathname.startsWith('/intern'))
    ) {
      return Response.redirect(new URL('/unauthorized', request.url))
    }
  }

  if (currentUser && request.nextUrl.pathname.startsWith('/auth')) {
    return Response.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
