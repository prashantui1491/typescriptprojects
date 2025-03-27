import { get } from './http'
import { BlogPost } from './BlogPost'
import { useEffect, useState, type ReactNode } from 'react'
import Blogposts from './BlogPost'


type RawdataBlogpost = {
    id: number,
    userId: number,
    title: string,
    body: string

}
export default function Parent() {

    const [fetchedData, setFetchedData] = useState<BlogPost[]>()


    useEffect(() => {
        async function fetchPost() {
            const data = await get('https://jsonplaceholder.typicode.com/todos') as RawdataBlogpost[]

            const blogPost:BlogPost[]  = data.map((rawpost) => {
                return {
                    id: rawpost.id,
                    title: rawpost.title,
                    text: rawpost.body
                }
            })

            setFetchedData(blogPost)
        }

        fetchPost()
    }, [])

    let content: ReactNode


    if(fetchedData){
        content = <Blogposts posts={fetchedData}/>
    }



    return (
        <main>

            {content}

        </main>
    )
}