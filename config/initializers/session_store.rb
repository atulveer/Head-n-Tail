# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_hunt_a_snake_session',
  :secret      => '475d3bdd9288f22b100fd8c1a19a85d073d40d2cb7550f05981b552a84cb15c003d1548d9287192b0fd410877c02d6bc6dcfc311704fb5ca9e62e7a758e5d64e'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
