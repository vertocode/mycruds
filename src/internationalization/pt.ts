import { InternationalizationTexts } from "@/types/InternationalizationTexts";

export const pt: InternationalizationTexts = {
    login: {
        title: 'Entre em sua conta',
        email: {
            label: 'E-mail',
            placeholder: 'Digite seu e-mail'
        },
        password: {
            label: 'Senha',
            placeholder: 'Digite sua senha'
        },
        submitLabel: 'Entrar',
        dontHaveAccountYet: 'Ainda não possui uma conta?',
        createAccount: 'Cadastrar-se',
        feedback: {
            success: 'Login efetuado com sucesso',
            userNotFound: 'Usuário não encontrado, verifique suas credenciais',
            error: 'Falha ao efetuar login'
        }
    }
}