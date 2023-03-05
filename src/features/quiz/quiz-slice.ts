import {createSlice} from '@reduxjs/toolkit'
import {Quiz} from 'types'
import {quiz} from './mock'

export type QuizSlice = {
    quiz: Quiz[]
    activeQuestion: number
    isFinished: boolean
    answerState: null | { [id: number]: 'success' | 'error' }
    results: { [id: number]: 'success' | 'error' }
}

const initialState: QuizSlice = {
    quiz,
    activeQuestion: 0,
    isFinished: false,
    answerState: null,
    results: {}
}

const quizSlice = createSlice({
    name: '@@quiz',
    initialState,
    reducers: {
        onClickAnswer(state) {
            const {quiz, activeQuestion} = state

            if (!state.answerState) return

            if (isFinished()) {
                state.isFinished = true
            } else {
                state.activeQuestion = activeQuestion + 1
                state.answerState = null
            }

            function isFinished(): boolean {
                return quiz.length === activeQuestion + 1
            }
        },
        setAnswerState(state, {payload}) {
            state.answerState = {
                [payload.answerId]: payload.status
            }
        },
        setResults(state, {payload}) {
            state.results = {
                ...payload,
                [payload.answerId]: payload.status
            }
        }
    }

})

export const {onClickAnswer, setAnswerState, setResults} = quizSlice.actions
export default quizSlice.reducer

// 12

