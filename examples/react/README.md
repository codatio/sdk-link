# An example project of embedding Link SDK within a brand new create-react-app application

## Running this project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Company ID
You need to have created a company first. 

See <a href="https://github.com/codatio/sdk-link/tree/main#create-a-new-company" target="_blank">readme guide</a> on creating a new company.

## Get started with React

For full instructions on getting started with React, see our [embedded link documentation](https://docs.codat.io/auth-flow/authorize-embedded-link).

1. **Create a component that mounts the SDK** - you can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/snippets/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your React or TypeScript app.
2.  **Conditional steps**
    1. **Extend your type declarations with our types (if using TS)** - download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.

    2. **Update browserslist** - If a `browserslist` entry exists in your `package.json` file, you may need to update it with the following entries for production:
        ```js
          "production": [
            ">0.2% and supports es6-module",
            "not dead",
            "not and_uc >= 0"
          ],
        ```
        
    3. **Update CSP headers** - If you're using content security policy (CSP) headers, you must edit the headers:
    * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
    * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
    
