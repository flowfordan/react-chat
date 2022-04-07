import React from "react";
import styles from './HomePage.module.css'
import { Routes, Route } from "react-router-dom";
import SearchPage from "../SearchPage";
import ContactsList from "../../ContactsList/ContactsList";
import Profile from "../../Profile/Profile";

const HomePage = () => {
    return(
        <div className={styles.layout}>

            <div className={styles.sidebar}>
                
                <div className={styles.profile}>
                <Profile />
                </div>

                <div className={styles.contacts}>
                <ContactsList />
                </div>

                <div className={styles.search}>
                    Find friends
                </div>
            </div>
            

            <div className={styles.desk}>
            <Routes>
                <Route path='/*' element={<div>Select dialog to start messaging</div>}/>
                <Route path='/search' element={<SearchPage />}/>
                <Route path='/dialog/*' element={<div>Dialog</div>}/>
            </Routes>
            </div>
        </div>
    )


};

export default HomePage