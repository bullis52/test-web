import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/header";
import TestAsigment from "./components/test-asigment";
import WorkingWithGet from "./components/working-with-get-request";
import WorkingWithPost from "./components/working-with-post-request";

function App() {
  return (
    <>
        <Header/>
        <div className='background-grey'>
            <div className="container">
               <TestAsigment/>
               <WorkingWithGet/>
               <WorkingWithPost/>
            </div>
        </div>
    </>
  );
}

export default App;
