# frozen_string_literal: true

module ApiHelpers
  def json
    JSON.parse(response.body)
  end

  def login_with_api(user)
    post '/users/sign_in', params: {
      user: {
        email: user.email,
        password: user.password
      }
    }
  end
end
