import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
// import Usuario from './components/usuario/Usuario'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
//import UsuarioEditar from './components/usuario/UsuarioEditar'
// import UsuarioLista from './components/usuario/UsuarioLista'
import Menu from './components/template/Menu.vue'
import MenuEng from './components/template/MenuEng.vue'

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')

const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y:0 }
    }
  }
  ,routes: [{
    path: '/',
    //component: Inicio
    components: {
      default: Inicio,
      menu: Menu
    }
  },{
    path: '/usuario',
    //component: Usuario,
    components: {
      default: Usuario,
      menu: MenuEng,
      menuInferior: MenuEng
    },
    props: true,
    children: [
      { path: '', component: UsuarioLista},
      { path: ':id', component: UsuarioDetalhe, props: true,
        beforeEnter: (to, from, next) => {
          console.log('antes da rota -> usuario detalhe')
          next()
        }},
      { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'},
    ]
  },{
    path: '/redirect',
    redirect: '/usuario'
  }, {
    path: '*',
    redirect: '/'
  }]
})

router.beforeEach((to, from, next) => {
  console.log('antes das rotas -> global')
  // if(to.path !== '/usuario') {
  //   next('/usuario')
  // } else {
  //   next()
  // }
  next()
})

export default router