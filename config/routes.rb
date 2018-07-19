Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
   resources :users
   get 'user/:id/projects', to: 'projects#projects_by_user'
   resources :projects do
     resources :instructions, only: [:create, :index]
   end
   resources :instructions, except: [:create, :index]
   resource :session
  end

end
