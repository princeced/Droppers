import { React, useState } from 'react'
import { Card, TextField, Page, Text, Stack, FormLayout, Button, Banner } from '@shopify/polaris'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const [loginvalue, handleloginvalue] = useState({
    username: "",
    password: ""
  });
  const [errormsg, handleerrormsg] = useState(false);
  const [toastmsg, handletoastmsg] = useState(true);

  // const loginhandle = (str, idd) => { (idd === "username") ? handleloginvalue({ ...loginvalue, username: str }) : handleloginvalue({ ...loginvalue, password: str }); };

  const loginhandle = (value, id) => {
    // console.log(e)
    // const name = e.target?.name;
    // const value = e.target?.value;
    // console.log(e.target.name)
    handleloginvalue({ ...loginvalue, [id]: value });
  }

  function submitlogin() {

    if (loginvalue.username !== "") {
      if (loginvalue.password !== "") {
        handleloginvalue();
        handleerrormsg(false);
        axios.post('http://localhost:5001/login', loginvalue).then((response, error) => {
          if (response.data !== '') {
            console.log(response);
            handletoastmsg(true);
            navigate("/panel/dashboard");
          }
          else {
            handletoastmsg(false)
          }

        }).catch((error) => {
          console.log(error)
        })
      }
      else {
        handleerrormsg(true);
      }
    }
    else {
      handleerrormsg(true);

    }
  }
  const gotosignup = () => {
    navigate("/signup");
  }

  return (
    <>
      <Page narrowWidth>
        {/* {
          toastmsg ? <><Toast content="Successfull Logged in" /></> : <></>
        } */}
        <Card sectioned>
          <Stack spacing='loose' vertical>
            {errormsg ? <Banner status="critical">
              <p>Invalid Credentials :-)</p>
            </Banner> : <></>}
            <Stack distribution='center' spacing='loose' >
              <Text variant="headingXl" as="h2">Login</Text>
            </Stack>
            <FormLayout>
              <TextField id="username" name="username" type='text' label="Username" value={loginvalue?.username} onChange={loginhandle} />
              <TextField id="password" name="password" type='password' label="Password" value={loginvalue?.password} onChange={loginhandle} />
              <Button onClick={submitlogin} primary fullWidth>Sign In</Button>
            </FormLayout>
            <Button onClick={gotosignup} plain fullWidth>Sign Up</Button>
          </Stack>
        </Card>
      </Page>
    </>
  )
}

export default Login
