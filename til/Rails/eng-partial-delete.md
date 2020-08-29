
### Delete

```rb
<%= link_to 'Delete', post_path(@post), data: {confirm: 'delete the post?'}, method: :delete %>
```

### Rendering partial

partial files start with an underscore(`_`).

create a file named `_form.html.erb` and we can use it like the below.

```rb
<%= render partial: 'form' %>
```