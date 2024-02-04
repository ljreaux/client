# Juicebox

Juicebox is a simple PERN social media app. 

## Features

1. Register and login to personal account.
2. View account info.
3. Post blog-style posts. 
4. Edit, delete, and add tags to post.
5. View other users posts.
6. View posts by tag names.
7. View posts by user.

## Use

This app is not hosted. To view, please fork and clone the repo here. You will then run the following terminal commands.

```
// creates postgreSQL database
$ createdb juicebox-dev

// install client dependencies
$ npm i 

// install server dependencies 
$ cd server
$ npm i

// create dist folder and start server
$ cd ..
$ npm run start

```