
## Delete all files except one

Let say you want to delete all files except `important.txt`
```
important1.txt    important2.txt    bar.cpp    
delete-this.doc    bar.cpp    test.py
```

You can use
```
$ rm -v !(important1.txt)
```

for directories
```
$ rmdir -v !(DIRECTORY)
```

## Delete all except `important1.txt` and `important2.txt`

```
$ rm -v !(important1.txt | important2.txt)
```

## Delete all except `.txt` files

```
$ rm -v !(*.txt)
```
