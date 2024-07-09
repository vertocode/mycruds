import { InternationalizationTexts } from "@/types/InternationalizationTexts";

export const pt: InternationalizationTexts = {
    header: {
      user: {
          logout: 'Sair'
      }
    },
    login: {
        title: 'Entre em sua conta',
        submitLabel: 'Entrar',
        dontHaveAccountYet: 'Ainda não possui uma conta?',
        createAccount: 'Cadastrar-se',
        feedback: {
            success: 'Login efetuado com sucesso',
            userNotFound: 'Usuário não encontrado, verifique suas credenciais',
            error: 'Falha ao efetuar login'
        }
    },
    signUp: {
        title: 'Crie sua conta',
        submitLabel: 'Cadastrar',
        alreadyHaveAccount: 'Já possui uma conta?',
        login: 'Entrar',
        feedback: {
            success: 'Cadastro efetuado com sucesso',
            userAlreadyExists: 'Usuário já existe',
            error: 'Falha ao efetuar cadastro'
        }
    },
    name: {
        label: 'Nome',
        placeholder: 'Digite seu nome',
        required: 'Nome é obrigatório',
        shouldInclude3Chars: 'Nome deve incluir pelo menos 3 caracteres'
    },
    email: {
        label: 'E-mail',
        placeholder: 'Digite seu e-mail',
        required: 'E-mail é obrigatório',
        shouldBeValid: 'E-mail deve ser um endereço de e-mail válido'
    },
    password: {
        label: 'Senha',
        placeholder: 'Digite sua senha',
        required: 'Senha é obrigatória',
        shouldInclude6Chars: 'Senha deve incluir pelo menos 6 caracteres'
    },
    repeatPassword: {
        label: 'Repita a senha',
        placeholder: 'Digite sua senha novamente',
        required: 'Senha é obrigatória',
        shouldInclude6Chars: 'Senha deve incluir pelo menos 6 caracteres',
        shouldMatchPassword: 'As senhas devem corresponder'
    }
}