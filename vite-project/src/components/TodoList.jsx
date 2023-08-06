import {  ToogleMark } from "../redux/slice/todoSlice";
import { removeTodo } from "./RemoveTodo";
import { EditTodo } from "./EditTodo";
import store from "../redux/store/store";
import { useSelector } from "react-redux";


const TodoList = () => {
    const todoItems = useSelector((state)=>state.todo)
    const checkboxHandler =(i)=>
    {
        store.dispatch(ToogleMark(i))
    }
    const removeHandler = (i)=>
    {
        removeTodo(i)
    }
    const editHandler = (i)=>{
        EditTodo(i)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Mark</th>
                                    <th>Task</th>
                                    <th>Edit</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todoItems && todoItems.map((item)=>{
                                    return(
                                        <tr key={item.id}>
                                            <td>
                                                <input  type="checkbox" checked={item.completed} onChange={()=>checkboxHandler(item.id)} />
                                            </td>
                                            <td>
                                                <p className={`${item.completed ? "text-decoration-line-through" : ""}`}>{item.text}</p>
                                            </td>
                                            <td>
                                                <button className="btn btn-dark btn-sm" onClick={()=>editHandler(item.id)}>Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={()=>removeHandler(item.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;