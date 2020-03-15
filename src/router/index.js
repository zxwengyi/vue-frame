import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home.vue"),
      meta: {
        auth: false, // 是否需要登录
        keepAlive: true // 是否缓存组件
      }
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/about.vue"),
      meta: {
        auth: true,
        keepAlive: true
      }
    },
    {
      path: "/scroll",
      name: "scroll",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/recycleScroller.vue")
    },
    {
      path: "/lazy",
      name: "lazy",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/lazyLoadImages.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/login.vue"),
      meta: {
        auth: false,
        keepAlive: true
      }
    },
    {
      path: "*", // 未匹配到路由时重定向
      redirect: "/"
    }
  ]
});

// 全局路由钩子函数 对全局有效
router.beforeEach((to, from, next) => {
  let auth = to.meta.auth; // 是否需要授权
  //   let token = store.getters["login/token"];
  console.log("进入路由拦截了");
  if (auth) {
    // 需要登录
    // if (token) {
    //   next();
    // } else {
    //   next({
    //     path: "/login",
    //     query: {
    //       redirect: to.fullPath
    //     }
    //   });
    // }
  } else {
    next();
  }
});

export default router;
