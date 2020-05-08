designs = @folder.designs.map { |design| design.id }

json.folder do
  json.extract! @folder, :id, :owner_id, :name
  json.designs designs
end

json.designs do
  @folder.designs.each do |design|
    json.set! design.id do
      json.partial! "api/designs/design", design: design
    end
  end
end
