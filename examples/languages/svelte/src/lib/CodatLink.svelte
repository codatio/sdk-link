<script lang="ts">
  import type {
    ConnectionCallbackArgs,
    ErrorCallbackArgs,
  } from "https://link-sdk.codat.io";

  export let companyId: string;
  export let onConnection: (connection: ConnectionCallbackArgs) => void;
  export let onClose: () => void;
  export let onFinish: () => void;
  export let onError: (error: ErrorCallbackArgs) => void;

  const CodatLinkAction = (node: HTMLElement) => {
    const target = node;
    import("https://link-sdk.codat.io").then(({ CodatLink }) => {
      new CodatLink({
        target,
        props: {
          companyId,
          onConnection,
          onClose,
          onFinish,
          onError,
        },
      });
    });
  };
</script>

<!-- Inline styles suggest recommended dimensions -->
<div style="width: 460px; height:840px;  maxHeight: 95%" use:CodatLinkAction />
