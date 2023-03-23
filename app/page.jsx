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
      <Navbar />
      <Herovideo />

      <section style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'18%'}}>
        <img style={{width:'400px', marginRight:'100px'}} id='pageproduct' src="product.png" alt="the vinyl player" />
        <img style={{position:'absolute', zIndex:'-1', left:'-20px', top:'160px'}} src="product-blob.svg" alt="bg blob" />
        <div>
          <h1 style={{marginBottom:'100px'}}>Tomer's Vinyl LifeHack<div id='headerbackground'></div></h1>
          <h2 style={{marginLeft:'30px'}}>Short catchy sentence about the mission here!</h2>
        </div>
      </section>

      <section style={{display:'flex', justifyContent:'space-around', marginTop:'20%', marginBottom:'100px'}}>
        <p style={{marginLeft:'10%', marginRight:'10%', marginTop:'120px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore animi voluptatem quod fugiat commodi, sed natus excepturi repellat eligendi placeat accusantium quos modi ipsam iste repellendus inventore repudiandae libero vitae!</p>
        <img style={{width:'400px', marginRight:'10%'}} src="product.png" alt="logo" />
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
