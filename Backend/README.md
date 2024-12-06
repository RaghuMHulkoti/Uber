# User Authentication API Documentation

This document provides details about the user authentication API, including the endpoints for user registration and login, request formats, validation rules, and response codes.

## Table of Contents
- [User  Registration](#user-registration)
- [User  Login](#user-login)

---

## User Registration

### Endpoint: `/users/register`

### Description
The `/users/register` endpoint allows users to register by providing their personal information. It validates the input, hashes the password, and stores the user in the database.

### Method
`POST`

### Request Body

The request body must be in JSON format and include the following fields:

| Field                | Type   | Required | Description                               |
|----------------------|--------|----------|-------------------------------------------|
| `fullName.firstName` | String | Yes      | User's first name. Minimum 3 characters.  |
| `fullName.lastName`  | String | No       | User's last name. Minimum 3 characters.   |
| `email`              | String | Yes      | User's email address. Must be valid.      |
| `password`           | String | Yes      | User's password. Minimum 6 characters.    |

### Example Request
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}



------------------------------------------------------------------------------------------
# User Login API Documentation

## Endpoint: `/users/login`

### Description
The `/users/login` endpoint allows users to log in by providing their email and password. It validates the input and checks the credentials against the stored user data.

### Method
`POST`

### Request Body

The request body must be in JSON format and include the following fields:

| Field   | Type   | Required | Description                               |
|---------|--------|----------|-------------------------------------------|
| `email` | String | Yes      | User's email address. Must be valid.      |
| `password` | String | Yes      | User's password. Minimum 6 characters.    |

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}