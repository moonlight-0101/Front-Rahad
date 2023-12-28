import AddImage from "./page/AddImage";
import Home from "./page/Home";
import Login from "./page/Login";
import Location from "./page/Location";
import Setting from "./page/setting";
import MyComponent from "./page/MyComponent";

let routes=[
    {path:"/",element:<Login/>},
    {path:"/home",element:<Home/>},
    {path:"/setting",element:<Setting/>},
    {path:"/addimage",element:<AddImage/>},
    {path:"/location",element:<Location/>},
    {path:"/mycomponent",element:<MyComponent/>}

]
export default routes   