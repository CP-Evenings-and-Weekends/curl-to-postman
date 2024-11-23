JSONPlaceholder endpoints:
- posts
- /users
- /comments
- /todos
- /albums
 

 ---

**Fetch all posts** \
curl -X GET "https://jsonplaceholder.typicode.com/posts"

**Create a new post** \
curl -X POST "https://jsonplaceholder.typicode.com/posts" \
-H "Content-Type: application/json" \
-d '{"title": "My New Post", "body": "This is the content of my new post.", "userId": 1}'

**Update a post**  \
curl -X PUT "https://jsonplaceholder.typicode.com/posts/1" \
-H "Content-Type: application/json" \
-d '{"id": 1, "title": "Updated Post", "body": "Updated content", "userId": 1}'

**Delete a post** \
curl -X DELETE "https://jsonplaceholder.typicode.com/posts/1"

