import Home from './components/Home.vue';
import Header from './components/Header.vue';

//26. Loading Routes Lazily
/*it make seprate bundel for every component */
const User = resolve =>{
    /*it's some synatx webpack recognizers and it basically
    tells webpack when ever we wan to load something
    which live in thi place,./components/user/User.vue 
    and we want to load it for example one we visit 
    the route using our user component here
    so whenever we do this, execute this function here
    which is basically like a promise which means it 
    resolves --> resolve(require('./components/user/User.vue'));
    so by having it in this asychronnouns function here which 
    has to resolve before it gets executed, webpack is only 
    doing this if we actually need that file and it will create 
    appropriate bundales to be loaded at this point of time during
    the build process so that everything will work smoothly
    without us editing
     */
    require.ensure(['./components/user/User.vue'] , () =>{
        resolve(require('./components/user/User.vue'));
    })
};
const UserStart = resolve =>{
    require.ensure(['./components/user/UserStart.vue'] , () =>{
        resolve(require('./components/user/UserStart.vue'));
    })
};
const UserDetail = resolve =>{
    require.ensure(['./components/user/UserDetail.vue'] , () =>{
        resolve(require('./components/user/UserDetail.vue'));
    })
};
const UserEdit = resolve =>{
    require.ensure(['./components/user/UserEdit.vue'] , () =>{
        resolve(require('./components/user/UserEdit.vue'));
    })
};

/*
if we want not make seprate bundel for every component  add user
to every one
const User = resolve =>{

    require.ensure(['./components/user/User.vue'] , () =>{
        resolve(require('./components/user/User.vue'));
    }, 'user')
};
const UserStart = resolve =>{
    require.ensure(['./components/user/UserStart.vue'] , () =>{
        resolve(require('./components/user/UserStart.vue'));
    }, 'user')
};
const UserDetail = resolve =>{
    require.ensure(['./components/user/UserDetail.vue'] , () =>{
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user')
};
const UserEdit = resolve =>{
    require.ensure(['./components/user/UserEdit.vue'] , () =>{
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user')
};
*/

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
        {path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
         //24. Using the beforeEnter Guard
            console.log('inside route setup');
            next();
        }},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]} ,
    { path: '/redirect-me', redirect: '/user'},
    //19. Setting Up Catch All Routes  Wildcards
    { path: '*', redirect: '/'}, //used when write path not in our app so redirect to home

];
