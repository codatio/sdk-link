import { CodatLink } from "https://link-sdk.codat.io";

const target = document.querySelector("#target");
const onConnection = (connection) =>
  alert(`On connection callback : ${connection.connectionId}`);
const onClose = () => alert("On close callback");
const onFinish = () => alert("On finish callback");
const onError = (error) => alert(`On error callback : ${error.message}`);

new CodatLink({
  target,
  props: {
    companyId: "",
    onConnection,
    onClose,
    onFinish,
    onError,
  },
});
