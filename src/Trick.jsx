import {useState} from "react";

function Trick({title, description, category}) {

    const [flipped, setFlipped] = useState(false)
   return (
       <div onClick={()=>setFlipped(!flipped)}>
           {!flipped &&
           <div  className='card'>
               <h2>{title}</h2>
               <p>{category}</p>

           </div>}

           {flipped &&
            <div  className='card-back'>
                <p>{description}</p>
            </div>
           }
       </div>
   )
}

export default Trick