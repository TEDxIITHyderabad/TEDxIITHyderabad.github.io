import Head from 'next/head'
import styles from '../styles/Contactus.module.css'
import { useEffect } from 'react'
export default function Contactus(){
    
        
    return (
        <>
        <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content=""/>
        <title>TEDx IITHyderabad | Contact Us</title>
        
        </Head>
        <iframe src="./contactuspage.html" style={{border:"none",height:"499px",width:"100%"}} title='contactus'></iframe>

        
        </>
    )
}