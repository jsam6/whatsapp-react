import React from 'react'

export default function ChatList({ data }) {
    console.log('chatList',  data)
    return (
        <div>
            { (data.length >= 1) ? 
                data.map( item => (
                    <section className="m-2 flex" key={item.id}> 
                        <div className="w-2/12 py-3">
                            <img className="w-12 h-12 rounded-full" src={item.image} />
                        </div>
                        <article className="w-10/12 py-2 border-b-2 border-gray-200">
                        <div className="flex justify-between">
                            <h2 className="font-semibold">{item.name}</h2>
                            {(item.notification != 0 ) ? <p className="text-sm" className="text-green-500" >{item.time}</p>
                            : <p className="text-sm" className="text-gray-500" >{item.time}</p> }
                        </div>
                        <div className="flex justify-between">
                            <p>{item.message}</p>
                            {(item.notification != 0 ) ? <p className="bg-green-500 text-white rounded-full w-5 h-5 text-center text-sm pb-2" >{item.notification}</p> 
                            : '' }
                        </div>
                        </article>
                    </section>
                )
                
            ) : 'Start A New Chat'}
            
        </div>
    )
}
