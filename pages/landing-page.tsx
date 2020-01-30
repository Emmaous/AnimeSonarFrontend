import { BlueNavBar } from "../components/Navbars"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {buttonColor} from "../components/buttons-style";
import {buttonStyle} from "../components/buttons-style";


const IntroSection = () => {
    return <div>
        <section>
        <h1 style = {{fontSize: "33px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p style = {{fontSize: "17px"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, repellendus! Tenetur, illum nulla.
        </p>
        </section>
        </div>
}

const Features = () => {
    return <div>
        <section>
            <h1 style = {{fontSize: "33px"}} className ="text-center">
                Features
            </h1>
            <Row className ="mt-5">
                <div style= {{display: "inline-block"}} className = "mx-auto px-4">
                <img src="https://picsum.photos/500/300?random=2" alt="Intuitive-tag-system" className = "img-fluid"/>
                </div>
            </Row>
            <Row className ="mt-5">
                <div style= {{display: "inline-block"}} className = "mx-auto px-4">
                <img src="https://picsum.photos/500/300" alt="Based-on-Mood" className = "img-fluid mx-auto"/>
                </div>
            </Row>
        </section>
    </div>
}

const Footer = () => {
    return <div>
    <section className = "mt-5 pb-5">
        <p className ="text-right mx-auto" style = {{maxWidth: "500px",}}>...and more features!</p>
    </section>
    <section>
        <Row className = "justify-content-center">
        <Col md={5} lg={5}>
        <div className = "pb-5">
            <p>Get notified once we launch</p>
            <input type="email" name="" id="email-form"/>
            <button style = {{backgroundColor: buttonColor.backgroundColor, textDecoration: buttonStyle.textDecoration}}>SUBSCRIBE</button>
        </div>
        </Col>
        </Row>
    </section>
</div>
}

const myStyles = {
    color: "white",
    backgroundColor: "DodgerBlue",
    width: "100%",
    maxWidth: "1000px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
}

const LandingPage = () => {
    return <div style = {myStyles} className ="text-justify">
        <BlueNavBar/>
        <Row className = "mt-5 pb-5">
            <Col className = "offset-lg-1" lg={8} >
            <IntroSection/>
            </Col>
        </Row>
        <Features/>
        <Footer/>
    </div>

}


//className= "justify-content-md-center"
//.offset-lg-1 
//borderRadius: "0px 100px 100px 0px";
//borderTopLeftRadius
export default LandingPage