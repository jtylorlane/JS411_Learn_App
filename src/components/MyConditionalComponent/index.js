
import React, { Component } from 'react'

const MyConditionalComponent = (props) => {
//   if (props.isVerified) {
//     return <IsVerifiedComponent userId={props.id} />
//   } else {
//     return <NotVerifiedComponent userId={props.id} />
    return props.isVerified ? <IsVerifiedComponent userId={props.id} /> : <NotVerifiedComponent/>
  }


const IsVerifiedComponent = (props) => {  
    return <h1>Is Verified</h1>
}

const NotVerifiedComponent = (props) => {
  return <h1>Is not Verified</h1>
}

export default MyConditionalComponent;