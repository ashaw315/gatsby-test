import * as React from 'react'   
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

function IndexPage() {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>This is made with Gatbsy doing tutorial. Lets see what it looks like.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/teeth.png"
      />
    </Layout>
  
  )
}

export default IndexPage;
