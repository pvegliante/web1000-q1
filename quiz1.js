QUIZ 1

1.	An angular directive is:
		 ii. A way to define a custom element or attribute.

2.	Write the JavaScript code necessary to create a controller named "PageController"
    which prints the string "hello world" as soon as the page loads and the controller runs.

	var app = angular.module(‘PageLoad’, []);
	app.controller('PageController', [‘$scope’, function($scope) {
		$scope.page = "hello world";
}]);

3.	Given the following angular module declaration:
    var app = angular.module("CookiesApp", ['ngRoute', 'ngAnimate']);
    How do you bind this angular module to a particular portion of your html
    page (for instance the body tag)?

      <body ng-app=”CookiesApp”></body>

4.	Write a recursive function which receives an array and returns the sum of the elements of the array.
      Function recArrSum(arr){
        If(arr.length === 1) return arr[0];
          return arr[0] + recArraySum(arr.slice(1));
        }

5.	Given two temperatures, return true if one is less than 0 and the other is greater than 100.
      Function blah(a, b){
        If (a || b < 0 && a || b > 100){
          return true;
        }

6.	Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
      Function makesTen(a, b){
	       If(a + b == 10 && a || b == 10){
		         return true;
           }
         }

7.  Given a string, take the first 2 chars and return the string with the 2 chars
    added at both the front and back, so "kitten" yields"kikittenki". If the string
    length is less than 2, use whatever chars are there.
      a.	front22("kitten") → "kikittenki"
      b.	front22("Ha") → "HaHaHa"
      c.	front22("abc") → "ababcab"

8.  Write an angular-based web form with two text inputs and one button. Label your
    inputs "name" and "phone." When clicked, the button should log the contents of
    the text input to the console.
