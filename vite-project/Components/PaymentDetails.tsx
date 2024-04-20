import React from 'react'
import BoutonReturnPaymentDetails from '../src/assets/Images/boutonReturn.png'
import DetailsPayment from '../src/assets/Images/detailsPayment.png'
import boutonPayment from '../src/assets/Images/boutonPayment.png'

function PaymentDetails() {
  return (
    <>
    <img src={BoutonReturnPaymentDetails} alt="bouton return payment details" />
    <img src={DetailsPayment} alt="details payment" />
    <a href="PaymentAccept"><img src={boutonPayment} alt="bouton payment" /></a>
    </>
  )
}

export default PaymentDetails