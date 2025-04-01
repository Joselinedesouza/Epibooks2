import Alert from "react-bootstrap/Alert";

function AlertWelcome() {
  return (
    <Alert variant="success">
      <Alert.Heading>Welcome in Epibooks</Alert.Heading>
      <p>Troverai qui il libro dei tuoi incubi</p>
      <hr />

      <p className="mb-0 text-black">
        “Alcuni pensano che io sia una persona orribile, ma non è vero. Io ho il
        cuore di un bambino - in un barattolo sulla mia scrivania.” (Stephen
        King)
      </p>
    </Alert>
  );
}
export default AlertWelcome;
