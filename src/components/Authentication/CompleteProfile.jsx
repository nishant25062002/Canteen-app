import {useState} from "react"

const CompleteProfile = () => {

  const [Owner, setOwner] = useState(true);

  const toggle = () =>{
    setOwner(!Owner);
  }

  const classes = {
     input: 'border-2 border-gray-200 p-2 rounded-md w-full text-[16px] ' ,
     para: 'text-[12px] font-semibold py-3',
     head: 'flex flex-col  mx-2 my-10 text-black max-w-[600px] p-2 border-2 border-gray-200 rounded-2xl'
  }

  return (
    <div className={classes.head}>
         <h1 className="text-3xl mx-auto flex justify-center font-semibold my-6 w-full py-4 bg-[#9EC55B]">Sign Up</h1>
         <p className={classes.para}>Name : </p>
         <input className={ classes.input } placeholder="Enter your Name"></input>
         <p className={classes.para}>Email : </p>
         <input className={ classes.input } placeholder="Enter your Email address"></input>
         <p className={classes.para}>Phone Number : </p>
         <input className={ classes.input } placeholder="Enter phone number"></input>

         <div className="flex flex-col my-4 text-xl">
          <div className="flex  items-center py-4" >
           <a>Are you a owner </a>
           <input className='h-4 w-4 ml-8 mt-2' onChange={toggle} type="checkbox"></input>
          </div>
           <div className={ !Owner ? 'flex flex-col' : 'hidden'}>
              <p className={classes.para} >Business Name : </p>
              <input className={ classes.input } placeholder="Enter Business Name"></input>
           </div>
         </div>

         <button className=" w-[40%] h-14 bg-blue-600 rounded-md mx-auto mt-8 text-white text-[20px] hover:bg-blue-950 mb-4">SignUp</button>
    </div>
  )
}

export default CompleteProfile