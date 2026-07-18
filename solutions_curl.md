#cURL Practice -JSONPlaceholder
API used: https://jsonplaceholder.typicode.com/

Request 1: curl https://jsonplaceholder.typicode.com/posts/1
- returned a single JSON object with 'userId', 'id' and 'body'
Request 2: curl -i https://jsonplaceholder.typicode.com/posts/1
- returned same thing but this time with the headers and it showed status line of HTTP/2 200 which means a successful call. 
Request 3: curl -i https://jsonplaceholder.typicode.com/postz/1
-returned a status line of HTTP/2 404 which was a client error response (mispelling in the URL caused this error)
Request 4: curl "https://jsonplaceholder.typicode.com/comments?postId=1"

-returned a JSON array of 5 comment objects and the postid=1 filtered the results. 

