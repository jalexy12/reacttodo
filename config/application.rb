require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Reactice
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
       config.autoload_paths += %W(#{config.root}/app/uploaders)

    # configure generators
    config.generators.assets = false
    config.generators.helper = false
    config.generators.test_framework = nil
    config.generators.stylesheets = false


    # configure the react sprockets plugin  
    config.react.variant      = :development
    config.react.addons       = true

    # browserify for CommonJS and JSX transform
    config.browserify_rails.commandline_options = "--transform reactify --extension=\".jsx\""
    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true
  end
end
