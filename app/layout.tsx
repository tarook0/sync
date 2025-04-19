import type React from "react"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Five Littel Thives Studio - Official Game Website",
  description:
    "Embark on a journey through breathtaking landscapes and face challenging foes in this action-packed adventure",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
