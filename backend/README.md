# Backend API Documentation

## POST /users/register

Create a new user account.

### Endpoint

`POST /users/register`

### Request Body

The request must be sent as JSON and include the following fields:

- `fullname.firstname` (string, required): User first name, minimum 3 characters.
- `fullname.lastname` (string, optional): User last name, minimum 3 characters if provided.
- `email` (string, required): Valid email address.
- `password` (string, required): Password, minimum 6 characters.

Example request body:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Success Response

- Status: `201 Created`
- Body:

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "<user-id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors

- Status: `400 Bad Request`
- Body:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Notes

- The endpoint validates email format and password length.
- The controller currently expects `firstname`, `lastname`, `email`, and `password` from `req.body`.
- The response includes an authentication token and the created user object.

## POST /users/login

Authenticate an existing user and return a JWT token.

### Endpoint

`POST /users/login`

### Request Body

The request must be sent as JSON and include the following fields:

- `email` (string, required): Valid email address.
- `password` (string, required): Password, minimum 6 characters.

Example request body:

```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "<user-id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Authentication Errors

- Status: `401 Unauthorized`
- Body:

```json
{
  "message": "Invalid email or password"
}
```

### Validation Errors

- Status: `400 Bad Request`
- Body:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```
