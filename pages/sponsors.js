import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import styles from '../styles/Sponsors.module.css'
export default function Sponsors() {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITHyderabad | Sponsors</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <iframe src="./../sponsors/partners.html" style={{border:"none",height:"499px",width:"100%"}} title='incentives'></iframe>
        
        </>
    )
}