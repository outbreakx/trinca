import React from 'react';


import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Login from './pages/Login';
import List from './pages/List';
import Detail from './pages/Detail';

const AppRoutes = (props) => {
	return <Router>
		<GlobalStyle />
		<Header />
		<div className="pages">
			<Routes>
				{ /* <Route path="/" element={<Home/>}/> */}
				{ /* <Route path="/" element={<Login />} /> */}
				<Route path="/" element={<Login />} />
				<Route path="/list" element={<List />} />
				<Route path="/details/:id" element={<Detail />} />
			</Routes>
		</div>
	</Router>
}


export default AppRoutes;