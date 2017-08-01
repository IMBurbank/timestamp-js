Timestamp-js
=========================

Welcome to the Timestamp-js microservice.

This microservice will return a string containing Unix and natural date timestamps in json format. 

**To use,** pass a Unix or natural time string as a parameter to the url. The API will determine whether the parameter is a Unix or natural time string. API will retirn null values for invalid date strings.

Try it out [on Glitch](https://timestamp-js.glitch.me/).


Example Usage
------------

*Example Query*
- `https://timestamp-js.glitch.me/July%2031,%202017` or
- `https://timestamp-js.glitch.me/July 31, 2017` or
- `https://timestamp-js.glitch.me/1501459200000`

*Will return*
- `{"unix":1501459200000,"natural":"July 31, 2017"}`

*Example Query*
- `https://timestamp-js.glitch.me/Not a date`

*Will return*
- `{"unix":null,"natural":null}`


Made by [Isaac Burbank](https://github.com/IMBurbank)
-------------------
