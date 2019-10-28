
import {authRoles} from 'app/auth';

const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'      : 'dashboards',
                'title'   : 'Dashboards',
                'type'    : 'collapse',
                'icon'    : 'dashboard',
                'children': [
                    {
                        'id'   : 'analytics-dashboard',
                        'title': 'Analytics',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/analytics'
                    },
                    {
                        'id'   : 'project-dashboard',
                        'title': 'Project',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/project'
                    }
                ]
            },
          {
              'id':'certificate',
              'title':'Certificate',
              'type':'item',
              auth:authRoles.creator,
              'icon':'verified_user',
              'url':'/apps/certificate'
          },
          {
              'id':'CreateCompany',
              'title':'CreateCompany',
              auth:authRoles.superAdmin,
              'type':'item',
              'icon':'filter_vintage',
              'url':'/apps/createCompany'
          }
            ]
    },
    {
        'id'      : 'pages',
        'title'   : 'Pages',
        'type'    : 'group',
        'icon'    : 'pages',
        'children': [
            {
                'id'      : 'authentication',
                'title'   : 'Authentication',
                'type'    : 'collapse',
                'icon'    : 'lock',
                'badge'   : {
                    'title': 4,
                    'bg'   : '#525e8a',
                    'fg'   : '#FFFFFF'
                },
                'children': [
                  
                    {
                        'id'   : 'login-v2',
                        'title': 'Login v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/login-2'
                    },
                  
                    {
                        'id'   : 'authentication-register-v2',
                        'title': 'Register v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/register-2'
                    },
                 
                    {
                        'id'   : 'authentication-forgot-password-v2',
                        'title': 'Forgot Password v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/forgot-password-2'
                    },
                  
                    {
                        'id'   : 'authentication-reset-password-v2',
                        'title': 'Reset Password v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/reset-password-2'
                    },
                 
                   
                ]
            },
        
            
           
           
           
        ]
    },
    
    
    
    
    {
        'type': 'divider',
        'id'  : 'divider-2'
    },
    {
        'id'      : 'test-group-level-1',
        'title'   : 'Test Group Level 1',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'test-item',
                'title': 'Test Item',
                'type' : 'item',
                'icon' : 'list',
                'url'  : '#'
            },
            {
                'id'    : 'test-link',
                'title' : 'Test Link',
                'type'  : 'link',
                'icon'  : 'link',
                'url'   : 'http://fusetheme.com',
                'target': '_blank'
            },
            {
                'id'      : 'test-collapse-level-1',
                'title'   : 'Test Collapse Level 1',
                'type'    : 'collapse',
                'icon'    : 'dashboard',
                'children': [
                    {
                        'id'   : 'test-item-level-1',
                        'title': 'Test Item Level 1',
                        'type' : 'item',
                        'url'  : '#'
                    },
                    {
                        'id'    : 'test-link-level-1',
                        'title' : 'Test Link Level 1',
                        'type'  : 'link',
                        'url'   : 'http://fusetheme.com',
                        'target': '_blank'
                    },
                    {
                        'id'      : 'test-collapse-2',
                        'title'   : 'Test Collapse Level 2',
                        'type'    : 'collapse',
                        'children': [
                            {
                                'id'   : 'test-item-level-2',
                                'title': 'Test Item Level 2',
                                'type' : 'item',
                                'url'  : '#'
                            },
                            {
                                'id'    : 'test-link-level-2',
                                'title' : 'Test Link Level 2',
                                'type'  : 'link',
                                'url'   : 'http://fusetheme.com',
                                'target': '_blank'
                            },
                            {
                                'id'      : 'test-collapse-level-3',
                                'title'   : 'Test Collapse Level 3',
                                'type'    : 'collapse',
                                'children': [
                                    {
                                        'id'   : 'test-item-level-3',
                                        'title': 'Test Item Level 3',
                                        'type' : 'item',
                                        'url'  : '#'
                                    },
                                    {
                                        'id'    : 'test-link-level-3',
                                        'title' : 'Test Link Level 3',
                                        'type'  : 'link',
                                        'url'   : 'http://fusetheme.com',
                                        'target': '_blank'
                                    },
                                    {
                                        'id'      : 'test-collapse-level-4',
                                        'title'   : 'Test Collapse Level 4',
                                        'type'    : 'collapse',
                                        'children': [
                                            {
                                                'id'   : 'test-item-level-4',
                                                'title': 'Test Item Level 4',
                                                'type' : 'item',
                                                'url'  : '#'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'id'      : 'test-group-level-2',
                        'title'   : 'Test Group Level 2',
                        'type'    : 'group',
                        'icon'    : 'apps',
                        'children': [
                            {
                                'id'      : 'test-collapse-level-2-2',
                                'title'   : 'Test Collapse Level 2',
                                'type'    : 'collapse',
                                'children': [
                                    {
                                        'id'   : 'test-item-level-2-2',
                                        'title': 'Test Item Level 2',
                                        'type' : 'item',
                                        'url'  : '#'
                                    },
                                    {
                                        'id'    : 'test-link-level-2-2',
                                        'title' : 'Test Link Level 2',
                                        'type'  : 'link',
                                        'url'   : 'http://fusetheme.com',
                                        'target': '_blank'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export default navigationConfig;
