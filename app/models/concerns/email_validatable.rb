# module EmailValidatable
#   extend ActiveSupport::Concern

#   class EmailValidator < ActiveModel::EachValidator
#     def validate_each(record, attribute, value)
#       begin
#         a = Mail::Address.new(value)
#       rescue Mail::Field::ParseError
#         record.errors[attribute] << (options[:message] || "is not an email")
#       end
#     end
#   end
# end
