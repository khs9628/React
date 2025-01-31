// axios 를 사용하는 js
import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"


export default {
    // 모든 글 불러오기
    getAllPosts(){
        return axios.get('/posts/')
    }
    ,
    // 글 작성하기
    createPost(data){
        return axios.post('/posts/', data)
    },
    // 글 삭제하기
    deletePost(id){
        return axios.delete('/posts/'+String(id))
    },

}