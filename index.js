const baseUrl = "https://anbo-restbookquerystring.azurewebsites.net/api/Books"
Vue.createApp({
    data() {
        return {
            Title: null,
            price: null,
            message: null,
            posts: [],
            singlePoster: null,
            enrro: null,
            getId: 0,
            addData: { title: "", price: 0 },
            addMessage: null
        }
    },
    methods: {

        async getAll() {
            try {
                const res = await axios.get(baseUrl)
                this.posts = await res.data
            } catch (e) {
                this.error = e
            }
        },
        
        async getById(id) {
            const url = baseUrl + "/" + id
            try {
                const res = await axios.get(url)
                this.singlePoster = await res.data
            } catch (e) {
                this.error = e
            }
        },


        async addBook() {
            console.log(this.addData)
            try {
                response = await axios.post(baseUrl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                
            } catch (ex) {
                alert(ex.message)
            }
        }
    }



}).mount("#app")