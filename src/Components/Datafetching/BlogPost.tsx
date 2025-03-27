export type BlogPost = {
    id: number,
    title: string,
    text: string
}

type BologTypeProsp = {
    posts: BlogPost[]
}

export default function Blogposts({posts}:BologTypeProsp ){

    return(
        <div id="blog-posts">
            <h1>Blog posts</h1>
            <ul>

                {
                    posts && posts.map((post:BlogPost)=>(
                        <li>
                            <h2>{post.title}</h2>
                            <p>{post.text}</p>
                        </li>
                    ))
                }

            </ul>

        </div>
    )

}