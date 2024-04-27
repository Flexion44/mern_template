# React + Vite + Framer Motion + TailwindCSS + Storybook

## Introduction

This template is a MERN App template that uses Vite as the build tool, React as the frontend library, Framer Motion for animations, TailwindCSS for styling, and Storybook for component development.
It also comes with several pre-configured tools and libraries to help you get started with your project like

- Redux Toolkit
- Axios
- React Router

## Usage

To use this template, click on the green "Use this template" button at the top of the page. Give your repository a name and click "Create repository from template".

Once you have created your repository, clone it to your local machine and run `yarn` or `npm install` to install all dependencies in both folders (/api and /front).

## Development

### Docker

To start the development server, run `docker-compose up`. This will start the API server and the front server. The API server will be available at `localhost:5050` and the front server will be available at `localhost:5173`, it also configure a mongoDB server at `localhost:27017`
Make sure to have docker installed on your machine and docker-compose installed.

### API
To start the development server, run  `npm run dev`. This will start the nodemon server and open your browser to `localhost:5050` (if the port is available). Be careful, the API server will not run if no mongoDB server is running
to edit the mongoDB connection string, go to the `api/config/index.js` file and edit the `MONGO_` variables.

### Front
To start the development server, run `yarn dev` or `npm run dev`. This will start the Vite development server and open your browser to `localhost:5173` (if the port is available).

## Storybook

To start the Storybook server, run `yarn storybook` or `npm run storybook`. This will start the Storybook server and open your browser to `localhost:6006` (if the port is available).

## Build

To build your project, run `yarn build` or `npm run build`. This will build your project to the `dist` folder.

Have fun building! 🥳
```