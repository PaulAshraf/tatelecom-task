import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '../features/cards/cardSlice'

export default configureStore({
  reducer: {
      cards: cardReducer
  }
})