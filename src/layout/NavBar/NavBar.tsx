import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Image,
	ListItem,
	UnorderedList,
	useColorMode
} from '@chakra-ui/react'
import cn from 'classnames'
import { setMenu } from 'features/menu/menu-slice'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/redux-hooks'
import Logo from '../../assets/logo.png'
import styles from './NavBar.module.sass'

interface NavBarProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const links = [
	{ id: 1, label: 'Регистрация', to: '/home' },
	{ id: 2, label: 'Пробное тестирование', to: '/' },
]

const activeStyle = {
	borderBottom: '2px solid red',
	paddingBottom: '3.5px',
}

export const NavBar = ({ className }: NavBarProps) => {
	const { colorMode, toggleColorMode } = useColorMode()
	const dispatch = useAppDispatch()
	const { isShowMenu } = useAppSelector(state => state.menu)

	return (
		<Box
			className={cn(styles.navBar, className)}
			boxShadow='base'
			fontWeight='semibold'
			fontSize='large'
		>
			<Box className={styles.row}>
				<Box className={styles.logo}>
					<Image src={Logo} boxSize='70px' objectFit='cover' alt='logo' />
				</Box>

				<Button className={styles.btnTheme} onClick={toggleColorMode}>
					{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				</Button>

				<Button
					display='none'
					className={cn(styles.burger, {
						[styles.active]: isShowMenu,
					})}
					onClick={() => dispatch(setMenu())}
				>
					<HamburgerIcon />
				</Button>

				<UnorderedList
					className={cn(styles.list, {
						[styles.active]: isShowMenu,
					})}
				>
					{links.map(link => (
						<ListItem
							className={styles.item}
							key={link.id}
							listStyleType={'none'}
							onClick={() => dispatch(setMenu())}
						>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.link : cn(styles.link, styles.active)
								}
								to={link.to}
							>
								{link.label}
							</NavLink>
						</ListItem>
					))}
				</UnorderedList>
			</Box>
		</Box>
	)
}
