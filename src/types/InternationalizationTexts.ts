export interface InternationalizationTexts {
    header: {
        user: {
            logout: string
        }
    }
    login: {
        title: string
        submitLabel: string
        dontHaveAccountYet: string
        createAccount: string
        feedback: {
            success: string
            userNotFound: string
            error: string
        }
    },
    signUp: {
        title: string
        submitLabel: string
        alreadyHaveAccount: string
        login: string
        feedback: {
            success: string
            userAlreadyExists: string
            error: string
        }
    },
    name: {
        label: string
        placeholder: string
        required: string
        shouldInclude3Chars: string
    }
    email: {
        label: string
        placeholder: string
        required: string
        shouldBeValid: string
    }
    password: {
        label: string
        placeholder: string
        required: string
        shouldInclude6Chars: string
    },
    repeatPassword: {
        label: string
        placeholder: string
        required: string
        shouldInclude6Chars: string
        shouldMatchPassword: string
    }
}