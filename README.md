This is a [nodejs initializer](https://docs.npmjs.com/cli/init) to quickly get a ClojureScript + shadow-cljs + Reagent project up and running in one command.

How to use it:

```
npm i shadowfront YOUR-APP-NAME
```

Then you can start the server:

```
cd YOUR-APP-NAME
make watch
```

Once shadow-cljs finishes compiling the project for the first time open these pages in your browser:

 * http://localhost:8000/ <- the running app
 * http://http://localhost:9630/ <- shadow-cljs debugging console

> (tip: use `(tap> ...)` in your code to have a value show up in the "inspect" pane.

Then open `src/YOUR-APP-NAME/core.cljs` in your editor and start hacking. 👍

Then you can commit your changes as `git init` has already been run:

```
git add .
git commit -m "Initial commit."
```

# Build

To make a static release that you can publish on a hosting service:

```
make build
```

This will copy everything in `public/` to the `build` folder and also build the main js artifact in there.
