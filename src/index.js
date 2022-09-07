import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import AllStudents from './AllStudents';
import StudentDetails from './studentDetails';
import AddStudent from './addEditStudent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='allstudents' element={<AllStudents />}></Route>
        <Route path='students/:id' element={<StudentDetails />}></Route>
        <Route path='addstudent' element={<AddStudent />}></Route>

      </Route>
    </Routes >
  </BrowserRouter >
);

reportWebVitals();
