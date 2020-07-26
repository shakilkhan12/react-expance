import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Navbar, Button } from "../GlobalCSS"
const Nav = () => {
    const status = useSelector(state => state.status);
    const modelDispatch = useDispatch();
    console.log('nav sttus', status);
   const updateModel = () => {
       modelDispatch({type: 'MODEL_ACTION'})
   }
   return(
   <Navbar>
    <Button onClick={updateModel}>Add Expence</Button>
   </Navbar>
   )

}

export default Nav;