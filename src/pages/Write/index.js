  import styled from '@emotion/styled';
  import {
    Container,
  } from '@mui/material';
  import axios from 'axios';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';

  const Write = () => {
    const navi = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [file, setFile] = useState('');


    const onChange = e => {
      setFile(e.target.files[0]);
    };

    const onChangeTitle = e => {
      setTitle(e.target.value);
    };

    const onChangeAuthor = e => {
      setAuthor(e.target.value);
    };

    const addSheet = async data => {
      data.preventDefault();
      const formData = new FormData();
      console.log(author);
      formData.append('title',title);
      formData.append('writer',author);
      console.log(formData.get('images'));
      console.log(formData.get('title'));
      console.log(formData.get('writer'));

      
      const value = [{
        title: title.subject,
        writer: author.author,
      }]

      try {
        for (let key of formData.values()) {
          console.log(key);
        }
        const req = await axios.post(
          'http://swmusic.p-e.kr:8080/api/sheetmusics',
          {
            //formData
            'title':formData.get('title'),
            'writer':formData.get('writer'),
            'images':formData.get('images')
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
        .then(res => {
          console.log(res.data);
          alert("업로드 완료!");
          navi('/sheet-list');
        });

      }catch(err){
        if(err.response.status === 500) {
            console.log('Three was a problem with the server');
            
        } else {
            console.log(err);
            console.log('파일 업로드 에러. 업로드하실 파일을 다시 확인해주세요.');
            
        }
      }
    }
    
    return (
      <WriteContainer>
        <InputDiv>
          <p>제목</p>
          <input
            name='subject'
            type='text'
            value={title}
            placeholder='여기를 눌러 작성하세요'
            onChange={onChangeTitle}
          ></input>
        </InputDiv>
        <InputDiv>
          <p>작곡가</p>
          <input
            name='subject'
            type='text'
            placeholder='여기를 눌러 작성하세요'
            onChange={onChangeAuthor}
          ></input>
        </InputDiv>
        <InputDiv>
          <p>파일</p>
          <form onSubmit={addSheet}>
              <div className='custom-file mb-4'>
                  
                  <input className='custom-file-input' type="file" id="customFile" onChange={onChange} />
              </div>

              <input 
                  type="submit" 
                  value="업로드" 
                  className="btn btn-primary btn-block mt-4" 
              />
          </form>
        </InputDiv>
      </WriteContainer>
    );
  };

  const WriteContainer = styled(Container)`
    margin-top:400px;
    background-color: #EDEDED;
    width: 500px;
    height: 200px;
  `;

  const InputDiv = styled.div`
    display: flex;
    p {
      width: 100px;
      padding-top: 20px;
      margin-left: 0in;
    }
    input {
      width: 250px;
      margin-top: 10px;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid black;
    }
    textarea {
      resize: none;
      border: none;
      margin-top: 20px;
    }
  `;

  export default Write;
