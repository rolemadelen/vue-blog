
## API
API (Application Programming Interface) is a set of programming instructions and standards for accessing 
a Web-based software application or Web tool. When we make a request, it asks for that data directly using website's API 
rather than clicking links or buttons on a websites.

<div class="divider"></div>

## Cookies
A way for websites to remember who you are from one request to another.
Cookies are little bits of data that your browser sends to the website every time you make a 
request to it. It **preserves the state** of your session. (for [more](https://www.allaboutcookies.org/) information).

<div class="divider"></div>

## Routing
Router -> doorman of the app.

When an HTTP requests arrives from the client, it needs to know what to do with it. Router helps where to go and 
what to do by looking at the HTTP verb (GET, POST, PUT, DELETE) and the URL that is being requested, and matches 
it with the appropriate controller action to run.o

Rails grab all the parameters and we can access it via `params` in the controller.

This command shows all the routes that are available to your application.
```
$ rails routes
```

### Root
Root (root url) is the most important and simplest route in the file.
```rb
root to: "jioneeu#index"  #jioneeu controller, index action (method)
```

### RESTful Routes
REST -> 7 main types fo actions
1. `index` -> GET all the posts
2. `show` -> GET one specific post
3. `new` -> GET the page (that lets you create a new post)
4. `create` -> POST the new new data 
5. `edit` -> GET the page (that lets you edit the post)
6. `update` -> PUT the data back to the server
7. `destroy` -> DELETE one specific post

Each of these representns a **RESTful** route.

One way to write these instructions so the requests are routed to the proper action is ..
```rb
get "/posts", to: "posts#index"
get "/posts/:id", to: "posts#show"
get "/posts/new", to: "posts#new"
post "/posts", to: "posts#create"  # usually a submitted form
get "/posts/:id/edit", to: "posts#edit"
put "/posts/:id", to: "posts#update" # usually a submitted form
delete "/posts/:id", to: "posts#destroy"
```

Each of these routes are simply a **method** in Ruby that matches the particular URL and HTTP verb with 
the correct controller action.

1. Several of these routes submit to the **SAME** methods but with different HTTP verbs.
2. `id` field is prependended by a colon(`:`).  This value is stored as a hash and we can access it directly.
  + Ex) It lets you submit a GET request for the first post and the fifth post to
the same route, just a different ID.
  ```
   /post/1  # going tho the #show action
   /post/5  # also going to the #show action
  ```

## Reference
- [The Odin Project - Rails Basics](https://www.theodinproject.com/lessons/a-railsy-web-refresher)
