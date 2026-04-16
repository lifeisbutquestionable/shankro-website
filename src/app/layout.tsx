import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShankRO | Trusted RO Solutions Across Madhya Pradesh',
  description: 'Premium and reliable RO water purifier assembly, installation, and service across MP.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
