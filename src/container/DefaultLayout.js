import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// app default layout
import RctAppLayout from "Components/RctAppLayout";

// router service
import routeService from "../services/_routerService";

class DefaultLayout extends Component {
    render() {
        const { match } = this.props;
        return (
            <RctAppLayout>
                { routeService && routeService.map((route, key) =>
                    <Route key={ key } path={ `${ match.url }/${ route.path }` } component={ route.component } />
                ) }
            </RctAppLayout>
        );
    }
};

export default withRouter(connect(null)(DefaultLayout));