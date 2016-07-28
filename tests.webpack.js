var context = require.context('./public/spec', true, /-test\.js$/); 
context.keys().forEach(context);