// We have create a context

import { MyCustomType } from "@/types"
import { createContext } from "react"

export const UserContext = createContext<MyCustomType | undefined>(undefined)