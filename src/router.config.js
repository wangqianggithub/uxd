import Home from './components/Home.vue'
import System from './components/System.vue'
import Standard from './components/Standard.vue'
import Subgroup from './components/Subgroup.vue'
import Work from './components/Work.vue'
import Team from './components/Team.vue'
import Message from './components/Message.vue'
import Other from './components/Other.vue'

export default [
    {path:'/home',component:Home},
    {path:'/system',component:System},
    {path:'/standard',component:Standard},
    {path:'/subgroup',component:Subgroup},
    {path:'/work',component:Work},
    {path:'/team',component:Team},
    {path:'/message',component:Message},
    {path:'/other',component:Other},
    {path:'/',redirect:'/home'},
    {path:'*',redirect:'/home'}
]