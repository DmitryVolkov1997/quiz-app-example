import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	onClickAnswer,
	QuizSlice,
	setAnswerState,
	setResults,
} from './quiz-slice'
import { delay } from 'utils/trasition'

export const asyncAnswerClick = createAsyncThunk<
	void,
	number,
	{ state: { quiz: QuizSlice } }
>('quiz/asyncAnswerClick', async (answerId: number, { getState, dispatch }) => {
	const { quiz, activeQuestion, results } = getState().quiz
	const { rightAnswerId } = quiz[activeQuestion]

	if (rightAnswerId === answerId) {
		dispatch(
			setResults({
				...results,
				answerId: quiz[activeQuestion].id,
				status: 'success',
			})
		)

		dispatch(setAnswerState({ answerId, status: 'success' }))

		await delay(1000)

		dispatch(onClickAnswer())
	} else {
		dispatch(
			setResults({
				...results,
				answerId: quiz[activeQuestion].id,
				status: 'error',
			})
		)

		dispatch(setAnswerState({ answerId, status: 'error' }))

		await delay(1000)

		dispatch(onClickAnswer())
	}
})
