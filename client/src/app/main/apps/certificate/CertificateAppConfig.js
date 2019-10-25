import {FuseLoadable} from '@fuse';

export const CertificateAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/certificate',
            component: FuseLoadable({
                loader: () => import('./CertificateApp')
            })
        }
    ]
};
