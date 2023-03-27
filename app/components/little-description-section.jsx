import littledescritionsection from "../stylesheets/little-description-section.css"

export default function LittleDescription(props) {
  return (
    <section className="littledescriptioinsec">
      <p className="description-text">{props.text}</p>
      <img className="description-image" src={props.image} alt="logo" />
    </section>

  )
}
