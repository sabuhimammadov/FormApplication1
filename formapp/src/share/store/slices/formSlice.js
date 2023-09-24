import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const formSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        addData(state, action) {
            state.data.push(action.payload);
        },
        removeData(state, action) {
            const filterData = state.data.filter((item) => item.id !== action.payload);
            state.data = filterData;
        },
        editData(state,action){
            state.data = state.data?.map((item) => item.id === action.payload ? { ...item, isEditing: true } : item)

        },
        handleSave(state, action) {
            const { id, newText } = action.payload
            state.data = state.data.map((item) =>
            item.id === id ? { ...item, isEditing: false, ...newText } : item
          );        }
      
    },
});

export const { addData, removeData,editData,handleSave } = formSlice.actions;
export default formSlice.reducer;
