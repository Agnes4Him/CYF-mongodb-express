Your `.env` file should contain this :

MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@demo-cluster.euq1i.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority&appName=demo-cluster

Note: You don't need to first create a database on MongoDB Atlas. It will automatically be created for you if you use the connection string exactly as it is above. REMEMBER to replace the `USERNAME`, `PASSWORD`, and `DATABASE_NAME` to yours!