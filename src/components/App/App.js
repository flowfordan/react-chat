import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPage, HomePage } from '../pages/index'
import Header from '../Header/Header';


function App() {
  return (
    <div className={styles.wrapper}>

        <Header className={styles.header}/>



        <BrowserRouter>
          <Routes>
            <Route path='/start' element={<div className={styles.body}>Start page</div>}/>
            <Route path='/login' element={<AuthPage className={styles.body}/>} />
            <Route path='/signup' element={<AuthPage className={styles.body}/>} />
            <Route path='/*' element={<HomePage className={styles.body}/>} />
          </Routes>
        </BrowserRouter>
 

    </div>
  );
}

export default App;
