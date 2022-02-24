Rails.application.routes.draw do
  root 'posts#index'
  
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  
  get '/users/:user_id/posts', to: 'posts#get_user_posts'
  
  resources :users
  resources :posts do
    resources :comments
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
