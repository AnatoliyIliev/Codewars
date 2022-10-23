var Router = function () {
  const routers = new Map();

  this.bind = (url, method, action) => {
    routers.set(url + ':' + method, action);
  };

  this.runRequest = (url, method) => {
    if (routers.has(url + ':' + method)) {
      const result = routers.get(url + ':' + method);
      return result();
    }
    return 'Error 404: Not Found';
  };
};

var routerGET = new Router();

routerGET.bind('/hello', 'GET', function () {
  return 'hello world';
});
routerGET.bind('/login', 'GET', function () {
  return 'Please log-in.';
});

console.log(routerGET.runRequest('/hello', 'GET')); //, 'hello world');
console.log(routerGET.runRequest('/login', 'GET')); //, 'Please log-in.');

var routerPOST = new Router();

routerPOST.bind('/vote', 'POST', function () {
  return 'Voted.';
});
routerPOST.bind('/comment', 'POST', function () {
  return 'Comment sent.';
});

console.log(routerPOST.runRequest('/vote', 'POST')); //, 'Voted.');
console.log(routerPOST.runRequest('/comment', 'POST')); //, 'Comment sent.');

var routerLogin = new Router();

routerLogin.bind('/login', 'GET', function () {
  return 'Please log-in.';
});
routerLogin.bind('/login', 'POST', function () {
  return 'Logging-in.';
});

console.log(routerLogin.runRequest('/login', 'GET')); //, 'Please log-in.');
console.log(routerLogin.runRequest('/login', 'POST')); //, 'Logging-in.');

var routerError = new Router();

console.log(routerError.runRequest('/this-url-does-not-exist', 'GET')); //,    'Error 404: Not Found',

var routerPage = new Router();

routerPage.bind('/page', 'GET', function () {
  return 'First binding.';
});
routerPage.bind('/page', 'GET', function () {
  return 'Modified binding.';
});

console.log(routerPage.runRequest('/page', 'GET')); //, 'Modified binding.');

/*

6 kyu  Simple Web Framework #1: Create a basic router

In this Kata, you have to design a simple routing class for a web framework.

The router should accept bindings for a given url, http method and an action.

Then, when a request with a bound url and method comes in, it should return the result of the action.

Example usage:

var router = new Router;
router.bind('/hello', 'GET', function(){ return 'hello world'; });

router.runRequest('/hello', 'GET') // returns 'hello world';
When asked for a route that doesn't exist, router should return:

'Error 404: Not Found'
The router should also handle modifying existing routes. See the example tests for more details.

OBJECT-ORIENTED PROGRAMMING ARRAYS FUNDAMENTALS

*/
