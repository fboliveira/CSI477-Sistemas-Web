json.extract! estado, :id, :nome, :sigla, :created_at, :updated_at
json.url estado_url(estado, format: :json)