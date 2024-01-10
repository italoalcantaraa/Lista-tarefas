import { useState } from 'react';

import './App.scss';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import Busca from '../components/Busca';
import Filter from '../components/Filter';

export default function App() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            text: "Criar funcionalidade X no sistema",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir para a academia",
            category: "Pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudar React",
            category: "Estudos",
            isCompleted: false,
        }
    ]);

    const addTodo = (text, category) => {
        const newTodos = [...todo, {
            id: Math.random(Math.floor() * 100000),
            text: text,
            category: category,
            isCompleted: false,
        }]

        setTodo(newTodos);
    }

    const removeTodo = (id) => {
        const ValoresTodo = [...todo]
        const FilterTodo = ValoresTodo.filter(todos => todos.id !== id ? todos : null);

        setTodo(FilterTodo);
    }

    const CompleteTodos = (id) => {
        const ValoresTodos = [...todo];
        ValoresTodos.map((todos) => {
            todos.id === id ? todos.isCompleted = !todos.isCompleted : todos
        });
        setTodo(ValoresTodos);
    }

    const [busca, setBusca] = useState("");
    const [status, setStatus] = useState("All");
    const [ordenacao, setOrdenacao] = useState("Asc");

    return (
        <div className='app'>
            <h1>Lista de Tarefas</h1>
            <Busca busca={busca} setBusca={setBusca} />
            <Filter status={status} setStatus={setStatus} setOrdenacao={setOrdenacao} />
            <div className="todo-list">
                {todo.
                    sort((a, b) => ordenacao === "Asc"
                        ? a.text.localeCompare(b.text)
                        : b.text.localeCompare(a.text)).filter((todos) => busca === "All" ? true : status === "Concluídas" ? todos.isCompleted : !todos.isCompleted)
                    .filter((todos) => todos.text.toLocaleLowerCase().includes(busca.toLocaleLowerCase())).map((todo) => (
                        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} CompleteTodos={CompleteTodos} />
                    ))}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    )
}