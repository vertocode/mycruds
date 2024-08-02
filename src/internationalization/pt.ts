import { InternationalizationTexts } from '@/types/InternationalizationTexts'

export const pt: InternationalizationTexts = {
	delete: 'Deletar',
	addOption: 'Adicionar Opção',
	add: 'Adicionar',
	edit: 'Editar',
	required: 'Campo obrigatório',
	search: 'Pesquisar',
	create: 'Criar',
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
		shouldInclude3Chars: 'Nome deve incluir pelo menos 3 caracteres',
		shouldInclude25Chars: 'Nome deve incluir no máximo 25 caracteres',
		shouldBeUnique: 'Nome do campo deve ser único'
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
	},
	crud: {
		crudName: 'Nome do Crud',
		fieldName: 'Nome do Campo',
		fieldType: 'Tipo do Campo',
		typeNewOption: 'Digite uma nova opção',
		viewCrudForm: 'Visualizar formulário do crud',
		previewForm: 'Pré-visualizar formulário',
		editCrud: 'Editar Crud',
		deleteCrud: 'Deletar Crud',
		noFieldsYetFillToPreview: 'Nenhum campo foi preenchido para existir pré-visualização, por favor preencha para poder visualizar.',
		fieldTypes: {
			text: 'Texto',
			number: 'Número',
			options: 'Opções',
			autocomplete: 'Autocompletar',
			multipleOptions: 'Opções Múltiplas',
			date: 'Data',
			cpf: 'CPF',
			cnpj: 'CNPJ',
			phone: 'Telefone',
			radioGroup: 'Grupo de Rádio'
		},
		addNewField: 'Adicionar novo campo',
		fieldOptions: 'Opções',
		new: {
			title: (username: string) => `Olá, ${username}! Percebi que ainda não possui um crud criado, que tal criar um agora mesmo? 🚀`,
			description: 'Nosso sistema de cruds é muito simples e fácil de usar, você pode criar, editar e excluir cruds de forma muito intuitiva e rápida!',
			createNow: 'Criar agora',
			createCrud: 'Criar Crud',
			chooseCrudName: 'Primeiro, precisamos de um nome para todo o seu crud. Este nome será exibido em todos os lugares do seu crud como criações, edições e exclusões. Uma dica é escolher um nome que represente bem o que você deseja fazer com este crud, por exemplo administrar clientes poderia ser "Clientes".',
			startFillingFields: 'Agora que você já escolheu um nome para o seu crud, vamos começar a preencher os campos que deseja que este crud tenha. Você pode adicionar quantos campos desejar, basta clicar em "Adicionar Novo Campo" e preencher as informações necessárias de cada campo.',
			feedback: {
				success: 'Crud criado com sucesso',
				error: 'Falha ao criar crud'
			}
		},
		edit: {
			title: 'Editar crud',
			description: 'Aqui você pode editar o nome do seu crud e adicionar, editar ou excluir campos do seu crud.',
			editCrud: 'Editar Crud',
			feedback: {
				success: 'Crud editado com sucesso',
				error: 'Falha ao editar crud'
			}
		},
		delete: {
			title: 'Deletar crud',
			description: 'Tem certeza que deseja deletar este crud? Esta ação não poderá ser desfeita e todos os dados deste crud serão perdidos.',
			feedback: {
				success: 'Crud deletado com sucesso',
				error: 'Falha ao deletar crud'
			}
		},
		list: {
			registerNewItem: 'Cadastrar novo item'
		}
	},
	crudItem: {
		create: {
			title: 'Cadastrar novo item',
			feedback: {
				success: 'Item cadastrado com sucesso',
				error: 'Falha ao cadastrar item'
			}
		},
		edit: {
			title: 'Editar item',
			feedback: {
				success: 'Item editado com sucesso',
				error: 'Falha ao editar item'
			}
		},
		delete: {
			title: 'Deletar item',
			description: 'Tem certeza que deseja deletar este item? Esta ação não poderá ser desfeita e todos os dados deste item serão perdidos.',
			feedback: {
				success: 'Item deletado com sucesso',
				error: 'Falha ao deletar item'
			}
		}
	}
}