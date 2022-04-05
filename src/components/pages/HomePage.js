import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import ContactsList from "../ContactsList/ContactsList";

const HomePage = () => {
    return(
        <>
        <div>
            This is Home Page
        </div>
        <div>
            This is place for Sidebar with Profile and Contacts
        </div>
        <div>
            <ContactsList />
        </div>
        <div>
        <Routes>
            <Route path='/*' element={<div>Select dialog to start messaging</div>}/>
            <Route path='/search' element={<SearchPage />}/>
            <Route path='/dialog/*' element={<div>Dialog</div>}/>
        </Routes>
        </div>
        </>
    )


};

export default HomePage