import NavbarComp from './Navbar'
import Footer from './Footer'
import Footercomp from './Footercomp'

export default function Layout({ children }) {
  return (
    <>
      <NavbarComp />
        <main>{children}</main>
      <Footer />
      {/* <Footercomp/> */}
    </>
  )
}