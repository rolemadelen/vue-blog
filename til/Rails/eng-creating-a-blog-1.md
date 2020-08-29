
## Setting the stage

Create a new rails app:

```bash
$ rails new blogger
```

This will generate basic structures of the app.
- `app`: this is the place where almost all of our effort goes to. It contains subfolders which hold MVC, Helpers, JS, and etc...
- `bin`: this is where app's executables are stored (`bundle`, `rails`, `rake`, and `spring`).
- `config`: Control the environment settings for your application. It also includes the `initializers` subfolder which holds items to be run on startup.
- `db`: will eventually have a `migrations` subfolder where your migrations, used to structure the database, will be stored. When using SQLite3 (Rails defualt), the db file will also be stored in this folder.
- `lib`: reusable codes that are used outside the project goes here.
- `log`: log files, one for each environment (development, test, production)
- `public`: static files can be stored and accessed from here. Since Rails 3.1, all JS, images, CSS have been moved up to `app`.
- `test`: Rails default `Test::Unit` tests goes here.
- `tmp`: temporary cached files
- `vendor`: infrequently used, this folder is store code you **_do not_** control.

## Configuring the Database
take a look at the `config/databes.yml` file:
```yml
# SQLite. Versions 3.8.0 and up are supported.
#   gem install sqlite3
#
#   Ensure the SQLite 3 gem is defined in your Gemfile
#   gem 'sqlite3'
#
default: &default
  adapter: sqlite3
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  timeout: 5000

development:
  <<: *default
  database: db/development.sqlite3

# Warning: The database defined as "test" will be erased and
# re-generated from your development database when you run "rake".
# Do not set this db to the same as development or production.
test:
  <<: *default
  database: db/test.sqlite3

production:
  <<: *default
  database: db/production.sqlite3
```

This file controls how Rails' db connection system will access your database.

## Starting the server
```bash
$ rails server

# or

$ rails s
```

this opens the port `3000` and you can access the app:
`http://0.0.0.0:3000` or `http:/localhst:3000` or `http://127.0.0.1:3000`

## Creating the Article Model
```bash
rails generate model Article
```

this will create `Article` model with following files:
- `db/migrate/(some_time_stamp)_create_article.rb`: a db migration to create the `articles` table
- `app/models/article.rb`: the file that will hold the model code
- `test/models/article_test.rb`: a file to hold unit tests for `Article`
- `test/fixtures/articles.yml`: a fixtures file to assist with unit testing

## Working with the Database
- rails migrations are generally database agnostic.
- you write your migrations once and it will work in alomst any database (SQLite3, PostgreSQL, MySQL, etc..)

### What is migration?
Let's take a look at the `db/migrate/(some_time_stamp)_create_article.rb` file.

```rb
class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|

      t.timestamps
    end
  end
end
```

migration needs to be ordered, so the timestamp serves to keep them in chronological order.

In the file you'll see one method `change`. It used to have two methods `up` and `down`. We used `up` to make changes and the `down` was to undo the change. But all these was extra typing so since Rails 3.1, those two were replace with `change`. 

We write chanegs in `change` and Rails will figure out the undo operations for us automatically.

### Modifying change

Inside the `change` method, we can see its calling a method `create_table` with a hash `:articles` passed as a parameter with `t` referencing the table.

We call methods on `t` to create columns in the `articles` table. What kind of fields do we need? We can easily add/update its fields so lets begin with these two for now:
- `title` (a string)
- `body` (a text - large text fields)

```rb
class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
```

### Timestamps
What is `t.timestamps`? It will create two columns inside our table named `created_at` and `updated_at`.
When an article is created its `created_at` and `updated_at` are automatically set. Each time we make a change
to the article, the `updated_at` will automatically be updated.

### Running the migration

Save the migration file and run this command:

```
rails db:migrate
```

The `migrate` action finds all migrations in the `db/migrate/` folder, looks at a special table in the DB to determine which migrations have and have not been run yet, then runs any migration that hasn't been run.

We had one migration to run and it should print some output like this:
```
== 20200630094810 CreateArticles: migrating ===================================
-- create_table(:articles)
   -> 0.0047s
== 20200630094810 CreateArticles: migrated (0.0048s) ==========================
```

<div class="divider"></div>

## Reference
- [JumstartLab Blogger2](http://tutorials.jumpstartlab.com/projects/blogger.html)
