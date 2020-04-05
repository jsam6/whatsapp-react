import React from 'react'

import {Header as MessageHeader} from '../components/messages/Header';

const bg_image = require('../assets/whatsapp_background.png');

export default function Messages() {
    const data = [
        {
          name: "Francis Whitmans",
          message: "😜😝 Anyone who want to tag alone is more than welcome",
          time: "11:39 AM"
        },
        {
          name: "you",
          message: "🚤🏊🏄⛵🚣🌅💭",
          time: "11:42 AM"
        }
    ]
    return (
        <div>
            <MessageHeader/>
            <section class="h-screen bg-repeat pt-24" style={{backgroundImage: `url(${bg_image})` }} >
                {data.map((item, index) => {
                    if (item.name == 'you') {
                        return (
                            <article key={index} class="px-3 py-1 flex justify-end" >
                                <div class="rounded px-3 w-9/12 shadow bg-wa-lighter" >
                                    <span class="material-icons text-5xl absolute text-white right-0 -mr-3 -mt-5 text-wa-lighter">arrow_drop_down</span>
                                    <h1 class="text-red-500">{item.name}</h1>
                                <div>
                                    <p>{item.message}</p>
                                    <p class="text-xs text-gray-500">{item.time}</p>
                                </div>
                                </div>
                            </article>
                        )
                    } else {
                        return (
                            <article key={index} class="px-3 py-1 flex" >
                                <div class="rounded px-3 w-9/12 shadow bg-white" >
                                <span class="material-icons text-5xl absolute text-white left-0 -mt-5 -ml-3 " >arrow_drop_down</span>
                                <h1 class="text-red-500">{item.name}</h1>
                                <div>
                                    <p>{item.message}</p>
                                    <p class="text-xs text-gray-500">{item.time}</p>
                                </div>
                                </div>
                            </article>
                        )
                    }
                }
                
                
                )}
                
                </section>
        </div>
    )
}
