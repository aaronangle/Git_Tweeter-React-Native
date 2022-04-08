import { Route, Switch } from '../react-router';

import { Landing } from '../pages/Landing';
import { Home } from '../pages/Home';
import { Topics } from '../pages/Topics';
import { Profile } from '../pages/Profile';
import { Search } from '../pages/Search';
import { MainLayout } from '../components/Layouts/Layout';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <MainLayout>
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/topics" component={Topics} />
        <Route path="/profile/:username" component={Profile} />
      </MainLayout>
    </Switch>
  );
};
