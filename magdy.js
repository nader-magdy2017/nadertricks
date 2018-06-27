// Plugin: SelectNav.js ~ url: https://github.com/lukaszfiszer/selectnav.js
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"-",u=n.label||"«·ﬁ«∆„…",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();

(function($){$.fn.tickerme=function(options){var opts=$.extend({},$.fn.tickerme.defaults,options);return this.each(function(){var ticker=$(this);var control_definitions='<svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="224" height="32" viewBox="0 0 224 32"><defs><g id="icon-play"><path class="path1" d="M6 4l20 12-20 12z"></path></g><g id="icon-pause"><path class="path1" d="M4 4h10v24h-10zM18 4h10v24h-10z"></path></g><g id="icon-prev"><path class="path1" d="M18 5v10l10-10v22l-10-10v10l-11-11z"></path></g><g id="icon-next"><path class="path1" d="M16 27v-10l-10 10v-22l10 10v-10l11 11z"></path></g></defs></svg>';var control_styles='<style type="text/css">#ticker_container{width:100%}#newscontent{}#news{display:none}#controls{float:left;height:16px}.news-icon{display:inline-block;width:16px;height:16px;fill:'+opts.control_colour+'}.icon:hover{fill:'+opts.control_rollover+'}</style>';var contents=[];var position=-1;var timer;init();function init(){$(ticker).hide();$('body').prepend(control_definitions).prepend(control_styles);var controls='<div id="ticker_container">';controls+='<div id="newscontent"><div id="news"></div></div>';controls+='<div id="controls">';controls+='<a href="#" id="pause_trigger"><svg class="news-icon icon-pause" viewBox="0 0 32 32"><use xlink:href="#icon-pause"></use></svg></a>';controls+='<a href="#" id="play_trigger" style="display:none"><svg class="news-icon icon-play" viewBox="0 0 32 32"><use xlink:href="#icon-play"></use></svg></a>';controls+='<a href="#" id="prev_trigger"><svg class="news-icon icon-prev" viewBox="0 0 32 32"><use xlink:href="#icon-prev"></use></svg></a>';controls+='<a href="#" id="next_trigger"><svg class="news-icon icon-next" viewBox="0 0 32 32"><use xlink:href="#icon-next"></use></svg></a>';controls+='</div>';controls+='</div>';$(controls).insertAfter(ticker);$(ticker).children().each(function(i){contents[i]=($(this).html());});load_container();}
function load_container(){if(position==(contents.length-1)){position=0;}else{position++;}
if(opts.type=='fade'){$('#news').fadeOut(opts.fade_speed,function(){$('#newscontent').html('<div id="news">'+contents[position]+'</div>');$('#news').fadeIn(opts.fade_speed);});}
timer=setTimeout(load_container,opts.duration);}
$('a#pause_trigger').click(function(){clearTimeout(timer);$(this).hide();$('#play_trigger').show();return false;});$('a#play_trigger').click(function(){load_container();$(this).hide();$('#pause_trigger').show();return false;});$('a#prev_trigger').click(function(){if(position==0){position=(contents.length-1);}else{position--;}
$('#newscontent').html('<div id="news" style="display:block">'+contents[position]+'</div>');if(opts.auto_stop)$('a#pause_trigger').trigger('click');return false;});$('a#next_trigger').click(function(){if(position==(contents.length-1)){position=0;}else{position++;}
$('#newscontent').html('<div id="news" style="display:block">'+contents[position]+'</div>');if(opts.auto_stop)$('a#pause_trigger').trigger('click');return false;});});};$.fn.tickerme.defaults={fade_speed:500,duration:3000,auto_stop:true,type:'fade',control_colour:'#333333',control_rollover:'#666666'};}(jQuery));

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);

// Theia Sticky Sidebar v1.3.0 - https://github.com/WeCodePixels/theia-sticky-sidebar
!function(i){i.fn.theiaStickySidebar=function(t){function o(t,o){var a=e(t,o);a||(console.log("TST: Body width smaller than options.minWidth. Init is delayed."),i(document).scroll(function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).resize(function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}function e(t,o){return t.initialized===!0?!0:i("body").width()<t.minWidth?!1:(a(t,o),!0)}function a(t,o){t.initialized=!0,i("head").append(i('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),o.each(function(){function o(){a.fixedScrollTop=0,a.sidebar.css({"min-height":"1px"}),a.stickySidebar.css({position:"static",width:""})}function e(t){var o=t.height();return t.children().each(function(){o=Math.max(o,i(this).height())}),o}var a={};a.sidebar=i(this),a.options=t||{},a.container=i(a.options.containerSelector),0==a.container.size()&&(a.container=a.sidebar.parent()),a.sidebar.parents().css("-webkit-transform","none"),a.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.stickySidebar=a.sidebar.find(".theiaStickySidebar"),0==a.stickySidebar.length&&(a.sidebar.find("script").remove(),a.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()),a.sidebar.append(a.stickySidebar)),a.marginTop=parseInt(a.sidebar.css("margin-top")),a.marginBottom=parseInt(a.sidebar.css("margin-bottom")),a.paddingTop=parseInt(a.sidebar.css("padding-top")),a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var n=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1),a.stickySidebar.css("padding-bottom",1),n-=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight()-d-n,0==n?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1,0==d?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1,a.previousScrollTop=null,a.fixedScrollTop=0,o(),a.onScroll=function(a){if(a.stickySidebar.is(":visible")){if(i("body").width()<a.options.minWidth)return void o();if(a.sidebar.outerWidth(!0)+50>a.container.width())return void o();var n=i(document).scrollTop(),d="static";if(n>=a.container.offset().top+(a.paddingTop+a.marginTop-a.options.additionalMarginTop)){var r,s=a.paddingTop+a.marginTop+t.additionalMarginTop,c=a.paddingBottom+a.marginBottom+t.additionalMarginBottom,p=a.container.offset().top,b=a.container.offset().top+e(a.container),g=0+t.additionalMarginTop,l=a.stickySidebar.outerHeight()+s+c<i(window).height();r=l?g+a.stickySidebar.outerHeight():i(window).height()-a.marginBottom-a.paddingBottom-t.additionalMarginBottom;var h=p-n+a.paddingTop+a.marginTop,f=b-n-a.paddingBottom-a.marginBottom,S=a.stickySidebar.offset().top-n,u=a.previousScrollTop-n;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(S+=u),"legacy"==a.options.sidebarBehavior&&(S=r-a.stickySidebar.outerHeight(),S=Math.max(S,r-a.stickySidebar.outerHeight())),S=u>0?Math.min(S,g):Math.max(S,r-a.stickySidebar.outerHeight()),S=Math.max(S,h),S=Math.min(S,f-a.stickySidebar.outerHeight());var m=a.container.height()==a.stickySidebar.outerHeight();d=(m||S!=g)&&(m||S!=r-a.stickySidebar.outerHeight())?n+S-a.sidebar.offset().top-a.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==d)a.stickySidebar.css({position:"fixed",width:a.sidebar.width(),top:S,left:a.sidebar.offset().left+parseInt(a.sidebar.css("padding-left"))});else if("absolute"==d){var y={};"absolute"!=a.stickySidebar.css("position")&&(y.position="absolute",y.top=n+S-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom),y.width=a.sidebar.width(),y.left="",a.stickySidebar.css(y)}else"static"==d&&o();"static"!=d&&1==a.options.updateSidebarHeight&&a.sidebar.css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=n}},a.onScroll(a),i(document).scroll(function(i){return function(){i.onScroll(i)}}(a)),i(window).resize(function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(a))})}var n={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,sidebarBehavior:"modern"};t=i.extend(n,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,o(t,this)}}(jQuery);

// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a){a.fn.simplyTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>');c.addClass("content-tab").each(function(){a(this).hide();e.find(".wrap-tab").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".wrap-tab a").on("click",function(){var f=a(this).parent().index();a(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);

// Plugin: jQuery owl Slider v2.2 
;(function($,window,document,undefined){function Owl(element,options){this.settings=null;this.options=$.extend({},Owl.Defaults,options);this.$element=$(element);this._handlers={};this._plugins={};this._supress={};this._current=null;this._speed=null;this._coordinates=[];this._breakpoint=null;this._width=null;this._items=[];this._clones=[];this._mergers=[];this._widths=[];this._invalidated={};this._pipe=[];this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null};this._states={current:{},tags:{'initializing':['busy'],'animating':['busy'],'dragging':['interacting']}};$.each(['onResize','onThrottledResize'],$.proxy(function(i,handler){this._handlers[handler]=$.proxy(this[handler],this);},this));$.each(Owl.Plugins,$.proxy(function(key,plugin){this._plugins[key.charAt(0).toLowerCase()+key.slice(1)]=new plugin(this);},this));$.each(Owl.Workers,$.proxy(function(priority,worker){this._pipe.push({'filter':worker.filter,'run':$.proxy(worker.run,this)});},this));this.setup();this.initialize();}
Owl.Defaults={items:3,loop:false,center:false,rewind:false,mouseDrag:true,touchDrag:true,pullDrag:true,freeDrag:false,margin:0,stagePadding:0,merge:false,mergeFit:true,autoWidth:false,startPosition:0,rtl:false,smartSpeed:250,fluidSpeed:false,dragEndSpeed:false,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:window,fallbackEasing:'swing',info:false,nestedItemSelector:false,itemElement:'div',stageElement:'div',refreshClass:'owl-refresh',loadedClass:'owl-loaded',loadingClass:'owl-loading',rtlClass:'owl-rtl',responsiveClass:'owl-responsive',dragClass:'owl-drag',itemClass:'owl-item',stageClass:'owl-stage',stageOuterClass:'owl-stage-outer',grabClass:'owl-grab'};Owl.Width={Default:'default',Inner:'inner',Outer:'outer'};Owl.Type={Event:'event',State:'state'};Owl.Plugins={};Owl.Workers=[{filter:['width','settings'],run:function(){this._width=this.$element.width();}},{filter:['width','items','settings'],run:function(cache){cache.current=this._items&&this._items[this.relative(this._current)];}},{filter:['items','settings'],run:function(){this.$stage.children('.cloned').remove();}},{filter:['width','items','settings'],run:function(cache){var margin=this.settings.margin||'',grid=!this.settings.autoWidth,rtl=this.settings.rtl,css={'width':'auto','margin-left':rtl?margin:'','margin-right':rtl?'':margin};!grid&&this.$stage.children().css(css);cache.css=css;}},{filter:['width','items','settings'],run:function(cache){var width=(this.width()/ this.settings.items).toFixed(3)-this.settings.margin,merge=null,iterator=this._items.length,grid=!this.settings.autoWidth,widths=[];cache.items={merge:false,width:width};while(iterator--){merge=this._mergers[iterator];merge=this.settings.mergeFit&&Math.min(merge,this.settings.items)||merge;cache.items.merge=merge>1||cache.items.merge;widths[iterator]=!grid?this._items[iterator].width():width*merge;}
this._widths=widths;}},{filter:['items','settings'],run:function(){var clones=[],items=this._items,settings=this.settings,view=Math.max(settings.items*2,4),size=Math.ceil(items.length / 2)*2,repeat=settings.loop&&items.length?settings.rewind?view:Math.max(view,size):0,append='',prepend='';repeat /=2;while(repeat--){clones.push(this.normalize(clones.length / 2,true));append=append+items[clones[clones.length-1]][0].outerHTML;clones.push(this.normalize(items.length-1-(clones.length-1)/ 2,true));prepend=items[clones[clones.length-1]][0].outerHTML+prepend;}
this._clones=clones;$(append).addClass('cloned').appendTo(this.$stage);$(prepend).addClass('cloned').prependTo(this.$stage);}},{filter:['width','items','settings'],run:function(){var rtl=this.settings.rtl?1:-1,size=this._clones.length+this._items.length,iterator=-1,previous=0,current=0,coordinates=[];while(++iterator<size){previous=coordinates[iterator-1]||0;current=this._widths[this.relative(iterator)]+this.settings.margin;coordinates.push(previous+current*rtl);}
this._coordinates=coordinates;}},{filter:['width','items','settings'],run:function(){var padding=this.settings.stagePadding,coordinates=this._coordinates,css={'width':Math.ceil(Math.abs(coordinates[coordinates.length-1]))+padding*2,'padding-left':padding||'','padding-right':padding||''};this.$stage.css(css);}},{filter:['width','items','settings'],run:function(cache){var iterator=this._coordinates.length,grid=!this.settings.autoWidth,items=this.$stage.children();if(grid&&cache.items.merge){while(iterator--){cache.css.width=this._widths[this.relative(iterator)];items.eq(iterator).css(cache.css);}}else if(grid){cache.css.width=cache.items.width;items.css(cache.css);}}},{filter:['items'],run:function(){this._coordinates.length<1&&this.$stage.removeAttr('style');}},{filter:['width','items','settings'],run:function(cache){cache.current=cache.current?this.$stage.children().index(cache.current):0;cache.current=Math.max(this.minimum(),Math.min(this.maximum(),cache.current));this.reset(cache.current);}},{filter:['position'],run:function(){this.animate(this.coordinates(this._current));}},{filter:['width','position','items','settings'],run:function(){var rtl=this.settings.rtl?1:-1,padding=this.settings.stagePadding*2,begin=this.coordinates(this.current())+padding,end=begin+this.width()*rtl,inner,outer,matches=[],i,n;for(i=0,n=this._coordinates.length;i<n;i++){inner=this._coordinates[i-1]||0;outer=Math.abs(this._coordinates[i])+padding*rtl;if((this.op(inner,'<=',begin)&&(this.op(inner,'>',end)))||(this.op(outer,'<',begin)&&this.op(outer,'>',end))){matches.push(i);}}
this.$stage.children('.active').removeClass('active');this.$stage.children(':eq('+matches.join('), :eq(')+')').addClass('active');if(this.settings.center){this.$stage.children('.center').removeClass('center');this.$stage.children().eq(this.current()).addClass('center');}}}];Owl.prototype.initialize=function(){this.enter('initializing');this.trigger('initialize');this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl);if(this.settings.autoWidth&&!this.is('pre-loading')){var imgs,nestedSelector,width;imgs=this.$element.find('img');nestedSelector=this.settings.nestedItemSelector?'.'+this.settings.nestedItemSelector:undefined;width=this.$element.children(nestedSelector).width();if(imgs.length&&width<=0){this.preloadAutoWidthImages(imgs);}}
this.$element.addClass(this.options.loadingClass);this.$stage=$('<'+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>');this.$element.append(this.$stage.parent());this.replace(this.$element.children().not(this.$stage.parent()));if(this.$element.is(':visible')){this.refresh();}else{this.invalidate('width');}
this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);this.registerEventHandlers();this.leave('initializing');this.trigger('initialized');};Owl.prototype.setup=function(){var viewport=this.viewport(),overwrites=this.options.responsive,match=-1,settings=null;if(!overwrites){settings=$.extend({},this.options);}else{$.each(overwrites,function(breakpoint){if(breakpoint<=viewport&&breakpoint>match){match=Number(breakpoint);}});settings=$.extend({},this.options,overwrites[match]);if(typeof settings.stagePadding==='function'){settings.stagePadding=settings.stagePadding();}
delete settings.responsive;if(settings.responsiveClass){this.$element.attr('class',this.$element.attr('class').replace(new RegExp('('+this.options.responsiveClass+'-)\\S+\\s','g'),'$1'+match));}}
this.trigger('change',{property:{name:'settings',value:settings}});this._breakpoint=match;this.settings=settings;this.invalidate('settings');this.trigger('changed',{property:{name:'settings',value:this.settings}});};Owl.prototype.optionsLogic=function(){if(this.settings.autoWidth){this.settings.stagePadding=false;this.settings.merge=false;}};Owl.prototype.prepare=function(item){var event=this.trigger('prepare',{content:item});if(!event.data){event.data=$('<'+this.settings.itemElement+'/>').addClass(this.options.itemClass).append(item)}
this.trigger('prepared',{content:event.data});return event.data;};Owl.prototype.update=function(){var i=0,n=this._pipe.length,filter=$.proxy(function(p){return this[p]},this._invalidated),cache={};while(i<n){if(this._invalidated.all||$.grep(this._pipe[i].filter,filter).length>0){this._pipe[i].run(cache);}
i++;}
this._invalidated={};!this.is('valid')&&this.enter('valid');};Owl.prototype.width=function(dimension){dimension=dimension||Owl.Width.Default;switch(dimension){case Owl.Width.Inner:case Owl.Width.Outer:return this._width;default:return this._width-this.settings.stagePadding*2+this.settings.margin;}};Owl.prototype.refresh=function(){this.enter('refreshing');this.trigger('refresh');this.setup();this.optionsLogic();this.$element.addClass(this.options.refreshClass);this.update();this.$element.removeClass(this.options.refreshClass);this.leave('refreshing');this.trigger('refreshed');};Owl.prototype.onThrottledResize=function(){window.clearTimeout(this.resizeTimer);this.resizeTimer=window.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate);};Owl.prototype.onResize=function(){if(!this._items.length){return false;}
if(this._width===this.$element.width()){return false;}
if(!this.$element.is(':visible')){return false;}
this.enter('resizing');if(this.trigger('resize').isDefaultPrevented()){this.leave('resizing');return false;}
this.invalidate('width');this.refresh();this.leave('resizing');this.trigger('resized');};Owl.prototype.registerEventHandlers=function(){if($.support.transition){this.$stage.on($.support.transition.end+'.owl.core',$.proxy(this.onTransitionEnd,this));}
if(this.settings.responsive!==false){this.on(window,'resize',this._handlers.onThrottledResize);}
if(this.settings.mouseDrag){this.$element.addClass(this.options.dragClass);this.$stage.on('mousedown.owl.core',$.proxy(this.onDragStart,this));this.$stage.on('dragstart.owl.core selectstart.owl.core',function(){return false});}
if(this.settings.touchDrag){this.$stage.on('touchstart.owl.core',$.proxy(this.onDragStart,this));this.$stage.on('touchcancel.owl.core',$.proxy(this.onDragEnd,this));}};Owl.prototype.onDragStart=function(event){var stage=null;if(event.which===3){return;}
if($.support.transform){stage=this.$stage.css('transform').replace(/.*\(|\)| /g,'').split(',');stage={x:stage[stage.length===16?12:4],y:stage[stage.length===16?13:5]};}else{stage=this.$stage.position();stage={x:this.settings.rtl?stage.right+this.$stage.width()-this.width()+this.settings.margin:stage.right,y:stage.top};}
if(this.is('animating')){$.support.transform?this.animate(stage.x):this.$stage.stop()
this.invalidate('position');}
this.$element.toggleClass(this.options.grabClass,event.type==='mousedown');this.speed(0);this._drag.time=new Date().getTime();this._drag.target=$(event.target);this._drag.stage.start=stage;this._drag.stage.current=stage;this._drag.pointer=this.pointer(event);$(document).on('mouseup.owl.core touchend.owl.core',$.proxy(this.onDragEnd,this));$(document).one('mousemove.owl.core touchmove.owl.core',$.proxy(function(event){var delta=this.difference(this._drag.pointer,this.pointer(event));$(document).on('mousemove.owl.core touchmove.owl.core',$.proxy(this.onDragMove,this));if(Math.abs(delta.x)<Math.abs(delta.y)&&this.is('valid')){return;}
event.preventDefault();this.enter('dragging');this.trigger('drag');},this));};Owl.prototype.onDragMove=function(event){var minimum=null,maximum=null,pull=null,delta=this.difference(this._drag.pointer,this.pointer(event)),stage=this.difference(this._drag.stage.start,delta);if(!this.is('dragging')){return;}
event.preventDefault();if(this.settings.loop){minimum=this.coordinates(this.minimum());maximum=this.coordinates(this.maximum()+1)-minimum;stage.x=(((stage.x-minimum)%maximum+maximum)%maximum)+minimum;}else{minimum=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum());maximum=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum());pull=this.settings.pullDrag?-1*delta.x / 5:0;stage.x=Math.max(Math.min(stage.x,minimum+pull),maximum+pull);}
this._drag.stage.current=stage;this.animate(stage.x);};Owl.prototype.onDragEnd=function(event){var delta=this.difference(this._drag.pointer,this.pointer(event)),stage=this._drag.stage.current,direction=delta.x>0^this.settings.rtl?'right':'left';$(document).off('.owl.core');this.$element.removeClass(this.options.grabClass);if(delta.x!==0&&this.is('dragging')||!this.is('valid')){this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed);this.current(this.closest(stage.x,delta.x!==0?direction:this._drag.direction));this.invalidate('position');this.update();this._drag.direction=direction;if(Math.abs(delta.x)>3||new Date().getTime()-this._drag.time>300){this._drag.target.one('click.owl.core',function(){return false;});}}
if(!this.is('dragging')){return;}
this.leave('dragging');this.trigger('dragged');};Owl.prototype.closest=function(coordinate,direction){var position=-1,pull=30,width=this.width(),coordinates=this.coordinates();if(!this.settings.freeDrag){$.each(coordinates,$.proxy(function(index,value){if(direction==='right'&&coordinate>value-pull&&coordinate<value+pull){position=index;}else if(direction==='left'&&coordinate>value-width-pull&&coordinate<value-width+pull){position=index+1;}else if(this.op(coordinate,'<',value)&&this.op(coordinate,'>',coordinates[index+1]||value-width)){position=direction==='right'?index+1:index;}
return position===-1;},this));}
if(!this.settings.loop){if(this.op(coordinate,'>',coordinates[this.minimum()])){position=coordinate=this.minimum();}else if(this.op(coordinate,'<',coordinates[this.maximum()])){position=coordinate=this.maximum();}}
return position;};Owl.prototype.animate=function(coordinate){var animate=this.speed()>0;this.is('animating')&&this.onTransitionEnd();if(animate){this.enter('animating');this.trigger('translate');}
if($.support.transform3d&&$.support.transition){this.$stage.css({transform:'translate3d('+coordinate+'px,0px,0px)',transition:(this.speed()/ 1000)+'s'});}else if(animate){this.$stage.animate({right:coordinate+'px'},this.speed(),this.settings.fallbackEasing,$.proxy(this.onTransitionEnd,this));}else{this.$stage.css({right:coordinate+'px'});}};Owl.prototype.is=function(state){return this._states.current[state]&&this._states.current[state]>0;};Owl.prototype.current=function(position){if(position===undefined){return this._current;}
if(this._items.length===0){return undefined;}
position=this.normalize(position);if(this._current!==position){var event=this.trigger('change',{property:{name:'position',value:position}});if(event.data!==undefined){position=this.normalize(event.data);}
this._current=position;this.invalidate('position');this.trigger('changed',{property:{name:'position',value:this._current}});}
return this._current;};Owl.prototype.invalidate=function(part){if($.type(part)==='string'){this._invalidated[part]=true;this.is('valid')&&this.leave('valid');}
return $.map(this._invalidated,function(v,i){return i});};Owl.prototype.reset=function(position){position=this.normalize(position);if(position===undefined){return;}
this._speed=0;this._current=position;this.suppress(['translate','translated']);this.animate(this.coordinates(position));this.release(['translate','translated']);};Owl.prototype.normalize=function(position,relative){var n=this._items.length,m=relative?0:this._clones.length;if(!this.isNumeric(position)||n<1){position=undefined;}else if(position<0||position>=n+m){position=((position-m / 2)%n+n)%n+m / 2;}
return position;};Owl.prototype.relative=function(position){position-=this._clones.length / 2;return this.normalize(position,true);};Owl.prototype.maximum=function(relative){var settings=this.settings,maximum=this._coordinates.length,iterator,reciprocalItemsWidth,elementWidth;if(settings.loop){maximum=this._clones.length / 2+this._items.length-1;}else if(settings.autoWidth||settings.merge){iterator=this._items.length;reciprocalItemsWidth=this._items[--iterator].width();elementWidth=this.$element.width();while(iterator--){reciprocalItemsWidth+=this._items[iterator].width()+this.settings.margin;if(reciprocalItemsWidth>elementWidth){break;}}
maximum=iterator+1;}else if(settings.center){maximum=this._items.length-1;}else{maximum=this._items.length-settings.items;}
if(relative){maximum-=this._clones.length / 2;}
return Math.max(maximum,0);};Owl.prototype.minimum=function(relative){return relative?0:this._clones.length / 2;};Owl.prototype.items=function(position){if(position===undefined){return this._items.slice();}
position=this.normalize(position,true);return this._items[position];};Owl.prototype.mergers=function(position){if(position===undefined){return this._mergers.slice();}
position=this.normalize(position,true);return this._mergers[position];};Owl.prototype.clones=function(position){var odd=this._clones.length / 2,even=odd+this._items.length,map=function(index){return index%2===0?even+index / 2:odd-(index+1)/ 2};if(position===undefined){return $.map(this._clones,function(v,i){return map(i)});}
return $.map(this._clones,function(v,i){return v===position?map(i):null});};Owl.prototype.speed=function(speed){if(speed!==undefined){this._speed=speed;}
return this._speed;};Owl.prototype.coordinates=function(position){var multiplier=1,newPosition=position-1,coordinate;if(position===undefined){return $.map(this._coordinates,$.proxy(function(coordinate,index){return this.coordinates(index);},this));}
if(this.settings.center){if(this.settings.rtl){multiplier=-1;newPosition=position+1;}
coordinate=this._coordinates[position];coordinate+=(this.width()-coordinate+(this._coordinates[newPosition]||0))/ 2*multiplier;}else{coordinate=this._coordinates[newPosition]||0;}
coordinate=Math.ceil(coordinate);return coordinate;};Owl.prototype.duration=function(from,to,factor){if(factor===0){return 0;}
return Math.min(Math.max(Math.abs(to-from),1),6)*Math.abs((factor||this.settings.smartSpeed));};Owl.prototype.to=function(position,speed){var current=this.current(),revert=null,distance=position-this.relative(current),direction=(distance>0)-(distance<0),items=this._items.length,minimum=this.minimum(),maximum=this.maximum();if(this.settings.loop){if(!this.settings.rewind&&Math.abs(distance)>items / 2){distance+=direction*-1*items;}
position=current+distance;revert=((position-minimum)%items+items)%items+minimum;if(revert!==position&&revert-distance<=maximum&&revert-distance>0){current=revert-distance;position=revert;this.reset(current);}}else if(this.settings.rewind){maximum+=1;position=(position%maximum+maximum)%maximum;}else{position=Math.max(minimum,Math.min(maximum,position));}
this.speed(this.duration(current,position,speed));this.current(position);if(this.$element.is(':visible')){this.update();}};Owl.prototype.next=function(speed){speed=speed||false;this.to(this.relative(this.current())+1,speed);};Owl.prototype.prev=function(speed){speed=speed||false;this.to(this.relative(this.current())-1,speed);};Owl.prototype.onTransitionEnd=function(event){if(event!==undefined){event.stopPropagation();if((event.target||event.srcElement||event.originalTarget)!==this.$stage.get(0)){return false;}}
this.leave('animating');this.trigger('translated');};Owl.prototype.viewport=function(){var width;if(this.options.responsiveBaseElement!==window){width=$(this.options.responsiveBaseElement).width();}else if(window.innerWidth){width=window.innerWidth;}else if(document.documentElement&&document.documentElement.clientWidth){width=document.documentElement.clientWidth;}else{console.warn('Can not detect viewport width.');}
return width;};Owl.prototype.replace=function(content){this.$stage.empty();this._items=[];if(content){content=(content instanceof jQuery)?content:$(content);}
if(this.settings.nestedItemSelector){content=content.find('.'+this.settings.nestedItemSelector);}
content.filter(function(){return this.nodeType===1;}).each($.proxy(function(index,item){item=this.prepare(item);this.$stage.append(item);this._items.push(item);this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge')*1||1);},this));this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0);this.invalidate('items');};Owl.prototype.add=function(content,position){var current=this.relative(this._current);position=position===undefined?this._items.length:this.normalize(position,true);content=content instanceof jQuery?content:$(content);this.trigger('add',{content:content,position:position});content=this.prepare(content);if(this._items.length===0||position===this._items.length){this._items.length===0&&this.$stage.append(content);this._items.length!==0&&this._items[position-1].after(content);this._items.push(content);this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge')*1||1);}else{this._items[position].before(content);this._items.splice(position,0,content);this._mergers.splice(position,0,content.find('[data-merge]').addBack('[data-merge]').attr('data-merge')*1||1);}
this._items[current]&&this.reset(this._items[current].index());this.invalidate('items');this.trigger('added',{content:content,position:position});};Owl.prototype.remove=function(position){position=this.normalize(position,true);if(position===undefined){return;}
this.trigger('remove',{content:this._items[position],position:position});this._items[position].remove();this._items.splice(position,1);this._mergers.splice(position,1);this.invalidate('items');this.trigger('removed',{content:null,position:position});};Owl.prototype.preloadAutoWidthImages=function(images){images.each($.proxy(function(i,element){this.enter('pre-loading');element=$(element);$(new Image()).one('load',$.proxy(function(e){element.attr('src',e.target.src);element.css('opacity',1);this.leave('pre-loading');!this.is('pre-loading')&&!this.is('initializing')&&this.refresh();},this)).attr('src',element.attr('src')||element.attr('data-src')||element.attr('data-src-retina'));},this));};Owl.prototype.destroy=function(){this.$element.off('.owl.core');this.$stage.off('.owl.core');$(document).off('.owl.core');if(this.settings.responsive!==false){window.clearTimeout(this.resizeTimer);this.off(window,'resize',this._handlers.onThrottledResize);}
for(var i in this._plugins){this._plugins[i].destroy();}
this.$stage.children('.cloned').remove();this.$stage.unwrap();this.$stage.children().contents().unwrap();this.$stage.children().unwrap();this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class',this.$element.attr('class').replace(new RegExp(this.options.responsiveClass+'-\\S+\\s','g'),'')).removeData('owl.carousel');};Owl.prototype.op=function(a,o,b){var rtl=this.settings.rtl;switch(o){case'<':return rtl?a>b:a<b;case'>':return rtl?a<b:a>b;case'>=':return rtl?a<=b:a>=b;case'<=':return rtl?a>=b:a<=b;default:break;}};Owl.prototype.on=function(element,event,listener,capture){if(element.addEventListener){element.addEventListener(event,listener,capture);}else if(element.attachEvent){element.attachEvent('on'+event,listener);}};Owl.prototype.off=function(element,event,listener,capture){if(element.removeEventListener){element.removeEventListener(event,listener,capture);}else if(element.detachEvent){element.detachEvent('on'+event,listener);}};Owl.prototype.trigger=function(name,data,namespace,state,enter){var status={item:{count:this._items.length,index:this.current()}},handler=$.camelCase($.grep(['on',name,namespace],function(v){return v}).join('-').toLowerCase()),event=$.Event([name,'owl',namespace||'carousel'].join('.').toLowerCase(),$.extend({relatedTarget:this},status,data));if(!this._supress[name]){$.each(this._plugins,function(name,plugin){if(plugin.onTrigger){plugin.onTrigger(event);}});this.register({type:Owl.Type.Event,name:name});this.$element.trigger(event);if(this.settings&&typeof this.settings[handler]==='function'){this.settings[handler].call(this,event);}}
return event;};Owl.prototype.enter=function(name){$.each([name].concat(this._states.tags[name]||[]),$.proxy(function(i,name){if(this._states.current[name]===undefined){this._states.current[name]=0;}
this._states.current[name]++;},this));};Owl.prototype.leave=function(name){$.each([name].concat(this._states.tags[name]||[]),$.proxy(function(i,name){this._states.current[name]--;},this));};Owl.prototype.register=function(object){if(object.type===Owl.Type.Event){if(!$.event.special[object.name]){$.event.special[object.name]={};}
if(!$.event.special[object.name].owl){var _default=$.event.special[object.name]._default;$.event.special[object.name]._default=function(e){if(_default&&_default.apply&&(!e.namespace||e.namespace.indexOf('owl')===-1)){return _default.apply(this,arguments);}
return e.namespace&&e.namespace.indexOf('owl')>-1;};$.event.special[object.name].owl=true;}}else if(object.type===Owl.Type.State){if(!this._states.tags[object.name]){this._states.tags[object.name]=object.tags;}else{this._states.tags[object.name]=this._states.tags[object.name].concat(object.tags);}
this._states.tags[object.name]=$.grep(this._states.tags[object.name],$.proxy(function(tag,i){return $.inArray(tag,this._states.tags[object.name])===i;},this));}};Owl.prototype.suppress=function(events){$.each(events,$.proxy(function(index,event){this._supress[event]=true;},this));};Owl.prototype.release=function(events){$.each(events,$.proxy(function(index,event){delete this._supress[event];},this));};Owl.prototype.pointer=function(event){var result={x:null,y:null};event=event.originalEvent||event||window.event;event=event.touches&&event.touches.length?event.touches[0]:event.changedTouches&&event.changedTouches.length?event.changedTouches[0]:event;if(event.pageX){result.x=event.pageX;result.y=event.pageY;}else{result.x=event.clientX;result.y=event.clientY;}
return result;};Owl.prototype.isNumeric=function(number){return!isNaN(parseFloat(number));};Owl.prototype.difference=function(first,second){return{x:first.x-second.x,y:first.y-second.y};};$.fn.owlCarousel=function(option){var args=Array.prototype.slice.call(arguments,1);return this.each(function(){var $this=$(this),data=$this.data('owl.carousel');if(!data){data=new Owl(this,typeof option=='object'&&option);$this.data('owl.carousel',data);$.each(['next','prev','to','destroy','refresh','replace','add','remove'],function(i,event){data.register({type:Owl.Type.Event,name:event});data.$element.on(event+'.owl.carousel.core',$.proxy(function(e){if(e.namespace&&e.relatedTarget!==this){this.suppress([event]);data[event].apply(this,[].slice.call(arguments,1));this.release([event]);}},data));});}
if(typeof option=='string'&&option.charAt(0)!=='_'){data[option].apply(data,args);}});};$.fn.owlCarousel.Constructor=Owl;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var AutoRefresh=function(carousel){this._core=carousel;this._interval=null;this._visible=null;this._handlers={'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoRefresh){this.watch();}},this)};this._core.options=$.extend({},AutoRefresh.Defaults,this._core.options);this._core.$element.on(this._handlers);};AutoRefresh.Defaults={autoRefresh:true,autoRefreshInterval:500};AutoRefresh.prototype.watch=function(){if(this._interval){return;}
this._visible=this._core.$element.is(':visible');this._interval=window.setInterval($.proxy(this.refresh,this),this._core.settings.autoRefreshInterval);};AutoRefresh.prototype.refresh=function(){if(this._core.$element.is(':visible')===this._visible){return;}
this._visible=!this._visible;this._core.$element.toggleClass('owl-hidden',!this._visible);this._visible&&(this._core.invalidate('width')&&this._core.refresh());};AutoRefresh.prototype.destroy=function(){var handler,property;window.clearInterval(this._interval);for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.AutoRefresh=AutoRefresh;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var Lazy=function(carousel){this._core=carousel;this._loaded=[];this._handlers={'initialized.owl.carousel change.owl.carousel resized.owl.carousel':$.proxy(function(e){if(!e.namespace){return;}
if(!this._core.settings||!this._core.settings.lazyLoad){return;}
if((e.property&&e.property.name=='position')||e.type=='initialized'){var settings=this._core.settings,n=(settings.center&&Math.ceil(settings.items / 2)||settings.items),i=((settings.center&&n*-1)||0),position=(e.property&&e.property.value!==undefined?e.property.value:this._core.current())+i,clones=this._core.clones().length,load=$.proxy(function(i,v){this.load(v)},this);while(i++<n){this.load(clones / 2+this._core.relative(position));clones&&$.each(this._core.clones(this._core.relative(position)),load);position++;}}},this)};this._core.options=$.extend({},Lazy.Defaults,this._core.options);this._core.$element.on(this._handlers);};Lazy.Defaults={lazyLoad:false};Lazy.prototype.load=function(position){var $item=this._core.$stage.children().eq(position),$elements=$item&&$item.find('.owl-lazy');if(!$elements||$.inArray($item.get(0),this._loaded)>-1){return;}
$elements.each($.proxy(function(index,element){var $element=$(element),image,url=(window.devicePixelRatio>1&&$element.attr('data-src-retina'))||$element.attr('data-src');this._core.trigger('load',{element:$element,url:url},'lazy');if($element.is('img')){$element.one('load.owl.lazy',$.proxy(function(){$element.css('opacity',1);this._core.trigger('loaded',{element:$element,url:url},'lazy');},this)).attr('src',url);}else{image=new Image();image.onload=$.proxy(function(){$element.css({'background-image':'url("'+url+'")','opacity':'1'});this._core.trigger('loaded',{element:$element,url:url},'lazy');},this);image.src=url;}},this));this._loaded.push($item.get(0));};Lazy.prototype.destroy=function(){var handler,property;for(handler in this.handlers){this._core.$element.off(handler,this.handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Lazy=Lazy;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var AutoHeight=function(carousel){this._core=carousel;this._handlers={'initialized.owl.carousel refreshed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoHeight){this.update();}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoHeight&&e.property.name=='position'){this.update();}},this),'loaded.owl.lazy':$.proxy(function(e){if(e.namespace&&this._core.settings.autoHeight&&e.element.closest('.'+this._core.settings.itemClass).index()===this._core.current()){this.update();}},this)};this._core.options=$.extend({},AutoHeight.Defaults,this._core.options);this._core.$element.on(this._handlers);};AutoHeight.Defaults={autoHeight:false,autoHeightClass:'owl-height'};AutoHeight.prototype.update=function(){var start=this._core._current,end=start+this._core.settings.items,visible=this._core.$stage.children().toArray().slice(start,end),heights=[],maxheight=0;$.each(visible,function(index,item){heights.push($(item).height());});maxheight=Math.max.apply(null,heights);this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);};AutoHeight.prototype.destroy=function(){var handler,property;for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.AutoHeight=AutoHeight;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var Video=function(carousel){this._core=carousel;this._videos={};this._playing=null;this._handlers={'initialized.owl.carousel':$.proxy(function(e){if(e.namespace){this._core.register({type:'state',name:'playing',tags:['interacting']});}},this),'resize.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.video&&this.isInFullScreen()){e.preventDefault();}},this),'refreshed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.is('resizing')){this._core.$stage.find('.cloned .owl-video-frame').remove();}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name==='position'&&this._playing){this.stop();}},this),'prepared.owl.carousel':$.proxy(function(e){if(!e.namespace){return;}
var $element=$(e.content).find('.owl-video');if($element.length){$element.css('display','none');this.fetch($element,$(e.content));}},this)};this._core.options=$.extend({},Video.Defaults,this._core.options);this._core.$element.on(this._handlers);this._core.$element.on('click.owl.video','.owl-video-play-icon',$.proxy(function(e){this.play(e);},this));};Video.Defaults={video:false,videoHeight:false,videoWidth:false};Video.prototype.fetch=function(target,item){var type=(function(){if(target.attr('data-vimeo-id')){return'vimeo';}else if(target.attr('data-vzaar-id')){return'vzaar'}else{return'youtube';}})(),id=target.attr('data-vimeo-id')||target.attr('data-youtube-id')||target.attr('data-vzaar-id'),width=target.attr('data-width')||this._core.settings.videoWidth,height=target.attr('data-height')||this._core.settings.videoHeight,url=target.attr('href');if(url){id=url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);if(id[3].indexOf('youtu')>-1){type='youtube';}else if(id[3].indexOf('vimeo')>-1){type='vimeo';}else if(id[3].indexOf('vzaar')>-1){type='vzaar';}else{throw new Error('Video URL not supported.');}
id=id[6];}else{throw new Error('Missing video URL.');}
this._videos[url]={type:type,id:id,width:width,height:height};item.attr('data-video',url);this.thumbnail(target,this._videos[url]);};Video.prototype.thumbnail=function(target,video){var tnLink,icon,path,dimensions=video.width&&video.height?'style="width:'+video.width+'px;height:'+video.height+'px;"':'',customTn=target.find('img'),srcType='src',lazyClass='',settings=this._core.settings,create=function(path){icon='<div class="owl-video-play-icon"></div>';if(settings.lazyLoad){tnLink='<div class="owl-video-tn '+lazyClass+'" '+srcType+'="'+path+'"></div>';}else{tnLink='<div class="owl-video-tn" style="opacity:1;background-image:url('+path+')"></div>';}
target.after(tnLink);target.after(icon);};target.wrap('<div class="owl-video-wrapper"'+dimensions+'></div>');if(this._core.settings.lazyLoad){srcType='data-src';lazyClass='owl-lazy';}
if(customTn.length){create(customTn.attr(srcType));customTn.remove();return false;}
if(video.type==='youtube'){path="//img.youtube.com/vi/"+video.id+"/hqdefault.jpg";create(path);}else if(video.type==='vimeo'){$.ajax({type:'GET',url:'//vimeo.com/api/v2/video/'+video.id+'.json',jsonp:'callback',dataType:'jsonp',success:function(data){path=data[0].thumbnail_large;create(path);}});}else if(video.type==='vzaar'){$.ajax({type:'GET',url:'//vzaar.com/api/videos/'+video.id+'.json',jsonp:'callback',dataType:'jsonp',success:function(data){path=data.framegrab_url;create(path);}});}};Video.prototype.stop=function(){this._core.trigger('stop',null,'video');this._playing.find('.owl-video-frame').remove();this._playing.removeClass('owl-video-playing');this._playing=null;this._core.leave('playing');this._core.trigger('stopped',null,'video');};Video.prototype.play=function(event){var target=$(event.target),item=target.closest('.'+this._core.settings.itemClass),video=this._videos[item.attr('data-video')],width=video.width||'100%',height=video.height||this._core.$stage.height(),html;if(this._playing){return;}
this._core.enter('playing');this._core.trigger('play',null,'video');item=this._core.items(this._core.relative(item.index()));this._core.reset(item.index());if(video.type==='youtube'){html='<iframe width="'+width+'" height="'+height+'" src="//www.youtube.com/embed/'+
video.id+'?autoplay=1&rel=0&v='+video.id+'" frameborder="0" allowfullscreen></iframe>';}else if(video.type==='vimeo'){html='<iframe src="//player.vimeo.com/video/'+video.id+'?autoplay=1" width="'+width+'" height="'+height+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';}else if(video.type==='vzaar'){html='<iframe frameborder="0"'+'height="'+height+'"'+'width="'+width+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen '+'src="//view.vzaar.com/'+video.id+'/player?autoplay=true"></iframe>';}
$('<div class="owl-video-frame">'+html+'</div>').insertAfter(item.find('.owl-video'));this._playing=item.addClass('owl-video-playing');};Video.prototype.isInFullScreen=function(){var element=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;return element&&$(element).parent().hasClass('owl-video-frame');};Video.prototype.destroy=function(){var handler,property;this._core.$element.off('click.owl.video');for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Video=Video;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var Animate=function(scope){this.core=scope;this.core.options=$.extend({},Animate.Defaults,this.core.options);this.swapping=true;this.previous=undefined;this.next=undefined;this.handlers={'change.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name=='position'){this.previous=this.core.current();this.next=e.property.value;}},this),'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':$.proxy(function(e){if(e.namespace){this.swapping=e.type=='translated';}},this),'translate.owl.carousel':$.proxy(function(e){if(e.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)){this.swap();}},this)};this.core.$element.on(this.handlers);};Animate.Defaults={animateOut:false,animateIn:false};Animate.prototype.swap=function(){if(this.core.settings.items!==1){return;}
if(!$.support.animation||!$.support.transition){return;}
this.core.speed(0);var right,clear=$.proxy(this.clear,this),previous=this.core.$stage.children().eq(this.previous),next=this.core.$stage.children().eq(this.next),incoming=this.core.settings.animateIn,outgoing=this.core.settings.animateOut;if(this.core.current()===this.previous){return;}
if(outgoing){right=this.core.coordinates(this.previous)-this.core.coordinates(this.next);previous.one($.support.animation.end,clear).css({'right':right+'px'}).addClass('animated owl-animated-out').addClass(outgoing);}
if(incoming){next.one($.support.animation.end,clear).addClass('animated owl-animated-in').addClass(incoming);}};Animate.prototype.clear=function(e){$(e.target).css({'right':''}).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);this.core.onTransitionEnd();};Animate.prototype.destroy=function(){var handler,property;for(handler in this.handlers){this.core.$element.off(handler,this.handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Animate=Animate;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var Autoplay=function(carousel){this._core=carousel;this._timeout=null;this._paused=false;this._handlers={'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name==='settings'){if(this._core.settings.autoplay){this.play();}else{this.stop();}}else if(e.namespace&&e.property.name==='position'){if(this._core.settings.autoplay){this._setAutoPlayInterval();}}},this),'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoplay){this.play();}},this),'play.owl.autoplay':$.proxy(function(e,t,s){if(e.namespace){this.play(t,s);}},this),'stop.owl.autoplay':$.proxy(function(e){if(e.namespace){this.stop();}},this),'mouseover.owl.autoplay':$.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is('rotating')){this.pause();}},this),'mouseleave.owl.autoplay':$.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is('rotating')){this.play();}},this),'touchstart.owl.core':$.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is('rotating')){this.pause();}},this),'touchend.owl.core':$.proxy(function(){if(this._core.settings.autoplayHoverPause){this.play();}},this)};this._core.$element.on(this._handlers);this._core.options=$.extend({},Autoplay.Defaults,this._core.options);};Autoplay.Defaults={autoplay:false,autoplayTimeout:5000,autoplayHoverPause:false,autoplaySpeed:false};Autoplay.prototype.play=function(timeout,speed){this._paused=false;if(this._core.is('rotating')){return;}
this._core.enter('rotating');this._setAutoPlayInterval();};Autoplay.prototype._getNextTimeout=function(timeout,speed){if(this._timeout){window.clearTimeout(this._timeout);}
return window.setTimeout($.proxy(function(){if(this._paused||this._core.is('busy')||this._core.is('interacting')||document.hidden){return;}
this._core.next(speed||this._core.settings.autoplaySpeed);},this),timeout||this._core.settings.autoplayTimeout);};Autoplay.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout();};Autoplay.prototype.stop=function(){if(!this._core.is('rotating')){return;}
window.clearTimeout(this._timeout);this._core.leave('rotating');};Autoplay.prototype.pause=function(){if(!this._core.is('rotating')){return;}
this._paused=true;};Autoplay.prototype.destroy=function(){var handler,property;this.stop();for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.autoplay=Autoplay;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){'use strict';var Navigation=function(carousel){this._core=carousel;this._initialized=false;this._pages=[];this._controls={};this._templates=[];this.$element=this._core.$element;this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to};this._handlers={'prepared.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.dotsData){this._templates.push('<div class="'+this._core.settings.dotClass+'">'+
$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot')+'</div>');}},this),'added.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.dotsData){this._templates.splice(e.position,0,this._templates.pop());}},this),'remove.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.dotsData){this._templates.splice(e.position,1);}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name=='position'){this.draw();}},this),'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&!this._initialized){this._core.trigger('initialize',null,'navigation');this.initialize();this.update();this.draw();this._initialized=true;this._core.trigger('initialized',null,'navigation');}},this),'refreshed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._initialized){this._core.trigger('refresh',null,'navigation');this.update();this.draw();this._core.trigger('refreshed',null,'navigation');}},this)};this._core.options=$.extend({},Navigation.Defaults,this._core.options);this.$element.on(this._handlers);};Navigation.Defaults={nav:false,navText:['prev','next'],navSpeed:false,navElement:'div',navContainer:false,navContainerClass:'owl-nav',navClass:['owl-prev','owl-next'],slideBy:1,dotClass:'owl-dot',dotsClass:'owl-dots',dots:true,dotsEach:false,dotsData:false,dotsSpeed:false,dotsContainer:false};Navigation.prototype.initialize=function(){var override,settings=this._core.settings;this._controls.$relative=(settings.navContainer?$(settings.navContainer):$('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');this._controls.$previous=$('<'+settings.navElement+'>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click',$.proxy(function(e){this.prev(settings.navSpeed);},this));this._controls.$next=$('<'+settings.navElement+'>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click',$.proxy(function(e){this.next(settings.navSpeed);},this));if(!settings.dotsData){this._templates=[$('<div>').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];}
this._controls.$absolute=(settings.dotsContainer?$(settings.dotsContainer):$('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');this._controls.$absolute.on('click','div',$.proxy(function(e){var index=$(e.target).parent().is(this._controls.$absolute)?$(e.target).index():$(e.target).parent().index();e.preventDefault();this.to(index,settings.dotsSpeed);},this));for(override in this._overrides){this._core[override]=$.proxy(this[override],this);}};Navigation.prototype.destroy=function(){var handler,control,property,override;for(handler in this._handlers){this.$element.off(handler,this._handlers[handler]);}
for(control in this._controls){this._controls[control].remove();}
for(override in this.overides){this._core[override]=this._overrides[override];}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};Navigation.prototype.update=function(){var i,j,k,lower=this._core.clones().length / 2,upper=lower+this._core.items().length,maximum=this._core.maximum(true),settings=this._core.settings,size=settings.center||settings.autoWidth||settings.dotsData?1:settings.dotsEach||settings.items;if(settings.slideBy!=='page'){settings.slideBy=Math.min(settings.slideBy,settings.items);}
if(settings.dots||settings.slideBy=='page'){this._pages=[];for(i=lower,j=0,k=0;i<upper;i++){if(j>=size||j===0){this._pages.push({start:Math.min(maximum,i-lower),end:i-lower+size-1});if(Math.min(maximum,i-lower)===maximum){break;}
j=0,++k;}
j+=this._core.mergers(this._core.relative(i));}}};Navigation.prototype.draw=function(){var difference,settings=this._core.settings,disabled=this._core.items().length<=settings.items,index=this._core.relative(this._core.current()),loop=settings.loop||settings.rewind;this._controls.$relative.toggleClass('disabled',!settings.nav||disabled);if(settings.nav){this._controls.$previous.toggleClass('disabled',!loop&&index<=this._core.minimum(true));this._controls.$next.toggleClass('disabled',!loop&&index>=this._core.maximum(true));}
this._controls.$absolute.toggleClass('disabled',!settings.dots||disabled);if(settings.dots){difference=this._pages.length-this._controls.$absolute.children().length;if(settings.dotsData&&difference!==0){this._controls.$absolute.html(this._templates.join(''));}else if(difference>0){this._controls.$absolute.append(new Array(difference+1).join(this._templates[0]));}else if(difference<0){this._controls.$absolute.children().slice(difference).remove();}
this._controls.$absolute.find('.active').removeClass('active');this._controls.$absolute.children().eq($.inArray(this.current(),this._pages)).addClass('active');}};Navigation.prototype.onTrigger=function(event){var settings=this._core.settings;event.page={index:$.inArray(this.current(),this._pages),count:this._pages.length,size:settings&&(settings.center||settings.autoWidth||settings.dotsData?1:settings.dotsEach||settings.items)};};Navigation.prototype.current=function(){var current=this._core.relative(this._core.current());return $.grep(this._pages,$.proxy(function(page,index){return page.start<=current&&page.end>=current;},this)).pop();};Navigation.prototype.getPosition=function(successor){var position,length,settings=this._core.settings;if(settings.slideBy=='page'){position=$.inArray(this.current(),this._pages);length=this._pages.length;successor?++position:--position;position=this._pages[((position%length)+length)%length].start;}else{position=this._core.relative(this._core.current());length=this._core.items().length;successor?position+=settings.slideBy:position-=settings.slideBy;}
return position;};Navigation.prototype.next=function(speed){$.proxy(this._overrides.to,this._core)(this.getPosition(true),speed);};Navigation.prototype.prev=function(speed){$.proxy(this._overrides.to,this._core)(this.getPosition(false),speed);};Navigation.prototype.to=function(position,speed,standard){var length;if(!standard&&this._pages.length){length=this._pages.length;$.proxy(this._overrides.to,this._core)(this._pages[((position%length)+length)%length].start,speed);}else{$.proxy(this._overrides.to,this._core)(position,speed);}};$.fn.owlCarousel.Constructor.Plugins.Navigation=Navigation;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){'use strict';var Hash=function(carousel){this._core=carousel;this._hashes={};this.$element=this._core.$element;this._handlers={'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.startPosition==='URLHash'){$(window).trigger('hashchange.owl.navigation');}},this),'prepared.owl.carousel':$.proxy(function(e){if(e.namespace){var hash=$(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');if(!hash){return;}
this._hashes[hash]=e.content;}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name==='position'){var current=this._core.items(this._core.relative(this._core.current())),hash=$.map(this._hashes,function(item,hash){return item===current?hash:null;}).join();if(!hash||window.location.hash.slice(1)===hash){return;}
window.location.hash=hash;}},this)};this._core.options=$.extend({},Hash.Defaults,this._core.options);this.$element.on(this._handlers);$(window).on('hashchange.owl.navigation',$.proxy(function(e){var hash=window.location.hash.substring(1),items=this._core.$stage.children(),position=this._hashes[hash]&&items.index(this._hashes[hash]);if(position===undefined||position===this._core.current()){return;}
this._core.to(this._core.relative(position),false,true);},this));};Hash.Defaults={URLhashListener:false};Hash.prototype.destroy=function(){var handler,property;$(window).off('hashchange.owl.navigation');for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Hash=Hash;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var style=$('<support>').get(0).style,prefixes='Webkit Moz O ms'.split(' '),events={transition:{end:{WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd',transition:'transitionend'}},animation:{end:{WebkitAnimation:'webkitAnimationEnd',MozAnimation:'animationend',OAnimation:'oAnimationEnd',animation:'animationend'}}},tests={csstransforms:function(){return!!test('transform');},csstransforms3d:function(){return!!test('perspective');},csstransitions:function(){return!!test('transition');},cssanimations:function(){return!!test('animation');}};function test(property,prefixed){var result=false,upper=property.charAt(0).toUpperCase()+property.slice(1);$.each((property+' '+prefixes.join(upper+' ')+upper).split(' '),function(i,property){if(style[property]!==undefined){result=prefixed?property:true;return false;}});return result;}
function prefixed(property){return test(property,true);}
if(tests.csstransitions()){$.support.transition=new String(prefixed('transition'))
$.support.transition.end=events.transition.end[$.support.transition];}
if(tests.cssanimations()){$.support.animation=new String(prefixed('animation'))
$.support.animation.end=events.animation.end[$.support.animation];}
if(tests.csstransforms()){$.support.transform=new String(prefixed('transform'));$.support.transform3d=tests.csstransforms3d();}})(window.Zepto||window.jQuery,window,document);

/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});

// Timeago jQuery plugin ~ URL: http://timeago.yarp.com
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function r(){var n=i(this);var r=t.settings;if(!isNaN(n.datetime)){if(r.cutoff==0||Math.abs(o(n.datetime))<r.cutoff){e(this).text(s(n.datetime))}}return this}function i(n){n=e(n);if(!n.data("timeago")){n.data("timeago",{datetime:t.datetime(n)});var r=e.trim(n.text());if(t.settings.localeTitle){n.attr("title",n.data("timeago").datetime.toLocaleString())}else if(r.length>0&&!(t.isTime(n)&&n.attr("title"))){n.attr("title",r)}}return n.data("timeago")}function s(e){return t.inWords(o(e))}function o(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){if(t instanceof Date){return s(t)}else if(typeof t==="string"){return s(e.timeago.parse(t))}else if(typeof t==="number"){return s(new Date(t))}else{return s(e.timeago.datetime(t))}};var t=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ﬁ»·",suffixFromNow:"«·¬‰",inPast:"·ÕŸ…",seconds:"»÷⁄ ÀÊ«‰ˆ",minute:"%d œﬁÌﬁ…",minutes:"%d œﬁ«∆ﬁ",hour:"%d ”«⁄…",hours:"%d ”«⁄« ",day:"%d ÌÊ„",days:"%d √Ì«„",month:"‘Â—",months:"%d √‘Â—",year:"%d ”‰…",years:"%d ”‰Ê« ",wordSeparator:" ",numbers:[]}},inWords:function(t){function l(r,i){var s=e.isFunction(r)?r(i,t):r;var o=n.numbers&&n.numbers[i]||i;return s.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var n=this.settings.strings;var r=n.prefixAgo;var i=n.suffixAgo;if(this.settings.allowFuture){if(t<0){r=n.prefixFromNow;i=n.suffixFromNow}}if(!this.settings.allowPast&&t>=0){return this.settings.strings.inPast}var s=Math.abs(t)/1e3;var o=s/60;var u=o/60;var a=u/24;var f=a/365;var c=s<45&&l(n.seconds,Math.round(s))||s<90&&l(n.minute,1)||o<45&&l(n.minutes,Math.round(o))||o<90&&l(n.hour,1)||u<24&&l(n.hours,Math.round(u))||u<42&&l(n.day,1)||a<30&&l(n.days,Math.round(a))||a<45&&l(n.month,1)||a<365&&l(n.months,Math.round(a/30))||f<1.5&&l(n.year,1)||l(n.years,Math.round(f));var h=n.wordSeparator||"";if(n.wordSeparator===undefined){h=" "}return e.trim([r,c,i].join(h))},parse:function(t){var n=e.trim(t);n=n.replace(/\.\d+/,"");n=n.replace(/-/,"/").replace(/-/,"/");n=n.replace(/T/," ").replace(/Z/," UTC");n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");n=n.replace(/([\+\-]\d\d)$/," $100");return new Date(n)},datetime:function(n){var r=t.isTime(n)?e(n).attr("datetime"):e(n).attr("title");return t.parse(r)},isTime:function(t){return e(t).get(0).tagName.toLowerCase()==="time"}});var n={init:function(){var n=e.proxy(r,this);n();var i=t.settings;if(i.refreshMillis>0){this._timeagoInterval=setInterval(n,i.refreshMillis)}},update:function(n){var i=t.parse(n);e(this).data("timeago",{datetime:i});if(t.settings.localeTitle)e(this).attr("title",i.toLocaleString());r.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:t.parse(t.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))});r.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null}}};e.fn.timeago=function(e,t){var r=e?n[e]:n.init;if(!r){throw new Error("Unknown function name '"+e+"' for timeago")}this.each(function(){r.call(this,t)});return this};document.createElement("abbr");document.createElement("time")});

$(window).load(function() {
    $('.post-slider .owl-carousel').owlCarousel({
    items:1,
 autoplay:true,
    autoplayTimeout:5000,
    stagePadding:0,
      nav:true,
      loop:true,
      navText:["", ""],
      responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 1 
                  },
                  1000: {
                    items: 1,
                    loop: true
                  }
                }
});
    });

// Main Post Scripts
$(document)['ready'](function(_0xee48x1) {
    var _0xee48x2 = -1,
        o = '',
        _0xee48x4 = '';
    _0xee48x1('#menu')['find']('ul')['find']('li')['each'](function() {
        for (var _0xee48x5 = _0xee48x1(this)['text'](), _0xee48x6 = _0xee48x1(this)['find']('a')['attr']('href'), _0xee48x7 = 0, _0xee48x8 = 0; _0xee48x8 < _0xee48x5['length'] && (_0xee48x7 = _0xee48x5['indexOf']('_', _0xee48x7), -1 != _0xee48x7); _0xee48x8++) {
            _0xee48x7++
        };
        if (level = _0xee48x8, level > _0xee48x2 && (o += '<ul>', _0xee48x4 += '<ul>'), level < _0xee48x2) {
            offset = _0xee48x2 - level;
            for (var _0xee48x8 = 0; _0xee48x8 < offset; _0xee48x8++) {
                o += '</ul></li>', _0xee48x4 += '</ul></li>'
            }
        };
        _0xee48x5 = _0xee48x5['replace'](/_/gi, ''), o += '<li><a href=\'' + _0xee48x6 + '\'>' + _0xee48x5 + '</a>', _0xee48x4 += '<li><a href=\'' + _0xee48x6 + '\'>';
        for (var _0xee48x8 = 0; _0xee48x8 < level; _0xee48x8++) {
            _0xee48x4 += ''
        };
        _0xee48x4 += _0xee48x5 + '</a>', _0xee48x2 = level
    });
    for (var _0xee48x7 = 0; _0xee48x2 >= _0xee48x7; _0xee48x7++) {
        o += '</ul>', _0xee48x4 += '</ul>', 0 != _0xee48x7 && (o += '</li>', _0xee48x4 += '</li>')
    };
    _0xee48x1('#menu .LinkList')['html'](_0xee48x4), _0xee48x1('#menu > .LinkList > ul')['attr']('id', 'nav1'), selectnav('nav1'), _0xee48x1('#menu ul > li > ul')['parent']('li')['addClass']('parent'), _0xee48x1('#menu .widget')['attr']('style', 'display:block!important;')
});
$(document)['ready'](function(_0xee48x9) {
    _0xee48x9('abbr.timeago')['timeago']()
});
$(document)['ready'](function() {
    $('.header-search > .fa-search')['click'](function() {
        $('.tm-menu .search-form')['slideDown']('', function() {});
        $('.header-search > .fa-search')['toggleClass']('active');
        $('.header-search > .fa-times')['toggleClass']('active')
    });
    $('.header-search > .fa-times')['click'](function() {
        $('.tm-menu .search-form')['slideUp']('', function() {});
        $('.header-search > .fa-search')['toggleClass']('active');
        $('.header-search > .fa-times')['toggleClass']('active')
    });
    selectnav('nav');
    selectnav('nav2')
});
$(document)['ready'](function() {
    $('.ty-ran-yard span')['each'](function() {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48xa) {
                _0xee48xa = _0xee48xa['feed']['entry']['length'] - 3, _0xee48xa = Math['floor'](Math['random']() * (_0xee48xa - 0 + 1)) + 0, 0 == _0xee48xa && (_0xee48xa = Math['floor'](Math['random']() * (_0xee48xa - 0 + 1)) + 1), _0xee48xa == 0 && (_0xee48xa == 1), $['ajax']({
                    url: '/feeds/posts/default?alt=json-in-script&start-index=' + _0xee48xa + '&max-results=1',
                    type: 'get',
                    dataType: 'jsonp',
                    success: function(_0xee48xb) {
                        var _0xee48x6 = '';
                        var _0xee48xc = '';
                        for (var _0xee48xd = 0; _0xee48xd < _0xee48xb['feed']['entry']['length']; _0xee48xd++) {
                            for (var _0xee48xe = 0; _0xee48xe < _0xee48xb['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                                if (_0xee48xb['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                                    _0xee48x6 = _0xee48xb['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                                    break
                                }
                            };
                            _0xee48xc += '<a class="ran-sym" href="' + _0xee48x6 + '"></a>'
                        };
                        $('.ty-ran-yard span')['html'](_0xee48xc)
                    }
                })
            }
        })
    })
});
$('.ticker .HTML .widget-content')['each'](function() {
    var _0xee48xf = $(this)['find']('span')['attr']('data-no') || '',
        _0xee48x10 = $(this)['find']('span')['attr']('data-label') || '',
        _0xee48x11 = $(this)['find']('span')['attr']('data-type') || '';
    if (_0xee48x11 != undefined && _0xee48x11['match']('recent')) {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0xee48xf,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48x9) {
                var u = '';
                var _0xee48x13 = '<ul id="ticker">';
                for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                    for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                        if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                            u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                            break
                        }
                    };
                    var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                    var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                        var _0xee48x2 = _0xee48x4
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                            var _0xee48x2 = _0xee48x17
                        } else {
                            var _0xee48x2 = no_image
                        }
                    };
                    _0xee48x13 += '<li><div class="tk-thumb"><a class="tk-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3></li>'
                };
                _0xee48x13 += '</ul>';
                $('.ticker .widget-content')['each'](function() {
                    $(this)['html'](_0xee48x13);
                    $(this)['prev']('h2')['wrapInner']('<span></span>')
                })
            }
        })
    } else {
        if (_0xee48x11['match']('label')) {
            $['ajax']({
                url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=' + _0xee48xf,
                type: 'get',
                dataType: 'jsonp',
                success: function(_0xee48x9) {
                    var u = '';
                    var _0xee48x13 = '<ul id="ticker">';
                    for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                        for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                            if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                                u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                                break
                            }
                        };
                        var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                        var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                        var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                        if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                            var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                            var _0xee48x2 = _0xee48x4
                        } else {
                            if (_0xee48x15['indexOf']('<img') > -1) {
                                var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                                var _0xee48x2 = _0xee48x17
                            } else {
                                var _0xee48x2 = no_image
                            }
                        };
                        _0xee48x13 += '<li><div class="tk-thumb"><a class="tk-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3></li>'
                    };
                    _0xee48x13 += '</ul>';
                    $('.ticker .HTML .widget-content')['each'](function() {
                        $(this)['html'](_0xee48x13);
                        $(this)['prev']('h2')['wrapInner']('<span></span>')
                    })
                }
            })
        } else {
            $('.news-tick-wrap')['remove']()
        }
    }
});
$(document)['ready'](function() {
    $('#ticker')['tickerme']();
    $('.sidebar h2,.lowerbar h2')['wrap']('<div class="widget-title"></div>')
});
$('.featured .HTML .widget-content')['each'](function() {
    var _0xee48x18 = $(this)['prev']('h2')['text'](),
        _0xee48x10 = $(this)['find']('span')['attr']('data-label');
    tyard = $(this)['parent']()['attr']('id'), box = $(this)['find']('span')['attr']('data-type');
    if (box != undefined && box['match']('tyard-recent')) {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script&max-results=3',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48x9) {
                var u = '';
                var _0xee48x13 = '<div class="ty-feat">';
                for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                    for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                        if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                            u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                            break
                        }
                    };
                    var _0xee48x19;
                    for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                        if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                            _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                            break
                        }
                    };
                    _0xee48x19 = parseInt(_0xee48x19, 10);
                    if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                        var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                    } else {
                        if ('summary' in b_rc) {
                            var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                        } else {
                            var _0xee48x1a = ''
                        }
                    };
                    var _0xee48x1b = /<\S[^>]*>/g;
                    _0xee48x1a = _0xee48x1a['replace'](_0xee48x1b, ''), _0xee48x1a['length'] > 120 && (_0xee48x1a = '' + _0xee48x1a['substring'](0, 100) + '...');
                    var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                    var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                    var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                    var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                    var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                        _0xee48xa = _0xee48x1f['substring'](0, 4),
                        _0xee48x20 = _0xee48x1f['substring'](5, 7),
                        _0xee48x21 = _0xee48x1f['substring'](8, 10),
                        _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                    var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                        var _0xee48x2 = _0xee48x4
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                            var _0xee48x2 = _0xee48x17
                        } else {
                            var _0xee48x2 = no_image
                        }
                    };
                    if (_0xee48xd == 0) {
                        _0xee48x13 += '<div class="ty-first"><div class="ty-feat-image"><div class="tyard-thumb"><a class="ty-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="ty-con-yard"><div class="yard-label"><a class="icon ' + s + '" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + s + '</a></div><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="ty-time">' + _0xee48x22 + '</span></div></div></div>'
                    } else {
                        _0xee48x13 += '<div class="ty-rest-wrap"><div class="ty-rest"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><div class="yard-label"><a class="icon ' + s + '" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + s + '</a></div><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="ty-time">' + _0xee48x22 + '</span></div><div class="clear"/></div></div>'
                    }
                };
                _0xee48x13 += '</div>';
                $('.featured .HTML .widget-content')['each'](function() {
                    var _0xee48x5 = $(this)['parent']()['attr']('id');
                    if (_0xee48x5 == tyard) {
                        $(this)['html'](_0xee48x13);
                        $(this)['parent']()['addClass']('tyard');
                        $(this)['parent']()['addClass']('templatesyard');
                        $('.featured')['addClass']('comload')['removeClass']('preload');
                        $('.featured h2')['remove']();
                        $(this)['find']('.yard-img,.ty-img')['each'](function() {
                            $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    } else {
        if (box != undefined && box['match']('tyard-label')) {
            $['ajax']({
                url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=5',
                type: 'get',
                dataType: 'jsonp',
                success: function(_0xee48x9) {
                    var u = '';
                    var _0xee48x13 = '<div class="ty-feat">';
                    for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                        for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                            if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                                u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                                break
                            }
                        };
                        var _0xee48x19;
                        for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                            if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                                _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                                break
                            }
                        };
                        _0xee48x19 = parseInt(_0xee48x19, 10);
                        if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                            var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                        } else {
                            if ('summary' in b_rc) {
                                var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                            } else {
                                var _0xee48x1a = ''
                            }
                        };
                        var _0xee48x1b = /<\S[^>]*>/g;
                        _0xee48x1a = _0xee48x1a['replace'](_0xee48x1b, ''), _0xee48x1a['length'] > 120 && (_0xee48x1a = '' + _0xee48x1a['substring'](0, 100) + '...');
                        var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                        var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                        var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                        var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                        var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                            _0xee48xa = _0xee48x1f['substring'](0, 4),
                            _0xee48x20 = _0xee48x1f['substring'](5, 7),
                            _0xee48x21 = _0xee48x1f['substring'](8, 10),
                            _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                        var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                        var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                        if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                            var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                            var _0xee48x2 = _0xee48x4
                        } else {
                            if (_0xee48x15['indexOf']('<img') > -1) {
                                var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                                var _0xee48x2 = _0xee48x17
                            } else {
                                var _0xee48x2 = no_image
                            }
                        };
                        if (_0xee48xd == 0) {
                            _0xee48x13 += '<div class="ty-first"><div class="ty-feat-image"><div class="tyard-thumb"><a class="ty-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="ty-con-yard"><div class="yard-label"><a class="icon ' + s + '" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + s + '</a></div><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="ty-time">' + _0xee48x22 + '</span><p class="recent-summary">' + _0xee48x1a + '</p></div></div></div>'
                        } else {
                            _0xee48x13 += '<div class="ty-rest-wrap"><div class="ty-rest"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><div class="yard-label"><a class="icon ' + s + '" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + s + '</a></div><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="ty-time">' + _0xee48x22 + '</span><p class="recent-summary">' + _0xee48x1a + '</p></div><div class="clear"/></div></div>'
                        }
                    };
                    _0xee48x13 += '</div>';
                    $('.featured .HTML .widget-content')['each'](function() {
                        var _0xee48x5 = $(this)['parent']()['attr']('id');
                        if (_0xee48x5 == tyard) {
                            $(this)['html'](_0xee48x13);
                            $(this)['parent']()['addClass']('tyard');
                            $(this)['parent']()['addClass']('templatesyard');
                            $('.featured')['addClass']('comload')['removeClass']('preload');
                            $('.featured h2')['remove']();
                            $(this)['find']('.yard-img,.ty-img')['each'](function() {
                                $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                    return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                                })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                    return _0xee48x23['replace']('s72-c', 's1600')
                                })
                            })
                        }
                    })
                }
            })
        } else {
            $('.tyard-wrapper')['remove']()
        }
    }
});
$('.ty-slide-show .HTML .widget-content')['each'](function() {
    var _0xee48x18 = $(this)['prev']('h2')['text'](),
        _0xee48x10 = $(this)['find']('span')['attr']('data-label'),
        _0xee48xf = $(this)['find']('span')['attr']('data-no'),
        _0xee48x24 = $(this)['parent']()['attr']('id'),
        _0xee48x11 = $(this)['find']('span')['attr']('data-type');
    if (_0xee48x11 != undefined && _0xee48x11['match']('ty-latest-slide')) {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0xee48xf,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48x9) {
                var u = '';
                var _0xee48x13 = '<div class="ty-slide"><ul class="slides owl-carousel">';
                for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                    for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                        if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                            u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                            break
                        }
                    };
                    var _0xee48x19;
                    for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                        if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                            _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                            break
                        }
                    };
                    _0xee48x19 = parseInt(_0xee48x19, 10);
                    if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                        var _0xee48x25 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                    } else {
                        if ('summary' in b_rc) {
                            var _0xee48x25 = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                        } else {
                            var _0xee48x25 = ''
                        }
                    };
                    var _0xee48x1b = /<\S[^>]*>/g;
                    _0xee48x25 = _0xee48x25['replace'](_0xee48x1b, ''), _0xee48x25['length'] > 170 && (_0xee48x25 = '' + _0xee48x25['substring'](0, 250) + '...');
                    var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                    var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                    var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                    var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                    var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                        _0xee48xa = _0xee48x1f['substring'](0, 4),
                        _0xee48x20 = _0xee48x1f['substring'](5, 7),
                        _0xee48x21 = _0xee48x1f['substring'](8, 10),
                        _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                    var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                        var _0xee48x2 = _0xee48x4
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                            var _0xee48x2 = _0xee48x17
                        } else {
                            var _0xee48x2 = no_image
                        }
                    };
                    _0xee48x13 += '<li><div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '"><img alt="' + _0xee48x14 + '" src="' + _0xee48x2 + '"/><span class="tyimg-lay"/></a><div class="ty-slide-con"><div class="ty-slide-con"><div class="ty-slide-con-tab"><h3 class="ty-bonos-entry"><a href="' + u + '">' + _0xee48x14 + '</a></h3><div class="ty-slide-meta-tab"><span class="recent-auth">' + _0xee48x1d + '</span><span class="recent-date">' + _0xee48x22 + '</span></div></div></div></div></div></li>'
                };
                _0xee48x13 += '</ul></div>';
                $('.ty-slide-show .HTML .widget-content')['each'](function() {
                    var _0xee48x5 = $(this)['parent']()['attr']('id');
                    if (_0xee48x5 == _0xee48x24) {
                        $(this)['html'](_0xee48x13);
                        $(this)['parent']()['addClass']('tslide');
                        $(this)['parent']()['addClass']('templatesyard');
                        $(this)['prev']('h2')['html']('<a href="/search?&amp;max-result=' + perPage + '">' + s + '</a>');
                        $(this)['prev']('h2')['remove']();
                        $('.ty-slide-show')['addClass']('comload')['removeClass']('preload');
                        $(this)['find']('.yard-img,.ty-img')['each'](function() {
                            $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    } else {
        if (_0xee48x11 != undefined && _0xee48x11['match']('ty-tag-slide')) {
            $['ajax']({
                url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=' + _0xee48xf,
                type: 'get',
                dataType: 'jsonp',
                success: function(_0xee48x9) {
                    var u = '';
                    var _0xee48x13 = '<div class="ty-slide"><ul class="slides owl-carousel">';
                    for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                        for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                            if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                                u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                                break
                            }
                        };
                        var _0xee48x19;
                        for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                            if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                                _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                                break
                            }
                        };
                        _0xee48x19 = parseInt(_0xee48x19, 10);
                        if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                            var _0xee48x25 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                        } else {
                            if ('summary' in b_rc) {
                                var _0xee48x25 = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                            } else {
                                var _0xee48x25 = ''
                            }
                        };
                        var _0xee48x1b = /<\S[^>]*>/g;
                        _0xee48x25 = _0xee48x25['replace'](_0xee48x1b, ''), _0xee48x25['length'] > 270 && (_0xee48x25 = '' + _0xee48x25['substring'](0, 250) + '...');
                        var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                        var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                        var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                        var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                        var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                            _0xee48xa = _0xee48x1f['substring'](0, 4),
                            _0xee48x20 = _0xee48x1f['substring'](5, 7),
                            _0xee48x21 = _0xee48x1f['substring'](8, 10),
                            _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                        var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                        var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                        if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                            var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                            var _0xee48x2 = _0xee48x4
                        } else {
                            if (_0xee48x15['indexOf']('<img') > -1) {
                                var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                                var _0xee48x2 = _0xee48x17
                            } else {
                                var _0xee48x2 = no_image
                            }
                        };
                        _0xee48x13 += '<li><div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '"><img alt="' + _0xee48x14 + '" src="' + _0xee48x2 + '"/><span class="tyimg-lay"/></a><div class="ty-slide-con"><div class="ty-slide-con"><div class="ty-slide-con-tab"><h3 class="ty-bonos-entry"><a href="' + u + '">' + _0xee48x14 + '</a></h3><div class="ty-slide-meta-tab"><span class="recent-auth">' + _0xee48x1d + '</span><span class="recent-date">' + _0xee48x22 + '</span></div></div></div></div></div></li>'
                    };
                    _0xee48x13 += '</ul></div>';
                    $('.ty-slide-show .HTML .widget-content')['each'](function() {
                        var _0xee48x5 = $(this)['parent']()['attr']('id');
                        if (_0xee48x5 == _0xee48x24) {
                            $(this)['html'](_0xee48x13);
                            $(this)['parent']()['addClass']('tslide');
                            $(this)['parent']()['addClass']('templatesyard');
                            $(this)['prev']('h2')['html']('<a href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + s + '</a>');
                            $(this)['prev']('h2')['remove']();
                            $('.ty-slide-show')['addClass']('comload')['removeClass']('preload');
                            $(this)['find']('.yard-img,.ty-img')['each'](function() {
                                $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                    return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                                })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                    return _0xee48x23['replace']('s72-c', 's1600')
                                })
                            })
                        }
                    })
                }
            })
        } else {
            $('.feat-slider-wrap')['remove']()
        }
    }
});
$('.featured-box .HTML .widget-content')['each'](function() {
    var _0xee48x18 = $(this)['prev']('h2')['text'](),
        _0xee48x10 = $(this)['find']('span')['attr']('data-label'),
        _0xee48x26 = $(this)['parent']()['attr']('id'),
        _0xee48x11 = $(this)['find']('span')['attr']('data-type');
    if (_0xee48x11 != undefined && _0xee48x11['match']('tybox')) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=3',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48x9) {
                var u = '';
                var _0xee48x13 = '<div class="ty-feat">';
                for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                    for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                        if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                            u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                            break
                        }
                    };
                    var _0xee48x19;
                    for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                        if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                            _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                            break
                        }
                    };
                    _0xee48x19 = parseInt(_0xee48x19, 10);
                    if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                        var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                    } else {
                        if ('summary' in b_rc) {
                            var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                        } else {
                            var _0xee48x1a = ''
                        }
                    };
                    var _0xee48x1b = /<\S[^>]*>/g;
                    _0xee48x1a = _0xee48x1a['replace'](_0xee48x1b, ''), _0xee48x1a['length'] > 170 && (_0xee48x1a = '' + _0xee48x1a['substring'](0, 150) + '...');
                    var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                    var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                    var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                    var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                    var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                        _0xee48xa = _0xee48x1f['substring'](0, 4),
                        _0xee48x20 = _0xee48x1f['substring'](5, 7),
                        _0xee48x21 = _0xee48x1f['substring'](8, 10),
                        _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                    var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                        var _0xee48x2 = _0xee48x4
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                            var _0xee48x2 = _0xee48x17
                        } else {
                            var _0xee48x2 = no_image
                        }
                    };
                    if (_0xee48xd == 0) {
                        _0xee48x13 += '<div class="tybox-rest first-box"><div class="first-box-wrp"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><div class="yard-label"><a class="icon ' + s + '" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + s + '</a></div><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="tybox-time">' + _0xee48x22 + '</span></div></div></div>'
                    } else {
                        _0xee48x13 += '<div class="tybox-rest"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="tybox-time">' + _0xee48x22 + '</span></div></div>'
                    }
                };
                _0xee48x13 += '</div>';
                $('.featured-box .HTML .widget-content')['each'](function() {
                    var _0xee48x5 = $(this)['parent']()['attr']('id');
                    if (_0xee48x5 == _0xee48x26) {
                        $(this)['html'](_0xee48x13);
                        $(this)['parent']()['addClass']('tybox');
                        $(this)['parent']()['addClass']('templatesyard');
                        $(this)['prev']('h2')['wrap']('<div class="tyheading-head"></div>');
                        $(this)['prev']('.tyheading-head')['append']('<div class="tyheading-head-inner"><a class="tymore" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + more_text + '</a></div>');
                        $('.featured-box')['addClass']('comload')['removeClass']('preload');
                        $(this)['find']('.yard-img,.ty-img')['each'](function() {
                            $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
});
$(document)['ready'](function() {
    var _0xee48x18 = $('#tyboxtabs #featuredbox1 .widget h2')['text']();
    $('.box-menu-tab .item-4 .box-head-title a')['text'](_0xee48x18);
    var u = $('#tyboxtabs #featuredbox2 .widget h2')['text']();
    $('.box-menu-tab .item-5 .box-head-title a')['text'](u);
    var _0xee48x10 = $('#tyboxtabs #featuredbox3 .widget h2')['text']();
    $('.box-menu-tab .item-6 .box-head-title a')['text'](_0xee48x10);
    var _0xee48x2 = $('#tyboxtabs #featuredbox1 .widget .tyheading-head .tyheading-head-inner')['html']();
    $('.box-menu-tab .item-4 .box-head-more')['html'](_0xee48x2);
    var _0xee48x27 = $('#tyboxtabs #featuredbox2 .widget .tyheading-head .tyheading-head-inner')['html']();
    $('.box-menu-tab .item-5 .box-head-more')['html'](_0xee48x27);
    var _0xee48x28 = $('#tyboxtabs #featuredbox3 .widget .tyheading-head .tyheading-head-inner')['html']();
    $('.box-menu-tab .item-6 .box-head-more')['html'](_0xee48x28);
    $('#featuredbox1 .widget h2,#featuredbox2 .widget h2,#featuredbox3 .widget h2,#featuredbox1 .widget-title,#featuredbox2 .widget-title,#featuredbox3 .widget-title')['remove']();
    $('#featuredbox1 .widget  .tyheading-head,#featuredbox2 .widget  .tyheading-head,#featuredbox3 .widget  .tyheading-head')['remove']();
    $(this)['find']('.box-menu-tab li')['addClass']('hide-tab');
    $('.tyboxtabs')['tabslet']({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
    if (0 === $('.tyboxtabs .widget')['length']) {
        $('.tyboxtabs')['remove']()
    }
});
$('.featured-list .HTML .widget-content')['each'](function() {
    var _0xee48x18 = $(this)['prev']('h2')['text'](),
        _0xee48x10 = $(this)['find']('span')['attr']('data-label'),
        _0xee48x29 = $(this)['parent']()['attr']('id'),
        _0xee48x11 = $(this)['find']('span')['attr']('data-type');
    if (_0xee48x11 != undefined && _0xee48x11['match']('tylist')) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=5',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48x9) {
                var u = '';
                var _0xee48x13 = '<div class="ty-feat">';
                for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                    for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                        if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                            u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                            break
                        }
                    };
                    var _0xee48x19;
                    for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                        if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                            _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                            break
                        }
                    };
                    _0xee48x19 = parseInt(_0xee48x19, 10);
                    if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                        var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                    } else {
                        if ('summary' in b_rc) {
                            var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                        } else {
                            var _0xee48x1a = ''
                        }
                    };
                    var _0xee48x1b = /<\S[^>]*>/g;
                    _0xee48x1a = _0xee48x1a['replace'](_0xee48x1b, ''), _0xee48x1a['length'] > 170 && (_0xee48x1a = '' + _0xee48x1a['substring'](0, 150) + '...');
                    var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                    var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                    var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                    var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                    var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                        _0xee48xa = _0xee48x1f['substring'](0, 4),
                        _0xee48x20 = _0xee48x1f['substring'](5, 7),
                        _0xee48x21 = _0xee48x1f['substring'](8, 10),
                        _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                    var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                        var _0xee48x2 = _0xee48x4
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                            var _0xee48x2 = _0xee48x17
                        } else {
                            var _0xee48x2 = no_image
                        }
                    };
                    if (_0xee48xd == 0) {
                        _0xee48x13 += '<div class="tylist-first"><div class="tylist-feat-image"><div class="tyard-thumb"><a class="tylist-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="yard-label"><a class="icon ' + s + '" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + s + '</a></div></div><div class="tylist-con-yard"><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="tylist-time">' + _0xee48x22 + '</span><p class="recent-summary">' + _0xee48x1a + '</p></div></div></div>'
                    } else {
                        _0xee48x13 += '<div class="tylist-rest"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="category-gallery"><a class="icon ' + s + '" href="/search/label/' + s + '?&amp;max-result=' + perPage + '"></a></div></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="tylist-time">' + _0xee48x22 + '</span></div></div>'
                    }
                };
                _0xee48x13 += '</div>';
                $('.featured-list .HTML .widget-content')['each'](function() {
                    var _0xee48x5 = $(this)['parent']()['attr']('id');
                    if (_0xee48x5 == _0xee48x29) {
                        $(this)['html'](_0xee48x13);
                        $(this)['parent']()['addClass']('tylist');
                        $(this)['parent']()['addClass']('templatesyard');
                        $(this)['prev']('h2')['wrapInner']('<a href="/search/label/' + s + '?&amp;max-result=' + perPage + '"></a>');
                        $(this)['prev']('h2')['wrap']('<div class="tyheading-head"></div>');
                        $(this)['prev']('.tyheading-head')['append']('<a class="tymore" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + more_text + '</a>');
                        $('.featured-list')['addClass']('comload')['removeClass']('preload');
                        $(this)['find']('.yard-img,.ty-img')['each'](function() {
                            $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    } else {
        $('.tylist-wrapper')['remove']()
    }
});
$('.column-left .HTML .widget-content')['each'](function() {
    var _0xee48x18 = $(this)['prev']('h2')['text'](),
        _0xee48x10 = $(this)['find']('span')['attr']('data-label'),
        _0xee48x2a = $(this)['parent']()['attr']('id'),
        _0xee48x11 = $(this)['find']('span')['attr']('data-type');
    if (_0xee48x11 != undefined && _0xee48x11['match']('tyleft')) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=5',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48x9) {
                var u = '';
                var _0xee48x13 = '<div class="ty-feat">';
                for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                    for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                        if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                            u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                            break
                        }
                    };
                    var _0xee48x19;
                    for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                        if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                            _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                            break
                        }
                    };
                    _0xee48x19 = parseInt(_0xee48x19, 10);
                    if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                        var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                    } else {
                        if ('summary' in b_rc) {
                            var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                        } else {
                            var _0xee48x1a = ''
                        }
                    };
                    var _0xee48x1b = /<\S[^>]*>/g;
                    _0xee48x1a = _0xee48x1a['replace'](_0xee48x1b, ''), _0xee48x1a['length'] > 170 && (_0xee48x1a = '' + _0xee48x1a['substring'](0, 150) + '...');
                    var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                    var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                    var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                    var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                    var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                        _0xee48xa = _0xee48x1f['substring'](0, 4),
                        _0xee48x20 = _0xee48x1f['substring'](5, 7),
                        _0xee48x21 = _0xee48x1f['substring'](8, 10),
                        _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                    var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                        var _0xee48x2 = _0xee48x4
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                            var _0xee48x2 = _0xee48x17
                        } else {
                            var _0xee48x2 = no_image
                        }
                    };
                    if (_0xee48xd == 0) {
                        _0xee48x13 += '<div class="col-left-first"><div class="col-left-feat-image"><div class="tyard-thumb"><a class="col-left-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="yard-label"><a class="icon ' + s + '" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + s + '</a></div></div><div class="col-left-con-yard"><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="col-left-time">' + _0xee48x22 + '</span><p class="recent-summary">' + _0xee48x1a + '</p></div></div></div>'
                    } else {
                        _0xee48x13 += '<div class="col-left-rest"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="col-left-time">' + _0xee48x22 + '</span></div></div>'
                    }
                };
                _0xee48x13 += '</div>';
                $('.column-left .HTML .widget-content')['each'](function() {
                    var _0xee48x5 = $(this)['parent']()['attr']('id');
                    if (_0xee48x5 == _0xee48x2a) {
                        $(this)['html'](_0xee48x13);
                        $(this)['parent']()['addClass']('tyleft');
                        $(this)['parent']()['addClass']('templatesyard');
                        $(this)['prev']('h2')['wrapInner']('<a href="/search/label/' + s + '?&amp;max-result=' + perPage + '"></a>');
                        $(this)['prev']('h2')['wrap']('<div class="tyheading-head"></div>');
                        $(this)['prev']('.tyheading-head')['append']('<a class="tymore" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + more_text + '</a>');
                        $('.column-left')['addClass']('comload')['removeClass']('preload');
                        $(this)['find']('.yard-img,.ty-img')['each'](function() {
                            $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    } else {
        $('.tyleft-wrapper')['remove']()
    }
});
$('.column-right .HTML .widget-content')['each'](function() {
    var _0xee48x18 = $(this)['prev']('h2')['text'](),
        _0xee48x10 = $(this)['find']('span')['attr']('data-label'),
        _0xee48x2b = $(this)['parent']()['attr']('id'),
        _0xee48x11 = $(this)['find']('span')['attr']('data-type');
    if (_0xee48x11 != undefined && _0xee48x11['match']('tyright')) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=5',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48x9) {
                var u = '';
                var _0xee48x13 = '<div class="ty-feat">';
                for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                    for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                        if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                            u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                            break
                        }
                    };
                    var _0xee48x19;
                    for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                        if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                            _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                            break
                        }
                    };
                    _0xee48x19 = parseInt(_0xee48x19, 10);
                    if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                        var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                    } else {
                        if ('summary' in b_rc) {
                            var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                        } else {
                            var _0xee48x1a = ''
                        }
                    };
                    var _0xee48x1b = /<\S[^>]*>/g;
                    _0xee48x1a = _0xee48x1a['replace'](_0xee48x1b, ''), _0xee48x1a['length'] > 170 && (_0xee48x1a = '' + _0xee48x1a['substring'](0, 150) + '...');
                    var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                    var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                    var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                    var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                    var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                        _0xee48xa = _0xee48x1f['substring'](0, 4),
                        _0xee48x20 = _0xee48x1f['substring'](5, 7),
                        _0xee48x21 = _0xee48x1f['substring'](8, 10),
                        _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                    var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                        var _0xee48x2 = _0xee48x4
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                            var _0xee48x2 = _0xee48x17
                        } else {
                            var _0xee48x2 = no_image
                        }
                    };
                    if (_0xee48xd == 0) {
                        _0xee48x13 += '<div class="col-right-first"><div class="col-right-feat-image"><div class="tyard-thumb"><a class="col-right-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="yard-label"><a class="icon ' + s + '" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + s + '</a></div></div><div class="col-right-con-yard"><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="col-right-time">' + _0xee48x22 + '</span><p class="recent-summary">' + _0xee48x1a + '</p></div></div></div>'
                    } else {
                        _0xee48x13 += '<div class="col-right-rest"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="col-right-time">' + _0xee48x22 + '</span></div></div>'
                    }
                };
                _0xee48x13 += '</div>';
                $('.column-right .HTML .widget-content')['each'](function() {
                    var _0xee48x5 = $(this)['parent']()['attr']('id');
                    if (_0xee48x5 == _0xee48x2b) {
                        $(this)['html'](_0xee48x13);
                        $(this)['parent']()['addClass']('tyright');
                        $(this)['parent']()['addClass']('templatesyard');
                        $(this)['prev']('h2')['wrapInner']('<a href="/search/label/' + s + '?&amp;max-result=' + perPage + '"></a>');
                        $(this)['prev']('h2')['wrap']('<div class="tyheading-head"></div>');
                        $(this)['prev']('.tyheading-head')['append']('<a class="tymore" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + more_text + '</a>');
                        $('.column-right')['addClass']('comload')['removeClass']('preload');
                        $(this)['find']('.yard-img,.ty-img')['each'](function() {
                            $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    } else {
        $('.tyleft-wrapper')['remove']()
    }
});
$('.featured-box .HTML .widget-content')['each'](function() {
    var _0xee48x18 = $(this)['prev']('h2')['text'](),
        _0xee48x10 = $(this)['find']('span')['attr']('data-label'),
        _0xee48xf = $(this)['find']('span')['attr']('data-no'),
        _0xee48x2c = $(this)['parent']()['attr']('id'),
        _0xee48x11 = $(this)['find']('span')['attr']('data-type');
    if (_0xee48x11 != undefined && _0xee48x11['match']('tysum')) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=' + _0xee48xf,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48x9) {
                var u = '';
                var _0xee48x13 = '<div class="ty-feat">';
                for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                    for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                        if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                            u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                            break
                        }
                    };
                    var _0xee48x19;
                    for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                        if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                            _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                            break
                        }
                    };
                    _0xee48x19 = parseInt(_0xee48x19, 10);
                    if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                        var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                    } else {
                        if ('summary' in b_rc) {
                            var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                        } else {
                            var _0xee48x1a = ''
                        }
                    };
                    var _0xee48x1b = /<\S[^>]*>/g;
                    _0xee48x1a = _0xee48x1a['replace'](_0xee48x1b, ''), _0xee48x1a['length'] > 120 && (_0xee48x1a = '' + _0xee48x1a['substring'](0, 100) + '...');
                    var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                    var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                    var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                    var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                    var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                        _0xee48xa = _0xee48x1f['substring'](0, 4),
                        _0xee48x20 = _0xee48x1f['substring'](5, 7),
                        _0xee48x21 = _0xee48x1f['substring'](8, 10),
                        _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                    var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                        var _0xee48x2 = _0xee48x4
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                            var _0xee48x2 = _0xee48x17
                        } else {
                            var _0xee48x2 = no_image
                        }
                    };
                    _0xee48x13 += '<div class="tybox-rest"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="tybox-time">' + _0xee48x22 + '</span><p class="recent-summary">' + _0xee48x1a + '</p></div></div>'
                };
                _0xee48x13 += '</div>';
                $('.featured-box .HTML .widget-content')['each'](function() {
                    var _0xee48x5 = $(this)['parent']()['attr']('id');
                    if (_0xee48x5 == _0xee48x2c) {
                        $(this)['html'](_0xee48x13);
                        $(this)['parent']()['addClass']('tysum');
                        $(this)['parent']()['addClass']('templatesyard');
                        $(this)['prev']('h2')['wrapInner']('<a href="/search/label/' + s + '?&amp;max-result=' + perPage + '"></a>');
                        $(this)['prev']('h2')['wrap']('<div class="tyheading-head"></div>');
                        $(this)['prev']('.tyheading-head')['append']('<a class="tymore" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + more_text + '</a>');
                        $('.featured-box')['addClass']('comload')['removeClass']('preload');
                        $(this)['find']('.yard-img,.ty-img')['each'](function() {
                            $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
});
$('.featured-grid .HTML .widget-content')['each'](function() {
    var _0xee48x18 = $(this)['prev']('h2')['text'](),
        _0xee48x10 = $(this)['find']('span')['attr']('data-label'),
        _0xee48xf = $(this)['find']('span')['attr']('data-no'),
        _0xee48x2d = $(this)['parent']()['attr']('id'),
        _0xee48x11 = $(this)['find']('span')['attr']('data-type');
    if (_0xee48x11 != undefined && _0xee48x11['match']('tygrid')) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=' + _0xee48xf,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48x9) {
                var u = '';
                var _0xee48x13 = '<div class="ty-feat">';
                for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                    for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                        if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                            u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                            break
                        }
                    };
                    var _0xee48x19;
                    for (var _0xee48x2 = 0; _0xee48x2 < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48x2++) {
                        if ((_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['rel'] === 'replies') && (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['type'] === 'text/html')) {
                            _0xee48x19 = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48x2]['title'];
                            break
                        }
                    };
                    _0xee48x19 = parseInt(_0xee48x19, 10);
                    if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                        var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                    } else {
                        if ('summary' in b_rc) {
                            var _0xee48x1a = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                        } else {
                            var _0xee48x1a = ''
                        }
                    };
                    var _0xee48x1b = /<\S[^>]*>/g;
                    _0xee48x1a = _0xee48x1a['replace'](_0xee48x1b, ''), _0xee48x1a['length'] > 170 && (_0xee48x1a = '' + _0xee48x1a['substring'](0, 150) + '...');
                    var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                    var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                    var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                    var _0xee48x1e = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                    var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                        _0xee48xa = _0xee48x1f['substring'](0, 4),
                        _0xee48x20 = _0xee48x1f['substring'](5, 7),
                        _0xee48x21 = _0xee48x1f['substring'](8, 10),
                        _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                    var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url'];
                        var _0xee48x2 = _0xee48x4
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src');
                            var _0xee48x2 = _0xee48x17
                        } else {
                            var _0xee48x2 = no_image
                        }
                    };
                    _0xee48x13 += '<div class="tygrid-rest"><div class="tygrid-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="tygrid-time">' + _0xee48x22 + '</span></div></div>'
                };
                _0xee48x13 += '</div>';
                $('.featured-grid .HTML .widget-content')['each'](function() {
                    var _0xee48x5 = $(this)['parent']()['attr']('id');
                    if (_0xee48x5 == _0xee48x2d) {
                        $(this)['html'](_0xee48x13);
                        $(this)['parent']()['addClass']('tygrid');
                        $(this)['parent']()['addClass']('templatesyard');
                        $(this)['prev']('h2')['wrapInner']('<a href="/search/label/' + s + '?&amp;max-result=' + perPage + '"></a>');
                        $(this)['prev']('h2')['wrap']('<div class="tyheading-head"></div>');
                        $(this)['prev']('.tyheading-head')['append']('<a class="tymore" href="/search/label/' + s + '?&amp;max-result=' + perPage + '">' + more_text + '</a>');
                        $('.featured-grid')['addClass']('comload')['removeClass']('preload');
                        $(this)['find']('.yard-img,.ty-img')['each'](function() {
                            $(this)['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(_0xee48xd, _0xee48x23) {
                                return _0xee48x23['replace']('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    } else {
        $('.tygridbox-wrapper')['remove']()
    }
});
$('.social-counter')['each'](function() {
    var _0xee48x2e = $(this);
    var _0xee48xf = $(this)['find']('.item-social');
    if (0 === _0xee48xf['length']) {
        _0xee48x2e['remove']()
    };
    $(this)['find']('.widget')['removeClass']('LinkList');
    $('.social-counter .item-social.facebook')['find']('.item-text')['text']('Likes');
    $('.social-counter .item-social.rss,.social-counter .item-social.youtube')['find']('.item-text')['text']('Subscribes');
    var _0xee48x15 = 'count=';
    var _0xee48x1f = ';';
    $('.social-counter *')['replaceText'](_0xee48x15, '<span class="item-count">');
    $('.social-counter *')['replaceText'](_0xee48x1f, '</span>');
    $('.item-social')['each'](function() {
        var _0xee48x2e = $(this)['find']('.hide-count');
        var _0xee48xf = $(this)['find']('.item-count');
        $(_0xee48x2e)['before']($(_0xee48xf));
        $(_0xee48x2e)['remove']()
    })
});
$(function() {
    $('.index .post, .archive .post, .tygrid .ty-feat .tygrid-rest, .tysum .ty-feat .tybox-rest')['matchHeight']();
    $('.post-body img')['parent']('a')['css']('margin', '0 auto!important')
});
$('.post-home-image .post-thumb a')['attr']('style', function(_0xee48x2f, _0xee48xa) {
    if (_0xee48xa['match']('hqdefault.jpg')) {
        return _0xee48xa['replace']('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (_0xee48xa['match']('default.jpg')) {
            return _0xee48xa['replace']('/default.jpg', '/mqdefault.jpg')
        } else {
            if (_0xee48xa['match']('s72-c')) {
                return _0xee48xa['replace']('/s72-c', '/s1600')
            } else {
                if (_0xee48xa['match']('w72-h72-p-nu')) {
                    return _0xee48xa['replace']('/w72-h72-p-nu', '/s1600')
                } else {
                    return _0xee48xa['replace']('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png', no_image)
                }
            }
        }
    }
});
$(document)['ready'](function() {
    var _0xee48x30 = '<span style=\'color:$maincolor;\'>√ÕœÀ</span>«·√Œ»«—';
    var _0xee48x31 = ' «»⁄‰« ⁄»— »—Ìœﬂ «·≈·ﬂ —Ê‰Ì · Õ’· ⁄·Ï √ÕœÀ «·√Œ»«— √Ê· »√Ê·!';
    $('.email-folower h2')['remove']();
    var _0xee48x21 = $('.FollowByEmail .widget-content');
    if (_0xee48x21['length']) {
        _0xee48x21['prepend']('<div class=\'email-letter-text\'><h3 class=\'subhead\'>' + _0xee48x30 + '</h3><p class=\'subtext\'>' + _0xee48x31 + '</p></div>')
    }
});
$(document)['ready'](function() {
    var _0xee48x18 = $('#sidetabs #tabside1 .widget h2')['text']();
    $('.menu-tab .item-1 a')['text'](_0xee48x18);
    var u = $('#sidetabs #tabside2 .widget h2')['text']();
    $('.menu-tab .item-2 a')['text'](u);
    var _0xee48x10 = $('#sidetabs #tabside3 .widget h2')['text']();
    $('.menu-tab .item-3 a')['text'](_0xee48x10);
    $('#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title')['remove']();
    $(this)['find']('.menu-tab li')['addClass']('hide-tab');
    $('.sidetabs')['tabslet']({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
    if (0 === $('.sidetabs .widget')['length']) {
        $('.sidetabs')['remove']()
    }
});
$(document)['ready'](function() {
    $('.cmm-tabs')['simplyTab']({
        active: 1,
        fx: 'fade',
        showSpeed: 400,
        hideSpeed: 400
    });
    $('.blogger-tab')['append']($('#comments'));
    $('.cmm-tabs.simplyTab .wrap-tab')['wrap']('<div class=\'cmm-tabs-header\'/>');
    $('.cmm-tabs-header')['append']('<span class=\'cmm-tabs-text-me\'>√Œ — √ﬂÀ— „‰ ÿ—Ìﬁ… ·· ⁄·Ìﬁ!!</span>')
});
$('.PopularPosts ul li img')['attr']('src', function(_0xee48x2f, _0xee48x32) {
    if (_0xee48x32['match']('hqdefault.jpg')) {
        return _0xee48x32['replace']('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (_0xee48x32['match']('default.jpg')) {
            return _0xee48x32['replace']('/default.jpg', '/mqdefault.jpg')
        } else {
            if (_0xee48x32['match']('s72-c')) {
                return _0xee48x32['replace']('/s72-c', '/s1600')
            } else {
                if (_0xee48x32['match']('w72-h72-p-nu')) {
                    return _0xee48x32['replace']('/w72-h72-p-nu', '/s1600')
                } else {
                    return _0xee48x32['replace']('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png', no_image)
                }
            }
        }
    }
});
$(document)['ready'](function() {
    $('span[name="author-social"]')['before']($('.post-author-social .widget-content')['html']());
    $('.post-author-social .widget-content')['html']('');
    $('span[name="author-post"]')['before']($('.post-author-widget .widget-content')['html']());
    $('.post-author-widget .widget-content')['html']('');
    $('a[name="ad-post-top"]')['before']($('#adwidegt2 .widget-content')['html']());
    $('#adwidegt2 .widget-content')['html']('');
    $('a[name="ad-post-bottom"]')['before']($('#adwidegt3 .widget-content')['html']());
    $('#adwidegt3 .widget-content')['html']('')
});
$('.ty-trigger .HTML .widget-content span.latestcomments')['each'](function() {
    var _0xee48xf = $(this)['attr']('data-no');
    $['ajax']({
        url: '/feeds/comments/default?alt=json-in-script&max-results=' + _0xee48xf,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0xee48x9) {
            var u = '';
            var _0xee48x13 = '<div class="tyard-komet">';
            for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                if (_0xee48xd == _0xee48x9['feed']['entry']['length']) {
                    break
                };
                for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                    if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                        u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                        break
                    }
                };
                if ('content' in _0xee48x9['feed']['entry'][_0xee48xd]) {
                    var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t']
                } else {
                    if ('summary' in b_rc) {
                        var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['summary']['$t']
                    } else {
                        var _0xee48x15 = ''
                    }
                };
                var _0xee48x33 = /<\S[^>]*>/g;
                _0xee48x15 = _0xee48x15['replace'](_0xee48x33, '');
                if (_0xee48x15['length'] > 70) {
                    _0xee48x15 = '' + _0xee48x15['substring'](0, 50) + '...'
                };
                var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                var _0xee48x34 = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['gd$image']['src'];
                if (_0xee48x34['match']('http://img1.blogblog.com/img/blank.gif')) {
                    var _0xee48x2 = 'http://img1.blogblog.com/img/anon36.png'
                } else {
                    if (_0xee48x34['match']('http://img2.blogblog.com/img/b16-rounded.gif')) {
                        var _0xee48x2 = 'http://img1.blogblog.com/img/anon36.png'
                    } else {
                        var _0xee48x2 = _0xee48x34
                    }
                };
                _0xee48x13 += '<div class="ty-komet"><div class="ty-komet-tar"><img class="yardimg-komet" src="' + _0xee48x2 + '"/></div><a href="' + u + '">' + _0xee48x1d + '</a><span>"' + _0xee48x15 + '"</span></div>'
            };
            _0xee48x13 += '</div><div class="clear"/>';
            $('.ty-trigger .HTML .widget-content span.latestcomments')['each'](function() {
                var _0xee48x5 = $(this)['attr']('data-no');
                if (_0xee48x5 == _0xee48xf) {
                    $(this)['parent']()['html'](_0xee48x13)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.latestposts')['each'](function() {
    var _0xee48xf = $(this)['attr']('data-no');
    $['ajax']({
        url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0xee48xf,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0xee48x9) {
            var u = '';
            var _0xee48x13 = '<div class="ty-bonus">';
            for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                    if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                        u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                        break
                    }
                };
                var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                    _0xee48xa = _0xee48x1f['substring'](0, 4),
                    _0xee48x20 = _0xee48x1f['substring'](5, 7),
                    _0xee48x21 = _0xee48x1f['substring'](8, 10),
                    _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                    var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                    var _0xee48x2 = _0xee48x4
                } else {
                    if (_0xee48x15['indexOf']('<img') > -1) {
                        var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                        var _0xee48x2 = _0xee48x17
                    } else {
                        var _0xee48x2 = no_image
                    }
                };
                _0xee48x13 += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="ty-time">' + _0xee48x22 + '</span></div></div>'
            };
            _0xee48x13 += '</div>';
            $('.ty-trigger .HTML .widget-content span.latestposts')['each'](function() {
                var _0xee48x5 = $(this)['attr']('data-no');
                if (_0xee48x5 == _0xee48xf) {
                    $(this)['parent']()['html'](_0xee48x13)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.tagpost')['each'](function() {
    var _0xee48x10 = $(this)['attr']('data-label'),
        _0xee48xf = $(this)['attr']('data-no');
    $['ajax']({
        url: '/feeds/posts/default/-/' + _0xee48x10 + '?alt=json-in-script&max-results=' + _0xee48xf,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0xee48x9) {
            var u = '';
            var _0xee48x13 = '<div class="ty-bonus">';
            for (var _0xee48xd = 0; _0xee48xd < _0xee48x9['feed']['entry']['length']; _0xee48xd++) {
                for (var _0xee48xe = 0; _0xee48xe < _0xee48x9['feed']['entry'][_0xee48xd]['link']['length']; _0xee48xe++) {
                    if (_0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['rel'] == 'alternate') {
                        u = _0xee48x9['feed']['entry'][_0xee48xd]['link'][_0xee48xe]['href'];
                        break
                    }
                };
                var _0xee48x14 = _0xee48x9['feed']['entry'][_0xee48xd]['title']['$t'];
                var s = _0xee48x9['feed']['entry'][_0xee48xd]['category'][0]['term'];
                var _0xee48x1d = _0xee48x9['feed']['entry'][_0xee48xd]['author'][0]['name']['$t'];
                var _0xee48x1f = _0xee48x9['feed']['entry'][_0xee48xd]['published']['$t'],
                    _0xee48xa = _0xee48x1f['substring'](0, 4),
                    _0xee48x20 = _0xee48x1f['substring'](5, 7),
                    _0xee48x21 = _0xee48x1f['substring'](8, 10),
                    _0xee48x22 = month_format[parseInt(_0xee48x20, 10)] + ' ' + _0xee48x21 + ', ' + _0xee48xa;
                var _0xee48x15 = _0xee48x9['feed']['entry'][_0xee48xd]['content']['$t'];
                var _0xee48x16 = $('<div>')['html'](_0xee48x15);
                if (_0xee48x15['indexOf']('//www.youtube.com/embed/') > -1) {
                    var _0xee48x4 = _0xee48x9['feed']['entry'][_0xee48xd]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                    var _0xee48x2 = _0xee48x4
                } else {
                    if (_0xee48x15['indexOf']('<img') > -1) {
                        var _0xee48x17 = _0xee48x16['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                        var _0xee48x2 = _0xee48x17
                    } else {
                        var _0xee48x2 = no_image
                    }
                };
                _0xee48x13 += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + u + '">' + _0xee48x14 + '</a></h3><span class="yard-auth-ty">' + _0xee48x1d + '</span><span class="ty-time">' + _0xee48x22 + '</span></div></div>'
            };
            _0xee48x13 += '</div>';
            $('.ty-trigger .HTML .widget-content span.tagpost')['each'](function() {
                var _0xee48x5 = $(this)['attr']('data-label');
                if (_0xee48x5 == _0xee48x10) {
                    $(this)['parent']()['html'](_0xee48x13)
                }
            })
        }
    })
});
$(document)['ready'](function() {
    $('span[name="author-social"]')['before']($('.post-author-social .widget-content')['html']());
    $('.post-author-social .widget-content')['html']('');
    $('span[name="author-post"]')['before']($('.post-author-widget .widget-content')['html']());
    $('.post-author-widget .widget-content')['html']('')
});
$('.ty-comment')['click'](function() {
    $('html, body')['animate']({
        scrollTop: $('#put-your-comment')['offset']()['top']
    }, 1000)
});
$(document)['ready'](function() {
    $('img')['each'](function() {
        var _0xee48x35 = $(this);
        var _0xee48x36 = _0xee48x35['attr']('src');
        _0xee48x35['attr']('title', _0xee48x36['substring']((_0xee48x36['lastIndexOf']('/')) + 1, _0xee48x36['lastIndexOf']('.')));
        _0xee48x35['attr']('alt', _0xee48x36['substring']((_0xee48x36['lastIndexOf']('/')) + 1, _0xee48x36['lastIndexOf']('.')))
    })
});
$(document)['ready'](function(_0xee48x37) {
    var _0xee48xf = _0xee48x37('#post-pager .blog-pager-newer-link');
    var _0xee48x15 = _0xee48x37('#post-pager .blog-pager-older-link');
    _0xee48x37['get'](_0xee48xf['attr']('href'), function(_0xee48x15) {
        _0xee48xf['html']('<b>' + POSTPAGER_NEWER + '</b><span>' + _0xee48x37(_0xee48x15)['find']('.post h1.post-title')['text']() + '</span>')
    }, 'html');
    _0xee48x37['get'](_0xee48x15['attr']('href'), function(_0xee48xf) {
        _0xee48x15['html']('<b>' + POSTPAGER_OLDER + '</b><span>' + _0xee48x37(_0xee48xf)['find']('.post h1.post-title')['text']() + '</span>')
    }, 'html')
});
$(function() {
    $('.post-body img')['parent']('a')['css']('margin', '0 auto!important')
});
$(document)['ready'](function() {
    function _0xee48x38(_0xee48x14, _0xee48x9, _0xee48x22) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0xee48x9 + '?alt=json-in-script&max-results=' + _0xee48x22,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0xee48xa) {
                for (var u = '', _0xee48x13 = '<div class="tyheading-head post-ty-heading"><h2><a href="/search/label/' + _0xee48x9 + '?&amp;max-result=' + perPage + '">„‘«—ﬂ«  –«  «·’·…</a></h2><a class="tymore" href="/search/label/' + _0xee48x9 + '?&amp;max-result=' + perPage + '">' + more_text + '</a></div><div class="related">', _0xee48x7 = 0; _0xee48x7 < _0xee48xa['feed']['entry']['length']; _0xee48x7++) {
                    for (var _0xee48x8 = 0; _0xee48x8 < _0xee48xa['feed']['entry'][_0xee48x7]['link']['length']; _0xee48x8++) {
                        if ('alternate' == _0xee48xa['feed']['entry'][_0xee48x7]['link'][_0xee48x8]['rel']) {
                            u = _0xee48xa['feed']['entry'][_0xee48x7]['link'][_0xee48x8]['href'];
                            break
                        }
                    };
                    var _0xee48x4 = _0xee48xa['feed']['entry'][_0xee48x7]['title']['$t'];
                    var _0xee48x39 = _0xee48xa['feed']['entry'][_0xee48x7]['author'][0]['name']['$t'];
                    var _0xee48x3a = _0xee48xa['feed']['entry'][_0xee48x7]['category'][0]['term'];
                    var _0xee48x3b = _0xee48xa['feed']['entry'][_0xee48x7]['published']['$t'],
                        _0xee48x3c = _0xee48x3b['substring'](0, 4),
                        _0xee48x3d = _0xee48x3b['substring'](5, 7),
                        _0xee48x3e = _0xee48x3b['substring'](8, 10),
                        _0xee48x3f = month_format[parseInt(_0xee48x3d, 10)] + ' ' + _0xee48x3e + ', ' + _0xee48x3c;
                    var _0xee48x15 = _0xee48xa['feed']['entry'][_0xee48x7]['content']['$t'];
                    var _0xee48x1d = $('<div>')['html'](_0xee48x15);
                    if (_0xee48x15['indexOf']('http://www.youtube.com/embed/') > -1 || _0xee48x15['indexOf']('https://www.youtube.com/embed/') > -1) {
                        var _0xee48x1f = _0xee48xa['feed']['entry'][_0xee48x7]['media$thumbnail']['url'],
                            _0xee48x28 = _0xee48x1f['replace']('/default.jpg', '/mqdefault.jpg'),
                            _0xee48x2 = _0xee48x28
                    } else {
                        if (_0xee48x15['indexOf']('<img') > -1) {
                            var s = _0xee48x1d['find']('img:first')['attr']('src'),
                                _0xee48x10 = s['replace']('s72-c', 's600');
                            var _0xee48x2 = _0xee48x10
                        } else {
                            var _0xee48x2 = 'http://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s1600-r/nth.png'
                        }
                    };
                    _0xee48x13 += '<li><div class="related-thumb"><div class="yard-label"><a class="icon ' + _0xee48x3a + '" href="/search/label/' + _0xee48x3a + '?&amp;max-result=' + perPage + '">' + _0xee48x3a + '</a></div><a class="related-img" href="' + u + '" style="background:url(' + _0xee48x2 + ') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="' + u + '">' + _0xee48x4 + '</a></h3><span class="yard-auth-ty">' + _0xee48x39 + '</span><span class="ty-time">' + _0xee48x3f + '</span></li>'
                };
                _0xee48x13 += '</div>', _0xee48x14['html'](_0xee48x13)
            }
        })
    }
    $('#related-posts')['each'](function() {
        var _0xee48x14 = $(this),
            _0xee48x9 = _0xee48x14['text'](),
            _0xee48x22 = 3;
        _0xee48x38(_0xee48x14, _0xee48x9, _0xee48x22)
    })
});
$('.Label a,.post-labels a,.post-ty-heading a,.breadcrumbs span a,.label-head a')['attr']('href', function(_0xee48x2f, _0xee48x40) {
    return _0xee48x40['replace'](_0xee48x40, _0xee48x40 + '?&max-results=' + perPage)
});
$('.item .post-body img')['parent']('a')['css']('margin', '0 auto!important');
var s = '[full_width]';
var o = '[left_sidebar]';
var u = '[right_sidebar]';
$('.post *')['replaceText'](s, '<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;max-width:100%!important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}}</style>');
$('.post-body *')['replaceText'](o, '<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:left!important;padding-left:0!important;}}</style>');
$('.post-body *')['replaceText'](u, '<style>@media screen and (min-width: 980px){.item #main-wrapper{float:left!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:right!important;padding-left:0!important;}}</style>')
  
</