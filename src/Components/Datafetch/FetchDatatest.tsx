import React, { useState, useEffect } from "react";

// Define the type for each todo item
interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

// Define the type for the API response
interface ApiResponse {
    todos: Todo[];
}

const FetchData = () => {
    const Dummy_URL = "https://dummyjson.com/todos?limit=10"; // Change URL to test error case

    const [data, setData] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null); // Reset error before fetching new data

        fetch(Dummy_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                return response.json();
            })
            .then((json: ApiResponse) => {
                setData(json.todos);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const completedData = data.filter((item) => item.completed)
    const notcompletedDtata = data.filter((item) => !item.completed)

    console.log(completedData, "completedData")

    const handleToggleTodo = (e:React.FormEvent, id:number) => {

        const updatedTodo = data.map((item)=>{
            if(item.id === id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }

            return item
        })

        setData(updatedTodo)

    }

    return (
        <div>
            <h2>Data Fetching</h2>

            {loading && <span style={{ color: "blue" }}>Loading...</span>}
            {error && <span style={{ color: "red" }}>Error: {error}</span>}

            <div style={{ display: "flex" }}>
                <div>
                    <h2>Completed Todo</h2>

                    {!loading && !error && completedData.length > 0 ? (
                        <ul style={{ listStyle: "none" }}>
                            {completedData.map((item) => (


                                <li key={item.id}>
                                    <input type="checkbox" checked={item.completed} onChange={(e)=>handleToggleTodo(e, item.id)} />
                                    {item.todo}


                                </li>

                            ))}
                        </ul>
                    ) : (
                        !loading && !error && <p>{"No data avaialable"}</p>
                    )}

                </div>

                <div>
                    <h2>Completed Todo</h2>

                    {!loading && !error && notcompletedDtata.length > 0 ? (
                        <ul style={{ listStyle: "none" }}>
                            {notcompletedDtata.map((item) => (


                                <li key={item.id}>
                                    <input type="checkbox" checked={item.completed} onChange={((e)=>handleToggleTodo(e, item.id))} />

                                    {item.todo}


                                </li>

                            ))}
                        </ul>
                    ) : (
                        !loading && !error && <p>{"No data avaialable"}</p>
                    )}

                </div>



                <div>

                </div>
            </div>


        </div>
    );
};

export default FetchData;
