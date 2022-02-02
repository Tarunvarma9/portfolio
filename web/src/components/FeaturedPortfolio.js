import React, { Component } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import FeaturedCarousel from "./FeaturedCarousel";

export default class FeaturedPortfolio extends Component {
  render() {
    return (
      <Section>
        <Title title="ABOUT" white />
        <br/>
        <br/>
        <div style={{padding:'0px 150px'}}>
          <h3 style={{fontSize:'1.7rem',color:'#ccc',textAlign:'justify',fontFamily:'sans-serif'}}>
          A transformative transformation of healthcare is under way with digitalization as a driving force. This means great potential for those who invest right. But care is a complex area, where it can be difficult to see where digital innovations can make the greatest possible benefit. Transforming Health Care through digitalization is a development that we want to contribute to accelerating. That is why we have developed a Master Plan that can inspire entrepreneurs, intrapreneurs and innovators in both the public and private sectors to increase the rate of investment in profitable digital solutions.
          </h3>
        </div>
      </Section>
    );
  }
}

const Section = styled.div`
  z-index: 999;
  margin-top: -25rem;
  padding-top: 20rem;
  height: 50rem;
  display: block;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  background: var(--darkGradient);

  .row-title {
    margin-top: 0.5rem;
    justify-content: center;
    position: absolute;
    top: 0;
  }

  .center {
    max-width: 90vw;
    margin: 3rem auto;
    display: block;
  }

  @media screen and (max-width: 500px) {
    .center {
      width: 100vw;
      margin: 0 auto;
    }
  }

  .button-row {
    width: 100%;
    display: flex;
    padding-top: 2rem;
    justify-content: center;
  }
`;
