const url = "https://celebrated-frangollo-ada376.netlify.app/api/v1/post/";

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
