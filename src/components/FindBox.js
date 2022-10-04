import PageContainer from './PageContainer';
import styled from '@emotion/styled';
import { Children, useState } from 'react';
import Inputs from './Inputs';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ReviewBox = ({ onFilter, children }) => {
  const navigate = useNavigate();
  const [alignment, setAlignment] = useState('');
  const [searchText, setSearchText] = useState('');

  const onInputChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <MainPageContainer>
      <Wrap>
        <SideBar>
          <Inputs
            name='searchInstructor'
            value={searchText}
            onChange={onInputChange}
            styletype=''
          />
        </SideBar>
        <ChildBox>{children}</ChildBox>
      </Wrap>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  width: 100%;
  height: inherit;
  background: #EDEDED;
`;

const Wrap = styled.div`
  display: flex;
  padding: 30px;
`;

const SideBar = styled.div`
  width: 420px;
`;

const ChildBox = styled.div``;

export default ReviewBox;
