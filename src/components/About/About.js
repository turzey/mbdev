import React from "react"
import styled from "styled-components"
import Button from "../../components/Button/Button"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getImages = graphql`
  query AboutImage {
    fluid: file(relativePath: { eq: "macbook-iphone.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const TitleArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }

  p {
    margin-top: 0;
    font-size: var(--h2);
    line-height: 1.3;
    font-weight: 300;
    margin-bottom: 2.125rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: var(--h1);
  line-height: 1.25;

  @media (min-width: 1200px) {
    margin-bottom: 15px;
  }
`

const ImgArea = styled.div`
  grid-column: 1 / 4;

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const About = props => {
  const queryResponse = useStaticQuery(getImages)

  return (
    <section
      className={
        props.largePadding ? "section-padding--large" : "section-padding"
      }
    >
      <Grid>
        <TitleArea>
          <Title>
            Working with GatsbyJS, React, and WordPress to deliver clean, modern
            web applications
          </Title>
          <p>
            Focusing on front-end development using modern Javascript libraries
            to create engaging applications that work great across all devices.
          </p>
          <Button text="View Projects" link="/projects" />
        </TitleArea>
        <ImgArea>
          <Img
            fluid={queryResponse.fluid.childImageSharp.fluid}
            alt="Macbook and iPhone"
          />
        </ImgArea>
      </Grid>
    </section>
  )
}

export default About
