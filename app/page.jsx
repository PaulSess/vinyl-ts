import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import Navbar from './components/navbar';
import Herovideo from './components/herovideo';
import Imagestairs from './components/img-stairs';
import Featureslide from './components/feature-slide';
import Footer from './components/footer';

// import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,500;1,700;1,900&family=Taviraj:ital,wght@0,200;0,300;0,400;0,600;1,100;1,200;1,300;1,400&display=swap" rel="stylesheet" />
      </Head> */}

      <Navbar />
      <Herovideo />

      <section style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'12%'}}>
        <img style={{width:'400px', marginRight:'100px'}} id='pageproduct' src="hero-img.png" alt="the vinyl player" />
        {/* <img style={{position:'absolute', zIndex:'-1', left:'-20px', top:'160px'}} src="product-blob.svg" alt="bg blob" /> */}
        <div style={{marginTop:'2%'}}>
          <h1 style={{marginBottom:'80px', fontFamily:'Gloock', fontSize:'60px', color:'whitesmoke', textShadow:'1px 1px 2px orange'}}>Tomer's Vinyl re-recorder<div id='headerbackground'></div></h1>
          <h1 style={{marginLeft:'30px', color:'whitesmoke', textShadow:'1px 1px 2px orange'}}>Unleash the power of nostalgia with our vinyl player
          <br /> - play your old records and create new ones to keep the music alive!</h1>
        </div>
      </section>

      <section style={{display:'flex', justifyContent:'space-around', marginTop:'20%', marginBottom:'100px'}}>
        <p style={{marginTop:'auto', marginRight:'10%', marginBottom:'auto', marginLeft:'10%', fontFamily:'Taviraj', fontWeight:'300', fontSize:'19px', color:'#C8B6A6', textShadow:'1px 1px 2px black'}}>Looking for a eco-friendly way to play and record your vinyl collection? Our vinyl player is the perfect fit for any music lover who wants to reduce their environmental impact. With its retro design and crystal-clear sound quality, this player adds an artsy touch to any room. And with the ability to record your favorite vinyls, you won't have to sacrifice function for fashion. Get ready to rock out in style with our eco-friendly vinyl player - the perfect blend of form and function.</p>
        <img style={{width:'340px', marginRight:'10%', borderRadius:'30px 5px 30px 5px', boxShadow:'0 0 0px 5px #8D7B68', opacity:'80%'}} src="https://i.pinimg.com/originals/3d/3e/0a/3d3e0a53c3da9e38986c755211fbe1a9.gif" alt="logo" />
      </section>

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
