var _l="160";var gp=0,Ah=1,xp=2;var rf=1,yp=2,ri=3,bi=0,hn=1,We=2;var vi=0,Ps=1,Zi=2,Rh=3,Ch=4,_p=5,Wi=100,vp=101,Mp=102,Ph=103,Ih=104,bp=200,Ep=201,Sp=202,wp=203,Pc=204,Ic=205,Tp=206,Ap=207,Rp=208,Cp=209,Pp=210,Ip=211,Lp=212,Dp=213,Up=214,Np=0,Op=1,Fp=2,To=3,Bp=4,kp=5,Hp=6,zp=7,es=0,Fr=1,Vp=2,Fn=0,Gp=1,Wp=2,qp=3,Xp=4,Yp=5,$p=6;var of=300,Ds=301,Us=302,Lc=303,Dc=304,ia=306,Mr=1e3,Nn=1001,Uc=1002,Se=1003,Lh=1004;var $a=1005;var Ye=1006,Zp=1007;var br=1008;var Mi=1009,Kp=1010,Jp=1011,vl=1012,af=1013,yi=1014,_i=1015,Er=1016,cf=1017,lf=1018,Xi=1020,jp=1021,On=1023,Qp=1024,t0=1025,Yi=1026,Ns=1027,e0=1028,hf=1029,n0=1030,uf=1031,ff=1033,Za=33776,Ka=33777,Ja=33778,ja=33779,Dh=35840,Uh=35841,Nh=35842,Oh=35843,df=36196,Fh=37492,Bh=37496,kh=37808,Hh=37809,zh=37810,Vh=37811,Gh=37812,Wh=37813,qh=37814,Xh=37815,Yh=37816,$h=37817,Zh=37818,Kh=37819,Jh=37820,jh=37821,Qa=36492,Qh=36494,tu=36495,i0=36283,eu=36284,nu=36285,iu=36286;var Ao=2300,Ro=2301,tc=2302,su=2400,ru=2401,ou=2402;var pf=3e3,$i=3001,s0=3200,r0=3201,Ml=0,o0=1,Sn="",me="srgb",ci="srgb-linear",bl="display-p3",sa="display-p3-linear",Co="linear",ve="srgb",Po="rec709",Io="p3";var hs=7680;var au=519,a0=512,c0=513,l0=514,mf=515,h0=516,u0=517,f0=518,d0=519,cu=35044;var lu="300 es",Nc=1035,oi=2e3,Lo=2001,Ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ec=Math.PI/180,Oc=180/Math.PI;function Xs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function p0(i,t){return(i%t+t)%t}function nc(i,t,e){return(1-e)*i+e*t}function hu(i){return(i&i-1)===0&&i!==0}function Fc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ur(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],_=s[1],x=s[4],v=s[7],S=s[2],E=s[5],T=s[8];return r[0]=o*y+a*_+c*S,r[3]=o*m+a*x+c*E,r[6]=o*p+a*v+c*T,r[1]=l*y+h*_+u*S,r[4]=l*m+h*x+u*E,r[7]=l*p+h*v+u*T,r[2]=f*y+d*_+g*S,r[5]=f*m+d*x+g*E,r[8]=f*p+d*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ic.makeScale(t,e)),this}rotate(t){return this.premultiply(ic.makeRotation(-t)),this}translate(t,e){return this.premultiply(ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ic=new te;function gf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function m0(){let i=Do("canvas");return i.style.display="block",i}var uu={};function xr(i){i in uu||(uu[i]=!0,console.warn(i))}var fu=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),du=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jr={[ci]:{transfer:Co,primaries:Po,toReference:i=>i,fromReference:i=>i},[me]:{transfer:ve,primaries:Po,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sa]:{transfer:Co,primaries:Io,toReference:i=>i.applyMatrix3(du),fromReference:i=>i.applyMatrix3(fu)},[bl]:{transfer:ve,primaries:Io,toReference:i=>i.convertSRGBToLinear().applyMatrix3(du),fromReference:i=>i.applyMatrix3(fu).convertLinearToSRGB()}},g0=new Set([ci,sa]),de={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!g0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Jr[t].toReference,s=Jr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Jr[i].primaries},getTransfer:function(i){return i===Sn?Co:Jr[i].transfer}};function Is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,Uo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=Do("canvas")),us.width=t.width,us.height=t.height;let n=us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Do("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Is(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Is(e[n]/255)*255):e[n]=Is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},x0=0,No=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Xs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rc(s[o].image)):r.push(rc(s[o]))}else r=rc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var y0=0,Tn=class i extends Ei{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=Ye,o=br,a=On,c=Mi,l=i.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Xs(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===$i?me:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==of)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===me?$i:pf}set encoding(t){xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===$i?me:Sn}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=of;Tn.DEFAULT_ANISOTROPY=1;var be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,v=(d+1)/2,S=(p+1)/2,E=(h+f)/4,T=(u+y)/4,I=(g+m)/4;return x>v&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=T/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=I/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=I/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-y)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bc=class extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$i?me:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new No(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Oo=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kc=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*y,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let S=Math.sqrt(x),E=Math.atan2(S,p*_);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}let v=a*_;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+y*v,m===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oc=new R,pu=new Ke,Ki=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Qr.subVectors(this.max,fr),fs.subVectors(t.a,fr),ds.subVectors(t.b,fr),ps.subVectors(t.c,fr),di.subVectors(ds,fs),pi.subVectors(ps,ds),ki.subVectors(fs,ps);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-ki.z,ki.y,di.z,0,-di.x,pi.z,0,-pi.x,ki.z,0,-ki.x,-di.y,di.x,0,-pi.y,pi.x,0,-ki.y,ki.x,0];return!ac(e,fs,ds,ps,Qr)||(e=[1,0,0,0,1,0,0,0,1],!ac(e,fs,ds,ps,Qr))?!1:(to.crossVectors(di,pi),e=[to.x,to.y,to.z],ac(e,fs,ds,ps,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ti=[new R,new R,new R,new R,new R,new R,new R,new R],In=new R,jr=new Ki,fs=new R,ds=new R,ps=new R,di=new R,pi=new R,ki=new R,fr=new R,Qr=new R,to=new R,Hi=new R;function ac(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=t.dot(Hi),l=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var _0=new Ki,dr=new R,cc=new R,Os=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(cc)),this.expandByPoint(dr.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new R,lc=new R,eo=new R,mi=new R,hc=new R,no=new R,uc=new R,Sr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lc.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(lc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=mi.dot(this.direction),c=-mi.dot(eo),l=mi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lc).addScaledVector(eo,f),d}intersectSphere(t,e){ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){hc.subVectors(e,t),no.subVectors(n,t),uc.crossVectors(hc,no);let o=this.direction.dot(uc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);let c=a*this.direction.dot(no.crossVectors(mi,no));if(c<0)return null;let l=a*this.direction.dot(hc.cross(mi));if(l<0||c+l>o)return null;let h=-a*mi.dot(uc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(v0,t,M0)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),gi.crossVectors(n,xn),gi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),gi.crossVectors(n,xn)),gi.normalize(),io.crossVectors(xn,gi),s[0]=gi.x,s[4]=io.x,s[8]=xn.x,s[1]=gi.y,s[5]=io.y,s[9]=xn.y,s[2]=gi.z,s[6]=io.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],_=n[3],x=n[7],v=n[11],S=n[15],E=s[0],T=s[4],I=s[8],M=s[12],b=s[1],N=s[5],V=s[9],W=s[13],L=s[2],O=s[6],z=s[10],F=s[14],B=s[3],X=s[7],J=s[11],j=s[15];return r[0]=o*E+a*b+c*L+l*B,r[4]=o*T+a*N+c*O+l*X,r[8]=o*I+a*V+c*z+l*J,r[12]=o*M+a*W+c*F+l*j,r[1]=h*E+u*b+f*L+d*B,r[5]=h*T+u*N+f*O+d*X,r[9]=h*I+u*V+f*z+d*J,r[13]=h*M+u*W+f*F+d*j,r[2]=g*E+y*b+m*L+p*B,r[6]=g*T+y*N+m*O+p*X,r[10]=g*I+y*V+m*z+p*J,r[14]=g*M+y*W+m*F+p*j,r[3]=_*E+x*b+v*L+S*B,r[7]=_*T+x*N+v*O+S*X,r[11]=_*I+x*V+v*z+S*J,r[15]=_*M+x*W+v*F+S*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+y*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],_=u*m*l-y*f*l+y*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,v=h*y*l-g*u*l+g*a*d-o*y*d-h*a*p+o*u*p,S=g*u*c-h*y*c-g*a*f+o*y*f+h*a*m-o*u*m,E=e*_+n*x+s*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=_*T,t[1]=(y*f*r-u*m*r-y*s*d+n*m*d+u*s*p-n*f*p)*T,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*T,t[4]=x*T,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*T,t[8]=v*T,t[9]=(g*u*r-h*y*r-g*n*d+e*y*d+h*n*p-e*u*p)*T,t[10]=(o*y*r-g*a*r+g*n*l-e*y*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*T,t[12]=S*T,t[13]=(h*y*s-g*u*s+g*n*f-e*y*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*y*s-g*n*c+e*y*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,y=o*h,m=o*u,p=a*u,_=c*l,x=c*h,v=c*u,S=n.x,E=n.y,T=n.z;return s[0]=(1-(y+p))*S,s[1]=(d+v)*S,s[2]=(g-x)*S,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+x)*T,s[9]=(m-_)*T,s[10]=(1-(f+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);let l=1/r,h=1/o,u=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=oi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===oi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=oi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h,g,y;if(a===oi)g=(o+r)*u,y=-2*u;else if(a===Lo)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new R,Ln=new ue,v0=new R(0,0,0),M0=new R(1,1,1),gi=new R,io=new R,xn=new R,mu=new ue,gu=new Ke,Fo=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gu.setFromEuler(this),this.setFromQuaternion(gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fo.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},b0=0,xu=new R,gs=new Ke,ni=new ue,so=new R,pr=new R,E0=new R,S0=new Ke,yu=new R(1,0,0),_u=new R(0,1,0),vu=new R(0,0,1),w0={type:"added"},T0={type:"removed"},qe=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Fo,n=new Ke,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new te}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?so.copy(t):so.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(pr,so,this.up):ni.lookAt(so,pr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ni),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(w0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(T0)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,E0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,S0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};qe.DEFAULT_UP=new R(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new R,ii=new R,fc=new R,si=new R,xs=new R,ys=new R,Mu=new R,dc=new R,pc=new R,mc=new R,ro=!1,Ts=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),ii.subVectors(n,e),fc.subVectors(t,e);let o=Dn.dot(Dn),a=Dn.dot(ii),c=Dn.dot(fc),l=ii.dot(ii),h=ii.dot(fc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(t,e,n,s,r,o,a,c){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),ii.subVectors(t,e),Dn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,n),ys.subVectors(r,n),dc.subVectors(t,n);let c=xs.dot(dc),l=ys.dot(dc);if(c<=0&&l<=0)return e.copy(n);pc.subVectors(t,s);let h=xs.dot(pc),u=ys.dot(pc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(xs,o);mc.subVectors(t,r);let d=xs.dot(mc),g=ys.dot(mc);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ys,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Mu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Mu,a);let p=1/(m+y+f);return o=y*p,a=f*p,e.copy(n).addScaledVector(xs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=p0(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=gc(o,r,t+1/3),this.g=gc(o,r,t),this.b=gc(o,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=sc(t.r),this.g=sc(t.g),this.b=sc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return de.fromWorkingColorSpace(en.copy(this),t),Math.round($e(en.r*255,0,255))*65536+Math.round($e(en.g*255,0,255))*256+Math.round($e(en.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=me){de.fromWorkingColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(oo);let n=nc(xi.h,oo.h,e),s=nc(xi.s,oo.s,e),r=nc(xi.l,oo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new wt;wt.NAMES=xf;var A0=0,li=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Ps,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Ic,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ic&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ge=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new R,ao=new tt,wn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cu&&(t.usage=this.usage),t}};var Bo=class extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ko=class extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ct=class extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var R0=0,En=new ue,xc=new qe,_s=new R,yn=new Ki,mr=new Ki,Ge=new R,le=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gf(t)?ko:Bo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return xc.lookAt(t),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(yn.min,mr.min),yn.expandByPoint(Ge),Ge.addVectors(yn.max,mr.max),yn.expandByPoint(Ge)):(yn.expandByPoint(mr.min),yn.expandByPoint(mr.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ge.fromBufferAttribute(a,l),c&&(_s.fromBufferAttribute(t,l),Ge.add(_s)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new R,h[b]=new R;let u=new R,f=new R,d=new R,g=new tt,y=new tt,m=new tt,p=new R,_=new R;function x(b,N,V){u.fromArray(s,b*3),f.fromArray(s,N*3),d.fromArray(s,V*3),g.fromArray(o,b*2),y.fromArray(o,N*2),m.fromArray(o,V*2),f.sub(u),d.sub(u),y.sub(g),m.sub(g);let W=1/(y.x*m.y-m.x*y.y);isFinite(W)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-y.y).multiplyScalar(W),_.copy(d).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(W),l[b].add(p),l[N].add(p),l[V].add(p),h[b].add(_),h[N].add(_),h[V].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let b=0,N=v.length;b<N;++b){let V=v[b],W=V.start,L=V.count;for(let O=W,z=W+L;O<z;O+=3)x(n[O+0],n[O+1],n[O+2])}let S=new R,E=new R,T=new R,I=new R;function M(b){T.fromArray(r,b*3),I.copy(T);let N=l[b];S.copy(N),S.sub(T.multiplyScalar(T.dot(N))).normalize(),E.crossVectors(I,N);let W=E.dot(h[b])<0?-1:1;c[b*4]=S.x,c[b*4+1]=S.y,c[b*4+2]=S.z,c[b*4+3]=W}for(let b=0,N=v.length;b<N;++b){let V=v[b],W=V.start,L=V.count;for(let O=W,z=W+L;O<z;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new wn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bu=new ue,zi=new Sr,co=new Os,Eu=new R,vs=new R,Ms=new R,bs=new R,yc=new R,lo=new R,ho=new tt,uo=new tt,fo=new tt,Su=new R,wu=new R,Tu=new R,po=new R,mo=new R,Bt=class extends qe{constructor(t=new le,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(yc.fromBufferAttribute(u,t),o?lo.addScaledVector(yc,h):lo.addScaledVector(yc.sub(e),h))}e.add(lo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(co.containsPoint(zi.origin)===!1&&(zi.intersectSphere(co,Eu)===null||zi.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(bu.copy(r).invert(),zi.copy(t.ray).applyMatrix4(bu),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,S=x;v<S;v+=3){let E=a.getX(v),T=a.getX(v+1),I=a.getX(v+2);s=go(this,p,t,n,l,h,u,E,T,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let _=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=go(this,o,t,n,l,h,u,_,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,S=x;v<S;v+=3){let E=v,T=v+1,I=v+2;s=go(this,p,t,n,l,h,u,E,T,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let _=m,x=m+1,v=m+2;s=go(this,o,t,n,l,h,u,_,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function C0(i,t,e,n,s,r,o,a){let c;if(t.side===hn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===bi,a),c===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(mo);return l<e.near||l>e.far?null:{distance:l,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,vs),i.getVertexPosition(c,Ms),i.getVertexPosition(l,bs);let h=C0(i,t,e,n,vs,Ms,bs,po);if(h){s&&(ho.fromBufferAttribute(s,a),uo.fromBufferAttribute(s,c),fo.fromBufferAttribute(s,l),h.uv=Ts.getInterpolation(po,vs,Ms,bs,ho,uo,fo,new tt)),r&&(ho.fromBufferAttribute(r,a),uo.fromBufferAttribute(r,c),fo.fromBufferAttribute(r,l),h.uv1=Ts.getInterpolation(po,vs,Ms,bs,ho,uo,fo,new tt),h.uv2=h.uv1),o&&(Su.fromBufferAttribute(o,a),wu.fromBufferAttribute(o,c),Tu.fromBufferAttribute(o,l),h.normal=Ts.getInterpolation(po,vs,Ms,bs,Su,wu,Tu,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};Ts.getNormal(vs,Ms,bs,u.normal),h.face=u}return h}var ie=class i extends le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function g(y,m,p,_,x,v,S,E,T,I,M){let b=v/T,N=S/I,V=v/2,W=S/2,L=E/2,O=T+1,z=I+1,F=0,B=0,X=new R;for(let J=0;J<z;J++){let j=J*N-W;for(let dt=0;dt<O;dt++){let $=dt*b-V;X[y]=$*_,X[m]=j*x,X[p]=L,l.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(dt/T),u.push(1-J/I),F+=1}}for(let J=0;J<I;J++)for(let j=0;j<T;j++){let dt=f+j+O*J,$=f+j+O*(J+1),et=f+(j+1)+O*(J+1),pt=f+(j+1)+O*J;c.push(dt,$,pt),c.push($,et,pt),B+=6}a.addGroup(d,B,M),d+=B,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=Fs(i[e]);for(let s in n)t[s]=n[s]}return t}function P0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yf(i){return i.getRenderTarget()===null?i.outputColorSpace:de.workingColorSpace}var I0={clone:Fs,merge:an},L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=P0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ho=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Le=class extends Ho{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ec*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Es=-90,Ss=1,Hc=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(Es,Ss,t,e);s.layers=this.layers,this.add(s);let r=new Le(Es,Ss,t,e);r.layers=this.layers,this.add(r);let o=new Le(Es,Ss,t,e);o.layers=this.layers,this.add(o);let a=new Le(Es,Ss,t,e);a.layers=this.layers,this.add(a);let c=new Le(Es,Ss,t,e);c.layers=this.layers,this.add(c);let l=new Le(Es,Ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Bs=class extends Tn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zc=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===$i?me:Sn),this.texture=new Bs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ie(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:vi});r.uniforms.tEquirect.value=e;let o=new Bt(s,r),a=e.minFilter;return e.minFilter===br&&(e.minFilter=Ye),new Hc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_c=new R,U0=new R,N0=new te,Un=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_c.subVectors(n,e).cross(U0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||N0.getNormalMatrix(t),s=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new Os,xo=new R,Tr=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],y=s[10],m=s[11],p=s[12],_=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-d,v-p).normalize(),n[1].setComponents(c+r,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+h,m+g,v+_).normalize(),n[3].setComponents(c-o,f-h,m-g,v-_).normalize(),n[4].setComponents(c-a,f-u,m-y,v-x).normalize(),e===oi)n[5].setComponents(c+a,f+u,m+y,v+x).normalize();else if(e===Lo)n[5].setComponents(a,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(xo.x=s.normal.x>0?t.max.x:t.min.x,xo.y=s.normal.y>0?t.max.y:t.min.y,xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _f(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function O0(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let y=0,m=g.length;y<m;y++){let p=g[y];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var $n=class i extends le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let _=p*f-o;for(let x=0;x<l;x++){let v=x*u-r;g.push(v,-_,0),y.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let x=_+l*p,v=_+l*(p+1),S=_+1+l*(p+1),E=_+1+l*p;d.push(x,v,E),d.push(v,S,E)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},F0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B0=`#ifdef USE_ALPHAHASH
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
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,V0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G0=`#ifdef USE_AOMAP
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
#endif`,W0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K0=`#ifdef USE_IRIDESCENCE
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
#endif`,J0=`#ifdef USE_BUMPMAP
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,om=`#define PI 3.141592653589793
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
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cm=`vec3 transformedNormal = objectNormal;
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
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`
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
}`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
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
}`,wm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Om=`struct PhysicalMaterial {
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
}`,Fm=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Qm=`#ifdef USE_MORPHTARGETS
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
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Wg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,jg=`#define LAMBERT
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
}`,Qg=`#define LAMBERT
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
}`,t1=`#define MATCAP
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
}`,e1=`#define MATCAP
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
}`,n1=`#define NORMAL
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
}`,i1=`#define NORMAL
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
}`,s1=`#define PHONG
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
}`,r1=`#define PHONG
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
}`,o1=`#define STANDARD
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
}`,a1=`#define STANDARD
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
}`,c1=`#define TOON
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
}`,l1=`#define TOON
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
}`,h1=`uniform float size;
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,d1=`uniform vec3 color;
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
}`,p1=`uniform float rotation;
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
}`,m1=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:F0,alphahash_pars_fragment:B0,alphamap_fragment:k0,alphamap_pars_fragment:H0,alphatest_fragment:z0,alphatest_pars_fragment:V0,aomap_fragment:G0,aomap_pars_fragment:W0,batching_pars_vertex:q0,batching_vertex:X0,begin_vertex:Y0,beginnormal_vertex:$0,bsdfs:Z0,iridescence_fragment:K0,bumpmap_pars_fragment:J0,clipping_planes_fragment:j0,clipping_planes_pars_fragment:Q0,clipping_planes_pars_vertex:tm,clipping_planes_vertex:em,color_fragment:nm,color_pars_fragment:im,color_pars_vertex:sm,color_vertex:rm,common:om,cube_uv_reflection_fragment:am,defaultnormal_vertex:cm,displacementmap_pars_vertex:lm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:fm,colorspace_fragment:dm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:xm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Pm,envmap_vertex:_m,fog_vertex:vm,fog_pars_vertex:Mm,fog_fragment:bm,fog_pars_fragment:Em,gradientmap_pars_fragment:Sm,lightmap_fragment:wm,lightmap_pars_fragment:Tm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Rm,lights_pars_begin:Cm,lights_toon_fragment:Im,lights_toon_pars_fragment:Lm,lights_phong_fragment:Dm,lights_phong_pars_fragment:Um,lights_physical_fragment:Nm,lights_physical_pars_fragment:Om,lights_fragment_begin:Fm,lights_fragment_maps:Bm,lights_fragment_end:km,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Gm,map_fragment:Wm,map_pars_fragment:qm,map_particle_fragment:Xm,map_particle_pars_fragment:Ym,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Zm,morphcolor_vertex:Km,morphnormal_vertex:Jm,morphtarget_pars_vertex:jm,morphtarget_vertex:Qm,normal_fragment_begin:tg,normal_fragment_maps:eg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:cg,iridescence_pars_fragment:lg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:fg,project_vertex:dg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:_g,shadowmap_vertex:vg,shadowmask_pars_fragment:Mg,skinbase_vertex:bg,skinning_pars_vertex:Eg,skinning_vertex:Sg,skinnormal_vertex:wg,specularmap_fragment:Tg,specularmap_pars_fragment:Ag,tonemapping_fragment:Rg,tonemapping_pars_fragment:Cg,transmission_fragment:Pg,transmission_pars_fragment:Ig,uv_pars_fragment:Lg,uv_pars_vertex:Dg,uv_vertex:Ug,worldpos_vertex:Ng,background_vert:Og,background_frag:Fg,backgroundCube_vert:Bg,backgroundCube_frag:kg,cube_vert:Hg,cube_frag:zg,depth_vert:Vg,depth_frag:Gg,distanceRGBA_vert:Wg,distanceRGBA_frag:qg,equirect_vert:Xg,equirect_frag:Yg,linedashed_vert:$g,linedashed_frag:Zg,meshbasic_vert:Kg,meshbasic_frag:Jg,meshlambert_vert:jg,meshlambert_frag:Qg,meshmatcap_vert:t1,meshmatcap_frag:e1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:s1,meshphong_frag:r1,meshphysical_vert:o1,meshphysical_frag:a1,meshtoon_vert:c1,meshtoon_frag:l1,points_vert:h1,points_frag:u1,shadow_vert:f1,shadow_frag:d1,sprite_vert:p1,sprite_frag:m1},lt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Yn={basic:{uniforms:an([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:an([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:an([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:an([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:an([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:an([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:an([lt.points,lt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:an([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:an([lt.common,lt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:an([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:an([lt.sprite,lt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:an([lt.common,lt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:an([lt.lights,lt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Yn.physical={uniforms:an([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var yo={r:0,b:0,g:0};function g1(i,t,e,n,s,r,o){let a=new wt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?y(a,c):x&&x.isColor&&(y(x,1),_=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ia)?(h===void 0&&(h=new Bt(new ie(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Fs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=de.getTransfer(x.colorSpace)!==ve,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Bt(new $n(2,2),new hi({name:"BackgroundMaterial",uniforms:Fs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=de.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,p){m.getRGB(yo,yf(i)),n.buffers.color.setClear(yo.r,yo.g,yo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:g}}function x1(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,O,z,F,B){let X=!1;if(o){let J=y(F,z,O);l!==J&&(l=J,d(l.object)),X=p(L,F,z,B),X&&_(L,F,z,B)}else{let J=O.wireframe===!0;(l.geometry!==F.id||l.program!==z.id||l.wireframe!==J)&&(l.geometry=F.id,l.program=z.id,l.wireframe=J,X=!0)}B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,I(L,O,z,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function y(L,O,z){let F=z.wireframe===!0,B=a[L.id];B===void 0&&(B={},a[L.id]=B);let X=B[O.id];X===void 0&&(X={},B[O.id]=X);let J=X[F];return J===void 0&&(J=m(f()),X[F]=J),J}function m(L){let O=[],z=[],F=[];for(let B=0;B<s;B++)O[B]=0,z[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:F,object:L,attributes:{},index:null}}function p(L,O,z,F){let B=l.attributes,X=O.attributes,J=0,j=z.getAttributes();for(let dt in j)if(j[dt].location>=0){let et=B[dt],pt=X[dt];if(pt===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),et===void 0||et.attribute!==pt||pt&&et.data!==pt.data)return!0;J++}return l.attributesNum!==J||l.index!==F}function _(L,O,z,F){let B={},X=O.attributes,J=0,j=z.getAttributes();for(let dt in j)if(j[dt].location>=0){let et=X[dt];et===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));let pt={};pt.attribute=et,et&&et.data&&(pt.data=et.data),B[dt]=pt,J++}l.attributes=B,l.attributesNum=J,l.index=F}function x(){let L=l.newAttributes;for(let O=0,z=L.length;O<z;O++)L[O]=0}function v(L){S(L,0)}function S(L,O){let z=l.newAttributes,F=l.enabledAttributes,B=l.attributeDivisors;z[L]=1,F[L]===0&&(i.enableVertexAttribArray(L),F[L]=1),B[L]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),B[L]=O)}function E(){let L=l.newAttributes,O=l.enabledAttributes;for(let z=0,F=O.length;z<F;z++)O[z]!==L[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function T(L,O,z,F,B,X,J){J===!0?i.vertexAttribIPointer(L,O,z,B,X):i.vertexAttribPointer(L,O,z,F,B,X)}function I(L,O,z,F){if(n.isWebGL2===!1&&(L.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let B=F.attributes,X=z.getAttributes(),J=O.defaultAttributeValues;for(let j in X){let dt=X[j];if(dt.location>=0){let $=B[j];if($===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let et=$.normalized,pt=$.itemSize,bt=e.get($);if(bt===void 0)continue;let xt=bt.buffer,Ut=bt.type,zt=bt.bytesPerElement,Et=n.isWebGL2===!0&&(Ut===i.INT||Ut===i.UNSIGNED_INT||$.gpuType===af);if($.isInterleavedBufferAttribute){let kt=$.data,D=kt.stride,at=$.offset;if(kt.isInstancedInterleavedBuffer){for(let K=0;K<dt.locationSize;K++)S(dt.location+K,kt.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let K=0;K<dt.locationSize;K++)v(dt.location+K);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let K=0;K<dt.locationSize;K++)T(dt.location+K,pt/dt.locationSize,Ut,et,D*zt,(at+pt/dt.locationSize*K)*zt,Et)}else{if($.isInstancedBufferAttribute){for(let kt=0;kt<dt.locationSize;kt++)S(dt.location+kt,$.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let kt=0;kt<dt.locationSize;kt++)v(dt.location+kt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let kt=0;kt<dt.locationSize;kt++)T(dt.location+kt,pt/dt.locationSize,Ut,et,pt*zt,pt/dt.locationSize*kt*zt,Et)}}else if(J!==void 0){let et=J[j];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(dt.location,et);break;case 3:i.vertexAttrib3fv(dt.location,et);break;case 4:i.vertexAttrib4fv(dt.location,et);break;default:i.vertexAttrib1fv(dt.location,et)}}}}E()}function M(){V();for(let L in a){let O=a[L];for(let z in O){let F=O[z];for(let B in F)g(F[B].object),delete F[B];delete O[z]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let z in O){let F=O[z];for(let B in F)g(F[B].object),delete F[B];delete O[z]}delete a[L.id]}function N(L){for(let O in a){let z=a[O];if(z[L.id]===void 0)continue;let F=z[L.id];for(let B in F)g(F[B].object),delete F[B];delete z[L.id]}}function V(){W(),h=!0,l!==c&&(l=c,d(l.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:v,disableUnusedAttributes:E}}function y1(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let y=0;y<f;y++)g+=u[y];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function _1(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,v=o||t.has("OES_texture_float"),S=x&&v,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:E}}function v1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Un,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,x=_*4,v=p.clippingState||null;c.value=v,v=h(g,f,x,d);for(let S=0;S!==x;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=d+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==y;++x,v+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function M1(i){let t=new WeakMap;function e(o,a){return a===Lc?o.mapping=Ds:a===Dc&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lc||a===Dc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new zc(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ks=class extends Ho{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},As=4,Au=[.125,.215,.35,.446,.526,.582],qi=20,vc=new ks,Ru=new wt,Mc=null,bc=0,Ec=0,Gi=(1+Math.sqrt(5))/2,ws=1/Gi,Cu=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Gi,ws),new R(0,Gi,-ws),new R(ws,0,Gi),new R(-ws,0,Gi),new R(Gi,ws,0),new R(-Gi,ws,0)],zo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Mc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mc,bc,Ec),t.scissorTest=!1,_o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Er,format:On,colorSpace:ci,depthBuffer:!1},s=Pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b1(r)),this._blurMaterial=E1(r,t,e)}return s}_compileMaterial(t){let e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,vc)}_sceneToCubeUV(t,e,n,s){let a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ru),h.toneMapping=Fn,h.autoClear=!1;let d=new ge({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Bt(new ie,d),y=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,y=!0):(d.color.copy(Ru),y=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;_o(s,_*x,p>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ds||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;_o(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,vc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Cu[(s-1)%Cu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Bt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);let p=[],_=0;for(let T=0;T<qi;++T){let I=T/y,M=Math.exp(-I*I/2);p.push(M),T===0?_+=M:T<m&&(_+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let v=this._sizeLods[s],S=3*v*(s>x-As?s-x+As:0),E=4*(this._cubeSize-v);_o(e,S,E,3*v,2*v),c.setRenderTarget(e),c.render(u,vc)}};function b1(i){let t=[],e=[],n=[],s=i,r=i-As+1+Au.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-As?c=Au[o-i+As-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,m=2,p=1,_=new Float32Array(y*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,I=E>2?0:-1,M=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];_.set(M,y*g*E),x.set(f,m*g*E);let b=[E,E,E,E,E,E];v.set(b,p*g*E)}let S=new le;S.setAttribute("position",new wn(_,y)),S.setAttribute("uv",new wn(x,m)),S.setAttribute("faceIndex",new wn(v,p)),t.push(S),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pu(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function E1(i,t,e){let n=new Float32Array(qi),s=new R(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Iu(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Lu(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function S1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Lc||c===Dc,h=c===Ds||c===Us;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new zo(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new zo(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function w1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function T1(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let y=d[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let _=d.array;y=d.version;for(let x=0,v=_.length;x<v;x+=3){let S=_[x+0],E=_[x+1],T=_[x+2];f.push(S,E,E,T,T,S)}}else if(g!==void 0){let _=g.array;y=g.version;for(let x=0,v=_.length/3-1;x<v;x+=3){let S=x+0,E=x+1,T=x+2;f.push(S,E,E,T,T,S)}}else return;let m=new(gf(f)?ko:Bo)(f,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function A1(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*c),e.update(g,r,1)}function u(d,g,y){if(y===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,y),e.update(g,r,y)}function f(d,g,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,y);let p=0;for(let _=0;_<y;_++)p+=g[_];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function R1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C1(i,t){return i[0]-t[0]}function P1(i,t){return Math.abs(t[1])-Math.abs(i[1])}function I1(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new be,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,y=r.get(h);if(y===void 0||y.count!==g){let L=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],I=0;_===!0&&(I=1),x===!0&&(I=2),v===!0&&(I=3);let M=h.attributes.position.count*I,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*b*4*g),V=new Oo(N,M,b,g);V.type=_i,V.needsUpdate=!0;let W=I*4;for(let O=0;O<g;O++){let z=S[O],F=E[O],B=T[O],X=M*b*4*O;for(let J=0;J<z.count;J++){let j=J*W;_===!0&&(o.fromBufferAttribute(z,J),N[X+j+0]=o.x,N[X+j+1]=o.y,N[X+j+2]=o.z,N[X+j+3]=0),x===!0&&(o.fromBufferAttribute(F,J),N[X+j+4]=o.x,N[X+j+5]=o.y,N[X+j+6]=o.z,N[X+j+7]=0),v===!0&&(o.fromBufferAttribute(B,J),N[X+j+8]=o.x,N[X+j+9]=o.y,N[X+j+10]=o.z,N[X+j+11]=B.itemSize===4?o.w:1)}}y={count:g,texture:V,size:new tt(M,b)},r.set(h,y),h.addEventListener("dispose",L)}let m=0;for(let _=0;_<f.length;_++)m+=f[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let v=g[x];v[0]=x,v[1]=f[x]}g.sort(P1);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(C1);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let v=a[x],S=v[0],E=v[1];S!==Number.MAX_SAFE_INTEGER&&E?(y&&h.getAttribute("morphTarget"+x)!==y[S]&&h.setAttribute("morphTarget"+x,y[S]),m&&h.getAttribute("morphNormal"+x)!==m[S]&&h.setAttribute("morphNormal"+x,m[S]),s[x]=E,p+=E):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function L1(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Vo=class extends Tn{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Yi,h!==Yi&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=yi),n===void 0&&h===Ns&&(n=Xi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Se,this.minFilter=c!==void 0?c:Se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vf=new Tn,Mf=new Vo(1,1);Mf.compareFunction=mf;var bf=new Oo,Ef=new kc,Sf=new Bs,Du=[],Uu=[],Nu=new Float32Array(16),Ou=new Float32Array(9),Fu=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ra(i,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function D1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function U1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function N1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function O1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function F1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;Fu.set(n),i.uniformMatrix2fv(this.addr,!1,Fu),He(e,n)}}function B1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;Ou.set(n),i.uniformMatrix3fv(this.addr,!1,Ou),He(e,n)}}function k1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),He(e,n)}}function H1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function V1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function G1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function W1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function X1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function Y1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function $1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Mf:vf;e.setTexture2D(t||r,s)}function Z1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ef,s)}function K1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sf,s)}function J1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bf,s)}function j1(i){switch(i){case 5126:return D1;case 35664:return U1;case 35665:return N1;case 35666:return O1;case 35674:return F1;case 35675:return B1;case 35676:return k1;case 5124:case 35670:return H1;case 35667:case 35671:return z1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return q1;case 36295:return X1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return J1}}function Q1(i,t){i.uniform1fv(this.addr,t)}function t2(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function e2(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function n2(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function i2(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s2(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r2(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function o2(i,t){i.uniform1iv(this.addr,t)}function a2(i,t){i.uniform2iv(this.addr,t)}function c2(i,t){i.uniform3iv(this.addr,t)}function l2(i,t){i.uniform4iv(this.addr,t)}function h2(i,t){i.uniform1uiv(this.addr,t)}function u2(i,t){i.uniform2uiv(this.addr,t)}function f2(i,t){i.uniform3uiv(this.addr,t)}function d2(i,t){i.uniform4uiv(this.addr,t)}function p2(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vf,r[o])}function m2(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ef,r[o])}function g2(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sf,r[o])}function x2(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bf,r[o])}function y2(i){switch(i){case 5126:return Q1;case 35664:return t2;case 35665:return e2;case 35666:return n2;case 35674:return i2;case 35675:return s2;case 35676:return r2;case 5124:case 35670:return o2;case 35667:case 35671:return a2;case 35668:case 35672:return c2;case 35669:case 35673:return l2;case 5125:return h2;case 36294:return u2;case 36295:return f2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return x2}}var Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j1(e.type)}},Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y2(e.type)}},Wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Bu(i,t){i.seq.push(t),i.map[t.id]=t}function _2(i,t,e){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),o=Sc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bu(e,l===void 0?new Vc(a,i,t):new Gc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Wc(a),Bu(e,u)),e=u}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_2(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ku(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var v2=37297,M2=0;function b2(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function E2(i){let t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(i),n;switch(t===e?n="":t===Io&&e===Po?n="LinearDisplayP3ToLinearSRGB":t===Po&&e===Io&&(n="LinearSRGBToLinearDisplayP3"),i){case ci:case sa:return[n,"LinearTransferOETF"];case me:case bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+b2(i.getShaderSource(t),o)}else return s}function S2(i,t){let e=E2(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function w2(i,t){let e;switch(t){case Gp:e="Linear";break;case Wp:e="Reinhard";break;case qp:e="OptimizedCineon";break;case Xp:e="ACESFilmic";break;case $p:e="AgX";break;case Yp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function T2(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function A2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rs).join(`
`)}function R2(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C2(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function zu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var P2=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(i){return i.replace(P2,L2)}var I2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function L2(i,t){let e=Yt[t];if(e===void 0){let n=I2.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qc(e)}var D2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(D2,U2)}function U2(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N2(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function O2(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F2(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function B2(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case es:t="ENVMAP_BLENDING_MULTIPLY";break;case Fr:t="ENVMAP_BLENDING_MIX";break;case Vp:t="ENVMAP_BLENDING_ADD";break}return t}function k2(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function H2(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=N2(e),l=O2(e),h=F2(e),u=B2(e),f=k2(e),d=e.isWebGL2?"":T2(e),g=A2(e),y=R2(r),m=s.createProgram(),p,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Rs).join(`
`),p.length>0&&(p+=`
`),_=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Rs).join(`
`),_.length>0&&(_+=`
`)):(p=[Wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),_=[d,Wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?w2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,S2("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=qc(o),o=zu(o,e),o=Vu(o,e),a=qc(a),a=zu(a,e),a=Vu(a,e),o=Gu(o),a=Gu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=x+p+o,S=x+_+a,E=ku(s,s.VERTEX_SHADER,v),T=ku(s,s.FRAGMENT_SHADER,S);s.attachShader(m,E),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(V){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(E).trim(),O=s.getShaderInfoLog(T).trim(),z=!0,F=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,T);else{let B=Hu(s,E,"vertex"),X=Hu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+B+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||O==="")&&(F=!1);F&&(V.diagnostics={runnable:z,programLog:W,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:_}})}s.deleteShader(E),s.deleteShader(T),M=new Ls(s,m),b=C2(s,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,v2)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M2++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=T,this}var z2=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yc(t),e.set(t,n)),n}},Yc=class{constructor(t){this.id=z2++,this.code=t,this.usedTimes=0}};function V2(i,t,e,n,s,r,o){let a=new wr,c=new Xc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,b,N,V,W){let L=V.fog,O=W.geometry,z=M.isMeshStandardMaterial?V.environment:null,F=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),B=F&&F.mapping===ia?F.image.height:null,X=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,j=J!==void 0?J.length:0,dt=0;O.morphAttributes.position!==void 0&&(dt=1),O.morphAttributes.normal!==void 0&&(dt=2),O.morphAttributes.color!==void 0&&(dt=3);let $,et,pt,bt;if(X){let rn=Yn[X];$=rn.vertexShader,et=rn.fragmentShader}else $=M.vertexShader,et=M.fragmentShader,c.update(M),pt=c.getVertexShaderID(M),bt=c.getFragmentShaderID(M);let xt=i.getRenderTarget(),Ut=W.isInstancedMesh===!0,zt=W.isBatchedMesh===!0,Et=!!M.map,kt=!!M.matcap,D=!!F,at=!!M.aoMap,K=!!M.lightMap,ot=!!M.bumpMap,Z=!!M.normalMap,Tt=!!M.displacementMap,mt=!!M.emissiveMap,C=!!M.metalnessMap,w=!!M.roughnessMap,H=M.anisotropy>0,st=M.clearcoat>0,nt=M.iridescence>0,Q=M.sheen>0,vt=M.transmission>0,ht=H&&!!M.anisotropyMap,yt=st&&!!M.clearcoatMap,Pt=st&&!!M.clearcoatNormalMap,Wt=st&&!!M.clearcoatRoughnessMap,it=nt&&!!M.iridescenceMap,ae=nt&&!!M.iridescenceThicknessMap,ne=Q&&!!M.sheenColorMap,Ht=Q&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,_t=!!M.specularColorMap,Xt=!!M.specularIntensityMap,he=vt&&!!M.transmissionMap,Pe=vt&&!!M.thicknessMap,jt=!!M.gradientMap,ct=!!M.alphaMap,U=M.alphaTest>0,ut=!!M.alphaHash,ft=!!M.extensions,Nt=!!O.attributes.uv1,It=!!O.attributes.uv2,xe=!!O.attributes.uv3,ye=Fn;return M.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ye=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:et,defines:M.defines,customVertexShaderID:pt,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:zt,instancing:Ut,instancingColor:Ut&&W.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:ci,map:Et,matcap:kt,envMap:D,envMapMode:D&&F.mapping,envMapCubeUVHeight:B,aoMap:at,lightMap:K,bumpMap:ot,normalMap:Z,displacementMap:f&&Tt,emissiveMap:mt,normalMapObjectSpace:Z&&M.normalMapType===o0,normalMapTangentSpace:Z&&M.normalMapType===Ml,metalnessMap:C,roughnessMap:w,anisotropy:H,anisotropyMap:ht,clearcoat:st,clearcoatMap:yt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Wt,iridescence:nt,iridescenceMap:it,iridescenceThicknessMap:ae,sheen:Q,sheenColorMap:ne,sheenRoughnessMap:Ht,specularMap:Rt,specularColorMap:_t,specularIntensityMap:Xt,transmission:vt,transmissionMap:he,thicknessMap:Pe,gradientMap:jt,opaque:M.transparent===!1&&M.blending===Ps,alphaMap:ct,alphaTest:U,alphaHash:ut,combine:M.combine,mapUv:Et&&y(M.map.channel),aoMapUv:at&&y(M.aoMap.channel),lightMapUv:K&&y(M.lightMap.channel),bumpMapUv:ot&&y(M.bumpMap.channel),normalMapUv:Z&&y(M.normalMap.channel),displacementMapUv:Tt&&y(M.displacementMap.channel),emissiveMapUv:mt&&y(M.emissiveMap.channel),metalnessMapUv:C&&y(M.metalnessMap.channel),roughnessMapUv:w&&y(M.roughnessMap.channel),anisotropyMapUv:ht&&y(M.anisotropyMap.channel),clearcoatMapUv:yt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&y(M.sheenRoughnessMap.channel),specularMapUv:Rt&&y(M.specularMap.channel),specularColorMapUv:_t&&y(M.specularColorMap.channel),specularIntensityMapUv:Xt&&y(M.specularIntensityMap.channel),transmissionMapUv:he&&y(M.transmissionMap.channel),thicknessMapUv:Pe&&y(M.thicknessMap.channel),alphaMapUv:ct&&y(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Z||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:It,vertexUv3s:xe,pointsUvs:W.isPoints===!0&&!!O.attributes.uv&&(Et||ct),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:dt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&de.getTransfer(M.map.colorSpace)===ve,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===We,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ft&&M.extensions.derivatives===!0,extensionFragDepth:ft&&M.extensions.fragDepth===!0,extensionDrawBuffers:ft&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)b.push(N),b.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(_(b,M),x(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function _(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){let b=g[M.type],N;if(b){let V=Yn[b];N=I0.clone(V.uniforms)}else N=M.uniforms;return N}function S(M,b){let N;for(let V=0,W=l.length;V<W;V++){let L=l[V];if(L.cacheKey===b){N=L,++N.usedTimes;break}}return N===void 0&&(N=new H2(i,b,M,r),l.push(N)),N}function E(M){if(--M.usedTimes===0){let b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:I}}function G2(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function W2(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,y,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function a(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||W2),n.length>1&&n.sort(f||qu),s.length>1&&s.sort(f||qu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function q2(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xu,i.set(n,[o])):s>=r.length?(o=new Xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function X2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new wt};break;case"SpotLight":e={position:new R,direction:new R,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Y2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $2=0;function Z2(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K2(i,t){let e=new X2,n=Y2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new ue,a=new ue;function c(h,u){let f=0,d=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let y=0,m=0,p=0,_=0,x=0,v=0,S=0,E=0,T=0,I=0,M=0;h.sort(Z2);let b=u===!0?Math.PI:1;for(let V=0,W=h.length;V<W;V++){let L=h[V],O=L.color,z=L.intensity,F=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*z*b,d+=O.g*z*b,g+=O.b*z*b;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],z);M++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let J=L.shadow,j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.directionalShadow[y]=j,s.directionalShadowMap[y]=B,s.directionalShadowMatrix[y]=L.shadow.matrix,v++}s.directional[y]=X,y++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(z*b),X.distance=F,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[p]=X;let J=L.shadow;if(L.map&&(s.spotLightMap[T]=L.map,T++,J.updateMatrices(L),L.castShadow&&I++),s.spotLightMatrix[p]=J.matrix,L.castShadow){let j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.spotShadow[p]=j,s.spotShadowMap[p]=B,E++}p++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[_]=X,_++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*b),X.distance=L.distance,X.decay=L.decay,L.castShadow){let J=L.shadow,j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,s.pointShadow[m]=j,s.pointShadowMap[m]=B,s.pointShadowMatrix[m]=L.shadow.matrix,S++}s.point[m]=X,m++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z*b),X.groundColor.copy(L.groundColor).multiplyScalar(z*b),s.hemi[x]=X,x++}}_>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==y||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==_||N.hemiLength!==x||N.numDirectionalShadows!==v||N.numPointShadows!==S||N.numSpotShadows!==E||N.numSpotMaps!==T||N.numLightProbes!==M)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=E+T-I,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=M,N.directionalLength=y,N.pointLength=m,N.spotLength=p,N.rectAreaLength=_,N.hemiLength=x,N.numDirectionalShadows=v,N.numPointShadows=S,N.numSpotShadows=E,N.numSpotMaps=T,N.numLightProbes=M,s.version=$2++)}function l(h,u){let f=0,d=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let v=h[_];if(v.isDirectionalLight){let S=s.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(v.isSpotLight){let S=s.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let S=s.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let S=s.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let S=s.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Yu(i,t){let e=new K2(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function J2(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Yu(i,t),e.set(r,[c])):o>=a.length?(c=new Yu(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var $c=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zc=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},j2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q2=`uniform sampler2D shadow_pass;
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
}`;function tx(i,t,e){let n=new Tr,s=new tt,r=new tt,o=new be,a=new $c({depthPacking:r0}),c=new Zc,l={},h=e.maxTextureSize,u={[bi]:hn,[hn]:bi,[We]:We},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:j2,fragmentShader:Q2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new le;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let p=this.type;this.render=function(E,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),V=i.state;V.setBlending(vi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let W=p!==ri&&this.type===ri,L=p===ri&&this.type!==ri;for(let O=0,z=E.length;O<z;O++){let F=E[O],B=F.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let X=B.getFrameExtents();if(s.multiply(X),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,B.mapSize.y=r.y)),B.map===null||W===!0||L===!0){let j=this.type!==ri?{minFilter:Se,magFilter:Se}:{};B.map!==null&&B.map.dispose(),B.map=new Bn(s.x,s.y,j),B.map.texture.name=F.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let J=B.getViewportCount();for(let j=0;j<J;j++){let dt=B.getViewport(j);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),V.viewport(o),B.updateMatrices(F,j),n=B.getFrustum(),v(T,I,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===ri&&_(B,I),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,N)};function _(E,T){let I=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,I,f,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,I,d,y,null)}function x(E,T,I,M){let b=null,N=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)b=N;else if(b=I.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let V=b.uuid,W=T.uuid,L=l[V];L===void 0&&(L={},l[V]=L);let O=L[W];O===void 0&&(O=b.clone(),L[W]=O,T.addEventListener("dispose",S)),b=O}if(b.visible=T.visible,b.wireframe=T.wireframe,M===ri?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let V=i.properties.get(b);V.light=I}return b}function v(E,T,I,M,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ri)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let W=t.update(E),L=E.material;if(Array.isArray(L)){let O=W.groups;for(let z=0,F=O.length;z<F;z++){let B=O[z],X=L[B.materialIndex];if(X&&X.visible){let J=x(E,X,M,b);E.onBeforeShadow(i,E,T,I,W,J,B),i.renderBufferDirect(I,null,W,J,E,B),E.onAfterShadow(i,E,T,I,W,J,B)}}}else if(L.visible){let O=x(E,L,M,b);E.onBeforeShadow(i,E,T,I,W,O,null),i.renderBufferDirect(I,null,W,O,E,null),E.onAfterShadow(i,E,T,I,W,O,null)}}let V=E.children;for(let W=0,L=V.length;W<L;W++)v(V[W],T,I,M,b)}function S(E){E.target.removeEventListener("dispose",S);for(let I in l){let M=l[I],b=E.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function ex(i,t,e){let n=e.isWebGL2;function s(){let U=!1,ut=new be,ft=null,Nt=new be(0,0,0,0);return{setMask:function(It){ft!==It&&!U&&(i.colorMask(It,It,It,It),ft=It)},setLocked:function(It){U=It},setClear:function(It,xe,ye,ze,rn){rn===!0&&(It*=ze,xe*=ze,ye*=ze),ut.set(It,xe,ye,ze),Nt.equals(ut)===!1&&(i.clearColor(It,xe,ye,ze),Nt.copy(ut))},reset:function(){U=!1,ft=null,Nt.set(-1,0,0,0)}}}function r(){let U=!1,ut=null,ft=null,Nt=null;return{setTest:function(It){It?zt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(It){ut!==It&&!U&&(i.depthMask(It),ut=It)},setFunc:function(It){if(ft!==It){switch(It){case Np:i.depthFunc(i.NEVER);break;case Op:i.depthFunc(i.ALWAYS);break;case Fp:i.depthFunc(i.LESS);break;case To:i.depthFunc(i.LEQUAL);break;case Bp:i.depthFunc(i.EQUAL);break;case kp:i.depthFunc(i.GEQUAL);break;case Hp:i.depthFunc(i.GREATER);break;case zp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=It}},setLocked:function(It){U=It},setClear:function(It){Nt!==It&&(i.clearDepth(It),Nt=It)},reset:function(){U=!1,ut=null,ft=null,Nt=null}}}function o(){let U=!1,ut=null,ft=null,Nt=null,It=null,xe=null,ye=null,ze=null,rn=null;return{setTest:function(_e){U||(_e?zt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(_e){ut!==_e&&!U&&(i.stencilMask(_e),ut=_e)},setFunc:function(_e,on,Xn){(ft!==_e||Nt!==on||It!==Xn)&&(i.stencilFunc(_e,on,Xn),ft=_e,Nt=on,It=Xn)},setOp:function(_e,on,Xn){(xe!==_e||ye!==on||ze!==Xn)&&(i.stencilOp(_e,on,Xn),xe=_e,ye=on,ze=Xn)},setLocked:function(_e){U=_e},setClear:function(_e){rn!==_e&&(i.clearStencil(_e),rn=_e)},reset:function(){U=!1,ut=null,ft=null,Nt=null,It=null,xe=null,ye=null,ze=null,rn=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,y=[],m=null,p=!1,_=null,x=null,v=null,S=null,E=null,T=null,I=null,M=new wt(0,0,0),b=0,N=!1,V=null,W=null,L=null,O=null,z=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=X>=2);let j=null,dt={},$=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),pt=new be().fromArray($),bt=new be().fromArray(et);function xt(U,ut,ft,Nt){let It=new Uint8Array(4),xe=i.createTexture();i.bindTexture(U,xe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<ft;ye++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ut,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(ut+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return xe}let Ut={};Ut[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),zt(i.DEPTH_TEST),c.setFunc(To),mt(!1),C(Ah),zt(i.CULL_FACE),Z(vi);function zt(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function Et(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function kt(U,ut){return d[U]!==ut?(i.bindFramebuffer(U,ut),d[U]=ut,n&&(U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut)),!0):!1}function D(U,ut){let ft=y,Nt=!1;if(U)if(ft=g.get(ut),ft===void 0&&(ft=[],g.set(ut,ft)),U.isWebGLMultipleRenderTargets){let It=U.texture;if(ft.length!==It.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,ye=It.length;xe<ye;xe++)ft[xe]=i.COLOR_ATTACHMENT0+xe;ft.length=It.length,Nt=!0}}else ft[0]!==i.COLOR_ATTACHMENT0&&(ft[0]=i.COLOR_ATTACHMENT0,Nt=!0);else ft[0]!==i.BACK&&(ft[0]=i.BACK,Nt=!0);Nt&&(e.isWebGL2?i.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function at(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let K={[Wi]:i.FUNC_ADD,[vp]:i.FUNC_SUBTRACT,[Mp]:i.FUNC_REVERSE_SUBTRACT};if(n)K[Ph]=i.MIN,K[Ih]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(K[Ph]=U.MIN_EXT,K[Ih]=U.MAX_EXT)}let ot={[bp]:i.ZERO,[Ep]:i.ONE,[Sp]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[Pp]:i.SRC_ALPHA_SATURATE,[Rp]:i.DST_COLOR,[Tp]:i.DST_ALPHA,[wp]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[Cp]:i.ONE_MINUS_DST_COLOR,[Ap]:i.ONE_MINUS_DST_ALPHA,[Ip]:i.CONSTANT_COLOR,[Lp]:i.ONE_MINUS_CONSTANT_COLOR,[Dp]:i.CONSTANT_ALPHA,[Up]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(U,ut,ft,Nt,It,xe,ye,ze,rn,_e){if(U===vi){p===!0&&(Et(i.BLEND),p=!1);return}if(p===!1&&(zt(i.BLEND),p=!0),U!==_p){if(U!==_||_e!==N){if((x!==Wi||E!==Wi)&&(i.blendEquation(i.FUNC_ADD),x=Wi,E=Wi),_e)switch(U){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.ONE,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ch:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,S=null,T=null,I=null,M.set(0,0,0),b=0,_=U,N=_e}return}It=It||ut,xe=xe||ft,ye=ye||Nt,(ut!==x||It!==E)&&(i.blendEquationSeparate(K[ut],K[It]),x=ut,E=It),(ft!==v||Nt!==S||xe!==T||ye!==I)&&(i.blendFuncSeparate(ot[ft],ot[Nt],ot[xe],ot[ye]),v=ft,S=Nt,T=xe,I=ye),(ze.equals(M)===!1||rn!==b)&&(i.blendColor(ze.r,ze.g,ze.b,rn),M.copy(ze),b=rn),_=U,N=!1}function Tt(U,ut){U.side===We?Et(i.CULL_FACE):zt(i.CULL_FACE);let ft=U.side===hn;ut&&(ft=!ft),mt(ft),U.blending===Ps&&U.transparent===!1?Z(vi):Z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);let Nt=U.stencilWrite;l.setTest(Nt),Nt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),H(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?zt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){V!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),V=U)}function C(U){U!==gp?(zt(i.CULL_FACE),U!==W&&(U===Ah?i.cullFace(i.BACK):U===xp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),W=U}function w(U){U!==L&&(B&&i.lineWidth(U),L=U)}function H(U,ut,ft){U?(zt(i.POLYGON_OFFSET_FILL),(O!==ut||z!==ft)&&(i.polygonOffset(ut,ft),O=ut,z=ft)):Et(i.POLYGON_OFFSET_FILL)}function st(U){U?zt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function nt(U){U===void 0&&(U=i.TEXTURE0+F-1),j!==U&&(i.activeTexture(U),j=U)}function Q(U,ut,ft){ft===void 0&&(j===null?ft=i.TEXTURE0+F-1:ft=j);let Nt=dt[ft];Nt===void 0&&(Nt={type:void 0,texture:void 0},dt[ft]=Nt),(Nt.type!==U||Nt.texture!==ut)&&(j!==ft&&(i.activeTexture(ft),j=ft),i.bindTexture(U,ut||Ut[U]),Nt.type=U,Nt.texture=ut)}function vt(){let U=dt[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ht(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(U){pt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),pt.copy(U))}function he(U){bt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),bt.copy(U))}function Pe(U,ut){let ft=u.get(ut);ft===void 0&&(ft=new WeakMap,u.set(ut,ft));let Nt=ft.get(U);Nt===void 0&&(Nt=i.getUniformBlockIndex(ut,U.name),ft.set(U,Nt))}function jt(U,ut){let Nt=u.get(ut).get(U);h.get(ut)!==Nt&&(i.uniformBlockBinding(ut,Nt,U.__bindingPointIndex),h.set(ut,Nt))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},j=null,dt={},d={},g=new WeakMap,y=[],m=null,p=!1,_=null,x=null,v=null,S=null,E=null,T=null,I=null,M=new wt(0,0,0),b=0,N=!1,V=null,W=null,L=null,O=null,z=null,pt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:zt,disable:Et,bindFramebuffer:kt,drawBuffers:D,useProgram:at,setBlending:Z,setMaterial:Tt,setFlipSided:mt,setCullFace:C,setLineWidth:w,setPolygonOffset:H,setScissorTest:st,activeTexture:nt,bindTexture:Q,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:yt,texImage2D:Rt,texImage3D:_t,updateUBOMapping:Pe,uniformBlockBinding:jt,texStorage2D:ne,texStorage3D:Ht,texSubImage2D:Pt,texSubImage3D:Wt,compressedTexSubImage2D:it,compressedTexSubImage3D:ae,scissor:Xt,viewport:he,reset:ct}}function nx(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return d?new OffscreenCanvas(C,w):Do("canvas")}function y(C,w,H,st){let nt=1;if((C.width>st||C.height>st)&&(nt=st/Math.max(C.width,C.height)),nt<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Q=w?Fc:Math.floor,vt=Q(nt*C.width),ht=Q(nt*C.height);u===void 0&&(u=g(vt,ht));let yt=H?g(vt,ht):u;return yt.width=vt,yt.height=ht,yt.getContext("2d").drawImage(C,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+vt+"x"+ht+")."),yt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return hu(C.width)&&hu(C.height)}function p(C){return a?!1:C.wrapS!==Nn||C.wrapT!==Nn||C.minFilter!==Se&&C.minFilter!==Ye}function _(C,w){return C.generateMipmaps&&w&&C.minFilter!==Se&&C.minFilter!==Ye}function x(C){i.generateMipmap(C)}function v(C,w,H,st,nt=!1){if(a===!1)return w;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=w;if(w===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),w===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8)),w===i.RGBA){let vt=nt?Co:de.getTransfer(st);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=vt===ve?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(C,w,H){return _(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Se&&C.minFilter!==Ye?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function E(C){return C===Se||C===Lh||C===$a?i.NEAREST:i.LINEAR}function T(C){let w=C.target;w.removeEventListener("dispose",T),M(w),w.isVideoTexture&&h.delete(w)}function I(C){let w=C.target;w.removeEventListener("dispose",I),N(w)}function M(C){let w=n.get(C);if(w.__webglInit===void 0)return;let H=C.source,st=f.get(H);if(st){let nt=st[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(C),Object.keys(st).length===0&&f.delete(H)}n.remove(C)}function b(C){let w=n.get(C);i.deleteTexture(w.__webglTexture);let H=C.source,st=f.get(H);delete st[w.__cacheKey],o.memory.textures--}function N(C){let w=C.texture,H=n.get(C),st=n.get(w);if(st.__webglTexture!==void 0&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(H.__webglFramebuffer[nt]))for(let Q=0;Q<H.__webglFramebuffer[nt].length;Q++)i.deleteFramebuffer(H.__webglFramebuffer[nt][Q]);else i.deleteFramebuffer(H.__webglFramebuffer[nt]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[nt])}else{if(Array.isArray(H.__webglFramebuffer))for(let nt=0;nt<H.__webglFramebuffer.length;nt++)i.deleteFramebuffer(H.__webglFramebuffer[nt]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let nt=0;nt<H.__webglColorRenderbuffer.length;nt++)H.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[nt]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let nt=0,Q=w.length;nt<Q;nt++){let vt=n.get(w[nt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(w[nt])}n.remove(w),n.remove(C)}let V=0;function W(){V=0}function L(){let C=V;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),V+=1,C}function O(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function z(C,w){let H=n.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let st=C.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(H,C,w);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function F(C,w){let H=n.get(C);if(C.version>0&&H.__version!==C.version){pt(H,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function B(C,w){let H=n.get(C);if(C.version>0&&H.__version!==C.version){pt(H,C,w);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function X(C,w){let H=n.get(C);if(C.version>0&&H.__version!==C.version){bt(H,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}let J={[Mr]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Uc]:i.MIRRORED_REPEAT},j={[Se]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[$a]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Zp]:i.LINEAR_MIPMAP_NEAREST,[br]:i.LINEAR_MIPMAP_LINEAR},dt={[a0]:i.NEVER,[d0]:i.ALWAYS,[c0]:i.LESS,[mf]:i.LEQUAL,[l0]:i.EQUAL,[f0]:i.GEQUAL,[h0]:i.GREATER,[u0]:i.NOTEQUAL};function $(C,w,H){if(H?(i.texParameteri(C,i.TEXTURE_WRAP_S,J[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,J[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,J[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,j[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,j[w.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==Nn||w.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,E(w.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==Se&&w.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,dt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let st=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Se||w.minFilter!==$a&&w.minFilter!==br||w.type===_i&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Er&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(C,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function et(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",T));let st=w.source,nt=f.get(st);nt===void 0&&(nt={},f.set(st,nt));let Q=O(w);if(Q!==C.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),nt[Q].usedTimes++;let vt=nt[C.__cacheKey];vt!==void 0&&(nt[C.__cacheKey].usedTimes--,vt.usedTimes===0&&b(w)),C.__cacheKey=Q,C.__webglTexture=nt[Q].texture}return H}function pt(C,w,H){let st=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(st=i.TEXTURE_3D);let nt=et(C,w),Q=w.source;e.bindTexture(st,C.__webglTexture,i.TEXTURE0+H);let vt=n.get(Q);if(Q.version!==vt.__version||nt===!0){e.activeTexture(i.TEXTURE0+H);let ht=de.getPrimaries(de.workingColorSpace),yt=w.colorSpace===Sn?null:de.getPrimaries(w.colorSpace),Pt=w.colorSpace===Sn||ht===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Wt=p(w)&&m(w.image)===!1,it=y(w.image,Wt,!1,s.maxTextureSize);it=mt(w,it);let ae=m(it)||a,ne=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type),Rt=v(w.internalFormat,ne,Ht,w.colorSpace,w.isVideoTexture);$(st,w,ae);let _t,Xt=w.mipmaps,he=a&&w.isVideoTexture!==!0&&Rt!==df,Pe=vt.__version===void 0||nt===!0,jt=S(w,it,ae);if(w.isDepthTexture)Rt=i.DEPTH_COMPONENT,a?w.type===_i?Rt=i.DEPTH_COMPONENT32F:w.type===yi?Rt=i.DEPTH_COMPONENT24:w.type===Xi?Rt=i.DEPTH24_STENCIL8:Rt=i.DEPTH_COMPONENT16:w.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Yi&&Rt===i.DEPTH_COMPONENT&&w.type!==vl&&w.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=yi,Ht=r.convert(w.type)),w.format===Ns&&Rt===i.DEPTH_COMPONENT&&(Rt=i.DEPTH_STENCIL,w.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Xi,Ht=r.convert(w.type))),Pe&&(he?e.texStorage2D(i.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,ne,Ht,null));else if(w.isDataTexture)if(Xt.length>0&&ae){he&&Pe&&e.texStorage2D(i.TEXTURE_2D,jt,Rt,Xt[0].width,Xt[0].height);for(let ct=0,U=Xt.length;ct<U;ct++)_t=Xt[ct],he?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,_t.width,_t.height,ne,Ht,_t.data):e.texImage2D(i.TEXTURE_2D,ct,Rt,_t.width,_t.height,0,ne,Ht,_t.data);w.generateMipmaps=!1}else he?(Pe&&e.texStorage2D(i.TEXTURE_2D,jt,Rt,it.width,it.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,ne,Ht,it.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,ne,Ht,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){he&&Pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,Rt,Xt[0].width,Xt[0].height,it.depth);for(let ct=0,U=Xt.length;ct<U;ct++)_t=Xt[ct],w.format!==On?ne!==null?he?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,it.depth,ne,_t.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Rt,_t.width,_t.height,it.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,it.depth,ne,Ht,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Rt,_t.width,_t.height,it.depth,0,ne,Ht,_t.data)}else{he&&Pe&&e.texStorage2D(i.TEXTURE_2D,jt,Rt,Xt[0].width,Xt[0].height);for(let ct=0,U=Xt.length;ct<U;ct++)_t=Xt[ct],w.format!==On?ne!==null?he?e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,_t.width,_t.height,ne,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Rt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,_t.width,_t.height,ne,Ht,_t.data):e.texImage2D(i.TEXTURE_2D,ct,Rt,_t.width,_t.height,0,ne,Ht,_t.data)}else if(w.isDataArrayTexture)he?(Pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,Rt,it.width,it.height,it.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ne,Ht,it.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,ne,Ht,it.data);else if(w.isData3DTexture)he?(Pe&&e.texStorage3D(i.TEXTURE_3D,jt,Rt,it.width,it.height,it.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ne,Ht,it.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,ne,Ht,it.data);else if(w.isFramebufferTexture){if(Pe)if(he)e.texStorage2D(i.TEXTURE_2D,jt,Rt,it.width,it.height);else{let ct=it.width,U=it.height;for(let ut=0;ut<jt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Rt,ct,U,0,ne,Ht,null),ct>>=1,U>>=1}}else if(Xt.length>0&&ae){he&&Pe&&e.texStorage2D(i.TEXTURE_2D,jt,Rt,Xt[0].width,Xt[0].height);for(let ct=0,U=Xt.length;ct<U;ct++)_t=Xt[ct],he?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,ne,Ht,_t):e.texImage2D(i.TEXTURE_2D,ct,Rt,ne,Ht,_t);w.generateMipmaps=!1}else he?(Pe&&e.texStorage2D(i.TEXTURE_2D,jt,Rt,it.width,it.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,Ht,it)):e.texImage2D(i.TEXTURE_2D,0,Rt,ne,Ht,it);_(w,ae)&&x(st),vt.__version=Q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function bt(C,w,H){if(w.image.length!==6)return;let st=et(C,w),nt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let Q=n.get(nt);if(nt.version!==Q.__version||st===!0){e.activeTexture(i.TEXTURE0+H);let vt=de.getPrimaries(de.workingColorSpace),ht=w.colorSpace===Sn?null:de.getPrimaries(w.colorSpace),yt=w.colorSpace===Sn||vt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Pt=w.isCompressedTexture||w.image[0].isCompressedTexture,Wt=w.image[0]&&w.image[0].isDataTexture,it=[];for(let ct=0;ct<6;ct++)!Pt&&!Wt?it[ct]=y(w.image[ct],!1,!0,s.maxCubemapSize):it[ct]=Wt?w.image[ct].image:w.image[ct],it[ct]=mt(w,it[ct]);let ae=it[0],ne=m(ae)||a,Ht=r.convert(w.format,w.colorSpace),Rt=r.convert(w.type),_t=v(w.internalFormat,Ht,Rt,w.colorSpace),Xt=a&&w.isVideoTexture!==!0,he=Q.__version===void 0||st===!0,Pe=S(w,ae,ne);$(i.TEXTURE_CUBE_MAP,w,ne);let jt;if(Pt){Xt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,_t,ae.width,ae.height);for(let ct=0;ct<6;ct++){jt=it[ct].mipmaps;for(let U=0;U<jt.length;U++){let ut=jt[U];w.format!==On?Ht!==null?Xt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,0,0,ut.width,ut.height,Ht,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,_t,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,0,0,ut.width,ut.height,Ht,Rt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,_t,ut.width,ut.height,0,Ht,Rt,ut.data)}}}else{jt=w.mipmaps,Xt&&he&&(jt.length>0&&Pe++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,_t,it[0].width,it[0].height));for(let ct=0;ct<6;ct++)if(Wt){Xt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,it[ct].width,it[ct].height,Ht,Rt,it[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,_t,it[ct].width,it[ct].height,0,Ht,Rt,it[ct].data);for(let U=0;U<jt.length;U++){let ft=jt[U].image[ct].image;Xt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,0,0,ft.width,ft.height,Ht,Rt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,_t,ft.width,ft.height,0,Ht,Rt,ft.data)}}else{Xt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ht,Rt,it[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,_t,Ht,Rt,it[ct]);for(let U=0;U<jt.length;U++){let ut=jt[U];Xt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,0,0,Ht,Rt,ut.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,_t,Ht,Rt,ut.image[ct])}}}_(w,ne)&&x(i.TEXTURE_CUBE_MAP),Q.__version=nt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function xt(C,w,H,st,nt,Q){let vt=r.convert(H.format,H.colorSpace),ht=r.convert(H.type),yt=v(H.internalFormat,vt,ht,H.colorSpace);if(!n.get(w).__hasExternalTextures){let Wt=Math.max(1,w.width>>Q),it=Math.max(1,w.height>>Q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,yt,Wt,it,w.depth,0,vt,ht,null):e.texImage2D(nt,Q,yt,Wt,it,0,vt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Z(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,nt,n.get(H).__webglTexture,0,ot(w)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,nt,n.get(H).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(C,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let st=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||Z(w)){let nt=w.depthTexture;nt&&nt.isDepthTexture&&(nt.type===_i?st=i.DEPTH_COMPONENT32F:nt.type===yi&&(st=i.DEPTH_COMPONENT24));let Q=ot(w);Z(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,st,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,st,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,st,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let st=ot(w);H&&Z(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,w.width,w.height):Z(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let st=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let nt=0;nt<st.length;nt++){let Q=st[nt],vt=r.convert(Q.format,Q.colorSpace),ht=r.convert(Q.type),yt=v(Q.internalFormat,vt,ht,Q.colorSpace),Pt=ot(w);H&&Z(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,yt,w.width,w.height):Z(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,yt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,yt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);let st=n.get(w.depthTexture).__webglTexture,nt=ot(w);if(w.depthTexture.format===Yi)Z(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(w.depthTexture.format===Ns)Z(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Et(C){let w=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");zt(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[st]),w.__webglDepthbuffer[st]=i.createRenderbuffer(),Ut(w.__webglDepthbuffer[st],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Ut(w.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(C,w,H){let st=n.get(C);w!==void 0&&xt(st.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Et(C)}function D(C){let w=C.texture,H=n.get(C),st=n.get(w);C.addEventListener("dispose",I),C.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=w.version,o.memory.textures++);let nt=C.isWebGLCubeRenderTarget===!0,Q=C.isWebGLMultipleRenderTargets===!0,vt=m(C)||a;if(nt){H.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[ht]=[];for(let yt=0;yt<w.mipmaps.length;yt++)H.__webglFramebuffer[ht][yt]=i.createFramebuffer()}else H.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let ht=0;ht<w.mipmaps.length;ht++)H.__webglFramebuffer[ht]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Q)if(s.drawBuffers){let ht=C.texture;for(let yt=0,Pt=ht.length;yt<Pt;yt++){let Wt=n.get(ht[yt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Z(C)===!1){let ht=Q?w:[w];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let yt=0;yt<ht.length;yt++){let Pt=ht[yt];H.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[yt]);let Wt=r.convert(Pt.format,Pt.colorSpace),it=r.convert(Pt.type),ae=v(Pt.internalFormat,Wt,it,Pt.colorSpace,C.isXRRenderTarget===!0),ne=ot(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ae,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,H.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),$(i.TEXTURE_CUBE_MAP,w,vt);for(let ht=0;ht<6;ht++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)xt(H.__webglFramebuffer[ht][yt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt);else xt(H.__webglFramebuffer[ht],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);_(w,vt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){let ht=C.texture;for(let yt=0,Pt=ht.length;yt<Pt;yt++){let Wt=ht[yt],it=n.get(Wt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),$(i.TEXTURE_2D,Wt,vt),xt(H.__webglFramebuffer,C,Wt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),_(Wt,vt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ht=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,st.__webglTexture),$(ht,w,vt),a&&w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)xt(H.__webglFramebuffer[yt],C,w,i.COLOR_ATTACHMENT0,ht,yt);else xt(H.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,ht,0);_(w,vt)&&x(ht),e.unbindTexture()}C.depthBuffer&&Et(C)}function at(C){let w=m(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let st=0,nt=H.length;st<nt;st++){let Q=H[st];if(_(Q,w)){let vt=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ht=n.get(Q).__webglTexture;e.bindTexture(vt,ht),x(vt),e.unbindTexture()}}}function K(C){if(a&&C.samples>0&&Z(C)===!1){let w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,st=C.height,nt=i.COLOR_BUFFER_BIT,Q=[],vt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(C),yt=C.isWebGLMultipleRenderTargets===!0;if(yt)for(let Pt=0;Pt<w.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Pt=0;Pt<w.length;Pt++){Q.push(i.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&Q.push(vt);let Wt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Wt===!1&&(C.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),yt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Pt]),Wt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[vt])),yt){let it=n.get(w[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,H,st,0,0,H,st,nt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Pt=0;Pt<w.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Pt]);let Wt=n.get(w[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function ot(C){return Math.min(s.maxSamples,C.samples)}function Z(C){let w=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function mt(C,w){let H=C.colorSpace,st=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Nc||H!==ci&&H!==Sn&&(de.getTransfer(H)===ve?a===!1?t.has("EXT_sRGB")===!0&&st===On?(C.format=Nc,C.minFilter=Ye,C.generateMipmaps=!1):w=Uo.sRGBToLinear(w):(st!==On||nt!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Z}function ix(i,t,e){let n=e.isWebGL2;function s(r,o=Sn){let a,c=de.getTransfer(o);if(r===Mi)return i.UNSIGNED_BYTE;if(r===cf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===lf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Kp)return i.BYTE;if(r===Jp)return i.SHORT;if(r===vl)return i.UNSIGNED_SHORT;if(r===af)return i.INT;if(r===yi)return i.UNSIGNED_INT;if(r===_i)return i.FLOAT;if(r===Er)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===jp)return i.ALPHA;if(r===On)return i.RGBA;if(r===Qp)return i.LUMINANCE;if(r===t0)return i.LUMINANCE_ALPHA;if(r===Yi)return i.DEPTH_COMPONENT;if(r===Ns)return i.DEPTH_STENCIL;if(r===Nc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===e0)return i.RED;if(r===hf)return i.RED_INTEGER;if(r===n0)return i.RG;if(r===uf)return i.RG_INTEGER;if(r===ff)return i.RGBA_INTEGER;if(r===Za||r===Ka||r===Ja||r===ja)if(c===ve)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Uh||r===Nh||r===Oh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Dh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===df)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fh||r===Bh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Fh)return c===ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Bh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kh||r===Hh||r===zh||r===Vh||r===Gh||r===Wh||r===qh||r===Xh||r===Yh||r===$h||r===Zh||r===Kh||r===Jh||r===jh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===kh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$h)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jh)return c===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qa||r===Qh||r===tu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Qa)return c===ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===i0||r===eu||r===nu||r===iu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Qa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===eu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===iu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Kc=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jc=class extends Ei{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=e.getContextAttributes(),m=null,p=null,_=[],x=[],v=new tt,S=null,E=new Le;E.layers.enable(1),E.viewport=new be;let T=new Le;T.layers.enable(2),T.viewport=new be;let I=[E,T],M=new Kc;M.layers.enable(1),M.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=_[$];return et===void 0&&(et=new yr,_[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=_[$];return et===void 0&&(et=new yr,_[$]=et),et.getGripSpace()},this.getHand=function($){let et=_[$];return et===void 0&&(et=new yr,_[$]=et),et.getHandSpace()};function V($){let et=x.indexOf($.inputSource);if(et===-1)return;let pt=_[et];pt!==void 0&&(pt.update($.inputSource,$.frame,l||o),pt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",L);for(let $=0;$<_.length;$++){let et=x[$];et!==null&&(x[$]=null,_[$].disconnect(et))}b=null,N=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Bn(d.framebufferWidth,d.framebufferHeight,{format:On,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let et=null,pt=null,bt=null;y.depth&&(bt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=y.stencil?Ns:Yi,pt=y.stencil?Xi:yi);let xt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Bn(f.textureWidth,f.textureHeight,{format:On,type:Mi,depthTexture:new Vo(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let Ut=t.properties.get(p);Ut.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L($){for(let et=0;et<$.removed.length;et++){let pt=$.removed[et],bt=x.indexOf(pt);bt>=0&&(x[bt]=null,_[bt].disconnect(pt))}for(let et=0;et<$.added.length;et++){let pt=$.added[et],bt=x.indexOf(pt);if(bt===-1){for(let Ut=0;Ut<_.length;Ut++)if(Ut>=x.length){x.push(pt),bt=Ut;break}else if(x[Ut]===null){x[Ut]=pt,bt=Ut;break}if(bt===-1)break}let xt=_[bt];xt&&xt.connect(pt)}}let O=new R,z=new R;function F($,et,pt){O.setFromMatrixPosition(et.matrixWorld),z.setFromMatrixPosition(pt.matrixWorld);let bt=O.distanceTo(z),xt=et.projectionMatrix.elements,Ut=pt.projectionMatrix.elements,zt=xt[14]/(xt[10]-1),Et=xt[14]/(xt[10]+1),kt=(xt[9]+1)/xt[5],D=(xt[9]-1)/xt[5],at=(xt[8]-1)/xt[0],K=(Ut[8]+1)/Ut[0],ot=zt*at,Z=zt*K,Tt=bt/(-at+K),mt=Tt*-at;et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(mt),$.translateZ(Tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let C=zt+Tt,w=Et+Tt,H=ot-mt,st=Z+(bt-mt),nt=kt*Et/w*C,Q=D*Et/w*C;$.projectionMatrix.makePerspective(H,st,nt,Q,C,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function B($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;M.near=T.near=E.near=$.near,M.far=T.far=E.far=$.far,(b!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,N=M.far);let et=$.parent,pt=M.cameras;B(M,et);for(let bt=0;bt<pt.length;bt++)B(pt[bt],et);pt.length===2?F(M,E,T):M.projectionMatrix.copy(E.projectionMatrix),X($,M,et)};function X($,et,pt){pt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(pt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Oc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)};let J=null;function j($,et){if(h=et.getViewerPose(l||o),g=et,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let bt=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,bt=!0);for(let xt=0;xt<pt.length;xt++){let Ut=pt[xt],zt=null;if(d!==null)zt=d.getViewport(Ut);else{let kt=u.getViewSubImage(f,Ut);zt=kt.viewport,xt===0&&(t.setRenderTargetTextures(p,kt.colorTexture,f.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(p))}let Et=I[xt];Et===void 0&&(Et=new Le,Et.layers.enable(xt),Et.viewport=new be,I[xt]=Et),Et.matrix.fromArray(Ut.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Ut.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(zt.x,zt.y,zt.width,zt.height),xt===0&&(M.matrix.copy(Et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),bt===!0&&M.cameras.push(Et)}}for(let pt=0;pt<_.length;pt++){let bt=x[pt],xt=_[pt];bt!==null&&xt!==void 0&&xt.update(bt,et,l||o)}J&&J($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let dt=new _f;dt.setAnimationLoop(j),this.setAnimationLoop=function($){J=$},this.dispose=function(){}}};function rx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ox(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){let v=x.program;n.uniformBlockBinding(_,v)}function l(_,x){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let S=x.program;n.updateUBOMapping(_,S);let E=t.render.frame;r[_.id]!==E&&(f(_),r[_.id]=E)}function h(_){let x=u();_.__bindingPointIndex=x;let v=i.createBuffer(),S=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=s[_.id],v=_.uniforms,S=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=v.length;E<T;E++){let I=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,b=I.length;M<b;M++){let N=I[M];if(d(N,E,M,S)===!0){let V=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],L=0;for(let O=0;O<W.length;O++){let z=W[O],F=y(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+L,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,L),L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,x,v,S){let E=_.value,T=x+"_"+v;if(S[T]===void 0)return typeof E=="number"||typeof E=="boolean"?S[T]=E:S[T]=E.clone(),!0;{let I=S[T];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return S[T]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(_){let x=_.uniforms,v=0,S=16;for(let T=0,I=x.length;T<I;T++){let M=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,N=M.length;b<N;b++){let V=M[b],W=Array.isArray(V.value)?V.value:[V.value];for(let L=0,O=W.length;L<O;L++){let z=W[L],F=y(z),B=v%S;B!==0&&S-B<F.boundary&&(v+=S-B),V.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=F.storage}}}let E=v%S;return E>0&&(v+=S-E),_.__size=v,_.__cache={},this}function y(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Hs=class{constructor(t={}){let{canvas:e=m0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;let x=this,v=!1,S=0,E=0,T=null,I=-1,M=null,b=new be,N=new be,V=null,W=new wt(0),L=0,O=e.width,z=e.height,F=1,B=null,X=null,J=new be(0,0,O,z),j=new be(0,0,O,z),dt=!1,$=new Tr,et=!1,pt=!1,bt=null,xt=new ue,Ut=new tt,zt=new R,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return T===null?F:1}let D=n;function at(P,k){for(let q=0;q<P.length;q++){let Y=P[q],G=e.getContext(Y,k);if(G!==null)return G}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_l}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){let k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),D=at(k,P),D===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let K,ot,Z,Tt,mt,C,w,H,st,nt,Q,vt,ht,yt,Pt,Wt,it,ae,ne,Ht,Rt,_t,Xt,he;function Pe(){K=new w1(D),ot=new _1(D,K,t),K.init(ot),_t=new ix(D,K,ot),Z=new ex(D,K,ot),Tt=new R1(D),mt=new G2,C=new nx(D,K,Z,mt,ot,_t,Tt),w=new M1(x),H=new S1(x),st=new O0(D,ot),Xt=new x1(D,K,st,ot),nt=new T1(D,st,Tt,Xt),Q=new L1(D,nt,st,Tt),ne=new I1(D,ot,C),Wt=new v1(mt),vt=new V2(x,w,H,K,ot,Xt,Wt),ht=new rx(x,mt),yt=new q2,Pt=new J2(K,ot),ae=new g1(x,w,H,Z,Q,f,c),it=new tx(x,Q,ot),he=new ox(D,Tt,ot,Z),Ht=new y1(D,K,Tt,ot),Rt=new A1(D,K,Tt,ot),Tt.programs=vt.programs,x.capabilities=ot,x.extensions=K,x.properties=mt,x.renderLists=yt,x.shadowMap=it,x.state=Z,x.info=Tt}Pe();let jt=new Jc(x,D);this.xr=jt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let P=K.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=K.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(O,z,!1))},this.getSize=function(P){return P.set(O,z)},this.setSize=function(P,k,q=!0){if(jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,z=k,e.width=Math.floor(P*F),e.height=Math.floor(k*F),q===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(O*F,z*F).floor()},this.setDrawingBufferSize=function(P,k,q){O=P,z=k,F=q,e.width=Math.floor(P*q),e.height=Math.floor(k*q),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(b)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,k,q,Y){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,k,q,Y),Z.viewport(b.copy(J).multiplyScalar(F).floor())},this.getScissor=function(P){return P.copy(j)},this.setScissor=function(P,k,q,Y){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,k,q,Y),Z.scissor(N.copy(j).multiplyScalar(F).floor())},this.getScissorTest=function(){return dt},this.setScissorTest=function(P){Z.setScissorTest(dt=P)},this.setOpaqueSort=function(P){B=P},this.setTransparentSort=function(P){X=P},this.getClearColor=function(P){return P.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(P=!0,k=!0,q=!0){let Y=0;if(P){let G=!1;if(T!==null){let gt=T.texture.format;G=gt===ff||gt===uf||gt===hf}if(G){let gt=T.texture.type,St=gt===Mi||gt===yi||gt===vl||gt===Xi||gt===cf||gt===lf,Lt=ae.getClearColor(),Ot=ae.getClearAlpha(),Kt=Lt.r,Vt=Lt.g,qt=Lt.b;St?(d[0]=Kt,d[1]=Vt,d[2]=qt,d[3]=Ot,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=Kt,g[1]=Vt,g[2]=qt,g[3]=Ot,D.clearBufferiv(D.COLOR,0,g))}else Y|=D.COLOR_BUFFER_BIT}k&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),yt.dispose(),Pt.dispose(),mt.dispose(),w.dispose(),H.dispose(),Q.dispose(),Xt.dispose(),he.dispose(),vt.dispose(),jt.dispose(),jt.removeEventListener("sessionstart",rn),jt.removeEventListener("sessionend",_e),bt&&(bt.dispose(),bt=null),on.stop()};function ct(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let P=Tt.autoReset,k=it.enabled,q=it.autoUpdate,Y=it.needsUpdate,G=it.type;Pe(),Tt.autoReset=P,it.enabled=k,it.autoUpdate=q,it.needsUpdate=Y,it.type=G}function ut(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ft(P){let k=P.target;k.removeEventListener("dispose",ft),Nt(k)}function Nt(P){It(P),mt.remove(P)}function It(P){let k=mt.get(P).programs;k!==void 0&&(k.forEach(function(q){vt.releaseProgram(q)}),P.isShaderMaterial&&vt.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,q,Y,G,gt){k===null&&(k=Et);let St=G.isMesh&&G.matrixWorld.determinant()<0,Lt=fp(P,k,q,Y,G);Z.setMaterial(Y,St);let Ot=q.index,Kt=1;if(Y.wireframe===!0){if(Ot=nt.getWireframeAttribute(q),Ot===void 0)return;Kt=2}let Vt=q.drawRange,qt=q.attributes.position,De=Vt.start*Kt,gn=(Vt.start+Vt.count)*Kt;gt!==null&&(De=Math.max(De,gt.start*Kt),gn=Math.min(gn,(gt.start+gt.count)*Kt)),Ot!==null?(De=Math.max(De,0),gn=Math.min(gn,Ot.count)):qt!=null&&(De=Math.max(De,0),gn=Math.min(gn,qt.count));let Ve=gn-De;if(Ve<0||Ve===1/0)return;Xt.setup(G,Y,Lt,q,Ot);let Qn,Ee=Ht;if(Ot!==null&&(Qn=st.get(Ot),Ee=Rt,Ee.setIndex(Qn)),G.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*kt()),Ee.setMode(D.LINES)):Ee.setMode(D.TRIANGLES);else if(G.isLine){let Qt=Y.linewidth;Qt===void 0&&(Qt=1),Z.setLineWidth(Qt*kt()),G.isLineSegments?Ee.setMode(D.LINES):G.isLineLoop?Ee.setMode(D.LINE_LOOP):Ee.setMode(D.LINE_STRIP)}else G.isPoints?Ee.setMode(D.POINTS):G.isSprite&&Ee.setMode(D.TRIANGLES);if(G.isBatchedMesh)Ee.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ee.renderInstances(De,Ve,G.count);else if(q.isInstancedBufferGeometry){let Qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Wa=Math.min(q.instanceCount,Qt);Ee.renderInstances(De,Ve,Wa)}else Ee.render(De,Ve)};function xe(P,k,q){P.transparent===!0&&P.side===We&&P.forceSinglePass===!1?(P.side=hn,P.needsUpdate=!0,Kr(P,k,q),P.side=bi,P.needsUpdate=!0,Kr(P,k,q),P.side=We):Kr(P,k,q)}this.compile=function(P,k,q=null){q===null&&(q=P),m=Pt.get(q),m.init(),_.push(m),q.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),P!==q&&P.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);let Y=new Set;return P.traverse(function(G){let gt=G.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let Lt=gt[St];xe(Lt,q,G),Y.add(Lt)}else xe(gt,q,G),Y.add(gt)}),_.pop(),m=null,Y},this.compileAsync=function(P,k,q=null){let Y=this.compile(P,k,q);return new Promise(G=>{function gt(){if(Y.forEach(function(St){mt.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){G(P);return}setTimeout(gt,10)}K.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ye=null;function ze(P){ye&&ye(P)}function rn(){on.stop()}function _e(){on.start()}let on=new _f;on.setAnimationLoop(ze),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(P){ye=P,jt.setAnimationLoop(P),P===null?on.stop():on.start()},jt.addEventListener("sessionstart",rn),jt.addEventListener("sessionend",_e),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),jt.enabled===!0&&jt.isPresenting===!0&&(jt.cameraAutoUpdate===!0&&jt.updateCamera(k),k=jt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,k,T),m=Pt.get(P,_.length),m.init(),_.push(m),xt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(xt),pt=this.localClippingEnabled,et=Wt.init(this.clippingPlanes,pt),y=yt.get(P,p.length),y.init(),p.push(y),Xn(P,k,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(B,X),this.info.render.frame++,et===!0&&Wt.beginShadows();let q=m.state.shadowsArray;if(it.render(q,P,k),et===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(y,P),m.setupLights(x._useLegacyLights),k.isArrayCamera){let Y=k.cameras;for(let G=0,gt=Y.length;G<gt;G++){let St=Y[G];Mh(y,P,St,St.viewport)}}else Mh(y,P,k);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(x,P,k),Xt.resetDefaultState(),I=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Xn(P,k,q,Y){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||$.intersectsSprite(P)){Y&&zt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(xt);let St=Q.update(P),Lt=P.material;Lt.visible&&y.push(P,St,Lt,q,zt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||$.intersectsObject(P))){let St=Q.update(P),Lt=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),zt.copy(P.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),zt.copy(St.boundingSphere.center)),zt.applyMatrix4(P.matrixWorld).applyMatrix4(xt)),Array.isArray(Lt)){let Ot=St.groups;for(let Kt=0,Vt=Ot.length;Kt<Vt;Kt++){let qt=Ot[Kt],De=Lt[qt.materialIndex];De&&De.visible&&y.push(P,St,De,q,zt.z,qt)}}else Lt.visible&&y.push(P,St,Lt,q,zt.z,null)}}let gt=P.children;for(let St=0,Lt=gt.length;St<Lt;St++)Xn(gt[St],k,q,Y)}function Mh(P,k,q,Y){let G=P.opaque,gt=P.transmissive,St=P.transparent;m.setupLightsView(q),et===!0&&Wt.setGlobalState(x.clippingPlanes,q),gt.length>0&&up(G,gt,k,q),Y&&Z.viewport(b.copy(Y)),G.length>0&&Zr(G,k,q),gt.length>0&&Zr(gt,k,q),St.length>0&&Zr(St,k,q),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function up(P,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let gt=ot.isWebGL2;bt===null&&(bt=new Bn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?Er:Mi,minFilter:br,samples:gt?4:0})),x.getDrawingBufferSize(Ut),gt?bt.setSize(Ut.x,Ut.y):bt.setSize(Fc(Ut.x),Fc(Ut.y));let St=x.getRenderTarget();x.setRenderTarget(bt),x.getClearColor(W),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Lt=x.toneMapping;x.toneMapping=Fn,Zr(P,q,Y),C.updateMultisampleRenderTarget(bt),C.updateRenderTargetMipmap(bt);let Ot=!1;for(let Kt=0,Vt=k.length;Kt<Vt;Kt++){let qt=k[Kt],De=qt.object,gn=qt.geometry,Ve=qt.material,Qn=qt.group;if(Ve.side===We&&De.layers.test(Y.layers)){let Ee=Ve.side;Ve.side=hn,Ve.needsUpdate=!0,bh(De,q,Y,gn,Ve,Qn),Ve.side=Ee,Ve.needsUpdate=!0,Ot=!0}}Ot===!0&&(C.updateMultisampleRenderTarget(bt),C.updateRenderTargetMipmap(bt)),x.setRenderTarget(St),x.setClearColor(W,L),x.toneMapping=Lt}function Zr(P,k,q){let Y=k.isScene===!0?k.overrideMaterial:null;for(let G=0,gt=P.length;G<gt;G++){let St=P[G],Lt=St.object,Ot=St.geometry,Kt=Y===null?St.material:Y,Vt=St.group;Lt.layers.test(q.layers)&&bh(Lt,k,q,Ot,Kt,Vt)}}function bh(P,k,q,Y,G,gt){P.onBeforeRender(x,k,q,Y,G,gt),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(x,k,q,Y,P,gt),G.transparent===!0&&G.side===We&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,x.renderBufferDirect(q,k,Y,G,P,gt),G.side=bi,G.needsUpdate=!0,x.renderBufferDirect(q,k,Y,G,P,gt),G.side=We):x.renderBufferDirect(q,k,Y,G,P,gt),P.onAfterRender(x,k,q,Y,G,gt)}function Kr(P,k,q){k.isScene!==!0&&(k=Et);let Y=mt.get(P),G=m.state.lights,gt=m.state.shadowsArray,St=G.state.version,Lt=vt.getParameters(P,G.state,gt,k,q),Ot=vt.getProgramCacheKey(Lt),Kt=Y.programs;Y.environment=P.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(P.isMeshStandardMaterial?H:w).get(P.envMap||Y.environment),Kt===void 0&&(P.addEventListener("dispose",ft),Kt=new Map,Y.programs=Kt);let Vt=Kt.get(Ot);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===St)return Sh(P,Lt),Vt}else Lt.uniforms=vt.getUniforms(P),P.onBuild(q,Lt,x),P.onBeforeCompile(Lt,x),Vt=vt.acquireProgram(Lt,Ot),Kt.set(Ot,Vt),Y.uniforms=Lt.uniforms;let qt=Y.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qt.clippingPlanes=Wt.uniform),Sh(P,Lt),Y.needsLights=pp(P),Y.lightsStateVersion=St,Y.needsLights&&(qt.ambientLightColor.value=G.state.ambient,qt.lightProbe.value=G.state.probe,qt.directionalLights.value=G.state.directional,qt.directionalLightShadows.value=G.state.directionalShadow,qt.spotLights.value=G.state.spot,qt.spotLightShadows.value=G.state.spotShadow,qt.rectAreaLights.value=G.state.rectArea,qt.ltc_1.value=G.state.rectAreaLTC1,qt.ltc_2.value=G.state.rectAreaLTC2,qt.pointLights.value=G.state.point,qt.pointLightShadows.value=G.state.pointShadow,qt.hemisphereLights.value=G.state.hemi,qt.directionalShadowMap.value=G.state.directionalShadowMap,qt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qt.spotShadowMap.value=G.state.spotShadowMap,qt.spotLightMatrix.value=G.state.spotLightMatrix,qt.spotLightMap.value=G.state.spotLightMap,qt.pointShadowMap.value=G.state.pointShadowMap,qt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function Eh(P){if(P.uniformsList===null){let k=P.currentProgram.getUniforms();P.uniformsList=Ls.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function Sh(P,k){let q=mt.get(P);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function fp(P,k,q,Y,G){k.isScene!==!0&&(k=Et),C.resetTextureUnits();let gt=k.fog,St=Y.isMeshStandardMaterial?k.environment:null,Lt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ci,Ot=(Y.isMeshStandardMaterial?H:w).get(Y.envMap||St),Kt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Vt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qt=!!q.morphAttributes.position,De=!!q.morphAttributes.normal,gn=!!q.morphAttributes.color,Ve=Fn;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ve=x.toneMapping);let Qn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ee=Qn!==void 0?Qn.length:0,Qt=mt.get(Y),Wa=m.state.lights;if(et===!0&&(pt===!0||P!==M)){let bn=P===M&&Y.id===I;Wt.setState(Y,P,bn)}let Ie=!1;Y.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Wa.state.version||Qt.outputColorSpace!==Lt||G.isBatchedMesh&&Qt.batching===!1||!G.isBatchedMesh&&Qt.batching===!0||G.isInstancedMesh&&Qt.instancing===!1||!G.isInstancedMesh&&Qt.instancing===!0||G.isSkinnedMesh&&Qt.skinning===!1||!G.isSkinnedMesh&&Qt.skinning===!0||G.isInstancedMesh&&Qt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Qt.instancingColor===!1&&G.instanceColor!==null||Qt.envMap!==Ot||Y.fog===!0&&Qt.fog!==gt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Wt.numPlanes||Qt.numIntersection!==Wt.numIntersection)||Qt.vertexAlphas!==Kt||Qt.vertexTangents!==Vt||Qt.morphTargets!==qt||Qt.morphNormals!==De||Qt.morphColors!==gn||Qt.toneMapping!==Ve||ot.isWebGL2===!0&&Qt.morphTargetsCount!==Ee)&&(Ie=!0):(Ie=!0,Qt.__version=Y.version);let Fi=Qt.currentProgram;Ie===!0&&(Fi=Kr(Y,k,G));let wh=!1,hr=!1,qa=!1,Qe=Fi.getUniforms(),Bi=Qt.uniforms;if(Z.useProgram(Fi.program)&&(wh=!0,hr=!0,qa=!0),Y.id!==I&&(I=Y.id,hr=!0),wh||M!==P){Qe.setValue(D,"projectionMatrix",P.projectionMatrix),Qe.setValue(D,"viewMatrix",P.matrixWorldInverse);let bn=Qe.map.cameraPosition;bn!==void 0&&bn.setValue(D,zt.setFromMatrixPosition(P.matrixWorld)),ot.logarithmicDepthBuffer&&Qe.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Qe.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,hr=!0,qa=!0)}if(G.isSkinnedMesh){Qe.setOptional(D,G,"bindMatrix"),Qe.setOptional(D,G,"bindMatrixInverse");let bn=G.skeleton;bn&&(ot.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Qe.setValue(D,"boneTexture",bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Qe.setOptional(D,G,"batchingTexture"),Qe.setValue(D,"batchingTexture",G._matricesTexture,C));let Xa=q.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0&&ot.isWebGL2===!0)&&ne.update(G,q,Fi),(hr||Qt.receiveShadow!==G.receiveShadow)&&(Qt.receiveShadow=G.receiveShadow,Qe.setValue(D,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Bi.envMap.value=Ot,Bi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),hr&&(Qe.setValue(D,"toneMappingExposure",x.toneMappingExposure),Qt.needsLights&&dp(Bi,qa),gt&&Y.fog===!0&&ht.refreshFogUniforms(Bi,gt),ht.refreshMaterialUniforms(Bi,Y,F,z,bt),Ls.upload(D,Eh(Qt),Bi,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ls.upload(D,Eh(Qt),Bi,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Qe.setValue(D,"center",G.center),Qe.setValue(D,"modelViewMatrix",G.modelViewMatrix),Qe.setValue(D,"normalMatrix",G.normalMatrix),Qe.setValue(D,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let bn=Y.uniformsGroups;for(let Ya=0,mp=bn.length;Ya<mp;Ya++)if(ot.isWebGL2){let Th=bn[Ya];he.update(Th,Fi),he.bind(Th,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function dp(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function pp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,k,q){mt.get(P.texture).__webglTexture=k,mt.get(P.depthTexture).__webglTexture=q;let Y=mt.get(P);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,k){let q=mt.get(P);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,q=0){T=P,S=k,E=q;let Y=!0,G=null,gt=!1,St=!1;if(P){let Ot=mt.get(P);Ot.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1):Ot.__webglFramebuffer===void 0?C.setupRenderTarget(P):Ot.__hasExternalTextures&&C.rebindTextures(P,mt.get(P.texture).__webglTexture,mt.get(P.depthTexture).__webglTexture);let Kt=P.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(St=!0);let Vt=mt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?G=Vt[k][q]:G=Vt[k],gt=!0):ot.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?G=mt.get(P).__webglMultisampledFramebuffer:Array.isArray(Vt)?G=Vt[q]:G=Vt,b.copy(P.viewport),N.copy(P.scissor),V=P.scissorTest}else b.copy(J).multiplyScalar(F).floor(),N.copy(j).multiplyScalar(F).floor(),V=dt;if(Z.bindFramebuffer(D.FRAMEBUFFER,G)&&ot.drawBuffers&&Y&&Z.drawBuffers(P,G),Z.viewport(b),Z.scissor(N),Z.setScissorTest(V),gt){let Ot=mt.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,q)}else if(St){let Ot=mt.get(P.texture),Kt=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,q||0,Kt)}I=-1},this.readRenderTargetPixels=function(P,k,q,Y,G,gt,St){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=mt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){Z.bindFramebuffer(D.FRAMEBUFFER,Lt);try{let Ot=P.texture,Kt=Ot.format,Vt=Ot.type;if(Kt!==On&&_t.convert(Kt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let qt=Vt===Er&&(K.has("EXT_color_buffer_half_float")||ot.isWebGL2&&K.has("EXT_color_buffer_float"));if(Vt!==Mi&&_t.convert(Vt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===_i&&(ot.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-Y&&q>=0&&q<=P.height-G&&D.readPixels(k,q,Y,G,_t.convert(Kt),_t.convert(Vt),gt)}finally{let Ot=T!==null?mt.get(T).__webglFramebuffer:null;Z.bindFramebuffer(D.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(P,k,q=0){let Y=Math.pow(2,-q),G=Math.floor(k.image.width*Y),gt=Math.floor(k.image.height*Y);C.setTexture2D(k,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,P.x,P.y,G,gt),Z.unbindTexture()},this.copyTextureToTexture=function(P,k,q,Y=0){let G=k.image.width,gt=k.image.height,St=_t.convert(q.format),Lt=_t.convert(q.type);C.setTexture2D(q,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Y,P.x,P.y,G,gt,St,Lt,k.image.data):k.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Y,P.x,P.y,k.mipmaps[0].width,k.mipmaps[0].height,St,k.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,Y,P.x,P.y,St,Lt,k.image),Y===0&&q.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(P,k,q,Y,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=P.max.x-P.min.x+1,St=P.max.y-P.min.y+1,Lt=P.max.z-P.min.z+1,Ot=_t.convert(Y.format),Kt=_t.convert(Y.type),Vt;if(Y.isData3DTexture)C.setTexture3D(Y,0),Vt=D.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),Vt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);let qt=D.getParameter(D.UNPACK_ROW_LENGTH),De=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ve=D.getParameter(D.UNPACK_SKIP_ROWS),Qn=D.getParameter(D.UNPACK_SKIP_IMAGES),Ee=q.isCompressedTexture?q.mipmaps[G]:q.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,P.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,P.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,P.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(Vt,G,k.x,k.y,k.z,gt,St,Lt,Ot,Kt,Ee.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Vt,G,k.x,k.y,k.z,gt,St,Lt,Ot,Ee.data)):D.texSubImage3D(Vt,G,k.x,k.y,k.z,gt,St,Lt,Ot,Kt,Ee),D.pixelStorei(D.UNPACK_ROW_LENGTH,qt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,De),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qn),G===0&&Y.generateMipmaps&&D.generateMipmap(Vt),Z.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),Z.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,Z.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===bl?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===sa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===me?$i:pf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===$i?me:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},jc=class extends Hs{};jc.prototype.isWebGL1Renderer=!0;var zs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kn=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ar=class extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$u=new ue,Qc=new Sr,vo=new Os,Mo=new R,Go=class extends qe{constructor(t=new le,e=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;$u.copy(s).invert(),Qc.copy(t.ray).applyMatrix4($u);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let m=l.getX(g);Mo.fromBufferAttribute(u,m),Zu(Mo,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Mo.fromBufferAttribute(u,g),Zu(Mo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zu(i,t,e,n,s,r,o){let a=Qc.distanceSqToPoint(i);if(a<e){let c=new R;Qc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var Zn=class extends Tn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new tt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,c=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos($e(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rr=class extends An{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new tt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},tl=class extends Rr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var bo=new R,wc=new Sl,Tc=new Sl,Ac=new Sl,Cr=class extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),l=bo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),wc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,y,m),Tc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,y,m),Ac.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Tc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ac.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(wc.calc(c),Tc.calc(c),Ac.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ku(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function ax(i,t){let e=1-i;return e*e*t}function cx(i,t){return 2*(1-i)*i*t}function lx(i,t){return i*i*t}function _r(i,t,e,n){return ax(i,t)+cx(i,e)+lx(i,n)}function hx(i,t){let e=1-i;return e*e*e*t}function ux(i,t){let e=1-i;return 3*e*e*i*t}function fx(i,t){return 3*(1-i)*i*i*t}function dx(i,t){return i*i*i*t}function vr(i,t,e,n,s){return hx(i,t)+ux(i,e)+fx(i,n)+dx(i,s)}var Wo=class extends An{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pr=class extends An{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qo=class extends An{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends An{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends An{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends An{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ku(a,c.x,l.x,h.x,u.x),Ku(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},Zo=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:Cr,CubicBezierCurve:Wo,CubicBezierCurve3:Pr,EllipseCurve:Rr,LineCurve:qo,LineCurve3:el,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:Yo,SplineCurve:$o}),nl=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Zo[s.type]().fromJSON(s))}return this}},Ji=class extends nl{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qo(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Xo(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Wo(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $o(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Rr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vs=class i extends le{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$e(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,f=new tt,d=new R,g=new R,y=new R,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let _=0;_<=e;_++){let x=n+_*h*s,v=Math.sin(x),S=Math.cos(x);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*S,o.push(u.x,u.y,u.z),f.x=_/e,f.y=E/(t.length-1),a.push(f.x,f.y);let T=c[3*E+0]*v,I=c[3*E+1],M=c[3*E+0]*S;l.push(T,I,M)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){let v=x+_*t.length,S=v,E=v+t.length,T=v+t.length+1,I=v+1;r.push(S,E,I),r.push(T,I,E)}this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("uv",new Ct(a,2)),this.setAttribute("normal",new Ct(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ir=class i extends le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new R,h=new tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fe=class i extends le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],m=n/2,p=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function _(){let v=new R,S=new R,E=0,T=(e-t)/n;for(let I=0;I<=r;I++){let M=[],b=I/r,N=b*(e-t)+t;for(let V=0;V<=s;V++){let W=V/s,L=W*c+a,O=Math.sin(L),z=Math.cos(L);S.x=N*O,S.y=-b*n+m,S.z=N*z,u.push(S.x,S.y,S.z),v.set(O,T,z).normalize(),f.push(v.x,v.y,v.z),d.push(W,1-b),M.push(g++)}y.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let b=y[M][I],N=y[M+1][I],V=y[M+1][I+1],W=y[M][I+1];h.push(b,N,W),h.push(N,V,W),E+=6}l.addGroup(p,E,0),p+=E}function x(v){let S=g,E=new tt,T=new R,I=0,M=v===!0?t:e,b=v===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let N=g;for(let V=0;V<=s;V++){let L=V/s*c+a,O=Math.cos(L),z=Math.sin(L);T.x=M*z,T.y=m*b,T.z=M*O,u.push(T.x,T.y,T.z),f.push(0,b,0),E.x=O*.5+.5,E.y=z*.5*b+.5,d.push(E.x,E.y),g++}for(let V=0;V<s;V++){let W=S+V,L=N+V;v===!0?h.push(L,L+1,W):h.push(L+1,L,W),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ui=class i extends fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},il=class i extends le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new R,v=new R,S=new R;for(let E=0;E<e.length;E+=3)d(e[E+0],x),d(e[E+1],v),d(e[E+2],S),c(x,v,S,_)}function c(_,x,v,S){let E=S+1,T=[];for(let I=0;I<=E;I++){T[I]=[];let M=_.clone().lerp(v,I/E),b=x.clone().lerp(v,I/E),N=E-I;for(let V=0;V<=N;V++)V===0&&I===E?T[I][V]=M:T[I][V]=M.clone().lerp(b,V/N)}for(let I=0;I<E;I++)for(let M=0;M<2*(E-I)-1;M++){let b=Math.floor(M/2);M%2===0?(f(T[I][b+1]),f(T[I+1][b]),f(T[I][b])):(f(T[I][b+1]),f(T[I+1][b+1]),f(T[I+1][b]))}}function l(_){let x=new R;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(_),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){let _=new R;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let v=m(_)/2/Math.PI+.5,S=p(_)/Math.PI+.5;o.push(v,1-S)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let x=o[_+0],v=o[_+2],S=o[_+4],E=Math.max(x,v,S),T=Math.min(x,v,S);E>.9&&T<.1&&(x<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,x){let v=_*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){let _=new R,x=new R,v=new R,S=new R,E=new tt,T=new tt,I=new tt;for(let M=0,b=0;M<r.length;M+=9,b+=6){_.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),E.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),S.copy(_).add(x).add(v).divideScalar(3);let N=m(S);y(E,b+0,_,N),y(T,b+2,x,N),y(I,b+4,v,N)}}function y(_,x,v,S){S<0&&_.x===1&&(o[x]=_.x-1),v.x===0&&v.z===0&&(o[x]=S/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ze=class extends Ji{constructor(t){super(t),this.uuid=Xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ji().fromJSON(s))}return this}},px={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=wf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=_x(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Lr(r,o,e,a,c,d,0),o}};function wf(i,t,e,n,s){let r,o;if(s===Px(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ju(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ju(r,i[r],i[r+1],o);return o&&oa(o,o.next)&&(Ur(o),o=o.next),o}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(oa(e,e.next)||we(e.prev,e,e.next)===0)){if(Ur(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Sx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?gx(i,n,s,r):mx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ur(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=xx(ji(i),t,e),Lr(i,t,e,n,s,r,2)):o===2&&yx(i,t,e,n,s,r):Lr(ji(i),t,e,n,s,r,1);break}}}function mx(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Cs(s,a,r,c,o,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,y=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=sl(d,g,t,e,n),_=sl(y,m,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=_;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Cs(a,h,c,u,l,f,x.x,x.y)&&we(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Cs(a,h,c,u,l,f,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Cs(a,h,c,u,l,f,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Cs(a,h,c,u,l,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!oa(s,r)&&Tf(s,n,n.next,r)&&Dr(s,r)&&Dr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ur(n),Ur(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function yx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ax(o,a)){let c=Af(o,a);o=ji(o,o.next),c=ji(c,c.next),Lr(o,t,e,n,s,r,0),Lr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _x(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=wf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Tx(l));for(s.sort(vx),r=0;r<s.length;r++)e=Mx(s[r],e);return e}function vx(i,t){return i.x-t.x}function Mx(i,t){let e=bx(i,t);if(!e)return t;let n=Af(e,i);return ji(n,n.next),ji(e,e.next)}function bx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Cs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Dr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Ex(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Ex(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function Sx(i,t,e,n){let s=i;do s.z===0&&(s.z=sl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wx(s)}function wx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function sl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Tx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ax(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rx(i,t)&&(Dr(i,t)&&Dr(t,i)&&Cx(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||oa(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function oa(i,t){return i.x===t.x&&i.y===t.y}function Tf(i,t,e,n){let s=So(we(i,t,e)),r=So(we(i,t,n)),o=So(we(e,n,i)),a=So(we(e,n,t));return!!(s!==r&&o!==a||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||o===0&&Eo(e,i,n)||a===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function So(i){return i>0?1:i<0?-1:0}function Rx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Tf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Dr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function Cx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Af(i,t){let e=new rl(i.i,i.x,i.y),n=new rl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ju(i,t,e,n){let s=new rl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Px(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ai=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ju(t),Qu(n,t);let o=t.length;e.forEach(ju);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Qu(n,e[c]);let a=px.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ju(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Hn=class i extends le{constructor(t=new Ze([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Ct(s,3)),this.setAttribute("uv",new Ct(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Ix,x,v=!1,S,E,T,I;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,S=p.computeFrenetFrames(h,!1),E=new R,T=new R,I=new R),f||(m=0,d=0,g=0,y=0);let M=a.extractPoints(l),b=M.shape,N=M.holes;if(!ai.isClockWise(b)){b=b.reverse();for(let D=0,at=N.length;D<at;D++){let K=N[D];ai.isClockWise(K)&&(N[D]=K.reverse())}}let W=ai.triangulateShape(b,N),L=b;for(let D=0,at=N.length;D<at;D++){let K=N[D];b=b.concat(K)}function O(D,at,K){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(at,K)}let z=b.length,F=W.length;function B(D,at,K){let ot,Z,Tt,mt=D.x-at.x,C=D.y-at.y,w=K.x-D.x,H=K.y-D.y,st=mt*mt+C*C,nt=mt*H-C*w;if(Math.abs(nt)>Number.EPSILON){let Q=Math.sqrt(st),vt=Math.sqrt(w*w+H*H),ht=at.x-C/Q,yt=at.y+mt/Q,Pt=K.x-H/vt,Wt=K.y+w/vt,it=((Pt-ht)*H-(Wt-yt)*w)/(mt*H-C*w);ot=ht+mt*it-D.x,Z=yt+C*it-D.y;let ae=ot*ot+Z*Z;if(ae<=2)return new tt(ot,Z);Tt=Math.sqrt(ae/2)}else{let Q=!1;mt>Number.EPSILON?w>Number.EPSILON&&(Q=!0):mt<-Number.EPSILON?w<-Number.EPSILON&&(Q=!0):Math.sign(C)===Math.sign(H)&&(Q=!0),Q?(ot=-C,Z=mt,Tt=Math.sqrt(st)):(ot=mt,Z=C,Tt=Math.sqrt(st/2))}return new tt(ot/Tt,Z/Tt)}let X=[];for(let D=0,at=L.length,K=at-1,ot=D+1;D<at;D++,K++,ot++)K===at&&(K=0),ot===at&&(ot=0),X[D]=B(L[D],L[K],L[ot]);let J=[],j,dt=X.concat();for(let D=0,at=N.length;D<at;D++){let K=N[D];j=[];for(let ot=0,Z=K.length,Tt=Z-1,mt=ot+1;ot<Z;ot++,Tt++,mt++)Tt===Z&&(Tt=0),mt===Z&&(mt=0),j[ot]=B(K[ot],K[Tt],K[mt]);J.push(j),dt=dt.concat(j)}for(let D=0;D<m;D++){let at=D/m,K=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+y;for(let Z=0,Tt=L.length;Z<Tt;Z++){let mt=O(L[Z],X[Z],ot);xt(mt.x,mt.y,-K)}for(let Z=0,Tt=N.length;Z<Tt;Z++){let mt=N[Z];j=J[Z];for(let C=0,w=mt.length;C<w;C++){let H=O(mt[C],j[C],ot);xt(H.x,H.y,-K)}}}let $=g+y;for(let D=0;D<z;D++){let at=f?O(b[D],dt[D],$):b[D];v?(T.copy(S.normals[0]).multiplyScalar(at.x),E.copy(S.binormals[0]).multiplyScalar(at.y),I.copy(x[0]).add(T).add(E),xt(I.x,I.y,I.z)):xt(at.x,at.y,0)}for(let D=1;D<=h;D++)for(let at=0;at<z;at++){let K=f?O(b[at],dt[at],$):b[at];v?(T.copy(S.normals[D]).multiplyScalar(K.x),E.copy(S.binormals[D]).multiplyScalar(K.y),I.copy(x[D]).add(T).add(E),xt(I.x,I.y,I.z)):xt(K.x,K.y,u/h*D)}for(let D=m-1;D>=0;D--){let at=D/m,K=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+y;for(let Z=0,Tt=L.length;Z<Tt;Z++){let mt=O(L[Z],X[Z],ot);xt(mt.x,mt.y,u+K)}for(let Z=0,Tt=N.length;Z<Tt;Z++){let mt=N[Z];j=J[Z];for(let C=0,w=mt.length;C<w;C++){let H=O(mt[C],j[C],ot);v?xt(H.x,H.y+x[h-1].y,x[h-1].x+K):xt(H.x,H.y,u+K)}}}et(),pt();function et(){let D=s.length/3;if(f){let at=0,K=z*at;for(let ot=0;ot<F;ot++){let Z=W[ot];Ut(Z[2]+K,Z[1]+K,Z[0]+K)}at=h+m*2,K=z*at;for(let ot=0;ot<F;ot++){let Z=W[ot];Ut(Z[0]+K,Z[1]+K,Z[2]+K)}}else{for(let at=0;at<F;at++){let K=W[at];Ut(K[2],K[1],K[0])}for(let at=0;at<F;at++){let K=W[at];Ut(K[0]+z*h,K[1]+z*h,K[2]+z*h)}}n.addGroup(D,s.length/3-D,0)}function pt(){let D=s.length/3,at=0;bt(L,at),at+=L.length;for(let K=0,ot=N.length;K<ot;K++){let Z=N[K];bt(Z,at),at+=Z.length}n.addGroup(D,s.length/3-D,1)}function bt(D,at){let K=D.length;for(;--K>=0;){let ot=K,Z=K-1;Z<0&&(Z=D.length-1);for(let Tt=0,mt=h+m*2;Tt<mt;Tt++){let C=z*Tt,w=z*(Tt+1),H=at+ot+C,st=at+Z+C,nt=at+Z+w,Q=at+ot+w;zt(H,st,nt,Q)}}}function xt(D,at,K){c.push(D),c.push(at),c.push(K)}function Ut(D,at,K){Et(D),Et(at),Et(K);let ot=s.length/3,Z=_.generateTopUV(n,s,ot-3,ot-2,ot-1);kt(Z[0]),kt(Z[1]),kt(Z[2])}function zt(D,at,K,ot){Et(D),Et(at),Et(ot),Et(at),Et(K),Et(ot);let Z=s.length/3,Tt=_.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);kt(Tt[0]),kt(Tt[1]),kt(Tt[3]),kt(Tt[1]),kt(Tt[2]),kt(Tt[3])}function Et(D){s.push(c[D*3+0]),s.push(c[D*3+1]),s.push(c[D*3+2])}function kt(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zo[s.type]().fromJSON(s)),new i(n,t.options)}},Ix={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new tt(r,o),new tt(a,c),new tt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new tt(o,1-c),new tt(l,1-u),new tt(f,1-g),new tt(y,1-p)]:[new tt(a,1-c),new tt(h,1-u),new tt(d,1-g),new tt(m,1-p)]}};function Lx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var un=class i extends il{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ko=class i extends le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new R,g=new tt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let _=p+m,x=_,v=_+n+1,S=_+n+2,E=_+1;a.push(x,v,E),a.push(v,S,E)}}this.setIndex(a),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Jo=class i extends le{constructor(t=new Ze([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(o,2));function l(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;ai.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];ai.isClockWise(_)===!0&&(g[m]=_.reverse())}let y=ai.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];d=d.concat(_)}for(let m=0,p=d.length;m<p;m++){let _=d[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=y.length;m<p;m++){let _=y[m],x=_[0]+u,v=_[1]+u,S=_[2]+u;n.push(x,v,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Dx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Dx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var jo=class i extends le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,f=new R,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let _=[],x=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let E=S/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(E+v,1-x),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let x=h[p][_+1],v=h[p][_],S=h[p+1][_],E=h[p+1][_+1];(p!==0||o>0)&&d.push(x,v,E),(p!==n-1||c<Math.PI)&&d.push(v,S,E)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rn=class i extends le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let y=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let y=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,_=(s+1)*d+g;o.push(y,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qo=class i extends le{constructor(t=new Yo(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new tt,h=new R,u=[],f=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function y(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),_(),p()}function m(x){h=t.getPointAt(x/e,h);let v=o.normals[x],S=o.binormals[x];for(let E=0;E<=s;E++){let T=E/s*Math.PI*2,I=Math.sin(T),M=-Math.cos(T);c.x=M*v.x+I*S.x,c.y=M*v.y+I*S.y,c.z=M*v.z+I*S.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){let S=(s+1)*(x-1)+(v-1),E=(s+1)*x+(v-1),T=(s+1)*x+v,I=(s+1)*(x-1)+v;g.push(S,E,I),g.push(E,T,I)}}function _(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)l.x=x/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Zo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var cn=class extends li{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var _n=class extends li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function wo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ux(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ol=class extends Gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:su,endingEnd:su}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ru:r=t,a=2*e-n;break;case ou:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ru:o=t,c=2*n-e;break;case ou:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,_=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*y+.5*g,v=d*m-d*y;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+_*o[l+S]+x*o[c+S]+v*o[u+S];return r}},al=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},cl=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wo(e,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wo(t.times,Array),values:wo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ao:e=this.InterpolantFactoryMethodDiscrete;break;case Ro:e=this.InterpolantFactoryMethodLinear;break;case tc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return tc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Ux(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Ro;var Qi=class extends zn{};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ao;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends zn{};ll.prototype.ValueTypeName="color";var hl=class extends zn{};hl.prototype.ValueTypeName="number";var ul=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ke.slerpFlat(r,0,o,l-a,o,l,c);return r}},Nr=class extends zn{InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.DefaultInterpolation=Ro;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends zn{};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ao;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends zn{};fl.prototype.ValueTypeName="vector";var dl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Nx=new dl,pl=class{constructor(t){this.manager=t!==void 0?t:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ta=class extends Ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Rc=new ue,tf=new R,ef=new R,ea=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(tf),ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ef),e.updateMatrixWorld(),Rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nf=new ue,gr=new R,Cc=new R,ml=class extends ea{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(gr),Cc.copy(n.position),Cc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cc),n.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf)}},Or=class extends Ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},gl=class extends ea{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nn=class extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new gl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Si=class extends Ws{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var wl="\\[\\]\\.:\\/",Ox=new RegExp("["+wl+"]","g"),Tl="[^"+wl+"]",Fx="[^"+wl.replace("\\.","")+"]",Bx=/((?:WC+[\/:])*)/.source.replace("WC",Tl),kx=/(WCOD+)?/.source.replace("WCOD",Fx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),Vx=new RegExp("^"+Bx+kx+Hx+zx+"$"),Gx=["material","materials","bones","map"],xl=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ox,"")}static parseTrackName(t){let e=Vx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=xl;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C_=new Float32Array(1);var qs=class{constructor(t,e,n=0,s=1/0){this.ray=new Sr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return yl(t,this,n,e),n.sort(sf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)yl(t[s],this,n,e);return n.sort(sf),n}};function sf(i,t){return i.distance-t.distance}function yl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)yl(s[r],t,e,!0)}}var na=class{constructor(){this.type="ShapePath",this.color=new wt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ji,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){let _=[];for(let x=0,v=p.length;x<v;x++){let S=p[x],E=new Ze;E.curves=S.curves,_.push(E)}return _}function n(p,_){let x=_.length,v=!1;for(let S=x-1,E=0;E<x;S=E++){let T=_[S],I=_[E],M=I.x-T.x,b=I.y-T.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(T=_[E],M=-M,I=_[S],b=-b),p.y<T.y||p.y>I.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{let N=b*(p.x-T.x)-M*(p.y-T.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(p.y!==T.y)continue;if(I.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=I.x)return!0}}return v}let s=ai.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new Ze,c.curves=a.curves,l.push(c),l;let h=!s(r[0].getPoints());h=t?!h:h;let u=[],f=[],d=[],g=0,y;f[g]=void 0,d[g]=[];for(let p=0,_=r.length;p<_;p++)a=r[p],y=a.getPoints(),o=s(y),o=t?!o:o,o?(!h&&f[g]&&g++,f[g]={s:new Ze,p:y},f[g].s.curves=a.curves,h&&g++,d[g]=[]):d[g].push({h:a,p:y[0]});if(!f[0])return e(r);if(f.length>1){let p=!1,_=0;for(let x=0,v=f.length;x<v;x++)u[x]=[];for(let x=0,v=f.length;x<v;x++){let S=d[x];for(let E=0;E<S.length;E++){let T=S[E],I=!0;for(let M=0;M<f.length;M++)n(T.p,f[M].p)&&(x!==M&&_++,I?(I=!1,u[M].push(T)):p=!0);I&&u[x].push(T)}}_>0&&p===!1&&(d=u)}let m;for(let p=0,_=f.length;p<_;p++){c=f[p].s,l.push(c),m=d[p];for(let x=0,v=m.length;x<v;x++)c.holes.push(m[x].h)}return l}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);function sn(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Wx(i,t,e){let n=Math.ceil(i/t)+1,s=[];for(let a=0;a<n;a++){s[a]=[];for(let c=0;c<n;c++)s[a][c]=e()}let r=(a,c)=>s[(c%(n-1)+(n-1))%(n-1)][(a%(n-1)+(n-1))%(n-1)],o=a=>a*a*(3-2*a);return(a,c)=>{let l=a/t,h=c/t,u=Math.floor(l),f=Math.floor(h),d=o(l-u),g=o(h-f),y=r(u,f),m=r(u+1,f),p=r(u,f+1),_=r(u+1,f+1);return(y*(1-d)+m*d)*(1-g)+(p*(1-d)+_*d)*g}}function Ne(i,t,e=4,n=16){let s=[];for(let r=0;r<e;r++)s.push(Wx(i,Math.max(2,n>>r),t));return(r,o)=>{let a=0,c=.5,l=0;for(let h of s)a+=h(r,o)*c,l+=c,c*=.5;return a/l}}var re=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],Oe=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],Al=i=>Math.max(0,Math.min(255,i|0)),Pf=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function vn(i,t,e=i){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=s.createImageData(i,e),o=r.data;for(let a=0;a<e;a++)for(let c=0;c<i;c++){let[l,h,u]=t(c,a),f=(a*i+c)*4;o[f]=Al(l),o[f+1]=Al(h),o[f+2]=Al(u),o[f+3]=255}return s.putImageData(r,0,0),n}function Rl(i,t,e,n,s,r){let o=s(i*.35,t*6+r)*.6+s(i*3,t*.2)*.4,a=Math.sin((i*.9+o*18)*.7)*.5+.5;return Oe(e,n,a*.55+o*.45)}function Zs(i,t,e,n,s,r,o){let a=Oe(e,n,r(i,t)),c=Math.abs(o(i,t)-.5);return c<.03&&(a=Oe(a,s,.7-c*14)),a}function aa(i){return vn(256,(n,s)=>{let r=Math.floor(n/32),o=Math.floor(s/32),a=(r+o)%2===1,c=n%32,l=s%32,h=i(n,s,r,o,a,c,l);return(c===0||l===31)&&(h=Oe(h,[0,0,0],.45)),(c===31||l===0)&&(h=Oe(h,[255,255,255],a?.08:.16)),h})}var qx={glass(){let i=sn(7),t=Ne(256,i,3,24),e=re("#b488c6"),n=re("#6f4588"),s=re("#3b1247"),r=re("#160618");return aa((o,a,c,l,h,u,f)=>{let d=h?Oe(s,r,t(o,a)):Oe(e,n,t(o,a));return Math.abs((u+f)%32-11)<2&&(d=Oe(d,[255,240,255],h?.12:.22)),d})},wood(){let i=sn(8),t=Ne(256,i,4,24),e=re("#d8c39a"),n=re("#a98c5e"),s=re("#5a3b24"),r=re("#2e1b10");return aa((o,a,c,l,h)=>h?Rl(o+c*13,a+l*7,s,r,t,l*31):Rl(a+l*5,o+c*11,e,n,t,c*17))},marble(){let i=sn(9),t=Ne(256,i,4,20),e=Ne(256,i,3,40),n=re("#efe6d2"),s=re("#cbbfa6"),r=re("#24423a"),o=re("#0c1a16");return aa((a,c,l,h,u)=>u?Zs(a+l*40,c,r,o,re("#7fa898"),t,e):Zs(a,c+h*40,n,s,re("#8f8470"),t,e))},tile(){let i=sn(10),t=Ne(256,i,2,16);return aa((e,n,s,r,o)=>{let a=t(e,n)*16+Pf[n%4*4+e%4],c=o?[30,30,36]:[214,210,200];return a>20?Oe(c,o?[60,60,70]:[170,166,158],.6):c})}},Xx={glass(){return Rf(99)},tile(){return Rf(98)},wood(){let i=sn(97),t=Ne(64,i,4,16);return vn(64,(e,n)=>Rl(e,n,re("#3b2416"),re("#1a0e08"),t,0))},marble(){let i=sn(96),t=Ne(64,i,3,12),e=Ne(64,i,3,20);return vn(64,(n,s)=>Zs(n,s,re("#3a3a36"),re("#16140f"),re("#8a7a5a"),t,e))}};function Rf(i){let t=sn(i),e=Ne(64,t,3,8),n=re("#b9bec6"),s=re("#4a4e56");return vn(64,(r,o)=>{let a=Oe(n,s,(Math.sin(o*.55)*.5+.5)*.7+e(r,o)*.3);return o%16===3&&(a=Oe(a,[255,255,255],.5)),o%16===11&&(a=Oe(a,[0,0,0],.5)),a})}var Yx={stars(){let i=sn(5);return vn(128,()=>{let t=i();return t<.012?[70,66,80]:t<.02?[40,36,48]:[4,2,6]})},velvet(){let i=sn(6),t=Ne(128,i,5,32),e=re("#4a1d22"),n=re("#1e0b0e");return vn(128,(s,r)=>{let o=Oe(e,n,t(s,r));return i()<.05&&(o=Oe(o,e,.4)),o})},void(){let i=sn(4),t=Ne(128,i,4,32);return vn(128,(e,n)=>Oe([26,12,44],[6,3,14],t(e,n)+Pf[n%4*4+e%4]/64))}},If={stars:{bg:197124,fog:[12,26],ambient:[5261418,1],key:[16777215,1.6],fill:[16734928,18],fill2:[5234943,10]},velvet:{bg:722183,fog:[11,24],ambient:[6969938,1.2],key:[16769984,1.9],fill:[16730682,14],fill2:[16756848,4]},void:{bg:853528,fog:[10,22],ambient:[4209264,1.1],key:[14213375,1.5],fill:[9063167,16],fill2:[4243711,10]}},$x={ivoryWhite(){let i=sn(11),t=Ne(64,i,4,12),e=Ne(64,i,3,20);return vn(64,(n,s)=>Zs(n,s,re("#efe4cc"),re("#c9b893"),re("#8f8470"),t,e))},ivoryBlack(){let i=sn(23),t=Ne(64,i,4,10),e=re("#3a2f28"),n=re("#17110e");return vn(64,(s,r)=>Oe(Oe(e,n,t(s,r)),n,(Math.sin(r*.8+t(s*2,r)*6)*.5+.5)*.3))},marbleWhite(){let i=sn(31),t=Ne(64,i,4,10),e=Ne(64,i,3,16);return vn(64,(n,s)=>Zs(n,s,re("#f4f2ee"),re("#d4d0c8"),re("#7a7a80"),t,e))},marbleBlack(){let i=sn(37),t=Ne(64,i,4,10),e=Ne(64,i,3,16);return vn(64,(n,s)=>Zs(n,s,re("#1e3a32"),re("#08120e"),re("#9ac0b0"),t,e))},brushed(){let i=sn(41),t=Ne(64,i,3,6);return vn(64,(e,n)=>{let s=200+t(e*.2,n*4)*55;return[s,s,s]})}};function Zx(){let t=sn(3),e=Ne(64,t,2,16),n=["px","nx","py","ny","pz","nz"],s={px:(a,c)=>[1,-c,-a],nx:(a,c)=>[-1,-c,a],py:(a,c)=>[a,1,c],ny:(a,c)=>[a,-1,-c],pz:(a,c)=>[a,-c,1],nz:(a,c)=>[-a,-c,-1]},r=n.map(a=>vn(64,(c,l)=>{let h=c/63*2-1,u=l/63*2-1,[f,d,g]=s[a](h,u),y=Math.hypot(f,d,g),m=d/y,p=Math.atan2(g,f),_=e(c,l)*.15;if(m>.55){let S=Math.floor(p/Math.PI*4+100)%2;return Oe(S?[218,218,230]:[138,138,160],[86,82,106],(1-m)*.8+_)}if(m>.12)return Oe([215,218,228],[70,66,90],(m-.12)/.43+_);if(m>-.06)return[255,252,255];let x=Math.floor(p/Math.PI*6+100)%2,v=Math.min(1,(-m-.06)/.9);return Oe(x?[120,70,110]:[60,110,120],[8,4,10],v*.9+_)})),o=new Bs(r);return o.magFilter=Se,o.minFilter=Se,o.generateMipmaps=!1,o.colorSpace=me,o.needsUpdate=!0,o}function Cf(i){return i.magFilter=Se,i.minFilter=Se,i.generateMipmaps=!1,i.colorSpace=me,i.wrapS=i.wrapT=Mr,i.needsUpdate=!0,i}var ca=class{constructor(){this.cache=new Map,this.overrides={},this.env=null}async loadOverrides(t=[]){await Promise.all(t.map(e=>new Promise(n=>{let s=new Image;s.onload=()=>{this.overrides[e]=Cf(new Zn(s)),n()},s.onerror=()=>n(),s.src=`assets/textures/${e}.png`})))}get(t,e,n){return n&&this.overrides[n]?this.overrides[n]:(this.cache.has(t)||this.cache.set(t,Cf(new Zn(e()))),this.cache.get(t))}board(t){return this.get("board:"+t,qx[t],"board")}rim(t){return this.get("rim:"+t,Xx[t],"rim")}table(t){return this.get("table:"+t,Yx[t],"table")}piece(t,e){return this.get("piece:"+t,$x[t],e)}envMap(){return this.env||(this.env=Zx()),this.env}};var Kx=4,Cl=.8,Jx=.75;function jx(i){return new ue().set(0,0,-Cl,0,Jx,0,0,0,0,-Cl,0,Cl*i,0,0,0,1)}var la=[[0,0],[.33,0],[.33,.07],[.25,.12]],Qx={p:[...la,[.17,.3],[.12,.38],[.19,.42],[.15,.5],[.08,.6],[0,.63]],r:[...la,[.21,.42],[.27,.5],[.27,.68],[0,.68]],n:[...la,[.2,.3],[0,.3]],b:[...la,[.2,.42],[.13,.5],[.23,.58],[.21,.7],[.12,.84],[.06,.88],[0,.9]],q:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.62],[.28,.72],[.29,.8],[.2,.88],[.14,.98],[0,1]],k:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.64],[.29,.74],[.29,.84],[.2,.92],[.09,.98],[0,.98]]},ty={p:.63,r:.8,n:.9,b:1,q:1.14,k:1.25};function ey(i,t=Kx){let e=Math.max(...i.map(c=>c[1]))||1,n=i.map(([c,l],h)=>{let u=[];if(h%2===1&&c>0){u.push(0);for(let f=0;f<t;f++)u.push((f+.5)*Math.PI/t);u.push(Math.PI)}else for(let f=0;f<=t;f++)u.push(f*Math.PI/t);return u.map(f=>({p:[c*Math.sin(f),l,c*Math.cos(f)],uv:[f/Math.PI,l/e],a:f}))}),s=[],r=[],o=(c,l,h)=>{let u=l.p[0]-c.p[0],f=l.p[1]-c.p[1],d=l.p[2]-c.p[2],g=h.p[0]-c.p[0],y=h.p[1]-c.p[1],m=h.p[2]-c.p[2];if(!(Math.hypot(f*m-d*y,d*g-u*m,u*y-f*g)<1e-9))for(let p of[c,l,h])s.push(...p.p),r.push(...p.uv)};for(let c=0;c<n.length-1;c++){let l=n[c],h=n[c+1],u=0,f=0;for(;u<l.length-1||f<h.length-1;){let d=u<l.length-1?l[u+1].a:1/0,g=f<h.length-1?h[f+1].a:1/0;d<=g?(o(l[u],l[u+1],h[f]),u++):(o(l[u],h[f+1],h[f]),f++)}}let a=new le;return a.setAttribute("position",new Ct(s,3)),a.setAttribute("uv",new Ct(r,2)),a}var ha=(i,t,e,n,s,r)=>new ie(i,t,e).translate(n,s,r),Lf=(i,t)=>new un(i,0).translate(0,t,0),ny=[[-.16,.28],[.16,.28],[.17,.5],[.3,.6],[.31,.72],[.14,.78],[.1,.9],[0,.82],[-.1,.9],[-.13,.76],[-.2,.6],[-.18,.4]],iy=[[-.18,.42],[-.2,.6],[-.13,.76],[-.1,.88],[-.04,.8],[-.07,.72],[-.12,.58],[-.1,.44]];function Df(i,t){let e=new Ze,n=i.map(([o,a])=>[-o,a]);e.moveTo(n[0][0],n[0][1]);for(let o=1;o<n.length;o++)e.lineTo(n[o][0],n[o][1]);e.closePath();let s=new Hn(e,t),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),c=r.getY(o),l=r.getZ(o);r.setXYZ(o,Math.max(0,l),c,-a)}return s}var Pl=.24;function sy(){let i=Df(ny,{depth:Pl-.14,bevelEnabled:!0,bevelThickness:.14,bevelSize:.1,bevelOffset:-.1,bevelSegments:3,curveSegments:1}),t=Df(iy,{depth:Pl+.02,bevelEnabled:!0,bevelThickness:.05,bevelSize:.025,bevelOffset:-.025,bevelSegments:1,curveSegments:1}),e=new un(.045,0).scale(.8,1,1).translate(Pl+.01,.72,.09);return[i,t,e]}function ry(i){let t=[ey(Qx[i])];if(i==="r")for(let e of[-.18,0,.18])t.push(ha(.24,.12,.12,.12,.74,e));else if(i==="n")t.push(...sy());else if(i==="b")t.push(Lf(.06,.94));else if(i==="q"){t.push(Lf(.08,1.06));for(let e of[-.24,-.12,0,.12,.24])t.push(ha(.16,.1,.06,.08,.86+(.24-Math.abs(e))*.25,e))}else i==="k"&&(t.push(ha(.16,.28,.08,.08,1.1,0)),t.push(ha(.16,.08,.26,.08,1.13,0)));return t}var Il=new Map;function oy(i){if(!Il.has(i)){let t=jx(ty[i]/2);Il.set(i,ry(i).map(e=>(e.index&&(e=e.toNonIndexed()),e.applyMatrix4(t),e.computeVertexNormals(),e)))}return Il.get(i)}var ay=new ge({color:0,transparent:!0,opacity:.5,depthWrite:!1});function Uf(i,t){let e=t.envMap(),n=c=>new cn({flatShading:!0,...c}),s=c=>new _n({flatShading:!0,...c}),r=c=>t.overrides[c]||null;if(i==="chrome")return{white:n({color:15131890,map:r("white"),envMap:e,combine:Fr,reflectivity:r("white")?.3:.5,specular:10132136,shininess:90}),black:n({color:2788e3,map:r("black"),envMap:e,combine:es,reflectivity:.85,specular:1984080,shininess:60})};if(i==="matte")return{white:s({color:15327952}),black:s({color:2056046})};if(i==="ivory")return{white:s({map:t.piece("ivoryWhite","white")}),black:s({map:t.piece("ivoryBlack","black")})};if(i==="marble")return{white:n({map:t.piece("marbleWhite","white"),specular:4473924,shininess:40}),black:n({map:t.piece("marbleBlack","black"),specular:2240552,shininess:40})};let o=t.piece("brushed",null),a=(c,l)=>n({color:c,map:o,envMap:e,combine:es,reflectivity:.6,specular:l,shininess:70});return{white:a(16764778,9075280),black:a(9082532,3818576)}}function Ll(i,t,e){let n=t==="w"?e.white:e.black,s=oy(i),r=new se,o=new se;for(let c of s)o.add(new Bt(c,n));let a=new se;for(let c of s){let l=new Bt(c,ay);l.renderOrder=4,a.add(l)}return a.scale.y=.02,a.position.set(.06,.004,.07),r.add(a,o),r.userData={type:i,color:t,body:o,shadow:a},r}function Nf(){let i=new Bt(new Rn(.46,.035,4,12),new ge({color:8382975}));return i.rotation.x=Math.PI/2,i.position.y=.03,i}var Js=[{id:"pieces",label:"\uB9D0 \uC7AC\uC9C8",hint:"\uCCB4\uC2A4\uB9D0 \uD45C\uBA74. \uBC18\uC0AC\uC640 \uC9C8\uAC10\uC774 \uD654\uBA74 \uC778\uC0C1\uC744 \uAC00\uC7A5 \uD06C\uAC8C \uBC14\uAFC9\uB2C8\uB2E4.",options:[{id:"chrome",label:"\uD06C\uB86C & \uC2DC\uC548",note:"Virtual Chess\uC2DD \uC0AC\uC804\uB80C\uB354 CG \uBC18\uC0AC"},{id:"matte",label:"\uBB34\uAD11 \uD50C\uB7AB",note:"\uBC18\uC0AC \uC5C6\uC774 \uBA74\uB9CC, \uB85C\uC6B0\uD3F4\uB9AC\uAC00 \uAC00\uC7A5 \uB610\uB837"},{id:"ivory",label:"\uC0C1\uC544 & \uD751\uB2E8",note:"\uB098\uBB47\uACB0\uACFC \uC0C1\uC544\uACB0, \uBC18\uC0AC \uC5C6\uC74C"},{id:"marble",label:"\uB300\uB9AC\uC11D",note:"\uD770 \uB300\uB9AC\uC11D\uACFC \uB179\uD751 \uB300\uB9AC\uC11D, \uC57D\uD55C \uAD11\uD0DD"},{id:"gold",label:"\uAE08 & \uC740",note:"\uD669\uB3D9\uBE5B \uAE08\uACFC \uCC28\uAC00\uC6B4 \uC740"}]},{id:"board",label:"\uBCF4\uB4DC",hint:"\uD310\uC758 \uC7AC\uC9C8. \uC790\uD64D \uC720\uB9AC\uB9CC \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE69\uB2C8\uB2E4.",options:[{id:"glass",label:"\uC790\uD64D \uC720\uB9AC",note:"\uBC18\uD22C\uBA85, \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE68"},{id:"wood",label:"\uD638\uB450\uB098\uBB34",note:"\uC804\uD1B5 \uB098\uBB47\uACB0 \uD310"},{id:"marble",label:"\uB300\uB9AC\uC11D \uD310",note:"\uD06C\uB9BC\uACFC \uC9D9\uC740 \uB179\uC0C9"},{id:"tile",label:"\uD751\uBC31 \uD0C0\uC77C",note:"\uB514\uB354\uB9C1\uB41C PS1 \uD0C0\uC77C"}]},{id:"backdrop",label:"\uBC30\uACBD\uACFC \uC870\uBA85",hint:"\uD310 \uBC14\uAE65\uC758 \uBC14\uB2E5, \uD558\uB298\uC0C9, \uC870\uBA85 \uC0C9\uC744 \uD568\uAED8 \uC815\uD569\uB2C8\uB2E4.",options:[{id:"stars",label:"\uC810\uBC15\uC774 \uD751",note:"Chessmaster \uD0C0\uC774\uD2C0 \uBC30\uACBD"},{id:"velvet",label:"\uBD89\uC740 \uBCA8\uBCB3",note:"\uB530\uB73B\uD55C \uC870\uBA85\uC758 \uCE74\uB4DC \uD14C\uC774\uBE14"},{id:"void",label:"\uBCF4\uB78F\uBE5B \uC2EC\uC5F0",note:"\uCC28\uAC00\uC6B4 \uC870\uBA85\uACFC \uADF8\uB77C\uB370\uC774\uC158"}]},{id:"frame",label:"UI \uD504\uB808\uC784",hint:"\uD654\uBA74 \uD14C\uB450\uB9AC, \uD328\uB110, \uBC84\uD2BC\uC758 \uC7A5\uC2DD.",options:[{id:"deco",label:"\uBC31\uB78D \uC544\uB974\uB370\uCF54",note:"\uAE08\uC18D \uD14C\uB450\uB9AC\uC640 \uD669\uB3D9 \uC7A5\uC2DD"},{id:"plain",label:"\uBBF8\uB2C8\uBA40 \uC120",note:"\uC587\uC740 \uC120, \uC7A5\uC2DD \uC5C6\uC74C"},{id:"neon",label:"\uB124\uC628",note:"\uC2DC\uC548\uACFC \uC790\uD64D \uBC1C\uAD11\uC120"}]},{id:"lettering",label:"\uD0C0\uC774\uD2C0 \uB808\uD130\uB9C1",hint:"\uD0C0\uC774\uD2C0, \uBC29 \uCF54\uB4DC, \uC2B9\uB9AC \uBB38\uAD6C\uC758 \uAE00\uC790 \uCC98\uB9AC.",options:[{id:"brass",label:"\uD669\uB3D9",note:"Chessmaster\uC2DD \uCCAD\uB3D9 \uADF8\uB77C\uB370\uC774\uC158"},{id:"chrome",label:"\uD06C\uB86C",note:"\uC740\uBE5B \uAE08\uC18D \uBC18\uC0AC"},{id:"neon",label:"\uB124\uC628",note:"\uC790\uD64D \uAE00\uC790\uC640 \uC2DC\uC548 \uC678\uACFD"},{id:"crown",label:"\uC655\uAD00",note:"\uC740\uBE5B \uAE4E\uC740 \uBA74, \uBCF4\uB78F\uBE5B \uB450\uAED8, \uC2DC\uC548 \uBCF4\uC11D"},{id:"robe",label:"\uB9DD\uD1A0",note:"\uBE68\uAC04 \uAE4E\uC740 \uBA74, \uD770 \uB2F4\uBE44\uD138 \uD14C\uB450\uB9AC, \uAE08\uB760"},{id:"velvet",label:"\uBCA8\uBCB3",note:"\uC655\uC88C\uC758 \uBCF4\uB77C \uBCA8\uBCB3\uACFC \uAE08 \uD14C\uB450\uB9AC"},{id:"disco",label:"\uB514\uC2A4\uCF54",note:"\uAE00\uC790\uB9C8\uB2E4 \uB2E4\uB978 \uC0C9, \uBC15\uC790\uB9C8\uB2E4 \uBC14\uB01C"}]},{id:"pixel",label:"3D \uD574\uC0C1\uB3C4",hint:"3D \uC7A5\uBA74\uC744 \uADF8\uB9AC\uB294 \uD574\uC0C1\uB3C4. \uC6D0\uBCF8\uC740 \uAE30\uAE30 \uD574\uC0C1\uB3C4\uB85C \uBA74\uC744 \uB610\uB837\uD558\uAC8C, \uB098\uBA38\uC9C0\uB294 \uB3C4\uD2B8\uB85C \uD655\uB300\uD569\uB2C8\uB2E4. UI\uB294 \uD56D\uC0C1 270\xD7480 \uB3C4\uD2B8\uC785\uB2C8\uB2E4.",options:[{id:"native",label:"\uC6D0\uBCF8",note:"\uAE30\uAE30 \uD574\uC0C1\uB3C4. \uD53D\uC140 \uC5C6\uC774 \uBA74\uC774 \uB610\uB837"},{id:"coarse",label:"\uAD75\uAC8C",note:"135\xD7240"},{id:"base",label:"\uB3C4\uD2B8",note:"270\xD7480"},{id:"fine",label:"\uACF1\uAC8C",note:"405\xD7720"}]},{id:"camera",label:"\uB300\uAD6D \uC2DC\uC810",hint:"\uD310\uC744 \uB0B4\uB824\uB2E4\uBCF4\uB294 \uBC29\uC2DD. \uB9D0\uC740 \uBC18\uC73C\uB85C \uC798\uB77C \uB215\uD78C \uC591\uAC01\uC774\uB77C \uC704\uC5D0\uC11C \uC2E4\uB8E8\uC5E3\uC774 \uBCF4\uC785\uB2C8\uB2E4.",options:[{id:"persp",label:"\uC6D0\uADFC \uD0D1\uB2E4\uC6B4",note:"\uAE30\uBCF8. \uC218\uC9C1, \uAC00\uC7A5\uC790\uB9AC \uB9D0\uC758 \uC606\uBA74\uC774 \uBCF4\uC784"},{id:"flat",label:"\uC815\uD0D1\uB2E4\uC6B4",note:"\uC218\uC9C1, \uAC70\uC758 \uD3C9\uD589 \uD22C\uC601. \uCE78\uB2F9 32px"},{id:"tilt",label:"\uC0B4\uC9DD \uAE30\uC6B8\uC784",note:"18\xB0 \uAE30\uC6B8\uC5EC \uC591\uAC01 \uB450\uAED8\uAC00 \uBCF4\uC784"}]},{id:"zoom",label:"\uACF5\uACA9 \uC90C",hint:"\uB0B4 \uB9D0\uC774 \uC0C1\uB300 \uB9D0\uC744 \uC7A1\uC744 \uB54C \uB0B4 \uD654\uBA74\uC5D0\uC11C\uB9CC \uC77C\uC5B4\uB098\uB294 \uC90C \uC778/\uC544\uC6C3.",options:[{id:"soft",label:"\uC57D\uD558\uAC8C",note:"\uC0B4\uC9DD \uB2E4\uAC00\uAC14\uB2E4 \uB3CC\uC544\uC634"},{id:"normal",label:"\uBCF4\uD1B5",note:"\uB2E4\uAC00\uAC10 + \uC791\uC740 \uD754\uB4E4\uB9BC"},{id:"punch",label:"\uAC15\uD558\uAC8C",note:"\uAE4A\uC740 \uC90C + \uD754\uB4E4\uB9BC + \uC12C\uAD11"}]}],Ks={pieces:"chrome",board:"glass",backdrop:"stars",frame:"deco",lettering:"crown",pixel:"native",camera:"persp",zoom:"normal"},Ff={native:null,coarse:.5,base:1,fine:1.5},Ul={soft:{s:.58,shake:0,flash:0,dur:.85},normal:{s:.72,shake:.06,flash:0,dur:.95},punch:{s:.82,shake:.14,flash:.75,dur:1.05}},Br={deco:{accent:"#c9a24a",accentHi:"#f3dc8a",accentLo:"#6e4a14",line:"#8d9299",lineHi:"#d8dde3",lineLo:"#3a3d44",panel:"rgba(8,6,12,0.86)",btn:"#1c1a24",btnPrimary:"#3a2a10",ink:"#ece6d6",dim:"#8a8578"},plain:{accent:"#d8d2c4",accentHi:"#ffffff",accentLo:"#5a5650",line:"#6a6660",lineHi:"#a8a49c",lineLo:"#2a2826",panel:"rgba(10,10,12,0.84)",btn:"#18181c",btnPrimary:"#2c2a26",ink:"#eeeae2",dim:"#8a867e"},neon:{accent:"#4fe0ff",accentHi:"#c8f8ff",accentLo:"#0a5a6e",line:"#e05ac8",lineHi:"#ffb8f0",lineLo:"#4a1440",panel:"rgba(6,2,14,0.86)",btn:"#140a24",btnPrimary:"#0a2a36",ink:"#eef6ff",dim:"#8a86a8"}},Bf="faith-chess-theme",Of=Js.map(i=>i.id);function kf(i){let t={...Ks};for(let e of Js)i&&e.options.some(n=>n.id===i[e.id])&&(t[e.id]=i[e.id]);return t}function cy(i){let t=/^#?t-([a-z0-9-]+)$/.exec((i||"").split("&")[0]);if(!t)return null;let e=t[1].split("-");if(e.length!==Of.length)return null;let n={};return Of.forEach((s,r)=>{n[s]=e[r]}),kf(n)}var Dl=3;function Hf(){let i=typeof location<"u"?cy(location.hash):null;if(i)return ua(i),i;try{let t=JSON.parse(localStorage.getItem(Bf)||"null"),e=kf(t),n=t?t.v||1:Dl;return n<2&&(e.camera=Ks.camera),n<3&&e.lettering==="brass"&&(e.lettering=Ks.lettering),n<Dl&&ua(e),e}catch{return{...Ks}}}function ua(i){try{localStorage.setItem(Bf,JSON.stringify({...i,v:Dl}))}catch{}}function zf(i,t,e){let n=Js.find(o=>o.id===t),s=n.options.findIndex(o=>o.id===i[t]),r=n.options.length;return{...i,[t]:n.options[(s+e+r)%r].id}}function Vf(i,t){return Js.find(n=>n.id===i)?.options.find(n=>n.id===t)?.label??t}var fn=(i,t={})=>new _n({color:i,flatShading:!0,...t}),js=(i,t={})=>new cn({color:i,flatShading:!0,shininess:70,specular:9076848,...t}),Fe=(i,t=1)=>new un(i,t),Gf=(i,t=10)=>new Vs(i.map(([e,n])=>new tt(e,n)),t);function Dt(i,t,e,n=0,s=0,r=0,o=1,a=1,c=1){let l=new Bt(t,e);return l.position.set(n,s,r),l.scale.set(o,a,c),i.add(l),l}var Vn=(i,t,e,n)=>{let s=new se;return s.position.set(t,e,n),i.add(s),s},qf=14264378,ly=15907988,hy=14193770,uy=15764106,Xf=16315626,fy=1706512,dy=16447214,Qs={w:{crown:15526644,gem:5230847,robe:12595262,robe2:8002086,beard:15658228,velvet:8006282,velvet2:5118556,bg:3939410,shoe:10099770,shoe2:5901344},b:{crown:2788e3,gem:15981706,robe:2252908,robe2:1194050,beard:8016966,velvet:10099758,velvet2:6164252,bg:1848384,shoe:2060158,shoe2:931392}},py=[[-.042,.088],[-.014,.1],[.014,.096],[.042,.078]];function my(i,t,e,n){let s=Vn(i,0,-.43,0);Dt(s,new fe(.068,.04,.07,7),e),Dt(s,new Rn(.064,.011,3,7).rotateX(Math.PI/2),n,0,.033,0);let r=new se;r.position.y=-.04,s.add(r),Dt(r,Fe(.07,0),e,0,-.05,0,.95,.85,.5);let o=py.map(([l,h])=>{let u=Vn(r,l,-.1,0);Dt(u,new fe(.0155,.0145,h*.55,5).translate(0,-h*.275,0),e);let f=Vn(u,0,-h*.55,0);return Dt(f,new fe(.0145,.012,h*.45,5).translate(0,-h*.225,0),e),Dt(f,Fe(.0135,0),e,0,-h*.45,0),{a:u,b:f,x:l}}),a=Vn(r,t*.06,-.035,.02);a.rotation.z=t*.75,Dt(a,new fe(.017,.015,.05,5).translate(0,-.025,0),e);let c=Vn(a,0,-.05,0);return Dt(c,new fe(.015,.012,.042,5).translate(0,-.021,0),e),Dt(c,Fe(.014,0),e,0,-.042,0),{wrist:s,palm:r,fingers:o,thumb:{a,b:c,s:t}}}function Yf(i,t=.3,e=t,n=.3){i.fingers.forEach((s,r)=>{let o=r===1?e:t;s.a.rotation.set(-1.25*o,0,(r-1.5)*.16*n),s.b.rotation.x=-1.45*o}),i.thumb.a.rotation.set(-.7*t,0,i.thumb.s*(.75-.35*t+.25*n)),i.thumb.b.rotation.x=-.6*t}function gy(){let i=[[-.088,0,.056,.078],[-.055,0,.07,.108],[0,0,.076,.112],[.06,0,.072,.09],[.12,.003,.06,.066],[.17,.013,.047,.05],[.21,.032,.035,.038],[.238,.06,.026,.03],[.252,.095,.019,.022],[.25,.127,.012,.014],[.24,.145,.005,.006]],t=8,e=[],n=([f,d,g,y])=>Array.from({length:t},(m,p)=>{let _=p/t*Math.PI*2-Math.PI/2,x=Math.sin(_);return[Math.cos(_)*g*(x<-.2?.92:1),d+(x<-.2?0:y*(.5+.5*x)*1.12-y*.06),f]}),s=i.map(n),r=(f,d,g)=>e.push(...f,...d,...g);for(let f=0;f<s.length-1;f++)for(let d=0;d<t;d++){let g=(d+1)%t,y=s[f][d],m=s[f][g],p=s[f+1][d],_=s[f+1][g];r(y,p,m),r(m,p,_)}let o=s[0],a=s[s.length-1],c=f=>f.reduce((d,g)=>[d[0]+g[0]/t,d[1]+g[1]/t,d[2]+g[2]/t],[0,0,0]),l=c(o),h=c(a);for(let f=0;f<t;f++)r(o[(f+1)%t],l,o[f]),r(a[f],h,a[(f+1)%t]);let u=new le;return u.setAttribute("position",new Ct(e,3)),u.computeVertexNormals(),u}var Nl=null;function xy(i,t,e){Nl||(Nl=gy());let n=Vn(i,0,-.52,.01);Dt(n,Nl,js(t.shoe,{shininess:110,specular:14207176})),Dt(n,new ie(.07,.03,.05),fn(t.shoe2),0,-.012,-.058),Dt(n,new Rn(.05,.022,4,8).rotateX(Math.PI/2),fn(Xf),0,.112,-.025);let s=Dt(n,new ie(.056,.042,.012),e,0,.088,.055);s.rotation.x=-.75;let r=Dt(n,new ie(.03,.02,.014),fn(t.shoe2),0,.09,.057);return r.rotation.x=-.75,Dt(n,Fe(.024,0),e,0,.152,.236),n}function Bl(i){let t=new se,e=fn(i.velvet),n=fn(i.velvet2),s=js(qf);for(let[r,o]of[[-.56,.36],[.56,.36],[-.56,-.4],[.56,-.4]])Dt(t,new fe(.06,.08,.32,6),s,r,.16,o);Dt(t,new ie(1.36,.26,1),n,0,.44,0),Dt(t,Fe(.62),e,0,.62,.04,1.06,.32,.84),Dt(t,new ie(1.36,1.3,.22),n,0,1.16,-.46),Dt(t,Fe(.68),n,0,1.8,-.46,1,.55,.32),Dt(t,Fe(.56),e,0,1.18,-.3,1.06,1.05,.34);for(let[r,o]of[[-.25,1.4],[.25,1.4],[0,1.15],[-.25,.92],[.25,.92]])Dt(t,Fe(.035,0),s,r,o,-.12);Dt(t,Fe(.11,0),s,0,2.18,-.46);for(let r of[-1,1])Dt(t,new ie(.2,.36,.82),n,r*.68,.64,0),Dt(t,new fe(.18,.18,.96,8).rotateX(Math.PI/2),e,r*.68,.88,.02),Dt(t,Fe(.09,0),s,r*.68,.88,.52);return t}function kl(i){let t=new se,e=fn(i.robe),n=fn(i.robe2),s=fn(ly),r=fn(hy),o=fn(i.beard),a=js(qf),c=js(i.crown,{side:We}),l=fn(fy),h=fn(Xf),u=fn(dy),f=new se;f.position.set(0,.72,.06),t.add(f),Dt(f,Gf([[0,0],[.36,.02],[.52,.14],[.58,.34],[.55,.56],[.46,.74],[.36,.86],[.32,.92]]),e),Dt(f,Gf([[.32,.92],[.36,1],[.385,1.12],[.36,1.26],[.28,1.37],[.15,1.44],[0,1.46]]),s),Dt(f,Fe(.37),o,0,1.17,-.09,1.02,.92,.82),Dt(f,new Rn(.5,.04,4,16).rotateX(Math.PI/2),a,0,.6,0),Dt(f,new Rn(.32,.075,6,12).rotateX(Math.PI/2),h,0,.9,0),Dt(f,Fe(.12,0),a,0,.34,.55,1,1,.35);for(let[_,x]of[[-.2,.42],[.2,.42],[-.12,.18],[.12,.18]])Dt(f,Fe(.055,0),h,_,x,.53,1,1,.4);Dt(f,Fe(.075,0),r,0,1.1,.38);for(let _ of[-1,1])Dt(f,Fe(.065,0),fn(uy),_*.21,1.06,.3,1,.6,.5);let d=[-1,1].map(_=>Dt(f,Fe(.05,0),l,_*.13,1.18,.33)),g=[-1,1].map(_=>{let x=Dt(f,new ie(.13,.03,.03),o,_*.14,1.27,.32);return x.userData.s=_,x});for(let _ of[-1,1])Dt(f,Fe(.075,0),o,_*.09,1.02,.36,1.6,.6,.6);Dt(f,new ui(.17,.46,7).rotateX(Math.PI),o,0,.82,.31).rotation.x=.32;let y=Vn(f,0,1.42,0);Dt(y,new fe(.31,.34,.24,12,1,!0),c,0,.06,0);for(let _=0;_<7;_++){let x=_/7*Math.PI*2;Dt(y,new ui(.065,.26,4),c,Math.sin(x)*.31,.3,Math.cos(x)*.31)}Dt(y,Fe(.07,0),js(i.gem),0,.06,.34);for(let _ of[-1,1])Dt(y,Fe(.04,0),js(i.gem),_*.2,.06,.27);Dt(y,Fe(.07,0),a,0,.26,0);let m=[-1,1].map(_=>{let x=Vn(f,_*.5,.66,0);Dt(x,new fe(.034,.034,.44,5).translate(0,-.22,0),n);let v=Vn(x,0,-.44,0);Dt(v,new fe(.03,.03,.42,5).translate(0,-.21,0),n);let S=my(v,_,u,a);return Yf(S),{s:_,shoulder:x,elbow:v,hand:S}}),p=[-1,1].map(_=>{let x=Vn(f,_*.17,.1,.3);Dt(x,new fe(.04,.04,.46,5).translate(0,-.23,0),n);let v=Vn(x,0,-.46,0);Dt(v,new fe(.036,.036,.46,5).translate(0,-.23,0),n);let S=xy(v,i,a);return{s:_,hip:x,knee:v,shoe:S}});return{root:t,doll:f,crown:y,eyes:d,brows:g,arms:m,legs:p}}var Wf=(i,t,e)=>i+(t-i)*e,ns=i=>i*i*(3-2*i),ga=118,wi=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function dn(i,t,e){if(typeof i=="number")return i+(t-i)*e;if(Array.isArray(i))return i.map((s,r)=>dn(s,t[r],e));let n={};for(let s in i)n[s]=dn(i[s],t[s],e);return n}var ce=(i=0,t=0,e=-.2,n=0,s=.3,r=s,o=.3)=>({sx:i,sz:t,ex:e,ez:n,hc:s,hi:r,hs:o}),Te=(i=0,t=0,e=0)=>({hx:i,hz:t,kx:e}),Kn=(i={})=>({rootZ:.95,y:.88,x:0,rx:0,ry:0,rz:0,crownY:0,crownSpin:0,arms:[ce(0,-.25),ce(0,.25)],legs:[Te(0,-.06),Te(0,.06)],...i});function Hl(i){return Kn({rootZ:0,y:.72,rz:.04*Math.sin(i*.6),rx:-.08,arms:[ce(-.2,-.25,-.3,0,.45),ce(-.2,.25,-.3,0,.45)],legs:[Te(-1.35,-.08,1.3),Te(-1.35,.08,1.3)]})}function yy(i){return Kn({rx:.22,y:.88+.04*Math.abs(Math.sin(i*10)),rz:.04*Math.sin(i*14),arms:[ce(-1.55,.15,-.1,0,.95,0,.1),ce(.25,.95,-1.9,0,.75,.75,.1)],legs:[Te(0,-.16),Te(0,.16)]})}function _y(i,t,e=1){let n=Math.sin(i*2*Math.PI*2.4),s=Kn({rootZ:.95+1.25*e,y:.9+.12*e+.02*Math.sin(i*9),x:t*.8*e,rz:-t*.55*e,rx:.12*e,ry:-t*.35*e}),r=t<0?0:1,o=1-r;return s.arms[r]=ce(-.35,t*(2.55+.28*n),-.15,t*.55*n,0,0,1),s.arms[o]=ce(.25,-t*.95,-1.9,0,.75,.75,.1),s.legs[o]=Te(.75*e,-t*.1,1.3*e),s.legs[r]=Te(0,t*.12,.1),s}function Ol(i,t,e=1){let n=Math.pow(Math.cos(Math.PI*t),2)*e;i.y-=.05*n;for(let s of i.legs)s.hx-=.14*n,s.kx+=.28*n;return i}var Ti=[i=>{let t=Math.floor(i),e=wi((i-t)*3),n=t%2===0,s=ce(-.35,2.55,0,0,.95,0,.1),r=ce(-.55,-.55,-.1,0,.95,0,.1),o=Kn({arms:[ce(.25,-.95,-1.9,0,.75,.75,.1),dn(n?r:s,n?s:r,e)]});return o.rz=dn(n?.1:-.14,n?-.14:.1,e),o.ry=.25*Math.sin(Math.PI*i/2),o.legs[1].hz=dn(n?.06:.3,n?.3:.06,e),Ol(o,i)},i=>{let t=Kn({rz:.1*Math.sin(Math.PI*i),ry:.35*Math.sin(Math.PI*i/2)});return t.arms=[-1,1].map(e=>{let n=Math.PI*i+(e<0?0:-1.2);return ce(-.15,e*(1.45+.3*Math.sin(n)),0,e*.95*Math.sin(n+1.1),.15+.15*Math.sin(n+2),.1,.7)}),Ol(t,i)},i=>{let t=Kn();if(i<2){let e=wi(i/2);t.ry=e*Math.PI*2,t.y=.9+.04*Math.sin(Math.PI*i),t.arms=[ce(-.1,-1.55,0,0,.08,.08,.7),ce(-.1,1.55,0,0,.08,.08,.7)],t.legs[0]=Te(-.7*Math.sin(Math.PI*e),-.1,1.5*Math.sin(Math.PI*e))}else{let e=wi((i-2)*2.5);t.arms=[ce(-.15,-dn(1.55,2.75,e),0,-.3*e,0,0,1),ce(-.15,dn(1.55,2.75,e),0,.3*e,0,0,1)],t.legs=[Te(0,-.32*e),Te(0,.32*e)],t.y=.88+.07*Math.sin(Math.PI*Math.min(1,(i-2)*2)),t.rx=-.08*e}return t},i=>{let t=Math.floor(i),e=i-t,n=t%2,s=Math.sin(Math.PI*e),r=Kn({rx:-.12*s,rz:(n?.08:-.08)*s,y:.88+.03*s});return r.arms=[-1,1].map(o=>ce(-.25+.2*Math.sin(Math.PI*2*i+o),o*2.45,0,o*.5*Math.sin(Math.PI*4*i),.08,.08,.7)),r.legs[n]=Te(-1.2*s,(n?1:-1)*(.08+1*s),.5*s*(1-s)),r.legs[1-n]=Te(0,n?-.06:.06,.15),r},i=>{let t=Kn();if(i<1){let e=wi(i);t.y=.88-.22*e,t.rx=.15*e,t.legs=[Te(-.7*e,-.1,1.4*e),Te(-.7*e,.1,1.4*e)],t.arms=[ce(.7*e,-.3,-.2,0,.3+.5*e),ce(.7*e,.3,-.2,0,.3+.5*e)]}else if(i<2){let e=i-1,n=4*e*(1-e),s=Math.sin(Math.PI*e);t.y=dn(.66,.88,Math.min(1,e*4))+.75*n,t.rx=-.1*n,t.legs=[Te(-.5*s,-1.15*s,0),Te(-.5*s,1.15*s,0)],t.arms=[ce(-.2,-2.7,0,0,0,0,1),ce(-.2,2.7,0,0,0,0,1)]}else if(i<2.6){let e=1-wi((i-2)/.6);t.y=.88-.18*e,t.legs=[Te(-.6*e,-.14,1.2*e),Te(-.6*e,.14,1.2*e)],t.arms=[ce(-1.2*(1-e),-.5,-.2),ce(-1.2*(1-e),.5,-.2)]}else{let e=wi((i-2.6)*3),n=.25*Math.sin(i*40);t.arms=[ce(-1.9*e,-.5,-.2,-n,0,0,1),ce(-1.9*e,.5,-.2,n,0,0,1)],t.ry=.2*Math.sin(Math.PI*i)}return t},i=>{let t=Kn();if(i<2){let e=i/2,n=4*e*(1-e),s=Math.sin(Math.PI*e);t.crownY=1*n,t.crownSpin=e*Math.PI*4,t.rx=-.25*s,t.y=.88+.05*s,t.arms=[ce(-2.5*s,-.35,-.3*s,0,.08,.08,.7),ce(-2.5*s,.35,-.3*s,0,.08,.08,.7)],Ol(t,i,.5)}else{let e=(i-2)/2,n=Math.sin(Math.PI*e);t.rx=.5*n,t.arms=[ce(.5*n,-1.2*n-.25,-.2,0,.3),ce(-1.1*n,.25-.65*n,-.2-.6*n,0,.08,.08,.7)],t.legs=[Te(0,-.06),Te(.35*n,.06,.2*n)]}return t}];function vy(i){let t=Ti.length,e=(i%(t*4)+t*4)%(t*4),n=Math.floor(e/4),s=e-n*4,r=Ti[n](s),o=3.6;return s>o&&(r=dn(r,Ti[(n+1)%t](0),wi((s-o)/.4))),r}var Ai=8;function Fl(i){let t=Math.pow(Math.sin(Math.PI*Math.min(1,i*2)),2),e=Kn({rx:.16+.06*t,y:.88+.02*t,rz:-.06});return e.arms=[ce(.25,-.95,-1.9,0,.75,.75,.1),ce(-1.45-.1*t,.22,-.1+.08*t,0,.95,0,.1)],e.legs=[Te(0,-.16),Te(.15,.2,.25)],e}var fa=[[0,i=>Ti[4](1+i)],[1,i=>Fl(i)],[2,i=>Ti[0]((i-2)*2)],[4,i=>Ti[2]((i-4)*2)],[5,i=>Ti[3]((i-5)*2)],[6,i=>Ti[5]((i-6)*2)],[7,i=>Fl(i-7)],[Ai,()=>Fl(1)]];function My(i){i=Math.max(0,Math.min(Ai,i));let t=0;for(;t<fa.length-1&&i>=fa[t+1][0];)t++;let e=fa[t][1](i),n=fa[t+1],s=.15;return n&&i>n[0]-s&&(e=dn(e,n[1](n[0]),wi((i-(n[0]-s))/s))),e}var pa=[1.55,.6,5.9,0],da=[[0,...pa],[.4,1.5,1,3.2,0],[1,1.98,1.32,1,-.14],[1.7,1.98,1.32,1.2,.08],[2,1.45,1,3.4,0],[2.5,1.75,1.1,1.9,.18],[3,1.45,1,3.4,-.18],[3.5,1.75,1.1,1.9,.18],[4,1.5,1,3,0],[5,1.5,1,3,Math.PI*2],[5.5,.8,1.25,1.8,Math.PI*2+.12],[6,1.9,1,3,Math.PI*2],[6.5,2.75,1,3.4,Math.PI*2],[7,1.98,1.32,.95,Math.PI*2-.1],[7.6,1.98,1.34,.78,Math.PI*2+.08],[Ai,...pa.slice(0,3),Math.PI*2]];function by(i){i=Math.max(0,Math.min(Ai,i));let t=0;for(;t<da.length-2&&i>=da[t+1][0];)t++;let[e,...n]=da[t],[s,...r]=da[t+1],o=Math.min(1,(i-e)/(s-e)),a=1-Math.pow(1-o,3);return n.map((c,l)=>c+(r[l]-c)*a)}function kr(i,t){i.root.position.z=t.rootZ,i.doll.position.set(t.x,t.y,.06),i.doll.rotation.set(t.rx,t.ry,t.rz),i.crown.position.y=1.42+t.crownY,i.crown.rotation.set(0,t.crownSpin,-.5*t.rz),i.arms.forEach(({shoulder:e,elbow:n,hand:s},r)=>{let o=t.arms[r];e.rotation.set(o.sx,o.sy??0,o.sz),n.rotation.set(o.ex,0,o.ez),Yf(s,o.hc??.3,o.hi??o.hc??.3,o.hs??.3)}),i.legs.forEach(({hip:e,knee:n},s)=>{let r=t.legs[s];e.rotation.set(r.hx,0,r.hz),n.rotation.set(r.kx,0,0)})}var ma=class{constructor(){this.scene=new kn,this.scene.add(new Si(16777215,.62));let t=new nn(16773340,1.5);t.position.set(-2,4,5),this.scene.add(t);let e=new nn(16740568,.7);e.position.set(3,2,-3),this.scene.add(e);let n=new nn(7332095,.5);n.position.set(-3,1.5,-2),this.scene.add(n),this.camera=new Le(34,64/96,.1,40),this.camera.position.set(0,1.62,6.5),this.camera.lookAt(0,1.55,.6),this.rigs={};for(let s of["w","b"]){let r=new se;r.add(Bl(Qs[s]));let o=kl(Qs[s]);r.add(o.root),this.scene.add(r),this.rigs[s]={group:r,throne:r.children[0],...o,color:s,phase:s==="w"?0:1.7,wake:0,shout:0,cheer:0,zoom:0}}this.shown=null,this.swap=null,this.t=0,this.clear=new wt,this.bgA=new wt,this.bgB=new wt,this.bgD=new wt,this.beat=0,this.discoOn=0,this.discoHue=0,this.zoomOn=!1,this.zb=0,this.zoomBeat0=0,this.zoomK=0,this.buildDisco()}update(t,e,n="turn"){this.t+=t,n==="zoom"&&!this.zoomOn?(this.zoomOn=!0,this.beat=Math.ceil(this.beat),this.zoomBeat0=this.beat,e&&(this.shown=e,this.swap=null,this.rigs[e].wake=1)):n!=="zoom"&&(this.zoomOn=!1),e&&e!==this.shown&&!(this.swap&&this.swap.to===e)&&(this.shown&&(this.swap={from:this.shown,to:e,t:0}),this.shown=e),this.swap&&(this.swap.t+=t/.6,this.swap.t>=1&&(this.swap=null));let s=this.t,r=this.rigs[this.shown||"w"];this.beat+=t*(ga/60)*(1-r.shout),this.zoomOn&&(this.zb=this.zbFix??this.beat-this.zoomBeat0),this.zoomK=r.zoom,this.discoOn=Math.max(r.wake,r.zoom)*(1-r.shout),this.updateDisco(t,this.beat,this.discoOn);for(let o of Object.values(this.rigs)){let a=o.color===this.shown;o.wake+=((a?1:0)-o.wake)*(1-Math.exp(-t*3)),o.shout+=((a&&n==="shout"?1:0)-o.shout)*(1-Math.exp(-t*9)),o.cheer+=((a&&n==="cheer"?1:0)-o.cheer)*(1-Math.exp(-t*7)),o.cheer<.002&&(o.cheer=0),o.zoom+=((a&&n==="zoom"?1:0)-o.zoom)*(1-Math.exp(-t*14)),o.zoom<.002&&(o.zoom=0);let c=0;if(this.swap){let l=ns(Math.min(1,this.swap.t)),h=u=>u==="w"?-1:1;o.color===this.swap.to?c=h(o.color)*(1-l)*4.4:o.color===this.swap.from&&(c=-h(this.swap.to)*l*4.4)}o.group.position.x=c,o.group.visible=a||!!(this.swap&&o.color===this.swap.from),this.pose(o,s+o.phase,this.beat+(o.color==="w"?0:12))}}pose(t,e,n){let s=t.wake,r=t.shout,o=dn(Hl(e),vy(n),ns(s));o=dn(o,yy(e),ns(r)),t.cheer>0&&(o=dn(o,_y(e,t.color==="w"?-1:1),ns(t.cheer))),t.zoom>0&&(o=dn(o,My(this.zb),ns(t.zoom))),kr(t,o);let a=e%3.1/3.1,c=s>.5&&a>.95?Math.sin((a-.95)/.05*Math.PI):0,l=Wf(.2,1,s)*(1-c*.9)*(1+.25*r),h=t.zoom>.5&&(this.zb>1.15&&this.zb<1.85||this.zb>7.2&&this.zb<Ai)?1:0;t.eyes.forEach((u,f)=>{u.scale.y=Math.max(.08,f===0&&h?.08:l)});for(let u of t.brows)u.rotation.z=Wf(0,-.32*u.userData.s,s)+.25*u.userData.s*r-.2*u.userData.s*t.cheer,u.position.y=1.27+.05*t.cheer}buildDisco(){let t=new se;this.scene.add(t),this.disco=t,this.tiles=[];for(let s=0;s<5;s++)for(let r=0;r<3;r++){let o=new Bt(new ie(.8,.04,.62),new ge({color:1118481}));o.position.set((s-2)*.84,0,.42+r*.66),t.add(o),this.tiles.push({m:o,ix:s,iz:r})}this.beams=[16732120,5237247,16769359].map((s,r)=>{let o=new ge({color:s,transparent:!0,opacity:.2,blending:Zi,depthWrite:!1,side:We}),a=new Bt(new ui(.8,3.8,10,1,!0).translate(0,-1.9,0),o),c=new se;return c.position.set((r-1)*1.7,3.6,1),c.add(a),t.add(c),{pivot:c,mat:o,i:r}}),this.ball=new Bt(new un(.24,1),new cn({color:14212328,flatShading:!0,shininess:120,specular:16777215})),this.ball.position.set(0,3,.7),t.add(this.ball);let e=new Ze;for(let s=0;s<=8;s++){let r=s/8*Math.PI*2,o=s%2?.05:.17;s?e.lineTo(Math.cos(r)*o,Math.sin(r)*o):e.moveTo(Math.cos(r)*o,Math.sin(r)*o)}let n=new Jo(e);this.sparks=Array.from({length:8},()=>{let s=new Bt(n,new ge({color:16777215,transparent:!0,opacity:0,blending:Zi,depthWrite:!1}));return t.add(s),{m:s,t:9}}),this.lastBeat=-1}updateDisco(t,e,n){let s=this.t,r=Math.floor(e),o=e-r,a=Math.pow(1-o,2);this.disco.visible=n>.02;let c=this.zoomK;for(let{m:l,ix:h,iz:u}of this.tiles){let f=(h+u*2+r*(1+c))%3===0,d=((r*.13+h*.17+u*.29)%1+1)%1;f?l.material.color.setHSL(d,.9,(.35+(.25+.2*c)*a)*n):l.material.color.setHSL(d,.4,.06*n)}for(let l of this.beams)l.pivot.rotation.z=Math.sin(s*1.3+l.i*2.1)*.55,l.pivot.rotation.x=Math.sin(s*.9+l.i)*.3,l.mat.opacity=(.07+(.09+.12*this.zoomK)*a)*n;if(this.ball.rotation.y+=t*2.2,r!==this.lastBeat&&(this.lastBeat=r,n>.5))for(let l=0;l<2+Math.round(4*this.zoomK);l++){let h=this.sparks.find(u=>u.t>.5);if(!h)break;h.t=0,h.m.position.set((Math.random()-.5)*2.6,.5+Math.random()*2.1,1.2+Math.random()*.6),h.m.material.color.setHSL(Math.random(),.8,.7)}for(let l of this.sparks){l.t+=t;let h=l.t/.5;l.m.material.opacity=h<1?Math.sin(h*Math.PI)*n:0,l.m.scale.setScalar(.5+h),l.m.rotation.z=l.t*4}}get cheering(){let t=this.rigs[this.shown];return!!t&&t.cheer>.01&&!this.swap}get zooming(){let t=this.rigs[this.shown];return!!t&&t.zoom>.01&&!this.swap}get overlayOn(){return this.cheering||this.zooming}aimCamera(t){let e=this.camera,n=ns(Math.min(1,this.zoomK));e.aspect=t,e.fov=Math.max(34,2*Math.atan(.245/t)*180/Math.PI);let s=n>0?by(this.zb):pa,r=[s[0],s[1],s[2],s[3]-Math.PI*2*Math.round(s[3]/(Math.PI*2))],[o,a,c,l]=pa.map((h,u)=>h+(r[u]-h)*n);e.position.set(0,o+.012*c,a+c),e.lookAt(0,o,a),l&&e.rotateZ(l),e.updateProjectionMatrix()}renderOverlay(t,e,n,s={l:64,r:64,t:0,b:52}){let r=this.overlayOn?this.rigs[this.shown]:null;if(r&&this.zooming&&(s={l:e.x,r:270-e.x-e.w,t:e.y,b:200}),t.setClearColor(0,0),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.clear(!0,!0,!1),!r)return!1;let o=n.w/270,a=n.h/480,c=Math.round(e.x*o),l=Math.round((e.x+e.w)*o)-c,h=Math.round(e.y*a),u=Math.round((e.y+e.h)*a)-h,f={x:Math.max(0,e.x-s.l),y:Math.max(0,e.y-s.t)};f.w=Math.min(270,e.x+e.w+s.r)-f.x,f.h=Math.min(480,e.y+e.h+s.b)-f.y;let d=Math.round(f.x*o),g=Math.round((f.x+f.w)*o)-d,y=Math.round(f.y*a),m=Math.round((f.y+f.h)*a)-y,p=[];for(let x of Object.values(this.rigs))p.push([x.group,x.group.visible],[x.throne,x.throne.visible]),x.throne.visible=!1,x!==r&&(x.group.visible=!1);p.push([this.disco,this.disco.visible]),this.disco.visible=!1;let _=this.camera;this.aimCamera(l/u),_.setViewOffset(l,u,d-c,y-h,g,m),t.setScissorTest(!0),t.setViewport(d,n.h-y-m,g,m),t.setScissor(d,n.h-y-m,g,m),t.render(this.scene,_),t.setScissorTest(!1),_.clearViewOffset();for(let[x,v]of p)x.visible=v;return!0}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,c=Math.round(e.y*r),l=Math.round((e.y+e.h)*r)-c,h=n.h-c-l,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,l),t.setScissor(o,h,a,l);let d=this.shown||"w";this.bgB.set(Qs[d].bg),this.swap&&this.bgB.copy(this.bgA.set(Qs[this.swap.from].bg).lerp(this.bgB,ns(Math.min(1,this.swap.t))));let g=this.beat-Math.floor(this.beat);this.bgD.setHSL(this.beat*.04*(1+3*this.zoomK)%1,.6+.3*this.zoomK,.16+(.07+.22*this.zoomK)*Math.pow(1-g,3)),this.bgB.lerp(this.bgD,.55*this.discoOn+.4*this.zoomK),t.setClearColor(this.bgB,1),t.clear(!0,!0,!1),this.aimCamera(a/l),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var tr={sig:"25262e11",r:{p:[[0,.3,-.114,1.475,-2.425],[.05,.296,-.114,1.463,-2.426],[.1,.291,-.113,1.452,-2.426],[.15,.288,-.113,1.444,-2.425],[.2,.286,-.113,1.438,-2.425],[.25,.285,-.113,1.434,-2.425],[.3,.283,-.112,1.43,-2.426],[.35,.282,-.112,1.427,-2.426],[.4,.281,-.112,1.423,-2.426],[.45,.28,-.112,1.42,-2.426],[.5,.28,-.114,1.42,-2.425],[.55,.268,-.113,1.431,-2.437],[.6,.186,-.089,1.485,-2.506],[.65,.213,-.099,1.48,-2.487],[.7,.297,-.126,1.439,-2.411],[.75,.351,-.153,1.407,-2.337],[.8,.363,-.169,1.408,-2.313],[.85,.356,-.202,1.444,-2.305],[.9,.344,-.243,1.505,-2.307],[.95,.336,-.272,1.572,-2.314],[1,.337,-.271,1.621,-2.328],[1.05,.339,-.239,1.638,-2.349],[1.1,.181,-.178,1.605,-2.391],[1.15,-.16,-.127,1.536,-2.383],[1.2,-.396,-.143,1.464,-2.296],[1.222,-.444,-.177,1.411,-2.244],[1.243,-.497,-.224,1.334,-2.177],[1.265,-.556,-.272,1.236,-2.098],[1.286,-.625,-.314,1.122,-2.007],[1.308,-.701,-.35,1.002,-1.907],[1.329,-.785,-.373,.876,-1.8],[1.351,-.874,-.381,.752,-1.688],[1.372,-.964,-.373,.632,-1.574],[1.394,-1.052,-.348,.521,-1.465],[1.415,-1.126,-.317,.433,-1.366],[1.437,-1.179,-.29,.374,-1.289],[1.458,-1.206,-.274,.347,-1.242],[1.48,-1.202,-.281,.358,-1.237],[1.52,-1.13,-.33,.428,-1.266],[1.56,-1.002,-.426,.541,-1.281],[1.6,-.893,-.496,.618,-1.275],[1.64,-.869,-.523,.616,-1.243],[1.68,-.873,-.537,.591,-1.222],[1.72,-.895,-.564,.56,-1.175],[1.743,-.946,-.579,.53,-1.141],[1.767,-1.071,-.563,.455,-1.087],[1.79,-1.243,-.523,.348,-.995],[1.813,-1.43,-.455,.225,-.865],[1.837,-1.58,-.387,.125,-.73],[1.86,-1.647,-.379,.076,-.644],[1.883,-1.607,-.416,.091,-.712],[1.905,-1.475,-.429,.163,-.958],[1.927,-1.327,-.393,.247,-1.27],[1.95,-1.219,-.321,.308,-1.553],[1.973,-1.166,-.229,.337,-1.781],[1.995,-1.156,-.14,.347,-1.94],[2.018,-1.166,-.078,.345,-2.029],[2.04,-1.174,-.066,.33,-2.043],[2.085,-1.195,-.128,.264,-1.957],[2.13,-1.255,-.185,.167,-1.833],[2.175,-1.318,-.215,.085,-1.723],[2.22,-1.35,-.211,.062,-1.684],[2.235,-1.37,-.192,.067,-1.679],[2.25,-1.417,-.157,.082,-1.665],[2.265,-1.484,-.106,.118,-1.658],[2.28,-1.564,-.049,.179,-1.664],[2.295,-1.663,.011,.258,-1.676],[2.31,-1.782,.067,.351,-1.697],[2.325,-1.928,.113,.446,-1.719],[2.34,-2.098,.135,.541,-1.739],[2.349,-2.218,.13,.593,-1.744],[2.358,-2.358,.103,.634,-1.732],[2.367,-2.51,.053,.657,-1.695],[2.376,-2.668,-.012,.656,-1.629],[2.385,-2.832,-.08,.626,-1.532],[2.395,-2.997,-.146,.572,-1.404],[2.404,-3.165,-.19,.494,-1.252],[2.413,-3.335,-.224,.414,-1.073],[2.422,-3.502,-.246,.336,-.877],[2.431,-3.663,-.231,.258,-.683],[2.44,-3.785,-.206,.205,-.53],[2.48,-4.059,-.083,.12,-.21],[2.52,-4.157,-.007,.128,-.131],[2.56,-4.126,-.022,.181,-.218],[2.6,-3.966,-.08,.272,-.467],[2.616,-3.851,-.12,.334,-.626],[2.631,-3.695,-.182,.436,-.813],[2.647,-3.508,-.249,.586,-.991],[2.663,-3.293,-.301,.781,-1.147],[2.679,-3.036,-.326,1.029,-1.288],[2.694,-2.77,-.297,1.286,-1.41],[2.71,-2.525,-.214,1.511,-1.518],[2.726,-2.318,-.103,1.683,-1.609],[2.741,-2.146,.017,1.801,-1.689],[2.757,-1.995,.129,1.874,-1.757],[2.773,-1.865,.223,1.908,-1.816],[2.789,-1.748,.3,1.912,-1.867],[2.804,-1.645,.36,1.899,-1.914],[2.82,-1.553,.407,1.878,-1.96],[2.857,-1.341,.495,1.808,-2.08],[2.893,-1.094,.553,1.7,-2.207],[2.93,-.805,.555,1.557,-2.322],[2.967,-.498,.479,1.416,-2.407],[3.003,-.221,.337,1.324,-2.452],[3.04,-.004,.171,1.298,-2.458],[3.077,.148,.028,1.315,-2.443],[3.113,.241,-.073,1.348,-2.42],[3.15,.276,-.115,1.375,-2.408],[3.2,.285,-.124,1.399,-2.406],[3.25,.291,-.127,1.417,-2.404],[3.3,.296,-.128,1.429,-2.404],[3.35,.298,-.129,1.437,-2.403],[3.4,.302,-.13,1.443,-2.402],[3.45,.303,-.13,1.446,-2.402],[3.5,.304,-.13,1.449,-2.402],[3.55,.305,-.131,1.45,-2.401],[3.6,.305,-.131,1.451,-2.402],[3.65,.304,-.131,1.45,-2.402],[3.7,.305,-.13,1.45,-2.402],[3.75,.305,-.131,1.45,-2.402],[3.8,.304,-.13,1.449,-2.402],[3.85,.304,-.13,1.448,-2.401],[3.9,.303,-.13,1.448,-2.402],[3.95,.304,-.13,1.448,-2.402],[4,.303,-.13,1.447,-2.403],[4.05,.303,-.129,1.447,-2.403],[4.1,.302,-.129,1.446,-2.404],[4.15,.301,-.128,1.446,-2.404],[4.2,.302,-.129,1.446,-2.405],[4.25,.301,-.128,1.445,-2.405],[4.3,.299,-.127,1.443,-2.405],[4.35,.299,-.126,1.442,-2.407],[4.4,.298,-.126,1.441,-2.407],[4.45,.298,-.125,1.441,-2.408],[4.5,.298,-.125,1.441,-2.409],[4.55,.297,-.125,1.442,-2.409],[4.6,.297,-.125,1.441,-2.41],[4.65,.296,-.124,1.44,-2.41],[4.7,.295,-.123,1.439,-2.412],[4.75,.294,-.122,1.439,-2.412],[4.8,.293,-.121,1.438,-2.413],[4.85,.293,-.122,1.438,-2.413],[4.9,.293,-.121,1.438,-2.414],[4.95,.291,-.12,1.437,-2.415],[5,.291,-.12,1.436,-2.416],[5.05,.29,-.119,1.436,-2.417],[5.1,.29,-.118,1.435,-2.418],[5.15,.29,-.117,1.435,-2.418],[5.2,.288,-.117,1.434,-2.419],[5.25,.288,-.117,1.433,-2.42],[5.3,.288,-.116,1.433,-2.421],[5.35,.288,-.116,1.433,-2.421],[5.4,.286,-.116,1.432,-2.421],[5.45,.286,-.115,1.431,-2.422],[5.5,.286,-.115,1.432,-2.423],[5.55,.285,-.115,1.431,-2.423],[5.6,.284,-.114,1.43,-2.424],[5.65,.284,-.113,1.429,-2.424],[5.7,.283,-.113,1.429,-2.424],[5.75,.284,-.113,1.429,-2.425],[5.8,.285,-.113,1.433,-2.425],[5.85,.288,-.113,1.441,-2.426],[5.9,.291,-.113,1.451,-2.426],[5.95,.295,-.114,1.464,-2.426],[6,.3,-.114,1.475,-2.425]],n:[[0,.3,-.114,1.475,-2.425],[.05,.296,-.114,1.463,-2.426],[.1,.291,-.113,1.452,-2.426],[.15,.288,-.113,1.444,-2.425],[.2,.286,-.113,1.438,-2.425],[.25,.285,-.113,1.434,-2.425],[.3,.283,-.112,1.43,-2.426],[.35,.282,-.112,1.427,-2.426],[.4,.281,-.112,1.423,-2.426],[.45,.28,-.112,1.42,-2.426],[.5,.28,-.114,1.42,-2.425],[.55,.268,-.113,1.431,-2.437],[.6,.186,-.089,1.485,-2.506],[.65,.213,-.099,1.48,-2.487],[.7,.297,-.126,1.439,-2.411],[.75,.351,-.153,1.407,-2.337],[.8,.363,-.169,1.408,-2.313],[.85,.356,-.202,1.444,-2.305],[.9,.344,-.243,1.505,-2.307],[.95,.336,-.272,1.572,-2.314],[1,.337,-.271,1.621,-2.328],[1.05,.34,-.239,1.638,-2.349],[1.1,.186,-.177,1.609,-2.391],[1.15,-.148,-.126,1.546,-2.384],[1.2,-.391,-.145,1.476,-2.296],[1.222,-.446,-.18,1.423,-2.242],[1.243,-.506,-.228,1.344,-2.173],[1.265,-.573,-.277,1.245,-2.091],[1.286,-.648,-.323,1.133,-1.997],[1.308,-.734,-.359,1.007,-1.892],[1.329,-.83,-.38,.872,-1.781],[1.351,-.933,-.382,.733,-1.664],[1.372,-1.038,-.364,.599,-1.544],[1.394,-1.132,-.333,.486,-1.43],[1.415,-1.213,-.296,.394,-1.326],[1.437,-1.277,-.252,.325,-1.243],[1.458,-1.313,-.224,.29,-1.192],[1.48,-1.319,-.213,.286,-1.186],[1.52,-1.261,-.237,.328,-1.223],[1.56,-1.153,-.303,.4,-1.255],[1.6,-1.052,-.394,.48,-1.246],[1.64,-1.003,-.436,.504,-1.233],[1.68,-1.002,-.446,.483,-1.217],[1.72,-1.038,-.446,.426,-1.166],[1.743,-1.101,-.439,.377,-1.121],[1.767,-1.225,-.41,.303,-1.049],[1.79,-1.392,-.357,.208,-.933],[1.813,-1.568,-.289,.113,-.774],[1.837,-1.711,-.223,.038,-.615],[1.86,-1.781,-.208,-.003,-.51],[1.883,-1.74,-.252,.004,-.583],[1.905,-1.608,-.29,.059,-.849],[1.927,-1.459,-.276,.127,-1.179],[1.95,-1.35,-.224,.18,-1.475],[1.973,-1.295,-.154,.212,-1.705],[1.995,-1.284,-.084,.229,-1.864],[2.018,-1.294,-.036,.235,-1.95],[2.04,-1.299,-.031,.229,-1.963],[2.085,-1.317,-.096,.182,-1.87],[2.13,-1.374,-.155,.103,-1.736],[2.175,-1.437,-.188,.037,-1.613],[2.22,-1.471,-.193,.027,-1.565],[2.237,-1.49,-.177,.039,-1.562],[2.254,-1.534,-.138,.067,-1.557],[2.271,-1.594,-.081,.124,-1.571],[2.289,-1.672,-.016,.207,-1.605],[2.306,-1.777,.05,.312,-1.652],[2.323,-1.918,.105,.427,-1.699],[2.34,-2.099,.136,.539,-1.738],[2.349,-2.217,.132,.593,-1.749],[2.358,-2.355,.105,.635,-1.739],[2.367,-2.508,.058,.658,-1.704],[2.376,-2.667,-.007,.656,-1.638],[2.385,-2.829,-.079,.628,-1.54],[2.395,-2.998,-.139,.569,-1.412],[2.404,-3.168,-.185,.491,-1.255],[2.413,-3.337,-.218,.41,-1.076],[2.422,-3.5,-.245,.336,-.883],[2.431,-3.662,-.232,.259,-.684],[2.44,-3.784,-.207,.206,-.533],[2.48,-4.057,-.091,.121,-.212],[2.52,-4.155,-.004,.128,-.136],[2.56,-4.126,-.022,.181,-.218],[2.6,-3.966,-.08,.272,-.467],[2.616,-3.851,-.12,.334,-.626],[2.631,-3.695,-.182,.436,-.813],[2.647,-3.508,-.249,.586,-.991],[2.663,-3.293,-.301,.781,-1.147],[2.679,-3.036,-.326,1.029,-1.288],[2.694,-2.77,-.297,1.286,-1.41],[2.71,-2.525,-.214,1.511,-1.518],[2.726,-2.318,-.103,1.683,-1.609],[2.741,-2.146,.017,1.801,-1.689],[2.757,-1.995,.129,1.874,-1.757],[2.773,-1.865,.223,1.908,-1.816],[2.789,-1.748,.3,1.912,-1.867],[2.804,-1.645,.36,1.899,-1.914],[2.82,-1.553,.407,1.878,-1.96],[2.857,-1.341,.495,1.808,-2.08],[2.893,-1.094,.553,1.7,-2.207],[2.93,-.805,.555,1.557,-2.322],[2.967,-.498,.479,1.416,-2.407],[3.003,-.221,.337,1.324,-2.452],[3.04,-.004,.171,1.298,-2.458],[3.077,.148,.028,1.315,-2.443],[3.113,.241,-.073,1.348,-2.42],[3.15,.276,-.115,1.375,-2.408],[3.2,.285,-.124,1.399,-2.406],[3.25,.291,-.127,1.417,-2.404],[3.3,.296,-.128,1.429,-2.404],[3.35,.298,-.129,1.437,-2.403],[3.4,.302,-.13,1.443,-2.402],[3.45,.303,-.13,1.446,-2.402],[3.5,.304,-.13,1.449,-2.402],[3.55,.305,-.131,1.45,-2.401],[3.6,.305,-.131,1.451,-2.402],[3.65,.304,-.131,1.45,-2.402],[3.7,.305,-.13,1.45,-2.402],[3.75,.305,-.131,1.45,-2.402],[3.8,.304,-.13,1.449,-2.402],[3.85,.304,-.13,1.448,-2.401],[3.9,.303,-.13,1.448,-2.402],[3.95,.304,-.13,1.448,-2.402],[4,.303,-.13,1.447,-2.403],[4.05,.303,-.129,1.447,-2.403],[4.1,.302,-.129,1.446,-2.404],[4.15,.301,-.128,1.446,-2.404],[4.2,.302,-.129,1.446,-2.405],[4.25,.301,-.128,1.445,-2.405],[4.3,.299,-.127,1.443,-2.405],[4.35,.299,-.126,1.442,-2.407],[4.4,.298,-.126,1.441,-2.407],[4.45,.298,-.125,1.441,-2.408],[4.5,.298,-.125,1.441,-2.409],[4.55,.297,-.125,1.442,-2.409],[4.6,.297,-.125,1.441,-2.41],[4.65,.296,-.124,1.44,-2.41],[4.7,.295,-.123,1.439,-2.412],[4.75,.294,-.122,1.439,-2.412],[4.8,.293,-.121,1.438,-2.413],[4.85,.293,-.122,1.438,-2.413],[4.9,.293,-.121,1.438,-2.414],[4.95,.291,-.12,1.437,-2.415],[5,.291,-.12,1.436,-2.416],[5.05,.29,-.119,1.436,-2.417],[5.1,.29,-.118,1.435,-2.418],[5.15,.29,-.117,1.435,-2.418],[5.2,.288,-.117,1.434,-2.419],[5.25,.288,-.117,1.433,-2.42],[5.3,.288,-.116,1.433,-2.421],[5.35,.288,-.116,1.433,-2.421],[5.4,.286,-.116,1.432,-2.421],[5.45,.286,-.115,1.431,-2.422],[5.5,.286,-.115,1.432,-2.423],[5.55,.285,-.115,1.431,-2.423],[5.6,.284,-.114,1.43,-2.424],[5.65,.284,-.113,1.429,-2.424],[5.7,.283,-.113,1.429,-2.424],[5.75,.284,-.113,1.429,-2.425],[5.8,.285,-.113,1.433,-2.425],[5.85,.288,-.113,1.441,-2.426],[5.9,.291,-.113,1.451,-2.426],[5.95,.295,-.114,1.464,-2.426],[6,.3,-.114,1.475,-2.425]],b:[[0,.3,-.114,1.475,-2.425],[.05,.296,-.114,1.463,-2.426],[.1,.291,-.113,1.452,-2.426],[.15,.288,-.113,1.444,-2.425],[.2,.286,-.113,1.438,-2.425],[.25,.285,-.113,1.434,-2.425],[.3,.283,-.112,1.43,-2.426],[.35,.282,-.112,1.427,-2.426],[.4,.281,-.112,1.423,-2.426],[.45,.28,-.112,1.42,-2.426],[.5,.28,-.114,1.42,-2.425],[.55,.268,-.113,1.431,-2.437],[.6,.186,-.089,1.485,-2.506],[.65,.213,-.099,1.48,-2.487],[.7,.297,-.126,1.439,-2.411],[.75,.351,-.153,1.407,-2.337],[.8,.363,-.169,1.408,-2.313],[.85,.356,-.202,1.444,-2.305],[.9,.344,-.243,1.505,-2.307],[.95,.336,-.272,1.572,-2.314],[1,.335,-.271,1.62,-2.328],[1.05,.339,-.24,1.637,-2.349],[1.1,.187,-.177,1.607,-2.391],[1.15,-.147,-.126,1.546,-2.384],[1.2,-.39,-.145,1.477,-2.296],[1.222,-.444,-.181,1.428,-2.241],[1.243,-.504,-.229,1.355,-2.172],[1.265,-.569,-.281,1.262,-2.089],[1.286,-.645,-.328,1.151,-1.994],[1.308,-.729,-.367,1.028,-1.889],[1.329,-.826,-.391,.896,-1.776],[1.351,-.93,-.396,.757,-1.659],[1.372,-1.037,-.38,.621,-1.539],[1.394,-1.141,-.342,.493,-1.423],[1.415,-1.228,-.296,.392,-1.317],[1.437,-1.293,-.251,.321,-1.233],[1.458,-1.329,-.224,.288,-1.182],[1.48,-1.336,-.216,.286,-1.174],[1.52,-1.278,-.24,.327,-1.213],[1.56,-1.17,-.301,.396,-1.25],[1.6,-1.064,-.382,.47,-1.253],[1.64,-1.03,-.415,.481,-1.23],[1.68,-1.031,-.424,.456,-1.212],[1.72,-1.056,-.439,.417,-1.163],[1.743,-1.117,-.434,.371,-1.117],[1.767,-1.241,-.408,.299,-1.042],[1.79,-1.408,-.358,.206,-.922],[1.813,-1.588,-.286,.108,-.757],[1.837,-1.733,-.217,.033,-.592],[1.86,-1.8,-.192,-.009,-.491],[1.883,-1.761,-.211,-.012,-.561],[1.905,-1.633,-.219,.021,-.825],[1.927,-1.488,-.189,.06,-1.16],[1.95,-1.384,-.13,.082,-1.457],[1.973,-1.33,-.058,.088,-1.69],[1.995,-1.319,.011,.087,-1.849],[2.018,-1.328,.059,.082,-1.935],[2.04,-1.333,.065,.071,-1.947],[2.085,-1.35,.011,.024,-1.852],[2.13,-1.398,-.039,-.045,-1.715],[2.175,-1.455,-.068,-.096,-1.591],[2.22,-1.489,-.083,-.091,-1.542],[2.237,-1.509,-.076,-.067,-1.539],[2.254,-1.554,-.053,-.024,-1.536],[2.271,-1.614,-.015,.05,-1.555],[2.289,-1.691,.033,.15,-1.594],[2.306,-1.792,.084,.269,-1.645],[2.323,-1.929,.126,.4,-1.697],[2.34,-2.104,.145,.526,-1.738],[2.349,-2.221,.138,.584,-1.749],[2.358,-2.357,.109,.631,-1.741],[2.367,-2.509,.059,.656,-1.705],[2.376,-2.667,-.008,.657,-1.638],[2.385,-2.828,-.079,.63,-1.542],[2.395,-2.994,-.142,.573,-1.414],[2.404,-3.163,-.19,.497,-1.259],[2.413,-3.335,-.222,.413,-1.078],[2.422,-3.501,-.244,.336,-.882],[2.431,-3.665,-.233,.258,-.679],[2.44,-3.785,-.206,.205,-.53],[2.48,-4.059,-.081,.119,-.21],[2.52,-4.156,-.003,.128,-.133],[2.56,-4.129,-.014,.18,-.215],[2.6,-3.966,-.08,.272,-.467],[2.616,-3.851,-.12,.334,-.626],[2.631,-3.695,-.182,.436,-.813],[2.647,-3.508,-.249,.586,-.991],[2.663,-3.293,-.301,.781,-1.147],[2.679,-3.036,-.326,1.029,-1.288],[2.694,-2.77,-.297,1.286,-1.41],[2.71,-2.525,-.214,1.511,-1.518],[2.726,-2.318,-.103,1.683,-1.609],[2.741,-2.146,.017,1.801,-1.689],[2.757,-1.995,.129,1.874,-1.757],[2.773,-1.865,.223,1.908,-1.816],[2.789,-1.748,.3,1.912,-1.867],[2.804,-1.645,.36,1.899,-1.914],[2.82,-1.553,.407,1.878,-1.96],[2.857,-1.341,.495,1.808,-2.08],[2.893,-1.094,.553,1.7,-2.207],[2.93,-.805,.555,1.557,-2.322],[2.967,-.498,.479,1.416,-2.407],[3.003,-.221,.337,1.324,-2.452],[3.04,-.004,.171,1.298,-2.458],[3.077,.148,.028,1.315,-2.443],[3.113,.241,-.073,1.348,-2.42],[3.15,.276,-.115,1.375,-2.408],[3.2,.285,-.124,1.399,-2.406],[3.25,.291,-.127,1.417,-2.404],[3.3,.296,-.128,1.429,-2.404],[3.35,.298,-.129,1.437,-2.403],[3.4,.302,-.13,1.443,-2.402],[3.45,.303,-.13,1.446,-2.402],[3.5,.304,-.13,1.449,-2.402],[3.55,.305,-.131,1.45,-2.401],[3.6,.305,-.131,1.451,-2.402],[3.65,.304,-.131,1.45,-2.402],[3.7,.305,-.13,1.45,-2.402],[3.75,.305,-.131,1.45,-2.402],[3.8,.304,-.13,1.449,-2.402],[3.85,.304,-.13,1.448,-2.401],[3.9,.303,-.13,1.448,-2.402],[3.95,.304,-.13,1.448,-2.402],[4,.303,-.13,1.447,-2.403],[4.05,.303,-.129,1.447,-2.403],[4.1,.302,-.129,1.446,-2.404],[4.15,.301,-.128,1.446,-2.404],[4.2,.302,-.129,1.446,-2.405],[4.25,.301,-.128,1.445,-2.405],[4.3,.299,-.127,1.443,-2.405],[4.35,.299,-.126,1.442,-2.407],[4.4,.298,-.126,1.441,-2.407],[4.45,.298,-.125,1.441,-2.408],[4.5,.298,-.125,1.441,-2.409],[4.55,.297,-.125,1.442,-2.409],[4.6,.297,-.125,1.441,-2.41],[4.65,.296,-.124,1.44,-2.41],[4.7,.295,-.123,1.439,-2.412],[4.75,.294,-.122,1.439,-2.412],[4.8,.293,-.121,1.438,-2.413],[4.85,.293,-.122,1.438,-2.413],[4.9,.293,-.121,1.438,-2.414],[4.95,.291,-.12,1.437,-2.415],[5,.291,-.12,1.436,-2.416],[5.05,.29,-.119,1.436,-2.417],[5.1,.29,-.118,1.435,-2.418],[5.15,.29,-.117,1.435,-2.418],[5.2,.288,-.117,1.434,-2.419],[5.25,.288,-.117,1.433,-2.42],[5.3,.288,-.116,1.433,-2.421],[5.35,.288,-.116,1.433,-2.421],[5.4,.286,-.116,1.432,-2.421],[5.45,.286,-.115,1.431,-2.422],[5.5,.286,-.115,1.432,-2.423],[5.55,.285,-.115,1.431,-2.423],[5.6,.284,-.114,1.43,-2.424],[5.65,.284,-.113,1.429,-2.424],[5.7,.283,-.113,1.429,-2.424],[5.75,.284,-.113,1.429,-2.425],[5.8,.285,-.113,1.433,-2.425],[5.85,.288,-.113,1.441,-2.426],[5.9,.291,-.113,1.451,-2.426],[5.95,.295,-.114,1.464,-2.426],[6,.3,-.114,1.475,-2.425]],r:[[0,.3,-.114,1.475,-2.425],[.05,.296,-.114,1.463,-2.426],[.1,.291,-.113,1.452,-2.426],[.15,.288,-.113,1.444,-2.425],[.2,.286,-.113,1.438,-2.425],[.25,.285,-.113,1.434,-2.425],[.3,.283,-.112,1.43,-2.426],[.35,.282,-.112,1.427,-2.426],[.4,.281,-.112,1.423,-2.426],[.45,.28,-.112,1.42,-2.426],[.5,.28,-.114,1.42,-2.425],[.55,.268,-.113,1.431,-2.437],[.6,.186,-.089,1.485,-2.506],[.65,.213,-.099,1.48,-2.487],[.7,.297,-.126,1.439,-2.411],[.75,.351,-.153,1.407,-2.337],[.8,.363,-.169,1.408,-2.313],[.85,.356,-.202,1.444,-2.305],[.9,.344,-.243,1.505,-2.307],[.95,.336,-.272,1.572,-2.314],[1,.337,-.271,1.62,-2.328],[1.05,.339,-.239,1.637,-2.349],[1.1,.183,-.177,1.606,-2.391],[1.15,-.156,-.126,1.541,-2.383],[1.2,-.392,-.144,1.474,-2.296],[1.222,-.441,-.179,1.424,-2.243],[1.243,-.495,-.227,1.35,-2.175],[1.265,-.556,-.276,1.253,-2.095],[1.286,-.627,-.321,1.139,-2.004],[1.308,-.709,-.356,1.011,-1.902],[1.329,-.8,-.376,.877,-1.792],[1.351,-.899,-.378,.738,-1.679],[1.372,-.999,-.36,.605,-1.564],[1.394,-1.09,-.327,.488,-1.453],[1.415,-1.166,-.29,.398,-1.353],[1.437,-1.223,-.254,.335,-1.273],[1.458,-1.251,-.24,.311,-1.226],[1.48,-1.25,-.242,.319,-1.22],[1.52,-1.18,-.291,.386,-1.253],[1.56,-1.06,-.385,.489,-1.27],[1.6,-.954,-.463,.566,-1.262],[1.64,-.912,-.497,.582,-1.245],[1.68,-.921,-.505,.553,-1.221],[1.72,-.953,-.518,.503,-1.173],[1.743,-1.007,-.526,.468,-1.135],[1.767,-1.129,-.51,.398,-1.075],[1.79,-1.298,-.468,.297,-.975],[1.813,-1.478,-.408,.189,-.836],[1.837,-1.624,-.347,.1,-.694],[1.86,-1.691,-.339,.054,-.606],[1.883,-1.654,-.38,.066,-.67],[1.905,-1.52,-.404,.138,-.922],[1.927,-1.369,-.38,.226,-1.238],[1.95,-1.262,-.309,.286,-1.527],[1.973,-1.207,-.223,.32,-1.755],[1.995,-1.197,-.138,.331,-1.914],[2.018,-1.209,-.076,.327,-2.002],[2.04,-1.217,-.065,.312,-2.015],[2.085,-1.24,-.124,.245,-1.927],[2.13,-1.298,-.178,.149,-1.799],[2.175,-1.362,-.206,.068,-1.685],[2.22,-1.394,-.203,.047,-1.642],[2.235,-1.412,-.185,.054,-1.638],[2.25,-1.456,-.151,.07,-1.626],[2.265,-1.515,-.103,.109,-1.625],[2.28,-1.589,-.047,.171,-1.635],[2.295,-1.68,.012,.251,-1.657],[2.31,-1.793,.067,.346,-1.684],[2.325,-1.931,.112,.446,-1.714],[2.34,-2.097,.133,.543,-1.739],[2.349,-2.216,.128,.596,-1.746],[2.358,-2.355,.102,.637,-1.735],[2.367,-2.507,.052,.661,-1.698],[2.376,-2.668,-.011,.657,-1.631],[2.385,-2.831,-.08,.627,-1.534],[2.395,-2.997,-.143,.57,-1.407],[2.404,-3.163,-.191,.496,-1.255],[2.413,-3.336,-.221,.411,-1.074],[2.422,-3.503,-.238,.332,-.88],[2.431,-3.664,-.227,.256,-.683],[2.44,-3.784,-.205,.205,-.532],[2.48,-4.057,-.088,.12,-.212],[2.52,-4.155,-.006,.128,-.135],[2.56,-4.126,-.021,.181,-.218],[2.6,-3.966,-.08,.272,-.467],[2.616,-3.851,-.12,.334,-.626],[2.631,-3.695,-.182,.436,-.813],[2.647,-3.508,-.249,.586,-.991],[2.663,-3.293,-.301,.781,-1.147],[2.679,-3.036,-.326,1.029,-1.288],[2.694,-2.77,-.297,1.286,-1.41],[2.71,-2.525,-.214,1.511,-1.518],[2.726,-2.318,-.103,1.683,-1.609],[2.741,-2.146,.017,1.801,-1.689],[2.757,-1.995,.129,1.874,-1.757],[2.773,-1.865,.223,1.908,-1.816],[2.789,-1.748,.3,1.912,-1.867],[2.804,-1.645,.36,1.899,-1.914],[2.82,-1.553,.407,1.878,-1.96],[2.857,-1.341,.495,1.808,-2.08],[2.893,-1.094,.553,1.7,-2.207],[2.93,-.805,.555,1.557,-2.322],[2.967,-.498,.479,1.416,-2.407],[3.003,-.221,.337,1.324,-2.452],[3.04,-.004,.171,1.298,-2.458],[3.077,.148,.028,1.315,-2.443],[3.113,.241,-.073,1.348,-2.42],[3.15,.276,-.115,1.375,-2.408],[3.2,.285,-.124,1.399,-2.406],[3.25,.291,-.127,1.417,-2.404],[3.3,.296,-.128,1.429,-2.404],[3.35,.298,-.129,1.437,-2.403],[3.4,.302,-.13,1.443,-2.402],[3.45,.303,-.13,1.446,-2.402],[3.5,.304,-.13,1.449,-2.402],[3.55,.305,-.131,1.45,-2.401],[3.6,.305,-.131,1.451,-2.402],[3.65,.304,-.131,1.45,-2.402],[3.7,.305,-.13,1.45,-2.402],[3.75,.305,-.131,1.45,-2.402],[3.8,.304,-.13,1.449,-2.402],[3.85,.304,-.13,1.448,-2.401],[3.9,.303,-.13,1.448,-2.402],[3.95,.304,-.13,1.448,-2.402],[4,.303,-.13,1.447,-2.403],[4.05,.303,-.129,1.447,-2.403],[4.1,.302,-.129,1.446,-2.404],[4.15,.301,-.128,1.446,-2.404],[4.2,.302,-.129,1.446,-2.405],[4.25,.301,-.128,1.445,-2.405],[4.3,.299,-.127,1.443,-2.405],[4.35,.299,-.126,1.442,-2.407],[4.4,.298,-.126,1.441,-2.407],[4.45,.298,-.125,1.441,-2.408],[4.5,.298,-.125,1.441,-2.409],[4.55,.297,-.125,1.442,-2.409],[4.6,.297,-.125,1.441,-2.41],[4.65,.296,-.124,1.44,-2.41],[4.7,.295,-.123,1.439,-2.412],[4.75,.294,-.122,1.439,-2.412],[4.8,.293,-.121,1.438,-2.413],[4.85,.293,-.122,1.438,-2.413],[4.9,.293,-.121,1.438,-2.414],[4.95,.291,-.12,1.437,-2.415],[5,.291,-.12,1.436,-2.416],[5.05,.29,-.119,1.436,-2.417],[5.1,.29,-.118,1.435,-2.418],[5.15,.29,-.117,1.435,-2.418],[5.2,.288,-.117,1.434,-2.419],[5.25,.288,-.117,1.433,-2.42],[5.3,.288,-.116,1.433,-2.421],[5.35,.288,-.116,1.433,-2.421],[5.4,.286,-.116,1.432,-2.421],[5.45,.286,-.115,1.431,-2.422],[5.5,.286,-.115,1.432,-2.423],[5.55,.285,-.115,1.431,-2.423],[5.6,.284,-.114,1.43,-2.424],[5.65,.284,-.113,1.429,-2.424],[5.7,.283,-.113,1.429,-2.424],[5.75,.284,-.113,1.429,-2.425],[5.8,.285,-.113,1.433,-2.425],[5.85,.288,-.113,1.441,-2.426],[5.9,.291,-.113,1.451,-2.426],[5.95,.295,-.114,1.464,-2.426],[6,.3,-.114,1.475,-2.425]]},l:[[0,.068,.002,-.754,-2.424],[.05,.071,.005,-.763,-2.425],[.1,.072,.006,-.768,-2.425],[.15,.072,.005,-.767,-2.426],[.2,.072,.006,-.769,-2.426],[.25,.076,.009,-.78,-2.426],[.3,.08,.014,-.8,-2.425],[.35,.084,.018,-.817,-2.426],[.4,.087,.021,-.827,-2.426],[.45,.09,.024,-.837,-2.425],[.5,.092,.029,-.851,-2.425],[.55,.083,.035,-.87,-2.436],[.6,.019,.016,-.89,-2.506],[.65,.043,.03,-.911,-2.486],[.7,.121,.059,-.924,-2.409],[.75,.174,.08,-.929,-2.337],[.8,.193,.083,-.938,-2.316],[.85,.21,.062,-.948,-2.32],[.9,.231,.035,-.971,-2.336],[.95,.252,.018,-1.015,-2.356],[1,.266,.029,-1.086,-2.367],[1.024,.221,.039,-1.127,-2.369],[1.048,.09,.051,-1.15,-2.356],[1.072,-.09,.083,-1.139,-2.316],[1.096,-.277,.139,-1.087,-2.245],[1.12,-.443,.21,-.996,-2.156],[1.133,-.527,.256,-.927,-2.098],[1.145,-.618,.309,-.841,-2.021],[1.157,-.715,.363,-.745,-1.928],[1.17,-.816,.408,-.645,-1.827],[1.183,-.913,.446,-.553,-1.724],[1.195,-1.009,.452,-.444,-1.631],[1.208,-1.078,.456,-.373,-1.564],[1.22,-1.111,.461,-.344,-1.535],[1.26,-1.054,.534,-.39,-1.551],[1.3,-1.007,.622,-.446,-1.545],[1.345,-1.126,.591,-.349,-1.52],[1.39,-1.294,.554,-.235,-1.452],[1.435,-1.46,.501,-.125,-1.359],[1.48,-1.58,.454,-.042,-1.274],[1.525,-1.653,.414,.013,-1.2],[1.57,-1.704,.377,.053,-1.118],[1.615,-1.736,.338,.08,-1.035],[1.66,-1.757,.295,.098,-.948],[1.705,-1.767,.25,.105,-.869],[1.75,-1.769,.209,.098,-.802],[1.796,-1.761,.171,.078,-.738],[1.842,-1.748,.14,.045,-.67],[1.888,-1.718,.116,.003,-.625],[1.934,-1.659,.088,-.043,-.627],[1.98,-1.557,.074,-.096,-.705],[2.015,-1.439,.052,-.132,-.801],[2.05,-1.302,.02,-.158,-.892],[2.085,-1.172,.001,-.204,-.974],[2.12,-1.08,-.02,-.257,-1.052],[2.165,-1.017,-.036,-.319,-1.128],[2.21,-.993,-.025,-.343,-1.151],[2.255,-1.045,.027,-.293,-1.079],[2.3,-1.231,.13,-.092,-.818],[2.335,-1.351,.17,.108,-.695],[2.37,-1.345,.212,.252,-.816],[2.405,-1.242,.245,.306,-1.099],[2.44,-1.138,.301,.267,-1.368],[2.474,-1.043,.358,.17,-1.575],[2.509,-.926,.395,.026,-1.776],[2.543,-.787,.407,-.149,-1.958],[2.578,-.631,.392,-.333,-2.11],[2.612,-.467,.368,-.511,-2.22],[2.647,-.311,.324,-.619,-2.292],[2.681,-.188,.268,-.671,-2.337],[2.716,-.1,.215,-.689,-2.363],[2.75,-.056,.175,-.693,-2.378],[2.8,-.029,.128,-.697,-2.391],[2.85,-.003,.088,-.701,-2.399],[2.9,.022,.052,-.705,-2.406],[2.95,.043,.026,-.71,-2.407],[3,.058,.009,-.715,-2.407],[3.05,.065,.004,-.722,-2.407],[3.1,.068,.006,-.726,-2.406],[3.15,.067,.007,-.726,-2.405],[3.2,.068,.007,-.725,-2.404],[3.25,.068,.007,-.726,-2.404],[3.3,.07,.009,-.73,-2.403],[3.35,.071,.011,-.735,-2.403],[3.4,.072,.013,-.741,-2.402],[3.45,.074,.014,-.746,-2.402],[3.5,.075,.016,-.751,-2.402],[3.55,.076,.017,-.756,-2.401],[3.6,.078,.019,-.76,-2.401],[3.65,.079,.019,-.763,-2.402],[3.7,.079,.019,-.764,-2.401],[3.75,.079,.02,-.765,-2.401],[3.8,.078,.019,-.761,-2.401],[3.85,.077,.017,-.756,-2.401],[3.9,.075,.016,-.752,-2.402],[3.95,.075,.016,-.752,-2.401],[4,.076,.016,-.753,-2.402],[4.05,.077,.017,-.758,-2.403],[4.1,.079,.019,-.769,-2.404],[4.15,.085,.025,-.79,-2.404],[4.2,.094,.034,-.823,-2.405],[4.25,.105,.045,-.867,-2.405],[4.3,.119,.062,-.924,-2.404],[4.325,.097,.069,-.963,-2.405],[4.35,.018,.074,-1.004,-2.403],[4.375,-.098,.091,-1.043,-2.386],[4.4,-.227,.129,-1.075,-2.342],[4.425,-.342,.19,-1.103,-2.271],[4.45,-.424,.274,-1.129,-2.174],[4.469,-.468,.361,-1.151,-2.072],[4.487,-.503,.474,-1.178,-1.927],[4.506,-.53,.603,-1.209,-1.748],[4.525,-.543,.745,-1.251,-1.539],[4.544,-.522,.895,-1.323,-1.314],[4.563,-.455,1.035,-1.43,-1.095],[4.581,-.407,1.139,-1.499,-.921],[4.6,-.302,1.181,-1.619,-.849],[4.65,-.334,1.165,-1.519,-.885],[4.7,-.49,1.138,-1.278,-.912],[4.726,-.857,1.062,-.876,-.896],[4.751,-1.239,.834,-.439,-.851],[4.777,-1.419,.602,-.225,-.803],[4.803,-1.528,.417,-.107,-.75],[4.829,-1.615,.278,-.034,-.685],[4.854,-1.686,.187,.008,-.618],[4.88,-1.735,.143,.026,-.571],[4.928,-1.778,.133,.03,-.549],[4.976,-1.777,.124,.03,-.604],[5.024,-1.746,.114,.029,-.71],[5.072,-1.702,.109,.027,-.834],[5.12,-1.659,.108,.024,-.945],[5.164,-1.613,.111,.019,-1.052],[5.208,-1.562,.114,.014,-1.166],[5.252,-1.508,.124,.003,-1.275],[5.296,-1.449,.158,-.029,-1.369],[5.34,-1.38,.216,-.09,-1.44],[5.372,-1.3,.282,-.163,-1.493],[5.404,-1.184,.363,-.266,-1.55],[5.436,-1.051,.459,-.401,-1.595],[5.468,-.924,.537,-.532,-1.626],[5.5,-.875,.56,-.58,-1.637],[5.54,-.856,.562,-.6,-1.649],[5.58,-.86,.561,-.596,-1.648],[5.62,-.859,.559,-.6,-1.651],[5.663,-.83,.531,-.641,-1.701],[5.707,-.806,.379,-.594,-1.832],[5.75,-.737,.263,-.589,-1.965],[5.779,-.649,.214,-.611,-2.059],[5.807,-.53,.164,-.645,-2.162],[5.836,-.386,.115,-.682,-2.259],[5.864,-.232,.071,-.714,-2.336],[5.893,-.09,.039,-.736,-2.387],[5.921,.017,.017,-.748,-2.414],[5.95,.068,.002,-.754,-2.424],[6,.068,.002,-.754,-2.424]],ik:{"R.rest":{err:.0074,pen:0,prior:0},"R.rest1":{err:.0071,pen:0,prior:0},"R.lift":{err:.0066,pen:0,prior:0},"R.hover.p":{err:.0219,pen:0,prior:0},"R.grab.p":{err:.0399,pen:1e-5,prior:0},"R.grab2.p":{err:.0111,pen:0,prior:0},"R.hover2.p":{err:.0139,pen:0,prior:0},"R.hide.p":{err:.0068,pen:0,prior:0},"R.hide2.p":{err:.0061,pen:0,prior:0},"R.face":{err:.0076,pen:0,prior:0},"R.release":{err:.0016,pen:0,prior:0},"R.follow":{err:.0173,pen:0,prior:0},"R.swing":{err:.008,pen:0,prior:0},"R.rest2":{err:.0068,pen:0,prior:0},"R.end":{err:.0074,pen:0,prior:0},"R.rest\u2192rest1":{err:.0074,pen:0,prior:0,step:.098},"R.rest1\u2192lift":{err:.0073,pen:0,prior:0,step:.27},"R.lift\u2192hover.p":{err:.0064,pen:0,prior:0,step:.185},"R.hover.p\u2192grab.p":{err:.0074,pen:0,prior:0,step:.211},"R.grab.p\u2192grab2.p":{err:.0046,pen:0,prior:0,step:.089},"R.grab2.p\u2192hover2.p":{err:.0081,pen:0,prior:0,step:.237},"R.hover2.p\u2192hide.p":{err:.0102,pen:0,prior:0,step:.312},"R.hide.p\u2192hide2.p":{err:.0072,pen:0,prior:0,step:.123},"R.hide2.p\u2192face":{err:.0075,pen:0,prior:0,step:.174},"R.face\u2192release":{err:.0072,pen:0,prior:0,step:.219},"R.release\u2192follow":{err:.0824,pen:0,prior:0,step:.415},"R.follow\u2192swing":{err:.0081,pen:0,prior:0,step:.456},"R.swing\u2192rest2":{err:.0097,pen:0,prior:0,step:.378},"R.rest2\u2192end":{err:.0075,pen:0,prior:0,step:.048},"R.hover.n":{err:.0073,pen:0,prior:0},"R.grab.n":{err:.0336,pen:0,prior:0},"R.grab2.n":{err:.0063,pen:0,prior:0},"R.hover2.n":{err:.0118,pen:0,prior:0},"R.hide.n":{err:.007,pen:0,prior:0},"R.hide2.n":{err:.0065,pen:0,prior:0},"R.lift\u2192hover.n":{err:.0071,pen:0,prior:0,step:.231},"R.hover.n\u2192grab.n":{err:.0065,pen:0,prior:0,step:.142},"R.grab.n\u2192grab2.n":{err:.0053,pen:0,prior:0,step:.071},"R.grab2.n\u2192hover2.n":{err:.0055,pen:0,prior:0,step:.198},"R.hover2.n\u2192hide.n":{err:.0068,pen:0,prior:0,step:.374},"R.hide.n\u2192hide2.n":{err:.007,pen:0,prior:0,step:.136},"R.hide2.n\u2192face":{err:.0073,pen:0,prior:0,step:.188},"R.hover.b":{err:.0068,pen:0,prior:0},"R.grab.b":{err:.0255,pen:0,prior:0},"R.grab2.b":{err:.0053,pen:0,prior:0},"R.hover2.b":{err:.0184,pen:0,prior:0},"R.hide.b":{err:.0067,pen:0,prior:0},"R.hide2.b":{err:.0074,pen:0,prior:0},"R.lift\u2192hover.b":{err:.0065,pen:0,prior:0,step:.207},"R.hover.b\u2192grab.b":{err:.0059,pen:0,prior:0,step:.138},"R.grab.b\u2192grab2.b":{err:.0049,pen:0,prior:0,step:.068},"R.grab2.b\u2192hover2.b":{err:.0047,pen:0,prior:0,step:.205},"R.hover2.b\u2192hide.b":{err:.0066,pen:0,prior:0,step:.354},"R.hide.b\u2192hide2.b":{err:.0073,pen:0,prior:0,step:.139},"R.hide2.b\u2192face":{err:.0075,pen:0,prior:0,step:.173},"R.hover.r":{err:.0071,pen:0,prior:0},"R.grab.r":{err:.0352,pen:0,prior:0},"R.grab2.r":{err:.0103,pen:0,prior:0},"R.hover2.r":{err:.0158,pen:0,prior:0},"R.hide.r":{err:.0066,pen:0,prior:0},"R.hide2.r":{err:.0064,pen:0,prior:0},"R.lift\u2192hover.r":{err:.0066,pen:0,prior:0,step:.214},"R.hover.r\u2192grab.r":{err:.0062,pen:0,prior:0,step:.172},"R.grab.r\u2192grab2.r":{err:.0047,pen:0,prior:0,step:.086},"R.grab2.r\u2192hover2.r":{err:.009,pen:0,prior:0,step:.255},"R.hover2.r\u2192hide.r":{err:.0122,pen:0,prior:0,step:.311},"R.hide.r\u2192hide2.r":{err:.0068,pen:0,prior:0,step:.128},"R.hide2.r\u2192face":{err:.0073,pen:0,prior:0,step:.17},"L.rest":{err:.0078,pen:0,prior:0},"L.rest1":{err:.0075,pen:0,prior:0},"L.aLift":{err:.0064,pen:0,prior:0},"L.aAbove":{err:.0159,pen:0,prior:0},"L.a":{err:.0193,pen:0,prior:0},"L.aUp":{err:.0046,pen:0,prior:0},"L.mid":{err:.0048,pen:0,prior:0},"L.bUp":{err:.0049,pen:0,prior:0},"L.b":{err:.0081,pen:0,prior:0},"L.b2":{err:.0055,pen:0,prior:0},"L.bBack":{err:.0079,pen:0,prior:0},"L.rest2":{err:.0069,pen:0,prior:0},"L.rest3":{err:.0067,pen:0,prior:0},"L.cLift":{err:.006,pen:0,prior:0},"L.cAbove":{err:.009,pen:0,prior:0},"L.c":{err:.0034,pen:0,prior:0},"L.cUp":{err:.0045,pen:0,prior:0},"L.cMid":{err:.0079,pen:0,prior:0},"L.dUp":{err:.0068,pen:0,prior:0},"L.d":{err:.0137,pen:0,prior:0},"L.d2":{err:.0105,pen:0,prior:0},"L.dBack":{err:.0064,pen:0,prior:0},"L.rest4":{err:.0078,pen:0,prior:0},"L.end":{err:.0078,pen:0,prior:0},"L.rest\u2192rest1":{err:.0078,pen:0,prior:0,step:.251},"L.rest1\u2192aLift":{err:.0075,pen:0,prior:0,step:.182},"L.aLift\u2192aAbove":{err:.0065,pen:0,prior:0,step:.272},"L.aAbove\u2192a":{err:.0062,pen:0,prior:0,step:.169},"L.a\u2192aUp":{err:.0063,pen:0,prior:0,step:.262},"L.aUp\u2192mid":{err:.0067,pen:0,prior:0,step:.203},"L.mid\u2192bUp":{err:.0064,pen:0,prior:0,step:.267},"L.bUp\u2192b":{err:.0059,pen:0,prior:0,step:.143},"L.b\u2192b2":{err:.0081,pen:0,prior:0,step:.286},"L.b2\u2192bBack":{err:.0097,pen:0,prior:0,step:.346},"L.bBack\u2192rest2":{err:.0093,pen:0,prior:0,step:.341},"L.rest2\u2192rest3":{err:.0077,pen:0,prior:0,step:.068},"L.rest3\u2192cLift":{err:.0073,pen:0,prior:0,step:.124},"L.cLift\u2192cAbove":{err:.0063,pen:0,prior:0,step:.227},"L.cAbove\u2192c":{err:.0072,pen:0,prior:0,step:.232},"L.c\u2192cUp":{err:.0059,pen:0,prior:0,step:.427},"L.cUp\u2192cMid":{err:.0059,pen:0,prior:0,step:.174},"L.cMid\u2192dUp":{err:.007,pen:0,prior:0,step:.114},"L.dUp\u2192d":{err:.0129,pen:0,prior:0,step:.194},"L.d\u2192d2":{err:.006,pen:0,prior:0,step:.026},"L.d2\u2192dBack":{err:.0113,pen:0,prior:0,step:.181},"L.dBack\u2192rest4":{err:.0075,pen:0,prior:0,step:.169},"L.rest4\u2192end":{err:0,pen:0,prior:0,step:0}}};var $f=(i,t={})=>new _n({color:i,flatShading:!0,...t}),Ri=(i,t={})=>new cn({color:i,flatShading:!0,shininess:70,specular:9076848,...t}),Zf=i=>i<=0?0:i>=1?1:i*i*(3-2*i),zl=6,Yl=7.5,ld=3.6,hd=Math.sqrt(2*ld/Yl),$l=.6,Vl=[[0,[.12,0,0,.72,1]],[.53,[.12,0,0,.72,1]],[.62,[.15,0,0,.7,.93]],[.77,[.06,0,0,.74,1.05]],[1,[.04,.06,-.04,.72,1]],[1.48,[.16,-.14,.05,.71,.98]],[1.72,[.14,-.1,.04,.72,1]],[2.04,[.02,.16,-.04,.73,1.01]],[2.24,[-.08,.3,-.07,.7,.92]],[2.4,[.12,-.32,.09,.77,1.09]],[2.62,[.2,-.22,.05,.73,1.02]],[3.05,[.1,0,0,.72,1]],[6,[.12,0,0,.72,1]]],xa=hd-$l;function Cn(i,t){let e=i.length,n=Array.isArray(i[0][1]),s=x=>n?i[x][1]:[i[x][1]];if(t<=i[0][0])return i[0][1];if(t>=i[e-1][0])return i[e-1][1];let r=0;for(;t>i[r+1][0];)r++;let o=i[Math.max(0,r-1)][0],a=i[r][0],c=i[r+1][0],l=i[Math.min(e-1,r+2)][0],h=s(Math.max(0,r-1)),u=s(r),f=s(r+1),d=s(Math.min(e-1,r+2)),g=c-a,y=(t-a)/g,m=y*y,p=m*y,_=u.map((x,v)=>{let S=r===0||c===o?0:(f[v]-h[v])/(c-o)*g,E=r+1===e-1||l===a?0:(d[v]-u[v])/(l-a)*g,T=u[v]===h[v]||u[v]===f[v]?0:S,I=f[v]===d[v]||f[v]===u[v]?0:E;return(2*p-3*m+1)*x+(p-2*m+y)*T+(-2*p+3*m)*f[v]+(p-m)*I});return n?_:_[0]}var Kf=14264378,Ci=.27,qn=1.02,Kl=.74,Hr=(i,t)=>new R((i-3.5)*Ci,qn,Kl+(t+.5)*Ci),Gn=.34,ya=[[0,0],[.33,0],[.33,.07],[.25,.12]],Ey={p:[...ya,[.17,.3],[.12,.38],[.19,.42],[.15,.5],[.08,.6],[0,.63]],r:[...ya,[.21,.42],[.27,.5],[.27,.68],[0,.68]],n:[...ya,[.2,.3],[0,.3]],b:[...ya,[.2,.42],[.13,.5],[.23,.58],[.21,.7],[.12,.84],[.06,.88],[0,.9]],q:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.62],[.28,.72],[.29,.8],[.2,.88],[.14,.98],[0,1]],k:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.64],[.29,.74],[.29,.84],[.2,.92],[.09,.98],[0,.98]]},Sy={p:.63,r:.68,n:.9,b:.96,q:1.06,k:1.2},wy=[[-.16,.28],[.16,.28],[.17,.5],[.3,.6],[.31,.72],[.14,.78],[.1,.9],[0,.82],[-.1,.9],[-.13,.76],[-.2,.6],[-.18,.4]];function Ty(i){let e=[new Vs(Ey[i].map(([s,r])=>new tt(s,r)),7)],n=(s,r,o,a,c,l)=>new ie(s,r,o).translate(a,c,l);if(i==="r")for(let s=0;s<4;s++){let r=s/4*Math.PI*2+.4;e.push(n(.11,.12,.11,Math.sin(r)*.2,.74,Math.cos(r)*.2))}else if(i==="b")e.push(new un(.06,0).translate(0,.94,0));else if(i==="q"){e.push(new un(.08,0).translate(0,1.06,0));for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.push(new ui(.05,.14,4).translate(Math.sin(r)*.22,.92,Math.cos(r)*.22))}}else if(i==="k")e.push(n(.07,.26,.07,0,1.1,0)),e.push(n(.2,.07,.07,0,1.12,0));else if(i==="n"){let s=new Ze(wy.map(([r,o])=>new tt(r,o)));e.push(new Hn(s,{depth:.2,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03,bevelSegments:1,curveSegments:1}).translate(0,0,-.1))}return e}var Gl=new Map;function Jf(i,t){Gl.has(i)||Gl.set(i,Ty(i));let e=new se;for(let n of Gl.get(i))e.add(new Bt(n,t));return e.scale.setScalar(Gn),e.userData.type=i,e}var jf=1.55,zr=1.7;function Ay(i){return i.hand.wrist}var is=1.25,Ry=[0,-.11,.045],Cy=new R(0,-.15,.045).multiplyScalar(is),Wl={p:.52,r:.6,n:.74,b:.78,q:.97,k:.9},Qf={p:.8,r:.58,n:.66,b:.74,q:.7};function td(i,t,e=.8){let n=new R(t.x-i.x,0,t.z-i.z).normalize().multiplyScalar(Math.sqrt(1-e*e)).add(new R(0,-e,0)).normalize(),s=n.clone().negate(),r=new R(0,-1,0).addScaledVector(n,n.y).normalize(),o=new R().crossVectors(s,r);return new Ke().setFromRotationMatrix(new ue().makeBasis(o,s,r))}var Zl=.32,ud=[[.53,.46-Zl,-.46],[.86,1.08-Zl,.5]],Wn=[[-.68,.51,-.57],[.68,1.81,-.35]],ss=[[0,1.8,-.46],[.68,.374,.218]],ql=[[0,0],[.36,.02],[.52,.14],[.58,.34],[.55,.56],[.46,.74],[.36,.86],[.32,.92],[.36,1],[.385,1.12],[.36,1.26],[.28,1.37],[.15,1.44],[0,1.46]];function Py(i){if(i<0||i>1.46)return-1;for(let t=0;t<ql.length-1;t++){let[e,n]=ql[t],[s,r]=ql[t+1];if(i>=n&&i<=r)return e+(s-e)*(i-n)/(r-n||1)}return-1}function ed(i,t){let e=t.shoulder.getWorldPosition(new R),n=t.elbow.getWorldPosition(new R),s=t.hand.wrist.getWorldPosition(new R),r=.034*zr+.02,o=t.s,a=0,c=new R,l=new R,h=i.doll.matrixWorld.clone().invert();for(let[u,f,d]of[[e,n,!1],[n,s,!0]])for(let g=0;g<=6;g++){c.copy(u).lerp(f,g/6),c.z>Kl-.12&&Math.abs(c.x)<4*Ci+.1&&(a+=Math.max(0,qn+r-c.y)**2);let y=c.x*o,[m,p]=ud;y>m[0]-r&&y<p[0]+r&&c.y>m[1]-r&&c.y<p[1]+r&&c.z>m[2]-r&&c.z<p[2]+r&&(a+=Math.min(y-m[0]+r,p[0]+r-y,c.y-m[1]+r,p[1]+r-c.y)**2),Math.abs(c.x)<Wn[1][0]+r&&c.y>Wn[0][1]-r&&c.y<Wn[1][1]+r&&c.z>Wn[0][2]-r&&c.z<Wn[1][2]+r&&(a+=Math.min(Wn[1][0]+r-Math.abs(c.x),c.y-Wn[0][1]+r,Wn[1][1]+r-c.y,c.z-Wn[0][2]+r,Wn[1][2]+r-c.z)**2);{let _=Math.hypot(c.x/(ss[1][0]+r),(c.y-ss[0][1])/(ss[1][1]+r),(c.z-ss[0][2])/(ss[1][2]+r));_<1&&(a+=((1-_)*(ss[1][2]+r))**2)}if(d){l.copy(c).applyMatrix4(h);let _=Py(l.y);_>0&&(a+=Math.max(0,_+r-Math.hypot(l.x,l.z))**2)}}return a}function nd(i,t){let e=i.shoulder.getWorldPosition(new R),n=i.elbow.getWorldPosition(new R),s=Math.max(0,n.y-Math.max(e.y,t.y)-.05),r=Math.max(0,(e.x-n.x)*i.s-.02);return s*s+r*r}var Pi=Math.PI*2,id=["p","n","b","r"],sd=.05,rd=.4,Xl=.6,od=5,Iy=13;function _a(i,t,e,n=[-1,0,.3*i.arms[t].s,-.4],{multi:s=!0,step:r=.4,pole:o=null,poleW:a=0,polish:c=!0}={}){let l=i.arms[t],h=Ay(l),u=new R,f=l.s,d=S=>{l.shoulder.rotation.set(S[0],S[1],S[2]),l.elbow.rotation.set(S[3],0,0),l.shoulder.updateMatrixWorld(!0)},g=new R,y=S=>(d(S),h.getWorldPosition(u),u.distanceToSquared(e)+6*ed(i,l)+2*nd(l,e)+.002*S[3]*S[3]+.004*S[1]*S[1]+(m?a*l.elbow.getWorldPosition(g).distanceToSquared(o):0)),m=!!o,p=(S,E=r)=>{let T=[...S],I=y(T);for(let M=E;M>.001;M*=.6)for(let b=0;b<40;b++){let N=!1;for(let V=0;V<4;V++)for(let W of[M,-M]){let L=T[V];T[V]+=W,V===3&&(T[3]=Math.min(.05,Math.max(-2.6,T[3]))),V===1&&(T[1]=Math.min(1.2,Math.max(-1.2,T[1])));let O=y(T);O<I?(I=O,N=!0):T[V]=L}if(!N)break}return[T,I]},_=n.length===3?[n[0],0,n[1],n[2]]:[...n],[x,v]=p(_);if(s)for(let S of[[-.6,0,.4*f,-1.2],[-1.2,0,.3*f,-.6],[-.3,0,.7*f,-1.8],[-2.6,0,.3*f,-.5],[-3.3,0,.3*f,-.4],[-1.6,.4*f,.9*f,-1.4]]){let[E,T]=p(S);T<v*.7&&(x=E,v=T)}return o&&c&&(m=!1,[x,v]=p(x,.05)),x[0]+=Pi*Math.round((_[0]-x[0])/Pi),x[2]+=Pi*Math.round((_[2]-x[2])/Pi),d(x),x.err=h.getWorldPosition(u).distanceTo(e),x.pen=ed(i,l),x.prior=nd(l,e),x.target=e.clone(),x.elbow=l.elbow.getWorldPosition(new R),x.sh=l.shoulder.getWorldPosition(new R),x.hand=h.getWorldPosition(new R),x}var Jl="dohyeon";function Ly(i){let t=new na,e=0,n=0,s=!0,r=[],o=()=>{if(r.length>2){let a=0;for(let c=0;c<r.length;c++){let[l,h]=r[c],[u,f]=r[(c+1)%r.length];a+=l*f-u*h}Math.abs(a)>n&&(n=Math.abs(a),s=a<0)}r=[]};for(let a of i.p)a[0]==="M"?(o(),t.moveTo(a[1],a[2]),r.push([a[1],a[2]])):a[0]==="L"?(t.lineTo(a[1],a[2]),r.push([a[1],a[2]])):a[0]==="Q"?(t.quadraticCurveTo(a[1],a[2],a[3],a[4]),r.push([a[3],a[4]])):a[0]==="C"&&(t.bezierCurveTo(a[1],a[2],a[3],a[4],a[5],a[6]),r.push([a[5],a[6]]));return o(),t.toShapes(!s)}function ad(i,t,e,{depth:n=.22,front:s,side:r,curve:o=2,bevel:a=1}={}){let c=e/(i.asc||i.upm*.8),l=new se,h=[],u=0;for(let d of t){let g=i.glyphs[d];if(!g){u+=(i.space||i.upm*.3)*c;continue}let y=new Hn(Ly(g),{depth:n/c,bevelEnabled:!0,bevelThickness:n*.35/c,bevelSize:e*.03*a/c,bevelSegments:1,curveSegments:o});y.scale(c,c,c);let m=new Bt(y,[s,r]);m.position.x=u,l.add(m),h.push(m),u+=g.a*c}let f=u;for(let d of h)d.position.x-=f/2;return l.userData={w:f,glyphs:h},l}function cd(i,t,e){let n=t.clone().sub(i).normalize(),s=e.clone().sub(i);return s.addScaledVector(n,-s.dot(n)).normalize()}var Dy=new Ke;function Uy(i,t,e,n,s){let r=i.shoulder.getWorldPosition(new R),o=t.clone().sub(r).normalize(),a=e.clone().applyQuaternion(Dy.identity().slerp(n,s));return a.addScaledVector(o,-a.dot(o)).normalize(),r.addScaledVector(o,.4).addScaledVector(a,.5)}var er=class{constructor(t={}){let e=this.scene=new kn;e.background=new wt(787988),e.fog=new zs(787988,9,16),e.add(new Si(16777215,.55));let n=new nn(16773340,1.45);n.position.set(-2,5,5),e.add(n);let s=new nn(16740568,.8);s.position.set(3,2,-3),e.add(s);let r=new nn(7332095,.6);r.position.set(-3,1.5,-2),e.add(r),this.camera=new Le(36,270/480,.1,40),this.camera.position.set(0,4.3,7.6),this.camera.lookAt(0,1.7,1),this.clear=new wt,this.t=0,this.buildStage();let o=Qs.w,a=Bl(o);for(let c of a.children)Math.abs(Math.abs(c.position.x)-.68)<.01&&(c.position.y-=Zl);e.add(a),this.rig=kl(o),e.add(this.rig.root);for(let c of this.rig.arms)c.shoulder.scale.set(zr,jf,zr),c.hand.wrist.scale.set(is/zr,is/jf,is/zr),c.hand.grip=new qe,c.hand.grip.position.set(...Ry),c.hand.palm.add(c.hand.grip);this.base=Hl(0),this.base.rx=.12,kr(this.rig,this.base),this.buildBoard(),this.gripQ=[td(new R(-.5,1.38,.12),this.queenA.clone().lerp(this.queenB,.5)),td(new R(.48,1.38,.2),this.stealSq)],this.solve(t),this.scene.add(this.camera),this.text3d=null,this.fontId=null,this.loop=-1,this.flight=null,this.ghosts=[],this.puffs=[],this.crownSpring={x:0,v:0,prev:0},this.prevHand=null}buildStage(){let t=this.scene;this.tiles=[];for(let r=0;r<9;r++)for(let o=0;o<5;o++){let a=new Bt(new ie(.78,.04,.6),new ge({color:1118481}));a.position.set((r-4)*.82,-.02,-2.4+o*.64),t.add(a),this.tiles.push({m:a,ix:r,iz:o})}let e=(r,o,a,c,l,h)=>{let u=new ge({color:r,transparent:!0,opacity:o,blending:Zi,depthWrite:!1,side:We}),f=new Bt(new ui(l,h,12,1,!0).translate(0,-h/2,0),u),d=new se;return d.position.set(a,5.6,c),d.add(f),t.add(d),{pivot:d,mat:u,op:o}};this.spot=e(16773320,.14,0,.3,1.5,5.8),this.beams=[e(16732120,.08,-1.8,-.6,.9,6.2),e(5237247,.08,1.8,-.6,.9,6.2)];let n=[];for(let r=0;r<60;r++)n.push((Math.random()-.5)*12,2.5+Math.random()*5,-4-Math.random()*3);let s=new le;s.setAttribute("position",new Ct(n,3)),t.add(new Go(s,new Ar({color:12101848,size:2,sizeAttenuation:!1})))}buildBoard(){let t=this.scene,e=Kl+4*Ci;t.add(new Bt(new ie(8*Ci+.16,.1,8*Ci+.16).translate(0,qn-.06,e),Ri(Kf))),t.add(new Bt(new fe(.22,.42,qn-.1,6).translate(0,(qn-.1)/2,e),$f(5118556)));let n=Ri(14178996,{shininess:40}),s=Ri(2886710,{shininess:40});for(let o=0;o<8;o++)for(let a=0;a<8;a++){let c=Hr(a,o),l=new Bt(new ie(Ci-.012,.03,Ci-.012),(o+a)%2?n:s);l.position.set(c.x,qn-.015,c.z),t.add(l)}this.white=Ri(16051420,{specular:10129536}),this.black=Ri(2372158,{specular:7315632,shininess:90});let r=(o,a,c,l,h=0)=>{let u=Jf(o,a==="w"?this.white:this.black);return u.position.copy(Hr(c,l)),u.rotation.y=h,this.scene.add(u),u};for(let[o,a,c]of[["r",0,0],["k",4,0],["r",7,0],["p",0,1],["p",1,1],["p",6,1],["p",4,2],["b",5,0],["n",6,3]])r(o,"w",a,c,o==="n"?-Math.PI/2:0);for(let[o,a,c]of[["r",0,7],["k",4,7],["q",3,6],["r",7,7],["p",0,6],["p",1,5],["p",5,6],["p",7,5],["b",2,5],["n",6,7]])r(o,"b",a,c,o==="n"?Math.PI/2:0);this.queenA=Hr(2,1),this.queenB=Hr(2,2),this.queen=r("q","w",2,1),this.stealSq=Hr(5,2),this.victim=null}poseBodyAt(t){let e=Cn(Vl,t),n={...this.base,rx:e[0],ry:e[1],rz:e[2],y:e[3]};kr(this.rig,n),this.rig.doll.scale.set(1/Math.sqrt(e[4]),e[4],1/Math.sqrt(e[4])),this.rig.root.updateMatrixWorld(!0)}armKeys(){let t=zl,e=(_,x,v)=>new R(_,x,v),n=(_,x)=>x.clone().sub(Cy.clone().applyQuaternion(this.gripQ[_])).toArray(),s=(_,x,v=0)=>e(_.x,_.y+Wl[x]*Gn+v,_.z),r=(_,x)=>n(1,s(this.stealSq,_,x)),o=[.62,1.16,.58],a=[-.62,1.16,.58],c=[1.2,1.32,.08],l=1.47,h=(_,x,v)=>n(1,e(x,l+Wl[_]*Gn,v)),u=_=>[["rest",0,o,[-.9,.3,-1]],["rest1",1.05,o],["lift",1.2,[.66,1.5,.68]],[`hover.${_}`,1.48,r(_,.2),[-1.3,.2,-.5]],[`grab.${_}`,1.64,r(_,0)],[`grab2.${_}`,1.72,r(_,0)],[`hover2.${_}`,1.86,h(_,this.stealSq.x,this.stealSq.z)],[`hide.${_}`,2.04,h(_,.7,.62)],[`hide2.${_}`,2.22,h(_,.7,.62)],["face",2.34,[.8,2.3,.3],[-2.5,.3,-.5]],["release",2.44,[.82,2.45,-.5],[-3.3,.3,-.4]],["follow",2.6,[.98,2.2,-.6]],["swing",2.82,[1.12,1.85,.22],null,[.9,1.6,-.35]],["rest2",3.15,o,null,c],["end",t,"rest"]],f=(_,x=0)=>s(_,"q",x),d=_=>f(this.queenA.clone().lerp(this.queenB,.5),_),g=_=>n(0,f(this.queenA,_)),y=_=>n(0,f(this.queenB,_)),m=_=>n(0,d(_)),p=[["rest",0,a,[-.9,-.3,-1]],["rest1",1,a],["aLift",1.12,[-.6,1.46,.78]],["aAbove",1.22,g(.12),[-1.2,-.2,-.5]],["a",1.3,g(0)],["aUp",1.48,g(.3)],["mid",1.75,m(.4)],["bUp",1.98,y(.3)],["b",2.12,y(0)],["b2",2.3,y(0)],["bBack",2.44,[-.48,1.6,1]],["rest2",2.75,a],["rest3",4.3,a],["cLift",4.45,[-.6,1.46,.78]],["cAbove",4.6,y(.15)],["c",4.7,y(0)],["cUp",4.88,y(.3)],["cMid",5.12,m(.4)],["dUp",5.34,g(.3)],["d",5.5,g(0)],["d2",5.62,g(0)],["dBack",5.75,[-.55,1.5,.92]],["rest4",5.95,"rest"],["end",t,"rest"]];return{right:Object.fromEntries(id.map(_=>[_,u(_)])),left:p}}ikSig(t){this.poseBodyAt(0);let e=this.rig.arms.map(r=>{let o=r.shoulder.getWorldPosition(new R),a=r.elbow.getWorldPosition(new R),c=r.hand.wrist.getWorldPosition(new R);return[o.toArray(),o.distanceTo(a),a.distanceTo(c)]}),n=JSON.stringify([Iy,sd,rd,Xl,od,ud,Wn,ss,Vl,e,t],(r,o)=>typeof o=="number"?+o.toFixed(4):o),s=2166136261;for(let r=0;r<n.length;r++)s^=n.charCodeAt(r),s=Math.imul(s,16777619)>>>0;return s.toString(16).padStart(8,"0")}solve({fresh:t=!1}={}){let e=this.armKeys(),n=this.ikSig(e);if(!t&&tr&&tr.sig===n){let s=r=>r.map(([o,...a])=>[o,a]);this.rKeys=Object.fromEntries(Object.entries(tr.r).map(([r,o])=>[r,s(o)])),this.lKeys=s(tr.l),this.ik=tr.ik,this.ikSource="baked"}else{t||console.warn("\uD0C0\uC774\uD2C0 \uD314 IK: \uAD6C\uC6B4 \uD574(title_ik.js)\uAC00 \uC9C0\uAE08 \uD0A4\uC640 \uB2EC\uB77C \uC0C8\uB85C \uD489\uB2C8\uB2E4. node tools/title_ik.mjs\uB85C \uB2E4\uC2DC \uAD6C\uC6CC \uC8FC\uC138\uC694");let s=new Map,r=new Map,o={};this.rKeys=Object.fromEntries(Object.entries(e.right).map(([a,c])=>[a,this.densify(1,c,s,r,o,"R")])),this.lKeys=this.densify(0,e.left,new Map,new Map,o,"L"),this.ik=o,this.ikSource="fresh"}this.ikSigNow=n,this.poseBodyAt(0)}densify(t,e,n,s,r,o){let a=this.rig,c=g=>new R(...g),l=g=>e.find(y=>y[0]===g),h=g=>typeof g[2]=="string"?l(g[2])[2]:g[2],u=e.map((g,y)=>{let[m,p,_,x,v]=g;if(!n.has(m)){let S;if(typeof _=="string"){let E=n.get(_),T=n.get(e[y-1][0]);S=[...E],S[0]+=Pi*Math.round((T[0]-S[0])/Pi),S[2]+=Pi*Math.round((T[2]-S[2])/Pi),Object.assign(S,{err:E.err,pen:E.pen,prior:E.prior,elbow:E.elbow,sh:E.sh,hand:E.hand,target:E.target,fixed:!0})}else{this.poseBodyAt(p);let E=v?{pole:c(v),poleW:rd}:{};x||(S=_a(a,t,c(_),n.get(e[y-1][0]),{...E,multi:!1,step:.25})),(x||S.err>.03||S.pen>1e-4)&&(S=_a(a,t,c(_),x??n.get(e[y-1][0]),E))}n.set(m,S),r[`${o}.${m}`]={err:S.err,pen:S.pen,prior:S.prior}}return[p,n.get(m)]}),f=e.map(g=>[g[1],h(g)]),d=[];for(let g=0;g<u.length-1;g++){d.push(u[g]);let[y,m]=u[g],[p,_]=u[g+1];if(m===_)continue;let x=e.slice(Math.max(0,g-1),g+3).map(v=>v[0]).join(">");if(!s.has(x)){let v=Math.max(...m.map((V,W)=>Math.abs(_[W]-V))),S=Math.max(Math.ceil((p-y)/sd-1e-6),Math.ceil(v/.2),Math.ceil(m.elbow.distanceTo(_.elbow)/.08)),E=[],T={err:0,pen:0,prior:0,step:0},I=(V,W)=>Math.max(...V.map((L,O)=>Math.abs(W[O]-L))),M=m,b=cd(m.sh,m.hand,m.elbow),N=new Ke().setFromUnitVectors(b,cd(_.sh,_.hand,_.elbow));for(let V=1;V<S;V++){let W=V/S,L=y+(p-y)*W;this.poseBodyAt(L);let O=c(Cn(f,L)),z=_a(a,t,O,M,{multi:!1,step:.12,pole:Uy(a.arms[t],O,b,N,W),poleW:Xl});for(let F of["err","pen","prior"])T[F]=Math.max(T[F],z[F]);T.step=Math.max(T.step,I(M,z)),E.push([L,z]),M=z}T.step=Math.max(T.step,I(M,_)),s.set(x,E),r[`${o}.${e[g][0]}\u2192${e[g+1][0]}`]=T}d.push(...s.get(x).map(([v,S])=>[v,S]))}return d.push(u.at(-1)),this.relax(t,d),d}relax(t,e){let n=this.rig,s=new Map;for(let[,r]of e)s.set(r,(s.get(r)||0)+1);for(let r=0;r<od;r++)for(let o=1;o<e.length-1;o++){let[a,c]=e[o-1],[l,h]=e[o],[u,f]=e[o+1];if(s.get(h)>1||h.fixed)continue;this.poseBodyAt(l);let d=_a(n,t,h.target,h,{multi:!1,step:.06,pole:c.elbow.clone().lerp(f.elbow,(l-a)/(u-a)),poleW:Xl*.5,polish:!1});e[o][1]=d,s.set(d,1)}}orientHands(t){let e=zl;this.rig.root.updateMatrixWorld(!0);let n=[Cn([[0,0],[1.05,0],[1.24,1],[2.3,1],[2.5,0],[4.42,0],[4.6,1],[5.62,1],[5.82,0],[e,0]],t),Cn([[0,0],[1.25,0],[1.44,1],[2.04,1],[2.22,0],[e,0]],t)],s=this._oh||(this._oh={p:new R,q:new Ke,s:new R,m:new ue,inv:new ue,k:new R(is,is,is)});this.rig.arms.forEach((r,o)=>{let a=r.hand.wrist,c=r.elbow.matrixWorld;c.decompose(s.p,s.q,s.s),s.p.copy(a.position).applyMatrix4(c),s.q.slerp(this.gripQ[o],n[o]),s.m.compose(s.p,s.q,s.k),a.matrix.copy(s.inv.copy(c).invert()).multiply(s.m),a.matrixAutoUpdate=!1,a.updateMatrixWorld(!0)})}spawnPuffs(t){this.puffGeo||(this.puffGeo=new un(.05,0));for(let e=0;e<7;e++){let n=e/7*Math.PI*2+Math.random()*.4,s=new Bt(this.puffGeo,new ge({color:15260872,transparent:!0,opacity:.7,depthWrite:!1}));s.position.set(t.x,qn+.03,t.z),this.scene.add(s),this.puffs.push({m:s,v:new R(Math.cos(n)*.9,.35+Math.random()*.3,Math.sin(n)*.9),s0:.8+Math.random()*.5,age:0,life:.45+Math.random()*.15})}}spawnVictim(t){this.victim&&this.scene.remove(this.victim);let e=id[t%4];this.victim=Jf(e,this.black),this.victim.position.copy(this.stealSq),e==="n"&&(this.victim.rotation.y=Math.PI/2),this.scene.add(this.victim),this.victim.userData.h=Sy[e],this.victim.userData.type=e}update(t){if(this.paused)return;this.t+=t;let e=zl,n=Math.floor(this.t/e),s=this.t-n*e;n!==this.loop&&(this.loop=n,this.prevHand=null,this.landed=!1,this.vGrip=null,this.preSpawned!==n&&this.spawnVictim(n)),s>=e-xa&&this.preSpawned!==n+1&&(this.spawnVictim(n+1),this.preSpawned=n+1);let r=this.victim.userData.type,o=Cn(this.rKeys[r],s),a=Cn(this.lKeys,s),c=Qf[r],l=Qf.q,h=Cn([[0,[.4,.3]],[1.2,[.3,.4]],[1.48,[.05,.95]],[1.62,[.1,.9]],[1.7,[c,.1]],[2.4,[c,.1]],[2.47,[0,1]],[2.9,[.1,.8]],[3.5,[.4,.3]],[e,[.4,.3]]],s),u=Cn([[0,[.4,.3]],[1.15,[.1,.8]],[1.3,[l,.1]],[2.12,[l,.1]],[2.3,[.15,.7]],[2.75,[.4,.3]],[4.55,[.1,.8]],[4.7,[l,.1]],[5.5,[l,.1]],[5.66,[.15,.7]],[5.95,[.4,.3]],[e,[.4,.3]]],s),f=Cn(Vl,s),d={...this.base},g=s>3.1&&s<4.3?Math.sin(Math.PI*(s-3.1)/1.2):0;d.rx=f[0],d.ry=f[1],d.rz=f[2]+.07*g*Math.sin(this.t*2*Math.PI*(118/60)),d.y=f[3]+.02*g*Math.abs(Math.sin(this.t*Math.PI*(118/60)));let y=F=>Math.min(.05,Math.max(-2.6,F));d.arms=[{sx:a[0],sy:a[1],sz:a[2],ex:y(a[3]),ez:0,hc:u[0],hi:u[0]*.8,hs:u[1]},{sx:o[0],sy:o[1],sz:o[2],ex:y(o[3]),ez:0,hc:h[0],hi:h[0],hs:h[1]}],kr(this.rig,d);let m=f[4];this.rig.doll.scale.set(1/Math.sqrt(m),m,1/Math.sqrt(m));let p=this.crownSpring,_=d.rz*2+d.ry*.6;p.v+=(_-p.prev)/Math.max(t,.001)*-.04*Math.min(1,t*60),p.prev=_,p.v+=(-90*p.x-9*p.v)*t,p.x+=p.v*t,p.x=Math.max(-.35,Math.min(.35,p.x)),this.rig.crown.rotation.z+=p.x,this.rig.crown.rotation.x+=p.x*.4;let x=Cn([[0,[0,.04]],[.45,[0,.04]],[.62,[0,-.025]],[.85,[.01,0]],[1.2,[.01,0]],[1.35,[-.045,-.01]],[1.9,[-.045,-.01]],[2.05,[0,0]],[2.36,[.035,.02]],[2.7,[.01,0]],[e,[0,.04]]],s),v=Cn([[0,[.8,.8]],[.55,[.8,.8]],[.62,[1.15,1.15]],[.77,[1,1]],[.95,[.5,.5]],[1.15,[.5,.5]],[1.32,[.8,.8]],[3.15,[.8,.8]],[3.25,[.08,.85]],[3.55,[.08,.85]],[3.65,[.8,.8]],[5,[.8,.8]],[5.05,[.08,.08]],[5.12,[.8,.8]],[e,[.8,.8]]],s),S=Cn([[0,0],[.57,0],[.63,1],[.9,0],[e,0]],s);this.rig.eyes.forEach((F,B)=>{F.position.x=(B?.13:-.13)+x[0],F.position.y=1.18+x[1],F.scale.y=Math.max(.06,v[B])}),this.rig.brows.forEach(F=>{let B=F.userData.s>0;F.rotation.z=(B?.42:-.15)*(1-S)-.2*F.userData.s*S,F.position.y=(B?1.29:1.25)+.05*S+(B?.02*g:0)}),this.orientHands(s),this.rig.root.updateMatrixWorld(!0);let E=F=>this.rig.arms[F].hand.grip.getWorldPosition(new R),T=E(0),I=s>=1.3&&s<2.14||s>=4.7&&s<5.52,M=this.queen.position;if(I&&!this.qGrip&&(this.qGrip=M.clone().sub(T)),I)M.copy(T).add(this.qGrip),M.y=Math.max(qn,M.y),this.qDrop=null;else if(this.qGrip&&(this.qGrip=null,this.qDrop={from:M.clone(),to:(s<4?this.queenB:this.queenA).clone(),k:0}),this.qDrop){let F=this.qDrop;F.k=Math.min(1,F.k+t/.12),M.copy(F.from).lerp(F.to,Zf(F.k)),F.k>=1&&(this.qDrop=null)}let b=this.victim,N=E(1),V=this.rig.arms[1].hand.grip;b.visible=!0;let W=s<$l?s+xa:s>=e-xa?s-(e-xa):-1;if(W>=0){let F=W/hd;b.position.set(this.stealSq.x,qn+ld-.5*Yl*W*W,this.stealSq.z),b.rotation.set(.6*(1-F),(b.userData.type==="n"?Math.PI/2:0)+2.5*(1-F),0),b.scale.set(Gn*.94,Gn*1.08,Gn*.94),this.vGrip=null,this.flight=null}else if(s<1.64){this.landed||(this.landed=!0,this.spawnPuffs(this.stealSq));let F=s-$l,B=Math.exp(-F*9)*Math.cos(F*30);b.position.set(this.stealSq.x,qn+Math.max(0,.08*Math.sin(F*12)*Math.exp(-F*8)),this.stealSq.z),b.rotation.set(0,b.userData.type==="n"?Math.PI/2:0,0),b.scale.set(Gn*(1+.25*B),Gn*(1-.32*B),Gn*(1+.25*B))}else if(s<2.44){V.matrixWorld.decompose(this._pp||(this._pp=new R),this._pq||(this._pq=new Ke),this._ps||(this._ps=new R));let F=(this._up||(this._up=new R)).set(0,Wl[b.userData.type]*Gn,0);if(!this.vGrip){b.scale.setScalar(Gn);let X=this._pq.clone().invert(),J=b.position.clone().add(F);this.vGrip={off:J.sub(this._pp).applyQuaternion(X),q:X.multiply(b.quaternion.clone()),q0:b.quaternion.clone(),qh:new Ke}}let B=this.vGrip;this.vPrev=b.position.clone(),B.qh.copy(this._pq).multiply(B.q),b.quaternion.slerpQuaternions(B.q0,B.qh,Zf((s-2.02)/.22)),b.position.copy(B.off).applyQuaternion(this._pq).add(this._pp).sub(F.applyQuaternion(b.quaternion)),b.position.y=Math.max(b.position.y,qn),this.flight=null}else{if(!this.flight){let B=this.vPrev?b.position.clone().sub(this.vPrev).divideScalar(Math.max(t,.008333333333333333)):new R(.6,3,-3);B.y=Math.max(B.y,3.2),B.z=Math.min(B.z,-2.2),B.x=Math.min(1.8,Math.max(.5,B.x+.6)),B.length()>10&&B.setLength(10),this.flight={v:B,w:new R(10,4,7),age:0},this.ghostT=0}let F=this.flight;if(F.age+=t,F.v.y-=Yl*t,b.position.addScaledVector(F.v,t),b.rotation.x+=F.w.x*t,b.rotation.y+=F.w.y*t,b.rotation.z+=F.w.z*t,b.visible=b.position.y>-.5&&F.age<2.4,this.ghostT+=t,b.visible&&this.ghostT>.04&&F.age<.9){this.ghostT=0;let B=b.clone();B.traverse(X=>{X.isMesh&&(X.material=new ge({color:9418968,transparent:!0,opacity:.35,depthWrite:!1}))}),this.scene.add(B),this.ghosts.push({g:B,age:0})}}this.prevHand=N;for(let F=this.ghosts.length-1;F>=0;F--){let B=this.ghosts[F];B.age+=t;let X=1-B.age/.35;B.g.traverse(J=>{J.isMesh&&(J.material.opacity=.35*Math.max(0,X))}),X<=0&&(this.scene.remove(B.g),B.g.traverse(J=>J.isMesh&&J.material.dispose()),this.ghosts.splice(F,1))}for(let F=this.puffs.length-1;F>=0;F--){let B=this.puffs[F];B.age+=t;let X=B.age/B.life;B.m.position.addScaledVector(B.v,t),B.v.multiplyScalar(Math.exp(-t*5)),B.m.scale.setScalar(B.s0*(1+X*1.6)),B.m.material.opacity=.7*(1-X),X>=1&&(this.scene.remove(B.m),B.m.material.dispose(),this.puffs.splice(F,1))}let L=this.t*(118/60),O=Math.floor(L),z=Math.pow(1-(L-O),2);for(let{m:F,ix:B,iz:X}of this.tiles){let J=(B+X*2+O)%3===0,j=((O*.13+B*.17+X*.29)%1+1)%1;F.material.color.setHSL(j,J?.8:.4,J?.1+.08*z:.035)}this.beams.forEach((F,B)=>{F.pivot.rotation.z=Math.sin(this.t*.9+B*2.4)*.35,F.mat.opacity=F.op*(.7+.3*z)}),this.spot.mat.opacity=this.spot.op*(.92+.08*Math.sin(this.t*2)),this.text3d&&this.text3d.userData.title.userData.glyphs.forEach((F,B,X)=>{let J=((L-B*.25)%X.length+X.length)%X.length,j=J<1?Math.sin(Math.PI*J):0;F.position.y=.06*j,F.rotation.z=.06*j*(B%2?1:-1)})}setFont(t,e){if(this.text3d&&(this.camera.remove(this.text3d),this.text3d.traverse(f=>f.isMesh&&f.geometry.dispose()),this.text3d=null),this.fontId=e?t:null,!e)return;let n=Ri(15222874,{shininess:60,specular:9465968,emissive:5247e3}),s=Ri(Kf,{shininess:90,specular:16773312,emissive:2759172}),r=Ri(15976266,{shininess:90,specular:16773312}),o=$f(7227924),a=new se,c=ad(e,"\uBBFF\uC74C\uC758 \uCCB4\uC2A4",.36,{depth:.16,front:n,side:s}),l=Math.min(1,1.42/c.userData.w);c.scale.setScalar(l),c.position.y=1.1-.15*(1-l);let h=ad(e,"FAITH CHESS",.09,{depth:.045,front:r,side:o});h.scale.setScalar(Math.min(1,.78/h.userData.w)),h.position.y=.8,a.add(c,h),a.position.set(0,0,-5),a.rotation.x=.32,a.userData={title:c,sub:h};let u=new nn(16774376,1.1);u.position.set(-1.2,2.2,2.5),u.target=c,a.add(u),this.camera.add(a),this.text3d=a}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,c=Math.round(e.y*r),l=Math.round((e.y+e.h)*r)-c,h=n.h-c-l,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,l),t.setScissor(o,h,a,l),t.setClearColor(this.scene.background,1),t.clear(!0,!0,!1),this.camera.aspect=a/l,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var Mt=270,pn=480;function Pn(i){return{x:(i&7)-3.5,z:3.5-(i>>3)}}var fd=i=>7.5/Math.tan(i*Math.PI/360),dd={flat:{fov:14,pos:[0,fd(14),.0625],target:[0,0,.0625],up:[0,0,-1]},persp:{fov:46,pos:[0,fd(46),.0625],target:[0,0,.0625],up:[0,0,-1]},tilt:{fov:30,pos:[0,26.3,8.55],target:[0,0,.35],up:[0,1,0]}},pd=i=>i*i*(3-2*i);function Ny(i=.07,t=.05){let e=[],n=[],s=(o,a,c,l)=>{for(let h of[o,a,c,o,c,l])e.push(...h),n.push((h[0]+4)/8,(4-h[2])/8)};for(let o=0;o<8;o++)for(let a=0;a<8;a++){let c=a-4,l=a-3,h=3-o,u=4-o,f=c+i,d=l-i,g=h+i,y=u-i,m=-t;s([f,0,g],[f,0,y],[d,0,y],[d,0,g]),s([c,m,h],[f,0,g],[d,0,g],[l,m,h]),s([l,m,h],[d,0,g],[d,0,y],[l,m,u]),s([l,m,u],[d,0,y],[f,0,y],[c,m,u]),s([c,m,u],[f,0,y],[f,0,g],[c,m,h])}let r=new le;return r.setAttribute("position",new Ct(e,3)),r.setAttribute("uv",new Ct(n,2)),r.computeVertexNormals(),r}var va=class{constructor(t){this.canvas=t,this.renderer=new Hs({canvas:t,antialias:!1,powerPreference:"low-power",alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(Mt,pn,!1),this.renderer.toneMapping=Fn,this.scene=new kn,this.camera=new Le(44,Mt/pn,.5,200),this.bank=new ca,this.pieces=new Map,this.highlights=[],this.anims=[],this.pendingRemoval=[],this.bursts=[],this.shards=[],this.flights=[],this.ghosts=[],this.puffs=[],this.hitStop=0,this.shake=null,this.revives=[],this.pendingRevive=new Map,this.clocks=[],this.kingStage=new ma,this.kingView=null,this.overlayCanvas=document.createElement("canvas"),this.overlayCanvas.width=Mt,this.overlayCanvas.height=pn,this.overlayCanvas.skip=!0,this.overlayRenderer=null,this.titleStage=null,this.titleView=!1,this.phoneStage=null,this.phoneView=null,this.rewinding=null,this.mode="title",this.side=1,this.selectedId=null,this.time=0,this.raycaster=new qs,this.ready=!1,this.lerpCam=null,this.zoomFx=null,this.flash=0,this.lastMoveKey=null,this.theme={...Ks},this.camOverride=null}async init(t=[]){await this.bank.loadOverrides(t),this.ambient=new Si(16777215,1),this.key=new nn(16777215,1.6),this.placeKeyLight(),this.fill=new Or(16777215,10,22,2),this.fill.position.set(-7,3,-5),this.fill2=new Or(16777215,10,22,2),this.fill2.position.set(7,2.5,6),this.scene.add(this.ambient,this.key,this.fill,this.fill2),this.table=new Bt(new $n(40,40),new ge),this.table.rotation.x=-Math.PI/2,this.table.position.y=-.62,this.rim=new Bt(new ie(8.4,.22,8.4),new cn({flatShading:!0,specular:4473924,shininess:30})),this.rim.position.y=-.17,this.board=new Bt(Ny(),new cn({depthWrite:!1,flatShading:!0})),this.board.renderOrder=2,this.under=new Bt(new $n(8,8),new ge({color:393994})),this.under.rotation.x=-Math.PI/2,this.under.position.y=-.4,this.scene.add(this.table,this.rim,this.board,this.under),this.hlPool=[];let e=new $n(.94,.94);for(let n=0;n<28;n++){let s=new Bt(e,new ge({color:16777215,transparent:!0,opacity:.45,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.012,s.visible=!1,s.renderOrder=3,this.scene.add(s),this.hlPool.push(s)}this.burstGeo=new Ko(.3,.46,8),this.ready=!0,this.applyTheme(this.theme,!0)}applyTheme(t,e=!1){let n=this.theme;if(this.theme={...t},!this.ready)return;let s=this.theme,r=this.bank;this.applyRenderSize();let o=If[s.backdrop];this.scene.background=new wt(o.bg),this.scene.fog=new zs(o.bg,o.fog[0],o.fog[1]),this.fogSpan=o.fog[1]-o.fog[0],this.ambient.color.set(o.ambient[0]),this.ambient.intensity=o.ambient[1]*.55,this.key.color.set(o.key[0]),this.key.intensity=o.key[1]*1.35,this.fill.color.set(o.fill[0]),this.fill.intensity=o.fill[1],this.fill2.color.set(o.fill2[0]),this.fill2.intensity=o.fill2[1];let a=r.table(s.backdrop);a.repeat.set(10,10),this.table.material.map=a,this.table.material.needsUpdate=!0;let c=r.envMap(),l=r.rim(s.board);l.repeat.set(2,2),Object.assign(this.rim.material,{map:l,envMap:s.board==="glass"||s.board==="tile"?c:null,combine:Fr,reflectivity:.25}),this.rim.material.needsUpdate=!0;let h=s.board==="glass";if(Object.assign(this.board.material,{map:r.board(s.board),transparent:h,opacity:h?.62:1,depthWrite:!h,specular:new wt(h?9075350:s.board==="marble"?5592405:1118481),shininess:h?18:30}),this.board.material.needsUpdate=!0,this.iconCache=new Map,e||n.pieces!==s.pieces||!this.mats){this.mats=Uf(s.pieces,r);let u=[...this.pieces.entries()].map(([f,d])=>({id:f,sq:d.sq,type:d.type,color:d.color,shield:d.shield}));this.clearPieces(),this.sync(u,null)}}sync(t,e){let n=e?e.from+"-"+e.to+"-"+t.length:null,s=!!e&&n!==this.lastMoveKey;this.lastMoveKey=n;let r=new Set,o=!!this.rewinding&&this.time-this.rewinding.t0<3;this.rewinding=null;for(let a of t){r.add(a.id);let c=this.pieces.get(a.id);if(c&&(c.type!==a.type||c.color!==a.color)&&(this.removeEntry(c),this.pieces.delete(a.id),c=null),!c){let l=Ll(a.type,a.color,this.mats),h=Pn(a.sq);l.position.set(h.x,0,h.z),l.rotation.y=this.side===1?0:Math.PI,this.scene.add(l),c={group:l,type:a.type,color:a.color,sq:a.sq,shield:!1,ring:null},this.pieces.set(a.id,c),o&&(c.pop={t:0});let u=this.pendingRevive.get(a.sq);u!=null&&(this.pendingRevive.delete(a.sq),this.time-u<2&&this.startRevive(c))}if(c.sq!==a.sq){let l=Pn(c.sq),h=Pn(a.sq),u=s&&e.from===c.sq&&e.to===a.sq,f=s&&c.type==="r"&&c.sq>>3===e.from>>3&&Math.abs((e.to&7)-(e.from&7))===2;o?this.anims.push({group:c.group,from:l,to:h,t:0,dur:.6,hop:!1}):u||f?this.anims.push({group:c.group,from:l,to:h,t:0,dur:.2,hop:u&&c.type==="n"}):c.group.position.set(h.x,0,h.z),c.sq=a.sq}a.shield&&!c.ring&&(c.ring=Nf(),c.group.add(c.ring)),!a.shield&&c.ring&&(c.group.remove(c.ring),c.ring=null),c.shield=a.shield}for(let[a,c]of this.pieces){if(r.has(a))continue;this.pieces.delete(a);let l=s&&c.type==="p"&&c.sq===(e.from&-8|e.to&7);if(s&&(c.sq===e.to||l)){let h=Pn(e.from),u=Pn(e.to),f=new R(u.x-h.x,0,u.z-h.z);f.lengthSq()<1e-6&&f.set(0,0,-1),this.pendingRemoval.push({e:c,t:.17,dir:f.normalize()})}else this.removeEntry(c)}}removeEntry(t){this.scene.remove(t.group)}clearPieces(){for(let t of this.pieces.values())this.removeEntry(t);for(let t of this.pendingRemoval)this.removeEntry(t.e);for(let t of this.shards)this.scene.remove(t.mesh),t.mesh.geometry.dispose();this.shards.length=0;for(let t of this.flights)this.scene.remove(t.e.group);for(let t of this.ghosts)this.disposeGhost(t);for(let t of this.puffs)this.scene.remove(t.mesh),t.mesh.material.dispose();this.flights.length=0,this.ghosts.length=0,this.puffs.length=0,this.shake=null,this.hitStop=0,this.pieces.clear(),this.anims.length=0,this.pendingRemoval.length=0;for(let t of this.revives)for(let e of t.shards)this.scene.remove(e.mesh),e.mesh.geometry.dispose();for(let t of this.clocks)this.scene.remove(t.group);this.clocks.length=0,this.revives.length=0,this.pendingRevive.clear(),this.lastMoveKey=null}setHighlights(t){this.highlights=t}setSelected(t){this.selectedId=t}attackZoom(t){let e=Ul[this.theme.zoom]||Ul.normal;this.zoomFx={t:0,sq:t,preset:e}}setSide(t){if(this.side!==t){this.side=t;for(let e of this.pieces.values())e.group.rotation.y=t===1?0:Math.PI;this.placeKeyLight()}}placeKeyLight(){this.key&&this.key.position.set(-5*this.side,9,-4*this.side)}setNativeSize(t,e){this.nativeSize={w:Math.max(1,Math.round(t)),h:Math.max(1,Math.round(e))},this.ready&&this.applyRenderSize()}renderSize(t=this.theme){let e=Ff[t.pixel];return e==null?this.nativeSize||{w:Mt*2,h:pn*2}:{w:Math.round(Mt*e),h:Math.round(pn*e)}}applyRenderSize(){let{w:t,h:e}=this.renderSize();this.renderer.setSize(t,e,!1)}basePose(){if(this.camOverride)return{up:new R(0,1,0),...this.camOverride};let t=dd[this.theme.camera]||dd.flat,e=this.side;return{pos:new R(t.pos[0]*e,t.pos[1],t.pos[2]*e),target:new R(t.target[0]*e,t.target[1],t.target[2]*e),up:new R(t.up[0]*e,t.up[1],t.up[2]*e),fov:t.fov}}setMode(t){this.mode==="title"&&t==="game"&&(this.lerpCam={t:0,from:this.camera.position.clone(),fromTarget:this.curTarget?this.curTarget.clone():new R,fromFov:this.camera.fov,fromUp:this.camera.up.clone()}),this.mode=t}pickSquare(t,e){let n=new tt(t/Mt*2-1,-(e/pn)*2+1);this.raycaster.setFromCamera(n,this.camera);let s=this.raycaster.intersectObject(this.board,!1);if(!s.length)return-1;let{x:r,z:o}=s[0].point,a=Math.floor(r+4),c=Math.floor(4-o);return a<0||a>7||c<0||c>7?-1:c*8+a}squareToScreen(t){let e=Pn(t),n=new R(e.x,.1,e.z).project(this.camera);return{x:(n.x+1)/2*Mt,y:(1-n.y)/2*pn}}update(t){this.time+=t;let e=this.time,n=this.camera,s,r,o,a;if(this.mode==="title"){let l=e*.12;s=new R(Math.sin(l)*9.5,10.5+Math.sin(e*.3)*.4,Math.cos(l)*9.5),r=new R(0,.6,0),o=46,a=new R(0,1,0)}else{let l=this.basePose();if(s=l.pos.clone(),r=l.target.clone(),o=l.fov,a=l.up.clone(),this.lerpCam){this.lerpCam.t=Math.min(1,this.lerpCam.t+t/.9);let h=1-Math.pow(1-this.lerpCam.t,3);s.lerpVectors(this.lerpCam.from,s,h),r.lerpVectors(this.lerpCam.fromTarget,r,h),a.lerpVectors(this.lerpCam.fromUp,a,h).normalize(),o=this.lerpCam.fromFov+(o-this.lerpCam.fromFov)*h,this.lerpCam.t>=1&&(this.lerpCam=null)}if(this.zoomFx){let h=this.zoomFx,u=h.preset;h.t+=t;let f=.2,d=.5,g=u.dur,y=h.t<f?1-Math.pow(1-h.t/f,2):h.t<d?1:h.t<g?1-pd((h.t-d)/(g-d)):0,m=Pn(h.sq),p=new R(m.x,.3,m.z),_=p.clone().sub(s);if(s.addScaledVector(_,u.s*y),r.lerp(p,.85*y),u.shake&&h.t>.16&&h.t<.42){let x=u.shake*(1-(h.t-.16)/.26);s.x+=(Math.random()*2-1)*x,s.y+=(Math.random()*2-1)*x}u.flash&&h.t>.16&&!h.flashed&&(this.flash=u.flash,h.flashed=!0),h.t>=g&&(this.zoomFx=null)}if(this.shake){let h=this.shake;h.t+=t;let u=h.amp*Math.max(0,1-h.t/.32);s.x+=(Math.random()*2-1)*u,s.z+=(Math.random()*2-1)*u,r.x+=(Math.random()*2-1)*u*.5,h.t>=.32&&(this.shake=null)}}if(n.up.copy(a),n.position.copy(s),n.lookAt(r),this.curTarget=r,this.scene.fog){let l=s.distanceTo(r);this.scene.fog.near=l+3,this.scene.fog.far=l+3+(this.fogSpan||14)}n.fov!==o&&(n.fov=o,n.updateProjectionMatrix()),this.flash=Math.max(0,this.flash-t*3.2);let c=this.hitStop>0?0:t;this.hitStop=Math.max(0,this.hitStop-t);for(let l=this.anims.length-1;l>=0;l--){let h=this.anims[l];h.t=Math.min(1,h.t+c/h.dur);let u=pd(h.t),f=Math.sin(u*Math.PI)*(h.hop?.3:.12);h.group.position.set(h.from.x+(h.to.x-h.from.x)*u,f,h.from.z+(h.to.z-h.from.z)*u),h.group.scale.setScalar(1+f),h.group.userData.shadow.position.set(.06+f*.5,.004-f,.07+f*.5),h.t>=1&&(h.group.scale.setScalar(1),this.anims.splice(l,1))}for(let l=this.pendingRemoval.length-1;l>=0;l--){let h=this.pendingRemoval[l];h.t-=t,h.t<=0&&(this.pendingRemoval.splice(l,1),h.dir?this.launch(h.e,h.dir):(this.removeEntry(h.e),this.spawnBurst(h.e.sq)))}this.updateFlights(c,t);for(let l=this.shards.length-1;l>=0;l--){let h=this.shards[l];h.t+=t,h.v.y-=11*t,h.mesh.position.addScaledVector(h.v,t),h.mesh.position.y<.03&&(h.mesh.position.y=.03,h.v.y*=-.35,h.v.x*=.6,h.v.z*=.6,h.w.multiplyScalar(.6)),h.mesh.rotation.x+=h.w.x*t,h.mesh.rotation.y+=h.w.y*t,h.mesh.rotation.z+=h.w.z*t;let u=Math.max(0,Math.min(1,(h.life-h.t)/.35));h.mesh.scale.setScalar(u),h.t>=h.life&&(this.scene.remove(h.mesh),h.mesh.geometry.dispose(),this.shards.splice(l,1))}this.updateClocks(t);for(let l=this.revives.length-1;l>=0;l--){let h=this.revives[l];h.t+=t;let u=Math.round((1-Math.min(1,h.t/h.dur))*(h.N-1));for(let f of h.shards){let d=u*7,g=f.track;f.mesh.position.set(g[d],g[d+1],g[d+2]),f.mesh.rotation.set(g[d+3],g[d+4],g[d+5]),f.mesh.scale.setScalar(Math.max(.001,g[d+6]))}if(h.t>=h.dur){for(let g of h.shards)this.scene.remove(g.mesh),g.mesh.geometry.dispose();let{body:f,shadow:d}=h.e.group.userData;f.visible=!0,d.visible=!0,h.e.reviving=!1,h.e.pop={t:0},this.spawnBurst(h.e.sq,8382975),this.flash=Math.max(this.flash,.3),this.revives.splice(l,1)}}for(let l=this.bursts.length-1;l>=0;l--){let h=this.bursts[l];h.t+=t;let u=h.t/.35;h.mesh.scale.setScalar(1+u*1.4),h.mesh.material.opacity=Math.max(0,.9*(1-u)),u>=1&&(this.scene.remove(h.mesh),h.mesh.material.dispose(),this.bursts.splice(l,1))}for(let[l,h]of this.pieces){if(!this.anims.some(u=>u.group===h.group)){let u=l===this.selectedId?.14+Math.sin(e*6)*.03:0;h.group.position.y=u;let f=1+u;if(h.pop){h.pop.t+=t;let d=Math.min(1,h.pop.t/.35);f*=1+Math.sin(d*Math.PI)*.25,d>=1&&(h.pop=null)}h.group.scale.setScalar(f),h.group.userData.shadow.position.set(.06+u*.5,.004-u,.07+u*.5)}h.ring&&(h.ring.rotation.z=e*1.5,h.ring.material.color.setHSL(.52,1,.6+Math.sin(e*4)*.15))}for(let l=0;l<this.hlPool.length;l++){let h=this.hlPool[l],u=this.highlights[l];if(!u){h.visible=!1;continue}let f=Pn(u.sq);h.position.set(f.x,.012,f.z),h.material.color.set(u.color),h.material.opacity=u.opacity??.45,h.visible=!0}}shatter(t){let e=[...this.pieces.entries()].find(([,c])=>c.sq===t);if(!e)return;let[n,s]=e;this.pieces.delete(n),s.group.updateMatrixWorld(!0);let r=Pn(t),o=new R(r.x,.15,r.z),a=[new R,new R,new R];s.group.userData.body.traverse(c=>{if(!c.isMesh)return;let l=c.material.clone();l.side=We;let h=c.geometry.attributes.position;for(let u=0;u+2<h.count;u+=3){for(let m=0;m<3;m++)a[m].fromBufferAttribute(h,u+m).applyMatrix4(c.matrixWorld);let f=a[0].clone().add(a[1]).add(a[2]).divideScalar(3),d=new le;d.setAttribute("position",new Ct(a.flatMap(m=>[m.x-f.x,m.y-f.y,m.z-f.z]),3)),d.computeVertexNormals();let g=new Bt(d,l);g.position.copy(f),this.scene.add(g);let y=f.clone().sub(o);y.y=0,y.lengthSq()<1e-6&&y.set(Math.random()-.5,0,Math.random()-.5),y.normalize().multiplyScalar(1.6+Math.random()*2.4),this.shards.push({mesh:g,life:1.3+Math.random()*.4,t:0,v:new R(y.x,2.2+Math.random()*3.2,y.z),w:new R((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18)})}}),this.scene.remove(s.group),this.spawnBurst(t,16734794),this.flash=Math.max(this.flash,.35)}reviveAt(t){this.spawnClock(t);let e=[...this.pieces.values()].find(n=>n.sq===t);e?this.startRevive(e):this.pendingRevive.set(t,this.time)}rewind(){this.rewinding={t0:this.time},this.spawnClock(-1,{scale:2.1,life:1.6})}spawnClock(t,e={}){if(!this.clockProto){let s=new se,r=h=>new _n({color:h,flatShading:!0}),o=new cn({color:14264378,flatShading:!0,shininess:70,specular:9076848}),a=(h,u,f=0,d=0,g=0)=>{let y=new Bt(h,u);return y.position.set(f,d,g),s.add(y),y};a(new fe(.4,.4,.16,12).rotateX(Math.PI/2),r(13119546)),a(new fe(.32,.32,.02,12).rotateX(Math.PI/2),r(16774104),0,0,.085);for(let h=0;h<12;h++){let u=h/12*Math.PI*2,f=h%3===0;a(new ie(f?.04:.025,f?.07:.04,.01),r(1706512),Math.sin(u)*.26,Math.cos(u)*.26,.1).rotation.z=-u}for(let h of[-1,1])a(new jo(.14,8,4,0,Math.PI*2,0,Math.PI/2),o,h*.25,.36,0).rotation.z=-h*.55,a(new fe(.035,.05,.14,5),o,h*.24,-.42,0).rotation.z=h*.4;a(new ie(.06,.1,.06),o,0,.45,0);let c=new se;c.position.z=.11,s.add(c),c.add(new Bt(new ie(.035,.27,.015).translate(0,.12,0),r(11539486)));let l=new se;l.position.z=.115,s.add(l),l.add(new Bt(new ie(.05,.18,.015).translate(0,.08,0),r(1706512))),a(new fe(.035,.035,.03,6).rotateX(Math.PI/2),o,0,0,.12),this.clockIdx={minute:s.children.indexOf(c),hour:s.children.indexOf(l)},this.clockProto=s}let n=this.clockProto.clone();n.userData={minute:n.children[this.clockIdx.minute],hour:n.children[this.clockIdx.hour]},n.traverse(s=>{s.renderOrder=6}),this.scene.add(n),this.clocks.push({group:n,sq:t,t:0,life:e.life||1.35,size:e.scale||1})}updateClocks(t){if(!this.clocks.length)return;let e=this.camera,n=new R(1,0,0).applyQuaternion(e.quaternion),s=new R(0,1,0).applyQuaternion(e.quaternion),r=new R(0,0,1).applyQuaternion(e.quaternion);for(let o=this.clocks.length-1;o>=0;o--){let a=this.clocks[o];if(a.t+=t,a.sq<0)a.group.position.set(0,1.6,0).addScaledVector(r,1.5);else{let u=Pn(a.sq);a.group.position.set(u.x,.9,u.z).addScaledVector(n,.62).addScaledVector(s,.5).addScaledVector(r,.6)}a.group.quaternion.copy(e.quaternion);let c=a.t/.2,l=1.7,h=a.t<.2?1+(l+1)*Math.pow(c-1,3)+l*Math.pow(c-1,2):1;a.t>a.life-.25&&(h*=Math.max(0,(a.life-a.t)/.25)),a.group.scale.setScalar(Math.max(.001,h*.9*a.size)),a.group.rotateZ(.06*Math.sin(a.t*22)*Math.max(0,1-a.t)),a.group.userData.minute.rotation.z=a.t*13,a.group.userData.hour.rotation.z=.9+a.t*1.6,a.t>=a.life&&(this.scene.remove(a.group),this.clocks.splice(o,1))}}startRevive(t){if(t.reviving)return;t.reviving=!0,t.group.updateMatrixWorld(!0);let{body:e,shadow:n}=t.group.userData,s=Pn(t.sq),r=new R(s.x,.15,s.z),o=1.1,a=1/60,c=Math.round(o/a)+1,l=[],h=[new R,new R,new R];e.traverse(u=>{if(!u.isMesh)return;let f=u.material.clone();f.side=We;let d=u.geometry.attributes.position;for(let g=0;g+2<d.count;g+=3){for(let I=0;I<3;I++)h[I].fromBufferAttribute(d,g+I).applyMatrix4(u.matrixWorld);let y=h[0].clone().add(h[1]).add(h[2]).divideScalar(3),m=new le;m.setAttribute("position",new Ct(h.flatMap(I=>[I.x-y.x,I.y-y.y,I.z-y.z]),3)),m.computeVertexNormals();let p=new Bt(m,f),_=y.clone().sub(r);_.y=0,_.lengthSq()<1e-6&&_.set(Math.random()-.5,0,Math.random()-.5),_.normalize().multiplyScalar(1.6+Math.random()*2.4);let x=new R(_.x,2.2+Math.random()*3.2,_.z),v=new R((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18),S=y.clone(),E=new R,T=new Float32Array(c*7);for(let I=0;I<c;I++){let M=Math.max(0,Math.min(1,(o-I*a)/.3));T.set([S.x,S.y,S.z,E.x,E.y,E.z,M],I*7),x.y-=11*a,S.addScaledVector(x,a),S.y<.03&&(S.y=.03,x.y*=-.35,x.x*=.6,x.z*=.6,v.multiplyScalar(.6)),E.addScaledVector(v,a)}p.scale.setScalar(.001),this.scene.add(p),l.push({mesh:p,track:T})}}),e.visible=!1,n.visible=!1,this.revives.push({e:t,shards:l,t:0,dur:o,N:c})}pieceIcon(t,e,n=34){if(!this.ready)return null;let s=`${t}${e}${n}`;this.iconCache||(this.iconCache=new Map);let r=this.iconCache.get(s);if(r)return r;let o=n*2,a=this.renderer,c=new kn;c.add(this.ambient.clone(),this.fill.clone(),this.fill2.clone());let l=this.key.clone();l.position.set(-5,9,-4),c.add(l);let h=Ll(t,e,this.mats);h.userData.shadow.visible=!1,c.add(h);let u=new ks(-.52,.52,.52,-.52,.1,30);u.position.set(0,10,0),u.up.set(0,0,-1),u.lookAt(0,0,0);let f=new Bn(o,o);f.texture.colorSpace=me;let d=a.getRenderTarget(),g=a.getClearColor(new wt),y=a.getClearAlpha();a.setRenderTarget(f),a.setClearColor(0,0),a.clear(!0,!0,!1),a.render(c,u);let m=new Uint8Array(o*o*4);a.readRenderTargetPixels(f,0,0,o,o,m),a.setRenderTarget(d),a.setClearColor(g,y),f.dispose();let p=document.createElement("canvas");p.width=p.height=o;let _=p.getContext("2d"),x=_.createImageData(o,o);for(let S=0;S<o;S++)x.data.set(m.subarray((o-1-S)*o*4,(o-S)*o*4),S*o*4);_.putImageData(x,0,0),r=document.createElement("canvas"),r.width=r.height=n;let v=r.getContext("2d");return v.imageSmoothingEnabled=!0,v.imageSmoothingQuality="high",v.drawImage(p,0,0,n,n),this.iconCache.set(s,r),r}launch(t,e){let n=t.group;n.userData.shadow.visible=!1;let s=12+Math.random()*3,r=new R(-e.z,0,e.x).multiplyScalar((Math.random()-.5)*3),o=new R(e.x*s,9.5+Math.random()*2,e.z*s).add(r),a=new R(e.z,0,-e.x).normalize(),c=new R(0,1,0);this.flights.push({e:t,v:o,axis:a,twist:c,spin:20+Math.random()*10,twistSpin:(Math.random()-.5)*14,t:0,ghostT:0,bounced:!1}),this.spawnImpact(n.position.clone(),e),this.hitStop=.07,this.shake={t:0,amp:.16},this.flash=Math.max(this.flash,.3)}updateFlights(t,e){let n=new Ke;for(let s=this.flights.length-1;s>=0;s--){let r=this.flights[s],o=r.e.group;r.t+=t,r.v.y-=9*t,o.position.addScaledVector(r.v,t),n.setFromAxisAngle(r.axis,r.spin*t),o.quaternion.premultiply(n),n.setFromAxisAngle(r.twist,r.twistSpin*t),o.quaternion.premultiply(n),o.position.y<0&&r.v.y<0&&!r.bounced&&(o.position.y=0,r.v.y*=-.5,r.v.x*=.75,r.v.z*=.75,r.spin*=.6,r.bounced=!0,this.spawnDust(o.position.clone(),4)),r.ghostT+=t,r.ghostT>.03&&r.t<.55&&t>0&&(r.ghostT=0,this.spawnGhost(o,.45*(1-r.t/.55)));let a=Math.hypot(o.position.x,o.position.z);(r.t>1.6||a>14||o.position.y<-3)&&(this.scene.remove(o),this.flights.splice(s,1))}for(let s=this.ghosts.length-1;s>=0;s--){let r=this.ghosts[s];r.t+=e;let o=r.t/.22;r.mat.opacity=Math.max(0,r.a0*(1-o)),o>=1&&(this.disposeGhost(r),this.ghosts.splice(s,1))}for(let s=this.puffs.length-1;s>=0;s--){let r=this.puffs[s];r.t+=e;let o=r.t/r.life;r.v.multiplyScalar(Math.max(0,1-e*3)),r.mesh.position.addScaledVector(r.v,e),r.mesh.scale.setScalar(r.s0*(1+o*1.5)),r.mesh.material.opacity=Math.max(0,.75*(1-o)),o>=1&&(this.scene.remove(r.mesh),r.mesh.material.dispose(),this.puffs.splice(s,1))}}spawnGhost(t,e){let n=new ge({color:16774880,transparent:!0,opacity:e,depthWrite:!1}),s=t.userData.body.clone();s.traverse(o=>{o.isMesh&&(o.material=n)});let r=new se;r.position.copy(t.position),r.quaternion.copy(t.quaternion),r.scale.copy(t.scale),r.add(s),r.renderOrder=3,this.scene.add(r),this.ghosts.push({group:r,mat:n,t:0,a0:e})}disposeGhost(t){this.scene.remove(t.group),t.mat.dispose()}spawnImpact(t,e){this.spawnDust(t,7,e)}spawnDust(t,e,n=null){this.dustGeo||(this.dustGeo=new un(.13,0));for(let s=0;s<e;s++){let r=Math.random()*Math.PI*2,o=new R(Math.cos(r),0,Math.sin(r)).multiplyScalar(1.5+Math.random()*2);n&&o.addScaledVector(n,-1.2),o.y=.6+Math.random()*.8;let a=new Bt(this.dustGeo,new ge({color:14208960,transparent:!0,opacity:.75,depthWrite:!1}));a.position.set(t.x,.1,t.z);let c=.6+Math.random()*.6;a.scale.setScalar(c),a.renderOrder=4,this.scene.add(a),this.puffs.push({kind:"dust",mesh:a,v:o,s0:c,t:0,life:.45+Math.random()*.2})}}spawnBurst(t,e=16773824){let n=Pn(t),s=new Bt(this.burstGeo,new ge({color:e,transparent:!0,opacity:.9,depthWrite:!1,side:We}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.03,n.z),s.renderOrder=4,this.scene.add(s),this.bursts.push({mesh:s,t:0})}render(t){if(!this.ready)return;if(this.update(t),this.titleView){this.titleStage||(this.titleStage=new er),this.titleStage.update(t);let n=this.renderer.domElement;this.titleStage.render(this.renderer,{x:0,y:0,w:270,h:480},{w:n.width,h:n.height})}else this.renderer.render(this.scene,this.camera);let e=!1;if(this.kingView){this.kingStage.update(t,this.kingView.shown,this.kingView.mode);let n=this.renderer.domElement;this.kingStage.render(this.renderer,this.kingView.rect,{w:n.width,h:n.height}),this.kingStage.overlayOn&&(this.overlayRenderer||(this.overlayRenderer=new Hs({canvas:this.overlayCanvas,antialias:!1,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),this.overlayRenderer.setPixelRatio(1),this.overlayRenderer.toneMapping=Fn),(this.overlayCanvas.width!==n.width||this.overlayCanvas.height!==n.height)&&this.overlayRenderer.setSize(n.width,n.height,!1),e=this.kingStage.renderOverlay(this.overlayRenderer,this.kingView.rect,{w:n.width,h:n.height}))}if(this.overlayCanvas.skip=!e,this.phoneView&&this.phoneStage){this.phoneStage.update(t);let n=this.renderer.domElement;this.phoneStage.render(this.renderer,this.phoneView.rect,{w:n.width,h:n.height})}}};var At=270,Je=480,Ii={9:"10px Galmuri9",11:"12px Galmuri11","11b":"bold 12px Galmuri11",14:"15px Galmuri14"},jl={9:10,11:12,"11b":12,14:15},md=Object.values(Ii),ee={red:"#8e1a1a",redHi:"#d4382c",gold:"#e8b93a",cyan:"#7fe9ff",green:"#7ad17a",warn:"#ff6b6b",late:"#ff9f43"},Ma=class{constructor(t){this.c=t,this.ctx=t.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.buttons=[],this.pressedId=null,this.off=document.createElement("canvas"),this.offCtx=this.off.getContext("2d"),this.qrCache=new Map,this.setTheme({frame:"deco",lettering:"crown"})}setTheme(t){this.frameId=t.frame,this.letterId=t.lettering,this.pal=Br[t.frame]||Br.deco}begin(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,At,Je),this.ctx.imageSmoothingEnabled=!1,this.buttons=[]}rect(t,e,n,s,r){this.ctx.fillStyle=r,this.ctx.fillRect(t,e,n,s)}box(t,e,n,s,r){let o=this.ctx;o.fillStyle=r,o.fillRect(t,e,n,1),o.fillRect(t,e+s-1,n,1),o.fillRect(t,e,1,s),o.fillRect(t+n-1,e,1,s)}text(t,e,n,{font:s=11,color:r=this.pal.ink,align:o="left",shadow:a=!0,alpha:c=1}={}){let l=this.ctx;l.save(),l.globalAlpha=c,l.font=Ii[s]||Ii[11],l.textBaseline="top",l.textAlign="left";let h=o==="left"?0:l.measureText(t).width,u=Math.round(o==="center"?e-h/2:o==="right"?e-h:e),f=Math.round(n);a&&(l.fillStyle="#000",l.fillText(t,u+1,f+1)),l.fillStyle=r,l.fillText(t,u,f),l.restore()}measure(t,e=11){return this.ctx.font=Ii[e]||Ii[11],Math.ceil(this.ctx.measureText(t).width)}bigText(t,e,n,{scale:s=2,font:r=14,color:o=this.pal.ink,align:a="center",shadow:c=!0}={}){let l=this.measure(t,r)+4,h=jl[r]+4,u=this.prepOff(l,h),f=Math.round(a==="center"?e-l*s/2:a==="right"?e-l*s:e);return c&&(u.fillStyle="#000",u.font=Ii[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f+s,n+s,l*s,h*s),u.clearRect(0,0,l,h)),u.fillStyle=o,u.font=Ii[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f,n,l*s,h*s),{w:l*s,h:h*s}}prepOff(t,e){this.off.width=t,this.off.height=e;let n=this.offCtx;return n.imageSmoothingEnabled=!1,n.clearRect(0,0,t,e),n.textBaseline="top",n}letter(t,e,n,{scale:s=2,font:r=14,align:o="center",spacing:a=0}={}){let c=jl[r]+4,l=this.measure(t,r)+6+Math.max(0,t.length-1)*a,h=o==="center"?Math.round(e-l*s/2):o==="right"?e-l*s:e,u=[];{let S=3;for(let E of t){let T=this.measure(E,r);u.push([S,T]),S+=T+a}}let f=this.letterId,d=f==="crown"||f==="robe"||f==="velvet"||f==="disco",y=(S,E=0,T=0)=>{let I=this.prepOff(l,c);I.font=Ii[r],I.fillStyle="#fff";for(let[M,b]of d?[[0,0],[1,0],[0,1],[1,1]]:[[0,0]])a?u.forEach(([N],V)=>I.fillText([...t][V],N+M,1+b)):I.fillText(t,3+M,1+b);typeof S=="function"?(I.globalCompositeOperation="source-atop",S(I)):(I.globalCompositeOperation="source-in",I.fillStyle=S,I.fillRect(0,0,l,c)),I.globalCompositeOperation="source-over",this.ctx.drawImage(this.off,h+E*s,n+T*s,l*s,c*s)},m=S=>{let E=this.offCtx.createLinearGradient(0,0,0,c);return S.forEach(([T,I])=>E.addColorStop(T,I)),E},p=(S,E,T,I=7,M=null)=>b=>{b.fillStyle=S,b.fillRect(0,0,l,c);for(let N=-I;N<l+I;N+=I)b.fillStyle=E,b.beginPath(),b.moveTo(N,0),b.lineTo(N+I,0),b.lineTo(N+I*.35,c*.55),b.closePath(),b.fill(),b.fillStyle=T,b.beginPath(),b.moveTo(N+I,c),b.lineTo(N,c),b.lineTo(N+I*.65,c*.48),b.closePath(),b.fill();M&&M(b)},_=1/s,x=s>=3?3:s===2?2:1,v=(S,E)=>{for(let T=0;T<=x;T++)for(let I of[-1,1])y(S,I,T);y(S,0,-1),y(S,0,x+1),E.forEach((T,I)=>y(T,0,x-I))};if(f==="neon"){y("#2a0830",1,2);for(let[S,E]of[[-1,0],[1,0],[0,-1],[0,1]])y("#3fd8ff",S,E);y(m([[0,"#ffe0fa"],[.5,"#ff6ad8"],[1,"#c02aa8"]]))}else if(f==="chrome")y("#000",1,2),y("#2a2c34",1,1),y(m([[0,"#ffffff"],[.42,"#c8ccd8"],[.5,"#3a3e4c"],[.62,"#e8ecf4"],[1,"#7a7e8c"]]));else if(f==="crown")v("#08040c",["#1e0e2c","#3a1e52","#5a3a78"].slice(0,x)),y(p("#d6d8e6","#ffffff","#8e90a8",7,s>=2?S=>{S.fillStyle="#4fd0ff";for(let[E,T]of u)S.fillRect(E+Math.floor(T/2),Math.round(c*.45),2,2)}:null));else if(f==="robe"){v("#0c0408",["#3a0a12","#5a1220","#7a1a26"].slice(0,x));for(let[S,E]of[[-1,0],[1,0],[0,-1],[0,1]])y("#f8f4ea",S*_,E*_);y(p("#c8343f","#ec6a6e","#8a1e2c",7,S=>{S.fillStyle="#f2c14e",S.fillRect(0,Math.round(c*.6),l,1)}))}else if(f==="velvet"){v("#0a0408",["#5a3a10","#8a5e18","#b8862a"].slice(0,x));for(let[S,E]of[[-1,0],[1,0],[0,-1],[0,1]])y("#f3dc8a",S*_,E*_);y(p("#7a2a8a","#b25ac4","#4e1a5c"))}else if(f==="disco"){let S=Math.floor(performance.now()/508.47457627118644);v("#08040c",["#140820","#24103a","#36184e"].slice(0,x));for(let[E,T]of[[-1,0],[1,0],[0,-1],[0,1]])y("#ffffff",E*_,T*_);y(E=>u.map((T,I)=>[T,I]).reverse().forEach(([[T,I],M])=>{let b=((M+S)*47%360+360)%360,N=M?T:0,V=M===u.length-1?l:T+I+1;E.fillStyle=`hsl(${b},92%,56%)`,E.fillRect(N,0,V-N,c),E.fillStyle=`hsl(${b},100%,78%)`,E.fillRect(N,0,V-N,Math.round(c*.42))}))}else y("#000",1,2),y("#6e4a14",1,1),y(m([[0,"#fff6d0"],[.35,"#f3dc8a"],[.5,"#a87a2a"],[.62,"#f3dc8a"],[1,"#8a5e18"]]));return{w:l*s,h:c*s}}hLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,n,1),r.fillStyle=s.line,r.fillRect(t,e+1,n,1),r.fillStyle=s.lineLo,r.fillRect(t,e+2,n,1)}vLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,1,n),r.fillStyle=s.line,r.fillRect(t+1,e,1,n),r.fillStyle=s.lineLo,r.fillRect(t+2,e,1,n)}glow(t,e,n,s,r){let o=this.ctx;o.save(),o.globalAlpha=.25,this.box(t-1,e-1,n+2,s+2,r),o.globalAlpha=.12,this.box(t-2,e-2,n+4,s+4,r),o.restore(),this.box(t,e,n,s,r)}frame(){let t=this.pal,e=this.ctx,n=2,s=2,r=At-4,o=Je-4;if(this.frameId==="plain"){this.box(4,4,At-8,Je-8,t.line),e.fillStyle=t.lineHi;for(let[a,c]of[[4,4],[At-12,4],[4,Je-5],[At-12,Je-5]])e.fillRect(a,c,8,1);return}if(this.frameId==="neon"){this.glow(4,4,At-8,Je-8,t.accent),this.box(7,7,At-14,Je-14,t.lineLo);return}this.hLine(n,s,r),this.hLine(n,s+o-3,r),this.vLine(n,s,o),this.vLine(n+r-3,s,o),e.fillStyle=t.lineLo,e.fillRect(n+5,s+5,r-10,1),e.fillRect(n+5,s+o-6,r-10,1),e.fillRect(n+5,s+5,1,o-10),e.fillRect(n+r-6,s+5,1,o-10);for(let[a,c,l,h]of[[n,s,1,1],[n+r,s,-1,1],[n,s+o,1,-1],[n+r,s+o,-1,-1]])for(let u=0;u<3;u++){let f=a+l*(3+u*3)-(l<0?6:0),d=c+h*(3+u*3)-(h<0?6:0);e.fillStyle=t.line,e.fillRect(f,d,6,6),e.fillStyle=t.lineHi,e.fillRect(f,d,2,2)}}pillar(t,e,n){let s=this.pal,r=this.ctx;if(this.frameId==="plain"){this.rect(t+5,e,1,n-e,s.line);return}if(this.frameId==="neon"){this.rect(t+4,e,1,n-e,s.accent),this.rect(t+7,e+6,1,n-e-12,s.line);return}for(let o=0;o<3;o++)this.vLine(t+o*4,e+10,n-e-10);r.fillStyle=s.lineLo,r.fillRect(t-3,n-4,17,4),r.fillStyle=s.lineHi,r.fillRect(t-3,n-4,17,1),r.fillStyle=s.lineLo,r.fillRect(t-2,e+8,15,3),r.fillStyle=s.lineHi,r.fillRect(t-2,e+8,15,1),r.fillStyle=s.accentLo,r.beginPath(),r.arc(t+5.5,e+3.5,5,0,Math.PI*2),r.fill(),r.fillStyle=s.accent,r.beginPath(),r.arc(t+5,e+3,4,0,Math.PI*2),r.fill(),r.fillStyle=s.accentHi,r.fillRect(t+3,e+1,2,2)}panel(t,e,n,s,{fill:r=this.pal.panel,border:o=this.pal.ink,shadow:a=!0}={}){a&&this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),o&&this.box(t,e,n,s,o)}plaque(t,e,n,s,{fill:r=this.pal.panel}={}){let o=this.pal;if(this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),this.frameId==="plain"){this.box(t,e,n,s,o.line);return}if(this.frameId==="neon"){this.glow(t,e,n,s,o.accent),this.box(t+3,e+3,n-6,s-6,o.lineLo);return}this.hLine(t,e,n),this.hLine(t,e+s-3,n),this.vLine(t,e,s),this.vLine(t+n-3,e,s),this.box(t+4,e+4,n-8,s-8,o.accentLo)}button(t,e,n,s,r,o,{style:a="normal",disabled:c=!1,font:l=11,color:h}={}){let u=this.ctx,f=this.pal,d=this.pressedId===t&&!c,g=d?1:0,y=c?"#14121a":a==="danger"?ee.red:a==="primary"?f.btnPrimary:f.btn,m=c?f.lineLo:a==="danger"?ee.redHi:f.accent;this.panel(e+g,n+g,s,r,{fill:y,border:m,shadow:!d}),c||(this.frameId==="neon"?(u.save(),u.globalAlpha=.3,this.box(e+g-1,n+g-1,s+2,r+2,m),u.restore()):(u.fillStyle=a==="danger"?"#ff8a7a":f.accentHi,u.fillRect(e+g+1,n+g+1,s-2,1),u.fillRect(e+g+1,n+g+1,1,r-2),u.fillStyle=a==="danger"?"#4a0a0a":f.accentLo,u.fillRect(e+g+1,n+g+r-2,s-2,1),u.fillRect(e+g+s-2,n+g+1,1,r-2)));let p=jl[l];this.text(o,e+g+s/2,n+g+Math.floor((r-p)/2),{font:l,align:"center",color:h||(c?f.dim:f.ink)}),c||this.buttons.push({id:t,x:e,y:n,w:s,h:r})}hit(t,e){for(let n=this.buttons.length-1;n>=0;n--){let s=this.buttons[n];if(t>=s.x-2&&t<s.x+s.w+2&&e>=s.y-2&&e<s.y+s.h+2)return s.id}return null}bar(t,e,n,s,r,o,a="#000"){this.rect(t,e,n,s,a),this.rect(t+1,e+1,Math.round((n-2)*Math.max(0,Math.min(1,r))),s-2,o),this.box(t,e,n,s,this.pal.dim)}card(t,e,n){this.rect(t+1,e+1,7,10,"#000"),this.rect(t,e,7,10,n?ee.gold:"#2a2418"),n&&this.rect(t+1,e+1,2,2,"#fff3c4")}dim(t=.55){this.rect(0,0,At,Je,`rgba(0,0,0,${t})`)}vignette(){let t=this.ctx,e=t.createRadialGradient(At/2,Je/2,Je*.32,At/2,Je/2,Je*.75);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,0.55)"),t.fillStyle=e,t.fillRect(0,0,At,Je)}qr(t,e,n,s=2){if(!window.qrcode)return 0;let r=this.qrCache.get(t);if(!r)try{let a=window.qrcode(0,"L");a.addData(t),a.make();let c=a.getModuleCount();r={n:c,dark:[]};for(let l=0;l<c;l++)for(let h=0;h<c;h++)a.isDark(l,h)&&r.dark.push([l,h]);this.qrCache.set(t,r)}catch{return 0}let o=(r.n+2)*s;this.rect(e,n,o,o,"#fff"),this.ctx.fillStyle="#000";for(let[a,c]of r.dark)this.ctx.fillRect(e+(c+1)*s,n+(a+1)*s,s,s);return o}lines(t,e,n=9){let s=[],r="";for(let o of t)this.measure(r+o,n)>e&&r?(s.push(r),r=o.trimStart()):r+=o;return r&&s.push(r),s}};var ba=class extends EventTarget{constructor(){super(),this.t=null}use(t){return this.t&&this.t!==t&&this.t.close?.(),this.t=t,t.hub=this,t}emit(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:{type:t,...e}}))}send(t){this.t?.send(t)}leave(){let t=this.t;this.t=null,t?.leave?.()}get online(){return this.t?!!this.t.online:!1}get kind(){return this.t?.kind??null}},Ql="faith-chess-token",Ea=class{constructor(){this.kind="lan",this.ws=null,this.wantOpen=!1,this.retry=null,this.online=!1}get token(){try{return localStorage.getItem(Ql)}catch{return null}}set token(t){try{t?localStorage.setItem(Ql,t):localStorage.removeItem(Ql)}catch{}}connect(){this.wantOpen=!0,clearTimeout(this.retry);let t=location.protocol==="https:"?"wss":"ws",e=new WebSocket(`${t}://${location.host}`);this.ws=e,e.onopen=()=>{this.online=!0,this.hub?.emit("open"),this.token&&this.send({type:"reconnect",token:this.token})},e.onmessage=n=>{let s;try{s=JSON.parse(n.data)}catch{return}if(s.type==="joined"&&(this.token=s.token),s.type==="error"&&s.code==="nosession"){this.token=null;return}this.hub?.emit(s.type,s)},e.onclose=()=>{this.online=!1,this.hub?.emit("close"),this.wantOpen&&(this.retry=setTimeout(()=>this.connect(),1e3))},e.onerror=()=>{}}send(t){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}leave(){this.send({type:"leave"}),this.token=null}close(){}};var Oy="abcdefgh";function Ft(i,t){return t*8+i}function Vr(i){return i&7}function rs(i){return i>>3}function nh(i){return Oy[Vr(i)]+(rs(i)+1)}function Xe(i){return i==="w"?"b":"w"}var gd=1;function Sa(i,t){return{id:gd++,type:i,color:t,shield:!1}}function wa(){gd=1;let i=new Array(64).fill(null),t=["r","n","b","q","k","b","n","r"];for(let e=0;e<8;e++)i[Ft(e,0)]=Sa(t[e],"w"),i[Ft(e,1)]=Sa("p","w"),i[Ft(e,6)]=Sa("p","b"),i[Ft(e,7)]=Sa(t[e],"b");return{board:i,turn:"w",castling:{w:{k:!0,q:!0},b:{k:!0,q:!0}},ep:null,halfmove:0,fullmove:1,lastMove:null}}function os(i){return{board:i.board.map(t=>t?{...t}:null),turn:i.turn,castling:{w:{...i.castling.w},b:{...i.castling.b}},ep:i.ep,halfmove:i.halfmove,fullmove:i.fullmove,lastMove:i.lastMove?{...i.lastMove}:null}}function Fy(i,t){for(let e=0;e<64;e++){let n=i[e];if(n&&n.type==="k"&&n.color===t)return e}return-1}var xd=[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]],yd=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],th=[[1,1],[-1,1],[-1,-1],[1,-1]],eh=[[1,0],[0,1],[-1,0],[0,-1]];function fi(i,t){return i>=0&&i<8&&t>=0&&t<8}function nr(i,t,e){let n=Vr(t),s=rs(t),r=e==="w"?s-1:s+1;for(let o of[-1,1]){let a=n+o;if(fi(a,r)){let c=i[Ft(a,r)];if(c&&c.color===e&&c.type==="p")return!0}}for(let[o,a]of xd){let c=n+o,l=s+a;if(fi(c,l)){let h=i[Ft(c,l)];if(h&&h.color===e&&h.type==="n")return!0}}for(let[o,a]of yd){let c=n+o,l=s+a;if(fi(c,l)){let h=i[Ft(c,l)];if(h&&h.color===e&&h.type==="k")return!0}}for(let[o,a]of th){let c=n+o,l=s+a;for(;fi(c,l);){let h=i[Ft(c,l)];if(h){if(h.color===e&&(h.type==="b"||h.type==="q"))return!0;break}c+=o,l+=a}}for(let[o,a]of eh){let c=n+o,l=s+a;for(;fi(c,l);){let h=i[Ft(c,l)];if(h){if(h.color===e&&(h.type==="r"||h.type==="q"))return!0;break}c+=o,l+=a}}return!1}function as(i,t){let e=Fy(i.board,t);return e<0?!1:nr(i.board,e,Xe(t))}function By(i,t){let{board:e}=i,n=e[t];if(!n)return[];let s=[],r=Vr(t),o=rs(t),a=n.color,c=(h,u)=>s.push({from:t,to:h,...u});if(n.type==="p"){let h=a==="w"?1:-1,u=a==="w"?1:6,f=a==="w"?7:0,d=o+h;if(fi(r,d)&&!e[Ft(r,d)]){if(d===f)for(let y of["q","r","b","n"])c(Ft(r,d),{promotion:y});else c(Ft(r,d),{});let g=o+2*h;o===u&&!e[Ft(r,g)]&&c(Ft(r,g),{double:!0})}for(let g of[-1,1]){let y=r+g;if(!fi(y,d))continue;let m=Ft(y,d),p=e[m];if(p&&p.color!==a)if(d===f)for(let _ of["q","r","b","n"])c(m,{promotion:_,capture:!0});else c(m,{capture:!0});else if(!p&&i.ep===m){let _=e[Ft(y,o)];_&&_.type==="p"&&_.color!==a&&c(m,{enPassant:!0,capture:!0})}}return s}if(n.type==="n"||n.type==="k"){let h=n.type==="n"?xd:yd;for(let[u,f]of h){let d=r+u,g=o+f;if(!fi(d,g))continue;let y=Ft(d,g),m=e[y];m?m.color!==a&&c(y,{capture:!0}):c(y,{})}if(n.type==="k"){let u=a==="w"?0:7;if(o===u&&r===4&&!nr(e,t,Xe(a))){let f=i.castling[a];if(f.k){let d=e[Ft(7,u)];d&&d.type==="r"&&d.color===a&&!e[Ft(5,u)]&&!e[Ft(6,u)]&&!nr(e,Ft(5,u),Xe(a))&&!nr(e,Ft(6,u),Xe(a))&&c(Ft(6,u),{castle:"k"})}if(f.q){let d=e[Ft(0,u)];d&&d.type==="r"&&d.color===a&&!e[Ft(1,u)]&&!e[Ft(2,u)]&&!e[Ft(3,u)]&&!nr(e,Ft(3,u),Xe(a))&&!nr(e,Ft(2,u),Xe(a))&&c(Ft(2,u),{castle:"q"})}}}return s}let l=n.type==="b"?th:n.type==="r"?eh:[...th,...eh];for(let[h,u]of l){let f=r+h,d=o+u;for(;fi(f,d);){let g=Ft(f,d),y=e[g];if(!y)c(g,{});else{y.color!==a&&c(g,{capture:!0});break}f+=h,d+=u}}return s}function ir(i,t){let e=i.turn,n=t!=null?[t]:[...Array(64).keys()],s=[];for(let r of n){let o=i.board[r];if(!(!o||o.color!==e))for(let a of By(i,r)){let c=vd(i,a);as(c,e)||s.push(a)}}return s}function _d(i,t,e,n){return ir(i,t).find(s=>s.to===e&&(s.promotion??null)===(n??null))||null}function vd(i,t){let e=os(i),n=e.board,s=n[t.from],r=s.color,o=n[t.to];if(n[t.to]=s,n[t.from]=null,t.enPassant){let l=Ft(Vr(t.to),rs(t.from));n[l]=null}if(t.promotion&&(s.type=t.promotion),t.castle){let l=rs(t.from);t.castle==="k"?(n[Ft(5,l)]=n[Ft(7,l)],n[Ft(7,l)]=null):(n[Ft(3,l)]=n[Ft(0,l)],n[Ft(0,l)]=null)}s.type==="k"&&(e.castling[r].k=!1,e.castling[r].q=!1);let a=r==="w"?0:7;t.from===Ft(0,a)&&(e.castling[r].q=!1),t.from===Ft(7,a)&&(e.castling[r].k=!1);let c=r==="w"?7:0;return t.to===Ft(0,c)&&(e.castling[Xe(r)].q=!1),t.to===Ft(7,c)&&(e.castling[Xe(r)].k=!1),e.ep=t.double?Ft(Vr(t.from),(rs(t.from)+rs(t.to))/2):null,e.halfmove=s.type==="p"||o||t.enPassant?0:e.halfmove+1,r==="b"&&e.fullmove++,e.turn=Xe(r),e.lastMove={from:t.from,to:t.to,pieceId:s.id,color:r},e.captured=o?{...o}:null,e}function Md(i,t){return vd(i,t)}function Ta(i,t){let e=os(i),n=e.board[t];if(!n||n.type==="k")return e;if(e.board[t]=null,n.type==="r"){let s=n.color==="w"?0:7;t===Ft(0,s)&&(e.castling[n.color].q=!1),t===Ft(7,s)&&(e.castling[n.color].k=!1)}return e}function ky(i){let t={w:0,b:0};for(let e of i)if(!(!e||e.type==="k"))if(e.type==="n"||e.type==="b")t[e.color]++;else return!1;return t.w+t.b<=1}function bd(i){let t=i.turn,e=ir(i),n=as(i,t);return e.length===0?n?{over:!0,result:"checkmate",winner:Xe(t),check:n}:{over:!0,result:"stalemate",winner:null,check:n}:ky(i.board)?{over:!0,result:"insufficient",winner:null,check:n}:i.halfmove>=100?{over:!0,result:"fifty",winner:null,check:n}:{over:!1,result:null,winner:null,check:n}}var Ae={ERASE_COOLDOWN_MS:1e4,SUSPECT_WINDOW_MS:1e4,SUSPECT_LATE_MS:2e4,PICK_TIMEOUT_MS:1e4,RECONNECT_GRACE_MS:3e4,LONG_PRESS_MS:800,FOUL_LIMIT:3,SUSPECT_CHOICES:["p","n","b","r","q"]},ih={p:1,n:3,b:3,r:5,q:9},mn={p:"\uD3F0",n:"\uB098\uC774\uD2B8",b:"\uBE44\uC20D",r:"\uB8E9",q:"\uD038",k:"\uD0B9"};var sh=(i,t)=>{for(let e=0;e<i.length;e++)if(i[e]!==t[e])return i[e]<t[e];return!1},Li=(i,t,e)=>{let n=i.charCodeAt(i.length-1)-44032;return n>=0&&n<11172&&n%28!==0?t:e};function cs(i){return String(i||"").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").trim().slice(0,12)}var Di=class i{constructor(t,{now:e=()=>Date.now(),onChange:n=()=>{}}={}){this.code=t,this.now=e,this.onChange=n,this.players={w:null,b:null},this.round=0,this.resetMatch(),this.status="waiting"}resetMatch(){this.state=wa(),this.erases=[],this.lastEraseAt={w:-1/0,b:-1/0},this.caught={w:0,b:0},this.pending={w:null,b:null},this.lastMovedId={w:null,b:null},this.history=[],this.historyShift=0,this.result=null,this.rematchVotes={w:!1,b:!1},this.lastMoveVisible=null,this.startedAt=null,this.danced={w:!1,b:!1}}get isFull(){return!!(this.players.w&&this.players.b)}addPlayer(t,e){let n=this.players.w?this.players.b?null:"b":"w";return n?(this.players[n]={name:cs(t)||(n==="w"?"\uBC31":"\uD751"),token:e,connected:!0,disconnectedAt:null,send:null},this.isFull&&this.status==="waiting"&&this.start(),n):null}start(){this.resetMatch(),this.status="playing",this.round++,this.startedAt=this.now(),this.emit("event",{name:"start"}),this.changed()}colorOfToken(t){for(let e of["w","b"])if(this.players[e]&&this.players[e].token===t)return e;return null}setConnected(t,e){let n=this.players[t];n&&(n.connected=e,n.disconnectedAt=e?null:this.now(),this.changed())}handle(t,e){if(!(!e||typeof e!="object"))switch(e.type){case"move":return this.move(t,e.from|0,e.to|0,e.promotion||null);case"erase":return this.erase(t,e.square|0);case"suspect":return this.suspect(t);case"pick":return this.pick(t,String(e.pieceType||""));case"resign":return this.resign(t);case"rematch":return this.rematch(t);case"dance":return this.dance(t);default:return}}move(t,e,n,s){if(this.status!=="playing"||this.state.turn!==t)return;let r=_d(this.state,e,n,s);if(!r)return this.toast(t,"\uB458 \uC218 \uC5C6\uB294 \uC218\uC785\uB2C8\uB2E4.","warn");let o=this.state;this.history.push({state:os(o),t:this.now(),by:t,m:{from:r.from,to:r.to,castle:r.castle||null},type:o.board[e].type,lastMovedId:{...this.lastMovedId},lastMoveVisible:this.lastMoveVisible}),this.history.length>400&&(this.history.shift(),this.historyShift++),this.state=Md(o,r),this.lastMovedId[t]=o.board[e].id,this.lastMoveVisible={from:e,to:n};let a=Xe(t),c=as(this.state,a),l=r.enPassant?"p":o.board[n]?.type||null;this.emit("event",{name:r.capture?"capture":r.castle?"castle":"move",check:c,by:t,at:n,captured:l,promotion:r.promotion||null}),this.checkEnd(),this.changed()}erase(t,e){if(this.status!=="playing")return;let n=this.now(),s=this.state.board[e];if(!s||s.color===t)return;if(s.type==="k")return this.toast(t,"\uD0B9\uC740 \uC9C0\uC6B8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","warn");let r=Ae.ERASE_COOLDOWN_MS-(n-this.lastEraseAt[t]);if(r>0)return this.toast(t,`\uC544\uC9C1 ${Math.ceil(r/1e3)}\uCD08 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`,"warn");this.state=Ta(this.state,e),this.lastEraseAt[t]=n,this.erases.push({t:n,by:t,victim:s.color,pieceType:s.type,pieceId:s.id,square:e,moveIndex:this.history.length+this.historyShift,resolved:!1}),this.toast(t,`${nh(e)}\uC758 ${mn[s.type]}${Li(mn[s.type],"\uC744","\uB97C")} \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4.`,"secret"),this.checkEnd(),this.changed()}dance(t){if(!(this.status!=="playing"||!this.players[t])){if(this.danced[t])return this.toast(t,"\uC90C \uB304\uC2A4\uB294 \uD55C \uD310\uC5D0 \uD55C \uBC88\uC785\uB2C8\uB2E4.","warn");this.danced[t]=!0,this.emit("event",{name:"dance",by:t}),this.changed()}}suspect(t){if(this.status!=="playing"||this.pending[t])return;this.emit("event",{name:"suspect",by:t});let e=this.now(),n=-1;for(let o=this.erases.length-1;o>=0;o--){let a=this.erases[o];if(a.victim===t&&!a.resolved){n=o;break}}let s=n>=0?this.erases[n]:null,r=s?e-s.t:1/0;if(s&&r<=Ae.SUSPECT_WINDOW_MS)s.resolved=!0,this.pending[t]={kind:"pick",eraseIndex:n,deadline:e+Ae.PICK_TIMEOUT_MS},this.toast(t,"\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?","info");else if(s&&r<=Ae.SUSPECT_LATE_MS)s.resolved=!0,this.toast(t,"\uD55C \uBC1C \uB2A6\uC5C8\uC2B5\uB2C8\uB2E4\u2026","late");else{s&&(s.resolved=!0);let o=this.findPieceSquare(this.lastMovedId[t]),a=o>=0?this.state.board[o]:null;a&&a.type!=="k"?(this.state=Ta(this.state,o),this.toast(t,`\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC758\uC2EC\uC758 \uB300\uAC00\uB85C ${mn[a.type]}${Li(mn[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"bad"),this.toast(Xe(t),`\uC0C1\uB300\uAC00 \uD5DB\uB41C \uC758\uC2EC\uC744 \uD588\uC2B5\uB2C8\uB2E4. \uC0C1\uB300\uC758 ${mn[a.type]}${Li(mn[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"good"),this.emit("event",{name:"vanish"})):this.toast(t,"\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","bad"),this.checkEnd()}this.changed()}pick(t,e){let n=this.pending[t];if(!n||n.kind!=="pick"||this.status!=="playing"||!Ae.SUSPECT_CHOICES.includes(e))return;let s=this.erases[n.eraseIndex];e===s.pieceType?(this.pending[t]=null,this.penalty(t,s)):(this.pending[t]=null,this.toast(t,`\uC798\uBABB \uC9DA\uC5C8\uC2B5\uB2C8\uB2E4. (${mn[e]}${Li(mn[e],"\uC774","\uAC00")} \uC544\uB2C8\uC5C8\uC2B5\uB2C8\uB2E4)`,"bad")),this.changed()}static penaltyTarget(t,e,n,s){let r=ih[n],o=null;for(let a=0;a<64;a++){let c=t[a];if(!c||c.color!==e||c.type==="k")continue;let l=ih[c.type],h=Math.max(Math.abs((a&7)-(s&7)),Math.abs((a>>3)-(s>>3))),u=[Math.abs(l-r),c.type===n?0:1,-l,h,a];(!o||sh(u,o.key))&&(o={sq:a,key:u})}return o?o.sq:-1}static movePath(t,e){let n=[t.to],s=t.from&7,r=t.from>>3,o=t.to&7,a=t.to>>3;if("rbq".includes(e)||e==="p"&&Math.abs(a-r)===2){let l=Math.sign(o-s),h=Math.sign(a-r);for(let u=s+l,f=r+h;u!==o||f!==a;u+=l,f+=h)n.push(f*8+u)}if(t.castle){let l=t.castle==="k"?7:0;for(let h=Math.min(s,l)+1;h<Math.max(s,l);h++)n.push(r*8+h)}return[...new Set(n)]}findRewind(t){let e=(t.moveIndex??this.history.length+this.historyShift)-this.historyShift;for(let n=Math.max(0,e);n<this.history.length;n++){let s=this.history[n];if(s.by===t.by&&i.movePath(s.m,s.type).includes(t.square))return n}return-1}rewindTo(t){let e=this.history[t],n=this.history.length-t;this.state=os(e.state),this.lastMovedId={...e.lastMovedId},this.lastMoveVisible=e.lastMoveVisible,this.history.length=t;for(let s of this.erases)s.t>e.t&&(s.resolved=!0);for(let s of["w","b"]){let r=this.pending[s];r&&this.erases[r.eraseIndex]?.t>e.t&&(this.pending[s]=null)}return this.emit("event",{name:"rewind",undone:n}),n}static reviveSquare(t,e){let n=Xe(e.victim),s=as(t,n),r=[];for(let o=0;o<64;o++){if(t.board[o]||e.pieceType==="p"&&(!(o>>3)||o>>3===7))continue;let a=Math.abs((o&7)-(e.square&7)),c=Math.abs((o>>3)-(e.square>>3));r.push([Math.max(a,c),a+c,o])}r.sort((o,a)=>sh(o,a)?-1:sh(a,o)?1:0);for(let[,,o]of r){let a=os(t);if(a.board[o]={id:e.pieceId,type:e.pieceType,color:e.victim,shield:!1},s||!as(a,n))return o}return-1}revive(t){let e=i.reviveSquare(this.state,t);if(e<0)return-1;let n=os(this.state);return n.board[e]={id:t.pieceId,type:t.pieceType,color:t.victim,shield:!1},this.state=n,this.emit("event",{name:"revive",at:e,pieceType:t.pieceType,color:t.victim}),e}penalty(t,e){let n=Xe(t),s=++this.caught[n],r=Ae.FOUL_LIMIT,o=mn[e.pieceType],a=this.findRewind(e),c=a>=0?this.rewindTo(a):0,l=c?` \uC2DC\uAC04\uC744 \uB418\uAC10\uC544 ${c}\uC218\uB97C \uBB34\uB974\uACE0,`:"",h=i.penaltyTarget(this.state.board,n,e.pieceType,e.square);if(h<0){this.revive(e),this.toast(t,"\uBC18\uCE59 \uC801\uBC1C! \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC544 \uC2B9\uB9AC\uD569\uB2C8\uB2E4.","good"),this.toast(n,"\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uB9D0\uC774 \uD0B9\uBFD0\uC774\uB77C \uD328\uBC30\uD569\uB2C8\uB2E4.","bad"),this.end({result:"bare",winner:t});return}let u=this.state.board[h],f=mn[u.type];this.emit("event",{name:"penalty",at:h,pieceType:u.type,by:t}),this.state=Ta(this.state,h);let d=this.revive(e)>=0;if(this.toast(t,`\uBC18\uCE59 \uC801\uBC1C! (\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${l}${d?` \uC9C0\uC6CC\uC84C\uB358 ${o}${Li(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uC0C1\uB300 ${f}${Li(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"good"),this.toast(n,`\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. (\uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${l}${d?` \uC0C1\uB300 ${o}${Li(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uB0B4 ${nh(h)} ${f}${Li(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"bad"),s>=r){this.end({result:"fouls",winner:t});return}this.checkEnd()}resign(t){this.status==="playing"&&(this.end({result:"resign",winner:Xe(t)}),this.changed())}rematch(t){if(this.status==="over"){if(this.rematchVotes[t]=!0,this.rematchVotes.w&&this.rematchVotes.b){let{w:e,b:n}=this.players;this.players={w:n,b:e},this.start();return}this.toast(Xe(t),"\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uC6D0\uD569\uB2C8\uB2E4.","info"),this.changed()}}tick(){if(this.status==="playing"){let t=this.now();for(let e of["w","b"]){let n=this.pending[e];n&&n.kind==="pick"&&t>n.deadline&&(this.pending[e]=null,this.toast(e,"\uC2DC\uAC04 \uCD08\uACFC. \uAE30\uD68C\uB97C \uB193\uCCE4\uC2B5\uB2C8\uB2E4.","bad"),this.changed());let s=this.players[e];s&&!s.connected&&s.disconnectedAt!=null&&t-s.disconnectedAt>Ae.RECONNECT_GRACE_MS&&(this.end({result:"disconnect",winner:Xe(e)}),this.changed())}}}checkEnd(){let t=bd(this.state);t.over&&this.end({result:t.result,winner:t.winner})}end(t){this.status==="playing"&&(this.status="over",this.result=t,this.pending={w:null,b:null},this.rematchVotes={w:!1,b:!1},this.emit("event",{name:"end"}))}findPieceSquare(t){return t==null?-1:this.state.board.findIndex(e=>e&&e.id===t)}toast(t,e,n="info"){this.emit("toast",{text:e,kind:n},t)}emit(t,e,n=null){for(let s of["w","b"]){if(n&&s!==n)continue;let r=this.players[s];r&&r.send&&r.send({type:t,...e})}}changed(){this.onChange(this)}view(t){let e=this.state,n=[];for(let o=0;o<64;o++){let a=e.board[o];a&&n.push({sq:o,id:a.id,type:a.type,color:a.color,shield:!!a.shield})}let s=this.pending[t],r=this.now();return{type:"state",code:this.code,round:this.round,you:t,status:this.status,names:{w:this.players.w?.name??null,b:this.players.b?.name??null},connected:{w:!!this.players.w?.connected,b:!!this.players.b?.connected},turn:e.turn,pieces:n,lastMove:this.lastMoveVisible,castling:{w:{...e.castling.w},b:{...e.castling.b}},ep:e.ep,check:this.status==="playing"?as(e,e.turn):!1,caught:{...this.caught},danced:{...this.danced},eraseReadyAt:this.lastEraseAt[t]+Ae.ERASE_COOLDOWN_MS,serverNow:r,pending:s&&s.kind==="pick"?{kind:"pick",deadline:s.deadline,choices:Ae.SUSPECT_CHOICES}:null,result:this.result,rematchVotes:{...this.rematchVotes}}}};var Ed={p:1,n:3,b:3,r:5,q:9,k:0},ls=(i,t)=>i+Math.random()*(t-i),Aa=i=>i[Math.floor(Math.random()*i.length)],Gr=class{constructor(){this.kind="bot",this.online=!0,this.timer=null}start(t){this.game=new Di("BOT",{onChange:e=>this.broadcast(e)}),this.game.addPlayer(t,"me"),this.game.players.w.send=e=>this.hub.emit(e.type,e),this.hub.emit("joined",{code:"BOT",color:"w"}),this.game.addPlayer("\uC5F0\uC2B5 \uBD07","bot"),this.bot={nextErase:performance.now()+ls(9e3,16e3),plan:null,seenErases:0,danceAt:performance.now()+ls(25e3,6e4)},this.timer=setInterval(()=>this.tick(),200)}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}get botColor(){return this.game.colorOfToken("bot")}get myColor(){return this.game.colorOfToken("me")}send(t){let e=this.myColor;e&&(this.game.handle(e,t),t.type==="rematch"&&this.game.status==="over"&&setTimeout(()=>this.game.handle(this.botColor,{type:"rematch"}),900),this.game.status==="playing"&&this.game.round>(this.lastRound||0)&&(this.lastRound=this.game.round,this.game.players[this.myColor].send=n=>this.hub.emit(n.type,n),this.game.players[this.botColor].send=null,this.bot.nextErase=performance.now()+ls(9e3,16e3),this.bot.danceAt=performance.now()+ls(25e3,6e4),this.broadcast(this.game)))}tick(){let t=this.game,e=this.botColor,n=performance.now();if(t.tick(),t.status!=="playing")return;let s=t.pending[e];if(s?.kind==="pick"){t.handle(e,{type:"pick",pieceType:Math.random()<.65?t.erases[s.eraseIndex].pieceType:Aa(Ae.SUSPECT_CHOICES)});return}let r=t.erases.filter(o=>o.victim===e).length;if(r>this.bot.seenErases&&(this.bot.seenErases=r,Math.random()<.55&&(this.bot.suspectAt=n+ls(2500,8e3))),this.bot.suspectAt&&n>this.bot.suspectAt){this.bot.suspectAt=0,t.handle(e,{type:"suspect"});return}if(!t.danced[e]&&n>this.bot.danceAt){t.handle(e,{type:"dance"});return}if(n>this.bot.nextErase){this.bot.nextErase=n+ls(16e3,32e3);let o=t.state.board.map((c,l)=>c&&c.color!==e&&c.type!=="k"?l:-1).filter(c=>c>=0),a=o.filter(c=>t.state.board[c].type==="p");o.length&&t.handle(e,{type:"erase",square:a.length&&Math.random()<.6?Aa(a):Aa(o)});return}if(t.state.turn===e&&(this.bot.plan||(this.bot.plan=n+ls(700,1600)),n>this.bot.plan)){this.bot.plan=null;let o=ir(t.state);if(!o.length)return;let a=o.filter(l=>l.capture).sort((l,h)=>(Ed[t.state.board[h.to]?.type]||1)-(Ed[t.state.board[l.to]?.type]||1)),c=a.length&&Math.random()<.8?a[0]:Aa(o);t.handle(e,{type:"move",from:c.from,to:c.to,promotion:c.promotion?"q":null})}}leave(){clearInterval(this.timer),this.timer=null}close(){this.leave()}};var Sd="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",wd="faith-chess-room-token",Td=i=>"fc-"+i.toLowerCase(),Hy=i=>new TextEncoder().encode(JSON.stringify(i)).length;function zy(){try{let i=localStorage.getItem(wd);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(wd,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function Vy(i){let{type:t,pieces:e,...n}=i;return{...n,pieces:e.map(s=>`${s.id}.${s.sq}.${s.type}${s.color}${s.shield?1:0}`).join(" ")}}function Gy(i){let t=String(i.pieces||"").split(" ").filter(Boolean).map(e=>{let[n,s,r]=e.split(".");return{id:+n,sq:+s,type:r[0],color:r[1],shield:r[2]==="1"}});return{...i,type:"state",pieces:t,eraseReadyAt:i.eraseReadyAt??-1/0}}var Ra=class i{static async open(){if(!window.claude?.use)return null;let t=null;try{t=await window.claude.use("room")}catch{t=null}return t?new i(t):null}constructor(t){this.kind="room",this.room=t,this.connected=t.connected(),this.role=null,this.onLobby=null,t.onConnection(e=>{this.connected=e,this.hub?.emit(e?"open":"close")},()=>{this.connected=!1}),t.onPeers(()=>this.onLobby?.(this.openRooms()),()=>{})}get online(){return this.role==="guest"?this.connected&&this.hostOnline:this.connected}openRooms(){return this.room.peers().filter(t=>!t.sameTab&&typeof t.presence?.open=="string").map(t=>({code:t.presence.open,name:String(t.presence.name||"?"),mine:t.isMe}))}async create(t){this.endSession();let e="";for(let s=0;s<4;s++)e+=Sd[Math.floor(Math.random()*Sd.length)];let n=await this.room.join(Td(e));Object.assign(this,{role:"host",code:e,name:cs(t)||"\uD638\uC2A4\uD2B8",r:n,q:[],qs:0,st:null,lastAct:0,guestPeer:null,guestTk:null}),this.game=new Di(e,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.unsub=n.onPeers(s=>this.hostPeers(s),()=>{}),this.tickT=setInterval(()=>this.game?.tick(),250),this.room.presence({open:e,name:this.name}).catch(()=>{}),this.hub.emit("joined",{code:e,color:"w"}),this.broadcast(this.game),this.pushHost()}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostOut(t){t.type==="state"?this.st=t:(this.q.push({s:++this.qs,t:Date.now(),m:t}),this.q.length>6&&this.q.shift()),this.schedulePush()}schedulePush(){this.pushT||(this.pushT=setTimeout(()=>{this.pushT=null,this.pushHost()},30))}pushHost(){if(!this.r||this.role!=="host")return;let t={r:"host",code:this.code,name:this.name,gtk:this.guestTk,ack:this.lastAct,hn:Date.now(),st:this.st?Vy(this.st):null,q:this.q};for(;Hy(t)>3900&&t.q.length;)t.q=t.q.slice(1);this.r.presence(t).catch(()=>{})}hostPeers(t){if(this.role!=="host"||!this.game)return;let e=t.peers.filter(s=>!s.sameTab&&s.presence?.r==="guest"&&s.presence.code===this.code),n=this.guestPeer?e.find(s=>s.peer===this.guestPeer):null;if(!n){let s=this.guestTk?e.find(r=>r.presence.tk===this.guestTk):e[0];if(s){let r=!this.guestTk;this.guestPeer=s.peer,this.guestTk=String(s.presence.tk||s.peer),this.lastAct=0,r&&(this.game.addPlayer(s.presence.name,this.guestTk),this.room.presence({open:null}).catch(()=>{}));let o=this.game.colorOfToken(this.guestTk);this.game.players[o].send=a=>this.hostOut(a),this.game.setConnected(o,!0),n=s}else if(this.guestPeer){this.guestPeer=null;let r=this.game.colorOfToken(this.guestTk);r&&this.game.setConnected(r,!1)}}if(n){let s=this.game.colorOfToken(this.guestTk),r=Array.isArray(n.presence.acts)?n.presence.acts:[];for(let o of r)o&&o.s>this.lastAct&&(this.lastAct=o.s,this.game.handle(s,o.m))}this.schedulePush()}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await this.room.join(Td(t));Object.assign(this,{role:"guest",code:t,name:cs(e)||"\uC190\uB2D8",r:n,tk:zy(),acts:[],as:0,lastQ:null,lastHn:0,hostSeen:!1,hostOnline:!1,joinedOk:!1}),n.presence({r:"guest",code:t,name:this.name,tk:this.tk,acts:[]}).catch(()=>{}),this.unsub=n.onPeers(s=>this.guestPeers(s),()=>{}),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{text:"\uADF8 \uCF54\uB4DC\uC758 \uBC29\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."}),this.endSession())},8e3)}guestPeers(t){if(this.role!=="guest")return;let e=t.peers.find(r=>!r.sameTab&&r.presence?.r==="host"&&r.presence.code===this.code);if(!e){this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close"));return}let n=e.presence;if(this.hostSeen=!0,this.hostOnline||(this.hostOnline=!0,this.hub.emit("open")),n.gtk&&n.gtk!==this.tk){this.joinedOk||(this.hub.emit("error",{text:"\uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC785\uB2C8\uB2E4."}),this.endSession());return}if(!n.gtk)return;this.joinedOk||(this.joinedOk=!0,clearTimeout(this.joinTimer),this.hub.emit("joined",{code:this.code,color:n.st?.you||"b"}));let s=Array.isArray(n.q)?n.q:[];if(this.lastQ===null){this.lastQ=0;for(let r of s)n.hn-r.t>3e3&&(this.lastQ=Math.max(this.lastQ,r.s))}for(let r of s)r.s>this.lastQ&&(this.lastQ=r.s,r.m?.type&&this.hub.emit(r.m.type,r.m));if(n.st&&n.hn!==this.lastHn&&(this.lastHn=n.hn,this.hub.emit("state",Gy(n.st))),typeof n.ack=="number"){let r=this.acts.length;this.acts=this.acts.filter(o=>o.s>n.ack),this.acts.length!==r&&this.pushGuest()}}pushGuest(){this.r?.presence({acts:this.acts}).catch(()=>{})}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&(this.acts.push({s:++this.as,m:t}),this.acts.length>8&&this.acts.shift(),this.pushGuest())}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"}),this.role==="host"&&this.pushHost();let t=this.r;this.detach(),setTimeout(()=>t?.leave().catch(()=>{}),600)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.pushT),this.tickT=this.joinTimer=this.pushT=null,this.unsub?.(),this.unsub=null,this.role==="host"&&this.room.presence({open:null}).catch(()=>{}),this.r=null,this.game=null,this.role=null,this.hostOnline=!1}endSession(){let t=this.r;this.detach(),t?.leave().catch(()=>{})}};var Ad="0123456789",Wy=5e3,Rd="faith-chess-peer-token",Cd=i=>"faith-chess-"+i.toLowerCase();function qy(){try{let i=localStorage.getItem(Rd);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(Rd,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function Pd(){let i={debug:0},t=new URLSearchParams(location.search).get("peer");if(t){let[e,n]=t.split(":");Object.assign(i,{host:e,port:+n||9e3,path:"/",secure:!1,config:{iceServers:[]}})}return i}var Id=i=>new Promise((t,e)=>{let n=i?new window.Peer(i,Pd()):new window.Peer(Pd()),s=o=>{n.off("open",r);try{n.destroy()}catch{}e(o)},r=()=>{n.off("error",s),t(n)};n.once("open",r),n.once("error",s)}),Wr=class{static available(){return typeof window.Peer=="function"}constructor(){this.kind="peer",this.role=null,this.hostOnline=!1}get online(){return this.role==="guest"?this.hostOnline:this.role==="host"?!!this.peer&&(!this.peer.disconnected||!!this.conn?.open):!0}async create(t){this.endSession();let e=null,n="";for(let s=0;s<5&&!e;s++){n="";for(let r=0;r<4;r++)n+=Ad[Math.floor(Math.random()*Ad.length)];try{e=await Id(Cd(n))}catch(r){if(r?.type!=="unavailable-id")throw r}}if(!e)throw new Error("no free code");Object.assign(this,{role:"host",code:n,name:cs(t)||"\uD638\uC2A4\uD2B8",peer:e,conn:null,guestTk:null}),this.game=new Di(n,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.tickT=setInterval(()=>this.game?.tick(),250),e.on("connection",s=>this.hostConn(s)),e.on("disconnected",()=>{this.hub?.emit("close"),this.retryT=setTimeout(()=>this.reconnectBroker(),1e3)}),e.on("open",()=>this.hub?.emit("open")),e.on("error",s=>console.warn("[peer]",s?.type,s)),this.hub.emit("joined",{code:n,color:"w"}),this.broadcast(this.game)}reconnectBroker(){if(!(this.role!=="host"||!this.peer||this.peer.destroyed||!this.peer.disconnected)){try{this.peer.reconnect()}catch{}this.retryT=setTimeout(()=>this.reconnectBroker(),3e3)}}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostConn(t){t.on("data",e=>{if(!(this.role!=="host"||!this.game||!e||typeof e!="object")){if(e.type==="hello"){let n=String(e.tk||t.peer).slice(0,40);if(this.guestTk?n!==this.guestTk:this.ringConn&&this.ringConn!==t){t.send({type:"error",code:"busy",text:"\uD1B5\uD654 \uC911\uC785\uB2C8\uB2E4. \uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC774\uC5D0\uC694."}),setTimeout(()=>t.close(),300);return}if(this.guestTk){this.attachGuest(t,n);return}if(this.ringConn===t)return;this.ringConn=t,this.hub.emit("ring",{}),this.pickUp=()=>{clearTimeout(this.ringT),this.ringT=null,this.pickUp=null,this.ringConn===t&&(this.ringConn=null,!(this.role!=="host"||!this.game||!t.open)&&(this.guestTk=n,this.game.addPlayer(e.name,n),this.attachGuest(t,n)))},this.ringT=setTimeout(()=>this.pickUp?.(),Wy);return}t===this.conn&&e.type==="act"&&e.m&&typeof e.m=="object"&&this.game.handle(this.game.colorOfToken(this.guestTk),e.m)}}),t.on("close",()=>{if(t===this.ringConn){this.ringConn=null,this.pickUp=null,clearTimeout(this.ringT),this.hub?.emit("ringstop",{});return}if(t!==this.conn||!this.game)return;this.conn=null;let e=this.game.colorOfToken(this.guestTk);e&&this.game.setConnected(e,!1)}),t.on("error",()=>{})}answer(){this.pickUp?.()}attachGuest(t,e){if(this.conn&&this.conn!==t)try{this.conn.close()}catch{}this.conn=t;let n=this.game.colorOfToken(e);t.send({type:"joined",code:this.code,color:n}),this.game.players[n].send=s=>{this.conn?.open&&this.conn.send(s)},this.game.setConnected(n,!0),this.broadcast(this.game)}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await Id(null);Object.assign(this,{role:"guest",code:t,name:cs(e)||"\uC190\uB2D8",peer:n,tk:qy(),joinedOk:!1,conn:null,hostOnline:!1}),n.on("error",s=>{s?.type==="peer-unavailable"&&this.role==="guest"&&(this.joinedOk?this.scheduleRedial():(this.hub.emit("error",{code:"nonumber",text:"\uC9C0\uAE08 \uAC70\uC2E0 \uBC88\uD638\uB294 \uC5C6\uB294 \uBC88\uD638\uC785\uB2C8\uB2E4."}),this.endSession()))}),n.on("disconnected",()=>{this.role==="guest"&&setTimeout(()=>{try{this.peer?.disconnected&&!this.peer.destroyed&&this.peer.reconnect()}catch{}},1e3)}),this.dial(),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{code:"noanswer",text:"\uC0C1\uB300\uAC00 \uC804\uD654\uB97C \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694."}),this.endSession())},2e4)}dial(){if(this.role!=="guest"||!this.peer||this.peer.destroyed)return;let t=this.peer.connect(Cd(this.code),{reliable:!0,serialization:"json"});this.conn=t,t.on("open",()=>{t===this.conn&&(this.hostOnline=!0,this.hub.emit("open"),t.send({type:"hello",name:this.name,tk:this.tk}))}),t.on("data",e=>{if(!(t!==this.conn||!e?.type)){if(e.type==="joined"&&(this.joinedOk=!0,clearTimeout(this.joinTimer)),e.type==="error"&&!this.joinedOk){this.hub.emit("error",e),this.endSession();return}this.hub.emit(e.type,e)}}),t.on("close",()=>{t===this.conn&&(this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close")),this.scheduleRedial())}),t.on("error",()=>{})}scheduleRedial(){this.role!=="guest"||!this.joinedOk||this.redialT||(this.redialT=setTimeout(()=>{this.redialT=null,this.role==="guest"&&!this.hostOnline&&this.dial()},2e3))}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&this.conn?.open&&this.conn.send({type:"act",m:t})}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"});let t=this.detach();setTimeout(()=>{try{t?.destroy()}catch{}},500)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.retryT),clearTimeout(this.redialT),clearTimeout(this.ringT),this.tickT=this.joinTimer=this.retryT=this.redialT=this.ringT=null,this.ringConn=null,this.pickUp=null;let t=this.peer;return this.peer=null,this.conn=null,this.game=null,this.role=null,this.hostOnline=!1,t}endSession(){let t=this.detach();try{t?.destroy()}catch{}}};var Jn=(i,t={})=>new _n({color:i,flatShading:!0,...t}),sr=(i,t={})=>new cn({color:i,flatShading:!0,shininess:90,specular:11575424,...t});function Re(i,t,e,n=0,s=0,r=0){let o=new Bt(t,e);return o.position.set(n,s,r),i.add(o),o}var Be={HOLE_R:.8,HOLE_SIZE:.165,STOP:-32,FIRST:28,STEP:30,PLATE:1.1,WHEEL:1.17},rr=i=>Be.FIRST+Be.STEP*i,Ca=i=>rr(i)-Be.STOP,Pa=i=>(i+1)%10,Ld=i=>(Number(i)+9)%10,Dd=i=>(i+540)%360-180,Ui=Math.PI/180,Ud=i=>i*i*(3-2*i),Xy=11740714,Yy=8262936,Ia=14264378;var Fd="#2a1414";function Nd(i,t,e=0,n=0,s=0){let r=new Ji;for(let o=0;o<=t;o++){let a=s+o/t*Math.PI*2,c=e+Math.cos(a)*i,l=n+Math.sin(a)*i;o===0?r.moveTo(c,l):r.lineTo(c,l)}return r}var Bd={kind:"rotary",label:"\uB2E4\uC774\uC5BC",body:Xy,bodyDark:Yy,width:3.3,profile:[[-1.7,0],[2.15,0],[2.2,.28],[-.05,1.95],[-1.35,1.95],[-1.75,1.3]],cam:{dist:9.4,up:1.5,side:1.5,look:.75}},La=class{constructor(t){this.cfg=t,this.kind=t.kind,this.scene=new kn,this.camera=new Le(30,1,.1,60),this.clear=new wt,this.bg=new wt(2364460),this.ray=new qs,this.plane=new Un,this.lift=0,this.liftTo=0,this.ringT=0,this.t=0,this.onDigit=()=>{},this.onSound=()=>{},this.cardKey="",this.enabled=!0,this.build()}build(){let t=this.scene,e=this.cfg,n=e.width;t.add(new ta(16773340,3153962,.75));let s=new nn(16777215,1.15);s.position.set(-3,7,5),t.add(s);let r=new nn(10475775,.35);r.position.set(4,3,-4),t.add(r),Re(t,new fe(14,14,.2,12),Jn(3809840),0,-.1,0),Re(t,new fe(n*.94,n*.97,.06,10),Jn(6965806),0,.03,.15);let o=new se;t.add(o),this.root=o;let a=new Ze;e.profile.forEach(([E,T],I)=>I?a.lineTo(E,T):a.moveTo(E,T));let c=new Hn(a,{depth:n,bevelEnabled:!0,bevelThickness:.16,bevelSize:.16,bevelSegments:1,curveSegments:1});c.rotateY(-Math.PI/2),c.translate(n/2,0,0),this.bodyMat=Jn(e.body),Re(o,c,this.bodyMat);let l=e.profile.map(E=>E[0]),h=Math.min(...l),u=Math.max(...l);for(let E of[-(n/2-.25),n/2-.25])for(let T of[h+.4,u-.4])Re(o,new fe(.16,.2,.08,6),Jn(1706510),E,.02,T);let f=new tt(...e.profile[2]),d=new tt(...e.profile[3]),g=f.clone().add(d).multiplyScalar(.5),y=d.clone().sub(f);this.faceLen=y.length(),y.normalize();let m=new R(0,y.y,y.x),p=new R(0,-y.x,y.y),_=new se;_.position.set(0,g.y,g.x).addScaledVector(p,.17),_.quaternion.setFromRotationMatrix(new ue().makeBasis(new R(1,0,0),m,p)),o.add(_),this.face=_,this.faceN=p,this.faceUp=m,this.buildFace(_);for(let E of[-1.05,1.05])Re(o,new ie(.34,.34,.55),Jn(this.cfg.bodyDark),E,2.2,-.72),Re(o,new ie(.4,.08,.6),Jn(1706510),E,2.36,-.72);let x=new se;o.add(x),this.handset=x,this.handsetRest=new R(0,2.62,-.72),x.position.copy(this.handsetRest),Re(x,new ie(2.2,.28,.42),this.bodyMat,0,.16,0);for(let E of[-1,1]){let T=Re(x,new ie(.5,.28,.42),this.bodyMat,E*1.12,.06,0);T.rotation.z=E*.32,Re(x,new fe(.44,.36,.34,8),this.bodyMat,E*1.38,-.12,0),Re(x,new fe(.3,.3,.02,8),Jn(1706510),E*1.38,-.3,0)}this.cordMat=Jn(this.cfg.cord??6164500),this.cord=Re(o,new le,this.cordMat),this.rebuildCord();let v=_.position.clone(),S=this.cfg.cam;this.camera.position.copy(v).addScaledVector(p,S.dist).addScaledVector(m,S.up).add(new R(S.side,0,0)),this.lookAt=v.clone().addScaledVector(m,S.look).add(new R(-.15,0,0)),this.camera.up.set(0,1,0),this.camera.lookAt(this.lookAt),this.hoverOff=new R(.35,.75,.9),this.hover=new R,this.nearCam=this.camera.position.clone().lerp(this.lookAt,.5).add(new R(0,-.35,0))}rebuildCord(){let t=new R(-1.38,-.2,0).applyMatrix4(this.handset.matrix.compose(this.handset.position,this.handset.quaternion,this.handset.scale)),e=new R(-this.cfg.width/2-.21,.55,-.4),n=new Pr(e,new R(e.x-.84,.2,.6),new R(e.x-.74,.5,-.9),t),s=150,r=[],o=new R,a=new R,c=new R;for(let l=0;l<=s;l++){let h=l/s,u=n.getPoint(h);n.getTangent(h,o),a.crossVectors(o,new R(0,1,0)),a.lengthSq()<1e-4&&a.set(1,0,0),a.normalize(),c.crossVectors(a,o).normalize();let f=Math.PI*2*22*h,d=.075*Math.min(1,h*12,(1-h)*12);r.push(u.addScaledVector(a,Math.cos(f)*d).addScaledVector(c,Math.sin(f)*d))}this.cord.geometry.dispose(),this.cord.geometry=new Qo(new Cr(r),s*2,.032,4,!1)}faceLocal(t,e,n){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let s=new tt((e-t.x)/t.w*2-1,-((n-t.y)/t.h*2-1));this.ray.setFromCamera(s,this.camera);let r=new R;this.face.getWorldPosition(r),this.plane.setFromNormalAndCoplanarPoint(this.faceN.clone(),r);let o=new R;return this.ray.ray.intersectPlane(this.plane,o)?this.face.worldToLocal(o):null}faceToScreen(t,e,n,s=.1){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let r=this.face.localToWorld(new R(e,n,s)).project(this.camera);return{x:t.x+(r.x+1)/2*t.w,y:t.y+(1-r.y)/2*t.h}}ring(t=1.6){this.ringT=Math.max(this.ringT,t)}setLift(t){this.liftTo=t}update(t){this.t+=t,this.updateFace(t),this.ringT=Math.max(0,this.ringT-t);let n=(this.ringT>0?Math.min(1,this.ringT*4):0)*(Math.floor(this.t*2.5)%2===0?1:.15);this.root.rotation.z=Math.sin(this.t*2*Math.PI*23)*.022*n,this.root.position.x=Math.sin(this.t*2*Math.PI*17)*.025*n;let s=this.lift;this.lift+=(this.liftTo-this.lift)*Math.min(1,t*7),Math.abs(this.lift-this.liftTo)<.002&&(this.lift=this.liftTo);let r=this.handset,o=Ud(Math.min(1,this.lift/.3)),a=Ud(Math.max(0,Math.min(1,(this.lift-.3)/.7)));this.hover.copy(this.handsetRest).add(this.hoverOff),r.position.copy(this.handsetRest).lerp(this.hover,o).lerp(this.nearCam,a),r.position.y+=Math.abs(Math.sin(this.t*2*Math.PI*11))*.07*n+Math.sin(this.t*2.1)*.05*o*(1-a),r.rotation.set(-.55*o-.5*a,.2*o-.2*a,.22*o-.22*a+Math.sin(this.t*2*Math.PI*23)*.03*n),(s!==this.lift||n>0)&&this.rebuildCord()}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,c=Math.round(e.y*r),l=Math.round((e.y+e.h)*r)-c,h=n.h-c-l,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,l),t.setScissor(o,h,a,l),t.setClearColor(this.bg,1),t.clear(!0,!0,!1),this.camera.aspect=a/l,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}},oh=class extends La{constructor(){super(Bd),this.phi=0,this.mode="idle",this.k=-1,this.hold=0,this.queue=[],this.pendingDigit=null,this.drag=null,this.stopHit=!1,this.lastStep=0}buildFace(t){this.dial=t;let e=this.plateTexture();Re(t,new Ir(Be.PLATE,20),new _n({map:e}),0,0,.005),Re(t,new Rn(Be.WHEEL+.04,.06,4,20),sr(Ia),0,0,.02);let n=new Ze;for(let o=0;o<=24;o++){let a=o/24*Math.PI*2,c=Math.cos(a)*Be.WHEEL,l=Math.sin(a)*Be.WHEEL;o?n.lineTo(c,l):n.moveTo(c,l)}n.holes.push(Nd(.5,12));for(let o=0;o<10;o++)n.holes.push(Nd(Be.HOLE_SIZE,8,Math.cos(rr(o)*Ui)*Be.HOLE_R,Math.sin(rr(o)*Ui)*Be.HOLE_R,Math.PI/8));let s=new Hn(n,{depth:.07,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:1,curveSegments:1});this.wheel=Re(t,s,sr(1972252,{shininess:30,specular:3813944}),0,0,.03),this.cardCanvas=document.createElement("canvas"),this.cardCanvas.width=this.cardCanvas.height=128,this.cardTex=new Zn(this.cardCanvas),this.cardTex.magFilter=Se,this.cardTex.minFilter=Ye,this.cardTex.colorSpace=me,Re(t,new Ir(.47,14),new ge({map:this.cardTex}),0,0,.13),Re(t,new Rn(.48,.045,4,14),sr(Ia),0,0,.13),this.setCard("\uBBFF\uC74C\uC758 \uCCB4\uC2A4","\xB7\xB7\xB7\xB7");let r=new se;r.rotation.z=Be.STOP*Ui,t.add(r),Re(r,new ie(.5,.11,.09),sr(Ia),Be.HOLE_R+.22,0,.16),Re(r,new ie(.1,.1,.2),sr(Ia),Be.HOLE_R+.44,0,.09)}plateTexture(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1c0c10",e.fillRect(0,0,256,256),e.fillStyle="#f1e6c8",e.beginPath(),e.arc(128,128,126,0,Math.PI*2),e.fill(),e.strokeStyle="#b89a5a",e.lineWidth=3,e.beginPath(),e.arc(128,128,118,0,Math.PI*2),e.stroke(),e.font="bold 34px Galmuri11, sans-serif",e.textAlign="center",e.textBaseline="middle";let n=Be.HOLE_R/Be.PLATE*128;for(let r=0;r<10;r++){let o=rr(r)*Ui,a=128+Math.cos(o)*n,c=128-Math.sin(o)*n;e.fillStyle="#c22a2a",e.beginPath(),e.arc(a,c,21,0,Math.PI*2),e.fill(),e.fillStyle="#fff6e0",e.fillText(String(Pa(r)),a,c+1)}let s=new Zn(t);return s.magFilter=Se,s.colorSpace=me,s}setCard(t,e){let n=t+"|"+e;if(n===this.cardKey)return;this.cardKey=n;let s=this.cardCanvas.getContext("2d");s.fillStyle="#fbf4e2",s.fillRect(0,0,128,128),s.fillStyle="#c22a2a",s.fillRect(0,40,128,3),s.fillStyle=Fd,s.textAlign="center",s.textBaseline="middle",s.font="15px Galmuri11, sans-serif",s.fillText(t,64,26),s.font="bold 30px Galmuri11, sans-serif",s.fillText(e,64,74),this.cardTex.needsUpdate=!0}local(t,e,n){let s=this.faceLocal(t,e,n);return s&&{r:Math.hypot(s.x,s.y),a:Math.atan2(s.y,s.x)/Ui}}holeAt(t){if(!t||Math.abs(t.r-Be.HOLE_R)>.32)return-1;for(let e=0;e<10;e++)if(Math.abs(Dd(t.a-rr(e)))<15)return e;return-1}project(t,e,n){return this.faceToScreen(t,Math.cos(n*Ui)*e,Math.sin(n*Ui)*e)}holeScreen(t,e){return this.project(t,Be.HOLE_R,rr(Ld(e)))}digitScreen(t,e){return this.holeScreen(t,e)}get busy(){return this.mode!=="idle"||this.queue.length>0}pointerDown(t,e,n,s){if(this.busy||!this.enabled)return!1;let r=this.local(t,e,n),o=this.holeAt(r);return o<0?!1:(this.mode="drag",this.k=o,this.phi=0,this.stopHit=!1,this.lastStep=0,this.drag={a:r.a,t0:s,moved:0},!0)}pointerMove(t,e,n){if(this.mode!=="drag")return;let s=this.local(t,e,n);if(!s||s.r<.15)return;let r=Dd(s.a-this.drag.a);this.drag.a=s.a,this.drag.moved+=Math.abs(r),this.setPhi(Math.max(0,Math.min(Ca(this.k),this.phi-r)))}pointerUp(t){if(this.mode!=="drag")return;let e=this.k,n=t-this.drag.t0<380&&this.drag.moved<10;if(this.drag=null,n){this.mode="idle",this.phi=0,this.queue.push(Pa(e));return}this.release(this.phi>=Ca(e)-14?Pa(e):null)}cancel(){this.mode==="drag"&&(this.drag=null,this.release(null))}autoDial(t){for(let e of String(t))/\d/.test(e)&&this.queue.push(Number(e))}abort(){this.queue=[],(this.mode==="auto"||this.mode==="drag")&&(this.drag=null,this.release(null)),this.pendingDigit=null}setPhi(t){let e=Math.floor(t/Be.STEP);e>this.lastStep&&this.onSound("tick"),this.lastStep=e,!this.stopHit&&this.k>=0&&t>=Ca(this.k)-.5&&(this.stopHit=!0,this.onSound("stop")),this.phi=t}release(t){this.mode="return",this.pendingDigit=t,this.lastStep=Math.floor(this.phi/Be.STEP)}updateFace(t){if(this.mode==="idle"&&this.queue.length){let e=this.queue.shift();this.mode="auto",this.k=Ld(e),this.phi=0,this.stopHit=!1,this.lastStep=0}if(this.mode==="auto"){let e=Ca(this.k);this.phi<e?this.setPhi(Math.min(e,this.phi+560*t)):(this.hold+=t)>.12&&(this.hold=0,this.release(Pa(this.k)))}else if(this.mode==="return"){let e=Math.max(0,this.phi-330*t),n=Math.ceil(e/Be.STEP);if(this.pendingDigit!==null&&n<this.lastStep&&this.onSound("pulse"),this.lastStep=Math.min(this.lastStep,n),this.phi=e,e<=0){this.mode="idle",this.k=-1;let s=this.pendingDigit;this.pendingDigit=null,s!==null&&this.onDigit(s)}}this.wheel.rotation.z=-this.phi*Ui}},rh=["1","2","3","4","5","6","7","8","9","*","0","#"],Od={2:"ABC",3:"DEF",4:"GHI",5:"JKL",6:"MNO",7:"PQRS",8:"TUV",9:"WXYZ",0:"OPER"},kd={kind:"push",label:"\uBC84\uD2BC\uC2DD",body:3108723,bodyDark:1786952,cord:1786952,width:3.3,profile:[[-1.7,0],[2.15,0],[2.2,.28],[-.05,1.95],[-1.35,1.95],[-1.75,1.3]],cam:{dist:9.6,up:1.25,side:1.4,look:.55},key:.43,gap:.12,depth:.12,keyColor:15853256,bezel:1972764,card:{w:1.5,h:.42},font:"bold 38px Galmuri11, sans-serif",small:!0,ink:"#2a1414",sub:"#b3262a",keyBg:"#f1e6c8"},Hd={kind:"big",label:"\uD070 \uAE00\uC528",body:15327695,bodyDark:12103062,cord:9076848,width:3.7,profile:[[-2.1,0],[2.6,0],[2.65,.25],[-.45,1.95],[-1.75,1.95],[-2.15,1.3]],cam:{dist:11.6,up:1.2,side:1.5,look:.5},key:.62,gap:.1,depth:.16,keyColor:16777215,bezel:2502714,card:{w:2.06,h:.5,lcd:!0},font:"bold 56px Galmuri11, sans-serif",small:!1,ink:"#111111",sub:"#c22a2a",keyBg:"#ffffff"},Da=class extends La{constructor(t){super(t),this.queue=[],this.auto=null,this.pressed=null,this.labelsOk=!1}buildFace(t){let e=this.cfg,n=e.key+e.gap,s=3*e.key+2*e.gap,r=4*e.key+3*e.gap,a=this.faceLen/2-.14-e.card.h/2,c=a-e.card.h/2-.16;this.keys=rh.map((y,m)=>{let p=Math.floor(m/3),x=(m%3-1)*n,v=c-e.key/2-p*n;return{label:y,digit:/\d/.test(y)?Number(y):null,x,y:v,down:0,target:0}});let l=c-r/2;Re(t,new ie(s+.24,r+.24,.05),Jn(e.bezel),0,l,0);let h=e.key*.2,u=e.key/2,f=new Ze;f.moveTo(-u+h,-u),f.lineTo(u-h,-u),f.lineTo(u,-u+h),f.lineTo(u,u-h),f.lineTo(u-h,u),f.lineTo(-u+h,u),f.lineTo(-u,u-h),f.lineTo(-u,-u+h),f.closePath();let d=new Hn(f,{depth:e.depth,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:1,curveSegments:1}),g=sr(e.keyColor,{shininess:50,specular:6314056});this.labelCanvas=document.createElement("canvas"),this.labelCanvas.width=64*3,this.labelCanvas.height=64*4,this.labelTex=new Zn(this.labelCanvas),this.labelTex.colorSpace=me,this.labelTex.minFilter=Ye,this.labelTex.magFilter=Ye;for(let y of this.keys){let m=new se;m.position.set(y.x,y.y,.03),t.add(m),y.g=m,Re(m,d,g);let p=rh.indexOf(y.label),_=p%3,x=Math.floor(p/3),v=new $n(e.key*.92,e.key*.92),S=v.attributes.uv;for(let E=0;E<S.count;E++)S.setXY(E,(_+.04+S.getX(E)*.92)/3,1-(x+.04+(1-S.getY(E))*.92)/4);Re(m,v,new ge({map:this.labelTex}),0,0,e.depth+.032)}this.drawLabels(),this.cardCanvas=document.createElement("canvas"),this.cardCanvas.width=256,this.cardCanvas.height=Math.round(256*e.card.h/e.card.w),this.cardTex=new Zn(this.cardCanvas),this.cardTex.colorSpace=me,this.cardTex.minFilter=Ye,Re(t,new ie(e.card.w+.16,e.card.h+.16,.06),Jn(e.bezel),0,a,0),Re(t,new $n(e.card.w,e.card.h),new ge({map:this.cardTex}),0,a,.035),this.setCard("\uBBFF\uC74C\uC758 \uCCB4\uC2A4","\xB7\xB7\xB7\xB7"),this.padRect={x0:-s/2,x1:s/2,y0:c-r,y1:c}}drawLabels(){let t=this.cfg,e=this.labelCanvas.getContext("2d");e.fillStyle=t.keyBg,e.fillRect(0,0,192,256),e.textAlign="center",e.textBaseline="middle",rh.forEach((n,s)=>{let r=s%3*64+32,o=Math.floor(s/3)*64+32,a=n==="*"||n==="#";e.fillStyle=a?t.sub:t.ink,e.font=a?t.font.replace(/\d+px/,l=>Math.round(parseInt(l)*.8)+"px"):t.font;let c=t.small&&Od[n];e.fillText(n,r,o-(c?6:1)),c&&(e.fillStyle=t.sub,e.font="10px Galmuri9, sans-serif",e.fillText(Od[n],r,o+20))}),this.labelTex.needsUpdate=!0}setCard(t,e){let n=t+"|"+e;if(n===this.cardKey)return;this.cardKey=n;let s=this.cfg,r=this.cardCanvas,o=r.getContext("2d"),a=r.width,c=r.height;if(o.textAlign="left",o.textBaseline="middle",s.card.lcd){o.fillStyle="#9fb88a",o.fillRect(0,0,a,c),o.fillStyle="rgba(40,60,30,0.12)";for(let l=0;l<c;l+=4)o.fillRect(0,l,a,1);o.fillStyle="#1e2a16",o.font="12px Galmuri11, sans-serif",o.fillText(t,10,14),o.textAlign="right",o.font="bold 34px Galmuri11, sans-serif",o.fillText(e,a-12,c/2+8)}else o.fillStyle="#fbf4e2",o.fillRect(0,0,a,c),o.fillStyle="#c22a2a",o.fillRect(0,22,a,2),o.fillStyle=Fd,o.font="13px Galmuri11, sans-serif",o.fillText(t,10,11),o.textAlign="center",o.font="bold 30px Galmuri11, sans-serif",o.fillText(e,a/2,24+(c-24)/2);this.cardTex.needsUpdate=!0}keyAt(t){if(!t)return null;let e=this.cfg.key/2+this.cfg.gap/2;return this.keys.find(n=>Math.abs(t.x-n.x)<=e&&Math.abs(t.y-n.y)<=e)||null}digitScreen(t,e){let n=this.keys.find(s=>s.label===String(e));return this.faceToScreen(t,n.x,n.y,this.cfg.depth+.05)}get busy(){return!!this.auto||this.queue.length>0}press(t){this.pressed=t,t.target=1,this.onSound("dtmf",t.label)}pointerDown(t,e,n){if(this.busy||!this.enabled||this.pressed)return!1;let s=this.keyAt(this.faceLocal(t,e,n));return s?(this.press(s),!0):!1}pointerMove(t,e,n){this.pressed&&this.keyAt(this.faceLocal(t,e,n))!==this.pressed&&(this.pressed.target=0,this.pressed=null)}pointerUp(){let t=this.pressed;t&&(this.pressed=null,t.target=0,t.digit!==null&&this.onDigit(t.digit))}cancel(){this.pressed&&(this.pressed.target=0,this.pressed=null)}autoDial(t){for(let e of String(t))/\d/.test(e)&&this.queue.push(e)}abort(){this.queue=[],this.auto&&(this.auto.k.target=0,this.auto=null),this.cancel()}updateFace(t){if(!this.labelsOk&&this.t>.3&&document.fonts?.check?.(this.cfg.font)&&(this.labelsOk=!0,this.drawLabels(),this.cardKey=""),!this.auto&&this.queue.length&&!this.pressed){let e=this.keys.find(n=>n.label===this.queue[0]);this.queue.shift(),this.auto={k:e,t:0},e.target=1,this.onSound("dtmf",e.label)}if(this.auto){let e=this.auto;e.t+=t,e.t>.14&&e.k.target&&(e.k.target=0,e.k.digit!==null&&this.onDigit(e.k.digit)),e.t>.3&&(this.auto=null)}for(let e of this.keys)e.down+=(e.target-e.down)*Math.min(1,t*30),e.g.position.z=.03-e.down*this.cfg.depth*.7}},or=["rotary","push","big"],ah={rotary:Bd.label,push:kd.label,big:Hd.label};function zd(i){return i==="push"?new Da(kd):i==="big"?new Da(Hd):new oh}var Ce=null;function Ua(){if(!Ce)try{Ce=new(window.AudioContext||window.webkitAudioContext)}catch{return}Ce.state==="suspended"&&Ce.resume()}function Jt(i,t,{type:e="square",gain:n=.08,slide:s=0,delay:r=0}={}){if(!Ce)return;let o=Ce.currentTime+r,a=Ce.createOscillator(),c=Ce.createGain();a.type=e,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),o+t),c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(c).connect(Ce.destination),a.start(o),a.stop(o+t+.02)}function Mn(i,t=.1,e=0){if(!Ce)return;let n=Ce.currentTime+e,s=Ce.createBuffer(1,Ce.sampleRate*i,Ce.sampleRate),r=s.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*(1-l/r.length);let o=Ce.createBufferSource();o.buffer=s;let a=Ce.createGain();a.gain.value=t;let c=Ce.createBiquadFilter();c.type="lowpass",c.frequency.value=900,o.connect(c).connect(a).connect(Ce.destination),o.start(n)}function Ni(i,t,{type:e="sine",gain:n=.03,delay:s=0}={}){if(!Ce)return;let r=Ce.currentTime+s,o=Ce.createOscillator(),a=Ce.createGain();o.type=e,o.frequency.setValueAtTime(i,r),a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(n,r+.015),a.gain.setValueAtTime(n,r+t-.02),a.gain.linearRampToValueAtTime(1e-4,r+t),o.connect(a).connect(Ce.destination),o.start(r),o.stop(r+t+.02)}var Gt={dialTick(){Mn(.012,.08),Jt(2600,.012,{type:"square",gain:.015})},dialPulse(){Mn(.02,.16),Jt(820,.02,{type:"square",gain:.03})},dialStop(){Mn(.04,.2),Jt(170,.06,{type:"triangle",gain:.08})},dtmf(i){let t=["1","2","3","4","5","6","7","8","9","*","0","#"].indexOf(String(i));t<0||(Mn(.015,.1),Ni([697,770,852,941][Math.floor(t/3)],.16,{gain:.02}),Ni([1209,1336,1477][t%3],.16,{gain:.02}))},offHook(){Mn(.05,.22),Jt(240,.05,{type:"triangle",gain:.07}),Ni(350,.6,{gain:.012,delay:.08}),Ni(440,.6,{gain:.012,delay:.08})},hangUp(){Mn(.06,.28),Jt(130,.09,{type:"triangle",gain:.1})},ringback(){Ni(440,1,{gain:.025}),Ni(480,1,{gain:.025})},busy(){for(let i=0;i<4;i++)Ni(480,.5,{gain:.025,delay:i}),Ni(620,.5,{gain:.025,delay:i})},ring(){for(let i=0;i<2;i++)for(let t=0;t<13;t++){let e=i*.8+t*.045;Jt(t%2?1320:1580,.09,{type:"triangle",gain:.035,delay:e}),Jt(t%2?2640:3160,.04,{type:"sine",gain:.012,delay:e})}},pickUp(){Mn(.05,.25),Jt(300,.06,{type:"triangle",gain:.08}),Jt(660,.08,{type:"sine",gain:.03,delay:.08})},move(){Mn(.06,.18),Jt(180,.05,{type:"triangle",gain:.1})},capture(){Jt(220,.15,{type:"sawtooth",gain:.025,slide:160}),Mn(.16,.45,.17),Jt(70,.28,{type:"sine",gain:.22,slide:-40,delay:.17}),Jt(140,.12,{type:"square",gain:.07,slide:-90,delay:.17}),Jt(1400,.5,{type:"triangle",gain:.03,slide:-1100,delay:.24})},castle(){Gt.move(),setTimeout(()=>Gt.move(),90)},check(){Jt(880,.08,{gain:.05}),Jt(880,.08,{gain:.05,delay:.12})},select(){Jt(660,.03,{type:"triangle",gain:.04})},bad(){Jt(200,.25,{type:"sawtooth",gain:.06,slide:-120})},late(){Jt(300,.2,{type:"triangle",gain:.06,slide:-100})},halt(){Mn(.07,.3),Jt(150,.22,{type:"square",gain:.08,slide:-50}),Jt(300,.12,{type:"sawtooth",gain:.04,delay:.02})},revive(){for(let i=0;i<14;i++)Jt(1400-i*55+i%2*180,.03,{type:"square",gain:.025,delay:i*.07});[880,1175,1568].forEach((i,t)=>Jt(i,.12,{type:"triangle",gain:.05,delay:1.1+t*.06}))},rewind(){for(let i=0;i<22;i++)Jt(900+i%3*260-i*18,.035,{type:"sawtooth",gain:.022,delay:i*.055})},vanish(){Jt(400,.3,{type:"sine",gain:.06,slide:-350})},shatter(){Mn(.18,.35),Jt(160,.2,{type:"sawtooth",gain:.07,slide:-110});for(let i=0;i<7;i++)Jt(1400+Math.random()*2200,.05,{type:"triangle",gain:.025,delay:.04+i*.035+Math.random()*.02})},start(){Jt(392,.1,{gain:.06}),Jt(523,.1,{gain:.06,delay:.1}),Jt(659,.25,{gain:.06,delay:.2})},zoomDance(i=118,t=8){let e=60/i,n=[55,55,65.4,73.4,82.4,73.4,98,110];for(let s=0;s<t;s++){let r=s*e;Jt(150,.14,{type:"sine",gain:.18,slide:-110,delay:r}),Mn(.03,.05,r+e/2),Jt(n[s%n.length],e*.45,{type:"sawtooth",gain:.035,delay:r}),(s===1||s===7)&&(Mn(.18,.22,r),Jt(880,.12,{type:"square",gain:.04,slide:600,delay:r}))}Jt(523,.12,{gain:.05,delay:t*e}),Jt(784,.25,{gain:.05,delay:t*e+.1})},win(){[523,659,784,1046].forEach((i,t)=>Jt(i,.2,{gain:.06,delay:t*.12}))},lose(){[392,349,311,261].forEach((i,t)=>Jt(i,.25,{type:"triangle",gain:.06,delay:t*.15}))},ui(){Jt(520,.03,{type:"triangle",gain:.04})},secret(){Jt(90,.06,{type:"sine",gain:.03})}};var Na=class{constructor(t,e){this.out=t,this.ctx=t.getContext("2d",{alpha:!1}),this.layers=e,this.tmp=new Map}resize(t,e,n=window.devicePixelRatio||1){let s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n));this.out.width!==s&&(this.out.width=s),this.out.height!==r&&(this.out.height=r)}draw(){let{ctx:t,out:e}=this;t.fillStyle="#000",t.fillRect(0,0,e.width,e.height);for(let n of this.layers){if(n.skip)continue;let s=n.width,r=n.height;if(!s||!r)continue;let o=e.width/s,a=e.height/r,c=f=>Math.abs(f-Math.round(f))<1e-6;if(c(o)&&c(a)){t.imageSmoothingEnabled=!1,t.drawImage(n,0,0,e.width,e.height);continue}let l=Math.max(1,Math.ceil(Math.max(o,a)-1e-6)),h=this.tmp.get(n);h||(h=document.createElement("canvas"),this.tmp.set(n,h)),(h.width!==s*l||h.height!==r*l)&&(h.width=s*l,h.height=r*l);let u=h.getContext("2d");u.imageSmoothingEnabled=!1,u.clearRect(0,0,h.width,h.height),u.drawImage(n,0,0,h.width,h.height),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="low",t.drawImage(h,0,0,e.width,e.height)}}get integer(){let t=this.out.width/(this.layers[1]?.width||this.layers[0].width);return Math.abs(t-Math.round(t))<1e-6}};var $y="v0.4";function Gd(i,t,{online:e=null,settings:n=!0,tagline:s="\uAC19\uC740 WiFi \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694",text3d:r=!1}={}){let o=i.pal,a=i.ctx.createLinearGradient(0,0,0,160);a.addColorStop(0,"rgba(0,0,0,0.5)"),a.addColorStop(1,"rgba(0,0,0,0)"),i.ctx.fillStyle=a,i.ctx.fillRect(0,0,At,160),i.frame(),r||(i.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",At/2,52,{scale:3,font:14}),i.letter("FAITH CHESS",At/2,112,{scale:1,font:9,spacing:3}));let c=408;i.rect(14,c,At-28,62,"rgba(0,0,0,0.72)"),i.text(s,At/2,c+6,{font:9,align:"center"}),Math.floor(t/500)%2===0&&i.text("\uD654\uBA74\uC744 \uB204\uB974\uBA74 \uC2DC\uC791\uD569\uB2C8\uB2E4",At/2,c+20,{font:11,color:o.accentHi,align:"center"});let l=438;i.hLine(30,l,At-60),i.text("COPYRIGHT 2026",34,l+6,{font:9,color:o.accent}),i.text($y,At-34,l+6,{font:9,color:o.accent,align:"right"}),e!==null&&i.text(e?"\u25CF":"\u25CB",16,462,{font:9,color:e?ee.green:o.dim}),n&&i.button("settings",At-50,12,38,16,"\uC124\uC815",{font:9})}function Wd(i,t,e){let n=[],s=i.status==="playing";if(i.lastMove&&(n.push({sq:i.lastMove.from,color:"#f2c14e",opacity:.22}),n.push({sq:i.lastMove.to,color:"#f2c14e",opacity:.32})),t.sel!=null){n.push({sq:t.sel,color:"#7fe9ff",opacity:.5});for(let r of t.legal)n.push({sq:r.to,color:r.capture?"#ff5a4a":"#7ad17a",opacity:.42})}if(i.check&&s){let r=i.pieces.find(o=>o.type==="k"&&o.color===i.turn);r&&n.push({sq:r.sq,color:"#ff2a2a",opacity:.35+Math.sin(e/120)*.15})}return n}function Zy(i){let t=i.result||{},e=t.winner===i.you,n=!t.winner,s=n?"\uBB34\uC2B9\uBD80":e?"\uC2B9\uB9AC!":"\uD328\uBC30\u2026",r={checkmate:"\uCCB4\uD06C\uBA54\uC774\uD2B8",stalemate:"\uC2A4\uD14C\uC77C\uBA54\uC774\uD2B8",insufficient:"\uAE30\uBB3C \uBD80\uC871",fifty:"50\uC218 \uADDC\uCE59",resign:e?"\uC0C1\uB300 \uAE30\uAD8C":"\uAE30\uAD8C",disconnect:e?"\uC0C1\uB300 \uC811\uC18D \uC885\uB8CC":"\uC811\uC18D \uC885\uB8CC",fouls:e?"\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C":"\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C",bare:e?"\uBC18\uCE59 \uC801\uBC1C \xB7 \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC74C":"\uBC18\uCE59 \uC801\uBC1C \xB7 \uD0B9\uB9CC \uB0A8\uC74C"}[t.result]||"";return{head:s,why:r,won:e,draw:n}}function qd(i,t,e,n,s,r){let o=i.pal,a=e.you,c=a==="w"?"b":"w",l=e.status==="playing";if(t&&!t.zoomFx&&t.squareToScreen){let _=[56,63,0,7].map(v=>t.squareToScreen(v).y),x=Math.abs(t.squareToScreen(56).x-t.squareToScreen(63).x)/14;i.boardTop=Math.round(Math.min(..._)-x)}Ky(i.boardTop??108),i.vignette(),t&&t.flash>0&&i.rect(0,0,At,Je,`rgba(255,248,230,${(t.flash*.7).toFixed(3)})`),i.rect(0,0,At,56,"rgba(0,0,0,0.5)"),i.frame();let u=((_,x,v)=>{if(i.measure(_,x)<=v)return _;let S=_;for(;S.length>1&&i.measure(S+"\u2026",x)>v;)S=S.slice(0,-1);return S+"\u2026"})(e.names[c]||"?","11b",64);i.text(`\uC0C1\uB300 \xB7 ${c==="w"?"\uBC31":"\uD751"}`,20,10,{font:9,color:o.accent}),i.text(u,20,21,{font:"11b",color:e.connected[c]?o.ink:o.dim}),i.text(e.connected[c]?"\u25CF":"\u25CB",24+i.measure(u,"11b"),22,{font:9,color:e.connected[c]?ee.green:ee.warn}),Vd(i,20,38,e.caught?.[c]||0),jy(i,e,s),i.button("suspect",184,10,74,28,"\uC758\uC2EC",{style:"danger",font:14,disabled:!l||!!e.pending}),i.text(`\uC81C ${e.round}\uAD6D \xB7 \uBC29 ${e.code}`,256,42,{font:9,color:o.dim,align:"right"});let f=null;n.online?l&&!e.connected[c]&&(f=["\uC0C1\uB300 \uC5F0\uACB0 \uB04A\uAE40 \xB7 30\uCD08 \uC548\uC5D0 \uC548 \uC624\uBA74 \uC2B9\uB9AC",ee.warn]):f=["\uC5F0\uACB0\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",ee.warn],f&&(i.panel(10,60,At-20,18,{fill:"rgba(10,6,8,0.9)",border:f[1],shadow:!1}),i.text(f[0],At/2,64,{font:9,align:"center",color:f[1]})),i.plaque(6,380,At-12,94);let d=e.names[a]||"?",g=`\uB098 \xB7 ${a==="w"?"\uBC31":"\uD751"}`;if(i.text(g,16,389,{font:9,color:o.accent}),Vd(i,16+i.measure(g,9)+10,389,e.caught?.[a]||0),i.text(d,16,400,{font:"11b"}),i.text(e.connected[a]?"\u25CF":"\u25CB",20+i.measure(d,"11b"),401,{font:9,color:ee.green}),l&&i.text(e.danced?.[a]?"\uC90C \uB304\uC2A4 \uC500":"\uB0B4 \uD0B9 \uAFB9: \uC90C \uB304\uC2A4",256,389,{font:9,align:"right",color:e.danced?.[a]?o.dim:ee.gold}),l){let _=e.turn===a,x=e.check&&_?ee.warn:_?o.accent:o.lineLo;i.panel(150,404,106,18,{fill:_?o.btnPrimary:"#14121a",border:x,shadow:!1});let v=_?e.check?"\uCCB4\uD06C! \uB0B4 \uCC28\uB840":"\uB0B4 \uCC28\uB840":e.check?"\uC0C1\uB300 \uCCB4\uD06C":"\uC0C1\uB300 \uCC28\uB840";i.text(v,203,407,{font:11,align:"center",color:e.check&&_?ee.warn:_?o.accentHi:o.dim})}else i.text("\uB300\uAD6D \uC885\uB8CC",203,407,{font:11,align:"center",color:o.dim});let y=Math.max(0,e.eraseReadyAt-r),m=y<=0&&l;if(i.text("\uC9C0\uC6B0\uAE30",16,428,{font:9,color:o.accent}),i.bar(52,429,156,8,l?1-y/Ae.ERASE_COOLDOWN_MS:0,m?Math.floor(s/250)%2?ee.cyan:"#4fb6cc":"#6a3a2a"),i.text(m?"\uC900\uBE44\uB428":l?`${Math.ceil(y/1e3)}\uCD08`:"-",256,428,{font:9,align:"right",color:m?ee.cyan:o.dim}),i.text("\uC0C1\uB300 \uB9D0\uC744 \uAE38\uAC8C \uB20C\uB800\uB2E4 \uB5BC\uBA74 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4",16,442,{font:9,color:o.dim}),i.button("settings",14,455,40,14,"\uC124\uC815",{font:9}),l&&(n.confirmResign?(i.text("\uC815\uB9D0 \uAE30\uAD8C?",128,457,{font:9,color:ee.warn,align:"right"}),i.button("resign:yes",134,455,36,14,"\uC608",{font:9,style:"danger"}),i.button("resign:no",176,455,80,14,"\uC544\uB2C8\uC624",{font:9})):i.button("resign",216,455,40,14,"\uAE30\uAD8C",{font:9})),n.grab){let _=Math.min(1,(performance.now()-n.grab.t0p)/Ae.LONG_PRESS_MS),x=i.ctx,v=n.grab.x,S=n.grab.y-22;x.strokeStyle=_>=1?ee.cyan:"rgba(255,255,255,0.7)",x.lineWidth=2,x.beginPath(),x.arc(v,S,8,-Math.PI/2,-Math.PI/2+_*Math.PI*2),x.stroke(),_>=1&&i.text("\uB5BC\uBA74 \uC9C0\uC6C0",v,S-22,{font:9,align:"center",color:ee.cyan})}if(n.danceHold){let _=Math.min(1,(performance.now()-n.danceHold.t0p)/Ae.LONG_PRESS_MS),x=i.ctx,v=n.danceHold.x,S=n.danceHold.y-22;x.strokeStyle=_>=1?ee.gold:"rgba(255,255,255,0.7)",x.lineWidth=2,x.beginPath(),x.arc(v,S,8,-Math.PI/2,-Math.PI/2+_*Math.PI*2),x.stroke(),_>=1&&i.text("\uB5BC\uBA74 \uC90C \uB304\uC2A4!",v,S-22,{font:9,align:"center",color:ee.gold})}let p=qr;if(i_(i,n.toasts,s,f?82:60,Math.max(f?96:74,(i.boardTop??108)-2),[{x:8,w:p.x-11},{x:p.x+p.w+3,w:At-8-(p.x+p.w+3)}]),e.pending?.kind==="pick"){i.dim(.5),i.plaque(14,146,At-28,168),i.text("\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?",At/2,160,{font:"11b",align:"center"});let _=Math.max(0,e.pending.deadline-r);i.bar(28,180,At-56,6,_/Ae.PICK_TIMEOUT_MS,_<3e3?ee.warn:o.accent),e.pending.choices.forEach((x,v)=>{let S=23+v*46,E=194,T="pick:"+x;i.button(T,S,E,40,58,"",{font:9});let I=i.pressedId===T?1:0,M=t?.pieceIcon?.(x,a,34);i.rect(S+3+I,E+4+I,34,34,"rgba(255,236,200,0.13)"),M&&i.ctx.drawImage(M,S+3+I,E+4+I,34,34),i.text(mn[x],S+20+I,E+42+I,{font:9,align:"center"})}),i.text("\uB9DE\uD788\uBA74 \uBC18\uCE59 \uD398\uB110\uD2F0: \uC0C1\uB300\uC758 \uAC19\uC740",At/2,262,{font:9,align:"center",color:o.dim}),i.text("\uB4F1\uAE09 \uB9D0 \uD558\uB098\uAC00 \uC0B0\uC0B0\uC870\uAC01 \uB0A9\uB2C8\uB2E4",At/2,275,{font:9,align:"center",color:o.dim}),i.text("\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C\uBA74 \uC0C1\uB300 \uD328\uBC30",At/2,288,{font:9,align:"center",color:o.dim})}else if(n.promo)i.dim(.4),i.plaque(30,180,At-60,84),i.text("\uC2B9\uAE09\uD560 \uB9D0\uC744 \uACE0\uB974\uC138\uC694",At/2,194,{font:11,align:"center"}),["q","r","b","n"].forEach((_,x)=>i.button("promo:"+_,38+x*49,214,44,34,mn[_],{font:9}));else if(e.status==="over"){let _=Zy(e);i.dim(.55),i.plaque(25,150,At-50,160),_.won?i.letter(_.head,At/2,164,{scale:2,font:14}):i.bigText(_.head,At/2,166,{scale:2,font:14,color:_.draw?o.ink:ee.warn}),i.text(_.why,At/2,210,{font:11,align:"center"});let x=e.rematchVotes[a];e.rematchVotes[c]&&!x&&i.text("\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4",At/2,232,{font:9,align:"center",color:o.accentHi}),x&&i.text("\uC0C1\uB300\uC758 \uC751\uB2F5\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911\u2026",At/2,232,{font:9,align:"center",color:o.dim}),i.button("rematch",37,262,94,28,"\uC7AC\uB300\uACB0",{style:"primary",disabled:x||!e.connected[c]}),i.button("leave",139,262,94,28,"\uB098\uAC00\uAE30")}n.rewindFx&&Qy(i,n.rewindFx,performance.now()),n.bubble&&n_(i,n.bubble,performance.now())}var qr={x:99,y:0,w:72,h:104};function Ky(i){qr.h=Math.max(56,Math.min(130,Math.round(i)-2))}function uh(){let i=qr;return{x:i.x+4,y:i.y+4,w:i.w-8,h:i.h-8}}function Jy(){let i=qr;return[i.x+i.w/2,i.y+i.h]}function jy(i,t,e){let n=i.pal,s=qr,r=i.ctx,o=t.status==="playing"?t.turn:t.status==="over"?t.result?.winner:null;i.rect(s.x-1,s.y-1,s.w+2,s.h+2,"#000"),i.rect(s.x,s.y,s.w,s.h,n.accent),i.rect(s.x,s.y,s.w,1,n.accentHi),i.rect(s.x,s.y,1,s.h,n.accentHi),i.rect(s.x,s.y+s.h-1,s.w,1,n.accentLo),i.rect(s.x+s.w-1,s.y,1,s.h,n.accentLo),i.rect(s.x+2,s.y+2,s.w-4,s.h-4,n.accentLo);for(let[c,l]of[[s.x+1,s.y+1],[s.x+s.w-4,s.y+1],[s.x+1,s.y+s.h-4],[s.x+s.w-4,s.y+s.h-4]])i.rect(c,l,3,3,n.accentHi);let a=uh();r.clearRect(a.x,a.y,a.w,a.h),i.box(a.x-1,a.y-1,a.w+2,a.h+2,o&&Math.floor(e/300)%2===0?n.accentHi:ee.gold)}var ch=1500;function Qy(i,t,e){let n=e-t.t0;if(n<0||n>ch)return;let s=i.ctx;s.save();let r=n<150?n/150:n>ch-300?(ch-n)/300:1;i.rect(0,56,At,324,`rgba(60,120,170,${(.16*r).toFixed(3)})`);for(let o=0;o<4;o++){let a=56+((324-(n*.45+o*83))%324+324)%324;i.rect(0,Math.round(a),At,2,`rgba(230,240,255,${(.28*r).toFixed(3)})`),i.rect(0,Math.round(a)+3,At,1,`rgba(255,90,210,${(.18*r).toFixed(3)})`)}s.globalAlpha=r*(Math.floor(n/250)%2?.75:1),i.bigText("\u25C0\u25C0 \uB418\uAC10\uAE30",16,64,{scale:1,font:14,color:"#ffffff",align:"left"}),t.undone&&i.text(`${t.undone}\uC218 \uBB34\uB984`,18,84,{font:9,color:"#cfe9ff"}),s.restore()}function Vd(i,t,e,n){let s=i.pal;i.text("\uBC18\uCE59",t,e,{font:9,color:n?ee.warn:s.dim});let r=t+i.measure("\uBC18\uCE59",9)+4;for(let o=0;o<Ae.FOUL_LIMIT;o++){let a=o<n,c=r+o*10,l=e+2;i.rect(c+1,l+1,7,7,"#000"),i.rect(c,l,7,7,a?"#d4382c":"rgba(0,0,0,0.6)"),i.box(c,l,7,7,a?"#ff8a7a":s.lineLo),a&&(i.rect(c+3,l+1,1,3,"#fff"),i.rect(c+3,l+5,1,1,"#fff"))}}var lh=1600,hh=new Map;function t_(i){let t=i.getContext("2d"),e=t.getImageData(0,0,i.width,i.height),n=e.data;for(let s=3;s<n.length;s+=4)n[s]=n[s]>=110?255:0;return t.putImageData(e,0,0),i}function e_(i,t){let e=Jy(),n=t+e.join(",");if(hh.has(n))return hh.get(n);let s="\uB3D9\uC791 \uADF8\uB9CC!",r=2,o=(i.measure(s,14)+4)*r,a=19*r,c=t==="w"?166:104,l=e[1]+58,h=o/2+12,u=a/2+10,f=15,d=W=>{let L=Math.sin(W*12.9898+(t==="w"?7.1:3.3))*43758.5453;return L-Math.floor(L)},g=[];for(let W=0;W<f*2;W++){let L=W/(f*2)*Math.PI*2-Math.PI/2+.11,O=W%2===0,z=O?1.2+d(W)*.22:.97+d(W+30)*.05,F=O?1.45+d(W+60)*.45:1;g.push([c+Math.cos(L)*h*z,l+Math.sin(L)*u*F])}let y=Math.atan2(e[1]-l,e[0]-c),m=0,p=1/0;g.forEach(([W,L],O)=>{if(O%2)return;let z=Math.abs(Math.atan2(L-l,W-c)-y);z=Math.min(z,Math.PI*2-z),z<p&&(p=z,m=O)}),g[m]=e;let _=W=>{let L=document.createElement("canvas");L.width=At,L.height=Je;let O=L.getContext("2d");return W(O),t_(L)},x=W=>{W.beginPath(),g.forEach(([L,O],z)=>z?W.lineTo(L,O):W.moveTo(L,O)),W.closePath()},v=_(W=>{x(W),W.fillStyle="#1a0a10",W.fill(),W.lineJoin="miter",W.miterLimit=12,W.lineWidth=5,W.strokeStyle="#1a0a10",W.stroke()}),S=_(W=>{x(W),W.fillStyle="#fff2a6",W.fill()}),E=document.createElement("canvas");E.width=At,E.height=Je;let T=E.getContext("2d");T.imageSmoothingEnabled=!1,T.globalAlpha=.6,T.drawImage(v,3,3),T.globalAlpha=1,T.drawImage(v,0,0),T.drawImage(S,0,0);let I=i.ctx;i.ctx=T,i.bigText(s,c,Math.round(l-a/2)+1,{scale:r,font:14,color:"#d4141e",shadow:!0}),i.ctx=I;let M=g.map(W=>W[0]),b=g.map(W=>W[1]),N={x:Math.floor(Math.min(...M))-4,y:Math.floor(Math.min(...b))-4,cx:c,cy:l};N.w=Math.ceil(Math.max(...M))+8-N.x,N.h=Math.ceil(Math.max(...b))+8-N.y;let V={sprite:E,box:N};return hh.set(n,V),V}function n_(i,t,e){let n=e-t.t0;if(n<0||n>lh)return;let{sprite:s,box:r}=e_(i,t.by),o=n<90?.6+n/90*.55:n<160?1.15-(n-90)/70*.15:1,a=n>=160&&n<420?Math.floor(n/40)%2?2:-2:0,c=i.ctx;c.save(),c.imageSmoothingEnabled=!1,c.globalAlpha=n>lh-300?(lh-n)/300:1;let l=Math.round(r.w*o),h=Math.round(r.h*o),u=Math.round(r.cx-(r.cx-r.x)*o)+a,f=Math.round(r.cy-(r.cy-r.y)*o);c.drawImage(s,r.x,r.y,r.w,r.h,u,f,l,h),c.restore()}function i_(i,t,e,n,s=106,r=[{x:10,w:At-20}]){let o=i.pal,a={secret:"#b0a49a",bad:ee.warn,late:ee.late,good:ee.green,warn:ee.gold,info:o.ink},c=11,l=0,h=n,u=!0;for(let f of t.slice().reverse()){let d=e-f.t;if(d>5e3)continue;let g=d>4e3?Math.max(0,1-(d-4e3)/1e3):1,y,m;for(;;){if(l>=r.length)return;if(y=i.lines(f.text,r[l].w-8,9),m=Math.floor((s-h+1)/c),y.length<=m||u&&h===n&&l===r.length-1||u&&m>0&&h===n)break;l++,h=n}if(m<=0)return;y.length>m&&(y=y.slice(0,m),y[m-1]=y[m-1].slice(0,-1)+"\u2026");let p=r[l];i.ctx.save(),i.ctx.globalAlpha=g*(u?1:.8);let _=Math.max(...y.map(x=>i.measure(x,9)))+8;i.rect(p.x,h-1,_,y.length*c+1,"rgba(0,0,0,0.7)"),y.forEach((x,v)=>i.text(x,p.x+4,h+v*c,{font:9,color:a[f.kind]||o.ink})),i.ctx.restore(),h+=y.length*c+3,u=!1}}function Xd(i,t){let e=i.pal;i.dim(.55),i.plaque(8,22,At-16,438),i.text("\uC2DC\uAC01 \uC124\uC815",At/2,34,{font:"11b",align:"center",color:e.accentHi}),i.text("\uBC14\uAFB8\uBA74 \uBC14\uB85C \uC801\uC6A9\uB418\uACE0 \uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4",At/2,48,{font:9,align:"center",color:e.dim}),Js.forEach((n,s)=>{let r=64+s*44;i.text(n.label,22,r,{font:9,color:e.accent}),i.button(`th:${n.id}:-1`,20,r+12,26,22,"<",{font:11}),i.text(Vf(n.id,t[n.id]),At/2,r+17,{font:11,align:"center"}),i.button(`th:${n.id}:1`,At-46,r+12,26,22,">",{font:11})}),i.button("settings:close",At/2-50,420,100,26,"\uB2EB\uAE30",{style:"primary"})}var pe=globalThis.FAITH_TARGET||"lan",je=i=>document.getElementById(i),jd=je("gl"),jn=je("ui"),s_=je("out"),ar=je("dom"),fh=je("stage"),$t=new va(jd),rt=new Ma(jn),Xr=new Na(s_,[jd,jn,$t.overlayCanvas]),Zt=new ba,A={mode:"boot",view:null,offset:0,toasts:[],sel:null,legal:[],promo:null,confirmResign:!1,pointers:new Map,grab:null,danceHold:null,zoomDance:null,btnPid:null,touchMax:0,bubble:null,rewindFx:null,info:null,roomParam:new URLSearchParams(location.search).get("room"),err:"",settings:!1,theme:Hf(),lan:null,roomT:null,roomChecked:pe!=="artifact",shareMsg:null},ph=i=>`${location.origin}${location.pathname}?room=${i}`,Oi={x:8,y:76,w:254,h:270},Qd="faith-chess-phone";function r_(){let i=new URLSearchParams(location.search).get("phone");if(or.includes(i))return i;try{let t=localStorage.getItem(Qd);if(or.includes(t))return t}catch{}return"big"}var oe=null;function mh(i){let t=oe;oe=zd(i),oe.onSound=(e,n)=>({tick:Gt.dialTick,pulse:Gt.dialPulse,stop:Gt.dialStop,dtmf:Gt.dtmf})[e]?.(n),oe.onDigit=a_,t&&(oe.setLift(t.liftTo),oe.lift=t.lift),$t.phoneStage=oe}pe==="web"&&mh(r_());var gh=()=>pe==="web"&&!A.call.digits&&!A.call.calling&&!A.call.pickup&&!A.call.ringing&&!oe.busy&&A.phonePid==null;function o_(){if(!gh())return;let i=or[(or.indexOf(oe.kind)+1)%or.length];mh(i);try{localStorage.setItem(Qd,i)}catch{}Gt.ui()}A.call={digits:"",calling:!1,ringbackT:null,ringFx:0,pickup:0,qr:!1,autoDialed:!1};A.phonePid=null;var Ha=()=>pe==="web"&&!!A.roomT&&A.mode==="lobby"&&!A.settings&&!A.call.calling&&A.call.digits.length<4,Fa=()=>pe==="web"&&A.mode==="waiting"&&!A.settings&&!A.call.qr;function tp(){!A.call.ringing||!A.roomT?.answer||(A.call.ringing=!1,Gt.pickUp(),A.roomT.answer())}function xh(){let i=je("name"),t=(i?i.value:vh()).trim().slice(0,12);try{localStorage.setItem("faith-chess-name",t)}catch{}return t}function a_(i){if(Fa()){A.call.hostHint=performance.now();return}Ha()&&(A.call.digits||(oe.setLift(.3),Gt.offHook()),A.call.digits+=i,A.err="",A.call.digits.length===4&&c_())}async function c_(){let i=A.call.digits;A.call.calling=!0,Gt.ringback(),A.call.ringbackT=setInterval(()=>Gt.ringback(),3e3);try{Zt.use(A.roomT),await A.roomT.join(i,xh()),A.call.calling&&A.mode==="lobby"&&(A.mode="waiting-join")}catch(t){console.warn(t),Yr("\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694.")}}function yh(){clearInterval(A.call.ringbackT),A.call.ringbackT=null}function Yr(i){yh();let t=A.call.calling||A.call.digits;A.call.calling=!1,A.call.digits="",oe?.abort(),oe?.setLift(0),i?(A.err=i,Gt.busy()):t&&Gt.hangUp()}function ep(){let i=getComputedStyle(document.body),t=document.body.clientWidth-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight),e=document.body.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom),n=window.devicePixelRatio||1,s=Math.max(.5,Math.min(t/Mt,e/pn)),r=Math.ceil(s*n),o=Math.floor(s*n),a=s;r/n<=s*1.025?a=r/n:o>=1&&o/n>=s*.92&&(a=o/n),document.documentElement.style.setProperty("--s",String(a)),document.documentElement.style.setProperty("--fs",String(Math.max(1,Math.round(a*n))/n)),A.scale=a,Xr.resize(Mt*a,pn*a,n),$t.setNativeSize(Xr.out.width,Xr.out.height),fh.style.transform="";let c=fh.getBoundingClientRect(),l=c.left*n%1,h=c.top*n%1;(l||h)&&(fh.style.transform=`translate(${-l/n}px, ${-h/n}px)`)}addEventListener("resize",ep);ep();var Yd=(i,t)=>i.x>=t.x&&i.x<t.x+t.w&&i.y>=t.y&&i.y<t.y+t.h;function $r(i){let t=jn.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*Mt,y:(i.clientY-t.top)/t.height*pn}}function _h(i){A.theme=i,ua(i),$t.applyTheme(i),rt.setTheme(i);let t=Br[i.frame],e=document.documentElement.style;e.setProperty("--accent",t.accent),e.setProperty("--accent-hi",t.accentHi),e.setProperty("--line",t.line),e.setProperty("--ink",t.ink),e.setProperty("--dim",t.dim),e.setProperty("--btn",t.btn),e.setProperty("--btn-primary",t.btnPrimary)}var l_=()=>Date.now()+A.offset,cr=()=>A.view?.you;function za(i){return A.view?.pieces.find(t=>t.sq===i)||null}function h_(){let i=A.view,t=new Array(64).fill(null);for(let e of i.pieces)t[e.sq]={id:e.id,type:e.type,color:e.color,shield:e.shield};return{board:t,turn:i.turn,castling:i.castling,ep:i.ep,halfmove:0,fullmove:1,lastMove:null}}function u_(i,t="info"){A.toasts.push({text:i,kind:t,t:performance.now()}),A.toasts.length>4&&A.toasts.shift()}function np(){if(location.hostname!=="localhost"&&location.hostname!=="127.0.0.1")return location.origin+"/";let i=A.info?.addresses?.[0];return i?`http://${i.address}:${A.info.port}/`:location.origin+"/"}function ip(){A.sel=null,A.legal=[],A.promo=null,A.confirmResign=!1}var $d=2400,f_={p:1,n:3,b:3,r:5,q:9};function d_(i){let t=f_[i.captured]||0;return i.promotion||t>=5?"always":(t>=3||i.check)&&(i.at*7+t*13+(i.check?5:0)+(i.by==="w"?3:0))%2===0?"maybe":null}function Ba(i,t=!1){if(!i)return;let e=performance.now();!t&&A.cheer&&e-A.cheer.t0<5e3||(A.cheer={by:i,t0:e+250})}var Zd=Ai*6e4/ga;Zt.addEventListener("error",i=>{pe==="web"&&A.call.calling?Yr(i.detail.text):A.err=i.detail.text,["waiting","lobby","waiting-join"].includes(A.mode)&&lr()});Zt.addEventListener("joined",()=>{A.err="",dh(),pe==="web"&&A.call.calling&&(yh(),Gt.pickUp())});Zt.addEventListener("ring",()=>{oe?.ring(1.7),Gt.ring(),A.call.ringFx=performance.now(),A.call.ringing=!0,A.call.ringNext=A.call.ringFx+2e3});Zt.addEventListener("ringstop",()=>{A.call.ringFx=0,A.call.ringing=!1,oe&&(oe.ringT=0)});Zt.addEventListener("toast",i=>{let{text:t,kind:e}=i.detail;u_(t,e),{secret:Gt.secret,bad:Gt.bad,late:Gt.late,warn:Gt.ui,info:Gt.ui,good:Gt.ui}[e]?.()});Zt.addEventListener("event",i=>{let{name:t,check:e,by:n,at:s}=i.detail;if(t==="start")ip(),Gt.start();else if(t==="move"||t==="capture"||t==="castle"){Gt[t](),e&&setTimeout(()=>Gt.check(),120),t==="capture"&&n&&n===cr()&&$t.attackZoom(s);let r=d_(i.detail);r&&Ba(n,r==="always")}else t==="penalty"?($t.shatter(i.detail.at),Gt.shatter(),Ba(n,!0)):t==="rewind"?(A.sel=null,A.legal=[],A.promo=null,A.rewindFx={t0:performance.now(),undone:i.detail.undone},$t.rewind(),Gt.rewind()):t==="revive"?($t.reviveAt(i.detail.at),Gt.revive()):t==="suspect"?(A.bubble={by:n,t0:performance.now()},Gt.halt()):t==="dance"?(A.zoomDance={by:n,t0:performance.now()},Gt.zoomDance(ga,Ai),$t.flash=.6):t==="vanish"&&Gt.vanish()});Zt.addEventListener("state",i=>{let t=i.detail,e=A.view;A.view=t,e?.status==="playing"&&t.status==="over"&&t.result?.winner&&Ba(t.result.winner,!0),A.offset=t.serverNow-Date.now(),$t.setSide(t.you==="w"?1:-1),t.status==="waiting"?(A.mode="waiting",dh(),$t.setMode("title")):(A.mode!=="game"&&(pe==="web"&&Zt.kind==="peer"&&t.status==="playing"&&(A.call.pickup=performance.now(),oe.setLift(1),A.call.calling||Gt.pickUp()),pe==="web"&&(yh(),A.call.calling=!1,A.call.digits="",A.call.ringFx=0,A.call.ringing=!1,A.call.qr=!1),A.mode="game",dh(),$t.clearPieces()),$t.setMode("game"),$t.sync(t.pieces,t.lastMove)),(!e||e.turn!==t.turn||e.status!==t.status||e.round!==t.round)&&(A.sel=null,A.legal=[],A.promo=null),e&&e.status==="playing"&&t.status==="over"&&(A.confirmResign=!1,t.result?.winner===t.you?Gt.win():t.result?.winner?Gt.lose():Gt.ui())});function dh(){ar.hidden=!0,ar.innerHTML=""}function Oa(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function vh(){try{return localStorage.getItem("faith-chess-name")||""}catch{return""}}function lr(){A.mode="lobby",A.settings=!1,$t.setMode("title"),ar.hidden=!1;let i=pe==="lan",t=A.roomT,e=!i&&!t;if(pe==="web")return p_();let n=(A.roomParam||"").replace(/[^A-Za-z0-9]/g,"").slice(0,4);ar.innerHTML=`
    <form class="panel" id="lobby" autocomplete="off">
      <label for="name">\uC774\uB984</label>
      <input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${Oa(vh())}">
      <div class="row">
        <button type="button" id="create" class="primary" ${e?"disabled":""}>\uBC29 \uB9CC\uB4E4\uAE30</button>
        ${i?'<button type="button" id="quick">\uBE60\uB978 \uB300\uC804</button>':""}
      </div>
      <label for="code">\uBC29 \uCF54\uB4DC\uB85C \uCC38\uAC00</label>
      <div class="row tight"><input id="code" class="code" maxlength="4" placeholder="ABCD" value="${Oa(n)}" ${e?"disabled":""}><button type="submit" id="join" class="narrow" ${e?"disabled":""}>\uCC38\uAC00</button></div>
      ${pe==="artifact"?'<label>\uC5F4\uB9B0 \uBC29</label><div id="rooms" class="rooms"></div>':""}
      <div class="row"><button type="button" id="bot">\uBD07\uACFC \uC5F0\uC2B5</button></div>
      <div class="err" id="err" role="alert">${Oa(A.err||"")}</div>
      <div class="hint" id="hint"></div>
    </form>`;let s=je("hint");i?s.textContent="\uAC19\uC740 WiFi\uC758 \uC0C1\uB300\uB294 \uC544\uB798 \uC8FC\uC18C\uB098 QR\uB85C \uC811\uC18D\uD569\uB2C8\uB2E4.":A.roomChecked?e&&pe==="web"?s.textContent="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD574 \uBCF4\uC138\uC694. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":e?s.textContent="\uB450 \uD3F0 \uB300\uC804\uC740 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD55C \uC0C1\uD0DC\uB85C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":pe==="web"?s.textContent=A.roomParam?"\uC774\uB984\uC744 \uC801\uACE0 \uCC38\uAC00\uB97C \uB204\uB974\uC138\uC694.":"\uBC29\uC744 \uB9CC\uB4E4\uBA74 \uB9C1\uD06C\uAC00 \uC0DD\uAE41\uB2C8\uB2E4. \uC0C1\uB300\uC5D0\uAC8C \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uAC70\uB098 \uCF54\uB4DC\uB97C \uC54C\uB824 \uC8FC\uC138\uC694.":s.textContent="\uD55C \uD3F0\uC5D0\uC11C \uBC29\uC744 \uB9CC\uB4E4\uACE0, \uB2E4\uB978 \uD3F0\uC5D0\uC11C\uB294 \uC5F4\uB9B0 \uBC29\uC744 \uB204\uB974\uAC70\uB098 \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694.":s.textContent="\uB450 \uD3F0 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uB294 \uC911\uC785\uB2C8\uB2E4\u2026";let r=je("name"),o=je("code"),a=()=>{let u=r.value.trim().slice(0,12);try{localStorage.setItem("faith-chess-name",u)}catch{}return u},c=u=>{je("err").textContent=u},l=u=>async(...f)=>{Ua(),A.err="",c("");try{await u(...f)}catch(d){c("\uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."),console.warn(d)}},h=l(async u=>{let f=(typeof u=="string"?u:o.value).trim().toUpperCase();if(f.length!==4){c("\uBC29 \uCF54\uB4DC 4\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694.");return}if(i){if(!Zt.online)return c("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");Zt.use(A.lan),Zt.send({type:"join",code:f,name:a()})}else Zt.use(A.roomT),await A.roomT.join(f,a()),A.mode="waiting-join",c("\uBC29\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uC911\u2026")});if(je("create").onclick=l(async()=>{if(i){if(!A.lan.online)return c("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");Zt.use(A.lan),Zt.send({type:"create",name:a()})}else Zt.use(A.roomT),await A.roomT.create(a())}),i&&(je("quick").onclick=l(async()=>{if(!A.lan.online)return c("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");Zt.use(A.lan),Zt.send({type:"quick",name:a()})})),je("bot").onclick=l(async()=>{Zt.use(new Gr).start(a()||"\uB098")}),je("lobby").onsubmit=u=>{u.preventDefault(),h()},pe==="artifact"&&t){let u=f=>{let d=je("rooms");if(d){if(d.textContent="",!f.length){let g=document.createElement("div");g.className="empty",g.textContent="\uC544\uC9C1 \uC5F4\uB9B0 \uBC29\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",d.append(g);return}for(let g of f.slice(0,4)){let y=document.createElement("button");y.type="button",y.textContent=`${g.code} \xB7 ${g.name}`,y.onclick=()=>h(g.code),d.append(y)}}};t.onLobby=u,u(t.openRooms())}A.roomParam||r.focus({preventScroll:!0})}function p_(){ar.innerHTML=`<form class="panel slim" id="lobby" autocomplete="off"><label for="name">\uC774\uB984</label><input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${Oa(vh())}" enterkeyhint="done"></form>`,je("lobby").onsubmit=i=>{i.preventDefault(),je("name").blur()},A.call.calling||oe.setLift(A.call.digits?.3:0),A.roomParam&&!A.call.autoDialed&&/^\d{4}$/.test(A.roomParam)&&(A.call.autoDialed=!0,setTimeout(()=>{Ha()&&!A.call.digits&&!oe.busy&&oe.autoDial(A.roomParam)},600))}function Va(i){A.grab&&(i==null||A.grab.pid===i)&&(clearTimeout(A.grab.timer),A.grab=null)}function Ga(i){A.danceHold&&(i==null||A.danceHold.pid===i)&&(clearTimeout(A.danceHold.timer),A.danceHold=null)}function m_(i,t){Ga();let e={pid:i.pointerId,x:t.x,y:t.y,t0:i.timeStamp,t0p:performance.now(),armed:!1,timer:null};e.timer=setTimeout(()=>{e.armed=!0,Gt.select();try{navigator.vibrate?.(25)}catch{}},Ae.LONG_PRESS_MS),A.danceHold=e}var sp=()=>A.view?.status==="playing"&&!A.view.danced?.[cr()];function g_(i,t,e,n){Va();let s={pid:e.pointerId,pieceId:t.id,sq:i,x:n.x,y:n.y,t0:e.timeStamp,t0p:performance.now(),armed:!1,timer:null};s.timer=setTimeout(()=>{s.armed=!0,Gt.select();try{navigator.vibrate?.(15)}catch{}},Ae.LONG_PRESS_MS),A.grab=s}var ka=()=>A.mode==="game"&&!A.call.pickup&&A.view?.status==="playing"&&!A.promo&&!A.settings&&A.view.pending?.kind!=="pick";jn.addEventListener("pointerdown",i=>{if(Ua(),i.button!==0)return;A.lastPointerType=i.pointerType;let t=$r(i),e=A.pointers.size===0;A.pointers.set(i.pointerId,{x:t.x,y:t.y,moved:!1}),A.touchMax=Math.max(A.touchMax,A.pointers.size);try{jn.setPointerCapture(i.pointerId)}catch{}if(e&&(rt.pressedId=rt.hit(t.x,t.y),A.btnPid=rt.pressedId?i.pointerId:null),pe==="web"&&A.mode==="lobby"&&document.activeElement?.blur?.(),oe&&A.btnPid!==i.pointerId&&Fa()&&A.call.ringing&&Yd(t,Oi)){tp();return}if(oe&&A.btnPid!==i.pointerId&&A.phonePid==null&&(Ha()||Fa())&&Yd(t,Oi)&&oe.pointerDown(Oi,t.x,t.y,i.timeStamp)){A.phonePid=i.pointerId;return}if(A.btnPid===i.pointerId||!ka())return;let n=$t.pickSquare(t.x,t.y),s=za(n);s&&s.color!==cr()&&!A.grab?g_(n,s,i,t):s&&s.color===cr()&&s.type==="k"&&sp()&&!A.danceHold&&m_(i,t)});jn.addEventListener("pointermove",i=>{if(A.phonePid===i.pointerId){let n=$r(i);oe.pointerMove(Oi,n.x,n.y);return}let t=A.pointers.get(i.pointerId);if(!t)return;let e=$r(i);Math.hypot(e.x-t.x,e.y-t.y)>6&&(t.moved=!0,Va(i.pointerId),Ga(i.pointerId))});jn.addEventListener("pointerup",i=>{if(A.phonePid===i.pointerId){A.pointers.delete(i.pointerId),A.phonePid=null,oe.pointerUp(i.timeStamp);return}let t=A.pointers.get(i.pointerId);if(A.pointers.delete(i.pointerId),!t)return;let e=$r(i),n=A.grab&&A.grab.pid===i.pointerId?A.grab:null;if(n&&(Va(i.pointerId),i.timeStamp-n.t0>=Ae.LONG_PRESS_MS||n.armed)){let r=A.view?.pieces.find(o=>o.id===n.pieceId);r&&r.color!==cr()&&ka()&&Zt.send({type:"erase",square:r.sq});return}let s=A.danceHold&&A.danceHold.pid===i.pointerId?A.danceHold:null;if(s&&(Ga(i.pointerId),i.timeStamp-s.t0>=Ae.LONG_PRESS_MS||s.armed)){sp()&&ka()&&Zt.send({type:"dance"});return}if(A.btnPid===i.pointerId){let r=rt.pressedId;rt.pressedId=null,A.btnPid=null,r&&rt.hit(e.x,e.y)===r&&v_(r);return}if(!(t.moved||A.settings)){if(A.mode==="title"){lr();return}A.mode==="game"&&x_($t.pickSquare(e.x,e.y))}});jn.addEventListener("pointercancel",i=>{A.pointers.delete(i.pointerId),A.phonePid===i.pointerId&&(A.phonePid=null,oe.cancel()),A.btnPid===i.pointerId&&(rt.pressedId=null,A.btnPid=null),Va(i.pointerId),Ga(i.pointerId)});for(let i of["touchstart","touchmove","touchend","touchcancel"])jn.addEventListener(i,t=>{t.cancelable&&t.preventDefault(),t.touches&&(A.touchMax=Math.max(A.touchMax,t.touches.length))},{passive:!1});document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("gesturechange",i=>i.preventDefault());jn.addEventListener("contextmenu",i=>{if(i.preventDefault(),A.lastPointerType&&A.lastPointerType!=="mouse"||!ka())return;let t=$r(i),e=$t.pickSquare(t.x,t.y),n=za(e);n&&n.color!==cr()&&Zt.send({type:"erase",square:e})});function x_(i){let t=A.view;if(!t||A.promo)return;if(i<0){A.sel=null,A.legal=[];return}let e=za(i);if(t.status==="playing"){if(A.sel!=null){let n=A.legal.find(s=>s.to===i);if(n){n.promotion?A.promo={from:n.from,to:n.to}:(Zt.send({type:"move",from:n.from,to:n.to}),A.sel=null,A.legal=[]);return}}if(e&&e.color===t.you&&t.turn===t.you){if(A.sel===i){A.sel=null,A.legal=[];return}A.sel=i,A.legal=ir(h_(),i),Gt.select()}else A.sel=null,A.legal=[]}}function Kd(i){A.settings=i,A.touchMax=0,A.mode==="lobby"&&(i?ar.hidden=!0:lr())}async function y_(){let i=A.view?.code;if(!i)return;let t=ph(i),e=n=>{A.shareMsg={text:n,t:performance.now()}};if(navigator.share)try{await navigator.share({title:"\uBBFF\uC74C\uC758 \uCCB4\uC2A4",text:`\uBBFF\uC74C\uC758 \uCCB4\uC2A4 \uD55C \uD310! \uBC29 \uCF54\uB4DC ${i}`,url:t}),e("\uBCF4\uB0C8\uC2B5\uB2C8\uB2E4");return}catch(n){if(n?.name==="AbortError")return}try{await navigator.clipboard.writeText(t),e("\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4")}catch{e("\uC8FC\uC18C\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD558\uC138\uC694")}}async function __(){Ua(),A.err="",Yr();try{Zt.use(A.roomT),await A.roomT.create(xh())}catch(i){console.warn(i),A.err="\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uD574 \uBCF4\uC138\uC694.",Gt.busy()}}function v_(i){if(Gt.ui(),i==="settings")return Kd(!0);if(i==="settings:close")return Kd(!1);if(i.startsWith("th:")){let[,t,e]=i.split(":");_h(zf(A.theme,t,Number(e)));return}if(i==="suspect")return Zt.send({type:"suspect"});if(i.startsWith("pick:"))return Zt.send({type:"pick",pieceType:i.slice(5)});if(i.startsWith("promo:")){Zt.send({type:"move",from:A.promo.from,to:A.promo.to,promotion:i.slice(6)}),A.promo=null,A.sel=null,A.legal=[];return}if(i==="resign"){A.confirmResign=!0;return}if(i==="resign:yes")return A.confirmResign=!1,Zt.send({type:"resign"});if(i==="resign:no"){A.confirmResign=!1;return}if(i==="rematch")return Zt.send({type:"rematch"});if(i==="share")return y_();if(i==="qr"){A.call.qr=!0;return}if(i==="answer")return tp();if(i==="qr:close"){A.call.qr=!1;return}if(i==="call:create")return __();if(i==="phone:next")return o_();if(i==="call:bot"){Yr(),Zt.use(new Gr).start(xh()||"\uB098");return}if(i==="call:clear"){A.call.calling&&(A.roomT?.close(),A.mode="lobby"),A.err="",Yr();return}(i==="leave"||i==="cancel-wait")&&(pe==="web"&&(i==="cancel-wait"&&Gt.hangUp(),A.call.ringFx=0,A.call.ringing=!1,A.call.qr=!1),Zt.leave(),A.lan&&Zt.use(A.lan),A.view=null,ip(),$t.clearPieces(),cp(),lr())}function rp(){let i=Oi;rt.ctx.clearRect(i.x,i.y,i.w,i.h),rt.box(i.x-1,i.y-1,i.w+2,i.h+2,rt.pal.accent),rt.box(i.x-2,i.y-2,i.w+4,i.h+4,"#000")}function op(i,t,e,n,s){let r=rt.pal;rt.text(i,Mt/2,e,{font:9,align:"center",color:r.accent});let o=30,a=6,c=Math.round(Mt/2-(4*o+3*a)/2);for(let l=0;l<4;l++){let h=c+l*(o+a),u=l<t.length;rt.rect(h,e+12,o,30,"#000"),rt.box(h,e+12,o,30,u?r.accentHi:r.lineLo),u?rt.bigText(t[l],h+o/2,e+14,{scale:2,font:11,color:r.accentHi}):s&&l===t.length&&Math.floor(n/400)%2===0&&rt.rect(h+9,e+35,12,2,r.accent)}}function ap(){rt.dim(.78),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",Mt/2,8,{scale:2,font:14}),rt.button("settings",Mt-50,12,38,16,"\uC124\uC815",{font:9}),rp()}function M_(i){let t=performance.now()-A.call.ringFx;if(!A.call.ringFx||t>1700)return;let e=Math.floor(t/400)%2===0,n=e?Math.round(Math.sin(i/18)*2):0;rt.bigText("\uB530\uB974\uB989!",Mt/2+n,Oi.y+8,{scale:2,font:14,color:e?ee.gold:rt.pal.ink})}function b_(i){let t=rt.pal,e=A.call;ap(),oe.setCard(e.calling?"\uAC70\uB294 \uC911":"\uC0C1\uB300 \uBC88\uD638",e.digits.padEnd(4,"\xB7")),op("\uC0C1\uB300 \uBC88\uD638",e.digits,350,i,!e.calling),e.digits&&!A.settings&&rt.button("call:clear",Mt-46,364,36,24,"\uB04A\uAE30",{font:9});let n,s=t.dim;A.roomT?A.err?(n=A.err,s=ee.warn):e.calling?(n="\uB69C\uB974\uB974\u2026 \uAC70\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),s=t.accentHi):e.digits?n=`\uB098\uBA38\uC9C0 ${4-e.digits.length}\uC790\uB9AC\uB97C \uAC70\uC138\uC694`:n=oe.kind==="rotary"?"\uC0C1\uB300 \uBC88\uD638 4\uC790\uB9AC\uB97C \uB2E4\uC774\uC5BC\uB85C \uAC70\uC138\uC694. \uAD6C\uBA4D\uC744 \uBA48\uCDA4\uC1E0\uAE4C\uC9C0 \uB3CC\uB824 \uB193\uAC70\uB098 \uD1A1 \uB204\uB974\uC138\uC694":"\uC0C1\uB300 \uBC88\uD638 4\uC790\uB9AC\uB97C \uBC84\uD2BC\uC73C\uB85C \uB204\uB974\uC138\uC694":(n="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",s=ee.warn),rt.lines(n,Mt-24,9).slice(0,2).forEach((o,a)=>rt.text(o,Mt/2,398+a*11,{font:9,align:"center",color:s})),rt.button("call:create",16,422,128,26,"\uB0B4 \uBC88\uD638 \uB9CC\uB4E4\uAE30",{style:"primary",font:11,disabled:!A.roomT||e.calling}),rt.button("call:bot",150,422,104,26,"\uBD07\uACFC \uC5F0\uC2B5",{font:11,disabled:e.calling}),rt.button("phone:next",Mt/2-60,453,120,16,`\uC804\uD654\uAE30: ${ah[oe.kind]} \u25B8`,{font:9,disabled:!gh()})}function E_(i){let t=A.view,e=rt.pal;ap(),oe.setCard("\uB0B4 \uBC88\uD638",t.code),M_(i),op("\uB0B4 \uBC88\uD638",t.code,350,i,!1);let n=A.call.ringing,s=A.call.hostHint&&performance.now()-A.call.hostHint<2600,r,o=e.dim;Zt.online?n?(r=Math.floor(i/400)%2?"\uB530\uB974\uB989! \uC804\uD654\uAE30\uB97C \uB20C\uB7EC \uBC1B\uC73C\uC138\uC694":"\uB530\uB974\uB989! \uC804\uD654\uAC00 \uC654\uC2B5\uB2C8\uB2E4",o=ee.gold):s?(r="\uC5EC\uAE30\uC11C\uB294 \uAC78 \uC218 \uC5C6\uC5B4\uC694. \uB0B4 \uBC88\uD638\uB97C \uC0C1\uB300\uC5D0\uAC8C \uC54C\uB824 \uC8FC\uC138\uC694",o=e.accentHi):r="\uC774 \uBC88\uD638\uB85C \uC804\uD654\uAC00 \uC624\uBA74 \uC6B8\uB9BD\uB2C8\uB2E4"+".".repeat(Math.floor(i/400)%4):(r="\u25CB \uAD50\uD658\uAD6D\uACFC \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",o=ee.warn),rt.text(r,Mt/2,398,{font:9,align:"center",color:o}),n?rt.button("answer",16,414,176,26,"\uBC1B\uAE30 (\uC218\uD654\uAE30 \uB4E4\uAE30)",{style:"primary",font:11}):(rt.button("share",16,414,120,26,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{style:"primary",font:11}),rt.button("qr",142,414,50,26,"QR",{font:11})),rt.button("cancel-wait",198,414,56,26,"\uB04A\uAE30",{font:11});let a=A.shareMsg;if(a&&performance.now()-a.t<3e3?rt.text(a.text,Mt/2,443,{font:9,align:"center",color:e.accentHi}):rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,Mt/2,443,{font:9,align:"center",color:e.dim}),rt.button("phone:next",Mt/2-60,455,120,16,`\uC804\uD654\uAE30: ${ah[oe.kind]} \u25B8`,{font:9,disabled:!gh()}),A.call.qr){rt.dim(.8);let c=ph(t.code);rt.panel(30,110,Mt-60,250),rt.text("\uCE74\uBA54\uB77C\uB85C \uCC0D\uC73C\uBA74 \uBC14\uB85C \uAC78\uB9BD\uB2C8\uB2E4",Mt/2,122,{font:9,align:"center",color:e.accent});let l=rt.qr(c,0,-9999,1)-2,h=Math.max(2,Math.floor(180/(l+2))),u=(l+2)*h;rt.qr(c,Math.round(Mt/2-u/2),138,h),rt.button("qr:close",Mt/2-40,330,80,22,"\uB2EB\uAE30",{font:11})}}function S_(i){rt.rect(0,0,Mt,pn,"#000"),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",Mt/2,8,{scale:2,font:14}),rp(),rt.bigText("\uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4",Mt/2,362,{scale:2,font:11,color:ee.gold});let t=A.view;t&&rt.text(`${t.names.w||"?"}(\uBC31)  vs  ${t.names.b||"?"}(\uD751)`,Mt/2,400,{font:9,align:"center",color:rt.pal.dim})}function w_(){let i=rt.pal;if(rt.dim(.25),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",Mt/2,18,{scale:2,font:14}),rt.button("settings",Mt-50,12,38,16,"\uC124\uC815",{font:9}),pe==="lan"){rt.plaque(40,330,Mt-80,136),rt.text("\uC0C1\uB300 \uC811\uC18D \uC8FC\uC18C",Mt/2,340,{font:9,color:i.accent,align:"center"});let t=np(),e=rt.qr(t,Mt/2-33,352,2);rt.text(t.replace(/^https?:\/\//,"").replace(/\/$/,""),Mt/2,356+e,{font:9,align:"center"})}rt.text(Zt.online||A.roomT?"\u25CF \uC5F0\uACB0\uB428":"\u25CB \uC5F0\uACB0 \uC911\u2026",14,462,{font:9,color:Zt.online||A.roomT?ee.green:i.dim})}function T_(i){if(pe==="web")return E_(i);let t=A.view,e=rt.pal;if(rt.dim(.35),rt.vignette(),rt.frame(),rt.plaque(20,60,Mt-40,340),rt.text("\uC0C1\uB300\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),Mt/2,74,{font:11,align:"center",color:e.dim}),rt.text("\uBC29 \uCF54\uB4DC",Mt/2,100,{font:9,align:"center",color:e.accent}),rt.letter(t.code,Mt/2,112,{scale:3,font:14}),pe==="lan"){let n=`${np()}?room=${t.code}`,s=rt.qr(n,Mt/2-41,180,2);rt.text(n.replace(/^https?:\/\//,""),Mt/2,184+s,{font:9,align:"center"})}else if(pe==="web"){let n=ph(t.code),s=rt.qr(n,Mt/2-41,166,2);rt.text(n.replace(/^https?:\/\//,""),Mt/2,170+s,{font:9,align:"center"}),rt.button("share",Mt/2-60,192+s,120,24,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{font:11,style:"primary"});let r=A.shareMsg;r&&performance.now()-r.t<3e3?rt.text(r.text,Mt/2,222+s,{font:9,align:"center",color:e.accentHi}):rt.text("\uAC19\uC774 \uC788\uC73C\uBA74 QR\uC744 \uCC0D\uC5B4\uB3C4 \uB429\uB2C8\uB2E4",Mt/2,222+s,{font:9,align:"center",color:e.dim}),Zt.online||rt.text("\u25CB \uC5F0\uACB0 \uC11C\uBC84\uC640 \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",Mt/2,312,{font:9,align:"center",color:ee.warn})}else["\uB2E4\uB978 \uD3F0\uC5D0\uC11C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uACE0",'"\uC5F4\uB9B0 \uBC29"\uC5D0\uC11C \uC774 \uBC29\uC744 \uB204\uB974\uAC70\uB098',"\uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694."].forEach((s,r)=>rt.text(s,Mt/2,200+r*14,{font:9,align:"center"})),rt.text("\uB450 \uD3F0 \uBAA8\uB450 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD574\uC57C \uD569\uB2C8\uB2E4",Mt/2,262,{font:9,align:"center",color:e.dim});rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,Mt/2,330,{font:9,color:e.dim,align:"center"}),rt.button("cancel-wait",Mt/2-40,352,80,22,"\uCDE8\uC18C",{font:11})}function cp(){let i=wa(),t=[];i.board.forEach((e,n)=>{e&&t.push({sq:n,id:e.id,type:e.type,color:e.color,shield:!1})}),$t.sync(t,null)}var Jd=performance.now();function lp(i){let t=Math.min(.1,(i-Jd)/1e3);Jd=i,A.mode==="game"&&A.view?$t.setHighlights(Wd(A.view,A,i)):$t.setHighlights([]),$t.setSelected(A.mode==="game"&&A.sel!=null?za(A.sel)?.id:null);let e=A.view;if(A.mode==="game"&&e){let n=A.bubble&&performance.now()-A.bubble.t0<1600,s=A.zoomDance?performance.now()-A.zoomDance.t0:1/0,r=!n&&s<Zd+350,o=A.cheer?performance.now()-A.cheer.t0:-1/0,a=!n&&!r&&o>=-250&&o<$d+450,c=n?A.bubble.by:r?A.zoomDance.by:a?A.cheer.by:e.status==="over"&&e.result?.winner||e.turn;$t.kingView={rect:uh(),shown:c,mode:n?"shout":r&&s<Zd?"zoom":a&&o>=0&&o<$d?"cheer":"turn"}}else $t.kingView=null;A.__freezeKing&&($t.kingView=A.__freezeKing),$t.titleView=A.mode==="title",A.call.pickup&&performance.now()-A.call.pickup>950&&(A.call.pickup=0,$t.flash=1),$t.phoneView=pe==="web"&&(["lobby","waiting-join","waiting"].includes(A.mode)||A.call.pickup)?{rect:Oi}:null,oe&&(oe.enabled=Ha()||Fa()&&!A.call.ringing),A.call.ringing&&A.mode==="waiting"&&performance.now()>=A.call.ringNext&&(oe?.ring(1.7),Gt.ring(),A.call.ringFx=performance.now(),A.call.ringNext=A.call.ringFx+2e3),$t.render(t),rt.begin(),A.mode==="title"?Gd(rt,i,{online:pe==="lan"?Zt.online:null,tagline:pe==="lan"?void 0:"\uC628\uB77C\uC778 \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694",text3d:!!$t.titleStage?.fontId}):A.call.pickup?S_(i):(A.mode==="lobby"||A.mode==="waiting-join")&&pe==="web"?b_(i):A.mode==="lobby"||A.mode==="waiting-join"?w_():A.mode==="waiting"&&A.view?T_(i):A.mode==="game"&&A.view?qd(rt,$t,A.view,{...A,online:Zt.online},i,l_()):A.mode==="boot"&&(rt.rect(0,0,Mt,pn,"#000"),rt.text("\uBD88\uB7EC\uC624\uB294 \uC911\u2026",Mt/2,pn/2-6,{align:"center",color:rt.pal.dim})),A.settings&&(Xd(rt,A.theme),rt.text(`\uD130\uCE58 \uD655\uC778: \uB3D9\uC2DC\uC5D0 \uC190\uAC00\uB77D ${A.touchMax}\uAC1C \uC778\uC2DD`,Mt/2,449,{font:9,align:"center",color:A.touchMax>=2?ee.cyan:rt.pal.dim})),Xr.draw(),requestAnimationFrame(lp)}var A_=Jl;async function hp(i){if($t.titleStage||($t.titleStage=new er),i==="hud"){$t.titleStage.setFont(null,null);return}i=Jl;try{let t=await Promise.race([fetch(`assets/title3d/${i}.json`).then(e=>e.json()),new Promise((e,n)=>setTimeout(()=>n(new Error("timeout")),4e3))]);$t.titleStage.setFont(i,t)}catch(t){console.warn("\uD0C0\uC774\uD2C0 \uAE00\uAF34",i,t)}}async function R_(){requestAnimationFrame(lp);try{await Promise.race([Promise.all(md.map(i=>document.fonts.load(i))),new Promise(i=>setTimeout(i,3e3))])}catch{}if(pe==="lan")try{A.info=await(await fetch("/api/info")).json()}catch{}$t.theme=A.theme,await $t.init(A.info?.textures||[]),_h(A.theme),cp(),await hp(new URLSearchParams(location.search).get("titlefont")||(/[#&]tf=([a-z]+)/.exec(location.hash)||[])[1]||A_),A.mode="title",pe==="lan"?(A.lan=Zt.use(new Ea),A.lan.connect(),A.roomParam&&!A.lan.token&&lr()):pe==="web"?A.roomT=Wr.available()?new Wr:null:Ra.open().then(i=>{A.roomT=i,A.roomChecked=!0,A.mode==="lobby"&&lr()})}R_();window.__dbg={app:A,scene:$t,hub:Zt,presenter:Xr,startCheer:Ba,get phone(){return oe},setPhone:mh,loadTitleFont:hp,PHONE_RECT:Oi,squareToScreen:i=>$t.squareToScreen(i),applyTheme:_h};
