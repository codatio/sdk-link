import { CodatLink } from "https://link-sdk.codat.io";

const target = document.querySelector("#target");
new CodatLink({
  target,
  props: {
    companyId: "",
    onConnection: (connection) =>
      alert(`On connection callback : ${connection.connectionId}`),
    onClose: () => alert("On close callback"),
    onFinish: () => alert("On finish callback"),
    onError: (error) => alert(`On error callback : ${error.message}`),
  },
});
