import { useContext } from "react"
import globalContext from "@/app/context/context";

export default function Hamburger () {

    const {state, dispatch } = useContext(globalContext);

  const menuHandler = () => {

    if(state.menuOpen == true) {
      dispatch({type:"MENUOPEN", payload: false });
    }
    else {
      dispatch({type:"MENUOPEN", payload: true });
    }
  
  }  

    return (
        <>
            <button className='lg:hidden hamburger absolute z-10  right-0 bg-white py-2 px-5' onClick={menuHandler}>
                {state.menuOpen == true ? 'OPEN' : 'CLOSED'}
                
            </button>
        </>
    )
}