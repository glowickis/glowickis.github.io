!function(e){function t(t){if(L.video&&L.video.videoWidth&&0!=L.video.videoWidth){var i=parseFloat(document.documentElement.clientWidth||window.innerWidth),n=Math.floor(i*L.video.videoHeight/L.video.videoWidth);L.videoskin.style.width=i+"px",L.videoskin.style.height=n+"px",e.videoskin.videoplayer.container.style.width=i+"px",e.videoskin.videoplayer.container.style.height=n+"px",e.videoskin.videoplayer.video.style.width=i+"px",e.videoskin.videoplayer.video.style.height=n+"px","expanded"==e.videoskin.state&&(L.pushdown.style.height=L.videoskin.style.height)}}function i(){clearInterval(L.videoskin.set_interval),L.videoskin.set_interval=setInterval(function(){var t=parseFloat(L.videoskin.style.opacity);t=t-.2>0?Number(t-.2).toFixed(1):0,L.videoskin.style.opacity=t,0==t&&(e.videoskin.videoplayer.seek(),e.videoskin.videoplayer.pause(),clearInterval(L.videoskin.set_interval))},1e3/30)}function n(){e.videoskin.videoplayer.play(),clearInterval(L.videoskin.set_interval),L.videoskin.set_interval=setInterval(function(){var e=parseFloat(L.videoskin.style.opacity);e=1>e+.1?Number(e+.1).toFixed(1):1,L.videoskin.style.opacity=e,1==e&&clearInterval(L.videoskin.set_interval)},1e3/30)}function o(){clearInterval(L.skin_background.set_interval),L.skin_background.set_interval=setInterval(function(){var e=parseFloat(L.skin_background.style.opacity);e=e-.2>0?Number(e-.2).toFixed(1):0,L.skin_background.style.opacity=e,0==e&&clearInterval(L.skin_background.set_interval)},1e3/30)}function s(){clearInterval(L.skin_background.set_interval),L.skin_background.set_interval=setInterval(function(){var e=parseFloat(L.skin_background.style.opacity);e=1>e+.1?Number(e+.1).toFixed(1):1,L.skin_background.style.opacity=e,1==e&&clearInterval(L.skin_background.set_interval)},1e3/30)}function a(){clearInterval(L.video.time_update),clearInterval(L.skin_foreground.set_interval),L.skin_foreground.set_interval=setInterval(function(){var e=parseFloat(L.skin_foreground.style.opacity);e=e-.2>0?Number(e-.2).toFixed(1):0,L.skin_foreground.style.opacity=e,0==e&&clearInterval(L.skin_foreground.set_interval)},1e3/30)}function d(){L.video.play(),clearInterval(L.skin_foreground.set_interval),L.skin_foreground.set_interval=setInterval(function(){var e=parseFloat(L.skin_foreground.style.opacity);e=1>e+.1?Number(e+.1).toFixed(1):1,L.skin_foreground.style.opacity=e,1==e&&clearInterval(L.skin_foreground.set_interval)},1e3/30)}function r(){var t=O("div","buttons",{top:0,width:e.videoskin.settings.width,height:e.videoskin.settings.collapsed,position:"absolute"});F(t),t.appendChild(N()),L.buttons=t,L.content.appendChild(L.buttons)}function l(){var e=O("div","footer",{left:0,width:"100%",position:"relative"});e.style.marginTop="32px",L.footer=e,L.container.appendChild(L.footer),p(),c()}function p(){var t=O("div","footer_background",{left:0,bottom:0,width:"100%",position:"absolute"});if(e.B64.hasOwnProperty("footer_background")){var i=new A("footer_background");i.image.append_listener("ready",function(t){L.footer_background.style.height=t.target.height+"px",L.footer.style.height=t.target.height+"px",L.footer_background.style.backgroundAttachment="scroll",L.footer_background.style.backgroundColor=e.videoskin.settings.hex,L.footer_background.style.backgroundImage='url("'+i.toDataURL()+'")',L.footer_background.style.backgroundPosition="0 0",L.footer_background.style.backgroundRepeat="repeat-x"})}L.footer_background=t,L.footer.appendChild(L.footer_background)}function c(){var t=O("div","footer_foreground",{bottom:0,width:0,height:0,position:"absolute"});if(e.B64.hasOwnProperty("footer")){var i=new A("footer");i.image.append_listener("ready",function(e){L.footer_foreground.style.width=e.target.width+"px",L.footer_foreground.style.height=e.target.height+"px",L.footer.style.height=Math.max(parseInt(L.footer.style.height)||0,e.target.height)+"px",F(L.footer_foreground);var t=O("img","footer",{width:e.target.width,height:e.target.height});t.src=i.toDataURL(),L.footer_foreground.appendChild(t)})}L.footer_foreground=t,L.footer.appendChild(L.footer_foreground)}function v(){var t=O("div","body",{width:e.videoskin.settings.width,height:e.videoskin.settings.width,position:"relative"});switch(t.style.zIndex=L.content.style.zIndex,F(t),!0){case 0==e.videoskin.settings.page.indexOf("#"):t.style.backgroundColor=e.videoskin.settings.page,t.innerHTML="&nbsp;";break;case!!e.B64[e.videoskin.settings.page]:}L.body=t,L.content.appendChild(L.body)}function u(){var t=O("div","pushdown",{width:e.videoskin.settings.width,height:e.videoskin.settings.collapsed,position:"relative"});F(t),L.pushdown=t,L.content.appendChild(L.pushdown),h(),g(),e.videoskin.setup()}function h(){var t=O("div","collapsed",{left:0,bottom:0,width:e.videoskin.settings.width,height:e.videoskin.settings.collapsed,position:"absolute"});for(var i in e.B64)i.toLowerCase().indexOf("collapsed")>-1&&e.B64[i].jpeg&&e.B64[i].mask&&(e.videoskin.collapsed[i]=new A(i),t.appendChild(e.videoskin.collapsed[i]));L.collapsed=t,L.pushdown.appendChild(L.collapsed),e.videoskin.collapsed.container=L.collapsed}function g(){var t=O("div","expanded",{left:0,bottom:0,width:e.videoskin.settings.width,height:e.videoskin.settings.collapsed,position:"absolute"});for(var i in e.B64)i.toLowerCase().indexOf("collapsed")<0&&e.B64[i].jpeg&&e.B64[i].mask&&(e.videoskin.expanded[i]=new A(i),t.appendChild(e.videoskin.expanded[i]));L.expanded=t,L.pushdown.appendChild(L.expanded),e.videoskin.expanded.container=L.expanded}function k(){var t=O("div","content",{top:0,width:e.videoskin.settings.width,position:"relative",overflow:"visible"});F(t),L.content=t,L.container.appendChild(L.content),u(),v(),l()}function y(){var t=O("video","skin",{left:0,top:0,width:"100%",height:"auto",position:"absolute"});t.preload="metadata",t.autoplay=!1,t.controls=!1,t.loop=!1,t.muted=!1,t.time_update=setInterval(f,1e3/30),t.src=e.videoskin.settings.src,L.video=t,L.skin_foreground.appendChild(L.video)}function f(){L.video&&(L.object.readyState!=String(L.video.readyState)&&(L.object.readyState=String(L.video.readyState),b(L.object.readyState)),L.object.ended!=String(L.video.ended)&&(L.object.ended=String(L.video.ended),w(L.object.ended)),L.object.paused!=String(L.video.paused)&&(L.object.paused=String(L.video.paused),_(L.object.paused)))}function b(e){switch(e){case"0":L.object.readyText="HAVE_NOTHING";break;case"1":L.object.readyText="HAVE_METADATA",x("metadata");break;case"2":L.object.readyText="HAVE_CURRENT_DATA";break;case"3":L.object.readyText="HAVE_FUTURE_DATA";break;case"4":L.object.readyText="HAVE_ENOUGH_DATA",d();break;default:L.object.readyText="HAVE_UNKOWN"}console.log(L.object.readyText),t()}function w(t){switch(t){case"true":x("ended"),e.videoskin.state="collapsed",e.videoskin.skin(),a(),s();break;case"false":x("loading")}}function _(e){if("ended"!=L.object.state)switch(e){case"true":x("paused");break;case"false":x("playing")}}function x(e){L.object.state=e,console.debug(e)}function m(){var e=O("div","skin",{top:0,width:"100%",height:"100%",position:"absolute"});L.skin=e,L.container.appendChild(L.skin),I(),j(),C()}function I(){var t=O("div","skin_background",{top:0,width:0,height:0,position:"absolute"});if(""!=e.videoskin.settings.skin&&e.B64.hasOwnProperty(e.videoskin.settings.skin)){var i=new A(e.videoskin.settings.skin);i.image.append_listener("ready",function(e){t.style.width=e.target.width+"px",t.style.height=e.target.height+"px",t.style.opacity=0,F(t);var n=O("img","skin",{width:e.target.width,height:e.target.height});n.src=i.toDataURL(),t.appendChild(n)})}L.skin_background=t,L.skin.appendChild(L.skin_background)}function j(){var e=O("div","skin_foreground",{top:0,width:"100%",height:"100%",position:"absolute"});e.style.opacity=0,L.skin_foreground=e,L.skin.appendChild(L.skin_foreground),y()}function C(){var t=O("div","videoskin",{left:0,top:0,width:"100%",height:0,position:"absolute",overflow:"visible"});if(t.style.opacity=0,e.Videoplayer){var i={preload:"metadata",autoplay:!1,loop:!1,muted:!1,titles:!1,fullscreen:!1,controls:"overlays",time_duration:"none"},n=[{title:e.videoskin.settings.title,src:e.videoskin.settings.trailer,poster:e.videoskin.settings.poster}];e.videoskin.videoplayer=new e.Videoplayer(t,i,n),e.videoskin.videoplayer.container.style.left="0px",e.videoskin.videoplayer.container.style.top="0px",e.videoskin.videoplayer.container.style.width="100%"}L.videoskin=t,L.skin.appendChild(L.videoskin)}function S(){var t=O("div","container",{left:0,top:0,width:"100%",height:"100%",position:"absolute",overflowX:"hidden",pointerEvents:"auto"});""!=e.videoskin.settings.hex&&(t.style.backgroundColor=e.videoskin.settings.hex),L.container=t,document.body.appendChild(L.container)}function E(){S(),m(),k(),r(),window.append_listener("resize",t),t(),L.video.load()}function N(){if(1==e.videoskin.settings.buttons_invert)var t="#000000",i="rgba(255,255,255,0.75)";else var t="#FFFFFF",i="rgba(0,0,0,0.75)";var n="http://www.w3.org/2000/svg",o=document.createElementNS(n,"svg");o.setAttributeNS(null,"id","expand_collapse"),o.setAttributeNS(null,"viewBox","0 0 32 32");var s=document.createElementNS(n,"rect");s.setAttributeNS(null,"id","background"),s.setAttributeNS(null,"width","32"),s.setAttributeNS(null,"height","32"),s.setAttributeNS(null,"fill",i),o.appendChild(s);var a=document.createElementNS(n,"polygon");a.setAttributeNS(null,"id","foreground"),a.setAttributeNS(null,"points","22 12 23 13 16 20 9 13 10 12 16 18"),a.setAttributeNS(null,"fill",t),a.setAttributeNS(null,"opacity",.75),o.appendChild(a);var d=document.createElementNS(n,"rect");return d.setAttributeNS(null,"id","expand_collapse"),d.setAttributeNS(null,"width","32"),d.setAttributeNS(null,"height","32"),d.setAttributeNS(null,"fill","rgba(255,0,0,0)"),o.appendChild(d),e.videoskin.button_expand=a,d.append_listener("mouseover",function(e){e.target.style.cursor="pointer",e.target.parentNode.getElementById("foreground").setAttributeNS(null,"opacity",1)}),d.append_listener("mouseout",function(e){e.target.style.cursor="auto",e.target.parentNode.getElementById("foreground").setAttributeNS(null,"opacity",.75)}),d.append_listener("click",function(t){switch(e.videoskin.state){case"expanded":collapse();break;case"collapsed":default:expand()}}),o.style.width=o.style.height="32px",o.style.top=o.style.right="0px",o.style.position="absolute",o.style.zIndex=9999,o}function A(t){if(0==arguments.length)return this;var i=this,n=e.B64[t],o=parseInt(n.width),s=parseInt(n.height);this.jpeg_canvas=document.createElement("canvas");var a=this.jpeg_canvas.getContext("2d");this.jpeg_canvas.id=t,this.jpeg_canvas.width=o,this.jpeg_canvas.height=s;var d=new Image;this.jpeg_canvas.image=d,d.onload=function(e){if(a.drawImage(d,0,0,o,s),""!=n.mask){var t=a.getImageData(0,0,o,s),r=document.createElement("canvas"),l=r.getContext("2d");r.width=o,r.height=s;var p=new Image;p.onload=function(e){l.drawImage(p,0,0,o,s);for(var n=l.getImageData(0,0,o,s),c=0;c<n.data.length;c+=4)t.data[c+3]=n.data[c];a.putImageData(t,0,0),this.dispatchEvent(new Event("ready")),delete i.jpeg_canvas.image,r=l=d=p=null},p.src=n.mask,delete n.mask}else delete n.mask,this.dispatchEvent(new Event("ready")),delete i.jpeg_canvas.image,d=null},d.src=n.jpeg,delete n.jpeg;for(var r in n)"jpeg"!=r&&"mask"!=r&&(this.jpeg_canvas.style[r]=n[r]);return this.jpeg_canvas}function O(e,t,i){i=i||new Object;var n=document.createElement(e);n.id=t;for(var o in i){switch(o){case"left":case"right":case"top":case"bottom":case"width":case"height":if(String(i[o]).indexOf("%")<0)var s=parseInt(i[o])+"px";else var s=i[o];break;default:var s=i[o]}n.style[o]=s}return 0==i.hasOwnProperty("position")&&(n.style.position="relative"),0==i.hasOwnProperty("overflowX")&&0==i.hasOwnProperty("overflowY")&&0==i.hasOwnProperty("overflow")&&(n.style.overflow="hidden"),0==i.hasOwnProperty("pointerEvents")&&(n.style.pointerEvents="none"),0==i.hasOwnProperty("zIndex")&&(n.style.zIndex=z()),n}function F(e){"absolute"!=e.style.position&&"relative"!=e.style.position&&(e.style.postion="relative"),e.style.left="50%",e.style.marginLeft=0-parseInt(e.style.width)/2+"px"}function T(){e.videoskin.settings&&e.B64&&(e.Videoskin=this,E())}function B(){return T.apply(this),this}e.videoskin=e.videoskin||new Object,e.videoskin.collapsed=e.videoskin.collapsed||new Object,e.videoskin.expanded=e.videoskin.expanded||new Object,e.videoskin.videoplayer=e.videoskin.videoplayer||new Object,e.videoskin.expand=expand=function(){e.videoskin.state="expanded",e.videoskin.button_expand&&e.videoskin.button_expand.setAttributeNS(null,"points","10 20 9 19 16 12 23 19 22 20 16 14"),e.videoskin.expanded.button_expand&&(e.videoskin.expanded.button_expand.style.opacity=0),L.pushdown.style.height=L.videoskin.style.height,a(),o(),n(),e.videoskin.hide()},e.videoskin.collapse=collapse=function(){e.videoskin.state="collapsed",e.videoskin.button_expand&&e.videoskin.button_expand.setAttributeNS(null,"points","22 12 23 13 16 20 9 13 10 12 16 18"),L.pushdown.style.height=e.videoskin.settings.collapsed+"px",s(),i(),e.videoskin.show()};var L=new Object;L.object=new Object;new Array("","-o-","-ms-","-moz-","-webkit-");e.videoskin.new_button=new_button=function(t,i,n){var o=n.parentNode,s=O("div",t),a=O("div",t);for(var d in n.style)s.style[d]=a.style[d]=n.style[d];a.style.zIndex=parseInt(i.style.zIndex)+parseInt(n.style.zIndex),i.style.left=parseInt(i.style.left)-parseInt(n.style.left)+"px",i.style.top=parseInt(i.style.top)-parseInt(n.style.top)+"px",n.style.left=n.style.top=a.style.left=a.style.top="0px",i.style.opacity=.75,s.appendChild(n),s.appendChild(i),s.appendChild(a),a.append_listener("mouseover",function(e){e.target.style.cursor="pointer",i.style.opacity=1}),a.append_listener("mouseout",function(e){e.target.style.cursor="auto",i.style.opacity=.75}),e.videoskin.expanded[t]=s,o.appendChild(e.videoskin.expanded[t])},Object.prototype.append_listener=function(e,t){switch(!0){case!!this.addEventListener:this.addEventListener(e,t);break;case!!this.attachEvent:this.attachEvent("on"+e,t);break;default:this["on"+e]=t}(String(e).toLowerCase().indexOf("mouse")>-1||String(e).toLowerCase().indexOf("click")>-1)&&(this.style.pointerEvents="auto")},Object.prototype.remove_listener=function(e,t){switch(!0){case!!this.removeEventListener:this.addEventListener(e,t);break;case!!this.removeEvent:this.attachEvent("on"+e,t);break;default:this["on"+e]=null}(String(e).toLowerCase().indexOf("mouse")>-1||String(e).toLowerCase().indexOf("click")>-1)&&(this.style.pointerEvents="none")};var z=function(){var e=0;return function(){return e+=10}}();B.prototype=new B,B.prototype.constructor=B,e.Videoskin=B}(window.top.glowicki=window.top.glowicki||new Object);