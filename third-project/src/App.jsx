 import { useState } from "react";

 function App(){
  const [isFollowed , setIsFollowed] = useState(false)
   return(
     <div>
         <button onClick={()=>setIsFollowed(!isFollowed)  }> 
           {isFollowed ? "Following" : "Follow" }
         </button>
     </div>
   )
 }

 export default App;
