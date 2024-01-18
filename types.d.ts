import { Dispatch,SetStateAction } from "react";
interface User {
    id:number,
    name:string,
    email:string
}

interface MyCustomType {
    user:null | User,
    setUser:Dispatch<SetStateAction<null | User>>
}