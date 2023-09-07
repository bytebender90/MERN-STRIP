import { createContext, useContext, useState } from "react";

const StateContext = createContext( {
user : {
   _id: "64c8a3807057753dd1d4b81f",
    FirstName: "NO",
    LastName: "Name",
    Email: "Info@FunnelHuckerLab.com",
    Password: "nop",
    Image: "https://images.eliejah.com/defulat.png",
    JobTitle: "Funnel Fan",
    phone: "+1",
    Address: "Earth",
    UserType: "user",
    Active: 0,
} ,
STRIP_PUBLIC_KEY : "pk_test_51Nb0MeGz9L33FQ5net3MYw0oFeOSWvpYR4eYsq88BeoHaNJHAk0ffoh4AN3DVpJ9Hc5XEggqvSjDwDqgImsD502j00FwE8UGLm" 
,
token : null ,
notifications : null , 
SetUser :  () =>{} , 
setToken : () => {}
});

export const ContextProvider = ({children}) =>{
    let cdef_user = null ; 
    if (localStorage.getItem('USER') !== "[object Object]") cdef_user = JSON.parse(localStorage.getItem('USER')) 

    const [user , _SetUser ] = useState (cdef_user) ; 
    const [token , _setToken] = useState ("localStorage.getItem('ACCESS_TOKEN')") ; 
    const [notifications , SetNotifications] = useState ([]) ; 

    const SetNotification  =(ms,ty ) =>{ 
        const not_id =notifications.length + 1  ; 
        const noti ={message : ms , type : ty , id : not_id} ; 
        console.log (ms  + " --- " + ty) ;
        SetNotifications ( old => [ ...old, noti]) ; 
        console.log(notifications) ;
        setTimeout(() =>{ 
            SetNotifications((notifications) =>
            notifications.filter((Notification) => Notification.id !== not_id))
        }, 4000
        );

    }
    const setToken = (token) => {
        _setToken (token) ; 
        if (token ) {
            localStorage.setItem('ACCESS_TOKEN' , token ) ; 
        }else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    const SetUser = (user) => {
        _SetUser (user) ; 
        if (user) {
            localStorage.setItem('USER' , JSON.stringify(user) ) ; 
        }else {
            localStorage.removeItem(user)
        }
    }
    const STRIP_PUBLIC_KEY = "pk_test_51Nb0MeGz9L33FQ5net3MYw0oFeOSWvpYR4eYsq88BeoHaNJHAk0ffoh4AN3DVpJ9Hc5XEggqvSjDwDqgImsD502j00FwE8UGLm" 


return (
    <StateContext.Provider value ={{
       user , 
       token ,
       SetUser ,
       notifications,
       SetNotification , 
       setToken , 
       STRIP_PUBLIC_KEY  
    }} >
{children}
    </StateContext.Provider>
)

}
export const useStateContext = () => useContext(StateContext)