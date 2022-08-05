import { useState } from "react"
import React from 'react'

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const submit = (e) => {
        e.preventDefault()
        searchText(text);
    }

    return (
        <div>
            <div class="wx-full max-w-xs mx-auto">
                <form onSubmit={ submit } class="flex space-x-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">

                    <input onChange={ e => setText(e.target.value) } class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Image Here..." />

                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        search
                    </button>




                </form>

            </div>

        </div>
    )
}

export default ImageSearch