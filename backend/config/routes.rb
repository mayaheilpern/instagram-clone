Rails.application.routes.draw do
  root 'comments#all_comments'
  
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  
  get '/users/:user_id/posts', to: 'posts#get_user_posts'

  get '/comments', to: 'comments#all_comments'
  
  resources :users
  resources :posts do
    resources :comments
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
