import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './main.css'

//eslint-disable-next-line react/no-deprecated
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,

	document.getElementById('root')
)
