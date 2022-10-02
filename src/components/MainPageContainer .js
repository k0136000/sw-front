import React from 'react';
import styled from '@emotion/styled';

const MainPageContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.div`
  width: 100%;
  height: inherit;
  background: #CCCCCC;
`;

export default MainPageContainer;
