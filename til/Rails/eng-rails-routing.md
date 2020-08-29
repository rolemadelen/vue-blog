
## Routing

2 ways to write routes in `routes.rb`

```rb
get '/index' => 'home#index'
# or
get '/index', to: 'home#index'
```

incoming request for 
```
GET /patients/17
```
asks the `routes.rb`
```rb
get '/patients/:id' => 'patients#show'
```
`id` can be accessed through `params[id]`.

## Default Routing
let `home` be the controller.

Then, we can put this one line in the `routes.rb`
```
resources :home
```

and this will generate 7 different routes in our application all mapping to the `home` controller.
```
HTTP verb | Path           | Controller#Action
------------------------------------------------
GET       | /home          | home#index
GET       | /home/new      | home#new
POST      | /home          | home#create
GET       | /home/#id      | home#show
GET       | /home/:id/edit | home#edit
PATCH/PUT | /home/:id      | home#update
DELETE    | /home/:id      | home#delete
```

## Reference
- [Rails Guide](https://guides.rubyonrails.org/routing.html)
