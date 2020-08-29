
# Staging deleted files

This is what you'll see after you type `git status` when you delete files in your repository.
```
Changes not staged for commit:   

        deleted:    foo.md
        deleted:    bar.md
```

Let say you want to stage `foo.md` file only for deletion.

## For a single file
- `git rm foo.md`

This will remove a file from the file system as well if it hadn't been removed already.
use `git rm --cached foo.md` to stage the file for deletion without actually deleting the file.

## For multiple files
- `git rm foo.md bar.md`
- `git add 'git ls-files --deleted'`
- `git add -u`
  + This will stage both deleted & modified files


## Reference
- https://stackoverflow.com/questions/12373733/staging-deleted-files
