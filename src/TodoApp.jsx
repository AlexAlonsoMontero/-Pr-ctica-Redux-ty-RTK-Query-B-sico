import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/todosApi";

export const TodoApp = () => {

    // const { data: todos = [], isLoading} = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);

    const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

    const nextTodo = () =>{
        setTodoId( todoId+1);
    }

    const prevTodo = () =>{
        if (todoId > 1) setTodoId(todoId-1);
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading... {isLoading ? 'True' : 'False'}  </h4>

            <pre>{JSON.stringify(todo)}</pre>
            {/* MostroamosTodos usando UseGetTodosQuery, recogiendo y mostrando todos los todo */}
            {/* <ul>
                {
                    todos.map(todo=>(
                        <li key={todo.id}>
                            <p> <strong>{ todo.completed ? 'Completa' : 'Pendiente' }</strong></p>
                            <p> {todo.title}</p>

                        </li>
                    ))
                }
            </ul> */}


            <button onClick={prevTodo}>
                Prev Todo
            </button>

            <button onClick={nextTodo}>
                Next Todo
            </button>
        </>
    )
}
