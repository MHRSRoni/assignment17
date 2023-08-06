import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
        name : "todo",
        initialState : [],
        reducers : {
            AddTodo : (state, action)=>{
                state.push(action.payload)
                
            },

            RemoveTodo : (state, action)=>{
                return state.filter((todo)=> todo.id !== action.payload)
            },

            editTodo : (state, action)=>{
                const {id, text} = action.payload
                const todo = state.find((todo)=>todo.id === id)
                if(todo){
                    todo.text = text
                }
                
            },
            ToogleMark : (state, action)=>{
                const todo = state.find((todo)=> todo.id === action.payload)
                if(todo){
                    todo.completed = !todo.completed
                }
            }
            
        }
    })


export const {AddTodo, RemoveTodo, editTodo, ToogleMark} = todoSlice.actions;
export default todoSlice.reducer