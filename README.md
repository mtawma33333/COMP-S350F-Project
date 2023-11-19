## Academic Recording System

Group: 14
Name: 
LI Chak Hei (12860027)

Application link: https://project-s350-andand-s381f.onrender.com

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