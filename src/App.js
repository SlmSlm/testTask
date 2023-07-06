import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import UsersListContainer from "./Components/UsersList/UsersListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UsersListContainer />
    </div>
  );
}

export default App;
