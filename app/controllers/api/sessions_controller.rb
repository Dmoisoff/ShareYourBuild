class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
          params[:user][:username],
          params[:user][:password]
        )
    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      
      render json: {logIn: ["invalid credentials"]}, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ['No user signed in'], status: 404
    end
  end

end
