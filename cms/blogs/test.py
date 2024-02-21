import os

CURRENT_DIR = os.getcwd()


def get_blog_content(index: int) -> str:
    return f"""---
slug: dummy-blog-{index}
title: Dummy Blog {index}
excerpt: This is a dummy blog number {index}
coverImage: /blogs/elevate-your-development-workflow-with-typescript/cover.avif
coverImageAlt: Typescript
showImage: true
socialImage: ''
date: 2023-09-18T09:09:10.000Z
updated: 2023-09-18T09:09:10.000Z
showToc: false
hidden: false
tags:
  - label: typescript
    accentColor: '#4980FF'
    textColor: '#F8EDFF'
    fieldGroup: blogTag
  - label: productivity
    accentColor: '#0052FE'
    textColor: '#F8EDFF'
    fieldGroup: blogTag
  - accentColor: '#19D645'
    label: beginners
    textColor: '#F8EDFF'
    fieldGroup: blogTag
categories:
  - Dev
type: Blog
---
"""


def main():
    for i in range(40):
        with open(f"2024-02-{i}-dummy-blog-{i}.md", "w") as f:
            f.write(get_blog_content(i))


if __name__ == "__main__":
    main()
