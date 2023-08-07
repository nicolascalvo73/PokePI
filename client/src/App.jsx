import { Home, Detail, Form, Landing } from './views'
import { Route, Routes } from 'react-router-dom'

const App = () => {
	// const { pathname } = useLocation()
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/home" element={<Home />} />
			<Route path="/detail" element={<Detail />} />
			<Route path="/create" element={<Form />} />
		</Routes>
	)
}

export default App
