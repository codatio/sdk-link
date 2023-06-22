import { CodatLink } from "https://link-sdk.codat.io";

let companyId = "";
let isModalOpen = true;
let linkInitiated = false;

const linkSdkTarget = document.getElementById("target");
const submitButton = document.getElementById("modal-button");
const companyIdInput = document.getElementById("company-id-input");

const initiateLink = () => {
  linkInitiated = true;
  new CodatLink({
    target: linkSdkTarget,
    props: {
      companyId,
      onConnection: (connection) =>
        alert(`On connection callback : ${connection.connectionId}`),
      onClose: () => closeCallback(),
      onFinish: () => alert("On finish callback"),
      onError: (error) => alert(`On error callback : ${error.message}`),
    },
  });
};

const toggleButtonText = () =>
  (submitButton.innerText = isModalOpen ? "Exit" : "Start authing");

const toggleLinkSdkDisplay = () => {
  const display = isModalOpen ? "block" : "none";
  linkSdkTarget.style.display = display;
};

const handleTextInput = (e) => {
  companyId = e.target.value;
};

const openModal = () => {
  if (!linkInitiated) initiateLink();
  isModalOpen = true;
  toggleButtonText();
  toggleLinkSdkDisplay();
};

const closeCallback = () => {
  isModalOpen = false;
  toggleButtonText();
  toggleLinkSdkDisplay();
};

companyIdInput.addEventListener("change", handleTextInput);
submitButton.addEventListener("click", openModal);
