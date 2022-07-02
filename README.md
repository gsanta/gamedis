# Development

Run rails server: `bin/rails server`
Run database: `docker-compose up`
Run migration: `rake db:setup`
Seed: `rails db:seed`


Heroku deploy

create remote for backend

`heroku git:remote -a backend-app-name`

rename default heroku remote to backend-heroku

`git remote rename heroku backend-heroku`

repeat above process for the client app

set APP_BASE config var on heroku for client app
`APP_BASE=client`

## Engine

compile engine: 

`emcc src/main.cpp -o build/app_wasm.js -s TOTAL_MEMORY=33554432 -s WASM=1 -std=c++11`
