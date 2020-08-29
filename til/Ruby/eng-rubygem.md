## rubygem

i'm trying to make my first gem, so was looking at the guide and it seems like i need to create 
a gemspec first.

here's a gemspec for my first gem [mw-dictionary](https://github.com/jioneeu/mw-dictionary)

```
Gem::Specification.new do |s|
  s.name          = "mw-dictionary"
  s.version       = "1.0.0"
  s.date          = "2020-05-23"
  s.summary       = "Merriam-Webster Collegiate Dictionary and Thesaurus API Wrapper"
  s.author        = ["Jione Eu"]
  s.files         = ["lib/mw-dictionary.rb", "lib/client/client.rb", 
                     "lib/parser/parser.rb", "lib/cache/cache.rb"]
  s.homepage      = "https://rubygems.org/gems/mw-dictionary"
  s.license       = "MIT"
  s.metadata = {
    "documentation_uri" => "https://github.com/jioneeu/mw-dictionary"
  }
end
```

require specs:
- authors
- files
- name
- summary
- version

to build
```sh
gem build [YOUR-GEM].gemspec
```

you should get your `.gem` if build was successful.

to push to [rubygems.org](https://rubygems.org/),
```sh
gem push [YOUR-GEM].gem
```

## Reference
- [rubygem guide](https://guides.rubygems.org/make-your-own-gem/)
