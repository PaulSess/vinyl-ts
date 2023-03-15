import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomer's Vinyl</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico.svg" />
      </Head>
      <nav className='navbar' style={{display: 'flex'}}>
        <img src="tomer.jpg" alt="tomer logo" width={100} height="auto" />
        <ul className='nav-list'>
          <a className='nav-link' href="/productshow">The Product</a>
          <a className='nav-link' href="/about">About</a>
          <a className='nav-link' href="/manual">Manual</a>
        </ul>
      </nav>
    </>
  )
}
