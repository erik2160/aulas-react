import "./App.css";
import { SimpleForm } from "./components/SimpleForm";

const User = {
  name: "Erik",
  idade: 18,
  profissao: "Programador"
}

const OtherUser = {
  name: "John",
  idade: 14,
  profissao: "Desenvolvedor"
}

function App() {
  return (
    <div>
      <SimpleForm />
    </div>
  );
}

export default App;