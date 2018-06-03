import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/goldCuo/Activity'
import ActivityJewelry from '@/goldCuo/ActivityJewelry'
import ActivityJoin from '@/goldCuo/ActivityJoin'
import ActivityJudges from '@/goldCuo/ActivityJudges'
import DesignerHelp from '@/goldCuo/DesignerHelp'
import JewelryUpload from '@/goldCuo/JewelryUpload'
import HelloWorld from '@/goldCuo/HelloWorld'
import ActivityToKnow from '@/goldCuo/ActivityToKnow'
// pubG
import PubGIndex from '@/pubG/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/activity',
            name: 'Activity',
            component: Activity
        },
        {
            path: '/activityjoin',
            name: 'ActivityJoin',
            component: ActivityJoin
        },
        {
            path: '/activityjewelry',
            name: 'ActivityJewelry',
            component: ActivityJewelry
        },
        {
            path: '/activityjudges',
            name: 'ActivityJudges',
            component: ActivityJudges
        },
        {
            path: '/designerhelp',
            name: 'DesignerHelp',
            component: DesignerHelp
        },
        {
            path: '/jewelryupload',
            name: 'JewelryUpload',
            component: JewelryUpload
        },
        {
            path: '/helloworld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/activitytoknow',
            name: 'ActivityToKnow',
            component: ActivityToKnow
        },
        // pubG
        {
            path: '/pubg/index',
            name: 'pubGIndex',
            component: PubGIndex
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
