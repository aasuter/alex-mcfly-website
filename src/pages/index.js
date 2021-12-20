import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/index.css';

// markup
const IndexPage = () => {
  return (
    <main>




        <div id='content'>

          <div id='logo'><StaticImage src="../images/logo.png" alt="logo" /></div>

          <div id='discography'>
            <div  id="text"><StaticImage src="../images/organic.png" alt="socials"/></div>
            <div  id="text"><StaticImage src="../images/letitbe.png" alt="socials"/></div>
          </div>

          <div  id="text"><StaticImage src="../images/socials.png" alt="socials"/></div>

          <div id='sm-icons'>
            
            <div><a href="https://open.spotify.com/artist/6JEfYIOuFNhqYjVh5icVop?si=TxMMZk2sS_mQMTyTQW_hdA" target="_blank" rel="noreferrer"><StaticImage src="../images/spotify.png" alt="spotify"/></a></div>
            <div><a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><StaticImage src="../images/youtube.png" alt="youtube"/></a></div>
            <div><a href="https://www.instagram.com/alexander.mcfly/" target="_blank" rel="noreferrer"><StaticImage src="../images/instagram.png" alt="instagram"/></a></div>
            <div><a href="https://www.beatstars.com/" target="_blank" rel="noreferrer"></a><StaticImage src="../images/beatstars.png" alt="beatstars"/></div>
          </div>
          
        </div>

        

    </main>
  )
}

export default IndexPage
