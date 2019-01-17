import vuex from "vuex";
import axios from "axios";

const createStore = () => {
return new vuex.Store({

state:{
    loadedposts:[]
},
mutations:{
    setposts(state,posts){
        state.loadedposts=posts;
    }
},

actions: {

    nuxtServerInit(vuexContext,context){
        return axios.get('https://hastha-123.firebaseio.com/posts.json')
        .then(res => {
            const postsArray = []
            for(const key in res.data){
                postsArray.push({...res.data[key],id:key})

            }
          vuexContext.commit('setposts',postsArray)
        })
        .catch(e => context.error(e));

    },
    setposts(vuexContext,posts){
        vuexContext.commit("setposts",posts);
    }
},
getters:{
    loadedposts(state){
        return state.loadedposts;
    }
}



});


};