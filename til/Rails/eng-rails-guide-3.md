
## Strong Parameters
### Permitted Scalar Values
Given 
```rb
params.permit(:id)
```

the key `:id` will be permitted to use if it appears in `params` and has a permitted scalar value associated.
Otherwise, the key will be filtered out and cannot be used (accessed).

The permitted scalary types are 
- String
- Symbol
- NilClass
- Numeric
- TrueClass
- FalseClass
- Date
- Time
- DateTime
- StringIO
- IO
- ActionDispatch::Http::UploadFile
- Rack::Test::UploadedFile

If the permitted scalar values must be in forms of array, map the key to an empty array
```rb
params.permit(id: [])
```

Sometime it's not possible to declare arrays of scalar values or conveinent to use hash.
```rb
params.permit(preferences: {})
```

But this opens the door to arbitrary inputs. To permit an entire hash of paramteres, the `permit!` method
can be used:

```rb
params.require(:log_entry).permit!
```

This marks the `:log_entry` parameters hash and any sub-hash of it as permitted and does not check for permitted scalars, anything is accepted. Be careful with using `permit!` because it allows all current and future model attributes to be mass-assigned.

### Nested Parameters
`permit` can be nested:
```rb
params.permit(:name, { emails: [] },
              friends: [ :name, 
                         { family: [ :name ], hobbies: [] 
}])
```

This permits the `name`, `emails`, and `friends` attributes.
- `emails` : an array of permitted scalar values.
- `friends` : array of resources with specific attributes.

### More Examples
Using permitted attributes in `new` action. There's a problem here because we can't use `require` on the root key just because it doesn't exist when calling `new`.

We can use `fetch` to supply the default and use the strong parameters API.
```rb
params.fetch(:blog, {}).permit(:title, :author)
```

The model class method `accepts_nested_attributes_for` allows you to update and destroy associated records. This is based on the `id` and `_destry` parameters:
```rb
params.require(:author).permit(:name, books_attributes: [:title, :id, :_destroy])
```

Imagine you want to permit a product name attribute and also the whole data hash:
```rb
def product_params
  params.require(:product).permit(:name, data: {})
end
```

## The Flash
`flash`: a special part of the session which is cleared with each request. This is useful for passing error messages, etc.

Lets say a user is logging out. We can use `flash` to display a logout message:
```rb
class LoginsController < ApplicationController
  def destroy
    session.delete(:current_user_id)
    flash[:notice] = "You have successfully logged out."
    redirect_to root_url
  end
end
```

It is also possible to assign a flash message as part of the redirection.
```rb
redirect_to root_url, notice: "You have sucessfully logged out."
redirect_to root_url, alert: "You're stuck here!"
redirect_to root_url, flash: { referral_code: 1234 }
```

It's conventional to display any error alerts or notices from the flash in the application's layout:
```erb
<html>
  <body>
    <% flash.each do |name, msg| -%>
      <%= content_tag :div, msg, class: name %>
    <% end -%>
  </body>
</html>
```

This way, if an action sets a notice or an alert message, the layout will display it automatically.

If you want to carry over the `flash` value to another request, use the `keep` method:
```rb
class MainController < ApplicationController
  def index
    # will persist all flash values
    flash.keep

    # you can also keep only certain value
    # flash.keep(:notice)
    redirect_to users_urll
  end
end
```

### flash.now

By default, adding values to the flash will make them available to the **next request**, but sometimes
you may want to access those values in the **same request**. 

For example, if the `create` action fails to save a resource and you render the `new` template directly, that's not going to resut in a new request, but you may still want to display an error message using the flash. To do this on the **same request**, you can use `flash.now`.
```rb
class ClientsController < ApplicationController
  def create
    @client = Client.new(params[:client])
    if @client.save
      # ...
    else
      flash.now[:error] = "Could not save client"
      render action: "new"
    end
  end
end
```

<div class="divider"></div>

## Views
- simplest part of the MVC structure (at the basic level).
- insert the variables (data) you received from the controller.
- it is the actualy webpage.
- often called **view templates**.

### Where are view files?
Views are located in
```
app/views/controller_name/action_name.html.erb
```

`controller_name` is the name of the controller the view is linked to and `action_name.html.erb` is the 
corresponding method inside the controller that was run immediately prior to rendering the view.

Example,
```rb
# 'Posts' controller running the 'post#index'
app/views/posts/index.html.erb
```

To use an instance variable from the controller, just call it the same way you wolud in the controller:
`@user.first_name` or `@posts` or `@some_other_variable`.

## Layouts
Named view template that we render is actually not the full webpage. 
You wont find `<head>` tags or the `DOCTYPE` declaration or some other basic structures. This is because
it's redundant. These basic structures are present in all pages so Rails creators made these into its own ile called _layout_, which can be viewd at `app/views/layouts`.

Your new Rails application will have `application.html.erb` layout which compose of tags that forms a basic structure of a page like `<html>` and `<body>`, and a couple snippets of code thta load up the js and css files that your webpages will need. If you have something that is needed across all your pages, you need to put it in the layoutlike navbars and footers and flash messages.

Here's a sample of `application.html.erb` of a brand new Rails application.
```erb
<!DOCTYPE html>
<html>
  <head>
    <title>Practice</title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```

The view template gets inserted where the `<%= yield %>` statement is. 

## Preprocessors
You might have noticed `<%= ...  %>` tags from the above code. This is Embeded Ruby (ERB). It's a special
way of executing ruby code inside your HTML.

The different between `<%=` and `<%` is that the first one actually **displays** the resulted value inside the ERB tags. The latter will evaluate the code but wont display it.

`<%#` is used to comment and wont execute.

## How do Preprocessors work?
The code executaion is all done on the server **BEFORE** the final HTML file is shipped over to the browser.
When we render the template in Rails, it first runs preprocessors like ERB.

Rails first processes the file using ERB, then treats it as regular HTML.

## View Partials
- Makes your code more concise and eaiser to read; also lets you reuse certain common patterns

One example is `#new` and `#edit` actions. These are almost exactly same that people turn this into form into a new file such as `_user_form.html.erb` and just call this in both `new.html.erb` and `edit.html.erb`.

Partials are just HTML files that aren't meant to be complete but can be shared by other files.
```erb
<!-- app/views/users/new.ehtml.erb -->
<div class="new-user-form">
  <%= render "user_form" %>
</div>
```

Note that the view partial file is named with an underscore like `_user_form.html.erb` but is called without it `user_form`.

It is good practice to save partials into its own folwer `shared` and then render them using the code
`<%= render "shared/some_partial"%>`

## Passing Local Variables to Partials
A partial has access to all the variablest that the calling view template does, **but do NOT rely on them!** 
Your partial maybe shared with different controller one variable like `@user` may be used differently in different controllers. So you've got to explicitly pass the partial whichever variables you want it to have access to.

`render` lets you pass it an options hash. 
```rb
<%= render "shared/your_partial", :locals => { :user => user} %>
```

To use the variable in your partial file, you drop the `@` and call it like a normal variable.

## Implicit Partials
If you want a list of all your users, you colud write out the HTML and ERB code for displaying a single user's first name, last name, and etc many times in your `app/views/users/index.html.erb` file or use some sort of `each` loop.

But it's good to make the User into its own partial called `_user.html.erb`. The basic way of calling this might  be something like:
```erb
<!-- app/views/index.html.erb -->
<h1>Users</h1>
<ul>
  <% @users.each do |user %>
    <%= render "user", :locals => {:user => user} %>
  <% end %>
</ul>

<!-- Partial: app/views/_user.html.erb -->
<li><%= "#{user.first_name} #{user.last_name}, #{user.email}" %></li>
```

Now here's the magical Rails way:
```erb
<!-- app/views/index.html.erb -->
<h1>Users</h1>
<ul>
  <% @users.each do |user| %>
    <%= render user %>
  <% end %>
</ul>
```

Rails then looks for the `_user.html.erb` file in the current directory and passes it the `user` variable automatically.

To render bunch of users:
```erb
<!-- app/views/index.html.erb -->
<h1>Users</h1>
<ul>
  <%= render @users %>
</ul>
```

Rails not only finds the `_user.html.erb` and passes it the correct `user` to use, it also loops over all the users in the `@user` collection.

## Helper Methods
`render` is not the only method we can call from within a view. Rails provide bunch of handy helper methods.

### \#link\_to
`link_to` creates an anchor tag URL.

Instead of writing:
```html
<a href="<%= users_path %>">See All Users</a>
```

We can write:
```erb
<%= link_to "See All Users", users_path %>
```

- `users_path`
  + generates a relative URL like `/users`
- `users_url`
  + generates a full URL like `http://www.yourapp.com/users`

### Asset Tags
Rails gives you helper methods that output HTML tags to grab CSS or javascript files. You can grab images as well. These are called Asset Tags.

```erb
<%= stylesheet_link_tag "your_stylesheet" %>
<%= javascript_include_tag "your_js" %>
<%= image_tag "happy_cat.jpg" %>
```

## Learning Outcomes
- What is a layout?
- What’s the difference between a “view template” and a “layout”?
- What is a “Preprocessor”?
- Why are preprocessors useful?
- How do you make sure a preprocessor runs on your file?
- What’s the outputted filetype of a preprocessed \*.html.erb file? What about a \*.css.scss file?
- What is the difference between the <%=, <%, and <%# tags?
- What is a view partial?
- How do you insert a partial into your view?
- How can you tell that a view file is a partial?
- How do you pass a local variable to a partial?
- What’s the magical Rails shortcut for rendering a User? A bunch of Users?
- What are asset tags and why are they used?

<div class="divider"></div>

## The Asset Pipeline
Assets in your app are additional files that get called by the browser after your intial gob of HTML is received like CSS, js, images, videos, etc ...

Often these files are organized in many different files so its eaiser to keep track of. But if the browser has to grab a dozen different CSS files, each one of those requests is going to slow things down. Too many requests and you've harpooned your user's experience with your application.

So Rails' solution to this is to flatten everything out and mash all asset files together into one big one for each filetype (called "concatenation"). The process used to do this is the _Asset Pipeline_.

So Rails will take all CSS files and stack them on top of each other in one giant asset file. It will then run an _uglifier_ or _minifier_ program on the file to remove extraneous spaces and make everything nice and small for shipping to the browser.

Same with JS files. All of them are smooshed together and then uglified before sent to the browser as a one big chunk of a file. **It is better to have one slightly larger file than to make several full HTTP requests**.

### Manifest Files
Rails needs to know which files to include in that giant blob, so it uses _manifest_ files to determine it. Your JS manifest file will be `apps/assets/javascripts/applications.js`. It looks commented out, but the lines
starting with `//=` tell Rails which files to go find and include.

The stylesheet manifest file operates on the same principle; it's available at `app/assets/stylesheets/application.css.scss`:
```
/*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, or any plugin's
 * vendor/assets/stylesheets directory can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS
 * files in this directory. Styles in this file should be added after the last require_* statement.
 * It is generally better to create a new file per style scope.
 *
 *= require_tree .
 *= require_self
 */
```

The `require_tree` helper method just grabs everything in the current directory.

Sometimes, if you start using a new gem (like some of the Twitter-Bootstrap gems) you manually need to add the new bootstrap stylsheets and javascripts to the manifest files to make sure your app actually includes them in the final output.

### The Output
Rails mashes all the specified files together and creates a new one called something like `application-1fc71ddbb281c144b2ee4af31cf0e308.js`. These nonsensical string of characters are meant to differentiate between the original and this new file.

To get those nonsensical looking string of characters (to ask the browser to look for that specific one), we use asset tags: 
```erb
<%= javascript_include_tag "applicationt" %>
```
Rails automatically knows which filename to request to get all js files imported properly.

### Namespacing
Remember that Ralis mashes everything into one file. What if you have a class `.container` that wants to style
differently in different pages? One will override the others and using inline style code just to avoid this defeats the purpose of using the external stylesheet, which is to make your code clean.

So we use _namespace_ so that certain codes are only affected under certain structure.

## Un-Escaping HTML
When you write something like `this is the <strong>BODY</strong> of my post` and then try to render it in a view later, the `<strong>` tags will just be regular text. This is called _escaping_ the chracters.

To get Rails to actually render HTML tags, you need to let Rails know that it is safe to run; otherwise, it's easy for attackers to inject malicious code like `<script>` tags.

To tell Rails a string is safe, we use `raw`:
```erb
<%= raw "<p>hello world!</p>" %>

If you don't want to rely on Rails' native behavior and would like to make absolutely sure the HTML does not get run, use `CGI` class's `escapeHTML` method:
```rb
CGI::escapeHTML('usage: foo "bar" <baz>')
# result: "Usage: foo &quot;bar&quot; &lt;baz&gt;"
```

## Learning Outcomes
- What is the "Asset Pipeline"?
- What are "Manifest Files"?
- Why would you namespace your stylesheets?
- What does it mean to "Escape" HTML?

## Reference
- [Rails Guide - Controller](https://guides.rubyonrails.org/action_controller_overview.html)
