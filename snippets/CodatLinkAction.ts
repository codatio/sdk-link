export const CodatLinkAction = (
  node: HTMLElement,
  { companyId, onConnection, onClose, onFinish, onError }
) => {
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
