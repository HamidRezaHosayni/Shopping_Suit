import React from 'react'
import Header from "../../public/component/header";
import Footer from "../../public/component/footer"
function Header_and_footer({ children }) {
  return (
    <>
      <Header />
      <br /><br /><br />
      {children}
      <br /><br /><br />
      <Footer />
    </>
  )
}

export default Header_and_footer