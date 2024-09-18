import { useMemo } from "react"
import Logo from "../../../public/logo.svg"
import { Outlet, useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function Header() {

  const { pathname } = useLocation()

  const isHome = useMemo(() => pathname === "/buscador", [pathname])

  console.log(isHome);


  return (
    <div>
      <div className={isHome ? "header2" : "header"}>
        <div className="logoHeader">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="pages">
            <h2>
              <NavLink to="/bebidas" className={({ isActive }) =>
                isActive ? "linkActivo" : "linkInactivo"
              }>Inicio</NavLink>
            </h2>
            <h2>
              <NavLink to="/buscador" className={({ isActive }) =>
                isActive ? "linkActivo" : "linkInactivo"
              }>Buscador</NavLink>
            </h2>
          </div>
        </div>

        <div>
          {
            isHome && (
              <form className="form" style={{ width: '30%' }}>
                <div style={{ padding: '10px' }}>
                  <label style={{ fontSize: '20px', textTransform: 'uppercase', fontWeight: 'bold' }}>Nombre o Ingredientes</label>
                  <input type="text" placeholder="Nombre o ingrediente..." style={{ marginTop: "20px", padding: "10px", width: "100%", boxSizing: "border-box" }} />
                </div>
              </form>
            )
          }

        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
