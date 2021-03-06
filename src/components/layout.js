import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ( props ) => {
  return (
    <div>
        <Header />
          <main className={props.layoutClass}>
            {props.children}
          </main>
        <Footer />
    </div>
  )
}

export default Layout