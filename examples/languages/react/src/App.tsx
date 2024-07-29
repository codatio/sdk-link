import {
  ConnectionCallbackArgs,
  ErrorCallbackArgs,
} from "@codat/sdk-link-types";
import { useState } from "react";
import { CodatLink } from "./components/CodatLink";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [companyId, setCompanyId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onConnection = (connection: ConnectionCallbackArgs) =>
    alert(`On connection callback - ${connection.connectionId}`);
  const onClose = () => setModalOpen(false);
  const onFinish = () => alert("On finish callback");
  const onError = (error: ErrorCallbackArgs) =>
    alert(`On error callback - ${error.message}`);

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
          <button onClick={() => setModalOpen(!modalOpen)}>
            {modalOpen ? "Exit" : "Start authing"}
          </button>
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      {modalOpen && (
        <CodatLink
          companyId={companyId}
          onConnection={onConnection}
          onError={onError}
          onClose={onClose}
          onFinish={onFinish}
        />
      )}
    </div>
  );
}

export default App;
