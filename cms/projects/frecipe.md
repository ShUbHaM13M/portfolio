---
slug: frecipe
name: Frecipe - Recipe API
description: Frecipe is free recipe API which serves recipe from a database.
images:
  - /projects/frecipe/frecipe_home.png
githubLink: https://github.com/ShUbHaM13M/Frecipe-API
technologies:
  - label:
      - Python
    accentColor: '#ffdd6f'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - MongoDb
    accentColor: '#199555'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - API
    accentColor: '#34b6e7'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - FastAPI
    accentColor: '#009485'
    textColor: '#F8EDFF'
    fieldGroup: customTag
type: Project
---

Frecipe is a free recipe API which serves recipes from a database and makes them accessible via HTTP APIs.
Currently it has more than 9500+ recipes. An API Token is required to be able to make requests.  
Frecipe uses [FastAPI](https://fastapi.tiangolo.com) - A modern, fast (high-performance), web framework for building APIs.  
It also uses mongoDb for storing registered users and tokens, and all the recipes.

> All the recipes in the database of frecipe were scraped from a website using a python script.

Frecipe has two public routes:

1. /get_recipes - returns a paginated list of all the recipes.
2. /get_recipe_by_slug - returns a matching recipe by the recipe slug.

To access this routes the `Authorization` header must be set.
The user needs to register to get a token in mail which can be used to access the APIs. When the user registers a mail with the token is sent to them. The mail is sent using a custom smpt script written using smtplib.  
The requests are rate limited (5 requests/minute). To track the rate at which user is accessing the APIs, there token is used.
There are many validations on the server side to ensure that the token is valid. A user can also not generate multiple tokens using the same email.

All the requests are asynchronous using the async features of the python programming lanuage, which makes it really fast and responsive.

Frecipe was up and running on heroku, until the hobby account of heroku was closed.
