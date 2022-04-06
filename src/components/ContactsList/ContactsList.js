import React from "react";
import s from './ContactsList.module.css'


const ContactsList = () => {

    const contacts = [
        {id: 1, name: 'Joka', surname: 'Jokovich', profileImg: ''},
        {id: 2, name: 'Boka', surname: 'Bokovich', profileImg: ''},
        {id: 3, name: 'Moka', surname: 'Mokovich', profileImg: ''},
        {id: 4, name: 'Koka', surname: 'Kokovich', profileImg: ''},
        {id: 5, name: 'Doka', surname: 'Dokovich', profileImg: ''},
        {id: 6, name: 'Hoka', surname: 'Hokovich', profileImg: ''},
        {id: 7, name: 'Voka', surname: 'Vokovich', profileImg: ''},
        {id: 8, name: 'Woka', surname: 'Wokovich', profileImg: ''},
    ]

    const contactList = contacts.map((contact) => {
        return(
            <li style={{border: '1px solid', padding: '20px 30px'}} key={contact.id}>{`${contact.name} ${contact.surname}`}</li>
        )
    })

    return(
        <>
            <ul className={s.list}>
                {contactList}
            </ul>
        </>
    )


};

export default ContactsList