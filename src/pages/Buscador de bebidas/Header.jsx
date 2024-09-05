import Logo from "../../../public/logo.svg"
import { Outlet } from "react-router-dom" 
import {NavLink} from "react-router-dom"

export default function Header() {
  return (
    <div>
        <div className="header">
          <div className="logoHeader">
            <img src={Logo} alt="" />
          </div>
          <div className="pages">
            <h2>
              <NavLink to="/bebidas" className={({isActive})=>
                isActive ? "linkActivo":"linkInactivo"
              }>Inicio</NavLink> 
            </h2>
            <h2>
              <NavLink to="/buscador" className={({isActive})=>
                isActive ? "linkActivo":"linkInactivo"
              }>Buscador</NavLink> 
            </h2>
          </div>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
