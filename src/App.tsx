import { HomePage } from 'pages'
import { Routes, Route } from 'react-router-dom'
import {Layout} from './layout'
import {Quiz} from 'pages/Quiz'

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/home' element={<HomePage />} />
				<Route path='/' element={<Quiz />} />
			</Routes>
		</Layout>
	)
}

export default App
