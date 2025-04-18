const { URL, URLSearchParams, fileURLToPath, parse, format } = require('url')

// URL
const dashboard_url = new URL('http://127.0.0.1:8000/api/dashboard?name=user#blog');
dashboard_url.host = '127.0.0.1:6000'
dashboard_url.username = 'aung';

console.log(dashboard_url);
console.log(dashboard_url.toString());

console.log(dashboard_url.searchParams);
console.log(typeof dashboard_url.searchParams);

dashboard_url.searchParams.set('age', 21);
dashboard_url.searchParams.append('gender', 'male');
console.log(dashboard_url);

// URLSearchParams
const myCustomeParams = new URLSearchParams;

// set searchParams
myCustomeParams.set('password', '123123');
myCustomeParams.append('password2', '123123123');
console.log(myCustomeParams);

// get searchParams 
console.log(dashboard_url.searchParams.get('name'));
console.log(dashboard_url.searchParams.get('password'));

// remove searchParams
myCustomeParams.delete("password2")

// bind new params 
dashboard_url.search += "&" + myCustomeParams.toString();
console.log(dashboard_url);

// Convert a valid file URL to a file path
const fileUrl = new URL('file:///C:/path/to/file.txt');
console.log(fileUrl);
console.log(fileURLToPath(fileUrl));

// url.parse and url.format
console.log(parse(dashboard_url.toString()));
console.log(format(dashboard_url,));

// console.log(dashboard_url.searchParams.has('name'));

// relactive url
const base = new URL('https://example.com/docs/');
const relative = new URL('guide.html', base);
console.log(relative.href); // 'https://example.com/docs/guide.html'


const allParams = () => {
    let result = {}
    for (const [key, value] of dashboard_url.searchParams.entries()) {
        result[key] = value
    }
    return result;
}
console.log(allParams());

let testObj = {
    name: 'aung',
    age: 21,
    gender: 'male'
};

console.log(Object.entries(testObj));

let res = {}
for (const [key, value] of Object.entries(testObj)) {
    res[key] = value
}
console.log(res);



