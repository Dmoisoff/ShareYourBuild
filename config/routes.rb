Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do

   resources :users

   get 'user/:id/projects', to: 'projects#projects_by_user'
   resources :projects do
     resources :instructions, only: [:create, :index]
     resources :comments, only: [:create, :index]
   end

   patch 'instructions/update', to: 'instructions#update_instructions'
   resources :instructions, except: [:create, :index]

   resources :comments, except: [:create, :index]
   resource :session
   resources :search, only: [:index]
  end

end
