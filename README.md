# Todo Angular Elements (Web Components) Demo for GDG Devfest Rift Valley 2019

This is a demo for Angular Elements for a talk I gave at Devfest Rift Valley 2019.  The talk title was **Rich Web Components Using Angular Elements**.

## Building this Demo

```shell

ng build --prod

```

You can skip the `--output-hashing` flag as I have set it permanently to none inside `angular.json`.

After building is complete, you can use Node to run the `concat.js` script which combines the build artifacts into a single JS Script essay to use with your index.html.

```shell

node concat.js

```

> I will share more scripts for achieving the same, from different scripting languages such as bash.

If you use the `concat.js` to concat the files, the three final artifacts will be put inside the `output` dir at root of this project.

## Using the Web Components

You can then use the web components as follows inside any HTML.

First, Import the the three build artifacts into you HTML File.

  Inside Header, Import the CSS:

  ```html
  <head>>
    <link rel="stylesheet" href="./styles.css">
  </head>
  ```

  And then, inside the body, just next to the body closing tags import the JS:

  ```html
  <script src="./ng-es5.js" nomodule></script> <!-- ES5 Import -->
  <script src="./ng-es2015.js" type="module"></script> <!-- ES2015 Import (Smaller Bundle) -->
  ```

And then, you can use the Web Components:

  To add todos:

  ```html
     <add-todo placeholder="Buy Bread, ..."></add-todo>
  ```

  To List Todos:

  ```html
  <list-todos></list-todos>
  ```
