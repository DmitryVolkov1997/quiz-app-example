import styles from './AnswerItem.module.sass'
import {Button, ListItem} from '@chakra-ui/react'
import {Answer} from 'types'
import {useAppDispatch, useAppSelector} from 'store/redux-hooks'
import {asyncAnswerClick} from 'features/quiz/asyncQuizActions'

interface AnswerItemProps extends Answer {
	state: string | null
}

export const AnswerItem = ({id, text, state}: AnswerItemProps) => {
	const dispatch = useAppDispatch()


	switch (state) {
		case 'success':
			return (
				<ListItem className={styles.answerItem} onClick={() => dispatch(asyncAnswerClick(id))}>
					<Button className={styles.button} fontWeight={'extrabold'} fontSize={'large'} colorScheme="green">
						{text}
					</Button>
				</ListItem>
			)
		case 'error':
			return (
				<ListItem className={styles.answerItem} onClick={() => dispatch(asyncAnswerClick(id))}>
					<Button className={styles.button} fontWeight={'extrabold'} fontSize={'large'} colorScheme="red">
						{text}
					</Button>
				</ListItem>
			)
		default:
			return (
				<ListItem className={styles.answerItem} onClick={() => dispatch(asyncAnswerClick(id))}>
					<Button className={styles.button} fontWeight={'extrabold'} fontSize={'large'}
							variant="outline">
						{text}
					</Button>
				</ListItem>
			)
	}
}
