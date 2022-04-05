import { Router, Route, Link, Switch } from '../react-router';

import { Landing } from '../pages/Landing';
import { Home } from '../pages/Home';
import { Topics } from '../pages/Topics';
import { Profile } from '../pages/Profile';
import { Settings } from '../pages/Settings';
import { MainLayout } from '../components/Layouts/Layout';
import { Search } from '../pages/Search/Search';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <MainLayout>
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/topics" component={Topics} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/settings" component={Settings} />
      </MainLayout>
    </Switch>
  );
};
