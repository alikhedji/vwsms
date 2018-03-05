//// Twilio Credentials
//const accountSid = 'ACec14baea5a3796c2e80cd8703b9d258a';
//const authToken = '51152a1a747455ca8b0ed3a77b4de4e2';
//
//// require the Twilio module and create a REST client
//const client = require('twilio')(accountSid, authToken);
//
//client.messages
//  .create({
//    to: '+33652303751',
//    from: '+15017122661',
//    body: 'test ali',
//  })
//  .then(message => console.log(message.sid));



var twilio = require('twilio');
 
// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('ACec14baea5a3796c2e80cd8703b9d258a', '51152a1a747455ca8b0ed3a77b4de4e2');
 
// Send the text message.
client.messages.create({
   to: '+33652303751',
   from: '+18444782530',
   body: 'votre reservation a été bien prise en compte',
});

http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Votre message est bien envoyé!\n');
}).listen(3000);
console.log('Server running at port 3000');
