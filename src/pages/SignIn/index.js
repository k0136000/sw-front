import Sign from '../../components/Sign';
import Inputs from '../../components/Inputs';
import PageContainer from '../../components/PageContainer';
import Buttons from '../../components/Button';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navagate = useNavigate();
  const initForm = {
    username: '',
    password: '',
  };

  const [form, setForm] = useState(initForm);
  const { username, password } = form;

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    try {
      const req = await axios.post('http://swmusic.p-e.kr:8080/api/sign-in', {
        username: form.username,
        password: form.password,
      });
      localStorage.setItem('token', req.data.accessToken);
      navagate('/convert');
      return req.data;
    } catch (e) {
      if (e.request.status === 401) {
        alert('일치하는 회원이 없습니다.');
      }
      throw new Error(`로그인 에러 ${e}`);
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    login();
  };

  return (
    <PageContainer>
      <Sign onSubmit={onSubmit}>
        <Inputs
          name='username'
          value={username}
          onChange={onChange}
          placeholder='아이디'
          styletype='form'
        />
        <Inputs
          name='password'
          value={password}
          onChange={onChange}
          placeholder='비밀번호'
          styletype='form'
        />
        <ButtonBox>
          <Buttons isSumbit>로그인</Buttons>
          <Buttons onClick={() => navagate('/sign-up')}>회원가입</Buttons>
        </ButtonBox>
      </Sign>
    </PageContainer>
  );
};

const ButtonBox = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 17px;
`;

export default SignIn;
