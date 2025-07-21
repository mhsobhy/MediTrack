import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MediTrack - نظام إدارة الصيدليات الإلكتروني',
  description: 'نظام صيدلية إلكترونية متكامل لإدارة الوصفات الطبية والأدوية بطريقة آمنة وفعالة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn(
        "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-cairo antialiased",
        cairo.variable
      )}>
        {children}
      </body>
    </html>
  )
}