import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import PageContainer from '../../components/PageContainer';
import Buttons from '../../components/Button';
import FindBox from '../../components/FindBox'
import Card from '../../components/Card';
import Titles from '../../components/Titles';
import styled from '@emotion/styled';
import Sheet from '../../components/Sheet';
import Profile from '../../components/Profile';
import  axios  from 'axios';



const SheetList = () => {
  const [sheets, setSheets] = useState([]);
  

  const fetchAllSheets = async() => {
    try {
      const res = await axios.get(
        'http://swmusic.p-e.kr:8080/api/sheetmusics',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }

         })
        setSheets(res.data.result.data);
        return res.data.result.data
    } catch (e) {
      console.log('악보 리스트 패치 에러 발생',e)
    }
  };
  const onFilter = async e => {
    const data = await fetchAllSheets();
    console.log(data);
    // setReviews(data.filter(item => item.category === e.target.value));
  };

  useEffect(() => {
    fetchAllSheets();
  }, []);
  
  return (
    <div>
      <Navbar />
      <MainPageContainer>
      <ContentBox>
      <Titles
              width='464px'
              height='117px'
              fontSize='70px'
              fontWeight='900'
            >악보 리스트</Titles>
      {sheets.map(sheet => (
        <Card
          title={sheet.title}
          body={sheet.writer}
       />
      ))}
       </ContentBox>
       </MainPageContainer>
       <Profile />
       
    </div>
  )
} 


const ContentBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 75px;
`;

const MainPageContainer = styled.div`
  width: 100%;
  height: inherit;
  background: #EDEDED;
`;



export default SheetList
