"use client";

import { CodatLink } from "./components/CodatLink";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [companyId, setCompanyId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <header>
        <h1 className={styles.mainHeader}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/codatio/sdk-link/tree/main/examples/next/README.md"
          >
            Link SDK X NextJS
          </a>
        </h1>
      </header>
      <div className={styles.content}>
        <p>
          An example of embedding Link SDK within a brand new create-next-app
          project
        </p>
        <ol>
          <li>
            <a
              href="https://github.com/codatio/sdk-link/tree/main#create-a-new-company"
              target="_blank"
              rel="noreferrer"
            >
              Create a company
            </a>
          </li>
          <li>
            <a>Paste the company ID below</a>
          </li>
        </ol>
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
        </div>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
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
    </main>
  );
}
