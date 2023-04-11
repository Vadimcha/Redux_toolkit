import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        todos: ["Sleep", "Eat", "Code", "Sex", "All Again"],
    },
    reducers: {
        push(state, action) {
            if(action.payload != '')
                state.todos.push(action.payload)
        },
        pop(state) {
            state.todos.pop();
        },
    }
})

export default toolkitSlice.reducer
export const { push, pop } = toolkitSlice.actions