import featureslide from "../stylesheets/feature-slide.css"

export default function Featureslide(props) {

  return (
    <>
        <div className="featurediv">
          <img className="featureimg" src="product.png" alt="featrue img"/>
          <div className="featuretxt-carousell">
            <h2>{props.header}</h2><br></br>
            <h4>{props.descriptionHeader}<br></br>
                {props.description}
            </h4>
          </div>
        </div>
    </>
  )
}
