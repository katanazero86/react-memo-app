import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// layouts
import DefaultLayout from '@/components/Layouts/DefaultLayout';

// components
import Index from '@/pages/Index';

export default function RouteWithLayout() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <DefaultLayout component={Index}/>
                </Route>
            </Switch>
        </Router>
    )
}
