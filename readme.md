# Express.js Api with MongoDB

## Description

This is a simple API built with Express.js and MongoDB. It is a simple CRUD API that allows you to create, read, update and delete data (products,...). The database is a local MongoDB database but you can also create your own on MongoDB Atlas.

## How to start the project

* `yarn` install or `npm` install depending on the package manager you are working with.
* Install `nodemon` globally or edit the `package.json` file exactly the **scripts** section if you don't have `nodemon` installed with instead of `nodemon app.js` => `node app.js`
* Type `yarn start`

## Some common Issues

* **Application could not start**: You haven't `nodemon` installed or maybe your `database` isn't exist
  * If you plan to use local mongodb you should check the complete guide on their website depending on your OS
  * If you plan to use Mongo Atlas just watch my first video about how to create `cluster`, `users`, and get your `connexion url`

## Thanks

Hope this tutorial will help you trained a lot with api and MongoDB.

If you plan to do more than just the existing code check the `mongoose` plugin **documentation**

> Happy Coding