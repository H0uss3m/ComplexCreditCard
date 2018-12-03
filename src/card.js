import React,{Component} from 'react';
import {Container,Row,Col}from'reactstrap';
import './card.css';
const renderCardNumber = number => {
    let resultStr = ''
    for(let i =0; i < number.length; i += 4) {
      resultStr += number.slice(i, i + 4) + ' '
    }
    return (resultStr.trim().padStart(19, '*'))
   }
   const renderValidThru = number => {
    number = number.toString()
    return number.slice(0, 2) + '/' + number.slice(2)
   
   }
class Card  extends Component {
    render() {     
    return ( 
        <Container className='CreditCard'>
        <Row className="title">
              <h1>CREDIT CARD</h1>
        </Row>
        <Row className="creditCardHeader">
            <Col className="puce">
                <img src={require('./images/puce.png')} alt="puceLogo"/>
            </Col>
            <Col style={{marginLeft: '17%',fontSize:'27px'}}className="creditCardNumber">
                <p><mark>{renderCardNumber(this.props.number)}</mark></p>
            </Col>
        </Row>
        <Row style={{display:'flex'}}>
        <Col className="mainInfos">
          <h1>5422</h1>
          <h1>{this.props.name.toUpperCase()}</h1>
        </Col>
        <Col className="creationDate">  
            <h4>VALID</h4>
            <h4> THRU</h4>
        </Col>
        <Col>
            <p>MONTH/YEAR</p>
            <h1>{renderValidThru(this.props.validTHRU)}</h1>
        </Col>
        
        <Col className="logos">
            <img
              src={require("./images/masterCard.png")}
              alt="mastercardLogo"
            />
        </Col>
        <Col>
            <img src={require("./images/visa.png")} alt="visaLogo" />
        </Col>
        </Row>
        </Container>
     );
    }
}
 
export default Card;