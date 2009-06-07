# ===========================================================================
# Project:   Klb
# Copyright: ©2009 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

proxy '/v1', :to => 'api.kivaws.org'
