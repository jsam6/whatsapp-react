import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Header from './components/Header';
import ChatList from './components/Chat/List';

import Messages from './views/Messages';



function App() {
	
	return (
		<div className="App">
			<Router forceRefresh={true}>
				<Switch>
					<Route  exact path="/">
						<Header/>
						<ChatList data={data}/>
					</Route>
					<Route path="/messages">
						<Messages />
					</Route>
				</Switch>
			</Router>	
		</div>
	);
}

const data = [
	{
		id: 1,
		name: 'Alice', 
		notification: 1,
		message: 'Hello World',
		time: '04-04-2020',
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
	},
	{
		id: 2,
		name: 'Anne', 
		notification: 0,
		message: 'Hello Anne',
		time: '04-04-2020',
		image: 'https://images.unsplash.com/photo-1554461432-ef68edacb668'
	},
]


export default App;
