import React, { useEffect, useState } from "react";

import { CodatLinkProps, initializeCodatLink } from "@codat/sdk-link-types";

import "./CodatLink.css";

export const CodatLink: React.FC<CodatLinkProps> = (props: CodatLinkProps) => {
  const [componentMount, setComponentMount] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const target = componentMount;
    if (target && target.children.length === 0) {
      initializeCodatLink(target, props);
    }
    // CodatLink does not support changing props after initialisation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentMount]);

  return (
    <div className="modal-wrapper">
      <div className="modal" ref={setComponentMount}/>
    </div>
  );
};
