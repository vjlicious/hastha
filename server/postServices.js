import axios from 'axios';
import { async } from "q";
import { createContext } from "vm";

const url = 'https://hastha-123.firebaseio.com/posts.json';

class PostService {
    //get posts
    static getPosts(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            } catch(err){
                reject(err)
            }
        })
    }
    //create post
    static insertPost(text){
        return axios.post(url,{
            email,name
        })
    }

    //delete post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}
export default PostService;
