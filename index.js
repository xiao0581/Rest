const baseUrl = "https://anbo-restbookquerystring.azurewebsites.net/api/Books"
Vue.createApp({
    data() {
        return {
            Title: null,
            price: null,
            message: null,
            books: [],
            singlePoster: null,
            enrro: null,
            getId: 0,
            addData: { title: "", price: 0 },
            addMessage: null,
            updateBook: {id: null, title: "",price: null},
            deleteMessage: null
        }
    },
    methods: {

        async getAll() {
            try {
                const res = await axios.get(baseUrl)
                this.books = await res.data
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
                this.getAll()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteBook(id) {
            const url = baseUrl + "/" + id
            try {
                response = await axios.delete(url)
                this.getAll()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async update() {
            const url = baseUrl + "/" + this.updateBook.id
            try {
                response = await axios.put(url, this.updateBook)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAll()
            } catch (ex) {
                alert(ex.message)
            }
        }
    }



}).mount("#app")