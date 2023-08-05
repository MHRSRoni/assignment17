import Swal from "sweetalert2"

export const editTodo = async (i,data, dispatch, editHandler)=>{
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Message',
    inputValue: data,
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })
  
  if (text) {
    dispatch(editHandler({task : text, index : i}))
    Swal.fire(
      "Success",
      "",
      "success"
    )
  }
}