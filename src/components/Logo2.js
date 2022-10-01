import React, { Component } from 'react';
import imgfile from '../img/logo2.png'
import { Button } from '@mui/material';
import styled from '@emotion/styled';

class Logo2 extends Component{
    render() {
        return(
            <Img>
                 <img className="logoimg" src={imgfile} />
            </Img>
        );
    }
};

const Img = styled(Button)`
    width: 100px;
    height: 50px;
`
export default Logo2;