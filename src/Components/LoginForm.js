import React,{useState} from "react";
const LoginForm=()=>{
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""

    })
    const [username,setName]=useState(false)
    const [emailerror,setemailError]=useState(false);
    const [passworderror,setPasswordError]=useState(false);
    const [confirmPasswordError,setConfirmPasswordError]=useState(false);
    const [classname,setClassName]=useState(false)
    
   const inputClassName={classname}? "border1":"border2";
    const {name,email,password,confirmPassword}=user;
    function userHandler(e){
        console.log(e.target.value)
        let item=e.target.value
        if(item.length<3){
            setName(true)
            setClassName(true)
        }
        else{
             setName(false)
             setClassName(false)
        }
        let key=e.target.name;
        setUser({...user,[key]:e.target.value})
    }
    function userEmailHandler(e){
        if(e.target.value.includes("@gmail.com")){
            setemailError(false);
            setClassName(false)
        }
        else{
            setemailError(true);
            setClassName(true)
        }
        let key=e.target.name;
        setUser({...user,[key]:e.target.value})
    }
    function userPassword(e){
        console.log(e.target.value)
        if(password.length<7){
            setPasswordError(true)
            setClassName(true)
        }
        else{
            setPasswordError(false)
            setClassName(false)
        }
        let key=e.target.name;
        setUser({...user,[key]:e.target.value})
    }
    function userConfirmPassword(e){
        console.log(e.target.value)
        if(e.target.value!==password){
            setConfirmPasswordError(true)
            setClassName(true)
        }
        else {
            setConfirmPasswordError(false)
            setClassName(false)
        }
        let key=e.target.name;
        setUser({...user,[key]:e.target.value})
    }
       

    
    function submitUser(){
        if(!name||!email||!password||!confirmPassword){
            alert("Please Fill All The Fields");
        }
        else if (password!==confirmPassword){
            alert("Can't Submit the Form")
        }
        else{
            alert("Form Submitted Succesfully")
        }
        
    }
    return (
        <div className="form-input">
        <form  onSubmit={submitUser}>
       Name:<br/> <input className={inputClassName} type="text" name="name" value={name} onChange={userHandler}/><br/>
      {username?<h4 className="form">Name should have atleast 3 Characters</h4>:" "}
       Email:<br/><input type="email"name="email" value={email} onChange={userEmailHandler} /><br/>
       {emailerror?<h4 className="form">Invalid Email</h4>:" "}
       Password:<br/> <input type="password" name="password" value={password} onChange={userPassword}/><br/>
       {passworderror?<h4 className="form"> Password must have 8 Characters long</h4>:""}
       Confirm Password:<br/> <input type="password"  name="confirmPassword"value={confirmPassword} onChange={userConfirmPassword}/><br/>
       {confirmPasswordError?<h4 className="form">Passwoord do not match</h4>:""}
      <br/> <button className="submit" type="submit">Submit</button>

        </form>
        </div>
    )
}
export default LoginForm;