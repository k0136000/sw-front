import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Convert from './pages/Convert';
import SheetList from './pages/SheetList';
import SheetRegist from './pages/SheetRegist';
import Write from './pages/Write';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/convert' element={<Convert />} /> 
          <Route path='/sheet-list' element={<SheetList />} /> 
          <Route path='/sheet-regist' element={<SheetRegist />} />  
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/write' element={<Write />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
