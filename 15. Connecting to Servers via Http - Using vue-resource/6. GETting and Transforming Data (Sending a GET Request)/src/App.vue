<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username"/>
                </div>
                 <div class="form-group">
                    <label>email</label>
                    <input class="form-control" type="email" v-model="user.email"/>
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <h3>user data</h3>
                <ul class="list-group">
                    <li class="list-group-item"
                        v-for="u in users" :key="u.user">  
                        {{u.username}} - {{u.email}} 
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
</template>

<script>
//npm install vue-resource
    export default {
        data() {
            return {
              user:{
                  username:'',
                  email:''
              },
              users:[]
            }
        },
        methods: {
         submit(){
           this.$http.post('https://vuejs-bd479.firebaseio.com/data.json',this.user)
            .then(response =>{
                console.log(response)
            },error =>{
                console.log(error)
            });
         },
         fetchData(){
            this.$http.get('https://vuejs-bd479.firebaseio.com/data.json')
            .then(response =>{
            return  response.json();
            
            })
            .then(data => {
                
               const resultArray = [];
               for(let key in data){
                   resultArray.push(data[key]);
               }
               this.users= resultArray
              
            });
         }
        }
    }
</script>

<style>

</style>
