interface IRedirect {
    text: string;
    button: "Sign Up" | "Sign In";
    redirectUrl: "SignIn" | "SignUp";
}

export type AuthParamsType = {
    password: string;
    email: string;
};

export type UserType = {
    id: number | null;
    email: string;
    first_name: string;
    last_name: string;
};

export type ChatType = {
    id: string;
    name: string;
};

export type AuthDto = {
    message: string;
};

export type RedirectType = {
    SignIn: IRedirect;
    SignUp: IRedirect;
};
