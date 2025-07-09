import { Metadata } from 'next'
import NewsPageClient from './NewsPageClient'

export const metadata: Metadata = {
  title: 'KLAQ News - Rock Music News & Updates - 95.5 KLAQ',
  description: 'Stay up to date with the latest rock music news, band updates, concert announcements, and entertainment news from KLAQ 95.5 FM.',
}

export default function NewsPage() {
  return <NewsPageClient />
}