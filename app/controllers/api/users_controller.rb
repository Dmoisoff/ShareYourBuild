class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    defaultProfilePicture = File.open('app/assets/images/user_profile_pic.png')
    @user.picture.attach(io: defaultProfilePicture, filename: 'user_profile_pic.png')
    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      render json: {signUp: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :age, :about)
  end
end
