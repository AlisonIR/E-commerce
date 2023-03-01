import React from 'react'
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css'
import { Layout } from '<user>/components'
import { StateContext } from '<user>/context/StateContext'


function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
       <Component {...pageProps}/>
      </Layout>
  </StateContext>
  ) 
}

export default App
