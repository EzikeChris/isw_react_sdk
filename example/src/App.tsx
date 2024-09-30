import React from 'react'

import { InterswitchPay } from 'react-interswitch'
// import 'react-interswitch/dist/index.css'

const App = () => {
  const props = {
    merchantCode: 'VNA',
    payItemID: '103',
    customerEmail: 'johndoe@gmail.com',
    redirectURL: 'www.ikennaandsons.com',
    text: 'Pay Now',
    mode: 'TEST',
    transactionReference: "3743833939393948493",
    amount: '10000000000',
    currency: "566",
    style: {
      width: '200px',
      height: '40px',
      border: 'none',
      color: '#fff',
      backgroundColor: '#ff0000'
    },
    callback: (response: any) => {
      console.log('response: ', response)
    }
  }
  return <InterswitchPay {...props} />
}

export default App
