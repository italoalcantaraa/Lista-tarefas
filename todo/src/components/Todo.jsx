import React from 'react'

const Todo = ({ todo, removeTodo, CompleteTodos }) => {
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted === true ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="catagory">({todo.category})</p>
            </div>
            <div>
                <button className='complete'onClick={() => CompleteTodos(todo.id)}>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        </div>
    )
}

export default Todo
