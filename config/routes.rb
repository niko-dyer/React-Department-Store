Rails.application.routes.draw do
  namespace :api do
    resources :departments do
      resources :items
    end
  end
end
