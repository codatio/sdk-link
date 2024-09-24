import { useState } from "react";

import { ConnectionCallbackArgs, ErrorCallbackArgs } from "@codat/sdk-link-types";

import { CodatLink } from "./components/CodatLink";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [companyId, setCompanyId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const onConnection = (connection: ConnectionCallbackArgs) => {
    // Perform any logic here that should happen when a connection is linked
    console.log(`New connection linked with ID: ${connection.connectionId}`);
  }
  const onClose = () => setModalOpen(false);
  const onFinish = () => {
    onClose();
    setIsFinished(true);
  }
  const onError = (error: ErrorCallbackArgs) => {
    // this error should be logged in your error tracking service
    console.error(`Codat Link SDK error`, error);
    if (!error.userRecoverable) {
      onClose();
    }
  }


  return (
    <div className="split-view">
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
            <button onClick={() => {
              setIsFinished(false);
              setModalOpen(!modalOpen);
            }}>
              {modalOpen ? "Exit" : "Start authing"}
            </button>
          </div>
        </div>
      </div>

      <div className="auth-flow-wrapper">
        {modalOpen 
          ? (
            <div className="link-wrapper">
              <CodatLink
                companyId={companyId}
                onConnection={onConnection}
                onError={onError}
                onClose={onClose}
                onFinish={onFinish}
                options={{
                  nonModal: true,
                  showSandboxIntegrations: process.env.NODE_ENV === 'development',
                }}
              />
            </div>
          )
          : <div className="fallback-wrapper">
            <img src={logo} className="App-logo" alt="logo" />
            {isFinished? <p>Thank you for sharing your data</p> :<p>Enter a company ID</p>}
          </div>
        }
      </div>
    </div>
  );
}

export default App;
