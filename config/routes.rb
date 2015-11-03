Rails.application.routes.draw do
  get 'api', to: redirect('/swagger/dist/index.html')
  root 'home#index'
  get '/notes/:note', to: 'play#note'
  get '/samples/:sample', to: 'play#sample'
end
