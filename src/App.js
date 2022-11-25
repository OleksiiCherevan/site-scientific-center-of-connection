import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import { get_users } from "./services/DB_connection";
import usersSlice from "./storage/usersSlice";

function App() {
	useEffect(() => {
		usersSlice.users = get_users();
	}, [])

	useEffect(() => {
		console.log([...usersSlice.users.map(_user => { return {..._user}})]);
	}, [usersSlice])

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>

				<footer></footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
