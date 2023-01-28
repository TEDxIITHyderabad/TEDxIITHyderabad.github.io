import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Aboutus() {
    return (
        <>
        <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <title>TEDx IITHyderabad | About Us</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <iframe src="./../aboutus/about.html" style={{border:"none",height:"650px",width:"100%"}} title='aboutus'></iframe>
        </>
    )
}


