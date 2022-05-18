import React from 'react'

const TextDate = ({date}) => {
  return (
    <>
      <p style={{'paddingBottom':'22px'}}>{date}</p>
    </>
  )
}
const Heading=({heading})=>{
  return(
    <>
    <h2 style={{'width':'120px','marginBottom':'18px'}}>{heading}</h2>
    </>
  )
}
const SubHeading=({subheading})=>{
  return (
<h4 style={{'marginBottom':'18px','padding':' 8px 12px 8px 12px','backgroundColor':'black','color':'white','textAlign':'center'}}>{subheading}</h4>
  )
}
const DeviceType=({device})=>{
  return (
    <h6>{device}</h6>
  )
}
export {TextDate,Heading,SubHeading,DeviceType}