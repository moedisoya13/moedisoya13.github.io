var sl="160";var Nd=0,rh=1,Od=2;var Ou=1,Fd=2,ni=3,vi=0,ln=1,We=2;var _i=0,bs=1,Gi=2,oh=3,ah=4,Bd=5,Bi=100,kd=101,Hd=102,ch=103,lh=104,zd=200,Vd=201,Gd=202,Wd=203,mc=204,gc=205,qd=206,Xd=207,Yd=208,$d=209,Zd=210,Jd=211,Kd=212,jd=213,Qd=214,tp=0,ep=1,np=2,go=3,ip=4,sp=5,rp=6,op=7,Zi=0,Ar=1,ap=2,Un=0,cp=1,lp=2,hp=3,up=4,fp=5,dp=6;var Fu=300,ws=301,Ts=302,xc=303,_c=304,Yo=306,ur=1e3,Ln=1001,yc=1002,Ee=1003,hh=1004;var Da=1005;var Xe=1006,pp=1007;var fr=1008;var yi=1009,mp=1010,gp=1011,rl=1012,Bu=1013,gi=1014,xi=1015,dr=1016,ku=1017,Hu=1018,Hi=1020,xp=1021,Dn=1023,_p=1024,yp=1025,zi=1026,As=1027,vp=1028,zu=1029,Mp=1030,Vu=1031,Gu=1033,Ua=33776,Na=33777,Oa=33778,Fa=33779,uh=35840,fh=35841,dh=35842,ph=35843,Wu=36196,mh=37492,gh=37496,xh=37808,_h=37809,yh=37810,vh=37811,Mh=37812,bh=37813,Sh=37814,Eh=37815,wh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,Ph=37821,Ba=36492,Ih=36494,Lh=36495,bp=36283,Dh=36284,Uh=36285,Nh=36286;var xo=2300,_o=2301,ka=2302,Oh=2400,Fh=2401,Bh=2402;var qu=3e3,Vi=3001,Sp=3200,Ep=3201,ol=0,wp=1,Mn="",pe="srgb",ri="srgb-linear",al="display-p3",$o="display-p3-linear",yo="linear",ye="srgb",vo="rec709",Mo="p3";var ns=7680;var kh=519,Tp=512,Ap=513,Rp=514,Xu=515,Cp=516,Pp=517,Ip=518,Lp=519,Hh=35044;var zh="300 es",vc=1035,ii=2e3,bo=2001,Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ha=Math.PI/180,Mc=180/Math.PI;function Bs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function Dp(i,t){return(i%t+t)%t}function za(i,t,e){return(1-e)*i+e*t}function Vh(i){return(i&i-1)===0&&i!==0}function bc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function er(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var j=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],T=s[2],S=s[5],w=s[8];return r[0]=o*x+a*y+c*T,r[3]=o*m+a*_+c*S,r[6]=o*p+a*v+c*w,r[1]=l*x+h*y+u*T,r[4]=l*m+h*_+u*S,r[7]=l*p+h*v+u*w,r[2]=f*x+d*y+g*T,r[5]=f*m+d*_+g*S,r[8]=f*p+d*v+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Va.makeScale(t,e)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Va=new Qt;function Yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Up(){let i=So("canvas");return i.style.display="block",i}var Gh={};function ar(i){i in Gh||(Gh[i]=!0,console.warn(i))}var Wh=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qh=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[ri]:{transfer:yo,primaries:vo,toReference:i=>i,fromReference:i=>i},[pe]:{transfer:ye,primaries:vo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$o]:{transfer:yo,primaries:Mo,toReference:i=>i.applyMatrix3(qh),fromReference:i=>i.applyMatrix3(Wh)},[al]:{transfer:ye,primaries:Mo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qh),fromReference:i=>i.applyMatrix3(Wh).convertLinearToSRGB()}},Np=new Set([ri,$o]),fe={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Np.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=zr[t].toReference,s=zr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return zr[i].primaries},getTransfer:function(i){return i===Mn?yo:zr[i].transfer}};function Ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ga(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var is,Eo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=So("canvas")),is.width=t.width,is.height=t.height;let n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=So("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ss(e[n]/255)*255):e[n]=Ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Op=0,wo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Bs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wa(s[o].image)):r.push(Wa(s[o]))}else r=Wa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fp=0,Sn=class i extends Mi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=Xe,o=fr,a=Dn,c=yi,l=i.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Bs(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vi?pe:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ur:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ur:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?Vi:qu}set encoding(t){ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Vi?pe:Mn}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Fu;Sn.DEFAULT_ANISOTROPY=1;var be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(d+1)/2,T=(p+1)/2,S=(h+f)/4,w=(u+x)/4,I=(g+m)/4;return _>v&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=w/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sc=class extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vi?pe:Mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new wo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Sc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},To=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ec=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let T=Math.sqrt(_),S=Math.atan2(T,p*y);m=Math.sin(m*S)/T,a=Math.sin(a*S)/T}let v=a*y;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qa=new P,Xh=new Gn,Wi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Gr.subVectors(this.max,nr),ss.subVectors(t.a,nr),rs.subVectors(t.b,nr),os.subVectors(t.c,nr),ui.subVectors(rs,ss),fi.subVectors(os,rs),Di.subVectors(ss,os);let e=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Di.z,Di.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Di.y,Di.x,0];return!Xa(e,ss,rs,os,Gr)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,ss,rs,os,Gr))?!1:(Wr.crossVectors(ui,fi),e=[Wr.x,Wr.y,Wr.z],Xa(e,ss,rs,os,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Kn=[new P,new P,new P,new P,new P,new P,new P,new P],Rn=new P,Vr=new Wi,ss=new P,rs=new P,os=new P,ui=new P,fi=new P,Di=new P,nr=new P,Gr=new P,Wr=new P,Ui=new P;function Xa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ui.fromArray(i,r);let a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),c=t.dot(Ui),l=e.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Bp=new Wi,ir=new P,Ya=new P,Rs=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(Ya)),this.expandByPoint(ir.copy(t.center).sub(Ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new P,$a=new P,qr=new P,di=new P,Za=new P,Xr=new P,Ja=new P,pr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$a.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),di.copy(this.origin).sub($a);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qr),a=di.dot(this.direction),c=-di.dot(qr),l=di.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($a).addScaledVector(qr,f),d}intersectSphere(t,e){jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){Za.subVectors(e,t),Xr.subVectors(n,t),Ja.crossVectors(Za,Xr);let o=this.direction.dot(Ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);let c=a*this.direction.dot(Xr.crossVectors(di,Xr));if(c<0)return null;let l=a*this.direction.dot(Za.cross(di));if(l<0||c+l>o)return null;let h=-a*di.dot(Ja);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kp,t,Hp)}lookAt(t,e,n){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),pi.crossVectors(n,mn),pi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),pi.crossVectors(n,mn)),pi.normalize(),Yr.crossVectors(mn,pi),s[0]=pi.x,s[4]=Yr.x,s[8]=mn.x,s[1]=pi.y,s[5]=Yr.y,s[9]=mn.y,s[2]=pi.z,s[6]=Yr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],T=n[15],S=s[0],w=s[4],I=s[8],M=s[12],E=s[1],N=s[5],F=s[9],O=s[13],L=s[2],B=s[6],z=s[10],J=s[14],Z=s[3],X=s[7],nt=s[11],it=s[15];return r[0]=o*S+a*E+c*L+l*Z,r[4]=o*w+a*N+c*B+l*X,r[8]=o*I+a*F+c*z+l*nt,r[12]=o*M+a*O+c*J+l*it,r[1]=h*S+u*E+f*L+d*Z,r[5]=h*w+u*N+f*B+d*X,r[9]=h*I+u*F+f*z+d*nt,r[13]=h*M+u*O+f*J+d*it,r[2]=g*S+x*E+m*L+p*Z,r[6]=g*w+x*N+m*B+p*X,r[10]=g*I+x*F+m*z+p*nt,r[14]=g*M+x*O+m*J+p*it,r[3]=y*S+_*E+v*L+T*Z,r[7]=y*w+_*N+v*B+T*X,r[11]=y*I+_*F+v*z+T*nt,r[15]=y*M+_*O+v*J+T*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+x*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,_=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,v=h*x*l-g*u*l+g*a*d-o*x*d-h*a*p+o*u*p,T=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,S=e*y+n*_+s*v+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=y*w,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*w,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*w,t[4]=_*w,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*w,t[8]=v*w,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*w,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*w,t[12]=T*w,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,_=c*h,v=c*u,T=n.x,S=n.y,w=n.z;return s[0]=(1-(x+p))*T,s[1]=(d+v)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(f+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+_)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let l=1/r,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ii){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===ii)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ii){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h,g,x;if(a===ii)g=(o+r)*u,x=-2*u;else if(a===bo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new P,Cn=new ve,kp=new P(0,0,0),Hp=new P(1,1,1),pi=new P,Yr=new P,mn=new P,Yh=new ve,$h=new Gn,Ao=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $h.setFromEuler(this),this.setFromQuaternion($h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ao.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zp=0,Zh=new P,cs=new Gn,Qn=new ve,$r=new P,sr=new P,Vp=new P,Gp=new Gn,Jh=new P(1,0,0),Kh=new P(0,1,0),jh=new P(0,0,1),Wp={type:"added"},qp={type:"removed"},tn=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Ao,n=new Gn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Qt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis(Kh,t)}rotateZ(t){return this.rotateOnAxis(jh,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis(Kh,t)}translateZ(t){return this.translateOnAxis(jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(sr,$r,this.up):Qn.lookAt($r,sr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Qn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,Vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};tn.DEFAULT_UP=new P(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new P,ti=new P,Ka=new P,ei=new P,ls=new P,hs=new P,Qh=new P,ja=new P,Qa=new P,tc=new P,Zr=!1,_s=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),ti.subVectors(n,e),Ka.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(ti),c=Pn.dot(Ka),l=ti.dot(ti),h=ti.dot(Ka),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,n,s,r,o,a,c){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),ti.subVectors(t,e),Pn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ls.subVectors(s,n),hs.subVectors(r,n),ja.subVectors(t,n);let c=ls.dot(ja),l=hs.dot(ja);if(c<=0&&l<=0)return e.copy(n);Qa.subVectors(t,s);let h=ls.dot(Qa),u=hs.dot(Qa);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ls,o);tc.subVectors(t,r);let d=ls.dot(tc),g=hs.dot(tc);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(hs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Qh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Qh,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ls,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Dp(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ec(o,r,t+1/3),this.g=ec(o,r,t),this.b=ec(o,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=$u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return fe.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Ye(Qe.r*255,0,255))*65536+Math.round(Ye(Qe.g*255,0,255))*256+Math.round(Ye(Qe.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=pe){fe.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Jr);let n=za(mi.h,Jr.h,e),s=za(mi.s,Jr.s,e),r=za(mi.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new wt;wt.NAMES=$u;var Xp=0,oi=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=bs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},me=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new P,Kr=new j,bn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hh&&(t.usage=this.usage),t}};var Ro=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Co=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ct=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Yp=0,vn=new ve,nc=new tn,us=new P,gn=new Wi,rr=new Wi,Ge=new P,ce=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?Co:Ro)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(gn.min,rr.min),gn.expandByPoint(Ge),Ge.addVectors(gn.max,rr.max),gn.expandByPoint(Ge)):(gn.expandByPoint(rr.min),gn.expandByPoint(rr.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ge.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(t,l),Ge.add(us)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new P,h[E]=new P;let u=new P,f=new P,d=new P,g=new j,x=new j,m=new j,p=new P,y=new P;function _(E,N,F){u.fromArray(s,E*3),f.fromArray(s,N*3),d.fromArray(s,F*3),g.fromArray(o,E*2),x.fromArray(o,N*2),m.fromArray(o,F*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let O=1/(x.x*m.y-m.x*x.y);isFinite(O)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(O),y.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(O),l[E].add(p),l[N].add(p),l[F].add(p),h[E].add(y),h[N].add(y),h[F].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let E=0,N=v.length;E<N;++E){let F=v[E],O=F.start,L=F.count;for(let B=O,z=O+L;B<z;B+=3)_(n[B+0],n[B+1],n[B+2])}let T=new P,S=new P,w=new P,I=new P;function M(E){w.fromArray(r,E*3),I.copy(w);let N=l[E];T.copy(N),T.sub(w.multiplyScalar(w.dot(N))).normalize(),S.crossVectors(I,N);let O=S.dot(h[E])<0?-1:1;c[E*4]=T.x,c[E*4+1]=T.y,c[E*4+2]=T.z,c[E*4+3]=O}for(let E=0,N=v.length;E<N;++E){let F=v[E],O=F.start,L=F.count;for(let B=O,z=O+L;B<z;B+=3)M(n[B+0]),M(n[B+1]),M(n[B+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new bn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tu=new ve,Ni=new pr,jr=new Rs,eu=new P,fs=new P,ds=new P,ps=new P,ic=new P,Qr=new P,to=new j,eo=new j,no=new j,nu=new P,iu=new P,su=new P,io=new P,so=new P,Bt=class extends tn{constructor(t=new ce,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ic.fromBufferAttribute(u,t),o?Qr.addScaledVector(ic,h):Qr.addScaledVector(ic.sub(e),h))}e.add(Qr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(jr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(jr,eu)===null||Ni.origin.distanceToSquared(eu)>(t.far-t.near)**2))&&(tu.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(tu),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,T=_;v<T;v+=3){let S=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);s=ro(this,p,t,n,l,h,u,S,w,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=ro(this,o,t,n,l,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,T=_;v<T;v+=3){let S=v,w=v+1,I=v+2;s=ro(this,p,t,n,l,h,u,S,w,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,v=m+2;s=ro(this,o,t,n,l,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function $p(i,t,e,n,s,r,o,a){let c;if(t.side===ln?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===vi,a),c===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(so);return l<e.near||l>e.far?null:{distance:l,point:so.clone(),object:i}}function ro(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,fs),i.getVertexPosition(c,ds),i.getVertexPosition(l,ps);let h=$p(i,t,e,n,fs,ds,ps,io);if(h){s&&(to.fromBufferAttribute(s,a),eo.fromBufferAttribute(s,c),no.fromBufferAttribute(s,l),h.uv=_s.getInterpolation(io,fs,ds,ps,to,eo,no,new j)),r&&(to.fromBufferAttribute(r,a),eo.fromBufferAttribute(r,c),no.fromBufferAttribute(r,l),h.uv1=_s.getInterpolation(io,fs,ds,ps,to,eo,no,new j),h.uv2=h.uv1),o&&(nu.fromBufferAttribute(o,a),iu.fromBufferAttribute(o,c),su.fromBufferAttribute(o,l),h.normal=_s.getInterpolation(io,fs,ds,ps,nu,iu,su,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};_s.getNormal(fs,ds,ps,u.normal),h.face=u}return h}var ee=class i extends ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function g(x,m,p,y,_,v,T,S,w,I,M){let E=v/w,N=T/I,F=v/2,O=T/2,L=S/2,B=w+1,z=I+1,J=0,Z=0,X=new P;for(let nt=0;nt<z;nt++){let it=nt*N-O;for(let dt=0;dt<B;dt++){let q=dt*E-F;X[x]=q*y,X[m]=it*_,X[p]=L,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(dt/w),u.push(1-nt/I),J+=1}}for(let nt=0;nt<I;nt++)for(let it=0;it<w;it++){let dt=f+it+B*nt,q=f+it+B*(nt+1),Q=f+(it+1)+B*(nt+1),pt=f+(it+1)+B*nt;c.push(dt,q,pt),c.push(q,Q,pt),Z+=6}a.addGroup(d,Z,M),d+=Z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=Cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zu(i){return i.getRenderTarget()===null?i.outputColorSpace:fe.workingColorSpace}var Jp={clone:Cs,merge:on},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=Zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Po=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pe=class extends Po{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mc*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ha*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,wc=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new Pe(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new Pe(ms,gs,t,e);o.layers=this.layers,this.add(o);let a=new Pe(ms,gs,t,e);a.layers=this.layers,this.add(a);let c=new Pe(ms,gs,t,e);c.layers=this.layers,this.add(c);let l=new Pe(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ps=class extends Sn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Tc=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Vi?pe:Mn),this.texture=new Ps(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ee(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:_i});r.uniforms.tEquirect.value=e;let o=new Bt(s,r),a=e.minFilter;return e.minFilter===fr&&(e.minFilter=Xe),new wc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},sc=new P,Qp=new P,tm=new Qt,In=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sc.subVectors(n,e).cross(Qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tm.getNormalMatrix(t),s=this.coplanarPoint(sc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Rs,oo=new P,gr=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-d,v-p).normalize(),n[1].setComponents(c+r,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+h,m+g,v+y).normalize(),n[3].setComponents(c-o,f-h,m-g,v-y).normalize(),n[4].setComponents(c-a,f-u,m-x,v-_).normalize(),e===ii)n[5].setComponents(c+a,f+u,m+x,v+_).normalize();else if(e===bo)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oo.x=s.normal.x>0?t.max.x:t.min.x,oo.y=s.normal.y>0?t.max.y:t.min.y,oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ju(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function em(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Wn=class i extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let _=0;_<l;_++){let v=_*u-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let _=y+l*p,v=y+l*(p+1),T=y+1+l*(p+1),S=y+1+l*p;d.push(_,v,S),d.push(v,T,S)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`
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
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
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
#endif`,e0=`struct PhysicalMaterial {
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
}`,n0=`
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`#if defined( USE_POINTS_UV )
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
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
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
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H0=`float getShadowMask() {
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,hg=`#define DISTANCE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,_g=`#define LAMBERT
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
}`,yg=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,Sg=`#define PHONG
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
}`,Eg=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Tg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:om,alphatest_pars_fragment:am,aomap_fragment:cm,aomap_pars_fragment:lm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:fm,beginnormal_vertex:dm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:ym,clipping_planes_vertex:vm,color_fragment:Mm,color_pars_fragment:bm,color_pars_vertex:Sm,color_vertex:Em,common:wm,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Um,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Om,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Zm,envmap_vertex:Bm,fog_vertex:km,fog_pars_vertex:Hm,fog_fragment:zm,fog_pars_fragment:Vm,gradientmap_pars_fragment:Gm,lightmap_fragment:Wm,lightmap_pars_fragment:qm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:Ym,lights_pars_begin:$m,lights_toon_fragment:Jm,lights_toon_pars_fragment:Km,lights_phong_fragment:jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:t0,lights_physical_pars_fragment:e0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:c0,map_fragment:l0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:f0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:x0,morphtarget_vertex:_0,normal_fragment_begin:y0,normal_fragment_maps:v0,normal_pars_fragment:M0,normal_pars_vertex:b0,normal_vertex:S0,normalmap_pars_fragment:E0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:T0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:R0,opaque_fragment:C0,packing:P0,premultiplied_alpha_fragment:I0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:U0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:B0,shadowmap_vertex:k0,shadowmask_pars_fragment:H0,skinbase_vertex:z0,skinning_pars_vertex:V0,skinning_vertex:G0,skinnormal_vertex:W0,specularmap_fragment:q0,specularmap_pars_fragment:X0,tonemapping_fragment:Y0,tonemapping_pars_fragment:$0,transmission_fragment:Z0,transmission_pars_fragment:J0,uv_pars_fragment:K0,uv_pars_vertex:j0,uv_vertex:Q0,worldpos_vertex:tg,background_vert:eg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:og,depth_vert:ag,depth_frag:cg,distanceRGBA_vert:lg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:fg,linedashed_vert:dg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:xg,meshlambert_frag:_g,meshmatcap_vert:yg,meshmatcap_frag:vg,meshnormal_vert:Mg,meshnormal_frag:bg,meshphong_vert:Sg,meshphong_frag:Eg,meshphysical_vert:wg,meshphysical_frag:Tg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ug},lt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Vn={basic:{uniforms:on([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:on([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:on([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:on([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:on([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:on([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:on([lt.points,lt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:on([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:on([lt.common,lt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:on([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:on([lt.sprite,lt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:on([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:on([lt.lights,lt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Vn.physical={uniforms:on([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var ao={r:0,b:0,g:0};function Ng(i,t,e,n,s,r,o){let a=new wt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),y=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Yo)?(h===void 0&&(h=new Bt(new ee(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Cs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=fe.getTransfer(_.colorSpace)!==ye,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Bt(new Wn(2,2),new ai({name:"BackgroundMaterial",uniforms:Cs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=fe.getTransfer(_.colorSpace)!==ye,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(ao,Zu(i)),n.buffers.color.setClear(ao.r,ao.g,ao.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function Og(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,B,z,J,Z){let X=!1;if(o){let nt=x(J,z,B);l!==nt&&(l=nt,d(l.object)),X=p(L,J,z,Z),X&&y(L,J,z,Z)}else{let nt=B.wireframe===!0;(l.geometry!==J.id||l.program!==z.id||l.wireframe!==nt)&&(l.geometry=J.id,l.program=z.id,l.wireframe=nt,X=!0)}Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,I(L,B,z,J),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,B,z){let J=z.wireframe===!0,Z=a[L.id];Z===void 0&&(Z={},a[L.id]=Z);let X=Z[B.id];X===void 0&&(X={},Z[B.id]=X);let nt=X[J];return nt===void 0&&(nt=m(f()),X[J]=nt),nt}function m(L){let B=[],z=[],J=[];for(let Z=0;Z<s;Z++)B[Z]=0,z[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:J,object:L,attributes:{},index:null}}function p(L,B,z,J){let Z=l.attributes,X=B.attributes,nt=0,it=z.getAttributes();for(let dt in it)if(it[dt].location>=0){let Q=Z[dt],pt=X[dt];if(pt===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),Q===void 0||Q.attribute!==pt||pt&&Q.data!==pt.data)return!0;nt++}return l.attributesNum!==nt||l.index!==J}function y(L,B,z,J){let Z={},X=B.attributes,nt=0,it=z.getAttributes();for(let dt in it)if(it[dt].location>=0){let Q=X[dt];Q===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let pt={};pt.attribute=Q,Q&&Q.data&&(pt.data=Q.data),Z[dt]=pt,nt++}l.attributes=Z,l.attributesNum=nt,l.index=J}function _(){let L=l.newAttributes;for(let B=0,z=L.length;B<z;B++)L[B]=0}function v(L){T(L,0)}function T(L,B){let z=l.newAttributes,J=l.enabledAttributes,Z=l.attributeDivisors;z[L]=1,J[L]===0&&(i.enableVertexAttribArray(L),J[L]=1),Z[L]!==B&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),Z[L]=B)}function S(){let L=l.newAttributes,B=l.enabledAttributes;for(let z=0,J=B.length;z<J;z++)B[z]!==L[z]&&(i.disableVertexAttribArray(z),B[z]=0)}function w(L,B,z,J,Z,X,nt){nt===!0?i.vertexAttribIPointer(L,B,z,Z,X):i.vertexAttribPointer(L,B,z,J,Z,X)}function I(L,B,z,J){if(n.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let Z=J.attributes,X=z.getAttributes(),nt=B.defaultAttributeValues;for(let it in X){let dt=X[it];if(dt.location>=0){let q=Z[it];if(q===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let Q=q.normalized,pt=q.itemSize,bt=e.get(q);if(bt===void 0)continue;let xt=bt.buffer,Ut=bt.type,zt=bt.bytesPerElement,St=n.isWebGL2===!0&&(Ut===i.INT||Ut===i.UNSIGNED_INT||q.gpuType===Bu);if(q.isInterleavedBufferAttribute){let kt=q.data,D=kt.stride,at=q.offset;if(kt.isInstancedInterleavedBuffer){for(let $=0;$<dt.locationSize;$++)T(dt.location+$,kt.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let $=0;$<dt.locationSize;$++)v(dt.location+$);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let $=0;$<dt.locationSize;$++)w(dt.location+$,pt/dt.locationSize,Ut,Q,D*zt,(at+pt/dt.locationSize*$)*zt,St)}else{if(q.isInstancedBufferAttribute){for(let kt=0;kt<dt.locationSize;kt++)T(dt.location+kt,q.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let kt=0;kt<dt.locationSize;kt++)v(dt.location+kt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let kt=0;kt<dt.locationSize;kt++)w(dt.location+kt,pt/dt.locationSize,Ut,Q,pt*zt,pt/dt.locationSize*kt*zt,St)}}else if(nt!==void 0){let Q=nt[it];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(dt.location,Q);break;case 3:i.vertexAttrib3fv(dt.location,Q);break;case 4:i.vertexAttrib4fv(dt.location,Q);break;default:i.vertexAttrib1fv(dt.location,Q)}}}}S()}function M(){F();for(let L in a){let B=a[L];for(let z in B){let J=B[z];for(let Z in J)g(J[Z].object),delete J[Z];delete B[z]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let B=a[L.id];for(let z in B){let J=B[z];for(let Z in J)g(J[Z].object),delete J[Z];delete B[z]}delete a[L.id]}function N(L){for(let B in a){let z=a[B];if(z[L.id]===void 0)continue;let J=z[L.id];for(let Z in J)g(J[Z].object),delete J[Z];delete z[L.id]}}function F(){O(),h=!0,l!==c&&(l=c,d(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:F,resetDefaultState:O,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:v,disableUnusedAttributes:S}}function Fg(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Bg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,v=o||t.has("OES_texture_float"),T=_&&v,S=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:S}}function kg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new In,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,_=y*4,v=p.clippingState||null;c.value=v,v=h(g,f,_,d);for(let T=0;T!==_;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Hg(i){let t=new WeakMap;function e(o,a){return a===xc?o.mapping=ws:a===_c&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xc||a===_c)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Tc(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Is=class extends Po{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ys=4,ru=[.125,.215,.35,.446,.526,.582],ki=20,rc=new Is,ou=new wt,oc=null,ac=0,cc=0,Fi=(1+Math.sqrt(5))/2,xs=1/Fi,au=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Fi,xs),new P(0,Fi,-xs),new P(xs,0,Fi),new P(-xs,0,Fi),new P(Fi,xs,0),new P(-Fi,xs,0)],Io=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oc,ac,cc),t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:dr,format:Dn,colorSpace:ri,depthBuffer:!1},s=cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Vg(r,t,e)}return s}_compileMaterial(t){let e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,rc)}_sceneToCubeUV(t,e,n,s){let a=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ou),h.toneMapping=Un,h.autoClear=!1;let d=new me({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Bt(new ee,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(ou),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;co(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ws||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,rc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=au[(s-1)%au.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Bt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],y=0;for(let w=0;w<ki;++w){let I=w/x,M=Math.exp(-I*I/2);p.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let v=this._sizeLods[s],T=3*v*(s>_-ys?s-_+ys:0),S=4*(this._cubeSize-v);co(e,T,S,3*v,2*v),c.setRenderTarget(e),c.render(u,rc)}};function zg(i){let t=[],e=[],n=[],s=i,r=i-ys+1+ru.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ys?c=ru[o-i+ys-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let S=0;S<d;S++){let w=S%3*2/3-1,I=S>2?0:-1,M=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];y.set(M,x*g*S),_.set(f,m*g*S);let E=[S,S,S,S,S,S];v.set(E,p*g*S)}let T=new ce;T.setAttribute("position",new bn(y,x)),T.setAttribute("uv",new bn(_,m)),T.setAttribute("faceIndex",new bn(v,p)),t.push(T),s>ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cu(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vg(i,t,e){let n=new Float32Array(ki),s=new P(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function lu(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function hu(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function Gg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===xc||c===_c,h=c===ws||c===Ts;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Io(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Io(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,v=y.length;_<v;_+=3){let T=y[_+0],S=y[_+1],w=y[_+2];f.push(T,S,S,w,w,T)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let T=_+0,S=_+1,w=_+2;f.push(T,S,S,w,w,T)}}else return;let m=new(Yu(f)?Co:Ro)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Xg(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*c),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $g(i,t){return i[0]-t[0]}function Zg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Jg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new be,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],I=0;y===!0&&(I=1),_===!0&&(I=2),v===!0&&(I=3);let M=h.attributes.position.count*I,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*E*4*g),F=new To(N,M,E,g);F.type=xi,F.needsUpdate=!0;let O=I*4;for(let B=0;B<g;B++){let z=T[B],J=S[B],Z=w[B],X=M*E*4*B;for(let nt=0;nt<z.count;nt++){let it=nt*O;y===!0&&(o.fromBufferAttribute(z,nt),N[X+it+0]=o.x,N[X+it+1]=o.y,N[X+it+2]=o.z,N[X+it+3]=0),_===!0&&(o.fromBufferAttribute(J,nt),N[X+it+4]=o.x,N[X+it+5]=o.y,N[X+it+6]=o.z,N[X+it+7]=0),v===!0&&(o.fromBufferAttribute(Z,nt),N[X+it+8]=o.x,N[X+it+9]=o.y,N[X+it+10]=o.z,N[X+it+11]=Z.itemSize===4?o.w:1)}}x={count:g,texture:F,size:new j(M,E)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<d;_++){let v=g[_];v[0]=_,v[1]=f[_]}g.sort(Zg);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort($g);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let v=a[_],T=v[0],S=v[1];T!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+_)!==x[T]&&h.setAttribute("morphTarget"+_,x[T]),m&&h.getAttribute("morphNormal"+_)!==m[T]&&h.setAttribute("morphNormal"+_,m[T]),s[_]=S,p+=S):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Kg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Lo=class extends Sn{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:zi,h!==zi&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=gi),n===void 0&&h===As&&(n=Hi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ku=new Sn,ju=new Lo(1,1);ju.compareFunction=Xu;var Qu=new To,tf=new Ec,ef=new Ps,uu=[],fu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=uu[s];if(r===void 0&&(r=new Float32Array(s),uu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zo(i,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;mu.set(n),i.uniformMatrix2fv(this.addr,!1,mu),He(e,n)}}function ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;pu.set(n),i.uniformMatrix3fv(this.addr,!1,pu),He(e,n)}}function sx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;du.set(n),i.uniformMatrix4fv(this.addr,!1,du),He(e,n)}}function rx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ju:Ku;e.setTexture2D(t||r,s)}function px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tf,s)}function mx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ef,s)}function gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qu,s)}function xx(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return cx;case 5125:return lx;case 36294:return hx;case 36295:return ux;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function _x(i,t){i.uniform1fv(this.addr,t)}function yx(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function vx(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function Mx(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function bx(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sx(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ex(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wx(i,t){i.uniform1iv(this.addr,t)}function Tx(i,t){i.uniform2iv(this.addr,t)}function Ax(i,t){i.uniform3iv(this.addr,t)}function Rx(i,t){i.uniform4iv(this.addr,t)}function Cx(i,t){i.uniform1uiv(this.addr,t)}function Px(i,t){i.uniform2uiv(this.addr,t)}function Ix(i,t){i.uniform3uiv(this.addr,t)}function Lx(i,t){i.uniform4uiv(this.addr,t)}function Dx(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ku,r[o])}function Ux(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tf,r[o])}function Nx(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ef,r[o])}function Ox(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qu,r[o])}function Fx(i){switch(i){case 5126:return _x;case 35664:return yx;case 35665:return vx;case 35666:return Mx;case 35674:return bx;case 35675:return Sx;case 35676:return Ex;case 5124:case 35670:return wx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Px;case 36295:return Ix;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ox}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xx(e.type)}},Rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},lc=/(\w+)(\])?(\[|\.)?/g;function gu(i,t){i.seq.push(t),i.map[t.id]=t}function Bx(i,t,e){let n=i.name,s=n.length;for(lc.lastIndex=0;;){let r=lc.exec(n),o=lc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){gu(e,l===void 0?new Ac(a,i,t):new Rc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Cc(a),gu(e,u)),e=u}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Bx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function xu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var kx=37297,Hx=0;function zx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Vx(i){let t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i),n;switch(t===e?n="":t===Mo&&e===vo?n="LinearDisplayP3ToLinearSRGB":t===vo&&e===Mo&&(n="LinearSRGBToLinearDisplayP3"),i){case ri:case $o:return[n,"LinearTransferOETF"];case pe:case al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _u(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+zx(i.getShaderSource(t),o)}else return s}function Gx(i,t){let e=Vx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Wx(i,t){let e;switch(t){case cp:e="Linear";break;case lp:e="Reinhard";break;case hp:e="OptimizedCineon";break;case up:e="ACESFilmic";break;case dp:e="AgX";break;case fp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function Xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function Yx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $x(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vs(i){return i!==""}function yu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(Zx,Kx)}var Jx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kx(i,t){let e=Xt[t];if(e===void 0){let n=Jx.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}var jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(jx,Qx)}function Qx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function e_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Ts:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function i_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zi:t="ENVMAP_BLENDING_MULTIPLY";break;case Ar:t="ENVMAP_BLENDING_MIX";break;case ap:t="ENVMAP_BLENDING_ADD";break}return t}function s_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function r_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=t_(e),l=e_(e),h=n_(e),u=i_(e),f=s_(e),d=e.isWebGL2?"":qx(e),g=Xx(e),x=Yx(r),m=s.createProgram(),p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(vs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(vs).join(`
`),y.length>0&&(y+=`
`)):(p=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),y=[d,bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Un?Wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Gx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=Pc(o),o=yu(o,e),o=vu(o,e),a=Pc(a),a=yu(a,e),a=vu(a,e),o=Mu(o),a=Mu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=_+p+o,T=_+y+a,S=xu(s,s.VERTEX_SHADER,v),w=xu(s,s.FRAGMENT_SHADER,T);s.attachShader(m,S),s.attachShader(m,w),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(F){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(S).trim(),B=s.getShaderInfoLog(w).trim(),z=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,w);else{let Z=_u(s,S,"vertex"),X=_u(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+Z+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||B==="")&&(J=!1);J&&(F.diagnostics={runnable:z,programLog:O,vertexShader:{log:L,prefix:p},fragmentShader:{log:B,prefix:y}})}s.deleteShader(S),s.deleteShader(w),M=new Es(s,m),E=$x(s,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,kx)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=w,this}var o_=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}};function a_(i,t,e,n,s,r,o){let a=new mr,c=new Ic,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,N,F,O){let L=F.fog,B=O.geometry,z=M.isMeshStandardMaterial?F.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),Z=J&&J.mapping===Yo?J.image.height:null,X=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let nt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=nt!==void 0?nt.length:0,dt=0;B.morphAttributes.position!==void 0&&(dt=1),B.morphAttributes.normal!==void 0&&(dt=2),B.morphAttributes.color!==void 0&&(dt=3);let q,Q,pt,bt;if(X){let sn=Vn[X];q=sn.vertexShader,Q=sn.fragmentShader}else q=M.vertexShader,Q=M.fragmentShader,c.update(M),pt=c.getVertexShaderID(M),bt=c.getFragmentShaderID(M);let xt=i.getRenderTarget(),Ut=O.isInstancedMesh===!0,zt=O.isBatchedMesh===!0,St=!!M.map,kt=!!M.matcap,D=!!J,at=!!M.aoMap,$=!!M.lightMap,ot=!!M.bumpMap,Y=!!M.normalMap,Tt=!!M.displacementMap,mt=!!M.emissiveMap,A=!!M.metalnessMap,b=!!M.roughnessMap,H=M.anisotropy>0,st=M.clearcoat>0,tt=M.iridescence>0,K=M.sheen>0,vt=M.transmission>0,ht=H&&!!M.anisotropyMap,_t=st&&!!M.clearcoatMap,Pt=st&&!!M.clearcoatNormalMap,Gt=st&&!!M.clearcoatRoughnessMap,et=tt&&!!M.iridescenceMap,ae=tt&&!!M.iridescenceThicknessMap,te=K&&!!M.sheenColorMap,Ht=K&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,yt=!!M.specularColorMap,qt=!!M.specularIntensityMap,le=vt&&!!M.transmissionMap,Re=vt&&!!M.thicknessMap,Kt=!!M.gradientMap,ct=!!M.alphaMap,U=M.alphaTest>0,ut=!!M.alphaHash,ft=!!M.extensions,Nt=!!B.attributes.uv1,It=!!B.attributes.uv2,ge=!!B.attributes.uv3,xe=Un;return M.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(xe=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:Q,defines:M.defines,customVertexShaderID:pt,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:zt,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:ri,map:St,matcap:kt,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:$,bumpMap:ot,normalMap:Y,displacementMap:f&&Tt,emissiveMap:mt,normalMapObjectSpace:Y&&M.normalMapType===wp,normalMapTangentSpace:Y&&M.normalMapType===ol,metalnessMap:A,roughnessMap:b,anisotropy:H,anisotropyMap:ht,clearcoat:st,clearcoatMap:_t,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Gt,iridescence:tt,iridescenceMap:et,iridescenceThicknessMap:ae,sheen:K,sheenColorMap:te,sheenRoughnessMap:Ht,specularMap:Rt,specularColorMap:yt,specularIntensityMap:qt,transmission:vt,transmissionMap:le,thicknessMap:Re,gradientMap:Kt,opaque:M.transparent===!1&&M.blending===bs,alphaMap:ct,alphaTest:U,alphaHash:ut,combine:M.combine,mapUv:St&&x(M.map.channel),aoMapUv:at&&x(M.aoMap.channel),lightMapUv:$&&x(M.lightMap.channel),bumpMapUv:ot&&x(M.bumpMap.channel),normalMapUv:Y&&x(M.normalMap.channel),displacementMapUv:Tt&&x(M.displacementMap.channel),emissiveMapUv:mt&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:b&&x(M.roughnessMap.channel),anisotropyMapUv:ht&&x(M.anisotropyMap.channel),clearcoatMapUv:_t&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:te&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&x(M.sheenRoughnessMap.channel),specularMapUv:Rt&&x(M.specularMap.channel),specularColorMapUv:yt&&x(M.specularColorMap.channel),specularIntensityMapUv:qt&&x(M.specularIntensityMap.channel),transmissionMapUv:le&&x(M.transmissionMap.channel),thicknessMapUv:Re&&x(M.thicknessMap.channel),alphaMapUv:ct&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Y||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:It,vertexUv3s:ge,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(St||ct),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:dt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&fe.getTransfer(M.map.colorSpace)===ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===We,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ft&&M.extensions.derivatives===!0,extensionFragDepth:ft&&M.extensions.fragDepth===!0,extensionDrawBuffers:ft&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)E.push(N),E.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(E,M),_(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){let E=g[M.type],N;if(E){let F=Vn[E];N=Jp.clone(F.uniforms)}else N=M.uniforms;return N}function T(M,E){let N;for(let F=0,O=l.length;F<O;F++){let L=l[F];if(L.cacheKey===E){N=L,++N.usedTimes;break}}return N===void 0&&(N=new r_(i,E,M,r),l.push(N)),N}function S(M){if(--M.usedTimes===0){let E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function w(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:I}}function c_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function l_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Su(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||l_),n.length>1&&n.sort(f||Su),s.length>1&&s.sort(f||Su)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function h_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Eu,i.set(n,[o])):s>=r.length?(o=new Eu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function u_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new wt};break;case"SpotLight":e={position:new P,direction:new P,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function f_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var d_=0;function p_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m_(i,t){let e=new u_,n=f_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new ve,a=new ve;function c(h,u){let f=0,d=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,v=0,T=0,S=0,w=0,I=0,M=0;h.sort(p_);let E=u===!0?Math.PI:1;for(let F=0,O=h.length;F<O;F++){let L=h[F],B=L.color,z=L.intensity,J=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=B.r*z*E,d+=B.g*z*E,g+=B.b*z*E;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],z);M++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let nt=L.shadow,it=n.get(L);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,s.directionalShadow[x]=it,s.directionalShadowMap[x]=Z,s.directionalShadowMatrix[x]=L.shadow.matrix,v++}s.directional[x]=X,x++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(z*E),X.distance=J,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[p]=X;let nt=L.shadow;if(L.map&&(s.spotLightMap[w]=L.map,w++,nt.updateMatrices(L),L.castShadow&&I++),s.spotLightMatrix[p]=nt.matrix,L.castShadow){let it=n.get(L);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,s.spotShadow[p]=it,s.spotShadowMap[p]=Z,S++}p++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(B).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=X,y++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),X.distance=L.distance,X.decay=L.decay,L.castShadow){let nt=L.shadow,it=n.get(L);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,it.shadowCameraNear=nt.camera.near,it.shadowCameraFar=nt.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=L.shadow.matrix,T++}s.point[m]=X,m++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z*E),X.groundColor.copy(L.groundColor).multiplyScalar(z*E),s.hemi[_]=X,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==_||N.numDirectionalShadows!==v||N.numPointShadows!==T||N.numSpotShadows!==S||N.numSpotMaps!==w||N.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=S+w-I,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=_,N.numDirectionalShadows=v,N.numPointShadows=T,N.numSpotShadows=S,N.numSpotMaps=w,N.numLightProbes=M,s.version=d_++)}function l(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let v=h[y];if(v.isDirectionalLight){let T=s.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(v.isSpotLight){let T=s.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let T=s.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let T=s.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let T=s.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function wu(i,t){let e=new m_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function g_(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new wu(i,t),e.set(r,[c])):o>=a.length?(c=new wu(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Dc=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uc=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`;function y_(i,t,e){let n=new gr,s=new j,r=new j,o=new be,a=new Dc({depthPacking:Ep}),c=new Uc,l={},h=e.maxTextureSize,u={[vi]:ln,[ln]:vi,[We]:We},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:x_,fragmentShader:__}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let p=this.type;this.render=function(S,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(_i),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=p!==ni&&this.type===ni,L=p===ni&&this.type!==ni;for(let B=0,z=S.length;B<z;B++){let J=S[B],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let X=Z.getFrameExtents();if(s.multiply(X),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,Z.mapSize.y=r.y)),Z.map===null||O===!0||L===!0){let it=this.type!==ni?{minFilter:Ee,magFilter:Ee}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Nn(s.x,s.y,it),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let nt=Z.getViewportCount();for(let it=0;it<nt;it++){let dt=Z.getViewport(it);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),F.viewport(o),Z.updateMatrices(J,it),n=Z.getFrustum(),v(w,I,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ni&&y(Z,I),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,N)};function y(S,w){let I=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Nn(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,I,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,I,d,x,null)}function _(S,w,I,M){let E=null,N=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)E=N;else if(E=I.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=E.uuid,O=w.uuid,L=l[F];L===void 0&&(L={},l[F]=L);let B=L[O];B===void 0&&(B=E.clone(),L[O]=B,w.addEventListener("dispose",T)),E=B}if(E.visible=w.visible,E.wireframe=w.wireframe,M===ni?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=i.properties.get(E);F.light=I}return E}function v(S,w,I,M,E){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===ni)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let O=t.update(S),L=S.material;if(Array.isArray(L)){let B=O.groups;for(let z=0,J=B.length;z<J;z++){let Z=B[z],X=L[Z.materialIndex];if(X&&X.visible){let nt=_(S,X,M,E);S.onBeforeShadow(i,S,w,I,O,nt,Z),i.renderBufferDirect(I,null,O,nt,S,Z),S.onAfterShadow(i,S,w,I,O,nt,Z)}}}else if(L.visible){let B=_(S,L,M,E);S.onBeforeShadow(i,S,w,I,O,B,null),i.renderBufferDirect(I,null,O,B,S,null),S.onAfterShadow(i,S,w,I,O,B,null)}}let F=S.children;for(let O=0,L=F.length;O<L;O++)v(F[O],w,I,M,E)}function T(S){S.target.removeEventListener("dispose",T);for(let I in l){let M=l[I],E=S.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function v_(i,t,e){let n=e.isWebGL2;function s(){let U=!1,ut=new be,ft=null,Nt=new be(0,0,0,0);return{setMask:function(It){ft!==It&&!U&&(i.colorMask(It,It,It,It),ft=It)},setLocked:function(It){U=It},setClear:function(It,ge,xe,ze,sn){sn===!0&&(It*=ze,ge*=ze,xe*=ze),ut.set(It,ge,xe,ze),Nt.equals(ut)===!1&&(i.clearColor(It,ge,xe,ze),Nt.copy(ut))},reset:function(){U=!1,ft=null,Nt.set(-1,0,0,0)}}}function r(){let U=!1,ut=null,ft=null,Nt=null;return{setTest:function(It){It?zt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(It){ut!==It&&!U&&(i.depthMask(It),ut=It)},setFunc:function(It){if(ft!==It){switch(It){case tp:i.depthFunc(i.NEVER);break;case ep:i.depthFunc(i.ALWAYS);break;case np:i.depthFunc(i.LESS);break;case go:i.depthFunc(i.LEQUAL);break;case ip:i.depthFunc(i.EQUAL);break;case sp:i.depthFunc(i.GEQUAL);break;case rp:i.depthFunc(i.GREATER);break;case op:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=It}},setLocked:function(It){U=It},setClear:function(It){Nt!==It&&(i.clearDepth(It),Nt=It)},reset:function(){U=!1,ut=null,ft=null,Nt=null}}}function o(){let U=!1,ut=null,ft=null,Nt=null,It=null,ge=null,xe=null,ze=null,sn=null;return{setTest:function(_e){U||(_e?zt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(_e){ut!==_e&&!U&&(i.stencilMask(_e),ut=_e)},setFunc:function(_e,rn,zn){(ft!==_e||Nt!==rn||It!==zn)&&(i.stencilFunc(_e,rn,zn),ft=_e,Nt=rn,It=zn)},setOp:function(_e,rn,zn){(ge!==_e||xe!==rn||ze!==zn)&&(i.stencilOp(_e,rn,zn),ge=_e,xe=rn,ze=zn)},setLocked:function(_e){U=_e},setClear:function(_e){sn!==_e&&(i.clearStencil(_e),sn=_e)},reset:function(){U=!1,ut=null,ft=null,Nt=null,It=null,ge=null,xe=null,ze=null,sn=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,v=null,T=null,S=null,w=null,I=null,M=new wt(0,0,0),E=0,N=!1,F=null,O=null,L=null,B=null,z=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,X=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Z=X>=1):nt.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Z=X>=2);let it=null,dt={},q=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),pt=new be().fromArray(q),bt=new be().fromArray(Q);function xt(U,ut,ft,Nt){let It=new Uint8Array(4),ge=i.createTexture();i.bindTexture(U,ge),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<ft;xe++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ut,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(ut+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return ge}let Ut={};Ut[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),zt(i.DEPTH_TEST),c.setFunc(go),mt(!1),A(rh),zt(i.CULL_FACE),Y(_i);function zt(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function St(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function kt(U,ut){return d[U]!==ut?(i.bindFramebuffer(U,ut),d[U]=ut,n&&(U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut)),!0):!1}function D(U,ut){let ft=x,Nt=!1;if(U)if(ft=g.get(ut),ft===void 0&&(ft=[],g.set(ut,ft)),U.isWebGLMultipleRenderTargets){let It=U.texture;if(ft.length!==It.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,xe=It.length;ge<xe;ge++)ft[ge]=i.COLOR_ATTACHMENT0+ge;ft.length=It.length,Nt=!0}}else ft[0]!==i.COLOR_ATTACHMENT0&&(ft[0]=i.COLOR_ATTACHMENT0,Nt=!0);else ft[0]!==i.BACK&&(ft[0]=i.BACK,Nt=!0);Nt&&(e.isWebGL2?i.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function at(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let $={[Bi]:i.FUNC_ADD,[kd]:i.FUNC_SUBTRACT,[Hd]:i.FUNC_REVERSE_SUBTRACT};if(n)$[ch]=i.MIN,$[lh]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&($[ch]=U.MIN_EXT,$[lh]=U.MAX_EXT)}let ot={[zd]:i.ZERO,[Vd]:i.ONE,[Gd]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[Yd]:i.DST_COLOR,[qd]:i.DST_ALPHA,[Wd]:i.ONE_MINUS_SRC_COLOR,[gc]:i.ONE_MINUS_SRC_ALPHA,[$d]:i.ONE_MINUS_DST_COLOR,[Xd]:i.ONE_MINUS_DST_ALPHA,[Jd]:i.CONSTANT_COLOR,[Kd]:i.ONE_MINUS_CONSTANT_COLOR,[jd]:i.CONSTANT_ALPHA,[Qd]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(U,ut,ft,Nt,It,ge,xe,ze,sn,_e){if(U===_i){p===!0&&(St(i.BLEND),p=!1);return}if(p===!1&&(zt(i.BLEND),p=!0),U!==Bd){if(U!==y||_e!==N){if((_!==Bi||S!==Bi)&&(i.blendEquation(i.FUNC_ADD),_=Bi,S=Bi),_e)switch(U){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gi:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,T=null,w=null,I=null,M.set(0,0,0),E=0,y=U,N=_e}return}It=It||ut,ge=ge||ft,xe=xe||Nt,(ut!==_||It!==S)&&(i.blendEquationSeparate($[ut],$[It]),_=ut,S=It),(ft!==v||Nt!==T||ge!==w||xe!==I)&&(i.blendFuncSeparate(ot[ft],ot[Nt],ot[ge],ot[xe]),v=ft,T=Nt,w=ge,I=xe),(ze.equals(M)===!1||sn!==E)&&(i.blendColor(ze.r,ze.g,ze.b,sn),M.copy(ze),E=sn),y=U,N=!1}function Tt(U,ut){U.side===We?St(i.CULL_FACE):zt(i.CULL_FACE);let ft=U.side===ln;ut&&(ft=!ft),mt(ft),U.blending===bs&&U.transparent===!1?Y(_i):Y(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);let Nt=U.stencilWrite;l.setTest(Nt),Nt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),H(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?zt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){F!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),F=U)}function A(U){U!==Nd?(zt(i.CULL_FACE),U!==O&&(U===rh?i.cullFace(i.BACK):U===Od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),O=U}function b(U){U!==L&&(Z&&i.lineWidth(U),L=U)}function H(U,ut,ft){U?(zt(i.POLYGON_OFFSET_FILL),(B!==ut||z!==ft)&&(i.polygonOffset(ut,ft),B=ut,z=ft)):St(i.POLYGON_OFFSET_FILL)}function st(U){U?zt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function tt(U){U===void 0&&(U=i.TEXTURE0+J-1),it!==U&&(i.activeTexture(U),it=U)}function K(U,ut,ft){ft===void 0&&(it===null?ft=i.TEXTURE0+J-1:ft=it);let Nt=dt[ft];Nt===void 0&&(Nt={type:void 0,texture:void 0},dt[ft]=Nt),(Nt.type!==U||Nt.texture!==ut)&&(it!==ft&&(i.activeTexture(ft),it=ft),i.bindTexture(U,ut||Ut[U]),Nt.type=U,Nt.texture=ut)}function vt(){let U=dt[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ht(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(U){pt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),pt.copy(U))}function le(U){bt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),bt.copy(U))}function Re(U,ut){let ft=u.get(ut);ft===void 0&&(ft=new WeakMap,u.set(ut,ft));let Nt=ft.get(U);Nt===void 0&&(Nt=i.getUniformBlockIndex(ut,U.name),ft.set(U,Nt))}function Kt(U,ut){let Nt=u.get(ut).get(U);h.get(ut)!==Nt&&(i.uniformBlockBinding(ut,Nt,U.__bindingPointIndex),h.set(ut,Nt))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},it=null,dt={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,v=null,T=null,S=null,w=null,I=null,M=new wt(0,0,0),E=0,N=!1,F=null,O=null,L=null,B=null,z=null,pt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:zt,disable:St,bindFramebuffer:kt,drawBuffers:D,useProgram:at,setBlending:Y,setMaterial:Tt,setFlipSided:mt,setCullFace:A,setLineWidth:b,setPolygonOffset:H,setScissorTest:st,activeTexture:tt,bindTexture:K,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:_t,texImage2D:Rt,texImage3D:yt,updateUBOMapping:Re,uniformBlockBinding:Kt,texStorage2D:te,texStorage3D:Ht,texSubImage2D:Pt,texSubImage3D:Gt,compressedTexSubImage2D:et,compressedTexSubImage3D:ae,scissor:qt,viewport:le,reset:ct}}function M_(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return d?new OffscreenCanvas(A,b):So("canvas")}function x(A,b,H,st){let tt=1;if((A.width>st||A.height>st)&&(tt=st/Math.max(A.width,A.height)),tt<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let K=b?bc:Math.floor,vt=K(tt*A.width),ht=K(tt*A.height);u===void 0&&(u=g(vt,ht));let _t=H?g(vt,ht):u;return _t.width=vt,_t.height=ht,_t.getContext("2d").drawImage(A,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+vt+"x"+ht+")."),_t}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Vh(A.width)&&Vh(A.height)}function p(A){return a?!1:A.wrapS!==Ln||A.wrapT!==Ln||A.minFilter!==Ee&&A.minFilter!==Xe}function y(A,b){return A.generateMipmaps&&b&&A.minFilter!==Ee&&A.minFilter!==Xe}function _(A){i.generateMipmap(A)}function v(A,b,H,st,tt=!1){if(a===!1)return b;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=b;if(b===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),b===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RGBA){let vt=tt?yo:fe.getTransfer(st);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=vt===ye?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function T(A,b,H){return y(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Ee&&A.minFilter!==Xe?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function S(A){return A===Ee||A===hh||A===Da?i.NEAREST:i.LINEAR}function w(A){let b=A.target;b.removeEventListener("dispose",w),M(b),b.isVideoTexture&&h.delete(b)}function I(A){let b=A.target;b.removeEventListener("dispose",I),N(b)}function M(A){let b=n.get(A);if(b.__webglInit===void 0)return;let H=A.source,st=f.get(H);if(st){let tt=st[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(A),Object.keys(st).length===0&&f.delete(H)}n.remove(A)}function E(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let H=A.source,st=f.get(H);delete st[b.__cacheKey],o.memory.textures--}function N(A){let b=A.texture,H=n.get(A),st=n.get(b);if(st.__webglTexture!==void 0&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(H.__webglFramebuffer[tt]))for(let K=0;K<H.__webglFramebuffer[tt].length;K++)i.deleteFramebuffer(H.__webglFramebuffer[tt][K]);else i.deleteFramebuffer(H.__webglFramebuffer[tt]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[tt])}else{if(Array.isArray(H.__webglFramebuffer))for(let tt=0;tt<H.__webglFramebuffer.length;tt++)i.deleteFramebuffer(H.__webglFramebuffer[tt]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let tt=0;tt<H.__webglColorRenderbuffer.length;tt++)H.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[tt]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let tt=0,K=b.length;tt<K;tt++){let vt=n.get(b[tt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(b[tt])}n.remove(b),n.remove(A)}let F=0;function O(){F=0}function L(){let A=F;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function B(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function z(A,b){let H=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let st=A.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(H,A,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function J(A,b){let H=n.get(A);if(A.version>0&&H.__version!==A.version){pt(H,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function Z(A,b){let H=n.get(A);if(A.version>0&&H.__version!==A.version){pt(H,A,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function X(A,b){let H=n.get(A);if(A.version>0&&H.__version!==A.version){bt(H,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let nt={[ur]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[yc]:i.MIRRORED_REPEAT},it={[Ee]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[Da]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[pp]:i.LINEAR_MIPMAP_NEAREST,[fr]:i.LINEAR_MIPMAP_LINEAR},dt={[Tp]:i.NEVER,[Lp]:i.ALWAYS,[Ap]:i.LESS,[Xu]:i.LEQUAL,[Rp]:i.EQUAL,[Ip]:i.GEQUAL,[Cp]:i.GREATER,[Pp]:i.NOTEQUAL};function q(A,b,H){if(H?(i.texParameteri(A,i.TEXTURE_WRAP_S,nt[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[b.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Ln||b.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,S(b.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Ee&&b.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let st=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ee||b.minFilter!==Da&&b.minFilter!==fr||b.type===xi&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===dr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(A,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Q(A,b){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));let st=b.source,tt=f.get(st);tt===void 0&&(tt={},f.set(st,tt));let K=B(b);if(K!==A.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[K].usedTimes++;let vt=tt[A.__cacheKey];vt!==void 0&&(tt[A.__cacheKey].usedTimes--,vt.usedTimes===0&&E(b)),A.__cacheKey=K,A.__webglTexture=tt[K].texture}return H}function pt(A,b,H){let st=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=i.TEXTURE_3D);let tt=Q(A,b),K=b.source;e.bindTexture(st,A.__webglTexture,i.TEXTURE0+H);let vt=n.get(K);if(K.version!==vt.__version||tt===!0){e.activeTexture(i.TEXTURE0+H);let ht=fe.getPrimaries(fe.workingColorSpace),_t=b.colorSpace===Mn?null:fe.getPrimaries(b.colorSpace),Pt=b.colorSpace===Mn||ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Gt=p(b)&&m(b.image)===!1,et=x(b.image,Gt,!1,s.maxTextureSize);et=mt(b,et);let ae=m(et)||a,te=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type),Rt=v(b.internalFormat,te,Ht,b.colorSpace,b.isVideoTexture);q(st,b,ae);let yt,qt=b.mipmaps,le=a&&b.isVideoTexture!==!0&&Rt!==Wu,Re=vt.__version===void 0||tt===!0,Kt=T(b,et,ae);if(b.isDepthTexture)Rt=i.DEPTH_COMPONENT,a?b.type===xi?Rt=i.DEPTH_COMPONENT32F:b.type===gi?Rt=i.DEPTH_COMPONENT24:b.type===Hi?Rt=i.DEPTH24_STENCIL8:Rt=i.DEPTH_COMPONENT16:b.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===zi&&Rt===i.DEPTH_COMPONENT&&b.type!==rl&&b.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=gi,Ht=r.convert(b.type)),b.format===As&&Rt===i.DEPTH_COMPONENT&&(Rt=i.DEPTH_STENCIL,b.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Hi,Ht=r.convert(b.type))),Re&&(le?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,te,Ht,null));else if(b.isDataTexture)if(qt.length>0&&ae){le&&Re&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,qt[0].width,qt[0].height);for(let ct=0,U=qt.length;ct<U;ct++)yt=qt[ct],le?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,yt.width,yt.height,te,Ht,yt.data):e.texImage2D(i.TEXTURE_2D,ct,Rt,yt.width,yt.height,0,te,Ht,yt.data);b.generateMipmaps=!1}else le?(Re&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,te,Ht,et.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,te,Ht,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){le&&Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,Rt,qt[0].width,qt[0].height,et.depth);for(let ct=0,U=qt.length;ct<U;ct++)yt=qt[ct],b.format!==Dn?te!==null?le?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,et.depth,te,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Rt,yt.width,yt.height,et.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,et.depth,te,Ht,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Rt,yt.width,yt.height,et.depth,0,te,Ht,yt.data)}else{le&&Re&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,qt[0].width,qt[0].height);for(let ct=0,U=qt.length;ct<U;ct++)yt=qt[ct],b.format!==Dn?te!==null?le?e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,yt.width,yt.height,te,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Rt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,yt.width,yt.height,te,Ht,yt.data):e.texImage2D(i.TEXTURE_2D,ct,Rt,yt.width,yt.height,0,te,Ht,yt.data)}else if(b.isDataArrayTexture)le?(Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,Rt,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,te,Ht,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,te,Ht,et.data);else if(b.isData3DTexture)le?(Re&&e.texStorage3D(i.TEXTURE_3D,Kt,Rt,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,te,Ht,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,te,Ht,et.data);else if(b.isFramebufferTexture){if(Re)if(le)e.texStorage2D(i.TEXTURE_2D,Kt,Rt,et.width,et.height);else{let ct=et.width,U=et.height;for(let ut=0;ut<Kt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Rt,ct,U,0,te,Ht,null),ct>>=1,U>>=1}}else if(qt.length>0&&ae){le&&Re&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,qt[0].width,qt[0].height);for(let ct=0,U=qt.length;ct<U;ct++)yt=qt[ct],le?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,te,Ht,yt):e.texImage2D(i.TEXTURE_2D,ct,Rt,te,Ht,yt);b.generateMipmaps=!1}else le?(Re&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,te,Ht,et)):e.texImage2D(i.TEXTURE_2D,0,Rt,te,Ht,et);y(b,ae)&&_(st),vt.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function bt(A,b,H){if(b.image.length!==6)return;let st=Q(A,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let K=n.get(tt);if(tt.version!==K.__version||st===!0){e.activeTexture(i.TEXTURE0+H);let vt=fe.getPrimaries(fe.workingColorSpace),ht=b.colorSpace===Mn?null:fe.getPrimaries(b.colorSpace),_t=b.colorSpace===Mn||vt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Pt=b.isCompressedTexture||b.image[0].isCompressedTexture,Gt=b.image[0]&&b.image[0].isDataTexture,et=[];for(let ct=0;ct<6;ct++)!Pt&&!Gt?et[ct]=x(b.image[ct],!1,!0,s.maxCubemapSize):et[ct]=Gt?b.image[ct].image:b.image[ct],et[ct]=mt(b,et[ct]);let ae=et[0],te=m(ae)||a,Ht=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type),yt=v(b.internalFormat,Ht,Rt,b.colorSpace),qt=a&&b.isVideoTexture!==!0,le=K.__version===void 0||st===!0,Re=T(b,ae,te);q(i.TEXTURE_CUBE_MAP,b,te);let Kt;if(Pt){qt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Re,yt,ae.width,ae.height);for(let ct=0;ct<6;ct++){Kt=et[ct].mipmaps;for(let U=0;U<Kt.length;U++){let ut=Kt[U];b.format!==Dn?Ht!==null?qt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,0,0,ut.width,ut.height,Ht,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,0,0,ut.width,ut.height,Ht,Rt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,yt,ut.width,ut.height,0,Ht,Rt,ut.data)}}}else{Kt=b.mipmaps,qt&&le&&(Kt.length>0&&Re++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Re,yt,et[0].width,et[0].height));for(let ct=0;ct<6;ct++)if(Gt){qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,et[ct].width,et[ct].height,Ht,Rt,et[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,et[ct].width,et[ct].height,0,Ht,Rt,et[ct].data);for(let U=0;U<Kt.length;U++){let ft=Kt[U].image[ct].image;qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,0,0,ft.width,ft.height,Ht,Rt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,yt,ft.width,ft.height,0,Ht,Rt,ft.data)}}else{qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ht,Rt,et[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,Ht,Rt,et[ct]);for(let U=0;U<Kt.length;U++){let ut=Kt[U];qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,0,0,Ht,Rt,ut.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,yt,Ht,Rt,ut.image[ct])}}}y(b,te)&&_(i.TEXTURE_CUBE_MAP),K.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function xt(A,b,H,st,tt,K){let vt=r.convert(H.format,H.colorSpace),ht=r.convert(H.type),_t=v(H.internalFormat,vt,ht,H.colorSpace);if(!n.get(b).__hasExternalTextures){let Gt=Math.max(1,b.width>>K),et=Math.max(1,b.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,_t,Gt,et,b.depth,0,vt,ht,null):e.texImage2D(tt,K,_t,Gt,et,0,vt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Y(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,n.get(H).__webglTexture,0,ot(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,n.get(H).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(A,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let st=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||Y(b)){let tt=b.depthTexture;tt&&tt.isDepthTexture&&(tt.type===xi?st=i.DEPTH_COMPONENT32F:tt.type===gi&&(st=i.DEPTH_COMPONENT24));let K=ot(b);Y(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,st,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,st,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,st,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){let st=ot(b);H&&Y(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,b.width,b.height):Y(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let st=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let tt=0;tt<st.length;tt++){let K=st[tt],vt=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),_t=v(K.internalFormat,vt,ht,K.colorSpace),Pt=ot(b);H&&Y(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,_t,b.width,b.height):Y(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,_t,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,_t,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);let st=n.get(b.depthTexture).__webglTexture,tt=ot(b);if(b.depthTexture.format===zi)Y(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(b.depthTexture.format===As)Y(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function St(A){let b=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");zt(b.__webglFramebuffer,A)}else if(H){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]=i.createRenderbuffer(),Ut(b.__webglDepthbuffer[st],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Ut(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(A,b,H){let st=n.get(A);b!==void 0&&xt(st.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&St(A)}function D(A){let b=A.texture,H=n.get(A),st=n.get(b);A.addEventListener("dispose",I),A.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=b.version,o.memory.textures++);let tt=A.isWebGLCubeRenderTarget===!0,K=A.isWebGLMultipleRenderTargets===!0,vt=m(A)||a;if(tt){H.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[ht]=[];for(let _t=0;_t<b.mipmaps.length;_t++)H.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else H.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)H.__webglFramebuffer[ht]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(K)if(s.drawBuffers){let ht=A.texture;for(let _t=0,Pt=ht.length;_t<Pt;_t++){let Gt=n.get(ht[_t]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Y(A)===!1){let ht=K?b:[b];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){let Pt=ht[_t];H.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[_t]);let Gt=r.convert(Pt.format,Pt.colorSpace),et=r.convert(Pt.type),ae=v(Pt.internalFormat,Gt,et,Pt.colorSpace,A.isXRRenderTarget===!0),te=ot(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,H.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),q(i.TEXTURE_CUBE_MAP,b,vt);for(let ht=0;ht<6;ht++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)xt(H.__webglFramebuffer[ht][_t],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else xt(H.__webglFramebuffer[ht],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);y(b,vt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){let ht=A.texture;for(let _t=0,Pt=ht.length;_t<Pt;_t++){let Gt=ht[_t],et=n.get(Gt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),q(i.TEXTURE_2D,Gt,vt),xt(H.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),y(Gt,vt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ht=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,st.__webglTexture),q(ht,b,vt),a&&b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)xt(H.__webglFramebuffer[_t],A,b,i.COLOR_ATTACHMENT0,ht,_t);else xt(H.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ht,0);y(b,vt)&&_(ht),e.unbindTexture()}A.depthBuffer&&St(A)}function at(A){let b=m(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let st=0,tt=H.length;st<tt;st++){let K=H[st];if(y(K,b)){let vt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ht=n.get(K).__webglTexture;e.bindTexture(vt,ht),_(vt),e.unbindTexture()}}}function $(A){if(a&&A.samples>0&&Y(A)===!1){let b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,st=A.height,tt=i.COLOR_BUFFER_BIT,K=[],vt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(A),_t=A.isWebGLMultipleRenderTargets===!0;if(_t)for(let Pt=0;Pt<b.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){K.push(i.COLOR_ATTACHMENT0+Pt),A.depthBuffer&&K.push(vt);let Gt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Gt===!1&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),_t&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Pt]),Gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[vt])),_t){let et=n.get(b[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,H,st,0,0,H,st,tt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Pt=0;Pt<b.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Pt]);let Gt=n.get(b[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function ot(A){return Math.min(s.maxSamples,A.samples)}function Y(A){let b=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function mt(A,b){let H=A.colorSpace,st=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===vc||H!==ri&&H!==Mn&&(fe.getTransfer(H)===ye?a===!1?t.has("EXT_sRGB")===!0&&st===Dn?(A.format=vc,A.minFilter=Xe,A.generateMipmaps=!1):b=Eo.sRGBToLinear(b):(st!==Dn||tt!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Y}function b_(i,t,e){let n=e.isWebGL2;function s(r,o=Mn){let a,c=fe.getTransfer(o);if(r===yi)return i.UNSIGNED_BYTE;if(r===ku)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Hu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===mp)return i.BYTE;if(r===gp)return i.SHORT;if(r===rl)return i.UNSIGNED_SHORT;if(r===Bu)return i.INT;if(r===gi)return i.UNSIGNED_INT;if(r===xi)return i.FLOAT;if(r===dr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xp)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===_p)return i.LUMINANCE;if(r===yp)return i.LUMINANCE_ALPHA;if(r===zi)return i.DEPTH_COMPONENT;if(r===As)return i.DEPTH_STENCIL;if(r===vc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===vp)return i.RED;if(r===zu)return i.RED_INTEGER;if(r===Mp)return i.RG;if(r===Vu)return i.RG_INTEGER;if(r===Gu)return i.RGBA_INTEGER;if(r===Ua||r===Na||r===Oa||r===Fa)if(c===ye)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ua)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ua)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===fh||r===dh||r===ph)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===uh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ph)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===mh||r===gh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===mh)return c===ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===gh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xh||r===_h||r===yh||r===vh||r===Mh||r===bh||r===Sh||r===Eh||r===wh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===xh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_h)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Th)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ah)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rh)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ch)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ph)return c===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ba||r===Ih||r===Lh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ba)return c===ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ih)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bp||r===Dh||r===Uh||r===Nh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ba)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Dh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Nc=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},S_={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oc=class extends Mi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],_=[],v=new j,T=null,S=new Pe;S.layers.enable(1),S.viewport=new be;let w=new Pe;w.layers.enable(2),w.viewport=new be;let I=[S,w],M=new Nc;M.layers.enable(1),M.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new cr,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new cr,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new cr,y[q]=Q),Q.getHandSpace()};function F(q){let Q=_.indexOf(q.inputSource);if(Q===-1)return;let pt=y[Q];pt!==void 0&&(pt.update(q.inputSource,q.frame,l||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",L);for(let q=0;q<y.length;q++){let Q=_[q];Q!==null&&(_[q]=null,y[q].disconnect(Q))}E=null,N=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Nn(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,pt=null,bt=null;x.depth&&(bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=x.stencil?As:zi,pt=x.stencil?Hi:gi);let xt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Nn(f.textureWidth,f.textureHeight,{format:Dn,type:yi,depthTexture:new Lo(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ut=t.properties.get(p);Ut.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(q){for(let Q=0;Q<q.removed.length;Q++){let pt=q.removed[Q],bt=_.indexOf(pt);bt>=0&&(_[bt]=null,y[bt].disconnect(pt))}for(let Q=0;Q<q.added.length;Q++){let pt=q.added[Q],bt=_.indexOf(pt);if(bt===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=_.length){_.push(pt),bt=Ut;break}else if(_[Ut]===null){_[Ut]=pt,bt=Ut;break}if(bt===-1)break}let xt=y[bt];xt&&xt.connect(pt)}}let B=new P,z=new P;function J(q,Q,pt){B.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(pt.matrixWorld);let bt=B.distanceTo(z),xt=Q.projectionMatrix.elements,Ut=pt.projectionMatrix.elements,zt=xt[14]/(xt[10]-1),St=xt[14]/(xt[10]+1),kt=(xt[9]+1)/xt[5],D=(xt[9]-1)/xt[5],at=(xt[8]-1)/xt[0],$=(Ut[8]+1)/Ut[0],ot=zt*at,Y=zt*$,Tt=bt/(-at+$),mt=Tt*-at;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(mt),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let A=zt+Tt,b=St+Tt,H=ot-mt,st=Y+(bt-mt),tt=kt*St/b*A,K=D*St/b*A;q.projectionMatrix.makePerspective(H,st,tt,K,A,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Z(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=w.near=S.near=q.near,M.far=w.far=S.far=q.far,(E!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,N=M.far);let Q=q.parent,pt=M.cameras;Z(M,Q);for(let bt=0;bt<pt.length;bt++)Z(pt[bt],Q);pt.length===2?J(M,S,w):M.projectionMatrix.copy(S.projectionMatrix),X(q,M,Q)};function X(q,Q,pt){pt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Mc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)};let nt=null;function it(q,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let bt=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,bt=!0);for(let xt=0;xt<pt.length;xt++){let Ut=pt[xt],zt=null;if(d!==null)zt=d.getViewport(Ut);else{let kt=u.getViewSubImage(f,Ut);zt=kt.viewport,xt===0&&(t.setRenderTargetTextures(p,kt.colorTexture,f.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(p))}let St=I[xt];St===void 0&&(St=new Pe,St.layers.enable(xt),St.viewport=new be,I[xt]=St),St.matrix.fromArray(Ut.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Ut.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(zt.x,zt.y,zt.width,zt.height),xt===0&&(M.matrix.copy(St.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),bt===!0&&M.cameras.push(St)}}for(let pt=0;pt<y.length;pt++){let bt=_[pt],xt=y[pt];bt!==null&&xt!==void 0&&xt.update(bt,Q,l||o)}nt&&nt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let dt=new Ju;dt.setAnimationLoop(it),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}};function E_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w_(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function l(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let T=_.program;n.updateUBOMapping(y,T);let S=t.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),T=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],v=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,w=v.length;S<w;S++){let I=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,E=I.length;M<E;M++){let N=I[M];if(d(N,S,M,T)===!0){let F=N.__offset,O=Array.isArray(N.value)?N.value:[N.value],L=0;for(let B=0;B<O.length;B++){let z=O[B],J=x(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,F+L,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,T){let S=y.value,w=_+"_"+v;if(T[w]===void 0)return typeof S=="number"||typeof S=="boolean"?T[w]=S:T[w]=S.clone(),!0;{let I=T[w];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return T[w]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(y){let _=y.uniforms,v=0,T=16;for(let w=0,I=_.length;w<I;w++){let M=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,N=M.length;E<N;E++){let F=M[E],O=Array.isArray(F.value)?F.value:[F.value];for(let L=0,B=O.length;L<B;L++){let z=O[L],J=x(z),Z=v%T;Z!==0&&T-Z<J.boundary&&(v+=T-Z),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=J.storage}}}let S=v%T;return S>0&&(v+=T-S),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ls=class{constructor(t={}){let{canvas:e=Up(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let _=this,v=!1,T=0,S=0,w=null,I=-1,M=null,E=new be,N=new be,F=null,O=new wt(0),L=0,B=e.width,z=e.height,J=1,Z=null,X=null,nt=new be(0,0,B,z),it=new be(0,0,B,z),dt=!1,q=new gr,Q=!1,pt=!1,bt=null,xt=new ve,Ut=new j,zt=new P,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return w===null?J:1}let D=n;function at(C,k){for(let G=0;G<C.length;G++){let W=C[G],V=e.getContext(W,k);if(V!==null)return V}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){let k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),D=at(k,C),D===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let $,ot,Y,Tt,mt,A,b,H,st,tt,K,vt,ht,_t,Pt,Gt,et,ae,te,Ht,Rt,yt,qt,le;function Re(){$=new Wg(D),ot=new Bg(D,$,t),$.init(ot),yt=new b_(D,$,ot),Y=new v_(D,$,ot),Tt=new Yg(D),mt=new c_,A=new M_(D,$,Y,mt,ot,yt,Tt),b=new Hg(_),H=new Gg(_),st=new em(D,ot),qt=new Og(D,$,st,ot),tt=new qg(D,st,Tt,qt),K=new Kg(D,tt,st,Tt),te=new Jg(D,ot,A),Gt=new kg(mt),vt=new a_(_,b,H,$,ot,qt,Gt),ht=new E_(_,mt),_t=new h_,Pt=new g_($,ot),ae=new Ng(_,b,H,Y,K,f,c),et=new y_(_,K,ot),le=new w_(D,Tt,ot,Y),Ht=new Fg(D,$,Tt,ot),Rt=new Xg(D,$,Tt,ot),Tt.programs=vt.programs,_.capabilities=ot,_.extensions=$,_.properties=mt,_.renderLists=_t,_.shadowMap=et,_.state=Y,_.info=Tt}Re();let Kt=new Oc(_,D);this.xr=Kt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let C=$.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=$.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(B,z,!1))},this.getSize=function(C){return C.set(B,z)},this.setSize=function(C,k,G=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,z=k,e.width=Math.floor(C*J),e.height=Math.floor(k*J),G===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(B*J,z*J).floor()},this.setDrawingBufferSize=function(C,k,G){B=C,z=k,J=G,e.width=Math.floor(C*G),e.height=Math.floor(k*G),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,k,G,W){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,k,G,W),Y.viewport(E.copy(nt).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(it)},this.setScissor=function(C,k,G,W){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,k,G,W),Y.scissor(N.copy(it).multiplyScalar(J).floor())},this.getScissorTest=function(){return dt},this.setScissorTest=function(C){Y.setScissorTest(dt=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(C=!0,k=!0,G=!0){let W=0;if(C){let V=!1;if(w!==null){let gt=w.texture.format;V=gt===Gu||gt===Vu||gt===zu}if(V){let gt=w.texture.type,Et=gt===yi||gt===gi||gt===rl||gt===Hi||gt===ku||gt===Hu,Lt=ae.getClearColor(),Ot=ae.getClearAlpha(),$t=Lt.r,Vt=Lt.g,Wt=Lt.b;Et?(d[0]=$t,d[1]=Vt,d[2]=Wt,d[3]=Ot,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=$t,g[1]=Vt,g[2]=Wt,g[3]=Ot,D.clearBufferiv(D.COLOR,0,g))}else W|=D.COLOR_BUFFER_BIT}k&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),Pt.dispose(),mt.dispose(),b.dispose(),H.dispose(),K.dispose(),qt.dispose(),le.dispose(),vt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",sn),Kt.removeEventListener("sessionend",_e),bt&&(bt.dispose(),bt=null),rn.stop()};function ct(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let C=Tt.autoReset,k=et.enabled,G=et.autoUpdate,W=et.needsUpdate,V=et.type;Re(),Tt.autoReset=C,et.enabled=k,et.autoUpdate=G,et.needsUpdate=W,et.type=V}function ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ft(C){let k=C.target;k.removeEventListener("dispose",ft),Nt(k)}function Nt(C){It(C),mt.remove(C)}function It(C){let k=mt.get(C).programs;k!==void 0&&(k.forEach(function(G){vt.releaseProgram(G)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,G,W,V,gt){k===null&&(k=St);let Et=V.isMesh&&V.matrixWorld.determinant()<0,Lt=Id(C,k,G,W,V);Y.setMaterial(W,Et);let Ot=G.index,$t=1;if(W.wireframe===!0){if(Ot=tt.getWireframeAttribute(G),Ot===void 0)return;$t=2}let Vt=G.drawRange,Wt=G.attributes.position,Ie=Vt.start*$t,pn=(Vt.start+Vt.count)*$t;gt!==null&&(Ie=Math.max(Ie,gt.start*$t),pn=Math.min(pn,(gt.start+gt.count)*$t)),Ot!==null?(Ie=Math.max(Ie,0),pn=Math.min(pn,Ot.count)):Wt!=null&&(Ie=Math.max(Ie,0),pn=Math.min(pn,Wt.count));let Ve=pn-Ie;if(Ve<0||Ve===1/0)return;qt.setup(V,W,Lt,G,Ot);let Jn,Se=Ht;if(Ot!==null&&(Jn=st.get(Ot),Se=Rt,Se.setIndex(Jn)),V.isMesh)W.wireframe===!0?(Y.setLineWidth(W.wireframeLinewidth*kt()),Se.setMode(D.LINES)):Se.setMode(D.TRIANGLES);else if(V.isLine){let jt=W.linewidth;jt===void 0&&(jt=1),Y.setLineWidth(jt*kt()),V.isLineSegments?Se.setMode(D.LINES):V.isLineLoop?Se.setMode(D.LINE_LOOP):Se.setMode(D.LINE_STRIP)}else V.isPoints?Se.setMode(D.POINTS):V.isSprite&&Se.setMode(D.TRIANGLES);if(V.isBatchedMesh)Se.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Se.renderInstances(Ie,Ve,V.count);else if(G.isInstancedBufferGeometry){let jt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ca=Math.min(G.instanceCount,jt);Se.renderInstances(Ie,Ve,Ca)}else Se.render(Ie,Ve)};function ge(C,k,G){C.transparent===!0&&C.side===We&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,Hr(C,k,G),C.side=vi,C.needsUpdate=!0,Hr(C,k,G),C.side=We):Hr(C,k,G)}this.compile=function(C,k,G=null){G===null&&(G=C),m=Pt.get(G),m.init(),y.push(m),G.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),C!==G&&C.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(_._useLegacyLights);let W=new Set;return C.traverse(function(V){let gt=V.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){let Lt=gt[Et];ge(Lt,G,V),W.add(Lt)}else ge(gt,G,V),W.add(gt)}),y.pop(),m=null,W},this.compileAsync=function(C,k,G=null){let W=this.compile(C,k,G);return new Promise(V=>{function gt(){if(W.forEach(function(Et){mt.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){V(C);return}setTimeout(gt,10)}$.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let xe=null;function ze(C){xe&&xe(C)}function sn(){rn.stop()}function _e(){rn.start()}let rn=new Ju;rn.setAnimationLoop(ze),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(C){xe=C,Kt.setAnimationLoop(C),C===null?rn.stop():rn.start()},Kt.addEventListener("sessionstart",sn),Kt.addEventListener("sessionend",_e),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(k),k=Kt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,k,w),m=Pt.get(C,y.length),m.init(),y.push(m),xt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(xt),pt=this.localClippingEnabled,Q=Gt.init(this.clippingPlanes,pt),x=_t.get(C,p.length),x.init(),p.push(x),zn(C,k,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Z,X),this.info.render.frame++,Q===!0&&Gt.beginShadows();let G=m.state.shadowsArray;if(et.render(G,C,k),Q===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(x,C),m.setupLights(_._useLegacyLights),k.isArrayCamera){let W=k.cameras;for(let V=0,gt=W.length;V<gt;V++){let Et=W[V];Ql(x,C,Et,Et.viewport)}}else Ql(x,C,k);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(_,C,k),qt.resetDefaultState(),I=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function zn(C,k,G,W){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){W&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xt);let Et=K.update(C),Lt=C.material;Lt.visible&&x.push(C,Et,Lt,G,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){let Et=K.update(C),Lt=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),zt.copy(Et.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(xt)),Array.isArray(Lt)){let Ot=Et.groups;for(let $t=0,Vt=Ot.length;$t<Vt;$t++){let Wt=Ot[$t],Ie=Lt[Wt.materialIndex];Ie&&Ie.visible&&x.push(C,Et,Ie,G,zt.z,Wt)}}else Lt.visible&&x.push(C,Et,Lt,G,zt.z,null)}}let gt=C.children;for(let Et=0,Lt=gt.length;Et<Lt;Et++)zn(gt[Et],k,G,W)}function Ql(C,k,G,W){let V=C.opaque,gt=C.transmissive,Et=C.transparent;m.setupLightsView(G),Q===!0&&Gt.setGlobalState(_.clippingPlanes,G),gt.length>0&&Pd(V,gt,k,G),W&&Y.viewport(E.copy(W)),V.length>0&&kr(V,k,G),gt.length>0&&kr(gt,k,G),Et.length>0&&kr(Et,k,G),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Pd(C,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let gt=ot.isWebGL2;bt===null&&(bt=new Nn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?dr:yi,minFilter:fr,samples:gt?4:0})),_.getDrawingBufferSize(Ut),gt?bt.setSize(Ut.x,Ut.y):bt.setSize(bc(Ut.x),bc(Ut.y));let Et=_.getRenderTarget();_.setRenderTarget(bt),_.getClearColor(O),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Lt=_.toneMapping;_.toneMapping=Un,kr(C,G,W),A.updateMultisampleRenderTarget(bt),A.updateRenderTargetMipmap(bt);let Ot=!1;for(let $t=0,Vt=k.length;$t<Vt;$t++){let Wt=k[$t],Ie=Wt.object,pn=Wt.geometry,Ve=Wt.material,Jn=Wt.group;if(Ve.side===We&&Ie.layers.test(W.layers)){let Se=Ve.side;Ve.side=ln,Ve.needsUpdate=!0,th(Ie,G,W,pn,Ve,Jn),Ve.side=Se,Ve.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(bt),A.updateRenderTargetMipmap(bt)),_.setRenderTarget(Et),_.setClearColor(O,L),_.toneMapping=Lt}function kr(C,k,G){let W=k.isScene===!0?k.overrideMaterial:null;for(let V=0,gt=C.length;V<gt;V++){let Et=C[V],Lt=Et.object,Ot=Et.geometry,$t=W===null?Et.material:W,Vt=Et.group;Lt.layers.test(G.layers)&&th(Lt,k,G,Ot,$t,Vt)}}function th(C,k,G,W,V,gt){C.onBeforeRender(_,k,G,W,V,gt),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(_,k,G,W,C,gt),V.transparent===!0&&V.side===We&&V.forceSinglePass===!1?(V.side=ln,V.needsUpdate=!0,_.renderBufferDirect(G,k,W,V,C,gt),V.side=vi,V.needsUpdate=!0,_.renderBufferDirect(G,k,W,V,C,gt),V.side=We):_.renderBufferDirect(G,k,W,V,C,gt),C.onAfterRender(_,k,G,W,V,gt)}function Hr(C,k,G){k.isScene!==!0&&(k=St);let W=mt.get(C),V=m.state.lights,gt=m.state.shadowsArray,Et=V.state.version,Lt=vt.getParameters(C,V.state,gt,k,G),Ot=vt.getProgramCacheKey(Lt),$t=W.programs;W.environment=C.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(C.isMeshStandardMaterial?H:b).get(C.envMap||W.environment),$t===void 0&&(C.addEventListener("dispose",ft),$t=new Map,W.programs=$t);let Vt=$t.get(Ot);if(Vt!==void 0){if(W.currentProgram===Vt&&W.lightsStateVersion===Et)return nh(C,Lt),Vt}else Lt.uniforms=vt.getUniforms(C),C.onBuild(G,Lt,_),C.onBeforeCompile(Lt,_),Vt=vt.acquireProgram(Lt,Ot),$t.set(Ot,Vt),W.uniforms=Lt.uniforms;let Wt=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=Gt.uniform),nh(C,Lt),W.needsLights=Dd(C),W.lightsStateVersion=Et,W.needsLights&&(Wt.ambientLightColor.value=V.state.ambient,Wt.lightProbe.value=V.state.probe,Wt.directionalLights.value=V.state.directional,Wt.directionalLightShadows.value=V.state.directionalShadow,Wt.spotLights.value=V.state.spot,Wt.spotLightShadows.value=V.state.spotShadow,Wt.rectAreaLights.value=V.state.rectArea,Wt.ltc_1.value=V.state.rectAreaLTC1,Wt.ltc_2.value=V.state.rectAreaLTC2,Wt.pointLights.value=V.state.point,Wt.pointLightShadows.value=V.state.pointShadow,Wt.hemisphereLights.value=V.state.hemi,Wt.directionalShadowMap.value=V.state.directionalShadowMap,Wt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Wt.spotShadowMap.value=V.state.spotShadowMap,Wt.spotLightMatrix.value=V.state.spotLightMatrix,Wt.spotLightMap.value=V.state.spotLightMap,Wt.pointShadowMap.value=V.state.pointShadowMap,Wt.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Vt,W.uniformsList=null,Vt}function eh(C){if(C.uniformsList===null){let k=C.currentProgram.getUniforms();C.uniformsList=Es.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function nh(C,k){let G=mt.get(C);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Id(C,k,G,W,V){k.isScene!==!0&&(k=St),A.resetTextureUnits();let gt=k.fog,Et=W.isMeshStandardMaterial?k.environment:null,Lt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ri,Ot=(W.isMeshStandardMaterial?H:b).get(W.envMap||Et),$t=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Wt=!!G.morphAttributes.position,Ie=!!G.morphAttributes.normal,pn=!!G.morphAttributes.color,Ve=Un;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ve=_.toneMapping);let Jn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Se=Jn!==void 0?Jn.length:0,jt=mt.get(W),Ca=m.state.lights;if(Q===!0&&(pt===!0||C!==M)){let yn=C===M&&W.id===I;Gt.setState(W,C,yn)}let Ce=!1;W.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ca.state.version||jt.outputColorSpace!==Lt||V.isBatchedMesh&&jt.batching===!1||!V.isBatchedMesh&&jt.batching===!0||V.isInstancedMesh&&jt.instancing===!1||!V.isInstancedMesh&&jt.instancing===!0||V.isSkinnedMesh&&jt.skinning===!1||!V.isSkinnedMesh&&jt.skinning===!0||V.isInstancedMesh&&jt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&jt.instancingColor===!1&&V.instanceColor!==null||jt.envMap!==Ot||W.fog===!0&&jt.fog!==gt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Gt.numPlanes||jt.numIntersection!==Gt.numIntersection)||jt.vertexAlphas!==$t||jt.vertexTangents!==Vt||jt.morphTargets!==Wt||jt.morphNormals!==Ie||jt.morphColors!==pn||jt.toneMapping!==Ve||ot.isWebGL2===!0&&jt.morphTargetsCount!==Se)&&(Ce=!0):(Ce=!0,jt.__version=W.version);let Ii=jt.currentProgram;Ce===!0&&(Ii=Hr(W,k,V));let ih=!1,tr=!1,Pa=!1,Ke=Ii.getUniforms(),Li=jt.uniforms;if(Y.useProgram(Ii.program)&&(ih=!0,tr=!0,Pa=!0),W.id!==I&&(I=W.id,tr=!0),ih||M!==C){Ke.setValue(D,"projectionMatrix",C.projectionMatrix),Ke.setValue(D,"viewMatrix",C.matrixWorldInverse);let yn=Ke.map.cameraPosition;yn!==void 0&&yn.setValue(D,zt.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&Ke.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ke.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,tr=!0,Pa=!0)}if(V.isSkinnedMesh){Ke.setOptional(D,V,"bindMatrix"),Ke.setOptional(D,V,"bindMatrixInverse");let yn=V.skeleton;yn&&(ot.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Ke.setValue(D,"boneTexture",yn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ke.setOptional(D,V,"batchingTexture"),Ke.setValue(D,"batchingTexture",V._matricesTexture,A));let Ia=G.morphAttributes;if((Ia.position!==void 0||Ia.normal!==void 0||Ia.color!==void 0&&ot.isWebGL2===!0)&&te.update(V,G,Ii),(tr||jt.receiveShadow!==V.receiveShadow)&&(jt.receiveShadow=V.receiveShadow,Ke.setValue(D,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Li.envMap.value=Ot,Li.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),tr&&(Ke.setValue(D,"toneMappingExposure",_.toneMappingExposure),jt.needsLights&&Ld(Li,Pa),gt&&W.fog===!0&&ht.refreshFogUniforms(Li,gt),ht.refreshMaterialUniforms(Li,W,J,z,bt),Es.upload(D,eh(jt),Li,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Es.upload(D,eh(jt),Li,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ke.setValue(D,"center",V.center),Ke.setValue(D,"modelViewMatrix",V.modelViewMatrix),Ke.setValue(D,"normalMatrix",V.normalMatrix),Ke.setValue(D,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let yn=W.uniformsGroups;for(let La=0,Ud=yn.length;La<Ud;La++)if(ot.isWebGL2){let sh=yn[La];le.update(sh,Ii),le.bind(sh,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Ld(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Dd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,k,G){mt.get(C.texture).__webglTexture=k,mt.get(C.depthTexture).__webglTexture=G;let W=mt.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){let G=mt.get(C);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,G=0){w=C,T=k,S=G;let W=!0,V=null,gt=!1,Et=!1;if(C){let Ot=mt.get(C);Ot.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(D.FRAMEBUFFER,null),W=!1):Ot.__webglFramebuffer===void 0?A.setupRenderTarget(C):Ot.__hasExternalTextures&&A.rebindTextures(C,mt.get(C.texture).__webglTexture,mt.get(C.depthTexture).__webglTexture);let $t=C.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Et=!0);let Vt=mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?V=Vt[k][G]:V=Vt[k],gt=!0):ot.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?V=mt.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[G]:V=Vt,E.copy(C.viewport),N.copy(C.scissor),F=C.scissorTest}else E.copy(nt).multiplyScalar(J).floor(),N.copy(it).multiplyScalar(J).floor(),F=dt;if(Y.bindFramebuffer(D.FRAMEBUFFER,V)&&ot.drawBuffers&&W&&Y.drawBuffers(C,V),Y.viewport(E),Y.scissor(N),Y.setScissorTest(F),gt){let Ot=mt.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,G)}else if(Et){let Ot=mt.get(C.texture),$t=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,G||0,$t)}I=-1},this.readRenderTargetPixels=function(C,k,G,W,V,gt,Et){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){Y.bindFramebuffer(D.FRAMEBUFFER,Lt);try{let Ot=C.texture,$t=Ot.format,Vt=Ot.type;if($t!==Dn&&yt.convert($t)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Vt===dr&&($.has("EXT_color_buffer_half_float")||ot.isWebGL2&&$.has("EXT_color_buffer_float"));if(Vt!==yi&&yt.convert(Vt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===xi&&(ot.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-W&&G>=0&&G<=C.height-V&&D.readPixels(k,G,W,V,yt.convert($t),yt.convert(Vt),gt)}finally{let Ot=w!==null?mt.get(w).__webglFramebuffer:null;Y.bindFramebuffer(D.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(C,k,G=0){let W=Math.pow(2,-G),V=Math.floor(k.image.width*W),gt=Math.floor(k.image.height*W);A.setTexture2D(k,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,C.x,C.y,V,gt),Y.unbindTexture()},this.copyTextureToTexture=function(C,k,G,W=0){let V=k.image.width,gt=k.image.height,Et=yt.convert(G.format),Lt=yt.convert(G.type);A.setTexture2D(G,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment),k.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,C.x,C.y,V,gt,Et,Lt,k.image.data):k.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Et,k.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,W,C.x,C.y,Et,Lt,k.image),W===0&&G.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(C,k,G,W,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=C.max.x-C.min.x+1,Et=C.max.y-C.min.y+1,Lt=C.max.z-C.min.z+1,Ot=yt.convert(W.format),$t=yt.convert(W.type),Vt;if(W.isData3DTexture)A.setTexture3D(W,0),Vt=D.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),Vt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);let Wt=D.getParameter(D.UNPACK_ROW_LENGTH),Ie=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ve=D.getParameter(D.UNPACK_SKIP_ROWS),Jn=D.getParameter(D.UNPACK_SKIP_IMAGES),Se=G.isCompressedTexture?G.mipmaps[V]:G.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,C.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,C.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,C.min.z),G.isDataTexture||G.isData3DTexture?D.texSubImage3D(Vt,V,k.x,k.y,k.z,gt,Et,Lt,Ot,$t,Se.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Vt,V,k.x,k.y,k.z,gt,Et,Lt,Ot,Se.data)):D.texSubImage3D(Vt,V,k.x,k.y,k.z,gt,Et,Lt,Ot,$t,Se),D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ie),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Jn),V===0&&W.generateMipmaps&&D.generateMipmap(Vt),Y.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),Y.unbindTexture()},this.resetState=function(){T=0,S=0,w=null,Y.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===al?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===$o?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?Vi:qu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Vi?pe:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Fc=class extends Ls{};Fc.prototype.isWebGL1Renderer=!0;var Ds=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},On=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var xr=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tu=new ve,Bc=new pr,lo=new Rs,ho=new P,Do=class extends tn{constructor(t=new ce,e=new xr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,t.ray.intersectsSphere(lo)===!1)return;Tu.copy(s).invert(),Bc.copy(t.ray).applyMatrix4(Tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=l.getX(g);ho.fromBufferAttribute(u,m),Au(ho,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)ho.fromBufferAttribute(u,g),Au(ho,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Au(i,t,e,n,s,r,o){let a=Bc.distanceSqToPoint(i);if(a<e){let c=new P;Bc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var qn=class extends Sn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new j:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],o=[],a=new P,c=new ve;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ye(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_r=class extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new j,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},kc=class extends _r{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ll(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var uo=new P,hc=new ll,uc=new ll,fc=new ll,yr=class extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),l=uo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),hc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),uc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),fc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),uc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),fc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(hc.calc(c),uc.calc(c),fc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ru(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function T_(i,t){let e=1-i;return e*e*t}function A_(i,t){return 2*(1-i)*i*t}function R_(i,t){return i*i*t}function lr(i,t,e,n){return T_(i,t)+A_(i,e)+R_(i,n)}function C_(i,t){let e=1-i;return e*e*e*t}function P_(i,t){let e=1-i;return 3*e*e*i*t}function I_(i,t){return 3*(1-i)*i*i*t}function L_(i,t){return i*i*i*t}function hr(i,t,e,n,s){return C_(i,t)+P_(i,e)+I_(i,n)+L_(i,s)}var Uo=class extends En{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vr=class extends En{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y),hr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},No=class extends En{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends En{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends En{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends En{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y),lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ru(a,c.x,l.x,h.x,u.x),Ru(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this}},ko=Object.freeze({__proto__:null,ArcCurve:kc,CatmullRomCurve3:yr,CubicBezierCurve:Uo,CubicBezierCurve3:vr,EllipseCurve:_r,LineCurve:No,LineCurve3:Hc,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Fo,SplineCurve:Bo}),zc=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ko[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ko[s.type]().fromJSON(s))}return this}},qi=class extends zc{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new No(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Oo(this.currentPoint.clone(),new j(t,e),new j(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Uo(this.currentPoint.clone(),new j(t,e),new j(n,s),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new _r(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Us=class i extends ce{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new P,f=new j,d=new P,g=new P,x=new P,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),T=Math.cos(_);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*T,o.push(u.x,u.y,u.z),f.x=y/e,f.y=S/(t.length-1),a.push(f.x,f.y);let w=c[3*S+0]*v,I=c[3*S+1],M=c[3*S+0]*T;l.push(w,I,M)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,T=v,S=v+t.length,w=v+t.length+1,I=v+1;r.push(T,S,I),r.push(w,I,S)}this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("uv",new Ct(a,2)),this.setAttribute("normal",new Ct(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mr=class i extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new P,h=new j;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},he=class i extends ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function y(){let v=new P,T=new P,S=0,w=(e-t)/n;for(let I=0;I<=r;I++){let M=[],E=I/r,N=E*(e-t)+t;for(let F=0;F<=s;F++){let O=F/s,L=O*c+a,B=Math.sin(L),z=Math.cos(L);T.x=N*B,T.y=-E*n+m,T.z=N*z,u.push(T.x,T.y,T.z),v.set(B,w,z).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-E),M.push(g++)}x.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let E=x[M][I],N=x[M+1][I],F=x[M+1][I+1],O=x[M][I+1];h.push(E,N,O),h.push(N,F,O),S+=6}l.addGroup(p,S,0),p+=S}function _(v){let T=g,S=new j,w=new P,I=0,M=v===!0?t:e,E=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let N=g;for(let F=0;F<=s;F++){let L=F/s*c+a,B=Math.cos(L),z=Math.sin(L);w.x=M*z,w.y=m*E,w.z=M*B,u.push(w.x,w.y,w.z),f.push(0,E,0),S.x=B*.5+.5,S.y=z*.5*E+.5,d.push(S.x,S.y),g++}for(let F=0;F<s;F++){let O=T+F,L=N+F;v===!0?h.push(L,L+1,O):h.push(L+1,L,O),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ci=class i extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vc=class i extends ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new P,v=new P,T=new P;for(let S=0;S<e.length;S+=3)d(e[S+0],_),d(e[S+1],v),d(e[S+2],T),c(_,v,T,y)}function c(y,_,v,T){let S=T+1,w=[];for(let I=0;I<=S;I++){w[I]=[];let M=y.clone().lerp(v,I/S),E=_.clone().lerp(v,I/S),N=S-I;for(let F=0;F<=N;F++)F===0&&I===S?w[I][F]=M:w[I][F]=M.clone().lerp(E,F/N)}for(let I=0;I<S;I++)for(let M=0;M<2*(S-I)-1;M++){let E=Math.floor(M/2);M%2===0?(f(w[I][E+1]),f(w[I+1][E]),f(w[I][E])):(f(w[I][E+1]),f(w[I+1][E+1]),f(w[I+1][E]))}}function l(y){let _=new P;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let y=new P;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let v=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;o.push(v,1-T)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],v=o[y+2],T=o[y+4],S=Math.max(_,v,T),w=Math.min(_,v,T);S>.9&&w<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){let y=new P,_=new P,v=new P,T=new P,S=new j,w=new j,I=new j;for(let M=0,E=0;M<r.length;M+=9,E+=6){y.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),S.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),T.copy(y).add(_).add(v).divideScalar(3);let N=m(T);x(S,E+0,y,N),x(w,E+2,_,N),x(I,E+4,v,N)}}function x(y,_,v,T){T<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var $e=class extends qi{constructor(t){super(t),this.uuid=Bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new qi().fromJSON(s))}return this}},D_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=nf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=B_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return br(r,o,e,a,c,d,0),o}};function nf(i,t,e,n,s){let r,o;if(s===Z_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Cu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Cu(r,i[r],i[r+1],o);return o&&Jo(o,o.next)&&(Er(o),o=o.next),o}function Xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Jo(e,e.next)||we(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,r,o){if(!i)return;!o&&r&&G_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?N_(i,n,s,r):U_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Er(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=O_(Xi(i),t,e),br(i,t,e,n,s,r,2)):o===2&&F_(i,t,e,n,s,r):br(Xi(i),t,e,n,s,r,1);break}}}function U_(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ms(s,a,r,c,o,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function N_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Gc(d,g,t,e,n),y=Gc(x,m,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ms(a,h,c,u,l,f,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ms(a,h,c,u,l,f,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ms(a,h,c,u,l,f,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ms(a,h,c,u,l,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function O_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Jo(s,r)&&sf(s,n,n.next,r)&&Sr(s,r)&&Sr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Er(n),Er(n.next),n=i=r),n=n.next}while(n!==i);return Xi(n)}function F_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&X_(o,a)){let c=rf(o,a);o=Xi(o,o.next),c=Xi(c,c.next),br(o,t,e,n,s,r,0),br(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function B_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=nf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(q_(l));for(s.sort(k_),r=0;r<s.length;r++)e=H_(s[r],e);return e}function k_(i,t){return i.x-t.x}function H_(i,t){let e=z_(i,t);if(!e)return t;let n=rf(e,i);return Xi(n,n.next),Xi(e,e.next)}function z_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ms(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Sr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&V_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function V_(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function G_(i,t,e,n){let s=i;do s.z===0&&(s.z=Gc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W_(s)}function W_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Gc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function q_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ms(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function X_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Y_(i,t)&&(Sr(i,t)&&Sr(t,i)&&$_(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||Jo(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Jo(i,t){return i.x===t.x&&i.y===t.y}function sf(i,t,e,n){let s=po(we(i,t,e)),r=po(we(i,t,n)),o=po(we(e,n,i)),a=po(we(e,n,t));return!!(s!==r&&o!==a||s===0&&fo(i,e,t)||r===0&&fo(i,n,t)||o===0&&fo(e,i,n)||a===0&&fo(e,t,n))}function fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function po(i){return i>0?1:i<0?-1:0}function Y_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function $_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function rf(i,t){let e=new Wc(i.i,i.x,i.y),n=new Wc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Cu(i,t,e,n){let s=new Wc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var si=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Pu(t),Iu(n,t);let o=t.length;e.forEach(Pu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Iu(n,e[c]);let a=D_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Pu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Iu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Fn=class i extends ce{constructor(t=new $e([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Ct(s,3)),this.setAttribute("uv",new Ct(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:J_,_,v=!1,T,S,w,I;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,T=p.computeFrenetFrames(h,!1),S=new P,w=new P,I=new P),f||(m=0,d=0,g=0,x=0);let M=a.extractPoints(l),E=M.shape,N=M.holes;if(!si.isClockWise(E)){E=E.reverse();for(let D=0,at=N.length;D<at;D++){let $=N[D];si.isClockWise($)&&(N[D]=$.reverse())}}let O=si.triangulateShape(E,N),L=E;for(let D=0,at=N.length;D<at;D++){let $=N[D];E=E.concat($)}function B(D,at,$){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(at,$)}let z=E.length,J=O.length;function Z(D,at,$){let ot,Y,Tt,mt=D.x-at.x,A=D.y-at.y,b=$.x-D.x,H=$.y-D.y,st=mt*mt+A*A,tt=mt*H-A*b;if(Math.abs(tt)>Number.EPSILON){let K=Math.sqrt(st),vt=Math.sqrt(b*b+H*H),ht=at.x-A/K,_t=at.y+mt/K,Pt=$.x-H/vt,Gt=$.y+b/vt,et=((Pt-ht)*H-(Gt-_t)*b)/(mt*H-A*b);ot=ht+mt*et-D.x,Y=_t+A*et-D.y;let ae=ot*ot+Y*Y;if(ae<=2)return new j(ot,Y);Tt=Math.sqrt(ae/2)}else{let K=!1;mt>Number.EPSILON?b>Number.EPSILON&&(K=!0):mt<-Number.EPSILON?b<-Number.EPSILON&&(K=!0):Math.sign(A)===Math.sign(H)&&(K=!0),K?(ot=-A,Y=mt,Tt=Math.sqrt(st)):(ot=mt,Y=A,Tt=Math.sqrt(st/2))}return new j(ot/Tt,Y/Tt)}let X=[];for(let D=0,at=L.length,$=at-1,ot=D+1;D<at;D++,$++,ot++)$===at&&($=0),ot===at&&(ot=0),X[D]=Z(L[D],L[$],L[ot]);let nt=[],it,dt=X.concat();for(let D=0,at=N.length;D<at;D++){let $=N[D];it=[];for(let ot=0,Y=$.length,Tt=Y-1,mt=ot+1;ot<Y;ot++,Tt++,mt++)Tt===Y&&(Tt=0),mt===Y&&(mt=0),it[ot]=Z($[ot],$[Tt],$[mt]);nt.push(it),dt=dt.concat(it)}for(let D=0;D<m;D++){let at=D/m,$=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+x;for(let Y=0,Tt=L.length;Y<Tt;Y++){let mt=B(L[Y],X[Y],ot);xt(mt.x,mt.y,-$)}for(let Y=0,Tt=N.length;Y<Tt;Y++){let mt=N[Y];it=nt[Y];for(let A=0,b=mt.length;A<b;A++){let H=B(mt[A],it[A],ot);xt(H.x,H.y,-$)}}}let q=g+x;for(let D=0;D<z;D++){let at=f?B(E[D],dt[D],q):E[D];v?(w.copy(T.normals[0]).multiplyScalar(at.x),S.copy(T.binormals[0]).multiplyScalar(at.y),I.copy(_[0]).add(w).add(S),xt(I.x,I.y,I.z)):xt(at.x,at.y,0)}for(let D=1;D<=h;D++)for(let at=0;at<z;at++){let $=f?B(E[at],dt[at],q):E[at];v?(w.copy(T.normals[D]).multiplyScalar($.x),S.copy(T.binormals[D]).multiplyScalar($.y),I.copy(_[D]).add(w).add(S),xt(I.x,I.y,I.z)):xt($.x,$.y,u/h*D)}for(let D=m-1;D>=0;D--){let at=D/m,$=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+x;for(let Y=0,Tt=L.length;Y<Tt;Y++){let mt=B(L[Y],X[Y],ot);xt(mt.x,mt.y,u+$)}for(let Y=0,Tt=N.length;Y<Tt;Y++){let mt=N[Y];it=nt[Y];for(let A=0,b=mt.length;A<b;A++){let H=B(mt[A],it[A],ot);v?xt(H.x,H.y+_[h-1].y,_[h-1].x+$):xt(H.x,H.y,u+$)}}}Q(),pt();function Q(){let D=s.length/3;if(f){let at=0,$=z*at;for(let ot=0;ot<J;ot++){let Y=O[ot];Ut(Y[2]+$,Y[1]+$,Y[0]+$)}at=h+m*2,$=z*at;for(let ot=0;ot<J;ot++){let Y=O[ot];Ut(Y[0]+$,Y[1]+$,Y[2]+$)}}else{for(let at=0;at<J;at++){let $=O[at];Ut($[2],$[1],$[0])}for(let at=0;at<J;at++){let $=O[at];Ut($[0]+z*h,$[1]+z*h,$[2]+z*h)}}n.addGroup(D,s.length/3-D,0)}function pt(){let D=s.length/3,at=0;bt(L,at),at+=L.length;for(let $=0,ot=N.length;$<ot;$++){let Y=N[$];bt(Y,at),at+=Y.length}n.addGroup(D,s.length/3-D,1)}function bt(D,at){let $=D.length;for(;--$>=0;){let ot=$,Y=$-1;Y<0&&(Y=D.length-1);for(let Tt=0,mt=h+m*2;Tt<mt;Tt++){let A=z*Tt,b=z*(Tt+1),H=at+ot+A,st=at+Y+A,tt=at+Y+b,K=at+ot+b;zt(H,st,tt,K)}}}function xt(D,at,$){c.push(D),c.push(at),c.push($)}function Ut(D,at,$){St(D),St(at),St($);let ot=s.length/3,Y=y.generateTopUV(n,s,ot-3,ot-2,ot-1);kt(Y[0]),kt(Y[1]),kt(Y[2])}function zt(D,at,$,ot){St(D),St(at),St(ot),St(at),St($),St(ot);let Y=s.length/3,Tt=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);kt(Tt[0]),kt(Tt[1]),kt(Tt[3]),kt(Tt[1]),kt(Tt[2]),kt(Tt[3])}function St(D){s.push(c[D*3+0]),s.push(c[D*3+1]),s.push(c[D*3+2])}function kt(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return K_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ko[s.type]().fromJSON(s)),new i(n,t.options)}},J_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new j(r,o),new j(a,c),new j(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new j(o,1-c),new j(l,1-u),new j(f,1-g),new j(x,1-p)]:[new j(a,1-c),new j(h,1-u),new j(d,1-g),new j(m,1-p)]}};function K_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var hn=class i extends Vc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ho=class i extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new P,g=new j;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,v=y+n+1,T=y+n+2,S=y+1;a.push(_,v,S),a.push(v,T,S)}}this.setIndex(a),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},zo=class i extends ce{constructor(t=new $e([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(o,2));function l(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;si.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];si.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=si.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],_=y[0]+u,v=y[1]+u,T=y[2]+u;n.push(_,v,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return j_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function j_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Vo=class i extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,f=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){let S=T/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(S+v,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],T=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&d.push(_,v,S),(p!==n-1||c<Math.PI)&&d.push(v,T,S)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wn=class i extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Go=class i extends ce{constructor(t=new Fo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,c=new P,l=new j,h=new P,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),p()}function m(_){h=t.getPointAt(_/e,h);let v=o.normals[_],T=o.binormals[_];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,I=Math.sin(w),M=-Math.cos(w);c.x=M*v.x+I*T.x,c.y=M*v.y+I*T.y,c.z=M*v.z+I*T.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let T=(s+1)*(_-1)+(v-1),S=(s+1)*_+(v-1),w=(s+1)*_+v,I=(s+1)*(_-1)+v;g.push(T,S,I),g.push(S,w,I)}}function y(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)l.x=_/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ko[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var an=class extends oi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xn=class extends oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function mo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Q_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ns=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qc=class extends Ns{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fh:r=t,a=2*e-n;break;case Bh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fh:o=t,c=2*n-e;break;case Bh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+y*o[l+T]+_*o[c+T]+v*o[u+T];return r}},Xc=class extends Ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Yc=class extends Ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mo(e,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mo(t.times,Array),values:mo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case _o:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Q_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=_o;var Yi=class extends Bn{};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=xo;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends Bn{};$c.prototype.ValueTypeName="color";var Zc=class extends Bn{};Zc.prototype.ValueTypeName="number";var Jc=class extends Ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Gn.slerpFlat(r,0,o,l-a,o,l,c);return r}},wr=class extends Bn{InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.DefaultInterpolation=_o;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Bn{};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=xo;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends Bn{};Kc.prototype.ValueTypeName="vector";var jc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},ty=new jc,Qc=class{constructor(t){this.manager=t!==void 0?t:ty,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Os=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Wo=class extends Os{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dc=new ve,Lu=new P,Du=new P,qo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lu),Du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Du),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Uu=new ve,or=new P,pc=new P,tl=class extends qo{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(t.matrixWorld),n.position.copy(or),pc.copy(n.position),pc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pc),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu)}},Tr=class extends Os{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},el=class extends qo{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},en=class extends Os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new el}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},bi=class extends Os{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var hl="\\[\\]\\.:\\/",ey=new RegExp("["+hl+"]","g"),ul="[^"+hl+"]",ny="[^"+hl.replace("\\.","")+"]",iy=/((?:WC+[\/:])*)/.source.replace("WC",ul),sy=/(WCOD+)?/.source.replace("WCOD",ny),ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ul),oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ul),ay=new RegExp("^"+iy+sy+ry+oy+"$"),cy=["material","materials","bones","map"],nl=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ey,"")}static parseTrackName(t){let e=ay.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=nl;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zv=new Float32Array(1);var Fs=class{constructor(t,e,n=0,s=1/0){this.ray=new pr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return il(t,this,n,e),n.sort(Nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)il(t[s],this,n,e);return n.sort(Nu),n}};function Nu(i,t){return i.distance-t.distance}function il(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)il(s[r],t,e,!0)}}var Xo=class{constructor(){this.type="ShapePath",this.color=new wt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new qi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){let y=[];for(let _=0,v=p.length;_<v;_++){let T=p[_],S=new $e;S.curves=T.curves,y.push(S)}return y}function n(p,y){let _=y.length,v=!1;for(let T=_-1,S=0;S<_;T=S++){let w=y[T],I=y[S],M=I.x-w.x,E=I.y-w.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(w=y[S],M=-M,I=y[T],E=-E),p.y<w.y||p.y>I.y)continue;if(p.y===w.y){if(p.x===w.x)return!0}else{let N=E*(p.x-w.x)-M*(p.y-w.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(p.y!==w.y)continue;if(I.x<=p.x&&p.x<=w.x||w.x<=p.x&&p.x<=I.x)return!0}}return v}let s=si.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new $e,c.curves=a.curves,l.push(c),l;let h=!s(r[0].getPoints());h=t?!h:h;let u=[],f=[],d=[],g=0,x;f[g]=void 0,d[g]=[];for(let p=0,y=r.length;p<y;p++)a=r[p],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!h&&f[g]&&g++,f[g]={s:new $e,p:x},f[g].s.curves=a.curves,h&&g++,d[g]=[]):d[g].push({h:a,p:x[0]});if(!f[0])return e(r);if(f.length>1){let p=!1,y=0;for(let _=0,v=f.length;_<v;_++)u[_]=[];for(let _=0,v=f.length;_<v;_++){let T=d[_];for(let S=0;S<T.length;S++){let w=T[S],I=!0;for(let M=0;M<f.length;M++)n(w.p,f[M].p)&&(_!==M&&y++,I?(I=!1,u[M].push(w)):p=!0);I&&u[_].push(w)}}y>0&&p===!1&&(d=u)}let m;for(let p=0,y=f.length;p<y;p++){c=f[p].s,l.push(c),m=d[p];for(let _=0,v=m.length;_<v;_++)c.holes.push(m[_].h)}return l}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);function nn(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ly(i,t,e){let n=Math.ceil(i/t)+1,s=[];for(let a=0;a<n;a++){s[a]=[];for(let c=0;c<n;c++)s[a][c]=e()}let r=(a,c)=>s[(c%(n-1)+(n-1))%(n-1)][(a%(n-1)+(n-1))%(n-1)],o=a=>a*a*(3-2*a);return(a,c)=>{let l=a/t,h=c/t,u=Math.floor(l),f=Math.floor(h),d=o(l-u),g=o(h-f),x=r(u,f),m=r(u+1,f),p=r(u,f+1),y=r(u+1,f+1);return(x*(1-d)+m*d)*(1-g)+(p*(1-d)+y*d)*g}}function Ue(i,t,e=4,n=16){let s=[];for(let r=0;r<e;r++)s.push(ly(i,Math.max(2,n>>r),t));return(r,o)=>{let a=0,c=.5,l=0;for(let h of s)a+=h(r,o)*c,l+=c,c*=.5;return a/l}}var se=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],Ne=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],fl=i=>Math.max(0,Math.min(255,i|0)),cf=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function _n(i,t,e=i){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=s.createImageData(i,e),o=r.data;for(let a=0;a<e;a++)for(let c=0;c<i;c++){let[l,h,u]=t(c,a),f=(a*i+c)*4;o[f]=fl(l),o[f+1]=fl(h),o[f+2]=fl(u),o[f+3]=255}return s.putImageData(r,0,0),n}function dl(i,t,e,n,s,r){let o=s(i*.35,t*6+r)*.6+s(i*3,t*.2)*.4,a=Math.sin((i*.9+o*18)*.7)*.5+.5;return Ne(e,n,a*.55+o*.45)}function zs(i,t,e,n,s,r,o){let a=Ne(e,n,r(i,t)),c=Math.abs(o(i,t)-.5);return c<.03&&(a=Ne(a,s,.7-c*14)),a}function Ko(i){return _n(256,(n,s)=>{let r=Math.floor(n/32),o=Math.floor(s/32),a=(r+o)%2===1,c=n%32,l=s%32,h=i(n,s,r,o,a,c,l);return(c===0||l===31)&&(h=Ne(h,[0,0,0],.45)),(c===31||l===0)&&(h=Ne(h,[255,255,255],a?.08:.16)),h})}var hy={glass(){let i=nn(7),t=Ue(256,i,3,24),e=se("#b488c6"),n=se("#6f4588"),s=se("#3b1247"),r=se("#160618");return Ko((o,a,c,l,h,u,f)=>{let d=h?Ne(s,r,t(o,a)):Ne(e,n,t(o,a));return Math.abs((u+f)%32-11)<2&&(d=Ne(d,[255,240,255],h?.12:.22)),d})},wood(){let i=nn(8),t=Ue(256,i,4,24),e=se("#d8c39a"),n=se("#a98c5e"),s=se("#5a3b24"),r=se("#2e1b10");return Ko((o,a,c,l,h)=>h?dl(o+c*13,a+l*7,s,r,t,l*31):dl(a+l*5,o+c*11,e,n,t,c*17))},marble(){let i=nn(9),t=Ue(256,i,4,20),e=Ue(256,i,3,40),n=se("#efe6d2"),s=se("#cbbfa6"),r=se("#24423a"),o=se("#0c1a16");return Ko((a,c,l,h,u)=>u?zs(a+l*40,c,r,o,se("#7fa898"),t,e):zs(a,c+h*40,n,s,se("#8f8470"),t,e))},tile(){let i=nn(10),t=Ue(256,i,2,16);return Ko((e,n,s,r,o)=>{let a=t(e,n)*16+cf[n%4*4+e%4],c=o?[30,30,36]:[214,210,200];return a>20?Ne(c,o?[60,60,70]:[170,166,158],.6):c})}},uy={glass(){return of(99)},tile(){return of(98)},wood(){let i=nn(97),t=Ue(64,i,4,16);return _n(64,(e,n)=>dl(e,n,se("#3b2416"),se("#1a0e08"),t,0))},marble(){let i=nn(96),t=Ue(64,i,3,12),e=Ue(64,i,3,20);return _n(64,(n,s)=>zs(n,s,se("#3a3a36"),se("#16140f"),se("#8a7a5a"),t,e))}};function of(i){let t=nn(i),e=Ue(64,t,3,8),n=se("#b9bec6"),s=se("#4a4e56");return _n(64,(r,o)=>{let a=Ne(n,s,(Math.sin(o*.55)*.5+.5)*.7+e(r,o)*.3);return o%16===3&&(a=Ne(a,[255,255,255],.5)),o%16===11&&(a=Ne(a,[0,0,0],.5)),a})}var fy={stars(){let i=nn(5);return _n(128,()=>{let t=i();return t<.012?[70,66,80]:t<.02?[40,36,48]:[4,2,6]})},velvet(){let i=nn(6),t=Ue(128,i,5,32),e=se("#4a1d22"),n=se("#1e0b0e");return _n(128,(s,r)=>{let o=Ne(e,n,t(s,r));return i()<.05&&(o=Ne(o,e,.4)),o})},void(){let i=nn(4),t=Ue(128,i,4,32);return _n(128,(e,n)=>Ne([26,12,44],[6,3,14],t(e,n)+cf[n%4*4+e%4]/64))}},lf={stars:{bg:197124,fog:[12,26],ambient:[5261418,1],key:[16777215,1.6],fill:[16734928,18],fill2:[5234943,10]},velvet:{bg:722183,fog:[11,24],ambient:[6969938,1.2],key:[16769984,1.9],fill:[16730682,14],fill2:[16756848,4]},void:{bg:853528,fog:[10,22],ambient:[4209264,1.1],key:[14213375,1.5],fill:[9063167,16],fill2:[4243711,10]}},dy={ivoryWhite(){let i=nn(11),t=Ue(64,i,4,12),e=Ue(64,i,3,20);return _n(64,(n,s)=>zs(n,s,se("#efe4cc"),se("#c9b893"),se("#8f8470"),t,e))},ivoryBlack(){let i=nn(23),t=Ue(64,i,4,10),e=se("#3a2f28"),n=se("#17110e");return _n(64,(s,r)=>Ne(Ne(e,n,t(s,r)),n,(Math.sin(r*.8+t(s*2,r)*6)*.5+.5)*.3))},marbleWhite(){let i=nn(31),t=Ue(64,i,4,10),e=Ue(64,i,3,16);return _n(64,(n,s)=>zs(n,s,se("#f4f2ee"),se("#d4d0c8"),se("#7a7a80"),t,e))},marbleBlack(){let i=nn(37),t=Ue(64,i,4,10),e=Ue(64,i,3,16);return _n(64,(n,s)=>zs(n,s,se("#1e3a32"),se("#08120e"),se("#9ac0b0"),t,e))},brushed(){let i=nn(41),t=Ue(64,i,3,6);return _n(64,(e,n)=>{let s=200+t(e*.2,n*4)*55;return[s,s,s]})}};function py(){let t=nn(3),e=Ue(64,t,2,16),n=["px","nx","py","ny","pz","nz"],s={px:(a,c)=>[1,-c,-a],nx:(a,c)=>[-1,-c,a],py:(a,c)=>[a,1,c],ny:(a,c)=>[a,-1,-c],pz:(a,c)=>[a,-c,1],nz:(a,c)=>[-a,-c,-1]},r=n.map(a=>_n(64,(c,l)=>{let h=c/63*2-1,u=l/63*2-1,[f,d,g]=s[a](h,u),x=Math.hypot(f,d,g),m=d/x,p=Math.atan2(g,f),y=e(c,l)*.15;if(m>.55){let T=Math.floor(p/Math.PI*4+100)%2;return Ne(T?[218,218,230]:[138,138,160],[86,82,106],(1-m)*.8+y)}if(m>.12)return Ne([215,218,228],[70,66,90],(m-.12)/.43+y);if(m>-.06)return[255,252,255];let _=Math.floor(p/Math.PI*6+100)%2,v=Math.min(1,(-m-.06)/.9);return Ne(_?[120,70,110]:[60,110,120],[8,4,10],v*.9+y)})),o=new Ps(r);return o.magFilter=Ee,o.minFilter=Ee,o.generateMipmaps=!1,o.colorSpace=pe,o.needsUpdate=!0,o}function af(i){return i.magFilter=Ee,i.minFilter=Ee,i.generateMipmaps=!1,i.colorSpace=pe,i.wrapS=i.wrapT=ur,i.needsUpdate=!0,i}var jo=class{constructor(){this.cache=new Map,this.overrides={},this.env=null}async loadOverrides(t=[]){await Promise.all(t.map(e=>new Promise(n=>{let s=new Image;s.onload=()=>{this.overrides[e]=af(new qn(s)),n()},s.onerror=()=>n(),s.src=`assets/textures/${e}.png`})))}get(t,e,n){return n&&this.overrides[n]?this.overrides[n]:(this.cache.has(t)||this.cache.set(t,af(new qn(e()))),this.cache.get(t))}board(t){return this.get("board:"+t,hy[t],"board")}rim(t){return this.get("rim:"+t,uy[t],"rim")}table(t){return this.get("table:"+t,fy[t],"table")}piece(t,e){return this.get("piece:"+t,dy[t],e)}envMap(){return this.env||(this.env=py()),this.env}};var my=4,pl=.8,gy=.75;function xy(i){return new ve().set(0,0,-pl,0,gy,0,0,0,0,-pl,0,pl*i,0,0,0,1)}var Qo=[[0,0],[.33,0],[.33,.07],[.25,.12]],_y={p:[...Qo,[.17,.3],[.12,.38],[.19,.42],[.15,.5],[.08,.6],[0,.63]],r:[...Qo,[.21,.42],[.27,.5],[.27,.68],[0,.68]],n:[...Qo,[.2,.3],[0,.3]],b:[...Qo,[.2,.42],[.13,.5],[.23,.58],[.21,.7],[.12,.84],[.06,.88],[0,.9]],q:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.62],[.28,.72],[.29,.8],[.2,.88],[.14,.98],[0,1]],k:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.64],[.29,.74],[.29,.84],[.2,.92],[.09,.98],[0,.98]]},yy={p:.63,r:.8,n:.9,b:1,q:1.14,k:1.25};function vy(i,t=my){let e=Math.max(...i.map(c=>c[1]))||1,n=i.map(([c,l],h)=>{let u=[];if(h%2===1&&c>0){u.push(0);for(let f=0;f<t;f++)u.push((f+.5)*Math.PI/t);u.push(Math.PI)}else for(let f=0;f<=t;f++)u.push(f*Math.PI/t);return u.map(f=>({p:[c*Math.sin(f),l,c*Math.cos(f)],uv:[f/Math.PI,l/e],a:f}))}),s=[],r=[],o=(c,l,h)=>{let u=l.p[0]-c.p[0],f=l.p[1]-c.p[1],d=l.p[2]-c.p[2],g=h.p[0]-c.p[0],x=h.p[1]-c.p[1],m=h.p[2]-c.p[2];if(!(Math.hypot(f*m-d*x,d*g-u*m,u*x-f*g)<1e-9))for(let p of[c,l,h])s.push(...p.p),r.push(...p.uv)};for(let c=0;c<n.length-1;c++){let l=n[c],h=n[c+1],u=0,f=0;for(;u<l.length-1||f<h.length-1;){let d=u<l.length-1?l[u+1].a:1/0,g=f<h.length-1?h[f+1].a:1/0;d<=g?(o(l[u],l[u+1],h[f]),u++):(o(l[u],h[f+1],h[f]),f++)}}let a=new ce;return a.setAttribute("position",new Ct(s,3)),a.setAttribute("uv",new Ct(r,2)),a}var ta=(i,t,e,n,s,r)=>new ee(i,t,e).translate(n,s,r),hf=(i,t)=>new hn(i,0).translate(0,t,0),My=[[-.16,.28],[.16,.28],[.17,.5],[.3,.6],[.31,.72],[.14,.78],[.1,.9],[0,.82],[-.1,.9],[-.13,.76],[-.2,.6],[-.18,.4]],by=[[-.18,.42],[-.2,.6],[-.13,.76],[-.1,.88],[-.04,.8],[-.07,.72],[-.12,.58],[-.1,.44]];function uf(i,t){let e=new $e,n=i.map(([o,a])=>[-o,a]);e.moveTo(n[0][0],n[0][1]);for(let o=1;o<n.length;o++)e.lineTo(n[o][0],n[o][1]);e.closePath();let s=new Fn(e,t),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),c=r.getY(o),l=r.getZ(o);r.setXYZ(o,Math.max(0,l),c,-a)}return s}var ml=.24;function Sy(){let i=uf(My,{depth:ml-.14,bevelEnabled:!0,bevelThickness:.14,bevelSize:.1,bevelOffset:-.1,bevelSegments:3,curveSegments:1}),t=uf(by,{depth:ml+.02,bevelEnabled:!0,bevelThickness:.05,bevelSize:.025,bevelOffset:-.025,bevelSegments:1,curveSegments:1}),e=new hn(.045,0).scale(.8,1,1).translate(ml+.01,.72,.09);return[i,t,e]}function Ey(i){let t=[vy(_y[i])];if(i==="r")for(let e of[-.18,0,.18])t.push(ta(.24,.12,.12,.12,.74,e));else if(i==="n")t.push(...Sy());else if(i==="b")t.push(hf(.06,.94));else if(i==="q"){t.push(hf(.08,1.06));for(let e of[-.24,-.12,0,.12,.24])t.push(ta(.16,.1,.06,.08,.86+(.24-Math.abs(e))*.25,e))}else i==="k"&&(t.push(ta(.16,.28,.08,.08,1.1,0)),t.push(ta(.16,.08,.26,.08,1.13,0)));return t}var gl=new Map;function wy(i){if(!gl.has(i)){let t=xy(yy[i]/2);gl.set(i,Ey(i).map(e=>(e.index&&(e=e.toNonIndexed()),e.applyMatrix4(t),e.computeVertexNormals(),e)))}return gl.get(i)}var Ty=new me({color:0,transparent:!0,opacity:.5,depthWrite:!1});function ff(i,t){let e=t.envMap(),n=c=>new an({flatShading:!0,...c}),s=c=>new xn({flatShading:!0,...c}),r=c=>t.overrides[c]||null;if(i==="chrome")return{white:n({color:15131890,map:r("white"),envMap:e,combine:Ar,reflectivity:r("white")?.3:.5,specular:10132136,shininess:90}),black:n({color:2788e3,map:r("black"),envMap:e,combine:Zi,reflectivity:.85,specular:1984080,shininess:60})};if(i==="matte")return{white:s({color:15327952}),black:s({color:2056046})};if(i==="ivory")return{white:s({map:t.piece("ivoryWhite","white")}),black:s({map:t.piece("ivoryBlack","black")})};if(i==="marble")return{white:n({map:t.piece("marbleWhite","white"),specular:4473924,shininess:40}),black:n({map:t.piece("marbleBlack","black"),specular:2240552,shininess:40})};let o=t.piece("brushed",null),a=(c,l)=>n({color:c,map:o,envMap:e,combine:Zi,reflectivity:.6,specular:l,shininess:70});return{white:a(16764778,9075280),black:a(9082532,3818576)}}function xl(i,t,e){let n=t==="w"?e.white:e.black,s=wy(i),r=new ne,o=new ne;for(let c of s)o.add(new Bt(c,n));let a=new ne;for(let c of s){let l=new Bt(c,Ty);l.renderOrder=4,a.add(l)}return a.scale.y=.02,a.position.set(.06,.004,.07),r.add(a,o),r.userData={type:i,color:t,body:o,shadow:a},r}function df(){let i=new Bt(new wn(.46,.035,4,12),new me({color:8382975}));return i.rotation.x=Math.PI/2,i.position.y=.03,i}var Gs=[{id:"pieces",label:"\uB9D0 \uC7AC\uC9C8",hint:"\uCCB4\uC2A4\uB9D0 \uD45C\uBA74. \uBC18\uC0AC\uC640 \uC9C8\uAC10\uC774 \uD654\uBA74 \uC778\uC0C1\uC744 \uAC00\uC7A5 \uD06C\uAC8C \uBC14\uAFC9\uB2C8\uB2E4.",options:[{id:"chrome",label:"\uD06C\uB86C & \uC2DC\uC548",note:"Virtual Chess\uC2DD \uC0AC\uC804\uB80C\uB354 CG \uBC18\uC0AC"},{id:"matte",label:"\uBB34\uAD11 \uD50C\uB7AB",note:"\uBC18\uC0AC \uC5C6\uC774 \uBA74\uB9CC, \uB85C\uC6B0\uD3F4\uB9AC\uAC00 \uAC00\uC7A5 \uB610\uB837"},{id:"ivory",label:"\uC0C1\uC544 & \uD751\uB2E8",note:"\uB098\uBB47\uACB0\uACFC \uC0C1\uC544\uACB0, \uBC18\uC0AC \uC5C6\uC74C"},{id:"marble",label:"\uB300\uB9AC\uC11D",note:"\uD770 \uB300\uB9AC\uC11D\uACFC \uB179\uD751 \uB300\uB9AC\uC11D, \uC57D\uD55C \uAD11\uD0DD"},{id:"gold",label:"\uAE08 & \uC740",note:"\uD669\uB3D9\uBE5B \uAE08\uACFC \uCC28\uAC00\uC6B4 \uC740"}]},{id:"board",label:"\uBCF4\uB4DC",hint:"\uD310\uC758 \uC7AC\uC9C8. \uC790\uD64D \uC720\uB9AC\uB9CC \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE69\uB2C8\uB2E4.",options:[{id:"glass",label:"\uC790\uD64D \uC720\uB9AC",note:"\uBC18\uD22C\uBA85, \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE68"},{id:"wood",label:"\uD638\uB450\uB098\uBB34",note:"\uC804\uD1B5 \uB098\uBB47\uACB0 \uD310"},{id:"marble",label:"\uB300\uB9AC\uC11D \uD310",note:"\uD06C\uB9BC\uACFC \uC9D9\uC740 \uB179\uC0C9"},{id:"tile",label:"\uD751\uBC31 \uD0C0\uC77C",note:"\uB514\uB354\uB9C1\uB41C PS1 \uD0C0\uC77C"}]},{id:"backdrop",label:"\uBC30\uACBD\uACFC \uC870\uBA85",hint:"\uD310 \uBC14\uAE65\uC758 \uBC14\uB2E5, \uD558\uB298\uC0C9, \uC870\uBA85 \uC0C9\uC744 \uD568\uAED8 \uC815\uD569\uB2C8\uB2E4.",options:[{id:"stars",label:"\uC810\uBC15\uC774 \uD751",note:"Chessmaster \uD0C0\uC774\uD2C0 \uBC30\uACBD"},{id:"velvet",label:"\uBD89\uC740 \uBCA8\uBCB3",note:"\uB530\uB73B\uD55C \uC870\uBA85\uC758 \uCE74\uB4DC \uD14C\uC774\uBE14"},{id:"void",label:"\uBCF4\uB78F\uBE5B \uC2EC\uC5F0",note:"\uCC28\uAC00\uC6B4 \uC870\uBA85\uACFC \uADF8\uB77C\uB370\uC774\uC158"}]},{id:"frame",label:"UI \uD504\uB808\uC784",hint:"\uD654\uBA74 \uD14C\uB450\uB9AC, \uD328\uB110, \uBC84\uD2BC\uC758 \uC7A5\uC2DD.",options:[{id:"deco",label:"\uBC31\uB78D \uC544\uB974\uB370\uCF54",note:"\uAE08\uC18D \uD14C\uB450\uB9AC\uC640 \uD669\uB3D9 \uC7A5\uC2DD"},{id:"plain",label:"\uBBF8\uB2C8\uBA40 \uC120",note:"\uC587\uC740 \uC120, \uC7A5\uC2DD \uC5C6\uC74C"},{id:"neon",label:"\uB124\uC628",note:"\uC2DC\uC548\uACFC \uC790\uD64D \uBC1C\uAD11\uC120"}]},{id:"lettering",label:"\uD0C0\uC774\uD2C0 \uB808\uD130\uB9C1",hint:"\uD0C0\uC774\uD2C0, \uBC29 \uCF54\uB4DC, \uC2B9\uB9AC \uBB38\uAD6C\uC758 \uAE00\uC790 \uCC98\uB9AC.",options:[{id:"brass",label:"\uD669\uB3D9",note:"Chessmaster\uC2DD \uCCAD\uB3D9 \uADF8\uB77C\uB370\uC774\uC158"},{id:"chrome",label:"\uD06C\uB86C",note:"\uC740\uBE5B \uAE08\uC18D \uBC18\uC0AC"},{id:"neon",label:"\uB124\uC628",note:"\uC790\uD64D \uAE00\uC790\uC640 \uC2DC\uC548 \uC678\uACFD"},{id:"crown",label:"\uC655\uAD00",note:"\uC740\uBE5B \uAE4E\uC740 \uBA74, \uBCF4\uB78F\uBE5B \uB450\uAED8, \uC2DC\uC548 \uBCF4\uC11D"},{id:"robe",label:"\uB9DD\uD1A0",note:"\uBE68\uAC04 \uAE4E\uC740 \uBA74, \uD770 \uB2F4\uBE44\uD138 \uD14C\uB450\uB9AC, \uAE08\uB760"},{id:"velvet",label:"\uBCA8\uBCB3",note:"\uC655\uC88C\uC758 \uBCF4\uB77C \uBCA8\uBCB3\uACFC \uAE08 \uD14C\uB450\uB9AC"},{id:"disco",label:"\uB514\uC2A4\uCF54",note:"\uAE00\uC790\uB9C8\uB2E4 \uB2E4\uB978 \uC0C9, \uBC15\uC790\uB9C8\uB2E4 \uBC14\uB01C"}]},{id:"pixel",label:"3D \uD574\uC0C1\uB3C4",hint:"3D \uC7A5\uBA74\uC744 \uADF8\uB9AC\uB294 \uD574\uC0C1\uB3C4. \uC6D0\uBCF8\uC740 \uAE30\uAE30 \uD574\uC0C1\uB3C4\uB85C \uBA74\uC744 \uB610\uB837\uD558\uAC8C, \uB098\uBA38\uC9C0\uB294 \uB3C4\uD2B8\uB85C \uD655\uB300\uD569\uB2C8\uB2E4. UI\uB294 \uD56D\uC0C1 270\xD7480 \uB3C4\uD2B8\uC785\uB2C8\uB2E4.",options:[{id:"native",label:"\uC6D0\uBCF8",note:"\uAE30\uAE30 \uD574\uC0C1\uB3C4. \uD53D\uC140 \uC5C6\uC774 \uBA74\uC774 \uB610\uB837"},{id:"coarse",label:"\uAD75\uAC8C",note:"135\xD7240"},{id:"base",label:"\uB3C4\uD2B8",note:"270\xD7480"},{id:"fine",label:"\uACF1\uAC8C",note:"405\xD7720"}]},{id:"camera",label:"\uB300\uAD6D \uC2DC\uC810",hint:"\uD310\uC744 \uB0B4\uB824\uB2E4\uBCF4\uB294 \uBC29\uC2DD. \uB9D0\uC740 \uBC18\uC73C\uB85C \uC798\uB77C \uB215\uD78C \uC591\uAC01\uC774\uB77C \uC704\uC5D0\uC11C \uC2E4\uB8E8\uC5E3\uC774 \uBCF4\uC785\uB2C8\uB2E4.",options:[{id:"persp",label:"\uC6D0\uADFC \uD0D1\uB2E4\uC6B4",note:"\uAE30\uBCF8. \uC218\uC9C1, \uAC00\uC7A5\uC790\uB9AC \uB9D0\uC758 \uC606\uBA74\uC774 \uBCF4\uC784"},{id:"flat",label:"\uC815\uD0D1\uB2E4\uC6B4",note:"\uC218\uC9C1, \uAC70\uC758 \uD3C9\uD589 \uD22C\uC601. \uCE78\uB2F9 32px"},{id:"tilt",label:"\uC0B4\uC9DD \uAE30\uC6B8\uC784",note:"18\xB0 \uAE30\uC6B8\uC5EC \uC591\uAC01 \uB450\uAED8\uAC00 \uBCF4\uC784"}]},{id:"zoom",label:"\uACF5\uACA9 \uC90C",hint:"\uB0B4 \uB9D0\uC774 \uC0C1\uB300 \uB9D0\uC744 \uC7A1\uC744 \uB54C \uB0B4 \uD654\uBA74\uC5D0\uC11C\uB9CC \uC77C\uC5B4\uB098\uB294 \uC90C \uC778/\uC544\uC6C3.",options:[{id:"soft",label:"\uC57D\uD558\uAC8C",note:"\uC0B4\uC9DD \uB2E4\uAC00\uAC14\uB2E4 \uB3CC\uC544\uC634"},{id:"normal",label:"\uBCF4\uD1B5",note:"\uB2E4\uAC00\uAC10 + \uC791\uC740 \uD754\uB4E4\uB9BC"},{id:"punch",label:"\uAC15\uD558\uAC8C",note:"\uAE4A\uC740 \uC90C + \uD754\uB4E4\uB9BC + \uC12C\uAD11"}]}],Vs={pieces:"chrome",board:"glass",backdrop:"stars",frame:"deco",lettering:"crown",pixel:"native",camera:"persp",zoom:"normal"},mf={native:null,coarse:.5,base:1,fine:1.5},yl={soft:{s:.58,shake:0,flash:0,dur:.85},normal:{s:.72,shake:.06,flash:0,dur:.95},punch:{s:.82,shake:.14,flash:.75,dur:1.05}},Rr={deco:{accent:"#c9a24a",accentHi:"#f3dc8a",accentLo:"#6e4a14",line:"#8d9299",lineHi:"#d8dde3",lineLo:"#3a3d44",panel:"rgba(8,6,12,0.86)",btn:"#1c1a24",btnPrimary:"#3a2a10",ink:"#ece6d6",dim:"#8a8578"},plain:{accent:"#d8d2c4",accentHi:"#ffffff",accentLo:"#5a5650",line:"#6a6660",lineHi:"#a8a49c",lineLo:"#2a2826",panel:"rgba(10,10,12,0.84)",btn:"#18181c",btnPrimary:"#2c2a26",ink:"#eeeae2",dim:"#8a867e"},neon:{accent:"#4fe0ff",accentHi:"#c8f8ff",accentLo:"#0a5a6e",line:"#e05ac8",lineHi:"#ffb8f0",lineLo:"#4a1440",panel:"rgba(6,2,14,0.86)",btn:"#140a24",btnPrimary:"#0a2a36",ink:"#eef6ff",dim:"#8a86a8"}},gf="faith-chess-theme",pf=Gs.map(i=>i.id);function xf(i){let t={...Vs};for(let e of Gs)i&&e.options.some(n=>n.id===i[e.id])&&(t[e.id]=i[e.id]);return t}function Ay(i){let t=/^#?t-([a-z0-9-]+)$/.exec((i||"").split("&")[0]);if(!t)return null;let e=t[1].split("-");if(e.length!==pf.length)return null;let n={};return pf.forEach((s,r)=>{n[s]=e[r]}),xf(n)}var _l=3;function _f(){let i=typeof location<"u"?Ay(location.hash):null;if(i)return ea(i),i;try{let t=JSON.parse(localStorage.getItem(gf)||"null"),e=xf(t),n=t?t.v||1:_l;return n<2&&(e.camera=Vs.camera),n<3&&e.lettering==="brass"&&(e.lettering=Vs.lettering),n<_l&&ea(e),e}catch{return{...Vs}}}function ea(i){try{localStorage.setItem(gf,JSON.stringify({...i,v:_l}))}catch{}}function yf(i,t,e){let n=Gs.find(o=>o.id===t),s=n.options.findIndex(o=>o.id===i[t]),r=n.options.length;return{...i,[t]:n.options[(s+e+r)%r].id}}function vf(i,t){return Gs.find(n=>n.id===i)?.options.find(n=>n.id===t)?.label??t}var un=(i,t={})=>new xn({color:i,flatShading:!0,...t}),Ws=(i,t={})=>new an({color:i,flatShading:!0,shininess:70,specular:9076848,...t}),Oe=(i,t=1)=>new hn(i,t),Mf=(i,t=10)=>new Us(i.map(([e,n])=>new j(e,n)),t);function Dt(i,t,e,n=0,s=0,r=0,o=1,a=1,c=1){let l=new Bt(t,e);return l.position.set(n,s,r),l.scale.set(o,a,c),i.add(l),l}var kn=(i,t,e,n)=>{let s=new ne;return s.position.set(t,e,n),i.add(s),s},Sf=14264378,Ry=15907988,Cy=14193770,Py=15764106,Ef=16315626,Iy=1706512,Ly=16447214,qs={w:{crown:15526644,gem:5230847,robe:12595262,robe2:8002086,beard:15658228,velvet:8006282,velvet2:5118556,bg:3939410,shoe:10099770,shoe2:5901344},b:{crown:2788e3,gem:15981706,robe:2252908,robe2:1194050,beard:8016966,velvet:10099758,velvet2:6164252,bg:1848384,shoe:2060158,shoe2:931392}},Dy=[[-.042,.088],[-.014,.1],[.014,.096],[.042,.078]];function Uy(i,t,e,n){let s=kn(i,0,-.43,0);Dt(s,new he(.068,.04,.07,7),e),Dt(s,new wn(.064,.011,3,7).rotateX(Math.PI/2),n,0,.033,0);let r=new ne;r.position.y=-.04,s.add(r),Dt(r,Oe(.07,0),e,0,-.05,0,.95,.85,.5);let o=Dy.map(([l,h])=>{let u=kn(r,l,-.1,0);Dt(u,new he(.0155,.0145,h*.55,5).translate(0,-h*.275,0),e);let f=kn(u,0,-h*.55,0);return Dt(f,new he(.0145,.012,h*.45,5).translate(0,-h*.225,0),e),Dt(f,Oe(.0135,0),e,0,-h*.45,0),{a:u,b:f,x:l}}),a=kn(r,t*.06,-.035,.02);a.rotation.z=t*.75,Dt(a,new he(.017,.015,.05,5).translate(0,-.025,0),e);let c=kn(a,0,-.05,0);return Dt(c,new he(.015,.012,.042,5).translate(0,-.021,0),e),Dt(c,Oe(.014,0),e,0,-.042,0),{wrist:s,palm:r,fingers:o,thumb:{a,b:c,s:t}}}function wf(i,t=.3,e=t,n=.3){i.fingers.forEach((s,r)=>{let o=r===1?e:t;s.a.rotation.set(-1.25*o,0,(r-1.5)*.16*n),s.b.rotation.x=-1.45*o}),i.thumb.a.rotation.set(-.7*t,0,i.thumb.s*(.75-.35*t+.25*n)),i.thumb.b.rotation.x=-.6*t}function Ny(){let i=[[-.088,0,.056,.078],[-.055,0,.07,.108],[0,0,.076,.112],[.06,0,.072,.09],[.12,.003,.06,.066],[.17,.013,.047,.05],[.21,.032,.035,.038],[.238,.06,.026,.03],[.252,.095,.019,.022],[.25,.127,.012,.014],[.24,.145,.005,.006]],t=8,e=[],n=([f,d,g,x])=>Array.from({length:t},(m,p)=>{let y=p/t*Math.PI*2-Math.PI/2,_=Math.sin(y);return[Math.cos(y)*g*(_<-.2?.92:1),d+(_<-.2?0:x*(.5+.5*_)*1.12-x*.06),f]}),s=i.map(n),r=(f,d,g)=>e.push(...f,...d,...g);for(let f=0;f<s.length-1;f++)for(let d=0;d<t;d++){let g=(d+1)%t,x=s[f][d],m=s[f][g],p=s[f+1][d],y=s[f+1][g];r(x,p,m),r(m,p,y)}let o=s[0],a=s[s.length-1],c=f=>f.reduce((d,g)=>[d[0]+g[0]/t,d[1]+g[1]/t,d[2]+g[2]/t],[0,0,0]),l=c(o),h=c(a);for(let f=0;f<t;f++)r(o[(f+1)%t],l,o[f]),r(a[f],h,a[(f+1)%t]);let u=new ce;return u.setAttribute("position",new Ct(e,3)),u.computeVertexNormals(),u}var vl=null;function Oy(i,t,e){vl||(vl=Ny());let n=kn(i,0,-.52,.01);Dt(n,vl,Ws(t.shoe,{shininess:110,specular:14207176})),Dt(n,new ee(.07,.03,.05),un(t.shoe2),0,-.012,-.058),Dt(n,new wn(.05,.022,4,8).rotateX(Math.PI/2),un(Ef),0,.112,-.025);let s=Dt(n,new ee(.056,.042,.012),e,0,.088,.055);s.rotation.x=-.75;let r=Dt(n,new ee(.03,.02,.014),un(t.shoe2),0,.09,.057);return r.rotation.x=-.75,Dt(n,Oe(.024,0),e,0,.152,.236),n}function Sl(i){let t=new ne,e=un(i.velvet),n=un(i.velvet2),s=Ws(Sf);for(let[r,o]of[[-.56,.36],[.56,.36],[-.56,-.4],[.56,-.4]])Dt(t,new he(.06,.08,.32,6),s,r,.16,o);Dt(t,new ee(1.36,.26,1),n,0,.44,0),Dt(t,Oe(.62),e,0,.62,.04,1.06,.32,.84),Dt(t,new ee(1.36,1.3,.22),n,0,1.16,-.46),Dt(t,Oe(.68),n,0,1.8,-.46,1,.55,.32),Dt(t,Oe(.56),e,0,1.18,-.3,1.06,1.05,.34);for(let[r,o]of[[-.25,1.4],[.25,1.4],[0,1.15],[-.25,.92],[.25,.92]])Dt(t,Oe(.035,0),s,r,o,-.12);Dt(t,Oe(.11,0),s,0,2.18,-.46);for(let r of[-1,1])Dt(t,new ee(.2,.36,.82),n,r*.68,.64,0),Dt(t,new he(.18,.18,.96,8).rotateX(Math.PI/2),e,r*.68,.88,.02),Dt(t,Oe(.09,0),s,r*.68,.88,.52);return t}function El(i){let t=new ne,e=un(i.robe),n=un(i.robe2),s=un(Ry),r=un(Cy),o=un(i.beard),a=Ws(Sf),c=Ws(i.crown,{side:We}),l=un(Iy),h=un(Ef),u=un(Ly),f=new ne;f.position.set(0,.72,.06),t.add(f),Dt(f,Mf([[0,0],[.36,.02],[.52,.14],[.58,.34],[.55,.56],[.46,.74],[.36,.86],[.32,.92]]),e),Dt(f,Mf([[.32,.92],[.36,1],[.385,1.12],[.36,1.26],[.28,1.37],[.15,1.44],[0,1.46]]),s),Dt(f,Oe(.37),o,0,1.17,-.09,1.02,.92,.82),Dt(f,new wn(.5,.04,4,16).rotateX(Math.PI/2),a,0,.6,0),Dt(f,new wn(.32,.075,6,12).rotateX(Math.PI/2),h,0,.9,0),Dt(f,Oe(.12,0),a,0,.34,.55,1,1,.35);for(let[y,_]of[[-.2,.42],[.2,.42],[-.12,.18],[.12,.18]])Dt(f,Oe(.055,0),h,y,_,.53,1,1,.4);Dt(f,Oe(.075,0),r,0,1.1,.38);for(let y of[-1,1])Dt(f,Oe(.065,0),un(Py),y*.21,1.06,.3,1,.6,.5);let d=[-1,1].map(y=>Dt(f,Oe(.05,0),l,y*.13,1.18,.33)),g=[-1,1].map(y=>{let _=Dt(f,new ee(.13,.03,.03),o,y*.14,1.27,.32);return _.userData.s=y,_});for(let y of[-1,1])Dt(f,Oe(.075,0),o,y*.09,1.02,.36,1.6,.6,.6);Dt(f,new ci(.17,.46,7).rotateX(Math.PI),o,0,.82,.31).rotation.x=.32;let x=kn(f,0,1.42,0);Dt(x,new he(.31,.34,.24,12,1,!0),c,0,.06,0);for(let y=0;y<7;y++){let _=y/7*Math.PI*2;Dt(x,new ci(.065,.26,4),c,Math.sin(_)*.31,.3,Math.cos(_)*.31)}Dt(x,Oe(.07,0),Ws(i.gem),0,.06,.34);for(let y of[-1,1])Dt(x,Oe(.04,0),Ws(i.gem),y*.2,.06,.27);Dt(x,Oe(.07,0),a,0,.26,0);let m=[-1,1].map(y=>{let _=kn(f,y*.5,.66,0);Dt(_,new he(.034,.034,.44,5).translate(0,-.22,0),n);let v=kn(_,0,-.44,0);Dt(v,new he(.03,.03,.42,5).translate(0,-.21,0),n);let T=Uy(v,y,u,a);return wf(T),{s:y,shoulder:_,elbow:v,hand:T}}),p=[-1,1].map(y=>{let _=kn(f,y*.17,.1,.3);Dt(_,new he(.04,.04,.46,5).translate(0,-.23,0),n);let v=kn(_,0,-.46,0);Dt(v,new he(.036,.036,.46,5).translate(0,-.23,0),n);let T=Oy(v,i,a);return{s:y,hip:_,knee:v,shoe:T}});return{root:t,doll:f,crown:x,eyes:d,brows:g,arms:m,legs:p}}var bf=(i,t,e)=>i+(t-i)*e,Cr=i=>i*i*(3-2*i),Fy=118,Ji=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function Tn(i,t,e){if(typeof i=="number")return i+(t-i)*e;if(Array.isArray(i))return i.map((s,r)=>Tn(s,t[r],e));let n={};for(let s in i)n[s]=Tn(i[s],t[s],e);return n}var ue=(i=0,t=0,e=-.2,n=0,s=.3,r=s,o=.3)=>({sx:i,sz:t,ex:e,ez:n,hc:s,hi:r,hs:o}),Le=(i=0,t=0,e=0)=>({hx:i,hz:t,kx:e}),li=(i={})=>({rootZ:.95,y:.88,x:0,rx:0,ry:0,rz:0,crownY:0,crownSpin:0,arms:[ue(0,-.25),ue(0,.25)],legs:[Le(0,-.06),Le(0,.06)],...i});function wl(i){return li({rootZ:0,y:.72,rz:.04*Math.sin(i*.6),rx:-.08,arms:[ue(-.2,-.25,-.3,0,.45),ue(-.2,.25,-.3,0,.45)],legs:[Le(-1.35,-.08,1.3),Le(-1.35,.08,1.3)]})}function By(i){return li({rx:.22,y:.88+.04*Math.abs(Math.sin(i*10)),rz:.04*Math.sin(i*14),arms:[ue(-1.55,.15,-.1,0,.95,0,.1),ue(.25,.95,-1.9,0,.75,.75,.1)],legs:[Le(0,-.16),Le(0,.16)]})}function ky(i,t,e=1){let n=Math.sin(i*2*Math.PI*2.4),s=li({rootZ:.95+1.25*e,y:.9+.12*e+.02*Math.sin(i*9),x:t*.8*e,rz:-t*.55*e,rx:.12*e,ry:-t*.35*e}),r=t<0?0:1,o=1-r;return s.arms[r]=ue(-.35,t*(2.55+.28*n),-.15,t*.55*n,0,0,1),s.arms[o]=ue(.25,-t*.95,-1.9,0,.75,.75,.1),s.legs[o]=Le(.75*e,-t*.1,1.3*e),s.legs[r]=Le(0,t*.12,.1),s}function Ml(i,t,e=1){let n=Math.pow(Math.cos(Math.PI*t),2)*e;i.y-=.05*n;for(let s of i.legs)s.hx-=.14*n,s.kx+=.28*n;return i}var bl=[i=>{let t=Math.floor(i),e=Ji((i-t)*3),n=t%2===0,s=ue(-.35,2.55,0,0,.95,0,.1),r=ue(-.55,-.55,-.1,0,.95,0,.1),o=li({arms:[ue(.25,-.95,-1.9,0,.75,.75,.1),Tn(n?r:s,n?s:r,e)]});return o.rz=Tn(n?.1:-.14,n?-.14:.1,e),o.ry=.25*Math.sin(Math.PI*i/2),o.legs[1].hz=Tn(n?.06:.3,n?.3:.06,e),Ml(o,i)},i=>{let t=li({rz:.1*Math.sin(Math.PI*i),ry:.35*Math.sin(Math.PI*i/2)});return t.arms=[-1,1].map(e=>{let n=Math.PI*i+(e<0?0:-1.2);return ue(-.15,e*(1.45+.3*Math.sin(n)),0,e*.95*Math.sin(n+1.1),.15+.15*Math.sin(n+2),.1,.7)}),Ml(t,i)},i=>{let t=li();if(i<2){let e=Ji(i/2);t.ry=e*Math.PI*2,t.y=.9+.04*Math.sin(Math.PI*i),t.arms=[ue(-.1,-1.55,0,0,.08,.08,.7),ue(-.1,1.55,0,0,.08,.08,.7)],t.legs[0]=Le(-.7*Math.sin(Math.PI*e),-.1,1.5*Math.sin(Math.PI*e))}else{let e=Ji((i-2)*2.5);t.arms=[ue(-.15,-Tn(1.55,2.75,e),0,-.3*e,0,0,1),ue(-.15,Tn(1.55,2.75,e),0,.3*e,0,0,1)],t.legs=[Le(0,-.32*e),Le(0,.32*e)],t.y=.88+.07*Math.sin(Math.PI*Math.min(1,(i-2)*2)),t.rx=-.08*e}return t},i=>{let t=Math.floor(i),e=i-t,n=t%2,s=Math.sin(Math.PI*e),r=li({rx:-.12*s,rz:(n?.08:-.08)*s,y:.88+.03*s});return r.arms=[-1,1].map(o=>ue(-.25+.2*Math.sin(Math.PI*2*i+o),o*2.45,0,o*.5*Math.sin(Math.PI*4*i),.08,.08,.7)),r.legs[n]=Le(-1.2*s,(n?1:-1)*(.08+1*s),.5*s*(1-s)),r.legs[1-n]=Le(0,n?-.06:.06,.15),r},i=>{let t=li();if(i<1){let e=Ji(i);t.y=.88-.22*e,t.rx=.15*e,t.legs=[Le(-.7*e,-.1,1.4*e),Le(-.7*e,.1,1.4*e)],t.arms=[ue(.7*e,-.3,-.2,0,.3+.5*e),ue(.7*e,.3,-.2,0,.3+.5*e)]}else if(i<2){let e=i-1,n=4*e*(1-e),s=Math.sin(Math.PI*e);t.y=Tn(.66,.88,Math.min(1,e*4))+.75*n,t.rx=-.1*n,t.legs=[Le(-.5*s,-1.15*s,0),Le(-.5*s,1.15*s,0)],t.arms=[ue(-.2,-2.7,0,0,0,0,1),ue(-.2,2.7,0,0,0,0,1)]}else if(i<2.6){let e=1-Ji((i-2)/.6);t.y=.88-.18*e,t.legs=[Le(-.6*e,-.14,1.2*e),Le(-.6*e,.14,1.2*e)],t.arms=[ue(-1.2*(1-e),-.5,-.2),ue(-1.2*(1-e),.5,-.2)]}else{let e=Ji((i-2.6)*3),n=.25*Math.sin(i*40);t.arms=[ue(-1.9*e,-.5,-.2,-n,0,0,1),ue(-1.9*e,.5,-.2,n,0,0,1)],t.ry=.2*Math.sin(Math.PI*i)}return t},i=>{let t=li();if(i<2){let e=i/2,n=4*e*(1-e),s=Math.sin(Math.PI*e);t.crownY=1*n,t.crownSpin=e*Math.PI*4,t.rx=-.25*s,t.y=.88+.05*s,t.arms=[ue(-2.5*s,-.35,-.3*s,0,.08,.08,.7),ue(-2.5*s,.35,-.3*s,0,.08,.08,.7)],Ml(t,i,.5)}else{let e=(i-2)/2,n=Math.sin(Math.PI*e);t.rx=.5*n,t.arms=[ue(.5*n,-1.2*n-.25,-.2,0,.3),ue(-1.1*n,.25-.65*n,-.2-.6*n,0,.08,.08,.7)],t.legs=[Le(0,-.06),Le(.35*n,.06,.2*n)]}return t}];function Hy(i){let t=bl.length,e=(i%(t*4)+t*4)%(t*4),n=Math.floor(e/4),s=e-n*4,r=bl[n](s),o=3.6;return s>o&&(r=Tn(r,bl[(n+1)%t](0),Ji((s-o)/.4))),r}function ia(i,t){i.root.position.z=t.rootZ,i.doll.position.set(t.x,t.y,.06),i.doll.rotation.set(t.rx,t.ry,t.rz),i.crown.position.y=1.42+t.crownY,i.crown.rotation.set(0,t.crownSpin,-.5*t.rz),i.arms.forEach(({shoulder:e,elbow:n,hand:s},r)=>{let o=t.arms[r];e.rotation.set(o.sx,0,o.sz),n.rotation.set(o.ex,0,o.ez),wf(s,o.hc??.3,o.hi??o.hc??.3,o.hs??.3)}),i.legs.forEach(({hip:e,knee:n},s)=>{let r=t.legs[s];e.rotation.set(r.hx,0,r.hz),n.rotation.set(r.kx,0,0)})}var na=class{constructor(){this.scene=new On,this.scene.add(new bi(16777215,.62));let t=new en(16773340,1.5);t.position.set(-2,4,5),this.scene.add(t);let e=new en(16740568,.7);e.position.set(3,2,-3),this.scene.add(e);let n=new en(7332095,.5);n.position.set(-3,1.5,-2),this.scene.add(n),this.camera=new Pe(34,64/96,.1,40),this.camera.position.set(0,1.62,6.5),this.camera.lookAt(0,1.55,.6),this.rigs={};for(let s of["w","b"]){let r=new ne;r.add(Sl(qs[s]));let o=El(qs[s]);r.add(o.root),this.scene.add(r),this.rigs[s]={group:r,throne:r.children[0],...o,color:s,phase:s==="w"?0:1.7,wake:0,shout:0,cheer:0}}this.shown=null,this.swap=null,this.t=0,this.clear=new wt,this.bgA=new wt,this.bgB=new wt,this.bgD=new wt,this.beat=0,this.discoOn=0,this.discoHue=0,this.buildDisco()}update(t,e,n="turn"){this.t+=t,e&&e!==this.shown&&!(this.swap&&this.swap.to===e)&&(this.shown&&(this.swap={from:this.shown,to:e,t:0}),this.shown=e),this.swap&&(this.swap.t+=t/.6,this.swap.t>=1&&(this.swap=null));let s=this.t,r=this.rigs[this.shown||"w"];this.beat+=t*(Fy/60)*(1-r.shout),this.discoOn=r.wake*(1-r.shout),this.updateDisco(t,this.beat,this.discoOn);for(let o of Object.values(this.rigs)){let a=o.color===this.shown;o.wake+=((a?1:0)-o.wake)*(1-Math.exp(-t*3)),o.shout+=((a&&n==="shout"?1:0)-o.shout)*(1-Math.exp(-t*9)),o.cheer+=((a&&n==="cheer"?1:0)-o.cheer)*(1-Math.exp(-t*7)),o.cheer<.002&&(o.cheer=0);let c=0;if(this.swap){let l=Cr(Math.min(1,this.swap.t)),h=u=>u==="w"?-1:1;o.color===this.swap.to?c=h(o.color)*(1-l)*4.4:o.color===this.swap.from&&(c=-h(this.swap.to)*l*4.4)}o.group.position.x=c,o.group.visible=a||!!(this.swap&&o.color===this.swap.from),this.pose(o,s+o.phase,this.beat+(o.color==="w"?0:12))}}pose(t,e,n){let s=t.wake,r=t.shout,o=Tn(wl(e),Hy(n),Cr(s));o=Tn(o,By(e),Cr(r)),t.cheer>0&&(o=Tn(o,ky(e,t.color==="w"?-1:1),Cr(t.cheer))),ia(t,o);let a=e%3.1/3.1,c=s>.5&&a>.95?Math.sin((a-.95)/.05*Math.PI):0,l=bf(.2,1,s)*(1-c*.9)*(1+.25*r);for(let h of t.eyes)h.scale.y=Math.max(.08,l);for(let h of t.brows)h.rotation.z=bf(0,-.32*h.userData.s,s)+.25*h.userData.s*r-.2*h.userData.s*t.cheer,h.position.y=1.27+.05*t.cheer}buildDisco(){let t=new ne;this.scene.add(t),this.disco=t,this.tiles=[];for(let s=0;s<5;s++)for(let r=0;r<3;r++){let o=new Bt(new ee(.8,.04,.62),new me({color:1118481}));o.position.set((s-2)*.84,0,.42+r*.66),t.add(o),this.tiles.push({m:o,ix:s,iz:r})}this.beams=[16732120,5237247,16769359].map((s,r)=>{let o=new me({color:s,transparent:!0,opacity:.2,blending:Gi,depthWrite:!1,side:We}),a=new Bt(new ci(.8,3.8,10,1,!0).translate(0,-1.9,0),o),c=new ne;return c.position.set((r-1)*1.7,3.6,1),c.add(a),t.add(c),{pivot:c,mat:o,i:r}}),this.ball=new Bt(new hn(.24,1),new an({color:14212328,flatShading:!0,shininess:120,specular:16777215})),this.ball.position.set(0,3,.7),t.add(this.ball);let e=new $e;for(let s=0;s<=8;s++){let r=s/8*Math.PI*2,o=s%2?.05:.17;s?e.lineTo(Math.cos(r)*o,Math.sin(r)*o):e.moveTo(Math.cos(r)*o,Math.sin(r)*o)}let n=new zo(e);this.sparks=Array.from({length:8},()=>{let s=new Bt(n,new me({color:16777215,transparent:!0,opacity:0,blending:Gi,depthWrite:!1}));return t.add(s),{m:s,t:9}}),this.lastBeat=-1}updateDisco(t,e,n){let s=this.t,r=Math.floor(e),o=e-r,a=Math.pow(1-o,2);this.disco.visible=n>.02;for(let{m:c,ix:l,iz:h}of this.tiles){let u=(l+h*2+r)%3===0,f=((r*.13+l*.17+h*.29)%1+1)%1;u?c.material.color.setHSL(f,.9,(.35+.25*a)*n):c.material.color.setHSL(f,.4,.06*n)}for(let c of this.beams)c.pivot.rotation.z=Math.sin(s*1.3+c.i*2.1)*.55,c.pivot.rotation.x=Math.sin(s*.9+c.i)*.3,c.mat.opacity=(.07+.09*a)*n;if(this.ball.rotation.y+=t*2.2,r!==this.lastBeat&&(this.lastBeat=r,n>.5))for(let c=0;c<2;c++){let l=this.sparks.find(h=>h.t>.5);if(!l)break;l.t=0,l.m.position.set((Math.random()-.5)*2.6,.5+Math.random()*2.1,1.2+Math.random()*.6),l.m.material.color.setHSL(Math.random(),.8,.7)}for(let c of this.sparks){c.t+=t;let l=c.t/.5;c.m.material.opacity=l<1?Math.sin(l*Math.PI)*n:0,c.m.scale.setScalar(.5+l),c.m.rotation.z=c.t*4}}get cheering(){let t=this.rigs[this.shown];return!!t&&t.cheer>.01&&!this.swap}renderOverlay(t,e,n,s={l:64,r:64,t:0,b:52}){let r=this.cheering?this.rigs[this.shown]:null;if(t.setClearColor(0,0),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.clear(!0,!0,!1),!r)return!1;let o=n.w/270,a=n.h/480,c=Math.round(e.x*o),l=Math.round((e.x+e.w)*o)-c,h=Math.round(e.y*a),u=Math.round((e.y+e.h)*a)-h,f={x:Math.max(0,e.x-s.l),y:Math.max(0,e.y-s.t)};f.w=Math.min(270,e.x+e.w+s.r)-f.x,f.h=Math.min(480,e.y+e.h+s.b)-f.y;let d=Math.round(f.x*o),g=Math.round((f.x+f.w)*o)-d,x=Math.round(f.y*a),m=Math.round((f.y+f.h)*a)-x,p=[];for(let _ of Object.values(this.rigs))p.push([_.group,_.group.visible],[_.throne,_.throne.visible]),_.throne.visible=!1,_!==r&&(_.group.visible=!1);p.push([this.disco,this.disco.visible]),this.disco.visible=!1;let y=this.camera;y.aspect=l/u,y.fov=Math.max(34,2*Math.atan(.245/y.aspect)*180/Math.PI),y.setViewOffset(l,u,d-c,x-h,g,m),t.setScissorTest(!0),t.setViewport(d,n.h-x-m,g,m),t.setScissor(d,n.h-x-m,g,m),t.render(this.scene,y),t.setScissorTest(!1),y.clearViewOffset();for(let[_,v]of p)_.visible=v;return!0}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,c=Math.round(e.y*r),l=Math.round((e.y+e.h)*r)-c,h=n.h-c-l,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,l),t.setScissor(o,h,a,l);let d=this.shown||"w";this.bgB.set(qs[d].bg),this.swap&&this.bgB.copy(this.bgA.set(qs[this.swap.from].bg).lerp(this.bgB,Cr(Math.min(1,this.swap.t))));let g=this.beat-Math.floor(this.beat);this.bgD.setHSL(this.beat*.04%1,.6,.16+.07*Math.pow(1-g,2)),this.bgB.lerp(this.bgD,.55*this.discoOn),t.setClearColor(this.bgB,1),t.clear(!0,!0,!1),this.camera.aspect=a/l,this.camera.fov=Math.max(34,2*Math.atan(.245/this.camera.aspect)*180/Math.PI),this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var Tf=(i,t={})=>new xn({color:i,flatShading:!0,...t}),Si=(i,t={})=>new an({color:i,flatShading:!0,shininess:70,specular:9076848,...t}),zy=i=>i<=0?0:i>=1?1:i*i*(3-2*i),Vy=6;function Ei(i,t){let e=i.length,n=Array.isArray(i[0][1]),s=_=>n?i[_][1]:[i[_][1]];if(t<=i[0][0])return i[0][1];if(t>=i[e-1][0])return i[e-1][1];let r=0;for(;t>i[r+1][0];)r++;let o=i[Math.max(0,r-1)][0],a=i[r][0],c=i[r+1][0],l=i[Math.min(e-1,r+2)][0],h=s(Math.max(0,r-1)),u=s(r),f=s(r+1),d=s(Math.min(e-1,r+2)),g=c-a,x=(t-a)/g,m=x*x,p=m*x,y=u.map((_,v)=>{let T=r===0||c===o?0:(f[v]-h[v])/(c-o)*g,S=r+1===e-1||l===a?0:(d[v]-u[v])/(l-a)*g,w=u[v]===h[v]||u[v]===f[v]?0:T,I=f[v]===d[v]||f[v]===u[v]?0:S;return(2*p-3*m+1)*_+(p-2*m+x)*w+(-2*p+3*m)*f[v]+(p-m)*I});return n?y:y[0]}var Af=14264378,Ki=.27,Xn=1.02,If=.74,Pr=(i,t)=>new P((i-3.5)*Ki,Xn,If+(t+.5)*Ki),Yn=.34,sa=[[0,0],[.33,0],[.33,.07],[.25,.12]],Gy={p:[...sa,[.17,.3],[.12,.38],[.19,.42],[.15,.5],[.08,.6],[0,.63]],r:[...sa,[.21,.42],[.27,.5],[.27,.68],[0,.68]],n:[...sa,[.2,.3],[0,.3]],b:[...sa,[.2,.42],[.13,.5],[.23,.58],[.21,.7],[.12,.84],[.06,.88],[0,.9]],q:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.62],[.28,.72],[.29,.8],[.2,.88],[.14,.98],[0,1]],k:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.64],[.29,.74],[.29,.84],[.2,.92],[.09,.98],[0,.98]]},Tl={p:.63,r:.68,n:.9,b:.96,q:1.06,k:1.2},Wy=[[-.16,.28],[.16,.28],[.17,.5],[.3,.6],[.31,.72],[.14,.78],[.1,.9],[0,.82],[-.1,.9],[-.13,.76],[-.2,.6],[-.18,.4]];function qy(i){let e=[new Us(Gy[i].map(([s,r])=>new j(s,r)),7)],n=(s,r,o,a,c,l)=>new ee(s,r,o).translate(a,c,l);if(i==="r")for(let s=0;s<4;s++){let r=s/4*Math.PI*2+.4;e.push(n(.11,.12,.11,Math.sin(r)*.2,.74,Math.cos(r)*.2))}else if(i==="b")e.push(new hn(.06,0).translate(0,.94,0));else if(i==="q"){e.push(new hn(.08,0).translate(0,1.06,0));for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.push(new ci(.05,.14,4).translate(Math.sin(r)*.22,.92,Math.cos(r)*.22))}}else if(i==="k")e.push(n(.07,.26,.07,0,1.1,0)),e.push(n(.2,.07,.07,0,1.12,0));else if(i==="n"){let s=new $e(Wy.map(([r,o])=>new j(r,o)));e.push(new Fn(s,{depth:.2,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03,bevelSegments:1,curveSegments:1}).translate(0,0,-.1))}return e}var Al=new Map;function Rf(i,t){Al.has(i)||Al.set(i,qy(i));let e=new ne;for(let n of Al.get(i))e.add(new Bt(n,t));return e.scale.setScalar(Yn),e.userData.type=i,e}var Cf=1.55,ra=1.7;function Lf(i){return i.hand.palm}function Xy(i,t,e,n=[-1,.3*i.arms[t].s,-.4]){let s=i.arms[t],r=Lf(s),o=new P,a=[...n],c=()=>(s.shoulder.rotation.set(a[0],0,a[1]),s.elbow.rotation.set(a[2],0,0),i.root.updateMatrixWorld(!0),r.getWorldPosition(o),o.distanceToSquared(e)+.002*a[2]*a[2]),l=c();for(let h=.4;h>.002;h*=.6)for(let u=0;u<30;u++){let f=!1;for(let d=0;d<3;d++)for(let g of[h,-h]){let x=a[d];a[d]+=g,d===2&&(a[2]=Math.min(.05,Math.max(-2.6,a[2])));let m=c();m<l?(l=m,f=!0):a[d]=x}if(!f)break}return a}var Rl="dohyeon";function Yy(i){let t=new Xo,e=0,n=0,s=!0,r=[],o=()=>{if(r.length>2){let a=0;for(let c=0;c<r.length;c++){let[l,h]=r[c],[u,f]=r[(c+1)%r.length];a+=l*f-u*h}Math.abs(a)>n&&(n=Math.abs(a),s=a<0)}r=[]};for(let a of i.p)a[0]==="M"?(o(),t.moveTo(a[1],a[2]),r.push([a[1],a[2]])):a[0]==="L"?(t.lineTo(a[1],a[2]),r.push([a[1],a[2]])):a[0]==="Q"?(t.quadraticCurveTo(a[1],a[2],a[3],a[4]),r.push([a[3],a[4]])):a[0]==="C"&&(t.bezierCurveTo(a[1],a[2],a[3],a[4],a[5],a[6]),r.push([a[5],a[6]]));return o(),t.toShapes(!s)}function Pf(i,t,e,{depth:n=.22,front:s,side:r,curve:o=2,bevel:a=1}={}){let c=e/(i.asc||i.upm*.8),l=new ne,h=[],u=0;for(let d of t){let g=i.glyphs[d];if(!g){u+=(i.space||i.upm*.3)*c;continue}let x=new Fn(Yy(g),{depth:n/c,bevelEnabled:!0,bevelThickness:n*.35/c,bevelSize:e*.03*a/c,bevelSegments:1,curveSegments:o});x.scale(c,c,c);let m=new Bt(x,[s,r]);m.position.x=u,l.add(m),h.push(m),u+=g.a*c}let f=u;for(let d of h)d.position.x-=f/2;return l.userData={w:f,glyphs:h},l}var Xs=class{constructor(){let t=this.scene=new On;t.background=new wt(787988),t.fog=new Ds(787988,9,16),t.add(new bi(16777215,.55));let e=new en(16773340,1.45);e.position.set(-2,5,5),t.add(e);let n=new en(16740568,.8);n.position.set(3,2,-3),t.add(n);let s=new en(7332095,.6);s.position.set(-3,1.5,-2),t.add(s),this.camera=new Pe(36,270/480,.1,40),this.camera.position.set(0,4.3,7.6),this.camera.lookAt(0,1.7,1),this.clear=new wt,this.t=0,this.buildStage();let r=qs.w;t.add(Sl(r)),this.rig=El(r),t.add(this.rig.root);for(let o of this.rig.arms)o.shoulder.scale.set(ra,Cf,ra),o.hand.wrist.scale.set(1.25/ra,1.25/Cf,1.25/ra);this.base=wl(0),this.base.rx=.12,ia(this.rig,this.base),this.buildBoard(),this.solve(),this.scene.add(this.camera),this.text3d=null,this.fontId=null,this.loop=-1,this.flight=null,this.ghosts=[],this.puffs=[],this.crownSpring={x:0,v:0,prev:0},this.prevHand=null}buildStage(){let t=this.scene;this.tiles=[];for(let r=0;r<9;r++)for(let o=0;o<5;o++){let a=new Bt(new ee(.78,.04,.6),new me({color:1118481}));a.position.set((r-4)*.82,-.02,-2.4+o*.64),t.add(a),this.tiles.push({m:a,ix:r,iz:o})}let e=(r,o,a,c,l,h)=>{let u=new me({color:r,transparent:!0,opacity:o,blending:Gi,depthWrite:!1,side:We}),f=new Bt(new ci(l,h,12,1,!0).translate(0,-h/2,0),u),d=new ne;return d.position.set(a,5.6,c),d.add(f),t.add(d),{pivot:d,mat:u,op:o}};this.spot=e(16773320,.14,0,.3,1.5,5.8),this.beams=[e(16732120,.08,-1.8,-.6,.9,6.2),e(5237247,.08,1.8,-.6,.9,6.2)];let n=[];for(let r=0;r<60;r++)n.push((Math.random()-.5)*12,2.5+Math.random()*5,-4-Math.random()*3);let s=new ce;s.setAttribute("position",new Ct(n,3)),t.add(new Do(s,new xr({color:12101848,size:2,sizeAttenuation:!1})))}buildBoard(){let t=this.scene,e=If+4*Ki;t.add(new Bt(new ee(8*Ki+.16,.1,8*Ki+.16).translate(0,Xn-.06,e),Si(Af))),t.add(new Bt(new he(.22,.42,Xn-.1,6).translate(0,(Xn-.1)/2,e),Tf(5118556)));let n=Si(14178996,{shininess:40}),s=Si(2886710,{shininess:40});for(let o=0;o<8;o++)for(let a=0;a<8;a++){let c=Pr(a,o),l=new Bt(new ee(Ki-.012,.03,Ki-.012),(o+a)%2?n:s);l.position.set(c.x,Xn-.015,c.z),t.add(l)}this.white=Si(16051420,{specular:10129536}),this.black=Si(2372158,{specular:7315632,shininess:90});let r=(o,a,c,l,h=0)=>{let u=Rf(o,a==="w"?this.white:this.black);return u.position.copy(Pr(c,l)),u.rotation.y=h,this.scene.add(u),u};for(let[o,a,c]of[["r",0,0],["k",4,0],["r",7,0],["p",0,1],["p",1,1],["p",6,1],["p",4,2],["b",5,0],["n",6,3]])r(o,"w",a,c,o==="n"?-Math.PI/2:0);for(let[o,a,c]of[["r",0,7],["k",4,7],["q",3,6],["r",7,7],["p",0,6],["p",1,5],["p",5,6],["p",7,5],["b",2,5],["n",6,7]])r(o,"b",a,c,o==="n"?Math.PI/2:0);this.queenA=Pr(2,1),this.queenB=Pr(2,3),this.queen=r("q","w",2,1),this.stealSq=Pr(5,2),this.victim=null}solve(){let t=this.rig,e=1,n=0,s=(I,M)=>new P(I.x,I.y+M*Yn+.07,I.z),r=(I,M,E)=>new P(I,M,E),o=(I,M,E)=>Xy(t,I,M,E),a=o(e,r(.5,1.13,.84),[-.9,.3,-1]),c=o(e,r(.6,1.42,.75),a),l=o(e,s(this.stealSq,1).add(r(0,.22,0)),[-1.3,.2,-.5]),h=o(e,s(this.stealSq,.75),l),u=o(e,r(.45,1.34,.8),h),f=o(e,r(.5,2.25,.35),[-2.5,.3,-.5]),d=o(e,r(.58,2.42,-.55),[-3.3,.3,-.4]),g=o(e,r(.78,1.05,-.6),[-4.9,.3,-.3]),x=[a[0]-Math.PI*2,a[1],a[2]];this.R={rest:a,lift:c,hover:l,grab:h,hide:u,face:f,release:d,follow:g,rest2:x};let m=s(this.queenA,Tl.q).add(r(0,-.05,0)),p=s(this.queenB,Tl.q).add(r(0,-.05,0)),y=o(n,r(-.5,1.13,.84),[-.9,-.3,-1]),_=o(n,m,[-1.2,-.2,-.5]),v=o(n,m.clone().add(r(0,.3,0)),_),T=o(n,m.clone().lerp(p,.5).add(r(0,.42,0)),v),S=o(n,p,T),w=o(n,p.clone().add(r(0,.3,0)),S);this.L={rest:y,a:_,aUp:v,mid:T,b:S,bUp:w},this.gripY=m.y-Xn}spawnPuffs(t){this.puffGeo||(this.puffGeo=new hn(.05,0));for(let e=0;e<7;e++){let n=e/7*Math.PI*2+Math.random()*.4,s=new Bt(this.puffGeo,new me({color:15260872,transparent:!0,opacity:.7,depthWrite:!1}));s.position.set(t.x,Xn+.03,t.z),this.scene.add(s),this.puffs.push({m:s,v:new P(Math.cos(n)*.9,.35+Math.random()*.3,Math.sin(n)*.9),s0:.8+Math.random()*.5,age:0,life:.45+Math.random()*.15})}}spawnVictim(t){this.victim&&this.scene.remove(this.victim);let e=["p","n","b","r"][t%4];this.victim=Rf(e,this.black),this.victim.position.copy(this.stealSq),e==="n"&&(this.victim.rotation.y=Math.PI/2),this.scene.add(this.victim),this.victim.userData.h=Tl[e],this.victim.userData.type=e}update(t){if(this.paused)return;this.t+=t;let e=Vy,n=Math.floor(this.t/e),s=this.t-n*e;n!==this.loop&&(this.loop=n,this.spawnVictim(n),this.prevHand=null,this.landed=!1);let r=this.R,o=this.L,a=Ei([[0,r.rest],[.95,r.rest],[1.12,r.lift],[1.45,r.hover],[1.62,r.grab],[1.72,r.grab],[1.98,r.hide],[2.22,r.hide],[2.34,r.face],[2.44,r.release],[2.62,r.follow],[3.05,r.rest2],[e,r.rest2]],s),c=Ei([[0,o.rest],[1,o.rest],[1.3,o.a],[1.48,o.aUp],[1.75,o.mid],[1.98,o.bUp],[2.12,o.b],[2.3,o.b],[2.75,o.rest],[4.4,o.rest],[4.7,o.b],[4.88,o.bUp],[5.12,o.mid],[5.34,o.aUp],[5.5,o.a],[5.62,o.a],[5.95,o.rest],[e,o.rest]],s),l=Ei([[0,[.4,.3]],[1.1,[.3,.4]],[1.45,[.05,.95]],[1.6,[.1,.9]],[1.7,[.82,.1]],[2.4,[.82,.1]],[2.47,[0,1]],[2.9,[.1,.8]],[3.5,[.4,.3]],[e,[.4,.3]]],s),h=Ei([[0,[.4,.3]],[1.15,[.1,.8]],[1.3,[.62,.1]],[2.12,[.62,.1]],[2.3,[.15,.7]],[2.75,[.4,.3]],[4.55,[.1,.8]],[4.7,[.62,.1]],[5.5,[.62,.1]],[5.66,[.15,.7]],[5.95,[.4,.3]],[e,[.4,.3]]],s),u=Ei([[0,[.12,0,0,.72,1]],[.38,[.12,0,0,.72,1]],[.47,[.22,0,0,.69,.92]],[.62,[.04,0,0,.74,1.05]],[.85,[.04,.06,-.04,.72,1]],[1.45,[.2,-.14,.05,.71,.98]],[1.72,[.16,-.1,.04,.72,1]],[2,[.02,.16,-.04,.73,1.01]],[2.24,[-.08,.3,-.07,.7,.92]],[2.4,[.12,-.32,.09,.77,1.09]],[2.62,[.2,-.22,.05,.73,1.02]],[3.05,[.1,0,0,.72,1]],[e,[.12,0,0,.72,1]]],s),f={...this.base},d=s>3.1&&s<4.3?Math.sin(Math.PI*(s-3.1)/1.2):0;f.rx=u[0],f.ry=u[1]+.05*Math.sin(this.t*.8),f.rz=u[2]+.07*d*Math.sin(this.t*2*Math.PI*(118/60)),f.y=u[3]+.012*Math.sin(this.t*3.2)+.02*d*Math.abs(Math.sin(this.t*Math.PI*(118/60))),f.arms=[{sx:c[0],sz:c[1],ex:c[2],ez:0,hc:h[0],hi:h[0]*.8,hs:h[1]},{sx:a[0],sz:a[1],ex:a[2],ez:0,hc:l[0],hi:l[0],hs:l[1]}],ia(this.rig,f);let g=u[4];this.rig.doll.scale.set(1/Math.sqrt(g),g,1/Math.sqrt(g));let x=this.crownSpring,m=f.rz*2+f.ry*.6;x.v+=(m-x.prev)/Math.max(t,.001)*-.04*Math.min(1,t*60),x.prev=m,x.v+=(-90*x.x-9*x.v)*t,x.x+=x.v*t,x.x=Math.max(-.35,Math.min(.35,x.x)),this.rig.crown.rotation.z+=x.x,this.rig.crown.rotation.x+=x.x*.4;let p=Ei([[0,[0,.04]],[.3,[0,.04]],[.47,[0,-.025]],[.7,[.01,0]],[1.2,[.01,0]],[1.35,[-.045,-.01]],[1.9,[-.045,-.01]],[2.05,[0,0]],[2.36,[.035,.02]],[2.7,[.01,0]],[e,[0,.04]]],s),y=Ei([[0,[.8,.8]],[.4,[.8,.8]],[.47,[1.15,1.15]],[.62,[1,1]],[.8,[.5,.5]],[1.1,[.5,.5]],[1.3,[.8,.8]],[3.15,[.8,.8]],[3.25,[.08,.85]],[3.55,[.08,.85]],[3.65,[.8,.8]],[5,[.8,.8]],[5.05,[.08,.08]],[5.12,[.8,.8]],[e,[.8,.8]]],s),_=Ei([[0,0],[.42,0],[.48,1],[.75,0],[e,0]],s);this.rig.eyes.forEach((F,O)=>{F.position.x=(O?.13:-.13)+p[0],F.position.y=1.18+p[1],F.scale.y=Math.max(.06,y[O])}),this.rig.brows.forEach(F=>{let O=F.userData.s>0;F.rotation.z=(O?.42:-.15)*(1-_)-.2*F.userData.s*_,F.position.y=(O?1.29:1.25)+.05*_+(O?.02*d:0)}),this.rig.root.updateMatrixWorld(!0);let v=F=>Lf(this.rig.arms[F]).getWorldPosition(new P),T=v(0);s>=1.3&&s<=2.14||s>=4.7&&s<=5.52?this.queen.position.set(T.x,Math.max(Xn,T.y-this.gripY),T.z):s<1.3||s>5.52?this.queen.position.copy(this.queenA):s>2.14&&s<4.7&&this.queen.position.copy(this.queenB);let w=this.victim,I=v(1);if(w.visible=!0,s<.45){let F=s/.45;w.position.set(this.stealSq.x,Xn+3.6*(1-F*F),this.stealSq.z),w.rotation.set(.6*(1-F),(w.userData.type==="n"?Math.PI/2:0)+2.5*(1-F),0),w.scale.set(Yn*.92,Yn*1.12,Yn*.92)}else if(s<1.62){this.landed||(this.landed=!0,this.spawnPuffs(this.stealSq));let F=s-.45,O=Math.exp(-F*9)*Math.cos(F*30);w.position.set(this.stealSq.x,Xn+Math.max(0,.08*Math.sin(F*12)*Math.exp(-F*8)),this.stealSq.z),w.rotation.set(0,w.userData.type==="n"?Math.PI/2:0,0),w.scale.set(Yn*(1+.25*O),Yn*(1-.32*O),Yn*(1+.25*O))}else if(s<2.44)w.scale.setScalar(Yn),w.position.set(I.x,I.y-(w.userData.h*Yn+.07)*.7,I.z),w.rotation.x=-1.2*zy((s-1.62)/.5),this.flight=null;else{if(!this.flight){let O=this.prevHand?I.clone().sub(this.prevHand).divideScalar(Math.max(t,.008333333333333333)):new P(.6,3,-3);O.multiplyScalar(.9),O.y=Math.max(O.y,2.6),O.z=Math.min(O.z,-1.6),O.x+=.6,O.length()>9&&O.setLength(9),this.flight={v:O,w:new P(10,4,7),age:0},this.ghostT=0}let F=this.flight;if(F.age+=t,F.v.y-=7.5*t,w.position.addScaledVector(F.v,t),w.rotation.x+=F.w.x*t,w.rotation.y+=F.w.y*t,w.rotation.z+=F.w.z*t,w.visible=w.position.y>-.5&&F.age<2.4,this.ghostT+=t,w.visible&&this.ghostT>.04&&F.age<.9){this.ghostT=0;let O=w.clone();O.traverse(L=>{L.isMesh&&(L.material=new me({color:9418968,transparent:!0,opacity:.35,depthWrite:!1}))}),this.scene.add(O),this.ghosts.push({g:O,age:0})}}this.prevHand=I;for(let F=this.ghosts.length-1;F>=0;F--){let O=this.ghosts[F];O.age+=t;let L=1-O.age/.35;O.g.traverse(B=>{B.isMesh&&(B.material.opacity=.35*Math.max(0,L))}),L<=0&&(this.scene.remove(O.g),O.g.traverse(B=>B.isMesh&&B.material.dispose()),this.ghosts.splice(F,1))}for(let F=this.puffs.length-1;F>=0;F--){let O=this.puffs[F];O.age+=t;let L=O.age/O.life;O.m.position.addScaledVector(O.v,t),O.v.multiplyScalar(Math.exp(-t*5)),O.m.scale.setScalar(O.s0*(1+L*1.6)),O.m.material.opacity=.7*(1-L),L>=1&&(this.scene.remove(O.m),O.m.material.dispose(),this.puffs.splice(F,1))}let M=this.t*(118/60),E=Math.floor(M),N=Math.pow(1-(M-E),2);for(let{m:F,ix:O,iz:L}of this.tiles){let B=(O+L*2+E)%3===0,z=((E*.13+O*.17+L*.29)%1+1)%1;F.material.color.setHSL(z,B?.8:.4,B?.1+.08*N:.035)}this.beams.forEach((F,O)=>{F.pivot.rotation.z=Math.sin(this.t*.9+O*2.4)*.35,F.mat.opacity=F.op*(.7+.3*N)}),this.spot.mat.opacity=this.spot.op*(.92+.08*Math.sin(this.t*2)),this.text3d&&this.text3d.userData.title.userData.glyphs.forEach((F,O,L)=>{let B=((M-O*.25)%L.length+L.length)%L.length,z=B<1?Math.sin(Math.PI*B):0;F.position.y=.06*z,F.rotation.z=.06*z*(O%2?1:-1)})}setFont(t,e){if(this.text3d&&(this.camera.remove(this.text3d),this.text3d.traverse(f=>f.isMesh&&f.geometry.dispose()),this.text3d=null),this.fontId=e?t:null,!e)return;let n=Si(15222874,{shininess:60,specular:9465968,emissive:5247e3}),s=Si(Af,{shininess:90,specular:16773312,emissive:2759172}),r=Si(15976266,{shininess:90,specular:16773312}),o=Tf(7227924),a=new ne,c=Pf(e,"\uBBFF\uC74C\uC758 \uCCB4\uC2A4",.36,{depth:.16,front:n,side:s}),l=Math.min(1,1.42/c.userData.w);c.scale.setScalar(l),c.position.y=1.1-.15*(1-l);let h=Pf(e,"FAITH CHESS",.09,{depth:.045,front:r,side:o});h.scale.setScalar(Math.min(1,.78/h.userData.w)),h.position.y=.8,a.add(c,h),a.position.set(0,0,-5),a.rotation.x=.32,a.userData={title:c,sub:h};let u=new en(16774376,1.1);u.position.set(-1.2,2.2,2.5),u.target=c,a.add(u),this.camera.add(a),this.text3d=a}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,c=Math.round(e.y*r),l=Math.round((e.y+e.h)*r)-c,h=n.h-c-l,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,l),t.setScissor(o,h,a,l),t.setClearColor(this.scene.background,1),t.clear(!0,!0,!1),this.camera.aspect=a/l,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var Mt=270,fn=480;function An(i){return{x:(i&7)-3.5,z:3.5-(i>>3)}}var Df=i=>7.5/Math.tan(i*Math.PI/360),Uf={flat:{fov:14,pos:[0,Df(14),.0625],target:[0,0,.0625],up:[0,0,-1]},persp:{fov:46,pos:[0,Df(46),.0625],target:[0,0,.0625],up:[0,0,-1]},tilt:{fov:30,pos:[0,26.3,8.55],target:[0,0,.35],up:[0,1,0]}},Nf=i=>i*i*(3-2*i);function $y(i=.07,t=.05){let e=[],n=[],s=(o,a,c,l)=>{for(let h of[o,a,c,o,c,l])e.push(...h),n.push((h[0]+4)/8,(4-h[2])/8)};for(let o=0;o<8;o++)for(let a=0;a<8;a++){let c=a-4,l=a-3,h=3-o,u=4-o,f=c+i,d=l-i,g=h+i,x=u-i,m=-t;s([f,0,g],[f,0,x],[d,0,x],[d,0,g]),s([c,m,h],[f,0,g],[d,0,g],[l,m,h]),s([l,m,h],[d,0,g],[d,0,x],[l,m,u]),s([l,m,u],[d,0,x],[f,0,x],[c,m,u]),s([c,m,u],[f,0,x],[f,0,g],[c,m,h])}let r=new ce;return r.setAttribute("position",new Ct(e,3)),r.setAttribute("uv",new Ct(n,2)),r.computeVertexNormals(),r}var oa=class{constructor(t){this.canvas=t,this.renderer=new Ls({canvas:t,antialias:!1,powerPreference:"low-power",alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(Mt,fn,!1),this.renderer.toneMapping=Un,this.scene=new On,this.camera=new Pe(44,Mt/fn,.5,200),this.bank=new jo,this.pieces=new Map,this.highlights=[],this.anims=[],this.pendingRemoval=[],this.bursts=[],this.shards=[],this.flights=[],this.ghosts=[],this.puffs=[],this.hitStop=0,this.shake=null,this.revives=[],this.pendingRevive=new Map,this.clocks=[],this.kingStage=new na,this.kingView=null,this.overlayCanvas=document.createElement("canvas"),this.overlayCanvas.width=Mt,this.overlayCanvas.height=fn,this.overlayCanvas.skip=!0,this.overlayRenderer=null,this.titleStage=null,this.titleView=!1,this.phoneStage=null,this.phoneView=null,this.rewinding=null,this.mode="title",this.side=1,this.selectedId=null,this.time=0,this.raycaster=new Fs,this.ready=!1,this.lerpCam=null,this.zoomFx=null,this.flash=0,this.lastMoveKey=null,this.theme={...Vs},this.camOverride=null}async init(t=[]){await this.bank.loadOverrides(t),this.ambient=new bi(16777215,1),this.key=new en(16777215,1.6),this.placeKeyLight(),this.fill=new Tr(16777215,10,22,2),this.fill.position.set(-7,3,-5),this.fill2=new Tr(16777215,10,22,2),this.fill2.position.set(7,2.5,6),this.scene.add(this.ambient,this.key,this.fill,this.fill2),this.table=new Bt(new Wn(40,40),new me),this.table.rotation.x=-Math.PI/2,this.table.position.y=-.62,this.rim=new Bt(new ee(8.4,.22,8.4),new an({flatShading:!0,specular:4473924,shininess:30})),this.rim.position.y=-.17,this.board=new Bt($y(),new an({depthWrite:!1,flatShading:!0})),this.board.renderOrder=2,this.under=new Bt(new Wn(8,8),new me({color:393994})),this.under.rotation.x=-Math.PI/2,this.under.position.y=-.4,this.scene.add(this.table,this.rim,this.board,this.under),this.hlPool=[];let e=new Wn(.94,.94);for(let n=0;n<28;n++){let s=new Bt(e,new me({color:16777215,transparent:!0,opacity:.45,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.012,s.visible=!1,s.renderOrder=3,this.scene.add(s),this.hlPool.push(s)}this.burstGeo=new Ho(.3,.46,8),this.ready=!0,this.applyTheme(this.theme,!0)}applyTheme(t,e=!1){let n=this.theme;if(this.theme={...t},!this.ready)return;let s=this.theme,r=this.bank;this.applyRenderSize();let o=lf[s.backdrop];this.scene.background=new wt(o.bg),this.scene.fog=new Ds(o.bg,o.fog[0],o.fog[1]),this.fogSpan=o.fog[1]-o.fog[0],this.ambient.color.set(o.ambient[0]),this.ambient.intensity=o.ambient[1]*.55,this.key.color.set(o.key[0]),this.key.intensity=o.key[1]*1.35,this.fill.color.set(o.fill[0]),this.fill.intensity=o.fill[1],this.fill2.color.set(o.fill2[0]),this.fill2.intensity=o.fill2[1];let a=r.table(s.backdrop);a.repeat.set(10,10),this.table.material.map=a,this.table.material.needsUpdate=!0;let c=r.envMap(),l=r.rim(s.board);l.repeat.set(2,2),Object.assign(this.rim.material,{map:l,envMap:s.board==="glass"||s.board==="tile"?c:null,combine:Ar,reflectivity:.25}),this.rim.material.needsUpdate=!0;let h=s.board==="glass";if(Object.assign(this.board.material,{map:r.board(s.board),transparent:h,opacity:h?.62:1,depthWrite:!h,specular:new wt(h?9075350:s.board==="marble"?5592405:1118481),shininess:h?18:30}),this.board.material.needsUpdate=!0,this.iconCache=new Map,e||n.pieces!==s.pieces||!this.mats){this.mats=ff(s.pieces,r);let u=[...this.pieces.entries()].map(([f,d])=>({id:f,sq:d.sq,type:d.type,color:d.color,shield:d.shield}));this.clearPieces(),this.sync(u,null)}}sync(t,e){let n=e?e.from+"-"+e.to+"-"+t.length:null,s=!!e&&n!==this.lastMoveKey;this.lastMoveKey=n;let r=new Set,o=!!this.rewinding&&this.time-this.rewinding.t0<3;this.rewinding=null;for(let a of t){r.add(a.id);let c=this.pieces.get(a.id);if(c&&(c.type!==a.type||c.color!==a.color)&&(this.removeEntry(c),this.pieces.delete(a.id),c=null),!c){let l=xl(a.type,a.color,this.mats),h=An(a.sq);l.position.set(h.x,0,h.z),l.rotation.y=this.side===1?0:Math.PI,this.scene.add(l),c={group:l,type:a.type,color:a.color,sq:a.sq,shield:!1,ring:null},this.pieces.set(a.id,c),o&&(c.pop={t:0});let u=this.pendingRevive.get(a.sq);u!=null&&(this.pendingRevive.delete(a.sq),this.time-u<2&&this.startRevive(c))}if(c.sq!==a.sq){let l=An(c.sq),h=An(a.sq),u=s&&e.from===c.sq&&e.to===a.sq,f=s&&c.type==="r"&&c.sq>>3===e.from>>3&&Math.abs((e.to&7)-(e.from&7))===2;o?this.anims.push({group:c.group,from:l,to:h,t:0,dur:.6,hop:!1}):u||f?this.anims.push({group:c.group,from:l,to:h,t:0,dur:.2,hop:u&&c.type==="n"}):c.group.position.set(h.x,0,h.z),c.sq=a.sq}a.shield&&!c.ring&&(c.ring=df(),c.group.add(c.ring)),!a.shield&&c.ring&&(c.group.remove(c.ring),c.ring=null),c.shield=a.shield}for(let[a,c]of this.pieces){if(r.has(a))continue;this.pieces.delete(a);let l=s&&c.type==="p"&&c.sq===(e.from&-8|e.to&7);if(s&&(c.sq===e.to||l)){let h=An(e.from),u=An(e.to),f=new P(u.x-h.x,0,u.z-h.z);f.lengthSq()<1e-6&&f.set(0,0,-1),this.pendingRemoval.push({e:c,t:.17,dir:f.normalize()})}else this.removeEntry(c)}}removeEntry(t){this.scene.remove(t.group)}clearPieces(){for(let t of this.pieces.values())this.removeEntry(t);for(let t of this.pendingRemoval)this.removeEntry(t.e);for(let t of this.shards)this.scene.remove(t.mesh),t.mesh.geometry.dispose();this.shards.length=0;for(let t of this.flights)this.scene.remove(t.e.group);for(let t of this.ghosts)this.disposeGhost(t);for(let t of this.puffs)this.scene.remove(t.mesh),t.mesh.material.dispose();this.flights.length=0,this.ghosts.length=0,this.puffs.length=0,this.shake=null,this.hitStop=0,this.pieces.clear(),this.anims.length=0,this.pendingRemoval.length=0;for(let t of this.revives)for(let e of t.shards)this.scene.remove(e.mesh),e.mesh.geometry.dispose();for(let t of this.clocks)this.scene.remove(t.group);this.clocks.length=0,this.revives.length=0,this.pendingRevive.clear(),this.lastMoveKey=null}setHighlights(t){this.highlights=t}setSelected(t){this.selectedId=t}attackZoom(t){let e=yl[this.theme.zoom]||yl.normal;this.zoomFx={t:0,sq:t,preset:e}}setSide(t){if(this.side!==t){this.side=t;for(let e of this.pieces.values())e.group.rotation.y=t===1?0:Math.PI;this.placeKeyLight()}}placeKeyLight(){this.key&&this.key.position.set(-5*this.side,9,-4*this.side)}setNativeSize(t,e){this.nativeSize={w:Math.max(1,Math.round(t)),h:Math.max(1,Math.round(e))},this.ready&&this.applyRenderSize()}renderSize(t=this.theme){let e=mf[t.pixel];return e==null?this.nativeSize||{w:Mt*2,h:fn*2}:{w:Math.round(Mt*e),h:Math.round(fn*e)}}applyRenderSize(){let{w:t,h:e}=this.renderSize();this.renderer.setSize(t,e,!1)}basePose(){if(this.camOverride)return{up:new P(0,1,0),...this.camOverride};let t=Uf[this.theme.camera]||Uf.flat,e=this.side;return{pos:new P(t.pos[0]*e,t.pos[1],t.pos[2]*e),target:new P(t.target[0]*e,t.target[1],t.target[2]*e),up:new P(t.up[0]*e,t.up[1],t.up[2]*e),fov:t.fov}}setMode(t){this.mode==="title"&&t==="game"&&(this.lerpCam={t:0,from:this.camera.position.clone(),fromTarget:this.curTarget?this.curTarget.clone():new P,fromFov:this.camera.fov,fromUp:this.camera.up.clone()}),this.mode=t}pickSquare(t,e){let n=new j(t/Mt*2-1,-(e/fn)*2+1);this.raycaster.setFromCamera(n,this.camera);let s=this.raycaster.intersectObject(this.board,!1);if(!s.length)return-1;let{x:r,z:o}=s[0].point,a=Math.floor(r+4),c=Math.floor(4-o);return a<0||a>7||c<0||c>7?-1:c*8+a}squareToScreen(t){let e=An(t),n=new P(e.x,.1,e.z).project(this.camera);return{x:(n.x+1)/2*Mt,y:(1-n.y)/2*fn}}update(t){this.time+=t;let e=this.time,n=this.camera,s,r,o,a;if(this.mode==="title"){let l=e*.12;s=new P(Math.sin(l)*9.5,10.5+Math.sin(e*.3)*.4,Math.cos(l)*9.5),r=new P(0,.6,0),o=46,a=new P(0,1,0)}else{let l=this.basePose();if(s=l.pos.clone(),r=l.target.clone(),o=l.fov,a=l.up.clone(),this.lerpCam){this.lerpCam.t=Math.min(1,this.lerpCam.t+t/.9);let h=1-Math.pow(1-this.lerpCam.t,3);s.lerpVectors(this.lerpCam.from,s,h),r.lerpVectors(this.lerpCam.fromTarget,r,h),a.lerpVectors(this.lerpCam.fromUp,a,h).normalize(),o=this.lerpCam.fromFov+(o-this.lerpCam.fromFov)*h,this.lerpCam.t>=1&&(this.lerpCam=null)}if(this.zoomFx){let h=this.zoomFx,u=h.preset;h.t+=t;let f=.2,d=.5,g=u.dur,x=h.t<f?1-Math.pow(1-h.t/f,2):h.t<d?1:h.t<g?1-Nf((h.t-d)/(g-d)):0,m=An(h.sq),p=new P(m.x,.3,m.z),y=p.clone().sub(s);if(s.addScaledVector(y,u.s*x),r.lerp(p,.85*x),u.shake&&h.t>.16&&h.t<.42){let _=u.shake*(1-(h.t-.16)/.26);s.x+=(Math.random()*2-1)*_,s.y+=(Math.random()*2-1)*_}u.flash&&h.t>.16&&!h.flashed&&(this.flash=u.flash,h.flashed=!0),h.t>=g&&(this.zoomFx=null)}if(this.shake){let h=this.shake;h.t+=t;let u=h.amp*Math.max(0,1-h.t/.32);s.x+=(Math.random()*2-1)*u,s.z+=(Math.random()*2-1)*u,r.x+=(Math.random()*2-1)*u*.5,h.t>=.32&&(this.shake=null)}}if(n.up.copy(a),n.position.copy(s),n.lookAt(r),this.curTarget=r,this.scene.fog){let l=s.distanceTo(r);this.scene.fog.near=l+3,this.scene.fog.far=l+3+(this.fogSpan||14)}n.fov!==o&&(n.fov=o,n.updateProjectionMatrix()),this.flash=Math.max(0,this.flash-t*3.2);let c=this.hitStop>0?0:t;this.hitStop=Math.max(0,this.hitStop-t);for(let l=this.anims.length-1;l>=0;l--){let h=this.anims[l];h.t=Math.min(1,h.t+c/h.dur);let u=Nf(h.t),f=Math.sin(u*Math.PI)*(h.hop?.3:.12);h.group.position.set(h.from.x+(h.to.x-h.from.x)*u,f,h.from.z+(h.to.z-h.from.z)*u),h.group.scale.setScalar(1+f),h.group.userData.shadow.position.set(.06+f*.5,.004-f,.07+f*.5),h.t>=1&&(h.group.scale.setScalar(1),this.anims.splice(l,1))}for(let l=this.pendingRemoval.length-1;l>=0;l--){let h=this.pendingRemoval[l];h.t-=t,h.t<=0&&(this.pendingRemoval.splice(l,1),h.dir?this.launch(h.e,h.dir):(this.removeEntry(h.e),this.spawnBurst(h.e.sq)))}this.updateFlights(c,t);for(let l=this.shards.length-1;l>=0;l--){let h=this.shards[l];h.t+=t,h.v.y-=11*t,h.mesh.position.addScaledVector(h.v,t),h.mesh.position.y<.03&&(h.mesh.position.y=.03,h.v.y*=-.35,h.v.x*=.6,h.v.z*=.6,h.w.multiplyScalar(.6)),h.mesh.rotation.x+=h.w.x*t,h.mesh.rotation.y+=h.w.y*t,h.mesh.rotation.z+=h.w.z*t;let u=Math.max(0,Math.min(1,(h.life-h.t)/.35));h.mesh.scale.setScalar(u),h.t>=h.life&&(this.scene.remove(h.mesh),h.mesh.geometry.dispose(),this.shards.splice(l,1))}this.updateClocks(t);for(let l=this.revives.length-1;l>=0;l--){let h=this.revives[l];h.t+=t;let u=Math.round((1-Math.min(1,h.t/h.dur))*(h.N-1));for(let f of h.shards){let d=u*7,g=f.track;f.mesh.position.set(g[d],g[d+1],g[d+2]),f.mesh.rotation.set(g[d+3],g[d+4],g[d+5]),f.mesh.scale.setScalar(Math.max(.001,g[d+6]))}if(h.t>=h.dur){for(let g of h.shards)this.scene.remove(g.mesh),g.mesh.geometry.dispose();let{body:f,shadow:d}=h.e.group.userData;f.visible=!0,d.visible=!0,h.e.reviving=!1,h.e.pop={t:0},this.spawnBurst(h.e.sq,8382975),this.flash=Math.max(this.flash,.3),this.revives.splice(l,1)}}for(let l=this.bursts.length-1;l>=0;l--){let h=this.bursts[l];h.t+=t;let u=h.t/.35;h.mesh.scale.setScalar(1+u*1.4),h.mesh.material.opacity=Math.max(0,.9*(1-u)),u>=1&&(this.scene.remove(h.mesh),h.mesh.material.dispose(),this.bursts.splice(l,1))}for(let[l,h]of this.pieces){if(!this.anims.some(u=>u.group===h.group)){let u=l===this.selectedId?.14+Math.sin(e*6)*.03:0;h.group.position.y=u;let f=1+u;if(h.pop){h.pop.t+=t;let d=Math.min(1,h.pop.t/.35);f*=1+Math.sin(d*Math.PI)*.25,d>=1&&(h.pop=null)}h.group.scale.setScalar(f),h.group.userData.shadow.position.set(.06+u*.5,.004-u,.07+u*.5)}h.ring&&(h.ring.rotation.z=e*1.5,h.ring.material.color.setHSL(.52,1,.6+Math.sin(e*4)*.15))}for(let l=0;l<this.hlPool.length;l++){let h=this.hlPool[l],u=this.highlights[l];if(!u){h.visible=!1;continue}let f=An(u.sq);h.position.set(f.x,.012,f.z),h.material.color.set(u.color),h.material.opacity=u.opacity??.45,h.visible=!0}}shatter(t){let e=[...this.pieces.entries()].find(([,c])=>c.sq===t);if(!e)return;let[n,s]=e;this.pieces.delete(n),s.group.updateMatrixWorld(!0);let r=An(t),o=new P(r.x,.15,r.z),a=[new P,new P,new P];s.group.userData.body.traverse(c=>{if(!c.isMesh)return;let l=c.material.clone();l.side=We;let h=c.geometry.attributes.position;for(let u=0;u+2<h.count;u+=3){for(let m=0;m<3;m++)a[m].fromBufferAttribute(h,u+m).applyMatrix4(c.matrixWorld);let f=a[0].clone().add(a[1]).add(a[2]).divideScalar(3),d=new ce;d.setAttribute("position",new Ct(a.flatMap(m=>[m.x-f.x,m.y-f.y,m.z-f.z]),3)),d.computeVertexNormals();let g=new Bt(d,l);g.position.copy(f),this.scene.add(g);let x=f.clone().sub(o);x.y=0,x.lengthSq()<1e-6&&x.set(Math.random()-.5,0,Math.random()-.5),x.normalize().multiplyScalar(1.6+Math.random()*2.4),this.shards.push({mesh:g,life:1.3+Math.random()*.4,t:0,v:new P(x.x,2.2+Math.random()*3.2,x.z),w:new P((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18)})}}),this.scene.remove(s.group),this.spawnBurst(t,16734794),this.flash=Math.max(this.flash,.35)}reviveAt(t){this.spawnClock(t);let e=[...this.pieces.values()].find(n=>n.sq===t);e?this.startRevive(e):this.pendingRevive.set(t,this.time)}rewind(){this.rewinding={t0:this.time},this.spawnClock(-1,{scale:2.1,life:1.6})}spawnClock(t,e={}){if(!this.clockProto){let s=new ne,r=h=>new xn({color:h,flatShading:!0}),o=new an({color:14264378,flatShading:!0,shininess:70,specular:9076848}),a=(h,u,f=0,d=0,g=0)=>{let x=new Bt(h,u);return x.position.set(f,d,g),s.add(x),x};a(new he(.4,.4,.16,12).rotateX(Math.PI/2),r(13119546)),a(new he(.32,.32,.02,12).rotateX(Math.PI/2),r(16774104),0,0,.085);for(let h=0;h<12;h++){let u=h/12*Math.PI*2,f=h%3===0;a(new ee(f?.04:.025,f?.07:.04,.01),r(1706512),Math.sin(u)*.26,Math.cos(u)*.26,.1).rotation.z=-u}for(let h of[-1,1])a(new Vo(.14,8,4,0,Math.PI*2,0,Math.PI/2),o,h*.25,.36,0).rotation.z=-h*.55,a(new he(.035,.05,.14,5),o,h*.24,-.42,0).rotation.z=h*.4;a(new ee(.06,.1,.06),o,0,.45,0);let c=new ne;c.position.z=.11,s.add(c),c.add(new Bt(new ee(.035,.27,.015).translate(0,.12,0),r(11539486)));let l=new ne;l.position.z=.115,s.add(l),l.add(new Bt(new ee(.05,.18,.015).translate(0,.08,0),r(1706512))),a(new he(.035,.035,.03,6).rotateX(Math.PI/2),o,0,0,.12),this.clockIdx={minute:s.children.indexOf(c),hour:s.children.indexOf(l)},this.clockProto=s}let n=this.clockProto.clone();n.userData={minute:n.children[this.clockIdx.minute],hour:n.children[this.clockIdx.hour]},n.traverse(s=>{s.renderOrder=6}),this.scene.add(n),this.clocks.push({group:n,sq:t,t:0,life:e.life||1.35,size:e.scale||1})}updateClocks(t){if(!this.clocks.length)return;let e=this.camera,n=new P(1,0,0).applyQuaternion(e.quaternion),s=new P(0,1,0).applyQuaternion(e.quaternion),r=new P(0,0,1).applyQuaternion(e.quaternion);for(let o=this.clocks.length-1;o>=0;o--){let a=this.clocks[o];if(a.t+=t,a.sq<0)a.group.position.set(0,1.6,0).addScaledVector(r,1.5);else{let u=An(a.sq);a.group.position.set(u.x,.9,u.z).addScaledVector(n,.62).addScaledVector(s,.5).addScaledVector(r,.6)}a.group.quaternion.copy(e.quaternion);let c=a.t/.2,l=1.7,h=a.t<.2?1+(l+1)*Math.pow(c-1,3)+l*Math.pow(c-1,2):1;a.t>a.life-.25&&(h*=Math.max(0,(a.life-a.t)/.25)),a.group.scale.setScalar(Math.max(.001,h*.9*a.size)),a.group.rotateZ(.06*Math.sin(a.t*22)*Math.max(0,1-a.t)),a.group.userData.minute.rotation.z=a.t*13,a.group.userData.hour.rotation.z=.9+a.t*1.6,a.t>=a.life&&(this.scene.remove(a.group),this.clocks.splice(o,1))}}startRevive(t){if(t.reviving)return;t.reviving=!0,t.group.updateMatrixWorld(!0);let{body:e,shadow:n}=t.group.userData,s=An(t.sq),r=new P(s.x,.15,s.z),o=1.1,a=1/60,c=Math.round(o/a)+1,l=[],h=[new P,new P,new P];e.traverse(u=>{if(!u.isMesh)return;let f=u.material.clone();f.side=We;let d=u.geometry.attributes.position;for(let g=0;g+2<d.count;g+=3){for(let I=0;I<3;I++)h[I].fromBufferAttribute(d,g+I).applyMatrix4(u.matrixWorld);let x=h[0].clone().add(h[1]).add(h[2]).divideScalar(3),m=new ce;m.setAttribute("position",new Ct(h.flatMap(I=>[I.x-x.x,I.y-x.y,I.z-x.z]),3)),m.computeVertexNormals();let p=new Bt(m,f),y=x.clone().sub(r);y.y=0,y.lengthSq()<1e-6&&y.set(Math.random()-.5,0,Math.random()-.5),y.normalize().multiplyScalar(1.6+Math.random()*2.4);let _=new P(y.x,2.2+Math.random()*3.2,y.z),v=new P((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18),T=x.clone(),S=new P,w=new Float32Array(c*7);for(let I=0;I<c;I++){let M=Math.max(0,Math.min(1,(o-I*a)/.3));w.set([T.x,T.y,T.z,S.x,S.y,S.z,M],I*7),_.y-=11*a,T.addScaledVector(_,a),T.y<.03&&(T.y=.03,_.y*=-.35,_.x*=.6,_.z*=.6,v.multiplyScalar(.6)),S.addScaledVector(v,a)}p.scale.setScalar(.001),this.scene.add(p),l.push({mesh:p,track:w})}}),e.visible=!1,n.visible=!1,this.revives.push({e:t,shards:l,t:0,dur:o,N:c})}pieceIcon(t,e,n=34){if(!this.ready)return null;let s=`${t}${e}${n}`;this.iconCache||(this.iconCache=new Map);let r=this.iconCache.get(s);if(r)return r;let o=n*2,a=this.renderer,c=new On;c.add(this.ambient.clone(),this.fill.clone(),this.fill2.clone());let l=this.key.clone();l.position.set(-5,9,-4),c.add(l);let h=xl(t,e,this.mats);h.userData.shadow.visible=!1,c.add(h);let u=new Is(-.52,.52,.52,-.52,.1,30);u.position.set(0,10,0),u.up.set(0,0,-1),u.lookAt(0,0,0);let f=new Nn(o,o);f.texture.colorSpace=pe;let d=a.getRenderTarget(),g=a.getClearColor(new wt),x=a.getClearAlpha();a.setRenderTarget(f),a.setClearColor(0,0),a.clear(!0,!0,!1),a.render(c,u);let m=new Uint8Array(o*o*4);a.readRenderTargetPixels(f,0,0,o,o,m),a.setRenderTarget(d),a.setClearColor(g,x),f.dispose();let p=document.createElement("canvas");p.width=p.height=o;let y=p.getContext("2d"),_=y.createImageData(o,o);for(let T=0;T<o;T++)_.data.set(m.subarray((o-1-T)*o*4,(o-T)*o*4),T*o*4);y.putImageData(_,0,0),r=document.createElement("canvas"),r.width=r.height=n;let v=r.getContext("2d");return v.imageSmoothingEnabled=!0,v.imageSmoothingQuality="high",v.drawImage(p,0,0,n,n),this.iconCache.set(s,r),r}launch(t,e){let n=t.group;n.userData.shadow.visible=!1;let s=12+Math.random()*3,r=new P(-e.z,0,e.x).multiplyScalar((Math.random()-.5)*3),o=new P(e.x*s,9.5+Math.random()*2,e.z*s).add(r),a=new P(e.z,0,-e.x).normalize(),c=new P(0,1,0);this.flights.push({e:t,v:o,axis:a,twist:c,spin:20+Math.random()*10,twistSpin:(Math.random()-.5)*14,t:0,ghostT:0,bounced:!1}),this.spawnImpact(n.position.clone(),e),this.hitStop=.07,this.shake={t:0,amp:.16},this.flash=Math.max(this.flash,.3)}updateFlights(t,e){let n=new Gn;for(let s=this.flights.length-1;s>=0;s--){let r=this.flights[s],o=r.e.group;r.t+=t,r.v.y-=9*t,o.position.addScaledVector(r.v,t),n.setFromAxisAngle(r.axis,r.spin*t),o.quaternion.premultiply(n),n.setFromAxisAngle(r.twist,r.twistSpin*t),o.quaternion.premultiply(n),o.position.y<0&&r.v.y<0&&!r.bounced&&(o.position.y=0,r.v.y*=-.5,r.v.x*=.75,r.v.z*=.75,r.spin*=.6,r.bounced=!0,this.spawnDust(o.position.clone(),4)),r.ghostT+=t,r.ghostT>.03&&r.t<.55&&t>0&&(r.ghostT=0,this.spawnGhost(o,.45*(1-r.t/.55)));let a=Math.hypot(o.position.x,o.position.z);(r.t>1.6||a>14||o.position.y<-3)&&(this.scene.remove(o),this.flights.splice(s,1))}for(let s=this.ghosts.length-1;s>=0;s--){let r=this.ghosts[s];r.t+=e;let o=r.t/.22;r.mat.opacity=Math.max(0,r.a0*(1-o)),o>=1&&(this.disposeGhost(r),this.ghosts.splice(s,1))}for(let s=this.puffs.length-1;s>=0;s--){let r=this.puffs[s];r.t+=e;let o=r.t/r.life;r.v.multiplyScalar(Math.max(0,1-e*3)),r.mesh.position.addScaledVector(r.v,e),r.mesh.scale.setScalar(r.s0*(1+o*1.5)),r.mesh.material.opacity=Math.max(0,.75*(1-o)),o>=1&&(this.scene.remove(r.mesh),r.mesh.material.dispose(),this.puffs.splice(s,1))}}spawnGhost(t,e){let n=new me({color:16774880,transparent:!0,opacity:e,depthWrite:!1}),s=t.userData.body.clone();s.traverse(o=>{o.isMesh&&(o.material=n)});let r=new ne;r.position.copy(t.position),r.quaternion.copy(t.quaternion),r.scale.copy(t.scale),r.add(s),r.renderOrder=3,this.scene.add(r),this.ghosts.push({group:r,mat:n,t:0,a0:e})}disposeGhost(t){this.scene.remove(t.group),t.mat.dispose()}spawnImpact(t,e){this.spawnDust(t,7,e)}spawnDust(t,e,n=null){this.dustGeo||(this.dustGeo=new hn(.13,0));for(let s=0;s<e;s++){let r=Math.random()*Math.PI*2,o=new P(Math.cos(r),0,Math.sin(r)).multiplyScalar(1.5+Math.random()*2);n&&o.addScaledVector(n,-1.2),o.y=.6+Math.random()*.8;let a=new Bt(this.dustGeo,new me({color:14208960,transparent:!0,opacity:.75,depthWrite:!1}));a.position.set(t.x,.1,t.z);let c=.6+Math.random()*.6;a.scale.setScalar(c),a.renderOrder=4,this.scene.add(a),this.puffs.push({kind:"dust",mesh:a,v:o,s0:c,t:0,life:.45+Math.random()*.2})}}spawnBurst(t,e=16773824){let n=An(t),s=new Bt(this.burstGeo,new me({color:e,transparent:!0,opacity:.9,depthWrite:!1,side:We}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.03,n.z),s.renderOrder=4,this.scene.add(s),this.bursts.push({mesh:s,t:0})}render(t){if(!this.ready)return;if(this.update(t),this.titleView){this.titleStage||(this.titleStage=new Xs),this.titleStage.update(t);let n=this.renderer.domElement;this.titleStage.render(this.renderer,{x:0,y:0,w:270,h:480},{w:n.width,h:n.height})}else this.renderer.render(this.scene,this.camera);let e=!1;if(this.kingView){this.kingStage.update(t,this.kingView.shown,this.kingView.mode);let n=this.renderer.domElement;this.kingStage.render(this.renderer,this.kingView.rect,{w:n.width,h:n.height}),this.kingStage.cheering&&(this.overlayRenderer||(this.overlayRenderer=new Ls({canvas:this.overlayCanvas,antialias:!1,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),this.overlayRenderer.setPixelRatio(1),this.overlayRenderer.toneMapping=Un),(this.overlayCanvas.width!==n.width||this.overlayCanvas.height!==n.height)&&this.overlayRenderer.setSize(n.width,n.height,!1),e=this.kingStage.renderOverlay(this.overlayRenderer,this.kingView.rect,{w:n.width,h:n.height}))}if(this.overlayCanvas.skip=!e,this.phoneView&&this.phoneStage){this.phoneStage.update(t);let n=this.renderer.domElement;this.phoneStage.render(this.renderer,this.phoneView.rect,{w:n.width,h:n.height})}}};var At=270,Ze=480,wi={9:"10px Galmuri9",11:"12px Galmuri11","11b":"bold 12px Galmuri11",14:"15px Galmuri14"},Cl={9:10,11:12,"11b":12,14:15},Of=Object.values(wi),ie={red:"#8e1a1a",redHi:"#d4382c",gold:"#e8b93a",cyan:"#7fe9ff",green:"#7ad17a",warn:"#ff6b6b",late:"#ff9f43"},aa=class{constructor(t){this.c=t,this.ctx=t.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.buttons=[],this.pressedId=null,this.off=document.createElement("canvas"),this.offCtx=this.off.getContext("2d"),this.qrCache=new Map,this.setTheme({frame:"deco",lettering:"crown"})}setTheme(t){this.frameId=t.frame,this.letterId=t.lettering,this.pal=Rr[t.frame]||Rr.deco}begin(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,At,Ze),this.ctx.imageSmoothingEnabled=!1,this.buttons=[]}rect(t,e,n,s,r){this.ctx.fillStyle=r,this.ctx.fillRect(t,e,n,s)}box(t,e,n,s,r){let o=this.ctx;o.fillStyle=r,o.fillRect(t,e,n,1),o.fillRect(t,e+s-1,n,1),o.fillRect(t,e,1,s),o.fillRect(t+n-1,e,1,s)}text(t,e,n,{font:s=11,color:r=this.pal.ink,align:o="left",shadow:a=!0,alpha:c=1}={}){let l=this.ctx;l.save(),l.globalAlpha=c,l.font=wi[s]||wi[11],l.textBaseline="top",l.textAlign="left";let h=o==="left"?0:l.measureText(t).width,u=Math.round(o==="center"?e-h/2:o==="right"?e-h:e),f=Math.round(n);a&&(l.fillStyle="#000",l.fillText(t,u+1,f+1)),l.fillStyle=r,l.fillText(t,u,f),l.restore()}measure(t,e=11){return this.ctx.font=wi[e]||wi[11],Math.ceil(this.ctx.measureText(t).width)}bigText(t,e,n,{scale:s=2,font:r=14,color:o=this.pal.ink,align:a="center",shadow:c=!0}={}){let l=this.measure(t,r)+4,h=Cl[r]+4,u=this.prepOff(l,h),f=Math.round(a==="center"?e-l*s/2:a==="right"?e-l*s:e);return c&&(u.fillStyle="#000",u.font=wi[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f+s,n+s,l*s,h*s),u.clearRect(0,0,l,h)),u.fillStyle=o,u.font=wi[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f,n,l*s,h*s),{w:l*s,h:h*s}}prepOff(t,e){this.off.width=t,this.off.height=e;let n=this.offCtx;return n.imageSmoothingEnabled=!1,n.clearRect(0,0,t,e),n.textBaseline="top",n}letter(t,e,n,{scale:s=2,font:r=14,align:o="center",spacing:a=0}={}){let c=Cl[r]+4,l=this.measure(t,r)+6+Math.max(0,t.length-1)*a,h=o==="center"?Math.round(e-l*s/2):o==="right"?e-l*s:e,u=[];{let T=3;for(let S of t){let w=this.measure(S,r);u.push([T,w]),T+=w+a}}let f=this.letterId,d=f==="crown"||f==="robe"||f==="velvet"||f==="disco",x=(T,S=0,w=0)=>{let I=this.prepOff(l,c);I.font=wi[r],I.fillStyle="#fff";for(let[M,E]of d?[[0,0],[1,0],[0,1],[1,1]]:[[0,0]])a?u.forEach(([N],F)=>I.fillText([...t][F],N+M,1+E)):I.fillText(t,3+M,1+E);typeof T=="function"?(I.globalCompositeOperation="source-atop",T(I)):(I.globalCompositeOperation="source-in",I.fillStyle=T,I.fillRect(0,0,l,c)),I.globalCompositeOperation="source-over",this.ctx.drawImage(this.off,h+S*s,n+w*s,l*s,c*s)},m=T=>{let S=this.offCtx.createLinearGradient(0,0,0,c);return T.forEach(([w,I])=>S.addColorStop(w,I)),S},p=(T,S,w,I=7,M=null)=>E=>{E.fillStyle=T,E.fillRect(0,0,l,c);for(let N=-I;N<l+I;N+=I)E.fillStyle=S,E.beginPath(),E.moveTo(N,0),E.lineTo(N+I,0),E.lineTo(N+I*.35,c*.55),E.closePath(),E.fill(),E.fillStyle=w,E.beginPath(),E.moveTo(N+I,c),E.lineTo(N,c),E.lineTo(N+I*.65,c*.48),E.closePath(),E.fill();M&&M(E)},y=1/s,_=s>=3?3:s===2?2:1,v=(T,S)=>{for(let w=0;w<=_;w++)for(let I of[-1,1])x(T,I,w);x(T,0,-1),x(T,0,_+1),S.forEach((w,I)=>x(w,0,_-I))};if(f==="neon"){x("#2a0830",1,2);for(let[T,S]of[[-1,0],[1,0],[0,-1],[0,1]])x("#3fd8ff",T,S);x(m([[0,"#ffe0fa"],[.5,"#ff6ad8"],[1,"#c02aa8"]]))}else if(f==="chrome")x("#000",1,2),x("#2a2c34",1,1),x(m([[0,"#ffffff"],[.42,"#c8ccd8"],[.5,"#3a3e4c"],[.62,"#e8ecf4"],[1,"#7a7e8c"]]));else if(f==="crown")v("#08040c",["#1e0e2c","#3a1e52","#5a3a78"].slice(0,_)),x(p("#d6d8e6","#ffffff","#8e90a8",7,s>=2?T=>{T.fillStyle="#4fd0ff";for(let[S,w]of u)T.fillRect(S+Math.floor(w/2),Math.round(c*.45),2,2)}:null));else if(f==="robe"){v("#0c0408",["#3a0a12","#5a1220","#7a1a26"].slice(0,_));for(let[T,S]of[[-1,0],[1,0],[0,-1],[0,1]])x("#f8f4ea",T*y,S*y);x(p("#c8343f","#ec6a6e","#8a1e2c",7,T=>{T.fillStyle="#f2c14e",T.fillRect(0,Math.round(c*.6),l,1)}))}else if(f==="velvet"){v("#0a0408",["#5a3a10","#8a5e18","#b8862a"].slice(0,_));for(let[T,S]of[[-1,0],[1,0],[0,-1],[0,1]])x("#f3dc8a",T*y,S*y);x(p("#7a2a8a","#b25ac4","#4e1a5c"))}else if(f==="disco"){let T=Math.floor(performance.now()/508.47457627118644);v("#08040c",["#140820","#24103a","#36184e"].slice(0,_));for(let[S,w]of[[-1,0],[1,0],[0,-1],[0,1]])x("#ffffff",S*y,w*y);x(S=>u.map((w,I)=>[w,I]).reverse().forEach(([[w,I],M])=>{let E=((M+T)*47%360+360)%360,N=M?w:0,F=M===u.length-1?l:w+I+1;S.fillStyle=`hsl(${E},92%,56%)`,S.fillRect(N,0,F-N,c),S.fillStyle=`hsl(${E},100%,78%)`,S.fillRect(N,0,F-N,Math.round(c*.42))}))}else x("#000",1,2),x("#6e4a14",1,1),x(m([[0,"#fff6d0"],[.35,"#f3dc8a"],[.5,"#a87a2a"],[.62,"#f3dc8a"],[1,"#8a5e18"]]));return{w:l*s,h:c*s}}hLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,n,1),r.fillStyle=s.line,r.fillRect(t,e+1,n,1),r.fillStyle=s.lineLo,r.fillRect(t,e+2,n,1)}vLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,1,n),r.fillStyle=s.line,r.fillRect(t+1,e,1,n),r.fillStyle=s.lineLo,r.fillRect(t+2,e,1,n)}glow(t,e,n,s,r){let o=this.ctx;o.save(),o.globalAlpha=.25,this.box(t-1,e-1,n+2,s+2,r),o.globalAlpha=.12,this.box(t-2,e-2,n+4,s+4,r),o.restore(),this.box(t,e,n,s,r)}frame(){let t=this.pal,e=this.ctx,n=2,s=2,r=At-4,o=Ze-4;if(this.frameId==="plain"){this.box(4,4,At-8,Ze-8,t.line),e.fillStyle=t.lineHi;for(let[a,c]of[[4,4],[At-12,4],[4,Ze-5],[At-12,Ze-5]])e.fillRect(a,c,8,1);return}if(this.frameId==="neon"){this.glow(4,4,At-8,Ze-8,t.accent),this.box(7,7,At-14,Ze-14,t.lineLo);return}this.hLine(n,s,r),this.hLine(n,s+o-3,r),this.vLine(n,s,o),this.vLine(n+r-3,s,o),e.fillStyle=t.lineLo,e.fillRect(n+5,s+5,r-10,1),e.fillRect(n+5,s+o-6,r-10,1),e.fillRect(n+5,s+5,1,o-10),e.fillRect(n+r-6,s+5,1,o-10);for(let[a,c,l,h]of[[n,s,1,1],[n+r,s,-1,1],[n,s+o,1,-1],[n+r,s+o,-1,-1]])for(let u=0;u<3;u++){let f=a+l*(3+u*3)-(l<0?6:0),d=c+h*(3+u*3)-(h<0?6:0);e.fillStyle=t.line,e.fillRect(f,d,6,6),e.fillStyle=t.lineHi,e.fillRect(f,d,2,2)}}pillar(t,e,n){let s=this.pal,r=this.ctx;if(this.frameId==="plain"){this.rect(t+5,e,1,n-e,s.line);return}if(this.frameId==="neon"){this.rect(t+4,e,1,n-e,s.accent),this.rect(t+7,e+6,1,n-e-12,s.line);return}for(let o=0;o<3;o++)this.vLine(t+o*4,e+10,n-e-10);r.fillStyle=s.lineLo,r.fillRect(t-3,n-4,17,4),r.fillStyle=s.lineHi,r.fillRect(t-3,n-4,17,1),r.fillStyle=s.lineLo,r.fillRect(t-2,e+8,15,3),r.fillStyle=s.lineHi,r.fillRect(t-2,e+8,15,1),r.fillStyle=s.accentLo,r.beginPath(),r.arc(t+5.5,e+3.5,5,0,Math.PI*2),r.fill(),r.fillStyle=s.accent,r.beginPath(),r.arc(t+5,e+3,4,0,Math.PI*2),r.fill(),r.fillStyle=s.accentHi,r.fillRect(t+3,e+1,2,2)}panel(t,e,n,s,{fill:r=this.pal.panel,border:o=this.pal.ink,shadow:a=!0}={}){a&&this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),o&&this.box(t,e,n,s,o)}plaque(t,e,n,s,{fill:r=this.pal.panel}={}){let o=this.pal;if(this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),this.frameId==="plain"){this.box(t,e,n,s,o.line);return}if(this.frameId==="neon"){this.glow(t,e,n,s,o.accent),this.box(t+3,e+3,n-6,s-6,o.lineLo);return}this.hLine(t,e,n),this.hLine(t,e+s-3,n),this.vLine(t,e,s),this.vLine(t+n-3,e,s),this.box(t+4,e+4,n-8,s-8,o.accentLo)}button(t,e,n,s,r,o,{style:a="normal",disabled:c=!1,font:l=11,color:h}={}){let u=this.ctx,f=this.pal,d=this.pressedId===t&&!c,g=d?1:0,x=c?"#14121a":a==="danger"?ie.red:a==="primary"?f.btnPrimary:f.btn,m=c?f.lineLo:a==="danger"?ie.redHi:f.accent;this.panel(e+g,n+g,s,r,{fill:x,border:m,shadow:!d}),c||(this.frameId==="neon"?(u.save(),u.globalAlpha=.3,this.box(e+g-1,n+g-1,s+2,r+2,m),u.restore()):(u.fillStyle=a==="danger"?"#ff8a7a":f.accentHi,u.fillRect(e+g+1,n+g+1,s-2,1),u.fillRect(e+g+1,n+g+1,1,r-2),u.fillStyle=a==="danger"?"#4a0a0a":f.accentLo,u.fillRect(e+g+1,n+g+r-2,s-2,1),u.fillRect(e+g+s-2,n+g+1,1,r-2)));let p=Cl[l];this.text(o,e+g+s/2,n+g+Math.floor((r-p)/2),{font:l,align:"center",color:h||(c?f.dim:f.ink)}),c||this.buttons.push({id:t,x:e,y:n,w:s,h:r})}hit(t,e){for(let n=this.buttons.length-1;n>=0;n--){let s=this.buttons[n];if(t>=s.x-2&&t<s.x+s.w+2&&e>=s.y-2&&e<s.y+s.h+2)return s.id}return null}bar(t,e,n,s,r,o,a="#000"){this.rect(t,e,n,s,a),this.rect(t+1,e+1,Math.round((n-2)*Math.max(0,Math.min(1,r))),s-2,o),this.box(t,e,n,s,this.pal.dim)}card(t,e,n){this.rect(t+1,e+1,7,10,"#000"),this.rect(t,e,7,10,n?ie.gold:"#2a2418"),n&&this.rect(t+1,e+1,2,2,"#fff3c4")}dim(t=.55){this.rect(0,0,At,Ze,`rgba(0,0,0,${t})`)}vignette(){let t=this.ctx,e=t.createRadialGradient(At/2,Ze/2,Ze*.32,At/2,Ze/2,Ze*.75);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,0.55)"),t.fillStyle=e,t.fillRect(0,0,At,Ze)}qr(t,e,n,s=2){if(!window.qrcode)return 0;let r=this.qrCache.get(t);if(!r)try{let a=window.qrcode(0,"L");a.addData(t),a.make();let c=a.getModuleCount();r={n:c,dark:[]};for(let l=0;l<c;l++)for(let h=0;h<c;h++)a.isDark(l,h)&&r.dark.push([l,h]);this.qrCache.set(t,r)}catch{return 0}let o=(r.n+2)*s;this.rect(e,n,o,o,"#fff"),this.ctx.fillStyle="#000";for(let[a,c]of r.dark)this.ctx.fillRect(e+(c+1)*s,n+(a+1)*s,s,s);return o}lines(t,e,n=9){let s=[],r="";for(let o of t)this.measure(r+o,n)>e&&r?(s.push(r),r=o.trimStart()):r+=o;return r&&s.push(r),s}};var ca=class extends EventTarget{constructor(){super(),this.t=null}use(t){return this.t&&this.t!==t&&this.t.close?.(),this.t=t,t.hub=this,t}emit(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:{type:t,...e}}))}send(t){this.t?.send(t)}leave(){let t=this.t;this.t=null,t?.leave?.()}get online(){return this.t?!!this.t.online:!1}get kind(){return this.t?.kind??null}},Pl="faith-chess-token",la=class{constructor(){this.kind="lan",this.ws=null,this.wantOpen=!1,this.retry=null,this.online=!1}get token(){try{return localStorage.getItem(Pl)}catch{return null}}set token(t){try{t?localStorage.setItem(Pl,t):localStorage.removeItem(Pl)}catch{}}connect(){this.wantOpen=!0,clearTimeout(this.retry);let t=location.protocol==="https:"?"wss":"ws",e=new WebSocket(`${t}://${location.host}`);this.ws=e,e.onopen=()=>{this.online=!0,this.hub?.emit("open"),this.token&&this.send({type:"reconnect",token:this.token})},e.onmessage=n=>{let s;try{s=JSON.parse(n.data)}catch{return}if(s.type==="joined"&&(this.token=s.token),s.type==="error"&&s.code==="nosession"){this.token=null;return}this.hub?.emit(s.type,s)},e.onclose=()=>{this.online=!1,this.hub?.emit("close"),this.wantOpen&&(this.retry=setTimeout(()=>this.connect(),1e3))},e.onerror=()=>{}}send(t){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}leave(){this.send({type:"leave"}),this.token=null}close(){}};var Zy="abcdefgh";function Ft(i,t){return t*8+i}function Ir(i){return i&7}function ji(i){return i>>3}function Dl(i){return Zy[Ir(i)]+(ji(i)+1)}function qe(i){return i==="w"?"b":"w"}var Ff=1;function ha(i,t){return{id:Ff++,type:i,color:t,shield:!1}}function ua(){Ff=1;let i=new Array(64).fill(null),t=["r","n","b","q","k","b","n","r"];for(let e=0;e<8;e++)i[Ft(e,0)]=ha(t[e],"w"),i[Ft(e,1)]=ha("p","w"),i[Ft(e,6)]=ha("p","b"),i[Ft(e,7)]=ha(t[e],"b");return{board:i,turn:"w",castling:{w:{k:!0,q:!0},b:{k:!0,q:!0}},ep:null,halfmove:0,fullmove:1,lastMove:null}}function Qi(i){return{board:i.board.map(t=>t?{...t}:null),turn:i.turn,castling:{w:{...i.castling.w},b:{...i.castling.b}},ep:i.ep,halfmove:i.halfmove,fullmove:i.fullmove,lastMove:i.lastMove?{...i.lastMove}:null}}function Jy(i,t){for(let e=0;e<64;e++){let n=i[e];if(n&&n.type==="k"&&n.color===t)return e}return-1}var Bf=[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]],kf=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],Il=[[1,1],[-1,1],[-1,-1],[1,-1]],Ll=[[1,0],[0,1],[-1,0],[0,-1]];function hi(i,t){return i>=0&&i<8&&t>=0&&t<8}function Ys(i,t,e){let n=Ir(t),s=ji(t),r=e==="w"?s-1:s+1;for(let o of[-1,1]){let a=n+o;if(hi(a,r)){let c=i[Ft(a,r)];if(c&&c.color===e&&c.type==="p")return!0}}for(let[o,a]of Bf){let c=n+o,l=s+a;if(hi(c,l)){let h=i[Ft(c,l)];if(h&&h.color===e&&h.type==="n")return!0}}for(let[o,a]of kf){let c=n+o,l=s+a;if(hi(c,l)){let h=i[Ft(c,l)];if(h&&h.color===e&&h.type==="k")return!0}}for(let[o,a]of Il){let c=n+o,l=s+a;for(;hi(c,l);){let h=i[Ft(c,l)];if(h){if(h.color===e&&(h.type==="b"||h.type==="q"))return!0;break}c+=o,l+=a}}for(let[o,a]of Ll){let c=n+o,l=s+a;for(;hi(c,l);){let h=i[Ft(c,l)];if(h){if(h.color===e&&(h.type==="r"||h.type==="q"))return!0;break}c+=o,l+=a}}return!1}function ts(i,t){let e=Jy(i.board,t);return e<0?!1:Ys(i.board,e,qe(t))}function Ky(i,t){let{board:e}=i,n=e[t];if(!n)return[];let s=[],r=Ir(t),o=ji(t),a=n.color,c=(h,u)=>s.push({from:t,to:h,...u});if(n.type==="p"){let h=a==="w"?1:-1,u=a==="w"?1:6,f=a==="w"?7:0,d=o+h;if(hi(r,d)&&!e[Ft(r,d)]){if(d===f)for(let x of["q","r","b","n"])c(Ft(r,d),{promotion:x});else c(Ft(r,d),{});let g=o+2*h;o===u&&!e[Ft(r,g)]&&c(Ft(r,g),{double:!0})}for(let g of[-1,1]){let x=r+g;if(!hi(x,d))continue;let m=Ft(x,d),p=e[m];if(p&&p.color!==a)if(d===f)for(let y of["q","r","b","n"])c(m,{promotion:y,capture:!0});else c(m,{capture:!0});else if(!p&&i.ep===m){let y=e[Ft(x,o)];y&&y.type==="p"&&y.color!==a&&c(m,{enPassant:!0,capture:!0})}}return s}if(n.type==="n"||n.type==="k"){let h=n.type==="n"?Bf:kf;for(let[u,f]of h){let d=r+u,g=o+f;if(!hi(d,g))continue;let x=Ft(d,g),m=e[x];m?m.color!==a&&c(x,{capture:!0}):c(x,{})}if(n.type==="k"){let u=a==="w"?0:7;if(o===u&&r===4&&!Ys(e,t,qe(a))){let f=i.castling[a];if(f.k){let d=e[Ft(7,u)];d&&d.type==="r"&&d.color===a&&!e[Ft(5,u)]&&!e[Ft(6,u)]&&!Ys(e,Ft(5,u),qe(a))&&!Ys(e,Ft(6,u),qe(a))&&c(Ft(6,u),{castle:"k"})}if(f.q){let d=e[Ft(0,u)];d&&d.type==="r"&&d.color===a&&!e[Ft(1,u)]&&!e[Ft(2,u)]&&!e[Ft(3,u)]&&!Ys(e,Ft(3,u),qe(a))&&!Ys(e,Ft(2,u),qe(a))&&c(Ft(2,u),{castle:"q"})}}}return s}let l=n.type==="b"?Il:n.type==="r"?Ll:[...Il,...Ll];for(let[h,u]of l){let f=r+h,d=o+u;for(;hi(f,d);){let g=Ft(f,d),x=e[g];if(!x)c(g,{});else{x.color!==a&&c(g,{capture:!0});break}f+=h,d+=u}}return s}function $s(i,t){let e=i.turn,n=t!=null?[t]:[...Array(64).keys()],s=[];for(let r of n){let o=i.board[r];if(!(!o||o.color!==e))for(let a of Ky(i,r)){let c=zf(i,a);ts(c,e)||s.push(a)}}return s}function Hf(i,t,e,n){return $s(i,t).find(s=>s.to===e&&(s.promotion??null)===(n??null))||null}function zf(i,t){let e=Qi(i),n=e.board,s=n[t.from],r=s.color,o=n[t.to];if(n[t.to]=s,n[t.from]=null,t.enPassant){let l=Ft(Ir(t.to),ji(t.from));n[l]=null}if(t.promotion&&(s.type=t.promotion),t.castle){let l=ji(t.from);t.castle==="k"?(n[Ft(5,l)]=n[Ft(7,l)],n[Ft(7,l)]=null):(n[Ft(3,l)]=n[Ft(0,l)],n[Ft(0,l)]=null)}s.type==="k"&&(e.castling[r].k=!1,e.castling[r].q=!1);let a=r==="w"?0:7;t.from===Ft(0,a)&&(e.castling[r].q=!1),t.from===Ft(7,a)&&(e.castling[r].k=!1);let c=r==="w"?7:0;return t.to===Ft(0,c)&&(e.castling[qe(r)].q=!1),t.to===Ft(7,c)&&(e.castling[qe(r)].k=!1),e.ep=t.double?Ft(Ir(t.from),(ji(t.from)+ji(t.to))/2):null,e.halfmove=s.type==="p"||o||t.enPassant?0:e.halfmove+1,r==="b"&&e.fullmove++,e.turn=qe(r),e.lastMove={from:t.from,to:t.to,pieceId:s.id,color:r},e.captured=o?{...o}:null,e}function Vf(i,t){return zf(i,t)}function fa(i,t){let e=Qi(i),n=e.board[t];if(!n||n.type==="k")return e;if(e.board[t]=null,n.type==="r"){let s=n.color==="w"?0:7;t===Ft(0,s)&&(e.castling[n.color].q=!1),t===Ft(7,s)&&(e.castling[n.color].k=!1)}return e}function jy(i){let t={w:0,b:0};for(let e of i)if(!(!e||e.type==="k"))if(e.type==="n"||e.type==="b")t[e.color]++;else return!1;return t.w+t.b<=1}function Gf(i){let t=i.turn,e=$s(i),n=ts(i,t);return e.length===0?n?{over:!0,result:"checkmate",winner:qe(t),check:n}:{over:!0,result:"stalemate",winner:null,check:n}:jy(i.board)?{over:!0,result:"insufficient",winner:null,check:n}:i.halfmove>=100?{over:!0,result:"fifty",winner:null,check:n}:{over:!1,result:null,winner:null,check:n}}var Fe={ERASE_COOLDOWN_MS:1e4,SUSPECT_WINDOW_MS:1e4,SUSPECT_LATE_MS:2e4,PICK_TIMEOUT_MS:1e4,RECONNECT_GRACE_MS:3e4,LONG_PRESS_MS:800,FOUL_LIMIT:3,SUSPECT_CHOICES:["p","n","b","r","q"]},Ul={p:1,n:3,b:3,r:5,q:9},dn={p:"\uD3F0",n:"\uB098\uC774\uD2B8",b:"\uBE44\uC20D",r:"\uB8E9",q:"\uD038",k:"\uD0B9"};var Nl=(i,t)=>{for(let e=0;e<i.length;e++)if(i[e]!==t[e])return i[e]<t[e];return!1},Ti=(i,t,e)=>{let n=i.charCodeAt(i.length-1)-44032;return n>=0&&n<11172&&n%28!==0?t:e};function es(i){return String(i||"").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").trim().slice(0,12)}var Ai=class i{constructor(t,{now:e=()=>Date.now(),onChange:n=()=>{}}={}){this.code=t,this.now=e,this.onChange=n,this.players={w:null,b:null},this.round=0,this.resetMatch(),this.status="waiting"}resetMatch(){this.state=ua(),this.erases=[],this.lastEraseAt={w:-1/0,b:-1/0},this.caught={w:0,b:0},this.pending={w:null,b:null},this.lastMovedId={w:null,b:null},this.history=[],this.historyShift=0,this.result=null,this.rematchVotes={w:!1,b:!1},this.lastMoveVisible=null,this.startedAt=null}get isFull(){return!!(this.players.w&&this.players.b)}addPlayer(t,e){let n=this.players.w?this.players.b?null:"b":"w";return n?(this.players[n]={name:es(t)||(n==="w"?"\uBC31":"\uD751"),token:e,connected:!0,disconnectedAt:null,send:null},this.isFull&&this.status==="waiting"&&this.start(),n):null}start(){this.resetMatch(),this.status="playing",this.round++,this.startedAt=this.now(),this.emit("event",{name:"start"}),this.changed()}colorOfToken(t){for(let e of["w","b"])if(this.players[e]&&this.players[e].token===t)return e;return null}setConnected(t,e){let n=this.players[t];n&&(n.connected=e,n.disconnectedAt=e?null:this.now(),this.changed())}handle(t,e){if(!(!e||typeof e!="object"))switch(e.type){case"move":return this.move(t,e.from|0,e.to|0,e.promotion||null);case"erase":return this.erase(t,e.square|0);case"suspect":return this.suspect(t);case"pick":return this.pick(t,String(e.pieceType||""));case"resign":return this.resign(t);case"rematch":return this.rematch(t);default:return}}move(t,e,n,s){if(this.status!=="playing"||this.state.turn!==t)return;let r=Hf(this.state,e,n,s);if(!r)return this.toast(t,"\uB458 \uC218 \uC5C6\uB294 \uC218\uC785\uB2C8\uB2E4.","warn");let o=this.state;this.history.push({state:Qi(o),t:this.now(),by:t,m:{from:r.from,to:r.to,castle:r.castle||null},type:o.board[e].type,lastMovedId:{...this.lastMovedId},lastMoveVisible:this.lastMoveVisible}),this.history.length>400&&(this.history.shift(),this.historyShift++),this.state=Vf(o,r),this.lastMovedId[t]=o.board[e].id,this.lastMoveVisible={from:e,to:n};let a=qe(t),c=ts(this.state,a),l=r.enPassant?"p":o.board[n]?.type||null;this.emit("event",{name:r.capture?"capture":r.castle?"castle":"move",check:c,by:t,at:n,captured:l,promotion:r.promotion||null}),this.checkEnd(),this.changed()}erase(t,e){if(this.status!=="playing")return;let n=this.now(),s=this.state.board[e];if(!s||s.color===t)return;if(s.type==="k")return this.toast(t,"\uD0B9\uC740 \uC9C0\uC6B8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","warn");let r=Fe.ERASE_COOLDOWN_MS-(n-this.lastEraseAt[t]);if(r>0)return this.toast(t,`\uC544\uC9C1 ${Math.ceil(r/1e3)}\uCD08 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`,"warn");this.state=fa(this.state,e),this.lastEraseAt[t]=n,this.erases.push({t:n,by:t,victim:s.color,pieceType:s.type,pieceId:s.id,square:e,moveIndex:this.history.length+this.historyShift,resolved:!1}),this.toast(t,`${Dl(e)}\uC758 ${dn[s.type]}${Ti(dn[s.type],"\uC744","\uB97C")} \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4.`,"secret"),this.checkEnd(),this.changed()}suspect(t){if(this.status!=="playing"||this.pending[t])return;this.emit("event",{name:"suspect",by:t});let e=this.now(),n=-1;for(let o=this.erases.length-1;o>=0;o--){let a=this.erases[o];if(a.victim===t&&!a.resolved){n=o;break}}let s=n>=0?this.erases[n]:null,r=s?e-s.t:1/0;if(s&&r<=Fe.SUSPECT_WINDOW_MS)s.resolved=!0,this.pending[t]={kind:"pick",eraseIndex:n,deadline:e+Fe.PICK_TIMEOUT_MS},this.toast(t,"\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?","info");else if(s&&r<=Fe.SUSPECT_LATE_MS)s.resolved=!0,this.toast(t,"\uD55C \uBC1C \uB2A6\uC5C8\uC2B5\uB2C8\uB2E4\u2026","late");else{s&&(s.resolved=!0);let o=this.findPieceSquare(this.lastMovedId[t]),a=o>=0?this.state.board[o]:null;a&&a.type!=="k"?(this.state=fa(this.state,o),this.toast(t,`\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC758\uC2EC\uC758 \uB300\uAC00\uB85C ${dn[a.type]}${Ti(dn[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"bad"),this.toast(qe(t),`\uC0C1\uB300\uAC00 \uD5DB\uB41C \uC758\uC2EC\uC744 \uD588\uC2B5\uB2C8\uB2E4. \uC0C1\uB300\uC758 ${dn[a.type]}${Ti(dn[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"good"),this.emit("event",{name:"vanish"})):this.toast(t,"\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","bad"),this.checkEnd()}this.changed()}pick(t,e){let n=this.pending[t];if(!n||n.kind!=="pick"||this.status!=="playing"||!Fe.SUSPECT_CHOICES.includes(e))return;let s=this.erases[n.eraseIndex];e===s.pieceType?(this.pending[t]=null,this.penalty(t,s)):(this.pending[t]=null,this.toast(t,`\uC798\uBABB \uC9DA\uC5C8\uC2B5\uB2C8\uB2E4. (${dn[e]}${Ti(dn[e],"\uC774","\uAC00")} \uC544\uB2C8\uC5C8\uC2B5\uB2C8\uB2E4)`,"bad")),this.changed()}static penaltyTarget(t,e,n,s){let r=Ul[n],o=null;for(let a=0;a<64;a++){let c=t[a];if(!c||c.color!==e||c.type==="k")continue;let l=Ul[c.type],h=Math.max(Math.abs((a&7)-(s&7)),Math.abs((a>>3)-(s>>3))),u=[Math.abs(l-r),c.type===n?0:1,-l,h,a];(!o||Nl(u,o.key))&&(o={sq:a,key:u})}return o?o.sq:-1}static movePath(t,e){let n=[t.to],s=t.from&7,r=t.from>>3,o=t.to&7,a=t.to>>3;if("rbq".includes(e)||e==="p"&&Math.abs(a-r)===2){let l=Math.sign(o-s),h=Math.sign(a-r);for(let u=s+l,f=r+h;u!==o||f!==a;u+=l,f+=h)n.push(f*8+u)}if(t.castle){let l=t.castle==="k"?7:0;for(let h=Math.min(s,l)+1;h<Math.max(s,l);h++)n.push(r*8+h)}return[...new Set(n)]}findRewind(t){let e=(t.moveIndex??this.history.length+this.historyShift)-this.historyShift;for(let n=Math.max(0,e);n<this.history.length;n++){let s=this.history[n];if(s.by===t.by&&i.movePath(s.m,s.type).includes(t.square))return n}return-1}rewindTo(t){let e=this.history[t],n=this.history.length-t;this.state=Qi(e.state),this.lastMovedId={...e.lastMovedId},this.lastMoveVisible=e.lastMoveVisible,this.history.length=t;for(let s of this.erases)s.t>e.t&&(s.resolved=!0);for(let s of["w","b"]){let r=this.pending[s];r&&this.erases[r.eraseIndex]?.t>e.t&&(this.pending[s]=null)}return this.emit("event",{name:"rewind",undone:n}),n}static reviveSquare(t,e){let n=qe(e.victim),s=ts(t,n),r=[];for(let o=0;o<64;o++){if(t.board[o]||e.pieceType==="p"&&(!(o>>3)||o>>3===7))continue;let a=Math.abs((o&7)-(e.square&7)),c=Math.abs((o>>3)-(e.square>>3));r.push([Math.max(a,c),a+c,o])}r.sort((o,a)=>Nl(o,a)?-1:Nl(a,o)?1:0);for(let[,,o]of r){let a=Qi(t);if(a.board[o]={id:e.pieceId,type:e.pieceType,color:e.victim,shield:!1},s||!ts(a,n))return o}return-1}revive(t){let e=i.reviveSquare(this.state,t);if(e<0)return-1;let n=Qi(this.state);return n.board[e]={id:t.pieceId,type:t.pieceType,color:t.victim,shield:!1},this.state=n,this.emit("event",{name:"revive",at:e,pieceType:t.pieceType,color:t.victim}),e}penalty(t,e){let n=qe(t),s=++this.caught[n],r=Fe.FOUL_LIMIT,o=dn[e.pieceType],a=this.findRewind(e),c=a>=0?this.rewindTo(a):0,l=c?` \uC2DC\uAC04\uC744 \uB418\uAC10\uC544 ${c}\uC218\uB97C \uBB34\uB974\uACE0,`:"",h=i.penaltyTarget(this.state.board,n,e.pieceType,e.square);if(h<0){this.revive(e),this.toast(t,"\uBC18\uCE59 \uC801\uBC1C! \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC544 \uC2B9\uB9AC\uD569\uB2C8\uB2E4.","good"),this.toast(n,"\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uB9D0\uC774 \uD0B9\uBFD0\uC774\uB77C \uD328\uBC30\uD569\uB2C8\uB2E4.","bad"),this.end({result:"bare",winner:t});return}let u=this.state.board[h],f=dn[u.type];this.emit("event",{name:"penalty",at:h,pieceType:u.type,by:t}),this.state=fa(this.state,h);let d=this.revive(e)>=0;if(this.toast(t,`\uBC18\uCE59 \uC801\uBC1C! (\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${l}${d?` \uC9C0\uC6CC\uC84C\uB358 ${o}${Ti(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uC0C1\uB300 ${f}${Ti(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"good"),this.toast(n,`\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. (\uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${l}${d?` \uC0C1\uB300 ${o}${Ti(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uB0B4 ${Dl(h)} ${f}${Ti(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"bad"),s>=r){this.end({result:"fouls",winner:t});return}this.checkEnd()}resign(t){this.status==="playing"&&(this.end({result:"resign",winner:qe(t)}),this.changed())}rematch(t){if(this.status==="over"){if(this.rematchVotes[t]=!0,this.rematchVotes.w&&this.rematchVotes.b){let{w:e,b:n}=this.players;this.players={w:n,b:e},this.start();return}this.toast(qe(t),"\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uC6D0\uD569\uB2C8\uB2E4.","info"),this.changed()}}tick(){if(this.status==="playing"){let t=this.now();for(let e of["w","b"]){let n=this.pending[e];n&&n.kind==="pick"&&t>n.deadline&&(this.pending[e]=null,this.toast(e,"\uC2DC\uAC04 \uCD08\uACFC. \uAE30\uD68C\uB97C \uB193\uCCE4\uC2B5\uB2C8\uB2E4.","bad"),this.changed());let s=this.players[e];s&&!s.connected&&s.disconnectedAt!=null&&t-s.disconnectedAt>Fe.RECONNECT_GRACE_MS&&(this.end({result:"disconnect",winner:qe(e)}),this.changed())}}}checkEnd(){let t=Gf(this.state);t.over&&this.end({result:t.result,winner:t.winner})}end(t){this.status==="playing"&&(this.status="over",this.result=t,this.pending={w:null,b:null},this.rematchVotes={w:!1,b:!1},this.emit("event",{name:"end"}))}findPieceSquare(t){return t==null?-1:this.state.board.findIndex(e=>e&&e.id===t)}toast(t,e,n="info"){this.emit("toast",{text:e,kind:n},t)}emit(t,e,n=null){for(let s of["w","b"]){if(n&&s!==n)continue;let r=this.players[s];r&&r.send&&r.send({type:t,...e})}}changed(){this.onChange(this)}view(t){let e=this.state,n=[];for(let o=0;o<64;o++){let a=e.board[o];a&&n.push({sq:o,id:a.id,type:a.type,color:a.color,shield:!!a.shield})}let s=this.pending[t],r=this.now();return{type:"state",code:this.code,round:this.round,you:t,status:this.status,names:{w:this.players.w?.name??null,b:this.players.b?.name??null},connected:{w:!!this.players.w?.connected,b:!!this.players.b?.connected},turn:e.turn,pieces:n,lastMove:this.lastMoveVisible,castling:{w:{...e.castling.w},b:{...e.castling.b}},ep:e.ep,check:this.status==="playing"?ts(e,e.turn):!1,caught:{...this.caught},eraseReadyAt:this.lastEraseAt[t]+Fe.ERASE_COOLDOWN_MS,serverNow:r,pending:s&&s.kind==="pick"?{kind:"pick",deadline:s.deadline,choices:Fe.SUSPECT_CHOICES}:null,result:this.result,rematchVotes:{...this.rematchVotes}}}};var Wf={p:1,n:3,b:3,r:5,q:9,k:0},Lr=(i,t)=>i+Math.random()*(t-i),da=i=>i[Math.floor(Math.random()*i.length)],Dr=class{constructor(){this.kind="bot",this.online=!0,this.timer=null}start(t){this.game=new Ai("BOT",{onChange:e=>this.broadcast(e)}),this.game.addPlayer(t,"me"),this.game.players.w.send=e=>this.hub.emit(e.type,e),this.hub.emit("joined",{code:"BOT",color:"w"}),this.game.addPlayer("\uC5F0\uC2B5 \uBD07","bot"),this.bot={nextErase:performance.now()+Lr(9e3,16e3),plan:null,seenErases:0},this.timer=setInterval(()=>this.tick(),200)}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}get botColor(){return this.game.colorOfToken("bot")}get myColor(){return this.game.colorOfToken("me")}send(t){let e=this.myColor;e&&(this.game.handle(e,t),t.type==="rematch"&&this.game.status==="over"&&setTimeout(()=>this.game.handle(this.botColor,{type:"rematch"}),900),this.game.status==="playing"&&this.game.round>(this.lastRound||0)&&(this.lastRound=this.game.round,this.game.players[this.myColor].send=n=>this.hub.emit(n.type,n),this.game.players[this.botColor].send=null,this.bot.nextErase=performance.now()+Lr(9e3,16e3),this.broadcast(this.game)))}tick(){let t=this.game,e=this.botColor,n=performance.now();if(t.tick(),t.status!=="playing")return;let s=t.pending[e];if(s?.kind==="pick"){t.handle(e,{type:"pick",pieceType:Math.random()<.65?t.erases[s.eraseIndex].pieceType:da(Fe.SUSPECT_CHOICES)});return}let r=t.erases.filter(o=>o.victim===e).length;if(r>this.bot.seenErases&&(this.bot.seenErases=r,Math.random()<.55&&(this.bot.suspectAt=n+Lr(2500,8e3))),this.bot.suspectAt&&n>this.bot.suspectAt){this.bot.suspectAt=0,t.handle(e,{type:"suspect"});return}if(n>this.bot.nextErase){this.bot.nextErase=n+Lr(16e3,32e3);let o=t.state.board.map((c,l)=>c&&c.color!==e&&c.type!=="k"?l:-1).filter(c=>c>=0),a=o.filter(c=>t.state.board[c].type==="p");o.length&&t.handle(e,{type:"erase",square:a.length&&Math.random()<.6?da(a):da(o)});return}if(t.state.turn===e&&(this.bot.plan||(this.bot.plan=n+Lr(700,1600)),n>this.bot.plan)){this.bot.plan=null;let o=$s(t.state);if(!o.length)return;let a=o.filter(l=>l.capture).sort((l,h)=>(Wf[t.state.board[h.to]?.type]||1)-(Wf[t.state.board[l.to]?.type]||1)),c=a.length&&Math.random()<.8?a[0]:da(o);t.handle(e,{type:"move",from:c.from,to:c.to,promotion:c.promotion?"q":null})}}leave(){clearInterval(this.timer),this.timer=null}close(){this.leave()}};var qf="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Xf="faith-chess-room-token",Yf=i=>"fc-"+i.toLowerCase(),Qy=i=>new TextEncoder().encode(JSON.stringify(i)).length;function tv(){try{let i=localStorage.getItem(Xf);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(Xf,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function ev(i){let{type:t,pieces:e,...n}=i;return{...n,pieces:e.map(s=>`${s.id}.${s.sq}.${s.type}${s.color}${s.shield?1:0}`).join(" ")}}function nv(i){let t=String(i.pieces||"").split(" ").filter(Boolean).map(e=>{let[n,s,r]=e.split(".");return{id:+n,sq:+s,type:r[0],color:r[1],shield:r[2]==="1"}});return{...i,type:"state",pieces:t,eraseReadyAt:i.eraseReadyAt??-1/0}}var pa=class i{static async open(){if(!window.claude?.use)return null;let t=null;try{t=await window.claude.use("room")}catch{t=null}return t?new i(t):null}constructor(t){this.kind="room",this.room=t,this.connected=t.connected(),this.role=null,this.onLobby=null,t.onConnection(e=>{this.connected=e,this.hub?.emit(e?"open":"close")},()=>{this.connected=!1}),t.onPeers(()=>this.onLobby?.(this.openRooms()),()=>{})}get online(){return this.role==="guest"?this.connected&&this.hostOnline:this.connected}openRooms(){return this.room.peers().filter(t=>!t.sameTab&&typeof t.presence?.open=="string").map(t=>({code:t.presence.open,name:String(t.presence.name||"?"),mine:t.isMe}))}async create(t){this.endSession();let e="";for(let s=0;s<4;s++)e+=qf[Math.floor(Math.random()*qf.length)];let n=await this.room.join(Yf(e));Object.assign(this,{role:"host",code:e,name:es(t)||"\uD638\uC2A4\uD2B8",r:n,q:[],qs:0,st:null,lastAct:0,guestPeer:null,guestTk:null}),this.game=new Ai(e,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.unsub=n.onPeers(s=>this.hostPeers(s),()=>{}),this.tickT=setInterval(()=>this.game?.tick(),250),this.room.presence({open:e,name:this.name}).catch(()=>{}),this.hub.emit("joined",{code:e,color:"w"}),this.broadcast(this.game),this.pushHost()}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostOut(t){t.type==="state"?this.st=t:(this.q.push({s:++this.qs,t:Date.now(),m:t}),this.q.length>6&&this.q.shift()),this.schedulePush()}schedulePush(){this.pushT||(this.pushT=setTimeout(()=>{this.pushT=null,this.pushHost()},30))}pushHost(){if(!this.r||this.role!=="host")return;let t={r:"host",code:this.code,name:this.name,gtk:this.guestTk,ack:this.lastAct,hn:Date.now(),st:this.st?ev(this.st):null,q:this.q};for(;Qy(t)>3900&&t.q.length;)t.q=t.q.slice(1);this.r.presence(t).catch(()=>{})}hostPeers(t){if(this.role!=="host"||!this.game)return;let e=t.peers.filter(s=>!s.sameTab&&s.presence?.r==="guest"&&s.presence.code===this.code),n=this.guestPeer?e.find(s=>s.peer===this.guestPeer):null;if(!n){let s=this.guestTk?e.find(r=>r.presence.tk===this.guestTk):e[0];if(s){let r=!this.guestTk;this.guestPeer=s.peer,this.guestTk=String(s.presence.tk||s.peer),this.lastAct=0,r&&(this.game.addPlayer(s.presence.name,this.guestTk),this.room.presence({open:null}).catch(()=>{}));let o=this.game.colorOfToken(this.guestTk);this.game.players[o].send=a=>this.hostOut(a),this.game.setConnected(o,!0),n=s}else if(this.guestPeer){this.guestPeer=null;let r=this.game.colorOfToken(this.guestTk);r&&this.game.setConnected(r,!1)}}if(n){let s=this.game.colorOfToken(this.guestTk),r=Array.isArray(n.presence.acts)?n.presence.acts:[];for(let o of r)o&&o.s>this.lastAct&&(this.lastAct=o.s,this.game.handle(s,o.m))}this.schedulePush()}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await this.room.join(Yf(t));Object.assign(this,{role:"guest",code:t,name:es(e)||"\uC190\uB2D8",r:n,tk:tv(),acts:[],as:0,lastQ:null,lastHn:0,hostSeen:!1,hostOnline:!1,joinedOk:!1}),n.presence({r:"guest",code:t,name:this.name,tk:this.tk,acts:[]}).catch(()=>{}),this.unsub=n.onPeers(s=>this.guestPeers(s),()=>{}),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{text:"\uADF8 \uCF54\uB4DC\uC758 \uBC29\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."}),this.endSession())},8e3)}guestPeers(t){if(this.role!=="guest")return;let e=t.peers.find(r=>!r.sameTab&&r.presence?.r==="host"&&r.presence.code===this.code);if(!e){this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close"));return}let n=e.presence;if(this.hostSeen=!0,this.hostOnline||(this.hostOnline=!0,this.hub.emit("open")),n.gtk&&n.gtk!==this.tk){this.joinedOk||(this.hub.emit("error",{text:"\uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC785\uB2C8\uB2E4."}),this.endSession());return}if(!n.gtk)return;this.joinedOk||(this.joinedOk=!0,clearTimeout(this.joinTimer),this.hub.emit("joined",{code:this.code,color:n.st?.you||"b"}));let s=Array.isArray(n.q)?n.q:[];if(this.lastQ===null){this.lastQ=0;for(let r of s)n.hn-r.t>3e3&&(this.lastQ=Math.max(this.lastQ,r.s))}for(let r of s)r.s>this.lastQ&&(this.lastQ=r.s,r.m?.type&&this.hub.emit(r.m.type,r.m));if(n.st&&n.hn!==this.lastHn&&(this.lastHn=n.hn,this.hub.emit("state",nv(n.st))),typeof n.ack=="number"){let r=this.acts.length;this.acts=this.acts.filter(o=>o.s>n.ack),this.acts.length!==r&&this.pushGuest()}}pushGuest(){this.r?.presence({acts:this.acts}).catch(()=>{})}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&(this.acts.push({s:++this.as,m:t}),this.acts.length>8&&this.acts.shift(),this.pushGuest())}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"}),this.role==="host"&&this.pushHost();let t=this.r;this.detach(),setTimeout(()=>t?.leave().catch(()=>{}),600)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.pushT),this.tickT=this.joinTimer=this.pushT=null,this.unsub?.(),this.unsub=null,this.role==="host"&&this.room.presence({open:null}).catch(()=>{}),this.r=null,this.game=null,this.role=null,this.hostOnline=!1}endSession(){let t=this.r;this.detach(),t?.leave().catch(()=>{})}};var $f="0123456789",iv=5e3,Zf="faith-chess-peer-token",Jf=i=>"faith-chess-"+i.toLowerCase();function sv(){try{let i=localStorage.getItem(Zf);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(Zf,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function Kf(){let i={debug:0},t=new URLSearchParams(location.search).get("peer");if(t){let[e,n]=t.split(":");Object.assign(i,{host:e,port:+n||9e3,path:"/",secure:!1,config:{iceServers:[]}})}return i}var jf=i=>new Promise((t,e)=>{let n=i?new window.Peer(i,Kf()):new window.Peer(Kf()),s=o=>{n.off("open",r);try{n.destroy()}catch{}e(o)},r=()=>{n.off("error",s),t(n)};n.once("open",r),n.once("error",s)}),Ur=class{static available(){return typeof window.Peer=="function"}constructor(){this.kind="peer",this.role=null,this.hostOnline=!1}get online(){return this.role==="guest"?this.hostOnline:this.role==="host"?!!this.peer&&(!this.peer.disconnected||!!this.conn?.open):!0}async create(t){this.endSession();let e=null,n="";for(let s=0;s<5&&!e;s++){n="";for(let r=0;r<4;r++)n+=$f[Math.floor(Math.random()*$f.length)];try{e=await jf(Jf(n))}catch(r){if(r?.type!=="unavailable-id")throw r}}if(!e)throw new Error("no free code");Object.assign(this,{role:"host",code:n,name:es(t)||"\uD638\uC2A4\uD2B8",peer:e,conn:null,guestTk:null}),this.game=new Ai(n,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.tickT=setInterval(()=>this.game?.tick(),250),e.on("connection",s=>this.hostConn(s)),e.on("disconnected",()=>{this.hub?.emit("close"),this.retryT=setTimeout(()=>this.reconnectBroker(),1e3)}),e.on("open",()=>this.hub?.emit("open")),e.on("error",s=>console.warn("[peer]",s?.type,s)),this.hub.emit("joined",{code:n,color:"w"}),this.broadcast(this.game)}reconnectBroker(){if(!(this.role!=="host"||!this.peer||this.peer.destroyed||!this.peer.disconnected)){try{this.peer.reconnect()}catch{}this.retryT=setTimeout(()=>this.reconnectBroker(),3e3)}}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostConn(t){t.on("data",e=>{if(!(this.role!=="host"||!this.game||!e||typeof e!="object")){if(e.type==="hello"){let n=String(e.tk||t.peer).slice(0,40);if(this.guestTk?n!==this.guestTk:this.ringConn&&this.ringConn!==t){t.send({type:"error",code:"busy",text:"\uD1B5\uD654 \uC911\uC785\uB2C8\uB2E4. \uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC774\uC5D0\uC694."}),setTimeout(()=>t.close(),300);return}if(this.guestTk){this.attachGuest(t,n);return}if(this.ringConn===t)return;this.ringConn=t,this.hub.emit("ring",{}),this.pickUp=()=>{clearTimeout(this.ringT),this.ringT=null,this.pickUp=null,this.ringConn===t&&(this.ringConn=null,!(this.role!=="host"||!this.game||!t.open)&&(this.guestTk=n,this.game.addPlayer(e.name,n),this.attachGuest(t,n)))},this.ringT=setTimeout(()=>this.pickUp?.(),iv);return}t===this.conn&&e.type==="act"&&e.m&&typeof e.m=="object"&&this.game.handle(this.game.colorOfToken(this.guestTk),e.m)}}),t.on("close",()=>{if(t===this.ringConn){this.ringConn=null,this.pickUp=null,clearTimeout(this.ringT),this.hub?.emit("ringstop",{});return}if(t!==this.conn||!this.game)return;this.conn=null;let e=this.game.colorOfToken(this.guestTk);e&&this.game.setConnected(e,!1)}),t.on("error",()=>{})}answer(){this.pickUp?.()}attachGuest(t,e){if(this.conn&&this.conn!==t)try{this.conn.close()}catch{}this.conn=t;let n=this.game.colorOfToken(e);t.send({type:"joined",code:this.code,color:n}),this.game.players[n].send=s=>{this.conn?.open&&this.conn.send(s)},this.game.setConnected(n,!0),this.broadcast(this.game)}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await jf(null);Object.assign(this,{role:"guest",code:t,name:es(e)||"\uC190\uB2D8",peer:n,tk:sv(),joinedOk:!1,conn:null,hostOnline:!1}),n.on("error",s=>{s?.type==="peer-unavailable"&&this.role==="guest"&&(this.joinedOk?this.scheduleRedial():(this.hub.emit("error",{code:"nonumber",text:"\uC9C0\uAE08 \uAC70\uC2E0 \uBC88\uD638\uB294 \uC5C6\uB294 \uBC88\uD638\uC785\uB2C8\uB2E4."}),this.endSession()))}),n.on("disconnected",()=>{this.role==="guest"&&setTimeout(()=>{try{this.peer?.disconnected&&!this.peer.destroyed&&this.peer.reconnect()}catch{}},1e3)}),this.dial(),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{code:"noanswer",text:"\uC0C1\uB300\uAC00 \uC804\uD654\uB97C \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694."}),this.endSession())},2e4)}dial(){if(this.role!=="guest"||!this.peer||this.peer.destroyed)return;let t=this.peer.connect(Jf(this.code),{reliable:!0,serialization:"json"});this.conn=t,t.on("open",()=>{t===this.conn&&(this.hostOnline=!0,this.hub.emit("open"),t.send({type:"hello",name:this.name,tk:this.tk}))}),t.on("data",e=>{if(!(t!==this.conn||!e?.type)){if(e.type==="joined"&&(this.joinedOk=!0,clearTimeout(this.joinTimer)),e.type==="error"&&!this.joinedOk){this.hub.emit("error",e),this.endSession();return}this.hub.emit(e.type,e)}}),t.on("close",()=>{t===this.conn&&(this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close")),this.scheduleRedial())}),t.on("error",()=>{})}scheduleRedial(){this.role!=="guest"||!this.joinedOk||this.redialT||(this.redialT=setTimeout(()=>{this.redialT=null,this.role==="guest"&&!this.hostOnline&&this.dial()},2e3))}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&this.conn?.open&&this.conn.send({type:"act",m:t})}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"});let t=this.detach();setTimeout(()=>{try{t?.destroy()}catch{}},500)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.retryT),clearTimeout(this.redialT),clearTimeout(this.ringT),this.tickT=this.joinTimer=this.retryT=this.redialT=this.ringT=null,this.ringConn=null,this.pickUp=null;let t=this.peer;return this.peer=null,this.conn=null,this.game=null,this.role=null,this.hostOnline=!1,t}endSession(){let t=this.detach();try{t?.destroy()}catch{}}};var $n=(i,t={})=>new xn({color:i,flatShading:!0,...t}),Zs=(i,t={})=>new an({color:i,flatShading:!0,shininess:90,specular:11575424,...t});function Te(i,t,e,n=0,s=0,r=0){let o=new Bt(t,e);return o.position.set(n,s,r),i.add(o),o}var Be={HOLE_R:.8,HOLE_SIZE:.165,STOP:-32,FIRST:28,STEP:30,PLATE:1.1,WHEEL:1.17},Js=i=>Be.FIRST+Be.STEP*i,ma=i=>Js(i)-Be.STOP,ga=i=>(i+1)%10,Qf=i=>(Number(i)+9)%10,td=i=>(i+540)%360-180,Ri=Math.PI/180,ed=i=>i*i*(3-2*i),rv=11740714,ov=8262936,xa=14264378;var sd="#2a1414";function nd(i,t,e=0,n=0,s=0){let r=new qi;for(let o=0;o<=t;o++){let a=s+o/t*Math.PI*2,c=e+Math.cos(a)*i,l=n+Math.sin(a)*i;o===0?r.moveTo(c,l):r.lineTo(c,l)}return r}var rd={kind:"rotary",label:"\uB2E4\uC774\uC5BC",body:rv,bodyDark:ov,width:3.3,profile:[[-1.7,0],[2.15,0],[2.2,.28],[-.05,1.95],[-1.35,1.95],[-1.75,1.3]],cam:{dist:9.4,up:1.5,side:1.5,look:.75}},_a=class{constructor(t){this.cfg=t,this.kind=t.kind,this.scene=new On,this.camera=new Pe(30,1,.1,60),this.clear=new wt,this.bg=new wt(2364460),this.ray=new Fs,this.plane=new In,this.lift=0,this.liftTo=0,this.ringT=0,this.t=0,this.onDigit=()=>{},this.onSound=()=>{},this.cardKey="",this.enabled=!0,this.build()}build(){let t=this.scene,e=this.cfg,n=e.width;t.add(new Wo(16773340,3153962,.75));let s=new en(16777215,1.15);s.position.set(-3,7,5),t.add(s);let r=new en(10475775,.35);r.position.set(4,3,-4),t.add(r),Te(t,new he(14,14,.2,12),$n(3809840),0,-.1,0),Te(t,new he(n*.94,n*.97,.06,10),$n(6965806),0,.03,.15);let o=new ne;t.add(o),this.root=o;let a=new $e;e.profile.forEach(([S,w],I)=>I?a.lineTo(S,w):a.moveTo(S,w));let c=new Fn(a,{depth:n,bevelEnabled:!0,bevelThickness:.16,bevelSize:.16,bevelSegments:1,curveSegments:1});c.rotateY(-Math.PI/2),c.translate(n/2,0,0),this.bodyMat=$n(e.body),Te(o,c,this.bodyMat);let l=e.profile.map(S=>S[0]),h=Math.min(...l),u=Math.max(...l);for(let S of[-(n/2-.25),n/2-.25])for(let w of[h+.4,u-.4])Te(o,new he(.16,.2,.08,6),$n(1706510),S,.02,w);let f=new j(...e.profile[2]),d=new j(...e.profile[3]),g=f.clone().add(d).multiplyScalar(.5),x=d.clone().sub(f);this.faceLen=x.length(),x.normalize();let m=new P(0,x.y,x.x),p=new P(0,-x.x,x.y),y=new ne;y.position.set(0,g.y,g.x).addScaledVector(p,.17),y.quaternion.setFromRotationMatrix(new ve().makeBasis(new P(1,0,0),m,p)),o.add(y),this.face=y,this.faceN=p,this.faceUp=m,this.buildFace(y);for(let S of[-1.05,1.05])Te(o,new ee(.34,.34,.55),$n(this.cfg.bodyDark),S,2.2,-.72),Te(o,new ee(.4,.08,.6),$n(1706510),S,2.36,-.72);let _=new ne;o.add(_),this.handset=_,this.handsetRest=new P(0,2.62,-.72),_.position.copy(this.handsetRest),Te(_,new ee(2.2,.28,.42),this.bodyMat,0,.16,0);for(let S of[-1,1]){let w=Te(_,new ee(.5,.28,.42),this.bodyMat,S*1.12,.06,0);w.rotation.z=S*.32,Te(_,new he(.44,.36,.34,8),this.bodyMat,S*1.38,-.12,0),Te(_,new he(.3,.3,.02,8),$n(1706510),S*1.38,-.3,0)}this.cordMat=$n(this.cfg.cord??6164500),this.cord=Te(o,new ce,this.cordMat),this.rebuildCord();let v=y.position.clone(),T=this.cfg.cam;this.camera.position.copy(v).addScaledVector(p,T.dist).addScaledVector(m,T.up).add(new P(T.side,0,0)),this.lookAt=v.clone().addScaledVector(m,T.look).add(new P(-.15,0,0)),this.camera.up.set(0,1,0),this.camera.lookAt(this.lookAt),this.hoverOff=new P(.35,.75,.9),this.hover=new P,this.nearCam=this.camera.position.clone().lerp(this.lookAt,.5).add(new P(0,-.35,0))}rebuildCord(){let t=new P(-1.38,-.2,0).applyMatrix4(this.handset.matrix.compose(this.handset.position,this.handset.quaternion,this.handset.scale)),e=new P(-this.cfg.width/2-.21,.55,-.4),n=new vr(e,new P(e.x-.84,.2,.6),new P(e.x-.74,.5,-.9),t),s=150,r=[],o=new P,a=new P,c=new P;for(let l=0;l<=s;l++){let h=l/s,u=n.getPoint(h);n.getTangent(h,o),a.crossVectors(o,new P(0,1,0)),a.lengthSq()<1e-4&&a.set(1,0,0),a.normalize(),c.crossVectors(a,o).normalize();let f=Math.PI*2*22*h,d=.075*Math.min(1,h*12,(1-h)*12);r.push(u.addScaledVector(a,Math.cos(f)*d).addScaledVector(c,Math.sin(f)*d))}this.cord.geometry.dispose(),this.cord.geometry=new Go(new yr(r),s*2,.032,4,!1)}faceLocal(t,e,n){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let s=new j((e-t.x)/t.w*2-1,-((n-t.y)/t.h*2-1));this.ray.setFromCamera(s,this.camera);let r=new P;this.face.getWorldPosition(r),this.plane.setFromNormalAndCoplanarPoint(this.faceN.clone(),r);let o=new P;return this.ray.ray.intersectPlane(this.plane,o)?this.face.worldToLocal(o):null}faceToScreen(t,e,n,s=.1){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let r=this.face.localToWorld(new P(e,n,s)).project(this.camera);return{x:t.x+(r.x+1)/2*t.w,y:t.y+(1-r.y)/2*t.h}}ring(t=1.6){this.ringT=Math.max(this.ringT,t)}setLift(t){this.liftTo=t}update(t){this.t+=t,this.updateFace(t),this.ringT=Math.max(0,this.ringT-t);let n=(this.ringT>0?Math.min(1,this.ringT*4):0)*(Math.floor(this.t*2.5)%2===0?1:.15);this.root.rotation.z=Math.sin(this.t*2*Math.PI*23)*.022*n,this.root.position.x=Math.sin(this.t*2*Math.PI*17)*.025*n;let s=this.lift;this.lift+=(this.liftTo-this.lift)*Math.min(1,t*7),Math.abs(this.lift-this.liftTo)<.002&&(this.lift=this.liftTo);let r=this.handset,o=ed(Math.min(1,this.lift/.3)),a=ed(Math.max(0,Math.min(1,(this.lift-.3)/.7)));this.hover.copy(this.handsetRest).add(this.hoverOff),r.position.copy(this.handsetRest).lerp(this.hover,o).lerp(this.nearCam,a),r.position.y+=Math.abs(Math.sin(this.t*2*Math.PI*11))*.07*n+Math.sin(this.t*2.1)*.05*o*(1-a),r.rotation.set(-.55*o-.5*a,.2*o-.2*a,.22*o-.22*a+Math.sin(this.t*2*Math.PI*23)*.03*n),(s!==this.lift||n>0)&&this.rebuildCord()}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,c=Math.round(e.y*r),l=Math.round((e.y+e.h)*r)-c,h=n.h-c-l,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,l),t.setScissor(o,h,a,l),t.setClearColor(this.bg,1),t.clear(!0,!0,!1),this.camera.aspect=a/l,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}},Fl=class extends _a{constructor(){super(rd),this.phi=0,this.mode="idle",this.k=-1,this.hold=0,this.queue=[],this.pendingDigit=null,this.drag=null,this.stopHit=!1,this.lastStep=0}buildFace(t){this.dial=t;let e=this.plateTexture();Te(t,new Mr(Be.PLATE,20),new xn({map:e}),0,0,.005),Te(t,new wn(Be.WHEEL+.04,.06,4,20),Zs(xa),0,0,.02);let n=new $e;for(let o=0;o<=24;o++){let a=o/24*Math.PI*2,c=Math.cos(a)*Be.WHEEL,l=Math.sin(a)*Be.WHEEL;o?n.lineTo(c,l):n.moveTo(c,l)}n.holes.push(nd(.5,12));for(let o=0;o<10;o++)n.holes.push(nd(Be.HOLE_SIZE,8,Math.cos(Js(o)*Ri)*Be.HOLE_R,Math.sin(Js(o)*Ri)*Be.HOLE_R,Math.PI/8));let s=new Fn(n,{depth:.07,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:1,curveSegments:1});this.wheel=Te(t,s,Zs(1972252,{shininess:30,specular:3813944}),0,0,.03),this.cardCanvas=document.createElement("canvas"),this.cardCanvas.width=this.cardCanvas.height=128,this.cardTex=new qn(this.cardCanvas),this.cardTex.magFilter=Ee,this.cardTex.minFilter=Xe,this.cardTex.colorSpace=pe,Te(t,new Mr(.47,14),new me({map:this.cardTex}),0,0,.13),Te(t,new wn(.48,.045,4,14),Zs(xa),0,0,.13),this.setCard("\uBBFF\uC74C\uC758 \uCCB4\uC2A4","\xB7\xB7\xB7\xB7");let r=new ne;r.rotation.z=Be.STOP*Ri,t.add(r),Te(r,new ee(.5,.11,.09),Zs(xa),Be.HOLE_R+.22,0,.16),Te(r,new ee(.1,.1,.2),Zs(xa),Be.HOLE_R+.44,0,.09)}plateTexture(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1c0c10",e.fillRect(0,0,256,256),e.fillStyle="#f1e6c8",e.beginPath(),e.arc(128,128,126,0,Math.PI*2),e.fill(),e.strokeStyle="#b89a5a",e.lineWidth=3,e.beginPath(),e.arc(128,128,118,0,Math.PI*2),e.stroke(),e.font="bold 34px Galmuri11, sans-serif",e.textAlign="center",e.textBaseline="middle";let n=Be.HOLE_R/Be.PLATE*128;for(let r=0;r<10;r++){let o=Js(r)*Ri,a=128+Math.cos(o)*n,c=128-Math.sin(o)*n;e.fillStyle="#c22a2a",e.beginPath(),e.arc(a,c,21,0,Math.PI*2),e.fill(),e.fillStyle="#fff6e0",e.fillText(String(ga(r)),a,c+1)}let s=new qn(t);return s.magFilter=Ee,s.colorSpace=pe,s}setCard(t,e){let n=t+"|"+e;if(n===this.cardKey)return;this.cardKey=n;let s=this.cardCanvas.getContext("2d");s.fillStyle="#fbf4e2",s.fillRect(0,0,128,128),s.fillStyle="#c22a2a",s.fillRect(0,40,128,3),s.fillStyle=sd,s.textAlign="center",s.textBaseline="middle",s.font="15px Galmuri11, sans-serif",s.fillText(t,64,26),s.font="bold 30px Galmuri11, sans-serif",s.fillText(e,64,74),this.cardTex.needsUpdate=!0}local(t,e,n){let s=this.faceLocal(t,e,n);return s&&{r:Math.hypot(s.x,s.y),a:Math.atan2(s.y,s.x)/Ri}}holeAt(t){if(!t||Math.abs(t.r-Be.HOLE_R)>.32)return-1;for(let e=0;e<10;e++)if(Math.abs(td(t.a-Js(e)))<15)return e;return-1}project(t,e,n){return this.faceToScreen(t,Math.cos(n*Ri)*e,Math.sin(n*Ri)*e)}holeScreen(t,e){return this.project(t,Be.HOLE_R,Js(Qf(e)))}digitScreen(t,e){return this.holeScreen(t,e)}get busy(){return this.mode!=="idle"||this.queue.length>0}pointerDown(t,e,n,s){if(this.busy||!this.enabled)return!1;let r=this.local(t,e,n),o=this.holeAt(r);return o<0?!1:(this.mode="drag",this.k=o,this.phi=0,this.stopHit=!1,this.lastStep=0,this.drag={a:r.a,t0:s,moved:0},!0)}pointerMove(t,e,n){if(this.mode!=="drag")return;let s=this.local(t,e,n);if(!s||s.r<.15)return;let r=td(s.a-this.drag.a);this.drag.a=s.a,this.drag.moved+=Math.abs(r),this.setPhi(Math.max(0,Math.min(ma(this.k),this.phi-r)))}pointerUp(t){if(this.mode!=="drag")return;let e=this.k,n=t-this.drag.t0<380&&this.drag.moved<10;if(this.drag=null,n){this.mode="idle",this.phi=0,this.queue.push(ga(e));return}this.release(this.phi>=ma(e)-14?ga(e):null)}cancel(){this.mode==="drag"&&(this.drag=null,this.release(null))}autoDial(t){for(let e of String(t))/\d/.test(e)&&this.queue.push(Number(e))}abort(){this.queue=[],(this.mode==="auto"||this.mode==="drag")&&(this.drag=null,this.release(null)),this.pendingDigit=null}setPhi(t){let e=Math.floor(t/Be.STEP);e>this.lastStep&&this.onSound("tick"),this.lastStep=e,!this.stopHit&&this.k>=0&&t>=ma(this.k)-.5&&(this.stopHit=!0,this.onSound("stop")),this.phi=t}release(t){this.mode="return",this.pendingDigit=t,this.lastStep=Math.floor(this.phi/Be.STEP)}updateFace(t){if(this.mode==="idle"&&this.queue.length){let e=this.queue.shift();this.mode="auto",this.k=Qf(e),this.phi=0,this.stopHit=!1,this.lastStep=0}if(this.mode==="auto"){let e=ma(this.k);this.phi<e?this.setPhi(Math.min(e,this.phi+560*t)):(this.hold+=t)>.12&&(this.hold=0,this.release(ga(this.k)))}else if(this.mode==="return"){let e=Math.max(0,this.phi-330*t),n=Math.ceil(e/Be.STEP);if(this.pendingDigit!==null&&n<this.lastStep&&this.onSound("pulse"),this.lastStep=Math.min(this.lastStep,n),this.phi=e,e<=0){this.mode="idle",this.k=-1;let s=this.pendingDigit;this.pendingDigit=null,s!==null&&this.onDigit(s)}}this.wheel.rotation.z=-this.phi*Ri}},Ol=["1","2","3","4","5","6","7","8","9","*","0","#"],id={2:"ABC",3:"DEF",4:"GHI",5:"JKL",6:"MNO",7:"PQRS",8:"TUV",9:"WXYZ",0:"OPER"},od={kind:"push",label:"\uBC84\uD2BC\uC2DD",body:3108723,bodyDark:1786952,cord:1786952,width:3.3,profile:[[-1.7,0],[2.15,0],[2.2,.28],[-.05,1.95],[-1.35,1.95],[-1.75,1.3]],cam:{dist:9.6,up:1.25,side:1.4,look:.55},key:.43,gap:.12,depth:.12,keyColor:15853256,bezel:1972764,card:{w:1.5,h:.42},font:"bold 38px Galmuri11, sans-serif",small:!0,ink:"#2a1414",sub:"#b3262a",keyBg:"#f1e6c8"},ad={kind:"big",label:"\uD070 \uAE00\uC528",body:15327695,bodyDark:12103062,cord:9076848,width:3.7,profile:[[-2.1,0],[2.6,0],[2.65,.25],[-.45,1.95],[-1.75,1.95],[-2.15,1.3]],cam:{dist:11.6,up:1.2,side:1.5,look:.5},key:.62,gap:.1,depth:.16,keyColor:16777215,bezel:2502714,card:{w:2.06,h:.5,lcd:!0},font:"bold 56px Galmuri11, sans-serif",small:!1,ink:"#111111",sub:"#c22a2a",keyBg:"#ffffff"},ya=class extends _a{constructor(t){super(t),this.queue=[],this.auto=null,this.pressed=null,this.labelsOk=!1}buildFace(t){let e=this.cfg,n=e.key+e.gap,s=3*e.key+2*e.gap,r=4*e.key+3*e.gap,a=this.faceLen/2-.14-e.card.h/2,c=a-e.card.h/2-.16;this.keys=Ol.map((x,m)=>{let p=Math.floor(m/3),_=(m%3-1)*n,v=c-e.key/2-p*n;return{label:x,digit:/\d/.test(x)?Number(x):null,x:_,y:v,down:0,target:0}});let l=c-r/2;Te(t,new ee(s+.24,r+.24,.05),$n(e.bezel),0,l,0);let h=e.key*.2,u=e.key/2,f=new $e;f.moveTo(-u+h,-u),f.lineTo(u-h,-u),f.lineTo(u,-u+h),f.lineTo(u,u-h),f.lineTo(u-h,u),f.lineTo(-u+h,u),f.lineTo(-u,u-h),f.lineTo(-u,-u+h),f.closePath();let d=new Fn(f,{depth:e.depth,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:1,curveSegments:1}),g=Zs(e.keyColor,{shininess:50,specular:6314056});this.labelCanvas=document.createElement("canvas"),this.labelCanvas.width=64*3,this.labelCanvas.height=64*4,this.labelTex=new qn(this.labelCanvas),this.labelTex.colorSpace=pe,this.labelTex.minFilter=Xe,this.labelTex.magFilter=Xe;for(let x of this.keys){let m=new ne;m.position.set(x.x,x.y,.03),t.add(m),x.g=m,Te(m,d,g);let p=Ol.indexOf(x.label),y=p%3,_=Math.floor(p/3),v=new Wn(e.key*.92,e.key*.92),T=v.attributes.uv;for(let S=0;S<T.count;S++)T.setXY(S,(y+.04+T.getX(S)*.92)/3,1-(_+.04+(1-T.getY(S))*.92)/4);Te(m,v,new me({map:this.labelTex}),0,0,e.depth+.032)}this.drawLabels(),this.cardCanvas=document.createElement("canvas"),this.cardCanvas.width=256,this.cardCanvas.height=Math.round(256*e.card.h/e.card.w),this.cardTex=new qn(this.cardCanvas),this.cardTex.colorSpace=pe,this.cardTex.minFilter=Xe,Te(t,new ee(e.card.w+.16,e.card.h+.16,.06),$n(e.bezel),0,a,0),Te(t,new Wn(e.card.w,e.card.h),new me({map:this.cardTex}),0,a,.035),this.setCard("\uBBFF\uC74C\uC758 \uCCB4\uC2A4","\xB7\xB7\xB7\xB7"),this.padRect={x0:-s/2,x1:s/2,y0:c-r,y1:c}}drawLabels(){let t=this.cfg,e=this.labelCanvas.getContext("2d");e.fillStyle=t.keyBg,e.fillRect(0,0,192,256),e.textAlign="center",e.textBaseline="middle",Ol.forEach((n,s)=>{let r=s%3*64+32,o=Math.floor(s/3)*64+32,a=n==="*"||n==="#";e.fillStyle=a?t.sub:t.ink,e.font=a?t.font.replace(/\d+px/,l=>Math.round(parseInt(l)*.8)+"px"):t.font;let c=t.small&&id[n];e.fillText(n,r,o-(c?6:1)),c&&(e.fillStyle=t.sub,e.font="10px Galmuri9, sans-serif",e.fillText(id[n],r,o+20))}),this.labelTex.needsUpdate=!0}setCard(t,e){let n=t+"|"+e;if(n===this.cardKey)return;this.cardKey=n;let s=this.cfg,r=this.cardCanvas,o=r.getContext("2d"),a=r.width,c=r.height;if(o.textAlign="left",o.textBaseline="middle",s.card.lcd){o.fillStyle="#9fb88a",o.fillRect(0,0,a,c),o.fillStyle="rgba(40,60,30,0.12)";for(let l=0;l<c;l+=4)o.fillRect(0,l,a,1);o.fillStyle="#1e2a16",o.font="12px Galmuri11, sans-serif",o.fillText(t,10,14),o.textAlign="right",o.font="bold 34px Galmuri11, sans-serif",o.fillText(e,a-12,c/2+8)}else o.fillStyle="#fbf4e2",o.fillRect(0,0,a,c),o.fillStyle="#c22a2a",o.fillRect(0,22,a,2),o.fillStyle=sd,o.font="13px Galmuri11, sans-serif",o.fillText(t,10,11),o.textAlign="center",o.font="bold 30px Galmuri11, sans-serif",o.fillText(e,a/2,24+(c-24)/2);this.cardTex.needsUpdate=!0}keyAt(t){if(!t)return null;let e=this.cfg.key/2+this.cfg.gap/2;return this.keys.find(n=>Math.abs(t.x-n.x)<=e&&Math.abs(t.y-n.y)<=e)||null}digitScreen(t,e){let n=this.keys.find(s=>s.label===String(e));return this.faceToScreen(t,n.x,n.y,this.cfg.depth+.05)}get busy(){return!!this.auto||this.queue.length>0}press(t){this.pressed=t,t.target=1,this.onSound("dtmf",t.label)}pointerDown(t,e,n){if(this.busy||!this.enabled||this.pressed)return!1;let s=this.keyAt(this.faceLocal(t,e,n));return s?(this.press(s),!0):!1}pointerMove(t,e,n){this.pressed&&this.keyAt(this.faceLocal(t,e,n))!==this.pressed&&(this.pressed.target=0,this.pressed=null)}pointerUp(){let t=this.pressed;t&&(this.pressed=null,t.target=0,t.digit!==null&&this.onDigit(t.digit))}cancel(){this.pressed&&(this.pressed.target=0,this.pressed=null)}autoDial(t){for(let e of String(t))/\d/.test(e)&&this.queue.push(e)}abort(){this.queue=[],this.auto&&(this.auto.k.target=0,this.auto=null),this.cancel()}updateFace(t){if(!this.labelsOk&&this.t>.3&&document.fonts?.check?.(this.cfg.font)&&(this.labelsOk=!0,this.drawLabels(),this.cardKey=""),!this.auto&&this.queue.length&&!this.pressed){let e=this.keys.find(n=>n.label===this.queue[0]);this.queue.shift(),this.auto={k:e,t:0},e.target=1,this.onSound("dtmf",e.label)}if(this.auto){let e=this.auto;e.t+=t,e.t>.14&&e.k.target&&(e.k.target=0,e.k.digit!==null&&this.onDigit(e.k.digit)),e.t>.3&&(this.auto=null)}for(let e of this.keys)e.down+=(e.target-e.down)*Math.min(1,t*30),e.g.position.z=.03-e.down*this.cfg.depth*.7}},Ks=["rotary","push","big"],Bl={rotary:rd.label,push:od.label,big:ad.label};function cd(i){return i==="push"?new ya(od):i==="big"?new ya(ad):new Fl}var Ae=null;function va(){if(!Ae)try{Ae=new(window.AudioContext||window.webkitAudioContext)}catch{return}Ae.state==="suspended"&&Ae.resume()}function re(i,t,{type:e="square",gain:n=.08,slide:s=0,delay:r=0}={}){if(!Ae)return;let o=Ae.currentTime+r,a=Ae.createOscillator(),c=Ae.createGain();a.type=e,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),o+t),c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(c).connect(Ae.destination),a.start(o),a.stop(o+t+.02)}function Hn(i,t=.1,e=0){if(!Ae)return;let n=Ae.currentTime+e,s=Ae.createBuffer(1,Ae.sampleRate*i,Ae.sampleRate),r=s.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*(1-l/r.length);let o=Ae.createBufferSource();o.buffer=s;let a=Ae.createGain();a.gain.value=t;let c=Ae.createBiquadFilter();c.type="lowpass",c.frequency.value=900,o.connect(c).connect(a).connect(Ae.destination),o.start(n)}function Ci(i,t,{type:e="sine",gain:n=.03,delay:s=0}={}){if(!Ae)return;let r=Ae.currentTime+s,o=Ae.createOscillator(),a=Ae.createGain();o.type=e,o.frequency.setValueAtTime(i,r),a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(n,r+.015),a.gain.setValueAtTime(n,r+t-.02),a.gain.linearRampToValueAtTime(1e-4,r+t),o.connect(a).connect(Ae.destination),o.start(r),o.stop(r+t+.02)}var Yt={dialTick(){Hn(.012,.08),re(2600,.012,{type:"square",gain:.015})},dialPulse(){Hn(.02,.16),re(820,.02,{type:"square",gain:.03})},dialStop(){Hn(.04,.2),re(170,.06,{type:"triangle",gain:.08})},dtmf(i){let t=["1","2","3","4","5","6","7","8","9","*","0","#"].indexOf(String(i));t<0||(Hn(.015,.1),Ci([697,770,852,941][Math.floor(t/3)],.16,{gain:.02}),Ci([1209,1336,1477][t%3],.16,{gain:.02}))},offHook(){Hn(.05,.22),re(240,.05,{type:"triangle",gain:.07}),Ci(350,.6,{gain:.012,delay:.08}),Ci(440,.6,{gain:.012,delay:.08})},hangUp(){Hn(.06,.28),re(130,.09,{type:"triangle",gain:.1})},ringback(){Ci(440,1,{gain:.025}),Ci(480,1,{gain:.025})},busy(){for(let i=0;i<4;i++)Ci(480,.5,{gain:.025,delay:i}),Ci(620,.5,{gain:.025,delay:i})},ring(){for(let i=0;i<2;i++)for(let t=0;t<13;t++){let e=i*.8+t*.045;re(t%2?1320:1580,.09,{type:"triangle",gain:.035,delay:e}),re(t%2?2640:3160,.04,{type:"sine",gain:.012,delay:e})}},pickUp(){Hn(.05,.25),re(300,.06,{type:"triangle",gain:.08}),re(660,.08,{type:"sine",gain:.03,delay:.08})},move(){Hn(.06,.18),re(180,.05,{type:"triangle",gain:.1})},capture(){re(220,.15,{type:"sawtooth",gain:.025,slide:160}),Hn(.16,.45,.17),re(70,.28,{type:"sine",gain:.22,slide:-40,delay:.17}),re(140,.12,{type:"square",gain:.07,slide:-90,delay:.17}),re(1400,.5,{type:"triangle",gain:.03,slide:-1100,delay:.24})},castle(){Yt.move(),setTimeout(()=>Yt.move(),90)},check(){re(880,.08,{gain:.05}),re(880,.08,{gain:.05,delay:.12})},select(){re(660,.03,{type:"triangle",gain:.04})},bad(){re(200,.25,{type:"sawtooth",gain:.06,slide:-120})},late(){re(300,.2,{type:"triangle",gain:.06,slide:-100})},halt(){Hn(.07,.3),re(150,.22,{type:"square",gain:.08,slide:-50}),re(300,.12,{type:"sawtooth",gain:.04,delay:.02})},revive(){for(let i=0;i<14;i++)re(1400-i*55+i%2*180,.03,{type:"square",gain:.025,delay:i*.07});[880,1175,1568].forEach((i,t)=>re(i,.12,{type:"triangle",gain:.05,delay:1.1+t*.06}))},rewind(){for(let i=0;i<22;i++)re(900+i%3*260-i*18,.035,{type:"sawtooth",gain:.022,delay:i*.055})},vanish(){re(400,.3,{type:"sine",gain:.06,slide:-350})},shatter(){Hn(.18,.35),re(160,.2,{type:"sawtooth",gain:.07,slide:-110});for(let i=0;i<7;i++)re(1400+Math.random()*2200,.05,{type:"triangle",gain:.025,delay:.04+i*.035+Math.random()*.02})},start(){re(392,.1,{gain:.06}),re(523,.1,{gain:.06,delay:.1}),re(659,.25,{gain:.06,delay:.2})},win(){[523,659,784,1046].forEach((i,t)=>re(i,.2,{gain:.06,delay:t*.12}))},lose(){[392,349,311,261].forEach((i,t)=>re(i,.25,{type:"triangle",gain:.06,delay:t*.15}))},ui(){re(520,.03,{type:"triangle",gain:.04})},secret(){re(90,.06,{type:"sine",gain:.03})}};var Ma=class{constructor(t,e){this.out=t,this.ctx=t.getContext("2d",{alpha:!1}),this.layers=e,this.tmp=new Map}resize(t,e,n=window.devicePixelRatio||1){let s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n));this.out.width!==s&&(this.out.width=s),this.out.height!==r&&(this.out.height=r)}draw(){let{ctx:t,out:e}=this;t.fillStyle="#000",t.fillRect(0,0,e.width,e.height);for(let n of this.layers){if(n.skip)continue;let s=n.width,r=n.height;if(!s||!r)continue;let o=e.width/s,a=e.height/r,c=f=>Math.abs(f-Math.round(f))<1e-6;if(c(o)&&c(a)){t.imageSmoothingEnabled=!1,t.drawImage(n,0,0,e.width,e.height);continue}let l=Math.max(1,Math.ceil(Math.max(o,a)-1e-6)),h=this.tmp.get(n);h||(h=document.createElement("canvas"),this.tmp.set(n,h)),(h.width!==s*l||h.height!==r*l)&&(h.width=s*l,h.height=r*l);let u=h.getContext("2d");u.imageSmoothingEnabled=!1,u.clearRect(0,0,h.width,h.height),u.drawImage(n,0,0,h.width,h.height),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="low",t.drawImage(h,0,0,e.width,e.height)}}get integer(){let t=this.out.width/(this.layers[1]?.width||this.layers[0].width);return Math.abs(t-Math.round(t))<1e-6}};var av="v0.4";function hd(i,t,{online:e=null,settings:n=!0,tagline:s="\uAC19\uC740 WiFi \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694",text3d:r=!1}={}){let o=i.pal,a=i.ctx.createLinearGradient(0,0,0,160);a.addColorStop(0,"rgba(0,0,0,0.5)"),a.addColorStop(1,"rgba(0,0,0,0)"),i.ctx.fillStyle=a,i.ctx.fillRect(0,0,At,160),i.frame(),r||(i.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",At/2,52,{scale:3,font:14}),i.letter("FAITH CHESS",At/2,112,{scale:1,font:9,spacing:3}));let c=408;i.rect(14,c,At-28,62,"rgba(0,0,0,0.72)"),i.text(s,At/2,c+6,{font:9,align:"center"}),Math.floor(t/500)%2===0&&i.text("\uD654\uBA74\uC744 \uB204\uB974\uBA74 \uC2DC\uC791\uD569\uB2C8\uB2E4",At/2,c+20,{font:11,color:o.accentHi,align:"center"});let l=438;i.hLine(30,l,At-60),i.text("COPYRIGHT 2026",34,l+6,{font:9,color:o.accent}),i.text(av,At-34,l+6,{font:9,color:o.accent,align:"right"}),e!==null&&i.text(e?"\u25CF":"\u25CB",16,462,{font:9,color:e?ie.green:o.dim}),n&&i.button("settings",At-50,12,38,16,"\uC124\uC815",{font:9})}function ud(i,t,e){let n=[],s=i.status==="playing";if(i.lastMove&&(n.push({sq:i.lastMove.from,color:"#f2c14e",opacity:.22}),n.push({sq:i.lastMove.to,color:"#f2c14e",opacity:.32})),t.sel!=null){n.push({sq:t.sel,color:"#7fe9ff",opacity:.5});for(let r of t.legal)n.push({sq:r.to,color:r.capture?"#ff5a4a":"#7ad17a",opacity:.42})}if(i.check&&s){let r=i.pieces.find(o=>o.type==="k"&&o.color===i.turn);r&&n.push({sq:r.sq,color:"#ff2a2a",opacity:.35+Math.sin(e/120)*.15})}return n}function cv(i){let t=i.result||{},e=t.winner===i.you,n=!t.winner,s=n?"\uBB34\uC2B9\uBD80":e?"\uC2B9\uB9AC!":"\uD328\uBC30\u2026",r={checkmate:"\uCCB4\uD06C\uBA54\uC774\uD2B8",stalemate:"\uC2A4\uD14C\uC77C\uBA54\uC774\uD2B8",insufficient:"\uAE30\uBB3C \uBD80\uC871",fifty:"50\uC218 \uADDC\uCE59",resign:e?"\uC0C1\uB300 \uAE30\uAD8C":"\uAE30\uAD8C",disconnect:e?"\uC0C1\uB300 \uC811\uC18D \uC885\uB8CC":"\uC811\uC18D \uC885\uB8CC",fouls:e?"\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C":"\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C",bare:e?"\uBC18\uCE59 \uC801\uBC1C \xB7 \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC74C":"\uBC18\uCE59 \uC801\uBC1C \xB7 \uD0B9\uB9CC \uB0A8\uC74C"}[t.result]||"";return{head:s,why:r,won:e,draw:n}}function fd(i,t,e,n,s,r){let o=i.pal,a=e.you,c=a==="w"?"b":"w",l=e.status==="playing";if(t&&!t.zoomFx&&t.squareToScreen){let y=[56,63,0,7].map(v=>t.squareToScreen(v).y),_=Math.abs(t.squareToScreen(56).x-t.squareToScreen(63).x)/14;i.boardTop=Math.round(Math.min(...y)-_)}lv(i.boardTop??108),i.vignette(),t&&t.flash>0&&i.rect(0,0,At,Ze,`rgba(255,248,230,${(t.flash*.7).toFixed(3)})`),i.rect(0,0,At,56,"rgba(0,0,0,0.5)"),i.frame();let u=((y,_,v)=>{if(i.measure(y,_)<=v)return y;let T=y;for(;T.length>1&&i.measure(T+"\u2026",_)>v;)T=T.slice(0,-1);return T+"\u2026"})(e.names[c]||"?","11b",64);i.text(`\uC0C1\uB300 \xB7 ${c==="w"?"\uBC31":"\uD751"}`,20,10,{font:9,color:o.accent}),i.text(u,20,21,{font:"11b",color:e.connected[c]?o.ink:o.dim}),i.text(e.connected[c]?"\u25CF":"\u25CB",24+i.measure(u,"11b"),22,{font:9,color:e.connected[c]?ie.green:ie.warn}),ld(i,20,38,e.caught?.[c]||0),uv(i,e,s),i.button("suspect",184,10,74,28,"\uC758\uC2EC",{style:"danger",font:14,disabled:!l||!!e.pending}),i.text(`\uC81C ${e.round}\uAD6D \xB7 \uBC29 ${e.code}`,256,42,{font:9,color:o.dim,align:"right"});let f=null;n.online?l&&!e.connected[c]&&(f=["\uC0C1\uB300 \uC5F0\uACB0 \uB04A\uAE40 \xB7 30\uCD08 \uC548\uC5D0 \uC548 \uC624\uBA74 \uC2B9\uB9AC",ie.warn]):f=["\uC5F0\uACB0\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",ie.warn],f&&(i.panel(10,60,At-20,18,{fill:"rgba(10,6,8,0.9)",border:f[1],shadow:!1}),i.text(f[0],At/2,64,{font:9,align:"center",color:f[1]})),i.plaque(6,380,At-12,94);let d=e.names[a]||"?",g=`\uB098 \xB7 ${a==="w"?"\uBC31":"\uD751"}`;if(i.text(g,16,389,{font:9,color:o.accent}),ld(i,16+i.measure(g,9)+10,389,e.caught?.[a]||0),i.text(d,16,400,{font:"11b"}),i.text(e.connected[a]?"\u25CF":"\u25CB",20+i.measure(d,"11b"),401,{font:9,color:ie.green}),l){let y=e.turn===a,_=e.check&&y?ie.warn:y?o.accent:o.lineLo;i.panel(150,404,106,18,{fill:y?o.btnPrimary:"#14121a",border:_,shadow:!1});let v=y?e.check?"\uCCB4\uD06C! \uB0B4 \uCC28\uB840":"\uB0B4 \uCC28\uB840":e.check?"\uC0C1\uB300 \uCCB4\uD06C":"\uC0C1\uB300 \uCC28\uB840";i.text(v,203,407,{font:11,align:"center",color:e.check&&y?ie.warn:y?o.accentHi:o.dim})}else i.text("\uB300\uAD6D \uC885\uB8CC",203,407,{font:11,align:"center",color:o.dim});let x=Math.max(0,e.eraseReadyAt-r),m=x<=0&&l;if(i.text("\uC9C0\uC6B0\uAE30",16,428,{font:9,color:o.accent}),i.bar(52,429,156,8,l?1-x/Fe.ERASE_COOLDOWN_MS:0,m?Math.floor(s/250)%2?ie.cyan:"#4fb6cc":"#6a3a2a"),i.text(m?"\uC900\uBE44\uB428":l?`${Math.ceil(x/1e3)}\uCD08`:"-",256,428,{font:9,align:"right",color:m?ie.cyan:o.dim}),i.text("\uC0C1\uB300 \uB9D0\uC744 \uAE38\uAC8C \uB20C\uB800\uB2E4 \uB5BC\uBA74 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4",16,442,{font:9,color:o.dim}),i.button("settings",14,455,40,14,"\uC124\uC815",{font:9}),l&&(n.confirmResign?(i.text("\uC815\uB9D0 \uAE30\uAD8C?",128,457,{font:9,color:ie.warn,align:"right"}),i.button("resign:yes",134,455,36,14,"\uC608",{font:9,style:"danger"}),i.button("resign:no",176,455,80,14,"\uC544\uB2C8\uC624",{font:9})):i.button("resign",216,455,40,14,"\uAE30\uAD8C",{font:9})),n.grab){let y=Math.min(1,(performance.now()-n.grab.t0p)/Fe.LONG_PRESS_MS),_=i.ctx,v=n.grab.x,T=n.grab.y-22;_.strokeStyle=y>=1?ie.cyan:"rgba(255,255,255,0.7)",_.lineWidth=2,_.beginPath(),_.arc(v,T,8,-Math.PI/2,-Math.PI/2+y*Math.PI*2),_.stroke(),y>=1&&i.text("\uB5BC\uBA74 \uC9C0\uC6C0",v,T-22,{font:9,align:"center",color:ie.cyan})}let p=Nr;if(gv(i,n.toasts,s,f?82:60,Math.max(f?96:74,(i.boardTop??108)-2),[{x:8,w:p.x-11},{x:p.x+p.w+3,w:At-8-(p.x+p.w+3)}]),e.pending?.kind==="pick"){i.dim(.5),i.plaque(14,146,At-28,168),i.text("\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?",At/2,160,{font:"11b",align:"center"});let y=Math.max(0,e.pending.deadline-r);i.bar(28,180,At-56,6,y/Fe.PICK_TIMEOUT_MS,y<3e3?ie.warn:o.accent),e.pending.choices.forEach((_,v)=>{let T=23+v*46,S=194,w="pick:"+_;i.button(w,T,S,40,58,"",{font:9});let I=i.pressedId===w?1:0,M=t?.pieceIcon?.(_,a,34);i.rect(T+3+I,S+4+I,34,34,"rgba(255,236,200,0.13)"),M&&i.ctx.drawImage(M,T+3+I,S+4+I,34,34),i.text(dn[_],T+20+I,S+42+I,{font:9,align:"center"})}),i.text("\uB9DE\uD788\uBA74 \uBC18\uCE59 \uD398\uB110\uD2F0: \uC0C1\uB300\uC758 \uAC19\uC740",At/2,262,{font:9,align:"center",color:o.dim}),i.text("\uB4F1\uAE09 \uB9D0 \uD558\uB098\uAC00 \uC0B0\uC0B0\uC870\uAC01 \uB0A9\uB2C8\uB2E4",At/2,275,{font:9,align:"center",color:o.dim}),i.text("\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C\uBA74 \uC0C1\uB300 \uD328\uBC30",At/2,288,{font:9,align:"center",color:o.dim})}else if(n.promo)i.dim(.4),i.plaque(30,180,At-60,84),i.text("\uC2B9\uAE09\uD560 \uB9D0\uC744 \uACE0\uB974\uC138\uC694",At/2,194,{font:11,align:"center"}),["q","r","b","n"].forEach((y,_)=>i.button("promo:"+y,38+_*49,214,44,34,dn[y],{font:9}));else if(e.status==="over"){let y=cv(e);i.dim(.55),i.plaque(25,150,At-50,160),y.won?i.letter(y.head,At/2,164,{scale:2,font:14}):i.bigText(y.head,At/2,166,{scale:2,font:14,color:y.draw?o.ink:ie.warn}),i.text(y.why,At/2,210,{font:11,align:"center"});let _=e.rematchVotes[a];e.rematchVotes[c]&&!_&&i.text("\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4",At/2,232,{font:9,align:"center",color:o.accentHi}),_&&i.text("\uC0C1\uB300\uC758 \uC751\uB2F5\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911\u2026",At/2,232,{font:9,align:"center",color:o.dim}),i.button("rematch",37,262,94,28,"\uC7AC\uB300\uACB0",{style:"primary",disabled:_||!e.connected[c]}),i.button("leave",139,262,94,28,"\uB098\uAC00\uAE30")}n.rewindFx&&fv(i,n.rewindFx,performance.now()),n.bubble&&mv(i,n.bubble,performance.now())}var Nr={x:99,y:0,w:72,h:104};function lv(i){Nr.h=Math.max(56,Math.min(130,Math.round(i)-2))}function Vl(){let i=Nr;return{x:i.x+4,y:i.y+4,w:i.w-8,h:i.h-8}}function hv(){let i=Nr;return[i.x+i.w/2,i.y+i.h]}function uv(i,t,e){let n=i.pal,s=Nr,r=i.ctx,o=t.status==="playing"?t.turn:t.status==="over"?t.result?.winner:null;i.rect(s.x-1,s.y-1,s.w+2,s.h+2,"#000"),i.rect(s.x,s.y,s.w,s.h,n.accent),i.rect(s.x,s.y,s.w,1,n.accentHi),i.rect(s.x,s.y,1,s.h,n.accentHi),i.rect(s.x,s.y+s.h-1,s.w,1,n.accentLo),i.rect(s.x+s.w-1,s.y,1,s.h,n.accentLo),i.rect(s.x+2,s.y+2,s.w-4,s.h-4,n.accentLo);for(let[c,l]of[[s.x+1,s.y+1],[s.x+s.w-4,s.y+1],[s.x+1,s.y+s.h-4],[s.x+s.w-4,s.y+s.h-4]])i.rect(c,l,3,3,n.accentHi);let a=Vl();r.clearRect(a.x,a.y,a.w,a.h),i.box(a.x-1,a.y-1,a.w+2,a.h+2,o&&Math.floor(e/300)%2===0?n.accentHi:ie.gold)}var kl=1500;function fv(i,t,e){let n=e-t.t0;if(n<0||n>kl)return;let s=i.ctx;s.save();let r=n<150?n/150:n>kl-300?(kl-n)/300:1;i.rect(0,56,At,324,`rgba(60,120,170,${(.16*r).toFixed(3)})`);for(let o=0;o<4;o++){let a=56+((324-(n*.45+o*83))%324+324)%324;i.rect(0,Math.round(a),At,2,`rgba(230,240,255,${(.28*r).toFixed(3)})`),i.rect(0,Math.round(a)+3,At,1,`rgba(255,90,210,${(.18*r).toFixed(3)})`)}s.globalAlpha=r*(Math.floor(n/250)%2?.75:1),i.bigText("\u25C0\u25C0 \uB418\uAC10\uAE30",16,64,{scale:1,font:14,color:"#ffffff",align:"left"}),t.undone&&i.text(`${t.undone}\uC218 \uBB34\uB984`,18,84,{font:9,color:"#cfe9ff"}),s.restore()}function ld(i,t,e,n){let s=i.pal;i.text("\uBC18\uCE59",t,e,{font:9,color:n?ie.warn:s.dim});let r=t+i.measure("\uBC18\uCE59",9)+4;for(let o=0;o<Fe.FOUL_LIMIT;o++){let a=o<n,c=r+o*10,l=e+2;i.rect(c+1,l+1,7,7,"#000"),i.rect(c,l,7,7,a?"#d4382c":"rgba(0,0,0,0.6)"),i.box(c,l,7,7,a?"#ff8a7a":s.lineLo),a&&(i.rect(c+3,l+1,1,3,"#fff"),i.rect(c+3,l+5,1,1,"#fff"))}}var Hl=1600,zl=new Map;function dv(i){let t=i.getContext("2d"),e=t.getImageData(0,0,i.width,i.height),n=e.data;for(let s=3;s<n.length;s+=4)n[s]=n[s]>=110?255:0;return t.putImageData(e,0,0),i}function pv(i,t){let e=hv(),n=t+e.join(",");if(zl.has(n))return zl.get(n);let s="\uB3D9\uC791 \uADF8\uB9CC!",r=2,o=(i.measure(s,14)+4)*r,a=19*r,c=t==="w"?166:104,l=e[1]+58,h=o/2+12,u=a/2+10,f=15,d=O=>{let L=Math.sin(O*12.9898+(t==="w"?7.1:3.3))*43758.5453;return L-Math.floor(L)},g=[];for(let O=0;O<f*2;O++){let L=O/(f*2)*Math.PI*2-Math.PI/2+.11,B=O%2===0,z=B?1.2+d(O)*.22:.97+d(O+30)*.05,J=B?1.45+d(O+60)*.45:1;g.push([c+Math.cos(L)*h*z,l+Math.sin(L)*u*J])}let x=Math.atan2(e[1]-l,e[0]-c),m=0,p=1/0;g.forEach(([O,L],B)=>{if(B%2)return;let z=Math.abs(Math.atan2(L-l,O-c)-x);z=Math.min(z,Math.PI*2-z),z<p&&(p=z,m=B)}),g[m]=e;let y=O=>{let L=document.createElement("canvas");L.width=At,L.height=Ze;let B=L.getContext("2d");return O(B),dv(L)},_=O=>{O.beginPath(),g.forEach(([L,B],z)=>z?O.lineTo(L,B):O.moveTo(L,B)),O.closePath()},v=y(O=>{_(O),O.fillStyle="#1a0a10",O.fill(),O.lineJoin="miter",O.miterLimit=12,O.lineWidth=5,O.strokeStyle="#1a0a10",O.stroke()}),T=y(O=>{_(O),O.fillStyle="#fff2a6",O.fill()}),S=document.createElement("canvas");S.width=At,S.height=Ze;let w=S.getContext("2d");w.imageSmoothingEnabled=!1,w.globalAlpha=.6,w.drawImage(v,3,3),w.globalAlpha=1,w.drawImage(v,0,0),w.drawImage(T,0,0);let I=i.ctx;i.ctx=w,i.bigText(s,c,Math.round(l-a/2)+1,{scale:r,font:14,color:"#d4141e",shadow:!0}),i.ctx=I;let M=g.map(O=>O[0]),E=g.map(O=>O[1]),N={x:Math.floor(Math.min(...M))-4,y:Math.floor(Math.min(...E))-4,cx:c,cy:l};N.w=Math.ceil(Math.max(...M))+8-N.x,N.h=Math.ceil(Math.max(...E))+8-N.y;let F={sprite:S,box:N};return zl.set(n,F),F}function mv(i,t,e){let n=e-t.t0;if(n<0||n>Hl)return;let{sprite:s,box:r}=pv(i,t.by),o=n<90?.6+n/90*.55:n<160?1.15-(n-90)/70*.15:1,a=n>=160&&n<420?Math.floor(n/40)%2?2:-2:0,c=i.ctx;c.save(),c.imageSmoothingEnabled=!1,c.globalAlpha=n>Hl-300?(Hl-n)/300:1;let l=Math.round(r.w*o),h=Math.round(r.h*o),u=Math.round(r.cx-(r.cx-r.x)*o)+a,f=Math.round(r.cy-(r.cy-r.y)*o);c.drawImage(s,r.x,r.y,r.w,r.h,u,f,l,h),c.restore()}function gv(i,t,e,n,s=106,r=[{x:10,w:At-20}]){let o=i.pal,a={secret:"#b0a49a",bad:ie.warn,late:ie.late,good:ie.green,warn:ie.gold,info:o.ink},c=11,l=0,h=n,u=!0;for(let f of t.slice().reverse()){let d=e-f.t;if(d>5e3)continue;let g=d>4e3?Math.max(0,1-(d-4e3)/1e3):1,x,m;for(;;){if(l>=r.length)return;if(x=i.lines(f.text,r[l].w-8,9),m=Math.floor((s-h+1)/c),x.length<=m||u&&h===n&&l===r.length-1||u&&m>0&&h===n)break;l++,h=n}if(m<=0)return;x.length>m&&(x=x.slice(0,m),x[m-1]=x[m-1].slice(0,-1)+"\u2026");let p=r[l];i.ctx.save(),i.ctx.globalAlpha=g*(u?1:.8);let y=Math.max(...x.map(_=>i.measure(_,9)))+8;i.rect(p.x,h-1,y,x.length*c+1,"rgba(0,0,0,0.7)"),x.forEach((_,v)=>i.text(_,p.x+4,h+v*c,{font:9,color:a[f.kind]||o.ink})),i.ctx.restore(),h+=x.length*c+3,u=!1}}function dd(i,t){let e=i.pal;i.dim(.55),i.plaque(8,22,At-16,438),i.text("\uC2DC\uAC01 \uC124\uC815",At/2,34,{font:"11b",align:"center",color:e.accentHi}),i.text("\uBC14\uAFB8\uBA74 \uBC14\uB85C \uC801\uC6A9\uB418\uACE0 \uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4",At/2,48,{font:9,align:"center",color:e.dim}),Gs.forEach((n,s)=>{let r=64+s*44;i.text(n.label,22,r,{font:9,color:e.accent}),i.button(`th:${n.id}:-1`,20,r+12,26,22,"<",{font:11}),i.text(vf(n.id,t[n.id]),At/2,r+17,{font:11,align:"center"}),i.button(`th:${n.id}:1`,At-46,r+12,26,22,">",{font:11})}),i.button("settings:close",At/2-50,420,100,26,"\uB2EB\uAE30",{style:"primary"})}var de=globalThis.FAITH_TARGET||"lan",Je=i=>document.getElementById(i),_d=Je("gl"),Zn=Je("ui"),xv=Je("out"),js=Je("dom"),Gl=Je("stage"),Zt=new oa(_d),rt=new aa(Zn),Or=new Ma(xv,[_d,Zn,Zt.overlayCanvas]),Jt=new ca,R={mode:"boot",view:null,offset:0,toasts:[],sel:null,legal:[],promo:null,confirmResign:!1,pointers:new Map,grab:null,btnPid:null,touchMax:0,bubble:null,rewindFx:null,info:null,roomParam:new URLSearchParams(location.search).get("room"),err:"",settings:!1,theme:_f(),lan:null,roomT:null,roomChecked:de!=="artifact",shareMsg:null},ql=i=>`${location.origin}${location.pathname}?room=${i}`,Pi={x:8,y:76,w:254,h:270},yd="faith-chess-phone";function _v(){let i=new URLSearchParams(location.search).get("phone");if(Ks.includes(i))return i;try{let t=localStorage.getItem(yd);if(Ks.includes(t))return t}catch{}return"big"}var oe=null;function Xl(i){let t=oe;oe=cd(i),oe.onSound=(e,n)=>({tick:Yt.dialTick,pulse:Yt.dialPulse,stop:Yt.dialStop,dtmf:Yt.dtmf})[e]?.(n),oe.onDigit=vv,t&&(oe.setLift(t.liftTo),oe.lift=t.lift),Zt.phoneStage=oe}de==="web"&&Xl(_v());var Yl=()=>de==="web"&&!R.call.digits&&!R.call.calling&&!R.call.pickup&&!R.call.ringing&&!oe.busy&&R.phonePid==null;function yv(){if(!Yl())return;let i=Ks[(Ks.indexOf(oe.kind)+1)%Ks.length];Xl(i);try{localStorage.setItem(yd,i)}catch{}Yt.ui()}R.call={digits:"",calling:!1,ringbackT:null,ringFx:0,pickup:0,qr:!1,autoDialed:!1};R.phonePid=null;var wa=()=>de==="web"&&!!R.roomT&&R.mode==="lobby"&&!R.settings&&!R.call.calling&&R.call.digits.length<4,Sa=()=>de==="web"&&R.mode==="waiting"&&!R.settings&&!R.call.qr;function vd(){!R.call.ringing||!R.roomT?.answer||(R.call.ringing=!1,Yt.pickUp(),R.roomT.answer())}function $l(){let i=Je("name"),t=(i?i.value:Kl()).trim().slice(0,12);try{localStorage.setItem("faith-chess-name",t)}catch{}return t}function vv(i){if(Sa()){R.call.hostHint=performance.now();return}wa()&&(R.call.digits||(oe.setLift(.3),Yt.offHook()),R.call.digits+=i,R.err="",R.call.digits.length===4&&Mv())}async function Mv(){let i=R.call.digits;R.call.calling=!0,Yt.ringback(),R.call.ringbackT=setInterval(()=>Yt.ringback(),3e3);try{Jt.use(R.roomT),await R.roomT.join(i,$l()),R.call.calling&&R.mode==="lobby"&&(R.mode="waiting-join")}catch(t){console.warn(t),Fr("\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694.")}}function Zl(){clearInterval(R.call.ringbackT),R.call.ringbackT=null}function Fr(i){Zl();let t=R.call.calling||R.call.digits;R.call.calling=!1,R.call.digits="",oe?.abort(),oe?.setLift(0),i?(R.err=i,Yt.busy()):t&&Yt.hangUp()}function Md(){let i=getComputedStyle(document.body),t=document.body.clientWidth-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight),e=document.body.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom),n=window.devicePixelRatio||1,s=Math.max(.5,Math.min(t/Mt,e/fn)),r=Math.ceil(s*n),o=Math.floor(s*n),a=s;r/n<=s*1.025?a=r/n:o>=1&&o/n>=s*.92&&(a=o/n),document.documentElement.style.setProperty("--s",String(a)),document.documentElement.style.setProperty("--fs",String(Math.max(1,Math.round(a*n))/n)),R.scale=a,Or.resize(Mt*a,fn*a,n),Zt.setNativeSize(Or.out.width,Or.out.height),Gl.style.transform="";let c=Gl.getBoundingClientRect(),l=c.left*n%1,h=c.top*n%1;(l||h)&&(Gl.style.transform=`translate(${-l/n}px, ${-h/n}px)`)}addEventListener("resize",Md);Md();var pd=(i,t)=>i.x>=t.x&&i.x<t.x+t.w&&i.y>=t.y&&i.y<t.y+t.h;function Br(i){let t=Zn.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*Mt,y:(i.clientY-t.top)/t.height*fn}}function Jl(i){R.theme=i,ea(i),Zt.applyTheme(i),rt.setTheme(i);let t=Rr[i.frame],e=document.documentElement.style;e.setProperty("--accent",t.accent),e.setProperty("--accent-hi",t.accentHi),e.setProperty("--line",t.line),e.setProperty("--ink",t.ink),e.setProperty("--dim",t.dim),e.setProperty("--btn",t.btn),e.setProperty("--btn-primary",t.btnPrimary)}var bv=()=>Date.now()+R.offset,Ta=()=>R.view?.you;function Aa(i){return R.view?.pieces.find(t=>t.sq===i)||null}function Sv(){let i=R.view,t=new Array(64).fill(null);for(let e of i.pieces)t[e.sq]={id:e.id,type:e.type,color:e.color,shield:e.shield};return{board:t,turn:i.turn,castling:i.castling,ep:i.ep,halfmove:0,fullmove:1,lastMove:null}}function Ev(i,t="info"){R.toasts.push({text:i,kind:t,t:performance.now()}),R.toasts.length>4&&R.toasts.shift()}function bd(){if(location.hostname!=="localhost"&&location.hostname!=="127.0.0.1")return location.origin+"/";let i=R.info?.addresses?.[0];return i?`http://${i.address}:${R.info.port}/`:location.origin+"/"}function Sd(){R.sel=null,R.legal=[],R.promo=null,R.confirmResign=!1}var md=2400,wv={p:1,n:3,b:3,r:5,q:9};function Tv(i){let t=wv[i.captured]||0;return i.promotion||t>=5?"always":(t>=3||i.check)&&(i.at*7+t*13+(i.check?5:0)+(i.by==="w"?3:0))%2===0?"maybe":null}function Ea(i,t=!1){if(!i)return;let e=performance.now();!t&&R.cheer&&e-R.cheer.t0<5e3||(R.cheer={by:i,t0:e+250})}Jt.addEventListener("error",i=>{de==="web"&&R.call.calling?Fr(i.detail.text):R.err=i.detail.text,["waiting","lobby","waiting-join"].includes(R.mode)&&Qs()});Jt.addEventListener("joined",()=>{R.err="",Wl(),de==="web"&&R.call.calling&&(Zl(),Yt.pickUp())});Jt.addEventListener("ring",()=>{oe?.ring(1.7),Yt.ring(),R.call.ringFx=performance.now(),R.call.ringing=!0,R.call.ringNext=R.call.ringFx+2e3});Jt.addEventListener("ringstop",()=>{R.call.ringFx=0,R.call.ringing=!1,oe&&(oe.ringT=0)});Jt.addEventListener("toast",i=>{let{text:t,kind:e}=i.detail;Ev(t,e),{secret:Yt.secret,bad:Yt.bad,late:Yt.late,warn:Yt.ui,info:Yt.ui,good:Yt.ui}[e]?.()});Jt.addEventListener("event",i=>{let{name:t,check:e,by:n,at:s}=i.detail;if(t==="start")Sd(),Yt.start();else if(t==="move"||t==="capture"||t==="castle"){Yt[t](),e&&setTimeout(()=>Yt.check(),120),t==="capture"&&n&&n===Ta()&&Zt.attackZoom(s);let r=Tv(i.detail);r&&Ea(n,r==="always")}else t==="penalty"?(Zt.shatter(i.detail.at),Yt.shatter(),Ea(n,!0)):t==="rewind"?(R.sel=null,R.legal=[],R.promo=null,R.rewindFx={t0:performance.now(),undone:i.detail.undone},Zt.rewind(),Yt.rewind()):t==="revive"?(Zt.reviveAt(i.detail.at),Yt.revive()):t==="suspect"?(R.bubble={by:n,t0:performance.now()},Yt.halt()):t==="vanish"&&Yt.vanish()});Jt.addEventListener("state",i=>{let t=i.detail,e=R.view;R.view=t,e?.status==="playing"&&t.status==="over"&&t.result?.winner&&Ea(t.result.winner,!0),R.offset=t.serverNow-Date.now(),Zt.setSide(t.you==="w"?1:-1),t.status==="waiting"?(R.mode="waiting",Wl(),Zt.setMode("title")):(R.mode!=="game"&&(de==="web"&&Jt.kind==="peer"&&t.status==="playing"&&(R.call.pickup=performance.now(),oe.setLift(1),R.call.calling||Yt.pickUp()),de==="web"&&(Zl(),R.call.calling=!1,R.call.digits="",R.call.ringFx=0,R.call.ringing=!1,R.call.qr=!1),R.mode="game",Wl(),Zt.clearPieces()),Zt.setMode("game"),Zt.sync(t.pieces,t.lastMove)),(!e||e.turn!==t.turn||e.status!==t.status||e.round!==t.round)&&(R.sel=null,R.legal=[],R.promo=null),e&&e.status==="playing"&&t.status==="over"&&(R.confirmResign=!1,t.result?.winner===t.you?Yt.win():t.result?.winner?Yt.lose():Yt.ui())});function Wl(){js.hidden=!0,js.innerHTML=""}function ba(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Kl(){try{return localStorage.getItem("faith-chess-name")||""}catch{return""}}function Qs(){R.mode="lobby",R.settings=!1,Zt.setMode("title"),js.hidden=!1;let i=de==="lan",t=R.roomT,e=!i&&!t;if(de==="web")return Av();let n=(R.roomParam||"").replace(/[^A-Za-z0-9]/g,"").slice(0,4);js.innerHTML=`
    <form class="panel" id="lobby" autocomplete="off">
      <label for="name">\uC774\uB984</label>
      <input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${ba(Kl())}">
      <div class="row">
        <button type="button" id="create" class="primary" ${e?"disabled":""}>\uBC29 \uB9CC\uB4E4\uAE30</button>
        ${i?'<button type="button" id="quick">\uBE60\uB978 \uB300\uC804</button>':""}
      </div>
      <label for="code">\uBC29 \uCF54\uB4DC\uB85C \uCC38\uAC00</label>
      <div class="row tight"><input id="code" class="code" maxlength="4" placeholder="ABCD" value="${ba(n)}" ${e?"disabled":""}><button type="submit" id="join" class="narrow" ${e?"disabled":""}>\uCC38\uAC00</button></div>
      ${de==="artifact"?'<label>\uC5F4\uB9B0 \uBC29</label><div id="rooms" class="rooms"></div>':""}
      <div class="row"><button type="button" id="bot">\uBD07\uACFC \uC5F0\uC2B5</button></div>
      <div class="err" id="err" role="alert">${ba(R.err||"")}</div>
      <div class="hint" id="hint"></div>
    </form>`;let s=Je("hint");i?s.textContent="\uAC19\uC740 WiFi\uC758 \uC0C1\uB300\uB294 \uC544\uB798 \uC8FC\uC18C\uB098 QR\uB85C \uC811\uC18D\uD569\uB2C8\uB2E4.":R.roomChecked?e&&de==="web"?s.textContent="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD574 \uBCF4\uC138\uC694. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":e?s.textContent="\uB450 \uD3F0 \uB300\uC804\uC740 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD55C \uC0C1\uD0DC\uB85C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":de==="web"?s.textContent=R.roomParam?"\uC774\uB984\uC744 \uC801\uACE0 \uCC38\uAC00\uB97C \uB204\uB974\uC138\uC694.":"\uBC29\uC744 \uB9CC\uB4E4\uBA74 \uB9C1\uD06C\uAC00 \uC0DD\uAE41\uB2C8\uB2E4. \uC0C1\uB300\uC5D0\uAC8C \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uAC70\uB098 \uCF54\uB4DC\uB97C \uC54C\uB824 \uC8FC\uC138\uC694.":s.textContent="\uD55C \uD3F0\uC5D0\uC11C \uBC29\uC744 \uB9CC\uB4E4\uACE0, \uB2E4\uB978 \uD3F0\uC5D0\uC11C\uB294 \uC5F4\uB9B0 \uBC29\uC744 \uB204\uB974\uAC70\uB098 \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694.":s.textContent="\uB450 \uD3F0 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uB294 \uC911\uC785\uB2C8\uB2E4\u2026";let r=Je("name"),o=Je("code"),a=()=>{let u=r.value.trim().slice(0,12);try{localStorage.setItem("faith-chess-name",u)}catch{}return u},c=u=>{Je("err").textContent=u},l=u=>async(...f)=>{va(),R.err="",c("");try{await u(...f)}catch(d){c("\uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."),console.warn(d)}},h=l(async u=>{let f=(typeof u=="string"?u:o.value).trim().toUpperCase();if(f.length!==4){c("\uBC29 \uCF54\uB4DC 4\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694.");return}if(i){if(!Jt.online)return c("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");Jt.use(R.lan),Jt.send({type:"join",code:f,name:a()})}else Jt.use(R.roomT),await R.roomT.join(f,a()),R.mode="waiting-join",c("\uBC29\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uC911\u2026")});if(Je("create").onclick=l(async()=>{if(i){if(!R.lan.online)return c("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");Jt.use(R.lan),Jt.send({type:"create",name:a()})}else Jt.use(R.roomT),await R.roomT.create(a())}),i&&(Je("quick").onclick=l(async()=>{if(!R.lan.online)return c("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");Jt.use(R.lan),Jt.send({type:"quick",name:a()})})),Je("bot").onclick=l(async()=>{Jt.use(new Dr).start(a()||"\uB098")}),Je("lobby").onsubmit=u=>{u.preventDefault(),h()},de==="artifact"&&t){let u=f=>{let d=Je("rooms");if(d){if(d.textContent="",!f.length){let g=document.createElement("div");g.className="empty",g.textContent="\uC544\uC9C1 \uC5F4\uB9B0 \uBC29\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",d.append(g);return}for(let g of f.slice(0,4)){let x=document.createElement("button");x.type="button",x.textContent=`${g.code} \xB7 ${g.name}`,x.onclick=()=>h(g.code),d.append(x)}}};t.onLobby=u,u(t.openRooms())}R.roomParam||r.focus({preventScroll:!0})}function Av(){js.innerHTML=`<form class="panel slim" id="lobby" autocomplete="off"><label for="name">\uC774\uB984</label><input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${ba(Kl())}" enterkeyhint="done"></form>`,Je("lobby").onsubmit=i=>{i.preventDefault(),Je("name").blur()},R.call.calling||oe.setLift(R.call.digits?.3:0),R.roomParam&&!R.call.autoDialed&&/^\d{4}$/.test(R.roomParam)&&(R.call.autoDialed=!0,setTimeout(()=>{wa()&&!R.call.digits&&!oe.busy&&oe.autoDial(R.roomParam)},600))}function Ra(i){R.grab&&(i==null||R.grab.pid===i)&&(clearTimeout(R.grab.timer),R.grab=null)}function Rv(i,t,e,n){Ra();let s={pid:e.pointerId,pieceId:t.id,sq:i,x:n.x,y:n.y,t0:e.timeStamp,t0p:performance.now(),armed:!1,timer:null};s.timer=setTimeout(()=>{s.armed=!0,Yt.select();try{navigator.vibrate?.(15)}catch{}},Fe.LONG_PRESS_MS),R.grab=s}var jl=()=>R.mode==="game"&&!R.call.pickup&&R.view?.status==="playing"&&!R.promo&&!R.settings&&R.view.pending?.kind!=="pick";Zn.addEventListener("pointerdown",i=>{if(va(),i.button!==0)return;R.lastPointerType=i.pointerType;let t=Br(i),e=R.pointers.size===0;R.pointers.set(i.pointerId,{x:t.x,y:t.y,moved:!1}),R.touchMax=Math.max(R.touchMax,R.pointers.size);try{Zn.setPointerCapture(i.pointerId)}catch{}if(e&&(rt.pressedId=rt.hit(t.x,t.y),R.btnPid=rt.pressedId?i.pointerId:null),de==="web"&&R.mode==="lobby"&&document.activeElement?.blur?.(),oe&&R.btnPid!==i.pointerId&&Sa()&&R.call.ringing&&pd(t,Pi)){vd();return}if(oe&&R.btnPid!==i.pointerId&&R.phonePid==null&&(wa()||Sa())&&pd(t,Pi)&&oe.pointerDown(Pi,t.x,t.y,i.timeStamp)){R.phonePid=i.pointerId;return}if(R.btnPid===i.pointerId||!jl())return;let n=Zt.pickSquare(t.x,t.y),s=Aa(n);s&&s.color!==Ta()&&!R.grab&&Rv(n,s,i,t)});Zn.addEventListener("pointermove",i=>{if(R.phonePid===i.pointerId){let n=Br(i);oe.pointerMove(Pi,n.x,n.y);return}let t=R.pointers.get(i.pointerId);if(!t)return;let e=Br(i);Math.hypot(e.x-t.x,e.y-t.y)>6&&(t.moved=!0,Ra(i.pointerId))});Zn.addEventListener("pointerup",i=>{if(R.phonePid===i.pointerId){R.pointers.delete(i.pointerId),R.phonePid=null,oe.pointerUp(i.timeStamp);return}let t=R.pointers.get(i.pointerId);if(R.pointers.delete(i.pointerId),!t)return;let e=Br(i),n=R.grab&&R.grab.pid===i.pointerId?R.grab:null;if(n&&(Ra(i.pointerId),i.timeStamp-n.t0>=Fe.LONG_PRESS_MS||n.armed)){let s=R.view?.pieces.find(r=>r.id===n.pieceId);s&&s.color!==Ta()&&jl()&&Jt.send({type:"erase",square:s.sq});return}if(R.btnPid===i.pointerId){let s=rt.pressedId;rt.pressedId=null,R.btnPid=null,s&&rt.hit(e.x,e.y)===s&&Lv(s);return}if(!(t.moved||R.settings)){if(R.mode==="title"){Qs();return}R.mode==="game"&&Cv(Zt.pickSquare(e.x,e.y))}});Zn.addEventListener("pointercancel",i=>{R.pointers.delete(i.pointerId),R.phonePid===i.pointerId&&(R.phonePid=null,oe.cancel()),R.btnPid===i.pointerId&&(rt.pressedId=null,R.btnPid=null),Ra(i.pointerId)});for(let i of["touchstart","touchmove","touchend","touchcancel"])Zn.addEventListener(i,t=>{t.cancelable&&t.preventDefault(),t.touches&&(R.touchMax=Math.max(R.touchMax,t.touches.length))},{passive:!1});document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("gesturechange",i=>i.preventDefault());Zn.addEventListener("contextmenu",i=>{if(i.preventDefault(),R.lastPointerType&&R.lastPointerType!=="mouse"||!jl())return;let t=Br(i),e=Zt.pickSquare(t.x,t.y),n=Aa(e);n&&n.color!==Ta()&&Jt.send({type:"erase",square:e})});function Cv(i){let t=R.view;if(!t||R.promo)return;if(i<0){R.sel=null,R.legal=[];return}let e=Aa(i);if(t.status==="playing"){if(R.sel!=null){let n=R.legal.find(s=>s.to===i);if(n){n.promotion?R.promo={from:n.from,to:n.to}:(Jt.send({type:"move",from:n.from,to:n.to}),R.sel=null,R.legal=[]);return}}if(e&&e.color===t.you&&t.turn===t.you){if(R.sel===i){R.sel=null,R.legal=[];return}R.sel=i,R.legal=$s(Sv(),i),Yt.select()}else R.sel=null,R.legal=[]}}function gd(i){R.settings=i,R.touchMax=0,R.mode==="lobby"&&(i?js.hidden=!0:Qs())}async function Pv(){let i=R.view?.code;if(!i)return;let t=ql(i),e=n=>{R.shareMsg={text:n,t:performance.now()}};if(navigator.share)try{await navigator.share({title:"\uBBFF\uC74C\uC758 \uCCB4\uC2A4",text:`\uBBFF\uC74C\uC758 \uCCB4\uC2A4 \uD55C \uD310! \uBC29 \uCF54\uB4DC ${i}`,url:t}),e("\uBCF4\uB0C8\uC2B5\uB2C8\uB2E4");return}catch(n){if(n?.name==="AbortError")return}try{await navigator.clipboard.writeText(t),e("\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4")}catch{e("\uC8FC\uC18C\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD558\uC138\uC694")}}async function Iv(){va(),R.err="",Fr();try{Jt.use(R.roomT),await R.roomT.create($l())}catch(i){console.warn(i),R.err="\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uD574 \uBCF4\uC138\uC694.",Yt.busy()}}function Lv(i){if(Yt.ui(),i==="settings")return gd(!0);if(i==="settings:close")return gd(!1);if(i.startsWith("th:")){let[,t,e]=i.split(":");Jl(yf(R.theme,t,Number(e)));return}if(i==="suspect")return Jt.send({type:"suspect"});if(i.startsWith("pick:"))return Jt.send({type:"pick",pieceType:i.slice(5)});if(i.startsWith("promo:")){Jt.send({type:"move",from:R.promo.from,to:R.promo.to,promotion:i.slice(6)}),R.promo=null,R.sel=null,R.legal=[];return}if(i==="resign"){R.confirmResign=!0;return}if(i==="resign:yes")return R.confirmResign=!1,Jt.send({type:"resign"});if(i==="resign:no"){R.confirmResign=!1;return}if(i==="rematch")return Jt.send({type:"rematch"});if(i==="share")return Pv();if(i==="qr"){R.call.qr=!0;return}if(i==="answer")return vd();if(i==="qr:close"){R.call.qr=!1;return}if(i==="call:create")return Iv();if(i==="phone:next")return yv();if(i==="call:bot"){Fr(),Jt.use(new Dr).start($l()||"\uB098");return}if(i==="call:clear"){R.call.calling&&(R.roomT?.close(),R.mode="lobby"),R.err="",Fr();return}(i==="leave"||i==="cancel-wait")&&(de==="web"&&(i==="cancel-wait"&&Yt.hangUp(),R.call.ringFx=0,R.call.ringing=!1,R.call.qr=!1),Jt.leave(),R.lan&&Jt.use(R.lan),R.view=null,Sd(),Zt.clearPieces(),Ad(),Qs())}function Ed(){let i=Pi;rt.ctx.clearRect(i.x,i.y,i.w,i.h),rt.box(i.x-1,i.y-1,i.w+2,i.h+2,rt.pal.accent),rt.box(i.x-2,i.y-2,i.w+4,i.h+4,"#000")}function wd(i,t,e,n,s){let r=rt.pal;rt.text(i,Mt/2,e,{font:9,align:"center",color:r.accent});let o=30,a=6,c=Math.round(Mt/2-(4*o+3*a)/2);for(let l=0;l<4;l++){let h=c+l*(o+a),u=l<t.length;rt.rect(h,e+12,o,30,"#000"),rt.box(h,e+12,o,30,u?r.accentHi:r.lineLo),u?rt.bigText(t[l],h+o/2,e+14,{scale:2,font:11,color:r.accentHi}):s&&l===t.length&&Math.floor(n/400)%2===0&&rt.rect(h+9,e+35,12,2,r.accent)}}function Td(){rt.dim(.78),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",Mt/2,8,{scale:2,font:14}),rt.button("settings",Mt-50,12,38,16,"\uC124\uC815",{font:9}),Ed()}function Dv(i){let t=performance.now()-R.call.ringFx;if(!R.call.ringFx||t>1700)return;let e=Math.floor(t/400)%2===0,n=e?Math.round(Math.sin(i/18)*2):0;rt.bigText("\uB530\uB974\uB989!",Mt/2+n,Pi.y+8,{scale:2,font:14,color:e?ie.gold:rt.pal.ink})}function Uv(i){let t=rt.pal,e=R.call;Td(),oe.setCard(e.calling?"\uAC70\uB294 \uC911":"\uC0C1\uB300 \uBC88\uD638",e.digits.padEnd(4,"\xB7")),wd("\uC0C1\uB300 \uBC88\uD638",e.digits,350,i,!e.calling),e.digits&&!R.settings&&rt.button("call:clear",Mt-46,364,36,24,"\uB04A\uAE30",{font:9});let n,s=t.dim;R.roomT?R.err?(n=R.err,s=ie.warn):e.calling?(n="\uB69C\uB974\uB974\u2026 \uAC70\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),s=t.accentHi):e.digits?n=`\uB098\uBA38\uC9C0 ${4-e.digits.length}\uC790\uB9AC\uB97C \uAC70\uC138\uC694`:n=oe.kind==="rotary"?"\uC0C1\uB300 \uBC88\uD638 4\uC790\uB9AC\uB97C \uB2E4\uC774\uC5BC\uB85C \uAC70\uC138\uC694. \uAD6C\uBA4D\uC744 \uBA48\uCDA4\uC1E0\uAE4C\uC9C0 \uB3CC\uB824 \uB193\uAC70\uB098 \uD1A1 \uB204\uB974\uC138\uC694":"\uC0C1\uB300 \uBC88\uD638 4\uC790\uB9AC\uB97C \uBC84\uD2BC\uC73C\uB85C \uB204\uB974\uC138\uC694":(n="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",s=ie.warn),rt.lines(n,Mt-24,9).slice(0,2).forEach((o,a)=>rt.text(o,Mt/2,398+a*11,{font:9,align:"center",color:s})),rt.button("call:create",16,422,128,26,"\uB0B4 \uBC88\uD638 \uB9CC\uB4E4\uAE30",{style:"primary",font:11,disabled:!R.roomT||e.calling}),rt.button("call:bot",150,422,104,26,"\uBD07\uACFC \uC5F0\uC2B5",{font:11,disabled:e.calling}),rt.button("phone:next",Mt/2-60,453,120,16,`\uC804\uD654\uAE30: ${Bl[oe.kind]} \u25B8`,{font:9,disabled:!Yl()})}function Nv(i){let t=R.view,e=rt.pal;Td(),oe.setCard("\uB0B4 \uBC88\uD638",t.code),Dv(i),wd("\uB0B4 \uBC88\uD638",t.code,350,i,!1);let n=R.call.ringing,s=R.call.hostHint&&performance.now()-R.call.hostHint<2600,r,o=e.dim;Jt.online?n?(r=Math.floor(i/400)%2?"\uB530\uB974\uB989! \uC804\uD654\uAE30\uB97C \uB20C\uB7EC \uBC1B\uC73C\uC138\uC694":"\uB530\uB974\uB989! \uC804\uD654\uAC00 \uC654\uC2B5\uB2C8\uB2E4",o=ie.gold):s?(r="\uC5EC\uAE30\uC11C\uB294 \uAC78 \uC218 \uC5C6\uC5B4\uC694. \uB0B4 \uBC88\uD638\uB97C \uC0C1\uB300\uC5D0\uAC8C \uC54C\uB824 \uC8FC\uC138\uC694",o=e.accentHi):r="\uC774 \uBC88\uD638\uB85C \uC804\uD654\uAC00 \uC624\uBA74 \uC6B8\uB9BD\uB2C8\uB2E4"+".".repeat(Math.floor(i/400)%4):(r="\u25CB \uAD50\uD658\uAD6D\uACFC \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",o=ie.warn),rt.text(r,Mt/2,398,{font:9,align:"center",color:o}),n?rt.button("answer",16,414,176,26,"\uBC1B\uAE30 (\uC218\uD654\uAE30 \uB4E4\uAE30)",{style:"primary",font:11}):(rt.button("share",16,414,120,26,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{style:"primary",font:11}),rt.button("qr",142,414,50,26,"QR",{font:11})),rt.button("cancel-wait",198,414,56,26,"\uB04A\uAE30",{font:11});let a=R.shareMsg;if(a&&performance.now()-a.t<3e3?rt.text(a.text,Mt/2,443,{font:9,align:"center",color:e.accentHi}):rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,Mt/2,443,{font:9,align:"center",color:e.dim}),rt.button("phone:next",Mt/2-60,455,120,16,`\uC804\uD654\uAE30: ${Bl[oe.kind]} \u25B8`,{font:9,disabled:!Yl()}),R.call.qr){rt.dim(.8);let c=ql(t.code);rt.panel(30,110,Mt-60,250),rt.text("\uCE74\uBA54\uB77C\uB85C \uCC0D\uC73C\uBA74 \uBC14\uB85C \uAC78\uB9BD\uB2C8\uB2E4",Mt/2,122,{font:9,align:"center",color:e.accent});let l=rt.qr(c,0,-9999,1)-2,h=Math.max(2,Math.floor(180/(l+2))),u=(l+2)*h;rt.qr(c,Math.round(Mt/2-u/2),138,h),rt.button("qr:close",Mt/2-40,330,80,22,"\uB2EB\uAE30",{font:11})}}function Ov(i){rt.rect(0,0,Mt,fn,"#000"),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",Mt/2,8,{scale:2,font:14}),Ed(),rt.bigText("\uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4",Mt/2,362,{scale:2,font:11,color:ie.gold});let t=R.view;t&&rt.text(`${t.names.w||"?"}(\uBC31)  vs  ${t.names.b||"?"}(\uD751)`,Mt/2,400,{font:9,align:"center",color:rt.pal.dim})}function Fv(){let i=rt.pal;if(rt.dim(.25),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",Mt/2,18,{scale:2,font:14}),rt.button("settings",Mt-50,12,38,16,"\uC124\uC815",{font:9}),de==="lan"){rt.plaque(40,330,Mt-80,136),rt.text("\uC0C1\uB300 \uC811\uC18D \uC8FC\uC18C",Mt/2,340,{font:9,color:i.accent,align:"center"});let t=bd(),e=rt.qr(t,Mt/2-33,352,2);rt.text(t.replace(/^https?:\/\//,"").replace(/\/$/,""),Mt/2,356+e,{font:9,align:"center"})}rt.text(Jt.online||R.roomT?"\u25CF \uC5F0\uACB0\uB428":"\u25CB \uC5F0\uACB0 \uC911\u2026",14,462,{font:9,color:Jt.online||R.roomT?ie.green:i.dim})}function Bv(i){if(de==="web")return Nv(i);let t=R.view,e=rt.pal;if(rt.dim(.35),rt.vignette(),rt.frame(),rt.plaque(20,60,Mt-40,340),rt.text("\uC0C1\uB300\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),Mt/2,74,{font:11,align:"center",color:e.dim}),rt.text("\uBC29 \uCF54\uB4DC",Mt/2,100,{font:9,align:"center",color:e.accent}),rt.letter(t.code,Mt/2,112,{scale:3,font:14}),de==="lan"){let n=`${bd()}?room=${t.code}`,s=rt.qr(n,Mt/2-41,180,2);rt.text(n.replace(/^https?:\/\//,""),Mt/2,184+s,{font:9,align:"center"})}else if(de==="web"){let n=ql(t.code),s=rt.qr(n,Mt/2-41,166,2);rt.text(n.replace(/^https?:\/\//,""),Mt/2,170+s,{font:9,align:"center"}),rt.button("share",Mt/2-60,192+s,120,24,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{font:11,style:"primary"});let r=R.shareMsg;r&&performance.now()-r.t<3e3?rt.text(r.text,Mt/2,222+s,{font:9,align:"center",color:e.accentHi}):rt.text("\uAC19\uC774 \uC788\uC73C\uBA74 QR\uC744 \uCC0D\uC5B4\uB3C4 \uB429\uB2C8\uB2E4",Mt/2,222+s,{font:9,align:"center",color:e.dim}),Jt.online||rt.text("\u25CB \uC5F0\uACB0 \uC11C\uBC84\uC640 \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",Mt/2,312,{font:9,align:"center",color:ie.warn})}else["\uB2E4\uB978 \uD3F0\uC5D0\uC11C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uACE0",'"\uC5F4\uB9B0 \uBC29"\uC5D0\uC11C \uC774 \uBC29\uC744 \uB204\uB974\uAC70\uB098',"\uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694."].forEach((s,r)=>rt.text(s,Mt/2,200+r*14,{font:9,align:"center"})),rt.text("\uB450 \uD3F0 \uBAA8\uB450 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD574\uC57C \uD569\uB2C8\uB2E4",Mt/2,262,{font:9,align:"center",color:e.dim});rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,Mt/2,330,{font:9,color:e.dim,align:"center"}),rt.button("cancel-wait",Mt/2-40,352,80,22,"\uCDE8\uC18C",{font:11})}function Ad(){let i=ua(),t=[];i.board.forEach((e,n)=>{e&&t.push({sq:n,id:e.id,type:e.type,color:e.color,shield:!1})}),Zt.sync(t,null)}var xd=performance.now();function Rd(i){let t=Math.min(.1,(i-xd)/1e3);xd=i,R.mode==="game"&&R.view?Zt.setHighlights(ud(R.view,R,i)):Zt.setHighlights([]),Zt.setSelected(R.mode==="game"&&R.sel!=null?Aa(R.sel)?.id:null);let e=R.view;if(R.mode==="game"&&e){let n=R.bubble&&performance.now()-R.bubble.t0<1600,s=R.cheer?performance.now()-R.cheer.t0:-1/0,r=!n&&s>=-250&&s<md+450,o=n?R.bubble.by:r?R.cheer.by:e.status==="over"&&e.result?.winner||e.turn;Zt.kingView={rect:Vl(),shown:o,mode:n?"shout":r&&s>=0&&s<md?"cheer":"turn"}}else Zt.kingView=null;R.__freezeKing&&(Zt.kingView=R.__freezeKing),Zt.titleView=R.mode==="title",R.call.pickup&&performance.now()-R.call.pickup>950&&(R.call.pickup=0,Zt.flash=1),Zt.phoneView=de==="web"&&(["lobby","waiting-join","waiting"].includes(R.mode)||R.call.pickup)?{rect:Pi}:null,oe&&(oe.enabled=wa()||Sa()&&!R.call.ringing),R.call.ringing&&R.mode==="waiting"&&performance.now()>=R.call.ringNext&&(oe?.ring(1.7),Yt.ring(),R.call.ringFx=performance.now(),R.call.ringNext=R.call.ringFx+2e3),Zt.render(t),rt.begin(),R.mode==="title"?hd(rt,i,{online:de==="lan"?Jt.online:null,tagline:de==="lan"?void 0:"\uC628\uB77C\uC778 \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694",text3d:!!Zt.titleStage?.fontId}):R.call.pickup?Ov(i):(R.mode==="lobby"||R.mode==="waiting-join")&&de==="web"?Uv(i):R.mode==="lobby"||R.mode==="waiting-join"?Fv():R.mode==="waiting"&&R.view?Bv(i):R.mode==="game"&&R.view?fd(rt,Zt,R.view,{...R,online:Jt.online},i,bv()):R.mode==="boot"&&(rt.rect(0,0,Mt,fn,"#000"),rt.text("\uBD88\uB7EC\uC624\uB294 \uC911\u2026",Mt/2,fn/2-6,{align:"center",color:rt.pal.dim})),R.settings&&(dd(rt,R.theme),rt.text(`\uD130\uCE58 \uD655\uC778: \uB3D9\uC2DC\uC5D0 \uC190\uAC00\uB77D ${R.touchMax}\uAC1C \uC778\uC2DD`,Mt/2,449,{font:9,align:"center",color:R.touchMax>=2?ie.cyan:rt.pal.dim})),Or.draw(),requestAnimationFrame(Rd)}var kv=Rl;async function Cd(i){if(Zt.titleStage||(Zt.titleStage=new Xs),i==="hud"){Zt.titleStage.setFont(null,null);return}i=Rl;try{let t=await Promise.race([fetch(`assets/title3d/${i}.json`).then(e=>e.json()),new Promise((e,n)=>setTimeout(()=>n(new Error("timeout")),4e3))]);Zt.titleStage.setFont(i,t)}catch(t){console.warn("\uD0C0\uC774\uD2C0 \uAE00\uAF34",i,t)}}async function Hv(){requestAnimationFrame(Rd);try{await Promise.race([Promise.all(Of.map(i=>document.fonts.load(i))),new Promise(i=>setTimeout(i,3e3))])}catch{}if(de==="lan")try{R.info=await(await fetch("/api/info")).json()}catch{}Zt.theme=R.theme,await Zt.init(R.info?.textures||[]),Jl(R.theme),Ad(),await Cd(new URLSearchParams(location.search).get("titlefont")||(/[#&]tf=([a-z]+)/.exec(location.hash)||[])[1]||kv),R.mode="title",de==="lan"?(R.lan=Jt.use(new la),R.lan.connect(),R.roomParam&&!R.lan.token&&Qs()):de==="web"?R.roomT=Ur.available()?new Ur:null:pa.open().then(i=>{R.roomT=i,R.roomChecked=!0,R.mode==="lobby"&&Qs()})}Hv();window.__dbg={app:R,scene:Zt,hub:Jt,presenter:Or,startCheer:Ea,get phone(){return oe},setPhone:Xl,loadTitleFont:Cd,PHONE_RECT:Pi,squareToScreen:i=>Zt.squareToScreen(i),applyTheme:Jl};
