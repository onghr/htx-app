import { createSlice } from '@reduxjs/toolkit';

export const audioSlice = createSlice({
    name: 'Audio Slice',
    initialState: {
        value: [
            {
              id: 0,
              title: "ABC",
              description: "ABC song",
              category: "Voice Recording, Others",
              uploadDate: "2022-12-15",
              fileSize: "1.2MB",
              delete: false
            },
            {
              id: 1,
              title: "DEF",
              description: "DEF song",
              category: "Others",
              uploadDate: "2023-12-23",
              fileSize: "1.2MB",
              delete: false
            },
            {
              id: 2,
              title: "GHI",
              description: "GHI song",
              category: "Others",
              uploadDate: "2024-02-15",
              fileSize: "1.2MB",
              delete: false
            },
            {
              id: 3,
              title: "JKL",
              description: "JKL song",
              category: "Others",
              uploadDate: "2024-05-15",
              fileSize: "1.2MB",
              delete: false
            }
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload.newAudioData);
        },
        deleteAudio: (state, action) => {
          const index = action.payload.index;
          state.value[index].deleted = action.payload.audioDelete;
        }
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
export const { add, deleteAudio } = audioSlice.actions;

// This part goes into the store.
export default audioSlice.reducer;