import NavbarComp from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <NavbarComp />
        <main>{children}</main>
      <Footer />
    </>
  )
}