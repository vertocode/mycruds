import { InternationalizationTexts } from "@/types/InternationalizationTexts";

export const en: InternationalizationTexts = {
    header: {
        user: {
            logout: 'Logout'
        }
    },
    login: {
        title: 'Sign in',
        submitLabel: 'Login',
        dontHaveAccountYet: 'Don\'t have an account yet?',
        createAccount: 'Sign up',
        feedback: {
            success: 'Login success',
            userNotFound: 'User not found, check your credentials',
            error: 'Login failed'
        }
    },
    signUp: {
        title: 'Create your account',
        submitLabel: 'Sign up',
        alreadyHaveAccount: 'Already have an account?',
        login: 'Sign in',
        feedback: {
            success: 'Sign up success',
            userAlreadyExists: 'User already exists',
            error: 'Sign up failed'
        }
    },
    email: {
        label: 'E-mail',
        placeholder: 'Type your e-mail',
        required: 'E-mail is required',
        shouldBeValid: 'E-mail must be a valid e-mail address'
    },
    password: {
        label: 'Password',
        placeholder: 'Type your password',
        required: 'Password is required',
        shouldInclude6Chars: 'Password must include at least 6 characters'
    },
    repeatPassword: {
        label: 'Repeat password',
        placeholder: 'Type your password again',
        required: 'Password is required',
        shouldInclude6Chars: 'Password must include at least 6 characters',
        shouldMatchPassword: 'Passwords must match'
    },
    name: {
        label: 'Name',
        placeholder: 'Type your name',
        required: 'Name is required',
        shouldInclude3Chars: 'Name must include at least 3 characters'
    },
    crud: {
        new: {
            title: (username: string) => `Hello, ${username}! I noticed you don't have a crud created yet, how about creating one now? 🚀`,
            description: 'Our crud system is very simple and easy to use, you can create, edit and delete cruds in a very intuitive and fast way!',
            createNow: 'Create now'
        }
    }
}