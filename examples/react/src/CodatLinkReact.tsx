import {
  CodatLink,
  ConnectionCallbackArgs,
  ErrorCallbackArgs,
} from "https://link-sdk.codat.io";
import React, { useEffect, useState } from "react";
import "./CodatLinkReact.css";

export interface CodatLinkProps {
  companyId: string;
  onConnection: (args: ConnectionCallbackArgs) => void;
  onError: (args: ErrorCallbackArgs) => void;
  onClose: () => void;
  onFinish: () => void;
}

export const CodatLinkReact: React.FC<CodatLinkProps> = (props) => {
  const { companyId, onConnection, onError, onClose, onFinish } = props;

  const [componentMount, setComponentMount] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const target = componentMount;
    if (target && target.children.length === 0) {
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
    }
    // CodatLink does not support changing props after initialisation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentMount]);

  return (
    <div
      className="modal"
      style={{
        // CodatLink will take up 100% of the container width and height.
        // We recommend a size of 460px x 840px.
        width: "460px",
        height: "840px",
      }}
      data-testId="test"
      ref={setComponentMount}
    ></div>
  );
};
