json.array!(@kids) do |kid|
  json.extract! kid, :id, :hours, :diameter, :pieces
  json.url kid_url(kid, format: :json)
end
