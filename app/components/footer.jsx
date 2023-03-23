

export default function Footer() {
  return (
    <>
      <footer style={{height:'600px', backgroundColor:'grey', marginTop:'100px', display:'flex', justifyContent:'space-around'}}>
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
