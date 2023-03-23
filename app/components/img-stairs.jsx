import imgstairs from "../stylesheets/img-stairs.css"

export default function Imagestairs(props) {
  return (
    <>
      <section className="Imagestair-section">
        <div>
          <img className="stairimg1" src="landingpage portrait1.jpg" alt="img step 1" />
          <p>{props.description1}</p>
        </div>
        <div>
          <img className="stairimg2" src="landingpage portrait2.jpg" alt="img step 2" />
          <p>{props.description2}</p>
        </div>
        <div>
          <img className="stairimg3" src="landingpage portrait3.jpg" alt="img step 3" />
          <p>{props.description3}</p>
        </div>
      </section>
    </>
  )
}
