[![Build Status](https://travis-ci.com/JhonatanMedeiros/bank-account-api.svg?branch=master)](https://travis-ci.com/JhonatanMedeiros/bank-account-api)
[![Greenkeeper badge](https://badges.greenkeeper.io/JhonatanMedeiros/bank-account-api.svg)](https://greenkeeper.io/)

# Bank Account API


> Node.js Express API with TypeScript 3

## Description
This generator will help you to build your own Node.js Express Mongodb API using TypeScript 3.

## Requirements

- node >= 8
- npm >= 6
- mongodb >= 3.0
- typescript >= 3.0

## Running the API
### Development
To start the application in development mode, run:

```bash
npm install -g nodemon
npm install -g ts-node
npm install -g typescript
npm install
```

Start the application in dev env:
```
npm start:dev
```


Express server listening on http://localhost:3000/, in development mode
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.


## Set up environment
In root folder you can find `.env`. You can use this config or change it for your purposes.
If you want to add some new variables, you also need to add them to interface and config object (Look `src/config/index.ts`)

## Swagger
```bash
npm install -g swagger-jsdoc
swagger-jsdoc -d swaggerDef.js -o swagger.json
```
Swagger documentation will be available on route: 
```bash
http://localhost:3000/docs
```

## App skeleton
```
.
├── LICENSE
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── index.ts
│   │   │   ├── interface.ts
│   │   │   ├── service.ts
│   │   │   └── validation.ts
│   │   ├── User
│   │   │   ├── index.ts
│   │   │   ├── interface.ts
│   │   │   ├── model.ts
│   │   │   ├── service.ts
│   │   │   └── validation.ts
│   │   ├── index.ts
│   │   └── validation.ts
│   ├── config
│   │   ├── connection
│   │   │   └── connection.ts
│   │   ├── env
│   │   │   └── index.ts
│   │   ├── error
│   │   │   ├── index.ts
│   │   │   └── sendHttpError.ts
│   │   ├── middleware
│   │   │   ├── middleware.ts
│   │   │   └── passport.ts
│   │   └── server
│   │       ├── ServerInterface.ts
│   │       ├── index.ts
│   │       ├── server.ts
│   │       └── serverHandlers.ts
│   └── routes
│       ├── AuthRouter.ts
│       ├── UserRouter.ts
│       └── index.ts
├── swagger.json
├── swaggerDef.js
├── tsconfig.json
└── tslint.json
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

* This project comes [ChechaValerii/node-typescript-mongodb](https://github.com/ChechaValerii/node-typescript-mongodb) 

