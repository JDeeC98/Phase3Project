class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/games" do
    games = Game.all
    games.to_json
  end

  get "/publishers" do
    publishers = Publisher.all
    publishers.to_json
  end

  get "/genres" do
    genres = Genre.all
    genres.to_json
  end

  post '/publishers' do
    publisher = Publisher.create(name:params[:name], hq:params[:hq], publisher_image_url:params[:publisher_image_url])
    publisher.to_json
  end
 

  post '/games' do
    game = Game.create(name:params[:name], release_date:params[:release_date], game_image_url:params[:game_image_url])
    game.to_json
  end

  post '/genres' do
    genre = Genre.create(name:params[:name], genre_image_url:params[:genre_image_url])
  end

  delete '/publishers/:id' do
    publisher = Publisher.find(params[:id])
    publisher.destroy
    publisher.to_json
  end

  delete '/games/:id' do
    game = Game.find(params[:id])
    game.destroy
    game.to_json
  end

  delete '/genres/:id' do
    genre = Genre.find(params[:id])
    genre.destroy
    genre.to_json
  end

end
