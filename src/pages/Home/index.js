import styled from '@emotion/styled';
import Buttons from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';

const Home = () => {
    const navigate = useNavigate();
  
    return (
      <PageContainer>
        <Content>
          <ContentBox>
            <Logo />
            <Buttons
              width='464px'
              height='117px'
              fontSize='50px'
              onClick={() => {
                navigate('/convert');
              }}
            >
              악보 변환 페이지
            </Buttons>
            <Buttons
              width='464px'
              height='117px'
              fontSize='50px'
              onClick={() => {
                navigate('/sign-in');
              }}
            >
              악보 리스트 페이지
            </Buttons>
          </ContentBox>
        </Content>
      </PageContainer>
    );
  };

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

export default Home;
