# Project: Academic Recording System
The Academic Recording System API contain endpoint for User, Course, and Record.



All API need to login and get the auth token or cookie

Only Admin can access the Create User, Course API

Only Admin can access the GET All User, Get User by Id API

Only Admin can access the Update or Delete User, Course By Id API



Only Admin and teacher can access the Record API



# 📁 Collection: User 


## End-point: Get All User
### Method: GET
>```
>https://project-s350-andand-s381f.onrender.comapi/user?page=3&limit=3&sort=uid
>```
### Query Params

|Param|value|
|---|---|
|<field>[lte]|10|
|fields|_id|
|page|3|
|limit|3|
|sort|uid|


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
### Method: GET
>```
>https://project-s350-andand-s381f.onrender.comapi/user/:id
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
### Method: GET
>```
>https://project-s350-andand-s381f.onrender.comapi/user/:userId/record/
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
### Method: GET
>```
>https://project-s350-andand-s381f.onrender.comapi/user/me
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Student Sign Up
### Method: POST
>```
>https://project-s350-andand-s381f.onrender.comapi/user/signup
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

## End-point: Login
### Method: POST
>```
>https://project-s350-andand-s381f.onrender.comapi/user/login
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

## End-point: Login Admin
### Method: POST
>```
>https://project-s350-andand-s381f.onrender.comapi/user/login
>```
### Body (**raw**)

```json
{
    "uid": "30001",
    "password": "password1"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create New User
### Method: POST
>```
>https://project-s350-andand-s381f.onrender.comapi/user/
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

## End-point: UpdateMe
### Method: PATCH
>```
>https://project-s350-andand-s381f.onrender.comapi/user/updateMe
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
### Method: PATCH
>```
>https://project-s350-andand-s381f.onrender.comapi/user/updateMyPassword
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
### Method: PATCH
>```
>https://project-s350-andand-s381f.onrender.comapi/user/:id
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

## End-point: Delete User By Id
### Method: DELETE
>```
>https://project-s350-andand-s381f.onrender.comapi/user/:id
>```
### Response: 204
```json
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Course 


## End-point: Get ALL Course
### Method: GET
>```
>https://project-s350-andand-s381f.onrender.comapi/course?page=3&limit=3&sort=course_id
>```
### Query Params

|Param|value|
|---|---|
|role|student|
|<field>[lte]|10|
|fields|_id|
|page|3|
|limit|3|
|sort|course_id|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|


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
### Method: GET
>```
>https://project-s350-andand-s381f.onrender.comapi/course/:id
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
### Method: GET
>```
>https://project-s350-andand-s381f.onrender.comapi/course/:courseId/record/
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

## End-point: Create Course
### Method: POST
>```
>https://project-s350-andand-s381f.onrender.comapi/course
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

## End-point: Update Course By Id
### Method: PATCH
>```
>https://project-s350-andand-s381f.onrender.comapi/course/:id
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

## End-point: Delete Course
### Method: DELETE
>```
>https://project-s350-andand-s381f.onrender.comapi/course/:id
>```
### Response: 204
```json
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Record 


## End-point: Get All Record
### Method: GET
>```
>https://project-s350-andand-s381f.onrender.comapi/record?course=6552f4b89d95074fe10783b9&mark[gte]=70&sort=mark
>```
### Query Params

|Param|value|
|---|---|
|course|6552f4b89d95074fe10783b9|
|mark[gte]|70|
|fields|_id|
|page|3|
|limit|3|
|sort|mark|


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
### Method: GET
>```
>https://project-s350-andand-s381f.onrender.comapi/record/:id
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

## End-point: Create Record
### Method: POST
>```
>https://project-s350-andand-s381f.onrender.comapi/record
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

## End-point: Update Record By Id
### Method: PATCH
>```
>https://project-s350-andand-s381f.onrender.comapi/record/:id
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

## End-point: Delete Record
### Method: DELETE
>```
>https://project-s350-andand-s381f.onrender.comapi/record/:id
>```
### Response: 204
```json
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
