import { Box, Button, Text } from '@chakra-ui/react'
import styles from './Bottom.module.sass'

interface BottomProps {
	count: number
	quizLength: number
}

export const Bottom = ({ count, quizLength }: BottomProps) => {
	return (
		<Box className={styles.bottom}>
			<Text
				fontSize='large'
				textAlign='left'
				color='green.500'
				fontWeight='black'
				marginBottom='10px'
			>
				Правильно {count} из {quizLength}
			</Text>
			<Box className={styles.buttons}>
				<Button display={'inline-block'} colorScheme='facebook'>
					Перейти в список тестов
				</Button>
				<Button display={'inline-block'} colorScheme='green'>
					Повторить
				</Button>
			</Box>
		</Box>
	)
}
