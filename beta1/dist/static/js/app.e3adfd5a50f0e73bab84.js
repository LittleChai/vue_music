webpackJsonp([1],{14:function(t,e,s){function i(t){s(36),s(37)}var a=s(12)(s(33),s(43),i,null,null);t.exports=a.exports},33:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(4),a=s.n(i);e.default={components:{vuemusic:a.a},data:function(){return{}},methods:{},mounted:function(){function t(){e.style.height=window.innerHeight+"px",e.style.width=window.innerWidth+"px",s.style.width=window.innerWidth+"px",i.style.height=window.innerHeight-75+"px"}var e=document.getElementsByTagName("body")[0],s=document.getElementsByClassName("music")[0],i=document.getElementsByClassName("music-play-list")[0];t(),window.addEventListener("resize",function(){t()})}}},34:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),a=s.n(i);e.default={components:{},data:function(){return{musicData:[],dragData:[],dragLrc:[],dragMusicUrl:[],waveWidth:0,waveHeight:0,c1:"rgb(255,239,252)",c2:"rgb(217,82,80)",c3:"rgb(150,120,110)",cutHeight:0,listShow:0,listScroll:0,barScroll:0,listScroll2:0,barTop:0,ifPlay:!0,ifVol:0,volScales:1,planScales:0,ifCut:0,orderClass:"order-play",volLeft:0,musicLeft:0,curTime:0,ifHeader:0,audioUrl:null,playNum:0,dragNum:0,lrcData:[],lrcObj:{},lrcTime:{},lrcSecond:0,resizeHeight:0,ifMy:0,myScroll:0,scrollProp:0}},methods:{getMusicData:function(){var t=this;a.a.get("http://music.wuyayu.com/static/music.json").then(function(e){t.musicData=e.data},function(t){console.log("music.json获取失败")})},dragMusic:function(){var t=this;document.addEventListener("dragover",function(t){t.preventDefault()}),document.addEventListener("drop",function(e){e.preventDefault();for(var s=e.dataTransfer.files,i=0;i<s.length;i++){var a=s[i].name.lastIndexOf("."),l=s[i].name.substr(a+1);if("mp3"==l||"flac"==l){var r=s[i].name.substring(0,s[i].name.lastIndexOf(".")),n=window.URL.createObjectURL(s[i]);t.dragData.push({name:r.split("-")[1].trim(),singer:r.split("-")[0].trim(),url:n})}}t.clearRepeat(t.dragData,"name"),t.showList2()})},getInput:function(){var t=event.currentTarget.files,e=t[0].name.lastIndexOf("."),s=t[0].name.substr(e+1);if("mp3"==s||"flac"==s){var i=t[0].name.substring(0,t[0].name.lastIndexOf(".")),a=window.URL.createObjectURL(t[0]);this.dragData.push({name:i.split("-")[1].trim(),singer:i.split("-")[0].trim(),url:a})}this.clearRepeat(this.dragData,"name"),this.showList2()},clearRepeat:function(t,e){for(var s=[],i={},a=0;a<t.length;a++)i[t[a][e]]?i[t[a][e]].push(t[a]):(i[t[a][e]]=[t[a]],s.push(t[a]));this.dragData=s,this.saveMusic()},getLrcFile:function(t){var e=this;"false"==this.$refs.listul2.getAttribute("myplay")?a.a.get("http://music.wuyayu.com/static/lrc/"+t+".lrc").then(function(t){"纯音乐,请欣赏"==t.data||"后摇,请欣赏"==t.data||"暂无歌词"==t.data?(e.lrcData=t.data,e.showLrc()):(e.lrcData=t.data,e.parseLyric(e.lrcData))},function(t){e.lrcData="未找到歌词"}):(this.dragLrc="未找到歌词",this.showLrc())},parseLyric:function(t){this.lrcObj={},this.lrcTime={};for(var e=t.split("\n"),s=0;s<e.length;s++){var i=decodeURIComponent(e[s]),a=/\[\d*:\d*((\.|\:)\d*)*\]/g,l=i.match(a);if(l){var r=i.replace(a,"");this.lrcObj[s]=r,l.toString(),this.lrcTime[s]=l}}this.showLrc()},showLrc:function(){if(this.$refs.lrcul.innerHTML="","false"==this.$refs.listul2.getAttribute("myplay"))if("纯音乐,请欣赏"==this.lrcData||"后摇,请欣赏"==this.lrcData||"暂无歌词"==this.lrcData){var t=document.createElement("li");t.innerHTML=this.lrcData,this.$refs.lrcul.appendChild(t);var e=this.$refs.musiclrc.offsetHeight/2;this.$refs.lrcul.style.transform="translateY("+e+"px)"}else{for(var s in this.lrcObj){"\n\n"==this.lrcObj[s]&&console.log(1);var i=document.createElement("li");i.innerHTML=this.lrcObj[s],this.lrcTime[s]=this.lrcTime[s].toString().replace(/\[|]/g,"");var a=this.lrcTime[s].split(":");this.lrcSecond=60*Number(a[0])+1*Number(a[1]),this.lrcSecond=Math.round(this.lrcSecond),i.setAttribute("time",this.lrcSecond),i.setAttribute("ifchoose","false"),this.$refs.lrcul.appendChild(i)}for(var l=0;l<this.$refs.lrcul.children.length;l++)"\n\n"==this.$refs.lrcul.children[l].innerHTML&&this.$refs.lrcul.removeChild(this.$refs.lrcul.children[l]);this.$refs.lrcul.setAttribute("move",!0);var r=this.$refs.musiclrc.offsetHeight/2+50;this.$refs.lrcul.style.transform="translateY("+r+"px)"}else{var n=document.createElement("li");n.innerHTML=this.dragLrc,this.$refs.lrcul.appendChild(n),this.$refs.lrcul.style.transform="translateY("+pianoY+"px)"}},showLrcDiv:function(){this.$refs.musiclrc.style.opacity=1,this.$refs.musicwave.style.opacity=0},showWaveDiv:function(){this.$refs.musiclrc.style.opacity=0,this.$refs.musicwave.style.opacity=1},showTitle:function(t){var e=document.getElementById("show-title"),s=null;clearTimeout(s),e.innerHTML=t,e.style.transform="translate(-43px)",s=setTimeout(function(){e.style.transform="translate(0px)"},3e3)},playMusic:function(){for(var t=this,e=0;e<this.musicData.length;e++)t.$refs.listul.getElementsByClassName("list-ul")[0].children[e].setAttribute("class","");null!==t.$refs.audio&&("false"==t.$refs.listul2.getElementsByClassName("list-ul2")[0].getAttribute("myplay")?(t.$refs.listul.getElementsByClassName("list-ul")[0].children[t.playNum].setAttribute("class","playing"),t.ifPlay?(t.$refs.audio.play(),t.ifPlay=!1):(t.$refs.audio.pause(),t.ifPlay=!0)):t.ifPlay?(t.$refs.audio.play(),t.ifPlay=!1):(t.$refs.audio.pause(),t.ifPlay=!0))},closeVol:function(){this.ifVol?(this.ifVol=0,this.$refs.audio.volume=this.volScales):(this.ifVol=1,this.$refs.audio.volume=0)},volClick:function(t){var e=document.getElementsByClassName("vol-bar-btn")[0],s=document.getElementsByClassName("vol-plan")[0],i=(document.getElementsByClassName("music-vol")[0],document.getElementsByClassName("music-wrap")[0]),a=document.getElementsByClassName("vol-bar")[0];this.volLeft=t.clientX-a.offsetLeft-i.offsetLeft-3,e.style.left=this.volLeft-e.offsetWidth/2+"px",this.volScales=e.offsetLeft/a.offsetWidth,this.volScales>0?(document.getElementById("audio").volume=this.volScales,s.style.width=a.offsetWidth*this.volScales+"px",this.ifVol=1,this.closeVol()):0==this.volScales&&(document.getElementById("audio").volume=this.volScales,e.style.left="-6px",s.style.width="6px",this.ifVol=0,this.closeVol())},volDrag:function(){var t=document.getElementsByClassName("vol-bar-btn")[0],e=document.getElementsByClassName("vol-bar")[0],s=document.getElementsByClassName("vol-plan")[0],i=(document.getElementsByClassName("music-vol")[0],document.getElementsByClassName("music-wrap")[0]),a=this;document.onmousemove=function(l){a.volLeft=l.clientX-e.offsetLeft-i.offsetLeft-t.offsetWidth/2,a.volLeft=a.volLeft+3,a.volLeft<=0&&(a.volLeft=0),a.volLeft>=e.offsetWidth&&(a.volLeft=e.offsetWidth),t.style.left=a.volLeft-6+"px",a.volScales=t.offsetLeft/e.offsetWidth,a.volScales>0?(document.getElementById("audio").volume=a.volScales,s.style.width=e.offsetWidth*a.volScales+"px",a.ifVol=1,a.closeVol()):0==a.volScales&&(document.getElementById("audio").volume=a.volScales,s.style.width="-6px",a.ifVol=0,a.closeVol())},document.onmouseup=function(){a.volScales=t.offsetLeft/e.offsetWidth,document.onmousemove=null,document.onmousedown=null}},planClick:function(t){var e=document.getElementById("audio"),s=document.getElementsByClassName("music-drag")[0],i=document.getElementsByClassName("music-bar")[0],a=document.getElementsByClassName("music-plan")[0],l=(document.getElementsByClassName("music-show")[0],document.getElementsByClassName("music-wrap")[0]);this.musicLeft=t.clientX-l.offsetLeft-i.offsetLeft-6,this.planScales=this.musicLeft/i.offsetWidth,s.style.left=this.musicLeft+"px",a.style.width=i.offsetWidth*this.planScales+"px",e.currentTime=e.duration*this.planScales,this.ifPlay=!0,this.playMusic(),this.curTime=Math.round(e.currentTime),this.dragScroll()},planDrag:function(){var t=document.getElementById("audio"),e=document.getElementsByClassName("music-drag")[0],s=document.getElementsByClassName("music-bar")[0],i=document.getElementsByClassName("music-plan")[0],a=(document.getElementsByClassName("music-show")[0],document.getElementsByClassName("music-wrap")[0]);this.ifPlay=!1,this.playMusic();var l=this;document.onmousemove=function(t){l.musicLeft=t.clientX-s.offsetLeft-a.offsetLeft-e.offsetWidth/2,l.musicLeft<=0&&(l.musicLeft=0),l.musicLeft>=s.offsetWidth&&(l.musicLeft=s.offsetWidth),l.planScales=l.musicLeft/s.offsetWidth,e.style.left=l.musicLeft+"px",i.style.width=s.offsetWidth*l.planScales+"px"},document.onmouseup=function(){l.planScales=e.offsetLeft/s.offsetWidth,t.currentTime=t.duration*l.planScales,l.ifPlay=!0,l.playMusic(),document.onmousemove=null,document.onmousedown=null,document.onmouseup=null,l.curTime=Math.round(t.currentTime.toFixed(1)),l.dragScroll()}},cutOrder:function(){this.curOrderFn()},curOrderFn:function(){0==this.ifCut?(this.orderClass="random-play",this.ifCut=1,this.showTitle("随机播放")):1==this.ifCut?(this.orderClass="one-play",this.ifCut=2,this.showTitle("单曲循环")):2==this.ifCut?(this.orderClass="list-play",this.ifCut=3,this.showTitle("列表循环")):(this.orderClass="order-play",this.ifCut=0,this.showTitle("顺序循环"))},throttle:function(t,e,s){var i=null,a=(new Date).getTime();return function(){var l=this,r=arguments,n=(new Date).getTime();clearTimeout(i),console.log(n-a),n-a>=s?t.apply(l,r):i=setTimeout(function(){t.apply(l,r)},e)}},showList:function(){0==this.listShow?(this.$refs.playlist.style.transform="translate(0)",this.$refs.musictop.style.width=window.innerWidth-232+"px",this.$refs.musictop.style.transform="translateY(63px)",this.$refs.musiclrc.style.height=window.innerHeight-85-95+"px",this.$refs.musicwave.style.height=window.innerHeight-85-200+"px",this.dragScroll(),this.listShow=1,this.$refs.playlist.setAttribute("ifshow",1),this.waveWidth=this.$refs.musicwave.offsetWidth,this.waveHeight=this.$refs.musicwave.offsetHeight,this.$refs.headerul.style.top="4px"):(this.$refs.playlist.style.transform="translate(-230px)",this.$refs.musictop.style.width=window.innerWidth+"px",this.$refs.musictop.style.transform="translateY(0px)",this.$refs.musiclrc.style.height=this.$refs.musiclrc.offsetHeight+50+"px",this.$refs.musicwave.style.height=this.$refs.musicwave.offsetHeight+50+"px",this.dragScroll(),this.listShow=0,this.$refs.playlist.setAttribute("ifshow",0),this.waveWidth=this.$refs.musicwave.offsetWidth,this.waveHeight=this.$refs.musicwave.offsetHeight,this.$refs.headerul.style.top="-120px")},firstGet:function(){this.$refs.audio.src=this.musicData[0].url,this.$refs.showname.innerHTML=this.musicData[0].name+" - "+this.musicData[0].singer;var t=this;this.$refs.audio.addEventListener("canplaythrough",function(){t.timeActive()}),this.getLrcFile(this.musicData[0].name)},timeActive:function(){var t=parseInt(this.$refs.audio.duration%60),e=parseInt(this.$refs.audio.duration/60);t<=9&&(t="0"+t),e<=9&&(e="0"+e),this.$refs.alltime.innerHTML=e+":"+t;var s=parseInt(this.$refs.audio.currentTime%60),i=parseInt(this.$refs.audio.currentTime/60);s<=9&&(s="0"+s),i<=9&&(i="0"+i),this.$refs.curtime.innerHTML=i+":"+s},getMusicTime:function(){var t=document.getElementById("audio"),e=document.getElementsByClassName("music-drag")[0],s=document.getElementsByClassName("music-bar")[0],i=document.getElementsByClassName("music-plan")[0],a=this;t.addEventListener("timeupdate",function(){a.curTime=Math.round(t.currentTime),a.planScales=t.currentTime/t.duration,i.style.width=s.offsetWidth*a.planScales+"px",e.style.left=s.offsetWidth*a.planScales+"px",a.timeActive(),"纯音乐,请欣赏"==a.lrcData&&"未找到歌词"==a.dragLrc||a.lrcScroll()})},lrcScroll:function(){if("false"==this.$refs.listul2.getAttribute("myplay")){var t=0;if("true"==this.$refs.lrcul.getAttribute("move"))for(var e=this.$refs.lrcul.children,s=0;s<e.length;s++){var i=0;if(e[s].getAttribute("time")==this.curTime&&"false"==e[s].getAttribute("ifchoose")){for(var a=0;a<e.length;a++)e[a].setAttribute("class","");t++,1===t&&(e[s].setAttribute("class","playing"),e[s].setAttribute("ifchoose","true"),i=s-1<0?40:e[s-1].offsetHeight),2===t&&(e[s].setAttribute("class","playing"),e[s-1].setAttribute("class","playing"),e[s].setAttribute("ifchoose","true"),e[s-1].setAttribute("ifchoose","true"),i=s-2<0||s-1<0?80:e[s].offsetHeight+e[s-1].offsetHeight,i/=2),3===t&&(e[s].setAttribute("class","playing"),e[s-1].setAttribute("class","playing"),e[s-2].setAttribute("class","playing"),e[s].setAttribute("ifchoose","true"),e[s-1].setAttribute("ifchoose","true"),e[s-2].setAttribute("ifchoose","true"),i=e[s].offsetHeight+e[s-1].offsetHeight+e[s-2].offsetHeight,i/=2),4===t&&(e[s].setAttribute("class","playing"),e[s-1].setAttribute("class","playing"),e[s-2].setAttribute("class","playing"),e[s-3].setAttribute("class","playing"),e[s].setAttribute("ifchoose","true"),e[s-1].setAttribute("ifchoose","true"),e[s-2].setAttribute("ifchoose","true"),e[s-3].setAttribute("ifchoose","true"),i=e[s].offsetHeight+e[s-1].offsetHeight+e[s-2].offsetHeight+e[s-3].offsetHeight/2);var l=parseInt(this.$refs.lrcul.style.transform.substring(11)),r=l-i;this.$refs.lrcul.style.transform="translateY("+r+"px)"}}}},dragScroll:function(){if("false"==this.$refs.listul2.getAttribute("myplay")){for(var t=document.getElementsByClassName("lrc-ul")[0].children,e=document.getElementsByClassName("lrc-ul")[0],s=document.getElementsByClassName("music-lrc")[0],i=0,a=0,l=0;l<t.length;l++)t[l].setAttribute("class","");if(1==t.length);else{i=0,a=0;for(var r=0;r<t.length;r++)t[r].getAttribute("time")<=this.curTime&&(i++,a+=t[r].offsetHeight,t[r].setAttribute("class",""));if(0==i){var n=this.$refs.musiclrc.offsetHeight/2+50;e.style.transform="translateY("+n+"px)"}else{var u=s.offsetHeight/2-a+40;e.style.transform="translateY("+u+"px)",i<3?1==i?t[0].getAttribute("time")==t[1].getAttribute("time")?(u=s.offsetHeight/2-a+100,e.style.transform="translateY("+u+"px)",t[0].setAttribute("class","playing"),t[1].setAttribute("class","playing")):(u=this.$refs.musiclrc.offsetHeight/2+50,e.style.transform="translateY("+u+"px)",t[0].setAttribute("class","playing")):2==i&&(u=s.offsetHeight/2-a+100,e.style.transform="translateY("+u+"px)",t[0].setAttribute("class","playing"),t[1].setAttribute("class","playing")):t[i-1].getAttribute("time")==t[i-2].getAttribute("time")?(t[i-1].setAttribute("class","playing"),t[i-2].setAttribute("class","playing"),u=s.offsetHeight/2-a+60,e.style.transform="translateY("+u+"px)"):t[i-1].getAttribute("time")==t[i].getAttribute("time")?(t[i-1].setAttribute("class","playing"),t[i].setAttribute("class","playing"),u=s.offsetHeight/2-a+60,e.style.transform="translateY("+u+"px)"):t[i-1].setAttribute("class","playing")}}}},musicEndsPlay:function(){if("false"==this.$refs.listul2.getAttribute("myplay")){document.getElementById("audio").src=this.musicData[this.playNum].url,this.$refs.listul.children[this.playNum].setAttribute("class","playing"),this.$refs.showname.innerHTML=this.musicData[this.playNum].name+" - "+this.musicData[this.playNum].singer,this.getMusicTime(),this.ifPlay=!0,this.playMusic(),this.getLrcFile(this.musicData[this.playNum].name)}else{document.getElementById("audio").src=this.dragData[this.dragNum].url,this.$refs.listul2.children[this.dragNum].setAttribute("class","playing"),this.$refs.showname.innerHTML=this.dragData[this.dragNum].name+" - "+this.dragData[this.dragNum].singer,this.getMusicTime(),this.ifPlay=!0,this.playMusic()}},whatKind:function(){var t=this;if("false"==t.$refs.listul2.getAttribute("myplay")){for(var e=0;e<this.musicData.length;e++)t.$refs.listul.children[e].setAttribute("class","");0==t.ifCut?(t.playNum+=1,t.playNum>=t.musicData.length-1&&(t.playNum=t.musicData.length-1),t.musicEndsPlay()):1==t.ifCut?(t.playNum=parseInt(Math.random()*t.musicData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.playNum+=1,t.playNum>=t.musicData.length&&(t.playNum=0),t.musicEndsPlay())}else{for(var e=0;e<t.$refs.listul2.children.length;e++)"addmy"==t.$refs.listul2.children[e].getAttribute("class")||t.$refs.listul2.children[e].setAttribute("class","");0==t.ifCut?(t.dragNum+=1,t.dragNum>=t.dragData.length-1&&(t.dragNum=t.dragData.length-1),t.musicEndsPlay()):1==t.ifCut?(t.dragNum=parseInt(Math.random()*t.dragData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.dragNum+=1,t.dragNum>=t.dragData.length&&(t.dragNum=0),t.musicEndsPlay())}},whatKind2:function(){var t=this;if("false"==t.$refs.listul2.getAttribute("myplay")){for(var e=0;e<this.musicData.length;e++)t.$refs.listul.children[e].setAttribute("class","");0==t.ifCut?(t.playNum-=1,t.playNum<=0&&(t.playNum=0),t.musicEndsPlay()):1==t.ifCut?(t.playNum=parseInt(Math.random()*t.musicData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.playNum-=1,t.playNum<0&&(t.playNum=t.musicData.length-1),t.musicEndsPlay())}else{for(var e=0;e<t.$refs.listul2.children.length;e++)"addmy"==t.$refs.listul2.children[e].getAttribute("class")||t.$refs.listul2.children[e].setAttribute("class","");0==t.ifCut?(t.dragNum-=1,t.dragNum<=0&&(t.dragNum=0),t.musicEndsPlay()):1==t.ifCut?(t.dragNum=parseInt(Math.random()*t.dragData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.dragNum-=1,t.dragNum<0&&(t.dragNum=thatdragData.length-1),t.musicEndsPlay())}},headerClick:function(){},showList1:function(){this.ifMy=0,this.$refs.headerul.children[1].setAttribute("class",""),this.$refs.headerul.children[0].setAttribute("class","choose"),document.getElementsByClassName("play-list-cut")[1].style.opacity=0,document.getElementsByClassName("play-list-cut")[1].style.zIndex=-999,document.getElementsByClassName("play-list-cut")[0].style.opacity=1,document.getElementsByClassName("play-list-cut")[0].style.zIndex=999,document.getElementsByClassName("play-list-cut")[1].setAttribute("myplay","false"),this.listNum()},showList2:function(){this.ifMy=1,this.$refs.headerul.children[0].setAttribute("class",""),this.$refs.headerul.children[1].setAttribute("class","choose"),document.getElementsByClassName("play-list-cut")[1].style.opacity=1,document.getElementsByClassName("play-list-cut")[1].style.zIndex=999,document.getElementsByClassName("play-list-cut")[0].style.opacity=0,document.getElementsByClassName("play-list-cut")[0].style.zIndex=-999,document.getElementsByClassName("play-list-cut")[1].setAttribute("myplay","true"),this.listNum()},listClick:function(){var t=document.getElementById("audio").src,e=document.getElementById("audio"),s=event.currentTarget;e.setAttribute("dataNum",s.getAttribute("num")),this.playNum=s.getAttribute("num")-0,this.audioUrl=this.musicData[this.playNum].url,this.$refs.listChild2.setAttribute("myplay","false");for(var i=0;i<this.$refs.listChild2.children.length;i++)"addmy"==this.$refs.listChild2.children[i].getAttribute("class")||this.$refs.listChild2.children[i].setAttribute("class","");if(t==this.audioUrl)s.setAttribute("class","playing"),this.playMusic();else{for(var i=0;i<this.musicData.length;i++)this.$refs.listChild1.children[i].setAttribute("class","");e.src=this.audioUrl,this.ifPlay=!0,this.$refs.showname.innerHTML=this.musicData[this.playNum].name+" - "+this.musicData[this.playNum].singer,s.setAttribute("class","playing"),this.playMusic()}this.getLrcFile(this.musicData[this.playNum].name)},listClick2:function(){var t=document.getElementById("audio").src,e=document.getElementById("audio"),s=event.currentTarget,i=s.getAttribute("num")-0;this.audioUrl=this.dragData[i].url,this.$refs.listul2.setAttribute("myplay","true"),this.dragNum=i;for(var a=0;a<this.musicData.length;a++)this.$refs.listChild1.children[a].setAttribute("class","");if(t==this.audioUrl)s.setAttribute("class","playing"),this.playMusic();else{for(var a=0;a<this.$refs.listChild2.children.length;a++)"addmy"==this.$refs.listChild2.children[a].getAttribute("class")||this.$refs.listChild2.children[a].setAttribute("class","");e.src=this.audioUrl,this.ifPlay=!0,this.$refs.showname.innerHTML=this.dragData[i].name+" - "+this.dragData[i].singer,s.setAttribute("class","playing"),this.playMusic()}this.getLrcFile(this.dragData[this.dragNum].name)},listNum:function(){var t=document.getElementsByClassName("music-list-img")[0];0==this.ifMy?t.innerHTML=this.musicData.length:t.innerHTML=this.dragData.length},removeLi:function(){var t=event.currentTarget,e=t.parentNode,s=e.getAttribute("num");this.dragData.splice(s,1),window.localStorage.clear(),this.saveMusic()},saveMusic:function(){},Visualizer:function(){function t(){var s=n.width,i=n.height-2,l=s/20,m=(Math.ceil(2*Math.random()),new Uint8Array(r.frequencyBinCount));r.getByteFrequencyData(m),r.fftSize=4096;var h=Math.round(m.length/l);a.clearRect(0,0,s,i);for(var f=0;f<l;f++){var d=m[f*h];o.length<Math.round(l)&&o.push(d),a.fillStyle=f%5==0?e.c1:f%2==0?e.c2:e.c3,d<o[f]?a.fillRect(20*f,i- --o[f],u,c+5):(a.fillRect(20*f,i-d,u,c+5),o[f]=d,0==d&&a.fillRect(20*f,i-d+c-20,u,c+9)),a.fillStyle=f%5==0?e.c1:f%2==0?e.c2:e.c3,a.fillRect(20*f,i-d+c+15,u,i)}requestAnimationFrame(t)}var e=this,s=document.getElementById("audio"),i=window.AudioContext||window.webkitAudioContext,a=new i,l=a.createMediaElementSource(s),r=a.createAnalyser();l.connect(r),r.connect(a.destination);var n=document.getElementById("canvas"),u=18,c=5,o=[],a=n.getContext("2d"),m=a.createLinearGradient(0,0,0,300);m.addColorStop(1,"#0f0"),m.addColorStop(.5,"#ff0"),m.addColorStop(0,"#f00"),t()}},mounted:function(){function t(t,s,i){e.c1=t,e.c2=s,e.c3=i}this.getMusicData(),this.dragMusic(),this.getMusicTime(),this.saveMusic();var e=this,s=document.getElementById("audio"),i=document.getElementsByClassName("music-play-list")[0],a=document.getElementsByClassName("imgurl");document.getElementsByClassName("list-ul")[0].children;if(window.localStorage.length>=3)for(var l=window.localStorage,r=0;r<l.length/3;r++)e.dragData.push({name:l["name"+r],singer:l["singer"+r],url:l["url"+r]});for(var r=0;r<a.length;r++)a[r].index=r,a[r].addEventListener("click",function(){for(var e=0;e<a.length;e++)a[e].classList.remove("current");this.classList.add("current");var s=this.getAttribute("imgurl");document.body.style.backgroundImage="url("+s+")",0===this.index?t("rgb(255,239,252)","rgb(217,82,80)","rgb(150,120,110)"):1===this.index?t("rgb(253,228,209)","rgb(251,204,202)","rgb(164,153,169)"):2===this.index?t("rgb(94,20,28)","rgb(244,70,72)","rgb(209,147,110)"):3===this.index?t("rgb(44,24,13)","rgb(240,106,101)","rgb(117,38,19)"):4===this.index?t("rgb(244,200,141)","rgb(240,159,120)","rgb(191,194,202)"):5===this.index&&t("rgb(58,158,214)","rgb(172,200,198)","rgb(107,50,99)")});document.onkeydown=function(t){t&&32==t.keyCode&&e.playMusic()},document.addEventListener("click",function(){e.ifHeader=0}),function(){e.$refs.playlist.style.height=window.innerHeight-75+"px",e.$refs.musictop.style.width=window.innerWidth+"px",e.$refs.musiclrc.style.height=window.innerHeight-85-95+"px",e.$refs.musiclrc.style.height=e.$refs.musiclrc.offsetHeight+50+"px",e.$refs.musicwave.style.height=window.innerHeight-85-200+"px",e.$refs.musicwave.style.height=e.$refs.musicwave.offsetHeight+50+"px",e.waveWidth=e.$refs.musicwave.offsetWidth,e.waveHeight=e.$refs.musicwave.offsetHeight}(),window.addEventListener("resize",function(){"1"==i.getAttribute("ifshow")?(e.$refs.musictop.style.width=window.innerWidth-232+"px",e.$refs.musiclrc.style.height=window.innerHeight-85-95+"px",e.$refs.musicwave.style.height=window.innerHeight-85-200+"px",e.waveWidth=e.$refs.musicwave.offsetWidth,e.waveHeight=e.$refs.musicwave.offsetHeight,e.showLrc(),e.dragScroll()):(e.$refs.musictop.style.width=window.innerWidth+"px",e.$refs.musiclrc.style.height=window.innerHeight-85-95+"px",e.$refs.musiclrc.style.height=e.$refs.musiclrc.offsetHeight+50+"px",e.$refs.musicwave.style.height=window.innerHeight-85-200+"px",e.$refs.musicwave.style.height=e.$refs.musicwave.offsetHeight+50+"px",e.waveWidth=e.$refs.musicwave.offsetWidth,e.waveHeight=e.$refs.musicwave.offsetHeight,e.showLrc(),e.dragScroll())}),s.addEventListener("timeupdate",function(){if(s.ended)if("false"==e.$refs.listul2.getAttribute("myplay")){for(var t=0;t<e.musicData.length;t++)e.$refs.listChild1.children[t].setAttribute("class","");0==e.ifCut?(e.playNum+=1,e.playNum>=e.musicData.length-1&&(e.playNum=e.musicData.length-1),e.musicEndsPlay()):1==e.ifCut?(e.playNum=parseInt(Math.random()*e.musicData.length),e.musicEndsPlay()):2==e.ifCut?e.musicEndsPlay():(e.playNum+=1,e.playNum>=e.musicData.length&&(e.playNum=0),e.musicEndsPlay())}else{for(var t=0;t<e.$refs.listChild2.children.length;t++)"addmy"==e.$refs.listChild2.children[t].getAttribute("class")||e.$refs.listChild2.children[t].setAttribute("class","");0==e.ifCut?(e.dragNum+=1,e.dragNum>=e.dragData.length-1&&(e.dragNum=e.dragData.length-1),e.musicEndsPlay()):1==e.ifCut?(e.dragNum=parseInt(Math.random()*e.dragData.length),e.musicEndsPlay()):2==e.ifCut?e.musicEndsPlay():(e.dragNum+=1,e.dragNum>=e.dragData.length&&(e.dragNum=0),e.musicEndsPlay())}})},watch:{musicData:function(t,e){var s=this;s.firstGet(),s.Visualizer(),document.oncontextmenu=function(t){s.showList(),t.returnValue=!1},s.listNum()}}}},35:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(5),a=s(14),l=s.n(a),r=s(3),n=s.n(r),u=s(13),c=s.n(u),o=s(4),m=(s.n(o),s(15)),h=s.n(m);i.default.config.productionTip=!1,i.default.use(c.a,n.a),i.default.use(h.a,{ops:{vuescroll:{mode:"native",sizeStrategy:"number",detectResize:!0},scrollPanel:{scrollingX:!0,scrollingY:!0},rail:{background:"#01a99a",opacity:0,size:"6px",specifyBorderRadius:!1,gutterOfEnds:null,gutterOfSide:"0",keepShow:!1},bar:{showDelay:1e3,onlyShowBarOnScroll:!1,keepShow:!0,background:"rgb(204,203,203)",opacity:1,hoverStyle:!1,specifyBorderRadius:!1,minSize:!1,size:"6px",disable:!1}},name:"v-scroll"}),new i.default({el:"#app",template:"<App/>",components:{App:l.a}})},36:function(t,e){},37:function(t,e){},38:function(t,e){},39:function(t,e){},4:function(t,e,s){function i(t){s(38),s(39)}var a=s(12)(s(34),s(44),i,null,null);t.exports=a.exports},43:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("vuemusic")],1)},staticRenderFns:[]}},44:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"music-wrap"}},[s("div",{staticClass:"music"},[s("audio",{ref:"audio",attrs:{id:"audio",crossorigin:"anonymous","data-num":"0"}}),t._v(" "),s("input",{staticClass:"hidden file",attrs:{type:"file",accept:"audio/mp3",id:"input-file"}}),t._v(" "),s("div",{staticClass:"show-title show-title-hide",attrs:{id:"show-title"}},[t._v("顺序播放")]),t._v(" "),s("div",{staticClass:"music-wrap"},[s("div",{staticClass:"music-btn"},[s("a",{staticClass:"c-btn prev",attrs:{id:"prev",title:"上一首"},on:{click:function(e){return t.whatKind2()}}}),t._v(" "),s("a",{staticClass:"c-btn",class:t.ifPlay?"play":"pause",attrs:{title:"播放/暂停"},on:{click:function(e){return t.playMusic()}}}),t._v(" "),s("a",{staticClass:"c-btn next",attrs:{id:"next",title:"下一首"},on:{click:function(e){return t.whatKind()}}})]),t._v(" "),s("div",{staticClass:"music-show"},[s("div",{staticClass:"music-name"},[s("div",{ref:"showname",staticClass:"music-show-name"}),t._v(" "),s("div",{staticClass:"music-time"},[s("span",{ref:"curtime",staticClass:"time-second"},[t._v("00:00")]),t._v(" "),s("span",{staticClass:"time-gang"},[t._v("/")]),t._v(" "),s("span",{ref:"alltime",staticClass:"time-all"},[t._v("00:00")])])]),t._v(" "),s("div",{staticClass:"music-bar",on:{click:t.planClick}},[s("div",{staticClass:"music-plan"}),t._v(" "),s("div",{staticClass:"music-drag",on:{mousedown:function(e){return e.stopPropagation(),t.planDrag(e)}}})])]),t._v(" "),s("div",{staticClass:"music-order"},[s("a",{staticClass:"c-btn order-play",class:this.orderClass,on:{click:function(e){return t.cutOrder()}}})]),t._v(" "),s("div",{staticClass:"music-vol"},[s("a",{staticClass:"c-btn vol-btn",class:t.ifVol?"vol-close":"vol-btn",on:{click:t.closeVol}}),t._v(" "),s("div",{staticClass:"vol-bar",on:{click:function(e){return e.stopPropagation(),t.volClick(e)}}},[s("div",{staticClass:"vol-plan"}),t._v(" "),s("div",{staticClass:"vol-bar-btn",on:{mousedown:function(e){return e.stopPropagation(),t.volDrag(e)}}})])]),t._v(" "),s("div",{staticClass:"music-list"},[s("a",{staticClass:"music-list-img",on:{click:function(e){return t.showList()}}})])])]),t._v(" "),s("ul",{ref:"headerul",staticClass:"list-header-ul"},[s("li",{staticClass:"choose",on:{click:function(e){return t.showList1()}}},[t._v("线上音乐")]),t._v(" "),s("li",{on:{click:function(e){return t.showList2()}}},[t._v("我的音乐")])]),t._v(" "),s("div",{ref:"playlist",staticClass:"music-play-list",attrs:{ifshow:"0"}},[s("div",{staticClass:"play-list-header",on:{click:function(e){return e.stopPropagation(),t.headerClick()}}},[t._v("Play List")]),t._v(" "),s("div",{ref:"listul",staticClass:"play-list-cut",staticStyle:{opacity:"1","z-index":"999"}},[s("v-scroll",[s("ul",{ref:"listChild1",staticClass:"play-list-ul list-ul"},t._l(t.musicData,function(e,i){return s("li",{attrs:{num:i,musicName:e.name},on:{click:function(e){return t.listClick()}}},[s("span",[t._v(t._s(i+1)+".")]),t._v("\n            "+t._s(e.name)+" - "+t._s(e.singer)+"\n          ")])}),0)])],1),t._v(" "),s("div",{ref:"listul2",staticClass:"play-list-cut",staticStyle:{opacity:"0","z-index":"-999"},attrs:{myplay:"false"}},[s("v-scroll",[s("ul",{ref:"listChild2",staticClass:"list-ul list-ul2"},[t._l(t.dragData,function(e,i){return s("li",{attrs:{num:i,musicName:e.name,datasrc:e.url},on:{click:function(e){return e.stopPropagation(),t.listClick2()}}},[s("span",[t._v(t._s(i+1)+".")]),t._v("\n            "+t._s(e.name)+" - "+t._s(e.singer)+"\n            "),s("div",{staticClass:"ul2-close",on:{click:function(e){return e.stopPropagation(),t.removeLi()}}},[t._v("×")])])}),t._v(" "),s("li",{staticClass:"addmy"},[s("input",{staticClass:"file",attrs:{type:"file",accept:"audio/mp3",id:"input-file"},on:{change:function(e){return t.getInput()}}}),t._v(" "),s("span",{staticClass:"myline b-topleft add-tranition"}),t._v(" "),s("span",{staticClass:"myline b-bottomleft add-tranition"}),t._v(" "),s("span",{staticClass:"myline b-topright add-tranition"}),t._v(" "),s("span",{staticClass:"myline b-bottomright add-tranition"}),t._v(" "),s("span",{staticClass:"shu add-tranition"}),t._v(" "),s("span",{staticClass:"hen add-tranition"})])],2)])],1)]),t._v(" "),s("div",{ref:"musictop",staticClass:"music-top"},[s("ul",[s("li",{staticClass:"top-one",on:{click:function(e){return t.showLrcDiv()}}},[s("a",[t._v("歌词")])]),t._v(" "),s("li",{staticClass:"top-two",on:{click:function(e){return t.showWaveDiv()}}},[s("a",[t._v("波形")])])]),t._v(" "),t._m(0),t._v(" "),s("div",{ref:"musiclrc",staticClass:"music-lrc"},[s("ul",{ref:"lrcul",staticClass:"lrc-ul"},[s("li",[t._v("请选择歌曲")])])]),t._v(" "),s("div",{ref:"musicwave",staticClass:"music-wave"},[s("canvas",{attrs:{id:"canvas",width:this.waveWidth+120,height:this.waveHeight}})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"choose-img2 choose-img"},[s("ul",[s("li",{staticClass:"imgurl current",attrs:{imgurl:"http://data.wuyayu.com/201908.png"}}),t._v(" "),s("li",{staticClass:"imgurl",attrs:{imgurl:"http://data.wuyayu.com/201902.png"}}),t._v(" "),s("li",{staticClass:"imgurl",attrs:{imgurl:"http://data.wuyayu.com/201903.png"}}),t._v(" "),s("li",{staticClass:"imgurl",attrs:{imgurl:"http://data.wuyayu.com/201905.png"}}),t._v(" "),s("li",{staticClass:"imgurl",attrs:{imgurl:"http://data.wuyayu.com/201904.png"}}),t._v(" "),s("li",{staticClass:"imgurl",attrs:{imgurl:"http://data.wuyayu.com/201906.png"}})])])}]}}},[35]);
//# sourceMappingURL=app.e3adfd5a50f0e73bab84.js.map