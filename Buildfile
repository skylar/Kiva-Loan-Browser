# ===========================================================================
# Project:   Klb
# Copyright: ©2009 Kiva Microfunds
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore, :title => 'Kiva en Français'

# Disable minify, if necessary (sometimes this causes bugs)
#config :all, :minify => false

# Configure lanugages to build
config :klb, :build_languages => [:fr,:en]

# Set up some proxies for dev/debug mode
proxy '/proxy', :to => 'kivadevcamp.org'
proxy '/v1', :to => 'api.kivaws.org'
