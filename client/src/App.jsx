import { Home, About, Detail, Form, Landing } from './views'
import { Route, Routes } from 'react-router-dom'

function App() {
	// const { pathname } = useLocation()
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/detail" element={<Detail />} />
			<Route path="/create" element={<Form />} />
		</Routes>
	)
}

export default App
