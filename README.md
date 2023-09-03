<h1 align="center"> Game Review GraphQL </h1>
<p align="center">
 <b>A graphql server implementation for the Game reviewing system</b>
</p>
<br>

### Description
This has three business entities Game, Author and Review. The server uses in memory data and does not include DB.

### Things that can be done
* Create, update, delete Game, Author and Review.
* Get the Games, Authors, and Reviews.
* Get the Reviews and their corresponding authors.

### Run locally

* Checkout the repo. Create .env file and set the SERVER_PORT.
* Run ```npm install``` to install the dependency
* Run ```npm run start``` to run in the development mode.

### Graphql queries

```
--Query to get the game with gameId along with it's reviews and the author of review.
query GameQuery($gameId: ID!) {
    game(id: $gameId) {
        name,
            platform,
            reviews {
            content,
                rating,
                author {
                name
            }
        }
    }
}
```

```
--Query to get all reviews with it's author and also the reviews made by those authors.
query GameQuery {
  reviews {
        content,
        id,
        rating,
        author {
            name,
            reviews {
                content,
                rating
            }
        },
        game {
            name
        }
    }
}
```

```
-- Query to retrieve reviews from authors who are verified authors.
query ReviewQuery() {
  reviews(filter: {
    authorVerified: true
  }) {
    content,
    rating,
    author {
      name,
      verified
    }
  }
}
```

```
-- Query to retrieve game with gameId and their reviews with verified authors.
query GameQuery($gameId: ID!) {
  game(id: $gameId) {
    name,
    platform,
    reviews(filter: {
      authorVerified:true
    }) {
      content,
      author_id,
      rating,
      author {
        name,
        verified
      }
    }
  }
}
```

```
-- Delete the game with linked reviews
mutation {
  deleteGame(id: "56af9adc-d0b8-aa4g-871f-cef66f86f7ap") 
}

-- Delete author
mutation {
  deleteAuthor(id: "")
}

-- Update game
mutation($updateGameId: ID!, $input: addGameInput!) {
  updateGame(id: $updateGameId, input: $input) {
    name,
    platform
  } 
}
 Input 
{
  "updateGameId": "53a0724c-a416-4cac-ae45-bfaedce1f147",
  "input": {
    "name": "super game",
    "platform": "PS1"
  }
}
```

### CICD
This repo uses github actions to automatically build and deploy the api into the server. 
- Code is built in github server when there is pull request or merge into the main branch.
- Code will be deployed in the EC2 instance where the code is merged into the main branch.

### Setup node and npm in EC2
```
sudo apt update
sudo apt install nodejs@18
sudo apt install npm

node -v
npm -v

```
### Setup hosted runner in EC2

* Go to the settings of the Repo. Under Action -> runners, create a new hosted runner.
* Connect to the EC2 server and run each command as mentioned.
* Few commands that are not mentioned in the setup of hosted runner are
   * sudo ./svc.sh install
   * sudo ./svc.sh start. This activates the hosted runner.
* Running ./run.sh is not enough. This starts listening to the change in github.

### Note :
Before we can find the _work folder, we need to trigger the build once. Onl then our source code will be pulled by the hosted runner.

### Setup pm2
```
npm i pm2 -g
sudo npm start src/index.js --name api   (go to the source code path first) 
```
We can then test the api by making the curl request. Run the curl command to test

```
curl -g -X POST -H "Content-Type: application/json" -d '{"query":"query{games{name} }"}' http://localhost:4000 (from within Ec2)
```

### Setup nginx
The security group of EC2 instance allows only port 80 for incoming request. But our api runs in different port. For this we need to setup nginx for redirection. Add the location as shown below. Set the appropriate port where api is running.

```

    location /api/ {

        proxy_pass  http://localhost:4000/;

        proxy_set_header Host $host;

        proxy_set_header X-Real-IP $remote_addr;

        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    }
```
sudo systemctl restart nginx

Now we can test the api from the host machine with `http://IPV2 Dns/api`. In our case it would something like 
```
http://ec2-13-210-246-96.ap-southeast-2.compute.amazonaws.com/api/
```
It will open the Apollo explorer for the graphql.

Also we can send the curl request to the same api as
```
curl -g -X POST -H "Content-Type: application/json" -d '{"query":"query{games{name} }"}' http://ec2-13-210-246-96.ap-southeast-2.compute.amazonaws.com/api/
```

### Stop services
- sudo npm stop api
- sudo ./svc.sh stop
- sudo ./svc.sh uninstall ( if you want to uninstall )
- 


