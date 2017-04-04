# window.opener demo

### The problem:
By default, electron is opening every new window in a new electron instance. 
For security reasons, the new instance is not inheriting his parent (his opener) objects and therefor, 
don't hold the window.opener object which is usually necessary for completing OAuth sign-in.

### The bug:
In order to bypass this security feature, the [sand-box option](https://github.com/electron/electron/blob/master/docs/api/sandbox-option.md) 
should be used and then all the window objects should be passed to the new window. 
Due to a [bug in electron](https://github.com/electron/electron/issues/8100), it won't work if the new window is from a different domain.

### How to reproduce:
* Copy repository
* Install dependencies
* cd into the directory
* Run electron
```
$ npm run demo
```
* Click on "different-domain" button
* Open developer tools in the new window
```
ctrl + shift + I
```
* Enter "window.opener" in the console
