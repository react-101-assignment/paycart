import React from 'react'
import styles from './styles/styles.module.css';
import { v4 as uuidv4 } from 'uuid';
const ImgLogo = ({logo}) => {
  return (
    <>
    <img style={{'width':'80px','borderRadius':'2px'}}src={logo}/>
    </>
  )
}

export default ImgLogo