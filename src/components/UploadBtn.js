import styled from '@emotion/styled';
import { Button } from '@mui/material';

const UploadBtn = ({ width, height, fontSize, isSubmitPossible, isSumbit, children, onClick }) => {
  return (
    <UploadBtnBox
      onClick={onClick}
      disabled={isSubmitPossible}
      width={width}
      heigh={height}
      fontSize={fontSize}
      type={isSumbit ? 'submit' : 'button'}
    >
      {children}
    </UploadBtnBox>
  );
};

const UploadBtnBox = styled(Button)`
  background-color: #6E7173;
  border-radius: 20px;
  color: #FFFFFF;
  width: ${props => (props.width ? props.width : '246px')};
  height: ${props => (props.height ? props.height : '95px')};
  font-size: ${props => (props.fontSize ? props.fontSize : '15px')};
  :hover {
    color: #343434;
    background-color: #ffffffcc;
  }
`;

export default UploadBtn;
