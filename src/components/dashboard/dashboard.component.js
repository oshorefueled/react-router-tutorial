/**
 * Created by osho on 10/19/17.
 */
import React, {Component} from 'react';
import DashboardRouter from './dashboard.route';
import {NavLink} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div className="main">
                <h4>React Router - Report App</h4>
                <nav>
                   <NavLink className="main-anchor" to="/orders">Orders</NavLink>
                   <NavLink className="main-anchor" to="transactions">Transactions</NavLink>
                </nav>
                <div>
                    <DashboardRouter/>
                </div>
            </div>
        );
    }
}

export default Dashboard;