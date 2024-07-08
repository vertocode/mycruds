import { InternationalizationTexts } from "@/types/InternationalizationTexts";

export const en: InternationalizationTexts = {
    login: {
        title: 'Sign in',
        email: {
            label: 'E-mail',
            placeholder: 'Type your e-mail'
        },
        password: {
            label: 'Password',
            placeholder: 'Type your password'
        },
        submitLabel: 'Login',
        dontHaveAccountYet: 'Don\'t have an account yet?',
        createAccount: 'Sign up',
        feedback: {
            success: 'Login success',
            userNotFound: 'User not found, check your credentials',
            error: 'Login failed'
        }
    }
}