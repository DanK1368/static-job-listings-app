import { createSlice } from "@reduxjs/toolkit";
import jobs from "../data.json";

const initialState = {
  jobItems: jobs,
  filter: [],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    handleFilter: (state, { payload }) => {
      if (!state.filter.includes(payload)) {
        state.filter = [...state.filter, payload];

        state.jobItems = state.jobItems.filter(job =>
          [...job.languages, ...job.tools, job.level, job.role].includes(
            payload
          )
        );
      }
    },
    handleDelete: (state, { payload }) => {
      const { item, id } = payload;

      state.filter = state.filter.filter((item, idx) => id !== idx);

      state.jobItems = state.jobItems.filter(job =>
        [...job.languages, ...job.tools, job.level, job.role].includes(item)
      );
    },
    handleClear: (state, { payload }) => {
      state.filter = [];
      state.jobItems = jobs;
    },
  },
});

export const { handleFilter, handleDelete, handleClear } = jobSlice.actions;

export default jobSlice.reducer;
