import React, {useState} from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList';

// import icons
import { FiPenTool } from 'react-icons/fi'
import { FiXCircle } from 'react-icons/fi'

// component for displaying the list of saved todos
function Todo({ todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    // submit handler when the edit form is submitted
    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
           }
  return todos.map((todo, index) => (
      <div className={todo.isComplete ? 'todo-row complete' :
    'todo-row'} key={index}>

        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>

        <div className="icons">
            {/* <RiCloseCircleLine /> */}
            <FiXCircle 
             onClick={() => removeTodo(todo.id)}
             className='delete-icon'/>
            <FiPenTool
            onClick={() => setEdit({id: todo.id, value: todo.text})}
            className='edit-icon'
             />

        </div>
        


        </div>
  ));

}

export default Todo;
