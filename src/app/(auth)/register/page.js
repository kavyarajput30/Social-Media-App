"use client"
import { useRouter } from "next/navigation";
const RegisterPage = () => {
    function handleSubmit(){
        router.push("/");
    }

    return(
        <div style={{ width: "100vw", height: "80vh" , display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
           <h2>New User</h2>
           <form style={{ width: "50%",  textAlign:"center"}}>
            <div style={{padding:7}}>
                <label>Name</label>
                <input type="text"placeholder="your name"  required={true}/>
            </div >
               <div style={{padding:7}}>
                   <label>Email</label>
                   <input type="email" placeholder="enter your email" required={true}/>
               </div>
               <div style={{padding:7}}>
                   <label>Phone</label>
                   <input type="phone" placeholder="enter your phone number" required={true}/>
               </div>
               <div style={{padding:7}}>
                   <label>Password</label>
                   <input type="password" placeholder="enter strong password" required={true}/>
               </div>
               <div style={{padding:7}}>
                   <button style={{fontSize:20,padding:4, backgroundColor:"lightblue"}} >Register</button>
               </div>
           </form>
        </div>
    )
}
export default RegisterPage;