import Vuex from 'vuex';
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        messages: [],
        newss: [],
        searchString: "",
        formVisible: false,
        formNews: {},
        formNewMode: true
    },
    getters: {
        firstMessage(state) {
            return state.messages[0];
        },
        areSomeMessages(state) {
            return state.messages.length > 0;
        },
        messagesCount(state) {
            return state.messages.length
        },
        filtredNewss(state) {
            let result = state.newss;
            if (state.searchString)
                result = result.filter(news =>
                    news.title.toLowerCase().includes(state.searchString.toLowerCase())
                );
            return result;
        },

    },
    mutations: {

        addNews(state, news) {
            state.newss.push(news);
        },
        showForm(state) {
            state.formVisible = true;
        },
        newFormMode(state) {
            state.formNewMode = true;
        },

        clearFormNews(state) {
            Object.assign(state.formNews, {
                title: "",
                author: "",
                text: "",
                date: "1997-01-10T22:00:00.000Z",
                stars: 0
            });
        }
    },
    actions: {
        async showMessageForTime(context, options) {
            const delay = options.delay || 5000;
            context.commit('addMessage', options.message);
            setTimeout(function () {
                if (context.getters.areSomeMessages)
                    context.commit('removeMessage');
            },
                delay);
        },

        async postNews(context, news) {
            try {
                let resp = await axios.post("http://localhost:5000/news", news);
                context.commit("addNews", resp.data);
                await context.dispatch("showMessageForTime", { message: "Новину додано", delay: 500 });
            }
            catch (e) {
                await context.dispatch("showMessageForTime", { message: e, delay: 5000 });
            }
        },
       
        async showAddForm(context) {
            context.commit("clearFormNews");
            context.commit("newFormMode");
            context.commit("showForm");
        }
    }
});
export default store;
