webpackJsonp([1],[,,,function(t,e,s){function i(t){s(33),s(34)}var a=s(9)(s(31),s(39),i,null,null);t.exports=a.exports},,,,,,,,function(t,e,s){function i(t){s(35),s(36)}var a=s(9)(s(30),s(40),i,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),a=s.n(i);e.default={components:{vuemusic:a.a},data:function(){return{}},methods:{},mounted:function(){function t(){e.style.height=window.innerHeight+"px",e.style.width=window.innerWidth+"px",s.style.width=window.innerWidth+"px",i.style.height=window.innerHeight-75+"px"}var e=document.getElementsByTagName("body")[0],s=document.getElementsByClassName("music")[0],i=document.getElementsByClassName("music-play-list")[0];t(),window.addEventListener("resize",function(){t()})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),a=s.n(i);e.default={components:{},data:function(){return{musicData:[],dragData:[],dragLrc:[],dragMusicUrl:[],waveWidth:0,waveHeight:0,c1:"rgb(45,181,253)",c2:"rgb(2,28,72)",c3:"rgb(185,231,247)",cutHeight:0,listShow:0,listScroll:0,barScroll:0,listScroll2:0,barTop:0,ifPlay:!0,ifVol:0,volScales:1,planScales:0,ifCut:0,orderClass:"order-play",volLeft:0,musicLeft:0,curTime:0,ifHeader:0,audioUrl:null,playNum:0,dragNum:0,lrcData:[],lrcObj:{},lrcTime:{},lrcSecond:0,resizeHeight:0,ifMy:0,myScroll:0,scrollProp:0}},methods:{getMusicData:function(){var t=this;a.a.get("http://lesses.me/music/static/music.json").then(function(e){t.musicData=e.data},function(t){console.log("失败")})},dragMusic:function(){var t=this;document.addEventListener("dragover",function(t){t.preventDefault()}),document.addEventListener("drop",function(e){e.preventDefault();for(var s=e.dataTransfer.files,i=0;i<s.length;i++){var a=s[i].name.lastIndexOf(".");if("mp3"==s[i].name.substr(a+1)){var l=s[i].name.substring(0,s[i].name.lastIndexOf(".")),n=window.URL.createObjectURL(s[i]);t.dragData.push({name:l.split("-")[1].trim(),singer:l.split("-")[0].trim(),url:n})}}t.clearRepeat(t.dragData,"name"),t.showList2()})},getInput:function(){var t=event.currentTarget.files,e=t[0].name.lastIndexOf(".");if("mp3"==t[0].name.substr(e+1)){var s=t[0].name.substring(0,t[0].name.lastIndexOf(".")),i=window.URL.createObjectURL(t[0]);this.dragData.push({name:s.split("-")[1].trim(),singer:s.split("-")[0].trim(),url:i})}this.clearRepeat(this.dragData,"name"),this.showList2()},clearRepeat:function(t,e){for(var s=[],i={},a=0;a<t.length;a++)i[t[a][e]]?i[t[a][e]].push(t[a]):(i[t[a][e]]=[t[a]],s.push(t[a]));this.dragData=s,this.saveMusic()},getLrcFile:function(t){var e=this;"false"==this.$refs.listul2.getAttribute("myplay")?a.a.get("../../music/static/lrc/"+t+".lrc").then(function(t){"纯音乐,请欣赏"==t.data||"后摇,请欣赏"==t.data?(e.lrcData=t.data,e.showLrc()):(e.lrcData=t.data,e.parseLyric(e.lrcData))},function(t){e.lrcData="未找到歌词"}):(this.dragLrc="未找到歌词",this.showLrc())},parseLyric:function(t){this.lrcObj={},this.lrcTime={};for(var e=t.split("\n"),s=0;s<e.length;s++){var i=decodeURIComponent(e[s]),a=/\[\d*:\d*((\.|\:)\d*)*\]/g,l=i.match(a);if(l){var n=i.replace(a,"");this.lrcObj[s]=n,l.toString(),this.lrcTime[s]=l}}this.showLrc()},showLrc:function(){if(this.$refs.lrcul.innerHTML="","false"==this.$refs.listul2.getAttribute("myplay"))if("纯音乐,请欣赏"==this.lrcData||"后摇,请欣赏"==this.lrcData){var t=document.createElement("li");t.innerHTML=this.lrcData,this.$refs.lrcul.appendChild(t);var e=this.$refs.musiclrc.offsetHeight/2;this.$refs.lrcul.style.transform="translateY("+e+"px)"}else{for(var s in this.lrcObj){"\n\n"==this.lrcObj[s]&&console.log(1);var i=document.createElement("li");i.innerHTML=this.lrcObj[s],this.lrcTime[s]=this.lrcTime[s].toString().replace(/\[|]/g,"");var a=this.lrcTime[s].split(":");this.lrcSecond=60*Number(a[0])+1*Number(a[1]),this.lrcSecond=Math.round(this.lrcSecond),i.setAttribute("time",this.lrcSecond),i.setAttribute("ifchoose","false"),this.$refs.lrcul.appendChild(i)}for(var l=0;l<this.$refs.lrcul.children.length;l++)"\n\n"==this.$refs.lrcul.children[l].innerHTML&&this.$refs.lrcul.removeChild(this.$refs.lrcul.children[l]);this.$refs.lrcul.setAttribute("move",!0);var n=this.$refs.musiclrc.offsetHeight/2+50;this.$refs.lrcul.style.transform="translateY("+n+"px)"}else{var r=document.createElement("li");r.innerHTML=this.dragLrc,this.$refs.lrcul.appendChild(r),this.$refs.lrcul.style.transform="translateY("+pianoY+"px)"}},showLrcDiv:function(){this.$refs.musiclrc.style.opacity=1,this.$refs.musicwave.style.opacity=0},showWaveDiv:function(){this.$refs.musiclrc.style.opacity=0,this.$refs.musicwave.style.opacity=1},showTitle:function(t){var e=document.getElementById("show-title"),s=null;clearTimeout(s),e.innerHTML=t,e.style.transform="translate(-43px)",s=setTimeout(function(){e.style.transform="translate(0px)"},3e3)},playMusic:function(){for(var t=this,e=0;e<this.musicData.length;e++)t.$refs.listul.children[e].setAttribute("class","");null!==t.$refs.audio&&("false"==t.$refs.listul2.getAttribute("myplay")?(t.$refs.listul.children[t.playNum].setAttribute("class","playing"),t.ifPlay?(t.$refs.audio.play(),t.ifPlay=!1):(t.$refs.audio.pause(),t.ifPlay=!0)):t.ifPlay?(t.$refs.audio.play(),t.ifPlay=!1):(t.$refs.audio.pause(),t.ifPlay=!0))},closeVol:function(){this.ifVol?(this.ifVol=0,this.$refs.audio.volume=this.volScales):(this.ifVol=1,this.$refs.audio.volume=0)},volClick:function(t){var e=document.getElementsByClassName("vol-bar-btn")[0],s=document.getElementsByClassName("vol-plan")[0],i=(document.getElementsByClassName("music-vol")[0],document.getElementsByClassName("music-wrap")[0]),a=document.getElementsByClassName("vol-bar")[0];this.volLeft=t.clientX-a.offsetLeft-i.offsetLeft,e.style.left=this.volLeft+"px",this.volScales=e.offsetLeft/a.offsetWidth,this.volScales>0?(document.getElementById("audio").volume=this.volScales,s.style.width=a.offsetWidth*this.volScales+"px",this.ifVol=1,this.closeVol()):0==this.volScales&&(document.getElementById("audio").volume=this.volScales,s.style.width="0px",this.ifVol=0,this.closeVol())},volDrag:function(){var t=document.getElementsByClassName("vol-bar-btn")[0],e=document.getElementsByClassName("vol-bar")[0],s=document.getElementsByClassName("vol-plan")[0],i=(document.getElementsByClassName("music-vol")[0],document.getElementsByClassName("music-wrap")[0]),a=this;document.onmousemove=function(l){a.volLeft=l.clientX-e.offsetLeft-i.offsetLeft-t.offsetWidth/2,a.volLeft<=0&&(a.volLeft=0),a.volLeft>=e.offsetWidth&&(a.volLeft=e.offsetWidth),t.style.left=a.volLeft+"px",a.volScales=t.offsetLeft/e.offsetWidth,a.volScales>0?(document.getElementById("audio").volume=a.volScales,s.style.width=e.offsetWidth*a.volScales+"px",a.ifVol=1,a.closeVol()):0==a.volScales&&(document.getElementById("audio").volume=a.volScales,s.style.width="0px",a.ifVol=0,a.closeVol())},document.onmouseup=function(){a.volScales=t.offsetLeft/e.offsetWidth,document.onmousemove=null,document.onmousedown=null}},planClick:function(t){var e=document.getElementById("audio"),s=document.getElementsByClassName("music-drag")[0],i=document.getElementsByClassName("music-bar")[0],a=document.getElementsByClassName("music-plan")[0],l=(document.getElementsByClassName("music-show")[0],document.getElementsByClassName("music-wrap")[0]);this.musicLeft=t.clientX-l.offsetLeft-i.offsetLeft,this.planScales=this.musicLeft/i.offsetWidth,s.style.left=this.musicLeft+"px",a.style.width=i.offsetWidth*this.planScales+"px",e.currentTime=e.duration*this.planScales,this.ifPlay=!0,this.playMusic(),this.curTime=Math.round(e.currentTime),this.dragScroll()},planDrag:function(){var t=document.getElementById("audio"),e=document.getElementsByClassName("music-drag")[0],s=document.getElementsByClassName("music-bar")[0],i=document.getElementsByClassName("music-plan")[0],a=(document.getElementsByClassName("music-show")[0],document.getElementsByClassName("music-wrap")[0]);this.ifPlay=!1,this.playMusic();var l=this;document.onmousemove=function(t){l.musicLeft=t.clientX-s.offsetLeft-a.offsetLeft-e.offsetWidth/2,l.musicLeft<=0&&(l.musicLeft=0),l.musicLeft>=s.offsetWidth&&(l.musicLeft=s.offsetWidth),l.planScales=l.musicLeft/s.offsetWidth,e.style.left=l.musicLeft+"px",i.style.width=s.offsetWidth*l.planScales+"px"},document.onmouseup=function(){l.planScales=e.offsetLeft/s.offsetWidth,t.currentTime=t.duration*l.planScales,l.ifPlay=!0,l.playMusic(),document.onmousemove=null,document.onmousedown=null,document.onmouseup=null,l.curTime=Math.round(t.currentTime.toFixed(1)),l.dragScroll()}},cutOrder:function(){0==this.ifCut?(this.orderClass="random-play",this.ifCut=1,this.showTitle("随机播放")):1==this.ifCut?(this.orderClass="one-play",this.ifCut=2,this.showTitle("单曲循环")):2==this.ifCut?(this.orderClass="list-play",this.ifCut=3,this.showTitle("列表循环")):(this.orderClass="order-play",this.ifCut=0,this.showTitle("顺序循环"))},showList:function(){0==this.listShow?(this.$refs.playlist.style.transform="translate(0)",this.$refs.musictop.style.width=window.innerWidth-232+"px",this.$refs.musictop.style.transform="translateY(63px)",this.$refs.musiclrc.style.height=window.innerHeight-85-95+"px",this.$refs.musicwave.style.height=window.innerHeight-85-200+"px",this.dragScroll(),this.listShow=1,this.$refs.playlist.setAttribute("ifshow",1),this.waveWidth=this.$refs.musicwave.offsetWidth,this.waveHeight=this.$refs.musicwave.offsetHeight):(this.$refs.playlist.style.transform="translate(-230px)",this.$refs.musictop.style.width=window.innerWidth+"px",this.$refs.musictop.style.transform="translateY(0px)",this.$refs.musiclrc.style.height=this.$refs.musiclrc.offsetHeight+50+"px",this.$refs.musicwave.style.height=this.$refs.musicwave.offsetHeight+50+"px",this.dragScroll(),this.listShow=0,this.$refs.playlist.setAttribute("ifshow",0),this.waveWidth=this.$refs.musicwave.offsetWidth,this.waveHeight=this.$refs.musicwave.offsetHeight)},listWell:function(){var t=this,e=document.getElementById("list-bar"),s=document.getElementsByClassName("list-bar-wrap")[0],i=document.getElementsByClassName("play-list-ul")[0],a=null;t.$refs.playlist.onmouseover=function(){e.style.opacity=1},t.$refs.playlist.onmouseout=function(){clearTimeout(a),a=setTimeout(function(){e.style.opacity=0},3e3)},t.$refs.listul.onmousewheel=function(a){var l=s.offsetHeight+7,n=i.offsetHeight-200;a.wheelDelta<0?t.listScroll+=60:a.wheelDelta>0&&(t.listScroll-=60),t.listScroll<=-60&&(t.listScroll=-60),t.listScroll>=t.$refs.listul.offsetHeight-t.$refs.playlist.offsetHeight+60&&(t.listScroll=t.$refs.listul.offsetHeight-t.$refs.playlist.offsetHeight+60);var r=parseInt(t.listScroll*(l/n));if(e.style.transform="translateY("+r+"px)",parseInt(e.style.transform.substring(11))<=0&&(e.style.transform="translateY(0px)",t.barScroll=0),parseInt(e.style.transform.substring(11))>=l-7-66){var c=l-7-66;e.style.transform="translateY("+c+"px)",t.barScroll=c}else t.barScroll=parseInt(e.style.transform.substring(11));t.$refs.listul.style.transform="translateY(-"+t.listScroll+"px)"}},listBar:function(t){var e=this,s=document.getElementById("list-bar"),i=document.getElementsByClassName("play-list-ul")[0],a=(document.getElementsByClassName("list-ul2")[0],document.getElementsByClassName("list-bar-wrap")[0]),l=t.clientY;e.barTop=parseInt(s.style.transform.substring(11));for(var n=0,r=0;r<i.children.length-1;r++)n+=i.children[r].offsetHeight;n-=20,document.onmousemove=function(t){var r=t.clientY;e.barScroll=r-l+e.barTop,e.barScroll>a.offsetHeight-66&&(e.barScroll=a.offsetHeight-66),e.barScroll<=0&&(e.barScroll=0),s.style.transform="translateY("+e.barScroll+"px)";var c=-e.barScroll*(n/a.offsetHeight);i.style.transform="translateY("+c+"px)",e.listScroll=-parseInt(i.style.transform.substring(11))},document.onmouseup=function(){document.onmousemove=null,document.onmousedown=null,document.onmouseup=null}},listWell2:function(){var t=this;t.$refs.listul2.onmousewheel=function(e){for(var s=0,i=0;i<t.$refs.listul2.children.length;i++)s+=t.$refs.listul2.children[i].offsetHeight;s<t.$refs.playlist.offsetHeight-61||(e.wheelDelta<0?t.listScroll2+=60:e.wheelDelta>0&&(t.listScroll2-=60),t.listScroll2<=-60&&(t.listScroll2=-60),t.listScroll2>=t.$refs.listul2.offsetHeight-t.$refs.playlist.offsetHeight+60&&(t.listScroll2=t.$refs.listul2.offsetHeight-t.$refs.playlist.offsetHeight+60),t.$refs.listul2.style.top=-t.listScroll2+"px")}},firstGet:function(){this.$refs.audio.src=this.musicData[0].url,this.$refs.showname.innerHTML=this.musicData[0].name+" - "+this.musicData[0].singer;var t=this;this.$refs.audio.addEventListener("canplaythrough",function(){t.timeActive()}),this.getLrcFile(this.musicData[0].name)},timeActive:function(){var t=parseInt(this.$refs.audio.duration%60),e=parseInt(this.$refs.audio.duration/60);t<=9&&(t="0"+t),e<=9&&(e="0"+e),this.$refs.alltime.innerHTML=e+":"+t;var s=parseInt(this.$refs.audio.currentTime%60),i=parseInt(this.$refs.audio.currentTime/60);s<=9&&(s="0"+s),i<=9&&(i="0"+i),this.$refs.curtime.innerHTML=i+":"+s},getMusicTime:function(){var t=document.getElementById("audio"),e=document.getElementsByClassName("music-drag")[0],s=document.getElementsByClassName("music-bar")[0],i=document.getElementsByClassName("music-plan")[0],a=this;t.addEventListener("timeupdate",function(){a.curTime=Math.round(t.currentTime),a.planScales=t.currentTime/t.duration,i.style.width=s.offsetWidth*a.planScales+"px",e.style.left=s.offsetWidth*a.planScales+"px",a.timeActive(),"纯音乐,请欣赏"==a.lrcData&&"未找到歌词"==a.dragLrc||a.lrcScroll()})},lrcScroll:function(){if("false"==this.$refs.listul2.getAttribute("myplay")){var t=0;if("true"==this.$refs.lrcul.getAttribute("move"))for(var e=this.$refs.lrcul.children,s=0;s<e.length;s++){var i=0;if(e[s].getAttribute("time")==this.curTime&&"false"==e[s].getAttribute("ifchoose")){for(var a=0;a<e.length;a++)e[a].setAttribute("class","");t++,1==t?(e[s].setAttribute("class","playing"),e[s].setAttribute("ifchoose","true"),i=e[s].offsetHeight,document.getElementById("message").value=e[s].innerHTML):2==t?(e[s].setAttribute("class","playing"),e[s-1].setAttribute("class","playing"),e[s].setAttribute("ifchoose","true"),e[s-1].setAttribute("ifchoose","true"),i=e[s].offsetHeight+e[s-1].offsetHeight,i/=2,document.getElementById("message").value=e[s].innerHTML):3===t?(e[s].setAttribute("class","playing"),e[s-1].setAttribute("class","playing"),e[s-2].setAttribute("class","playing"),e[s].setAttribute("ifchoose","true"),e[s-1].setAttribute("ifchoose","true"),e[s-2].setAttribute("ifchoose","true"),i=e[s].offsetHeight+e[s-1].offsetHeight+e[s-2].offsetHeight,i/=2,document.getElementById("message").value=e[s].innerHTML):4===t&&(e[s].setAttribute("class","playing"),e[s-1].setAttribute("class","playing"),e[s-2].setAttribute("class","playing"),e[s-3].setAttribute("class","playing"),e[s].setAttribute("ifchoose","true"),e[s-1].setAttribute("ifchoose","true"),e[s-2].setAttribute("ifchoose","true"),e[s-3].setAttribute("ifchoose","true"),i=e[s].offsetHeight+e[s-1].offsetHeight+e[s-2].offsetHeight+e[s-3].offsetHeight,document.getElementById("message").value=e[s].innerHTML),this.mainCanvas();var l=parseInt(this.$refs.lrcul.style.transform.substring(11)),n=l-i;this.$refs.lrcul.style.transform="translateY("+n+"px)"}}}},dragScroll:function(){if("false"==this.$refs.listul2.getAttribute("myplay")){for(var t=document.getElementsByClassName("lrc-ul")[0].children,e=document.getElementsByClassName("lrc-ul")[0],s=document.getElementsByClassName("music-lrc")[0],i=0,a=0,l=0;l<t.length;l++)t[l].setAttribute("class","");if(1==t.length);else{i=0,a=0;for(var n=0;n<t.length;n++)t[n].getAttribute("time")<=this.curTime&&(i++,a+=t[n].offsetHeight,t[n].setAttribute("class",""));if(0==i){var r=this.$refs.musiclrc.offsetHeight/2+50;e.style.transform="translateY("+r+"px)"}else{var c=s.offsetHeight/2-a+40;e.style.transform="translateY("+c+"px)",i<3?1==i?t[0].getAttribute("time")==t[1].getAttribute("time")?(c=s.offsetHeight/2-a+100,e.style.transform="translateY("+c+"px)",t[0].setAttribute("class","playing"),t[1].setAttribute("class","playing")):(c=this.$refs.musiclrc.offsetHeight/2+50,e.style.transform="translateY("+c+"px)",t[0].setAttribute("class","playing")):2==i&&(c=s.offsetHeight/2-a+100,e.style.transform="translateY("+c+"px)",t[0].setAttribute("class","playing"),t[1].setAttribute("class","playing")):t[i-1].getAttribute("time")==t[i-2].getAttribute("time")?(t[i-1].setAttribute("class","playing"),t[i-2].setAttribute("class","playing"),c=s.offsetHeight/2-a+60,e.style.transform="translateY("+c+"px)"):t[i-1].getAttribute("time")==t[i].getAttribute("time")?(t[i-1].setAttribute("class","playing"),t[i].setAttribute("class","playing"),c=s.offsetHeight/2-a+60,e.style.transform="translateY("+c+"px)"):t[i-1].setAttribute("class","playing")}}}},musicEndsPlay:function(){if("false"==this.$refs.listul2.getAttribute("myplay")){document.getElementById("audio").src=this.musicData[this.playNum].url,this.$refs.listul.children[this.playNum].setAttribute("class","playing"),this.$refs.showname.innerHTML=this.musicData[this.playNum].name+" - "+this.musicData[this.playNum].singer,this.getMusicTime(),this.ifPlay=!0,this.playMusic(),this.getLrcFile(this.musicData[this.playNum].name)}else{document.getElementById("audio").src=this.dragData[this.dragNum].url,this.$refs.listul2.children[this.dragNum].setAttribute("class","playing"),this.$refs.showname.innerHTML=this.dragData[this.dragNum].name+" - "+this.dragData[this.dragNum].singer,this.getMusicTime(),this.ifPlay=!0,this.playMusic()}},whatKind:function(){var t=this;if("false"==t.$refs.listul2.getAttribute("myplay")){for(var e=0;e<this.musicData.length;e++)t.$refs.listul.children[e].setAttribute("class","");0==t.ifCut?(t.playNum+=1,t.playNum>=t.musicData.length-1&&(t.playNum=t.musicData.length-1),t.musicEndsPlay()):1==t.ifCut?(t.playNum=parseInt(Math.random()*t.musicData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.playNum+=1,t.playNum>=t.musicData.length&&(t.playNum=0),t.musicEndsPlay())}else{for(var e=0;e<t.$refs.listul2.children.length;e++)"addmy"==t.$refs.listul2.children[e].getAttribute("class")||t.$refs.listul2.children[e].setAttribute("class","");0==t.ifCut?(t.dragNum+=1,t.dragNum>=t.dragData.length-1&&(t.dragNum=t.dragData.length-1),t.musicEndsPlay()):1==t.ifCut?(t.dragNum=parseInt(Math.random()*t.dragData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.dragNum+=1,t.dragNum>=t.dragData.length&&(t.dragNum=0),t.musicEndsPlay())}},whatKind2:function(){var t=this;if("false"==t.$refs.listul2.getAttribute("myplay")){for(var e=0;e<this.musicData.length;e++)t.$refs.listul.children[e].setAttribute("class","");0==t.ifCut?(t.playNum-=1,t.playNum<=0&&(t.playNum=0),t.musicEndsPlay()):1==t.ifCut?(t.playNum=parseInt(Math.random()*t.musicData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.playNum-=1,t.playNum<0&&(t.playNum=t.musicData.length-1),t.musicEndsPlay())}else{for(var e=0;e<t.$refs.listul2.children.length;e++)"addmy"==t.$refs.listul2.children[e].getAttribute("class")||t.$refs.listul2.children[e].setAttribute("class","");0==t.ifCut?(t.dragNum-=1,t.dragNum<=0&&(t.dragNum=0),t.musicEndsPlay()):1==t.ifCut?(t.dragNum=parseInt(Math.random()*t.dragData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.dragNum-=1,t.dragNum<0&&(t.dragNum=thatdragData.length-1),t.musicEndsPlay())}},headerClick:function(){0==this.ifHeader?(this.$refs.headerul.style.display="block",this.ifHeader=1):(this.$refs.headerul.style.display="none",this.ifHeader=0)},showList1:function(){this.ifMy=0,this.$refs.headerul.children[1].setAttribute("class",""),this.$refs.headerul.children[0].setAttribute("class","choose"),this.$refs.listul.style.left="0",this.$refs.listul2.style.left="-230px",this.$refs.listul2.setAttribute("myplay","false"),this.listNum()},showList2:function(){this.ifMy=1,this.$refs.headerul.children[0].setAttribute("class",""),this.$refs.headerul.children[1].setAttribute("class","choose"),this.$refs.listul2.style.left="0",this.$refs.listul.style.left="-230px",this.$refs.listul2.setAttribute("myplay","true"),this.listNum()},listClick:function(){var t=document.getElementById("audio").src,e=document.getElementById("audio"),s=event.currentTarget;e.setAttribute("dataNum",s.getAttribute("num")),this.playNum=s.getAttribute("num")-0,this.audioUrl=this.musicData[this.playNum].url,this.$refs.listul2.setAttribute("myplay","false");for(var i=0;i<this.$refs.listul2.children.length;i++)"addmy"==this.$refs.listul2.children[i].getAttribute("class")||this.$refs.listul2.children[i].setAttribute("class","");if(t==this.audioUrl)s.setAttribute("class","playing"),this.playMusic();else{for(var i=0;i<this.musicData.length;i++)this.$refs.listul.children[i].setAttribute("class","");e.src=this.audioUrl,this.ifPlay=!0,this.$refs.showname.innerHTML=this.musicData[this.playNum].name+" - "+this.musicData[this.playNum].singer,s.setAttribute("class","playing"),this.playMusic()}this.getLrcFile(this.musicData[this.playNum].name)},listClick2:function(){var t=document.getElementById("audio").src,e=document.getElementById("audio"),s=event.currentTarget,i=s.getAttribute("num")-0;this.audioUrl=this.dragData[i].url,this.$refs.listul2.setAttribute("myplay","true"),this.dragNum=i;for(var a=0;a<this.musicData.length;a++)this.$refs.listul.children[a].setAttribute("class","");if(t==this.audioUrl)s.setAttribute("class","playing"),this.playMusic();else{for(var a=0;a<this.$refs.listul2.children.length;a++)"addmy"==this.$refs.listul2.children[a].getAttribute("class")||this.$refs.listul2.children[a].setAttribute("class","");e.src=this.audioUrl,this.ifPlay=!0,this.$refs.showname.innerHTML=this.dragData[i].name+" - "+this.dragData[i].singer,s.setAttribute("class","playing"),this.playMusic()}this.getLrcFile(this.dragData[this.dragNum].name)},listNum:function(){var t=document.getElementsByClassName("music-list-img")[0];0==this.ifMy?t.innerHTML=this.musicData.length:t.innerHTML=this.dragData.length},removeLi:function(){var t=event.currentTarget,e=t.parentNode,s=e.getAttribute("num");this.dragData.splice(s,1),window.localStorage.clear(),this.saveMusic()},saveMusic:function(){},Visualizer:function(){function t(){var s=r.width,i=r.height-2,l=s/20,h=(Math.ceil(2*Math.random()),new Uint8Array(n.frequencyBinCount));n.getByteFrequencyData(h),n.fftSize=4096;var f=Math.round(h.length/l);a.clearRect(0,0,s,i);for(var m=0;m<l;m++){var d=h[m*f];o.length<Math.round(l)&&o.push(d),a.fillStyle=m%5==0?e.c1:m%2==0?e.c2:e.c3,d<o[m]?a.fillRect(20*m,i- --o[m],c,u+5):(a.fillRect(20*m,i-d,c,u+5),o[m]=d,0==d&&a.fillRect(20*m,i-d+u-20,c,u+9)),a.fillStyle=m%5==0?e.c1:m%2==0?e.c2:e.c3,a.fillRect(20*m,i-d+u+15,c,i)}requestAnimationFrame(t)}var e=this,s=document.getElementById("audio"),i=window.AudioContext||window.webkitAudioContext,a=new i,l=a.createMediaElementSource(s),n=a.createAnalyser();l.connect(n),n.connect(a.destination);var r=document.getElementById("canvas"),c=18,u=5,o=[],a=r.getContext("2d"),h=a.createLinearGradient(0,0,0,300);h.addColorStop(1,"#0f0"),h.addColorStop(.5,"#ff0"),h.addColorStop(0,"#f00"),t()},mainCanvas:function(){function t(t){t.addEventListener("click",function(e){this.style.backgroundColor="orange",(t==r?c:r).style.backgroundColor="rgba(0, 0, 0, 0)",y="ball"===y?"rect":"ball",i()},!1)}function e(t,e,s){this.radius=1.1,this.futurRadius=u.randomInt(L,L+3),this.rebond=u.randomInt(1,5),this.x=t,this.y=e,this.dying=!1,this.base=[t,e],this.vx=0,this.vy=0,this.type=s,this.friction=.99,this.gravity=E,this.color=p[Math.floor(Math.random()*p.length)],this.getSpeed=function(){return Math.sqrt(this.vx*this.vx+this.vy*this.vy)},this.setSpeed=function(t){var e=this.getHeading();this.vx=Math.cos(e)*t,this.vy=Math.sin(e)*t},this.getHeading=function(){return Math.atan2(this.vy,this.vx)},this.setHeading=function(t){var e=this.getSpeed();this.vx=Math.cos(t)*e,this.vy=Math.sin(t)*e},this.update=function(t){this.x+=this.vx,this.y+=this.vy,this.vy+=E,this.vx*=this.friction,this.vy*=this.friction,this.radius<this.futurRadius&&!1===this.dying?this.radius+=N:this.dying=!0,!0===this.dying&&(this.radius-=N),"ball"===s&&(h.save(),h.fillStyle=this.color,h.beginPath(),h.arc(this.x,this.y,this.radius,2*Math.PI,!1),h.closePath(),h.fill(),h.restore()),"rect"===s&&(h.save(),h.fillStyle=this.color,h.beginPath(),h.fillRect(this.x,this.y,this.futurRadius,this.futurRadius),h.closePath(),h.fill(),h.restore()),(this.y<0||this.radius<1)&&(this.x=this.base[0],this.y=this.base[1],this.dying=!1,this.radius=1.1,this.setSpeed(A),this.futurRadius=u.randomInt(L,L+3),this.setHeading(u.randomInt(u.degreesToRads(0),u.degreesToRads(360))))},this.setSpeed(u.randomInt(.1,.5)),this.setHeading(u.randomInt(u.degreesToRads(0),u.degreesToRads(360)))}function s(t,e,s){this.x=t,this.y=e,this.size=80,this.text=s,this.placement=[]}function i(){h.clearRect(0,0,f,m),g=parseFloat(x.value),d=parseFloat(x.value),H.placement=[],H.text=v.value,H.getValue()}function a(){f=o.width=window.innerWidth,m=o.height=window.innerHeight}var l=document.getElementById("btn"),n=document.getElementById("control");l.addEventListener("click",function(t){n.classList.toggle("slide")},!1);var r=document.getElementById("ball"),c=document.getElementById("rect");t(r),t(c);var u={norm:function(t,e,s){return(t-e)/(s-e)},lerp:function(t,e,s){return(s-e)*t+e},map:function(t,e,s,i,a){return u.lerp(u.norm(t,e,s),i,a)},clamp:function(t,e,s){return Math.min(Math.max(t,Math.min(e,s)),Math.max(e,s))},distance:function(t,e){var s=e.x-t.x,i=e.y-t.y;return Math.sqrt(s*s+i*i)},distanceXY:function(t,e,s,i){var a=s-t,l=i-e;return Math.sqrt(a*a+l*l)},circleCollision:function(t,e){return u.distance(t,e)<=t.radius+e.radius},circlePointCollision:function(t,e,s){return u.distanceXY(t,e,s.x,s.y)<s.radius},pointInRect:function(t,e,s){return u.inRange(t,s.x,s.x+s.radius)&&u.inRange(e,s.y,s.y+s.radius)},inRange:function(t,e,s){return t>=Math.min(e,s)&&t<=Math.max(e,s)},rangeIntersect:function(t,e,s,i){return Math.max(t,e)>=Math.min(s,i)&&Math.min(t,e)<=Math.max(s,i)},rectIntersect:function(t,e){return u.rangeIntersect(t.x,t.x+t.width,e.x,e.x+e.width)&&u.rangeIntersect(t.y,t.y+t.height,e.y,e.y+e.height)},degreesToRads:function(t){return t/180*Math.PI},radsToDegrees:function(t){return 180*t/Math.PI},randomRange:function(t,e){return t+Math.random()*(e-t)},randomInt:function(t,e){return t+Math.random()*(e-t+1)},getmiddle:function(t,e){var s=t.x,i=e.x;middlex=(s+i)/2;var a=t.y,l=e.y;return middley=(a+l)/2,pos=[middlex,middley],pos},getAngle:function(t,e){var s=e.x-t.x,i=e.y-t.y;return Math.atan2(i,s)},inpercentW:function(t){return t*f/100},inpercentH:function(t){return t*m/100}};s.prototype.getValue=function(){h.clearRect(0,0,f,m),h.textAlign="center",h.font=this.size+"px arial",h.fillText(this.text,this.x,this.y);for(var t=h.getImageData(0,0,f,m),s=new Uint32Array(t.data.buffer),i=0;i<m;i+=d)for(var a=0;a<f;a+=g)if(s[i*f+a]){var l=new e(a,i,y);this.placement.push(l)}h.clearRect(0,0,f,m)};var o=document.getElementById("canvas1"),h=o.getContext("2d"),f=o.width=window.innerWidth,m=o.height=window.innerHeight;h.clearRect(0,0,f,m);var d=7,g=7,y="rect",p=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722"],v=document.getElementById("message"),w=document.getElementById("gra"),b=document.getElementById("dur"),C=document.getElementById("speed"),$=document.getElementById("rad"),x=document.getElementById("res"),E=parseFloat(w.value),N=parseFloat(b.value),A=parseFloat(C.value),L=parseFloat($.value),H=(parseFloat(x.value),new s(f/2,m/2,v.value));H.getValue(),function t(){window.requestAnimationFrame(t,o),h.clearRect(0,0,f,m);for(var e=0;e<H.placement.length;e++)H.placement[e].update()}(),window.addEventListener("resize",a,!1)}},mounted:function(){this.getMusicData(),this.dragMusic(),this.listWell(),this.listWell2(),this.getMusicTime(),this.saveMusic(),this.mainCanvas();var t=this,e=document.getElementById("audio"),s=document.getElementsByClassName("music-play-list")[0],i=document.getElementsByClassName("choose-img")[0].getElementsByClassName("imgurl"),a=document.getElementsByClassName("list-ul")[0].children,l=document.getElementsByClassName("list-bar-wrap")[0];if(window.localStorage.length>=3)for(var n=window.localStorage,r=0;r<n.length/3;r++)t.dragData.push({name:n["name"+r],singer:n["singer"+r],url:n["url"+r]});for(var r=0;r<i.length;r++)i[r].index=r,i[r].addEventListener("click",function(){function e(t){var e="choose"+(t.index-0+1);t.classList.add("imgurl",e);var s=t.getAttribute("imgurl");document.body.style.backgroundImage="url("+s+")"}function s(){for(var t=0;t<a.length;t++)a[t].style.color="black";for(var e=document.getElementsByClassName("list-ul2")[0].children,s=0;s<e.length;s++)e[s].style.color="black"}for(var l=0;l<i.length;l++)i[l].className="imgurl";var n=this;if(0==this.index){e(n),t.c1="rgb(45,181,253)",t.c2="rgb(2,28,72)",t.c3="rgb(185,231,247)";for(var r=0;r<a.length;r++)a[r].style.color="white";for(var c=document.getElementsByClassName("list-ul2")[0].children,u=0;u<c.length;u++)c[u].style.color="white"}else if(1==this.index)e(n),t.c1="rgb(225,208,200)",t.c2="rgb(86,82,82)",t.c3="rgb(195,195,195)",s();else if(2==this.index){e(n),t.c1="rgb(8,61,151)",t.c2="rgb(124,173,251)",t.c3="rgb(149,197,221)";for(var r=0;r<a.length;r++)a[r].style.color="white";for(var o=document.getElementsByClassName("list-ul2")[0].children,u=0;u<o.length;u++)o[u].style.color="white"}else 3==this.index?(e(n),t.c1="rgb(247,157,164)",t.c2="rgb(163,62,77)",t.c3="rgb(225,161,151)"):(e(n),t.c1="rgb(188,140,190)",t.c2="rgb(78,100,164)",t.c3="rgb(35,32,43)",s())});document.onkeydown=function(e){e&&32==e.keyCode&&t.playMusic()},document.addEventListener("click",function(){t.$refs.headerul.style.display="none",t.ifHeader=0}),function(){t.$refs.playlist.style.height=window.innerHeight-75+"px",l.style.height=window.innerHeight-75-61+"px",t.$refs.musictop.style.width=window.innerWidth+"px",t.$refs.musiclrc.style.height=window.innerHeight-85-95+"px",t.$refs.musiclrc.style.height=t.$refs.musiclrc.offsetHeight+50+"px",t.$refs.musicwave.style.height=window.innerHeight-85-200+"px",t.$refs.musicwave.style.height=t.$refs.musicwave.offsetHeight+50+"px",t.waveWidth=t.$refs.musicwave.offsetWidth,t.waveHeight=t.$refs.musicwave.offsetHeight}(),window.addEventListener("resize",function(){"1"==s.getAttribute("ifshow")?(t.$refs.musictop.style.width=window.innerWidth-232+"px",t.$refs.musiclrc.style.height=window.innerHeight-85-95+"px",t.$refs.musicwave.style.height=window.innerHeight-85-200+"px",t.waveWidth=t.$refs.musicwave.offsetWidth,t.waveHeight=t.$refs.musicwave.offsetHeight,t.showLrc(),t.dragScroll()):(t.$refs.musictop.style.width=window.innerWidth+"px",t.$refs.musiclrc.style.height=window.innerHeight-85-95+"px",t.$refs.musiclrc.style.height=t.$refs.musiclrc.offsetHeight+50+"px",t.$refs.musicwave.style.height=window.innerHeight-85-200+"px",t.$refs.musicwave.style.height=t.$refs.musicwave.offsetHeight+50+"px",t.waveWidth=t.$refs.musicwave.offsetWidth,t.waveHeight=t.$refs.musicwave.offsetHeight,t.showLrc(),t.dragScroll())}),e.addEventListener("timeupdate",function(){if(e.ended)if("false"==t.$refs.listul2.getAttribute("myplay")){for(var s=0;s<t.musicData.length;s++)t.$refs.listul.children[s].setAttribute("class","");0==t.ifCut?(t.playNum+=1,t.playNum>=t.musicData.length-1&&(t.playNum=t.musicData.length-1),t.musicEndsPlay()):1==t.ifCut?(t.playNum=parseInt(Math.random()*t.musicData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.playNum+=1,t.playNum>=t.musicData.length&&(t.playNum=0),t.musicEndsPlay())}else{for(var s=0;s<t.$refs.listul2.children.length;s++)"addmy"==t.$refs.listul2.children[s].getAttribute("class")||t.$refs.listul2.children[s].setAttribute("class","");0==t.ifCut?(t.dragNum+=1,t.dragNum>=t.dragData.length-1&&(t.dragNum=t.dragData.length-1),t.musicEndsPlay()):1==t.ifCut?(t.dragNum=parseInt(Math.random()*t.dragData.length),t.musicEndsPlay()):2==t.ifCut?t.musicEndsPlay():(t.dragNum+=1,t.dragNum>=t.dragData.length&&(t.dragNum=0),t.musicEndsPlay())}})},watch:{musicData:function(t,e){var s=this;s.firstGet(),s.Visualizer(),document.oncontextmenu=function(t){s.showList(),t.returnValue=!1},s.listNum()}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(12),a=s(11),l=s.n(a),n=s(2),r=s.n(n),c=s(10),u=s.n(c),o=s(3);s.n(o);i.a.config.productionTip=!1,i.a.use(u.a,r.a),new i.a({el:"#app",template:"<App/>",components:{App:l.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music"},[s("audio",{ref:"audio",attrs:{id:"audio",crossOrigin:"anonymous",dataNum:"0"}}),t._v(" "),s("input",{staticClass:"hidden file",attrs:{type:"file",accept:"audio/mp3",id:"input-file"}}),t._v(" "),s("div",{staticClass:"show-title show-title-hide",attrs:{id:"show-title"}},[t._v("\n\t\t\t顺序播放\n\t\t")]),t._v(" "),s("div",{staticClass:"music-wrap"},[s("div",{staticClass:"music-btn"},[s("a",{staticClass:"c-btn prev",attrs:{id:"prev",title:"上一首"},on:{click:function(e){t.whatKind2()}}}),t._v(" "),s("a",{staticClass:"c-btn",class:t.ifPlay?"play":"pause",attrs:{title:"播放/暂停"},on:{click:function(e){t.playMusic()}}}),t._v(" "),s("a",{staticClass:"c-btn next",attrs:{id:"next",title:"下一首"},on:{click:function(e){t.whatKind()}}})]),t._v(" "),s("div",{staticClass:"music-show"},[s("div",{staticClass:"music-name"},[s("div",{ref:"showname",staticClass:"music-show-name"}),t._v(" "),s("div",{staticClass:"music-time"},[s("span",{ref:"curtime",staticClass:"time-second"},[t._v("00:00")]),t._v("/"),s("span",{ref:"alltime",staticClass:"time-all"},[t._v("00:00")])])]),t._v(" "),s("div",{staticClass:"music-bar",on:{click:t.planClick}},[s("div",{staticClass:"music-plan"}),t._v(" "),s("div",{staticClass:"music-drag",on:{mousedown:function(e){e.stopPropagation(),t.planDrag(e)}}})])]),t._v(" "),s("div",{staticClass:"music-order"},[s("a",{staticClass:"c-btn order-play",class:this.orderClass,on:{click:function(e){t.cutOrder()}}})]),t._v(" "),s("div",{staticClass:"music-vol"},[s("a",{staticClass:"c-btn vol-btn",class:t.ifVol?"vol-close":"vol-btn",on:{click:t.closeVol}}),t._v(" "),s("div",{staticClass:"vol-bar",on:{click:t.volClick}},[s("div",{staticClass:"vol-plan"}),t._v(" "),s("div",{staticClass:"vol-bar-btn",on:{mousedown:function(e){e.stopPropagation(),t.volDrag(e)}}})])]),t._v(" "),s("div",{staticClass:"music-list"},[s("a",{staticClass:"music-list-img",on:{click:function(e){t.showList()}}})])]),t._v(" "),s("div",{ref:"playlist",staticClass:"music-play-list",attrs:{ifshow:"0"}},[s("div",{staticClass:"play-list-header",on:{click:function(e){e.stopPropagation(),t.headerClick()}}},[t._v("Play List\n\t\t\t")]),t._v(" "),s("div",{staticClass:"list-bar-wrap"},[s("div",{staticClass:"list-bar",attrs:{id:"list-bar"},on:{mousedown:t.listBar}})]),t._v(" "),s("ul",{ref:"headerul",staticClass:"list-header-ul"},[s("li",{staticClass:"choose",on:{click:function(e){t.showList1()}}},[t._v("推荐音乐")]),t._v(" "),s("li",{on:{click:function(e){t.showList2()}}},[t._v("我的音乐")])]),t._v(" "),s("ul",{ref:"listul",staticClass:"play-list-ul list-ul"},t._l(t.musicData,function(e,i){return s("li",{attrs:{num:i,musicName:e.name},on:{click:function(e){t.listClick()}}},[s("span",[t._v(t._s(i+1)+".")]),t._v(t._s(e.name)+" - "+t._s(e.singer)+"\n\t\t\t\t")])})),t._v(" "),s("ul",{ref:"listul2",staticClass:"list-ul list-ul2",attrs:{myplay:"false"}},[t._l(t.dragData,function(e,i){return s("li",{attrs:{num:i,musicName:e.name,datasrc:e.url},on:{click:function(e){e.stopPropagation(),t.listClick2()}}},[s("span",[t._v(t._s(i+1)+".")]),t._v(t._s(e.name)+" - "+t._s(e.singer)+"\n\t\t\t\t\t"),s("div",{staticClass:"ul2-close",on:{click:function(e){e.stopPropagation(),t.removeLi()}}},[t._v("\n\t\t\t\t\t\t×\n\t\t\t\t\t")])])}),t._v(" "),s("li",{staticClass:"addmy"},[s("input",{staticClass:"file",attrs:{type:"file",accept:"audio/mp3",id:"input-file"},on:{change:function(e){t.getInput()}}}),t._v(" "),s("span",{staticClass:"myline b-topleft add-tranition"}),t._v(" "),s("span",{staticClass:"myline b-bottomleft add-tranition"}),t._v(" "),s("span",{staticClass:"myline b-topright add-tranition"}),t._v(" "),s("span",{staticClass:"myline b-bottomright add-tranition"}),t._v(" "),s("span",{staticClass:"shu add-tranition"}),t._v(" "),s("span",{staticClass:"hen add-tranition"})])],2)]),t._v(" "),s("div",{ref:"musictop",staticClass:"music-top"},[s("ul",[s("li",{staticClass:"top-one",on:{click:function(e){t.showLrcDiv()}}},[s("a",[t._v("lyric")])]),t._v(" "),s("li",{staticClass:"top-two",on:{click:function(e){t.showWaveDiv()}}},[s("a",[t._v("waveform")])])]),t._v(" "),s("canvas",{attrs:{id:"canvas1",width:"100%",height:"100px"}}),t._v(" "),t._m(0),t._v(" "),s("div",{ref:"musiclrc",staticClass:"music-lrc"},[s("ul",{ref:"lrcul",staticClass:"lrc-ul"},[s("li",[t._v("请选择歌曲")])])]),t._v(" "),s("div",{ref:"musicwave",staticClass:"music-wave"},[s("canvas",{attrs:{id:"canvas",width:this.waveWidth+120,height:this.waveHeight}})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"choose-img"},[s("span",{staticClass:"imgurl choose1",attrs:{imgurl:"http://oht4at73h.bkt.clouddn.com/new8.png"}}),t._v(" "),s("span",{staticClass:"img-line"}),t._v(" "),s("span",{staticClass:"imgurl",attrs:{imgurl:"http://oht4at73h.bkt.clouddn.com/new7.png"}}),t._v(" "),s("span",{staticClass:"img-line"}),t._v(" "),s("span",{staticClass:"imgurl",attrs:{imgurl:"http://oht4at73h.bkt.clouddn.com/new6.png"}}),t._v(" "),s("span",{staticClass:"img-line"}),t._v(" "),s("span",{staticClass:"imgurl",attrs:{imgurl:"http://oht4at73h.bkt.clouddn.com/new2.png"}}),t._v(" "),s("span",{staticClass:"img-line"}),t._v(" "),s("span",{staticClass:"imgurl",attrs:{imgurl:"http://oht4at73h.bkt.clouddn.com/new1.png"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("vuemusic")],1)},staticRenderFns:[]}}],[32]);
//# sourceMappingURL=app.7d1c5b07db9c759cd235.js.map