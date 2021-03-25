import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, PaymentMain } from 'pages'

const CustomRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/payment">
                    <PaymentMain />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default CustomRoutes