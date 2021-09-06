import { createContext,useState } from "react";

const Modalpro = createContext();


function ModalContex ({children}){
    const [value,setValue] = useState('salom');
  return(
    <Modalpro.Provider value={{value,setValue}}>
         {children}
    </Modalpro.Provider>
  )
}

export{
    ModalContex,
    Modalpro

}