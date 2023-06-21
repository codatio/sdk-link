# An example project of embedding Link SDK within a brand new create-react-app application

## Running this project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Company ID

You'll need to have created a company already.. (add details)

## Get started with React

For full instructions on getting started with React, see our [embedded link documentation](https://docs.codat.io/auth-flow/authorize-embedded-link).

1. **Create a component that mounts the SDK** - You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/snippets/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your React or TypeScript app
2. **Use this component** - We suggest wrapping the component in a modal (default dimensions 460px by 840px). The component can also take care of when to show the SDK, passing in the relevant company ID, etc.

  ```js
  // AuthFlow.tsx
  import {
    ErrorCallbackArgs,
  } from "https://link-sdk.codat.io";

  import CodatLink from './CodatLink';

  ...

  const AuthFlow = ({ companyId }: {companyId: Company["id"]}) => {
    return (
      <div>
        <p>Some content</p>
      
        <div className="modal">
          <CodatLink
            companyId={companyId}
            onConnection={(newConnection: { connectionId: Connection["id"] }) => {
              alert(`onConnection - ${newConnection.connectionId}`)
            }}
            onFinish={() => { alert('onFinish')}}
            onClose={() => { alert('onClose')}}
            onError={(error: ErrorCallbackArgs) => {
              alert(`onError - ${error}`);
            }}
          />
        </div>
      </div>
    );
  };
  
  export default AuthFlow
  ```
   
4. **Conditional steps**
   
  a. **Extend your type declarations with our types (if using TS)** - download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
  b. **Update browserslist** - If a `browserslist` entry exists in your `package.json` file, you may need to update it with the following entries for production:

   ```js
    "production": [
      ">0.2% and supports es6-module",
      "not dead",
      "not and_uc >= 0"
    ],
   ``` 
  c. **Update CSP headers** - If you're using content security policy (CSP) headers, you must edit the headers:
   * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
   * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
  
