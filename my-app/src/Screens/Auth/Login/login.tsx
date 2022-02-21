import React from "react";
import './login.scss';


const LoginScreen = () => {
    
        return (
            <div id='screenLogin'>
                <div id="loginform">
                    <FormHeader title="Login" />
                    <Form />
                    <OtherMethods />
                </div>
            </div>
            
        );
    
}

const FormHeader = (props: any) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props: any) => (
    <div>
        <FormInput
            description="Username"
            placeholder="Enter your username"
            type="text"
        />
        <FormInput
            description="Password"
            placeholder="Enter your password"
            type="password"
        />
        <FormButton title="Log in" />
    </div>
);

const FormButton = (props: any) => (
    <div id="button" className="row">
        <button>{props.title}</button>
    </div>
);

const FormInput = (props: any) => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
);

const OtherMethods = (props: any) => (
    <div id="alternativeLogin">
        <label>Or sign in with:</label>
        <div id="iconGroup">
            <Facebook />
            <Twitter />
            <Google />
        </div>
    </div>
);

const Facebook = (props: any) => <a href="#" id="facebookIcon"></a>;

const Twitter = (props: any) => <a href="#" id="twitterIcon"></a>;

const Google = (props: any) => <a href="#" id="googleIcon"></a>;

export default LoginScreen;