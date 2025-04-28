import { deleteSection } from '@/app/lib/sections'
import { NextResponse } from 'next/server'

type Params = Promise<{ id: string }>

export async function DELETE(
  request: Request,
  segmentData: { params: Params }
) {
  try {
    const { id } = await segmentData.params
    await deleteSection(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting section:', error)
    return NextResponse.json(
      { error: 'Failed to delete section' },
      { status: 500 }
    )
  }
}
