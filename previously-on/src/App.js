import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import GetToken from "./components/getToken.js";

function App() {

  return (

    <Router>
      <div>

        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/auth/get_token" exact element={<GetToken />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;