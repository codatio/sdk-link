# An example project of embedding Link SDK within a brand new Svelte application

## Running this project

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Company ID
You need to have created a company first. 

See <a href="https://github.com/codatio/sdk-link/tree/main#create-a-new-company" target="_blank">readme guide</a> on creating a new company.

## Get started with Svelte

For full instructions on getting started with Svelte, see our [embedded link documentation](https://docs.codat.io/auth-flow/authorize-embedded-link).

1. **Create a component that mounts the SDK** - you can copy and paste the example <a href="./src/lib/CodatLink.Svelte" target="_blank">`CodatLink.Svelte`</a> file to an appropriate location in your Svelte app.

2. **Conditional steps**
   
    - **Extend your type declarations with our types** - If you are using TypeScript, download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
    
    - **Update CSP headers** - If you're using content security policy (CSP) headers, you must edit the headers:

      - Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
      - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.
