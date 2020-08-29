
## Error Connecting to rubygems.org

Error installing gems because it fails to connect.
```
$ gem install bundler
ERROR:  Could not find a valid gem 'bundler' (>= 0), here is why:
          Unable to download data from https://rubygems.org/ - timed out (https://api.rubygems.org/specs.4.8.gz)
```

Do the following to see if ipv6 fails to connect
```
$ # ipv4 works fine
$ curl -v --head https://api.rubygems.org

$ # ipv6 broken
$ curl -6 -v --head https://api.rubygems.org
```

if so, do the below to disable ipv6
```
$ sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
$ sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
```

## Reference
- [Network problems with gems fetching](https://github.com/rubygems/rubygems/issues/2253)