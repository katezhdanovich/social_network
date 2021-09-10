import React from 'react';
import Dialog from './dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './message/Message';

const Dialogs = (props) => {

    let dialog_elements = props.messages_page.data_dialogs.map(d => <Dialog name={d.name} id={d.id} />)
    let message_elements = props.messages_page.data_messages.map(m => <Message text={m.text} sender={m.sender} />)

    let newMessageElement = React.createRef()
    
    let onAddMessage = () => {
        props.addMessage()
    }

    let onTextChange = () => {
        let text = newMessageElement.current.value
        props.textChange(text)
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialog_elements}
            </div>
            <div className={s.messages_items}>
                {message_elements}
                <textarea ref={newMessageElement} onChange={onTextChange} value={props.messages_page.message_textarea} ></textarea>
                <div><button onClick={onAddMessage}>Отправить</button></div>
            </div>
        </div>
    )
}

export default Dialogs;