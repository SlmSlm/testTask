import "./App.scss";

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SignUp from "./Components/SignUp/SignUp";
import UsersListContainer from "./Components/UsersList/UsersListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UsersListContainer />
      <SignUp />
    </div>
  );
}

export default App;
