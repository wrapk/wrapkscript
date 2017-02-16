imgr = new Array();
imgr[0] = "http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg";
showRandomImg = true;
aBold = true;
summaryPost = 300;
summaryTitle = 30;
numposts  = 15;

function removeHtmlTag(e,t){for(var r=e.split("<"),i=0;i<r.length;i++)-1!=r[i].indexOf(">")&&(r[i]=r[i].substring(r[i].indexOf(">")+1,r[i].length));return r=r.join(""),r=r.substring(0,t-1)}function showrecentposts(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,document.write('<div class="slides">'),numposts<=e.feed.entry.length?maxpost=numposts:maxpost=e.feed.entry.length;for(var t=0;t<maxpost;t++){var r,i,n=e.feed.entry[t],l=n.title.$t;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){i=n.link[o].href;break}for(var o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){r=n.link[o].title.split(" ")[0];break}if("content"in n)var m=n.content.$t;else if("summary"in n)var m=n.summary.$t;else var m="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var f=[1,2,3,4,5,6,7,8,9,10,11,12],g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),h=(postdate.split("-")[0],0);h<f.length;h++)if(parseInt(p)==f[h]){p=g[h];break}var u='<div><p class="featured-thumb"><a href="'+i+'"><img width="290" height="180" src="'+img[t]+'"/></a></p><div class="featuredTitle"><a href="'+i+'">'+l+"</a></div><p>"+removeHtmlTag(m,summaryPost)+"... </p></div>";document.write(u),j++}document.write("</div>")}
