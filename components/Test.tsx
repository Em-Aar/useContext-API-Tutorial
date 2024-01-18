'use client'
import { UserContext } from "@/context/UserContext"
import { useContext} from "react"

export default function Test() {
    const contextvalue = useContext<any>(UserContext);
    if(!contextvalue){
        throw new Error ('Context not found')
    } const {user} = contextvalue

    console.log("Test Component is re-rendered")


 
  return (
    <div className="flex flex-col items-center justify-between p-6 m-6 ring ring-red-500">
      <h2 className="text-xl font-bold">Test Component</h2>
      { user && 
      <div className="flex flex-col items-center justify-between p-4">
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>
        
      </div>
      }
    </div>
  )
}
