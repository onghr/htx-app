import { createSlice } from "@reduxjs/toolkit";

export const audioSlice = createSlice({
    name: "Audio Slice",
    initialState: {
        value: [
            {
                id: 0,
                file: "./../src/files/test.mp3",
                title: "ABC",
                description: "ABC song",
                category: "Voice Recording, Others",
                uploadDate: "2022-12-15",
                fileSize: "1.2MB",
                deleted: false,
            },
            {
                id: 1,
                file: "./../src/files/test.mp3",
                title: "DEF",
                description: "DEF song",
                category: "Others",
                uploadDate: "2023-12-23",
                fileSize: "1.2MB",
                deleted: false,
            },
            {
                id: 2,
                file: "./../src/files/test.mp3",
                title: "GHI",
                description: "GHI song",
                category: "Others",
                uploadDate: "2024-02-15",
                fileSize: "1.2MB",
                deleted: false,
            },
            {
                id: 3,
                file: "./../src/files/test.mp3",
                title: "JKL",
                description: "JKL song",
                category: "Others",
                uploadDate: "2024-05-15",
                fileSize: "1.2MB",
                deleted: false,
            },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload.newAudioData);
        },
        deleteAudio: (state, action) => {
            const index = action.payload.index;
            state.value[index].deleted = action.payload.audioDelete;
        },
    },
});

// Use these to update the state in your component
export const { add, deleteAudio } = audioSlice.actions;

// This part goes into the store.
export default audioSlice.reducer;
