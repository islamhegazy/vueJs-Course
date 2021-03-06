import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export const routes = [
    { path: '', name: 'Home', components: {
        default: Home,
        'header-top': Header
    }},
    { path: '/user',  components:{
        default: User, 
        'header-bottom': Header
    }, children:[
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]} ,
    { path: '/redirect-me', redirect: '/user'},
    //19. Setting Up Catch All Routes  Wildcards
    { path: '*', redirect: '/'}, //used when write path not in our app so redirect to home

];
