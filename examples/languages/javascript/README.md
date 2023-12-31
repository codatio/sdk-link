# An example project of embedding Link SDK within a brand new HTML, CSS and JavaScript application

## Company ID
You need to have created a company first. See <a href="https://github.com/codatio/sdk-link/tree/main#create-a-new-company" target="_blank">readme guide</a> on creating a new company.

## Get started with Vanilla JS

1. **Set up a target element** - `<div id="target" />` inside html file or via the following Javascript code snippet:

   ```
   const linkSDK = document.createElement('div');
   linkSDK.id = 'target';
   document.body.appendChild(linkSDK);
   ``` 

   We suggest to set the target div for LinkSDK to have `width: 460px` and `height: 840px`.
2.  **Consume LinkSDK within `type="module"` script** - you can copy the contents from the example <a href="https://github.com/codatio/sdk-link/blob/main/snippets/CodatLink.mjs" target="_blank">`CodatLink.mjs`</a> file to an appropriate location in your application. Make sure you provide a valid target element for LinkSDK, valid companyId, and set up callbacks.
3. **If using TypeScript - extend your type declarations with our types** - download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
4. If you are using content security policy (CSP) headers, you must edit the headers:
      * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
      * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
  

### `Starting the project`

1. Install with NPM `npm install`.
2. Run `npm run start`.

