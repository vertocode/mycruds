import { InternationalizationTexts } from '@/types/InternationalizationTexts'

export const en: InternationalizationTexts = {
	delete: 'Delete',
	edit: 'Edit',
	add: 'Add',
	addOption: 'Add option',
	required: 'Required',
	search: 'Search',
	create: 'Create',
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
		shouldInclude3Chars: 'Name must include at least 3 characters',
		shouldInclude25Chars: 'Name must include at most 25 characters',
		shouldBeUnique: 'Field name must be unique'
	},
	crud: {
		crudName: 'Crud Name',
		fieldName: 'Field Name',
		fieldType: 'Field Type',
		addNewField: 'Add new field',
		viewCrudForm: 'View crud form',
		typeNewOption: 'Type a new option',
		noFieldsYetFillToPreview: 'No fields yet, fill in the fields to preview the form',
		previewForm: 'Preview form',
		deleteCrud: 'Delete Crud',
		editCrud: 'Edit Crud',
		fieldTypes: {
			options: 'Options',
			multipleOptions: 'Multiple Options',
			autocomplete: 'Autocomplete',
			number: 'Number',
			text: 'Text',
			date: 'Date',
			cpf: 'CPF',
			cnpj: 'CNPJ',
			phone: 'Phone',
			radioGroup: 'Radio Group'
		},
		fieldOptions: 'Field Options',
		new: {
			title: (username: string) => `Hello, ${username}! I noticed you don't have a crud created yet, how about creating one now? 🚀`,
			description: 'Our crud system is very simple and easy to use, you can create, edit and delete cruds in a very intuitive and fast way!',
			createNow: 'Create now',
			createCrud: 'Create Crud',
			chooseCrudName: 'First we need to choose a name for your entire Crud, this name will be used in the creation, editing, and listing form. A tip is to choose a name that represents the entire Crud, for example, if you are creating a Crud to manage clients, you can choose the name "Clients".',
			startFillingFields: 'Now you can start filling in the fields of your Crud, you can add as many fields as you want, just click on the "Add Field" button and fill in the information.',
			feedback: {
				success: 'Crud created successfully',
				error: 'Failed to create Crud'
			}
		},
		list: {
			registerNewItem: 'Register new item'
		}
	},
	crudItem: {
		create: {
			title: 'Register new item',
			feedback: {
				success: 'Item registered successfully',
				error: 'Failed to register item'
			}
		},
		edit: {
			title: 'Edit item',
			feedback: {
				success: 'Item edited successfully',
				error: 'Failed to edit item'
			}
		}
	}
}