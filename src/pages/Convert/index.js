import React from 'react'
import Navbar from '../../components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

import FileUpload from '../../components/FileUpload';
import UploadBtn from '../../components/UploadBtn';
import Buttons from '../../components/Button';
import styled from '@emotion/styled';
import Titles from '../../components/Titles'
import Info from '../../components/Info';
import { Title } from '@mui/icons-material';
import { style } from '@mui/system';

const Convert = () => {
  return (
      <MainPageContainer>
        <Navbar />
        
        <Content>
          <ContentBox>
            <Titles
              width='464px'
              height='117px'
              fontSize='70px'
              fontWeight='900'
            >악보 변환</Titles>
            <Titles
              width='1500px'
              height='117px'
              fontSize='50px'
              fontWeight='700'
            >기존 악보에서 계이름을 추가한 이미지로 변환</Titles>
            <Info />
            <FileUpload />
            <ButtonBox>
              <UploadBtn 
                width='464px'
                height='117px'
                fontSize='50px'
                >
                  변환 시작하기
                </UploadBtn>
            </ButtonBox>
          </ContentBox>
        </Content>
      </MainPageContainer>
  )
};

const MainPageContainer = styled.div`
  width: 100%;
  height: inherit;
  background: #EDEDED;
`;
const ButtonBox = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 17px;
`;
const Content = styled.div`
width: 100%;
height: inherit;
display: flex;
align-items: center;
justify-content: center;
`;

const ContentBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 75px;
`;

export default Convert
