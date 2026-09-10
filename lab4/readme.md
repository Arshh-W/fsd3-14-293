NPM Project 

1. Create Project folder 
2. type in terminal 'npm init -y' and press enter
3. Open Package.json file from project folder
4. update type to be "type : module" in package.json
5. Type in terminal 'npm i nodemon -D' to install nodemon, which restarts server while file changes.
6. It creates node_modules folder and package-lock.json
7. Update .gitignore file and write "lab4/node_modules"
8. in package.json set  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
9. Now You can start the server by taping 'npm run dev' in the terminal in the project folder directory