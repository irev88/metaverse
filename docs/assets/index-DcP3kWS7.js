(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="174",qs={ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},td=0,oc=1,ed=2,Vh=1,Gh=2,Ei=3,ts=0,Fn=1,tn=2,Ii=0,Zs=1,Do=2,ac=3,rc=4,nd=5,gs=100,id=101,sd=102,od=103,ad=104,rd=200,ld=201,cd=202,hd=203,Wr=204,Vr=205,ud=206,dd=207,pd=208,fd=209,md=210,gd=211,vd=212,xd=213,_d=214,Gr=0,Xr=1,Yr=2,Fi=3,$r=4,qr=5,Zr=6,jr=7,Xh=0,Md=1,wd=2,Ki=0,Yh=1,$h=2,qh=3,Il=4,Zh=5,jh=6,Kh=7,lc="attached",yd="detached",Qh=300,eo=301,no=302,Kr=303,Qr=304,Ga=306,_i=1e3,qi=1001,La=1002,kn=1003,Jh=1004,Ao=1005,hi=1006,ba=1007,Zi=1008,Ui=1009,tu=1010,eu=1011,No=1012,Fl=1013,ws=1014,ui=1015,xi=1016,Dl=1017,Nl=1018,io=1020,nu=35902,iu=1021,su=1022,Xn=1023,ou=1024,au=1025,js=1026,so=1027,Ul=1028,kl=1029,ru=1030,zl=1031,Bl=1033,Sa=33776,Aa=33777,Ta=33778,Ea=33779,Jr=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,ol=37496,al=37808,rl=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,pl=37815,fl=37816,ml=37817,gl=37818,vl=37819,xl=37820,_l=37821,Ca=36492,Ml=36494,wl=36495,lu=36283,yl=36284,bl=36285,Sl=36286,bd=2300,Sd=2301,Ad=3200,Td=3201,cu=0,Ed=1,Qn="",_n="srgb",oo="srgb-linear",Ia="linear",ze="srgb",As=7680,cc=519,Cd=512,Pd=513,Rd=514,hu=515,Ld=516,Id=517,Fd=518,Dd=519,hc=35044,uc="300 es",Ri=2e3,Fa=2001;class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dc=1234567;const Lo=Math.PI/180,Uo=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Ol(i,t){return(i%t+t)%t}function Nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ud(i,t,e){return i!==t?(e-i)/(t-i):0}function Io(i,t,e){return(1-e)*i+e*t}function kd(i,t,e,n){return Io(i,t,1-Math.exp(-e*n))}function zd(i,t=1){return t-Math.abs(Ol(i,t*2)-t)}function Bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Od(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wd(i,t){return i+Math.random()*(t-i)}function Vd(i){return i*(.5-Math.random())}function Gd(i){i!==void 0&&(dc=i);let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xd(i){return i*Lo}function Yd(i){return i*Uo}function $d(i){return(i&i-1)===0&&i!==0}function qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jd(i,t,e,n,s){const o=Math.cos,a=Math.sin,r=o(e/2),l=a(e/2),c=o((t+n)/2),h=a((t+n)/2),u=o((t-n)/2),d=a((t-n)/2),f=o((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(r*h,l*u,l*d,r*c);break;case"YZY":i.set(l*d,r*h,l*u,r*c);break;case"ZXZ":i.set(l*u,l*d,r*h,r*c);break;case"XZX":i.set(r*h,l*g,l*f,r*c);break;case"YXY":i.set(l*f,r*h,l*g,r*c);break;case"ZYZ":i.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const X={DEG2RAD:Lo,RAD2DEG:Uo,generateUUID:bs,clamp:Me,euclideanModulo:Ol,mapLinear:Nd,inverseLerp:Ud,lerp:Io,damp:kd,pingpong:zd,smoothstep:Bd,smootherstep:Od,randInt:Hd,randFloat:Wd,randFloatSpread:Vd,seededRandom:Gd,degToRad:Xd,radToDeg:Yd,isPowerOfTwo:$d,ceilPowerOfTwo:qd,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:jd,normalize:Pn,denormalize:Vs};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(t,e,n,s,o,a,r,l,c){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c)}set(t,e,n,s,o,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],_=s[4],x=s[7],y=s[2],w=s[5],A=s[8];return o[0]=a*v+r*M+l*y,o[3]=a*m+r*_+l*w,o[6]=a*p+r*x+l*A,o[1]=c*v+h*M+u*y,o[4]=c*m+h*_+u*w,o[7]=c*p+h*x+u*A,o[2]=d*v+f*M+g*y,o[5]=d*m+f*_+g*w,o[8]=d*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*o*h+n*r*l+s*o*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,d=r*l-h*o,f=c*o-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(r*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-r*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-s*c,s*l,-s*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new _e;function uu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){const i=Da("canvas");return i.style.display="block",i}const pc={};function fs(i){i in pc||(pc[i]=!0,console.warn(i))}function Qd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Jd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fc=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ep(){const i={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(s,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===ze&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ze&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Ia:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,a){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oo]:{primaries:t,whitePoint:n,transfer:Ia,toXYZ:fc,fromXYZ:mc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:fc,fromXYZ:mc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}const Ie=ep();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ts;class np{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=Da("canvas")),Ts.width=t.width,Ts.height=t.height;const n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ts}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Da("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=Di(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ip=0;class Xa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(tr(s[a].image)):o.push(tr(s[a]))}else o=tr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?np.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sp=0;class yn extends ys{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,n=qi,s=qi,o=hi,a=Zi,r=Xn,l=Ui,c=yn.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=bs(),this.name="",this.source=new Xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _i:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _i:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Qh;yn.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,e=0,n=0,s=1){We.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,x=(f+1)/2,y=(p+1)/2,w=(h+d)/4,A=(u+v)/4,T=(g+m)/4;return _>x&&_>y?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=w/n,o=A/n):x>y?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=w/s,o=T/s):y<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(y),n=A/o,s=T/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class op extends ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new yn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends op{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class du extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ap extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,r){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[a+0],f=o[a+1],g=o[a+2],v=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-r;const p=l*d+c*f+h*g+u*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const y=Math.sqrt(_),w=Math.atan2(y,p*M);m=Math.sin(m*w)/y,r=Math.sin(r*w)/y}const x=r*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-r){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,a){const r=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[a],d=o[a+1],f=o[a+2],g=o[a+3];return t[e]=r*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-r*f,t[e+2]=c*g+h*f+r*d-l*u,t[e+3]=h*g-r*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(s/2),u=r(o/2),d=l(n/2),f=l(s/2),g=l(o/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(a-s)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(o+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(o-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(a-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+s*c-o*l,this._y=s*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-s*r,this._w=a*h-n*r-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+s*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*s-r*n),h=2*(r*e-o*s),u=2*(o*n-a*e);return this.x=e+l*c+a*u-r*h,this.y=n+l*h+r*c-o*u,this.z=s+l*u+o*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=s*l-o*r,this.y=o*a-n*l,this.z=n*r-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return er.copy(this).projectOnVector(t),this.sub(er)}reflect(t){return this.sub(er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const er=new E,gc=new en;class es{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,ii):ii.fromBufferAttribute(o,a),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$o.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox)),$o.applyMatrix4(t.matrixWorld),this.union($o)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xo),qo.subVectors(this.max,xo),Es.subVectors(t.a,xo),Cs.subVectors(t.b,xo),Ps.subVectors(t.c,xo),Bi.subVectors(Cs,Es),Oi.subVectors(Ps,Cs),os.subVectors(Es,Ps);let e=[0,-Bi.z,Bi.y,0,-Oi.z,Oi.y,0,-os.z,os.y,Bi.z,0,-Bi.x,Oi.z,0,-Oi.x,os.z,0,-os.x,-Bi.y,Bi.x,0,-Oi.y,Oi.x,0,-os.y,os.x,0];return!nr(e,Es,Cs,Ps,qo)||(e=[1,0,0,0,1,0,0,0,1],!nr(e,Es,Cs,Ps,qo))?!1:(Zo.crossVectors(Bi,Oi),e=[Zo.x,Zo.y,Zo.z],nr(e,Es,Cs,Ps,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yi=[new E,new E,new E,new E,new E,new E,new E,new E],ii=new E,$o=new es,Es=new E,Cs=new E,Ps=new E,Bi=new E,Oi=new E,os=new E,xo=new E,qo=new E,Zo=new E,as=new E;function nr(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){as.fromArray(i,o);const r=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),h=n.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const rp=new es,_o=new E,ir=new E;class ns{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);const e=_o.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_o,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ir.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(ir)),this.expandByPoint(_o.copy(t.center).sub(ir))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new E,sr=new E,jo=new E,Hi=new E,or=new E,Ko=new E,ar=new E;class Ho{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sr.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(sr);const o=t.distanceTo(e)*.5,a=-this.direction.dot(jo),r=Hi.dot(this.direction),l=-Hi.dot(jo),c=Hi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-r,d=a*r-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*o+r)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(a*o+r)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=a>0?-o:o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sr).addScaledVector(jo,d),f}intersectSphere(t,e){bi.subVectors(t.center,this.origin);const n=bi.dot(this.direction),s=bi.dot(bi)-n*n,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,s,o){or.subVectors(e,t),Ko.subVectors(n,t),ar.crossVectors(or,Ko);let a=this.direction.dot(ar),r;if(a>0){if(s)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Hi.subVectors(this.origin,t);const l=r*this.direction.dot(Ko.crossVectors(Hi,Ko));if(l<0)return null;const c=r*this.direction.dot(or.cross(Hi));if(c<0||l+c>a)return null;const h=-r*Hi.dot(ar);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,o,a,r,l,c,h,u,d,f,g,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,o,a,r,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),o=1/Rs.setFromMatrixColumn(t,1).length(),a=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-r*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*r,e[4]=g*r-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=f*r-g,e[6]=v+d*r,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*r,e[4]=-a*u,e[8]=g+f*r,e[1]=f+g*r,e[5]=a*h,e[9]=v-d*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=r*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lp,t,cp)}lookAt(t,e,n){const s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Wi.crossVectors(n,Hn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Wi.crossVectors(n,Hn)),Wi.normalize(),Qo.crossVectors(Hn,Wi),s[0]=Wi.x,s[4]=Qo.x,s[8]=Hn.x,s[1]=Wi.y,s[5]=Qo.y,s[9]=Hn.y,s[2]=Wi.z,s[6]=Qo.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],_=n[7],x=n[11],y=n[15],w=s[0],A=s[4],T=s[8],S=s[12],b=s[1],P=s[5],C=s[9],R=s[13],L=s[2],F=s[6],k=s[10],N=s[14],D=s[3],W=s[7],O=s[11],q=s[15];return o[0]=a*w+r*b+l*L+c*D,o[4]=a*A+r*P+l*F+c*W,o[8]=a*T+r*C+l*k+c*O,o[12]=a*S+r*R+l*N+c*q,o[1]=h*w+u*b+d*L+f*D,o[5]=h*A+u*P+d*F+f*W,o[9]=h*T+u*C+d*k+f*O,o[13]=h*S+u*R+d*N+f*q,o[2]=g*w+v*b+m*L+p*D,o[6]=g*A+v*P+m*F+p*W,o[10]=g*T+v*C+m*k+p*O,o[14]=g*S+v*R+m*N+p*q,o[3]=M*w+_*b+x*L+y*D,o[7]=M*A+_*P+x*F+y*W,o[11]=M*T+_*C+x*k+y*O,o[15]=M*S+_*R+x*N+y*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+o*l*u-s*c*u-o*r*d+n*c*d+s*r*f-n*l*f)+v*(+e*l*f-e*c*d+o*a*d-s*a*f+s*c*h-o*l*h)+m*(+e*c*u-e*r*f-o*a*u+n*a*f+o*r*h-n*c*h)+p*(-s*r*h-e*l*u+e*r*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=u*m*c-v*d*c+v*l*f-r*m*f-u*l*p+r*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*r*f-a*v*f-h*r*p+a*u*p,y=g*u*l-h*v*l-g*r*d+a*v*d+h*r*m-a*u*m,w=e*M+n*_+s*x+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=M*A,t[1]=(v*d*o-u*m*o-v*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(r*m*o-v*l*o+v*s*c-n*m*c-r*s*p+n*l*p)*A,t[3]=(u*l*o-r*d*o-u*s*c+n*d*c+r*s*f-n*l*f)*A,t[4]=_*A,t[5]=(h*m*o-g*d*o+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*o-a*m*o-g*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*d*o-h*l*o+h*s*c-e*d*c-a*s*f+e*l*f)*A,t[8]=x*A,t[9]=(g*u*o-h*v*o-g*n*f+e*v*f+h*n*p-e*u*p)*A,t[10]=(a*v*o-g*r*o+g*n*c-e*v*c-a*n*p+e*r*p)*A,t[11]=(h*r*o-a*u*o-h*n*c+e*u*c+a*n*f-e*r*f)*A,t[12]=y*A,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*A,t[14]=(g*r*s-a*v*s-g*n*l+e*v*l+a*n*m-e*r*m)*A,t[15]=(a*u*s-h*r*s+h*n*l-e*u*l-a*n*d+e*r*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+n,h*l-s*a,0,c*l-s*r,h*l+s*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,h=a+a,u=r+r,d=o*c,f=o*h,g=o*u,v=a*h,m=a*u,p=r*u,M=l*c,_=l*h,x=l*u,y=n.x,w=n.y,A=n.z;return s[0]=(1-(v+p))*y,s[1]=(f+x)*y,s[2]=(g-_)*y,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+_)*A,s[9]=(m-M)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Rs.set(s[0],s[1],s[2]).length();const a=Rs.set(s[4],s[5],s[6]).length(),r=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],si.copy(this);const c=1/o,h=1/a,u=1/r;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,e.setFromRotationMatrix(si),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,s,o,a,r=Ri){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(r===Ri)f=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===Fa)f=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,a,r=Ri){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-o),d=(e+t)*c,f=(n+s)*h;let g,v;if(r===Ri)g=(a+o)*u,v=-2*u;else if(r===Fa)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Rs=new E,si=new le,lp=new E(0,0,0),cp=new E(1,1,1),Wi=new E,Qo=new E,Hn=new E,vc=new le,xc=new en;class zn{constructor(t=0,e=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],a=s[4],r=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hp=0;const _c=new E,Ls=new en,Si=new le,Jo=new E,Mo=new E,up=new E,dp=new en,Mc=new E(1,0,0),wc=new E(0,1,0),yc=new E(0,0,1),bc={type:"added"},pp={type:"removed"},Is={type:"childadded",child:null},rr={type:"childremoved",child:null};class ln extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new E,e=new zn,n=new en,s=new E(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new _e}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(wc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(wc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jo.copy(t):Jo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Mo,Jo,this.up):Si.lookAt(Jo,Mo,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(Si),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pp),rr.child=t,this.dispatchEvent(rr),rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,t,up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));s.material=r}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ln.DEFAULT_UP=new E(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new E,Ai=new E,lr=new E,Ti=new E,Fs=new E,Ds=new E,Sc=new E,cr=new E,hr=new E,ur=new E,dr=new We,pr=new We,fr=new We;class ci{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),oi.subVectors(t,e),s.cross(oi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){oi.subVectors(s,e),Ai.subVectors(n,e),lr.subVectors(t,e);const a=oi.dot(oi),r=oi.dot(Ai),l=oi.dot(lr),c=Ai.dot(Ai),h=Ai.dot(lr),u=a*c-r*r;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-r*h)*d,g=(a*h-r*l)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,o,a,r,l){return this.getBarycoord(t,e,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(r,Ti.z),l)}static getInterpolatedAttribute(t,e,n,s,o,a){return dr.setScalar(0),pr.setScalar(0),fr.setScalar(0),dr.fromBufferAttribute(t,e),pr.fromBufferAttribute(t,n),fr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(dr,o.x),a.addScaledVector(pr,o.y),a.addScaledVector(fr,o.z),a}static isFrontFacing(t,e,n,s){return oi.subVectors(n,e),Ai.subVectors(t,e),oi.cross(Ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),oi.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return ci.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let a,r;Fs.subVectors(s,n),Ds.subVectors(o,n),cr.subVectors(t,n);const l=Fs.dot(cr),c=Ds.dot(cr);if(l<=0&&c<=0)return e.copy(n);hr.subVectors(t,s);const h=Fs.dot(hr),u=Ds.dot(hr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Fs,a);ur.subVectors(t,o);const f=Fs.dot(ur),g=Ds.dot(ur);if(g>=0&&f<=g)return e.copy(o);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(Ds,r);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Sc.subVectors(o,s),r=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Sc,r);const p=1/(m+v+d);return a=v*p,r=d*p,e.copy(n).addScaledVector(Fs,a).addScaledVector(Ds,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function mr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=Ol(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=mr(a,o,t+1/3),this.g=mr(a,o,t),this.b=mr(a,o,t-1/3)}return Ie.toWorkingColorSpace(this,s),this}setStyle(t,e=_n){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return Ie.fromWorkingColorSpace(Tn.copy(this),t),Math.round(Me(Tn.r*255,0,255))*65536+Math.round(Me(Tn.g*255,0,255))*256+Math.round(Me(Tn.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(Tn.copy(this),e);const n=Tn.r,s=Tn.g,o=Tn.b,a=Math.max(n,s,o),r=Math.min(n,s,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=_n){Ie.fromWorkingColorSpace(Tn.copy(this),t);const e=Tn.r,n=Tn.g,s=Tn.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(ta);const n=Io(Vi.h,ta.h,e),s=Io(Vi.s,ta.s,e),o=Io(Vi.l,ta.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Ut;Ut.NAMES=pu;let fp=0;class uo extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Zs,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Vr,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ko extends uo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new E,ea=new Gt;let mp=0;class Z{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array),o=Pn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class be extends Z{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fu extends Z{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends Z{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gp=0;const jn=new le,gr=new ln,Ns=new E,Wn=new es,wo=new es,vn=new E;class Yt extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uu(t)?fu:be)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new _e().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return gr.lookAt(t),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Wn.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];wo.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(Wn.min,wo.min),Wn.expandByPoint(vn),vn.addVectors(Wn.max,wo.max),Wn.expandByPoint(vn)):(Wn.expandByPoint(wo.min),Wn.expandByPoint(wo.max))}Wn.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)vn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(vn));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)vn.fromBufferAttribute(r,c),l&&(Ns.fromBufferAttribute(t,c),vn.add(Ns)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Z(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let T=0;T<n.count;T++)r[T]=new E,l[T]=new E;const c=new E,h=new E,u=new E,d=new Gt,f=new Gt,g=new Gt,v=new E,m=new E;function p(T,S,b){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(o,T),f.fromBufferAttribute(o,S),g.fromBufferAttribute(o,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),r[T].add(v),r[S].add(v),r[b].add(v),l[T].add(m),l[S].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let T=0,S=M.length;T<S;++T){const b=M[T],P=b.start,C=b.count;for(let R=P,L=P+C;R<L;R+=3)p(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const _=new E,x=new E,y=new E,w=new E;function A(T){y.fromBufferAttribute(s,T),w.copy(y);const S=r[T];_.copy(S),_.sub(y.multiplyScalar(y.dot(S))).normalize(),x.crossVectors(w,S);const P=x.dot(l[T])<0?-1:1;a.setXYZW(T,_.x,_.y,_.z,P)}for(let T=0,S=M.length;T<S;++T){const b=M[T],P=b.start,C=b.count;for(let R=P,L=P+C;R<L;R+=3)A(t.getX(R+0)),A(t.getX(R+1)),A(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Z(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new E,o=new E,a=new E,r=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Z(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Yt,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new le,rs=new Ho,na=new ns,Tc=new E,ia=new E,sa=new E,oa=new E,vr=new E,aa=new E,Ec=new E,ra=new E;class Be extends ln{constructor(t=new Yt,e=new ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(o&&r){aa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],u=o[l];h!==0&&(vr.fromBufferAttribute(u,t),a?aa.addScaledVector(vr,h):aa.addScaledVector(vr.sub(e),h))}e.add(aa)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(o),rs.copy(t.ray).recast(t.near),!(na.containsPoint(rs.origin)===!1&&(rs.intersectSphere(na,Tc)===null||rs.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(Ac.copy(o).invert(),rs.copy(t.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,y=_;x<y;x+=3){const w=r.getX(x),A=r.getX(x+1),T=r.getX(x+2);s=la(this,p,t,n,c,h,u,w,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=r.getX(m),_=r.getX(m+1),x=r.getX(m+2);s=la(this,a,t,n,c,h,u,M,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,y=_;x<y;x+=3){const w=x,A=x+1,T=x+2;s=la(this,p,t,n,c,h,u,w,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,_=m+1,x=m+2;s=la(this,a,t,n,c,h,u,M,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vp(i,t,e,n,s,o,a,r){let l;if(t.side===Fn?l=n.intersectTriangle(a,o,s,!0,r):l=n.intersectTriangle(s,o,a,t.side===ts,r),l===null)return null;ra.copy(r),ra.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ra);return c<e.near||c>e.far?null:{distance:c,point:ra.clone(),object:i}}function la(i,t,e,n,s,o,a,r,l,c){i.getVertexPosition(r,ia),i.getVertexPosition(l,sa),i.getVertexPosition(c,oa);const h=vp(i,t,e,n,ia,sa,oa,Ec);if(h){const u=new E;ci.getBarycoord(Ec,ia,sa,oa,u),s&&(h.uv=ci.getInterpolatedAttribute(s,r,l,c,u,new Gt)),o&&(h.uv1=ci.getInterpolatedAttribute(o,r,l,c,u,new Gt)),a&&(h.normal=ci.getInterpolatedAttribute(a,r,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new E,materialIndex:0};ci.getNormal(ia,sa,oa,d.normal),h.face=d,h.barycoord=u}return h}class Wo extends Yt{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(v,m,p,M,_,x,y,w,A,T,S){const b=x/A,P=y/T,C=x/2,R=y/2,L=w/2,F=A+1,k=T+1;let N=0,D=0;const W=new E;for(let O=0;O<k;O++){const q=O*P-R;for(let K=0;K<F;K++){const Y=K*b-C;W[v]=Y*M,W[m]=q*_,W[p]=L,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=w>0?1:-1,h.push(W.x,W.y,W.z),u.push(K/A),u.push(1-O/T),N+=1}}for(let O=0;O<T;O++)for(let q=0;q<A;q++){const K=d+q+F*O,Y=d+q+F*(O+1),V=d+(q+1)+F*(O+1),H=d+(q+1)+F*O;l.push(K,Y,H),l.push(Y,V,H),D+=6}r.addGroup(f,D,S),f+=D,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Rn(i){const t={};for(let e=0;e<i.length;e++){const n=ao(i[e]);for(const s in n)t[s]=n[s]}return t}function xp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const zo={clone:ao,merge:Rn};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oe extends uo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gu extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new E,Cc=new Gt,Pc=new Gt;class Kn extends gu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Us=-90,ks=1;class wp extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kn(Us,ks,t,e);s.layers=this.layers,this.add(s);const o=new Kn(Us,ks,t,e);o.layers=this.layers,this.add(o);const a=new Kn(Us,ks,t,e);a.layers=this.layers,this.add(a);const r=new Kn(Us,ks,t,e);r.layers=this.layers,this.add(r);const l=new Kn(Us,ks,t,e);l.layers=this.layers,this.add(l);const c=new Kn(Us,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vu extends yn{constructor(t,e,n,s,o,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:eo,super(t,e,n,s,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yp extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wo(5,5,5),o=new Oe({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Ii});o.uniforms.tEquirect.value=e;const a=new Be(s,o),r=e.minFilter;return e.minFilter===Zi&&(e.minFilter=hi),new wp(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}}class di extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bp={type:"move"};class xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new di;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Wl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new Wl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Na extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Rc=new E,Lc=new We,Ic=new We,Sp=new E,Fc=new le,ca=new E,_r=new ns,Dc=new le,Mr=new Ho;class xu extends Be{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lc,this.bindMatrix=new le,this.bindMatrixInverse=new le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new es),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ns),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ca),this.boundingSphere.expandByPoint(ca)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(s),t.ray.intersectsSphere(_r)!==!1&&(Dc.copy(s).invert(),Mr.copy(t.ray).applyMatrix4(Dc),!(this.boundingBox!==null&&Mr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new We,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Lc.fromBufferAttribute(s.attributes.skinIndex,t),Ic.fromBufferAttribute(s.attributes.skinWeight,t),Rc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const a=Ic.getComponent(o);if(a!==0){const r=Lc.getComponent(o);Fc.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(Sp.copy(Rc).applyMatrix4(Fc),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Vl extends ln{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _u extends yn{constructor(t=null,e=1,n=1,s,o,a,r,l,c=kn,h=kn,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nc=new le,Ap=new le;class Ya{constructor(t=[],e=[]){this.uuid=bs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new le)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new le;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const r=t[o]?t[o].matrixWorld:Ap;Nc.multiplyMatrices(r,e[o]),Nc.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ya(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new _u(e,t,t,Xn,ui);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let a=e[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new Vl),this.bones.push(a),this.boneInverses.push(new le().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const a=e[s];t.bones.push(a.uuid);const r=n[s];t.boneInverses.push(r.toArray())}return t}}class Ua extends Z{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zs=new le,Uc=new le,ha=[],kc=new es,Tp=new le,yo=new Be,bo=new ns;class ls extends Be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new es),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),kc.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(kc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),bo.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(bo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=t*o+1;for(let r=0;r<n.length;r++)n[r]=s[a+r]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),t.ray.intersectsSphere(bo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,zs),Uc.multiplyMatrices(n,zs),yo.matrixWorld=Uc,yo.raycast(t,ha);for(let a=0,r=ha.length;a<r;a++){const l=ha[a];l.instanceId=o,l.object=this,e.push(l)}ha.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _u(new Float32Array(s*this.count),s,this.count,Ul,ui));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=s*t;o[l]=r,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wr=new E,Ep=new E,Cp=new _e;class Xi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wr.subVectors(n,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cp.getNormalMatrix(t),s=this.coplanarPoint(wr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new ns,ua=new E;class Gl{constructor(t=new Xi,e=new Xi,n=new Xi,s=new Xi,o=new Xi,a=new Xi){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){const n=this.planes,s=t.elements,o=s[0],a=s[1],r=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-o,d-c,m-f,x-p).normalize(),n[1].setComponents(l+o,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+M).normalize(),n[3].setComponents(l-a,d-h,m-g,x-M).normalize(),n[4].setComponents(l-r,d-u,m-v,x-_).normalize(),e===Ri)n[5].setComponents(l+r,d+u,m+v,x+_).normalize();else if(e===Fa)n[5].setComponents(r,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ua.x=s.normal.x>0?t.max.x:t.min.x,ua.y=s.normal.y>0?t.max.y:t.min.y,ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pp extends uo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zc=new le,Al=new Ho,da=new ns,pa=new E;class Gs extends ln{constructor(t=new Yt,e=new Pp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=o,t.ray.intersectsSphere(da)===!1)return;zc.copy(s).invert(),Al.copy(t.ray).applyMatrix4(zc);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);pa.fromBufferAttribute(u,m),Bc(pa,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)pa.fromBufferAttribute(u,g),Bc(pa,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Bc(i,t,e,n,s,o,a){const r=Al.distanceSqToPoint(i);if(r<e){const l=new E;Al.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class yr extends yn{constructor(t,e,n,s,o,a,r,l,c,h,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Ln extends yn{constructor(t,e,n,s,o,a,r,l,c){super(t,e,n,s,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mu extends yn{constructor(t,e,n,s,o,a,r,l,c,h=js){if(h!==js&&h!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===js&&(n=ws),n===void 0&&h===so&&(n=io),super(null,s,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Rp{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=n[s]-a,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(o-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),r=this.getPoint(o),l=e||(a.isVector2?new Gt:new E);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,s=[],o=[],a=[],r=new E,l=new le;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new E)}o[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],r),a[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(s[f-1],s[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(Me(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(r,g))}a[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Me(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(r.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Xl(){let i=0,t=0,e=0,n=0;function s(o,a,r,l){i=o,t=r,e=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){s(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,u){let d=(a-o)/c-(r-o)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+u)+(l-r)/u;d*=h,f*=h,s(a,r,d,f)},calc:function(o){const a=o*o,r=a*o;return i+t*o+e*a+n*r}}}const fa=new E,br=new Xl,Sr=new Xl,Ar=new Xl;class ti extends Rp{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){const n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%o]:(fa.subVectors(s[0],s[1]).add(s[0]),c=fa);const u=s[r%o],d=s[(r+1)%o];if(this.closed||r+2<o?h=s[(r+2)%o]:(fa.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=fa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),br.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Sr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Ar.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(br.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ar.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(br.calc(l),Sr.calc(l),Ar.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Yl extends Yt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new E,h=new Gt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qs extends Yt{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function M(){const x=new E,y=new E;let w=0;const A=(e-t)/n;for(let T=0;T<=o;T++){const S=[],b=T/o,P=b*(e-t)+t;for(let C=0;C<=s;C++){const R=C/s,L=R*l+r,F=Math.sin(L),k=Math.cos(L);y.x=P*F,y.y=-b*n+m,y.z=P*k,u.push(y.x,y.y,y.z),x.set(F,A,k).normalize(),d.push(x.x,x.y,x.z),f.push(R,1-b),S.push(g++)}v.push(S)}for(let T=0;T<s;T++)for(let S=0;S<o;S++){const b=v[S][T],P=v[S+1][T],C=v[S+1][T+1],R=v[S][T+1];(t>0||S!==0)&&(h.push(b,P,R),w+=3),(e>0||S!==o-1)&&(h.push(P,C,R),w+=3)}c.addGroup(p,w,0),p+=w}function _(x){const y=g,w=new Gt,A=new E;let T=0;const S=x===!0?t:e,b=x===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let C=0;C<=s;C++){const L=C/s*l+r,F=Math.cos(L),k=Math.sin(L);A.x=S*k,A.y=m*b,A.z=S*F,u.push(A.x,A.y,A.z),d.push(0,b,0),w.x=F*.5+.5,w.y=k*.5*b+.5,f.push(w.x,w.y),g++}for(let C=0;C<s;C++){const R=y+C,L=P+C;x===!0?h.push(L,L+1,R):h.push(L+1,L,R),T+=3}c.addGroup(p,T,x===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $l extends Yt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],a=[];r(s),c(n),h(),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(o.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(M){const _=new E,x=new E,y=new E;for(let w=0;w<e.length;w+=3)f(e[w+0],_),f(e[w+1],x),f(e[w+2],y),l(_,x,y,M)}function l(M,_,x,y){const w=y+1,A=[];for(let T=0;T<=w;T++){A[T]=[];const S=M.clone().lerp(x,T/w),b=_.clone().lerp(x,T/w),P=w-T;for(let C=0;C<=P;C++)C===0&&T===w?A[T][C]=S:A[T][C]=S.clone().lerp(b,C/P)}for(let T=0;T<w;T++)for(let S=0;S<2*(w-T)-1;S++){const b=Math.floor(S/2);S%2===0?(d(A[T][b+1]),d(A[T+1][b]),d(A[T][b])):(d(A[T][b+1]),d(A[T+1][b+1]),d(A[T+1][b]))}}function c(M){const _=new E;for(let x=0;x<o.length;x+=3)_.x=o[x+0],_.y=o[x+1],_.z=o[x+2],_.normalize().multiplyScalar(M),o[x+0]=_.x,o[x+1]=_.y,o[x+2]=_.z}function h(){const M=new E;for(let _=0;_<o.length;_+=3){M.x=o[_+0],M.y=o[_+1],M.z=o[_+2];const x=m(M)/2/Math.PI+.5,y=p(M)/Math.PI+.5;a.push(x,1-y)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const _=a[M+0],x=a[M+2],y=a[M+4],w=Math.max(_,x,y),A=Math.min(_,x,y);w>.9&&A<.1&&(_<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),y<.2&&(a[M+4]+=1))}}function d(M){o.push(M.x,M.y,M.z)}function f(M,_){const x=M*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){const M=new E,_=new E,x=new E,y=new E,w=new Gt,A=new Gt,T=new Gt;for(let S=0,b=0;S<o.length;S+=9,b+=6){M.set(o[S+0],o[S+1],o[S+2]),_.set(o[S+3],o[S+4],o[S+5]),x.set(o[S+6],o[S+7],o[S+8]),w.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),T.set(a[b+4],a[b+5]),y.copy(M).add(_).add(x).divideScalar(3);const P=m(y);v(w,b+0,M,P),v(A,b+2,_,P),v(T,b+4,x,P)}}function v(M,_,x,y){y<0&&M.x===1&&(a[_]=M.x-1),x.x===0&&x.z===0&&(a[_]=y/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.vertices,t.indices,t.radius,t.details)}}class po extends $l{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new po(t.radius,t.detail)}}class ro extends Yt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(s),c=r+1,h=l+1,u=t/r,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let _=0;_<c;_++){const x=_*u-o;g.push(x,-M,0),v.push(0,0,1),m.push(_/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<r;M++){const _=M+c*p,x=M+c*(p+1),y=M+1+c*(p+1),w=M+1+c*p;f.push(_,x,w),f.push(x,y,w)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.widthSegments,t.heightSegments)}}class ka extends Yt{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){const w=y/e;u.x=-t*Math.cos(s+w*o)*Math.sin(a+_*r),u.y=t*Math.cos(a+_*r),u.z=t*Math.sin(s+w*o)*Math.sin(a+_*r),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+x,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const _=h[p][M+1],x=h[p][M],y=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(_,x,w),(p!==n-1||l<Math.PI)&&f.push(x,y,w)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lp extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class li extends uo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class In extends li{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ip extends uo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fp extends uo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wu extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Dp extends wu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Tr=new le,Oc=new E,Hc=new E;class Np{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),Tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ql extends gu{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Up extends Np{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Er extends wu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Up}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kp extends Yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class zp extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class yu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wc(){return performance.now()}const Zl="\\[\\]\\.:\\/",Bp=new RegExp("["+Zl+"]","g"),jl="[^"+Zl+"]",Op="[^"+Zl.replace("\\.","")+"]",Hp=/((?:WC+[\/:])*)/.source.replace("WC",jl),Wp=/(WCOD+)?/.source.replace("WCOD",Op),Vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),Gp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),Xp=new RegExp("^"+Hp+Wp+Vp+Gp+"$"),Yp=["material","materials","bones","map"];class $p{constructor(t,e,n){const s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Ne{constructor(t,e,n){this.path=e,this.parsedPath=n||Ne.parseTrackName(e),this.node=Ne.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ne.Composite(t,e,n):new Ne(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bp,"")}static parseTrackName(t){const e=Xp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);Yp.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===e||r.uuid===e)return r;const l=n(r.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let o=e.propertyIndex;if(t||(t=Ne.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?r=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ne.Composite=$p;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Vc=new le;class qp{constructor(t,e,n=0,s=1/0){this.ray=new Ho(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vc),this}intersectObject(t,e=!0,n=[]){return Tl(t,this,n,e),n.sort(Gc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Tl(t[s],this,n,e);return n.sort(Gc),n}}function Gc(i,t){return i.distance-t.distance}function Tl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let a=0,r=o.length;a<r;a++)Tl(o[a],t,e,!0)}}class Xc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zp extends ys{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Yc(i,t,e,n){const s=jp(n);switch(e){case iu:return i*t;case ou:return i*t;case au:return i*t*2;case Ul:return i*t/s.components*s.byteLength;case kl:return i*t/s.components*s.byteLength;case ru:return i*t*2/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case su:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case Bl:return i*t*4/s.components*s.byteLength;case Sa:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(i,16)*Math.max(t,8)/4;case Jr:case el:return Math.max(i,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ca:case Ml:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lu:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bl:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jp(i){switch(i){case Ui:case tu:return{byteLength:1,components:1};case No:case eu:case xi:return{byteLength:2,components:1};case Dl:case Nl:return{byteLength:2,components:4};case ws:case Fl:case ui:return{byteLength:4,components:1};case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bu(){let i=null,t=!1,e=null,n=null;function s(o,a){e(o,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Kp(i){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(i.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:o,update:a}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s0=`#ifdef USE_AOMAP
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
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
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
}`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,G0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,j0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,K0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lf=`#if defined( USE_POINTS_UV )
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
#endif`,cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wf=`#ifdef USE_NORMALMAP
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
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,om=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,am=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,rm=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,pm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fm=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,mm=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,gm=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,vm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xm=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,_m=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,wm=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ym=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,bm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Sm=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Am=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Tm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Em=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Pm=`uniform vec3 color;
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
}`,Rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Lm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ye={alphahash_fragment:Qp,alphahash_pars_fragment:Jp,alphamap_fragment:t0,alphamap_pars_fragment:e0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:s0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:r0,begin_vertex:l0,beginnormal_vertex:c0,bsdfs:h0,iridescence_fragment:u0,bumpmap_pars_fragment:d0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:v0,color_pars_fragment:x0,color_pars_vertex:_0,color_vertex:M0,common:w0,cube_uv_reflection_fragment:y0,defaultnormal_vertex:b0,displacementmap_pars_vertex:S0,displacementmap_vertex:A0,emissivemap_fragment:T0,emissivemap_pars_fragment:E0,colorspace_fragment:C0,colorspace_pars_fragment:P0,envmap_fragment:R0,envmap_common_pars_fragment:L0,envmap_pars_fragment:I0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:G0,envmap_vertex:D0,fog_vertex:N0,fog_pars_vertex:U0,fog_fragment:k0,fog_pars_fragment:z0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:O0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:W0,lights_pars_begin:V0,lights_toon_fragment:X0,lights_toon_pars_fragment:Y0,lights_phong_fragment:$0,lights_phong_pars_fragment:q0,lights_physical_fragment:Z0,lights_physical_pars_fragment:j0,lights_fragment_begin:K0,lights_fragment_maps:Q0,lights_fragment_end:J0,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:sf,map_fragment:of,map_pars_fragment:af,map_particle_fragment:rf,map_particle_pars_fragment:lf,metalnessmap_fragment:cf,metalnessmap_pars_fragment:hf,morphinstance_vertex:uf,morphcolor_vertex:df,morphnormal_vertex:pf,morphtarget_pars_vertex:ff,morphtarget_vertex:mf,normal_fragment_begin:gf,normal_fragment_maps:vf,normal_pars_fragment:xf,normal_pars_vertex:_f,normal_vertex:Mf,normalmap_pars_fragment:wf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Af,opaque_fragment:Tf,packing:Ef,premultiplied_alpha_fragment:Cf,project_vertex:Pf,dithering_fragment:Rf,dithering_pars_fragment:Lf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Nf,shadowmap_vertex:Uf,shadowmask_pars_fragment:kf,skinbase_vertex:zf,skinning_pars_vertex:Bf,skinning_vertex:Of,skinnormal_vertex:Hf,specularmap_fragment:Wf,specularmap_pars_fragment:Vf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Xf,transmission_fragment:Yf,transmission_pars_fragment:$f,uv_pars_fragment:qf,uv_pars_vertex:Zf,uv_vertex:jf,worldpos_vertex:Kf,background_vert:Qf,background_frag:Jf,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:om,distanceRGBA_vert:am,distanceRGBA_frag:rm,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:pm,meshlambert_vert:fm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:vm,meshnormal_vert:xm,meshnormal_frag:_m,meshphong_vert:Mm,meshphong_frag:wm,meshphysical_vert:ym,meshphysical_frag:bm,meshtoon_vert:Sm,meshtoon_frag:Am,points_vert:Tm,points_frag:Em,shadow_vert:Cm,shadow_frag:Pm,sprite_vert:Rm,sprite_frag:Lm},Vt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},gi={basic:{uniforms:Rn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Rn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Rn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Rn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Rn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Rn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Rn([Vt.points,Vt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Rn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Rn([Vt.common,Vt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Rn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Rn([Vt.sprite,Vt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Rn([Vt.common,Vt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Rn([Vt.lights,Vt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};gi.physical={uniforms:Rn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const ma={r:0,b:0,g:0},hs=new zn,Im=new le;function Fm(i,t,e,n,s,o,a){const r=new Ut(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function v(_){let x=!1;const y=g(_);y===null?p(r,l):y&&y.isColor&&(p(y,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===Ga)?(h===void 0&&(h=new Be(new Wo(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:ao(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hs.copy(x.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(hs)),h.material.toneMapped=Ie.getTransfer(y.colorSpace)!==ze,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Be(new ro(2,2),new Oe({name:"BackgroundMaterial",uniforms:ao(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ie.getTransfer(y.colorSpace)!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(ma,mu(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,x,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,x=1){r.set(_),l=x,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(r,l)},render:v,addToRenderList:m,dispose:M}}function Dm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,a=!1;function r(b,P,C,R,L){let F=!1;const k=u(R,C,P);o!==k&&(o=k,c(o.object)),F=f(b,R,C,L),F&&g(b,R,C,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,x(b,P,C,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,P,C){const R=C.wireframe===!0;let L=n[b.id];L===void 0&&(L={},n[b.id]=L);let F=L[P.id];F===void 0&&(F={},L[P.id]=F);let k=F[R];return k===void 0&&(k=d(l()),F[R]=k),k}function d(b){const P=[],C=[],R=[];for(let L=0;L<e;L++)P[L]=0,C[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:R,object:b,attributes:{},index:null}}function f(b,P,C,R){const L=o.attributes,F=P.attributes;let k=0;const N=C.getAttributes();for(const D in N)if(N[D].location>=0){const O=L[D];let q=F[D];if(q===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),O===void 0||O.attribute!==q||q&&O.data!==q.data)return!0;k++}return o.attributesNum!==k||o.index!==R}function g(b,P,C,R){const L={},F=P.attributes;let k=0;const N=C.getAttributes();for(const D in N)if(N[D].location>=0){let O=F[D];O===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(O=b.instanceColor));const q={};q.attribute=O,O&&O.data&&(q.data=O.data),L[D]=q,k++}o.attributes=L,o.attributesNum=k,o.index=R}function v(){const b=o.newAttributes;for(let P=0,C=b.length;P<C;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const C=o.newAttributes,R=o.enabledAttributes,L=o.attributeDivisors;C[b]=1,R[b]===0&&(i.enableVertexAttribArray(b),R[b]=1),L[b]!==P&&(i.vertexAttribDivisor(b,P),L[b]=P)}function M(){const b=o.newAttributes,P=o.enabledAttributes;for(let C=0,R=P.length;C<R;C++)P[C]!==b[C]&&(i.disableVertexAttribArray(C),P[C]=0)}function _(b,P,C,R,L,F,k){k===!0?i.vertexAttribIPointer(b,P,C,L,F):i.vertexAttribPointer(b,P,C,R,L,F)}function x(b,P,C,R){v();const L=R.attributes,F=C.getAttributes(),k=P.defaultAttributeValues;for(const N in F){const D=F[N];if(D.location>=0){let W=L[N];if(W===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),W!==void 0){const O=W.normalized,q=W.itemSize,K=t.get(W);if(K===void 0)continue;const Y=K.buffer,V=K.type,H=K.bytesPerElement,J=V===i.INT||V===i.UNSIGNED_INT||W.gpuType===Fl;if(W.isInterleavedBufferAttribute){const ht=W.data,Q=ht.stride,st=W.offset;if(ht.isInstancedInterleavedBuffer){for(let $=0;$<D.locationSize;$++)p(D.location+$,ht.meshPerAttribute);b.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let $=0;$<D.locationSize;$++)m(D.location+$);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let $=0;$<D.locationSize;$++)_(D.location+$,q/D.locationSize,V,O,Q*H,(st+q/D.locationSize*$)*H,J)}else{if(W.isInstancedBufferAttribute){for(let ht=0;ht<D.locationSize;ht++)p(D.location+ht,W.meshPerAttribute);b.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ht=0;ht<D.locationSize;ht++)m(D.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let ht=0;ht<D.locationSize;ht++)_(D.location+ht,q/D.locationSize,V,O,q*H,q/D.locationSize*ht*H,J)}}else if(k!==void 0){const O=k[N];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(D.location,O);break;case 3:i.vertexAttrib3fv(D.location,O);break;case 4:i.vertexAttrib4fv(D.location,O);break;default:i.vertexAttrib1fv(D.location,O)}}}}M()}function y(){T();for(const b in n){const P=n[b];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[b.id]}function A(b){for(const P in n){const C=n[P];if(C[b.id]===void 0)continue;const R=C[b.id];for(const L in R)h(R[L].object),delete R[L];delete C[b.id]}}function T(){S(),a=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:T,resetDefaultState:S,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Nm(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Um(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const T=A===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ui&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ui&&!T)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:w}}function km(i){const t=this;let e=null,n=0,s=!1,o=!1;const a=new Xi,r=new _e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const M=o?0:n,_=M*4;let x=p.clippingState||null;l.value=x,x=h(g,d,_,f);for(let y=0;y!==_;++y)x[y]=e[y];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;r.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(M,r),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function zm(i){let t=new WeakMap;function e(a,r){return r===Kr?a.mapping=eo:r===Qr&&(a.mapping=no),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Kr||r===Qr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new yp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const r=a.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Ys=4,$c=[.125,.215,.35,.446,.526,.582],vs=20,Cr=new ql,qc=new Ut;let Pr=null,Rr=0,Lr=0,Ir=!1;const ms=(1+Math.sqrt(5))/2,Bs=1/ms,Zc=[new E(-ms,Bs,0),new E(ms,Bs,0),new E(-Bs,0,ms),new E(Bs,0,ms),new E(0,ms,-Bs),new E(0,ms,Bs),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Bm=new E;class El{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){const{size:a=256,position:r=Bm}=o;Pr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pr,Rr,Lr),this._renderer.xr.enabled=Ir,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===eo||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:xi,format:Xn,colorSpace:oo,depthBuffer:!1},s=jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Om(o)),this._blurMaterial=Hm(o,t,e)}return s}_compileMaterial(t){const e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,s,o){const l=new Kn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(qc),u.toneMapping=Ki,u.autoClear=!1;const g=new ko({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),v=new Be(new Wo,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(qc),m=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));const x=this._cubeSize;ga(s,_*x,M>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(v,l),u.render(t,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===eo||t.mapping===no;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;ga(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=Zc[(s-o-1)%Zc.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",o),this._halfBlur(a,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Be(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*vs-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):vs;m>vs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const p=[];let M=0;for(let A=0;A<vs;++A){const T=A/v,S=Math.exp(-T*T/2);p.push(S),A===0?M+=S:A<m&&(M+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[s],y=3*x*(s>_-Ys?s-_+Ys:0),w=4*(this._cubeSize-x);ga(e,y,w,3*x,2*x),l.setRenderTarget(e),l.render(u,Cr)}}function Om(i){const t=[],e=[],n=[];let s=i;const o=i-Ys+1+$c.length;for(let a=0;a<o;a++){const r=Math.pow(2,s);e.push(r);let l=1/r;a>i-Ys?l=$c[a-i+Ys-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,T=w>2?0:-1,S=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];M.set(S,v*g*w),_.set(d,m*g*w);const b=[w,w,w,w,w,w];x.set(b,p*g*w)}const y=new Yt;y.setAttribute("position",new Z(M,v)),y.setAttribute("uv",new Z(_,m)),y.setAttribute("faceIndex",new Z(x,p)),t.push(y),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jc(i,t,e){const n=new Jn(i,t,e);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hm(i,t,e){const n=new Float32Array(vs),s=new E(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Kc(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Qc(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function Wm(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Kr||l===Qr,h=l===eo||l===no;if(c||h){let u=t.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return e===null&&(e=new El(i)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new El(i)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function s(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){const s={},o=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let _=0,x=M.length;_<x;_+=3){const y=M[_+0],w=M[_+1],A=M[_+2];d.push(y,w,w,A,A,y)}}else if(g!==void 0){const M=g.array;v=g.version;for(let _=0,x=M.length/3-1;_<x;_+=3){const y=_+0,w=_+1,A=_+2;d.push(y,w,w,A,A,y)}}else return;const m=new(uu(d)?fu:be)(d,1);m.version=v;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function Xm(i,t,e){let n;function s(d){n=d}let o,a;function r(d){o=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,o,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ym(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=r*(o/3);break;case i.LINES:e.lines+=r*(o/2);break;case i.LINE_STRIP:e.lines+=r*(o-1);break;case i.LINE_LOOP:e.lines+=r*o;break;case i.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,t,e){const n=new WeakMap,s=new We;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(r);if(d===void 0||d.count!==u){let b=function(){T.dispose(),n.delete(r),r.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],M=r.morphAttributes.normal||[],_=r.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let y=r.attributes.position.count*x,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*w*4*u),T=new du(A,y,w,u);T.type=ui,T.needsUpdate=!0;const S=x*4;for(let P=0;P<u;P++){const C=p[P],R=M[P],L=_[P],F=y*w*4*P;for(let k=0;k<C.count;k++){const N=k*S;g===!0&&(s.fromBufferAttribute(C,k),A[F+N+0]=s.x,A[F+N+1]=s.y,A[F+N+2]=s.z,A[F+N+3]=0),v===!0&&(s.fromBufferAttribute(R,k),A[F+N+4]=s.x,A[F+N+5]=s.y,A[F+N+6]=s.z,A[F+N+7]=0),m===!0&&(s.fromBufferAttribute(L,k),A[F+N+8]=s.x,A[F+N+9]=s.y,A[F+N+10]=s.z,A[F+N+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new Gt(y,w)},n.set(r,d),r.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function qm(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}const Su=new yn,Jc=new Mu(1,1),Au=new du,Tu=new ap,Eu=new vu,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function fo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=th[s];if(o===void 0&&(o=new Float32Array(s),th[s]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,i[a].toArray(o,r)}return o}function fn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $a(i,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2fv(this.addr,t),mn(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;i.uniform3fv(this.addr,t),mn(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4fv(this.addr,t),mn(e,t)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(fn(e,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),mn(e,n)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(fn(e,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),mn(e,n)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(fn(e,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),mn(e,n)}}function ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2iv(this.addr,t),mn(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3iv(this.addr,t),mn(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4iv(this.addr,t),mn(e,t)}}function ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2uiv(this.addr,t),mn(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3uiv(this.addr,t),mn(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4uiv(this.addr,t),mn(e,t)}}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Jc.compareFunction=hu,o=Jc):o=Su,e.setTexture2D(t||o,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tu,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Eu,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Au,s)}function fg(i){switch(i){case 5126:return Zm;case 35664:return jm;case 35665:return Km;case 35666:return Qm;case 35674:return Jm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return rg;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return pg}}function mg(i,t){i.uniform1fv(this.addr,t)}function gg(i,t){const e=fo(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){const e=fo(t,this.size,3);i.uniform3fv(this.addr,e)}function xg(i,t){const e=fo(t,this.size,4);i.uniform4fv(this.addr,e)}function _g(i,t){const e=fo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mg(i,t){const e=fo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){const e=fo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function bg(i,t){i.uniform2iv(this.addr,t)}function Sg(i,t){i.uniform3iv(this.addr,t)}function Ag(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function Eg(i,t){i.uniform2uiv(this.addr,t)}function Cg(i,t){i.uniform3uiv(this.addr,t)}function Pg(i,t){i.uniform4uiv(this.addr,t)}function Rg(i,t,e){const n=this.cache,s=t.length,o=$a(e,s);fn(n,o)||(i.uniform1iv(this.addr,o),mn(n,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Su,o[a])}function Lg(i,t,e){const n=this.cache,s=t.length,o=$a(e,s);fn(n,o)||(i.uniform1iv(this.addr,o),mn(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Tu,o[a])}function Ig(i,t,e){const n=this.cache,s=t.length,o=$a(e,s);fn(n,o)||(i.uniform1iv(this.addr,o),mn(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Eu,o[a])}function Fg(i,t,e){const n=this.cache,s=t.length,o=$a(e,s);fn(n,o)||(i.uniform1iv(this.addr,o),mn(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Au,o[a])}function Dg(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return vg;case 35666:return xg;case 35674:return _g;case 35675:return Mg;case 35676:return wg;case 5124:case 35670:return yg;case 35667:case 35671:return bg;case 35668:case 35672:return Sg;case 35669:case 35673:return Ag;case 5125:return Tg;case 36294:return Eg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Fg}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}}class kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(t,e[r.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function oh(i,t){i.seq.push(t),i.map[t.id]=t}function zg(i,t,e){const n=i.name,s=n.length;for(Fr.lastIndex=0;;){const o=Fr.exec(n),a=Fr.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===s){oh(e,c===void 0?new Ng(r,i,t):new Ug(r,i,t));break}else{let u=e.map[r];u===void 0&&(u=new kg(r),oh(e,u)),e=u}}}class Pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);zg(o,a,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ah(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bg=37297;let Og=0;function Hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const rh=new _e;function Wg(i){Ie._getMatrix(rh,Ie.workingColorSpace,i);const t=`mat3( ${rh.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case Ia:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Hg(i.getShaderSource(t),a)}else return s}function Vg(i,t){const e=Wg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gg(i,t){let e;switch(t){case Yh:e="Linear";break;case $h:e="Reinhard";break;case qh:e="Cineon";break;case Il:e="ACESFilmic";break;case jh:e="AgX";break;case Kh:e="Neutral";break;case Zh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const va=new E;function Xg(){Ie.getLuminanceCoefficients(va);const i=va.x.toFixed(4),t=va.y.toFixed(4),e=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function $g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),a=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:r}}return e}function To(i){return i!==""}function ch(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(Zg,Kg)}const jg=new Map;function Kg(i,t){let e=ye[t];if(e===void 0){const n=jg.get(t);if(n!==void 0)e=ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(Qg,Jg)}function Jg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function dh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function e1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case eo:case no:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case no:t="ENVMAP_MODE_REFRACTION";break}return t}function i1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xh:t="ENVMAP_BLENDING_MULTIPLY";break;case Md:t="ENVMAP_BLENDING_MIX";break;case wd:t="ENVMAP_BLENDING_ADD";break}return t}function s1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function o1(i,t,e,n){const s=i.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=t1(e),c=e1(e),h=n1(e),u=i1(e),d=s1(e),f=Yg(e),g=$g(o),v=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(To).join(`
`),p.length>0&&(p+=`
`)):(m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),p=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?ye.tonemapping_pars_fragment:"",e.toneMapping!==Ki?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),Xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(To).join(`
`)),a=Cl(a),a=ch(a,e),a=hh(a,e),r=Cl(r),r=ch(r,e),r=hh(r,e),a=uh(a),r=uh(r),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+a,x=M+p+r,y=ah(s,s.VERTEX_SHADER,_),w=ah(s,s.FRAGMENT_SHADER,x);s.attachShader(v,y),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(v).trim(),R=s.getShaderInfoLog(y).trim(),L=s.getShaderInfoLog(w).trim();let F=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,w);else{const N=lh(s,y,"vertex"),D=lh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+N+`
`+D)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||L==="")&&(k=!1);k&&(P.diagnostics={runnable:F,programLog:C,vertexShader:{log:R,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(y),s.deleteShader(w),T=new Pa(s,v),S=qg(s,v)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Bg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Og++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=w,this}let a1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new l1(t),e.set(t,n)),n}}class l1{constructor(t){this.id=a1++,this.code=t,this.usedTimes=0}}function c1(i,t,e,n,s,o,a){const r=new Hl,l=new r1,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,C,R){const L=C.fog,F=R.geometry,k=S.isMeshStandardMaterial?C.environment:null,N=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),D=N&&N.mapping===Ga?N.image.height:null,W=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const O=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,q=O!==void 0?O.length:0;let K=0;F.morphAttributes.position!==void 0&&(K=1),F.morphAttributes.normal!==void 0&&(K=2),F.morphAttributes.color!==void 0&&(K=3);let Y,V,H,J;if(W){const me=gi[W];Y=me.vertexShader,V=me.fragmentShader}else Y=S.vertexShader,V=S.fragmentShader,l.update(S),H=l.getVertexShaderID(S),J=l.getFragmentShaderID(S);const ht=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),st=R.isInstancedMesh===!0,$=R.isBatchedMesh===!0,tt=!!S.map,yt=!!S.matcap,rt=!!N,z=!!S.aoMap,xt=!!S.lightMap,at=!!S.bumpMap,St=!!S.normalMap,dt=!!S.displacementMap,Dt=!!S.emissiveMap,At=!!S.metalnessMap,B=!!S.roughnessMap,I=S.anisotropy>0,it=S.clearcoat>0,pt=S.dispersion>0,_t=S.iridescence>0,Mt=S.sheen>0,kt=S.transmission>0,Et=I&&!!S.anisotropyMap,Lt=it&&!!S.clearcoatMap,Ft=it&&!!S.clearcoatNormalMap,Ct=it&&!!S.clearcoatRoughnessMap,Nt=_t&&!!S.iridescenceMap,Qt=_t&&!!S.iridescenceThicknessMap,ie=Mt&&!!S.sheenColorMap,$t=Mt&&!!S.sheenRoughnessMap,we=!!S.specularMap,ce=!!S.specularColorMap,Ce=!!S.specularIntensityMap,et=kt&&!!S.transmissionMap,Ht=kt&&!!S.thicknessMap,vt=!!S.gradientMap,bt=!!S.alphaMap,Tt=S.alphaTest>0,Bt=!!S.alphaHash,ue=!!S.extensions;let Te=Ki;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Te=i.toneMapping);const Re={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:V,defines:S.defines,customVertexShaderID:H,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:$,batchingColor:$&&R._colorsTexture!==null,instancing:st,instancingColor:st&&R.instanceColor!==null,instancingMorph:st&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:oo,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:yt,envMap:rt,envMapMode:rt&&N.mapping,envMapCubeUVHeight:D,aoMap:z,lightMap:xt,bumpMap:at,normalMap:St,displacementMap:d&&dt,emissiveMap:Dt,normalMapObjectSpace:St&&S.normalMapType===Ed,normalMapTangentSpace:St&&S.normalMapType===cu,metalnessMap:At,roughnessMap:B,anisotropy:I,anisotropyMap:Et,clearcoat:it,clearcoatMap:Lt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:Ct,dispersion:pt,iridescence:_t,iridescenceMap:Nt,iridescenceThicknessMap:Qt,sheen:Mt,sheenColorMap:ie,sheenRoughnessMap:$t,specularMap:we,specularColorMap:ce,specularIntensityMap:Ce,transmission:kt,transmissionMap:et,thicknessMap:Ht,gradientMap:vt,opaque:S.transparent===!1&&S.blending===Zs&&S.alphaToCoverage===!1,alphaMap:bt,alphaTest:Tt,alphaHash:Bt,combine:S.combine,mapUv:tt&&v(S.map.channel),aoMapUv:z&&v(S.aoMap.channel),lightMapUv:xt&&v(S.lightMap.channel),bumpMapUv:at&&v(S.bumpMap.channel),normalMapUv:St&&v(S.normalMap.channel),displacementMapUv:dt&&v(S.displacementMap.channel),emissiveMapUv:Dt&&v(S.emissiveMap.channel),metalnessMapUv:At&&v(S.metalnessMap.channel),roughnessMapUv:B&&v(S.roughnessMap.channel),anisotropyMapUv:Et&&v(S.anisotropyMap.channel),clearcoatMapUv:Lt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:$t&&v(S.sheenRoughnessMap.channel),specularMapUv:we&&v(S.specularMap.channel),specularColorMapUv:ce&&v(S.specularColorMap.channel),specularIntensityMapUv:Ce&&v(S.specularIntensityMap.channel),transmissionMapUv:et&&v(S.transmissionMap.channel),thicknessMapUv:Ht&&v(S.thicknessMap.channel),alphaMapUv:bt&&v(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(St||I),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!F.attributes.uv&&(tt||bt),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Q,skinning:R.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&Ie.getTransfer(S.map.colorSpace)===ze,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(S.emissiveMap.colorSpace)===ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&S.extensions.multiDraw===!0||$)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),S.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reverseDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),S.push(r.mask)}function x(S){const b=g[S.type];let P;if(b){const C=gi[b];P=zo.clone(C.uniforms)}else P=S.uniforms;return P}function y(S,b){let P;for(let C=0,R=h.length;C<R;C++){const L=h[C];if(L.cacheKey===b){P=L,++P.usedTimes;break}}return P===void 0&&(P=new o1(i,b,S,o),h.push(P)),P}function w(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:T}}function h1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function n(a){i.delete(a)}function s(a,r,l){i.get(a)[r]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function u1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ph(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function r(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||u1),n.length>1&&n.sort(d||ph),s.length>1&&s.sort(d||ph)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:r,unshift:l,finish:h,sort:c}}function d1(){let i=new WeakMap;function t(n,s){const o=i.get(n);let a;return o===void 0?(a=new fh,i.set(n,[a])):s>=o.length?(a=new fh,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function p1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Ut};break;case"SpotLight":e={position:new E,direction:new E,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function f1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let m1=0;function g1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v1(i){const t=new p1,e=f1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,o=new le,a=new le;function r(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,_=0,x=0,y=0,w=0,A=0;c.sort(g1);for(let S=0,b=c.length;S<b;S++){const P=c[S],C=P.color,R=P.intensity,L=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*R,u+=C.g*R,d+=C.b*R;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],R);A++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const N=P.shadow,D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,n.directionalShadow[f]=D,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(C).multiplyScalar(R),k.distance=L,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[v]=k;const N=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,N.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[v]=N.matrix,P.castShadow){const D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,n.spotShadow[v]=D,n.spotShadowMap[v]=F,x++}v++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(C).multiplyScalar(R),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const N=P.shadow,D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,D.shadowCameraNear=N.camera.near,D.shadowCameraFar=N.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(R),k.groundColor.copy(P.groundColor).multiplyScalar(R),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Vt.LTC_FLOAT_1,n.rectAreaLTC2=Vt.LTC_FLOAT_2):(n.rectAreaLTC1=Vt.LTC_HALF_1,n.rectAreaLTC2=Vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==M||T.numPointShadows!==_||T.numSpotShadows!==x||T.numSpotMaps!==y||T.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,T.directionalLength=f,T.pointLength=g,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=M,T.numPointShadows=_,T.numSpotShadows=x,T.numSpotMaps=y,T.numLightProbes=A,n.version=m1++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const _=c[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),o.copy(_.matrixWorld),o.premultiply(m),a.extractRotation(o),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:n}}function mh(i){const t=new v1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function x1(i){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let r;return a===void 0?(r=new mh(i),t.set(s,[r])):o>=a.length?(r=new mh(i),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}const _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
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
}`;function w1(i,t,e){let n=new Gl;const s=new Gt,o=new Gt,a=new We,r=new Ip({depthPacking:Td}),l=new Fp,c={},h=e.maxTextureSize,u={[ts]:Fn,[Fn]:ts,[tn]:tn},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:_1,fragmentShader:M1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new Z(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let p=this.type;this.render=function(w,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Ii),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const R=p!==Ei&&this.type===Ei,L=p===Ei&&this.type!==Ei;for(let F=0,k=w.length;F<k;F++){const N=w[F],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const W=D.getFrameExtents();if(s.multiply(W),o.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/W.x),s.x=o.x*W.x,D.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/W.y),s.y=o.y*W.y,D.mapSize.y=o.y)),D.map===null||R===!0||L===!0){const q=this.type!==Ei?{minFilter:kn,magFilter:kn}:{};D.map!==null&&D.map.dispose(),D.map=new Jn(s.x,s.y,q),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const O=D.getViewportCount();for(let q=0;q<O;q++){const K=D.getViewport(q);a.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),C.viewport(a),D.updateMatrices(N,q),n=D.getFrustum(),x(A,T,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===Ei&&M(D,T),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,P)};function M(w,A){const T=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Jn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,T,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,T,f,v,null)}function _(w,A,T,S){let b=null;const P=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=T.isPointLight===!0?l:r,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const C=b.uuid,R=A.uuid;let L=c[C];L===void 0&&(L={},c[C]=L);let F=L[R];F===void 0&&(F=b.clone(),L[R]=F,A.addEventListener("dispose",y)),b=F}if(b.visible=A.visible,b.wireframe=A.wireframe,S===Ei?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const C=i.properties.get(b);C.light=T}return b}function x(w,A,T,S,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Ei)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const R=t.update(w),L=w.material;if(Array.isArray(L)){const F=R.groups;for(let k=0,N=F.length;k<N;k++){const D=F[k],W=L[D.materialIndex];if(W&&W.visible){const O=_(w,W,S,b);w.onBeforeShadow(i,w,A,T,R,O,D),i.renderBufferDirect(T,null,R,O,w,D),w.onAfterShadow(i,w,A,T,R,O,D)}}}else if(L.visible){const F=_(w,L,S,b);w.onBeforeShadow(i,w,A,T,R,F,null),i.renderBufferDirect(T,null,R,F,w,null),w.onAfterShadow(i,w,A,T,R,F,null)}}const C=w.children;for(let R=0,L=C.length;R<L;R++)x(C[R],A,T,S,b)}function y(w){w.target.removeEventListener("dispose",y);for(const T in c){const S=c[T],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const y1={[Gr]:Xr,[Yr]:Zr,[$r]:jr,[Fi]:qr,[Xr]:Gr,[Zr]:Yr,[jr]:$r,[qr]:Fi};function b1(i,t){function e(){let et=!1;const Ht=new We;let vt=null;const bt=new We(0,0,0,0);return{setMask:function(Tt){vt!==Tt&&!et&&(i.colorMask(Tt,Tt,Tt,Tt),vt=Tt)},setLocked:function(Tt){et=Tt},setClear:function(Tt,Bt,ue,Te,Re){Re===!0&&(Tt*=Te,Bt*=Te,ue*=Te),Ht.set(Tt,Bt,ue,Te),bt.equals(Ht)===!1&&(i.clearColor(Tt,Bt,ue,Te),bt.copy(Ht))},reset:function(){et=!1,vt=null,bt.set(-1,0,0,0)}}}function n(){let et=!1,Ht=!1,vt=null,bt=null,Tt=null;return{setReversed:function(Bt){if(Ht!==Bt){const ue=t.get("EXT_clip_control");Ht?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);const Te=Tt;Tt=null,this.setClear(Te)}Ht=Bt},getReversed:function(){return Ht},setTest:function(Bt){Bt?ht(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(Bt){vt!==Bt&&!et&&(i.depthMask(Bt),vt=Bt)},setFunc:function(Bt){if(Ht&&(Bt=y1[Bt]),bt!==Bt){switch(Bt){case Gr:i.depthFunc(i.NEVER);break;case Xr:i.depthFunc(i.ALWAYS);break;case Yr:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case $r:i.depthFunc(i.EQUAL);break;case qr:i.depthFunc(i.GEQUAL);break;case Zr:i.depthFunc(i.GREATER);break;case jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=Bt}},setLocked:function(Bt){et=Bt},setClear:function(Bt){Tt!==Bt&&(Ht&&(Bt=1-Bt),i.clearDepth(Bt),Tt=Bt)},reset:function(){et=!1,vt=null,bt=null,Tt=null,Ht=!1}}}function s(){let et=!1,Ht=null,vt=null,bt=null,Tt=null,Bt=null,ue=null,Te=null,Re=null;return{setTest:function(me){et||(me?ht(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(me){Ht!==me&&!et&&(i.stencilMask(me),Ht=me)},setFunc:function(me,nn,cn){(vt!==me||bt!==nn||Tt!==cn)&&(i.stencilFunc(me,nn,cn),vt=me,bt=nn,Tt=cn)},setOp:function(me,nn,cn){(Bt!==me||ue!==nn||Te!==cn)&&(i.stencilOp(me,nn,cn),Bt=me,ue=nn,Te=cn)},setLocked:function(me){et=me},setClear:function(me){Re!==me&&(i.clearStencil(me),Re=me)},reset:function(){et=!1,Ht=null,vt=null,bt=null,Tt=null,Bt=null,ue=null,Te=null,Re=null}}}const o=new e,a=new n,r=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,_=null,x=null,y=null,w=null,A=new Ut(0,0,0),T=0,S=!1,b=null,P=null,C=null,R=null,L=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(D)[1]),k=N>=1):D.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),k=N>=2);let W=null,O={};const q=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),Y=new We().fromArray(q),V=new We().fromArray(K);function H(et,Ht,vt,bt){const Tt=new Uint8Array(4),Bt=i.createTexture();i.bindTexture(et,Bt),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<vt;ue++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(Ht,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Ht+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Bt}const J={};J[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),ht(i.DEPTH_TEST),a.setFunc(Fi),at(!1),St(oc),ht(i.CULL_FACE),z(Ii);function ht(et){h[et]!==!0&&(i.enable(et),h[et]=!0)}function Q(et){h[et]!==!1&&(i.disable(et),h[et]=!1)}function st(et,Ht){return u[et]!==Ht?(i.bindFramebuffer(et,Ht),u[et]=Ht,et===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ht),et===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ht),!0):!1}function $(et,Ht){let vt=f,bt=!1;if(et){vt=d.get(Ht),vt===void 0&&(vt=[],d.set(Ht,vt));const Tt=et.textures;if(vt.length!==Tt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let Bt=0,ue=Tt.length;Bt<ue;Bt++)vt[Bt]=i.COLOR_ATTACHMENT0+Bt;vt.length=Tt.length,bt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(vt)}function tt(et){return g!==et?(i.useProgram(et),g=et,!0):!1}const yt={[gs]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[sd]:i.FUNC_REVERSE_SUBTRACT};yt[od]=i.MIN,yt[ad]=i.MAX;const rt={[rd]:i.ZERO,[ld]:i.ONE,[cd]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[md]:i.SRC_ALPHA_SATURATE,[pd]:i.DST_COLOR,[ud]:i.DST_ALPHA,[hd]:i.ONE_MINUS_SRC_COLOR,[Vr]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[dd]:i.ONE_MINUS_DST_ALPHA,[gd]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function z(et,Ht,vt,bt,Tt,Bt,ue,Te,Re,me){if(et===Ii){v===!0&&(Q(i.BLEND),v=!1);return}if(v===!1&&(ht(i.BLEND),v=!0),et!==nd){if(et!==m||me!==S){if((p!==gs||x!==gs)&&(i.blendEquation(i.FUNC_ADD),p=gs,x=gs),me)switch(et){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}M=null,_=null,y=null,w=null,A.set(0,0,0),T=0,m=et,S=me}return}Tt=Tt||Ht,Bt=Bt||vt,ue=ue||bt,(Ht!==p||Tt!==x)&&(i.blendEquationSeparate(yt[Ht],yt[Tt]),p=Ht,x=Tt),(vt!==M||bt!==_||Bt!==y||ue!==w)&&(i.blendFuncSeparate(rt[vt],rt[bt],rt[Bt],rt[ue]),M=vt,_=bt,y=Bt,w=ue),(Te.equals(A)===!1||Re!==T)&&(i.blendColor(Te.r,Te.g,Te.b,Re),A.copy(Te),T=Re),m=et,S=!1}function xt(et,Ht){et.side===tn?Q(i.CULL_FACE):ht(i.CULL_FACE);let vt=et.side===Fn;Ht&&(vt=!vt),at(vt),et.blending===Zs&&et.transparent===!1?z(Ii):z(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),a.setFunc(et.depthFunc),a.setTest(et.depthTest),a.setMask(et.depthWrite),o.setMask(et.colorWrite);const bt=et.stencilWrite;r.setTest(bt),bt&&(r.setMask(et.stencilWriteMask),r.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),r.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),Dt(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(et){b!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),b=et)}function St(et){et!==td?(ht(i.CULL_FACE),et!==P&&(et===oc?i.cullFace(i.BACK):et===ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),P=et}function dt(et){et!==C&&(k&&i.lineWidth(et),C=et)}function Dt(et,Ht,vt){et?(ht(i.POLYGON_OFFSET_FILL),(R!==Ht||L!==vt)&&(i.polygonOffset(Ht,vt),R=Ht,L=vt)):Q(i.POLYGON_OFFSET_FILL)}function At(et){et?ht(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function B(et){et===void 0&&(et=i.TEXTURE0+F-1),W!==et&&(i.activeTexture(et),W=et)}function I(et,Ht,vt){vt===void 0&&(W===null?vt=i.TEXTURE0+F-1:vt=W);let bt=O[vt];bt===void 0&&(bt={type:void 0,texture:void 0},O[vt]=bt),(bt.type!==et||bt.texture!==Ht)&&(W!==vt&&(i.activeTexture(vt),W=vt),i.bindTexture(et,Ht||J[et]),bt.type=et,bt.texture=Ht)}function it(){const et=O[W];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function _t(){try{i.compressedTexImage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Mt(){try{i.texSubImage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function kt(){try{i.texSubImage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Et(){try{i.compressedTexSubImage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Lt(){try{i.compressedTexSubImage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ft(){try{i.texStorage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ct(){try{i.texStorage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Nt(){try{i.texImage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Qt(){try{i.texImage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function ie(et){Y.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),Y.copy(et))}function $t(et){V.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),V.copy(et))}function we(et,Ht){let vt=c.get(Ht);vt===void 0&&(vt=new WeakMap,c.set(Ht,vt));let bt=vt.get(et);bt===void 0&&(bt=i.getUniformBlockIndex(Ht,et.name),vt.set(et,bt))}function ce(et,Ht){const bt=c.get(Ht).get(et);l.get(Ht)!==bt&&(i.uniformBlockBinding(Ht,bt,et.__bindingPointIndex),l.set(Ht,bt))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,O={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,_=null,x=null,y=null,w=null,A=new Ut(0,0,0),T=0,S=!1,b=null,P=null,C=null,R=null,L=null,Y.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:ht,disable:Q,bindFramebuffer:st,drawBuffers:$,useProgram:tt,setBlending:z,setMaterial:xt,setFlipSided:at,setCullFace:St,setLineWidth:dt,setPolygonOffset:Dt,setScissorTest:At,activeTexture:B,bindTexture:I,unbindTexture:it,compressedTexImage2D:pt,compressedTexImage3D:_t,texImage2D:Nt,texImage3D:Qt,updateUBOMapping:we,uniformBlockBinding:ce,texStorage2D:Ft,texStorage3D:Ct,texSubImage2D:Mt,texSubImage3D:kt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Lt,scissor:ie,viewport:$t,reset:Ce}}function S1(i,t,e,n,s,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(B,I){return f?new OffscreenCanvas(B,I):Da("canvas")}function v(B,I,it){let pt=1;const _t=At(B);if((_t.width>it||_t.height>it)&&(pt=it/Math.max(_t.width,_t.height)),pt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Mt=Math.floor(pt*_t.width),kt=Math.floor(pt*_t.height);u===void 0&&(u=g(Mt,kt));const Et=I?g(Mt,kt):u;return Et.width=Mt,Et.height=kt,Et.getContext("2d").drawImage(B,0,0,Mt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+Mt+"x"+kt+")."),Et}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),B;return B}function m(B){return B.generateMipmaps}function p(B){i.generateMipmap(B)}function M(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(B,I,it,pt,_t=!1){if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Mt=I;if(I===i.RED&&(it===i.FLOAT&&(Mt=i.R32F),it===i.HALF_FLOAT&&(Mt=i.R16F),it===i.UNSIGNED_BYTE&&(Mt=i.R8)),I===i.RED_INTEGER&&(it===i.UNSIGNED_BYTE&&(Mt=i.R8UI),it===i.UNSIGNED_SHORT&&(Mt=i.R16UI),it===i.UNSIGNED_INT&&(Mt=i.R32UI),it===i.BYTE&&(Mt=i.R8I),it===i.SHORT&&(Mt=i.R16I),it===i.INT&&(Mt=i.R32I)),I===i.RG&&(it===i.FLOAT&&(Mt=i.RG32F),it===i.HALF_FLOAT&&(Mt=i.RG16F),it===i.UNSIGNED_BYTE&&(Mt=i.RG8)),I===i.RG_INTEGER&&(it===i.UNSIGNED_BYTE&&(Mt=i.RG8UI),it===i.UNSIGNED_SHORT&&(Mt=i.RG16UI),it===i.UNSIGNED_INT&&(Mt=i.RG32UI),it===i.BYTE&&(Mt=i.RG8I),it===i.SHORT&&(Mt=i.RG16I),it===i.INT&&(Mt=i.RG32I)),I===i.RGB_INTEGER&&(it===i.UNSIGNED_BYTE&&(Mt=i.RGB8UI),it===i.UNSIGNED_SHORT&&(Mt=i.RGB16UI),it===i.UNSIGNED_INT&&(Mt=i.RGB32UI),it===i.BYTE&&(Mt=i.RGB8I),it===i.SHORT&&(Mt=i.RGB16I),it===i.INT&&(Mt=i.RGB32I)),I===i.RGBA_INTEGER&&(it===i.UNSIGNED_BYTE&&(Mt=i.RGBA8UI),it===i.UNSIGNED_SHORT&&(Mt=i.RGBA16UI),it===i.UNSIGNED_INT&&(Mt=i.RGBA32UI),it===i.BYTE&&(Mt=i.RGBA8I),it===i.SHORT&&(Mt=i.RGBA16I),it===i.INT&&(Mt=i.RGBA32I)),I===i.RGB&&it===i.UNSIGNED_INT_5_9_9_9_REV&&(Mt=i.RGB9_E5),I===i.RGBA){const kt=_t?Ia:Ie.getTransfer(pt);it===i.FLOAT&&(Mt=i.RGBA32F),it===i.HALF_FLOAT&&(Mt=i.RGBA16F),it===i.UNSIGNED_BYTE&&(Mt=kt===ze?i.SRGB8_ALPHA8:i.RGBA8),it===i.UNSIGNED_SHORT_4_4_4_4&&(Mt=i.RGBA4),it===i.UNSIGNED_SHORT_5_5_5_1&&(Mt=i.RGB5_A1)}return(Mt===i.R16F||Mt===i.R32F||Mt===i.RG16F||Mt===i.RG32F||Mt===i.RGBA16F||Mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Mt}function x(B,I){let it;return B?I===null||I===ws||I===io?it=i.DEPTH24_STENCIL8:I===ui?it=i.DEPTH32F_STENCIL8:I===No&&(it=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ws||I===io?it=i.DEPTH_COMPONENT24:I===ui?it=i.DEPTH_COMPONENT32F:I===No&&(it=i.DEPTH_COMPONENT16),it}function y(B,I){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==kn&&B.minFilter!==hi?Math.log2(Math.max(I.width,I.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?I.mipmaps.length:1}function w(B){const I=B.target;I.removeEventListener("dispose",w),T(I),I.isVideoTexture&&h.delete(I)}function A(B){const I=B.target;I.removeEventListener("dispose",A),b(I)}function T(B){const I=n.get(B);if(I.__webglInit===void 0)return;const it=B.source,pt=d.get(it);if(pt){const _t=pt[I.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&S(B),Object.keys(pt).length===0&&d.delete(it)}n.remove(B)}function S(B){const I=n.get(B);i.deleteTexture(I.__webglTexture);const it=B.source,pt=d.get(it);delete pt[I.__cacheKey],a.memory.textures--}function b(B){const I=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(I.__webglFramebuffer[pt]))for(let _t=0;_t<I.__webglFramebuffer[pt].length;_t++)i.deleteFramebuffer(I.__webglFramebuffer[pt][_t]);else i.deleteFramebuffer(I.__webglFramebuffer[pt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[pt])}else{if(Array.isArray(I.__webglFramebuffer))for(let pt=0;pt<I.__webglFramebuffer.length;pt++)i.deleteFramebuffer(I.__webglFramebuffer[pt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let pt=0;pt<I.__webglColorRenderbuffer.length;pt++)I.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[pt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const it=B.textures;for(let pt=0,_t=it.length;pt<_t;pt++){const Mt=n.get(it[pt]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove(it[pt])}n.remove(B)}let P=0;function C(){P=0}function R(){const B=P;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),P+=1,B}function L(B){const I=[];return I.push(B.wrapS),I.push(B.wrapT),I.push(B.wrapR||0),I.push(B.magFilter),I.push(B.minFilter),I.push(B.anisotropy),I.push(B.internalFormat),I.push(B.format),I.push(B.type),I.push(B.generateMipmaps),I.push(B.premultiplyAlpha),I.push(B.flipY),I.push(B.unpackAlignment),I.push(B.colorSpace),I.join()}function F(B,I){const it=n.get(B);if(B.isVideoTexture&&dt(B),B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){const pt=B.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(it,B,I);return}}e.bindTexture(i.TEXTURE_2D,it.__webglTexture,i.TEXTURE0+I)}function k(B,I){const it=n.get(B);if(B.version>0&&it.__version!==B.version){V(it,B,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,it.__webglTexture,i.TEXTURE0+I)}function N(B,I){const it=n.get(B);if(B.version>0&&it.__version!==B.version){V(it,B,I);return}e.bindTexture(i.TEXTURE_3D,it.__webglTexture,i.TEXTURE0+I)}function D(B,I){const it=n.get(B);if(B.version>0&&it.__version!==B.version){H(it,B,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture,i.TEXTURE0+I)}const W={[_i]:i.REPEAT,[qi]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},O={[kn]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[Ao]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},q={[Cd]:i.NEVER,[Dd]:i.ALWAYS,[Pd]:i.LESS,[hu]:i.LEQUAL,[Rd]:i.EQUAL,[Fd]:i.GEQUAL,[Ld]:i.GREATER,[Id]:i.NOTEQUAL};function K(B,I){if(I.type===ui&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===hi||I.magFilter===ba||I.magFilter===Ao||I.magFilter===Zi||I.minFilter===hi||I.minFilter===ba||I.minFilter===Ao||I.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,W[I.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,W[I.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,W[I.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,O[I.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,O[I.minFilter]),I.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,q[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===kn||I.minFilter!==Ao&&I.minFilter!==Zi||I.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Y(B,I){let it=!1;B.__webglInit===void 0&&(B.__webglInit=!0,I.addEventListener("dispose",w));const pt=I.source;let _t=d.get(pt);_t===void 0&&(_t={},d.set(pt,_t));const Mt=L(I);if(Mt!==B.__cacheKey){_t[Mt]===void 0&&(_t[Mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,it=!0),_t[Mt].usedTimes++;const kt=_t[B.__cacheKey];kt!==void 0&&(_t[B.__cacheKey].usedTimes--,kt.usedTimes===0&&S(I)),B.__cacheKey=Mt,B.__webglTexture=_t[Mt].texture}return it}function V(B,I,it){let pt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(pt=i.TEXTURE_3D);const _t=Y(B,I),Mt=I.source;e.bindTexture(pt,B.__webglTexture,i.TEXTURE0+it);const kt=n.get(Mt);if(Mt.version!==kt.__version||_t===!0){e.activeTexture(i.TEXTURE0+it);const Et=Ie.getPrimaries(Ie.workingColorSpace),Lt=I.colorSpace===Qn?null:Ie.getPrimaries(I.colorSpace),Ft=I.colorSpace===Qn||Et===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let Ct=v(I.image,!1,s.maxTextureSize);Ct=Dt(I,Ct);const Nt=o.convert(I.format,I.colorSpace),Qt=o.convert(I.type);let ie=_(I.internalFormat,Nt,Qt,I.colorSpace,I.isVideoTexture);K(pt,I);let $t;const we=I.mipmaps,ce=I.isVideoTexture!==!0,Ce=kt.__version===void 0||_t===!0,et=Mt.dataReady,Ht=y(I,Ct);if(I.isDepthTexture)ie=x(I.format===so,I.type),Ce&&(ce?e.texStorage2D(i.TEXTURE_2D,1,ie,Ct.width,Ct.height):e.texImage2D(i.TEXTURE_2D,0,ie,Ct.width,Ct.height,0,Nt,Qt,null));else if(I.isDataTexture)if(we.length>0){ce&&Ce&&e.texStorage2D(i.TEXTURE_2D,Ht,ie,we[0].width,we[0].height);for(let vt=0,bt=we.length;vt<bt;vt++)$t=we[vt],ce?et&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,$t.width,$t.height,Nt,Qt,$t.data):e.texImage2D(i.TEXTURE_2D,vt,ie,$t.width,$t.height,0,Nt,Qt,$t.data);I.generateMipmaps=!1}else ce?(Ce&&e.texStorage2D(i.TEXTURE_2D,Ht,ie,Ct.width,Ct.height),et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct.width,Ct.height,Nt,Qt,Ct.data)):e.texImage2D(i.TEXTURE_2D,0,ie,Ct.width,Ct.height,0,Nt,Qt,Ct.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ce&&Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,ie,we[0].width,we[0].height,Ct.depth);for(let vt=0,bt=we.length;vt<bt;vt++)if($t=we[vt],I.format!==Xn)if(Nt!==null)if(ce){if(et)if(I.layerUpdates.size>0){const Tt=Yc($t.width,$t.height,I.format,I.type);for(const Bt of I.layerUpdates){const ue=$t.data.subarray(Bt*Tt/$t.data.BYTES_PER_ELEMENT,(Bt+1)*Tt/$t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,Bt,$t.width,$t.height,1,Nt,ue)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,$t.width,$t.height,Ct.depth,Nt,$t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,ie,$t.width,$t.height,Ct.depth,0,$t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,$t.width,$t.height,Ct.depth,Nt,Qt,$t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,ie,$t.width,$t.height,Ct.depth,0,Nt,Qt,$t.data)}else{ce&&Ce&&e.texStorage2D(i.TEXTURE_2D,Ht,ie,we[0].width,we[0].height);for(let vt=0,bt=we.length;vt<bt;vt++)$t=we[vt],I.format!==Xn?Nt!==null?ce?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,$t.width,$t.height,Nt,$t.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,ie,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?et&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,$t.width,$t.height,Nt,Qt,$t.data):e.texImage2D(i.TEXTURE_2D,vt,ie,$t.width,$t.height,0,Nt,Qt,$t.data)}else if(I.isDataArrayTexture)if(ce){if(Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,ie,Ct.width,Ct.height,Ct.depth),et)if(I.layerUpdates.size>0){const vt=Yc(Ct.width,Ct.height,I.format,I.type);for(const bt of I.layerUpdates){const Tt=Ct.data.subarray(bt*vt/Ct.data.BYTES_PER_ELEMENT,(bt+1)*vt/Ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,Ct.width,Ct.height,1,Nt,Qt,Tt)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Nt,Qt,Ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,Ct.width,Ct.height,Ct.depth,0,Nt,Qt,Ct.data);else if(I.isData3DTexture)ce?(Ce&&e.texStorage3D(i.TEXTURE_3D,Ht,ie,Ct.width,Ct.height,Ct.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Nt,Qt,Ct.data)):e.texImage3D(i.TEXTURE_3D,0,ie,Ct.width,Ct.height,Ct.depth,0,Nt,Qt,Ct.data);else if(I.isFramebufferTexture){if(Ce)if(ce)e.texStorage2D(i.TEXTURE_2D,Ht,ie,Ct.width,Ct.height);else{let vt=Ct.width,bt=Ct.height;for(let Tt=0;Tt<Ht;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,ie,vt,bt,0,Nt,Qt,null),vt>>=1,bt>>=1}}else if(we.length>0){if(ce&&Ce){const vt=At(we[0]);e.texStorage2D(i.TEXTURE_2D,Ht,ie,vt.width,vt.height)}for(let vt=0,bt=we.length;vt<bt;vt++)$t=we[vt],ce?et&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Nt,Qt,$t):e.texImage2D(i.TEXTURE_2D,vt,ie,Nt,Qt,$t);I.generateMipmaps=!1}else if(ce){if(Ce){const vt=At(Ct);e.texStorage2D(i.TEXTURE_2D,Ht,ie,vt.width,vt.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt,Qt,Ct)}else e.texImage2D(i.TEXTURE_2D,0,ie,Nt,Qt,Ct);m(I)&&p(pt),kt.__version=Mt.version,I.onUpdate&&I.onUpdate(I)}B.__version=I.version}function H(B,I,it){if(I.image.length!==6)return;const pt=Y(B,I),_t=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+it);const Mt=n.get(_t);if(_t.version!==Mt.__version||pt===!0){e.activeTexture(i.TEXTURE0+it);const kt=Ie.getPrimaries(Ie.workingColorSpace),Et=I.colorSpace===Qn?null:Ie.getPrimaries(I.colorSpace),Lt=I.colorSpace===Qn||kt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Ft=I.isCompressedTexture||I.image[0].isCompressedTexture,Ct=I.image[0]&&I.image[0].isDataTexture,Nt=[];for(let bt=0;bt<6;bt++)!Ft&&!Ct?Nt[bt]=v(I.image[bt],!0,s.maxCubemapSize):Nt[bt]=Ct?I.image[bt].image:I.image[bt],Nt[bt]=Dt(I,Nt[bt]);const Qt=Nt[0],ie=o.convert(I.format,I.colorSpace),$t=o.convert(I.type),we=_(I.internalFormat,ie,$t,I.colorSpace),ce=I.isVideoTexture!==!0,Ce=Mt.__version===void 0||pt===!0,et=_t.dataReady;let Ht=y(I,Qt);K(i.TEXTURE_CUBE_MAP,I);let vt;if(Ft){ce&&Ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,we,Qt.width,Qt.height);for(let bt=0;bt<6;bt++){vt=Nt[bt].mipmaps;for(let Tt=0;Tt<vt.length;Tt++){const Bt=vt[Tt];I.format!==Xn?ie!==null?ce?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt,0,0,Bt.width,Bt.height,ie,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt,we,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt,0,0,Bt.width,Bt.height,ie,$t,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt,we,Bt.width,Bt.height,0,ie,$t,Bt.data)}}}else{if(vt=I.mipmaps,ce&&Ce){vt.length>0&&Ht++;const bt=At(Nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,we,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Ct){ce?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Nt[bt].width,Nt[bt].height,ie,$t,Nt[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,we,Nt[bt].width,Nt[bt].height,0,ie,$t,Nt[bt].data);for(let Tt=0;Tt<vt.length;Tt++){const ue=vt[Tt].image[bt].image;ce?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt+1,0,0,ue.width,ue.height,ie,$t,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt+1,we,ue.width,ue.height,0,ie,$t,ue.data)}}else{ce?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ie,$t,Nt[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,we,ie,$t,Nt[bt]);for(let Tt=0;Tt<vt.length;Tt++){const Bt=vt[Tt];ce?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt+1,0,0,ie,$t,Bt.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt+1,we,ie,$t,Bt.image[bt])}}}m(I)&&p(i.TEXTURE_CUBE_MAP),Mt.__version=_t.version,I.onUpdate&&I.onUpdate(I)}B.__version=I.version}function J(B,I,it,pt,_t,Mt){const kt=o.convert(it.format,it.colorSpace),Et=o.convert(it.type),Lt=_(it.internalFormat,kt,Et,it.colorSpace),Ft=n.get(I),Ct=n.get(it);if(Ct.__renderTarget=I,!Ft.__hasExternalTextures){const Nt=Math.max(1,I.width>>Mt),Qt=Math.max(1,I.height>>Mt);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,Mt,Lt,Nt,Qt,I.depth,0,kt,Et,null):e.texImage2D(_t,Mt,Lt,Nt,Qt,0,kt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),St(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,_t,Ct.__webglTexture,0,at(I)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,_t,Ct.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(B,I,it){if(i.bindRenderbuffer(i.RENDERBUFFER,B),I.depthBuffer){const pt=I.depthTexture,_t=pt&&pt.isDepthTexture?pt.type:null,Mt=x(I.stencilBuffer,_t),kt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=at(I);St(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,Mt,I.width,I.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Mt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,B)}else{const pt=I.textures;for(let _t=0;_t<pt.length;_t++){const Mt=pt[_t],kt=o.convert(Mt.format,Mt.colorSpace),Et=o.convert(Mt.type),Lt=_(Mt.internalFormat,kt,Et,Mt.colorSpace),Ft=at(I);it&&St(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Lt,I.width,I.height):St(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,Lt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(B,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=n.get(I.depthTexture);pt.__renderTarget=I,(!pt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),F(I.depthTexture,0);const _t=pt.__webglTexture,Mt=at(I);if(I.depthTexture.format===js)St(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(I.depthTexture.format===so)St(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function st(B){const I=n.get(B),it=B.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==B.depthTexture){const pt=B.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),pt){const _t=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,pt.removeEventListener("dispose",_t)};pt.addEventListener("dispose",_t),I.__depthDisposeCallback=_t}I.__boundDepthTexture=pt}if(B.depthTexture&&!I.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Q(I.__webglFramebuffer,B)}else if(it){I.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[pt]),I.__webglDepthbuffer[pt]===void 0)I.__webglDepthbuffer[pt]=i.createRenderbuffer(),ht(I.__webglDepthbuffer[pt],B,!1);else{const _t=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=I.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,Mt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),ht(I.__webglDepthbuffer,B,!1);else{const pt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,_t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(B,I,it){const pt=n.get(B);I!==void 0&&J(pt.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),it!==void 0&&st(B)}function tt(B){const I=B.texture,it=n.get(B),pt=n.get(I);B.addEventListener("dispose",A);const _t=B.textures,Mt=B.isWebGLCubeRenderTarget===!0,kt=_t.length>1;if(kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=I.version,a.memory.textures++),Mt){it.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(I.mipmaps&&I.mipmaps.length>0){it.__webglFramebuffer[Et]=[];for(let Lt=0;Lt<I.mipmaps.length;Lt++)it.__webglFramebuffer[Et][Lt]=i.createFramebuffer()}else it.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){it.__webglFramebuffer=[];for(let Et=0;Et<I.mipmaps.length;Et++)it.__webglFramebuffer[Et]=i.createFramebuffer()}else it.__webglFramebuffer=i.createFramebuffer();if(kt)for(let Et=0,Lt=_t.length;Et<Lt;Et++){const Ft=n.get(_t[Et]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(B.samples>0&&St(B)===!1){it.__webglMultisampledFramebuffer=i.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Et=0;Et<_t.length;Et++){const Lt=_t[Et];it.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,it.__webglColorRenderbuffer[Et]);const Ft=o.convert(Lt.format,Lt.colorSpace),Ct=o.convert(Lt.type),Nt=_(Lt.internalFormat,Ft,Ct,Lt.colorSpace,B.isXRRenderTarget===!0),Qt=at(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,Nt,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,it.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(it.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(it.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),K(i.TEXTURE_CUBE_MAP,I);for(let Et=0;Et<6;Et++)if(I.mipmaps&&I.mipmaps.length>0)for(let Lt=0;Lt<I.mipmaps.length;Lt++)J(it.__webglFramebuffer[Et][Lt],B,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt);else J(it.__webglFramebuffer[Et],B,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(I)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let Et=0,Lt=_t.length;Et<Lt;Et++){const Ft=_t[Et],Ct=n.get(Ft);e.bindTexture(i.TEXTURE_2D,Ct.__webglTexture),K(i.TEXTURE_2D,Ft),J(it.__webglFramebuffer,B,Ft,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),m(Ft)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Et=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,pt.__webglTexture),K(Et,I),I.mipmaps&&I.mipmaps.length>0)for(let Lt=0;Lt<I.mipmaps.length;Lt++)J(it.__webglFramebuffer[Lt],B,I,i.COLOR_ATTACHMENT0,Et,Lt);else J(it.__webglFramebuffer,B,I,i.COLOR_ATTACHMENT0,Et,0);m(I)&&p(Et),e.unbindTexture()}B.depthBuffer&&st(B)}function yt(B){const I=B.textures;for(let it=0,pt=I.length;it<pt;it++){const _t=I[it];if(m(_t)){const Mt=M(B),kt=n.get(_t).__webglTexture;e.bindTexture(Mt,kt),p(Mt),e.unbindTexture()}}}const rt=[],z=[];function xt(B){if(B.samples>0){if(St(B)===!1){const I=B.textures,it=B.width,pt=B.height;let _t=i.COLOR_BUFFER_BIT;const Mt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(B),Et=I.length>1;if(Et)for(let Lt=0;Lt<I.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Lt=0;Lt<I.length;Lt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Lt]);const Ft=n.get(I[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,it,pt,0,0,it,pt,_t,i.NEAREST),l===!0&&(rt.length=0,z.length=0,rt.push(i.COLOR_ATTACHMENT0+Lt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(rt.push(Mt),z.push(Mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Lt=0;Lt<I.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Lt]);const Ft=n.get(I[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){const I=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function at(B){return Math.min(s.maxSamples,B.samples)}function St(B){const I=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function dt(B){const I=a.render.frame;h.get(B)!==I&&(h.set(B,I),B.update())}function Dt(B,I){const it=B.colorSpace,pt=B.format,_t=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||it!==oo&&it!==Qn&&(Ie.getTransfer(it)===ze?(pt!==Xn||_t!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),I}function At(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=C,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=D,this.rebindTextures=$,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=J,this.useMultisampledRTT=St}function A1(i,t){function e(n,s=Qn){let o;const a=Ie.getTransfer(s);if(n===Ui)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.BYTE;if(n===eu)return i.SHORT;if(n===No)return i.UNSIGNED_SHORT;if(n===Fl)return i.INT;if(n===ws)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===iu)return i.ALPHA;if(n===su)return i.RGB;if(n===Xn)return i.RGBA;if(n===ou)return i.LUMINANCE;if(n===au)return i.LUMINANCE_ALPHA;if(n===js)return i.DEPTH_COMPONENT;if(n===so)return i.DEPTH_STENCIL;if(n===Ul)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===ru)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===Sa||n===Aa||n===Ta||n===Ea)if(a===ze)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jr||n===tl||n===el||n===nl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Jr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===ol)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===il||n===sl)return a===ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ol)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===rl||n===ll||n===cl||n===hl||n===ul||n===dl||n===pl||n===fl||n===ml||n===gl||n===vl||n===xl||n===_l)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===al)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===Ml||n===wl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ca)return a===ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===yl||n===bl||n===Sl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ca)return o.COMPRESSED_RED_RGTC1_EXT;if(n===yl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===io?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const T1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new yn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Oe({vertexShader:T1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P1 extends ys{constructor(t,e){super();const n=this;let s=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new C1,m=e.getContextAttributes();let p=null,M=null;const _=[],x=[],y=new Gt;let w=null;const A=new Kn;A.viewport=new We;const T=new Kn;T.viewport=new We;const S=[A,T],b=new zp;let P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let H=_[V];return H===void 0&&(H=new xr,_[V]=H),H.getTargetRaySpace()},this.getControllerGrip=function(V){let H=_[V];return H===void 0&&(H=new xr,_[V]=H),H.getGripSpace()},this.getHand=function(V){let H=_[V];return H===void 0&&(H=new xr,_[V]=H),H.getHandSpace()};function R(V){const H=x.indexOf(V.inputSource);if(H===-1)return;const J=_[H];J!==void 0&&(J.update(V.inputSource,V.frame,c||a),J.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",F);for(let V=0;V<_.length;V++){const H=x[V];H!==null&&(x[V]=null,_[V].disconnect(H))}P=null,C=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,Y.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",L),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(y),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ht=null,Q=null;m.depth&&(Q=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?so:js,ht=m.stencil?io:ws);const st={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(st),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Jn(d.textureWidth,d.textureHeight,{format:Xn,type:Ui,depthTexture:new Mu(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(r),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(V){for(let H=0;H<V.removed.length;H++){const J=V.removed[H],ht=x.indexOf(J);ht>=0&&(x[ht]=null,_[ht].disconnect(J))}for(let H=0;H<V.added.length;H++){const J=V.added[H];let ht=x.indexOf(J);if(ht===-1){for(let st=0;st<_.length;st++)if(st>=x.length){x.push(J),ht=st;break}else if(x[st]===null){x[st]=J,ht=st;break}if(ht===-1)break}const Q=_[ht];Q&&Q.connect(J)}}const k=new E,N=new E;function D(V,H,J){k.setFromMatrixPosition(H.matrixWorld),N.setFromMatrixPosition(J.matrixWorld);const ht=k.distanceTo(N),Q=H.projectionMatrix.elements,st=J.projectionMatrix.elements,$=Q[14]/(Q[10]-1),tt=Q[14]/(Q[10]+1),yt=(Q[9]+1)/Q[5],rt=(Q[9]-1)/Q[5],z=(Q[8]-1)/Q[0],xt=(st[8]+1)/st[0],at=$*z,St=$*xt,dt=ht/(-z+xt),Dt=dt*-z;if(H.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Dt),V.translateZ(dt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Q[10]===-1)V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const At=$+dt,B=tt+dt,I=at-Dt,it=St+(ht-Dt),pt=yt*tt/B*At,_t=rt*tt/B*At;V.projectionMatrix.makePerspective(I,it,pt,_t,At,B),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function W(V,H){H===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(H.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let H=V.near,J=V.far;v.texture!==null&&(v.depthNear>0&&(H=v.depthNear),v.depthFar>0&&(J=v.depthFar)),b.near=T.near=A.near=H,b.far=T.far=A.far=J,(P!==b.near||C!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,C=b.far),A.layers.mask=V.layers.mask|2,T.layers.mask=V.layers.mask|4,b.layers.mask=A.layers.mask|T.layers.mask;const ht=V.parent,Q=b.cameras;W(b,ht);for(let st=0;st<Q.length;st++)W(Q[st],ht);Q.length===2?D(b,A,T):b.projectionMatrix.copy(A.projectionMatrix),O(V,b,ht)};function O(V,H,J){J===null?V.matrix.copy(H.matrixWorld):(V.matrix.copy(J.matrixWorld),V.matrix.invert(),V.matrix.multiply(H.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Uo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let q=null;function K(V,H){if(h=H.getViewerPose(c||a),g=H,h!==null){const J=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ht=!1;J.length!==b.cameras.length&&(b.cameras.length=0,ht=!0);for(let $=0;$<J.length;$++){const tt=J[$];let yt=null;if(f!==null)yt=f.getViewport(tt);else{const z=u.getViewSubImage(d,tt);yt=z.viewport,$===0&&(t.setRenderTargetTextures(M,z.colorTexture,d.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(M))}let rt=S[$];rt===void 0&&(rt=new Kn,rt.layers.enable($),rt.viewport=new We,S[$]=rt),rt.matrix.fromArray(tt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(tt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(yt.x,yt.y,yt.width,yt.height),$===0&&(b.matrix.copy(rt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ht===!0&&b.cameras.push(rt)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const $=u.getDepthInformation(J[0]);$&&$.isValid&&$.texture&&v.init(t,$,s.renderState)}}for(let J=0;J<_.length;J++){const ht=x[J],Q=_[J];ht!==null&&Q!==void 0&&Q.update(ht,H,c||a)}q&&q(V,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const Y=new bu;Y.setAnimationLoop(K),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}}const us=new zn,R1=new le;function L1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),_=M.envMap,x=M.envMapRotation;_&&(m.envMap.value=_,us.copy(x),us.x*=-1,us.y*=-1,us.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(R1.makeRotationFromEuler(us)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I1(i,t,e,n){let s={},o={},a=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const x=_.program;n.uniformBlockBinding(M,x)}function c(M,_){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",m));const y=_.program;n.updateUBOMapping(M,y);const w=t.render.frame;o[M.id]!==w&&(d(M),o[M.id]=w)}function h(M){const _=u();M.__bindingPointIndex=_;const x=i.createBuffer(),y=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let M=0;M<r;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=s[M.id],x=M.uniforms,y=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,A=x.length;w<A;w++){const T=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,b=T.length;S<b;S++){const P=T[S];if(f(P,w,S,y)===!0){const C=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let F=0;F<R.length;F++){const k=R[F],N=v(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,C+L,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,L),L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,_,x,y){const w=M.value,A=_+"_"+x;if(y[A]===void 0)return typeof w=="number"||typeof w=="boolean"?y[A]=w:y[A]=w.clone(),!0;{const T=y[A];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return y[A]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function g(M){const _=M.uniforms;let x=0;const y=16;for(let A=0,T=_.length;A<T;A++){const S=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,P=S.length;b<P;b++){const C=S[b],R=Array.isArray(C.value)?C.value:[C.value];for(let L=0,F=R.length;L<F;L++){const k=R[L],N=v(k),D=x%y,W=D%N.boundary,O=D+W;x+=W,O!==0&&y-O<N.storage&&(x+=y-O),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,x+=N.storage}}}const w=x%y;return w>0&&(x+=y-w),M.__size=x,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},o={}}return{bind:l,update:c,dispose:p}}class F1{constructor(t={}){const{canvas:e=Kd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Ki,this.toneMappingExposure=1;const x=this;let y=!1,w=0,A=0,T=null,S=-1,b=null;const P=new We,C=new We;let R=null;const L=new Ut(0);let F=0,k=e.width,N=e.height,D=1,W=null,O=null;const q=new We(0,0,k,N),K=new We(0,0,k,N);let Y=!1;const V=new Gl;let H=!1,J=!1;this.transmissionResolutionScale=1;const ht=new le,Q=new le,st=new E,$=new We,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function rt(){return T===null?D:1}let z=n;function xt(U,ot){return e.getContext(U,ot)}try{const U={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Va}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Bt,!1),z===null){const ot="webgl2";if(z=xt(ot,U),z===null)throw xt(ot)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let at,St,dt,Dt,At,B,I,it,pt,_t,Mt,kt,Et,Lt,Ft,Ct,Nt,Qt,ie,$t,we,ce,Ce,et;function Ht(){at=new Vm(z),at.init(),ce=new A1(z,at),St=new Um(z,at,t,ce),dt=new b1(z,at),St.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Dt=new Ym(z),At=new h1,B=new S1(z,at,dt,At,St,ce,Dt),I=new zm(x),it=new Wm(x),pt=new Kp(z),Ce=new Dm(z,pt),_t=new Gm(z,pt,Dt,Ce),Mt=new qm(z,_t,pt,Dt),ie=new $m(z,St,B),Ct=new km(At),kt=new c1(x,I,it,at,St,Ce,Ct),Et=new L1(x,At),Lt=new d1,Ft=new x1(at),Qt=new Fm(x,I,it,dt,Mt,f,l),Nt=new w1(x,Mt,St),et=new I1(z,Dt,St,dt),$t=new Nm(z,at,Dt),we=new Xm(z,at,Dt),Dt.programs=kt.programs,x.capabilities=St,x.extensions=at,x.properties=At,x.renderLists=Lt,x.shadowMap=Nt,x.state=dt,x.info=Dt}Ht();const vt=new P1(x,z);this.xr=vt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const U=at.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=at.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(U){U!==void 0&&(D=U,this.setSize(k,N,!1))},this.getSize=function(U){return U.set(k,N)},this.setSize=function(U,ot,ft=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=U,N=ot,e.width=Math.floor(U*D),e.height=Math.floor(ot*D),ft===!0&&(e.style.width=U+"px",e.style.height=ot+"px"),this.setViewport(0,0,U,ot)},this.getDrawingBufferSize=function(U){return U.set(k*D,N*D).floor()},this.setDrawingBufferSize=function(U,ot,ft){k=U,N=ot,D=ft,e.width=Math.floor(U*ft),e.height=Math.floor(ot*ft),this.setViewport(0,0,U,ot)},this.getCurrentViewport=function(U){return U.copy(P)},this.getViewport=function(U){return U.copy(q)},this.setViewport=function(U,ot,ft,mt){U.isVector4?q.set(U.x,U.y,U.z,U.w):q.set(U,ot,ft,mt),dt.viewport(P.copy(q).multiplyScalar(D).round())},this.getScissor=function(U){return U.copy(K)},this.setScissor=function(U,ot,ft,mt){U.isVector4?K.set(U.x,U.y,U.z,U.w):K.set(U,ot,ft,mt),dt.scissor(C.copy(K).multiplyScalar(D).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(U){dt.setScissorTest(Y=U)},this.setOpaqueSort=function(U){W=U},this.setTransparentSort=function(U){O=U},this.getClearColor=function(U){return U.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(U=!0,ot=!0,ft=!0){let mt=0;if(U){let lt=!1;if(T!==null){const Pt=T.texture.format;lt=Pt===Bl||Pt===zl||Pt===kl}if(lt){const Pt=T.texture.type,Ot=Pt===Ui||Pt===ws||Pt===No||Pt===io||Pt===Dl||Pt===Nl,qt=Qt.getClearColor(),Xt=Qt.getClearAlpha(),se=qt.r,re=qt.g,Jt=qt.b;Ot?(g[0]=se,g[1]=re,g[2]=Jt,g[3]=Xt,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=se,v[1]=re,v[2]=Jt,v[3]=Xt,z.clearBufferiv(z.COLOR,0,v))}else mt|=z.COLOR_BUFFER_BIT}ot&&(mt|=z.DEPTH_BUFFER_BIT),ft&&(mt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Bt,!1),Qt.dispose(),Lt.dispose(),Ft.dispose(),At.dispose(),I.dispose(),it.dispose(),Mt.dispose(),Ce.dispose(),et.dispose(),kt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",$n),vt.removeEventListener("sessionend",Ze),ke.stop()};function bt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const U=Dt.autoReset,ot=Nt.enabled,ft=Nt.autoUpdate,mt=Nt.needsUpdate,lt=Nt.type;Ht(),Dt.autoReset=U,Nt.enabled=ot,Nt.autoUpdate=ft,Nt.needsUpdate=mt,Nt.type=lt}function Bt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ue(U){const ot=U.target;ot.removeEventListener("dispose",ue),Te(ot)}function Te(U){Re(U),At.remove(U)}function Re(U){const ot=At.get(U).programs;ot!==void 0&&(ot.forEach(function(ft){kt.releaseProgram(ft)}),U.isShaderMaterial&&kt.releaseShaderCache(U))}this.renderBufferDirect=function(U,ot,ft,mt,lt,Pt){ot===null&&(ot=tt);const Ot=lt.isMesh&&lt.matrixWorld.determinant()<0,qt=Cn(U,ot,ft,mt,lt);dt.setMaterial(mt,Ot);let Xt=ft.index,se=1;if(mt.wireframe===!0){if(Xt=_t.getWireframeAttribute(ft),Xt===void 0)return;se=2}const re=ft.drawRange,Jt=ft.attributes.position;let fe=re.start*se,xe=(re.start+re.count)*se;Pt!==null&&(fe=Math.max(fe,Pt.start*se),xe=Math.min(xe,(Pt.start+Pt.count)*se)),Xt!==null?(fe=Math.max(fe,0),xe=Math.min(xe,Xt.count)):Jt!=null&&(fe=Math.max(fe,0),xe=Math.min(xe,Jt.count));const Ge=xe-fe;if(Ge<0||Ge===1/0)return;Ce.setup(lt,mt,qt,ft,Xt);let Fe,Ae=$t;if(Xt!==null&&(Fe=pt.get(Xt),Ae=we,Ae.setIndex(Fe)),lt.isMesh)mt.wireframe===!0?(dt.setLineWidth(mt.wireframeLinewidth*rt()),Ae.setMode(z.LINES)):Ae.setMode(z.TRIANGLES);else if(lt.isLine){let ee=mt.linewidth;ee===void 0&&(ee=1),dt.setLineWidth(ee*rt()),lt.isLineSegments?Ae.setMode(z.LINES):lt.isLineLoop?Ae.setMode(z.LINE_LOOP):Ae.setMode(z.LINE_STRIP)}else lt.isPoints?Ae.setMode(z.POINTS):lt.isSprite&&Ae.setMode(z.TRIANGLES);if(lt.isBatchedMesh)if(lt._multiDrawInstances!==null)fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount,lt._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))Ae.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{const ee=lt._multiDrawStarts,Xe=lt._multiDrawCounts,Pe=lt._multiDrawCount,sn=Xt?pt.get(Xt).bytesPerElement:1,Nn=At.get(mt).currentProgram.getUniforms();for(let hn=0;hn<Pe;hn++)Nn.setValue(z,"_gl_DrawID",hn),Ae.render(ee[hn]/sn,Xe[hn])}else if(lt.isInstancedMesh)Ae.renderInstances(fe,Ge,lt.count);else if(ft.isInstancedBufferGeometry){const ee=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Xe=Math.min(ft.instanceCount,ee);Ae.renderInstances(fe,Ge,Xe)}else Ae.render(fe,Ge)};function me(U,ot,ft){U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=Fn,U.needsUpdate=!0,bn(U,ot,ft),U.side=ts,U.needsUpdate=!0,bn(U,ot,ft),U.side=tn):bn(U,ot,ft)}this.compile=function(U,ot,ft=null){ft===null&&(ft=U),p=Ft.get(ft),p.init(ot),_.push(p),ft.traverseVisible(function(lt){lt.isLight&&lt.layers.test(ot.layers)&&(p.pushLight(lt),lt.castShadow&&p.pushShadow(lt))}),U!==ft&&U.traverseVisible(function(lt){lt.isLight&&lt.layers.test(ot.layers)&&(p.pushLight(lt),lt.castShadow&&p.pushShadow(lt))}),p.setupLights();const mt=new Set;return U.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;const Pt=lt.material;if(Pt)if(Array.isArray(Pt))for(let Ot=0;Ot<Pt.length;Ot++){const qt=Pt[Ot];me(qt,ft,lt),mt.add(qt)}else me(Pt,ft,lt),mt.add(Pt)}),p=_.pop(),mt},this.compileAsync=function(U,ot,ft=null){const mt=this.compile(U,ot,ft);return new Promise(lt=>{function Pt(){if(mt.forEach(function(Ot){At.get(Ot).currentProgram.isReady()&&mt.delete(Ot)}),mt.size===0){lt(U);return}setTimeout(Pt,10)}at.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let nn=null;function cn(U){nn&&nn(U)}function $n(){ke.stop()}function Ze(){ke.start()}const ke=new bu;ke.setAnimationLoop(cn),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(U){nn=U,vt.setAnimationLoop(U),U===null?ke.stop():ke.start()},vt.addEventListener("sessionstart",$n),vt.addEventListener("sessionend",Ze),this.render=function(U,ot){if(ot!==void 0&&ot.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(ot),ot=vt.getCamera()),U.isScene===!0&&U.onBeforeRender(x,U,ot,T),p=Ft.get(U,_.length),p.init(ot),_.push(p),Q.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),V.setFromProjectionMatrix(Q),J=this.localClippingEnabled,H=Ct.init(this.clippingPlanes,J),m=Lt.get(U,M.length),m.init(),M.push(m),vt.enabled===!0&&vt.isPresenting===!0){const Pt=x.xr.getDepthSensingMesh();Pt!==null&&ei(Pt,ot,-1/0,x.sortObjects)}ei(U,ot,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(W,O),yt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,yt&&Qt.addToRenderList(m,U),this.info.render.frame++,H===!0&&Ct.beginShadows();const ft=p.state.shadowsArray;Nt.render(ft,U,ot),H===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const mt=m.opaque,lt=m.transmissive;if(p.setupLights(),ot.isArrayCamera){const Pt=ot.cameras;if(lt.length>0)for(let Ot=0,qt=Pt.length;Ot<qt;Ot++){const Xt=Pt[Ot];En(mt,lt,U,Xt)}yt&&Qt.render(U);for(let Ot=0,qt=Pt.length;Ot<qt;Ot++){const Xt=Pt[Ot];Bn(m,U,Xt,Xt.viewport)}}else lt.length>0&&En(mt,lt,U,ot),yt&&Qt.render(U),Bn(m,U,ot);T!==null&&A===0&&(B.updateMultisampleRenderTarget(T),B.updateRenderTargetMipmap(T)),U.isScene===!0&&U.onAfterRender(x,U,ot),Ce.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],H===!0&&Ct.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ei(U,ot,ft,mt){if(U.visible===!1)return;if(U.layers.test(ot.layers)){if(U.isGroup)ft=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ot);else if(U.isLight)p.pushLight(U),U.castShadow&&p.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||V.intersectsSprite(U)){mt&&$.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Q);const Ot=Mt.update(U),qt=U.material;qt.visible&&m.push(U,Ot,qt,ft,$.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||V.intersectsObject(U))){const Ot=Mt.update(U),qt=U.material;if(mt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),$.copy(U.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),$.copy(Ot.boundingSphere.center)),$.applyMatrix4(U.matrixWorld).applyMatrix4(Q)),Array.isArray(qt)){const Xt=Ot.groups;for(let se=0,re=Xt.length;se<re;se++){const Jt=Xt[se],fe=qt[Jt.materialIndex];fe&&fe.visible&&m.push(U,Ot,fe,ft,$.z,Jt)}}else qt.visible&&m.push(U,Ot,qt,ft,$.z,null)}}const Pt=U.children;for(let Ot=0,qt=Pt.length;Ot<qt;Ot++)ei(Pt[Ot],ot,ft,mt)}function Bn(U,ot,ft,mt){const lt=U.opaque,Pt=U.transmissive,Ot=U.transparent;p.setupLightsView(ft),H===!0&&Ct.setGlobalState(x.clippingPlanes,ft),mt&&dt.viewport(P.copy(mt)),lt.length>0&&On(lt,ot,ft),Pt.length>0&&On(Pt,ot,ft),Ot.length>0&&On(Ot,ot,ft),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function En(U,ot,ft,mt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[mt.id]===void 0&&(p.state.transmissionRenderTarget[mt.id]=new Jn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?xi:Ui,minFilter:Zi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const Pt=p.state.transmissionRenderTarget[mt.id],Ot=mt.viewport||P;Pt.setSize(Ot.z*x.transmissionResolutionScale,Ot.w*x.transmissionResolutionScale);const qt=x.getRenderTarget();x.setRenderTarget(Pt),x.getClearColor(L),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),yt&&Qt.render(ft);const Xt=x.toneMapping;x.toneMapping=Ki;const se=mt.viewport;if(mt.viewport!==void 0&&(mt.viewport=void 0),p.setupLightsView(mt),H===!0&&Ct.setGlobalState(x.clippingPlanes,mt),On(U,ft,mt),B.updateMultisampleRenderTarget(Pt),B.updateRenderTargetMipmap(Pt),at.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Jt=0,fe=ot.length;Jt<fe;Jt++){const xe=ot[Jt],Ge=xe.object,Fe=xe.geometry,Ae=xe.material,ee=xe.group;if(Ae.side===tn&&Ge.layers.test(mt.layers)){const Xe=Ae.side;Ae.side=Fn,Ae.needsUpdate=!0,ni(Ge,ft,mt,Fe,Ae,ee),Ae.side=Xe,Ae.needsUpdate=!0,re=!0}}re===!0&&(B.updateMultisampleRenderTarget(Pt),B.updateRenderTargetMipmap(Pt))}x.setRenderTarget(qt),x.setClearColor(L,F),se!==void 0&&(mt.viewport=se),x.toneMapping=Xt}function On(U,ot,ft){const mt=ot.isScene===!0?ot.overrideMaterial:null;for(let lt=0,Pt=U.length;lt<Pt;lt++){const Ot=U[lt],qt=Ot.object,Xt=Ot.geometry,se=mt===null?Ot.material:mt,re=Ot.group;qt.layers.test(ft.layers)&&ni(qt,ot,ft,Xt,se,re)}}function ni(U,ot,ft,mt,lt,Pt){U.onBeforeRender(x,ot,ft,mt,lt,Pt),U.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),lt.onBeforeRender(x,ot,ft,mt,U,Pt),lt.transparent===!0&&lt.side===tn&&lt.forceSinglePass===!1?(lt.side=Fn,lt.needsUpdate=!0,x.renderBufferDirect(ft,ot,mt,lt,U,Pt),lt.side=ts,lt.needsUpdate=!0,x.renderBufferDirect(ft,ot,mt,lt,U,Pt),lt.side=tn):x.renderBufferDirect(ft,ot,mt,lt,U,Pt),U.onAfterRender(x,ot,ft,mt,lt,Pt)}function bn(U,ot,ft){ot.isScene!==!0&&(ot=tt);const mt=At.get(U),lt=p.state.lights,Pt=p.state.shadowsArray,Ot=lt.state.version,qt=kt.getParameters(U,lt.state,Pt,ot,ft),Xt=kt.getProgramCacheKey(qt);let se=mt.programs;mt.environment=U.isMeshStandardMaterial?ot.environment:null,mt.fog=ot.fog,mt.envMap=(U.isMeshStandardMaterial?it:I).get(U.envMap||mt.environment),mt.envMapRotation=mt.environment!==null&&U.envMap===null?ot.environmentRotation:U.envMapRotation,se===void 0&&(U.addEventListener("dispose",ue),se=new Map,mt.programs=se);let re=se.get(Xt);if(re!==void 0){if(mt.currentProgram===re&&mt.lightsStateVersion===Ot)return gn(U,qt),re}else qt.uniforms=kt.getUniforms(U),U.onBeforeCompile(qt,x),re=kt.acquireProgram(qt,Xt),se.set(Xt,re),mt.uniforms=qt.uniforms;const Jt=mt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Jt.clippingPlanes=Ct.uniform),gn(U,qt),mt.needsLights=go(U),mt.lightsStateVersion=Ot,mt.needsLights&&(Jt.ambientLightColor.value=lt.state.ambient,Jt.lightProbe.value=lt.state.probe,Jt.directionalLights.value=lt.state.directional,Jt.directionalLightShadows.value=lt.state.directionalShadow,Jt.spotLights.value=lt.state.spot,Jt.spotLightShadows.value=lt.state.spotShadow,Jt.rectAreaLights.value=lt.state.rectArea,Jt.ltc_1.value=lt.state.rectAreaLTC1,Jt.ltc_2.value=lt.state.rectAreaLTC2,Jt.pointLights.value=lt.state.point,Jt.pointLightShadows.value=lt.state.pointShadow,Jt.hemisphereLights.value=lt.state.hemi,Jt.directionalShadowMap.value=lt.state.directionalShadowMap,Jt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Jt.spotShadowMap.value=lt.state.spotShadowMap,Jt.spotLightMatrix.value=lt.state.spotLightMatrix,Jt.spotLightMap.value=lt.state.spotLightMap,Jt.pointShadowMap.value=lt.state.pointShadowMap,Jt.pointShadowMatrix.value=lt.state.pointShadowMatrix),mt.currentProgram=re,mt.uniformsList=null,re}function Mi(U){if(U.uniformsList===null){const ot=U.currentProgram.getUniforms();U.uniformsList=Pa.seqWithValue(ot.seq,U.uniforms)}return U.uniformsList}function gn(U,ot){const ft=At.get(U);ft.outputColorSpace=ot.outputColorSpace,ft.batching=ot.batching,ft.batchingColor=ot.batchingColor,ft.instancing=ot.instancing,ft.instancingColor=ot.instancingColor,ft.instancingMorph=ot.instancingMorph,ft.skinning=ot.skinning,ft.morphTargets=ot.morphTargets,ft.morphNormals=ot.morphNormals,ft.morphColors=ot.morphColors,ft.morphTargetsCount=ot.morphTargetsCount,ft.numClippingPlanes=ot.numClippingPlanes,ft.numIntersection=ot.numClipIntersection,ft.vertexAlphas=ot.vertexAlphas,ft.vertexTangents=ot.vertexTangents,ft.toneMapping=ot.toneMapping}function Cn(U,ot,ft,mt,lt){ot.isScene!==!0&&(ot=tt),B.resetTextureUnits();const Pt=ot.fog,Ot=mt.isMeshStandardMaterial?ot.environment:null,qt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:oo,Xt=(mt.isMeshStandardMaterial?it:I).get(mt.envMap||Ot),se=mt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,re=!!ft.attributes.tangent&&(!!mt.normalMap||mt.anisotropy>0),Jt=!!ft.morphAttributes.position,fe=!!ft.morphAttributes.normal,xe=!!ft.morphAttributes.color;let Ge=Ki;mt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ge=x.toneMapping);const Fe=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Ae=Fe!==void 0?Fe.length:0,ee=At.get(mt),Xe=p.state.lights;if(H===!0&&(J===!0||U!==b)){const Ke=U===b&&mt.id===S;Ct.setState(mt,U,Ke)}let Pe=!1;mt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Xe.state.version||ee.outputColorSpace!==qt||lt.isBatchedMesh&&ee.batching===!1||!lt.isBatchedMesh&&ee.batching===!0||lt.isBatchedMesh&&ee.batchingColor===!0&&lt.colorTexture===null||lt.isBatchedMesh&&ee.batchingColor===!1&&lt.colorTexture!==null||lt.isInstancedMesh&&ee.instancing===!1||!lt.isInstancedMesh&&ee.instancing===!0||lt.isSkinnedMesh&&ee.skinning===!1||!lt.isSkinnedMesh&&ee.skinning===!0||lt.isInstancedMesh&&ee.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&ee.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&ee.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&ee.instancingMorph===!1&&lt.morphTexture!==null||ee.envMap!==Xt||mt.fog===!0&&ee.fog!==Pt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Ct.numPlanes||ee.numIntersection!==Ct.numIntersection)||ee.vertexAlphas!==se||ee.vertexTangents!==re||ee.morphTargets!==Jt||ee.morphNormals!==fe||ee.morphColors!==xe||ee.toneMapping!==Ge||ee.morphTargetsCount!==Ae)&&(Pe=!0):(Pe=!0,ee.__version=mt.version);let sn=ee.currentProgram;Pe===!0&&(sn=bn(mt,ot,lt));let Nn=!1,hn=!1,Zn=!1;const De=sn.getUniforms(),je=ee.uniforms;if(dt.useProgram(sn.program)&&(Nn=!0,hn=!0,Zn=!0),mt.id!==S&&(S=mt.id,hn=!0),Nn||b!==U){dt.buffers.depth.getReversed()?(ht.copy(U.projectionMatrix),Jd(ht),tp(ht),De.setValue(z,"projectionMatrix",ht)):De.setValue(z,"projectionMatrix",U.projectionMatrix),De.setValue(z,"viewMatrix",U.matrixWorldInverse);const un=De.map.cameraPosition;un!==void 0&&un.setValue(z,st.setFromMatrixPosition(U.matrixWorld)),St.logarithmicDepthBuffer&&De.setValue(z,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(mt.isMeshPhongMaterial||mt.isMeshToonMaterial||mt.isMeshLambertMaterial||mt.isMeshBasicMaterial||mt.isMeshStandardMaterial||mt.isShaderMaterial)&&De.setValue(z,"isOrthographic",U.isOrthographicCamera===!0),b!==U&&(b=U,hn=!0,Zn=!0)}if(lt.isSkinnedMesh){De.setOptional(z,lt,"bindMatrix"),De.setOptional(z,lt,"bindMatrixInverse");const Ke=lt.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),De.setValue(z,"boneTexture",Ke.boneTexture,B))}lt.isBatchedMesh&&(De.setOptional(z,lt,"batchingTexture"),De.setValue(z,"batchingTexture",lt._matricesTexture,B),De.setOptional(z,lt,"batchingIdTexture"),De.setValue(z,"batchingIdTexture",lt._indirectTexture,B),De.setOptional(z,lt,"batchingColorTexture"),lt._colorsTexture!==null&&De.setValue(z,"batchingColorTexture",lt._colorsTexture,B));const Mn=ft.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&ie.update(lt,ft,sn),(hn||ee.receiveShadow!==lt.receiveShadow)&&(ee.receiveShadow=lt.receiveShadow,De.setValue(z,"receiveShadow",lt.receiveShadow)),mt.isMeshGouraudMaterial&&mt.envMap!==null&&(je.envMap.value=Xt,je.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),mt.isMeshStandardMaterial&&mt.envMap===null&&ot.environment!==null&&(je.envMapIntensity.value=ot.environmentIntensity),hn&&(De.setValue(z,"toneMappingExposure",x.toneMappingExposure),ee.needsLights&&Dn(je,Zn),Pt&&mt.fog===!0&&Et.refreshFogUniforms(je,Pt),Et.refreshMaterialUniforms(je,mt,D,N,p.state.transmissionRenderTarget[U.id]),Pa.upload(z,Mi(ee),je,B)),mt.isShaderMaterial&&mt.uniformsNeedUpdate===!0&&(Pa.upload(z,Mi(ee),je,B),mt.uniformsNeedUpdate=!1),mt.isSpriteMaterial&&De.setValue(z,"center",lt.center),De.setValue(z,"modelViewMatrix",lt.modelViewMatrix),De.setValue(z,"normalMatrix",lt.normalMatrix),De.setValue(z,"modelMatrix",lt.matrixWorld),mt.isShaderMaterial||mt.isRawShaderMaterial){const Ke=mt.uniformsGroups;for(let un=0,ki=Ke.length;un<ki;un++){const Sn=Ke[un];et.update(Sn,sn),et.bind(Sn,sn)}}return sn}function Dn(U,ot){U.ambientLightColor.needsUpdate=ot,U.lightProbe.needsUpdate=ot,U.directionalLights.needsUpdate=ot,U.directionalLightShadows.needsUpdate=ot,U.pointLights.needsUpdate=ot,U.pointLightShadows.needsUpdate=ot,U.spotLights.needsUpdate=ot,U.spotLightShadows.needsUpdate=ot,U.rectAreaLights.needsUpdate=ot,U.hemisphereLights.needsUpdate=ot}function go(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(U,ot,ft){At.get(U.texture).__webglTexture=ot,At.get(U.depthTexture).__webglTexture=ft;const mt=At.get(U);mt.__hasExternalTextures=!0,mt.__autoAllocateDepthBuffer=ft===void 0,mt.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),mt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,ot){const ft=At.get(U);ft.__webglFramebuffer=ot,ft.__useDefaultFramebuffer=ot===void 0};const qn=z.createFramebuffer();this.setRenderTarget=function(U,ot=0,ft=0){T=U,w=ot,A=ft;let mt=!0,lt=null,Pt=!1,Ot=!1;if(U){const Xt=At.get(U);if(Xt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(z.FRAMEBUFFER,null),mt=!1;else if(Xt.__webglFramebuffer===void 0)B.setupRenderTarget(U);else if(Xt.__hasExternalTextures)B.rebindTextures(U,At.get(U.texture).__webglTexture,At.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Jt=U.depthTexture;if(Xt.__boundDepthTexture!==Jt){if(Jt!==null&&At.has(Jt)&&(U.width!==Jt.image.width||U.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(U)}}const se=U.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Ot=!0);const re=At.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(re[ot])?lt=re[ot][ft]:lt=re[ot],Pt=!0):U.samples>0&&B.useMultisampledRTT(U)===!1?lt=At.get(U).__webglMultisampledFramebuffer:Array.isArray(re)?lt=re[ft]:lt=re,P.copy(U.viewport),C.copy(U.scissor),R=U.scissorTest}else P.copy(q).multiplyScalar(D).floor(),C.copy(K).multiplyScalar(D).floor(),R=Y;if(ft!==0&&(lt=qn),dt.bindFramebuffer(z.FRAMEBUFFER,lt)&&mt&&dt.drawBuffers(U,lt),dt.viewport(P),dt.scissor(C),dt.setScissorTest(R),Pt){const Xt=At.get(U.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Xt.__webglTexture,ft)}else if(Ot){const Xt=At.get(U.texture),se=ot;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.__webglTexture,ft,se)}else if(U!==null&&ft!==0){const Xt=At.get(U.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xt.__webglTexture,ft)}S=-1},this.readRenderTargetPixels=function(U,ot,ft,mt,lt,Pt,Ot){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=At.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){dt.bindFramebuffer(z.FRAMEBUFFER,qt);try{const Xt=U.texture,se=Xt.format,re=Xt.type;if(!St.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=U.width-mt&&ft>=0&&ft<=U.height-lt&&z.readPixels(ot,ft,mt,lt,ce.convert(se),ce.convert(re),Pt)}finally{const Xt=T!==null?At.get(T).__webglFramebuffer:null;dt.bindFramebuffer(z.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(U,ot,ft,mt,lt,Pt,Ot){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=At.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){const Xt=U.texture,se=Xt.format,re=Xt.type;if(!St.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ot>=0&&ot<=U.width-mt&&ft>=0&&ft<=U.height-lt){dt.bindFramebuffer(z.FRAMEBUFFER,qt);const Jt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.bufferData(z.PIXEL_PACK_BUFFER,Pt.byteLength,z.STREAM_READ),z.readPixels(ot,ft,mt,lt,ce.convert(se),ce.convert(re),0);const fe=T!==null?At.get(T).__webglFramebuffer:null;dt.bindFramebuffer(z.FRAMEBUFFER,fe);const xe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Qd(z,xe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pt),z.deleteBuffer(Jt),z.deleteSync(xe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,ot=null,ft=0){U.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ot=arguments[0]||null,U=arguments[1]);const mt=Math.pow(2,-ft),lt=Math.floor(U.image.width*mt),Pt=Math.floor(U.image.height*mt),Ot=ot!==null?ot.x:0,qt=ot!==null?ot.y:0;B.setTexture2D(U,0),z.copyTexSubImage2D(z.TEXTURE_2D,ft,0,0,Ot,qt,lt,Pt),dt.unbindTexture()};const fi=z.createFramebuffer(),Ss=z.createFramebuffer();this.copyTextureToTexture=function(U,ot,ft=null,mt=null,lt=0,Pt=null){U.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),mt=arguments[0]||null,U=arguments[1],ot=arguments[2],Pt=arguments[3]||0,ft=null),Pt===null&&(lt!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=lt,lt=0):Pt=0);let Ot,qt,Xt,se,re,Jt,fe,xe,Ge;const Fe=U.isCompressedTexture?U.mipmaps[Pt]:U.image;if(ft!==null)Ot=ft.max.x-ft.min.x,qt=ft.max.y-ft.min.y,Xt=ft.isBox3?ft.max.z-ft.min.z:1,se=ft.min.x,re=ft.min.y,Jt=ft.isBox3?ft.min.z:0;else{const Mn=Math.pow(2,-lt);Ot=Math.floor(Fe.width*Mn),qt=Math.floor(Fe.height*Mn),U.isDataArrayTexture?Xt=Fe.depth:U.isData3DTexture?Xt=Math.floor(Fe.depth*Mn):Xt=1,se=0,re=0,Jt=0}mt!==null?(fe=mt.x,xe=mt.y,Ge=mt.z):(fe=0,xe=0,Ge=0);const Ae=ce.convert(ot.format),ee=ce.convert(ot.type);let Xe;ot.isData3DTexture?(B.setTexture3D(ot,0),Xe=z.TEXTURE_3D):ot.isDataArrayTexture||ot.isCompressedArrayTexture?(B.setTexture2DArray(ot,0),Xe=z.TEXTURE_2D_ARRAY):(B.setTexture2D(ot,0),Xe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,ot.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,ot.unpackAlignment);const Pe=z.getParameter(z.UNPACK_ROW_LENGTH),sn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Nn=z.getParameter(z.UNPACK_SKIP_PIXELS),hn=z.getParameter(z.UNPACK_SKIP_ROWS),Zn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Fe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Fe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,se),z.pixelStorei(z.UNPACK_SKIP_ROWS,re),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Jt);const De=U.isDataArrayTexture||U.isData3DTexture,je=ot.isDataArrayTexture||ot.isData3DTexture;if(U.isDepthTexture){const Mn=At.get(U),Ke=At.get(ot),un=At.get(Mn.__renderTarget),ki=At.get(Ke.__renderTarget);dt.bindFramebuffer(z.READ_FRAMEBUFFER,un.__webglFramebuffer),dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Sn=0;Sn<Xt;Sn++)De&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.get(U).__webglTexture,lt,Jt+Sn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.get(ot).__webglTexture,Pt,Ge+Sn)),z.blitFramebuffer(se,re,Ot,qt,fe,xe,Ot,qt,z.DEPTH_BUFFER_BIT,z.NEAREST);dt.bindFramebuffer(z.READ_FRAMEBUFFER,null),dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(lt!==0||U.isRenderTargetTexture||At.has(U)){const Mn=At.get(U),Ke=At.get(ot);dt.bindFramebuffer(z.READ_FRAMEBUFFER,fi),dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ss);for(let un=0;un<Xt;un++)De?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Mn.__webglTexture,lt,Jt+un):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mn.__webglTexture,lt),je?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ke.__webglTexture,Pt,Ge+un):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ke.__webglTexture,Pt),lt!==0?z.blitFramebuffer(se,re,Ot,qt,fe,xe,Ot,qt,z.COLOR_BUFFER_BIT,z.NEAREST):je?z.copyTexSubImage3D(Xe,Pt,fe,xe,Ge+un,se,re,Ot,qt):z.copyTexSubImage2D(Xe,Pt,fe,xe,se,re,Ot,qt);dt.bindFramebuffer(z.READ_FRAMEBUFFER,null),dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else je?U.isDataTexture||U.isData3DTexture?z.texSubImage3D(Xe,Pt,fe,xe,Ge,Ot,qt,Xt,Ae,ee,Fe.data):ot.isCompressedArrayTexture?z.compressedTexSubImage3D(Xe,Pt,fe,xe,Ge,Ot,qt,Xt,Ae,Fe.data):z.texSubImage3D(Xe,Pt,fe,xe,Ge,Ot,qt,Xt,Ae,ee,Fe):U.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pt,fe,xe,Ot,qt,Ae,ee,Fe.data):U.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pt,fe,xe,Fe.width,Fe.height,Ae,Fe.data):z.texSubImage2D(z.TEXTURE_2D,Pt,fe,xe,Ot,qt,Ae,ee,Fe);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,sn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nn),z.pixelStorei(z.UNPACK_SKIP_ROWS,hn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Zn),Pt===0&&ot.generateMipmaps&&z.generateMipmap(Xe),dt.unbindTexture()},this.copyTextureToTexture3D=function(U,ot,ft=null,mt=null,lt=0){return U.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ft=arguments[0]||null,mt=arguments[1]||null,U=arguments[2],ot=arguments[3],lt=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,ot,ft,mt,lt)},this.initRenderTarget=function(U){At.get(U).__webglFramebuffer===void 0&&B.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?B.setTextureCube(U,0):U.isData3DTexture?B.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?B.setTexture2DArray(U,0):B.setTexture2D(U,0),dt.unbindTexture()},this.resetState=function(){w=0,A=0,T=null,dt.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}}const gh={type:"change"},Ql={type:"start"},Cu={type:"end"},xa=new Ho,vh=new Xi,D1=Math.cos(70*X.DEG2RAD),dn=new E,Un=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dr=1e-6;class N1 extends Zp{constructor(t,e=null){super(t,e),this.state=He.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new en,this._lastTargetPosition=new E,this._quat=new en().setFromUnitVectors(t.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xc,this._sphericalDelta=new Xc,this._scale=1,this._panOffset=new E,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new E,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k1.bind(this),this._onPointerDown=U1.bind(this),this._onPointerUp=z1.bind(this),this._onContextMenu=X1.bind(this),this._onMouseWheel=H1.bind(this),this._onKeyDown=W1.bind(this),this._onTouchStart=V1.bind(this),this._onTouchMove=G1.bind(this),this._onMouseDown=B1.bind(this),this._onMouseMove=O1.bind(this),this._interceptControlDown=Y1.bind(this),this._interceptControlUp=$1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gh),this.update(),this.state=He.NONE}update(t=null){const e=this.object.position;dn.copy(e).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),e.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=dn.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new E(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<D1?this.object.lookAt(this.target):(vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(vh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Dr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dr||this._lastTargetPosition.distanceToSquared(this.target)>Dr?(this.dispatchEvent(gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Un/60*this.autoRotateSpeed*t:Un/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){dn.setFromMatrixColumn(e,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,e){this.screenSpacePanning===!0?dn.setFromMatrixColumn(e,1):(dn.setFromMatrixColumn(e,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;dn.copy(s).sub(this.target);let o=dn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,a=n.width,r=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function U1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function k1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function z1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cu),this.state=He.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function B1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=He.DOLLY;break;case qs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=He.ROTATE}break;case qs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Ql)}function O1(i){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function H1(i){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(i.preventDefault(),this.dispatchEvent(Ql),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cu))}function W1(i){this.enabled!==!1&&this._handleKeyDown(i)}function V1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case $i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=He.TOUCH_ROTATE;break;case $i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case $i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=He.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Ql)}function G1(i){switch(this._trackPointer(i),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=He.NONE}}function X1(i){this.enabled!==!1&&i.preventDefault()}function Y1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Pu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const q1=new ql(-1,1,1,-1,0,1);class Z1 extends Yt{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const j1=new Z1;class Jl{constructor(t){this._mesh=new Be(j1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,q1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class K1 extends mo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zo.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Jl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xh extends mo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Q1 extends mo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class J1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Gt);this._width=n.width,this._height=n.height,e=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new K1(Pu),this.copyPass.material.blending=Ii,this.clock=new yu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}xh!==void 0&&(a instanceof xh?n=!0:a instanceof Q1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tv extends mo{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ut}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const ev={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class lo extends mo{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Gt(t.x,t.y):new Gt(256,256),this.clearColor=new Ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jn(o,a,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Jn(o,a,{type:xi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Jn(o,a,{type:xi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),a=Math.round(a/2)}const r=ev;this.highPassUniforms=zo.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Gt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Pu;this.copyUniforms=zo.clone(h.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Do,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ut,this.oldClearAlpha=1,this.basic=new ko,this.fsQuad=new Jl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Gt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=lo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=lo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Gt(.5,.5)},direction:{value:new Gt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}lo.BlurDirectionX=new Gt(1,0);lo.BlurDirectionY=new Gt(0,1);const nv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class iv extends mo{constructor(){super();const t=nv;this.uniforms=zo.clone(t.uniforms),this.material=new Lp({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Jl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ie.getTransfer(this._outputColorSpace)===ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Ru(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function _h(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function co(i){const t=Math.max(0,Math.min(1,(i-1.54)/.6949999999999998)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.8)/.2),2))),n=.056*_h(t,.38,.24),s=-.042*Ru(.54,.88,t),o=.016*_h(t,.78,.13);return(.228+n+s+o)*e}function Qi(i){const t=Math.max(0,Math.min(1,(i-1.66)/.575)),e=.02*Math.pow(1-Ru(0,.42,t),1.6),n=-.01*Math.sin(t*Math.PI);return 1.578+e+n}const _s=[{rootX:.024,rootY:.126,rootZ:-3.6,tipX:.34,tipY:.142,tipZ:-3.72},{rootX:.024,rootY:.126,rootZ:-3.78,tipX:.49,tipY:.148,tipZ:-3.96},{rootX:.024,rootY:.126,rootZ:-3.96,tipX:.55,tipY:.152,tipZ:-4.22},{rootX:.024,rootY:.126,rootZ:-4.14,tipX:.46,tipY:.146,tipZ:-4.45},{rootX:.024,rootY:.126,rootZ:-4.3,tipX:.27,tipY:.138,tipZ:-4.58}],za=[{parentBone:"tail_1",rootX:.18,rootY:.75,rootZ:-.84,tipX:.44,tipY:.72,tipZ:-.98},{parentBone:"tail_2",rootX:.15,rootY:.67,rootZ:-1.1,tipX:.5,tipY:.63,tipZ:-1.27},{parentBone:"tail_2",rootX:.12,rootY:.59,rootZ:-1.34,tipX:.37,tipY:.56,tipZ:-1.52}],Vo=new E(.435,.03,.8999).normalize(),Go=new E(-.435,.03,.8999).normalize(),Ba=.082;function Lu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.342:.318),o=t?1.005:-.555,a=.04,r=t?.088:.082,l=[],c=[-.88,-.29,.29,.88];for(let h=0;h<4;h++){const u=c[h]+e*.055,d=h===1||h===2,f=(t?.126:.118)*(d?1:.86),g=(t?.066:.062)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.036,dirX:Math.sin(u)*.92,dirZ:Math.cos(u),toeLength:f,baseRadius:d?.044:.039,tipRadius:d?.029:.0255,clawLength:g})}return l}function sv(){const i=[{name:"root",parent:null,worldPos:[0,.86,.12]},{name:"pelvis",parent:"root",worldPos:[0,.83,-.54]},{name:"spine_1",parent:"root",worldPos:[0,.85,.14]},{name:"spine_2",parent:"spine_1",worldPos:[0,.91,.5]},{name:"chest",parent:"spine_2",worldPos:[0,.98,.86]},{name:"neck_1",parent:"chest",worldPos:[0,1.11,1.08]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.27,1.24]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.44,1.39]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.56,1.51]},{name:"head",parent:"neck_4",worldPos:[0,1.63,1.62]},{name:"eye_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eye_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidUpper_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidLower_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidLower_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"teethUpper",parent:"head",worldPos:[0,1.592,1.95]},{name:"jaw",parent:"head",worldPos:[0,1.588,1.66]},{name:"teethLower",parent:"jaw",worldPos:[0,1.568,1.95]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.568,1.74]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.568,1.85]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.568,1.96]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.566,2.07]},{name:"ear_L_1",parent:"head",worldPos:[.158,1.772,1.57]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.208,1.895,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.246,2.005,1.19]},{name:"ear_R_1",parent:"head",worldPos:[-.158,1.772,1.57]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.208,1.895,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.246,2.005,1.19]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.268,1.648,1.58]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.348,1.68,1.43]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.268,1.648,1.58]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.348,1.68,1.43]},{name:"cheekLower_L_1",parent:"head",worldPos:[.252,1.552,1.61]},{name:"cheekLower_L_2",parent:"cheekLower_L_1",worldPos:[.312,1.562,1.48]},{name:"cheekLower_R_1",parent:"head",worldPos:[-.252,1.552,1.61]},{name:"cheekLower_R_2",parent:"cheekLower_R_1",worldPos:[-.312,1.562,1.48]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.235,.94,.88]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.272,.8,.9]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.325,.47,.8]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.338,.155,.94]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.342,.044,1.045]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.222,.77,-.55]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.295,.46,-.34]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.312,.23,-.66]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.318,.044,-.515]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.23,1.11,.78]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.38,1.15,.76]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.96,1.18,.5]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.72,1.24,.96]}),[{mid:[n*1.62,1.16,.18],tip:[n*1.54,1.06,-.66]},{mid:[n*2.02,1.17,.24],tip:[n*2.24,1.07,-.62]},{mid:[n*2.38,1.19,.36],tip:[n*2.88,1.09,-.44]},{mid:[n*2.72,1.21,.52],tip:[n*3.44,1.12,-.16]},{mid:[n*3.04,1.23,.74],tip:[n*3.88,1.16,.24]},{mid:[n*3.22,1.25,.94],tip:[n*4.28,1.2,.76]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.78,-.82],[0,.68,-1.16],[0,.54,-1.54],[0,.39,-1.94],[0,.26,-2.35],[0,.17,-2.76],[0,.13,-3.18],[0,.126,-3.58],[0,.126,-3.98],[0,.126,-4.42]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;za.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.024,.126,-3.96]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.024,.126,-3.96]}),_s.forEach((e,n)=>{i.push({name:`tailFin_R_${n+1}`,parent:"tailFinHinge_R",worldPos:[-e.rootX,e.rootY,e.rootZ]})}),i.push({name:"prostheticCollar",parent:"tail_8",worldPos:[.024,.128,-3.54]},{name:"prostheticRod",parent:"tail_9",worldPos:[.036,.138,-3.96]}),_s.forEach((e,n)=>{i.push({name:`tailFin_L_${n+1}`,parent:"tailFinHinge_L",worldPos:[e.rootX,e.rootY,e.rootZ]})}),i}function ov(){const i=sv(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new Vl;c.name=l.name;const h=new E(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);if(!u||!d)throw new Error(`Missing parent bone ${l.parent} for ${l.name}`);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new Ya(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}function av(i,t,e){let n=i*374761393+t*668265263+e*1442695041|0;n=(n^n>>>13)*1274126177;const s=((n^n>>>16)>>>0)/4294967296;let o=i*1103515245+t*12345+(e+7919)*2654435761|0;o=(o^o>>>15)*2246822519;const a=((o^o>>>13)>>>0)/4294967296;let r=i*73856093+t*19349663+(e+31337)*83492791|0;r=(r^r>>>14)*1597334677;const l=((r^r>>>15)>>>0)/4294967296;return[s,a,l]}function _a(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Nr(i,t,e,n,s,o=1){const a=i*e,r=t*n,l=Math.floor(a),c=Math.floor(r);let h=1e9,u=1e9,d=.5,f=0,g=0,v=0;for(let M=-1;M<=1;M++)for(let _=-1;_<=1;_++){const x=l+_,y=c+M,w=(x%e+e)%e,A=(y%n+n)%n,[T,S,b]=av(w,A,s),P=x+.14+T*.72,C=y+.14+S*.72,R=(P-a)*o,L=C-r,F=Math.sqrt(R*R+L*L);F<h?(u=h,h=F,d=b,f=(T-.5)*Math.PI,g=R,v=L):F<u&&(u=F)}const m=Math.max(0,(u-h)*.5),p=g*Math.cos(f)+v*Math.sin(f);return{edgeDist:m,centerDist:h,cellTone:d,cellAngle:p}}let Ma=null;function rv(i=1024){if(Ma)return Ma;const t=i,e=new Float32Array(t*t),n=new Float32Array(t*t),s=new Float32Array(t*t),o=new Float32Array(t*t),a=new Float32Array(t*t),r=28,l=76;for(let D=0;D<t;D++){const W=D/t;for(let O=0;O<t;O++){const q=O/t,K=D*t+O,Y=Nr(q,W,r,r,101,1.08),V=Nr(q,W,l,l,409,1),H=_a(.015,.24,Y.edgeDist),J=_a(.02,.28,V.edgeDist),ht=Math.sin((q*135+W*47+Y.cellTone*6.28)*Math.PI*2)*Math.sin((q*29-W*113+Y.cellTone*3.14)*Math.PI*2),Q=ht>.86?-.055*(ht-.86)*7:0,st=Math.max(-.08,Math.min(.08,Y.cellAngle*.11))*H,$=H*(.76+.14*Y.cellTone)+J*.22*(1-H*.55)+st+Q*H;e[K]=Math.max(0,Math.min(1,$));const tt=1-H,yt=.3+.09*(1-Y.cellTone)+tt*.52+(1-J)*.08-Q*.4;n[K]=Math.max(.18,Math.min(.95,yt));const rt=.24+.76*_a(0,.16,Y.edgeDist)*(.85+.15*J);s[K]=Math.max(.15,Math.min(1,rt)),o[K]=Y.cellTone*.7+V.cellTone*.3,a[K]=Math.max(0,Math.min(1,.32+.58*Y.cellTone*H+.1*J))}}const c=document.createElement("canvas"),h=document.createElement("canvas"),u=document.createElement("canvas"),d=document.createElement("canvas"),f=document.createElement("canvas");for(const D of[c,h,u,d,f])D.width=t,D.height=t;const g=c.getContext("2d"),v=h.getContext("2d"),m=u.getContext("2d"),p=d.getContext("2d"),M=f.getContext("2d"),_=g.createImageData(t,t),x=v.createImageData(t,t),y=m.createImageData(t,t),w=p.createImageData(t,t),A=M.createImageData(t,t),T=3.6;for(let D=0;D<t;D++){const W=(D-1+t)%t,O=(D+1)%t;for(let q=0;q<t;q++){const K=(q-1+t)%t,Y=(q+1)%t,V=D*t+q,H=V*4,J=e[W*t+K],ht=e[W*t+q],Q=e[W*t+Y],st=e[D*t+K],$=e[D*t+Y],tt=e[O*t+K],yt=e[O*t+q],rt=e[O*t+Y],z=(Q+3*$+rt-(J+3*st+tt))*T,xt=(tt+3*yt+rt-(J+3*ht+Q))*T;let at=-z,St=-xt,dt=1;const Dt=1/Math.sqrt(at*at+St*St+dt*dt);at*=Dt,St*=Dt,dt*=Dt,x.data[H]=Math.round((at*.5+.5)*255),x.data[H+1]=Math.round((St*.5+.5)*255),x.data[H+2]=Math.round((dt*.5+.5)*255),x.data[H+3]=255;const At=e[V],B=o[V],I=12+At*15+B*8;_.data[H]=Math.round(I*.86),_.data[H+1]=Math.round(I*.96),_.data[H+2]=Math.round(I*1.14),_.data[H+3]=255;const it=Math.round(n[V]*255);y.data[H]=it,y.data[H+1]=it,y.data[H+2]=it,y.data[H+3]=255;const pt=Math.round(s[V]*255);w.data[H]=pt,w.data[H+1]=pt,w.data[H+2]=pt,w.data[H+3]=255;const _t=Math.round(a[V]*255);A.data[H]=_t,A.data[H+1]=_t,A.data[H+2]=_t,A.data[H+3]=255}}g.putImageData(_,0,0),v.putImageData(x,0,0),m.putImageData(y,0,0),p.putImageData(w,0,0),M.putImageData(A,0,0);const S=(D,W=!1,O=7)=>(D.wrapS=_i,D.wrapT=_i,D.repeat.set(O,O),D.anisotropy=8,D.colorSpace=W?_n:Qn,D.needsUpdate=!0,D),b=512,P=document.createElement("canvas"),C=document.createElement("canvas");P.width=b,P.height=b,C.width=b,C.height=b;const R=P.getContext("2d"),L=C.getContext("2d"),F=R.createImageData(b,b),k=L.createImageData(b,b),N=new Float32Array(b*b);for(let D=0;D<b;D++){const W=D/b;for(let O=0;O<b;O++){const q=O/b,K=D*b+O,Y=Math.sin(W*92*Math.PI*2+Math.sin(q*9*Math.PI*2)*1.4)*.25+Math.sin(W*210*Math.PI*2+q*18)*.12,V=Nr(q,W,44,44,887,1),H=_a(.08,.22,V.edgeDist)*(V.cellTone>.45?.55:.15);N[K]=.5+Y*.35+H*.4}}for(let D=0;D<b;D++){const W=(D-1+b)%b,O=(D+1)%b;for(let q=0;q<b;q++){const K=(q-1+b)%b,Y=(q+1)%b,V=D*b+q,H=V*4,J=(N[D*b+Y]-N[D*b+K])*2.4,ht=(N[O*b+q]-N[W*b+q])*2.4,Q=1/Math.sqrt(J*J+ht*ht+1);F.data[H]=Math.round((-J*Q*.5+.5)*255),F.data[H+1]=Math.round((-ht*Q*.5+.5)*255),F.data[H+2]=Math.round((Q*.5+.5)*255),F.data[H+3]=255;const st=Math.round((.36+(1-N[V])*.28)*255);k.data[H]=st,k.data[H+1]=st,k.data[H+2]=st,k.data[H+3]=255}}return R.putImageData(F,0,0),L.putImageData(k,0,0),Ma={albedoMap:S(new Ln(c),!0,7),normalMap:S(new Ln(h),!1,7),roughnessMap:S(new Ln(u),!1,7),aoMap:S(new Ln(d),!1,7),iridescenceThicknessMap:S(new Ln(f),!1,7),prostheticPasteNormalMap:S(new Ln(P),!1,3),prostheticPasteRoughnessMap:S(new Ln(C),!1,3)},Ma}let ds=null;function lv(i=1024){if(ds)return ds;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=8,n.data[u+1]=12,n.data[u+2]=11,n.data[u+3]=255;continue}const d=Math.sin(h*68+Math.sin(c*11)*.65),f=Math.sin(h*142-Math.cos(c*19)*.85),g=Math.sin(h*260+c*24),v=Math.sin(h*23+1.4)*Math.cos(c*15-h*5),m=d*.42+f*.33+g*.15+v*.25,p=Math.sin(c*42+d*.6)*.08,M=Math.exp(-Math.pow((c-.38)/.13,2)),_=Math.max(0,Math.min(1,(.94-c)/.16)),x=Math.max(0,Math.min(1,1-c*1.08)),y=.84+.3*m+p;let w=(38+166*x+66*M)*y*_,A=(146+106*x+34*M)*y*_,T=(64-24*x+22*(1-x))*y*_;if(v<-.58&&c>.25&&c<.78){const S=Math.min(1,(-v-.58)*2.2);w*=1-.42*S,A*=1-.34*S,T*=1-.28*S}n.data[u]=Math.max(0,Math.min(255,Math.round(w))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(T))),n.data[u+3]=255}}return e.putImageData(n,0,0),ds=new Ln(t),ds.colorSpace=_n,ds.anisotropy=8,ds.needsUpdate=!0,ds}function cv(){const i=lv(1024),t={uPupilDilation:{value:.76},uLightDir:{value:new E(.45,.65,.6).normalize()},uAlphaGlow:{value:0}},e=new li({name:"Toothless_Iris_PBR",map:i,roughness:.55,metalness:0,envMapIntensity:.65});e.onBeforeCompile=s=>{s.uniforms.uPupilDilation=t.uPupilDilation,s.uniforms.uLightDir=t.uLightDir,s.uniforms.uAlphaGlow=t.uAlphaGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
        varying vec2 vIrisUv;
        varying vec3 vWorldNorm;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vIrisUv = uv;
        vWorldNorm = normalize(mat3(modelMatrix) * normal);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uPupilDilation;
        uniform vec3 uLightDir;
        uniform float uAlphaGlow;
        varying vec2 vIrisUv;
        varying vec3 vWorldNorm;`).replace("#include <map_fragment>",`
        // Map UV [0,1] -> centered iris coordinates [-1,1] on anterior pole
        vec2 p = (vIrisUv - 0.5) * 2.0;
        float rRaw = length(p);

        // Dynamic Night Fury pupil: narrow vertical oval slit (0.0) <-> medium oval (0.5) <-> wide soulful oval (1.0)
        // Uses pure C-infinity quadratic y^2 (NEVER abs(y) or superExp < 2), guaranteeing smooth rounded oval sides
        // with zero rhombus/diamond corners at every dilation level!
        float d = clamp(uPupilDilation, 0.0, 1.0);
        float pWidth = mix(0.058, 0.48, pow(d, 0.80));
        float pHeight = mix(0.55, 0.67, d);

        float yNorm = clamp(p.y / pHeight, -1.5, 1.5);
        float yNormSq = clamp(yNorm * yNorm, 0.0, 1.0);
        // Gentle quadratic narrowing toward top/bottom tips ONLY when constricted (d < 0.42); pure ellipse above 0.42!
        float slitTipFactor = mix(0.38, 1.0, smoothstep(0.0, 0.42, d));
        float effHalfWidth = max(0.020, pWidth * mix(1.0, slitTipFactor, yNormSq));
        float pupilDist = sqrt((p.x * p.x) / (effHalfWidth * effHalfWidth) + yNorm * yNorm);

        float pupilMask = smoothstep(0.955, 1.025, pupilDist);

        // Elastic radial iris fiber remap outside pupil boundary
        float angle = atan(p.y, p.x);
        float boundaryR = mix(pWidth * 0.85, pHeight * 0.85, abs(sin(angle)));
        float irisT = clamp((rRaw - boundaryR * 0.70) / max(0.12, 0.96 - boundaryR * 0.70), 0.0, 1.0);
        float remappedR = mix(0.16, 0.96, irisT);
        vec2 warpedUv = vec2(0.5) + vec2(cos(angle), sin(angle)) * remappedR * 0.5;

        vec4 sampledIris = texture2D(map, clamp(warpedUv, 0.002, 0.998));

        // Concave iris opposing caustic illumination + warm golden-lime inner ring
        float caustic = clamp(dot(normalize(vec3(-p.x * 0.65, -p.y * 0.65, 0.75)), normalize(uLightDir)), 0.0, 1.0);
        vec3 irisLit = sampledIris.rgb * (0.96 + 1.04 * pow(caustic, 1.3));

        float ruffEdge = exp(-pow((pupilDist - 1.08) / 0.16, 2.0)) * pupilMask;
        irisLit += vec3(0.30, 0.40, 0.05) * ruffEdge;

        // Signature crisp rounded-square sky catchlight (like 01-macro-face-eyes-scales.jpg & 07)
        vec2 cp = (p - vec2(-0.20, 0.26)) / vec2(0.082, 0.068);
        float sqDist = pow(abs(cp.x), 3.4) + pow(abs(cp.y), 3.4);
        float catchSpot = 1.0 - smoothstep(0.70, 1.15, sqDist);

        vec2 cp2 = (p - vec2(0.24, -0.26)) / 0.052;
        float catchSpot2 = exp(-dot(cp2, cp2)) * 0.32;

        // Alpha bioluminescent cyan shift inside stromal fibers when Alpha Glow is active
        irisLit = mix(irisLit, irisLit * vec3(0.45, 1.25, 1.85) + vec3(0.05, 0.42, 0.85) * (1.0 - irisT), uAlphaGlow * 0.78);

        // Deep velvet-black pupil core + lively anime/Pixar/DreamWorks sky catchlight
        diffuseColor.rgb *= mix(vec3(0.002, 0.003, 0.005), irisLit, pupilMask);
        diffuseColor.rgb += vec3(0.95, 0.98, 1.0) * (catchSpot * 0.72 + catchSpot2);
        `).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        // Nocturnal Night Fury tapetum-lucidum eye presence + Alpha glow
        vec2 ep = (vIrisUv - 0.5) * 2.0;
        float eRadial = clamp(1.0 - length(ep) * 0.92, 0.0, 1.0);
        totalEmissiveRadiance += diffuseColor.rgb * (0.34 + uAlphaGlow * 0.92) * eRadial;`)};const n=new In({name:"Toothless_Cornea_WetCoat",color:new Ut(16777215),transparent:!0,opacity:.14,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function Ur(i,t,e){i.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uAlphaGlow=t.uAlphaGlow,n.uniforms.uBiolumGlow=t.uBiolumGlow,n.uniforms.uLightningCloak=t.uLightningCloak,n.uniforms.uSunDir=t.uSunDir,n.uniforms.uSunColor=t.uSunColor,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aAnatomyData;
        varying vec4 vAnatomyData;
        varying vec3 vObjPos;
        varying vec3 vWorldPositionCustom;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vAnatomyData = aAnatomyData;
        vObjPos = position;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vWorldPositionCustom = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime;
        uniform float uAlphaGlow;
        uniform float uBiolumGlow;
        uniform float uLightningCloak;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec4 vAnatomyData;
        varying vec3 vObjPos;
        varying vec3 vWorldPositionCustom;

        float hash31(vec3 p) {
          p = fract(p * 0.1031);
          p += dot(p, p.yzx + 33.33);
          return fract((p.x + p.y) * p.z);
        }

        float noise3D(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(
              mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
              mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x),
              f.y
            ),
            mix(
              mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
              mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x),
              f.y
            ),
            f.z
          );
        }

        // Multi-frequency 3D Cellular Voronoi evaluator for smooth, natural reptilian scale gradation:
        // Bridges vaguely from fine body hide -> medium transitional limb scales -> larger distal paw/snout scutes!
        float evalArmorScuteDome3D(vec3 p, float cellFreq) {
          vec3 sp = p * cellFreq;
          vec3 ip = floor(sp);
          vec3 fp = fract(sp);
          float d1 = 8.0;
          float d2 = 8.0;
          for (int dz = -1; dz <= 1; dz++) {
            for (int dy = -1; dy <= 1; dy++) {
              for (int dx = -1; dx <= 1; dx++) {
                vec3 off = vec3(float(dx), float(dy), float(dz));
                vec3 cell = ip + off;
                vec3 jitter = vec3(
                  hash31(cell + vec3(1.7, 9.2, 3.4)),
                  hash31(cell + vec3(8.3, 2.8, 7.1)),
                  hash31(cell + vec3(4.9, 6.1, 5.5))
                ) * 0.72 + 0.14;
                vec3 r = off + jitter - fp;
                float d = length(r);
                if (d < d1) {
                  d2 = d1;
                  d1 = d;
                } else if (d < d2) {
                  d2 = d;
                }
              }
            }
          }
          float border = clamp((d2 - d1) / 0.32, 0.0, 1.0);
          return smoothstep(0.0, 0.48, border) * (1.0 - 0.26 * d1 * d1);
        }

        // Evaluates organically dithered, vague multi-tier scale blending (zero sharp boundary lines!)
        vec2 evalBlendedScuteHierarchy(vec3 p, float rawAnatomyX) {
          float zoneNoise =
            (noise3D(p * 8.5 + vec3(2.1, 0.7, 4.3)) - 0.5) * 0.52 +
            (noise3D(p * 21.0 - vec3(1.4, 3.8, 0.9)) - 0.5) * 0.30;
          float z = rawAnatomyX + zoneNoise;
          float mesoW = smoothstep(0.42, 1.38, z);
          float macroW = smoothstep(0.96, 1.96, z);
          float totalW = clamp(mesoW * 0.55 + macroW * 0.45, 0.0, 1.0);
          if (totalW <= 0.005) return vec2(0.5, 0.0);
          float mesoDome = evalArmorScuteDome3D(p, 64.0);
          float macroDome = macroW > 0.005 ? evalArmorScuteDome3D(p + vec3(0.37, 0.19, 0.53), 35.0) : mesoDome;
          float dome = mix(mesoDome, macroDome, smoothstep(0.0, 1.0, macroW));
          return vec2(dome, totalW);
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        // Smooth, vaguely blended multi-tier scale hierarchy across body, limbs, paws & head!
        float scaleDither = (noise3D(vObjPos * 10.5) - 0.5) * 0.34;
        float macroWeight = smoothstep(0.08, 0.96, vAnatomyData.x + scaleDither);
        float scarWeight = clamp(vAnatomyData.y, 0.0, 1.0);
        float thinness = clamp(vAnatomyData.w, 0.0, 1.0);

        #ifdef USE_MAP
          vec4 fineAlbedo = texture2D(map, vMapUv * 2.85);
          diffuseColor.rgb = mix(fineAlbedo.rgb * 0.94, diffuseColor.rgb * 1.08, macroWeight);
        #endif

        if (vAnatomyData.x > 0.18 && !${e?"true":"false"}) {
          vec2 scute = evalBlendedScuteHierarchy(vObjPos, vAnatomyData.x);
          if (scute.y > 0.005) {
            // Subtle, natural obsidian-slate tonal modulation so small & large scales merge seamlessly!
            vec3 plateCrown = diffuseColor.rgb * 1.22 + vec3(0.009, 0.011, 0.015);
            vec3 plateGroove = diffuseColor.rgb * 0.52;
            diffuseColor.rgb = mix(diffuseColor.rgb, mix(plateGroove, plateCrown, scute.x), scute.y * 0.68);
          }
        }

        // Subtle Night Fury manta-ray flank mottling
        float mantaPatch = smoothstep(0.54, 0.76, noise3D(vObjPos * vec3(3.4, 4.2, 2.6) + vec3(0.0, 1.3, 2.1)));
        float flankZone = smoothstep(0.15, 0.55, 1.0 - macroWeight) * (1.0 - thinness * 0.7);
        diffuseColor.rgb += vec3(0.014, 0.019, 0.026) * mantaPatch * flankZone;

        // Battle scar dermis shift (muted weathered slate-ash inside brow/chin scar grooves)
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.042, 0.045, 0.052), scarWeight * 0.68);

        // Lightning-cloak reflective silver-blue scale phase (Hidden World lightning stealth)
        if (uLightningCloak > 0.001) {
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.52, 0.68, 0.88), uLightningCloak * 0.78);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float rScaleDither = (noise3D(vObjPos * 10.5) - 0.5) * 0.34;
        float macroRWeight = smoothstep(0.08, 0.96, vAnatomyData.x + rScaleDither);
        float scarRWeight = clamp(vAnatomyData.y, 0.0, 1.0);
        #ifdef USE_ROUGHNESSMAP
          float fineRough = texture2D(roughnessMap, vRoughnessMapUv * 2.85).g;
          roughnessFactor = mix(fineRough * 1.04, roughnessFactor * 0.88, macroRWeight);
        #endif
        if (vAnatomyData.x > 0.18 && !${e?"true":"false"}) {
          vec2 scuteR = evalBlendedScuteHierarchy(vObjPos, vAnatomyData.x);
          if (scuteR.y > 0.005) {
            roughnessFactor = mix(roughnessFactor, mix(0.66, 0.30, scuteR.x), scuteR.y * 0.62);
          }
        }
        roughnessFactor = mix(roughnessFactor, 0.44, scarRWeight * 0.75);
        roughnessFactor = mix(roughnessFactor, 0.072, uLightningCloak * 0.88);
        roughnessFactor = clamp(roughnessFactor, 0.068, 0.96);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.92, uLightningCloak * 0.88);`).replace("#include <normal_fragment_maps>",`#ifdef USE_NORMALMAP_OBJECTSPACE
          normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
          #ifdef FLIP_SIDED
            normal = - normal;
          #endif
          #ifdef DOUBLE_SIDED
            normal = normal * faceDirection;
          #endif
          normal = normalize( normalMatrix * normal );
        #elif defined( USE_NORMALMAP_TANGENTSPACE )
          vec3 mapNMacro = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
          vec3 mapNFine = texture2D( normalMap, vNormalMapUv * 2.85 ).xyz * 2.0 - 1.0;
          float nScaleDither = (noise3D(vObjPos * 10.5) - 0.5) * 0.34;
          float mScaleW = smoothstep(0.08, 0.96, vAnatomyData.x + nScaleDither);
          float scarW = clamp(vAnatomyData.y, 0.0, 1.0);
          vec2 scuteN = (vAnatomyData.x > 0.18 && !${e?"true":"false"})
            ? evalBlendedScuteHierarchy(vObjPos, vAnatomyData.x)
            : vec2(0.5, 0.0);
          vec3 blendedMapN = normalize(mix(
            vec3(mapNFine.xy * 0.90, max(mapNFine.z, 0.15)),
            vec3(mapNMacro.xy * 1.28, max(mapNMacro.z, 0.15)),
            mScaleW
          ));
          blendedMapN.xy *= (1.0 - scarW * 0.72);
          blendedMapN.xy *= normalScale * (1.0 - scuteN.y * 0.38);
          vec3 tbnN = tbn * blendedMapN;
          normal = dot(tbnN, tbnN) > 1e-8 ? normalize(tbnN) : normal;
          if (scuteN.y > 0.005 && !${e?"true":"false"}) {
            float plateBumpH = scuteN.x * scuteN.y * 0.013 * (1.0 - scarW * 0.8);
            vec3 dPdx = dFdx( -vViewPosition );
            vec3 dPdy = dFdy( -vViewPosition );
            vec3 r1 = cross( dPdy, normal );
            vec3 r2 = cross( normal, dPdx );
            float det = dot( dPdx, r1 );
            float signDet = det < 0.0 ? -1.0 : 1.0;
            vec3 surfGrad = signDet * ( dFdx( plateBumpH ) * r1 + dFdy( plateBumpH ) * r2 );
            vec3 pertPlate = abs( det ) * normal - surfGrad;
            normal = dot( pertPlate, pertPlate ) > 1e-12 ? normalize( pertPlate ) : normal;
          }
        #elif defined( USE_BUMPMAP )
          normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float biolumZone = clamp(vAnatomyData.z, 0.0, 1.0);
        float memThin = clamp(vAnatomyData.w, 0.0, 1.0);

        ${e?`
        // Subsurface backlighting through thin scalloped wing/fin patagium membranes
        vec3 viewDirW = normalize(cameraPosition - vWorldPositionCustom);
        float backSun = pow(clamp(dot(viewDirW, -normalize(uSunDir)), 0.0, 1.0), 3.2);
        float veinPattern = 0.65 + 0.35 * sin(vObjPos.x * 26.0 + noise3D(vObjPos * 7.0) * 4.5);
        totalEmissiveRadiance += uSunColor * vec3(0.42, 0.16, 0.08) * backSun * memThin * veinPattern * 0.55;
        `:""}

        // 1. Alpha Dominance Glow (royal cyan-blue inside nostrils, dorsal spine cores & oral throat)
        if (uAlphaGlow > 0.001) {
          float pulse = 0.86 + 0.14 * sin(uTime * 4.2 - vObjPos.z * 2.4);
          vec3 alphaColor = mix(vec3(0.04, 0.42, 1.0), vec3(0.22, 0.86, 1.0), biolumZone);
          totalEmissiveRadiance += alphaColor * biolumZone * uAlphaGlow * 3.4 * pulse;
        }

        // 2. Hidden World Bioluminescent Cavern Markings (ornate glowing stripes & star-specks)
        if (uBiolumGlow > 0.001) {
          float stripeWave = sin(vObjPos.z * 11.5 + abs(vObjPos.x) * 8.5 + noise3D(vObjPos * 4.2) * 2.6);
          float stripeMask = smoothstep(0.72, 0.95, stripeWave) * smoothstep(0.05, 0.45, abs(vObjPos.x));
          float starSpecks = smoothstep(0.84, 0.96, noise3D(vObjPos * 24.0));
          float bioPattern = clamp(stripeMask * 0.75 + starSpecks * 0.65 + biolumZone * 0.55, 0.0, 1.0);
          vec3 bioCyan = mix(vec3(0.05, 0.38, 0.98), vec3(0.18, 0.92, 0.98), starSpecks);
          totalEmissiveRadiance += bioCyan * bioPattern * uBiolumGlow * 1.9;
        }

        // 3. Lightning-Cloak Branching Electric Arcs
        if (uLightningCloak > 0.001) {
          float arcA = abs(noise3D(vObjPos * 5.8 + vec3(0.0, uTime * 3.6, uTime * 2.1)) - 0.5);
          float arcB = abs(noise3D(vObjPos * 13.5 - vec3(uTime * 4.8, 0.0, uTime * 3.2)) - 0.5);
          float bolt = smoothstep(0.045, 0.004, arcA * 0.7 + arcB * 0.35);
          float flicker = 0.65 + 0.35 * sin(uTime * 31.0 + vObjPos.z * 9.0);
          totalEmissiveRadiance += vec3(0.48, 0.84, 1.85) * bolt * uLightningCloak * 4.2 * flicker;
        }`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function hv(){const i=rv(1024),t=cv(),e={uTime:{value:0},uAlphaGlow:{value:.08},uBiolumGlow:{value:0},uLightningCloak:{value:0},uSunDir:{value:new E(-.55,.38,-.74).normalize()},uSunColor:{value:new Ut(16765601)}},n=new In({name:"Toothless_ObsidianScales_PBR",color:new Ut(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new Gt(1.28,1.28),roughnessMap:i.roughnessMap,roughness:.88,aoMap:i.aoMap,aoMapIntensity:.88,metalness:.05,iridescence:.62,iridescenceIOR:1.4,iridescenceThicknessRange:[260,470],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.34,clearcoatRoughness:.3,sheen:.44,sheenRoughness:.48,sheenColor:new Ut(2178905),envMapIntensity:1.48});Ur(n,e,!1);const s=new In({name:"Toothless_PatagiumMembrane_PBR",color:new Ut(15660282),map:i.albedoMap,normalMap:i.normalMap,normalScale:new Gt(.65,.65),roughnessMap:i.roughnessMap,roughness:.96,aoMap:i.aoMap,aoMapIntensity:.65,metalness:.02,iridescence:.38,iridescenceIOR:1.36,iridescenceThicknessRange:[250,430],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.18,clearcoatRoughness:.44,sheen:.42,sheenRoughness:.58,sheenColor:new Ut(1977920),side:tn,envMapIntensity:1.25});Ur(s,e,!0);const o=new In({name:"Toothless_ProstheticScalePaste_PBR",color:new Ut(1185308),normalMap:i.prostheticPasteNormalMap,normalScale:new Gt(.95,.95),roughnessMap:i.prostheticPasteRoughnessMap,roughness:.46,metalness:.14,iridescence:.46,iridescenceIOR:1.4,iridescenceThicknessRange:[270,440],clearcoat:.42,clearcoatRoughness:.28,side:tn,envMapIntensity:1.35});Ur(o,e,!1);const a=new li({name:"Toothless_VikingBronze_PBR",color:new Ut(12094282),metalness:.88,roughness:.33,envMapIntensity:1.45}),r=new li({name:"Toothless_ForgedIron_PBR",color:new Ut(2632754),metalness:.82,roughness:.42,envMapIntensity:1.3}),l=new In({name:"Toothless_ObsidianClaws_PBR",color:new Ut(1316636),roughness:.24,metalness:.08,clearcoat:.65,clearcoatRoughness:.2,envMapIntensity:1.5}),c=new In({name:"Toothless_RetractableTeeth_PBR",color:new Ut(15394524),roughness:.16,metalness:0,clearcoat:.85,clearcoatRoughness:.08,sheen:.2,sheenColor:new Ut(14018293),envMapIntensity:1.2}),h=new In({name:"Toothless_OralGums_PBR",color:new Ut(2628390),normalMap:i.normalMap,normalScale:new Gt(.58,.58),roughnessMap:i.roughnessMap,roughness:.42,metalness:0,clearcoat:.68,clearcoatRoughness:.18,side:tn});h.onBeforeCompile=d=>{d.uniforms.uAlphaGlow=e.uAlphaGlow,d.uniforms.uTime=e.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aAnatomyData;
        varying vec4 vAnatomyData;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vAnatomyData = aAnatomyData;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uAlphaGlow;
        uniform float uTime;
        varying vec4 vAnatomyData;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (uAlphaGlow > 0.001) {
          float throatFire = clamp(vAnatomyData.z, 0.0, 1.0);
          float pulse = 0.84 + 0.16 * sin(uTime * 5.2);
          totalEmissiveRadiance += vec3(0.12, 0.68, 1.5) * throatFire * uAlphaGlow * 2.8 * pulse;
        }`)};const u=new In({name:"Toothless_Tongue_PBR",color:new Ut(7880269),normalMap:i.normalMap,normalScale:new Gt(.68,.68),roughnessMap:i.roughnessMap,roughness:.36,metalness:0,clearcoat:.8,clearcoatRoughness:.14,sheen:.38,sheenColor:new Ut(10904693)});return{maps:i,skinMaterial:n,wingMembraneMaterial:s,prostheticPasteMaterial:o,prostheticBronzeMaterial:a,prostheticIronMaterial:r,clawMaterial:l,teethMaterial:c,oralGumMaterial:h,tongueMaterial:u,eyeMaterials:t,uniforms:e}}function $e(i){let t=0,e=0;for(const f of i){const g=f.getAttribute("position");t+=g.count;const v=f.getIndex();e+=v?v.count:g.count}const n=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Float32Array(t*4),r=new Uint16Array(t*4),l=new Float32Array(t*4),c=t>65535?new Uint32Array(e):new Uint16Array(e);let h=0,u=0;for(const f of i){const g=f.getAttribute("position"),v=f.getAttribute("normal"),m=f.getAttribute("uv"),p=f.getAttribute("aAnatomyData"),M=f.getAttribute("skinIndex"),_=f.getAttribute("skinWeight"),x=g.count;if(n.set(g.array,h*3),v&&s.set(v.array,h*3),m&&o.set(m.array,h*2),p)a.set(p.array,h*4);else for(let w=0;w<x;w++)a[(h+w)*4]=.35;if(M&&_)for(let w=0;w<x*4;w++)r[h*4+w]=M.array[w],l[h*4+w]=_.array[w];const y=f.getIndex();if(y){for(let w=0;w<y.count;w++)c[u+w]=y.getX(w)+h;u+=y.count}else{for(let w=0;w<x;w++)c[u+w]=h+w;u+=x}h+=x}const d=new Yt;return d.setAttribute("position",new Z(n,3)),d.setAttribute("normal",new Z(s,3)),d.setAttribute("uv",new Z(o,2)),d.setAttribute("uv1",new Z(o,2)),d.setAttribute("aAnatomyData",new Z(a,4)),d.setAttribute("skinIndex",new be(r,4)),d.setAttribute("skinWeight",new Zt(l,4)),d.setIndex(new Z(c,1)),d.computeBoundingSphere(),d.computeBoundingBox(),d}function Ve(i,t){const e=t[0]+t[1]+t[2]+t[3];if(e<=1e-6)return{indices:[i[0],0,0,0],weights:[1,0,0,0]};const n=1/e;return{indices:i,weights:[t[0]*n,t[1]*n,t[2]*n,t[3]*n]}}function pi(i,t,e,n=3.2){const s=[];for(let a=0;a<t.length;a++){const r=e[a];let l=i.distanceTo(r);if(a<t.length-1){const h=e[a+1],u=new E().subVectors(h,r),d=u.lengthSq();if(d>1e-6){const f=Math.max(0,Math.min(1,new E().subVectors(i,r).dot(u)/d)),g=new E().copy(r).addScaledVector(u,f);l=Math.min(l,i.distanceTo(g)+f*.08)}}const c=1/Math.pow(Math.max(.035,l),n);s.push({idx:t[a],w:c})}s.sort((a,r)=>r.w-a.w);const o=s.slice(0,4);for(;o.length<4;)o.push({idx:0,w:0});return Ve([o[0].idx,o[1].idx,o[2].idx,o[3].idx],[o[0].w,o[1].w,o[2].w,o[3].w])}function pe(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function de(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function wa(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function Pl(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let g=0;g<e-1;g++)n[g]=(t[g+1][1]-t[g][1])/(t[g+1][0]-t[g][0]);s[0]=n[0],s[e-1]=n[e-2];for(let g=1;g<e-1;g++)n[g-1]*n[g]<=0?s[g]=0:s[g]=(n[g-1]+n[g])*.5;for(let g=0;g<e-1;g++)if(Math.abs(n[g])<1e-8)s[g]=0,s[g+1]=0;else{const v=s[g]/n[g],m=s[g+1]/n[g],p=Math.hypot(v,m);if(p>3){const M=3/p;s[g]=M*v*n[g],s[g+1]=M*m*n[g]}}let o=0;for(let g=0;g<e-1;g++)if(i>=t[g][0]&&i<=t[g+1][0]){o=g;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r,h=2*c-3*l+1,u=c-2*l+r,d=-2*c+3*l,f=c-l;return h*t[o][1]+u*a*s[o]+d*t[o+1][1]+f*a*s[o+1]}const uv=[[-4.55,.018],[-3.95,.052],[-3.05,.095],[-2.1,.16],[-1.35,.228],[-.88,.282],[-.54,.334],[-.1,.328],[.42,.378],[.82,.394],[1.08,.304],[1.32,.25],[1.54,.228]],Iu=[[-4.55,.016],[-3.95,.044],[-3.05,.084],[-2.1,.14],[-1.35,.194],[-.88,.236],[-.54,.274],[-.1,.272],[.42,.306],[.82,.312],[1.08,.246],[1.32,.208],[1.54,.192]],dv=[new E(0,.126,-4.55),new E(0,.126,-4.05),new E(0,.126,-3.55),new E(0,.13,-3.05),new E(0,.19,-2.5),new E(0,.35,-1.92),new E(0,.56,-1.42),new E(0,.74,-.92),new E(0,.81,-.54),new E(0,.82,-.1),new E(0,.87,.4),new E(0,.94,.8),new E(0,1.09,1.06),new E(0,1.31,1.28),new E(0,1.53,1.48),new E(0,1.635,1.66),new E(0,1.654,1.86),new E(0,1.632,2.05),new E(0,1.586,2.235)];let kr=null;function Fu(){return kr||(kr=new ti(dv,!1,"centripetal",.5)),kr}function zr(i){const t=Fu();let e=0,n=1;for(let v=0;v<22;v++){const m=(e+n)*.5;t.getPointAt(m).z<i?e=m:n=m}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new E(0,1,0),l=r.clone().addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=pe(-4.55,-4.46,c);let u=Pl(c,Iu)*h;const d=pe(1.46,1.6,c);if(d>0){const v=Math.max(0,Math.min(1,(c-1.54)/.6949999999999998)),m=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(v-.8)/.2),2))),p=(.192+.014*de(v,.35,.22)-.068*pe(.34,.94,v))*m;u=X.lerp(u,p,d)}let f=u;return c>-.45&&c<1.18&&(f+=.01*de(c,.35,.55)),{point:o.clone().addScaledVector(l,f),tangent:a,up:l}}function Du(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.64)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.38){const r=pe(1.42,1.64,i.z),l=1-r,c=pe(1.36,1.56,i.z);return Ve([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return pi(i,e,n,3.5)}function pv(i,t){const e=[];return e.push(fv(i,t)),e.push(...mv(i,t)),e.push(...gv(i,t)),e.push(...vv(i,t)),$e(e)}function fv(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=Fu(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(y=>i.boneIndexMap.get(y)),r=o.map(y=>i.bindWorldPositions.get(y)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4),g=new E(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),p=[{center:v,fwd:Vo,up:new E(-.16,.985,.06).normalize()},{center:m,fwd:Go,up:new E(.16,.985,.06).normalize()}].map(y=>{const w=new E().crossVectors(y.up,y.fwd).normalize(),A=new E().crossVectors(y.fwd,w).normalize();return{center:y.center,fwd:y.fwd,right:w,up:A}});for(let y=0;y<=e;y++){const w=y/e,A=1-Math.pow(1-w,1.85),T=s.getPointAt(A),S=s.getTangentAt(A).normalize(),b=new E().copy(g).addScaledVector(S,-g.dot(S)).normalize(),P=new E().crossVectors(b,S).normalize(),C=T.z,R=pe(-4.55,-4.46,C),L=Pl(C,uv)*R+.008*de(C,-3.96,.36),F=Pl(C,Iu)*R,k=pe(1.46,1.6,C);let N=L,D=F;if(k>0){const W=Math.max(0,Math.min(1,(C-1.54)/.6949999999999998)),O=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(W-.8)/.2),2))),q=co(C),K=(.192+.014*de(W,.35,.22)-.068*pe(.34,.94,W))*O;N=X.lerp(L,q,k),D=X.lerp(F,K,k)}for(let W=0;W<=n;W++){const O=W/n,q=O*Math.PI*2,K=Math.sin(q),Y=Math.cos(q);let V=N*K,H=D*Y,J=.28,ht=0,Q=0;if(C>-.85&&C<1.18){const rt=de(C,.76,.3),z=de(Math.abs(K),.48,.24)*pe(-.05,-.88,Y),xt=de(K,0,.11)*pe(-.55,-.98,Y)*rt;H-=.026*rt*z-.012*xt,V+=Math.sign(K)*.016*rt*z;const at=de(C,.88,.22)*de(Math.abs(K),.72,.18)*pe(-.08,-.78,Y),St=de(C,-.54,.24)*de(Math.abs(K),.7,.19)*pe(-.05,-.78,Y);H-=.032*at+.028*St;const dt=de(C,.38,.28)*de(Math.abs(K),.92,.16)*de(Y,-.12,.35);V+=Math.sign(K)*Math.sin(C*26)*.003*dt,Y>.75&&C>-.45&&(H+=.01*Math.pow((Y-.75)/.25,2)*de(C,.35,.55))}if(C>=1&&C<1.56){const rt=pe(1,1.18,C)*(1-pe(1.44,1.56,C)),z=de(Math.abs(K),.62,.18)*de(Y,-.35,.3);V+=Math.sign(K)*.008*z*rt}if(C>=1.5){const rt=de(C,1.75,.1)*de(Math.abs(K),.52,.2)*pe(.35,.9,Y);H+=.014*rt,V+=Math.sign(K)*.01*rt;const z=de(C,1.985,.105),xt=de(Math.abs(K),.64,.17)*pe(.16,.72,Y),at=1+.22*Math.max(0,Math.sin((C-1.88)/.21*Math.PI*6));H+=.024*z*xt*at,V+=Math.sign(K)*.012*z*xt;const St=de(C,1.76,.11)*de(Math.abs(K),.92,.16)*de(Y,-.18,.26),dt=de(C,1.9,.13)*de(Math.abs(K),.88,.17)*de(Y,-.1,.24);if(V+=Math.sign(K)*(.018*St+.015*dt),Y>.86&&C>1.58&&C<1.95){const pt=Math.pow((Y-.86)/.14,2),_t=Math.max(0,Math.sin((C-1.58)/.37*Math.PI*6)),Mt=-.003*de(Math.abs(K),.16,.07);H+=(.008+.015*Math.pow(_t,1.5))*pt+Mt,Q=Math.max(Q,.75*pt*pe(1.58,1.94,C))}if(C>2.15&&Y>-.35&&Y<.35){const pt=de(K,0,.08)*pe(2.15,2.225,C);H-=.0025*pt}const Dt=de(K,0,.26)*pe(.42,.96,Y)*pe(1.66,1.98,C),At=pe(1.98,2.19,C)*pe(-.35,.85,Y),B=z*xt*1.45,I=de(Y,-.2,.2)*pe(1.74,2.18,C);J=.38+1.56*Math.min(1,Math.max(Dt,At,B,I*.88))}const st=new E().copy(T).addScaledVector(P,V).addScaledVector(b,H),$=pe(1.63,1.72,C);if($>0&&Y<.04){const rt=Qi(C),z=Math.max(pe(.56,.9,Math.abs(K)),pe(2.12,2.21,C)),xt=rt-.0045,at=rt+.044*(1-pe(2.08,2.22,C)),St=X.lerp(at,xt,z),dt=$*pe(.04,-.26,Y);st.y=X.lerp(st.y,St,dt)}if(C>1.8&&C<2.16)for(const rt of p){if(Math.sign(st.x)!==Math.sign(rt.center.x))continue;const z=new E().subVectors(st,rt.center),xt=z.dot(rt.fwd),at=z.dot(rt.right),St=z.dot(rt.up);if(xt>0){const dt=Math.exp(-.5*(Math.pow(at/.058,2)+Math.pow(St/.05,2)))*pe(0,.035,xt),Dt=Ba-.024,At=X.lerp(xt,Dt,dt);xt>At&&(st.addScaledVector(rt.fwd,At-xt),J=Math.max(J,.78*dt))}}if(C>2.1&&C<2.23&&st.y>1.575){const rt=wa(st.x,st.z,.066,2.182,.021,.024)*de(st.y,1.606,.017),z=wa(st.x,st.z,-.066,2.182,.021,.024)*de(st.y,1.606,.017),xt=Math.max(rt,z),at=Math.max(wa(st.x,st.z,.068,2.176,.025,.026),wa(st.x,st.z,-.068,2.176,.025,.026))*de(st.y,1.622,.012);at>.05&&(st.y+=.0035*at,st.x+=Math.sign(st.x)*.0025*at),xt>.05&&(st.x*=1-.16*xt,st.y-=.011*xt,st.z-=.014*xt,Q=Math.max(Q,Math.min(1,xt*1.35)))}if(C>1.76&&C<2.02&&st.y>1.68){const rt=Math.abs(st.x+.14-(st.z-1.89)*.4),z=de(st.z,1.89,.052)*pe(.015,.002,rt),xt=Math.abs(st.x-.12+(st.z-1.84)*.34),at=de(st.z,1.84,.034)*pe(.012,.002,xt);ht=Math.min(1,Math.max(z,at*.85)),ht>.01&&(st.y-=.0035*ht)}Y>.92&&C<1.56&&(Q=Math.max(Q,(Y-.92)/.08*.55),J=Math.max(J,.65*((Y-.92)/.08)));const tt=y*(n+1)+W;c[tt*3]=st.x,c[tt*3+1]=st.y,c[tt*3+2]=st.z,h[tt*2]=A*5.2,h[tt*2+1]=O*1.6,u[tt*4]=J,u[tt*4+1]=ht,u[tt*4+2]=Q,u[tt*4+3]=0;const yt=Du(st,i,a,r);d.set(yt.indices,tt*4),f.set(yt.weights,tt*4)}}const M=new Uint32Array(e*n*6);let _=0;for(let y=0;y<e;y++)for(let w=0;w<n;w++){const A=y*(n+1)+w,T=(y+1)*(n+1)+w,S=(y+1)*(n+1)+(w+1),b=y*(n+1)+(w+1);M[_++]=A,M[_++]=T,M[_++]=S,M[_++]=A,M[_++]=S,M[_++]=b}const x=new Yt;return x.setAttribute("position",new Z(c,3)),x.setAttribute("uv",new Z(h,2)),x.setAttribute("aAnatomyData",new Z(u,4)),x.setAttribute("skinIndex",new be(d,4)),x.setAttribute("skinWeight",new Zt(f,4)),x.setIndex(new Z(M,1)),x.computeVertexNormals(),qa(x,e,n),x}function mv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.272,2.09,1.06],maxWidth:.074,maxThick:.027,rollAngle:l*-.46}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.395,1.692,1.33],maxWidth:.038,maxThick:.017,rollAngle:l*-.95}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],tipPos:[l*.348,1.565,1.39],maxWidth:.03,maxThick:.015,rollAngle:l*-1.15}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],customStart:[l*.218,1.498,1.62],tipPos:[l*.274,1.488,1.48],maxWidth:.021,maxThick:.012,rollAngle:l*-1.28})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.customStart?[new E(...r.customStart),new E(...r.tipPos).lerp(new E(...r.customStart),.5)]:r.boneNames.map(T=>i.bindWorldPositions.get(T).clone()),c=new E().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.052),...l,new E(...r.tipPos)],d=new ti(u),f=r.boneNames.map(T=>i.boneIndexMap.get(T)),g=r.boneNames.map(T=>i.bindWorldPositions.get(T)),v=(o+1)*(a+1),m=new Float32Array(v*3),p=new Float32Array(v*2),M=new Float32Array(v*4),_=new Uint16Array(v*4),x=new Float32Array(v*4);for(let T=0;T<=o;T++){const b=1-T/o,P=d.getPointAt(b),C=d.getTangentAt(b).negate().normalize(),R=new E(Math.sin(r.rollAngle),Math.cos(r.rollAngle),0).normalize(),L=R.clone().addScaledVector(C,-R.dot(C)).normalize(),F=new E().crossVectors(L,C).normalize(),k=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(b-.76)/.24),2))),N=.72+.44*Math.sin(Math.min(1,b*1.15)*Math.PI),D=1+.34*Math.pow(Math.max(0,1-b*4.2),2),W=r.maxWidth*N*k*D,O=r.maxThick*(.85+.25*(1-b))*k*D;for(let q=0;q<=a;q++){const K=q/a,Y=K*Math.PI*2,V=new E().copy(P).addScaledVector(F,W*Math.sin(Y)).addScaledVector(L,O*Math.cos(Y)),H=T*(a+1)+q;m[H*3]=V.x,m[H*3+1]=V.y,m[H*3+2]=V.z,p[H*2]=b*.85,p[H*2+1]=K*.65,M[H*4]=.45+1.35*pe(.32,.9,b);const J=pi(V,f,g,3.6),ht=pe(.28,0,b),Q=Ve([n,J.indices[0],J.indices[1],J.indices[2]],[ht,J.weights[0]*(1-ht),J.weights[1]*(1-ht),J.weights[2]*(1-ht)]);_.set(Q.indices,H*4),x.set(Q.weights,H*4)}}const y=new Uint16Array(o*a*6);let w=0;for(let T=0;T<o;T++)for(let S=0;S<a;S++){const b=T*(a+1)+S,P=(T+1)*(a+1)+S,C=(T+1)*(a+1)+(S+1),R=T*(a+1)+(S+1);y[w++]=b,y[w++]=P,y[w++]=C,y[w++]=b,y[w++]=C,y[w++]=R}const A=new Yt;A.setAttribute("position",new Z(m,3)),A.setAttribute("uv",new Z(p,2)),A.setAttribute("aAnatomyData",new Z(M,4)),A.setAttribute("skinIndex",new be(_,4)),A.setAttribute("skinWeight",new Zt(x,4)),A.setIndex(new Z(y,1)),A.computeVertexNormals(),qa(A,o,a),e.push(A)}return e}function gv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?Vo:Go).clone(),d=new E(r*-.16,.985,.06).normalize(),f=new E().crossVectors(u,d).normalize(),g=new E().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,p=(s+1)*(o+1),M=new Float32Array(p*3),_=new Float32Array(p*2),x=new Float32Array(p*4),y=new Uint16Array(p*4),w=new Float32Array(p*4),A=Ba+.0018;for(let P=0;P<=o;P++){const C=P/o,R=de(C,.06,.08);for(let L=0;L<=s;L++){const F=L/s,k=X.degToRad(X.lerp(-65,65,F)),N=Math.sin(F*Math.PI),D=v?44*N:-40*N,W=v?78:-74,O=X.degToRad(X.lerp(D,W,C)),q=Math.max(0,Math.sin(F*Math.PI*22))*.0014*R,K=A+.0018*R+q-.0028*C,Y=new E().addScaledVector(u,Math.cos(O)*Math.cos(k)).addScaledVector(f,Math.cos(O)*Math.sin(k)).addScaledVector(g,Math.sin(O)).normalize(),V=new E().copy(l).addScaledVector(Y,K),H=P*(s+1)+L;M[H*3]=V.x,M[H*3+1]=V.y,M[H*3+2]=V.z,_[H*2]=F*.35,_[H*2+1]=C*.18,x[H*4]=.85;const J=N*(1-pe(.48,1,C)),ht=Math.max(0,Math.min(1,J));y.set([m,n,0,0],H*4),w.set([ht,1-ht,0,0],H*4)}}const T=new Uint16Array(s*o*6);let S=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,F=(P+1)*(s+1)+(C+1),k=P*(s+1)+(C+1);v?(T[S++]=R,T[S++]=F,T[S++]=L,T[S++]=R,T[S++]=k,T[S++]=F):(T[S++]=R,T[S++]=L,T[S++]=F,T[S++]=R,T[S++]=F,T[S++]=k)}const b=new Yt;b.setAttribute("position",new Z(M,3)),b.setAttribute("uv",new Z(_,2)),b.setAttribute("aAnatomyData",new Z(x,4)),b.setAttribute("skinIndex",new be(y,4)),b.setAttribute("skinWeight",new Zt(w,4)),b.setIndex(new Z(T,1)),b.computeVertexNormals(),e.push(b)}}return e}function vv(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new E(a*.16,.96,.86),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new E(a*.342,.056,1),new E(a*.342,.032,1.078)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(wh(i,r,l,!0,o,n,s)),e.push(...Mh(i,o,!0,t));const c=[new E(a*.15,.8,-.54),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new E(a*.318,.054,-.562),new E(a*.318,.032,-.488)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(wh(i,c,h,!1,o,n,s)),e.push(...Mh(i,o,!1,t))}return e}function Mh(i,t,e,n){const s=[],o=Lu(t,e),a=n===0?16:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=l.dirX,p=l.dirZ,M=Math.hypot(m,p),_=m/M,x=p/M,y=x,w=-_;for(let b=0;b<=a;b++){const P=b/a,C=X.lerp(-.38,1,P),R=Math.max(0,C),L=Math.max(0,-C)*.042,F=Math.sin(R*Math.PI)*.011-.009*R*R+L,k=l.rootX+_*l.toeLength*C,N=l.rootZ+x*l.toeLength*C,D=l.rootY+F,W=1+.44*Math.pow(1-pe(-.38,.18,C),1.5),O=1+.15*de(R,.4,.18)+.14*de(R,.84,.1),q=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(P-.89)/.11),2))),K=X.lerp(l.baseRadius,l.tipRadius,R)*W*O*q;for(let Y=0;Y<=r;Y++){const V=Y/r,H=V*Math.PI*2,J=Math.sin(H),ht=Math.cos(H),Q=ht>.15?Math.pow(Math.max(0,Math.sin(R*Math.PI*4.5)),.75)*.0042*((ht-.15)/.85):0,st=1.12+.24*(1-pe(-.35,.22,C)),$=k+y*J*K*st,tt=N+w*J*K*st;let yt=D+ht*(K*.86+Q);yt<.003&&(yt=.003+Math.max(0,yt)*.12);const rt=b*(r+1)+Y;u[rt*3]=$,u[rt*3+1]=yt,u[rt*3+2]=tt,d[rt*2]=P*.42,d[rt*2+1]=V*.36,f[rt*4]=ht>.05?1.95:.38,g.set([c,0,0,0],rt*4),v.set([1,0,0,0],rt*4)}}const A=new Uint16Array(a*r*6);let T=0;for(let b=0;b<a;b++)for(let P=0;P<r;P++){const C=b*(r+1)+P,R=(b+1)*(r+1)+P,L=(b+1)*(r+1)+(P+1),F=b*(r+1)+(P+1);A[T++]=C,A[T++]=R,A[T++]=L,A[T++]=C,A[T++]=L,A[T++]=F}const S=new Yt;S.setAttribute("position",new Z(u,3)),S.setAttribute("uv",new Z(d,2)),S.setAttribute("aAnatomyData",new Z(f,4)),S.setAttribute("skinIndex",new be(g,4)),S.setAttribute("skinWeight",new Zt(v,4)),S.setIndex(new Z(A,1)),S.computeVertexNormals(),qa(S,a,r),s.push(S)}return s}function wh(i,t,e,n,s,o,a){const r=s==="L"?1:-1,l=new ti(t,!1,"centripetal",.5),c=e.map(y=>i.boneIndexMap.get(y)),h=e.map(y=>i.bindWorldPositions.get(y)),u=(o+1)*(a+1),d=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),p=new E(0,0,1);for(let y=0;y<=o;y++){const A=1-y/o,T=l.getPointAt(A),S=l.getTangentAt(A).negate().normalize(),b=p.clone().addScaledVector(S,-p.dot(S)).normalize(),P=new E().crossVectors(b,S).normalize(),C=.52+.48*pe(0,.34,A),R=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(A-.91)/.09),2)))*C;let L=.095,F=.11;if(n){const D=de(A,.54,.16)*.028,W=de(A,.86,.12)*.088;L=(.09+D+W)*R,F=(.106+de(A,.26,.18)*.036+D+W*.86)*R}else{const D=de(A,.52,.15)*.032,W=de(A,.86,.12)*.082;L=(.088+D+W)*R,F=(.11+de(A,.26,.19)*.046+D*1.08+W*.84)*R}const k=pe(.7,.94,A),N=1-pe(.08,.42,A);for(let D=0;D<=a;D++){const W=D/a,O=W*Math.PI*2,q=Math.sin(O),K=Math.cos(O),Y=q*r>0?Math.abs(q):0,V=1-.28*N*Y;let H=1;if(k>.01&&K>-.35){const I=Math.atan2(q,Math.max(.05,K+.25)),it=Math.cos(I*3.6);H+=.16*k*Math.max(-.12,it)*pe(-.35,.45,K)}const J=pe(-.82,.78,K+.35*Y),ht=Math.pow(pe(.08,.94,A),1.42),Q=Math.pow(pe(.56,.95,A),1.75),st=A*22,$=W*14+Math.floor(st)*.5,tt=Math.max(0,Math.sin(st*Math.PI))*Math.max(0,Math.sin($*Math.PI))*.0018*J*Q,yt=L*V*H+tt,rt=F*H+tt,z=new E().copy(T).addScaledVector(P,yt*q).addScaledVector(b,rt*K);A>.7&&z.y<.004&&(z.y=.002+Math.max(0,z.y)*.14);const xt=y*(a+1)+D;d[xt*3]=z.x,d[xt*3+1]=z.y,d[xt*3+2]=z.z,f[xt*2]=A*1.35,f[xt*2+1]=W*.85,g[xt*4]=.34+1.48*J*ht;const at=pi(z,c,h,3.5),St=pe(.24,0,A)*.72,dt=c[c.length-1],Dt=pe(.74,.88,A),At=(1-St)*(1-Dt),B=Ve([dt,c[0],at.indices[0],at.indices[1]],[Dt,St*(1-Dt),at.weights[0]*At,at.weights[1]*At]);v.set(B.indices,xt*4),m.set(B.weights,xt*4)}}const M=new Uint16Array(o*a*6);let _=0;for(let y=0;y<o;y++)for(let w=0;w<a;w++){const A=y*(a+1)+w,T=(y+1)*(a+1)+w,S=(y+1)*(a+1)+(w+1),b=y*(a+1)+(w+1);M[_++]=A,M[_++]=T,M[_++]=S,M[_++]=A,M[_++]=S,M[_++]=b}const x=new Yt;return x.setAttribute("position",new Z(d,3)),x.setAttribute("uv",new Z(f,2)),x.setAttribute("aAnatomyData",new Z(g,4)),x.setAttribute("skinIndex",new be(v,4)),x.setAttribute("skinWeight",new Zt(m,4)),x.setIndex(new Z(M,1)),x.computeVertexNormals(),qa(x,o,a),x}function qa(i,t,e){const n=i.getAttribute("normal"),s=new E,o=new E;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function xv(i,t){return{jawSkinGeometry:$e([_v(i,t),...Mv(i,t)]),oralGumsGeometry:wv(i,t),teethGeometry:yv(i,t),tongueGeometry:bv(i,t),irisGeometry:yh(i,t,!1),corneaGeometry:yh(i,t,!0),clawsGeometry:Sv(i,t)}}function Gn(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function _v(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4);for(let p=0;p<=e;p++){const M=p/e,_=X.lerp(1.55,2.226,M),x=co(_),y=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.88)/.12),2))),w=Math.max(.002,(x-.0035*Gn(1.66,1.76,_))*y),A=Qi(_),T=.028*(1-Gn(1.55,1.7,_)),S=A+.0035+T,b=(.088-.034*M)*y;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),F=Math.cos(R),k=Math.exp(-Math.pow((M-.28)/.22,2))*.011,N=Math.exp(-Math.pow((M-.3)/.16,2))*Math.abs(L)*.01,D=(w+N)*L,W=-.022*F*(1-Math.pow(L,2))*Gn(1.68,1.78,_),O=F>=0?S+W:S+(b+k)*F;let q=0,K=O;if(_>1.98&&_<2.18&&F<-.55){const tt=Math.abs(D-.024-(_-2.08)*.25);tt<.013&&(q=1-tt/.013,K+=.0022*q)}const Y=p*(n+1)+P;c[Y*3]=D,c[Y*3+1]=K,c[Y*3+2]=_,h[Y*2]=M*.95,h[Y*2+1]=C*.85;const V=Math.exp(-Math.pow(F/.35,2));u[Y*4]=Math.min(1,.38+.56*Math.max(V,M>.7?(M-.7)*3:0)),u[Y*4+1]=q,u[Y*4+2]=0,u[Y*4+3]=0;const H=Gn(1.62,1.71,_),J=1-H,ht=Gn(1.42,1.64,_),Q=Gn(1.36,1.56,_),st=J*(1-ht),$=Ve([s,o,a,r],[H,J*ht,st*(.52+.48*Q),st*(.48-.48*Q)]);d.set($.indices,Y*4),f.set($.weights,Y*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let p=0;p<e;p++)for(let M=0;M<n;M++){const _=p*(n+1)+M,x=(p+1)*(n+1)+M,y=(p+1)*(n+1)+(M+1),w=p*(n+1)+(M+1);g[v++]=_,g[v++]=x,g[v++]=y,g[v++]=_,g[v++]=y,g[v++]=w}const m=new Yt;return m.setAttribute("position",new Z(c,3)),m.setAttribute("uv",new Z(h,2)),m.setAttribute("aAnatomyData",new Z(u,4)),m.setAttribute("skinIndex",new be(d,4)),m.setAttribute("skinWeight",new Zt(f,4)),m.setIndex(new Z(g,1)),m.computeVertexNormals(),m}function Mv(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=t===0?14:8,o=t===0?12:8,a=[];for(const r of["L","R"]){const l=r==="L"?1:-1,c=(s+1)*(o+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const _=M/o;for(let x=0;x<=s;x++){const y=x/s,w=X.lerp(1.65,1.9,y),A=Qi(w),T=co(w)-.008,S=-.016*Math.sin(_*Math.PI)*Math.pow(y,1.3),b=.026*(1-.55*y),P=A+(_-.5)*2*b,C=l*(T-.006*y+S*.35),R=M*(s+1)+x;h[R*3]=C,h[R*3+1]=P,h[R*3+2]=w+S,u[R*2]=y*.3,u[R*2+1]=_*.3,d[R*4]=.35;const L=Gn(0,1,_),F=1-L;f.set([e,n,0,0],R*4),g.set([L,F,0,0],R*4)}}const v=new Uint16Array(s*o*6);let m=0;for(let M=0;M<o;M++)for(let _=0;_<s;_++){const x=M*(s+1)+_,y=(M+1)*(s+1)+_,w=(M+1)*(s+1)+(_+1),A=M*(s+1)+(_+1);r==="L"?(v[m++]=x,v[m++]=A,v[m++]=w,v[m++]=x,v[m++]=w,v[m++]=y):(v[m++]=x,v[m++]=y,v[m++]=w,v[m++]=x,v[m++]=w,v[m++]=A)}const p=new Yt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new be(f,4)),p.setAttribute("skinWeight",new Zt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),a.push(p)}return a}function Nu(i,t){const e=1.76+Math.cos(i)*(t?.422:.406),n=Math.max(.04,co(e)-(t?.022:.03));return{x:Math.sin(i)*n,z:e}}function wv(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=[],o=t===0?32:18,a=t===0?28:16;for(const u of[!0,!1]){const d=u?e:n,f=(o+1)*(a+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),p=new Uint16Array(f*4),M=new Float32Array(f*4);for(let w=0;w<=o;w++){const A=w/o,T=X.lerp(1.68,2.19,A),S=Qi(T),b=Math.max(.02,(co(T)-.016)*Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(A-.86)/.14),2))));for(let P=0;P<=a;P++){const C=P/a*2-1,R=Math.abs(C),L=Math.sqrt(Math.max(0,1-C*C)),F=C*b;let k;if(u){const D=A*Math.PI*18-R*2.6,W=Math.pow(.5+.5*Math.sin(D),1.8)*.0052*L*Gn(.08,.25,A),O=-.0032*Math.exp(-Math.pow(C/.1,2))*L,q=.0035*Math.abs(Math.sin(A*Math.PI*16))*Gn(.75,.98,R);k=S+.004+.032*L-W+O-q}else{const D=.0038*Math.exp(-Math.pow((R-.34)/.14,2))*L,W=.0035*Math.exp(-Math.pow(C/.07,2))*Gn(.55,.2,A),O=.003*Math.abs(Math.sin(A*Math.PI*14))*Gn(.75,.98,R);k=S-.002-.02*L+D+W+O}const N=w*(a+1)+P;g[N*3]=F,g[N*3+1]=k,g[N*3+2]=T,v[N*2]=A*2.4,v[N*2+1]=(C*.5+.5)*2,m[N*4]=.45,m[N*4+2]=(1-Gn(0,.38,A))*.85,p.set([d,0,0,0],N*4),M.set([1,0,0,0],N*4)}}const _=new Uint16Array(o*a*6);let x=0;for(let w=0;w<o;w++)for(let A=0;A<a;A++){const T=w*(a+1)+A,S=(w+1)*(a+1)+A,b=(w+1)*(a+1)+(A+1),P=w*(a+1)+(A+1);u?(_[x++]=T,_[x++]=b,_[x++]=S,_[x++]=T,_[x++]=P,_[x++]=b):(_[x++]=T,_[x++]=S,_[x++]=b,_[x++]=T,_[x++]=b,_[x++]=P)}const y=new Yt;y.setAttribute("position",new Z(g,3)),y.setAttribute("uv",new Z(v,2)),y.setAttribute("aAnatomyData",new Z(m,4)),y.setAttribute("skinIndex",new be(p,4)),y.setAttribute("skinWeight",new Zt(M,4)),y.setIndex(new Z(_,1)),y.computeVertexNormals(),s.push(y)}const r=t===0?42:22,l=t===0?12:8;for(const u of[!0,!1]){const d=u?e:n,f=u?16:14,g=.0155,v=(r+1)*(l+1),m=new Float32Array(v*3),p=new Float32Array(v*2),M=new Float32Array(v*4),_=new Uint16Array(v*4),x=new Float32Array(v*4),y=[];for(let b=0;b<=18;b++){const P=X.lerp(-Math.PI*.46,Math.PI*.46,b/18),C=Nu(P,u),R=Qi(C.z)+(u?.012:-.01);y.push(new E(C.x,R,C.z))}const w=new ti(y);for(let b=0;b<=r;b++){const P=b/r,C=w.getPointAt(P),R=w.getTangentAt(P).normalize(),L=new E(0,1,0),F=new E().crossVectors(L,R).normalize(),k=1+.24*Math.pow(.5+.5*Math.cos(P*Math.PI*f*2),2),N=g*k;for(let D=0;D<=l;D++){const W=D/l,O=W*Math.PI*2,q=1+.12*Math.sin(O*3),K=new E().copy(C).addScaledVector(F,N*q*Math.sin(O)).addScaledVector(L,N*.82*Math.cos(O)),Y=b*(l+1)+D;m[Y*3]=K.x,m[Y*3+1]=K.y,m[Y*3+2]=K.z,p[Y*2]=P*3,p[Y*2+1]=W*1.2,M[Y*4]=.4,_.set([d,0,0,0],Y*4),x.set([1,0,0,0],Y*4)}}const A=new Uint16Array(r*l*6);let T=0;for(let b=0;b<r;b++)for(let P=0;P<l;P++){const C=b*(l+1)+P,R=(b+1)*(l+1)+P,L=(b+1)*(l+1)+(P+1),F=b*(l+1)+(P+1);A[T++]=C,A[T++]=R,A[T++]=L,A[T++]=C,A[T++]=L,A[T++]=F}const S=new Yt;S.setAttribute("position",new Z(m,3)),S.setAttribute("uv",new Z(p,2)),S.setAttribute("aAnatomyData",new Z(M,4)),S.setAttribute("skinIndex",new be(_,4)),S.setAttribute("skinWeight",new Zt(x,4)),S.setIndex(new Z(A,1)),S.computeVertexNormals(),s.push(S)}const c=t===0?18:10,h=t===0?12:8;{const u=(c+1)*(h+1),d=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4);for(let x=0;x<=h;x++){const y=x/h;for(let w=0;w<=c;w++){const A=w/c,T=X.lerp(-Math.PI*.62,Math.PI*.62,A),S=1.78-Math.cos(T)*.11,b=co(Math.max(1.66,S))-.022,P=Math.sin(T)*b,C=Qi(S),R=X.lerp(C-.018,C+.03,y),L=x*(c+1)+w;d[L*3]=P,d[L*3+1]=R,d[L*3+2]=S,f[L*2]=A*1.5,f[L*2+1]=y*1.5,g[L*4]=.5,g[L*4+2]=.95*Math.cos(T*.65);const F=Gn(0,1,y);v.set([e,n,0,0],L*4),m.set([F,1-F,0,0],L*4)}}const p=new Uint16Array(c*h*6);let M=0;for(let x=0;x<h;x++)for(let y=0;y<c;y++){const w=x*(c+1)+y,A=(x+1)*(c+1)+y,T=(x+1)*(c+1)+(y+1),S=x*(c+1)+(y+1);p[M++]=w,p[M++]=A,p[M++]=T,p[M++]=w,p[M++]=T,p[M++]=S}const _=new Yt;_.setAttribute("position",new Z(d,3)),_.setAttribute("uv",new Z(f,2)),_.setAttribute("aAnatomyData",new Z(g,4)),_.setAttribute("skinIndex",new be(v,4)),_.setAttribute("skinWeight",new Zt(m,4)),_.setIndex(new Z(p,1)),_.computeVertexNormals(),s.push(_)}return $e(s)}function yv(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,f=X.lerp(-Math.PI*.42,Math.PI*.42,d),g=Nu(f,r),v=g.x,m=g.z,p=Qi(m)+(r?.011:-.01),M=1+.34*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),_=.023*M*(.78+.22*Math.cos(f)),x=.0062*M,y=(o+1)*(a+1),w=new Float32Array(y*3),A=new Float32Array(y*2),T=new Float32Array(y*4),S=new Uint16Array(y*4),b=new Float32Array(y*4),P=-Math.sin(f),C=-Math.cos(f);for(let k=0;k<=o;k++){const N=r?1-k/o:k/o,D=x*(1-.88*Math.pow(N,1.25)),W=.0055*N*N,O=v+P*W,q=p+h*_*N,K=m+C*W-.003*N*N;for(let Y=0;Y<=a;Y++){const V=Y/a,H=V*Math.PI*2,J=k*(a+1)+Y;w[J*3]=O+Math.sin(H)*D,w[J*3+1]=q,w[J*3+2]=K+Math.cos(H)*D,A[J*2]=N,A[J*2+1]=V,S.set([c,0,0,0],J*4),b.set([1,0,0,0],J*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let k=0;k<o;k++)for(let N=0;N<a;N++){const D=k*(a+1)+N,W=(k+1)*(a+1)+N,O=(k+1)*(a+1)+(N+1),q=k*(a+1)+(N+1);R[L++]=D,R[L++]=W,R[L++]=O,R[L++]=D,R[L++]=O,R[L++]=q}const F=new Yt;F.setAttribute("position",new Z(w,3)),F.setAttribute("uv",new Z(A,2)),F.setAttribute("aAnatomyData",new Z(T,4)),F.setAttribute("skinIndex",new be(S,4)),F.setAttribute("skinWeight",new Zt(b,4)),F.setIndex(new Z(R,1)),F.computeVertexNormals(),s.push(F)}}return $e(s)}function bv(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let m=0;m<=e;m++){const p=m/e,M=X.lerp(1.74,2.12,p),_=Qi(M)-.004,x=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),y=(.08+.012*Math.sin(p*Math.PI)-.022*p)*x,w=(.015-.005*p)*x;for(let A=0;A<=n;A++){const T=A/n,S=T*Math.PI*2,b=Math.sin(S),P=Math.cos(S),C=P>.35?-.0042*Math.exp(-Math.pow(b/.24,2)):0,R=P>.2?.0012*Math.sin(p*Math.PI*26)*Math.cos(b*Math.PI*9)*x:0,L=new E(y*b,_+w*P+C+R,M),F=m*(n+1)+A;l[F*3]=L.x,l[F*3+1]=L.y,l[F*3+2]=L.z,c[F*2]=p*2.5,c[F*2+1]=T*1.8;const k=pi(L,o,a,3.8);u.set(k.indices,F*4),d.set(k.weights,F*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let p=0;p<n;p++){const M=m*(n+1)+p,_=(m+1)*(n+1)+p,x=(m+1)*(n+1)+(p+1),y=m*(n+1)+(p+1);f[g++]=M,f[g++]=_,f[g++]=x,f[g++]=M,f[g++]=x,f[g++]=y}const v=new Yt;return v.setAttribute("position",new Z(l,3)),v.setAttribute("uv",new Z(c,2)),v.setAttribute("aAnatomyData",new Z(h,4)),v.setAttribute("skinIndex",new be(u,4)),v.setAttribute("skinWeight",new Zt(d,4)),v.setIndex(new Z(f,1)),v.computeVertexNormals(),v}function yh(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?Vo:Go).clone(),u=new E(r*-.16,.985,.06).normalize(),d=new E().crossVectors(u,h).normalize(),f=new E().crossVectors(h,d).normalize(),g=e?Ba+9e-4:Ba,v=.94,m=(s+1)*(o+1),p=new Float32Array(m*3),M=new Float32Array(m*2),_=new Float32Array(m*4),x=new Uint16Array(m*4),y=new Float32Array(m*4);for(let S=0;S<=s;S++){const b=S/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(b),C=Math.cos(b);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,F=Math.cos(L),k=Math.sin(L);let N=g;if(b<v){const K=1-b/v;e?N+=.0014*K*K:N-=.0028*K*K}const D=new E().addScaledVector(h,C).addScaledVector(d,P*F).addScaledVector(f,P*k).normalize(),W=new E().copy(l).addScaledVector(D,N),O=S*(o+1)+R;p[O*3]=W.x,p[O*3+1]=W.y,p[O*3+2]=W.z;const q=Math.min(.498,b/v*.48);M[O*2]=.5+q*F,M[O*2+1]=.5+q*k,x.set([c,0,0,0],O*4),y.set([1,0,0,0],O*4)}}const w=new Uint16Array(s*o*6);let A=0;for(let S=0;S<s;S++)for(let b=0;b<o;b++){const P=S*(o+1)+b,C=(S+1)*(o+1)+b,R=(S+1)*(o+1)+(b+1),L=S*(o+1)+(b+1);w[A++]=P,w[A++]=C,w[A++]=R,w[A++]=P,w[A++]=R,w[A++]=L}const T=new Yt;T.setAttribute("position",new Z(p,3)),T.setAttribute("uv",new Z(M,2)),T.setAttribute("aAnatomyData",new Z(_,4)),T.setAttribute("skinIndex",new be(x,4)),T.setAttribute("skinWeight",new Zt(y,4)),T.setIndex(new Z(w,1)),T.computeVertexNormals(),n.push(T)}return $e(n)}function Sv(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=Lu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,f=d,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,p=l.rootZ+d*l.toeLength*v,M=l.rootY+Math.sin(v*Math.PI)*.011-.009*v*v+.002,_=l.toeLength*(1-v)+l.clawLength,x=l.tipRadius*.76,y=(n+1)*(s+1),w=new Float32Array(y*3),A=new Float32Array(y*2),T=new Float32Array(y*4),S=new Uint16Array(y*4),b=new Float32Array(y*4);for(let L=0;L<=n;L++){const F=L/n,k=x*(1-.85*Math.pow(F,1.52)),N=m+u*_*F,D=p+d*_*F,W=Math.max(.004,M-.036*Math.pow(F,1.8)+.006*Math.sin(F*Math.PI));for(let O=0;O<=s;O++){const q=O/s,K=q*Math.PI*2,Y=Math.sin(K),V=Math.cos(K),H=L*(s+1)+O;w[H*3]=N+f*Y*k*.74,w[H*3+1]=Math.max(.002,W+V*k*1.05),w[H*3+2]=D+g*Y*k*.74,A[H*2]=F,A[H*2+1]=q,S.set([c,0,0,0],H*4),b.set([1,0,0,0],H*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let F=0;F<s;F++){const k=L*(s+1)+F,N=(L+1)*(s+1)+F,D=(L+1)*(s+1)+(F+1),W=L*(s+1)+(F+1);P[C++]=k,P[C++]=N,P[C++]=D,P[C++]=k,P[C++]=D,P[C++]=W}const R=new Yt;R.setAttribute("position",new Z(w,3)),R.setAttribute("uv",new Z(A,2)),R.setAttribute("aAnatomyData",new Z(T,4)),R.setAttribute("skinIndex",new be(S,4)),R.setAttribute("skinWeight",new Zt(b,4)),R.setIndex(new Z(P,1)),R.computeVertexNormals(),e.push(R)}}return $e(e)}function Av(i,t){const e=[],n=[],s=[];for(const o of["L","R"]){const a=o==="L"?1:-1;e.push(...Tv(i,o,a,t)),n.push(...Ev(i,o,a,t)),e.push(...Cv(i,o,t)),n.push(Pv(i,o,t)),s.push(Fv(i,o,a,t))}return e.push(...Rv(i,t)),n.push(Lv(i,t)),{wingSparsSkinGeometry:$e(e),wingMembraneGeometry:$e(n),dorsalSpinesGeometry:Iv(i,t),alulaClawsGeometry:$e(s)}}function Bo(i,t,e,n,s,o,a=.55){const r=new ti(t),l=e.map(x=>i.boneIndexMap.get(x)),c=e.map(x=>i.bindWorldPositions.get(x)),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new E(0,1,0);for(let x=0;x<=s;x++){const y=x/s,w=r.getPointAt(y),A=r.getTangentAt(y).normalize();let T=m.clone().addScaledVector(A,-m.dot(A));T.lengthSq()<1e-4&&T.set(0,0,1),T.normalize();const S=new E().crossVectors(T,A).normalize(),b=y*(n.length-1),P=Math.min(n.length-2,Math.floor(b)),C=b-P;let R=X.lerp(n[P],n[P+1],C);y>.92&&(R*=Math.sqrt(Math.max(0,1-Math.pow((y-.92)/.08,2))));for(let L=0;L<=o;L++){const F=L/o,k=F*Math.PI*2,N=new E().copy(w).addScaledVector(S,R*Math.sin(k)).addScaledVector(T,R*.88*Math.cos(k)),D=x*(o+1)+L;u[D*3]=N.x,u[D*3+1]=N.y,u[D*3+2]=N.z,d[D*2]=y*1.4,d[D*2+1]=F*.45,f[D*4]=a;const W=pi(N,l,c,3.8);g.set(W.indices,D*4),v.set(W.weights,D*4)}}const p=new Uint16Array(s*o*6);let M=0;for(let x=0;x<s;x++)for(let y=0;y<o;y++){const w=x*(o+1)+y,A=(x+1)*(o+1)+y,T=(x+1)*(o+1)+(y+1),S=x*(o+1)+(y+1);p[M++]=w,p[M++]=A,p[M++]=T,p[M++]=w,p[M++]=T,p[M++]=S}const _=new Yt;return _.setAttribute("position",new Z(u,3)),_.setAttribute("uv",new Z(d,2)),_.setAttribute("aAnatomyData",new Z(f,4)),_.setAttribute("skinIndex",new be(g,4)),_.setAttribute("skinWeight",new Zt(v,4)),_.setIndex(new Z(p,1)),_.computeVertexNormals(),_}function Tv(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new E(e*.17,1.01,.75),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(Bo(i,c,h,[.062,.068,.066,.056,.044,.03,.008],o,a,.72));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(Bo(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.03,.019,.005],r,l,.58))}return s}function Ev(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(Js(o,Math.max(4,Math.floor(a*.5)),(A,T)=>{const S=new E().lerpVectors(new E(e*.3,1.13,.88),f,A);S.z+=.05*Math.sin(A*Math.PI);const b=A<.48?new E().lerpVectors(v,g,A/.48):new E().lerpVectors(g,f,(A-.48)/.52),P=new E().lerpVectors(b,S,T),C=Math.max(0,(A-.45)/.55),R=Math.max(0,(.55-A)/.55),L=1-Math.abs(A-.5)*1.8,F=Ve([c,l,r,h],[R,Math.max(0,L),C,(1-A)*.25]);return{pos:P,skin:F,thinness:T*.65}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),M=i.boneIndexMap.get(`wingFinger_${t}_1_a`),_=i.boneIndexMap.get(`wingFinger_${t}_1_b`),x=new E(e*.32,1.06,.72),y=new E(e*.29,.9,.14),w=new E(e*.26,.82,-.46);s.push(Js(o,a,(A,T)=>{const S=T<.5?new E().lerpVectors(x,y,T*2):new E().lerpVectors(y,w,(T-.5)*2),b=T<.5?new E().lerpVectors(f,m,T*2):new E().lerpVectors(m,p,(T-.5)*2),P=A<.45?new E().lerpVectors(x,g,A/.45):new E().lerpVectors(g,f,(A-.45)/.55),C=new E().lerpVectors(S,b,A),R=new E().lerpVectors(P,C,Math.pow(T,.88)),L=Math.sin(A*Math.PI)*Math.pow(T,2.2);R.z+=.19*L,R.y+=.035*Math.sin(A*Math.PI)*Math.sin(T*Math.PI);const F=T<.42?h:T<.78?u:d,k=T<.35?r:T<.72?M:_,N=(1-T)*Math.sin(A*Math.PI)*.6,D=Ve([F,k,l,r],[(1-A)*(1-N*.5),A*(1-N*.5),N*.65,N*.35]);return{pos:R,skin:D,thinness:.35+.65*Math.sin(A*Math.PI)*T}}));for(let A=1;A<=5;A++){const T=i.bindWorldPositions.get(`wingFinger_${t}_${A}_a`),S=i.bindWorldPositions.get(`wingFinger_${t}_${A}_b`),b=i.bindWorldPositions.get(`wingFinger_${t}_${A+1}_a`),P=i.bindWorldPositions.get(`wingFinger_${t}_${A+1}_b`),C=i.boneIndexMap.get(`wingFinger_${t}_${A}_a`),R=i.boneIndexMap.get(`wingFinger_${t}_${A}_b`),L=i.boneIndexMap.get(`wingFinger_${t}_${A+1}_a`),F=i.boneIndexMap.get(`wingFinger_${t}_${A+1}_b`),k=A===5?.24:.17;s.push(Js(o,a,(N,D)=>{const W=D<.5?new E().lerpVectors(f,T,D*2):new E().lerpVectors(T,S,(D-.5)*2),O=D<.5?new E().lerpVectors(f,b,D*2):new E().lerpVectors(b,P,(D-.5)*2),q=new E().lerpVectors(W,O,N),K=new E().subVectors(f,q).normalize(),Y=Math.sin(N*Math.PI)*Math.pow(D,2.4);q.addScaledVector(K,k*Y),q.y+=.028*Math.sin(N*Math.PI)*Math.sin(D*Math.PI);let V;if(D<.25){const H=1-D/.25;V=Ve([r,C,L,0],[H,(1-H)*(1-N),(1-H)*N,0])}else{const H=Math.max(0,Math.min(1,(D-.42)/.48));V=Ve([C,R,L,F],[(1-N)*(1-H),(1-N)*H,N*(1-H),N*H])}return{pos:q,skin:V,thinness:.3+.7*Math.sin(N*Math.PI)*Math.pow(D,.7)}}))}return s}function Cv(i,t,e){const n=e===0?12:7,s=e===0?8:6,o=t==="L"?1:-1,a=[];return za.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new E(o*r.rootX,r.rootY,r.rootZ),u=new E(o*r.tipX,r.tipY,r.tipZ);a.push(Bo(i,[h,u],[c],[.017,.004],n,s,.55))}),a}function Pv(i,t,e){const n=e===0?12:7,s=t==="L"?1:-1,o=[],a=za.map(d=>new E(s*d.rootX,d.rootY,d.rootZ)),r=za.map(d=>new E(s*d.tipX,d.tipY,d.tipZ)),l=[1,2,3].map(d=>i.boneIndexMap.get(`pelvicFin_${t}_${d}`)),c=i.boneIndexMap.get("tail_3"),h=new E(s*.1,.54,-1.56),u=[{rA:a[0],tA:r[0],rB:a[1],tB:r[1],iA:l[0],iB:l[1]},{rA:a[1],tA:r[1],rB:a[2],tB:r[2],iA:l[1],iB:l[2]},{rA:a[2],tA:r[2],rB:h,tB:h,iA:l[2],iB:c}];for(const d of u)o.push(Js(n,n,(f,g)=>{const v=new E().lerpVectors(d.rA,d.tA,g),m=new E().lerpVectors(d.rB,d.tB,g),p=new E().lerpVectors(v,m,f),M=new E().subVectors(d.rA,p).normalize();p.addScaledVector(M,.042*Math.sin(f*Math.PI)*Math.pow(g,2.1));const _=Ve([d.iA,d.iB,0,0],[1-f,f,0,0]);return{pos:p,skin:_,thinness:.4+.55*g}}));return $e(o)}function Rv(i,t){const e=t===0?12:7,n=t===0?8:6,s=[];return _s.forEach((o,a)=>{const r=`tailFin_R_${a+1}`,l=new E(-o.rootX,o.rootY,o.rootZ),c=new E(-o.tipX,o.tipY,o.tipZ);s.push(Bo(i,[l,c],[r],[.014,.0038],e,n,.52))}),s}function Lv(i,t){const e=t===0?12:7,n=[];for(let h=0;h<4;h++){const u=_s[h],d=_s[h+1],f=new E(-u.rootX,u.rootY,u.rootZ),g=new E(-d.rootX,d.rootY,d.rootZ),v=new E(-u.tipX,u.tipY,u.tipZ),m=new E(-d.tipX,d.tipY,d.tipZ),p=i.boneIndexMap.get(`tailFin_R_${h+1}`),M=i.boneIndexMap.get(`tailFin_R_${h+2}`);n.push(Js(e,e,(_,x)=>{const y=new E().lerpVectors(f,v,x),w=new E().lerpVectors(g,m,x),A=new E().lerpVectors(y,w,_),T=new E().lerpVectors(f,g,_),S=new E().subVectors(T,A).normalize();A.addScaledVector(S,.046*Math.sin(_*Math.PI)*Math.pow(x,2.15));const b=Ve([p,M,0,0],[1-_,_,0,0]);return{pos:A,skin:b,thinness:.45+.55*x}}))}const s=_s[4],o=new E(-s.rootX,s.rootY,s.rootZ),a=new E(-s.tipX,s.tipY,s.tipZ),r=new E(-s.rootX,s.rootY,-4.5),l=i.boneIndexMap.get("tailFin_R_5"),c=i.boneIndexMap.get("tailFinHinge_R");return n.push(Js(e,e,(h,u)=>{const d=new E().lerpVectors(o,a,u),f=new E().lerpVectors(d,r,h),g=Ve([l,c,0,0],[1-h,h,0,0]);return{pos:f,skin:g,thinness:.45+.5*u}})),$e(n)}function Js(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const f=d/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),p=d*(i+1)+g;s[p*3]=m.pos.x,s[p*3+1]=m.pos.y,s[p*3+2]=m.pos.z,o[p*2]=v*1.25,o[p*2+1]=f*1.25,a[p*4]=.22,a[p*4+1]=0,a[p*4+2]=.18*m.thinness,a[p*4+3]=m.thinness,r.set(m.skin.indices,p*4),l.set(m.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let f=0;f<i;f++){const g=d*(i+1)+f,v=(d+1)*(i+1)+f,m=(d+1)*(i+1)+(f+1),p=d*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=p}const u=new Yt;return u.setAttribute("position",new Z(s,3)),u.setAttribute("uv",new Z(o,2)),u.setAttribute("uv1",new Z(o,2)),u.setAttribute("aAnatomyData",new Z(a,4)),u.setAttribute("skinIndex",new be(r,4)),u.setAttribute("skinWeight",new Zt(l,4)),u.setIndex(new Z(c,1)),u.computeVertexNormals(),u}function Iv(i,t){const e=t===0?32:t===1?22:14,n=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],s=n.map(x=>i.boneIndexMap.get(x)),o=n.map(x=>i.bindWorldPositions.get(x)),a=e*2,r=6,l=8,c=new Float32Array(a*r*3),h=new Float32Array(a*r*3),u=new Float32Array(a*r*2),d=new Float32Array(a*r*4),f=new Uint16Array(a*r*4),g=new Float32Array(a*r*4),v=new Uint16Array(a*l*3);let m=0,p=0;for(let x=0;x<e;x++){const y=x/(e-1),w=X.lerp(-3.25,1.48,1-Math.pow(1-y,1.28)),A=zr(w),T=A.point,S=A.tangent,b=A.up,P=.32+.68*Math.sin(Math.pow(y,.74)*Math.PI),C=.078*P,R=.108*P,L=-.028,F=Du(T,i,s,o);for(const k of[1,-1]){const N=k*.004,D=k*C*.62,W=-C*.16,O=zr(w+R*.5).point,q=zr(w-R*.5).point,K=[O.clone().addScaledVector(b,L).setX(N),q.clone().addScaledVector(b,L).setX(N),T.clone().addScaledVector(b,L*.85).setX(k*.02*P),T.clone().addScaledVector(S,R*.1).addScaledVector(b,C*.64).setX(N*1.2),T.clone().addScaledVector(S,-R*.4).addScaledVector(b,C).setX(N*1.1),T.clone().addScaledVector(S,-R*.12).addScaledVector(b,C*.42).setX(k*.001)],Y=K.map((H,J)=>{const ht=H.clone();if(J>=3){const Q=J===4?1:J===3?.68:.48;ht.x+=D*Q,ht.y+=W*Q}return ht});for(let H=0;H<r;H++){const J=(m+H)*3;c[J]=K[H].x,c[J+1]=K[H].y,c[J+2]=K[H].z,h[J]=Y[H].x,h[J+1]=Y[H].y,h[J+2]=Y[H].z,u[(m+H)*2]=y,u[(m+H)*2+1]=H/r,d[(m+H)*4]=.75,d[(m+H)*4+1]=0,d[(m+H)*4+2]=H===5||H>=3?.96:.72,d[(m+H)*4+3]=0,f.set(F.indices,(m+H)*4),g.set(F.weights,(m+H)*4)}const V=k>0?[[0,2,3],[2,1,4],[2,4,3],[0,3,5],[5,3,4],[5,4,1],[0,5,1],[0,1,2]]:[[0,3,2],[2,4,1],[2,3,4],[0,5,3],[5,4,3],[5,1,4],[0,1,5],[0,2,1]];for(const H of V)v[p++]=m+H[0],v[p++]=m+H[1],v[p++]=m+H[2];m+=r}}const M=new Yt;M.setAttribute("position",new Z(c,3)),M.setAttribute("uv",new Z(u,2)),M.setAttribute("uv1",new Z(u,2)),M.setAttribute("aAnatomyData",new Z(d,4)),M.setAttribute("skinIndex",new be(f,4)),M.setAttribute("skinWeight",new Zt(g,4)),M.setIndex(new Z(v,1));const _=new Z(h,3);return _.name="dorsalVSplit",M.morphAttributes.position=[_],M.computeVertexNormals(),M}function Fv(i,t,e,n){const s=i.bindWorldPositions.get(`wingWrist_${t}`),o=s.clone().add(new E(e*.035,.018,.085));return Bo(i,[s,o],[`wingWrist_${t}`],[.016,.003],n===0?7:4,n===0?8:6,.8)}function Dv(i,t){const e=[],n=[],s=[],o=i.boneIndexMap.get("prostheticCollar"),a=i.boneIndexMap.get("prostheticRod"),r=i.boneIndexMap.get("tail_8"),l=i.boneIndexMap.get("tail_9"),c=i.boneIndexMap.get("tail_10"),h=t===0?20:12,u=[{z:-3.48,y:.125,rOuter:.066,length:.044,boneIdx:o},{z:-3.56,y:.125,rOuter:.062,length:.04,boneIdx:o},{z:-4.34,y:.128,rOuter:.033,length:.032,boneIdx:c}];for(const w of u)e.push(So(new E(0,w.y,w.z-w.length*.5),new E(0,w.y,w.z+w.length*.5),w.rOuter,w.rOuter*1.03,h,w.boneIdx));e.push(So(new E(.044,.138,-3.6),new E(.048,.142,-3.46),.024,.028,t===0?14:8,o));const d=t===0?16:8;e.push(Sh(new E(.038,.138,-3.52),new E(.02,.138,-4.34),.012,.0085,d,t===0?12:8,[a,l,c])),n.push(Sh(new E(.026,.126,-3.5),new E(.014,.127,-4.35),.014,.009,d,t===0?10:6,[r,l,c]));const f=[],g=[],v=[];_s.forEach((w,A)=>{const T=`tailFin_L_${A+1}`,S=i.boneIndexMap.get(T),b=new E(w.rootX,w.rootY,w.rootZ),P=new E(w.tipX,w.tipY,w.tipZ);f.push(b),g.push(P),v.push(S),n.push(Uu(b,P,.0125,.004,t===0?10:6,t===0?10:6,S,S));const C=new E().subVectors(P,b).normalize();e.push(So(b.clone(),b.clone().addScaledVector(C,.026),.0155,.0145,t===0?10:6,S)),e.push(So(P.clone().addScaledVector(C,-.012),P.clone().addScaledVector(C,.02),.0055,.0018,t===0?8:6,S))});for(let w=1;w<=4;w++){const A=w/5,T=new E().lerpVectors(f[0],g[0],A);e.push(So(T.clone().add(new E(0,-.0055,0)),T.clone().add(new E(0,.0055,0)),.006,.006,8,v[0]))}const m=t===0?12:7;for(let w=0;w<4;w++){const A=f[w],T=f[w+1],S=g[w],b=g[w+1],P=v[w],C=v[w+1];s.push(bh(m,w,(R,L)=>{const F=new E().lerpVectors(A,S,L),k=new E().lerpVectors(T,b,L),N=new E().lerpVectors(F,k,R),D=new E().lerpVectors(A,T,R),W=new E().subVectors(D,N).normalize();N.addScaledVector(W,.046*Math.sin(R*Math.PI)*Math.pow(L,2.15));const O=Ve([P,C,0,0],[1-R,R,0,0]);return{pos:N,skin:O}}))}const p=f[4],M=g[4],_=new E(p.x,p.y,-4.5),x=v[4],y=i.boneIndexMap.get("tailFinHinge_L");return s.push(bh(m,4,(w,A)=>{const T=new E().lerpVectors(p,M,A),S=new E().lerpVectors(T,_,w),b=Ve([x,y,0,0],[1-w,w,0,0]);return{pos:S,skin:b}})),{bronzeHardwareGeometry:$e(e),ironStrutsGeometry:$e(n),scalePasteMembraneGeometry:$e(s)}}function bh(i,t,e){const n=(i+1)*(i+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=i;d++){const f=d/i;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),p=d*(i+1)+g;s[p*3]=m.pos.x,s[p*3+1]=m.pos.y,s[p*3+2]=m.pos.z,o[p*2]=(t+v)*.45,o[p*2+1]=f*1.2,a[p*4]=.55,a[p*4+3]=.25,r.set(m.skin.indices,p*4),l.set(m.skin.weights,p*4)}}const c=new Uint16Array(i*i*6);let h=0;for(let d=0;d<i;d++)for(let f=0;f<i;f++){const g=d*(i+1)+f,v=(d+1)*(i+1)+f,m=(d+1)*(i+1)+(f+1),p=d*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=p}const u=new Yt;return u.setAttribute("position",new Z(s,3)),u.setAttribute("uv",new Z(o,2)),u.setAttribute("uv1",new Z(o,2)),u.setAttribute("aAnatomyData",new Z(a,4)),u.setAttribute("skinIndex",new be(r,4)),u.setAttribute("skinWeight",new Zt(l,4)),u.setIndex(new Z(c,1)),u.computeVertexNormals(),u}function So(i,t,e,n,s,o){return Uu(i,t,e,n,3,s,o,o)}function Uu(i,t,e,n,s,o,a,r){const c=new E().subVectors(t,i).clone().normalize();let h=new E(0,1,0);Math.abs(c.dot(h))>.92&&(h=new E(0,0,1));const u=h.clone().addScaledVector(c,-h.dot(c)).normalize(),d=new E().crossVectors(u,c).normalize(),f=(s+1)*(o+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),p=new Uint16Array(f*4),M=new Float32Array(f*4);for(let w=0;w<=s;w++){const A=w/s,T=new E().lerpVectors(i,t,A),S=X.lerp(e,n,A),b=w===0||w===s?.35:1;for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=T.clone().addScaledVector(d,S*b*Math.sin(R)).addScaledVector(u,S*b*Math.cos(R)),F=w*(o+1)+P;g[F*3]=L.x,g[F*3+1]=L.y,g[F*3+2]=L.z,v[F*2]=A,v[F*2+1]=C;const k=Ve([a,r,0,0],[1-A,A,0,0]);p.set(k.indices,F*4),M.set(k.weights,F*4)}}const _=new Uint16Array(s*o*6);let x=0;for(let w=0;w<s;w++)for(let A=0;A<o;A++){const T=w*(o+1)+A,S=(w+1)*(o+1)+A,b=(w+1)*(o+1)+(A+1),P=w*(o+1)+(A+1);_[x++]=T,_[x++]=S,_[x++]=b,_[x++]=T,_[x++]=b,_[x++]=P}const y=new Yt;return y.setAttribute("position",new Z(g,3)),y.setAttribute("uv",new Z(v,2)),y.setAttribute("uv1",new Z(v,2)),y.setAttribute("aAnatomyData",new Z(m,4)),y.setAttribute("skinIndex",new be(p,4)),y.setAttribute("skinWeight",new Zt(M,4)),y.setIndex(new Z(_,1)),y.computeVertexNormals(),y}function Sh(i,t,e,n,s,o,a){const r=new E().subVectors(t,i).normalize(),l=new E(0,1,0).addScaledVector(r,-r.y).normalize(),c=new E().crossVectors(l,r).normalize(),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4);for(let _=0;_<=s;_++){const x=_/s,y=new E().lerpVectors(i,t,x),w=X.lerp(e,n,x),A=Math.max(0,1-x*2),T=Math.max(0,(x-.5)*2),S=1-A-T,b=Ve([a[0],a[1],a[2],0],[A,S,T,0]);for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=y.clone().addScaledVector(c,w*Math.sin(R)).addScaledVector(l,w*Math.cos(R)),F=_*(o+1)+P;u[F*3]=L.x,u[F*3+1]=L.y,u[F*3+2]=L.z,d[F*2]=x,d[F*2+1]=C,g.set(b.indices,F*4),v.set(b.weights,F*4)}}const m=new Uint16Array(s*o*6);let p=0;for(let _=0;_<s;_++)for(let x=0;x<o;x++){const y=_*(o+1)+x,w=(_+1)*(o+1)+x,A=(_+1)*(o+1)+(x+1),T=_*(o+1)+(x+1);m[p++]=y,m[p++]=w,m[p++]=A,m[p++]=y,m[p++]=A,m[p++]=T}const M=new Yt;return M.setAttribute("position",new Z(u,3)),M.setAttribute("uv",new Z(d,2)),M.setAttribute("uv1",new Z(d,2)),M.setAttribute("aAnatomyData",new Z(f,4)),M.setAttribute("skinIndex",new be(g,4)),M.setAttribute("skinWeight",new Zt(v,4)),M.setIndex(new Z(m,1)),M.computeVertexNormals(),M}function Nv(){const i=ov(),t=hv(),e=new di;e.name="Toothless_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s={},o={};for(const r of[0,1,2]){const l=new di;l.name=`Toothless_LOD${r}`;const c=pv(i,r),h=xv(i,r),u=Av(i,r),d=Dv(i,r),f=$e([c,h.jawSkinGeometry,u.wingSparsSkinGeometry]),g=$e([h.clawsGeometry,u.alulaClawsGeometry]),v=(F,k,N,D=!0,W=!0)=>{const O=new xu(k,N);return O.name=`${F}_LOD${r}`,O.castShadow=D,O.receiveShadow=W,O.frustumCulled=!1,O.bind(i.skeleton,new le),O},m=v("BodyAndHeadSkin",f,t.skinMaterial),p=v("FlightPatagiumMembranes",u.wingMembraneGeometry,t.wingMembraneMaterial),M=v("VSplittingDorsalSpines",u.dorsalSpinesGeometry,t.skinMaterial);n.push(M);const _=v("OralGums",h.oralGumsGeometry,t.oralGumMaterial,!1,!0),x=v("RetractableTeeth",h.teethGeometry,t.teethMaterial,!0,!0),y=v("ArticulatedTongue",h.tongueGeometry,t.tongueMaterial,!1,!0),w=v("LightReactiveIrises",h.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),A=v("RefractiveCorneas",h.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1);A.renderOrder=2;const T=v("ObsidianClaws",g,t.clawMaterial,!0,!0),S=v("ProstheticBronzeLinkage",d.bronzeHardwareGeometry,t.prostheticBronzeMaterial),b=v("ProstheticIronStruts",d.ironStrutsGeometry,t.prostheticIronMaterial),P=v("ProstheticScalePasteFin",d.scalePasteMembraneGeometry,t.prostheticPasteMaterial),C=[m,p,M,_,x,y,w,A,T,S,b,P];let R=0,L=0;for(const F of C){l.add(F);const k=F.geometry.getIndex();R+=k?k.count/3:F.geometry.getAttribute("position").count/3,L+=F.geometry.getAttribute("position").count}l.visible=r===0,e.add(l),s[r]=l,o[r]={lod:r,triangles:Math.round(R),vertices:L,subMeshCount:C.length}}const a={rootGroup:e,rig:i,materials:t,lodGroups:s,dorsalSpineMeshes:n,lodStats:o,activeLOD:0,autoLOD:!1,setActiveLOD(r){a.activeLOD=r;for(const l of[0,1,2])s[l].visible=l===r},updateAutoLOD(r){if(!a.autoLOD)return a.activeLOD;const l=r<9.5?0:r<20?1:2;return l!==a.activeLOD&&a.setActiveLOD(l),a.activeLOD}};return a}function is(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},r=i[0].morphTargetsRelative,l=new Yt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=Ah(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);const g=Ah(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ah(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const a=new t(o),r=new Z(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);r.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(r.gpuType=s),r}const $s={"golden-hour":{id:"golden-hour",label:"Golden Hour",subtitle:"Amber & Violet Dusk",sunElevationDeg:10.8,sunAzimuthDeg:-140,zenithColor:1056060,horizonSunColor:15235902,horizonAntiSunColor:4933230,mieHaloColor:16753746,mieStrength:.72,mieExponent:6.2,sunLightColor:16759408,sunLightIntensity:4.05,rimLightColor:7055088,rimLightIntensity:1.78,hemiSkyColor:10138336,hemiGroundColor:3878182,hemiIntensity:1.16,cloudDarkColor:2367544,cloudLitColor:16751446,cloudCoverage:.5,mistDensity:.0021,rainIntensity:.34,windStrength:.54,lightningFrequency:.18,exposure:1.16,nightFactor:0,auroraIntensity:0,waterDeepColor:266014,waterShallowColor:740436,glitterIntensity:5.2},"clear-day":{id:"clear-day",label:"Clear Day",subtitle:"Emerald & Sapphire Sun",sunElevationDeg:43,sunAzimuthDeg:-124,zenithColor:1459330,horizonSunColor:10012394,horizonAntiSunColor:8039128,mieHaloColor:16773592,mieStrength:.3,mieExponent:7.8,sunLightColor:16774370,sunLightIntensity:3.75,rimLightColor:9619192,rimLightIntensity:1.72,hemiSkyColor:11720956,hemiGroundColor:3425334,hemiIntensity:1.4,cloudDarkColor:6059670,cloudLitColor:16777215,cloudCoverage:.28,mistDensity:.0013,rainIntensity:0,windStrength:.42,lightningFrequency:0,exposure:1.12,nightFactor:0,auroraIntensity:0,waterDeepColor:202798,waterShallowColor:812144,glitterIntensity:3.9},"dawn-dusk":{id:"dawn-dusk",label:"Dawn / Dusk",subtitle:"Crimson & Amethyst Tide",sunElevationDeg:4.6,sunAzimuthDeg:-148,zenithColor:1184822,horizonSunColor:14967912,horizonAntiSunColor:3817064,mieHaloColor:16747634,mieStrength:.68,mieExponent:5.6,sunLightColor:16750204,sunLightIntensity:3.15,rimLightColor:8033004,rimLightIntensity:1.85,hemiSkyColor:9212112,hemiGroundColor:2892338,hemiIntensity:1.18,cloudDarkColor:2104376,cloudLitColor:16021624,cloudCoverage:.46,mistDensity:.0024,rainIntensity:.24,windStrength:.48,lightningFrequency:.22,exposure:1.2,nightFactor:.24,auroraIntensity:.14,waterDeepColor:330780,waterShallowColor:1064014,glitterIntensity:4.5},"misty-overcast":{id:"misty-overcast",label:"Misty Cloud",subtitle:"Brooding Fjord Gale",sunElevationDeg:29,sunAzimuthDeg:-130,zenithColor:3688536,horizonSunColor:8952488,horizonAntiSunColor:6847116,mieHaloColor:13162724,mieStrength:.22,mieExponent:3.5,sunLightColor:14214896,sunLightIntensity:2.25,rimLightColor:10141918,rimLightIntensity:1.92,hemiSkyColor:11584724,hemiGroundColor:2766390,hemiIntensity:1.55,cloudDarkColor:3819608,cloudLitColor:10268862,cloudCoverage:.88,mistDensity:.0042,rainIntensity:.58,windStrength:.68,lightningFrequency:.3,exposure:1.18,nightFactor:0,auroraIntensity:0,waterDeepColor:398622,waterShallowColor:1328716,glitterIntensity:1.45},"starlit-night":{id:"starlit-night",label:"Starlit Night",subtitle:"Boreal Emerald & Moon",sunElevationDeg:29,sunAzimuthDeg:-136,zenithColor:264470,horizonSunColor:1321544,horizonAntiSunColor:792622,mieHaloColor:7120612,mieStrength:.34,mieExponent:9,sunLightColor:11193599,sunLightIntensity:2.55,rimLightColor:5678328,rimLightIntensity:2.1,hemiSkyColor:4089498,hemiGroundColor:1318184,hemiIntensity:1.14,cloudDarkColor:528414,cloudLitColor:2902640,cloudCoverage:.26,mistDensity:.0018,rainIntensity:.14,windStrength:.38,lightningFrequency:.12,exposure:1.28,nightFactor:1,auroraIntensity:.88,waterDeepColor:132881,waterShallowColor:535100,glitterIntensity:3.8},"stormy-squall":{id:"stormy-squall",label:"Storm Squall",subtitle:"Thunder & Rogue Gale",sunElevationDeg:16.5,sunAzimuthDeg:-138,zenithColor:857378,horizonSunColor:4610156,horizonAntiSunColor:2108476,mieHaloColor:9087172,mieStrength:.32,mieExponent:4.5,sunLightColor:11848930,sunLightIntensity:2.55,rimLightColor:7119064,rimLightIntensity:1.98,hemiSkyColor:6454424,hemiGroundColor:1581608,hemiIntensity:1.28,cloudDarkColor:1054498,cloudLitColor:6058632,cloudCoverage:.94,mistDensity:.0037,rainIntensity:1,windStrength:1,lightningFrequency:.92,exposure:1.2,nightFactor:0,auroraIntensity:0,waterDeepColor:199700,waterShallowColor:801860,glitterIntensity:2.4}},Vn=`
  uniform vec3 uSunDir;
  uniform vec3 uZenithColor;
  uniform vec3 uHorizonSunColor;
  uniform vec3 uHorizonAntiColor;
  uniform vec3 uMieColor;
  uniform float uMieStrength;
  uniform float uMieExponent;
  uniform vec3 uCloudDarkColor;
  uniform vec3 uCloudLitColor;
  uniform float uCloudCoverage;
  uniform float uMistDensity;
  uniform float uWindStrength;
  uniform vec2 uWindDir;
  uniform float uLightningFlash;
  uniform vec3 uLightningDir;
  uniform float uNightFactor;
  uniform float uAuroraIntensity;
  uniform float uIsEnvBake;
  uniform float uTime;

  float skyHash21(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float skyNoise2(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(skyHash21(i), skyHash21(i + vec2(1.0, 0.0)), f.x),
      mix(skyHash21(i + vec2(0.0, 1.0)), skyHash21(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float skyFbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      v += a * skyNoise2(p);
      p = rot * p * 2.03;
      a *= 0.5;
    }
    return v;
  }

  // Evaluates clean, continuous sky + dramatic storm cloud + aurora + lightning radiance (100% seamless across rawDir.y = 0!)
  vec3 evalPhysicalSky(vec3 rawDir, float timeSec, bool includeStarsAndDisc) {
    float rawLen = max(length(rawDir), 1e-5);
    vec3 normRaw = rawDir / rawLen;
    float xzLen = length(normRaw.xz);
    vec3 safeUpper = xzLen > 1e-5
      ? normalize(vec3(normRaw.x, max(normRaw.y, 0.0), normRaw.z))
      : vec3(0.0, max(normRaw.y, 0.0) > 0.5 ? 1.0 : 0.0, max(normRaw.y, 0.0) > 0.5 ? 0.0 : -1.0);
    vec3 dir = uIsEnvBake > 0.5 ? normRaw : safeUpper;
    vec3 sunN = normalize(uSunDir);
    float elev = clamp(dir.y, 0.0, 1.0);
    float sunDot = clamp(dot(dir, sunN), 0.0, 1.0);

    // Rich cinematic azimuthal warm/cool twilight gradient around the 360-deg horizon
    vec2 horizDir = length(dir.xz) > 1e-5 ? normalize(dir.xz) : vec2(0.0, -1.0);
    vec2 horizSun = length(sunN.xz) > 1e-5 ? normalize(sunN.xz) : vec2(0.0, -1.0);
    float azim = dot(horizDir, horizSun) * 0.5 + 0.5;
    vec3 twilightMid = mix(uHorizonAntiColor, uHorizonSunColor, 0.36) * vec3(1.06, 0.92, 1.14);
    vec3 horizLower = mix(uHorizonAntiColor, twilightMid, smoothstep(0.04, 0.55, azim));
    vec3 horizBase = mix(horizLower, uHorizonSunColor, smoothstep(0.32, 0.96, azim));

    // Rayleigh vertical gradient from zenith down to horizon
    float horizonCurve = pow(max(1.0 - elev, 1e-5), 2.95);
    vec3 sky = mix(uZenithColor, horizBase, horizonCurve);

    // Anisotropic Mie forward-scattering solar/lunar glow + subtle crepuscular sunbeam shafts!
    float mieCore = pow(max(sunDot, 1e-5), max(uMieExponent, 1.0));
    float crepuscularRay = 0.82 + 0.28 * sin(atan(dir.z - sunN.z, dir.x - sunN.x) * 11.0 + timeSec * 0.14);
    sky += uMieColor * mieCore * uMieStrength * crepuscularRay * (0.38 + 0.68 * pow(max(1.0 - elev, 1e-5), 1.55));

    // Crisp Starfield + Multi-Curtain Emerald & Violet Aurora Borealis
    if (includeStarsAndDisc && uNightFactor > 0.01 && dir.y > 0.02) {
      float horizonFade = smoothstep(0.02, 0.24, dir.y);
      vec2 starUv = dir.xz / (dir.y + 0.35) * 145.0;
      vec2 starCell = floor(starUv);
      vec2 starFrac = fract(starUv) - 0.5;
      float sSeed = skyHash21(starCell);
      if (sSeed > 0.962) {
        vec2 jitter = vec2(skyHash21(starCell + 7.1), skyHash21(starCell + 13.7)) - 0.5;
        float dStar = length(starFrac - jitter * 0.65);
        float twinkle = 0.70 + 0.30 * sin(timeSec * (1.8 + sSeed * 3.2) + sSeed * 40.0);
        float starBright = smoothstep(0.09, 0.008, dStar) * twinkle * smoothstep(0.962, 0.999, sSeed);
        vec3 starTint = mix(vec3(0.76, 0.88, 1.0), vec3(1.0, 0.90, 0.80), skyHash21(starCell + 3.3));
        sky += starTint * starBright * 1.55 * uNightFactor * horizonFade * (1.0 - uCloudCoverage * 0.85);
      }

      if (uAuroraIntensity > 0.01) {
        vec2 aurUv = dir.xz / (dir.y + 0.26);
        float curtainA = aurUv.x * 1.35 + sin(aurUv.y * 1.7 + timeSec * 0.06) * 0.58;
        float curtainB = aurUv.y * 1.15 - cos(aurUv.x * 1.4 - timeSec * 0.045) * 0.52;
        float bandA = exp(-pow((curtainA - 0.32) / 0.44, 2.0));
        float bandB = exp(-pow((curtainB + 0.45) / 0.52, 2.0)) * 0.72;
        float rays = skyFbm(vec2(curtainA * 4.6 + timeSec * 0.035, aurUv.y * 1.8 - timeSec * 0.025));
        float aurMask = (bandA + bandB) * smoothstep(0.34, 0.82, rays) * smoothstep(0.08, 0.38, dir.y) * smoothstep(0.94, 0.46, dir.y);
        vec3 aurEmerald = vec3(0.06, 0.74, 0.48);
        vec3 aurViolet = vec3(0.46, 0.24, 0.78);
        vec3 aurCol = mix(aurEmerald, aurViolet, clamp((dir.y - 0.16) * 2.4 + 0.25 * sin(curtainA * 2.0), 0.0, 1.0));
        sky += aurCol * aurMask * uAuroraIntensity * 0.68 * (1.0 - uCloudCoverage * 0.68);
      }
    }

    // Dramatic Multi-Layered Storm & Sunset Cloud Deck + Internal Lightning Cloud Illumination!
    float cloudWindSpd = 0.0045 + 0.011 * clamp(uWindStrength, 0.0, 1.0);
    vec2 windAdvect = (length(uWindDir) > 1e-4 ? normalize(uWindDir) : vec2(0.82, -0.57)) * (timeSec * cloudWindSpd);
    if (dir.y > 0.004 && uCloudCoverage > 0.01) {
      vec2 cUv = dir.xz / (dir.y + 0.14) * 0.90 + windAdvect;
      float n1 = skyFbm(cUv);
      float n2 = skyFbm(cUv * 2.45 - windAdvect * 0.65);
      float billow = skyNoise2(cUv * 5.2 + windAdvect * 1.2);
      float cField = n1 * 0.64 + n2 * 0.26 + billow * 0.10;

      float thresh = mix(0.68, 0.20, uCloudCoverage);
      float cloudHorizonFade = smoothstep(0.008, 0.15, dir.y);
      float cMask = smoothstep(thresh, thresh + 0.32, cField) * cloudHorizonFade;

      float sunLining = pow(max(sunDot, 1e-5), 2.8) * (1.12 - uCloudCoverage * 0.32);
      float edgeSilver = (1.0 - smoothstep(thresh, thresh + 0.18, cField)) * pow(max(sunDot, 1e-5), 1.6);
      float thickness = smoothstep(thresh, thresh + 0.40, cField);
      vec3 cCol = mix(uCloudLitColor, uCloudDarkColor, thickness * 0.76);
      cCol += uMieColor * (sunLining * 0.42 + edgeSilver * 0.48);

      // Theatrical internal storm-cloud lightning flash illumination (skipped during static PMREM bake!)
      if (uIsEnvBake < 0.5 && uLightningFlash > 0.001) {
        vec3 boltN = normalize(uLightningDir + vec3(0.0, 1e-5, 0.0));
        float boltAlign = clamp(dot(dir, boltN), 0.0, 1.0);
        float cloudEpicenter = pow(boltAlign, 5.5) * 2.4 + pow(boltAlign, 1.8) * 0.55 + 0.12;
        vec3 plasmaCloudGlow = vec3(0.70, 0.85, 1.0) * uLightningFlash * cloudEpicenter * (0.45 + 0.75 * thickness);
        cCol += plasmaCloudGlow * 3.4;
      }

      cCol = mix(sky, cCol, smoothstep(0.015, 0.20, dir.y));
      sky = mix(sky, cCol, cMask * min(0.94, 0.48 + uCloudCoverage * 0.52));
    }

    // Distant atmospheric sheet-lightning glow near the storm epicenter (smoothly tapered above y=0!)
    if (uIsEnvBake < 0.5 && uLightningFlash > 0.001) {
      vec3 boltN2 = normalize(uLightningDir + vec3(0.0, 1e-5, 0.0));
      float sheetGlow = pow(clamp(dot(dir, boltN2), 0.0, 1.0), 3.6) * smoothstep(0.01, 0.16, dir.y);
      sky += vec3(0.62, 0.78, 1.0) * uLightningFlash * sheetGlow * 1.45;
    }

    // Crisp Solar or Lunar Disc
    if (includeStarsAndDisc) {
      float discRadius = mix(0.99935, 0.99945, uNightFactor);
      float disc = smoothstep(discRadius, discRadius + 0.00035, sunDot) * (1.0 - uCloudCoverage * 0.78) * smoothstep(0.0, 0.04, dir.y);
      vec3 discCol = mix(uMieColor * 1.90, vec3(1.18, 1.26, 1.42), uNightFactor);
      sky += discCol * disc;
    }

    if (uIsEnvBake > 0.5 && normRaw.y < 0.0) {
      vec3 seaBounce = mix(horizBase * 0.78, uZenithColor * 0.36, clamp(-normRaw.y * 2.4, 0.0, 1.0));
      sky = mix(sky, seaBounce, smoothstep(0.08, 0.42, -normRaw.y));
    }

    return clamp(sky, vec3(0.0), vec3(24.0));
  }

  vec3 evalHorizonHazeColor(vec3 viewRayDir) {
    vec2 hz = viewRayDir.xz;
    float hzLen = length(hz);
    vec3 rayDir = hzLen > 1e-5 ? vec3(hz.x / hzLen, 0.0, hz.y / hzLen) : vec3(0.0, 0.0, -1.0);
    return evalPhysicalSky(rayDir, uTime, false);
  }
`,Uv=`
  varying vec3 vWorldDir;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldDir = normalize(position);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,kv=`
  ${Vn}
  varying vec3 vWorldDir;

  void main() {
    vec3 col = evalPhysicalSky(vWorldDir, uTime, true);
    gl_FragColor = vec4(col, 1.0);
  }
`;class zv{ctx=null;unlocked=!1;constructor(){if(typeof window>"u")return;const t=()=>{this.unlocked=!0,this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})};window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("keydown",t,{passive:!0})}playStrike(t,e,n=1){if(!(typeof window>"u"||!this.unlocked))try{const s=window.AudioContext||window.webkitAudioContext;if(!s)return;this.ctx||(this.ctx=new s),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const o=this.ctx,a=X.clamp(t/343*.45,.08,1.15),r=o.currentTime+a,l=3.8,c=Math.floor(o.sampleRate*l),h=o.createBuffer(1,c,o.sampleRate),u=h.getChannelData(0);let d=0,f=0;for(let _=0;_<c;_++){const x=_/o.sampleRate,y=Math.random()*2-1;d=.985*d+y*.09,f=.92*f+y*.18;const w=Math.exp(-x*11.5)*.85,A=Math.exp(-Math.pow((x-.32)/.42,2))*.95,T=Math.exp(-Math.pow((x-1.05)/.68,2))*.68,S=Math.exp(-Math.pow((x-2.05)/.95,2))*.42,b=.68+.32*Math.sin(x*23+Math.sin(x*7.5)*2.5);u[_]=(d*1.45+f*.65+y*w*.35)*(w+(A+T+S)*b)}const g=o.createBufferSource();g.buffer=h;const v=o.createBiquadFilter();v.type="lowpass";const m=1-X.clamp((t-220)/520,0,1);v.frequency.setValueAtTime(240+m*460,r),v.frequency.exponentialRampToValueAtTime(62,r+l*.88),v.Q.value=1.35;const p=o.createGain(),M=X.clamp((.2+.24*m)*n,.05,.44);if(p.gain.setValueAtTime(1e-4,r),p.gain.linearRampToValueAtTime(M,r+.04),p.gain.exponentialRampToValueAtTime(8e-4,r+l),g.connect(v),typeof o.createStereoPanner=="function"){const _=o.createStereoPanner();_.pan.value=X.clamp(e,-.85,.85),v.connect(_),_.connect(p)}else v.connect(p);p.connect(o.destination),g.start(r),g.stop(r+l+.05)}catch{}}}function Bv(){const t=new Float32Array(1680),e=new Float32Array(560*3),n=new Float32Array(560*3),s=[];for(let g=0;g<140;g++){const v=g*4;s.push(v,v+1,v+2,v,v+2,v+3)}const o=new Yt,a=new Z(t,3),r=new Z(e,3),l=new Z(n,3);o.setAttribute("position",a),o.setAttribute("aNextPos",r),o.setAttribute("aBoltMeta",l),o.setIndex(s);const c={uBoltAlpha:{value:0},uBoltCoreColor:{value:new Ut(14479615)}},h=new Oe({name:"NordicForkedLightningBolt",transparent:!0,depthWrite:!1,blending:Do,side:tn,uniforms:c,vertexShader:`
      attribute vec3 aNextPos;
      attribute vec3 aBoltMeta;
      varying float vAcross;
      varying float vIntensity;
      void main() {
        vAcross = aBoltMeta.x;
        vIntensity = aBoltMeta.z;
        vec3 segDir = aNextPos - position;
        float segLen = length(segDir);
        vec3 tang = segLen > 1e-4 ? segDir / segLen : vec3(0.0, -1.0, 0.0);
        vec3 toCam = cameraPosition - position;
        float cLen = length(toCam);
        vec3 camDir = cLen > 1e-4 ? toCam / cLen : vec3(0.0, 0.0, 1.0);
        vec3 perp = cross(camDir, tang);
        float pLen = length(perp);
        perp = pLen > 1e-4 ? perp / pLen : vec3(1.0, 0.0, 0.0);

        vec3 worldPt = position + perp * (aBoltMeta.x * aBoltMeta.y);
        gl_Position = projectionMatrix * viewMatrix * vec4(worldPt, 1.0);
      }
    `,fragmentShader:`
      uniform float uBoltAlpha;
      uniform vec3 uBoltCoreColor;
      varying float vAcross;
      varying float vIntensity;
      void main() {
        if (uBoltAlpha <= 0.002) discard;
        float d = abs(vAcross);
        // Intense white-cyan plasma filament core + wide electric blue-violet corona!
        float hotCore = exp(-d * d * 26.0);
        float corona = exp(-d * d * 3.8) * 0.55;
        vec3 col = mix(vec3(0.42, 0.62, 1.0), vec3(1.0, 0.98, 1.0), hotCore) * uBoltCoreColor;
        float alpha = clamp((hotCore + corona) * uBoltAlpha * vIntensity, 0.0, 1.0);
        gl_FragColor = vec4(clamp(col * (5.5 * hotCore + 2.2 * corona) * uBoltAlpha * vIntensity, vec3(0.0), vec3(18.0)), alpha);
      }
    `}),u=new Be(o,h);u.frustumCulled=!1,u.renderOrder=8,u.visible=!1;const d=g=>{const v=Math.sin(g*127.1+311.7)*43758.5453;return v-Math.floor(v)};return{mesh:u,uniforms:c,regenerateBolt:(g,v,m)=>{let p=0;const M=(y,w,A,T)=>{if(p>=140)return;const S=p*4,b=[y,y,w,w],P=[-1,1,1,-1];for(let C=0;C<4;C++){const R=b[C];t[(S+C)*3]=R.x,t[(S+C)*3+1]=R.y,t[(S+C)*3+2]=R.z,e[(S+C)*3]=w.x,e[(S+C)*3+1]=w.y,e[(S+C)*3+2]=w.z,n[(S+C)*3]=P[C],n[(S+C)*3+1]=A,n[(S+C)*3+2]=T}p++},_=(y,w,A,T,S,b,P)=>{const C=[];for(let R=0;R<=A;R++){const L=R/A,F=Math.sin(L*Math.PI),k=new E().lerpVectors(y,w,L);R>0&&R<A&&(k.x+=(d(m+P+R*3.1)-.5)*T*F,k.y+=(d(m+P+R*7.7)-.5)*T*.28*F,k.z+=(d(m+P+R*11.3)-.5)*T*F),C.push(k)}for(let R=0;R<C.length-1;R++)M(C[R],C[R+1],S,b);return C},x=_(g,v,34,28,2.65,1,1);for(let y=0;y<5;y++){const w=4+Math.floor(d(m+y*19.3)*20),A=x[Math.min(x.length-2,w)],T=d(m+y*29.7)*Math.PI*2,S=26+d(m+y*41.1)*48,b=34+d(m+y*53.9)*58,P=new E(A.x+Math.cos(T)*S,Math.max(-10,A.y-b),A.z+Math.sin(T)*S),C=_(A,P,14,14,1.25,.72,100+y*31);if(C.length>6){const R=C[5],L=new E(R.x+(d(m+y*67.3)-.5)*28,Math.max(-10,R.y-24),R.z+(d(m+y*79.1)-.5)*28);_(R,L,6,7,.72,.48,300+y*17)}}o.setDrawRange(0,p*6),a.needsUpdate=!0,r.needsUpdate=!0,l.needsUpdate=!0}}}function Ov(i,t,e="golden-hour"){const n=new E,s=new Ut,o=$s[e],a={uSunDir:{value:new E(-.52,.24,-.82).normalize()},uSunColor:{value:new Ut(o.sunLightColor)},uZenithColor:{value:new Ut(o.zenithColor)},uHorizonSunColor:{value:new Ut(o.horizonSunColor)},uHorizonAntiColor:{value:new Ut(o.horizonAntiSunColor)},uMieColor:{value:new Ut(o.mieHaloColor)},uMieStrength:{value:o.mieStrength},uMieExponent:{value:o.mieExponent},uCloudDarkColor:{value:new Ut(o.cloudDarkColor)},uCloudLitColor:{value:new Ut(o.cloudLitColor)},uCloudCoverage:{value:o.cloudCoverage},uMistDensity:{value:o.mistDensity},uRainIntensity:{value:o.rainIntensity},uWindStrength:{value:o.windStrength},uWindDir:{value:new Gt(.84,-.54).normalize()},uLightningFlash:{value:0},uLightningDir:{value:new E(-.35,.28,-.89).normalize()},uNightFactor:{value:o.nightFactor},uAuroraIntensity:{value:o.auroraIntensity},uWaterDeepColor:{value:new Ut(o.waterDeepColor)},uWaterShallowColor:{value:new Ut(o.waterShallowColor)},uGlitterIntensity:{value:o.glitterIntensity},uIsEnvBake:{value:0},uTime:{value:0}},r=new ka(3900,64,44),l=new Oe({name:"NordicPhysicalSky",vertexShader:Uv,fragmentShader:kv,uniforms:a,side:Fn,depthWrite:!1,depthTest:!1}),c=new Be(r,l);c.renderOrder=-100,c.frustumCulled=!1,t.add(c);const h=new Er(o.sunLightColor,o.sunLightIntensity);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=1,h.shadow.camera.far=54;const u=13.8;h.shadow.camera.left=-u,h.shadow.camera.right=u,h.shadow.camera.top=u,h.shadow.camera.bottom=-u,h.shadow.bias=-4e-4,h.shadow.normalBias=.018,t.add(h),t.add(h.target);const d=new Er(o.rimLightColor,o.rimLightIntensity);d.position.set(5.8,4.4,5.4),t.add(d);const f=new Er(14085375,0);f.position.set(-40,28,-90),t.add(f);const g=Bv();t.add(g.mesh);const v=new zv;let m=o.lightningFrequency,p=0,M=4.2,_=99,x=1;const y=new E(-.35,.26,-.9).normalize(),w=(N,D=!1)=>{x+=13.7,_=0;const W=Math.sin(x*71.3)*43758.5453,O=W-Math.floor(W),q=Math.sin(x*19.7+5.1)*43758.5453,K=q-Math.floor(q),Y=(-.78+O*1.56)*Math.PI,V=250+K*310,H=(N?N.x*.35:0)+Math.sin(Y)*V,J=(N?N.z*.35:0)-Math.cos(Y)*V,ht=new E(H+(O-.5)*34,165+K*65,J+(K-.5)*28),Q=new E(H,-11.5,J);g.regenerateBolt(ht,Q,x),g.mesh.visible=!0,y.set(H,68,J).normalize(),a.uLightningDir.value.copy(y),f.position.set(H*.25,32,J*.25);const st=X.clamp(Math.sin(Y),-.85,.85);v.playStrike(V,st,D?1:.65+.35*m)},A=new Dp(o.hemiSkyColor,o.hemiGroundColor,o.hemiIntensity);t.add(A);const T=new Wl(o.horizonAntiSunColor,o.mistDensity);t.fog=T;const S=new Na,b=new Be(new ka(50,32,20),l);S.add(b);const P=new El(i);P.compileEquirectangularShader();let C=null,R=o.sunAzimuthDeg;function L(N){a.uIsEnvBake.value=1;const D=P.fromScene(S,.015);a.uIsEnvBake.value=0,C&&C.dispose(),C=D,N.environment=C.texture}function F(N,D){const W=X.degToRad(X.clamp(N,1.5,82)),O=X.degToRad(D);n.set(Math.cos(W)*Math.sin(O),Math.sin(W),Math.cos(W)*Math.cos(O)).normalize(),a.uSunDir.value.copy(n),h.position.copy(h.target.position).addScaledVector(n,20)}const k={skyMesh:c,sunLight:h,rimLight:d,hemiLight:A,sunDirection:n,sunColor:s,activePreset:e,sharedUniforms:a,applyPreset(N,D,W){const O=$s[N];k.activePreset=N,R=O.sunAzimuthDeg,a.uZenithColor.value.setHex(O.zenithColor),a.uHorizonSunColor.value.setHex(O.horizonSunColor),a.uHorizonAntiColor.value.setHex(O.horizonAntiSunColor),a.uMieColor.value.setHex(O.mieHaloColor),a.uMieStrength.value=O.mieStrength,a.uMieExponent.value=O.mieExponent,a.uCloudDarkColor.value.setHex(O.cloudDarkColor),a.uCloudLitColor.value.setHex(O.cloudLitColor),a.uCloudCoverage.value=O.cloudCoverage,a.uMistDensity.value=O.mistDensity,a.uRainIntensity.value=O.rainIntensity,a.uWindStrength.value=O.windStrength,m=O.lightningFrequency,M=N==="stormy-squall"?.65:3.2,a.uNightFactor.value=O.nightFactor,a.uAuroraIntensity.value=O.auroraIntensity,a.uWaterDeepColor.value.setHex(O.waterDeepColor),a.uWaterShallowColor.value.setHex(O.waterShallowColor),a.uGlitterIntensity.value=O.glitterIntensity,s.setHex(O.sunLightColor),a.uSunColor.value.copy(s),h.color.copy(s),h.intensity=O.sunLightIntensity,d.color.setHex(O.rimLightColor),d.intensity=O.rimLightIntensity,A.color.setHex(O.hemiSkyColor),A.groundColor.setHex(O.hemiGroundColor),A.intensity=O.hemiIntensity,T.color.setHex(O.horizonAntiSunColor).lerp(new Ut(O.horizonSunColor),.35),T.density=O.mistDensity,D.toneMappingExposure=O.exposure,F(O.sunElevationDeg,O.sunAzimuthDeg),L(W)},setMistDensity(N,D){const W=X.clamp(N,5e-4,.0075);a.uMistDensity.value=W,T.density=W},setRainIntensity(N){a.uRainIntensity.value=X.clamp(N,0,1)},setWindStrength(N){a.uWindStrength.value=X.clamp(N,0,1.25)},setLightningFrequency(N){m=X.clamp(N,0,1),m>.05&&M>4&&(M=1.1)},triggerLightningStrike(N){w(N,!0)},setSunElevation(N,D,W){F(N,R),L(W)},update(N,D,W){const O=Math.min(.1,Math.max(0,N-p));p=N,a.uTime.value=N;const q=-.58+Math.sin(N*.085)*.16;if(a.uWindDir.value.set(Math.cos(q),Math.sin(q)),m>.015&&(M-=O,M<=0)){w(W,!1);const K=X.lerp(13.5,2.2,m),Y=X.lerp(14,3.8,m)*Math.abs(Math.sin(N*19.7+x));M=K+Y}if(_<.65){_+=O;const K=Math.exp(-Math.pow((_-.025)/.028,2)),Y=Math.exp(-Math.pow((_-.115)/.032,2))*.92,V=Math.exp(-Math.pow((_-.195)/.022,2))*.55,H=Math.exp(-_*7.2)*.34,J=X.clamp(Math.max(K,Y,V)+H,0,1.25);a.uLightningFlash.value=J,g.uniforms.uBoltAlpha.value=X.clamp(J*1.05,0,1),f.intensity=J*8.2}else g.mesh.visible&&(a.uLightningFlash.value=0,g.uniforms.uBoltAlpha.value=0,f.intensity=0,g.mesh.visible=!1);W&&c.position.copy(W),D&&(h.target.position.copy(D),h.position.copy(D).addScaledVector(n,20),h.target.updateMatrixWorld())}};return k.applyPreset(e,i,t),k}const Eo={waveAmplitude:1.18,waveSpeed:1.06,seaChoppiness:.56},Hv=`
  uniform float uTime;
  uniform float uWaveAmp;
  uniform float uWaveSpeed;
  uniform float uChoppiness;
  uniform float uWindStrength;
  uniform vec2 uWindDir;
  uniform vec4 uStackCenters[24];

  varying vec3 vWorldPos;
  varying vec3 vMacroNormal;
  varying float vWaveHeight;
  varying float vCrestFactor;
  varying float vGroupEnergy;
  varying float vRogueFactor;

  float ocHash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float ocNoise2(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = ocHash21(i);
    float b = ocHash21(i + vec2(1.0, 0.0));
    float c = ocHash21(i + vec2(0.0, 1.0));
    float d = ocHash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float ocFbm2(vec2 p) {
    float s = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
      s += a * ocNoise2(p);
      p = p * 2.07 + vec2(13.1, -7.4);
      a *= 0.5;
    }
    return s;
  }

  // Evaluates non-uniform, domain-warped Trochoidal Gerstner wave groups + analytical slope
  void accumTrochoidalWave(
    vec2 pos,
    vec2 dir,
    float steepness,
    float wavelength,
    float speedMul,
    float time,
    float envScale,
    inout vec3 disp,
    inout vec2 slopeXZ
  ) {
    vec2 d = normalize(dir);
    float k = 6.2831853 / wavelength;
    float c = sqrt(9.81 / k) * speedMul;
    float phase = k * (dot(d, pos) - c * time);
    float amp = (steepness / k) * uWaveAmp * envScale;
    float pinch = clamp(uChoppiness * 0.78, 0.0, 0.88);
    float s = sin(phase);
    float co = cos(phase);

    disp.x += d.x * (amp * pinch * co);
    disp.y += amp * s;
    disp.z += d.y * (amp * pinch * co);

    slopeXZ += d * (amp * k * co);
  }

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    float distFromOrigin = length(wp.xz);
    float distFromCam = length(wp.xz - cameraPosition.xz);
    float effDist = max(distFromOrigin * 0.85, distFromCam);

    // Nyquist-safe per-band damping so short & medium wavelengths fade out cleanly before radial grid spacing coarsens!
    float farDampGiant = 1.0 - smoothstep(460.0, 1280.0, effDist);
    float farDampLong = 1.0 - smoothstep(380.0, 1080.0, effDist);
    float farDampCross = 1.0 - smoothstep(240.0, 680.0, effDist);
    float farDampChop = 1.0 - smoothstep(115.0, 350.0, effDist);
    float windBoost = 0.86 + 0.30 * clamp(uWindStrength, 0.0, 1.25);
    float t = uTime * uWaveSpeed;

    // 1. Irregular Swell Wave-Packet Envelopes + Unpredictable Towering "Rogue / Seventh-Wave" Cells!
    float swellSetA = ocFbm2(wp.xz * 0.010 - vec2(t * 0.042, t * 0.028));
    float swellSetB = ocFbm2(wp.xz * 0.021 + vec2(t * 0.033, -t * 0.046) + 19.4);
    float rogueFieldA = ocFbm2(wp.xz * 0.0068 - vec2(t * 0.055, -t * 0.032) + 41.7);
    float rogueFieldB = ocFbm2(wp.xz * 0.0135 + vec2(-t * 0.038, t * 0.051) - 23.9);
    float rogueSurge = smoothstep(0.50, 0.88, rogueFieldA) * smoothstep(0.46, 0.85, rogueFieldB);

    float groupA = mix(0.36, 1.56, smoothstep(0.16, 0.84, swellSetA)) * (1.0 + 0.72 * rogueSurge) * windBoost;
    float groupB = mix(0.34, 1.48, smoothstep(0.18, 0.82, swellSetB)) * (1.0 + 0.58 * rogueSurge) * windBoost;

    // 2. Coastal Shoaling & Island Lee-Shadowing around archipelago islands!
    float coastalShelter = 1.0;
    for (int i = 0; i < 12; i++) {
      vec4 sc = uStackCenters[i];
      if (sc.z <= 0.1) continue;
      float d = length(wp.xz - sc.xy) - sc.z;
      // Shoaling amplification just outside rocky reefs, gentle damping deep inside coves
      float shoalAmp = 1.0 + 0.24 * exp(-pow((d - 6.5) / 6.0, 2.0));
      coastalShelter *= mix(0.70, shoalAmp, smoothstep(-6.0, 16.0, d));
    }

    // 3. Domain-warped wave coordinates so crests curve, bend, fork & refract naturally!
    vec2 swellWarp = vec2(
      ocFbm2(wp.xz * 0.015 + vec2(t * 0.019, -t * 0.014)) - 0.5,
      ocFbm2(wp.xz * 0.015 + vec2(-t * 0.015, t * 0.022) + 31.7) - 0.5
    ) * 26.0;
    vec2 chopWarp = vec2(
      ocNoise2(wp.xz * 0.055 + t * 0.085) - 0.5,
      ocNoise2(wp.xz * 0.055 - t * 0.075 + 11.3) - 0.5
    ) * 7.2;

    vec2 pGiant = wp.xz + swellWarp * 1.25;
    vec2 pPrimary = wp.xz + swellWarp;
    vec2 pCross = wp.xz - swellWarp * 0.78 + chopWarp;

    vec3 disp = vec3(0.0);
    vec2 slopeXZ = vec2(0.0);

    float envGiant = farDampGiant * (0.65 + 1.25 * rogueSurge) * coastalShelter * windBoost;
    float envPrimary = farDampLong * groupA * coastalShelter;
    float envCross = farDampCross * groupB * coastalShelter;
    float envChop = farDampChop * mix(0.55, 1.45, swellSetB) * (0.38 + 0.96 * uChoppiness) * windBoost;

    // Towering North-Atlantic deep-ocean groundswells & random rogue rollers (76m & 58m wavelengths!)
    accumTrochoidalWave(pGiant, vec2(0.76, 0.65), 0.14, 76.0, 0.96, t + 2.3, envGiant, disp, slopeXZ);
    accumTrochoidalWave(pGiant, vec2(-0.62, 0.78), 0.11, 58.0, 1.02, t + 9.7, envGiant * 0.85, disp, slopeXZ);

    // Primary irregular long swell train
    accumTrochoidalWave(pPrimary, vec2(0.81, 0.58), 0.19, 46.0, 1.00, t, envPrimary, disp, slopeXZ);
    accumTrochoidalWave(pPrimary, vec2(0.64, 0.77), 0.15, 29.0, 1.06, t + 4.1, envPrimary * 0.92, disp, slopeXZ);
    // Crossed fjord-refraction swell train creating towering pyramidal 3D interference peaks!
    accumTrochoidalWave(pCross, vec2(-0.52, 0.85), 0.165, 24.5, 1.09, t + 1.7, envCross, disp, slopeXZ);
    accumTrochoidalWave(pCross, vec2(0.28, -0.96), 0.125, 16.2, 1.16, t + 8.3, envCross * 0.90, disp, slopeXZ);
    // Mid-scale irregular wind-waves & turbulent currents
    accumTrochoidalWave(wp.xz + chopWarp, vec2(-0.88, -0.47), 0.105, 10.4, 1.24, t, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz - chopWarp, vec2(0.59, -0.80), 0.085, 6.7, 1.34, t + 2.9, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz + chopWarp * 0.5, vec2(-0.24, 0.97), 0.062, 4.1, 1.44, t + 5.6, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz, vec2(0.93, -0.36), 0.048, 2.7, 1.54, t + 3.2, envChop * 0.85, disp, slopeXZ);

    // Random rogue heave & deep trough drawdown (clamped safely below hero cliff rim!)
    float currentUndulation = ((swellSetA - 0.5) * 0.65 + rogueSurge * 0.95) * uWaveAmp * farDampLong;
    disp.y = clamp(disp.y + currentUndulation, -7.8, 7.6);

    wp.xyz += disp;
    vMacroNormal = normalize(vec3(-slopeXZ.x, 1.0, -slopeXZ.y));
    vWaveHeight = disp.y;
    vCrestFactor = clamp((disp.y / max(0.26, 1.45 * uWaveAmp)) * 0.5 + 0.5, 0.0, 1.0);
    vGroupEnergy = clamp(0.5 * (groupA + groupB) - 0.35, 0.0, 1.0);
    vRogueFactor = clamp(rogueSurge * 1.35, 0.0, 1.0);
    vWorldPos = wp.xyz;

    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Wv=`
  ${Vn}

  uniform float uWaveAmp;
  uniform float uWaveSpeed;
  uniform float uChoppiness;
  uniform vec3 uSunColor;
  uniform vec3 uWaterDeepColor;
  uniform vec3 uWaterShallowColor;
  uniform float uGlitterIntensity;
  uniform vec4 uStackCenters[24];

  varying vec3 vWorldPos;
  varying vec3 vMacroNormal;
  varying float vWaveHeight;
  varying float vCrestFactor;
  varying float vGroupEnergy;
  varying float vRogueFactor;

  float waterMicroDetail(vec2 p, float distScale) {
    float t = uTime * uWaveSpeed;
    float chop = (0.26 + 1.18 * uChoppiness) * (0.85 + 0.35 * clamp(uWindStrength, 0.0, 1.25));
    float amp = (0.22 + 0.76 * clamp(uWaveAmp, 0.05, 2.8)) * distScale;

    vec2 flow = vec2(
      skyFbm(p * 0.045 + vec2(t * 0.03, -t * 0.02)) - 0.5,
      skyFbm(p * 0.045 - vec2(t * 0.02, t * 0.03) + 7.7) - 0.5
    ) * 4.5;
    vec2 pw = p + flow;

    float h = 0.0;
    h += sin(dot(pw, vec2(0.32, 0.21)) - t * 1.55) * 0.22;
    h += sin(dot(pw, vec2(-0.26, 0.37)) - t * 2.05) * 0.17;
    h += sin(dot(pw, vec2(0.51, -0.44)) - t * 2.65) * 0.12 * chop;
    h += (skyFbm(pw * 0.44 + vec2(t * 0.36, -t * 0.24)) - 0.5) * 0.40 * chop;
    h += (skyNoise2(pw * 2.35 - vec2(t * 0.92, t * 0.68)) - 0.5) * 0.12 * chop;
    h += (skyNoise2(pw * 6.40 + vec2(t * 1.42, -t * 1.05)) - 0.5) * 0.036 * chop * distScale;
    return h * amp;
  }

  void main() {
    vec2 p = vWorldPos.xz;
    vec3 toCam = cameraPosition - vWorldPos;
    float dist = length(toCam);
    vec3 V = toCam / max(dist, 1e-4);
    vec3 L = normalize(uSunDir);

    float detailFade = 1.0 - smoothstep(55.0, 480.0, dist);
    float windCatspaw = mix(0.50, 1.34, smoothstep(0.24, 0.78, skyFbm(p * 0.018 + uWindDir * (uTime * 0.035))));
    float localDetail = detailFade * windCatspaw;

    float eps = mix(0.14, 1.15, smoothstep(15.0, 420.0, dist));
    float hC = waterMicroDetail(p, localDetail);
    float hX = waterMicroDetail(p + vec2(eps, 0.0), localDetail);
    float hZ = waterMicroDetail(p + vec2(0.0, eps), localDetail);

    vec3 microN = normalize(vec3(hC - hX, eps * 1.88, hC - hZ));
    vec3 combinedN = normalize(vec3(vMacroNormal.x + microN.x * localDetail, vMacroNormal.y, vMacroNormal.z + microN.z * localDetail));
    vec3 N = normalize(mix(vec3(0.0, 1.0, 0.0), combinedN, 1.0 - smoothstep(220.0, 820.0, dist)));

    vec3 R = reflect(-V, N);
    R.y = mix(0.005, R.y, smoothstep(-0.02, 0.14, R.y));
    R = normalize(R);

    float localCos = clamp(dot(N, V), 0.0, 1.0);
    float macroCos = clamp(V.y, 0.0, 1.0);
    float effectiveCos = mix(localCos, macroCos, smoothstep(130.0, 520.0, dist));
    float fresnel = 0.028 + 0.972 * pow(max(1.0 - effectiveCos, 1e-5), 4.8);

    float foamLace = skyFbm(p * 0.88 + vec2(uTime * 0.20 * uWaveSpeed, -uTime * 0.14 * uWaveSpeed));
    float spumeCells = skyNoise2(p * 3.1 - vec2(uTime * 0.42 * uWaveSpeed, 0.0));

    float coastalSurf = 0.0;
    float shoalGlow = 0.0;
    for (int i = 0; i < 24; i++) {
      vec4 sc = uStackCenters[i];
      if (sc.z <= 0.01) continue;
      float d = length(p - sc.xy) - sc.z;
      if (d < 26.0 && d > -12.0) {
        shoalGlow = max(shoalGlow, smoothstep(26.0, -4.0, d));
        if (d < 13.5 && d > -5.0) {
          float warpD = d + (foamLace - 0.5) * 3.0;
          float surge1 = sin(warpD * 1.48 - uTime * (1.65 + uWaveSpeed * 0.82)) * 0.5 + 0.5;
          float surge2 = sin(warpD * 2.85 + uTime * 1.18) * 0.5 + 0.5;
          float collar = smoothstep(9.8, 0.4, warpD) * smoothstep(-3.4, 0.15, warpD);
          float intensityBoost = sc.w > 0.5 ? 1.65 : 1.08;
          coastalSurf += collar * intensityBoost * (0.36 + 0.64 * surge1 * (0.6 + 0.4 * surge2)) * (0.45 + 0.55 * spumeCells) * (0.45 + 0.55 * clamp(uWaveAmp, 0.25, 2.2));
        }
      }
    }

    // Rich Cinematic Ocean Color: Abyssal Midnight-Sapphire Troughs -> Luminous Glacial Jade-Emerald Crests & Shoals!
    vec3 abyssTrough = uWaterDeepColor * vec3(0.84, 0.90, 1.14);
    vec3 shoalTurquoise = uWaterShallowColor * vec3(0.82, 1.36, 1.28);
    vec3 submergedSpumeVein = uWaterShallowColor * vec3(1.15, 1.65, 1.55);
    float veinMask = smoothstep(0.58, 0.86, foamLace) * smoothstep(0.35, 0.85, vCrestFactor) * (1.0 - smoothstep(140.0, 420.0, dist));

    vec3 baseBody = mix(abyssTrough, uWaterShallowColor * vec3(0.92, 1.18, 1.16), smoothstep(0.12, 0.88, vCrestFactor) * 0.62);
    vec3 waterBody = mix(baseBody, shoalTurquoise, shoalGlow * 0.64);
    waterBody = mix(waterBody, submergedSpumeVein, veinMask * 0.34);

    // Vivid backlit wave-crest subsurface scattering on tall & rogue swells!
    float sunBacklit = pow(max(clamp(dot(V, -vec3(L.x, L.y * 0.32, L.z)), 0.0, 1.0), 1e-5), 2.3);
    float thinCrest = smoothstep(0.40, 0.95, vCrestFactor + vRogueFactor * 0.18) * clamp(uWaveAmp, 0.18, 2.4);
    vec3 jadeSSS = uWaterShallowColor * vec3(0.88, 1.85, 1.62) * thinCrest * (0.32 + 0.96 * sunBacklit) * (1.0 - uNightFactor * 0.50);

    vec3 skyReflect = evalPhysicalSky(R, uTime, false);
    vec3 farWaterScatter = mix(waterBody + jadeSSS, skyReflect * 0.72, smoothstep(320.0, 1450.0, dist));
    vec3 col = mix(farWaterScatter, skyReflect, fresnel);

    // Dual-lobe solar / lunar glitter + theatrical lightning-bolt water reflection!
    vec3 halfSum = L + V;
    vec3 H = dot(halfSum, halfSum) > 1e-6 ? normalize(halfSum) : vec3(0.0, 1.0, 0.0);
    float ndoth = max(clamp(dot(N, H), 0.0, 1.0), 1e-5);
    float specPowerTight = mix(440.0, 105.0, smoothstep(35.0, 520.0, dist));
    float specTight = pow(ndoth, specPowerTight) * (0.30 + 0.70 * localDetail) * (1.0 - smoothstep(420.0, 1200.0, dist));
    float specBroad = pow(ndoth, 34.0) * (0.35 + 0.65 * localDetail) * (1.0 - smoothstep(420.0, 1550.0, dist));
    col += uSunColor * (specTight * uGlitterIntensity + specBroad * uGlitterIntensity * 0.10);

    if (uLightningFlash > 0.001) {
      vec3 boltHalfRaw = normalize(uLightningDir + vec3(0.0, 1e-5, 0.0)) + V;
      vec3 boltH = dot(boltHalfRaw, boltHalfRaw) > 1e-6 ? normalize(boltHalfRaw) : vec3(0.0, 1.0, 0.0);
      float boltSpec = pow(max(clamp(dot(N, boltH), 0.0, 1.0), 1e-5), 42.0);
      col += vec3(0.75, 0.88, 1.0) * uLightningFlash * boltSpec * 3.8 * (1.0 - smoothstep(450.0, 1400.0, dist));
    }

    // Irregular rogue-wave whitecaps & wind-driven Langmuir foam streaks!
    float langmuirStreak = smoothstep(0.58, 0.90, skyFbm(vec2(p.x * 0.18 + p.y * 0.06, p.y * 0.28 - p.x * 0.08) + uWindDir * (uTime * 0.08)));
    float openSeaWhitecap =
      smoothstep(0.70 - uChoppiness * 0.24 - vGroupEnergy * 0.09 - vRogueFactor * 0.12, 0.96, vCrestFactor + (foamLace - 0.5) * 0.38) *
      (0.25 + 0.85 * uChoppiness) *
      (0.55 + 0.65 * vGroupEnergy + 0.45 * vRogueFactor) *
      clamp(uWaveAmp * 0.86, 0.0, 1.65) *
      (0.42 + 0.58 * spumeCells) +
      langmuirStreak * uChoppiness * clamp(uWaveAmp - 0.35, 0.0, 1.4) * 0.16 * spumeCells;

    float totalFoam = clamp((openSeaWhitecap + coastalSurf) * (1.0 - smoothstep(240.0, 760.0, dist)), 0.0, 0.92);
    vec3 foamAmbient = mix(uHorizonAntiColor, uHorizonSunColor, 0.46) * 1.28 + uSunColor * 0.35 + vec3(0.70, 0.85, 1.0) * uLightningFlash * 0.55;
    col = mix(col, foamAmbient, totalFoam);

    // Seamless y = 0 horizon convergence
    vec3 exactHorizonSky = evalHorizonHazeColor(-toCam);
    float aerialExtinction = 1.0 - exp(-pow(max(uMistDensity * dist, 1e-6), 1.24));
    float distRimFeather = smoothstep(1650.0, 5100.0, dist);
    float outerRimFeather = smoothstep(2400.0, 5350.0, length(p));
    float horizonBlend = clamp(max(aerialExtinction, max(distRimFeather, outerRimFeather)), 0.0, 1.0);
    col = mix(col, exactHorizonSky, horizonBlend);

    float nearShoalClarity = shoalGlow * (1.0 - smoothstep(75.0, 165.0, dist)) * (1.0 - fresnel) * (1.0 - totalFoam);
    float waterAlpha = mix(1.0, 0.80, clamp(nearShoalClarity, 0.0, 1.0));
    waterAlpha = mix(waterAlpha, 1.0, horizonBlend);

    gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), clamp(waterAlpha, 0.80, 1.0));
  }
`;function Vv(i=5600,t=300,e=256){const n=(t+1)*(e+1),s=new Float32Array(n*3),o=new Float32Array(n*2);for(let c=0;c<=t;c++){const h=c/t,u=i*Math.pow(h,2.3);for(let d=0;d<=e;d++){const g=d/e*Math.PI*2,v=Math.cos(g)*u,m=Math.sin(g)*u,p=c*(e+1)+d;s[p*3]=v,s[p*3+1]=0,s[p*3+2]=m,o[p*2]=v*.02,o[p*2+1]=m*.02}}const a=new Uint32Array(t*e*6);let r=0;for(let c=0;c<t;c++)for(let h=0;h<e;h++){const u=c*(e+1)+h,d=(c+1)*(e+1)+h,f=(c+1)*(e+1)+(h+1),g=c*(e+1)+(h+1);a[r++]=u,a[r++]=f,a[r++]=d,a[r++]=u,a[r++]=g,a[r++]=f}const l=new Yt;return l.setAttribute("position",new Z(s,3)),l.setAttribute("uv",new Z(o,2)),l.setIndex(new Z(a,1)),l.computeBoundingSphere(),l}function Gv(i,t,e){const n={...Eo,...e},s=[];for(let c=0;c<24;c++){const h=i[c];h?s.push(new We(h.x,h.z,h.radius,h.boost??0)):s.push(new We(9999,9999,0,0))}const o={...t,uWaveAmp:{value:n.waveAmplitude},uWaveSpeed:{value:n.waveSpeed},uChoppiness:{value:n.seaChoppiness},uStackCenters:{value:s}},a=Vv(5600,300,256),r=new Oe({name:"NorthSeaPhysicalOcean",vertexShader:Hv,fragmentShader:Wv,uniforms:o,transparent:!0,depthWrite:!0}),l=new Be(a,r);return l.position.y=-11.5,l.renderOrder=2,l.frustumCulled=!1,l.name="NorthSeaOcean",{mesh:l,params:n,setOceanParams(c){Object.assign(n,c),o.uWaveAmp.value=n.waveAmplitude,o.uWaveSpeed.value=n.waveSpeed,o.uChoppiness.value=n.seaChoppiness},update(c){o.uTime.value=c}}}const ve=-11.5,Xv=-25.5,Ni=-44;function Yv(i){return i-Math.floor(i)}function nt(i,t){return Yv(Math.sin(i*127.1+t*311.7)*43758.5453123)}function ku(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,a=s*s*s*(s*(s*6-15)+10),r=o*o*o*(o*(o*6-15)+10),l=nt(e,n),c=nt(e+1,n),h=nt(e,n+1),u=nt(e+1,n+1);return l+(c-l)*a+(h-l)*r+(l-c-h+u)*a*r}function he(i,t,e=4){let n=0,s=.5,o=1;for(let a=0;a<e;a++)n+=s*ku(i*o,t*o),o*=2.03,s*=.5;return n}function ne(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Je(i,t,e=2){let n=0,s=1,o=.56,a=1,r=0;for(let l=0;l<e;l++){const c=ku(i*a,t*a)*2-1,h=1-(Math.sqrt(c*c+.068)-.261)/.78,u=Math.max(0,Math.min(1,h));n+=o*u*s,r+=o,s=.55+.45*u,a*=2.03,o*=.46}return n/Math.max(1e-4,r)}function Oo(i,t,e,n,s=999){if(i<=.4)return i;const o=(i+t)/e,a=Math.floor(o),r=o-a,l=.38*Math.pow(r,1.28)+.62*ne(.64,.96,r),c=(a+l)*e-t,h=1-ne(s*.74,s*.95,i);return X.lerp(i,c,n*h)}function Za(i,t,e,n,s,o){const a=Math.max(0,Math.min(1,e)),r=Math.sin(a*Math.PI),l=he(n*.052+o*1.3,s*.052-o*1.7,3)-.5,c=Je(n*.115-o*2.1,s*.115+o*1.4,2)-.48,h=Je((n*.86+s*.5)*.17+o*2.9,(s*.86-n*.5)*.14-o,2)-.48,u=he(n*.24+o*.9,s*.24-o*2.3,2)-.5,d=X.clamp(a-(l*.4+c*.28+h*.18+u*.12)*r,0,1),f=ne(.24,.72,he(n*.058+o*1.7,s*.058-o*1.3,2)),g=.36+.26*(he(n*.085-o,s*.085+o,2)-.5),v=ne(0,.38,d),m=ne(.58,1,d),p=v*g+m*(1-g),M=Math.pow(d,.78),_=X.lerp(M,p,f*.82),x=Je(n*.14+o*2.1,s*.14-o*1.9,2),y=he(n*.27-o,s*.27+o*2.3,2)-.5,w=((x-.48)*3.4+y*2.05+h*1.65)*r,A=he(n*.095+o*3.1,s*.095-o*2.7,3),T=ne(.42,.78,A)*ne(.62,.86,a)*(1-ne(.95,1,a)),S=ve+.25+(A-.5)*1.85;let b=X.lerp(i,t,_)+w;return b=X.lerp(b,Math.max(b,S),T*.82),Math.min(i+.04,Math.max(t-1.2,b))}function tc(i,t,e,n){const s=(Je(i*.16+n,t*.16-n,2)-.48)*.68+(he(i*.32-n*1.3,t*.32+n*.7,2)-.5)*.28,o=i*.024-t*.019+(he(i*.045+n,t*.045,2)-.5)*1.4,a=(e+o)/2.65,r=a-Math.floor(a),l=(ne(.1,.36,r)-r)*.34,c=Math.exp(-Math.pow((e-(ve-.45))/1.9,2))*.62;return{radialOffset:s+l+c,verticalLedgeOffset:l*.42}}const ai={position:new E(4.45,0,.22),yaw:-.14},ri={position:new E(-4.45,0,-.22),yaw:.16};function Li(i,t){const e=Math.hypot((i-4.45)/2.45,(t-.22)/1.95),n=Math.hypot((i+4.45)/2.45,(t+.22)/1.95),s=Math.min(e,n),o=ne(.84,1.32,s),a=ne(.72,1.18,s),r=(he(i*.065+3.1,t*.065-2.4,3)-.5)*5.6+(Je(i*.14-1.7,t*.14+4.3,2)-.48)*2.3,l=(he(i*.065-5.2,t*.065+1.9,3)-.5)*4.8+(Je(i*.15+2.9,t*.15-3.1,2)-.48)*2.1,c=i+a*r,h=t+a*l,u=Math.atan2(h+4.2,c),d=t>1.2?.66:t<-8?1.52:1+(-t+1.2)*.046,f=1+.19*Math.sin(u*2-.42)+.14*Math.sin(u*3+.72)+.1*Math.cos(u*5-1.15)+.06*Math.sin(u*7+.4),g=c/(15.8*f),v=(h+4.2)/(11.2*d*f);let m=Math.sqrt(g*g+v*v);if(t>.6){const W=Math.exp(-Math.pow((i-4.85)/2.65,2)-Math.pow((t-3.9)/3.4,2))*.21,O=Math.exp(-Math.pow((i+5.15)/2.75,2)-Math.pow((t-3.6)/3.2,2))*.19,q=Math.exp(-Math.pow((i-.35)/1.75,2)-Math.pow((t-2.9)/2.8,2))*.17,K=Math.exp(-Math.pow((i-10.6)/2.4,2)-Math.pow((t-2.2)/3.2,2))*.18,Y=Math.exp(-Math.pow((i+9.2)/1.9,2)-Math.pow((t-2.4)/2.9,2))*.15,V=(Je(i*.26+7.4,t*.26-3.8,2)-.48)*.11*ne(1.1,2.4,t);m+=-W-O+q-K+Y+V}let p=0;if(t<-3.5){const W=(c+17.5)/15.4,O=(h+25)/18.8,q=Math.sqrt(W*W+O*O),K=q*(.92+.16*he(i*.065+2.2,t*.065-1.4,3)),Y=Math.max(0,1-Math.abs(m-K)/.52);m=Math.min(m,K)-.11*Y*Y;const V=Math.min(1,q/.98*(q/.98)),H=Math.pow(Math.max(0,1-V),1.18),J=X.clamp(.62-W*.38-O*.22,.26,1.12),ht=H*J*(7.8+2.4*Je(i*.05+5.1,t*.05-3.2,2));p=Oo(ht,i*.04-t*.03,3.6,.52)}if(i>9&&t<-6.5){const W=(i-18.2)/6.2,O=(t+19.2)/7.2,q=Math.exp(-(W*W+O*O))*.36;m+=q}const M=1-.78*ne(-.4,4.2,t)*(1-ne(4.2,11.8,Math.abs(i))),_=((he(i*.095+4.2,t*.095-1.7,3)-.47)*1.35+(Je(i*.15-2.3,t*.15+6.1,2)-.48)*.52)*o*M,x=Math.max(0,(-t-6.2)/25),y=Math.pow(Math.min(1.22,x),1.32)/(1+.22*x*x),w=ne(39,9,Math.abs(i+3.2)),A=Je(i*.046+1.8,t*.042-2.7,2),T=y*w*(7.4+6.4*A+(he(i*.075-3.4,t*.075+1.9,2)-.5)*2.8),S=Oo(T,i*.045+t*.028,4,.56,13.5),b=_+Math.max(S,p*o),C=.76+(.13*(Je(i*.12+3.7,t*.12-2.1,2)-.48)+.09*(he(Math.cos(u)*2.6+2.1,Math.sin(u)*2.6-1.3,3)-.5))*a;if(m<=C)return b;const R=1.48+.24*(he(Math.cos(u)*2.2-4.1,Math.sin(u)*2.2+3.3,2)-.5),L=ne(C,R,m),F=ne(R-.08,R+.78,m),k=he(i*.08+5.7,t*.08-4.3,2),N=ve-1.35+ne(.45,.85,k)*1.95,D=Za(b,N,L,i,t,7.3);return X.lerp(D,Ni,F)}function ss(i){const t=Math.cos(i.rotRad),e=Math.sin(i.rotRad),n=i.summitOffset?.dx??i.rx*.24*Math.sin(i.seed),s=i.summitOffset?.dz??i.rz*-.2*Math.cos(i.seed*1.3),o=i.seed*1.37,a=Math.cos(o),r=Math.sin(o);return(l,c)=>{const h=l-i.cx,u=c-i.cz,d=h*t-u*e,f=h*e+u*t,g=d+(he(d*.042+i.seed,f*.042-i.seed,3)-.5)*(i.rx*.48)+(Je(d*.095+i.seed,f*.095,2)-.48)*(i.rx*.18),v=f+(he(d*.042-i.seed,f*.042+i.seed,3)-.5)*(i.rz*.48)+(Je(d*.095-i.seed,f*.095+2.1,2)-.48)*(i.rz*.18),m=Math.atan2(v,g),p=1+.21*Math.sin(m*2+i.seed)+.15*Math.cos(m*3-i.seed*1.5)+.1*Math.sin(m*5+.9)+.06*Math.cos(m*7-i.seed*.6);let _=Math.sqrt(Math.pow(g/(i.rx*p),2)+Math.pow(v/(i.rz*p),2));const x=(g-n)*-r+(v-s)*a,y=(g-n)*a+(v-s)*r,w=Math.pow(x/(i.rx*p*1.28),2)+Math.pow(y/(i.rz*p*.88),2),A=(d*a+f*r)/Math.max(8,i.rx),T=X.clamp(.62+.38*A,.3,1.12),S=Math.pow(Math.max(0,1-Math.min(1,w)),1.38),b=1/(1+1.85*w*w);let P=i.peakY*(.2+.5*S*T+.24*b);if(i.secondaryLobe){const Q=i.secondaryLobe,st=g-Q.dx,$=v-Q.dz,tt=Math.atan2($,st),yt=1+.18*Math.cos(tt*2-i.seed)+.12*Math.sin(tt*3+i.seed),rt=Math.sqrt(Math.pow(st/(Q.rx*yt),2)+Math.pow($/(Q.rz*yt),2)),z=Q.lowSaddle?.44:.38,xt=Math.max(0,Math.min(1,.5+.5*(rt-_)/z));_=rt*(1-xt)+_*xt-z*xt*(1-xt);const at=i.peakY*Math.min(Q.peakScale,1.06),St=Math.min(1,rt*rt),dt=Math.pow(Math.max(0,1-St),1.35),Dt=at*(.22+.68*dt),At=Q.lowSaddle?Math.sin(xt*Math.PI)*.44:Math.sin(xt*Math.PI)*.22;P=X.lerp(Dt,P,xt)*(1-At)}const C=1-ne(.56,1.02,_),R=Je(d*.032+i.seed*1.3,f*.038-i.seed*.9,2),L=he(d*.045-i.seed*.7,f*.045+i.seed*1.4,3),F=P+(R-.48)*(i.peakY*.18)*(.35+.65*C)+(L-.48)*(i.peakY*.12)*C;let k=Oo(F,d*.032*a+f*.032*r,Math.max(3.8,i.peakY*.22),.48,i.peakY),N=0;if(i.carveRiverToEast&&d>4.2){const Q=Math.sin(d*.11+.35)*1.85,st=Math.abs(f-Q),$=ne(5.2,8.8,d)*(1-ne(.95,3.8,st));if($>.001){const rt=8.35-ne(5.5,10.4,d)*.75;k=X.lerp(k,Math.min(k,rt),$)}const tt=(he(d*.18+3.1,f*.18-1.9,2)-.5)*1.35,yt=Math.exp(-Math.pow((f-Q+tt*.35)/7.8,2));if(yt>.02&&d>7.2){const rt=10.55-1.15*yt+tt*.35;N=ne(rt-.6,rt+.9,d)*yt,_=Math.max(_,.72+ne(rt-.2,rt+1.15,d)*.72*yt)}}const W=.66+(.13*(Je(d*.1+i.seed,f*.1-i.seed,2)-.48)+.1*(he(Math.cos(m)*2.5+i.seed,Math.sin(m)*2.5-i.seed,3)-.5))*(1-N*.65);if(_<=W)return k;const O=1.06+.18*(he(Math.cos(m)*2.3-i.seed,Math.sin(m)*2.3+i.seed,2)-.5),q=X.lerp(O,W+.09,N),K=ne(W,q,_),Y=ne(X.lerp(O-.06,W+.07,N),X.lerp(O+.34,W+.24,N),_),V=he(l*.075+i.seed,c*.075-i.seed,2),H=ve-1.35+ne(.44,.84,V)*1.95,J=X.lerp(H,ve-5.8,N),ht=N>.35?X.lerp(k,J,Math.pow(X.clamp(K+(he(l*.16,c*.16,2)-.5)*.18*Math.sin(K*Math.PI),0,1),.68)):Za(k,J,K,l,c,i.seed);return X.lerp(ht,Ni,Y)}}function ec(i){return(t,e)=>{const n=t-i.cx,s=e-i.cz,o=n+(he(n*.038+i.seed,s*.038-i.seed,3)-.5)*(i.ringRadius*.34)+(Je(n*.085+i.seed,s*.085,2)-.48)*3.8,a=s+(he(n*.038-i.seed,s*.038+i.seed,3)-.5)*(i.ringRadius*.34)+(Je(n*.085-i.seed,s*.085+1.7,2)-.48)*3.8,r=Math.hypot(o,a),l=Math.atan2(a,o),c=i.openAngleRad+Math.PI;let h=l-c;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const u=Math.abs(h),d=1-ne(i.arcHalfSpanRad*.72,i.arcHalfSpanRad*1.08,u),f=i.ringHalfWidth*(.72+.42*d+.18*Math.sin(h*2.6+i.seed)),g=r-i.ringRadius*1.06,v=g>=0?f*.72:f*1.28,p=Math.abs(g)/Math.max(3.5,v)+(1-d)*1.35,M=.72+.2*Math.cos(h*2.2+i.seed*.7)+.11*Math.sin(h*3.6-i.seed),_=Je(n*.036+i.seed,s*.036-i.seed,2),x=Math.min(1,p/.94*(p/.94)),y=g<0?Math.pow(Math.max(0,1-x),1.45):Math.pow(Math.max(0,1-x),1.05),w=i.peakY*(.24+.72*y)*(.58+.42*d)*M+(_-.48)*(i.peakY*.16)*d,A=Oo(w,n*.03-s*.025,Math.max(3.6,i.peakY*.22),.46,i.peakY),T=(1-ne(i.ringRadius*.55,i.ringRadius*1.15,r))*.65,S=X.lerp(Ni,-16.2,T),b=.54+.13*(Je(n*.095+i.seed,s*.095-i.seed,2)-.48)+.08*(he(n*.06-i.seed,s*.06+i.seed,2)-.5);if(p<=b)return A;const P=1.06+.16*(he(Math.cos(l)*2.4+i.seed,Math.sin(l)*2.4,2)-.5),C=ne(b,P,p),R=ne(P-.06,P+.34,p),L=he(t*.08+i.seed,e*.08-i.seed,2),F=ve-1.35+ne(.45,.84,L)*1.9,k=Za(A,F,C,t,e,i.seed);return X.lerp(k,S,R)}}const Pi=ss({cx:-66,cz:-32,rx:21.5,rz:25,peakY:18.4,summitOffset:{dx:-3.5,dz:-7.5},seed:5.7,rotRad:.18,secondaryLobe:{dx:-24.5,dz:-11.5,rx:17.5,rz:19.5,peakScale:1.24},carveRiverToEast:!0}),nc=ec({cx:88,cz:36,ringRadius:28,ringHalfWidth:12.6,peakY:16.8,openAngleRad:-2.45,arcHalfSpanRad:1.92,seed:22.9}),ic=ss({cx:88,cz:-56,rx:25,rz:31.5,peakY:22.4,summitOffset:{dx:4.2,dz:-6},seed:14.3,rotRad:-.34,secondaryLobe:{dx:-18,dz:33.5,rx:15,rz:17,peakScale:.74,lowSaddle:!0}}),zu=ss({cx:-124,cz:-86,rx:33,rz:24.5,peakY:25.5,summitOffset:{dx:-7.5,dz:3},seed:37.8,rotRad:.42,secondaryLobe:{dx:21,dz:-10.5,rx:16.5,rz:15,peakScale:.72}}),Bu=ss({cx:-42,cz:-96,rx:17.5,rz:19.5,peakY:20.2,seed:31.6,rotRad:-.28,secondaryLobe:{dx:-19.5,dz:14,rx:12.5,rz:14,peakScale:.74}}),Ou=ss({cx:36,cz:-108,rx:19.5,rz:22,peakY:22.8,seed:44.1,rotRad:.52,secondaryLobe:{dx:18.5,dz:-14.5,rx:13.5,rz:15,peakScale:.78}}),$v=ec({cx:-144,cz:78,ringRadius:38,ringHalfWidth:15.5,peakY:23.8,openAngleRad:.62,arcHalfSpanRad:1.84,seed:58.4}),qv=ss({cx:168,cz:122,rx:38,rz:32,peakY:29.5,seed:71.2,rotRad:-.48,secondaryLobe:{dx:-36,dz:-18,rx:24,rz:22,peakScale:.76}}),Zv=ss({cx:-206,cz:-96,rx:42,rz:46,peakY:36.5,seed:83.9,rotRad:-.19,secondaryLobe:{dx:28,dz:34,rx:23,rz:25,peakScale:.7}}),jv=ec({cx:-8,cz:-222,ringRadius:52,ringHalfWidth:19.5,peakY:33.5,openAngleRad:1.52,arcHalfSpanRad:1.8,seed:96.3}),Kv=ss({cx:-18,cz:236,rx:34,rz:26,peakY:25.5,seed:109.7,rotRad:.15,secondaryLobe:{dx:38,dz:-12,rx:22,rz:18,peakScale:.78}}),Rl=[{name:"WestWaterfallDoubleIsland",centerX:-74,centerZ:-36,spanX:112,spanZ:102,gridSegs:168,hasFlora:!0,evalHeight:Pi},{name:"StarboardCrescentLagoonAtoll",centerX:88,centerZ:36,spanX:124,spanZ:124,gridSegs:164,hasFlora:!0,evalHeight:nc},{name:"EastSerpentineTomboloIsland",centerX:84,centerZ:-46,spanX:118,spanZ:134,gridSegs:156,hasFlora:!0,evalHeight:ic},{name:"WestTraelanipaTableIsland",centerX:-124,centerZ:-86,spanX:116,spanZ:102,gridSegs:132,hasFlora:!0,evalHeight:zu},{name:"NorthWestHolmPair",centerX:-48,centerZ:-92,spanX:92,spanZ:86,gridSegs:112,hasFlora:!0,evalHeight:Bu},{name:"NorthEastHeadlandTable",centerX:42,centerZ:-112,spanX:94,spanZ:90,gridSegs:112,hasFlora:!1,evalHeight:Ou},{name:"SouthWestBrokenCrescent",centerX:-144,centerZ:78,spanX:156,spanZ:152,gridSegs:120,hasFlora:!1,evalHeight:$v},{name:"SouthEastTableSound",centerX:156,centerZ:116,spanX:168,spanZ:152,gridSegs:112,hasFlora:!1,evalHeight:qv},{name:"FarWestCliffMassif",centerX:-198,centerZ:-88,spanX:174,spanZ:168,gridSegs:108,hasFlora:!1,evalHeight:Zv},{name:"NorthernSoundCrescentIsland",centerX:-8,centerZ:-222,spanX:196,spanZ:166,gridSegs:112,hasFlora:!1,evalHeight:jv},{name:"SouthHorizonHolms",centerX:-4,centerZ:232,spanX:166,spanZ:122,gridSegs:100,hasFlora:!1,evalHeight:Kv}],Xs=[{x:43.5,z:14.5,rx:4.8,rz:4.2,topY:4.6,topSlopeX:-.08,rotY:.45,seed:14.2},{x:63,z:50.5,rx:7.5,rz:5.2,topY:-8.2,topSlopeX:.05,rotY:-.35,seed:23.8},{x:27.5,z:-10.5,rx:5.4,rz:4.4,topY:1.8,topSlopeX:.07,rotY:.22,seed:31.4},{x:-37.5,z:-22,rx:6.2,rz:4.8,topY:2.6,topSlopeX:-.09,rotY:-.52,seed:42.7},{x:-46.5,z:-15.5,rx:5.2,rz:4.2,topY:-6.8,topSlopeX:-.06,rotY:.61,seed:55.3},{x:-106,z:-49,rx:7.8,rz:6,topY:6.4,topSlopeX:-.1,rotY:.18,seed:68.9},{x:57.5,z:-22.5,rx:6.4,rz:5,topY:-5.4,topSlopeX:.08,rotY:-.44,seed:79.1},{x:-21.5,z:-79,rx:7.2,rz:5.8,topY:5.2,topSlopeX:-.07,rotY:.33,seed:92.6}],Co=[{x:59.5,z:23,rotY:-.58,halfLength:14.5,halfThickness:4.6,plateauTopY:6.8,openingHalfSpan:5.4,vaultCrownY:.4,seed:17.3},{x:-95.5,z:-22.5,rotY:.88,halfLength:13,halfThickness:4.4,plateauTopY:6.2,openingHalfSpan:4.8,vaultCrownY:-.2,seed:49.8}];function vi(i,t){let e=Ni;Math.abs(i)<54&&t>-66&&t<40&&(e=Math.max(e,Li(i,t)));for(const n of Rl)Math.abs(i-n.centerX)<=n.spanX*.52&&Math.abs(t-n.centerZ)<=n.spanZ*.52&&(e=Math.max(e,n.evalHeight(i,t)));for(const n of Co)Math.hypot(i-n.x,t-n.z)<n.halfLength+5&&(e=Math.max(e,n.plateauTopY+1));for(const n of Xs){const s=Math.max(n.rx,n.rz),o=Math.hypot(i-n.x,t-n.z);if(o<s*1.45){const a=1-ne(.65,1.45,o/s);e=Math.max(e,Ni+(n.topY-Ni)*a)}}return e}function Th(i,t,e){i.computeVertexNormals();const n=i.getAttribute("position"),s=i.getAttribute("normal");for(let o=0;o<n.count;o++){const a=n.getX(o),r=n.getY(o),l=n.getZ(o),c=s.getX(o),h=s.getY(o),u=s.getZ(o);if(h>=.72||r<-23.5)continue;let d=1;if(e){const x=Math.hypot((a-4.45)/2.75,(l-.22)/2.25),y=Math.hypot((a+4.45)/2.75,(l+.22)/2.25);if(d=ne(.88,1.32,Math.min(x,y)),d<=.001)continue}const f=ne(.7,.22,h)*ne(-23.5,-16.5,r)*d;if(f<=.002)continue;const g=Math.hypot(c,u);if(g<1e-4)continue;const v=c/g,m=u/g,p=tc(a,l,r,t),M=X.clamp(p.radialOffset*f,-.13,.19),_=X.clamp(p.verticalLedgeOffset*f,-.22,.22);n.setXYZ(o,a+v*M,r+_,l+m*M)}i.computeVertexNormals()}function Qv(i){const l=new Float32Array(28257),c=new Float32Array(9419*2);for(let g=0;g<=128;g++){const v=g/128,m=(v-.5)*2*i.halfLength,p=v<.5?-1:1,M=Math.min(v,1-v),_=Math.sin(v*Math.PI*1.65+i.seed)*2.65+Math.cos(v*Math.PI*2.9-i.seed*.7)*1.25+(he(v*4.2+i.seed,1.7,3)-.5)*2.35,x=ne(0,.24,M),y=x+.085*Math.sin(x*Math.PI*3+i.seed*.8)*Math.sin(x*Math.PI),w=X.clamp(y,0,1),A=ne(0,.035,M),T=(.5-v)*2.2+Math.sin(v*Math.PI)*.85,S=(he(m*.09+i.seed,_*.09,3)-.5)*1.35+(Je(m*.08+i.seed,2.3,2)-.48)*.85,b=i.plateauTopY+T+S,P=X.lerp(ve-18.5,b,w),C=m-i.openingHalfSpan*.06,R=Math.abs(C)/i.openingHalfSpan,L=1-ne(.74,1.18,R),F=Math.pow(Math.max(0,1-Math.min(1,R*R)),.88),k=(he(m*.35-i.seed,2.1,3)-.5)*.95,N=ve-5.2+(i.vaultCrownY+.35-(ve-5.2))*F+k,D=X.lerp(Ni,N,L),W=1+.48*(1-L)+.34*Math.sin(v*Math.PI*3.6+i.seed*1.3)+.3*(he(v*5.6+i.seed,6.2,3)-.5),O=i.halfThickness*W*(.28+.72*Math.pow(w,.65))*A;for(let q=0;q<=72;q++){const K=q/72,Y=K*Math.PI*2,V=Math.sin(Y),H=Math.cos(Y),J=Math.sign(V)*Math.pow(Math.abs(V),.78),ht=.5+.5*Math.sign(H)*Math.pow(Math.abs(H),.7),Q=Math.pow(Math.abs(V),.88)*A,st=(.32-.42*J)*Math.max(0,H)*w;let $=X.lerp(D,P,ht)+st;H<-.22&&L>.05&&($+=(-H-.22)*(1-J*J)*1.15*L);const tt=V>=0?i.seed+11.7:i.seed-19.3,yt=(he(m*.13+tt,$*.1,3)-.48)*3.15+(Je(m*.21-tt,$*.085+m*.04,2)-.48)*1.95+Math.sin(m*.36+$*.18+tt)*.65,rt=Math.sin($*1.05+m*.07+tt)*.52+(Math.abs(($*.28+10)%1-.5)-.25)*.75,z=Math.exp(-Math.pow(($-(ve+.15))/2.3,2))*(1.95+1.25*he(m*.18+tt,3.7,2))*(1-L*.72)*A,xt=tc(m,_+J*5,$,tt),at=Q*ne(-24,-14.5,$),St=Math.max(0,O+z+(yt+rt+xt.radialOffset*1.05)*at),dt=(1-ne(.02,.3,M))*A,Dt=Math.pow(Math.max(0,1-Math.min(1,J*J*.85)),.75),At=1-.55*ne(ve-1,i.plateauTopY,$),B=p*dt*(3.8*Dt*At+(he($*.15+tt,J*2.1+p*3.1,3)-.42)*2.85+(Je(J*2.8-tt,$*.12,2)-.45)*1.75),I=m+B+(he($*.14+tt,v*4.8,3)-.5)*1.35*at,it=_*A+J*St,pt=$+xt.verticalLedgeOffset*.68*Q*A,_t=g*73+q;l[_t*3]=I,l[_t*3+1]=pt,l[_t*3+2]=it,c[_t*2]=v*3.8,c[_t*2+1]=K*2.6}}const h=9417,u=9418;l[h*3]=-i.halfLength,l[h*3+1]=ve-23,l[h*3+2]=0,c[h*2]=0,c[h*2+1]=.5,l[u*3]=i.halfLength,l[u*3+1]=ve-23,l[u*3+2]=0,c[u*2]=3.8,c[u*2+1]=.5;const d=[];for(let g=0;g<128;g++)for(let v=0;v<72;v++){const m=g*73+v,p=(g+1)*73+v,M=(g+1)*73+(v+1),_=g*73+(v+1);d.push(m,_,M,m,M,p)}for(let g=0;g<72;g++){d.push(h,g+1,g);const v=9344;d.push(u,v+g,v+g+1)}const f=new Yt;return f.setAttribute("position",new Z(l,3)),f.setAttribute("uv",new Z(c,2)),f.setIndex(d),f.computeVertexNormals(),f}function Jv(i){const r=new Float32Array(5808),l=new Float32Array(1936*2),c=Math.cos(i.rotY),h=Math.sin(i.rotY),u=(_,x,y,w)=>{const A=1+.18*Math.cos(y*3+i.seed+w*.9)+.14*Math.sin(y*5-i.seed*.8-w*1.2)+.09*Math.cos(y*7+i.seed*1.7),T=.84+.3*he(_*1.8+i.seed,x*1.8+w*2.4,3);return{lx:_*i.rx*A*T,lz:x*i.rz*A*T}},f=i.topY>ve+4?.68:.42;for(let _=0;_<=42;_++){const x=_>36,y=Math.min(1,_/36),w=x?(_-36)/6:0;for(let A=0;A<=44;A++){const T=A/44,S=T*Math.PI*2,b=Math.cos(S),P=Math.sin(S),C=x?Math.cos(w*Math.PI*.5):1,R=x?Math.sin(w*Math.PI*.5)*f:0,L=u(b,P,S,y),F=(he(L.lx*.18+i.seed,L.lz*.18-i.seed,2)-.5)*.85,k=i.topY+(L.lx*i.topSlopeX+F)*C,N=.034*Math.sin(y*18+i.seed+S*.5)*Math.sin(y*Math.PI),D=X.clamp(y+N,0,1),W=X.lerp(Ni,k,D)+R,O=1.28-.3*Math.pow(y,.85)+.09*Math.cos(y*14+i.seed+P*1.4)+.06*Math.sin(S*4+y*9-i.seed),q=1+(.48+.24*P)*Math.exp(-Math.pow((W-(ve+.1))/2.1,2)),K=tc(i.x+L.lx,i.z+L.lz,W,i.seed),Y=ne(.12,.36,y)*(1-ne(.88,1,y))*C,V=O*q*C,H=L.lx*V+b*K.radialOffset*.92*Y,J=L.lz*V+P*K.radialOffset*.92*Y,ht=i.x+H*c-J*h,Q=i.z+H*h+J*c,st=_*45+A;r[st*3]=ht,r[st*3+1]=W,r[st*3+2]=Q,l[st*2]=T*2.4,l[st*2+1]=y*3+w*.4}}const g=1935;r[g*3]=i.x,r[g*3+1]=i.topY+f,r[g*3+2]=i.z,l[g*2]=.5,l[g*2+1]=3.5;const v=[],m=42;for(let _=0;_<m;_++)for(let x=0;x<44;x++){const y=_*45+x,w=(_+1)*45+x,A=(_+1)*45+(x+1),T=_*45+(x+1);v.push(y,w,A,y,A,T)}const p=m*45;for(let _=0;_<44;_++)v.push(g,p+_+1,p+_);const M=new Yt;return M.setAttribute("position",new Z(r,3)),M.setAttribute("uv",new Z(l,2)),M.setIndex(v),M.computeVertexNormals(),M}function tx(){const i=[],t=a=>{const d=new Float32Array(822),f=new Float32Array(274*2),g=Math.cos(a.rotY),v=Math.sin(a.rotY);for(let w=0;w<=15;w++){const A=w>12,T=Math.min(1,w/12),S=A?(w-12)/3:0,b=A?Math.cos(S*Math.PI*.5):1,P=A?Math.sin(S*Math.PI*.5)*.22:0,C=(1.16-.18*T+.16*Math.exp(-Math.pow((T-.78)/.16,2))+.11*Math.sin(T*11.5+a.seed))*b,R=X.lerp(a.botY,a.topY-.22,T)+P,L=a.leanX*(T-.45),F=a.leanZ*(T-.45);for(let k=0;k<=16;k++){const N=k/16,D=N*Math.PI*2,W=Math.cos(D),O=Math.sin(D),q=.78+.38*he(W*1.9+a.seed,O*1.9+T*2.6-a.seed,3)+.1*Math.cos(D*3+a.seed+T*2),K=W*a.rx*C*q,Y=O*a.rz*C*q,V=a.x+L+K*g-Y*v,H=a.z+F+K*v+Y*g,J=w*17+k;d[J*3]=V,d[J*3+1]=R,d[J*3+2]=H,f[J*2]=N*1.8,f[J*2+1]=T*2.2+S*.3}}const m=15,p=(m+1)*17,M=p+1;d[p*3]=a.x-a.leanX*.45,d[p*3+1]=a.botY,d[p*3+2]=a.z-a.leanZ*.45,f[p*2]=.5,f[p*2+1]=0,d[M*3]=a.x+a.leanX*.55,d[M*3+1]=a.topY,d[M*3+2]=a.z+a.leanZ*.55,f[M*2]=.5,f[M*2+1]=2.5;const _=[];for(let w=0;w<m;w++)for(let A=0;A<16;A++){const T=w*17+A,S=(w+1)*17+A,b=(w+1)*17+(A+1),P=w*17+(A+1);_.push(T,S,b,T,b,P)}const x=m*17;for(let w=0;w<16;w++)_.push(p,w,w+1),_.push(M,x+w+1,x+w);const y=new Yt;return y.setAttribute("position",new Z(d,3)),y.setAttribute("uv",new Z(f,2)),y.setIndex(_),y.computeVertexNormals(),y},e=[];for(let a=0;a<34;a++)e.push(.14*Math.PI+a/33*.72*Math.PI);for(let a=0;a<24;a++)e.push(-.88*Math.PI+a/23*1*Math.PI);for(let a=0;a<e.length;a++){const r=e[a]+(nt(a,19.4)-.5)*.045,l=Math.cos(r),c=Math.sin(r);let h=-1,u=0;for(let x=4.5;x<=34;x+=.35){const y=l*x,w=-4.2+c*x,A=Li(y,w),T=Li(y+l*1.1,w+c*1.1);if(A>-2.6&&A-T>1.25){h=x,u=A;break}}if(h<0)continue;const d=l*h,f=-4.2+c*h,g=Math.hypot((d-4.45)/2.65,(f-.22)/2.15),v=Math.hypot((d+4.45)/2.65,(f+.22)/2.15);if(Math.min(g,v)<1.02)continue;const p=f>-.2&&Math.abs(d)<13.5?Math.min(-.1,u-.06):u-.08+(nt(a,31.7)-.5)*.28,M=Math.max(ve-2.6,p-(4.8+nt(a,43.2)*5.4));i.push(t({x:d+l*.62,z:f+c*.62,topY:p,botY:M,rx:1.15+nt(a,51.3)*1.55,rz:.92+nt(a,63.8)*1.25,rotY:r+(nt(a,71.9)-.5)*.8,leanX:l*(.3+nt(a,83.1)*.45),leanZ:c*(.3+nt(a,83.1)*.45),seed:10+a*3.7}));const _=Math.min(p-.9,ve+3.2+nt(a,104.2)*3.8);i.push(t({x:d+l*(1.85+nt(a,112.6)*1.45),z:f+c*(1.85+nt(a,112.6)*1.45),topY:_,botY:ve-3.6,rx:1.35+nt(a,124.5)*1.75,rz:1.05+nt(a,137.1)*1.45,rotY:r+(nt(a,149.8)-.5)*.6,leanX:-l*.22,leanZ:-c*.22,seed:200+a*5.3}))}const n=Math.cos(.18),s=Math.sin(.18);for(const a of[-1,1])for(let r=0;r<4;r++){const l=9.2+r*1.35,h=Math.sin(l*.11+.35)*1.85+a*(8.8+r*2.15),u=-66+l*n+h*s,d=-32-l*s+h*n,f=Pi(u,d);if(f<ve+1.5)continue;const g=Math.min(8.2-r*.9,Math.max(ve+3.8,f-.2));i.push(t({x:u,z:d,topY:g,botY:ve-4.2,rx:1.55+nt(r+a*7,31.2)*1.05,rz:1.35+nt(r+a*7,57.9)*.95,rotY:.18+r*.5,leanX:n*.32,leanZ:-s*.32,seed:410+a*37+r*9.1}))}const o=[{cx:-68,cz:-33,maxR:42,rays:26,evalH:Pi,skipWaterfallCorridor:!0,seedBase:520},{cx:88,cz:36,maxR:48,rays:28,evalH:nc,seedBase:640},{cx:84,cz:-46,maxR:48,rays:26,evalH:ic,seedBase:760}];for(const a of o)for(let r=0;r<a.rays;r++){const l=r/a.rays*Math.PI*2+(nt(r,a.seedBase*.13)-.5)*.08,c=Math.cos(l),h=Math.sin(l);let u=0,d=0,f=-999;for(let p=8;p<=a.maxR;p+=.65){const M=a.cx+c*p,_=a.cz+h*p,x=a.evalH(M,_),y=a.evalH(M+c*1.4,_+h*1.4);if(x>ve+4.5&&x-y>1.85){u=M,d=_,f=x;break}}if(f<ve+4.5)continue;if(a.skipWaterfallCorridor){const p=u- -66,M=d- -32,_=p*n-M*s,x=p*s+M*n,y=Math.sin(Math.max(0,_)*.11+.35)*1.85;if(_>2.5&&Math.abs(x-y)<10.5)continue}const g=a.seedBase+r*4.3,v=f-.35-nt(r,g)*1.1,m=Math.max(ve-4,v-(8.5+nt(r,g+7.1)*9.5));i.push(t({x:u+c*.85,z:d+h*.85,topY:v,botY:m,rx:1.85+nt(r,g+13.4)*2.15,rz:1.45+nt(r,g+21.8)*1.75,rotY:l+(nt(r,g+29.2)-.5)*.7,leanX:c*.42,leanZ:h*.42,seed:g}))}return is(i,!1)}function ex(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a),c=o-r,h=a-l,u=c*c*c*(c*(c*6-15)+10),d=h*h*h*(h*(h*6-15)+10),f=(r%e+e)%e,g=(f+1)%e,v=(l%n+n)%n,m=(v+1)%n,p=nt(f+s,v-s),M=nt(g+s,v-s),_=nt(f+s,m-s),x=nt(g+s,m-s);return p+(M-p)*u+(_-p)*d+(p-M-_+x)*u*d}function Os(i,t,e,n,s,o){let a=0,r=.5,l=0,c=e,h=n;for(let u=0;u<s;u++)a+=r*ex(i,t,c,h,o+u*17.3),l+=r,c*=2,h*=2,r*=.5;return a/l}function Eh(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a);let c=1e9,h=1e9,u=0,d=0,f=0;for(let p=-1;p<=1;p++)for(let M=-1;M<=1;M++){const _=((r+M)%e+e)%e,x=((l+p)%n+n)%n,y=.16+.68*nt(_+s,x*1.7-s),w=.16+.68*nt(_*2.3-s,x+s),A=r+M+y,T=l+p+w,S=(A-o)*.85,b=(T-a)*1.25,P=Math.hypot(S,b);P<c?(h=c,c=P,u=nt(_*3.1+s,x*5.7+s),d=S,f=b):P<h&&(h=P)}const g=Math.max(0,h-c),v=u*Math.PI*2,m=(d*Math.cos(v)+f*Math.sin(v))*.55;return{edgeDist:g,cellTilt:m,cellId:u}}function nx(){const t=new Float32Array(262144),e=new Float32Array(512*512),n=new Float32Array(512*512),s=new Float32Array(512*512);for(let v=0;v<512;v++){const m=v/512;for(let p=0;p<512;p++){const M=p/512,_=v*512+p,x=M+(Os(M,m,4,6,3,5.1)-.5)*.068,y=m+(Os(M,m,6,4,3,13.7)-.5)*.032,w=Eh(x,y,5,15,21.4),A=Eh(x,y,11,28,57.9),T=Os(M,m,6,10,3,44.8),S=(1-ne(.01,.085,w.edgeDist))*ne(.18,.78,T),b=(1-ne(.008,.07,A.edgeDist))*(.45+.55*T),P=Os(x,y,3,22,4,33.2),C=Math.abs((y*14+P*.55)%1-.5)*2,R=1-ne(.04,.24,C),L=Os(M,m,28,28,3,71.6),F=.52+w.cellTilt*.26+(w.cellId-.5)*.16+A.cellTilt*.15+(P-.5)*.4+(L-.5)*.16-R*.28-S*.32-b*.18;t[_]=Math.max(0,Math.min(1,F)),e[_]=Math.min(1,R*.52+S*.58+b*.36),n[_]=w.cellId*.65+A.cellId*.35;const k=Os(M,m,8,8,4,93.4);s[_]=ne(.6,.84,k)*(1-S*.5)}}const o=document.createElement("canvas"),a=document.createElement("canvas"),r=document.createElement("canvas");for(const v of[o,a,r])v.width=512,v.height=512;const l=o.getContext("2d"),c=a.getContext("2d"),h=r.getContext("2d"),u=l.createImageData(512,512),d=c.createImageData(512,512),f=h.createImageData(512,512);for(let v=0;v<512;v++){const m=(v-1+512)%512,p=(v+1)%512;for(let M=0;M<512;M++){const _=(M-1+512)%512,x=(M+1)%512,y=v*512+M,w=y*4,A=(t[v*512+x]-t[v*512+_])*7.6,T=(t[p*512+M]-t[m*512+M])*7.6,S=1/Math.sqrt(A*A+T*T+1);d.data[w]=Math.round((-A*S*.5+.5)*255),d.data[w+1]=Math.round((T*S*.5+.5)*255),d.data[w+2]=Math.round((S*.5+.5)*255),d.data[w+3]=255;const b=t[y],P=e[y],C=n[y],R=s[y],L=ne(.62,.92,C),F=1-P*.56,k=(30+b*62+L*34)*F,N=(34+b*58+L*15)*F,D=(44+b*64-L*8)*F,W=44+b*28,O=78+b*38,q=34+b*18;u.data[w]=Math.round(X.lerp(k,W,R*.56)),u.data[w+1]=Math.round(X.lerp(N,O,R*.56)),u.data[w+2]=Math.round(X.lerp(D,q,R*.56)),u.data[w+3]=255;const K=.54+(1-b)*.28+P*.16,Y=Math.round(X.clamp(X.lerp(K,.92,R),.15,.98)*255);f.data[w]=Y,f.data[w+1]=Y,f.data[w+2]=Y,f.data[w+3]=255}}l.putImageData(u,0,0),c.putImageData(d,0,0),h.putImageData(f,0,0);const g=(v,m)=>(v.wrapS=_i,v.wrapT=_i,v.repeat.set(9,9),v.anisotropy=8,v.colorSpace=m?_n:Qn,v.needsUpdate=!0,v);return{albedo:g(new Ln(o),!0),normal:g(new Ln(a),!1),roughness:g(new Ln(r),!1)}}function ix(i){const o=new Float32Array(37539);for(let u=0;u<=96;u++){const d=u/96,f=3200*Math.pow(d,2.05);for(let g=0;g<=128;g++){const m=g/128*Math.PI*2,p=Math.cos(m)*f,M=Math.sin(m)*f,_=(he(p*.015+3.7,M*.015-5.2,3)-.5)*3.2*(1-d*.7),x=Xv+_,y=u*129+g;o[y*3]=p,o[y*3+1]=x,o[y*3+2]=M}}const a=new Uint32Array(12288*6);let r=0;for(let u=0;u<96;u++)for(let d=0;d<128;d++){const f=u*129+d,g=(u+1)*129+d,v=(u+1)*129+(d+1),m=u*129+(d+1);a[r++]=f,a[r++]=v,a[r++]=g,a[r++]=f,a[r++]=m,a[r++]=v}const l=new Yt;l.setAttribute("position",new Z(o,3)),l.setIndex(new Z(a,1)),l.computeVertexNormals();const c=new Oe({name:"NordicSubmarineBathymetry",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${Vn}
      uniform vec3 uWaterDeepColor;
      uniform vec3 uWaterShallowColor;
      uniform vec3 uSunColor;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      void main() {
        vec3 N = normalize(vWorldNormal + vec3(0.0, 1e-5, 0.0));
        vec3 L = normalize(uSunDir + vec3(0.0, 1e-5, 0.0));
        float waterColumnDepth = clamp((-11.5 - vWorldPos.y) / 16.0, 0.0, 1.0);
        float sandMask = smoothstep(0.75, 0.95, N.y) * skyNoise2(vWorldPos.xz * 0.08);
        vec3 bedAlbedo = mix(vec3(0.028, 0.044, 0.056), vec3(0.058, 0.074, 0.080), sandMask);
        float ndotl = 0.35 + 0.65 * clamp(dot(N, L), 0.0, 1.0);
        vec3 litBed = bedAlbedo * (uWaterShallowColor * 2.2 + uSunColor * 0.30 * ndotl);
        vec3 abyssCol = uWaterDeepColor * 0.55;
        vec3 col = mix(litBed, abyssCol, smoothstep(0.15, 0.92, waterColumnDepth));

        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float aerial = 1.0 - exp(-pow(max(uMistDensity * dist, 1e-6), 1.26));
        float rimFade = smoothstep(1800.0, 2950.0, length(vWorldPos.xz));
        col = mix(col, hazeCol, clamp(max(aerial, rimFade), 0.0, 1.0));
        gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), 1.0);
      }
    `}),h=new Be(l,c);return h.frustumCulled=!1,h.name="NordicSubmarineBathymetryFloor",h}function sx(i){const t=[{cx:-480,cz:-280,rx:145,rz:95,peakY:56,offX:-22,rot:.4,seed:11.4},{cx:520,cz:-310,rx:165,rz:105,peakY:62,offX:28,rot:-.5,seed:23.8},{cx:-320,cz:-560,rx:135,rz:90,peakY:54,offX:18,rot:.2,seed:37.2},{cx:490,cz:340,rx:155,rz:98,peakY:52,offX:-24,rot:-.3,seed:46.5},{cx:-860,cz:-420,rx:240,rz:145,peakY:86,offX:-36,rot:.35,seed:51.9},{cx:880,cz:-460,rx:255,rz:155,peakY:82,offX:38,rot:-.42,seed:67.3},{cx:-740,cz:580,rx:220,rz:135,peakY:72,offX:-28,rot:.55,seed:76.4},{cx:140,cz:-1180,rx:290,rz:165,peakY:94,offX:42,rot:.15,seed:83.5},{cx:-1150,cz:-880,rx:310,rz:180,peakY:104,offX:-45,rot:-.28,seed:94.1},{cx:1080,cz:780,rx:285,rz:165,peakY:92,offX:36,rot:.38,seed:108.7}],e=[],n=28,s=52;for(const l of t){const c=(n+1)*(s+1),h=new Float32Array(c*3),u=Math.cos(l.rot),d=Math.sin(l.rot);for(let m=0;m<=n;m++){const p=m/n*1.42;for(let M=0;M<=s;M++){const _=M/s*Math.PI*2,x=1+.18*Math.sin(_*2+l.seed)+.11*Math.cos(_*3-l.seed),y=Math.cos(_)*l.rx*x*p,w=Math.sin(_)*l.rz*x*p,A=l.cx+y*u-w*d,T=l.cz+y*d+w*u,S=Math.min(1,Math.pow((y-l.offX*1.15)/(l.rx*1.05),2)+Math.pow(w/(l.rz*.96),2)),b=X.clamp(.6+y/Math.max(20,l.rx)*.36,.28,1.14),P=Math.pow(Math.max(0,1-S),1.32),C=1/(1+1.9*S*S),R=(Je(A*.008+l.seed,T*.01-l.seed,2)-.48)*(l.peakY*.18)*(1-ne(.55,1.05,p)),L=l.peakY*(.2+.48*P*b+.26*C)+R,F=Oo(L,y*.02,Math.max(9,l.peakY*.2),.42),k=.66+.13*Math.sin(_*3-l.seed)+.08*Math.cos(_*5+l.seed),N=ne(k,1.06,p),D=ne(.98,1.38,p),W=ve-1.5,O=Za(F,W,N,A,T,l.seed),q=X.lerp(O,Ni,D),K=m*(s+1)+M;h[K*3]=A,h[K*3+1]=q,h[K*3+2]=T}}const f=new Uint32Array(n*s*6);let g=0;for(let m=0;m<n;m++)for(let p=0;p<s;p++){const M=m*(s+1)+p,_=(m+1)*(s+1)+p,x=(m+1)*(s+1)+(p+1),y=m*(s+1)+(p+1);f[g++]=M,f[g++]=x,f[g++]=_,f[g++]=M,f[g++]=y,f[g++]=x}const v=new Yt;v.setAttribute("position",new Z(h,3)),v.setIndex(new Z(f,1)),v.computeVertexNormals(),e.push(v)}const o=is(e,!1),a=new Oe({name:"DistantFjordAerialMaterial",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${Vn}
      uniform vec3 uSunColor;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      void main() {
        vec3 N = normalize(vWorldNormal + vec3(0.0, 1e-5, 0.0));
        vec3 L = normalize(uSunDir + vec3(0.0, 1e-5, 0.0));
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);

        float strataBands = 0.86 + 0.22 * sin(vWorldPos.y * 0.55 + skyNoise2(vWorldPos.xz * 0.025) * 2.6);
        float ironBand = smoothstep(0.60, 0.92, sin(vWorldPos.y * 0.28 - vWorldPos.x * 0.008));
        float slopeTurf = smoothstep(0.54, 0.84, N.y) * smoothstep(-4.0, 14.0, vWorldPos.y);
        float moorMacro = skyFbm(vWorldPos.xz * 0.012);
        vec3 cliffBasalt = mix(vec3(0.044, 0.052, 0.072), vec3(0.092, 0.068, 0.056), ironBand * 0.45) * strataBands;
        vec3 distantTurf = mix(vec3(0.062, 0.132, 0.048), vec3(0.148, 0.128, 0.052), smoothstep(0.35, 0.80, moorMacro));
        distantTurf = mix(distantTurf, vec3(0.112, 0.064, 0.098), smoothstep(26.0, 68.0, vWorldPos.y) * 0.38);
        vec3 rockBase = mix(cliffBasalt, distantTurf, slopeTurf * 0.86);

        float ndotl = clamp(dot(N, L), 0.0, 1.0);
        vec3 boltL = normalize(uLightningDir + vec3(0.0, 1e-5, 0.0));
        float ndotBolt = clamp(dot(N, boltL), 0.0, 1.0);
        vec3 ambientSky = mix(uHorizonAntiColor, uZenithColor, 0.45) * 0.46;
        vec3 directSun = uSunColor * ndotl * 0.62;
        vec3 boltIllum = vec3(0.75, 0.88, 1.0) * uLightningFlash * (0.35 + 1.15 * ndotBolt);
        vec3 surfaceCol = rockBase * (ambientSky * 2.9 + directSun * 2.35 + boltIllum);

        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float distHaze = 1.0 - exp(-pow(max(uMistDensity * 0.88 * dist, 1e-6), 1.22));
        float farFade = smoothstep(1250.0, 2250.0, dist);
        float waterlineMist = (1.0 - smoothstep(-11.5, 4.5, vWorldPos.y)) * 0.28;
        float totalVeil = clamp(max(distHaze, farFade) + waterlineMist * (1.0 - distHaze), 0.0, 1.0);

        vec3 finalCol = mix(surfaceCol, hazeCol, totalVeil);
        gl_FragColor = vec4(clamp(finalCol, vec3(0.0), vec3(24.0)), 1.0);
      }
    `}),r=new Be(o,a);return r.frustumCulled=!1,r.name="DistantFjordArchipelago",r}function ox(){const i=[],t=[{dx:0,dz:0,h:.52,w:.021,bend:.16,rotY:.15,plume:!0},{dx:.022,dz:-.018,h:.44,w:.019,bend:.19,rotY:2.35,plume:!0},{dx:.036,dz:.022,h:.34,w:.018,bend:.14,rotY:1.15,plume:!1},{dx:-.034,dz:.026,h:.37,w:.018,bend:.15,rotY:3.65,plume:!1},{dx:-.026,dz:-.032,h:.31,w:.016,bend:.13,rotY:4.55,plume:!1},{dx:.044,dz:-.012,h:.28,w:.016,bend:.16,rotY:5.5,plume:!1},{dx:.018,dz:.042,h:.2,w:.015,bend:.11,rotY:.78,plume:!1},{dx:-.046,dz:-.006,h:.17,w:.014,bend:.1,rotY:2.95,plume:!1},{dx:.006,dz:-.046,h:.22,w:.015,bend:.12,rotY:5.05,plume:!1}];for(const e of t){const s=[],o=[],a=[],r=[],l=Math.cos(e.rotY),c=Math.sin(e.rotY);for(let u=0;u<=5;u++){const d=u/5,f=e.plume?Math.exp(-Math.pow((d-.82)/.11,2))*.65:0,g=e.w*(1-.9*Math.pow(d,1.28)+f),v=e.h*d,m=e.bend*d*d,p=.42+.72*Math.pow(d,.65),M=p*(1+(e.plume?.32:.14)*d*d),_=p*(1+.12*d),x=p*(.88+.08*d);for(const y of[-1,1]){const w=y*g,A=m+y*.0025*(1-d),T=e.dx+w*l-A*c,S=e.dz+w*c+A*l;s.push(T,v,S),o.push(-c*.28+y*l*.22,.91,l*.28+y*c*.22),a.push(M,_,x)}}for(let u=0;u<5;u++){const d=u*2,f=d+1,g=d+2,v=d+3;r.push(d,f,v,d,v,g)}const h=new Yt;h.setAttribute("position",new Zt(s,3)),h.setAttribute("normal",new Zt(o,3)),h.setAttribute("color",new Zt(a,3)),h.setIndex(r),i.push(h)}return is(i,!1)}function Fo(i,t,e,n,s,o,a){const l=[],c=[],h=[],u=[],d=Math.cos(s),f=Math.sin(s);for(let v=0;v<=9;v++){const m=v/9,p=ne(.06,.24,m),M=Math.pow(Math.max(0,1-Math.pow(m,1.35)),.68),_=.74+.26*Math.abs(Math.sin(m*Math.PI*7.5)),x=t*p*M*_,y=n*Math.pow(m,.88)*(i/.45),w=e*(1.28*m-.52*m*m*m)+(a?i*.22*m:-.06*i*m*m),A=a?X.lerp(.36,.68,m):X.lerp(.24,.48,Math.pow(m,.85)),T=a?X.lerp(.32,.62,m):X.lerp(.28,.88,Math.pow(m,.7)),S=a?X.lerp(.14,.24,m):X.lerp(.1,.26,m),b=[-1,0,1];for(const P of b){const C=P*x+o*m*.025,R=Math.abs(P)*x*.26,L=Math.max(.005,w+R),F=y,k=C*d-F*f,N=C*f+F*d;l.push(k,L,N);const D=-P*.28,W=.92,O=.24;c.push(D*d-O*f,W,D*f+O*d);const q=P===0?.82:1.04;h.push(A*q,T*q,S*q)}}for(let v=0;v<9;v++){const m=v*3,p=(v+1)*3;u.push(m+0,m+1,p+1,m+0,p+1,p+0),u.push(m+1,m+2,p+2,m+1,p+2,p+1)}const g=new Yt;return g.setAttribute("position",new Zt(l,3)),g.setAttribute("normal",new Zt(c,3)),g.setAttribute("color",new Zt(h,3)),g.setIndex(u),g}function ax(){const i=[];for(let e=0;e<7;e++){const n=e/7*Math.PI*2+(e%2===0?.14:-.11),s=e%3===0,o=s?.34:.42,a=s?.068:.088,r=s?.32:.24,l=s?.24:.38;i.push(Fo(o,a,r,l,n,(e-3)*.3,!1))}return is(i,!1)}function rx(){const i=[];for(let e=0;e<7;e++){const n=e/7*Math.PI*2+.22*Math.sin(e*2.1),s=e%2===0?1:.86;i.push(Fo(.72*s,.135*s,.64*s,.54*s,n,Math.cos(e*1.7)*.4,!1))}return i.push(Fo(.76,.068,.74,.22,.65,.15,!0)),i.push(Fo(.7,.064,.69,.2,3.85,-.15,!0)),is(i,!1)}function Yi(i){if(i.deleteAttribute("uv"),i.getAttribute("normal")||i.computeVertexNormals(),!i.index){const t=i.getAttribute("position").count,e=new Uint16Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new Z(e,1))}return i}function lx(){const i=[],t=[{ox:0,oz:0,lx:.02,lz:.01,h:.24,r:.048},{ox:.055,oz:.032,lx:.08,lz:.05,h:.19,r:.044},{ox:-.052,oz:.038,lx:-.08,lz:.06,h:.2,r:.042},{ox:.032,oz:-.055,lx:.05,lz:-.08,h:.18,r:.04},{ox:-.048,oz:-.042,lx:-.07,lz:-.06,h:.17,r:.042}];for(const e of t){const n=Yi(new po(e.r,0));n.scale(1.25,.95,1.25),n.translate(e.ox+e.lx*.45,e.h*.45,e.oz+e.lz*.45);const s=n.getAttribute("position").count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=.16,o[a*3+1]=.28,o[a*3+2]=.12;n.setAttribute("color",new Z(o,3)),i.push(n);for(let a=0;a<3;a++){const r=.62+a*.18,l=Yi(new Qs(.012,.02,.028,5,1));l.translate(e.ox+e.lx*r+(a-1)*.012,e.h*r,e.oz+e.lz*r+(a%2-.5)*.014);const c=l.getAttribute("position").count,h=new Float32Array(c*3);for(let u=0;u<c;u++){const d=.88+.12*a;h[u*3]=d,h[u*3+1]=d,h[u*3+2]=d}l.setAttribute("color",new Z(h,3)),i.push(l)}}return is(i,!1)}function cx(){const i=[];for(let o=0;o<5;o++){const a=o/5*Math.PI*2+.3,r=Yi(Fo(.14,.028,.055,.12,a,0,!1));i.push(r)}const t=[{ox:0,oz:0,h:.27,leanX:.025,leanZ:.018,r:.038,tiltX:.18,tiltZ:-.12},{ox:.052,oz:.028,h:.21,leanX:.055,leanZ:-.022,r:.032,tiltX:-.22,tiltZ:.24},{ox:-.044,oz:.034,h:.24,leanX:-.045,leanZ:.042,r:.034,tiltX:.25,tiltZ:.18}];for(const o of t){const a=o.ox+o.leanX,r=o.h,l=o.oz+o.leanZ,c=Yi(new Qs(.0038,.0058,o.h,4,1));c.translate(o.ox+o.leanX*.5,o.h*.5,o.oz+o.leanZ*.5);const h=c.getAttribute("position").count,u=new Float32Array(h*3);for(let m=0;m<h;m++)u[m*3]=.2,u[m*3+1]=.42,u[m*3+2]=.16;c.setAttribute("color",new Z(u,3)),i.push(c);const d=6;for(let m=0;m<d;m++){const p=m/d*Math.PI*2,M=[0,0,0,Math.cos(p-.34)*o.r*.62,o.r*.16,Math.sin(p-.34)*o.r*.62,Math.cos(p+.34)*o.r*.62,o.r*.16,Math.sin(p+.34)*o.r*.62,Math.cos(p)*o.r*1.12,o.r*.26,Math.sin(p)*o.r*1.12],_=[0,1,0,0,.94,0,0,.94,0,0,.88,0],x=[.78,.75,.78,1.02,1.02,1.02,1.02,1.02,1.02,1.14,1.14,1.14],y=new Yt;y.setAttribute("position",new Zt(M,3)),y.setAttribute("normal",new Zt(_,3)),y.setAttribute("color",new Zt(x,3)),y.setIndex([0,2,1,1,2,3]),y.rotateX(o.tiltX),y.rotateZ(o.tiltZ),y.translate(a,r,l),i.push(Yi(y))}const f=Yi(new Qs(o.r*.24,o.r*.18,o.r*.2,6,1));f.rotateX(o.tiltX),f.rotateZ(o.tiltZ),f.translate(a,r+o.r*.08,l);const g=f.getAttribute("position").count,v=new Float32Array(g*3);for(let m=0;m<g;m++)v[m*3]=1.25,v[m*3+1]=.92,v[m*3+2]=.22;f.setAttribute("color",new Z(v,3)),i.push(f)}const e=Yi(new Qs(.003,.005,.34,4,1));e.translate(-.015,.17,-.025);const n=e.getAttribute("position").count,s=new Float32Array(n*3);for(let o=0;o<n;o++)s[o*3]=.18,s[o*3+1]=.38,s[o*3+2]=.15;e.setAttribute("color",new Z(s,3)),i.push(e);for(let o=0;o<4;o++){const a=.2+o*.042,r=.021*(1-o*.14),l=Yi(new po(r,0));l.scale(1.15,.82,1.15),l.translate(-.015+Math.sin(o*2.1)*.006,a,-.025+Math.cos(o*2.1)*.006);const c=l.getAttribute("position").count,h=new Float32Array(c*3);for(let u=0;u<c;u++){const d=.9+o*.07;h[u*3]=d,h[u*3+1]=d,h[u*3+2]=d}l.setAttribute("color",new Z(h,3)),i.push(l)}return is(i,!1)}function hx(i,t,e,n){const s=new di;s.position.set(i,t,e);const o=[{rx:.44,ry:.17,rz:.38,dy:.08,rot:.2},{rx:.35,ry:.14,rz:.31,dy:.28,rot:1.1},{rx:.27,ry:.12,rz:.24,dy:.45,rot:2.3},{rx:.19,ry:.11,rz:.18,dy:.6,rot:.7},{rx:.12,ry:.1,rz:.11,dy:.73,rot:1.9}];for(const a of o){const r=new po(1,1);r.scale(a.rx,a.ry,a.rz);const l=new Be(r,n);l.position.set((Math.sin(a.rot*3)-.5)*.03,a.dy,(Math.cos(a.rot*2)-.5)*.03),l.rotation.y=a.rot,l.castShadow=!0,l.receiveShadow=!0,s.add(l)}return s}function ux(i){const t=new di;t.name="NordicCliffsideWorld";const e=nx(),n=new li({name:"NordicBasaltCliff_PBR",map:e.albedo,normalMap:e.normal,normalScale:new Gt(1.25,1.25),roughnessMap:e.roughness,roughness:.86,metalness:.04,envMapIntensity:.98});n.onBeforeCompile=j=>{Object.assign(j.uniforms,i),j.vertexShader=j.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vRockWorldPos;
        varying vec3 vRockWorldNormal;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 rwPos = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          rwPos = instanceMatrix * rwPos;
        #endif
        rwPos = modelMatrix * rwPos;
        vRockWorldPos = rwPos.xyz;
        mat3 nMat = mat3(modelMatrix);
        #ifdef USE_INSTANCING
          nMat = nMat * mat3(instanceMatrix);
        #endif
        vec3 rawWorldN = nMat * objectNormal;
        vRockWorldNormal = normalize(rawWorldN + vec3(0.0, 1e-5, 0.0));`),j.fragmentShader=j.fragmentShader.replace("#include <common>",`#include <common>
        ${Vn}
        uniform float uRainIntensity;
        varying vec3 vRockWorldPos;
        varying vec3 vRockWorldNormal;

        float evalNordicCliffStrata(vec3 wp) {
          float bedDip = wp.x * 0.024 - wp.z * 0.019 + skyFbm(wp.xz * 0.045) * 1.25;
          float bedWave = sin((wp.y + bedDip) * 2.15);
          float fineBed = abs(fract((wp.y + bedDip) * 0.34) - 0.5) * 2.0;
          float ledge = smoothstep(0.08, 0.38, fineBed);
          float vertColumns = skyFbm(vec2(wp.x * 0.38 + wp.z * 0.38, wp.y * 0.07));
          return ledge * 0.48 + (0.5 + 0.5 * bedWave) * 0.24 + vertColumns * 0.28;
        }`).replace("#include <map_fragment>",`#ifdef USE_MAP
          vec3 wN = normalize(vRockWorldNormal + vec3(0.0, 1e-5, 0.0));
          vec3 triBlend = abs(wN);
          triBlend = triBlend * triBlend * triBlend * triBlend;
          triBlend /= max(triBlend.x + triBlend.y + triBlend.z, 1e-4);
          vec3 rpMacro = vRockWorldPos * 0.068;
          vec3 rpDetail = vRockWorldPos * 0.26;
          vec3 albMacro =
            texture2D(map, rpMacro.zy).rgb * triBlend.x +
            texture2D(map, rpMacro.xz).rgb * triBlend.y +
            texture2D(map, rpMacro.xy).rgb * triBlend.z;
          vec3 albDetail =
            texture2D(map, rpDetail.zy).rgb * triBlend.x +
            texture2D(map, rpDetail.xz).rgb * triBlend.y +
            texture2D(map, rpDetail.xy).rgb * triBlend.z;

          float cliffSteepMask = 1.0 - smoothstep(0.36, 0.74, abs(wN.y));
          float strataVal = evalNordicCliffStrata(vRockWorldPos);
          // Macro 3D rock-buttress shadow/highlight variation + rust-ochre mineral veins & coastal Xanthoria/celadon lichen!
          float rockMassShade = 0.76 + 0.42 * skyFbm(vRockWorldPos.xz * 0.052 + vec2(vRockWorldPos.y * 0.038, -vRockWorldPos.y * 0.029));
          float ironSeam = smoothstep(0.56, 0.88, sin(vRockWorldPos.y * 0.42 + strataVal * 3.1 + vRockWorldPos.x * 0.02));
          float lichenRim = smoothstep(-5.5, 4.5, vRockWorldPos.y) * smoothstep(0.62, 0.90, skyFbm(vRockWorldPos.xz * 0.24 + vRockWorldPos.y * 0.14));
          vec3 slateStrata = mix(vec3(0.54, 0.59, 0.72), vec3(1.26, 1.18, 1.10), strataVal);
          vec3 rustOchre = vec3(1.42, 0.96, 0.72);
          vec3 goldenLichen = mix(vec3(1.08, 1.18, 0.96), vec3(1.52, 1.14, 0.54), smoothstep(0.35, 0.85, skyNoise2(vRockWorldPos.xz * 0.55)));
          vec3 mineralTint = mix(slateStrata, rustOchre, ironSeam * 0.36) * rockMassShade;
          mineralTint = mix(mineralTint, goldenLichen, lichenRim * 0.34);
          diffuseColor.rgb *= mix(albMacro, albDetail, 0.50) * mix(vec3(1.0), mineralTint, cliffSteepMask * 0.90);
        #endif`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 wNCol = normalize(vRockWorldNormal + vec3(0.0, 1e-5, 0.0));
        // Localized basalt rock pads right beneath Toothless & Light Fury's claws
        float dPadTL = length((vRockWorldPos.xz - vec2(4.45, 0.22)) / vec2(2.35, 1.95));
        float dPadLF = length((vRockWorldPos.xz - vec2(-4.45, -0.22)) / vec2(2.35, 1.95));
        float dragonPadClear = smoothstep(0.68, 1.18, min(dPadTL, dPadLF));

        // Expose bare fractured basalt rock on cliffs, "hamrar" terrace risers, shore reefs & cliff rims!
        // Keep coastal turf well above the ocean wave-splash zone (> -8.8m) so all shoreline rocks stay dark bare basalt!
        float crownSlope = smoothstep(0.58, 0.84, wNCol.y);
        float aboveSpray = smoothstep(-8.8, -3.2, vRockWorldPos.y);
        float rimRockBreakup = smoothstep(0.24, 0.62, skyFbm(vRockWorldPos.xz * 0.16 + 2.9) * 0.78 + skyNoise2(vRockWorldPos.xz * 0.45) * 0.22);
        float turfMask = dragonPadClear * crownSlope * aboveSpray * mix(rimRockBreakup, 1.0, smoothstep(0.76, 0.93, wNCol.y));

        // Multi-Biome Faroese / Scottish Coastal Tapestry:
        // Deep velvet-emerald mossy hollows + spring meadow turf + burnished autumn-gold windswept ridges + amethyst heather moorland!
        float meadowMacro = skyFbm(vRockWorldPos.xz * 0.068);
        float ridgeDetail = skyFbm(vRockWorldPos.xz * 0.19 - vec2(4.1, 7.3));
        float heatherBelt = smoothstep(0.56, 0.86, skyFbm(vRockWorldPos.xz * 0.11 + vec2(11.3, -5.8))) * (1.0 - smoothstep(0.84, 0.96, wNCol.y));
        float uplandElev = smoothstep(1.2, 18.0, vRockWorldPos.y);

        vec3 velvetMossHollow = vec3(0.044, 0.136, 0.038);
        vec3 springFaroeseTurf = vec3(0.114, 0.186, 0.050);
        vec3 autumnGoldFescue = vec3(0.218, 0.166, 0.052);
        vec3 amethystHeather = vec3(0.142, 0.068, 0.118);

        vec3 baseMeadow = mix(velvetMossHollow, springFaroeseTurf, smoothstep(0.22, 0.76, meadowMacro));
        float goldPatch = smoothstep(0.46, 0.84, ridgeDetail) * (0.28 + 0.52 * uplandElev);
        vec3 turfLush = mix(baseMeadow, autumnGoldFescue, goldPatch * 0.62);
        turfLush = mix(turfLush, amethystHeather, heatherBelt * 0.56);
        diffuseColor.rgb = mix(diffuseColor.rgb, turfLush, clamp(turfMask * 0.93, 0.0, 0.93));

        // Rich, glistened wet-obsidian intertidal rock + subtle olive-bronze marine algae film right near the ocean surface!
        float wetNoise = (skyFbm(vRockWorldPos.xz * 0.22) - 0.5) * 1.1;
        float wetZone = 1.0 - smoothstep(-11.4, -6.5, vRockWorldPos.y + wetNoise);
        float nearWaterline = 1.0 - smoothstep(-11.6, -9.0, vRockWorldPos.y + wetNoise * 0.5);
        float kelpBand = smoothstep(-12.2, -10.8, vRockWorldPos.y) * (1.0 - smoothstep(-10.6, -9.4, vRockWorldPos.y)) * skyNoise2(vRockWorldPos.xz * 0.35);
        float submergedDepth = 1.0 - smoothstep(-24.0, -11.7, vRockWorldPos.y);
        diffuseColor.rgb *= mix(1.0, 0.24, wetZone);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.034, 0.042, 0.018), kelpBand * 0.42);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.016, 0.020, 0.028), nearWaterline * 0.54);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.020, 0.038, 0.052), submergedDepth * 0.78);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        vec3 wNRgh = normalize(vRockWorldNormal + vec3(0.0, 1e-5, 0.0));
        #ifdef USE_ROUGHNESSMAP
          vec3 triR = abs(wNRgh);
          triR = triR * triR * triR * triR;
          triR /= max(triR.x + triR.y + triR.z, 1e-4);
          vec3 rpR = vRockWorldPos * 0.22;
          float triRoughSample =
            texture2D(roughnessMap, rpR.zy).g * triR.x +
            texture2D(roughnessMap, rpR.xz).g * triR.y +
            texture2D(roughnessMap, rpR.xy).g * triR.z;
          roughnessFactor = roughness * triRoughSample;
        #endif
        float meadowSmooth = smoothstep(0.64, 0.88, wNRgh.y) * smoothstep(-4.0, 0.5, vRockWorldPos.y);
        roughnessFactor = mix(roughnessFactor, 0.88, meadowSmooth * 0.78);
        float wetRough = 1.0 - smoothstep(-11.3, -7.2, vRockWorldPos.y);
        roughnessFactor = mix(roughnessFactor, 0.18, wetRough * 0.85);
        // Rain-slicked basalt rock sheen when precipitation is active!
        roughnessFactor = mix(roughnessFactor, 0.24, clamp(uRainIntensity, 0.0, 1.0) * (1.0 - meadowSmooth * 0.65) * 0.45);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        #ifdef USE_NORMALMAP
        {
          // Hardware-filtered 3D Triplanar Basalt Normal Mapping (zero dFdx/dFdy static & zero vertical UV stretching!)
          vec3 gWN = normalize(inverseTransformDirection(nonPerturbedNormal, viewMatrix) + vec3(0.0, 1e-5, 0.0));
          vec3 triW = abs(gWN);
          triW = triW * triW * triW * triW;
          triW /= max(triW.x + triW.y + triW.z, 1e-4);

          vec3 np1 = vRockWorldPos * 0.068;
          vec3 np2 = vRockWorldPos * 0.26;

          vec3 tX = (texture2D(normalMap, np1.zy).xyz * 2.0 - 1.0) * 0.58 + (texture2D(normalMap, np2.zy).xyz * 2.0 - 1.0) * 0.62;
          vec3 tY = (texture2D(normalMap, np1.xz).xyz * 2.0 - 1.0) * 0.58 + (texture2D(normalMap, np2.xz).xyz * 2.0 - 1.0) * 0.62;
          vec3 tZ = (texture2D(normalMap, np1.xy).xyz * 2.0 - 1.0) * 0.58 + (texture2D(normalMap, np2.xy).xyz * 2.0 - 1.0) * 0.62;

          vec3 worldPerturb =
            vec3(0.0, tX.y, tX.x) * triW.x +
            vec3(tY.x, 0.0, tY.y) * triW.y +
            vec3(tZ.x, tZ.y, 0.0) * triW.z;

          // Project orthogonal to geometry normal so grazing cliff normals never invert backward
          worldPerturb -= gWN * dot(worldPerturb, gWN);

          float grassSoftMask = smoothstep(0.64, 0.88, gWN.y) * smoothstep(-4.0, 0.5, vRockWorldPos.y);
          float bumpStrength = mix(1.32, 0.14, grassSoftMask);
          vec3 perturbedWorldN = normalize(gWN + worldPerturb * bumpStrength + vec3(0.0, 1e-5, 0.0));
          normal = normalize(transformDirection(perturbedWorldN, viewMatrix) + vec3(0.0, 0.0, 1e-6));
        }
        #endif`).replace("#include <fog_fragment>",`vec3 rToFrag = vRockWorldPos - cameraPosition;
        float rDist = length(rToFrag);
        vec3 rHazeCol = evalHorizonHazeColor(rToFrag);
        float rAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * rDist, 1e-6), 1.26));
        gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, rHazeCol, clamp(rAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)},t.add(ix(i));const s=304,o=new ro(102,104,s,s);o.rotateX(-Math.PI*.5);const a=o.getAttribute("position"),r=o.getAttribute("uv");for(let j=0;j<a.count;j++){const ut=a.getX(j)-4,Rt=a.getZ(j)-14.5,zt=Li(ut,Rt);a.setXYZ(j,ut,zt,Rt),r.setXY(j,ut*.015,(Rt+zt*.55)*.015)}Th(o,7.3,!0);const l=new Be(o,n);l.receiveShadow=!0,l.castShadow=!0,l.name="HeroBasaltCliffPerch",t.add(l);const c=new Be(tx(),n);c.castShadow=!0,c.receiveShadow=!0,c.name="HeroCliffBasaltCragOutcrops",t.add(c);const h=Li(-8.65,-7.25);t.add(hx(-8.65,h-.04,-7.25,n));const u=new di;u.name="NordicArchipelago";for(let j=0;j<Rl.length;j++){const ut=Rl[j],Rt=new ro(ut.spanX,ut.spanZ,ut.gridSegs,ut.gridSegs);Rt.rotateX(-Math.PI*.5);const zt=Rt.getAttribute("position"),It=Rt.getAttribute("uv");for(let G=0;G<zt.count;G++){const ct=ut.centerX+zt.getX(G),wt=ut.centerZ+zt.getZ(G),Wt=ut.evalHeight(ct,wt);zt.setXYZ(G,ct,Wt,wt),It.setXY(G,ct*.015,(wt+Wt*.55)*.015)}Th(Rt,19.1+j*13.7,!1);const gt=new Be(Rt,n);gt.receiveShadow=!0,gt.castShadow=!0,gt.name=ut.name,u.add(gt)}for(let j=0;j<Co.length;j++){const ut=Co[j],Rt=new Be(Qv(ut),n);Rt.position.set(ut.x,0,ut.z),Rt.rotation.y=ut.rotY,Rt.castShadow=!0,Rt.receiveShadow=!0,Rt.name=`FaroeseHeadlandSeaArch_${j}`,u.add(Rt)}const d=Xs.map(j=>Jv(j)),f=new Be(is(d,!1),n);f.castShadow=!0,f.receiveShadow=!0,f.name="TabularFaroeseSeaStacks",u.add(f),t.add(u);const g=Math.cos(.18),v=Math.sin(.18),m=j=>{const ut=Math.sin(j*.11+.35)*1.85,Rt=-66+j*g+ut*v,zt=-32-j*v+ut*g,It=Pi(Rt,zt);return new E(Rt,It,zt)};let p=9.4;for(let j=5;j<=16;j+=.05){const ut=m(j),Rt=m(j+1.35);if(ut.y>5.5&&Rt.y<ve-1.5){p=j;break}if(ut.y<5.5){p=j-.15;break}}const M=m(p),_=1.2,x=Pi(M.x+_,M.z)-Pi(M.x-_,M.z),y=Pi(M.x,M.z+_)-Pi(M.x,M.z-_),w=new Gt(-x,-y);w.lengthSq()<1e-4?w.set(g,-v):w.normalize();const A=new Gt(-w.y,w.x),T=(j,ut,Rt,zt,It)=>{const ct=M.y-.12,wt=ve-1.85,Wt=ct-wt,ae=new Float32Array(1113*3),jt=new Float32Array(1113*2);for(let oe=0;oe<=52;oe++){const Se=oe/52,Le=ct-Wt*Math.pow(Se,1.62),qe=.22+Rt*Math.pow(Se,.72),an=X.lerp(j,ut,Math.pow(Se,.88)),wn=It*Se*Se;for(let on=0;on<=20;on++){const wi=on/20,mi=(wi-.5)*2*an+wn,zi=Math.sin(wi*Math.PI)*(zt+.42*Se);let Ka=M.x+A.x*mi+w.x*(qe+zi),Qa=M.z+A.y*mi+w.y*(qe+zi);for(let sc=0;sc<12;sc++){const Ju=vi(Ka,Qa);if(Le>=Ju+.52)break;Ka+=w.x*.42,Qa+=w.y*.42}const vo=oe*21+on;ae[vo*3]=Ka,ae[vo*3+1]=Le,ae[vo*3+2]=Qa,jt[vo*2]=wi,jt[vo*2+1]=1-Se}}const te=[];for(let oe=0;oe<52;oe++)for(let Se=0;Se<20;Se++){const Le=oe*21+Se,qe=(oe+1)*21+Se,an=(oe+1)*21+(Se+1),wn=oe*21+(Se+1);te.push(Le,qe,an,Le,an,wn)}const Kt=new Yt;return Kt.setAttribute("position",new Z(ae,3)),Kt.setAttribute("uv",new Z(jt,2)),Kt.setIndex(te),Kt.computeVertexNormals(),Kt},S=3.85,b=T(.92,2.15,S,.34,.28),P=T(1.18,3.35,S+.55,.68,.72),C=Math.pow((M.y+.18-ve)/(M.y+.18-(ve-1.85)),1/1.62);let R=M.x+w.x*(.28+S*Math.pow(C,.72)+.55),L=M.z+w.y*(.28+S*Math.pow(C,.72)+.55);for(let j=0;j<12&&!(vi(R,L)<ve-2.2);j++)R+=w.x*.55,L+=w.y*.55;const F={...i},k=j=>new Oe({name:"NordicWaterfallShader",transparent:!0,depthWrite:!1,side:tn,uniforms:{...F,uVeilMode:{value:j?1:0}},vertexShader:`
        uniform float uTime;
        uniform float uVeilMode;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          // Subtle wind-flutter & aerated turbulence in the lower free-falling plume
          float fallProg = clamp(1.0 - uv.y, 0.0, 1.0);
          float flutter = sin(uTime * 5.2 + wp.y * 0.85 + uv.x * 6.0) * (0.06 + 0.18 * uVeilMode) * fallProg;
          wp.x += flutter;
          wp.z += flutter * 0.7;
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        ${Vn}
        uniform vec3 uSunColor;
        uniform vec3 uWaterShallowColor;
        uniform float uVeilMode;
        varying vec2 vUv;
        varying vec3 vWorldPos;

        void main() {
          float uClamped = clamp(vUv.x, 0.0, 1.0);
          float sideFeather = sin(uClamped * 3.14159265);
          float fallFrac = clamp(1.0 - vUv.y, 0.0, 1.0);

          // Gravitational velocity stretch: water accelerates downward so vertical streaks elongate!
          float gravCoord = pow(max(vUv.y, 0.0), 0.74);
          float ribbonMacro = skyFbm(vec2(uClamped * 7.5, gravCoord * 6.5 + uTime * 2.35));
          float ribbonFine = skyFbm(vec2(uClamped * 22.0 + 3.7, gravCoord * 11.5 + uTime * 3.95));
          float fineDroplets = skyNoise2(vec2(uClamped * 38.0 - 1.9, gravCoord * 24.0 + uTime * 5.6));

          float threads = smoothstep(0.22, 0.74, ribbonMacro * 0.54 + ribbonFine * 0.34 + fineDroplets * 0.12);
          float coreSpine = pow(max(sideFeather, 1e-5), 1.35) * (1.0 - 0.32 * fallFrac);

          float crestFoam = smoothstep(0.76, 1.0, vUv.y) * 0.62;
          float plungeBoil = smoothstep(0.24, 0.02, vUv.y) * 0.72;

          // Luminous aerated silver-white Mulafossur cascade catching sky & golden-hour sunlight!
          vec3 skyIllum = mix(uHorizonAntiColor, uHorizonSunColor, 0.46) * 1.32 + uSunColor * 0.48;
          vec3 aeratedWhite = clamp(skyIllum * 1.18 + vec3(0.16, 0.19, 0.22), vec3(0.0), vec3(4.5));
          vec3 glacChute = uWaterShallowColor * 1.35 + skyIllum * 0.48;
          float foamWeight = clamp(threads * 0.78 + coreSpine * 0.42 + crestFoam + plungeBoil, 0.0, 1.0);
          vec3 col = mix(glacChute, aeratedWhite, foamWeight);

          vec3 toFrag = vWorldPos - cameraPosition;
          float dist = length(toFrag);
          vec3 hazeCol = evalHorizonHazeColor(toFrag);
          float aerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26));
          col = mix(col, hazeCol, clamp(aerial, 0.0, 0.95));

          float baseAlpha = pow(max(sideFeather, 1e-5), mix(0.52, 1.15, uVeilMode))
                          * (mix(0.48, 0.14, uVeilMode) + mix(0.52, 0.34, uVeilMode) * threads + crestFoam * (1.0 - uVeilMode * 0.6) + plungeBoil * 0.5);
          // Smooth emergence at the rocky cliff cleft (vUv.y ~ 1.0) & soft sub-surface fade into the ocean boil!
          float topLipEmergence = smoothstep(1.0, 0.90, vUv.y);
          float subSeaFade = smoothstep(-13.2, -11.35, vWorldPos.y);
          float alpha = clamp(baseAlpha * topLipEmergence * subSeaFade, 0.0, mix(0.95, 0.44, uVeilMode));
          gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), alpha);
        }
      `}),N=k(!1),D=k(!0),W=new Be(b,N);W.renderOrder=3;const O=new Be(P,D);O.renderOrder=4,t.add(W),t.add(O);const q=new Yl(9.2,48);q.rotateX(-Math.PI*.5);const K=new Oe({transparent:!0,depthWrite:!1,uniforms:F,vertexShader:`
      uniform float uTime;
      varying vec2 vLocalXZ;
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        wp.y += sin(uTime * 1.6 + wp.x * 0.18) * 0.18;
        vLocalXZ = position.xz;
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${Vn}
      uniform vec3 uSunColor;
      varying vec2 vLocalXZ;
      varying vec3 vWorldPos;
      void main() {
        float r = length(vLocalXZ) / 9.2;
        if (r > 1.0) discard;
        float ang = atan(vLocalXZ.y, vLocalXZ.x);
        float radialWave = sin(r * 18.0 - uTime * 3.8 + skyNoise2(vLocalXZ * 0.9) * 2.5) * 0.5 + 0.5;
        float foamCells = skyFbm(vLocalXZ * 0.85 - vec2(cos(ang), sin(ang)) * uTime * 0.55);
        float coreBoil = smoothstep(0.55, 0.05, r) * 0.88;
        float outerRings = smoothstep(1.0, 0.25, r) * radialWave * smoothstep(0.32, 0.78, foamCells) * 0.72;
        float alpha = clamp(coreBoil + outerRings, 0.0, 0.92) * smoothstep(1.0, 0.72, r);

        vec3 foamCol = mix(uHorizonAntiColor, uHorizonSunColor, 0.45) * 1.28 + uSunColor * 0.36;
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        foamCol = mix(foamCol, hazeCol, clamp(1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26)), 0.0, 0.95));
        gl_FragColor = vec4(clamp(foamCol, vec3(0.0), vec3(24.0)), alpha);
      }
    `}),Y=new Be(q,K);Y.position.set(R,ve+.16,L),Y.renderOrder=3,t.add(Y);const V=1650,H=new Float32Array(V*3),J=new Float32Array(V*3),ht=new Float32Array(V*3);for(let j=0;j<V;j++){const ut=nt(j,5.7)*Math.PI*2,Rt=.35+Math.pow(nt(j,13.1),.7)*2.85;H[j*3]=R+Math.cos(ut)*Rt+(nt(j,19.4)-.5)*.8,H[j*3+1]=ve+.05+nt(j,23.8)*.65,H[j*3+2]=L+Math.sin(ut)*Rt+(nt(j,29.2)-.5)*.8;const zt=ut+(nt(j,37.6)-.5)*.85,It=1.85+nt(j,41.9)*5.35;J[j*3]=Math.cos(zt)*It+w.x*(1.1+nt(j,47.3)*1.8),J[j*3+1]=5.4+Math.pow(nt(j,53.1),.75)*8.4,J[j*3+2]=Math.sin(zt)*It+w.y*(1.1+nt(j,59.7)*1.8),ht[j*3]=nt(j,67.3),ht[j*3+1]=.52+nt(j,73.9)*.46,ht[j*3+2]=.55+nt(j,83.1)*1.15}const Q=new Yt;Q.setAttribute("position",new Z(H,3)),Q.setAttribute("aVelocity",new Z(J,3)),Q.setAttribute("aMeta",new Z(ht,3));const st=new Oe({name:"WaterfallBallisticSplashDroplets",transparent:!0,depthWrite:!1,uniforms:F,vertexShader:`
      attribute vec3 aVelocity;
      attribute vec3 aMeta;
      uniform float uTime;
      varying float vAlpha;
      varying vec3 vWorldPos;
      void main() {
        float phase = fract(aMeta.x + uTime * aMeta.y);
        // Total flight duration where y returns below sea level: T ~ 2 * vy / g
        float flightDur = clamp((2.08 * aVelocity.y) / 9.81, 0.85, 2.85);
        float t = phase * flightDur;
        // Aerodynamic drag on horizontal spray + exact -0.5 * g * t^2 vertical gravity!
        float dragT = (1.0 - exp(-0.72 * t)) / 0.72;
        vec3 wp = position;
        wp.xz += aVelocity.xz * dragT + vec2(0.45, -0.32) * (t * t * 0.35);
        wp.y += aVelocity.y * t - 4.905 * t * t;
        vWorldPos = wp;

        vec4 mv = modelViewMatrix * vec4(wp, 1.0);
        float submergeFade = smoothstep(-11.75, -11.30, wp.y);
        float arcFade = smoothstep(0.0, 0.08, phase) * (1.0 - smoothstep(0.84, 1.0, phase));
        vAlpha = submergeFade * arcFade * (0.48 + 0.42 * aMeta.z);
        gl_PointSize = clamp((58.0 * aMeta.z * (1.0 - 0.25 * phase)) / max(1.0, -mv.z), 1.6, 13.5);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${Vn}
      uniform vec3 uSunColor;
      varying float vAlpha;
      varying vec3 vWorldPos;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25 || vAlpha <= 0.005) discard;
        float crispCore = exp(-r2 * 13.5);
        vec3 foamLit = mix(uHorizonAntiColor, uHorizonSunColor, 0.52) * 1.42 + uSunColor * 0.58 + vec3(0.14);
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float aerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26));
        vec3 col = mix(clamp(foamLit, vec3(0.0), vec3(6.0)), hazeCol, clamp(aerial, 0.0, 0.95));
        gl_FragColor = vec4(col, clamp(vAlpha * crispCore, 0.0, 0.92));
      }
    `}),$=new Gs(Q,st);$.renderOrder=4,$.frustumCulled=!1,t.add($);const tt=420,yt=new Float32Array(tt*3),rt=new Float32Array(tt);for(let j=0;j<tt;j++){const ut=nt(j,11.3)*Math.PI*2,Rt=Math.pow(nt(j,19.7),.65)*6.4;yt[j*3]=R+Math.cos(ut)*Rt,yt[j*3+1]=ve+nt(j,27.9)*11.5,yt[j*3+2]=L+Math.sin(ut)*Rt,rt[j]=nt(j,61.7)}const z=new Yt;z.setAttribute("position",new Z(yt,3)),z.setAttribute("aSeed",new Z(rt,1));const xt=new Oe({transparent:!0,depthWrite:!1,uniforms:F,vertexShader:`
      attribute float aSeed;
      uniform float uTime;
      varying float vLife;
      varying vec3 vWorldPos;
      void main() {
        float life = fract(aSeed + uTime * (0.16 + aSeed * 0.14));
        vLife = life;
        vec3 p = position;
        // Buoyant decelerating rise + swirling sea-cove vortex & downwind drift!
        p.y = -11.35 + pow(life, 0.78) * (8.5 + 6.5 * aSeed);
        float swirlAng = life * 3.8 + aSeed * 12.56;
        p.x += sin(swirlAng) * (0.9 + life * 4.2) + life * 3.4;
        p.z += cos(swirlAng * 0.85) * (0.9 + life * 4.2) - life * 1.8;
        vWorldPos = p;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((235.0 * (0.38 + life * 1.05)) / max(1.0, -mv.z), 5.0, 56.0);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${Vn}
      uniform vec3 uSunColor;
      varying float vLife;
      varying vec3 vWorldPos;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
        float puff = exp(-r2 * 9.5) * sin(vLife * 3.14159265) * 0.24;
        vec3 mistCol = mix(uHorizonAntiColor, uHorizonSunColor, 0.46) * 1.22 + uSunColor * 0.28;
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        mistCol = mix(mistCol, hazeCol, clamp(1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26)), 0.0, 0.95));
        gl_FragColor = vec4(clamp(mistCol, vec3(0.0), vec3(12.0)), puff);
      }
    `}),at=new Gs(z,xt);at.renderOrder=4,at.frustumCulled=!1,t.add(at);const St=(j,ut)=>{if(Math.hypot(j-R,ut-L)<10.2||Math.hypot(j-M.x,ut-M.z)<8.5)return!0;const Rt=j-M.x,zt=ut-M.z,It=Rt*w.x+zt*w.y,gt=Math.abs(Rt*A.x+zt*A.y);return It>-8&&It<26&&gt<9.5},dt=new ln,Dt=new po(.62,1),At=Dt.getAttribute("position");for(let j=0;j<At.count;j++){const ut=At.getX(j);let Rt=At.getY(j);const zt=At.getZ(j),It=.82+.32*he(ut*2.2+4.3,Rt*2.2+zt*2.2,3);Rt<-.1&&(Rt=-.1+(Rt+.1)*.35),At.setXYZ(j,ut*It*1.36,Rt*It*.62,zt*It*1.22)}Dt.computeVertexNormals();const B=(()=>{const It=new Float32Array(411),gt=new Float32Array(274);for(let jt=0;jt<=14;jt++){const te=jt/14,Kt=(te-.5)*3.4,oe=.58+.42*Math.sin(te*Math.PI),Se=Math.sin(te*Math.PI*1.3+.4)*.18,Le=-Math.pow(te-.5,2)*.14;for(let qe=0;qe<=8;qe++){const an=qe/8,wn=an*Math.PI*2,on=.84+.26*he(Kt*1.3+2.1,Math.cos(wn)*1.7+Math.sin(wn)*1.7,2),wi=.3*oe*on,mi=.38*oe*on,zi=jt*9+qe;It[zi*3]=Kt,It[zi*3+1]=Le+Math.sin(wn)*wi,It[zi*3+2]=Se+Math.cos(wn)*mi,gt[zi*2]=te*2.4,gt[zi*2+1]=an}}const G=135,ct=G+1;It[G*3]=-1.72,It[G*3+1]=-.04,It[G*3+2]=0,gt[G*2]=0,gt[G*2+1]=.5,It[ct*3]=1.72,It[ct*3+1]=-.04,It[ct*3+2]=0,gt[ct*2]=2.4,gt[ct*2+1]=.5;const wt=[];for(let jt=0;jt<14;jt++)for(let te=0;te<8;te++){const Kt=jt*9+te,oe=(jt+1)*9+te,Se=(jt+1)*9+(te+1),Le=jt*9+(te+1);wt.push(Kt,oe,Se,Kt,Se,Le)}const Wt=126;for(let jt=0;jt<8;jt++)wt.push(G,jt+1,jt),wt.push(ct,Wt+jt,Wt+jt+1);const ae=new Yt;return ae.setAttribute("position",new Z(It,3)),ae.setAttribute("uv",new Z(gt,2)),ae.setIndex(wt),ae.computeVertexNormals(),ae})(),I=[{cx:-3.5,cz:-14,spanX:64,spanZ:60,isHero:!0,evalH:Li},{cx:-70,cz:-34,spanX:74,spanZ:64,isHero:!1,evalH:Pi},{cx:88,cz:36,spanX:78,spanZ:78,isHero:!1,evalH:nc},{cx:84,cz:-46,spanX:74,spanZ:82,isHero:!1,evalH:ic},{cx:-124,cz:-86,spanX:74,spanZ:64,isHero:!1,evalH:zu},{cx:-48,cz:-92,spanX:58,spanZ:54,isHero:!1,evalH:Bu},{cx:36,cz:-108,spanX:56,spanZ:56,isHero:!1,evalH:Ou}],it=820,pt=new ls(Dt,n,it);pt.castShadow=!0,pt.receiveShadow=!0;let _t=0;const Mt=210,kt=new ls(B,n,Mt);kt.castShadow=!0,kt.receiveShadow=!0;let Et=0;const Lt=new E(0,1,0),Ft=new E,Ct=new en,Nt=new en;for(let j=0;j<I.length;j++){const ut=I[j],Rt=ut.isHero?36:24;let zt=0;for(let It=0;It<900&&zt<Rt&&_t<it-6;It++){const gt=7e3+j*1100+It,G=ut.cx+(nt(gt,14.7)-.5)*(ut.spanX*1.28),ct=ut.cz+(nt(gt,53.9)-.5)*(ut.spanZ*1.28),wt=ut.evalH(G,ct);if(wt<-16.2||wt>-9.2||St(G,ct))continue;zt++;const Wt=1.05+nt(gt,29.1)*1.85,ae=Math.max(wt-.12,ve-.08+nt(gt,37.4)*.62);dt.position.set(G,ae,ct),dt.rotation.set((nt(gt,3.3)-.5)*.24,nt(gt,9.8)*Math.PI*2,(nt(gt,6.1)-.5)*.24),dt.scale.set(Wt*(.92+nt(gt,4.4)*.45),Wt*(.58+nt(gt,8.2)*.35),Wt*(.88+nt(gt,11.6)*.42)),dt.updateMatrix(),pt.setMatrixAt(_t++,dt.matrix);const jt=2+Math.floor(nt(gt,45.2)*3);for(let te=0;te<jt&&_t<it;te++){const Kt=gt*7+te*19.3,oe=nt(Kt,2.7)*Math.PI*2,Se=1.15+nt(Kt,5.9)*3.4,Le=G+Math.cos(oe)*Se,qe=ct+Math.sin(oe)*Se;if(St(Le,qe))continue;const an=.48+nt(Kt,12.4)*.95,wn=ve-.1+nt(Kt,18.8)*.44;dt.position.set(Le,wn,qe),dt.rotation.set((nt(Kt,21.1)-.5)*.32,nt(Kt,25.6)*Math.PI*2,(nt(Kt,29.3)-.5)*.32),dt.scale.set(an*(.95+nt(Kt,33.1)*.55),an*(.52+nt(Kt,37.7)*.32),an),dt.updateMatrix(),pt.setMatrixAt(_t++,dt.matrix)}if(Et<Mt&&nt(gt,63.5)>.28){const te=nt(gt,71.2)*Math.PI*2,Kt=G+Math.cos(te)*(1.2+nt(gt,77.8)*2.4),oe=ct+Math.sin(te)*(1.2+nt(gt,81.4)*2.4);if(!St(Kt,oe)){const Se=.72+nt(gt,88.9)*1.15,Le=.68+nt(gt,93.1)*.65,qe=Math.max(ut.evalH(Kt,oe)-.08,ve-.04+nt(gt,97.6)*.36),an=ut.evalH(Kt+1,oe)-ut.evalH(Kt-1,oe),wn=ut.evalH(Kt,oe+1)-ut.evalH(Kt,oe-1),on=Math.atan2(an,-wn)+(nt(gt,102.3)-.5)*.95;dt.position.set(Kt,qe,oe),dt.rotation.set((nt(gt,108.7)-.5)*.16,on,(nt(gt,114.2)-.5)*.18),dt.scale.set(Se,Le,Le*1.08),dt.updateMatrix(),kt.setMatrixAt(Et++,dt.matrix)}}}}for(let j=0;j<Xs.length;j++){const ut=Xs[j];for(let Rt=0;Rt<6&&_t<it;Rt++){const zt=19e3+j*71+Rt*13,It=Rt/6*Math.PI*2+(nt(zt,4.1)-.5)*.55,gt=Math.max(ut.rx,ut.rz)*(1.12+nt(zt,8.7)*.52),G=ut.x+Math.cos(It)*gt,ct=ut.z+Math.sin(It)*gt;if(St(G,ct))continue;const wt=.65+nt(zt,15.3)*1.15;dt.position.set(G,ve-.08+nt(zt,19.9)*.48,ct),dt.rotation.set(.08,nt(zt,24.4)*Math.PI*2,-.06),dt.scale.set(wt*1.25,wt*.62,wt),dt.updateMatrix(),pt.setMatrixAt(_t++,dt.matrix),Rt%2===0&&Et<Mt&&(dt.position.set(G+Math.cos(It+.6)*1.6,ve+.02+nt(zt,31.2)*.26,ct+Math.sin(It+.6)*1.6),dt.rotation.set(.05,It+Math.PI*.5+(nt(zt,36.8)-.5)*.6,-.09),dt.scale.set(.75+nt(zt,41.5)*.85,.72,.78),dt.updateMatrix(),kt.setMatrixAt(Et++,dt.matrix))}}for(let j=0;j<I.length;j++){const ut=I[j],Rt=ut.isHero?24:10;let zt=0;for(let It=0;It<400&&zt<Rt&&_t<it;It++){const gt=j*500+It,G=ut.cx+(nt(gt,41.2)-.5)*ut.spanX,ct=ut.cz+(nt(gt,83.7)-.5)*ut.spanZ;if(ut.isHero){if(Math.sqrt(Math.pow(G/10.2,2)+Math.pow((ct+1)/6.4,2))<1)continue}else if(St(G,ct))continue;const wt=ut.evalH(G,ct);if(wt<.25||wt>34)continue;const Wt=ut.evalH(G+.6,ct),ae=ut.evalH(G-.6,ct),jt=ut.evalH(G,ct+.6),te=ut.evalH(G,ct-.6),Kt=(Wt-ae)/1.2,oe=(jt-te)/1.2;if(Math.hypot(Kt,oe)>.38||Math.min(Wt,ae,jt,te)<0)continue;const Le=(ut.isHero?.38:.58)+nt(gt,19.4)*(ut.isHero?.62:.95);Ft.set(-Kt,1,-oe).normalize(),Ct.setFromUnitVectors(Lt,Ft),Nt.setFromAxisAngle(Lt,nt(gt,8.9)*Math.PI*2),dt.quaternion.copy(Ct).multiply(Nt),dt.position.set(G,wt-.14*Le,ct),dt.scale.set(Le*(.95+nt(gt,2.3)*.32),Le*.55,Le),dt.updateMatrix(),pt.setMatrixAt(_t++,dt.matrix),zt++}}pt.count=_t,pt.instanceMatrix.needsUpdate=!0,t.add(pt),kt.count=Et,kt.instanceMatrix.needsUpdate=!0,kt.name="ShorelineBasaltRockyLogs",t.add(kt);const Qt=ox(),ie=ax(),$t=rx(),we=lx(),ce=cx(),Ce={uTime:{value:0}},et=(j,ut,Rt,zt,It)=>{j.onBeforeCompile=gt=>{Object.assign(gt.uniforms,i),gt.uniforms.uFloraTime=Ce.uTime,gt.vertexShader=gt.vertexShader.replace("#include <common>",`#include <common>
          uniform float uFloraTime;
          uniform float uWindStrength;
          uniform vec2 uWindDir;
          varying vec3 vFloraWorldPos;
          varying float vWindSheen;
          varying float vTipFrac;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float hFrac = clamp(position.y / ${ut.toFixed(3)}, 0.0, 1.0);
          float bendProfile = pow(hFrac, 1.65);
          vTipFrac = hFrac;

          vec3 instW = vec3(0.0);
          vec3 col0 = vec3(1.0, 0.0, 0.0);
          vec3 col1 = vec3(0.0, 1.0, 0.0);
          vec3 col2 = vec3(0.0, 0.0, 1.0);
          #ifdef USE_INSTANCING
            instW = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
            col0 = instanceMatrix[0].xyz;
            col1 = instanceMatrix[1].xyz;
            col2 = instanceMatrix[2].xyz;
          #endif

          float windStr = clamp(uWindStrength, 0.04, 1.35);
          vec2 wDir = normalize(uWindDir + vec2(1e-5, 0.0));
          vec2 wPerp = vec2(-wDir.y, wDir.x);

          // Traveling spatial wind-gust waves visibly rippling across the cliffside meadow, ferns & islands!
          float windAlong = dot(instW.xz, wDir);
          float windAcross = dot(instW.xz, wPerp);
          float gustSpeed = 3.0 + 7.6 * windStr;
          float wave1 = 0.5 + 0.5 * sin(windAlong * 0.15 - uFloraTime * gustSpeed * 0.46 + sin(windAcross * 0.09) * 1.7);
          float wave2 = 0.5 + 0.5 * sin(windAlong * 0.33 - uFloraTime * gustSpeed * 0.82 + windAcross * 0.15 + 2.3);
          float gustPacket = pow(wave1 * 0.64 + wave2 * 0.36, 1.50);
          vWindSheen = gustPacket * windStr * hFrac;

          float plantScaleH = max(length(col1), 0.25);
          float steadyLean = pow(windStr, 1.12) * ${Rt.toFixed(3)} * 0.44 * plantScaleH;
          float gustSurge = (0.04 + 0.68 * windStr) * ${Rt.toFixed(3)} * gustPacket * plantScaleH;
          float crossEddy = sin(uFloraTime * (2.1 + 2.5 * windStr) + instW.x * 0.85 + instW.z * 1.05) * ${Rt.toFixed(3)} * (0.03 + 0.15 * windStr) * plantScaleH;

          // Out-of-phase individual frond/blade/petal shiver so each frond in a fern stand dances independently!
          float frondPhase = position.x * 19.5 + position.z * 17.5 + instW.x * 3.7 + instW.z * 2.9;
          float flutter = sin(uFloraTime * (6.6 + 6.8 * windStr) + frondPhase) * ${zt.toFixed(4)} * (0.16 + 0.88 * windStr) * (0.45 + 0.55 * gustPacket) * hFrac;

          vec2 worldDispXZ =
            wDir * ((steadyLean + gustSurge) * bendProfile + flutter) +
            wPerp * (crossEddy * bendProfile + flutter * 0.55);

          // Length-preserving parabolic droop so bowed ferns & tall grasses arc naturally without stretching!
          float worldPlantH = max(${ut.toFixed(3)} * plantScaleH, 0.14);
          float arcDroopY = -0.38 * dot(worldDispXZ, worldDispXZ) / worldPlantH;
          vec3 worldWindOffset = vec3(worldDispXZ.x, arcDroopY, worldDispXZ.y);

          // Project world wind vector cleanly into the instance's local unscaled frame!
          transformed.x += dot(worldWindOffset, col0) / max(dot(col0, col0), 1e-4);
          transformed.y += dot(worldWindOffset, col1) / max(dot(col1, col1), 1e-4);
          transformed.z += dot(worldWindOffset, col2) / max(dot(col2, col2), 1e-4);`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
          vec4 fwPos = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            fwPos = instanceMatrix * fwPos;
          #endif
          fwPos = modelMatrix * fwPos;
          vFloraWorldPos = fwPos.xyz;`),gt.fragmentShader=gt.fragmentShader.replace("#include <common>",`#include <common>
          ${Vn}
          uniform vec3 uSunColor;
          varying vec3 vFloraWorldPos;
          varying float vWindSheen;
          varying float vTipFrac;`).replace("#include <fog_fragment>",`vec3 fToFrag = vFloraWorldPos - cameraPosition;
          float fDist = length(fToFrag);
          vec3 fViewDir = fToFrag / max(fDist, 1e-4);
          // Backlit botanical subsurface translucency + traveling wind-ripple sheen + storm lightning rim!
          float sunTrans = pow(clamp(dot(fViewDir, normalize(uSunDir + vec3(0.0, 0.25, 0.0))), 0.0, 1.0), 2.2);
          vec3 sssGlow = diffuseColor.rgb * uSunColor * sunTrans * ${It.toFixed(3)} * (0.35 + 0.65 * vTipFrac);
          vec3 gustSheen = mix(uHorizonAntiColor, uSunColor, 0.38) * vWindSheen * 0.22;
          vec3 boltRim = diffuseColor.rgb * vec3(0.75, 0.88, 1.0) * uLightningFlash * (0.45 + 0.55 * vTipFrac);
          gl_FragColor.rgb += sssGlow + gustSheen + boltRim;

          vec3 fHaze = evalHorizonHazeColor(fToFrag);
          float fAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * fDist, 1e-6), 1.26));
          gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, fHaze, clamp(fAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)}},Ht=new li({name:"NordicVariedCoastalGrass",color:new Ut(16777215),vertexColors:!0,roughness:.74,metalness:0,side:tn});et(Ht,.48,.38,.022,.65);const vt=18500,bt=new ls(Qt,Ht,vt);bt.castShadow=!1,bt.receiveShadow=!0,bt.name="NordicVariedCoastalGrassInstanced";const Tt=new Ut;let Bt=0;for(let j=0;j<I.length;j++){const ut=I[j],Rt=ut.isHero?9800:1450;let zt=0,It=0;for(;zt<Rt&&It<Rt*6&&Bt<vt;){It++;const gt=j*35e3+It,G=ut.cx+(nt(gt,1.3)-.5)*ut.spanX,ct=ut.cz+(nt(gt,7.9)-.5)*ut.spanZ;if(ut.isHero){const an=Math.sqrt(Math.pow((G-4.45)/2.25,2)+Math.pow((ct+.85)/3.7,2)),wn=Math.sqrt(Math.pow((G+4.45)/2.25,2)+Math.pow((ct+1.15)/3.7,2));if(an<1||wn<1)continue}const wt=ut.evalH(G,ct),Wt=ut.evalH(G+.4,ct),ae=ut.evalH(G,ct+.4),jt=Math.hypot(Wt-wt,ae-wt)/.4;if(wt<-.6||jt>.82)continue;const te=he(G*.42+2.3,ct*.42-4.1,3);if(te<.24)continue;const Kt=ne(.52,.86,he(G*.18-6.4,ct*.18+9.2,3)),oe=1-ne(.24,.5,te),Se=X.lerp(.58,.36,oe)+nt(gt,3.7)*.58+Kt*(.65+nt(gt,6.4)*.42),Le=.72+nt(gt,5.1)*.68+Kt*.22;dt.position.set(G,wt-.02,ct),dt.scale.set(Le,Se,Le),dt.rotation.set((nt(gt,9.2)-.5)*.16,nt(gt,11.4)*Math.PI*2,(nt(gt,13.8)-.5)*.16),dt.updateMatrix(),bt.setMatrixAt(Bt,dt.matrix);const qe=nt(gt,17.1);Kt>.58&&qe>.35?Tt.setHSL(.12+(nt(gt,19.4)-.5)*.03,.54,.31+nt(gt,22.8)*.12):qe<.52?Tt.setHSL(.25+(nt(gt,21.1)-.5)*.04,.52,.2+nt(gt,23.7)*.11):qe<.8?Tt.setHSL(.15+(nt(gt,25.3)-.5)*.03,.48,.28+nt(gt,29.1)*.11):Tt.setHSL(.31+(nt(gt,31.9)-.5)*.03,.34,.21+nt(gt,37.4)*.1),bt.setColorAt(Bt,Tt),Bt++,zt++}}bt.count=Bt,bt.instanceMatrix.needsUpdate=!0,bt.instanceColor&&(bt.instanceColor.needsUpdate=!0),t.add(bt);const ue=new li({name:"NordicCoastalBrackenFerns",color:new Ut(16777215),vertexColors:!0,roughness:.64,metalness:0,side:tn});et(ue,.36,.34,.028,.78);const Te=3800,Re=new ls(ie,ue,Te);Re.castShadow=!1,Re.receiveShadow=!0,Re.name="NordicCoastalBrackenFernsInstanced";const me=new Ut;let nn=0;for(let j=0;j<I.length;j++){const ut=I[j],Rt=ut.isHero?2050:290;let zt=0,It=0;for(;zt<Rt&&It<Rt*7&&nn<Te;){It++;const gt=41e4+j*22e3+It,G=ut.cx+(nt(gt,3.1)-.5)*ut.spanX,ct=ut.cz+(nt(gt,8.7)-.5)*ut.spanZ;if(ut.isHero){const oe=Math.sqrt(Math.pow((G-4.45)/2.5,2)+Math.pow((ct+.85)/3.95,2)),Se=Math.sqrt(Math.pow((G+4.45)/2.5,2)+Math.pow((ct+1.15)/3.95,2));if(oe<1||Se<1)continue}const wt=ut.evalH(G,ct),Wt=Math.hypot(ut.evalH(G+.45,ct)-wt,ut.evalH(G,ct+.45)-wt)/.45;if(wt<-.3||Wt>.76)continue;const ae=he(G*.34-11.7,ct*.34+6.9,3);if(ae<.36)continue;const jt=.62+nt(gt,12.3)*.78,te=.55+nt(gt,15.9)*.92+ne(.55,.85,ae)*.35;dt.position.set(G,wt-.025,ct),dt.scale.set(jt,te,jt),dt.rotation.set((nt(gt,19.1)-.5)*.18,nt(gt,23.4)*Math.PI*2,(nt(gt,27.8)-.5)*.18),dt.updateMatrix(),Re.setMatrixAt(nn,dt.matrix);const Kt=nt(gt,31.6);Kt<.64?me.setHSL(.26+(nt(gt,35.2)-.5)*.05,.58,.38+nt(gt,39.7)*.14):Kt<.86?me.setHSL(.17+(nt(gt,43.1)-.5)*.04,.62,.4+nt(gt,47.5)*.12):me.setHSL(.08+(nt(gt,51.3)-.5)*.03,.66,.36+nt(gt,55.9)*.11),Re.setColorAt(nn,me),nn++,zt++}}Re.count=nn,Re.instanceMatrix.needsUpdate=!0,Re.instanceColor&&(Re.instanceColor.needsUpdate=!0),t.add(Re);const cn=new li({name:"NordicTallRoyalFernStands",color:new Ut(16777215),vertexColors:!0,roughness:.58,metalness:0,side:tn});et(cn,.72,.52,.038,.88);const $n=1850,Ze=new ls($t,cn,$n);Ze.castShadow=!0,Ze.receiveShadow=!0,Ze.name="NordicTallRoyalFernStandsInstanced";let ke=0;for(let j=0;j<I.length;j++){const ut=I[j],Rt=ut.isHero?960:148;let zt=0,It=0;for(;zt<Rt&&It<Rt*9&&ke<$n;){It++;const gt=62e4+j*24e3+It,G=ut.cx+(nt(gt,4.3)-.5)*ut.spanX,ct=ut.cz+(nt(gt,9.6)-.5)*ut.spanZ;if(ut.isHero){const oe=Math.sqrt(Math.pow((G-4.45)/3.45,2)+Math.pow((ct+.45)/4.65,2)),Se=Math.sqrt(Math.pow((G+4.45)/3.45,2)+Math.pow((ct+.75)/4.65,2)),Le=Math.sqrt(Math.pow(G/4.2,2)+Math.pow((ct-2.8)/4.8,2));if(oe<1||Se<1||Le<1)continue}const wt=ut.evalH(G,ct),Wt=Math.hypot(ut.evalH(G+.5,ct)-wt,ut.evalH(G,ct+.5)-wt)/.5;if(wt<.05||Wt>.64)continue;const ae=he(G*.26+17.4,ct*.26-13.8,3);if(ae<.44)continue;const jt=.85+nt(gt,14.7)*.62+ne(.58,.86,ae)*.34,te=.82+nt(gt,18.2)*.56;dt.position.set(G,wt-.035,ct),dt.scale.set(te,jt,te),dt.rotation.set((nt(gt,21.9)-.5)*.14,nt(gt,26.3)*Math.PI*2,(nt(gt,30.5)-.5)*.14),dt.updateMatrix(),Ze.setMatrixAt(ke,dt.matrix);const Kt=nt(gt,34.8);Kt<.68?me.setHSL(.27+(nt(gt,38.1)-.5)*.04,.62,.4+nt(gt,42.6)*.14):Kt<.9?me.setHSL(.2+(nt(gt,46.9)-.5)*.03,.6,.42+nt(gt,50.4)*.12):me.setHSL(.1+(nt(gt,54.2)-.5)*.03,.68,.38+nt(gt,58.7)*.1),Ze.setColorAt(ke,me),ke++,zt++}}Ze.count=ke,Ze.instanceMatrix.needsUpdate=!0,Ze.instanceColor&&(Ze.instanceColor.needsUpdate=!0),t.add(Ze);const ei=new li({name:"NordicHeatherShrubs",color:new Ut(16777215),vertexColors:!0,roughness:.72,metalness:0});et(ei,.24,.18,.014,.48);const Bn=2600,En=new ls(we,ei,Bn);En.castShadow=!1,En.receiveShadow=!0,En.name="NordicHeatherShrubsInstanced";const On=new Ut;let ni=0;for(let j=0;j<I.length;j++){const ut=I[j],Rt=ut.isHero?1360:205;let zt=0,It=0;for(;zt<Rt&&It<Rt*8&&ni<Bn;){It++;const gt=79e4+j*19e3+It,G=ut.cx+(nt(gt,5.4)-.5)*ut.spanX,ct=ut.cz+(nt(gt,10.8)-.5)*ut.spanZ;if(ut.isHero){const Kt=Math.sqrt(Math.pow((G-4.45)/2.55,2)+Math.pow((ct+.85)/4,2)),oe=Math.sqrt(Math.pow((G+4.45)/2.55,2)+Math.pow((ct+1.15)/4,2));if(Kt<1||oe<1)continue}const wt=ut.evalH(G,ct),Wt=Math.hypot(ut.evalH(G+.4,ct)-wt,ut.evalH(G,ct+.4)-wt)/.4;if(wt<-.2||Wt>.74||he(G*.3+23.1,ct*.3-9.7,3)<.42)continue;const jt=.78+nt(gt,13.6)*.86;dt.position.set(G,wt-.02,ct),dt.scale.set(jt*1.15,jt*(.75+nt(gt,17.2)*.45),jt*1.15),dt.rotation.set((nt(gt,20.4)-.5)*.16,nt(gt,24.9)*Math.PI*2,(nt(gt,28.3)-.5)*.16),dt.updateMatrix(),En.setMatrixAt(ni,dt.matrix);const te=nt(gt,33.5);te<.52?On.setHSL(.84+(nt(gt,37.1)-.5)*.05,.58,.52+nt(gt,41.2)*.14):te<.84?On.setHSL(.92+(nt(gt,45.8)-.5)*.04,.64,.54+nt(gt,49.6)*.12):On.setHSL(.9,.24,.8+nt(gt,53.4)*.12),En.setColorAt(ni,On),ni++,zt++}}En.count=ni,En.instanceMatrix.needsUpdate=!0,En.instanceColor&&(En.instanceColor.needsUpdate=!0),t.add(En);const bn=new li({name:"NordicCliffWildflowers",vertexColors:!0,roughness:.56,metalness:0,side:tn});et(bn,.32,.3,.024,.62);const Mi=5600,gn=new ls(ce,bn,Mi);gn.castShadow=!1,gn.receiveShadow=!0,gn.name="NordicCliffWildflowersInstanced";const Cn=new Ut;let Dn=0;for(let j=0;j<I.length;j++){const ut=I[j],Rt=ut.isHero?3100:415;let zt=0,It=0;for(;zt<Rt&&It<Rt*7&&Dn<Mi;){It++;const gt=9e4+j*26e3+It,G=ut.cx+(nt(gt,2.7)-.5)*ut.spanX,ct=ut.cz+(nt(gt,6.3)-.5)*ut.spanZ;if(ut.isHero){const oe=Math.sqrt(Math.pow((G-4.45)/2.45,2)+Math.pow((ct+.85)/3.95,2)),Se=Math.sqrt(Math.pow((G+4.45)/2.45,2)+Math.pow((ct+1.15)/3.95,2));if(oe<1||Se<1)continue}const wt=ut.evalH(G,ct),Wt=Math.hypot(ut.evalH(G+.4,ct)-wt,ut.evalH(G,ct+.4)-wt)/.4;if(wt<-.25||Wt>.7||he(G*.44-8.2,ct*.44+5.7,3)<.39)continue;const jt=.72+nt(gt,11.9)*.85;dt.position.set(G,wt-.015,ct),dt.scale.set(jt,jt*(.82+nt(gt,14.2)*.55),jt),dt.rotation.set((nt(gt,18.5)-.5)*.16,nt(gt,22.1)*Math.PI*2,(nt(gt,26.8)-.5)*.16),dt.updateMatrix(),gn.setMatrixAt(Dn,dt.matrix);const te=he(G*.24+13.1,ct*.24-9.4,2),Kt=nt(gt,29.4);te<.3?Cn.setHSL(.93+(nt(gt,31.1)-.5)*.04,.76,.64+nt(gt,33.7)*.12):te<.48?Cn.setHSL(.13+(nt(gt,39.2)-.5)*.02,.92,.56+nt(gt,41.8)*.1):te<.64?Cn.setHSL(.12,.12,.9+nt(gt,35.9)*.08):te<.8?Cn.setHSL(.75+(nt(gt,45.1)-.5)*.05,.68,.56+nt(gt,49.3)*.12):Kt<.62?Cn.setHSL(.58+(nt(gt,52.7)-.5)*.04,.78,.62+nt(gt,56.1)*.1):Cn.setHSL(.98+(nt(gt,60.3)-.5)*.03,.82,.56+nt(gt,64.8)*.1),gn.setColorAt(Dn,Cn),Dn++,zt++}}gn.count=Dn,gn.instanceMatrix.needsUpdate=!0,gn.instanceColor&&(gn.instanceColor.needsUpdate=!0),t.add(gn),t.add(sx(i));const qn=Gv([{x:-2,z:-8,radius:22.5},{x:-18,z:-26,radius:18},{x:27.5,z:-10.5,radius:6.5},{x:-37.5,z:-22,radius:7.2},{x:R,z:L,radius:5.8,boost:1},{x:-66,z:-32,radius:25.5},{x:-91,z:-42.5,radius:21},{x:88,z:36,radius:34.5},{x:59.5,z:23,radius:11},{x:43.5,z:14.5,radius:6.2},{x:63,z:50.5,radius:8.2},{x:88,z:-56,radius:30.5},{x:70,z:-22.5,radius:17.5},{x:-124,z:-86,radius:34},{x:-42,z:-96,radius:20},{x:36,z:-108,radius:22},{x:-144,z:78,radius:44},{x:168,z:122,radius:42},{x:-206,z:-96,radius:46},{x:-8,z:-222,radius:58},{x:-18,z:236,radius:32}],i);t.add(qn.mesh);const fi=[],Ss=[{cx:-2,cz:-8,rMax:42,rays:84,boost:1.15},{cx:-68,cz:-33,rMax:44,rays:52,boost:1.05},{cx:88,cz:36,rMax:48,rays:44,boost:.95},{cx:84,cz:-46,rMax:48,rays:40,boost:.95},{cx:-124,cz:-86,rMax:46,rays:28,boost:.9}];for(let j=0;j<Ss.length;j++){const ut=Ss[j];for(let Rt=0;Rt<ut.rays;Rt++){const zt=Rt/ut.rays*Math.PI*2+(nt(j*97+Rt,13.7)-.5)*.05,It=Math.cos(zt),gt=Math.sin(zt);for(let G=ut.rMax;G>=4.5;G-=.75){const ct=ut.cx+It*G,wt=ut.cz+gt*G;if(vi(ct,wt)>=ve-.35){vi(ct+It*1.2,wt+gt*1.2)<ve-.45&&fi.push({x:ct+It*.25,z:wt+gt*.25,landX:-It,landZ:-gt,boost:ut.boost});break}}}}for(let j=0;j<Xs.length;j++){const ut=Xs[j];for(let Rt=0;Rt<10;Rt++){const zt=Rt/10*Math.PI*2+nt(j*31+Rt,7.3)*.3,It=(ut.rx*Math.abs(Math.cos(zt))+ut.rz*Math.abs(Math.sin(zt)))*.92+.6;fi.push({x:ut.x+Math.cos(zt)*It,z:ut.z+Math.sin(zt)*It,landX:-Math.cos(zt),landZ:-Math.sin(zt),boost:1.12})}}for(let j=0;j<Co.length;j++){const ut=Co[j],Rt=Math.cos(ut.rotY),zt=Math.sin(ut.rotY);for(let It=0;It<16;It++){const gt=-.82+It/15*1.64;if(!(Math.abs(gt*ut.halfLength)<ut.openingHalfSpan*.72))for(const G of[-1,1]){const ct=gt*ut.halfLength,wt=G*(ut.halfThickness*1.15),Wt=ut.x+ct*Rt+wt*zt,ae=ut.z-ct*zt+wt*Rt;fi.push({x:Wt,z:ae,landX:-G*zt,landZ:-G*Rt,boost:1.1})}}}const U=2400,ot=new Float32Array(U*3),ft=new Float32Array(U*3),mt=new Float32Array(U*3),lt=Math.max(1,fi.length);for(let j=0;j<U;j++){const ut=fi[j%lt]??{x:0,z:12,landX:0,landZ:-1,boost:1},Rt=-ut.landZ,zt=ut.landX,It=(nt(j,9.1)-.5)*2.6,gt=(nt(j,15.4)-.4)*1.1;ot[j*3]=ut.x+Rt*It+ut.landX*gt,ot[j*3+1]=ve+.08+nt(j,21.8)*.45,ot[j*3+2]=ut.z+zt*It+ut.landZ*gt;const G=nt(j,28.3)<.72?1:-.45,ct=(1.6+nt(j,34.7)*3.8)*G*ut.boost,wt=(nt(j,41.2)-.5)*2.8;ft[j*3]=ut.landX*ct+Rt*wt,ft[j*3+1]=(4.4+Math.pow(nt(j,49.6),.72)*5.8)*ut.boost,ft[j*3+2]=ut.landZ*ct+zt*wt,mt[j*3]=nt(j,57.3),mt[j*3+1]=.48+nt(j,64.9)*.36,mt[j*3+2]=.55+nt(j,73.1)*.95}const Pt=new Yt;Pt.setAttribute("position",new Z(ot,3)),Pt.setAttribute("aVelocity",new Z(ft,3)),Pt.setAttribute("aMeta",new Z(mt,3));const Ot={...i,uWaveEnergy:{value:1}},qt=new Oe({name:"CoastalWaveRockSplashParticles",transparent:!0,depthWrite:!1,uniforms:Ot,vertexShader:`
      attribute vec3 aVelocity;
      attribute vec3 aMeta;
      uniform float uTime;
      uniform float uWaveEnergy;
      varying float vAlpha;
      varying vec3 vWorldPos;
      void main() {
        // Synchronize shore-splash bursts with incoming North Sea wave swells!
        float swellWave = 0.5 + 0.5 * sin(uTime * 1.38 - dot(position.xz, vec2(0.075, 0.055)) + aMeta.z * 4.2);
        float swellPulse = 0.38 + 0.62 * pow(swellWave, 1.5);
        float energy = clamp(uWaveEnergy, 0.35, 2.35);

        float phase = fract(aMeta.x + uTime * aMeta.y * (0.82 + 0.28 * energy));
        vec3 v0 = aVelocity * (0.68 + 0.44 * energy) * (0.72 + 0.42 * swellWave);
        float flightDur = clamp((2.05 * v0.y) / 9.81, 0.75, 2.45);
        float t = phase * flightDur;

        // Parabolic ballistic trajectory onto land & coastal rocks with aerodynamic spray drag!
        float dragT = (1.0 - exp(-0.85 * t)) / 0.85;
        vec3 wp = position;
        wp.xz += v0.xz * dragT;
        wp.y += v0.y * t - 4.905 * t * t;
        vWorldPos = wp;

        vec4 mv = modelViewMatrix * vec4(wp, 1.0);
        float aboveSea = smoothstep(-11.75, -11.30, wp.y);
        float distFade = 1.0 - smoothstep(135.0, 245.0, -mv.z);
        float lifeEnv = smoothstep(0.0, 0.09, phase) * (1.0 - smoothstep(0.78, 1.0, phase));
        vAlpha = aboveSea * distFade * lifeEnv * swellPulse * clamp(0.45 + 0.35 * energy, 0.0, 0.92);
        gl_PointSize = clamp((48.0 * aMeta.z * (0.75 + 0.35 * energy)) / max(1.0, -mv.z), 1.5, 11.5);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${Vn}
      uniform vec3 uSunColor;
      varying float vAlpha;
      varying vec3 vWorldPos;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25 || vAlpha <= 0.004) discard;
        float dropMask = exp(-r2 * 12.5);
        vec3 sprayCol = mix(uHorizonAntiColor, uHorizonSunColor, 0.48) * 1.38 + uSunColor * 0.55 + vec3(0.15);
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float aerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26));
        vec3 col = mix(clamp(sprayCol, vec3(0.0), vec3(5.5)), hazeCol, clamp(aerial, 0.0, 0.95));
        gl_FragColor = vec4(col, clamp(vAlpha * dropMask, 0.0, 0.88));
      }
    `}),Xt=new Gs(Pt,qt);Xt.renderOrder=4,Xt.frustumCulled=!1,t.add(Xt);const se=3200,re=new Yt;re.setAttribute("position",new Z(new Float32Array([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0]),3)),re.setAttribute("uv",new Z(new Float32Array([0,0,1,0,1,1,0,1]),2)),re.setIndex([0,1,2,0,2,3]);const Jt=new kp;Jt.index=re.index,Jt.attributes.position=re.attributes.position,Jt.attributes.uv=re.attributes.uv;const fe=new Float32Array(se*3),xe=new Float32Array(se*2);for(let j=0;j<se;j++)fe[j*3]=(nt(j,3.7)-.5)*92,fe[j*3+1]=(nt(j,11.9)-.5)*48,fe[j*3+2]=(nt(j,19.3)-.5)*92,xe[j*2]=nt(j,29.1),xe[j*2+1]=nt(j,43.7);Jt.setAttribute("aRainOffset",new Ua(fe,3)),Jt.setAttribute("aRainSeed",new Ua(xe,2)),Jt.instanceCount=se;const Ge=new E(0,2.5,8),Fe={...i,uCamCenter:{value:Ge}},Ae=new Oe({name:"NordicPhysicalRainStreaks",transparent:!0,depthWrite:!1,side:tn,uniforms:Fe,vertexShader:`
      attribute vec3 aRainOffset;
      attribute vec2 aRainSeed;
      uniform float uTime;
      uniform float uRainIntensity;
      uniform float uWindStrength;
      uniform vec2 uWindDir;
      uniform vec3 uCamCenter;
      varying vec2 vRainUv;
      varying float vRainAlpha;
      varying vec3 vWorldPos;

      void main() {
        vRainUv = uv;
        float rainAmt = clamp(uRainIntensity, 0.0, 1.0);
        float windStr = clamp(uWindStrength, 0.05, 1.35);
        vec2 wDir = normalize(uWindDir + vec2(1e-5, 0.0));
        // Terminal raindrop velocity (~21..28 m/s downward) visibly slanted by live North Sea wind gales!
        float fallSpeed = (20.5 + 8.0 * aRainSeed.x) * (0.82 + 0.30 * rainAmt);
        float gust = sin(uTime * (1.45 + 1.8 * windStr) + aRainSeed.y * 6.283) * (0.8 + 2.2 * windStr);
        float horizWindSpeed = 2.2 + 12.5 * windStr + 3.2 * rainAmt + gust;
        vec3 rainVel = vec3(wDir.x * horizWindSpeed, -fallSpeed, wDir.y * horizWindSpeed);

        vec3 boxSpan = vec3(92.0, 48.0, 92.0);
        vec3 moved = aRainOffset + rainVel * uTime;
        vec3 wrapped = mod(moved - uCamCenter + boxSpan * 0.5, boxSpan) - boxSpan * 0.5 + uCamCenter;

        // Suppress raindrops below the ocean surface (-11.5m)
        float aboveOcean = step(-11.35, wrapped.y);

        vec3 velDir = normalize(rainVel);
        vec3 toCam = cameraPosition - wrapped;
        float camDist = length(toCam);
        vec3 camDir = camDist > 1e-4 ? toCam / camDist : vec3(0.0, 0.0, 1.0);
        vec3 sideVec = cross(camDir, velDir);
        float sideLen = length(sideVec);
        sideVec = sideLen > 1e-4 ? sideVec / sideLen : vec3(1.0, 0.0, 0.0);

        // Motion-blurred raindrop streak length & crisp optical thickness
        float streakLen = (0.48 + 0.62 * rainAmt + 0.32 * aRainSeed.x) * aboveOcean;
        float streakWidth = clamp(0.011 + camDist * 0.00048, 0.011, 0.036) * aboveOcean;

        vec3 worldPt = wrapped + sideVec * (position.x * streakWidth) - velDir * (position.y * streakLen);
        vWorldPos = worldPt;

        // Smooth density ramp: fewer drops in light coastal sun-shower, full curtain in storm squall!
        float activeDrop = smoothstep(aRainSeed.y * 0.86, aRainSeed.y * 0.86 + 0.14, rainAmt);
        float nearClearFade = smoothstep(1.1, 3.2, camDist) * (1.0 - smoothstep(34.0, 46.0, camDist));
        vRainAlpha = activeDrop * nearClearFade * aboveOcean * (0.20 + 0.34 * rainAmt);

        gl_Position = projectionMatrix * viewMatrix * vec4(worldPt, 1.0);
      }
    `,fragmentShader:`
      ${Vn}
      uniform vec3 uSunColor;
      varying vec2 vRainUv;
      varying float vRainAlpha;
      varying vec3 vWorldPos;
      void main() {
        if (vRainAlpha <= 0.003) discard;
        float across = 1.0 - abs(vRainUv.x * 2.0 - 1.0);
        // Brighter leading droplet head at vRainUv.y ~ 0, tapering into a silky motion-blurred tail!
        float along = sin(vRainUv.y * 3.14159265) * (1.18 - 0.52 * vRainUv.y);
        float alpha = clamp(vRainAlpha * across * along, 0.0, 0.68);
        if (alpha <= 0.003) discard;

        vec3 skyTint =
          mix(uHorizonAntiColor, uHorizonSunColor, 0.42) * 1.35 +
          uSunColor * 0.48 +
          vec3(0.75, 0.88, 1.0) * uLightningFlash * 0.85 +
          vec3(0.18, 0.22, 0.26);
        gl_FragColor = vec4(clamp(skyTint, vec3(0.0), vec3(6.5)), alpha);
      }
    `}),ee=new Be(Jt,Ae);ee.renderOrder=6,ee.frustumCulled=!1,t.add(ee);const Xe=900,Pe=new Float32Array(Xe*3),sn=new Float32Array(Xe*2);for(let j=0;j<Xe;j++){let ut=0,Rt=0,zt=0;j<540?(ut=(nt(j,7.1)-.5)*44,zt=-12+(nt(j,15.9)-.5)*38,Rt=Math.max(ve+.14,Li(ut,zt)+.04)):(ut=(nt(j,23.4)-.5)*110,zt=-16+(nt(j,31.8)-.5)*110,Rt=ve+.14),Pe[j*3]=ut,Pe[j*3+1]=Rt,Pe[j*3+2]=zt,sn[j*2]=nt(j,47.2),sn[j*2+1]=nt(j,61.5)}const Nn=new Yt;Nn.setAttribute("position",new Z(Pe,3)),Nn.setAttribute("aSplashSeed",new Z(sn,2));const hn=new Oe({name:"NordicRaindropSurfaceSplashes",transparent:!0,depthWrite:!1,uniforms:Fe,vertexShader:`
      attribute vec2 aSplashSeed;
      uniform float uTime;
      uniform float uRainIntensity;
      varying float vPhase;
      varying float vActive;
      void main() {
        float rainAmt = clamp(uRainIntensity, 0.0, 1.0);
        float cycle = fract(aSplashSeed.x + uTime * (1.8 + 1.4 * aSplashSeed.y));
        vPhase = cycle;
        float active = smoothstep(aSplashSeed.y * 0.88, aSplashSeed.y * 0.88 + 0.12, rainAmt);
        vec3 wp = position;
        // Tiny crown bounce right on impact (first 35% of cycle)
        wp.y += sin(min(1.0, cycle * 2.8) * 3.14159265) * 0.09;
        vec4 mv = modelViewMatrix * vec4(wp, 1.0);
        float distFade = 1.0 - smoothstep(32.0, 62.0, -mv.z);
        vActive = active * distFade * (1.0 - smoothstep(0.42, 0.95, cycle)) * (0.35 + 0.45 * rainAmt);
        gl_PointSize = clamp((28.0 * (0.35 + cycle * 1.1)) / max(1.0, -mv.z), 1.5, 9.0);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${Vn}
      uniform vec3 uSunColor;
      varying float vPhase;
      varying float vActive;
      void main() {
        if (vActive <= 0.004) discard;
        vec2 d = gl_PointCoord - 0.5;
        float r = length(d) * 2.0;
        if (r > 1.0) discard;
        // Expanding water-crown ring + central micro-droplet!
        float ringR = clamp(0.25 + vPhase * 0.72, 0.25, 0.96);
        float ring = exp(-pow((r - ringR) / 0.22, 2.0));
        float centerDrop = exp(-r * r * 9.0) * (1.0 - vPhase);
        float shape = clamp(ring * 0.85 + centerDrop * 0.65, 0.0, 1.0);
        vec3 col = mix(uHorizonAntiColor, uHorizonSunColor, 0.46) * 1.35 + uSunColor * 0.52 + vec3(0.16);
        gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(4.5)), clamp(vActive * shape, 0.0, 0.78));
      }
    `}),Zn=new Gs(Nn,hn);Zn.renderOrder=5,Zn.frustumCulled=!1,t.add(Zn);const De=1100,je=new Float32Array(De*3),Mn=new Float32Array(De);for(let j=0;j<De;j++)je[j*3]=(nt(j,31.7)-.5)*76,je[j*3+1]=-9.5+nt(j,47.3)*32,je[j*3+2]=-22+nt(j,59.1)*64,Mn[j]=nt(j,73.9);const Ke=new Yt;Ke.setAttribute("position",new Z(je,3)),Ke.setAttribute("aSeed",new Z(Mn,1));const un={uTime:{value:0},uColor:i.uSunColor,uWindStrength:i.uWindStrength,uWindDir:i.uWindDir,uLightningFlash:i.uLightningFlash},ki=new Oe({transparent:!0,depthWrite:!1,blending:Do,uniforms:un,vertexShader:`
      attribute float aSeed;
      uniform float uTime;
      uniform float uWindStrength;
      uniform vec2 uWindDir;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        float windStr = clamp(uWindStrength, 0.05, 1.35);
        vec2 wDir = normalize(uWindDir + vec2(1e-5, 0.0));
        float driftSpeed = (0.95 + 6.4 * windStr) * (0.72 + 0.65 * aSeed);
        p.x = mod(p.x + 38.0 + uTime * wDir.x * driftSpeed, 76.0) - 38.0;
        // Coastal cliff updraft near the front jump-off rim (z ~ 2..10, |x| < 18)!
        float cliffUpdraft = exp(-pow((p.z - 5.0) / 8.5, 2.0)) * smoothstep(22.0, 4.0, abs(p.x));
        p.y += sin(uTime * (1.15 + 1.2 * windStr) + aSeed * 12.0 + p.x * 0.12) * 0.55 + cliffUpdraft * (1.8 + 1.6 * windStr + 1.4 * sin(uTime * 0.8 + aSeed * 6.28));
        p.z = mod(p.z + 22.0 + uTime * wDir.y * driftSpeed, 64.0) - 22.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((18.0 + 16.0 * aSeed) / max(1.0, -mv.z), 1.5, 5.8);
        vAlpha = (0.12 + 0.22 * aSeed) * (0.65 + 0.55 * windStr) * smoothstep(62.0, 6.0, -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uLightningFlash;
      varying float vAlpha;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
        float soft = exp(-r2 * 14.0);
        vec3 col = uColor * 0.88 + vec3(0.25) + vec3(0.70, 0.85, 1.0) * uLightningFlash * 0.65;
        gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(8.0)), vAlpha * soft);
      }
    `}),Sn=new Gs(Ke,ki);return Sn.renderOrder=5,Sn.frustumCulled=!1,t.add(Sn),{group:t,ocean:qn,update(j,ut){Ce.uTime.value=j,un.uTime.value=j,qn.update(j);const Rt=qn.params;Ot.uWaveEnergy.value=.45+Rt.waveAmplitude*(.55+.45*Rt.seaChoppiness),ut&&Ge.copy(ut);const zt=i.uRainIntensity.value>.005;ee.visible=zt,Zn.visible=zt}}}const xn={neckArch:.16,neckYaw:.08,headPitch:-.04,headYaw:.14,headRoll:-.08,earPerk:.76,earAsymmetry:.06,cheekNubFlare:.5,eyeYaw:.06,eyePitch:.02,pupilDilation:.76,blink:0,squint:0,jawOpen:0,teethExtension:0,tongueExtend:.12,tongueCurl:.08,wingUnfurl:.46,wingFlap:.08,wingSweep:-.05,wingCamber:.3,wingWristFold:0,wingTipLag:0,pelvicFinFlare:.9,dorsalSpineSplit:.22,spineArch:.08,spineTwist:.02,forelegStance:.1,hindlegStance:.06,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:.2,tailPitch:.26,tailCurl:.16,tailWaveAmp:0,tailWavePhase:0,rightTailFinFlare:.24,leftProstheticFinFlare:.24,autoSyncProstheticTail:!0,subtleBreathing:!0,alphaGlow:.08,biolumGlow:0,lightningCloak:0},dx=[{id:"hero-perch",label:"Hero Perch",subtitle:"Noble Alpha Sentinel",patch:{...xn}},{id:"gummy-smile",label:"Gummy Grin",subtitle:"Toothless Happy Smile",patch:{...xn,headYaw:.22,headPitch:-.06,headRoll:-.24,earPerk:.96,pupilDilation:.94,squint:.22,jawOpen:.34,teethExtension:0,tongueExtend:.58,tongueCurl:.26,tailYaw:.36}},{id:"courtship-cape",label:"Courtship Cape",subtitle:"Beach Wing-Display Dance",patch:{...xn,forelegStance:.52,neckArch:.48,headYaw:.28,headPitch:.08,headRoll:-.18,earPerk:1,pupilDilation:.96,jawOpen:.26,teethExtension:0,tongueExtend:.42,wingUnfurl:.96,wingFlap:.88,wingSweep:.44,wingCamber:.68,dorsalSpineSplit:.85}},{id:"curious-tilt",label:"Curious Tilt",subtitle:"Asymmetric Ear-Perk",patch:{...xn,headRoll:-.62,headYaw:.14,headPitch:.08,earPerk:.92,earAsymmetry:-.45,pupilDilation:.92,jawOpen:.05,teethExtension:0}},{id:"alpha-roar",label:"Alpha Roar",subtitle:"Split Spines & Cyan Fire",patch:{...xn,forelegStance:-.48,spineArch:.36,neckArch:-.22,headPitch:-.22,earPerk:.08,squint:.42,pupilDilation:.08,jawOpen:.88,teethExtension:1,tongueExtend:.52,tongueCurl:.46,wingUnfurl:.92,wingFlap:.46,wingSweep:.28,dorsalSpineSplit:1,alphaGlow:1,biolumGlow:.65,lightningCloak:.35}},{id:"lightning-storm",label:"Storm Skrill",subtitle:"Arc-Plasma Overload",patch:{...xn,forelegStance:-.35,wingUnfurl:.98,wingFlap:.62,wingCamber:.72,dorsalSpineSplit:1,pupilDilation:.16,jawOpen:.54,teethExtension:1,alphaGlow:1,biolumGlow:.92,lightningCloak:1}}];function Hs(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const px=new E(-.16,.985,.06).normalize(),fx=new E(.16,.985,.06).normalize(),Hu=new E().crossVectors(px,Vo).normalize(),mx=new E().crossVectors(Vo,Hu).normalize(),Wu=new E().crossVectors(fx,Go).normalize(),gx=new E().crossVectors(Go,Wu).normalize();class vx{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new zn;tmpQuat=new en;tmpQuatB=new en;tmpVecA=new E;tmpVecB=new E;tmpVecC=new E;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;prevHeadRoll=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...xn,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,xn),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.autoSyncProstheticTail&&(t.rightTailFinFlare!==void 0?this.state.leftProstheticFinFlare=t.rightTailFinFlare:t.leftProstheticFinFlare!==void 0?this.state.rightTailFinFlare=t.leftProstheticFinFlare:t.autoSyncProstheticTail===!0&&(this.state.leftProstheticFinFlare=this.state.rightTailFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0};const e=4.6,n=t%e,s=Math.floor(t/e);let o=0;n>3.85&&n<4.03?o=Math.sin((n-3.85)/.18*Math.PI):s%3===1&&n>4.12&&n<4.29&&(o=Math.sin((n-4.12)/.17*Math.PI));const a=(t+1.3)%6.2,r=a<.22?Math.sin(a/.22*Math.PI)*.085:0,l=(t+3.9)%7.4,c=l<.2?-Math.sin(l/.2*Math.PI)*.075:0,h=Math.sin(t*.72)*.032+Math.sin(t*1.95+1.1)*.014,u=Math.cos(t*.58+.4)*.022,d=Math.sin(t*1.15)*.025;return{autoBlink:o,earTwitchL:r,earTwitchR:c,gazeMicroX:h,gazeMicroY:u,pupilPulse:d}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new le().copy(this.asset.rootGroup.matrixWorld).invert(),g=new le().multiplyMatrices(f,c.parent.matrixWorld),v=new E().setFromMatrixPosition(new le().multiplyMatrices(g,new le().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),M=l.bindWorldPositions.get(n),_=new E().subVectors(p,m),x=new E().subVectors(M,p),y=_.length(),w=x.length(),A=M.clone();a&&(A.add(a),A.y=Math.max(M.y,A.y));const T=new E().subVectors(A,v),S=T.length(),b=(y+w)*.968,P=Math.abs(y-w)+.085,C=X.clamp(S,P,b),R=T.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),F=X.clamp((y*y+C*C-w*w)/(2*y*C),-1,1),k=Math.sqrt(Math.max(0,1-F*F)),N=v.clone().addScaledVector(R,y*F).addScaledVector(L,y*k),D=v.clone().addScaledVector(R,C),W=new E().subVectors(N,v).normalize(),O=new E().subVectors(D,N).normalize(),q=new en().setFromUnitVectors(_.clone().normalize(),W),K=new en().setFromUnitVectors(x.clone().normalize(),O),Y=new en().setFromRotationMatrix(g);c.quaternion.copy(Y).invert().multiply(q),h.quaternion.copy(q).invert().multiply(K),u.quaternion.copy(K).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;const o=68,a=11.5,r=X.clamp(-n*.055,-.28,.28),l=X.clamp(-s*.055,-.28,.28);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=X.clamp(e.airborneFactor,0,1),s=this.sampleLivingIdleMicros(t),o=e.subtleBreathing?Math.sin(t*1.55)*.8+Math.sin(t*3.1)*.2:0,a=e.subtleBreathing?Math.sin(t*1.15-.5)*.02:0,r=Hs(.02,.55,Math.abs(e.legFlightTuck))*(1-n),l=Math.max(n,r),c=1-l,h=e.forelegStance>=0?e.forelegStance*.055:e.forelegStance*.275,u=e.hindlegStance>=0?e.hindlegStance*.048:e.hindlegStance*.245,d=.52*h+.48*u,f=X.clamp((u-h)*.44,-.22,.24),g=X.clamp(e.limbStride,-1,1)*.045*c,v=r*.34;this.setBonePose("root",f*c,g,0,"XYZ",0,d*c+v+o*.004,0);const m=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+m,-e.spineTwist*.05-g*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+o*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+o*.008,e.spineTwist*.07,0),this.setBonePose("chest",-f*.32*c+o*.01-m*.6,e.spineTwist*.07+g*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const p=X.clamp(e.limbStride,-1,1),M=Math.max(0,-e.forelegStance),_=Math.max(0,-e.hindlegStance);for(const Q of["L","R"]){const st=Q==="L"?1:-1,$=this.asset.rig.boneMap.get(`scapula_${Q}`);if(this.setBonePose(`scapula_${Q}`,0,0,0),$.updateMatrixWorld(!0),l<.999){const tt=st*p*.23,yt=-st*p*.22,rt=Math.max(0,st*p)*Math.sin(Math.abs(p)*Math.PI)*.042,z=Math.max(0,-st*p)*Math.sin(Math.abs(p)*Math.PI)*.038,xt=new E(st*M*.055,rt,tt+M*.045),at=new E(st*_*.05,z,yt-_*.04);this.asset.rootGroup.updateMatrixWorld(!1);const St=new le().copy(this.asset.rootGroup.matrixWorld).invert(),dt=this.asset.rig.boneMap.get(`shoulder_${Q}`);dt.position.copy(this.restPos.get(`shoulder_${Q}`)),dt.updateMatrixWorld(!0);const Dt=this.tmpVecC.setFromMatrixPosition(dt.matrixWorld).applyMatrix4(St),At=this.asset.rig.bindWorldPositions.get(`wrist_${Q}`).clone().add(xt),B=Dt.distanceTo(At)-.675;B>0&&(this.setBonePose(`scapula_${Q}`,0,0,0,"XYZ",0,-B*1.08*c,0),$.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${Q}`,`elbow_${Q}`,`wrist_${Q}`,`forepaw_${Q}`,this.tmpVecA.set(st*(.2+.16*M),-.08+.18*M,-1).normalize(),xt,rt*2.2),this.solvePlantedLimbIK(`hip_${Q}`,`knee_${Q}`,`ankle_${Q}`,`hindpaw_${Q}`,this.tmpVecB.set(st*(.2+.14*_),.14+.16*_,1).normalize(),at,z*2)}if(l>.001){const tt=X.clamp(e.legFlightTuck,-1,1),yt=e.wingFlap*.082*l,rt=Math.sin(t*2.05+(Q==="L"?0:1.25))*.052*l,z=Math.cos(t*1.58+(Q==="L"?.7:2.2))*.046*l,xt=(tt>=0?.86*tt:-.44*-tt)+yt*.65+rt*.5,at=tt>=0?-st*.06*tt:0,St=(tt>=0?st*.09*tt:st*.05*-tt)+st*z*.35,dt=(tt>=0?.34*tt:.28*-tt)-yt*.55+z*.65,Dt=(tt>=0?.4*tt:.2*-tt)+rt*.7,At=(tt>=0?.36*tt:-.1*-tt)+z*.55,B=(tt>=0?1.16*tt:-.48*-tt)+yt*.55+z*.55,I=(tt>=0?-st*.05*tt:0)+st*rt*.25,it=(tt>=0?st*.07*tt:st*.05*-tt)+st*rt*.3,pt=(tt>=0?-.66*tt:.34*-tt)-yt*.5-rt*.65,_t=(tt>=0?.78*tt:-.16*-tt)+yt*.45+z*.75,Mt=(tt>=0?.62*tt:.16*-tt)+rt*.6,kt=(Et,Lt,Ft,Ct)=>{const Nt=this.asset.rig.boneMap.get(Et);this.tmpEuler.set(Lt,Ft,Ct,"XYZ"),this.tmpQuat.copy(this.restQuat.get(Et)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),l>=.999?(Nt.position.copy(this.restPos.get(Et)),Nt.quaternion.copy(this.tmpQuat)):Nt.quaternion.slerp(this.tmpQuat,l)};kt(`shoulder_${Q}`,xt,at,St),kt(`elbow_${Q}`,dt,0,0),kt(`wrist_${Q}`,Dt,0,0),kt(`forepaw_${Q}`,At,0,0),kt(`hip_${Q}`,B,I,it),kt(`knee_${Q}`,pt,0,0),kt(`ankle_${Q}`,_t,0,0),kt(`hindpaw_${Q}`,Mt,0,0)}}const x=Hs(.28,.85,e.jawOpen),y=-e.neckArch*.12-o*.009-x*.035,w=e.neckYaw*.13;this.setBonePose("neck_1",y+e.headPitch*.04,w+e.headYaw*.05,e.headRoll*.04,"YXZ"),this.setBonePose("neck_2",y+e.headPitch*.07,w+e.headYaw*.09,e.headRoll*.07,"YXZ"),this.setBonePose("neck_3",y*.9+e.headPitch*.1,w+e.headYaw*.14,e.headRoll*.11,"YXZ"),this.setBonePose("neck_4",y*.8+e.headPitch*.14,w*.85+e.headYaw*.19,e.headRoll*.15,"YXZ"),this.setBonePose("head",e.headPitch*.36+o*.01-x*.05,e.headYaw*.46,e.headRoll*.36,"YXZ");const A=X.clamp(e.earPerk-x*.28,0,1),T=(A-.5)*.72,S=e.headRoll*.18;for(const Q of["L","R"]){const st=Q==="L"?1:-1,$=Q==="L"?s.earTwitchL:s.earTwitchR,tt=st*(e.earAsymmetry*.28+S)+$,yt=T+tt+this.earLagPitch*.65,rt=(1-A)*.36-st*this.earLagYaw*.55;this.setBonePose(`ear_${Q}_1`,yt*.65,-st*rt,st*yt*.25,"YXZ"),this.setBonePose(`ear_${Q}_2`,yt*.36+this.earLagPitch*.35,-st*rt*.35,0,"YXZ"),this.setBonePose(`ear_${Q}_3`,yt*.24+this.earLagPitch*.25,0,0,"YXZ");const xt=(X.clamp(e.cheekNubFlare+x*.22,0,1)-.5)*.44;this.setBonePose(`cheekUpper_${Q}_1`,xt*.3,-st*(xt*.55+this.earLagYaw*.25),0),this.setBonePose(`cheekLower_${Q}_1`,xt*.2,-st*(xt*.45+this.earLagYaw*.2),0)}const b=X.clamp(e.eyeYaw+s.gazeMicroX,-1,1),P=X.clamp(e.eyePitch+s.gazeMicroY,-1,1),C=Math.max(e.blink,s.autoBlink*(1-e.blink)),R=X.clamp(e.squint+x*.26,0,1);for(const Q of["L","R"]){const st=Q==="L"?Hu:Wu,$=Q==="L"?mx:gx;this.tmpQuat.setFromAxisAngle($,b*.34),this.tmpQuatB.setFromAxisAngle(st,-P*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${Q}`,this.tmpQuat);const tt=P>0?-P*.14:-P*.22,yt=P>0?P*.12:P*.08,rt=X.clamp(Math.max(C,R*.52)+tt*(1-C),-.14,1),z=X.clamp(Math.max(C,R*.6)+yt*(1-C),-.1,1);this.tmpQuat.setFromAxisAngle(st,rt*.72),this.setBoneAxisQuat(`eyelidUpper_${Q}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(st,-z*.64),this.setBoneAxisQuat(`eyelidLower_${Q}`,this.tmpQuat)}const L=X.clamp(e.pupilDilation+s.pupilPulse-x*.25,0,1);this.asset.materials.eyeMaterials.uniforms.uPupilDilation.value=L,this.asset.materials.eyeMaterials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uTime.value=t,this.asset.materials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uBiolumGlow.value=e.biolumGlow,this.asset.materials.uniforms.uLightningCloak.value=e.lightningCloak,this.setBonePose("jaw",e.jawOpen*.66,0,0);const F=.28+.72*Hs(0,.14,e.jawOpen),N=1-e.teethExtension*F;this.setBonePose("teethUpper",0,0,0,"XYZ",0,N*.025,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-N*.023,0);const D=Hs(.06,.48,e.jawOpen),W=e.tongueExtend*.044*D;if(e.tongueCurl>=0){const Q=-e.tongueCurl*(.018+.2*D);this.setBonePose("tongue_1",Q*.35,0,0,"XYZ",0,0,W),this.setBonePose("tongue_2",Q*.65,0,0),this.setBonePose("tongue_3",Q*.95,0,0),this.setBonePose("tongue_4",Q*1.15,0,0)}else{const Q=D*Hs(.2,.95,e.tongueExtend),st=-e.tongueCurl*Q;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,W),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",st*.13,0,0),this.setBonePose("tongue_4",st*.2,0,0)}const O=X.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),q=X.lerp(.11,.74,l);for(const Q of["L","R"]){const st=Q==="L"?1:-1,$=e.wingFlap*(.25+.75*e.wingUnfurl),tt=st*($>=0?$*.74:$*q),yt=$<0?$*X.lerp(.04,.26,n)*e.wingUnfurl:0,rt=st*e.wingSweep*.44,z=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${Q}`,.05*O,st*.12*O,tt*.18,"YXZ"),this.setBonePose(`wingShoulder_${Q}`,e.wingCamber*.09,st*.82*O+rt,tt-st*.22*O,"YXZ"),this.setBonePose(`wingElbow_${Q}`,0,-st*(1.42*O+z*.45),st*.86*O+tt*.22+st*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${Q}`,-.35*O-e.wingCamber*.18,st*(1.32*O+z*.55)+rt*.35,st*.12*O+st*yt*.3+st*e.wingTipLag*.26,"YXZ");for(let at=1;at<=6;at++){const St=(at-1)/5,dt=st*(-.38+St*.58)*O,Dt=-e.wingCamber*(.14+.18*(1-St))-.1*O,At=e.wingTipLag*(.18+.26*St),B=$>=0?-$*.22:-$*X.lerp(.06*Math.pow(Math.max(0,(St-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${Q}_${at}_a`,Dt,dt,st*(B*.4+At*.45),"YXZ"),this.setBonePose(`wingFinger_${Q}_${at}_b`,Dt*.5,dt*.25,st*(B*.7+At*.75),"YXZ")}const xt=1-e.pelvicFinFlare;for(let at=1;at<=3;at++)this.setBonePose(`pelvicFin_${Q}_${at}`,0,0,-st*xt*1.18,"XYZ")}for(const Q of this.asset.dorsalSpineMeshes)Q.morphTargetInfluences&&Q.morphTargetInfluences.length>0&&(Q.morphTargetInfluences[0]=e.dorsalSpineSplit);const K=e.autoSyncProstheticTail?e.rightTailFinFlare:e.leftProstheticFinFlare,Y=Math.min(e.rightTailFinFlare,K),V=Y<0?Math.sin(Math.abs(Y)*1.38)*.53:.02;for(let Q=1;Q<=10;Q++){const st=Q/10,$=Q>=9,tt=$?0:e.tailYaw*.13+e.tailCurl*.18*Math.pow(st,1.4)+a*st,yt=$?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-Q*.48)*.085*(.4+.6*st);let rt=$?0:e.tailPitch*.088*(.45+st)+yt;if(!$&&n<.85&&Q>=2&&Q<=8){const z=Math.max(0,(V-.05)*.135)*(1-n);rt<z&&(rt=X.lerp(rt,z,Hs(1,5,Q)))}if(this.setBonePose(`tail_${Q}`,rt,tt,0,"YXZ"),n<.85){const z=this.asset.rig.boneMap.get(`tail_${Q}`);z.parent.updateMatrixWorld(!0),z.updateMatrixWorld(!0);const xt=this.tmpVecC.setFromMatrixPosition(z.matrixWorld),St=Li(xt.x,xt.z)+(Q>=8?.055+V:.065);if(xt.y<St&&Q>1){const dt=z.parent,Dt=z.position.length(),At=Math.min(.45,(St-xt.y)/Math.max(.15,Dt))*(1-n);this.tmpEuler.set(At,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),dt.quaternion.multiply(this.tmpQuat),dt.updateMatrixWorld(!0)}}}const H=1.38,J=e.rightTailFinFlare*H,ht=K*H;this.setBonePose("tailFinHinge_R",0,0,-J,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,ht,"XYZ");for(let Q=1;Q<=5;Q++)this.setBonePose(`tailFin_R_${Q}`,0,0,0),this.setBonePose(`tailFin_L_${Q}`,0,0,0);this.setBonePose("prostheticCollar",0,0,ht*.22),this.setBonePose("prostheticRod",0,0,0),this.asset.rig.rootBone.updateMatrixWorld(!0)}}function Vu(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Ch(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Ms(i){const t=Math.max(0,Math.min(1,(i-1.44)/.625)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.78)/.22),2))),n=.054*Ch(t,.36,.23),s=-.046*Vu(.5,.88,t),o=.013*Ch(t,.77,.13);return(.204+n+s+o)*e}function Ji(i){const t=Math.max(0,Math.min(1,(i-1.55)/.5149999999999999)),e=.022*Math.pow(1-Vu(0,.44,t),1.55),n=-.008*Math.sin(t*Math.PI);return 1.482+e+n}const Gu=[{rootX:.018,rootY:.116,rootZ:-3.34,tipX:.34,tipY:.126,tipZ:-3.32},{rootX:.018,rootY:.116,rootZ:-3.5,tipX:.45,tipY:.13,tipZ:-3.52},{rootX:.018,rootY:.116,rootZ:-3.66,tipX:.44,tipY:.13,tipZ:-3.74},{rootX:.018,rootY:.116,rootZ:-3.82,tipX:.34,tipY:.125,tipZ:-3.96},{rootX:.018,rootY:.116,rootZ:-3.97,tipX:.18,tipY:.12,tipZ:-4.14}],Xu=[{parentBone:"tail_1",rootX:.155,rootY:.7,rootZ:-.78,tipX:.37,tipY:.68,tipZ:-.92},{parentBone:"tail_2",rootX:.13,rootY:.62,rootZ:-1.02,tipX:.42,tipY:.59,tipZ:-1.19},{parentBone:"tail_2",rootX:.105,rootY:.55,rootZ:-1.24,tipX:.31,tipY:.52,tipZ:-1.42}],Xo=new E(.415,.035,.909).normalize(),Yo=new E(-.415,.035,.909).normalize(),Oa=.075;function Yu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.292:.274),o=t?.935:-.51,a=.036,r=t?.074:.069,l=[],c=[-.84,-.28,.28,.84];for(let h=0;h<4;h++){const u=c[h]+e*.05,d=h===1||h===2,f=(t?.106:.098)*(d?1:.86),g=(t?.054:.05)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.032,dirX:Math.sin(u)*.9,dirZ:Math.cos(u),toeLength:f,baseRadius:d?.037:.033,tipRadius:d?.024:.021,clawLength:g})}return l}function xx(){const i=[{name:"root",parent:null,worldPos:[0,.79,.11]},{name:"pelvis",parent:"root",worldPos:[0,.77,-.5]},{name:"spine_1",parent:"root",worldPos:[0,.78,.13]},{name:"spine_2",parent:"spine_1",worldPos:[0,.84,.46]},{name:"chest",parent:"spine_2",worldPos:[0,.91,.79]},{name:"neck_1",parent:"chest",worldPos:[0,1.04,.99]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.19,1.14]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.35,1.28]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.47,1.4]},{name:"head",parent:"neck_4",worldPos:[0,1.535,1.51]},{name:"eye_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eye_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidUpper_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidLower_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidLower_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"teethUpper",parent:"head",worldPos:[0,1.495,1.8]},{name:"jaw",parent:"head",worldPos:[0,1.49,1.55]},{name:"teethLower",parent:"jaw",worldPos:[0,1.472,1.8]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.472,1.62]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.472,1.72]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.472,1.82]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.47,1.91]},{name:"ear_L_1",parent:"head",worldPos:[.118,1.665,1.48]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.142,1.748,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.156,1.815,1.29]},{name:"ear_R_1",parent:"head",worldPos:[-.118,1.665,1.48]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.142,1.748,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.156,1.815,1.29]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.222,1.568,1.49]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.268,1.592,1.4]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.222,1.568,1.49]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.268,1.592,1.4]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.2,.87,.81]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.232,.75,.83]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.278,.435,.74]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.288,.142,.87]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.292,.04,.965]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.192,.71,-.5]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.256,.425,-.32]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.27,.215,-.61]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.274,.04,-.475]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.21,.96,.69]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.34,1,.67]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.88,1.05,.46]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.56,1.11,.86]}),[{mid:[n*1.48,1.08,.16],tip:[n*1.4,.99,-.6]},{mid:[n*1.84,1.09,.22],tip:[n*2.04,1,-.56]},{mid:[n*2.18,1.11,.33],tip:[n*2.62,1.02,-.4]},{mid:[n*2.48,1.13,.48],tip:[n*3.14,1.05,-.14]},{mid:[n*2.78,1.15,.68],tip:[n*3.54,1.08,.22]},{mid:[n*2.94,1.17,.86],tip:[n*3.9,1.12,.7]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.72,-.76],[0,.63,-1.08],[0,.5,-1.43],[0,.36,-1.8],[0,.24,-2.18],[0,.16,-2.56],[0,.12,-2.94],[0,.116,-3.3],[0,.116,-3.66],[0,.116,-4.06]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;Xu.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.02,.116,-3.65]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.02,.116,-3.65]});for(const e of["L","R"]){const n=e==="L"?1:-1;Gu.forEach((s,o)=>{i.push({name:`tailFin_${e}_${o+1}`,parent:`tailFinHinge_${e}`,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i}function _x(){const i=xx(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new Vl;c.name=l.name;const h=new E(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new Ya(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}const pn={neckArch:.24,neckYaw:-.1,headPitch:-.02,headYaw:-.18,headRoll:.16,earPerk:.82,earAsymmetry:.1,cheekNubFlare:.52,eyeYaw:-.08,eyePitch:.04,pupilDilation:.84,blink:0,squint:.08,jawOpen:0,teethExtension:0,tongueExtend:.1,tongueCurl:.05,wingUnfurl:.36,wingFlap:.06,wingSweep:-.08,wingCamber:.28,wingWristFold:0,wingTipLag:0,coyWingVeil:0,pelvicFinFlare:.88,dorsalSailFlex:.24,spineArch:.12,spineTwist:-.04,forelegStance:.14,hindlegStance:.08,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:-.26,tailPitch:.24,tailCurl:-.24,tailWaveAmp:0,tailWavePhase:0,rightHeartFinFlare:.18,leftHeartFinFlare:.18,syncHeartTailFlukes:!0,subtleBreathing:!0,iridescentShimmer:.78,pastelTint:.78,radiantGlow:.34,biolumGlow:0,plasmaGlow:.04,thermalCloak:0},Mx=[{id:"serene-mate",label:"Serene Mate",subtitle:"Sweet Gaze & Heart Tail",patch:{...pn}},{id:"curious-cat",label:"Curious Tilt",subtitle:"Adorable Head-Roll & Big Eyes",patch:{...pn,headRoll:.68,headPitch:.1,headYaw:-.06,earPerk:.98,earAsymmetry:.42,pupilDilation:.96,squint:0,jawOpen:.06,teethExtension:0,coyWingVeil:0,thermalCloak:0,plasmaGlow:.08}},{id:"happy-purr",label:"Happy Purr",subtitle:"Blissful Feline Smile",patch:{...pn,neckArch:.42,neckYaw:-.22,headYaw:-.28,headPitch:-.1,headRoll:.28,earPerk:.66,squint:.68,blink:.22,pupilDilation:.9,jawOpen:.14,teethExtension:0,tongueExtend:.35,tailYaw:-.45,tailCurl:-.48,rightHeartFinFlare:.04,leftHeartFinFlare:.04,coyWingVeil:0,thermalCloak:0,iridescentShimmer:.95}},{id:"coy-wing-veil",label:"Coy Wing Peek",subtitle:"Shy Wing-Curtain Pose",patch:{...pn,headYaw:-.26,headPitch:-.12,headRoll:.34,eyeYaw:.22,eyePitch:.14,pupilDilation:.88,earPerk:.58,coyWingVeil:.92,wingUnfurl:.52,thermalCloak:0}},{id:"hidden-world-biolum",label:"Hidden World Glow",subtitle:"Neon Rose & Cyan Filigree",patch:{...pn,wingUnfurl:.78,wingFlap:.22,neckArch:.34,headRoll:.22,pupilDilation:.94,iridescentShimmer:.96,radiantGlow:.64,biolumGlow:.96,plasmaGlow:.42,thermalCloak:0}},{id:"mirror-cloak",label:"Mirror Cloak",subtitle:"Plasma Silicate Stealth",patch:{...pn,wingUnfurl:.72,wingFlap:.24,neckArch:.3,headPitch:.12,pupilDilation:.62,coyWingVeil:0,plasmaGlow:.78,iridescentShimmer:1,thermalCloak:.86}},{id:"strike-hiss",label:"Strike Hiss",subtitle:"Fangs & Orchid Plasma",patch:{...pn,forelegStance:-.55,spineArch:.42,neckArch:-.18,headPitch:-.14,headRoll:-.08,earPerk:.06,squint:.48,pupilDilation:.06,jawOpen:.76,teethExtension:1,tongueExtend:.48,tongueCurl:.45,wingUnfurl:.84,wingFlap:.38,wingSweep:.32,coyWingVeil:0,dorsalSailFlex:1,plasmaGlow:.92,thermalCloak:0}}];function Ws(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const wx=new E(-.19,.98,.06).normalize(),yx=new E(.19,.98,.06).normalize(),$u=new E().crossVectors(wx,Xo).normalize(),bx=new E().crossVectors(Xo,$u).normalize(),qu=new E().crossVectors(yx,Yo).normalize(),Sx=new E().crossVectors(Yo,qu).normalize();class Ax{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new zn;tmpQuat=new en;tmpQuatB=new en;tmpVecA=new E;tmpVecB=new E;tmpVecC=new E;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...pn,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,pn),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.syncHeartTailFlukes&&(t.rightHeartFinFlare!==void 0?this.state.leftHeartFinFlare=t.rightHeartFinFlare:t.leftHeartFinFlare!==void 0?this.state.rightHeartFinFlare=t.leftHeartFinFlare:t.syncHeartTailFlukes===!0&&(this.state.leftHeartFinFlare=this.state.rightHeartFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingFelineIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0,felineHeadMicroRoll:0};const e=(t+2.15)%4.35;let n=0;e<.16?n=Math.sin(e/.16*Math.PI):e>.25&&e<.4&&Math.floor((t+2.15)/4.35)%3===1&&(n=Math.sin((e-.25)/.15*Math.PI));const s=(t+.8)%5.6,o=s<.2?Math.sin(s/.2*Math.PI)*.095:0,a=(t+3.2)%6.8,r=a<.18?-Math.sin(a/.18*Math.PI)*.085:0,l=Math.sin(t*.68+1.4)*.03+Math.sin(t*1.85)*.012,c=Math.cos(t*.54+2.1)*.022,h=Math.sin(t*1.25+.8)*.028,u=Math.sin(t*.62+.7)*.026;return{autoBlink:n,earTwitchL:o,earTwitchR:r,gazeMicroX:l,gazeMicroY:c,pupilPulse:h,felineHeadMicroRoll:u}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new le().copy(this.asset.rootGroup.matrixWorld).invert(),g=new le().multiplyMatrices(f,c.parent.matrixWorld),v=new E().setFromMatrixPosition(new le().multiplyMatrices(g,new le().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),M=l.bindWorldPositions.get(n),_=new E().subVectors(p,m),x=new E().subVectors(M,p),y=_.length(),w=x.length(),A=M.clone();a&&(A.add(a),A.y=Math.max(M.y,A.y));const T=new E().subVectors(A,v),S=T.length(),b=(y+w)*.968,P=Math.abs(y-w)+.08,C=X.clamp(S,P,b),R=T.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),F=X.clamp((y*y+C*C-w*w)/(2*y*C),-1,1),k=Math.sqrt(Math.max(0,1-F*F)),N=v.clone().addScaledVector(R,y*F).addScaledVector(L,y*k),D=v.clone().addScaledVector(R,C),W=new E().subVectors(N,v).normalize(),O=new E().subVectors(D,N).normalize(),q=new en().setFromUnitVectors(_.clone().normalize(),W),K=new en().setFromUnitVectors(x.clone().normalize(),O),Y=new en().setFromRotationMatrix(g);c.quaternion.copy(Y).invert().multiply(q),h.quaternion.copy(q).invert().multiply(K),u.quaternion.copy(K).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;const o=64,a=10.8,r=X.clamp(-n*.06,-.3,.3),l=X.clamp(-s*.06,-.3,.3);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=X.clamp(e.airborneFactor,0,1),s=this.sampleLivingFelineIdleMicros(t),o=e.subtleBreathing&&e.squint>.35?Math.sin(t*24)*.08*e.squint:0,a=e.subtleBreathing?Math.sin(t*1.68+.9)*.8+Math.sin(t*3.36+.9)*.2+o:0,r=e.subtleBreathing?Math.sin(t*1.28+1.2)*.026:0,l=Ws(.02,.55,Math.abs(e.legFlightTuck))*(1-n),c=Math.max(n,l),h=1-c,u=e.forelegStance>=0?e.forelegStance*.05:e.forelegStance*.255,d=e.hindlegStance>=0?e.hindlegStance*.044:e.hindlegStance*.23,f=.52*u+.48*d,g=X.clamp((d-u)*.44,-.22,.24),v=X.clamp(e.limbStride,-1,1)*.045*h,m=l*.34;this.setBonePose("root",g*h,v,0,"XYZ",0,f*h+m+a*.004,0);const p=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+p,-e.spineTwist*.05-v*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+a*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+a*.008,e.spineTwist*.07,0),this.setBonePose("chest",-g*.32*h+a*.01-p*.6,e.spineTwist*.07+v*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const M=X.clamp(e.limbStride,-1,1),_=Math.max(0,-e.forelegStance),x=Math.max(0,-e.hindlegStance);for(const $ of["L","R"]){const tt=$==="L"?1:-1,yt=this.asset.rig.boneMap.get(`scapula_${$}`);if(this.setBonePose(`scapula_${$}`,0,0,0),yt.updateMatrixWorld(!0),c<.999){const rt=tt*M*.21,z=-tt*M*.2,xt=Math.max(0,tt*M)*Math.sin(Math.abs(M)*Math.PI)*.038,at=Math.max(0,-tt*M)*Math.sin(Math.abs(M)*Math.PI)*.034,St=new E(tt*_*.05,xt,rt+_*.04),dt=new E(tt*x*.045,at,z-x*.036);this.asset.rootGroup.updateMatrixWorld(!1);const Dt=new le().copy(this.asset.rootGroup.matrixWorld).invert(),At=this.asset.rig.boneMap.get(`shoulder_${$}`);At.position.copy(this.restPos.get(`shoulder_${$}`)),At.updateMatrixWorld(!0);const B=this.tmpVecC.setFromMatrixPosition(At.matrixWorld).applyMatrix4(Dt),I=this.asset.rig.bindWorldPositions.get(`wrist_${$}`).clone().add(St),it=B.distanceTo(I)-.615;it>0&&(this.setBonePose(`scapula_${$}`,0,0,0,"XYZ",0,-it*1.08*h,0),yt.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${$}`,`elbow_${$}`,`wrist_${$}`,`forepaw_${$}`,this.tmpVecA.set(tt*(.2+.16*_),-.08+.18*_,-1).normalize(),St,xt*2.2),this.solvePlantedLimbIK(`hip_${$}`,`knee_${$}`,`ankle_${$}`,`hindpaw_${$}`,this.tmpVecB.set(tt*(.2+.14*x),.14+.16*x,1).normalize(),dt,at*2)}if(c>.001){const rt=X.clamp(e.legFlightTuck,-1,1),z=e.wingFlap*.075*c,xt=Math.sin(t*2.15+($==="L"?0:1.15))*.048*c,at=Math.cos(t*1.65+($==="L"?.6:2.1))*.042*c,St=(rt>=0?.88*rt:-.44*-rt)+z*.65+xt*.5,dt=rt>=0?-tt*.06*rt:0,Dt=(rt>=0?tt*.09*rt:tt*.05*-rt)+tt*at*.35,At=(rt>=0?.36*rt:.28*-rt)-z*.55+at*.65,B=(rt>=0?.42*rt:.2*-rt)+xt*.7,I=(rt>=0?.38*rt:-.1*-rt)+at*.55,it=(rt>=0?1.18*rt:-.48*-rt)+z*.55+at*.55,pt=(rt>=0?-tt*.05*rt:0)+tt*xt*.25,_t=(rt>=0?tt*.07*rt:tt*.05*-rt)+tt*xt*.3,Mt=(rt>=0?-.68*rt:.34*-rt)-z*.5-xt*.65,kt=(rt>=0?.82*rt:-.16*-rt)+z*.45+at*.75,Et=(rt>=0?.64*rt:.16*-rt)+xt*.6,Lt=(Ft,Ct,Nt,Qt)=>{const ie=this.asset.rig.boneMap.get(Ft);this.tmpEuler.set(Ct,Nt,Qt,"XYZ"),this.tmpQuat.copy(this.restQuat.get(Ft)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),c>=.999?(ie.position.copy(this.restPos.get(Ft)),ie.quaternion.copy(this.tmpQuat)):ie.quaternion.slerp(this.tmpQuat,c)};Lt(`shoulder_${$}`,St,dt,Dt),Lt(`elbow_${$}`,At,0,0),Lt(`wrist_${$}`,B,0,0),Lt(`forepaw_${$}`,I,0,0),Lt(`hip_${$}`,it,pt,_t),Lt(`knee_${$}`,Mt,0,0),Lt(`ankle_${$}`,kt,0,0),Lt(`hindpaw_${$}`,Et,0,0)}}const y=Ws(.32,.85,e.jawOpen),w=e.headRoll+s.felineHeadMicroRoll*(1-n),A=-e.neckArch*.12-a*.009-y*.032,T=e.neckYaw*.14;this.setBonePose("neck_1",A+e.headPitch*.04,T+e.headYaw*.05,w*.05,"YXZ"),this.setBonePose("neck_2",A+e.headPitch*.07,T+e.headYaw*.09,w*.08,"YXZ"),this.setBonePose("neck_3",A*.9+e.headPitch*.11,T+e.headYaw*.14,w*.12,"YXZ"),this.setBonePose("neck_4",A*.8+e.headPitch*.15,T*.85+e.headYaw*.19,w*.16,"YXZ"),this.setBonePose("head",e.headPitch*.36+a*.01-y*.045,e.headYaw*.46,w*.4,"YXZ");const S=X.clamp(e.earPerk-y*.32,0,1),b=(S-.5)*.68,P=w*.2;for(const $ of["L","R"]){const tt=$==="L"?1:-1,yt=$==="L"?s.earTwitchL:s.earTwitchR,rt=tt*(e.earAsymmetry*.28+P)+yt,z=b+rt+this.earLagPitch*.65,xt=(1-S)*.32-tt*this.earLagYaw*.5;this.setBonePose(`ear_${$}_1`,z*.6,-tt*xt,tt*z*.22,"YXZ"),this.setBonePose(`ear_${$}_2`,z*.34+this.earLagPitch*.32,-tt*xt*.32,0,"YXZ"),this.setBonePose(`ear_${$}_3`,z*.22+this.earLagPitch*.22,0,0,"YXZ");const at=(X.clamp(e.cheekNubFlare+y*.2,0,1)-.5)*.4;this.setBonePose(`cheekUpper_${$}_1`,at*.28,-tt*(at*.5+this.earLagYaw*.22),0)}const C=X.clamp(e.eyeYaw+s.gazeMicroX,-1,1),R=X.clamp(e.eyePitch+s.gazeMicroY,-1,1),L=Math.max(e.blink,s.autoBlink*(1-e.blink)),F=X.clamp(e.squint+y*.24,0,1);for(const $ of["L","R"]){const tt=$==="L"?$u:qu,yt=$==="L"?bx:Sx;this.tmpQuat.setFromAxisAngle(yt,C*.34),this.tmpQuatB.setFromAxisAngle(tt,-R*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${$}`,this.tmpQuat);const rt=R>0?-R*.14:-R*.22,z=R>0?R*.12:R*.08,xt=X.clamp(Math.max(L,F*.54)+rt*(1-L),-.14,1),at=X.clamp(Math.max(L,F*.62)+z*(1-L),-.1,1);this.tmpQuat.setFromAxisAngle(tt,xt*.72),this.setBoneAxisQuat(`eyelidUpper_${$}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(tt,-at*.64),this.setBoneAxisQuat(`eyelidLower_${$}`,this.tmpQuat)}const k=X.clamp(e.pupilDilation+s.pupilPulse-y*.28,0,1),N=this.asset.materials;N.eyeMaterials.uniforms.uPupilDilation.value=k,N.eyeMaterials.uniforms.uBiolumGlow.value=e.biolumGlow,N.eyeMaterials.uniforms.uPlasmaGlow.value=e.plasmaGlow,N.eyeMaterials.uniforms.uThermalCloak.value=e.thermalCloak,N.uniforms.uTime.value=t,N.uniforms.uIridescentShimmer.value=e.iridescentShimmer,N.uniforms.uPastelTint.value=e.pastelTint,N.uniforms.uRadiantGlow.value=e.radiantGlow,N.uniforms.uBiolumGlow.value=e.biolumGlow,N.uniforms.uPlasmaGlow.value=e.plasmaGlow,N.uniforms.uThermalCloak.value=e.thermalCloak;const D=N.syncCloakTransparency(e.thermalCloak);for(const $ of this.asset.hullDepthMeshes)$.visible=D;this.setBonePose("jaw",e.jawOpen*.64,0,0);const W=.28+.72*Ws(0,.14,e.jawOpen),O=1-e.teethExtension*W;this.setBonePose("teethUpper",0,0,0,"XYZ",0,O*.022,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-O*.02,0);const q=Ws(.06,.48,e.jawOpen),K=e.tongueExtend*.039*q;if(e.tongueCurl>=0){const $=-e.tongueCurl*(.016+.19*q);this.setBonePose("tongue_1",$*.35,0,0,"XYZ",0,0,K),this.setBonePose("tongue_2",$*.65,0,0),this.setBonePose("tongue_3",$*.95,0,0),this.setBonePose("tongue_4",$*1.15,0,0)}else{const $=q*Ws(.2,.95,e.tongueExtend),tt=-e.tongueCurl*$;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,K),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",tt*.12,0,0),this.setBonePose("tongue_4",tt*.18,0,0)}const Y=X.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),V=X.lerp(.11,.74,c);for(const $ of["L","R"]){const tt=$==="L"?1:-1,yt=$==="R"?e.coyWingVeil*h:0,rt=e.wingFlap*(.25+.75*e.wingUnfurl),z=tt*(rt>=0?rt*.74:rt*V),xt=rt<0?rt*X.lerp(.04,.26,c)*e.wingUnfurl:0,at=tt*(e.wingSweep*.44-yt*.68),St=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${$}`,.05*Y+yt*.08,tt*.12*Y,z*.18,"YXZ"),this.setBonePose(`wingShoulder_${$}`,e.wingCamber*.09+yt*.18,tt*.82*Y*(1-yt*.65)+at,z-tt*.22*Y+tt*yt*.32,"YXZ"),this.setBonePose(`wingElbow_${$}`,yt*.12,-tt*(1.42*Y*(1-yt*.58)+St*.45-yt*.42),tt*.86*Y*(1-yt*.45)+z*.22+tt*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${$}`,-.35*Y-e.wingCamber*.18-yt*.28,tt*(1.32*Y*(1-yt*.6)+St*.55-yt*.48)+at*.35,tt*.12*Y+tt*xt*.3+tt*e.wingTipLag*.26,"YXZ");for(let Dt=1;Dt<=6;Dt++){const At=(Dt-1)/5,B=tt*(-.38+At*.58)*Y*(1-yt*.6),I=-e.wingCamber*(.14+.18*(1-At))-.1*Y-yt*.24,it=e.wingTipLag*(.18+.26*At),pt=rt>=0?-rt*.22:-rt*X.lerp(.06*Math.pow(Math.max(0,(At-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${$}_${Dt}_a`,I,B,tt*(pt*.4+it*.45),"YXZ"),this.setBonePose(`wingFinger_${$}_${Dt}_b`,I*.5,B*.25,tt*(pt*.7+it*.75),"YXZ")}const dt=1-e.pelvicFinFlare;for(let Dt=1;Dt<=3;Dt++)this.setBonePose(`pelvicFin_${$}_${Dt}`,0,0,-tt*dt*1.18,"XYZ")}for(const $ of this.asset.dorsalSailMeshes)$.morphTargetInfluences&&$.morphTargetInfluences.length>0&&($.morphTargetInfluences[0]=e.dorsalSailFlex);const H=e.syncHeartTailFlukes?e.rightHeartFinFlare:e.leftHeartFinFlare,J=Math.min(e.rightHeartFinFlare,H),ht=J<0?Math.sin(Math.abs(J)*1.38)*.48:.02;this.asset.rootGroup.updateMatrixWorld(!1);for(let $=1;$<=10;$++){const tt=$/10,yt=$>=9,rt=yt?0:e.tailYaw*.14+e.tailCurl*.19*Math.pow(tt,1.4)+r*tt,z=yt?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-$*.48)*.085*(.4+.6*tt);let xt=yt?0:e.tailPitch*.088*(.45+tt)+z;if(!yt&&n<.85&&$>=2&&$<=8){const at=Math.max(0,(ht-.05)*.135)*(1-n);xt<at&&(xt=X.lerp(xt,at,Ws(1,5,$)))}if(this.setBonePose(`tail_${$}`,xt,rt,0,"YXZ"),n<.85){const at=this.asset.rig.boneMap.get(`tail_${$}`);at.parent.updateMatrixWorld(!0),at.updateMatrixWorld(!0);const St=this.tmpVecC.setFromMatrixPosition(at.matrixWorld),Dt=Li(St.x,St.z)+($>=8?.05+ht:.058);if(St.y<Dt&&$>1){const At=at.parent,B=at.position.length(),I=Math.min(.45,(Dt-St.y)/Math.max(.14,B))*(1-n);this.tmpEuler.set(I,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),At.quaternion.multiply(this.tmpQuat),At.updateMatrixWorld(!0)}}}const Q=-e.rightHeartFinFlare*1.38,st=H*1.38;this.setBonePose("tailFinHinge_R",0,0,Q,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,st,"XYZ");for(let $=1;$<=5;$++)this.setBonePose(`tailFin_R_${$}`,0,0,0),this.setBonePose(`tailFin_L_${$}`,0,0,0);this.asset.rig.rootBone.updateMatrixWorld(!0)}}function ji(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Ye(i,t,e,n,s){return i<=t||i>=s?0:i<e?ji(t,e,i):i>n?1-ji(n,s,i):1}function Po(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function Tx(i,t,e){return i+Po(t-i)*e}function Ex(i,t,e){const s=i/Math.max(1,64);let o=e;for(let a=0;a<64;a++){const r=(a+.5)*s,l=ji(.4,2.4,r),c=Ye(r,7.6,8.8,15.2,16.5),h=1-.18*ji(18.5,22.5,r),u=X.lerp(4.45,5.18,l)*h,d=X.lerp(u,1.65,c)*t;o+=d*s}return o}class xs{static DURATION_SEC=25;isPlaying=!1;isPaused=!1;loop=!1;followCamera=!0;subjectMode="duet";toothlessAsset;toothlessController;lightFuryAsset;lightFuryController;toothlessSpline;lightFurySpline;flightTime=0;tmpPos=new E;tmpPosAhead=new E;tmpPosBehind=new E;tmpPosLook=new E;tmpVel=new E;tmpEuler=new zn;tmpQuat=new en;prevWorldAnchor=new E(0,1.15,.35);constructor(t,e,n,s){this.toothlessAsset=t,this.toothlessController=e,this.lightFuryAsset=n,this.lightFuryController=s;const o=ai.position.clone(),a=ri.position.clone();this.toothlessSpline=new ti([o.clone(),new E(6.8,3.8,8.2),new E(16.4,11.4,19.5),new E(24.5,17.6,33.5),new E(12.5,19.6,44.5),new E(-6.5,17.2,39.5),new E(-19.5,6.8,29),new E(-22.5,-3.2,18.5),new E(-17.5,10.6,3.5),new E(-2.5,9.8,-5.8),new E(3.85,3.15,-2.15),o.clone()],!1,"centripetal",.5),this.lightFurySpline=new ti([a.clone(),new E(-3.2,4.1,7.8),new E(6.2,12,20.4),new E(14.2,18.3,34.8),new E(2.2,20.2,46),new E(-16.8,17.8,41),new E(-29.8,7.4,30.2),new E(-32.8,-2.8,19.2),new E(-27.2,11.2,4.2),new E(-12.2,10.2,-5.8),new E(-5.15,3.05,-2.35),a.clone()],!1,"centripetal",.5)}setSubjectMode(t){this.subjectMode!==t&&(this.subjectMode=t,this.isPlaying&&(this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())))}resetDragonToPerch(t){t==="toothless"?(this.toothlessAsset.rootGroup.position.copy(ai.position),this.toothlessAsset.rootGroup.rotation.set(0,ai.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0),this.toothlessController.resetToHeroPose()):this.lightFuryAsset&&this.lightFuryController&&(this.lightFuryAsset.rootGroup.position.copy(ri.position),this.lightFuryAsset.rootGroup.rotation.set(0,ri.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0),this.lightFuryController.resetToHeroPose())}computeDesiredWorldFocus(){const t=this.toothlessAsset.rig.boneMap.get("chest"),e=new E().setFromMatrixPosition(t.matrixWorld);if(!this.lightFuryAsset)return e;const n=this.lightFuryAsset.rig.boneMap.get("chest"),s=new E().setFromMatrixPosition(n.matrixWorld);return this.subjectMode==="toothless"?e:this.subjectMode==="light-fury"?s:e.add(s).multiplyScalar(.5)}startFromBeginning(){this.flightTime=0,this.isPlaying=!0,this.isPaused=!1,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(0),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}togglePlayPause(){if(!this.isPlaying){this.startFromBeginning();return}this.isPaused=!this.isPaused}stopAndResetToPerch(){this.isPlaying=!1,this.isPaused=!1,this.flightTime=0,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.prevWorldAnchor.set(0,1.15,.35)}scrubToProgress(t){const e=X.clamp(t,0,1);this.isPlaying||(this.isPlaying=!0,this.isPaused=!0),this.flightTime=e*xs.DURATION_SEC,this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}getPhaseInfo(){const t=this.flightTime,e=this.subjectMode==="duet";let n=e?"Twin Perch Ready":"Perched Ready";return this.isPlaying&&(t<2.8?n=e?"1/6 · Twin Courtship Cliff Leap":"1/6 · Launch Crouch & Cliff Leap":t<7.8?n="2/6 · Majestic Climbing Wingbeats":t<13?n=e?"3/6 · Wingtip Courtship Sky Soar":"3/6 · High-Altitude Sky Soar":t<17.4?n=e?"4/6 · Mirror-Cloak Ocean Skim":"4/6 · Peregrine Ocean Skim":t<21.8?n="5/6 · Cushioned Air-Brake Hover":n=e?"6/6 · Twin Touchdown & Settle":"6/6 · Four-Paw Landing & Settle"),{isPlaying:this.isPlaying,isPaused:this.isPaused,loop:this.loop,followCamera:this.followCamera,subjectMode:this.subjectMode,progress:X.clamp(t/xs.DURATION_SEC,0,1),elapsedSec:t,durationSec:xs.DURATION_SEC,phaseLabel:n}}update(t,e,n){if(!this.isPlaying)return this.prevWorldAnchor.set(0,1.15,.35),{worldFocus:this.prevWorldAnchor,isAirborne:!1};if(!this.isPaused&&(this.flightTime+=t,this.flightTime>=xs.DURATION_SEC))if(this.loop)this.flightTime%=xs.DURATION_SEC;else return this.stopAndResetToPerch(),{worldFocus:this.prevWorldAnchor,isAirborne:!1};this.applyAtTime(this.flightTime);const s=this.computeDesiredWorldFocus();if(this.followCamera){const r=s.clone().sub(this.prevWorldAnchor);n.add(r),e.position.add(r);const l=Ye(this.flightTime,1.8,5.2,18.8,23.2),c=this.subjectMode==="duet"?9.4:4.95,h=this.subjectMode==="duet"?17.8:11.2,u=X.lerp(c,h,l),d=e.position.clone().sub(n),f=Math.max(.5,d.length()),g=X.lerp(f,u,1-Math.exp(-2.2*Math.max(.016,t)));d.setLength(g),e.position.copy(n).add(d);const v=vi(e.position.x,e.position.z),m=Math.max(-8.8,v+1.8);e.position.y<m&&(e.position.y=m),n.lerp(s,1-Math.exp(-7.5*Math.max(.016,t)))}this.prevWorldAnchor.copy(s);const o=this.toothlessController.state.airborneFactor,a=this.lightFuryController?.state.airborneFactor??0;return{worldFocus:s,isAirborne:Math.max(o,a)>.15}}computeKinematicsAlongSpline(t,e,n,s,o,a){let h=0;if(s<=2.05)h=0;else if(s>=21.85)h=1;else{const L=(s-2.05)/19.8,F=L*L*(3-2*L),k=Math.sin(L*Math.PI*2-1.2)*.024*Math.sin(L*Math.PI);h=X.clamp(X.lerp(L,F,.38)+k,0,1)}const u=Ye(s,2.05-.1,2.05+.72,21.85-.75,21.85+.08),d=Ye(s,1.65,2.75,7.2,8.6),f=Ye(s,7.8,9,12.2,13.4),g=Ye(s,12.6,13.6,16.4,17.5),v=Ye(s,15.8,16.8,18,19),m=Ye(s,18,19.2,21.1,22.05),p=Ex(s,a,o),M=X.clamp(d*.94+v*.82+m*.88+(1-f)*(1-g)*.16,0,.96)*u,_=Math.sin(p),x=X.clamp(_+.14*Math.sin(p*2),-1,1),y=Math.cos(p),w=-y*.26*M,A=y*.056*M;let T=0,S=0,b=0,P=0;const C=e.clone(),R=new en().setFromEuler(new zn(0,n,0,"YXZ"));if(h>1e-4&&h<.9999){const F=Math.max(0,h-.008),k=Math.min(1,h+.008);t.getPointAt(h,this.tmpPos),t.getPointAt(F,this.tmpPosBehind),t.getPointAt(k,this.tmpPosAhead),this.tmpVel.subVectors(this.tmpPosAhead,this.tmpPosBehind).normalize();const N=Math.atan2(this.tmpVel.x,this.tmpVel.z),D=Math.max(0,h-.028),W=Math.min(1,h+.028),O=t.getTangentAt(D),q=t.getTangentAt(W),K=Math.atan2(O.x,O.z),Y=Math.atan2(q.x,q.z);T=Po(Y-K)/Math.max(.005,W-D);const V=Math.min(1,h+.048);t.getTangentAt(V,this.tmpPosLook);const H=Math.atan2(this.tmpPosLook.x,this.tmpPosLook.z);S=Po(H-N),P=-Math.asin(X.clamp(this.tmpVel.y,-.84,.84));const J=-.56*m,ht=Ye(h,.025,.11,.86,.98);b=X.clamp(-T*.24,-.74,.74)*ht;const Q=Ye(h,0,.032,.962,1);C.lerpVectors(e,this.tmpPos,Q),C.y+=w*ht;const st=Ye(h,.04,.09,.91,.96);if(st>.001){const rt=vi(C.x,C.z),z=vi(C.x-3.6,C.z),xt=vi(C.x+3.6,C.z),at=Math.max(rt,z,xt),St=Math.max(-7.2,at+3.8*st);C.y<St&&(C.y=St)}const $=Tx(n,N,Q),tt=(P*.86+J+A)*Q,yt=b*Q;this.tmpEuler.set(tt,$,yt,"YXZ"),R.setFromEuler(this.tmpEuler)}return{u:h,airborneEnv:u,climbEnv:d,glideEnv:f,diveEnv:g,pulloutEnv:v,brakeEnv:m,flapPhase:p,activeFlapAmp:M,flapSin:x,flapCos:y,lookAheadTurnDiff:S,bankRoll:b,pathClimbPitch:P,outPos:C,outQuat:R}}applyToothlessFlightAtTime(t,e){const n=this.computeKinematicsAlongSpline(this.toothlessSpline,ai.position,ai.yaw,t,0,1);this.toothlessAsset.rootGroup.position.copy(n.outPos),this.toothlessAsset.rootGroup.quaternion.copy(n.outQuat),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const s=Ye(t,.35,1.15,1.68,2.1),o=Ye(t,1.82,2.05,2.35,2.85),a=Ye(t,19.2,20.2,21.75,22.25),r=Ye(t,21.75,22.2,22.85,23.9),l=Ye(t,23.1,23.65,24.35,24.95),c=e?.34*n.glideEnv+.36*l:-.22*l,h=xn.forelegStance*(1-s-r)-.88*s-.8*r+.18*l,u=xn.hindlegStance*(1-s-r)-.84*s-.76*r+.12*l,d=X.clamp(.82*n.airborneEnv-1.55*o-1.58*a,-.84,.88),f=X.lerp(xn.wingUnfurl+.34*s,1-.16*n.diveEnv,ji(.95,2.15,t)*(1-ji(22.1,24.1,t))),g=Math.max(0,n.flapCos)*.56*n.activeFlapAmp*(1-n.brakeEnv*.6),v=X.clamp(.68*s+n.flapSin*.92*n.activeFlapAmp+.14*n.glideEnv-.08*n.diveEnv,-1,1),m=-n.flapCos*.84*n.activeFlapAmp,p=X.clamp(xn.wingSweep*(1-n.airborneEnv)-.8*n.diveEnv+.74*n.brakeEnv-.16*s,-1,1),M=Math.max(0,-n.flapSin)*n.activeFlapAmp,_=X.clamp(.28+.46*M+.54*n.pulloutEnv+.64*n.brakeEnv-.18*n.diveEnv,.08,1),x=X.clamp(.22*(1-n.airborneEnv)+.95*n.glideEnv+.85*Math.min(1,Math.abs(n.bankRoll)*1.8)+.9*n.brakeEnv,.15,1),y=.24*(1-n.airborneEnv)+.18*n.climbEnv+.06*n.glideEnv+.42*n.diveEnv-.32*n.brakeEnv,w=X.clamp(n.bankRoll*.38,-.32,.32),A={airborneFactor:n.airborneEnv,forelegStance:h,hindlegStance:u,limbStride:0,legFlightTuck:d,spineArch:.2*s-.16*o+.24*n.brakeEnv+.08*(1-n.airborneEnv),spineTwist:X.clamp(-n.bankRoll*.35,-1,1),wingUnfurl:f,wingFlap:v,wingWristFold:g,wingTipLag:m,wingSweep:p,wingCamber:_,pelvicFinFlare:X.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.35*n.diveEnv,.3,1),dorsalSpineSplit:x,autoSyncProstheticTail:Math.abs(w)<.02,leftProstheticFinFlare:X.clamp(y+w,-1,1),rightTailFinFlare:X.clamp(y-w,-1,1),tailYaw:X.clamp(xn.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv+.28*l,-1,1),tailPitch:X.clamp(xn.tailPitch*(1-n.airborneEnv)-.34*n.brakeEnv+.15*n.pulloutEnv+.22*r,-1,1),tailCurl:.16*(1-n.diveEnv)+n.lookAheadTurnDiff*.8,tailWaveAmp:n.activeFlapAmp*.78+n.glideEnv*.16,tailWavePhase:n.flapPhase,neckArch:.16+.24*n.brakeEnv-.2*n.diveEnv,neckYaw:n.lookAheadTurnDiff*.95*n.airborneEnv+c*.45,headYaw:X.clamp(xn.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+c,-1,1),headPitch:X.clamp(xn.headPitch*(1-n.airborneEnv)-.34*s+n.pathClimbPitch*-.24*n.airborneEnv+.48*n.brakeEnv+.16*r,-1,1),headRoll:X.clamp(xn.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv-.22*l,-1,1),earPerk:X.clamp(.76+.2*s-.56*n.diveEnv-.2*n.climbEnv+.18*n.brakeEnv+.18*l,.12,1),earAsymmetry:n.bankRoll*.22+.12*l,cheekNubFlare:.5+.25*n.diveEnv,eyeYaw:X.clamp(n.lookAheadTurnDiff*1.7*n.airborneEnv+c*.55,-.85,.85),eyePitch:X.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:X.clamp(.76-.24*n.diveEnv+.16*l,.25,.96),squint:X.clamp(.36*n.diveEnv+.18*l,0,1),blink:Ye(t,23.35,23.45,23.52,23.64),jawOpen:X.clamp(.2*o+.15*n.pulloutEnv+.26*l,0,1),teethExtension:0,tongueExtend:.4*l,tongueCurl:.2*l};Object.assign(this.toothlessController.state,A)}applyLightFuryFlightAtTime(t,e){if(!this.lightFuryAsset||!this.lightFuryController)return;const n=this.computeKinematicsAlongSpline(this.lightFurySpline,ri.position,ri.yaw,t,.95,1.03);this.lightFuryAsset.rootGroup.position.copy(n.outPos),this.lightFuryAsset.rootGroup.quaternion.copy(n.outQuat),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const s=Ye(t,.32,1.12,1.65,2.08),o=Ye(t,1.8,2.04,2.32,2.82),a=Ye(t,19.2,20.2,21.75,22.25),r=Ye(t,21.75,22.2,22.85,23.9),l=Ye(t,23,23.6,24.4,24.96),c=Ye(t,13.2,14.2,15.8,16.9),h=Ye(t,8.2,9.4,12.2,13.4),u=Ye(t,12.6,13.6,16,17.2),d=e?-.36*n.glideEnv-.34*l:-.18*l,f=pn.forelegStance*(1-s-r)-.86*s-.78*r+.2*l,g=pn.hindlegStance*(1-s-r)-.82*s-.74*r+.12*l,v=X.clamp(.82*n.airborneEnv-1.52*o-1.56*a,-.84,.88),m=X.lerp(pn.wingUnfurl+.34*s,1-.18*n.diveEnv,ji(.9,2.12,t)*(1-ji(22.1,24.1,t))),p=Math.max(0,n.flapCos)*.54*n.activeFlapAmp*(1-n.brakeEnv*.6),M=X.clamp(.66*s+n.flapSin*.9*n.activeFlapAmp+.16*n.glideEnv-.08*n.diveEnv,-1,1),_=-n.flapCos*.86*n.activeFlapAmp,x=X.clamp(pn.wingSweep*(1-n.airborneEnv)-.82*n.diveEnv+.74*n.brakeEnv-.15*s,-1,1),y=Math.max(0,-n.flapSin)*n.activeFlapAmp,w=X.clamp(.26+.44*y+.52*n.pulloutEnv+.62*n.brakeEnv-.16*n.diveEnv,.08,1),A=.18*(1-n.airborneEnv)+.12*n.climbEnv+.02*n.glideEnv+.38*n.diveEnv-.28*n.brakeEnv,T=X.clamp(n.bankRoll*.36,-.3,.3),S={airborneFactor:n.airborneEnv,forelegStance:f,hindlegStance:g,limbStride:0,legFlightTuck:v,coyWingVeil:0,spineArch:.22*s-.15*o+.24*n.brakeEnv+.12*(1-n.airborneEnv),spineTwist:X.clamp(-n.bankRoll*.36,-1,1),wingUnfurl:m,wingFlap:M,wingWristFold:p,wingTipLag:_,wingSweep:x,wingCamber:w,pelvicFinFlare:X.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.32*n.diveEnv,.32,1),dorsalSailFlex:X.clamp(.24*(1-n.airborneEnv)+.92*n.glideEnv+.85*n.brakeEnv+.65*Math.abs(n.bankRoll),.15,1),syncHeartTailFlukes:Math.abs(T)<.02,leftHeartFinFlare:X.clamp(A+T,-1,1),rightHeartFinFlare:X.clamp(A-T,-1,1),tailYaw:X.clamp(pn.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv-.36*l,-1,1),tailPitch:X.clamp(pn.tailPitch*(1-n.airborneEnv)-.32*n.brakeEnv+.16*n.pulloutEnv+.2*r,-1,1),tailCurl:-.24*(1-n.airborneEnv)+n.lookAheadTurnDiff*.8-.26*l,tailWaveAmp:n.activeFlapAmp*.76+n.glideEnv*.18,tailWavePhase:n.flapPhase,neckArch:.24+.24*n.brakeEnv-.2*n.diveEnv+.14*l,neckYaw:n.lookAheadTurnDiff*.92*n.airborneEnv+d*.48,headYaw:X.clamp(pn.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+d,-1,1),headPitch:X.clamp(pn.headPitch*(1-n.airborneEnv)-.32*s+n.pathClimbPitch*-.24*n.airborneEnv+.46*n.brakeEnv+.14*r,-1,1),headRoll:X.clamp(pn.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv+.28*l,-1,1),earPerk:X.clamp(.82+.16*s-.56*n.diveEnv-.2*n.climbEnv+.16*n.brakeEnv,.14,1),earAsymmetry:n.bankRoll*.24+.18*l,cheekNubFlare:.52+.22*n.diveEnv,eyeYaw:X.clamp(n.lookAheadTurnDiff*1.65*n.airborneEnv+d*.55,-.85,.85),eyePitch:X.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:X.clamp(.84-.2*n.diveEnv+.1*l,.3,.96),squint:X.clamp(.3*n.diveEnv+.56*l,0,1),blink:Ye(t,23.18,23.28,23.36,23.48),jawOpen:X.clamp(.14*o+.12*n.pulloutEnv+.14*l,0,1),teethExtension:0,tongueExtend:.28*l,tongueCurl:.12*l,iridescentShimmer:X.clamp(.78+.22*(n.glideEnv+c),0,1),radiantGlow:X.clamp(.34+.36*(n.glideEnv+c),0,1),biolumGlow:X.clamp(.58*h,0,1),plasmaGlow:X.clamp(.04+.78*u,0,1),thermalCloak:X.clamp(.78*c,0,1)};Object.assign(this.lightFuryController.state,S)}applyPerchedSpectatorGaze(t,e){if(t==="toothless"){this.toothlessAsset.rootGroup.position.copy(ai.position),this.toothlessAsset.rootGroup.rotation.set(0,ai.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(ai.position);n.y-=1.5;const s=Math.atan2(n.x,n.z),o=Po(s-ai.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.toothlessController.state,{...xn,neckYaw:X.clamp(o*.55,-.85,.85),headYaw:X.clamp(o*.85,-.95,.95),headPitch:X.clamp(-r*.95,-.85,.75),headRoll:X.clamp(-o*.18,-.45,.45),eyeYaw:X.clamp(o*.45,-.75,.75),eyePitch:X.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.88})}else if(this.lightFuryAsset&&this.lightFuryController){this.lightFuryAsset.rootGroup.position.copy(ri.position),this.lightFuryAsset.rootGroup.rotation.set(0,ri.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(ri.position);n.y-=1.48;const s=Math.atan2(n.x,n.z),o=Po(s-ri.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.lightFuryController.state,{...pn,neckYaw:X.clamp(o*.55,-.85,.85),headYaw:X.clamp(o*.85,-.95,.95),headPitch:X.clamp(-r*.95,-.85,.75),headRoll:X.clamp(.18-o*.18,-.5,.55),eyeYaw:X.clamp(o*.45,-.75,.75),eyePitch:X.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.9})}}applyAtTime(t){if(this.subjectMode==="duet")this.applyToothlessFlightAtTime(t,!0),this.applyLightFuryFlightAtTime(t,!0);else if(this.subjectMode==="toothless"){this.applyToothlessFlightAtTime(t,!1);const e=this.toothlessAsset.rig.boneMap.get("chest"),n=new E().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("light-fury",n)}else if(this.applyLightFuryFlightAtTime(t,!1),this.lightFuryAsset){const e=this.lightFuryAsset.rig.boneMap.get("chest"),n=new E().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("toothless",n)}}}function Cx(i){return i-Math.floor(i)}function Ph(i,t){return Cx(Math.sin(i*127.1+t*311.7)*43758.5453123)}let ya=null;function Px(i=512){if(ya)return ya;const t=new Float32Array(i*i),e=76;for(let f=0;f<i;f++){const g=f/i*e,v=Math.floor(g),m=g-v;for(let p=0;p<i;p++){const M=p/i*e,_=Math.floor(M),x=M-_;let y=10;for(let A=-1;A<=1;A++)for(let T=-1;T<=1;T++){const S=((_+T)%e+e)%e,b=((v+A)%e+e)%e,P=T+.5+(Ph(S,b)-.5)*.68-x,C=A+.5+(Ph(b+19,S+7)-.5)*.68-m,R=Math.sqrt(P*P+C*C);R<y&&(y=R)}const w=Math.max(0,1-Math.pow(y*1.15,2.2));t[f*i+p]=w}}const n=document.createElement("canvas"),s=document.createElement("canvas"),o=document.createElement("canvas");for(const f of[n,s,o])f.width=i,f.height=i;const a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(i,i),h=r.createImageData(i,i),u=l.createImageData(i,i);for(let f=0;f<i;f++){const g=(f-1+i)%i,v=(f+1)%i;for(let m=0;m<i;m++){const p=(m-1+i)%i,M=(m+1)%i,_=f*i+m,x=_*4,y=t[_],w=(t[f*i+M]-t[f*i+p])*.24,A=(t[v*i+m]-t[g*i+m])*.24,T=1/Math.sqrt(w*w+A*A+1);h.data[x]=Math.round((-w*T*.5+.5)*255),h.data[x+1]=Math.round((-A*T*.5+.5)*255),h.data[x+2]=Math.round((T*.5+.5)*255),h.data[x+3]=255;const S=249+y*5;c.data[x]=Math.min(255,Math.round(S+.8)),c.data[x+1]=Math.round(S),c.data[x+2]=Math.min(255,Math.round(S+.6)),c.data[x+3]=255;const b=Math.round((.45-y*.07)*255);u.data[x]=b,u.data[x+1]=b,u.data[x+2]=b,u.data[x+3]=255}}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0);const d=(f,g)=>(f.wrapS=_i,f.wrapT=_i,f.anisotropy=8,f.colorSpace=g?_n:Qn,f.needsUpdate=!0,f);return ya={albedoMap:d(new Ln(n),!0),normalMap:d(new Ln(s),!1),roughnessMap:d(new Ln(o),!1)},ya}let ps=null;function Rx(i=1024){if(ps)return ps;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=14,n.data[u+1]=24,n.data[u+2]=42,n.data[u+3]=255;continue}const d=Math.sin(h*64+Math.sin(c*12)*.65),f=Math.sin(h*138-Math.cos(c*18)*.85),g=Math.sin(h*250+c*22),v=Math.sin(h*21+.9)*Math.cos(c*14-h*4),m=d*.42+f*.33+g*.15+v*.24,p=Math.exp(-Math.pow((c-.36)/.13,2)),M=Math.max(0,Math.min(1,(.95-c)/.17)),_=Math.max(0,Math.min(1,1-c*1.06)),x=.86+.28*m;let y=(32+128*_+58*p)*x*M,w=(118+114*_+36*p)*x*M,A=(205+48*_+20*p)*x*M;if(v<-.58&&c>.25&&c<.78){const T=Math.min(1,(-v-.58)*2.1);y*=1-.38*T,w*=1-.28*T,A*=1-.16*T}n.data[u]=Math.max(0,Math.min(255,Math.round(y))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(w))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+3]=255}}return e.putImageData(n,0,0),ps=new Ln(t),ps.colorSpace=_n,ps.anisotropy=8,ps.needsUpdate=!0,ps}function Lx(){const i=Rx(1024),t={uPupilDilation:{value:.78},uLightDir:{value:new E(.45,.65,.6).normalize()},uBiolumGlow:{value:0},uPlasmaGlow:{value:0},uThermalCloak:{value:0}},e=new li({name:"LightFury_SkyBlueIris_PBR",map:i,roughness:.48,metalness:0,envMapIntensity:.78});e.onBeforeCompile=s=>{Object.assign(s.uniforms,t),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
        varying vec2 vIrisUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vIrisUv = uv;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uPupilDilation;
        uniform vec3 uLightDir;
        uniform float uBiolumGlow;
        uniform float uPlasmaGlow;
        uniform float uThermalCloak;
        varying vec2 vIrisUv;`).replace("#include <map_fragment>",`
        vec2 p = (vIrisUv - 0.5) * 2.0;
        float rRaw = length(p);

        // Smooth Feline Oval Pupil at ALL dilations: narrow vertical oval (0.0) <-> medium oval (0.5) <-> wide cute oval (1.0)
        // Uses pure C-infinity quadratic y^2 (NEVER abs(y) or rhombus superellipses!), so sides are always smoothly curved!
        float d = clamp(uPupilDilation, 0.0, 1.0);
        float pWidth = mix(0.056, 0.47, pow(d, 0.80));
        float pHeight = mix(0.56, 0.67, d);

        float yNorm = clamp(p.y / pHeight, -1.5, 1.5);
        float yNormSq = clamp(yNorm * yNorm, 0.0, 1.0);
        float slitTipFactor = mix(0.42, 1.0, smoothstep(0.0, 0.40, d));
        float effHalfWidth = max(0.020, pWidth * mix(1.0, slitTipFactor, yNormSq));
        float pupilDist = sqrt((p.x * p.x) / (effHalfWidth * effHalfWidth) + yNorm * yNorm);
        float pupilMask = smoothstep(0.955, 1.025, pupilDist);

        float angle = atan(p.y, p.x);
        float boundaryR = mix(pWidth * 0.85, pHeight * 0.85, abs(sin(angle)));
        float irisT = clamp((rRaw - boundaryR * 0.70) / max(0.12, 0.96 - boundaryR * 0.70), 0.0, 1.0);
        float remappedR = mix(0.16, 0.96, irisT);
        vec2 warpedUv = vec2(0.5) + vec2(cos(angle), sin(angle)) * remappedR * 0.5;

        vec4 sampledIris = texture2D(map, clamp(warpedUv, 0.002, 0.998));
        float caustic = clamp(dot(normalize(vec3(-p.x * 0.65, -p.y * 0.65, 0.75)), normalize(uLightDir)), 0.0, 1.0);
        vec3 irisLit = sampledIris.rgb * (0.98 + 1.05 * pow(caustic, 1.3));

        float ruffEdge = exp(-pow((pupilDist - 1.08) / 0.16, 2.0)) * pupilMask;
        irisLit += vec3(0.22, 0.36, 0.48) * ruffEdge;

        vec2 cp = (p - vec2(-0.20, 0.26)) / vec2(0.084, 0.070);
        float sqDist = pow(abs(cp.x), 3.4) + pow(abs(cp.y), 3.4);
        float catchSpot = 1.0 - smoothstep(0.70, 1.15, sqDist);
        vec2 cp2 = (p - vec2(0.24, -0.26)) / 0.052;
        float catchSpot2 = exp(-dot(cp2, cp2)) * 0.34;

        float glowBoost = clamp(uPlasmaGlow * 0.65 + uBiolumGlow * 0.55, 0.0, 1.0);
        irisLit = mix(irisLit, irisLit * vec3(1.18, 0.98, 1.68) + vec3(0.42, 0.52, 0.95) * (1.0 - irisT), glowBoost);

        diffuseColor.rgb *= mix(vec3(0.003, 0.005, 0.010), irisLit, pupilMask);
        diffuseColor.rgb += vec3(0.96, 0.99, 1.0) * (catchSpot * 0.76 + catchSpot2);
        // Smooth optical mirror cloak blend on visible front iris (internal rear eyeball is 100% culled by outer-hull depth pre-pass!)
        float eyeCloak = smoothstep(0.0, 0.95, uThermalCloak);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.80, 0.88, 0.98), eyeCloak * 0.78);
        diffuseColor.a *= mix(1.0, 0.12, eyeCloak);
        `).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec2 ep = (vIrisUv - 0.5) * 2.0;
        float eRadial = clamp(1.0 - length(ep) * 0.92, 0.0, 1.0);
        totalEmissiveRadiance += diffuseColor.rgb * (0.36 + uPlasmaGlow * 0.85 + uBiolumGlow * 0.72) * eRadial * (1.0 - smoothstep(0.0, 0.95, uThermalCloak) * 0.88);`)};const n=new In({name:"LightFury_Cornea_WetCoat",color:new Ut(16777215),transparent:!0,opacity:.15,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function Rh(i,t,e){i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aAnatomyData;
        varying vec4 vAnatomyData;
        varying vec3 vObjPos;
        varying vec3 vWorldPositionCustom;
        varying vec3 vWorldNormalCustom;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vAnatomyData = aAnatomyData;
        vObjPos = position;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 lfWp = vec4(transformed, 1.0);
        vWorldPositionCustom = (modelMatrix * lfWp).xyz;
        vWorldNormalCustom = normalize(mat3(modelMatrix) * objectNormal);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime;
        uniform float uIridescentShimmer;
        uniform float uPastelTint;
        uniform float uRadiantGlow;
        uniform float uBiolumGlow;
        uniform float uPlasmaGlow;
        uniform float uThermalCloak;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec4 vAnatomyData;
        varying vec3 vObjPos;
        varying vec3 vWorldPositionCustom;
        varying vec3 vWorldNormalCustom;

        float lfHash31(vec3 p) {
          p = fract(p * 0.1031);
          p += dot(p, p.yzx + 33.33);
          return fract((p.x + p.y) * p.z);
        }

        float lfNoise3D(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(
              mix(lfHash31(i + vec3(0,0,0)), lfHash31(i + vec3(1,0,0)), f.x),
              mix(lfHash31(i + vec3(0,1,0)), lfHash31(i + vec3(1,1,0)), f.x),
              f.y
            ),
            mix(
              mix(lfHash31(i + vec3(0,0,1)), lfHash31(i + vec3(1,0,1)), f.x),
              mix(lfHash31(i + vec3(0,1,1)), lfHash31(i + vec3(1,1,1)), f.x),
              f.y
            ),
            f.z
          );
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        float patternMask = clamp(vAnatomyData.y, 0.0, 1.0);
        float iceBlueMask = clamp(vAnatomyData.z, 0.0, 1.0);
        float blushAndThin = clamp(vAnatomyData.w, 0.0, 1.0);

        vec3 viewDirM = normalize(cameraPosition - vWorldPositionCustom);
        vec3 sunDirM = normalize(uSunDir);
        vec3 wNorm = normalize(vWorldNormalCustom);
        #ifdef DOUBLE_SIDED
          wNorm *= gl_FrontFacing ? 1.0 : -1.0;
        #endif

        // 1. Restrained, Living Mother-of-Pearl Base:
        // Predominantly pure, very-pale warm blush-white (NOT plain grey-white, and NEVER overdone!),
        // subtly shifting with lighting direction, view angle, and anatomy!
        vec3 basePearlWhite = diffuseColor.rgb * vec3(0.997, 0.989, 0.992);
        vec3 whisperIceBlue = vec3(0.885, 0.942, 0.996);
        vec3 whisperRosePink = vec3(0.994, 0.918, 0.946);
        vec3 whisperLavender = vec3(0.955, 0.928, 0.992);

        // Subtle pale sky-ice countershading on throat, underbelly & ventral tail (kept delicate ~22% max!)
        vec3 subtleHide = mix(basePearlWhite, whisperIceBlue, iceBlueMask * 0.24 * uPastelTint);

        // Subtle pale rose-lavender along shimmer bands & forehead hearts (~14% delicate tint)
        subtleHide = mix(subtleHide, whisperLavender, patternMask * 0.16 * uPastelTint);

        ${e?`
        // Under-the-wings specialty: ventral wing surface (facing downward or !gl_FrontFacing)
        // radiates a soft, delicate very-pale rose-pink blush, shifting gently with lighting!
        float isUnderWing = gl_FrontFacing ? clamp(-wNorm.y * 0.55 + 0.15, 0.0, 1.0) : 1.0;
        float underWingPinkAmt = (0.14 + 0.16 * isUnderWing) * blushAndThin * uPastelTint;
        subtleHide = mix(subtleHide, whisperRosePink, clamp(underWingPinkAmt, 0.0, 0.28));
        `:`
        // Delicate rosy warmth on nostril rim, ear tips, and axillary under-wing flanks (~16% max)
        subtleHide = mix(subtleHide, whisperRosePink, clamp(blushAndThin, 0.0, 0.65) * 0.22 * uPastelTint);
        `}

        // Subtle lighting-reactive pearlescent shift (warm champagne-blush toward sun, cool moonstone in sky shadow)
        float sunFacing = 0.5 + 0.5 * dot(wNorm, sunDirM);
        float grazing = pow(1.0 - clamp(abs(dot(wNorm, viewDirM)), 0.0, 1.0), 2.2);
        vec3 lightShiftTint = mix(vec3(0.968, 0.976, 1.00), vec3(1.00, 0.968, 0.980), sunFacing);
        subtleHide *= mix(vec3(1.0), lightShiftTint, (0.28 + 0.45 * grazing) * uPastelTint);

        diffuseColor.rgb = subtleHide;

        // Thermal-Mirror Silicate Cloaking: scales turn chrome-silver & optically translucent at ALL cloak values!
        if (uThermalCloak > 0.001) {
          float cloakT = smoothstep(0.0, 0.96, uThermalCloak);
          float fresC = pow(1.0 - clamp(abs(dot(wNorm, viewDirM)), 0.0, 1.0), 2.4);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.87, 0.98), cloakT * 0.86);
          diffuseColor.a *= mix(1.0, clamp(0.10 + 0.40 * fresC, 0.10, 0.58), cloakT);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        // Porcelain-velvet smoothness (much smoother than Toothless!) -> mirror crystal when cloaking
        // Floor >= 0.068 prevents D_GGX > 65504 HalfFloatType +Inf overflow on subpixel scales!
        roughnessFactor = mix(roughnessFactor * 0.86, 0.068, uThermalCloak * 0.95);
        roughnessFactor = clamp(roughnessFactor, 0.068, 0.65);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.94, uThermalCloak * 0.92);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float pStripe = clamp(vAnatomyData.y, 0.0, 1.0);
        float pBlue = clamp(vAnatomyData.z, 0.0, 1.0);
        float pZone = clamp(vAnatomyData.w, 0.0, 1.0);
        vec3 toCamLF = cameraPosition - vWorldPositionCustom;
        vec3 viewW = dot(toCamLF, toCamLF) > 1e-8 ? normalize(toCamLF) : vec3(0.0, 0.0, 1.0);
        vec3 sunN = normalize(uSunDir);

        // 1. Pinpoint Stardust Crystal Glimmer & Subtle Pearlescent Sheen (movie stills refs 13 & 16!)
        if (uIridescentShimmer > 0.001) {
          // Tier A: Tiny, crisp pinpoint diamond stardust specks (twinkling gently as view/breath shifts!)
          vec3 fineCell = floor(vObjPos * 285.0);
          vec3 randDirRaw = vec3(
            lfHash31(fineCell) - 0.5,
            lfHash31(fineCell + 19.7) - 0.5 + 1e-3,
            lfHash31(fineCell + 47.3) - 0.5
          );
          vec3 randDirA = normalize(randDirRaw);
          vec3 halfSumLF = viewW + sunN;
          vec3 halfV = dot(halfSumLF, halfSumLF) > 1e-6 ? normalize(halfSumLF) : vec3(0.0, 1.0, 0.0);
          float twinkle = 0.78 + 0.22 * sin(uTime * 2.4 + lfHash31(fineCell + 7.7) * 6.283);
          float pinpoint = pow(max(clamp(dot(normalize(normal + randDirA * 0.48), halfV), 0.0, 1.0), 1e-5), 88.0);
          float sparseStars = smoothstep(0.76, 0.985, lfHash31(fineCell + 91.7));
          float zoneDensity = 0.28 + 0.92 * pStripe; // Concentrated on forehead hearts, neck/shoulders & wing bands!
          vec3 starColor = mix(vec3(1.0, 0.88, 0.96), vec3(0.84, 0.94, 1.0), lfHash31(fineCell + 5.1));
          totalEmissiveRadiance += starColor * pinpoint * sparseStars * zoneDensity * twinkle * uIridescentShimmer * 3.1;

          // Tier B: Ultra-soft silk-pearl grazing sheen (kept restrained so she stays luminous white!)
          float rimOpal = pow(1.0 - clamp(abs(dot(normal, viewW)), 0.0, 1.0), 3.6);
          vec3 rimTint = mix(vec3(0.82, 0.90, 1.0), vec3(1.0, 0.84, 0.93), 0.5 + 0.5 * sin(vObjPos.z * 2.8 + vObjPos.x * 2.0));
          totalEmissiveRadiance += rimTint * rimOpal * uIridescentShimmer * 0.075;
        }

        // 2. Partly-Glowing Radiant Skin & Translucent Underwing Rose-Pearl Luminescence!
        if (uRadiantGlow > 0.001) {
          float gentleBreath = 0.92 + 0.08 * sin(uTime * 1.9 - vObjPos.z * 1.4);
          // Soft dermal wrap glow across smooth pearl hide + luminous shimmer markings (hearts, wing bands, dorsal ridge)
          float radiantMask = 0.08 + 0.46 * pStripe + 0.14 * pBlue + ${e?"0.22 * pZone":"0.28 * pZone"};
          vec3 radiantHue = mix(
            vec3(0.98, 0.88, 0.94), // Soft warm pearl-rose
            vec3(0.78, 0.91, 1.00), // Ethereal pastel sky-periwinkle
            0.45 + 0.35 * sin(vObjPos.z * 2.2)
          );
          totalEmissiveRadiance += radiantHue * radiantMask * uRadiantGlow * 0.42 * gentleBreath;
        }

        ${e?`
        // Warm very-pale rose-pink subsurface translucency glowing softly under the wings when lit!
        float backSun = pow(clamp(dot(viewW, -sunN), 0.0, 1.0), 2.1);
        float ambientTrans = 0.18 + 0.82 * backSun;
        totalEmissiveRadiance += uSunColor * vec3(0.32, 0.21, 0.26) * ambientTrans * pZone * (0.35 + 0.45 * uPastelTint);
        `:""}

        // 2B. Hidden World Neon Bioluminescence FX (uBiolumGlow):
        // Radiating neon rose-pink, electric orchid-magenta, and cavern aqua-cyan meandering filigree patterns!
        if (uBiolumGlow > 0.001) {
          float absX = abs(vObjPos.x);
          float symPhase = sin(vObjPos.z * 7.2 - absX * 4.8 + lfNoise3D(vec3(absX * 3.5, vObjPos.y * 3.5, vObjPos.z * 3.5)) * 2.2);
          float fineFiligree = pow(clamp(0.5 + 0.5 * sin(absX * 15.0 + vObjPos.z * 9.5 + sin(vObjPos.z * 4.2) * 1.8), 0.0, 1.0), 5.0);
          ${e?`
          // Meandering Hidden World bioluminescent wing & heart-tail ribbons!
          float spanRibbonA = pow(clamp(0.5 + 0.5 * symPhase, 0.0, 1.0), 3.6);
          float spanRibbonB = pow(clamp(0.5 + 0.5 * cos(absX * 6.4 - vObjPos.z * 5.2), 0.0, 1.0), 4.5);
          float heartTailGlow = smoothstep(-3.35, -3.95, vObjPos.z) * (0.45 + 0.55 * pStripe);
          float biolumPattern = clamp(pStripe * 0.95 + (spanRibbonA * 0.72 + spanRibbonB * 0.48 + fineFiligree * 0.42) * (0.35 + 0.65 * pZone) + heartTailGlow, 0.0, 1.35);
          `:`
          // Forehead double-hearts, dorsal spine crest, flank scroll bands, ear rims & limb-fin neon bands!
          float earTipMask = smoothstep(1.62, 1.83, vObjPos.y) * smoothstep(1.52, 1.26, vObjPos.z);
          float bodySwirl = pow(clamp(0.5 + 0.5 * symPhase, 0.0, 1.0), 5.5) * smoothstep(-0.15, 0.65, vObjPos.y - 0.55) * 0.48;
          float biolumPattern = clamp(pStripe * 1.25 + earTipMask * 0.85 + bodySwirl + fineFiligree * pStripe * 0.45, 0.0, 1.45);
          `}
          // Traveling Hidden World bioluminescent wave from crown to heart-tail +翼tips!
          float energyPulse = 0.82 + 0.28 * sin(uTime * 2.8 - vObjPos.z * 1.9 - absX * 1.4);
          float colorWave = 0.5 + 0.5 * sin(vObjPos.z * 2.1 + absX * 2.6 - uTime * 0.85);
          vec3 neonRosePink = vec3(1.00, 0.18, 0.76);
          vec3 neonOrchidViolet = vec3(0.68, 0.22, 1.00);
          vec3 neonCavernCyan = vec3(0.16, 0.92, 1.00);
          vec3 biolumColor = mix(mix(neonRosePink, neonOrchidViolet, colorWave), neonCavernCyan, clamp(pBlue * 0.65 + fineFiligree * 0.55, 0.0, 0.82));
          // Soft ambient dermal subsurface bloom + crisp intense neon filigree markings!
          float ambientDermal = 0.10 + 0.14 * pow(1.0 - clamp(abs(dot(normal, viewW)), 0.0, 1.0), 2.2);
          totalEmissiveRadiance += biolumColor * (ambientDermal + biolumPattern * 1.95) * uBiolumGlow * energyPulse;
        }

        // 3. Orchid-Rose & Ice-Cyan Plasma Charge Glow (nostrils, throat & smooth dorsal crest!)
        if (uPlasmaGlow > 0.001 && !${e?"true":"false"}) {
          float pulse = 0.86 + 0.14 * sin(uTime * 4.2 - vObjPos.z * 2.6);
          vec3 plasmaCol = mix(vec3(0.92, 0.44, 0.96), vec3(0.42, 0.90, 1.0), 0.5 + 0.5 * sin(vObjPos.z * 3.0));
          totalEmissiveRadiance += plasmaCol * pZone * uPlasmaGlow * 2.4 * pulse;
        }

        // 4. Superheated Plasma-Mirror Cloaking Transition Shimmer Wave!
        if (uThermalCloak > 0.005 && uThermalCloak < 0.98) {
          float wavePos = mix(2.3, -4.4, uThermalCloak);
          float heatBand = exp(-pow((vObjPos.z - wavePos + (lfNoise3D(vObjPos * 5.0 + uTime) - 0.5) * 0.45) / 0.36, 2.0));
          vec3 cloakPlasma = mix(vec3(0.95, 0.54, 0.92), vec3(0.48, 0.92, 1.0), lfNoise3D(vObjPos * 6.0));
          totalEmissiveRadiance += cloakPlasma * heatBand * sin(uThermalCloak * 3.14159) * 2.4;
        }`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function Ix(){const i=Px(512),t=Lx(),e={uTime:{value:0},uIridescentShimmer:{value:.76},uPastelTint:{value:.78},uRadiantGlow:{value:.34},uBiolumGlow:{value:0},uPlasmaGlow:{value:.04},uThermalCloak:{value:0},uSunDir:{value:new E(-.55,.38,-.74).normalize()},uSunColor:{value:new Ut(16765601)}},n=new In({name:"LightFury_SnowPearlHide_PBR",color:new Ut(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new Gt(.05,.05),roughnessMap:i.roughnessMap,roughness:.46,metalness:.02,iridescence:.42,iridescenceIOR:1.38,iridescenceThicknessRange:[320,520],clearcoat:.34,clearcoatRoughness:.22,sheen:.28,sheenRoughness:.42,sheenColor:new Ut(16773366),envMapIntensity:1.22});Rh(n,e,!1);const s={albedo:i.albedoMap.clone(),normal:i.normalMap.clone(),rough:i.roughnessMap.clone()};for(const m of[s.albedo,s.normal,s.rough])m.repeat.set(3,3),m.needsUpdate=!0;const o=new In({name:"LightFury_IridescentWingPatagium_PBR",color:new Ut(16776445),map:s.albedo,normalMap:s.normal,normalScale:new Gt(.028,.028),roughnessMap:s.rough,roughness:.42,metalness:.02,iridescence:.52,iridescenceIOR:1.4,iridescenceThicknessRange:[310,540],clearcoat:.28,clearcoatRoughness:.24,side:tn,envMapIntensity:1.28});Rh(o,e,!0);const a=new In({name:"LightFury_SlatePearlClaws_PBR",color:new Ut(2633016),roughness:.24,metalness:.08,clearcoat:.84,clearcoatRoughness:.12,envMapIntensity:1.5}),r=new In({name:"LightFury_PearlyTeeth_PBR",color:new Ut(16447218),roughness:.14,metalness:0,clearcoat:.92,clearcoatRoughness:.08}),l=new In({name:"LightFury_RoseGums_PBR",color:new Ut(12084344),normalMap:i.normalMap,normalScale:new Gt(.08,.08),roughness:.32,clearcoat:.82,clearcoatRoughness:.12,side:tn}),c=new In({name:"LightFury_PinkTongue_PBR",color:new Ut(13924494),normalMap:i.normalMap,normalScale:new Gt(.1,.1),roughness:.26,clearcoat:.88,clearcoatRoughness:.1}),h=new ko({name:"LightFury_OuterHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0}),u=new ko({name:"LightFury_WingHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0,side:tn}),d=[n,o,a],f=[r,l,c,t.irisMaterial];let g=!1;return{skinMaterial:n,wingMembraneMaterial:o,clawMaterial:a,teethMaterial:r,oralGumMaterial:l,tongueMaterial:c,hullDepthMaterial:h,doubleSidedHullDepthMaterial:u,eyeMaterials:t,uniforms:e,syncCloakTransparency:m=>{const p=m>.001;if(p!==g){g=p;for(const _ of d)_.transparent=p,_.depthWrite=!p,_.depthFunc=Fi,_.polygonOffset=p,_.polygonOffsetFactor=p?-1:0,_.polygonOffsetUnits=p?-2:0,_.needsUpdate=!0;for(const _ of f)_.transparent=p,_.depthWrite=!p,_.depthTest=!0,_.depthFunc=Fi,_.needsUpdate=!0}const M=X.smoothstep(m,0,.96);return a.opacity=1-M*.86,r.opacity=1-M*.9,l.opacity=1-M*.9,c.opacity=1-M*.9,t.corneaMaterial.opacity=X.lerp(.15,.03,M),p}}}function ge(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Ue(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Lh(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function Ll(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let h=0;h<e-1;h++)n[h]=(t[h+1][1]-t[h][1])/(t[h+1][0]-t[h][0]);s[0]=n[0],s[e-1]=n[e-2];for(let h=1;h<e-1;h++)n[h-1]*n[h]<=0?s[h]=0:s[h]=(n[h-1]+n[h])*.5;for(let h=0;h<e-1;h++)if(Math.abs(n[h])<1e-8)s[h]=0,s[h+1]=0;else{const u=s[h]/n[h],d=s[h+1]/n[h],f=Math.hypot(u,d);if(f>3){const g=3/f;s[h]=g*u*n[h],s[h+1]=g*d*n[h]}}let o=0;for(let h=0;h<e-1;h++)if(i>=t[h][0]&&i<=t[h+1][0]){o=h;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r;return(2*c-3*l+1)*t[o][1]+(c-2*l+r)*a*s[o]+(-2*c+3*l)*t[o+1][1]+(c-l)*a*s[o+1]}const Fx=[[-4.18,.015],[-3.55,.048],[-2.75,.088],[-1.9,.146],[-1.25,.202],[-.82,.246],[-.5,.278],[-.08,.258],[.42,.312],[.72,.326],[.98,.254],[1.22,.21],[1.44,.198]],Zu=[[-4.18,.014],[-3.55,.042],[-2.75,.076],[-1.9,.126],[-1.25,.172],[-.82,.204],[-.5,.228],[-.08,.214],[.42,.248],[.72,.26],[.98,.208],[1.22,.182],[1.44,.174]],Dx=[[0,.116,-4.18],[0,.116,-3.72],[0,.116,-3.28],[0,.12,-2.82],[0,.175,-2.3],[0,.32,-1.78],[0,.51,-1.32],[0,.68,-.86],[0,.755,-.5],[0,.76,-.08],[0,.815,.38],[0,.885,.75],[0,1.03,.98],[0,1.24,1.19],[0,1.45,1.38],[0,1.54,1.54],[0,1.562,1.73],[0,1.538,1.9],[0,1.49,2.065]];let Br=null;function ju(){return Br||(Br=new ti(Dx.map(([i,t,e])=>new E(i,t,e)),!1,"centripetal",.5)),Br}function Nx(i){const t=ju();let e=0,n=1;for(let u=0;u<24;u++){const d=(e+n)*.5;t.getPointAt(d).z<i?e=d:n=d}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new E(0,1,0),l=new E().copy(r).addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=Ll(c,Zu)*ge(-4.18,-4.1,c);return{point:o.clone().addScaledVector(l,h),tangent:a,up:l}}function Ih(i,t,e){const n=i/e,s=t/e+.15,o=n*n+Math.pow(s-.58*Math.sqrt(Math.abs(n)+.04),2);return 1-ge(.62,1.15,o)}function Ux(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.53)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.28){const r=ge(1.31,1.53,i.z),l=1-r,c=ge(1.26,1.45,i.z);return Ve([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return pi(i,e,n,3.5)}function kx(i,t){const e=[];return e.push(zx(i,t)),e.push(...Bx(i,t)),e.push(...Ox(i,t)),e.push(...Hx(i,t)),$e(e)}function zx(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=ju(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(y=>i.boneIndexMap.get(y)),r=o.map(y=>i.bindWorldPositions.get(y)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4),g=new E(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),p=[{center:v,fwd:Xo,up:new E(-.19,.98,.06).normalize()},{center:m,fwd:Yo,up:new E(.19,.98,.06).normalize()}].map(y=>{const w=new E().crossVectors(y.up,y.fwd).normalize(),A=new E().crossVectors(y.fwd,w).normalize();return{center:y.center,fwd:y.fwd,right:w,up:A}});for(let y=0;y<=e;y++){const w=y/e,A=1-Math.pow(1-w,1.85),T=s.getPointAt(A),S=s.getTangentAt(A).normalize(),b=new E().copy(g).addScaledVector(S,-g.dot(S)).normalize(),P=new E().crossVectors(b,S).normalize(),C=T.z,R=ge(-4.18,-4.1,C),L=Ll(C,Fx)*R,F=Ll(C,Zu)*R,k=ge(1.36,1.5,C);let N=L,D=F;if(k>0){const W=Math.max(0,Math.min(1,(C-1.44)/.625)),O=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(W-.78)/.22),2))),q=Ms(C),K=(.174+.018*Ue(W,.36,.24)-.062*ge(.36,.94,W))*O;N=X.lerp(L,q,k),D=X.lerp(F,K,k)}for(let W=0;W<=n;W++){const O=W/n,q=O*Math.PI*2,K=Math.sin(q),Y=Math.cos(q);let V=N*K,H=D*Y,J=.08,ht=0,Q=0,st=0;if(C>-2.9&&C<1.6&&Y<.12){const z=ge(-2.9,-.55,C)*(1-ge(1.36,1.6,C));Q=ge(.12,-.68,Y)*z}if(C>-.45&&C<.92){const z=Ue(C,.3,.42)*Ue(Math.abs(K),.88,.22)*Ue(Y,.08,.36);st=Math.max(st,z*.28)}if(Y>.35&&C>-3.9&&C<1.6){const z=ge(.35,.92,Y)*ge(.1,.85,C)*(1-ge(1.45,1.65,C)),xt=Ue(K,0,.16)*ge(.55,.96,Y),at=Math.pow(Math.max(0,Math.sin(C*5.8+Math.abs(K)*3.4)),4)*Ue(Y,.42,.24)*ge(-2.4,-.4,C)*(1-ge(.95,1.35,C));ht=Math.max(ht,z*.48,xt*.84,at*.72)}if(C>-.78&&C<1.08){const z=Ue(C,.68,.28),xt=Ue(Math.abs(K),.44,.22)*ge(-.1,-.86,Y);H-=.018*z*xt,V+=Math.sign(K)*.012*z*xt;const at=Ue(C,.78,.2)*Ue(Math.abs(K),.7,.18)*ge(-.08,-.78,Y),St=Ue(C,-.49,.22)*Ue(Math.abs(K),.68,.19)*ge(-.05,-.78,Y);H-=.026*at+.022*St}if(C>=1.42){const z=Ue(C,1.842,.095),xt=Ue(Math.abs(K),.62,.17)*ge(.18,.74,Y);H+=.014*z*xt,V+=Math.sign(K)*.007*z*xt;const at=Ue(C,1.76,.12)*Ue(Math.abs(K),.88,.17)*Ue(Y,-.12,.25);if(V+=Math.sign(K)*.016*at,Y>.65&&C>1.56&&C<1.86){const St=Ih(V,C-1.745,.052),dt=Ih(V,C-1.648,.038);ht=Math.max(ht,Math.max(St,dt*.92))}C>1.98&&Y>-.35&&Y<.35&&(H-=.002*Ue(K,0,.08)*ge(1.98,2.055,C)),J=.22+.24*ge(1.85,2.05,C)}const $=new E().copy(T).addScaledVector(P,V).addScaledVector(b,H),tt=ge(1.52,1.6,C);if(tt>0&&Y<.04){const z=Ji(C),xt=Math.max(ge(.56,.9,Math.abs(K)),ge(1.96,2.04,C)),at=z-.0042,St=z+.039*(1-ge(1.92,2.05,C)),dt=X.lerp(St,at,xt),Dt=tt*ge(.04,-.26,Y);$.y=X.lerp($.y,dt,Dt)}if(C>1.66&&C<2)for(const z of p){if(Math.sign($.x)!==Math.sign(z.center.x))continue;const xt=new E().subVectors($,z.center),at=xt.dot(z.fwd),St=xt.dot(z.right),dt=xt.dot(z.up);if(at>0){const Dt=Math.exp(-.5*(Math.pow(St/.053,2)+Math.pow(dt/.045,2)))*ge(0,.032,at),At=Oa-.022,B=X.lerp(at,At,Dt);at>B&&$.addScaledVector(z.fwd,B-at)}}if(C>1.94&&C<2.065&&$.y>1.48){const z=Lh($.x,$.z,.054,2.018,.017,.02)*Ue($.y,1.508,.014),xt=Lh($.x,$.z,-.054,2.018,.017,.02)*Ue($.y,1.508,.014),at=Math.max(z,xt),St=ge(1.96,2.055,$.z)*Ue($.y,1.505,.032);st=Math.max(st,St*.65),at>.05&&($.x*=1-.14*at,$.y-=.009*at,$.z-=.011*at,st=Math.max(st,Math.min(1,.55+at*.85)))}const yt=y*(n+1)+W;c[yt*3]=$.x,c[yt*3+1]=$.y,c[yt*3+2]=$.z,h[yt*2]=A*5.2,h[yt*2+1]=O*1.6,u[yt*4]=J,u[yt*4+1]=ht,u[yt*4+2]=Q,u[yt*4+3]=st;const rt=Ux($,i,a,r);d.set(rt.indices,yt*4),f.set(rt.weights,yt*4)}}const M=new Uint32Array(e*n*6);let _=0;for(let y=0;y<e;y++)for(let w=0;w<n;w++){const A=y*(n+1)+w,T=(y+1)*(n+1)+w,S=(y+1)*(n+1)+(w+1),b=y*(n+1)+(w+1);M[_++]=A,M[_++]=T,M[_++]=S,M[_++]=A,M[_++]=S,M[_++]=b}const x=new Yt;return x.setAttribute("position",new Z(c,3)),x.setAttribute("uv",new Z(h,2)),x.setAttribute("aAnatomyData",new Z(u,4)),x.setAttribute("skinIndex",new be(d,4)),x.setAttribute("skinWeight",new Zt(f,4)),x.setIndex(new Z(M,1)),x.computeVertexNormals(),ja(x,e,n),x}function Bx(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.162,1.848,1.24],maxWidth:.068,maxThick:.028,rollAngle:l*-.28,isPrimaryEar:!0}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.288,1.608,1.35],maxWidth:.032,maxThick:.017,rollAngle:l*-.82,isPrimaryEar:!1})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.boneNames.map(S=>i.bindWorldPositions.get(S).clone()),c=new E().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.055),...l,new E(...r.tipPos)],d=new ti(u),f=r.boneNames.map(S=>i.boneIndexMap.get(S)),g=r.boneNames.map(S=>i.bindWorldPositions.get(S)),v=(o+1)*(a+1),m=new Float32Array(v*3),p=new Float32Array(v*2),M=new Float32Array(v*4),_=new Uint16Array(v*4),x=new Float32Array(v*4),y=new E(0,1,0);for(let S=0;S<=o;S++){const b=S/o,P=d.getPointAt(b),C=d.getTangentAt(b).normalize(),R=y.clone().addScaledVector(C,-y.dot(C)).normalize(),L=new E().crossVectors(R,C).normalize(),F=Math.cos(r.rollAngle),k=Math.sin(r.rollAngle),N=L.clone().multiplyScalar(F).addScaledVector(R,k),D=R.clone().multiplyScalar(F).addScaledVector(L,-k),W=r.isPrimaryEar?.72+.36*Math.sin(Math.pow(b,.75)*Math.PI*.88):Math.sin(Math.pow(b,.68)*Math.PI*.92),O=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(b-.76)/.24),2))),q=r.maxWidth*W*O,K=r.maxThick*(.78+.28*Math.sin(b*Math.PI))*O;for(let Y=0;Y<=a;Y++){const V=Y/a,H=V*Math.PI*2,J=new E().copy(P).addScaledVector(N,q*Math.cos(H)).addScaledVector(D,K*Math.sin(H)),ht=S*(a+1)+Y;m[ht*3]=J.x,m[ht*3+1]=J.y,m[ht*3+2]=J.z,p[ht*2]=b*.48,p[ht*2+1]=V*.48,M[ht*4]=.2,M[ht*4+1]=ge(.55,.95,b)*.65,M[ht*4+2]=0,M[ht*4+3]=ge(.65,1,b)*.3;const Q=pi(J,f,g,4),st=ge(.3,0,b),$=Ve([n,Q.indices[0],Q.indices[1],Q.indices[2]],[st,Q.weights[0]*(1-st),Q.weights[1]*(1-st),Q.weights[2]*(1-st)]);_.set($.indices,ht*4),x.set($.weights,ht*4)}}const w=new Uint16Array(o*a*6);let A=0;for(let S=0;S<o;S++)for(let b=0;b<a;b++){const P=S*(a+1)+b,C=(S+1)*(a+1)+b,R=(S+1)*(a+1)+(b+1),L=S*(a+1)+(b+1);w[A++]=P,w[A++]=C,w[A++]=R,w[A++]=P,w[A++]=R,w[A++]=L}const T=new Yt;T.setAttribute("position",new Z(m,3)),T.setAttribute("uv",new Z(p,2)),T.setAttribute("aAnatomyData",new Z(M,4)),T.setAttribute("skinIndex",new be(_,4)),T.setAttribute("skinWeight",new Zt(x,4)),T.setIndex(new Z(w,1)),T.computeVertexNormals(),ja(T,o,a),e.push(T)}return e}function Ox(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?Xo:Yo).clone(),d=new E(r*-.19,.98,.06).normalize(),f=new E().crossVectors(u,d).normalize(),g=new E().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,p=(s+1)*(o+1),M=new Float32Array(p*3),_=new Float32Array(p*2),x=new Float32Array(p*4),y=new Uint16Array(p*4),w=new Float32Array(p*4),A=Oa+.0016;for(let P=0;P<=o;P++){const C=P/o,R=Ue(C,.06,.08);for(let L=0;L<=s;L++){const F=L/s,k=X.degToRad(X.lerp(-65,65,F)),N=Math.sin(F*Math.PI),D=v?42*N:-38*N,W=v?78:-74,O=X.degToRad(X.lerp(D,W,C)),q=A+.0016*R-.0026*C,K=new E().addScaledVector(u,Math.cos(O)*Math.cos(k)).addScaledVector(f,Math.cos(O)*Math.sin(k)).addScaledVector(g,Math.sin(O)).normalize(),Y=new E().copy(l).addScaledVector(K,q),V=P*(s+1)+L;M[V*3]=Y.x,M[V*3+1]=Y.y,M[V*3+2]=Y.z,_[V*2]=F*.35,_[V*2+1]=C*.18,x[V*4]=.25;const H=N*(1-ge(.48,1,C)),J=Math.max(0,Math.min(1,H));y.set([m,n,0,0],V*4),w.set([J,1-J,0,0],V*4)}}const T=new Uint16Array(s*o*6);let S=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,F=(P+1)*(s+1)+(C+1),k=P*(s+1)+(C+1);v?(T[S++]=R,T[S++]=F,T[S++]=L,T[S++]=R,T[S++]=k,T[S++]=F):(T[S++]=R,T[S++]=L,T[S++]=F,T[S++]=R,T[S++]=F,T[S++]=k)}const b=new Yt;b.setAttribute("position",new Z(M,3)),b.setAttribute("uv",new Z(_,2)),b.setAttribute("aAnatomyData",new Z(x,4)),b.setAttribute("skinIndex",new be(y,4)),b.setAttribute("skinWeight",new Zt(w,4)),b.setIndex(new Z(T,1)),b.computeVertexNormals(),e.push(b)}}return e}function Hx(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new E(a*.14,.89,.78),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new E(a*.292,.048,.925),new E(a*.292,.028,.992)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(Dh(i,r,l,!0,a,n,s)),e.push(...Fh(i,o,!0,t));const c=[new E(a*.13,.75,-.49),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new E(a*.278,.046,-.506),new E(a*.278,.028,-.442)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(Dh(i,c,h,!1,a,n,s)),e.push(...Fh(i,o,!1,t))}return e}function Fh(i,t,e,n){const s=[],o=Yu(t,e),a=n===0?15:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=Math.hypot(l.dirX,l.dirZ),p=l.dirX/m,M=l.dirZ/m,_=M,x=-p;for(let T=0;T<=a;T++){const S=T/a,b=X.lerp(-.36,1,S),P=Math.max(0,b),C=Math.max(0,-b)*.036,R=Math.sin(P*Math.PI)*.009-.008*P*P+C,L=l.rootX+p*l.toeLength*b,F=l.rootZ+M*l.toeLength*b,k=l.rootY+R,N=1+.42*Math.pow(1-ge(-.36,.18,b),1.5),D=1+.13*Ue(P,.4,.18)+.11*Ue(P,.84,.1),W=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(S-.89)/.11),2))),O=X.lerp(l.baseRadius,l.tipRadius,P)*N*D*W;for(let q=0;q<=r;q++){const K=q/r,Y=K*Math.PI*2,V=Math.sin(Y),H=Math.cos(Y),J=1.1+.22*(1-ge(-.34,.2,b)),ht=L+_*V*O*J,Q=F+x*V*O*J;let st=k+H*O*.86;st<.003&&(st=.003+Math.max(0,st)*.14);const $=T*(r+1)+q;u[$*3]=ht,u[$*3+1]=st,u[$*3+2]=Q,d[$*2]=S*.36,d[$*2+1]=K*.32,f[$*4]=.28,f[$*4+1]=H>.2?.52*ge(.2,.85,P):0,f[$*4+2]=.35,g.set([c,0,0,0],$*4),v.set([1,0,0,0],$*4)}}const y=new Uint16Array(a*r*6);let w=0;for(let T=0;T<a;T++)for(let S=0;S<r;S++){const b=T*(r+1)+S,P=(T+1)*(r+1)+S,C=(T+1)*(r+1)+(S+1),R=T*(r+1)+(S+1);y[w++]=b,y[w++]=P,y[w++]=C,y[w++]=b,y[w++]=C,y[w++]=R}const A=new Yt;A.setAttribute("position",new Z(u,3)),A.setAttribute("uv",new Z(d,2)),A.setAttribute("aAnatomyData",new Z(f,4)),A.setAttribute("skinIndex",new be(g,4)),A.setAttribute("skinWeight",new Zt(v,4)),A.setIndex(new Z(y,1)),A.computeVertexNormals(),ja(A,a,r),s.push(A)}return s}function Dh(i,t,e,n,s,o,a){const r=new ti(t,!1,"centripetal",.5),l=e.map(x=>i.boneIndexMap.get(x)),c=e.map(x=>i.bindWorldPositions.get(x)),h=(o+1)*(a+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new E(0,0,1);for(let x=0;x<=o;x++){const w=1-x/o,A=r.getPointAt(w),T=r.getTangentAt(w).negate().normalize(),S=m.clone().addScaledVector(T,-m.dot(T)).normalize(),b=new E().crossVectors(S,T).normalize(),P=.5+.5*ge(0,.34,w),C=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(w-.91)/.09),2)))*P;let R=.08,L=.092;if(n){const N=Ue(w,.54,.16)*.022,D=Ue(w,.86,.12)*.072;R=(.076+N+D)*C,L=(.09+Ue(w,.25,.18)*.028+N+D*.86)*C}else{const N=Ue(w,.52,.15)*.026,D=Ue(w,.86,.12)*.068;R=(.074+N+D)*C,L=(.094+Ue(w,.26,.19)*.038+N*1.06+D*.84)*C}const F=ge(.7,.94,w),k=1-ge(.08,.42,w);for(let N=0;N<=a;N++){const D=N/a,W=D*Math.PI*2,O=Math.sin(W),q=Math.cos(W),K=O*s>0?Math.abs(O):0,Y=1-.28*k*K;let V=1;if(F>.01&&q>-.35){const z=Math.atan2(O,Math.max(.05,q+.25)),xt=Math.cos(z*3.6);V+=.14*F*Math.max(-.12,xt)*ge(-.35,.45,q)}let H=0;if(n&&w>.28&&w<.84){const z=Math.max(0,O*s*.62-q*.78);H=Math.pow(z,3.6)*Math.sin((w-.28)/.56*Math.PI)*.028}else if(!n&&w>.34&&w<.84){const z=Math.max(0,O*s*.58-q*.81);H=Math.pow(z,3.8)*Math.sin((w-.34)/.5*Math.PI)*.022}const J=new E().copy(A).addScaledVector(b,(R*Y*O+s*H*.65)*V).addScaledVector(S,(L*q-H*.75)*V);w>.7&&J.y<.004&&(J.y=.002+Math.max(0,J.y)*.14);const ht=x*(a+1)+N;u[ht*3]=J.x,u[ht*3+1]=J.y,u[ht*3+2]=J.z,d[ht*2]=w*1.35,d[ht*2+1]=D*.85,f[ht*4]=.22,f[ht*4+1]=Math.min(1,H*22+Math.pow(Math.max(0,Math.sin(w*14)),4)*K*.65),f[ht*4+2]=Math.max(ge(.65,.96,w)*.35,Math.max(0,-O*s)*.45);const Q=pi(J,l,c,3.5),st=ge(.24,0,w)*.72,$=l[l.length-1],tt=ge(.74,.88,w),yt=(1-st)*(1-tt),rt=Ve([$,l[0],Q.indices[0],Q.indices[1]],[tt,st*(1-tt),Q.weights[0]*yt,Q.weights[1]*yt]);g.set(rt.indices,ht*4),v.set(rt.weights,ht*4)}}const p=new Uint16Array(o*a*6);let M=0;for(let x=0;x<o;x++)for(let y=0;y<a;y++){const w=x*(a+1)+y,A=(x+1)*(a+1)+y,T=(x+1)*(a+1)+(y+1),S=x*(a+1)+(y+1);p[M++]=w,p[M++]=A,p[M++]=T,p[M++]=w,p[M++]=T,p[M++]=S}const _=new Yt;return _.setAttribute("position",new Z(u,3)),_.setAttribute("uv",new Z(d,2)),_.setAttribute("aAnatomyData",new Z(f,4)),_.setAttribute("skinIndex",new be(g,4)),_.setAttribute("skinWeight",new Zt(v,4)),_.setIndex(new Z(p,1)),_.computeVertexNormals(),ja(_,o,a),_}function ja(i,t,e){const n=i.getAttribute("normal"),s=new E,o=new E;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function Ci(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Wx(i,t){return{jawSkinGeometry:$e([Gx(i,t),...Xx(i,t)]),oralGumsGeometry:Yx(i,t),teethGeometry:$x(i,t),tongueGeometry:qx(i,t),irisGeometry:Nh(i,t,!1),corneaGeometry:Nh(i,t,!0),clawsGeometry:Zx(i,t)}}function Vx(i,t){const e=1.66+Math.cos(i)*(t?.355:.34),n=Math.max(.02,Ms(e)-(t?.022:.028));return{x:Math.sin(i)*n,z:e}}function Gx(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4);for(let p=0;p<=e;p++){const M=p/e,_=X.lerp(1.45,2.056,M),x=Ms(_),y=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.87)/.13),2))),w=Math.max(.002,(x-.0032*Ci(1.55,1.65,_))*y),A=Ji(_),T=.025*(1-Ci(1.45,1.59,_)),S=A+.0032+T,b=(.074-.03*M)*y;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),F=Math.cos(R),k=Math.exp(-Math.pow((M-.28)/.22,2))*.009,N=Math.exp(-Math.pow((M-.3)/.16,2))*Math.abs(L)*.008,D=(w+N)*L,W=-.019*F*(1-Math.pow(L,2))*Ci(1.57,1.66,_),O=F>=0?S+W:S+(b+k)*F,q=p*(n+1)+P;c[q*3]=D,c[q*3+1]=O,c[q*3+2]=_,h[q*2]=M*.95,h[q*2+1]=C*.85,u[q*4]=.22,u[q*4+1]=0,u[q*4+2]=F<-.15?Ci(.92,.25,M)*-F*.72:0,u[q*4+3]=M>.82?(M-.82)*2.2:0;const K=Ci(1.51,1.6,_),Y=1-K,V=Ci(1.31,1.53,_),H=Ci(1.26,1.45,_),J=Y*(1-V),ht=Ve([s,o,a,r],[K,Y*V,J*(.52+.48*H),J*(.48-.48*H)]);d.set(ht.indices,q*4),f.set(ht.weights,q*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let p=0;p<e;p++)for(let M=0;M<n;M++){const _=p*(n+1)+M,x=(p+1)*(n+1)+M,y=(p+1)*(n+1)+(M+1),w=p*(n+1)+(M+1);g[v++]=_,g[v++]=x,g[v++]=y,g[v++]=_,g[v++]=y,g[v++]=w}const m=new Yt;return m.setAttribute("position",new Z(c,3)),m.setAttribute("uv",new Z(h,2)),m.setAttribute("aAnatomyData",new Z(u,4)),m.setAttribute("skinIndex",new be(d,4)),m.setAttribute("skinWeight",new Zt(f,4)),m.setIndex(new Z(g,1)),m.computeVertexNormals(),m}function Xx(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?12:8,a=t===0?10:6;for(const r of["L","R"]){const l=r==="L"?1:-1,c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=a;M++){const _=M/a;for(let x=0;x<=o;x++){const y=x/o,w=X.lerp(1.56,1.72,y),A=Ji(w),T=X.lerp(A-.015,A+.018,_),S=Ms(w)-.008,b=-.005*Math.sin(y*Math.PI)*Math.sin(_*Math.PI),P=l*(S+b),C=M*(o+1)+x;h[C*3]=P,h[C*3+1]=T,h[C*3+2]=w,u[C*2]=y*.25,u[C*2+1]=_*.25,d[C*4]=.22;const R=Ci(0,1,_);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<a;M++)for(let _=0;_<o;_++){const x=M*(o+1)+_,y=(M+1)*(o+1)+_,w=(M+1)*(o+1)+(_+1),A=M*(o+1)+(_+1);l>0?(v[m++]=x,v[m++]=w,v[m++]=y,v[m++]=x,v[m++]=A,v[m++]=w):(v[m++]=x,v[m++]=y,v[m++]=w,v[m++]=x,v[m++]=w,v[m++]=A)}const p=new Yt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new be(f,4)),p.setAttribute("skinWeight",new Zt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),e.push(p)}return e}function Yx(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?28:16,a=t===0?18:10;{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const _=M/o,x=X.lerp(1.58,2.025,_),y=Math.max(.014,Ms(x)-.018),w=Ji(x),A=Math.sin(_*Math.PI*12)*.0022*Math.sin(_*Math.PI);for(let T=0;T<=a;T++){const S=T/a,b=(S-.5)*2,P=Math.cos(b*Math.PI*.5)*.028*(1-.45*_),C=-.002*Math.exp(-Math.pow(b/.12,2)),R=Math.exp(-Math.pow((Math.abs(b)-.88)/.12,2))*-.005,L=b*y,F=w+.007+P+A*(1-Math.abs(b)*.5)+C+R,k=M*(a+1)+T;h[k*3]=L,h[k*3+1]=F,h[k*3+2]=x,u[k*2]=_*2,u[k*2+1]=S*2,d[k*4+3]=(1-_)*.65,f.set([n,0,0,0],k*4),g.set([1,0,0,0],k*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<o;M++)for(let _=0;_<a;_++){const x=M*(a+1)+_,y=(M+1)*(a+1)+_,w=(M+1)*(a+1)+(_+1),A=M*(a+1)+(_+1);v[m++]=x,v[m++]=w,v[m++]=y,v[m++]=x,v[m++]=A,v[m++]=w}const p=new Yt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new be(f,4)),p.setAttribute("skinWeight",new Zt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),e.push(p)}{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const _=M/o,x=X.lerp(1.58,2.015,_),y=Math.max(.012,Ms(x)-.022),w=Ji(x);for(let A=0;A<=a;A++){const T=A/a,S=(T-.5)*2,b=-Math.cos(S*Math.PI*.5)*.016*(1-.35*_),P=Math.exp(-Math.pow((Math.abs(S)-.86)/.14,2))*.0055,C=S*y,R=w-.004+b+P,L=M*(a+1)+A;h[L*3]=C,h[L*3+1]=R,h[L*3+2]=x,u[L*2]=_*2,u[L*2+1]=T*2,d[L*4+3]=(1-_)*.55,f.set([s,0,0,0],L*4),g.set([1,0,0,0],L*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<o;M++)for(let _=0;_<a;_++){const x=M*(a+1)+_,y=(M+1)*(a+1)+_,w=(M+1)*(a+1)+(_+1),A=M*(a+1)+(_+1);v[m++]=x,v[m++]=y,v[m++]=w,v[m++]=x,v[m++]=w,v[m++]=A}const p=new Yt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new be(f,4)),p.setAttribute("skinWeight",new Zt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),e.push(p)}const r=t===0?18:10,l=t===0?12:8;{const c=(r+1)*(l+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=l;M++){const _=M/l;for(let x=0;x<=r;x++){const y=x/r,w=X.lerp(-Math.PI*.62,Math.PI*.62,y),A=1.66-Math.cos(w)*.1,T=Ms(Math.max(1.55,A))-.02,S=Math.sin(w)*T,b=Ji(A),P=X.lerp(b-.016,b+.026,_),C=M*(r+1)+x;h[C*3]=S,h[C*3+1]=P,h[C*3+2]=A,u[C*2]=y*1.5,u[C*2+1]=_*1.5,d[C*4+3]=.95*Math.cos(w*.65);const R=Ci(0,1,_);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(r*l*6);let m=0;for(let M=0;M<l;M++)for(let _=0;_<r;_++){const x=M*(r+1)+_,y=(M+1)*(r+1)+_,w=(M+1)*(r+1)+(_+1),A=M*(r+1)+(_+1);v[m++]=x,v[m++]=y,v[m++]=w,v[m++]=x,v[m++]=w,v[m++]=A}const p=new Yt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new be(f,4)),p.setAttribute("skinWeight",new Zt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),e.push(p)}return $e(e)}function $x(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,f=X.lerp(-Math.PI*.42,Math.PI*.42,d),g=Vx(f,r),v=g.x,m=g.z,p=Ji(m)+(r?.01:-.009),M=1+.3*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),_=.0195*M*(.78+.22*Math.cos(f)),x=.0054*M,y=(o+1)*(a+1),w=new Float32Array(y*3),A=new Float32Array(y*2),T=new Float32Array(y*4),S=new Uint16Array(y*4),b=new Float32Array(y*4),P=-Math.sin(f),C=-Math.cos(f);for(let k=0;k<=o;k++){const N=r?1-k/o:k/o,D=x*(1-.88*Math.pow(N,1.25)),W=.0045*N*N,O=v+P*W,q=p+h*_*N,K=m+C*W-.0025*N*N;for(let Y=0;Y<=a;Y++){const V=Y/a,H=V*Math.PI*2,J=k*(a+1)+Y;w[J*3]=O+Math.sin(H)*D,w[J*3+1]=q,w[J*3+2]=K+Math.cos(H)*D,A[J*2]=N,A[J*2+1]=V,S.set([c,0,0,0],J*4),b.set([1,0,0,0],J*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let k=0;k<o;k++)for(let N=0;N<a;N++){const D=k*(a+1)+N,W=(k+1)*(a+1)+N,O=(k+1)*(a+1)+(N+1),q=k*(a+1)+(N+1);R[L++]=D,R[L++]=W,R[L++]=O,R[L++]=D,R[L++]=O,R[L++]=q}const F=new Yt;F.setAttribute("position",new Z(w,3)),F.setAttribute("uv",new Z(A,2)),F.setAttribute("aAnatomyData",new Z(T,4)),F.setAttribute("skinIndex",new be(S,4)),F.setAttribute("skinWeight",new Zt(b,4)),F.setIndex(new Z(R,1)),F.computeVertexNormals(),s.push(F)}}return $e(s)}function qx(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let m=0;m<=e;m++){const p=m/e,M=X.lerp(1.62,1.96,p),_=Ji(M)-.0035,x=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),y=(.068+.01*Math.sin(p*Math.PI)-.02*p)*x,w=(.013-.004*p)*x;for(let A=0;A<=n;A++){const T=A/n,S=T*Math.PI*2,b=Math.sin(S),P=Math.cos(S),C=P>.35?-.0035*Math.exp(-Math.pow(b/.24,2)):0,R=P>.2?.001*Math.sin(p*Math.PI*26)*Math.cos(b*Math.PI*9)*x:0,L=new E(y*b,_+w*P+C+R,M),F=m*(n+1)+A;l[F*3]=L.x,l[F*3+1]=L.y,l[F*3+2]=L.z,c[F*2]=p*2.5,c[F*2+1]=T*1.8;const k=pi(L,o,a,3.8);u.set(k.indices,F*4),d.set(k.weights,F*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let p=0;p<n;p++){const M=m*(n+1)+p,_=(m+1)*(n+1)+p,x=(m+1)*(n+1)+(p+1),y=m*(n+1)+(p+1);f[g++]=M,f[g++]=_,f[g++]=x,f[g++]=M,f[g++]=x,f[g++]=y}const v=new Yt;return v.setAttribute("position",new Z(l,3)),v.setAttribute("uv",new Z(c,2)),v.setAttribute("aAnatomyData",new Z(h,4)),v.setAttribute("skinIndex",new be(u,4)),v.setAttribute("skinWeight",new Zt(d,4)),v.setIndex(new Z(f,1)),v.computeVertexNormals(),v}function Nh(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?Xo:Yo).clone(),u=new E(r*-.19,.98,.06).normalize(),d=new E().crossVectors(u,h).normalize(),f=new E().crossVectors(h,d).normalize(),g=e?Oa+8e-4:Oa,v=.94,m=(s+1)*(o+1),p=new Float32Array(m*3),M=new Float32Array(m*2),_=new Float32Array(m*4),x=new Uint16Array(m*4),y=new Float32Array(m*4);for(let S=0;S<=s;S++){const b=S/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(b),C=Math.cos(b);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,F=Math.cos(L),k=Math.sin(L);let N=g;if(b<v){const K=1-b/v;N+=e?.0013*K*K:-.0025*K*K}const D=new E().addScaledVector(h,C).addScaledVector(d,P*F).addScaledVector(f,P*k).normalize(),W=new E().copy(l).addScaledVector(D,N),O=S*(o+1)+R;p[O*3]=W.x,p[O*3+1]=W.y,p[O*3+2]=W.z;const q=Math.min(.498,b/v*.48);M[O*2]=.5+q*F,M[O*2+1]=.5+q*k,x.set([c,0,0,0],O*4),y.set([1,0,0,0],O*4)}}const w=new Uint16Array(s*o*6);let A=0;for(let S=0;S<s;S++)for(let b=0;b<o;b++){const P=S*(o+1)+b,C=(S+1)*(o+1)+b,R=(S+1)*(o+1)+(b+1),L=S*(o+1)+(b+1);w[A++]=P,w[A++]=C,w[A++]=R,w[A++]=P,w[A++]=R,w[A++]=L}const T=new Yt;T.setAttribute("position",new Z(p,3)),T.setAttribute("uv",new Z(M,2)),T.setAttribute("aAnatomyData",new Z(_,4)),T.setAttribute("skinIndex",new be(x,4)),T.setAttribute("skinWeight",new Zt(y,4)),T.setIndex(new Z(w,1)),T.computeVertexNormals(),n.push(T)}return $e(n)}function Zx(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=Yu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,f=d,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,p=l.rootZ+d*l.toeLength*v,M=l.rootY+Math.sin(v*Math.PI)*.009-.008*v*v+.002,_=l.toeLength*(1-v)+l.clawLength,x=l.tipRadius*.72,y=(n+1)*(s+1),w=new Float32Array(y*3),A=new Float32Array(y*2),T=new Float32Array(y*4),S=new Uint16Array(y*4),b=new Float32Array(y*4);for(let L=0;L<=n;L++){const F=L/n,k=x*Math.sqrt(Math.max(.06,1-Math.pow(F,1.72))),N=m+u*_*F,D=p+d*_*F,W=Math.max(.004,M-.028*Math.pow(F,1.82)+.004*Math.sin(F*Math.PI));for(let O=0;O<=s;O++){const q=O/s,K=q*Math.PI*2,Y=Math.sin(K),V=Math.cos(K),H=L*(s+1)+O;w[H*3]=N+f*Y*k*.72,w[H*3+1]=Math.max(.002,W+V*k*1.04),w[H*3+2]=D+g*Y*k*.72,A[H*2]=F,A[H*2+1]=q,S.set([c,0,0,0],H*4),b.set([1,0,0,0],H*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let F=0;F<s;F++){const k=L*(s+1)+F,N=(L+1)*(s+1)+F,D=(L+1)*(s+1)+(F+1),W=L*(s+1)+(F+1);P[C++]=k,P[C++]=N,P[C++]=D,P[C++]=k,P[C++]=D,P[C++]=W}const R=new Yt;R.setAttribute("position",new Z(w,3)),R.setAttribute("uv",new Z(A,2)),R.setAttribute("aAnatomyData",new Z(T,4)),R.setAttribute("skinIndex",new be(S,4)),R.setAttribute("skinWeight",new Zt(b,4)),R.setIndex(new Z(P,1)),R.computeVertexNormals(),e.push(R)}}return $e(e)}function ho(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function jx(i,t){const e=[],n=[];for(const s of["L","R"]){const o=s==="L"?1:-1;e.push(...Kx(i,s,o,t)),n.push(...Qx(i,s,o,t)),e.push(...Jx(i,s,t)),n.push(t_(i,s,t)),n.push(e_(i,s,o,t)),e.push(...n_(i,s,o,t)),n.push(i_(i,s,o,t))}return{wingSparsSkinGeometry:$e(e),wingMembraneGeometry:$e(n),dorsalSpinesGeometry:s_(i,t)}}function Ha(i,t,e,n,s,o,a=.42,r=.12){const l=new ti(t),c=e.map(y=>i.boneIndexMap.get(y)),h=e.map(y=>i.bindWorldPositions.get(y)),u=(s+1)*(o+1),d=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),p=new E(0,1,0);for(let y=0;y<=s;y++){const w=y/s,A=l.getPointAt(w),T=l.getTangentAt(w).normalize();let S=p.clone().addScaledVector(T,-p.dot(T));S.lengthSq()<1e-4&&S.set(0,0,1),S.normalize();const b=new E().crossVectors(S,T).normalize(),P=w*(n.length-1),C=Math.min(n.length-2,Math.floor(P)),R=P-C;let L=X.lerp(n[C],n[C+1],R);w>.86&&(L*=Math.sqrt(Math.max(0,1-Math.pow((w-.86)/.14,2))));for(let F=0;F<=o;F++){const k=F/o,N=k*Math.PI*2,D=new E().copy(A).addScaledVector(b,L*Math.sin(N)).addScaledVector(S,L*a*Math.cos(N)),W=y*(o+1)+F;d[W*3]=D.x,d[W*3+1]=D.y,d[W*3+2]=D.z,f[W*2]=w*1.4,f[W*2+1]=k*.45,g[W*4]=.08,g[W*4+1]=ho(.3,.92,w)*.38,g[W*4+2]=r;const O=pi(D,c,h,3.8);v.set(O.indices,W*4),m.set(O.weights,W*4)}}const M=new Uint16Array(s*o*6);let _=0;for(let y=0;y<s;y++)for(let w=0;w<o;w++){const A=y*(o+1)+w,T=(y+1)*(o+1)+w,S=(y+1)*(o+1)+(w+1),b=y*(o+1)+(w+1);M[_++]=A,M[_++]=T,M[_++]=S,M[_++]=A,M[_++]=S,M[_++]=b}const x=new Yt;return x.setAttribute("position",new Z(d,3)),x.setAttribute("uv",new Z(f,2)),x.setAttribute("aAnatomyData",new Z(g,4)),x.setAttribute("skinIndex",new be(v,4)),x.setAttribute("skinWeight",new Zt(m,4)),x.setIndex(new Z(M,1)),x.computeVertexNormals(),x}function Kx(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new E(e*.16,.9,.68),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(Ha(i,c,h,[.048,.052,.05,.042,.032,.02,.005],o,a,.58,.08));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(Ha(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.013,.0085,.0025],r,l,.34,.1))}return s}function to(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const f=d/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),p=d*(i+1)+g;s[p*3]=m.pos.x,s[p*3+1]=m.pos.y,s[p*3+2]=m.pos.z,o[p*2]=v*1.25,o[p*2+1]=f*1.25,a[p*4]=.06,a[p*4+1]=m.pinkStripe??0,a[p*4+2]=m.iceBlue??.14,a[p*4+3]=m.thinness,r.set(m.skin.indices,p*4),l.set(m.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let f=0;f<i;f++){const g=d*(i+1)+f,v=(d+1)*(i+1)+f,m=(d+1)*(i+1)+(f+1),p=d*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=p}const u=new Yt;return u.setAttribute("position",new Z(s,3)),u.setAttribute("uv",new Z(o,2)),u.setAttribute("uv1",new Z(o,2)),u.setAttribute("aAnatomyData",new Z(a,4)),u.setAttribute("skinIndex",new be(r,4)),u.setAttribute("skinWeight",new Zt(l,4)),u.setIndex(new Z(c,1)),u.computeVertexNormals(),u}function Qx(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(to(o,Math.max(4,Math.floor(a*.5)),(x,y)=>{const w=new E().lerpVectors(new E(e*.25,.96,.74),f,x),A=x<.45?new E().lerpVectors(v,g,x/.45):new E().lerpVectors(g,f,(x-.45)/.55),T=new E().lerpVectors(A,w,y),S=Math.max(0,1-x*2.1),b=Math.max(0,(x-.45)*1.82),P=Math.max(0,1-S-b),C=Ve([c,l,r,0],[S,P,b,0]);return{pos:T,skin:C,thinness:.38+.34*y,pinkStripe:.18*y,iceBlue:.1}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),M=i.boneIndexMap.get(`wingFinger_${t}_1_a`),_=i.boneIndexMap.get(`wingFinger_${t}_1_b`);s.push(to(o,a,(x,y)=>{const w=new E(e*.21,.9,.62),A=new E(e*.18,.75,-.44),T=new E().lerpVectors(w,A,y),S=y<.5?new E().lerpVectors(f,m,y*2):new E().lerpVectors(m,p,(y-.5)*2),b=x<.45?new E().lerpVectors(v,g,x/.45):new E().lerpVectors(g,f,(x-.45)/.55),P=new E().lerpVectors(T,S,x),C=new E().lerpVectors(b,P,Math.pow(y,.85));C.z+=Math.sin(x*Math.PI)*.045*Math.pow(y,1.8),C.y+=Math.sin(x*Math.PI)*Math.sin(y*Math.PI)*.022;const R=1-x,L=x,F=y<.36?h:y<.72?u:d,k=y<.25?l:y<.55?r:M,N=y<.55?M:_,D=y<.55?y/.55:(y-.55)/.45,W=Ve([F,k,N,c],[R*.88,L*(1-D),L*D,R*.12]),O=Math.pow(.5+.5*Math.sin(y*14+x*4.5),3)*.55;return{pos:C,skin:W,thinness:.55+.4*y,pinkStripe:O*x,iceBlue:(1-x)*.35+.08}}));for(let x=1;x<=5;x++){const y=i.bindWorldPositions.get(`wingFinger_${t}_${x}_a`),w=i.bindWorldPositions.get(`wingFinger_${t}_${x}_b`),A=i.bindWorldPositions.get(`wingFinger_${t}_${x+1}_a`),T=i.bindWorldPositions.get(`wingFinger_${t}_${x+1}_b`),S=i.boneIndexMap.get(`wingFinger_${t}_${x}_a`),b=i.boneIndexMap.get(`wingFinger_${t}_${x}_b`),P=i.boneIndexMap.get(`wingFinger_${t}_${x+1}_a`),C=i.boneIndexMap.get(`wingFinger_${t}_${x+1}_b`);s.push(to(o,a,(R,L)=>{const F=L<.5?new E().lerpVectors(f,y,L*2):new E().lerpVectors(y,w,(L-.5)*2),k=L<.5?new E().lerpVectors(f,A,L*2):new E().lerpVectors(A,T,(L-.5)*2),N=new E().lerpVectors(F,k,R),D=x===5?-.028:.042,W=new E().subVectors(f,N).normalize();N.addScaledVector(W,D*Math.sin(R*Math.PI)*Math.pow(L,2.2)),N.y+=Math.sin(R*Math.PI)*Math.sin(L*Math.PI)*.018;let O;if(L<.5){const Y=L*2;O=Ve([r,S,P,0],[1-Y,Y*(1-R),Y*R,0])}else{const Y=(L-.5)*2;O=Ve([S,b,P,C],[(1-R)*(1-Y),(1-R)*Y,R*(1-Y),R*Y])}const q=Math.sin(L*18-x*.65+Math.sin(R*Math.PI)*1.4),K=ho(.28,.94,q)*ho(.14,.58,L)*.88;return{pos:N,skin:O,thinness:.62+.38*L,pinkStripe:K,iceBlue:(1-L)*.24+.06}}))}return s}function Jx(i,t,e){const n=t==="L"?1:-1,s=[],o=e===0?10:6,a=e===0?8:6;return Xu.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new E(n*r.rootX,r.rootY,r.rootZ),u=new E(n*r.tipX,r.tipY,r.tipZ);s.push(Ha(i,[h,u],[c],[.009,.0022],o,a,.35,.2))}),s}function t_(i,t,e){const n=t==="L"?1:-1,s=e===0?16:9,o=i.boneIndexMap.get(`pelvicFin_${t}_1`),a=i.boneIndexMap.get(`pelvicFin_${t}_2`),r=i.boneIndexMap.get(`pelvicFin_${t}_3`),l=new E(n*.16,.72,-.7),c=new E(n*.095,.52,-1.46);return to(s,s,(h,u)=>{const d=new E().lerpVectors(l,c,h),f=.29*Math.sin(Math.pow(h,.74)*Math.PI),g=d.clone().add(new E(n*f,-.025*f,-.08*Math.sin(h*Math.PI))),v=new E().lerpVectors(d,g,u),m=Math.max(0,1-h*2),p=Math.max(0,(h-.5)*2),M=Math.max(0,1-m-p),_=Ve([o,a,r,0],[m,M,p,0]);return{pos:v,skin:_,thinness:.52+.45*u,pinkStripe:u*.38,iceBlue:.26}})}function e_(i,t,e,n){const s=n===0?12:6,o=i.boneIndexMap.get("tail_7"),a=i.boneIndexMap.get("tail_8"),r=new E(e*.02,.12,-2.92),l=new E(e*.018,.116,-3.22);return to(s,s,(c,h)=>{const u=new E().lerpVectors(r,l,c),d=.115*Math.sin(Math.pow(c,.75)*Math.PI),f=u.clone().add(new E(e*d,.008*Math.sin(c*Math.PI),-.025*c)),g=new E().lerpVectors(u,f,h),v=Ve([o,a,0,0],[1-c,c,0,0]);return{pos:g,skin:v,thinness:.55+.4*h,pinkStripe:h*.35,iceBlue:.28}})}function n_(i,t,e,n){const s=[],o=n===0?10:6,a=n===0?8:6;return Gu.forEach((r,l)=>{const c=`tailFin_${t}_${l+1}`,h=new E(e*r.rootX,r.rootY,r.rootZ),u=new E().lerpVectors(h,new E(e*r.tipX,r.tipY,r.tipZ),.92);s.push(Ha(i,[h,u],[c],[.0075,.0018],o,a,.34,.24))}),s}function i_(i,t,e,n){const s=n===0?28:n===1?16:10,o=n===0?16:n===1?10:6,a=i.boneIndexMap.get(`tailFinHinge_${t}`),r=i.boneIndexMap.get(`tailFin_${t}_1`),l=i.boneIndexMap.get(`tailFin_${t}_3`),c=i.boneIndexMap.get(`tailFin_${t}_5`),h=-3.22,u=-4.08;return to(s,o,(d,f)=>{const g=X.lerp(h,u,d),v=e*.016,m=.116,p=Math.sin(Math.pow(d,.6)*Math.PI),M=.455*p*(1+.1*Math.sin(d*Math.PI*2-.6)),_=.095*Math.sin(Math.min(1,d/.52)*Math.PI)*(d<.52?1:0),x=-.115*Math.sin(Math.max(0,(d-.5)/.5)*Math.PI),y=g+_+x,w=v+e*M,A=m+.012*p,T=Math.sin(d*Math.PI*5)*.0028*Math.sin(f*Math.PI)*p,S=new E(X.lerp(v,w,f),X.lerp(m,A,f)+T,X.lerp(g,y,f)),b=Math.max(0,1-d*2.2),P=Math.max(0,(d-.55)*2.2),C=Math.max(0,1-b-P),R=Ve([a,r,l,c],[.25,b*.75,C*.75,P*.75]);return{pos:S,skin:R,thinness:.54+.44*f,pinkStripe:ho(.32,.94,f)*.52,iceBlue:.34*(1-f*.35)}})}function s_(i,t){const e=t===0?84:t===1?48:28,n=t===0?10:6,s=["tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest"],o=s.map(M=>i.boneIndexMap.get(M)),a=s.map(M=>i.bindWorldPositions.get(M));new ti([new E(0,.14,-3.02),new E(0,.23,-2.24),new E(0,.45,-1.5),new E(0,.82,-.78),new E(0,.94,-.32),new E(0,1.01,.18),new E(0,1.07,.6)]);const r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*3),h=new Float32Array(r*2),u=new Float32Array(r*4),d=new Uint16Array(r*4),f=new Float32Array(r*4);for(let M=0;M<=e;M++){const _=M/e,x=X.lerp(-3.02,.66,_),y=Nx(x),w=y.point,A=y.up,T=ho(0,.14,_)*ho(1,.82,_),S=(.012+.024*Math.sin(Math.pow(_,.78)*Math.PI))*T,b=.015*(.45+.55*T),P=pi(w,o,a,3.8);for(let C=0;C<=n;C++){const R=C/n,L=Math.sin(R*Math.PI),F=Math.cos(R*Math.PI)*b*(1-.55*L),k=-.016+(S+.016)*Math.pow(L,.9),N=w.clone().addScaledVector(A,k);N.x=F;const D=N.clone().addScaledVector(A,S*.35*L),W=M*(n+1)+C;l[W*3]=N.x,l[W*3+1]=N.y,l[W*3+2]=N.z,c[W*3]=D.x,c[W*3+1]=D.y,c[W*3+2]=D.z,h[W*2]=_*3,h[W*2+1]=R,u[W*4]=.08,u[W*4+1]=L*.72,u[W*4+2]=L*.28,u[W*4+3]=L*.88,d.set(P.indices,W*4),f.set(P.weights,W*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let M=0;M<e;M++)for(let _=0;_<n;_++){const x=M*(n+1)+_,y=(M+1)*(n+1)+_,w=(M+1)*(n+1)+(_+1),A=M*(n+1)+(_+1);g[v++]=x,g[v++]=w,g[v++]=y,g[v++]=x,g[v++]=A,g[v++]=w}const m=new Yt;m.setAttribute("position",new Z(l,3)),m.setAttribute("uv",new Z(h,2)),m.setAttribute("uv1",new Z(h,2)),m.setAttribute("aAnatomyData",new Z(u,4)),m.setAttribute("skinIndex",new be(d,4)),m.setAttribute("skinWeight",new Zt(f,4)),m.setIndex(new Z(g,1));const p=new Z(c,3);return p.name="dorsalFlex",m.morphAttributes.position=[p],m.computeVertexNormals(),m}function o_(){const i=_x(),t=Ix(),e=new di;e.name="LightFury_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s=[],o={},a={};for(const l of[0,1,2]){const c=new di;c.name=`LightFury_LOD${l}`;const h=kx(i,l),u=Wx(i,l),d=jx(i,l),f=$e([h,u.jawSkinGeometry,d.wingSparsSkinGeometry]),g=u.clawsGeometry,v=(R,L,F,k=!0,N=!0)=>{const D=new xu(L,F);return D.name=`${R}_LOD${l}`,D.castShadow=k,D.receiveShadow=N,D.frustumCulled=!1,D.bind(i.skeleton,new le),D},m=v("LightFuryBodyAndHeadSkin",f,t.skinMaterial),p=v("LightFuryIridescentWingsAndHeartTail",d.wingMembraneGeometry,t.wingMembraneMaterial),M=v("LightFuryContinuousDorsalSail",d.dorsalSpinesGeometry,t.skinMaterial);n.push(M);const _=v("LightFuryOralGums",u.oralGumsGeometry,t.oralGumMaterial,!1,!0),x=v("LightFuryRetractableTeeth",u.teethGeometry,t.teethMaterial,!0,!0),y=v("LightFuryArticulatedTongue",u.tongueGeometry,t.tongueMaterial,!1,!0),w=v("LightFurySkyBlueIrises",u.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),A=v("LightFuryRefractiveCorneas",u.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1),T=v("LightFurySlatePearlClaws",g,t.clawMaterial,!0,!0);for(const R of[m,M,T,_,x,y,w])R.renderOrder=11;A.renderOrder=12,p.renderOrder=13;const S=[m,p,M,_,x,y,w,A,T],b=[["LFDepth_BodySkin",f,t.hullDepthMaterial,!1],["LFDepth_WingMembrane",d.wingMembraneGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_DorsalSail",d.dorsalSpinesGeometry,t.hullDepthMaterial,!0],["LFDepth_Gums",u.oralGumsGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_Teeth",u.teethGeometry,t.hullDepthMaterial,!1],["LFDepth_Tongue",u.tongueGeometry,t.hullDepthMaterial,!1],["LFDepth_Irises",u.irisGeometry,t.hullDepthMaterial,!1],["LFDepth_Claws",g,t.hullDepthMaterial,!1]];for(const[R,L,F,k]of b){const N=v(R,L,F,!1,!1);N.renderOrder=10,N.visible=!1,N.userData.excludeFromExport=!0,c.add(N),s.push(N),k&&n.push(N)}let P=0,C=0;for(const R of S){c.add(R);const L=R.geometry.getIndex();P+=L?L.count/3:R.geometry.getAttribute("position").count/3,C+=R.geometry.getAttribute("position").count}c.visible=l===0,e.add(c),o[l]=c,a[l]={lod:l,triangles:Math.round(P),vertices:C,subMeshCount:S.length}}const r={rootGroup:e,rig:i,materials:t,lodGroups:o,dorsalSailMeshes:n,hullDepthMeshes:s,lodStats:a,activeLOD:0,autoLOD:!1,setActiveLOD(l){r.activeLOD=l;for(const c of[0,1,2])o[c].visible=c===l},updateAutoLOD(l){if(!r.autoLOD)return r.activeLOD;const c=l<9.5?0:l<20?1:2;return c!==r.activeLOD&&r.setActiveLOD(c),r.activeLOD}};return r}function Uh(){return new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})})}function a_(){const i=document.getElementById("loading-curtain"),t=document.getElementById("lc-progress-fill"),e=document.getElementById("lc-stage-text"),n=document.getElementById("lc-pct-text"),s=Array.from(document.querySelectorAll("#lc-stage-pills .lc-stage-pill"));let o=4,a=2,r=0;const l=d=>{const f=d>=100?4:d>=84?3:d>=60?2:d>=36?1:0;s.forEach((g,v)=>{g.classList.toggle("is-done",v<f),g.classList.toggle("is-active",v===f)})},c=()=>{const d=o-a;Math.abs(d)>.15?a+=d*.24:a=o,t&&(t.style.width=`${a.toFixed(1)}%`),n&&(n.textContent=`${String(Math.round(a)).padStart(2,"0")}%`),l(a),(a<99.9||o<100)&&(r=requestAnimationFrame(c))};r=requestAnimationFrame(c);const h=d=>{!d||!e||e.textContent===d||(e.classList.add("is-switching"),window.setTimeout(()=>{e.textContent=d,e.classList.remove("is-switching")},95))},u=(d,f)=>{o=Math.max(o,Math.min(100,d)),t&&(t.style.width=`${o.toFixed(1)}%`),l(o),h(f)};return u(6,"Preparing WebGL2 twilight canvas…"),{async advanceTo(d,f){u(d,f),await Uh()},async completeAndDissolve(d){o=100,a=100,t&&(t.style.width="100%"),n&&(n.textContent="100%"),l(100),h("The horizon is ready."),await Uh(),await new Promise(f=>setTimeout(f,320)),i&&(i.classList.add("is-dissolving"),setTimeout(()=>{r&&cancelAnimationFrame(r),window.__stopLoadingAmbient?.(),i.remove()},1280)),d.classList.remove("hud-entering")}}}const kh={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Wa{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new g_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new P_(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,s){const o=new m_,a=[];for(let r=0,l=this.pluginCallbacks.length;r<l;r++)a.push(this.pluginCallbacks[r](o));o.setPlugins(a),o.setTextureUtils(this.textureUtils),o.writeAsync(t,e,s).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(s,o){n.parse(t,s,o,e)})}}const Ee={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Or="KHR_mesh_quantization",Yn={};Yn[kn]=Ee.NEAREST;Yn[Jh]=Ee.NEAREST_MIPMAP_NEAREST;Yn[Ao]=Ee.NEAREST_MIPMAP_LINEAR;Yn[hi]=Ee.LINEAR;Yn[ba]=Ee.LINEAR_MIPMAP_NEAREST;Yn[Zi]=Ee.LINEAR_MIPMAP_LINEAR;Yn[qi]=Ee.CLAMP_TO_EDGE;Yn[_i]=Ee.REPEAT;Yn[La]=Ee.MIRRORED_REPEAT;const zh={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},r_=new Ut,Bh=12,l_=1179937895,c_=2,Oh=8,h_=1313821514,u_=5130562;function Ro(i,t){return i.length===t.length&&i.every(function(e,n){return e===t[n]})}function d_(i){return new TextEncoder().encode(i).buffer}function p_(i){return Ro(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function f_(i,t,e){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let o=0;o<i.itemSize;o++){let a;i.itemSize>4?a=i.array[s*i.itemSize+o]:(o===0?a=i.getX(s):o===1?a=i.getY(s):o===2?a=i.getZ(s):o===3&&(a=i.getW(s)),i.normalized===!0&&(a=X.normalize(a,i.array))),n.min[o]=Math.min(n.min[o],a),n.max[o]=Math.max(n.max[o],a)}return n}function Ku(i){return Math.ceil(i/4)*4}function Hr(i,t=0){const e=Ku(i.byteLength);if(e!==i.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(i)),t!==0)for(let s=i.byteLength;s<e;s++)n[s]=t;return n.buffer}return i}function Hh(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Wh(i,t){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),i.convertToBlob({type:t,quality:e})}class m_{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Va}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const s=this,o=s.buffers,a=s.json;n=s.options;const r=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(o,{type:"application/octet-stream"}),h=Object.keys(r),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const f=Hr(d.result),g=new DataView(new ArrayBuffer(Oh));g.setUint32(0,f.byteLength,!0),g.setUint32(4,u_,!0);const v=Hr(d_(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(Oh));m.setUint32(0,v.byteLength,!0),m.setUint32(4,h_,!0);const p=new ArrayBuffer(Bh),M=new DataView(p);M.setUint32(0,l_,!0),M.setUint32(4,c_,!0);const _=Bh+m.byteLength+v.byteLength+g.byteLength+f.byteLength;M.setUint32(8,_,!0);const x=new Blob([p,m,v,g,f],{type:"application/octet-stream"}),y=new FileReader;y.readAsArrayBuffer(x),y.onloadend=function(){e(y.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const f=d.result;a.buffers[0].uri=f,e(a)}}else e(a)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const o=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&o.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const a in o.gltfExtensions)e.extensions[a]=o.gltfExtensions[a],s[a]=!0;delete o.gltfExtensions}Object.keys(o).length>0&&(e.extras=o)}catch(o){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+o.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new E;for(let s=0,o=t.count;s<o;s++)if(Math.abs(n.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),s=new E;for(let o=0,a=n.count;o<a;o++)s.fromBufferAttribute(n,o),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(o,s.x,s.y,s.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(s.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(f){return f.colorSpace===_n?function(v){return v<.04045?v*.0773993808:Math.pow(v*.9478672986+.0521327014,2.4)}:function(v){return v}}t instanceof yr&&(t=await this.decompressTextureAsync(t)),e instanceof yr&&(e=await this.decompressTextureAsync(e));const s=t?t.image:null,o=e?e.image:null,a=Math.max(s?s.width:0,o?o.width:0),r=Math.max(s?s.height:0,o?o.height:0),l=Hh();l.width=a,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,r);const h=c.getImageData(0,0,a,r);if(s){c.drawImage(s,0,0,a,r);const f=n(t),g=c.getImageData(0,0,a,r).data;for(let v=2;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}if(o){c.drawImage(o,0,0,a,r);const f=n(e),g=c.getImageData(0,0,a,r).data;for(let v=1;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}c.putImageData(h,0,0);const d=(t||e).clone();return d.source=new Xa(l),d.colorSpace=Qn,d.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,s,o){const a=this.json;a.bufferViews||(a.bufferViews=[]);let r;switch(e){case Ee.BYTE:case Ee.UNSIGNED_BYTE:r=1;break;case Ee.SHORT:case Ee.UNSIGNED_SHORT:r=2;break;default:r=4}let l=t.itemSize*r;o===Ee.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Ku(s*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let g=n;g<n+s;g++){for(let v=0;v<t.itemSize;v++){let m;t.itemSize>4?m=t.array[g*t.itemSize+v]:(v===0?m=t.getX(g):v===1?m=t.getY(g):v===2?m=t.getZ(g):v===3&&(m=t.getW(g)),t.normalized===!0&&(m=X.normalize(m,t.array))),e===Ee.FLOAT?h.setFloat32(u,m,!0):e===Ee.INT?h.setInt32(u,m,!0):e===Ee.UNSIGNED_INT?h.setUint32(u,m,!0):e===Ee.SHORT?h.setInt16(u,m,!0):e===Ee.UNSIGNED_SHORT?h.setUint16(u,m,!0):e===Ee.BYTE?h.setInt8(u,m):e===Ee.UNSIGNED_BYTE&&h.setUint8(u,m),u+=r}u%l!==0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return o!==void 0&&(d.target=o),o===Ee.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const o=new FileReader;o.readAsArrayBuffer(t),o.onloadend=function(){const a=Hr(o.result),r={buffer:e.processBuffer(a),byteOffset:e.byteOffset,byteLength:a.byteLength};e.byteOffset+=a.byteLength,s(n.bufferViews.push(r)-1)}})}processAccessor(t,e,n,s){const o=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let r;if(t.array.constructor===Float32Array)r=Ee.FLOAT;else if(t.array.constructor===Int32Array)r=Ee.INT;else if(t.array.constructor===Uint32Array)r=Ee.UNSIGNED_INT;else if(t.array.constructor===Int16Array)r=Ee.SHORT;else if(t.array.constructor===Uint16Array)r=Ee.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)r=Ee.BYTE;else if(t.array.constructor===Uint8Array)r=Ee.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;const l=f_(t,n,s);let c;e!==void 0&&(c=t===e.index?Ee.ELEMENT_ARRAY_BUFFER:Ee.ARRAY_BUFFER);const h=this.processBufferView(t,r,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:r,count:s,max:l.max,min:l.min,type:a[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),o.accessors||(o.accessors=[]),o.accessors.push(u)-1}processImage(t,e,n,s="image/png"){if(t!==null){const o=this,a=o.cache,r=o.json,l=o.options,c=o.pending;a.images.has(t)||a.images.set(t,{});const h=a.images.get(t),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];r.images||(r.images=[]);const d={mimeType:s},f=Hh();f.width=Math.min(t.width,l.maxTextureSize),f.height=Math.min(t.height,l.maxTextureSize);const g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),t.data!==void 0){e!==Xn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const m=new Uint8ClampedArray(t.height*t.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=t.data[p+0],m[p+1]=t.data[p+1],m[p+2]=t.data[p+2],m[p+3]=t.data[p+3];g.putImageData(new ImageData(m,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(Wh(f,s).then(m=>o.processBufferViewImage(m)).then(m=>{d.bufferView=m})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):c.push(Wh(f,s).then(m=>new FileReader().readAsDataURL(m)).then(m=>{d.uri=m}));const v=r.images.push(d)-1;return h[u]=v,v}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:Yn[t.magFilter],minFilter:Yn[t.minFilter],wrapS:Yn[t.wrapS],wrapT:Yn[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,s=this.cache,o=this.json;if(s.textures.has(t))return s.textures.get(t);o.textures||(o.textures=[]),t instanceof yr&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let a=t.userData.mimeType;a==="image/webp"&&(a="image/png");const r={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,a)};t.name&&(r.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,r)});const l=o.textures.push(r)-1;return s.textures.set(t,l),l}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const o=t.color.toArray().concat([t.opacity]);if(Ro(o,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=o),t.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=t.metalness,s.pbrMetallicRoughness.roughnessFactor=t.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const r=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(r),texCoord:r.channel};this.applyTextureTransform(l,r),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const r={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(r,t.map),s.pbrMetallicRoughness.baseColorTexture=r}if(t.emissive){const r=t.emissive;if(Math.max(r.r,r.g,r.b)>0&&(s.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const c={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(c,t.emissiveMap),s.emissiveTexture=c}}if(t.normalMap){const r={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(r.scale=t.normalScale.x),this.applyTextureTransform(r,t.normalMap),s.normalTexture=r}if(t.aoMap){const r={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(r.strength=t.aoMapIntensity),this.applyTextureTransform(r,t.aoMap),s.occlusionTexture=r}t.transparent?s.alphaMode="BLEND":t.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=t.alphaTest),t.side===tn&&(s.doubleSided=!0),t.name!==""&&(s.name=t.name),this.serializeUserData(t,s),await this._invokeAllAsync(async function(r){r.writeMaterialAsync&&await r.writeMaterialAsync(t,s)});const a=n.materials.push(s)-1;return e.materials.set(t,a),a}async processMeshAsync(t){const e=this.cache,n=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let x=0,y=t.material.length;x<y;x++)s.push(t.material[x].uuid);else s.push(t.material.uuid);const o=s.join(":");if(e.meshes.has(o))return e.meshes.get(o);const a=t.geometry;let r;t.isLineSegments?r=Ee.LINES:t.isLineLoop?r=Ee.LINE_LOOP:t.isLine?r=Ee.LINE_STRIP:t.isPoints?r=Ee.POINTS:r=t.material.wireframe?Ee.LINES:Ee.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let x in a.attributes){if(x.slice(0,5)==="morph")continue;const y=a.attributes[x];if(x=d[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),e.attributes.has(this.getUID(y))){c[x]=e.attributes.get(this.getUID(y));continue}g=null;const A=y.array;x==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Z(new Uint16Array(A),y.itemSize,y.normalized)):(A instanceof Uint32Array||A instanceof Int32Array)&&!x.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${x}" converted to type FLOAT.`),g=Wa.Utils.toFloat32BufferAttribute(y));const T=this.processAccessor(g||y,a);T!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,y),c[x]=T,e.attributes.set(this.getUID(y),T))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const x=[],y=[],w={};if(t.morphTargetDictionary!==void 0)for(const A in t.morphTargetDictionary)w[t.morphTargetDictionary[A]]=A;for(let A=0;A<t.morphTargetInfluences.length;++A){const T={};let S=!1;for(const b in a.morphAttributes){if(b!=="position"&&b!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}const P=a.morphAttributes[b][A],C=b.toUpperCase(),R=a.attributes[b];if(e.attributes.has(this.getUID(P,!0))){T[C]=e.attributes.get(this.getUID(P,!0));continue}const L=P.clone();if(!a.morphTargetsRelative)for(let F=0,k=P.count;F<k;F++)for(let N=0;N<P.itemSize;N++)N===0&&L.setX(F,P.getX(F)-R.getX(F)),N===1&&L.setY(F,P.getY(F)-R.getY(F)),N===2&&L.setZ(F,P.getZ(F)-R.getZ(F)),N===3&&L.setW(F,P.getW(F)-R.getW(F));T[C]=this.processAccessor(L,a),e.attributes.set(this.getUID(R,!0),T[C])}u.push(T),x.push(t.morphTargetInfluences[A]),t.morphTargetDictionary!==void 0&&y.push(w[A])}l.weights=x,y.length>0&&(l.extras={},l.extras.targetNames=y)}const v=Array.isArray(t.material);if(v&&a.groups.length===0)return null;let m=!1;if(v&&a.index===null){const x=[];for(let y=0,w=a.attributes.position.count;y<w;y++)x[y]=y;a.setIndex(x),m=!0}const p=v?t.material:[t.material],M=v?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,y=M.length;x<y;x++){const w={mode:r,attributes:c};if(this.serializeUserData(a,w),u.length>0&&(w.targets=u),a.index!==null){let T=this.getUID(a.index);(M[x].start!==void 0||M[x].count!==void 0)&&(T+=":"+M[x].start+":"+M[x].count),e.attributes.has(T)?w.indices=e.attributes.get(T):(w.indices=this.processAccessor(a.index,a,M[x].start,M[x].count),e.attributes.set(T,w.indices)),w.indices===null&&delete w.indices}const A=await this.processMaterialAsync(p[M[x].materialIndex]);A!==null&&(w.material=A),h.push(w)}m===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(x){x.writeMesh&&x.writeMesh(t,l)});const _=n.meshes.push(l)-1;return e.meshes.set(o,_),_}detectMeshQuantization(t,e){if(this.extensionsUsed[Or])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const s=t.split("_",1)[0];kh[s]&&kh[s].includes(n)&&(this.extensionsUsed[Or]=!0,this.extensionsRequired[Or]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:X.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),t=Wa.Utils.mergeMorphTargetTracks(t.clone(),e);const o=t.tracks,a=[],r=[];for(let l=0;l<o.length;++l){const c=o[l],h=Ne.parseTrackName(c.name);let u=Ne.findNode(e,h.nodeName);const d=zh[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const f=1;let g=c.values.length/c.times.length;d===zh.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let v;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(v="CUBICSPLINE",g/=3):c.getInterpolation()===bd?v="STEP":v="LINEAR",r.push({input:this.processAccessor(new Z(c.times,f)),output:this.processAccessor(new Z(c.values,g)),interpolation:v}),a.push({sampler:r.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:r,channels:a}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,s=e.nodes[n.get(t)],o=t.skeleton;if(o===void 0)return null;const a=t.skeleton.bones[0];if(a===void 0)return null;const r=[],l=new Float32Array(o.bones.length*16),c=new le;for(let u=0;u<o.bones.length;++u)r.push(n.get(o.bones[u])),c.copy(o.boneInverses[u]),c.multiply(t.bindMatrix).toArray(l,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new Z(l,16)),joints:r,skeleton:n.get(a)}),s.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,s=this.nodeMap;e.nodes||(e.nodes=[]);const o={};if(n.trs){const r=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();Ro(r,[0,0,0,1])||(o.rotation=r),Ro(l,[0,0,0])||(o.translation=l),Ro(c,[1,1,1])||(o.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),p_(t.matrix)===!1&&(o.matrix=t.matrix.elements);if(t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o),t.isMesh||t.isLine||t.isPoints){const r=await this.processMeshAsync(t);r!==null&&(o.mesh=r)}else t.isCamera&&(o.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const r=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&r.push(u)}}r.length>0&&(o.children=r)}await this._invokeAllAsync(function(r){r.writeNode&&r.writeNode(t,o)});const a=e.nodes.push(o)-1;return s.set(t,a),a}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);const o=[];for(let a=0,r=t.children.length;a<r;a++){const l=t.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&o.push(c)}}o.length>0&&(s.nodes=o),this.serializeUserData(t,s)}async processObjectsAsync(t){const e=new Na;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});const n=[];for(let s=0;s<t.length;s++)t[s]instanceof Na?await this.processSceneAsync(t[s]):n.push(t[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class g_{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,s=n.json,o=n.extensionsUsed,a={};t.name&&(a.name=t.name),a.color=t.color.toArray(),a.intensity=t.intensity,t.isDirectionalLight?a.type="directional":t.isPointLight?(a.type="point",t.distance>0&&(a.range=t.distance)):t.isSpotLight&&(a.type="spot",t.distance>0&&(a.range=t.distance),a.spot={},a.spot.innerConeAngle=(1-t.penumbra)*t.angle,a.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),o[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},o[this.name]=!0);const r=s.extensions[this.name].lights;r.push(a),e.extensions=e.extensions||{},e.extensions[this.name]={light:r.length-1}}}class v_{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class x_{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.clearcoatFactor=t.clearcoat,t.clearcoatMap){const a={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(a,t.clearcoatMap),o.clearcoatTexture=a}if(o.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,t.clearcoatRoughnessMap),o.clearcoatRoughnessTexture=a}if(t.clearcoatNormalMap){const a={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(a.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(a,t.clearcoatNormalMap),o.clearcoatNormalTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class __{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const s=this.writer.extensionsUsed,o={};o.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class M_{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.iridescenceFactor=t.iridescence,t.iridescenceMap){const a={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(a,t.iridescenceMap),o.iridescenceTexture=a}if(o.iridescenceIor=t.iridescenceIOR,o.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const a={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(a,t.iridescenceThicknessMap),o.iridescenceThicknessTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class w_{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.transmissionFactor=t.transmission,t.transmissionMap){const a={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(a,t.transmissionMap),o.transmissionTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class y_{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.thicknessFactor=t.thickness,t.thicknessMap){const a={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(a,t.thicknessMap),o.thicknessTexture=a}t.attenuationDistance!==1/0&&(o.attenuationDistance=t.attenuationDistance),o.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class b_{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const s=this.writer.extensionsUsed,o={};o.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class S_{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(r_)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.specularIntensityMap){const a={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(a,t.specularIntensityMap),o.specularTexture=a}if(t.specularColorMap){const a={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(a,t.specularColorMap),o.specularColorTexture=a}o.specularFactor=t.specularIntensity,o.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class A_{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.sheenRoughnessMap){const a={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(a,t.sheenRoughnessMap),o.sheenRoughnessTexture=a}if(t.sheenColorMap){const a={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(a,t.sheenColorMap),o.sheenColorTexture=a}o.sheenRoughnessFactor=t.sheenRoughness,o.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class T_{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.anisotropyMap){const a={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(a,t.anisotropyMap),o.anisotropyTexture=a}o.anisotropyStrength=t.anisotropy,o.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class E_{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,o={};o.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class C_{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.bumpMap){const a={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(a,t.bumpMap),o.bumpTexture=a}o.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class P_{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,s=t,o=new Float32Array(s.count*3),a=new Float32Array(s.count*4),r=new Float32Array(s.count*3),l=new le,c=new E,h=new en,u=new E;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,h,u),c.toArray(o,f*3),h.toArray(a,f*4),u.toArray(r,f*3);const d={TRANSLATION:n.processAccessor(new Z(o,3)),ROTATION:n.processAccessor(new Z(a,4)),SCALE:n.processAccessor(new Z(r,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Wa.Utils={insertKeyframe:function(i,t){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),o=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n));let r;if(i.times.length===0){s[0]=t;for(let l=0;l<n;l++)o[l]=0;r=0}else if(t<i.times[0]){if(Math.abs(i.times[0]-t)<.001)return 0;s[0]=t,s.set(i.times,1),o.set(a.evaluate(t),0),o.set(i.values,n),r=0}else if(t>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-t)<.001)return i.times.length-1;s[s.length-1]=t,s.set(i.times,0),o.set(i.values,0),o.set(a.evaluate(t),i.values.length),r=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-t)<.001)return l;if(i.times[l]<t&&i.times[l+1]>t){s.set(i.times.slice(0,l+1),0),s[l+1]=t,s.set(i.times.slice(l+1),l+2),o.set(i.values.slice(0,(l+1)*n),0),o.set(a.evaluate(t),(l+1)*n),o.set(i.values.slice((l+1)*n),(l+2)*n),r=l+1;break}}return i.times=s,i.values=o,r},mergeMorphTargetTracks:function(i,t){const e=[],n={},s=i.tracks;for(let o=0;o<s.length;++o){let a=s[o];const r=Ne.parseTrackName(a.name),l=Ne.findNode(t,r.nodeName);if(r.propertyName!=="morphTargetInfluences"||r.propertyIndex===void 0){e.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Sd)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[r.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+r.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const f=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)f[g*c+h]=u.values[g];u.name=(r.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,e.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+h]=d.evaluate(u.times[f]);for(let f=0;f<a.times.length;f++){const g=this.insertKeyframe(u,a.times[f]);u.values[g*c+h]=a.values[f]}}return i.tracks=e,i},toFloat32BufferAttribute:function(i){const t=new Z(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let e=0,n=i.count;e<n;e++)for(let s=0;s<i.itemSize;s++)t.setComponent(e,s,i.getComponent(e,s));return t}};async function R_(i,t){const e=new Wa;i.updateMatrixWorld(!0);const n=[];i.traverse(l=>{l.userData?.excludeFromExport&&l.visible&&(l.visible=!1,n.push(l))});let s;try{s=await new Promise((l,c)=>{e.parse(i,h=>{h instanceof ArrayBuffer?l(h):c(new Error("Expected binary ArrayBuffer from GLTFExporter"))},h=>c(h),{binary:!0,onlyVisible:!0,maxTextureSize:1024})})}finally{for(const l of n)l.visible=!0}const o=new Blob([s],{type:"model/gltf-binary"}),a=URL.createObjectURL(o),r=document.createElement("a");return r.href=a,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(a),5e3),{filename:t,sizeMB:s.byteLength/(1024*1024)}}async function Qu(i,t,e=i.activeLOD){const n=i.activeLOD,s=i.autoLOD;i.autoLOD=!1,i.setActiveLOD(e);try{return await R_(i.rootGroup,`${t}-lod${e}.glb`)}finally{i.setActiveLOD(n),i.autoLOD=s}}async function L_(i,t=i.activeLOD){return Qu(i,"toothless-hidden-world",t)}async function I_(i,t=i.activeLOD){return Qu(i,"light-fury-hidden-world",t)}const Ra=[{id:"twin-pair",label:"Twin Furies Perch",position:new E(.05,2.75,11.4),target:new E(0,.98,-.12)},{id:"light-fury-hero",label:"Light Fury 3/4",position:new E(-6.85,1.68,3.15),target:new E(-4.42,1,.25)},{id:"light-fury-face",label:"Light Fury Portrait",position:new E(-3.65,1.64,2.38),target:new E(-4.22,1.5,1.55)},{id:"toothless-hero",label:"Toothless 3/4",position:new E(7.15,1.82,3.68),target:new E(4.42,1.06,.55)},{id:"toothless-paws-scales",label:"Scales & Claws Study",position:new E(6.15,.96,2.95),target:new E(4.52,.62,1.25)},{id:"waterfall-islands",label:"Waterfall Double-Isle",position:new E(14.5,8.2,16),target:new E(-56,-1.5,-28)},{id:"sea-arch-drangar",label:"Sea-Arch & Clett",position:new E(28,5.4,2.5),target:new E(54.5,-1.8,20.5)},{id:"crescent-lagoon",label:"Crescent Lagoon",position:new E(24,38,-12),target:new E(84,-6,34)},{id:"archipelago-aerial",label:"Archipelago Panorama",position:new E(18,68,108),target:new E(-4,-4,-24)}];function Qe(i){const t=parseFloat(i.min||"0"),e=parseFloat(i.max||"1"),n=parseFloat(i.value||"0"),s=e>t?(n-t)/(e-t)*100:50;i.style.setProperty("--fill-pct",`${Math.max(0,Math.min(100,s)).toFixed(1)}%`)}function F_(i,t,e,n,s,o,a){let r=!1,l=window.innerWidth<=780,c=!0,h=1,u=null;i.classList.toggle("drawer-collapsed",l);const d=t.rig.bones.length+n.rig.bones.length,f=document.createElement("div");f.className="hud-toast",i.appendChild(f);const g=document.createElement("div");g.className="shutter-flash",i.appendChild(g);const v=G=>{f.textContent=G,f.classList.add("visible"),u!==null&&window.clearTimeout(u),u=window.setTimeout(()=>{f.classList.remove("visible")},2200)},m=()=>{g.classList.add("flash"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{g.classList.remove("flash")})})},p=document.createElement("div");p.className="hud-header",p.innerHTML=`
    <div class="brand-card hud-collapsible">
      <div class="brand-eyebrow">Northern Archipelago &middot; 62&deg;N</div>
      <div class="brand-title-row">
        <span class="brand-dot"></span>
        <span class="brand-title">Night Fury <em>&amp;</em> Light Fury</span>
      </div>
      <div class="brand-subtitle">Where Dusk Meets the Open Tide</div>
    </div>
    <div class="telemetry-row">
      <div class="telemetry-pill hud-collapsible" id="tel-fps"><strong>60</strong> FPS</div>
      <div class="telemetry-pill hud-collapsible" id="tel-lod"><strong>LOD0</strong> &middot; 0 tris</div>
      <div class="telemetry-pill hud-collapsible"><strong>${d}</strong> Bones</div>
      <button class="telemetry-pill hud-collapsible is-active" id="btn-cursor-gaze" title="Dragons Curiously Track Pointer When Perched [C]">
        Cursor Gaze <span class="kbd-hint">C</span>
      </button>
      <button class="telemetry-pill hud-collapsible" id="btn-lightning-top" title="Summon Forked Sky-to-Sea Lightning &amp; Rolling Thunder [L]">
        &#9889; Thunder <span class="kbd-hint">L</span>
      </button>
      <button class="telemetry-pill hud-collapsible" id="btn-photo" title="Capture UI-Free High-Resolution PNG Snapshot [P]">
        Snapshot <span class="kbd-hint">P</span>
      </button>
      <button class="telemetry-pill hud-collapsible" id="btn-fullscreen" title="Toggle Immersive Fullscreen [F]">
        Fullscreen <span class="kbd-hint">F</span>
      </button>
      <button class="telemetry-pill hud-collapsible" id="btn-help" title="Navigation &amp; Keyboard Shortcuts [?]">
        Controls <span class="kbd-hint">?</span>
      </button>
      <button class="telemetry-pill hud-toggle-pill" id="btn-toggle-hud" title="Toggle Minimal Cinema View [H]">
        Cinema <span class="kbd-hint">H</span>
      </button>
    </div>
  `,i.appendChild(p);const M=p.querySelector("#tel-fps"),_=p.querySelector("#tel-lod"),x=p.querySelector("#btn-cursor-gaze"),y=p.querySelector("#btn-lightning-top"),w=p.querySelector("#btn-photo"),A=p.querySelector("#btn-fullscreen"),T=p.querySelector("#btn-help"),S=p.querySelector("#btn-toggle-hud"),b=()=>{a.onTriggerLightningStrike(),v("⚡ Forked Lightning Strike & Rolling Thunder")};y.addEventListener("click",b);const P=document.createElement("button");P.className="drawer-reopen-btn hud-collapsible",P.title="Open Character & Atmosphere Atelier [Tab]",P.innerHTML='<span>Open Atelier</span><span class="kbd-hint">Tab</span>',i.appendChild(P);const C=G=>{l=G,i.classList.toggle("drawer-collapsed",l)};P.addEventListener("click",()=>C(!1));const R=()=>{r=!r,i.classList.toggle("hud-hidden",r),S.innerHTML=r?'Show UI <span class="kbd-hint">H</span>':'Cinema <span class="kbd-hint">H</span>'};S.addEventListener("click",R);const L=()=>{c=!c,x.classList.toggle("is-active",c),a.onToggleCursorGaze(c),v(c?"Interactive Cursor Gaze enabled":"Sculpted Manual Gaze locked")};x.addEventListener("click",L),w.addEventListener("click",()=>{a.onCaptureSnapshot()});const F=()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})};A.addEventListener("click",F),document.addEventListener("fullscreenchange",()=>{A.classList.toggle("is-active",!!document.fullscreenElement)});const k=document.createElement("div");k.className="help-backdrop",k.innerHTML=`
    <div class="help-modal" role="dialog" aria-modal="true" aria-label="Controls and Shortcuts">
      <div class="help-modal-header">
        <div>
          <div class="help-modal-title">Portal Navigation &amp; Studio Shortcuts</div>
          <div class="help-modal-sub">Explore the archipelago, sculpt expressions, or launch twin flight</div>
        </div>
        <button class="help-close-btn" id="btn-help-close">Close [Esc]</button>
      </div>
      <div class="help-grid">
        <div class="help-item"><span>Orbit Camera</span><span class="help-keys"><span class="help-key">Left Drag</span></span></div>
        <div class="help-item"><span>Pan / Zoom</span><span class="help-keys"><span class="help-key">Right Drag</span><span class="help-key">Scroll</span></span></div>
        <div class="help-item"><span>Focus Any Point</span><span class="help-keys"><span class="help-key">Double-Click</span></span></div>
        <div class="help-item"><span>Free-Roam Fly</span><span class="help-keys"><span class="help-key">W A S D</span><span class="help-key">Q / E</span></span></div>
        <div class="help-item"><span>Fast Soar Boost</span><span class="help-keys"><span class="help-key">Shift</span></span></div>
        <div class="help-item"><span>Courtship Flight</span><span class="help-keys"><span class="help-key">Space</span></span></div>
        <div class="help-item"><span>Camera Views 1&ndash;9</span><span class="help-keys"><span class="help-key">1</span>&ndash;<span class="help-key">9</span></span></div>
        <div class="help-item"><span>Toggle Atelier Panel</span><span class="help-keys"><span class="help-key">Tab</span></span></div>
        <div class="help-item"><span>Cursor Gaze Follow</span><span class="help-keys"><span class="help-key">C</span></span></div>
        <div class="help-item"><span>Strike Lightning &amp; Thunder</span><span class="help-keys"><span class="help-key">L</span></span></div>
        <div class="help-item"><span>HD Photo Snapshot</span><span class="help-keys"><span class="help-key">P</span></span></div>
        <div class="help-item"><span>Fullscreen / Cinema</span><span class="help-keys"><span class="help-key">F</span><span class="help-key">H</span></span></div>
        <div class="help-item"><span>Reset Any Slider</span><span class="help-keys"><span class="help-key">Double-Click</span></span></div>
      </div>
      <div class="help-footer-tip">Touchscreens: 1-finger drag to orbit &middot; 2-finger pinch &amp; drag to zoom and pan &middot; double-tap to focus</div>
    </div>
  `,i.appendChild(k);const N=G=>{const ct=G??!k.classList.contains("open");k.classList.toggle("open",ct),T.classList.toggle("is-active",ct)};T.addEventListener("click",()=>N()),k.querySelector("#btn-help-close").addEventListener("click",()=>N(!1)),k.addEventListener("click",G=>{G.target===k&&N(!1)});const D=document.createElement("div");D.className="flight-bar hud-collapsible",D.innerHTML=`
    <button class="flight-play-btn" id="btn-flight-play" title="Play/Pause Courtship Flight [Space]">
      <span id="flight-play-icon">&#9654;</span>
      <span id="flight-play-text">Begin Courtship Flight</span>
    </button>
    <div class="flight-mode-pills" title="Choose Pair Duet or Solo Dragon Flight">
      <button class="flight-mode-pill active" data-fmode="duet">Pair Duet</button>
      <button class="flight-mode-pill" data-fmode="light-fury">Light Fury</button>
      <button class="flight-mode-pill" data-fmode="toothless">Toothless</button>
    </div>
    <button class="flight-sub-btn" id="btn-flight-reset" title="Return Both Dragons to Cliff Perch">
      &#8634; Perch
    </button>
    <div class="flight-timeline-col">
      <div class="flight-phase-row">
        <span class="flight-phase-label" id="flight-phase-label">Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown</span>
        <span class="flight-time-label" id="flight-time-label">0.0s / 25.0s</span>
      </div>
      <input type="range" id="flight-scrubber" min="0" max="1" step="0.002" value="0" />
    </div>
    <button class="flight-sub-btn" id="btn-flight-speed" title="Toggle 0.5x Slow-Motion Wingbeat Study vs. 1.0x Real-Time">
      1.0&times;
    </button>
    <button class="flight-sub-btn active" id="btn-flight-cam" title="Track Dragons Across the Sky (Orbit Remains Active)">
      Follow Cam
    </button>
    <button class="flight-sub-btn" id="btn-flight-loop" title="Loop Continuous Flight Cycles">
      Loop
    </button>
  `,i.appendChild(D);const W=D.querySelector("#btn-flight-play"),O=D.querySelector("#flight-play-icon"),q=D.querySelector("#flight-play-text"),K=D.querySelector("#btn-flight-reset"),Y=D.querySelector("#flight-phase-label"),V=D.querySelector("#flight-time-label"),H=D.querySelector("#flight-scrubber"),J=D.querySelector("#btn-flight-speed"),ht=D.querySelector("#btn-flight-cam"),Q=D.querySelector("#btn-flight-loop"),st=Array.from(D.querySelectorAll(".flight-mode-pill"));let $=!1;const tt=()=>{const G=o.getPhaseInfo(),ct=G.isPlaying&&!G.isPaused;D.classList.toggle("playing",ct);const wt=G.subjectMode==="duet"?"Begin Courtship Flight":G.subjectMode==="light-fury"?"Fly Light Fury":"Fly Toothless";G.isPlaying?G.isPaused?(O.innerHTML="&#9654;",q.textContent="Resume Flight",Y.textContent=`${G.phaseLabel} (Paused)`):(O.innerHTML="&#10074;&#10074;",q.textContent="Pause Flight",Y.textContent=G.phaseLabel):(O.innerHTML="&#9654;",q.textContent=wt,Y.innerHTML=G.subjectMode==="duet"?"Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown":"Perched Ready &mdash; Solo Takeoff, Sea Soar &amp; Landing"),V.textContent=`${G.elapsedSec.toFixed(1)}s / ${G.durationSec.toFixed(1)}s`,$||(H.value=String(G.progress),Qe(H)),ht.classList.toggle("active",G.followCamera),Q.classList.toggle("active",G.loop),J.classList.toggle("active",h<.99),J.innerHTML=`${h.toFixed(1)}&times;`,st.forEach(Wt=>Wt.classList.toggle("active",Wt.dataset.fmode===G.subjectMode))};J.addEventListener("click",()=>{h=h>.75?.5:1,a.onFlightSpeedChange(h),tt(),v(h<.75?"0.5× Slow-Motion Wingbeat Study":"1.0× Natural Flight Speed")}),st.forEach(G=>{G.addEventListener("click",()=>{const ct=G.dataset.fmode;o.setSubjectMode(ct),tt(),It()})}),W.addEventListener("click",()=>{o.togglePlayPause(),tt(),It()}),K.addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),tt(),It()}),H.addEventListener("pointerdown",()=>{$=!0}),window.addEventListener("pointerup",()=>{$=!1}),H.addEventListener("input",()=>{Qe(H),o.scrubToProgress(parseFloat(H.value)),e.applyRigState(0),s.applyRigState(0),tt(),It()}),ht.addEventListener("click",()=>{o.followCamera=!o.followCamera,tt()}),Q.addEventListener("click",()=>{o.loop=!o.loop,tt()});const yt=document.createElement("div");yt.className="camera-bar hud-collapsible";const rt=[],z=G=>{const ct=Ra[G];ct&&(o.isPlaying&&(o.stopAndResetToPerch(),tt(),It()),rt.forEach((wt,Wt)=>wt.classList.toggle("active",Wt===G)),rt[G]?.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"}),ct.id.startsWith("light-fury")?I("light-fury"):ct.id.startsWith("toothless")&&I("toothless"),a.onSelectCameraBookmark(ct))};Ra.forEach((G,ct)=>{const wt=document.createElement("button");wt.className=`cam-btn${ct===0?" active":""}`,wt.title=`${G.label} [Hotkey ${ct+1}]`,wt.innerHTML=`<span class="cam-btn-idx">${ct+1}</span><span>${G.label}</span>`,wt.addEventListener("click",()=>z(ct)),rt.push(wt),yt.appendChild(wt)}),i.appendChild(yt),window.addEventListener("keydown",G=>{const ct=document.activeElement?.tagName;if(!(ct==="INPUT"||ct==="TEXTAREA")){if(G.key==="Escape"&&k.classList.contains("open")){N(!1);return}if(G.key==="?"||G.key==="/"&&G.shiftKey){G.preventDefault(),N();return}if(G.key==="Tab"){G.preventDefault(),C(!l);return}if(G.key==="h"||G.key==="H")R();else if(G.key==="c"||G.key==="C")L();else if(G.key==="l"||G.key==="L")b();else if(G.key==="p"||G.key==="P")a.onCaptureSnapshot();else if(G.key==="f"||G.key==="F")F();else if(G.code==="Space")G.preventDefault(),o.togglePlayPause(),tt(),It();else if(G.key>="1"&&G.key<="9"&&!G.ctrlKey&&!G.metaKey&&!G.altKey){const wt=parseInt(G.key,10)-1;wt>=0&&wt<Ra.length&&z(wt)}}});const xt=document.createElement("aside");xt.className="rig-drawer hud-collapsible",xt.innerHTML=`
    <div class="drawer-header">
      <div class="drawer-title-group">
        <span class="drawer-eyebrow">Sculpt &amp; Atmosphere</span>
        <span class="drawer-title">Character Atelier</span>
      </div>
      <div class="drawer-header-actions">
        <button class="drawer-reset-btn" id="btn-reset-pose" title="Reset Both Dragons &amp; Camera">Reset</button>
        <button class="drawer-collapse-btn" id="btn-collapse-drawer" title="Collapse Atelier Panel [Tab]">Hide &#10095;</button>
      </div>
    </div>
    <div class="moments-strip">
      <div class="moments-strip-label">Curated Scene Moments</div>
      <div class="moments-grid" id="moments-grid"></div>
    </div>
    <div class="dragon-switcher">
      <button class="dragon-tab-btn light-fury active" id="tab-light-fury">
        <span class="dragon-tab-dot lf"></span>
        <span>Light Fury</span>
      </button>
      <button class="dragon-tab-btn toothless" id="tab-toothless">
        <span class="dragon-tab-dot nf"></span>
        <span>Toothless</span>
      </button>
    </div>
    <div class="drawer-scroll" id="drawer-scroll">
      <div id="panel-light-fury"></div>
      <div id="panel-toothless" style="display: none;"></div>
      <div id="panel-shared-world"></div>
    </div>
  `,i.appendChild(xt),xt.querySelector("#btn-collapse-drawer").addEventListener("click",()=>{C(!0)});const at=xt.querySelector("#moments-grid"),St=xt.querySelector("#tab-light-fury"),dt=xt.querySelector("#tab-toothless"),Dt=xt.querySelector("#panel-light-fury"),At=xt.querySelector("#panel-toothless"),B=xt.querySelector("#panel-shared-world");function I(G){St.classList.toggle("active",G==="light-fury"),dt.classList.toggle("active",G==="toothless"),Dt.style.display=G==="light-fury"?"block":"none",At.style.display=G==="toothless"?"block":"none"}St.addEventListener("click",()=>I("light-fury")),dt.addEventListener("click",()=>I("toothless"));const it=[];function pt(G,ct,wt=!1){const Wt=document.createElement("div");Wt.className=`accordion-section${wt?" open":""}`;const ae=document.createElement("button");ae.className="accordion-header",ae.innerHTML=`<span>${ct}</span><span class="accordion-chevron">&#9662;</span>`;const jt=document.createElement("div");jt.className="accordion-collapse";const te=document.createElement("div");te.className="accordion-collapse-inner";const Kt=document.createElement("div");return Kt.className="accordion-body",te.appendChild(Kt),jt.appendChild(te),ae.addEventListener("click",()=>{Wt.classList.toggle("open")}),Wt.appendChild(ae),Wt.appendChild(jt),G.appendChild(Wt),Kt}function _t(G,ct,wt,Wt,ae,jt,te,Kt=.01,oe=!1){const Se=Number(wt[ae]),Le=document.createElement("div");Le.className="control-row",Le.title="Double-click slider to reset";const qe=document.createElement("span");qe.className="control-val";const an=document.createElement("div");an.className="control-label-line";const wn=document.createElement("span");wn.textContent=ct,an.appendChild(wn),an.appendChild(qe);const on=document.createElement("input");on.type="range",on.min=String(jt),on.max=String(te),on.step=String(Kt);const wi=()=>{const mi=Number(wt[ae]);on.value=String(mi),qe.textContent=mi.toFixed(2),Qe(on)};wi(),it.push(wi),on.addEventListener("input",()=>{o.isPlaying&&!o.isPaused&&(o.isPaused=!0,tt());const mi=parseFloat(on.value);Wt({[ae]:mi}),qe.textContent=mi.toFixed(2),Qe(on),oe&&It()}),on.addEventListener("dblclick",()=>{Wt({[ae]:Se}),wi(),oe&&It(),v(`Reset ${ct}`)}),Le.appendChild(an),Le.appendChild(on),G.appendChild(Le)}function Mt(G,ct,wt,Wt,ae){const jt=document.createElement("label");jt.className="toggle-row";const te=document.createElement("span");te.textContent=ct;const Kt=document.createElement("input");Kt.type="checkbox";const oe=()=>{Kt.checked=!!wt[ae]};oe(),it.push(oe),Kt.addEventListener("change",()=>{Wt({[ae]:Kt.checked}),It()}),jt.appendChild(te),jt.appendChild(Kt),G.appendChild(jt)}const kt=pt(Dt,"Light Fury Moods & Expressions",!0),Et=document.createElement("div");Et.className="weather-grid";const Lt=[];Mx.forEach((G,ct)=>{const wt=document.createElement("button");wt.className=`weather-btn${ct===0?" active":""}`,wt.innerHTML=`
      <span class="weather-btn-title">${G.label}</span>
      <span class="weather-btn-sub">${G.subtitle}</span>
    `,wt.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),tt()),Lt.forEach(Wt=>Wt.classList.remove("active")),wt.classList.add("active"),s.setState(G.patch),It()}),Lt.push(wt),Et.appendChild(wt)}),kt.appendChild(Et);const Ft=(G,ct,wt,Wt,ae,jt=.01,te=!1)=>_t(G,ct,s.state,Kt=>s.setState(Kt),wt,Wt,ae,jt,te),Ct=(G,ct,wt)=>Mt(G,ct,s.state,Wt=>s.setState(Wt),wt),Nt=pt(Dt,"I. Bioluminescence, Shimmer & Cloak",!0);Ft(Nt,"Hidden World Neon Bioluminescence","biolumGlow",0,1),Ft(Nt,"Thermal-Mirror Optical Cloak","thermalCloak",0,1),Ft(Nt,"Stardust Glimmer & Opal Sheen","iridescentShimmer",0,1),Ft(Nt,"Radiant Partly-Glowing Skin","radiantGlow",0,1),Ft(Nt,"Underwing Rose & Ice Countershade","pastelTint",0,1),Ft(Nt,"Orchid-Cyan Plasma Charge","plasmaGlow",0,1);const Qt=pt(Dt,"II. Gaze, Ears & Expression",!1);Ft(Qt,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),Ft(Qt,"Curious Head-Tilt (Roll)","headRoll",-1,1),Ft(Qt,"Head Yaw (Swan-Neck Coupled)","headYaw",-1,1),Ft(Qt,"Head Pitch","headPitch",-1,1),Ft(Qt,"Eye Gaze Horizontal","eyeYaw",-1,1),Ft(Qt,"Eye Gaze Vertical","eyePitch",-1,1),Ft(Qt,"Affectionate Squint-Smile","squint",0,1),Ft(Qt,"Almond Eyelid Blink","blink",0,1),Ft(Qt,"Rounded Ear-Nubs Perk","earPerk",0,1),Ft(Qt,"Ear Asymmetry","earAsymmetry",-1,1),Ft(Qt,"Temple Cheek Nubs","cheekNubFlare",0,1);const ie=pt(Dt,"III. Smile, Retractable Fangs & Tongue",!1);Ft(ie,"Jaw Open","jawOpen",0,1),Ft(ie,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),Ft(ie,"Pink Tongue Extend","tongueExtend",0,1),Ft(ie,"Tongue Curl","tongueCurl",-1,1);const $t=document.createElement("button");$t.className="action-btn secondary",$t.textContent="Toggle Soft Gums vs. Strike Fangs";let we=!1;$t.addEventListener("click",()=>{we=!we,we?s.setState({jawOpen:.68,teethExtension:1,pupilDilation:.1,squint:.36,earPerk:.14}):s.setState({jawOpen:.26,teethExtension:0,pupilDilation:.92,squint:.24,earPerk:.9}),It()}),ie.appendChild($t);const ce=pt(Dt,"IV. Scalloped Wings, Veil & Sail",!1);Ft(ce,"Coy Wing-Veil Drape","coyWingVeil",0,1),Ft(ce,"Wing Unfurl (Cape ↔ 7.80m Span)","wingUnfurl",0,1),Ft(ce,"Wing Flap Elevation","wingFlap",-1,1),Ft(ce,"Wing Forward/Dive Sweep","wingSweep",-1,1),Ft(ce,"Airfoil Camber","wingCamber",0,1),Ft(ce,"Pelvic Glide Flukes","pelvicFinFlare",0,1),Ft(ce,"Continuous Dorsal Sail Flex","dorsalSailFlex",0,1);const Ce=pt(Dt,"V. Symmetrical Heart-Tail Flukes",!1);Ct(Ce,"Sync Heart-Tail Lobes","syncHeartTailFlukes"),Ft(Ce,"Right Heart-Lobe Fold","rightHeartFinFlare",-1,1,.01,!0),Ft(Ce,"Left Heart-Lobe Fold","leftHeartFinFlare",-1,1,.01,!0),Ft(Ce,"Tail Horizontal Sweep","tailYaw",-1,1),Ft(Ce,"Tail Vertical Lift","tailPitch",-1,1),Ft(Ce,"Feline Tail Curl","tailCurl",-1,1);const et=pt(Dt,"VI. Stance, 4-Paw IK & Flight Legs",!1);Ft(et,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),Ft(et,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),Ft(et,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),Ft(et,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),Ft(et,"Swan Neck Arch","neckArch",-1,1),Ft(et,"Neck Turn","neckYaw",-1,1),Ft(et,"Spine Arch","spineArch",-1,1),Ft(et,"Spine Twist","spineTwist",-1,1),Ct(et,"Living Idle (Purr & Natural Blinks)","subtleBreathing");const Ht=pt(At,"Toothless Moods & Expressions",!0),vt=document.createElement("div");vt.className="weather-grid";const bt=[];dx.forEach((G,ct)=>{const wt=document.createElement("button");wt.className=`weather-btn${ct===0?" active":""}`,wt.innerHTML=`
      <span class="weather-btn-title">${G.label}</span>
      <span class="weather-btn-sub">${G.subtitle}</span>
    `,wt.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),tt()),bt.forEach(Wt=>Wt.classList.remove("active")),wt.classList.add("active"),e.setState(G.patch),It()}),bt.push(wt),vt.appendChild(wt)}),Ht.appendChild(vt);const Tt=(G,ct,wt,Wt,ae,jt=.01,te=!1)=>_t(G,ct,e.state,Kt=>e.setState(Kt),wt,Wt,ae,jt,te),Bt=(G,ct,wt)=>Mt(G,ct,e.state,Wt=>e.setState(Wt),wt),ue=pt(At,"I. Alpha Bioluminescence & Lightning",!0);Tt(ue,"Alpha Blue Plasma Glow","alphaGlow",0,1),Tt(ue,"Cavern Bioluminescent Markings","biolumGlow",0,1),Tt(ue,"Lightning-Cloak Mirror Arcs","lightningCloak",0,1);const Te=pt(At,"II. Head, Ear-Plates & Emerald Eyes",!1);Tt(Te,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),Tt(Te,"Head Yaw (Cervical Coupled)","headYaw",-1,1),Tt(Te,"Head Pitch","headPitch",-1,1),Tt(Te,"Curious Head Roll","headRoll",-1,1),Tt(Te,"Eye Gaze Horizontal","eyeYaw",-1,1),Tt(Te,"Eye Gaze Vertical","eyePitch",-1,1),Tt(Te,"Palpebral Eyelid Blink","blink",0,1),Tt(Te,"Focus Squint","squint",0,1),Tt(Te,"Primary Ear-Plates Perk","earPerk",0,1),Tt(Te,"Ear-Plate Asymmetry","earAsymmetry",-1,1),Tt(Te,"Secondary Cheek Nubs","cheekNubFlare",0,1);const Re=pt(At,"III. Jaw, Retractable Teeth & Tongue",!1);Tt(Re,"Jaw Open","jawOpen",0,1),Tt(Re,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),Tt(Re,"Tongue Extend","tongueExtend",0,1),Tt(Re,"Tongue Curl","tongueCurl",-1,1);const me=document.createElement("button");me.className="action-btn secondary",me.textContent='Toggle "Toothless" Gums vs. Fangs';let nn=!1;me.addEventListener("click",()=>{nn=!nn,nn?e.setState({jawOpen:.72,teethExtension:1,pupilDilation:.14,squint:.32}):e.setState({jawOpen:.36,teethExtension:0,pupilDilation:.85,squint:0}),It()}),Re.appendChild(me);const cn=pt(At,"IV. Wings, Fins & Flush V-Spines",!1);Tt(cn,"Wing Unfurl (Cape ↔ 8.56m Span)","wingUnfurl",0,1),Tt(cn,"Wing Flap Elevation","wingFlap",-1,1),Tt(cn,"Wing Forward/Dive Sweep","wingSweep",-1,1),Tt(cn,"Phalangeal Airfoil Camber","wingCamber",0,1),Tt(cn,"Pelvic 3-Spar Glide Fins","pelvicFinFlare",0,1),Tt(cn,"Dorsal V-Spine Split","dorsalSpineSplit",0,1);const $n=pt(At,"V. Prosthetic Tail & Mechanics",!1);Bt($n,"Auto-Sync Left Prosthetic Linkage","autoSyncProstheticTail"),Tt($n,"Left Prosthetic Fin Fold","leftProstheticFinFlare",-1,1,.01,!0),Tt($n,"Right Biological Fin Fold","rightTailFinFlare",-1,1,.01,!0),Tt($n,"Tail Horizontal Sweep","tailYaw",-1,1),Tt($n,"Tail Vertical Lift","tailPitch",-1,1),Tt($n,"Distal Tail Whip Curl","tailCurl",-1,1);const Ze=pt(At,"VI. Stance, 4-Paw IK & Flight Legs",!1);Tt(Ze,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),Tt(Ze,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),Tt(Ze,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),Tt(Ze,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),Tt(Ze,"Neck Arch","neckArch",-1,1),Tt(Ze,"Neck Turn","neckYaw",-1,1),Tt(Ze,"Spine Arch","spineArch",-1,1),Tt(Ze,"Spine Twist","spineTwist",-1,1),Bt(Ze,"Living Idle (Breath, Blinks & Twitches)","subtleBreathing");const ke=pt(B,"Archipelago, Sky & North Sea",!0),ei=document.createElement("div");ei.className="control-label-line";const Bn=$s[a.initialWeatherPreset]??$s["golden-hour"];ei.innerHTML=`<span>Coastal Atmosphere</span><span class="control-val" id="weather-preset-desc">${Bn.subtitle}</span>`,ke.appendChild(ei);const En=ei.querySelector("#weather-preset-desc"),On=document.createElement("div");On.className="weather-grid";const ni=[],bn={...Eo},Mi=[],gn=[],Cn=document.createElement("div");Cn.className="control-row",Cn.innerHTML=`
    <div class="control-label-line">
      <span>Sun / Moon Elevation</span>
      <span class="control-val" id="elev-val">${Bn.sunElevationDeg.toFixed(1)}&deg;</span>
    </div>
    <input type="range" id="elev-slider" min="2" max="55" step="0.5" value="${Bn.sunElevationDeg}" />
  `;const Dn=Cn.querySelector("#elev-slider"),go=Cn.querySelector("#elev-val");Qe(Dn),Dn.addEventListener("input",()=>{const G=parseFloat(Dn.value);go.textContent=`${G.toFixed(1)}°`,Qe(Dn),a.onSunElevationChange(G)});const qn=document.createElement("div");qn.className="control-row";const fi=G=>Math.min(1,Math.max(0,(G-6e-4)/.0044)),Ss=G=>6e-4+G*.0044,U=fi(Bn.mistDensity);qn.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Mist &amp; Horizon Veil</span>
      <span class="control-val" id="mist-val">${U.toFixed(2)}</span>
    </div>
    <input type="range" id="mist-slider" min="0" max="1" step="0.01" value="${U.toFixed(2)}" />
  `;const ot=qn.querySelector("#mist-slider"),ft=qn.querySelector("#mist-val");Qe(ot),ot.addEventListener("input",()=>{const G=parseFloat(ot.value);ft.textContent=G.toFixed(2),Qe(ot),a.onMistDensityChange(Ss(G))});const mt=Bn.rainIntensity,lt=document.createElement("div");lt.className="control-row",lt.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Rain &amp; Splash Physics</span>
      <span class="control-val" id="rain-val">${mt.toFixed(2)}</span>
    </div>
    <input type="range" id="rain-slider" min="0" max="1" step="0.01" value="${mt.toFixed(2)}" />
  `;const Pt=lt.querySelector("#rain-slider"),Ot=lt.querySelector("#rain-val");Qe(Pt),Pt.addEventListener("input",()=>{const G=parseFloat(Pt.value);Ot.textContent=G.toFixed(2),Qe(Pt),a.onRainIntensityChange(G)});const qt=Bn.windStrength,Xt=document.createElement("div");Xt.className="control-row",Xt.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Wind (Ferns, Grass &amp; Sea)</span>
      <span class="control-val" id="wind-val">${qt.toFixed(2)}</span>
    </div>
    <input type="range" id="wind-slider" min="0.05" max="1.25" step="0.01" value="${qt.toFixed(2)}" />
  `;const se=Xt.querySelector("#wind-slider"),re=Xt.querySelector("#wind-val");Qe(se),se.addEventListener("input",()=>{const G=parseFloat(se.value);re.textContent=G.toFixed(2),Qe(se),a.onWindStrengthChange(G)});const Jt=Bn.lightningFrequency,fe=document.createElement("div");fe.className="control-row",fe.innerHTML=`
    <div class="control-label-line">
      <span>Thunder &amp; Lightning Storm Rate</span>
      <span class="control-val" id="bolt-val">${Jt.toFixed(2)}</span>
    </div>
    <input type="range" id="bolt-slider" min="0" max="1" step="0.01" value="${Jt.toFixed(2)}" />
  `;const xe=fe.querySelector("#bolt-slider"),Ge=fe.querySelector("#bolt-val");Qe(xe),xe.addEventListener("input",()=>{const G=parseFloat(xe.value);Ge.textContent=G.toFixed(2),Qe(xe),a.onLightningFrequencyChange(G)});const Fe=document.createElement("button");Fe.className="action-btn",Fe.style.width="100%",Fe.style.marginTop="6px",Fe.innerHTML="&#9889; Strike Forked Lightning &amp; Thunder [L]",Fe.addEventListener("click",b);let Ae=null;const ee=G=>{const ct=$s[G];if(!ct)return;ni.forEach(({id:ae,btn:jt})=>jt.classList.toggle("active",ae===G)),En.textContent=ct.subtitle,Dn.value=String(ct.sunElevationDeg),go.textContent=`${ct.sunElevationDeg.toFixed(1)}°`,Qe(Dn);const wt=fi(ct.mistDensity);ot.value=wt.toFixed(2),ft.textContent=wt.toFixed(2),Qe(ot),Pt.value=ct.rainIntensity.toFixed(2),Ot.textContent=ct.rainIntensity.toFixed(2),Qe(Pt),se.value=ct.windStrength.toFixed(2),re.textContent=ct.windStrength.toFixed(2),Qe(se),xe.value=ct.lightningFrequency.toFixed(2),Ge.textContent=ct.lightningFrequency.toFixed(2),Qe(xe),a.onSelectWeatherPreset(ct.id);let Wt=null;ct.id==="stormy-squall"?(Wt={idx:3,desc:"Rogue Storm",params:{waveAmplitude:2.65,waveSpeed:1.88,seaChoppiness:.96}},a.onTriggerLightningStrike()):ct.id==="starlit-night"||ct.id==="dawn-dusk"?Wt={idx:0,desc:"Calm Fjord",params:{waveAmplitude:.42,waveSpeed:.78,seaChoppiness:.28}}:Wt={idx:1,desc:"Nordic Swell",params:{...Eo}},Wt&&(gn.forEach((ae,jt)=>ae.classList.toggle("active",jt===Wt.idx)),Ae&&(Ae.textContent=Wt.desc),Object.assign(bn,Wt.params),Mi.forEach(ae=>ae()),a.onOceanParamsChange(Wt.params))};Object.values($s).forEach(G=>{const ct=document.createElement("button");ct.className=`weather-btn${G.id===a.initialWeatherPreset?" active":""}`,ct.innerHTML=`
      <span class="weather-btn-title">${G.label}</span>
      <span class="weather-btn-sub">${G.subtitle}</span>
    `,ct.addEventListener("click",()=>{Xe.forEach(wt=>wt.classList.remove("active")),ee(G.id)}),ni.push({id:G.id,btn:ct}),On.appendChild(ct)}),ke.appendChild(On),ke.appendChild(Cn),ke.appendChild(qn),ke.appendChild(lt),ke.appendChild(Xt),ke.appendChild(fe),ke.appendChild(Fe);const Xe=[];[{label:"Golden Dusk",toast:"Scene Moment — Golden Dusk Courtship",weather:"golden-hour",lfPatch:{biolumGlow:.12,thermalCloak:0,iridescentShimmer:.68,radiantGlow:.3,plasmaGlow:0},nfPatch:{alphaGlow:0,biolumGlow:.08,lightningCloak:0}},{label:"Biolum Night",toast:"Scene Moment — Hidden World Bioluminescence",weather:"starlit-night",lfPatch:{biolumGlow:.96,thermalCloak:0,iridescentShimmer:.85,radiantGlow:.72,plasmaGlow:.58},nfPatch:{alphaGlow:.92,biolumGlow:.95,lightningCloak:.24}},{label:"Mirror Cloak",toast:"Scene Moment — Light Fury Optical Cloak",weather:"dawn-dusk",lfPatch:{thermalCloak:.88,iridescentShimmer:.96,biolumGlow:.42,plasmaGlow:.32},nfPatch:{alphaGlow:.18,biolumGlow:.22,lightningCloak:0}},{label:"Storm Gale",toast:"Scene Moment — North Sea Lightning Squall",weather:"stormy-squall",lfPatch:{biolumGlow:.54,thermalCloak:0,plasmaGlow:.65,wingUnfurl:.58},nfPatch:{alphaGlow:.86,biolumGlow:.78,lightningCloak:.88,wingUnfurl:.62}}].forEach((G,ct)=>{const wt=document.createElement("button");wt.className=`moment-chip${ct===0?" active":""}`,wt.textContent=G.label,wt.addEventListener("click",()=>{Xe.forEach((Wt,ae)=>Wt.classList.toggle("active",ae===ct)),ee(G.weather),s.setState(G.lfPatch),e.setState(G.nfPatch),It(),v(G.toast)}),Xe.push(wt),at.appendChild(wt)});const sn=document.createElement("div");sn.className="control-label-line",sn.style.marginTop="11px",sn.innerHTML='<span>Irregular North Sea Swells</span><span class="control-val" id="sea-preset-desc">Nordic Swell</span>',ke.appendChild(sn);const Nn=sn.querySelector("#sea-preset-desc");Ae=Nn;const hn=document.createElement("div");hn.className="segmented-row";const Zn=[{label:"Quiet",desc:"Glassy Fjord",params:{waveAmplitude:.16,waveSpeed:.52,seaChoppiness:.08}},{label:"Swell",desc:"Nordic Swell",params:{...Eo}},{label:"Rough",desc:"Crossed Sea",params:{waveAmplitude:1.88,waveSpeed:1.48,seaChoppiness:.84}},{label:"Storm",desc:"Rogue Storm",params:{waveAmplitude:2.75,waveSpeed:1.96,seaChoppiness:1}}];function De(G,ct,wt,Wt,ae=.01){const jt=Eo[ct],te=document.createElement("div");te.className="control-row",te.title="Double-click slider to reset",te.innerHTML=`
      <div class="control-label-line">
        <span>${G}</span>
        <span class="control-val">${bn[ct].toFixed(2)}</span>
      </div>
      <input type="range" min="${wt}" max="${Wt}" step="${ae}" value="${bn[ct]}" />
    `;const Kt=te.querySelector(".control-val"),oe=te.querySelector("input");Qe(oe),Mi.push(()=>{oe.value=String(bn[ct]),Kt.textContent=bn[ct].toFixed(2),Qe(oe)}),oe.addEventListener("input",()=>{const Se=parseFloat(oe.value);bn[ct]=Se,Kt.textContent=Se.toFixed(2),Qe(oe),gn.forEach(Le=>Le.classList.remove("active")),Nn.textContent="Custom Swell",a.onOceanParamsChange({[ct]:Se})}),oe.addEventListener("dblclick",()=>{bn[ct]=jt,oe.value=String(jt),Kt.textContent=jt.toFixed(2),Qe(oe),a.onOceanParamsChange({[ct]:jt}),v(`Reset ${G}`)}),ke.appendChild(te)}Zn.forEach((G,ct)=>{const wt=document.createElement("button");wt.className=`seg-btn${ct===1?" active":""}`,wt.textContent=G.label,wt.addEventListener("click",()=>{gn.forEach(Wt=>Wt.classList.remove("active")),wt.classList.add("active"),Nn.textContent=G.desc,Object.assign(bn,G.params),Mi.forEach(Wt=>Wt()),a.onOceanParamsChange(G.params)}),gn.push(wt),hn.appendChild(wt)}),ke.appendChild(hn),De("Swell & Rogue Wave Height","waveAmplitude",.05,3.2,.01),De("Current & Swell Velocity","waveSpeed",.15,2.5,.01),De("Cross-Chop & Whitecap Foam","seaChoppiness",0,1,.01);const je=document.createElement("div");je.className="control-label-line",je.style.marginTop="11px",je.innerHTML='<span>Mesh Level-of-Detail</span><span class="control-val" id="lod-mode-label">LOD0 Hero</span>',ke.appendChild(je);const Mn=je.querySelector("#lod-mode-label"),Ke=document.createElement("div");Ke.className="segmented-row";const un=[{label:"LOD0",mode:"0",desc:"LOD0 Hero"},{label:"LOD1",mode:"1",desc:"LOD1 Mid"},{label:"LOD2",mode:"2",desc:"LOD2 Far"},{label:"Auto",mode:"auto",desc:"Auto Distance"}],ki=[];un.forEach((G,ct)=>{const wt=document.createElement("button");wt.className=`seg-btn${ct===0?" active":""}`,wt.textContent=G.label,wt.addEventListener("click",()=>{if(ki.forEach(Wt=>Wt.classList.remove("active")),wt.classList.add("active"),Mn.textContent=G.desc,G.mode==="auto")t.autoLOD=!0,n.autoLOD=!0;else{const Wt=Number(G.mode);t.autoLOD=!1,n.autoLOD=!1,t.setActiveLOD(Wt),n.setActiveLOD(Wt)}}),ki.push(wt),Ke.appendChild(wt)}),ke.appendChild(Ke);const Sn=document.createElement("div");Sn.className="export-btn-grid";const j=document.createElement("button");j.className="action-btn",j.textContent="Light Fury .GLB";const ut=document.createElement("button");ut.className="action-btn",ut.textContent="Toothless .GLB",Sn.appendChild(j),Sn.appendChild(ut);const Rt=document.createElement("div");Rt.className="export-status";const zt=async G=>{j.disabled=!0,ut.disabled=!0,Rt.style.color="",Rt.textContent="Packaging binary .GLB asset…";try{const ct=G==="light-fury"?await I_(n,n.activeLOD):await L_(t,t.activeLOD);Rt.textContent=`Saved ${ct.filename} (${ct.sizeMB.toFixed(2)} MB)`,v(`Exported ${ct.filename}`)}catch(ct){Rt.style.color="#f09898",Rt.textContent=`Export failed: ${ct.message}`}finally{j.disabled=!1,ut.disabled=!1}};j.addEventListener("click",()=>zt("light-fury")),ut.addEventListener("click",()=>zt("toothless")),ke.appendChild(Sn),ke.appendChild(Rt);function It(){for(const G of it)G()}return xt.querySelector("#btn-reset-pose").addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),Lt.forEach((G,ct)=>G.classList.toggle("active",ct===0)),bt.forEach((G,ct)=>G.classList.toggle("active",ct===0)),Xe.forEach((G,ct)=>G.classList.toggle("active",ct===0)),tt(),It(),v("Reset Twin Furies to Hero Perch")}),tt(),{updateTelemetry(G,ct){M.innerHTML=`<strong>${Math.round(G)}</strong> FPS`;const wt=t.lodStats[ct].triangles+n.lodStats[ct].triangles;_.innerHTML=`<strong>LOD${ct}</strong> &middot; ${wt.toLocaleString()} tris`},updateFlightUI:tt,syncControlsFromRig:It,showToast:v,triggerShutterFlash:m,clearActiveCameraBookmark(){rt.forEach(G=>G.classList.remove("active"))}}}async function D_(){const i=a_(),t=document.getElementById("canvas-container"),e=document.getElementById("hud-root");await i.advanceTo(14,"Initializing HDR WebGL2 post-processing pipeline…");const n=new F1({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=Gh,n.toneMapping=Il,n.toneMappingExposure=1.14,t.appendChild(n.domElement);const s=new Na,o=new Kn(42,window.innerWidth/window.innerHeight,.12,9500);let a=Ra[0];o.position.copy(a.position);const r=new N1(o,n.domElement);r.target.copy(a.target),r.enableDamping=!0,r.dampingFactor=.065,r.rotateSpeed=.78,r.panSpeed=.85,r.zoomSpeed=.92,r.minDistance=.34,r.maxDistance=280,r.maxPolarAngle=Math.PI*.56,r.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},r.update();const l=new Jn(window.innerWidth*n.getPixelRatio(),window.innerHeight*n.getPixelRatio(),{type:xi,samples:4}),c=new J1(n,l);c.addPass(new tv(s,o));const h=new lo(new Gt(window.innerWidth,window.innerHeight),.26,.52,1.04);h.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse;
    uniform vec3 defaultColor;
    uniform float defaultOpacity;
    uniform float luminosityThreshold;
    uniform float smoothWidth;
    varying vec2 vUv;

    float safeFiniteChannel(float c) {
      // IEEE-754: NaN fails all comparisons; +Inf exceeds 65000.0
      if (!(c >= 0.0)) return 0.0;
      if (!(c <= 65000.0)) return 28.0;
      return min(c, 28.0);
    }

    void main() {
      vec4 rawTexel = texture2D(tDiffuse, vUv);
      vec3 safeRgb = vec3(
        safeFiniteChannel(rawTexel.r),
        safeFiniteChannel(rawTexel.g),
        safeFiniteChannel(rawTexel.b)
      );
      float safeA = (rawTexel.a >= 0.0 && rawTexel.a <= 1.0) ? rawTexel.a : 1.0;
      float v = dot(safeRgb, vec3(0.2126, 0.7152, 0.0722));
      float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
      gl_FragColor = vec4(mix(defaultColor.rgb, safeRgb, alpha), mix(defaultOpacity, safeA, alpha));
    }
  `,h.materialHighPassFilter.needsUpdate=!0,c.addPass(h);const u=new iv;u.material.fragmentShader=u.material.fragmentShader.replace("gl_FragColor = texture2D( tDiffuse, vUv );",`gl_FragColor = texture2D( tDiffuse, vUv );
     gl_FragColor.r = !(gl_FragColor.r >= 0.0) ? 0.0 : (!(gl_FragColor.r <= 65000.0) ? 32.0 : min(gl_FragColor.r, 32.0));
     gl_FragColor.g = !(gl_FragColor.g >= 0.0) ? 0.0 : (!(gl_FragColor.g <= 65000.0) ? 32.0 : min(gl_FragColor.g, 32.0));
     gl_FragColor.b = !(gl_FragColor.b >= 0.0) ? 0.0 : (!(gl_FragColor.b <= 65000.0) ? 32.0 : min(gl_FragColor.b, 32.0));
     gl_FragColor.a = 1.0;`),u.material.needsUpdate=!0,c.addPass(u),await i.advanceTo(34,"Sculpting Nordic archipelago ridges, sea-arches & North Sea swells…");const d="golden-hour",f=Ov(n,s,d),g=ux(f.sharedUniforms);s.add(g.group),await i.advanceTo(58,"Forging Night Fury armor scutes, flush dorsal spines & 117-bone rig…");const v=Nv();v.rootGroup.position.copy(ai.position),v.rootGroup.rotation.set(0,ai.yaw,0),s.add(v.rootGroup),v.rootGroup.updateMatrixWorld(!0);const m=new vx(v);await i.advanceTo(82,"Weaving Light Fury pearl luminescence, mirror cloak & 111-bone rig…");const p=o_();p.rootGroup.position.copy(ri.position),p.rootGroup.rotation.set(0,ri.yaw,0),s.add(p.rootGroup),p.rootGroup.updateMatrixWorld(!0);const M=new Ax(p);await i.advanceTo(94,"Compiling shaders & calibrating twin courtship flight splines…");const _=new xs(v,m,p,M);let x=null,y=1,w=!0,A=!1;r.addEventListener("start",()=>{x=null});const T=F_(e,v,m,p,M,_,{initialWeatherPreset:d,onSelectCameraBookmark(at){a=at,x={goalPos:at.position.clone(),goalTarget:at.target.clone()}},onFlightResetCamera(){x={goalPos:a.position.clone(),goalTarget:a.target.clone()}},onFlightSpeedChange(at){y=at},onToggleCursorGaze(at){w=at},onCaptureSnapshot(){A=!0},onSelectWeatherPreset(at){f.applyPreset(at,n,s)},onSunElevationChange(at){f.setSunElevation(at,n,s)},onMistDensityChange(at){f.setMistDensity(at)},onRainIntensityChange(at){f.setRainIntensity(at)},onWindStrengthChange(at){f.setWindStrength(at)},onLightningFrequencyChange(at){f.setLightningFrequency(at)},onTriggerLightningStrike(){f.triggerLightningStrike()},onOceanParamsChange(at){g.ocean.setOceanParams(at)}}),S=new Set,b=new E,P=new E,C=new E,R=new E;window.addEventListener("keydown",at=>{const St=document.activeElement?.tagName;St==="INPUT"||St==="TEXTAREA"||S.add(at.code)}),window.addEventListener("keyup",at=>{S.delete(at.code)}),window.addEventListener("blur",()=>{S.clear()});const L=new qp,F=new Gt;n.domElement.addEventListener("dblclick",at=>{if(_.isPlaying)return;const St=n.domElement.getBoundingClientRect();F.x=(at.clientX-St.left)/St.width*2-1,F.y=-((at.clientY-St.top)/St.height)*2+1,L.setFromCamera(F,o);const dt=[p.rootGroup,v.rootGroup,g.group],At=L.intersectObjects(dt,!0).find(Lt=>Lt.distance<650&&!(Lt.object instanceof Gs)&&!Lt.object.userData?.excludeFromExport);if(!At)return;const B=At.point.clone();let I=!1,it=At.object,pt="Coastal Landform";for(;it;){if(it===p.rootGroup){I=!0,pt="Light Fury";break}if(it===v.rootGroup){I=!0,pt="Toothless";break}if(it.name.startsWith("FaroeseHeadlandSeaArch")){pt="Headland Sea-Arch";break}if(it.name==="TabularFaroeseSeaStacks"){pt="Tabular Sea-Stack";break}if(it.name==="WestWaterfallDoubleIsland"){pt="Waterfall Double-Island";break}if(it.name==="StarboardCrescentLagoonAtoll"){pt="Crescent Lagoon";break}it=it.parent}const _t=o.position.clone().sub(B).normalize(),Mt=o.position.distanceTo(B),kt=I?X.clamp(Mt*.6,2.6,7.5):X.clamp(Mt*.55,10,68),Et=B.clone().addScaledVector(_t,kt);Et.y=Math.max(Et.y,vi(Et.x,Et.z)+1.2,-9.2),T.clearActiveCameraBookmark(),x={goalPos:Et,goalTarget:B},T.showToast(`Focused on ${pt}`)});const k=new Gt(0,0);let N=-10,D=!1,W=0,O=0,q=0;window.addEventListener("pointerdown",at=>{at.target===n.domElement&&(D=!0)}),window.addEventListener("pointerup",()=>{D=!1}),window.addEventListener("pointermove",at=>{D||(k.x=at.clientX/Math.max(1,window.innerWidth)*2-1,k.y=-(at.clientY/Math.max(1,window.innerHeight)*2+1),N=performance.now()*.001)});const K=v.rig.boneMap.get("head"),Y=v.rig.boneMap.get("neck_03"),V=v.rig.boneMap.get("eye_L"),H=v.rig.boneMap.get("eye_R"),J=p.rig.boneMap.get("head"),ht=p.rig.boneMap.get("neck_03"),Q=p.rig.boneMap.get("eye_L"),st=p.rig.boneMap.get("eye_R");window.addEventListener("resize",()=>{const at=window.innerWidth,St=window.innerHeight;o.aspect=at/St,o.updateProjectionMatrix(),n.setSize(at,St),c.setSize(at,St),h.resolution.set(at,St)}),m.update(.016),M.update(.016),f.update(0,new E(0,1.15,.35),o.position),g.update(0,o.position),c.render();const $=new yu;let tt=0,yt=0,rt=60,z=!1;function xt(){requestAnimationFrame(xt);const at=Math.min($.getDelta(),.05),St=$.elapsedTime,dt=_.isPlaying,Dt=_.update(at*y,o,r.target);if(r.maxPolarAngle=Dt.isAirborne?Math.PI*.84:Math.PI*.56,z&&!_.isPlaying&&(x={goalPos:a.position.clone(),goalTarget:a.target.clone()},T.updateFlightUI(),T.syncControlsFromRig()),z=_.isPlaying,dt&&T.updateFlightUI(),R.set(0,0,0),!_.isPlaying||!_.followCamera){const Et=(S.has("KeyW")||S.has("ArrowUp")?1:0)-(S.has("KeyS")||S.has("ArrowDown")?1:0),Lt=(S.has("KeyD")||S.has("ArrowRight")?1:0)-(S.has("KeyA")||S.has("ArrowLeft")?1:0),Ft=(S.has("KeyE")?1:0)-(S.has("KeyQ")?1:0);if(Et!==0||Lt!==0||Ft!==0){x=null,o.getWorldDirection(P),C.crossVectors(P,o.up).normalize(),R.addScaledVector(P,Et).addScaledVector(C,Lt),R.y+=Ft*.85,R.lengthSq()>1e-5&&R.normalize();const Ct=o.position.distanceTo(r.target),Nt=X.clamp(Ct*.85,6.5,34),Qt=S.has("ShiftLeft")||S.has("ShiftRight")?2.4:1;R.multiplyScalar(Nt*Qt)}}if(b.lerp(R,1-Math.exp(-9*at)),b.lengthSq()>1e-4&&(o.position.addScaledVector(b,at),r.target.addScaledVector(b,at)),x&&!_.isPlaying){const Et=1-Math.exp(-5.5*at);o.position.lerp(x.goalPos,Et),r.target.lerp(x.goalTarget,Et),o.position.distanceTo(x.goalPos)<.012&&r.target.distanceTo(x.goalTarget)<.012&&(x=null)}r.update();const At=vi(o.position.x,o.position.z),B=Math.max(-9.8,At+.55);o.position.y<B&&(o.position.y=B),m.update(at),M.update(at);const it=performance.now()*.001-N<4&&!D,pt=o.position.distanceTo(new E(0,1.1,0))<26,_t=w&&!_.isPlaying&&it&&pt?1:0;if(q+=(_t-q)*(1-Math.exp(-4.2*at)),W+=(k.x-W)*(1-Math.exp(-5.5*at)),O+=(k.y-O)*(1-Math.exp(-5.5*at)),q>.002){const Et=W*.22*q,Lt=-O*.14*q,Ft=-W*.07*q,Ct=W*.14*q,Nt=-O*.1*q;K&&(K.rotation.y+=Et*.72,K.rotation.x+=Lt*.75,K.rotation.z+=Ft),Y&&(Y.rotation.y+=Et*.32,Y.rotation.x+=Lt*.25),V&&H&&(V.rotation.y+=Ct,H.rotation.y+=Ct,V.rotation.x+=Nt,H.rotation.x+=Nt),J&&(J.rotation.y+=Et*.78,J.rotation.x+=Lt*.78,J.rotation.z+=Ft*1.15),ht&&(ht.rotation.y+=Et*.36,ht.rotation.x+=Lt*.28),Q&&st&&(Q.rotation.y+=Ct,st.rotation.y+=Ct,Q.rotation.x+=Nt,st.rotation.x+=Nt)}const Mt=o.position.distanceTo(Dt.worldFocus),kt=v.updateAutoLOD(Mt);if(p.updateAutoLOD(Mt),f.update(St,Dt.worldFocus,o.position),g.update(St,o.position),tt+=at,yt++,tt>=.4){const Et=yt/tt;rt=rt*.65+Et*.35,T.updateTelemetry(rt,kt),tt=0,yt=0}if(c.render(),A){A=!1;try{const Et=n.domElement.toDataURL("image/png"),Lt=document.createElement("a"),Ft=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");Lt.download=`twin-furies-atelier-${Ft}.png`,Lt.href=Et,Lt.click(),T.triggerShutterFlash(),T.showToast("Saved UI-Free HD Snapshot (.PNG)")}catch{T.showToast("Snapshot unavailable on this device")}}}xt(),await i.completeAndDissolve(e)}D_();
