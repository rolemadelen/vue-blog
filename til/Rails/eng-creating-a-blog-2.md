
## Working with a Model in the Console
We can run the `irb` interpreter using the `console` command.
```bash
$ rails console
```

Enter each of these commands one at a time and observe the results:
```rb
> Time.now
> Article.all
> Article.new
```

`Time.now` is a regular ruby code and displays the current time in the console.
The second and third uses the model `Article` from the rails.

## Looking at the Model

All the code for the `Article` model is in the file `app/models/article.rb`.

```rb
class Article < ApplicationRecord
end
```

Not that impressive. There are no attributes inside the model and how does Rails know that an 
Article shoudl have a `title`, a `body`, etc? Rails uses the technique called `reflection`. When Rails queries the databse, it looks at the article table and assumes whatever is in the table should be the attributes for the model.

You might have noticed when you did `Article.new` that there's a column for `id`. Every table you create with a migration will autumatically have an `id` column which serves as the table's primary key. When you want to search for a specific article, you do it by searching its unique ID number. Rails and DB works together to make sure that these values are unique and assigns a special column type in the DB called `serial`.

Now going back to the console. Do you see your new article that you created through `Article.new`? Probably not. Because in Rails, you need explicitly call `.save` method to save the new article to the DB.

```rb
> a = Article.new
> a.title = "Sample Article Title"
> a.body = "This is the text for my article, woo hoo!"
> a.save
> Article.all
```

Now you'll see that the `Article.all` command gave you back an array holding the one article we created and saved. 

## Setting up the Router

navigate to `config/routes.rb`.

```rb
Blogger::Application.routes.draw do
  resources :articles
end
```

### Looking at the Routing Table

Run either `rails routes` or `rake routes` to see all the paths and verbs.

- The left most column says `articles`, which is prefix of the path. The router provides two different methods to us using that name, `articles_path` and `articles_url`. `_path` version uses a relative path while the `_url` uses the full URL. `_path` is always preferred.
- The second column is the HTTP verb. Web browsers typically submit requests with the verbs `GET` or `POST`. You'll see other HTTP verbs including `PUT` and `DELETE` which browsers don't actually use.
- The third column acts like a regular expression where it matches against the requested URL.
- The fourth column is where the routes map to in the app.

## Creating the Articles Controller

We can create a controller with the following commands
```rb
rails generate controller articles
```

## Defining the Index Action
```
def index
  @articles = Article.all
end 
```

<div class="divider"></div>

## Reference
- [JumstartLab Blogger2](http://tutorials.jumpstartlab.com/projects/blogger.html)
