import Main from './pages/Main/Main'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
