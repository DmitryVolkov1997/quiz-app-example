import cn from 'classnames'
import { ReactNode, useEffect } from 'react'
import { useAppSelector } from 'store/redux-hooks'
import { Footer } from './Footer'
import styles from './Layout.module.sass'
import { NavBar } from './NavBar'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	const { isShowMenu } = useAppSelector(state => state.menu)

	useEffect(() => {
		if (isShowMenu) {
			document.body.classList.add('noScroll')
		} else {
			document.body.classList.remove('noScroll')
		}
	}, [isShowMenu])

	return (
		<div className={styles.layout}>
			<NavBar className={styles.navbar} />
			<main
				className={cn(styles.main, {
					[styles.transparent]: isShowMenu,
				})}
			>
				{children}
			</main>
			<Footer className={styles.footer} />
		</div>
	)
}
