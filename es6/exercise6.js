//function swap(t1, t2) {
//    ({t2, t1} = {t1: t1, t2: t2});
//}
//let swap = (...[x, y]) => [y, x];
//
//var t1 =1, t2 =2;
//let [t1, t2] = swap(t1, t2);
//console.log(t1);
//console.log(t2);

let arr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
[a, b , ...c] = arr1;
console.log(a);
console.log(b);
console.log(c);

let phonetic = ['sierra', 'charlie'];
let [p1, p2, p3] = phonetic;

console.log(p3);

let arr2 = ['one', 'two', ['three', ['four', ['five', 'six', 'seven']], 'eight']];
let [,m,[,[,[,n,]],o]] = arr2;
console.log(m);
console.log(n);
console.log(o);

let stats = {
    packetForwarded: 5345,
    redirectSent: 427,
    forwardCacheHit: 4821,
    forwardCacheMiss: 524,
};

let {packetForwarded,redirectSent,forwardCacheHit:hits, forwardCacheMiss:misses} = stats;
console.log(hits);            // 4821
console.log(misses);          // 524

({ forwardCacheHit: myhits, forwardCacheMiss: mymisses } = stats);
console.log(hits);            
console.log(misses); 

a = 'Hello';
console.log([...a]);

function initialize(configObj={}) {
    connectTo(...[configObj.host, configObj.port]);
}

function connectTo(host='localhost', port=80) {
    console.log(`Connecting to ${host} on port ${port}`);
}

initialize();
initialize({});
initialize({host: 'localhost', port: 8080});
initialize({port: 8080});
initialize({host: 'localhost'});
