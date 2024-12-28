import { createContext } from "react"



export const StoreContext = createContext(null);

const StoreContextProider = (props)=>{


    const contextValue = {

    }

    return(
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProider