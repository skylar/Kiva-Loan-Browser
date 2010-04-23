# ===========================================================================
# Project:   Klb
# Copyright: ©2009 Kiva Microfunds
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

# Set up some proxies for dev/debug mode
proxy '/proxy', :to => 'kivadevcamp.org'
proxy '/v1', :to => 'api.kivaws.org'
