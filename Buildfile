# ===========================================================================
# Project:   Klb
# Copyright: ©2009 Kiva Microfunds
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

proxy '/v1', :to => 'api.kivaws.org'
