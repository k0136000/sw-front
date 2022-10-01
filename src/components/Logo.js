import React, { Component } from 'react';
import imgfile from '../img/logo.png'
class Logo extends Component{
    render() {
        return(
            <div className="logo">
                 <img className="logoimg" src={imgfile} />
            </div>
        );
    }
}

export default Logo;