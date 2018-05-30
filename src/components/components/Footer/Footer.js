import React, { Component } from "react";
import glamorous from "glamorous";
import { Div } from "glamorous";
// import {Link} from "react-router-dom";

const FooterMain = glamorous.div({
    position: 'absolute',
    bottom: 0,
    background: 'linear-gradient(#a8e063,#56ab2f)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 70,
    borderRadius: "3px 3px 0px 0px"
})

const FooterContents = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-around",
    fontSize: 20,
    textAlign: 'center',
    width: "100%",
    height: 70,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto'
})

const InfoBoxes = glamorous.div({
    textAlign:'left',
    width: 112,
    fontSize: 10,
    fontWeight: '400',
    alignItems:'flex-start'
})

class Footer extends Component {
    render() {
        return (
            <FooterMain>
                <FooterContents>
                    <div>FAQS</div>
                    <div>
                        <InfoBoxes>
                            <Div fontSize={14} fontWeight={'bold'}>Contact</Div>
                            <div>Tel: (XXX)-XXX-XXXX</div>
                            <div>Fax: (XXX)-XXX-XXXX</div>
                            <div>Email: email@email.com</div>
                        </InfoBoxes>
                    </div>
                    <div>
                        <InfoBoxes>
                            <Div fontSize={14} fontWeight={'bold'}>Address</Div>
                            <div>12345 Coding Street, Provo</div>
                            <div>Utah, 84606,</div>
                            <div>United States</div>
                        </InfoBoxes>
                    </div>
                </FooterContents>
            </FooterMain>
        )
    }
}

export default Footer;