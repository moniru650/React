import React from 'react'

export default function ObJect() {

    const SubmCit = (e) => {
        e.preventDefault();
        const errors = validation();
        setError(errors);d
        // setError(validation());
        // let data = {
        //   email: user.email,
        //   password: user.password,
        // };
    
        // dispatch(signIn(data));
        if (Object.keys(errors).length === 0){
          let data = {
            email: user.email,
            password: user.password,
          };
          dispatch(signIn(data));
        }
      };
      const RedirectUser = () => {
        let token = localStorage?.getItem("token");
        let isInSignInPage = window.location.pathname.toLowerCase() === "/signin";
    
        if (token !== null && token !== undefined && token !== "") {
          isInSignInPage && navigate("/");
        }else {
          // If the token is not present, stay on the login page
          !isInSignInPage && navigate("/login");
      };
    }

  return (
    
  )
}
