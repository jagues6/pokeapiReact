import imagen from "../../images/banner.jpg"
import { Outlet } from "react-router-dom" 

export default function Header() {
  return (
    <div>
        <div>
            <img src={imagen} alt="" style={{height:"500px", width:"100%"}} />
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
