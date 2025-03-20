import React, {useState} from "react";

interface Userformdata {
    name: string,
    email: string,
    mobile: string
}

const UserForm = () =>{

    const [formData, setFormData] = useState<Userformdata>({
        name: "",
        email: "",
        mobile: ""
    })

    const [formList, setFormList] = useState<Userformdata[]>([])



    return (
        <div>
            <h2>User Form</h2>
            <form>
                <div>
                  
                </div>
            </form>


        </div>
    )
}

export default UserForm