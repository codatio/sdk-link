import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./LinkSDKExample.module.css";

const CodatLink = dynamic(() =>
  import("./CodatLink").then((mod) => mod.CodatLinkComponent)
);

const LinkSDKExample = () => {
  const [companyId, setCompanyId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.inputWrapper}>
      <input
        value={companyId}
        placeholder="Provide a valid company ID"
        onChange={(e) => {
          setCompanyId(e.target.value);
        }}
      />
      <button onClick={() => setModalOpen(!modalOpen)}>
        {modalOpen ? "Exit" : "Start authing"}
      </button>
      {modalOpen && (
        <div className={styles.modalWrapper}>
          <CodatLink
            companyId={companyId}
            onConnection={(connection) =>
              alert(`On connection callback - ${connection.connectionId}`)
            }
            onClose={() => setModalOpen(false)}
            onFinish={() => alert("On finish callback")}
            onError={(error) => alert(`On error callback -${error.message}`)}
          />
        </div>
      )}
    </div>
  );
};

export default LinkSDKExample;
