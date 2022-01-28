import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

// parent component which displays the form for adding
// new todos as well as the list of saved todos.
// It also implements functions to add, remove and update todos

function TodoList() {

    // list of todos
    const [todos, setTodos] = useState([])

    // function to add a new todo
    const addTodo = todo =>{

        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todo, ...todos);

        setTodos(newTodos)

    }

    // function to update a todo given its id and the new value
    const updateTodo = (todoId, newValue) => {

        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))

    }
    

    // function to remove a todo from the todos list

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }


    // function to add a property isComplete to the todo object with the given id
    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }

            return todo
        })
        setTodos(updatedTodos)
    }
  return <div>
      <h1>
          What's your plan Today ?
      </h1>

        {/* pass the addTodo() func as a prop to TodoForm */}
      <TodoForm onSubmit={addTodo}/>

        {/* Display the list of saved todos */}
      <Todo 
       todos={todos}
       completeTodo={completeTodo}
       removeTodo={removeTodo}
       updateTodo={updateTodo}/>

  </div>;
}

export default TodoList;
