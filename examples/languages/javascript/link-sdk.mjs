import { CodatLink } from "https://link-sdk.codat.io";

let companyId = "";
const linkSdkTarget = document.getElementById("target");
const submitButton = document.getElementById("modal-button");
const companyIdInput = document.getElementById("company-id-input");

const closeCallback = () => {
  linkSdkTarget.style.pointerEvents = "none";
  linkSdkTarget.removeChild(linkSdkTarget.children[0]);
};

const onClose = () => closeCallback();
const onConnection = (connection) =>
  alert(`On connection callback  = ${connection.connectionId}`);
const onFinish = () => alert("On finish callback");
const onError = (error) => alert(`On error callback : ${error.message}`);

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
