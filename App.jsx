import React from 'react';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './SignUpPage';
import HomePage from './HomePage';

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}