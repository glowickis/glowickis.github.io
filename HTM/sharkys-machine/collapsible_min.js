!function(e){function t(){n(),s(),E.videoplayer.play(),h()}function a(){i(),o(),E.videoplayer.pause(),E.videoplayer.seek(),m()}function l(){var e=E.elements.collapsed;e.set_interval=setInterval(function(){var t=100*Math.random();switch(!0){case t>0&&100/9*1>=t:e.collapsed_B.style.opacity=.9+.1*Math.random();break;case t>100/9*1&&100/9*2>=t:e.collapsed_U.style.opacity=.9+.1*Math.random();break;case t>100/9*2&&100/9*3>=t:e.collapsed_T.style.opacity=.9+.1*Math.random();break;case t>100/9*3&&100/9*4>=t:e.collapsed_O.style.opacity=.9+.1*Math.random();break;case t>100/9*4&&100/9*5>=t:e.collapsed_L.style.opacity=.9+.1*Math.random();break;case t>100/9*5&&100/9*6>=t:e.collapsed_D.style.opacity=.9+.1*Math.random();break;case t>100/9*6&&100/9*7>=t:e.collapsed_K.style.opacity=.9+.1*Math.random();break;case t>100/9*7&&100/9*8>=t:e.collapsed_M.style.opacity=.9+.1*Math.random();break;case t>100/9*8&&100>=t:e.collapsed_C.style.opacity=.9+.1*Math.random()}},1e3/30)}function n(){E.elements.container.style.visibility="hidden";var e=E.elements.collapsed;e.collapsed_burt.style.opacity=0,e.collapsed_B.style.opacity=0,e.collapsed_U.style.opacity=0,e.collapsed_T.style.opacity=0,e.collapsed_reynolds.style.opacity=0,e.collapsed_O.style.opacity=0,e.collapsed_L.style.opacity=0,e.collapsed_D.style.opacity=0,e.collapsed_in.style.opacity=0,e.collapsed_sharkys.style.opacity=0,e.collapsed_K.style.opacity=0,e.collapsed_machine.style.opacity=0,e.collapsed_M.style.opacity=0,e.collapsed_C.style.opacity=0,e.collapsed_line.style.opacity=0,clearInterval(e.set_interval)}function i(){E.elements.container.style.visibility="visible";var e=E.elements.collapsed;N(e.collapsed_B,.5,{opacity:0},{opacity:1},{delay:0}),N(e.collapsed_U,.5,{opacity:0},{opacity:1},{delay:0}),N(e.collapsed_T,.5,{opacity:0},{opacity:1},{delay:0}),N(e.collapsed_burt,.5,{opacity:0},{opacity:1},{delay:0}),N(e.collapsed_O,.5,{opacity:0},{opacity:1},{delay:.2}),N(e.collapsed_L,.5,{opacity:0},{opacity:1},{delay:.2}),N(e.collapsed_D,.5,{opacity:0},{opacity:1},{delay:.2}),N(e.collapsed_reynolds,.5,{opacity:0},{opacity:1},{delay:.2}),N(e.collapsed_in,.5,{opacity:0},{opacity:1},{delay:.3}),N(e.collapsed_K,.5,{opacity:0},{opacity:1},{delay:.4}),N(e.collapsed_sharkys,.5,{opacity:0},{opacity:1},{delay:.4}),N(e.collapsed_M,.5,{opacity:0},{opacity:1},{delay:.6}),N(e.collapsed_C,.5,{opacity:0},{opacity:1},{delay:.6}),N(e.collapsed_machine,.5,{opacity:0},{opacity:1},{delay:.6,callback:l}),N(e.collapsed_line,.5,{opacity:0},{opacity:1},{delay:.8})}function o(){E.elements.content.style.visibility="hidden";var e=E.elements.expanded;e.expanded_sharky.style.opacity=0,e.expanded_dominoe.style.opacity=0,e.expanded_arch.style.opacity=0,e.expanded_friscoe.style.opacity=0,e.expanded_papa.style.opacity=0,e.expanded_nosh.style.opacity=0,e.expanded_bluray.style.opacity=0,e.expanded_titles_burt.style.opacity=0,e.expanded_titles_reynolds.style.opacity=0,e.expanded_titles_in.style.opacity=0,e.expanded_titles_sharkys.style.opacity=0,e.expanded_titles_machine.style.opacity=0,e.expanded_titles_line.style.opacity=0,e.expanded_text_nobody.style.opacity=0,e.expanded_text_leans.style.opacity=0,e.expanded_text_on.style.opacity=0,e.expanded_text_sharkys.style.opacity=0,e.expanded_text_machine.style.opacity=0}function s(){E.elements.content.style.visibility="visible";var e=E.elements.expanded;N(e.expanded_sharky,.5,{opacity:0},{opacity:1},{delay:0}),N(e.expanded_dominoe,.5,{opacity:0},{opacity:1},{delay:.1}),N(e.expanded_arch,.5,{opacity:0},{opacity:1},{delay:.2}),N(e.expanded_friscoe,.5,{opacity:0},{opacity:1},{delay:.3}),N(e.expanded_papa,.5,{opacity:0},{opacity:1},{delay:.4}),N(e.expanded_nosh,.5,{opacity:0},{opacity:1},{delay:.5}),N(e.expanded_titles_burt,.5,{opacity:0},{opacity:1},{delay:.1}),N(e.expanded_titles_reynolds,.5,{opacity:0},{opacity:1},{delay:.2}),N(e.expanded_titles_in,.5,{opacity:0},{opacity:1},{delay:.3}),N(e.expanded_titles_sharkys,.5,{opacity:0},{opacity:1},{delay:.4}),N(e.expanded_titles_machine,.5,{opacity:0},{opacity:1},{delay:.5}),N(e.expanded_titles_line,.5,{opacity:0},{opacity:1},{delay:.6}),N(e.expanded_bluray,.25,{opacity:0},{opacity:1},{delay:.2}),N(e.expanded_text_nobody,.5,{opacity:0},{opacity:1},{delay:.3}),N(e.expanded_text_leans,.5,{opacity:0},{opacity:1},{delay:.4}),N(e.expanded_text_on,.5,{opacity:0},{opacity:1},{delay:.5}),N(e.expanded_text_sharkys,.5,{opacity:0},{opacity:1},{delay:.6}),N(e.expanded_text_machine,.5,{opacity:0},{opacity:1},{delay:.7})}function d(){n(),i(),o()}function p(){var e=g("div","container",{left:0,top:0,width:300,height:250,backgroundColor:"#000000"});e.style.visibility="hidden",E.elements.container=e;var t=document.getElementById("placeholder");t.style.width=e.style.width,t.style.height=e.style.height,t.style.position="relative",t.style.overflow="visible",t.style.left="50%",t.style.marginLeft=0-parseInt(e.style.width)/2+"px",t.appendChild(E.elements.container)}function c(){var e=g("div","collapsed",{left:0,top:0,width:300,height:250});E.elements.collapsed=e,E.elements.container.appendChild(E.elements.collapsed),y(),E.elements.collapsed=new Object;for(var t in C)if("append_listener"!=t&&"remove_listener"!=t&&t.toLowerCase().indexOf("collapsed")>-1){var a=new S(t);e.appendChild(a),E.elements.collapsed[t]=a}E.elements.expand=b("expand"),e.appendChild(E.elements.expand)}function y(){var e=g("img","img",{left:0,top:0,width:300,height:250,zIndex:0}),t=document.createElement("script");t.onload=r,t.src="V64.js",document.head.appendChild(t),E.elements.img=e,E.elements.collapsed.appendChild(E.elements.img)}function r(){delete e.V64.append_listener,delete e.V64.remove_listener,E.keys=Object.keys(e.V64),E.keys.sort(),m()}function m(){h(),E.elements.img.set_interval=setInterval(function(){E.elements.img.src=e.V64[E.keys[E.elements.img.frame]],E.elements.img.frame+1<E.keys.length-1?E.elements.img.frame++:h()},1e3/12)}function h(){clearInterval(E.elements.img.set_interval),E.elements.img.frame=0,E.elements.img.src=e.V64[E.keys[E.elements.img.frame]]}function _(){var e=g("div","content",{left:0,top:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.75)"});e.style.visibility="hidden",E.elements.content=e,document.body.appendChild(E.elements.content)}function u(){var e=g("div","expanded",{left:"50%",top:"50%",width:1920,height:1080});e.style.marginLeft="-960px",e.style.marginTop="-540px",E.elements.expanded=e,E.elements.content.appendChild(E.elements.expanded),v(),E.elements.expanded=new Object;for(var t in C)if("append_listener"!=t&&"remove_listener"!=t&&t.toLowerCase().indexOf("expanded")>-1)if(t.toLowerCase().indexOf("button")>-1){var a=t.split("_");a=a[a.length-1];var l=A(a);for(var n in C[t])"jpeg"!=n&&"mask"!=n&&(l.style[n]=C[t][n]);e.appendChild(l),E.elements.expanded[t]=l}else{var i=new S(t);e.appendChild(i),E.elements.expanded[t]=i}E.elements.collapse=b("collapse"),E.elements.collapse.style.left="1350px",E.elements.collapse.style.top="344px",e.appendChild(E.elements.collapse)}function v(){var e=g("div","video",{left:870,top:396,width:512,height:288,backgroundColor:"#000000",zIndex:9999}),t={preload:"metadata",autoplay:!1,loop:!1,muted:!1,titles:!0,fullscreen:!0,controls:"controls",time_duration:"both"},a=[{title:"Sharky's Machine - Trailer",src:"sharkys-machine-commercial.mp4",poster:"sharkys-machine-commercial.jpg"}];E.videoplayer=new O(e,t,a),E.elements.video=e,E.elements.expanded.appendChild(E.elements.video)}function x(){p(),c(),_(),u(),d()}function f(e,t){switch(!0){case!!this.addEventListener:this.addEventListener(e,t);break;case!!this.attachEvent:this.attachEvent("on"+e,t);break;default:this["on"+e]=t}(String(e).toLowerCase().indexOf("mouse")>-1||String(e).toLowerCase().indexOf("click")>-1)&&this.style&&(this.style.pointerEvents="auto")}function b(e){var l="http://www.w3.org/2000/svg",n=document.createElementNS(l,"svg");n.setAttributeNS(null,"id","button_"+e),n.setAttributeNS(null,"viewBox","0 0 32 32");var i=document.createElementNS(l,"rect");i.setAttributeNS(null,"id","background"),i.setAttributeNS(null,"width","32"),i.setAttributeNS(null,"height","32"),i.setAttributeNS(null,"fill","rgba(0,0,0,0.75)"),n.appendChild(i);var o=document.createElementNS(l,"polygon");switch(o.setAttributeNS(null,"id","foreground"),e){case"expand":o.setAttributeNS(null,"points","17.5 9 14.5 9 14.5 14.5 9 14.5 9 17.5 14.5 17.5 14.5 23 17.5 23 17.5 17.5 23 17.5 23 14.5 17.5 14.5 17.5 9");break;case"collapse":o.setAttributeNS(null,"points","22 12 20 10 16 14 12 10 10 12 14 16 10 20 12 22 16 18 20 22 22 20 18 16 22 12")}o.setAttributeNS(null,"fill","#FFFFFF"),o.setAttributeNS(null,"opacity",.75),n.appendChild(o);var s=document.createElementNS(l,"rect");return s.setAttributeNS(null,"id","button_"+e),s.setAttributeNS(null,"width","32"),s.setAttributeNS(null,"height","32"),s.setAttributeNS(null,"fill","rgba(255,0,0,0)"),n.appendChild(s),s.append_listener=f,s.append_listener("mouseover",function(e){e.target.style.cursor="pointer",e.target.parentNode.getElementById("foreground").setAttributeNS(null,"opacity",1)}),s.append_listener("mouseout",function(e){e.target.style.cursor="auto",e.target.parentNode.getElementById("foreground").setAttributeNS(null,"opacity",.75)}),s.append_listener("click",function(e){switch(e.target.id){case"button_expand":t();break;case"button_collapse":default:a()}}),n.style.width=n.style.height="32px",n.style.position="absolute",n.style.zIndex=9999,n}function g(e,t,a){var l=document.createElement(e);l.id=t,a=a||new Object;for(var n in a){switch(n){case"left":case"right":case"top":case"bottom":case"width":case"height":if(String(a[n]).indexOf("%")<0)var i=parseInt(a[n])+"px";else var i=a[n];break;default:var i=a[n]}l.style[n]=i}return 0==a.hasOwnProperty("position")&&(l.style.position="absolute"),0==a.hasOwnProperty("overflowX")&&0==a.hasOwnProperty("overflowY")&&0==a.hasOwnProperty("overflow")&&(l.style.overflow="hidden"),0==a.hasOwnProperty("pointerEvents")&&(l.style.pointerEvents="none"),0==a.hasOwnProperty("zIndex")&&(l.style.zIndex=I()),l}function w(){C=e.B64,S=e.Canvas,N=e.TweenIota,O=e.Videoplayer,A=e.SocialButton,delete C.append_listener,delete C.remove_listener,x()}function k(){w.apply(this)}var C,S,N,O,A,E=new Object;E.elements=new Object,E.state="collapsed";var I=function(){var e=0;return function(){return e+=10}}();e.Collapsible=k}(window.top.glowicki=window.top.glowicki||new Object);