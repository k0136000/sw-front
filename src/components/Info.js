import React, { Component } from 'react';
import imgfile from '../img/info.png'
class Info extends Component{
    render() {
        return(
            <div className="Info">
                 <img className="InfoImg" src={imgfile} />
            </div>
        );
    }
}

export default Info;