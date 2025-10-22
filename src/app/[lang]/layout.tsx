import { i18n, type Locale } from "@/i18n-config"

export async function generateStaticParams() {
  return [{lang: 'fr'}, {lang: 'en'}];
}
 
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  return (
    <html lang={(await params).lang}>
      <body>{children}</body>
    </html>
  )
}