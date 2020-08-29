
## Setting up Rails

Install the gem for `rails`.
```
$ gem install rails
```

then use `rails` to create a new project.
```
$ ralis new my_first_rails_app
```

Here I got an error about `yarn`
```
       rails  webpacker:install
Yarn not installed. Please download and install Yarn from https://yarnpkg.com/lang/en/docs/install/
```

### Install yarn

Arch Linux
```
$ pacman -S yarn
```

Then I ran `rails new` command again and it was successful.
```
...
Done in 19.59s.
Webpacker successfully installed 🎉 🍰
```

## Rails Generating Templates
Below code generates a template for us.
```
$ rails generate scaffold car make:string model:string year:integer
```

Then migrate the database
```
$ rails db:migrate
```

then start the rails; listening at the port 3000
```
$ rails server
```

## Setting up Heroku
```
$ heroku create
```

Configure your `Gemfile`.

Remove `gem 'sqlite3'` line and replace it to 
```
group :development, :test do
 gem 'sqlite3'
end

group :production do
  gem 'pg'
end
```

Then update the `Gemfile`
```
$ bundle install --without production
```

Add `root 'cars#index'` to `/config/routes.rb` before `resources :cars`

Push it to Heroku and update the database.
```
$ git push heroku master
$ heroku run rails db:migrate
```

Start the application.
```
$ heroku open
```


## Reference
- [Yarn install](https://classic.yarnpkg.com/en/docs/install/#arch-stable)
- [Rails Guide](https://guides.rubyonrails.org/getting_started.html)
- [The Odin Project - RoR](https://www.theodinproject.com/courses/ruby-on-rails/lessons/your-first-rails-application-ruby-on-rails?ref=lnav)
