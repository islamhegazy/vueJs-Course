import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '', component: Home },
    //8. Setting Up Route Parameters
    { path: '/user/:id', component: User } 
];
