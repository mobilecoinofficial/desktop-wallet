Because we are choosing to statically generate our protos API, the API to interact with the grpc-objects is a little rough.

This folder cleans this up a little by making the calls more managable.

This will all probably be useless in an iteration or two once we prioritize figuring out dynamic proto loading for packaging.

I'm not exactly thrilled of the pattern of building the grpc-client from the protos => promisifying all of the functions => elsewhere, build a list of api calls that construction the appropriate Request and return the Response by taking that promisified client as the first argument. Horrible. I think, perhaps, what I'll do after everything is working is redefine the client class to include these seperate API calls as class methods, with the promisfied client initialized on construction. This is a TODO. For now, let's limp by with this mess.
