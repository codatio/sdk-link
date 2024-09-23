import { CodatLink } from "https://link-sdk.codat.io";

let companyId = "";
const linkSdkTarget = document.getElementById("target");
const submitButton = document.getElementById("modal-button");
const companyIdInput = document.getElementById("company-id-input");
const linkingInstructions = document.getElementById("linking-instructions");
const linkCompleted = document.getElementById("link-completed");
const connectAgainButton = document.getElementById("connect-again");

const toggleLinkCompletedDiv = (linkFinished) => {
  linkingInstructions.style.display = linkFinished ? "none" : "block";
  linkCompleted.style.display = linkFinished ? "block" : "none";
};

const closeCallback = () => {
  linkSdkTarget.style.pointerEvents = "none";
  linkSdkTarget.removeChild(linkSdkTarget.children[0]);
};

const onClose = () => closeCallback();

const onConnection = (connection) => {
  // Perform any logic here that should happen when a connection is linked
  console.log(`New connection linked with ID: ${connection.connectionId}`);
};

const onFinish = () => {
  onClose();
  toggleLinkCompletedDiv(true);
};

const onError = (error) => (error) => {
  // this error should be logged in your error tracking service
  console.error(`Codat Link SDK error`, error);
  if (!error.userRecoverable) {
    onClose();
  }
};

const openModal = () => {
  linkSdkTarget.style.pointerEvents = "initial";
  new CodatLink({
    target: linkSdkTarget,
    props: {
      companyId,
      onConnection,
      onClose,
      onFinish,
      onError,
    },
  });
};

const handleTextInput = (e) => {
  companyId = e.target.value;
};

companyIdInput.addEventListener("change", handleTextInput);
submitButton.addEventListener("click", openModal);
connectAgainButton.addEventListener("click", () => toggleLinkCompletedDiv(false));
