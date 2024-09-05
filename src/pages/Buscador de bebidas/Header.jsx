import Logo from "../../../public/logo.svg"
import { Outlet } from "react-router-dom" 

export default function Header() {
  return (
    <div>
        <div className="header">
          <div className="logoHeader">
            <img src={Logo} alt="" />
          </div>
          <div className="pages">
            <h2>Inicio</h2>
            <h2>Buscar</h2>
          </div>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
