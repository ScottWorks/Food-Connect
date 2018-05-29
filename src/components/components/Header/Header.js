import React, { Component } from "react";
import glamorous from "glamorous";
import { Div } from "glamorous";
import Scone from "./../../../assets/images/scone.png";
import Hamburger from "./../../../assets/icons/hamburger.png"
// import {Link} from "react-router-dom";

const HeaderMain = glamorous.div({
    position: 'fixed',
    top: 0,
    background: 'linear-gradient(#56ab2f,#a8e063)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 70,
    borderRadius: "0px 0px 3px 3px"
})

const HeaderContents = glamorous.div({
    display:'flex',
    width: "90%",
    alignItems:'center',
    justifyContent: 'space-between'
})

const HeaderIMG = glamorous.img({
    height: 50,
    width:50
})

class Header extends Component{
    render(){
        return(
            <HeaderMain>
                <HeaderContents>
                    <HeaderIMG alt="scone" src={Scone}/>
                    <HeaderIMG alt="hamburger_menu" src={Hamburger}/>
                </HeaderContents>    
            </HeaderMain> 
        )
    }
}

export default Header;