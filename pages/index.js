import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link href='/team' passHref>
        Team
      </Link>
      <br/>
      <Link href='/sponsors' passHref>
        Sponsors
      </Link>
    </div>
  )
}

