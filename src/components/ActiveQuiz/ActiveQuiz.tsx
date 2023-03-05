import styles from './ActiveQuiz.module.sass'
import {Box, Text} from '@chakra-ui/react'
import {AnswersList} from './AnswersList'
import {Answer} from 'types'

interface ActiveQuizProps {
	answers: Answer[]
	question: string
	quizLength: number
	questionNumber: number
}

export const ActiveQuiz = ({answers, question, quizLength, questionNumber}: ActiveQuizProps) => {

	return (
		<Box className={styles.activeQuiz} boxShadow="dark-lg" p="6" rounded="md">
			<Box fontWeight="black">
				<Text fontSize="xl">
					Вопрос {questionNumber}/{quizLength}
				</Text>
				<Text fontSize="xl">
					{question}
				</Text>
			</Box>
			<AnswersList answers={answers}/>
		</Box>
	)
}

