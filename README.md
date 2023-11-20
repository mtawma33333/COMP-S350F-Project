## Academic Recording System

Group: 14
Name: 
LI Chak Hei (12860027)

Application link: https://project-s350-andand-s381f.onrender.com

********************************************
# Login

input the uid and password and click submit to login

# Logout

click the logout button in the right top navigation bar

********************************************
# CRUD services
## Create
### 1. Create data
1.1 login to the admin account and click the link in the side bar of account page to the correspondence data create page
1.2. fill in the data form to create
1.3 submit
### 2. Sign up
2.1 click the sign up button to access the sign up page
2.2 fill the sign up form
2.3 submit and login

## Read
1. login to the account and click the link in the navigation bar
2. (Optional) fill the query form and submit the search the data with condition
## Update
1. login to the account and click the link in the navigation bar
2. click the link in the record action row
3. fill the data form and submit to update the data
## Delete
1. login to the account and click the link in the navigation bar
2. click the delete button in the record action row
3. refresh the page to check the data delete success
********************************************

# Data Model
# USER
This data model is designed to manage user information for a user management system. The data model is implemented using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment.

## User Schema

The user schema defines the structure of the user data model. It includes the following fields:

| Field | Type | Required | Unique | Default | Example |
|-------|------|----------|--------|---------|---------|
| role | String | No | No | student | student |
| uid | String | Yes | Yes | None | 123456 |
| password | String | Yes | No | None | ******** |
| email | String | Yes | Yes | None | example@example.com |
| name | String | Yes | No | None | John Doe |
| sex | String | No | No | other | male |
| birth | Date | No | No | None | 1990-01-01 |
| phone | String | No | No | None | 123-456-7890 |
| address | String | No | No | None | 123 Main St |
| passwordConfirm | String | Yes | No | None | ******** |
| passwordChangedAt | Date | No | No | None | 2022-01-01 |
| active | Boolean | No | No | true | true |

### Field Details

- **role**: The role of the user. Can be 'student', 'teacher', or 'admin'. Defaults to 'student'.
- **uid**: The unique identifier for the user. Required and must be unique.
- **password**: The password for the user. Required and must be at least 8 characters long.
- **email**: The email address for the user. Required and must be unique.
- **name**: The name of the user. Required.
- **sex**: The gender of the user. Can be 'male', 'female', or 'other'. Defaults to 'other'.
- **birth**: The date of birth of the user.
- **phone**: The phone number of the user.
- **address**: The address of the user.
- **passwordConfirm**: The confirmation of the user's password. Required and must match the password field.
- **passwordChangedAt**: The date and time when the user's password was last changed.
- **active**: A boolean value indicating whether the user is active or not. Defaults to true.

## Virtual Fields

The user schema also includes a virtual field:

| Field | Type | Example |
|-------|------|---------|
| birth_formatted | String | 1990-01-01 |

### Field Details

- **birth_formatted**: A formatted string representing the user's date of birth in the format 'YYYY-MM-DD'.

## Middleware

The user schema includes the following middleware:

### Pre-Save Middleware

- **encrypt password**: Encrypts the user's password before saving it to the database.
- **delete passwordConfirm field**: Deletes the passwordConfirm field after the password has been encrypted.

### Pre-Find Middleware

- **filter active users**: Filters out inactive users from query results.

## Methods

The user schema includes the following methods:

### correctPassword

- **Description**: Compares a candidate password with the user's password to determine if they match.
- **Parameters**: 
  - candidatePassword: The password entered by the user.
  - userPassword: The password stored in the database.
- **Returns**: A boolean value indicating whether the passwords match or not.

### changedPasswordAfter

- **Description**: Determines if the user's password has been changed after a given timestamp.
- **Parameters**: 
  - JWTTimestamp: The timestamp to compare the user's passwordChangedAt field to.
- **Returns**: A boolean value indicating whether the user's password has been changed after the given timestamp or not.
This data model is designed to manage course information for a course management system. The data model is implemented using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment.
# Course

This data model is designed to manage course information for a course management system. The data model is implemented using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment.
## Course Schema

The course schema defines the structure of the course data model. It includes the following fields:

| Field | Type | Required | Unique | Default | Example |
|-------|------|----------|--------|---------|---------|
| course_id | String | Yes | Yes | None | CS101 |
| name | String | Yes | No | None | Introduction to Computer Science |
| description | String | Yes | No | None | This course provides an introduction to computer science. |
| credits | Number | Yes | No | None | 3 |

### Field Details

- **course_id**: The unique identifier for the course. Required and must be unique.
- **name**: The name of the course. Required.
- **description**: A description of the course. Required.
- **credits**: The number of credits for the course. Required and must be between 1 and 12.
# Record

This data model is designed to manage academic record information for an academic record management system. The data model is implemented using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment.

## Academic Record Schema

The academic record schema defines the structure of the academic record data model. It includes the following fields:

| Field | Type | Required | Unique | Default | Example |
|-------|------|----------|--------|---------|---------|
| user | ObjectId | Yes | No | None | 60c4d6d5f9e5d3a2c8e3a7b1 |
| course | ObjectId | Yes | No | None | 60c4d6d5f9e5d3a2c8e3a7b2 |
| mark | Number | No | No | None | 90 |
| status | String | Yes | No | None | completed |
| year | Number | Yes | No | None | 2021 |
| comments | String | No | No | None | Good job! |
| createdAt | Date | No | No | Date.now() | 2022-01-01 |
| modifiedAt | Date | No | No | Date.now() | 2022-01-01 |

### Field Details

- **user**: The user associated with the academic record. Required and must reference a user object.
- **course**: The course associated with the academic record. Required and must reference a course object.
- **mark**: The mark associated with the academic record. Optional.
- **status**: The status of the academic record. Required and must be one of 'completed', 'in progress', or 'dropped'.
- **year**: The year of the academic record. Required.
- **comments**: Comments associated with the academic record. Optional.
- **createdAt**: The date and time when the academic record was created. Optional and defaults to the current date and time.
- **modifiedAt**: The date and time when the academic record was last modified. Optional and defaults to the current date and time.

## Middleware

The academic record schema includes the following middleware:

### Pre-Save Middleware

- **update modifiedAt field**: Updates the modifiedAt field with the current date and time when the academic record is saved.

### Pre-Find Middleware

- **populate user and course fields**: Populates the user and course fields with the corresponding user and course objects.

## Static Methods

The academic record schema includes the following static method:

### calcAvgMarks

- **Description**: Calculates the average marks for each course and year combination.
- **Parameters**: None.
- **Returns**: An array of objects containing the course name, year, and average mark.

# API Document

# 📁 Collection: User 

# Create


## End-point: Account Sign Up

### Restrict to

| Login | Role |
| :---: | :--: |
|  No   | All  |

### Method: POST

>```
>{{URL}}api/user/signup
>```

### Response: 201

```json
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTU3NzNjZjM0M2ZkNmQwYmY3YWViZCIsImlhdCI6MTcwMDA5OTkwMSwiZXhwIjoxNzA3ODc1OTAxfQ.Mnby_xKqgKl7x-jb5auX8FaKbTRYjLqy8WFmAYc1DLg",
    "data": {
        "user": {
            "role": "student",
            "uid": "19999",
            "email": "student19999@example.com",
            "name": "Test Student",
            "sex": "other",
            "active": true,
            "_id": "6555773cf343fd6d0bf7aebd",
            "__v": 0,
            "birth_formatted": "November 16th, 2023",
            "id": "6555773cf343fd6d0bf7aebd"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create New User

### Restrict to

| Login | Role  |
| :---: | :---: |
|  Yes  | Admin |

### Method: POST

>```
>{{URL}}api/user/
>```

### Response: 201

```json
{
    "status": "success",
    "data": {
        "data": {
            "role": "admin",
            "uid": "30004",
            "password": "$2a$12$okkXPKmdMF6UxdFjoDJyfelPyhue6emjG2o3YOi1YmXC2v60BqsnG",
            "email": "test@admin.com",
            "name": "Test Admin",
            "sex": "other",
            "active": true,
            "_id": "65557c1f6200512f57adae0b",
            "__v": 0,
            "birth_formatted": "November 16th, 2023",
            "id": "65557c1f6200512f57adae0b"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Read

## End-point: Get All User

### Restrict to

| Login | Role  |
| :---: | :---: |
|  Yes  | Admin |

### Method: GET

>```
>{{URL}}api/user
>```

### Response: 200

```json
{
    "status": "success",
    "results": 3,
    "data": {
        "data": [
            {
                "_id": "6552f4c09d95074fe10783df",
                "role": "teacher",
                "uid": "20001",
                "email": "teacher1@example.com",
                "name": "John Smith",
                "sex": "other",
                "birth_formatted": "November 16th, 2023",
                "id": "6552f4c09d95074fe10783df"
            },
            {
                "_id": "6552f4c09d95074fe10783e0",
                "role": "teacher",
                "uid": "20002",
                "email": "teacher2@example.com",
                "name": "Jane Doe",
                "sex": "other",
                "birth_formatted": "November 16th, 2023",
                "id": "6552f4c09d95074fe10783e0"
            },
            {
                "_id": "6552f4c09d95074fe10783e1",
                "role": "teacher",
                "uid": "20003",
                "email": "teacher3@example.com",
                "name": "Bob Lee",
                "sex": "other",
                "birth_formatted": "November 16th, 2023",
                "id": "6552f4c09d95074fe10783e1"
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get User By Id

### Restrict to

| Login | Role  |
| :---: | :---: |
|  Yes  | Admin |

### Method: GET

>```
>{{URL}}api/user/:id
>```

### Response: 200

```json
{
    "status": "success",
    "data": {
        "data": {
            "_id": "6552f4c29d95074fe10783e9",
            "role": "admin",
            "uid": "30001",
            "email": "test1@email.com",
            "name": "John Smith",
            "sex": "other",
            "__v": 0,
            "passwordChangedAt": "2023-11-16T02:14:14.336Z",
            "birth_formatted": "November 16th, 2023",
            "id": "6552f4c29d95074fe10783e9"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get  User's All Record

### Restrict to

| Login |      Role      |
| :---: | :------------: |
|  Yes  | Admin, Teacher |

### Method: GET

>```
>{{URL}}api/user/:userId/record/
>```

### Response: 200

```json
{
    "status": "success",
    "results": 10,
    "data": {
        "data": [
            {
                "_id": "6554ac714c61dffccf7d9f0b",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b9",
                    "course_id": "6.003",
                    "name": "Signals and Systems",
                    "id": "6552f4b89d95074fe10783b9"
                },
                "mark": 90,
                "status": "completed",
                "year": 2021,
                "comments": "Excellent work!",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.640Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f06",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b4",
                    "course_id": "6.0001",
                    "name": "Introduction to Computer Science and Programming in Python",
                    "id": "6552f4b89d95074fe10783b4"
                },
                "mark": 85,
                "status": "completed",
                "year": 2020,
                "comments": "Great job!",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.640Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f10",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783ba",
                    "course_id": "6.004",
                    "name": "Computation Structures",
                    "id": "6552f4b89d95074fe10783ba"
                },
                "mark": null,
                "status": "in progress",
                "year": 2022,
                "comments": "",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f15",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783bb",
                    "course_id": "6.005",
                    "name": "Elements of Software Construction",
                    "id": "6552f4b89d95074fe10783bb"
                },
                "mark": 80,
                "status": "completed",
                "year": 2023,
                "comments": "Great job!",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f1a",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b6",
                    "course_id": "6.006",
                    "name": "Introduction to Algorithms",
                    "id": "6552f4b89d95074fe10783b6"
                },
                "mark": null,
                "status": "dropped",
                "year": 2020,
                "comments": "",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f1f",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b7",
                    "course_id": "6.01",
                    "name": "Introduction to EECS I",
                    "id": "6552f4b89d95074fe10783b7"
                },
                "mark": null,
                "status": "in progress",
                "year": 2021,
                "comments": "",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f24",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b8",
                    "course_id": "6.02",
                    "name": "Introduction to EECS II",
                    "id": "6552f4b89d95074fe10783b8"
                },
                "mark": 75,
                "status": "completed",
                "year": 2022,
                "comments": "Well done!",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f29",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783bc",
                    "course_id": "6.033",
                    "name": "Computer System Engineering",
                    "id": "6552f4b89d95074fe10783bc"
                },
                "mark": null,
                "status": "dropped",
                "year": 2023,
                "comments": "",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f2e",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783bd",
                    "course_id": "6.034",
                    "name": "Artificial Intelligence",
                    "id": "6552f4b89d95074fe10783bd"
                },
                "mark": null,
                "status": "in progress",
                "year": 2021,
                "comments": "",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f33",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b5",
                    "course_id": "6.042J",
                    "name": "Mathematics for Computer Science",
                    "id": "6552f4b89d95074fe10783b5"
                },
                "mark": null,
                "status": "dropped",
                "year": 2022,
                "comments": "",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Me

### Restrict to

| Login | Role |
| :---: | :--: |
|  Yes  | All  |

### Method: GET

>```
>{{URL}}api/user/me
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login

### Restrict to

| Login | Role |
| :---: | :--: |
|  No   | All  |

### Method: POST

>```
>{{URL}}api/user/login
>```

### Response: 200

```json
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTJmNGJlOWQ5NTA3NGZlMTA3ODNkNSIsImlhdCI6MTcwMDA5OTk2NiwiZXhwIjoxNzA3ODc1OTY2fQ.nIPUoLBP7DEfoyiZYHoLAuVY5pWIl7kQTJSLEmDY7wM",
    "data": {
        "user": {
            "_id": "6552f4be9d95074fe10783d5",
            "role": "student",
            "uid": "10001",
            "email": "test@email.com",
            "name": "John Doe",
            "sex": "male",
            "birth": "1999-01-01T00:00:00.000Z",
            "phone": "1234567890",
            "address": "123 Main St, Anytown, USA",
            "__v": 0,
            "passwordChangedAt": "2023-11-14T15:11:56.126Z",
            "birth_formatted": "January 1st, 1999",
            "id": "6552f4be9d95074fe10783d5"
        }
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Update

### Restrict to

| Login | Role |
| :---: | :--: |
|  Yes  | All  |

## End-point: UpdateMe

### Restrict to

| Login | Role |
| :---: | :--: |
|  Yes  | All  |

### Method: PATCH

>```
>{{URL}}api/user/updateMe
>```

### Body (**raw**)

```json
{
    "email": "test1@email.com"
}
```

### Response: 200

```json
{
    "status": "success",
    "data": {
        "user": {
            "_id": "6552f4c29d95074fe10783e9",
            "role": "admin",
            "uid": "30001",
            "email": "test1@email.com",
            "name": "John Smith",
            "sex": "other",
            "__v": 0,
            "passwordChangedAt": "2023-11-16T02:14:14.336Z",
            "birth_formatted": "November 16th, 2023",
            "id": "6552f4c29d95074fe10783e9"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update My Password

### Restrict to

| Login | Role |
| :---: | :--: |
|  Yes  | All  |

### Method: PATCH

>```
>{{URL}}api/user/updateMyPassword
>```

### Body (**raw**)

```json
{
    "passwordCurrent": "password1",
    "password": "password123",
    "passwordConfirm": "password123"
}
```

### Response: 200

```json
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTJmNGMyOWQ5NTA3NGZlMTA3ODNlOSIsImlhdCI6MTcwMDEwMDg1NSwiZXhwIjoxNzA3ODc2ODU1fQ.2Z-SbPdqkOChwOk6_FNLuqyotJP0BR3YnHHKyHF1a4w",
    "data": {
        "user": {
            "_id": "6552f4c29d95074fe10783e9",
            "role": "admin",
            "uid": "30001",
            "email": "admin1@example.com",
            "name": "John Smith",
            "sex": "other",
            "__v": 0,
            "passwordChangedAt": "2023-11-16T02:14:14.336Z",
            "birth_formatted": "November 16th, 2023",
            "id": "6552f4c29d95074fe10783e9"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update User By Id

### Restrict to

| Login | Role  |
| :---: | :---: |
|  Yes  | Admin |

### Method: PATCH

>```
>{{URL}}api/user/:id
>```

### Body (**raw**)

```json
{
    "phone": "00000000"
}
```

### Response: 200

```json
{
    "status": "success",
    "data": {
        "data": {
            "birth": null,
            "address": "",
            "_id": "6552f4c29d95074fe10783e9",
            "role": "admin",
            "uid": "30001",
            "email": "test1@email.com",
            "name": "John Smith",
            "sex": "other",
            "__v": 0,
            "passwordChangedAt": "2023-11-16T02:14:14.336Z",
            "phone": "00000000",
            "birth_formatted": "Invalid date",
            "id": "6552f4c29d95074fe10783e9"
        }
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Delete

## End-point: Delete User By Id

### Restrict to

| Login | Role  |
| :---: | :---: |
|  Yes  | Admin |

### Method: DELETE

>```
>{{URL}}api/user/:id
>```

### Response: 204

```json
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Course

# Create

## End-point: Create Course

### Method: POST

>```
>{{URL}}api/course
>```

### Response: 201

```json
{
    "status": "success",
    "data": {
        "data": {
            "course_id": "-1",
            "name": "Test Course",
            "description": "This is a test course",
            "credits": 12,
            "_id": "65557eeb90bf39e0a95304c8",
            "__v": 0,
            "id": "65557eeb90bf39e0a95304c8"
        }
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Read

## End-point: Get ALL Course

### Restrict to

| Login | Role |
| :---: | :--: |
|  Yes  | All  |

### Method: GET

>```
>{{URL}}api/course
>```

### Response: 200

```json
{
    "status": "success",
    "results": 3,
    "data": {
        "data": [
            {
                "_id": "6552f4b89d95074fe10783b8",
                "course_id": "6.02",
                "name": "Introduction to EECS II",
                "description": "Continuation of 6.01. Topics include circuits, signals and systems, and programming in C.",
                "credits": 4,
                "id": "6552f4b89d95074fe10783b8"
            },
            {
                "_id": "6552f4b89d95074fe10783bc",
                "course_id": "6.033",
                "name": "Computer System Engineering",
                "description": "Introduction to computer systems engineering, including operating systems, networks, and distributed systems.",
                "credits": 4,
                "id": "6552f4b89d95074fe10783bc"
            },
            {
                "_id": "6552f4b89d95074fe10783bd",
                "course_id": "6.034",
                "name": "Artificial Intelligence",
                "description": "Introduction to artificial intelligence, including search algorithms, game playing, and machine learning.",
                "credits": 4,
                "id": "6552f4b89d95074fe10783bd"
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Course By Id

### Restrict to

| Login | Role |
| :---: | :--: |
|  Yes  | All  |

### Method: GET

>```
>{{URL}}api/course/:id
>```

### Response: 200

```json
{
    "status": "success",
    "data": {
        "data": {
            "_id": "65557eeb90bf39e0a95304c8",
            "course_id": "-1",
            "name": "Test Course",
            "description": "This is a test course",
            "credits": 12,
            "__v": 0,
            "id": "65557eeb90bf39e0a95304c8"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Course's All Record

### Restrict to

| Login |      Role      |
| :---: | :------------: |
|  Yes  | Admin, Teacher |

### Method: GET

>```
>{{URL}}api/course/:courseId/record/
>```

### Response: 200

```json
{
    "status": "success",
    "results": 5,
    "data": {
        "data": [
            {
                "_id": "6554ac714c61dffccf7d9f24",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b8",
                    "course_id": "6.02",
                    "name": "Introduction to EECS II",
                    "id": "6552f4b89d95074fe10783b8"
                },
                "mark": 75,
                "status": "completed",
                "year": 2022,
                "comments": "Well done!",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f25",
                "user": {
                    "_id": "6552f4be9d95074fe10783d6",
                    "uid": "10002",
                    "name": "Jane Smith",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d6"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b8",
                    "course_id": "6.02",
                    "name": "Introduction to EECS II",
                    "id": "6552f4b89d95074fe10783b8"
                },
                "mark": null,
                "status": "in progress",
                "year": 2023,
                "comments": "",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f26",
                "user": {
                    "_id": "6552f4be9d95074fe10783d7",
                    "uid": "10003",
                    "name": "Bob Johnson",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d7"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b8",
                    "course_id": "6.02",
                    "name": "Introduction to EECS II",
                    "id": "6552f4b89d95074fe10783b8"
                },
                "mark": null,
                "status": "dropped",
                "year": 2020,
                "comments": "",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f27",
                "user": {
                    "_id": "6552f4be9d95074fe10783d8",
                    "uid": "10004",
                    "name": "Alice Lee",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d8"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b8",
                    "course_id": "6.02",
                    "name": "Introduction to EECS II",
                    "id": "6552f4b89d95074fe10783b8"
                },
                "mark": 80,
                "status": "completed",
                "year": 2021,
                "comments": "Great job!",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f28",
                "user": {
                    "_id": "6552f4be9d95074fe10783d9",
                    "uid": "10005",
                    "name": "Tom Smith",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d9"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b8",
                    "course_id": "6.02",
                    "name": "Introduction to EECS II",
                    "id": "6552f4b89d95074fe10783b8"
                },
                "mark": null,
                "status": "in progress",
                "year": 2022,
                "comments": "",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            }
        ]
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Update

## End-point: Update Course By Id

### Restrict to

| Login | Role  |
| :---: | :---: |
|  Yes  | Admin |

### Method: PATCH

>```
>{{URL}}api/course/:id
>```

### Response: 200

```json
{
    "status": "success",
    "data": {
        "data": {
            "_id": "65557f6a90bf39e0a95304cf",
            "course_id": "-1",
            "name": "Test Course",
            "description": "This is a test course",
            "credits": 1,
            "__v": 0,
            "id": "65557f6a90bf39e0a95304cf"
        }
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Delete

## End-point: Delete Course

### Method: DELETE

>```
>{{URL}}api/course/:id
>```

### Response: 204

```json
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Record 

# Create

## End-point: Create Record

### Restrict to

| Login |      Role      |
| :---: | :------------: |
|  Yes  | Admin, Teacher |

### Method: POST

>```
>{{URL}}api/record
>```

### Response: 201

```json
{
    "status": "success",
    "data": {
        "data": {
            "user": "6552f4be9d95074fe10783d5",
            "course": "6552f4b89d95074fe10783b4",
            "mark": null,
            "status": "completed",
            "year": 2023,
            "createdAt": "2023-11-16T02:25:12.602Z",
            "modifiedAt": "2023-11-16T02:43:02.419Z",
            "_id": "655581b790bf39e0a9530501",
            "__v": 0
        }
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Read

## End-point: Get All Record

### Restrict to

| Login |      Role      |
| :---: | :------------: |
|  Yes  | Admin, Teacher |

### Method: GET

>```
>{{URL}}api/record
>```

### Response: 200

```json
{
    "status": "success",
    "results": 3,
    "data": {
        "data": [
            {
                "_id": "6554ac714c61dffccf7d9f0d",
                "user": {
                    "_id": "6552f4be9d95074fe10783d7",
                    "uid": "10003",
                    "name": "Bob Johnson",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d7"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b9",
                    "course_id": "6.003",
                    "name": "Signals and Systems",
                    "id": "6552f4b89d95074fe10783b9"
                },
                "mark": 75,
                "status": "completed",
                "year": 2023,
                "comments": "Well done!",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f0f",
                "user": {
                    "_id": "6552f4be9d95074fe10783d9",
                    "uid": "10005",
                    "name": "Tom Smith",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d9"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b9",
                    "course_id": "6.003",
                    "name": "Signals and Systems",
                    "id": "6552f4b89d95074fe10783b9"
                },
                "mark": 80,
                "status": "completed",
                "year": 2021,
                "comments": "Keep up the good work!",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.641Z"
            },
            {
                "_id": "6554ac714c61dffccf7d9f0b",
                "user": {
                    "_id": "6552f4be9d95074fe10783d5",
                    "uid": "10001",
                    "name": "John Doe",
                    "birth_formatted": "November 16th, 2023",
                    "id": "6552f4be9d95074fe10783d5"
                },
                "course": {
                    "_id": "6552f4b89d95074fe10783b9",
                    "course_id": "6.003",
                    "name": "Signals and Systems",
                    "id": "6552f4b89d95074fe10783b9"
                },
                "mark": 90,
                "status": "completed",
                "year": 2021,
                "comments": "Excellent work!",
                "createdAt": "2023-11-15T11:33:05.608Z",
                "modifiedAt": "2023-11-15T11:33:04.640Z"
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Record By Id

### Restrict to

| Login |      Role      |
| :---: | :------------: |
|  Yes  | Admin, Teacher |

### Method: GET

>```
>{{URL}}api/record/:id
>```

### Response: 200

```json
{
    "status": "success",
    "data": {
        "data": {
            "_id": "6554ac714c61dffccf7d9f0a",
            "user": {
                "_id": "6552f4be9d95074fe10783d9",
                "uid": "10005",
                "name": "Tom Smith",
                "birth_formatted": "November 16th, 2023",
                "id": "6552f4be9d95074fe10783d9"
            },
            "course": {
                "_id": "6552f4b89d95074fe10783b4",
                "course_id": "6.0001",
                "name": "Introduction to Computer Science and Programming in Python",
                "id": "6552f4b89d95074fe10783b4"
            },
            "mark": 60,
            "status": "completed",
            "year": 2020,
            "comments": "Needs improvement",
            "createdAt": "2023-11-15T11:33:05.608Z",
            "modifiedAt": "2023-11-15T11:33:04.640Z",
            "__v": 0
        }
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Update

## End-point: Update Record By Id

### Restrict to

| Login |      Role      |
| :---: | :------------: |
|  Yes  | Admin, Teacher |

### Method: PATCH

>```
>{{URL}}api/record/:id
>```

### Response: 200

```json
{
    "status": "success",
    "data": {
        "data": {
            "_id": "6554ac714c61dffccf7d9f0a",
            "user": {
                "_id": "6552f4be9d95074fe10783d9",
                "uid": "10005",
                "name": "Tom Smith",
                "birth_formatted": "November 16th, 2023",
                "id": "6552f4be9d95074fe10783d9"
            },
            "course": {
                "_id": "6552f4b89d95074fe10783b4",
                "course_id": "6.0001",
                "name": "Introduction to Computer Science and Programming in Python",
                "id": "6552f4b89d95074fe10783b4"
            },
            "mark": 60,
            "status": "completed",
            "year": 2020,
            "comments": "This is a test record",
            "createdAt": "2023-11-15T11:33:05.608Z",
            "modifiedAt": "2023-11-15T11:33:04.640Z",
            "__v": 0
        }
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Delete

### Restrict to

| Login |      Role      |
| :---: | :------------: |
|  Yes  | Admin, Teacher |

## End-point: Delete Record

### Method: DELETE

>```
>{{URL}}api/record/:id
>```

### Response: 204

```json
null
```