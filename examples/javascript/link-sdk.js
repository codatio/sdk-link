import { CodatLink } from "https://link-sdk.codat.io";

const companyId = "256bcf4d-ded8-47fa-8177-67263bbd7b12";

const target = document.querySelector("#target");
new CodatLink({
  target,
  props: {
    companyId,
    onConnection: (connection) =>
      alert(`On connection callback :
             ${connection.connectionId}`),
    onClose: () => setAppOpen(false),
    onFinish: () => alert("On finish callback"),
    onError: (error) =>
      alert(`On error callback :
            ${error.message}`),
  },
});
