/* 
* @Author: Bhargav Krishna
* @Date:   2014-08-30 00:29:17
* @Last Modified by:   Bhargav Krishna
* @Last Modified time: 2014-10-04 22:06:36
*/
'use strict';

angular.module('AwesomeHindiFont', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {
    var selectedLanguage = "hindi";
    this.languages = [{ name : 'telugu' ,label : 'తెలుగు' },
                        { name : 'hindi' ,label : 'हिन्दी' },
                        { name : 'marati' ,label : 'मराठी' },
                        { name : 'english' ,label : 'English' },
                        { name : 'nepali' ,label : 'नेपाली' }];
    var telugu = [ {src : "demos/telugu/attarintiki.te.html"},
                    {src : "demos/telugu/birbal-fever.te.html"},
                    {src : "demos/telugu/birbal-khichdi.te.html"},
                    {src : "demos/telugu/coin-bag.te.html"},
                    {src : "demos/telugu/garden-plants.te.html"},
                    {src : "demos/telugu/vishnu-glory.te.html"},
                    {src : "demos/telugu/vemana1.te.html"},
                    {src : "demos/telugu/vemana2.te.html"},
                    {src : "demos/telugu/vemana3.te.html"},
                    {src : "demos/telugu/vemana4.te.html"},
                    {src : "demos/telugu/vemana5.te.html"},
                    {src : "demos/telugu/vemana6.te.html"},
                    {src : "demos/telugu/vemana7.te.html"},
                    {src : "demos/telugu/vemana8.te.html"},
                    {src : "demos/telugu/vemana9.te.html"}];

    var hindi = [{src : "demos/hindi/icecream.hi.html"},
                {src : "demos/hindi/icecream2.hi.html"},
                {src : "demos/hindi/swan.hi.html"},
                {src : "demos/hindi/interconnect.hi.html"},
                {src : "demos/hindi/gnat-bull.hi.html"},
                {src : "demos/hindi/oak.hi.html"},
                {src : "demos/hindi/rivers.hi.html"},
                {src : "demos/hindi/the-fox-and-the-grapes.hi.html"},
                {src : "demos/hindi/two-bags.hi.html"},
                {src : "demos/hindi/moon-mother.hi.html"},
                {src : "demos/hindi/eleven.hi.html"},
                {src : "demos/hindi/rabbit.hi.html"},
                {src : "demos/hindi/bull-jackel.hi.html"},
                {src : "demos/hindi/gajraj.hi.html"},
                {src : "demos/hindi/drums.hi.html"},
                {src : "demos/hindi/stupid-ass.hi.html"},
                {src : "demos/hindi/copying.hi.html"},
                {src : "demos/hindi/talkative-turtle.hi.html"},
                {src : "demos/hindi/enemy-advice.hi.html"},
                {src : "demos/hindi/fools-learn.hi.html"},
                {src : "demos/hindi/golu-molu.hi.html"},
                {src : "demos/hindi/lion-jackel.hi.html"},
                {src : "demos/hindi/guests.hi.html"},
                {src : "demos/hindi/jackel.hi.html"},
                {src : "demos/hindi/quotes/Jean.hi.html"},
                {src : "demos/hindi/quotes/Gertrude.hi.html"},
                {src : "demos/hindi/quotes/Henry.hi.html"},
                {src : "demos/hindi/quotes/Horace.hi.html"},
                {src : "demos/hindi/quotes/James.hi.html"},
                {src : "demos/hindi/quotes/Lucius.hi.html"},
                {src : "demos/hindi/quotes/Marshall.hi.html"},
                {src : "demos/hindi/quotes/Michelangelo.hi.html"},
                {src : "demos/hindi/quotes/Oscar.hi.html"},        
                {src : "demos/hindi/quotes/Isaac.hi.html"},
                {src : "demos/hindi/quotes/Scott.hi.html"},
                {src : "demos/hindi/quotes/Carroll.hi.html"},
                {src : "demos/hindi/quotes/Ralph.hi.html"},
                {src : "demos/hindi/quotes/Jackson.hi.html"},
                {src : "demos/hindi/quotes/John.hi.html"},
                {src : "demos/hindi/quotes/Marc.hi.html"},
                {src : "demos/hindi/quotes/Henri.hi.html"},
                {src : "demos/hindi/quotes/Ludwig.hi.html"},
                {src : "demos/hindi/quotes/eorgia.hi.html"}];
    var english = [];
    var marati = [];
    var nepali = [];
    var demosMap = {
        telugu : telugu,
        hindi : hindi,
        english : english,
        marati : marati,
        nepali : nepali
    };
    // Set of demos
    $scope.demos = demosMap[selectedLanguage];

    // initial demo index
    $scope._Index = 0;

    this.changeLanguage = function (lang) {
        selectedLanguage = lang;
        $scope.demos = demosMap[selectedLanguage];
    };

    // if a current demo is the same as requested demo
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev demo
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.demos.length - 1;
    };

    // show next demo
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.demos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain demo
    $scope.showDemo = function (index) {
        $scope._Index = index;
    };
});
