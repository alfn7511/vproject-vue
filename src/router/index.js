import Vue from 'vue'
import Router from 'vue-router'
import auth from '../auth'
import lazyLoading from './lazyLoading'

// Containers
import Full from '@/containers/Full'
import Process from '@/views/Process'
import Map from '@/views/Map'
import GridUI from '@/views/GridUI'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: function(){
    return { y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      beforeEnter: requireAuth,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: lazyLoading('Dashboard')
        },
        {
          path: 'service',
          redirect: '/service/service',
          name: 'Service',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            { path: 'service',
              name: 'Service 관리',
              component: lazyLoading('services/service', true)
            },
            {
              path: 'service/create',
              name: 'Service 등록',
              component: lazyLoading('services/service/ServiceCreate')
            },
            {
              path: 'service/:id',
              name: 'Service 상세',
              redirect: '/service/service/:id/default',
              //component: lazyLoading('services/service/ServiceDetail'),
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                { path: 'default',
                  title: '기본정보',
                  props: true,
                  component: lazyLoading('services/service/ServiceDefault')
                },
                { path: 'origin',
                  title: 'Origin',
                  props: true,
                  component: lazyLoading('services/service/ServiceOrigin')
                },
                { path: 'pop',
                  title: 'PoP',
                  props: true,
                  component: lazyLoading('services/service/ServicePop')
                },
                { path: 'ip',
                  title: 'IP Restriction',
                  props: true,
                  component: lazyLoading('services/service/ServiceIp')
                }
              ]
            },
            {
              path: 'bucket',
              name: 'Bucket 관리',
              component: lazyLoading('services/bucket', true)
            },{
              path: 'bucket/:id',
              name: 'Bucket 상세',
              props: true,
              component: lazyLoading('services/bucket/Detail')
            }
          ]
        },
        {
          path: 'configuration',
          redirect: '/configuration/edge',
          name: 'Configuration',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'edge',
              name: 'Edge 관리',
              component: lazyLoading('configuration/edge', true)
            },
            {
              path: 'edge/create',
              name: 'Edge 등록',
              component: lazyLoading('configuration/edge/Create')
            },
            {
              path: 'edge/:id',
              redirect: '/configuration/edge/:id/default',
              name: 'Edge 상세',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                { path: 'default',
                  title: '기본정보',
                  props: true,
                  component: lazyLoading('configuration/edge/EdgeDefault')
                },
                { path: 'core',
                  title: 'Core Config',
                  props: true,
                  component: lazyLoading('configuration/edge/EdgeCore')
                },
                { path: 'service',
                  title: 'Service',
                  props: true,
                  component: lazyLoading('configuration/edge/EdgeService')
                }
              ]
            },
            {
              path: 'cache',
              name: 'Cache Throttling 관리',
              component: lazyLoading('configuration/cache', true)
            },
            {
              path: 'cache/create',
              name: 'Cache Throttling 등록',
              component: lazyLoading('configuration/cache/Create')
            },
            {
              path: 'cache/:id',
              name: 'Cache Throttling 상세',
              props: true,
              component: lazyLoading('configuration/cache/Detail')
            },
            {
              path: 'referrer',
              name: 'Referrer 관리',
              component: lazyLoading('configuration/referrer', true)
            },
            {
              path: 'referrer/create',
              name: 'Referrer 등록',
              component: lazyLoading('configuration/referrer/Create')
            },
            {
              path: 'referrer/:id',
              name: 'Referrer 상세',
              props: true,
              component: lazyLoading('configuration/referrer/Detail')
            },
            { path: 'pop',
              name: 'Pop 관리',
              component: lazyLoading('configuration/pop', true)
            },
            {
              path: 'pop/create',
              name: 'Pop 등록',
              component: lazyLoading('configuration/pop/PopCreate')
            },
            {
              path: 'pop/:id',
              redirect: '/configuration/pop/:id/default',
              name: 'Pop 상세',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                { path: 'default',
                  title: '기본정보',
                  props: true,
                  component: lazyLoading('configuration/pop/PopDetail')
                },
                { path: 'edge',
                  title: 'L/R, Edge',
                  props: true,
                  component: lazyLoading('configuration/pop/PopEdge')
                }
              ]
            }
          ]
        },
        {
          path: 'policy',
          redirect: '/policy/onetime',
          name: 'Policy',
          component: {
            render (c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: 'onetime',
              name: 'One-Time URL',
              component: lazyLoading('policy/Onetime')
            },
            {
              path: 'popPreference',
              name: 'PoP Preference',
              component: lazyLoading('policy/PopPreference')
            },
            {
              path: 'gtmConfig',
              name: 'GTM Config',
              component: lazyLoading('policy/GTMconfig')
            },
            {
              path: 'geoIp',
              name: 'GEO IP',
              component: lazyLoading('policy/GEOip')
            },
            {
              path: 'ipRestriction',
              name: 'IP Restriction',
              component: lazyLoading('policy/IPRestriction')
            }
          ]
        },
        {
          path: 'workflow',
          redirect: '/workflow/service',
          name: 'Workflow',
          component: {
            render (c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: 'service',
              name: 'Service Processing 관리',
              component: lazyLoading('workflow/service', true)
            },
            {
              path: 'service/:id',
              name: 'Service Processing 상세',
              props: true,
              component: lazyLoading('workflow/service/Detail')
            },
            {
              path: 'domain',
              name: 'Domain Processing 관리',
              component: lazyLoading('workflow/domain', true)
            },
            {
              path: 'contPreload',
              name: 'Preload',
              component: lazyLoading('workflow/content/Preload')
            },
            {
              path: 'contPreload/:id',
              name: 'Preload 상세',
              props: true,
              component: lazyLoading('workflow/content/PreloadDetail')
            },
            {
              path: 'contPurge',
              name: 'Purge',
              component: lazyLoading('workflow/content/Purge')
            },
            {
              path: 'contPurge/:id',
              name: 'Purge 상세',
              props: true,
              component: lazyLoading('workflow/content/PurgeDetail')
            }
          ]
        },
        {
          path: 'process',
          name: 'Process',
          component: Process
        },
        {
          path: 'map',
          name: 'Map',
          component: Map
        },
        {
          path: 'gridUI',
          name: 'Grid UI',
          component: GridUI
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: lazyLoading('Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: lazyLoading('Register')
    },
    {
      path: '/404',
      name: 'Page404',
      component: lazyLoading('Page404')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
