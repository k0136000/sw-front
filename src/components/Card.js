import './Card.css'
import styled from '@emotion/styled';
import  axios  from 'axios';
import  Message  from './Message';
import Loading from './Loading/Loading'
import React, { useState } from 'react'


function Card({title, body,sheetId}) {
    const [loading,setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [sheet, setSheet] = useState([]);

    const fileDownload = async e => {
        const res = await axios({
            method: 'get',
            url: `http://swmusic.p-e.kr:8080/api/sheetmusics/${sheetId}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        console.log(res.data.result.data.pdfs[0].uniqueName);
        try {
            setLoading(true);
            await axios({
                method: 'get',
                url: `http://swmusic.p-e.kr:8080/api/sheetmusics/download/${res.data.result.data.pdfs[0].uniqueName}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                responseType: "blob"
            }).then(response => {
                var blobURL = URL.createObjectURL(response.data);
                const a = document.createElement("a")
                a.href = blobURL
                a.download = blobURL
                a.click()
                a.remove()
                window.URL.revokeObjectURL(blobURL);
                setLoading(false);
                return blobURL;
                })
                .catch(error => {
                    console.error(error);
                });
        }catch(err){
            if(err.response.status === 500) {
                setMessage('Three was a problem with the server');
                setLoading(false);
            } else {
                setMessage('파일 변환 에러. 변환하실 파일을 다시 확인해주세요.');
                setLoading(false);
            }
        }
    }
    return (
        <div className='card-container'>
            <div className="image-container">
                <Title>
                    <div className="cardTitle">
                        <h3>{title}</h3>
                    </div>
                </Title>
            </div>
            <div className="cardContent">
                <Body>
                    <div className="cardBody">
                        <p>{body}</p>
                    </div>
                </Body>
            </div>
            
            <div className="btn">
                <button
                    onClick={fileDownload}> 
                    다운로드 
                </button>
            <div className='row mt-5'>
                <div className="col-md-6 m-auto">
                    <img style = {{width: '100% '}} src="" id='myImage' alt='' />
                </div>
            </div>
            </div>
        </div>
    )
}

const Title = styled.div`
text-align:center;
margin-top:20px;
font-weight:bold;
font-size:30px;
`;

const Body = styled.div`
text-align:center;
margin-top:20px;
`;


export default Card