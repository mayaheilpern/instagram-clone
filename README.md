# instagram-clone

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

This project is a social media concept that allows users to login to there account, post, comment om a post, like a post and like a comment.

<br>

## MVP

<br>

### Goals

- _User authentication_
- _Posts, comments and likes_
- _Responsive design_

<br>

### Libraries and Dependencies

|     Library      | Description                                                 |
| :--------------: | :---------------------------------------------------------- |
| React            | _JavaScript library for building user interfaces_           |
| React Router Dom | _Enables you to implement dynamic routing in a web app_     |
| Axios            | _Sends asynchronous HTTP request to REST endpoints_         |
| TailwindCSS      | _A utility first CSS framework_                             |
| Rails            | _MVC framework, providing default structures for a database_|

<br>

### Client (Front End)

#### Wireframes

[Wireframes](https://www.figma.com/file/6NRfzQlMt8kY1KqYzhyhko/Project-4-desktop?node-id=0%3A1)

#### Component Tree

[Component Tree](https://whimsical.com/instagram-clone-vmFxJrg6iRjaKNDrrn8xW)

#### Component Architecture 

``` structure

src
|__ screens/
      |__ LandingPage.jsx
      |__ Signin.jsx
      |__ AllPosts
      |__ NewPost
      |__ Account
|__ components/
      |__ PostCard.jsx
      |__ Commets.jsx
      |__ AddCommment.jsx
      |__ EditPost.jsx
      |__ EditAcct.jsx
      |__ DeletePost.jsx
      |__ Drafts.jsx
|__ services/
      |__images/
      |__apiConfig/
            |__ user.js
            |__ post.js
            |__ like.js

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Backend      |    H     |     3 hrs      |     TBD       |     TBD     |
| Backend Testing     |    M     |    .5 hrs      |     TBD       |     TBD     |
| Crud Operationg     |    H     |     6 hrs      |     TBD       |     TBD     |
| Styling             |    H     |     6 hrs      |     TBD       |     TBD     |
| Testing/Cleaning    |    M     |     1 hrs      |     TBD       |     TBD     |
| Post MVP            |    L     |    10 hrs      |     TBD       |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1ELkeltsK985_mNir88rjjUhNKWT3oSng/view?usp=sharing)
<br>

***

## Post-MVP

- _Notifications_
- _Mentions_
- _Upload Images_

***

## Code Showcase

## Code Issues & Resolutions
