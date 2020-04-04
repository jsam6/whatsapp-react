import React from 'react';
import Header from './components/Header';
import ChatList from './components/Chat/List';

function App() {
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

	return (
		<div className="App">
			<Header/>
			
			<ChatList data={data}/>
			
		</div>
	);
}

export default App;
