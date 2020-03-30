import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';

const Dialogs = (props) => {

    let dialogs = [
        { id: 0, name: 'Dimych' },
        { id: 1, name: 'Vitaliy' },
        { id: 2, name: 'Alex' },
    ]

    let messages = [
        { id: 1, message: "Hi" },
        { id: 0, message: 'How is your video?' },
        { id: 2, message: "Hi 23" },
    ]

    let dialogElements = dialogs
        .map(d_ => <DialogItem name={d_.name} id={d_.id} />)


    let messagesElements = messages
        .map(m_ => <Message message={m_.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{
                dialogElements} 
            </div>

            <div className={s.messages}>{
                messagesElements} 
            </div>

        </div>
    )
}

export default Dialogs;