import Loadble from 'react-loadable'
import Loading from '@/views/Loading'

// Loading 中有封装进度条动画
const HomeBoard = Loadble({loader: () => import('@/views/HomeBoard'), loading: Loading})
const SystemMessage = Loadble({loader: () => import('@/views/SystemMessage'), loading: Loading})
const ArticleList = Loadble({loader: () => import('@/views/Article/ArticleList'), loading: Loading})
const ArticlePublish = Loadble({loader: () => import('@/views/Article/ArticlePublish'), loading: Loading})
const ArticleEdit = Loadble({loader: () => import('@/views/Article/ArticleEdit'), loading: Loading})
const WordChart = Loadble({loader: () => import('@/views/Chart/WordChart'), loading: Loading})
const OutPutExcel = Loadble({loader: () => import('@/views/Excel/OutPutExcel'), loading: Loading})
const UploadExcel = Loadble({loader: () => import('@/views/Excel/UploadExcel'), loading: Loading})
const Guide = Loadble({loader: () => import('@/views/Guide'), loading: Loading})  

// 路由表
const  routes = [
  {
    path: "/",
    component: HomeBoard,
    name: '首页'
  },
  {
    path: "/message",
    component: SystemMessage
  },
  {
    path: "/articlelist",
    component: ArticleList
  },
  {
    path: "/articlePublish",
    component: ArticlePublish
  },
  {
    path: "/articleEdit/:_id",
    component: ArticleEdit
  },
  {
    path: "/wordChart",
    component: WordChart
  },
  {
    path: '/Excel/uploadExcel',
    component: UploadExcel
  },
  {
    path: '/Excel/outPutExcel',
    component: OutPutExcel
  },
  {
    path: '/guide',
    component: Guide
  }
]



// 导出方法，供遍历使用路由
function generateRouteConfig (route) {
      return route.map(item => {
        return {
            key: item.path,
            exact: typeof item.exact === 'undefined' ? true : item.exact,
            ...item,
            component: item.component,
            name: item.name
        }
      })
}
export default generateRouteConfig(routes);