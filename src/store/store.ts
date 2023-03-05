import { combineReducers, configureStore } from '@reduxjs/toolkit'
import menuReducer from 'features/menu/menu-slice'
import quizReducer from '../features/quiz/quiz-slice'

const rootReducer = combineReducers({
	quiz: quizReducer,
	menu: menuReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
