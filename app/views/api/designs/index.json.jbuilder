@designs.each do |design|
    json.set! design.id do
        json.partial! 'api/designs/design', design: design
    end
end