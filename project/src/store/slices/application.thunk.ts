/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Offer } from '../../types/offer';


export const fetchOffersDataThunk = createAsyncThunk(
  'application/fetchOffersDataThunk',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get<Offer[]>('https://10.react.pages.academy/six-cities/hotels');
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
