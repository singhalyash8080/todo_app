### Todo-App
This is a todo-app REST Api.

## To run the server

```
$ npm start
```

## Routes

For routes.

## For Test

- [mocha](https://npmjs.com/package/mocha) is used for testing and [chai](https://npmjs.com/package/chai) is used for assertion.
  [chai-http](https://npmjs.com/package/chai) is used to test http endpoints.

  Use:

  ```bash
  npm test
  ```

- [nyc](https://npmjs.com/package/nyc) is used as the default coverage tool.
  Use:

  ```bash
  npm run coverage
  ```

## Dependencies

| Dependency                                           | Usage                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------ |
| [body-parser](https://npm.com/package/body-parser)   | POST body parsing middleware. Adds body object to incoming request |
| [compression](https://npmjs.com/package/compression) | Response compression middleware                                    |
| [express](https://npmjs.com/package/express)         | Express REST API framework                                         |
| [cors](https://npm.com/package/cors)                 | CORS middleware to set CORS policy                                 |
| [morgan](https://npmjs.com/package/morgan)           | HTTP request logger                                                |
| [winston](https://npmjs.com/package/winston)         | General purpose logger for the application                         |
| [nyc](https://npmjs.com/package/nyc)                 | Code Coverage tool                                                 |
| [standard](https://npmjs.com/package/standard)       | Linting and styling tool.                                          |
| [chai](https://npmjs.com/package/chai)               | Assertion Library                                                  |
| [chai-http](https://npmjs.com/package/chai-http)     | Middleware for chai to test http endpoints                         |
