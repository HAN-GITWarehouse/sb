export default [
  
  {
    path: '/analysis',
    name: 'analysis',
    icon: 'AreaChartOutlined',
    flatMenu:true,
    routes: [
      {
        path: 'meter',
        name: 'meter',
        icon: 'AreaChartOutlined',
        component: './analysis/meter',
      },
      {
        component: './404',
      },
    ]
  },
  {
    path: '/user',
    name:'user',
    layout: false,
    hideInMenu:true,
    routes: [
      {
        path: '/user',
        hideInMenu:true,
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/learnManage',
    name: 'learnManage',
    icon: 'BarsOutlined',
     routes: [
      {
        path: './statistics',
        name: 'statistics',
        icon: 'BarsOutlined',
        component: './learnManage/statistics',
      },
      {
        path: './detail',
        name: 'detail',
        component: './learnManage/detail',
        hideInMenu: true,
      },
      {
        path: './progress',
        name: 'progress',
        component: './learnManage/progress',
      },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    hideInMenu: true,
    routes: [
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/analysis/meter',
  },
  {
    path: '*',
    component: './404',
  }
]
