<p align="center" style="background-color: azure; padding: 20px; border-radius: 8px">
    <a href="https://mycruds.vertocode.com" target="_blank">
        <img width="150" src="https://i.imgur.com/QpVjcUv.png" target="_blank">
    </a>
</p>

## Demo

<p align="center" style="display: flex; justify-content: space-between;">
    <img style="width: 50%" src="https://i.imgur.com/VJ4dGPK.png" target="_blank">
    <img style="width: 50%" src="https://i.imgur.com/vtVbUTi.png" target="_blank">
</p>

## Principal Links
- [Deployed App 🚀](https://mycruds.vertocode.com)
- [Video Demo ▶️](https://www.youtube.com/watch?v=xNJql5M38N8)

## Introduction

MyCruds allow users create custom CRUDs on any topic. Manage lists effortlessly by adding, editing, and deleting items as needed.


After creating a CRUD, users can access a custom list according to the field filled during the CRUD creation, and can search for items about the topic created, create new items, edit, and delete when needed. In addition, after creating a crud the edition of it is available on anytime.

## Features
- Sign up
- Sign in
- Create a CRUD
- Edit a CRUD
- Delete a CRUD
- List all CRUDs
- List all CRUD items
- Create a CRUD item
- Edit a CRUD item
- Delete a CRUD item
- Search for a CRUD item
- Logout

## Technologies

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Redux](https://redux.js.org/)
- [Yup](https://www.npmjs.com/package/yup)
- [SWR](https://swr.vercel.app/)
- [Tailwind](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [MUI](https://mui.com/)

## Installation

1. Clone the repository
```bash
git clone git@github.com:vertocode/mycruds.git
```

2. Install the dependencies
```bash
npm run i
```

3. Set the environment variables

```bash 
cp .env.sample .env
```

4. Run the application
```bash
npm run dev
```

## Folder Structure

| Folder                   | Description                                                   |
|--------------------------|---------------------------------------------------------------|
| /public                  | The public folder, where the logo, and images are located.    |
| src/api                  | The request functions that is made to get data from API.      |
| src/app                  | The main application folder, where the pages are located.     |
| src/assets               | The application assets.                                       |
| src/components           | The components used in the application.                       |
| src/hooks                | The application React custom hooks.                           |
| src/internationalization | Folder with the dictionary in portuguese and english texts.   |
| src/services             | The application services, where we have the API calls.        |
| src/store                | The redux folder to store whole data like crud and user data. |
| src/types                | The application types to use with TypeScript.                 |
| src/utils                | The application utils where we have the common functions.     |

# How to run lint

```bash
npm run lint
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.