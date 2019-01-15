import axios from 'axios';
import { async } from "q";
import { createContext } from "vm";

const url = 'http://localhost:5000/api/posts/';

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
            email, name
        })
    }

    //delete post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}
export default PostService;
