class SnakeCaseParameters
  def initialize(app)
    @app = app
  end

  def call(env)
    request = ActionDispatch::Request.new(env)
    request.request_parameters.deep_transform_keys!(&:underscore)
    request.query_parameters.deep_transform_keys!(&:underscore)

    @app.call(env)
  end
end
