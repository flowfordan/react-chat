import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPage, HomePage } from '../pages/index'
import Header from '../Header/Header';


function App() {
  return (
    <div className={styles.wrapper}>

        <div className={styles.header}>
          <Header />
        </div>
        


        <div className={styles.body}>
        <BrowserRouter>
          <Routes>
            <Route path='/start' element={<div>Start page</div>}/>
            <Route path='/login' element={<AuthPage />} />
            <Route path='/signup' element={<AuthPage />} />
            <Route path='/*' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        </div>
 

    </div>
  );
}

export default App;
