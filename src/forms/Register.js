import React from 'react'
import {Link} from 'react-router-dom'


import {device} from '../Device';
import styled from 'styled-components';
import * as global from '../GlobalStyles.js';

const Container = styled(global.FlexDiv)`
max-width: 700px;
margin: 3rem auto;
margin-top: 10rem;
flex-direction: column;
font-size: 2rem;
font-family: "AndaleMono";
font-weight: 900;

`;

const Title= styled.h2`
`;


const Row=styled(global.FlexDiv)`
    width: 900px;
`;
const Input = styled.input`
padding: .6rem;
    width: 100% ;
    height: 6rem;
    border: 1px solid lightgray;
    margin: 2rem 2rem;
    &:focus{
        outline: none;
    }`;
const Section = styled.section`
    background: none;
    border: 1px solid #EEEEEE;
    position: relative;
`;
const SectionTitle = styled.p`
    background: #EEEEEE;
    width: 100px;
    text-align: center;
    position: absolute;
    top: -35px;
    left: 2rem;
`;
const TextArea = styled.textarea`
margin: 2rem 0;
width: 100%;
height: 20rem;`;
const Checkbox = styled.input``;
const SignUpButton = styled.button``;
const OldAccount = styled.div``;
const Login = styled.div``;
const Terms = styled.span``;
const Policy = styled.span``;
const Register = () => {
    return (
        <Container >
            {/* <img src= {Logo} alt="Farmore Logo"/> */}
            <Title> Sign Up </Title>
            <Row>
                <Input
                    placeholder = "First Name"
                    onChange
                    // value
                />
                <Input
                    placeholder = "Last Name"
                    onChange
                    // value
                />
            </Row>
            <Row>
                <Input
                    placeholder = "Email"
                    onChange
                    // value
                    type="email"
                />
                <Input
                    placeholder = "Phone"
                    onChange
                    // value
                />
            </Row>
            <Row>
            <Input
                    placeholder = "Company Name"
                    onChange
                    // value
                />
            </Row>
            <Section>
            <SectionTitle>Address</SectionTitle>

            <Row>
                <Input
                    placeholder = "Street Address 1"
                    onChange
                    // value
                />
            </Row>
            <Row>
                <Input
                    placeholder = "Street Address 2"
                    onChange
                    // value
                />
            </Row>
            <Row>
                <Input
                    placeholder = "City"
                    onChange
                    // value
                />
            </Row>
            <Row>
                <Input
                    placeholder = "State / Province"
                    onChange
                    // value
                />
                <Input
                    placeholder = "Zip/Postal Code"
                    onChange
                    // value
                />
            </Row>
            <Row>
                <Input
                    placeholder = "Country"
                    onChange
                    // value
                />
            </Row>
            </Section>

            <Row>
                <TextArea
                    placeholder = "Please tell us a little about your business"
                    onChange
                    // value
                />
            </Row>
           <Row>
               <Checkbox
               onChange
               value
               type="checkbox"
               />
               I have read and agree to the <Terms>Terms and Conditions</Terms> and <Policy>Privacy Policy</Policy>
           </Row>

            
            
            <SignUpButton>
                SignUp
            </SignUpButton>
            <OldAccount>
                Already have an account?
                <Link to="/login">
                <Login>Login</Login>
                </Link>
            </OldAccount>
        </Container>
    )
}

export default Register
