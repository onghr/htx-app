import { createSlice } from '@reduxjs/toolkit';

export const audioSlice = createSlice({
    name: 'Audio Slice',
    initialState: {
        value: [
            {
                title: "ABC",
                description: "ABC song",
                category: "Others",
                uploadDate: "2022-12-15",
                fileSize: "1.2MB"
              },
              {
                title: "DEF",
                description: "DEF song",
                category: "Others",
                uploadDate: "2023-12-23",
                fileSize: "1.2MB"
              },
              {
                title: "GHI",
                description: "GHI song",
                category: "Others",
                uploadDate: "2024-02-15",
                fileSize: "1.2MB"
              },
              {
                title: "JKL",
                description: "JKL song",
                category: "Others",
                uploadDate: "2024-05-15",
                fileSize: "1.2MB"
              }
        ],
    },
    reducers: {
        add: function (state, action) {
            state.value.push(action.payload.newAudioData);
        },
        /* update: function (state, action) {
            const index = action.payload.index;
            const newTitle = action.payload.newTitle;
            const newDesc = action.payload.newDesc;
            const newCategory = action.payload.newCategory;
            const newUploadDate = action.payload.newUploadDate;
            const newFileSize = action.payload.newFileSize;

            state.value[index].title = newTitle;
            state.value[index].description = newDesc
            state.value[index].category = newCategory;
            state.value[index].uploadDate = newUploadDate;
            state.value[index].fileSize = newFileSize;
        } */
    },
});

// Use these to update the state in your component
export const { add } = audioSlice.actions;

// This part goes into the store.
export default audioSlice.reducer;