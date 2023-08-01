# SwipeApp

This Nx workspace contains the following applications:

- Backend application built with Nest.js for server-side functionality.
- Two front-end applications using Next.js for client-side functionality.

You can check the Nx read me file here: [Nx Workspace](https://github.com/bogdanmosica/swipe-app/nx.README.md)
<!-- omit in toc -->
## Table of Contents

- [SwipeApp](#swipeapp)
  - [Install app](#install-app)
    - [To install the Nx Console in VSCode, follow these simple steps:](#to-install-the-nx-console-in-vscode-follow-these-simple-steps)
    - [Commands that can be used](#commands-that-can-be-used)
  - [Installing Postgres and pgAdmin](#installing-postgres-and-pgadmin)
  - [Docker Database Setup](#docker-database-setup)
  - [Running Backend and Frontend Apps](#running-backend-and-frontend-apps)

## Install app

In the root folder run npm install

```bash
npm install
```

> ---
>
> - ### HINT
>
> - To enhance your development experience, we highly recommend installing the [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) extension in [Visual Studio Code](https://code.visualstudio.com/) ([VSCode](https://code.visualstudio.com/)).
> - The [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) is a powerful tool that provides a user-friendly interface to navigate and manage your Nx workspace.
> - With the [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console), you can efficiently run commands, generate code, analyze dependencies, and access various Nx features.
>
> ---

### To install the Nx Console in VSCode, follow these simple steps:

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac).
3. In the Extensions view, search for `Nx Console` using the search bar.
Click on the "Install" button next to the `Nx Console` extension by Nrwl.
4. Once installed, you can access the Nx Console by clicking on the Nx Console icon in the Activity Bar on the side of the window or press `Ctrl+Shift+N` (Windows/Linux) or `Cmd+Shift+N` (Mac).
<br />

### Commands that can be used
<!-- omit in toc -->
### # [`apps/api`](https://github.com/bogdanmosica/swipe-app/tree/master/apps/api)

- api:serve

```bash
npx nx run api:serve --configuration=development
```

- database:seed
  
```bash
nx run database:seed:run
```
<!-- omit in toc -->
### # [`apps/web`](https://github.com/bogdanmosica/swipe-app/tree/master/apps/web)
<!-- omit in toc -->
### # [`apps/api-dashboard`](https://github.com/bogdanmosica/swipe-app/tree/master/apps/api-dashboard)

## Installing Postgres and pgAdmin

1. __PostgreSQL Installation__:
   - Download and install PostgreSQL from the official website: [PostgreSQL](https://www.postgresql.org/download/)
   - Follow the installation instructions for your operating system.
   - During the installation, set up a superuser password and remember it for future use.

1. __pgAdmin Installation__:
   - Download and install pgAdmin from the official website: [pgAdmin](https://www.pgadmin.org/download/)
   - Follow the installation instructions for your operating system.
   - Launch pgAdmin after installation and configure it to connect to your PostgreSQL server using the superuser credentials set during the PostgreSQL installation.

## Docker Database Setup

1. __Docker Installation__:
   - If you prefer to use Docker to run your database, install Docker from the official website: [Docker](https://www.docker.com/get-started)

2. __Running PostgreSQL with Docker__:
   - Once Docker is installed, open your terminal or command prompt.
   - Pull the official PostgreSQL image from Docker Hub:

     ```bash
     docker pull postgres
     ```

   - Run a PostgreSQL container:

     ```bash
     docker run -d --name postgres-db -e POSTGRES_PASSWORD=<your_password> -p 5432:5432 postgres
     ```

     Replace `<your_password>` with your preferred PostgreSQL password.

3. __Connecting to the Dockerized PostgreSQL__:
   - You can now use the same credentials to connect to the PostgreSQL database either with pgAdmin or in your Nx applications.

## Running Backend and Frontend Apps

1. __Backend Application__:
   - Open a terminal or command prompt and navigate to the `apps/backend` directory.
   - Install the backend application's dependencies:

     ```bash
     npm install
     ```

   - Start the backend application:

     ```bash
     npm run start
     ```

   - The backend server will be running on <http://localhost:3000>.

2. __Frontend Applications__:
   - Each front-end application has its own directory within the `apps` folder.
   - To run each front-end application, open a terminal or command prompt and navigate to the respective front-end app directory (e.g., `apps/frontend-app1`).
   - Install the front-end application's dependencies:

     ```bash
     npm install
     ```

   - Start the front-end application:

     ```bash
     npm run dev
     ```

   - The front-end application will be running on <http://localhost:4000> for app1 and <http://localhost:5000> for app2 (change the port numbers accordingly).

3. __Accessing the Applications__:
   - The backend and front-end applications are now running.
   - You can access the backend API and front-end applications from your browser or API clients like Postman or Insomnia.

   - Frontend App1: <http://localhost:4000>
   - Frontend App2: <http://localhost:5000>
   - Backend API: <http://localhost:3000>

That's it! You have successfully installed PostgreSQL and pgAdmin, set up a Dockerized database, and run the backend and front-end applications in your Nx workspace. Happy coding! 🚀

---
