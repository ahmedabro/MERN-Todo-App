import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
    name: "tabs",
    initialState: {
        tabs: ["All", "Pending", "Done"],
        activeTab: "All"
    },
    reducers: {
        toggleTab: (state, action) => {
            state.activeTab = action.payload
        }
    }
})

export const selectAllTabs = (state) => state.tabs.tabs

export const selectActiveTab = (state) => state.tabs.activeTab

export const {toggleTab} = tabSlice.actions

export default tabSlice.reducer