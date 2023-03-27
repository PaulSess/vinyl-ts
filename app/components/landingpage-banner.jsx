import landingpagebanner from "../stylesheets/landingpage-banner.css"

export default function Landingpagebanner() {
  return (
    <>
      <section className="landingpagebanner-section">
        <img className="banner-image" src="hero-img.png" alt="the vinyl player"/>
        {/* <img style={{position:'absolute', zIndex:'-1', left:'-20px', top:'160px'}} src="product-blob.svg" alt="bg blob" /> */}
        <div className="banner-text-div">
          <h1 className="banner-primary-header">Tomer's Vinyl re-recorder<div className="banner-bgstyle" id='headerbackground'></div></h1>
          <h1 className="banner-seondary-header">Unleash the power of nostalgia with our vinyl player
          <br /> - play your old records and create new ones to keep the music alive!</h1>
        </div>
      </section>
    </>
  )
}
