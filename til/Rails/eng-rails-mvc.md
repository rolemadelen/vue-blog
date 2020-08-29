
## Rails MVC

- routes
```rb
Rails.application.routes.draw do
  get '/' => 'home#index'
  get 'result' => 'home#result'
#  post 'result' => 'home#result' ## see below for POST
end
```
- view
```rb
# index.erb
... 
```
```rb
# result.erb
... 
```

- controller
```rb
class HomeController < ApplicationController
  def index 
  end

  def result
    @sum = params[:num1].to_i + params[:num2].to_i
  end
end
```

For POST method (ruby version > 5.2), add 
```rb
# /app/controllers/application_controllers.rb

skip_before_action :verify_authenticity_token, raise: false
```
<div class="divider"></div>

## Reference
- [Rails로 쉽고 빠른 웹사이트 만들기(Ruby Coin)](https://www.inflearn.com/course/ruby-coin/)
