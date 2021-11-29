// 抽离侧边栏文件内容，使用动态加载  
//  title 为名字， path 为路由路径， icon为图标名
const MenuList = [
    {
      title: '首页',
      path: '/',
      icon: 'home'
    },
    {
      title: '系统信息',
      path: '/message',
      icon: 'computer_fill'
    },
    {
      title: '指导页',
      path: '/guide',
      icon: 'zhinanzhidao'
    },
    {
      title: '文章管理',
      icon: 'svgwrite',
      children: [
        {
          title: '文章列表',
          path: '/articlelist'
        },
        {
          title: '文章发布',
          path: '/articlePublish'
        }
      ]
    },
    {
      title: '用户管理',
      icon: 'user',
      children: [
        {
          title: '用户列表',
          path: '/userList'
        }
      ]
    },
    {
      title: 'Excel',
      icon: 'file-text-fill',
      children: [
        {
          title: '导出Excel',
          path: '/Excel/outPutExcel'
        },
        {
          title: '上传Excel',
          path: '/Excel/uploadExcel'
        }
      ]
    },
    {
      title: '图表',
      icon: 'jianpan',
      children: [
        {
          title: '键盘图表',
          path: '/wordChart',
        }
      ]
    }
]

export default MenuList;