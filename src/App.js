import "./App.css";
import EmailAddress from "./component/EmailAddress/EmailAddress";
import GeneralInfo from "./component/GeneralInfo/GeneralInfo";
import GovIdForm from "./component/GeneralInfo/GovIdForm";
import Mobile from "./component/Mobile/Mobile";

function App() {
  return (
    <div>
      App to register the user
      <GeneralInfo />
      <GovIdForm />
      <EmailAddress />
      <Mobile />
    </div>
  );
}

export default App;
