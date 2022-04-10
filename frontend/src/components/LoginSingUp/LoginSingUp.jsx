import React, { useState, useRef } from "react";
import "./LoginSingUp.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";

function LoginSingUp() {
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switchTab = useRef(null);

  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("");
  const [avatar, setAvatar] = useState("")
  const [avatarPreview,setAvatarPreview] = useState("/Profile.png")
  const [user, setUser] = useState({
    name: "",
    email:"",
    password: "",
  })

  const { name, email, password } = user
  

  const loginSubmit = () => { 
    console.log('login from submited')
  }

  const registerSubmit = (e) => { 
    e.preventDefault()
    const myForm = new FormData();
    myForm.set("name",name)
    myForm.set("email", email)
    myForm.set('password', password)
    myForm.set('avatar', avatar)
    console.log("register from submited");
  }

  const registerDataChange = (e) => { 
    if (e.target.avatar === "avatar") {
      const reader = new FileReader()
      reader.onload = () => { 
        if (reader.readyState === 2) { 
          setAvatarPreview(reader.result)
          setAvatar(reader.result);
        }
      }
      reader.readAsDefaultURL(e.target.files[0])

    } else { 
      setUser({...user,[e.target.name]:e.target.value})
    }
  }
  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switchTab.current.classList.add("shiftToNeutral");
      switchTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switchTab.current.classList.remove("shiftToNeutral");
      switchTab.current.classList.add("shiftToRight");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <div className="LoginSignUpContainer">
      <div className="LoginSignUpBox">
        <div>
          <div className="login-signup-toggle">
            <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
            <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
          </div>
          <button ref={switchTab}></button>
        </div>
        <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
          <div className="loginEmail">
            <MailOutlineIcon />
            <input
              type="email"
              placeholder="Email"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.email)}
            />
          </div>
          <div className="loginPassword">
            <LockOpenIcon />
            <input
              type="password"
              required
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Login" className="loginBtn" />
        </form>
        <form
          className="signUpForm"
          ref={registerTab}
          encType="multipart/form-data"
          onSubmit={registerSubmit}
        >
          <div className="signUpName">
            <FaceIcon />
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={registerDataChange}
            />
          </div>

          <div className="signUpEmail">
            <MailOutlineIcon />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={registerDataChange}
            />
          </div>
          <div className="signUpPassword">
            <LockOpenIcon />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              onChange={registerDataChange}
            />
          </div>
          <div id="registerImage">
            <img src={avatarPreview} alt="Avatar Preview" />
            <input
              type="file"
              name="avatar"
              accept="image/"
              onChange={registerDataChange}
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="signUpBtn"
          />
        </form>
      </div>
    </div>
  );
}

export default LoginSingUp;
