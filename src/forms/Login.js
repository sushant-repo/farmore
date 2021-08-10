import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../assets/images/logo-black.png';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faKey} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {device} from '../Device';
import styled from 'styled-components';
import * as global from '../GlobalStyles.js';
import { auth } from '../pages/utils/firebase';

library.add(fab, faUser, faKey);
dom.watch();

const Wrapper = styled(global.FlexDiv)`
    max-width: 700px;
    margin: 3rem auto;
    margin-top: 10rem;
    flex-direction: column;
    font-size: 2rem;
    font-family: "AndaleMono";
    font-weight: 900;

`;

const Title= styled.h2`
    letter-spacing: 6px;
    margin-bottom: 4rem;
`;

const InputWrapper = styled(global.FlexDiv)`
    margin-bottom: 3rem;    
`;

const InputIcon = styled(global.FlexDiv)`
    border:1px solid lightgray;
    padding: 1rem;
    height: 6rem;
    width: 6rem;
    color: gray;
`;

const Input = styled.input`
    padding: .6rem;
    width: 500px;
    height: 6rem;
    border: 1px solid lightgray;
    &:focus{
        outline: none;
    }
`;

const Options = styled(global.FlexDiv)`
    justify-content: space-between;
    width: 80%;
    font-weight: 900;
    `;

const KeepSignIn = styled(global.FlexDiv)`
    column-gap: .7rem;
`;
const Checkbox = styled.input``;
const ForgotPassword = styled.div`
    & a{
        color: #007680;
        text-transform: capitalize;
    }
`;
const LoginButton = styled.button`
    width: 80%;
    margin: 3rem 0;
    height: 4.5rem;
    text-transform: uppercase;
    letter-spacing: 1.4px; 
    border: 1px solid #007680;
    border-radius: 5px; 
    transition: all .3s ease;
    color: #007680;
    font-weight: inherit;

    &:hover{
        color: white;
        background-color: #007680;
    }
`;
const NewAccount = styled(global.FlexDiv)`
`;
const SignUp = styled.span`
    color: #007680;
`;
const Login = () => {

    //allows us to programmatically change the url
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //some fancy firebase login stuffs here

        auth.signInWithEmailAndPassword(username, password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        //some fancy firebase register stuffs here
        auth.createUserWithEmailAndPassword(username, password)
        .then(
            //successful
            (auth) => {
                console.log(auth);
                if(auth){
                    history.push('/');
                }
        })
        .catch(error => alert(error.message))
    }
    return (
        <Wrapper >
            {/* <img src= {Logo} alt="Farmore Logo"/> */}
            <Title> Login </Title>
            
            <InputWrapper >
                <InputIcon>
                    <FontAwesomeIcon icon={faUser}/>
                </InputIcon>
                <Input
                    placeholder = "Username"
                    onChange = {e=>setUsername(e.target.value)}
                    value ={username}
                />
            </InputWrapper>
            <InputWrapper>
                <InputIcon>
                <FontAwesomeIcon icon={faKey}/>
                </InputIcon>
                <Input
                    onChange = {e=>setPassword(e.target.value)}
                    value = {password}
                    placeholder="Password"
                    type="password"
                />
            </InputWrapper>

       
            <Options>
                <KeepSignIn>
                    <Checkbox
                        // onChange
                        // value
                        type="checkbox"
                    /> Keep signed in
                </KeepSignIn>
                <ForgotPassword>
                    <Link to="">
                        Forgot Password?
                    </Link>
                </ForgotPassword>
            </Options>
            <LoginButton type="submit" onClick={signIn}>
                Login
            </LoginButton>
            <NewAccount>
                Don't have an account? 
                {/* <Link to="/register"> */}
                <a href="#" onClick={register}>
                    <SignUp >Sign Up</SignUp>
                    </a>
                {/* </Link> */}
            </NewAccount>
        </Wrapper>
    )
}

export default Login
