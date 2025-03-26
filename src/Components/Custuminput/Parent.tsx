import Input from "./Input";
import ButtonCustom from './ButtonCustom'
import Container from './Container'
import { useRef } from "react";
import Form from "./Form";

export default function Parent() {

    const input = useRef<HTMLInputElement>(null)

    const form = useRef<HTMLInputElement>(null)

    function handleSave(data: unknown){
        const extractedData = data as {name: string, age: string}

        console.log(extractedData, "extracteddata")
    }

    return (
        <main>
            <Form onSave={handleSave} ref={form}>

            <Input label="Name" id="name" type= "text" ref={input}/>
            <Input label="Age" id="age" type= "number" ref={input}/>

            <p>
                <ButtonCustom>Save</ButtonCustom>
            </p>
            </Form>
         
    
        </main>

    )

}

