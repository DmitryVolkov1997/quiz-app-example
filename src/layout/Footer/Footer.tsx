import styles from './Footer.module.sass'
import {DetailedHTMLProps, HTMLAttributes} from 'react'
import cn from 'classnames'
import {Box, Text} from '@chakra-ui/react'

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Footer = ({className}: FooterProps) => {
	return (
		<Box className={cn(className, styles.foot)} boxShadow="dark-lg"
			 fontWeight="semibold" fontSize="large">
			<Text className={styles.text}>
				© КарТУ {new Date().getFullYear()} г. Все права защищены.
			</Text>
		</Box>
	)
}
