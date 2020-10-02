import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  cards: [],
  status: 'idle',
  error: null,
}

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await axios.get('https://megakheir.herokuapp.com/ngos')
  return response.data.data
})

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCards.pending]: (state, _) => {
      state.status = 'loading'
    },
    [fetchCards.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched Cards to the array
      state.cards = state.cards.concat(action.payload)
    },
    [fetchCards.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export default cardsSlice.reducer

export const selectAllCards = (state) => state.cards.cards
