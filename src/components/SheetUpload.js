import React, { Fragment, useState } from 'react'
import  Message  from './Message';
import axios from 'axios'
import Loading from './Loading/Loading';
import { Base64 } from 'js-base64';
import btoa from 'btoa';
var contentType = require('content-type')

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [loading,setLoading] = useState(false);
    const [img,setImg] = useState('');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const  onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        try {
            setLoading(true);
            await axios({
                method: 'post',
                url: 'http://52.79.222.1/convert/upload/',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                responseType: "blob"
              })
                .then(response => {
                    var blobURL = URL.createObjectURL(response.data);
                    var image = document.getElementById("myImage");
                    image.onload = function() {
                        URL.revokeObjectURL(this.src); // release the blob URL once the image is loaded
                    }
                    image.src = blobURL;
                    setLoading(false);
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
    <Fragment>
        {message ? <Message msg={message} /> : null}
        {loading ? <Loading /> : null}
        <form onSubmit={onSubmit}>
            <div className='custom-file mb-4'>
                <label htmlFor="customFile" clasName="custom-file-label">
                    {filename}
                </label>
                <input className='custom-file-input' type="file" id="customFile" onChange={onChange} />
            </div>

            <input 
                type="submit" 
                value="Upload" 
                className="btn btn-primary btn-block mt-4" 
            />
        </form>
        {uploadedFile ?( 
            <div className='row mt-5'>
                <div className="col-md-6 m-auto">
                    <img style = {{width: '100% '}} src="" id='myImage' alt='' />
                </div>
            </div>
    ) : null}
    </Fragment>
  )
}

export default FileUpload
