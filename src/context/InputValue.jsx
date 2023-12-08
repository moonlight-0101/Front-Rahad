import React, { createContext,useState ,useEffect } from 'react';
import Cookies from "universal-cookie";
export const ValueContext=createContext()

const InputValue = ({children}) => {
    const cookies = new Cookies();
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(true)
  const login_token = cookies.get("token");
  console.log(login_token); //Token 66e06187ad133ace0ccf18f6cf5ed2b7d05dcc27
  const [userData, setUserData] = useState({
    name_of_residence: "",
    type_residence: "",
    degree_residence: "",
    state: "",
    city: "",
    address: "",
    phone_number: "",
    mobile_phone_number: "",
    website_address: "",
    room_delivery_time: "",
    construction_date: "",
    floor_count: "",
    Language: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backendrahad.pythonanywhere.com/ResidenceInfoCompletionView/",
          {
            headers: {
              "Content-Type": "application/json",
               Authorization: login_token,
            },
          }
        );
        if (response.data) {
          setUserData({
            name_of_residence: response.data.name_of_residence,
            type_residence: response.data.type_residence,
            degree_residence: response.data.degree_residence,
            state: response.data.state,
            city: response.data.city,
            address: response.data.address,
            phone_number: response.data.phone_number,
            mobile_phone_number: response.data.mobile_phone_number,
            website_address: response.data.website_address,
            room_delivery_time: response.data.room_delivery_time,
            construction_date: response.data.construction_date,
            floor_count: response.data.floor_count,
            Language: response.data.Language,
          });
          setLoading(false)
          console.log("response.data", response.data);
          console.log();
        }
      
      } catch (error) {
        setError("متاسفانه خطا در دریافت اطلاعات رخ داده است")
      }
    };
    fetchData();
  },);

    return (
        <ValueContext.Provider value={{userData,setUserData}}>
            {children}
        </ValueContext.Provider>
       
    );
};


export default InputValue;