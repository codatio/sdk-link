# An example project of embedding Link SDK within a brand new create-next-app application

## Running this project

Run the app in the development mode:

```npm run dev```

Open [http://localhost:3000](http://localhost:3000).

## Company ID

You will need to create a company and paste its ID to render the auth flow.

See <a href="https://github.com/codatio/sdk-link/tree/main#create-a-new-company" target="_blank">readme guide</a> on creating a new company.

## Get started with Next.js

For full instructions on getting started with Next.js, see our [embedded link documentation](https://docs.codat.io/auth-flow/authorize-embedded-link).

1. **Create a component that mounts the SDK** - you can copy and paste the example <a href="./src/app/components/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your Next.js app.

2. **Conditional steps**
   
    - **Extend your type declarations with our types** - If you are using TypeScript, download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
    
    - **Update browserslist** - If a `browserslist` entry exists in your `package.json` file, you may need to update it with the following entries for production:

      ```js
      "production": [
        ">0.2% and supports es6-module",
        "not dead",
        "not and_uc >= 0"
      ],
      ```

    - **Update CSP headers** - If you're using content security policy (CSP) headers, you must edit the headers:

      - Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
      - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.
