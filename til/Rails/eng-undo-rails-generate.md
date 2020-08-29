
## How to reverse a 'rails generate'
```sh
$ rails generate controller artcle
```

I made a typo. Lets delete this.

```sh
$ rails destroy controller artcle
```

and generate it again

```sh
$ rails  generate controller article
```

## shortcuts
- generate: `g`
- destroy: `d`

```sh
$ rails g controller article
$ rails d controller article
```

## Reference
- [stack overflow](https://stackoverflow.com/questions/4161357/how-to-reverse-a-rails-generate#:~:text=You%20could%20use%20rails%20d,using%20the%20rails%20generate%20command.&text=you%20just%20put%20d(destroy,(generate)%20in%20your%20migration.))
