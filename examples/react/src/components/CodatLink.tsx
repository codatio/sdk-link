import {
  CodatLink as AuthFlow,
  ConnectionCallbackArgs,
  ErrorCallbackArgs,
} from "https://link-sdk.codat.io";
import React, { useEffect, useState } from "react";

export interface CodatLinkProps {
  companyId: string;
  onConnection: (args: ConnectionCallbackArgs) => void;
  onError: (args: ErrorCallbackArgs) => void;
  onClose: () => void;
  onFinish: () => void;
}

export const CodatLink: React.FC<CodatLinkProps> = (props) => {
  const { companyId, onConnection, onError, onClose, onFinish } = props;

  const [componentMount, setComponentMount] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const target = componentMount;
    if (target && target.children.length === 0) {
      new AuthFlow({
        target,
        props: {
          companyId,
          onConnection,
          onClose,
          onFinish,
          onError,
        },
      });
    }
    // CodatLink does not support changing props after initialisation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentMount]);

  return (
    <div
      style={{
        // Recommended dimensions
        width: "460px",
        height: "840px",
        maxHeight: "95%",
      }}
      ref={setComponentMount}
    ></div>
  );
};
