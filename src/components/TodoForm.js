import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
// if any todo is being edited, start with the current value
// else if a new todo is being created, keep the input empty
const [input, setInput] = useState(props.edit ? props.edit.value : '');

// ref to focus on the form input
const inputRef = useRef(null)

// focus the input whenever the form re-renders
useEffect(() => {
  inputRef.current.focus()
})

const handleChange = e => {
  setInput(e.target.value)
}

// runs when the submit button is pressed
const handleSubmit = e => {
  e.preventDefault();

  // run the function addTodo with the id and text
  // isComplete tells the CSS whether the task has been
  // completed or not

  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: input
  })

  // clear the input field once the todo is added
  setInput('')


};
return (
  <form onSubmit={handleSubmit} className='todo-form'>
    {props.edit ? (
      <>
        <input
          placeholder='Update your item'
          value={input}
          onChange={handleChange}
          name='text'
          ref={inputRef}
          className='todo-input edit'
        />
        <button onClick={handleSubmit} className='todo-button edit'>
          Update
        </button>
      </>
    ) : (
      <>
        <input
          placeholder='Add a todo'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <button onClick={handleSubmit} className='todo-button'>
          Add todo
        </button>
      </>
    )}
  </form>
);
}

export default TodoForm;
