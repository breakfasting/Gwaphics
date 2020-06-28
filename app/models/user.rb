class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, presence: true, uniqueness: true
  # include EmailValidatable
  # validates :email, presence: true, uniqueness: true, email: true

  attr_reader :password
  before_validation :ensure_session_token

  has_many :designs,
    foreign_key: :user_id,
    class_name: :Design

  has_many :folders,
    foreign_key: :folder_id,
    class_name: :Folder

  has_many :created_designs,
    foreign_key: :creator_id,
    class_name: :Design

  has_many :uploaded_images,
    foreign_key: :uploader_id,
    class_name: :UploadedImage

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?

    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
