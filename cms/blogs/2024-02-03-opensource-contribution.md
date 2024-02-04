---
slug: opensource-contribution
title: Opensource Contribution
excerpt: A guide to open source contribution
coverImage: ''
coverImageAlt: ''
showImage: false
socialImage: ''
date: 2023-11-14T09:13:33.000Z
updated: 2023-11-14T09:13:33.000Z
showToc: false
hidden: false
tags: []
categories: []
type: Blog
---

This is a guide to get started with Opensource contribution on Git. In order to contribute to a repository on Git we first have to create a fork of the repository in our personal Git space.

The project that I will work on is a Chat application. I will work on adding the functionality to support rendering links and opening the URL in another tab, currently it just renders it as a text.

![Fork git repo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vht17fd217dhn5szh74w.png)<figcaption>Forking the repo</figcaption>

![Naming the repo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dw8li0n1sab9lvcstssl.png)<figcaption>Naming the repo</figcaption>

> The name of the repo doesn't have to be the same as the original repo

After creating a fork we can clone the repo. I am cloning the repo using SSH.

![Cloning the repo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kyzevuvj3xrz1h0zj04w.png)<figcaption>Cloning the repo</figcation>

Next we have to add another remote to the cloned repo. This remote is the repo URL of the original author of the repo. Using this remote we can sync the cloned repo to the latest changes. I have used the HTTPs URL in this case as I only have read access to this repo.

![Adding remote to the original repo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bro5t9txna1w3l0y0q2z.png)<figcaption>Adding remote to the original repo</figcaption>

> Usually I will just name it same as the author's name

We can check if adding the remote was successful using

```shell
git remote -v
```

Next up we can just pull from the original repo, just to get the latest changes if any before continuing. It is a good idea to stay up to date with the original repo to prevent possibility of merge conflicts.

In order to work on a new feature create a new branch and add the changes and updates in this branch, commit and then push the changes.

![Creating a new branch](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iu6crtffgpr6x00tdigo.png)<figcaption>Creating a new branch</figcaption>

These changes are only going to be pushed on the forked repo in our workspace as we don't have the write access to the original repo anyways.

After working on the feature and pushing to the forked repo we can send a pull request to the original repo, adding a descriptive message to the changes made.

![Creating a pull request](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uum0i6wkp64zr1eo7n52.png)<figcaption>Creating a pull request to the original repo</figcaption>

![Leaving a descriptive change log for the author](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4z2g7zmyv5mrd0567hwi.png)<figcaption>Leaving a descriptive change log for the author</figcaption>

The author can then review the changes, and merge the pull request.
That's the basic of contributing to a repository on Github, Gitlab or any other VCs.
Make sure to also go through the licensing of the repositories.
