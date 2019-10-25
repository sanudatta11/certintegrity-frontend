import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';

import {pagesConfigs} from 'app/main/pages/pagesConfigs';


import {ComponentsConfig} from 'app/main/components/ComponentsConfig';

import {LoginConfig} from 'app/main/login/LoginConfig';
import {RegisterConfig} from 'app/main/register/RegisterConfig';
import {LogoutConfig} from 'app/main/logout/LogoutConfig';
import {CallbackConfig} from 'app/main/callback/CallbackConfig';

const routeConfigs = [
   
    ...pagesConfigs,

    ComponentsConfig,
   
    
    LoginConfig,
    RegisterConfig,
    LogoutConfig,
    CallbackConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        exact    : true,
        component: () => <Redirect to="/apps/dashboards/analytics"/>
    },
    {
        component: () => <Redirect to="/pages/errors/error-404"/>
    }
];

export default routes;
