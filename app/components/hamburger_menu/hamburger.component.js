import { useContext } from "react"
import globalContext from "@/app/context/context";
import styles from './hamburger.module.scss'

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
            <button className={`${styles.hamburger} lg:hidden hamburger absolute z-10 right-0 py-2 px-5`} onClick={menuHandler}>
                {state.menuOpen == true ? 'X' : 'Menu'}
            </button>
        </>
    )
}