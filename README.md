# Blog Site

[![Language](https://img.shields.io/badge/Language-Javascript-blue.svg?style=flat)](https://www.javascript.com/)
[![Template](https://img.shields.io/badge/Template-NodeJS-brightgreen.svg?style=flat)](https://reactjs.org/)

# About

- It is a Blog Site.
- It's functionality includes:
  - Adding a blog
  - Styled with CSS

# Tech Stack

- HTML
- CSS
- Node JS
- MongoDB

## Environmental Setup

- This project was developed in VS Code.

#### How to setup in local environment to use this project

- Download and install a code/ text editor.
  - Recommended -
    - [Download VS Code](https://code.visualstudio.com/download)
    - [Download Atom](https://atom.io/)
- Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (npm gets installed by default on downloading Node)
- Clone the repository by running the command:

```
git clone https://github.com/balaji305/blogsite.git
```

### Development

- Clone this repository to your computer.
- Install the dependencies by running `npm install`.
- Create a .env file in the project directory.
- Add the following environment variables to the .env file:
  - `NODE_ENV=development`
  - `PORT=3000`
  - `MONGO_URI=mongodb://localhost:27017/blog` or the equivalent for your ATLAS database.
- Run the app by using `node app.js`.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
