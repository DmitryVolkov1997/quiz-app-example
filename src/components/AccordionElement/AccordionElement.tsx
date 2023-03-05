import styles from './AccordionElement.module.sass'
import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box} from '@chakra-ui/react'
import {CheckCircleIcon, CloseIcon} from '@chakra-ui/icons'
import {Quiz} from '../../types'

interface AccordionElementProps {
	el: Quiz
	arr: Quiz[]
	isSuccess: boolean
	idx: number
}

export const AccordionElement = ({isSuccess, el, arr, idx}: AccordionElementProps) => {
	return (
		<AccordionItem key={el.id}>
			<h2>
				<AccordionButton _expanded={{bg: 'facebook.500', color: 'white'}}>
					<Box as="span"
						 flex="1" textAlign="left" fontSize="large" fontWeight="semibold">
						{
							isSuccess ? <CheckCircleIcon color="green.600"/> :
								<CloseIcon w={4} h={4} color="red.600"/>
						}

						<Box as="span" marginLeft="10px">
							{idx + 1}.
							{el.question}
						</Box>
					</Box>
					<AccordionIcon/>
				</AccordionButton>
			</h2>
			<AccordionPanel fontWeight="semibold">
				<Box as="span" color="green" fontSize="large">
					Правильный ответ:&nbsp;
				</Box>
				{
					arr[idx].answers[idx].id === el.rightAnswerId && arr[idx].answers[idx].text
				}
			</AccordionPanel>
		</AccordionItem>
	)
}
