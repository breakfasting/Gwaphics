Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	namespace :api, defaults: { format: :json } do
		resources :users, only: [:create]
		resources :folders, only: [:index, :show, :create, :update, :destroy]
		resources :uploaded_images, only: [:index, :show, :update, :create, :destroy]
		resource :session, only: [:create, :destroy]
		resources :designs, only: [:show, :create, :update, :destroy] do
			collection do
				get 'templates'
				get 'owned'
			end
		end
	end

	root to: 'static_pages#root'
end
