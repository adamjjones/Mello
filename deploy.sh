dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t mello-trello1-image ./bin/release/netcoreapp2.2/publish

docker tag mello-trello1-image registry.heroku.com/mello-trello1/web

docker push registry.heroku.com/mello-trello1/web

heroku container:release web -a mello-trello1

# sudo chmod 755 deploy.sh
# ./deploy.sh