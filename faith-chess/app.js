var Il="160";var Cf=0,_c=1,Pf=2;var Yh=1,If=2,Gn=3,si=0,sn=1,Qe=2;var ni=0,as=1,xc=2,yc=3,vc=4,Lf=5,Si=100,Df=101,Uf=102,Mc=103,bc=104,Nf=200,Of=201,Ff=202,Bf=203,Ga=204,Wa=205,kf=206,zf=207,Hf=208,Vf=209,Gf=210,Wf=211,Xf=212,qf=213,Yf=214,$f=0,Zf=1,Jf=2,Yr=3,Kf=4,jf=5,Qf=6,td=7,Ni=0,rr=1,ed=2,Ln=0,nd=1,id=2,sd=3,rd=4,od=5,ad=6;var $h=300,hs=301,us=302,Xa=303,qa=304,To=306,Vs=1e3,En=1001,Ya=1002,ve=1003,Sc=1004;var aa=1005;var nn=1006,ld=1007;var Gs=1008;var ii=1009,cd=1010,hd=1011,Ll=1012,Zh=1013,ti=1014,ei=1015,Ws=1016,Jh=1017,Kh=1018,wi=1020,ud=1021,wn=1023,fd=1024,dd=1025,Ti=1026,fs=1027,pd=1028,jh=1029,md=1030,Qh=1031,tu=1033,la=33776,ca=33777,ha=33778,ua=33779,Ec=35840,wc=35841,Tc=35842,Ac=35843,eu=36196,Rc=37492,Cc=37496,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Uc=37812,Nc=37813,Oc=37814,Fc=37815,Bc=37816,kc=37817,zc=37818,Hc=37819,Vc=37820,Gc=37821,fa=36492,Wc=36494,Xc=36495,gd=36283,qc=36284,Yc=36285,$c=36286;var $r=2300,Zr=2301,da=2302,Zc=2400,Jc=2401,Kc=2402;var nu=3e3,Ai=3001,_d=3200,xd=3201,Dl=0,yd=1,pn="",Me="srgb",Xn="srgb-linear",Ul="display-p3",Ao="display-p3-linear",Jr="linear",ue="srgb",Kr="rec709",jr="p3";var Hi=7680;var jc=519,vd=512,Md=513,bd=514,iu=515,Sd=516,Ed=517,wd=518,Td=519,Qc=35044;var th="300 es",$a=1035,Wn=2e3,Qr=2001,ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pa=Math.PI/180,Za=180/Math.PI;function vs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function Ad(i,t){return(i%t+t)%t}function ma(i,t,e){return(1-e)*i+e*t}function eh(i){return(i&i-1)===0&&i!==0}function Ja(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var st=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],v=s[7],P=s[2],T=s[5],C=s[8];return r[0]=o*_+a*y+l*P,r[3]=o*m+a*x+l*T,r[6]=o*p+a*v+l*C,r[1]=c*_+h*y+u*P,r[4]=c*m+h*x+u*T,r[7]=c*p+h*v+u*C,r[2]=f*_+d*y+g*P,r[5]=f*m+d*x+g*T,r[8]=f*p+d*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ga=new Zt;function su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rd(){let i=to("canvas");return i.style.display="block",i}var nh={};function Fs(i){i in nh||(nh[i]=!0,console.warn(i))}var ih=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[Xn]:{transfer:Jr,primaries:Kr,toReference:i=>i,fromReference:i=>i},[Me]:{transfer:ue,primaries:Kr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ao]:{transfer:Jr,primaries:jr,toReference:i=>i.applyMatrix3(sh),fromReference:i=>i.applyMatrix3(ih)},[Ul]:{transfer:ue,primaries:jr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(sh),fromReference:i=>i.applyMatrix3(ih).convertLinearToSRGB()}},Cd=new Set([Xn,Ao]),oe={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Cd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Mr[t].toReference,s=Mr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Mr[i].primaries},getTransfer:function(i){return i===pn?Jr:Mr[i].transfer}};function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vi,eo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=to("canvas")),Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=to("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ls(e[n]/255)*255):e[n]=ls(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pd=0,no=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=vs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Id=0,gn=class i extends ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=En,s=En,r=nn,o=Gs,a=wn,l=ii,c=i.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=vs(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ai?Me:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Me?Ai:nu}set encoding(t){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ai?Me:pn}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=$h;gn.DEFAULT_ANISOTROPY=1;var me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,v=(d+1)/2,P=(p+1)/2,T=(h+f)/4,C=(u+_)/4,U=(g+m)/4;return x>v&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=C/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=U/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=U/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ai?Me:pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends Ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},io=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ja=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let P=Math.sqrt(x),T=Math.atan2(P,p*y);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let v=a*y;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ya=new R,rh=new oi,Ri=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Sr.subVectors(this.max,Ls),Gi.subVectors(t.a,Ls),Wi.subVectors(t.b,Ls),Xi.subVectors(t.c,Ls),Zn.subVectors(Wi,Gi),Jn.subVectors(Xi,Wi),xi.subVectors(Gi,Xi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-xi.z,xi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,xi.z,0,-xi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-xi.y,xi.x,0];return!va(e,Gi,Wi,Xi,Sr)||(e=[1,0,0,0,1,0,0,0,1],!va(e,Gi,Wi,Xi,Sr))?!1:(Er.crossVectors(Zn,Jn),e=[Er.x,Er.y,Er.z],va(e,Gi,Wi,Xi,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bn=[new R,new R,new R,new R,new R,new R,new R,new R],vn=new R,br=new Ri,Gi=new R,Wi=new R,Xi=new R,Zn=new R,Jn=new R,xi=new R,Ls=new R,Sr=new R,Er=new R,yi=new R;function va(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yi.fromArray(i,r);let a=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ld=new Ri,Ds=new R,Ma=new R,Xs=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Ma)),this.expandByPoint(Ds.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new R,ba=new R,wr=new R,Kn=new R,Sa=new R,Tr=new R,Ea=new R,so=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ba.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(ba);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wr),a=Kn.dot(this.direction),l=-Kn.dot(wr),c=Kn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ba).addScaledVector(wr,f),d}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){Sa.subVectors(e,t),Tr.subVectors(n,t),Ea.crossVectors(Sa,Tr);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);let l=a*this.direction.dot(Tr.crossVectors(Kn,Tr));if(l<0)return null;let c=a*this.direction.dot(Sa.cross(Kn));if(c<0||l+c>o)return null;let h=-a*Kn.dot(Ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dd,t,Ud)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),jn.crossVectors(n,ln),jn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),jn.crossVectors(n,ln)),jn.normalize(),Ar.crossVectors(ln,jn),s[0]=jn.x,s[4]=Ar.x,s[8]=ln.x,s[1]=jn.y,s[5]=Ar.y,s[9]=ln.y,s[2]=jn.z,s[6]=Ar.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],P=n[15],T=s[0],C=s[4],U=s[8],b=s[12],w=s[1],O=s[5],X=s[9],G=s[13],L=s[2],F=s[6],H=s[10],J=s[14],Z=s[3],q=s[7],et=s[11],nt=s[15];return r[0]=o*T+a*w+l*L+c*Z,r[4]=o*C+a*O+l*F+c*q,r[8]=o*U+a*X+l*H+c*et,r[12]=o*b+a*G+l*J+c*nt,r[1]=h*T+u*w+f*L+d*Z,r[5]=h*C+u*O+f*F+d*q,r[9]=h*U+u*X+f*H+d*et,r[13]=h*b+u*G+f*J+d*nt,r[2]=g*T+_*w+m*L+p*Z,r[6]=g*C+_*O+m*F+p*q,r[10]=g*U+_*X+m*H+p*et,r[14]=g*b+_*G+m*J+p*nt,r[3]=y*T+x*w+v*L+P*Z,r[7]=y*C+x*O+v*F+P*q,r[11]=y*U+x*X+v*H+P*et,r[15]=y*b+x*G+v*J+P*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,P=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,T=e*y+n*x+s*v+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=y*C,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*C,t[4]=x*C,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=P*C,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=l*c,x=l*h,v=l*u,P=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*P,s[1]=(d+v)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+x)*C,s[9]=(m-y)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=qi.set(s[0],s[1],s[2]).length(),o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,h=1/o,u=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Wn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===Wn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,g,_;if(a===Wn)g=(o+r)*u,_=-2*u;else if(a===Qr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qi=new R,Mn=new ge,Dd=new R(0,0,0),Ud=new R(1,1,1),jn=new R,Ar=new R,ln=new R,oh=new ge,ah=new oi,ro=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ro.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nd=0,lh=new R,Yi=new oi,zn=new ge,Rr=new R,Us=new R,Od=new R,Fd=new oi,ch=new R(1,0,0),hh=new R(0,1,0),uh=new R(0,0,1),Bd={type:"added"},kd={type:"removed"},tn=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new ro,n=new oi,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Zt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Us,Rr,this.up):zn.lookAt(Rr,Us,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(zn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};tn.DEFAULT_UP=new R(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new R,Hn=new R,wa=new R,Vn=new R,$i=new R,Zi=new R,fh=new R,Ta=new R,Aa=new R,Ra=new R,Cr=!1,is=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Hn.subVectors(n,e),wa.subVectors(t,e);let o=bn.dot(bn),a=bn.dot(Hn),l=bn.dot(wa),c=Hn.dot(Hn),h=Hn.dot(wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(t,e,n,s,r,o,a,l){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Hn.subVectors(t,e),bn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),bn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,n),Zi.subVectors(r,n),Ta.subVectors(t,n);let l=$i.dot(Ta),c=Zi.dot(Ta);if(l<=0&&c<=0)return e.copy(n);Aa.subVectors(t,s);let h=$i.dot(Aa),u=Zi.dot(Aa);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector($i,o);Ra.subVectors(t,r);let d=$i.dot(Ra),g=Zi.dot(Ra);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Zi,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return fh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(fh,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector($i,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Ad(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return oe.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Ge(Ye.r*255,0,255))*65536+Math.round(Ge(Ye.g*255,0,255))*256+Math.round(Ge(Ye.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Me){oe.fromWorkingColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Pr);let n=ma(Qn.h,Pr.h,e),s=ma(Qn.s,Pr.s,e),r=ma(Qn.l,Pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new It;It.NAMES=ru;var zd=0,ai=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=as,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},rn=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ni,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new R,Ir=new st,mn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qc&&(t.usage=this.usage),t}};var oo=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ao=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bt=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Hd=0,dn=new ge,Pa=new tn,Ji=new R,cn=new Ri,Ns=new Ri,ke=new R,_e=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?ao:oo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(cn.min,Ns.min),cn.expandByPoint(ke),ke.addVectors(cn.max,Ns.max),cn.expandByPoint(ke)):(cn.expandByPoint(Ns.min),cn.expandByPoint(Ns.max))}cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(t,c),ke.add(Ji)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new R,h[w]=new R;let u=new R,f=new R,d=new R,g=new st,_=new st,m=new st,p=new R,y=new R;function x(w,O,X){u.fromArray(s,w*3),f.fromArray(s,O*3),d.fromArray(s,X*3),g.fromArray(o,w*2),_.fromArray(o,O*2),m.fromArray(o,X*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let G=1/(_.x*m.y-m.x*_.y);isFinite(G)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(G),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(G),c[w].add(p),c[O].add(p),c[X].add(p),h[w].add(y),h[O].add(y),h[X].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let w=0,O=v.length;w<O;++w){let X=v[w],G=X.start,L=X.count;for(let F=G,H=G+L;F<H;F+=3)x(n[F+0],n[F+1],n[F+2])}let P=new R,T=new R,C=new R,U=new R;function b(w){C.fromArray(r,w*3),U.copy(C);let O=c[w];P.copy(O),P.sub(C.multiplyScalar(C.dot(O))).normalize(),T.crossVectors(U,O);let G=T.dot(h[w])<0?-1:1;l[w*4]=P.x,l[w*4+1]=P.y,l[w*4+2]=P.z,l[w*4+3]=G}for(let w=0,O=v.length;w<O;++w){let X=v[w],G=X.start,L=X.count;for(let F=G,H=G+L;F<H;F+=3)b(n[F+0]),b(n[F+1]),b(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new mn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dh=new ge,vi=new so,Lr=new Xs,ph=new R,Ki=new R,ji=new R,Qi=new R,Ia=new R,Dr=new R,Ur=new st,Nr=new st,Or=new st,mh=new R,gh=new R,_h=new R,Fr=new R,Br=new R,se=class extends tn{constructor(t=new _e,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ia.fromBufferAttribute(u,t),o?Dr.addScaledVector(Ia,h):Dr.addScaledVector(Ia.sub(e),h))}e.add(Dr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(Lr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Lr,ph)===null||vi.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(dh.copy(r).invert(),vi.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,P=x;v<P;v+=3){let T=a.getX(v),C=a.getX(v+1),U=a.getX(v+2);s=kr(this,p,t,n,c,h,u,T,C,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=kr(this,o,t,n,c,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,P=x;v<P;v+=3){let T=v,C=v+1,U=v+2;s=kr(this,p,t,n,c,h,u,T,C,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,v=m+2;s=kr(this,o,t,n,c,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Vd(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===si,a),l===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Br);return c<e.near||c>e.far?null:{distance:c,point:Br.clone(),object:i}}function kr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ki),i.getVertexPosition(l,ji),i.getVertexPosition(c,Qi);let h=Vd(i,t,e,n,Ki,ji,Qi,Fr);if(h){s&&(Ur.fromBufferAttribute(s,a),Nr.fromBufferAttribute(s,l),Or.fromBufferAttribute(s,c),h.uv=is.getInterpolation(Fr,Ki,ji,Qi,Ur,Nr,Or,new st)),r&&(Ur.fromBufferAttribute(r,a),Nr.fromBufferAttribute(r,l),Or.fromBufferAttribute(r,c),h.uv1=is.getInterpolation(Fr,Ki,ji,Qi,Ur,Nr,Or,new st),h.uv2=h.uv1),o&&(mh.fromBufferAttribute(o,a),gh.fromBufferAttribute(o,l),_h.fromBufferAttribute(o,c),h.normal=is.getInterpolation(Fr,Ki,ji,Qi,mh,gh,_h,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};is.getNormal(Ki,ji,Qi,u.normal),h.face=u}return h}var de=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function g(_,m,p,y,x,v,P,T,C,U,b){let w=v/C,O=P/U,X=v/2,G=P/2,L=T/2,F=C+1,H=U+1,J=0,Z=0,q=new R;for(let et=0;et<H;et++){let nt=et*O-G;for(let dt=0;dt<F;dt++){let W=dt*w-X;q[_]=W*y,q[m]=nt*x,q[p]=L,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=T>0?1:-1,h.push(q.x,q.y,q.z),u.push(dt/C),u.push(1-et/U),J+=1}}for(let et=0;et<U;et++)for(let nt=0;nt<C;nt++){let dt=f+nt+F*et,W=f+nt+F*(et+1),j=f+(nt+1)+F*(et+1),pt=f+(nt+1)+F*et;l.push(dt,W,pt),l.push(W,j,pt),Z+=6}a.addGroup(d,Z,b),d+=Z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=ds(i[e]);for(let s in n)t[s]=n[s]}return t}function Gd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ou(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}var Wd={clone:ds,merge:je},Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lo=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ce=class extends lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ts=-90,es=1,Qa=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new Ce(ts,es,t,e);r.layers=this.layers,this.add(r);let o=new Ce(ts,es,t,e);o.layers=this.layers,this.add(o);let a=new Ce(ts,es,t,e);a.layers=this.layers,this.add(a);let l=new Ce(ts,es,t,e);l.layers=this.layers,this.add(l);let c=new Ce(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ps=class extends gn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tl=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ai?Me:pn),this.texture=new ps(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ni});r.uniforms.tEquirect.value=e;let o=new se(s,r),a=e.minFilter;return e.minFilter===Gs&&(e.minFilter=nn),new Qa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},La=new R,Yd=new R,$d=new Zt,Sn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=La.subVectors(n,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(La),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$d.getNormalMatrix(t),s=this.coplanarPoint(La).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mi=new Xs,zr=new R,Ys=class{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+y).normalize(),n[3].setComponents(l-o,f-h,m-g,v-y).normalize(),n[4].setComponents(l-a,f-u,m-_,v-x).normalize(),e===Wn)n[5].setComponents(l+a,f+u,m+_,v+x).normalize();else if(e===Qr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zr.x=s.normal.x>0?t.max.x:t.min.x,zr.y=s.normal.y>0?t.max.y:t.min.y,zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function au(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zd(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Ci=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let x=0;x<c;x++){let v=x*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let x=y+c*p,v=y+c*(p+1),P=y+1+c*(p+1),T=y+1+c*p;d.push(x,v,T),d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`
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
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
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
#endif`,Zp=`struct PhysicalMaterial {
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
}`,Jp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,f0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,y0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,b0=`#define TOON
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
}`,S0=`uniform float size;
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
}`,E0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Jd,alphahash_pars_fragment:Kd,alphamap_fragment:jd,alphamap_pars_fragment:Qd,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:xp,common:yp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:bp,displacementmap_vertex:Sp,emissivemap_fragment:Ep,emissivemap_pars_fragment:wp,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Up,fog_fragment:Np,fog_pars_fragment:Op,gradientmap_pars_fragment:Fp,lightmap_fragment:Bp,lightmap_pars_fragment:kp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:$p,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:Kp,lights_fragment_end:jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:bm,opaque_fragment:Sm,packing:Em,premultiplied_alpha_fragment:wm,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Lm,shadowmap_vertex:Dm,shadowmask_pars_fragment:Um,skinbase_vertex:Nm,skinning_pars_vertex:Om,skinning_vertex:Fm,skinnormal_vertex:Bm,specularmap_fragment:km,specularmap_pars_fragment:zm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:$m,background_vert:Zm,background_frag:Jm,backgroundCube_vert:Km,backgroundCube_frag:jm,cube_vert:Qm,cube_frag:t0,depth_vert:e0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:s0,equirect_vert:r0,equirect_frag:o0,linedashed_vert:a0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:f0,meshmatcap_vert:d0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:x0,meshphysical_vert:y0,meshphysical_frag:v0,meshtoon_vert:M0,meshtoon_frag:b0,points_vert:S0,points_frag:E0,shadow_vert:w0,shadow_frag:T0,sprite_vert:A0,sprite_frag:R0},ct={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},In={basic:{uniforms:je([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:je([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new It(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:je([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:je([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:je([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new It(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:je([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:je([ct.points,ct.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:je([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:je([ct.common,ct.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:je([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:je([ct.sprite,ct.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:je([ct.common,ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:je([ct.lights,ct.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};In.physical={uniforms:je([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Hr={r:0,b:0,g:0};function C0(i,t,e,n,s,r,o){let a=new It(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===To)?(h===void 0&&(h=new se(new de(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:ds(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=oe.getTransfer(x.colorSpace)!==ue,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new se(new Ci(2,2),new Yn({name:"BackgroundMaterial",uniforms:ds(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=oe.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Hr,ou(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function P0(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,F,H,J,Z){let q=!1;if(o){let et=_(J,H,F);c!==et&&(c=et,d(c.object)),q=p(L,J,H,Z),q&&y(L,J,H,Z)}else{let et=F.wireframe===!0;(c.geometry!==J.id||c.program!==H.id||c.wireframe!==et)&&(c.geometry=J.id,c.program=H.id,c.wireframe=et,q=!0)}Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,U(L,F,H,J),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,F,H){let J=H.wireframe===!0,Z=a[L.id];Z===void 0&&(Z={},a[L.id]=Z);let q=Z[F.id];q===void 0&&(q={},Z[F.id]=q);let et=q[J];return et===void 0&&(et=m(f()),q[J]=et),et}function m(L){let F=[],H=[],J=[];for(let Z=0;Z<s;Z++)F[Z]=0,H[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:J,object:L,attributes:{},index:null}}function p(L,F,H,J){let Z=c.attributes,q=F.attributes,et=0,nt=H.getAttributes();for(let dt in nt)if(nt[dt].location>=0){let j=Z[dt],pt=q[dt];if(pt===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),j===void 0||j.attribute!==pt||pt&&j.data!==pt.data)return!0;et++}return c.attributesNum!==et||c.index!==J}function y(L,F,H,J){let Z={},q=F.attributes,et=0,nt=H.getAttributes();for(let dt in nt)if(nt[dt].location>=0){let j=q[dt];j===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let pt={};pt.attribute=j,j&&j.data&&(pt.data=j.data),Z[dt]=pt,et++}c.attributes=Z,c.attributesNum=et,c.index=J}function x(){let L=c.newAttributes;for(let F=0,H=L.length;F<H;F++)L[F]=0}function v(L){P(L,0)}function P(L,F){let H=c.newAttributes,J=c.enabledAttributes,Z=c.attributeDivisors;H[L]=1,J[L]===0&&(i.enableVertexAttribArray(L),J[L]=1),Z[L]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),Z[L]=F)}function T(){let L=c.newAttributes,F=c.enabledAttributes;for(let H=0,J=F.length;H<J;H++)F[H]!==L[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function C(L,F,H,J,Z,q,et){et===!0?i.vertexAttribIPointer(L,F,H,Z,q):i.vertexAttribPointer(L,F,H,J,Z,q)}function U(L,F,H,J){if(n.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let Z=J.attributes,q=H.getAttributes(),et=F.defaultAttributeValues;for(let nt in q){let dt=q[nt];if(dt.location>=0){let W=Z[nt];if(W===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){let j=W.normalized,pt=W.itemSize,Mt=e.get(W);if(Mt===void 0)continue;let _t=Mt.buffer,Lt=Mt.type,kt=Mt.bytesPerElement,bt=n.isWebGL2===!0&&(Lt===i.INT||Lt===i.UNSIGNED_INT||W.gpuType===Zh);if(W.isInterleavedBufferAttribute){let Ot=W.data,I=Ot.stride,at=W.offset;if(Ot.isInstancedInterleavedBuffer){for(let $=0;$<dt.locationSize;$++)P(dt.location+$,Ot.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let $=0;$<dt.locationSize;$++)v(dt.location+$);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let $=0;$<dt.locationSize;$++)C(dt.location+$,pt/dt.locationSize,Lt,j,I*kt,(at+pt/dt.locationSize*$)*kt,bt)}else{if(W.isInstancedBufferAttribute){for(let Ot=0;Ot<dt.locationSize;Ot++)P(dt.location+Ot,W.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ot=0;Ot<dt.locationSize;Ot++)v(dt.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Ot=0;Ot<dt.locationSize;Ot++)C(dt.location+Ot,pt/dt.locationSize,Lt,j,pt*kt,pt/dt.locationSize*Ot*kt,bt)}}else if(et!==void 0){let j=et[nt];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(dt.location,j);break;case 3:i.vertexAttrib3fv(dt.location,j);break;case 4:i.vertexAttrib4fv(dt.location,j);break;default:i.vertexAttrib1fv(dt.location,j)}}}}T()}function b(){X();for(let L in a){let F=a[L];for(let H in F){let J=F[H];for(let Z in J)g(J[Z].object),delete J[Z];delete F[H]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;let F=a[L.id];for(let H in F){let J=F[H];for(let Z in J)g(J[Z].object),delete J[Z];delete F[H]}delete a[L.id]}function O(L){for(let F in a){let H=a[F];if(H[L.id]===void 0)continue;let J=H[L.id];for(let Z in J)g(J[Z].object),delete J[Z];delete H[L.id]}}function X(){G(),h=!0,c!==l&&(c=l,d(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:G,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:v,disableUnusedAttributes:T}}function I0(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function L0(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,v=o||t.has("OES_texture_float"),P=x&&v,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:P,maxSamples:T}}function D0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Sn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,x=y*4,v=p.clippingState||null;l.value=v,v=h(g,f,x,d);for(let P=0;P!==x;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function U0(i){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=hs:a===qa&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xa||a===qa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new tl(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var co=class extends lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ss=4,xh=[.125,.215,.35,.446,.526,.582],Ei=20,Da=new co,yh=new It,Ua=null,Na=0,Oa=0,bi=(1+Math.sqrt(5))/2,ns=1/bi,vh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,bi,ns),new R(0,bi,-ns),new R(ns,0,bi),new R(-ns,0,bi),new R(bi,ns,0),new R(-bi,ns,0)],ho=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Oa),t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ws,format:wn,colorSpace:Xn,depthBuffer:!1},s=Mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N0(r)),this._blurMaterial=O0(r,t,e)}return s}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,s){let a=new Ce(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yh),h.toneMapping=Ln,h.autoClear=!1;let d=new rn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new se(new de,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(yh),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;Vr(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Da)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vh[(s-1)%vh.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new se(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ei-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);let p=[],y=0;for(let C=0;C<Ei;++C){let U=C/_,b=Math.exp(-U*U/2);p.push(b),C===0?y+=b:C<m&&(y+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let v=this._sizeLods[s],P=3*v*(s>x-ss?s-x+ss:0),T=4*(this._cubeSize-v);Vr(e,P,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Da)}};function N0(i){let t=[],e=[],n=[],s=i,r=i-ss+1+xh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ss?l=xh[o-i+ss-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){let C=T%3*2/3-1,U=T>2?0:-1,b=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];y.set(b,_*g*T),x.set(f,m*g*T);let w=[T,T,T,T,T,T];v.set(w,p*g*T)}let P=new _e;P.setAttribute("position",new mn(y,_)),P.setAttribute("uv",new mn(x,m)),P.setAttribute("faceIndex",new mn(v,p)),t.push(P),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mh(i,t,e){let n=new qn(i,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function O0(i,t,e){let n=new Float32Array(Ei),s=new R(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function bh(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Sh(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function F0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xa||l===qa,h=l===hs||l===us;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ho(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ho(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function B0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){let P=y[x+0],T=y[x+1],C=y[x+2];f.push(P,T,T,C,C,P)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){let P=x+0,T=x+1,C=x+2;f.push(P,T,T,C,C,P)}}else return;let m=new(su(f)?ao:oo)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function z0(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*l),e.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function H0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function V0(i,t){return i[0]-t[0]}function G0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function W0(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new me,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],U=0;y===!0&&(U=1),x===!0&&(U=2),v===!0&&(U=3);let b=h.attributes.position.count*U,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let O=new Float32Array(b*w*4*g),X=new io(O,b,w,g);X.type=ei,X.needsUpdate=!0;let G=U*4;for(let F=0;F<g;F++){let H=P[F],J=T[F],Z=C[F],q=b*w*4*F;for(let et=0;et<H.count;et++){let nt=et*G;y===!0&&(o.fromBufferAttribute(H,et),O[q+nt+0]=o.x,O[q+nt+1]=o.y,O[q+nt+2]=o.z,O[q+nt+3]=0),x===!0&&(o.fromBufferAttribute(J,et),O[q+nt+4]=o.x,O[q+nt+5]=o.y,O[q+nt+6]=o.z,O[q+nt+7]=0),v===!0&&(o.fromBufferAttribute(Z,et),O[q+nt+8]=o.x,O[q+nt+9]=o.y,O[q+nt+10]=o.z,O[q+nt+11]=Z.itemSize===4?o.w:1)}}_={count:g,texture:X,size:new st(b,w)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let v=g[x];v[0]=x,v[1]=f[x]}g.sort(G0);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(V0);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let v=a[x],P=v[0],T=v[1];P!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[P]&&h.setAttribute("morphTarget"+x,_[P]),m&&h.getAttribute("morphNormal"+x)!==m[P]&&h.setAttribute("morphNormal"+x,m[P]),s[x]=T,p+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function X0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var uo=class extends gn{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ti,h!==Ti&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=ti),n===void 0&&h===fs&&(n=wi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ve,this.minFilter=l!==void 0?l:ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lu=new gn,cu=new uo(1,1);cu.compareFunction=iu;var hu=new io,uu=new ja,fu=new ps,Eh=[],wh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ro(i,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function J0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),Ne(e,n)}}function K0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),Ne(e,n)}}function j0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),Ne(e,n)}}function Q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?cu:lu;e.setTexture2D(t||r,s)}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uu,s)}function cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fu,s)}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hu,s)}function ug(i){switch(i){case 5126:return q0;case 35664:return Y0;case 35665:return $0;case 35666:return Z0;case 35674:return J0;case 35675:return K0;case 35676:return j0;case 5124:case 35670:return Q0;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function fg(i,t){i.uniform1fv(this.addr,t)}function dg(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function pg(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function mg(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function gg(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _g(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xg(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function vg(i,t){i.uniform2iv(this.addr,t)}function Mg(i,t){i.uniform3iv(this.addr,t)}function bg(i,t){i.uniform4iv(this.addr,t)}function Sg(i,t){i.uniform1uiv(this.addr,t)}function Eg(i,t){i.uniform2uiv(this.addr,t)}function wg(i,t){i.uniform3uiv(this.addr,t)}function Tg(i,t){i.uniform4uiv(this.addr,t)}function Ag(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lu,r[o])}function Rg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uu,r[o])}function Cg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fu,r[o])}function Pg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hu,r[o])}function Ig(i){switch(i){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return Eg;case 36295:return wg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}var el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ug(e.type)}},nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}},il=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Fa=/(\w+)(\])?(\[|\.)?/g;function Ch(i,t){i.seq.push(t),i.map[t.id]=t}function Lg(i,t,e){let n=i.name,s=n.length;for(Fa.lastIndex=0;;){let r=Fa.exec(n),o=Fa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ch(e,c===void 0?new el(a,i,t):new nl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new il(a),Ch(e,u)),e=u}}}var cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Lg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dg=37297,Ug=0;function Ng(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Og(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===jr&&e===Kr?n="LinearDisplayP3ToLinearSRGB":t===Kr&&e===jr&&(n="LinearSRGBToLinearDisplayP3"),i){case Xn:case Ao:return[n,"LinearTransferOETF"];case Me:case Ul:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ih(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ng(i.getShaderSource(t),o)}else return s}function Fg(i,t){let e=Og(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Bg(i,t){let e;switch(t){case nd:e="Linear";break;case id:e="Reinhard";break;case sd:e="OptimizedCineon";break;case rd:e="ACESFilmic";break;case ad:e="AgX";break;case od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function Hg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rs(i){return i!==""}function Lh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(Gg,Xg)}var Wg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xg(i,t){let e=Wt[t];if(e===void 0){let n=Wg.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}var qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(qg,Yg)}function Yg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $g(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===If?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function Kg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ni:t="ENVMAP_BLENDING_MULTIPLY";break;case rr:t="ENVMAP_BLENDING_MIX";break;case ed:t="ENVMAP_BLENDING_ADD";break}return t}function jg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Qg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=$g(e),c=Zg(e),h=Jg(e),u=Kg(e),f=jg(e),d=e.isWebGL2?"":kg(e),g=zg(e),_=Hg(r),m=s.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),y.length>0&&(y+=`
`)):(p=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),y=[d,Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Fg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),o=sl(o),o=Lh(o,e),o=Dh(o,e),a=sl(a),a=Lh(a,e),a=Dh(a,e),o=Uh(o),a=Uh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=x+p+o,P=x+y+a,T=Ph(s,s.VERTEX_SHADER,v),C=Ph(s,s.FRAGMENT_SHADER,P);s.attachShader(m,T),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(X){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(C).trim(),H=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,C);else{let Z=Ih(s,T,"vertex"),q=Ih(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+Z+`
`+q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(L===""||F==="")&&(J=!1);J&&(X.diagnostics={runnable:H,programLog:G,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:y}})}s.deleteShader(T),s.deleteShader(C),b=new cs(s,m),w=Vg(s,m)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,Dg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}var t_=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ol(t),e.set(t,n)),n}},ol=class{constructor(t){this.id=t_++,this.code=t,this.usedTimes=0}};function e_(i,t,e,n,s,r,o){let a=new qs,l=new rl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,w,O,X,G){let L=X.fog,F=G.geometry,H=b.isMeshStandardMaterial?X.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),Z=J&&J.mapping===To?J.image.height:null,q=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,nt=et!==void 0?et.length:0,dt=0;F.morphAttributes.position!==void 0&&(dt=1),F.morphAttributes.normal!==void 0&&(dt=2),F.morphAttributes.color!==void 0&&(dt=3);let W,j,pt,Mt;if(q){let Je=In[q];W=Je.vertexShader,j=Je.fragmentShader}else W=b.vertexShader,j=b.fragmentShader,l.update(b),pt=l.getVertexShaderID(b),Mt=l.getFragmentShaderID(b);let _t=i.getRenderTarget(),Lt=G.isInstancedMesh===!0,kt=G.isBatchedMesh===!0,bt=!!b.map,Ot=!!b.matcap,I=!!J,at=!!b.aoMap,$=!!b.lightMap,ot=!!b.bumpMap,Y=!!b.normalMap,Tt=!!b.displacementMap,mt=!!b.emissiveMap,S=!!b.metalnessMap,M=!!b.roughnessMap,B=b.anisotropy>0,it=b.clearcoat>0,Q=b.iridescence>0,K=b.sheen>0,vt=b.transmission>0,ht=B&&!!b.anisotropyMap,xt=it&&!!b.clearcoatMap,Rt=it&&!!b.clearcoatNormalMap,Ht=it&&!!b.clearcoatRoughnessMap,tt=Q&&!!b.iridescenceMap,ee=Q&&!!b.iridescenceThicknessMap,Jt=K&&!!b.sheenColorMap,Ft=K&&!!b.sheenRoughnessMap,At=!!b.specularMap,yt=!!b.specularColorMap,Gt=!!b.specularIntensityMap,re=vt&&!!b.transmissionMap,Ee=vt&&!!b.thicknessMap,Yt=!!b.gradientMap,lt=!!b.alphaMap,D=b.alphaTest>0,ut=!!b.alphaHash,ft=!!b.extensions,Dt=!!F.attributes.uv1,Ct=!!F.attributes.uv2,ae=!!F.attributes.uv3,le=Ln;return b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(le=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:j,defines:b.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:kt,instancing:Lt,instancingColor:Lt&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Xn,map:bt,matcap:Ot,envMap:I,envMapMode:I&&J.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:$,bumpMap:ot,normalMap:Y,displacementMap:f&&Tt,emissiveMap:mt,normalMapObjectSpace:Y&&b.normalMapType===yd,normalMapTangentSpace:Y&&b.normalMapType===Dl,metalnessMap:S,roughnessMap:M,anisotropy:B,anisotropyMap:ht,clearcoat:it,clearcoatMap:xt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Ht,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:ee,sheen:K,sheenColorMap:Jt,sheenRoughnessMap:Ft,specularMap:At,specularColorMap:yt,specularIntensityMap:Gt,transmission:vt,transmissionMap:re,thicknessMap:Ee,gradientMap:Yt,opaque:b.transparent===!1&&b.blending===as,alphaMap:lt,alphaTest:D,alphaHash:ut,combine:b.combine,mapUv:bt&&_(b.map.channel),aoMapUv:at&&_(b.aoMap.channel),lightMapUv:$&&_(b.lightMap.channel),bumpMapUv:ot&&_(b.bumpMap.channel),normalMapUv:Y&&_(b.normalMap.channel),displacementMapUv:Tt&&_(b.displacementMap.channel),emissiveMapUv:mt&&_(b.emissiveMap.channel),metalnessMapUv:S&&_(b.metalnessMap.channel),roughnessMapUv:M&&_(b.roughnessMap.channel),anisotropyMapUv:ht&&_(b.anisotropyMap.channel),clearcoatMapUv:xt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(b.sheenRoughnessMap.channel),specularMapUv:At&&_(b.specularMap.channel),specularColorMapUv:yt&&_(b.specularColorMap.channel),specularIntensityMapUv:Gt&&_(b.specularIntensityMap.channel),transmissionMapUv:re&&_(b.transmissionMap.channel),thicknessMapUv:Ee&&_(b.thicknessMap.channel),alphaMapUv:lt&&_(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Y||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Ct,vertexUv3s:ae,pointsUvs:G.isPoints===!0&&!!F.attributes.uv&&(bt||lt),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:dt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qe,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ft&&b.extensions.derivatives===!0,extensionFragDepth:ft&&b.extensions.fragDepth===!0,extensionDrawBuffers:ft&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let O in b.defines)w.push(O),w.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(y(w,b),x(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function v(b){let w=g[b.type],O;if(w){let X=In[w];O=Wd.clone(X.uniforms)}else O=b.uniforms;return O}function P(b,w){let O;for(let X=0,G=c.length;X<G;X++){let L=c[X];if(L.cacheKey===w){O=L,++O.usedTimes;break}}return O===void 0&&(O=new Qg(i,w,b,r),c.push(O)),O}function T(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:U}}function n_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function i_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||i_),n.length>1&&n.sort(f||Oh),s.length>1&&s.sort(f||Oh)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function s_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Fh,i.set(n,[o])):s>=r.length?(o=new Fh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function r_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new It};break;case"SpotLight":e={position:new R,direction:new R,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function o_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var a_=0;function l_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function c_(i,t){let e=new r_,n=o_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new ge,a=new ge;function l(h,u){let f=0,d=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,v=0,P=0,T=0,C=0,U=0,b=0;h.sort(l_);let w=u===!0?Math.PI:1;for(let X=0,G=h.length;X<G;X++){let L=h[X],F=L.color,H=L.intensity,J=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*H*w,d+=F.g*H*w,g+=F.b*H*w;else if(L.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(L.sh.coefficients[q],H);b++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let et=L.shadow,nt=n.get(L);nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,s.directionalShadow[_]=nt,s.directionalShadowMap[_]=Z,s.directionalShadowMatrix[_]=L.shadow.matrix,v++}s.directional[_]=q,_++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(F).multiplyScalar(H*w),q.distance=J,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,s.spot[p]=q;let et=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,et.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[p]=et.matrix,L.castShadow){let nt=n.get(L);nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,s.spotShadow[p]=nt,s.spotShadowMap[p]=Z,T++}p++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(F).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=q,y++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),q.distance=L.distance,q.decay=L.decay,L.castShadow){let et=L.shadow,nt=n.get(L);nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,s.pointShadow[m]=nt,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=L.shadow.matrix,P++}s.point[m]=q,m++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(H*w),q.groundColor.copy(L.groundColor).multiplyScalar(H*w),s.hemi[x]=q,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==v||O.numPointShadows!==P||O.numSpotShadows!==T||O.numSpotMaps!==C||O.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=T+C-U,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=b,O.directionalLength=_,O.pointLength=m,O.spotLength=p,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=v,O.numPointShadows=P,O.numSpotShadows=T,O.numSpotMaps=C,O.numLightProbes=b,s.version=a_++)}function c(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let v=h[y];if(v.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),f++}else if(v.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),P.halfWidth.set(v.width*.5,0,0),P.halfHeight.set(0,v.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let P=s.point[d];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(v.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Bh(i,t){let e=new c_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function h_(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Bh(i,t),e.set(r,[l])):o>=a.length?(l=new Bh(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var al=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ll=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},u_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
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
}`;function d_(i,t,e){let n=new Ys,s=new st,r=new st,o=new me,a=new al({depthPacking:xd}),l=new ll,c={},h=e.maxTextureSize,u={[si]:sn,[sn]:si,[Qe]:Qe},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:u_,fragmentShader:f_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh;let p=this.type;this.render=function(T,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),X=i.state;X.setBlending(ni),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let G=p!==Gn&&this.type===Gn,L=p===Gn&&this.type!==Gn;for(let F=0,H=T.length;F<H;F++){let J=T[F],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let q=Z.getFrameExtents();if(s.multiply(q),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,Z.mapSize.y=r.y)),Z.map===null||G===!0||L===!0){let nt=this.type!==Gn?{minFilter:ve,magFilter:ve}:{};Z.map!==null&&Z.map.dispose(),Z.map=new qn(s.x,s.y,nt),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let et=Z.getViewportCount();for(let nt=0;nt<et;nt++){let dt=Z.getViewport(nt);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),X.viewport(o),Z.updateMatrices(J,nt),n=Z.getFrustum(),v(C,U,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Gn&&y(Z,U),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,w,O)};function y(T,C){let U=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,U,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,U,d,_,null)}function x(T,C,U,b){let w=null,O=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)w=O;else if(w=U.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let X=w.uuid,G=C.uuid,L=c[X];L===void 0&&(L={},c[X]=L);let F=L[G];F===void 0&&(F=w.clone(),L[G]=F,C.addEventListener("dispose",P)),w=F}if(w.visible=C.visible,w.wireframe=C.wireframe,b===Gn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:u[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let X=i.properties.get(w);X.light=U}return w}function v(T,C,U,b,w){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let G=t.update(T),L=T.material;if(Array.isArray(L)){let F=G.groups;for(let H=0,J=F.length;H<J;H++){let Z=F[H],q=L[Z.materialIndex];if(q&&q.visible){let et=x(T,q,b,w);T.onBeforeShadow(i,T,C,U,G,et,Z),i.renderBufferDirect(U,null,G,et,T,Z),T.onAfterShadow(i,T,C,U,G,et,Z)}}}else if(L.visible){let F=x(T,L,b,w);T.onBeforeShadow(i,T,C,U,G,F,null),i.renderBufferDirect(U,null,G,F,T,null),T.onAfterShadow(i,T,C,U,G,F,null)}}let X=T.children;for(let G=0,L=X.length;G<L;G++)v(X[G],C,U,b,w)}function P(T){T.target.removeEventListener("dispose",P);for(let U in c){let b=c[U],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function p_(i,t,e){let n=e.isWebGL2;function s(){let D=!1,ut=new me,ft=null,Dt=new me(0,0,0,0);return{setMask:function(Ct){ft!==Ct&&!D&&(i.colorMask(Ct,Ct,Ct,Ct),ft=Ct)},setLocked:function(Ct){D=Ct},setClear:function(Ct,ae,le,Fe,Je){Je===!0&&(Ct*=Fe,ae*=Fe,le*=Fe),ut.set(Ct,ae,le,Fe),Dt.equals(ut)===!1&&(i.clearColor(Ct,ae,le,Fe),Dt.copy(ut))},reset:function(){D=!1,ft=null,Dt.set(-1,0,0,0)}}}function r(){let D=!1,ut=null,ft=null,Dt=null;return{setTest:function(Ct){Ct?kt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Ct){ut!==Ct&&!D&&(i.depthMask(Ct),ut=Ct)},setFunc:function(Ct){if(ft!==Ct){switch(Ct){case $f:i.depthFunc(i.NEVER);break;case Zf:i.depthFunc(i.ALWAYS);break;case Jf:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case Kf:i.depthFunc(i.EQUAL);break;case jf:i.depthFunc(i.GEQUAL);break;case Qf:i.depthFunc(i.GREATER);break;case td:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Ct}},setLocked:function(Ct){D=Ct},setClear:function(Ct){Dt!==Ct&&(i.clearDepth(Ct),Dt=Ct)},reset:function(){D=!1,ut=null,ft=null,Dt=null}}}function o(){let D=!1,ut=null,ft=null,Dt=null,Ct=null,ae=null,le=null,Fe=null,Je=null;return{setTest:function(ce){D||(ce?kt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ce){ut!==ce&&!D&&(i.stencilMask(ce),ut=ce)},setFunc:function(ce,Ke,Pn){(ft!==ce||Dt!==Ke||Ct!==Pn)&&(i.stencilFunc(ce,Ke,Pn),ft=ce,Dt=Ke,Ct=Pn)},setOp:function(ce,Ke,Pn){(ae!==ce||le!==Ke||Fe!==Pn)&&(i.stencilOp(ce,Ke,Pn),ae=ce,le=Ke,Fe=Pn)},setLocked:function(ce){D=ce},setClear:function(ce){Je!==ce&&(i.clearStencil(ce),Je=ce)},reset:function(){D=!1,ut=null,ft=null,Dt=null,Ct=null,ae=null,le=null,Fe=null,Je=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,P=null,T=null,C=null,U=null,b=new It(0,0,0),w=0,O=!1,X=null,G=null,L=null,F=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,q=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(et)[1]),Z=q>=1):et.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Z=q>=2);let nt=null,dt={},W=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),pt=new me().fromArray(W),Mt=new me().fromArray(j);function _t(D,ut,ft,Dt){let Ct=new Uint8Array(4),ae=i.createTexture();i.bindTexture(D,ae),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<ft;le++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ut,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(ut+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return ae}let Lt={};Lt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Lt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),kt(i.DEPTH_TEST),l.setFunc(Yr),mt(!1),S(_c),kt(i.CULL_FACE),Y(ni);function kt(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function bt(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Ot(D,ut){return d[D]!==ut?(i.bindFramebuffer(D,ut),d[D]=ut,n&&(D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut)),!0):!1}function I(D,ut){let ft=_,Dt=!1;if(D)if(ft=g.get(ut),ft===void 0&&(ft=[],g.set(ut,ft)),D.isWebGLMultipleRenderTargets){let Ct=D.texture;if(ft.length!==Ct.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,le=Ct.length;ae<le;ae++)ft[ae]=i.COLOR_ATTACHMENT0+ae;ft.length=Ct.length,Dt=!0}}else ft[0]!==i.COLOR_ATTACHMENT0&&(ft[0]=i.COLOR_ATTACHMENT0,Dt=!0);else ft[0]!==i.BACK&&(ft[0]=i.BACK,Dt=!0);Dt&&(e.isWebGL2?i.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function at(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let $={[Si]:i.FUNC_ADD,[Df]:i.FUNC_SUBTRACT,[Uf]:i.FUNC_REVERSE_SUBTRACT};if(n)$[Mc]=i.MIN,$[bc]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&($[Mc]=D.MIN_EXT,$[bc]=D.MAX_EXT)}let ot={[Nf]:i.ZERO,[Of]:i.ONE,[Ff]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[Hf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[Bf]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[Vf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Wf]:i.CONSTANT_COLOR,[Xf]:i.ONE_MINUS_CONSTANT_COLOR,[qf]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(D,ut,ft,Dt,Ct,ae,le,Fe,Je,ce){if(D===ni){p===!0&&(bt(i.BLEND),p=!1);return}if(p===!1&&(kt(i.BLEND),p=!0),D!==Lf){if(D!==y||ce!==O){if((x!==Si||T!==Si)&&(i.blendEquation(i.FUNC_ADD),x=Si,T=Si),ce)switch(D){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,P=null,C=null,U=null,b.set(0,0,0),w=0,y=D,O=ce}return}Ct=Ct||ut,ae=ae||ft,le=le||Dt,(ut!==x||Ct!==T)&&(i.blendEquationSeparate($[ut],$[Ct]),x=ut,T=Ct),(ft!==v||Dt!==P||ae!==C||le!==U)&&(i.blendFuncSeparate(ot[ft],ot[Dt],ot[ae],ot[le]),v=ft,P=Dt,C=ae,U=le),(Fe.equals(b)===!1||Je!==w)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Je),b.copy(Fe),w=Je),y=D,O=!1}function Tt(D,ut){D.side===Qe?bt(i.CULL_FACE):kt(i.CULL_FACE);let ft=D.side===sn;ut&&(ft=!ft),mt(ft),D.blending===as&&D.transparent===!1?Y(ni):Y(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);let Dt=D.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?kt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(D){X!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),X=D)}function S(D){D!==Cf?(kt(i.CULL_FACE),D!==G&&(D===_c?i.cullFace(i.BACK):D===Pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),G=D}function M(D){D!==L&&(Z&&i.lineWidth(D),L=D)}function B(D,ut,ft){D?(kt(i.POLYGON_OFFSET_FILL),(F!==ut||H!==ft)&&(i.polygonOffset(ut,ft),F=ut,H=ft)):bt(i.POLYGON_OFFSET_FILL)}function it(D){D?kt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Q(D){D===void 0&&(D=i.TEXTURE0+J-1),nt!==D&&(i.activeTexture(D),nt=D)}function K(D,ut,ft){ft===void 0&&(nt===null?ft=i.TEXTURE0+J-1:ft=nt);let Dt=dt[ft];Dt===void 0&&(Dt={type:void 0,texture:void 0},dt[ft]=Dt),(Dt.type!==D||Dt.texture!==ut)&&(nt!==ft&&(i.activeTexture(ft),nt=ft),i.bindTexture(D,ut||Lt[D]),Dt.type=D,Dt.texture=ut)}function vt(){let D=dt[nt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ht(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(D){pt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function re(D){Mt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Mt.copy(D))}function Ee(D,ut){let ft=u.get(ut);ft===void 0&&(ft=new WeakMap,u.set(ut,ft));let Dt=ft.get(D);Dt===void 0&&(Dt=i.getUniformBlockIndex(ut,D.name),ft.set(D,Dt))}function Yt(D,ut){let Dt=u.get(ut).get(D);h.get(ut)!==Dt&&(i.uniformBlockBinding(ut,Dt,D.__bindingPointIndex),h.set(ut,Dt))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},nt=null,dt={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,P=null,T=null,C=null,U=null,b=new It(0,0,0),w=0,O=!1,X=null,G=null,L=null,F=null,H=null,pt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:kt,disable:bt,bindFramebuffer:Ot,drawBuffers:I,useProgram:at,setBlending:Y,setMaterial:Tt,setFlipSided:mt,setCullFace:S,setLineWidth:M,setPolygonOffset:B,setScissorTest:it,activeTexture:Q,bindTexture:K,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:xt,texImage2D:At,texImage3D:yt,updateUBOMapping:Ee,uniformBlockBinding:Yt,texStorage2D:Jt,texStorage3D:Ft,texSubImage2D:Rt,texSubImage3D:Ht,compressedTexSubImage2D:tt,compressedTexSubImage3D:ee,scissor:Gt,viewport:re,reset:lt}}function m_(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,M){return d?new OffscreenCanvas(S,M):to("canvas")}function _(S,M,B,it){let Q=1;if((S.width>it||S.height>it)&&(Q=it/Math.max(S.width,S.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let K=M?Ja:Math.floor,vt=K(Q*S.width),ht=K(Q*S.height);u===void 0&&(u=g(vt,ht));let xt=B?g(vt,ht):u;return xt.width=vt,xt.height=ht,xt.getContext("2d").drawImage(S,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+vt+"x"+ht+")."),xt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return eh(S.width)&&eh(S.height)}function p(S){return a?!1:S.wrapS!==En||S.wrapT!==En||S.minFilter!==ve&&S.minFilter!==nn}function y(S,M){return S.generateMipmaps&&M&&S.minFilter!==ve&&S.minFilter!==nn}function x(S){i.generateMipmap(S)}function v(S,M,B,it,Q=!1){if(a===!1)return M;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=M;if(M===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),M===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),M===i.RGBA){let vt=Q?Jr:oe.getTransfer(it);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=vt===ue?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function P(S,M,B){return y(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==ve&&S.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function T(S){return S===ve||S===Sc||S===aa?i.NEAREST:i.LINEAR}function C(S){let M=S.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&h.delete(M)}function U(S){let M=S.target;M.removeEventListener("dispose",U),O(M)}function b(S){let M=n.get(S);if(M.__webglInit===void 0)return;let B=S.source,it=f.get(B);if(it){let Q=it[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(S),Object.keys(it).length===0&&f.delete(B)}n.remove(S)}function w(S){let M=n.get(S);i.deleteTexture(M.__webglTexture);let B=S.source,it=f.get(B);delete it[M.__cacheKey],o.memory.textures--}function O(S){let M=S.texture,B=n.get(S),it=n.get(M);if(it.__webglTexture!==void 0&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let K=0;K<B.__webglFramebuffer[Q].length;K++)i.deleteFramebuffer(B.__webglFramebuffer[Q][K]);else i.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)i.deleteFramebuffer(B.__webglFramebuffer[Q]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let Q=0,K=M.length;Q<K;Q++){let vt=n.get(M[Q]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(S)}let X=0;function G(){X=0}function L(){let S=X;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),X+=1,S}function F(S){let M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function H(S,M){let B=n.get(S);if(S.isVideoTexture&&Tt(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){let it=S.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(B,S,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function J(S,M){let B=n.get(S);if(S.version>0&&B.__version!==S.version){pt(B,S,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function Z(S,M){let B=n.get(S);if(S.version>0&&B.__version!==S.version){pt(B,S,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function q(S,M){let B=n.get(S);if(S.version>0&&B.__version!==S.version){Mt(B,S,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let et={[Vs]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},nt={[ve]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[ld]:i.LINEAR_MIPMAP_NEAREST,[Gs]:i.LINEAR_MIPMAP_LINEAR},dt={[vd]:i.NEVER,[Td]:i.ALWAYS,[Md]:i.LESS,[iu]:i.LEQUAL,[bd]:i.EQUAL,[wd]:i.GEQUAL,[Sd]:i.GREATER,[Ed]:i.NOTEQUAL};function W(S,M,B){if(B?(i.texParameteri(S,i.TEXTURE_WRAP_S,et[M.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,et[M.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,et[M.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,nt[M.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,nt[M.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==En||M.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,T(M.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==ve&&M.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let it=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===ve||M.minFilter!==aa&&M.minFilter!==Gs||M.type===ei&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ws&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(S,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function j(S,M){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",C));let it=M.source,Q=f.get(it);Q===void 0&&(Q={},f.set(it,Q));let K=F(M);if(K!==S.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[K].usedTimes++;let vt=Q[S.__cacheKey];vt!==void 0&&(Q[S.__cacheKey].usedTimes--,vt.usedTimes===0&&w(M)),S.__cacheKey=K,S.__webglTexture=Q[K].texture}return B}function pt(S,M,B){let it=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=i.TEXTURE_3D);let Q=j(S,M),K=M.source;e.bindTexture(it,S.__webglTexture,i.TEXTURE0+B);let vt=n.get(K);if(K.version!==vt.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);let ht=oe.getPrimaries(oe.workingColorSpace),xt=M.colorSpace===pn?null:oe.getPrimaries(M.colorSpace),Rt=M.colorSpace===pn||ht===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Ht=p(M)&&m(M.image)===!1,tt=_(M.image,Ht,!1,s.maxTextureSize);tt=mt(M,tt);let ee=m(tt)||a,Jt=r.convert(M.format,M.colorSpace),Ft=r.convert(M.type),At=v(M.internalFormat,Jt,Ft,M.colorSpace,M.isVideoTexture);W(it,M,ee);let yt,Gt=M.mipmaps,re=a&&M.isVideoTexture!==!0&&At!==eu,Ee=vt.__version===void 0||Q===!0,Yt=P(M,tt,ee);if(M.isDepthTexture)At=i.DEPTH_COMPONENT,a?M.type===ei?At=i.DEPTH_COMPONENT32F:M.type===ti?At=i.DEPTH_COMPONENT24:M.type===wi?At=i.DEPTH24_STENCIL8:At=i.DEPTH_COMPONENT16:M.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ti&&At===i.DEPTH_COMPONENT&&M.type!==Ll&&M.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ti,Ft=r.convert(M.type)),M.format===fs&&At===i.DEPTH_COMPONENT&&(At=i.DEPTH_STENCIL,M.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=wi,Ft=r.convert(M.type))),Ee&&(re?e.texStorage2D(i.TEXTURE_2D,1,At,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,Jt,Ft,null));else if(M.isDataTexture)if(Gt.length>0&&ee){re&&Ee&&e.texStorage2D(i.TEXTURE_2D,Yt,At,Gt[0].width,Gt[0].height);for(let lt=0,D=Gt.length;lt<D;lt++)yt=Gt[lt],re?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,Jt,Ft,yt.data):e.texImage2D(i.TEXTURE_2D,lt,At,yt.width,yt.height,0,Jt,Ft,yt.data);M.generateMipmaps=!1}else re?(Ee&&e.texStorage2D(i.TEXTURE_2D,Yt,At,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,Jt,Ft,tt.data)):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,Jt,Ft,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){re&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,At,Gt[0].width,Gt[0].height,tt.depth);for(let lt=0,D=Gt.length;lt<D;lt++)yt=Gt[lt],M.format!==wn?Jt!==null?re?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,tt.depth,Jt,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,At,yt.width,yt.height,tt.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,tt.depth,Jt,Ft,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,At,yt.width,yt.height,tt.depth,0,Jt,Ft,yt.data)}else{re&&Ee&&e.texStorage2D(i.TEXTURE_2D,Yt,At,Gt[0].width,Gt[0].height);for(let lt=0,D=Gt.length;lt<D;lt++)yt=Gt[lt],M.format!==wn?Jt!==null?re?e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,Jt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,At,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,Jt,Ft,yt.data):e.texImage2D(i.TEXTURE_2D,lt,At,yt.width,yt.height,0,Jt,Ft,yt.data)}else if(M.isDataArrayTexture)re?(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,At,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Jt,Ft,tt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,tt.width,tt.height,tt.depth,0,Jt,Ft,tt.data);else if(M.isData3DTexture)re?(Ee&&e.texStorage3D(i.TEXTURE_3D,Yt,At,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Jt,Ft,tt.data)):e.texImage3D(i.TEXTURE_3D,0,At,tt.width,tt.height,tt.depth,0,Jt,Ft,tt.data);else if(M.isFramebufferTexture){if(Ee)if(re)e.texStorage2D(i.TEXTURE_2D,Yt,At,tt.width,tt.height);else{let lt=tt.width,D=tt.height;for(let ut=0;ut<Yt;ut++)e.texImage2D(i.TEXTURE_2D,ut,At,lt,D,0,Jt,Ft,null),lt>>=1,D>>=1}}else if(Gt.length>0&&ee){re&&Ee&&e.texStorage2D(i.TEXTURE_2D,Yt,At,Gt[0].width,Gt[0].height);for(let lt=0,D=Gt.length;lt<D;lt++)yt=Gt[lt],re?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Jt,Ft,yt):e.texImage2D(i.TEXTURE_2D,lt,At,Jt,Ft,yt);M.generateMipmaps=!1}else re?(Ee&&e.texStorage2D(i.TEXTURE_2D,Yt,At,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Jt,Ft,tt)):e.texImage2D(i.TEXTURE_2D,0,At,Jt,Ft,tt);y(M,ee)&&x(it),vt.__version=K.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function Mt(S,M,B){if(M.image.length!==6)return;let it=j(S,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+B);let K=n.get(Q);if(Q.version!==K.__version||it===!0){e.activeTexture(i.TEXTURE0+B);let vt=oe.getPrimaries(oe.workingColorSpace),ht=M.colorSpace===pn?null:oe.getPrimaries(M.colorSpace),xt=M.colorSpace===pn||vt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Rt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ht=M.image[0]&&M.image[0].isDataTexture,tt=[];for(let lt=0;lt<6;lt++)!Rt&&!Ht?tt[lt]=_(M.image[lt],!1,!0,s.maxCubemapSize):tt[lt]=Ht?M.image[lt].image:M.image[lt],tt[lt]=mt(M,tt[lt]);let ee=tt[0],Jt=m(ee)||a,Ft=r.convert(M.format,M.colorSpace),At=r.convert(M.type),yt=v(M.internalFormat,Ft,At,M.colorSpace),Gt=a&&M.isVideoTexture!==!0,re=K.__version===void 0||it===!0,Ee=P(M,ee,Jt);W(i.TEXTURE_CUBE_MAP,M,Jt);let Yt;if(Rt){Gt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,yt,ee.width,ee.height);for(let lt=0;lt<6;lt++){Yt=tt[lt].mipmaps;for(let D=0;D<Yt.length;D++){let ut=Yt[D];M.format!==wn?Ft!==null?Gt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,D,0,0,ut.width,ut.height,Ft,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,D,yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,D,0,0,ut.width,ut.height,Ft,At,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,D,yt,ut.width,ut.height,0,Ft,At,ut.data)}}}else{Yt=M.mipmaps,Gt&&re&&(Yt.length>0&&Ee++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,yt,tt[0].width,tt[0].height));for(let lt=0;lt<6;lt++)if(Ht){Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,tt[lt].width,tt[lt].height,Ft,At,tt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,yt,tt[lt].width,tt[lt].height,0,Ft,At,tt[lt].data);for(let D=0;D<Yt.length;D++){let ft=Yt[D].image[lt].image;Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,D+1,0,0,ft.width,ft.height,Ft,At,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,D+1,yt,ft.width,ft.height,0,Ft,At,ft.data)}}else{Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ft,At,tt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,yt,Ft,At,tt[lt]);for(let D=0;D<Yt.length;D++){let ut=Yt[D];Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,D+1,0,0,Ft,At,ut.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,D+1,yt,Ft,At,ut.image[lt])}}}y(M,Jt)&&x(i.TEXTURE_CUBE_MAP),K.__version=Q.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function _t(S,M,B,it,Q,K){let vt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),xt=v(B.internalFormat,vt,ht,B.colorSpace);if(!n.get(M).__hasExternalTextures){let Ht=Math.max(1,M.width>>K),tt=Math.max(1,M.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,xt,Ht,tt,M.depth,0,vt,ht,null):e.texImage2D(Q,K,xt,Ht,tt,0,vt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),Y(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Q,n.get(B).__webglTexture,0,ot(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,Q,n.get(B).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(S,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,S),M.depthBuffer&&!M.stencilBuffer){let it=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||Y(M)){let Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ei?it=i.DEPTH_COMPONENT32F:Q.type===ti&&(it=i.DEPTH_COMPONENT24));let K=ot(M);Y(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,it,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,it,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(M.depthBuffer&&M.stencilBuffer){let it=ot(M);B&&Y(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,M.width,M.height):Y(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let it=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<it.length;Q++){let K=it[Q],vt=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),xt=v(K.internalFormat,vt,ht,K.colorSpace),Rt=ot(M);B&&Y(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,xt,M.width,M.height):Y(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,xt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);let it=n.get(M.depthTexture).__webglTexture,Q=ot(M);if(M.depthTexture.format===Ti)Y(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(M.depthTexture.format===fs)Y(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function bt(S){let M=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");kt(M.__webglFramebuffer,S)}else if(B){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]=i.createRenderbuffer(),Lt(M.__webglDepthbuffer[it],S,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Lt(M.__webglDepthbuffer,S,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(S,M,B){let it=n.get(S);M!==void 0&&_t(it.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&bt(S)}function I(S){let M=S.texture,B=n.get(S),it=n.get(M);S.addEventListener("dispose",U),S.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=M.version,o.memory.textures++);let Q=S.isWebGLCubeRenderTarget===!0,K=S.isWebGLMultipleRenderTargets===!0,vt=m(S)||a;if(Q){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let xt=0;xt<M.mipmaps.length;xt++)B.__webglFramebuffer[ht][xt]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(K)if(s.drawBuffers){let ht=S.texture;for(let xt=0,Rt=ht.length;xt<Rt;xt++){let Ht=n.get(ht[xt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&Y(S)===!1){let ht=K?M:[M];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xt=0;xt<ht.length;xt++){let Rt=ht[xt];B.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[xt]);let Ht=r.convert(Rt.format,Rt.colorSpace),tt=r.convert(Rt.type),ee=v(Rt.internalFormat,Ht,tt,Rt.colorSpace,S.isXRRenderTarget===!0),Jt=ot(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,ee,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,B.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(B.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),W(i.TEXTURE_CUBE_MAP,M,vt);for(let ht=0;ht<6;ht++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)_t(B.__webglFramebuffer[ht][xt],S,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,xt);else _t(B.__webglFramebuffer[ht],S,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);y(M,vt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){let ht=S.texture;for(let xt=0,Rt=ht.length;xt<Rt;xt++){let Ht=ht[xt],tt=n.get(Ht);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),W(i.TEXTURE_2D,Ht,vt),_t(B.__webglFramebuffer,S,Ht,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),y(Ht,vt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ht=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,it.__webglTexture),W(ht,M,vt),a&&M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)_t(B.__webglFramebuffer[xt],S,M,i.COLOR_ATTACHMENT0,ht,xt);else _t(B.__webglFramebuffer,S,M,i.COLOR_ATTACHMENT0,ht,0);y(M,vt)&&x(ht),e.unbindTexture()}S.depthBuffer&&bt(S)}function at(S){let M=m(S)||a,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0,Q=B.length;it<Q;it++){let K=B[it];if(y(K,M)){let vt=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ht=n.get(K).__webglTexture;e.bindTexture(vt,ht),x(vt),e.unbindTexture()}}}function $(S){if(a&&S.samples>0&&Y(S)===!1){let M=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,it=S.height,Q=i.COLOR_BUFFER_BIT,K=[],vt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(S),xt=S.isWebGLMultipleRenderTargets===!0;if(xt)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){K.push(i.COLOR_ATTACHMENT0+Rt),S.depthBuffer&&K.push(vt);let Ht=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Ht===!1&&(S.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),xt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Rt]),Ht===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[vt])),xt){let tt=n.get(M[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,B,it,0,0,B,it,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Rt]);let Ht=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function ot(S){return Math.min(s.maxSamples,S.samples)}function Y(S){let M=n.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(S){let M=o.render.frame;h.get(S)!==M&&(h.set(S,M),S.update())}function mt(S,M){let B=S.colorSpace,it=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===$a||B!==Xn&&B!==pn&&(oe.getTransfer(B)===ue?a===!1?t.has("EXT_sRGB")===!0&&it===wn?(S.format=$a,S.minFilter=nn,S.generateMipmaps=!1):M=eo.sRGBToLinear(M):(it!==wn||Q!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=L,this.resetTextureUnits=G,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Ot,this.setupRenderTarget=I,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Y}function g_(i,t,e){let n=e.isWebGL2;function s(r,o=pn){let a,l=oe.getTransfer(o);if(r===ii)return i.UNSIGNED_BYTE;if(r===Jh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Kh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===cd)return i.BYTE;if(r===hd)return i.SHORT;if(r===Ll)return i.UNSIGNED_SHORT;if(r===Zh)return i.INT;if(r===ti)return i.UNSIGNED_INT;if(r===ei)return i.FLOAT;if(r===Ws)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ud)return i.ALPHA;if(r===wn)return i.RGBA;if(r===fd)return i.LUMINANCE;if(r===dd)return i.LUMINANCE_ALPHA;if(r===Ti)return i.DEPTH_COMPONENT;if(r===fs)return i.DEPTH_STENCIL;if(r===$a)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===pd)return i.RED;if(r===jh)return i.RED_INTEGER;if(r===md)return i.RG;if(r===Qh)return i.RG_INTEGER;if(r===tu)return i.RGBA_INTEGER;if(r===la||r===ca||r===ha||r===ua)if(l===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===la)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===la)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ec||r===wc||r===Tc||r===Ac)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ec)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rc||r===Cc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Rc)return l===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Cc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pc||r===Ic||r===Lc||r===Dc||r===Uc||r===Nc||r===Oc||r===Fc||r===Bc||r===kc||r===zc||r===Hc||r===Vc||r===Gc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Pc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ic)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gc)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fa||r===Wc||r===Xc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===fa)return l===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gd||r===qc||r===Yc||r===$c)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===fa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===qc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$c)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var cl=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},__={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(__)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hl=class extends ri{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=e.getContextAttributes(),m=null,p=null,y=[],x=[],v=new st,P=null,T=new Ce;T.layers.enable(1),T.viewport=new me;let C=new Ce;C.layers.enable(2),C.viewport=new me;let U=[T,C],b=new cl;b.layers.enable(1),b.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=y[W];return j===void 0&&(j=new Bs,y[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=y[W];return j===void 0&&(j=new Bs,y[W]=j),j.getGripSpace()},this.getHand=function(W){let j=y[W];return j===void 0&&(j=new Bs,y[W]=j),j.getHandSpace()};function X(W){let j=x.indexOf(W.inputSource);if(j===-1)return;let pt=y[j];pt!==void 0&&(pt.update(W.inputSource,W.frame,c||o),pt.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",L);for(let W=0;W<y.length;W++){let j=x[W];j!==null&&(x[W]=null,y[W].disconnect(j))}w=null,O=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new qn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,pt=null,Mt=null;_.depth&&(Mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?fs:Ti,pt=_.stencil?wi:ti);let _t={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(_t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new qn(f.textureWidth,f.textureHeight,{format:wn,type:ii,depthTexture:new uo(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Lt=t.properties.get(p);Lt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(W){for(let j=0;j<W.removed.length;j++){let pt=W.removed[j],Mt=x.indexOf(pt);Mt>=0&&(x[Mt]=null,y[Mt].disconnect(pt))}for(let j=0;j<W.added.length;j++){let pt=W.added[j],Mt=x.indexOf(pt);if(Mt===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=x.length){x.push(pt),Mt=Lt;break}else if(x[Lt]===null){x[Lt]=pt,Mt=Lt;break}if(Mt===-1)break}let _t=y[Mt];_t&&_t.connect(pt)}}let F=new R,H=new R;function J(W,j,pt){F.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(pt.matrixWorld);let Mt=F.distanceTo(H),_t=j.projectionMatrix.elements,Lt=pt.projectionMatrix.elements,kt=_t[14]/(_t[10]-1),bt=_t[14]/(_t[10]+1),Ot=(_t[9]+1)/_t[5],I=(_t[9]-1)/_t[5],at=(_t[8]-1)/_t[0],$=(Lt[8]+1)/Lt[0],ot=kt*at,Y=kt*$,Tt=Mt/(-at+$),mt=Tt*-at;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(mt),W.translateZ(Tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let S=kt+Tt,M=bt+Tt,B=ot-mt,it=Y+(Mt-mt),Q=Ot*bt/M*S,K=I*bt/M*S;W.projectionMatrix.makePerspective(B,it,Q,K,S,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Z(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;b.near=C.near=T.near=W.near,b.far=C.far=T.far=W.far,(w!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,O=b.far);let j=W.parent,pt=b.cameras;Z(b,j);for(let Mt=0;Mt<pt.length;Mt++)Z(pt[Mt],j);pt.length===2?J(b,T,C):b.projectionMatrix.copy(T.projectionMatrix),q(W,b,j)};function q(W,j,pt){pt===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(pt.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Za*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)};let et=null;function nt(W,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Mt=!1;pt.length!==b.cameras.length&&(b.cameras.length=0,Mt=!0);for(let _t=0;_t<pt.length;_t++){let Lt=pt[_t],kt=null;if(d!==null)kt=d.getViewport(Lt);else{let Ot=u.getViewSubImage(f,Lt);kt=Ot.viewport,_t===0&&(t.setRenderTargetTextures(p,Ot.colorTexture,f.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(p))}let bt=U[_t];bt===void 0&&(bt=new Ce,bt.layers.enable(_t),bt.viewport=new me,U[_t]=bt),bt.matrix.fromArray(Lt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Lt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(kt.x,kt.y,kt.width,kt.height),_t===0&&(b.matrix.copy(bt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Mt===!0&&b.cameras.push(bt)}}for(let pt=0;pt<y.length;pt++){let Mt=x[pt],_t=y[pt];Mt!==null&&_t!==void 0&&_t.update(Mt,j,c||o)}et&&et(W,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let dt=new au;dt.setAnimationLoop(nt),this.setAnimationLoop=function(W){et=W},this.dispose=function(){}}};function x_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ou(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y_(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let P=x.program;n.updateUBOMapping(y,P);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let v=i.createBuffer(),P=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],v=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,C=v.length;T<C;T++){let U=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,w=U.length;b<w;b++){let O=U[b];if(d(O,T,b,P)===!0){let X=O.__offset,G=Array.isArray(O.value)?O.value:[O.value],L=0;for(let F=0;F<G.length;F++){let H=G[F],J=_(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,X+L,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,v,P){let T=y.value,C=x+"_"+v;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:P[C]=T.clone(),!0;{let U=P[C];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return P[C]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(y){let x=y.uniforms,v=0,P=16;for(let C=0,U=x.length;C<U;C++){let b=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,O=b.length;w<O;w++){let X=b[w],G=Array.isArray(X.value)?X.value:[X.value];for(let L=0,F=G.length;L<F;L++){let H=G[L],J=_(H),Z=v%P;Z!==0&&P-Z<J.boundary&&(v+=P-Z),X.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=J.storage}}}let T=v%P;return T>0&&(v+=P-T),y.__size=v,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var $s=class{constructor(t={}){let{canvas:e=Rd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this._useLegacyLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;let x=this,v=!1,P=0,T=0,C=null,U=-1,b=null,w=new me,O=new me,X=null,G=new It(0),L=0,F=e.width,H=e.height,J=1,Z=null,q=null,et=new me(0,0,F,H),nt=new me(0,0,F,H),dt=!1,W=new Ys,j=!1,pt=!1,Mt=null,_t=new ge,Lt=new st,kt=new R,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return C===null?J:1}let I=n;function at(E,N){for(let z=0;z<E.length;z++){let V=E[z],k=e.getContext(V,N);if(k!==null)return k}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Il}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ut,!1),I===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),I=at(N,E),I===null)throw at(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $,ot,Y,Tt,mt,S,M,B,it,Q,K,vt,ht,xt,Rt,Ht,tt,ee,Jt,Ft,At,yt,Gt,re;function Ee(){$=new B0(I),ot=new L0(I,$,t),$.init(ot),yt=new g_(I,$,ot),Y=new p_(I,$,ot),Tt=new H0(I),mt=new n_,S=new m_(I,$,Y,mt,ot,yt,Tt),M=new U0(x),B=new F0(x),it=new Zd(I,ot),Gt=new P0(I,$,it,ot),Q=new k0(I,it,Tt,Gt),K=new X0(I,Q,it,Tt),Jt=new W0(I,ot,S),Ht=new D0(mt),vt=new e_(x,M,B,$,ot,Gt,Ht),ht=new x_(x,mt),xt=new s_,Rt=new h_($,ot),ee=new C0(x,M,B,Y,K,f,l),tt=new d_(x,K,ot),re=new y_(I,Tt,ot,Y),Ft=new I0(I,$,Tt,ot),At=new z0(I,$,Tt,ot),Tt.programs=vt.programs,x.capabilities=ot,x.extensions=$,x.properties=mt,x.renderLists=xt,x.shadowMap=tt,x.state=Y,x.info=Tt}Ee();let Yt=new hl(x,I);this.xr=Yt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=$.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=$.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(F,H,!1))},this.getSize=function(E){return E.set(F,H)},this.setSize=function(E,N,z=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,H=N,e.width=Math.floor(E*J),e.height=Math.floor(N*J),z===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(F*J,H*J).floor()},this.setDrawingBufferSize=function(E,N,z){F=E,H=N,J=z,e.width=Math.floor(E*z),e.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(et)},this.setViewport=function(E,N,z,V){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,N,z,V),Y.viewport(w.copy(et).multiplyScalar(J).floor())},this.getScissor=function(E){return E.copy(nt)},this.setScissor=function(E,N,z,V){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,N,z,V),Y.scissor(O.copy(nt).multiplyScalar(J).floor())},this.getScissorTest=function(){return dt},this.setScissorTest=function(E){Y.setScissorTest(dt=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,N=!0,z=!0){let V=0;if(E){let k=!1;if(C!==null){let gt=C.texture.format;k=gt===tu||gt===Qh||gt===jh}if(k){let gt=C.texture.type,wt=gt===ii||gt===ti||gt===Ll||gt===wi||gt===Jh||gt===Kh,Pt=ee.getClearColor(),Ut=ee.getClearAlpha(),Xt=Pt.r,zt=Pt.g,Vt=Pt.b;wt?(d[0]=Xt,d[1]=zt,d[2]=Vt,d[3]=Ut,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=Xt,g[1]=zt,g[2]=Vt,g[3]=Ut,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),xt.dispose(),Rt.dispose(),mt.dispose(),M.dispose(),B.dispose(),K.dispose(),Gt.dispose(),re.dispose(),vt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Je),Yt.removeEventListener("sessionend",ce),Mt&&(Mt.dispose(),Mt=null),Ke.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let E=Tt.autoReset,N=tt.enabled,z=tt.autoUpdate,V=tt.needsUpdate,k=tt.type;Ee(),Tt.autoReset=E,tt.enabled=N,tt.autoUpdate=z,tt.needsUpdate=V,tt.type=k}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ft(E){let N=E.target;N.removeEventListener("dispose",ft),Dt(N)}function Dt(E){Ct(E),mt.remove(E)}function Ct(E){let N=mt.get(E).programs;N!==void 0&&(N.forEach(function(z){vt.releaseProgram(z)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,V,k,gt){N===null&&(N=bt);let wt=k.isMesh&&k.matrixWorld.determinant()<0,Pt=wf(E,N,z,V,k);Y.setMaterial(V,wt);let Ut=z.index,Xt=1;if(V.wireframe===!0){if(Ut=Q.getWireframeAttribute(z),Ut===void 0)return;Xt=2}let zt=z.drawRange,Vt=z.attributes.position,Ae=zt.start*Xt,an=(zt.start+zt.count)*Xt;gt!==null&&(Ae=Math.max(Ae,gt.start*Xt),an=Math.min(an,(gt.start+gt.count)*Xt)),Ut!==null?(Ae=Math.max(Ae,0),an=Math.min(an,Ut.count)):Vt!=null&&(Ae=Math.max(Ae,0),an=Math.min(an,Vt.count));let Be=an-Ae;if(Be<0||Be===1/0)return;Gt.setup(k,V,Pt,z,Ut);let Fn,ye=Ft;if(Ut!==null&&(Fn=it.get(Ut),ye=At,ye.setIndex(Fn)),k.isMesh)V.wireframe===!0?(Y.setLineWidth(V.wireframeLinewidth*Ot()),ye.setMode(I.LINES)):ye.setMode(I.TRIANGLES);else if(k.isLine){let $t=V.linewidth;$t===void 0&&($t=1),Y.setLineWidth($t*Ot()),k.isLineSegments?ye.setMode(I.LINES):k.isLineLoop?ye.setMode(I.LINE_LOOP):ye.setMode(I.LINE_STRIP)}else k.isPoints?ye.setMode(I.POINTS):k.isSprite&&ye.setMode(I.TRIANGLES);if(k.isBatchedMesh)ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ye.renderInstances(Ae,Be,k.count);else if(z.isInstancedBufferGeometry){let $t=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ia=Math.min(z.instanceCount,$t);ye.renderInstances(Ae,Be,ia)}else ye.render(Ae,Be)};function ae(E,N,z){E.transparent===!0&&E.side===Qe&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,vr(E,N,z),E.side=si,E.needsUpdate=!0,vr(E,N,z),E.side=Qe):vr(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),m=Rt.get(z),m.init(),y.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==z&&E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);let V=new Set;return E.traverse(function(k){let gt=k.material;if(gt)if(Array.isArray(gt))for(let wt=0;wt<gt.length;wt++){let Pt=gt[wt];ae(Pt,z,k),V.add(Pt)}else ae(gt,z,k),V.add(gt)}),y.pop(),m=null,V},this.compileAsync=function(E,N,z=null){let V=this.compile(E,N,z);return new Promise(k=>{function gt(){if(V.forEach(function(wt){mt.get(wt).currentProgram.isReady()&&V.delete(wt)}),V.size===0){k(E);return}setTimeout(gt,10)}$.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let le=null;function Fe(E){le&&le(E)}function Je(){Ke.stop()}function ce(){Ke.start()}let Ke=new au;Ke.setAnimationLoop(Fe),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(E){le=E,Yt.setAnimationLoop(E),E===null?Ke.stop():Ke.start()},Yt.addEventListener("sessionstart",Je),Yt.addEventListener("sessionend",ce),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(N),N=Yt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,C),m=Rt.get(E,y.length),m.init(),y.push(m),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(_t),pt=this.localClippingEnabled,j=Ht.init(this.clippingPlanes,pt),_=xt.get(E,p.length),_.init(),p.push(_),Pn(E,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,q),this.info.render.frame++,j===!0&&Ht.beginShadows();let z=m.state.shadowsArray;if(tt.render(z,E,N),j===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(_,E),m.setupLights(x._useLegacyLights),N.isArrayCamera){let V=N.cameras;for(let k=0,gt=V.length;k<gt;k++){let wt=V[k];uc(_,E,wt,wt.viewport)}}else uc(_,E,N);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,N),Gt.resetDefaultState(),U=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Pn(E,N,z,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){V&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);let wt=K.update(E),Pt=E.material;Pt.visible&&_.push(E,wt,Pt,z,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){let wt=K.update(E),Pt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),kt.copy(wt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(Pt)){let Ut=wt.groups;for(let Xt=0,zt=Ut.length;Xt<zt;Xt++){let Vt=Ut[Xt],Ae=Pt[Vt.materialIndex];Ae&&Ae.visible&&_.push(E,wt,Ae,z,kt.z,Vt)}}else Pt.visible&&_.push(E,wt,Pt,z,kt.z,null)}}let gt=E.children;for(let wt=0,Pt=gt.length;wt<Pt;wt++)Pn(gt[wt],N,z,V)}function uc(E,N,z,V){let k=E.opaque,gt=E.transmissive,wt=E.transparent;m.setupLightsView(z),j===!0&&Ht.setGlobalState(x.clippingPlanes,z),gt.length>0&&Ef(k,gt,N,z),V&&Y.viewport(w.copy(V)),k.length>0&&yr(k,N,z),gt.length>0&&yr(gt,N,z),wt.length>0&&yr(wt,N,z),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Ef(E,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let gt=ot.isWebGL2;Mt===null&&(Mt=new qn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?Ws:ii,minFilter:Gs,samples:gt?4:0})),x.getDrawingBufferSize(Lt),gt?Mt.setSize(Lt.x,Lt.y):Mt.setSize(Ja(Lt.x),Ja(Lt.y));let wt=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor(G),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Pt=x.toneMapping;x.toneMapping=Ln,yr(E,z,V),S.updateMultisampleRenderTarget(Mt),S.updateRenderTargetMipmap(Mt);let Ut=!1;for(let Xt=0,zt=N.length;Xt<zt;Xt++){let Vt=N[Xt],Ae=Vt.object,an=Vt.geometry,Be=Vt.material,Fn=Vt.group;if(Be.side===Qe&&Ae.layers.test(V.layers)){let ye=Be.side;Be.side=sn,Be.needsUpdate=!0,fc(Ae,z,V,an,Be,Fn),Be.side=ye,Be.needsUpdate=!0,Ut=!0}}Ut===!0&&(S.updateMultisampleRenderTarget(Mt),S.updateRenderTargetMipmap(Mt)),x.setRenderTarget(wt),x.setClearColor(G,L),x.toneMapping=Pt}function yr(E,N,z){let V=N.isScene===!0?N.overrideMaterial:null;for(let k=0,gt=E.length;k<gt;k++){let wt=E[k],Pt=wt.object,Ut=wt.geometry,Xt=V===null?wt.material:V,zt=wt.group;Pt.layers.test(z.layers)&&fc(Pt,N,z,Ut,Xt,zt)}}function fc(E,N,z,V,k,gt){E.onBeforeRender(x,N,z,V,k,gt),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,N,z,V,E,gt),k.transparent===!0&&k.side===Qe&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,x.renderBufferDirect(z,N,V,k,E,gt),k.side=si,k.needsUpdate=!0,x.renderBufferDirect(z,N,V,k,E,gt),k.side=Qe):x.renderBufferDirect(z,N,V,k,E,gt),E.onAfterRender(x,N,z,V,k,gt)}function vr(E,N,z){N.isScene!==!0&&(N=bt);let V=mt.get(E),k=m.state.lights,gt=m.state.shadowsArray,wt=k.state.version,Pt=vt.getParameters(E,k.state,gt,N,z),Ut=vt.getProgramCacheKey(Pt),Xt=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||V.environment),Xt===void 0&&(E.addEventListener("dispose",ft),Xt=new Map,V.programs=Xt);let zt=Xt.get(Ut);if(zt!==void 0){if(V.currentProgram===zt&&V.lightsStateVersion===wt)return pc(E,Pt),zt}else Pt.uniforms=vt.getUniforms(E),E.onBuild(z,Pt,x),E.onBeforeCompile(Pt,x),zt=vt.acquireProgram(Pt,Ut),Xt.set(Ut,zt),V.uniforms=Pt.uniforms;let Vt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=Ht.uniform),pc(E,Pt),V.needsLights=Af(E),V.lightsStateVersion=wt,V.needsLights&&(Vt.ambientLightColor.value=k.state.ambient,Vt.lightProbe.value=k.state.probe,Vt.directionalLights.value=k.state.directional,Vt.directionalLightShadows.value=k.state.directionalShadow,Vt.spotLights.value=k.state.spot,Vt.spotLightShadows.value=k.state.spotShadow,Vt.rectAreaLights.value=k.state.rectArea,Vt.ltc_1.value=k.state.rectAreaLTC1,Vt.ltc_2.value=k.state.rectAreaLTC2,Vt.pointLights.value=k.state.point,Vt.pointLightShadows.value=k.state.pointShadow,Vt.hemisphereLights.value=k.state.hemi,Vt.directionalShadowMap.value=k.state.directionalShadowMap,Vt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Vt.spotShadowMap.value=k.state.spotShadowMap,Vt.spotLightMatrix.value=k.state.spotLightMatrix,Vt.spotLightMap.value=k.state.spotLightMap,Vt.pointShadowMap.value=k.state.pointShadowMap,Vt.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=zt,V.uniformsList=null,zt}function dc(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=cs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function pc(E,N){let z=mt.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function wf(E,N,z,V,k){N.isScene!==!0&&(N=bt),S.resetTextureUnits();let gt=N.fog,wt=V.isMeshStandardMaterial?N.environment:null,Pt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xn,Ut=(V.isMeshStandardMaterial?B:M).get(V.envMap||wt),Xt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,zt=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Vt=!!z.morphAttributes.position,Ae=!!z.morphAttributes.normal,an=!!z.morphAttributes.color,Be=Ln;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Be=x.toneMapping);let Fn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ye=Fn!==void 0?Fn.length:0,$t=mt.get(V),ia=m.state.lights;if(j===!0&&(pt===!0||E!==b)){let fn=E===b&&V.id===U;Ht.setState(V,E,fn)}let we=!1;V.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==ia.state.version||$t.outputColorSpace!==Pt||k.isBatchedMesh&&$t.batching===!1||!k.isBatchedMesh&&$t.batching===!0||k.isInstancedMesh&&$t.instancing===!1||!k.isInstancedMesh&&$t.instancing===!0||k.isSkinnedMesh&&$t.skinning===!1||!k.isSkinnedMesh&&$t.skinning===!0||k.isInstancedMesh&&$t.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&$t.instancingColor===!1&&k.instanceColor!==null||$t.envMap!==Ut||V.fog===!0&&$t.fog!==gt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Ht.numPlanes||$t.numIntersection!==Ht.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==zt||$t.morphTargets!==Vt||$t.morphNormals!==Ae||$t.morphColors!==an||$t.toneMapping!==Be||ot.isWebGL2===!0&&$t.morphTargetsCount!==ye)&&(we=!0):(we=!0,$t.__version=V.version);let gi=$t.currentProgram;we===!0&&(gi=vr(V,N,k));let mc=!1,Ps=!1,sa=!1,Xe=gi.getUniforms(),_i=$t.uniforms;if(Y.useProgram(gi.program)&&(mc=!0,Ps=!0,sa=!0),V.id!==U&&(U=V.id,Ps=!0),mc||b!==E){Xe.setValue(I,"projectionMatrix",E.projectionMatrix),Xe.setValue(I,"viewMatrix",E.matrixWorldInverse);let fn=Xe.map.cameraPosition;fn!==void 0&&fn.setValue(I,kt.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&Xe.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Xe.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Ps=!0,sa=!0)}if(k.isSkinnedMesh){Xe.setOptional(I,k,"bindMatrix"),Xe.setOptional(I,k,"bindMatrixInverse");let fn=k.skeleton;fn&&(ot.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Xe.setValue(I,"boneTexture",fn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Xe.setOptional(I,k,"batchingTexture"),Xe.setValue(I,"batchingTexture",k._matricesTexture,S));let ra=z.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&ot.isWebGL2===!0)&&Jt.update(k,z,gi),(Ps||$t.receiveShadow!==k.receiveShadow)&&($t.receiveShadow=k.receiveShadow,Xe.setValue(I,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_i.envMap.value=Ut,_i.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Ps&&(Xe.setValue(I,"toneMappingExposure",x.toneMappingExposure),$t.needsLights&&Tf(_i,sa),gt&&V.fog===!0&&ht.refreshFogUniforms(_i,gt),ht.refreshMaterialUniforms(_i,V,J,H,Mt),cs.upload(I,dc($t),_i,S)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(cs.upload(I,dc($t),_i,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Xe.setValue(I,"center",k.center),Xe.setValue(I,"modelViewMatrix",k.modelViewMatrix),Xe.setValue(I,"normalMatrix",k.normalMatrix),Xe.setValue(I,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let fn=V.uniformsGroups;for(let oa=0,Rf=fn.length;oa<Rf;oa++)if(ot.isWebGL2){let gc=fn[oa];re.update(gc,gi),re.bind(gc,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function Tf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Af(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,z){mt.get(E.texture).__webglTexture=N,mt.get(E.depthTexture).__webglTexture=z;let V=mt.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){let z=mt.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){C=E,P=N,T=z;let V=!0,k=null,gt=!1,wt=!1;if(E){let Ut=mt.get(E);Ut.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):Ut.__webglFramebuffer===void 0?S.setupRenderTarget(E):Ut.__hasExternalTextures&&S.rebindTextures(E,mt.get(E.texture).__webglTexture,mt.get(E.depthTexture).__webglTexture);let Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(wt=!0);let zt=mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?k=zt[N][z]:k=zt[N],gt=!0):ot.isWebGL2&&E.samples>0&&S.useMultisampledRTT(E)===!1?k=mt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?k=zt[z]:k=zt,w.copy(E.viewport),O.copy(E.scissor),X=E.scissorTest}else w.copy(et).multiplyScalar(J).floor(),O.copy(nt).multiplyScalar(J).floor(),X=dt;if(Y.bindFramebuffer(I.FRAMEBUFFER,k)&&ot.drawBuffers&&V&&Y.drawBuffers(E,k),Y.viewport(w),Y.scissor(O),Y.setScissorTest(X),gt){let Ut=mt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ut.__webglTexture,z)}else if(wt){let Ut=mt.get(E.texture),Xt=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ut.__webglTexture,z||0,Xt)}U=-1},this.readRenderTargetPixels=function(E,N,z,V,k,gt,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){Y.bindFramebuffer(I.FRAMEBUFFER,Pt);try{let Ut=E.texture,Xt=Ut.format,zt=Ut.type;if(Xt!==wn&&yt.convert(Xt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Vt=zt===Ws&&($.has("EXT_color_buffer_half_float")||ot.isWebGL2&&$.has("EXT_color_buffer_float"));if(zt!==ii&&yt.convert(zt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===ei&&(ot.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&z>=0&&z<=E.height-k&&I.readPixels(N,z,V,k,yt.convert(Xt),yt.convert(zt),gt)}finally{let Ut=C!==null?mt.get(C).__webglFramebuffer:null;Y.bindFramebuffer(I.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(E,N,z=0){let V=Math.pow(2,-z),k=Math.floor(N.image.width*V),gt=Math.floor(N.image.height*V);S.setTexture2D(N,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,E.x,E.y,k,gt),Y.unbindTexture()},this.copyTextureToTexture=function(E,N,z,V=0){let k=N.image.width,gt=N.image.height,wt=yt.convert(z.format),Pt=yt.convert(z.type);S.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,E.x,E.y,k,gt,wt,Pt,N.image.data):N.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,wt,N.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,V,E.x,E.y,wt,Pt,N.image),V===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z,V,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=E.max.x-E.min.x+1,wt=E.max.y-E.min.y+1,Pt=E.max.z-E.min.z+1,Ut=yt.convert(V.format),Xt=yt.convert(V.type),zt;if(V.isData3DTexture)S.setTexture3D(V,0),zt=I.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)S.setTexture2DArray(V,0),zt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);let Vt=I.getParameter(I.UNPACK_ROW_LENGTH),Ae=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),Be=I.getParameter(I.UNPACK_SKIP_ROWS),Fn=I.getParameter(I.UNPACK_SKIP_IMAGES),ye=z.isCompressedTexture?z.mipmaps[k]:z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?I.texSubImage3D(zt,k,N.x,N.y,N.z,gt,wt,Pt,Ut,Xt,ye.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(zt,k,N.x,N.y,N.z,gt,wt,Pt,Ut,ye.data)):I.texSubImage3D(zt,k,N.x,N.y,N.z,gt,wt,Pt,Ut,Xt,ye),I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ae),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fn),k===0&&V.generateMipmaps&&I.generateMipmap(zt),Y.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),Y.unbindTexture()},this.resetState=function(){P=0,T=0,C=null,Y.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ul?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Ao?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Me?Ai:nu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ai?Me:Xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ul=class extends $s{};ul.prototype.isWebGL1Renderer=!0;var fo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},li=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var ci=class extends gn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,l=new ge;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ge(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ge(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Zs=class extends _n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new st,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fl=class extends Zs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ol(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Gr=new R,Ba=new Ol,ka=new Ol,za=new Ol,Js=class extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Gr.subVectors(s[0],s[1]).add(s[0]),c=Gr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ba.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),ka.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),za.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ka.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),za.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ba.calc(l),ka.calc(l),za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function kh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function v_(i,t){let e=1-i;return e*e*t}function M_(i,t){return 2*(1-i)*i*t}function b_(i,t){return i*i*t}function ks(i,t,e,n){return v_(i,t)+M_(i,e)+b_(i,n)}function S_(i,t){let e=1-i;return e*e*e*t}function E_(i,t){let e=1-i;return 3*e*e*i*t}function w_(i,t){return 3*(1-i)*i*i*t}function T_(i,t){return i*i*i*t}function zs(i,t,e,n,s){return S_(i,t)+E_(i,e)+w_(i,n)+T_(i,s)}var po=class extends _n{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ks=class extends _n{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y),zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mo=class extends _n{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends _n{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends _n{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends _n{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y),ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(kh(a,l.x,c.x,h.x,u.x),kh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},yo=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:Js,CubicBezierCurve:po,CubicBezierCurve3:Ks,EllipseCurve:Zs,LineCurve:mo,LineCurve3:dl,QuadraticBezierCurve:go,QuadraticBezierCurve3:_o,SplineCurve:xo}),pl=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new yo[s.type]().fromJSON(s))}return this}},ms=class extends pl{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mo(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new go(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new po(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Zs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vo=class i extends _e{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ge(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,f=new st,d=new R,g=new R,_=new R,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*s,v=Math.sin(x),P=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*P,o.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);let C=l[3*T+0]*v,U=l[3*T+1],b=l[3*T+0]*P;c.push(C,U,b)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let v=x+y*t.length,P=v,T=v+t.length,C=v+t.length+1,U=v+1;r.push(P,T,U),r.push(C,U,T)}this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var js=class i extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Te=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(d,2));function y(){let v=new R,P=new R,T=0,C=(e-t)/n;for(let U=0;U<=r;U++){let b=[],w=U/r,O=w*(e-t)+t;for(let X=0;X<=s;X++){let G=X/s,L=G*l+a,F=Math.sin(L),H=Math.cos(L);P.x=O*F,P.y=-w*n+m,P.z=O*H,u.push(P.x,P.y,P.z),v.set(F,C,H).normalize(),f.push(v.x,v.y,v.z),d.push(G,1-w),b.push(g++)}_.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){let w=_[b][U],O=_[b+1][U],X=_[b+1][U+1],G=_[b][U+1];h.push(w,O,G),h.push(O,X,G),T+=6}c.addGroup(p,T,0),p+=T}function x(v){let P=g,T=new st,C=new R,U=0,b=v===!0?t:e,w=v===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;let O=g;for(let X=0;X<=s;X++){let L=X/s*l+a,F=Math.cos(L),H=Math.sin(L);C.x=b*H,C.y=m*w,C.z=b*F,u.push(C.x,C.y,C.z),f.push(0,w,0),T.x=F*.5+.5,T.y=H*.5*w+.5,d.push(T.x,T.y),g++}for(let X=0;X<s;X++){let G=P+X,L=O+X;v===!0?h.push(L,L+1,G):h.push(L+1,L,G),U+=3}c.addGroup(p,U,v===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qs=class i extends Te{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ml=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new R,v=new R,P=new R;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],v),d(e[T+2],P),l(x,v,P,y)}function l(y,x,v,P){let T=P+1,C=[];for(let U=0;U<=T;U++){C[U]=[];let b=y.clone().lerp(v,U/T),w=x.clone().lerp(v,U/T),O=T-U;for(let X=0;X<=O;X++)X===0&&U===T?C[U][X]=b:C[U][X]=b.clone().lerp(w,X/O)}for(let U=0;U<T;U++)for(let b=0;b<2*(T-U)-1;b++){let w=Math.floor(b/2);b%2===0?(f(C[U][w+1]),f(C[U+1][w]),f(C[U][w])):(f(C[U][w+1]),f(C[U+1][w+1]),f(C[U+1][w]))}}function c(y){let x=new R;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){let y=new R;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let v=m(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],v=o[y+2],P=o[y+4],T=Math.max(x,v,P),C=Math.min(x,v,P);T>.9&&C<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){let v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){let y=new R,x=new R,v=new R,P=new R,T=new st,C=new st,U=new st;for(let b=0,w=0;b<r.length;b+=9,w+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),T.set(o[w+0],o[w+1]),C.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),P.copy(y).add(x).add(v).divideScalar(3);let O=m(P);_(T,w+0,y,O),_(C,w+2,x,O),_(U,w+4,v,O)}}function _(y,x,v,P){P<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var hi=class extends ms{constructor(t){super(t),this.uuid=vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ms().fromJSON(s))}return this}},A_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=du(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=L_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return tr(r,o,e,a,l,d,0),o}};function du(i,t,e,n,s){let r,o;if(s===G_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=zh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=zh(r,i[r],i[r+1],o);return o&&Co(o,o.next)&&(nr(o),o=o.next),o}function Pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Co(e,e.next)||be(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&F_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?C_(i,n,s,r):R_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=P_(Pi(i),t,e),tr(i,t,e,n,s,r,2)):o===2&&I_(i,t,e,n,s,r):tr(Pi(i),t,e,n,s,r,1);break}}}function R_(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&os(s,a,r,l,o,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function C_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=gl(d,g,t,e,n),y=gl(_,m,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&os(a,h,l,u,c,f,x.x,x.y)&&be(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&os(a,h,l,u,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&os(a,h,l,u,c,f,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&os(a,h,l,u,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function P_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Co(s,r)&&pu(s,n,n.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=i=r),n=n.next}while(n!==i);return Pi(n)}function I_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&z_(o,a)){let l=mu(o,a);o=Pi(o,o.next),l=Pi(l,l.next),tr(o,t,e,n,s,r,0),tr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function L_(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=du(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(k_(c));for(s.sort(D_),r=0;r<s.length;r++)e=U_(s[r],e);return e}function D_(i,t){return i.x-t.x}function U_(i,t){let e=N_(i,t);if(!e)return t;let n=mu(e,i);return Pi(n,n.next),Pi(e,e.next)}function N_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&os(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),er(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&O_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function O_(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function F_(i,t,e,n){let s=i;do s.z===0&&(s.z=gl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,B_(s)}function B_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function gl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function k_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function os(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function z_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!H_(i,t)&&(er(i,t)&&er(t,i)&&V_(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Co(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Co(i,t){return i.x===t.x&&i.y===t.y}function pu(i,t,e,n){let s=Xr(be(i,t,e)),r=Xr(be(i,t,n)),o=Xr(be(e,n,i)),a=Xr(be(e,n,t));return!!(s!==r&&o!==a||s===0&&Wr(i,e,t)||r===0&&Wr(i,n,t)||o===0&&Wr(e,i,n)||a===0&&Wr(e,t,n))}function Wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xr(i){return i>0?1:i<0?-1:0}function H_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function er(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function V_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mu(i,t){let e=new _l(i.i,i.x,i.y),n=new _l(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zh(i,t,e,n){let s=new _l(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _l(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function G_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Hh(t),Vh(n,t);let o=t.length;e.forEach(Hh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Vh(n,e[l]);let a=A_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Hh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ii=class i extends _e{constructor(t=new hi([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Bt(s,3)),this.setAttribute("uv",new Bt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:W_,x,v=!1,P,T,C,U;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,P=p.computeFrenetFrames(h,!1),T=new R,C=new R,U=new R),f||(m=0,d=0,g=0,_=0);let b=a.extractPoints(c),w=b.shape,O=b.holes;if(!Hs.isClockWise(w)){w=w.reverse();for(let I=0,at=O.length;I<at;I++){let $=O[I];Hs.isClockWise($)&&(O[I]=$.reverse())}}let G=Hs.triangulateShape(w,O),L=w;for(let I=0,at=O.length;I<at;I++){let $=O[I];w=w.concat($)}function F(I,at,$){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(at,$)}let H=w.length,J=G.length;function Z(I,at,$){let ot,Y,Tt,mt=I.x-at.x,S=I.y-at.y,M=$.x-I.x,B=$.y-I.y,it=mt*mt+S*S,Q=mt*B-S*M;if(Math.abs(Q)>Number.EPSILON){let K=Math.sqrt(it),vt=Math.sqrt(M*M+B*B),ht=at.x-S/K,xt=at.y+mt/K,Rt=$.x-B/vt,Ht=$.y+M/vt,tt=((Rt-ht)*B-(Ht-xt)*M)/(mt*B-S*M);ot=ht+mt*tt-I.x,Y=xt+S*tt-I.y;let ee=ot*ot+Y*Y;if(ee<=2)return new st(ot,Y);Tt=Math.sqrt(ee/2)}else{let K=!1;mt>Number.EPSILON?M>Number.EPSILON&&(K=!0):mt<-Number.EPSILON?M<-Number.EPSILON&&(K=!0):Math.sign(S)===Math.sign(B)&&(K=!0),K?(ot=-S,Y=mt,Tt=Math.sqrt(it)):(ot=mt,Y=S,Tt=Math.sqrt(it/2))}return new st(ot/Tt,Y/Tt)}let q=[];for(let I=0,at=L.length,$=at-1,ot=I+1;I<at;I++,$++,ot++)$===at&&($=0),ot===at&&(ot=0),q[I]=Z(L[I],L[$],L[ot]);let et=[],nt,dt=q.concat();for(let I=0,at=O.length;I<at;I++){let $=O[I];nt=[];for(let ot=0,Y=$.length,Tt=Y-1,mt=ot+1;ot<Y;ot++,Tt++,mt++)Tt===Y&&(Tt=0),mt===Y&&(mt=0),nt[ot]=Z($[ot],$[Tt],$[mt]);et.push(nt),dt=dt.concat(nt)}for(let I=0;I<m;I++){let at=I/m,$=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+_;for(let Y=0,Tt=L.length;Y<Tt;Y++){let mt=F(L[Y],q[Y],ot);_t(mt.x,mt.y,-$)}for(let Y=0,Tt=O.length;Y<Tt;Y++){let mt=O[Y];nt=et[Y];for(let S=0,M=mt.length;S<M;S++){let B=F(mt[S],nt[S],ot);_t(B.x,B.y,-$)}}}let W=g+_;for(let I=0;I<H;I++){let at=f?F(w[I],dt[I],W):w[I];v?(C.copy(P.normals[0]).multiplyScalar(at.x),T.copy(P.binormals[0]).multiplyScalar(at.y),U.copy(x[0]).add(C).add(T),_t(U.x,U.y,U.z)):_t(at.x,at.y,0)}for(let I=1;I<=h;I++)for(let at=0;at<H;at++){let $=f?F(w[at],dt[at],W):w[at];v?(C.copy(P.normals[I]).multiplyScalar($.x),T.copy(P.binormals[I]).multiplyScalar($.y),U.copy(x[I]).add(C).add(T),_t(U.x,U.y,U.z)):_t($.x,$.y,u/h*I)}for(let I=m-1;I>=0;I--){let at=I/m,$=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+_;for(let Y=0,Tt=L.length;Y<Tt;Y++){let mt=F(L[Y],q[Y],ot);_t(mt.x,mt.y,u+$)}for(let Y=0,Tt=O.length;Y<Tt;Y++){let mt=O[Y];nt=et[Y];for(let S=0,M=mt.length;S<M;S++){let B=F(mt[S],nt[S],ot);v?_t(B.x,B.y+x[h-1].y,x[h-1].x+$):_t(B.x,B.y,u+$)}}}j(),pt();function j(){let I=s.length/3;if(f){let at=0,$=H*at;for(let ot=0;ot<J;ot++){let Y=G[ot];Lt(Y[2]+$,Y[1]+$,Y[0]+$)}at=h+m*2,$=H*at;for(let ot=0;ot<J;ot++){let Y=G[ot];Lt(Y[0]+$,Y[1]+$,Y[2]+$)}}else{for(let at=0;at<J;at++){let $=G[at];Lt($[2],$[1],$[0])}for(let at=0;at<J;at++){let $=G[at];Lt($[0]+H*h,$[1]+H*h,$[2]+H*h)}}n.addGroup(I,s.length/3-I,0)}function pt(){let I=s.length/3,at=0;Mt(L,at),at+=L.length;for(let $=0,ot=O.length;$<ot;$++){let Y=O[$];Mt(Y,at),at+=Y.length}n.addGroup(I,s.length/3-I,1)}function Mt(I,at){let $=I.length;for(;--$>=0;){let ot=$,Y=$-1;Y<0&&(Y=I.length-1);for(let Tt=0,mt=h+m*2;Tt<mt;Tt++){let S=H*Tt,M=H*(Tt+1),B=at+ot+S,it=at+Y+S,Q=at+Y+M,K=at+ot+M;kt(B,it,Q,K)}}}function _t(I,at,$){l.push(I),l.push(at),l.push($)}function Lt(I,at,$){bt(I),bt(at),bt($);let ot=s.length/3,Y=y.generateTopUV(n,s,ot-3,ot-2,ot-1);Ot(Y[0]),Ot(Y[1]),Ot(Y[2])}function kt(I,at,$,ot){bt(I),bt(at),bt(ot),bt(at),bt($),bt(ot);let Y=s.length/3,Tt=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);Ot(Tt[0]),Ot(Tt[1]),Ot(Tt[3]),Ot(Tt[1]),Ot(Tt[2]),Ot(Tt[3])}function bt(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function Ot(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return X_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yo[s.type]().fromJSON(s)),new i(n,t.options)}},W_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,o),new st(a,l),new st(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-u),new st(f,1-g),new st(_,1-p)]:[new st(a,1-l),new st(h,1-u),new st(d,1-g),new st(m,1-p)]}};function X_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Li=class i extends ml{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Mo=class i extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new R,g=new st;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let y=p+m,x=y,v=y+n+1,P=y+n+2,T=y+1;a.push(x,v,T),a.push(v,P,T)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var bo=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,f=new R,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let T=P/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],v=h[p][y],P=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&d.push(x,v,T),(p!==n-1||l<Math.PI)&&d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Dn=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var So=class i extends _e{constructor(t=new _o(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new st,h=new R,u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(d,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),p()}function m(x){h=t.getPointAt(x/e,h);let v=o.normals[x],P=o.binormals[x];for(let T=0;T<=s;T++){let C=T/s*Math.PI*2,U=Math.sin(C),b=-Math.cos(C);l.x=b*v.x+U*P.x,l.y=b*v.y+U*P.y,l.z=b*v.z+U*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){let P=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),C=(s+1)*x+v,U=(s+1)*(x-1)+v;g.push(P,T,U),g.push(T,C,U)}}function y(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)c.x=x/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new yo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var xn=class extends ai{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new It(16777215),this.specular=new It(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ni,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Tn=class extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ni,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function qr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function q_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xl=class extends gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,a=2*e-n;break;case Kc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:o=t,l=2*n-e;break;case Kc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+y*o[c+P]+x*o[l+P]+v*o[u+P];return r}},yl=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},vl=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qr(e,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qr(t.times,Array),values:qr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case Zr:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&q_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Zr;var Di=class extends An{};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=$r;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends An{};Ml.prototype.ValueTypeName="color";var bl=class extends An{};bl.prototype.ValueTypeName="number";var Sl=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)oi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ir=class extends An{InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.DefaultInterpolation=Zr;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends An{};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=$r;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends An{};El.prototype.ValueTypeName="vector";var wl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Y_=new wl,Tl=class{constructor(t){this.manager=t!==void 0?t:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Eo=class extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ha=new ge,Gh=new R,Wh=new R,wo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gh),Wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wh),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Xh=new ge,Os=new R,Va=new R,Al=class extends wo{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(t.matrixWorld),n.position.copy(Os),Va.copy(n.position),Va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Va),n.updateMatrixWorld(),s.makeTranslation(-Os.x,-Os.y,-Os.z),Xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh)}},sr=class extends _s{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Al}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Rl=class extends wo{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rn=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Rl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},xs=class extends _s{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fl="\\[\\]\\.:\\/",$_=new RegExp("["+Fl+"]","g"),Bl="[^"+Fl+"]",Z_="[^"+Fl.replace("\\.","")+"]",J_=/((?:WC+[\/:])*)/.source.replace("WC",Bl),K_=/(WCOD+)?/.source.replace("WCOD",Z_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),tx=new RegExp("^"+J_+K_+j_+Q_+"$"),ex=["material","materials","bones","map"],Cl=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($_,"")}static parseTrackName(t){let e=tx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Cl;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xy=new Float32Array(1);var ys=class{constructor(t,e,n=0,s=1/0){this.ray=new so(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Pl(t,this,n,e),n.sort(qh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pl(t[s],this,n,e);return n.sort(qh),n}};function qh(i,t){return i.distance-t.distance}function Pl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Pl(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);function $e(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function nx(i,t,e){let n=Math.ceil(i/t)+1,s=[];for(let a=0;a<n;a++){s[a]=[];for(let l=0;l<n;l++)s[a][l]=e()}let r=(a,l)=>s[(l%(n-1)+(n-1))%(n-1)][(a%(n-1)+(n-1))%(n-1)],o=a=>a*a*(3-2*a);return(a,l)=>{let c=a/t,h=l/t,u=Math.floor(c),f=Math.floor(h),d=o(c-u),g=o(h-f),_=r(u,f),m=r(u+1,f),p=r(u,f+1),y=r(u+1,f+1);return(_*(1-d)+m*d)*(1-g)+(p*(1-d)+y*d)*g}}function Pe(i,t,e=4,n=16){let s=[];for(let r=0;r<e;r++)s.push(nx(i,Math.max(2,n>>r),t));return(r,o)=>{let a=0,l=.5,c=0;for(let h of s)a+=h(r,o)*l,c+=l,l*=.5;return a/c}}var te=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],Ie=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],kl=i=>Math.max(0,Math.min(255,i|0)),xu=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function hn(i,t,e=i){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=s.createImageData(i,e),o=r.data;for(let a=0;a<e;a++)for(let l=0;l<i;l++){let[c,h,u]=t(l,a),f=(a*i+l)*4;o[f]=kl(c),o[f+1]=kl(h),o[f+2]=kl(u),o[f+3]=255}return s.putImageData(r,0,0),n}function zl(i,t,e,n,s,r){let o=s(i*.35,t*6+r)*.6+s(i*3,t*.2)*.4,a=Math.sin((i*.9+o*18)*.7)*.5+.5;return Ie(e,n,a*.55+o*.45)}function bs(i,t,e,n,s,r,o){let a=Ie(e,n,r(i,t)),l=Math.abs(o(i,t)-.5);return l<.03&&(a=Ie(a,s,.7-l*14)),a}function Po(i){return hn(256,(n,s)=>{let r=Math.floor(n/32),o=Math.floor(s/32),a=(r+o)%2===1,l=n%32,c=s%32,h=i(n,s,r,o,a,l,c);return(l===0||c===31)&&(h=Ie(h,[0,0,0],.45)),(l===31||c===0)&&(h=Ie(h,[255,255,255],a?.08:.16)),h})}var ix={glass(){let i=$e(7),t=Pe(256,i,3,24),e=te("#b488c6"),n=te("#6f4588"),s=te("#3b1247"),r=te("#160618");return Po((o,a,l,c,h,u,f)=>{let d=h?Ie(s,r,t(o,a)):Ie(e,n,t(o,a));return Math.abs((u+f)%32-11)<2&&(d=Ie(d,[255,240,255],h?.12:.22)),d})},wood(){let i=$e(8),t=Pe(256,i,4,24),e=te("#d8c39a"),n=te("#a98c5e"),s=te("#5a3b24"),r=te("#2e1b10");return Po((o,a,l,c,h)=>h?zl(o+l*13,a+c*7,s,r,t,c*31):zl(a+c*5,o+l*11,e,n,t,l*17))},marble(){let i=$e(9),t=Pe(256,i,4,20),e=Pe(256,i,3,40),n=te("#efe6d2"),s=te("#cbbfa6"),r=te("#24423a"),o=te("#0c1a16");return Po((a,l,c,h,u)=>u?bs(a+c*40,l,r,o,te("#7fa898"),t,e):bs(a,l+h*40,n,s,te("#8f8470"),t,e))},tile(){let i=$e(10),t=Pe(256,i,2,16);return Po((e,n,s,r,o)=>{let a=t(e,n)*16+xu[n%4*4+e%4],l=o?[30,30,36]:[214,210,200];return a>20?Ie(l,o?[60,60,70]:[170,166,158],.6):l})}},sx={glass(){return gu(99)},tile(){return gu(98)},wood(){let i=$e(97),t=Pe(64,i,4,16);return hn(64,(e,n)=>zl(e,n,te("#3b2416"),te("#1a0e08"),t,0))},marble(){let i=$e(96),t=Pe(64,i,3,12),e=Pe(64,i,3,20);return hn(64,(n,s)=>bs(n,s,te("#3a3a36"),te("#16140f"),te("#8a7a5a"),t,e))}};function gu(i){let t=$e(i),e=Pe(64,t,3,8),n=te("#b9bec6"),s=te("#4a4e56");return hn(64,(r,o)=>{let a=Ie(n,s,(Math.sin(o*.55)*.5+.5)*.7+e(r,o)*.3);return o%16===3&&(a=Ie(a,[255,255,255],.5)),o%16===11&&(a=Ie(a,[0,0,0],.5)),a})}var rx={stars(){let i=$e(5);return hn(128,()=>{let t=i();return t<.012?[70,66,80]:t<.02?[40,36,48]:[4,2,6]})},velvet(){let i=$e(6),t=Pe(128,i,5,32),e=te("#4a1d22"),n=te("#1e0b0e");return hn(128,(s,r)=>{let o=Ie(e,n,t(s,r));return i()<.05&&(o=Ie(o,e,.4)),o})},void(){let i=$e(4),t=Pe(128,i,4,32);return hn(128,(e,n)=>Ie([26,12,44],[6,3,14],t(e,n)+xu[n%4*4+e%4]/64))}},yu={stars:{bg:197124,fog:[12,26],ambient:[5261418,1],key:[16777215,1.6],fill:[16734928,18],fill2:[5234943,10]},velvet:{bg:722183,fog:[11,24],ambient:[6969938,1.2],key:[16769984,1.9],fill:[16730682,14],fill2:[16756848,4]},void:{bg:853528,fog:[10,22],ambient:[4209264,1.1],key:[14213375,1.5],fill:[9063167,16],fill2:[4243711,10]}},ox={ivoryWhite(){let i=$e(11),t=Pe(64,i,4,12),e=Pe(64,i,3,20);return hn(64,(n,s)=>bs(n,s,te("#efe4cc"),te("#c9b893"),te("#8f8470"),t,e))},ivoryBlack(){let i=$e(23),t=Pe(64,i,4,10),e=te("#3a2f28"),n=te("#17110e");return hn(64,(s,r)=>Ie(Ie(e,n,t(s,r)),n,(Math.sin(r*.8+t(s*2,r)*6)*.5+.5)*.3))},marbleWhite(){let i=$e(31),t=Pe(64,i,4,10),e=Pe(64,i,3,16);return hn(64,(n,s)=>bs(n,s,te("#f4f2ee"),te("#d4d0c8"),te("#7a7a80"),t,e))},marbleBlack(){let i=$e(37),t=Pe(64,i,4,10),e=Pe(64,i,3,16);return hn(64,(n,s)=>bs(n,s,te("#1e3a32"),te("#08120e"),te("#9ac0b0"),t,e))},brushed(){let i=$e(41),t=Pe(64,i,3,6);return hn(64,(e,n)=>{let s=200+t(e*.2,n*4)*55;return[s,s,s]})}};function ax(){let t=$e(3),e=Pe(64,t,2,16),n=["px","nx","py","ny","pz","nz"],s={px:(a,l)=>[1,-l,-a],nx:(a,l)=>[-1,-l,a],py:(a,l)=>[a,1,l],ny:(a,l)=>[a,-1,-l],pz:(a,l)=>[a,-l,1],nz:(a,l)=>[-a,-l,-1]},r=n.map(a=>hn(64,(l,c)=>{let h=l/63*2-1,u=c/63*2-1,[f,d,g]=s[a](h,u),_=Math.hypot(f,d,g),m=d/_,p=Math.atan2(g,f),y=e(l,c)*.15;if(m>.55){let P=Math.floor(p/Math.PI*4+100)%2;return Ie(P?[218,218,230]:[138,138,160],[86,82,106],(1-m)*.8+y)}if(m>.12)return Ie([215,218,228],[70,66,90],(m-.12)/.43+y);if(m>-.06)return[255,252,255];let x=Math.floor(p/Math.PI*6+100)%2,v=Math.min(1,(-m-.06)/.9);return Ie(x?[120,70,110]:[60,110,120],[8,4,10],v*.9+y)})),o=new ps(r);return o.magFilter=ve,o.minFilter=ve,o.generateMipmaps=!1,o.colorSpace=Me,o.needsUpdate=!0,o}function _u(i){return i.magFilter=ve,i.minFilter=ve,i.generateMipmaps=!1,i.colorSpace=Me,i.wrapS=i.wrapT=Vs,i.needsUpdate=!0,i}var Io=class{constructor(){this.cache=new Map,this.overrides={},this.env=null}async loadOverrides(t=[]){await Promise.all(t.map(e=>new Promise(n=>{let s=new Image;s.onload=()=>{this.overrides[e]=_u(new ci(s)),n()},s.onerror=()=>n(),s.src=`assets/textures/${e}.png`})))}get(t,e,n){return n&&this.overrides[n]?this.overrides[n]:(this.cache.has(t)||this.cache.set(t,_u(new ci(e()))),this.cache.get(t))}board(t){return this.get("board:"+t,ix[t],"board")}rim(t){return this.get("rim:"+t,sx[t],"rim")}table(t){return this.get("table:"+t,rx[t],"table")}piece(t,e){return this.get("piece:"+t,ox[t],e)}envMap(){return this.env||(this.env=ax()),this.env}};var lx=4,Hl=.8,cx=.75;function hx(i){return new ge().set(0,0,-Hl,0,cx,0,0,0,0,-Hl,0,Hl*i,0,0,0,1)}var Lo=[[0,0],[.33,0],[.33,.07],[.25,.12]],ux={p:[...Lo,[.17,.3],[.12,.38],[.19,.42],[.15,.5],[.08,.6],[0,.63]],r:[...Lo,[.21,.42],[.27,.5],[.27,.68],[0,.68]],n:[...Lo,[.2,.3],[0,.3]],b:[...Lo,[.2,.42],[.13,.5],[.23,.58],[.21,.7],[.12,.84],[.06,.88],[0,.9]],q:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.62],[.28,.72],[.29,.8],[.2,.88],[.14,.98],[0,1]],k:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.64],[.29,.74],[.29,.84],[.2,.92],[.09,.98],[0,.98]]},fx={p:.63,r:.8,n:.9,b:1,q:1.14,k:1.25};function dx(i,t=lx){let e=Math.max(...i.map(l=>l[1]))||1,n=i.map(([l,c],h)=>{let u=[];if(h%2===1&&l>0){u.push(0);for(let f=0;f<t;f++)u.push((f+.5)*Math.PI/t);u.push(Math.PI)}else for(let f=0;f<=t;f++)u.push(f*Math.PI/t);return u.map(f=>({p:[l*Math.sin(f),c,l*Math.cos(f)],uv:[f/Math.PI,c/e],a:f}))}),s=[],r=[],o=(l,c,h)=>{let u=c.p[0]-l.p[0],f=c.p[1]-l.p[1],d=c.p[2]-l.p[2],g=h.p[0]-l.p[0],_=h.p[1]-l.p[1],m=h.p[2]-l.p[2];if(!(Math.hypot(f*m-d*_,d*g-u*m,u*_-f*g)<1e-9))for(let p of[l,c,h])s.push(...p.p),r.push(...p.uv)};for(let l=0;l<n.length-1;l++){let c=n[l],h=n[l+1],u=0,f=0;for(;u<c.length-1||f<h.length-1;){let d=u<c.length-1?c[u+1].a:1/0,g=f<h.length-1?h[f+1].a:1/0;d<=g?(o(c[u],c[u+1],h[f]),u++):(o(c[u],h[f+1],h[f]),f++)}}let a=new _e;return a.setAttribute("position",new Bt(s,3)),a.setAttribute("uv",new Bt(r,2)),a}var Do=(i,t,e,n,s,r)=>new de(i,t,e).translate(n,s,r),vu=(i,t)=>new Li(i,0).translate(0,t,0),px=[[-.16,.28],[.16,.28],[.17,.5],[.3,.6],[.31,.72],[.14,.78],[.1,.9],[0,.82],[-.1,.9],[-.13,.76],[-.2,.6],[-.18,.4]],mx=[[-.18,.42],[-.2,.6],[-.13,.76],[-.1,.88],[-.04,.8],[-.07,.72],[-.12,.58],[-.1,.44]];function Mu(i,t){let e=new hi,n=i.map(([o,a])=>[-o,a]);e.moveTo(n[0][0],n[0][1]);for(let o=1;o<n.length;o++)e.lineTo(n[o][0],n[o][1]);e.closePath();let s=new Ii(e,t),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),l=r.getY(o),c=r.getZ(o);r.setXYZ(o,Math.max(0,c),l,-a)}return s}var Vl=.24;function gx(){let i=Mu(px,{depth:Vl-.14,bevelEnabled:!0,bevelThickness:.14,bevelSize:.1,bevelOffset:-.1,bevelSegments:3,curveSegments:1}),t=Mu(mx,{depth:Vl+.02,bevelEnabled:!0,bevelThickness:.05,bevelSize:.025,bevelOffset:-.025,bevelSegments:1,curveSegments:1}),e=new Li(.045,0).scale(.8,1,1).translate(Vl+.01,.72,.09);return[i,t,e]}function _x(i){let t=[dx(ux[i])];if(i==="r")for(let e of[-.18,0,.18])t.push(Do(.24,.12,.12,.12,.74,e));else if(i==="n")t.push(...gx());else if(i==="b")t.push(vu(.06,.94));else if(i==="q"){t.push(vu(.08,1.06));for(let e of[-.24,-.12,0,.12,.24])t.push(Do(.16,.1,.06,.08,.86+(.24-Math.abs(e))*.25,e))}else i==="k"&&(t.push(Do(.16,.28,.08,.08,1.1,0)),t.push(Do(.16,.08,.26,.08,1.13,0)));return t}var Gl=new Map;function xx(i){if(!Gl.has(i)){let t=hx(fx[i]/2);Gl.set(i,_x(i).map(e=>(e.index&&(e=e.toNonIndexed()),e.applyMatrix4(t),e.computeVertexNormals(),e)))}return Gl.get(i)}var yx=new rn({color:0,transparent:!0,opacity:.5,depthWrite:!1});function bu(i,t){let e=t.envMap(),n=l=>new xn({flatShading:!0,...l}),s=l=>new Tn({flatShading:!0,...l}),r=l=>t.overrides[l]||null;if(i==="chrome")return{white:n({color:15131890,map:r("white"),envMap:e,combine:rr,reflectivity:r("white")?.3:.5,specular:10132136,shininess:90}),black:n({color:2788e3,map:r("black"),envMap:e,combine:Ni,reflectivity:.85,specular:1984080,shininess:60})};if(i==="matte")return{white:s({color:15327952}),black:s({color:2056046})};if(i==="ivory")return{white:s({map:t.piece("ivoryWhite","white")}),black:s({map:t.piece("ivoryBlack","black")})};if(i==="marble")return{white:n({map:t.piece("marbleWhite","white"),specular:4473924,shininess:40}),black:n({map:t.piece("marbleBlack","black"),specular:2240552,shininess:40})};let o=t.piece("brushed",null),a=(l,c)=>n({color:l,map:o,envMap:e,combine:Ni,reflectivity:.6,specular:c,shininess:70});return{white:a(16764778,9075280),black:a(9082532,3818576)}}function Su(i,t,e){let n=t==="w"?e.white:e.black,s=xx(i),r=new fe,o=new fe;for(let l of s)o.add(new se(l,n));let a=new fe;for(let l of s){let c=new se(l,yx);c.renderOrder=4,a.add(c)}return a.scale.y=.02,a.position.set(.06,.004,.07),r.add(a,o),r.userData={type:i,color:t,body:o,shadow:a},r}function Eu(){let i=new se(new Dn(.46,.035,4,12),new rn({color:8382975}));return i.rotation.x=Math.PI/2,i.position.y=.03,i}var Ss=[{id:"pieces",label:"\uB9D0 \uC7AC\uC9C8",hint:"\uCCB4\uC2A4\uB9D0 \uD45C\uBA74. \uBC18\uC0AC\uC640 \uC9C8\uAC10\uC774 \uD654\uBA74 \uC778\uC0C1\uC744 \uAC00\uC7A5 \uD06C\uAC8C \uBC14\uAFC9\uB2C8\uB2E4.",options:[{id:"chrome",label:"\uD06C\uB86C & \uC2DC\uC548",note:"Virtual Chess\uC2DD \uC0AC\uC804\uB80C\uB354 CG \uBC18\uC0AC"},{id:"matte",label:"\uBB34\uAD11 \uD50C\uB7AB",note:"\uBC18\uC0AC \uC5C6\uC774 \uBA74\uB9CC, \uB85C\uC6B0\uD3F4\uB9AC\uAC00 \uAC00\uC7A5 \uB610\uB837"},{id:"ivory",label:"\uC0C1\uC544 & \uD751\uB2E8",note:"\uB098\uBB47\uACB0\uACFC \uC0C1\uC544\uACB0, \uBC18\uC0AC \uC5C6\uC74C"},{id:"marble",label:"\uB300\uB9AC\uC11D",note:"\uD770 \uB300\uB9AC\uC11D\uACFC \uB179\uD751 \uB300\uB9AC\uC11D, \uC57D\uD55C \uAD11\uD0DD"},{id:"gold",label:"\uAE08 & \uC740",note:"\uD669\uB3D9\uBE5B \uAE08\uACFC \uCC28\uAC00\uC6B4 \uC740"}]},{id:"board",label:"\uBCF4\uB4DC",hint:"\uD310\uC758 \uC7AC\uC9C8. \uC790\uD64D \uC720\uB9AC\uB9CC \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE69\uB2C8\uB2E4.",options:[{id:"glass",label:"\uC790\uD64D \uC720\uB9AC",note:"\uBC18\uD22C\uBA85, \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE68"},{id:"wood",label:"\uD638\uB450\uB098\uBB34",note:"\uC804\uD1B5 \uB098\uBB47\uACB0 \uD310"},{id:"marble",label:"\uB300\uB9AC\uC11D \uD310",note:"\uD06C\uB9BC\uACFC \uC9D9\uC740 \uB179\uC0C9"},{id:"tile",label:"\uD751\uBC31 \uD0C0\uC77C",note:"\uB514\uB354\uB9C1\uB41C PS1 \uD0C0\uC77C"}]},{id:"backdrop",label:"\uBC30\uACBD\uACFC \uC870\uBA85",hint:"\uD310 \uBC14\uAE65\uC758 \uBC14\uB2E5, \uD558\uB298\uC0C9, \uC870\uBA85 \uC0C9\uC744 \uD568\uAED8 \uC815\uD569\uB2C8\uB2E4.",options:[{id:"stars",label:"\uC810\uBC15\uC774 \uD751",note:"Chessmaster \uD0C0\uC774\uD2C0 \uBC30\uACBD"},{id:"velvet",label:"\uBD89\uC740 \uBCA8\uBCB3",note:"\uB530\uB73B\uD55C \uC870\uBA85\uC758 \uCE74\uB4DC \uD14C\uC774\uBE14"},{id:"void",label:"\uBCF4\uB78F\uBE5B \uC2EC\uC5F0",note:"\uCC28\uAC00\uC6B4 \uC870\uBA85\uACFC \uADF8\uB77C\uB370\uC774\uC158"}]},{id:"frame",label:"UI \uD504\uB808\uC784",hint:"\uD654\uBA74 \uD14C\uB450\uB9AC, \uD328\uB110, \uBC84\uD2BC\uC758 \uC7A5\uC2DD.",options:[{id:"deco",label:"\uBC31\uB78D \uC544\uB974\uB370\uCF54",note:"\uAE08\uC18D \uD14C\uB450\uB9AC\uC640 \uD669\uB3D9 \uC7A5\uC2DD"},{id:"plain",label:"\uBBF8\uB2C8\uBA40 \uC120",note:"\uC587\uC740 \uC120, \uC7A5\uC2DD \uC5C6\uC74C"},{id:"neon",label:"\uB124\uC628",note:"\uC2DC\uC548\uACFC \uC790\uD64D \uBC1C\uAD11\uC120"}]},{id:"lettering",label:"\uD0C0\uC774\uD2C0 \uB808\uD130\uB9C1",hint:"\uD0C0\uC774\uD2C0, \uBC29 \uCF54\uB4DC, \uC2B9\uB9AC \uBB38\uAD6C\uC758 \uAE00\uC790 \uCC98\uB9AC.",options:[{id:"brass",label:"\uD669\uB3D9",note:"Chessmaster\uC2DD \uCCAD\uB3D9 \uADF8\uB77C\uB370\uC774\uC158"},{id:"chrome",label:"\uD06C\uB86C",note:"\uC740\uBE5B \uAE08\uC18D \uBC18\uC0AC"},{id:"neon",label:"\uB124\uC628",note:"\uC790\uD64D \uAE00\uC790\uC640 \uC2DC\uC548 \uC678\uACFD"}]},{id:"pixel",label:"3D \uD574\uC0C1\uB3C4",hint:"3D \uC7A5\uBA74\uC744 \uADF8\uB9AC\uB294 \uD574\uC0C1\uB3C4. \uC6D0\uBCF8\uC740 \uAE30\uAE30 \uD574\uC0C1\uB3C4\uB85C \uBA74\uC744 \uB610\uB837\uD558\uAC8C, \uB098\uBA38\uC9C0\uB294 \uB3C4\uD2B8\uB85C \uD655\uB300\uD569\uB2C8\uB2E4. UI\uB294 \uD56D\uC0C1 270\xD7480 \uB3C4\uD2B8\uC785\uB2C8\uB2E4.",options:[{id:"native",label:"\uC6D0\uBCF8",note:"\uAE30\uAE30 \uD574\uC0C1\uB3C4. \uD53D\uC140 \uC5C6\uC774 \uBA74\uC774 \uB610\uB837"},{id:"coarse",label:"\uAD75\uAC8C",note:"135\xD7240"},{id:"base",label:"\uB3C4\uD2B8",note:"270\xD7480"},{id:"fine",label:"\uACF1\uAC8C",note:"405\xD7720"}]},{id:"camera",label:"\uB300\uAD6D \uC2DC\uC810",hint:"\uD310\uC744 \uB0B4\uB824\uB2E4\uBCF4\uB294 \uBC29\uC2DD. \uB9D0\uC740 \uBC18\uC73C\uB85C \uC798\uB77C \uB215\uD78C \uC591\uAC01\uC774\uB77C \uC704\uC5D0\uC11C \uC2E4\uB8E8\uC5E3\uC774 \uBCF4\uC785\uB2C8\uB2E4.",options:[{id:"persp",label:"\uC6D0\uADFC \uD0D1\uB2E4\uC6B4",note:"\uAE30\uBCF8. \uC218\uC9C1, \uAC00\uC7A5\uC790\uB9AC \uB9D0\uC758 \uC606\uBA74\uC774 \uBCF4\uC784"},{id:"flat",label:"\uC815\uD0D1\uB2E4\uC6B4",note:"\uC218\uC9C1, \uAC70\uC758 \uD3C9\uD589 \uD22C\uC601. \uCE78\uB2F9 32px"},{id:"tilt",label:"\uC0B4\uC9DD \uAE30\uC6B8\uC784",note:"18\xB0 \uAE30\uC6B8\uC5EC \uC591\uAC01 \uB450\uAED8\uAC00 \uBCF4\uC784"}]},{id:"zoom",label:"\uACF5\uACA9 \uC90C",hint:"\uB0B4 \uB9D0\uC774 \uC0C1\uB300 \uB9D0\uC744 \uC7A1\uC744 \uB54C \uB0B4 \uD654\uBA74\uC5D0\uC11C\uB9CC \uC77C\uC5B4\uB098\uB294 \uC90C \uC778/\uC544\uC6C3.",options:[{id:"soft",label:"\uC57D\uD558\uAC8C",note:"\uC0B4\uC9DD \uB2E4\uAC00\uAC14\uB2E4 \uB3CC\uC544\uC634"},{id:"normal",label:"\uBCF4\uD1B5",note:"\uB2E4\uAC00\uAC10 + \uC791\uC740 \uD754\uB4E4\uB9BC"},{id:"punch",label:"\uAC15\uD558\uAC8C",note:"\uAE4A\uC740 \uC90C + \uD754\uB4E4\uB9BC + \uC12C\uAD11"}]}],ar={pieces:"chrome",board:"glass",backdrop:"stars",frame:"deco",lettering:"brass",pixel:"native",camera:"persp",zoom:"normal"},Tu={native:null,coarse:.5,base:1,fine:1.5},Wl={soft:{s:.58,shake:0,flash:0,dur:.85},normal:{s:.72,shake:.06,flash:0,dur:.95},punch:{s:.82,shake:.14,flash:.75,dur:1.05}},lr={deco:{accent:"#c9a24a",accentHi:"#f3dc8a",accentLo:"#6e4a14",line:"#8d9299",lineHi:"#d8dde3",lineLo:"#3a3d44",panel:"rgba(8,6,12,0.86)",btn:"#1c1a24",btnPrimary:"#3a2a10",ink:"#ece6d6",dim:"#8a8578"},plain:{accent:"#d8d2c4",accentHi:"#ffffff",accentLo:"#5a5650",line:"#6a6660",lineHi:"#a8a49c",lineLo:"#2a2826",panel:"rgba(10,10,12,0.84)",btn:"#18181c",btnPrimary:"#2c2a26",ink:"#eeeae2",dim:"#8a867e"},neon:{accent:"#4fe0ff",accentHi:"#c8f8ff",accentLo:"#0a5a6e",line:"#e05ac8",lineHi:"#ffb8f0",lineLo:"#4a1440",panel:"rgba(6,2,14,0.86)",btn:"#140a24",btnPrimary:"#0a2a36",ink:"#eef6ff",dim:"#8a86a8"}},Au="faith-chess-theme",wu=Ss.map(i=>i.id);function Ru(i){let t={...ar};for(let e of Ss)i&&e.options.some(n=>n.id===i[e.id])&&(t[e.id]=i[e.id]);return t}function vx(i){let t=/^#?t-([a-z0-9-]+)$/.exec(i||"");if(!t)return null;let e=t[1].split("-");if(e.length!==wu.length)return null;let n={};return wu.forEach((s,r)=>{n[s]=e[r]}),Ru(n)}var Cu=2;function Pu(){let i=typeof location<"u"?vx(location.hash):null;if(i)return Uo(i),i;try{let t=JSON.parse(localStorage.getItem(Au)||"null"),e=Ru(t);return t&&(t.v||1)<Cu&&(e.camera=ar.camera,Uo(e)),e}catch{return{...ar}}}function Uo(i){try{localStorage.setItem(Au,JSON.stringify({...i,v:Cu}))}catch{}}function Iu(i,t,e){let n=Ss.find(o=>o.id===t),s=n.options.findIndex(o=>o.id===i[t]),r=n.options.length;return{...i,[t]:n.options[(s+e+r)%r].id}}function Lu(i,t){return Ss.find(n=>n.id===i)?.options.find(n=>n.id===t)?.label??t}var yn=(i,t={})=>new Tn({color:i,flatShading:!0,...t}),hr=(i,t={})=>new xn({color:i,flatShading:!0,shininess:70,specular:9076848,...t}),ze=(i,t=1)=>new Li(i,t),Du=(i,t=10)=>new vo(i.map(([e,n])=>new st(e,n)),t);function jt(i,t,e,n=0,s=0,r=0,o=1,a=1,l=1){let c=new se(t,e);return c.position.set(n,s,r),c.scale.set(o,a,l),i.add(c),c}var cr=(i,t,e,n)=>{let s=new fe;return s.position.set(t,e,n),i.add(s),s},Nu=14264378,Mx=15907988,bx=14193770,Sx=15764106,Ex=16315626,wx=1706512,Tx=16447214,No={w:{crown:15526644,gem:5230847,robe:12595262,robe2:8002086,beard:15658228,velvet:8006282,velvet2:5118556,bg:3939410,shoe:8002086},b:{crown:2788e3,gem:15981706,robe:2252908,robe2:1194050,beard:8016966,velvet:10099758,velvet2:6164252,bg:1848384,shoe:1194050}};function Ax(i){let t=new fe,e=yn(i.velvet),n=yn(i.velvet2),s=hr(Nu);for(let[r,o]of[[-.56,.36],[.56,.36],[-.56,-.4],[.56,-.4]])jt(t,new Te(.06,.08,.32,6),s,r,.16,o);jt(t,new de(1.36,.26,1),n,0,.44,0),jt(t,ze(.62),e,0,.62,.04,1.06,.32,.84),jt(t,new de(1.36,1.3,.22),n,0,1.16,-.46),jt(t,ze(.68),n,0,1.8,-.46,1,.55,.32),jt(t,ze(.56),e,0,1.18,-.3,1.06,1.05,.34);for(let[r,o]of[[-.25,1.4],[.25,1.4],[0,1.15],[-.25,.92],[.25,.92]])jt(t,ze(.035,0),s,r,o,-.12);jt(t,ze(.11,0),s,0,2.18,-.46);for(let r of[-1,1])jt(t,new de(.2,.36,.82),n,r*.68,.64,0),jt(t,new Te(.18,.18,.96,8).rotateX(Math.PI/2),e,r*.68,.88,.02),jt(t,ze(.09,0),s,r*.68,.88,.52);return t}function Rx(i){let t=new fe,e=yn(i.robe),n=yn(i.robe2),s=yn(Mx),r=yn(bx),o=yn(i.beard),a=hr(Nu),l=hr(i.crown,{side:Qe}),c=yn(wx),h=yn(Ex),u=yn(Tx),f=new fe;f.position.set(0,.72,.06),t.add(f),jt(f,Du([[0,0],[.36,.02],[.52,.14],[.58,.34],[.55,.56],[.46,.74],[.36,.86],[.32,.92]]),e),jt(f,Du([[.32,.92],[.36,1],[.385,1.12],[.36,1.26],[.28,1.37],[.15,1.44],[0,1.46]]),s),jt(f,ze(.37),o,0,1.17,-.09,1.02,.92,.82),jt(f,new Dn(.5,.04,4,16).rotateX(Math.PI/2),a,0,.6,0),jt(f,new Dn(.32,.075,6,12).rotateX(Math.PI/2),h,0,.9,0),jt(f,ze(.12,0),a,0,.34,.55,1,1,.35);for(let[y,x]of[[-.2,.42],[.2,.42],[-.12,.18],[.12,.18]])jt(f,ze(.055,0),h,y,x,.53,1,1,.4);jt(f,ze(.075,0),r,0,1.1,.38);for(let y of[-1,1])jt(f,ze(.065,0),yn(Sx),y*.21,1.06,.3,1,.6,.5);let d=[-1,1].map(y=>jt(f,ze(.05,0),c,y*.13,1.18,.33)),g=[-1,1].map(y=>{let x=jt(f,new de(.13,.03,.03),o,y*.14,1.27,.32);return x.userData.s=y,x});for(let y of[-1,1])jt(f,ze(.075,0),o,y*.09,1.02,.36,1.6,.6,.6);jt(f,new Qs(.17,.46,7).rotateX(Math.PI),o,0,.82,.31).rotation.x=.32;let _=cr(f,0,1.42,0);jt(_,new Te(.31,.34,.24,12,1,!0),l,0,.06,0);for(let y=0;y<7;y++){let x=y/7*Math.PI*2;jt(_,new Qs(.065,.26,4),l,Math.sin(x)*.31,.3,Math.cos(x)*.31)}jt(_,ze(.07,0),hr(i.gem),0,.06,.34);for(let y of[-1,1])jt(_,ze(.04,0),hr(i.gem),y*.2,.06,.27);jt(_,ze(.07,0),a,0,.26,0);let m=[-1,1].map(y=>{let x=cr(f,y*.5,.66,0);jt(x,new Te(.034,.034,.44,5).translate(0,-.22,0),n);let v=cr(x,0,-.44,0);return jt(v,new Te(.03,.03,.42,5).translate(0,-.21,0),n),jt(v,ze(.08,0),u,0,-.44,0),{s:y,shoulder:x,elbow:v}}),p=[-1,1].map(y=>{let x=cr(f,y*.17,.1,.3);jt(x,new Te(.04,.04,.46,5).translate(0,-.23,0),n);let v=cr(x,0,-.46,0);return jt(v,new Te(.036,.036,.46,5).translate(0,-.23,0),n),jt(v,ze(.09,0),yn(i.shoe),0,-.48,.07,1,.65,1.9),{s:y,hip:x,knee:v}});return{root:t,doll:f,crown:_,eyes:d,brows:g,arms:m,legs:p}}var Ze=(i,t,e)=>i+(t-i)*e,Uu=i=>i*i*(3-2*i),Oo=class{constructor(){this.scene=new li,this.scene.add(new xs(16777215,.62));let t=new Rn(16773340,1.5);t.position.set(-2,4,5),this.scene.add(t);let e=new Rn(16740568,.7);e.position.set(3,2,-3),this.scene.add(e);let n=new Rn(7332095,.5);n.position.set(-3,1.5,-2),this.scene.add(n),this.camera=new Ce(30,64/42,.1,40),this.camera.position.set(0,1.6,5.1),this.camera.lookAt(0,1.36,0),this.rigs={};for(let s of["w","b"]){let r=new fe;r.add(Ax(No[s]));let o=Rx(No[s]);r.add(o.root),this.scene.add(r),this.rigs[s]={group:r,...o,color:s,phase:s==="w"?0:1.7,wake:0,shout:0}}this.shown=null,this.swap=null,this.t=0,this.clear=new It,this.bgA=new It,this.bgB=new It}update(t,e,n="turn"){this.t+=t,e&&e!==this.shown&&!(this.swap&&this.swap.to===e)&&(this.shown&&(this.swap={from:this.shown,to:e,t:0}),this.shown=e),this.swap&&(this.swap.t+=t/.6,this.swap.t>=1&&(this.swap=null));let s=this.t;for(let r of Object.values(this.rigs)){let o=r.color===this.shown;r.wake+=((o?1:0)-r.wake)*(1-Math.exp(-t*3)),r.shout+=((o&&n==="shout"?1:0)-r.shout)*(1-Math.exp(-t*9));let a=0;if(this.swap){let l=Uu(Math.min(1,this.swap.t)),c=h=>h==="w"?-1:1;r.color===this.swap.to?a=c(r.color)*(1-l)*4.4:r.color===this.swap.from&&(a=-c(this.swap.to)*l*4.4)}r.group.position.x=a,r.group.visible=o||!!(this.swap&&r.color===this.swap.from),this.pose(r,s+r.phase)}}pose(t,e){let n=t.wake,s=t.shout,r=Math.sin(e*1.6),o=Math.sin(e*3.2);t.doll.rotation.z=Ze(.04*Math.sin(e*.6),.09*r,n)*(1-s)+.04*Math.sin(e*14)*s,t.doll.rotation.x=Ze(-.08,.05*Math.sin(e*1.1),n)*(1-s)+.22*s,t.doll.rotation.y=Ze(0,.28*Math.sin(e*.7),n)*(1-s),t.doll.position.y=.72+.025*Math.abs(o)*n+.04*s*Math.abs(Math.sin(e*10)),t.crown.rotation.z=-.5*t.doll.rotation.z;let a=e%3.1/3.1,l=n>.5&&a>.95?Math.sin((a-.95)/.05*Math.PI):0,c=Ze(.2,1,n)*(1-l*.9)*(1+.25*s);for(let h of t.eyes)h.scale.y=Math.max(.08,c);for(let h of t.brows)h.rotation.z=Ze(0,-.32*h.userData.s,n)+.25*h.userData.s*s;for(let{s:h,shoulder:u,elbow:f}of t.arms){let d,g,_;h<0?(d=Ze(-.2,-2+.14*o,n),g=Ze(-.25,.75,n),_=Ze(-.3,-1.35+.18*o,n),d=Ze(d,-1.55,s),g=Ze(g,.15,s),_=Ze(_,-.1,s)):(d=Ze(-.2,-.75,n),g=Ze(.25,.85,n),_=Ze(-.3,-.55+.28*Math.sin(e*8)*n,n),d=Ze(d,-.4,s),g=Ze(g,.9,s)),u.rotation.set(d,0,g),f.rotation.set(_,0,0)}for(let{s:h,hip:u,knee:f}of t.legs)u.rotation.set(-1.35+.06*Math.sin(e*3+h)*n,0,h*.08),f.rotation.set(1.3+.38*Math.sin(e*3.2+(h>0?Math.PI:0))*n+.25*s*Math.sin(e*12),0,0)}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,l=Math.round(e.y*r),c=Math.round((e.y+e.h)*r)-l,h=n.h-l-c,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,c),t.setScissor(o,h,a,c);let d=this.shown||"w";this.bgB.set(No[d].bg),this.swap?(this.bgA.set(No[this.swap.from].bg).lerp(this.bgB,Uu(Math.min(1,this.swap.t))),t.setClearColor(this.bgA,1)):t.setClearColor(this.bgB,1),t.clear(!0,!0,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var St=270,un=480;function Un(i){return{x:(i&7)-3.5,z:3.5-(i>>3)}}var Ou=i=>7.5/Math.tan(i*Math.PI/360),Fu={flat:{fov:14,pos:[0,Ou(14),.0625],target:[0,0,.0625],up:[0,0,-1]},persp:{fov:46,pos:[0,Ou(46),.0625],target:[0,0,.0625],up:[0,0,-1]},tilt:{fov:30,pos:[0,26.3,8.55],target:[0,0,.35],up:[0,1,0]}},Bu=i=>i*i*(3-2*i);function Cx(i=.07,t=.05){let e=[],n=[],s=(o,a,l,c)=>{for(let h of[o,a,l,o,l,c])e.push(...h),n.push((h[0]+4)/8,(4-h[2])/8)};for(let o=0;o<8;o++)for(let a=0;a<8;a++){let l=a-4,c=a-3,h=3-o,u=4-o,f=l+i,d=c-i,g=h+i,_=u-i,m=-t;s([f,0,g],[f,0,_],[d,0,_],[d,0,g]),s([l,m,h],[f,0,g],[d,0,g],[c,m,h]),s([c,m,h],[d,0,g],[d,0,_],[c,m,u]),s([c,m,u],[d,0,_],[f,0,_],[l,m,u]),s([l,m,u],[f,0,_],[f,0,g],[l,m,h])}let r=new _e;return r.setAttribute("position",new Bt(e,3)),r.setAttribute("uv",new Bt(n,2)),r.computeVertexNormals(),r}var Fo=class{constructor(t){this.canvas=t,this.renderer=new $s({canvas:t,antialias:!1,powerPreference:"low-power",alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(St,un,!1),this.renderer.toneMapping=Ln,this.scene=new li,this.camera=new Ce(44,St/un,.5,200),this.bank=new Io,this.pieces=new Map,this.highlights=[],this.anims=[],this.pendingRemoval=[],this.bursts=[],this.shards=[],this.revives=[],this.pendingRevive=new Map,this.clocks=[],this.kingStage=new Oo,this.kingView=null,this.phoneStage=null,this.phoneView=null,this.rewinding=null,this.mode="title",this.side=1,this.selectedId=null,this.time=0,this.raycaster=new ys,this.ready=!1,this.lerpCam=null,this.zoomFx=null,this.flash=0,this.lastMoveKey=null,this.theme={...ar},this.camOverride=null}async init(t=[]){await this.bank.loadOverrides(t),this.ambient=new xs(16777215,1),this.key=new Rn(16777215,1.6),this.placeKeyLight(),this.fill=new sr(16777215,10,22,2),this.fill.position.set(-7,3,-5),this.fill2=new sr(16777215,10,22,2),this.fill2.position.set(7,2.5,6),this.scene.add(this.ambient,this.key,this.fill,this.fill2),this.table=new se(new Ci(40,40),new rn),this.table.rotation.x=-Math.PI/2,this.table.position.y=-.62,this.rim=new se(new de(8.4,.22,8.4),new xn({flatShading:!0,specular:4473924,shininess:30})),this.rim.position.y=-.17,this.board=new se(Cx(),new xn({depthWrite:!1,flatShading:!0})),this.board.renderOrder=2,this.under=new se(new Ci(8,8),new rn({color:393994})),this.under.rotation.x=-Math.PI/2,this.under.position.y=-.4,this.scene.add(this.table,this.rim,this.board,this.under),this.hlPool=[];let e=new Ci(.94,.94);for(let n=0;n<28;n++){let s=new se(e,new rn({color:16777215,transparent:!0,opacity:.45,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.012,s.visible=!1,s.renderOrder=3,this.scene.add(s),this.hlPool.push(s)}this.burstGeo=new Mo(.3,.46,8),this.ready=!0,this.applyTheme(this.theme,!0)}applyTheme(t,e=!1){let n=this.theme;if(this.theme={...t},!this.ready)return;let s=this.theme,r=this.bank;this.applyRenderSize();let o=yu[s.backdrop];this.scene.background=new It(o.bg),this.scene.fog=new fo(o.bg,o.fog[0],o.fog[1]),this.fogSpan=o.fog[1]-o.fog[0],this.ambient.color.set(o.ambient[0]),this.ambient.intensity=o.ambient[1]*.55,this.key.color.set(o.key[0]),this.key.intensity=o.key[1]*1.35,this.fill.color.set(o.fill[0]),this.fill.intensity=o.fill[1],this.fill2.color.set(o.fill2[0]),this.fill2.intensity=o.fill2[1];let a=r.table(s.backdrop);a.repeat.set(10,10),this.table.material.map=a,this.table.material.needsUpdate=!0;let l=r.envMap(),c=r.rim(s.board);c.repeat.set(2,2),Object.assign(this.rim.material,{map:c,envMap:s.board==="glass"||s.board==="tile"?l:null,combine:rr,reflectivity:.25}),this.rim.material.needsUpdate=!0;let h=s.board==="glass";if(Object.assign(this.board.material,{map:r.board(s.board),transparent:h,opacity:h?.62:1,depthWrite:!h,specular:new It(h?9075350:s.board==="marble"?5592405:1118481),shininess:h?18:30}),this.board.material.needsUpdate=!0,e||n.pieces!==s.pieces||!this.mats){this.mats=bu(s.pieces,r);let u=[...this.pieces.entries()].map(([f,d])=>({id:f,sq:d.sq,type:d.type,color:d.color,shield:d.shield}));this.clearPieces(),this.sync(u,null)}}sync(t,e){let n=e?e.from+"-"+e.to+"-"+t.length:null,s=!!e&&n!==this.lastMoveKey;this.lastMoveKey=n;let r=new Set,o=!!this.rewinding&&this.time-this.rewinding.t0<3;this.rewinding=null;for(let a of t){r.add(a.id);let l=this.pieces.get(a.id);if(l&&(l.type!==a.type||l.color!==a.color)&&(this.removeEntry(l),this.pieces.delete(a.id),l=null),!l){let c=Su(a.type,a.color,this.mats),h=Un(a.sq);c.position.set(h.x,0,h.z),c.rotation.y=this.side===1?0:Math.PI,this.scene.add(c),l={group:c,type:a.type,color:a.color,sq:a.sq,shield:!1,ring:null},this.pieces.set(a.id,l),o&&(l.pop={t:0});let u=this.pendingRevive.get(a.sq);u!=null&&(this.pendingRevive.delete(a.sq),this.time-u<2&&this.startRevive(l))}if(l.sq!==a.sq){let c=Un(l.sq),h=Un(a.sq),u=s&&e.from===l.sq&&e.to===a.sq,f=s&&l.type==="r"&&l.sq>>3===e.from>>3&&Math.abs((e.to&7)-(e.from&7))===2;o?this.anims.push({group:l.group,from:c,to:h,t:0,dur:.6,hop:!1}):u||f?this.anims.push({group:l.group,from:c,to:h,t:0,dur:.2,hop:u&&l.type==="n"}):l.group.position.set(h.x,0,h.z),l.sq=a.sq}a.shield&&!l.ring&&(l.ring=Eu(),l.group.add(l.ring)),!a.shield&&l.ring&&(l.group.remove(l.ring),l.ring=null),l.shield=a.shield}for(let[a,l]of this.pieces){if(r.has(a))continue;this.pieces.delete(a);let c=s&&l.type==="p"&&l.sq===(e.from&-8|e.to&7);s&&(l.sq===e.to||c)?this.pendingRemoval.push({e:l,t:.17}):this.removeEntry(l)}}removeEntry(t){this.scene.remove(t.group)}clearPieces(){for(let t of this.pieces.values())this.removeEntry(t);for(let t of this.pendingRemoval)this.removeEntry(t.e);for(let t of this.shards)this.scene.remove(t.mesh),t.mesh.geometry.dispose();this.shards.length=0,this.pieces.clear(),this.anims.length=0,this.pendingRemoval.length=0;for(let t of this.revives)for(let e of t.shards)this.scene.remove(e.mesh),e.mesh.geometry.dispose();for(let t of this.clocks)this.scene.remove(t.group);this.clocks.length=0,this.revives.length=0,this.pendingRevive.clear(),this.lastMoveKey=null}setHighlights(t){this.highlights=t}setSelected(t){this.selectedId=t}attackZoom(t){let e=Wl[this.theme.zoom]||Wl.normal;this.zoomFx={t:0,sq:t,preset:e}}setSide(t){if(this.side!==t){this.side=t;for(let e of this.pieces.values())e.group.rotation.y=t===1?0:Math.PI;this.placeKeyLight()}}placeKeyLight(){this.key&&this.key.position.set(-5*this.side,9,-4*this.side)}setNativeSize(t,e){this.nativeSize={w:Math.max(1,Math.round(t)),h:Math.max(1,Math.round(e))},this.ready&&this.applyRenderSize()}renderSize(t=this.theme){let e=Tu[t.pixel];return e==null?this.nativeSize||{w:St*2,h:un*2}:{w:Math.round(St*e),h:Math.round(un*e)}}applyRenderSize(){let{w:t,h:e}=this.renderSize();this.renderer.setSize(t,e,!1)}basePose(){if(this.camOverride)return{up:new R(0,1,0),...this.camOverride};let t=Fu[this.theme.camera]||Fu.flat,e=this.side;return{pos:new R(t.pos[0]*e,t.pos[1],t.pos[2]*e),target:new R(t.target[0]*e,t.target[1],t.target[2]*e),up:new R(t.up[0]*e,t.up[1],t.up[2]*e),fov:t.fov}}setMode(t){this.mode==="title"&&t==="game"&&(this.lerpCam={t:0,from:this.camera.position.clone(),fromTarget:this.curTarget?this.curTarget.clone():new R,fromFov:this.camera.fov,fromUp:this.camera.up.clone()}),this.mode=t}pickSquare(t,e){let n=new st(t/St*2-1,-(e/un)*2+1);this.raycaster.setFromCamera(n,this.camera);let s=this.raycaster.intersectObject(this.board,!1);if(!s.length)return-1;let{x:r,z:o}=s[0].point,a=Math.floor(r+4),l=Math.floor(4-o);return a<0||a>7||l<0||l>7?-1:l*8+a}squareToScreen(t){let e=Un(t),n=new R(e.x,.1,e.z).project(this.camera);return{x:(n.x+1)/2*St,y:(1-n.y)/2*un}}update(t){this.time+=t;let e=this.time,n=this.camera,s,r,o,a;if(this.mode==="title"){let l=e*.12;s=new R(Math.sin(l)*9.5,10.5+Math.sin(e*.3)*.4,Math.cos(l)*9.5),r=new R(0,.6,0),o=46,a=new R(0,1,0)}else{let l=this.basePose();if(s=l.pos.clone(),r=l.target.clone(),o=l.fov,a=l.up.clone(),this.lerpCam){this.lerpCam.t=Math.min(1,this.lerpCam.t+t/.9);let c=1-Math.pow(1-this.lerpCam.t,3);s.lerpVectors(this.lerpCam.from,s,c),r.lerpVectors(this.lerpCam.fromTarget,r,c),a.lerpVectors(this.lerpCam.fromUp,a,c).normalize(),o=this.lerpCam.fromFov+(o-this.lerpCam.fromFov)*c,this.lerpCam.t>=1&&(this.lerpCam=null)}if(this.zoomFx){let c=this.zoomFx,h=c.preset;c.t+=t;let u=.2,f=.5,d=h.dur,g=c.t<u?1-Math.pow(1-c.t/u,2):c.t<f?1:c.t<d?1-Bu((c.t-f)/(d-f)):0,_=Un(c.sq),m=new R(_.x,.3,_.z),p=m.clone().sub(s);if(s.addScaledVector(p,h.s*g),r.lerp(m,.85*g),h.shake&&c.t>.16&&c.t<.42){let y=h.shake*(1-(c.t-.16)/.26);s.x+=(Math.random()*2-1)*y,s.y+=(Math.random()*2-1)*y}h.flash&&c.t>.16&&!c.flashed&&(this.flash=h.flash,c.flashed=!0),c.t>=d&&(this.zoomFx=null)}}if(n.up.copy(a),n.position.copy(s),n.lookAt(r),this.curTarget=r,this.scene.fog){let l=s.distanceTo(r);this.scene.fog.near=l+3,this.scene.fog.far=l+3+(this.fogSpan||14)}n.fov!==o&&(n.fov=o,n.updateProjectionMatrix()),this.flash=Math.max(0,this.flash-t*3.2);for(let l=this.anims.length-1;l>=0;l--){let c=this.anims[l];c.t=Math.min(1,c.t+t/c.dur);let h=Bu(c.t),u=Math.sin(h*Math.PI)*(c.hop?.3:.12);c.group.position.set(c.from.x+(c.to.x-c.from.x)*h,u,c.from.z+(c.to.z-c.from.z)*h),c.group.scale.setScalar(1+u),c.group.userData.shadow.position.set(.06+u*.5,.004-u,.07+u*.5),c.t>=1&&(c.group.scale.setScalar(1),this.anims.splice(l,1))}for(let l=this.pendingRemoval.length-1;l>=0;l--){let c=this.pendingRemoval[l];c.t-=t,c.t<=0&&(this.removeEntry(c.e),this.pendingRemoval.splice(l,1),this.spawnBurst(c.e.sq))}for(let l=this.shards.length-1;l>=0;l--){let c=this.shards[l];c.t+=t,c.v.y-=11*t,c.mesh.position.addScaledVector(c.v,t),c.mesh.position.y<.03&&(c.mesh.position.y=.03,c.v.y*=-.35,c.v.x*=.6,c.v.z*=.6,c.w.multiplyScalar(.6)),c.mesh.rotation.x+=c.w.x*t,c.mesh.rotation.y+=c.w.y*t,c.mesh.rotation.z+=c.w.z*t;let h=Math.max(0,Math.min(1,(c.life-c.t)/.35));c.mesh.scale.setScalar(h),c.t>=c.life&&(this.scene.remove(c.mesh),c.mesh.geometry.dispose(),this.shards.splice(l,1))}this.updateClocks(t);for(let l=this.revives.length-1;l>=0;l--){let c=this.revives[l];c.t+=t;let h=Math.round((1-Math.min(1,c.t/c.dur))*(c.N-1));for(let u of c.shards){let f=h*7,d=u.track;u.mesh.position.set(d[f],d[f+1],d[f+2]),u.mesh.rotation.set(d[f+3],d[f+4],d[f+5]),u.mesh.scale.setScalar(Math.max(.001,d[f+6]))}if(c.t>=c.dur){for(let d of c.shards)this.scene.remove(d.mesh),d.mesh.geometry.dispose();let{body:u,shadow:f}=c.e.group.userData;u.visible=!0,f.visible=!0,c.e.reviving=!1,c.e.pop={t:0},this.spawnBurst(c.e.sq,8382975),this.flash=Math.max(this.flash,.3),this.revives.splice(l,1)}}for(let l=this.bursts.length-1;l>=0;l--){let c=this.bursts[l];c.t+=t;let h=c.t/.35;c.mesh.scale.setScalar(1+h*1.4),c.mesh.material.opacity=Math.max(0,.9*(1-h)),h>=1&&(this.scene.remove(c.mesh),c.mesh.material.dispose(),this.bursts.splice(l,1))}for(let[l,c]of this.pieces){if(!this.anims.some(h=>h.group===c.group)){let h=l===this.selectedId?.14+Math.sin(e*6)*.03:0;c.group.position.y=h;let u=1+h;if(c.pop){c.pop.t+=t;let f=Math.min(1,c.pop.t/.35);u*=1+Math.sin(f*Math.PI)*.25,f>=1&&(c.pop=null)}c.group.scale.setScalar(u),c.group.userData.shadow.position.set(.06+h*.5,.004-h,.07+h*.5)}c.ring&&(c.ring.rotation.z=e*1.5,c.ring.material.color.setHSL(.52,1,.6+Math.sin(e*4)*.15))}for(let l=0;l<this.hlPool.length;l++){let c=this.hlPool[l],h=this.highlights[l];if(!h){c.visible=!1;continue}let u=Un(h.sq);c.position.set(u.x,.012,u.z),c.material.color.set(h.color),c.material.opacity=h.opacity??.45,c.visible=!0}}shatter(t){let e=[...this.pieces.entries()].find(([,l])=>l.sq===t);if(!e)return;let[n,s]=e;this.pieces.delete(n),s.group.updateMatrixWorld(!0);let r=Un(t),o=new R(r.x,.15,r.z),a=[new R,new R,new R];s.group.userData.body.traverse(l=>{if(!l.isMesh)return;let c=l.material.clone();c.side=Qe;let h=l.geometry.attributes.position;for(let u=0;u+2<h.count;u+=3){for(let m=0;m<3;m++)a[m].fromBufferAttribute(h,u+m).applyMatrix4(l.matrixWorld);let f=a[0].clone().add(a[1]).add(a[2]).divideScalar(3),d=new _e;d.setAttribute("position",new Bt(a.flatMap(m=>[m.x-f.x,m.y-f.y,m.z-f.z]),3)),d.computeVertexNormals();let g=new se(d,c);g.position.copy(f),this.scene.add(g);let _=f.clone().sub(o);_.y=0,_.lengthSq()<1e-6&&_.set(Math.random()-.5,0,Math.random()-.5),_.normalize().multiplyScalar(1.6+Math.random()*2.4),this.shards.push({mesh:g,life:1.3+Math.random()*.4,t:0,v:new R(_.x,2.2+Math.random()*3.2,_.z),w:new R((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18)})}}),this.scene.remove(s.group),this.spawnBurst(t,16734794),this.flash=Math.max(this.flash,.35)}reviveAt(t){this.spawnClock(t);let e=[...this.pieces.values()].find(n=>n.sq===t);e?this.startRevive(e):this.pendingRevive.set(t,this.time)}rewind(){this.rewinding={t0:this.time},this.spawnClock(-1,{scale:2.1,life:1.6})}spawnClock(t,e={}){if(!this.clockProto){let s=new fe,r=h=>new Tn({color:h,flatShading:!0}),o=new xn({color:14264378,flatShading:!0,shininess:70,specular:9076848}),a=(h,u,f=0,d=0,g=0)=>{let _=new se(h,u);return _.position.set(f,d,g),s.add(_),_};a(new Te(.4,.4,.16,12).rotateX(Math.PI/2),r(13119546)),a(new Te(.32,.32,.02,12).rotateX(Math.PI/2),r(16774104),0,0,.085);for(let h=0;h<12;h++){let u=h/12*Math.PI*2,f=h%3===0;a(new de(f?.04:.025,f?.07:.04,.01),r(1706512),Math.sin(u)*.26,Math.cos(u)*.26,.1).rotation.z=-u}for(let h of[-1,1])a(new bo(.14,8,4,0,Math.PI*2,0,Math.PI/2),o,h*.25,.36,0).rotation.z=-h*.55,a(new Te(.035,.05,.14,5),o,h*.24,-.42,0).rotation.z=h*.4;a(new de(.06,.1,.06),o,0,.45,0);let l=new fe;l.position.z=.11,s.add(l),l.add(new se(new de(.035,.27,.015).translate(0,.12,0),r(11539486)));let c=new fe;c.position.z=.115,s.add(c),c.add(new se(new de(.05,.18,.015).translate(0,.08,0),r(1706512))),a(new Te(.035,.035,.03,6).rotateX(Math.PI/2),o,0,0,.12),this.clockIdx={minute:s.children.indexOf(l),hour:s.children.indexOf(c)},this.clockProto=s}let n=this.clockProto.clone();n.userData={minute:n.children[this.clockIdx.minute],hour:n.children[this.clockIdx.hour]},n.traverse(s=>{s.renderOrder=6}),this.scene.add(n),this.clocks.push({group:n,sq:t,t:0,life:e.life||1.35,size:e.scale||1})}updateClocks(t){if(!this.clocks.length)return;let e=this.camera,n=new R(1,0,0).applyQuaternion(e.quaternion),s=new R(0,1,0).applyQuaternion(e.quaternion),r=new R(0,0,1).applyQuaternion(e.quaternion);for(let o=this.clocks.length-1;o>=0;o--){let a=this.clocks[o];if(a.t+=t,a.sq<0)a.group.position.set(0,1.6,0).addScaledVector(r,1.5);else{let u=Un(a.sq);a.group.position.set(u.x,.9,u.z).addScaledVector(n,.62).addScaledVector(s,.5).addScaledVector(r,.6)}a.group.quaternion.copy(e.quaternion);let l=a.t/.2,c=1.7,h=a.t<.2?1+(c+1)*Math.pow(l-1,3)+c*Math.pow(l-1,2):1;a.t>a.life-.25&&(h*=Math.max(0,(a.life-a.t)/.25)),a.group.scale.setScalar(Math.max(.001,h*.9*a.size)),a.group.rotateZ(.06*Math.sin(a.t*22)*Math.max(0,1-a.t)),a.group.userData.minute.rotation.z=a.t*13,a.group.userData.hour.rotation.z=.9+a.t*1.6,a.t>=a.life&&(this.scene.remove(a.group),this.clocks.splice(o,1))}}startRevive(t){if(t.reviving)return;t.reviving=!0,t.group.updateMatrixWorld(!0);let{body:e,shadow:n}=t.group.userData,s=Un(t.sq),r=new R(s.x,.15,s.z),o=1.1,a=1/60,l=Math.round(o/a)+1,c=[],h=[new R,new R,new R];e.traverse(u=>{if(!u.isMesh)return;let f=u.material.clone();f.side=Qe;let d=u.geometry.attributes.position;for(let g=0;g+2<d.count;g+=3){for(let U=0;U<3;U++)h[U].fromBufferAttribute(d,g+U).applyMatrix4(u.matrixWorld);let _=h[0].clone().add(h[1]).add(h[2]).divideScalar(3),m=new _e;m.setAttribute("position",new Bt(h.flatMap(U=>[U.x-_.x,U.y-_.y,U.z-_.z]),3)),m.computeVertexNormals();let p=new se(m,f),y=_.clone().sub(r);y.y=0,y.lengthSq()<1e-6&&y.set(Math.random()-.5,0,Math.random()-.5),y.normalize().multiplyScalar(1.6+Math.random()*2.4);let x=new R(y.x,2.2+Math.random()*3.2,y.z),v=new R((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18),P=_.clone(),T=new R,C=new Float32Array(l*7);for(let U=0;U<l;U++){let b=Math.max(0,Math.min(1,(o-U*a)/.3));C.set([P.x,P.y,P.z,T.x,T.y,T.z,b],U*7),x.y-=11*a,P.addScaledVector(x,a),P.y<.03&&(P.y=.03,x.y*=-.35,x.x*=.6,x.z*=.6,v.multiplyScalar(.6)),T.addScaledVector(v,a)}p.scale.setScalar(.001),this.scene.add(p),c.push({mesh:p,track:C})}}),e.visible=!1,n.visible=!1,this.revives.push({e:t,shards:c,t:0,dur:o,N:l})}spawnBurst(t,e=16773824){let n=Un(t),s=new se(this.burstGeo,new rn({color:e,transparent:!0,opacity:.9,depthWrite:!1,side:Qe}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.03,n.z),s.renderOrder=4,this.scene.add(s),this.bursts.push({mesh:s,t:0})}render(t){if(this.ready){if(this.update(t),this.renderer.render(this.scene,this.camera),this.kingView){this.kingStage.update(t,this.kingView.shown,this.kingView.mode);let e=this.renderer.domElement;this.kingStage.render(this.renderer,this.kingView.rect,{w:e.width,h:e.height})}if(this.phoneView&&this.phoneStage){this.phoneStage.update(t);let e=this.renderer.domElement;this.phoneStage.render(this.renderer,this.phoneView.rect,{w:e.width,h:e.height})}}}};var Et=270,Oe=480,ui={9:"10px Galmuri9",11:"12px Galmuri11","11b":"bold 12px Galmuri11",14:"15px Galmuri14"},Xl={9:10,11:12,"11b":12,14:15},ku=Object.values(ui),Qt={red:"#8e1a1a",redHi:"#d4382c",gold:"#e8b93a",cyan:"#7fe9ff",green:"#7ad17a",warn:"#ff6b6b",late:"#ff9f43"},Bo=class{constructor(t){this.c=t,this.ctx=t.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.buttons=[],this.pressedId=null,this.off=document.createElement("canvas"),this.offCtx=this.off.getContext("2d"),this.qrCache=new Map,this.setTheme({frame:"deco",lettering:"brass"})}setTheme(t){this.frameId=t.frame,this.letterId=t.lettering,this.pal=lr[t.frame]||lr.deco}begin(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,Et,Oe),this.ctx.imageSmoothingEnabled=!1,this.buttons=[]}rect(t,e,n,s,r){this.ctx.fillStyle=r,this.ctx.fillRect(t,e,n,s)}box(t,e,n,s,r){let o=this.ctx;o.fillStyle=r,o.fillRect(t,e,n,1),o.fillRect(t,e+s-1,n,1),o.fillRect(t,e,1,s),o.fillRect(t+n-1,e,1,s)}text(t,e,n,{font:s=11,color:r=this.pal.ink,align:o="left",shadow:a=!0,alpha:l=1}={}){let c=this.ctx;c.save(),c.globalAlpha=l,c.font=ui[s]||ui[11],c.textBaseline="top",c.textAlign="left";let h=o==="left"?0:c.measureText(t).width,u=Math.round(o==="center"?e-h/2:o==="right"?e-h:e),f=Math.round(n);a&&(c.fillStyle="#000",c.fillText(t,u+1,f+1)),c.fillStyle=r,c.fillText(t,u,f),c.restore()}measure(t,e=11){return this.ctx.font=ui[e]||ui[11],Math.ceil(this.ctx.measureText(t).width)}bigText(t,e,n,{scale:s=2,font:r=14,color:o=this.pal.ink,align:a="center",shadow:l=!0}={}){let c=this.measure(t,r)+4,h=Xl[r]+4,u=this.prepOff(c,h),f=Math.round(a==="center"?e-c*s/2:a==="right"?e-c*s:e);return l&&(u.fillStyle="#000",u.font=ui[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f+s,n+s,c*s,h*s),u.clearRect(0,0,c,h)),u.fillStyle=o,u.font=ui[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f,n,c*s,h*s),{w:c*s,h:h*s}}prepOff(t,e){this.off.width=t,this.off.height=e;let n=this.offCtx;return n.imageSmoothingEnabled=!1,n.clearRect(0,0,t,e),n.textBaseline="top",n}letter(t,e,n,{scale:s=2,font:r=14,align:o="center",spacing:a=0}={}){let l=Xl[r]+4,c=this.measure(t,r)+6+Math.max(0,t.length-1)*a,h=o==="center"?Math.round(e-c*s/2):o==="right"?e-c*s:e,u=(d,g=0,_=0)=>{let m=this.prepOff(c,l);if(m.font=ui[r],m.fillStyle=d,a){let p=3;for(let y of t)m.fillText(y,p,1),p+=this.measure(y,r)+a}else m.fillText(t,3,1);this.ctx.drawImage(this.off,h+g*s,n+_*s,c*s,l*s)},f=d=>{let g=this.offCtx.createLinearGradient(0,0,0,l);return d.forEach(([_,m])=>g.addColorStop(_,m)),g};if(this.letterId==="neon"){u("#2a0830",1,2);for(let[d,g]of[[-1,0],[1,0],[0,-1],[0,1]])u("#3fd8ff",d,g);u(f([[0,"#ffe0fa"],[.5,"#ff6ad8"],[1,"#c02aa8"]]))}else this.letterId==="chrome"?(u("#000",1,2),u("#2a2c34",1,1),u(f([[0,"#ffffff"],[.42,"#c8ccd8"],[.5,"#3a3e4c"],[.62,"#e8ecf4"],[1,"#7a7e8c"]]))):(u("#000",1,2),u("#6e4a14",1,1),u(f([[0,"#fff6d0"],[.35,"#f3dc8a"],[.5,"#a87a2a"],[.62,"#f3dc8a"],[1,"#8a5e18"]])));return{w:c*s,h:l*s}}hLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,n,1),r.fillStyle=s.line,r.fillRect(t,e+1,n,1),r.fillStyle=s.lineLo,r.fillRect(t,e+2,n,1)}vLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,1,n),r.fillStyle=s.line,r.fillRect(t+1,e,1,n),r.fillStyle=s.lineLo,r.fillRect(t+2,e,1,n)}glow(t,e,n,s,r){let o=this.ctx;o.save(),o.globalAlpha=.25,this.box(t-1,e-1,n+2,s+2,r),o.globalAlpha=.12,this.box(t-2,e-2,n+4,s+4,r),o.restore(),this.box(t,e,n,s,r)}frame(){let t=this.pal,e=this.ctx,n=2,s=2,r=Et-4,o=Oe-4;if(this.frameId==="plain"){this.box(4,4,Et-8,Oe-8,t.line),e.fillStyle=t.lineHi;for(let[a,l]of[[4,4],[Et-12,4],[4,Oe-5],[Et-12,Oe-5]])e.fillRect(a,l,8,1);return}if(this.frameId==="neon"){this.glow(4,4,Et-8,Oe-8,t.accent),this.box(7,7,Et-14,Oe-14,t.lineLo);return}this.hLine(n,s,r),this.hLine(n,s+o-3,r),this.vLine(n,s,o),this.vLine(n+r-3,s,o),e.fillStyle=t.lineLo,e.fillRect(n+5,s+5,r-10,1),e.fillRect(n+5,s+o-6,r-10,1),e.fillRect(n+5,s+5,1,o-10),e.fillRect(n+r-6,s+5,1,o-10);for(let[a,l,c,h]of[[n,s,1,1],[n+r,s,-1,1],[n,s+o,1,-1],[n+r,s+o,-1,-1]])for(let u=0;u<3;u++){let f=a+c*(3+u*3)-(c<0?6:0),d=l+h*(3+u*3)-(h<0?6:0);e.fillStyle=t.line,e.fillRect(f,d,6,6),e.fillStyle=t.lineHi,e.fillRect(f,d,2,2)}}pillar(t,e,n){let s=this.pal,r=this.ctx;if(this.frameId==="plain"){this.rect(t+5,e,1,n-e,s.line);return}if(this.frameId==="neon"){this.rect(t+4,e,1,n-e,s.accent),this.rect(t+7,e+6,1,n-e-12,s.line);return}for(let o=0;o<3;o++)this.vLine(t+o*4,e+10,n-e-10);r.fillStyle=s.lineLo,r.fillRect(t-3,n-4,17,4),r.fillStyle=s.lineHi,r.fillRect(t-3,n-4,17,1),r.fillStyle=s.lineLo,r.fillRect(t-2,e+8,15,3),r.fillStyle=s.lineHi,r.fillRect(t-2,e+8,15,1),r.fillStyle=s.accentLo,r.beginPath(),r.arc(t+5.5,e+3.5,5,0,Math.PI*2),r.fill(),r.fillStyle=s.accent,r.beginPath(),r.arc(t+5,e+3,4,0,Math.PI*2),r.fill(),r.fillStyle=s.accentHi,r.fillRect(t+3,e+1,2,2)}panel(t,e,n,s,{fill:r=this.pal.panel,border:o=this.pal.ink,shadow:a=!0}={}){a&&this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),o&&this.box(t,e,n,s,o)}plaque(t,e,n,s,{fill:r=this.pal.panel}={}){let o=this.pal;if(this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),this.frameId==="plain"){this.box(t,e,n,s,o.line);return}if(this.frameId==="neon"){this.glow(t,e,n,s,o.accent),this.box(t+3,e+3,n-6,s-6,o.lineLo);return}this.hLine(t,e,n),this.hLine(t,e+s-3,n),this.vLine(t,e,s),this.vLine(t+n-3,e,s),this.box(t+4,e+4,n-8,s-8,o.accentLo)}button(t,e,n,s,r,o,{style:a="normal",disabled:l=!1,font:c=11,color:h}={}){let u=this.ctx,f=this.pal,d=this.pressedId===t&&!l,g=d?1:0,_=l?"#14121a":a==="danger"?Qt.red:a==="primary"?f.btnPrimary:f.btn,m=l?f.lineLo:a==="danger"?Qt.redHi:f.accent;this.panel(e+g,n+g,s,r,{fill:_,border:m,shadow:!d}),l||(this.frameId==="neon"?(u.save(),u.globalAlpha=.3,this.box(e+g-1,n+g-1,s+2,r+2,m),u.restore()):(u.fillStyle=a==="danger"?"#ff8a7a":f.accentHi,u.fillRect(e+g+1,n+g+1,s-2,1),u.fillRect(e+g+1,n+g+1,1,r-2),u.fillStyle=a==="danger"?"#4a0a0a":f.accentLo,u.fillRect(e+g+1,n+g+r-2,s-2,1),u.fillRect(e+g+s-2,n+g+1,1,r-2)));let p=Xl[c];this.text(o,e+g+s/2,n+g+Math.floor((r-p)/2),{font:c,align:"center",color:h||(l?f.dim:f.ink)}),l||this.buttons.push({id:t,x:e,y:n,w:s,h:r})}hit(t,e){for(let n=this.buttons.length-1;n>=0;n--){let s=this.buttons[n];if(t>=s.x-2&&t<s.x+s.w+2&&e>=s.y-2&&e<s.y+s.h+2)return s.id}return null}bar(t,e,n,s,r,o,a="#000"){this.rect(t,e,n,s,a),this.rect(t+1,e+1,Math.round((n-2)*Math.max(0,Math.min(1,r))),s-2,o),this.box(t,e,n,s,this.pal.dim)}card(t,e,n){this.rect(t+1,e+1,7,10,"#000"),this.rect(t,e,7,10,n?Qt.gold:"#2a2418"),n&&this.rect(t+1,e+1,2,2,"#fff3c4")}dim(t=.55){this.rect(0,0,Et,Oe,`rgba(0,0,0,${t})`)}vignette(){let t=this.ctx,e=t.createRadialGradient(Et/2,Oe/2,Oe*.32,Et/2,Oe/2,Oe*.75);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,0.55)"),t.fillStyle=e,t.fillRect(0,0,Et,Oe)}qr(t,e,n,s=2){if(!window.qrcode)return 0;let r=this.qrCache.get(t);if(!r)try{let a=window.qrcode(0,"L");a.addData(t),a.make();let l=a.getModuleCount();r={n:l,dark:[]};for(let c=0;c<l;c++)for(let h=0;h<l;h++)a.isDark(c,h)&&r.dark.push([c,h]);this.qrCache.set(t,r)}catch{return 0}let o=(r.n+2)*s;this.rect(e,n,o,o,"#fff"),this.ctx.fillStyle="#000";for(let[a,l]of r.dark)this.ctx.fillRect(e+(l+1)*s,n+(a+1)*s,s,s);return o}lines(t,e,n=9){let s=[],r="";for(let o of t)this.measure(r+o,n)>e&&r?(s.push(r),r=o.trimStart()):r+=o;return r&&s.push(r),s}};var ko=class extends EventTarget{constructor(){super(),this.t=null}use(t){return this.t&&this.t!==t&&this.t.close?.(),this.t=t,t.hub=this,t}emit(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:{type:t,...e}}))}send(t){this.t?.send(t)}leave(){let t=this.t;this.t=null,t?.leave?.()}get online(){return this.t?!!this.t.online:!1}get kind(){return this.t?.kind??null}},ql="faith-chess-token",zo=class{constructor(){this.kind="lan",this.ws=null,this.wantOpen=!1,this.retry=null,this.online=!1}get token(){try{return localStorage.getItem(ql)}catch{return null}}set token(t){try{t?localStorage.setItem(ql,t):localStorage.removeItem(ql)}catch{}}connect(){this.wantOpen=!0,clearTimeout(this.retry);let t=location.protocol==="https:"?"wss":"ws",e=new WebSocket(`${t}://${location.host}`);this.ws=e,e.onopen=()=>{this.online=!0,this.hub?.emit("open"),this.token&&this.send({type:"reconnect",token:this.token})},e.onmessage=n=>{let s;try{s=JSON.parse(n.data)}catch{return}if(s.type==="joined"&&(this.token=s.token),s.type==="error"&&s.code==="nosession"){this.token=null;return}this.hub?.emit(s.type,s)},e.onclose=()=>{this.online=!1,this.hub?.emit("close"),this.wantOpen&&(this.retry=setTimeout(()=>this.connect(),1e3))},e.onerror=()=>{}}send(t){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}leave(){this.send({type:"leave"}),this.token=null}close(){}};var Px="abcdefgh";function Nt(i,t){return t*8+i}function ur(i){return i&7}function Oi(i){return i>>3}function Zl(i){return Px[ur(i)]+(Oi(i)+1)}function He(i){return i==="w"?"b":"w"}var zu=1;function Ho(i,t){return{id:zu++,type:i,color:t,shield:!1}}function Vo(){zu=1;let i=new Array(64).fill(null),t=["r","n","b","q","k","b","n","r"];for(let e=0;e<8;e++)i[Nt(e,0)]=Ho(t[e],"w"),i[Nt(e,1)]=Ho("p","w"),i[Nt(e,6)]=Ho("p","b"),i[Nt(e,7)]=Ho(t[e],"b");return{board:i,turn:"w",castling:{w:{k:!0,q:!0},b:{k:!0,q:!0}},ep:null,halfmove:0,fullmove:1,lastMove:null}}function Fi(i){return{board:i.board.map(t=>t?{...t}:null),turn:i.turn,castling:{w:{...i.castling.w},b:{...i.castling.b}},ep:i.ep,halfmove:i.halfmove,fullmove:i.fullmove,lastMove:i.lastMove?{...i.lastMove}:null}}function Ix(i,t){for(let e=0;e<64;e++){let n=i[e];if(n&&n.type==="k"&&n.color===t)return e}return-1}var Hu=[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]],Vu=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],Yl=[[1,1],[-1,1],[-1,-1],[1,-1]],$l=[[1,0],[0,1],[-1,0],[0,-1]];function $n(i,t){return i>=0&&i<8&&t>=0&&t<8}function Es(i,t,e){let n=ur(t),s=Oi(t),r=e==="w"?s-1:s+1;for(let o of[-1,1]){let a=n+o;if($n(a,r)){let l=i[Nt(a,r)];if(l&&l.color===e&&l.type==="p")return!0}}for(let[o,a]of Hu){let l=n+o,c=s+a;if($n(l,c)){let h=i[Nt(l,c)];if(h&&h.color===e&&h.type==="n")return!0}}for(let[o,a]of Vu){let l=n+o,c=s+a;if($n(l,c)){let h=i[Nt(l,c)];if(h&&h.color===e&&h.type==="k")return!0}}for(let[o,a]of Yl){let l=n+o,c=s+a;for(;$n(l,c);){let h=i[Nt(l,c)];if(h){if(h.color===e&&(h.type==="b"||h.type==="q"))return!0;break}l+=o,c+=a}}for(let[o,a]of $l){let l=n+o,c=s+a;for(;$n(l,c);){let h=i[Nt(l,c)];if(h){if(h.color===e&&(h.type==="r"||h.type==="q"))return!0;break}l+=o,c+=a}}return!1}function Bi(i,t){let e=Ix(i.board,t);return e<0?!1:Es(i.board,e,He(t))}function Lx(i,t){let{board:e}=i,n=e[t];if(!n)return[];let s=[],r=ur(t),o=Oi(t),a=n.color,l=(h,u)=>s.push({from:t,to:h,...u});if(n.type==="p"){let h=a==="w"?1:-1,u=a==="w"?1:6,f=a==="w"?7:0,d=o+h;if($n(r,d)&&!e[Nt(r,d)]){if(d===f)for(let _ of["q","r","b","n"])l(Nt(r,d),{promotion:_});else l(Nt(r,d),{});let g=o+2*h;o===u&&!e[Nt(r,g)]&&l(Nt(r,g),{double:!0})}for(let g of[-1,1]){let _=r+g;if(!$n(_,d))continue;let m=Nt(_,d),p=e[m];if(p&&p.color!==a)if(d===f)for(let y of["q","r","b","n"])l(m,{promotion:y,capture:!0});else l(m,{capture:!0});else if(!p&&i.ep===m){let y=e[Nt(_,o)];y&&y.type==="p"&&y.color!==a&&l(m,{enPassant:!0,capture:!0})}}return s}if(n.type==="n"||n.type==="k"){let h=n.type==="n"?Hu:Vu;for(let[u,f]of h){let d=r+u,g=o+f;if(!$n(d,g))continue;let _=Nt(d,g),m=e[_];m?m.color!==a&&l(_,{capture:!0}):l(_,{})}if(n.type==="k"){let u=a==="w"?0:7;if(o===u&&r===4&&!Es(e,t,He(a))){let f=i.castling[a];if(f.k){let d=e[Nt(7,u)];d&&d.type==="r"&&d.color===a&&!e[Nt(5,u)]&&!e[Nt(6,u)]&&!Es(e,Nt(5,u),He(a))&&!Es(e,Nt(6,u),He(a))&&l(Nt(6,u),{castle:"k"})}if(f.q){let d=e[Nt(0,u)];d&&d.type==="r"&&d.color===a&&!e[Nt(1,u)]&&!e[Nt(2,u)]&&!e[Nt(3,u)]&&!Es(e,Nt(3,u),He(a))&&!Es(e,Nt(2,u),He(a))&&l(Nt(2,u),{castle:"q"})}}}return s}let c=n.type==="b"?Yl:n.type==="r"?$l:[...Yl,...$l];for(let[h,u]of c){let f=r+h,d=o+u;for(;$n(f,d);){let g=Nt(f,d),_=e[g];if(!_)l(g,{});else{_.color!==a&&l(g,{capture:!0});break}f+=h,d+=u}}return s}function ws(i,t){let e=i.turn,n=t!=null?[t]:[...Array(64).keys()],s=[];for(let r of n){let o=i.board[r];if(!(!o||o.color!==e))for(let a of Lx(i,r)){let l=Wu(i,a);Bi(l,e)||s.push(a)}}return s}function Gu(i,t,e,n){return ws(i,t).find(s=>s.to===e&&(s.promotion??null)===(n??null))||null}function Wu(i,t){let e=Fi(i),n=e.board,s=n[t.from],r=s.color,o=n[t.to];if(n[t.to]=s,n[t.from]=null,t.enPassant){let c=Nt(ur(t.to),Oi(t.from));n[c]=null}if(t.promotion&&(s.type=t.promotion),t.castle){let c=Oi(t.from);t.castle==="k"?(n[Nt(5,c)]=n[Nt(7,c)],n[Nt(7,c)]=null):(n[Nt(3,c)]=n[Nt(0,c)],n[Nt(0,c)]=null)}s.type==="k"&&(e.castling[r].k=!1,e.castling[r].q=!1);let a=r==="w"?0:7;t.from===Nt(0,a)&&(e.castling[r].q=!1),t.from===Nt(7,a)&&(e.castling[r].k=!1);let l=r==="w"?7:0;return t.to===Nt(0,l)&&(e.castling[He(r)].q=!1),t.to===Nt(7,l)&&(e.castling[He(r)].k=!1),e.ep=t.double?Nt(ur(t.from),(Oi(t.from)+Oi(t.to))/2):null,e.halfmove=s.type==="p"||o||t.enPassant?0:e.halfmove+1,r==="b"&&e.fullmove++,e.turn=He(r),e.lastMove={from:t.from,to:t.to,pieceId:s.id,color:r},e.captured=o?{...o}:null,e}function Xu(i,t){return Wu(i,t)}function Go(i,t){let e=Fi(i),n=e.board[t];if(!n||n.type==="k")return e;if(e.board[t]=null,n.type==="r"){let s=n.color==="w"?0:7;t===Nt(0,s)&&(e.castling[n.color].q=!1),t===Nt(7,s)&&(e.castling[n.color].k=!1)}return e}function Dx(i){let t={w:0,b:0};for(let e of i)if(!(!e||e.type==="k"))if(e.type==="n"||e.type==="b")t[e.color]++;else return!1;return t.w+t.b<=1}function qu(i){let t=i.turn,e=ws(i),n=Bi(i,t);return e.length===0?n?{over:!0,result:"checkmate",winner:He(t),check:n}:{over:!0,result:"stalemate",winner:null,check:n}:Dx(i.board)?{over:!0,result:"insufficient",winner:null,check:n}:i.halfmove>=100?{over:!0,result:"fifty",winner:null,check:n}:{over:!1,result:null,winner:null,check:n}}var Le={ERASE_COOLDOWN_MS:1e4,SUSPECT_WINDOW_MS:1e4,SUSPECT_LATE_MS:2e4,PICK_TIMEOUT_MS:1e4,RECONNECT_GRACE_MS:3e4,LONG_PRESS_MS:800,FOUL_LIMIT:3,SUSPECT_CHOICES:["p","n","b","r","q"]},Jl={p:1,n:3,b:3,r:5,q:9},on={p:"\uD3F0",n:"\uB098\uC774\uD2B8",b:"\uBE44\uC20D",r:"\uB8E9",q:"\uD038",k:"\uD0B9"};var Kl=(i,t)=>{for(let e=0;e<i.length;e++)if(i[e]!==t[e])return i[e]<t[e];return!1},fi=(i,t,e)=>{let n=i.charCodeAt(i.length-1)-44032;return n>=0&&n<11172&&n%28!==0?t:e};function ki(i){return String(i||"").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").trim().slice(0,12)}var di=class i{constructor(t,{now:e=()=>Date.now(),onChange:n=()=>{}}={}){this.code=t,this.now=e,this.onChange=n,this.players={w:null,b:null},this.round=0,this.resetMatch(),this.status="waiting"}resetMatch(){this.state=Vo(),this.erases=[],this.lastEraseAt={w:-1/0,b:-1/0},this.caught={w:0,b:0},this.pending={w:null,b:null},this.lastMovedId={w:null,b:null},this.history=[],this.historyShift=0,this.result=null,this.rematchVotes={w:!1,b:!1},this.lastMoveVisible=null,this.startedAt=null}get isFull(){return!!(this.players.w&&this.players.b)}addPlayer(t,e){let n=this.players.w?this.players.b?null:"b":"w";return n?(this.players[n]={name:ki(t)||(n==="w"?"\uBC31":"\uD751"),token:e,connected:!0,disconnectedAt:null,send:null},this.isFull&&this.status==="waiting"&&this.start(),n):null}start(){this.resetMatch(),this.status="playing",this.round++,this.startedAt=this.now(),this.emit("event",{name:"start"}),this.changed()}colorOfToken(t){for(let e of["w","b"])if(this.players[e]&&this.players[e].token===t)return e;return null}setConnected(t,e){let n=this.players[t];n&&(n.connected=e,n.disconnectedAt=e?null:this.now(),this.changed())}handle(t,e){if(!(!e||typeof e!="object"))switch(e.type){case"move":return this.move(t,e.from|0,e.to|0,e.promotion||null);case"erase":return this.erase(t,e.square|0);case"suspect":return this.suspect(t);case"pick":return this.pick(t,String(e.pieceType||""));case"resign":return this.resign(t);case"rematch":return this.rematch(t);default:return}}move(t,e,n,s){if(this.status!=="playing"||this.state.turn!==t)return;let r=Gu(this.state,e,n,s);if(!r)return this.toast(t,"\uB458 \uC218 \uC5C6\uB294 \uC218\uC785\uB2C8\uB2E4.","warn");let o=this.state;this.history.push({state:Fi(o),t:this.now(),by:t,m:{from:r.from,to:r.to,castle:r.castle||null},type:o.board[e].type,lastMovedId:{...this.lastMovedId},lastMoveVisible:this.lastMoveVisible}),this.history.length>400&&(this.history.shift(),this.historyShift++),this.state=Xu(o,r),this.lastMovedId[t]=o.board[e].id,this.lastMoveVisible={from:e,to:n};let a=He(t),l=Bi(this.state,a);this.emit("event",{name:r.capture?"capture":r.castle?"castle":"move",check:l,by:t,at:n}),this.checkEnd(),this.changed()}erase(t,e){if(this.status!=="playing")return;let n=this.now(),s=this.state.board[e];if(!s||s.color===t)return;if(s.type==="k")return this.toast(t,"\uD0B9\uC740 \uC9C0\uC6B8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","warn");let r=Le.ERASE_COOLDOWN_MS-(n-this.lastEraseAt[t]);if(r>0)return this.toast(t,`\uC544\uC9C1 ${Math.ceil(r/1e3)}\uCD08 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`,"warn");this.state=Go(this.state,e),this.lastEraseAt[t]=n,this.erases.push({t:n,by:t,victim:s.color,pieceType:s.type,pieceId:s.id,square:e,moveIndex:this.history.length+this.historyShift,resolved:!1}),this.toast(t,`${Zl(e)}\uC758 ${on[s.type]}${fi(on[s.type],"\uC744","\uB97C")} \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4.`,"secret"),this.checkEnd(),this.changed()}suspect(t){if(this.status!=="playing"||this.pending[t])return;this.emit("event",{name:"suspect",by:t});let e=this.now(),n=-1;for(let o=this.erases.length-1;o>=0;o--){let a=this.erases[o];if(a.victim===t&&!a.resolved){n=o;break}}let s=n>=0?this.erases[n]:null,r=s?e-s.t:1/0;if(s&&r<=Le.SUSPECT_WINDOW_MS)s.resolved=!0,this.pending[t]={kind:"pick",eraseIndex:n,deadline:e+Le.PICK_TIMEOUT_MS},this.toast(t,"\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?","info");else if(s&&r<=Le.SUSPECT_LATE_MS)s.resolved=!0,this.toast(t,"\uD55C \uBC1C \uB2A6\uC5C8\uC2B5\uB2C8\uB2E4\u2026","late");else{s&&(s.resolved=!0);let o=this.findPieceSquare(this.lastMovedId[t]),a=o>=0?this.state.board[o]:null;a&&a.type!=="k"?(this.state=Go(this.state,o),this.toast(t,`\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC758\uC2EC\uC758 \uB300\uAC00\uB85C ${on[a.type]}${fi(on[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"bad"),this.toast(He(t),`\uC0C1\uB300\uAC00 \uD5DB\uB41C \uC758\uC2EC\uC744 \uD588\uC2B5\uB2C8\uB2E4. \uC0C1\uB300\uC758 ${on[a.type]}${fi(on[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"good"),this.emit("event",{name:"vanish"})):this.toast(t,"\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","bad"),this.checkEnd()}this.changed()}pick(t,e){let n=this.pending[t];if(!n||n.kind!=="pick"||this.status!=="playing"||!Le.SUSPECT_CHOICES.includes(e))return;let s=this.erases[n.eraseIndex];e===s.pieceType?(this.pending[t]=null,this.penalty(t,s)):(this.pending[t]=null,this.toast(t,`\uC798\uBABB \uC9DA\uC5C8\uC2B5\uB2C8\uB2E4. (${on[e]}${fi(on[e],"\uC774","\uAC00")} \uC544\uB2C8\uC5C8\uC2B5\uB2C8\uB2E4)`,"bad")),this.changed()}static penaltyTarget(t,e,n,s){let r=Jl[n],o=null;for(let a=0;a<64;a++){let l=t[a];if(!l||l.color!==e||l.type==="k")continue;let c=Jl[l.type],h=Math.max(Math.abs((a&7)-(s&7)),Math.abs((a>>3)-(s>>3))),u=[Math.abs(c-r),l.type===n?0:1,-c,h,a];(!o||Kl(u,o.key))&&(o={sq:a,key:u})}return o?o.sq:-1}static movePath(t,e){let n=[t.to],s=t.from&7,r=t.from>>3,o=t.to&7,a=t.to>>3;if("rbq".includes(e)||e==="p"&&Math.abs(a-r)===2){let c=Math.sign(o-s),h=Math.sign(a-r);for(let u=s+c,f=r+h;u!==o||f!==a;u+=c,f+=h)n.push(f*8+u)}if(t.castle){let c=t.castle==="k"?7:0;for(let h=Math.min(s,c)+1;h<Math.max(s,c);h++)n.push(r*8+h)}return[...new Set(n)]}findRewind(t){let e=(t.moveIndex??this.history.length+this.historyShift)-this.historyShift;for(let n=Math.max(0,e);n<this.history.length;n++){let s=this.history[n];if(s.by===t.by&&i.movePath(s.m,s.type).includes(t.square))return n}return-1}rewindTo(t){let e=this.history[t],n=this.history.length-t;this.state=Fi(e.state),this.lastMovedId={...e.lastMovedId},this.lastMoveVisible=e.lastMoveVisible,this.history.length=t;for(let s of this.erases)s.t>e.t&&(s.resolved=!0);for(let s of["w","b"]){let r=this.pending[s];r&&this.erases[r.eraseIndex]?.t>e.t&&(this.pending[s]=null)}return this.emit("event",{name:"rewind",undone:n}),n}static reviveSquare(t,e){let n=He(e.victim),s=Bi(t,n),r=[];for(let o=0;o<64;o++){if(t.board[o]||e.pieceType==="p"&&(!(o>>3)||o>>3===7))continue;let a=Math.abs((o&7)-(e.square&7)),l=Math.abs((o>>3)-(e.square>>3));r.push([Math.max(a,l),a+l,o])}r.sort((o,a)=>Kl(o,a)?-1:Kl(a,o)?1:0);for(let[,,o]of r){let a=Fi(t);if(a.board[o]={id:e.pieceId,type:e.pieceType,color:e.victim,shield:!1},s||!Bi(a,n))return o}return-1}revive(t){let e=i.reviveSquare(this.state,t);if(e<0)return-1;let n=Fi(this.state);return n.board[e]={id:t.pieceId,type:t.pieceType,color:t.victim,shield:!1},this.state=n,this.emit("event",{name:"revive",at:e,pieceType:t.pieceType,color:t.victim}),e}penalty(t,e){let n=He(t),s=++this.caught[n],r=Le.FOUL_LIMIT,o=on[e.pieceType],a=this.findRewind(e),l=a>=0?this.rewindTo(a):0,c=l?` \uC2DC\uAC04\uC744 \uB418\uAC10\uC544 ${l}\uC218\uB97C \uBB34\uB974\uACE0,`:"",h=i.penaltyTarget(this.state.board,n,e.pieceType,e.square);if(h<0){this.revive(e),this.toast(t,"\uBC18\uCE59 \uC801\uBC1C! \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC544 \uC2B9\uB9AC\uD569\uB2C8\uB2E4.","good"),this.toast(n,"\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uB9D0\uC774 \uD0B9\uBFD0\uC774\uB77C \uD328\uBC30\uD569\uB2C8\uB2E4.","bad"),this.end({result:"bare",winner:t});return}let u=this.state.board[h],f=on[u.type];this.emit("event",{name:"penalty",at:h,pieceType:u.type,by:t}),this.state=Go(this.state,h);let d=this.revive(e)>=0;if(this.toast(t,`\uBC18\uCE59 \uC801\uBC1C! (\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${c}${d?` \uC9C0\uC6CC\uC84C\uB358 ${o}${fi(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uC0C1\uB300 ${f}${fi(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"good"),this.toast(n,`\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. (\uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${c}${d?` \uC0C1\uB300 ${o}${fi(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uB0B4 ${Zl(h)} ${f}${fi(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"bad"),s>=r){this.end({result:"fouls",winner:t});return}this.checkEnd()}resign(t){this.status==="playing"&&(this.end({result:"resign",winner:He(t)}),this.changed())}rematch(t){if(this.status==="over"){if(this.rematchVotes[t]=!0,this.rematchVotes.w&&this.rematchVotes.b){let{w:e,b:n}=this.players;this.players={w:n,b:e},this.start();return}this.toast(He(t),"\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uC6D0\uD569\uB2C8\uB2E4.","info"),this.changed()}}tick(){if(this.status==="playing"){let t=this.now();for(let e of["w","b"]){let n=this.pending[e];n&&n.kind==="pick"&&t>n.deadline&&(this.pending[e]=null,this.toast(e,"\uC2DC\uAC04 \uCD08\uACFC. \uAE30\uD68C\uB97C \uB193\uCCE4\uC2B5\uB2C8\uB2E4.","bad"),this.changed());let s=this.players[e];s&&!s.connected&&s.disconnectedAt!=null&&t-s.disconnectedAt>Le.RECONNECT_GRACE_MS&&(this.end({result:"disconnect",winner:He(e)}),this.changed())}}}checkEnd(){let t=qu(this.state);t.over&&this.end({result:t.result,winner:t.winner})}end(t){this.status==="playing"&&(this.status="over",this.result=t,this.pending={w:null,b:null},this.rematchVotes={w:!1,b:!1},this.emit("event",{name:"end"}))}findPieceSquare(t){return t==null?-1:this.state.board.findIndex(e=>e&&e.id===t)}toast(t,e,n="info"){this.emit("toast",{text:e,kind:n},t)}emit(t,e,n=null){for(let s of["w","b"]){if(n&&s!==n)continue;let r=this.players[s];r&&r.send&&r.send({type:t,...e})}}changed(){this.onChange(this)}view(t){let e=this.state,n=[];for(let o=0;o<64;o++){let a=e.board[o];a&&n.push({sq:o,id:a.id,type:a.type,color:a.color,shield:!!a.shield})}let s=this.pending[t],r=this.now();return{type:"state",code:this.code,round:this.round,you:t,status:this.status,names:{w:this.players.w?.name??null,b:this.players.b?.name??null},connected:{w:!!this.players.w?.connected,b:!!this.players.b?.connected},turn:e.turn,pieces:n,lastMove:this.lastMoveVisible,castling:{w:{...e.castling.w},b:{...e.castling.b}},ep:e.ep,check:this.status==="playing"?Bi(e,e.turn):!1,caught:{...this.caught},eraseReadyAt:this.lastEraseAt[t]+Le.ERASE_COOLDOWN_MS,serverNow:r,pending:s&&s.kind==="pick"?{kind:"pick",deadline:s.deadline,choices:Le.SUSPECT_CHOICES}:null,result:this.result,rematchVotes:{...this.rematchVotes}}}};var Yu={p:1,n:3,b:3,r:5,q:9,k:0},fr=(i,t)=>i+Math.random()*(t-i),Wo=i=>i[Math.floor(Math.random()*i.length)],dr=class{constructor(){this.kind="bot",this.online=!0,this.timer=null}start(t){this.game=new di("BOT",{onChange:e=>this.broadcast(e)}),this.game.addPlayer(t,"me"),this.game.players.w.send=e=>this.hub.emit(e.type,e),this.hub.emit("joined",{code:"BOT",color:"w"}),this.game.addPlayer("\uC5F0\uC2B5 \uBD07","bot"),this.bot={nextErase:performance.now()+fr(9e3,16e3),plan:null,seenErases:0},this.timer=setInterval(()=>this.tick(),200)}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}get botColor(){return this.game.colorOfToken("bot")}get myColor(){return this.game.colorOfToken("me")}send(t){let e=this.myColor;e&&(this.game.handle(e,t),t.type==="rematch"&&this.game.status==="over"&&setTimeout(()=>this.game.handle(this.botColor,{type:"rematch"}),900),this.game.status==="playing"&&this.game.round>(this.lastRound||0)&&(this.lastRound=this.game.round,this.game.players[this.myColor].send=n=>this.hub.emit(n.type,n),this.game.players[this.botColor].send=null,this.bot.nextErase=performance.now()+fr(9e3,16e3),this.broadcast(this.game)))}tick(){let t=this.game,e=this.botColor,n=performance.now();if(t.tick(),t.status!=="playing")return;let s=t.pending[e];if(s?.kind==="pick"){t.handle(e,{type:"pick",pieceType:Math.random()<.65?t.erases[s.eraseIndex].pieceType:Wo(Le.SUSPECT_CHOICES)});return}let r=t.erases.filter(o=>o.victim===e).length;if(r>this.bot.seenErases&&(this.bot.seenErases=r,Math.random()<.55&&(this.bot.suspectAt=n+fr(2500,8e3))),this.bot.suspectAt&&n>this.bot.suspectAt){this.bot.suspectAt=0,t.handle(e,{type:"suspect"});return}if(n>this.bot.nextErase){this.bot.nextErase=n+fr(16e3,32e3);let o=t.state.board.map((l,c)=>l&&l.color!==e&&l.type!=="k"?c:-1).filter(l=>l>=0),a=o.filter(l=>t.state.board[l].type==="p");o.length&&t.handle(e,{type:"erase",square:a.length&&Math.random()<.6?Wo(a):Wo(o)});return}if(t.state.turn===e&&(this.bot.plan||(this.bot.plan=n+fr(700,1600)),n>this.bot.plan)){this.bot.plan=null;let o=ws(t.state);if(!o.length)return;let a=o.filter(c=>c.capture).sort((c,h)=>(Yu[t.state.board[h.to]?.type]||1)-(Yu[t.state.board[c.to]?.type]||1)),l=a.length&&Math.random()<.8?a[0]:Wo(o);t.handle(e,{type:"move",from:l.from,to:l.to,promotion:l.promotion?"q":null})}}leave(){clearInterval(this.timer),this.timer=null}close(){this.leave()}};var $u="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Zu="faith-chess-room-token",Ju=i=>"fc-"+i.toLowerCase(),Ux=i=>new TextEncoder().encode(JSON.stringify(i)).length;function Nx(){try{let i=localStorage.getItem(Zu);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(Zu,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function Ox(i){let{type:t,pieces:e,...n}=i;return{...n,pieces:e.map(s=>`${s.id}.${s.sq}.${s.type}${s.color}${s.shield?1:0}`).join(" ")}}function Fx(i){let t=String(i.pieces||"").split(" ").filter(Boolean).map(e=>{let[n,s,r]=e.split(".");return{id:+n,sq:+s,type:r[0],color:r[1],shield:r[2]==="1"}});return{...i,type:"state",pieces:t,eraseReadyAt:i.eraseReadyAt??-1/0}}var Xo=class i{static async open(){if(!window.claude?.use)return null;let t=null;try{t=await window.claude.use("room")}catch{t=null}return t?new i(t):null}constructor(t){this.kind="room",this.room=t,this.connected=t.connected(),this.role=null,this.onLobby=null,t.onConnection(e=>{this.connected=e,this.hub?.emit(e?"open":"close")},()=>{this.connected=!1}),t.onPeers(()=>this.onLobby?.(this.openRooms()),()=>{})}get online(){return this.role==="guest"?this.connected&&this.hostOnline:this.connected}openRooms(){return this.room.peers().filter(t=>!t.sameTab&&typeof t.presence?.open=="string").map(t=>({code:t.presence.open,name:String(t.presence.name||"?"),mine:t.isMe}))}async create(t){this.endSession();let e="";for(let s=0;s<4;s++)e+=$u[Math.floor(Math.random()*$u.length)];let n=await this.room.join(Ju(e));Object.assign(this,{role:"host",code:e,name:ki(t)||"\uD638\uC2A4\uD2B8",r:n,q:[],qs:0,st:null,lastAct:0,guestPeer:null,guestTk:null}),this.game=new di(e,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.unsub=n.onPeers(s=>this.hostPeers(s),()=>{}),this.tickT=setInterval(()=>this.game?.tick(),250),this.room.presence({open:e,name:this.name}).catch(()=>{}),this.hub.emit("joined",{code:e,color:"w"}),this.broadcast(this.game),this.pushHost()}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostOut(t){t.type==="state"?this.st=t:(this.q.push({s:++this.qs,t:Date.now(),m:t}),this.q.length>6&&this.q.shift()),this.schedulePush()}schedulePush(){this.pushT||(this.pushT=setTimeout(()=>{this.pushT=null,this.pushHost()},30))}pushHost(){if(!this.r||this.role!=="host")return;let t={r:"host",code:this.code,name:this.name,gtk:this.guestTk,ack:this.lastAct,hn:Date.now(),st:this.st?Ox(this.st):null,q:this.q};for(;Ux(t)>3900&&t.q.length;)t.q=t.q.slice(1);this.r.presence(t).catch(()=>{})}hostPeers(t){if(this.role!=="host"||!this.game)return;let e=t.peers.filter(s=>!s.sameTab&&s.presence?.r==="guest"&&s.presence.code===this.code),n=this.guestPeer?e.find(s=>s.peer===this.guestPeer):null;if(!n){let s=this.guestTk?e.find(r=>r.presence.tk===this.guestTk):e[0];if(s){let r=!this.guestTk;this.guestPeer=s.peer,this.guestTk=String(s.presence.tk||s.peer),this.lastAct=0,r&&(this.game.addPlayer(s.presence.name,this.guestTk),this.room.presence({open:null}).catch(()=>{}));let o=this.game.colorOfToken(this.guestTk);this.game.players[o].send=a=>this.hostOut(a),this.game.setConnected(o,!0),n=s}else if(this.guestPeer){this.guestPeer=null;let r=this.game.colorOfToken(this.guestTk);r&&this.game.setConnected(r,!1)}}if(n){let s=this.game.colorOfToken(this.guestTk),r=Array.isArray(n.presence.acts)?n.presence.acts:[];for(let o of r)o&&o.s>this.lastAct&&(this.lastAct=o.s,this.game.handle(s,o.m))}this.schedulePush()}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await this.room.join(Ju(t));Object.assign(this,{role:"guest",code:t,name:ki(e)||"\uC190\uB2D8",r:n,tk:Nx(),acts:[],as:0,lastQ:null,lastHn:0,hostSeen:!1,hostOnline:!1,joinedOk:!1}),n.presence({r:"guest",code:t,name:this.name,tk:this.tk,acts:[]}).catch(()=>{}),this.unsub=n.onPeers(s=>this.guestPeers(s),()=>{}),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{text:"\uADF8 \uCF54\uB4DC\uC758 \uBC29\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."}),this.endSession())},8e3)}guestPeers(t){if(this.role!=="guest")return;let e=t.peers.find(r=>!r.sameTab&&r.presence?.r==="host"&&r.presence.code===this.code);if(!e){this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close"));return}let n=e.presence;if(this.hostSeen=!0,this.hostOnline||(this.hostOnline=!0,this.hub.emit("open")),n.gtk&&n.gtk!==this.tk){this.joinedOk||(this.hub.emit("error",{text:"\uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC785\uB2C8\uB2E4."}),this.endSession());return}if(!n.gtk)return;this.joinedOk||(this.joinedOk=!0,clearTimeout(this.joinTimer),this.hub.emit("joined",{code:this.code,color:n.st?.you||"b"}));let s=Array.isArray(n.q)?n.q:[];if(this.lastQ===null){this.lastQ=0;for(let r of s)n.hn-r.t>3e3&&(this.lastQ=Math.max(this.lastQ,r.s))}for(let r of s)r.s>this.lastQ&&(this.lastQ=r.s,r.m?.type&&this.hub.emit(r.m.type,r.m));if(n.st&&n.hn!==this.lastHn&&(this.lastHn=n.hn,this.hub.emit("state",Fx(n.st))),typeof n.ack=="number"){let r=this.acts.length;this.acts=this.acts.filter(o=>o.s>n.ack),this.acts.length!==r&&this.pushGuest()}}pushGuest(){this.r?.presence({acts:this.acts}).catch(()=>{})}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&(this.acts.push({s:++this.as,m:t}),this.acts.length>8&&this.acts.shift(),this.pushGuest())}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"}),this.role==="host"&&this.pushHost();let t=this.r;this.detach(),setTimeout(()=>t?.leave().catch(()=>{}),600)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.pushT),this.tickT=this.joinTimer=this.pushT=null,this.unsub?.(),this.unsub=null,this.role==="host"&&this.room.presence({open:null}).catch(()=>{}),this.r=null,this.game=null,this.role=null,this.hostOnline=!1}endSession(){let t=this.r;this.detach(),t?.leave().catch(()=>{})}};var Ku="0123456789",Bx=1600,ju="faith-chess-peer-token",Qu=i=>"faith-chess-"+i.toLowerCase();function kx(){try{let i=localStorage.getItem(ju);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(ju,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function tf(){let i={debug:0},t=new URLSearchParams(location.search).get("peer");if(t){let[e,n]=t.split(":");Object.assign(i,{host:e,port:+n||9e3,path:"/",secure:!1,config:{iceServers:[]}})}return i}var ef=i=>new Promise((t,e)=>{let n=i?new window.Peer(i,tf()):new window.Peer(tf()),s=o=>{n.off("open",r);try{n.destroy()}catch{}e(o)},r=()=>{n.off("error",s),t(n)};n.once("open",r),n.once("error",s)}),pr=class{static available(){return typeof window.Peer=="function"}constructor(){this.kind="peer",this.role=null,this.hostOnline=!1}get online(){return this.role==="guest"?this.hostOnline:this.role==="host"?!!this.peer&&(!this.peer.disconnected||!!this.conn?.open):!0}async create(t){this.endSession();let e=null,n="";for(let s=0;s<5&&!e;s++){n="";for(let r=0;r<4;r++)n+=Ku[Math.floor(Math.random()*Ku.length)];try{e=await ef(Qu(n))}catch(r){if(r?.type!=="unavailable-id")throw r}}if(!e)throw new Error("no free code");Object.assign(this,{role:"host",code:n,name:ki(t)||"\uD638\uC2A4\uD2B8",peer:e,conn:null,guestTk:null}),this.game=new di(n,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.tickT=setInterval(()=>this.game?.tick(),250),e.on("connection",s=>this.hostConn(s)),e.on("disconnected",()=>{this.hub?.emit("close"),this.retryT=setTimeout(()=>this.reconnectBroker(),1e3)}),e.on("open",()=>this.hub?.emit("open")),e.on("error",s=>console.warn("[peer]",s?.type,s)),this.hub.emit("joined",{code:n,color:"w"}),this.broadcast(this.game)}reconnectBroker(){if(!(this.role!=="host"||!this.peer||this.peer.destroyed||!this.peer.disconnected)){try{this.peer.reconnect()}catch{}this.retryT=setTimeout(()=>this.reconnectBroker(),3e3)}}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostConn(t){t.on("data",e=>{if(!(this.role!=="host"||!this.game||!e||typeof e!="object")){if(e.type==="hello"){let n=String(e.tk||t.peer).slice(0,40);if(this.guestTk?n!==this.guestTk:this.ringConn&&this.ringConn!==t){t.send({type:"error",code:"busy",text:"\uD1B5\uD654 \uC911\uC785\uB2C8\uB2E4. \uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC774\uC5D0\uC694."}),setTimeout(()=>t.close(),300);return}if(this.guestTk){this.attachGuest(t,n);return}if(this.ringConn===t)return;this.ringConn=t,this.hub.emit("ring",{}),this.ringT=setTimeout(()=>{this.ringConn===t&&(this.ringConn=null,!(this.role!=="host"||!this.game||!t.open)&&(this.guestTk=n,this.game.addPlayer(e.name,n),this.attachGuest(t,n)))},Bx);return}t===this.conn&&e.type==="act"&&e.m&&typeof e.m=="object"&&this.game.handle(this.game.colorOfToken(this.guestTk),e.m)}}),t.on("close",()=>{if(t===this.ringConn){this.ringConn=null,this.hub?.emit("ringstop",{});return}if(t!==this.conn||!this.game)return;this.conn=null;let e=this.game.colorOfToken(this.guestTk);e&&this.game.setConnected(e,!1)}),t.on("error",()=>{})}attachGuest(t,e){if(this.conn&&this.conn!==t)try{this.conn.close()}catch{}this.conn=t;let n=this.game.colorOfToken(e);t.send({type:"joined",code:this.code,color:n}),this.game.players[n].send=s=>{this.conn?.open&&this.conn.send(s)},this.game.setConnected(n,!0),this.broadcast(this.game)}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await ef(null);Object.assign(this,{role:"guest",code:t,name:ki(e)||"\uC190\uB2D8",peer:n,tk:kx(),joinedOk:!1,conn:null,hostOnline:!1}),n.on("error",s=>{s?.type==="peer-unavailable"&&this.role==="guest"&&(this.joinedOk?this.scheduleRedial():(this.hub.emit("error",{code:"nonumber",text:"\uC9C0\uAE08 \uAC70\uC2E0 \uBC88\uD638\uB294 \uC5C6\uB294 \uBC88\uD638\uC785\uB2C8\uB2E4."}),this.endSession()))}),n.on("disconnected",()=>{this.role==="guest"&&setTimeout(()=>{try{this.peer?.disconnected&&!this.peer.destroyed&&this.peer.reconnect()}catch{}},1e3)}),this.dial(),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{code:"noanswer",text:"\uC0C1\uB300\uAC00 \uC804\uD654\uB97C \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694."}),this.endSession())},2e4)}dial(){if(this.role!=="guest"||!this.peer||this.peer.destroyed)return;let t=this.peer.connect(Qu(this.code),{reliable:!0,serialization:"json"});this.conn=t,t.on("open",()=>{t===this.conn&&(this.hostOnline=!0,this.hub.emit("open"),t.send({type:"hello",name:this.name,tk:this.tk}))}),t.on("data",e=>{if(!(t!==this.conn||!e?.type)){if(e.type==="joined"&&(this.joinedOk=!0,clearTimeout(this.joinTimer)),e.type==="error"&&!this.joinedOk){this.hub.emit("error",e),this.endSession();return}this.hub.emit(e.type,e)}}),t.on("close",()=>{t===this.conn&&(this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close")),this.scheduleRedial())}),t.on("error",()=>{})}scheduleRedial(){this.role!=="guest"||!this.joinedOk||this.redialT||(this.redialT=setTimeout(()=>{this.redialT=null,this.role==="guest"&&!this.hostOnline&&this.dial()},2e3))}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&this.conn?.open&&this.conn.send({type:"act",m:t})}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"});let t=this.detach();setTimeout(()=>{try{t?.destroy()}catch{}},500)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.retryT),clearTimeout(this.redialT),clearTimeout(this.ringT),this.tickT=this.joinTimer=this.retryT=this.redialT=this.ringT=null,this.ringConn=null;let t=this.peer;return this.peer=null,this.conn=null,this.game=null,this.role=null,this.hostOnline=!1,t}endSession(){let t=this.detach();try{t?.destroy()}catch{}}};var pi=(i,t={})=>new Tn({color:i,flatShading:!0,...t}),mr=(i,t={})=>new xn({color:i,flatShading:!0,shininess:90,specular:11575424,...t});function Ve(i,t,e,n=0,s=0,r=0){let o=new se(t,e);return o.position.set(n,s,r),i.add(o),o}var De={HOLE_R:.8,HOLE_SIZE:.165,STOP:-32,FIRST:28,STEP:30,PLATE:1.1,WHEEL:1.17},Ts=i=>De.FIRST+De.STEP*i,qo=i=>Ts(i)-De.STOP,Yo=i=>(i+1)%10,nf=i=>(Number(i)+9)%10,sf=i=>(i+540)%360-180,mi=Math.PI/180,rf=i=>i*i*(3-2*i),zx=11740714,Hx=8262936,$o=14264378;var Vx="#2a1414";function of(i,t,e=0,n=0,s=0){let r=new ms;for(let o=0;o<=t;o++){let a=s+o/t*Math.PI*2,l=e+Math.cos(a)*i,c=n+Math.sin(a)*i;o===0?r.moveTo(l,c):r.lineTo(l,c)}return r}var Zo=class{constructor(){this.scene=new li,this.camera=new Ce(30,1,.1,60),this.clear=new It,this.bg=new It(2364460),this.ray=new ys,this.plane=new Sn,this.phi=0,this.mode="idle",this.k=-1,this.hold=0,this.queue=[],this.pendingDigit=null,this.drag=null,this.stopHit=!1,this.lastStep=0,this.lift=0,this.liftTo=0,this.ringT=0,this.t=0,this.onDigit=()=>{},this.onSound=()=>{},this.cardKey="",this.build()}build(){let t=this.scene;t.add(new Eo(16773340,3153962,.75));let e=new Rn(16777215,1.15);e.position.set(-3,7,5),t.add(e);let n=new Rn(10475775,.35);n.position.set(4,3,-4),t.add(n),Ve(t,new Te(14,14,.2,12),pi(3809840),0,-.1,0),Ve(t,new Te(3.1,3.2,.06,10),pi(6965806),0,.03,.15);let s=new fe;t.add(s),this.root=s;let r=new hi;[[-1.7,0],[2.15,0],[2.2,.28],[-.05,1.95],[-1.35,1.95],[-1.75,1.3]].forEach(([v,P],T)=>T?r.lineTo(v,P):r.moveTo(v,P));let o=new Ii(r,{depth:3.3,bevelEnabled:!0,bevelThickness:.16,bevelSize:.16,bevelSegments:1,curveSegments:1});o.rotateY(-Math.PI/2),o.translate(1.65,0,0),this.bodyMat=pi(zx),Ve(s,o,this.bodyMat);for(let v of[-1.4,1.4])for(let P of[-1.3,1.8])Ve(s,new Te(.16,.2,.08,6),pi(1706510),v,.02,P);let a=new st(2.2,.28),l=new st(-.05,1.95),c=a.clone().add(l).multiplyScalar(.5),h=l.clone().sub(a).normalize(),u=new R(0,h.y,h.x),f=new R(0,-h.x,h.y),d=new fe;d.position.set(0,c.y,c.x).addScaledVector(f,.17),d.quaternion.setFromRotationMatrix(new ge().makeBasis(new R(1,0,0),u,f)),s.add(d),this.dial=d,this.dialN=f,this.dialUp=u;let g=this.plateTexture();Ve(d,new js(De.PLATE,20),new Tn({map:g}),0,0,.005),Ve(d,new Dn(De.WHEEL+.04,.06,4,20),mr($o),0,0,.02);let _=new hi;for(let v=0;v<=24;v++){let P=v/24*Math.PI*2,T=Math.cos(P)*De.WHEEL,C=Math.sin(P)*De.WHEEL;v?_.lineTo(T,C):_.moveTo(T,C)}_.holes.push(of(.5,12));for(let v=0;v<10;v++)_.holes.push(of(De.HOLE_SIZE,8,Math.cos(Ts(v)*mi)*De.HOLE_R,Math.sin(Ts(v)*mi)*De.HOLE_R,Math.PI/8));let m=new Ii(_,{depth:.07,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:1,curveSegments:1});this.wheel=Ve(d,m,mr(1972252,{shininess:30,specular:3813944}),0,0,.03),this.cardCanvas=document.createElement("canvas"),this.cardCanvas.width=this.cardCanvas.height=128,this.cardTex=new ci(this.cardCanvas),this.cardTex.magFilter=ve,this.cardTex.minFilter=nn,this.cardTex.colorSpace=Me,Ve(d,new js(.47,14),new rn({map:this.cardTex}),0,0,.13),Ve(d,new Dn(.48,.045,4,14),mr($o),0,0,.13),this.setCard("\uBBFF\uC74C\uC758 \uCCB4\uC2A4","\xB7\xB7\xB7\xB7");let p=new fe;p.rotation.z=De.STOP*mi,d.add(p),Ve(p,new de(.5,.11,.09),mr($o),De.HOLE_R+.22,0,.16),Ve(p,new de(.1,.1,.2),mr($o),De.HOLE_R+.44,0,.09);for(let v of[-1.05,1.05])Ve(s,new de(.34,.34,.55),pi(Hx),v,2.2,-.72),Ve(s,new de(.4,.08,.6),pi(1706510),v,2.36,-.72);let y=new fe;s.add(y),this.handset=y,this.handsetRest=new R(0,2.62,-.72),y.position.copy(this.handsetRest),Ve(y,new de(2.2,.28,.42),this.bodyMat,0,.16,0);for(let v of[-1,1]){let P=Ve(y,new de(.5,.28,.42),this.bodyMat,v*1.12,.06,0);P.rotation.z=v*.32,Ve(y,new Te(.44,.36,.34,8),this.bodyMat,v*1.38,-.12,0),Ve(y,new Te(.3,.3,.02,8),pi(1706510),v*1.38,-.3,0)}this.cordMat=pi(6164500),this.cord=Ve(s,new _e,this.cordMat),this.rebuildCord();let x=d.position.clone();this.camera.position.copy(x).addScaledVector(f,9.4).addScaledVector(u,1.5).add(new R(1.5,0,0)),this.lookAt=x.clone().addScaledVector(u,.75).add(new R(-.15,0,0)),this.camera.up.set(0,1,0),this.camera.lookAt(this.lookAt),this.hoverOff=new R(.35,.75,.9),this.hover=new R,this.nearCam=this.camera.position.clone().lerp(this.lookAt,.5).add(new R(0,-.35,0))}plateTexture(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1c0c10",e.fillRect(0,0,256,256),e.fillStyle="#f1e6c8",e.beginPath(),e.arc(128,128,126,0,Math.PI*2),e.fill(),e.strokeStyle="#b89a5a",e.lineWidth=3,e.beginPath(),e.arc(128,128,118,0,Math.PI*2),e.stroke(),e.font="bold 34px Galmuri11, sans-serif",e.textAlign="center",e.textBaseline="middle";let n=De.HOLE_R/De.PLATE*128;for(let r=0;r<10;r++){let o=Ts(r)*mi,a=128+Math.cos(o)*n,l=128-Math.sin(o)*n;e.fillStyle="#c22a2a",e.beginPath(),e.arc(a,l,21,0,Math.PI*2),e.fill(),e.fillStyle="#fff6e0",e.fillText(String(Yo(r)),a,l+1)}let s=new ci(t);return s.magFilter=ve,s.colorSpace=Me,s}setCard(t,e){let n=t+"|"+e;if(n===this.cardKey)return;this.cardKey=n;let s=this.cardCanvas.getContext("2d");s.fillStyle="#fbf4e2",s.fillRect(0,0,128,128),s.fillStyle="#c22a2a",s.fillRect(0,40,128,3),s.fillStyle=Vx,s.textAlign="center",s.textBaseline="middle",s.font="15px Galmuri11, sans-serif",s.fillText(t,64,26),s.font="bold 30px Galmuri11, sans-serif",s.fillText(e,64,74),this.cardTex.needsUpdate=!0}rebuildCord(){let t=new R(-1.38,-.2,0).applyMatrix4(this.handset.matrix.compose(this.handset.position,this.handset.quaternion,this.handset.scale)),e=new R(-1.86,.55,-.4),n=new Ks(e,new R(-2.7,.2,.6),new R(-2.6,.5,-.9),t),s=150,r=[],o=new R,a=new R,l=new R;for(let c=0;c<=s;c++){let h=c/s,u=n.getPoint(h);n.getTangent(h,o),a.crossVectors(o,new R(0,1,0)),a.lengthSq()<1e-4&&a.set(1,0,0),a.normalize(),l.crossVectors(a,o).normalize();let f=Math.PI*2*22*h,d=.075*Math.min(1,h*12,(1-h)*12);r.push(u.addScaledVector(a,Math.cos(f)*d).addScaledVector(l,Math.sin(f)*d))}this.cord.geometry.dispose(),this.cord.geometry=new So(new Js(r),s*2,.032,4,!1)}local(t,e,n){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let s=new st((e-t.x)/t.w*2-1,-((n-t.y)/t.h*2-1));this.ray.setFromCamera(s,this.camera);let r=this.dialN.clone(),o=new R;this.dial.getWorldPosition(o),this.plane.setFromNormalAndCoplanarPoint(r,o);let a=new R;if(!this.ray.ray.intersectPlane(this.plane,a))return null;let l=this.dial.worldToLocal(a);return{r:Math.hypot(l.x,l.y),a:Math.atan2(l.y,l.x)/mi}}holeAt(t){if(!t||Math.abs(t.r-De.HOLE_R)>.32)return-1;for(let e=0;e<10;e++)if(Math.abs(sf(t.a-Ts(e)))<15)return e;return-1}project(t,e,n){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let s=this.dial.localToWorld(new R(Math.cos(n*mi)*e,Math.sin(n*mi)*e,.1)).project(this.camera);return{x:t.x+(s.x+1)/2*t.w,y:t.y+(1-s.y)/2*t.h}}holeScreen(t,e){return this.project(t,De.HOLE_R,Ts(nf(e)))}get busy(){return this.mode!=="idle"||this.queue.length>0}pointerDown(t,e,n,s){if(this.busy||!this.enabled)return!1;let r=this.local(t,e,n),o=this.holeAt(r);return o<0?!1:(this.mode="drag",this.k=o,this.phi=0,this.stopHit=!1,this.lastStep=0,this.drag={a:r.a,t0:s,moved:0},!0)}pointerMove(t,e,n){if(this.mode!=="drag")return;let s=this.local(t,e,n);if(!s||s.r<.15)return;let r=sf(s.a-this.drag.a);this.drag.a=s.a,this.drag.moved+=Math.abs(r),this.setPhi(Math.max(0,Math.min(qo(this.k),this.phi-r)))}pointerUp(t){if(this.mode!=="drag")return;let e=this.k,n=t-this.drag.t0<380&&this.drag.moved<10;if(this.drag=null,n){this.mode="idle",this.phi=0,this.queue.push(Yo(e));return}this.release(this.phi>=qo(e)-14?Yo(e):null)}cancel(){this.mode==="drag"&&(this.drag=null,this.release(null))}autoDial(t){for(let e of String(t))/\d/.test(e)&&this.queue.push(Number(e))}abort(){this.queue=[],(this.mode==="auto"||this.mode==="drag")&&(this.drag=null,this.release(null)),this.pendingDigit=null}setPhi(t){let e=Math.floor(t/De.STEP);e>this.lastStep&&this.onSound("tick"),this.lastStep=e,!this.stopHit&&this.k>=0&&t>=qo(this.k)-.5&&(this.stopHit=!0,this.onSound("stop")),this.phi=t}release(t){this.mode="return",this.pendingDigit=t,this.lastStep=Math.floor(this.phi/De.STEP)}ring(t=1.6){this.ringT=Math.max(this.ringT,t)}setLift(t){this.liftTo=t}update(t){if(this.t+=t,this.mode==="idle"&&this.queue.length){let l=this.queue.shift();this.mode="auto",this.k=nf(l),this.phi=0,this.stopHit=!1,this.lastStep=0}if(this.mode==="auto"){let l=qo(this.k);this.phi<l?this.setPhi(Math.min(l,this.phi+560*t)):(this.hold+=t)>.12&&(this.hold=0,this.release(Yo(this.k)))}else if(this.mode==="return"){let l=Math.max(0,this.phi-330*t),c=Math.ceil(l/De.STEP);if(this.pendingDigit!==null&&c<this.lastStep&&this.onSound("pulse"),this.lastStep=Math.min(this.lastStep,c),this.phi=l,l<=0){this.mode="idle",this.k=-1;let h=this.pendingDigit;this.pendingDigit=null,h!==null&&this.onDigit(h)}}this.wheel.rotation.z=-this.phi*mi,this.ringT=Math.max(0,this.ringT-t);let n=(this.ringT>0?Math.min(1,this.ringT*4):0)*(Math.floor(this.t*2.5)%2===0?1:.15);this.root.rotation.z=Math.sin(this.t*2*Math.PI*23)*.022*n,this.root.position.x=Math.sin(this.t*2*Math.PI*17)*.025*n;let s=this.lift;this.lift+=(this.liftTo-this.lift)*Math.min(1,t*7),Math.abs(this.lift-this.liftTo)<.002&&(this.lift=this.liftTo);let r=this.handset,o=rf(Math.min(1,this.lift/.3)),a=rf(Math.max(0,Math.min(1,(this.lift-.3)/.7)));this.hover.copy(this.handsetRest).add(this.hoverOff),r.position.copy(this.handsetRest).lerp(this.hover,o).lerp(this.nearCam,a),r.position.y+=Math.abs(Math.sin(this.t*2*Math.PI*11))*.07*n+Math.sin(this.t*2.1)*.05*o*(1-a),r.rotation.set(-.55*o-.5*a,.2*o-.2*a,.22*o-.22*a+Math.sin(this.t*2*Math.PI*23)*.03*n),(s!==this.lift||n>0)&&this.rebuildCord()}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,l=Math.round(e.y*r),c=Math.round((e.y+e.h)*r)-l,h=n.h-l-c,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,c),t.setScissor(o,h,a,c),t.setClearColor(this.bg,1),t.clear(!0,!0,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var Se=null;function Jo(){if(!Se)try{Se=new(window.AudioContext||window.webkitAudioContext)}catch{return}Se.state==="suspended"&&Se.resume()}function ne(i,t,{type:e="square",gain:n=.08,slide:s=0,delay:r=0}={}){if(!Se)return;let o=Se.currentTime+r,a=Se.createOscillator(),l=Se.createGain();a.type=e,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),o+t),l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(Se.destination),a.start(o),a.stop(o+t+.02)}function Nn(i,t=.1,e=0){if(!Se)return;let n=Se.currentTime+e,s=Se.createBuffer(1,Se.sampleRate*i,Se.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*(1-c/r.length);let o=Se.createBufferSource();o.buffer=s;let a=Se.createGain();a.gain.value=t;let l=Se.createBiquadFilter();l.type="lowpass",l.frequency.value=900,o.connect(l).connect(a).connect(Se.destination),o.start(n)}function As(i,t,{type:e="sine",gain:n=.03,delay:s=0}={}){if(!Se)return;let r=Se.currentTime+s,o=Se.createOscillator(),a=Se.createGain();o.type=e,o.frequency.setValueAtTime(i,r),a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(n,r+.015),a.gain.setValueAtTime(n,r+t-.02),a.gain.linearRampToValueAtTime(1e-4,r+t),o.connect(a).connect(Se.destination),o.start(r),o.stop(r+t+.02)}var Kt={dialTick(){Nn(.012,.08),ne(2600,.012,{type:"square",gain:.015})},dialPulse(){Nn(.02,.16),ne(820,.02,{type:"square",gain:.03})},dialStop(){Nn(.04,.2),ne(170,.06,{type:"triangle",gain:.08})},offHook(){Nn(.05,.22),ne(240,.05,{type:"triangle",gain:.07}),As(350,.6,{gain:.012,delay:.08}),As(440,.6,{gain:.012,delay:.08})},hangUp(){Nn(.06,.28),ne(130,.09,{type:"triangle",gain:.1})},ringback(){As(440,1,{gain:.025}),As(480,1,{gain:.025})},busy(){for(let i=0;i<4;i++)As(480,.5,{gain:.025,delay:i}),As(620,.5,{gain:.025,delay:i})},ring(){for(let i=0;i<2;i++)for(let t=0;t<13;t++){let e=i*.8+t*.045;ne(t%2?1320:1580,.09,{type:"triangle",gain:.035,delay:e}),ne(t%2?2640:3160,.04,{type:"sine",gain:.012,delay:e})}},pickUp(){Nn(.05,.25),ne(300,.06,{type:"triangle",gain:.08}),ne(660,.08,{type:"sine",gain:.03,delay:.08})},move(){Nn(.06,.18),ne(180,.05,{type:"triangle",gain:.1})},capture(){Nn(.1,.25),ne(110,.12,{type:"sawtooth",gain:.08,slide:-60})},castle(){Kt.move(),setTimeout(()=>Kt.move(),90)},check(){ne(880,.08,{gain:.05}),ne(880,.08,{gain:.05,delay:.12})},select(){ne(660,.03,{type:"triangle",gain:.04})},bad(){ne(200,.25,{type:"sawtooth",gain:.06,slide:-120})},late(){ne(300,.2,{type:"triangle",gain:.06,slide:-100})},halt(){Nn(.07,.3),ne(150,.22,{type:"square",gain:.08,slide:-50}),ne(300,.12,{type:"sawtooth",gain:.04,delay:.02})},revive(){for(let i=0;i<14;i++)ne(1400-i*55+i%2*180,.03,{type:"square",gain:.025,delay:i*.07});[880,1175,1568].forEach((i,t)=>ne(i,.12,{type:"triangle",gain:.05,delay:1.1+t*.06}))},rewind(){for(let i=0;i<22;i++)ne(900+i%3*260-i*18,.035,{type:"sawtooth",gain:.022,delay:i*.055})},vanish(){ne(400,.3,{type:"sine",gain:.06,slide:-350})},shatter(){Nn(.18,.35),ne(160,.2,{type:"sawtooth",gain:.07,slide:-110});for(let i=0;i<7;i++)ne(1400+Math.random()*2200,.05,{type:"triangle",gain:.025,delay:.04+i*.035+Math.random()*.02})},start(){ne(392,.1,{gain:.06}),ne(523,.1,{gain:.06,delay:.1}),ne(659,.25,{gain:.06,delay:.2})},win(){[523,659,784,1046].forEach((i,t)=>ne(i,.2,{gain:.06,delay:t*.12}))},lose(){[392,349,311,261].forEach((i,t)=>ne(i,.25,{type:"triangle",gain:.06,delay:t*.15}))},ui(){ne(520,.03,{type:"triangle",gain:.04})},secret(){ne(90,.06,{type:"sine",gain:.03})}};var Ko=class{constructor(t,e){this.out=t,this.ctx=t.getContext("2d",{alpha:!1}),this.layers=e,this.tmp=new Map}resize(t,e,n=window.devicePixelRatio||1){let s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n));this.out.width!==s&&(this.out.width=s),this.out.height!==r&&(this.out.height=r)}draw(){let{ctx:t,out:e}=this;t.fillStyle="#000",t.fillRect(0,0,e.width,e.height);for(let n of this.layers){let s=n.width,r=n.height;if(!s||!r)continue;let o=e.width/s,a=e.height/r,l=f=>Math.abs(f-Math.round(f))<1e-6;if(l(o)&&l(a)){t.imageSmoothingEnabled=!1,t.drawImage(n,0,0,e.width,e.height);continue}let c=Math.max(1,Math.ceil(Math.max(o,a)-1e-6)),h=this.tmp.get(n);h||(h=document.createElement("canvas"),this.tmp.set(n,h)),(h.width!==s*c||h.height!==r*c)&&(h.width=s*c,h.height=r*c);let u=h.getContext("2d");u.imageSmoothingEnabled=!1,u.clearRect(0,0,h.width,h.height),u.drawImage(n,0,0,h.width,h.height),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="low",t.drawImage(h,0,0,e.width,e.height)}}get integer(){let t=this.out.width/(this.layers[1]?.width||this.layers[0].width);return Math.abs(t-Math.round(t))<1e-6}};var Gx="v0.4",Cn={img:null,settled:!1,loading:null};function lf(i="assets/title.png"){return Cn.loading||(Cn.loading=new Promise(t=>{let e=new Image,n=s=>{Cn.img=s?e:null,Cn.settled=!0,t(Cn.img)};e.onload=()=>(e.decode?e.decode().catch(()=>{}):Promise.resolve()).then(()=>n(!0)),e.onerror=()=>n(!1),setTimeout(()=>{Cn.settled||(Cn.settled=!0,t(null))},4e3),e.src=i})),Cn.loading}function cf(i,t,{online:e=null,settings:n=!0,tagline:s="\uAC19\uC740 WiFi \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694"}={}){let r=i.pal;if(!Cn.settled){i.rect(0,0,Et,Oe,"#000");return}let o=Cn.img;if(o){i.ctx.imageSmoothingEnabled=!1,i.ctx.drawImage(o,0,0,Et,Oe);let c=i.ctx.createLinearGradient(0,0,0,170);c.addColorStop(0,"rgba(0,0,0,0.55)"),c.addColorStop(1,"rgba(0,0,0,0)"),i.ctx.fillStyle=c,i.ctx.fillRect(0,0,Et,170)}else i.dim(.28),i.vignette();i.frame(),o||i.rect(10,52,Et-20,92,"rgba(0,0,0,0.5)"),i.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",Et/2,60,{scale:3,font:14}),i.letter("FAITH CHESS",Et/2,120,{scale:1,font:9,spacing:3}),o||(i.pillar(12,160,430),i.pillar(246,160,430));let a=o?408:364;i.rect(o?14:30,a,o?Et-28:Et-60,o?62:50,o?"rgba(0,0,0,0.72)":"rgba(0,0,0,0.55)"),i.text(s,Et/2,a+6,{font:9,align:"center"}),Math.floor(t/500)%2===0&&i.text("\uD654\uBA74\uC744 \uB204\uB974\uBA74 \uC2DC\uC791\uD569\uB2C8\uB2E4",Et/2,a+20,{font:11,color:r.accentHi,align:"center"});let l=o?438:440;i.hLine(30,l,Et-60),i.text("COPYRIGHT 2026",34,l+6,{font:9,color:r.accent}),i.text(Gx,Et-34,l+6,{font:9,color:r.accent,align:"right"}),e!==null&&i.text(e?"\u25CF":"\u25CB",16,462,{font:9,color:e?Qt.green:r.dim}),n&&i.button("settings",Et-50,12,38,16,"\uC124\uC815",{font:9})}function hf(i,t,e){let n=[],s=i.status==="playing";if(i.lastMove&&(n.push({sq:i.lastMove.from,color:"#f2c14e",opacity:.22}),n.push({sq:i.lastMove.to,color:"#f2c14e",opacity:.32})),t.sel!=null){n.push({sq:t.sel,color:"#7fe9ff",opacity:.5});for(let r of t.legal)n.push({sq:r.to,color:r.capture?"#ff5a4a":"#7ad17a",opacity:.42})}if(i.check&&s){let r=i.pieces.find(o=>o.type==="k"&&o.color===i.turn);r&&n.push({sq:r.sq,color:"#ff2a2a",opacity:.35+Math.sin(e/120)*.15})}return n}function Wx(i){let t=i.result||{},e=t.winner===i.you,n=!t.winner,s=n?"\uBB34\uC2B9\uBD80":e?"\uC2B9\uB9AC!":"\uD328\uBC30\u2026",r={checkmate:"\uCCB4\uD06C\uBA54\uC774\uD2B8",stalemate:"\uC2A4\uD14C\uC77C\uBA54\uC774\uD2B8",insufficient:"\uAE30\uBB3C \uBD80\uC871",fifty:"50\uC218 \uADDC\uCE59",resign:e?"\uC0C1\uB300 \uAE30\uAD8C":"\uAE30\uAD8C",disconnect:e?"\uC0C1\uB300 \uC811\uC18D \uC885\uB8CC":"\uC811\uC18D \uC885\uB8CC",fouls:e?"\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C":"\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C",bare:e?"\uBC18\uCE59 \uC801\uBC1C \xB7 \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC74C":"\uBC18\uCE59 \uC801\uBC1C \xB7 \uD0B9\uB9CC \uB0A8\uC74C"}[t.result]||"";return{head:s,why:r,won:e,draw:n}}function uf(i,t,e,n,s,r){let o=i.pal,a=e.you,l=a==="w"?"b":"w",c=e.status==="playing";i.vignette(),t&&t.flash>0&&i.rect(0,0,Et,Oe,`rgba(255,248,230,${(t.flash*.7).toFixed(3)})`),i.rect(0,0,Et,56,"rgba(0,0,0,0.5)"),i.frame();let u=((p,y,x)=>{if(i.measure(p,y)<=x)return p;let v=p;for(;v.length>1&&i.measure(v+"\u2026",y)>x;)v=v.slice(0,-1);return v+"\u2026"})(e.names[l]||"?","11b",64);i.text(`\uC0C1\uB300 \xB7 ${l==="w"?"\uBC31":"\uD751"}`,20,10,{font:9,color:o.accent}),i.text(u,20,21,{font:"11b",color:e.connected[l]?o.ink:o.dim}),i.text(e.connected[l]?"\u25CF":"\u25CB",24+i.measure(u,"11b"),22,{font:9,color:e.connected[l]?Qt.green:Qt.warn}),af(i,20,38,e.caught?.[l]||0),qx(i,e,s),i.button("suspect",184,10,74,28,"\uC758\uC2EC",{style:"danger",font:14,disabled:!c||!!e.pending}),i.text(`\uC81C ${e.round}\uAD6D \xB7 \uBC29 ${e.code}`,256,42,{font:9,color:o.dim,align:"right"});let f=null;n.online?c&&!e.connected[l]&&(f=["\uC0C1\uB300 \uC5F0\uACB0 \uB04A\uAE40 \xB7 30\uCD08 \uC548\uC5D0 \uC548 \uC624\uBA74 \uC2B9\uB9AC",Qt.warn]):f=["\uC5F0\uACB0\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",Qt.warn],f&&(i.panel(10,60,Et-20,18,{fill:"rgba(10,6,8,0.9)",border:f[1],shadow:!1}),i.text(f[0],Et/2,64,{font:9,align:"center",color:f[1]})),i.plaque(6,380,Et-12,94);let d=e.names[a]||"?",g=`\uB098 \xB7 ${a==="w"?"\uBC31":"\uD751"}`;if(i.text(g,16,389,{font:9,color:o.accent}),af(i,16+i.measure(g,9)+10,389,e.caught?.[a]||0),i.text(d,16,400,{font:"11b"}),i.text(e.connected[a]?"\u25CF":"\u25CB",20+i.measure(d,"11b"),401,{font:9,color:Qt.green}),c){let p=e.turn===a,y=e.check&&p?Qt.warn:p?o.accent:o.lineLo;i.panel(150,404,106,18,{fill:p?o.btnPrimary:"#14121a",border:y,shadow:!1});let x=p?e.check?"\uCCB4\uD06C! \uB0B4 \uCC28\uB840":"\uB0B4 \uCC28\uB840":e.check?"\uC0C1\uB300 \uCCB4\uD06C":"\uC0C1\uB300 \uCC28\uB840";i.text(x,203,407,{font:11,align:"center",color:e.check&&p?Qt.warn:p?o.accentHi:o.dim})}else i.text("\uB300\uAD6D \uC885\uB8CC",203,407,{font:11,align:"center",color:o.dim});let _=Math.max(0,e.eraseReadyAt-r),m=_<=0&&c;if(i.text("\uC9C0\uC6B0\uAE30",16,428,{font:9,color:o.accent}),i.bar(52,429,156,8,c?1-_/Le.ERASE_COOLDOWN_MS:0,m?Math.floor(s/250)%2?Qt.cyan:"#4fb6cc":"#6a3a2a"),i.text(m?"\uC900\uBE44\uB428":c?`${Math.ceil(_/1e3)}\uCD08`:"-",256,428,{font:9,align:"right",color:m?Qt.cyan:o.dim}),i.text("\uC0C1\uB300 \uB9D0\uC744 \uAE38\uAC8C \uB20C\uB800\uB2E4 \uB5BC\uBA74 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4",16,442,{font:9,color:o.dim}),i.button("settings",14,455,40,14,"\uC124\uC815",{font:9}),c&&(n.confirmResign?(i.text("\uC815\uB9D0 \uAE30\uAD8C?",128,457,{font:9,color:Qt.warn,align:"right"}),i.button("resign:yes",134,455,36,14,"\uC608",{font:9,style:"danger"}),i.button("resign:no",176,455,80,14,"\uC544\uB2C8\uC624",{font:9})):i.button("resign",216,455,40,14,"\uAE30\uAD8C",{font:9})),n.grab){let p=Math.min(1,(performance.now()-n.grab.t0p)/Le.LONG_PRESS_MS),y=i.ctx,x=n.grab.x,v=n.grab.y-22;y.strokeStyle=p>=1?Qt.cyan:"rgba(255,255,255,0.7)",y.lineWidth=2,y.beginPath(),y.arc(x,v,8,-Math.PI/2,-Math.PI/2+p*Math.PI*2),y.stroke(),p>=1&&i.text("\uB5BC\uBA74 \uC9C0\uC6C0",x,v-22,{font:9,align:"center",color:Qt.cyan})}if(Kx(i,n.toasts,s,f?84:62),e.pending?.kind==="pick"){i.dim(.5),i.plaque(14,150,Et-28,150),i.text("\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?",Et/2,164,{font:"11b",align:"center"});let p=Math.max(0,e.pending.deadline-r);i.bar(28,184,Et-56,6,p/Le.PICK_TIMEOUT_MS,p<3e3?Qt.warn:o.accent),e.pending.choices.forEach((y,x)=>i.button("pick:"+y,23+x*46,200,40,44,on[y],{font:9})),i.text("\uB9DE\uD788\uBA74 \uBC18\uCE59 \uD398\uB110\uD2F0: \uC0C1\uB300\uC758 \uAC19\uC740",Et/2,256,{font:9,align:"center",color:o.dim}),i.text("\uB4F1\uAE09 \uB9D0 \uD558\uB098\uAC00 \uC0B0\uC0B0\uC870\uAC01 \uB0A9\uB2C8\uB2E4",Et/2,269,{font:9,align:"center",color:o.dim}),i.text("\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C\uBA74 \uC0C1\uB300 \uD328\uBC30",Et/2,282,{font:9,align:"center",color:o.dim})}else if(n.promo)i.dim(.4),i.plaque(30,180,Et-60,84),i.text("\uC2B9\uAE09\uD560 \uB9D0\uC744 \uACE0\uB974\uC138\uC694",Et/2,194,{font:11,align:"center"}),["q","r","b","n"].forEach((p,y)=>i.button("promo:"+p,38+y*49,214,44,34,on[p],{font:9}));else if(e.status==="over"){let p=Wx(e);i.dim(.55),i.plaque(25,150,Et-50,160),p.won?i.letter(p.head,Et/2,164,{scale:2,font:14}):i.bigText(p.head,Et/2,166,{scale:2,font:14,color:p.draw?o.ink:Qt.warn}),i.text(p.why,Et/2,210,{font:11,align:"center"});let y=e.rematchVotes[a];e.rematchVotes[l]&&!y&&i.text("\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4",Et/2,232,{font:9,align:"center",color:o.accentHi}),y&&i.text("\uC0C1\uB300\uC758 \uC751\uB2F5\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911\u2026",Et/2,232,{font:9,align:"center",color:o.dim}),i.button("rematch",37,262,94,28,"\uC7AC\uB300\uACB0",{style:"primary",disabled:y||!e.connected[l]}),i.button("leave",139,262,94,28,"\uB098\uAC00\uAE30")}n.rewindFx&&Yx(i,n.rewindFx,performance.now()),n.bubble&&Jx(i,n.bubble,performance.now())}var ec={x:99,y:3,w:72,h:50};function nc(){let i=ec;return{x:i.x+4,y:i.y+4,w:i.w-8,h:i.h-8}}function Xx(){let i=ec;return[i.x+i.w/2,i.y+i.h]}function qx(i,t,e){let n=i.pal,s=ec,r=i.ctx,o=t.status==="playing"?t.turn:t.status==="over"?t.result?.winner:null;i.rect(s.x-1,s.y-1,s.w+2,s.h+2,"#000"),i.rect(s.x,s.y,s.w,s.h,n.accent),i.rect(s.x,s.y,s.w,1,n.accentHi),i.rect(s.x,s.y,1,s.h,n.accentHi),i.rect(s.x,s.y+s.h-1,s.w,1,n.accentLo),i.rect(s.x+s.w-1,s.y,1,s.h,n.accentLo),i.rect(s.x+2,s.y+2,s.w-4,s.h-4,n.accentLo);for(let[l,c]of[[s.x+1,s.y+1],[s.x+s.w-4,s.y+1],[s.x+1,s.y+s.h-4],[s.x+s.w-4,s.y+s.h-4]])i.rect(l,c,3,3,n.accentHi);let a=nc();r.clearRect(a.x,a.y,a.w,a.h),i.box(a.x-1,a.y-1,a.w+2,a.h+2,o&&Math.floor(e/300)%2===0?n.accentHi:Qt.gold)}var jl=1500;function Yx(i,t,e){let n=e-t.t0;if(n<0||n>jl)return;let s=i.ctx;s.save();let r=n<150?n/150:n>jl-300?(jl-n)/300:1;i.rect(0,56,Et,324,`rgba(60,120,170,${(.16*r).toFixed(3)})`);for(let o=0;o<4;o++){let a=56+((324-(n*.45+o*83))%324+324)%324;i.rect(0,Math.round(a),Et,2,`rgba(230,240,255,${(.28*r).toFixed(3)})`),i.rect(0,Math.round(a)+3,Et,1,`rgba(255,90,210,${(.18*r).toFixed(3)})`)}s.globalAlpha=r*(Math.floor(n/250)%2?.75:1),i.bigText("\u25C0\u25C0 \uB418\uAC10\uAE30",16,64,{scale:1,font:14,color:"#ffffff",align:"left"}),t.undone&&i.text(`${t.undone}\uC218 \uBB34\uB984`,18,84,{font:9,color:"#cfe9ff"}),s.restore()}function af(i,t,e,n){let s=i.pal;i.text("\uBC18\uCE59",t,e,{font:9,color:n?Qt.warn:s.dim});let r=t+i.measure("\uBC18\uCE59",9)+4;for(let o=0;o<Le.FOUL_LIMIT;o++){let a=o<n,l=r+o*10,c=e+2;i.rect(l+1,c+1,7,7,"#000"),i.rect(l,c,7,7,a?"#d4382c":"rgba(0,0,0,0.6)"),i.box(l,c,7,7,a?"#ff8a7a":s.lineLo),a&&(i.rect(l+3,c+1,1,3,"#fff"),i.rect(l+3,c+5,1,1,"#fff"))}}var Ql=1600,tc=new Map;function $x(i){let t=i.getContext("2d"),e=t.getImageData(0,0,i.width,i.height),n=e.data;for(let s=3;s<n.length;s+=4)n[s]=n[s]>=110?255:0;return t.putImageData(e,0,0),i}function Zx(i,t){let e=t;if(tc.has(e))return tc.get(e);let n="\uB3D9\uC791 \uADF8\uB9CC!",s=2,r=(i.measure(n,14)+4)*s,o=19*s,a=Xx(),l=t==="w"?166:104,c=114,h=r/2+12,u=o/2+10,f=15,d=G=>{let L=Math.sin(G*12.9898+(t==="w"?7.1:3.3))*43758.5453;return L-Math.floor(L)},g=[];for(let G=0;G<f*2;G++){let L=G/(f*2)*Math.PI*2-Math.PI/2+.11,F=G%2===0,H=F?1.2+d(G)*.22:.97+d(G+30)*.05,J=F?1.45+d(G+60)*.45:1;g.push([l+Math.cos(L)*h*H,c+Math.sin(L)*u*J])}let _=Math.atan2(a[1]-c,a[0]-l),m=0,p=1/0;g.forEach(([G,L],F)=>{if(F%2)return;let H=Math.abs(Math.atan2(L-c,G-l)-_);H=Math.min(H,Math.PI*2-H),H<p&&(p=H,m=F)}),g[m]=a;let y=G=>{let L=document.createElement("canvas");L.width=Et,L.height=Oe;let F=L.getContext("2d");return G(F),$x(L)},x=G=>{G.beginPath(),g.forEach(([L,F],H)=>H?G.lineTo(L,F):G.moveTo(L,F)),G.closePath()},v=y(G=>{x(G),G.fillStyle="#1a0a10",G.fill(),G.lineJoin="miter",G.miterLimit=12,G.lineWidth=5,G.strokeStyle="#1a0a10",G.stroke()}),P=y(G=>{x(G),G.fillStyle="#fff2a6",G.fill()}),T=document.createElement("canvas");T.width=Et,T.height=Oe;let C=T.getContext("2d");C.imageSmoothingEnabled=!1,C.globalAlpha=.6,C.drawImage(v,3,3),C.globalAlpha=1,C.drawImage(v,0,0),C.drawImage(P,0,0);let U=i.ctx;i.ctx=C,i.bigText(n,l,Math.round(c-o/2)+1,{scale:s,font:14,color:"#d4141e",shadow:!0}),i.ctx=U;let b=g.map(G=>G[0]),w=g.map(G=>G[1]),O={x:Math.floor(Math.min(...b))-4,y:Math.floor(Math.min(...w))-4,cx:l,cy:c};O.w=Math.ceil(Math.max(...b))+8-O.x,O.h=Math.ceil(Math.max(...w))+8-O.y;let X={sprite:T,box:O};return tc.set(e,X),X}function Jx(i,t,e){let n=e-t.t0;if(n<0||n>Ql)return;let{sprite:s,box:r}=Zx(i,t.by),o=n<90?.6+n/90*.55:n<160?1.15-(n-90)/70*.15:1,a=n>=160&&n<420?Math.floor(n/40)%2?2:-2:0,l=i.ctx;l.save(),l.imageSmoothingEnabled=!1,l.globalAlpha=n>Ql-300?(Ql-n)/300:1;let c=Math.round(r.w*o),h=Math.round(r.h*o),u=Math.round(r.cx-(r.cx-r.x)*o)+a,f=Math.round(r.cy-(r.cy-r.y)*o);l.drawImage(s,r.x,r.y,r.w,r.h,u,f,c,h),l.restore()}function Kx(i,t,e,n){let s=i.pal,r={secret:"#b0a49a",bad:Qt.warn,late:Qt.late,good:Qt.green,warn:Qt.gold,info:s.ink},o=n;for(let a of t.slice(-3)){let l=e-a.t,c=l>4e3?Math.max(0,1-(l-4e3)/1e3):1,h=i.lines(a.text,Et-32,9);i.ctx.save(),i.ctx.globalAlpha=c;let u=Math.max(...h.map(f=>i.measure(f,9)))+8;i.rect(10,o-1,u,h.length*12+2,"rgba(0,0,0,0.62)"),h.forEach((f,d)=>i.text(f,14,o+d*12,{font:9,color:r[a.kind]||s.ink})),i.ctx.restore(),o+=h.length*12+4}}function ff(i,t){let e=i.pal;i.dim(.55),i.plaque(8,22,Et-16,438),i.text("\uC2DC\uAC01 \uC124\uC815",Et/2,34,{font:"11b",align:"center",color:e.accentHi}),i.text("\uBC14\uAFB8\uBA74 \uBC14\uB85C \uC801\uC6A9\uB418\uACE0 \uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4",Et/2,48,{font:9,align:"center",color:e.dim}),Ss.forEach((n,s)=>{let r=64+s*44;i.text(n.label,22,r,{font:9,color:e.accent}),i.button(`th:${n.id}:-1`,20,r+12,26,22,"<",{font:11}),i.text(Lu(n.id,t[n.id]),Et/2,r+17,{font:11,align:"center"}),i.button(`th:${n.id}:1`,Et-46,r+12,26,22,">",{font:11})}),i.button("settings:close",Et/2-50,420,100,26,"\uB2EB\uAE30",{style:"primary"})}var he=globalThis.FAITH_TARGET||"lan",We=i=>document.getElementById(i),mf=We("gl"),On=We("ui"),jx=We("out"),Rs=We("dom"),ic=We("stage"),ie=new Fo(mf),rt=new Bo(On),gr=new Ko(jx,[mf,On]),qt=new ko,A={mode:"boot",view:null,offset:0,toasts:[],sel:null,legal:[],promo:null,confirmResign:!1,pointers:new Map,grab:null,btnPid:null,touchMax:0,bubble:null,rewindFx:null,info:null,roomParam:new URLSearchParams(location.search).get("room"),err:"",settings:!1,theme:Pu(),lan:null,roomT:null,roomChecked:he!=="artifact",shareMsg:null},rc=i=>`${location.origin}${location.pathname}?room=${i}`,zi={x:8,y:76,w:254,h:270},xe=he==="web"?new Zo:null;ie.phoneStage=xe;A.call={digits:"",calling:!1,ringbackT:null,ringFx:0,pickup:0,qr:!1,autoDialed:!1};A.phonePid=null;xe&&(xe.onSound=i=>({tick:Kt.dialTick,pulse:Kt.dialPulse,stop:Kt.dialStop})[i]?.(),xe.onDigit=Qx);var Qo=()=>he==="web"&&!!A.roomT&&A.mode==="lobby"&&!A.settings&&!A.call.calling&&A.call.digits.length<4;function oc(){let i=We("name"),t=(i?i.value:cc()).trim().slice(0,12);try{localStorage.setItem("faith-chess-name",t)}catch{}return t}function Qx(i){Qo()&&(A.call.digits||(xe.setLift(.3),Kt.offHook()),A.call.digits+=i,A.err="",A.call.digits.length===4&&ty())}async function ty(){let i=A.call.digits;A.call.calling=!0,Kt.ringback(),A.call.ringbackT=setInterval(()=>Kt.ringback(),3e3);try{qt.use(A.roomT),await A.roomT.join(i,oc()),A.call.calling&&A.mode==="lobby"&&(A.mode="waiting-join")}catch(t){console.warn(t),_r("\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694.")}}function ac(){clearInterval(A.call.ringbackT),A.call.ringbackT=null}function _r(i){ac();let t=A.call.calling||A.call.digits;A.call.calling=!1,A.call.digits="",xe?.abort(),xe?.setLift(0),i?(A.err=i,Kt.busy()):t&&Kt.hangUp()}function gf(){let i=getComputedStyle(document.body),t=document.body.clientWidth-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight),e=document.body.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom),n=window.devicePixelRatio||1,s=Math.max(.5,Math.min(t/St,e/un)),r=Math.ceil(s*n),o=Math.floor(s*n),a=s;r/n<=s*1.025?a=r/n:o>=1&&o/n>=s*.92&&(a=o/n),document.documentElement.style.setProperty("--s",String(a)),document.documentElement.style.setProperty("--fs",String(Math.max(1,Math.round(a*n))/n)),A.scale=a,gr.resize(St*a,un*a,n),ie.setNativeSize(gr.out.width,gr.out.height),ic.style.transform="";let l=ic.getBoundingClientRect(),c=l.left*n%1,h=l.top*n%1;(c||h)&&(ic.style.transform=`translate(${-c/n}px, ${-h/n}px)`)}addEventListener("resize",gf);gf();var ey=(i,t)=>i.x>=t.x&&i.x<t.x+t.w&&i.y>=t.y&&i.y<t.y+t.h;function xr(i){let t=On.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*St,y:(i.clientY-t.top)/t.height*un}}function lc(i){A.theme=i,Uo(i),ie.applyTheme(i),rt.setTheme(i);let t=lr[i.frame],e=document.documentElement.style;e.setProperty("--accent",t.accent),e.setProperty("--accent-hi",t.accentHi),e.setProperty("--line",t.line),e.setProperty("--ink",t.ink),e.setProperty("--dim",t.dim),e.setProperty("--btn",t.btn),e.setProperty("--btn-primary",t.btnPrimary)}var ny=()=>Date.now()+A.offset,ta=()=>A.view?.you;function ea(i){return A.view?.pieces.find(t=>t.sq===i)||null}function iy(){let i=A.view,t=new Array(64).fill(null);for(let e of i.pieces)t[e.sq]={id:e.id,type:e.type,color:e.color,shield:e.shield};return{board:t,turn:i.turn,castling:i.castling,ep:i.ep,halfmove:0,fullmove:1,lastMove:null}}function sy(i,t="info"){A.toasts.push({text:i,kind:t,t:performance.now()}),A.toasts.length>4&&A.toasts.shift()}function _f(){if(location.hostname!=="localhost"&&location.hostname!=="127.0.0.1")return location.origin+"/";let i=A.info?.addresses?.[0];return i?`http://${i.address}:${A.info.port}/`:location.origin+"/"}function xf(){A.sel=null,A.legal=[],A.promo=null,A.confirmResign=!1}qt.addEventListener("error",i=>{he==="web"&&A.call.calling?_r(i.detail.text):A.err=i.detail.text,["waiting","lobby","waiting-join"].includes(A.mode)&&Cs()});qt.addEventListener("joined",()=>{A.err="",sc(),he==="web"&&A.call.calling&&(ac(),Kt.pickUp())});qt.addEventListener("ring",()=>{xe?.ring(1.7),Kt.ring(),A.call.ringFx=performance.now()});qt.addEventListener("ringstop",()=>{A.call.ringFx=0,xe&&(xe.ringT=0)});qt.addEventListener("toast",i=>{let{text:t,kind:e}=i.detail;sy(t,e),{secret:Kt.secret,bad:Kt.bad,late:Kt.late,warn:Kt.ui,info:Kt.ui,good:Kt.ui}[e]?.()});qt.addEventListener("event",i=>{let{name:t,check:e,by:n,at:s}=i.detail;t==="start"?(xf(),Kt.start()):t==="move"||t==="capture"||t==="castle"?(Kt[t](),e&&setTimeout(()=>Kt.check(),120),t==="capture"&&n&&n===ta()&&ie.attackZoom(s)):t==="penalty"?(ie.shatter(i.detail.at),Kt.shatter()):t==="rewind"?(A.sel=null,A.legal=[],A.promo=null,A.rewindFx={t0:performance.now(),undone:i.detail.undone},ie.rewind(),Kt.rewind()):t==="revive"?(ie.reviveAt(i.detail.at),Kt.revive()):t==="suspect"?(A.bubble={by:n,t0:performance.now()},Kt.halt()):t==="vanish"&&Kt.vanish()});qt.addEventListener("state",i=>{let t=i.detail,e=A.view;A.view=t,A.offset=t.serverNow-Date.now(),ie.setSide(t.you==="w"?1:-1),t.status==="waiting"?(A.mode="waiting",sc(),ie.setMode("title")):(A.mode!=="game"&&(he==="web"&&qt.kind==="peer"&&t.status==="playing"&&(A.call.pickup=performance.now(),xe.setLift(1),A.call.calling||Kt.pickUp()),he==="web"&&(ac(),A.call.calling=!1,A.call.digits="",A.call.ringFx=0,A.call.qr=!1),A.mode="game",sc(),ie.clearPieces()),ie.setMode("game"),ie.sync(t.pieces,t.lastMove)),(!e||e.turn!==t.turn||e.status!==t.status||e.round!==t.round)&&(A.sel=null,A.legal=[],A.promo=null),e&&e.status==="playing"&&t.status==="over"&&(A.confirmResign=!1,t.result?.winner===t.you?Kt.win():t.result?.winner?Kt.lose():Kt.ui())});function sc(){Rs.hidden=!0,Rs.innerHTML=""}function jo(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function cc(){try{return localStorage.getItem("faith-chess-name")||""}catch{return""}}function Cs(){A.mode="lobby",A.settings=!1,ie.setMode("title"),Rs.hidden=!1;let i=he==="lan",t=A.roomT,e=!i&&!t;if(he==="web")return ry();let n=(A.roomParam||"").replace(/[^A-Za-z0-9]/g,"").slice(0,4);Rs.innerHTML=`
    <form class="panel" id="lobby" autocomplete="off">
      <label for="name">\uC774\uB984</label>
      <input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${jo(cc())}">
      <div class="row">
        <button type="button" id="create" class="primary" ${e?"disabled":""}>\uBC29 \uB9CC\uB4E4\uAE30</button>
        ${i?'<button type="button" id="quick">\uBE60\uB978 \uB300\uC804</button>':""}
      </div>
      <label for="code">\uBC29 \uCF54\uB4DC\uB85C \uCC38\uAC00</label>
      <div class="row tight"><input id="code" class="code" maxlength="4" placeholder="ABCD" value="${jo(n)}" ${e?"disabled":""}><button type="submit" id="join" class="narrow" ${e?"disabled":""}>\uCC38\uAC00</button></div>
      ${he==="artifact"?'<label>\uC5F4\uB9B0 \uBC29</label><div id="rooms" class="rooms"></div>':""}
      <div class="row"><button type="button" id="bot">\uBD07\uACFC \uC5F0\uC2B5</button></div>
      <div class="err" id="err" role="alert">${jo(A.err||"")}</div>
      <div class="hint" id="hint"></div>
    </form>`;let s=We("hint");i?s.textContent="\uAC19\uC740 WiFi\uC758 \uC0C1\uB300\uB294 \uC544\uB798 \uC8FC\uC18C\uB098 QR\uB85C \uC811\uC18D\uD569\uB2C8\uB2E4.":A.roomChecked?e&&he==="web"?s.textContent="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD574 \uBCF4\uC138\uC694. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":e?s.textContent="\uB450 \uD3F0 \uB300\uC804\uC740 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD55C \uC0C1\uD0DC\uB85C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":he==="web"?s.textContent=A.roomParam?"\uC774\uB984\uC744 \uC801\uACE0 \uCC38\uAC00\uB97C \uB204\uB974\uC138\uC694.":"\uBC29\uC744 \uB9CC\uB4E4\uBA74 \uB9C1\uD06C\uAC00 \uC0DD\uAE41\uB2C8\uB2E4. \uC0C1\uB300\uC5D0\uAC8C \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uAC70\uB098 \uCF54\uB4DC\uB97C \uC54C\uB824 \uC8FC\uC138\uC694.":s.textContent="\uD55C \uD3F0\uC5D0\uC11C \uBC29\uC744 \uB9CC\uB4E4\uACE0, \uB2E4\uB978 \uD3F0\uC5D0\uC11C\uB294 \uC5F4\uB9B0 \uBC29\uC744 \uB204\uB974\uAC70\uB098 \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694.":s.textContent="\uB450 \uD3F0 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uB294 \uC911\uC785\uB2C8\uB2E4\u2026";let r=We("name"),o=We("code"),a=()=>{let u=r.value.trim().slice(0,12);try{localStorage.setItem("faith-chess-name",u)}catch{}return u},l=u=>{We("err").textContent=u},c=u=>async(...f)=>{Jo(),A.err="",l("");try{await u(...f)}catch(d){l("\uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."),console.warn(d)}},h=c(async u=>{let f=(typeof u=="string"?u:o.value).trim().toUpperCase();if(f.length!==4){l("\uBC29 \uCF54\uB4DC 4\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694.");return}if(i){if(!qt.online)return l("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");qt.use(A.lan),qt.send({type:"join",code:f,name:a()})}else qt.use(A.roomT),await A.roomT.join(f,a()),A.mode="waiting-join",l("\uBC29\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uC911\u2026")});if(We("create").onclick=c(async()=>{if(i){if(!A.lan.online)return l("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");qt.use(A.lan),qt.send({type:"create",name:a()})}else qt.use(A.roomT),await A.roomT.create(a())}),i&&(We("quick").onclick=c(async()=>{if(!A.lan.online)return l("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");qt.use(A.lan),qt.send({type:"quick",name:a()})})),We("bot").onclick=c(async()=>{qt.use(new dr).start(a()||"\uB098")}),We("lobby").onsubmit=u=>{u.preventDefault(),h()},he==="artifact"&&t){let u=f=>{let d=We("rooms");if(d){if(d.textContent="",!f.length){let g=document.createElement("div");g.className="empty",g.textContent="\uC544\uC9C1 \uC5F4\uB9B0 \uBC29\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",d.append(g);return}for(let g of f.slice(0,4)){let _=document.createElement("button");_.type="button",_.textContent=`${g.code} \xB7 ${g.name}`,_.onclick=()=>h(g.code),d.append(_)}}};t.onLobby=u,u(t.openRooms())}A.roomParam||r.focus({preventScroll:!0})}function ry(){Rs.innerHTML=`<form class="panel slim" id="lobby" autocomplete="off"><label for="name">\uC774\uB984</label><input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${jo(cc())}" enterkeyhint="done"></form>`,We("lobby").onsubmit=i=>{i.preventDefault(),We("name").blur()},A.call.calling||xe.setLift(A.call.digits?.3:0),A.roomParam&&!A.call.autoDialed&&/^\d{4}$/.test(A.roomParam)&&(A.call.autoDialed=!0,setTimeout(()=>{Qo()&&!A.call.digits&&!xe.busy&&xe.autoDial(A.roomParam)},600))}function na(i){A.grab&&(i==null||A.grab.pid===i)&&(clearTimeout(A.grab.timer),A.grab=null)}function oy(i,t,e,n){na();let s={pid:e.pointerId,pieceId:t.id,sq:i,x:n.x,y:n.y,t0:e.timeStamp,t0p:performance.now(),armed:!1,timer:null};s.timer=setTimeout(()=>{s.armed=!0,Kt.select();try{navigator.vibrate?.(15)}catch{}},Le.LONG_PRESS_MS),A.grab=s}var hc=()=>A.mode==="game"&&!A.call.pickup&&A.view?.status==="playing"&&!A.promo&&!A.settings&&A.view.pending?.kind!=="pick";On.addEventListener("pointerdown",i=>{if(Jo(),i.button!==0)return;A.lastPointerType=i.pointerType;let t=xr(i),e=A.pointers.size===0;A.pointers.set(i.pointerId,{x:t.x,y:t.y,moved:!1}),A.touchMax=Math.max(A.touchMax,A.pointers.size);try{On.setPointerCapture(i.pointerId)}catch{}if(e&&(rt.pressedId=rt.hit(t.x,t.y),A.btnPid=rt.pressedId?i.pointerId:null),he==="web"&&A.mode==="lobby"&&document.activeElement?.blur?.(),xe&&A.btnPid!==i.pointerId&&A.phonePid==null&&Qo()&&ey(t,zi)&&xe.pointerDown(zi,t.x,t.y,i.timeStamp)){A.phonePid=i.pointerId;return}if(A.btnPid===i.pointerId||!hc())return;let n=ie.pickSquare(t.x,t.y),s=ea(n);s&&s.color!==ta()&&!A.grab&&oy(n,s,i,t)});On.addEventListener("pointermove",i=>{if(A.phonePid===i.pointerId){let n=xr(i);xe.pointerMove(zi,n.x,n.y);return}let t=A.pointers.get(i.pointerId);if(!t)return;let e=xr(i);Math.hypot(e.x-t.x,e.y-t.y)>6&&(t.moved=!0,na(i.pointerId))});On.addEventListener("pointerup",i=>{if(A.phonePid===i.pointerId){A.pointers.delete(i.pointerId),A.phonePid=null,xe.pointerUp(i.timeStamp);return}let t=A.pointers.get(i.pointerId);if(A.pointers.delete(i.pointerId),!t)return;let e=xr(i),n=A.grab&&A.grab.pid===i.pointerId?A.grab:null;if(n&&(na(i.pointerId),i.timeStamp-n.t0>=Le.LONG_PRESS_MS||n.armed)){let s=A.view?.pieces.find(r=>r.id===n.pieceId);s&&s.color!==ta()&&hc()&&qt.send({type:"erase",square:s.sq});return}if(A.btnPid===i.pointerId){let s=rt.pressedId;rt.pressedId=null,A.btnPid=null,s&&rt.hit(e.x,e.y)===s&&hy(s);return}if(!(t.moved||A.settings)){if(A.mode==="title"){Cs();return}A.mode==="game"&&ay(ie.pickSquare(e.x,e.y))}});On.addEventListener("pointercancel",i=>{A.pointers.delete(i.pointerId),A.phonePid===i.pointerId&&(A.phonePid=null,xe.cancel()),A.btnPid===i.pointerId&&(rt.pressedId=null,A.btnPid=null),na(i.pointerId)});for(let i of["touchstart","touchmove","touchend","touchcancel"])On.addEventListener(i,t=>{t.cancelable&&t.preventDefault(),t.touches&&(A.touchMax=Math.max(A.touchMax,t.touches.length))},{passive:!1});document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("gesturechange",i=>i.preventDefault());On.addEventListener("contextmenu",i=>{if(i.preventDefault(),A.lastPointerType&&A.lastPointerType!=="mouse"||!hc())return;let t=xr(i),e=ie.pickSquare(t.x,t.y),n=ea(e);n&&n.color!==ta()&&qt.send({type:"erase",square:e})});function ay(i){let t=A.view;if(!t||A.promo)return;if(i<0){A.sel=null,A.legal=[];return}let e=ea(i);if(t.status==="playing"){if(A.sel!=null){let n=A.legal.find(s=>s.to===i);if(n){n.promotion?A.promo={from:n.from,to:n.to}:(qt.send({type:"move",from:n.from,to:n.to}),A.sel=null,A.legal=[]);return}}if(e&&e.color===t.you&&t.turn===t.you){if(A.sel===i){A.sel=null,A.legal=[];return}A.sel=i,A.legal=ws(iy(),i),Kt.select()}else A.sel=null,A.legal=[]}}function df(i){A.settings=i,A.touchMax=0,A.mode==="lobby"&&(i?Rs.hidden=!0:Cs())}async function ly(){let i=A.view?.code;if(!i)return;let t=rc(i),e=n=>{A.shareMsg={text:n,t:performance.now()}};if(navigator.share)try{await navigator.share({title:"\uBBFF\uC74C\uC758 \uCCB4\uC2A4",text:`\uBBFF\uC74C\uC758 \uCCB4\uC2A4 \uD55C \uD310! \uBC29 \uCF54\uB4DC ${i}`,url:t}),e("\uBCF4\uB0C8\uC2B5\uB2C8\uB2E4");return}catch(n){if(n?.name==="AbortError")return}try{await navigator.clipboard.writeText(t),e("\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4")}catch{e("\uC8FC\uC18C\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD558\uC138\uC694")}}async function cy(){Jo(),A.err="",_r();try{qt.use(A.roomT),await A.roomT.create(oc())}catch(i){console.warn(i),A.err="\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uD574 \uBCF4\uC138\uC694.",Kt.busy()}}function hy(i){if(Kt.ui(),i==="settings")return df(!0);if(i==="settings:close")return df(!1);if(i.startsWith("th:")){let[,t,e]=i.split(":");lc(Iu(A.theme,t,Number(e)));return}if(i==="suspect")return qt.send({type:"suspect"});if(i.startsWith("pick:"))return qt.send({type:"pick",pieceType:i.slice(5)});if(i.startsWith("promo:")){qt.send({type:"move",from:A.promo.from,to:A.promo.to,promotion:i.slice(6)}),A.promo=null,A.sel=null,A.legal=[];return}if(i==="resign"){A.confirmResign=!0;return}if(i==="resign:yes")return A.confirmResign=!1,qt.send({type:"resign"});if(i==="resign:no"){A.confirmResign=!1;return}if(i==="rematch")return qt.send({type:"rematch"});if(i==="share")return ly();if(i==="qr"){A.call.qr=!0;return}if(i==="qr:close"){A.call.qr=!1;return}if(i==="call:create")return cy();if(i==="call:bot"){_r(),qt.use(new dr).start(oc()||"\uB098");return}if(i==="call:clear"){A.call.calling&&(A.roomT?.close(),A.mode="lobby"),A.err="",_r();return}(i==="leave"||i==="cancel-wait")&&(he==="web"&&(i==="cancel-wait"&&Kt.hangUp(),A.call.ringFx=0,A.call.qr=!1),qt.leave(),A.lan&&qt.use(A.lan),A.view=null,xf(),ie.clearPieces(),bf(),Cs())}function yf(){let i=zi;rt.ctx.clearRect(i.x,i.y,i.w,i.h),rt.box(i.x-1,i.y-1,i.w+2,i.h+2,rt.pal.accent),rt.box(i.x-2,i.y-2,i.w+4,i.h+4,"#000")}function vf(i,t,e,n,s){let r=rt.pal;rt.text(i,St/2,e,{font:9,align:"center",color:r.accent});let o=30,a=6,l=Math.round(St/2-(4*o+3*a)/2);for(let c=0;c<4;c++){let h=l+c*(o+a),u=c<t.length;rt.rect(h,e+12,o,30,"#000"),rt.box(h,e+12,o,30,u?r.accentHi:r.lineLo),u?rt.bigText(t[c],h+o/2,e+14,{scale:2,font:11,color:r.accentHi}):s&&c===t.length&&Math.floor(n/400)%2===0&&rt.rect(h+9,e+35,12,2,r.accent)}}function Mf(){rt.dim(.78),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",St/2,8,{scale:2,font:14}),rt.button("settings",St-50,12,38,16,"\uC124\uC815",{font:9}),yf()}function uy(i){let t=performance.now()-A.call.ringFx;if(!A.call.ringFx||t>1700)return;let e=Math.floor(t/400)%2===0,n=e?Math.round(Math.sin(i/18)*2):0;rt.bigText("\uB530\uB974\uB989!",St/2+n,zi.y+8,{scale:2,font:14,color:e?Qt.gold:rt.pal.ink})}function fy(i){let t=rt.pal,e=A.call;Mf(),xe.setCard(e.calling?"\uAC70\uB294 \uC911":"\uC0C1\uB300 \uBC88\uD638",e.digits.padEnd(4,"\xB7")),vf("\uC0C1\uB300 \uBC88\uD638",e.digits,350,i,!e.calling),e.digits&&!A.settings&&rt.button("call:clear",St-46,364,36,24,"\uB04A\uAE30",{font:9});let n,s=t.dim;A.roomT?A.err?(n=A.err,s=Qt.warn):e.calling?(n="\uB69C\uB974\uB974\u2026 \uAC70\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),s=t.accentHi):e.digits?n=`\uB098\uBA38\uC9C0 ${4-e.digits.length}\uC790\uB9AC\uB97C \uAC70\uC138\uC694`:n="\uC0C1\uB300 \uBC88\uD638 4\uC790\uB9AC\uB97C \uB2E4\uC774\uC5BC\uB85C \uAC70\uC138\uC694":(n="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",s=Qt.warn),rt.lines(n,St-24,9).slice(0,2).forEach((o,a)=>rt.text(o,St/2,398+a*11,{font:9,align:"center",color:s})),rt.button("call:create",16,422,128,26,"\uB0B4 \uBC88\uD638 \uB9CC\uB4E4\uAE30",{style:"primary",font:11,disabled:!A.roomT||e.calling}),rt.button("call:bot",150,422,104,26,"\uBD07\uACFC \uC5F0\uC2B5",{font:11,disabled:e.calling}),rt.text("\uAD6C\uBA4D\uC744 \uBA48\uCDA4\uC1E0\uAE4C\uC9C0 \uB3CC\uB824 \uB193\uAC70\uB098 \uD1A1 \uB204\uB974\uC138\uC694",St/2,456,{font:9,align:"center",color:t.dim})}function dy(i){let t=A.view,e=rt.pal;Mf(),xe.setCard("\uB0B4 \uBC88\uD638",t.code),uy(i),vf("\uB0B4 \uBC88\uD638",t.code,350,i,!1);let n=A.call.ringFx&&performance.now()-A.call.ringFx<1700,s=n?"\uB530\uB974\uB989! \uC804\uD654\uAC00 \uC654\uC2B5\uB2C8\uB2E4":"\uC774 \uBC88\uD638\uB85C \uC804\uD654\uAC00 \uC624\uBA74 \uC2DC\uC791\uD569\uB2C8\uB2E4"+".".repeat(Math.floor(i/400)%4);rt.text(s,St/2,398,{font:9,align:"center",color:n?Qt.gold:e.dim}),rt.button("share",16,414,120,26,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{style:"primary",font:11}),rt.button("qr",142,414,50,26,"QR",{font:11}),rt.button("cancel-wait",198,414,56,26,"\uB04A\uAE30",{font:11});let r=A.shareMsg;if(r&&performance.now()-r.t<3e3?rt.text(r.text,St/2,446,{font:9,align:"center",color:e.accentHi}):rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,St/2,446,{font:9,align:"center",color:e.dim}),qt.online||rt.text("\u25CB \uAD50\uD658\uAD6D\uACFC \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",St/2,460,{font:9,align:"center",color:Qt.warn}),A.call.qr){rt.dim(.8);let o=rc(t.code);rt.panel(30,110,St-60,250),rt.text("\uCE74\uBA54\uB77C\uB85C \uCC0D\uC73C\uBA74 \uBC14\uB85C \uAC78\uB9BD\uB2C8\uB2E4",St/2,122,{font:9,align:"center",color:e.accent});let a=rt.qr(o,0,-9999,1)-2,l=Math.max(2,Math.floor(180/(a+2))),c=(a+2)*l;rt.qr(o,Math.round(St/2-c/2),138,l),rt.button("qr:close",St/2-40,330,80,22,"\uB2EB\uAE30",{font:11})}}function py(i){rt.rect(0,0,St,un,"#000"),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",St/2,8,{scale:2,font:14}),yf(),rt.bigText("\uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4",St/2,362,{scale:2,font:11,color:Qt.gold});let t=A.view;t&&rt.text(`${t.names.w||"?"}(\uBC31)  vs  ${t.names.b||"?"}(\uD751)`,St/2,400,{font:9,align:"center",color:rt.pal.dim})}function my(){let i=rt.pal;if(rt.dim(.25),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",St/2,18,{scale:2,font:14}),rt.button("settings",St-50,12,38,16,"\uC124\uC815",{font:9}),he==="lan"){rt.plaque(40,330,St-80,136),rt.text("\uC0C1\uB300 \uC811\uC18D \uC8FC\uC18C",St/2,340,{font:9,color:i.accent,align:"center"});let t=_f(),e=rt.qr(t,St/2-33,352,2);rt.text(t.replace(/^https?:\/\//,"").replace(/\/$/,""),St/2,356+e,{font:9,align:"center"})}rt.text(qt.online||A.roomT?"\u25CF \uC5F0\uACB0\uB428":"\u25CB \uC5F0\uACB0 \uC911\u2026",14,462,{font:9,color:qt.online||A.roomT?Qt.green:i.dim})}function gy(i){if(he==="web")return dy(i);let t=A.view,e=rt.pal;if(rt.dim(.35),rt.vignette(),rt.frame(),rt.plaque(20,60,St-40,340),rt.text("\uC0C1\uB300\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),St/2,74,{font:11,align:"center",color:e.dim}),rt.text("\uBC29 \uCF54\uB4DC",St/2,100,{font:9,align:"center",color:e.accent}),rt.letter(t.code,St/2,112,{scale:3,font:14}),he==="lan"){let n=`${_f()}?room=${t.code}`,s=rt.qr(n,St/2-41,180,2);rt.text(n.replace(/^https?:\/\//,""),St/2,184+s,{font:9,align:"center"})}else if(he==="web"){let n=rc(t.code),s=rt.qr(n,St/2-41,166,2);rt.text(n.replace(/^https?:\/\//,""),St/2,170+s,{font:9,align:"center"}),rt.button("share",St/2-60,192+s,120,24,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{font:11,style:"primary"});let r=A.shareMsg;r&&performance.now()-r.t<3e3?rt.text(r.text,St/2,222+s,{font:9,align:"center",color:e.accentHi}):rt.text("\uAC19\uC774 \uC788\uC73C\uBA74 QR\uC744 \uCC0D\uC5B4\uB3C4 \uB429\uB2C8\uB2E4",St/2,222+s,{font:9,align:"center",color:e.dim}),qt.online||rt.text("\u25CB \uC5F0\uACB0 \uC11C\uBC84\uC640 \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",St/2,312,{font:9,align:"center",color:Qt.warn})}else["\uB2E4\uB978 \uD3F0\uC5D0\uC11C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uACE0",'"\uC5F4\uB9B0 \uBC29"\uC5D0\uC11C \uC774 \uBC29\uC744 \uB204\uB974\uAC70\uB098',"\uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694."].forEach((s,r)=>rt.text(s,St/2,200+r*14,{font:9,align:"center"})),rt.text("\uB450 \uD3F0 \uBAA8\uB450 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD574\uC57C \uD569\uB2C8\uB2E4",St/2,262,{font:9,align:"center",color:e.dim});rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,St/2,330,{font:9,color:e.dim,align:"center"}),rt.button("cancel-wait",St/2-40,352,80,22,"\uCDE8\uC18C",{font:11})}function bf(){let i=Vo(),t=[];i.board.forEach((e,n)=>{e&&t.push({sq:n,id:e.id,type:e.type,color:e.color,shield:!1})}),ie.sync(t,null)}var pf=performance.now();function Sf(i){let t=Math.min(.1,(i-pf)/1e3);pf=i,A.mode==="game"&&A.view?ie.setHighlights(hf(A.view,A,i)):ie.setHighlights([]),ie.setSelected(A.mode==="game"&&A.sel!=null?ea(A.sel)?.id:null);let e=A.view;if(A.mode==="game"&&e){let n=A.bubble&&performance.now()-A.bubble.t0<1600,s=n?A.bubble.by:e.status==="over"&&e.result?.winner||e.turn;ie.kingView={rect:nc(),shown:s,mode:n?"shout":"turn"}}else ie.kingView=null;A.call.pickup&&performance.now()-A.call.pickup>950&&(A.call.pickup=0,ie.flash=1),ie.phoneView=he==="web"&&(["lobby","waiting-join","waiting"].includes(A.mode)||A.call.pickup)?{rect:zi}:null,xe&&(xe.enabled=Qo()),ie.render(t),rt.begin(),A.mode==="title"?cf(rt,i,{online:he==="lan"?qt.online:null,tagline:he==="lan"?void 0:"\uC628\uB77C\uC778 \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694"}):A.call.pickup?py(i):(A.mode==="lobby"||A.mode==="waiting-join")&&he==="web"?fy(i):A.mode==="lobby"||A.mode==="waiting-join"?my():A.mode==="waiting"&&A.view?gy(i):A.mode==="game"&&A.view?uf(rt,ie,A.view,{...A,online:qt.online},i,ny()):A.mode==="boot"&&(rt.rect(0,0,St,un,"#000"),rt.text("\uBD88\uB7EC\uC624\uB294 \uC911\u2026",St/2,un/2-6,{align:"center",color:rt.pal.dim})),A.settings&&(ff(rt,A.theme),rt.text(`\uD130\uCE58 \uD655\uC778: \uB3D9\uC2DC\uC5D0 \uC190\uAC00\uB77D ${A.touchMax}\uAC1C \uC778\uC2DD`,St/2,449,{font:9,align:"center",color:A.touchMax>=2?Qt.cyan:rt.pal.dim})),gr.draw(),requestAnimationFrame(Sf)}async function _y(){requestAnimationFrame(Sf);let i=lf();try{await Promise.race([Promise.all(ku.map(t=>document.fonts.load(t))),new Promise(t=>setTimeout(t,3e3))])}catch{}if(he==="lan")try{A.info=await(await fetch("/api/info")).json()}catch{}ie.theme=A.theme,await ie.init(A.info?.textures||[]),lc(A.theme),bf(),await i,A.mode="title",he==="lan"?(A.lan=qt.use(new zo),A.lan.connect(),A.roomParam&&!A.lan.token&&Cs()):he==="web"?A.roomT=pr.available()?new pr:null:Xo.open().then(t=>{A.roomT=t,A.roomChecked=!0,A.mode==="lobby"&&Cs()})}_y();window.__dbg={app:A,scene:ie,hub:qt,presenter:gr,phone:xe,PHONE_RECT:zi,squareToScreen:i=>ie.squareToScreen(i),applyTheme:lc};
