import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/Pages/Top";
import { Users } from "../components/Pages/Users";
import { DefaultLayout } from "../components/templeates/DefaultLayout";
import { HeaderOnly } from "../components/templeates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
