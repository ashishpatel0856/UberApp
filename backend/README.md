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

## GET /users/profile

Get the authenticated user's profile.

### Endpoint

`GET /users/profile`

### Headers

- `Authorization` (optional): `Bearer <jwt-token>`
- The endpoint also supports the auth cookie `token` if the client sends it.

### Success Response

- Status: `200 OK`
- Body:

```json
{
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
  "message": "Unauthorized"
}
```

## GET /users/logout

Log out the authenticated user by clearing the auth token and blacklisting it.

### Endpoint

`GET /users/logout`

### Headers

- `Authorization` (optional): `Bearer <jwt-token>`
- The endpoint also supports the auth cookie `token` if the client sends it.

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "message": "Logged out successfully"
}
```

### Authentication Errors

- Status: `401 Unauthorized`
- Body:

```json
{
  "message": "Unauthorized"
}
```

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

## POST /captains/register

Create a new captain account.

### Endpoint

`POST /captains/register`

### Request Body

The request must be sent as JSON and include the following fields:

- `fullname.firstname` (string, required): Captain first name, minimum 3 characters.
- `fullname.lastname` (string, optional): Captain last name, minimum 3 characters if provided.
- `email` (string, required): Valid email address.
- `password` (string, required): Password, minimum 8 characters.
- `vehicle.color` (string, required): Vehicle color, minimum 3 characters.
- `vehicle.plate` (string, required): Vehicle plate number, minimum 3 characters.
- `vehicle.capacity` (number, required): Vehicle capacity, minimum 1.
- `vehicle.vehicleType` (string, required): One of `car`, `motorcycle`, or `auto`.

Example request body:

```json
{
  "fullname": {
    "firstname": "Amit",
    "lastname": "Sharma"
  },
  "email": "amit.sharma@example.com",
  "password": "secret1234",
  "vehicle": {
    "color": "Black",
    "plate": "MH12AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Success Response

- Status: `201 Created`
- Body:

```json
{
  "message": "Captain registered successfully",
  "token": "<jwt-token>",
  "captain": {
    "_id": "<captain-id>",
    "fullname": {
      "firstname": "Amit",
      "lastname": "Sharma"
    },
    "email": "amit.sharma@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "MH12AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
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
      "msg": "Vehicle type is required",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Notes

- The endpoint validates the captain email, password, and vehicle details.
- The controller checks whether a captain already exists with the same email before registration.
- The response includes an authentication token and the created captain object without the password field.

## POST /captains/login

Authenticate an existing captain and return a JWT token.

### Endpoint

`POST /captains/login`

### Request Body

The request must be sent as JSON and include the following fields:

- `email` (string, required): Valid email address.
- `password` (string, required): Password, minimum 8 characters.

Example request body:

```json
{
  "email": "amit.sharma@example.com",
  "password": "secret1234"
}
```

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "message": "Login successful",
  "token": "<jwt-token>",
  "captain": {
    "_id": "<captain-id>",
    "fullname": {
      "firstname": "Amit",
      "lastname": "Sharma"
    },
    "email": "amit.sharma@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "MH12AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
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

## GET /captains/profile

Get the authenticated captain's profile.

### Endpoint

`GET /captains/profile`

### Headers

- `Authorization` (optional): `Bearer <jwt-token>`
- The endpoint also supports the auth cookie `token` if the client sends it.

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "message": "Captain profile fetched successfully",
  "captain": {
    "_id": "<captain-id>",
    "fullname": {
      "firstname": "Amit",
      "lastname": "Sharma"
    },
    "email": "amit.sharma@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "MH12AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Authentication Errors

- Status: `401 Unauthorized`
- Body:

```json
{
  "message": "Unauthorized"
}
```

## GET /captains/logout

Log out the authenticated captain by clearing the auth token and blacklisting it.

### Endpoint

`GET /captains/logout`

### Headers

- `Authorization` (optional): `Bearer <jwt-token>`
- The endpoint also supports the auth cookie `token` if the client sends it.

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "message": "Logout successful"
}
```

### Authentication Errors

- Status: `401 Unauthorized`
- Body:

```json
{
  "message": "Unauthorized"
}
```
