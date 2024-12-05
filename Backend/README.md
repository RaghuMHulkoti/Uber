# User Registration API Documentation

This document provides details about the `/users/register` endpoint, including the request format, validation rules, and response codes.

## Endpoint: `/users/register`

### Description
The `/users/register` endpoint allows users to register by providing their personal information. It validates the input, hashes the password, and stores the user in the database.

### Method
`POST`

---

## Request Body

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
