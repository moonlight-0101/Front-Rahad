import AddImage from "./page/AddImage";
import Home from "./page/Home";
import Login from "./page/Login";
import Setting from "./page/setting";

let routes=[
    {path:"/",element:<Login/>},
    {path:"/home",element:<Home/>},
    {path:"/setting",element:<Setting/>},
    {path:"/addimage",element:<AddImage/>}
]
export default routes   