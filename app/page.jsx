import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import Navbar from './components/navbar';
import Imagestairs from './components/img-stairs';
import Featureslide from './components/feature-slide';
import Footer from './components/footer';

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

      <Navbar />
      {/* <iframe
        id='herovideo'
        src="https://drive.google.com/file/d/1fiOlOy5wMR5uA2CpYpf0xXbPv44XzLX4/preview"
        width="100%" height="100%" allow="autoplay"
        style={{position:'absolute', top:'0'}}>
      </iframe> */}
      {/* <script type="text/javascript">
        const herovideo = document.getElementById('herovideo');
      </script> */}


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

      <Imagestairs />

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
