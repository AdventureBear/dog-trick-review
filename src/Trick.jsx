function Trick({title, description, category}) {

   return (
       <div  className='card'>
           <h2>{title}</h2>
           <p>{category}</p>
           <p>{description}</p>
       </div>
   )
}

export default Trick