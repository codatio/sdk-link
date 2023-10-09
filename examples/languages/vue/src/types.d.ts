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

  export type CodatLinkOptions = {
    nonModal?: boolean;
  }

  export type CodatLinkProps = {
    companyId: string;
    onClose: () => void;
    onError: (args: ErrorCallbackArgs) => void;
    onFinish: () => void;
    onConnection: (args: ConnectionCallbackArgs) => void;
    options?: CodatLinkOptions;
  };

  export class CodatLink {
    constructor(args: { target: HTMLElement; props: CodatLinkProps });
  }
}
