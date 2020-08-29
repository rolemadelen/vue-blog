
## Merging Repositories Without Losing File Histories

I was cleaning up my github and wanted to combine multiple repositories into one repo.
But once I remove the other repository, its history will be gone and I don't want that to happen.

Thanks to [Eric Lee - SaintGimp](https://saintgimp.org/about/), I was able to manage it without any issues.

## Initial Commit

Navigate to you new repo that you would like to combine other repositories.
```
mkdir new_repo
cd new_repo
```

In order to merge histories from other repo, we need a single commit to merge with.

```
git init
ls > deleteme.txt
git add .
git commit -m "Initial dummy commit"
```

Now we are ready to merge.

## Merging

Repeat below process with other repositories you would like to merge.
```
git remote add -f mergeA <mergeA repo URL>
git merge mergeA/master
mkdir mergeA
mv <all files to mergeA>
git commit -m "Move mergeA files into subdir"

git remote add -f mergeB <mergeB repo URL>
git merge mergeB/master
..
.. repeat
```

If you see an error `refused to merge unrelated histories` when merging, use `--allow-unrelated-histories` option.

<div class="divider"></div>

깃허브 관리하던 도중 여러 repository들을 하나로 통합하고 싶다는 생각이 들었다.
하지만 지금까지의 커밋 로그들은 그대로 가져가고 싶어서 찾아보았더니 할 수 있었다.

```
git remote add -f old_repo <OldRpeo repo URL>
git merge old_repo/master
mkdir old_repo
git commit -m “Move old_repo files into subdir”
```


## Reference
- https://saintgimp.org/2013/01/22/merging-two-git-repositories-into-one-repository-without-losing-file-history/
- https://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories-on-rebase
