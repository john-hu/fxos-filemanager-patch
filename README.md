# no-more-contextmenu

This addon disables context menu if an installed app doesn't have code to handle it. It just calls `e.preventDefault` while context menu event is fired.

## build

```
$ npm install
$ gulp
```

If you do any changes, you may only run `gulp` to rebuild it.
