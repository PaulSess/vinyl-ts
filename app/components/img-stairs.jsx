import imgstairs from "../stylesheets/img-stairs.css"

export default function Imagestairs(props) {
  return (
    <>
      <section className="Imagestair-section">
        <div>
          <img className="stairimg1" style={{width:'350px'}} src="landingpage portrait1.jpg" alt="img step 1" />
          <p>Description</p>
        </div>
        <div>
          <img className="stairimg2" style={{width:'350px', marginTop:'150px'}} src="landingpage portrait2.jpg" alt="img step 2" />
          <p>Description</p>
        </div>
        <div>
          <img className="stairimg3" style={{width:'350px', marginTop:'300px'}} src="landingpage portrait3.jpg" alt="img step 3" />
          <p>Description</p>
        </div>
      </section>
    </>
  )
}
