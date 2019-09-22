onmessage=function(e){console.log(e)};
debugger;
console.log('hi there!');
console.log(self);
console.log(self.clients);
var g=new BroadcastChannel('g');
g.postMessage('windowl');
console.log(clients.claim);
