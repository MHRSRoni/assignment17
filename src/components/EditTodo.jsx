import Swal from "sweetalert2"
import store from "../redux/store/store"
import { editTodo } from "../redux/slice/todoSlice"

export const EditTodo = async (i)=>{
    const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Message',
    inputValue: store.getState().todo.find((todo)=>todo.id === i).text,
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })
  
  if (text) {
    store.dispatch(editTodo({id : i, text}))
    Swal.fire(
      "Success",
      "",
      "success"
    )
  }
}