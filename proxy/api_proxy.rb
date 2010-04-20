#!/usr/bin/ruby

require 'net/http'
require 'rexml/document'
require 'cgi'

#setup
method_name = 'loans'
endpoint_prefix = 'http://api.kivaws.org/v1'
methods = {'loans' => '/loans/newest.json', 'partners' => '/partners.json' }
page = 1

# get input parameters
cgi = CGI.new
if cgi.params.has_key?('method') && methods.has_key?(cgi.params['method'][0]) then
  method_name = cgi.params['method'][0]
end
if cgi.params.has_key?('page') then
  page = cgi.params['page'][0]
end


endpoint = endpoint_prefix + methods[method_name] + '?page=' + page.to_s()

# get the JSON data as a string
json_data = Net::HTTP.get_response(URI.parse(endpoint)).body

#print "HTTP/1.0 200 OK\n"
print "Content-type: application/json\n\n" 
puts json_data
