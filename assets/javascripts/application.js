$(function(){function e(){$.getJSON("/assets/search-index.json",function(e){f=e.pages,localStorage.searchIndex=JSON.stringify(f),localStorage.updated=(new Date).getTime()})}function t(){return(new Date).getTime()-parseInt(localStorage.updated,10)>864e5?!0:!1}function s(){$("#searchfield").val(""),$("#search-container").removeClass("active")}function a(e){p=[],e=e.toLowerCase();for(var t=0;t<f.length;t++){var s=f[t];-1!==s.title.toLowerCase().indexOf(e)&&p.push(s)}n(e)}function n(e){if($("#search-results").empty(),p.length<1)return void $('<li class="placeholder">No results for <em></em></li>').appendTo("#search-results").find("em").text(e);for(var t=0;t<Math.min(p.length,8);t++){var s=p[t];$('<li class="result"><a href="'+s.url+'"><em>'+s.title+"</em><small>"+s.section+"</small></a></li>").appendTo("#search-results")}$("#search-results li:first-child").addClass("selected")}function i(){$prev=$("#search-results .selected").prev(),$prev.length<1||($("#search-results .selected").removeClass("selected"),$prev.addClass("selected"))}function l(){$next=$("#search-results .selected").next(),$next.length<1||($("#search-results .selected").removeClass("selected"),$next.addClass("selected"))}function r(){var e=$("#search-results .selected a").attr("href");e&&(window.location.href=e)}var c,o=$("#js-sidebar .js-topic"),d=!0,h=function(){var e=/\/\/[^\/]+(\/.+)/g,t=e.exec(window.location.toString());t&&$("#js-sidebar .js-topic a").each(function(){$(this).parent("li").hasClass("disable")&&$(this).parent("li").removeClass("disable");var e=$(this).attr("href").toString(),s=t[1];if(e.indexOf(s)>=0&&e.length==s.length){$(this).parent("li").addClass("disable");var a=$(this).parentsUntil("div.sidebar-module > ul").last();a.addClass("js-current"),a.find(".js-expand-btn").toggleClass("collapsed expanded")}})};$("#js-sidebar .js-accordion-list .js-topic a[href*=#]").bind("click",function(e){-1==window.location.toString().indexOf($(e.target).attr("href"))&&setTimeout(h,0)}),$("body.api")&&window.location&&h(),$("#js-sidebar .js-topic").each(function(){0!=$(this).find(".disable").length&&0!=d||1==$(this).hasClass("js-current")?(c=$(this).index(),d=!1):$(this).find(".js-guides").children().hide()}),$("#js-sidebar .js-toggle-list .js-expand-btn").click(function(){var e=$(this).parents(".js-topic"),t=e.find(".js-guides li");return $(this).toggleClass("collapsed expanded"),t.slideToggle(100),!1}),$("#js-sidebar .js-accordion-list .js-topic h3 a").click(function(){var e=$(this).parents(".js-topic"),t=e.find(".js-guides li");return c!=e.index()?(o.eq(c)&&o.eq(c).find(".js-guides li").slideToggle(100),c=e.index(),t.slideToggle(100)):(c=void 0,t.slideToggle(100)),!1}),$(".help-search .search-box").focus(function(){$(this).css("background-position","0px -25px")}),$(".help-search .search-box").focusout(function(){""==$(this).val()&&$(this).css("background-position","0px 0px")});var u=(new Date).getFullYear();$.each($(".js-year"),function(){$(this).text(u)}),$.getJSON("https://status.github.com/api/status.json?callback=?",function(e){if(e){var t=$("<a>").attr("href","https://status.github.com").addClass(e.status).attr("title","API Status: "+e.status+". Click for details.").text("API Status: "+e.status);$(".api-status").html(t)}}),$(".content h1, .content h2, .content h3, .content h4").each(function(e){var t=$(this).attr("id");t&&$(this).prepend("<a class='header-anchor' href='#"+t+"'></a>")});var f,p;localStorage.searchIndex?(f=JSON.parse(localStorage.searchIndex),t()&&e()):e(),$("#searchfield").val().length>0&&($("#search-container").addClass("active"),a($("#searchfield").val())),$("#searchfield").on("input",function(e){$(this).val().length>0?$("#search-container").addClass("active"):$("#search-container").removeClass("active"),a($(this).val())}),$("body").keyup(function(e){if(83==e.keyCode){if($("#searchfield").is(":focus"))return;e.preventDefault(),$("#searchfield").focus()}}),$("#searchfield").keyup(function(e){27==e.keyCode?(e.preventDefault(),$("#searchfield").val().length>0?s():$("#searchfield").blur()):13==e.keyCode?(e.preventDefault(),r()):(8==e.keyCode||46==e.keyCode)&&($(this).val().length>0?$("#search-container").addClass("active"):$("#search-container").removeClass("active"),a($(this).val()))}).keydown(function(e){38==e.keyCode?(e.preventDefault(),i()):40==e.keyCode?(e.preventDefault(),l()):27==e.keyCode&&e.preventDefault()}),$("#search-container .search-placeholder").click(function(e){$("#searchfield").focus()}),$(".cancel-search").click(function(e){s()}),$("#search-results").on("mouseenter","li",function(e){$(this).parent().find(".selected").removeClass("selected").end().end().addClass("selected")}),$(".dev-program").length&&setTimeout(function(){$(".earth").fadeOut(),$(".earth-short-loop").show()},19e3);var g;$("ol img").each(function(e,t){return $(t).parent().prepend(t)}),$(document).on("click","ol img",function(e){var t,s;return g(),s=$(e.currentTarget).clone(),t=$('<div class="js-full-image full-image"><span class="octicon octicon-remove-close"></span></div>').prepend(s),$(this).closest("li").append(t),$(document).on("click",".js-full-image",function(){return g(),!1})}),g=function(){return $(document).off("click",".js-full-image",g),$(".js-full-image").remove()}});