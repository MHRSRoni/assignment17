import Swal from "sweetalert2"
import store from "../redux/store/store"
import { RemoveTodo } from "../redux/slice/todoSlice"

export  const removeTodo = (i) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(RemoveTodo(i))
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success',
      )
    }
  })
}