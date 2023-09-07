import { useStateContext} from "../../context/ContextProvidor";

export default function UserAcState () {
    const {user    } = useStateContext  () ; 
   
 if (!user.Active) 
     return (   <span className="btn btn-success  btn-round test-xs p-2 m-2 ">
      ACTIVE
   </span>    );  
else 
return (   <span className="btn btn-danger  btn-round test-xs p-2 m-2 ">
inoperative
</span>    ); 

  
}  