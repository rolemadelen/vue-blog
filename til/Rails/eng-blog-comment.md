
## Creating a blog - Comment part

We use foregin_keys to create **one:one** or **one:many** relationship.
```sh
$ rails g Comment author_name:string body:text post:references
```

this is what the migration file for the `comments.rb` looks like.
```rb
class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :author_name
      t.text :body
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
```

and the model file for the comment tells the ruby that it belongs to what model.
```rb
# app/models/comment.rb

class Comment < ApplicationRecord
  belongs_to :post
end
```

Then we need to tell Rails that it is comment:post is a  one:many relationship.
```rb
# app/models/post.rb

class Post < ApplicationRecord
  has_many :comments
end
```

### Displaying Comments
```html
  <h3>Comments</h3>
  <%= render partial: 'posts/comment', collection: @post.comments %>
```

and create a file `_comments.html.erb`
```html
<div class="comment-body">
  <h4>Comment by <%= comment.author_name %></h4>
  <p class="comment"><%= comment.body %></p>
</div>
```
