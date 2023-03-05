import styles from './Quiz.module.sass'
import {Box, Heading} from '@chakra-ui/react'
import {CurrentQuiz} from '../../features/quiz/CurrentQuiz'

interface QuizProps {
}

export const Quiz = ({}: QuizProps) => {
	return (
		<Box className={styles.quiz}>
			<Heading fontWeight={'extrabold'} className={styles.title} as="h2" size="2xl">
				Ответьте на все вопросы
			</Heading>
			<CurrentQuiz/>
		</Box>
	)
}
