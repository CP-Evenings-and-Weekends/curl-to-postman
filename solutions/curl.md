
CREATE NEW ITEM:
curl -X POST -H "Content-Type: application/json" -d'{"title":"M
y New Post", "body":"This is the body of the post.", "userId":1}' https://jsonplaceholder.typ
icode.com/posts

UPDATE EXISTING DATA:

MULTIPLE ELEMENTS:
curl -X PUT -H "Content-Type: application/json" -d'{"u
serID":1,"id":1,"title":"A new title","body":"my new body"}' https://jsonplaceholder
.typicode.com/posts/1

ONLY THE BODY:
curl -X PATCH -H "Content-Type: application/json" -d'{"body":"This needed to be changed", "userID":1}' https://jsonplaceholder.typicode.com/posts/1

DELETE DATA:
curl -X DELETE https://jsonplaceholder.typicode.com/po
sts/1