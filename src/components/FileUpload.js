import React, { Fragment, useState } from 'react'
import  Message  from './Message';
import axios from 'axios'
import Loading from './Loading/Loading';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [loading,setLoading] = useState(false);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        try {
            setLoading(true);

            const res = await axios.post('http://52.79.222.1/convert/upload/',formData, {
            });
            console.log(res.data)
            const { fileName, filePath } =res.data;

            setUploadedFile({fileName,filePath});
            console(fileName,filePath)
            setMessage('File Uploaded');
            setLoading(false);
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
    </Fragment>
  )
}

export default FileUpload
