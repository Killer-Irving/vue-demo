
module.exports = {
    aaa() {
        console.log('im aaa')
        this.axios
            .get("/api/search/translate", {
                params: {
                    q: '啊啊啊'
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(response => {
                console.log(response);
            });
    },
}