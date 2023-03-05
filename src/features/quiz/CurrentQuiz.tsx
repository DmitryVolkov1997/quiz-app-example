import React from 'react'
import {ActiveQuiz} from 'components/ActiveQuiz'
import {useAppSelector} from 'store/redux-hooks'
import {FinishedQuiz} from "components/FinishedQuiz";

export const CurrentQuiz = () => {
    const {quiz, activeQuestion, isFinished} = useAppSelector(state => state.quiz)

    return !isFinished ? <ActiveQuiz answers={quiz[activeQuestion].answers} question={quiz[activeQuestion].question}
                                     quizLength={quiz.length} questionNumber={activeQuestion + 1}/> : <FinishedQuiz/>
}

