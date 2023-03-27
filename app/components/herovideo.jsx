import herovideo from "../stylesheets/herovideo.css"

export default function Herovideo() {
  //line underneath is needed for using document.   Should do the autoplaying, doesn't work tho
  // if (typeof window === 'object') {
  //   window.onload = function() {
  //     document.getElementById("herovideo").play();
  //     }
  // }
  return (
    // <iframe
    //   id='herovideo'
    //   src="https://drive.google.com/file/d/1fiOlOy5wMR5uA2CpYpf0xXbPv44XzLX4/preview"
    //   allow="autoplay"
    //   autoplay="autoplay" />
    <>
     {/* <iframe
      id='herovideo'
      src="#"
      title="YouTube video player"
      frameborder="0"
      autoplay="autoplay"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    /> */}
    </>
  )
}
