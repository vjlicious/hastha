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
                        ...email,
                        name,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            } catch(err){
                reject(err)
            }
        })
    }
    //create post
    static insertPost(email,name){
        return axios.post(url,{
<<<<<<< HEAD
            email, name
=======
            email,name
>>>>>>> 6dd4f8d7b479b168e6a24ae9f325eb7a4f0ee909
        })
    }

    //delete post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}
export default PostService;
