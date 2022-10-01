import React from 'react';
import styled from '@emotion/styled';

const PageContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.div`
  width: 100%;
  height: inherit;
  background: #111111;
`;

export default PageContainer;
