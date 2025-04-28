import { deletePortfolioItem } from '@/app/lib/portfolio'
import { NextResponse } from 'next/server'

type Params = Promise<{ id: string }>
export async function DELETE(
  request: Request,
  segmentData: { params: Params }
) {
  try {
    const { id } = await segmentData.params
    await deletePortfolioItem(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting portfolio item:', error)
    return NextResponse.json(
      { error: 'Failed to delete portfolio item' },
      { status: 500 }
    )
  }
}
