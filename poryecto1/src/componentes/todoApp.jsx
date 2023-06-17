import React, { useState } from 'react'
import Todo from './todo';


export default function TodoApp() {

const [title, setTitle] = useState(" ");
const [todos, setTodos] = useState([])


const handleSubmit =(e)=> {
    e.preventDefault();
    
    const newTodo = {
        id:crypto.randomUUID(),
        title: title,
        completed: false,
    }
    setTodos([...todos, newTodo])
    setTitle('')
}


// const handleClick = (e) => {
//     e.preventDefault();
//     setTitle('Marcos')

// }

const handleChange = (e) => {
    const value = e.target.value
    setTitle(value)    

}
    const handleUpdate = (id, value) => {
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp)
    }

    const handleDelete = (id) => {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp)

    }

  return (



    <div className='todoConteiner' >


        <form className='todoCreateForm' >

            <input onChange={handleChange} 
                value={title} 
                className='todoInput' 

                />

            <input onClick={handleSubmit} 
                type="submit"   
                value= "Create todo"     
                className='buttonCreate' 

                />

        </form>

            <div className='todosConteiner' >

            {
                todos.map(item => (
                    <Todo 
                        key={item.id}
                        item={item} 
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                        />
                ))
            }

            </div>
    
      
    </div>
  )
}
