import styles from './FinishedQuiz.module.sass'
import {
	Accordion,
	Box
} from '@chakra-ui/react'
import {useAppSelector} from "store/redux-hooks"
import {Quiz} from 'types'
import {Bottom} from './Bottom'
import {AccordionElement} from '../AccordionElement'


export const FinishedQuiz = () => {
	const {quiz, results} = useAppSelector(state => state.quiz)

	const successCount = Object.keys(results).reduce((acc, key) => {
		if (typeof +key === 'number' && results[+key] === 'success') {
			acc++
		}

		return acc
	}, 0)

	const isSuccess = (el: Quiz): boolean => {
		return results[el.id] === 'success'
	}

	return (
		<Box className={styles.finishedQuiz} boxShadow="dark-lg" p="6" rounded="md">
			<Accordion>
				{
					quiz.map((el, idx, arr) => {
						return (
							<AccordionElement key={idx} idx={idx} el={el} arr={arr} isSuccess={isSuccess(el)}/>
						)
					})
				}
			</Accordion>

			<Bottom quizLength={quiz.length} count={successCount}/>
		</Box>
	)
}
