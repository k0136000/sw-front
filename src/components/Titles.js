import styled from '@emotion/styled';
import { fontWeight } from '@mui/system';

const Titles = ({ width, height, fontSize, isSubmitPossible,fontWeight, isSumbit, children, onClick }) => {
  return (
    <TitleBox
      onClick={onClick}
      disabled={isSubmitPossible}
      width={width}
      heigh={height}
      
      fontSize={fontSize}
      fontWeight={fontWeight}
      type={isSumbit ? 'submit' : 'button'}
    >
      {children}
    </TitleBox>
  );
};

const TitleBox = styled.div`

  margin-top: 30px;
  background-color: #EDEDED;
  text-align: center;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  width: ${props => (props.width ? props.width : '246px')};
  height: ${props => (props.height ? props.height : '95px')};
  font-size: ${props => (props.fontSize ? props.fontSize : '15px')};
`;

export default Titles;
