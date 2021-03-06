import React, { Component } from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo-white.png';
export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Link to='/'>
          {/* <img src={logo} alt='your-guru-net' /> */}
        </Link>
        <section className='footer-container'>
          <div className='social-media-wrap'>
            <small className='website-right'>
              <p>
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                By Prasad varma
              </p>
            </small>
            <div className='social-ions'>
              <a
                className='social-icon-link'
                href='https://www.facebook.com/prasad.kovvuru'
                target='_blank'
                rel='noopener noreferrer'
                title='Facebook'>
                <FaFacebookSquare />
              </a>
              {/* <a
                className='social-icon-link'
                href='https://www.instagram.com/arvis_iljins/'
                target='_blank'
                rel='noopener noreferrer'
                title='Instagram'>
                <FaInstagramSquare />
              </a> */}
              <a
                className='social-icon-link'
                href='https://www.linkedin.com/in/dr-prasad-varma-kovvuru-2556221b/'
                target='_blank'
                rel='noopener noreferrer'
                title='LinkedIn'>
                <FaLinkedin />
              </a>
              {/* <a
                className='social-icon-link'
                href='https://github.com/YourGuruNet'
                target='_blank'
                rel='noopener noreferrer'
                title='Github'>
                <FaGithubSquare />
              </a> */}
            </div>
          </div>
        </section>
      </FooterContainer>
    );
  }
}
const FooterContainer = styled.div`
  margin-top: -15rem;
  background: var(--darkGradient);
  padding: 14rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 35%, 100% 0, 100% 100%, 0% 100%);

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    max-width: 140rem;
    margin: 0.5rem 0.5rem 0 0.5rem;
  }
  .social-media-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin: 0.5rem 0.5rem 0 0.5rem;
  }
  .website-right {
    color: var(--main-light);
    margin-bottom: 0.4rem;
    text-decoration: none;
    font-size: 1.5rem;
    border-top: solid 0.01rem var(--main-light);
    padding: 1.5rem;
  }
  .social-ions {
    border-top: solid 0.01rem var(--main-light);
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    gap:1.5rem;
    align-items: center;
    width: 10rem;
  }

  .social-icon-link {
    font-size: 3rem;
    color: var(--main-light);
    transition: var(--mainTransition);
  }
  .social-icon-link:hover {
    transform: translateY(-0.3rem) scale(1.1);
    color: var(--light-blue-2);
  }
  .social-icon-link:active {
    transform: translateY(0.3rem);
  }

  @media screen and (max-width: 820px) {
    .footer-link-wrapper {
      flex-direction: column;
    }

    .social-media-wrap {
      flex-direction: column;
    }
    .footer-container {
      padding: 1.5rem;
    }
    .website-right {
      text-align: center;
    }
    .footer-container {
      margin: 0;
    }
  }
`;
