import footer from "../stylesheets/footer.css"

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div>
          <h1>Massive Footer</h1>
          <form action="">
          <label htmlFor="footerinput"><input id='footerinput' type="text" /><button type='submit'>Send</button></label>
          </form>
        </div>
        <div>
          <h3>Social media stuff</h3>
        </div>
        <div>
          <p>bottom line copy right stuff</p>
        </div>
      </footer>
    </>
  )
}
