# Virtual Vending Machine

A virtual vending machine

## Initial Setup

Create a MongoDB database at https://www.mongodb.com/cloud. The free shared version will suffice for this application.
Next, create the cluster and database user with username and password.
To connect to your cluster, you must allow access from your ip (or from anywhere), in the connection settings. You will be prompted to add your ip 
address when you navigate to the database tab on the left hand side and click connect.

Create a .env file in the server directory and add your database connection url, port, and session secret (this can be any string).
You can find the database connection string when clicking on **Connect to your application** promt when proceeding to connect to the cluster.
You must also specify the port number in the .env file within the server directory.


```
DB_CONNECTION=yourdatabaseconnectionstring
PORT=<PORT>
SESSION_SECRET="your session secret"
```

Create a .env file in the client directory and add the base URL with the port specified in your server .env file:

```
REACT_APP_BASE_URL=http://localhost:<PORT>/api
```
In the server folder, install dependencies and then seed the database:

```
cd server
npm install
npm run seed
```

In the client folder, install dependencies:

```
cd client
npm install
```

### Running the Application Locally

In one terminal, start the front end:

```
cd client
npm start
```

In a separate terminal, start the back end using npm run dev or npm start:

```
cd server
npm run dev
```

If the seed was successful, the database should be populated with the four default sodas. Although some users were created, you will not be able to login in using the 
credentials due to some jwt authentication issues. To create an admin user, you must first create an account (this account will be a regular user). 
Next, you will have to manually edit the
database collection in your cluster and set "isAdmin" to **true**. Admins cannot be created as of now for security issues.
Now when logging out and logging back in, you will have admin privileges and have access to the admin panel 
page.

### Using the UI

When the application starts, you will be on the landing page by default. 
To use the vending machine, you will need to navigate to the vending-machine page using the navbar or by clicking the "Try now" button.
The vending machine uses currency deposited on the site. Users that are not signed in can still "purchase" a soda by depositing money to their 
balance in the top left hand corner. Users that are logged in will retain there balance. Clicking on the image will bring up a pop-up box containing the product details. You can purchase a soda by clicking the round button 
underneath the image.

### Admin privileges

In the admin panel, you can update a soda by selecting the row and editing the form as you'd like. You can also create a soda by clicking the create soda button.
There will be a default image for the soda if you do not upload one (the sizing may be off if you use a different size image). The trash icon
at the end of the row will delete that item from the database.

### API Routes

A get request to http://localhost:PORT/api/sodas will return a JSON string with all of the sodas and information on each soda.
A get request to http://localhost:PORT/api/sodas/:id will return a JSON string with the soda associated with the id param.
Update, create, and delete http endpoints are reserved for admins and cannot be accessed unlessed authenticated through middleware using jwt.
                


### Furthur notes

I am aware that there may be a few bugs and features that are not implemented properly. However, I did not have enough time to fix these bugs and issues.
Please restart the application with ctrl+c and runnning npm start in the client and server directories if any errors occur. Thanks!
