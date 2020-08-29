
## Custom Command

To define a command, open the vim and use the `:command` command.
```
:command TIL tabe~/Documents/README.md
```

Now I can use`:TIL` to open the `README.md` file in a new tab.

- Custom commands **must start** with a capital letter.
- **Cannot** use `:X`, `:Next`, and `:Print`.
- **Cannot** use the underscore symbol.
- **Can** use digits but its discouraged.

Custom commands will be removed everytime you close the vim.
Save your command in `~/.vimrc` and it will be defined automatically. 

# How to yank more than 50 lines

In default, we can only yank 50 lines and anything over will be ignored.

Type `:set viminfo?` in vim to see its default. 

```bash
:set viminfo?
```
The output:
```
viminfo='100,<50,s100,h
```
- `'100` - Marks will be rememebered for the last 100 edited files.
- `<50` - Limits the number of lines saved for each register to 50 lines.
- `s100` - Registers with more than 100 KB of text are skipped.
- `h` - Disables search highlighting when Vim starts.

We can edit `<50` to `<500` to increase the limit to 500 lines.

```
:set viminfo='100,<500,s100,h
```
## Reference
- http://vimdoc.sourceforge.net/htmldoc/usr_40.html#40.2
- https://superuser.com/questions/93492/how-to-add-a-command-in-vim-editor
- https://stackoverflow.com/questions/3676855/vim-limited-line-memory
