import { createSlice } from "@reduxjs/toolkit";
 
const usersInfo = createSlice({
    name: 'usersInfo',
    initialState: {
        name: "",
        job: "",
        email: "",
    },
    reducers: {
        saveData: (state, action) => {
            state = { ...state, ...action.payload };
            return state;
        }
    }
});

export const { saveData } = usersInfo.actions;
export default usersInfo.reducer;