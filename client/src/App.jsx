import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import { allNames, getAllPokemons } from './redux/actions/actions'
import { Detail, Form, Home, Landing, Nav } from './views'

const App = () => {
	const { pathname } = useLocation()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllPokemons())
		dispatch(allNames())
	}, [dispatch])
	return (
		<>
			{pathname !== '/' && <Nav />}

			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/create" element={<Form />} />
			</Routes>
		</>
	)
}

export default App
