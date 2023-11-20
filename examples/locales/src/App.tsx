import { useState } from "react";

import { ConnectionCallbackArgs, ErrorCallbackArgs, CodatTextOptions } from "@codat/sdk-link-types";

import { CodatLink } from "./components/CodatLink";

import logo from "./logo.svg";
import "./App.css";

type localeType = {
  default: CodatTextOptions;
  fr: CodatTextOptions;
  es: CodatTextOptions;
}

const locales: localeType = {
  default: {
    "companyName": "Link SDK example",
    "landing.title": "Share your financial information",
    "landing.subtitle": "In order to complete your application, you will be required to connect to your accounting software (such as Xero, QuickBooks, Sage, etc.) and upload copies of your bank statements and other supporting documents.<br/><br/>Please speak to your account manager for more information.",
    "main.title": "Share your financial information",
    "main.subtitle": "To proceed with your application, please complete the following steps",
    "accounting.fileUpload.subtitle": "You can upload requested PDFs, Excel files, or CSVs below.",
    "banking.fileUpload.subtitle": "You can upload requested PDFs, Excel files, or CSVs below.",
    "businessDocuments.fileUpload.subtitle": "You can upload requested PDFs, Excel files, or CSVs below.",
    "accounting.dataAccess.consent": "By continuing you are permitting access account information. Please refer to the [Terms and Conditions and Privacy Policy](https://docs.codat.io/).",
    "banking.dataAccess.consent": "By continuing you are permitting access account information. Please refer to the [Terms and Conditions and Privacy Policy](https://docs.codat.io/).",
    "commerce.dataAccess.consent": "By continuing you are permitting access account information. Please refer to the [Terms and Conditions and Privacy Policy](https://docs.codat.io/).",
  },
  fr: {
    "companyName": "Link SDK example",
    "landing.title": "Partagez vos informations financières",
    "landing.subtitle": "Afin de compléter votre requête, vous devrez vous connecter à votre logiciel de comptabilité (tel que Xero, QuickBooks, Sage, etc.) et télécharger des copies de vos relevés bancaires et autres pièces justificatives.<br/><br/>Veuillez contacter votre comptable pour plus d'informations.",
    "main.title": "Partagez vos informations financières",
    "main.subtitle": "Pour poursuivre votre requête, veuillez suivre les étapes suivantes",
    "accounting.fileUpload.subtitle": "Vous pouvez télécharger les fichiers PDF, Excel ou CSV demandés ci-dessous.",
    "banking.fileUpload.subtitle": "Vous pouvez télécharger les fichiers PDF, Excel ou CSV demandés ci-dessous.",
    "businessDocuments.fileUpload.subtitle": "Vous pouvez télécharger les fichiers PDF, Excel ou CSV demandés ci-dessous.",
    "accounting.dataAccess.consent": "En continuant, vous autorisez l'accès aux informations du compte. Veuillez vous référer aux [Conditions générales et politique de confidentialité](https://docs.codat.io/).",
    "banking.dataAccess.consent": "En continuant, vous autorisez l'accès aux informations du compte. Veuillez vous référer aux [Conditions générales et politique de confidentialité](https://docs.codat.io/).",
    "commerce.dataAccess.consent": "En continuant, vous autorisez l'accès aux informations du compte. Veuillez vous référer aux [Conditions générales et politique de confidentialité](https://docs.codat.io/).",
  }
  es: {
    "companyName": "Link SDK example",
    "landing.title": "Comparte tu información financiera",
    "landing.subtitle": "Para completar su solicitud, se le pedirá que se conecte a su software de contabilidad (como Xero, QuickBooks, Sage, etc.) y cargue copias de sus extractos bancarios y otros documentos de respaldo.<br/><br/>Por favor hable con su administrador de cuentas para obtener más información.",
    "main.title": "Comparte tu información financiera",
    "main.subtitle": "Para continuar con su solicitud, complete los siguientes pasos",
    "accounting.fileUpload.subtitle": "Puede cargar los archivos PDF, archivos Excel o CSV solicitados a continuación.",
    "banking.fileUpload.subtitle": "Puede cargar los archivos PDF, archivos Excel o CSV solicitados a continuación.",
    "businessDocuments.fileUpload.subtitle": "Puede cargar los archivos PDF, archivos Excel o CSV solicitados a continuación.",
    "accounting.dataAccess.consent": "Al continuar, estás permitiendo el acceso a la información de la cuenta. Consulte los [Términos y condiciones y Política de privacidad](https://docs.codat.io/).",
    "banking.dataAccess.consent": "Al continuar, estás permitiendo el acceso a la información de la cuenta. Consulte los [Términos y condiciones y Política de privacidad](https://docs.codat.io/).",
    "commerce.dataAccess.consent": "Al continuar, estás permitiendo el acceso a la información de la cuenta. Consulte los [Términos y condiciones y Política de privacidad](https://docs.codat.io/).",
  },
}

function App() {
  const [companyId, setCompanyId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [locale, setLocale] = useState("default");

  const changeLocale = (event: any) => {
    setLocale(event.target.value);
  };

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
        <label>
          Select locale

          <select value={locale} onChange={changeLocale}>
            {
              Object.keys(locales).map(key => {
                return (
                  <option value={key}>{key}</option>
                )
              })
            }
          </select>
        </label>
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

      {modalOpen 
        && (
          <div className="modal-wrapper">
            <CodatLink
              companyId={companyId}
              onConnection={onConnection}
              onError={onError}
              onClose={onClose}
              onFinish={onFinish}
              options={{text: locales[locale as keyof localeType]}}
            />
          </div>
        )
      }
    </div>
  );
}

export default App;
