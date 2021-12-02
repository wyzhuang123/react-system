// 抽离侧边栏文件内容，使用动态加载  
//  title 为名字， path 为路由路径， icon为图标名，  role 通过数字判断登陆者的身份， 1为管理者， 0为普通用户， 数组项表示都可以访问
const MenuList = [
    {
      title: '首页',
      path: '/',
      icon: 'home',
      role: [0, 1]
    },
    {
      title: '系统信息',
      path: '/message',
      icon: 'computer_fill',
      role: 1
    },
    {
      title: '指导页',
      path: '/guide',
      icon: 'zhinanzhidao',
      role: 0
    },
    {
      title: '文章管理',
      icon: 'svgwrite',
      role: 1,
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
      role: 1,
      children: [
        {
          title: '用户列表',
          path: '/user/userList'
        }
      ]
    },
    {
      title: 'Excel',
      icon: 'file-text-fill',
      role: 1,
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
      role: [0, 1],
      children: [
        {
          title: '键盘图表',
          path: '/wordChart',
        },
        {
          title: '波浪图表',
          path: '/wrapChart',
        }
      ]
    }
]

export default MenuList;