import { RedirectType } from "@/types/types";

export const rules = {
    email: {
        required: "Email is required!",
        pattern: {
            value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
            message: "Must be formatted: john.doe@email.com",
        },
    },
    password: {
        required: "Password is required!",
        pattern: {
            value: /^(?=(.*[a-z]|.*[A-Z]))(?=.*[0-9]).{8,}$/,
            message:
                "The password should be contain at least one letter and number and at least 8 characters",
        },
    },
};

export const button = {
    SignIn: {
        text: "Sign In",
    },
    SignUp: {
        text: "Sign Up",
    },
};

export const redirect: RedirectType = {
    SignIn: {
        text: "Don't have an account?",
        button: "Sign Up",
        redirectUrl: "SignUp",
    },
    SignUp: {
        text: "Already have an account?",
        button: "Sign In",
        redirectUrl: "SignIn",
    },
};
