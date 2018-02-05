import Home from '../components/Home'
import ClassIfy from '../components/ClassIfy'
import Mine from '../components/Mine'
import Year from '../components/Year'
import ShopCart from '../components/ShopCart'
export const ROUTER_MAP = {
    NAV: [
        {
            title: '首页',
            to: '/',
            active: 'active',
            icon: 'iconfont icon-home'
        },
        {
            title: '分类',
            to: '/classify',
            active: 'active',
            icon: 'iconfont icon-search_list'
        },
        {
            title: '年货节',
            to: '/year',
            active: 'active',
            icon: 'iconfont icon-dianpu'
        },
        {
            title: '购物车',
            to: '/shopcart',
            active: 'active',
            icon: 'iconfont icon-gouwuche'
        },
        {
            title: '我的',
            to: '/mine',
            active: 'active',
            icon: 'iconfont icon-my'
        },
    ],
    ROUTER_VIEW: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/classify',
            component: ClassIfy
        },
        {
            path: '/year',
            component: Year
        },
        {
            path: '/shopcart',
            component: ShopCart
        },
        {
            path: '/mine',
            component: Mine
        }
    ]
}