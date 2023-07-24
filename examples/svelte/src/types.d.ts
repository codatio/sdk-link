declare module "https://link-sdk.codat.io" {
  export interface ConnectionCallbackArgs {
    connectionId: string;
  }

  export interface ErrorCallbackArgs {
    correlationId?: string;
    message?: string;
    errorCode?: number;
    userRecoverable: boolean;
  }

  export type CodatLinkProps = {
    companyId: string;
    onClose: () => void;
    onError: (args: ErrorCallbackArgs) => void;
    onFinish: () => void;
    onConnection: (args: ConnectionCallbackArgs) => void;
  };

  //   The error message you encountered, "A 'declare' modifier cannot be used in an already ambient context," typically occurs when you are attempting to use the declare keyword inside a module declaration (declare module ...) but the code is already in an ambient context (e.g., a module or a script that is already considered ambient).

  // In the example you provided, it seems like you are trying to declare a module for the "https://link-sdk.codat.io" library. However, since the module declaration itself is already considered ambient (outside the scope of the TypeScript module system), you don't need the declare keyword inside it.

  // To fix the error, you can remove the declare keyword from the class declaration:
  export class CodatLink {
    constructor(args: { target: HTMLElement; props: CodatLinkProps });
  }
}
