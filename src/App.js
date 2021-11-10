// Packages
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Form from "./pages/form/Form";

// Styles
import * as S from "./App.styles";

function App() {
  return (
    <S.AppContainer>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </S.AppContainer>
  );
}

export default App;
