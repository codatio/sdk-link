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
            alert(`On connection callback - ${connection.connectionId}`),
          onClose: () => setAppOpen(false),
          onFinish: () => alert("On finish callback"),
          onError: (error) => alert(`On error callback -${error.message}`),
        },
      });
    }
  }, [componentMount, companyId]);

  return (
    <div className="App">
      <header>
        <h1>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/codatio/sdk-link/tree/main/examples/react/README.md"
          >
            Link SDK X Create React App
          </a>
        </h1>
        <p>
          An example of embedding Link SDK within a brand new create-react-app
          project
        </p>
      </header>

      <div>
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
        <div className="input-wrapper">
          <input
            value={companyId}
            placeholder="Provide a valid company ID"
            onChange={(e) => {
              setCompanyId(e.target.value);
            }}
          />
          <button onClick={() => setAppOpen(!appOpen)}>
            {appOpen ? "Exit" : "Start authing"}
          </button>
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      {appOpen && 
        <div className="modal-wrapper">
          <div className="modal" ref={setComponentMount}></div>
        </div>
      }
    </div>
  );
}

export default App;
