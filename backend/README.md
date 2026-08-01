# Backend API Documentation

This backend exposes the following route groups:

- `/users`
- `/captains`
- `/maps`
- `/rides`

All authenticated routes support either the `Authorization: Bearer <jwt-token>` header or the `token` cookie.

---

## POST /users/register

Create a new user account.

### Endpoint

`POST /users/register`

### Request Body

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

---

## POST /users/login

Authenticate an existing user and return a JWT token.

### Endpoint

`POST /users/login`

### Request Body

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

---

## GET /users/profile

Return the authenticated user's profile.

### Endpoint

`GET /users/profile`

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

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

---

## GET /users/logout

Log out the authenticated user, clear the token cookie, and blacklist the token.

### Endpoint

`GET /users/logout`

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

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

---

## POST /captains/register

Create a new captain account.

### Endpoint

`POST /captains/register`

### Request Body

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

---

## POST /captains/login

Authenticate an existing captain and return a JWT token.

### Endpoint

`POST /captains/login`

### Request Body

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

---

## GET /captains/profile

Return the authenticated captain's profile.

### Endpoint

`GET /captains/profile`

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

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

---

## GET /captains/logout

Log out the authenticated captain, clear the token cookie, and blacklist the token.

### Endpoint

`GET /captains/logout`

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

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

---

## GET /maps/get-coordinates

Get geographic coordinates for a given address.

### Endpoint

`GET /maps/get-coordinates`

### Query Parameters

- `address` (string, required): Address text to geocode, minimum 3 characters.

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "ltd": 12.9716,
  "lng": 77.5946
}
```

### Validation Errors

- Status: `400 Bad Request`
- Body:

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "address",
      "location": "query"
    }
  ]
}
```

---

## GET /maps/get-distance-time

Get driving distance and travel time between two addresses.

### Endpoint

`GET /maps/get-distance-time`

### Query Parameters

- `origin` (string, required): Starting address, minimum 3 characters.
- `destination` (string, required): Ending address, minimum 3 characters.

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "distance": {
    "text": "12.34 km",
    "value": 12340
  },
  "duration": {
    "text": "18 mins",
    "value": 1080
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
      "msg": "Invalid value",
      "param": "origin",
      "location": "query"
    }
  ]
}
```

---

## GET /maps/get-suggestions

Get autocomplete suggestions for an address input.

### Endpoint

`GET /maps/get-suggestions`

### Query Parameters

- `input` (string, required): Partial address text, minimum 3 characters.

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

### Success Response

- Status: `200 OK`
- Body:

```json
[
  "123 Main Street, City, Country",
  "123 Maple Avenue, City, Country"
]
```

### Validation Errors

- Status: `400 Bad Request`
- Body:

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "input",
      "location": "query"
    }
  ]
}
```

---

## POST /rides/create

Create a new ride request as a rider.

### Endpoint

`POST /rides/create`

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

### Request Body

- `pickup` (string, required): Pickup address, minimum 3 characters.
- `destination` (string, required): Destination address, minimum 3 characters.
- `vehicleType` (string, required): One of `auto`, `car`, or `motorcycle`.

Example request body:

```json
{
  "pickup": "25 Main Street, City",
  "destination": "100 Market Avenue, City",
  "vehicleType": "car"
}
```

### Success Response

- Status: `201 Created`
- Body:

```json
{
  "_id": "<ride-id>",
  "user": "<user-id>",
  "captain": null,
  "pickup": "25 Main Street, City",
  "destination": "100 Market Avenue, City",
  "fare": 235,
  "status": "pending",
  "duration": null,
  "distance": null,
  "paymentID": null,
  "orderId": null,
  "signature": null,
  "otp": "<redacted>"
}
```

### Validation Errors

- Status: `400 Bad Request`
- Body:

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "pickup",
      "location": "body"
    }
  ]
}
```

---

## GET /rides/get-fare

Calculate fare estimates for a rider route.

### Endpoint

`GET /rides/get-fare`

### Query Parameters

- `pickup` (string, required): Pickup address, minimum 3 characters.
- `destination` (string, required): Destination address, minimum 3 characters.

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "auto": 120,
  "car": 190,
  "motorcycle": 95
}
```

### Validation Errors

- Status: `400 Bad Request`
- Body:

```json
{
  "errors": [
    {
      "msg": "Invalid pickup address",
      "param": "pickup",
      "location": "query"
    }
  ]
}
```

---

## POST /rides/confirm

Confirm a ride as a captain.

### Endpoint

`POST /rides/confirm`

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

### Request Body

- `rideId` (string, required): MongoDB ride id.

Example request body:

```json
{
  "rideId": "64b6e7c2f2f24bf5a0d8c5e7"
}
```

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "_id": "<ride-id>",
  "user": "<user-id>",
  "captain": "<captain-id>",
  "status": "accepted",
  "pickup": "25 Main Street, City",
  "destination": "100 Market Avenue, City",
  "fare": 190,
  "otp": "<redacted>"
}
```

### Validation Errors

- Status: `400 Bad Request`
- Body:

```json
{
  "errors": [
    {
      "msg": "Invalid ride id",
      "param": "rideId",
      "location": "body"
    }
  ]
}
```

---

## GET /rides/start-ride

Start a ride as a captain using OTP verification.

### Endpoint

`GET /rides/start-ride`

### Query Parameters

- `rideId` (string, required): MongoDB ride id.
- `otp` (string, required): 6-digit ride OTP.

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "_id": "<ride-id>",
  "status": "ongoing",
  "pickup": "25 Main Street, City",
  "destination": "100 Market Avenue, City"
}
```

### Validation Errors

- Status: `400 Bad Request`
- Body:

```json
{
  "errors": [
    {
      "msg": "Invalid OTP",
      "param": "otp",
      "location": "query"
    }
  ]
}
```

---

## POST /rides/end-ride

End a ride as a captain.

### Endpoint

`POST /rides/end-ride`

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

### Request Body

- `rideId` (string, required): MongoDB ride id.

Example request body:

```json
{
  "rideId": "64b6e7c2f2f24bf5a0d8c5e7"
}
```

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "_id": "<ride-id>",
  "status": "completed",
  "pickup": "25 Main Street, City",
  "destination": "100 Market Avenue, City"
}
```

### Validation Errors

- Status: `400 Bad Request`
- Body:

```json
{
  "errors": [
    {
      "msg": "Invalid ride id",
      "param": "rideId",
      "location": "body"
    }
  ]
}
```

---

## GET /rides/current

Get the current active ride for the authenticated user.

### Endpoint

`GET /rides/current`

### Headers

- `Authorization`: `Bearer <jwt-token>`
- or cookie: `token=<jwt-token>`

### Success Response

- Status: `200 OK`
- Body:

```json
{
  "_id": "<ride-id>",
  "user": "<user-id>",
  "captain": "<captain-id>",
  "pickup": "25 Main Street, City",
  "destination": "100 Market Avenue, City",
  "status": "accepted"
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

---

## Notes

- Validation failures return `400 Bad Request` with an `errors` array.
- Authentication failures return `401 Unauthorized`.


