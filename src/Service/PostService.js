const url = "https://twyr4sw8mq.loclx.io/api/v1/post/";

const PostService = {
    getPost : async () =>{
        let response;
       await fetch(url)
       .then(res => res.json())
       .then(json => {
            response=json.posts; 
        }).catch(err => console.log("err: "+err));
       return response;
    }
}

export default PostService;
