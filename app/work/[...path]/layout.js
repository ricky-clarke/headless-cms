// import { SpeedInsights } from "@vercel/speed-insights/next"
// import Header from "./components/layouts/header/header.component"
// import HeaderFixed from "./components/layouts/header_fixed/header_fixed.component"
// import Footer from "./components/layouts/footer/footer.component"
// import { GlobalStateProvider } from "./context/context"
// import { dm_sans, dm_sans_serif } from "./fonts"

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function Layout({ children }) {
 return (
    <>
      { children }
      <p>HERE</p>
      <h1>WORK PAGE</h1>

    </>
  )
}