import { createSlice} from "@reduxjs/toolkit"

const initialState = { 
    mode : "dark",
    userId : "63701cc1f03239b7f700000e",
    formInReg : false,
};

export const globalSlice = createSlice({ 
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setFormInReg: (state) => {
            state.formInReg = !state.formInReg;
        }
    }
})

export const { setMode, setFormInReg } = globalSlice.actions;

export default globalSlice.reducer
