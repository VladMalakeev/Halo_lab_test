import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CardsContainer } from "./modules/cards/cards_components/cards.container";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardsContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
