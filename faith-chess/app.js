var Kl="160";var ad=0,Yc=1,ld=2;var Eu=1,cd=2,Zn=3,di=0,cn=1,Ve=2;var hi=0,ms=1,Ni=2,$c=3,Zc=4,hd=5,Pi=100,ud=101,fd=102,Jc=103,Kc=104,dd=200,pd=201,md=202,gd=203,ll=204,cl=205,xd=206,_d=207,yd=208,vd=209,Md=210,bd=211,Sd=212,Ed=213,wd=214,Td=0,Ad=1,Rd=2,ho=3,Cd=4,Pd=5,Id=6,Ld=7,Hi=0,_r=1,Dd=2,Bn=0,Ud=1,Nd=2,Od=3,Fd=4,Bd=5,kd=6;var wu=300,_s=301,ys=302,hl=303,ul=304,Ho=306,er=1e3,In=1001,fl=1002,Ee=1003,jc=1004;var Ta=1005;var ln=1006,zd=1007;var nr=1008;var ui=1009,Hd=1010,Vd=1011,jl=1012,Tu=1013,li=1014,ci=1015,ir=1016,Au=1017,Ru=1018,Li=1020,Gd=1021,Ln=1023,Wd=1024,qd=1025,Di=1026,vs=1027,Xd=1028,Cu=1029,Yd=1030,Pu=1031,Iu=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,Qc=35840,th=35841,eh=35842,nh=35843,Lu=36196,ih=37492,sh=37496,rh=37808,oh=37809,ah=37810,lh=37811,ch=37812,hh=37813,uh=37814,fh=37815,dh=37816,ph=37817,mh=37818,gh=37819,xh=37820,_h=37821,Ia=36492,yh=36494,vh=36495,$d=36283,Mh=36284,bh=36285,Sh=36286;var uo=2300,fo=2301,La=2302,Eh=2400,wh=2401,Th=2402;var Du=3e3,Ui=3001,Zd=3200,Jd=3201,Ql=0,Kd=1,Mn="",ge="srgb",Kn="srgb-linear",tc="display-p3",Vo="display-p3-linear",po="linear",me="srgb",mo="rec709",go="p3";var Zi=7680;var Ah=519,jd=512,Qd=513,tp=514,Uu=515,ep=516,np=517,ip=518,sp=519,Rh=35044;var Ch="300 es",dl=1035,Jn=2e3,xo=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Da=Math.PI/180,pl=180/Math.PI;function Is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function rp(i,t){return(i%t+t)%t}function Ua(i,t,e){return(1-e)*i+e*t}function Ph(i){return(i&i-1)===0&&i!==0}function ml(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var j=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],A=s[2],w=s[5],R=s[8];return r[0]=o*x+a*y+l*A,r[3]=o*m+a*_+l*w,r[6]=o*p+a*v+l*R,r[1]=c*x+h*y+u*A,r[4]=c*m+h*_+u*w,r[7]=c*p+h*v+u*R,r[2]=f*x+d*y+g*A,r[5]=f*m+d*_+g*w,r[8]=f*p+d*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Na.makeScale(t,e)),this}rotate(t){return this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Na=new Jt;function Nu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function op(){let i=_o("canvas");return i.style.display="block",i}var Ih={};function Ks(i){i in Ih||(Ih[i]=!0,console.warn(i))}var Lh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dh=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Or={[Kn]:{transfer:po,primaries:mo,toReference:i=>i,fromReference:i=>i},[ge]:{transfer:me,primaries:mo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vo]:{transfer:po,primaries:go,toReference:i=>i.applyMatrix3(Dh),fromReference:i=>i.applyMatrix3(Lh)},[tc]:{transfer:me,primaries:go,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Dh),fromReference:i=>i.applyMatrix3(Lh).convertLinearToSRGB()}},ap=new Set([Kn,Vo]),le={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ap.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Or[t].toReference,s=Or[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Or[i].primaries},getTransfer:function(i){return i===Mn?po:Or[i].transfer}};function gs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,yo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=_o("canvas")),Ji.width=t.width,Ji.height=t.height;let n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_o("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gs(e[n]/255)*255):e[n]=gs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lp=0,vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Is(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cp=0,Sn=class i extends pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,s=In,r=ln,o=nr,a=Ln,l=ui,c=i.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Is(),this.name="",this.source=new vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ui?ge:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Ui:Du}set encoding(t){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ui?ge:Mn}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=wu;Sn.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,A=(p+1)/2,w=(h+f)/4,R=(u+x)/4,D=(g+m)/4;return _>v&&_>A?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=R/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=D/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=D/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gl=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ui?ge:Mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mo=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xl=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let A=Math.sqrt(_),w=Math.atan2(A,p*y);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}let v=a*y;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ba=new C,Uh=new kn,Oi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),Br.subVectors(this.max,Xs),Ki.subVectors(t.a,Xs),ji.subVectors(t.b,Xs),Qi.subVectors(t.c,Xs),ii.subVectors(ji,Ki),si.subVectors(Qi,ji),wi.subVectors(Ki,Qi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-wi.z,wi.y,ii.z,0,-ii.x,si.z,0,-si.x,wi.z,0,-wi.x,-ii.y,ii.x,0,-si.y,si.x,0,-wi.y,wi.x,0];return!ka(e,Ki,ji,Qi,Br)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Ki,ji,Qi,Br))?!1:(kr.crossVectors(ii,si),e=[kr.x,kr.y,kr.z],ka(e,Ki,ji,Qi,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new C,new C,new C,new C,new C,new C,new C,new C],An=new C,Fr=new Oi,Ki=new C,ji=new C,Qi=new C,ii=new C,si=new C,wi=new C,Xs=new C,Br=new C,kr=new C,Ti=new C;function ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);let a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var hp=new Oi,Ys=new C,za=new C,Ms=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(za)),this.expandByPoint(Ys.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new C,Ha=new C,zr=new C,ri=new C,Va=new C,Hr=new C,Ga=new C,sr=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ha.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Ha);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zr),a=ri.dot(this.direction),l=-ri.dot(zr),c=ri.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ha).addScaledVector(zr,f),d}intersectSphere(t,e){qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){Va.subVectors(e,t),Hr.subVectors(n,t),Ga.crossVectors(Va,Hr);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);let l=a*this.direction.dot(Hr.crossVectors(ri,Hr));if(l<0)return null;let c=a*this.direction.dot(Va.cross(ri));if(c<0||l+c>o)return null;let h=-a*ri.dot(Ga);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(up,t,fp)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),oi.crossVectors(n,fn),oi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),oi.crossVectors(n,fn)),oi.normalize(),Vr.crossVectors(fn,oi),s[0]=oi.x,s[4]=Vr.x,s[8]=fn.x,s[1]=oi.y,s[5]=Vr.y,s[9]=fn.y,s[2]=oi.z,s[6]=Vr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],A=n[15],w=s[0],R=s[4],D=s[8],b=s[12],S=s[1],N=s[5],G=s[9],W=s[13],L=s[2],F=s[6],H=s[10],J=s[14],Z=s[3],X=s[7],nt=s[11],it=s[15];return r[0]=o*w+a*S+l*L+c*Z,r[4]=o*R+a*N+l*F+c*X,r[8]=o*D+a*G+l*H+c*nt,r[12]=o*b+a*W+l*J+c*it,r[1]=h*w+u*S+f*L+d*Z,r[5]=h*R+u*N+f*F+d*X,r[9]=h*D+u*G+f*H+d*nt,r[13]=h*b+u*W+f*J+d*it,r[2]=g*w+x*S+m*L+p*Z,r[6]=g*R+x*N+m*F+p*X,r[10]=g*D+x*G+m*H+p*nt,r[14]=g*b+x*W+m*J+p*it,r[3]=y*w+_*S+v*L+A*Z,r[7]=y*R+_*N+v*F+A*X,r[11]=y*D+_*G+v*H+A*nt,r[15]=y*b+_*W+v*J+A*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,_=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,A=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,w=e*y+n*_+s*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=y*R,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*R,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*R,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*R,t[4]=_*R,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=v*R,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*R,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*R,t[12]=A*R,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=l*c,_=l*h,v=l*u,A=n.x,w=n.y,R=n.z;return s[0]=(1-(x+p))*A,s[1]=(d+v)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+_)*R,s[9]=(m-y)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ts.set(s[0],s[1],s[2]).length(),o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);let c=1/r,h=1/o,u=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,e.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===Jn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,g,x;if(a===Jn)g=(o+r)*u,x=-2*u;else if(a===xo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ts=new C,Rn=new xe,up=new C(0,0,0),fp=new C(1,1,1),oi=new C,Vr=new C,fn=new C,Nh=new xe,Oh=new kn,bo=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bo.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dp=0,Fh=new C,es=new kn,Xn=new xe,Gr=new C,$s=new C,pp=new C,mp=new kn,Bh=new C(1,0,0),kh=new C(0,1,0),zh=new C(0,0,1),gp={type:"added"},xp={type:"removed"},je=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new bo,n=new kn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Jt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gr.copy(t):Gr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt($s,Gr,this.up):Xn.lookAt(Gr,$s,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Xn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(gp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};je.DEFAULT_UP=new C(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new C,Yn=new C,Wa=new C,$n=new C,ns=new C,is=new C,Hh=new C,qa=new C,Xa=new C,Ya=new C,Wr=!1,us=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Yn.subVectors(n,e),Wa.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(Yn),l=Cn.dot(Wa),c=Yn.dot(Yn),h=Yn.dot(Wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(t,e,n,s,r,o,a,l){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Yn.subVectors(t,e),Cn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Cn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ns.subVectors(s,n),is.subVectors(r,n),qa.subVectors(t,n);let l=ns.dot(qa),c=is.dot(qa);if(l<=0&&c<=0)return e.copy(n);Xa.subVectors(t,s);let h=ns.dot(Xa),u=is.dot(Xa);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ns,o);Ya.subVectors(t,r);let d=ns.dot(Ya),g=is.dot(Ya);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(is,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Hh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Hh,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},qr={h:0,s:0,l:0};function $a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=rp(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$a(o,r,t+1/3),this.g=$a(o,r,t),this.b=$a(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}copyLinearToSRGB(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return le.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Xe(Ke.r*255,0,255))*65536+Math.round(Xe(Ke.g*255,0,255))*256+Math.round(Xe(Ke.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=ge){le.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(qr);let n=Ua(ai.h,qr.h,e),s=Ua(ai.s,qr.s,e),r=Ua(ai.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Tt;Tt.NAMES=Ou;var _p=0,jn=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=ms,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ll&&(n.blendSrc=this.blendSrc),this.blendDst!==cl&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ve=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new C,Xr=new j,bn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rh&&(t.usage=this.usage),t}};var So=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Eo=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Lt=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var yp=0,vn=new xe,Za=new je,ss=new C,dn=new Oi,Zs=new Oi,He=new C,ce=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nu(t)?Eo:So)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(dn.min,Zs.min),dn.expandByPoint(He),He.addVectors(dn.max,Zs.max),dn.expandByPoint(He)):(dn.expandByPoint(Zs.min),dn.expandByPoint(Zs.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(t,c),He.add(ss)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new C,h[S]=new C;let u=new C,f=new C,d=new C,g=new j,x=new j,m=new j,p=new C,y=new C;function _(S,N,G){u.fromArray(s,S*3),f.fromArray(s,N*3),d.fromArray(s,G*3),g.fromArray(o,S*2),x.fromArray(o,N*2),m.fromArray(o,G*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let W=1/(x.x*m.y-m.x*x.y);isFinite(W)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(W),y.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(W),c[S].add(p),c[N].add(p),c[G].add(p),h[S].add(y),h[N].add(y),h[G].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let S=0,N=v.length;S<N;++S){let G=v[S],W=G.start,L=G.count;for(let F=W,H=W+L;F<H;F+=3)_(n[F+0],n[F+1],n[F+2])}let A=new C,w=new C,R=new C,D=new C;function b(S){R.fromArray(r,S*3),D.copy(R);let N=c[S];A.copy(N),A.sub(R.multiplyScalar(R.dot(N))).normalize(),w.crossVectors(D,N);let W=w.dot(h[S])<0?-1:1;l[S*4]=A.x,l[S*4+1]=A.y,l[S*4+2]=A.z,l[S*4+3]=W}for(let S=0,N=v.length;S<N;++S){let G=v[S],W=G.start,L=G.count;for(let F=W,H=W+L;F<H;F+=3)b(n[F+0]),b(n[F+1]),b(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new bn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vh=new xe,Ai=new sr,Yr=new Ms,Gh=new C,rs=new C,os=new C,as=new C,Ja=new C,$r=new C,Zr=new j,Jr=new j,Kr=new j,Wh=new C,qh=new C,Xh=new C,jr=new C,Qr=new C,Ht=class extends je{constructor(t=new ce,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ja.fromBufferAttribute(u,t),o?$r.addScaledVector(Ja,h):$r.addScaledVector(Ja.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Yr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Yr,Gh)===null||Ai.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Vh.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,A=_;v<A;v+=3){let w=a.getX(v),R=a.getX(v+1),D=a.getX(v+2);s=to(this,p,t,n,c,h,u,w,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=to(this,o,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,A=_;v<A;v+=3){let w=v,R=v+1,D=v+2;s=to(this,p,t,n,c,h,u,w,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,v=m+2;s=to(this,o,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function vp(i,t,e,n,s,r,o,a){let l;if(t.side===cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===di,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:i}}function to(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,rs),i.getVertexPosition(l,os),i.getVertexPosition(c,as);let h=vp(i,t,e,n,rs,os,as,jr);if(h){s&&(Zr.fromBufferAttribute(s,a),Jr.fromBufferAttribute(s,l),Kr.fromBufferAttribute(s,c),h.uv=us.getInterpolation(jr,rs,os,as,Zr,Jr,Kr,new j)),r&&(Zr.fromBufferAttribute(r,a),Jr.fromBufferAttribute(r,l),Kr.fromBufferAttribute(r,c),h.uv1=us.getInterpolation(jr,rs,os,as,Zr,Jr,Kr,new j),h.uv2=h.uv1),o&&(Wh.fromBufferAttribute(o,a),qh.fromBufferAttribute(o,l),Xh.fromBufferAttribute(o,c),h.normal=us.getInterpolation(jr,rs,os,as,Wh,qh,Xh,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};us.getNormal(rs,os,as,u.normal),h.face=u}return h}var oe=class i extends ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function g(x,m,p,y,_,v,A,w,R,D,b){let S=v/R,N=A/D,G=v/2,W=A/2,L=w/2,F=R+1,H=D+1,J=0,Z=0,X=new C;for(let nt=0;nt<H;nt++){let it=nt*N-W;for(let dt=0;dt<F;dt++){let q=dt*S-G;X[x]=q*y,X[m]=it*_,X[p]=L,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(dt/R),u.push(1-nt/D),J+=1}}for(let nt=0;nt<D;nt++)for(let it=0;it<R;it++){let dt=f+it+F*nt,q=f+it+F*(nt+1),Q=f+(it+1)+F*(nt+1),pt=f+(it+1)+F*nt;l.push(dt,q,pt),l.push(q,Q,pt),Z+=6}a.addGroup(d,Z,b),d+=Z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function Mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fu(i){return i.getRenderTarget()===null?i.outputColorSpace:le.workingColorSpace}var bp={clone:bs,merge:nn},Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wo=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ce=class extends wo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Da*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,_l=class extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new Ce(ls,cs,t,e);r.layers=this.layers,this.add(r);let o=new Ce(ls,cs,t,e);o.layers=this.layers,this.add(o);let a=new Ce(ls,cs,t,e);a.layers=this.layers,this.add(a);let l=new Ce(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new Ce(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ss=class extends Sn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yl=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ui?ge:Mn),this.texture=new Ss(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oe(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:hi});r.uniforms.tEquirect.value=e;let o=new Ht(s,r),a=e.minFilter;return e.minFilter===nr&&(e.minFilter=ln),new _l(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ka=new C,wp=new C,Tp=new Jt,Pn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ka.subVectors(n,e).cross(wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tp.getNormalMatrix(t),s=this.coplanarPoint(Ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new Ms,eo=new C,or=class{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+y).normalize(),n[3].setComponents(l-o,f-h,m-g,v-y).normalize(),n[4].setComponents(l-a,f-u,m-x,v-_).normalize(),e===Jn)n[5].setComponents(l+a,f+u,m+x,v+_).normalize();else if(e===xo)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(eo.x=s.normal.x>0?t.max.x:t.min.x,eo.y=s.normal.y>0?t.max.y:t.min.y,eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ap(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Fi=class i extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let _=0;_<c;_++){let v=_*u-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,v=y+c*(p+1),A=y+1+c*(p+1),w=y+1+c*p;d.push(_,v,w),d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`
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
}`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,Am=`struct PhysicalMaterial {
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
}`,N0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
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
}`,z0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,K0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define TOON
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
}`,tg=`#define TOON
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
}`,eg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Ip,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Op,batching_vertex:Fp,begin_vertex:Bp,beginnormal_vertex:kp,bsdfs:zp,iridescence_fragment:Hp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Xp,color_fragment:Yp,color_pars_fragment:$p,color_pars_vertex:Zp,color_vertex:Jp,common:Kp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:om,envmap_common_pars_fragment:am,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:Mm,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:fm,fog_fragment:dm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_fragment:gm,lightmap_pars_fragment:xm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:ym,lights_pars_begin:vm,lights_toon_fragment:bm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Em,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Pm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Um,map_fragment:Nm,map_pars_fragment:Om,map_particle_fragment:Fm,map_particle_pars_fragment:Bm,metalnessmap_fragment:km,metalnessmap_pars_fragment:zm,morphcolor_vertex:Hm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Wm,normal_fragment_begin:qm,normal_fragment_maps:Xm,normal_pars_fragment:Ym,normal_pars_vertex:$m,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:f0,skinbase_vertex:d0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:x0,specularmap_pars_fragment:_0,tonemapping_fragment:y0,tonemapping_pars_fragment:v0,transmission_fragment:M0,transmission_pars_fragment:b0,uv_pars_fragment:S0,uv_pars_vertex:E0,uv_vertex:w0,worldpos_vertex:T0,background_vert:A0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:P0,cube_vert:I0,cube_frag:L0,depth_vert:D0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:O0,equirect_vert:F0,equirect_frag:B0,linedashed_vert:k0,linedashed_frag:z0,meshbasic_vert:H0,meshbasic_frag:V0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:q0,meshmatcap_frag:X0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:K0,meshphysical_frag:j0,meshtoon_vert:Q0,meshtoon_frag:tg,points_vert:eg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:og},ct={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Fn={basic:{uniforms:nn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:nn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:nn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:nn([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:nn([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:nn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:nn([ct.points,ct.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:nn([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:nn([ct.common,ct.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:nn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:nn([ct.sprite,ct.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:nn([ct.common,ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:nn([ct.lights,ct.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Fn.physical={uniforms:nn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var no={r:0,b:0,g:0};function ag(i,t,e,n,s,r,o){let a=new Tt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),y=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ho)?(h===void 0&&(h=new Ht(new oe(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:bs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=le.getTransfer(_.colorSpace)!==me,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ht(new Fi(2,2),new Qn({name:"BackgroundMaterial",uniforms:bs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=le.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(no,Fu(i)),n.buffers.color.setClear(no.r,no.g,no.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function lg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,F,H,J,Z){let X=!1;if(o){let nt=x(J,H,F);c!==nt&&(c=nt,d(c.object)),X=p(L,J,H,Z),X&&y(L,J,H,Z)}else{let nt=F.wireframe===!0;(c.geometry!==J.id||c.program!==H.id||c.wireframe!==nt)&&(c.geometry=J.id,c.program=H.id,c.wireframe=nt,X=!0)}Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,D(L,F,H,J),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,F,H){let J=H.wireframe===!0,Z=a[L.id];Z===void 0&&(Z={},a[L.id]=Z);let X=Z[F.id];X===void 0&&(X={},Z[F.id]=X);let nt=X[J];return nt===void 0&&(nt=m(f()),X[J]=nt),nt}function m(L){let F=[],H=[],J=[];for(let Z=0;Z<s;Z++)F[Z]=0,H[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:J,object:L,attributes:{},index:null}}function p(L,F,H,J){let Z=c.attributes,X=F.attributes,nt=0,it=H.getAttributes();for(let dt in it)if(it[dt].location>=0){let Q=Z[dt],pt=X[dt];if(pt===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),Q===void 0||Q.attribute!==pt||pt&&Q.data!==pt.data)return!0;nt++}return c.attributesNum!==nt||c.index!==J}function y(L,F,H,J){let Z={},X=F.attributes,nt=0,it=H.getAttributes();for(let dt in it)if(it[dt].location>=0){let Q=X[dt];Q===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let pt={};pt.attribute=Q,Q&&Q.data&&(pt.data=Q.data),Z[dt]=pt,nt++}c.attributes=Z,c.attributesNum=nt,c.index=J}function _(){let L=c.newAttributes;for(let F=0,H=L.length;F<H;F++)L[F]=0}function v(L){A(L,0)}function A(L,F){let H=c.newAttributes,J=c.enabledAttributes,Z=c.attributeDivisors;H[L]=1,J[L]===0&&(i.enableVertexAttribArray(L),J[L]=1),Z[L]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),Z[L]=F)}function w(){let L=c.newAttributes,F=c.enabledAttributes;for(let H=0,J=F.length;H<J;H++)F[H]!==L[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function R(L,F,H,J,Z,X,nt){nt===!0?i.vertexAttribIPointer(L,F,H,Z,X):i.vertexAttribPointer(L,F,H,J,Z,X)}function D(L,F,H,J){if(n.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let Z=J.attributes,X=H.getAttributes(),nt=F.defaultAttributeValues;for(let it in X){let dt=X[it];if(dt.location>=0){let q=Z[it];if(q===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let Q=q.normalized,pt=q.itemSize,Mt=e.get(q);if(Mt===void 0)continue;let xt=Mt.buffer,Dt=Mt.type,kt=Mt.bytesPerElement,bt=n.isWebGL2===!0&&(Dt===i.INT||Dt===i.UNSIGNED_INT||q.gpuType===Tu);if(q.isInterleavedBufferAttribute){let Ft=q.data,I=Ft.stride,at=q.offset;if(Ft.isInstancedInterleavedBuffer){for(let $=0;$<dt.locationSize;$++)A(dt.location+$,Ft.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let $=0;$<dt.locationSize;$++)v(dt.location+$);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let $=0;$<dt.locationSize;$++)R(dt.location+$,pt/dt.locationSize,Dt,Q,I*kt,(at+pt/dt.locationSize*$)*kt,bt)}else{if(q.isInstancedBufferAttribute){for(let Ft=0;Ft<dt.locationSize;Ft++)A(dt.location+Ft,q.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ft=0;Ft<dt.locationSize;Ft++)v(dt.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Ft=0;Ft<dt.locationSize;Ft++)R(dt.location+Ft,pt/dt.locationSize,Dt,Q,pt*kt,pt/dt.locationSize*Ft*kt,bt)}}else if(nt!==void 0){let Q=nt[it];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(dt.location,Q);break;case 3:i.vertexAttrib3fv(dt.location,Q);break;case 4:i.vertexAttrib4fv(dt.location,Q);break;default:i.vertexAttrib1fv(dt.location,Q)}}}}w()}function b(){G();for(let L in a){let F=a[L];for(let H in F){let J=F[H];for(let Z in J)g(J[Z].object),delete J[Z];delete F[H]}delete a[L]}}function S(L){if(a[L.id]===void 0)return;let F=a[L.id];for(let H in F){let J=F[H];for(let Z in J)g(J[Z].object),delete J[Z];delete F[H]}delete a[L.id]}function N(L){for(let F in a){let H=a[F];if(H[L.id]===void 0)continue;let J=H[L.id];for(let Z in J)g(J[Z].object),delete J[Z];delete H[L.id]}}function G(){W(),h=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:W,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:v,disableUnusedAttributes:w}}function cg(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function hg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,v=o||t.has("OES_texture_float"),A=_&&v,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:A,maxSamples:w}}function ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Pn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,v=p.clippingState||null;l.value=v,v=h(g,f,_,d);for(let A=0;A!==_;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function fg(i){let t=new WeakMap;function e(o,a){return a===hl?o.mapping=_s:a===ul&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hl||a===ul)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yl(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Es=class extends wo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fs=4,Yh=[.125,.215,.35,.446,.526,.582],Ii=20,ja=new Es,$h=new Tt,Qa=null,tl=0,el=0,Ci=(1+Math.sqrt(5))/2,hs=1/Ci,Zh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ci,hs),new C(0,Ci,-hs),new C(hs,0,Ci),new C(-hs,0,Ci),new C(Ci,hs,0),new C(-Ci,hs,0)],To=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,tl,el),t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ir,format:Ln,colorSpace:Kn,depthBuffer:!1},s=Jh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=pg(r,t,e)}return s}_compileMaterial(t){let e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,s){let a=new Ce(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($h),h.toneMapping=Bn,h.autoClear=!1;let d=new ve({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Ht(new oe,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy($h),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;io(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_s||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;io(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zh[(s-1)%Zh.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ht(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let p=[],y=0;for(let R=0;R<Ii;++R){let D=R/x,b=Math.exp(-D*D/2);p.push(b),R===0?y+=b:R<m&&(y+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let v=this._sizeLods[s],A=3*v*(s>_-fs?s-_+fs:0),w=4*(this._cubeSize-v);io(e,A,w,3*v,2*v),l.setRenderTarget(e),l.render(u,ja)}};function dg(i){let t=[],e=[],n=[],s=i,r=i-fs+1+Yh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-fs?l=Yh[o-i+fs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){let R=w%3*2/3-1,D=w>2?0:-1,b=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(b,x*g*w),_.set(f,m*g*w);let S=[w,w,w,w,w,w];v.set(S,p*g*w)}let A=new ce;A.setAttribute("position",new bn(y,x)),A.setAttribute("uv",new bn(_,m)),A.setAttribute("faceIndex",new bn(v,p)),t.push(A),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jh(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pg(i,t,e){let n=new Float32Array(Ii),s=new C(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ec(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Kh(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function jh(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function mg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===hl||l===ul,h=l===_s||l===ys;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new To(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new To(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,v=y.length;_<v;_+=3){let A=y[_+0],w=y[_+1],R=y[_+2];f.push(A,w,w,R,R,A)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let A=_+0,w=_+1,R=_+2;f.push(A,w,w,R,R,A)}}else return;let m=new(Nu(f)?Eo:So)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function _g(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*l),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vg(i,t){return i[0]-t[0]}function Mg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function bg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new ye,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],D=0;y===!0&&(D=1),_===!0&&(D=2),v===!0&&(D=3);let b=h.attributes.position.count*D,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let N=new Float32Array(b*S*4*g),G=new Mo(N,b,S,g);G.type=ci,G.needsUpdate=!0;let W=D*4;for(let F=0;F<g;F++){let H=A[F],J=w[F],Z=R[F],X=b*S*4*F;for(let nt=0;nt<H.count;nt++){let it=nt*W;y===!0&&(o.fromBufferAttribute(H,nt),N[X+it+0]=o.x,N[X+it+1]=o.y,N[X+it+2]=o.z,N[X+it+3]=0),_===!0&&(o.fromBufferAttribute(J,nt),N[X+it+4]=o.x,N[X+it+5]=o.y,N[X+it+6]=o.z,N[X+it+7]=0),v===!0&&(o.fromBufferAttribute(Z,nt),N[X+it+8]=o.x,N[X+it+9]=o.y,N[X+it+10]=o.z,N[X+it+11]=Z.itemSize===4?o.w:1)}}x={count:g,texture:G,size:new j(b,S)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<d;_++){let v=g[_];v[0]=_,v[1]=f[_]}g.sort(Mg);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(vg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let v=a[_],A=v[0],w=v[1];A!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+_)!==x[A]&&h.setAttribute("morphTarget"+_,x[A]),m&&h.getAttribute("morphNormal"+_)!==m[A]&&h.setAttribute("morphNormal"+_,m[A]),s[_]=w,p+=w):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Sg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ao=class extends Sn{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Di,h!==Di&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Di&&(n=li),n===void 0&&h===vs&&(n=Li),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ku=new Sn,zu=new Ao(1,1);zu.compareFunction=Uu;var Hu=new Mo,Vu=new xl,Gu=new Ss,Qh=[],tu=[],eu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function Ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Qh[s];if(r===void 0&&(r=new Float32Array(s),Qh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Go(i,t){let e=tu[t];e===void 0&&(e=new Int32Array(t),tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;iu.set(n),i.uniformMatrix2fv(this.addr,!1,iu),Fe(e,n)}}function Cg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;nu.set(n),i.uniformMatrix3fv(this.addr,!1,nu),Fe(e,n)}}function Pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;eu.set(n),i.uniformMatrix4fv(this.addr,!1,eu),Fe(e,n)}}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?zu:ku;e.setTexture2D(t||r,s)}function zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hu,s)}function Gg(i){switch(i){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Og;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Wg(i,t){i.uniform1fv(this.addr,t)}function qg(i,t){let e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function Xg(i,t){let e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function Yg(i,t){let e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function $g(i,t){let e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zg(i,t){let e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jg(i,t){let e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kg(i,t){i.uniform1iv(this.addr,t)}function jg(i,t){i.uniform2iv(this.addr,t)}function Qg(i,t){i.uniform3iv(this.addr,t)}function tx(i,t){i.uniform4iv(this.addr,t)}function ex(i,t){i.uniform1uiv(this.addr,t)}function nx(i,t){i.uniform2uiv(this.addr,t)}function ix(i,t){i.uniform3uiv(this.addr,t)}function sx(i,t){i.uniform4uiv(this.addr,t)}function rx(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ku,r[o])}function ox(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vu,r[o])}function ax(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gu,r[o])}function lx(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hu,r[o])}function cx(i){switch(i){case 5126:return Wg;case 35664:return qg;case 35665:return Xg;case 35666:return Yg;case 35674:return $g;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}var vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gg(e.type)}},Ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cx(e.type)}},bl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function su(i,t){i.seq.push(t),i.map[t.id]=t}function hx(i,t,e){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),o=nl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){su(e,c===void 0?new vl(a,i,t):new Ml(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new bl(a),su(e,u)),e=u}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ru(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ux=37297,fx=0;function dx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function px(i){let t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(i),n;switch(t===e?n="":t===go&&e===mo?n="LinearDisplayP3ToLinearSRGB":t===mo&&e===go&&(n="LinearSRGBToLinearDisplayP3"),i){case Kn:case Vo:return[n,"LinearTransferOETF"];case ge:case tc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ou(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dx(i.getShaderSource(t),o)}else return s}function mx(i,t){let e=px(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function gx(i,t){let e;switch(t){case Ud:e="Linear";break;case Nd:e="Reinhard";break;case Od:e="OptimizedCineon";break;case Fd:e="ACESFilmic";break;case kd:e="AgX";break;case Bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function xx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function _x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function yx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ds(i){return i!==""}function au(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(Mx,Sx)}var bx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sx(i,t){let e=qt[t];if(e===void 0){let n=bx.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sl(e)}var Ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(i){return i.replace(Ex,wx)}function wx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ax(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case ys:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Cx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hi:t="ENVMAP_BLENDING_MULTIPLY";break;case _r:t="ENVMAP_BLENDING_MIX";break;case Dd:t="ENVMAP_BLENDING_ADD";break}return t}function Px(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ix(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Tx(e),c=Ax(e),h=Rx(e),u=Cx(e),f=Px(e),d=e.isWebGL2?"":xx(e),g=_x(e),x=yx(r),m=s.createProgram(),p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ds).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ds).join(`
`),y.length>0&&(y+=`
`)):(p=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),y=[d,hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?gx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,mx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),o=Sl(o),o=au(o,e),o=lu(o,e),a=Sl(a),a=au(a,e),a=lu(a,e),o=cu(o),a=cu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=_+p+o,A=_+y+a,w=ru(s,s.VERTEX_SHADER,v),R=ru(s,s.FRAGMENT_SHADER,A);s.attachShader(m,w),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(G){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),F=s.getShaderInfoLog(R).trim(),H=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,R);else{let Z=ou(s,w,"vertex"),X=ou(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+Z+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||F==="")&&(J=!1);J&&(G.diagnostics={runnable:H,programLog:W,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:y}})}s.deleteShader(w),s.deleteShader(R),b=new xs(s,m),S=vx(s,m)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,ux)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}var Lx=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wl(t),e.set(t,n)),n}},wl=class{constructor(t){this.id=Lx++,this.code=t,this.usedTimes=0}};function Dx(i,t,e,n,s,r,o){let a=new rr,l=new El,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function m(b,S,N,G,W){let L=G.fog,F=W.geometry,H=b.isMeshStandardMaterial?G.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),Z=J&&J.mapping===Ho?J.image.height:null,X=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=nt!==void 0?nt.length:0,dt=0;F.morphAttributes.position!==void 0&&(dt=1),F.morphAttributes.normal!==void 0&&(dt=2),F.morphAttributes.color!==void 0&&(dt=3);let q,Q,pt,Mt;if(X){let tn=Fn[X];q=tn.vertexShader,Q=tn.fragmentShader}else q=b.vertexShader,Q=b.fragmentShader,l.update(b),pt=l.getVertexShaderID(b),Mt=l.getFragmentShaderID(b);let xt=i.getRenderTarget(),Dt=W.isInstancedMesh===!0,kt=W.isBatchedMesh===!0,bt=!!b.map,Ft=!!b.matcap,I=!!J,at=!!b.aoMap,$=!!b.lightMap,ot=!!b.bumpMap,Y=!!b.normalMap,wt=!!b.displacementMap,mt=!!b.emissiveMap,E=!!b.metalnessMap,M=!!b.roughnessMap,B=b.anisotropy>0,st=b.clearcoat>0,tt=b.iridescence>0,K=b.sheen>0,vt=b.transmission>0,ht=B&&!!b.anisotropyMap,_t=st&&!!b.clearcoatMap,Ct=st&&!!b.clearcoatNormalMap,Vt=st&&!!b.clearcoatRoughnessMap,et=tt&&!!b.iridescenceMap,se=tt&&!!b.iridescenceThicknessMap,Kt=K&&!!b.sheenColorMap,Bt=K&&!!b.sheenRoughnessMap,Rt=!!b.specularMap,yt=!!b.specularColorMap,Wt=!!b.specularIntensityMap,ae=vt&&!!b.transmissionMap,Ae=vt&&!!b.thicknessMap,$t=!!b.gradientMap,lt=!!b.alphaMap,U=b.alphaTest>0,ut=!!b.alphaHash,ft=!!b.extensions,Ut=!!F.attributes.uv1,Pt=!!F.attributes.uv2,ue=!!F.attributes.uv3,fe=Bn;return b.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(fe=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:q,fragmentShader:Q,defines:b.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:kt,instancing:Dt,instancingColor:Dt&&W.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Kn,map:bt,matcap:Ft,envMap:I,envMapMode:I&&J.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:$,bumpMap:ot,normalMap:Y,displacementMap:f&&wt,emissiveMap:mt,normalMapObjectSpace:Y&&b.normalMapType===Kd,normalMapTangentSpace:Y&&b.normalMapType===Ql,metalnessMap:E,roughnessMap:M,anisotropy:B,anisotropyMap:ht,clearcoat:st,clearcoatMap:_t,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Vt,iridescence:tt,iridescenceMap:et,iridescenceThicknessMap:se,sheen:K,sheenColorMap:Kt,sheenRoughnessMap:Bt,specularMap:Rt,specularColorMap:yt,specularIntensityMap:Wt,transmission:vt,transmissionMap:ae,thicknessMap:Ae,gradientMap:$t,opaque:b.transparent===!1&&b.blending===ms,alphaMap:lt,alphaTest:U,alphaHash:ut,combine:b.combine,mapUv:bt&&x(b.map.channel),aoMapUv:at&&x(b.aoMap.channel),lightMapUv:$&&x(b.lightMap.channel),bumpMapUv:ot&&x(b.bumpMap.channel),normalMapUv:Y&&x(b.normalMap.channel),displacementMapUv:wt&&x(b.displacementMap.channel),emissiveMapUv:mt&&x(b.emissiveMap.channel),metalnessMapUv:E&&x(b.metalnessMap.channel),roughnessMapUv:M&&x(b.roughnessMap.channel),anisotropyMapUv:ht&&x(b.anisotropyMap.channel),clearcoatMapUv:_t&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&x(b.sheenRoughnessMap.channel),specularMapUv:Rt&&x(b.specularMap.channel),specularColorMapUv:yt&&x(b.specularColorMap.channel),specularIntensityMapUv:Wt&&x(b.specularIntensityMap.channel),transmissionMapUv:ae&&x(b.transmissionMap.channel),thicknessMapUv:Ae&&x(b.thicknessMap.channel),alphaMapUv:lt&&x(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Y||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Pt,vertexUv3s:ue,pointsUvs:W.isPoints===!0&&!!F.attributes.uv&&(bt||lt),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:dt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ve,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ft&&b.extensions.derivatives===!0,extensionFragDepth:ft&&b.extensions.fragDepth===!0,extensionDrawBuffers:ft&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)S.push(N),S.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(y(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function v(b){let S=g[b.type],N;if(S){let G=Fn[S];N=bp.clone(G.uniforms)}else N=b.uniforms;return N}function A(b,S){let N;for(let G=0,W=c.length;G<W;G++){let L=c[G];if(L.cacheKey===S){N=L,++N.usedTimes;break}}return N===void 0&&(N=new Ix(i,S,b,r),c.push(N)),N}function w(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:D}}function Ux(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Nx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Nx),n.length>1&&n.sort(f||uu),s.length>1&&s.sort(f||uu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ox(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new fu,i.set(n,[o])):s>=r.length?(o=new fu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Tt};break;case"SpotLight":e={position:new C,direction:new C,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Bx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var kx=0;function zx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hx(i,t){let e=new Fx,n=Bx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new xe,a=new xe;function l(h,u){let f=0,d=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,v=0,A=0,w=0,R=0,D=0,b=0;h.sort(zx);let S=u===!0?Math.PI:1;for(let G=0,W=h.length;G<W;G++){let L=h[G],F=L.color,H=L.intensity,J=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*H*S,d+=F.g*H*S,g+=F.b*H*S;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],H);b++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){let nt=L.shadow,it=n.get(L);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,s.directionalShadow[x]=it,s.directionalShadowMap[x]=Z,s.directionalShadowMatrix[x]=L.shadow.matrix,v++}s.directional[x]=X,x++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar(H*S),X.distance=J,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[p]=X;let nt=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,nt.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[p]=nt.matrix,L.castShadow){let it=n.get(L);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,s.spotShadow[p]=it,s.spotShadowMap[p]=Z,w++}p++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(F).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=X,y++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*S),X.distance=L.distance,X.decay=L.decay,L.castShadow){let nt=L.shadow,it=n.get(L);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,it.shadowCameraNear=nt.camera.near,it.shadowCameraFar=nt.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=L.shadow.matrix,A++}s.point[m]=X,m++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H*S),X.groundColor.copy(L.groundColor).multiplyScalar(H*S),s.hemi[_]=X,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==_||N.numDirectionalShadows!==v||N.numPointShadows!==A||N.numSpotShadows!==w||N.numSpotMaps!==R||N.numLightProbes!==b)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=w+R-D,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=b,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=_,N.numDirectionalShadows=v,N.numPointShadows=A,N.numSpotShadows=w,N.numSpotMaps=R,N.numLightProbes=b,s.version=kx++)}function c(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let v=h[y];if(v.isDirectionalLight){let A=s.directional[f];A.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),f++}else if(v.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let A=s.rectArea[x];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let A=s.point[d];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function du(i,t){let e=new Hx(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Vx(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new du(i,t),e.set(r,[l])):o>=a.length?(l=new du(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Tl=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Al=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
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
}`;function qx(i,t,e){let n=new or,s=new j,r=new j,o=new ye,a=new Tl({depthPacking:Jd}),l=new Al,c={},h=e.maxTextureSize,u={[di]:cn,[cn]:di,[Ve]:Ve},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:Gx,fragmentShader:Wx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ht(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let p=this.type;this.render=function(w,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(hi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let W=p!==Zn&&this.type===Zn,L=p===Zn&&this.type!==Zn;for(let F=0,H=w.length;F<H;F++){let J=w[F],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let X=Z.getFrameExtents();if(s.multiply(X),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,Z.mapSize.y=r.y)),Z.map===null||W===!0||L===!0){let it=this.type!==Zn?{minFilter:Ee,magFilter:Ee}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Dn(s.x,s.y,it),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let nt=Z.getViewportCount();for(let it=0;it<nt;it++){let dt=Z.getViewport(it);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),G.viewport(o),Z.updateMatrices(J,it),n=Z.getFrustum(),v(R,D,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Zn&&y(Z,D),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,N)};function y(w,R){let D=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,D,d,x,null)}function _(w,R,D,b){let S=null,N=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=S.uuid,W=R.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let F=L[W];F===void 0&&(F=S.clone(),L[W]=F,R.addEventListener("dispose",A)),S=F}if(S.visible=R.visible,S.wireframe=R.wireframe,b===Zn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let G=i.properties.get(S);G.light=D}return S}function v(w,R,D,b,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let W=t.update(w),L=w.material;if(Array.isArray(L)){let F=W.groups;for(let H=0,J=F.length;H<J;H++){let Z=F[H],X=L[Z.materialIndex];if(X&&X.visible){let nt=_(w,X,b,S);w.onBeforeShadow(i,w,R,D,W,nt,Z),i.renderBufferDirect(D,null,W,nt,w,Z),w.onAfterShadow(i,w,R,D,W,nt,Z)}}}else if(L.visible){let F=_(w,L,b,S);w.onBeforeShadow(i,w,R,D,W,F,null),i.renderBufferDirect(D,null,W,F,w,null),w.onAfterShadow(i,w,R,D,W,F,null)}}let G=w.children;for(let W=0,L=G.length;W<L;W++)v(G[W],R,D,b,S)}function A(w){w.target.removeEventListener("dispose",A);for(let D in c){let b=c[D],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function Xx(i,t,e){let n=e.isWebGL2;function s(){let U=!1,ut=new ye,ft=null,Ut=new ye(0,0,0,0);return{setMask:function(Pt){ft!==Pt&&!U&&(i.colorMask(Pt,Pt,Pt,Pt),ft=Pt)},setLocked:function(Pt){U=Pt},setClear:function(Pt,ue,fe,ke,tn){tn===!0&&(Pt*=ke,ue*=ke,fe*=ke),ut.set(Pt,ue,fe,ke),Ut.equals(ut)===!1&&(i.clearColor(Pt,ue,fe,ke),Ut.copy(ut))},reset:function(){U=!1,ft=null,Ut.set(-1,0,0,0)}}}function r(){let U=!1,ut=null,ft=null,Ut=null;return{setTest:function(Pt){Pt?kt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Pt){ut!==Pt&&!U&&(i.depthMask(Pt),ut=Pt)},setFunc:function(Pt){if(ft!==Pt){switch(Pt){case Td:i.depthFunc(i.NEVER);break;case Ad:i.depthFunc(i.ALWAYS);break;case Rd:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case Cd:i.depthFunc(i.EQUAL);break;case Pd:i.depthFunc(i.GEQUAL);break;case Id:i.depthFunc(i.GREATER);break;case Ld:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Pt}},setLocked:function(Pt){U=Pt},setClear:function(Pt){Ut!==Pt&&(i.clearDepth(Pt),Ut=Pt)},reset:function(){U=!1,ut=null,ft=null,Ut=null}}}function o(){let U=!1,ut=null,ft=null,Ut=null,Pt=null,ue=null,fe=null,ke=null,tn=null;return{setTest:function(de){U||(de?kt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(de){ut!==de&&!U&&(i.stencilMask(de),ut=de)},setFunc:function(de,en,On){(ft!==de||Ut!==en||Pt!==On)&&(i.stencilFunc(de,en,On),ft=de,Ut=en,Pt=On)},setOp:function(de,en,On){(ue!==de||fe!==en||ke!==On)&&(i.stencilOp(de,en,On),ue=de,fe=en,ke=On)},setLocked:function(de){U=de},setClear:function(de){tn!==de&&(i.clearStencil(de),tn=de)},reset:function(){U=!1,ut=null,ft=null,Ut=null,Pt=null,ue=null,fe=null,ke=null,tn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,v=null,A=null,w=null,R=null,D=null,b=new Tt(0,0,0),S=0,N=!1,G=null,W=null,L=null,F=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,X=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Z=X>=1):nt.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Z=X>=2);let it=null,dt={},q=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),pt=new ye().fromArray(q),Mt=new ye().fromArray(Q);function xt(U,ut,ft,Ut){let Pt=new Uint8Array(4),ue=i.createTexture();i.bindTexture(U,ue),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<ft;fe++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ut,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(ut+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ue}let Dt={};Dt[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Dt[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),kt(i.DEPTH_TEST),l.setFunc(ho),mt(!1),E(Yc),kt(i.CULL_FACE),Y(hi);function kt(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function bt(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function Ft(U,ut){return d[U]!==ut?(i.bindFramebuffer(U,ut),d[U]=ut,n&&(U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut)),!0):!1}function I(U,ut){let ft=x,Ut=!1;if(U)if(ft=g.get(ut),ft===void 0&&(ft=[],g.set(ut,ft)),U.isWebGLMultipleRenderTargets){let Pt=U.texture;if(ft.length!==Pt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,fe=Pt.length;ue<fe;ue++)ft[ue]=i.COLOR_ATTACHMENT0+ue;ft.length=Pt.length,Ut=!0}}else ft[0]!==i.COLOR_ATTACHMENT0&&(ft[0]=i.COLOR_ATTACHMENT0,Ut=!0);else ft[0]!==i.BACK&&(ft[0]=i.BACK,Ut=!0);Ut&&(e.isWebGL2?i.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function at(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let $={[Pi]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};if(n)$[Jc]=i.MIN,$[Kc]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&($[Jc]=U.MIN_EXT,$[Kc]=U.MAX_EXT)}let ot={[dd]:i.ZERO,[pd]:i.ONE,[md]:i.SRC_COLOR,[ll]:i.SRC_ALPHA,[Md]:i.SRC_ALPHA_SATURATE,[yd]:i.DST_COLOR,[xd]:i.DST_ALPHA,[gd]:i.ONE_MINUS_SRC_COLOR,[cl]:i.ONE_MINUS_SRC_ALPHA,[vd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[Sd]:i.ONE_MINUS_CONSTANT_COLOR,[Ed]:i.CONSTANT_ALPHA,[wd]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(U,ut,ft,Ut,Pt,ue,fe,ke,tn,de){if(U===hi){p===!0&&(bt(i.BLEND),p=!1);return}if(p===!1&&(kt(i.BLEND),p=!0),U!==hd){if(U!==y||de!==N){if((_!==Pi||w!==Pi)&&(i.blendEquation(i.FUNC_ADD),_=Pi,w=Pi),de)switch(U){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,A=null,R=null,D=null,b.set(0,0,0),S=0,y=U,N=de}return}Pt=Pt||ut,ue=ue||ft,fe=fe||Ut,(ut!==_||Pt!==w)&&(i.blendEquationSeparate($[ut],$[Pt]),_=ut,w=Pt),(ft!==v||Ut!==A||ue!==R||fe!==D)&&(i.blendFuncSeparate(ot[ft],ot[Ut],ot[ue],ot[fe]),v=ft,A=Ut,R=ue,D=fe),(ke.equals(b)===!1||tn!==S)&&(i.blendColor(ke.r,ke.g,ke.b,tn),b.copy(ke),S=tn),y=U,N=!1}function wt(U,ut){U.side===Ve?bt(i.CULL_FACE):kt(i.CULL_FACE);let ft=U.side===cn;ut&&(ft=!ft),mt(ft),U.blending===ms&&U.transparent===!1?Y(hi):Y(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);let Ut=U.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),B(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?kt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){G!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),G=U)}function E(U){U!==ad?(kt(i.CULL_FACE),U!==W&&(U===Yc?i.cullFace(i.BACK):U===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),W=U}function M(U){U!==L&&(Z&&i.lineWidth(U),L=U)}function B(U,ut,ft){U?(kt(i.POLYGON_OFFSET_FILL),(F!==ut||H!==ft)&&(i.polygonOffset(ut,ft),F=ut,H=ft)):bt(i.POLYGON_OFFSET_FILL)}function st(U){U?kt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function tt(U){U===void 0&&(U=i.TEXTURE0+J-1),it!==U&&(i.activeTexture(U),it=U)}function K(U,ut,ft){ft===void 0&&(it===null?ft=i.TEXTURE0+J-1:ft=it);let Ut=dt[ft];Ut===void 0&&(Ut={type:void 0,texture:void 0},dt[ft]=Ut),(Ut.type!==U||Ut.texture!==ut)&&(it!==ft&&(i.activeTexture(ft),it=ft),i.bindTexture(U,ut||Dt[U]),Ut.type=U,Ut.texture=ut)}function vt(){let U=dt[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ht(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(U){pt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),pt.copy(U))}function ae(U){Mt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Mt.copy(U))}function Ae(U,ut){let ft=u.get(ut);ft===void 0&&(ft=new WeakMap,u.set(ut,ft));let Ut=ft.get(U);Ut===void 0&&(Ut=i.getUniformBlockIndex(ut,U.name),ft.set(U,Ut))}function $t(U,ut){let Ut=u.get(ut).get(U);h.get(ut)!==Ut&&(i.uniformBlockBinding(ut,Ut,U.__bindingPointIndex),h.set(ut,Ut))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},it=null,dt={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,v=null,A=null,w=null,R=null,D=null,b=new Tt(0,0,0),S=0,N=!1,G=null,W=null,L=null,F=null,H=null,pt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:kt,disable:bt,bindFramebuffer:Ft,drawBuffers:I,useProgram:at,setBlending:Y,setMaterial:wt,setFlipSided:mt,setCullFace:E,setLineWidth:M,setPolygonOffset:B,setScissorTest:st,activeTexture:tt,bindTexture:K,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:_t,texImage2D:Rt,texImage3D:yt,updateUBOMapping:Ae,uniformBlockBinding:$t,texStorage2D:Kt,texStorage3D:Bt,texSubImage2D:Ct,texSubImage3D:Vt,compressedTexSubImage2D:et,compressedTexSubImage3D:se,scissor:Wt,viewport:ae,reset:lt}}function Yx(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return d?new OffscreenCanvas(E,M):_o("canvas")}function x(E,M,B,st){let tt=1;if((E.width>st||E.height>st)&&(tt=st/Math.max(E.width,E.height)),tt<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let K=M?ml:Math.floor,vt=K(tt*E.width),ht=K(tt*E.height);u===void 0&&(u=g(vt,ht));let _t=B?g(vt,ht):u;return _t.width=vt,_t.height=ht,_t.getContext("2d").drawImage(E,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+vt+"x"+ht+")."),_t}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Ph(E.width)&&Ph(E.height)}function p(E){return a?!1:E.wrapS!==In||E.wrapT!==In||E.minFilter!==Ee&&E.minFilter!==ln}function y(E,M){return E.generateMipmaps&&M&&E.minFilter!==Ee&&E.minFilter!==ln}function _(E){i.generateMipmap(E)}function v(E,M,B,st,tt=!1){if(a===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=M;if(M===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),M===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),M===i.RGBA){let vt=tt?po:le.getTransfer(st);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=vt===me?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function A(E,M,B){return y(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==Ee&&E.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function w(E){return E===Ee||E===jc||E===Ta?i.NEAREST:i.LINEAR}function R(E){let M=E.target;M.removeEventListener("dispose",R),b(M),M.isVideoTexture&&h.delete(M)}function D(E){let M=E.target;M.removeEventListener("dispose",D),N(M)}function b(E){let M=n.get(E);if(M.__webglInit===void 0)return;let B=E.source,st=f.get(B);if(st){let tt=st[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(E),Object.keys(st).length===0&&f.delete(B)}n.remove(E)}function S(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let B=E.source,st=f.get(B);delete st[M.__cacheKey],o.memory.textures--}function N(E){let M=E.texture,B=n.get(E),st=n.get(M);if(st.__webglTexture!==void 0&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(B.__webglFramebuffer[tt]))for(let K=0;K<B.__webglFramebuffer[tt].length;K++)i.deleteFramebuffer(B.__webglFramebuffer[tt][K]);else i.deleteFramebuffer(B.__webglFramebuffer[tt]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[tt])}else{if(Array.isArray(B.__webglFramebuffer))for(let tt=0;tt<B.__webglFramebuffer.length;tt++)i.deleteFramebuffer(B.__webglFramebuffer[tt]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let tt=0;tt<B.__webglColorRenderbuffer.length;tt++)B.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[tt]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let tt=0,K=M.length;tt<K;tt++){let vt=n.get(M[tt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(M[tt])}n.remove(M),n.remove(E)}let G=0;function W(){G=0}function L(){let E=G;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),G+=1,E}function F(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function H(E,M){let B=n.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let st=E.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(B,E,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function J(E,M){let B=n.get(E);if(E.version>0&&B.__version!==E.version){pt(B,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function Z(E,M){let B=n.get(E);if(E.version>0&&B.__version!==E.version){pt(B,E,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function X(E,M){let B=n.get(E);if(E.version>0&&B.__version!==E.version){Mt(B,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let nt={[er]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},it={[Ee]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[Ta]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[zd]:i.LINEAR_MIPMAP_NEAREST,[nr]:i.LINEAR_MIPMAP_LINEAR},dt={[jd]:i.NEVER,[sp]:i.ALWAYS,[Qd]:i.LESS,[Uu]:i.LEQUAL,[tp]:i.EQUAL,[ip]:i.GEQUAL,[ep]:i.GREATER,[np]:i.NOTEQUAL};function q(E,M,B){if(B?(i.texParameteri(E,i.TEXTURE_WRAP_S,nt[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,nt[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,nt[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,it[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,it[M.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==In||M.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,w(M.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Ee&&M.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let st=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ee||M.minFilter!==Ta&&M.minFilter!==nr||M.type===ci&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===ir&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Q(E,M){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",R));let st=M.source,tt=f.get(st);tt===void 0&&(tt={},f.set(st,tt));let K=F(M);if(K!==E.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[K].usedTimes++;let vt=tt[E.__cacheKey];vt!==void 0&&(tt[E.__cacheKey].usedTimes--,vt.usedTimes===0&&S(M)),E.__cacheKey=K,E.__webglTexture=tt[K].texture}return B}function pt(E,M,B){let st=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=i.TEXTURE_3D);let tt=Q(E,M),K=M.source;e.bindTexture(st,E.__webglTexture,i.TEXTURE0+B);let vt=n.get(K);if(K.version!==vt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);let ht=le.getPrimaries(le.workingColorSpace),_t=M.colorSpace===Mn?null:le.getPrimaries(M.colorSpace),Ct=M.colorSpace===Mn||ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Vt=p(M)&&m(M.image)===!1,et=x(M.image,Vt,!1,s.maxTextureSize);et=mt(M,et);let se=m(et)||a,Kt=r.convert(M.format,M.colorSpace),Bt=r.convert(M.type),Rt=v(M.internalFormat,Kt,Bt,M.colorSpace,M.isVideoTexture);q(st,M,se);let yt,Wt=M.mipmaps,ae=a&&M.isVideoTexture!==!0&&Rt!==Lu,Ae=vt.__version===void 0||tt===!0,$t=A(M,et,se);if(M.isDepthTexture)Rt=i.DEPTH_COMPONENT,a?M.type===ci?Rt=i.DEPTH_COMPONENT32F:M.type===li?Rt=i.DEPTH_COMPONENT24:M.type===Li?Rt=i.DEPTH24_STENCIL8:Rt=i.DEPTH_COMPONENT16:M.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Di&&Rt===i.DEPTH_COMPONENT&&M.type!==jl&&M.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=li,Bt=r.convert(M.type)),M.format===vs&&Rt===i.DEPTH_COMPONENT&&(Rt=i.DEPTH_STENCIL,M.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Li,Bt=r.convert(M.type))),Ae&&(ae?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,Kt,Bt,null));else if(M.isDataTexture)if(Wt.length>0&&se){ae&&Ae&&e.texStorage2D(i.TEXTURE_2D,$t,Rt,Wt[0].width,Wt[0].height);for(let lt=0,U=Wt.length;lt<U;lt++)yt=Wt[lt],ae?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,Kt,Bt,yt.data):e.texImage2D(i.TEXTURE_2D,lt,Rt,yt.width,yt.height,0,Kt,Bt,yt.data);M.generateMipmaps=!1}else ae?(Ae&&e.texStorage2D(i.TEXTURE_2D,$t,Rt,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Kt,Bt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,Kt,Bt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,Rt,Wt[0].width,Wt[0].height,et.depth);for(let lt=0,U=Wt.length;lt<U;lt++)yt=Wt[lt],M.format!==Ln?Kt!==null?ae?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,et.depth,Kt,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Rt,yt.width,yt.height,et.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,et.depth,Kt,Bt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Rt,yt.width,yt.height,et.depth,0,Kt,Bt,yt.data)}else{ae&&Ae&&e.texStorage2D(i.TEXTURE_2D,$t,Rt,Wt[0].width,Wt[0].height);for(let lt=0,U=Wt.length;lt<U;lt++)yt=Wt[lt],M.format!==Ln?Kt!==null?ae?e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,Kt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Rt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,Kt,Bt,yt.data):e.texImage2D(i.TEXTURE_2D,lt,Rt,yt.width,yt.height,0,Kt,Bt,yt.data)}else if(M.isDataArrayTexture)ae?(Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,Rt,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Kt,Bt,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,Kt,Bt,et.data);else if(M.isData3DTexture)ae?(Ae&&e.texStorage3D(i.TEXTURE_3D,$t,Rt,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Kt,Bt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,Kt,Bt,et.data);else if(M.isFramebufferTexture){if(Ae)if(ae)e.texStorage2D(i.TEXTURE_2D,$t,Rt,et.width,et.height);else{let lt=et.width,U=et.height;for(let ut=0;ut<$t;ut++)e.texImage2D(i.TEXTURE_2D,ut,Rt,lt,U,0,Kt,Bt,null),lt>>=1,U>>=1}}else if(Wt.length>0&&se){ae&&Ae&&e.texStorage2D(i.TEXTURE_2D,$t,Rt,Wt[0].width,Wt[0].height);for(let lt=0,U=Wt.length;lt<U;lt++)yt=Wt[lt],ae?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Kt,Bt,yt):e.texImage2D(i.TEXTURE_2D,lt,Rt,Kt,Bt,yt);M.generateMipmaps=!1}else ae?(Ae&&e.texStorage2D(i.TEXTURE_2D,$t,Rt,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Kt,Bt,et)):e.texImage2D(i.TEXTURE_2D,0,Rt,Kt,Bt,et);y(M,se)&&_(st),vt.__version=K.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Mt(E,M,B){if(M.image.length!==6)return;let st=Q(E,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let K=n.get(tt);if(tt.version!==K.__version||st===!0){e.activeTexture(i.TEXTURE0+B);let vt=le.getPrimaries(le.workingColorSpace),ht=M.colorSpace===Mn?null:le.getPrimaries(M.colorSpace),_t=M.colorSpace===Mn||vt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Ct=M.isCompressedTexture||M.image[0].isCompressedTexture,Vt=M.image[0]&&M.image[0].isDataTexture,et=[];for(let lt=0;lt<6;lt++)!Ct&&!Vt?et[lt]=x(M.image[lt],!1,!0,s.maxCubemapSize):et[lt]=Vt?M.image[lt].image:M.image[lt],et[lt]=mt(M,et[lt]);let se=et[0],Kt=m(se)||a,Bt=r.convert(M.format,M.colorSpace),Rt=r.convert(M.type),yt=v(M.internalFormat,Bt,Rt,M.colorSpace),Wt=a&&M.isVideoTexture!==!0,ae=K.__version===void 0||st===!0,Ae=A(M,se,Kt);q(i.TEXTURE_CUBE_MAP,M,Kt);let $t;if(Ct){Wt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,yt,se.width,se.height);for(let lt=0;lt<6;lt++){$t=et[lt].mipmaps;for(let U=0;U<$t.length;U++){let ut=$t[U];M.format!==Ln?Bt!==null?Wt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U,0,0,ut.width,ut.height,Bt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U,yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U,0,0,ut.width,ut.height,Bt,Rt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U,yt,ut.width,ut.height,0,Bt,Rt,ut.data)}}}else{$t=M.mipmaps,Wt&&ae&&($t.length>0&&Ae++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,yt,et[0].width,et[0].height));for(let lt=0;lt<6;lt++)if(Vt){Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,et[lt].width,et[lt].height,Bt,Rt,et[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,yt,et[lt].width,et[lt].height,0,Bt,Rt,et[lt].data);for(let U=0;U<$t.length;U++){let ft=$t[U].image[lt].image;Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U+1,0,0,ft.width,ft.height,Bt,Rt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U+1,yt,ft.width,ft.height,0,Bt,Rt,ft.data)}}else{Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,Rt,et[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,yt,Bt,Rt,et[lt]);for(let U=0;U<$t.length;U++){let ut=$t[U];Wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U+1,0,0,Bt,Rt,ut.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,U+1,yt,Bt,Rt,ut.image[lt])}}}y(M,Kt)&&_(i.TEXTURE_CUBE_MAP),K.__version=tt.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function xt(E,M,B,st,tt,K){let vt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),_t=v(B.internalFormat,vt,ht,B.colorSpace);if(!n.get(M).__hasExternalTextures){let Vt=Math.max(1,M.width>>K),et=Math.max(1,M.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,_t,Vt,et,M.depth,0,vt,ht,null):e.texImage2D(tt,K,_t,Vt,et,0,vt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Y(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,n.get(B).__webglTexture,0,ot(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,n.get(B).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(E,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let st=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||Y(M)){let tt=M.depthTexture;tt&&tt.isDepthTexture&&(tt.type===ci?st=i.DEPTH_COMPONENT32F:tt.type===li&&(st=i.DEPTH_COMPONENT24));let K=ot(M);Y(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,st,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,st,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,st,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){let st=ot(M);B&&Y(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,M.width,M.height):Y(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let st=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let tt=0;tt<st.length;tt++){let K=st[tt],vt=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),_t=v(K.internalFormat,vt,ht,K.colorSpace),Ct=ot(M);B&&Y(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,_t,M.width,M.height):Y(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);let st=n.get(M.depthTexture).__webglTexture,tt=ot(M);if(M.depthTexture.format===Di)Y(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(M.depthTexture.format===vs)Y(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function bt(E){let M=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");kt(M.__webglFramebuffer,E)}else if(B){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]=i.createRenderbuffer(),Dt(M.__webglDepthbuffer[st],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Dt(M.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(E,M,B){let st=n.get(E);M!==void 0&&xt(st.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&bt(E)}function I(E){let M=E.texture,B=n.get(E),st=n.get(M);E.addEventListener("dispose",D),E.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=M.version,o.memory.textures++);let tt=E.isWebGLCubeRenderTarget===!0,K=E.isWebGLMultipleRenderTargets===!0,vt=m(E)||a;if(tt){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let _t=0;_t<M.mipmaps.length;_t++)B.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(K)if(s.drawBuffers){let ht=E.texture;for(let _t=0,Ct=ht.length;_t<Ct;_t++){let Vt=n.get(ht[_t]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Y(E)===!1){let ht=K?M:[M];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){let Ct=ht[_t];B.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[_t]);let Vt=r.convert(Ct.format,Ct.colorSpace),et=r.convert(Ct.type),se=v(Ct.internalFormat,Vt,et,Ct.colorSpace,E.isXRRenderTarget===!0),Kt=ot(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,B.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),q(i.TEXTURE_CUBE_MAP,M,vt);for(let ht=0;ht<6;ht++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)xt(B.__webglFramebuffer[ht][_t],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else xt(B.__webglFramebuffer[ht],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);y(M,vt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){let ht=E.texture;for(let _t=0,Ct=ht.length;_t<Ct;_t++){let Vt=ht[_t],et=n.get(Vt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),q(i.TEXTURE_2D,Vt,vt),xt(B.__webglFramebuffer,E,Vt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),y(Vt,vt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,st.__webglTexture),q(ht,M,vt),a&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)xt(B.__webglFramebuffer[_t],E,M,i.COLOR_ATTACHMENT0,ht,_t);else xt(B.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,ht,0);y(M,vt)&&_(ht),e.unbindTexture()}E.depthBuffer&&bt(E)}function at(E){let M=m(E)||a,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let st=0,tt=B.length;st<tt;st++){let K=B[st];if(y(K,M)){let vt=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ht=n.get(K).__webglTexture;e.bindTexture(vt,ht),_(vt),e.unbindTexture()}}}function $(E){if(a&&E.samples>0&&Y(E)===!1){let M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,st=E.height,tt=i.COLOR_BUFFER_BIT,K=[],vt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(E),_t=E.isWebGLMultipleRenderTargets===!0;if(_t)for(let Ct=0;Ct<M.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Ct=0;Ct<M.length;Ct++){K.push(i.COLOR_ATTACHMENT0+Ct),E.depthBuffer&&K.push(vt);let Vt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Vt===!1&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),_t&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Ct]),Vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[vt])),_t){let et=n.get(M[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,B,st,0,0,B,st,tt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Ct=0;Ct<M.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Ct]);let Vt=n.get(M[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function ot(E){return Math.min(s.maxSamples,E.samples)}function Y(E){let M=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function wt(E){let M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function mt(E,M){let B=E.colorSpace,st=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===dl||B!==Kn&&B!==Mn&&(le.getTransfer(B)===me?a===!1?t.has("EXT_sRGB")===!0&&st===Ln?(E.format=dl,E.minFilter=ln,E.generateMipmaps=!1):M=yo.sRGBToLinear(M):(st!==Ln||tt!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=Ft,this.setupRenderTarget=I,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Y}function $x(i,t,e){let n=e.isWebGL2;function s(r,o=Mn){let a,l=le.getTransfer(o);if(r===ui)return i.UNSIGNED_BYTE;if(r===Au)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ru)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Hd)return i.BYTE;if(r===Vd)return i.SHORT;if(r===jl)return i.UNSIGNED_SHORT;if(r===Tu)return i.INT;if(r===li)return i.UNSIGNED_INT;if(r===ci)return i.FLOAT;if(r===ir)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Gd)return i.ALPHA;if(r===Ln)return i.RGBA;if(r===Wd)return i.LUMINANCE;if(r===qd)return i.LUMINANCE_ALPHA;if(r===Di)return i.DEPTH_COMPONENT;if(r===vs)return i.DEPTH_STENCIL;if(r===dl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xd)return i.RED;if(r===Cu)return i.RED_INTEGER;if(r===Yd)return i.RG;if(r===Pu)return i.RG_INTEGER;if(r===Iu)return i.RGBA_INTEGER;if(r===Aa||r===Ra||r===Ca||r===Pa)if(l===me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ra)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qc||r===th||r===eh||r===nh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Qc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===eh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ih||r===sh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ih)return l===me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===sh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rh||r===oh||r===ah||r===lh||r===ch||r===hh||r===uh||r===fh||r===dh||r===ph||r===mh||r===gh||r===xh||r===_h)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===rh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ch)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ph)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xh)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_h)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ia||r===yh||r===vh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ia)return l===me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$d||r===Mh||r===bh||r===Sh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ia)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Mh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Li?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Rl=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zx={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cl=class extends pi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],_=[],v=new j,A=null,w=new Ce;w.layers.enable(1),w.viewport=new ye;let R=new Ce;R.layers.enable(2),R.viewport=new ye;let D=[w,R],b=new Rl;b.layers.enable(1),b.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new js,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new js,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new js,y[q]=Q),Q.getHandSpace()};function G(q){let Q=_.indexOf(q.inputSource);if(Q===-1)return;let pt=y[Q];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",L);for(let q=0;q<y.length;q++){let Q=_[q];Q!==null&&(_[q]=null,y[q].disconnect(Q))}S=null,N=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",W),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Dn(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,pt=null,Mt=null;x.depth&&(Mt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=x.stencil?vs:Di,pt=x.stencil?Li:li);let xt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Dn(f.textureWidth,f.textureHeight,{format:Ln,type:ui,depthTexture:new Ao(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Dt=t.properties.get(p);Dt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(q){for(let Q=0;Q<q.removed.length;Q++){let pt=q.removed[Q],Mt=_.indexOf(pt);Mt>=0&&(_[Mt]=null,y[Mt].disconnect(pt))}for(let Q=0;Q<q.added.length;Q++){let pt=q.added[Q],Mt=_.indexOf(pt);if(Mt===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=_.length){_.push(pt),Mt=Dt;break}else if(_[Dt]===null){_[Dt]=pt,Mt=Dt;break}if(Mt===-1)break}let xt=y[Mt];xt&&xt.connect(pt)}}let F=new C,H=new C;function J(q,Q,pt){F.setFromMatrixPosition(Q.matrixWorld),H.setFromMatrixPosition(pt.matrixWorld);let Mt=F.distanceTo(H),xt=Q.projectionMatrix.elements,Dt=pt.projectionMatrix.elements,kt=xt[14]/(xt[10]-1),bt=xt[14]/(xt[10]+1),Ft=(xt[9]+1)/xt[5],I=(xt[9]-1)/xt[5],at=(xt[8]-1)/xt[0],$=(Dt[8]+1)/Dt[0],ot=kt*at,Y=kt*$,wt=Mt/(-at+$),mt=wt*-at;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(mt),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let E=kt+wt,M=bt+wt,B=ot-mt,st=Y+(Mt-mt),tt=Ft*bt/M*E,K=I*bt/M*E;q.projectionMatrix.makePerspective(B,st,tt,K,E,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Z(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;b.near=R.near=w.near=q.near,b.far=R.far=w.far=q.far,(S!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,N=b.far);let Q=q.parent,pt=b.cameras;Z(b,Q);for(let Mt=0;Mt<pt.length;Mt++)Z(pt[Mt],Q);pt.length===2?J(b,w,R):b.projectionMatrix.copy(w.projectionMatrix),X(q,b,Q)};function X(q,Q,pt){pt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)};let nt=null;function it(q,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Mt=!1;pt.length!==b.cameras.length&&(b.cameras.length=0,Mt=!0);for(let xt=0;xt<pt.length;xt++){let Dt=pt[xt],kt=null;if(d!==null)kt=d.getViewport(Dt);else{let Ft=u.getViewSubImage(f,Dt);kt=Ft.viewport,xt===0&&(t.setRenderTargetTextures(p,Ft.colorTexture,f.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(p))}let bt=D[xt];bt===void 0&&(bt=new Ce,bt.layers.enable(xt),bt.viewport=new ye,D[xt]=bt),bt.matrix.fromArray(Dt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Dt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(kt.x,kt.y,kt.width,kt.height),xt===0&&(b.matrix.copy(bt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Mt===!0&&b.cameras.push(bt)}}for(let pt=0;pt<y.length;pt++){let Mt=_[pt],xt=y[pt];Mt!==null&&xt!==void 0&&xt.update(Mt,Q,c||o)}nt&&nt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let dt=new Bu;dt.setAnimationLoop(it),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}};function Jx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kx(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let A=_.program;n.updateUBOMapping(y,A);let w=t.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),A=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],v=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,R=v.length;w<R;w++){let D=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,S=D.length;b<S;b++){let N=D[b];if(d(N,w,b,A)===!0){let G=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],L=0;for(let F=0;F<W.length;F++){let H=W[F],J=x(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,G+L,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,A){let w=y.value,R=_+"_"+v;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{let D=A[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(y){let _=y.uniforms,v=0,A=16;for(let R=0,D=_.length;R<D;R++){let b=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,N=b.length;S<N;S++){let G=b[S],W=Array.isArray(G.value)?G.value:[G.value];for(let L=0,F=W.length;L<F;L++){let H=W[L],J=x(H),Z=v%A;Z!==0&&A-Z<J.boundary&&(v+=A-Z),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=J.storage}}}let w=v%A;return w>0&&(v+=A-w),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ar=class{constructor(t={}){let{canvas:e=op(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;let _=this,v=!1,A=0,w=0,R=null,D=-1,b=null,S=new ye,N=new ye,G=null,W=new Tt(0),L=0,F=e.width,H=e.height,J=1,Z=null,X=null,nt=new ye(0,0,F,H),it=new ye(0,0,F,H),dt=!1,q=new or,Q=!1,pt=!1,Mt=null,xt=new xe,Dt=new j,kt=new C,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return R===null?J:1}let I=n;function at(T,O){for(let z=0;z<T.length;z++){let V=T[z],k=e.getContext(V,O);if(k!==null)return k}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ut,!1),I===null){let O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),I=at(O,T),I===null)throw at(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,ot,Y,wt,mt,E,M,B,st,tt,K,vt,ht,_t,Ct,Vt,et,se,Kt,Bt,Rt,yt,Wt,ae;function Ae(){$=new gg(I),ot=new hg(I,$,t),$.init(ot),yt=new $x(I,$,ot),Y=new Xx(I,$,ot),wt=new yg(I),mt=new Ux,E=new Yx(I,$,Y,mt,ot,yt,wt),M=new fg(_),B=new mg(_),st=new Ap(I,ot),Wt=new lg(I,$,st,ot),tt=new xg(I,st,wt,Wt),K=new Sg(I,tt,st,wt),Kt=new bg(I,ot,E),Vt=new ug(mt),vt=new Dx(_,M,B,$,ot,Wt,Vt),ht=new Jx(_,mt),_t=new Ox,Ct=new Vx($,ot),se=new ag(_,M,B,Y,K,f,l),et=new qx(_,K,ot),ae=new Kx(I,wt,ot,Y),Bt=new cg(I,$,wt,ot),Rt=new _g(I,$,wt,ot),wt.programs=vt.programs,_.capabilities=ot,_.extensions=$,_.properties=mt,_.renderLists=_t,_.shadowMap=et,_.state=Y,_.info=wt}Ae();let $t=new Cl(_,I);this.xr=$t,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(F,H,!1))},this.getSize=function(T){return T.set(F,H)},this.setSize=function(T,O,z=!0){if($t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,H=O,e.width=Math.floor(T*J),e.height=Math.floor(O*J),z===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(F*J,H*J).floor()},this.setDrawingBufferSize=function(T,O,z){F=T,H=O,J=z,e.width=Math.floor(T*z),e.height=Math.floor(O*z),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(nt)},this.setViewport=function(T,O,z,V){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,O,z,V),Y.viewport(S.copy(nt).multiplyScalar(J).floor())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,O,z,V){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,O,z,V),Y.scissor(N.copy(it).multiplyScalar(J).floor())},this.getScissorTest=function(){return dt},this.setScissorTest=function(T){Y.setScissorTest(dt=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(T=!0,O=!0,z=!0){let V=0;if(T){let k=!1;if(R!==null){let gt=R.texture.format;k=gt===Iu||gt===Pu||gt===Cu}if(k){let gt=R.texture.type,Et=gt===ui||gt===li||gt===jl||gt===Li||gt===Au||gt===Ru,It=se.getClearColor(),Nt=se.getClearAlpha(),Xt=It.r,zt=It.g,Gt=It.b;Et?(d[0]=Xt,d[1]=zt,d[2]=Gt,d[3]=Nt,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=Xt,g[1]=zt,g[2]=Gt,g[3]=Nt,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}O&&(V|=I.DEPTH_BUFFER_BIT),z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),Ct.dispose(),mt.dispose(),M.dispose(),B.dispose(),K.dispose(),Wt.dispose(),ae.dispose(),vt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",tn),$t.removeEventListener("sessionend",de),Mt&&(Mt.dispose(),Mt=null),en.stop()};function lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let T=wt.autoReset,O=et.enabled,z=et.autoUpdate,V=et.needsUpdate,k=et.type;Ae(),wt.autoReset=T,et.enabled=O,et.autoUpdate=z,et.needsUpdate=V,et.type=k}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ft(T){let O=T.target;O.removeEventListener("dispose",ft),Ut(O)}function Ut(T){Pt(T),mt.remove(T)}function Pt(T){let O=mt.get(T).programs;O!==void 0&&(O.forEach(function(z){vt.releaseProgram(z)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,z,V,k,gt){O===null&&(O=bt);let Et=k.isMesh&&k.matrixWorld.determinant()<0,It=id(T,O,z,V,k);Y.setMaterial(V,Et);let Nt=z.index,Xt=1;if(V.wireframe===!0){if(Nt=tt.getWireframeAttribute(z),Nt===void 0)return;Xt=2}let zt=z.drawRange,Gt=z.attributes.position,Pe=zt.start*Xt,un=(zt.start+zt.count)*Xt;gt!==null&&(Pe=Math.max(Pe,gt.start*Xt),un=Math.min(un,(gt.start+gt.count)*Xt)),Nt!==null?(Pe=Math.max(Pe,0),un=Math.min(un,Nt.count)):Gt!=null&&(Pe=Math.max(Pe,0),un=Math.min(un,Gt.count));let ze=un-Pe;if(ze<0||ze===1/0)return;Wt.setup(k,V,It,z,Nt);let Gn,Se=Bt;if(Nt!==null&&(Gn=st.get(Nt),Se=Rt,Se.setIndex(Gn)),k.isMesh)V.wireframe===!0?(Y.setLineWidth(V.wireframeLinewidth*Ft()),Se.setMode(I.LINES)):Se.setMode(I.TRIANGLES);else if(k.isLine){let Zt=V.linewidth;Zt===void 0&&(Zt=1),Y.setLineWidth(Zt*Ft()),k.isLineSegments?Se.setMode(I.LINES):k.isLineLoop?Se.setMode(I.LINE_LOOP):Se.setMode(I.LINE_STRIP)}else k.isPoints?Se.setMode(I.POINTS):k.isSprite&&Se.setMode(I.TRIANGLES);if(k.isBatchedMesh)Se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Se.renderInstances(Pe,ze,k.count);else if(z.isInstancedBufferGeometry){let Zt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ba=Math.min(z.instanceCount,Zt);Se.renderInstances(Pe,ze,ba)}else Se.render(Pe,ze)};function ue(T,O,z){T.transparent===!0&&T.side===Ve&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,Nr(T,O,z),T.side=di,T.needsUpdate=!0,Nr(T,O,z),T.side=Ve):Nr(T,O,z)}this.compile=function(T,O,z=null){z===null&&(z=T),m=Ct.get(z),m.init(),y.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==z&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(_._useLegacyLights);let V=new Set;return T.traverse(function(k){let gt=k.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){let It=gt[Et];ue(It,z,k),V.add(It)}else ue(gt,z,k),V.add(gt)}),y.pop(),m=null,V},this.compileAsync=function(T,O,z=null){let V=this.compile(T,O,z);return new Promise(k=>{function gt(){if(V.forEach(function(Et){mt.get(Et).currentProgram.isReady()&&V.delete(Et)}),V.size===0){k(T);return}setTimeout(gt,10)}$.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let fe=null;function ke(T){fe&&fe(T)}function tn(){en.stop()}function de(){en.start()}let en=new Bu;en.setAnimationLoop(ke),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(T){fe=T,$t.setAnimationLoop(T),T===null?en.stop():en.start()},$t.addEventListener("sessionstart",tn),$t.addEventListener("sessionend",de),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&($t.cameraAutoUpdate===!0&&$t.updateCamera(O),O=$t.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,O,R),m=Ct.get(T,y.length),m.init(),y.push(m),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(xt),pt=this.localClippingEnabled,Q=Vt.init(this.clippingPlanes,pt),x=_t.get(T,p.length),x.init(),p.push(x),On(T,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Z,X),this.info.render.frame++,Q===!0&&Vt.beginShadows();let z=m.state.shadowsArray;if(et.render(z,T,O),Q===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(x,T),m.setupLights(_._useLegacyLights),O.isArrayCamera){let V=O.cameras;for(let k=0,gt=V.length;k<gt;k++){let Et=V[k];Hc(x,T,Et,Et.viewport)}}else Hc(x,T,O);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,O),Wt.resetDefaultState(),D=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function On(T,O,z,V){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){V&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xt);let Et=K.update(T),It=T.material;It.visible&&x.push(T,Et,It,z,kt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let Et=K.update(T),It=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),kt.copy(Et.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(xt)),Array.isArray(It)){let Nt=Et.groups;for(let Xt=0,zt=Nt.length;Xt<zt;Xt++){let Gt=Nt[Xt],Pe=It[Gt.materialIndex];Pe&&Pe.visible&&x.push(T,Et,Pe,z,kt.z,Gt)}}else It.visible&&x.push(T,Et,It,z,kt.z,null)}}let gt=T.children;for(let Et=0,It=gt.length;Et<It;Et++)On(gt[Et],O,z,V)}function Hc(T,O,z,V){let k=T.opaque,gt=T.transmissive,Et=T.transparent;m.setupLightsView(z),Q===!0&&Vt.setGlobalState(_.clippingPlanes,z),gt.length>0&&nd(k,gt,O,z),V&&Y.viewport(S.copy(V)),k.length>0&&Ur(k,O,z),gt.length>0&&Ur(gt,O,z),Et.length>0&&Ur(Et,O,z),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function nd(T,O,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let gt=ot.isWebGL2;Mt===null&&(Mt=new Dn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?ir:ui,minFilter:nr,samples:gt?4:0})),_.getDrawingBufferSize(Dt),gt?Mt.setSize(Dt.x,Dt.y):Mt.setSize(ml(Dt.x),ml(Dt.y));let Et=_.getRenderTarget();_.setRenderTarget(Mt),_.getClearColor(W),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let It=_.toneMapping;_.toneMapping=Bn,Ur(T,z,V),E.updateMultisampleRenderTarget(Mt),E.updateRenderTargetMipmap(Mt);let Nt=!1;for(let Xt=0,zt=O.length;Xt<zt;Xt++){let Gt=O[Xt],Pe=Gt.object,un=Gt.geometry,ze=Gt.material,Gn=Gt.group;if(ze.side===Ve&&Pe.layers.test(V.layers)){let Se=ze.side;ze.side=cn,ze.needsUpdate=!0,Vc(Pe,z,V,un,ze,Gn),ze.side=Se,ze.needsUpdate=!0,Nt=!0}}Nt===!0&&(E.updateMultisampleRenderTarget(Mt),E.updateRenderTargetMipmap(Mt)),_.setRenderTarget(Et),_.setClearColor(W,L),_.toneMapping=It}function Ur(T,O,z){let V=O.isScene===!0?O.overrideMaterial:null;for(let k=0,gt=T.length;k<gt;k++){let Et=T[k],It=Et.object,Nt=Et.geometry,Xt=V===null?Et.material:V,zt=Et.group;It.layers.test(z.layers)&&Vc(It,O,z,Nt,Xt,zt)}}function Vc(T,O,z,V,k,gt){T.onBeforeRender(_,O,z,V,k,gt),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(_,O,z,V,T,gt),k.transparent===!0&&k.side===Ve&&k.forceSinglePass===!1?(k.side=cn,k.needsUpdate=!0,_.renderBufferDirect(z,O,V,k,T,gt),k.side=di,k.needsUpdate=!0,_.renderBufferDirect(z,O,V,k,T,gt),k.side=Ve):_.renderBufferDirect(z,O,V,k,T,gt),T.onAfterRender(_,O,z,V,k,gt)}function Nr(T,O,z){O.isScene!==!0&&(O=bt);let V=mt.get(T),k=m.state.lights,gt=m.state.shadowsArray,Et=k.state.version,It=vt.getParameters(T,k.state,gt,O,z),Nt=vt.getProgramCacheKey(It),Xt=V.programs;V.environment=T.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(T.isMeshStandardMaterial?B:M).get(T.envMap||V.environment),Xt===void 0&&(T.addEventListener("dispose",ft),Xt=new Map,V.programs=Xt);let zt=Xt.get(Nt);if(zt!==void 0){if(V.currentProgram===zt&&V.lightsStateVersion===Et)return Wc(T,It),zt}else It.uniforms=vt.getUniforms(T),T.onBuild(z,It,_),T.onBeforeCompile(It,_),zt=vt.acquireProgram(It,Nt),Xt.set(Nt,zt),V.uniforms=It.uniforms;let Gt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=Vt.uniform),Wc(T,It),V.needsLights=rd(T),V.lightsStateVersion=Et,V.needsLights&&(Gt.ambientLightColor.value=k.state.ambient,Gt.lightProbe.value=k.state.probe,Gt.directionalLights.value=k.state.directional,Gt.directionalLightShadows.value=k.state.directionalShadow,Gt.spotLights.value=k.state.spot,Gt.spotLightShadows.value=k.state.spotShadow,Gt.rectAreaLights.value=k.state.rectArea,Gt.ltc_1.value=k.state.rectAreaLTC1,Gt.ltc_2.value=k.state.rectAreaLTC2,Gt.pointLights.value=k.state.point,Gt.pointLightShadows.value=k.state.pointShadow,Gt.hemisphereLights.value=k.state.hemi,Gt.directionalShadowMap.value=k.state.directionalShadowMap,Gt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Gt.spotShadowMap.value=k.state.spotShadowMap,Gt.spotLightMatrix.value=k.state.spotLightMatrix,Gt.spotLightMap.value=k.state.spotLightMap,Gt.pointShadowMap.value=k.state.pointShadowMap,Gt.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=zt,V.uniformsList=null,zt}function Gc(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=xs.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Wc(T,O){let z=mt.get(T);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function id(T,O,z,V,k){O.isScene!==!0&&(O=bt),E.resetTextureUnits();let gt=O.fog,Et=V.isMeshStandardMaterial?O.environment:null,It=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Kn,Nt=(V.isMeshStandardMaterial?B:M).get(V.envMap||Et),Xt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,zt=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Gt=!!z.morphAttributes.position,Pe=!!z.morphAttributes.normal,un=!!z.morphAttributes.color,ze=Bn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ze=_.toneMapping);let Gn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Se=Gn!==void 0?Gn.length:0,Zt=mt.get(V),ba=m.state.lights;if(Q===!0&&(pt===!0||T!==b)){let yn=T===b&&V.id===D;Vt.setState(V,T,yn)}let Re=!1;V.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==ba.state.version||Zt.outputColorSpace!==It||k.isBatchedMesh&&Zt.batching===!1||!k.isBatchedMesh&&Zt.batching===!0||k.isInstancedMesh&&Zt.instancing===!1||!k.isInstancedMesh&&Zt.instancing===!0||k.isSkinnedMesh&&Zt.skinning===!1||!k.isSkinnedMesh&&Zt.skinning===!0||k.isInstancedMesh&&Zt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Zt.instancingColor===!1&&k.instanceColor!==null||Zt.envMap!==Nt||V.fog===!0&&Zt.fog!==gt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Vt.numPlanes||Zt.numIntersection!==Vt.numIntersection)||Zt.vertexAlphas!==Xt||Zt.vertexTangents!==zt||Zt.morphTargets!==Gt||Zt.morphNormals!==Pe||Zt.morphColors!==un||Zt.toneMapping!==ze||ot.isWebGL2===!0&&Zt.morphTargetsCount!==Se)&&(Re=!0):(Re=!0,Zt.__version=V.version);let Si=Zt.currentProgram;Re===!0&&(Si=Nr(V,O,k));let qc=!1,Ws=!1,Sa=!1,Ze=Si.getUniforms(),Ei=Zt.uniforms;if(Y.useProgram(Si.program)&&(qc=!0,Ws=!0,Sa=!0),V.id!==D&&(D=V.id,Ws=!0),qc||b!==T){Ze.setValue(I,"projectionMatrix",T.projectionMatrix),Ze.setValue(I,"viewMatrix",T.matrixWorldInverse);let yn=Ze.map.cameraPosition;yn!==void 0&&yn.setValue(I,kt.setFromMatrixPosition(T.matrixWorld)),ot.logarithmicDepthBuffer&&Ze.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ze.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Ws=!0,Sa=!0)}if(k.isSkinnedMesh){Ze.setOptional(I,k,"bindMatrix"),Ze.setOptional(I,k,"bindMatrixInverse");let yn=k.skeleton;yn&&(ot.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Ze.setValue(I,"boneTexture",yn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ze.setOptional(I,k,"batchingTexture"),Ze.setValue(I,"batchingTexture",k._matricesTexture,E));let Ea=z.morphAttributes;if((Ea.position!==void 0||Ea.normal!==void 0||Ea.color!==void 0&&ot.isWebGL2===!0)&&Kt.update(k,z,Si),(Ws||Zt.receiveShadow!==k.receiveShadow)&&(Zt.receiveShadow=k.receiveShadow,Ze.setValue(I,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ei.envMap.value=Nt,Ei.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Ws&&(Ze.setValue(I,"toneMappingExposure",_.toneMappingExposure),Zt.needsLights&&sd(Ei,Sa),gt&&V.fog===!0&&ht.refreshFogUniforms(Ei,gt),ht.refreshMaterialUniforms(Ei,V,J,H,Mt),xs.upload(I,Gc(Zt),Ei,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(xs.upload(I,Gc(Zt),Ei,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ze.setValue(I,"center",k.center),Ze.setValue(I,"modelViewMatrix",k.modelViewMatrix),Ze.setValue(I,"normalMatrix",k.normalMatrix),Ze.setValue(I,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let yn=V.uniformsGroups;for(let wa=0,od=yn.length;wa<od;wa++)if(ot.isWebGL2){let Xc=yn[wa];ae.update(Xc,Si),ae.bind(Xc,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function sd(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function rd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,O,z){mt.get(T.texture).__webglTexture=O,mt.get(T.depthTexture).__webglTexture=z;let V=mt.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){let z=mt.get(T);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,z=0){R=T,A=O,w=z;let V=!0,k=null,gt=!1,Et=!1;if(T){let Nt=mt.get(T);Nt.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):Nt.__webglFramebuffer===void 0?E.setupRenderTarget(T):Nt.__hasExternalTextures&&E.rebindTextures(T,mt.get(T.texture).__webglTexture,mt.get(T.depthTexture).__webglTexture);let Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Et=!0);let zt=mt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?k=zt[O][z]:k=zt[O],gt=!0):ot.isWebGL2&&T.samples>0&&E.useMultisampledRTT(T)===!1?k=mt.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?k=zt[z]:k=zt,S.copy(T.viewport),N.copy(T.scissor),G=T.scissorTest}else S.copy(nt).multiplyScalar(J).floor(),N.copy(it).multiplyScalar(J).floor(),G=dt;if(Y.bindFramebuffer(I.FRAMEBUFFER,k)&&ot.drawBuffers&&V&&Y.drawBuffers(T,k),Y.viewport(S),Y.scissor(N),Y.setScissorTest(G),gt){let Nt=mt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Nt.__webglTexture,z)}else if(Et){let Nt=mt.get(T.texture),Xt=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nt.__webglTexture,z||0,Xt)}D=-1},this.readRenderTargetPixels=function(T,O,z,V,k,gt,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It){Y.bindFramebuffer(I.FRAMEBUFFER,It);try{let Nt=T.texture,Xt=Nt.format,zt=Nt.type;if(Xt!==Ln&&yt.convert(Xt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Gt=zt===ir&&($.has("EXT_color_buffer_half_float")||ot.isWebGL2&&$.has("EXT_color_buffer_float"));if(zt!==ui&&yt.convert(zt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===ci&&(ot.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-V&&z>=0&&z<=T.height-k&&I.readPixels(O,z,V,k,yt.convert(Xt),yt.convert(zt),gt)}finally{let Nt=R!==null?mt.get(R).__webglFramebuffer:null;Y.bindFramebuffer(I.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(T,O,z=0){let V=Math.pow(2,-z),k=Math.floor(O.image.width*V),gt=Math.floor(O.image.height*V);E.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,T.x,T.y,k,gt),Y.unbindTexture()},this.copyTextureToTexture=function(T,O,z,V=0){let k=O.image.width,gt=O.image.height,Et=yt.convert(z.format),It=yt.convert(z.type);E.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,T.x,T.y,k,gt,Et,It,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Et,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,V,T.x,T.y,Et,It,O.image),V===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,O,z,V,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=T.max.x-T.min.x+1,Et=T.max.y-T.min.y+1,It=T.max.z-T.min.z+1,Nt=yt.convert(V.format),Xt=yt.convert(V.type),zt;if(V.isData3DTexture)E.setTexture3D(V,0),zt=I.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)E.setTexture2DArray(V,0),zt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);let Gt=I.getParameter(I.UNPACK_ROW_LENGTH),Pe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),un=I.getParameter(I.UNPACK_SKIP_PIXELS),ze=I.getParameter(I.UNPACK_SKIP_ROWS),Gn=I.getParameter(I.UNPACK_SKIP_IMAGES),Se=z.isCompressedTexture?z.mipmaps[k]:z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?I.texSubImage3D(zt,k,O.x,O.y,O.z,gt,Et,It,Nt,Xt,Se.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(zt,k,O.x,O.y,O.z,gt,Et,It,Nt,Se.data)):I.texSubImage3D(zt,k,O.x,O.y,O.z,gt,Et,It,Nt,Xt,Se),I.pixelStorei(I.UNPACK_ROW_LENGTH,Gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,un),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gn),k===0&&V.generateMipmaps&&I.generateMipmap(zt),Y.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,Y.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===tc?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===Vo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Ui:Du}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ui?ge:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Pl=class extends ar{};Pl.prototype.isWebGL1Renderer=!0;var ws=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Un=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var lr=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pu=new xe,Il=new sr,so=new Ms,ro=new C,Ro=class extends je{constructor(t=new ce,e=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;pu.copy(s).invert(),Il.copy(t.ray).applyMatrix4(pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);ro.fromBufferAttribute(u,m),mu(ro,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)ro.fromBufferAttribute(u,g),mu(ro,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mu(i,t,e,n,s,r,o){let a=Il.distanceSqToPoint(i);if(a<e){let l=new C;Il.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var mi=class extends Sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new j:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,l=new xe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cr=class extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new j,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ll=class extends cr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var oo=new C,il=new nc,sl=new nc,rl=new nc,hr=class extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(oo.subVectors(s[0],s[1]).add(s[0]),c=oo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(oo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),il.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),sl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),rl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),rl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(il.calc(l),sl.calc(l),rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function jx(i,t){let e=1-i;return e*e*t}function Qx(i,t){return 2*(1-i)*i*t}function t_(i,t){return i*i*t}function Qs(i,t,e,n){return jx(i,t)+Qx(i,e)+t_(i,n)}function e_(i,t){let e=1-i;return e*e*e*t}function n_(i,t){let e=1-i;return 3*e*e*i*t}function i_(i,t){return 3*(1-i)*i*i*t}function s_(i,t){return i*i*i*t}function tr(i,t,e,n,s){return e_(i,t)+n_(i,e)+i_(i,n)+s_(i,s)}var Co=class extends En{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ur=class extends En{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y),tr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends En{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends En{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends En{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qs(t,s.x,r.x,o.x),Qs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends En{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qs(t,s.x,r.x,o.x),Qs(t,s.y,r.y,o.y),Qs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(gu(a,l.x,c.x,h.x,u.x),gu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:hr,CubicBezierCurve:Co,CubicBezierCurve3:ur,EllipseCurve:cr,LineCurve:Po,LineCurve3:Dl,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Lo,SplineCurve:Do}),Ul=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Uo[s.type]().fromJSON(s))}return this}},Ts=class extends Ul{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Po(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Io(this.currentPoint.clone(),new j(t,e),new j(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Co(this.currentPoint.clone(),new j(t,e),new j(n,s),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Do(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new cr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},As=class i extends ce{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,f=new j,d=new C,g=new C,x=new C,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),A=Math.cos(_);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*A,o.push(u.x,u.y,u.z),f.x=y/e,f.y=w/(t.length-1),a.push(f.x,f.y);let R=l[3*w+0]*v,D=l[3*w+1],b=l[3*w+0]*A;c.push(R,D,b)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,A=v,w=v+t.length,R=v+t.length+1,D=v+1;r.push(A,w,D),r.push(R,D,w)}this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("uv",new Lt(a,2)),this.setAttribute("normal",new Lt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var fr=class i extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Me=class i extends ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(f,3)),this.setAttribute("uv",new Lt(d,2));function y(){let v=new C,A=new C,w=0,R=(e-t)/n;for(let D=0;D<=r;D++){let b=[],S=D/r,N=S*(e-t)+t;for(let G=0;G<=s;G++){let W=G/s,L=W*l+a,F=Math.sin(L),H=Math.cos(L);A.x=N*F,A.y=-S*n+m,A.z=N*H,u.push(A.x,A.y,A.z),v.set(F,R,H).normalize(),f.push(v.x,v.y,v.z),d.push(W,1-S),b.push(g++)}x.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){let S=x[b][D],N=x[b+1][D],G=x[b+1][D+1],W=x[b][D+1];h.push(S,N,W),h.push(N,G,W),w+=6}c.addGroup(p,w,0),p+=w}function _(v){let A=g,w=new j,R=new C,D=0,b=v===!0?t:e,S=v===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let N=g;for(let G=0;G<=s;G++){let L=G/s*l+a,F=Math.cos(L),H=Math.sin(L);R.x=b*H,R.y=m*S,R.z=b*F,u.push(R.x,R.y,R.z),f.push(0,S,0),w.x=F*.5+.5,w.y=H*.5*S+.5,d.push(w.x,w.y),g++}for(let G=0;G<s;G++){let W=A+G,L=N+G;v===!0?h.push(L,L+1,W):h.push(L+1,L,W),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ti=class i extends Me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nl=class i extends ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new C,v=new C,A=new C;for(let w=0;w<e.length;w+=3)d(e[w+0],_),d(e[w+1],v),d(e[w+2],A),l(_,v,A,y)}function l(y,_,v,A){let w=A+1,R=[];for(let D=0;D<=w;D++){R[D]=[];let b=y.clone().lerp(v,D/w),S=_.clone().lerp(v,D/w),N=w-D;for(let G=0;G<=N;G++)G===0&&D===w?R[D][G]=b:R[D][G]=b.clone().lerp(S,G/N)}for(let D=0;D<w;D++)for(let b=0;b<2*(w-D)-1;b++){let S=Math.floor(b/2);b%2===0?(f(R[D][S+1]),f(R[D+1][S]),f(R[D][S])):(f(R[D][S+1]),f(R[D+1][S+1]),f(R[D+1][S]))}}function c(y){let _=new C;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let y=new C;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let v=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(v,1-A)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],v=o[y+2],A=o[y+4],w=Math.max(_,v,A),R=Math.min(_,v,A);w>.9&&R<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){let y=new C,_=new C,v=new C,A=new C,w=new j,R=new j,D=new j;for(let b=0,S=0;b<r.length;b+=9,S+=6){y.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),A.copy(y).add(_).add(v).divideScalar(3);let N=m(A);x(w,S+0,y,N),x(R,S+2,_,N),x(D,S+4,v,N)}}function x(y,_,v,A){A<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var pn=class extends Ts{constructor(t){super(t),this.uuid=Is(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ts().fromJSON(s))}return this}},r_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Wu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=h_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return dr(r,o,e,a,l,d,0),o}};function Wu(i,t,e,n,s){let r,o;if(s===M_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=xu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=xu(r,i[r],i[r+1],o);return o&&Wo(o,o.next)&&(mr(o),o=o.next),o}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wo(e,e.next)||we(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&m_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?a_(i,n,s,r):o_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),mr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=l_(Bi(i),t,e),dr(i,t,e,n,s,r,2)):o===2&&c_(i,t,e,n,s,r):dr(Bi(i),t,e,n,s,r,1);break}}}function o_(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ps(s,a,r,l,o,c,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function a_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Ol(d,g,t,e,n),y=Ol(x,m,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ps(a,h,l,u,c,f,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ps(a,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ps(a,h,l,u,c,f,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ps(a,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function l_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Wo(s,r)&&qu(s,n,n.next,r)&&pr(s,r)&&pr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),mr(n),mr(n.next),n=i=r),n=n.next}while(n!==i);return Bi(n)}function c_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&__(o,a)){let l=Xu(o,a);o=Bi(o,o.next),l=Bi(l,l.next),dr(o,t,e,n,s,r,0),dr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function h_(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Wu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(x_(c));for(s.sort(u_),r=0;r<s.length;r++)e=f_(s[r],e);return e}function u_(i,t){return i.x-t.x}function f_(i,t){let e=d_(i,t);if(!e)return t;let n=Xu(e,i);return Bi(n,n.next),Bi(e,e.next)}function d_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ps(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),pr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&p_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function p_(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function m_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,g_(s)}function g_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function x_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ps(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function __(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!y_(i,t)&&(pr(i,t)&&pr(t,i)&&v_(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||Wo(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wo(i,t){return i.x===t.x&&i.y===t.y}function qu(i,t,e,n){let s=lo(we(i,t,e)),r=lo(we(i,t,n)),o=lo(we(e,n,i)),a=lo(we(e,n,t));return!!(s!==r&&o!==a||s===0&&ao(i,e,t)||r===0&&ao(i,n,t)||o===0&&ao(e,i,n)||a===0&&ao(e,t,n))}function ao(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function lo(i){return i>0?1:i<0?-1:0}function y_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function pr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function v_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xu(i,t){let e=new Fl(i.i,i.x,i.y),n=new Fl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xu(i,t,e,n){let s=new Fl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var fi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_u(t),yu(n,t);let o=t.length;e.forEach(_u);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,yu(n,e[l]);let a=r_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function _u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ei=class i extends ce{constructor(t=new pn([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Lt(s,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:b_,_,v=!1,A,w,R,D;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,A=p.computeFrenetFrames(h,!1),w=new C,R=new C,D=new C),f||(m=0,d=0,g=0,x=0);let b=a.extractPoints(c),S=b.shape,N=b.holes;if(!fi.isClockWise(S)){S=S.reverse();for(let I=0,at=N.length;I<at;I++){let $=N[I];fi.isClockWise($)&&(N[I]=$.reverse())}}let W=fi.triangulateShape(S,N),L=S;for(let I=0,at=N.length;I<at;I++){let $=N[I];S=S.concat($)}function F(I,at,$){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(at,$)}let H=S.length,J=W.length;function Z(I,at,$){let ot,Y,wt,mt=I.x-at.x,E=I.y-at.y,M=$.x-I.x,B=$.y-I.y,st=mt*mt+E*E,tt=mt*B-E*M;if(Math.abs(tt)>Number.EPSILON){let K=Math.sqrt(st),vt=Math.sqrt(M*M+B*B),ht=at.x-E/K,_t=at.y+mt/K,Ct=$.x-B/vt,Vt=$.y+M/vt,et=((Ct-ht)*B-(Vt-_t)*M)/(mt*B-E*M);ot=ht+mt*et-I.x,Y=_t+E*et-I.y;let se=ot*ot+Y*Y;if(se<=2)return new j(ot,Y);wt=Math.sqrt(se/2)}else{let K=!1;mt>Number.EPSILON?M>Number.EPSILON&&(K=!0):mt<-Number.EPSILON?M<-Number.EPSILON&&(K=!0):Math.sign(E)===Math.sign(B)&&(K=!0),K?(ot=-E,Y=mt,wt=Math.sqrt(st)):(ot=mt,Y=E,wt=Math.sqrt(st/2))}return new j(ot/wt,Y/wt)}let X=[];for(let I=0,at=L.length,$=at-1,ot=I+1;I<at;I++,$++,ot++)$===at&&($=0),ot===at&&(ot=0),X[I]=Z(L[I],L[$],L[ot]);let nt=[],it,dt=X.concat();for(let I=0,at=N.length;I<at;I++){let $=N[I];it=[];for(let ot=0,Y=$.length,wt=Y-1,mt=ot+1;ot<Y;ot++,wt++,mt++)wt===Y&&(wt=0),mt===Y&&(mt=0),it[ot]=Z($[ot],$[wt],$[mt]);nt.push(it),dt=dt.concat(it)}for(let I=0;I<m;I++){let at=I/m,$=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+x;for(let Y=0,wt=L.length;Y<wt;Y++){let mt=F(L[Y],X[Y],ot);xt(mt.x,mt.y,-$)}for(let Y=0,wt=N.length;Y<wt;Y++){let mt=N[Y];it=nt[Y];for(let E=0,M=mt.length;E<M;E++){let B=F(mt[E],it[E],ot);xt(B.x,B.y,-$)}}}let q=g+x;for(let I=0;I<H;I++){let at=f?F(S[I],dt[I],q):S[I];v?(R.copy(A.normals[0]).multiplyScalar(at.x),w.copy(A.binormals[0]).multiplyScalar(at.y),D.copy(_[0]).add(R).add(w),xt(D.x,D.y,D.z)):xt(at.x,at.y,0)}for(let I=1;I<=h;I++)for(let at=0;at<H;at++){let $=f?F(S[at],dt[at],q):S[at];v?(R.copy(A.normals[I]).multiplyScalar($.x),w.copy(A.binormals[I]).multiplyScalar($.y),D.copy(_[I]).add(R).add(w),xt(D.x,D.y,D.z)):xt($.x,$.y,u/h*I)}for(let I=m-1;I>=0;I--){let at=I/m,$=d*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+x;for(let Y=0,wt=L.length;Y<wt;Y++){let mt=F(L[Y],X[Y],ot);xt(mt.x,mt.y,u+$)}for(let Y=0,wt=N.length;Y<wt;Y++){let mt=N[Y];it=nt[Y];for(let E=0,M=mt.length;E<M;E++){let B=F(mt[E],it[E],ot);v?xt(B.x,B.y+_[h-1].y,_[h-1].x+$):xt(B.x,B.y,u+$)}}}Q(),pt();function Q(){let I=s.length/3;if(f){let at=0,$=H*at;for(let ot=0;ot<J;ot++){let Y=W[ot];Dt(Y[2]+$,Y[1]+$,Y[0]+$)}at=h+m*2,$=H*at;for(let ot=0;ot<J;ot++){let Y=W[ot];Dt(Y[0]+$,Y[1]+$,Y[2]+$)}}else{for(let at=0;at<J;at++){let $=W[at];Dt($[2],$[1],$[0])}for(let at=0;at<J;at++){let $=W[at];Dt($[0]+H*h,$[1]+H*h,$[2]+H*h)}}n.addGroup(I,s.length/3-I,0)}function pt(){let I=s.length/3,at=0;Mt(L,at),at+=L.length;for(let $=0,ot=N.length;$<ot;$++){let Y=N[$];Mt(Y,at),at+=Y.length}n.addGroup(I,s.length/3-I,1)}function Mt(I,at){let $=I.length;for(;--$>=0;){let ot=$,Y=$-1;Y<0&&(Y=I.length-1);for(let wt=0,mt=h+m*2;wt<mt;wt++){let E=H*wt,M=H*(wt+1),B=at+ot+E,st=at+Y+E,tt=at+Y+M,K=at+ot+M;kt(B,st,tt,K)}}}function xt(I,at,$){l.push(I),l.push(at),l.push($)}function Dt(I,at,$){bt(I),bt(at),bt($);let ot=s.length/3,Y=y.generateTopUV(n,s,ot-3,ot-2,ot-1);Ft(Y[0]),Ft(Y[1]),Ft(Y[2])}function kt(I,at,$,ot){bt(I),bt(at),bt(ot),bt(at),bt($),bt(ot);let Y=s.length/3,wt=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);Ft(wt[0]),Ft(wt[1]),Ft(wt[3]),Ft(wt[1]),Ft(wt[2]),Ft(wt[3])}function bt(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function Ft(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return S_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Uo[s.type]().fromJSON(s)),new i(n,t.options)}},b_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new j(r,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-u),new j(f,1-g),new j(x,1-p)]:[new j(a,1-l),new j(h,1-u),new j(d,1-g),new j(m,1-p)]}};function S_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var mn=class i extends Nl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var No=class i extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new C,g=new j;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,v=y+n+1,A=y+n+2,w=y+1;a.push(_,v,w),a.push(v,A,w)}}this.setIndex(a),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Oo=class i extends ce{constructor(t=new pn([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;fi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];fi.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=fi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],_=y[0]+u,v=y[1]+u,A=y[2]+u;n.push(_,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return E_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function E_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Fo=class i extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){let w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(w+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],A=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&d.push(_,v,w),(p!==n-1||l<Math.PI)&&d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zn=class i extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Bo=class i extends ce{constructor(t=new Lo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new j,h=new C,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(f,3)),this.setAttribute("uv",new Lt(d,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),p()}function m(_){h=t.getPointAt(_/e,h);let v=o.normals[_],A=o.binormals[_];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,D=Math.sin(R),b=-Math.cos(R);l.x=b*v.x+D*A.x,l.y=b*v.y+D*A.y,l.z=b*v.z+D*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let A=(s+1)*(_-1)+(v-1),w=(s+1)*_+(v-1),R=(s+1)*_+v,D=(s+1)*(_-1)+v;g.push(A,w,D),g.push(w,R,D)}}function y(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Uo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var sn=class extends jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var gn=class extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function co(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function w_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Rs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends Rs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wh:r=t,a=2*e-n;break;case Th:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:o=t,l=2*n-e;break;case Th:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+y*o[c+A]+_*o[l+A]+v*o[u+A];return r}},kl=class extends Rs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},zl=class extends Rs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=co(e,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:co(t.times,Array),values:co(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case uo:e=this.InterpolantFactoryMethodDiscrete;break;case fo:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uo;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&w_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===La,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=fo;var ki=class extends Nn{};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=uo;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Nn{};Hl.prototype.ValueTypeName="color";var Vl=class extends Nn{};Vl.prototype.ValueTypeName="number";var Gl=class extends Rs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)kn.slerpFlat(r,0,o,c-a,o,c,l);return r}},gr=class extends Nn{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};gr.prototype.ValueTypeName="quaternion";gr.prototype.DefaultInterpolation=fo;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Nn{};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=uo;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Nn{};Wl.prototype.ValueTypeName="vector";var ql=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},T_=new ql,Xl=class{constructor(t){this.manager=t!==void 0?t:T_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cs=class extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ko=class extends Cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ol=new xe,vu=new C,Mu=new C,zo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(vu),Mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mu),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var bu=new xe,Js=new C,al=new C,Yl=class extends zo{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),al.copy(n.position),al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(al),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu)}},xr=class extends Cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},$l=class extends zo{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rn=class extends Cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},gi=class extends Cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ic="\\[\\]\\.:\\/",A_=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",R_="[^"+ic.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",sc),P_=/(WCOD+)?/.source.replace("WCOD",R_),I_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),D_=new RegExp("^"+C_+P_+I_+L_+"$"),U_=["material","materials","bones","map"],Zl=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(A_,"")}static parseTrackName(t){let e=D_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);U_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Zl;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sv=new Float32Array(1);var Ps=class{constructor(t,e,n=0,s=1/0){this.ray=new sr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Jl(t,this,n,e),n.sort(Su),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jl(t[s],this,n,e);return n.sort(Su),n}};function Su(i,t){return i.distance-t.distance}function Jl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Jl(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);function Qe(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function N_(i,t,e){let n=Math.ceil(i/t)+1,s=[];for(let a=0;a<n;a++){s[a]=[];for(let l=0;l<n;l++)s[a][l]=e()}let r=(a,l)=>s[(l%(n-1)+(n-1))%(n-1)][(a%(n-1)+(n-1))%(n-1)],o=a=>a*a*(3-2*a);return(a,l)=>{let c=a/t,h=l/t,u=Math.floor(c),f=Math.floor(h),d=o(c-u),g=o(h-f),x=r(u,f),m=r(u+1,f),p=r(u,f+1),y=r(u+1,f+1);return(x*(1-d)+m*d)*(1-g)+(p*(1-d)+y*d)*g}}function Le(i,t,e=4,n=16){let s=[];for(let r=0;r<e;r++)s.push(N_(i,Math.max(2,n>>r),t));return(r,o)=>{let a=0,l=.5,c=0;for(let h of s)a+=h(r,o)*l,c+=l,l*=.5;return a/c}}var ee=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],De=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],rc=i=>Math.max(0,Math.min(255,i|0)),Zu=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function xn(i,t,e=i){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=s.createImageData(i,e),o=r.data;for(let a=0;a<e;a++)for(let l=0;l<i;l++){let[c,h,u]=t(l,a),f=(a*i+l)*4;o[f]=rc(c),o[f+1]=rc(h),o[f+2]=rc(u),o[f+3]=255}return s.putImageData(r,0,0),n}function oc(i,t,e,n,s,r){let o=s(i*.35,t*6+r)*.6+s(i*3,t*.2)*.4,a=Math.sin((i*.9+o*18)*.7)*.5+.5;return De(e,n,a*.55+o*.45)}function Us(i,t,e,n,s,r,o){let a=De(e,n,r(i,t)),l=Math.abs(o(i,t)-.5);return l<.03&&(a=De(a,s,.7-l*14)),a}function qo(i){return xn(256,(n,s)=>{let r=Math.floor(n/32),o=Math.floor(s/32),a=(r+o)%2===1,l=n%32,c=s%32,h=i(n,s,r,o,a,l,c);return(l===0||c===31)&&(h=De(h,[0,0,0],.45)),(l===31||c===0)&&(h=De(h,[255,255,255],a?.08:.16)),h})}var O_={glass(){let i=Qe(7),t=Le(256,i,3,24),e=ee("#b488c6"),n=ee("#6f4588"),s=ee("#3b1247"),r=ee("#160618");return qo((o,a,l,c,h,u,f)=>{let d=h?De(s,r,t(o,a)):De(e,n,t(o,a));return Math.abs((u+f)%32-11)<2&&(d=De(d,[255,240,255],h?.12:.22)),d})},wood(){let i=Qe(8),t=Le(256,i,4,24),e=ee("#d8c39a"),n=ee("#a98c5e"),s=ee("#5a3b24"),r=ee("#2e1b10");return qo((o,a,l,c,h)=>h?oc(o+l*13,a+c*7,s,r,t,c*31):oc(a+c*5,o+l*11,e,n,t,l*17))},marble(){let i=Qe(9),t=Le(256,i,4,20),e=Le(256,i,3,40),n=ee("#efe6d2"),s=ee("#cbbfa6"),r=ee("#24423a"),o=ee("#0c1a16");return qo((a,l,c,h,u)=>u?Us(a+c*40,l,r,o,ee("#7fa898"),t,e):Us(a,l+h*40,n,s,ee("#8f8470"),t,e))},tile(){let i=Qe(10),t=Le(256,i,2,16);return qo((e,n,s,r,o)=>{let a=t(e,n)*16+Zu[n%4*4+e%4],l=o?[30,30,36]:[214,210,200];return a>20?De(l,o?[60,60,70]:[170,166,158],.6):l})}},F_={glass(){return Yu(99)},tile(){return Yu(98)},wood(){let i=Qe(97),t=Le(64,i,4,16);return xn(64,(e,n)=>oc(e,n,ee("#3b2416"),ee("#1a0e08"),t,0))},marble(){let i=Qe(96),t=Le(64,i,3,12),e=Le(64,i,3,20);return xn(64,(n,s)=>Us(n,s,ee("#3a3a36"),ee("#16140f"),ee("#8a7a5a"),t,e))}};function Yu(i){let t=Qe(i),e=Le(64,t,3,8),n=ee("#b9bec6"),s=ee("#4a4e56");return xn(64,(r,o)=>{let a=De(n,s,(Math.sin(o*.55)*.5+.5)*.7+e(r,o)*.3);return o%16===3&&(a=De(a,[255,255,255],.5)),o%16===11&&(a=De(a,[0,0,0],.5)),a})}var B_={stars(){let i=Qe(5);return xn(128,()=>{let t=i();return t<.012?[70,66,80]:t<.02?[40,36,48]:[4,2,6]})},velvet(){let i=Qe(6),t=Le(128,i,5,32),e=ee("#4a1d22"),n=ee("#1e0b0e");return xn(128,(s,r)=>{let o=De(e,n,t(s,r));return i()<.05&&(o=De(o,e,.4)),o})},void(){let i=Qe(4),t=Le(128,i,4,32);return xn(128,(e,n)=>De([26,12,44],[6,3,14],t(e,n)+Zu[n%4*4+e%4]/64))}},Ju={stars:{bg:197124,fog:[12,26],ambient:[5261418,1],key:[16777215,1.6],fill:[16734928,18],fill2:[5234943,10]},velvet:{bg:722183,fog:[11,24],ambient:[6969938,1.2],key:[16769984,1.9],fill:[16730682,14],fill2:[16756848,4]},void:{bg:853528,fog:[10,22],ambient:[4209264,1.1],key:[14213375,1.5],fill:[9063167,16],fill2:[4243711,10]}},k_={ivoryWhite(){let i=Qe(11),t=Le(64,i,4,12),e=Le(64,i,3,20);return xn(64,(n,s)=>Us(n,s,ee("#efe4cc"),ee("#c9b893"),ee("#8f8470"),t,e))},ivoryBlack(){let i=Qe(23),t=Le(64,i,4,10),e=ee("#3a2f28"),n=ee("#17110e");return xn(64,(s,r)=>De(De(e,n,t(s,r)),n,(Math.sin(r*.8+t(s*2,r)*6)*.5+.5)*.3))},marbleWhite(){let i=Qe(31),t=Le(64,i,4,10),e=Le(64,i,3,16);return xn(64,(n,s)=>Us(n,s,ee("#f4f2ee"),ee("#d4d0c8"),ee("#7a7a80"),t,e))},marbleBlack(){let i=Qe(37),t=Le(64,i,4,10),e=Le(64,i,3,16);return xn(64,(n,s)=>Us(n,s,ee("#1e3a32"),ee("#08120e"),ee("#9ac0b0"),t,e))},brushed(){let i=Qe(41),t=Le(64,i,3,6);return xn(64,(e,n)=>{let s=200+t(e*.2,n*4)*55;return[s,s,s]})}};function z_(){let t=Qe(3),e=Le(64,t,2,16),n=["px","nx","py","ny","pz","nz"],s={px:(a,l)=>[1,-l,-a],nx:(a,l)=>[-1,-l,a],py:(a,l)=>[a,1,l],ny:(a,l)=>[a,-1,-l],pz:(a,l)=>[a,-l,1],nz:(a,l)=>[-a,-l,-1]},r=n.map(a=>xn(64,(l,c)=>{let h=l/63*2-1,u=c/63*2-1,[f,d,g]=s[a](h,u),x=Math.hypot(f,d,g),m=d/x,p=Math.atan2(g,f),y=e(l,c)*.15;if(m>.55){let A=Math.floor(p/Math.PI*4+100)%2;return De(A?[218,218,230]:[138,138,160],[86,82,106],(1-m)*.8+y)}if(m>.12)return De([215,218,228],[70,66,90],(m-.12)/.43+y);if(m>-.06)return[255,252,255];let _=Math.floor(p/Math.PI*6+100)%2,v=Math.min(1,(-m-.06)/.9);return De(_?[120,70,110]:[60,110,120],[8,4,10],v*.9+y)})),o=new Ss(r);return o.magFilter=Ee,o.minFilter=Ee,o.generateMipmaps=!1,o.colorSpace=ge,o.needsUpdate=!0,o}function $u(i){return i.magFilter=Ee,i.minFilter=Ee,i.generateMipmaps=!1,i.colorSpace=ge,i.wrapS=i.wrapT=er,i.needsUpdate=!0,i}var Xo=class{constructor(){this.cache=new Map,this.overrides={},this.env=null}async loadOverrides(t=[]){await Promise.all(t.map(e=>new Promise(n=>{let s=new Image;s.onload=()=>{this.overrides[e]=$u(new mi(s)),n()},s.onerror=()=>n(),s.src=`assets/textures/${e}.png`})))}get(t,e,n){return n&&this.overrides[n]?this.overrides[n]:(this.cache.has(t)||this.cache.set(t,$u(new mi(e()))),this.cache.get(t))}board(t){return this.get("board:"+t,O_[t],"board")}rim(t){return this.get("rim:"+t,F_[t],"rim")}table(t){return this.get("table:"+t,B_[t],"table")}piece(t,e){return this.get("piece:"+t,k_[t],e)}envMap(){return this.env||(this.env=z_()),this.env}};var H_=4,ac=.8,V_=.75;function G_(i){return new xe().set(0,0,-ac,0,V_,0,0,0,0,-ac,0,ac*i,0,0,0,1)}var Yo=[[0,0],[.33,0],[.33,.07],[.25,.12]],W_={p:[...Yo,[.17,.3],[.12,.38],[.19,.42],[.15,.5],[.08,.6],[0,.63]],r:[...Yo,[.21,.42],[.27,.5],[.27,.68],[0,.68]],n:[...Yo,[.2,.3],[0,.3]],b:[...Yo,[.2,.42],[.13,.5],[.23,.58],[.21,.7],[.12,.84],[.06,.88],[0,.9]],q:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.62],[.28,.72],[.29,.8],[.2,.88],[.14,.98],[0,1]],k:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.64],[.29,.74],[.29,.84],[.2,.92],[.09,.98],[0,.98]]},q_={p:.63,r:.8,n:.9,b:1,q:1.14,k:1.25};function X_(i,t=H_){let e=Math.max(...i.map(l=>l[1]))||1,n=i.map(([l,c],h)=>{let u=[];if(h%2===1&&l>0){u.push(0);for(let f=0;f<t;f++)u.push((f+.5)*Math.PI/t);u.push(Math.PI)}else for(let f=0;f<=t;f++)u.push(f*Math.PI/t);return u.map(f=>({p:[l*Math.sin(f),c,l*Math.cos(f)],uv:[f/Math.PI,c/e],a:f}))}),s=[],r=[],o=(l,c,h)=>{let u=c.p[0]-l.p[0],f=c.p[1]-l.p[1],d=c.p[2]-l.p[2],g=h.p[0]-l.p[0],x=h.p[1]-l.p[1],m=h.p[2]-l.p[2];if(!(Math.hypot(f*m-d*x,d*g-u*m,u*x-f*g)<1e-9))for(let p of[l,c,h])s.push(...p.p),r.push(...p.uv)};for(let l=0;l<n.length-1;l++){let c=n[l],h=n[l+1],u=0,f=0;for(;u<c.length-1||f<h.length-1;){let d=u<c.length-1?c[u+1].a:1/0,g=f<h.length-1?h[f+1].a:1/0;d<=g?(o(c[u],c[u+1],h[f]),u++):(o(c[u],h[f+1],h[f]),f++)}}let a=new ce;return a.setAttribute("position",new Lt(s,3)),a.setAttribute("uv",new Lt(r,2)),a}var $o=(i,t,e,n,s,r)=>new oe(i,t,e).translate(n,s,r),Ku=(i,t)=>new mn(i,0).translate(0,t,0),Y_=[[-.16,.28],[.16,.28],[.17,.5],[.3,.6],[.31,.72],[.14,.78],[.1,.9],[0,.82],[-.1,.9],[-.13,.76],[-.2,.6],[-.18,.4]],$_=[[-.18,.42],[-.2,.6],[-.13,.76],[-.1,.88],[-.04,.8],[-.07,.72],[-.12,.58],[-.1,.44]];function ju(i,t){let e=new pn,n=i.map(([o,a])=>[-o,a]);e.moveTo(n[0][0],n[0][1]);for(let o=1;o<n.length;o++)e.lineTo(n[o][0],n[o][1]);e.closePath();let s=new ei(e,t),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),l=r.getY(o),c=r.getZ(o);r.setXYZ(o,Math.max(0,c),l,-a)}return s}var lc=.24;function Z_(){let i=ju(Y_,{depth:lc-.14,bevelEnabled:!0,bevelThickness:.14,bevelSize:.1,bevelOffset:-.1,bevelSegments:3,curveSegments:1}),t=ju($_,{depth:lc+.02,bevelEnabled:!0,bevelThickness:.05,bevelSize:.025,bevelOffset:-.025,bevelSegments:1,curveSegments:1}),e=new mn(.045,0).scale(.8,1,1).translate(lc+.01,.72,.09);return[i,t,e]}function J_(i){let t=[X_(W_[i])];if(i==="r")for(let e of[-.18,0,.18])t.push($o(.24,.12,.12,.12,.74,e));else if(i==="n")t.push(...Z_());else if(i==="b")t.push(Ku(.06,.94));else if(i==="q"){t.push(Ku(.08,1.06));for(let e of[-.24,-.12,0,.12,.24])t.push($o(.16,.1,.06,.08,.86+(.24-Math.abs(e))*.25,e))}else i==="k"&&(t.push($o(.16,.28,.08,.08,1.1,0)),t.push($o(.16,.08,.26,.08,1.13,0)));return t}var cc=new Map;function K_(i){if(!cc.has(i)){let t=G_(q_[i]/2);cc.set(i,J_(i).map(e=>(e.index&&(e=e.toNonIndexed()),e.applyMatrix4(t),e.computeVertexNormals(),e)))}return cc.get(i)}var j_=new ve({color:0,transparent:!0,opacity:.5,depthWrite:!1});function Qu(i,t){let e=t.envMap(),n=l=>new sn({flatShading:!0,...l}),s=l=>new gn({flatShading:!0,...l}),r=l=>t.overrides[l]||null;if(i==="chrome")return{white:n({color:15131890,map:r("white"),envMap:e,combine:_r,reflectivity:r("white")?.3:.5,specular:10132136,shininess:90}),black:n({color:2788e3,map:r("black"),envMap:e,combine:Hi,reflectivity:.85,specular:1984080,shininess:60})};if(i==="matte")return{white:s({color:15327952}),black:s({color:2056046})};if(i==="ivory")return{white:s({map:t.piece("ivoryWhite","white")}),black:s({map:t.piece("ivoryBlack","black")})};if(i==="marble")return{white:n({map:t.piece("marbleWhite","white"),specular:4473924,shininess:40}),black:n({map:t.piece("marbleBlack","black"),specular:2240552,shininess:40})};let o=t.piece("brushed",null),a=(l,c)=>n({color:l,map:o,envMap:e,combine:Hi,reflectivity:.6,specular:c,shininess:70});return{white:a(16764778,9075280),black:a(9082532,3818576)}}function hc(i,t,e){let n=t==="w"?e.white:e.black,s=K_(i),r=new re,o=new re;for(let l of s)o.add(new Ht(l,n));let a=new re;for(let l of s){let c=new Ht(l,j_);c.renderOrder=4,a.add(c)}return a.scale.y=.02,a.position.set(.06,.004,.07),r.add(a,o),r.userData={type:i,color:t,body:o,shadow:a},r}function tf(){let i=new Ht(new zn(.46,.035,4,12),new ve({color:8382975}));return i.rotation.x=Math.PI/2,i.position.y=.03,i}var Ns=[{id:"pieces",label:"\uB9D0 \uC7AC\uC9C8",hint:"\uCCB4\uC2A4\uB9D0 \uD45C\uBA74. \uBC18\uC0AC\uC640 \uC9C8\uAC10\uC774 \uD654\uBA74 \uC778\uC0C1\uC744 \uAC00\uC7A5 \uD06C\uAC8C \uBC14\uAFC9\uB2C8\uB2E4.",options:[{id:"chrome",label:"\uD06C\uB86C & \uC2DC\uC548",note:"Virtual Chess\uC2DD \uC0AC\uC804\uB80C\uB354 CG \uBC18\uC0AC"},{id:"matte",label:"\uBB34\uAD11 \uD50C\uB7AB",note:"\uBC18\uC0AC \uC5C6\uC774 \uBA74\uB9CC, \uB85C\uC6B0\uD3F4\uB9AC\uAC00 \uAC00\uC7A5 \uB610\uB837"},{id:"ivory",label:"\uC0C1\uC544 & \uD751\uB2E8",note:"\uB098\uBB47\uACB0\uACFC \uC0C1\uC544\uACB0, \uBC18\uC0AC \uC5C6\uC74C"},{id:"marble",label:"\uB300\uB9AC\uC11D",note:"\uD770 \uB300\uB9AC\uC11D\uACFC \uB179\uD751 \uB300\uB9AC\uC11D, \uC57D\uD55C \uAD11\uD0DD"},{id:"gold",label:"\uAE08 & \uC740",note:"\uD669\uB3D9\uBE5B \uAE08\uACFC \uCC28\uAC00\uC6B4 \uC740"}]},{id:"board",label:"\uBCF4\uB4DC",hint:"\uD310\uC758 \uC7AC\uC9C8. \uC790\uD64D \uC720\uB9AC\uB9CC \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE69\uB2C8\uB2E4.",options:[{id:"glass",label:"\uC790\uD64D \uC720\uB9AC",note:"\uBC18\uD22C\uBA85, \uC544\uB798\uB85C \uB9D0\uC774 \uBE44\uCE68"},{id:"wood",label:"\uD638\uB450\uB098\uBB34",note:"\uC804\uD1B5 \uB098\uBB47\uACB0 \uD310"},{id:"marble",label:"\uB300\uB9AC\uC11D \uD310",note:"\uD06C\uB9BC\uACFC \uC9D9\uC740 \uB179\uC0C9"},{id:"tile",label:"\uD751\uBC31 \uD0C0\uC77C",note:"\uB514\uB354\uB9C1\uB41C PS1 \uD0C0\uC77C"}]},{id:"backdrop",label:"\uBC30\uACBD\uACFC \uC870\uBA85",hint:"\uD310 \uBC14\uAE65\uC758 \uBC14\uB2E5, \uD558\uB298\uC0C9, \uC870\uBA85 \uC0C9\uC744 \uD568\uAED8 \uC815\uD569\uB2C8\uB2E4.",options:[{id:"stars",label:"\uC810\uBC15\uC774 \uD751",note:"Chessmaster \uD0C0\uC774\uD2C0 \uBC30\uACBD"},{id:"velvet",label:"\uBD89\uC740 \uBCA8\uBCB3",note:"\uB530\uB73B\uD55C \uC870\uBA85\uC758 \uCE74\uB4DC \uD14C\uC774\uBE14"},{id:"void",label:"\uBCF4\uB78F\uBE5B \uC2EC\uC5F0",note:"\uCC28\uAC00\uC6B4 \uC870\uBA85\uACFC \uADF8\uB77C\uB370\uC774\uC158"}]},{id:"frame",label:"UI \uD504\uB808\uC784",hint:"\uD654\uBA74 \uD14C\uB450\uB9AC, \uD328\uB110, \uBC84\uD2BC\uC758 \uC7A5\uC2DD.",options:[{id:"deco",label:"\uBC31\uB78D \uC544\uB974\uB370\uCF54",note:"\uAE08\uC18D \uD14C\uB450\uB9AC\uC640 \uD669\uB3D9 \uC7A5\uC2DD"},{id:"plain",label:"\uBBF8\uB2C8\uBA40 \uC120",note:"\uC587\uC740 \uC120, \uC7A5\uC2DD \uC5C6\uC74C"},{id:"neon",label:"\uB124\uC628",note:"\uC2DC\uC548\uACFC \uC790\uD64D \uBC1C\uAD11\uC120"}]},{id:"lettering",label:"\uD0C0\uC774\uD2C0 \uB808\uD130\uB9C1",hint:"\uD0C0\uC774\uD2C0, \uBC29 \uCF54\uB4DC, \uC2B9\uB9AC \uBB38\uAD6C\uC758 \uAE00\uC790 \uCC98\uB9AC.",options:[{id:"brass",label:"\uD669\uB3D9",note:"Chessmaster\uC2DD \uCCAD\uB3D9 \uADF8\uB77C\uB370\uC774\uC158"},{id:"chrome",label:"\uD06C\uB86C",note:"\uC740\uBE5B \uAE08\uC18D \uBC18\uC0AC"},{id:"neon",label:"\uB124\uC628",note:"\uC790\uD64D \uAE00\uC790\uC640 \uC2DC\uC548 \uC678\uACFD"},{id:"crown",label:"\uC655\uAD00",note:"\uC740\uBE5B \uAE4E\uC740 \uBA74, \uBCF4\uB78F\uBE5B \uB450\uAED8, \uC2DC\uC548 \uBCF4\uC11D"},{id:"robe",label:"\uB9DD\uD1A0",note:"\uBE68\uAC04 \uAE4E\uC740 \uBA74, \uD770 \uB2F4\uBE44\uD138 \uD14C\uB450\uB9AC, \uAE08\uB760"},{id:"velvet",label:"\uBCA8\uBCB3",note:"\uC655\uC88C\uC758 \uBCF4\uB77C \uBCA8\uBCB3\uACFC \uAE08 \uD14C\uB450\uB9AC"},{id:"disco",label:"\uB514\uC2A4\uCF54",note:"\uAE00\uC790\uB9C8\uB2E4 \uB2E4\uB978 \uC0C9, \uBC15\uC790\uB9C8\uB2E4 \uBC14\uB01C"}]},{id:"pixel",label:"3D \uD574\uC0C1\uB3C4",hint:"3D \uC7A5\uBA74\uC744 \uADF8\uB9AC\uB294 \uD574\uC0C1\uB3C4. \uC6D0\uBCF8\uC740 \uAE30\uAE30 \uD574\uC0C1\uB3C4\uB85C \uBA74\uC744 \uB610\uB837\uD558\uAC8C, \uB098\uBA38\uC9C0\uB294 \uB3C4\uD2B8\uB85C \uD655\uB300\uD569\uB2C8\uB2E4. UI\uB294 \uD56D\uC0C1 270\xD7480 \uB3C4\uD2B8\uC785\uB2C8\uB2E4.",options:[{id:"native",label:"\uC6D0\uBCF8",note:"\uAE30\uAE30 \uD574\uC0C1\uB3C4. \uD53D\uC140 \uC5C6\uC774 \uBA74\uC774 \uB610\uB837"},{id:"coarse",label:"\uAD75\uAC8C",note:"135\xD7240"},{id:"base",label:"\uB3C4\uD2B8",note:"270\xD7480"},{id:"fine",label:"\uACF1\uAC8C",note:"405\xD7720"}]},{id:"camera",label:"\uB300\uAD6D \uC2DC\uC810",hint:"\uD310\uC744 \uB0B4\uB824\uB2E4\uBCF4\uB294 \uBC29\uC2DD. \uB9D0\uC740 \uBC18\uC73C\uB85C \uC798\uB77C \uB215\uD78C \uC591\uAC01\uC774\uB77C \uC704\uC5D0\uC11C \uC2E4\uB8E8\uC5E3\uC774 \uBCF4\uC785\uB2C8\uB2E4.",options:[{id:"persp",label:"\uC6D0\uADFC \uD0D1\uB2E4\uC6B4",note:"\uAE30\uBCF8. \uC218\uC9C1, \uAC00\uC7A5\uC790\uB9AC \uB9D0\uC758 \uC606\uBA74\uC774 \uBCF4\uC784"},{id:"flat",label:"\uC815\uD0D1\uB2E4\uC6B4",note:"\uC218\uC9C1, \uAC70\uC758 \uD3C9\uD589 \uD22C\uC601. \uCE78\uB2F9 32px"},{id:"tilt",label:"\uC0B4\uC9DD \uAE30\uC6B8\uC784",note:"18\xB0 \uAE30\uC6B8\uC5EC \uC591\uAC01 \uB450\uAED8\uAC00 \uBCF4\uC784"}]},{id:"zoom",label:"\uACF5\uACA9 \uC90C",hint:"\uB0B4 \uB9D0\uC774 \uC0C1\uB300 \uB9D0\uC744 \uC7A1\uC744 \uB54C \uB0B4 \uD654\uBA74\uC5D0\uC11C\uB9CC \uC77C\uC5B4\uB098\uB294 \uC90C \uC778/\uC544\uC6C3.",options:[{id:"soft",label:"\uC57D\uD558\uAC8C",note:"\uC0B4\uC9DD \uB2E4\uAC00\uAC14\uB2E4 \uB3CC\uC544\uC634"},{id:"normal",label:"\uBCF4\uD1B5",note:"\uB2E4\uAC00\uAC10 + \uC791\uC740 \uD754\uB4E4\uB9BC"},{id:"punch",label:"\uAC15\uD558\uAC8C",note:"\uAE4A\uC740 \uC90C + \uD754\uB4E4\uB9BC + \uC12C\uAD11"}]}],yr={pieces:"chrome",board:"glass",backdrop:"stars",frame:"deco",lettering:"brass",pixel:"native",camera:"persp",zoom:"normal"},nf={native:null,coarse:.5,base:1,fine:1.5},uc={soft:{s:.58,shake:0,flash:0,dur:.85},normal:{s:.72,shake:.06,flash:0,dur:.95},punch:{s:.82,shake:.14,flash:.75,dur:1.05}},vr={deco:{accent:"#c9a24a",accentHi:"#f3dc8a",accentLo:"#6e4a14",line:"#8d9299",lineHi:"#d8dde3",lineLo:"#3a3d44",panel:"rgba(8,6,12,0.86)",btn:"#1c1a24",btnPrimary:"#3a2a10",ink:"#ece6d6",dim:"#8a8578"},plain:{accent:"#d8d2c4",accentHi:"#ffffff",accentLo:"#5a5650",line:"#6a6660",lineHi:"#a8a49c",lineLo:"#2a2826",panel:"rgba(10,10,12,0.84)",btn:"#18181c",btnPrimary:"#2c2a26",ink:"#eeeae2",dim:"#8a867e"},neon:{accent:"#4fe0ff",accentHi:"#c8f8ff",accentLo:"#0a5a6e",line:"#e05ac8",lineHi:"#ffb8f0",lineLo:"#4a1440",panel:"rgba(6,2,14,0.86)",btn:"#140a24",btnPrimary:"#0a2a36",ink:"#eef6ff",dim:"#8a86a8"}},sf="faith-chess-theme",ef=Ns.map(i=>i.id);function rf(i){let t={...yr};for(let e of Ns)i&&e.options.some(n=>n.id===i[e.id])&&(t[e.id]=i[e.id]);return t}function Q_(i){let t=/^#?t-([a-z0-9-]+)$/.exec(i||"");if(!t)return null;let e=t[1].split("-");if(e.length!==ef.length)return null;let n={};return ef.forEach((s,r)=>{n[s]=e[r]}),rf(n)}var of=2;function af(){let i=typeof location<"u"?Q_(location.hash):null;if(i)return Zo(i),i;try{let t=JSON.parse(localStorage.getItem(sf)||"null"),e=rf(t);return t&&(t.v||1)<of&&(e.camera=yr.camera,Zo(e)),e}catch{return{...yr}}}function Zo(i){try{localStorage.setItem(sf,JSON.stringify({...i,v:of}))}catch{}}function lf(i,t,e){let n=Ns.find(o=>o.id===t),s=n.options.findIndex(o=>o.id===i[t]),r=n.options.length;return{...i,[t]:n.options[(s+e+r)%r].id}}function cf(i,t){return Ns.find(n=>n.id===i)?.options.find(n=>n.id===t)?.label??t}var wn=(i,t={})=>new gn({color:i,flatShading:!0,...t}),br=(i,t={})=>new sn({color:i,flatShading:!0,shininess:70,specular:9076848,...t}),Ge=(i,t=1)=>new mn(i,t),hf=(i,t=10)=>new As(i.map(([e,n])=>new j(e,n)),t);function Qt(i,t,e,n=0,s=0,r=0,o=1,a=1,l=1){let c=new Ht(t,e);return c.position.set(n,s,r),c.scale.set(o,a,l),i.add(c),c}var Mr=(i,t,e,n)=>{let s=new re;return s.position.set(t,e,n),i.add(s),s},ff=14264378,ty=15907988,ey=14193770,ny=15764106,iy=16315626,sy=1706512,ry=16447214,Os={w:{crown:15526644,gem:5230847,robe:12595262,robe2:8002086,beard:15658228,velvet:8006282,velvet2:5118556,bg:3939410,shoe:8002086},b:{crown:2788e3,gem:15981706,robe:2252908,robe2:1194050,beard:8016966,velvet:10099758,velvet2:6164252,bg:1848384,shoe:1194050}};function pc(i){let t=new re,e=wn(i.velvet),n=wn(i.velvet2),s=br(ff);for(let[r,o]of[[-.56,.36],[.56,.36],[-.56,-.4],[.56,-.4]])Qt(t,new Me(.06,.08,.32,6),s,r,.16,o);Qt(t,new oe(1.36,.26,1),n,0,.44,0),Qt(t,Ge(.62),e,0,.62,.04,1.06,.32,.84),Qt(t,new oe(1.36,1.3,.22),n,0,1.16,-.46),Qt(t,Ge(.68),n,0,1.8,-.46,1,.55,.32),Qt(t,Ge(.56),e,0,1.18,-.3,1.06,1.05,.34);for(let[r,o]of[[-.25,1.4],[.25,1.4],[0,1.15],[-.25,.92],[.25,.92]])Qt(t,Ge(.035,0),s,r,o,-.12);Qt(t,Ge(.11,0),s,0,2.18,-.46);for(let r of[-1,1])Qt(t,new oe(.2,.36,.82),n,r*.68,.64,0),Qt(t,new Me(.18,.18,.96,8).rotateX(Math.PI/2),e,r*.68,.88,.02),Qt(t,Ge(.09,0),s,r*.68,.88,.52);return t}function mc(i){let t=new re,e=wn(i.robe),n=wn(i.robe2),s=wn(ty),r=wn(ey),o=wn(i.beard),a=br(ff),l=br(i.crown,{side:Ve}),c=wn(sy),h=wn(iy),u=wn(ry),f=new re;f.position.set(0,.72,.06),t.add(f),Qt(f,hf([[0,0],[.36,.02],[.52,.14],[.58,.34],[.55,.56],[.46,.74],[.36,.86],[.32,.92]]),e),Qt(f,hf([[.32,.92],[.36,1],[.385,1.12],[.36,1.26],[.28,1.37],[.15,1.44],[0,1.46]]),s),Qt(f,Ge(.37),o,0,1.17,-.09,1.02,.92,.82),Qt(f,new zn(.5,.04,4,16).rotateX(Math.PI/2),a,0,.6,0),Qt(f,new zn(.32,.075,6,12).rotateX(Math.PI/2),h,0,.9,0),Qt(f,Ge(.12,0),a,0,.34,.55,1,1,.35);for(let[y,_]of[[-.2,.42],[.2,.42],[-.12,.18],[.12,.18]])Qt(f,Ge(.055,0),h,y,_,.53,1,1,.4);Qt(f,Ge(.075,0),r,0,1.1,.38);for(let y of[-1,1])Qt(f,Ge(.065,0),wn(ny),y*.21,1.06,.3,1,.6,.5);let d=[-1,1].map(y=>Qt(f,Ge(.05,0),c,y*.13,1.18,.33)),g=[-1,1].map(y=>{let _=Qt(f,new oe(.13,.03,.03),o,y*.14,1.27,.32);return _.userData.s=y,_});for(let y of[-1,1])Qt(f,Ge(.075,0),o,y*.09,1.02,.36,1.6,.6,.6);Qt(f,new ti(.17,.46,7).rotateX(Math.PI),o,0,.82,.31).rotation.x=.32;let x=Mr(f,0,1.42,0);Qt(x,new Me(.31,.34,.24,12,1,!0),l,0,.06,0);for(let y=0;y<7;y++){let _=y/7*Math.PI*2;Qt(x,new ti(.065,.26,4),l,Math.sin(_)*.31,.3,Math.cos(_)*.31)}Qt(x,Ge(.07,0),br(i.gem),0,.06,.34);for(let y of[-1,1])Qt(x,Ge(.04,0),br(i.gem),y*.2,.06,.27);Qt(x,Ge(.07,0),a,0,.26,0);let m=[-1,1].map(y=>{let _=Mr(f,y*.5,.66,0);Qt(_,new Me(.034,.034,.44,5).translate(0,-.22,0),n);let v=Mr(_,0,-.44,0);return Qt(v,new Me(.03,.03,.42,5).translate(0,-.21,0),n),Qt(v,Ge(.08,0),u,0,-.44,0),{s:y,shoulder:_,elbow:v}}),p=[-1,1].map(y=>{let _=Mr(f,y*.17,.1,.3);Qt(_,new Me(.04,.04,.46,5).translate(0,-.23,0),n);let v=Mr(_,0,-.46,0);return Qt(v,new Me(.036,.036,.46,5).translate(0,-.23,0),n),Qt(v,Ge(.09,0),wn(i.shoe),0,-.48,.07,1,.65,1.9),{s:y,hip:_,knee:v}});return{root:t,doll:f,crown:x,eyes:d,brows:g,arms:m,legs:p}}var uf=(i,t,e)=>i+(t-i)*e,Jo=i=>i*i*(3-2*i),oy=118,Vi=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function on(i,t,e){if(typeof i=="number")return i+(t-i)*e;if(Array.isArray(i))return i.map((s,r)=>on(s,t[r],e));let n={};for(let s in i)n[s]=on(i[s],t[s],e);return n}var he=(i=0,t=0,e=-.2,n=0)=>({sx:i,sz:t,ex:e,ez:n}),Be=(i=0,t=0,e=0)=>({hx:i,hz:t,kx:e}),xi=(i={})=>({rootZ:.95,y:.88,x:0,rx:0,ry:0,rz:0,crownY:0,crownSpin:0,arms:[he(0,-.25),he(0,.25)],legs:[Be(0,-.06),Be(0,.06)],...i});function gc(i){return xi({rootZ:0,y:.72,rz:.04*Math.sin(i*.6),rx:-.08,arms:[he(-.2,-.25,-.3),he(-.2,.25,-.3)],legs:[Be(-1.35,-.08,1.3),Be(-1.35,.08,1.3)]})}function ay(i){return xi({rx:.22,y:.88+.04*Math.abs(Math.sin(i*10)),rz:.04*Math.sin(i*14),arms:[he(-1.55,.15,-.1),he(.25,.95,-1.9)],legs:[Be(0,-.16),Be(0,.16)]})}function fc(i,t,e=1){let n=Math.pow(Math.cos(Math.PI*t),2)*e;i.y-=.05*n;for(let s of i.legs)s.hx-=.14*n,s.kx+=.28*n;return i}var dc=[i=>{let t=Math.floor(i),e=Vi((i-t)*3),n=t%2===0,s=he(-.35,2.55,0),r=he(-.55,-.55,-.1),o=xi({arms:[he(.25,-.95,-1.9),on(n?r:s,n?s:r,e)]});return o.rz=on(n?.1:-.14,n?-.14:.1,e),o.ry=.25*Math.sin(Math.PI*i/2),o.legs[1].hz=on(n?.06:.3,n?.3:.06,e),fc(o,i)},i=>{let t=xi({rz:.1*Math.sin(Math.PI*i),ry:.35*Math.sin(Math.PI*i/2)});return t.arms=[-1,1].map(e=>{let n=Math.PI*i+(e<0?0:-1.2);return he(-.15,e*(1.45+.3*Math.sin(n)),0,e*.95*Math.sin(n+1.1))}),fc(t,i)},i=>{let t=xi();if(i<2){let e=Vi(i/2);t.ry=e*Math.PI*2,t.y=.9+.04*Math.sin(Math.PI*i),t.arms=[he(-.1,-1.55,0),he(-.1,1.55,0)],t.legs[0]=Be(-.7*Math.sin(Math.PI*e),-.1,1.5*Math.sin(Math.PI*e))}else{let e=Vi((i-2)*2.5);t.arms=[he(-.15,-on(1.55,2.75,e),0,-.3*e),he(-.15,on(1.55,2.75,e),0,.3*e)],t.legs=[Be(0,-.32*e),Be(0,.32*e)],t.y=.88+.07*Math.sin(Math.PI*Math.min(1,(i-2)*2)),t.rx=-.08*e}return t},i=>{let t=Math.floor(i),e=i-t,n=t%2,s=Math.sin(Math.PI*e),r=xi({rx:-.12*s,rz:(n?.08:-.08)*s,y:.88+.03*s});return r.arms=[-1,1].map(o=>he(-.25+.2*Math.sin(Math.PI*2*i+o),o*2.45,0,o*.5*Math.sin(Math.PI*4*i))),r.legs[n]=Be(-1.2*s,(n?1:-1)*(.08+1*s),.5*s*(1-s)),r.legs[1-n]=Be(0,n?-.06:.06,.15),r},i=>{let t=xi();if(i<1){let e=Vi(i);t.y=.88-.22*e,t.rx=.15*e,t.legs=[Be(-.7*e,-.1,1.4*e),Be(-.7*e,.1,1.4*e)],t.arms=[he(.7*e,-.3,-.2),he(.7*e,.3,-.2)]}else if(i<2){let e=i-1,n=4*e*(1-e),s=Math.sin(Math.PI*e);t.y=on(.66,.88,Math.min(1,e*4))+.75*n,t.rx=-.1*n,t.legs=[Be(-.5*s,-1.15*s,0),Be(-.5*s,1.15*s,0)],t.arms=[he(-.2,-2.7,0),he(-.2,2.7,0)]}else if(i<2.6){let e=1-Vi((i-2)/.6);t.y=.88-.18*e,t.legs=[Be(-.6*e,-.14,1.2*e),Be(-.6*e,.14,1.2*e)],t.arms=[he(-1.2*(1-e),-.5,-.2),he(-1.2*(1-e),.5,-.2)]}else{let e=Vi((i-2.6)*3),n=.25*Math.sin(i*40);t.arms=[he(-1.9*e,-.5,-.2,-n),he(-1.9*e,.5,-.2,n)],t.ry=.2*Math.sin(Math.PI*i)}return t},i=>{let t=xi();if(i<2){let e=i/2,n=4*e*(1-e),s=Math.sin(Math.PI*e);t.crownY=1*n,t.crownSpin=e*Math.PI*4,t.rx=-.25*s,t.y=.88+.05*s,t.arms=[he(-2.5*s,-.35,-.3*s),he(-2.5*s,.35,-.3*s)],fc(t,i,.5)}else{let e=(i-2)/2,n=Math.sin(Math.PI*e);t.rx=.5*n,t.arms=[he(.5*n,-1.2*n-.25,-.2),he(-1.1*n,.25-.65*n,-.2-.6*n)],t.legs=[Be(0,-.06),Be(.35*n,.06,.2*n)]}return t}];function ly(i){let t=dc.length,e=(i%(t*4)+t*4)%(t*4),n=Math.floor(e/4),s=e-n*4,r=dc[n](s),o=3.6;return s>o&&(r=on(r,dc[(n+1)%t](0),Vi((s-o)/.4))),r}function jo(i,t){i.root.position.z=t.rootZ,i.doll.position.set(t.x,t.y,.06),i.doll.rotation.set(t.rx,t.ry,t.rz),i.crown.position.y=1.42+t.crownY,i.crown.rotation.set(0,t.crownSpin,-.5*t.rz),i.arms.forEach(({shoulder:e,elbow:n},s)=>{let r=t.arms[s];e.rotation.set(r.sx,0,r.sz),n.rotation.set(r.ex,0,r.ez)}),i.legs.forEach(({hip:e,knee:n},s)=>{let r=t.legs[s];e.rotation.set(r.hx,0,r.hz),n.rotation.set(r.kx,0,0)})}var Ko=class{constructor(){this.scene=new Un,this.scene.add(new gi(16777215,.62));let t=new rn(16773340,1.5);t.position.set(-2,4,5),this.scene.add(t);let e=new rn(16740568,.7);e.position.set(3,2,-3),this.scene.add(e);let n=new rn(7332095,.5);n.position.set(-3,1.5,-2),this.scene.add(n),this.camera=new Ce(34,64/48,.1,40),this.camera.position.set(0,1.62,6.5),this.camera.lookAt(0,1.45,.6),this.rigs={};for(let s of["w","b"]){let r=new re;r.add(pc(Os[s]));let o=mc(Os[s]);r.add(o.root),this.scene.add(r),this.rigs[s]={group:r,...o,color:s,phase:s==="w"?0:1.7,wake:0,shout:0}}this.shown=null,this.swap=null,this.t=0,this.clear=new Tt,this.bgA=new Tt,this.bgB=new Tt,this.bgD=new Tt,this.beat=0,this.discoOn=0,this.discoHue=0,this.buildDisco()}update(t,e,n="turn"){this.t+=t,e&&e!==this.shown&&!(this.swap&&this.swap.to===e)&&(this.shown&&(this.swap={from:this.shown,to:e,t:0}),this.shown=e),this.swap&&(this.swap.t+=t/.6,this.swap.t>=1&&(this.swap=null));let s=this.t,r=this.rigs[this.shown||"w"];this.beat+=t*(oy/60)*(1-r.shout),this.discoOn=r.wake*(1-r.shout),this.updateDisco(t,this.beat,this.discoOn);for(let o of Object.values(this.rigs)){let a=o.color===this.shown;o.wake+=((a?1:0)-o.wake)*(1-Math.exp(-t*3)),o.shout+=((a&&n==="shout"?1:0)-o.shout)*(1-Math.exp(-t*9));let l=0;if(this.swap){let c=Jo(Math.min(1,this.swap.t)),h=u=>u==="w"?-1:1;o.color===this.swap.to?l=h(o.color)*(1-c)*4.4:o.color===this.swap.from&&(l=-h(this.swap.to)*c*4.4)}o.group.position.x=l,o.group.visible=a||!!(this.swap&&o.color===this.swap.from),this.pose(o,s+o.phase,this.beat+(o.color==="w"?0:12))}}pose(t,e,n){let s=t.wake,r=t.shout,o=on(gc(e),ly(n),Jo(s));o=on(o,ay(e),Jo(r)),jo(t,o);let a=e%3.1/3.1,l=s>.5&&a>.95?Math.sin((a-.95)/.05*Math.PI):0,c=uf(.2,1,s)*(1-l*.9)*(1+.25*r);for(let h of t.eyes)h.scale.y=Math.max(.08,c);for(let h of t.brows)h.rotation.z=uf(0,-.32*h.userData.s,s)+.25*h.userData.s*r}buildDisco(){let t=new re;this.scene.add(t),this.disco=t,this.tiles=[];for(let s=0;s<5;s++)for(let r=0;r<3;r++){let o=new Ht(new oe(.8,.04,.62),new ve({color:1118481}));o.position.set((s-2)*.84,0,.42+r*.66),t.add(o),this.tiles.push({m:o,ix:s,iz:r})}this.beams=[16732120,5237247,16769359].map((s,r)=>{let o=new ve({color:s,transparent:!0,opacity:.2,blending:Ni,depthWrite:!1,side:Ve}),a=new Ht(new ti(.8,3.8,10,1,!0).translate(0,-1.9,0),o),l=new re;return l.position.set((r-1)*1.7,3.6,1),l.add(a),t.add(l),{pivot:l,mat:o,i:r}}),this.ball=new Ht(new mn(.24,1),new sn({color:14212328,flatShading:!0,shininess:120,specular:16777215})),this.ball.position.set(0,3,.7),t.add(this.ball);let e=new pn;for(let s=0;s<=8;s++){let r=s/8*Math.PI*2,o=s%2?.05:.17;s?e.lineTo(Math.cos(r)*o,Math.sin(r)*o):e.moveTo(Math.cos(r)*o,Math.sin(r)*o)}let n=new Oo(e);this.sparks=Array.from({length:8},()=>{let s=new Ht(n,new ve({color:16777215,transparent:!0,opacity:0,blending:Ni,depthWrite:!1}));return t.add(s),{m:s,t:9}}),this.lastBeat=-1}updateDisco(t,e,n){let s=this.t,r=Math.floor(e),o=e-r,a=Math.pow(1-o,2);this.disco.visible=n>.02;for(let{m:l,ix:c,iz:h}of this.tiles){let u=(c+h*2+r)%3===0,f=((r*.13+c*.17+h*.29)%1+1)%1;u?l.material.color.setHSL(f,.9,(.35+.25*a)*n):l.material.color.setHSL(f,.4,.06*n)}for(let l of this.beams)l.pivot.rotation.z=Math.sin(s*1.3+l.i*2.1)*.55,l.pivot.rotation.x=Math.sin(s*.9+l.i)*.3,l.mat.opacity=(.07+.09*a)*n;if(this.ball.rotation.y+=t*2.2,r!==this.lastBeat&&(this.lastBeat=r,n>.5))for(let l=0;l<2;l++){let c=this.sparks.find(h=>h.t>.5);if(!c)break;c.t=0,c.m.position.set((Math.random()-.5)*2.6,.5+Math.random()*2.1,1.2+Math.random()*.6),c.m.material.color.setHSL(Math.random(),.8,.7)}for(let l of this.sparks){l.t+=t;let c=l.t/.5;l.m.material.opacity=c<1?Math.sin(c*Math.PI)*n:0,l.m.scale.setScalar(.5+c),l.m.rotation.z=l.t*4}}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,l=Math.round(e.y*r),c=Math.round((e.y+e.h)*r)-l,h=n.h-l-c,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,c),t.setScissor(o,h,a,c);let d=this.shown||"w";this.bgB.set(Os[d].bg),this.swap&&this.bgB.copy(this.bgA.set(Os[this.swap.from].bg).lerp(this.bgB,Jo(Math.min(1,this.swap.t))));let g=this.beat-Math.floor(this.beat);this.bgD.setHSL(this.beat*.04%1,.6,.16+.07*Math.pow(1-g,2)),this.bgB.lerp(this.bgD,.55*this.discoOn),t.setClearColor(this.bgB,1),t.clear(!0,!0,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var cy=(i,t={})=>new gn({color:i,flatShading:!0,...t}),Sr=(i,t={})=>new sn({color:i,flatShading:!0,shininess:70,specular:9076848,...t}),xc=i=>i<=0?0:i>=1?1:i*i*(3-2*i),hy=14264378,Gi=.27,Fs=1.02,mf=.74,Er=(i,t)=>new C((i-3.5)*Gi,Fs,mf+(t+.5)*Gi),wr=.34,Qo=[[0,0],[.33,0],[.33,.07],[.25,.12]],uy={p:[...Qo,[.17,.3],[.12,.38],[.19,.42],[.15,.5],[.08,.6],[0,.63]],r:[...Qo,[.21,.42],[.27,.5],[.27,.68],[0,.68]],n:[...Qo,[.2,.3],[0,.3]],b:[...Qo,[.2,.42],[.13,.5],[.23,.58],[.21,.7],[.12,.84],[.06,.88],[0,.9]],q:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.62],[.28,.72],[.29,.8],[.2,.88],[.14,.98],[0,1]],k:[[0,0],[.36,0],[.36,.08],[.26,.14],[.19,.5],[.13,.64],[.29,.74],[.29,.84],[.2,.92],[.09,.98],[0,.98]]},_c={p:.63,r:.68,n:.9,b:.96,q:1.06,k:1.2},fy=[[-.16,.28],[.16,.28],[.17,.5],[.3,.6],[.31,.72],[.14,.78],[.1,.9],[0,.82],[-.1,.9],[-.13,.76],[-.2,.6],[-.18,.4]];function dy(i){let e=[new As(uy[i].map(([s,r])=>new j(s,r)),7)],n=(s,r,o,a,l,c)=>new oe(s,r,o).translate(a,l,c);if(i==="r")for(let s=0;s<4;s++){let r=s/4*Math.PI*2+.4;e.push(n(.11,.12,.11,Math.sin(r)*.2,.74,Math.cos(r)*.2))}else if(i==="b")e.push(new mn(.06,0).translate(0,.94,0));else if(i==="q"){e.push(new mn(.08,0).translate(0,1.06,0));for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.push(new ti(.05,.14,4).translate(Math.sin(r)*.22,.92,Math.cos(r)*.22))}}else if(i==="k")e.push(n(.07,.26,.07,0,1.1,0)),e.push(n(.2,.07,.07,0,1.12,0));else if(i==="n"){let s=new pn(fy.map(([r,o])=>new j(r,o)));e.push(new ei(s,{depth:.2,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03,bevelSegments:1,curveSegments:1}).translate(0,0,-.1))}return e}var yc=new Map;function df(i,t){yc.has(i)||yc.set(i,dy(i));let e=new re;for(let n of yc.get(i))e.add(new Ht(n,t));return e.scale.setScalar(wr),e.userData.type=i,e}var pf=1.55,ta=1.7;function vc(i){return i.elbow.children[i.elbow.children.length-1]}function py(i,t,e,n=[-1,.3*i.arms[t].s,-.4]){let s=i.arms[t],r=vc(s),o=new C,a=[...n],l=()=>(s.shoulder.rotation.set(a[0],0,a[1]),s.elbow.rotation.set(a[2],0,0),i.root.updateMatrixWorld(!0),r.getWorldPosition(o),o.distanceToSquared(e)+.002*a[2]*a[2]),c=l();for(let h=.4;h>.002;h*=.6)for(let u=0;u<30;u++){let f=!1;for(let d=0;d<3;d++)for(let g of[h,-h]){let x=a[d];a[d]+=g,d===2&&(a[2]=Math.min(.05,Math.max(-2.6,a[2])));let m=l();m<c?(c=m,f=!0):a[d]=x}if(!f)break}return a}var ea=class{constructor(){let t=this.scene=new Un;t.background=new Tt(787988),t.fog=new ws(787988,9,16),t.add(new gi(16777215,.55));let e=new rn(16773340,1.45);e.position.set(-2,5,5),t.add(e);let n=new rn(16740568,.8);n.position.set(3,2,-3),t.add(n);let s=new rn(7332095,.6);s.position.set(-3,1.5,-2),t.add(s),this.camera=new Ce(36,270/480,.1,40),this.camera.position.set(0,4.3,7.6),this.camera.lookAt(0,1.7,1),this.clear=new Tt,this.t=0,this.buildStage();let r=Os.w;t.add(pc(r)),this.rig=mc(r),t.add(this.rig.root);for(let o of this.rig.arms)o.shoulder.scale.set(ta,pf,ta),vc(o).scale.set(1.3/ta,1.3/pf,1.3/ta);this.base=gc(0),this.base.rx=.12,jo(this.rig,this.base),this.buildBoard(),this.solve(),this.loop=-1,this.flight=null,this.ghosts=[]}buildStage(){let t=this.scene;this.tiles=[];for(let r=0;r<9;r++)for(let o=0;o<5;o++){let a=new Ht(new oe(.78,.04,.6),new ve({color:1118481}));a.position.set((r-4)*.82,-.02,-2.4+o*.64),t.add(a),this.tiles.push({m:a,ix:r,iz:o})}let e=(r,o,a,l,c,h)=>{let u=new ve({color:r,transparent:!0,opacity:o,blending:Ni,depthWrite:!1,side:Ve}),f=new Ht(new ti(c,h,12,1,!0).translate(0,-h/2,0),u),d=new re;return d.position.set(a,5.6,l),d.add(f),t.add(d),{pivot:d,mat:u,op:o}};this.spot=e(16773320,.14,0,.3,1.5,5.8),this.beams=[e(16732120,.08,-1.8,-.6,.9,6.2),e(5237247,.08,1.8,-.6,.9,6.2)];let n=[];for(let r=0;r<60;r++)n.push((Math.random()-.5)*12,2.5+Math.random()*5,-4-Math.random()*3);let s=new ce;s.setAttribute("position",new Lt(n,3)),t.add(new Ro(s,new lr({color:12101848,size:2,sizeAttenuation:!1})))}buildBoard(){let t=this.scene,e=mf+4*Gi;t.add(new Ht(new oe(8*Gi+.16,.1,8*Gi+.16).translate(0,Fs-.06,e),Sr(hy))),t.add(new Ht(new Me(.22,.42,Fs-.1,6).translate(0,(Fs-.1)/2,e),cy(5118556)));let n=Sr(14178996,{shininess:40}),s=Sr(2886710,{shininess:40});for(let o=0;o<8;o++)for(let a=0;a<8;a++){let l=Er(a,o),c=new Ht(new oe(Gi-.012,.03,Gi-.012),(o+a)%2?n:s);c.position.set(l.x,Fs-.015,l.z),t.add(c)}this.white=Sr(16051420,{specular:10129536}),this.black=Sr(2372158,{specular:7315632,shininess:90});let r=(o,a,l,c,h=0)=>{let u=df(o,a==="w"?this.white:this.black);return u.position.copy(Er(l,c)),u.rotation.y=h,this.scene.add(u),u};for(let[o,a,l]of[["r",0,0],["k",4,0],["r",7,0],["p",0,1],["p",1,1],["p",6,1],["p",4,2],["b",5,0],["n",6,3]])r(o,"w",a,l,o==="n"?-Math.PI/2:0);for(let[o,a,l]of[["r",0,7],["k",4,7],["q",3,6],["r",7,7],["p",0,6],["p",1,5],["p",5,6],["p",7,5],["b",2,5],["n",6,7]])r(o,"b",a,l,o==="n"?Math.PI/2:0);this.queenA=Er(2,1),this.queenB=Er(2,3),this.queen=r("q","w",2,1),this.stealSq=Er(5,2),this.victim=null}solve(){let t=this.rig,e=1,n=0,s=(a,l)=>new C(a.x,a.y+l*wr+.07,a.z),r=(a,l,c)=>new C(a,l,c),o=(a,l,c)=>py(t,a,l,c);this.R={rest:o(e,r(.7,1.16,.4),[-.6,.5,-.8]),hover:o(e,s(this.stealSq,1).add(r(0,.18,0)),[-1.3,.2,-.5]),grab:o(e,s(this.stealSq,.75),[-1.3,.2,-.3]),up:o(e,r(.62,2.55,0),[-2.6,.3,-.4]),back:o(e,r(.75,2.1,-.85),[-3.3,.3,-.6])},this.Lq={a:o(n,s(this.queenA,_c.q),[-1.2,-.2,-.5]),b:o(n,s(this.queenB,_c.q),[-1.3,-.2,-.3])},this.Lrest=o(n,r(-.7,1.16,.4),[-.6,-.5,-.8])}spawnVictim(t){this.victim&&this.scene.remove(this.victim);let e=["p","n","b","r"][t%4];this.victim=df(e,this.black),this.victim.position.copy(this.stealSq),e==="n"&&(this.victim.rotation.y=Math.PI/2),this.scene.add(this.victim),this.victim.userData.h=_c[e]}update(t){if(this.paused)return;this.t+=t;let e=5.4,n=Math.floor(this.t/e),s=this.t-n*e;n!==this.loop&&(this.loop=n,this.spawnVictim(n),this.held=!1);let r=this.R,o=(y,_,v)=>on(y,_,xc(v)),a;s<.3?a=r.rest:s<.9?a=o(r.rest,r.hover,(s-.3)/.6):s<1.15?a=o(r.hover,r.grab,(s-.9)/.25):s<1.6?a=o(r.grab,r.up,(s-1.15)/.45):s<1.85?a=on(r.up,r.back,Math.min(1,(s-1.6)/.22)):s<2.6?a=o(r.back,r.rest,(s-1.85)/.75):a=r.rest;let l;s<1?l=this.Lq.a:s<1.9?l=o(this.Lq.a,this.Lq.b,(s-1)/.9):s<3.6?l=this.Lq.b:s<4.6?l=o(this.Lq.b,this.Lq.a,(s-3.6)/1):l=this.Lq.a;let c=on(this.base,this.base,0),h=s>1.15&&s<2.4?Math.sin(Math.PI*(s-1.15)/1.25):0;c.ry=-.25*h+.08*Math.sin(this.t*1.6),c.rz=.06*Math.sin(this.t*1.1)-.05*h,c.rx=.12-.12*h,c.y=.72+.015*Math.sin(this.t*3.2),c.arms=[{sx:l[0],sz:l[1],ex:l[2],ez:0},{sx:a[0],sz:a[1],ex:a[2],ez:0}],jo(this.rig,c);let u=s>.5&&s<1.9?-.035:.01*Math.sin(this.t*.9);this.rig.eyes.forEach((y,_)=>{y.position.x=(_?.13:-.13)+u,y.scale.y=.75}),this.rig.brows.forEach(y=>{y.rotation.z=y.userData.s>0?.42:-.15,y.position.y=y.userData.s>0?1.29:1.25}),this.rig.root.updateMatrixWorld(!0);let f=y=>vc(this.rig.arms[y]).getWorldPosition(new C),d=f(0);this.queen.position.set(d.x,Fs,d.z);let g=this.victim;if(s<.3)g.visible=!0,g.scale.setScalar(wr*xc(s/.3)),g.position.copy(this.stealSq);else if(s<1.1)g.scale.setScalar(wr),g.position.copy(this.stealSq);else if(s<1.8){let y=f(1);g.position.set(y.x,y.y-(g.userData.h*wr+.07)*.75,y.z),g.rotation.x=-1.4*xc((s-1.15)/.6),this.prevHand=this.curHand,this.curHand=y.clone(),this.flight=null}else{this.flight||(this.flight={v:new C(1.1,3.4,-2.6),w:new C(9,4,6),age:0},this.ghostT=0);let y=this.flight;if(y.age+=t,y.v.y-=7.5*t,g.position.addScaledVector(y.v,t),g.rotation.x+=y.w.x*t,g.rotation.y+=y.w.y*t,g.rotation.z+=y.w.z*t,g.visible=g.position.y>-.5&&y.age<2.2,this.ghostT+=t,g.visible&&this.ghostT>.045&&y.age<1){this.ghostT=0;let _=g.clone();_.traverse(v=>{v.isMesh&&(v.material=new ve({color:9418968,transparent:!0,opacity:.35,depthWrite:!1}))}),this.scene.add(_),this.ghosts.push({g:_,age:0})}}for(let y=this.ghosts.length-1;y>=0;y--){let _=this.ghosts[y];_.age+=t;let v=1-_.age/.35;_.g.traverse(A=>{A.isMesh&&(A.material.opacity=.35*Math.max(0,v))}),v<=0&&(this.scene.remove(_.g),_.g.traverse(A=>A.isMesh&&A.material.dispose()),this.ghosts.splice(y,1))}let x=this.t*(118/60),m=Math.floor(x),p=Math.pow(1-(x-m),2);for(let{m:y,ix:_,iz:v}of this.tiles){let A=(_+v*2+m)%3===0,w=((m*.13+_*.17+v*.29)%1+1)%1;y.material.color.setHSL(w,A?.8:.4,A?.1+.08*p:.035)}this.beams.forEach((y,_)=>{y.pivot.rotation.z=Math.sin(this.t*.9+_*2.4)*.35,y.mat.opacity=y.op*(.7+.3*p)}),this.spot.mat.opacity=this.spot.op*(.92+.08*Math.sin(this.t*2))}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,l=Math.round(e.y*r),c=Math.round((e.y+e.h)*r)-l,h=n.h-l-c,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,c),t.setScissor(o,h,a,c),t.setClearColor(this.scene.background,1),t.clear(!0,!0,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var St=270,_n=480;function Tn(i){return{x:(i&7)-3.5,z:3.5-(i>>3)}}var gf=i=>7.5/Math.tan(i*Math.PI/360),xf={flat:{fov:14,pos:[0,gf(14),.0625],target:[0,0,.0625],up:[0,0,-1]},persp:{fov:46,pos:[0,gf(46),.0625],target:[0,0,.0625],up:[0,0,-1]},tilt:{fov:30,pos:[0,26.3,8.55],target:[0,0,.35],up:[0,1,0]}},_f=i=>i*i*(3-2*i);function my(i=.07,t=.05){let e=[],n=[],s=(o,a,l,c)=>{for(let h of[o,a,l,o,l,c])e.push(...h),n.push((h[0]+4)/8,(4-h[2])/8)};for(let o=0;o<8;o++)for(let a=0;a<8;a++){let l=a-4,c=a-3,h=3-o,u=4-o,f=l+i,d=c-i,g=h+i,x=u-i,m=-t;s([f,0,g],[f,0,x],[d,0,x],[d,0,g]),s([l,m,h],[f,0,g],[d,0,g],[c,m,h]),s([c,m,h],[d,0,g],[d,0,x],[c,m,u]),s([c,m,u],[d,0,x],[f,0,x],[l,m,u]),s([l,m,u],[f,0,x],[f,0,g],[l,m,h])}let r=new ce;return r.setAttribute("position",new Lt(e,3)),r.setAttribute("uv",new Lt(n,2)),r.computeVertexNormals(),r}var na=class{constructor(t){this.canvas=t,this.renderer=new ar({canvas:t,antialias:!1,powerPreference:"low-power",alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(St,_n,!1),this.renderer.toneMapping=Bn,this.scene=new Un,this.camera=new Ce(44,St/_n,.5,200),this.bank=new Xo,this.pieces=new Map,this.highlights=[],this.anims=[],this.pendingRemoval=[],this.bursts=[],this.shards=[],this.flights=[],this.ghosts=[],this.puffs=[],this.hitStop=0,this.shake=null,this.revives=[],this.pendingRevive=new Map,this.clocks=[],this.kingStage=new Ko,this.kingView=null,this.titleStage=null,this.titleView=!1,this.phoneStage=null,this.phoneView=null,this.rewinding=null,this.mode="title",this.side=1,this.selectedId=null,this.time=0,this.raycaster=new Ps,this.ready=!1,this.lerpCam=null,this.zoomFx=null,this.flash=0,this.lastMoveKey=null,this.theme={...yr},this.camOverride=null}async init(t=[]){await this.bank.loadOverrides(t),this.ambient=new gi(16777215,1),this.key=new rn(16777215,1.6),this.placeKeyLight(),this.fill=new xr(16777215,10,22,2),this.fill.position.set(-7,3,-5),this.fill2=new xr(16777215,10,22,2),this.fill2.position.set(7,2.5,6),this.scene.add(this.ambient,this.key,this.fill,this.fill2),this.table=new Ht(new Fi(40,40),new ve),this.table.rotation.x=-Math.PI/2,this.table.position.y=-.62,this.rim=new Ht(new oe(8.4,.22,8.4),new sn({flatShading:!0,specular:4473924,shininess:30})),this.rim.position.y=-.17,this.board=new Ht(my(),new sn({depthWrite:!1,flatShading:!0})),this.board.renderOrder=2,this.under=new Ht(new Fi(8,8),new ve({color:393994})),this.under.rotation.x=-Math.PI/2,this.under.position.y=-.4,this.scene.add(this.table,this.rim,this.board,this.under),this.hlPool=[];let e=new Fi(.94,.94);for(let n=0;n<28;n++){let s=new Ht(e,new ve({color:16777215,transparent:!0,opacity:.45,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.012,s.visible=!1,s.renderOrder=3,this.scene.add(s),this.hlPool.push(s)}this.burstGeo=new No(.3,.46,8),this.ready=!0,this.applyTheme(this.theme,!0)}applyTheme(t,e=!1){let n=this.theme;if(this.theme={...t},!this.ready)return;let s=this.theme,r=this.bank;this.applyRenderSize();let o=Ju[s.backdrop];this.scene.background=new Tt(o.bg),this.scene.fog=new ws(o.bg,o.fog[0],o.fog[1]),this.fogSpan=o.fog[1]-o.fog[0],this.ambient.color.set(o.ambient[0]),this.ambient.intensity=o.ambient[1]*.55,this.key.color.set(o.key[0]),this.key.intensity=o.key[1]*1.35,this.fill.color.set(o.fill[0]),this.fill.intensity=o.fill[1],this.fill2.color.set(o.fill2[0]),this.fill2.intensity=o.fill2[1];let a=r.table(s.backdrop);a.repeat.set(10,10),this.table.material.map=a,this.table.material.needsUpdate=!0;let l=r.envMap(),c=r.rim(s.board);c.repeat.set(2,2),Object.assign(this.rim.material,{map:c,envMap:s.board==="glass"||s.board==="tile"?l:null,combine:_r,reflectivity:.25}),this.rim.material.needsUpdate=!0;let h=s.board==="glass";if(Object.assign(this.board.material,{map:r.board(s.board),transparent:h,opacity:h?.62:1,depthWrite:!h,specular:new Tt(h?9075350:s.board==="marble"?5592405:1118481),shininess:h?18:30}),this.board.material.needsUpdate=!0,this.iconCache=new Map,e||n.pieces!==s.pieces||!this.mats){this.mats=Qu(s.pieces,r);let u=[...this.pieces.entries()].map(([f,d])=>({id:f,sq:d.sq,type:d.type,color:d.color,shield:d.shield}));this.clearPieces(),this.sync(u,null)}}sync(t,e){let n=e?e.from+"-"+e.to+"-"+t.length:null,s=!!e&&n!==this.lastMoveKey;this.lastMoveKey=n;let r=new Set,o=!!this.rewinding&&this.time-this.rewinding.t0<3;this.rewinding=null;for(let a of t){r.add(a.id);let l=this.pieces.get(a.id);if(l&&(l.type!==a.type||l.color!==a.color)&&(this.removeEntry(l),this.pieces.delete(a.id),l=null),!l){let c=hc(a.type,a.color,this.mats),h=Tn(a.sq);c.position.set(h.x,0,h.z),c.rotation.y=this.side===1?0:Math.PI,this.scene.add(c),l={group:c,type:a.type,color:a.color,sq:a.sq,shield:!1,ring:null},this.pieces.set(a.id,l),o&&(l.pop={t:0});let u=this.pendingRevive.get(a.sq);u!=null&&(this.pendingRevive.delete(a.sq),this.time-u<2&&this.startRevive(l))}if(l.sq!==a.sq){let c=Tn(l.sq),h=Tn(a.sq),u=s&&e.from===l.sq&&e.to===a.sq,f=s&&l.type==="r"&&l.sq>>3===e.from>>3&&Math.abs((e.to&7)-(e.from&7))===2;o?this.anims.push({group:l.group,from:c,to:h,t:0,dur:.6,hop:!1}):u||f?this.anims.push({group:l.group,from:c,to:h,t:0,dur:.2,hop:u&&l.type==="n"}):l.group.position.set(h.x,0,h.z),l.sq=a.sq}a.shield&&!l.ring&&(l.ring=tf(),l.group.add(l.ring)),!a.shield&&l.ring&&(l.group.remove(l.ring),l.ring=null),l.shield=a.shield}for(let[a,l]of this.pieces){if(r.has(a))continue;this.pieces.delete(a);let c=s&&l.type==="p"&&l.sq===(e.from&-8|e.to&7);if(s&&(l.sq===e.to||c)){let h=Tn(e.from),u=Tn(e.to),f=new C(u.x-h.x,0,u.z-h.z);f.lengthSq()<1e-6&&f.set(0,0,-1),this.pendingRemoval.push({e:l,t:.17,dir:f.normalize()})}else this.removeEntry(l)}}removeEntry(t){this.scene.remove(t.group)}clearPieces(){for(let t of this.pieces.values())this.removeEntry(t);for(let t of this.pendingRemoval)this.removeEntry(t.e);for(let t of this.shards)this.scene.remove(t.mesh),t.mesh.geometry.dispose();this.shards.length=0;for(let t of this.flights)this.scene.remove(t.e.group);for(let t of this.ghosts)this.disposeGhost(t);for(let t of this.puffs)this.scene.remove(t.mesh),t.mesh.material.dispose();this.flights.length=0,this.ghosts.length=0,this.puffs.length=0,this.shake=null,this.hitStop=0,this.pieces.clear(),this.anims.length=0,this.pendingRemoval.length=0;for(let t of this.revives)for(let e of t.shards)this.scene.remove(e.mesh),e.mesh.geometry.dispose();for(let t of this.clocks)this.scene.remove(t.group);this.clocks.length=0,this.revives.length=0,this.pendingRevive.clear(),this.lastMoveKey=null}setHighlights(t){this.highlights=t}setSelected(t){this.selectedId=t}attackZoom(t){let e=uc[this.theme.zoom]||uc.normal;this.zoomFx={t:0,sq:t,preset:e}}setSide(t){if(this.side!==t){this.side=t;for(let e of this.pieces.values())e.group.rotation.y=t===1?0:Math.PI;this.placeKeyLight()}}placeKeyLight(){this.key&&this.key.position.set(-5*this.side,9,-4*this.side)}setNativeSize(t,e){this.nativeSize={w:Math.max(1,Math.round(t)),h:Math.max(1,Math.round(e))},this.ready&&this.applyRenderSize()}renderSize(t=this.theme){let e=nf[t.pixel];return e==null?this.nativeSize||{w:St*2,h:_n*2}:{w:Math.round(St*e),h:Math.round(_n*e)}}applyRenderSize(){let{w:t,h:e}=this.renderSize();this.renderer.setSize(t,e,!1)}basePose(){if(this.camOverride)return{up:new C(0,1,0),...this.camOverride};let t=xf[this.theme.camera]||xf.flat,e=this.side;return{pos:new C(t.pos[0]*e,t.pos[1],t.pos[2]*e),target:new C(t.target[0]*e,t.target[1],t.target[2]*e),up:new C(t.up[0]*e,t.up[1],t.up[2]*e),fov:t.fov}}setMode(t){this.mode==="title"&&t==="game"&&(this.lerpCam={t:0,from:this.camera.position.clone(),fromTarget:this.curTarget?this.curTarget.clone():new C,fromFov:this.camera.fov,fromUp:this.camera.up.clone()}),this.mode=t}pickSquare(t,e){let n=new j(t/St*2-1,-(e/_n)*2+1);this.raycaster.setFromCamera(n,this.camera);let s=this.raycaster.intersectObject(this.board,!1);if(!s.length)return-1;let{x:r,z:o}=s[0].point,a=Math.floor(r+4),l=Math.floor(4-o);return a<0||a>7||l<0||l>7?-1:l*8+a}squareToScreen(t){let e=Tn(t),n=new C(e.x,.1,e.z).project(this.camera);return{x:(n.x+1)/2*St,y:(1-n.y)/2*_n}}update(t){this.time+=t;let e=this.time,n=this.camera,s,r,o,a;if(this.mode==="title"){let c=e*.12;s=new C(Math.sin(c)*9.5,10.5+Math.sin(e*.3)*.4,Math.cos(c)*9.5),r=new C(0,.6,0),o=46,a=new C(0,1,0)}else{let c=this.basePose();if(s=c.pos.clone(),r=c.target.clone(),o=c.fov,a=c.up.clone(),this.lerpCam){this.lerpCam.t=Math.min(1,this.lerpCam.t+t/.9);let h=1-Math.pow(1-this.lerpCam.t,3);s.lerpVectors(this.lerpCam.from,s,h),r.lerpVectors(this.lerpCam.fromTarget,r,h),a.lerpVectors(this.lerpCam.fromUp,a,h).normalize(),o=this.lerpCam.fromFov+(o-this.lerpCam.fromFov)*h,this.lerpCam.t>=1&&(this.lerpCam=null)}if(this.zoomFx){let h=this.zoomFx,u=h.preset;h.t+=t;let f=.2,d=.5,g=u.dur,x=h.t<f?1-Math.pow(1-h.t/f,2):h.t<d?1:h.t<g?1-_f((h.t-d)/(g-d)):0,m=Tn(h.sq),p=new C(m.x,.3,m.z),y=p.clone().sub(s);if(s.addScaledVector(y,u.s*x),r.lerp(p,.85*x),u.shake&&h.t>.16&&h.t<.42){let _=u.shake*(1-(h.t-.16)/.26);s.x+=(Math.random()*2-1)*_,s.y+=(Math.random()*2-1)*_}u.flash&&h.t>.16&&!h.flashed&&(this.flash=u.flash,h.flashed=!0),h.t>=g&&(this.zoomFx=null)}if(this.shake){let h=this.shake;h.t+=t;let u=h.amp*Math.max(0,1-h.t/.32);s.x+=(Math.random()*2-1)*u,s.z+=(Math.random()*2-1)*u,r.x+=(Math.random()*2-1)*u*.5,h.t>=.32&&(this.shake=null)}}if(n.up.copy(a),n.position.copy(s),n.lookAt(r),this.curTarget=r,this.scene.fog){let c=s.distanceTo(r);this.scene.fog.near=c+3,this.scene.fog.far=c+3+(this.fogSpan||14)}n.fov!==o&&(n.fov=o,n.updateProjectionMatrix()),this.flash=Math.max(0,this.flash-t*3.2);let l=this.hitStop>0?0:t;this.hitStop=Math.max(0,this.hitStop-t);for(let c=this.anims.length-1;c>=0;c--){let h=this.anims[c];h.t=Math.min(1,h.t+l/h.dur);let u=_f(h.t),f=Math.sin(u*Math.PI)*(h.hop?.3:.12);h.group.position.set(h.from.x+(h.to.x-h.from.x)*u,f,h.from.z+(h.to.z-h.from.z)*u),h.group.scale.setScalar(1+f),h.group.userData.shadow.position.set(.06+f*.5,.004-f,.07+f*.5),h.t>=1&&(h.group.scale.setScalar(1),this.anims.splice(c,1))}for(let c=this.pendingRemoval.length-1;c>=0;c--){let h=this.pendingRemoval[c];h.t-=t,h.t<=0&&(this.pendingRemoval.splice(c,1),h.dir?this.launch(h.e,h.dir):(this.removeEntry(h.e),this.spawnBurst(h.e.sq)))}this.updateFlights(l,t);for(let c=this.shards.length-1;c>=0;c--){let h=this.shards[c];h.t+=t,h.v.y-=11*t,h.mesh.position.addScaledVector(h.v,t),h.mesh.position.y<.03&&(h.mesh.position.y=.03,h.v.y*=-.35,h.v.x*=.6,h.v.z*=.6,h.w.multiplyScalar(.6)),h.mesh.rotation.x+=h.w.x*t,h.mesh.rotation.y+=h.w.y*t,h.mesh.rotation.z+=h.w.z*t;let u=Math.max(0,Math.min(1,(h.life-h.t)/.35));h.mesh.scale.setScalar(u),h.t>=h.life&&(this.scene.remove(h.mesh),h.mesh.geometry.dispose(),this.shards.splice(c,1))}this.updateClocks(t);for(let c=this.revives.length-1;c>=0;c--){let h=this.revives[c];h.t+=t;let u=Math.round((1-Math.min(1,h.t/h.dur))*(h.N-1));for(let f of h.shards){let d=u*7,g=f.track;f.mesh.position.set(g[d],g[d+1],g[d+2]),f.mesh.rotation.set(g[d+3],g[d+4],g[d+5]),f.mesh.scale.setScalar(Math.max(.001,g[d+6]))}if(h.t>=h.dur){for(let g of h.shards)this.scene.remove(g.mesh),g.mesh.geometry.dispose();let{body:f,shadow:d}=h.e.group.userData;f.visible=!0,d.visible=!0,h.e.reviving=!1,h.e.pop={t:0},this.spawnBurst(h.e.sq,8382975),this.flash=Math.max(this.flash,.3),this.revives.splice(c,1)}}for(let c=this.bursts.length-1;c>=0;c--){let h=this.bursts[c];h.t+=t;let u=h.t/.35;h.mesh.scale.setScalar(1+u*1.4),h.mesh.material.opacity=Math.max(0,.9*(1-u)),u>=1&&(this.scene.remove(h.mesh),h.mesh.material.dispose(),this.bursts.splice(c,1))}for(let[c,h]of this.pieces){if(!this.anims.some(u=>u.group===h.group)){let u=c===this.selectedId?.14+Math.sin(e*6)*.03:0;h.group.position.y=u;let f=1+u;if(h.pop){h.pop.t+=t;let d=Math.min(1,h.pop.t/.35);f*=1+Math.sin(d*Math.PI)*.25,d>=1&&(h.pop=null)}h.group.scale.setScalar(f),h.group.userData.shadow.position.set(.06+u*.5,.004-u,.07+u*.5)}h.ring&&(h.ring.rotation.z=e*1.5,h.ring.material.color.setHSL(.52,1,.6+Math.sin(e*4)*.15))}for(let c=0;c<this.hlPool.length;c++){let h=this.hlPool[c],u=this.highlights[c];if(!u){h.visible=!1;continue}let f=Tn(u.sq);h.position.set(f.x,.012,f.z),h.material.color.set(u.color),h.material.opacity=u.opacity??.45,h.visible=!0}}shatter(t){let e=[...this.pieces.entries()].find(([,l])=>l.sq===t);if(!e)return;let[n,s]=e;this.pieces.delete(n),s.group.updateMatrixWorld(!0);let r=Tn(t),o=new C(r.x,.15,r.z),a=[new C,new C,new C];s.group.userData.body.traverse(l=>{if(!l.isMesh)return;let c=l.material.clone();c.side=Ve;let h=l.geometry.attributes.position;for(let u=0;u+2<h.count;u+=3){for(let m=0;m<3;m++)a[m].fromBufferAttribute(h,u+m).applyMatrix4(l.matrixWorld);let f=a[0].clone().add(a[1]).add(a[2]).divideScalar(3),d=new ce;d.setAttribute("position",new Lt(a.flatMap(m=>[m.x-f.x,m.y-f.y,m.z-f.z]),3)),d.computeVertexNormals();let g=new Ht(d,c);g.position.copy(f),this.scene.add(g);let x=f.clone().sub(o);x.y=0,x.lengthSq()<1e-6&&x.set(Math.random()-.5,0,Math.random()-.5),x.normalize().multiplyScalar(1.6+Math.random()*2.4),this.shards.push({mesh:g,life:1.3+Math.random()*.4,t:0,v:new C(x.x,2.2+Math.random()*3.2,x.z),w:new C((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18)})}}),this.scene.remove(s.group),this.spawnBurst(t,16734794),this.flash=Math.max(this.flash,.35)}reviveAt(t){this.spawnClock(t);let e=[...this.pieces.values()].find(n=>n.sq===t);e?this.startRevive(e):this.pendingRevive.set(t,this.time)}rewind(){this.rewinding={t0:this.time},this.spawnClock(-1,{scale:2.1,life:1.6})}spawnClock(t,e={}){if(!this.clockProto){let s=new re,r=h=>new gn({color:h,flatShading:!0}),o=new sn({color:14264378,flatShading:!0,shininess:70,specular:9076848}),a=(h,u,f=0,d=0,g=0)=>{let x=new Ht(h,u);return x.position.set(f,d,g),s.add(x),x};a(new Me(.4,.4,.16,12).rotateX(Math.PI/2),r(13119546)),a(new Me(.32,.32,.02,12).rotateX(Math.PI/2),r(16774104),0,0,.085);for(let h=0;h<12;h++){let u=h/12*Math.PI*2,f=h%3===0;a(new oe(f?.04:.025,f?.07:.04,.01),r(1706512),Math.sin(u)*.26,Math.cos(u)*.26,.1).rotation.z=-u}for(let h of[-1,1])a(new Fo(.14,8,4,0,Math.PI*2,0,Math.PI/2),o,h*.25,.36,0).rotation.z=-h*.55,a(new Me(.035,.05,.14,5),o,h*.24,-.42,0).rotation.z=h*.4;a(new oe(.06,.1,.06),o,0,.45,0);let l=new re;l.position.z=.11,s.add(l),l.add(new Ht(new oe(.035,.27,.015).translate(0,.12,0),r(11539486)));let c=new re;c.position.z=.115,s.add(c),c.add(new Ht(new oe(.05,.18,.015).translate(0,.08,0),r(1706512))),a(new Me(.035,.035,.03,6).rotateX(Math.PI/2),o,0,0,.12),this.clockIdx={minute:s.children.indexOf(l),hour:s.children.indexOf(c)},this.clockProto=s}let n=this.clockProto.clone();n.userData={minute:n.children[this.clockIdx.minute],hour:n.children[this.clockIdx.hour]},n.traverse(s=>{s.renderOrder=6}),this.scene.add(n),this.clocks.push({group:n,sq:t,t:0,life:e.life||1.35,size:e.scale||1})}updateClocks(t){if(!this.clocks.length)return;let e=this.camera,n=new C(1,0,0).applyQuaternion(e.quaternion),s=new C(0,1,0).applyQuaternion(e.quaternion),r=new C(0,0,1).applyQuaternion(e.quaternion);for(let o=this.clocks.length-1;o>=0;o--){let a=this.clocks[o];if(a.t+=t,a.sq<0)a.group.position.set(0,1.6,0).addScaledVector(r,1.5);else{let u=Tn(a.sq);a.group.position.set(u.x,.9,u.z).addScaledVector(n,.62).addScaledVector(s,.5).addScaledVector(r,.6)}a.group.quaternion.copy(e.quaternion);let l=a.t/.2,c=1.7,h=a.t<.2?1+(c+1)*Math.pow(l-1,3)+c*Math.pow(l-1,2):1;a.t>a.life-.25&&(h*=Math.max(0,(a.life-a.t)/.25)),a.group.scale.setScalar(Math.max(.001,h*.9*a.size)),a.group.rotateZ(.06*Math.sin(a.t*22)*Math.max(0,1-a.t)),a.group.userData.minute.rotation.z=a.t*13,a.group.userData.hour.rotation.z=.9+a.t*1.6,a.t>=a.life&&(this.scene.remove(a.group),this.clocks.splice(o,1))}}startRevive(t){if(t.reviving)return;t.reviving=!0,t.group.updateMatrixWorld(!0);let{body:e,shadow:n}=t.group.userData,s=Tn(t.sq),r=new C(s.x,.15,s.z),o=1.1,a=1/60,l=Math.round(o/a)+1,c=[],h=[new C,new C,new C];e.traverse(u=>{if(!u.isMesh)return;let f=u.material.clone();f.side=Ve;let d=u.geometry.attributes.position;for(let g=0;g+2<d.count;g+=3){for(let D=0;D<3;D++)h[D].fromBufferAttribute(d,g+D).applyMatrix4(u.matrixWorld);let x=h[0].clone().add(h[1]).add(h[2]).divideScalar(3),m=new ce;m.setAttribute("position",new Lt(h.flatMap(D=>[D.x-x.x,D.y-x.y,D.z-x.z]),3)),m.computeVertexNormals();let p=new Ht(m,f),y=x.clone().sub(r);y.y=0,y.lengthSq()<1e-6&&y.set(Math.random()-.5,0,Math.random()-.5),y.normalize().multiplyScalar(1.6+Math.random()*2.4);let _=new C(y.x,2.2+Math.random()*3.2,y.z),v=new C((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18),A=x.clone(),w=new C,R=new Float32Array(l*7);for(let D=0;D<l;D++){let b=Math.max(0,Math.min(1,(o-D*a)/.3));R.set([A.x,A.y,A.z,w.x,w.y,w.z,b],D*7),_.y-=11*a,A.addScaledVector(_,a),A.y<.03&&(A.y=.03,_.y*=-.35,_.x*=.6,_.z*=.6,v.multiplyScalar(.6)),w.addScaledVector(v,a)}p.scale.setScalar(.001),this.scene.add(p),c.push({mesh:p,track:R})}}),e.visible=!1,n.visible=!1,this.revives.push({e:t,shards:c,t:0,dur:o,N:l})}pieceIcon(t,e,n=34){if(!this.ready)return null;let s=`${t}${e}${n}`;this.iconCache||(this.iconCache=new Map);let r=this.iconCache.get(s);if(r)return r;let o=n*2,a=this.renderer,l=new Un;l.add(this.ambient.clone(),this.fill.clone(),this.fill2.clone());let c=this.key.clone();c.position.set(-5,9,-4),l.add(c);let h=hc(t,e,this.mats);h.userData.shadow.visible=!1,l.add(h);let u=new Es(-.52,.52,.52,-.52,.1,30);u.position.set(0,10,0),u.up.set(0,0,-1),u.lookAt(0,0,0);let f=new Dn(o,o);f.texture.colorSpace=ge;let d=a.getRenderTarget(),g=a.getClearColor(new Tt),x=a.getClearAlpha();a.setRenderTarget(f),a.setClearColor(0,0),a.clear(!0,!0,!1),a.render(l,u);let m=new Uint8Array(o*o*4);a.readRenderTargetPixels(f,0,0,o,o,m),a.setRenderTarget(d),a.setClearColor(g,x),f.dispose();let p=document.createElement("canvas");p.width=p.height=o;let y=p.getContext("2d"),_=y.createImageData(o,o);for(let A=0;A<o;A++)_.data.set(m.subarray((o-1-A)*o*4,(o-A)*o*4),A*o*4);y.putImageData(_,0,0),r=document.createElement("canvas"),r.width=r.height=n;let v=r.getContext("2d");return v.imageSmoothingEnabled=!0,v.imageSmoothingQuality="high",v.drawImage(p,0,0,n,n),this.iconCache.set(s,r),r}launch(t,e){let n=t.group;n.userData.shadow.visible=!1;let s=12+Math.random()*3,r=new C(-e.z,0,e.x).multiplyScalar((Math.random()-.5)*3),o=new C(e.x*s,9.5+Math.random()*2,e.z*s).add(r),a=new C(e.z,0,-e.x).normalize(),l=new C(0,1,0);this.flights.push({e:t,v:o,axis:a,twist:l,spin:20+Math.random()*10,twistSpin:(Math.random()-.5)*14,t:0,ghostT:0,bounced:!1}),this.spawnImpact(n.position.clone(),e),this.hitStop=.07,this.shake={t:0,amp:.16},this.flash=Math.max(this.flash,.3)}updateFlights(t,e){let n=new kn;for(let s=this.flights.length-1;s>=0;s--){let r=this.flights[s],o=r.e.group;r.t+=t,r.v.y-=9*t,o.position.addScaledVector(r.v,t),n.setFromAxisAngle(r.axis,r.spin*t),o.quaternion.premultiply(n),n.setFromAxisAngle(r.twist,r.twistSpin*t),o.quaternion.premultiply(n),o.position.y<0&&r.v.y<0&&!r.bounced&&(o.position.y=0,r.v.y*=-.5,r.v.x*=.75,r.v.z*=.75,r.spin*=.6,r.bounced=!0,this.spawnDust(o.position.clone(),4)),r.ghostT+=t,r.ghostT>.03&&r.t<.55&&t>0&&(r.ghostT=0,this.spawnGhost(o,.45*(1-r.t/.55)));let a=Math.hypot(o.position.x,o.position.z);(r.t>1.6||a>14||o.position.y<-3)&&(this.scene.remove(o),this.flights.splice(s,1))}for(let s=this.ghosts.length-1;s>=0;s--){let r=this.ghosts[s];r.t+=e;let o=r.t/.22;r.mat.opacity=Math.max(0,r.a0*(1-o)),o>=1&&(this.disposeGhost(r),this.ghosts.splice(s,1))}for(let s=this.puffs.length-1;s>=0;s--){let r=this.puffs[s];r.t+=e;let o=r.t/r.life;r.v.multiplyScalar(Math.max(0,1-e*3)),r.mesh.position.addScaledVector(r.v,e),r.mesh.scale.setScalar(r.s0*(1+o*1.5)),r.mesh.material.opacity=Math.max(0,.75*(1-o)),o>=1&&(this.scene.remove(r.mesh),r.mesh.material.dispose(),this.puffs.splice(s,1))}}spawnGhost(t,e){let n=new ve({color:16774880,transparent:!0,opacity:e,depthWrite:!1}),s=t.userData.body.clone();s.traverse(o=>{o.isMesh&&(o.material=n)});let r=new re;r.position.copy(t.position),r.quaternion.copy(t.quaternion),r.scale.copy(t.scale),r.add(s),r.renderOrder=3,this.scene.add(r),this.ghosts.push({group:r,mat:n,t:0,a0:e})}disposeGhost(t){this.scene.remove(t.group),t.mat.dispose()}spawnImpact(t,e){this.spawnDust(t,7,e)}spawnDust(t,e,n=null){this.dustGeo||(this.dustGeo=new mn(.13,0));for(let s=0;s<e;s++){let r=Math.random()*Math.PI*2,o=new C(Math.cos(r),0,Math.sin(r)).multiplyScalar(1.5+Math.random()*2);n&&o.addScaledVector(n,-1.2),o.y=.6+Math.random()*.8;let a=new Ht(this.dustGeo,new ve({color:14208960,transparent:!0,opacity:.75,depthWrite:!1}));a.position.set(t.x,.1,t.z);let l=.6+Math.random()*.6;a.scale.setScalar(l),a.renderOrder=4,this.scene.add(a),this.puffs.push({kind:"dust",mesh:a,v:o,s0:l,t:0,life:.45+Math.random()*.2})}}spawnBurst(t,e=16773824){let n=Tn(t),s=new Ht(this.burstGeo,new ve({color:e,transparent:!0,opacity:.9,depthWrite:!1,side:Ve}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.03,n.z),s.renderOrder=4,this.scene.add(s),this.bursts.push({mesh:s,t:0})}render(t){if(this.ready){if(this.update(t),this.titleView){this.titleStage||(this.titleStage=new ea),this.titleStage.update(t);let e=this.renderer.domElement;this.titleStage.render(this.renderer,{x:0,y:0,w:270,h:480},{w:e.width,h:e.height})}else this.renderer.render(this.scene,this.camera);if(this.kingView){this.kingStage.update(t,this.kingView.shown,this.kingView.mode);let e=this.renderer.domElement;this.kingStage.render(this.renderer,this.kingView.rect,{w:e.width,h:e.height})}if(this.phoneView&&this.phoneStage){this.phoneStage.update(t);let e=this.renderer.domElement;this.phoneStage.render(this.renderer,this.phoneView.rect,{w:e.width,h:e.height})}}}};var At=270,Ye=480,_i={9:"10px Galmuri9",11:"12px Galmuri11","11b":"bold 12px Galmuri11",14:"15px Galmuri14"},Mc={9:10,11:12,"11b":12,14:15},yf=Object.values(_i),te={red:"#8e1a1a",redHi:"#d4382c",gold:"#e8b93a",cyan:"#7fe9ff",green:"#7ad17a",warn:"#ff6b6b",late:"#ff9f43"},ia=class{constructor(t){this.c=t,this.ctx=t.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.buttons=[],this.pressedId=null,this.off=document.createElement("canvas"),this.offCtx=this.off.getContext("2d"),this.qrCache=new Map,this.setTheme({frame:"deco",lettering:"brass"})}setTheme(t){this.frameId=t.frame,this.letterId=t.lettering,this.pal=vr[t.frame]||vr.deco}begin(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,At,Ye),this.ctx.imageSmoothingEnabled=!1,this.buttons=[]}rect(t,e,n,s,r){this.ctx.fillStyle=r,this.ctx.fillRect(t,e,n,s)}box(t,e,n,s,r){let o=this.ctx;o.fillStyle=r,o.fillRect(t,e,n,1),o.fillRect(t,e+s-1,n,1),o.fillRect(t,e,1,s),o.fillRect(t+n-1,e,1,s)}text(t,e,n,{font:s=11,color:r=this.pal.ink,align:o="left",shadow:a=!0,alpha:l=1}={}){let c=this.ctx;c.save(),c.globalAlpha=l,c.font=_i[s]||_i[11],c.textBaseline="top",c.textAlign="left";let h=o==="left"?0:c.measureText(t).width,u=Math.round(o==="center"?e-h/2:o==="right"?e-h:e),f=Math.round(n);a&&(c.fillStyle="#000",c.fillText(t,u+1,f+1)),c.fillStyle=r,c.fillText(t,u,f),c.restore()}measure(t,e=11){return this.ctx.font=_i[e]||_i[11],Math.ceil(this.ctx.measureText(t).width)}bigText(t,e,n,{scale:s=2,font:r=14,color:o=this.pal.ink,align:a="center",shadow:l=!0}={}){let c=this.measure(t,r)+4,h=Mc[r]+4,u=this.prepOff(c,h),f=Math.round(a==="center"?e-c*s/2:a==="right"?e-c*s:e);return l&&(u.fillStyle="#000",u.font=_i[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f+s,n+s,c*s,h*s),u.clearRect(0,0,c,h)),u.fillStyle=o,u.font=_i[r],u.fillText(t,2,1),this.ctx.drawImage(this.off,f,n,c*s,h*s),{w:c*s,h:h*s}}prepOff(t,e){this.off.width=t,this.off.height=e;let n=this.offCtx;return n.imageSmoothingEnabled=!1,n.clearRect(0,0,t,e),n.textBaseline="top",n}letter(t,e,n,{scale:s=2,font:r=14,align:o="center",spacing:a=0}={}){let l=Mc[r]+4,c=this.measure(t,r)+6+Math.max(0,t.length-1)*a,h=o==="center"?Math.round(e-c*s/2):o==="right"?e-c*s:e,u=[];{let A=3;for(let w of t){let R=this.measure(w,r);u.push([A,R]),A+=R+a}}let f=this.letterId,d=f==="crown"||f==="robe"||f==="velvet"||f==="disco",x=(A,w=0,R=0)=>{let D=this.prepOff(c,l);D.font=_i[r],D.fillStyle="#fff";for(let[b,S]of d?[[0,0],[1,0],[0,1],[1,1]]:[[0,0]])a?u.forEach(([N],G)=>D.fillText([...t][G],N+b,1+S)):D.fillText(t,3+b,1+S);typeof A=="function"?(D.globalCompositeOperation="source-atop",A(D)):(D.globalCompositeOperation="source-in",D.fillStyle=A,D.fillRect(0,0,c,l)),D.globalCompositeOperation="source-over",this.ctx.drawImage(this.off,h+w*s,n+R*s,c*s,l*s)},m=A=>{let w=this.offCtx.createLinearGradient(0,0,0,l);return A.forEach(([R,D])=>w.addColorStop(R,D)),w},p=(A,w,R,D=7,b=null)=>S=>{S.fillStyle=A,S.fillRect(0,0,c,l);for(let N=-D;N<c+D;N+=D)S.fillStyle=w,S.beginPath(),S.moveTo(N,0),S.lineTo(N+D,0),S.lineTo(N+D*.35,l*.55),S.closePath(),S.fill(),S.fillStyle=R,S.beginPath(),S.moveTo(N+D,l),S.lineTo(N,l),S.lineTo(N+D*.65,l*.48),S.closePath(),S.fill();b&&b(S)},y=1/s,_=s>=3?3:s===2?2:1,v=(A,w)=>{for(let R=0;R<=_;R++)for(let D of[-1,1])x(A,D,R);x(A,0,-1),x(A,0,_+1),w.forEach((R,D)=>x(R,0,_-D))};if(f==="neon"){x("#2a0830",1,2);for(let[A,w]of[[-1,0],[1,0],[0,-1],[0,1]])x("#3fd8ff",A,w);x(m([[0,"#ffe0fa"],[.5,"#ff6ad8"],[1,"#c02aa8"]]))}else if(f==="chrome")x("#000",1,2),x("#2a2c34",1,1),x(m([[0,"#ffffff"],[.42,"#c8ccd8"],[.5,"#3a3e4c"],[.62,"#e8ecf4"],[1,"#7a7e8c"]]));else if(f==="crown")v("#08040c",["#1e0e2c","#3a1e52","#5a3a78"].slice(0,_)),x(p("#d6d8e6","#ffffff","#8e90a8",7,s>=2?A=>{A.fillStyle="#4fd0ff";for(let[w,R]of u)A.fillRect(w+Math.floor(R/2),Math.round(l*.45),2,2)}:null));else if(f==="robe"){v("#0c0408",["#3a0a12","#5a1220","#7a1a26"].slice(0,_));for(let[A,w]of[[-1,0],[1,0],[0,-1],[0,1]])x("#f8f4ea",A*y,w*y);x(p("#c8343f","#ec6a6e","#8a1e2c",7,A=>{A.fillStyle="#f2c14e",A.fillRect(0,Math.round(l*.6),c,1)}))}else if(f==="velvet"){v("#0a0408",["#5a3a10","#8a5e18","#b8862a"].slice(0,_));for(let[A,w]of[[-1,0],[1,0],[0,-1],[0,1]])x("#f3dc8a",A*y,w*y);x(p("#7a2a8a","#b25ac4","#4e1a5c"))}else if(f==="disco"){let A=Math.floor(performance.now()/508.47457627118644);v("#08040c",["#140820","#24103a","#36184e"].slice(0,_));for(let[w,R]of[[-1,0],[1,0],[0,-1],[0,1]])x("#ffffff",w*y,R*y);x(w=>u.map((R,D)=>[R,D]).reverse().forEach(([[R,D],b])=>{let S=((b+A)*47%360+360)%360,N=b?R:0,G=b===u.length-1?c:R+D+1;w.fillStyle=`hsl(${S},92%,56%)`,w.fillRect(N,0,G-N,l),w.fillStyle=`hsl(${S},100%,78%)`,w.fillRect(N,0,G-N,Math.round(l*.42))}))}else x("#000",1,2),x("#6e4a14",1,1),x(m([[0,"#fff6d0"],[.35,"#f3dc8a"],[.5,"#a87a2a"],[.62,"#f3dc8a"],[1,"#8a5e18"]]));return{w:c*s,h:l*s}}hLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,n,1),r.fillStyle=s.line,r.fillRect(t,e+1,n,1),r.fillStyle=s.lineLo,r.fillRect(t,e+2,n,1)}vLine(t,e,n){let s=this.pal,r=this.ctx;r.fillStyle=s.lineHi,r.fillRect(t,e,1,n),r.fillStyle=s.line,r.fillRect(t+1,e,1,n),r.fillStyle=s.lineLo,r.fillRect(t+2,e,1,n)}glow(t,e,n,s,r){let o=this.ctx;o.save(),o.globalAlpha=.25,this.box(t-1,e-1,n+2,s+2,r),o.globalAlpha=.12,this.box(t-2,e-2,n+4,s+4,r),o.restore(),this.box(t,e,n,s,r)}frame(){let t=this.pal,e=this.ctx,n=2,s=2,r=At-4,o=Ye-4;if(this.frameId==="plain"){this.box(4,4,At-8,Ye-8,t.line),e.fillStyle=t.lineHi;for(let[a,l]of[[4,4],[At-12,4],[4,Ye-5],[At-12,Ye-5]])e.fillRect(a,l,8,1);return}if(this.frameId==="neon"){this.glow(4,4,At-8,Ye-8,t.accent),this.box(7,7,At-14,Ye-14,t.lineLo);return}this.hLine(n,s,r),this.hLine(n,s+o-3,r),this.vLine(n,s,o),this.vLine(n+r-3,s,o),e.fillStyle=t.lineLo,e.fillRect(n+5,s+5,r-10,1),e.fillRect(n+5,s+o-6,r-10,1),e.fillRect(n+5,s+5,1,o-10),e.fillRect(n+r-6,s+5,1,o-10);for(let[a,l,c,h]of[[n,s,1,1],[n+r,s,-1,1],[n,s+o,1,-1],[n+r,s+o,-1,-1]])for(let u=0;u<3;u++){let f=a+c*(3+u*3)-(c<0?6:0),d=l+h*(3+u*3)-(h<0?6:0);e.fillStyle=t.line,e.fillRect(f,d,6,6),e.fillStyle=t.lineHi,e.fillRect(f,d,2,2)}}pillar(t,e,n){let s=this.pal,r=this.ctx;if(this.frameId==="plain"){this.rect(t+5,e,1,n-e,s.line);return}if(this.frameId==="neon"){this.rect(t+4,e,1,n-e,s.accent),this.rect(t+7,e+6,1,n-e-12,s.line);return}for(let o=0;o<3;o++)this.vLine(t+o*4,e+10,n-e-10);r.fillStyle=s.lineLo,r.fillRect(t-3,n-4,17,4),r.fillStyle=s.lineHi,r.fillRect(t-3,n-4,17,1),r.fillStyle=s.lineLo,r.fillRect(t-2,e+8,15,3),r.fillStyle=s.lineHi,r.fillRect(t-2,e+8,15,1),r.fillStyle=s.accentLo,r.beginPath(),r.arc(t+5.5,e+3.5,5,0,Math.PI*2),r.fill(),r.fillStyle=s.accent,r.beginPath(),r.arc(t+5,e+3,4,0,Math.PI*2),r.fill(),r.fillStyle=s.accentHi,r.fillRect(t+3,e+1,2,2)}panel(t,e,n,s,{fill:r=this.pal.panel,border:o=this.pal.ink,shadow:a=!0}={}){a&&this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),o&&this.box(t,e,n,s,o)}plaque(t,e,n,s,{fill:r=this.pal.panel}={}){let o=this.pal;if(this.rect(t+2,e+2,n,s,"rgba(0,0,0,0.6)"),this.rect(t,e,n,s,r),this.frameId==="plain"){this.box(t,e,n,s,o.line);return}if(this.frameId==="neon"){this.glow(t,e,n,s,o.accent),this.box(t+3,e+3,n-6,s-6,o.lineLo);return}this.hLine(t,e,n),this.hLine(t,e+s-3,n),this.vLine(t,e,s),this.vLine(t+n-3,e,s),this.box(t+4,e+4,n-8,s-8,o.accentLo)}button(t,e,n,s,r,o,{style:a="normal",disabled:l=!1,font:c=11,color:h}={}){let u=this.ctx,f=this.pal,d=this.pressedId===t&&!l,g=d?1:0,x=l?"#14121a":a==="danger"?te.red:a==="primary"?f.btnPrimary:f.btn,m=l?f.lineLo:a==="danger"?te.redHi:f.accent;this.panel(e+g,n+g,s,r,{fill:x,border:m,shadow:!d}),l||(this.frameId==="neon"?(u.save(),u.globalAlpha=.3,this.box(e+g-1,n+g-1,s+2,r+2,m),u.restore()):(u.fillStyle=a==="danger"?"#ff8a7a":f.accentHi,u.fillRect(e+g+1,n+g+1,s-2,1),u.fillRect(e+g+1,n+g+1,1,r-2),u.fillStyle=a==="danger"?"#4a0a0a":f.accentLo,u.fillRect(e+g+1,n+g+r-2,s-2,1),u.fillRect(e+g+s-2,n+g+1,1,r-2)));let p=Mc[c];this.text(o,e+g+s/2,n+g+Math.floor((r-p)/2),{font:c,align:"center",color:h||(l?f.dim:f.ink)}),l||this.buttons.push({id:t,x:e,y:n,w:s,h:r})}hit(t,e){for(let n=this.buttons.length-1;n>=0;n--){let s=this.buttons[n];if(t>=s.x-2&&t<s.x+s.w+2&&e>=s.y-2&&e<s.y+s.h+2)return s.id}return null}bar(t,e,n,s,r,o,a="#000"){this.rect(t,e,n,s,a),this.rect(t+1,e+1,Math.round((n-2)*Math.max(0,Math.min(1,r))),s-2,o),this.box(t,e,n,s,this.pal.dim)}card(t,e,n){this.rect(t+1,e+1,7,10,"#000"),this.rect(t,e,7,10,n?te.gold:"#2a2418"),n&&this.rect(t+1,e+1,2,2,"#fff3c4")}dim(t=.55){this.rect(0,0,At,Ye,`rgba(0,0,0,${t})`)}vignette(){let t=this.ctx,e=t.createRadialGradient(At/2,Ye/2,Ye*.32,At/2,Ye/2,Ye*.75);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,0.55)"),t.fillStyle=e,t.fillRect(0,0,At,Ye)}qr(t,e,n,s=2){if(!window.qrcode)return 0;let r=this.qrCache.get(t);if(!r)try{let a=window.qrcode(0,"L");a.addData(t),a.make();let l=a.getModuleCount();r={n:l,dark:[]};for(let c=0;c<l;c++)for(let h=0;h<l;h++)a.isDark(c,h)&&r.dark.push([c,h]);this.qrCache.set(t,r)}catch{return 0}let o=(r.n+2)*s;this.rect(e,n,o,o,"#fff"),this.ctx.fillStyle="#000";for(let[a,l]of r.dark)this.ctx.fillRect(e+(l+1)*s,n+(a+1)*s,s,s);return o}lines(t,e,n=9){let s=[],r="";for(let o of t)this.measure(r+o,n)>e&&r?(s.push(r),r=o.trimStart()):r+=o;return r&&s.push(r),s}};var sa=class extends EventTarget{constructor(){super(),this.t=null}use(t){return this.t&&this.t!==t&&this.t.close?.(),this.t=t,t.hub=this,t}emit(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:{type:t,...e}}))}send(t){this.t?.send(t)}leave(){let t=this.t;this.t=null,t?.leave?.()}get online(){return this.t?!!this.t.online:!1}get kind(){return this.t?.kind??null}},bc="faith-chess-token",ra=class{constructor(){this.kind="lan",this.ws=null,this.wantOpen=!1,this.retry=null,this.online=!1}get token(){try{return localStorage.getItem(bc)}catch{return null}}set token(t){try{t?localStorage.setItem(bc,t):localStorage.removeItem(bc)}catch{}}connect(){this.wantOpen=!0,clearTimeout(this.retry);let t=location.protocol==="https:"?"wss":"ws",e=new WebSocket(`${t}://${location.host}`);this.ws=e,e.onopen=()=>{this.online=!0,this.hub?.emit("open"),this.token&&this.send({type:"reconnect",token:this.token})},e.onmessage=n=>{let s;try{s=JSON.parse(n.data)}catch{return}if(s.type==="joined"&&(this.token=s.token),s.type==="error"&&s.code==="nosession"){this.token=null;return}this.hub?.emit(s.type,s)},e.onclose=()=>{this.online=!1,this.hub?.emit("close"),this.wantOpen&&(this.retry=setTimeout(()=>this.connect(),1e3))},e.onerror=()=>{}}send(t){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}leave(){this.send({type:"leave"}),this.token=null}close(){}};var gy="abcdefgh";function Ot(i,t){return t*8+i}function Tr(i){return i&7}function Wi(i){return i>>3}function wc(i){return gy[Tr(i)]+(Wi(i)+1)}function We(i){return i==="w"?"b":"w"}var vf=1;function oa(i,t){return{id:vf++,type:i,color:t,shield:!1}}function aa(){vf=1;let i=new Array(64).fill(null),t=["r","n","b","q","k","b","n","r"];for(let e=0;e<8;e++)i[Ot(e,0)]=oa(t[e],"w"),i[Ot(e,1)]=oa("p","w"),i[Ot(e,6)]=oa("p","b"),i[Ot(e,7)]=oa(t[e],"b");return{board:i,turn:"w",castling:{w:{k:!0,q:!0},b:{k:!0,q:!0}},ep:null,halfmove:0,fullmove:1,lastMove:null}}function qi(i){return{board:i.board.map(t=>t?{...t}:null),turn:i.turn,castling:{w:{...i.castling.w},b:{...i.castling.b}},ep:i.ep,halfmove:i.halfmove,fullmove:i.fullmove,lastMove:i.lastMove?{...i.lastMove}:null}}function xy(i,t){for(let e=0;e<64;e++){let n=i[e];if(n&&n.type==="k"&&n.color===t)return e}return-1}var Mf=[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]],bf=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],Sc=[[1,1],[-1,1],[-1,-1],[1,-1]],Ec=[[1,0],[0,1],[-1,0],[0,-1]];function ni(i,t){return i>=0&&i<8&&t>=0&&t<8}function Bs(i,t,e){let n=Tr(t),s=Wi(t),r=e==="w"?s-1:s+1;for(let o of[-1,1]){let a=n+o;if(ni(a,r)){let l=i[Ot(a,r)];if(l&&l.color===e&&l.type==="p")return!0}}for(let[o,a]of Mf){let l=n+o,c=s+a;if(ni(l,c)){let h=i[Ot(l,c)];if(h&&h.color===e&&h.type==="n")return!0}}for(let[o,a]of bf){let l=n+o,c=s+a;if(ni(l,c)){let h=i[Ot(l,c)];if(h&&h.color===e&&h.type==="k")return!0}}for(let[o,a]of Sc){let l=n+o,c=s+a;for(;ni(l,c);){let h=i[Ot(l,c)];if(h){if(h.color===e&&(h.type==="b"||h.type==="q"))return!0;break}l+=o,c+=a}}for(let[o,a]of Ec){let l=n+o,c=s+a;for(;ni(l,c);){let h=i[Ot(l,c)];if(h){if(h.color===e&&(h.type==="r"||h.type==="q"))return!0;break}l+=o,c+=a}}return!1}function Xi(i,t){let e=xy(i.board,t);return e<0?!1:Bs(i.board,e,We(t))}function _y(i,t){let{board:e}=i,n=e[t];if(!n)return[];let s=[],r=Tr(t),o=Wi(t),a=n.color,l=(h,u)=>s.push({from:t,to:h,...u});if(n.type==="p"){let h=a==="w"?1:-1,u=a==="w"?1:6,f=a==="w"?7:0,d=o+h;if(ni(r,d)&&!e[Ot(r,d)]){if(d===f)for(let x of["q","r","b","n"])l(Ot(r,d),{promotion:x});else l(Ot(r,d),{});let g=o+2*h;o===u&&!e[Ot(r,g)]&&l(Ot(r,g),{double:!0})}for(let g of[-1,1]){let x=r+g;if(!ni(x,d))continue;let m=Ot(x,d),p=e[m];if(p&&p.color!==a)if(d===f)for(let y of["q","r","b","n"])l(m,{promotion:y,capture:!0});else l(m,{capture:!0});else if(!p&&i.ep===m){let y=e[Ot(x,o)];y&&y.type==="p"&&y.color!==a&&l(m,{enPassant:!0,capture:!0})}}return s}if(n.type==="n"||n.type==="k"){let h=n.type==="n"?Mf:bf;for(let[u,f]of h){let d=r+u,g=o+f;if(!ni(d,g))continue;let x=Ot(d,g),m=e[x];m?m.color!==a&&l(x,{capture:!0}):l(x,{})}if(n.type==="k"){let u=a==="w"?0:7;if(o===u&&r===4&&!Bs(e,t,We(a))){let f=i.castling[a];if(f.k){let d=e[Ot(7,u)];d&&d.type==="r"&&d.color===a&&!e[Ot(5,u)]&&!e[Ot(6,u)]&&!Bs(e,Ot(5,u),We(a))&&!Bs(e,Ot(6,u),We(a))&&l(Ot(6,u),{castle:"k"})}if(f.q){let d=e[Ot(0,u)];d&&d.type==="r"&&d.color===a&&!e[Ot(1,u)]&&!e[Ot(2,u)]&&!e[Ot(3,u)]&&!Bs(e,Ot(3,u),We(a))&&!Bs(e,Ot(2,u),We(a))&&l(Ot(2,u),{castle:"q"})}}}return s}let c=n.type==="b"?Sc:n.type==="r"?Ec:[...Sc,...Ec];for(let[h,u]of c){let f=r+h,d=o+u;for(;ni(f,d);){let g=Ot(f,d),x=e[g];if(!x)l(g,{});else{x.color!==a&&l(g,{capture:!0});break}f+=h,d+=u}}return s}function ks(i,t){let e=i.turn,n=t!=null?[t]:[...Array(64).keys()],s=[];for(let r of n){let o=i.board[r];if(!(!o||o.color!==e))for(let a of _y(i,r)){let l=Ef(i,a);Xi(l,e)||s.push(a)}}return s}function Sf(i,t,e,n){return ks(i,t).find(s=>s.to===e&&(s.promotion??null)===(n??null))||null}function Ef(i,t){let e=qi(i),n=e.board,s=n[t.from],r=s.color,o=n[t.to];if(n[t.to]=s,n[t.from]=null,t.enPassant){let c=Ot(Tr(t.to),Wi(t.from));n[c]=null}if(t.promotion&&(s.type=t.promotion),t.castle){let c=Wi(t.from);t.castle==="k"?(n[Ot(5,c)]=n[Ot(7,c)],n[Ot(7,c)]=null):(n[Ot(3,c)]=n[Ot(0,c)],n[Ot(0,c)]=null)}s.type==="k"&&(e.castling[r].k=!1,e.castling[r].q=!1);let a=r==="w"?0:7;t.from===Ot(0,a)&&(e.castling[r].q=!1),t.from===Ot(7,a)&&(e.castling[r].k=!1);let l=r==="w"?7:0;return t.to===Ot(0,l)&&(e.castling[We(r)].q=!1),t.to===Ot(7,l)&&(e.castling[We(r)].k=!1),e.ep=t.double?Ot(Tr(t.from),(Wi(t.from)+Wi(t.to))/2):null,e.halfmove=s.type==="p"||o||t.enPassant?0:e.halfmove+1,r==="b"&&e.fullmove++,e.turn=We(r),e.lastMove={from:t.from,to:t.to,pieceId:s.id,color:r},e.captured=o?{...o}:null,e}function wf(i,t){return Ef(i,t)}function la(i,t){let e=qi(i),n=e.board[t];if(!n||n.type==="k")return e;if(e.board[t]=null,n.type==="r"){let s=n.color==="w"?0:7;t===Ot(0,s)&&(e.castling[n.color].q=!1),t===Ot(7,s)&&(e.castling[n.color].k=!1)}return e}function yy(i){let t={w:0,b:0};for(let e of i)if(!(!e||e.type==="k"))if(e.type==="n"||e.type==="b")t[e.color]++;else return!1;return t.w+t.b<=1}function Tf(i){let t=i.turn,e=ks(i),n=Xi(i,t);return e.length===0?n?{over:!0,result:"checkmate",winner:We(t),check:n}:{over:!0,result:"stalemate",winner:null,check:n}:yy(i.board)?{over:!0,result:"insufficient",winner:null,check:n}:i.halfmove>=100?{over:!0,result:"fifty",winner:null,check:n}:{over:!1,result:null,winner:null,check:n}}var Ue={ERASE_COOLDOWN_MS:1e4,SUSPECT_WINDOW_MS:1e4,SUSPECT_LATE_MS:2e4,PICK_TIMEOUT_MS:1e4,RECONNECT_GRACE_MS:3e4,LONG_PRESS_MS:800,FOUL_LIMIT:3,SUSPECT_CHOICES:["p","n","b","r","q"]},Tc={p:1,n:3,b:3,r:5,q:9},hn={p:"\uD3F0",n:"\uB098\uC774\uD2B8",b:"\uBE44\uC20D",r:"\uB8E9",q:"\uD038",k:"\uD0B9"};var Ac=(i,t)=>{for(let e=0;e<i.length;e++)if(i[e]!==t[e])return i[e]<t[e];return!1},yi=(i,t,e)=>{let n=i.charCodeAt(i.length-1)-44032;return n>=0&&n<11172&&n%28!==0?t:e};function Yi(i){return String(i||"").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").trim().slice(0,12)}var vi=class i{constructor(t,{now:e=()=>Date.now(),onChange:n=()=>{}}={}){this.code=t,this.now=e,this.onChange=n,this.players={w:null,b:null},this.round=0,this.resetMatch(),this.status="waiting"}resetMatch(){this.state=aa(),this.erases=[],this.lastEraseAt={w:-1/0,b:-1/0},this.caught={w:0,b:0},this.pending={w:null,b:null},this.lastMovedId={w:null,b:null},this.history=[],this.historyShift=0,this.result=null,this.rematchVotes={w:!1,b:!1},this.lastMoveVisible=null,this.startedAt=null}get isFull(){return!!(this.players.w&&this.players.b)}addPlayer(t,e){let n=this.players.w?this.players.b?null:"b":"w";return n?(this.players[n]={name:Yi(t)||(n==="w"?"\uBC31":"\uD751"),token:e,connected:!0,disconnectedAt:null,send:null},this.isFull&&this.status==="waiting"&&this.start(),n):null}start(){this.resetMatch(),this.status="playing",this.round++,this.startedAt=this.now(),this.emit("event",{name:"start"}),this.changed()}colorOfToken(t){for(let e of["w","b"])if(this.players[e]&&this.players[e].token===t)return e;return null}setConnected(t,e){let n=this.players[t];n&&(n.connected=e,n.disconnectedAt=e?null:this.now(),this.changed())}handle(t,e){if(!(!e||typeof e!="object"))switch(e.type){case"move":return this.move(t,e.from|0,e.to|0,e.promotion||null);case"erase":return this.erase(t,e.square|0);case"suspect":return this.suspect(t);case"pick":return this.pick(t,String(e.pieceType||""));case"resign":return this.resign(t);case"rematch":return this.rematch(t);default:return}}move(t,e,n,s){if(this.status!=="playing"||this.state.turn!==t)return;let r=Sf(this.state,e,n,s);if(!r)return this.toast(t,"\uB458 \uC218 \uC5C6\uB294 \uC218\uC785\uB2C8\uB2E4.","warn");let o=this.state;this.history.push({state:qi(o),t:this.now(),by:t,m:{from:r.from,to:r.to,castle:r.castle||null},type:o.board[e].type,lastMovedId:{...this.lastMovedId},lastMoveVisible:this.lastMoveVisible}),this.history.length>400&&(this.history.shift(),this.historyShift++),this.state=wf(o,r),this.lastMovedId[t]=o.board[e].id,this.lastMoveVisible={from:e,to:n};let a=We(t),l=Xi(this.state,a);this.emit("event",{name:r.capture?"capture":r.castle?"castle":"move",check:l,by:t,at:n}),this.checkEnd(),this.changed()}erase(t,e){if(this.status!=="playing")return;let n=this.now(),s=this.state.board[e];if(!s||s.color===t)return;if(s.type==="k")return this.toast(t,"\uD0B9\uC740 \uC9C0\uC6B8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","warn");let r=Ue.ERASE_COOLDOWN_MS-(n-this.lastEraseAt[t]);if(r>0)return this.toast(t,`\uC544\uC9C1 ${Math.ceil(r/1e3)}\uCD08 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`,"warn");this.state=la(this.state,e),this.lastEraseAt[t]=n,this.erases.push({t:n,by:t,victim:s.color,pieceType:s.type,pieceId:s.id,square:e,moveIndex:this.history.length+this.historyShift,resolved:!1}),this.toast(t,`${wc(e)}\uC758 ${hn[s.type]}${yi(hn[s.type],"\uC744","\uB97C")} \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4.`,"secret"),this.checkEnd(),this.changed()}suspect(t){if(this.status!=="playing"||this.pending[t])return;this.emit("event",{name:"suspect",by:t});let e=this.now(),n=-1;for(let o=this.erases.length-1;o>=0;o--){let a=this.erases[o];if(a.victim===t&&!a.resolved){n=o;break}}let s=n>=0?this.erases[n]:null,r=s?e-s.t:1/0;if(s&&r<=Ue.SUSPECT_WINDOW_MS)s.resolved=!0,this.pending[t]={kind:"pick",eraseIndex:n,deadline:e+Ue.PICK_TIMEOUT_MS},this.toast(t,"\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?","info");else if(s&&r<=Ue.SUSPECT_LATE_MS)s.resolved=!0,this.toast(t,"\uD55C \uBC1C \uB2A6\uC5C8\uC2B5\uB2C8\uB2E4\u2026","late");else{s&&(s.resolved=!0);let o=this.findPieceSquare(this.lastMovedId[t]),a=o>=0?this.state.board[o]:null;a&&a.type!=="k"?(this.state=la(this.state,o),this.toast(t,`\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC758\uC2EC\uC758 \uB300\uAC00\uB85C ${hn[a.type]}${yi(hn[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"bad"),this.toast(We(t),`\uC0C1\uB300\uAC00 \uD5DB\uB41C \uC758\uC2EC\uC744 \uD588\uC2B5\uB2C8\uB2E4. \uC0C1\uB300\uC758 ${hn[a.type]}${yi(hn[a.type],"\uC774","\uAC00")} \uC18C\uBA78\uD588\uC2B5\uB2C8\uB2E4.`,"good"),this.emit("event",{name:"vanish"})):this.toast(t,"\uC544\uBB34\uAC83\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","bad"),this.checkEnd()}this.changed()}pick(t,e){let n=this.pending[t];if(!n||n.kind!=="pick"||this.status!=="playing"||!Ue.SUSPECT_CHOICES.includes(e))return;let s=this.erases[n.eraseIndex];e===s.pieceType?(this.pending[t]=null,this.penalty(t,s)):(this.pending[t]=null,this.toast(t,`\uC798\uBABB \uC9DA\uC5C8\uC2B5\uB2C8\uB2E4. (${hn[e]}${yi(hn[e],"\uC774","\uAC00")} \uC544\uB2C8\uC5C8\uC2B5\uB2C8\uB2E4)`,"bad")),this.changed()}static penaltyTarget(t,e,n,s){let r=Tc[n],o=null;for(let a=0;a<64;a++){let l=t[a];if(!l||l.color!==e||l.type==="k")continue;let c=Tc[l.type],h=Math.max(Math.abs((a&7)-(s&7)),Math.abs((a>>3)-(s>>3))),u=[Math.abs(c-r),l.type===n?0:1,-c,h,a];(!o||Ac(u,o.key))&&(o={sq:a,key:u})}return o?o.sq:-1}static movePath(t,e){let n=[t.to],s=t.from&7,r=t.from>>3,o=t.to&7,a=t.to>>3;if("rbq".includes(e)||e==="p"&&Math.abs(a-r)===2){let c=Math.sign(o-s),h=Math.sign(a-r);for(let u=s+c,f=r+h;u!==o||f!==a;u+=c,f+=h)n.push(f*8+u)}if(t.castle){let c=t.castle==="k"?7:0;for(let h=Math.min(s,c)+1;h<Math.max(s,c);h++)n.push(r*8+h)}return[...new Set(n)]}findRewind(t){let e=(t.moveIndex??this.history.length+this.historyShift)-this.historyShift;for(let n=Math.max(0,e);n<this.history.length;n++){let s=this.history[n];if(s.by===t.by&&i.movePath(s.m,s.type).includes(t.square))return n}return-1}rewindTo(t){let e=this.history[t],n=this.history.length-t;this.state=qi(e.state),this.lastMovedId={...e.lastMovedId},this.lastMoveVisible=e.lastMoveVisible,this.history.length=t;for(let s of this.erases)s.t>e.t&&(s.resolved=!0);for(let s of["w","b"]){let r=this.pending[s];r&&this.erases[r.eraseIndex]?.t>e.t&&(this.pending[s]=null)}return this.emit("event",{name:"rewind",undone:n}),n}static reviveSquare(t,e){let n=We(e.victim),s=Xi(t,n),r=[];for(let o=0;o<64;o++){if(t.board[o]||e.pieceType==="p"&&(!(o>>3)||o>>3===7))continue;let a=Math.abs((o&7)-(e.square&7)),l=Math.abs((o>>3)-(e.square>>3));r.push([Math.max(a,l),a+l,o])}r.sort((o,a)=>Ac(o,a)?-1:Ac(a,o)?1:0);for(let[,,o]of r){let a=qi(t);if(a.board[o]={id:e.pieceId,type:e.pieceType,color:e.victim,shield:!1},s||!Xi(a,n))return o}return-1}revive(t){let e=i.reviveSquare(this.state,t);if(e<0)return-1;let n=qi(this.state);return n.board[e]={id:t.pieceId,type:t.pieceType,color:t.victim,shield:!1},this.state=n,this.emit("event",{name:"revive",at:e,pieceType:t.pieceType,color:t.victim}),e}penalty(t,e){let n=We(t),s=++this.caught[n],r=Ue.FOUL_LIMIT,o=hn[e.pieceType],a=this.findRewind(e),l=a>=0?this.rewindTo(a):0,c=l?` \uC2DC\uAC04\uC744 \uB418\uAC10\uC544 ${l}\uC218\uB97C \uBB34\uB974\uACE0,`:"",h=i.penaltyTarget(this.state.board,n,e.pieceType,e.square);if(h<0){this.revive(e),this.toast(t,"\uBC18\uCE59 \uC801\uBC1C! \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC544 \uC2B9\uB9AC\uD569\uB2C8\uB2E4.","good"),this.toast(n,"\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uB9D0\uC774 \uD0B9\uBFD0\uC774\uB77C \uD328\uBC30\uD569\uB2C8\uB2E4.","bad"),this.end({result:"bare",winner:t});return}let u=this.state.board[h],f=hn[u.type];this.emit("event",{name:"penalty",at:h,pieceType:u.type,by:t}),this.state=la(this.state,h);let d=this.revive(e)>=0;if(this.toast(t,`\uBC18\uCE59 \uC801\uBC1C! (\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${c}${d?` \uC9C0\uC6CC\uC84C\uB358 ${o}${yi(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uC0C1\uB300 ${f}${yi(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"good"),this.toast(n,`\uBC18\uCE59\uC774 \uC801\uBC1C\uB410\uC2B5\uB2C8\uB2E4. (\uBC18\uCE59 \uB9C8\uCEE4 ${s}/${r})${c}${d?` \uC0C1\uB300 ${o}${yi(o,"\uC774","\uAC00")} \uBD80\uD65C\uD558\uACE0,`:""} \uB0B4 ${wc(h)} ${f}${yi(f,"\uC774","\uAC00")} \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC2B5\uB2C8\uB2E4.`,"bad"),s>=r){this.end({result:"fouls",winner:t});return}this.checkEnd()}resign(t){this.status==="playing"&&(this.end({result:"resign",winner:We(t)}),this.changed())}rematch(t){if(this.status==="over"){if(this.rematchVotes[t]=!0,this.rematchVotes.w&&this.rematchVotes.b){let{w:e,b:n}=this.players;this.players={w:n,b:e},this.start();return}this.toast(We(t),"\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uC6D0\uD569\uB2C8\uB2E4.","info"),this.changed()}}tick(){if(this.status==="playing"){let t=this.now();for(let e of["w","b"]){let n=this.pending[e];n&&n.kind==="pick"&&t>n.deadline&&(this.pending[e]=null,this.toast(e,"\uC2DC\uAC04 \uCD08\uACFC. \uAE30\uD68C\uB97C \uB193\uCCE4\uC2B5\uB2C8\uB2E4.","bad"),this.changed());let s=this.players[e];s&&!s.connected&&s.disconnectedAt!=null&&t-s.disconnectedAt>Ue.RECONNECT_GRACE_MS&&(this.end({result:"disconnect",winner:We(e)}),this.changed())}}}checkEnd(){let t=Tf(this.state);t.over&&this.end({result:t.result,winner:t.winner})}end(t){this.status==="playing"&&(this.status="over",this.result=t,this.pending={w:null,b:null},this.rematchVotes={w:!1,b:!1},this.emit("event",{name:"end"}))}findPieceSquare(t){return t==null?-1:this.state.board.findIndex(e=>e&&e.id===t)}toast(t,e,n="info"){this.emit("toast",{text:e,kind:n},t)}emit(t,e,n=null){for(let s of["w","b"]){if(n&&s!==n)continue;let r=this.players[s];r&&r.send&&r.send({type:t,...e})}}changed(){this.onChange(this)}view(t){let e=this.state,n=[];for(let o=0;o<64;o++){let a=e.board[o];a&&n.push({sq:o,id:a.id,type:a.type,color:a.color,shield:!!a.shield})}let s=this.pending[t],r=this.now();return{type:"state",code:this.code,round:this.round,you:t,status:this.status,names:{w:this.players.w?.name??null,b:this.players.b?.name??null},connected:{w:!!this.players.w?.connected,b:!!this.players.b?.connected},turn:e.turn,pieces:n,lastMove:this.lastMoveVisible,castling:{w:{...e.castling.w},b:{...e.castling.b}},ep:e.ep,check:this.status==="playing"?Xi(e,e.turn):!1,caught:{...this.caught},eraseReadyAt:this.lastEraseAt[t]+Ue.ERASE_COOLDOWN_MS,serverNow:r,pending:s&&s.kind==="pick"?{kind:"pick",deadline:s.deadline,choices:Ue.SUSPECT_CHOICES}:null,result:this.result,rematchVotes:{...this.rematchVotes}}}};var Af={p:1,n:3,b:3,r:5,q:9,k:0},Ar=(i,t)=>i+Math.random()*(t-i),ca=i=>i[Math.floor(Math.random()*i.length)],Rr=class{constructor(){this.kind="bot",this.online=!0,this.timer=null}start(t){this.game=new vi("BOT",{onChange:e=>this.broadcast(e)}),this.game.addPlayer(t,"me"),this.game.players.w.send=e=>this.hub.emit(e.type,e),this.hub.emit("joined",{code:"BOT",color:"w"}),this.game.addPlayer("\uC5F0\uC2B5 \uBD07","bot"),this.bot={nextErase:performance.now()+Ar(9e3,16e3),plan:null,seenErases:0},this.timer=setInterval(()=>this.tick(),200)}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}get botColor(){return this.game.colorOfToken("bot")}get myColor(){return this.game.colorOfToken("me")}send(t){let e=this.myColor;e&&(this.game.handle(e,t),t.type==="rematch"&&this.game.status==="over"&&setTimeout(()=>this.game.handle(this.botColor,{type:"rematch"}),900),this.game.status==="playing"&&this.game.round>(this.lastRound||0)&&(this.lastRound=this.game.round,this.game.players[this.myColor].send=n=>this.hub.emit(n.type,n),this.game.players[this.botColor].send=null,this.bot.nextErase=performance.now()+Ar(9e3,16e3),this.broadcast(this.game)))}tick(){let t=this.game,e=this.botColor,n=performance.now();if(t.tick(),t.status!=="playing")return;let s=t.pending[e];if(s?.kind==="pick"){t.handle(e,{type:"pick",pieceType:Math.random()<.65?t.erases[s.eraseIndex].pieceType:ca(Ue.SUSPECT_CHOICES)});return}let r=t.erases.filter(o=>o.victim===e).length;if(r>this.bot.seenErases&&(this.bot.seenErases=r,Math.random()<.55&&(this.bot.suspectAt=n+Ar(2500,8e3))),this.bot.suspectAt&&n>this.bot.suspectAt){this.bot.suspectAt=0,t.handle(e,{type:"suspect"});return}if(n>this.bot.nextErase){this.bot.nextErase=n+Ar(16e3,32e3);let o=t.state.board.map((l,c)=>l&&l.color!==e&&l.type!=="k"?c:-1).filter(l=>l>=0),a=o.filter(l=>t.state.board[l].type==="p");o.length&&t.handle(e,{type:"erase",square:a.length&&Math.random()<.6?ca(a):ca(o)});return}if(t.state.turn===e&&(this.bot.plan||(this.bot.plan=n+Ar(700,1600)),n>this.bot.plan)){this.bot.plan=null;let o=ks(t.state);if(!o.length)return;let a=o.filter(c=>c.capture).sort((c,h)=>(Af[t.state.board[h.to]?.type]||1)-(Af[t.state.board[c.to]?.type]||1)),l=a.length&&Math.random()<.8?a[0]:ca(o);t.handle(e,{type:"move",from:l.from,to:l.to,promotion:l.promotion?"q":null})}}leave(){clearInterval(this.timer),this.timer=null}close(){this.leave()}};var Rf="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Cf="faith-chess-room-token",Pf=i=>"fc-"+i.toLowerCase(),vy=i=>new TextEncoder().encode(JSON.stringify(i)).length;function My(){try{let i=localStorage.getItem(Cf);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(Cf,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function by(i){let{type:t,pieces:e,...n}=i;return{...n,pieces:e.map(s=>`${s.id}.${s.sq}.${s.type}${s.color}${s.shield?1:0}`).join(" ")}}function Sy(i){let t=String(i.pieces||"").split(" ").filter(Boolean).map(e=>{let[n,s,r]=e.split(".");return{id:+n,sq:+s,type:r[0],color:r[1],shield:r[2]==="1"}});return{...i,type:"state",pieces:t,eraseReadyAt:i.eraseReadyAt??-1/0}}var ha=class i{static async open(){if(!window.claude?.use)return null;let t=null;try{t=await window.claude.use("room")}catch{t=null}return t?new i(t):null}constructor(t){this.kind="room",this.room=t,this.connected=t.connected(),this.role=null,this.onLobby=null,t.onConnection(e=>{this.connected=e,this.hub?.emit(e?"open":"close")},()=>{this.connected=!1}),t.onPeers(()=>this.onLobby?.(this.openRooms()),()=>{})}get online(){return this.role==="guest"?this.connected&&this.hostOnline:this.connected}openRooms(){return this.room.peers().filter(t=>!t.sameTab&&typeof t.presence?.open=="string").map(t=>({code:t.presence.open,name:String(t.presence.name||"?"),mine:t.isMe}))}async create(t){this.endSession();let e="";for(let s=0;s<4;s++)e+=Rf[Math.floor(Math.random()*Rf.length)];let n=await this.room.join(Pf(e));Object.assign(this,{role:"host",code:e,name:Yi(t)||"\uD638\uC2A4\uD2B8",r:n,q:[],qs:0,st:null,lastAct:0,guestPeer:null,guestTk:null}),this.game=new vi(e,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.unsub=n.onPeers(s=>this.hostPeers(s),()=>{}),this.tickT=setInterval(()=>this.game?.tick(),250),this.room.presence({open:e,name:this.name}).catch(()=>{}),this.hub.emit("joined",{code:e,color:"w"}),this.broadcast(this.game),this.pushHost()}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostOut(t){t.type==="state"?this.st=t:(this.q.push({s:++this.qs,t:Date.now(),m:t}),this.q.length>6&&this.q.shift()),this.schedulePush()}schedulePush(){this.pushT||(this.pushT=setTimeout(()=>{this.pushT=null,this.pushHost()},30))}pushHost(){if(!this.r||this.role!=="host")return;let t={r:"host",code:this.code,name:this.name,gtk:this.guestTk,ack:this.lastAct,hn:Date.now(),st:this.st?by(this.st):null,q:this.q};for(;vy(t)>3900&&t.q.length;)t.q=t.q.slice(1);this.r.presence(t).catch(()=>{})}hostPeers(t){if(this.role!=="host"||!this.game)return;let e=t.peers.filter(s=>!s.sameTab&&s.presence?.r==="guest"&&s.presence.code===this.code),n=this.guestPeer?e.find(s=>s.peer===this.guestPeer):null;if(!n){let s=this.guestTk?e.find(r=>r.presence.tk===this.guestTk):e[0];if(s){let r=!this.guestTk;this.guestPeer=s.peer,this.guestTk=String(s.presence.tk||s.peer),this.lastAct=0,r&&(this.game.addPlayer(s.presence.name,this.guestTk),this.room.presence({open:null}).catch(()=>{}));let o=this.game.colorOfToken(this.guestTk);this.game.players[o].send=a=>this.hostOut(a),this.game.setConnected(o,!0),n=s}else if(this.guestPeer){this.guestPeer=null;let r=this.game.colorOfToken(this.guestTk);r&&this.game.setConnected(r,!1)}}if(n){let s=this.game.colorOfToken(this.guestTk),r=Array.isArray(n.presence.acts)?n.presence.acts:[];for(let o of r)o&&o.s>this.lastAct&&(this.lastAct=o.s,this.game.handle(s,o.m))}this.schedulePush()}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await this.room.join(Pf(t));Object.assign(this,{role:"guest",code:t,name:Yi(e)||"\uC190\uB2D8",r:n,tk:My(),acts:[],as:0,lastQ:null,lastHn:0,hostSeen:!1,hostOnline:!1,joinedOk:!1}),n.presence({r:"guest",code:t,name:this.name,tk:this.tk,acts:[]}).catch(()=>{}),this.unsub=n.onPeers(s=>this.guestPeers(s),()=>{}),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{text:"\uADF8 \uCF54\uB4DC\uC758 \uBC29\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."}),this.endSession())},8e3)}guestPeers(t){if(this.role!=="guest")return;let e=t.peers.find(r=>!r.sameTab&&r.presence?.r==="host"&&r.presence.code===this.code);if(!e){this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close"));return}let n=e.presence;if(this.hostSeen=!0,this.hostOnline||(this.hostOnline=!0,this.hub.emit("open")),n.gtk&&n.gtk!==this.tk){this.joinedOk||(this.hub.emit("error",{text:"\uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC785\uB2C8\uB2E4."}),this.endSession());return}if(!n.gtk)return;this.joinedOk||(this.joinedOk=!0,clearTimeout(this.joinTimer),this.hub.emit("joined",{code:this.code,color:n.st?.you||"b"}));let s=Array.isArray(n.q)?n.q:[];if(this.lastQ===null){this.lastQ=0;for(let r of s)n.hn-r.t>3e3&&(this.lastQ=Math.max(this.lastQ,r.s))}for(let r of s)r.s>this.lastQ&&(this.lastQ=r.s,r.m?.type&&this.hub.emit(r.m.type,r.m));if(n.st&&n.hn!==this.lastHn&&(this.lastHn=n.hn,this.hub.emit("state",Sy(n.st))),typeof n.ack=="number"){let r=this.acts.length;this.acts=this.acts.filter(o=>o.s>n.ack),this.acts.length!==r&&this.pushGuest()}}pushGuest(){this.r?.presence({acts:this.acts}).catch(()=>{})}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&(this.acts.push({s:++this.as,m:t}),this.acts.length>8&&this.acts.shift(),this.pushGuest())}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"}),this.role==="host"&&this.pushHost();let t=this.r;this.detach(),setTimeout(()=>t?.leave().catch(()=>{}),600)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.pushT),this.tickT=this.joinTimer=this.pushT=null,this.unsub?.(),this.unsub=null,this.role==="host"&&this.room.presence({open:null}).catch(()=>{}),this.r=null,this.game=null,this.role=null,this.hostOnline=!1}endSession(){let t=this.r;this.detach(),t?.leave().catch(()=>{})}};var If="0123456789",Ey=1600,Lf="faith-chess-peer-token",Df=i=>"faith-chess-"+i.toLowerCase();function wy(){try{let i=localStorage.getItem(Lf);return i||(i=Math.random().toString(36).slice(2,12),localStorage.setItem(Lf,i)),i}catch{return Math.random().toString(36).slice(2,12)}}function Uf(){let i={debug:0},t=new URLSearchParams(location.search).get("peer");if(t){let[e,n]=t.split(":");Object.assign(i,{host:e,port:+n||9e3,path:"/",secure:!1,config:{iceServers:[]}})}return i}var Nf=i=>new Promise((t,e)=>{let n=i?new window.Peer(i,Uf()):new window.Peer(Uf()),s=o=>{n.off("open",r);try{n.destroy()}catch{}e(o)},r=()=>{n.off("error",s),t(n)};n.once("open",r),n.once("error",s)}),Cr=class{static available(){return typeof window.Peer=="function"}constructor(){this.kind="peer",this.role=null,this.hostOnline=!1}get online(){return this.role==="guest"?this.hostOnline:this.role==="host"?!!this.peer&&(!this.peer.disconnected||!!this.conn?.open):!0}async create(t){this.endSession();let e=null,n="";for(let s=0;s<5&&!e;s++){n="";for(let r=0;r<4;r++)n+=If[Math.floor(Math.random()*If.length)];try{e=await Nf(Df(n))}catch(r){if(r?.type!=="unavailable-id")throw r}}if(!e)throw new Error("no free code");Object.assign(this,{role:"host",code:n,name:Yi(t)||"\uD638\uC2A4\uD2B8",peer:e,conn:null,guestTk:null}),this.game=new vi(n,{onChange:s=>this.broadcast(s)}),this.game.addPlayer(this.name,"host"),this.game.players.w.send=s=>this.hub.emit(s.type,s),this.tickT=setInterval(()=>this.game?.tick(),250),e.on("connection",s=>this.hostConn(s)),e.on("disconnected",()=>{this.hub?.emit("close"),this.retryT=setTimeout(()=>this.reconnectBroker(),1e3)}),e.on("open",()=>this.hub?.emit("open")),e.on("error",s=>console.warn("[peer]",s?.type,s)),this.hub.emit("joined",{code:n,color:"w"}),this.broadcast(this.game)}reconnectBroker(){if(!(this.role!=="host"||!this.peer||this.peer.destroyed||!this.peer.disconnected)){try{this.peer.reconnect()}catch{}this.retryT=setTimeout(()=>this.reconnectBroker(),3e3)}}broadcast(t){for(let e of["w","b"]){let n=t.players[e];n?.send&&n.send(t.view(e))}}hostConn(t){t.on("data",e=>{if(!(this.role!=="host"||!this.game||!e||typeof e!="object")){if(e.type==="hello"){let n=String(e.tk||t.peer).slice(0,40);if(this.guestTk?n!==this.guestTk:this.ringConn&&this.ringConn!==t){t.send({type:"error",code:"busy",text:"\uD1B5\uD654 \uC911\uC785\uB2C8\uB2E4. \uC774\uBBF8 \uB450 \uBA85\uC774 \uB300\uAD6D \uC911\uC778 \uBC29\uC774\uC5D0\uC694."}),setTimeout(()=>t.close(),300);return}if(this.guestTk){this.attachGuest(t,n);return}if(this.ringConn===t)return;this.ringConn=t,this.hub.emit("ring",{}),this.ringT=setTimeout(()=>{this.ringConn===t&&(this.ringConn=null,!(this.role!=="host"||!this.game||!t.open)&&(this.guestTk=n,this.game.addPlayer(e.name,n),this.attachGuest(t,n)))},Ey);return}t===this.conn&&e.type==="act"&&e.m&&typeof e.m=="object"&&this.game.handle(this.game.colorOfToken(this.guestTk),e.m)}}),t.on("close",()=>{if(t===this.ringConn){this.ringConn=null,this.hub?.emit("ringstop",{});return}if(t!==this.conn||!this.game)return;this.conn=null;let e=this.game.colorOfToken(this.guestTk);e&&this.game.setConnected(e,!1)}),t.on("error",()=>{})}attachGuest(t,e){if(this.conn&&this.conn!==t)try{this.conn.close()}catch{}this.conn=t;let n=this.game.colorOfToken(e);t.send({type:"joined",code:this.code,color:n}),this.game.players[n].send=s=>{this.conn?.open&&this.conn.send(s)},this.game.setConnected(n,!0),this.broadcast(this.game)}async join(t,e){this.endSession(),t=String(t).toUpperCase();let n=await Nf(null);Object.assign(this,{role:"guest",code:t,name:Yi(e)||"\uC190\uB2D8",peer:n,tk:wy(),joinedOk:!1,conn:null,hostOnline:!1}),n.on("error",s=>{s?.type==="peer-unavailable"&&this.role==="guest"&&(this.joinedOk?this.scheduleRedial():(this.hub.emit("error",{code:"nonumber",text:"\uC9C0\uAE08 \uAC70\uC2E0 \uBC88\uD638\uB294 \uC5C6\uB294 \uBC88\uD638\uC785\uB2C8\uB2E4."}),this.endSession()))}),n.on("disconnected",()=>{this.role==="guest"&&setTimeout(()=>{try{this.peer?.disconnected&&!this.peer.destroyed&&this.peer.reconnect()}catch{}},1e3)}),this.dial(),this.joinTimer=setTimeout(()=>{!this.joinedOk&&this.role==="guest"&&(this.hub.emit("error",{code:"noanswer",text:"\uC0C1\uB300\uAC00 \uC804\uD654\uB97C \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694."}),this.endSession())},2e4)}dial(){if(this.role!=="guest"||!this.peer||this.peer.destroyed)return;let t=this.peer.connect(Df(this.code),{reliable:!0,serialization:"json"});this.conn=t,t.on("open",()=>{t===this.conn&&(this.hostOnline=!0,this.hub.emit("open"),t.send({type:"hello",name:this.name,tk:this.tk}))}),t.on("data",e=>{if(!(t!==this.conn||!e?.type)){if(e.type==="joined"&&(this.joinedOk=!0,clearTimeout(this.joinTimer)),e.type==="error"&&!this.joinedOk){this.hub.emit("error",e),this.endSession();return}this.hub.emit(e.type,e)}}),t.on("close",()=>{t===this.conn&&(this.hostOnline&&(this.hostOnline=!1,this.hub.emit("close")),this.scheduleRedial())}),t.on("error",()=>{})}scheduleRedial(){this.role!=="guest"||!this.joinedOk||this.redialT||(this.redialT=setTimeout(()=>{this.redialT=null,this.role==="guest"&&!this.hostOnline&&this.dial()},2e3))}send(t){if(this.role==="host"&&this.game){this.game.handle(this.game.colorOfToken("host"),t);return}this.role==="guest"&&this.conn?.open&&this.conn.send({type:"act",m:t})}leave(){this.role==="host"&&this.game?.status==="playing"&&this.game.resign(this.game.colorOfToken("host")),this.role==="guest"&&this.send({type:"resign"});let t=this.detach();setTimeout(()=>{try{t?.destroy()}catch{}},500)}close(){this.endSession()}detach(){clearInterval(this.tickT),clearTimeout(this.joinTimer),clearTimeout(this.retryT),clearTimeout(this.redialT),clearTimeout(this.ringT),this.tickT=this.joinTimer=this.retryT=this.redialT=this.ringT=null,this.ringConn=null;let t=this.peer;return this.peer=null,this.conn=null,this.game=null,this.role=null,this.hostOnline=!1,t}endSession(){let t=this.detach();try{t?.destroy()}catch{}}};var Mi=(i,t={})=>new gn({color:i,flatShading:!0,...t}),Pr=(i,t={})=>new sn({color:i,flatShading:!0,shininess:90,specular:11575424,...t});function qe(i,t,e,n=0,s=0,r=0){let o=new Ht(t,e);return o.position.set(n,s,r),i.add(o),o}var Ne={HOLE_R:.8,HOLE_SIZE:.165,STOP:-32,FIRST:28,STEP:30,PLATE:1.1,WHEEL:1.17},zs=i=>Ne.FIRST+Ne.STEP*i,ua=i=>zs(i)-Ne.STOP,fa=i=>(i+1)%10,Of=i=>(Number(i)+9)%10,Ff=i=>(i+540)%360-180,bi=Math.PI/180,Bf=i=>i*i*(3-2*i),Ty=11740714,Ay=8262936,da=14264378;var Ry="#2a1414";function kf(i,t,e=0,n=0,s=0){let r=new Ts;for(let o=0;o<=t;o++){let a=s+o/t*Math.PI*2,l=e+Math.cos(a)*i,c=n+Math.sin(a)*i;o===0?r.moveTo(l,c):r.lineTo(l,c)}return r}var pa=class{constructor(){this.scene=new Un,this.camera=new Ce(30,1,.1,60),this.clear=new Tt,this.bg=new Tt(2364460),this.ray=new Ps,this.plane=new Pn,this.phi=0,this.mode="idle",this.k=-1,this.hold=0,this.queue=[],this.pendingDigit=null,this.drag=null,this.stopHit=!1,this.lastStep=0,this.lift=0,this.liftTo=0,this.ringT=0,this.t=0,this.onDigit=()=>{},this.onSound=()=>{},this.cardKey="",this.build()}build(){let t=this.scene;t.add(new ko(16773340,3153962,.75));let e=new rn(16777215,1.15);e.position.set(-3,7,5),t.add(e);let n=new rn(10475775,.35);n.position.set(4,3,-4),t.add(n),qe(t,new Me(14,14,.2,12),Mi(3809840),0,-.1,0),qe(t,new Me(3.1,3.2,.06,10),Mi(6965806),0,.03,.15);let s=new re;t.add(s),this.root=s;let r=new pn;[[-1.7,0],[2.15,0],[2.2,.28],[-.05,1.95],[-1.35,1.95],[-1.75,1.3]].forEach(([v,A],w)=>w?r.lineTo(v,A):r.moveTo(v,A));let o=new ei(r,{depth:3.3,bevelEnabled:!0,bevelThickness:.16,bevelSize:.16,bevelSegments:1,curveSegments:1});o.rotateY(-Math.PI/2),o.translate(1.65,0,0),this.bodyMat=Mi(Ty),qe(s,o,this.bodyMat);for(let v of[-1.4,1.4])for(let A of[-1.3,1.8])qe(s,new Me(.16,.2,.08,6),Mi(1706510),v,.02,A);let a=new j(2.2,.28),l=new j(-.05,1.95),c=a.clone().add(l).multiplyScalar(.5),h=l.clone().sub(a).normalize(),u=new C(0,h.y,h.x),f=new C(0,-h.x,h.y),d=new re;d.position.set(0,c.y,c.x).addScaledVector(f,.17),d.quaternion.setFromRotationMatrix(new xe().makeBasis(new C(1,0,0),u,f)),s.add(d),this.dial=d,this.dialN=f,this.dialUp=u;let g=this.plateTexture();qe(d,new fr(Ne.PLATE,20),new gn({map:g}),0,0,.005),qe(d,new zn(Ne.WHEEL+.04,.06,4,20),Pr(da),0,0,.02);let x=new pn;for(let v=0;v<=24;v++){let A=v/24*Math.PI*2,w=Math.cos(A)*Ne.WHEEL,R=Math.sin(A)*Ne.WHEEL;v?x.lineTo(w,R):x.moveTo(w,R)}x.holes.push(kf(.5,12));for(let v=0;v<10;v++)x.holes.push(kf(Ne.HOLE_SIZE,8,Math.cos(zs(v)*bi)*Ne.HOLE_R,Math.sin(zs(v)*bi)*Ne.HOLE_R,Math.PI/8));let m=new ei(x,{depth:.07,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:1,curveSegments:1});this.wheel=qe(d,m,Pr(1972252,{shininess:30,specular:3813944}),0,0,.03),this.cardCanvas=document.createElement("canvas"),this.cardCanvas.width=this.cardCanvas.height=128,this.cardTex=new mi(this.cardCanvas),this.cardTex.magFilter=Ee,this.cardTex.minFilter=ln,this.cardTex.colorSpace=ge,qe(d,new fr(.47,14),new ve({map:this.cardTex}),0,0,.13),qe(d,new zn(.48,.045,4,14),Pr(da),0,0,.13),this.setCard("\uBBFF\uC74C\uC758 \uCCB4\uC2A4","\xB7\xB7\xB7\xB7");let p=new re;p.rotation.z=Ne.STOP*bi,d.add(p),qe(p,new oe(.5,.11,.09),Pr(da),Ne.HOLE_R+.22,0,.16),qe(p,new oe(.1,.1,.2),Pr(da),Ne.HOLE_R+.44,0,.09);for(let v of[-1.05,1.05])qe(s,new oe(.34,.34,.55),Mi(Ay),v,2.2,-.72),qe(s,new oe(.4,.08,.6),Mi(1706510),v,2.36,-.72);let y=new re;s.add(y),this.handset=y,this.handsetRest=new C(0,2.62,-.72),y.position.copy(this.handsetRest),qe(y,new oe(2.2,.28,.42),this.bodyMat,0,.16,0);for(let v of[-1,1]){let A=qe(y,new oe(.5,.28,.42),this.bodyMat,v*1.12,.06,0);A.rotation.z=v*.32,qe(y,new Me(.44,.36,.34,8),this.bodyMat,v*1.38,-.12,0),qe(y,new Me(.3,.3,.02,8),Mi(1706510),v*1.38,-.3,0)}this.cordMat=Mi(6164500),this.cord=qe(s,new ce,this.cordMat),this.rebuildCord();let _=d.position.clone();this.camera.position.copy(_).addScaledVector(f,9.4).addScaledVector(u,1.5).add(new C(1.5,0,0)),this.lookAt=_.clone().addScaledVector(u,.75).add(new C(-.15,0,0)),this.camera.up.set(0,1,0),this.camera.lookAt(this.lookAt),this.hoverOff=new C(.35,.75,.9),this.hover=new C,this.nearCam=this.camera.position.clone().lerp(this.lookAt,.5).add(new C(0,-.35,0))}plateTexture(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1c0c10",e.fillRect(0,0,256,256),e.fillStyle="#f1e6c8",e.beginPath(),e.arc(128,128,126,0,Math.PI*2),e.fill(),e.strokeStyle="#b89a5a",e.lineWidth=3,e.beginPath(),e.arc(128,128,118,0,Math.PI*2),e.stroke(),e.font="bold 34px Galmuri11, sans-serif",e.textAlign="center",e.textBaseline="middle";let n=Ne.HOLE_R/Ne.PLATE*128;for(let r=0;r<10;r++){let o=zs(r)*bi,a=128+Math.cos(o)*n,l=128-Math.sin(o)*n;e.fillStyle="#c22a2a",e.beginPath(),e.arc(a,l,21,0,Math.PI*2),e.fill(),e.fillStyle="#fff6e0",e.fillText(String(fa(r)),a,l+1)}let s=new mi(t);return s.magFilter=Ee,s.colorSpace=ge,s}setCard(t,e){let n=t+"|"+e;if(n===this.cardKey)return;this.cardKey=n;let s=this.cardCanvas.getContext("2d");s.fillStyle="#fbf4e2",s.fillRect(0,0,128,128),s.fillStyle="#c22a2a",s.fillRect(0,40,128,3),s.fillStyle=Ry,s.textAlign="center",s.textBaseline="middle",s.font="15px Galmuri11, sans-serif",s.fillText(t,64,26),s.font="bold 30px Galmuri11, sans-serif",s.fillText(e,64,74),this.cardTex.needsUpdate=!0}rebuildCord(){let t=new C(-1.38,-.2,0).applyMatrix4(this.handset.matrix.compose(this.handset.position,this.handset.quaternion,this.handset.scale)),e=new C(-1.86,.55,-.4),n=new ur(e,new C(-2.7,.2,.6),new C(-2.6,.5,-.9),t),s=150,r=[],o=new C,a=new C,l=new C;for(let c=0;c<=s;c++){let h=c/s,u=n.getPoint(h);n.getTangent(h,o),a.crossVectors(o,new C(0,1,0)),a.lengthSq()<1e-4&&a.set(1,0,0),a.normalize(),l.crossVectors(a,o).normalize();let f=Math.PI*2*22*h,d=.075*Math.min(1,h*12,(1-h)*12);r.push(u.addScaledVector(a,Math.cos(f)*d).addScaledVector(l,Math.sin(f)*d))}this.cord.geometry.dispose(),this.cord.geometry=new Bo(new hr(r),s*2,.032,4,!1)}local(t,e,n){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let s=new j((e-t.x)/t.w*2-1,-((n-t.y)/t.h*2-1));this.ray.setFromCamera(s,this.camera);let r=this.dialN.clone(),o=new C;this.dial.getWorldPosition(o),this.plane.setFromNormalAndCoplanarPoint(r,o);let a=new C;if(!this.ray.ray.intersectPlane(this.plane,a))return null;let l=this.dial.worldToLocal(a);return{r:Math.hypot(l.x,l.y),a:Math.atan2(l.y,l.x)/bi}}holeAt(t){if(!t||Math.abs(t.r-Ne.HOLE_R)>.32)return-1;for(let e=0;e<10;e++)if(Math.abs(Ff(t.a-zs(e)))<15)return e;return-1}project(t,e,n){this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.scene.updateMatrixWorld();let s=this.dial.localToWorld(new C(Math.cos(n*bi)*e,Math.sin(n*bi)*e,.1)).project(this.camera);return{x:t.x+(s.x+1)/2*t.w,y:t.y+(1-s.y)/2*t.h}}holeScreen(t,e){return this.project(t,Ne.HOLE_R,zs(Of(e)))}get busy(){return this.mode!=="idle"||this.queue.length>0}pointerDown(t,e,n,s){if(this.busy||!this.enabled)return!1;let r=this.local(t,e,n),o=this.holeAt(r);return o<0?!1:(this.mode="drag",this.k=o,this.phi=0,this.stopHit=!1,this.lastStep=0,this.drag={a:r.a,t0:s,moved:0},!0)}pointerMove(t,e,n){if(this.mode!=="drag")return;let s=this.local(t,e,n);if(!s||s.r<.15)return;let r=Ff(s.a-this.drag.a);this.drag.a=s.a,this.drag.moved+=Math.abs(r),this.setPhi(Math.max(0,Math.min(ua(this.k),this.phi-r)))}pointerUp(t){if(this.mode!=="drag")return;let e=this.k,n=t-this.drag.t0<380&&this.drag.moved<10;if(this.drag=null,n){this.mode="idle",this.phi=0,this.queue.push(fa(e));return}this.release(this.phi>=ua(e)-14?fa(e):null)}cancel(){this.mode==="drag"&&(this.drag=null,this.release(null))}autoDial(t){for(let e of String(t))/\d/.test(e)&&this.queue.push(Number(e))}abort(){this.queue=[],(this.mode==="auto"||this.mode==="drag")&&(this.drag=null,this.release(null)),this.pendingDigit=null}setPhi(t){let e=Math.floor(t/Ne.STEP);e>this.lastStep&&this.onSound("tick"),this.lastStep=e,!this.stopHit&&this.k>=0&&t>=ua(this.k)-.5&&(this.stopHit=!0,this.onSound("stop")),this.phi=t}release(t){this.mode="return",this.pendingDigit=t,this.lastStep=Math.floor(this.phi/Ne.STEP)}ring(t=1.6){this.ringT=Math.max(this.ringT,t)}setLift(t){this.liftTo=t}update(t){if(this.t+=t,this.mode==="idle"&&this.queue.length){let l=this.queue.shift();this.mode="auto",this.k=Of(l),this.phi=0,this.stopHit=!1,this.lastStep=0}if(this.mode==="auto"){let l=ua(this.k);this.phi<l?this.setPhi(Math.min(l,this.phi+560*t)):(this.hold+=t)>.12&&(this.hold=0,this.release(fa(this.k)))}else if(this.mode==="return"){let l=Math.max(0,this.phi-330*t),c=Math.ceil(l/Ne.STEP);if(this.pendingDigit!==null&&c<this.lastStep&&this.onSound("pulse"),this.lastStep=Math.min(this.lastStep,c),this.phi=l,l<=0){this.mode="idle",this.k=-1;let h=this.pendingDigit;this.pendingDigit=null,h!==null&&this.onDigit(h)}}this.wheel.rotation.z=-this.phi*bi,this.ringT=Math.max(0,this.ringT-t);let n=(this.ringT>0?Math.min(1,this.ringT*4):0)*(Math.floor(this.t*2.5)%2===0?1:.15);this.root.rotation.z=Math.sin(this.t*2*Math.PI*23)*.022*n,this.root.position.x=Math.sin(this.t*2*Math.PI*17)*.025*n;let s=this.lift;this.lift+=(this.liftTo-this.lift)*Math.min(1,t*7),Math.abs(this.lift-this.liftTo)<.002&&(this.lift=this.liftTo);let r=this.handset,o=Bf(Math.min(1,this.lift/.3)),a=Bf(Math.max(0,Math.min(1,(this.lift-.3)/.7)));this.hover.copy(this.handsetRest).add(this.hoverOff),r.position.copy(this.handsetRest).lerp(this.hover,o).lerp(this.nearCam,a),r.position.y+=Math.abs(Math.sin(this.t*2*Math.PI*11))*.07*n+Math.sin(this.t*2.1)*.05*o*(1-a),r.rotation.set(-.55*o-.5*a,.2*o-.2*a,.22*o-.22*a+Math.sin(this.t*2*Math.PI*23)*.03*n),(s!==this.lift||n>0)&&this.rebuildCord()}render(t,e,n){let s=n.w/270,r=n.h/480,o=Math.round(e.x*s),a=Math.round((e.x+e.w)*s)-o,l=Math.round(e.y*r),c=Math.round((e.y+e.h)*r)-l,h=n.h-l-c,u=t.autoClear;t.getClearColor(this.clear);let f=t.getClearAlpha();t.autoClear=!1,t.setScissorTest(!0),t.setViewport(o,h,a,c),t.setScissor(o,h,a,c),t.setClearColor(this.bg,1),t.clear(!0,!0,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,n.w,n.h),t.setClearColor(this.clear,f),t.autoClear=u}};var Te=null;function ma(){if(!Te)try{Te=new(window.AudioContext||window.webkitAudioContext)}catch{return}Te.state==="suspended"&&Te.resume()}function ne(i,t,{type:e="square",gain:n=.08,slide:s=0,delay:r=0}={}){if(!Te)return;let o=Te.currentTime+r,a=Te.createOscillator(),l=Te.createGain();a.type=e,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),o+t),l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(Te.destination),a.start(o),a.stop(o+t+.02)}function Hn(i,t=.1,e=0){if(!Te)return;let n=Te.currentTime+e,s=Te.createBuffer(1,Te.sampleRate*i,Te.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*(1-c/r.length);let o=Te.createBufferSource();o.buffer=s;let a=Te.createGain();a.gain.value=t;let l=Te.createBiquadFilter();l.type="lowpass",l.frequency.value=900,o.connect(l).connect(a).connect(Te.destination),o.start(n)}function Hs(i,t,{type:e="sine",gain:n=.03,delay:s=0}={}){if(!Te)return;let r=Te.currentTime+s,o=Te.createOscillator(),a=Te.createGain();o.type=e,o.frequency.setValueAtTime(i,r),a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(n,r+.015),a.gain.setValueAtTime(n,r+t-.02),a.gain.linearRampToValueAtTime(1e-4,r+t),o.connect(a).connect(Te.destination),o.start(r),o.stop(r+t+.02)}var jt={dialTick(){Hn(.012,.08),ne(2600,.012,{type:"square",gain:.015})},dialPulse(){Hn(.02,.16),ne(820,.02,{type:"square",gain:.03})},dialStop(){Hn(.04,.2),ne(170,.06,{type:"triangle",gain:.08})},offHook(){Hn(.05,.22),ne(240,.05,{type:"triangle",gain:.07}),Hs(350,.6,{gain:.012,delay:.08}),Hs(440,.6,{gain:.012,delay:.08})},hangUp(){Hn(.06,.28),ne(130,.09,{type:"triangle",gain:.1})},ringback(){Hs(440,1,{gain:.025}),Hs(480,1,{gain:.025})},busy(){for(let i=0;i<4;i++)Hs(480,.5,{gain:.025,delay:i}),Hs(620,.5,{gain:.025,delay:i})},ring(){for(let i=0;i<2;i++)for(let t=0;t<13;t++){let e=i*.8+t*.045;ne(t%2?1320:1580,.09,{type:"triangle",gain:.035,delay:e}),ne(t%2?2640:3160,.04,{type:"sine",gain:.012,delay:e})}},pickUp(){Hn(.05,.25),ne(300,.06,{type:"triangle",gain:.08}),ne(660,.08,{type:"sine",gain:.03,delay:.08})},move(){Hn(.06,.18),ne(180,.05,{type:"triangle",gain:.1})},capture(){ne(220,.15,{type:"sawtooth",gain:.025,slide:160}),Hn(.16,.45,.17),ne(70,.28,{type:"sine",gain:.22,slide:-40,delay:.17}),ne(140,.12,{type:"square",gain:.07,slide:-90,delay:.17}),ne(1400,.5,{type:"triangle",gain:.03,slide:-1100,delay:.24})},castle(){jt.move(),setTimeout(()=>jt.move(),90)},check(){ne(880,.08,{gain:.05}),ne(880,.08,{gain:.05,delay:.12})},select(){ne(660,.03,{type:"triangle",gain:.04})},bad(){ne(200,.25,{type:"sawtooth",gain:.06,slide:-120})},late(){ne(300,.2,{type:"triangle",gain:.06,slide:-100})},halt(){Hn(.07,.3),ne(150,.22,{type:"square",gain:.08,slide:-50}),ne(300,.12,{type:"sawtooth",gain:.04,delay:.02})},revive(){for(let i=0;i<14;i++)ne(1400-i*55+i%2*180,.03,{type:"square",gain:.025,delay:i*.07});[880,1175,1568].forEach((i,t)=>ne(i,.12,{type:"triangle",gain:.05,delay:1.1+t*.06}))},rewind(){for(let i=0;i<22;i++)ne(900+i%3*260-i*18,.035,{type:"sawtooth",gain:.022,delay:i*.055})},vanish(){ne(400,.3,{type:"sine",gain:.06,slide:-350})},shatter(){Hn(.18,.35),ne(160,.2,{type:"sawtooth",gain:.07,slide:-110});for(let i=0;i<7;i++)ne(1400+Math.random()*2200,.05,{type:"triangle",gain:.025,delay:.04+i*.035+Math.random()*.02})},start(){ne(392,.1,{gain:.06}),ne(523,.1,{gain:.06,delay:.1}),ne(659,.25,{gain:.06,delay:.2})},win(){[523,659,784,1046].forEach((i,t)=>ne(i,.2,{gain:.06,delay:t*.12}))},lose(){[392,349,311,261].forEach((i,t)=>ne(i,.25,{type:"triangle",gain:.06,delay:t*.15}))},ui(){ne(520,.03,{type:"triangle",gain:.04})},secret(){ne(90,.06,{type:"sine",gain:.03})}};var ga=class{constructor(t,e){this.out=t,this.ctx=t.getContext("2d",{alpha:!1}),this.layers=e,this.tmp=new Map}resize(t,e,n=window.devicePixelRatio||1){let s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n));this.out.width!==s&&(this.out.width=s),this.out.height!==r&&(this.out.height=r)}draw(){let{ctx:t,out:e}=this;t.fillStyle="#000",t.fillRect(0,0,e.width,e.height);for(let n of this.layers){let s=n.width,r=n.height;if(!s||!r)continue;let o=e.width/s,a=e.height/r,l=f=>Math.abs(f-Math.round(f))<1e-6;if(l(o)&&l(a)){t.imageSmoothingEnabled=!1,t.drawImage(n,0,0,e.width,e.height);continue}let c=Math.max(1,Math.ceil(Math.max(o,a)-1e-6)),h=this.tmp.get(n);h||(h=document.createElement("canvas"),this.tmp.set(n,h)),(h.width!==s*c||h.height!==r*c)&&(h.width=s*c,h.height=r*c);let u=h.getContext("2d");u.imageSmoothingEnabled=!1,u.clearRect(0,0,h.width,h.height),u.drawImage(n,0,0,h.width,h.height),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="low",t.drawImage(h,0,0,e.width,e.height)}}get integer(){let t=this.out.width/(this.layers[1]?.width||this.layers[0].width);return Math.abs(t-Math.round(t))<1e-6}};var Cy="v0.4";function Hf(i,t,{online:e=null,settings:n=!0,tagline:s="\uAC19\uC740 WiFi \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694"}={}){let r=i.pal,o=i.ctx.createLinearGradient(0,0,0,160);o.addColorStop(0,"rgba(0,0,0,0.5)"),o.addColorStop(1,"rgba(0,0,0,0)"),i.ctx.fillStyle=o,i.ctx.fillRect(0,0,At,160),i.frame(),i.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",At/2,52,{scale:3,font:14}),i.letter("FAITH CHESS",At/2,112,{scale:1,font:9,spacing:3});let a=408;i.rect(14,a,At-28,62,"rgba(0,0,0,0.72)"),i.text(s,At/2,a+6,{font:9,align:"center"}),Math.floor(t/500)%2===0&&i.text("\uD654\uBA74\uC744 \uB204\uB974\uBA74 \uC2DC\uC791\uD569\uB2C8\uB2E4",At/2,a+20,{font:11,color:r.accentHi,align:"center"});let l=438;i.hLine(30,l,At-60),i.text("COPYRIGHT 2026",34,l+6,{font:9,color:r.accent}),i.text(Cy,At-34,l+6,{font:9,color:r.accent,align:"right"}),e!==null&&i.text(e?"\u25CF":"\u25CB",16,462,{font:9,color:e?te.green:r.dim}),n&&i.button("settings",At-50,12,38,16,"\uC124\uC815",{font:9})}function Vf(i,t,e){let n=[],s=i.status==="playing";if(i.lastMove&&(n.push({sq:i.lastMove.from,color:"#f2c14e",opacity:.22}),n.push({sq:i.lastMove.to,color:"#f2c14e",opacity:.32})),t.sel!=null){n.push({sq:t.sel,color:"#7fe9ff",opacity:.5});for(let r of t.legal)n.push({sq:r.to,color:r.capture?"#ff5a4a":"#7ad17a",opacity:.42})}if(i.check&&s){let r=i.pieces.find(o=>o.type==="k"&&o.color===i.turn);r&&n.push({sq:r.sq,color:"#ff2a2a",opacity:.35+Math.sin(e/120)*.15})}return n}function Py(i){let t=i.result||{},e=t.winner===i.you,n=!t.winner,s=n?"\uBB34\uC2B9\uBD80":e?"\uC2B9\uB9AC!":"\uD328\uBC30\u2026",r={checkmate:"\uCCB4\uD06C\uBA54\uC774\uD2B8",stalemate:"\uC2A4\uD14C\uC77C\uBA54\uC774\uD2B8",insufficient:"\uAE30\uBB3C \uBD80\uC871",fifty:"50\uC218 \uADDC\uCE59",resign:e?"\uC0C1\uB300 \uAE30\uAD8C":"\uAE30\uAD8C",disconnect:e?"\uC0C1\uB300 \uC811\uC18D \uC885\uB8CC":"\uC811\uC18D \uC885\uB8CC",fouls:e?"\uC0C1\uB300 \uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C":"\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C",bare:e?"\uBC18\uCE59 \uC801\uBC1C \xB7 \uC0C1\uB300\uC5D0\uAC8C \uD0B9\uB9CC \uB0A8\uC74C":"\uBC18\uCE59 \uC801\uBC1C \xB7 \uD0B9\uB9CC \uB0A8\uC74C"}[t.result]||"";return{head:s,why:r,won:e,draw:n}}function Gf(i,t,e,n,s,r){let o=i.pal,a=e.you,l=a==="w"?"b":"w",c=e.status==="playing";i.vignette(),t&&t.flash>0&&i.rect(0,0,At,Ye,`rgba(255,248,230,${(t.flash*.7).toFixed(3)})`),i.rect(0,0,At,56,"rgba(0,0,0,0.5)"),i.frame();let u=((p,y,_)=>{if(i.measure(p,y)<=_)return p;let v=p;for(;v.length>1&&i.measure(v+"\u2026",y)>_;)v=v.slice(0,-1);return v+"\u2026"})(e.names[l]||"?","11b",64);i.text(`\uC0C1\uB300 \xB7 ${l==="w"?"\uBC31":"\uD751"}`,20,10,{font:9,color:o.accent}),i.text(u,20,21,{font:"11b",color:e.connected[l]?o.ink:o.dim}),i.text(e.connected[l]?"\u25CF":"\u25CB",24+i.measure(u,"11b"),22,{font:9,color:e.connected[l]?te.green:te.warn}),zf(i,20,38,e.caught?.[l]||0),Ly(i,e,s),i.button("suspect",184,10,74,28,"\uC758\uC2EC",{style:"danger",font:14,disabled:!c||!!e.pending}),i.text(`\uC81C ${e.round}\uAD6D \xB7 \uBC29 ${e.code}`,256,42,{font:9,color:o.dim,align:"right"});let f=null;n.online?c&&!e.connected[l]&&(f=["\uC0C1\uB300 \uC5F0\uACB0 \uB04A\uAE40 \xB7 30\uCD08 \uC548\uC5D0 \uC548 \uC624\uBA74 \uC2B9\uB9AC",te.warn]):f=["\uC5F0\uACB0\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",te.warn],f&&(i.panel(10,60,At-20,18,{fill:"rgba(10,6,8,0.9)",border:f[1],shadow:!1}),i.text(f[0],At/2,64,{font:9,align:"center",color:f[1]})),i.plaque(6,380,At-12,94);let d=e.names[a]||"?",g=`\uB098 \xB7 ${a==="w"?"\uBC31":"\uD751"}`;if(i.text(g,16,389,{font:9,color:o.accent}),zf(i,16+i.measure(g,9)+10,389,e.caught?.[a]||0),i.text(d,16,400,{font:"11b"}),i.text(e.connected[a]?"\u25CF":"\u25CB",20+i.measure(d,"11b"),401,{font:9,color:te.green}),c){let p=e.turn===a,y=e.check&&p?te.warn:p?o.accent:o.lineLo;i.panel(150,404,106,18,{fill:p?o.btnPrimary:"#14121a",border:y,shadow:!1});let _=p?e.check?"\uCCB4\uD06C! \uB0B4 \uCC28\uB840":"\uB0B4 \uCC28\uB840":e.check?"\uC0C1\uB300 \uCCB4\uD06C":"\uC0C1\uB300 \uCC28\uB840";i.text(_,203,407,{font:11,align:"center",color:e.check&&p?te.warn:p?o.accentHi:o.dim})}else i.text("\uB300\uAD6D \uC885\uB8CC",203,407,{font:11,align:"center",color:o.dim});let x=Math.max(0,e.eraseReadyAt-r),m=x<=0&&c;if(i.text("\uC9C0\uC6B0\uAE30",16,428,{font:9,color:o.accent}),i.bar(52,429,156,8,c?1-x/Ue.ERASE_COOLDOWN_MS:0,m?Math.floor(s/250)%2?te.cyan:"#4fb6cc":"#6a3a2a"),i.text(m?"\uC900\uBE44\uB428":c?`${Math.ceil(x/1e3)}\uCD08`:"-",256,428,{font:9,align:"right",color:m?te.cyan:o.dim}),i.text("\uC0C1\uB300 \uB9D0\uC744 \uAE38\uAC8C \uB20C\uB800\uB2E4 \uB5BC\uBA74 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4",16,442,{font:9,color:o.dim}),i.button("settings",14,455,40,14,"\uC124\uC815",{font:9}),c&&(n.confirmResign?(i.text("\uC815\uB9D0 \uAE30\uAD8C?",128,457,{font:9,color:te.warn,align:"right"}),i.button("resign:yes",134,455,36,14,"\uC608",{font:9,style:"danger"}),i.button("resign:no",176,455,80,14,"\uC544\uB2C8\uC624",{font:9})):i.button("resign",216,455,40,14,"\uAE30\uAD8C",{font:9})),n.grab){let p=Math.min(1,(performance.now()-n.grab.t0p)/Ue.LONG_PRESS_MS),y=i.ctx,_=n.grab.x,v=n.grab.y-22;y.strokeStyle=p>=1?te.cyan:"rgba(255,255,255,0.7)",y.lineWidth=2,y.beginPath(),y.arc(_,v,8,-Math.PI/2,-Math.PI/2+p*Math.PI*2),y.stroke(),p>=1&&i.text("\uB5BC\uBA74 \uC9C0\uC6C0",_,v-22,{font:9,align:"center",color:te.cyan})}if(t&&!t.zoomFx&&t.squareToScreen){let p=[56,63,0,7].map(_=>t.squareToScreen(_).y),y=Math.abs(t.squareToScreen(56).x-t.squareToScreen(63).x)/14;i.boardTop=Math.round(Math.min(...p)-y)}if(Fy(i,n.toasts,s,f?82:60,Math.max(f?96:74,(i.boardTop??108)-2)),e.pending?.kind==="pick"){i.dim(.5),i.plaque(14,146,At-28,168),i.text("\uBB34\uC5C7\uC774 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uAE4C?",At/2,160,{font:"11b",align:"center"});let p=Math.max(0,e.pending.deadline-r);i.bar(28,180,At-56,6,p/Ue.PICK_TIMEOUT_MS,p<3e3?te.warn:o.accent),e.pending.choices.forEach((y,_)=>{let v=23+_*46,A=194,w="pick:"+y;i.button(w,v,A,40,58,"",{font:9});let R=i.pressedId===w?1:0,D=t?.pieceIcon?.(y,a,34);i.rect(v+3+R,A+4+R,34,34,"rgba(255,236,200,0.13)"),D&&i.ctx.drawImage(D,v+3+R,A+4+R,34,34),i.text(hn[y],v+20+R,A+42+R,{font:9,align:"center"})}),i.text("\uB9DE\uD788\uBA74 \uBC18\uCE59 \uD398\uB110\uD2F0: \uC0C1\uB300\uC758 \uAC19\uC740",At/2,262,{font:9,align:"center",color:o.dim}),i.text("\uB4F1\uAE09 \uB9D0 \uD558\uB098\uAC00 \uC0B0\uC0B0\uC870\uAC01 \uB0A9\uB2C8\uB2E4",At/2,275,{font:9,align:"center",color:o.dim}),i.text("\uBC18\uCE59 \uB9C8\uCEE4 3\uAC1C\uBA74 \uC0C1\uB300 \uD328\uBC30",At/2,288,{font:9,align:"center",color:o.dim})}else if(n.promo)i.dim(.4),i.plaque(30,180,At-60,84),i.text("\uC2B9\uAE09\uD560 \uB9D0\uC744 \uACE0\uB974\uC138\uC694",At/2,194,{font:11,align:"center"}),["q","r","b","n"].forEach((p,y)=>i.button("promo:"+p,38+y*49,214,44,34,hn[p],{font:9}));else if(e.status==="over"){let p=Py(e);i.dim(.55),i.plaque(25,150,At-50,160),p.won?i.letter(p.head,At/2,164,{scale:2,font:14}):i.bigText(p.head,At/2,166,{scale:2,font:14,color:p.draw?o.ink:te.warn}),i.text(p.why,At/2,210,{font:11,align:"center"});let y=e.rematchVotes[a];e.rematchVotes[l]&&!y&&i.text("\uC0C1\uB300\uAC00 \uC7AC\uB300\uACB0\uC744 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4",At/2,232,{font:9,align:"center",color:o.accentHi}),y&&i.text("\uC0C1\uB300\uC758 \uC751\uB2F5\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911\u2026",At/2,232,{font:9,align:"center",color:o.dim}),i.button("rematch",37,262,94,28,"\uC7AC\uB300\uACB0",{style:"primary",disabled:y||!e.connected[l]}),i.button("leave",139,262,94,28,"\uB098\uAC00\uAE30")}n.rewindFx&&Dy(i,n.rewindFx,performance.now()),n.bubble&&Oy(i,n.bubble,performance.now())}var Ic={x:99,y:0,w:72,h:56};function Lc(){let i=Ic;return{x:i.x+4,y:i.y+4,w:i.w-8,h:i.h-8}}function Iy(){let i=Ic;return[i.x+i.w/2,i.y+i.h]}function Ly(i,t,e){let n=i.pal,s=Ic,r=i.ctx,o=t.status==="playing"?t.turn:t.status==="over"?t.result?.winner:null;i.rect(s.x-1,s.y-1,s.w+2,s.h+2,"#000"),i.rect(s.x,s.y,s.w,s.h,n.accent),i.rect(s.x,s.y,s.w,1,n.accentHi),i.rect(s.x,s.y,1,s.h,n.accentHi),i.rect(s.x,s.y+s.h-1,s.w,1,n.accentLo),i.rect(s.x+s.w-1,s.y,1,s.h,n.accentLo),i.rect(s.x+2,s.y+2,s.w-4,s.h-4,n.accentLo);for(let[l,c]of[[s.x+1,s.y+1],[s.x+s.w-4,s.y+1],[s.x+1,s.y+s.h-4],[s.x+s.w-4,s.y+s.h-4]])i.rect(l,c,3,3,n.accentHi);let a=Lc();r.clearRect(a.x,a.y,a.w,a.h),i.box(a.x-1,a.y-1,a.w+2,a.h+2,o&&Math.floor(e/300)%2===0?n.accentHi:te.gold)}var Rc=1500;function Dy(i,t,e){let n=e-t.t0;if(n<0||n>Rc)return;let s=i.ctx;s.save();let r=n<150?n/150:n>Rc-300?(Rc-n)/300:1;i.rect(0,56,At,324,`rgba(60,120,170,${(.16*r).toFixed(3)})`);for(let o=0;o<4;o++){let a=56+((324-(n*.45+o*83))%324+324)%324;i.rect(0,Math.round(a),At,2,`rgba(230,240,255,${(.28*r).toFixed(3)})`),i.rect(0,Math.round(a)+3,At,1,`rgba(255,90,210,${(.18*r).toFixed(3)})`)}s.globalAlpha=r*(Math.floor(n/250)%2?.75:1),i.bigText("\u25C0\u25C0 \uB418\uAC10\uAE30",16,64,{scale:1,font:14,color:"#ffffff",align:"left"}),t.undone&&i.text(`${t.undone}\uC218 \uBB34\uB984`,18,84,{font:9,color:"#cfe9ff"}),s.restore()}function zf(i,t,e,n){let s=i.pal;i.text("\uBC18\uCE59",t,e,{font:9,color:n?te.warn:s.dim});let r=t+i.measure("\uBC18\uCE59",9)+4;for(let o=0;o<Ue.FOUL_LIMIT;o++){let a=o<n,l=r+o*10,c=e+2;i.rect(l+1,c+1,7,7,"#000"),i.rect(l,c,7,7,a?"#d4382c":"rgba(0,0,0,0.6)"),i.box(l,c,7,7,a?"#ff8a7a":s.lineLo),a&&(i.rect(l+3,c+1,1,3,"#fff"),i.rect(l+3,c+5,1,1,"#fff"))}}var Cc=1600,Pc=new Map;function Uy(i){let t=i.getContext("2d"),e=t.getImageData(0,0,i.width,i.height),n=e.data;for(let s=3;s<n.length;s+=4)n[s]=n[s]>=110?255:0;return t.putImageData(e,0,0),i}function Ny(i,t){let e=t;if(Pc.has(e))return Pc.get(e);let n="\uB3D9\uC791 \uADF8\uB9CC!",s=2,r=(i.measure(n,14)+4)*s,o=19*s,a=Iy(),l=t==="w"?166:104,c=114,h=r/2+12,u=o/2+10,f=15,d=W=>{let L=Math.sin(W*12.9898+(t==="w"?7.1:3.3))*43758.5453;return L-Math.floor(L)},g=[];for(let W=0;W<f*2;W++){let L=W/(f*2)*Math.PI*2-Math.PI/2+.11,F=W%2===0,H=F?1.2+d(W)*.22:.97+d(W+30)*.05,J=F?1.45+d(W+60)*.45:1;g.push([l+Math.cos(L)*h*H,c+Math.sin(L)*u*J])}let x=Math.atan2(a[1]-c,a[0]-l),m=0,p=1/0;g.forEach(([W,L],F)=>{if(F%2)return;let H=Math.abs(Math.atan2(L-c,W-l)-x);H=Math.min(H,Math.PI*2-H),H<p&&(p=H,m=F)}),g[m]=a;let y=W=>{let L=document.createElement("canvas");L.width=At,L.height=Ye;let F=L.getContext("2d");return W(F),Uy(L)},_=W=>{W.beginPath(),g.forEach(([L,F],H)=>H?W.lineTo(L,F):W.moveTo(L,F)),W.closePath()},v=y(W=>{_(W),W.fillStyle="#1a0a10",W.fill(),W.lineJoin="miter",W.miterLimit=12,W.lineWidth=5,W.strokeStyle="#1a0a10",W.stroke()}),A=y(W=>{_(W),W.fillStyle="#fff2a6",W.fill()}),w=document.createElement("canvas");w.width=At,w.height=Ye;let R=w.getContext("2d");R.imageSmoothingEnabled=!1,R.globalAlpha=.6,R.drawImage(v,3,3),R.globalAlpha=1,R.drawImage(v,0,0),R.drawImage(A,0,0);let D=i.ctx;i.ctx=R,i.bigText(n,l,Math.round(c-o/2)+1,{scale:s,font:14,color:"#d4141e",shadow:!0}),i.ctx=D;let b=g.map(W=>W[0]),S=g.map(W=>W[1]),N={x:Math.floor(Math.min(...b))-4,y:Math.floor(Math.min(...S))-4,cx:l,cy:c};N.w=Math.ceil(Math.max(...b))+8-N.x,N.h=Math.ceil(Math.max(...S))+8-N.y;let G={sprite:w,box:N};return Pc.set(e,G),G}function Oy(i,t,e){let n=e-t.t0;if(n<0||n>Cc)return;let{sprite:s,box:r}=Ny(i,t.by),o=n<90?.6+n/90*.55:n<160?1.15-(n-90)/70*.15:1,a=n>=160&&n<420?Math.floor(n/40)%2?2:-2:0,l=i.ctx;l.save(),l.imageSmoothingEnabled=!1,l.globalAlpha=n>Cc-300?(Cc-n)/300:1;let c=Math.round(r.w*o),h=Math.round(r.h*o),u=Math.round(r.cx-(r.cx-r.x)*o)+a,f=Math.round(r.cy-(r.cy-r.y)*o);l.drawImage(s,r.x,r.y,r.w,r.h,u,f,c,h),l.restore()}function Fy(i,t,e,n,s=106){let r=i.pal,o={secret:"#b0a49a",bad:te.warn,late:te.late,good:te.green,warn:te.gold,info:r.ink},a=11,l=n,c=!0;for(let h of t.slice().reverse()){let u=e-h.t;if(u>5e3)continue;let f=u>4e3?Math.max(0,1-(u-4e3)/1e3):1,d=i.lines(h.text,At-28,9),g=Math.floor((s-l+1)/a);if(g<=0)break;if(d.length>g){if(!c)break;d=d.slice(0,g),d[g-1]=d[g-1].slice(0,-1)+"\u2026"}i.ctx.save(),i.ctx.globalAlpha=f*(c?1:.8);let x=Math.max(...d.map(m=>i.measure(m,9)))+8;i.rect(10,l-1,x,d.length*a+1,"rgba(0,0,0,0.7)"),d.forEach((m,p)=>i.text(m,14,l+p*a,{font:9,color:o[h.kind]||r.ink})),i.ctx.restore(),l+=d.length*a+3,c=!1}}function Wf(i,t){let e=i.pal;i.dim(.55),i.plaque(8,22,At-16,438),i.text("\uC2DC\uAC01 \uC124\uC815",At/2,34,{font:"11b",align:"center",color:e.accentHi}),i.text("\uBC14\uAFB8\uBA74 \uBC14\uB85C \uC801\uC6A9\uB418\uACE0 \uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4",At/2,48,{font:9,align:"center",color:e.dim}),Ns.forEach((n,s)=>{let r=64+s*44;i.text(n.label,22,r,{font:9,color:e.accent}),i.button(`th:${n.id}:-1`,20,r+12,26,22,"<",{font:11}),i.text(cf(n.id,t[n.id]),At/2,r+17,{font:11,align:"center"}),i.button(`th:${n.id}:1`,At-46,r+12,26,22,">",{font:11})}),i.button("settings:close",At/2-50,420,100,26,"\uB2EB\uAE30",{style:"primary"})}var pe=globalThis.FAITH_TARGET||"lan",$e=i=>document.getElementById(i),Yf=$e("gl"),Vn=$e("ui"),By=$e("out"),Vs=$e("dom"),Dc=$e("stage"),ie=new na(Yf),rt=new ia(Vn),Ir=new ga(By,[Yf,Vn]),Yt=new sa,P={mode:"boot",view:null,offset:0,toasts:[],sel:null,legal:[],promo:null,confirmResign:!1,pointers:new Map,grab:null,btnPid:null,touchMax:0,bubble:null,rewindFx:null,info:null,roomParam:new URLSearchParams(location.search).get("room"),err:"",settings:!1,theme:af(),lan:null,roomT:null,roomChecked:pe!=="artifact",shareMsg:null},Nc=i=>`${location.origin}${location.pathname}?room=${i}`,$i={x:8,y:76,w:254,h:270},be=pe==="web"?new pa:null;ie.phoneStage=be;P.call={digits:"",calling:!1,ringbackT:null,ringFx:0,pickup:0,qr:!1,autoDialed:!1};P.phonePid=null;be&&(be.onSound=i=>({tick:jt.dialTick,pulse:jt.dialPulse,stop:jt.dialStop})[i]?.(),be.onDigit=ky);var _a=()=>pe==="web"&&!!P.roomT&&P.mode==="lobby"&&!P.settings&&!P.call.calling&&P.call.digits.length<4;function Oc(){let i=$e("name"),t=(i?i.value:kc()).trim().slice(0,12);try{localStorage.setItem("faith-chess-name",t)}catch{}return t}function ky(i){_a()&&(P.call.digits||(be.setLift(.3),jt.offHook()),P.call.digits+=i,P.err="",P.call.digits.length===4&&zy())}async function zy(){let i=P.call.digits;P.call.calling=!0,jt.ringback(),P.call.ringbackT=setInterval(()=>jt.ringback(),3e3);try{Yt.use(P.roomT),await P.roomT.join(i,Oc()),P.call.calling&&P.mode==="lobby"&&(P.mode="waiting-join")}catch(t){console.warn(t),Lr("\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uAC78\uC5B4 \uC8FC\uC138\uC694.")}}function Fc(){clearInterval(P.call.ringbackT),P.call.ringbackT=null}function Lr(i){Fc();let t=P.call.calling||P.call.digits;P.call.calling=!1,P.call.digits="",be?.abort(),be?.setLift(0),i?(P.err=i,jt.busy()):t&&jt.hangUp()}function $f(){let i=getComputedStyle(document.body),t=document.body.clientWidth-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight),e=document.body.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom),n=window.devicePixelRatio||1,s=Math.max(.5,Math.min(t/St,e/_n)),r=Math.ceil(s*n),o=Math.floor(s*n),a=s;r/n<=s*1.025?a=r/n:o>=1&&o/n>=s*.92&&(a=o/n),document.documentElement.style.setProperty("--s",String(a)),document.documentElement.style.setProperty("--fs",String(Math.max(1,Math.round(a*n))/n)),P.scale=a,Ir.resize(St*a,_n*a,n),ie.setNativeSize(Ir.out.width,Ir.out.height),Dc.style.transform="";let l=Dc.getBoundingClientRect(),c=l.left*n%1,h=l.top*n%1;(c||h)&&(Dc.style.transform=`translate(${-c/n}px, ${-h/n}px)`)}addEventListener("resize",$f);$f();var Hy=(i,t)=>i.x>=t.x&&i.x<t.x+t.w&&i.y>=t.y&&i.y<t.y+t.h;function Dr(i){let t=Vn.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*St,y:(i.clientY-t.top)/t.height*_n}}function Bc(i){P.theme=i,Zo(i),ie.applyTheme(i),rt.setTheme(i);let t=vr[i.frame],e=document.documentElement.style;e.setProperty("--accent",t.accent),e.setProperty("--accent-hi",t.accentHi),e.setProperty("--line",t.line),e.setProperty("--ink",t.ink),e.setProperty("--dim",t.dim),e.setProperty("--btn",t.btn),e.setProperty("--btn-primary",t.btnPrimary)}var Vy=()=>Date.now()+P.offset,ya=()=>P.view?.you;function va(i){return P.view?.pieces.find(t=>t.sq===i)||null}function Gy(){let i=P.view,t=new Array(64).fill(null);for(let e of i.pieces)t[e.sq]={id:e.id,type:e.type,color:e.color,shield:e.shield};return{board:t,turn:i.turn,castling:i.castling,ep:i.ep,halfmove:0,fullmove:1,lastMove:null}}function Wy(i,t="info"){P.toasts.push({text:i,kind:t,t:performance.now()}),P.toasts.length>4&&P.toasts.shift()}function Zf(){if(location.hostname!=="localhost"&&location.hostname!=="127.0.0.1")return location.origin+"/";let i=P.info?.addresses?.[0];return i?`http://${i.address}:${P.info.port}/`:location.origin+"/"}function Jf(){P.sel=null,P.legal=[],P.promo=null,P.confirmResign=!1}Yt.addEventListener("error",i=>{pe==="web"&&P.call.calling?Lr(i.detail.text):P.err=i.detail.text,["waiting","lobby","waiting-join"].includes(P.mode)&&Gs()});Yt.addEventListener("joined",()=>{P.err="",Uc(),pe==="web"&&P.call.calling&&(Fc(),jt.pickUp())});Yt.addEventListener("ring",()=>{be?.ring(1.7),jt.ring(),P.call.ringFx=performance.now()});Yt.addEventListener("ringstop",()=>{P.call.ringFx=0,be&&(be.ringT=0)});Yt.addEventListener("toast",i=>{let{text:t,kind:e}=i.detail;Wy(t,e),{secret:jt.secret,bad:jt.bad,late:jt.late,warn:jt.ui,info:jt.ui,good:jt.ui}[e]?.()});Yt.addEventListener("event",i=>{let{name:t,check:e,by:n,at:s}=i.detail;t==="start"?(Jf(),jt.start()):t==="move"||t==="capture"||t==="castle"?(jt[t](),e&&setTimeout(()=>jt.check(),120),t==="capture"&&n&&n===ya()&&ie.attackZoom(s)):t==="penalty"?(ie.shatter(i.detail.at),jt.shatter()):t==="rewind"?(P.sel=null,P.legal=[],P.promo=null,P.rewindFx={t0:performance.now(),undone:i.detail.undone},ie.rewind(),jt.rewind()):t==="revive"?(ie.reviveAt(i.detail.at),jt.revive()):t==="suspect"?(P.bubble={by:n,t0:performance.now()},jt.halt()):t==="vanish"&&jt.vanish()});Yt.addEventListener("state",i=>{let t=i.detail,e=P.view;P.view=t,P.offset=t.serverNow-Date.now(),ie.setSide(t.you==="w"?1:-1),t.status==="waiting"?(P.mode="waiting",Uc(),ie.setMode("title")):(P.mode!=="game"&&(pe==="web"&&Yt.kind==="peer"&&t.status==="playing"&&(P.call.pickup=performance.now(),be.setLift(1),P.call.calling||jt.pickUp()),pe==="web"&&(Fc(),P.call.calling=!1,P.call.digits="",P.call.ringFx=0,P.call.qr=!1),P.mode="game",Uc(),ie.clearPieces()),ie.setMode("game"),ie.sync(t.pieces,t.lastMove)),(!e||e.turn!==t.turn||e.status!==t.status||e.round!==t.round)&&(P.sel=null,P.legal=[],P.promo=null),e&&e.status==="playing"&&t.status==="over"&&(P.confirmResign=!1,t.result?.winner===t.you?jt.win():t.result?.winner?jt.lose():jt.ui())});function Uc(){Vs.hidden=!0,Vs.innerHTML=""}function xa(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function kc(){try{return localStorage.getItem("faith-chess-name")||""}catch{return""}}function Gs(){P.mode="lobby",P.settings=!1,ie.setMode("title"),Vs.hidden=!1;let i=pe==="lan",t=P.roomT,e=!i&&!t;if(pe==="web")return qy();let n=(P.roomParam||"").replace(/[^A-Za-z0-9]/g,"").slice(0,4);Vs.innerHTML=`
    <form class="panel" id="lobby" autocomplete="off">
      <label for="name">\uC774\uB984</label>
      <input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${xa(kc())}">
      <div class="row">
        <button type="button" id="create" class="primary" ${e?"disabled":""}>\uBC29 \uB9CC\uB4E4\uAE30</button>
        ${i?'<button type="button" id="quick">\uBE60\uB978 \uB300\uC804</button>':""}
      </div>
      <label for="code">\uBC29 \uCF54\uB4DC\uB85C \uCC38\uAC00</label>
      <div class="row tight"><input id="code" class="code" maxlength="4" placeholder="ABCD" value="${xa(n)}" ${e?"disabled":""}><button type="submit" id="join" class="narrow" ${e?"disabled":""}>\uCC38\uAC00</button></div>
      ${pe==="artifact"?'<label>\uC5F4\uB9B0 \uBC29</label><div id="rooms" class="rooms"></div>':""}
      <div class="row"><button type="button" id="bot">\uBD07\uACFC \uC5F0\uC2B5</button></div>
      <div class="err" id="err" role="alert">${xa(P.err||"")}</div>
      <div class="hint" id="hint"></div>
    </form>`;let s=$e("hint");i?s.textContent="\uAC19\uC740 WiFi\uC758 \uC0C1\uB300\uB294 \uC544\uB798 \uC8FC\uC18C\uB098 QR\uB85C \uC811\uC18D\uD569\uB2C8\uB2E4.":P.roomChecked?e&&pe==="web"?s.textContent="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD574 \uBCF4\uC138\uC694. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":e?s.textContent="\uB450 \uD3F0 \uB300\uC804\uC740 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD55C \uC0C1\uD0DC\uB85C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uBD07\uACFC \uC5F0\uC2B5\uC740 \uBC14\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":pe==="web"?s.textContent=P.roomParam?"\uC774\uB984\uC744 \uC801\uACE0 \uCC38\uAC00\uB97C \uB204\uB974\uC138\uC694.":"\uBC29\uC744 \uB9CC\uB4E4\uBA74 \uB9C1\uD06C\uAC00 \uC0DD\uAE41\uB2C8\uB2E4. \uC0C1\uB300\uC5D0\uAC8C \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uAC70\uB098 \uCF54\uB4DC\uB97C \uC54C\uB824 \uC8FC\uC138\uC694.":s.textContent="\uD55C \uD3F0\uC5D0\uC11C \uBC29\uC744 \uB9CC\uB4E4\uACE0, \uB2E4\uB978 \uD3F0\uC5D0\uC11C\uB294 \uC5F4\uB9B0 \uBC29\uC744 \uB204\uB974\uAC70\uB098 \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694.":s.textContent="\uB450 \uD3F0 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uB294 \uC911\uC785\uB2C8\uB2E4\u2026";let r=$e("name"),o=$e("code"),a=()=>{let u=r.value.trim().slice(0,12);try{localStorage.setItem("faith-chess-name",u)}catch{}return u},l=u=>{$e("err").textContent=u},c=u=>async(...f)=>{ma(),P.err="",l("");try{await u(...f)}catch(d){l("\uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."),console.warn(d)}},h=c(async u=>{let f=(typeof u=="string"?u:o.value).trim().toUpperCase();if(f.length!==4){l("\uBC29 \uCF54\uB4DC 4\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694.");return}if(i){if(!Yt.online)return l("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");Yt.use(P.lan),Yt.send({type:"join",code:f,name:a()})}else Yt.use(P.roomT),await P.roomT.join(f,a()),P.mode="waiting-join",l("\uBC29\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uC911\u2026")});if($e("create").onclick=c(async()=>{if(i){if(!P.lan.online)return l("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");Yt.use(P.lan),Yt.send({type:"create",name:a()})}else Yt.use(P.roomT),await P.roomT.create(a())}),i&&($e("quick").onclick=c(async()=>{if(!P.lan.online)return l("\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4\u2026");Yt.use(P.lan),Yt.send({type:"quick",name:a()})})),$e("bot").onclick=c(async()=>{Yt.use(new Rr).start(a()||"\uB098")}),$e("lobby").onsubmit=u=>{u.preventDefault(),h()},pe==="artifact"&&t){let u=f=>{let d=$e("rooms");if(d){if(d.textContent="",!f.length){let g=document.createElement("div");g.className="empty",g.textContent="\uC544\uC9C1 \uC5F4\uB9B0 \uBC29\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",d.append(g);return}for(let g of f.slice(0,4)){let x=document.createElement("button");x.type="button",x.textContent=`${g.code} \xB7 ${g.name}`,x.onclick=()=>h(g.code),d.append(x)}}};t.onLobby=u,u(t.openRooms())}P.roomParam||r.focus({preventScroll:!0})}function qy(){Vs.innerHTML=`<form class="panel slim" id="lobby" autocomplete="off"><label for="name">\uC774\uB984</label><input id="name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" value="${xa(kc())}" enterkeyhint="done"></form>`,$e("lobby").onsubmit=i=>{i.preventDefault(),$e("name").blur()},P.call.calling||be.setLift(P.call.digits?.3:0),P.roomParam&&!P.call.autoDialed&&/^\d{4}$/.test(P.roomParam)&&(P.call.autoDialed=!0,setTimeout(()=>{_a()&&!P.call.digits&&!be.busy&&be.autoDial(P.roomParam)},600))}function Ma(i){P.grab&&(i==null||P.grab.pid===i)&&(clearTimeout(P.grab.timer),P.grab=null)}function Xy(i,t,e,n){Ma();let s={pid:e.pointerId,pieceId:t.id,sq:i,x:n.x,y:n.y,t0:e.timeStamp,t0p:performance.now(),armed:!1,timer:null};s.timer=setTimeout(()=>{s.armed=!0,jt.select();try{navigator.vibrate?.(15)}catch{}},Ue.LONG_PRESS_MS),P.grab=s}var zc=()=>P.mode==="game"&&!P.call.pickup&&P.view?.status==="playing"&&!P.promo&&!P.settings&&P.view.pending?.kind!=="pick";Vn.addEventListener("pointerdown",i=>{if(ma(),i.button!==0)return;P.lastPointerType=i.pointerType;let t=Dr(i),e=P.pointers.size===0;P.pointers.set(i.pointerId,{x:t.x,y:t.y,moved:!1}),P.touchMax=Math.max(P.touchMax,P.pointers.size);try{Vn.setPointerCapture(i.pointerId)}catch{}if(e&&(rt.pressedId=rt.hit(t.x,t.y),P.btnPid=rt.pressedId?i.pointerId:null),pe==="web"&&P.mode==="lobby"&&document.activeElement?.blur?.(),be&&P.btnPid!==i.pointerId&&P.phonePid==null&&_a()&&Hy(t,$i)&&be.pointerDown($i,t.x,t.y,i.timeStamp)){P.phonePid=i.pointerId;return}if(P.btnPid===i.pointerId||!zc())return;let n=ie.pickSquare(t.x,t.y),s=va(n);s&&s.color!==ya()&&!P.grab&&Xy(n,s,i,t)});Vn.addEventListener("pointermove",i=>{if(P.phonePid===i.pointerId){let n=Dr(i);be.pointerMove($i,n.x,n.y);return}let t=P.pointers.get(i.pointerId);if(!t)return;let e=Dr(i);Math.hypot(e.x-t.x,e.y-t.y)>6&&(t.moved=!0,Ma(i.pointerId))});Vn.addEventListener("pointerup",i=>{if(P.phonePid===i.pointerId){P.pointers.delete(i.pointerId),P.phonePid=null,be.pointerUp(i.timeStamp);return}let t=P.pointers.get(i.pointerId);if(P.pointers.delete(i.pointerId),!t)return;let e=Dr(i),n=P.grab&&P.grab.pid===i.pointerId?P.grab:null;if(n&&(Ma(i.pointerId),i.timeStamp-n.t0>=Ue.LONG_PRESS_MS||n.armed)){let s=P.view?.pieces.find(r=>r.id===n.pieceId);s&&s.color!==ya()&&zc()&&Yt.send({type:"erase",square:s.sq});return}if(P.btnPid===i.pointerId){let s=rt.pressedId;rt.pressedId=null,P.btnPid=null,s&&rt.hit(e.x,e.y)===s&&Jy(s);return}if(!(t.moved||P.settings)){if(P.mode==="title"){Gs();return}P.mode==="game"&&Yy(ie.pickSquare(e.x,e.y))}});Vn.addEventListener("pointercancel",i=>{P.pointers.delete(i.pointerId),P.phonePid===i.pointerId&&(P.phonePid=null,be.cancel()),P.btnPid===i.pointerId&&(rt.pressedId=null,P.btnPid=null),Ma(i.pointerId)});for(let i of["touchstart","touchmove","touchend","touchcancel"])Vn.addEventListener(i,t=>{t.cancelable&&t.preventDefault(),t.touches&&(P.touchMax=Math.max(P.touchMax,t.touches.length))},{passive:!1});document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("gesturechange",i=>i.preventDefault());Vn.addEventListener("contextmenu",i=>{if(i.preventDefault(),P.lastPointerType&&P.lastPointerType!=="mouse"||!zc())return;let t=Dr(i),e=ie.pickSquare(t.x,t.y),n=va(e);n&&n.color!==ya()&&Yt.send({type:"erase",square:e})});function Yy(i){let t=P.view;if(!t||P.promo)return;if(i<0){P.sel=null,P.legal=[];return}let e=va(i);if(t.status==="playing"){if(P.sel!=null){let n=P.legal.find(s=>s.to===i);if(n){n.promotion?P.promo={from:n.from,to:n.to}:(Yt.send({type:"move",from:n.from,to:n.to}),P.sel=null,P.legal=[]);return}}if(e&&e.color===t.you&&t.turn===t.you){if(P.sel===i){P.sel=null,P.legal=[];return}P.sel=i,P.legal=ks(Gy(),i),jt.select()}else P.sel=null,P.legal=[]}}function qf(i){P.settings=i,P.touchMax=0,P.mode==="lobby"&&(i?Vs.hidden=!0:Gs())}async function $y(){let i=P.view?.code;if(!i)return;let t=Nc(i),e=n=>{P.shareMsg={text:n,t:performance.now()}};if(navigator.share)try{await navigator.share({title:"\uBBFF\uC74C\uC758 \uCCB4\uC2A4",text:`\uBBFF\uC74C\uC758 \uCCB4\uC2A4 \uD55C \uD310! \uBC29 \uCF54\uB4DC ${i}`,url:t}),e("\uBCF4\uB0C8\uC2B5\uB2C8\uB2E4");return}catch(n){if(n?.name==="AbortError")return}try{await navigator.clipboard.writeText(t),e("\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4")}catch{e("\uC8FC\uC18C\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD558\uC138\uC694")}}async function Zy(){ma(),P.err="",Lr();try{Yt.use(P.roomT),await P.roomT.create(Oc())}catch(i){console.warn(i),P.err="\uC804\uD654 \uAD50\uD658\uAD6D(\uC5F0\uACB0 \uC11C\uBC84)\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uD574 \uBCF4\uC138\uC694.",jt.busy()}}function Jy(i){if(jt.ui(),i==="settings")return qf(!0);if(i==="settings:close")return qf(!1);if(i.startsWith("th:")){let[,t,e]=i.split(":");Bc(lf(P.theme,t,Number(e)));return}if(i==="suspect")return Yt.send({type:"suspect"});if(i.startsWith("pick:"))return Yt.send({type:"pick",pieceType:i.slice(5)});if(i.startsWith("promo:")){Yt.send({type:"move",from:P.promo.from,to:P.promo.to,promotion:i.slice(6)}),P.promo=null,P.sel=null,P.legal=[];return}if(i==="resign"){P.confirmResign=!0;return}if(i==="resign:yes")return P.confirmResign=!1,Yt.send({type:"resign"});if(i==="resign:no"){P.confirmResign=!1;return}if(i==="rematch")return Yt.send({type:"rematch"});if(i==="share")return $y();if(i==="qr"){P.call.qr=!0;return}if(i==="qr:close"){P.call.qr=!1;return}if(i==="call:create")return Zy();if(i==="call:bot"){Lr(),Yt.use(new Rr).start(Oc()||"\uB098");return}if(i==="call:clear"){P.call.calling&&(P.roomT?.close(),P.mode="lobby"),P.err="",Lr();return}(i==="leave"||i==="cancel-wait")&&(pe==="web"&&(i==="cancel-wait"&&jt.hangUp(),P.call.ringFx=0,P.call.qr=!1),Yt.leave(),P.lan&&Yt.use(P.lan),P.view=null,Jf(),ie.clearPieces(),td(),Gs())}function Kf(){let i=$i;rt.ctx.clearRect(i.x,i.y,i.w,i.h),rt.box(i.x-1,i.y-1,i.w+2,i.h+2,rt.pal.accent),rt.box(i.x-2,i.y-2,i.w+4,i.h+4,"#000")}function jf(i,t,e,n,s){let r=rt.pal;rt.text(i,St/2,e,{font:9,align:"center",color:r.accent});let o=30,a=6,l=Math.round(St/2-(4*o+3*a)/2);for(let c=0;c<4;c++){let h=l+c*(o+a),u=c<t.length;rt.rect(h,e+12,o,30,"#000"),rt.box(h,e+12,o,30,u?r.accentHi:r.lineLo),u?rt.bigText(t[c],h+o/2,e+14,{scale:2,font:11,color:r.accentHi}):s&&c===t.length&&Math.floor(n/400)%2===0&&rt.rect(h+9,e+35,12,2,r.accent)}}function Qf(){rt.dim(.78),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",St/2,8,{scale:2,font:14}),rt.button("settings",St-50,12,38,16,"\uC124\uC815",{font:9}),Kf()}function Ky(i){let t=performance.now()-P.call.ringFx;if(!P.call.ringFx||t>1700)return;let e=Math.floor(t/400)%2===0,n=e?Math.round(Math.sin(i/18)*2):0;rt.bigText("\uB530\uB974\uB989!",St/2+n,$i.y+8,{scale:2,font:14,color:e?te.gold:rt.pal.ink})}function jy(i){let t=rt.pal,e=P.call;Qf(),be.setCard(e.calling?"\uAC70\uB294 \uC911":"\uC0C1\uB300 \uBC88\uD638",e.digits.padEnd(4,"\xB7")),jf("\uC0C1\uB300 \uBC88\uD638",e.digits,350,i,!e.calling),e.digits&&!P.settings&&rt.button("call:clear",St-46,364,36,24,"\uB04A\uAE30",{font:9});let n,s=t.dim;P.roomT?P.err?(n=P.err,s=te.warn):e.calling?(n="\uB69C\uB974\uB974\u2026 \uAC70\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),s=t.accentHi):e.digits?n=`\uB098\uBA38\uC9C0 ${4-e.digits.length}\uC790\uB9AC\uB97C \uAC70\uC138\uC694`:n="\uC0C1\uB300 \uBC88\uD638 4\uC790\uB9AC\uB97C \uB2E4\uC774\uC5BC\uB85C \uAC70\uC138\uC694":(n="\uC628\uB77C\uC778 \uC5F0\uACB0 \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",s=te.warn),rt.lines(n,St-24,9).slice(0,2).forEach((o,a)=>rt.text(o,St/2,398+a*11,{font:9,align:"center",color:s})),rt.button("call:create",16,422,128,26,"\uB0B4 \uBC88\uD638 \uB9CC\uB4E4\uAE30",{style:"primary",font:11,disabled:!P.roomT||e.calling}),rt.button("call:bot",150,422,104,26,"\uBD07\uACFC \uC5F0\uC2B5",{font:11,disabled:e.calling}),rt.text("\uAD6C\uBA4D\uC744 \uBA48\uCDA4\uC1E0\uAE4C\uC9C0 \uB3CC\uB824 \uB193\uAC70\uB098 \uD1A1 \uB204\uB974\uC138\uC694",St/2,456,{font:9,align:"center",color:t.dim})}function Qy(i){let t=P.view,e=rt.pal;Qf(),be.setCard("\uB0B4 \uBC88\uD638",t.code),Ky(i),jf("\uB0B4 \uBC88\uD638",t.code,350,i,!1);let n=P.call.ringFx&&performance.now()-P.call.ringFx<1700,s=n?"\uB530\uB974\uB989! \uC804\uD654\uAC00 \uC654\uC2B5\uB2C8\uB2E4":"\uC774 \uBC88\uD638\uB85C \uC804\uD654\uAC00 \uC624\uBA74 \uC2DC\uC791\uD569\uB2C8\uB2E4"+".".repeat(Math.floor(i/400)%4);rt.text(s,St/2,398,{font:9,align:"center",color:n?te.gold:e.dim}),rt.button("share",16,414,120,26,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{style:"primary",font:11}),rt.button("qr",142,414,50,26,"QR",{font:11}),rt.button("cancel-wait",198,414,56,26,"\uB04A\uAE30",{font:11});let r=P.shareMsg;if(r&&performance.now()-r.t<3e3?rt.text(r.text,St/2,446,{font:9,align:"center",color:e.accentHi}):rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,St/2,446,{font:9,align:"center",color:e.dim}),Yt.online||rt.text("\u25CB \uAD50\uD658\uAD6D\uACFC \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",St/2,460,{font:9,align:"center",color:te.warn}),P.call.qr){rt.dim(.8);let o=Nc(t.code);rt.panel(30,110,St-60,250),rt.text("\uCE74\uBA54\uB77C\uB85C \uCC0D\uC73C\uBA74 \uBC14\uB85C \uAC78\uB9BD\uB2C8\uB2E4",St/2,122,{font:9,align:"center",color:e.accent});let a=rt.qr(o,0,-9999,1)-2,l=Math.max(2,Math.floor(180/(a+2))),c=(a+2)*l;rt.qr(o,Math.round(St/2-c/2),138,l),rt.button("qr:close",St/2-40,330,80,22,"\uB2EB\uAE30",{font:11})}}function tv(i){rt.rect(0,0,St,_n,"#000"),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",St/2,8,{scale:2,font:14}),Kf(),rt.bigText("\uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4",St/2,362,{scale:2,font:11,color:te.gold});let t=P.view;t&&rt.text(`${t.names.w||"?"}(\uBC31)  vs  ${t.names.b||"?"}(\uD751)`,St/2,400,{font:9,align:"center",color:rt.pal.dim})}function ev(){let i=rt.pal;if(rt.dim(.25),rt.vignette(),rt.frame(),rt.letter("\uBBFF\uC74C\uC758 \uCCB4\uC2A4",St/2,18,{scale:2,font:14}),rt.button("settings",St-50,12,38,16,"\uC124\uC815",{font:9}),pe==="lan"){rt.plaque(40,330,St-80,136),rt.text("\uC0C1\uB300 \uC811\uC18D \uC8FC\uC18C",St/2,340,{font:9,color:i.accent,align:"center"});let t=Zf(),e=rt.qr(t,St/2-33,352,2);rt.text(t.replace(/^https?:\/\//,"").replace(/\/$/,""),St/2,356+e,{font:9,align:"center"})}rt.text(Yt.online||P.roomT?"\u25CF \uC5F0\uACB0\uB428":"\u25CB \uC5F0\uACB0 \uC911\u2026",14,462,{font:9,color:Yt.online||P.roomT?te.green:i.dim})}function nv(i){if(pe==="web")return Qy(i);let t=P.view,e=rt.pal;if(rt.dim(.35),rt.vignette(),rt.frame(),rt.plaque(20,60,St-40,340),rt.text("\uC0C1\uB300\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911"+".".repeat(Math.floor(i/400)%4),St/2,74,{font:11,align:"center",color:e.dim}),rt.text("\uBC29 \uCF54\uB4DC",St/2,100,{font:9,align:"center",color:e.accent}),rt.letter(t.code,St/2,112,{scale:3,font:14}),pe==="lan"){let n=`${Zf()}?room=${t.code}`,s=rt.qr(n,St/2-41,180,2);rt.text(n.replace(/^https?:\/\//,""),St/2,184+s,{font:9,align:"center"})}else if(pe==="web"){let n=Nc(t.code),s=rt.qr(n,St/2-41,166,2);rt.text(n.replace(/^https?:\/\//,""),St/2,170+s,{font:9,align:"center"}),rt.button("share",St/2-60,192+s,120,24,"\uB9C1\uD06C \uBCF4\uB0B4\uAE30",{font:11,style:"primary"});let r=P.shareMsg;r&&performance.now()-r.t<3e3?rt.text(r.text,St/2,222+s,{font:9,align:"center",color:e.accentHi}):rt.text("\uAC19\uC774 \uC788\uC73C\uBA74 QR\uC744 \uCC0D\uC5B4\uB3C4 \uB429\uB2C8\uB2E4",St/2,222+s,{font:9,align:"center",color:e.dim}),Yt.online||rt.text("\u25CB \uC5F0\uACB0 \uC11C\uBC84\uC640 \uB04A\uAE40 \xB7 \uB2E4\uC2DC \uC787\uB294 \uC911\u2026",St/2,312,{font:9,align:"center",color:te.warn})}else["\uB2E4\uB978 \uD3F0\uC5D0\uC11C \uC774 \uD398\uC774\uC9C0\uB97C \uC5F4\uACE0",'"\uC5F4\uB9B0 \uBC29"\uC5D0\uC11C \uC774 \uBC29\uC744 \uB204\uB974\uAC70\uB098',"\uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694."].forEach((s,r)=>rt.text(s,St/2,200+r*14,{font:9,align:"center"})),rt.text("\uB450 \uD3F0 \uBAA8\uB450 claude.ai\uC5D0 \uB85C\uADF8\uC778\uD574\uC57C \uD569\uB2C8\uB2E4",St/2,262,{font:9,align:"center",color:e.dim});rt.text(`\uB2F9\uC2E0\uC740 ${t.you==="w"?"\uBC31":"\uD751"} \xB7 ${t.names[t.you]}`,St/2,330,{font:9,color:e.dim,align:"center"}),rt.button("cancel-wait",St/2-40,352,80,22,"\uCDE8\uC18C",{font:11})}function td(){let i=aa(),t=[];i.board.forEach((e,n)=>{e&&t.push({sq:n,id:e.id,type:e.type,color:e.color,shield:!1})}),ie.sync(t,null)}var Xf=performance.now();function ed(i){let t=Math.min(.1,(i-Xf)/1e3);Xf=i,P.mode==="game"&&P.view?ie.setHighlights(Vf(P.view,P,i)):ie.setHighlights([]),ie.setSelected(P.mode==="game"&&P.sel!=null?va(P.sel)?.id:null);let e=P.view;if(P.mode==="game"&&e){let n=P.bubble&&performance.now()-P.bubble.t0<1600,s=n?P.bubble.by:e.status==="over"&&e.result?.winner||e.turn;ie.kingView={rect:Lc(),shown:s,mode:n?"shout":"turn"}}else ie.kingView=null;ie.titleView=P.mode==="title",P.call.pickup&&performance.now()-P.call.pickup>950&&(P.call.pickup=0,ie.flash=1),ie.phoneView=pe==="web"&&(["lobby","waiting-join","waiting"].includes(P.mode)||P.call.pickup)?{rect:$i}:null,be&&(be.enabled=_a()),ie.render(t),rt.begin(),P.mode==="title"?Hf(rt,i,{online:pe==="lan"?Yt.online:null,tagline:pe==="lan"?void 0:"\uC628\uB77C\uC778 \xB7 1:1 \xB7 \uC544\uBB34\uB3C4 \uBBFF\uC9C0 \uB9C8\uC138\uC694"}):P.call.pickup?tv(i):(P.mode==="lobby"||P.mode==="waiting-join")&&pe==="web"?jy(i):P.mode==="lobby"||P.mode==="waiting-join"?ev():P.mode==="waiting"&&P.view?nv(i):P.mode==="game"&&P.view?Gf(rt,ie,P.view,{...P,online:Yt.online},i,Vy()):P.mode==="boot"&&(rt.rect(0,0,St,_n,"#000"),rt.text("\uBD88\uB7EC\uC624\uB294 \uC911\u2026",St/2,_n/2-6,{align:"center",color:rt.pal.dim})),P.settings&&(Wf(rt,P.theme),rt.text(`\uD130\uCE58 \uD655\uC778: \uB3D9\uC2DC\uC5D0 \uC190\uAC00\uB77D ${P.touchMax}\uAC1C \uC778\uC2DD`,St/2,449,{font:9,align:"center",color:P.touchMax>=2?te.cyan:rt.pal.dim})),Ir.draw(),requestAnimationFrame(ed)}async function iv(){requestAnimationFrame(ed);try{await Promise.race([Promise.all(yf.map(i=>document.fonts.load(i))),new Promise(i=>setTimeout(i,3e3))])}catch{}if(pe==="lan")try{P.info=await(await fetch("/api/info")).json()}catch{}ie.theme=P.theme,await ie.init(P.info?.textures||[]),Bc(P.theme),td(),P.mode="title",pe==="lan"?(P.lan=Yt.use(new ra),P.lan.connect(),P.roomParam&&!P.lan.token&&Gs()):pe==="web"?P.roomT=Cr.available()?new Cr:null:ha.open().then(i=>{P.roomT=i,P.roomChecked=!0,P.mode==="lobby"&&Gs()})}iv();window.__dbg={app:P,scene:ie,hub:Yt,presenter:Ir,phone:be,PHONE_RECT:$i,squareToScreen:i=>ie.squareToScreen(i),applyTheme:Bc};
