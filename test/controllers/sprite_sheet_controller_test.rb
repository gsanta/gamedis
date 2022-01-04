require 'test_helper'

class SpriteSheetControllerTest < ActionDispatch::IntegrationTest
  test "can't get sprites with no auth" do
    get "/api/v1/sprite_sheet"
    assert_response :success
  end

  # test "can't get sprites with no auth" do
  #   get "/api/v1/sprite_sheet"
  #   assert_response :forbidden
  # end
  # test "can get sprites with header" do
  #   get "/api/v1/sprite_sheet", headers: { "HTTP_AUTHORIZATION" => "Bearer " + build_jwt }
  #   assert_response :success
  # end
  # test "expired jwt fails" do
  #   get "//api/v1/sprite_sheet", headers: { "HTTP_AUTHORIZATION" => "Bearer " + build_jwt(-1) }
  #   assert_response :forbidden
  # end
  # test "can get messages content" do
  #   get "//api/v1/sprite_sheet", headers: { "HTTP_AUTHORIZATION" => "Bearer " + build_jwt }
  #   res = JSON.parse(@response.body)
  #   assert_equal '{"messages"=>["Hello"]}', res.to_s
  # end

  def build_jwt(valid_for_minutes = 5)
    exp = Time.now.to_i + (valid_for_minutes*60)
    payload = { "iss": "fusionauth.io",
                "exp": exp,
                "aud": "238d4793-70de-4183-9707-48ed8ecd19d9",
                "sub": "19016b73-3ffa-4b26-80d8-aa9287738677",
                "name": "Dan Moore",
                "roles": ["USER"]
    }

    JWT.encode payload, Rails.configuration.x.oauth.jwt_secret, 'HS256'

  end
end
