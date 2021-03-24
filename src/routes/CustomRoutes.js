import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Payment } from 'pages';
import { Home } from 'pages'

const CustomRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default CustomRoutes