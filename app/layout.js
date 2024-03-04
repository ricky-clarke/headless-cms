import '../styles/globals.scss'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from './components/header/header.component'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <SpeedInsights />
        </body>
    </html>
  )
}
