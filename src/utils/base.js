import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
const request = {
    get() {
        console.log('im aaa')
        Vue.axios
            .get("/api/search/translate", {
                // headers: {
                //     'Authorization': 'Bearer ' + token,
                //     "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId,
                // },
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
export default request;