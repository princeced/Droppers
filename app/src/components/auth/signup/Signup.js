import React, { useState } from 'react'
import { Card, TextField, Page, Text, Stack, FormLayout, Button, RadioButton, Banner } from '@shopify/polaris'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();
    const [signupvalue, handlesignupvalue] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        gender: "",
    });
    const [errormsg, handleerrormsg] = useState(false);

    const handlesignupfield = (textvalue, idvalue) => {

        if (idvalue === "username") {
            handlesignupvalue({ ...signupvalue, username: textvalue });
        }
        else if (idvalue === "firstname") {
            handlesignupvalue({ ...signupvalue, firstname: textvalue });
        }
        else if (idvalue === "lastname") {
            handlesignupvalue({ ...signupvalue, lastname: textvalue });
        }
        else if (idvalue === "password") {
            handlesignupvalue({ ...signupvalue, password: textvalue });
        }
        else {
            handlesignupvalue({ ...signupvalue, gender: idvalue });
        }
    }
   
    const validate = (e) => {
        if (signupvalue.username === "" || signupvalue.firstname === "" || signupvalue.lastname === "" || signupvalue.password === "" || signupvalue.gender === "") {
            handleerrormsg(true);
        }
        else {
            handleerrormsg(false);
            
            axios.post('http://localhost:5001/signup', signupvalue).then((response, error) => {
                console.log(response)
                handlesignupvalue();
            }).catch((error) => {
                console.log(error)
            })
        }
    }
    const gotoLogin=()=>{
        navigate("/");
      }

    return (
        <>
            <Page narrowWidth>
                <Card sectioned>
                    {errormsg ? <Banner status="critical">
                        <p>Please fill full details :-)</p>
                    </Banner> : <></>}

                    <Stack spacing='loose' vertical>
                        <Stack distribution='center' spacing='loose' >
                            <Text variant="headingXl" as="h2">SIGNUP</Text>
                        </Stack>
                        <FormLayout>
                            <TextField type='text' label="Username" id="username" name="username" value={signupvalue?.username} onChange={handlesignupfield} />
                            <TextField type='text' label="First Name" id="firstname" name="firstname" value={signupvalue?.firstname} onChange={handlesignupfield} />
                            <TextField type='text' label="Last Name" id="lastname" name="lastname" value={signupvalue?.lastname} onChange={handlesignupfield} />
                            <TextField type='password' label="Password" id="password" name="password" value={signupvalue?.password} onChange={handlesignupfield} />
                            <Stack spacing='tight' vertical>
                                <Text variant="bodyMd" fontWeight='regular' as="span">
                                    Gender
                                </Text>
                                <RadioButton
                                    label="Male"
                                    id="male"
                                    name="gender"
                                    value={signupvalue?.gender}
                                    onChange={handlesignupfield}
                                />
                                <RadioButton
                                    label="Female"
                                    id="female"
                                    name="gender"
                                    value={signupvalue?.gender}
                                    onChange={handlesignupfield}
                                />
                            </Stack>
                            <Button onClick={validate} primary fullWidth>Signup</Button>
                            <Button onClick={gotoLogin} plain fullWidth>Login</Button>
                        </FormLayout>
                    </Stack>
                </Card>
            </Page>
        </>
    )
}

export default Signup
