var website=prompt('website')
$.ajaxPrefilter( function (options) {
if (options.crossDomain && jQuery.support.cors) {
var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
options.url = http + '//cors-anywhere.herokuapp.com/' + website
}
});

$.get(
website,
function (response) {
document.documentElement.innerHTML=response;
});
