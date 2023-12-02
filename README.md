# aws-lambda-typescript-template

### Example GET

curl --request GET \
 --url http://localhost:4000/dev/hello-from-lambda \

### Example POST

curl --request POST \
 --url http://localhost:4000/dev \
 --header 'Content-Type: application/json' \
 --data '{ "message": "Hello world from Lambda!" }'
