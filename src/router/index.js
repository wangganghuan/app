import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      // 发现
      {
        path: '/discover',
        name: 'discover',
        component: () => import('@/components/discover_page/index.vue')
      },
      //资产
      {
        path: "/property",
        name: "property",
        component: () => import("@/components/property_page/index.vue")
      },
      //跟随钱包
      {
        path: "/followwallet",
        name: "follow_wallet",
        component: () => import("../components/property_page/follow_wallet.vue")
      },
      //动态钱包
      {
        path: "/dynamicwalle",
        name: "dynamicwalle",
        component: () => import("../components/property_page/dynamic_walle.vue")
      },
      //团队总业绩
      {
        path: "/teamwalle",
        name: "teamwalle",
        component: () => import("../components/property_page/team_walle.vue")
      },
      // 首页
      {
        path: '/home',
        name: 'home',
        component: () => import('@/components/home_page/index.vue')
      },
      //场外交易
      {
        path: '/otcdeal',
        name: 'otcdeal',
        component: () => import('@/components/OTCdeal/index.vue'),
      },
      //购买
      {
        path: '/purchase/:id',
        name: 'purchase',
        component: () => import('@/components/OTCdeal/purchase.vue'),
      },
      //我的
      {
        path: "/mypage",
        name: "mypage",
        component: () => import('../components/my_page/index.vue'),
      },
      //安全中心
      {
        path: "/securitycenter",
        name: "securityCenter",
        component: () => import('../components/my_page/second_level/securityCenter.vue'),
      },
      //邀请好友
      {
        path: "/invitefriends",
        name: "invitefriends",
        component: () => import('../components/my_page/second_level/invite_friends.vue'),
      },
      //帮助中心
      {
        path: "/helpcenter",
        name: "helpcenter",
        component: () => import('../components/my_page/second_level/help_center.vue'),
      },
      //关于我们
      {
        path: "/aboutus",
        name: "aboutus",
        component: () => import('../components/my_page/second_level/about_us.vue'),
      },
      //在线客服
      {
        path: "/service",
        name: "service",
        component: () => import('../components/my_page/second_level/service.vue'),
      },
    ]
  },
  //登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('../user_page/login.vue')
  },
  //注册
  {
    path: '/register',
    name: 'register',
    component: () => import('../user_page/register.vue')
  },
  //忘记密码
  {
    path: '/forgetthepassword',
    name: 'forgetthepassword',
    component: () => import('../user_page/forget_the_password.vue')
  },
  //发现
  {
    path: "/announcement",
    name: 'announcement',
    component: () => import("@/components/home_page/announcement.vue")
  },
  //修改交易密码
  {
    path: "/modificationdeal",
    name: "modificationdeal",
    component: () => import("@/components/my_page/modification_deal.vue")

  },
  //修改登录密码
  {
    path: "/modificationlogin",
    name: "modificationlogin",
    component: () => import("@/components/my_page/modification_login.vue")
  },
  //我的转账
  {
    path: "/transferaccounts",
    name: "transferaccounts",
    component: () => import("@/components/my_page/second_level/transfer_accounts.vue")
  },
  //记录
  {
    path: "/record",
    name: "record",
    component: () => import("@/components/my_page/second_level/record.vue")

  },
  //实名认证
  {
    path: "/authentication",
    name: "authentication",
    component: () => import("@/components/my_page/second_level/authentication.vue")

  },
  //实名认证
  {
    path: "/conversion",
    name: "conversion",
    component: () => import("@/components/my_page/second_level/conversion.vue")

  },
  //实名认证--记录
  {
    path: "/conversionrecord",
    name: "conversionrecord",
    component: () => import("@/components/my_page/second_level/conversion_record.vue")

  },
  //系统设置
  {
    path: "/systemsettings",
    name: "systemsettings",
    component: () => import("@/components/my_page/second_level/system_settings.vue")

  },
  //发现--发布  discoverrecord
  {
    path: "/issuepage",
    name: "issuepage",
    component: () => import("@/components/discover_page/issue_page.vue")

  },
  //发现--记录
  {
    path: "/discoverrecord",
    name: "discoverrecord",
    component: () => import("@/components/discover_page/record.vue")

  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
