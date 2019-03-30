export const fruitMixin = {
    data() {
        return {
            fruits: [
                'Apple', 'Banana', 'mango'
            ],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this
                .fruits
                .filter(element => {
                    return element.match(this.filterText)
                });
        }
    },
    created() {
        console.log('created')
    },
}

/*
fruitMixin in not shared 
it is not same place in memory which we then use as a mixin 
in seperate components 

if you want to affect other plcas in our app then 
- use something like event bus where you use vue instance
-or use normal javascript object data()
*/