import styled from '@emotion/styled';
import Logo from './Logo';

const Sign = ({ onSubmit, children }) => {
  return (
    <Wrap onSubmit={onSubmit}>
      <Logo />
      <>{children}</>
    </Wrap>
  );
};

const Wrap = styled.form`
  width: 781px;
  margin: 0 auto;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px 0;
`;

export default Sign;
