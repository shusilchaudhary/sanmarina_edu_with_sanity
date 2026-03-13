import nextDynamic from 'next/dynamic'

const Studio = nextDynamic(() => import('./Studio'), { ssr: false })

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <Studio />
}
