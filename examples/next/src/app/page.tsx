"use client";

import Image from "next/image";
import styles from "./page.module.css";
import LinkSDKExample from "./components/LinkSDKExample";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
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
      </div>
      <LinkSDKExample />

      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
    </main>
  );
}
