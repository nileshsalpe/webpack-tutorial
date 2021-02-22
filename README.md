# webpack-tutorial

## Goals
- How to use webpack 5.
- How to include JavaScripts, CSS, Images using webpack plugins.
- Use babel to transpile the code.

## How to run the application?
- Start the docker container
    ```
    make docker-run
    ```
    Or

    ```
    docker run -p 8080:8080 --rm -d salpe/webpack-tutorial
    ```
- Go to `http://localhost:8080/`
You can see the font-end application.
It is a simple application that makes use of
    - Javascript ES6
    - Node.js 15
    - npm
    - webpack 5
    - babel to trasnpile to ES5
    - HTML

It generates list of random persons with a name, age, and image.

![](https://github.com/nileshsalpe/webpack-tutorial/blob/main/docs/images/sample-ui.png)
