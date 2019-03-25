<template>
    <div class="component">

        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <P>User Name:{{SwitchName()}}</P>
        <P>User Age:{{userAge}}</P>
        <!--7. Using Custom Events for Child = Parent Communication-->
        <button class="btn btn-primary" @click="resetName">Reset Name from func in this child</button>
        <br/>
        <br/>
        <button class="btn btn-danger" @click="restNameFunc">Reset Name from func in parent</button>
    </div>
</template>

<script>
import {eventBus} from '../main';
    export default {
        //6. Validating props
        props : {
            myName: {
                type: String,
                //required:true, not use if we use default
                default: 'saied' // if i don't pass props
                // myName: [String , Array] //here MyName can be String or Array type:Object,
                // //Object or Array then default should be function
                /* default:function(){
                    return{
                        name: 'ahmed'
                    }
                }*/
            },
            restNameFunc:Function,
            userAge:Number
        },
        // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders
        data(){
            return {
                initName: this.myName
            }
        },
        methods : {
            SwitchName() {
                // 5. Using props in the Child Component return
                // this.myName.split("").reverse().join(""); //if string
                return this.myName;
            },
            //7. Using Custom Events for Child = Parent Communication
            resetName() {
                this.initName = 'Islam';
                // after change myName we need to inform the parent that changes by emit custom
                // event
                this.$emit('nameWasReset', this.initName);
            }
        },
        created(){
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }

</style>