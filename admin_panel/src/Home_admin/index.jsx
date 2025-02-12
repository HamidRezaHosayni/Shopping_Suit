import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Login_slice from '../redux/Login_Slice_redux';

function Home_page() {

  const is_Login = useSelector((state) => state.is_Login.is_Login)
  const dispatch = useDispatch()

  const Authorization_token = window.localStorage.getItem("Token_validation")
  useEffect(() => {
    console.log("home_page")
    axios.post(`${process.env.REACT_APP_API_KEY}/varefiy_jwt`, Authorization_token, {
      headers: {
        "authorization": Authorization_token
      }
    }).then((value) => {
      console.log(value.data)
      if (window.localStorage.getItem("Token_validation")) {
        dispatch(Login_slice.actions.is_Login(window.localStorage.getItem("Token_validation")))
      }
      else {
        window.localStorage.removeItem("Token_validation")
        dispatch(Login_slice.actions.is_Login(null))
        window.location.replace(value.data.redirect)
      }
    }).catch((e) => {
      console.log(e.response.data)
      window.localStorage.removeItem("Token_validation")
      dispatch(Login_slice.actions.is_Login(null))
      window.location.replace(e.response.data.redirect)
    })
  }, [dispatch])

  return (
    <div>
      {is_Login ?
        <div>
         <p>home page</p>
        </div>
        :
        <div>
          <p>اعتبار ورود شما به اتمام رسیده لطفا مجدد وارد شوید</p>
        </div>
      }

    </div>
  )
}

export default Home_page