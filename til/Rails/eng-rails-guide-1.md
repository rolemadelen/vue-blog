
## Controller Namespaces and Routing

it's possible to organize groups of controllers under a namespace.
```rb
namespace :admin do
  resources :articles, :comments
end
```

This will generate number of routes for each of the `articles` and `comments` controller.
For `Admin::ArticlesController`, rails will create

```
HTTP verb | Path           | Controller#Action
------------------------------------------------
GET       | /admin/articles          | admin/articles#index
GET       | /admin/articles/new      | admin/articles#new
POST      | /admin/articles          | admin/articles#create
GET       | /admin/articles/#id      | admin/articles#show
GET       | /admin/articles/:id/edit | admin/articles#edit
PATCH/PUT | /admin/articles/:id      | admin/articles#update
DELETE    | /admin/articles/:id      | admin/articles#destroy
```

To use the route `/articles` witout the prefix `admin`, we can do
```rb
scope module: 'admin' do
  resources :articles, :comments
end

# or, for a single case:

resources :articles, module: 'admin'
```

If you want to route `/admin/articles` to `ArticlesController` without the prefix module `Admin::`,
```rb
scope '/admin' do
  resources :articles, :comments
end

# or, for a single case:

resources :articles, path: '/admin/articles'
```

For each cases, the name routes remain the same. In the last case, the following paths map to `ArticlesController`:
```
HTTP verb | Path           | Controller#Action
------------------------------------------------
GET       | /admin/articles          | articles#index
GET       | /admin/articles/new      | articles#new
POST      | /admin/articles          | articles#create
GET       | /admin/articles/#id      | articles#show
GET       | /admin/articles/:id/edit | articles#edit
PATCH/PUT | /admin/articles/:id      | articles#update
DELETE    | /admin/articles/:id      | articles#destroy
```

## Non-Resourceful Routes
Although you should usually use resourceful routing, there are places where using non-resourceful (simpler routing) is more appropriate.

Simple routing makes it very easy to map legacy URLs to new Rails actions.

### Bound Parameters

```rb
get 'photos(/:id)', to: 'photo#display'
```

The incoming request of `/photos/1`, for example, will invoke the `display` action from `PhotoController`.
This route will also route the incoming request of `/photos` because `(:id)` is an optional parameter.

### Dynamic Segments
It's possible to setup as many dynamic segments within a regular route as we like. 
```rb
get 'photos/:id/:user_id', to: 'photos#show'
```
Let say the request was `/photo/1/2`. Then from the `show` action of the `PhotoController`, we can access its
id via `params[:id]` and the user\_id through `params[:user_id]`.

### Static Segments
By not prepending the colon, we can specify a static segements.
```rb
get 'photos/:id/with_user/:user_id', to: 'photos#show'
```

This route will respond to paths such as `/photos/1/with_user/2`. The `params` will hold `{controller: 'photos', action: 'show', id: '1', user_id: '2'}`.

### The Query String
```rb
get 'photos/:id', to: 'photos#show'
```

An incoming path of `/photos/1?user_id=2` will be dispathecd to `show` action with `params[:user_id] == 2`

## Restricting the Routes Created
By default, Rails creates routes for the 7 different actions (index, show, new, create, edit, update, destroy)
for every RESTful route in your app. We can use the `:only` and `:except` options to tell Rails to create certain routes only.

The `:only` tells Rails to create only the specified routes:
```rb
resources :photos, only: [:index, :show]
```

The `:except` option tells Rails to create all default routes except the one specified:
```rb
resources :photos, except: :destroy
```

Rails will create all 7 default routes except the `destroy` action.

## API
Think of API as a messenger who takes your request, tells the system what to do with it, and returns the response back to you.

### Analogy 1 - restaurant
You went to a restaurant and there's a waiter (API) who takes your order. The waiter brings your order (request) to the kitchen (system) and brings the food (response) back to you.

## What is REST?
- Representational State Transfer (RE S T)
- **Architecture style** for designing networked apps
- Relies on
  + stateless
  + client-server protocol
  + almost always HTTP

1. API is a messenger
2. REST uses HTTP request to format those messengers.

## HTTP Methods
1. GET - retrieve data
2. POST - submit data
3. PUT - update a specified resource
4. DELETE - deletes a specified resource

## Reference
- [Rails Guide](https://guides.rubyonrails.org/routing.html)
- [What is a RESTful API?](https://www.youtube.com/watch?v=Q-BpqyOT3a8)
