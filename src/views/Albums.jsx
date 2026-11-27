import useFetch from "../hooks/useFetch"
import { useState } from "react"

export default function Albums() {
    const [url, setUrl] = useState()
    const data = useFetch(url, url)

    return (
        <>
            <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/albums')}>Albums</button>
            <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/comments')}>Comments</button>
            <ul>
                {data && data.map((dato) =>
                    <li key={dato.id}>{dato.title || dato.body}</li>
                )}
            </ul>
        </>
    )
}