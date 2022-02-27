Rails.application.routes.draw do
  root 'comments#all_comments'
  
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  
  get '/users/:user_id/posts', to: 'posts#get_user_posts'
  get '/users/:user_id/drafts', to: 'posts#get_user_drafts'
  
  get '/comments', to: 'comments#all_comments'

  get '/posts/:post_id/likes', to: 'post_likes#show'
  post '/posts/:post_id/likes', to: 'post_likes#create'
  delete '/posts/:post_id/likes/:like_id', to: 'post_likes#destroy'
  
  resources :users
  resources :posts do
    resources :comments
  end
  resources :drafts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
