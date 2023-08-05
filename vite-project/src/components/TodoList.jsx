import { useDispatch, useSelector } from "react-redux";
import { RemoveTodo } from "../redux/slice/todoSlice";
import { removeTodo } from "./RemoveTodo";

const TodoList = () => {
    const dispatch = useDispatch()
    const removeHandler = ()=>{
        removeTodo()
        dispatch(RemoveTodo())
    }
    const todoItems = useSelector((state)=>state.todo.value)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Edit</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todoItems.map((item, i)=>{
                                    return(
                                        <tr key={i.toString()}>
                                            <td>{item}</td>
                                            <td>
                                                <button className="btn btn-dark btn-sm">Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={()=>removeHandler()}>Remove</button>
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