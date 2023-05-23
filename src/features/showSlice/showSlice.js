import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {baseURL} from '../../api/ShowApi'

export const fetchAsyncMovies = createAsyncThunk(
    'show/fetchAsyncShow',
    async (term) => {
      const response = await baseURL.get('https://api.tvmaze.com/shows'
        
      );
      const data = await response.data;
      console.log(data)
      return data;
    }
  );

  const initialState ={
    shows:[],
    IsLoading:true,
    error:null,
}

