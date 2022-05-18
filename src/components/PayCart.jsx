import React from "react";
import ImgLogo from "./ImgLogo";
import { v4 as uuidv4 } from "uuid";
import { TextDate, Heading, SubHeading, DeviceType } from "./TextAll";
import App from "../App.js";
import styles from './styles/styles.module.css';


const PayCart = () => {
  //   const CartDetails=[
  //     {
  //     date:'12/08/2022',
  //     logo:'https://pngimg.com/uploads/amazon/amazon_PNG5.png',
  //     heading:'Amazon Gift Pay',
  //     device:'Desktop - Mobile'
  //   },{
  //     date:'12/08/2022',
  //     logo:'https://e7.pngegg.com/pngimages/722/139/png-clipart-apple-logo-computer-icons-mac-book-pro-macbook-apple-heart-computer.png',
  //     heading:'Amazon Gift Pay',
  //     subheading:'Case Study',
  //     device:'MacOS - Mobile'
  //   }
  // ];
  const CartDetails = [
    {
      date:"12/08/2022",
      logo:"https://pngimg.com/uploads/amazon/amazon_PNG5.png",
      heading:"Amazon Gift Pay",
      subheading:"Case Study",
      device:"Desktop - Mobile",
      color:'#FFA500'
  } , {
    date:"12 Sep 2022",
    logo:"https://img.icons8.com/material-rounded/452/mac-client.png",
    heading:"Apple Gift Pay",
    subheading:"Case Study",
    device:"MacOS - Mobile",
    color:'#F5F5F5'
}  
  ];
  return (
    <div className={styles.space}>
        {CartDetails.map(({date,subheading,heading,device,logo,color})=>(
          <div key={uuidv4()} className={styles.boxSize} style={{'backgroundColor':color}}>
          <div>
          <TextDate date={date} />
          <SubHeading subheading={subheading} />
          <Heading heading={heading} />
          <DeviceType device={device} />
          </div>
         <div className={styles.flexLogo}>
         <ImgLogo  logo={logo}/>
         <i className="fa-solid fa-arrow-right"></i>
         </div>
       </div>
        
        ))}
    </div>
  );
};

export default PayCart;
