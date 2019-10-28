import {FuseLoadable} from '@fuse';
import {authRoles} from 'app/auth'
export const CreateCompanyAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth:authRoles.superAdmin,
    routes  : [
        {
            path     : '/apps/CreateCompany',
            component: FuseLoadable({
                loader: () => import('./CreateCompany')
            })
        }
    ]
};
