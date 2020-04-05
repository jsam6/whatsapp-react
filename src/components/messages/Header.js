import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className="bg-wa-dark flex justify-between text-white fixed w-full">
                <div className="p-2 flex">
                <Link to="/">
                    <i className="fas fa-arrow-left text-white py-4"></i>
                </Link>
                <div className="px-2">
                    <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                    className="w-12 h-12 rounded-full"
                    />
                </div>
                <div className="px-2">
                    <h1>Whitmans Chat</h1>
                    <p className="text-xs">Alice, Francis, Jack, Ned, Peter</p>
                </div>
                </div>
                <div className="py-5">
                    <span className="material-icons px-2 transform -rotate-45">attach_file</span>
                    <span className="material-icons px-2">more_vert</span>
                </div>
            </header>
        </div>
    )
}

export {Header};