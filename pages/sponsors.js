import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Logoscroll from '../components/Logoscroll'
import Navbar from '../components/Navbar'

export default function Sponsors() {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITH | Sponsors</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Navbar/>
        <Logoscroll/>
        <Footer/>
        </>
    )
}