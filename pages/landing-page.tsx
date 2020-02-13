import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import { colors } from '../styles'

const IntroText = () => (
    <div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p style={{ marginTop: 10 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consectetur!</p>
        <style jsx>
            {`
            div {
                margin: 7% 0 0 7%;
            
            }
            h1 {
              
                padding-top: 10px;
                text-align: center;
                margin:auto;
               font-weight:700;
            }
            
            p {
                font-size: 2.5vmin;
                max-width:70%;
                margin:auto;
                text-align: center;
            }

            @media only screen and (max-width: 600px) {
                h1 {
                    font-size: 6vw;
                    padding-top: 0;
                    max-width:100%;
                  
                }
                p {
                    font-size: 4vw;
                    max-width:100%;
                   

                }
            }
            `}
        </style>
    </div>
);

const Features = () => (
    <div>
        <h1 style={{ fontSize: 23 }}>Features</h1>
        <section>
            <h2 style={{ marginBottom: 20 }}>Intuitive Tag System</h2>
            <img className="img-fluid" src="https://picsum.photos/1000/600" alt="features__image-1" />
            <p style={{}} className="description">You can select how much a tag is actually demonstrated in the anime e.g how "romantic" or "comedic".</p>
        </section>
        <section>
            <h2 style={{ marginBottom: 20 }}>Based on mood</h2>
            <img className="img-fluid" src="https://picsum.photos/1000/600" alt="features__image-1" />
            <p style={{}} className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nisi.</p>
        </section>
        <p style={{ fontSize: 20 }}>...and more features !</p>
        <style jsx>
            {`
            div {
                padding: 10px;
                color: ${colors.primary};
                width: 100%;
                max-width: 500px;
                margin: auto;
              

            }
            h1 {
                text-align: center;
                color: #fff;
                padding-top: 30px;

            }
            section {
                background-color: #fff;
                padding: 25px;
                margin-top: 30px;
                border-radius: 10px;
                box-shadow: 2px 5px 10px #91919152;
            }
            h2 {
                text-align: center;
                font-size: 25px;
                font-weight:700;
            }
            img {
                display: block;
                margin: auto;
                max-height: 150px;
                max-width: 100%;
            }
            p {
                color: ${colors.primary};
                text-align: right;
                font-weight: 700;
                margin-top: 10px;
                padding: 10px 0;
            }
            .description {
                text-align: center;
                font-weight: 400;
                max-width:80%;
              
                margin: auto;
            }

            @media only screen and (max-width: 600px) {
                h1 {
                    font-size: 6vw;
                    padding-top: 0;
                }
                h2 {
                    font-size: 6vw;
                }
               p {
                   font-size:4vw
               }
            }
            `}
        </style>
    </div>
)


export default () => (
    <Layout>
        <Section>
            <IntroText />
        </Section>
        <Features />
        {/* <div style={{ width: '100%', maxWidth: 300 }}>
            <SubsForm />
        </div> */}
        <BottomPadding />
    </Layout>
)