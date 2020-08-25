## How to Cancel Local Commits

This command will revert you commit back to one BUT also delets all newly made content.
```
$ git reset --hard HEAD~1
```


To retain your changes but just cancel the local commit, you can use 
```
$ git reset HEAD~1
```

Same command just without the `--hard` command. This will cancel the commit and you can re-push it or do whatever.

