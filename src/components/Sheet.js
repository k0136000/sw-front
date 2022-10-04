import { useState, useEffect } from 'react';
import Axios from 'axios';
import { AxiosError } from 'axios';

function Sheet() {
  const [todoList, setTodoList] = useState(null);


  const fetchData = async () => {
    console.log('api요청');
    try {
      const response = await Axios.get(`http://3.35.216.190/api/sheetmusics`, { withCredentials: true });
      setTodoList(response);
      console.log(todoList);
    } catch (e) {
      if(e instanceof AxiosError){
        console.log(e);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      {todoList}
    </div> 
  );
}

export default Sheet;