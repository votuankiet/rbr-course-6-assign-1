Rails.application.routes.draw do
  scope :api, defaults: {format: :json} do
    resources :cities, except: [:new, :edit, :destroy]
    resources :states, except: [:new, :edit, :destroy]
  end

  get '/ui' => 'ui#index'
  get '/ui#' => 'ui#index'
  root "ui#index"
end
