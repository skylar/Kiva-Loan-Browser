# ===========================================================================
# Project:   Klb
# Copyright: ©2009 Kiva Microfunds
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore, :title => 'Kiva en Français'

#disable minify for now... causing bugs?
#config :all, :minify => false

# Set up some proxies for dev/debug mode
proxy '/proxy', :to => 'kivadevcamp.org'
proxy '/v1', :to => 'api.kivaws.org'
