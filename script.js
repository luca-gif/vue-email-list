const root = new Vue({
    el: "#root",

    data: {
        address: "",
        limit: 10,
        flag: true,
    },

    methods: {
        addressGenerator() {
            for (let i = 0; i < this.limit; i++) {

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((r) => {
                    this.address += '_____' + r.data.response
                    setTimeout(() => {
                        this.flag = false
                    }, 2000)
                })
            }
        },
    },

    mounted() {
        this.addressGenerator();
    },
});