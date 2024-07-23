export interface InternationalizationTexts {
    delete: string
    edit: string
    add: string
    addOption: string
    required: string
    search: string
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
        shouldInclude25Chars: string
        shouldBeUnique: string
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
    },
    crud: {
        crudName: string
        fieldName: string
        fieldType: string
        addNewField: string
        fieldOptions: string
        typeNewOption: string
        viewCrudForm: string
        previewForm: string
        editCrud: string
        deleteCrud: string
        noFieldsYetFillToPreview: string
        fieldTypes: {
            text: string
            number: string
            options: string
            autocomplete: string
            multipleOptions: string
            phone: string
            date: string
            cpf: string
            cnpj: string
            radioGroup: string
        }
        new: {
            title: (username: string) => string
            description: string
            createNow: string,
            createCrud: string
            chooseCrudName: string
            startFillingFields: string
            feedback: {
                success: string
                error: string
            }
        },
        list: {
            registerNewItem: string
        }
    }
}