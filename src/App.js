import "./App.css";
import Header from "./Components/Header/Header";
import SliderImages from "./Components/SliderImages";
import CardSlider from "./Components/CardSlider";
import Premiere from "./Components/Premiere";
import Footer from "./Components/Footer";
import AllMoviesFetch from "./Components/AllMoviesFetch";
import SingleMovieFetch from "./Components/SingleMovieFetch";
import Registration from "./Components/Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <SliderImages />
            <CardSlider />
            <Premiere />
          </Route>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
