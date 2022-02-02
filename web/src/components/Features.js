import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { FaCheck } from "react-icons/fa";
import image1 from "../images/app.jpeg";
import image2 from "../images/app2.jpg";
import image3 from "../images/app3.jpg";
import { PortfolioConsumer } from "../Context";
const offers = [
  {
    title: "Education",
    about: [
      "Andhra University (1995-1998), B.SC . Biotechnology",
      "Madras University (1998-2000), M.SC . Biochemistry ",
      "University at Albany, SUNY - Post Doctoral Research Studies . Oncology and Cancer Biology (2010-2013)",
    ],

    message: "Education ",
  },
  {
    title: "Experience",
    about: [
      "Dr Reddy's Drug Discovery Research Foundation Jan 2002 - Oct 2005. 3 years 10 months",
      "University College Cork, Ireland(UCC) - PhD Oct 2006 - Oct 2010. 4 years 1 month",
      "Post Doctoral Fellowship, University at Albany Feb 2011 - Jul 2013. 2 years 6 months",
      "City University Hong Kong (Senior Research Associate) Jan 2014 - Dec 2015 . 2 years",
      "UpStart - Software house for StartUps (StartUp Manager) Nov 2019 - Dec 2020 . 1 year 2 months ",
      "C-STAR Digital (Director of Operations) Dec 2020 - Oct 2021 . 11 months",
    ],

    message: "Experience",
  },
  {
    title: "Skills",
    about: [
      "Molecular Biology",
      "Biochemistry",
      "Cell Culture",
      "Molecular Cloning",
      "Western Cloning",
      "Biotechnology",
      "Life Sciences",
      "Cell Biology",
      "Lifesciences",
      "Tissue Culture",
      "SDS-PAGE",
      "DNA extraction",
      "Purification",
      "Flow Cytometry",
      "Gel Electrophoresis",

    ],
    price: "25 euros/h",
    message: "Skills & Eendorsements",
  },
];

const Features = () => {
  return (
    <PortfolioConsumer>
      {(value) => (
        <Section>
          {/* <Title title="I can help you if you search for" /> */}
          <div className="row">
            {offers.map((item, index) => {
              return (
                <div className="col-1-of-3" key={index}>
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div
                        className={`card__picture card__picture--${index}`}></div>
                      <h4 className="card__heading">
                        <span
                          className={`card__heading--span card__heading--span--${index}`}>
                          {item.title}
                        </span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          {item.about.map((item, id) => (
                            <li>
                              {/* <span style={{ paddingRight: "1rem" }}>
                              
                              </span> */}
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div
                      className={`card__side card__side--back card__side--back--${index}`}>
                      <div className="card__cta">
                        <div className="card__price--box">
                          <br/>
                          <p className="card__price--only">{item.message}</p>
                          {/* <p className="card__price--value"> {item.price}</p> */}
                        </div>
                        {/* <button
                          className="feature_button"
                          onClick={() => {
                            value.openContactModal();
                          }}>
                          Contact me
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      )}
    </PortfolioConsumer>
  );
};

export default Features;

const Section = styled.div`
  background-color: var(--color-grey-light-1);
  padding: 30rem 0;
  margin-top: -28rem;
  font-weight: 700;
  @media screen and (max-width: 950px) {
    margin-top: -20rem;
    padding-top: 20rem;
    padding-bottom: 26rem;
  }
  .row {
    max-width: 114rem;
    margin: 0 auto;
    padding: 2rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
    grid-gap: 5rem;
  }
  @media screen and (max-width: 450px) {
    .row {
      grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    }
  }
  @media screen and (max-width: 320px) {
    .row {
      grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    }
  }
  .card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 70rem;
  }
  .card__side {
    height: 70rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    backface-visibility: hidden;
  }
  .card__side--front {
    background-image: linear-gradient(
      to right bottom,
      rgba(162, 221, 246),
      rgba(22, 170, 233)
    );
  }
  .card__side--back {
    transform: rotateY(180deg);
  }
  .card__side--back--0 {
    background: linear-gradient(to right bottom, #fcb92a, #ff8901);
  }
  .card__side--back--1 {
    background-image: linear-gradient(to right bottom, #a2ddf6, #16aae9);
  }
  .card__side--back--2 {
    background-image: linear-gradient(to right bottom, #75fd53, #1e8b03);
  }
  // .card:hover .card__side--front {
  //   transform: rotateY(-180deg);
  // }
  // .card:hover .card__side--back {
  //   transform: rotateY(0);
  // }
  .card__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: color;
    -webkit-clip-path: polygon(
      100% 0,
      100% 77%,
      75% 100%,
      40% 88%,
      0 100%,
      0 0
    );
    clip-path: polygon(100% 0, 100% 77%, 75% 100%, 40% 88%, 0 100%, 0 0);
  }
  .card__picture--0 {
    background: linear-gradient(to right bottom, #fcb92a, #ff8901),
      url(${image1}) center/cover no-repeat;
  }
  .card__picture--1 {
    background: linear-gradient(to right bottom, #a2ddf6, #16aae9),
      url(${image2}) center/cover no-repeat;
  }
  .card__picture--2 {
    background: linear-gradient(to right bottom, #75fd53, #1e8b03),
      url(${image3}) center/cover no-repeat;
  }
  .card__heading {
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 400;
    text-align: right;
    position: absolute;
    top: 15rem;
    right: 2rem;
    width: 50%;
    color: #fff;
  }
  .card__heading--span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .card__heading--span--0 {
    background: linear-gradient(
      to right bottom,
      rgba(252, 185, 42, 0.9),
      rgba(255, 137, 1, 0.9)
    );
  }
  .card__heading--span--1 {
    background: linear-gradient(
      to right bottom,
      rgba(162, 221, 246, 0.9),
      rgba(22, 170, 233, 0.9)
    );
  }
  .card__heading--span--2 {
    background: linear-gradient(
      to right bottom,
      rgba(117, 253, 83, 0.9),
      rgba(30, 139, 3, 0.9)
    );
  }
  .card__details {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 3rem;
  }
  .card__details ul {
    list-style: none;
    margin: 0 auto;
    text-align: left;
    width: 70%;
  }
  .card__details ul li {
    padding-bottom: 0.8rem;
  }
  .card__details ul li:not(:last-child) {
    border-bottom: 0.01rem solid #f0ecec;
  }
  .card__details ul li span {
    color: rgba(22, 170, 233, 0.7);
  }
  .card__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90%;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.1);
    clip-path: polygon(
      50% 0%,
      100% 11%,
      100% 43%,
      94% 78%,
      68% 100%,
      32% 100%,
      6% 78%,
      0% 43%,
      0 10%
    );
  }
  .card__price--box {
    margin-top: 2rem;
    text-align: center;
    color: var(--main-light);
  }
  .card__price--only {
    margin-top: 6rem;
    text-transform: uppercase;
    font-size: 2.8rem;
    font-weight: 300;
  }
  .card__price--value {
    font-size: 5rem;
    font-weight: 100;
    margin-bottom: 3rem;
  }

  .feature_button {
    color: var(--main-light);
    transition: var(--mainTransition);
    background-color: transparent;
    display: inline-block;
    text-decoration: none;
    letter-spacing: var(--mainSpacing);
    padding: 1rem 2rem;
    border: 0.3rem solid var(--main-light);
    transition: 0.2s;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
    outline: none;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 2rem;
  }
  .feature_button:hover {
    background: var(--main-light);
    color: var(--light-blue);
    border-color: var(--light-blue);
    box-shadow: 0 0 1rem var(--light-blue), 0 0 4rem var(--light-blue),
      0 0 8rem var(--light-blue);
  }
  .feature_button:active {
    box-shadow: 0 0 0.5rem var(--light-blue), 0 0 3rem var(--light-blue),
      0 0 5rem var(--light-blue);
  }
`;
