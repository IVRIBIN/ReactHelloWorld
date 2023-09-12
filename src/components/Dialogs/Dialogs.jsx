import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    /*
    let dialogs = [
        {id: 1, name: 'Azvald'},
        {id: 2, name: 'Narzan'},
        {id: 3, name: 'Kakatan'},
        {id: 4, name: 'Pukatan'},
    ];
    */

    /*
    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Fuk you'},
        {id: 3, message: 'And you'},
        {id: 4, message: 'bich'},
    ];
    */

    /*
    let dialogsElements = dialogs.map(
        (d) => {
            return <DialogItem name={d.name} id={d.id}/>;
        }

    )*/
    
    //Сокращенный синтаксис линейной функции map (полный синтаксиис выше)
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/* React автоматом выводит объект с типом массив в виде списка вложенных элементов */}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    );
}

export default Dialogs;