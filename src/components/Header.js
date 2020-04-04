import React from 'react'

export default function Header() {
    return (
        <div>
			<header>
				<div className="bg-wa-darker p-3"></div>
				<div className="bg-wa-dark text-white">
				<div className="flex justify-between px-4 pt-2">
					<h1 className="text-2xl">WhatsApp</h1>
					<div className="py-2">
					<span className="material-icons px-2">search</span>
					<span className="material-icons px-2">chat</span>
					<span className="material-icons pl-2">more_vert</span>
					</div>
				</div>
				<div className="flex justify-between">
					<h2 className="w-1/3 text-center p-4 text-gray-500">CALLS</h2>
					<h2 className="w-1/3 text-center p-4 border-b-2 border-white">CHATS</h2>
					<h2 className="w-1/3 text-center p-4 text-gray-500">CONTACTS</h2>
				</div>
				</div>
			</header>
		</div>
    )
}
