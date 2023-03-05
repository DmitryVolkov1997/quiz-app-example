import styles from './AnswersList.module.sass'
import {UnorderedList} from '@chakra-ui/react'
import {AnswerItem} from './AnswerItem'
import {Answer} from 'types'
import {useAppSelector} from '../../../store/redux-hooks'

interface AnswersListProps {
	answers: Answer[]
}

export const AnswersList = ({answers}: AnswersListProps) => {
	const {answerState} = useAppSelector(state => state.quiz)

	return (
		<UnorderedList styleType="none">
			{
				answers.map(answer => {
					return (
						<AnswerItem key={answer.id} {...answer} state={answerState ? answerState[answer.id] : null}/>
					)
				})
			}
		</UnorderedList>
	)
}
