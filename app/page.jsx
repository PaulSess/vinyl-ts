import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
// import Link from 'next/link';

import Navbar from './components/navbar';
import Herovideo from './components/herovideo';
import Landingpagebanner from './components/landingpage-banner';
import LittleDescription from './components/little-description-section';
import Imagestairs from './components/img-stairs';
import Featureslide from './components/feature-slide';
import Footer from './components/footer';

// import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Herovideo />
      <Landingpagebanner />
      <LittleDescription
        text="Looking for a eco-friendly way to play and record your vinyl collection? Our vinyl player is the perfect fit for any music lover who wants to reduce their environmental impact. With its retro design and crystal-clear sound quality, this player adds an artsy touch to any room. And with the ability to record your favorite vinyls, you won't have to sacrifice function for fashion. Get ready to rock out in style with our eco-friendly vinyl player - the perfect blend of form and function."
        image="https://i.pinimg.com/originals/3d/3e/0a/3d3e0a53c3da9e38986c755211fbe1a9.gif"
        />

      <Imagestairs
        description1="Description1"
        description2="Description2"
        description3="Description3"
        />

      <h1 style={{marginBottom:'100px', margin:'200px 0 50px 5%'}}>The Features</h1>
      <div style={{width:'100%', display:'flex', overflowX:'auto'}}>

        <Featureslide
          header="Feature"
          descriptionHeader="The description"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum error placeat necessitatibus magni quisquam inventore ullam, minima mollitia dicta neque veritatis, quis corrupti porro tenetur optio? Rerum, accusantium nihil."/>

      </div>

      <Footer />
    </>
  )
}
