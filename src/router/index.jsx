import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// layouts
import DefaultLayout from '@/components/Layouts/DefaultLayout';

// components
const Index = React.lazy(() => import('@/pages/Index'));
const About = React.lazy(() => import('@/pages/About/About'));

// fallback component
import Spinner from '@/components/Spinner/Spinner';

export default function RouteWithLayout() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <DefaultLayout component={<Index />} />
          </Route>
          <Route path='/about' exact>
            <DefaultLayout component={<About />} />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}
