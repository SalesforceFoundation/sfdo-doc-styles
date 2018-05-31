# sfdo-doc-styles

This repo holds CSS styles for the Power of Us Hub Product Documentation Knowledge articles. The styles are also used externally during the preview and testing process before articles are published in the Hub.

# Development

Add new HTML that needs to be styled to the sample document in `build/index.html`. Do not place real sensitive information here as the document is shared publicly.

Do not write styles for elements that are not present in the sample doc.

```
$ yarn install
```

For local development a local server with file watching can be started:

```
$ yarn run start
```

[http://localhost:8080/](http://localhost:8080/) will open automatically.

Add new styles to the SASS source in `./src`.

Compile the new CSS with:

```
$ yarn run build
```

### Committing Changes

When you are ready to commit run `yarn run build` and commit the result. The compiled CSS is always committed as the CSS files are copied from the Github repo by external developers.
