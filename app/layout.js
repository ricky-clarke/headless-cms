import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "./components/header/header.component"
import HeaderFixed from "./components/header_fixed/header_fixed.component"
import Footer from "./components/footer/footer.component"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <HeaderFixed />
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        </body>
    </html>
  )
}
