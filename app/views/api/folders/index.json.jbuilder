@folders.each do |folder|
  json.set! folder.id do
    json.extract! folder, :id, :owner_id, :name
    json.designs folder.designs.map { |design| design.id }
  end
end
