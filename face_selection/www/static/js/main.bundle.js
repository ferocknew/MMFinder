!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";var o,r=function(){$("#loading").css("display","block"),$.ajax({type:"GET",url:"/api/get_face_url",dataType:"json",async:!0,success:function(n){$("#loading").css("display","none"),o=n.path,$("#mm").attr("src","/mm_images/"+n.path),$("#mm_face").attr("src","/mm_images/face-"+n.path);var t=$("#mm").height();$(".right-div").height(t)},error:function(){alert("error"),$("#loading").css("display","none")}})},i=function(n){$("#loading").css("display","block"),$.ajax({type:"GET",url:"/api/handle_face",dataType:"json",data:{path:o,opt:n},async:!0,success:function(n){console.log(n),$("#loading").css("display","none"),r()},error:function(){alert("error"),$("#loading").css("display","none")}})};$(document).ready(function(){r(),$("#like_btn").click(function(){i("like")}),$("#dislike_btn").click(function(){i("dislike")}),$("#ignore_btn").click(function(){i("ignore")})})}]);