import { CodatLink } from "https://link-sdk.codat.io";
import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [companyId, setCompanyId] = useState("");
  const [appOpen, setAppOpen] = useState(false);
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
          onConnection: (connection) =>
            alert(`On connection callback - ${connection}`),
          onClose: () => setAppOpen(false),
          onFinish: () => alert("On finish callback!!"),
          onError: (error) => alert(`On error callback -${error}`),
          baseUrl: "https://link-api.codat.io",
        },
      });
    }
  }, [componentMount, companyId]);

  return (
    <div className="App">
      <h1>
        <a
          className="App-link"
          target="_blank"
          href="https://github.com/codatio/codat-docs/blob/embedded-link-enhancements/docs/auth-flow/authorize-embedded-link.md#get-started-with-react"
        >
          Link SDK X Create React App
        </a>
      </h1>
      <div className="link-wrapper">
        <ol>
          <li>
            <a className="App-link" href="#" target="_blank">
              Create a company
            </a>
          </li>
          <li>
            <a>Paste the company ID below</a>
          </li>
        </ol>
        <div className="input-wrapper">
          <input
            value={companyId}
            data-testid="company-id-input"
            onChange={(e) => {
              setCompanyId(e.target.value);
            }}
          />
          <button onClick={() => setAppOpen(!appOpen)}>
            {appOpen ? "Close" : "Open"}
          </button>
          <div>
            {appOpen && (
              <div className="link-sdk-modal" ref={setComponentMount}></div>
            )}
          </div>
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
