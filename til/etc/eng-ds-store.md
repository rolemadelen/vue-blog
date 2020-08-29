## .DS\_Store
heard it's better to remove this file since it may contain private data.

Type below command on your terminal to turn off the automatic creation of these files.
```
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```

If you ever need this feature, change `true` to `false`.