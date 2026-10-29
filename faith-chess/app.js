var ec="160";var Pd=0,eh=1,Id=2;var Lu=1,Ld=2,ti=3,xi=0,hn=1,We=2;var mi=0,ys=1,ki=2,nh=3,ih=4,Dd=5,Ui=100,Ud=101,Nd=102,sh=103,rh=104,Od=200,Fd=201,Bd=202,kd=203,fl=204,dl=205,Hd=206,zd=207,Vd=208,Gd=209,Wd=210,qd=211,Xd=212,Yd=213,$d=214,Zd=0,Jd=1,Kd=2,po=3,jd=4,Qd=5,tp=6,ep=7,qi=0,wr=1,np=2,Vn=0,ip=1,sp=2,rp=3,op=4,ap=5,lp=6;var Du=300,bs=301,Ss=302,pl=303,ml=304,qo=306,lr=1e3,Ln=1001,gl=1002,Ee=1003,oh=1004;var Pa=1005;var Xe=1006,cp=1007;var cr=1008;var gi=1009,hp=1010,up=1011,nc=1012,Uu=1013,di=1014,pi=1015,hr=1016,Nu=1017,Ou=1018,Oi=1020,fp=1021,Dn=1023,dp=1024,pp=1025,Fi=1026,Es=1027,mp=1028,Fu=1029,gp=1030,Bu=1031,ku=1033,Ia=33776,La=33777,Da=33778,Ua=33779,ah=35840,lh=35841,ch=35842,hh=35843,Hu=36196,uh=37492,fh=37496,dh=37808,ph=37809,mh=37810,gh=37811,xh=37812,_h=37813,yh=37814,vh=37815,Mh=37816,bh=37817,Sh=37818,Eh=37819,wh=37820,Th=37821,Na=36492,Ah=36494,Rh=36495,xp=36283,Ch=36284,Ph=36285,Ih=36286;var mo=2300,go=2301,Oa=2302,Lh=2400,Dh=2401,Uh=2402;var zu=3e3,Bi=3001,_p=3200,yp=3201,ic=0,vp=1,bn="",fe="srgb",ii="srgb-linear",sc="display-p3",Xo="display-p3-linear",xo="linear",ye="srgb",_o="rec709",yo="p3";var Qi=7680;var Nh=519,Mp=512,bp=513,Sp=514,Vu=515,Ep=516,wp=517,Tp=518,Ap=519,Oh=35044;var Fh="300 es",xl=1035,ei=2e3,vo=2001,_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fa=Math.PI/180,_l=180/Math.PI;function Us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function Rp(i,t){return(i%t+t)%t}function Ba(i,t,e){return(1-e)*i+e*t}function Bh(i){return(i&i-1)===0&&i!==0}function yl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function js(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var j=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],E=s[2],b=s[5],T=s[8];return r[0]=o*x+a*y+l*E,r[3]=o*m+a*_+l*b,r[6]=o*p+a*v+l*T,r[1]=c*x+h*y+u*E,r[4]=c*m+h*_+u*b,r[7]=c*p+h*v+u*T,r[2]=f*x+d*y+g*E,r[5]=f*m+d*_+g*b,r[8]=f*p+d*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ka=new Kt;function Gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cp(){let i=Mo("canvas");return i.style.display="block",i}var kh={};function sr(i){i in kh||(kh[i]=!0,console.warn(i))}var Hh=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[ii]:{transfer:xo,primaries:_o,toReference:i=>i,fromReference:i=>i},[fe]:{transfer:ye,primaries:_o,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xo]:{transfer:xo,primaries:yo,toReference:i=>i.applyMatrix3(zh),fromReference:i=>i.applyMatrix3(Hh)},[sc]:{transfer:ye,primaries:yo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(zh),fromReference:i=>i.applyMatrix3(Hh).convertLinearToSRGB()}},Pp=new Set([ii,Xo]),ue={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Pp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=kr[t].toReference,s=kr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return kr[i].primaries},getTransfer:function(i){return i===bn?xo:kr[i].transfer}};function vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,bo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=Mo("canvas")),ts.width=t.width,ts.height=t.height;let n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vs(e[n]/255)*255):e[n]=vs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ip=0,So=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Us(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,En=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=Xe,o=cr,a=Dn,l=gi,c=i.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Us(),this.name="",this.source=new So(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bi?fe:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?Bi:zu}set encoding(t){sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Bi?fe:bn}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Du;En.DEFAULT_ANISOTROPY=1;var be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,E=(p+1)/2,b=(h+f)/4,T=(u+x)/4,I=(g+m)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=T/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=I/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bi?fe:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new En(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new So(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Eo=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ml=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let E=Math.sqrt(_),b=Math.atan2(E,p*y);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}let v=a*y;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new C,Vh=new Gn,Hi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),zr.subVectors(this.max,Qs),es.subVectors(t.a,Qs),ns.subVectors(t.b,Qs),is.subVectors(t.c,Qs),li.subVectors(ns,es),ci.subVectors(is,ns),Ci.subVectors(es,is);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ci.z,Ci.y,li.z,0,-li.x,ci.z,0,-ci.x,Ci.z,0,-Ci.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ci.y,Ci.x,0];return!Ga(e,es,ns,is,zr)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,es,ns,is,zr))?!1:(Vr.crossVectors(li,ci),e=[Vr.x,Vr.y,Vr.z],Ga(e,es,ns,is,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zn=[new C,new C,new C,new C,new C,new C,new C,new C],Rn=new C,Hr=new Hi,es=new C,ns=new C,is=new C,li=new C,ci=new C,Ci=new C,Qs=new C,zr=new C,Vr=new C,Pi=new C;function Ga(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);let a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Dp=new Hi,tr=new C,Wa=new C,ws=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Wa)),this.expandByPoint(tr.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new C,qa=new C,Gr=new C,hi=new C,Xa=new C,Wr=new C,Ya=new C,ur=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(qa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Gr),a=hi.dot(this.direction),l=-hi.dot(Gr),c=hi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qa).addScaledVector(Gr,f),d}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){Xa.subVectors(e,t),Wr.subVectors(n,t),Ya.crossVectors(Xa,Wr);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);let l=a*this.direction.dot(Wr.crossVectors(hi,Wr));if(l<0)return null;let c=a*this.direction.dot(Xa.cross(hi));if(c<0||l+c>o)return null;let h=-a*hi.dot(Ya);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Up,t,Np)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ui.crossVectors(n,pn),ui.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ui.crossVectors(n,pn)),ui.normalize(),qr.crossVectors(pn,ui),s[0]=ui.x,s[4]=qr.x,s[8]=pn.x,s[1]=ui.y,s[5]=qr.y,s[9]=pn.y,s[2]=ui.z,s[6]=qr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],E=n[15],b=s[0],T=s[4],I=s[8],M=s[12],w=s[1],N=s[5],G=s[9],W=s[13],D=s[2],F=s[6],z=s[10],J=s[14],Z=s[3],X=s[7],nt=s[11],it=s[15];return r[0]=o*b+a*w+l*D+c*Z,r[4]=o*T+a*N+l*F+c*X,r[8]=o*I+a*G+l*z+c*nt,r[12]=o*M+a*W+l*J+c*it,r[1]=h*b+u*w+f*D+d*Z,r[5]=h*T+u*N+f*F+d*X,r[9]=h*I+u*G+f*z+d*nt,r[13]=h*M+u*W+f*J+d*it,r[2]=g*b+x*w+m*D+p*Z,r[6]=g*T+x*N+m*F+p*X,r[10]=g*I+x*G+m*z+p*nt,r[14]=g*M+x*W+m*J+p*it,r[3]=y*b+_*w+v*D+E*Z,r[7]=y*T+_*N+v*F+E*X,r[11]=y*I+_*G+v*z+E*nt,r[15]=y*M+_*W+v*J+E*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,_=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,E=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,b=e*y+n*_+s*v+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return t[0]=y*T,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*T,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*T,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*T,t[4]=_*T,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*T,t[8]=v*T,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*T,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*T,t[12]=E*T,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=l*c,_=l*h,v=l*u,E=n.x,b=n.y,T=n.z;return s[0]=(1-(x+p))*E,s[1]=(d+v)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+p))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(g+_)*T,s[9]=(m-y)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let c=1/r,h=1/o,u=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ei){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===ei)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ei){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,g,x;if(a===ei)g=(o+r)*u,x=-2*u;else if(a===vo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ss=new C,Cn=new ve,Up=new C(0,0,0),Np=new C(1,1,1),ui=new C,qr=new C,pn=new C,Gh=new ve,Wh=new Gn,wo=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wo.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Op=0,qh=new C,rs=new Gn,Kn=new ve,Xr=new C,er=new C,Fp=new C,Bp=new Gn,Xh=new C(1,0,0),Yh=new C(0,1,0),$h=new C(0,0,1),kp={type:"added"},Hp={type:"removed"},tn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new wo,n=new Gn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Kt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Xh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(er,Xr,this.up):Kn.lookAt(Xr,er,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Kn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(kp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};tn.DEFAULT_UP=new C(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new C,jn=new C,$a=new C,Qn=new C,os=new C,as=new C,Zh=new C,Za=new C,Ja=new C,Ka=new C,Yr=!1,ms=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),jn.subVectors(n,e),$a.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(jn),l=Pn.dot($a),c=jn.dot(jn),h=jn.dot($a),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(t,e,n,s,r,o,a,l){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),jn.subVectors(t,e),Pn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Pn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;os.subVectors(s,n),as.subVectors(r,n),Za.subVectors(t,n);let l=os.dot(Za),c=as.dot(Za);if(l<=0&&c<=0)return e.copy(n);Ja.subVectors(t,s);let h=os.dot(Ja),u=as.dot(Ja);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(os,o);Ka.subVectors(t,r);let d=os.dot(Ka),g=as.dot(Ka);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(as,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Zh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Zh,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Rp(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ja(o,r,t+1/3),this.g=ja(o,r,t),this.b=ja(o,r,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let n=Wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return ue.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Ye(Qe.r*255,0,255))*65536+Math.round(Ye(Qe.g*255,0,255))*256+Math.round(Ye(Qe.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=fe){ue.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL($r);let n=Ba(fi.h,$r.h,e),s=Ba(fi.s,$r.s,e),r=Ba(fi.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new wt;wt.NAMES=Wu;var zp=0,si=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=ys,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_e=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new C,Zr=new j,Sn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=js(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=js(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=js(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oh&&(t.usage=this.usage),t}};var To=class extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ao=class extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ct=class extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Vp=0,Mn=new ve,Qa=new tn,ls=new C,mn=new Hi,nr=new Hi,Ge=new C,le=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gu(t)?Ao:To)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(mn.min,nr.min),mn.expandByPoint(Ge),Ge.addVectors(mn.max,nr.max),mn.expandByPoint(Ge)):(mn.expandByPoint(nr.min),mn.expandByPoint(nr.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ge.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(t,c),Ge.add(ls)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new C,h[w]=new C;let u=new C,f=new C,d=new C,g=new j,x=new j,m=new j,p=new C,y=new C;function _(w,N,G){u.fromArray(s,w*3),f.fromArray(s,N*3),d.fromArray(s,G*3),g.fromArray(o,w*2),x.fromArray(o,N*2),m.fromArray(o,G*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let W=1/(x.x*m.y-m.x*x.y);isFinite(W)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(W),y.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(W),c[w].add(p),c[N].add(p),c[G].add(p),h[w].add(y),h[N].add(y),h[G].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let w=0,N=v.length;w<N;++w){let G=v[w],W=G.start,D=G.count;for(let F=W,z=W+D;F<z;F+=3)_(n[F+0],n[F+1],n[F+2])}let E=new C,b=new C,T=new C,I=new C;function M(w){T.fromArray(r,w*3),I.copy(T);let N=c[w];E.copy(N),E.sub(T.multiplyScalar(T.dot(N))).normalize(),b.crossVectors(I,N);let W=b.dot(h[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=W}for(let w=0,N=v.length;w<N;++w){let G=v[w],W=G.start,D=G.count;for(let F=W,z=W+D;F<z;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jh=new ve,Ii=new ur,Jr=new ws,Kh=new C,cs=new C,hs=new C,us=new C,tl=new C,Kr=new C,jr=new j,Qr=new j,to=new j,jh=new C,Qh=new C,tu=new C,eo=new C,no=new C,Ht=class extends tn{constructor(t=new le,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(tl.fromBufferAttribute(u,t),o?Kr.addScaledVector(tl,h):Kr.addScaledVector(tl.sub(e),h))}e.add(Kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Jr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Jr,Kh)===null||Ii.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(Jh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=_;v<E;v+=3){let b=a.getX(v),T=a.getX(v+1),I=a.getX(v+2);s=io(this,p,t,n,c,h,u,b,T,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=io(this,o,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=_;v<E;v+=3){let b=v,T=v+1,I=v+2;s=io(this,p,t,n,c,h,u,b,T,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,v=m+2;s=io(this,o,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Gp(i,t,e,n,s,r,o,a){let l;if(t.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;no.copy(a),no.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(no);return c<e.near||c>e.far?null:{distance:c,point:no.clone(),object:i}}function io(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,cs),i.getVertexPosition(l,hs),i.getVertexPosition(c,us);let h=Gp(i,t,e,n,cs,hs,us,eo);if(h){s&&(jr.fromBufferAttribute(s,a),Qr.fromBufferAttribute(s,l),to.fromBufferAttribute(s,c),h.uv=ms.getInterpolation(eo,cs,hs,us,jr,Qr,to,new j)),r&&(jr.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,l),to.fromBufferAttribute(r,c),h.uv1=ms.getInterpolation(eo,cs,hs,us,jr,Qr,to,new j),h.uv2=h.uv1),o&&(jh.fromBufferAttribute(o,a),Qh.fromBufferAttribute(o,l),tu.fromBufferAttribute(o,c),h.normal=ms.getInterpolation(eo,cs,hs,us,jh,Qh,tu,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};ms.getNormal(cs,hs,us,u.normal),h.face=u}return h}var ee=class i extends le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function g(x,m,p,y,_,v,E,b,T,I,M){let w=v/T,N=E/I,G=v/2,W=E/2,D=b/2,F=T+1,z=I+1,J=0,Z=0,X=new C;for(let nt=0;nt<z;nt++){let it=nt*N-W;for(let dt=0;dt<F;dt++){let q=dt*w-G;X[x]=q*y,X[m]=it*_,X[p]=D,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(dt/T),u.push(1-nt/I),J+=1}}for(let nt=0;nt<I;nt++)for(let it=0;it<T;it++){let dt=f+it+F*nt,q=f+it+F*(nt+1),Q=f+(it+1)+F*(nt+1),pt=f+(it+1)+F*nt;l.push(dt,q,pt),l.push(q,Q,pt),Z+=6}a.addGroup(d,Z,M),d+=Z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=Ts(i[e]);for(let s in n)t[s]=n[s]}return t}function Wp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qu(i){return i.getRenderTarget()===null?i.outputColorSpace:ue.workingColorSpace}var qp={clone:Ts,merge:on},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ro=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pe=class extends Ro{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_l*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ds=1,bl=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(fs,ds,t,e);s.layers=this.layers,this.add(s);let r=new Pe(fs,ds,t,e);r.layers=this.layers,this.add(r);let o=new Pe(fs,ds,t,e);o.layers=this.layers,this.add(o);let a=new Pe(fs,ds,t,e);a.layers=this.layers,this.add(a);let l=new Pe(fs,ds,t,e);l.layers=this.layers,this.add(l);let c=new Pe(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},As=class extends En{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sl=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Bi?fe:bn),this.texture=new As(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ee(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:mi});r.uniforms.tEquirect.value=e;let o=new Ht(s,r),a=e.minFilter;return e.minFilter===cr&&(e.minFilter=Xe),new bl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},el=new C,$p=new C,Zp=new Kt,In=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=el.subVectors(n,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(el),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zp.getNormalMatrix(t),s=this.coplanarPoint(el).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new ws,so=new C,dr=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+y).normalize(),n[3].setComponents(l-o,f-h,m-g,v-y).normalize(),n[4].setComponents(l-a,f-u,m-x,v-_).normalize(),e===ei)n[5].setComponents(l+a,f+u,m+x,v+_).normalize();else if(e===vo)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jp(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Wn=class i extends le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let _=0;_<c;_++){let v=_*u-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,v=y+c*(p+1),E=y+1+c*(p+1),b=y+1+c*p;d.push(_,v,b),d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,um=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,km=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Km=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,s0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,f0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_g=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Kp,alphahash_pars_fragment:jp,alphamap_fragment:Qp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:om,begin_vertex:am,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:fm,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:xm,color_pars_vertex:_m,color_vertex:ym,common:vm,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Sm,displacementmap_vertex:Em,emissivemap_fragment:wm,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Rm,envmap_fragment:Cm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Im,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Wm,envmap_vertex:Dm,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Om,fog_pars_fragment:Fm,gradientmap_pars_fragment:Bm,lightmap_fragment:km,lightmap_pars_fragment:Hm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Gm,lights_toon_fragment:qm,lights_toon_pars_fragment:Xm,lights_phong_fragment:Ym,lights_phong_pars_fragment:$m,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:Km,lights_fragment_maps:jm,lights_fragment_end:Qm,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:n0,logdepthbuf_vertex:i0,map_fragment:s0,map_pars_fragment:r0,map_particle_fragment:o0,map_particle_pars_fragment:a0,metalnessmap_fragment:l0,metalnessmap_pars_fragment:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:f0,morphtarget_vertex:d0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:x0,normal_vertex:_0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:S0,opaque_fragment:E0,packing:w0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:O0,skinning_pars_vertex:F0,skinning_vertex:B0,skinnormal_vertex:k0,specularmap_fragment:H0,specularmap_pars_fragment:z0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:q0,uv_pars_fragment:X0,uv_pars_vertex:Y0,uv_vertex:$0,worldpos_vertex:Z0,background_vert:J0,background_frag:K0,backgroundCube_vert:j0,backgroundCube_frag:Q0,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:fg,meshlambert_frag:dg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:xg,meshphong_vert:_g,meshphong_frag:yg,meshphysical_vert:vg,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:Sg,points_vert:Eg,points_frag:wg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},ct={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},zn={basic:{uniforms:on([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:on([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:on([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:on([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:on([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:on([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:on([ct.points,ct.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:on([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:on([ct.common,ct.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:on([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:on([ct.sprite,ct.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:on([ct.common,ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:on([ct.lights,ct.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};zn.physical={uniforms:on([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var ro={r:0,b:0,g:0};function Pg(i,t,e,n,s,r,o){let a=new wt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),y=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===qo)?(h===void 0&&(h=new Ht(new ee(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Ts(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ue.getTransfer(_.colorSpace)!==ye,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ht(new Wn(2,2),new ri({name:"BackgroundMaterial",uniforms:Ts(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ue.getTransfer(_.colorSpace)!==ye,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(ro,qu(i)),n.buffers.color.setClear(ro.r,ro.g,ro.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function Ig(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(D,F,z,J,Z){let X=!1;if(o){let nt=x(J,z,F);c!==nt&&(c=nt,d(c.object)),X=p(D,J,z,Z),X&&y(D,J,z,Z)}else{let nt=F.wireframe===!0;(c.geometry!==J.id||c.program!==z.id||c.wireframe!==nt)&&(c.geometry=J.id,c.program=z.id,c.wireframe=nt,X=!0)}Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,I(D,F,z,J),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function x(D,F,z){let J=z.wireframe===!0,Z=a[D.id];Z===void 0&&(Z={},a[D.id]=Z);let X=Z[F.id];X===void 0&&(X={},Z[F.id]=X);let nt=X[J];return nt===void 0&&(nt=m(f()),X[J]=nt),nt}function m(D){let F=[],z=[],J=[];for(let Z=0;Z<s;Z++)F[Z]=0,z[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:J,object:D,attributes:{},index:null}}function p(D,F,z,J){let Z=c.attributes,X=F.attributes,nt=0,it=z.getAttributes();for(let dt in it)if(it[dt].location>=0){let Q=Z[dt],pt=X[dt];if(pt===void 0&&(dt==="instanceMatrix"&&D.instanceMatrix&&(pt=D.instanceMatrix),dt==="instanceColor"&&D.instanceColor&&(pt=D.instanceColor)),Q===void 0||Q.attribute!==pt||pt&&Q.data!==pt.data)return!0;nt++}return c.attributesNum!==nt||c.index!==J}function y(D,F,z,J){let Z={},X=F.attributes,nt=0,it=z.getAttributes();for(let dt in it)if(it[dt].location>=0){let Q=X[dt];Q===void 0&&(dt==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),dt==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let pt={};pt.attribute=Q,Q&&Q.data&&(pt.data=Q.data),Z[dt]=pt,nt++}c.attributes=Z,c.attributesNum=nt,c.index=J}function _(){let D=c.newAttributes;for(let F=0,z=D.length;F<z;F++)D[F]=0}function v(D){E(D,0)}function E(D,F){let z=c.newAttributes,J=c.enabledAttributes,Z=c.attributeDivisors;z[D]=1,J[D]===0&&(i.enableVertexAttribArray(D),J[D]=1),Z[D]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),Z[D]=F)}function b(){let D=c.newAttributes,F=c.enabledAttributes;for(let z=0,J=F.length;z<J;z++)F[z]!==D[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function T(D,F,z,J,Z,X,nt){nt===!0?i.vertexAttribIPointer(D,F,z,Z,X):i.vertexAttribPointer(D,F,z,J,Z,X)}function I(D,F,z,J){if(n.isWebGL2===!1&&(D.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let Z=J.attributes,X=z.getAttributes(),nt=F.defaultAttributeValues;for(let it in X){let dt=X[it];if(dt.location>=0){let q=Z[it];if(q===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){let Q=q.normalized,pt=q.itemSize,Mt=e.get(q);if(Mt===void 0)continue;let xt=Mt.buffer,Ut=Mt.type,zt=Mt.bytesPerElement,bt=n.isWebGL2===!0&&(Ut===i.INT||Ut===i.UNSIGNED_INT||q.gpuType===Uu);if(q.isInterleavedBufferAttribute){let Bt=q.data,L=Bt.stride,at=q.offset;if(Bt.isInstancedInterleavedBuffer){for(let $=0;$<dt.locationSize;$++)E(dt.location+$,Bt.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Bt.meshPerAttribute*Bt.count)}else for(let $=0;$<dt.locationSize;$++)v(dt.location+$);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let $=0;$<dt.locationSize;$++)T(dt.location+$,pt/dt.locationSize,Ut,Q,L*zt,(at+pt/dt.locationSize*$)*zt,bt)}else{if(q.isInstancedBufferAttribute){for(let Bt=0;Bt<dt.locationSize;Bt++)E(dt.location+Bt,q.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Bt=0;Bt<dt.locationSize;Bt++)v(dt.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Bt=0;Bt<dt.locationSize;Bt++)T(dt.location+Bt,pt/dt.locationSize,Ut,Q,pt*zt,pt/dt.locationSize*Bt*zt,bt)}}else if(nt!==void 0){let Q=nt[it];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(dt.location,Q);break;case 3:i.vertexAttrib3fv(dt.location,Q);break;case 4:i.vertexAttrib4fv(dt.location,Q);break;default:i.vertexAttrib1fv(dt.location,Q)}}}}b()}function M(){G();for(let D in a){let F=a[D];for(let z in F){let J=F[z];for(let Z in J)g(J[Z].object),delete J[Z];delete F[z]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;let F=a[D.id];for(let z in F){let J=F[z];for(let Z in J)g(J[Z].object),delete J[Z];delete F[z]}delete a[D.id]}function N(D){for(let F in a){let z=a[F];if(z[D.id]===void 0)continue;let J=z[D.id];for(let Z in J)g(J[Z].object),delete J[Z];delete z[D.id]}}function G(){W(),h=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:v,disableUnusedAttributes:b}}function Lg(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Dg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,v=o||t.has("OES_texture_float"),E=_&&v,b=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:b}}function Ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new In,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,v=p.clippingState||null;l.value=v,v=h(g,f,_,d);for(let E=0;E!==_;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Ng(i){let t=new WeakMap;function e(o,a){return a===pl?o.mapping=bs:a===ml&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===pl||a===ml)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sl(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rs=class extends Ro{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,eu=[.125,.215,.35,.446,.526,.582],Ni=20,nl=new Rs,nu=new wt,il=null,sl=0,rl=0,Di=(1+Math.sqrt(5))/2,ps=1/Di,iu=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Di,ps),new C(0,Di,-ps),new C(ps,0,Di),new C(-ps,0,Di),new C(Di,ps,0),new C(-Di,ps,0)],Co=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(il,sl,rl),t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:hr,format:Dn,colorSpace:ii,depthBuffer:!1},s=su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(r)),this._blurMaterial=Fg(r,t,e)}return s}_compileMaterial(t){let e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,nl)}_sceneToCubeUV(t,e,n,s){let a=new Pe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(nu),h.toneMapping=Vn,h.autoClear=!1;let d=new _e({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Ht(new ee,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(nu),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;oo(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===bs||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;oo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,nl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=iu[(s-1)%iu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ht(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ni-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);let p=[],y=0;for(let T=0;T<Ni;++T){let I=T/x,M=Math.exp(-I*I/2);p.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let v=this._sizeLods[s],E=3*v*(s>_-gs?s-_+gs:0),b=4*(this._cubeSize-v);oo(e,E,b,3*v,2*v),l.setRenderTarget(e),l.render(u,nl)}};function Og(i){let t=[],e=[],n=[],s=i,r=i-gs+1+eu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-gs?l=eu[o-i+gs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let b=0;b<d;b++){let T=b%3*2/3-1,I=b>2?0:-1,M=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];y.set(M,x*g*b),_.set(f,m*g*b);let w=[b,b,b,b,b,b];v.set(w,p*g*b)}let E=new le;E.setAttribute("position",new Sn(y,x)),E.setAttribute("uv",new Sn(_,m)),E.setAttribute("faceIndex",new Sn(v,p)),t.push(E),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function su(i,t,e){let n=new Un(i,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fg(i,t,e){let n=new Float32Array(Ni),s=new C(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ru(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ou(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===pl||l===ml,h=l===bs||l===Ss;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Co(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Co(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function kg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,v=y.length;_<v;_+=3){let E=y[_+0],b=y[_+1],T=y[_+2];f.push(E,b,b,T,T,E)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let E=_+0,b=_+1,T=_+2;f.push(E,b,b,T,T,E)}}else return;let m=new(Gu(f)?Ao:To)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function zg(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*l),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Vg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,t){return i[0]-t[0]}function Wg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function qg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new be,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let D=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],I=0;y===!0&&(I=1),_===!0&&(I=2),v===!0&&(I=3);let M=h.attributes.position.count*I,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*w*4*g),G=new Eo(N,M,w,g);G.type=pi,G.needsUpdate=!0;let W=I*4;for(let F=0;F<g;F++){let z=E[F],J=b[F],Z=T[F],X=M*w*4*F;for(let nt=0;nt<z.count;nt++){let it=nt*W;y===!0&&(o.fromBufferAttribute(z,nt),N[X+it+0]=o.x,N[X+it+1]=o.y,N[X+it+2]=o.z,N[X+it+3]=0),_===!0&&(o.fromBufferAttribute(J,nt),N[X+it+4]=o.x,N[X+it+5]=o.y,N[X+it+6]=o.z,N[X+it+7]=0),v===!0&&(o.fromBufferAttribute(Z,nt),N[X+it+8]=o.x,N[X+it+9]=o.y,N[X+it+10]=o.z,N[X+it+11]=Z.itemSize===4?o.w:1)}}x={count:g,texture:G,size:new j(M,w)},r.set(h,x),h.addEventListener("dispose",D)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<d;_++){let v=g[_];v[0]=_,v[1]=f[_]}g.sort(Wg);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Gg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let v=a[_],E=v[0],b=v[1];E!==Number.MAX_SAFE_INTEGER&&b?(x&&h.getAttribute("morphTarget"+_)!==x[E]&&h.setAttribute("morphTarget"+_,x[E]),m&&h.getAttribute("morphNormal"+_)!==m[E]&&h.setAttribute("morphNormal"+_,m[E]),s[_]=b,p+=b):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Xg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Po=class extends En{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Fi,h!==Fi&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fi&&(n=di),n===void 0&&h===Es&&(n=Oi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yu=new En,$u=new Po(1,1);$u.compareFunction=Vu;var Zu=new Eo,Ju=new Ml,Ku=new As,au=[],lu=[],cu=new Float32Array(16),hu=new Float32Array(9),uu=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=lu[t];e===void 0&&(e=new Int32Array(t),lu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;uu.set(n),i.uniformMatrix2fv(this.addr,!1,uu),ke(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;hu.set(n),i.uniformMatrix3fv(this.addr,!1,hu),ke(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;cu.set(n),i.uniformMatrix4fv(this.addr,!1,cu),ke(e,n)}}function tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?$u:Yu;e.setTexture2D(t||r,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ju,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ku,s)}function ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zu,s)}function fx(i){switch(i){case 5126:return Yg;case 35664:return $g;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}function dx(i,t){i.uniform1fv(this.addr,t)}function px(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function mx(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function gx(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function xx(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _x(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yx(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vx(i,t){i.uniform1iv(this.addr,t)}function Mx(i,t){i.uniform2iv(this.addr,t)}function bx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function Ex(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function Tx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Rx(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yu,r[o])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ju,r[o])}function Px(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ku,r[o])}function Ix(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zu,r[o])}function Lx(i){switch(i){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return _x;case 35676:return yx;case 5124:case 35670:return vx;case 35667:case 35671:return Mx;case 35668:case 35672:return bx;case 35669:case 35673:return Sx;case 5125:return Ex;case 36294:return wx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Ix}}var El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fx(e.type)}},wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lx(e.type)}},Tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ol=/(\w+)(\])?(\[|\.)?/g;function fu(i,t){i.seq.push(t),i.map[t.id]=t}function Dx(i,t,e){let n=i.name,s=n.length;for(ol.lastIndex=0;;){let r=ol.exec(n),o=ol.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fu(e,c===void 0?new El(a,i,t):new wl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Tl(a),fu(e,u)),e=u}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Dx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function du(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ux=37297,Nx=0;function Ox(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Fx(i){let t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(i),n;switch(t===e?n="":t===yo&&e===_o?n="LinearDisplayP3ToLinearSRGB":t===_o&&e===yo&&(n="LinearSRGBToLinearDisplayP3"),i){case ii:case Xo:return[n,"LinearTransferOETF"];case fe:case sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ox(i.getShaderSource(t),o)}else return s}function Bx(i,t){let e=Fx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kx(i,t){let e;switch(t){case ip:e="Linear";break;case sp:e="Reinhard";break;case rp:e="OptimizedCineon";break;case op:e="ACESFilmic";break;case lp:e="AgX";break;case ap:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Hx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function zx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function Vx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function xs(i){return i!==""}function mu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(Wx,Xx)}var qx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xx(i,t){let e=Xt[t];if(e===void 0){let n=qx.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}var Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(i){return i.replace(Yx,$x)}function $x(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Jx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:t="ENVMAP_TYPE_CUBE";break;case qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function jx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qi:t="ENVMAP_BLENDING_MULTIPLY";break;case wr:t="ENVMAP_BLENDING_MIX";break;case np:t="ENVMAP_BLENDING_ADD";break}return t}function Qx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function t_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zx(e),c=Jx(e),h=Kx(e),u=jx(e),f=Qx(e),d=e.isWebGL2?"":Hx(e),g=zx(e),x=Vx(r),m=s.createProgram(),p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xs).join(`
`),y.length>0&&(y+=`
`)):(p=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),y=[d,_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Bx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),o=Al(o),o=mu(o,e),o=gu(o,e),a=Al(a),a=mu(a,e),a=gu(a,e),o=xu(o),a=xu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=_+p+o,E=_+y+a,b=du(s,s.VERTEX_SHADER,v),T=du(s,s.FRAGMENT_SHADER,E);s.attachShader(m,b),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(G){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(b).trim(),F=s.getShaderInfoLog(T).trim(),z=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,T);else{let Z=pu(s,b,"vertex"),X=pu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+Z+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(D===""||F==="")&&(J=!1);J&&(G.diagnostics={runnable:z,programLog:W,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:y}})}s.deleteShader(b),s.deleteShader(T),M=new Ms(s,m),w=Gx(s,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,Ux)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}var e_=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cl(t),e.set(t,n)),n}},Cl=class{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}};function n_(i,t,e,n,s,r,o){let a=new fr,l=new Rl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,w,N,G,W){let D=G.fog,F=W.geometry,z=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),Z=J&&J.mapping===qo?J.image.height:null,X=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=nt!==void 0?nt.length:0,dt=0;F.morphAttributes.position!==void 0&&(dt=1),F.morphAttributes.normal!==void 0&&(dt=2),F.morphAttributes.color!==void 0&&(dt=3);let q,Q,pt,Mt;if(X){let sn=zn[X];q=sn.vertexShader,Q=sn.fragmentShader}else q=M.vertexShader,Q=M.fragmentShader,l.update(M),pt=l.getVertexShaderID(M),Mt=l.getFragmentShaderID(M);let xt=i.getRenderTarget(),Ut=W.isInstancedMesh===!0,zt=W.isBatchedMesh===!0,bt=!!M.map,Bt=!!M.matcap,L=!!J,at=!!M.aoMap,$=!!M.lightMap,ot=!!M.bumpMap,Y=!!M.normalMap,Tt=!!M.displacementMap,mt=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,B=M.anisotropy>0,st=M.clearcoat>0,tt=M.iridescence>0,K=M.sheen>0,vt=M.transmission>0,ht=B&&!!M.anisotropyMap,_t=st&&!!M.clearcoatMap,Pt=st&&!!M.clearcoatNormalMap,Gt=st&&!!M.clearcoatRoughnessMap,et=tt&&!!M.iridescenceMap,oe=tt&&!!M.iridescenceThicknessMap,te=K&&!!M.sheenColorMap,kt=K&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,yt=!!M.specularColorMap,qt=!!M.specularIntensityMap,ce=vt&&!!M.transmissionMap,Re=vt&&!!M.thicknessMap,Zt=!!M.gradientMap,lt=!!M.alphaMap,U=M.alphaTest>0,ut=!!M.alphaHash,ft=!!M.extensions,Nt=!!F.attributes.uv1,It=!!F.attributes.uv2,me=!!F.attributes.uv3,ge=Vn;return M.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ge=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:Q,defines:M.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:zt,instancing:Ut,instancingColor:Ut&&W.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:ii,map:bt,matcap:Bt,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:$,bumpMap:ot,normalMap:Y,displacementMap:f&&Tt,emissiveMap:mt,normalMapObjectSpace:Y&&M.normalMapType===vp,normalMapTangentSpace:Y&&M.normalMapType===ic,metalnessMap:A,roughnessMap:S,anisotropy:B,anisotropyMap:ht,clearcoat:st,clearcoatMap:_t,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Gt,iridescence:tt,iridescenceMap:et,iridescenceThicknessMap:oe,sheen:K,sheenColorMap:te,sheenRoughnessMap:kt,specularMap:Rt,specularColorMap:yt,specularIntensityMap:qt,transmission:vt,transmissionMap:ce,thicknessMap:Re,gradientMap:Zt,opaque:M.transparent===!1&&M.blending===ys,alphaMap:lt,alphaTest:U,alphaHash:ut,combine:M.combine,mapUv:bt&&x(M.map.channel),aoMapUv:at&&x(M.aoMap.channel),lightMapUv:$&&x(M.lightMap.channel),bumpMapUv:ot&&x(M.bumpMap.channel),normalMapUv:Y&&x(M.normalMap.channel),displacementMapUv:Tt&&x(M.displacementMap.channel),emissiveMapUv:mt&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:ht&&x(M.anisotropyMap.channel),clearcoatMapUv:_t&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:te&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(M.sheenRoughnessMap.channel),specularMapUv:Rt&&x(M.specularMap.channel),specularColorMapUv:yt&&x(M.specularColorMap.channel),specularIntensityMapUv:qt&&x(M.specularIntensityMap.channel),transmissionMapUv:ce&&x(M.transmissionMap.channel),thicknessMapUv:Re&&x(M.thicknessMap.channel),alphaMapUv:lt&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Y||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:It,vertexUv3s:me,pointsUvs:W.isPoints===!0&&!!F.attributes.uv&&(bt||lt),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:dt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===We,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ft&&M.extensions.derivatives===!0,extensionFragDepth:ft&&M.extensions.fragDepth===!0,extensionDrawBuffers:ft&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(w,M),_(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){let w=g[M.type],N;if(w){let G=zn[w];N=qp.clone(G.uniforms)}else N=M.uniforms;return N}function E(M,w){let N;for(let G=0,W=c.length;G<W;G++){let D=c[G];if(D.cacheKey===w){N=D,++N.usedTimes;break}}return N===void 0&&(N=new t_(i,w,M,r),c.push(N)),N}function b(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:I}}function i_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||s_),n.length>1&&n.sort(f||yu),s.length>1&&s.sort(f||yu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function r_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new vu,i.set(n,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function o_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new wt};break;case"SpotLight":e={position:new C,direction:new C,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function a_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var l_=0;function c_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h_(i,t){let e=new o_,n=a_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new ve,a=new ve;function l(h,u){let f=0,d=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,v=0,E=0,b=0,T=0,I=0,M=0;h.sort(c_);let w=u===!0?Math.PI:1;for(let G=0,W=h.length;G<W;G++){let D=h[G],F=D.color,z=D.intensity,J=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=F.r*z*w,d+=F.g*z*w,g+=F.b*z*w;else if(D.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(D.sh.coefficients[X],z);M++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){let nt=D.shadow,it=n.get(D);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,s.directionalShadow[x]=it,s.directionalShadowMap[x]=Z,s.directionalShadowMatrix[x]=D.shadow.matrix,v++}s.directional[x]=X,x++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(z*w),X.distance=J,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,s.spot[p]=X;let nt=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,nt.updateMatrices(D),D.castShadow&&I++),s.spotLightMatrix[p]=nt.matrix,D.castShadow){let it=n.get(D);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,s.spotShadow[p]=it,s.spotShadowMap[p]=Z,b++}p++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=X,y++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*w),X.distance=D.distance,X.decay=D.decay,D.castShadow){let nt=D.shadow,it=n.get(D);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,it.shadowCameraNear=nt.camera.near,it.shadowCameraFar=nt.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=D.shadow.matrix,E++}s.point[m]=X,m++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(z*w),X.groundColor.copy(D.groundColor).multiplyScalar(z*w),s.hemi[_]=X,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==_||N.numDirectionalShadows!==v||N.numPointShadows!==E||N.numSpotShadows!==b||N.numSpotMaps!==T||N.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=b+T-I,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=_,N.numDirectionalShadows=v,N.numPointShadows=E,N.numSpotShadows=b,N.numSpotMaps=T,N.numLightProbes=M,s.version=l_++)}function c(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let v=h[y];if(v.isDirectionalLight){let E=s.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(v.isSpotLight){let E=s.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let E=s.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let E=s.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let E=s.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Mu(i,t){let e=new h_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function u_(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Mu(i,t),e.set(r,[l])):o>=a.length?(l=new Mu(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Pl=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Il=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p_(i,t,e){let n=new dr,s=new j,r=new j,o=new be,a=new Pl({depthPacking:yp}),l=new Il,c={},h=e.maxTextureSize,u={[xi]:hn,[hn]:xi,[We]:We},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:f_,fragmentShader:d_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new le;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ht(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let p=this.type;this.render=function(b,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let M=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(mi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let W=p!==ti&&this.type===ti,D=p===ti&&this.type!==ti;for(let F=0,z=b.length;F<z;F++){let J=b[F],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let X=Z.getFrameExtents();if(s.multiply(X),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,Z.mapSize.y=r.y)),Z.map===null||W===!0||D===!0){let it=this.type!==ti?{minFilter:Ee,magFilter:Ee}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Un(s.x,s.y,it),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let nt=Z.getViewportCount();for(let it=0;it<nt;it++){let dt=Z.getViewport(it);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),G.viewport(o),Z.updateMatrices(J,it),n=Z.getFrustum(),v(T,I,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ti&&y(Z,I),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,w,N)};function y(b,T){let I=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Un(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,I,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,I,d,x,null)}function _(b,T,I,M){let w=null,N=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)w=N;else if(w=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=w.uuid,W=T.uuid,D=c[G];D===void 0&&(D={},c[G]=D);let F=D[W];F===void 0&&(F=w.clone(),D[W]=F,T.addEventListener("dispose",E)),w=F}if(w.visible=T.visible,w.wireframe=T.wireframe,M===ti?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=i.properties.get(w);G.light=I}return w}function v(b,T,I,M,w){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===ti)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let W=t.update(b),D=b.material;if(Array.isArray(D)){let F=W.groups;for(let z=0,J=F.length;z<J;z++){let Z=F[z],X=D[Z.materialIndex];if(X&&X.visible){let nt=_(b,X,M,w);b.onBeforeShadow(i,b,T,I,W,nt,Z),i.renderBufferDirect(I,null,W,nt,b,Z),b.onAfterShadow(i,b,T,I,W,nt,Z)}}}else if(D.visible){let F=_(b,D,M,w);b.onBeforeShadow(i,b,T,I,W,F,null),i.renderBufferDirect(I,null,W,F,b,null),b.onAfterShadow(i,b,T,I,W,F,null)}}let G=b.children;for(let W=0,D=G.length;W<D;W++)v(G[W],T,I,M,w)}function E(b){b.target.removeEventListener("dispose",E);for(let I in c){let M=c[I],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function m_(i,t,e){let n=e.isWebGL2;function s(){let U=!1,ut=new be,ft=null,Nt=new be(0,0,0,0);return{setMask:function(It){ft!==It&&!U&&(i.colorMask(It,It,It,It),ft=It)},setLocked:function(It){U=It},setClear:function(It,me,ge,ze,sn){sn===!0&&(It*=ze,me*=ze,ge*=ze),ut.set(It,me,ge,ze),Nt.equals(ut)===!1&&(i.clearColor(It,me,ge,ze),Nt.copy(ut))},reset:function(){U=!1,ft=null,Nt.set(-1,0,0,0)}}}function r(){let U=!1,ut=null,ft=null,Nt=null;return{setTest:function(It){It?zt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(It){ut!==It&&!U&&(i.depthMask(It),ut=It)},setFunc:function(It){if(ft!==It){switch(It){case Zd:i.depthFunc(i.NEVER);break;case Jd:i.depthFunc(i.ALWAYS);break;case Kd:i.depthFunc(i.LESS);break;case po:i.depthFunc(i.LEQUAL);break;case jd:i.depthFunc(i.EQUAL);break;case Qd:i.depthFunc(i.GEQUAL);break;case tp:i.depthFunc(i.GREATER);break;case ep:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=It}},setLocked:function(It){U=It},setClear:function(It){Nt!==It&&(i.clearDepth(It),Nt=It)},reset:function(){U=!1,ut=null,ft=null,Nt=null}}}function o(){let U=!1,ut=null,ft=null,Nt=null,It=null,me=null,ge=null,ze=null,sn=null;return{setTest:function(xe){U||(xe?zt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(xe){ut!==xe&&!U&&(i.stencilMask(xe),ut=xe)},setFunc:function(xe,rn,Hn){(ft!==xe||Nt!==rn||It!==Hn)&&(i.stencilFunc(xe,rn,Hn),ft=xe,Nt=rn,It=Hn)},setOp:function(xe,rn,Hn){(me!==xe||ge!==rn||ze!==Hn)&&(i.stencilOp(xe,rn,Hn),me=xe,ge=rn,ze=Hn)},setLocked:function(xe){U=xe},setClear:function(xe){sn!==xe&&(i.clearStencil(xe),sn=xe)},reset:function(){U=!1,ut=null,ft=null,Nt=null,It=null,me=null,ge=null,ze=null,sn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,v=null,E=null,b=null,T=null,I=null,M=new wt(0,0,0),w=0,N=!1,G=null,W=null,D=null,F=null,z=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,X=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Z=X>=1):nt.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Z=X>=2);let it=null,dt={},q=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),pt=new be().fromArray(q),Mt=new be().fromArray(Q);function xt(U,ut,ft,Nt){let It=new Uint8Array(4),me=i.createTexture();i.bindTexture(U,me),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<ft;ge++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ut,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(ut+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return me}let Ut={};Ut[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),zt(i.DEPTH_TEST),l.setFunc(po),mt(!1),A(eh),zt(i.CULL_FACE),Y(mi);function zt(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function bt(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function Bt(U,ut){return d[U]!==ut?(i.bindFramebuffer(U,ut),d[U]=ut,n&&(U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut)),!0):!1}function L(U,ut){let ft=x,Nt=!1;if(U)if(ft=g.get(ut),ft===void 0&&(ft=[],g.set(ut,ft)),U.isWebGLMultipleRenderTargets){let It=U.texture;if(ft.length!==It.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let me=0,ge=It.length;me<ge;me++)ft[me]=i.COLOR_ATTACHMENT0+me;ft.length=It.length,Nt=!0}}else ft[0]!==i.COLOR_ATTACHMENT0&&(ft[0]=i.COLOR_ATTACHMENT0,Nt=!0);else ft[0]!==i.BACK&&(ft[0]=i.BACK,Nt=!0);Nt&&(e.isWebGL2?i.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function at(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let $={[Ui]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};if(n)$[sh]=i.MIN,$[rh]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&($[sh]=U.MIN_EXT,$[rh]=U.MAX_EXT)}let ot={[Od]:i.ZERO,[Fd]:i.ONE,[Bd]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[Wd]:i.SRC_ALPHA_SATURATE,[Vd]:i.DST_COLOR,[Hd]:i.DST_ALPHA,[kd]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[qd]:i.CONSTANT_COLOR,[Xd]:i.ONE_MINUS_CONSTANT_COLOR,[Yd]:i.CONSTANT_ALPHA,[$d]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(U,ut,ft,Nt,It,me,ge,ze,sn,xe){if(U===mi){p===!0&&(bt(i.BLEND),p=!1);return}if(p===!1&&(zt(i.BLEND),p=!0),U!==Dd){if(U!==y||xe!==N){if((_!==Ui||b!==Ui)&&(i.blendEquation(i.FUNC_ADD),_=Ui,b=Ui),xe)switch(U){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ki:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ki:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,E=null,T=null,I=null,M.set(0,0,0),w=0,y=U,N=xe}return}It=It||ut,me=me||ft,ge=ge||Nt,(ut!==_||It!==b)&&(i.blendEquationSeparate($[ut],$[It]),_=ut,b=It),(ft!==v||Nt!==E||me!==T||ge!==I)&&(i.blendFuncSeparate(ot[ft],ot[Nt],ot[me],ot[ge]),v=ft,E=Nt,T=me,I=ge),(ze.equals(M)===!1||sn!==w)&&(i.blendColor(ze.r,ze.g,ze.b,sn),M.copy(ze),w=sn),y=U,N=!1}function Tt(U,ut){U.side===We?bt(i.CULL_FACE):zt(i.CULL_FACE);let ft=U.side===hn;ut&&(ft=!ft),mt(ft),U.blending===ys&&U.transparent===!1?Y(mi):Y(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);let Nt=U.stencilWrite;c.setTest(Nt),Nt&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),B(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?zt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){G!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),G=U)}function A(U){U!==Pd?(zt(i.CULL_FACE),U!==W&&(U===eh?i.cullFace(i.BACK):U===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),W=U}function S(U){U!==D&&(Z&&i.lineWidth(U),D=U)}function B(U,ut,ft){U?(zt(i.POLYGON_OFFSET_FILL),(F!==ut||z!==ft)&&(i.polygonOffset(ut,ft),F=ut,z=ft)):bt(i.POLYGON_OFFSET_FILL)}function st(U){U?zt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function tt(U){U===void 0&&(U=i.TEXTURE0+J-1),it!==U&&(i.activeTexture(U),it=U)}function K(U,ut,ft){ft===void 0&&(it===null?ft=i.TEXTURE0+J-1:ft=it);let Nt=dt[ft];Nt===void 0&&(Nt={type:void 0,texture:void 0},dt[ft]=Nt),(Nt.type!==U||Nt.texture!==ut)&&(it!==ft&&(i.activeTexture(ft),it=ft),i.bindTexture(U,ut||Ut[U]),Nt.type=U,Nt.texture=ut)}function vt(){let U=dt[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ht(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(U){pt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),pt.copy(U))}function ce(U){Mt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Mt.copy(U))}function Re(U,ut){let ft=u.get(ut);ft===void 0&&(ft=new WeakMap,u.set(ut,ft));let Nt=ft.get(U);Nt===void 0&&(Nt=i.getUniformBlockIndex(ut,U.name),ft.set(U,Nt))}function Zt(U,ut){let Nt=u.get(ut).get(U);h.get(ut)!==Nt&&(i.uniformBlockBinding(ut,Nt,U.__bindingPointIndex),h.set(ut,Nt))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},it=null,dt={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,v=null,E=null,b=null,T=null,I=null,M=new wt(0,0,0),w=0,N=!1,G=null,W=null,D=null,F=null,z=null,pt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:zt,disable:bt,bindFramebuffer:Bt,drawBuffers:L,useProgram:at,setBlending:Y,setMaterial:Tt,setFlipSided:mt,setCullFace:A,setLineWidth:S,setPolygonOffset:B,setScissorTest:st,activeTexture:tt,bindTexture:K,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:_t,texImage2D:Rt,texImage3D:yt,updateUBOMapping:Re,uniformBlockBinding:Zt,texStorage2D:te,texStorage3D:kt,texSubImage2D:Pt,texSubImage3D:Gt,compressedTexSubImage2D:et,compressedTexSubImage3D:oe,scissor:qt,viewport:ce,reset:lt}}function g_(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Mo("canvas")}function x(A,S,B,st){let tt=1;if((A.width>st||A.height>st)&&(tt=st/Math.max(A.width,A.height)),tt<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let K=S?yl:Math.floor,vt=K(tt*A.width),ht=K(tt*A.height);u===void 0&&(u=g(vt,ht));let _t=B?g(vt,ht):u;return _t.width=vt,_t.height=ht,_t.getContext("2d").drawImage(A,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+vt+"x"+ht+")."),_t}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Bh(A.width)&&Bh(A.height)}function p(A){return a?!1:A.wrapS!==Ln||A.wrapT!==Ln||A.minFilter!==Ee&&A.minFilter!==Xe}function y(A,S){return A.generateMipmaps&&S&&A.minFilter!==Ee&&A.minFilter!==Xe}function _(A){i.generateMipmap(A)}function v(A,S,B,st,tt=!1){if(a===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=S;if(S===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),S===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RGBA){let vt=tt?xo:ue.getTransfer(st);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=vt===ye?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function E(A,S,B){return y(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Ee&&A.minFilter!==Xe?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){return A===Ee||A===oh||A===Pa?i.NEAREST:i.LINEAR}function T(A){let S=A.target;S.removeEventListener("dispose",T),M(S),S.isVideoTexture&&h.delete(S)}function I(A){let S=A.target;S.removeEventListener("dispose",I),N(S)}function M(A){let S=n.get(A);if(S.__webglInit===void 0)return;let B=A.source,st=f.get(B);if(st){let tt=st[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(A),Object.keys(st).length===0&&f.delete(B)}n.remove(A)}function w(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let B=A.source,st=f.get(B);delete st[S.__cacheKey],o.memory.textures--}function N(A){let S=A.texture,B=n.get(A),st=n.get(S);if(st.__webglTexture!==void 0&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(B.__webglFramebuffer[tt]))for(let K=0;K<B.__webglFramebuffer[tt].length;K++)i.deleteFramebuffer(B.__webglFramebuffer[tt][K]);else i.deleteFramebuffer(B.__webglFramebuffer[tt]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[tt])}else{if(Array.isArray(B.__webglFramebuffer))for(let tt=0;tt<B.__webglFramebuffer.length;tt++)i.deleteFramebuffer(B.__webglFramebuffer[tt]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let tt=0;tt<B.__webglColorRenderbuffer.length;tt++)B.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[tt]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let tt=0,K=S.length;tt<K;tt++){let vt=n.get(S[tt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(S[tt])}n.remove(S),n.remove(A)}let G=0;function W(){G=0}function D(){let A=G;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),G+=1,A}function F(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function z(A,S){let B=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let st=A.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(B,A,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function J(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){pt(B,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function Z(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){pt(B,A,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function X(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Mt(B,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let nt={[lr]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},it={[Ee]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[cp]:i.LINEAR_MIPMAP_NEAREST,[cr]:i.LINEAR_MIPMAP_LINEAR},dt={[Mp]:i.NEVER,[Ap]:i.ALWAYS,[bp]:i.LESS,[Vu]:i.LEQUAL,[Sp]:i.EQUAL,[Tp]:i.GEQUAL,[Ep]:i.GREATER,[wp]:i.NOTEQUAL};function q(A,S,B){if(B?(i.texParameteri(A,i.TEXTURE_WRAP_S,nt[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Ln||S.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,b(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==Ee&&S.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let st=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ee||S.minFilter!==Pa&&S.minFilter!==cr||S.type===pi&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===hr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Q(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));let st=S.source,tt=f.get(st);tt===void 0&&(tt={},f.set(st,tt));let K=F(S);if(K!==A.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[K].usedTimes++;let vt=tt[A.__cacheKey];vt!==void 0&&(tt[A.__cacheKey].usedTimes--,vt.usedTimes===0&&w(S)),A.__cacheKey=K,A.__webglTexture=tt[K].texture}return B}function pt(A,S,B){let st=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=i.TEXTURE_3D);let tt=Q(A,S),K=S.source;e.bindTexture(st,A.__webglTexture,i.TEXTURE0+B);let vt=n.get(K);if(K.version!==vt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);let ht=ue.getPrimaries(ue.workingColorSpace),_t=S.colorSpace===bn?null:ue.getPrimaries(S.colorSpace),Pt=S.colorSpace===bn||ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Gt=p(S)&&m(S.image)===!1,et=x(S.image,Gt,!1,s.maxTextureSize);et=mt(S,et);let oe=m(et)||a,te=r.convert(S.format,S.colorSpace),kt=r.convert(S.type),Rt=v(S.internalFormat,te,kt,S.colorSpace,S.isVideoTexture);q(st,S,oe);let yt,qt=S.mipmaps,ce=a&&S.isVideoTexture!==!0&&Rt!==Hu,Re=vt.__version===void 0||tt===!0,Zt=E(S,et,oe);if(S.isDepthTexture)Rt=i.DEPTH_COMPONENT,a?S.type===pi?Rt=i.DEPTH_COMPONENT32F:S.type===di?Rt=i.DEPTH_COMPONENT24:S.type===Oi?Rt=i.DEPTH24_STENCIL8:Rt=i.DEPTH_COMPONENT16:S.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Fi&&Rt===i.DEPTH_COMPONENT&&S.type!==nc&&S.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=di,kt=r.convert(S.type)),S.format===Es&&Rt===i.DEPTH_COMPONENT&&(Rt=i.DEPTH_STENCIL,S.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Oi,kt=r.convert(S.type))),Re&&(ce?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,te,kt,null));else if(S.isDataTexture)if(qt.length>0&&oe){ce&&Re&&e.texStorage2D(i.TEXTURE_2D,Zt,Rt,qt[0].width,qt[0].height);for(let lt=0,U=qt.length;lt<U;lt++)yt=qt[lt],ce?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,te,kt,yt.data):e.texImage2D(i.TEXTURE_2D,lt,Rt,yt.width,yt.height,0,te,kt,yt.data);S.generateMipmaps=!1}else ce?(Re&&e.texStorage2D(i.TEXTURE_2D,Zt,Rt,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,te,kt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,te,kt,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ce&&Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Rt,qt[0].width,qt[0].height,et.depth);for(let lt=0,U=qt.length;lt<U;lt++)yt=qt[lt],S.format!==Dn?te!==null?ce?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,et.depth,te,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Rt,yt.width,yt.height,et.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,et.depth,te,kt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Rt,yt.width,yt.height,et.depth,0,te,kt,yt.data)}else{ce&&Re&&e.texStorage2D(i.TEXTURE_2D,Zt,Rt,qt[0].width,qt[0].height);for(let lt=0,U=qt.length;lt<U;lt++)yt=qt[lt],S.format!==Dn?te!==null?ce?e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,te,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Rt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,te,kt,yt.data):e.texImage2D(i.TEXTURE_2D,lt,Rt,yt.width,yt.height,0,te,kt,yt.data)}else if(S.isDataArrayTexture)ce?(Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Rt,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,te,kt,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,te,kt,et.data);else if(S.isData3DTexture)ce?(Re&&e.texStorage3D(i.TEXTURE_3D,Zt,Rt,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,te,kt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,te,kt,et.data);else if(S.isFramebufferTexture){if(Re)if(ce)e.texStorage2D(i.TEXTURE_2D,Zt,Rt,et.width,et.height);else{let lt=et.width,U=et.height;for(let ut=0;ut<Zt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Rt,lt,U,0,te,kt,null),lt>>=1,U>>=1}}else if(qt.length>0&&oe){ce&&Re&&e.texStorage2D(i.TEXTURE_2D,Zt,Rt,qt[0].width,qt[0].height);for(let lt=0,U=qt.length;lt<U;lt++)yt=qt[lt],ce?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,te,kt,yt):e.texImage2D(i.TEXTURE_2D,lt,Rt,te,kt,yt);S.generateMipmaps=!1}else ce?(Re&&e.texStorage2D(i.TEXTURE_2D,Zt,Rt,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,te,kt,et)):e.texImage2D(i.TEXTURE_2D,0,Rt,te,kt,et);y(S,oe)&&_(st),vt.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Mt(A,S,B){if(S.image.length!==6)return;let st=Q(A,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let K=n.get(tt);if(tt.version!==K.__version||st===!0){e.activeTexture(i.TEXTURE0+B);let vt=ue.getPrimaries(ue.workingColorSpace),ht=S.colorSpace===bn?null:ue.getPrimaries(S.colorSpace),_t=S.colorSpace===bn||vt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Pt=S.isCompressedTexture||S.image[0].isCompressedTexture,Gt=S.image[0]&&S.image[0].isDataTexture,et=[];for(let lt=0;lt<6;lt++)!Pt&&!Gt?et[lt]=x(S.image[lt],!1,!0,s.maxCubemapSize):et[lt]=Gt?S.image[lt].image:S.image[lt],et[lt]=mt(S,et[lt]);let oe=et[0],te=m(oe)||a,kt=r.convert(S.format,S.colorSpace),Rt=r.convert(S.type),yt=v(S.internalFormat,kt,Rt,S.colorSpace),qt=a&&S.isVideoTexture!==!0,ce=K.__version===void 0||st===!0,Re=E(S,oe,te);q(i.TEXTURE_CUBE_MAP,S,te);let Zt;if(Pt){qt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Re,yt,oe.width,oe.height);for(let lt=0;lt<6;lt++){Zt=et[lt].mipmaps;for(let U=0;U<Zt.length;U++){let ut=Zt[U];S.format!==Dn?kt!==null?qt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U,0,0,ut.width,ut.height,kt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U,yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U,0,0,ut.width,ut.height,kt,Rt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U,yt,ut.width,ut.height,0,kt,Rt,ut.data)}}}else{Zt=S.mipmaps,qt&&ce&&(Zt.length>0&&Re++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Re,yt,et[0].width,et[0].height));for(let lt=0;lt<6;lt++)if(Gt){qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,et[lt].width,et[lt].height,kt,Rt,et[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,yt,et[lt].width,et[lt].height,0,kt,Rt,et[lt].data);for(let U=0;U<Zt.length;U++){let ft=Zt[U].image[lt].image;qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U+1,0,0,ft.width,ft.height,kt,Rt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U+1,yt,ft.width,ft.height,0,kt,Rt,ft.data)}}else{qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,kt,Rt,et[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,yt,kt,Rt,et[lt]);for(let U=0;U<Zt.length;U++){let ut=Zt[U];qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U+1,0,0,kt,Rt,ut.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U+1,yt,kt,Rt,ut.image[lt])}}}y(S,te)&&_(i.TEXTURE_CUBE_MAP),K.__version=tt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xt(A,S,B,st,tt,K){let vt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),_t=v(B.internalFormat,vt,ht,B.colorSpace);if(!n.get(S).__hasExternalTextures){let Gt=Math.max(1,S.width>>K),et=Math.max(1,S.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,_t,Gt,et,S.depth,0,vt,ht,null):e.texImage2D(tt,K,_t,Gt,et,0,vt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Y(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,n.get(B).__webglTexture,0,ot(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,n.get(B).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let st=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||Y(S)){let tt=S.depthTexture;tt&&tt.isDepthTexture&&(tt.type===pi?st=i.DEPTH_COMPONENT32F:tt.type===di&&(st=i.DEPTH_COMPONENT24));let K=ot(S);Y(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,st,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,st,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,st,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let st=ot(S);B&&Y(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,S.width,S.height):Y(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let st=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let tt=0;tt<st.length;tt++){let K=st[tt],vt=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),_t=v(K.internalFormat,vt,ht,K.colorSpace),Pt=ot(S);B&&Y(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,_t,S.width,S.height):Y(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,_t,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_t,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);let st=n.get(S.depthTexture).__webglTexture,tt=ot(S);if(S.depthTexture.format===Fi)Y(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(S.depthTexture.format===Es)Y(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function bt(A){let S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");zt(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]=i.createRenderbuffer(),Ut(S.__webglDepthbuffer[st],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ut(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(A,S,B){let st=n.get(A);S!==void 0&&xt(st.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&bt(A)}function L(A){let S=A.texture,B=n.get(A),st=n.get(S);A.addEventListener("dispose",I),A.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=S.version,o.memory.textures++);let tt=A.isWebGLCubeRenderTarget===!0,K=A.isWebGLMultipleRenderTargets===!0,vt=m(A)||a;if(tt){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let _t=0;_t<S.mipmaps.length;_t++)B.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(K)if(s.drawBuffers){let ht=A.texture;for(let _t=0,Pt=ht.length;_t<Pt;_t++){let Gt=n.get(ht[_t]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Y(A)===!1){let ht=K?S:[S];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){let Pt=ht[_t];B.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[_t]);let Gt=r.convert(Pt.format,Pt.colorSpace),et=r.convert(Pt.type),oe=v(Pt.internalFormat,Gt,et,Pt.colorSpace,A.isXRRenderTarget===!0),te=ot(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,oe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,B.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),q(i.TEXTURE_CUBE_MAP,S,vt);for(let ht=0;ht<6;ht++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)xt(B.__webglFramebuffer[ht][_t],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else xt(B.__webglFramebuffer[ht],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);y(S,vt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){let ht=A.texture;for(let _t=0,Pt=ht.length;_t<Pt;_t++){let Gt=ht[_t],et=n.get(Gt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),q(i.TEXTURE_2D,Gt,vt),xt(B.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),y(Gt,vt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ht=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,st.__webglTexture),q(ht,S,vt),a&&S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)xt(B.__webglFramebuffer[_t],A,S,i.COLOR_ATTACHMENT0,ht,_t);else xt(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ht,0);y(S,vt)&&_(ht),e.unbindTexture()}A.depthBuffer&&bt(A)}function at(A){let S=m(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let st=0,tt=B.length;st<tt;st++){let K=B[st];if(y(K,S)){let vt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ht=n.get(K).__webglTexture;e.bindTexture(vt,ht),_(vt),e.unbindTexture()}}}function $(A){if(a&&A.samples>0&&Y(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,st=A.height,tt=i.COLOR_BUFFER_BIT,K=[],vt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(A),_t=A.isWebGLMultipleRenderTargets===!0;if(_t)for(let Pt=0;Pt<S.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Pt=0;Pt<S.length;Pt++){K.push(i.COLOR_ATTACHMENT0+Pt),A.depthBuffer&&K.push(vt);let Gt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Gt===!1&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),_t&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Pt]),Gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[vt])),_t){let et=n.get(S[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,B,st,0,0,B,st,tt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Pt=0;Pt<S.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Pt]);let Gt=n.get(S[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function ot(A){return Math.min(s.maxSamples,A.samples)}function Y(A){let S=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function mt(A,S){let B=A.colorSpace,st=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===xl||B!==ii&&B!==bn&&(ue.getTransfer(B)===ye?a===!1?t.has("EXT_sRGB")===!0&&st===Dn?(A.format=xl,A.minFilter=Xe,A.generateMipmaps=!1):S=bo.sRGBToLinear(S):(st!==Dn||tt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=D,this.resetTextureUnits=W,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=Bt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Y}function x_(i,t,e){let n=e.isWebGL2;function s(r,o=bn){let a,l=ue.getTransfer(o);if(r===gi)return i.UNSIGNED_BYTE;if(r===Nu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ou)return i.UNSIGNED_SHORT_5_5_5_1;if(r===hp)return i.BYTE;if(r===up)return i.SHORT;if(r===nc)return i.UNSIGNED_SHORT;if(r===Uu)return i.INT;if(r===di)return i.UNSIGNED_INT;if(r===pi)return i.FLOAT;if(r===hr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===fp)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===dp)return i.LUMINANCE;if(r===pp)return i.LUMINANCE_ALPHA;if(r===Fi)return i.DEPTH_COMPONENT;if(r===Es)return i.DEPTH_STENCIL;if(r===xl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===mp)return i.RED;if(r===Fu)return i.RED_INTEGER;if(r===gp)return i.RG;if(r===Bu)return i.RG_INTEGER;if(r===ku)return i.RGBA_INTEGER;if(r===Ia||r===La||r===Da||r===Ua)if(l===ye)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===lh||r===ch||r===hh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ah)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ch)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===uh||r===fh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===uh)return l===ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dh||r===ph||r===mh||r===gh||r===xh||r===_h||r===yh||r===vh||r===Mh||r===bh||r===Sh||r===Eh||r===wh||r===Th)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===dh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ph)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Th)return l===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Na||r===Ah||r===Rh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Na)return l===ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ah)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xp||r===Ch||r===Ph||r===Ih)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Na)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ch)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ph)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ih)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ll=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},__={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(__)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Dl=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],_=[],v=new j,E=null,b=new Pe;b.layers.enable(1),b.viewport=new be;let T=new Pe;T.layers.enable(2),T.viewport=new be;let I=[b,T],M=new Ll;M.layers.enable(1),M.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new rr,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new rr,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new rr,y[q]=Q),Q.getHandSpace()};function G(q){let Q=_.indexOf(q.inputSource);if(Q===-1)return;let pt=y[Q];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",D);for(let q=0;q<y.length;q++){let Q=_[q];Q!==null&&(_[q]=null,y[q].disconnect(Q))}w=null,N=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",W),s.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Un(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,pt=null,Mt=null;x.depth&&(Mt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=x.stencil?Es:Fi,pt=x.stencil?Oi:di);let xt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Un(f.textureWidth,f.textureHeight,{format:Dn,type:gi,depthTexture:new Po(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ut=t.properties.get(p);Ut.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(q){for(let Q=0;Q<q.removed.length;Q++){let pt=q.removed[Q],Mt=_.indexOf(pt);Mt>=0&&(_[Mt]=null,y[Mt].disconnect(pt))}for(let Q=0;Q<q.added.length;Q++){let pt=q.added[Q],Mt=_.indexOf(pt);if(Mt===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=_.length){_.push(pt),Mt=Ut;break}else if(_[Ut]===null){_[Ut]=pt,Mt=Ut;break}if(Mt===-1)break}let xt=y[Mt];xt&&xt.connect(pt)}}let F=new C,z=new C;function J(q,Q,pt){F.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(pt.matrixWorld);let Mt=F.distanceTo(z),xt=Q.projectionMatrix.elements,Ut=pt.projectionMatrix.elements,zt=xt[14]/(xt[10]-1),bt=xt[14]/(xt[10]+1),Bt=(xt[9]+1)/xt[5],L=(xt[9]-1)/xt[5],at=(xt[8]-1)/xt[0],$=(Ut[8]+1)/Ut[0],ot=zt*at,Y=zt*$,Tt=Mt/(-at+$),mt=Tt*-at;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(mt),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let A=zt+Tt,S=bt+Tt,B=ot-mt,st=Y+(Mt-mt),tt=Bt*bt/S*A,K=L*bt/S*A;q.projectionMatrix.makePerspective(B,st,tt,K,A,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Z(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=T.near=b.near=q.near,M.far=T.far=b.far=q.far,(w!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,N=M.far);let Q=q.parent,pt=M.cameras;Z(M,Q);for(let Mt=0;Mt<pt.length;Mt++)Z(pt[Mt],Q);pt.length===2?J(M,b,T):M.projectionMatrix.copy(b.projectionMatrix),X(q,M,Q)};function X(q,Q,pt){pt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=_l*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)};let nt=null;function it(q,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Mt=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,Mt=!0);for(let xt=0;xt<pt.length;xt++){let Ut=pt[xt],zt=null;if(d!==null)zt=d.getViewport(Ut);else{let Bt=u.getViewSubImage(f,Ut);zt=Bt.viewport,xt===0&&(t.setRenderTargetTextures(p,Bt.colorTexture,f.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(p))}let bt=I[xt];bt===void 0&&(bt=new Pe,bt.layers.enable(xt),bt.viewport=new be,I[xt]=bt),bt.matrix.fromArray(Ut.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Ut.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(zt.x,zt.y,zt.width,zt.height),xt===0&&(M.matrix.copy(bt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Mt===!0&&M.cameras.push(bt)}}for(let pt=0;pt<y.length;pt++){let Mt=_[pt],xt=y[pt];Mt!==null&&xt!==void 0&&xt.update(Mt,Q,c||o)}nt&&nt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let dt=new Xu;dt.setAnimationLoop(it),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}};function y_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v_(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let E=_.program;n.updateUBOMapping(y,E);let b=t.render.frame;r[y.id]!==b&&(f(y),r[y.id]=b)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),E=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,T=v.length;b<T;b++){let I=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,w=I.length;M<w;M++){let N=I[M];if(d(N,b,M,E)===!0){let G=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],D=0;for(let F=0;F<W.length;F++){let z=W[F],J=x(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,G+D,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,D),D+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,E){let b=y.value,T=_+"_"+v;if(E[T]===void 0)return typeof b=="number"||typeof b=="boolean"?E[T]=b:E[T]=b.clone(),!0;{let I=E[T];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return E[T]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(y){let _=y.uniforms,v=0,E=16;for(let T=0,I=_.length;T<I;T++){let M=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,N=M.length;w<N;w++){let G=M[w],W=Array.isArray(G.value)?G.value:[G.value];for(let D=0,F=W.length;D<F;D++){let z=W[D],J=x(z),Z=v%E;Z!==0&&E-Z<J.boundary&&(v+=E-Z),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=J.storage}}}let b=v%E;return b>0&&(v+=E-b),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var pr=class{constructor(t={}){let{canvas:e=Cp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1;let _=this,v=!1,E=0,b=0,T=null,I=-1,M=null,w=new be,N=new be,G=null,W=new wt(0),D=0,F=e.width,z=e.height,J=1,Z=null,X=null,nt=new be(0,0,F,z),it=new be(0,0,F,z),dt=!1,q=new dr,Q=!1,pt=!1,Mt=null,xt=new ve,Ut=new j,zt=new C,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Bt(){return T===null?J:1}let L=n;function at(R,O){for(let H=0;H<R.length;H++){let V=R[H],k=e.getContext(V,O);if(k!==null)return k}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ec}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ut,!1),L===null){let O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),L=at(O,R),L===null)throw at(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $,ot,Y,Tt,mt,A,S,B,st,tt,K,vt,ht,_t,Pt,Gt,et,oe,te,kt,Rt,yt,qt,ce;function Re(){$=new kg(L),ot=new Dg(L,$,t),$.init(ot),yt=new x_(L,$,ot),Y=new m_(L,$,ot),Tt=new Vg(L),mt=new i_,A=new g_(L,$,Y,mt,ot,yt,Tt),S=new Ng(_),B=new Bg(_),st=new Jp(L,ot),qt=new Ig(L,$,st,ot),tt=new Hg(L,st,Tt,qt),K=new Xg(L,tt,st,Tt),te=new qg(L,ot,A),Gt=new Ug(mt),vt=new n_(_,S,B,$,ot,qt,Gt),ht=new y_(_,mt),_t=new r_,Pt=new u_($,ot),oe=new Pg(_,S,B,Y,K,f,l),et=new p_(_,K,ot),ce=new v_(L,Tt,ot,Y),kt=new Lg(L,$,Tt,ot),Rt=new zg(L,$,Tt,ot),Tt.programs=vt.programs,_.capabilities=ot,_.extensions=$,_.properties=mt,_.renderLists=_t,_.shadowMap=et,_.state=Y,_.info=Tt}Re();let Zt=new Dl(_,L);this.xr=Zt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let R=$.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=$.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(F,z,!1))},this.getSize=function(R){return R.set(F,z)},this.setSize=function(R,O,H=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,z=O,e.width=Math.floor(R*J),e.height=Math.floor(O*J),H===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(F*J,z*J).floor()},this.setDrawingBufferSize=function(R,O,H){F=R,z=O,J=H,e.width=Math.floor(R*H),e.height=Math.floor(O*H),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,O,H,V){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,O,H,V),Y.viewport(w.copy(nt).multiplyScalar(J).floor())},this.getScissor=function(R){return R.copy(it)},this.setScissor=function(R,O,H,V){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,O,H,V),Y.scissor(N.copy(it).multiplyScalar(J).floor())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){Y.setScissorTest(dt=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(R=!0,O=!0,H=!0){let V=0;if(R){let k=!1;if(T!==null){let gt=T.texture.format;k=gt===ku||gt===Bu||gt===Fu}if(k){let gt=T.texture.type,Et=gt===gi||gt===di||gt===nc||gt===Oi||gt===Nu||gt===Ou,Lt=oe.getClearColor(),Ot=oe.getClearAlpha(),Yt=Lt.r,Vt=Lt.g,Wt=Lt.b;Et?(d[0]=Yt,d[1]=Vt,d[2]=Wt,d[3]=Ot,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=Yt,g[1]=Vt,g[2]=Wt,g[3]=Ot,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),Pt.dispose(),mt.dispose(),S.dispose(),B.dispose(),K.dispose(),qt.dispose(),ce.dispose(),vt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",sn),Zt.removeEventListener("sessionend",xe),Mt&&(Mt.dispose(),Mt=null),rn.stop()};function lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let R=Tt.autoReset,O=et.enabled,H=et.autoUpdate,V=et.needsUpdate,k=et.type;Re(),Tt.autoReset=R,et.enabled=O,et.autoUpdate=H,et.needsUpdate=V,et.type=k}function ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ft(R){let O=R.target;O.removeEventListener("dispose",ft),Nt(O)}function Nt(R){It(R),mt.remove(R)}function It(R){let O=mt.get(R).programs;O!==void 0&&(O.forEach(function(H){vt.releaseProgram(H)}),R.isShaderMaterial&&vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,H,V,k,gt){O===null&&(O=bt);let Et=k.isMesh&&k.matrixWorld.determinant()<0,Lt=Td(R,O,H,V,k);Y.setMaterial(V,Et);let Ot=H.index,Yt=1;if(V.wireframe===!0){if(Ot=tt.getWireframeAttribute(H),Ot===void 0)return;Yt=2}let Vt=H.drawRange,Wt=H.attributes.position,Ie=Vt.start*Yt,dn=(Vt.start+Vt.count)*Yt;gt!==null&&(Ie=Math.max(Ie,gt.start*Yt),dn=Math.min(dn,(gt.start+gt.count)*Yt)),Ot!==null?(Ie=Math.max(Ie,0),dn=Math.min(dn,Ot.count)):Wt!=null&&(Ie=Math.max(Ie,0),dn=Math.min(dn,Wt.count));let Ve=dn-Ie;if(Ve<0||Ve===1/0)return;qt.setup(k,V,Lt,H,Ot);let $n,Se=kt;if(Ot!==null&&($n=st.get(Ot),Se=Rt,Se.setIndex($n)),k.isMesh)V.wireframe===!0?(Y.setLineWidth(V.wireframeLinewidth*Bt()),Se.setMode(L.LINES)):Se.setMode(L.TRIANGLES);else if(k.isLine){let Jt=V.linewidth;Jt===void 0&&(Jt=1),Y.setLineWidth(Jt*Bt()),k.isLineSegments?Se.setMode(L.LINES):k.isLineLoop?Se.setMode(L.LINE_LOOP):Se.setMode(L.LINE_STRIP)}else k.isPoints?Se.setMode(L.POINTS):k.isSprite&&Se.setMode(L.TRIANGLES);if(k.isBatchedMesh)Se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Se.renderInstances(Ie,Ve,k.count);else if(H.isInstancedBufferGeometry){let Jt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ta=Math.min(H.instanceCount,Jt);Se.renderInstances(Ie,Ve,Ta)}else Se.render(Ie,Ve)};function me(R,O,H){R.transparent===!0&&R.side===We&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,Br(R,O,H),R.side=xi,R.needsUpdate=!0,Br(R,O,H),R.side=We):Br(R,O,H)}this.compile=function(R,O,H=null){H===null&&(H=R),m=Pt.get(H),m.init(),y.push(m),H.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),R!==H&&R.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(_._useLegacyLights);let V=new Set;return R.traverse(function(k){let gt=k.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){let Lt=gt[Et];me(Lt,H,k),V.add(Lt)}else me(gt,H,k),V.add(gt)}),y.pop(),m=null,V},this.compileAsync=function(R,O,H=null){let V=this.compile(R,O,H);return new Promise(k=>{function gt(){if(V.forEach(function(Et){mt.get(Et).currentProgram.isReady()&&V.delete(Et)}),V.size===0){k(R);return}setTimeout(gt,10)}$.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ge=null;function ze(R){ge&&ge(R)}function sn(){rn.stop()}function xe(){rn.start()}let rn=new Xu;rn.setAnimationLoop(ze),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(R){ge=R,Zt.setAnimationLoop(R),R===null?rn.stop():rn.start()},Zt.addEventListener("sessionstart",sn),Zt.addEventListener("sessionend",xe),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(O),O=Zt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,O,T),m=Pt.get(R,y.length),m.init(),y.push(m),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(xt),pt=this.localClippingEnabled,Q=Gt.init(this.clippingPlanes,pt),x=_t.get(R,p.length),x.init(),p.push(x),Hn(R,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Z,X),this.info.render.frame++,Q===!0&&Gt.beginShadows();let H=m.state.shadowsArray;if(et.render(H,R,O),Q===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(x,R),m.setupLights(_._useLegacyLights),O.isArrayCamera){let V=O.cameras;for(let k=0,gt=V.length;k<gt;k++){let Et=V[k];Zc(x,R,Et,Et.viewport)}}else Zc(x,R,O);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(_,R,O),qt.resetDefaultState(),I=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Hn(R,O,H,V){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)H=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){V&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xt);let Et=K.update(R),Lt=R.material;Lt.visible&&x.push(R,Et,Lt,H,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){let Et=K.update(R),Lt=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),zt.copy(Et.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(xt)),Array.isArray(Lt)){let Ot=Et.groups;for(let Yt=0,Vt=Ot.length;Yt<Vt;Yt++){let Wt=Ot[Yt],Ie=Lt[Wt.materialIndex];Ie&&Ie.visible&&x.push(R,Et,Ie,H,zt.z,Wt)}}else Lt.visible&&x.push(R,Et,Lt,H,zt.z,null)}}let gt=R.children;for(let Et=0,Lt=gt.length;Et<Lt;Et++)Hn(gt[Et],O,H,V)}function Zc(R,O,H,V){let k=R.opaque,gt=R.transmissive,Et=R.transparent;m.setupLightsView(H),Q===!0&&Gt.setGlobalState(_.clippingPlanes,H),gt.length>0&&wd(k,gt,O,H),V&&Y.viewport(w.copy(V)),k.length>0&&Fr(k,O,H),gt.length>0&&Fr(gt,O,H),Et.length>0&&Fr(Et,O,H),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function wd(R,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let gt=ot.isWebGL2;Mt===null&&(Mt=new Un(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?hr:gi,minFilter:cr,samples:gt?4:0})),_.getDrawingBufferSize(Ut),gt?Mt.setSize(Ut.x,Ut.y):Mt.setSize(yl(Ut.x),yl(Ut.y));let Et=_.getRenderTarget();_.setRenderTarget(Mt),_.getClearColor(W),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();let Lt=_.toneMapping;_.toneMapping=Vn,Fr(R,H,V),A.updateMultisampleRenderTarget(Mt),A.updateRenderTargetMipmap(Mt);let Ot=!1;for(let Yt=0,Vt=O.length;Yt<Vt;Yt++){let Wt=O[Yt],Ie=Wt.object,dn=Wt.geometry,Ve=Wt.material,$n=Wt.group;if(Ve.side===We&&Ie.layers.test(V.layers)){let Se=Ve.side;Ve.side=hn,Ve.needsUpdate=!0,Jc(Ie,H,V,dn,Ve,$n),Ve.side=Se,Ve.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(Mt),A.updateRenderTargetMipmap(Mt)),_.setRenderTarget(Et),_.setClearColor(W,D),_.toneMapping=Lt}function Fr(R,O,H){let V=O.isScene===!0?O.overrideMaterial:null;for(let k=0,gt=R.length;k<gt;k++){let Et=R[k],Lt=Et.object,Ot=Et.geometry,Yt=V===null?Et.material:V,Vt=Et.group;Lt.layers.test(H.layers)&&Jc(Lt,O,H,Ot,Yt,Vt)}}function Jc(R,O,H,V,k,gt){R.onBeforeRender(_,O,H,V,k,gt),R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(_,O,H,V,R,gt),k.transparent===!0&&k.side===We&&k.forceSinglePass===!1?(k.side=hn,k.needsUpdate=!0,_.renderBufferDirect(H,O,V,k,R,gt),k.side=xi,k.needsUpdate=!0,_.renderBufferDirect(H,O,V,k,R,gt),k.side=We):_.renderBufferDirect(H,O,V,k,R,gt),R.onAfterRender(_,O,H,V,k,gt)}function Br(R,O,H){O.isScene!==!0&&(O=bt);let V=mt.get(R),k=m.state.lights,gt=m.state.shadowsArray,Et=k.state.version,Lt=vt.getParameters(R,k.state,gt,O,H),Ot=vt.getProgramCacheKey(Lt),Yt=V.programs;V.environment=R.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(R.isMeshStandardMaterial?B:S).get(R.envMap||V.environment),Yt===void 0&&(R.addEventListener("dispose",ft),Yt=new Map,V.programs=Yt);let Vt=Yt.get(Ot);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===Et)return jc(R,Lt),Vt}else Lt.uniforms=vt.getUniforms(R),R.onBuild(H,Lt,_),R.onBeforeCompile(Lt,_),Vt=vt.acquireProgram(Lt,Ot),Yt.set(Ot,Vt),V.uniforms=Lt.uniforms;let Wt=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=Gt.uniform),jc(R,Lt),V.needsLights=Rd(R),V.lightsStateVersion=Et,V.needsLights&&(Wt.ambientLightColor.value=k.state.ambient,Wt.lightProbe.value=k.state.probe,Wt.directionalLights.value=k.state.directional,Wt.directionalLightShadows.value=k.state.directionalShadow,Wt.spotLights.value=k.state.spot,Wt.spotLightShadows.value=k.state.spotShadow,Wt.rectAreaLights.value=k.state.rectArea,Wt.ltc_1.value=k.state.rectAreaLTC1,Wt.ltc_2.value=k.state.rectAreaLTC2,Wt.pointLights.value=k.state.point,Wt.pointLightShadows.value=k.state.pointShadow,Wt.hemisphereLights.value=k.state.hemi,Wt.directionalShadowMap.value=k.state.directionalShadowMap,Wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Wt.spotShadowMap.value=k.state.spotShadowMap,Wt.spotLightMatrix.value=k.state.spotLightMatrix,Wt.spotLightMap.value=k.state.spotLightMap,Wt.pointShadowMap.value=k.state.pointShadowMap,Wt.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function Kc(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=Ms.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function jc(R,O){let H=mt.get(R);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Td(R,O,H,V,k){O.isScene!==!0&&(O=bt),A.resetTextureUnits();let gt=O.fog,Et=V.isMeshStandardMaterial?O.environment:null,Lt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ii,Ot=(V.isMeshStandardMaterial?B:S).get(V.envMap||Et),Yt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Vt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Wt=!!H.morphAttributes.position,Ie=!!H.morphAttributes.normal,dn=!!H.morphAttributes.color,Ve=Vn;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ve=_.toneMapping);let $n=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Se=$n!==void 0?$n.length:0,Jt=mt.get(V),Ta=m.state.lights;if(Q===!0&&(pt===!0||R!==M)){let vn=R===M&&V.id===I;Gt.setState(V,R,vn)}let Ce=!1;V.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ta.state.version||Jt.outputColorSpace!==Lt||k.isBatchedMesh&&Jt.batching===!1||!k.isBatchedMesh&&Jt.batching===!0||k.isInstancedMesh&&Jt.instancing===!1||!k.isInstancedMesh&&Jt.instancing===!0||k.isSkinnedMesh&&Jt.skinning===!1||!k.isSkinnedMesh&&Jt.skinning===!0||k.isInstancedMesh&&Jt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Jt.instancingColor===!1&&k.instanceColor!==null||Jt.envMap!==Ot||V.fog===!0&&Jt.fog!==gt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Gt.numPlanes||Jt.numIntersection!==Gt.numIntersection)||Jt.vertexAlphas!==Yt||Jt.vertexTangents!==Vt||Jt.morphTargets!==Wt||Jt.morphNormals!==Ie||Jt.morphColors!==dn||Jt.toneMapping!==Ve||ot.isWebGL2===!0&&Jt.morphTargetsCount!==Se)&&(Ce=!0):(Ce=!0,Jt.__version=V.version);let Ai=Jt.currentProgram;Ce===!0&&(Ai=Br(V,O,k));let Qc=!1,Ks=!1,Aa=!1,Ke=Ai.getUniforms(),Ri=Jt.uniforms;if(Y.useProgram(Ai.program)&&(Qc=!0,Ks=!0,Aa=!0),V.id!==I&&(I=V.id,Ks=!0),Qc||M!==R){Ke.setValue(L,"projectionMatrix",R.projectionMatrix),Ke.setValue(L,"viewMatrix",R.matrixWorldInverse);let vn=Ke.map.cameraPosition;vn!==void 0&&vn.setValue(L,zt.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&Ke.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ke.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Ks=!0,Aa=!0)}if(k.isSkinnedMesh){Ke.setOptional(L,k,"bindMatrix"),Ke.setOptional(L,k,"bindMatrixInverse");let vn=k.skeleton;vn&&(ot.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Ke.setValue(L,"boneTexture",vn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ke.setOptional(L,k,"batchingTexture"),Ke.setValue(L,"batchingTexture",k._matricesTexture,A));let Ra=H.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0&&ot.isWebGL2===!0)&&te.update(k,H,Ai),(Ks||Jt.receiveShadow!==k.receiveShadow)&&(Jt.receiveShadow=k.receiveShadow,Ke.setValue(L,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ri.envMap.value=Ot,Ri.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Ks&&(Ke.setValue(L,"toneMappingExposure",_.toneMappingExposure),Jt.needsLights&&Ad(Ri,Aa),gt&&V.fog===!0&&ht.refreshFogUniforms(Ri,gt),ht.refreshMaterialUniforms(Ri,V,J,z,Mt),Ms.upload(L,Kc(Jt),Ri,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ms.upload(L,Kc(Jt),Ri,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ke.setValue(L,"center",k.center),Ke.setValue(L,"modelViewMatrix",k.modelViewMatrix),Ke.setValue(L,"normalMatrix",k.normalMatrix),Ke.setValue(L,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let vn=V.uniformsGroups;for(let Ca=0,Cd=vn.length;Ca<Cd;Ca++)if(ot.isWebGL2){let th=vn[Ca];ce.update(th,Ai),ce.bind(th,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function Ad(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Rd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,O,H){mt.get(R.texture).__webglTexture=O,mt.get(R.depthTexture).__webglTexture=H;let V=mt.get(R);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,O){let H=mt.get(R);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,H=0){T=R,E=O,b=H;let V=!0,k=null,gt=!1,Et=!1;if(R){let Ot=mt.get(R);Ot.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):Ot.__webglFramebuffer===void 0?A.setupRenderTarget(R):Ot.__hasExternalTextures&&A.rebindTextures(R,mt.get(R.texture).__webglTexture,mt.get(R.depthTexture).__webglTexture);let Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Et=!0);let Vt=mt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?k=Vt[O][H]:k=Vt[O],gt=!0):ot.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?k=mt.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[H]:k=Vt,w.copy(R.viewport),N.copy(R.scissor),G=R.scissorTest}else w.copy(nt).multiplyScalar(J).floor(),N.copy(it).multiplyScalar(J).floor(),G=dt;if(Y.bindFramebuffer(L.FRAMEBUFFER,k)&&ot.drawBuffers&&V&&Y.drawBuffers(R,k),Y.viewport(w),Y.scissor(N),Y.setScissorTest(G),gt){let Ot=mt.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ot.__webglTexture,H)}else if(Et){let Ot=mt.get(R.texture),Yt=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,H||0,Yt)}I=-1},this.readRenderTargetPixels=function(R,O,H,V,k,gt,Et){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=mt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){Y.bindFramebuffer(L.FRAMEBUFFER,Lt);try{let Ot=R.texture,Yt=Ot.format,Vt=Ot.type;if(Yt!==Dn&&yt.convert(Yt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Vt===hr&&($.has("EXT_color_buffer_half_float")||ot.isWebGL2&&$.has("EXT_color_buffer_float"));if(Vt!==gi&&yt.convert(Vt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===pi&&(ot.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-V&&H>=0&&H<=R.height-k&&L.readPixels(O,H,V,k,yt.convert(Yt),yt.convert(Vt),gt)}finally{let Ot=T!==null?mt.get(T).__webglFramebuffer:null;Y.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(R,O,H=0){let V=Math.pow(2,-H),k=Math.floor(O.image.width*V),gt=Math.floor(O.image.height*V);A.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,R.x,R.y,k,gt),Y.unbindTexture()},this.copyTextureToTexture=function(R,O,H,V=0){let k=O.image.width,gt=O.image.height,Et=yt.convert(H.format),Lt=yt.convert(H.type);A.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,R.x,R.y,k,gt,Et,Lt,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,R.x,R.y,O.mipmaps[0].width,O.mipmaps[0].height,Et,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,V,R.x,R.y,Et,Lt,O.image),V===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(R,O,H,V,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=R.max.x-R.min.x+1,Et=R.max.y-R.min.y+1,Lt=R.max.z-R.min.z+1,Ot=yt.convert(V.format),Yt=yt.convert(V.type),Vt;if(V.isData3DTexture)A.setTexture3D(V,0),Vt=L.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),Vt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let Wt=L.getParameter(L.UNPACK_ROW_LENGTH),Ie=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ve=L.getParameter(L.UNPACK_SKIP_ROWS),$n=L.getParameter(L.UNPACK_SKIP_IMAGES),Se=H.isCompressedTexture?H.mipmaps[k]:H.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,R.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,R.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,R.min.z),H.isDataTexture||H.isData3DTexture?L.texSubImage3D(Vt,k,O.x,O.y,O.z,gt,Et,Lt,Ot,Yt,Se.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Vt,k,O.x,O.y,O.z,gt,Et,Lt,Ot,Se.data)):L.texSubImage3D(Vt,k,O.x,O.y,O.z,gt,Et,Lt,Ot,Yt,Se),L.pixelStorei(L.UNPACK_ROW_LENGTH,Wt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ie),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$n),k===0&&V.generateMipmaps&&L.generateMipmap(Vt),Y.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Y.unbindTexture()},this.resetState=function(){E=0,b=0,T=null,Y.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===sc?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===Xo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?Bi:zu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Bi?fe:ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ul=class extends pr{};Ul.prototype.isWebGL1Renderer=!0;var Cs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nn=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var mr=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bu=new ve,Nl=new ur,ao=new ws,lo=new C,Io=class extends tn{constructor(t=new le,e=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,t.ray.intersectsSphere(ao)===!1)return;bu.copy(s).invert(),Nl.copy(t.ray).applyMatrix4(bu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);lo.fromBufferAttribute(u,m),Su(lo,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)lo.fromBufferAttribute(u,g),Su(lo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Su(i,t,e,n,s,r,o){let a=Nl.distanceSqToPoint(i);if(a<e){let l=new C;Nl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var qn=class extends En{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new j:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,l=new ve;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ye(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new j,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ol=class extends gr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var co=new C,al=new oc,ll=new oc,cl=new oc,xr=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(co.subVectors(s[0],s[1]).add(s[0]),c=co);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=co),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),al.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),ll.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),cl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(al.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ll.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),cl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(al.calc(l),ll.calc(l),cl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Eu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function M_(i,t){let e=1-i;return e*e*t}function b_(i,t){return 2*(1-i)*i*t}function S_(i,t){return i*i*t}function or(i,t,e,n){return M_(i,t)+b_(i,e)+S_(i,n)}function E_(i,t){let e=1-i;return e*e*e*t}function w_(i,t){let e=1-i;return 3*e*e*i*t}function T_(i,t){return 3*(1-i)*i*i*t}function A_(i,t){return i*i*i*t}function ar(i,t,e,n,s){return E_(i,t)+w_(i,e)+T_(i,n)+A_(i,s)}var Lo=class extends wn{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,s.x,r.x,o.x,a.x),ar(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_r=class extends wn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,s.x,r.x,o.x,a.x),ar(t,s.y,r.y,o.y,a.y),ar(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends wn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fl=class extends wn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends wn{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(or(t,s.x,r.x,o.x),or(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends wn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(or(t,s.x,r.x,o.x),or(t,s.y,r.y,o.y),or(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Eu(a,l.x,c.x,h.x,u.x),Eu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this}},Fo=Object.freeze({__proto__:null,ArcCurve:Ol,CatmullRomCurve3:xr,CubicBezierCurve:Lo,CubicBezierCurve3:_r,EllipseCurve:gr,LineCurve:Do,LineCurve3:Fl,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:No,SplineCurve:Oo}),Bl=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Fo[s.type]().fromJSON(s))}return this}},zi=class extends Bl{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Do(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Uo(this.currentPoint.clone(),new j(t,e),new j(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Lo(this.currentPoint.clone(),new j(t,e),new j(n,s),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Oo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new gr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ps=class i extends le{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,f=new j,d=new C,g=new C,x=new C,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),E=Math.cos(_);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*v,u.y=t[b].y,u.z=t[b].x*E,o.push(u.x,u.y,u.z),f.x=y/e,f.y=b/(t.length-1),a.push(f.x,f.y);let T=l[3*b+0]*v,I=l[3*b+1],M=l[3*b+0]*E;c.push(T,I,M)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,E=v,b=v+t.length,T=v+t.length+1,I=v+1;r.push(E,b,I),r.push(T,I,b)}this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("uv",new Ct(a,2)),this.setAttribute("normal",new Ct(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var yr=class i extends le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},he=class i extends le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function y(){let v=new C,E=new C,b=0,T=(e-t)/n;for(let I=0;I<=r;I++){let M=[],w=I/r,N=w*(e-t)+t;for(let G=0;G<=s;G++){let W=G/s,D=W*l+a,F=Math.sin(D),z=Math.cos(D);E.x=N*F,E.y=-w*n+m,E.z=N*z,u.push(E.x,E.y,E.z),v.set(F,T,z).normalize(),f.push(v.x,v.y,v.z),d.push(W,1-w),M.push(g++)}x.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let w=x[M][I],N=x[M+1][I],G=x[M+1][I+1],W=x[M][I+1];h.push(w,N,W),h.push(N,G,W),b+=6}c.addGroup(p,b,0),p+=b}function _(v){let E=g,b=new j,T=new C,I=0,M=v===!0?t:e,w=v===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;let N=g;for(let G=0;G<=s;G++){let D=G/s*l+a,F=Math.cos(D),z=Math.sin(D);T.x=M*z,T.y=m*w,T.z=M*F,u.push(T.x,T.y,T.z),f.push(0,w,0),b.x=F*.5+.5,b.y=z*.5*w+.5,d.push(b.x,b.y),g++}for(let G=0;G<s;G++){let W=E+G,D=N+G;v===!0?h.push(D,D+1,W):h.push(D+1,D,W),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oi=class i extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},kl=class i extends le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new C,v=new C,E=new C;for(let b=0;b<e.length;b+=3)d(e[b+0],_),d(e[b+1],v),d(e[b+2],E),l(_,v,E,y)}function l(y,_,v,E){let b=E+1,T=[];for(let I=0;I<=b;I++){T[I]=[];let M=y.clone().lerp(v,I/b),w=_.clone().lerp(v,I/b),N=b-I;for(let G=0;G<=N;G++)G===0&&I===b?T[I][G]=M:T[I][G]=M.clone().lerp(w,G/N)}for(let I=0;I<b;I++)for(let M=0;M<2*(b-I)-1;M++){let w=Math.floor(M/2);M%2===0?(f(T[I][w+1]),f(T[I+1][w]),f(T[I][w])):(f(T[I][w+1]),f(T[I+1][w+1]),f(T[I+1][w]))}}function c(y){let _=new C;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let y=new C;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let v=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;o.push(v,1-E)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],v=o[y+2],E=o[y+4],b=Math.max(_,v,E),T=Math.min(_,v,E);b>.9&&T<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){let y=new C,_=new C,v=new C,E=new C,b=new j,T=new j,I=new j;for(let M=0,w=0;M<r.length;M+=9,w+=6){y.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),b.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),E.copy(y).add(_).add(v).divideScalar(3);let N=m(E);x(b,w+0,y,N),x(T,w+2,_,N),x(I,w+4,v,N)}}function x(y,_,v,E){E<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var $e=class extends zi{constructor(t){super(t),this.uuid=Us(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new zi().fromJSON(s))}return this}},R_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ju(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=D_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return vr(r,o,e,a,l,d,0),o}};function ju(i,t,e,n,s){let r,o;if(s===W_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=wu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=wu(r,i[r],i[r+1],o);return o&&$o(o,o.next)&&(br(o),o=o.next),o}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($o(e,e.next)||we(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&B_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?P_(i,n,s,r):C_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),br(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=I_(Vi(i),t,e),vr(i,t,e,n,s,r,2)):o===2&&L_(i,t,e,n,s,r):vr(Vi(i),t,e,n,s,r,1);break}}}function C_(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&_s(s,a,r,l,o,c,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Hl(d,g,t,e,n),y=Hl(x,m,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&_s(a,h,l,u,c,f,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&_s(a,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&_s(a,h,l,u,c,f,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&_s(a,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function I_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!$o(s,r)&&Qu(s,n,n.next,r)&&Mr(s,r)&&Mr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),br(n),br(n.next),n=i=r),n=n.next}while(n!==i);return Vi(n)}function L_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&z_(o,a)){let l=tf(o,a);o=Vi(o,o.next),l=Vi(l,l.next),vr(o,t,e,n,s,r,0),vr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function D_(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ju(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(H_(c));for(s.sort(U_),r=0;r<s.length;r++)e=N_(s[r],e);return e}function U_(i,t){return i.x-t.x}function N_(i,t){let e=O_(i,t);if(!e)return t;let n=tf(e,i);return Vi(n,n.next),Vi(e,e.next)}function O_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&_s(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Mr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&F_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function F_(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function B_(i,t,e,n){let s=i;do s.z===0&&(s.z=Hl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Hl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function H_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _s(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function z_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!V_(i,t)&&(Mr(i,t)&&Mr(t,i)&&G_(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||$o(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $o(i,t){return i.x===t.x&&i.y===t.y}function Qu(i,t,e,n){let s=uo(we(i,t,e)),r=uo(we(i,t,n)),o=uo(we(e,n,i)),a=uo(we(e,n,t));return!!(s!==r&&o!==a||s===0&&ho(i,e,t)||r===0&&ho(i,n,t)||o===0&&ho(e,i,n)||a===0&&ho(e,t,n))}function ho(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function uo(i){return i>0?1:i<0?-1:0}function V_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Mr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function G_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tf(i,t){let e=new zl(i.i,i.x,i.y),n=new zl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wu(i,t,e,n){let s=new zl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ni=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Tu(t),Au(n,t);let o=t.length;e.forEach(Tu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Au(n,e[l]);let a=R_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Tu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Au(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var On=class i extends le{constructor(t=new $e([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ct(s,3)),this.setAttribute("uv",new Ct(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:q_,_,v=!1,E,b,T,I;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,E=p.computeFrenetFrames(h,!1),b=new C,T=new C,I=new C),f||(m=0,d=0,g=0,x=0);let M=a.extractPoints(c),w=M.shape,N=M.holes;if(!ni.isClockWise(w)){w=w.reverse();for(let L=0,at=N.length;L<at;L++){let $=N[L];ni.isClockWise($)&&(N[L]=$.reverse())}}let W=ni.triangulateShape(w,N),D=w;for(let L=0,at=N.length;L<at;L++){let $=N[L];w=w.concat($)}function F(L,at,$){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(at,$)}let z=w.length,J=W.length;function Z(L,at,$){let ot,Y,Tt,mt=L.x-at.x,A=L.y-at.y,S=$.x-L.x,B=$.y-L.y,st=mt*mt+A*A,tt=mt*B-A*S;if(Math.abs(tt)>Number.EPSILON){let K=Math.sqrt(st),vt=Math.sqrt(S*S+B*B),ht=at.x-A/K,_t=at.y+mt/K,Pt=$.x-B/vt,Gt=$.y+S/vt,et=((Pt-ht)*B-(Gt-_t)*S)/(mt*B-A*S);ot=ht+mt*et-L.x,Y=_t+A*et-L.y;let oe=ot*ot+Y*Y;if(oe<=2)return new j(ot,Y);Tt=Math.sqrt(oe/2)}else{let K=!1;mt>Number.EPSILON?S>Number.EPSILON&&(K=!0):mt<-Number.EPSILON?S<-Number.EPSILON&&(K=!0):Math.sign(A)===Math.sign(B)&&(K=!0),K?(ot=-A,Y=mt,Tt=Math.sqrt(st)):(ot=mt,Y=A,Tt=Math.sqrt(st/2))}return new j(ot/Tt,Y/Tt)}let X=[];for(let L=0,at=D.length,$=at-1,ot=L+1;L<at;L++,$++,ot++)$===at&&($=0),ot===at&&(ot=0),X[L]=Z(D[L],D[$],D[ot]);let nt=[],it,dt=X.concat();for(let L=0,at=N.length;L<at;L++){let $=N[L];it=[];for(let ot=0,Y=$.length,Tt=Y-1,mt=ot+1;ot<Y;ot++,Tt++,mt++)Tt===Y&&(Tt=0),mt===Y&&(mt=0),it[ot]=Z($[ot],$[Tt],$[mt]);nt.push(it),dt=dt.concat(it)}for(let L=0;L<m;L++){let at=L/m,$=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+x;for(let Y=0,Tt=D.length;Y<Tt;Y++){let mt=F(D[Y],X[Y],ot);xt(mt.x,mt.y,-$)}for(let Y=0,Tt=N.length;Y<Tt;Y++){let mt=N[Y];it=nt[Y];for(let A=0,S=mt.length;A<S;A++){let B=F(mt[A],it[A],ot);xt(B.x,B.y,-$)}}}let q=g+x;for(let L=0;L<z;L++){let at=f?F(w[L],dt[L],q):w[L];v?(T.copy(E.normals[0]).multiplyScalar(at.x),b.copy(E.binormals[0]).multiplyScalar(at.y),I.copy(_[0]).add(T).add(b),xt(I.x,I.y,I.z)):xt(at.x,at.y,0)}for(let L=1;L<=h;L++)for(let at=0;at<z;at++){let $=f?F(w[at],dt[at],q):w[at];v?(T.copy(E.normals[L]).multiplyScalar($.x),b.copy(E.binormals[L]).multiplyScalar($.y),I.copy(_[L]).add(T).add(b),xt(I.x,I.y,I.z)):xt($.x,$.y,u/h*L)}for(let L=m-1;L>=0;L--){let at=L/m,$=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+x;for(let Y=0,Tt=D.length;Y<Tt;Y++){let mt=F(D[Y],X[Y],ot);xt(mt.x,mt.y,u+$)}for(let Y=0,Tt=N.length;Y<Tt;Y++){let mt=N[Y];it=nt[Y];for(let A=0,S=mt.length;A<S;A++){let B=F(mt[A],it[A],ot);v?xt(B.x,B.y+_[h-1].y,_[h-1].x+$):xt(B.x,B.y,u+$)}}}Q(),pt();function Q(){let L=s.length/3;if(f){let at=0,$=z*at;for(let ot=0;ot<J;ot++){let Y=W[ot];Ut(Y[2]+$,Y[1]+$,Y[0]+$)}at=h+m*2,$=z*at;for(let ot=0;ot<J;ot++){let Y=W[ot];Ut(Y[0]+$,Y[1]+$,Y[2]+$)}}else{for(let at=0;at<J;at++){let $=W[at];Ut($[2],$[1],$[0])}for(let at=0;at<J;at++){let $=W[at];Ut($[0]+z*h,$[1]+z*h,$[2]+z*h)}}n.addGroup(L,s.length/3-L,0)}function pt(){let L=s.length/3,at=0;Mt(D,at),at+=D.length;for(let $=0,ot=N.length;$<ot;$++){let Y=N[$];Mt(Y,at),at+=Y.length}n.addGroup(L,s.length/3-L,1)}function Mt(L,at){let $=L.length;for(;--$>=0;){let ot=$,Y=$-1;Y<0&&(Y=L.length-1);for(let Tt=0,mt=h+m*2;Tt<mt;Tt++){let A=z*Tt,S=z*(Tt+1),B=at+ot+A,st=at+Y+A,tt=at+Y+S,K=at+ot+S;zt(B,st,tt,K)}}}function xt(L,at,$){l.push(L),l.push(at),l.push($)}function Ut(L,at,$){bt(L),bt(at),bt($);let ot=s.length/3,Y=y.generateTopUV(n,s,ot-3,ot-2,ot-1);Bt(Y[0]),Bt(Y[1]),Bt(Y[2])}function zt(L,at,$,ot){bt(L),bt(at),bt(ot),bt(at),bt($),bt(ot);let Y=s.length/3,Tt=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);Bt(Tt[0]),Bt(Tt[1]),Bt(Tt[3]),Bt(Tt[1]),Bt(Tt[2]),Bt(Tt[3])}function bt(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function Bt(L){r.push(L.x),r.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return X_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fo[s.type]().fromJSON(s)),new i(n,t.options)}},q_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new j(r,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-u),new j(f,1-g),new j(x,1-p)]:[new j(a,1-l),new j(h,1-u),new j(d,1-g),new j(m,1-p)]}};function X_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gn=class i extends kl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Bo=class i extends le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new C,g=new j;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,v=y+n+1,E=y+n+2,b=y+1;a.push(_,v,b),a.push(v,E,b)}}this.setIndex(a),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ko=class i extends le{constructor(t=new $e([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;ni.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];ni.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=ni.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],_=y[0]+u,v=y[1]+u,E=y[2]+u;n.push(_,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Y_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Y_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ho=class i extends le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){let b=E/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(b+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],E=h[p+1][y],b=h[p+1][y+1];(p!==0||o>0)&&d.push(_,v,b),(p!==n-1||l<Math.PI)&&d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tn=class i extends le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var zo=class i extends le{constructor(t=new No(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new j,h=new C,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),p()}function m(_){h=t.getPointAt(_/e,h);let v=o.normals[_],E=o.binormals[_];for(let b=0;b<=s;b++){let T=b/s*Math.PI*2,I=Math.sin(T),M=-Math.cos(T);l.x=M*v.x+I*E.x,l.y=M*v.y+I*E.y,l.z=M*v.z+I*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let E=(s+1)*(_-1)+(v-1),b=(s+1)*_+(v-1),T=(s+1)*_+v,I=(s+1)*(_-1)+v;g.push(E,b,I),g.push(b,T,I)}}function y(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var an=class extends si{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xn=class extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function fo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vl=class extends Is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dh:r=t,a=2*e-n;break;case Uh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dh:o=t,l=2*n-e;break;case Uh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+y*o[c+E]+_*o[l+E]+v*o[u+E];return r}},Gl=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Wl=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fo(e,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fo(t.times,Array),values:fo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case go:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return go;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&$_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=go;var Gi=class extends Fn{};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=mo;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends Fn{};ql.prototype.ValueTypeName="color";var Xl=class extends Fn{};Xl.prototype.ValueTypeName="number";var Yl=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Gn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Sr=class extends Fn{InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.DefaultInterpolation=go;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Fn{};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=mo;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends Fn{};$l.prototype.ValueTypeName="vector";var Zl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Z_=new Zl,Jl=class{constructor(t){this.manager=t!==void 0?t:Z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Vo=class extends Ls{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},hl=new ve,Ru=new C,Cu=new C,Go=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ru),Cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cu),e.updateMatrixWorld(),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Pu=new ve,ir=new C,ul=new C,Kl=class extends Go{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(ir),ul.copy(n.position),ul.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ul),n.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu)}},Er=class extends Ls{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},jl=class extends Go{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},en=class extends Ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new jl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},yi=class extends Ls{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ac="\\[\\]\\.:\\/",J_=new RegExp("["+ac+"]","g"),lc="[^"+ac+"]",K_="[^"+ac.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",lc),Q_=/(WCOD+)?/.source.replace("WCOD",K_),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),ny=new RegExp("^"+j_+Q_+ty+ey+"$"),iy=["material","materials","bones","map"],Ql=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J_,"")}static parseTrackName(t){let e=ny.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);iy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Ql;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lv=new Float32Array(1);var Ds=class{constructor(t,e,n=0,s=1/0){this.ray=new ur(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return tc(t,this,n,e),n.sort(Iu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tc(t[s],this,n,e);return n.sort(Iu),n}};function Iu(i,t){return i.distance-t.distance}function tc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)tc(s[r],t,e,!0)}}var Wo=class{constructor(){this.type="ShapePath",this.color=new wt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new zi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){let y=[];for(let _=0,v=p.length;_<v;_++){let E=p[_],b=new $e;b.curves=E.curves,y.push(b)}return y}function n(p,y){let _=y.length,v=!1;for(let E=_-1,b=0;b<_;E=b++){let T=y[E],I=y[b],M=I.x-T.x,w=I.y-T.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(T=y[b],M=-M,I=y[E],w=-w),p.y<T.y||p.y>I.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{let N=w*(p.x-T.x)-M*(p.y-T.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(p.y!==T.y)continue;if(I.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=I.x)return!0}}return v}let s=ni.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new $e,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;let u=[],f=[],d=[],g=0,x;f[g]=void 0,d[g]=[];for(let p=0,y=r.length;p<y;p++)a=r[p],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!h&&f[g]&&g++,f[g]={s:new $e,p:x},f[g].s.curves=a.curves,h&&g++,d[g]=[]):d[g].push({h:a,p:x[0]});if(!f[0])return e(r);if(f.length>1){let p=!1,y=0;for(let _=0,v=f.length;_<v;_++)u[_]=[];for(let _=0,v=f.length;_<v;_++){let E=d[_];for(let b=0;b<E.length;b++){let T=E[b],I=!0;for(let M=0;M<f.length;M++)n(T.p,f[M].p)&&(_!==M&&y++,I?(I=!1,u[M].push(T)):p=!0);I&&u[_].push(T)}}y>0&&p===!1&&(d=u)}let m;for(let p=0,y=f.length;p<y;p++){l=f[p].s,c.push(l),m=d[p];for(let _=0,v=m.length;_<v;_++)l.holes.push(m[_].h)}return c}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);function nn(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function sy(i,t,e){let n=Math.ceil(i/t)+1,s=[];for(let a=0;a<n;a++){s[a]=[];for(let l=0;l<n;l++)s[a][l]=e()}let r=(a,l)=>s[(l%(n-1)+(n-1))%(n-1)][(a%(n-1)+(n-1))%(n-1)],o=a=>a*a*(3-2*a);return(a,l)=>{let c=a/t,h=l/t,u=Math.floor(c),f=Math.floor(h),d=o(c-u),g=o(h-f),x=r(u,f),m=r(u+1,f),p=r(u,f+1),y=r(u+1,f+1);return(x*(1-d)+m*d)*(1-g)+(p*(1-d)+y*d)*g}}function De(i,t,e=4,n=16){let s=[];for(let r=0;r<e;r++)s.push(sy(i,Math.max(2,n>>r),t));return(r,o)=>{let a=0,l=.5,c=0;for(let h of s)a+=h(r,o)*l,c+=l,l*=.5;return a/c}}var se=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],Ue=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],cc=i=>Math.max(0,Math.min(255,i|0)),sf=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function _n(i,t,e=i){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=s.createImageData(i,e),o=r.data;for(let a=0;a<e;a++)for(let l=0;l<i;l++){let[c,h,u]=t(l,a),f=(a*i+l)*4;o[f]=cc(c),o[f+1]=cc(h),o[f+2]=cc(u),o[f+3]=255}return s.putImageData(r,0,0),n}function hc(i,t,e,n,s,r){let o=s(i*.35,t*6+r)*.6+s(i*3,t*.2)*.4,a=Math.sin((i*.9+o*18)*.7)*.5+.5;return Ue(e,n,a*.55+o*.45)}function Fs(i,t,e,n,s,r,o){let a=Ue(e,n,r(i,t)),l=Math.abs(o(i,t)-.5);return l<.03&&(a=Ue(a,s,.7-l*14)),a}function Zo(i){return _n(256,(n,s)=>{let r=Math.floor(n/32),o=Math.floor(s/32),a=(r+o)%2===1,l=n%32,c=s%32,h=i(n,s,r,o,a,l,c);return(l===0||c===31)&&(h=Ue(h,[0,0,0],.45)),(l===31||c===0)&&(h=Ue(h,[255,255,255],a?.08:.16)),h})}var ry={glass(){let i=nn(7),t=De(256,i,3,24),e=se("#b488c6"),n=se("#6f4588"),s=se("#3b1247"),r=se("#160618");return Zo((o,a,l,c,h,u,f)=>{let d=h?Ue(s,r,t(o,a)):Ue(e,n,t(o,a));return Math.abs((u+f)%32-11)<2&&(d=Ue(d,[255,240,255],h?.12:.22)),d})},wood(){let i=nn(8),t=De(256,i,4,24),e=se("#d8c39a"),n=se("#a98c5e"),s=se("#5a3b24"),r=se("#2e1b10");return Zo((o,a,l,c,h)=>h?hc(o+l*13,a+c*7,s,r,t,c*31):hc(a+c*5,o+l*11,e,n,t,l*17))},marble(){let i=nn(9),t=De(256,i,4,20),e=De(256,i,3,40),n=se("#efe6d2"),s=se("#cbbfa6"),r=se("#24423a"),o=se("#0c1a16");return Zo((a,l,c,h,u)=>u?Fs(a+c*40,l,r,o,se("#7fa898"),t,e):Fs(a,l+h*40,n,s,se("#8f8470"),t,e))},tile(){let i=nn(10),t=De(256,i,2,16);return Zo((e,n,s,r,o)=>{let a=t(e,n)*16+sf[n%4*4+e%4],l=o?[30,30,36]:[214,210,200];return a>20?Ue(l,o?[60,60,70]:[170,166,158],.6):l})}},oy={glass(){return ef(99)},tile(){return ef(98)},wood(){let i=nn(97),t=De(64,i,4,16);return _n(64,(e,n)=>hc(e,n,se("#3b2416"),se("#1a0e08"),t,0))},marble(){let i=nn(96),t=De(64,i,3,12),e=De(64,i,3,20);return _n(64,(n,s)=>Fs(n,s,se("#3a3a36"),se("#16140f"),se("#8a7a5a"),t,e))}};function ef(i){let t=nn(i),e=De(64,t,3,8),n=se("#b9bec6"),s=se("#4a4e56");return _n(64,(r,o)=>{let a=Ue(n,s,(Math.sin(o*.55)*.5+.5)*.7+e(r,o)*.3);return o%16===3&&(a=Ue(a,[255,255,255],.5)),o%16===11&&(a=Ue(a,[0,0,0],.5)),a})}var ay={stars(){let i=nn(5);return _n(128,()=>{let t=i();return t<.012?[70,66,80]:t<.02?[40,36,48]:[4,2,6]})},velvet(){let i=nn(6),t=De(128,i,5,32),e=se("#4a1d22"),n=se("#1e0b0e");return _n(128,(s,r)=>{let o=Ue(e,n,t(s,r));return i()<.05&&(o=Ue(o,e,.4)),o})},void(){let i=nn(4),t=De(128,i,4,32);return _n(128,(e,n)=>Ue([26,12,44],[6,3,14],t(e,n)+sf[n%4*4+e%4]/64))}},rf={stars:{bg:197124,fog:[12,26],ambient:[5261418,1],key:[16777215,1.6],fill:[16734928,18],fill2:[5234943,10]},velvet:{bg:722183,fog:[11,24],ambient:[6969938,1.2],key:[16769984,1.9],fill:[16730682,14],fill2:[16756848,4]},void:{bg:853528,fog:[10,22],ambient:[4209264,1.1],key:[14213375,1.5],fill:[9063167,16],fill2:[4243711,10]}},ly={ivoryWhite(){let i=nn(11),t=De(64,i,4,12),e=De(64,i,3,20);return _n(64,(n,s)=>Fs(n,s,se("#efe4cc"),se("#c9b893"),se("#8f8470"),t,e))},ivoryBlack(){let i=nn(23),t=De(64,i,4,10),e=se("#3a2f28"),n=se("#17110e");return _n(64,(s,r)=>Ue(Ue(e,n,t(s,r)),n,(Math.sin(r*.8+t(s*2,r)*6)*.5+.5)*.3))},marbleWhite(){let i=nn(31),t=De(64,i,4,10),e=De(64,i,3,16);return _n(64,(n,s)=>Fs(n,s,se("#f4f2ee"),se("#d4d0c8"),se("#7a7a80"),t,e))},marbleBlack(){let i=nn(37),t=De(64,i,4,10),e=De(64,i,3,16);return _n(64,(n,s)=>Fs(n,s,se("#1e3a32"),se("#08120e"),se("#9ac0b0"),t,e))},brushed(){let i=nn(41),t=De(64,i,3,6);return _n(64,(e,n)=>{let s=200+t(e*.2,n*4)*55;return[s,s,s]})}};function cy(){let t=nn(3),e=De(64,t,2,16),n=["px","nx","py","ny","pz","nz"],s={px:(a,l)=>[1,-l,-a],nx:(a,l)=>[-1,-l,a],py:(a,l)=>[a,1,l],ny:(a,l)=>[a,-1,-l],pz:(a,l)=>[a,-l,1],nz:(a,l)=>[-a,-l,-1]},r=n.map(a=>_n(64,(l,c)=>{let h=l/63*2-1,u=c/63*2-1,[f,d,g]=s[a](h,u),x=Math.hypot(f,d,g),m=d/x,p=Math.atan2(g,f),y=e(l,c)*.15;if(m>.55){let E=Math.floor(p/Math.PI*4+100)%2;return Ue(E?[218,218,230]:[138,138,160],[86,82,106],(1-m)*.8+y)}if(m>.12)return Ue([215,218,228],[70,66,90],(m-.12)/.43+y);if(m>-.06)return[255,252,255];let _=Math.floor(p/Math.PI*6+100)%2,v=Math.min(1,(-m-.06)/.9);return Ue(_?[120,70,110]:[60,110,120],[8,4,10],v*.9+y)})),o=new As(r);return o.magFilter=Ee,o.minFilter=Ee,o.generateMipmaps=!1,o.colorSpace=fe,o.needsUpdate=!0,o}function nf(i){return i.magFilter=Ee,i.minFilter=Ee,i.generateMipmaps=!1,i.colorSpace=fe,i.wrapS=i.wrapT=lr,i.needsUpdate=!0,i}var Jo=class{constructor(){this.cache=new Map,this.overrides={},this.env=null}async loadOverrides(t=[]){await Promise.all(t.map(e=>new Promise(n=>{let s=new Image;s.onload=()=>{this.overrides[e]=nf(new qn(s)),n()},s.onerror=()=>n(),s.src=`assets/textures/${e}.png`})))}get(t,e,n){return n&&this.overrides[n]?this.overrides[n]:(this.cache.has(t)||this.cache.set(t,nf(new qn(e()))),this.cache.get(t))}board(t){return this.get("board:"+t,ry[t],"board")}rim(t){return this.get("rim:"+t,oy[t],"rim")}table(t){return this.get("table:"+t,ay[t],"table")}piece(t,e){return this.get("piece:"+t,ly[t],e)}envMap(){return this.env||(this.env=cy()),this.env}};var hy=4,uc=.8,uy=.75;function fy(i){return new ve().set(0,0,-uc,0,uy,0,0,0,0,-uc,0,uc*i,0,0,0,1)}var Ko=[[0,0],[.33,0],[.33,.07],[.25,.12]],dy={p:[...Ko,[.17,.3],[.12,.38],[.19,.42],[.15,.5],[.08,.6],[0,.63]],r:[...Ko,[.21,.42],[.27,.5],[.27,.68],[0,.68]],n:[...Ko,[.2,.3],[0,.3]],b:[...Ko,[.2,.42],[.13,.5],[.23,.58],[.21,.7],[.12,.84],[.06,.88],[0,.9]],q:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.62],[.28,.72],[.29,.8],[.2,.88],[.14,.98],[0,1]],k:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.64],[.29,.74],[.29,.84],[.2,.92],[.09,.98],[0,.98]]},py={p:.63,r:.8,n:.9,b:1,q:1.14,k:1.25};function my(i,t=hy){let e=Math.max(...i.map(l=>l[1]))||1,n=i.map(([l,c],h)=>{let u=[];if(h%2===1&&l>0){u.push(0);for(let f=0;f<t;f++)u.push((f+.5)*Math.PI/t);u.push(Math.PI)}else for(let f=0;f<=t;f++)u.push(f*Math.PI/t);return u.map(f=>({p:[l*Math.sin(f),c,l*Math.cos(f)],uv:[f/Math.PI,c/e],a:f}))}),s=[],r=[],o=(l,c,h)=>{let u=c.p[0]-l.p[0],f=c.p[1]-l.p[1],d=c.p[2]-l.p[2],g=h.p[0]-l.p[0],x=h.p[1]-l.p[1],m=h.p[2]-l.p[2];if(!(Math.hypot(f*m-d*x,d*g-u*m,u*x-f*g)<1e-9))for(let p of[l,c,h])s.push(...p.p),r.push(...p.uv)};for(let l=0;l<n.length-1;l++){let c=n[l],h=n[l+1],u=0,f=0;for(;u<c.length-1||f<h.length-1;){let d=u<c.length-1?c[u+1].a:1/0,g=f<h.length-1?h[f+1].a:1/0;d<=g?(o(c[u],c[u+1],h[f]),u++):(o(c[u],h[f+1],h[f]),f++)}}let a=new le;return a.setAttribute("position",new Ct(s,3)),a.setAttribute("uv",new Ct(r,2)),a}var jo=(i,t,e,n,s,r)=>new ee(i,t,e).translate(n,s,r),of=(i,t)=>new gn(i,0).translate(0,t,0),gy=[[-.16,.28],[.16,.28],[.17,.5],[.3,.6],[.31,.72],[.14,.78],[.1,.9],[0,.82],[-.1,.9],[-.13,.76],[-.2,.6],[-.18,.4]],xy=[[-.18,.42],[-.2,.6],[-.13,.76],[-.1,.88],[-.04,.8],[-.07,.72],[-.12,.58],[-.1,.44]];function af(i,t){let e=new $e,n=i.map(([o,a])=>[-o,a]);e.moveTo(n[0][0],n[0][1]);for(let o=1;o<n.length;o++)e.lineTo(n[o][0],n[o][1]);e.closePath();let s=new On(e,t),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),l=r.getY(o),c=r.getZ(o);r.setXYZ(o,Math.max(0,c),l,-a)}return s}var fc=.24;function _y(){let i=af(gy,{depth:fc-.14,bevelEnabled:!0,bevelThickness:.14,bevelSize:.1,bevelOffset:-.1,bevelSegments:3,curveSegments:1}),t=af(xy,{depth:fc+.02,bevelEnabled:!0,bevelThickness:.05,bevelSize:.025,bevelOffset:-.025,bevelSegments:1,curveSegments:1}),e=new gn(.045,0).scale(.8,1,1).translate(fc+.01,.72,.09);return[i,t,e]}function yy(i){let t=[my(dy[i])];if(i==="r")for(let e of[-.18,0,.18])t.push(jo(.24,.12,.12,.12,.74,e));else if(i==="n")t.push(..._y());else if(i==="b")t.push(of(.06,.94));else if(i==="q"){t.push(of(.08,1.06));for(let e of[-.24,-.12,0,.12,.24])t.push(jo(.16,.1,.06,.08,.86+(.24-Math.abs(e))*.25,e))}else i==="k"&&(t.push(jo(.16,.28,.08,.08,1.1,0)),t.push(jo(.16,.08,.26,.08,1.13,0)));return t}var dc=new Map;function vy(i){if(!dc.has(i)){let t=fy(py[i]/2);dc.set(i,yy(i).map(e=>(e.index&&(e=e.toNonIndexed()),e.applyMatrix4(t),e.computeVertexNormals(),e)))}return dc.get(i)}var My=new _e({color:0,transparent:!0,opacity:.5,depthWrite:!1});function lf(i,t){let e=t.envMap(),n=l=>new an({flatShading:!0,...l}),s=l=>new xn({flatShading:!0,...l}),r=l=>t.overrides[l]||null;if(i==="chrome")return{white:n({color:15131890,map:r("white"),envMap:e,combine:wr,reflectivity:r("white")?.3:.5,specular:10132136,shininess:90}),black:n({color:2788e3,map:r("black"),envMap:e,combine:qi,reflectivity:.85,specular:1984080,shininess:60})};if(i==="matte")return{white:s({color:15327952}),black:s({color:2056046})};if(i==="ivory")return{white:s({map:t.piece("ivoryWhite","white")}),black:s({map:t.piece("ivoryBlack","black")})};if(i==="marble")return{white:n({map:t.piece("marbleWhite","white"),specular:4473924,shininess:40}),black:n({map:t.piece("marbleBlack","black"),specular:2240552,shininess:40})};let o=t.piece("brushed",null),a=(l,c)=>n({color:l,map:o,envMap:e,combine:qi,reflectivity:.6,specular:c,shininess:70});return{white:a(16764778,9075280),black:a(9082532,3818576)}}function pc(i,t,e){let n=t==="w"?e.white:e.black,s=vy(i),r=new ne,o=new ne;for(let l of s)o.add(new Ht(l,n));let a=new ne;for(let l of s){let c=new Ht(l,My);c.renderOrder=4,a.add(c)}return a.scale.y=.02,a.position.set(.06,.004,.07),r.add(a,o),r.userData={type:i,color:t,body:o,shadow:a},r}function cf(){let i=new Ht(new Tn(.46,.035,4,12),new _e({color:8382975}));return i.rotation.x=Math.PI/2,i.position.y=.03,i}var ks=[{id:"pieces",label:"\uB9D0 \uC7AC\uC9C8",hint:"\uCCB4\uC2A4\uB9D0 \uD45C\uBA74. \uBC18\uC0AC\uC640 \uC9C8\uAC10\uC774 \uD654\uBA74 \uC778\uC0C1\uC744 \uAC00\uC7A5 \uD06C\uAC8C \uBC14\uAFC9\uB2C8\uB2E4.",options:[{id:"chrome",label:"\uD06C\uB86C & \uC2DC\uC548",note:"Virtual Chess\uC2DD \uC0AC\uC804\uB80C\uB354 CG \uBC18\uC0AC"},{id:"matte",label:"\uBB34\uAD11 \uD50C\uB7AB",note:"\uBC18\uC0AC \uC5C6\uC774 \uBA74\uB9CC, \uB85C\uC6B0\uD3F4\uB9AC\uAC00 \uAC00\uC7A5 \uB610\uB837"},{id:"ivory",label:"\uC0C1\uC544 & \uD751\uB2E8",note:"\uB098\uBB47\uACB0\uACFC \uC0C1\uC544\uACB0, \uBC18\uC0AC \uC5C6\uC74C"},{id:"marble",label:"\uB300\uB9AC\uC11D",note:"\uD770 \uB300\uB9AC\uC11D\uACFC \uB179\uD751 \uB300\uB9AC\uC11D, \uC57D\uD55C \uAD11\uD0DD"},{id:"gold",label:"\uAE08 & \uC740",note:"\uD669\uB3D9\uBE5B \uAE08\uACFC \uCC28\uAC00\uC6B4 \uC740"}]},{id:"board",label:"\uBCF4\uB4DC",hint:"\uD310\uC758 \uC7AC\uC9C8. \uC790\uD64D \uC720\uB9AC\uB9CC \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE69\uB2C8\uB2E4.",options:[{id:"glass",label:"\uC790\uD64D \uC720\uB9AC",note:"\uBC18\uD22C\uBA85, \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE68"},{id:"wood",label:"\uD638\uB450\uB098\uBB34",note:"\uC804\uD1B5 \uB098\uBB47\uACB0 \uD310"},{id:"marble",label:"\uB300\uB9AC\uC11D \uD310",note:"\uD06C\uB9BC\uACFC \uC9D9\uC740 \uB179\uC0C9"},{id:"tile",label:"\uD751\uBC31 \uD0C0\uC77C",note:"\uB514\uB354\uB9C1\uB41C PS1 \uD0C0\uC77C"}]},{id:"backdrop",label:"\uBC30\uACBD\uACFC \uC870\uBA85",hint:"\uD310 \uBC14\uAE65\uC758 \uBC14\uB2E5, \uD558\uB298\uC0C9, \uC870\uBA85 \uC0C9\uC744 \uD568\uAED8 \uC815\uD569\uB2C8\uB2E4.",options:[{id:"stars",label:"\uC810\uBC15\uC774 \uD751",note:"Chessmaster \uD0C0\uC774\uD2C0 \uBC30\uACBD"},{id:"velvet",label:"\uBD89\uC740 \uBCA8\uBCB3",note:"\uB530\uB73B\uD55C \uC870\uBA85\uC758 \uCE74\uB4DC \uD14C\uC774\uBE14"},{id:"void",label:"\uBCF4\uB78F\uBE5B \uC2EC\uC5F0",note:"\uCC28\uAC00\uC6B4 \uC870\uBA85\uACFC \uADF8\uB77C\uB370\uC774\uC158"}]},{id:"frame",label:"UI \uD504\uB808\uC784",hint:"\uD654\uBA74 \uD14C\uB450\uB9AC, \uD328\uB110, \uBC84\uD2BC\uC758 \uC7A5\uC2DD.",options:[{id:"deco",label:"\uBC31\uB78D \uC544\uB974\uB370\uCF54",note:"\uAE08\uC18D \uD14C\uB450\uB9AC\uC640 \uD669\uB3D9 \uC7A5\uC2DD"},{id:"plain",label:"\uBBF8\uB2C8\uBA40 \uC120",note:"\uC587\uC740 \uC120, \uC7A5\uC2DD \uC5C6\uC74C"},{id:"neon",label:"\uB124\uC628",note:"\uC2DC\uC548\uACFC \uC790\uD64D \uBC1C\uAD11\uC120"}]},{id:"lettering",label:"\uD0C0\uC774\uD2C0 \uB808\uD130\uB9C1",hint:"\uD0C0\uC774\uD2C0, \uBC29 \uCF54\uB4DC, \uC2B9\uB9AC \uBB38\uAD6C\uC758 \uAE00\uC790 \uCC98\uB9AC.",options:[{id:"brass",label:"\uD669\uB3D9",note:"Chessmaster\uC2DD \uCCAD\uB3D9 \uADF8\uB77C\uB370\uC774\uC158"},{id:"chrome",label:"\uD06C\uB86C",note:"\uC740\uBE5B \uAE08\uC18D \uBC18\uC0AC"},{id:"neon",label:"\uB124\uC628",note:"\uC790\uD64D \uAE00\uC790\uC640 \uC2DC\uC548 \uC678\uACFD"},{id:"crown",label:"\uC655\uAD00",note:"\uC740\uBE5B \uAE4E\uC740 \uBA74, \uBCF4\uB78F\uBE5B \uB450\uAED8, \uC2DC\uC548 \uBCF4\uC11D"},{id:"robe",label:"\uB9DD\uD1A0",note:"\uBE68\uAC04 \uAE4E\uC740 \uBA74, \uD770 \uB2F4\uBE44\uD138 \uD14C\uB450\uB9AC, \uAE08\uB760"},{id:"velvet",label:"\uBCA8\uBCB3",note:"\uC655\uC88C\uC758 \uBCF4\uB77C \uBCA8\uBCB3\uACFC \uAE08 \uD14C\uB450\uB9AC"},{id:"disco",label:"\uB514\uC2A4\uCF54",note:"\uAE00\uC790\uB9C8\uB2E4 \uB2E4\uB978 \uC0C9, \uBC15\uC790\uB9C8\uB2E4 \uBC14\uB01C"}]},{id:"pixel",label:"3D \uD574\uC0C1\uB3C4",hint:"3D \uC7A5\uBA74\uC744 \uADF8\uB9AC\uB294 \uD574\uC0C1\uB3C4. \uC6D0\uBCF8\uC740 \uAE30\uAE30 \uD574\uC0C1\uB3C4\uB85C \uBA74\uC744 \uB610\uB837\uD558\uAC8C, \uB098\uBA38\uC9C0\uB294 \uB3C4\uD2B8\uB85C \uD655\uB300\uD569\uB2C8\uB2E4. UI\uB294 \uD56D\uC0C1 270\xD7480 \uB3C4\uD2B8\uC785\uB2C8\uB2E4.",options:[{id:"native",label:"\uC6D0\uBCF8",note:"\uAE30\uAE30 \uD574\uC0C1\uB3C4. \uD53D\uC140 \uC5C6\uC774 \uBA74\uC774 \uB610\uB837"},{id:"coarse",label:"\uAD75\uAC8C",note:"135\xD7240"},{id:"base",label:"\uB3C4\uD2B8",note:"270\xD7480"},{id:"fine",label:"\uACF1\uAC8C",note:"405\xD7720"}]},{id:"camera",label:"\uB300\uAD6D \uC2DC\uC810",hint:"\uD310\uC744 \uB0B4\uB824\uB2E4\uBCF4\uB294 \uBC29\uC2DD. \uB9D0\uC740 \uBC18\uC73C\uB85C \uC798\uB77C \uB215\uD78C \uC591\uAC01\uC774\uB77C \uC704\uC5D0\uC11C \uC2E4\uB8E8\uC5E3\uC774 \uBCF4\uC785\uB2C8\uB2E4.",options:[{id:"persp",label:"\uC6D0\uADFC \uD0D1\uB2E4\uC6B4",note:"\uAE30\uBCF8. \uC218\uC9C1, \uAC00\uC7A5\uC790\uB9AC \uB9D0\uC758 \uC606\uBA74\uC774 \uBCF4\uC784"},{id:"flat",label:"\uC815\uD0D1\uB2E4\uC6B4",note:"\uC218\uC9C1, \uAC70\uC758 \uD3C9\uD589 \uD22C\uC601. \uCE78\uB2F9 32px"},{id:"tilt",label:"\uC0B4\uC9DD \uAE30\uC6B8\uC784",note:"18\xB0 \uAE30\uC6B8\uC5EC \uC591\uAC01 \uB450\uAED8\uAC00 \uBCF4\uC784"}]},{id:"zoom",label:"\uACF5\uACA9 \uC90C",hint:"\uB0B4 \uB9D0\uC774 \uC0C1\uB300 \uB9D0\uC744 \uC7A1\uC744 \uB54C \uB0B4 \uD654\uBA74\uC5D0\uC11C\uB9CC \uC77C\uC5B4\uB098\uB294 \uC90C \uC778/\uC544\uC6C3.",options:[{id:"soft",label:"\uC57D\uD558\uAC8C",note:"\uC0B4\uC9DD \uB2E4\uAC00\uAC14\uB2E4 \uB3CC\uC544\uC634"},{id:"normal",label:"\uBCF4\uD1B5",note:"\uB2E4\uAC00\uAC10 + \uC791\uC740 \uD754\uB4E4\uB9BC"},{id:"punch",label:"\uAC15\uD558\uAC8C",note:"\uAE4A\uC740 \uC90C + \uD754\uB4E4\uB9BC + \uC12C\uAD11"}]}],Bs={pieces:"chrome",board:"glass",backdrop:"stars",frame:"deco",lettering:"crown",pixel:"native",camera:"persp",zoom:"normal"},uf={native:null,coarse:.5,base:1,fine:1.5},gc={soft:{s:.58,shake:0,flash:0,dur:.85},normal:{s:.72,shake:.06,flash:0,dur:.95},punch:{s:.82,shake:.14,flash:.75,dur:1.05}},Tr={deco:{accent:"#c9a24a",accentHi:"#f3dc8a",accentLo:"#6e4a14",line:"#8d9299",lineHi:"#d8dde3",lineLo:"#3a3d44",panel:"rgba(8,6,12,0.86)",btn:"#1c1a24",btnPrimary:"#3a2a10",ink:"#ece6d6",dim:"#8a8578"},plain:{accent:"#d8d2c4",accentHi:"#ffffff",accentLo:"#5a5650",line:"#6a6660",lineHi:"#a8a49c",lineLo:"#2a2826",panel:"rgba(10,10,12,0.84)",btn:"#18181c",btnPrimary:"#2c2a26",ink:"#eeeae2",dim:"#8a867e"},neon:{accent:"#4fe0ff",accentHi:"#c8f8ff",accentLo:"#0a5a6e",line:"#e05ac8",lineHi:"#ffb8f0",lineLo:"#4a1440",panel:"rgba(6,2,14,0.86)",btn:"#140a24",btnPrimary:"#0a2a36",ink:"#eef6ff",dim:"#8a86a8"}},ff="faith-chess-theme",hf=ks.map(i=>i.id);function df(i){let t={...Bs};for(let e of ks)i&&e.options.some(n=>n.id===i[e.id])&&(t[e.id]=i[e.id]);return t}function by(i){let t=/^#?t-([a-z0-9-]+)$/.exec((i||"").split("&")[0]);if(!t)return null;let e=t[1].split("-");if(e.length!==hf.length)return null;let n={};return hf.forEach((s,r)=>{n[s]=e[r]}),df(n)}var mc=3;function pf(){let i=typeof location<"u"?by(location.hash):null;if(i)return Qo(i),i;try{let t=JSON.parse(localStorage.getItem(ff)||"null"),e=df(t),n=t?t.v||1:mc;return n<2&&(e.camera=Bs.camera),n<3&&e.lettering==="brass"&&(e.lettering=Bs.lettering),n<mc&&Qo(e),e}catch{return{...Bs}}}function Qo(i){try{localStorage.setItem(ff,JSON.stringify({...i,v:mc}))}catch{}}function mf(i,t,e){let n=ks.find(o=>o.id===t),s=n.options.findIndex(o=>o.id===i[t]),r=n.options.length;return{...i,[t]:n.options[(s+e+r)%r].id}}function gf(i,t){return ks.find(n=>n.id===i)?.options.find(n=>n.id===t)?.label??t}var un=(i,t={})=>new xn({color:i,flatShading:!0,...t}),Hs=(i,t={})=>new an({color:i,flatShading:!0,shininess:70,specular:9076848,...t}),Ne=(i,t=1)=>new gn(i,t),xf=(i,t=10)=>new Ps(i.map(([e,n])=>new j(e,n)),t);function Dt(i,t,e,n=0,s=0,r=0,o=1,a=1,l=1){let c=new Ht(t,e);return c.position.set(n,s,r),c.scale.set(o,a,l),i.add(c),c}var Bn=(i,t,e,n)=>{let s=new ne;return s.position.set(t,e,n),i.add(s),s},yf=14264378,Sy=15907988,Ey=14193770,wy=15764106,vf=16315626,Ty=1706512,Ay=16447214,zs={w:{crown:15526644,gem:5230847,robe:12595262,robe2:8002086,beard:15658228,velvet:8006282,velvet2:5118556,bg:3939410,shoe:10099770,shoe2:5901344},b:{crown:2788e3,gem:15981706,robe:2252908,robe2:1194050,beard:8016966,velvet:10099758,velvet2:6164252,bg:1848384,shoe:2060158,shoe2:931392}},Ry=[[-.042,.088],[-.014,.1],[.014,.096],[.042,.078]];function Cy(i,t,e,n){let s=Bn(i,0,-.43,0);Dt(s,new he(.068,.04,.07,7),e),Dt(s,new Tn(.064,.011,3,7).rotateX(Math.PI/2),n,0,.033,0);let r=new ne;r.position.y=-.04,s.add(r),Dt(r,Ne(.07,0),e,0,-.05,0,.95,.85,.5);let o=Ry.map(([c,h])=>{let u=Bn(r,c,-.1,0);Dt(u,new he(.0155,.0145,h*.55,5).translate(0,-h*.275,0),e);let f=Bn(u,0,-h*.55,0);return Dt(f,new he(.0145,.012,h*.45,5).translate(0,-h*.225,0),e),Dt(f,Ne(.0135,0),e,0,-h*.45,0),{a:u,b:f,x:c}}),a=Bn(r,t*.06,-.035,.02);a.rotation.z=t*.75,Dt(a,new he(.017,.015,.05,5).translate(0,-.025,0),e);let l=Bn(a,0,-.05,0);return Dt(l,new he(.015,.012,.042,5).translate(0,-.021,0),e),Dt(l,Ne(.014,0),e,0,-.042,0),{wrist:s,palm:r,fingers:o,thumb:{a,b:l,s:t}}}function Mf(i,t=.3,e=t,n=.3){i.fingers.forEach((s,r)=>{let o=r===1?e:t;s.a.rotation.set(-1.25*o,0,(r-1.5)*.16*n),s.b.rotation.x=-1.45*o}),i.thumb.a.rotation.set(-.7*t,0,i.thumb.s*(.75-.35*t+.25*n)),i.thumb.b.rotation.x=-.6*t}function Py(){let i=[[-.088,0,.056,.078],[-.055,0,.07,.108],[0,0,.076,.112],[.06,0,.072,.09],[.12,.003,.06,.066],[.17,.013,.047,.05],[.21,.032,.035,.038],[.238,.06,.026,.03],[.252,.095,.019,.022],[.25,.127,.012,.014],[.24,.145,.005,.006]],t=8,e=[],n=([f,d,g,x])=>Array.from({length:t},(m,p)=>{let y=p/t*Math.PI*2-Math.PI/2,_=Math.sin(y);return[Math.cos(y)*g*(_<-.2?.92:1),d+(_<-.2?0:x*(.5+.5*_)*1.12-x*.06),f]}),s=i.map(n),r=(f,d,g)=>e.push(...f,...d,...g);for(let f=0;f<s.length-1;f++)for(let d=0;d<t;d++){let g=(d+1)%t,x=s[f][d],m=s[f][g],p=s[f+1][d],y=s[f+1][g];r(x,p,m),r(m,p,y)}let o=s[0],a=s[s.length-1],l=f=>f.reduce((d,g)=>[d[0]+g[0]/t,d[1]+g[1]/t,d[2]+g[2]/t],[0,0,0]),c=l(o),h=l(a);for(let f=0;f<t;f++)r(o[(f+1)%t],c,o[f]),r(a[f],h,a[(f+1)%t]);let u=new le;return u.setAttribute("position",new Ct(e,3)),u.computeVertexNormals(),u}var xc=null;function Iy(i,t,e){xc||(xc=Py());let n=Bn(i,0,-.52,.01);Dt(n,xc,Hs(t.shoe,{shininess:110,specular:14207176})),Dt(n,new ee(.07,.03,.05),un(t.shoe2),0,-.012,-.058),Dt(n,new Tn(.05,.022,4,8).rotateX(Math.PI/2),un(vf),0,.112,-.025);let s=Dt(n,new ee(.056,.042,.012),e,0,.088,.055);s.rotation.x=-.75;let r=Dt(n,new ee(.03,.02,.014),un(t.shoe2),0,.09,.057);return r.rotation.x=-.75,Dt(n,Ne(.024,0),e,0,.152,.236),n}function vc(i){let t=new ne,e=un(i.velvet),n=un(i.velvet2),s=Hs(yf);for(let[r,o]of[[-.56,.36],[.56,.36],[-.56,-.4],[.56,-.4]])Dt(t,new he(.06,.08,.32,6),s,r,.16,o);Dt(t,new ee(1.36,.26,1),n,0,.44,0),Dt(t,Ne(.62),e,0,.62,.04,1.06,.32,.84),Dt(t,new ee(1.36,1.3,.22),n,0,1.16,-.46),Dt(t,Ne(.68),n,0,1.8,-.46,1,.55,.32),Dt(t,Ne(.56),e,0,1.18,-.3,1.06,1.05,.34);for(let[r,o]of[[-.25,1.4],[.25,1.4],[0,1.15],[-.25,.92],[.25,.92]])Dt(t,Ne(.035,0),s,r,o,-.12);Dt(t,Ne(.11,0),s,0,2.18,-.46);for(let r of[-1,1])Dt(t,new ee(.2,.36,.82),n,r*.68,.64,0),Dt(t,new he(.18,.18,.96,8).rotateX(Math.PI/2),e,r*.68,.88,.02),Dt(t,Ne(.09,0),s,r*.68,.88,.52);return t}function Mc(i){let t=new ne,e=un(i.robe),n=un(i.robe2),s=un(Sy),r=un(Ey),o=un(i.beard),a=Hs(yf),l=Hs(i.crown,{side:We}),c=un(Ty),h=un(vf),u=un(Ay),f=new ne;f.position.set(0,.72,.06),t.add(f),Dt(f,xf([[0,0],[.36,.02],[.52,.14],[.58,.34],[.55,.56],[.46,.74],[.36,.86],[.32,.92]]),e),Dt(f,xf([[.32,.92],[.36,1],[.385,1.12],[.36,1.26],[.28,1.37],[.15,1.44],[0,1.46]]),s),Dt(f,Ne(.37),o,0,1.17,-.09,1.02,.92,.82),Dt(f,new Tn(.5,.04,4,16).rotateX(Math.PI/2),a,0,.6,0),Dt(f,new Tn(.32,.075,6,12).rotateX(Math.PI/2),h,0,.9,0),Dt(f,Ne(.12,0),a,0,.34,.55,1,1,.35);for(let[y,_]of[[-.2,.42],[.2,.42],[-.12,.18],[.12,.18]])Dt(f,Ne(.055,0),h,y,_,.53,1,1,.4);Dt(f,Ne(.075,0),r,0,1.1,.38);for(let y of[-1,1])Dt(f,Ne(.065,0),un(wy),y*.21,1.06,.3,1,.6,.5);let d=[-1,1].map(y=>Dt(f,Ne(.05,0),c,y*.13,1.18,.33)),g=[-1,1].map(y=>{let _=Dt(f,new ee(.13,.03,.03),o,y*.14,1.27,.32);return _.userData.s=y,_});for(let y of[-1,1])Dt(f,Ne(.075,0),o,y*.09,1.02,.36,1.6,.6,.6);Dt(f,new oi(.17,.46,7).rotateX(Math.PI),o,0,.82,.31).rotation.x=.32;let x=Bn(f,0,1.42,0);Dt(x,new he(.31,.34,.24,12,1,!0),l,0,.06,0);for(let y=0;y<7;y++){let _=y/7*Math.PI*2;Dt(x,new oi(.065,.26,4),l,Math.sin(_)*.31,.3,Math.cos(_)*.31)}Dt(x,Ne(.07,0),Hs(i.gem),0,.06,.34);for(let y of[-1,1])Dt(x,Ne(.04,0),Hs(i.gem),y*.2,.06,.27);Dt(x,Ne(.07,0),a,0,.26,0);let m=[-1,1].map(y=>{let _=Bn(f,y*.5,.66,0);Dt(_,new he(.034,.034,.44,5).translate(0,-.22,0),n);let v=Bn(_,0,-.44,0);Dt(v,new he(.03,.03,.42,5).translate(0,-.21,0),n);let E=Cy(v,y,u,a);return Mf(E),{s:y,shoulder:_,elbow:v,hand:E}}),p=[-1,1].map(y=>{let _=Bn(f,y*.17,.1,.3);Dt(_,new he(.04,.04,.46,5).translate(0,-.23,0),n);let v=Bn(_,0,-.46,0);Dt(v,new he(.036,.036,.46,5).translate(0,-.23,0),n);let E=Iy(v,i,a);return{s:y,hip:_,knee:v,shoe:E}});return{root:t,doll:f,crown:x,eyes:d,brows:g,arms:m,legs:p}}var _f=(i,t,e)=>i+(t-i)*e,ta=i=>i*i*(3-2*i),Ly=118,Xi=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function ln(i,t,e){if(typeof i=="number")return i+(t-i)*e;if(Array.isArray(i))return i.map((s,r)=>ln(s,t[r],e));let n={};for(let s in i)n[s]=ln(i[s],t[s],e);return n}var de=(i=0,t=0,e=-.2,n=0,s=.3,r=s,o=.3)=>({sx:i,sz:t,ex:e,ez:n,hc:s,hi:r,hs:o}),He=(i=0,t=0,e=0)=>({hx:i,hz:t,kx:e}),vi=(i={})=>({rootZ:.95,y:.88,x:0,rx:0,ry:0,rz:0,crownY:0,crownSpin:0,arms:[de(0,-.25),de(0,.25)],legs:[He(0,-.06),He(0,.06)],...i});function bc(i){return vi({rootZ:0,y:.72,rz:.04*Math.sin(i*.6),rx:-.08,arms:[de(-.2,-.25,-.3,0,.45),de(-.2,.25,-.3,0,.45)],legs:[He(-1.35,-.08,1.3),He(-1.35,.08,1.3)]})}function Dy(i){return vi({rx:.22,y:.88+.04*Math.abs(Math.sin(i*10)),rz:.04*Math.sin(i*14),arms:[de(-1.55,.15,-.1,0,.95,0,.1),de(.25,.95,-1.9,0,.75,.75,.1)],legs:[He(0,-.16),He(0,.16)]})}function _c(i,t,e=1){let n=Math.pow(Math.cos(Math.PI*t),2)*e;i.y-=.05*n;for(let s of i.legs)s.hx-=.14*n,s.kx+=.28*n;return i}var yc=[i=>{let t=Math.floor(i),e=Xi((i-t)*3),n=t%2===0,s=de(-.35,2.55,0,0,.95,0,.1),r=de(-.55,-.55,-.1,0,.95,0,.1),o=vi({arms:[de(.25,-.95,-1.9,0,.75,.75,.1),ln(n?r:s,n?s:r,e)]});return o.rz=ln(n?.1:-.14,n?-.14:.1,e),o.ry=.25*Math.sin(Math.PI*i/2),o.legs[1].hz=ln(n?.06:.3,n?.3:.06,e),_c(o,i)},i=>{let t=vi({rz:.1*Math.sin(Math.PI*i),ry:.35*Math.sin(Math.PI*i/2)});return t.arms=[-1,1].map(e=>{let n=Math.PI*i+(e<0?0:-1.2);return de(-.15,e*(1.45+.3*Math.sin(n)),0,e*.95*Math.sin(n+1.1),.15+.15*Math.sin(n+2),.1,.7)}),_c(t,i)},i=>{let t=vi();if(i<2){let e=Xi(i/2);t.ry=e*Math.PI*2,t.y=.9+.04*Math.sin(Math.PI*i),t.arms=[de(-.1,-1.55,0,0,.08,.08,.7),de(-.1,1.55,0,0,.08,.08,.7)],t.legs[0]=He(-.7*Math.sin(Math.PI*e),-.1,1.5*Math.sin(Math.PI*e))}else{let e=Xi((i-2)*2.5);t.arms=[de(-.15,-ln(1.55,2.75,e),0,-.3*e,0,0,1),de(-.15,ln(1.55,2.75,e),0,.3*e,0,0,1)],t.legs=[He(0,-.32*e),He(0,.32*e)],t.y=.88+.07*Math.sin(Math.PI*Math.min(1,(i-2)*2)),t.rx=-.08*e}return t},i=>{let t=Math.floor(i),e=i-t,n=t%2,s=Math.sin(Math.PI*e),r=vi({rx:-.12*s,rz:(n?.08:-.08)*s,y:.88+.03*s});return r.arms=[-1,1].map(o=>de(-.25+.2*Math.sin(Math.PI*2*i+o),o*2.45,0,o*.5*Math.sin(Math.PI*4*i),.08,.08,.7)),r.legs[n]=He(-1.2*s,(n?1:-1)*(.08+1*s),.5*s*(1-s)),r.legs[1-n]=He(0,n?-.06:.06,.15),r},i=>{let t=vi();if(i<1){let e=Xi(i);t.y=.88-.22*e,t.rx=.15*e,t.legs=[He(-.7*e,-.1,1.4*e),He(-.7*e,.1,1.4*e)],t.arms=[de(.7*e,-.3,-.2,0,.3+.5*e),de(.7*e,.3,-.2,0,.3+.5*e)]}else if(i<2){let e=i-1,n=4*e*(1-e),s=Math.sin(Math.PI*e);t.y=ln(.66,.88,Math.min(1,e*4))+.75*n,t.rx=-.1*n,t.legs=[He(-.5*s,-1.15*s,0),He(-.5*s,1.15*s,0)],t.arms=[de(-.2,-2.7,0,0,0,0,1),de(-.2,2.7,0,0,0,0,1)]}else if(i<2.6){let e=1-Xi((i-2)/.6);t.y=.88-.18*e,t.legs=[He(-.6*e,-.14,1.2*e),He(-.6*e,.14,1.2*e)],t.arms=[de(-1.2*(1-e),-.5,-.2),de(-1.2*(1-e),.5,-.2)]}else{let e=Xi((i-2.6)*3),n=.25*Math.sin(i*40);t.arms=[de(-1.9*e,-.5,-.2,-n,0,0,1),de(-1.9*e,.5,-.2,n,0,0,1)],t.ry=.2*Math.sin(Math.PI*i)}return t},i=>{let t=vi();if(i<2){let e=i/2,n=4*e*(1-e),s=Math.sin(Math.PI*e);t.crownY=1*n,t.crownSpin=e*Math.PI*4,t.rx=-.25*s,t.y=.88+.05*s,t.arms=[de(-2.5*s,-.35,-.3*s,0,.08,.08,.7),de(-2.5*s,.35,-.3*s,0,.08,.08,.7)],_c(t,i,.5)}else{let e=(i-2)/2,n=Math.sin(Math.PI*e);t.rx=.5*n,t.arms=[de(.5*n,-1.2*n-.25,-.2,0,.3),de(-1.1*n,.25-.65*n,-.2-.6*n,0,.08,.08,.7)],t.legs=[He(0,-.06),He(.35*n,.06,.2*n)]}return t}];function Uy(i){let t=yc.length,e=(i%(t*4)+t*4)%(t*4),n=Math.floor(e/4),s=e-n*4,r=yc[n](s),o=3.6;return s>o&&(r=ln(r,yc[(n+1)%t](0),Xi((s-o)/.4))),r}function na(i,t){i.root.position.z=t.rootZ,i.doll.position.set(t.x,t.y,.06),i.doll.rotation.set(t.rx,t.ry,t.rz),i.crown.position.y=1.42+t.crownY,i.crown.rotation.set(0,t.crownSpin,-.5*t.rz),i.arms.forEach(({shoulder:e,elbow:n,hand:s},r)=>{let o=t.arms[r];e.rotation.set(o.sx,0,o.sz),n.rotation.set(o.ex,0,o.ez),Mf(s,o.hc??.3,o.hi??o.hc??.3,o.hs??.3)}),i.legs.forEach(({hip:e,knee:n},s)=>{let r=t.legs[s];e.rotation.set(r.hx,0,r.hz),n.rotation.set(r.kx,0,0)})}var ea=class{constructor(){this.scene=new Nn,this.scene.add(new yi(16777215,.62));let t=new en(16773340,1.5);t.position.set(-2,4,5),this.scene.add(t);let e=new en(16740568,.7);e.position.set(3,2,-3),this.scene.add(e);let n=new en(7332095,.5);n.position.set(-3,1.5,-2),this.scene.add(n),this.camera=new Pe(34,64/96,.1,40),this.camera.position.set(0,1.62,6.5),this.camera.lookAt(0,1.55,.6),this.rigs={};for(let s of["w","b"]){let r=new ne;r.add(vc(zs[s]));let o=Mc(zs[s]);r.add(o.root),this.scene.add(r),this.rigs[s]={group:r,...o,color:s,phase:s==="w"?0:1.7,wake:0,shout:0}}this.shown=null,this.swap=null,this.t=0,this.clear=new wt,this.bgA=new wt,this.bgB=new wt,this.bgD=new wt,this.beat=0,this.discoOn=0,this.discoHue=0,this.buildDisco()}update(t,e,n="turn"){this.t+=t,e&&e!==this.shown&&!(this.swap&&this.swap.to===e)&&(this.shown&&(this.swap={from:this.shown,to:e,t:0}),this.shown=e),this.swap&&(this.swap.t+=t/.6,this.swap.t>=1&&(this.swap=null));let s=this.t,r=this.rigs[this.shown||"w"];this.beat+=t*(Ly/60)*(1-r.shout),this.discoOn=r.wake*(1-r.shout),this.updateDisco(t,this.beat,this.discoOn);for(let o of Object.values(this.rigs)){let a=o.color===this.shown;o.wake+=((a?1:0)-o.wake)*(1-Math.exp(-t*3)),o.shout+=((a&&n==="shout"?1:0)-o.shout)*(1-Math.exp(-t*9));let l=0;if(this.swap){let c=ta(Math.min(1,this.swap.t)),h=u=>u==="w"?-1:1;o.color===this.swap.to?l=h(o.color)*(1-c)*4.4:o.color===this.swap.from&&(l=-h(this.swap.to)*c*4.4)}o.group.position.x=l,o.group.visible=a||!!(this.swap&&o.color===this.swap.from),this.pose(o,s+o.phase,this.beat+(o.color==="w"?0:12))}}pose(t,e,n){let s=t.wake,r=t.shout,o=ln(bc(e),Uy(n),ta(s));o=ln(o,Dy(e),ta(r)),na(t,o);let a=e%3.1/3.1,l=s>.5&&a>.95?Math.sin((a-.95)/.05*Math.PI):0,c=_f(.2,1,s)*(1-l*.9)*(1+.25*r);for(let h of t.eyes)h.scale.y=Math.max(.08,c);for(let h of t.brows)h.rotation.z=_f(0,-.32*h.userData.s,s)+.25*h.userData.s*r}buildDisco(){let t=new ne;this.scene.add(t),this.disco=t,this.tiles=[];for(let s=0;s<5;s++)for(let r=0;r<3;r++){let o=new Ht(new ee(.8,.04,.62),new _e({color:1118481}));o.position.set((s-2)*.84,0,.42+r*.66),t.add(o),this.tiles.push({m:o,ix:s,iz:r})}this.beams=[16732120,5237247,16769359].map((s,r)=>{let o=new _e({color:s,transparent:!0,opacity:.2,blending:ki,depthWrite:!1,side:We}),a=new Ht(new oi(.8,3.8,10,1,!0).translate(0,-1.9,0),o),l=new ne;return l.position.set((r-1)*1.7,3.6,1),l.add(a),t.add(l),{pivot:l,mat:o,i:r}}),this.ball=new Ht(new gn(.24,1),new an({color:14212328,flatShading:!0,shininess:120,specular:16777215})),this.ball.position.set(0,3,.7),t.add(this.ball);let e=new $e;for(let s=0;s<=8;s++){let r=s/8*Math.PI*2,o=s%2?.05:.17;s?e.lineTo(Math.cos(r)*o,Math.sin(r)*o):e.moveTo(Math.cos(r)*o,Math.sin(r)*o)}let n=new ko(e);this.sparks=Array.from({length:8},()=>{let s=new Ht(n,new _e({color:16777215,transparent:!0,opacity:0,blending:ki,depthWrite:!1}));return t.add(s),{m:s,t:9}}),this.lastBeat=-1}updateDisco(t,e,n){let s=this.t,r=Math.floor(e),o=e-r,a=Math.pow(1-o,2);this.disco.visible=n>.02;for(let{m:l,ix:c,iz:h}of this.tiles){let u=(c+h*2+r)%3===0,f=((r*.13+c*.17+h*.29)%1+1)%1;u?l.material.color.setHSL(f,.9,(.35+.25*a)*n):l.material.color.setHSL(f,.4,.06*n)}for(let l of this.beams)l.pivot.rotation.z=Math.sin(s*1.3+l.i*2.1)*.55,l.pivot.rotation.x=Math.sin(s*.9+l.i)*.3,l.mat.opacity=(.07+.09*a)*n;if(this.ball.rotation.y+=t*2.2,r!==this.lastBeat&&(this.lastBeat=r,n>.5))for(let l=0;l<2;l++){let c=this.sparks.find(h=>h.t>.5);if(!c)break;c.t=0,c.m.position.set((Math.random()-.5)*2.6,.5+Math.random()*2.1,1.2+Math.random()*.6),c.m.material.color.setHSL(Math.random(),.8,.7)}for(let l of this.sparks){l.t+=t;let c=l.t/.5;l.m.material.opacity=c<1?Math.sin(c*Math.PI)*n:0,l.m.scale.setScalar(.5+c),l.m.rotation.z=l.t*4}}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,l=Math.round(e.y*r),c=Math.round((e.y+e.h)*r)-l,h=n.h-l-c,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,c),t.setScissor(o,h,a,c);let d=this.shown||"w";this.bgB.set(zs[d].bg),this.swap&&this.bgB.copy(this.bgA.set(zs[this.swap.from].bg).lerp(this.bgB,ta(Math.min(1,this.swap.t))));let g=this.beat-Math.floor(this.beat);this.bgD.setHSL(this.beat*.04%1,.6,.16+.07*Math.pow(1-g,2)),this.bgB.lerp(this.bgD,.55*this.discoOn),t.setClearColor(this.bgB,1),t.clear(!0,!0,!1),this.camera.aspect=a/c,this.camera.fov=Math.max(34,2*Math.atan(.245/this.camera.aspect)*180/Math.PI),this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var bf=(i,t={})=>new xn({color:i,flatShading:!0,...t}),Mi=(i,t={})=>new an({color:i,flatShading:!0,shininess:70,specular:9076848,...t}),Sc=i=>i<=0?0:i>=1?1:i*i*(3-2*i),Sf=14264378,Yi=.27,Vs=1.02,Af=.74,Ar=(i,t)=>new C((i-3.5)*Yi,Vs,Af+(t+.5)*Yi),Rr=.34,ia=[[0,0],[.33,0],[.33,.07],[.25,.12]],Ny={p:[...ia,[.17,.3],[.12,.38],[.19,.42],[.15,.5],[.08,.6],[0,.63]],r:[...ia,[.21,.42],[.27,.5],[.27,.68],[0,.68]],n:[...ia,[.2,.3],[0,.3]],b:[...ia,[.2,.42],[.13,.5],[.23,.58],[.21,.7],[.12,.84],[.06,.88],[0,.9]],q:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.62],[.28,.72],[.29,.8],[.2,.88],[.14,.98],[0,1]],k:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.64],[.29,.74],[.29,.84],[.2,.92],[.09,.98],[0,.98]]},Ec={p:.63,r:.68,n:.9,b:.96,q:1.06,k:1.2},Oy=[[-.16,.28],[.16,.28],[.17,.5],[.3,.6],[.31,.72],[.14,.78],[.1,.9],[0,.82],[-.1,.9],[-.13,.76],[-.2,.6],[-.18,.4]];function Fy(i){let e=[new Ps(Ny[i].map(([s,r])=>new j(s,r)),7)],n=(s,r,o,a,l,c)=>new ee(s,r,o).translate(a,l,c);if(i==="r")for(let s=0;s<4;s++){let r=s/4*Math.PI*2+.4;e.push(n(.11,.12,.11,Math.sin(r)*.2,.74,Math.cos(r)*.2))}else if(i==="b")e.push(new gn(.06,0).translate(0,.94,0));else if(i==="q"){e.push(new gn(.08,0).translate(0,1.06,0));for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.push(new oi(.05,.14,4).translate(Math.sin(r)*.22,.92,Math.cos(r)*.22))}}else if(i==="k")e.push(n(.07,.26,.07,0,1.1,0)),e.push(n(.2,.07,.07,0,1.12,0));else if(i==="n"){let s=new $e(Oy.map(([r,o])=>new j(r,o)));e.push(new On(s,{depth:.2,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03,bevelSegments:1,curveSegments:1}).translate(0,0,-.1))}return e}var wc=new Map;function Ef(i,t){wc.has(i)||wc.set(i,Fy(i));let e=new ne;for(let n of wc.get(i))e.add(new Ht(n,t));return e.scale.setScalar(Rr),e.userData.type=i,e}var wf=1.55,sa=1.7;function Rf(i){return i.hand.palm}function By(i,t,e,n=[-1,.3*i.arms[t].s,-.4]){let s=i.arms[t],r=Rf(s),o=new C,a=[...n],l=()=>(s.shoulder.rotation.set(a[0],0,a[1]),s.elbow.rotation.set(a[2],0,0),i.root.updateMatrixWorld(!0),r.getWorldPosition(o),o.distanceToSquared(e)+.002*a[2]*a[2]),c=l();for(let h=.4;h>.002;h*=.6)for(let u=0;u<30;u++){let f=!1;for(let d=0;d<3;d++)for(let g of[h,-h]){let x=a[d];a[d]+=g,d===2&&(a[2]=Math.min(.05,Math.max(-2.6,a[2])));let m=l();m<c?(c=m,f=!0):a[d]=x}if(!f)break}return a}var Tc=[{id:"bagel",label:"\uBCA0\uC774\uAE00 \uD33B \uC6D0",note:"\uD1B5\uD1B5\uD55C \uC7A5\uB09C\uAC10 \uAE00\uC790"},{id:"blackhan",label:"\uAC80\uC740\uACE0\uB515",note:"\uBB35\uC9C1\uD55C \uD3EC\uC2A4\uD130 \uACE0\uB515"},{id:"jua",label:"\uC8FC\uC544",note:"\uB3D9\uAE00\uB3D9\uAE00 \uC190\uAE00\uC528"},{id:"gasoek",label:"\uAC00\uC11D \uC6D0",note:"\uC544\uC8FC \uAD75\uC740 \uBD93 \uD68D"},{id:"grandiflora",label:"\uADF8\uB79C\uB514\uD50C\uB85C\uB77C \uC6D0",note:"\uC6B0\uC544\uD55C \uC138\uB9AC\uD504",bevel:.3},{id:"dohyeon",label:"\uB3C4\uD604",note:"\uAC01\uC9C4 \uAC04\uD310 \uAE00\uC528"},{id:"gugi",label:"\uAD6C\uAE30",note:"\uC624\uB798\uB41C \uAC04\uD310 \uAC19\uC740 \uC7A5\uC2DD\uCCB4"},{id:"yeonsung",label:"\uC5F0\uC131",note:"\uC7A5\uB09C\uC2A4\uB7EC\uC6B4 \uBD93\uAE00\uC528",bevel:.7},{id:"songmyung",label:"\uC1A1\uBA85",note:"\uC61B \uBA85\uC870",bevel:.45},{id:"dongle",label:"\uB3D9\uAE00",note:"\uB9D0\uB791\uD55C \uB465\uADFC \uACE0\uB515"},{id:"moirai",label:"\uBAA8\uC774\uB77C\uC774 \uC6D0",note:"\uC2E0\uBE44\uB85C\uC6B4 \uC7A5\uC2DD \uC138\uB9AC\uD504",bevel:.3}];function ky(i){let t=new Wo,e=0,n=0,s=!0,r=[],o=()=>{if(r.length>2){let a=0;for(let l=0;l<r.length;l++){let[c,h]=r[l],[u,f]=r[(l+1)%r.length];a+=c*f-u*h}Math.abs(a)>n&&(n=Math.abs(a),s=a<0)}r=[]};for(let a of i.p)a[0]==="M"?(o(),t.moveTo(a[1],a[2]),r.push([a[1],a[2]])):a[0]==="L"?(t.lineTo(a[1],a[2]),r.push([a[1],a[2]])):a[0]==="Q"?(t.quadraticCurveTo(a[1],a[2],a[3],a[4]),r.push([a[3],a[4]])):a[0]==="C"&&(t.bezierCurveTo(a[1],a[2],a[3],a[4],a[5],a[6]),r.push([a[5],a[6]]));return o(),t.toShapes(!s)}function Tf(i,t,e,{depth:n=.22,front:s,side:r,curve:o=2,bevel:a=1}={}){let l=e/(i.asc||i.upm*.8),c=new ne,h=[],u=0;for(let d of t){let g=i.glyphs[d];if(!g){u+=(i.space||i.upm*.3)*l;continue}let x=new On(ky(g),{depth:n/l,bevelEnabled:!0,bevelThickness:n*.35/l,bevelSize:e*.03*a/l,bevelSegments:1,curveSegments:o});x.scale(l,l,l);let m=new Ht(x,[s,r]);m.position.x=u,c.add(m),h.push(m),u+=g.a*l}let f=u;for(let d of h)d.position.x-=f/2;return c.userData={w:f,glyphs:h},c}var Gs=class{constructor(){let t=this.scene=new Nn;t.background=new wt(787988),t.fog=new Cs(787988,9,16),t.add(new yi(16777215,.55));let e=new en(16773340,1.45);e.position.set(-2,5,5),t.add(e);let n=new en(16740568,.8);n.position.set(3,2,-3),t.add(n);let s=new en(7332095,.6);s.position.set(-3,1.5,-2),t.add(s),this.camera=new Pe(36,270/480,.1,40),this.camera.position.set(0,4.3,7.6),this.camera.lookAt(0,1.7,1),this.clear=new wt,this.t=0,this.buildStage();let r=zs.w;t.add(vc(r)),this.rig=Mc(r),t.add(this.rig.root);for(let o of this.rig.arms)o.shoulder.scale.set(sa,wf,sa),o.hand.wrist.scale.set(1.25/sa,1.25/wf,1.25/sa);this.base=bc(0),this.base.rx=.12,na(this.rig,this.base),this.buildBoard(),this.solve(),this.scene.add(this.camera),this.text3d=null,this.fontId=null,this.loop=-1,this.flight=null,this.ghosts=[]}buildStage(){let t=this.scene;this.tiles=[];for(let r=0;r<9;r++)for(let o=0;o<5;o++){let a=new Ht(new ee(.78,.04,.6),new _e({color:1118481}));a.position.set((r-4)*.82,-.02,-2.4+o*.64),t.add(a),this.tiles.push({m:a,ix:r,iz:o})}let e=(r,o,a,l,c,h)=>{let u=new _e({color:r,transparent:!0,opacity:o,blending:ki,depthWrite:!1,side:We}),f=new Ht(new oi(c,h,12,1,!0).translate(0,-h/2,0),u),d=new ne;return d.position.set(a,5.6,l),d.add(f),t.add(d),{pivot:d,mat:u,op:o}};this.spot=e(16773320,.14,0,.3,1.5,5.8),this.beams=[e(16732120,.08,-1.8,-.6,.9,6.2),e(5237247,.08,1.8,-.6,.9,6.2)];let n=[];for(let r=0;r<60;r++)n.push((Math.random()-.5)*12,2.5+Math.random()*5,-4-Math.random()*3);let s=new le;s.setAttribute("position",new Ct(n,3)),t.add(new Io(s,new mr({color:12101848,size:2,sizeAttenuation:!1})))}buildBoard(){let t=this.scene,e=Af+4*Yi;t.add(new Ht(new ee(8*Yi+.16,.1,8*Yi+.16).translate(0,Vs-.06,e),Mi(Sf))),t.add(new Ht(new he(.22,.42,Vs-.1,6).translate(0,(Vs-.1)/2,e),bf(5118556)));let n=Mi(14178996,{shininess:40}),s=Mi(2886710,{shininess:40});for(let o=0;o<8;o++)for(let a=0;a<8;a++){let l=Ar(a,o),c=new Ht(new ee(Yi-.012,.03,Yi-.012),(o+a)%2?n:s);c.position.set(l.x,Vs-.015,l.z),t.add(c)}this.white=Mi(16051420,{specular:10129536}),this.black=Mi(2372158,{specular:7315632,shininess:90});let r=(o,a,l,c,h=0)=>{let u=Ef(o,a==="w"?this.white:this.black);return u.position.copy(Ar(l,c)),u.rotation.y=h,this.scene.add(u),u};for(let[o,a,l]of[["r",0,0],["k",4,0],["r",7,0],["p",0,1],["p",1,1],["p",6,1],["p",4,2],["b",5,0],["n",6,3]])r(o,"w",a,l,o==="n"?-Math.PI/2:0);for(let[o,a,l]of[["r",0,7],["k",4,7],["q",3,6],["r",7,7],["p",0,6],["p",1,5],["p",5,6],["p",7,5],["b",2,5],["n",6,7]])r(o,"b",a,l,o==="n"?Math.PI/2:0);this.queenA=Ar(2,1),this.queenB=Ar(2,3),this.queen=r("q","w",2,1),this.stealSq=Ar(5,2),this.victim=null}solve(){let t=this.rig,e=1,n=0,s=(a,l)=>new C(a.x,a.y+l*Rr+.07,a.z),r=(a,l,c)=>new C(a,l,c),o=(a,l,c)=>By(t,a,l,c);this.R={rest:o(e,r(.7,1.16,.4),[-.6,.5,-.8]),hover:o(e,s(this.stealSq,1).add(r(0,.18,0)),[-1.3,.2,-.5]),grab:o(e,s(this.stealSq,.75),[-1.3,.2,-.3]),up:o(e,r(.62,2.55,0),[-2.6,.3,-.4]),back:o(e,r(.75,2.1,-.85),[-3.3,.3,-.6])},this.Lq={a:o(n,s(this.queenA,Ec.q).add(r(0,-.05,0)),[-1.2,-.2,-.5]),b:o(n,s(this.queenB,Ec.q).add(r(0,-.05,0)),[-1.3,-.2,-.3])},this.Lrest=o(n,r(-.7,1.16,.4),[-.6,-.5,-.8])}spawnVictim(t){this.victim&&this.scene.remove(this.victim);let e=["p","n","b","r"][t%4];this.victim=Ef(e,this.black),this.victim.position.copy(this.stealSq),e==="n"&&(this.victim.rotation.y=Math.PI/2),this.scene.add(this.victim),this.victim.userData.h=Ec[e]}update(t){if(this.paused)return;this.t+=t;let e=5.4,n=Math.floor(this.t/e),s=this.t-n*e;n!==this.loop&&(this.loop=n,this.spawnVictim(n),this.held=!1);let r=this.R,o=(v,E,b)=>ln(v,E,Sc(b)),a;s<.3?a=r.rest:s<.9?a=o(r.rest,r.hover,(s-.3)/.6):s<1.15?a=o(r.hover,r.grab,(s-.9)/.25):s<1.6?a=o(r.grab,r.up,(s-1.15)/.45):s<1.85?a=ln(r.up,r.back,Math.min(1,(s-1.6)/.22)):s<2.6?a=o(r.back,r.rest,(s-1.85)/.75):a=r.rest;let l;s<1?l=this.Lq.a:s<1.9?l=o(this.Lq.a,this.Lq.b,(s-1)/.9):s<3.6?l=this.Lq.b:s<4.6?l=o(this.Lq.b,this.Lq.a,(s-3.6)/1):l=this.Lq.a;let c=ln(this.base,this.base,0),h=s>1.15&&s<2.4?Math.sin(Math.PI*(s-1.15)/1.25):0;c.ry=-.25*h+.08*Math.sin(this.t*1.6),c.rz=.06*Math.sin(this.t*1.1)-.05*h,c.rx=.12-.12*h,c.y=.72+.015*Math.sin(this.t*3.2);let u=s<.75?.35:s<1.05?.1:s<1.82?.75:s<2.3?0:.4,f=s>.75&&s<1.05?.8:s>1.82&&s<2.3?1:.3;c.arms=[{sx:l[0],sz:l[1],ex:l[2],ez:0,hc:.6,hi:.5,hs:.1},{sx:a[0],sz:a[1],ex:a[2],ez:0,hc:u,hi:u,hs:f}],na(this.rig,c);let d=s>.5&&s<1.9?-.035:.01*Math.sin(this.t*.9);this.rig.eyes.forEach((v,E)=>{v.position.x=(E?.13:-.13)+d,v.scale.y=.75}),this.rig.brows.forEach(v=>{v.rotation.z=v.userData.s>0?.42:-.15,v.position.y=v.userData.s>0?1.29:1.25}),this.rig.root.updateMatrixWorld(!0);let g=v=>Rf(this.rig.arms[v]).getWorldPosition(new C),x=g(0);this.queen.position.set(x.x,Vs,x.z);let m=this.victim;if(s<.3)m.visible=!0,m.scale.setScalar(Rr*Sc(s/.3)),m.position.copy(this.stealSq);else if(s<1.1)m.scale.setScalar(Rr),m.position.copy(this.stealSq);else if(s<1.8){let v=g(1);m.position.set(v.x,v.y-(m.userData.h*Rr+.07)*.75,v.z),m.rotation.x=-1.4*Sc((s-1.15)/.6),this.prevHand=this.curHand,this.curHand=v.clone(),this.flight=null}else{this.flight||(this.flight={v:new C(1.1,3.4,-2.6),w:new C(9,4,6),age:0},this.ghostT=0);let v=this.flight;if(v.age+=t,v.v.y-=7.5*t,m.position.addScaledVector(v.v,t),m.rotation.x+=v.w.x*t,m.rotation.y+=v.w.y*t,m.rotation.z+=v.w.z*t,m.visible=m.position.y>-.5&&v.age<2.2,this.ghostT+=t,m.visible&&this.ghostT>.045&&v.age<1){this.ghostT=0;let E=m.clone();E.traverse(b=>{b.isMesh&&(b.material=new _e({color:9418968,transparent:!0,opacity:.35,depthWrite:!1}))}),this.scene.add(E),this.ghosts.push({g:E,age:0})}}for(let v=this.ghosts.length-1;v>=0;v--){let E=this.ghosts[v];E.age+=t;let b=1-E.age/.35;E.g.traverse(T=>{T.isMesh&&(T.material.opacity=.35*Math.max(0,b))}),b<=0&&(this.scene.remove(E.g),E.g.traverse(T=>T.isMesh&&T.material.dispose()),this.ghosts.splice(v,1))}let p=this.t*(118/60),y=Math.floor(p),_=Math.pow(1-(p-y),2);for(let{m:v,ix:E,iz:b}of this.tiles){let T=(E+b*2+y)%3===0,I=((y*.13+E*.17+b*.29)%1+1)%1;v.material.color.setHSL(I,T?.8:.4,T?.1+.08*_:.035)}this.beams.forEach((v,E)=>{v.pivot.rotation.z=Math.sin(this.t*.9+E*2.4)*.35,v.mat.opacity=v.op*(.7+.3*_)}),this.spot.mat.opacity=this.spot.op*(.92+.08*Math.sin(this.t*2)),this.text3d&&this.text3d.userData.title.userData.glyphs.forEach((v,E,b)=>{let T=((p-E*.25)%b.length+b.length)%b.length,I=T<1?Math.sin(Math.PI*T):0;v.position.y=.06*I,v.rotation.z=.06*I*(E%2?1:-1)})}setFont(t,e){if(this.text3d&&(this.camera.remove(this.text3d),this.text3d.traverse(g=>g.isMesh&&g.geometry.dispose()),this.text3d=null),this.fontId=e?t:null,!e)return;let n=Mi(15222874,{shininess:60,specular:9465968,emissive:5247e3}),s=Mi(Sf,{shininess:90,specular:16773312,emissive:2759172}),r=Mi(15976266,{shininess:90,specular:16773312}),o=bf(7227924),a=new ne,l=Tc.find(g=>g.id===t)?.bevel??1,c=Math.max(.3,l),h=Tf(e,"\uBBFF\uC74C\uC758 \uCCB4\uC2A4",.36,{depth:.16*c,front:n,side:s,bevel:l}),u=Math.min(1,1.42/h.userData.w);h.scale.setScalar(u),h.position.y=1.1-.15*(1-u);let f=Tf(e,"FAITH CHESS",.09,{depth:.045*c,front:r,side:o,bevel:l});f.scale.setScalar(Math.min(1,.78/f.userData.w)),f.position.y=.8,a.add(h,f),a.position.set(0,0,-5),a.rotation.x=.32,a.userData={title:h,sub:f};let d=new en(16774376,1.1);d.position.set(-1.2,2.2,2.5),d.target=h,a.add(d),this.camera.add(a),this.text3d=a}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,l=Math.round(e.y*r),c=Math.round((e.y+e.h)*r)-l,h=n.h-l-c,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,c),t.setScissor(o,h,a,c),t.setClearColor(this.scene.background,1),t.clear(!0,!0,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var St=270,yn=480;function An(i){return{x:(i&7)-3.5,z:3.5-(i>>3)}}var Cf=i=>7.5/Math.tan(i*Math.PI/360),Pf={flat:{fov:14,pos:[0,Cf(14),.0625],target:[0,0,.0625],up:[0,0,-1]},persp:{fov:46,pos:[0,Cf(46),.0625],target:[0,0,.0625],up:[0,0,-1]},tilt:{fov:30,pos:[0,26.3,8.55],target:[0,0,.35],up:[0,1,0]}},If=i=>i*i*(3-2*i);function Hy(i=.07,t=.05){let e=[],n=[],s=(o,a,l,c)=>{for(let h of[o,a,l,o,l,c])e.push(...h),n.push((h[0]+4)/8,(4-h[2])/8)};for(let o=0;o<8;o++)for(let a=0;a<8;a++){let l=a-4,c=a-3,h=3-o,u=4-o,f=l+i,d=c-i,g=h+i,x=u-i,m=-t;s([f,0,g],[f,0,x],[d,0,x],[d,0,g]),s([l,m,h],[f,0,g],[d,0,g],[c,m,h]),s([c,m,h],[d,0,g],[d,0,x],[c,m,u]),s([c,m,u],[d,0,x],[f,0,x],[l,m,u]),s([l,m,u],[f,0,x],[f,0,g],[l,m,h])}let r=new le;return r.setAttribute("position",new Ct(e,3)),r.setAttribute("uv",new Ct(n,2)),r.computeVertexNormals(),r}var ra=class{constructor(t){this.canvas=t,this.renderer=new pr({canvas:t,antialias:!1,powerPreference:"low-power",alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(St,yn,!1),this.renderer.toneMapping=Vn,this.scene=new Nn,this.camera=new Pe(44,St/yn,.5,200),this.bank=new Jo,this.pieces=new Map,this.highlights=[],this.anims=[],this.pendingRemoval=[],this.bursts=[],this.shards=[],this.flights=[],this.ghosts=[],this.puffs=[],this.hitStop=0,this.shake=null,this.revives=[],this.pendingRevive=new Map,this.clocks=[],this.kingStage=new ea,this.kingView=null,this.titleStage=null,this.titleView=!1,this.phoneStage=null,this.phoneView=null,this.rewinding=null,this.mode="title",this.side=1,this.selectedId=null,this.time=0,this.raycaster=new Ds,this.ready=!1,this.lerpCam=null,this.zoomFx=null,this.flash=0,this.lastMoveKey=null,this.theme={...Bs},this.camOverride=null}async init(t=[]){await this.bank.loadOverrides(t),this.ambient=new yi(16777215,1),this.key=new en(16777215,1.6),this.placeKeyLight(),this.fill=new Er(16777215,10,22,2),this.fill.position.set(-7,3,-5),this.fill2=new Er(16777215,10,22,2),this.fill2.position.set(7,2.5,6),this.scene.add(this.ambient,this.key,this.fill,this.fill2),this.table=new Ht(new Wn(40,40),new _e),this.table.rotation.x=-Math.PI/2,this.table.position.y=-.62,this.rim=new Ht(new ee(8.4,.22,8.4),new an({flatShading:!0,specular:4473924,shininess:30})),this.rim.position.y=-.17,this.board=new Ht(Hy(),new an({depthWrite:!1,flatShading:!0})),this.board.renderOrder=2,this.under=new Ht(new Wn(8,8),new _e({color:393994})),this.under.rotation.x=-Math.PI/2,this.under.position.y=-.4,this.scene.add(this.table,this.rim,this.board,this.under),this.hlPool=[];let e=new Wn(.94,.94);for(let n=0;n<28;n++){let s=new Ht(e,new _e({color:16777215,transparent:!0,opacity:.45,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.012,s.visible=!1,s.renderOrder=3,this.scene.add(s),this.hlPool.push(s)}this.burstGeo=new Bo(.3,.46,8),this.ready=!0,this.applyTheme(this.theme,!0)}applyTheme(t,e=!1){let n=this.theme;if(this.theme={...t},!this.ready)return;let s=this.theme,r=this.bank;this.applyRenderSize();let o=rf[s.backdrop];this.scene.background=new wt(o.bg),this.scene.fog=new Cs(o.bg,o.fog[0],o.fog[1]),this.fogSpan=o.fog[1]-o.fog[0],this.ambient.color.set(o.ambient[0]),this.ambient.intensity=o.ambient[1]*.55,this.key.color.set(o.key[0]),this.key.intensity=o.key[1]*1.35,this.fill.color.set(o.fill[0]),this.fill.intensity=o.fill[1],this.fill2.color.set(o.fill2[0]),this.fill2.intensity=o.fill2[1];let a=r.table(s.backdrop);a.repeat.set(10,10),this.table.material.map=a,this.table.material.needsUpdate=!0;let l=r.envMap(),c=r.rim(s.board);c.repeat.set(2,2),Object.assign(this.rim.material,{map:c,envMap:s.board==="glass"||s.board==="tile"?l:null,combine:wr,reflectivity:.25}),this.rim.material.needsUpdate=!0;let h=s.board==="glass";if(Object.assign(this.board.material,{map:r.board(s.board),transparent:h,opacity:h?.62:1,depthWrite:!h,specular:new wt(h?9075350:s.board==="marble"?5592405:1118481),shininess:h?18:30}),this.board.material.needsUpdate=!0,this.iconCache=new Map,e||n.pieces!==s.pieces||!this.mats){this.mats=lf(s.pieces,r);let u=[...this.pieces.entries()].map(([f,d])=>({id:f,sq:d.sq,type:d.type,color:d.color,shield:d.shield}));this.clearPieces(),this.sync(u,null)}}sync(t,e){let n=e?e.from+"-"+e.to+"-"+t.length:null,s=!!e&&n!==this.lastMoveKey;this.lastMoveKey=n;let r=new Set,o=!!this.rewinding&&this.time-this.rewinding.t0<3;this.rewinding=null;for(let a of t){r.add(a.id);let l=this.pieces.get(a.id);if(l&&(l.type!==a.type||l.color!==a.color)&&(this.removeEntry(l),this.pieces.delete(a.id),l=null),!l){let c=pc(a.type,a.color,this.mats),h=An(a.sq);c.position.set(h.x,0,h.z),c.rotation.y=this.side===1?0:Math.PI,this.scene.add(c),l={group:c,type:a.type,color:a.color,sq:a.sq,shield:!1,ring:null},this.pieces.set(a.id,l),o&&(l.pop={t:0});let u=this.pendingRevive.get(a.sq);u!=null&&(this.pendingRevive.delete(a.sq),this.time-u<2&&this.startRevive(l))}if(l.sq!==a.sq){let c=An(l.sq),h=An(a.sq),u=s&&e.from===l.sq&&e.to===a.sq,f=s&&l.type==="r"&&l.sq>>3===e.from>>3&&Math.abs((e.to&7)-(e.from&7))===2;o?this.anims.push({group:l.group,from:c,to:h,t:0,dur:.6,hop:!1}):u||f?this.anims.push({group:l.group,from:c,to:h,t:0,dur:.2,hop:u&&l.type==="n"}):l.group.position.set(h.x,0,h.z),l.sq=a.sq}a.shield&&!l.ring&&(l.ring=cf(),l.group.add(l.ring)),!a.shield&&l.ring&&(l.group.remove(l.ring),l.ring=null),l.shield=a.shield}for(let[a,l]of this.pieces){if(r.has(a))continue;this.pieces.delete(a);let c=s&&l.type==="p"&&l.sq===(e.from&-8|e.to&7);if(s&&(l.sq===e.to||c)){let h=An(e.from),u=An(e.to),f=new C(u.x-h.x,0,u.z-h.z);f.lengthSq()<1e-6&&f.set(0,0,-1),this.pendingRemoval.push({e:l,t:.17,dir:f.normalize()})}else this.removeEntry(l)}}removeEntry(t){this.scene.remove(t.group)}clearPieces(){for(let t of this.pieces.values())this.removeEntry(t);for(let t of this.pendingRemoval)this.removeEntry(t.e);for(let t of this.shards)this.scene.remove(t.mesh),t.mesh.geometry.dispose();this.shards.length=0;for(let t of this.flights)this.scene.remove(t.e.group);for(let t of this.ghosts)this.disposeGhost(t);for(let t of this.puffs)this.scene.remove(t.mesh),t.mesh.material.dispose();this.flights.length=0,this.ghosts.length=0,this.puffs.length=0,this.shake=null,this.hitStop=0,this.pieces.clear(),this.anims.length=0,this.pendingRemoval.length=0;for(let t of this.revives)for(let e of t.shards)this.scene.remove(e.mesh),e.mesh.geometry.dispose();for(let t of this.clocks)this.scene.remove(t.group);this.clocks.length=0,this.revives.length=0,this.pendingRevive.clear(),this.lastMoveKey=null}setHighlights(t){this.highlights=t}setSelected(t){this.selectedId=t}attackZoom(t){let e=gc[this.theme.zoom]||gc.normal;this.zoomFx={t:0,sq:t,preset:e}}setSide(t){if(this.side!==t){this.side=t;for(let e of this.pieces.values())e.group.rotation.y=t===1?0:Math.PI;this.placeKeyLight()}}placeKeyLight(){this.key&&this.key.position.set(-5*this.side,9,-4*this.side)}setNativeSize(t,e){this.nativeSize={w:Math.max(1,Math.round(t)),h:Math.max(1,Math.round(e))},this.ready&&this.applyRenderSize()}renderSize(t=this.theme){let e=uf[t.pixel];return e==null?this.nativeSize||{w:St*2,h:yn*2}:{w:Math.round(St*e),h:Math.round(yn*e)}}applyRenderSize(){let{w:t,h:e}=this.renderSize();this.renderer.setSize(t,e,!1)}basePose(){if(this.camOverride)return{up:new C(0,1,0),...this.camOverride};let t=Pf[this.theme.camera]||Pf.flat,e=this.side;return{pos:new C(t.pos[0]*e,t.pos[1],t.pos[2]*e),target:new C(t.target[0]*e,t.target[1],t.target[2]*e),up:new C(t.up[0]*e,t.up[1],t.up[2]*e),fov:t.fov}}setMode(t){this.mode==="title"&&t==="game"&&(this.lerpCam={t:0,from:this.camera.position.clone(),fromTarget:this.curTarget?this.curTarget.clone():new C,fromFov:this.camera.fov,fromUp:this.camera.up.clone()}),this.mode=t}pickSquare(t,e){let n=new j(t/St*2-1,-(e/yn)*2+1);this.raycaster.setFromCamera(n,this.camera);let s=this.raycaster.intersectObject(this.board,!1);if(!s.length)return-1;let{x:r,z:o}=s[0].point,a=Math.floor(r+4),l=Math.floor(4-o);return a<0||a>7||l<0||l>7?-1:l*8+a}squareToScreen(t){let e=An(t),n=new C(e.x,.1,e.z).project(this.camera);return{x:(n.x+1)/2*St,y:(1-n.y)/2*yn}}update(t){this.time+=t;let e=this.time,n=this.camera,s,r,o,a;if(this.mode==="title"){let c=e*.12;s=new C(Math.sin(c)*9.5,10.5+Math.sin(e*.3)*.4,Math.cos(c)*9.5),r=new C(0,.6,0),o=46,a=new C(0,1,0)}else{let c=this.basePose();if(s=c.pos.clone(),r=c.target.clone(),o=c.fov,a=c.up.clone(),this.lerpCam){this.lerpCam.t=Math.min(1,this.lerpCam.t+t/.9);let h=1-Math.pow(1-this.lerpCam.t,3);s.lerpVectors(this.lerpCam.from,s,h),r.lerpVectors(this.lerpCam.fromTarget,r,h),a.lerpVectors(this.lerpCam.fromUp,a,h).normalize(),o=this.lerpCam.fromFov+(o-this.lerpCam.fromFov)*h,this.lerpCam.t>=1&&(this.lerpCam=null)}if(this.zoomFx){let h=this.zoomFx,u=h.preset;h.t+=t;let f=.2,d=.5,g=u.dur,x=h.t<f?1-Math.pow(1-h.t/f,2):h.t<d?1:h.t<g?1-If((h.t-d)/(g-d)):0,m=An(h.sq),p=new C(m.x,.3,m.z),y=p.clone().sub(s);if(s.addScaledVector(y,u.s*x),r.lerp(p,.85*x),u.shake&&h.t>.16&&h.t<.42){let _=u.shake*(1-(h.t-.16)/.26);s.x+=(Math.random()*2-1)*_,s.y+=(Math.random()*2-1)*_}u.flash&&h.t>.16&&!h.flashed&&(this.flash=u.flash,h.flashed=!0),h.t>=g&&(this.zoomFx=null)}if(this.shake){let h=this.shake;h.t+=t;let u=h.amp*Math.max(0,1-h.t/.32);s.x+=(Math.random()*2-1)*u,s.z+=(Math.random()*2-1)*u,r.x+=(Math.random()*2-1)*u*.5,h.t>=.32&&(this.shake=null)}}if(n.up.copy(a),n.position.copy(s),n.lookAt(r),this.curTarget=r,this.scene.fog){let c=s.distanceTo(r);this.scene.fog.near=c+3,this.scene.fog.far=c+3+(this.fogSpan||14)}n.fov!==o&&(n.fov=o,n.updateProjectionMatrix()),this.flash=Math.max(0,this.flash-t*3.2);let l=this.hitStop>0?0:t;this.hitStop=Math.max(0,this.hitStop-t);for(let c=this.anims.length-1;c>=0;c--){let h=this.anims[c];h.t=Math.min(1,h.t+l/h.dur);let u=If(h.t),f=Math.sin(u*Math.PI)*(h.hop?.3:.12);h.group.position.set(h.from.x+(h.to.x-h.from.x)*u,f,h.from.z+(h.to.z-h.from.z)*u),h.group.scale.setScalar(1+f),h.group.userData.shadow.position.set(.06+f*.5,.004-f,.07+f*.5),h.t>=1&&(h.group.scale.setScalar(1),this.anims.splice(c,1))}for(let c=this.pendingRemoval.length-1;c>=0;c--){let h=this.pendingRemoval[c];h.t-=t,h.t<=0&&(this.pendingRemoval.splice(c,1),h.dir?this.launch(h.e,h.dir):(this.removeEntry(h.e),this.spawnBurst(h.e.sq)))}this.updateFlights(l,t);for(let c=this.shards.length-1;c>=0;c--){let h=this.shards[c];h.t+=t,h.v.y-=11*t,h.mesh.position.addScaledVector(h.v,t),h.mesh.position.y<.03&&(h.mesh.position.y=.03,h.v.y*=-.35,h.v.x*=.6,h.v.z*=.6,h.w.multiplyScalar(.6)),h.mesh.rotation.x+=h.w.x*t,h.mesh.rotation.y+=h.w.y*t,h.mesh.rotation.z+=h.w.z*t;let u=Math.max(0,Math.min(1,(h.life-h.t)/.35));h.mesh.scale.setScalar(u),h.t>=h.life&&(this.scene.remove(h.mesh),h.mesh.geometry.dispose(),this.shards.splice(c,1))}this.updateClocks(t);for(let c=this.revives.length-1;c>=0;c--){let h=this.revives[c];h.t+=t;let u=Math.round((1-Math.min(1,h.t/h.dur))*(h.N-1));for(let f of h.shards){let d=u*7,g=f.track;f.mesh.position.set(g[d],g[d+1],g[d+2]),f.mesh.rotation.set(g[d+3],g[d+4],g[d+5]),f.mesh.scale.setScalar(Math.max(.001,g[d+6]))}if(h.t>=h.dur){for(let g of h.shards)this.scene.remove(g.mesh),g.mesh.geometry.dispose();let{body:f,shadow:d}=h.e.group.userData;f.visible=!0,d.visible=!0,h.e.reviving=!1,h.e.pop={t:0},this.spawnBurst(h.e.sq,8382975),this.flash=Math.max(this.flash,.3),this.revives.splice(c,1)}}for(let c=this.bursts.length-1;c>=0;c--){let h=this.bursts[c];h.t+=t;let u=h.t/.35;h.mesh.scale.setScalar(1+u*1.4),h.mesh.material.opacity=Math.max(0,.9*(1-u)),u>=1&&(this.scene.remove(h.mesh),h.mesh.material.dispose(),this.bursts.splice(c,1))}for(let[c,h]of this.pieces){if(!this.anims.some(u=>u.group===h.group)){let u=c===this.selectedId?.14+Math.sin(e*6)*.03:0;h.group.position.y=u;let f=1+u;if(h.pop){h.pop.t+=t;let d=Math.min(1,h.pop.t/.35);f*=1+Math.sin(d*Math.PI)*.25,d>=1&&(h.pop=null)}h.group.scale.setScalar(f),h.group.userData.shadow.position.set(.06+u*.5,.004-u,.07+u*.5)}h.ring&&(h.ring.rotation.z=e*1.5,h.ring.material.color.setHSL(.52,1,.6+Math.sin(e*4)*.15))}for(let c=0;c<this.hlPool.length;c++){let h=this.hlPool[c],u=this.highlights[c];if(!u){h.visible=!1;continue}let f=An(u.sq);h.position.set(f.x,.012,f.z),h.material.color.set(u.color),h.material.opacity=u.opacity??.45,h.visible=!0}}shatter(t){let e=[...this.pieces.entries()].find(([,l])=>l.sq===t);if(!e)return;let[n,s]=e;this.pieces.delete(n),s.group.updateMatrixWorld(!0);let r=An(t),o=new C(r.x,.15,r.z),a=[new C,new C,new C];s.group.userData.body.traverse(l=>{if(!l.isMesh)return;let c=l.material.clone();c.side=We;let h=l.geometry.attributes.position;for(let u=0;u+2<h.count;u+=3){for(let m=0;m<3;m++)a[m].fromBufferAttribute(h,u+m).applyMatrix4(l.matrixWorld);let f=a[0].clone().add(a[1]).add(a[2]).divideScalar(3),d=new le;d.setAttribute("position",new Ct(a.flatMap(m=>[m.x-f.x,m.y-f.y,m.z-f.z]),3)),d.computeVertexNormals();let g=new Ht(d,c);g.position.copy(f),this.scene.add(g);let x=f.clone().sub(o);x.y=0,x.lengthSq()<1e-6&&x.set(Math.random()-.5,0,Math.random()-.5),x.normalize().multiplyScalar(1.6+Math.random()*2.4),this.shards.push({mesh:g,life:1.3+Math.random()*.4,t:0,v:new C(x.x,2.2+Math.random()*3.2,x.z),w:new C((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18)})}}),this.scene.remove(s.group),this.spawnBurst(t,16734794),this.flash=Math.max(this.flash,.35)}reviveAt(t){this.spawnClock(t);let e=[...this.pieces.values()].find(n=>n.sq===t);e?this.startRevive(e):this.pendingRevive.set(t,this.time)}rewind(){this.rewinding={t0:this.time},this.spawnClock(-1,{scale:2.1,life:1.6})}spawnClock(t,e={}){if(!this.clockProto){let s=new ne,r=h=>new xn({color:h,flatShading:!0}),o=new an({color:14264378,flatShading:!0,shininess:70,specular:9076848}),a=(h,u,f=0,d=0,g=0)=>{let x=new Ht(h,u);return x.position.set(f,d,g),s.add(x),x};a(new he(.4,.4,.16,12).rotateX(Math.PI/2),r(13119546)),a(new he(.32,.32,.02,12).rotateX(Math.PI/2),r(16774104),0,0,.085);for(let h=0;h<12;h++){let u=h/12*Math.PI*2,f=h%3===0;a(new ee(f?.04:.025,f?.07:.04,.01),r(1706512),Math.sin(u)*.26,Math.cos(u)*.26,.1).rotation.z=-u}for(let h of[-1,1])a(new Ho(.14,8,4,0,Math.PI*2,0,Math.PI/2),o,h*.25,.36,0).rotation.z=-h*.55,a(new he(.035,.05,.14,5),o,h*.24,-.42,0).rotation.z=h*.4;a(new ee(.06,.1,.06),o,0,.45,0);let l=new ne;l.position.z=.11,s.add(l),l.add(new Ht(new ee(.035,.27,.015).translate(0,.12,0),r(11539486)));let c=new ne;c.position.z=.115,s.add(c),c.add(new Ht(new ee(.05,.18,.015).translate(0,.08,0),r(1706512))),a(new he(.035,.035,.03,6).rotateX(Math.PI/2),o,0,0,.12),this.clockIdx={minute:s.children.indexOf(l),hour:s.children.indexOf(c)},this.clockProto=s}let n=this.clockProto.clone();n.userData={minute:n.children[this.clockIdx.minute],hour:n.children[this.clockIdx.hour]},n.traverse(s=>{s.renderOrder=6}),this.scene.add(n),this.clocks.push({group:n,sq:t,t:0,life:e.life||1.35,size:e.scale||1})}updateClocks(t){if(!this.clocks.length)return;let e=this.camera,n=new C(1,0,0).applyQuaternion(e.quaternion),s=new C(0,1,0).applyQuaternion(e.quaternion),r=new C(0,0,1).applyQuaternion(e.quaternion);for(let o=this.clocks.length-1;o>=0;o--){let a=this.clocks[o];if(a.t+=t,a.sq<0)a.group.position.set(0,1.6,0).addScaledVector(r,1.5);else{let u=An(a.sq);a.group.position.set(u.x,.9,u.z).addScaledVector(n,.62).addScaledVector(s,.5).addScaledVector(r,.6)}a.group.quaternion.copy(e.quaternion);let l=a.t/.2,c=1.7,h=a.t<.2?1+(c+1)*Math.pow(l-1,3)+c*Math.pow(l-1,2):1;a.t>a.life-.25&&(h*=Math.max(0,(a.life-a.t)/.25)),a.group.scale.setScalar(Math.max(.001,h*.9*a.size)),a.group.rotateZ(.06*Math.sin(a.t*22)*Math.max(0,1-a.t)),a.group.userData.minute.rotation.z=a.t*13,a.group.userData.hour.rotation.z=.9+a.t*1.6,a.t>=a.life&&(this.scene.remove(a.group),this.clocks.splice(o,1))}}startRevive(t){if(t.reviving)return;t.reviving=!0,t.group.updateMatrixWorld(!0);let{body:e,shadow:n}=t.group.userData,s=An(t.sq),r=new C(s.x,.15,s.z),o=1.1,a=1/60,l=Math.round(o/a)+1,c=[],h=[new C,new C,new C];e.traverse(u=>{if(!u.isMesh)return;let f=u.material.clone();f.side=We;let d=u.geometry.attributes.position;for(let g=0;g+2<d.count;g+=3){for(let I=0;I<3;I++)h[I].fromBufferAttribute(d,g+I).applyMatrix4(u.matrixWorld);let x=h[0].clone().add(h[1]).add(h[2]).divideScalar(3),m=new le;m.setAttribute("position",new Ct(h.flatMap(I=>[I.x-x.x,I.y-x.y,I.z-x.z]),3)),m.computeVertexNormals();let p=new Ht(m,f),y=x.clone().sub(r);y.y=0,y.lengthSq()<1e-6&&y.set(Math.random()-.5,0,Math.random()-.5),y.normalize().multiplyScalar(1.6+Math.random()*2.4);let _=new C(y.x,2.2+Math.random()*3.2,y.z),v=new C((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18),E=x.clone(),b=new C,T=new Float32Array(l*7);for(let I=0;I<l;I++){let M=Math.max(0,Math.min(1,(o-I*a)/.3));T.set([E.x,E.y,E.z,b.x,b.y,b.z,M],I*7),_.y-=11*a,E.addScaledVector(_,a),E.y<.03&&(E.y=.03,_.y*=-.35,_.x*=.6,_.z*=.6,v.multiplyScalar(.6)),b.addScaledVector(v,a)}p.scale.setScalar(.001),this.scene.add(p),c.push({mesh:p,track:T})}}),e.visible=!1,n.visible=!1,this.revives.push({e:t,shards:c,t:0,dur:o,N:l})}pieceIcon(t,e,n=34){if(!this.ready)return null;let s=`${t}${e}${n}`;this.iconCache||(this.iconCache=new Map);let r=this.iconCache.get(s);if(r)return r;let o=n*2,a=this.renderer,l=new Nn;l.add(this.ambient.clone(),this.fill.clone(),this.fill2.clone());let c=this.key.clone();c.position.set(-5,9,-4),l.add(c);let h=pc(t,e,this.mats);h.userData.shadow.visible=!1,l.add(h);let u=new Rs(-.52,.52,.52,-.52,.1,30);u.position.set(0,10,0),u.up.set(0,0,-1),u.lookAt(0,0,0);let f=new Un(o,o);f.texture.colorSpace=fe;let d=a.getRenderTarget(),g=a.getClearColor(new wt),x=a.getClearAlpha();a.setRenderTarget(f),a.setClearColor(0,0),a.clear(!0,!0,!1),a.render(l,u);let m=new Uint8Array(o*o*4);a.readRenderTargetPixels(f,0,0,o,o,m),a.setRenderTarget(d),a.setClearColor(g,x),f.dispose();let p=document.createElement("canvas");p.width=p.height=o;let y=p.getContext("2d"),_=y.createImageData(o,o);for(let E=0;E<o;E++)_.data.set(m.subarray((o-1-E)*o*4,(o-E)*o*4),E*o*4);y.putImageData(_,0,0),r=document.createElement("canvas"),r.width=r.height=n;let v=r.getContext("2d");return v.imageSmoothingEnabled=!0,v.imageSmoothingQuality="high",v.drawImage(p,0,0,n,n),this.iconCache.set(s,r),r}launch(t,e){let n=t.group;n.userData.shadow.visible=!1;let s=12+Math.random()*3,r=new C(-e.z,0,e.x).multiplyScalar((Math.random()-.5)*3),o=new C(e.x*s,9.5+Math.random()*2,e.z*s).add(r),a=new C(e.z,0,-e.x).normalize(),l=new C(0,1,0);this.flights.push({e:t,v:o,axis:a,twist:l,spin:20+Math.random()*10,twistSpin:(Math.random()-.5)*14,t:0,ghostT:0,bounced:!1}),this.spawnImpact(n.position.clone(),e),this.hitStop=.07,this.shake={t:0,amp:.16},this.flash=Math.max(this.flash,.3)}updateFlights(t,e){let n=new Gn;for(let s=this.flights.length-1;s>=0;s--){let r=this.flights[s],o=r.e.group;r.t+=t,r.v.y-=9*t,o.position.addScaledVector(r.v,t),n.setFromAxisAngle(r.axis,r.spin*t),o.quaternion.premultiply(n),n.setFromAxisAngle(r.twist,r.twistSpin*t),o.quaternion.premultiply(n),o.position.y<0&&r.v.y<0&&!r.bounced&&(o.position.y=0,r.v.y*=-.5,r.v.x*=.75,r.v.z*=.75,r.spin*=.6,r.bounced=!0,this.spawnDust(o.position.clone(),4)),r.ghostT+=t,r.ghostT>.03&&r.t<.55&&t>0&&(r.ghostT=0,this.spawnGhost(o,.45*(1-r.t/.55)));let a=Math.hypot(o.position.x,o.position.z);(r.t>1.6||a>14||o.position.y<-3)&&(this.scene.remove(o),this.flights.splice(s,1))}for(let s=this.ghosts.length-1;s>=0;s--){let r=this.ghosts[s];r.t+=e;let o=r.t/.22;r.mat.opacity=Math.max(0,r.a0*(1-o)),o>=1&&(this.disposeGhost(r),this.ghosts.splice(s,1))}for(let s=this.puffs.length-1;s>=0;s--){let r=this.puffs[s];r.t+=e;let o=r.t/r.life;r.v.multiplyScalar(Math.max(0,1-e*3)),r.mesh.position.addScaledVector(r.v,e),r.mesh.scale.setScalar(r.s0*(1+o*1.5)),r.mesh.material.opacity=Math.max(0,.75*(1-o)),o>=1&&(this.scene.remove(r.mesh),r.mesh.material.dispose(),this.puffs.splice(s,1))}}spawnGhost(t,e){let n=new _e({color:16774880,transparent:!0,opacity:e,depthWrite:!1}),s=t.userData.body.clone();s.traverse(o=>{o.isMesh&&(o.material=n)});let r=new ne;r.position.copy(t.position),r.quaternion.copy(t.quaternion),r.scale.copy(t.scale),r.add(s),r.renderOrder=3,this.scene.add(r),this.ghosts.push({group:r,mat:n,t:0,a0:e})}disposeGhost(t){this.scene.remove(t.group),t.mat.dispose()}spawnImpact(t,e){this.spawnDust(t,7,e)}spawnDust(t,e,n=null){this.dustGeo||(this.dustGeo=new gn(.13,0));for(let s=0;s<e;s++){let r=Math.random()*Math.PI*2,o=new C(Math.cos(r),0,Math.sin(r)).multiplyScalar(1.5+Math.random()*2);n&&o.addScaledVector(n,-1.2),o.y=.6+Math.random()*.8;let a=new Ht(this.dustGeo,new _e({color:14208960,transparent:!0,opacity:.75,depthWrite:!1}));a.position.set(t.x,.1,t.z);let l=.6+Math.random()*.6;a.scale.setScalar(l),a.renderOrder=4,this.scene.add(a),this.puffs.push({kind:"dust",mesh:a,v:o,s0:l,t:0,life:.45+Math.random()*.2})}}spawnBurst(t,e=16773824){let n=An(t),s=new Ht(this.burstGeo,new _e({color:e,transparent:!0,opacity:.9,depthWrite:!1,side:We}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.03,n.z),s.renderOrder=4,this.scene.add(s),this.bursts.push({mesh:s,t:0})}render(t){if(this.ready){if(this.update(t),this.titleView){this.titleStage||(this.titleStage=new Gs),this.titleStage.update(t);let e=this.renderer.domElement;this.titleStage.render(this.renderer,{x:0,y:0,w:270,h:480},{w:e.width,h:e.height})}else this.renderer.render(this.scene,this.camera);if(this.kingView){this.kingStage.update(t,this.kingView.shown,this.kingView.mode);let e=this.renderer.domElement;this.kingStage.render(this.renderer,this.kingView.rect,{w:e.width,h:e.height})}if(this.phoneView&&this.phoneStage){this.phoneStage.update(t);let e=this.renderer.domElement;this.phoneStage.render(this.renderer,this.phoneView.rect,{w:e.width,h:e.height})}}}};var At=270,Ze=480,bi={9:"10px Galmuri9",11:"12px Galmuri11","11b":"bold 12px Galmuri11",14:"15px Galmuri14"},Ac={9:10,11:12,"11b":12,14:15},Lf=Object.values(bi),ie={red:"#8e1a1a",redHi:"#d4382c",gold:"#e8b93a",cyan:"#7fe9ff",green:"#7ad17a",warn:"#ff6b6b",late:"#ff9f43"},oa=class{constructor(t){this.c=t,this.ctx=t.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.buttons=[],this.pressedId=null,this.off=document.createElement("canvas"),this.offCtx=this.off.getContext("2d"),this.qrCache=new Map,this.setTheme({frame:"deco",lettering:"crown"})}setTheme(t){this.frameId=t.frame,this.letterId=t.lettering,this.pal=Tr[t.frame]||Tr.deco}begin(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,At,Ze),this.ctx.imageSmoothingEnabled=!1,this.buttons=[]}rect(t,e,n,s,r){this.ctx.fillStyle=r,this.ctx.fillRect(t,e,n,s)}box(t,e,n,s,r){let o=this.ctx;o.fillStyle=r,o.fillRect(t,e,n,1),o.fillRect(t,e+s-1,n,1),o.fillRect(t,e,1,s),o.fillRect(t+n-1,e,1,s)}text(t,e,n,{font:s=11,color:r=this.pal.ink,align:o="left",shadow:a=!0,alpha:l=1}={}){let c=this.ctx;c.save(),c.globalAlpha=l,c.font=bi[s]||bi[11],c.textBaseline="top",c.textAlign="left";let h=o==="left"?0:c.measureText(t).width,u=Math.round(o==="center"?e-h/2:o==="right"?e-h:e),f=Math.round(n);a&&(c.fillStyle="#000",c.fillText(t,u+1,f+1)),c.fillStyle=r,c.fillText(t,u,f),c.restore()}measure(t,e=11){return this.ctx.font=bi[e]||bi[11],Math.ceil(this.ctx.measureText(t).width)}bigText(t,e,n,{scale:s=2,font:r=14,color:o=this.pal.ink,align:a="center",shadow:l=!0}={}){let c=this.measure(t,r)+4,h=Ac[r]+4,u=this.prepOff(c,h),f=Math.round(a==="center"?e-c*s/2:a==="right"?e-c*s:e);return l&&(u.fillStyle="#000",u.font=bi[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f+s,n+s,c*s,h*s),u.clearRect(0,0,c,h)),u.fillStyle=o,u.font=bi[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f,n,c*s,h*s),{w:c*s,h:h*s}}prepOff(t,e){this.off.width=t,this.off.height=e;let n=this.offCtx;return n.imageSmoothingEnabled=!1,n.clearRect(0,0,t,e),n.textBaseline="top",n}letter(t,e,n,{scale:s=2,font:r=14,align:o="center",spacing:a=0}={}){let l=Ac[r]+4,c=this.measure(t,r)+6+Math.max(0,t.length-1)*a,h=o==="center"?Math.round(e-c*s/2):o==="right"?e-c*s:e,u=[];{let E=3;for(let b of t){let T=this.measure(b,r);u.push([E,T]),E+=T+a}}let f=this.letterId,d=f==="crown"||f==="robe"||f==="velvet"||f==="disco",x=(E,b=0,T=0)=>{let I=this.prepOff(c,l);I.font=bi[r],I.fillStyle="#fff";for(let[M,w]of d?[[0,0],[1,0],[0,1],[1,1]]:[[0,0]])a?u.forEach(([N],G)=>I.fillText([...t][G],N+M,1+w)):I.fillText(t,3+M,1+w);typeof E=="function"?(I.globalCompositeOperation="source-atop",E(I)):(I.globalCompositeOperation="source-in",I.fillStyle=E,I.fillRect(0,0,c,l)),I.globalCompositeOperation="source-over",this.ctx.drawImage(this.off,h+b*s,n+T*s,c*s,l*s)},m=E=>{let b=this.offCtx.createLinearGradient(0,0,0,l);return E.forEach(([T,I])=>b.addColorStop(T,I)),b},p=(E,b,T,I=7,M=null)=>w=>{w.fillStyle=E,w.fillRect(0,0,c,l);for(let N=-I;N<c+I;N+=I)w.fillStyle=b,w.beginPath(),w.moveTo(N,0),w.lineTo(N+I,0),w.lineTo(N+I*.35,l*.55),w.closePath(),w.fill(),w.fillStyle=T,w.beginPath(),w.moveTo(N+I,l),w.lineTo(N,l),w.lineTo(N+I*.65,l*.48),w.closePath(),w.fill();M&&M(w)},y=1/s,_=s>=3?3:s===2?2:1,v=(E,b)=>{for(let T=0;T<=_;T++)for(let I of[-1,1])x(E,I,T);x(E,0,-1),x(E,0,_+1),b.forEach((T,I)=>x(T,0,_-I))};if(f==="neon"){x("#2a0830",1,2);for(let[E,b]of[[-1,0],[1,0],[0,-1],[0,1]])x("#3fd8ff",E,b);x(m([[0,"#ffe0fa"],[.5,"#ff6ad8"],[1,"#c02aa8"]]))}else if(f==="chrome")x("#000",1,2),x("#2a2c34",1,1),x(m([[0,"#ffffff"],[.42,"#c8ccd8"],[.5,"#3a3e4c"],[.62,"#e8ecf4"],[1,"#7a7e8c"]]));else if(f==="crown")v("#08040c",["#1e0e2c","#3a1e52","#5a3a78"].slice(0,_)),x(p("#d6d8e6","#ffffff","#8e90a8",7,s>=2?E=>{E.fillStyle="#4fd0ff";for(let[b,T]of u)E.fillRect(b+Math.floor(T/2),Math.round(l*.45),2,2)}:null));else if(f==="robe"){v("#0c0408",["#3a0a12","#5a1220","#7a1a26"].slice(0,_));for(let[E,b]of[[-1,0],[1,0],[0,-1],[0,1]])x("#f8f4ea",E*y,b*y);x(p("#c8343f","#ec6a6e","#8a1e2c",7,E=>{E.fillStyle="#f2c14e",E.fillRect(0,Math.round(l*.6),c,1)}))}else if(f==="velvet"){v("#0a0408",["#5a3a10","#8a5e18","#b8862a"].slice(0,_));for(let[E,b]of[[-1,0],[1,0],[0,-1],[0,1]])x("#f3dc8a",E*y,b*y);x(p("#7a2a8a","#b25ac4","#4e1a5c"))}else if(f==="disco"){let E=Math.floor(performance.now()/508.47457627118644);v("#08040c",["#140820","#24103a","#36184e"].slice(0,_));for(let[b,T]of[[-1,0],[1,0],[0,-1],[0,1]])x("#ffffff",b*y,T*y);x(b=>u.map((T,I)=>[T,I]).reverse().forEach(([[T,I],M])=>{let w=((M+E)*47%360+360)%360,N=M?T:0,G=M===u.length-1?c:T+I+1;b.fillStyle=`hsl(${w},92%,56%)`,b.fillRect(N,0,G-N,l),b.fillStyle=`hsl(${w},100%,78%)`,b.fillRect(N,0,G-N,Math.round(l*.42))}))}else x("#000",1,2),x("#6e4a14",1,1),x(m([[0,"#fff6d0"],[.35,"#f3dc8a"],[.5,"#a87a2a"],[.62,"#f3dc8a"],[1,"#8a5e18"]]));return{w:c*s,h:l*s}}hLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,n,1),r.fillStyle=s.line,r.fillRect(t,e+1,n,1),r.fillStyle=s.lineLo,r.fillRect(t,e+2,n,1)}vLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,1,n),r.fillStyle=s.line,r.fillRect(t+1,e,1,n),r.fillStyle=s.lineLo,r.fillRect(t+2,e,1,n)}glow(t,e,n,s,r){let o=this.ctx;o.save(),o.globalAlpha=.25,this.box(t-1,e-1,n+2,s+2,r),o.globalAlpha=.12,this.box(t-2,e-2,n+4,s+4,r),o.restore(),this.box(t,e,n,s,r)}frame(){let t=this.pal,e=this.ctx,n=2,s=2,r=At-4,o=Ze-4;if(this.frameId==="plain"){this.box(4,4,At-8,Ze-8,t.line),e.fillStyle=t.lineHi;for(let[a,l]of[[4,4],[At-12,4],[4,Ze-5],[At-12,Ze-5]])e.fillRect(a,l,8,1);return}if(this.frameId==="neon"){this.glow(4,4,At-8,Ze-8,t.accent),this.box(7,7,At-14,Ze-14,t.lineLo);return}this.hLine(n,s,r),this.hLine(n,s+o-3,r),this.vLine(n,s,o),this.vLine(n+r-3,s,o),e.fillStyle=t.lineLo,e.fillRect(n+5,s+5,r-10,1),e.fillRect(n+5,s+o-6,r-10,1),e.fillRect(n+5,s+5,1,o-10),e.fillRect(n+r-6,s+5,1,o-10);for(let[a,l,c,h]of[[n,s,1,1],[n+r,s,-1,1],[n,s+o,1,-1],[n+r,s+o,-1,-1]])for(let u=0;u<3;u++){let f=a+c*(3+u*3)-(c<0?6:0),d=l+h*(3+u*3)-(h<0?6:0);e.fillStyle=t.line,e.fillRect(f,d,6,6),e.fillStyle=t.lineHi,e.fillRect(f,d,2,2)}}pillar(t,e,n){let s=this.pal,r=this.ctx;if(this.frameId==="plain"){this.rect(t+5,e,1,n-e,s.line);return}if(this.frameId==="neon"){this.rect(t+4,e,1,n-e,s.accent),this.rect(t+7,e+6,1,n-e-12,s.line);return}for(let o=0;o<3;o++)this.vLine(t+o*4,e+10,n-e-10);r.fillStyle=s.lineLo,r.fillRect(t-3,n-4,17,4),r.fillStyle=s.lineHi,r.fillRect(t-3,n-4,17,1),r.fillStyle=s.lineLo,r.fillRect(t-2,e+8,15,3),r.fillStyle=s.lineHi,r.fillRect(t-2,e+8,15,1),r.fillStyle=s.accentLo,r.beginPath(),r.arc(t+5.5,e+3.5,5,0,Math.PI*2),r.fill(),r.fillStyle=s.accent,r.beginPath(),r.arc(t+5,e+3,4,0,Math.PI*2),r.fill(),r.fillStyle=s.accentHi,r.fillRect(t+3,e+1,2,2)}panel(t,e,n,s,{fill:r=this.pal.panel,border:o=this.pal.ink,shadow:a=!0}={}){a&&this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),o&&this.box(t,e,n,s,o)}plaque(t,e,n,s,{fill:r=this.pal.panel}={}){let o=this.pal;if(this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),this.frameId==="plain"){this.box(t,e,n,s,o.line);return}if(this.frameId==="neon"){this.glow(t,e,n,s,o.accent),this.box(t+3,e+3,n-6,s-6,o.lineLo);return}this.hLine(t,e,n),this.hLine(t,e+s-3,n),this.vLine(t,e,s),this.vLine(t+n-3,e,s),this.box(t+4,e+4,n-8,s-8,o.accentLo)}button(t,e,n,s,r,o,{style:a="normal",disabled:l=!1,font:c=11,color:h}={}){let u=this.ctx,f=this.pal,d=this.pressedId===t&&!l,g=d?1:0,x=l?"#14121a":a==="danger"?ie.red:a==="primary"?f.btnPrimary:f.btn,m=l?f.lineLo:a==="danger"?ie.redHi:f.accent;this.panel(e+g,n+g,s,r,{fill:x,border:m,shadow:!d}),l||(this.frameId==="neon"?(u.save(),u.globalAlpha=.3,this.box(e+g-1,n+g-1,s+2,r+2,m),u.restore()):(u.fillStyle=a==="danger"?"#ff8a7a":f.accentHi,u.fillRect(e+g+1,n+g+1,s-2,1),u.fillRect(e+g+1,n+g+1,1,r-2),u.fillStyle=a==="danger"?"#4a0a0a":f.accentLo,u.fillRect(e+g+1,n+g+r-2,s-2,1),u.fillRect(e+g+s-2,n+g+1,1,r-2)));let p=Ac[c];this.text(o,e+g+s/2,n+g+Math.floor((r-p)/2),{font:c,align:"center",color:h||(l?f.dim:f.ink)}),l||this.buttons.push({id:t,x:e,y:n,w:s,h:r})}hit(t,e){for(let n=this.buttons.length-1;n>=0;n--){let s=this.buttons[n];if(t>=s.x-2&&t<s.x+s.w+2&&e>=s.y-2&&e<s.y+s.h+2)return s.id}return null}bar(t,e,n,s,r,o,a="#000"){this.rect(t,e,n,s,a),this.rect(t+1,e+1,Math.round((n-2)*Math.max(0,Math.min(1,r))),s-2,o),this.box(t,e,n,s,this.pal.dim)}card(t,e,n){this.rect(t+1,e+1,7,10,"#000"),this.rect(t,e,7,10,n?ie.gold:"#2a2418"),n&&this.rect(t+1,e+1,2,2,"#fff3c4")}dim(t=.55){this.rect(0,0,At,Ze,`rgba(0,0,0,${t})`)}vignette(){let t=this.ctx,e=t.createRadialGradient(At/2,Ze/2,Ze*.32,At/2,Ze/2,Ze*.75);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,0.55)"),t.fillStyle=e,t.fillRect(0,0,At,Ze)}qr(t,e,n,s=2){if(!window.qrcode)return 0;let r=this.qrCache.get(t);if(!r)try{let a=window.qrcode(0,"L");a.addData(t),a.make();let l=a.getModuleCount();r={n:l,dark:[]};for(let c=0;c<l;c++)for(let h=0;h<l;h++)a.isDark(c,h)&&r.dark.push([c,h]);this.qrCache.set(t,r)}catch{return 0}let o=(r.n+2)*s;this.rect(e,n,o,o,"#fff"),this.ctx.fillStyle="#000";for(let[a,l]of r.dark)this.ctx.fillRect(e+(l+1)*s,n+(a+1)*s,s,s);return o}lines(t,e,n=9){let s=[],r="";for(let o of t)this.measure(r+o,n)>e&&r?(s.push(r),r=o.trimStart()):r+=o;return r&&s.push(r),s}};var aa=class extends EventTarget{constructor(){super(),this.t=null}use(t){return this.t&&this.t!==t&&this.t.close?.(),this.t=t,t.hub=this,t}emit(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:{type:t,...e}}))}send(t){this.t?.send(t)}leave(){let t=this.t;this.t=null,t?.leave?.()}get online(){return this.t?!!this.t.online:!1}get kind(){return this.t?.kind??null}},Rc="faith-chess-token",la=class{constructor(){this.kind="lan",this.ws=null,this.wantOpen=!1,this.retry=null,this.online=!1}get token(){try{return localStorage.getItem(Rc)}catch{return null}}set token(t){try{t?localStorage.setItem(Rc,t):localStorage.removeItem(Rc)}catch{}}connect(){this.wantOpen=!0,clearTimeout(this.retry);let t=location.protocol==="https:"?"wss":"ws",e=new WebSocket(`${t}://${location.host}`);this.ws=e,e.onopen=()=>{this.online=!0,this.hub?.emit("open"),this.token&&this.send({type:"reconnect",token:this.token})},e.onmessage=n=>{let s;try{s=JSON.parse(n.data)}catch{return}if(s.type==="joined"&&(this.token=s.token),s.type==="error"&&s.code==="nosession"){this.token=null;return}this.hub?.emit(s.type,s)},e.onclose=()=>{this.online=!1,this.hub?.emit("close"),this.wantOpen&&(this.retry=setTimeout(()=>this.connect(),1e3))},e.onerror=()=>{}}send(t){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}leave(){this.send({type:"leave"}),this.token=null}close(){}};var zy="abcdefgh";function Ft(i,t){return t*8+i}function Cr(i){return i&7}function $i(i){return i>>3}function Ic(i){return zy[Cr(i)]+($i(i)+1)}function qe(i){return i==="w"?"b":"w"}var Df=1;function ca(i,t){return{id:Df++,type:i,color:t,shield:!1}}function ha(){Df=1;let i=new Array(64).fill(null),t=["r","n","b","q","k","b","n","r"];for(let e=0;e<8;e++)i[Ft(e,0)]=ca(t[e],"w"),i[Ft(e,1)]=ca("p","w"),i[Ft(e,6)]=ca("p","b"),i[Ft(e,7)]=ca(t[e],"b");return{board:i,turn:"w",castling:{w:{k:!0,q:!0},b:{k:!0,q:!0}},ep:null,halfmove:0,fullmove:1,lastMove:null}}function Zi(i){return{board:i.board.map(t=>t?{...t}:null),turn:i.turn,castling:{w:{...i.castling.w},b:{...i.castling.b}},ep:i.ep,halfmove:i.halfmove,fullmove:i.fullmove,lastMove:i.lastMove?{...i.lastMove}:null}}function Vy(i,t){for(let e=0;e<64;e++){let n=i[e];if(n&&n.type==="k"&&n.color===t)return e}return-1}var Uf=[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]],Nf=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],Cc=[[1,1],[-1,1],[-1,-1],[1,-1]],Pc=[[1,0],[0,1],[-1,0],[0,-1]];function ai(i,t){return i>=0&&i<8&&t>=0&&t<8}function Ws(i,t,e){let n=Cr(t),s=$i(t),r=e==="w"?s-1:s+1;for(let o of[-1,1]){let a=n+o;if(ai(a,r)){let l=i[Ft(a,r)];if(l&&l.color===e&&l.type==="p")return!0}}for(let[o,a]of Uf){let l=n+o,c=s+a;if(ai(l,c)){let h=i[Ft(l,c)];if(h&&h.color===e&&h.type==="n")return!0}}for(let[o,a]of Nf){let l=n+o,c=s+a;if(ai(l,c)){let h=i[Ft(l,c)];if(h&&h.color===e&&h.type==="k")return!0}}for(let[o,a]of Cc){let l=n+o,c=s+a;for(;ai(l,c);){let h=i[Ft(l,c)];if(h){if(h.color===e&&(h.type==="b"||h.type==="q"))return!0;break}l+=o,c+=a}}for(let[o,a]of Pc){let l=n+o,c=s+a;for(;ai(l,c);){let h=i[Ft(l,c)];if(h){if(h.color===e&&(h.type==="r"||h.type==="q"))return!0;break}l+=o,c+=a}}return!1}function Ji(i,t){let e=Vy(i.board,t);return e<0?!1:Ws(i.board,e,qe(t))}function Gy(i,t){let{board:e}=i,n=e[t];if(!n)return[];let s=[],r=Cr(t),o=$i(t),a=n.color,l=(h,u)=>s.push({from:t,to:h,...u});if(n.type==="p"){let h=a==="w"?1:-1,u=a==="w"?1:6,f=a==="w"?7:0,d=o+h;if(ai(r,d)&&!e[Ft(r,d)]){if(d===f)for(let x of["q","r","b","n"])l(Ft(r,d),{promotion:x});else l(Ft(r,d),{});let g=o+2*h;o===u&&!e[Ft(r,g)]&&l(Ft(r,g),{double:!0})}for(let g of[-1,1]){let x=r+g;if(!ai(x,d))continue;let m=Ft(x,d),p=e[m];if(p&&p.color!==a)if(d===f)for(let y of["q","r","b","n"])l(m,{promotion:y,capture:!0});else l(m,{capture:!0});else if(!p&&i.ep===m){let y=e[Ft(x,o)];y&&y.type==="p"&&y.color!==a&&l(m,{enPassant:!0,capture:!0})}}return s}if(n.type==="n"||n.type==="k"){let h=n.type==="n"?Uf:Nf;for(let[u,f]of h){let d=r+u,g=o+f;if(!ai(d,g))continue;let x=Ft(d,g),m=e[x];m?m.color!==a&&l(x,{capture:!0}):l(x,{})}if(n.type==="k"){let u=a==="w"?0:7;if(o===u&&r===4&&!Ws(e,t,qe(a))){let f=i.castling[a];if(f.k){let d=e[Ft(7,u)];d&&d.type==="r"&&d.color===a&&!e[Ft(5,u)]&&!e[Ft(6,u)]&&!Ws(e,Ft(5,u),qe(a))&&!Ws(e,Ft(6,u),qe(a))&&l(Ft(6,u),{castle:"k"})}if(f.q){let d=e[Ft(0,u)];d&&d.type==="r"&&d.color===a&&!e[Ft(1,u)]&&!e[Ft(2,u)]&&!e[Ft(3,u)]&&!Ws(e,Ft(3,u),qe(a))&&!Ws(e,Ft(2,u),qe(a))&&l(Ft(2,u),{castle:"q"})}}}return s}let c=n.type==="b"?Cc:n.type==="r"?Pc:[...Cc,...Pc];for(let[h,u]of c){let f=r+h,d=o+u;for(;ai(f,d);){let g=Ft(f,d),x=e[g];if(!x)l(g,{});else{x.color!==a&&l(g,{capture:!0});break}f+=h,d+=u}}return s}function qs(i,t){let e=i.turn,n=t!=null?[t]:[...Array(64).keys()],s=[];for(let r of n){let o=i.board[r];if(!(!o||o.color!==e))for(let a of Gy(i,r)){let l=Ff(i,a);Ji(l,e)||s.push(a)}}return s}function Of(i,t,e,n){return qs(i,t).find(s=>s.to===e&&(s.promotion??null)===(n??null))||null}function Ff(i,t){let e=Zi(i),n=e.board,s=n[t.from],r=s.color,o=n[t.to];if(n[t.to]=s,n[t.from]=null,t.enPassant){let c=Ft(Cr(t.to),$i(t.from));n[c]=null}if(t.promotion&&(s.type=t.promotion),t.castle){let c=$i(t.from);t.castle==="k"?(n[Ft(5,c)]=n[Ft(7,c)],n[Ft(7,c)]=null):(n[Ft(3,c)]=n[Ft(0,c)],n[Ft(0,c)]=null)}s.type==="k"&&(e.castling[r].k=!1,e.castling[r].q=!1);let a=r==="w"?0:7;t.from===Ft(0,a)&&(e.castling[r].q=!1),t.from===Ft(7,a)&&(e.castling[r].k=!1);let l=r==="w"?7:0;return t.to===Ft(0,l)&&(e.castling[qe(r)].q=!1),t.to===Ft(7,l)&&(e.castling[qe(r)].k=!1),e.ep=t.double?Ft(Cr(t.from),($i(t.from)+$i(t.to))/2):null,e.halfmove=s.type==="p"||o||t.enPassant?0:e.halfmove+1,r==="b"&&e.fullmove++,e.turn=qe(r),e.lastMove={from:t.from,to:t.to,pieceId:s.id,color:r},e.captured=o?{...o}:null,e}function Bf(i,t){return Ff(i,t)}function ua(i,t){let e=Zi(i),n=e.board[t];if(!n||n.type==="k")return e;if(e.board[t]=null,n.type==="r"){let s=n.color==="w"?0:7;t===Ft(0,s)&&(e.castling[n.color].q=!1),t===Ft(7,s)&&(e.castling[n.color].k=!1)}return e}function Wy(i){let t={w:0,b:0};for(let e of i)if(!(!e||e.type==="k"))if(e.type==="n"||e.type==="b")t[e.color]++;else return!1;return t.w+t.b<=1}function kf(i){let t=i.turn,e=qs(i),n=Ji(i,t);return e.length===0?n?{over:!0,result:"checkmate",winner:qe(t),check:n}:{over:!0,result:"stalemate",winner:null,check:n}:Wy(i.board)?{over:!0,result:"insufficient",winner:null,check:n}:i.halfmove>=100?{over:!0,result:"fifty",winner:null,check:n}:{over:!1,result:null,winner:null,check:n}}var Oe={ERASE_COOLDOWN_MS:1e4,SUSPECT_WINDOW_MS:1e4,SUSPECT_LATE_MS:2e4,PICK_TIMEOUT_MS:1e4,RECONNECT_GRACE_MS:3e4,LONG_PRESS_MS:800,FOUL_LIMIT:3,SUSPECT_CHOICES:["p","n","b","r","q"]},Lc={p:1,n:3,b:3,r:5,q:9},fn={p:"\uD3F0",n:"\uB098\uC774\uD2B8",b:"\uBE44\uC20D",r:"\uB8E9",q:"\uD038",k:"\uD0B9"};var Dc=(i,t)=>{for(let e=0;e<i.length;e++)if(i[e]!==t[e])return i[e]<t[e];return!1},Si=(i,t,e)=>{let n=i.charCodeAt(i.length-1)-44032;return n>=0&&n<11172&&n%28!==0?t:e};function Ki(i){return String(i||"").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").trim().slice(0,12)}var Ei=class i{constructor(t,{now:e=()=>Date.now(),onChange:n=()=>{}}={}){this.code=t,this.now=e,this.onChange=n,this.players={w:null,b:null},this.round=0,this.resetMatch(),this.status="waiting"}resetMatch(){this.state=ha(),this.erases=[],this.lastEraseAt={w:-1/0,b:-1/0},this.caught={w:0,b:0},this.pending={w:null,b:null},this.lastMovedId={w:null,b:null},this.history=[],this.historyShift=0,this.result=null,this.rematchVotes={w:!1,b:!1},this.lastMoveVisible=null,this.startedAt=null}get isFull(){return!!(this.players.w&&this.players.b)}addPlayer(t,e){let n=this.players.w?this.players.b?null:"b":"w";return n?(this.players[n]={name:Ki(t)||(n==="w"?"\uBC31":"\uD751"),token:e,connected:!0,disconnectedAt:null,send:null},this.isFull&&this.status==="waiting"&&this.start(),n):null}start(){this.resetMatch(),this.status="playing",this.round++,this.startedAt=this.now(),this.emit("event",{name:"start"}),this.changed()}colorOfToken(t){for(let e of["w","b"])if(this.players[e]&&this.players[e].token===t)return e;return null}setConnected(t,e){let n=this.players[t];n&&(n.connected=e,n.disconnectedAt=e?null:this.now(),this.changed())}handle(t,e){if(!(!e||typeof e!="object"))switch(e.type){case"move":return this.move(t,e.from|0,e.to|0,e.promotion||null);case"erase":return this.erase(t,e.square|0);case"suspect":return this.suspect(t);case"pick":return this.pick(t,String(e.pieceType||""));case"resign":return this.resign(t);case"rematch":return this.rematch(t);default:return}}move(t,e,n,s){if(this.status!=="playing"||this.state.turn!==t)return;let r=Of(this.state,e,n,s);if(!r)return this.toast(t,"\uB458 \uC218 \uC5C6\uB294 \uC218\uC785\uB2C8\uB2E4.","warn");let o=this.state;this.history.push({state:Zi(o),t:this.now(),by:t,m:{from:r.from,to:r.to,castle:r.castle||null},type:o.board[e].type,lastMovedId:{...this.lastMovedId},lastMoveVisible:this.lastMoveVisible}),this.history.length>400&&(this.history.shift(),this.historyShift++),this.state=Bf(o,r),this.lastMovedId[t]=o.board[e].id,this.lastMoveVisible={from:e,to:n};let a=qe(t),l=Ji(this.state,a);this.emit("event",{name:r.capture?"capture":r.castle?"castle":"move",check:l,by:t,at:n}),this.checkEnd(),this.changed()}erase(t,e){if(this.status!=="playing")return;let n=this.now(),s=this.state.board[e];if(!s||s.color===t)return;if(s.type==="k")return this.toast(t,"\uD0B9\uC740 \uC9C0\uC6B8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","warn");let r=Oe.ERASE_COOLDOWN_MS-(n-this.lastEraseAt[t]);if(r>0)return this.toast(t,`\uC544\uC9C1 ${Math.ceil(r/1e3)}\uCD08 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`,"warn");this.state=ua(this.state,e),this.lastEraseAt[t]=n,this.erases.push({t:n,by:t,victim:s.color,pieceType:s.type,pieceId:s.id,square:e,moveIndex:this.history.length+this.historyShift,resolved:!1}),this.toast(t,`${Ic(e)}\uC758 ${fn[s.type]}${Si(fn[s.type],"\uC744","\uB97C")} \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4.`,"secret"),this.checkEnd(),this.changed()}suspect(t){if(this.status!=="playing"||this.pending[t])return;this.emit("event",{name:"suspect",by:t});let e=this.now(),n=-1;for(let o=this.erases.length-1;o>=0;o--){let a=this.erases[o];if(a.victim===t&&!a.resolved){n=o;break}}let s=n>=0?this.erases[n]:null,r=s?e-s.t:1/0;if(s&&r<=Oe.SUSPECT_WINDOW_MS)s.resolved=!0,this.pending[t]={kind:"pick",eraseIndex:n,deadline:e+Oe.PICK_TIMEOUT_MS},this.toast(t,"\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?","info");else if(s&&r<=Oe.SUSPECT_LATE_MS)s.resolved=!0,this.toast(t,"\uD55C \uBC1C \uB2A6\uC5C8\uC2B5\uB2C8\uB2E4\u2026","late");else{s&&(s.resolved=!0);let o=this.findPieceSquare(this.lastMovedId[t]),a=o>=0?this.state.board[o]:null;a&&a.type!=="k"?(this.state=ua(this.state,o),this.toast(t,`\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC758\uC2EC\uC758 \uB300\uAC00\uB85C ${fn[a.type]}${Si(fn[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"bad"),this.toast(qe(t),`\uC0C1\uB300\uAC00 \uD5DB\uB41C \uC758\uC2EC\uC744 \uD588\uC2B5\uB2C8\uB2E4. \uC0C1\uB300\uC758 ${fn[a.type]}${Si(fn[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"good"),this.emit("event",{name:"vanish"})):this.toast(t,"\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","bad"),this.checkEnd()}this.changed()}pick(t,e){let n=this.pending[t];if(!n||n.kind!=="pick"||this.status!=="playing"||!Oe.SUSPECT_CHOICES.includes(e))return;let s=this.erases[n.eraseIndex];e===s.pieceType?(this.pending[t]=null,this.penalty(t,s)):(this.pending[t]=null,this.toast(t,`\uC798\uBABB \uC9DA\uC5C8\uC2B5\uB2C8\uB2E4. (${fn[e]}${Si(fn[e],"\uC774","\uAC00")} \uC544\uB2C8\uC5C8\uC2B5\uB2C8\uB2E4)`,"bad")),this.changed()}static penaltyTarget(t,e,n,s){let r=Lc[n],o=null;for(let a=0;a<64;a++){let l=t[a];if(!l||l.color!==e||l.type==="k")continue;let c=Lc[l.type],h=Math.max(Math.abs((a&7)-(s&7)),Math.abs((a>>3)-(s>>3))),u=[Math.abs(c-r),l.type===n?0:1,-c,h,a];(!o||Dc(u,o.key))&&(o={sq:a,key:u})}return o?o.sq:-1}static movePath(t,e){let n=[t.to],s=t.from&7,r=t.from>>3,o=t.to&7,a=t.to>>3;if("rbq".includes(e)||e==="p"&&Math.abs(a-r)===2){let c=Math.sign(o-s),h=Math.sign(a-r);for(let u=s+c,f=r+h;u!==o||f!==a;u+=c,f+=h)n.push(f*8+u)}if(t.castle){let c=t.castle==="k"?7:0;for(let h=Math.min(s,c)+1;h<Math.max(s,c);h++)n.push(r*8+h)}return[...new Set(n)]}findRewind(t){let e=(t.moveIndex??this.history.length+this.historyShift)-this.historyShift;for(let n=Math.max(0,e);n<this.history.length;n++){let s=this.history[n];if(s.by===t.by&&i.movePath(s.m,s.type).includes(t.square))return n}return-1}rewindTo(t){let e=this.history[t],n=this.history.length-t;this.state=Zi(e.state),this.lastMovedId={...e.lastMovedId},this.lastMoveVisible=e.lastMoveVisible,this.history.length=t;for(let s of this.erases)s.t>e.t&&(s.resolved=!0);for(let s of["w","b"]){let r=this.pending[s];r&&this.erases[r.eraseIndex]?.t>e.t&&(this.pending[s]=null)}return this.emit("event",{name:"rewind",undone:n}),n}static reviveSquare(t,e){let n=qe(e.victim),s=Ji(t,n),r=[];for(let o=0;o<64;o++){if(t.board[o]||e.pieceType==="p"&&(!(o>>3)||o>>3===7))continue;let a=Math.abs((o&7)-(e.square&7)),l=Math.abs((o>>3)-(e.square>>3));r.push([Math.max(a,l),a+l,o])}r.sort((o,a)=>Dc(o,a)?-1:Dc(a,o)?1:0);for(let[,,o]of r){let a=Zi(t);if(a.board[o]={id:e.pieceId,type:e.pieceType,color:e.victim,shield:!1},s||!Ji(a,n))return o}return-1}revive(t){let e=i.reviveSquare(this.state,t);if(e<0)return-1;let n=Zi(this.state);return n.board[e]={id:t.pieceId,type:t.pieceType,color:t.victim,shield:!1},this.state=n,this.emit("event",{name:"revive",at:e,pieceType:t.pieceType,color:t.victim}),e}penalty(t,e){let n=qe(t),s=++this.caught[n],r=Oe.FOUL_LIMIT,o=fn[e.pieceType],a=this.findRewind(e),l=a>=0?this.rewindTo(a):0,c=l?` \uC2DC\uAC04\uC744 \uB418\uAC10\uC544 ${l}\uC218\uB97C \uBB34\uB974\uACE0,`:"",h=i.penaltyTarget(this.state.board,n,e.pieceType,e.square);if(h<0){this.revive(e),this.toast(t,"\uBC18\uCE59 \uC801\uBC1C! \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC544 \uC2B9\uB9AC\uD569\uB2C8\uB2E4.","good"),this.toast(n,"\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uB9D0\uC774 \uD0B9\uBFD0\uC774\uB77C \uD328\uBC30\uD569\uB2C8\uB2E4.","bad"),this.end({result:"bare",winner:t});return}let u=this.state.board[h],f=fn[u.type];this.emit("event",{name:"penalty",at:h,pieceType:u.type,by:t}),this.state=ua(this.state,h);let d=this.revive(e)>=0;if(this.toast(t,`\uBC18\uCE59 \uC801\uBC1C! (\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${c}${d?` \uC9C0\uC6CC\uC84C\uB358 ${o}${Si(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uC0C1\uB300 ${f}${Si(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"good"),this.toast(n,`\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. (\uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${c}${d?` \uC0C1\uB300 ${o}${Si(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uB0B4 ${Ic(h)} ${f}${Si(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"bad"),s>=r){this.end({result:"fouls",winner:t});return}this.checkEnd()}resign(t){this.status==="playing"&&(this.end({result:"resign",winner:qe(t)}),this.changed())}rematch(t){if(this.status==="over"){if(this.rematchVotes[t]=!0,this.rematchVotes.w&&this.rematchVotes.b){let{w:e,b:n}=this.players;this.players={w:n,b:e},this.start();return}this.toast(qe(t),"\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uC6D0\uD569\uB2C8\uB2E4.","info"),this.changed()}}tick(){if(this.status==="playing"){let t=this.now();for(let e of["w","b"]){let n=this.pending[e];n&&n.kind==="pick"&&t>n.deadline&&(this.pending[e]=null,this.toast(e,"\uC2DC\uAC04 \uCD08\uACFC. \uAE30\uD68C\uB97C \uB193\uCCE4\uC2B5\uB2C8\uB2E4.","bad"),this.changed());let s=this.players[e];s&&!s.connected&&s.disconnectedAt!=null&&t-s.disconnectedAt>Oe.RECONNECT_GRACE_MS&&(this.end({result:"disconnect",winner:qe(e)}),this.changed())}}}checkEnd(){let t=kf(this.state);t.over&&this.end({result:t.result,winner:t.winner})}end(t){this.status==="playing"&&(this.status="over",this.result=t,this.pending={w:null,b:null},this.rematchVotes={w:!1,b:!1},this.emit("event",{name:"end"}))}findPieceSquare(t){return t==null?-1:this.state.board.findIndex(e=>e&&e.id===t)}toast(t,e,n="info"){this.emit("toast",{text:e,kind:n},t)}emit(t,e,n=null){for(let s of["w","b"]){if(n&&s!==n)continue;let r=this.players[s];r&&r.send&&r.send({type:t,...e})}}changed(){this.onChange(this)}view(t){let e=this.state,n=[];for(let o=0;o<64;o++){let a=e.board[o];a&&n.push({sq:o,id:a.id,type:a.type,color:a.color,shield:!!a.shield})}let s=this.pending[t],r=this.now();return{type:"state",code:this.code,round:this.round,you:t,status:this.status,names:{w:this.players.w?.name??null,b:this.players.b?.name??null},connected:{w:!!this.players.w?.connected,b:!!this.players.b?.connected},turn:e.turn,pieces:n,lastMove:this.lastMoveVisible,castling:{w:{...e.castling.w},b:{...e.castling.b}},ep:e.ep,check:this.status==="playing"?Ji(e,e.turn):!1,caught:{...this.caught},eraseReadyAt:this.lastEraseAt[t]+Oe.ERASE_COOLDOWN_MS,serverNow:r,pending:s&&s.kind==="pick"?{kind:"pick",deadline:s.deadline,choices:Oe.SUSPECT_CHOICES}:null,result:this.result,rematchVotes:{...this.rematchVotes}}}};var Hf={p:1,n:3,b:3,r:5,q:9,k:0},Pr=(i,t)=>i+Math.random()*(t-i),fa=i=>i[Math.floor(Math.random()*i.length)],Ir=class{constructor(){this.kind="bot",this.online=!0,this.timer=null}start(t){this.game=new Ei("BOT",{onChange:e=>this.broadcast(e)}),this.game.addPlayer(t,"me"),this.game.players.w.send=e=>this.hub.emit(e.type,e),this.hub.emit("joined",{code:"BOT",color:"w"}),this.game.addPlayer("\uC5F0\uC2B5 \uBD07","bot"),this.bot={nextErase:performance.now()+Pr(9e3,16e3),plan:null,seenErases:0},this.timer=setInterval(()=>this.tick(),200)}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}get botColor(){return this.game.colorOfToken("bot")}get myColor(){return this.game.colorOfToken("me")}send(t){let e=this.myColor;e&&(this.game.handle(e,t),t.type==="rematch"&&this.game.status==="over"&&setTimeout(()=>this.game.handle(this.botColor,{type:"rematch"}),900),this.game.status==="playing"&&this.game.round>(this.lastRound||0)&&(this.lastRound=this.game.round,this.game.players[this.myColor].send=n=>this.hub.emit(n.type,n),this.game.players[this.botColor].send=null,this.bot.nextErase=performance.now()+Pr(9e3,16e3),this.broadcast(this.game)))}tick(){let t=this.game,e=this.botColor,n=performance.now();if(t.tick(),t.status!=="playing")return;let s=t.pending[e];if(s?.kind==="pick"){t.handle(e,{type:"pick",pieceType:Math.random()<.65?t.erases[s.eraseIndex].pieceType:fa(Oe.SUSPECT_CHOICES)});return}let r=t.erases.filter(o=>o.victim===e).length;if(r>this.bot.seenErases&&(this.bot.seenErases=r,Math.random()<.55&&(this.bot.suspectAt=n+Pr(2500,8e3))),this.bot.suspectAt&&n>this.bot.suspectAt){this.bot.suspectAt=0,t.handle(e,{type:"suspect"});return}if(n>this.bot.nextErase){this.bot.nextErase=n+Pr(16e3,32e3);let o=t.state.board.map((l,c)=>l&&l.color!==e&&l.type!=="k"?c:-1).filter(l=>l>=0),a=o.filter(l=>t.state.board[l].type==="p");o.length&&t.handle(e,{type:"erase",square:a.length&&Math.random()<.6?fa(a):fa(o)});return}if(t.state.turn===e&&(this.bot.plan||(this.bot.plan=n+Pr(700,1600)),n>this.bot.plan)){this.bot.plan=null;let o=qs(t.state);if(!o.length)return;let a=o.filter(c=>c.capture).sort((c,h)=>(Hf[t.state.board[h.to]?.type]||1)-(Hf[t.state.board[c.to]?.type]||1)),l=a.length&&Math.random()<.8?a[0]:fa(o);t.handle(e,{type:"move",from:l.from,to:l.to,promotion:l.promotion?"q":null})}}leave(){clearInterval(this.timer),this.timer=null}close(){this.leave()}};var zf="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Vf="faith-chess-room-token",Gf=i=>"fc-"+i.toLowerCase(),qy=i=>new TextEncoder().encode(JSON.stringify(i)).length;function Xy(){try{let i=localStorage.getItem(Vf);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(Vf,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function Yy(i){let{type:t,pieces:e,...n}=i;return{...n,pieces:e.map(s=>`${s.id}.${s.sq}.${s.type}${s.color}${s.shield?1:0}`).join(" ")}}function $y(i){let t=String(i.pieces||"").split(" ").filter(Boolean).map(e=>{let[n,s,r]=e.split(".");return{id:+n,sq:+s,type:r[0],color:r[1],shield:r[2]==="1"}});return{...i,type:"state",pieces:t,eraseReadyAt:i.eraseReadyAt??-1/0}}var da=class i{static async open(){if(!window.claude?.use)return null;let t=null;try{t=await window.claude.use("room")}catch{t=null}return t?new i(t):null}constructor(t){this.kind="room",this.room=t,this.connected=t.connected(),this.role=null,this.onLobby=null,t.onConnection(e=>{this.connected=e,this.hub?.emit(e?"open":"close")},()=>{this.connected=!1}),t.onPeers(()=>this.onLobby?.(this.openRooms()),()=>{})}get online(){return this.role==="guest"?this.connected&&this.hostOnline:this.connected}openRooms(){return this.room.peers().filter(t=>!t.sameTab&&typeof t.presence?.open=="string").map(t=>({code:t.presence.open,name:String(t.presence.name||"?"),mine:t.isMe}))}async create(t){this.endSession();let e="";for(let s=0;s<4;s++)e+=zf[Math.floor(Math.random()*zf.length)];let n=await this.room.join(Gf(e));Object.assign(this,{role:"host",code:e,name:Ki(t)||"\uD638\uC2A4\uD2B8",r:n,q:[],qs:0,st:null,lastAct:0,guestPeer:null,guestTk:null}),this.game=new Ei(e,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.unsub=n.onPeers(s=>this.hostPeers(s),()=>{}),this.tickT=setInterval(()=>this.game?.tick(),250),this.room.presence({open:e,name:this.name}).catch(()=>{}),this.hub.emit("joined",{code:e,color:"w"}),this.broadcast(this.game),this.pushHost()}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostOut(t){t.type==="state"?this.st=t:(this.q.push({s:++this.qs,t:Date.now(),m:t}),this.q.length>6&&this.q.shift()),this.schedulePush()}schedulePush(){this.pushT||(this.pushT=setTimeout(()=>{this.pushT=null,this.pushHost()},30))}pushHost(){if(!this.r||this.role!=="host")return;let t={r:"host",code:this.code,name:this.name,gtk:this.guestTk,ack:this.lastAct,hn:Date.now(),st:this.st?Yy(this.st):null,q:this.q};for(;qy(t)>3900&&t.q.length;)t.q=t.q.slice(1);this.r.presence(t).catch(()=>{})}hostPeers(t){if(this.role!=="host"||!this.game)return;let e=t.peers.filter(s=>!s.sameTab&&s.presence?.r==="guest"&&s.presence.code===this.code),n=this.guestPeer?e.find(s=>s.peer===this.guestPeer):null;if(!n){let s=this.guestTk?e.find(r=>r.presence.tk===this.guestTk):e[0];if(s){let r=!this.guestTk;this.guestPeer=s.peer,this.guestTk=String(s.presence.tk||s.peer),this.lastAct=0,r&&(this.game.addPlayer(s.presence.name,this.guestTk),this.room.presence({open:null}).catch(()=>{}));let o=this.game.colorOfToken(this.guestTk);this.game.players[o].send=a=>this.hostOut(a),this.game.setConnected(o,!0),n=s}else if(this.guestPeer){this.guestPeer=null;let r=this.game.colorOfToken(this.guestTk);r&&this.game.setConnected(r,!1)}}if(n){let s=this.game.colorOfToken(this.guestTk),r=Array.isArray(n.presence.acts)?n.presence.acts:[];for(let o of r)o&&o.s>this.lastAct&&(this.lastAct=o.s,this.game.handle(s,o.m))}this.schedulePush()}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await this.room.join(Gf(t));Object.assign(this,{role:"guest",code:t,name:Ki(e)||"\uC190\uB2D8",r:n,tk:Xy(),acts:[],as:0,lastQ:null,lastHn:0,hostSeen:!1,hostOnline:!1,joinedOk:!1}),n.presence({r:"guest",code:t,name:this.name,tk:this.tk,acts:[]}).catch(()=>{}),this.unsub=n.onPeers(s=>this.guestPeers(s),()=>{}),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{text:"\uADF8 \uCF54\uB4DC\uC758 \uBC29\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."}),this.endSession())},8e3)}guestPeers(t){if(this.role!=="guest")return;let e=t.peers.find(r=>!r.sameTab&&r.presence?.r==="host"&&r.presence.code===this.code);if(!e){this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close"));return}let n=e.presence;if(this.hostSeen=!0,this.hostOnline||(this.hostOnline=!0,this.hub.emit("open")),n.gtk&&n.gtk!==this.tk){this.joinedOk||(this.hub.emit("error",{text:"\uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC785\uB2C8\uB2E4."}),this.endSession());return}if(!n.gtk)return;this.joinedOk||(this.joinedOk=!0,clearTimeout(this.joinTimer),this.hub.emit("joined",{code:this.code,color:n.st?.you||"b"}));let s=Array.isArray(n.q)?n.q:[];if(this.lastQ===null){this.lastQ=0;for(let r of s)n.hn-r.t>3e3&&(this.lastQ=Math.max(this.lastQ,r.s))}for(let r of s)r.s>this.lastQ&&(this.lastQ=r.s,r.m?.type&&this.hub.emit(r.m.type,r.m));if(n.st&&n.hn!==this.lastHn&&(this.lastHn=n.hn,this.hub.emit("state",$y(n.st))),typeof n.ack=="number"){let r=this.acts.length;this.acts=this.acts.filter(o=>o.s>n.ack),this.acts.length!==r&&this.pushGuest()}}pushGuest(){this.r?.presence({acts:this.acts}).catch(()=>{})}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&(this.acts.push({s:++this.as,m:t}),this.acts.length>8&&this.acts.shift(),this.pushGuest())}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"}),this.role==="host"&&this.pushHost();let t=this.r;this.detach(),setTimeout(()=>t?.leave().catch(()=>{}),600)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.pushT),this.tickT=this.joinTimer=this.pushT=null,this.unsub?.(),this.unsub=null,this.role==="host"&&this.room.presence({open:null}).catch(()=>{}),this.r=null,this.game=null,this.role=null,this.hostOnline=!1}endSession(){let t=this.r;this.detach(),t?.leave().catch(()=>{})}};var Wf="0123456789",Zy=1600,qf="faith-chess-peer-token",Xf=i=>"faith-chess-"+i.toLowerCase();function Jy(){try{let i=localStorage.getItem(qf);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(qf,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function Yf(){let i={debug:0},t=new URLSearchParams(location.search).get("peer");if(t){let[e,n]=t.split(":");Object.assign(i,{host:e,port:+n||9e3,path:"/",secure:!1,config:{iceServers:[]}})}return i}var $f=i=>new Promise((t,e)=>{let n=i?new window.Peer(i,Yf()):new window.Peer(Yf()),s=o=>{n.off("open",r);try{n.destroy()}catch{}e(o)},r=()=>{n.off("error",s),t(n)};n.once("open",r),n.once("error",s)}),Lr=class{static available(){return typeof window.Peer=="function"}constructor(){this.kind="peer",this.role=null,this.hostOnline=!1}get online(){return this.role==="guest"?this.hostOnline:this.role==="host"?!!this.peer&&(!this.peer.disconnected||!!this.conn?.open):!0}async create(t){this.endSession();let e=null,n="";for(let s=0;s<5&&!e;s++){n="";for(let r=0;r<4;r++)n+=Wf[Math.floor(Math.random()*Wf.length)];try{e=await $f(Xf(n))}catch(r){if(r?.type!=="unavailable-id")throw r}}if(!e)throw new Error("no free code");Object.assign(this,{role:"host",code:n,name:Ki(t)||"\uD638\uC2A4\uD2B8",peer:e,conn:null,guestTk:null}),this.game=new Ei(n,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.tickT=setInterval(()=>this.game?.tick(),250),e.on("connection",s=>this.hostConn(s)),e.on("disconnected",()=>{this.hub?.emit("close"),this.retryT=setTimeout(()=>this.reconnectBroker(),1e3)}),e.on("open",()=>this.hub?.emit("open")),e.on("error",s=>console.warn("[peer]",s?.type,s)),this.hub.emit("joined",{code:n,color:"w"}),this.broadcast(this.game)}reconnectBroker(){if(!(this.role!=="host"||!this.peer||this.peer.destroyed||!this.peer.disconnected)){try{this.peer.reconnect()}catch{}this.retryT=setTimeout(()=>this.reconnectBroker(),3e3)}}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostConn(t){t.on("data",e=>{if(!(this.role!=="host"||!this.game||!e||typeof e!="object")){if(e.type==="hello"){let n=String(e.tk||t.peer).slice(0,40);if(this.guestTk?n!==this.guestTk:this.ringConn&&this.ringConn!==t){t.send({type:"error",code:"busy",text:"\uD1B5\uD654 \uC911\uC785\uB2C8\uB2E4. \uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC774\uC5D0\uC694."}),setTimeout(()=>t.close(),300);return}if(this.guestTk){this.attachGuest(t,n);return}if(this.ringConn===t)return;this.ringConn=t,this.hub.emit("ring",{}),this.ringT=setTimeout(()=>{this.ringConn===t&&(this.ringConn=null,!(this.role!=="host"||!this.game||!t.open)&&(this.guestTk=n,this.game.addPlayer(e.name,n),this.attachGuest(t,n)))},Zy);return}t===this.conn&&e.type==="act"&&e.m&&typeof e.m=="object"&&this.game.handle(this.game.colorOfToken(this.guestTk),e.m)}}),t.on("close",()=>{if(t===this.ringConn){this.ringConn=null,this.hub?.emit("ringstop",{});return}if(t!==this.conn||!this.game)return;this.conn=null;let e=this.game.colorOfToken(this.guestTk);e&&this.game.setConnected(e,!1)}),t.on("error",()=>{})}attachGuest(t,e){if(this.conn&&this.conn!==t)try{this.conn.close()}catch{}this.conn=t;let n=this.game.colorOfToken(e);t.send({type:"joined",code:this.code,color:n}),this.game.players[n].send=s=>{this.conn?.open&&this.conn.send(s)},this.game.setConnected(n,!0),this.broadcast(this.game)}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await $f(null);Object.assign(this,{role:"guest",code:t,name:Ki(e)||"\uC190\uB2D8",peer:n,tk:Jy(),joinedOk:!1,conn:null,hostOnline:!1}),n.on("error",s=>{s?.type==="peer-unavailable"&&this.role==="guest"&&(this.joinedOk?this.scheduleRedial():(this.hub.emit("error",{code:"nonumber",text:"\uC9C0\uAE08 \uAC70\uC2E0 \uBC88\uD638\uB294 \uC5C6\uB294 \uBC88\uD638\uC785\uB2C8\uB2E4."}),this.endSession()))}),n.on("disconnected",()=>{this.role==="guest"&&setTimeout(()=>{try{this.peer?.disconnected&&!this.peer.destroyed&&this.peer.reconnect()}catch{}},1e3)}),this.dial(),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{code:"noanswer",text:"\uC0C1\uB300\uAC00 \uC804\uD654\uB97C \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694."}),this.endSession())},2e4)}dial(){if(this.role!=="guest"||!this.peer||this.peer.destroyed)return;let t=this.peer.connect(Xf(this.code),{reliable:!0,serialization:"json"});this.conn=t,t.on("open",()=>{t===this.conn&&(this.hostOnline=!0,this.hub.emit("open"),t.send({type:"hello",name:this.name,tk:this.tk}))}),t.on("data",e=>{if(!(t!==this.conn||!e?.type)){if(e.type==="joined"&&(this.joinedOk=!0,clearTimeout(this.joinTimer)),e.type==="error"&&!this.joinedOk){this.hub.emit("error",e),this.endSession();return}this.hub.emit(e.type,e)}}),t.on("close",()=>{t===this.conn&&(this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close")),this.scheduleRedial())}),t.on("error",()=>{})}scheduleRedial(){this.role!=="guest"||!this.joinedOk||this.redialT||(this.redialT=setTimeout(()=>{this.redialT=null,this.role==="guest"&&!this.hostOnline&&this.dial()},2e3))}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&this.conn?.open&&this.conn.send({type:"act",m:t})}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"});let t=this.detach();setTimeout(()=>{try{t?.destroy()}catch{}},500)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.retryT),clearTimeout(this.redialT),clearTimeout(this.ringT),this.tickT=this.joinTimer=this.retryT=this.redialT=this.ringT=null,this.ringConn=null;let t=this.peer;return this.peer=null,this.conn=null,this.game=null,this.role=null,this.hostOnline=!1,t}endSession(){let t=this.detach();try{t?.destroy()}catch{}}};var Xn=(i,t={})=>new xn({color:i,flatShading:!0,...t}),Xs=(i,t={})=>new an({color:i,flatShading:!0,shininess:90,specular:11575424,...t});function Te(i,t,e,n=0,s=0,r=0){let o=new Ht(t,e);return o.position.set(n,s,r),i.add(o),o}var Fe={HOLE_R:.8,HOLE_SIZE:.165,STOP:-32,FIRST:28,STEP:30,PLATE:1.1,WHEEL:1.17},Ys=i=>Fe.FIRST+Fe.STEP*i,pa=i=>Ys(i)-Fe.STOP,ma=i=>(i+1)%10,Zf=i=>(Number(i)+9)%10,Jf=i=>(i+540)%360-180,wi=Math.PI/180,Kf=i=>i*i*(3-2*i),Ky=11740714,jy=8262936,ga=14264378;var td="#2a1414";function jf(i,t,e=0,n=0,s=0){let r=new zi;for(let o=0;o<=t;o++){let a=s+o/t*Math.PI*2,l=e+Math.cos(a)*i,c=n+Math.sin(a)*i;o===0?r.moveTo(l,c):r.lineTo(l,c)}return r}var ed={kind:"rotary",label:"\uB2E4\uC774\uC5BC",body:Ky,bodyDark:jy,width:3.3,profile:[[-1.7,0],[2.15,0],[2.2,.28],[-.05,1.95],[-1.35,1.95],[-1.75,1.3]],cam:{dist:9.4,up:1.5,side:1.5,look:.75}},xa=class{constructor(t){this.cfg=t,this.kind=t.kind,this.scene=new Nn,this.camera=new Pe(30,1,.1,60),this.clear=new wt,this.bg=new wt(2364460),this.ray=new Ds,this.plane=new In,this.lift=0,this.liftTo=0,this.ringT=0,this.t=0,this.onDigit=()=>{},this.onSound=()=>{},this.cardKey="",this.enabled=!0,this.build()}build(){let t=this.scene,e=this.cfg,n=e.width;t.add(new Vo(16773340,3153962,.75));let s=new en(16777215,1.15);s.position.set(-3,7,5),t.add(s);let r=new en(10475775,.35);r.position.set(4,3,-4),t.add(r),Te(t,new he(14,14,.2,12),Xn(3809840),0,-.1,0),Te(t,new he(n*.94,n*.97,.06,10),Xn(6965806),0,.03,.15);let o=new ne;t.add(o),this.root=o;let a=new $e;e.profile.forEach(([b,T],I)=>I?a.lineTo(b,T):a.moveTo(b,T));let l=new On(a,{depth:n,bevelEnabled:!0,bevelThickness:.16,bevelSize:.16,bevelSegments:1,curveSegments:1});l.rotateY(-Math.PI/2),l.translate(n/2,0,0),this.bodyMat=Xn(e.body),Te(o,l,this.bodyMat);let c=e.profile.map(b=>b[0]),h=Math.min(...c),u=Math.max(...c);for(let b of[-(n/2-.25),n/2-.25])for(let T of[h+.4,u-.4])Te(o,new he(.16,.2,.08,6),Xn(1706510),b,.02,T);let f=new j(...e.profile[2]),d=new j(...e.profile[3]),g=f.clone().add(d).multiplyScalar(.5),x=d.clone().sub(f);this.faceLen=x.length(),x.normalize();let m=new C(0,x.y,x.x),p=new C(0,-x.x,x.y),y=new ne;y.position.set(0,g.y,g.x).addScaledVector(p,.17),y.quaternion.setFromRotationMatrix(new ve().makeBasis(new C(1,0,0),m,p)),o.add(y),this.face=y,this.faceN=p,this.faceUp=m,this.buildFace(y);for(let b of[-1.05,1.05])Te(o,new ee(.34,.34,.55),Xn(this.cfg.bodyDark),b,2.2,-.72),Te(o,new ee(.4,.08,.6),Xn(1706510),b,2.36,-.72);let _=new ne;o.add(_),this.handset=_,this.handsetRest=new C(0,2.62,-.72),_.position.copy(this.handsetRest),Te(_,new ee(2.2,.28,.42),this.bodyMat,0,.16,0);for(let b of[-1,1]){let T=Te(_,new ee(.5,.28,.42),this.bodyMat,b*1.12,.06,0);T.rotation.z=b*.32,Te(_,new he(.44,.36,.34,8),this.bodyMat,b*1.38,-.12,0),Te(_,new he(.3,.3,.02,8),Xn(1706510),b*1.38,-.3,0)}this.cordMat=Xn(this.cfg.cord??6164500),this.cord=Te(o,new le,this.cordMat),this.rebuildCord();let v=y.position.clone(),E=this.cfg.cam;this.camera.position.copy(v).addScaledVector(p,E.dist).addScaledVector(m,E.up).add(new C(E.side,0,0)),this.lookAt=v.clone().addScaledVector(m,E.look).add(new C(-.15,0,0)),this.camera.up.set(0,1,0),this.camera.lookAt(this.lookAt),this.hoverOff=new C(.35,.75,.9),this.hover=new C,this.nearCam=this.camera.position.clone().lerp(this.lookAt,.5).add(new C(0,-.35,0))}rebuildCord(){let t=new C(-1.38,-.2,0).applyMatrix4(this.handset.matrix.compose(this.handset.position,this.handset.quaternion,this.handset.scale)),e=new C(-this.cfg.width/2-.21,.55,-.4),n=new _r(e,new C(e.x-.84,.2,.6),new C(e.x-.74,.5,-.9),t),s=150,r=[],o=new C,a=new C,l=new C;for(let c=0;c<=s;c++){let h=c/s,u=n.getPoint(h);n.getTangent(h,o),a.crossVectors(o,new C(0,1,0)),a.lengthSq()<1e-4&&a.set(1,0,0),a.normalize(),l.crossVectors(a,o).normalize();let f=Math.PI*2*22*h,d=.075*Math.min(1,h*12,(1-h)*12);r.push(u.addScaledVector(a,Math.cos(f)*d).addScaledVector(l,Math.sin(f)*d))}this.cord.geometry.dispose(),this.cord.geometry=new zo(new xr(r),s*2,.032,4,!1)}faceLocal(t,e,n){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let s=new j((e-t.x)/t.w*2-1,-((n-t.y)/t.h*2-1));this.ray.setFromCamera(s,this.camera);let r=new C;this.face.getWorldPosition(r),this.plane.setFromNormalAndCoplanarPoint(this.faceN.clone(),r);let o=new C;return this.ray.ray.intersectPlane(this.plane,o)?this.face.worldToLocal(o):null}faceToScreen(t,e,n,s=.1){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let r=this.face.localToWorld(new C(e,n,s)).project(this.camera);return{x:t.x+(r.x+1)/2*t.w,y:t.y+(1-r.y)/2*t.h}}ring(t=1.6){this.ringT=Math.max(this.ringT,t)}setLift(t){this.liftTo=t}update(t){this.t+=t,this.updateFace(t),this.ringT=Math.max(0,this.ringT-t);let n=(this.ringT>0?Math.min(1,this.ringT*4):0)*(Math.floor(this.t*2.5)%2===0?1:.15);this.root.rotation.z=Math.sin(this.t*2*Math.PI*23)*.022*n,this.root.position.x=Math.sin(this.t*2*Math.PI*17)*.025*n;let s=this.lift;this.lift+=(this.liftTo-this.lift)*Math.min(1,t*7),Math.abs(this.lift-this.liftTo)<.002&&(this.lift=this.liftTo);let r=this.handset,o=Kf(Math.min(1,this.lift/.3)),a=Kf(Math.max(0,Math.min(1,(this.lift-.3)/.7)));this.hover.copy(this.handsetRest).add(this.hoverOff),r.position.copy(this.handsetRest).lerp(this.hover,o).lerp(this.nearCam,a),r.position.y+=Math.abs(Math.sin(this.t*2*Math.PI*11))*.07*n+Math.sin(this.t*2.1)*.05*o*(1-a),r.rotation.set(-.55*o-.5*a,.2*o-.2*a,.22*o-.22*a+Math.sin(this.t*2*Math.PI*23)*.03*n),(s!==this.lift||n>0)&&this.rebuildCord()}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,l=Math.round(e.y*r),c=Math.round((e.y+e.h)*r)-l,h=n.h-l-c,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,c),t.setScissor(o,h,a,c),t.setClearColor(this.bg,1),t.clear(!0,!0,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}},Nc=class extends xa{constructor(){super(ed),this.phi=0,this.mode="idle",this.k=-1,this.hold=0,this.queue=[],this.pendingDigit=null,this.drag=null,this.stopHit=!1,this.lastStep=0}buildFace(t){this.dial=t;let e=this.plateTexture();Te(t,new yr(Fe.PLATE,20),new xn({map:e}),0,0,.005),Te(t,new Tn(Fe.WHEEL+.04,.06,4,20),Xs(ga),0,0,.02);let n=new $e;for(let o=0;o<=24;o++){let a=o/24*Math.PI*2,l=Math.cos(a)*Fe.WHEEL,c=Math.sin(a)*Fe.WHEEL;o?n.lineTo(l,c):n.moveTo(l,c)}n.holes.push(jf(.5,12));for(let o=0;o<10;o++)n.holes.push(jf(Fe.HOLE_SIZE,8,Math.cos(Ys(o)*wi)*Fe.HOLE_R,Math.sin(Ys(o)*wi)*Fe.HOLE_R,Math.PI/8));let s=new On(n,{depth:.07,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:1,curveSegments:1});this.wheel=Te(t,s,Xs(1972252,{shininess:30,specular:3813944}),0,0,.03),this.cardCanvas=document.createElement("canvas"),this.cardCanvas.width=this.cardCanvas.height=128,this.cardTex=new qn(this.cardCanvas),this.cardTex.magFilter=Ee,this.cardTex.minFilter=Xe,this.cardTex.colorSpace=fe,Te(t,new yr(.47,14),new _e({map:this.cardTex}),0,0,.13),Te(t,new Tn(.48,.045,4,14),Xs(ga),0,0,.13),this.setCard("\uBBFF\uC74C\uC758 \uCCB4\uC2A4","\xB7\xB7\xB7\xB7");let r=new ne;r.rotation.z=Fe.STOP*wi,t.add(r),Te(r,new ee(.5,.11,.09),Xs(ga),Fe.HOLE_R+.22,0,.16),Te(r,new ee(.1,.1,.2),Xs(ga),Fe.HOLE_R+.44,0,.09)}plateTexture(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1c0c10",e.fillRect(0,0,256,256),e.fillStyle="#f1e6c8",e.beginPath(),e.arc(128,128,126,0,Math.PI*2),e.fill(),e.strokeStyle="#b89a5a",e.lineWidth=3,e.beginPath(),e.arc(128,128,118,0,Math.PI*2),e.stroke(),e.font="bold 34px Galmuri11, sans-serif",e.textAlign="center",e.textBaseline="middle";let n=Fe.HOLE_R/Fe.PLATE*128;for(let r=0;r<10;r++){let o=Ys(r)*wi,a=128+Math.cos(o)*n,l=128-Math.sin(o)*n;e.fillStyle="#c22a2a",e.beginPath(),e.arc(a,l,21,0,Math.PI*2),e.fill(),e.fillStyle="#fff6e0",e.fillText(String(ma(r)),a,l+1)}let s=new qn(t);return s.magFilter=Ee,s.colorSpace=fe,s}setCard(t,e){let n=t+"|"+e;if(n===this.cardKey)return;this.cardKey=n;let s=this.cardCanvas.getContext("2d");s.fillStyle="#fbf4e2",s.fillRect(0,0,128,128),s.fillStyle="#c22a2a",s.fillRect(0,40,128,3),s.fillStyle=td,s.textAlign="center",s.textBaseline="middle",s.font="15px Galmuri11, sans-serif",s.fillText(t,64,26),s.font="bold 30px Galmuri11, sans-serif",s.fillText(e,64,74),this.cardTex.needsUpdate=!0}local(t,e,n){let s=this.faceLocal(t,e,n);return s&&{r:Math.hypot(s.x,s.y),a:Math.atan2(s.y,s.x)/wi}}holeAt(t){if(!t||Math.abs(t.r-Fe.HOLE_R)>.32)return-1;for(let e=0;e<10;e++)if(Math.abs(Jf(t.a-Ys(e)))<15)return e;return-1}project(t,e,n){return this.faceToScreen(t,Math.cos(n*wi)*e,Math.sin(n*wi)*e)}holeScreen(t,e){return this.project(t,Fe.HOLE_R,Ys(Zf(e)))}digitScreen(t,e){return this.holeScreen(t,e)}get busy(){return this.mode!=="idle"||this.queue.length>0}pointerDown(t,e,n,s){if(this.busy||!this.enabled)return!1;let r=this.local(t,e,n),o=this.holeAt(r);return o<0?!1:(this.mode="drag",this.k=o,this.phi=0,this.stopHit=!1,this.lastStep=0,this.drag={a:r.a,t0:s,moved:0},!0)}pointerMove(t,e,n){if(this.mode!=="drag")return;let s=this.local(t,e,n);if(!s||s.r<.15)return;let r=Jf(s.a-this.drag.a);this.drag.a=s.a,this.drag.moved+=Math.abs(r),this.setPhi(Math.max(0,Math.min(pa(this.k),this.phi-r)))}pointerUp(t){if(this.mode!=="drag")return;let e=this.k,n=t-this.drag.t0<380&&this.drag.moved<10;if(this.drag=null,n){this.mode="idle",this.phi=0,this.queue.push(ma(e));return}this.release(this.phi>=pa(e)-14?ma(e):null)}cancel(){this.mode==="drag"&&(this.drag=null,this.release(null))}autoDial(t){for(let e of String(t))/\d/.test(e)&&this.queue.push(Number(e))}abort(){this.queue=[],(this.mode==="auto"||this.mode==="drag")&&(this.drag=null,this.release(null)),this.pendingDigit=null}setPhi(t){let e=Math.floor(t/Fe.STEP);e>this.lastStep&&this.onSound("tick"),this.lastStep=e,!this.stopHit&&this.k>=0&&t>=pa(this.k)-.5&&(this.stopHit=!0,this.onSound("stop")),this.phi=t}release(t){this.mode="return",this.pendingDigit=t,this.lastStep=Math.floor(this.phi/Fe.STEP)}updateFace(t){if(this.mode==="idle"&&this.queue.length){let e=this.queue.shift();this.mode="auto",this.k=Zf(e),this.phi=0,this.stopHit=!1,this.lastStep=0}if(this.mode==="auto"){let e=pa(this.k);this.phi<e?this.setPhi(Math.min(e,this.phi+560*t)):(this.hold+=t)>.12&&(this.hold=0,this.release(ma(this.k)))}else if(this.mode==="return"){let e=Math.max(0,this.phi-330*t),n=Math.ceil(e/Fe.STEP);if(this.pendingDigit!==null&&n<this.lastStep&&this.onSound("pulse"),this.lastStep=Math.min(this.lastStep,n),this.phi=e,e<=0){this.mode="idle",this.k=-1;let s=this.pendingDigit;this.pendingDigit=null,s!==null&&this.onDigit(s)}}this.wheel.rotation.z=-this.phi*wi}},Uc=["1","2","3","4","5","6","7","8","9","*","0","#"],Qf={2:"ABC",3:"DEF",4:"GHI",5:"JKL",6:"MNO",7:"PQRS",8:"TUV",9:"WXYZ",0:"OPER"},nd={kind:"push",label:"\uBC84\uD2BC\uC2DD",body:3108723,bodyDark:1786952,cord:1786952,width:3.3,profile:[[-1.7,0],[2.15,0],[2.2,.28],[-.05,1.95],[-1.35,1.95],[-1.75,1.3]],cam:{dist:9.6,up:1.25,side:1.4,look:.55},key:.43,gap:.12,depth:.12,keyColor:15853256,bezel:1972764,card:{w:1.5,h:.42},font:"bold 38px Galmuri11, sans-serif",small:!0,ink:"#2a1414",sub:"#b3262a",keyBg:"#f1e6c8"},id={kind:"big",label:"\uD070 \uAE00\uC528",body:15327695,bodyDark:12103062,cord:9076848,width:3.7,profile:[[-2.1,0],[2.6,0],[2.65,.25],[-.45,1.95],[-1.75,1.95],[-2.15,1.3]],cam:{dist:11.6,up:1.2,side:1.5,look:.5},key:.62,gap:.1,depth:.16,keyColor:16777215,bezel:2502714,card:{w:2.06,h:.5,lcd:!0},font:"bold 56px Galmuri11, sans-serif",small:!1,ink:"#111111",sub:"#c22a2a",keyBg:"#ffffff"},_a=class extends xa{constructor(t){super(t),this.queue=[],this.auto=null,this.pressed=null,this.labelsOk=!1}buildFace(t){let e=this.cfg,n=e.key+e.gap,s=3*e.key+2*e.gap,r=4*e.key+3*e.gap,a=this.faceLen/2-.14-e.card.h/2,l=a-e.card.h/2-.16;this.keys=Uc.map((x,m)=>{let p=Math.floor(m/3),_=(m%3-1)*n,v=l-e.key/2-p*n;return{label:x,digit:/\d/.test(x)?Number(x):null,x:_,y:v,down:0,target:0}});let c=l-r/2;Te(t,new ee(s+.24,r+.24,.05),Xn(e.bezel),0,c,0);let h=e.key*.2,u=e.key/2,f=new $e;f.moveTo(-u+h,-u),f.lineTo(u-h,-u),f.lineTo(u,-u+h),f.lineTo(u,u-h),f.lineTo(u-h,u),f.lineTo(-u+h,u),f.lineTo(-u,u-h),f.lineTo(-u,-u+h),f.closePath();let d=new On(f,{depth:e.depth,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:1,curveSegments:1}),g=Xs(e.keyColor,{shininess:50,specular:6314056});this.labelCanvas=document.createElement("canvas"),this.labelCanvas.width=64*3,this.labelCanvas.height=64*4,this.labelTex=new qn(this.labelCanvas),this.labelTex.colorSpace=fe,this.labelTex.minFilter=Xe,this.labelTex.magFilter=Xe;for(let x of this.keys){let m=new ne;m.position.set(x.x,x.y,.03),t.add(m),x.g=m,Te(m,d,g);let p=Uc.indexOf(x.label),y=p%3,_=Math.floor(p/3),v=new Wn(e.key*.92,e.key*.92),E=v.attributes.uv;for(let b=0;b<E.count;b++)E.setXY(b,(y+.04+E.getX(b)*.92)/3,1-(_+.04+(1-E.getY(b))*.92)/4);Te(m,v,new _e({map:this.labelTex}),0,0,e.depth+.032)}this.drawLabels(),this.cardCanvas=document.createElement("canvas"),this.cardCanvas.width=256,this.cardCanvas.height=Math.round(256*e.card.h/e.card.w),this.cardTex=new qn(this.cardCanvas),this.cardTex.colorSpace=fe,this.cardTex.minFilter=Xe,Te(t,new ee(e.card.w+.16,e.card.h+.16,.06),Xn(e.bezel),0,a,0),Te(t,new Wn(e.card.w,e.card.h),new _e({map:this.cardTex}),0,a,.035),this.setCard("\uBBFF\uC74C\uC758 \uCCB4\uC2A4","\xB7\xB7\xB7\xB7"),this.padRect={x0:-s/2,x1:s/2,y0:l-r,y1:l}}drawLabels(){let t=this.cfg,e=this.labelCanvas.getContext("2d");e.fillStyle=t.keyBg,e.fillRect(0,0,192,256),e.textAlign="center",e.textBaseline="middle",Uc.forEach((n,s)=>{let r=s%3*64+32,o=Math.floor(s/3)*64+32,a=n==="*"||n==="#";e.fillStyle=a?t.sub:t.ink,e.font=a?t.font.replace(/\d+px/,c=>Math.round(parseInt(c)*.8)+"px"):t.font;let l=t.small&&Qf[n];e.fillText(n,r,o-(l?6:1)),l&&(e.fillStyle=t.sub,e.font="10px Galmuri9, sans-serif",e.fillText(Qf[n],r,o+20))}),this.labelTex.needsUpdate=!0}setCard(t,e){let n=t+"|"+e;if(n===this.cardKey)return;this.cardKey=n;let s=this.cfg,r=this.cardCanvas,o=r.getContext("2d"),a=r.width,l=r.height;if(o.textAlign="left",o.textBaseline="middle",s.card.lcd){o.fillStyle="#9fb88a",o.fillRect(0,0,a,l),o.fillStyle="rgba(40,60,30,0.12)";for(let c=0;c<l;c+=4)o.fillRect(0,c,a,1);o.fillStyle="#1e2a16",o.font="12px Galmuri11, sans-serif",o.fillText(t,10,14),o.textAlign="right",o.font="bold 34px Galmuri11, sans-serif",o.fillText(e,a-12,l/2+8)}else o.fillStyle="#fbf4e2",o.fillRect(0,0,a,l),o.fillStyle="#c22a2a",o.fillRect(0,22,a,2),o.fillStyle=td,o.font="13px Galmuri11, sans-serif",o.fillText(t,10,11),o.textAlign="center",o.font="bold 30px Galmuri11, sans-serif",o.fillText(e,a/2,24+(l-24)/2);this.cardTex.needsUpdate=!0}keyAt(t){if(!t)return null;let e=this.cfg.key/2+this.cfg.gap/2;return this.keys.find(n=>Math.abs(t.x-n.x)<=e&&Math.abs(t.y-n.y)<=e)||null}digitScreen(t,e){let n=this.keys.find(s=>s.label===String(e));return this.faceToScreen(t,n.x,n.y,this.cfg.depth+.05)}get busy(){return!!this.auto||this.queue.length>0}press(t){this.pressed=t,t.target=1,this.onSound("dtmf",t.label)}pointerDown(t,e,n){if(this.busy||!this.enabled||this.pressed)return!1;let s=this.keyAt(this.faceLocal(t,e,n));return s?(this.press(s),!0):!1}pointerMove(t,e,n){this.pressed&&this.keyAt(this.faceLocal(t,e,n))!==this.pressed&&(this.pressed.target=0,this.pressed=null)}pointerUp(){let t=this.pressed;t&&(this.pressed=null,t.target=0,t.digit!==null&&this.onDigit(t.digit))}cancel(){this.pressed&&(this.pressed.target=0,this.pressed=null)}autoDial(t){for(let e of String(t))/\d/.test(e)&&this.queue.push(e)}abort(){this.queue=[],this.auto&&(this.auto.k.target=0,this.auto=null),this.cancel()}updateFace(t){if(!this.labelsOk&&this.t>.3&&document.fonts?.check?.(this.cfg.font)&&(this.labelsOk=!0,this.drawLabels(),this.cardKey=""),!this.auto&&this.queue.length&&!this.pressed){let e=this.keys.find(n=>n.label===this.queue[0]);this.queue.shift(),this.auto={k:e,t:0},e.target=1,this.onSound("dtmf",e.label)}if(this.auto){let e=this.auto;e.t+=t,e.t>.14&&e.k.target&&(e.k.target=0,e.k.digit!==null&&this.onDigit(e.k.digit)),e.t>.3&&(this.auto=null)}for(let e of this.keys)e.down+=(e.target-e.down)*Math.min(1,t*30),e.g.position.z=.03-e.down*this.cfg.depth*.7}},$s=["rotary","push","big"],sd={rotary:ed.label,push:nd.label,big:id.label};function rd(i){return i==="push"?new _a(nd):i==="big"?new _a(id):new Nc}var Ae=null;function ya(){if(!Ae)try{Ae=new(window.AudioContext||window.webkitAudioContext)}catch{return}Ae.state==="suspended"&&Ae.resume()}function re(i,t,{type:e="square",gain:n=.08,slide:s=0,delay:r=0}={}){if(!Ae)return;let o=Ae.currentTime+r,a=Ae.createOscillator(),l=Ae.createGain();a.type=e,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),o+t),l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(Ae.destination),a.start(o),a.stop(o+t+.02)}function kn(i,t=.1,e=0){if(!Ae)return;let n=Ae.currentTime+e,s=Ae.createBuffer(1,Ae.sampleRate*i,Ae.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*(1-c/r.length);let o=Ae.createBufferSource();o.buffer=s;let a=Ae.createGain();a.gain.value=t;let l=Ae.createBiquadFilter();l.type="lowpass",l.frequency.value=900,o.connect(l).connect(a).connect(Ae.destination),o.start(n)}function Ti(i,t,{type:e="sine",gain:n=.03,delay:s=0}={}){if(!Ae)return;let r=Ae.currentTime+s,o=Ae.createOscillator(),a=Ae.createGain();o.type=e,o.frequency.setValueAtTime(i,r),a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(n,r+.015),a.gain.setValueAtTime(n,r+t-.02),a.gain.linearRampToValueAtTime(1e-4,r+t),o.connect(a).connect(Ae.destination),o.start(r),o.stop(r+t+.02)}var jt={dialTick(){kn(.012,.08),re(2600,.012,{type:"square",gain:.015})},dialPulse(){kn(.02,.16),re(820,.02,{type:"square",gain:.03})},dialStop(){kn(.04,.2),re(170,.06,{type:"triangle",gain:.08})},dtmf(i){let t=["1","2","3","4","5","6","7","8","9","*","0","#"].indexOf(String(i));t<0||(kn(.015,.1),Ti([697,770,852,941][Math.floor(t/3)],.16,{gain:.02}),Ti([1209,1336,1477][t%3],.16,{gain:.02}))},offHook(){kn(.05,.22),re(240,.05,{type:"triangle",gain:.07}),Ti(350,.6,{gain:.012,delay:.08}),Ti(440,.6,{gain:.012,delay:.08})},hangUp(){kn(.06,.28),re(130,.09,{type:"triangle",gain:.1})},ringback(){Ti(440,1,{gain:.025}),Ti(480,1,{gain:.025})},busy(){for(let i=0;i<4;i++)Ti(480,.5,{gain:.025,delay:i}),Ti(620,.5,{gain:.025,delay:i})},ring(){for(let i=0;i<2;i++)for(let t=0;t<13;t++){let e=i*.8+t*.045;re(t%2?1320:1580,.09,{type:"triangle",gain:.035,delay:e}),re(t%2?2640:3160,.04,{type:"sine",gain:.012,delay:e})}},pickUp(){kn(.05,.25),re(300,.06,{type:"triangle",gain:.08}),re(660,.08,{type:"sine",gain:.03,delay:.08})},move(){kn(.06,.18),re(180,.05,{type:"triangle",gain:.1})},capture(){re(220,.15,{type:"sawtooth",gain:.025,slide:160}),kn(.16,.45,.17),re(70,.28,{type:"sine",gain:.22,slide:-40,delay:.17}),re(140,.12,{type:"square",gain:.07,slide:-90,delay:.17}),re(1400,.5,{type:"triangle",gain:.03,slide:-1100,delay:.24})},castle(){jt.move(),setTimeout(()=>jt.move(),90)},check(){re(880,.08,{gain:.05}),re(880,.08,{gain:.05,delay:.12})},select(){re(660,.03,{type:"triangle",gain:.04})},bad(){re(200,.25,{type:"sawtooth",gain:.06,slide:-120})},late(){re(300,.2,{type:"triangle",gain:.06,slide:-100})},halt(){kn(.07,.3),re(150,.22,{type:"square",gain:.08,slide:-50}),re(300,.12,{type:"sawtooth",gain:.04,delay:.02})},revive(){for(let i=0;i<14;i++)re(1400-i*55+i%2*180,.03,{type:"square",gain:.025,delay:i*.07});[880,1175,1568].forEach((i,t)=>re(i,.12,{type:"triangle",gain:.05,delay:1.1+t*.06}))},rewind(){for(let i=0;i<22;i++)re(900+i%3*260-i*18,.035,{type:"sawtooth",gain:.022,delay:i*.055})},vanish(){re(400,.3,{type:"sine",gain:.06,slide:-350})},shatter(){kn(.18,.35),re(160,.2,{type:"sawtooth",gain:.07,slide:-110});for(let i=0;i<7;i++)re(1400+Math.random()*2200,.05,{type:"triangle",gain:.025,delay:.04+i*.035+Math.random()*.02})},start(){re(392,.1,{gain:.06}),re(523,.1,{gain:.06,delay:.1}),re(659,.25,{gain:.06,delay:.2})},win(){[523,659,784,1046].forEach((i,t)=>re(i,.2,{gain:.06,delay:t*.12}))},lose(){[392,349,311,261].forEach((i,t)=>re(i,.25,{type:"triangle",gain:.06,delay:t*.15}))},ui(){re(520,.03,{type:"triangle",gain:.04})},secret(){re(90,.06,{type:"sine",gain:.03})}};var va=class{constructor(t,e){this.out=t,this.ctx=t.getContext("2d",{alpha:!1}),this.layers=e,this.tmp=new Map}resize(t,e,n=window.devicePixelRatio||1){let s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n));this.out.width!==s&&(this.out.width=s),this.out.height!==r&&(this.out.height=r)}draw(){let{ctx:t,out:e}=this;t.fillStyle="#000",t.fillRect(0,0,e.width,e.height);for(let n of this.layers){let s=n.width,r=n.height;if(!s||!r)continue;let o=e.width/s,a=e.height/r,l=f=>Math.abs(f-Math.round(f))<1e-6;if(l(o)&&l(a)){t.imageSmoothingEnabled=!1,t.drawImage(n,0,0,e.width,e.height);continue}let c=Math.max(1,Math.ceil(Math.max(o,a)-1e-6)),h=this.tmp.get(n);h||(h=document.createElement("canvas"),this.tmp.set(n,h)),(h.width!==s*c||h.height!==r*c)&&(h.width=s*c,h.height=r*c);let u=h.getContext("2d");u.imageSmoothingEnabled=!1,u.clearRect(0,0,h.width,h.height),u.drawImage(n,0,0,h.width,h.height),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="low",t.drawImage(h,0,0,e.width,e.height)}}get integer(){let t=this.out.width/(this.layers[1]?.width||this.layers[0].width);return Math.abs(t-Math.round(t))<1e-6}};var Qy="v0.4";function ad(i,t,{online:e=null,settings:n=!0,tagline:s="\uAC19\uC740 WiFi \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694",text3d:r=!1}={}){let o=i.pal,a=i.ctx.createLinearGradient(0,0,0,160);a.addColorStop(0,"rgba(0,0,0,0.5)"),a.addColorStop(1,"rgba(0,0,0,0)"),i.ctx.fillStyle=a,i.ctx.fillRect(0,0,At,160),i.frame(),r||(i.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",At/2,52,{scale:3,font:14}),i.letter("FAITH CHESS",At/2,112,{scale:1,font:9,spacing:3}));let l=408;i.rect(14,l,At-28,62,"rgba(0,0,0,0.72)"),i.text(s,At/2,l+6,{font:9,align:"center"}),Math.floor(t/500)%2===0&&i.text("\uD654\uBA74\uC744 \uB204\uB974\uBA74 \uC2DC\uC791\uD569\uB2C8\uB2E4",At/2,l+20,{font:11,color:o.accentHi,align:"center"});let c=438;i.hLine(30,c,At-60),i.text("COPYRIGHT 2026",34,c+6,{font:9,color:o.accent}),i.text(Qy,At-34,c+6,{font:9,color:o.accent,align:"right"}),e!==null&&i.text(e?"\u25CF":"\u25CB",16,462,{font:9,color:e?ie.green:o.dim}),n&&i.button("settings",At-50,12,38,16,"\uC124\uC815",{font:9})}function ld(i,t,e){let n=[],s=i.status==="playing";if(i.lastMove&&(n.push({sq:i.lastMove.from,color:"#f2c14e",opacity:.22}),n.push({sq:i.lastMove.to,color:"#f2c14e",opacity:.32})),t.sel!=null){n.push({sq:t.sel,color:"#7fe9ff",opacity:.5});for(let r of t.legal)n.push({sq:r.to,color:r.capture?"#ff5a4a":"#7ad17a",opacity:.42})}if(i.check&&s){let r=i.pieces.find(o=>o.type==="k"&&o.color===i.turn);r&&n.push({sq:r.sq,color:"#ff2a2a",opacity:.35+Math.sin(e/120)*.15})}return n}function tv(i){let t=i.result||{},e=t.winner===i.you,n=!t.winner,s=n?"\uBB34\uC2B9\uBD80":e?"\uC2B9\uB9AC!":"\uD328\uBC30\u2026",r={checkmate:"\uCCB4\uD06C\uBA54\uC774\uD2B8",stalemate:"\uC2A4\uD14C\uC77C\uBA54\uC774\uD2B8",insufficient:"\uAE30\uBB3C \uBD80\uC871",fifty:"50\uC218 \uADDC\uCE59",resign:e?"\uC0C1\uB300 \uAE30\uAD8C":"\uAE30\uAD8C",disconnect:e?"\uC0C1\uB300 \uC811\uC18D \uC885\uB8CC":"\uC811\uC18D \uC885\uB8CC",fouls:e?"\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C":"\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C",bare:e?"\uBC18\uCE59 \uC801\uBC1C \xB7 \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC74C":"\uBC18\uCE59 \uC801\uBC1C \xB7 \uD0B9\uB9CC \uB0A8\uC74C"}[t.result]||"";return{head:s,why:r,won:e,draw:n}}function cd(i,t,e,n,s,r){let o=i.pal,a=e.you,l=a==="w"?"b":"w",c=e.status==="playing";if(t&&!t.zoomFx&&t.squareToScreen){let y=[56,63,0,7].map(v=>t.squareToScreen(v).y),_=Math.abs(t.squareToScreen(56).x-t.squareToScreen(63).x)/14;i.boardTop=Math.round(Math.min(...y)-_)}ev(i.boardTop??108),i.vignette(),t&&t.flash>0&&i.rect(0,0,At,Ze,`rgba(255,248,230,${(t.flash*.7).toFixed(3)})`),i.rect(0,0,At,56,"rgba(0,0,0,0.5)"),i.frame();let u=((y,_,v)=>{if(i.measure(y,_)<=v)return y;let E=y;for(;E.length>1&&i.measure(E+"\u2026",_)>v;)E=E.slice(0,-1);return E+"\u2026"})(e.names[l]||"?","11b",64);i.text(`\uC0C1\uB300 \xB7 ${l==="w"?"\uBC31":"\uD751"}`,20,10,{font:9,color:o.accent}),i.text(u,20,21,{font:"11b",color:e.connected[l]?o.ink:o.dim}),i.text(e.connected[l]?"\u25CF":"\u25CB",24+i.measure(u,"11b"),22,{font:9,color:e.connected[l]?ie.green:ie.warn}),od(i,20,38,e.caught?.[l]||0),iv(i,e,s),i.button("suspect",184,10,74,28,"\uC758\uC2EC",{style:"danger",font:14,disabled:!c||!!e.pending}),i.text(`\uC81C ${e.round}\uAD6D \xB7 \uBC29 ${e.code}`,256,42,{font:9,color:o.dim,align:"right"});let f=null;n.online?c&&!e.connected[l]&&(f=["\uC0C1\uB300 \uC5F0\uACB0 \uB04A\uAE40 \xB7 30\uCD08 \uC548\uC5D0 \uC548 \uC624\uBA74 \uC2B9\uB9AC",ie.warn]):f=["\uC5F0\uACB0\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",ie.warn],f&&(i.panel(10,60,At-20,18,{fill:"rgba(10,6,8,0.9)",border:f[1],shadow:!1}),i.text(f[0],At/2,64,{font:9,align:"center",color:f[1]})),i.plaque(6,380,At-12,94);let d=e.names[a]||"?",g=`\uB098 \xB7 ${a==="w"?"\uBC31":"\uD751"}`;if(i.text(g,16,389,{font:9,color:o.accent}),od(i,16+i.measure(g,9)+10,389,e.caught?.[a]||0),i.text(d,16,400,{font:"11b"}),i.text(e.connected[a]?"\u25CF":"\u25CB",20+i.measure(d,"11b"),401,{font:9,color:ie.green}),c){let y=e.turn===a,_=e.check&&y?ie.warn:y?o.accent:o.lineLo;i.panel(150,404,106,18,{fill:y?o.btnPrimary:"#14121a",border:_,shadow:!1});let v=y?e.check?"\uCCB4\uD06C! \uB0B4 \uCC28\uB840":"\uB0B4 \uCC28\uB840":e.check?"\uC0C1\uB300 \uCCB4\uD06C":"\uC0C1\uB300 \uCC28\uB840";i.text(v,203,407,{font:11,align:"center",color:e.check&&y?ie.warn:y?o.accentHi:o.dim})}else i.text("\uB300\uAD6D \uC885\uB8CC",203,407,{font:11,align:"center",color:o.dim});let x=Math.max(0,e.eraseReadyAt-r),m=x<=0&&c;if(i.text("\uC9C0\uC6B0\uAE30",16,428,{font:9,color:o.accent}),i.bar(52,429,156,8,c?1-x/Oe.ERASE_COOLDOWN_MS:0,m?Math.floor(s/250)%2?ie.cyan:"#4fb6cc":"#6a3a2a"),i.text(m?"\uC900\uBE44\uB428":c?`${Math.ceil(x/1e3)}\uCD08`:"-",256,428,{font:9,align:"right",color:m?ie.cyan:o.dim}),i.text("\uC0C1\uB300 \uB9D0\uC744 \uAE38\uAC8C \uB20C\uB800\uB2E4 \uB5BC\uBA74 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4",16,442,{font:9,color:o.dim}),i.button("settings",14,455,40,14,"\uC124\uC815",{font:9}),c&&(n.confirmResign?(i.text("\uC815\uB9D0 \uAE30\uAD8C?",128,457,{font:9,color:ie.warn,align:"right"}),i.button("resign:yes",134,455,36,14,"\uC608",{font:9,style:"danger"}),i.button("resign:no",176,455,80,14,"\uC544\uB2C8\uC624",{font:9})):i.button("resign",216,455,40,14,"\uAE30\uAD8C",{font:9})),n.grab){let y=Math.min(1,(performance.now()-n.grab.t0p)/Oe.LONG_PRESS_MS),_=i.ctx,v=n.grab.x,E=n.grab.y-22;_.strokeStyle=y>=1?ie.cyan:"rgba(255,255,255,0.7)",_.lineWidth=2,_.beginPath(),_.arc(v,E,8,-Math.PI/2,-Math.PI/2+y*Math.PI*2),_.stroke(),y>=1&&i.text("\uB5BC\uBA74 \uC9C0\uC6C0",v,E-22,{font:9,align:"center",color:ie.cyan})}let p=Dr;if(lv(i,n.toasts,s,f?82:60,Math.max(f?96:74,(i.boardTop??108)-2),[{x:8,w:p.x-11},{x:p.x+p.w+3,w:At-8-(p.x+p.w+3)}]),e.pending?.kind==="pick"){i.dim(.5),i.plaque(14,146,At-28,168),i.text("\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?",At/2,160,{font:"11b",align:"center"});let y=Math.max(0,e.pending.deadline-r);i.bar(28,180,At-56,6,y/Oe.PICK_TIMEOUT_MS,y<3e3?ie.warn:o.accent),e.pending.choices.forEach((_,v)=>{let E=23+v*46,b=194,T="pick:"+_;i.button(T,E,b,40,58,"",{font:9});let I=i.pressedId===T?1:0,M=t?.pieceIcon?.(_,a,34);i.rect(E+3+I,b+4+I,34,34,"rgba(255,236,200,0.13)"),M&&i.ctx.drawImage(M,E+3+I,b+4+I,34,34),i.text(fn[_],E+20+I,b+42+I,{font:9,align:"center"})}),i.text("\uB9DE\uD788\uBA74 \uBC18\uCE59 \uD398\uB110\uD2F0: \uC0C1\uB300\uC758 \uAC19\uC740",At/2,262,{font:9,align:"center",color:o.dim}),i.text("\uB4F1\uAE09 \uB9D0 \uD558\uB098\uAC00 \uC0B0\uC0B0\uC870\uAC01 \uB0A9\uB2C8\uB2E4",At/2,275,{font:9,align:"center",color:o.dim}),i.text("\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C\uBA74 \uC0C1\uB300 \uD328\uBC30",At/2,288,{font:9,align:"center",color:o.dim})}else if(n.promo)i.dim(.4),i.plaque(30,180,At-60,84),i.text("\uC2B9\uAE09\uD560 \uB9D0\uC744 \uACE0\uB974\uC138\uC694",At/2,194,{font:11,align:"center"}),["q","r","b","n"].forEach((y,_)=>i.button("promo:"+y,38+_*49,214,44,34,fn[y],{font:9}));else if(e.status==="over"){let y=tv(e);i.dim(.55),i.plaque(25,150,At-50,160),y.won?i.letter(y.head,At/2,164,{scale:2,font:14}):i.bigText(y.head,At/2,166,{scale:2,font:14,color:y.draw?o.ink:ie.warn}),i.text(y.why,At/2,210,{font:11,align:"center"});let _=e.rematchVotes[a];e.rematchVotes[l]&&!_&&i.text("\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4",At/2,232,{font:9,align:"center",color:o.accentHi}),_&&i.text("\uC0C1\uB300\uC758 \uC751\uB2F5\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911\u2026",At/2,232,{font:9,align:"center",color:o.dim}),i.button("rematch",37,262,94,28,"\uC7AC\uB300\uACB0",{style:"primary",disabled:_||!e.connected[l]}),i.button("leave",139,262,94,28,"\uB098\uAC00\uAE30")}n.rewindFx&&sv(i,n.rewindFx,performance.now()),n.bubble&&av(i,n.bubble,performance.now())}var Dr={x:99,y:0,w:72,h:104};function ev(i){Dr.h=Math.max(56,Math.min(130,Math.round(i)-2))}function kc(){let i=Dr;return{x:i.x+4,y:i.y+4,w:i.w-8,h:i.h-8}}function nv(){let i=Dr;return[i.x+i.w/2,i.y+i.h]}function iv(i,t,e){let n=i.pal,s=Dr,r=i.ctx,o=t.status==="playing"?t.turn:t.status==="over"?t.result?.winner:null;i.rect(s.x-1,s.y-1,s.w+2,s.h+2,"#000"),i.rect(s.x,s.y,s.w,s.h,n.accent),i.rect(s.x,s.y,s.w,1,n.accentHi),i.rect(s.x,s.y,1,s.h,n.accentHi),i.rect(s.x,s.y+s.h-1,s.w,1,n.accentLo),i.rect(s.x+s.w-1,s.y,1,s.h,n.accentLo),i.rect(s.x+2,s.y+2,s.w-4,s.h-4,n.accentLo);for(let[l,c]of[[s.x+1,s.y+1],[s.x+s.w-4,s.y+1],[s.x+1,s.y+s.h-4],[s.x+s.w-4,s.y+s.h-4]])i.rect(l,c,3,3,n.accentHi);let a=kc();r.clearRect(a.x,a.y,a.w,a.h),i.box(a.x-1,a.y-1,a.w+2,a.h+2,o&&Math.floor(e/300)%2===0?n.accentHi:ie.gold)}var Oc=1500;function sv(i,t,e){let n=e-t.t0;if(n<0||n>Oc)return;let s=i.ctx;s.save();let r=n<150?n/150:n>Oc-300?(Oc-n)/300:1;i.rect(0,56,At,324,`rgba(60,120,170,${(.16*r).toFixed(3)})`);for(let o=0;o<4;o++){let a=56+((324-(n*.45+o*83))%324+324)%324;i.rect(0,Math.round(a),At,2,`rgba(230,240,255,${(.28*r).toFixed(3)})`),i.rect(0,Math.round(a)+3,At,1,`rgba(255,90,210,${(.18*r).toFixed(3)})`)}s.globalAlpha=r*(Math.floor(n/250)%2?.75:1),i.bigText("\u25C0\u25C0 \uB418\uAC10\uAE30",16,64,{scale:1,font:14,color:"#ffffff",align:"left"}),t.undone&&i.text(`${t.undone}\uC218 \uBB34\uB984`,18,84,{font:9,color:"#cfe9ff"}),s.restore()}function od(i,t,e,n){let s=i.pal;i.text("\uBC18\uCE59",t,e,{font:9,color:n?ie.warn:s.dim});let r=t+i.measure("\uBC18\uCE59",9)+4;for(let o=0;o<Oe.FOUL_LIMIT;o++){let a=o<n,l=r+o*10,c=e+2;i.rect(l+1,c+1,7,7,"#000"),i.rect(l,c,7,7,a?"#d4382c":"rgba(0,0,0,0.6)"),i.box(l,c,7,7,a?"#ff8a7a":s.lineLo),a&&(i.rect(l+3,c+1,1,3,"#fff"),i.rect(l+3,c+5,1,1,"#fff"))}}var Fc=1600,Bc=new Map;function rv(i){let t=i.getContext("2d"),e=t.getImageData(0,0,i.width,i.height),n=e.data;for(let s=3;s<n.length;s+=4)n[s]=n[s]>=110?255:0;return t.putImageData(e,0,0),i}function ov(i,t){let e=nv(),n=t+e.join(",");if(Bc.has(n))return Bc.get(n);let s="\uB3D9\uC791 \uADF8\uB9CC!",r=2,o=(i.measure(s,14)+4)*r,a=19*r,l=t==="w"?166:104,c=e[1]+58,h=o/2+12,u=a/2+10,f=15,d=W=>{let D=Math.sin(W*12.9898+(t==="w"?7.1:3.3))*43758.5453;return D-Math.floor(D)},g=[];for(let W=0;W<f*2;W++){let D=W/(f*2)*Math.PI*2-Math.PI/2+.11,F=W%2===0,z=F?1.2+d(W)*.22:.97+d(W+30)*.05,J=F?1.45+d(W+60)*.45:1;g.push([l+Math.cos(D)*h*z,c+Math.sin(D)*u*J])}let x=Math.atan2(e[1]-c,e[0]-l),m=0,p=1/0;g.forEach(([W,D],F)=>{if(F%2)return;let z=Math.abs(Math.atan2(D-c,W-l)-x);z=Math.min(z,Math.PI*2-z),z<p&&(p=z,m=F)}),g[m]=e;let y=W=>{let D=document.createElement("canvas");D.width=At,D.height=Ze;let F=D.getContext("2d");return W(F),rv(D)},_=W=>{W.beginPath(),g.forEach(([D,F],z)=>z?W.lineTo(D,F):W.moveTo(D,F)),W.closePath()},v=y(W=>{_(W),W.fillStyle="#1a0a10",W.fill(),W.lineJoin="miter",W.miterLimit=12,W.lineWidth=5,W.strokeStyle="#1a0a10",W.stroke()}),E=y(W=>{_(W),W.fillStyle="#fff2a6",W.fill()}),b=document.createElement("canvas");b.width=At,b.height=Ze;let T=b.getContext("2d");T.imageSmoothingEnabled=!1,T.globalAlpha=.6,T.drawImage(v,3,3),T.globalAlpha=1,T.drawImage(v,0,0),T.drawImage(E,0,0);let I=i.ctx;i.ctx=T,i.bigText(s,l,Math.round(c-a/2)+1,{scale:r,font:14,color:"#d4141e",shadow:!0}),i.ctx=I;let M=g.map(W=>W[0]),w=g.map(W=>W[1]),N={x:Math.floor(Math.min(...M))-4,y:Math.floor(Math.min(...w))-4,cx:l,cy:c};N.w=Math.ceil(Math.max(...M))+8-N.x,N.h=Math.ceil(Math.max(...w))+8-N.y;let G={sprite:b,box:N};return Bc.set(n,G),G}function av(i,t,e){let n=e-t.t0;if(n<0||n>Fc)return;let{sprite:s,box:r}=ov(i,t.by),o=n<90?.6+n/90*.55:n<160?1.15-(n-90)/70*.15:1,a=n>=160&&n<420?Math.floor(n/40)%2?2:-2:0,l=i.ctx;l.save(),l.imageSmoothingEnabled=!1,l.globalAlpha=n>Fc-300?(Fc-n)/300:1;let c=Math.round(r.w*o),h=Math.round(r.h*o),u=Math.round(r.cx-(r.cx-r.x)*o)+a,f=Math.round(r.cy-(r.cy-r.y)*o);l.drawImage(s,r.x,r.y,r.w,r.h,u,f,c,h),l.restore()}function lv(i,t,e,n,s=106,r=[{x:10,w:At-20}]){let o=i.pal,a={secret:"#b0a49a",bad:ie.warn,late:ie.late,good:ie.green,warn:ie.gold,info:o.ink},l=11,c=0,h=n,u=!0;for(let f of t.slice().reverse()){let d=e-f.t;if(d>5e3)continue;let g=d>4e3?Math.max(0,1-(d-4e3)/1e3):1,x,m;for(;;){if(c>=r.length)return;if(x=i.lines(f.text,r[c].w-8,9),m=Math.floor((s-h+1)/l),x.length<=m||u&&h===n&&c===r.length-1||u&&m>0&&h===n)break;c++,h=n}if(m<=0)return;x.length>m&&(x=x.slice(0,m),x[m-1]=x[m-1].slice(0,-1)+"\u2026");let p=r[c];i.ctx.save(),i.ctx.globalAlpha=g*(u?1:.8);let y=Math.max(...x.map(_=>i.measure(_,9)))+8;i.rect(p.x,h-1,y,x.length*l+1,"rgba(0,0,0,0.7)"),x.forEach((_,v)=>i.text(_,p.x+4,h+v*l,{font:9,color:a[f.kind]||o.ink})),i.ctx.restore(),h+=x.length*l+3,u=!1}}function hd(i,t){let e=i.pal;i.dim(.55),i.plaque(8,22,At-16,438),i.text("\uC2DC\uAC01 \uC124\uC815",At/2,34,{font:"11b",align:"center",color:e.accentHi}),i.text("\uBC14\uAFB8\uBA74 \uBC14\uB85C \uC801\uC6A9\uB418\uACE0 \uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4",At/2,48,{font:9,align:"center",color:e.dim}),ks.forEach((n,s)=>{let r=64+s*44;i.text(n.label,22,r,{font:9,color:e.accent}),i.button(`th:${n.id}:-1`,20,r+12,26,22,"<",{font:11}),i.text(gf(n.id,t[n.id]),At/2,r+17,{font:11,align:"center"}),i.button(`th:${n.id}:1`,At-46,r+12,26,22,">",{font:11})}),i.button("settings:close",At/2-50,420,100,26,"\uB2EB\uAE30",{style:"primary"})}var pe=globalThis.FAITH_TARGET||"lan",Je=i=>document.getElementById(i),dd=Je("gl"),Yn=Je("ui"),cv=Je("out"),Zs=Je("dom"),Hc=Je("stage"),Qt=new ra(dd),rt=new oa(Yn),Ur=new va(cv,[dd,Yn]),$t=new aa,P={mode:"boot",view:null,offset:0,toasts:[],sel:null,legal:[],promo:null,confirmResign:!1,pointers:new Map,grab:null,btnPid:null,touchMax:0,bubble:null,rewindFx:null,info:null,roomParam:new URLSearchParams(location.search).get("room"),err:"",settings:!1,theme:pf(),lan:null,roomT:null,roomChecked:pe!=="artifact",shareMsg:null},Vc=i=>`${location.origin}${location.pathname}?room=${i}`,ji={x:8,y:76,w:254,h:270},pd="faith-chess-phone";function hv(){let i=new URLSearchParams(location.search).get("phone");if($s.includes(i))return i;try{let t=localStorage.getItem(pd);if($s.includes(t))return t}catch{}return"big"}var ae=null;function Gc(i){let t=ae;ae=rd(i),ae.onSound=(e,n)=>({tick:jt.dialTick,pulse:jt.dialPulse,stop:jt.dialStop,dtmf:jt.dtmf})[e]?.(n),ae.onDigit=fv,t&&(ae.setLift(t.liftTo),ae.lift=t.lift),Qt.phoneStage=ae}pe==="web"&&Gc(hv());var md=()=>pe==="web"&&!P.call.digits&&!P.call.calling&&!P.call.pickup&&!ae.busy&&P.phonePid==null;function uv(){if(!md())return;let i=$s[($s.indexOf(ae.kind)+1)%$s.length];Gc(i);try{localStorage.setItem(pd,i)}catch{}jt.ui()}P.call={digits:"",calling:!1,ringbackT:null,ringFx:0,pickup:0,qr:!1,autoDialed:!1};P.phonePid=null;var ba=()=>pe==="web"&&!!P.roomT&&P.mode==="lobby"&&!P.settings&&!P.call.calling&&P.call.digits.length<4;function Wc(){let i=Je("name"),t=(i?i.value:Yc()).trim().slice(0,12);try{localStorage.setItem("faith-chess-name",t)}catch{}return t}function fv(i){ba()&&(P.call.digits||(ae.setLift(.3),jt.offHook()),P.call.digits+=i,P.err="",P.call.digits.length===4&&dv())}async function dv(){let i=P.call.digits;P.call.calling=!0,jt.ringback(),P.call.ringbackT=setInterval(()=>jt.ringback(),3e3);try{$t.use(P.roomT),await P.roomT.join(i,Wc()),P.call.calling&&P.mode==="lobby"&&(P.mode="waiting-join")}catch(t){console.warn(t),Nr("\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694.")}}function qc(){clearInterval(P.call.ringbackT),P.call.ringbackT=null}function Nr(i){qc();let t=P.call.calling||P.call.digits;P.call.calling=!1,P.call.digits="",ae?.abort(),ae?.setLift(0),i?(P.err=i,jt.busy()):t&&jt.hangUp()}function gd(){let i=getComputedStyle(document.body),t=document.body.clientWidth-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight),e=document.body.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom),n=window.devicePixelRatio||1,s=Math.max(.5,Math.min(t/St,e/yn)),r=Math.ceil(s*n),o=Math.floor(s*n),a=s;r/n<=s*1.025?a=r/n:o>=1&&o/n>=s*.92&&(a=o/n),document.documentElement.style.setProperty("--s",String(a)),document.documentElement.style.setProperty("--fs",String(Math.max(1,Math.round(a*n))/n)),P.scale=a,Ur.resize(St*a,yn*a,n),Qt.setNativeSize(Ur.out.width,Ur.out.height),Hc.style.transform="";let l=Hc.getBoundingClientRect(),c=l.left*n%1,h=l.top*n%1;(c||h)&&(Hc.style.transform=`translate(${-c/n}px, ${-h/n}px)`)}addEventListener("resize",gd);gd();var pv=(i,t)=>i.x>=t.x&&i.x<t.x+t.w&&i.y>=t.y&&i.y<t.y+t.h;function Or(i){let t=Yn.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*St,y:(i.clientY-t.top)/t.height*yn}}function Xc(i){P.theme=i,Qo(i),Qt.applyTheme(i),rt.setTheme(i);let t=Tr[i.frame],e=document.documentElement.style;e.setProperty("--accent",t.accent),e.setProperty("--accent-hi",t.accentHi),e.setProperty("--line",t.line),e.setProperty("--ink",t.ink),e.setProperty("--dim",t.dim),e.setProperty("--btn",t.btn),e.setProperty("--btn-primary",t.btnPrimary)}var mv=()=>Date.now()+P.offset,Sa=()=>P.view?.you;function Ea(i){return P.view?.pieces.find(t=>t.sq===i)||null}function gv(){let i=P.view,t=new Array(64).fill(null);for(let e of i.pieces)t[e.sq]={id:e.id,type:e.type,color:e.color,shield:e.shield};return{board:t,turn:i.turn,castling:i.castling,ep:i.ep,halfmove:0,fullmove:1,lastMove:null}}function xv(i,t="info"){P.toasts.push({text:i,kind:t,t:performance.now()}),P.toasts.length>4&&P.toasts.shift()}function xd(){if(location.hostname!=="localhost"&&location.hostname!=="127.0.0.1")return location.origin+"/";let i=P.info?.addresses?.[0];return i?`http://${i.address}:${P.info.port}/`:location.origin+"/"}function _d(){P.sel=null,P.legal=[],P.promo=null,P.confirmResign=!1}$t.addEventListener("error",i=>{pe==="web"&&P.call.calling?Nr(i.detail.text):P.err=i.detail.text,["waiting","lobby","waiting-join"].includes(P.mode)&&Js()});$t.addEventListener("joined",()=>{P.err="",zc(),pe==="web"&&P.call.calling&&(qc(),jt.pickUp())});$t.addEventListener("ring",()=>{ae?.ring(1.7),jt.ring(),P.call.ringFx=performance.now()});$t.addEventListener("ringstop",()=>{P.call.ringFx=0,ae&&(ae.ringT=0)});$t.addEventListener("toast",i=>{let{text:t,kind:e}=i.detail;xv(t,e),{secret:jt.secret,bad:jt.bad,late:jt.late,warn:jt.ui,info:jt.ui,good:jt.ui}[e]?.()});$t.addEventListener("event",i=>{let{name:t,check:e,by:n,at:s}=i.detail;t==="start"?(_d(),jt.start()):t==="move"||t==="capture"||t==="castle"?(jt[t](),e&&setTimeout(()=>jt.check(),120),t==="capture"&&n&&n===Sa()&&Qt.attackZoom(s)):t==="penalty"?(Qt.shatter(i.detail.at),jt.shatter()):t==="rewind"?(P.sel=null,P.legal=[],P.promo=null,P.rewindFx={t0:performance.now(),undone:i.detail.undone},Qt.rewind(),jt.rewind()):t==="revive"?(Qt.reviveAt(i.detail.at),jt.revive()):t==="suspect"?(P.bubble={by:n,t0:performance.now()},jt.halt()):t==="vanish"&&jt.vanish()});$t.addEventListener("state",i=>{let t=i.detail,e=P.view;P.view=t,P.offset=t.serverNow-Date.now(),Qt.setSide(t.you==="w"?1:-1),t.status==="waiting"?(P.mode="waiting",zc(),Qt.setMode("title")):(P.mode!=="game"&&(pe==="web"&&$t.kind==="peer"&&t.status==="playing"&&(P.call.pickup=performance.now(),ae.setLift(1),P.call.calling||jt.pickUp()),pe==="web"&&(qc(),P.call.calling=!1,P.call.digits="",P.call.ringFx=0,P.call.qr=!1),P.mode="game",zc(),Qt.clearPieces()),Qt.setMode("game"),Qt.sync(t.pieces,t.lastMove)),(!e||e.turn!==t.turn||e.status!==t.status||e.round!==t.round)&&(P.sel=null,P.legal=[],P.promo=null),e&&e.status==="playing"&&t.status==="over"&&(P.confirmResign=!1,t.result?.winner===t.you?jt.win():t.result?.winner?jt.lose():jt.ui())});function zc(){Zs.hidden=!0,Zs.innerHTML=""}function Ma(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Yc(){try{return localStorage.getItem("faith-chess-name")||""}catch{return""}}function Js(){P.mode="lobby",P.settings=!1,Qt.setMode("title"),Zs.hidden=!1;let i=pe==="lan",t=P.roomT,e=!i&&!t;if(pe==="web")return _v();let n=(P.roomParam||"").replace(/[^A-Za-z0-9]/g,"").slice(0,4);Zs.innerHTML=`
    <form class="panel" id="lobby" autocomplete="off">
      <label for="name">\uC774\uB984</label>
      <input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${Ma(Yc())}">
      <div class="row">
        <button type="button" id="create" class="primary" ${e?"disabled":""}>\uBC29 \uB9CC\uB4E4\uAE30</button>
        ${i?'<button type="button" id="quick">\uBE60\uB978 \uB300\uC804</button>':""}
      </div>
      <label for="code">\uBC29 \uCF54\uB4DC\uB85C \uCC38\uAC00</label>
      <div class="row tight"><input id="code" class="code" maxlength="4" placeholder="ABCD" value="${Ma(n)}" ${e?"disabled":""}><button type="submit" id="join" class="narrow" ${e?"disabled":""}>\uCC38\uAC00</button></div>
      ${pe==="artifact"?'<label>\uC5F4\uB9B0 \uBC29</label><div id="rooms" class="rooms"></div>':""}
      <div class="row"><button type="button" id="bot">\uBD07\uACFC \uC5F0\uC2B5</button></div>
      <div class="err" id="err" role="alert">${Ma(P.err||"")}</div>
      <div class="hint" id="hint"></div>
    </form>`;let s=Je("hint");i?s.textContent="\uAC19\uC740 WiFi\uC758 \uC0C1\uB300\uB294 \uC544\uB798 \uC8FC\uC18C\uB098 QR\uB85C \uC811\uC18D\uD569\uB2C8\uB2E4.":P.roomChecked?e&&pe==="web"?s.textContent="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD574 \uBCF4\uC138\uC694. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":e?s.textContent="\uB450 \uD3F0 \uB300\uC804\uC740 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD55C \uC0C1\uD0DC\uB85C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":pe==="web"?s.textContent=P.roomParam?"\uC774\uB984\uC744 \uC801\uACE0 \uCC38\uAC00\uB97C \uB204\uB974\uC138\uC694.":"\uBC29\uC744 \uB9CC\uB4E4\uBA74 \uB9C1\uD06C\uAC00 \uC0DD\uAE41\uB2C8\uB2E4. \uC0C1\uB300\uC5D0\uAC8C \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uAC70\uB098 \uCF54\uB4DC\uB97C \uC54C\uB824 \uC8FC\uC138\uC694.":s.textContent="\uD55C \uD3F0\uC5D0\uC11C \uBC29\uC744 \uB9CC\uB4E4\uACE0, \uB2E4\uB978 \uD3F0\uC5D0\uC11C\uB294 \uC5F4\uB9B0 \uBC29\uC744 \uB204\uB974\uAC70\uB098 \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694.":s.textContent="\uB450 \uD3F0 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uB294 \uC911\uC785\uB2C8\uB2E4\u2026";let r=Je("name"),o=Je("code"),a=()=>{let u=r.value.trim().slice(0,12);try{localStorage.setItem("faith-chess-name",u)}catch{}return u},l=u=>{Je("err").textContent=u},c=u=>async(...f)=>{ya(),P.err="",l("");try{await u(...f)}catch(d){l("\uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."),console.warn(d)}},h=c(async u=>{let f=(typeof u=="string"?u:o.value).trim().toUpperCase();if(f.length!==4){l("\uBC29 \uCF54\uB4DC 4\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694.");return}if(i){if(!$t.online)return l("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");$t.use(P.lan),$t.send({type:"join",code:f,name:a()})}else $t.use(P.roomT),await P.roomT.join(f,a()),P.mode="waiting-join",l("\uBC29\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uC911\u2026")});if(Je("create").onclick=c(async()=>{if(i){if(!P.lan.online)return l("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");$t.use(P.lan),$t.send({type:"create",name:a()})}else $t.use(P.roomT),await P.roomT.create(a())}),i&&(Je("quick").onclick=c(async()=>{if(!P.lan.online)return l("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");$t.use(P.lan),$t.send({type:"quick",name:a()})})),Je("bot").onclick=c(async()=>{$t.use(new Ir).start(a()||"\uB098")}),Je("lobby").onsubmit=u=>{u.preventDefault(),h()},pe==="artifact"&&t){let u=f=>{let d=Je("rooms");if(d){if(d.textContent="",!f.length){let g=document.createElement("div");g.className="empty",g.textContent="\uC544\uC9C1 \uC5F4\uB9B0 \uBC29\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",d.append(g);return}for(let g of f.slice(0,4)){let x=document.createElement("button");x.type="button",x.textContent=`${g.code} \xB7 ${g.name}`,x.onclick=()=>h(g.code),d.append(x)}}};t.onLobby=u,u(t.openRooms())}P.roomParam||r.focus({preventScroll:!0})}function _v(){Zs.innerHTML=`<form class="panel slim" id="lobby" autocomplete="off"><label for="name">\uC774\uB984</label><input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${Ma(Yc())}" enterkeyhint="done"></form>`,Je("lobby").onsubmit=i=>{i.preventDefault(),Je("name").blur()},P.call.calling||ae.setLift(P.call.digits?.3:0),P.roomParam&&!P.call.autoDialed&&/^\d{4}$/.test(P.roomParam)&&(P.call.autoDialed=!0,setTimeout(()=>{ba()&&!P.call.digits&&!ae.busy&&ae.autoDial(P.roomParam)},600))}function wa(i){P.grab&&(i==null||P.grab.pid===i)&&(clearTimeout(P.grab.timer),P.grab=null)}function yv(i,t,e,n){wa();let s={pid:e.pointerId,pieceId:t.id,sq:i,x:n.x,y:n.y,t0:e.timeStamp,t0p:performance.now(),armed:!1,timer:null};s.timer=setTimeout(()=>{s.armed=!0,jt.select();try{navigator.vibrate?.(15)}catch{}},Oe.LONG_PRESS_MS),P.grab=s}var $c=()=>P.mode==="game"&&!P.call.pickup&&P.view?.status==="playing"&&!P.promo&&!P.settings&&P.view.pending?.kind!=="pick";Yn.addEventListener("pointerdown",i=>{if(ya(),i.button!==0)return;P.lastPointerType=i.pointerType;let t=Or(i),e=P.pointers.size===0;P.pointers.set(i.pointerId,{x:t.x,y:t.y,moved:!1}),P.touchMax=Math.max(P.touchMax,P.pointers.size);try{Yn.setPointerCapture(i.pointerId)}catch{}if(e&&(rt.pressedId=rt.hit(t.x,t.y),P.btnPid=rt.pressedId?i.pointerId:null),pe==="web"&&P.mode==="lobby"&&document.activeElement?.blur?.(),ae&&P.btnPid!==i.pointerId&&P.phonePid==null&&ba()&&pv(t,ji)&&ae.pointerDown(ji,t.x,t.y,i.timeStamp)){P.phonePid=i.pointerId;return}if(P.btnPid===i.pointerId||!$c())return;let n=Qt.pickSquare(t.x,t.y),s=Ea(n);s&&s.color!==Sa()&&!P.grab&&yv(n,s,i,t)});Yn.addEventListener("pointermove",i=>{if(P.phonePid===i.pointerId){let n=Or(i);ae.pointerMove(ji,n.x,n.y);return}let t=P.pointers.get(i.pointerId);if(!t)return;let e=Or(i);Math.hypot(e.x-t.x,e.y-t.y)>6&&(t.moved=!0,wa(i.pointerId))});Yn.addEventListener("pointerup",i=>{if(P.phonePid===i.pointerId){P.pointers.delete(i.pointerId),P.phonePid=null,ae.pointerUp(i.timeStamp);return}let t=P.pointers.get(i.pointerId);if(P.pointers.delete(i.pointerId),!t)return;let e=Or(i),n=P.grab&&P.grab.pid===i.pointerId?P.grab:null;if(n&&(wa(i.pointerId),i.timeStamp-n.t0>=Oe.LONG_PRESS_MS||n.armed)){let s=P.view?.pieces.find(r=>r.id===n.pieceId);s&&s.color!==Sa()&&$c()&&$t.send({type:"erase",square:s.sq});return}if(P.btnPid===i.pointerId){let s=rt.pressedId;rt.pressedId=null,P.btnPid=null,s&&rt.hit(e.x,e.y)===s&&Sv(s);return}if(!(t.moved||P.settings)){if(P.mode==="title"){Js();return}P.mode==="game"&&vv(Qt.pickSquare(e.x,e.y))}});Yn.addEventListener("pointercancel",i=>{P.pointers.delete(i.pointerId),P.phonePid===i.pointerId&&(P.phonePid=null,ae.cancel()),P.btnPid===i.pointerId&&(rt.pressedId=null,P.btnPid=null),wa(i.pointerId)});for(let i of["touchstart","touchmove","touchend","touchcancel"])Yn.addEventListener(i,t=>{t.cancelable&&t.preventDefault(),t.touches&&(P.touchMax=Math.max(P.touchMax,t.touches.length))},{passive:!1});document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("gesturechange",i=>i.preventDefault());Yn.addEventListener("contextmenu",i=>{if(i.preventDefault(),P.lastPointerType&&P.lastPointerType!=="mouse"||!$c())return;let t=Or(i),e=Qt.pickSquare(t.x,t.y),n=Ea(e);n&&n.color!==Sa()&&$t.send({type:"erase",square:e})});function vv(i){let t=P.view;if(!t||P.promo)return;if(i<0){P.sel=null,P.legal=[];return}let e=Ea(i);if(t.status==="playing"){if(P.sel!=null){let n=P.legal.find(s=>s.to===i);if(n){n.promotion?P.promo={from:n.from,to:n.to}:($t.send({type:"move",from:n.from,to:n.to}),P.sel=null,P.legal=[]);return}}if(e&&e.color===t.you&&t.turn===t.you){if(P.sel===i){P.sel=null,P.legal=[];return}P.sel=i,P.legal=qs(gv(),i),jt.select()}else P.sel=null,P.legal=[]}}function ud(i){P.settings=i,P.touchMax=0,P.mode==="lobby"&&(i?Zs.hidden=!0:Js())}async function Mv(){let i=P.view?.code;if(!i)return;let t=Vc(i),e=n=>{P.shareMsg={text:n,t:performance.now()}};if(navigator.share)try{await navigator.share({title:"\uBBFF\uC74C\uC758 \uCCB4\uC2A4",text:`\uBBFF\uC74C\uC758 \uCCB4\uC2A4 \uD55C \uD310! \uBC29 \uCF54\uB4DC ${i}`,url:t}),e("\uBCF4\uB0C8\uC2B5\uB2C8\uB2E4");return}catch(n){if(n?.name==="AbortError")return}try{await navigator.clipboard.writeText(t),e("\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4")}catch{e("\uC8FC\uC18C\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD558\uC138\uC694")}}async function bv(){ya(),P.err="",Nr();try{$t.use(P.roomT),await P.roomT.create(Wc())}catch(i){console.warn(i),P.err="\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uD574 \uBCF4\uC138\uC694.",jt.busy()}}function Sv(i){if(jt.ui(),i==="settings")return ud(!0);if(i==="settings:close")return ud(!1);if(i.startsWith("th:")){let[,t,e]=i.split(":");Xc(mf(P.theme,t,Number(e)));return}if(i==="suspect")return $t.send({type:"suspect"});if(i.startsWith("pick:"))return $t.send({type:"pick",pieceType:i.slice(5)});if(i.startsWith("promo:")){$t.send({type:"move",from:P.promo.from,to:P.promo.to,promotion:i.slice(6)}),P.promo=null,P.sel=null,P.legal=[];return}if(i==="resign"){P.confirmResign=!0;return}if(i==="resign:yes")return P.confirmResign=!1,$t.send({type:"resign"});if(i==="resign:no"){P.confirmResign=!1;return}if(i==="rematch")return $t.send({type:"rematch"});if(i==="share")return Mv();if(i==="qr"){P.call.qr=!0;return}if(i==="qr:close"){P.call.qr=!1;return}if(i==="call:create")return bv();if(i==="phone:next")return uv();if(i==="call:bot"){Nr(),$t.use(new Ir).start(Wc()||"\uB098");return}if(i==="call:clear"){P.call.calling&&(P.roomT?.close(),P.mode="lobby"),P.err="",Nr();return}(i==="leave"||i==="cancel-wait")&&(pe==="web"&&(i==="cancel-wait"&&jt.hangUp(),P.call.ringFx=0,P.call.qr=!1),$t.leave(),P.lan&&$t.use(P.lan),P.view=null,_d(),Qt.clearPieces(),bd(),Js())}function yd(){let i=ji;rt.ctx.clearRect(i.x,i.y,i.w,i.h),rt.box(i.x-1,i.y-1,i.w+2,i.h+2,rt.pal.accent),rt.box(i.x-2,i.y-2,i.w+4,i.h+4,"#000")}function vd(i,t,e,n,s){let r=rt.pal;rt.text(i,St/2,e,{font:9,align:"center",color:r.accent});let o=30,a=6,l=Math.round(St/2-(4*o+3*a)/2);for(let c=0;c<4;c++){let h=l+c*(o+a),u=c<t.length;rt.rect(h,e+12,o,30,"#000"),rt.box(h,e+12,o,30,u?r.accentHi:r.lineLo),u?rt.bigText(t[c],h+o/2,e+14,{scale:2,font:11,color:r.accentHi}):s&&c===t.length&&Math.floor(n/400)%2===0&&rt.rect(h+9,e+35,12,2,r.accent)}}function Md(){rt.dim(.78),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",St/2,8,{scale:2,font:14}),rt.button("settings",St-50,12,38,16,"\uC124\uC815",{font:9}),yd()}function Ev(i){let t=performance.now()-P.call.ringFx;if(!P.call.ringFx||t>1700)return;let e=Math.floor(t/400)%2===0,n=e?Math.round(Math.sin(i/18)*2):0;rt.bigText("\uB530\uB974\uB989!",St/2+n,ji.y+8,{scale:2,font:14,color:e?ie.gold:rt.pal.ink})}function wv(i){let t=rt.pal,e=P.call;Md(),ae.setCard(e.calling?"\uAC70\uB294 \uC911":"\uC0C1\uB300 \uBC88\uD638",e.digits.padEnd(4,"\xB7")),vd("\uC0C1\uB300 \uBC88\uD638",e.digits,350,i,!e.calling),e.digits&&!P.settings&&rt.button("call:clear",St-46,364,36,24,"\uB04A\uAE30",{font:9});let n,s=t.dim;P.roomT?P.err?(n=P.err,s=ie.warn):e.calling?(n="\uB69C\uB974\uB974\u2026 \uAC70\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),s=t.accentHi):e.digits?n=`\uB098\uBA38\uC9C0 ${4-e.digits.length}\uC790\uB9AC\uB97C \uAC70\uC138\uC694`:n=ae.kind==="rotary"?"\uC0C1\uB300 \uBC88\uD638 4\uC790\uB9AC\uB97C \uB2E4\uC774\uC5BC\uB85C \uAC70\uC138\uC694. \uAD6C\uBA4D\uC744 \uBA48\uCDA4\uC1E0\uAE4C\uC9C0 \uB3CC\uB824 \uB193\uAC70\uB098 \uD1A1 \uB204\uB974\uC138\uC694":"\uC0C1\uB300 \uBC88\uD638 4\uC790\uB9AC\uB97C \uBC84\uD2BC\uC73C\uB85C \uB204\uB974\uC138\uC694":(n="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",s=ie.warn),rt.lines(n,St-24,9).slice(0,2).forEach((o,a)=>rt.text(o,St/2,398+a*11,{font:9,align:"center",color:s})),rt.button("call:create",16,422,128,26,"\uB0B4 \uBC88\uD638 \uB9CC\uB4E4\uAE30",{style:"primary",font:11,disabled:!P.roomT||e.calling}),rt.button("call:bot",150,422,104,26,"\uBD07\uACFC \uC5F0\uC2B5",{font:11,disabled:e.calling}),rt.button("phone:next",St/2-60,453,120,16,`\uC804\uD654\uAE30: ${sd[ae.kind]} \u25B8`,{font:9,disabled:!md()})}function Tv(i){let t=P.view,e=rt.pal;Md(),ae.setCard("\uB0B4 \uBC88\uD638",t.code),Ev(i),vd("\uB0B4 \uBC88\uD638",t.code,350,i,!1);let n=P.call.ringFx&&performance.now()-P.call.ringFx<1700,s=n?"\uB530\uB974\uB989! \uC804\uD654\uAC00 \uC654\uC2B5\uB2C8\uB2E4":"\uC774 \uBC88\uD638\uB85C \uC804\uD654\uAC00 \uC624\uBA74 \uC2DC\uC791\uD569\uB2C8\uB2E4"+".".repeat(Math.floor(i/400)%4);rt.text(s,St/2,398,{font:9,align:"center",color:n?ie.gold:e.dim}),rt.button("share",16,414,120,26,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{style:"primary",font:11}),rt.button("qr",142,414,50,26,"QR",{font:11}),rt.button("cancel-wait",198,414,56,26,"\uB04A\uAE30",{font:11});let r=P.shareMsg;if(r&&performance.now()-r.t<3e3?rt.text(r.text,St/2,446,{font:9,align:"center",color:e.accentHi}):rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,St/2,446,{font:9,align:"center",color:e.dim}),$t.online||rt.text("\u25CB \uAD50\uD658\uAD6D\uACFC \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",St/2,460,{font:9,align:"center",color:ie.warn}),P.call.qr){rt.dim(.8);let o=Vc(t.code);rt.panel(30,110,St-60,250),rt.text("\uCE74\uBA54\uB77C\uB85C \uCC0D\uC73C\uBA74 \uBC14\uB85C \uAC78\uB9BD\uB2C8\uB2E4",St/2,122,{font:9,align:"center",color:e.accent});let a=rt.qr(o,0,-9999,1)-2,l=Math.max(2,Math.floor(180/(a+2))),c=(a+2)*l;rt.qr(o,Math.round(St/2-c/2),138,l),rt.button("qr:close",St/2-40,330,80,22,"\uB2EB\uAE30",{font:11})}}function Av(i){rt.rect(0,0,St,yn,"#000"),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",St/2,8,{scale:2,font:14}),yd(),rt.bigText("\uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4",St/2,362,{scale:2,font:11,color:ie.gold});let t=P.view;t&&rt.text(`${t.names.w||"?"}(\uBC31)  vs  ${t.names.b||"?"}(\uD751)`,St/2,400,{font:9,align:"center",color:rt.pal.dim})}function Rv(){let i=rt.pal;if(rt.dim(.25),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",St/2,18,{scale:2,font:14}),rt.button("settings",St-50,12,38,16,"\uC124\uC815",{font:9}),pe==="lan"){rt.plaque(40,330,St-80,136),rt.text("\uC0C1\uB300 \uC811\uC18D \uC8FC\uC18C",St/2,340,{font:9,color:i.accent,align:"center"});let t=xd(),e=rt.qr(t,St/2-33,352,2);rt.text(t.replace(/^https?:\/\//,"").replace(/\/$/,""),St/2,356+e,{font:9,align:"center"})}rt.text($t.online||P.roomT?"\u25CF \uC5F0\uACB0\uB428":"\u25CB \uC5F0\uACB0 \uC911\u2026",14,462,{font:9,color:$t.online||P.roomT?ie.green:i.dim})}function Cv(i){if(pe==="web")return Tv(i);let t=P.view,e=rt.pal;if(rt.dim(.35),rt.vignette(),rt.frame(),rt.plaque(20,60,St-40,340),rt.text("\uC0C1\uB300\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),St/2,74,{font:11,align:"center",color:e.dim}),rt.text("\uBC29 \uCF54\uB4DC",St/2,100,{font:9,align:"center",color:e.accent}),rt.letter(t.code,St/2,112,{scale:3,font:14}),pe==="lan"){let n=`${xd()}?room=${t.code}`,s=rt.qr(n,St/2-41,180,2);rt.text(n.replace(/^https?:\/\//,""),St/2,184+s,{font:9,align:"center"})}else if(pe==="web"){let n=Vc(t.code),s=rt.qr(n,St/2-41,166,2);rt.text(n.replace(/^https?:\/\//,""),St/2,170+s,{font:9,align:"center"}),rt.button("share",St/2-60,192+s,120,24,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{font:11,style:"primary"});let r=P.shareMsg;r&&performance.now()-r.t<3e3?rt.text(r.text,St/2,222+s,{font:9,align:"center",color:e.accentHi}):rt.text("\uAC19\uC774 \uC788\uC73C\uBA74 QR\uC744 \uCC0D\uC5B4\uB3C4 \uB429\uB2C8\uB2E4",St/2,222+s,{font:9,align:"center",color:e.dim}),$t.online||rt.text("\u25CB \uC5F0\uACB0 \uC11C\uBC84\uC640 \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",St/2,312,{font:9,align:"center",color:ie.warn})}else["\uB2E4\uB978 \uD3F0\uC5D0\uC11C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uACE0",'"\uC5F4\uB9B0 \uBC29"\uC5D0\uC11C \uC774 \uBC29\uC744 \uB204\uB974\uAC70\uB098',"\uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694."].forEach((s,r)=>rt.text(s,St/2,200+r*14,{font:9,align:"center"})),rt.text("\uB450 \uD3F0 \uBAA8\uB450 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD574\uC57C \uD569\uB2C8\uB2E4",St/2,262,{font:9,align:"center",color:e.dim});rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,St/2,330,{font:9,color:e.dim,align:"center"}),rt.button("cancel-wait",St/2-40,352,80,22,"\uCDE8\uC18C",{font:11})}function bd(){let i=ha(),t=[];i.board.forEach((e,n)=>{e&&t.push({sq:n,id:e.id,type:e.type,color:e.color,shield:!1})}),Qt.sync(t,null)}var fd=performance.now();function Sd(i){let t=Math.min(.1,(i-fd)/1e3);fd=i,P.mode==="game"&&P.view?Qt.setHighlights(ld(P.view,P,i)):Qt.setHighlights([]),Qt.setSelected(P.mode==="game"&&P.sel!=null?Ea(P.sel)?.id:null);let e=P.view;if(P.mode==="game"&&e){let n=P.bubble&&performance.now()-P.bubble.t0<1600,s=n?P.bubble.by:e.status==="over"&&e.result?.winner||e.turn;Qt.kingView={rect:kc(),shown:s,mode:n?"shout":"turn"}}else Qt.kingView=null;P.__freezeKing&&(Qt.kingView=P.__freezeKing),Qt.titleView=P.mode==="title",P.call.pickup&&performance.now()-P.call.pickup>950&&(P.call.pickup=0,Qt.flash=1),Qt.phoneView=pe==="web"&&(["lobby","waiting-join","waiting"].includes(P.mode)||P.call.pickup)?{rect:ji}:null,ae&&(ae.enabled=ba()),Qt.render(t),rt.begin(),P.mode==="title"?ad(rt,i,{online:pe==="lan"?$t.online:null,tagline:pe==="lan"?void 0:"\uC628\uB77C\uC778 \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694",text3d:!!Qt.titleStage?.fontId}):P.call.pickup?Av(i):(P.mode==="lobby"||P.mode==="waiting-join")&&pe==="web"?wv(i):P.mode==="lobby"||P.mode==="waiting-join"?Rv():P.mode==="waiting"&&P.view?Cv(i):P.mode==="game"&&P.view?cd(rt,Qt,P.view,{...P,online:$t.online},i,mv()):P.mode==="boot"&&(rt.rect(0,0,St,yn,"#000"),rt.text("\uBD88\uB7EC\uC624\uB294 \uC911\u2026",St/2,yn/2-6,{align:"center",color:rt.pal.dim})),P.settings&&(hd(rt,P.theme),rt.text(`\uD130\uCE58 \uD655\uC778: \uB3D9\uC2DC\uC5D0 \uC190\uAC00\uB77D ${P.touchMax}\uAC1C \uC778\uC2DD`,St/2,449,{font:9,align:"center",color:P.touchMax>=2?ie.cyan:rt.pal.dim})),Ur.draw(),requestAnimationFrame(Sd)}var Pv="dohyeon";async function Ed(i){if(Qt.titleStage||(Qt.titleStage=new Gs),!i||!Tc.some(t=>t.id===i)){Qt.titleStage.setFont(null,null);return}try{let t=await Promise.race([fetch(`assets/title3d/${i}.json`).then(e=>e.json()),new Promise((e,n)=>setTimeout(()=>n(new Error("timeout")),4e3))]);Qt.titleStage.setFont(i,t)}catch(t){console.warn("\uD0C0\uC774\uD2C0 \uAE00\uAF34",i,t)}}async function Iv(){requestAnimationFrame(Sd);try{await Promise.race([Promise.all(Lf.map(i=>document.fonts.load(i))),new Promise(i=>setTimeout(i,3e3))])}catch{}if(pe==="lan")try{P.info=await(await fetch("/api/info")).json()}catch{}Qt.theme=P.theme,await Qt.init(P.info?.textures||[]),Xc(P.theme),bd(),await Ed(new URLSearchParams(location.search).get("titlefont")||(/[#&]tf=([a-z]+)/.exec(location.hash)||[])[1]||Pv),P.mode="title",pe==="lan"?(P.lan=$t.use(new la),P.lan.connect(),P.roomParam&&!P.lan.token&&Js()):pe==="web"?P.roomT=Lr.available()?new Lr:null:da.open().then(i=>{P.roomT=i,P.roomChecked=!0,P.mode==="lobby"&&Js()})}Iv();window.__dbg={app:P,scene:Qt,hub:$t,presenter:Ur,get phone(){return ae},setPhone:Gc,loadTitleFont:Ed,PHONE_RECT:ji,squareToScreen:i=>Qt.squareToScreen(i),applyTheme:Xc};
