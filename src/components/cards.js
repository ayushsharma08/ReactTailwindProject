import React from 'react'

const Cards = ({ image }) => {
    const tags = image.tags.split(',');
    return (
        <div className='max-w-sm rounded  overflow-hidden shadow-lg'>
            <img src={ image.webformatURL } className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by { image.user }
                </div>
            </div>
            <div className="px-6 py-4">
                <ul>
                    <li>
                        <strong>Views:</strong>
                        { image.views }
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        { image.downloads }
                    </li>
                    <li>
                        <strong>Likes:</strong>
                        { image.likes }
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">

                { tags.map((tag,index) => (
                    <span key ={index} className="inline-block py-1 px-3 rounded-full bg-gray-200 text-sm font-semibold text-gray-700 mr-2 ">
                        #{ tag }
                    </span>
                )) }
            </div>
        </div>
    )
}

export default Cards