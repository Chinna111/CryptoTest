import React from "react";
import './signUp.scss';


const SignUpScreen = () => {

    return (
        <div id="signform">
            <FormHeader title="SignUp" />
            <Form />
            <OtherMethods />
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
            description="Phone"
            placeholder="Enter your Phone"
            type="password"
        />

        <FormInput
            description="Eamil"
            placeholder="Enter your Email"
            type="password"
        />

        <FormInput
            description="Password"
            placeholder="Enter your password"
            type="password"
        />
        <FormButton title="SignUp" />
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
    <div id="alternativesignUp">
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

export default SignUpScreen;