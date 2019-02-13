Rails.application.routes.draw do
  get 'pokedex', to: 'pokedex#show'
  root 'pokedex#show'
end
