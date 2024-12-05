---
layout: posts/PostLayout.11ty.tsx
pagination:
  data: posts
  size: 1
  alias: post
permalink: "posts/{{ post.id | slugify }}/"
---

# {{ post.title }}

{{ post.contents }}