import { NextResponse } from 'next/server'
import prisma from '../../../../../lib/prisma'
import { connectDB } from '@/lib/connect-db'

export async function GET() {
  try {
    await connectDB()
    const users = await prisma.user.findMany({ where: { role: 'MENTOR' } })

    if (!users) {
      return NextResponse.json({ message: 'No Users Exists' }, { status: 401 })
    }

    return NextResponse.json(users, { status: 201 })
  } catch (error) {
    console.log('Error:', error)
    return NextResponse.json(
      { message: 'Could not verify user' },
      { status: 404 },
    )
  } finally {
    await prisma.$disconnect()
  }
}
