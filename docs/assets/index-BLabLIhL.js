(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="174",Fs={ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nu=0,Ol=1,Uu=2,Ah=1,Th=2,ci=3,zi=0,_n=1,Je=2,fi=0,Ns=1,pa=2,Hl=3,Vl=4,ku=5,ts=100,zu=101,Bu=102,Ou=103,Hu=104,Vu=200,Wu=201,Gu=202,Xu=203,Sr=204,Ar=205,Yu=206,$u=207,qu=208,Zu=209,ju=210,Ku=211,Qu=212,Ju=213,td=214,Tr=0,Er=1,Cr=2,mi=3,Pr=4,Rr=5,Lr=6,Ir=7,Eh=0,ed=1,nd=2,Fi=0,Ch=1,Ph=2,Rh=3,fl=4,Lh=5,Ih=6,Dh=7,Wl="attached",id="detached",Fh=300,Os=301,Hs=302,Dr=303,Fr=304,Ca=306,ii=1e3,Li=1001,fa=1002,Mn=1003,Nh=1004,ao=1005,$n=1006,oa=1007,Ii=1008,_i=1009,Uh=1010,kh=1011,mo=1012,ml=1013,os=1014,qn=1015,ni=1016,gl=1017,vl=1018,Vs=1020,zh=35902,Bh=1021,Oh=1022,Pn=1023,Hh=1024,Vh=1025,Us=1026,Ws=1027,_l=1028,xl=1029,Wh=1030,Ml=1031,wl=1033,aa=33776,ra=33777,la=33778,ca=33779,Nr=35840,Ur=35841,kr=35842,zr=35843,Br=36196,Or=37492,Hr=37496,Vr=37808,Wr=37809,Gr=37810,Xr=37811,Yr=37812,$r=37813,qr=37814,Zr=37815,jr=37816,Kr=37817,Qr=37818,Jr=37819,tl=37820,el=37821,ha=36492,nl=36494,il=36495,Gh=36283,sl=36284,ol=36285,al=36286,sd=2300,od=2301,ad=3200,rd=3201,Xh=0,ld=1,kn="",an="srgb",Gs="srgb-linear",ma="linear",Fe="srgb",us=7680,Gl=519,cd=512,hd=513,ud=514,Yh=515,dd=516,pd=517,fd=518,md=519,Xl=35044,Yl="300 es",di=2e3,ga=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const po=Math.PI/180,go=180/Math.PI;function rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function yl(i,t){return(i%t+t)%t}function gd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vd(i,t,e){return i!==t?(e-i)/(t-i):0}function fo(i,t,e){return(1-e)*i+e*t}function _d(i,t,e,n){return fo(i,t,1-Math.exp(-e*n))}function xd(i,t=1){return t-Math.abs(yl(i,t*2)-t)}function Md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bd(i,t){return i+Math.random()*(t-i)}function Sd(i){return i*(.5-Math.random())}function Ad(i){i!==void 0&&($l=i);let t=$l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Td(i){return i*po}function Ed(i){return i*go}function Cd(i){return(i&i-1)===0&&i!==0}function Pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ld(i,t,e,n,s){const o=Math.cos,a=Math.sin,r=o(e/2),l=a(e/2),c=o((t+n)/2),h=a((t+n)/2),u=o((t-n)/2),d=a((t-n)/2),f=o((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(r*h,l*u,l*d,r*c);break;case"YZY":i.set(l*d,r*h,l*u,r*c);break;case"ZXZ":i.set(l*u,l*d,r*h,r*c);break;case"XZX":i.set(r*h,l*g,l*f,r*c);break;case"YXY":i.set(l*f,r*h,l*g,r*c);break;case"ZYZ":i.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ps(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const q={DEG2RAD:po,RAD2DEG:go,generateUUID:rs,clamp:Me,euclideanModulo:yl,mapLinear:gd,inverseLerp:vd,lerp:fo,damp:_d,pingpong:xd,smoothstep:Md,smootherstep:wd,randInt:yd,randFloat:bd,randFloatSpread:Sd,seededRandom:Ad,degToRad:Td,radToDeg:Ed,isPowerOfTwo:Cd,ceilPowerOfTwo:Pd,floorPowerOfTwo:Rd,setQuaternionFromProperEuler:Ld,normalize:fn,denormalize:Ps};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(t,e,n,s,o,a,r,l,c){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c)}set(t,e,n,s,o,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],w=s[4],_=s[7],A=s[2],y=s[5],S=s[8];return o[0]=a*v+r*x+l*A,o[3]=a*m+r*w+l*y,o[6]=a*p+r*_+l*S,o[1]=c*v+h*x+u*A,o[4]=c*m+h*w+u*y,o[7]=c*p+h*_+u*S,o[2]=d*v+f*x+g*A,o[5]=d*m+f*w+g*y,o[8]=d*p+f*_+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*o*h+n*r*l+s*o*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,d=r*l-h*o,f=c*o-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(r*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-r*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-s*c,s*l,-s*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new xe;function $h(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Id(){const i=va("canvas");return i.style.display="block",i}const ql={};function Qi(i){i in ql||(ql[i]=!0,console.warn(i))}function Dd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Fd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zl=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){const i={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===Fe&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Fe&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?ma:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,a){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gs]:{primaries:t,whitePoint:n,transfer:ma,toXYZ:Zl,fromXYZ:jl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:n,transfer:Fe,toXYZ:Zl,fromXYZ:jl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}const Pe=Ud();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class kd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=va("canvas")),ds.width=t.width,ds.height=t.height;const n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=va("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=gi(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zd=0;class Pa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(ka(s[a].image)):o.push(ka(s[a]))}else o=ka(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bd=0;class cn extends as{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=Li,s=Li,o=$n,a=Ii,r=Pn,l=_i,c=cn.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=rs(),this.name="",this.source=new Pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ii:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ii:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Fh;cn.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,e=0,n=0,s=1){ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(f+1)/2,A=(p+1)/2,y=(h+d)/4,S=(u+v)/4,T=(g+m)/4;return w>_&&w>A?w<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(w),s=y/n,o=S/n):_>A?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=y/s,o=T/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=S/o,s=T/o),this.set(n,s,o,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qh extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hd extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ye{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,r){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[a+0],f=o[a+1],g=o[a+2],v=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-r;const p=l*d+c*f+h*g+u*v,x=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const A=Math.sqrt(w),y=Math.atan2(A,p*x);m=Math.sin(m*y)/A,r=Math.sin(r*y)/A}const _=r*x;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-r){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,a){const r=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[a],d=o[a+1],f=o[a+2],g=o[a+3];return t[e]=r*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-r*f,t[e+2]=c*g+h*f+r*d-l*u,t[e+3]=h*g-r*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(s/2),u=r(o/2),d=l(n/2),f=l(s/2),g=l(o/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(a-s)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(o+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(o-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(a-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+s*c-o*l,this._y=s*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-s*r,this._w=a*h-n*r-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+s*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*s-r*n),h=2*(r*e-o*s),u=2*(o*n-a*e);return this.x=e+l*c+a*u-r*h,this.y=n+l*h+r*c-o*u,this.z=s+l*u+o*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=s*l-o*r,this.y=o*a-n*l,this.z=n*r-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new E,Kl=new Ye;class Bi{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(o,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Po.subVectors(this.max,Js),ps.subVectors(t.a,Js),fs.subVectors(t.b,Js),ms.subVectors(t.c,Js),bi.subVectors(fs,ps),Si.subVectors(ms,fs),Gi.subVectors(ps,ms);let e=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-Gi.z,Gi.y,bi.z,0,-bi.x,Si.z,0,-Si.x,Gi.z,0,-Gi.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-Gi.y,Gi.x,0];return!Ba(e,ps,fs,ms,Po)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,ps,fs,ms,Po))?!1:(Ro.crossVectors(bi,Si),e=[Ro.x,Ro.y,Ro.z],Ba(e,ps,fs,ms,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new E,new E,new E,new E,new E,new E,new E,new E],Hn=new E,Co=new Bi,ps=new E,fs=new E,ms=new E,bi=new E,Si=new E,Gi=new E,Js=new E,Po=new E,Ro=new E,Xi=new E;function Ba(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){Xi.fromArray(i,o);const r=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=t.dot(Xi),c=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Vd=new Bi,to=new E,Oa=new E;class Oi{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;to.subVectors(t,this.center);const e=to.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(to,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(to.copy(t.center).add(Oa)),this.expandByPoint(to.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new E,Ha=new E,Lo=new E,Ai=new E,Va=new E,Io=new E,Wa=new E;class wo{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ha.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(Ha);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Lo),r=Ai.dot(this.direction),l=-Ai.dot(Lo),c=Ai.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-r,d=a*r-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*o+r)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(a*o+r)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=a>0?-o:o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ha).addScaledVector(Lo,d),f}intersectSphere(t,e){oi.subVectors(t.center,this.origin);const n=oi.dot(this.direction),s=oi.dot(oi)-n*n,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,n,s,o){Va.subVectors(e,t),Io.subVectors(n,t),Wa.crossVectors(Va,Io);let a=this.direction.dot(Wa),r;if(a>0){if(s)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Ai.subVectors(this.origin,t);const l=r*this.direction.dot(Io.crossVectors(Ai,Io));if(l<0)return null;const c=r*this.direction.dot(Va.cross(Ai));if(c<0||l+c>a)return null;const h=-r*Ai.dot(Wa);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,o,a,r,l,c,h,u,d,f,g,v,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,o,a,r,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),o=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-r*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*r,e[4]=g*r-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=f*r-g,e[6]=v+d*r,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*r,e[4]=-a*u,e[8]=g+f*r,e[1]=f+g*r,e[5]=a*h,e[9]=v-d*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=r*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wd,t,Gd)}lookAt(t,e,n){const s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Ti.crossVectors(n,An),Ti.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ti.crossVectors(n,An)),Ti.normalize(),Do.crossVectors(An,Ti),s[0]=Ti.x,s[4]=Do.x,s[8]=An.x,s[1]=Ti.y,s[5]=Do.y,s[9]=An.y,s[2]=Ti.z,s[6]=Do.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],w=n[7],_=n[11],A=n[15],y=s[0],S=s[4],T=s[8],b=s[12],M=s[1],P=s[5],C=s[9],R=s[13],L=s[2],D=s[6],U=s[10],z=s[14],N=s[3],H=s[7],V=s[11],$=s[15];return o[0]=a*y+r*M+l*L+c*N,o[4]=a*S+r*P+l*D+c*H,o[8]=a*T+r*C+l*U+c*V,o[12]=a*b+r*R+l*z+c*$,o[1]=h*y+u*M+d*L+f*N,o[5]=h*S+u*P+d*D+f*H,o[9]=h*T+u*C+d*U+f*V,o[13]=h*b+u*R+d*z+f*$,o[2]=g*y+v*M+m*L+p*N,o[6]=g*S+v*P+m*D+p*H,o[10]=g*T+v*C+m*U+p*V,o[14]=g*b+v*R+m*z+p*$,o[3]=x*y+w*M+_*L+A*N,o[7]=x*S+w*P+_*D+A*H,o[11]=x*T+w*C+_*U+A*V,o[15]=x*b+w*R+_*z+A*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+o*l*u-s*c*u-o*r*d+n*c*d+s*r*f-n*l*f)+v*(+e*l*f-e*c*d+o*a*d-s*a*f+s*c*h-o*l*h)+m*(+e*c*u-e*r*f-o*a*u+n*a*f+o*r*h-n*c*h)+p*(-s*r*h-e*l*u+e*r*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=u*m*c-v*d*c+v*l*f-r*m*f-u*l*p+r*d*p,w=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,_=h*v*c-g*u*c+g*r*f-a*v*f-h*r*p+a*u*p,A=g*u*l-h*v*l-g*r*d+a*v*d+h*r*m-a*u*m,y=e*x+n*w+s*_+o*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/y;return t[0]=x*S,t[1]=(v*d*o-u*m*o-v*s*f+n*m*f+u*s*p-n*d*p)*S,t[2]=(r*m*o-v*l*o+v*s*c-n*m*c-r*s*p+n*l*p)*S,t[3]=(u*l*o-r*d*o-u*s*c+n*d*c+r*s*f-n*l*f)*S,t[4]=w*S,t[5]=(h*m*o-g*d*o+g*s*f-e*m*f-h*s*p+e*d*p)*S,t[6]=(g*l*o-a*m*o-g*s*c+e*m*c+a*s*p-e*l*p)*S,t[7]=(a*d*o-h*l*o+h*s*c-e*d*c-a*s*f+e*l*f)*S,t[8]=_*S,t[9]=(g*u*o-h*v*o-g*n*f+e*v*f+h*n*p-e*u*p)*S,t[10]=(a*v*o-g*r*o+g*n*c-e*v*c-a*n*p+e*r*p)*S,t[11]=(h*r*o-a*u*o-h*n*c+e*u*c+a*n*f-e*r*f)*S,t[12]=A*S,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*S,t[14]=(g*r*s-a*v*s-g*n*l+e*v*l+a*n*m-e*r*m)*S,t[15]=(a*u*s-h*r*s+h*n*l-e*u*l-a*n*d+e*r*d)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+n,h*l-s*a,0,c*l-s*r,h*l+s*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,h=a+a,u=r+r,d=o*c,f=o*h,g=o*u,v=a*h,m=a*u,p=r*u,x=l*c,w=l*h,_=l*u,A=n.x,y=n.y,S=n.z;return s[0]=(1-(v+p))*A,s[1]=(f+_)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-_)*y,s[5]=(1-(d+p))*y,s[6]=(m+x)*y,s[7]=0,s[8]=(g+w)*S,s[9]=(m-x)*S,s[10]=(1-(d+v))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=gs.set(s[0],s[1],s[2]).length();const a=gs.set(s[4],s[5],s[6]).length(),r=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Vn.copy(this);const c=1/o,h=1/a,u=1/r;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,s,o,a,r=di){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(r===di)f=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===ga)f=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,a,r=di){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-o),d=(e+t)*c,f=(n+s)*h;let g,v;if(r===di)g=(a+o)*u,v=-2*u;else if(r===ga)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gs=new E,Vn=new ce,Wd=new E(0,0,0),Gd=new E(1,1,1),Ti=new E,Do=new E,An=new E,Ql=new ce,Jl=new Ye;class wn{constructor(t=0,e=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],a=s[4],r=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class bl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xd=0;const tc=new E,vs=new Ye,ai=new ce,Fo=new E,eo=new E,Yd=new E,$d=new Ye,ec=new E(1,0,0),nc=new E(0,1,0),ic=new E(0,0,1),sc={type:"added"},qd={type:"removed"},_s={type:"childadded",child:null},Ga={type:"childremoved",child:null};class je extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const t=new E,e=new wn,n=new Ye,s=new E(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new xe}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return tc.copy(t).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(eo,Fo,this.up):ai.lookAt(Fo,eo,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ai),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sc),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sc),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,Yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,$d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));s.material=r}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}je.DEFAULT_UP=new E(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new E,ri=new E,Xa=new E,li=new E,xs=new E,Ms=new E,oc=new E,Ya=new E,$a=new E,qa=new E,Za=new ze,ja=new ze,Ka=new ze;class Yn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Wn.subVectors(s,e),ri.subVectors(n,e),Xa.subVectors(t,e);const a=Wn.dot(Wn),r=Wn.dot(ri),l=Wn.dot(Xa),c=ri.dot(ri),h=ri.dot(Xa),u=a*c-r*r;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-r*h)*d,g=(a*h-r*l)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,o,a,r,l){return this.getBarycoord(t,e,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,li.x),l.addScaledVector(a,li.y),l.addScaledVector(r,li.z),l)}static getInterpolatedAttribute(t,e,n,s,o,a){return Za.setScalar(0),ja.setScalar(0),Ka.setScalar(0),Za.fromBufferAttribute(t,e),ja.fromBufferAttribute(t,n),Ka.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Za,o.x),a.addScaledVector(ja,o.y),a.addScaledVector(Ka,o.z),a}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),ri.subVectors(t,e),Wn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Wn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let a,r;xs.subVectors(s,n),Ms.subVectors(o,n),Ya.subVectors(t,n);const l=xs.dot(Ya),c=Ms.dot(Ya);if(l<=0&&c<=0)return e.copy(n);$a.subVectors(t,s);const h=xs.dot($a),u=Ms.dot($a);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xs,a);qa.subVectors(t,o);const f=xs.dot(qa),g=Ms.dot(qa);if(g>=0&&f<=g)return e.copy(o);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(Ms,r);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return oc.subVectors(o,s),r=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(oc,r);const p=1/(m+v+d);return a=v*p,r=d*p,e.copy(n).addScaledVector(xs,a).addScaledVector(Ms,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},No={h:0,s:0,l:0};function Qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Pe.workingColorSpace){if(t=yl(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Qa(a,o,t+1/3),this.g=Qa(a,o,t),this.b=Qa(a,o,t-1/3)}return Pe.toWorkingColorSpace(this,s),this}setStyle(t,e=an){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Pe.fromWorkingColorSpace(pn.copy(this),t),Math.round(Me(pn.r*255,0,255))*65536+Math.round(Me(pn.g*255,0,255))*256+Math.round(Me(pn.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,s=pn.g,o=pn.b,a=Math.max(n,s,o),r=Math.min(n,s,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=an){Pe.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,s=pn.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(No);const n=fo(Ei.h,No.h,e),s=fo(Ei.s,No.s,e),o=fo(Ei.l,No.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ht;Ht.NAMES=Zh;let Zd=0;class js extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Ns,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Ar,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ar&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vo extends js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new E,Uo=new $t;let jd=0;class Z{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array),o=fn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}}class ye extends Z{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jh extends Z{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Z{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kd=0;const Nn=new ce,Ja=new je,ws=new E,Tn=new Bi,no=new Bi,sn=new E;class Zt extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?jh:ye)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new xe().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];no.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(Tn.min,no.min),Tn.expandByPoint(sn),sn.addVectors(Tn.max,no.max),Tn.expandByPoint(sn)):(Tn.expandByPoint(no.min),Tn.expandByPoint(no.max))}Tn.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)sn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)sn.fromBufferAttribute(r,c),l&&(ws.fromBufferAttribute(t,c),sn.add(ws)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Z(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let T=0;T<n.count;T++)r[T]=new E,l[T]=new E;const c=new E,h=new E,u=new E,d=new $t,f=new $t,g=new $t,v=new E,m=new E;function p(T,b,M){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(o,T),f.fromBufferAttribute(o,b),g.fromBufferAttribute(o,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),r[T].add(v),r[b].add(v),r[M].add(v),l[T].add(m),l[b].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let T=0,b=x.length;T<b;++T){const M=x[T],P=M.start,C=M.count;for(let R=P,L=P+C;R<L;R+=3)p(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const w=new E,_=new E,A=new E,y=new E;function S(T){A.fromBufferAttribute(s,T),y.copy(A);const b=r[T];w.copy(b),w.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(y,b);const P=_.dot(l[T])<0?-1:1;a.setXYZW(T,w.x,w.y,w.z,P)}for(let T=0,b=x.length;T<b;++T){const M=x[T],P=M.start,C=M.count;for(let R=P,L=P+C;R<L;R+=3)S(t.getX(R+0)),S(t.getX(R+1)),S(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Z(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new E,o=new E,a=new E,r=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Z(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zt,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new ce,Yi=new wo,ko=new Oi,rc=new E,zo=new E,Bo=new E,Oo=new E,tr=new E,Ho=new E,lc=new E,Vo=new E;class Ne extends je{constructor(t=new Zt,e=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(o&&r){Ho.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],u=o[l];h!==0&&(tr.fromBufferAttribute(u,t),a?Ho.addScaledVector(tr,h):Ho.addScaledVector(tr.sub(e),h))}e.add(Ho)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(o),Yi.copy(t.ray).recast(t.near),!(ko.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ko,rc)===null||Yi.origin.distanceToSquared(rc)>(t.far-t.near)**2))&&(ac.copy(o).invert(),Yi.copy(t.ray).applyMatrix4(ac),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,A=w;_<A;_+=3){const y=r.getX(_),S=r.getX(_+1),T=r.getX(_+2);s=Wo(this,p,t,n,c,h,u,y,S,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=r.getX(m),w=r.getX(m+1),_=r.getX(m+2);s=Wo(this,a,t,n,c,h,u,x,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,A=w;_<A;_+=3){const y=_,S=_+1,T=_+2;s=Wo(this,p,t,n,c,h,u,y,S,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,w=m+1,_=m+2;s=Wo(this,a,t,n,c,h,u,x,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Qd(i,t,e,n,s,o,a,r){let l;if(t.side===_n?l=n.intersectTriangle(a,o,s,!0,r):l=n.intersectTriangle(s,o,a,t.side===zi,r),l===null)return null;Vo.copy(r),Vo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Vo);return c<e.near||c>e.far?null:{distance:c,point:Vo.clone(),object:i}}function Wo(i,t,e,n,s,o,a,r,l,c){i.getVertexPosition(r,zo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,Oo);const h=Qd(i,t,e,n,zo,Bo,Oo,lc);if(h){const u=new E;Yn.getBarycoord(lc,zo,Bo,Oo,u),s&&(h.uv=Yn.getInterpolatedAttribute(s,r,l,c,u,new $t)),o&&(h.uv1=Yn.getInterpolatedAttribute(o,r,l,c,u,new $t)),a&&(h.normal=Yn.getInterpolatedAttribute(a,r,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new E,materialIndex:0};Yn.getNormal(zo,Bo,Oo,d.normal),h.face=d,h.barycoord=u}return h}class yo extends Zt{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(v,m,p,x,w,_,A,y,S,T,b){const M=_/S,P=A/T,C=_/2,R=A/2,L=y/2,D=S+1,U=T+1;let z=0,N=0;const H=new E;for(let V=0;V<U;V++){const $=V*P-R;for(let K=0;K<D;K++){const X=K*M-C;H[v]=X*x,H[m]=$*w,H[p]=L,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[p]=y>0?1:-1,h.push(H.x,H.y,H.z),u.push(K/S),u.push(1-V/T),z+=1}}for(let V=0;V<T;V++)for(let $=0;$<S;$++){const K=d+$+D*V,X=d+$+D*(V+1),G=d+($+1)+D*(V+1),O=d+($+1)+D*V;l.push(K,X,O),l.push(X,G,O),N+=6}r.addGroup(f,N,b),f+=N,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=Xs(i[e]);for(const s in n)t[s]=n[s]}return t}function Jd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const _o={clone:Xs,merge:mn};var tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qh extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new E,cc=new $t,hc=new $t;class Un extends Qh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,cc,hc),e.subVectors(hc,cc)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,bs=1;class np extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Un(ys,bs,t,e);s.layers=this.layers,this.add(s);const o=new Un(ys,bs,t,e);o.layers=this.layers,this.add(o);const a=new Un(ys,bs,t,e);a.layers=this.layers,this.add(a);const r=new Un(ys,bs,t,e);r.layers=this.layers,this.add(r);const l=new Un(ys,bs,t,e);l.layers=this.layers,this.add(l);const c=new Un(ys,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jh extends cn{constructor(t,e,n,s,o,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Os,super(t,e,n,s,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ip extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yo(5,5,5),o=new ke({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:fi});o.uniforms.tEquirect.value=e;const a=new Ne(s,o),r=e.minFilter;return e.minFilter===Ii&&(e.minFilter=$n),new np(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}}class Zn extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sp={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new Sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _a extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const uc=new E,dc=new ze,pc=new ze,op=new E,fc=new ce,Go=new E,nr=new Oi,mc=new ce,ir=new wo;class tu extends Ne{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wl,this.bindMatrix=new ce,this.bindMatrixInverse=new ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Go),this.boundingSphere.expandByPoint(Go)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(s),t.ray.intersectsSphere(nr)!==!1&&(mc.copy(s).invert(),ir.copy(t.ray).applyMatrix4(mc),!(this.boundingBox!==null&&ir.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ir)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ze,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===id?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;dc.fromBufferAttribute(s.attributes.skinIndex,t),pc.fromBufferAttribute(s.attributes.skinWeight,t),uc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const a=pc.getComponent(o);if(a!==0){const r=dc.getComponent(o);fc.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(op.copy(uc).applyMatrix4(fc),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Al extends je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eu extends cn{constructor(t=null,e=1,n=1,s,o,a,r,l,c=Mn,h=Mn,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=new ce,ap=new ce;class Ra{constructor(t=[],e=[]){this.uuid=rs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ce)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ce;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const r=t[o]?t[o].matrixWorld:ap;gc.multiplyMatrices(r,e[o]),gc.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ra(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new eu(e,t,t,Pn,qn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let a=e[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new Al),this.bones.push(a),this.boneInverses.push(new ce().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const a=e[s];t.bones.push(a.uuid);const r=n[s];t.boneInverses.push(r.toArray())}return t}}class xa extends Z{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new ce,vc=new ce,Xo=[],_c=new Bi,rp=new ce,io=new Ne,so=new Oi;class Yo extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),_c.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(_c)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),so.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(so)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=t*o+1;for(let r=0;r<n.length;r++)n[r]=s[a+r]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),t.ray.intersectsSphere(so)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ss),vc.multiplyMatrices(n,Ss),io.matrixWorld=vc,io.raycast(t,Xo);for(let a=0,r=Xo.length;a<r;a++){const l=Xo[a];l.instanceId=o,l.object=this,e.push(l)}Xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eu(new Float32Array(s*this.count),s,this.count,_l,qn));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=s*t;o[l]=r,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sr=new E,lp=new E,cp=new xe;class Pi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sr.subVectors(n,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cp.getNormalMatrix(t),s=this.coplanarPoint(sr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Oi,$o=new E;class Tl{constructor(t=new Pi,e=new Pi,n=new Pi,s=new Pi,o=new Pi,a=new Pi){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di){const n=this.planes,s=t.elements,o=s[0],a=s[1],r=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],w=s[14],_=s[15];if(n[0].setComponents(l-o,d-c,m-f,_-p).normalize(),n[1].setComponents(l+o,d+c,m+f,_+p).normalize(),n[2].setComponents(l+a,d+h,m+g,_+x).normalize(),n[3].setComponents(l-a,d-h,m-g,_-x).normalize(),n[4].setComponents(l-r,d-u,m-v,_-w).normalize(),e===di)n[5].setComponents(l+r,d+u,m+v,_+w).normalize();else if(e===ga)n[5].setComponents(r,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($o.x=s.normal.x>0?t.max.x:t.min.x,$o.y=s.normal.y>0?t.max.y:t.min.y,$o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hp extends js{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xc=new ce,rl=new wo,qo=new Oi,Zo=new E;class Rs extends je{constructor(t=new Zt,e=new hp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),qo.radius+=o,t.ray.intersectsSphere(qo)===!1)return;xc.copy(s).invert(),rl.copy(t.ray).applyMatrix4(xc);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);Zo.fromBufferAttribute(u,m),Mc(Zo,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Zo.fromBufferAttribute(u,g),Mc(Zo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Mc(i,t,e,n,s,o,a){const r=rl.distanceSqToPoint(i);if(r<e){const l=new E;rl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class or extends cn{constructor(t,e,n,s,o,a,r,l,c,h,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class gn extends cn{constructor(t,e,n,s,o,a,r,l,c){super(t,e,n,s,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nu extends cn{constructor(t,e,n,s,o,a,r,l,c,h=Us){if(h!==Us&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=os),n===void 0&&h===Ws&&(n=Vs),super(null,s,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class up{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=n[s]-a,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(o-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),r=this.getPoint(o),l=e||(a.isVector2?new $t:new E);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,s=[],o=[],a=[],r=new E,l=new ce;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new E)}o[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],r),a[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(s[f-1],s[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(Me(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(r,g))}a[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Me(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(r.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function El(){let i=0,t=0,e=0,n=0;function s(o,a,r,l){i=o,t=r,e=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){s(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,u){let d=(a-o)/c-(r-o)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+u)+(l-r)/u;d*=h,f*=h,s(a,r,d,f)},calc:function(o){const a=o*o,r=a*o;return i+t*o+e*a+n*r}}}const jo=new E,ar=new El,rr=new El,lr=new El;class Bn extends up{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){const n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%o]:(jo.subVectors(s[0],s[1]).add(s[0]),c=jo);const u=s[r%o],d=s[(r+1)%o];if(this.closed||r+2<o?h=s[(r+2)%o]:(jo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=jo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ar.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),rr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),lr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ar.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),rr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),lr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ar.calc(l),rr.calc(l),lr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Cl extends Zt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new E,h=new $t;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ma extends Zt{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function x(){const _=new E,A=new E;let y=0;const S=(e-t)/n;for(let T=0;T<=o;T++){const b=[],M=T/o,P=M*(e-t)+t;for(let C=0;C<=s;C++){const R=C/s,L=R*l+r,D=Math.sin(L),U=Math.cos(L);A.x=P*D,A.y=-M*n+m,A.z=P*U,u.push(A.x,A.y,A.z),_.set(D,S,U).normalize(),d.push(_.x,_.y,_.z),f.push(R,1-M),b.push(g++)}v.push(b)}for(let T=0;T<s;T++)for(let b=0;b<o;b++){const M=v[b][T],P=v[b+1][T],C=v[b+1][T+1],R=v[b][T+1];(t>0||b!==0)&&(h.push(M,P,R),y+=3),(e>0||b!==o-1)&&(h.push(P,C,R),y+=3)}c.addGroup(p,y,0),p+=y}function w(_){const A=g,y=new $t,S=new E;let T=0;const b=_===!0?t:e,M=_===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let C=0;C<=s;C++){const L=C/s*l+r,D=Math.cos(L),U=Math.sin(L);S.x=b*U,S.y=m*M,S.z=b*D,u.push(S.x,S.y,S.z),d.push(0,M,0),y.x=D*.5+.5,y.y=U*.5*M+.5,f.push(y.x,y.y),g++}for(let C=0;C<s;C++){const R=A+C,L=P+C;_===!0?h.push(L,L+1,R):h.push(L+1,L,R),T+=3}c.addGroup(p,T,_===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pl extends Zt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],a=[];r(s),c(n),h(),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(o.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(x){const w=new E,_=new E,A=new E;for(let y=0;y<e.length;y+=3)f(e[y+0],w),f(e[y+1],_),f(e[y+2],A),l(w,_,A,x)}function l(x,w,_,A){const y=A+1,S=[];for(let T=0;T<=y;T++){S[T]=[];const b=x.clone().lerp(_,T/y),M=w.clone().lerp(_,T/y),P=y-T;for(let C=0;C<=P;C++)C===0&&T===y?S[T][C]=b:S[T][C]=b.clone().lerp(M,C/P)}for(let T=0;T<y;T++)for(let b=0;b<2*(y-T)-1;b++){const M=Math.floor(b/2);b%2===0?(d(S[T][M+1]),d(S[T+1][M]),d(S[T][M])):(d(S[T][M+1]),d(S[T+1][M+1]),d(S[T+1][M]))}}function c(x){const w=new E;for(let _=0;_<o.length;_+=3)w.x=o[_+0],w.y=o[_+1],w.z=o[_+2],w.normalize().multiplyScalar(x),o[_+0]=w.x,o[_+1]=w.y,o[_+2]=w.z}function h(){const x=new E;for(let w=0;w<o.length;w+=3){x.x=o[w+0],x.y=o[w+1],x.z=o[w+2];const _=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;a.push(_,1-A)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const w=a[x+0],_=a[x+2],A=a[x+4],y=Math.max(w,_,A),S=Math.min(w,_,A);y>.9&&S<.1&&(w<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function f(x,w){const _=x*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const x=new E,w=new E,_=new E,A=new E,y=new $t,S=new $t,T=new $t;for(let b=0,M=0;b<o.length;b+=9,M+=6){x.set(o[b+0],o[b+1],o[b+2]),w.set(o[b+3],o[b+4],o[b+5]),_.set(o[b+6],o[b+7],o[b+8]),y.set(a[M+0],a[M+1]),S.set(a[M+2],a[M+3]),T.set(a[M+4],a[M+5]),A.copy(x).add(w).add(_).divideScalar(3);const P=m(A);v(y,M+0,x,P),v(S,M+2,w,P),v(T,M+4,_,P)}}function v(x,w,_,A){A<0&&x.x===1&&(a[w]=x.x-1),_.x===0&&_.z===0&&(a[w]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.vertices,t.indices,t.radius,t.details)}}class La extends Pl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class Ys extends Zt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(s),c=r+1,h=l+1,u=t/r,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let w=0;w<c;w++){const _=w*u-o;g.push(_,-x,0),v.push(0,0,1),m.push(w/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<r;x++){const w=x+c*p,_=x+c*(p+1),A=x+1+c*(p+1),y=x+1+c*p;f.push(w,_,y),f.push(_,A,y)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.width,t.height,t.widthSegments,t.heightSegments)}}class wa extends Zt{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],w=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const y=A/e;u.x=-t*Math.cos(s+y*o)*Math.sin(a+w*r),u.y=t*Math.cos(a+w*r),u.z=t*Math.sin(s+y*o)*Math.sin(a+w*r),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(y+_,1-w),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const w=h[p][x+1],_=h[p][x],A=h[p+1][x],y=h[p+1][x+1];(p!==0||a>0)&&f.push(w,_,y),(p!==n-1||l<Math.PI)&&f.push(_,A,y)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dp extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ni extends js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vn extends Ni{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class pp extends js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fp extends js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class iu extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mp extends iu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const cr=new ce,wc=new E,yc=new E;class gp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(wc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Rl extends Qh{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vp extends gp{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bc extends iu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new vp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _p extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class xp extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class su{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Sc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Sc(){return performance.now()}const Ll="\\[\\]\\.:\\/",Mp=new RegExp("["+Ll+"]","g"),Il="[^"+Ll+"]",wp="[^"+Ll.replace("\\.","")+"]",yp=/((?:WC+[\/:])*)/.source.replace("WC",Il),bp=/(WCOD+)?/.source.replace("WCOD",wp),Sp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),Ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),Tp=new RegExp("^"+yp+bp+Sp+Ap+"$"),Ep=["material","materials","bones","map"];class Cp{constructor(t,e,n){const s=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Le{constructor(t,e,n){this.path=e,this.parsedPath=n||Le.parseTrackName(e),this.node=Le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Le.Composite(t,e,n):new Le(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mp,"")}static parseTrackName(t){const e=Tp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);Ep.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===e||r.uuid===e)return r;const l=n(r.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let o=e.propertyIndex;if(t||(t=Le.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?r=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Le.Composite=Cp;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ac=new ce;class Pp{constructor(t,e,n=0,s=1/0){this.ray=new wo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ac.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ac),this}intersectObject(t,e=!0,n=[]){return ll(t,this,n,e),n.sort(Tc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)ll(t[s],this,n,e);return n.sort(Tc),n}}function Tc(i,t){return i.distance-t.distance}function ll(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let a=0,r=o.length;a<r;a++)ll(o[a],t,e,!0)}}class Ec{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rp extends as{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Cc(i,t,e,n){const s=Lp(n);switch(e){case Bh:return i*t;case Hh:return i*t;case Vh:return i*t*2;case _l:return i*t/s.components*s.byteLength;case xl:return i*t/s.components*s.byteLength;case Wh:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case Oh:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case wl:return i*t*4/s.components*s.byteLength;case aa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ur:case zr:return Math.max(i,16)*Math.max(t,8)/4;case Nr:case kr:return Math.max(i,8)*Math.max(t,8)/2;case Br:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $r:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ha:case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gh:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lp(i){switch(i){case _i:case Uh:return{byteLength:1,components:1};case mo:case kh:case ni:return{byteLength:2,components:1};case gl:case vl:return{byteLength:2,components:4};case os:case ml:case qn:return{byteLength:4,components:1};case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let i=null,t=!1,e=null,n=null;function s(o,a){e(o,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ip(i){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(i.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:o,update:a}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,$p=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,If=`struct PhysicalMaterial {
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
}`,Df=`
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wf=`#if defined( USE_POINTS_UV )
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
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_0=`float getShadowMask() {
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
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,w0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F0=`uniform sampler2D t2D;
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
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
}`,O0=`#if DEPTH_PACKING == 3200
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
}`,H0=`#define DISTANCE
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
}`,V0=`#define DISTANCE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,q0=`uniform vec3 diffuse;
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
}`,Z0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
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
}`,K0=`#define MATCAP
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
}`,Q0=`#define MATCAP
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
}`,J0=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,em=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,om=`#define TOON
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
}`,am=`#define TOON
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
}`,rm=`uniform float size;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:Dp,alphahash_pars_fragment:Fp,alphamap_fragment:Np,alphamap_pars_fragment:Up,alphatest_fragment:kp,alphatest_pars_fragment:zp,aomap_fragment:Bp,aomap_pars_fragment:Op,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Wp,beginnormal_vertex:Gp,bsdfs:Xp,iridescence_fragment:Yp,bumpmap_pars_fragment:$p,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Kp,color_fragment:Qp,color_pars_fragment:Jp,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:of,displacementmap_pars_vertex:af,displacementmap_vertex:rf,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:df,envmap_common_pars_fragment:pf,envmap_pars_fragment:ff,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Tf,envmap_vertex:gf,fog_vertex:vf,fog_pars_vertex:_f,fog_fragment:xf,fog_pars_fragment:Mf,gradientmap_pars_fragment:wf,lightmap_pars_fragment:yf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Sf,lights_pars_begin:Af,lights_toon_fragment:Ef,lights_toon_pars_fragment:Cf,lights_phong_fragment:Pf,lights_phong_pars_fragment:Rf,lights_physical_fragment:Lf,lights_physical_pars_fragment:If,lights_fragment_begin:Df,lights_fragment_maps:Ff,lights_fragment_end:Nf,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Bf,map_fragment:Of,map_pars_fragment:Hf,map_particle_fragment:Vf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:Yf,morphcolor_vertex:$f,morphnormal_vertex:qf,morphtarget_pars_vertex:Zf,morphtarget_vertex:jf,normal_fragment_begin:Kf,normal_fragment_maps:Qf,normal_pars_fragment:Jf,normal_pars_vertex:t0,normal_vertex:e0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:a0,opaque_fragment:r0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:d0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:v0,shadowmask_pars_fragment:_0,skinbase_vertex:x0,skinning_pars_vertex:M0,skinning_vertex:w0,skinnormal_vertex:y0,specularmap_fragment:b0,specularmap_pars_fragment:S0,tonemapping_fragment:A0,tonemapping_pars_fragment:T0,transmission_fragment:E0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:R0,uv_vertex:L0,worldpos_vertex:I0,background_vert:D0,background_frag:F0,backgroundCube_vert:N0,backgroundCube_frag:U0,cube_vert:k0,cube_frag:z0,depth_vert:B0,depth_frag:O0,distanceRGBA_vert:H0,distanceRGBA_frag:V0,equirect_vert:W0,equirect_frag:G0,linedashed_vert:X0,linedashed_frag:Y0,meshbasic_vert:$0,meshbasic_frag:q0,meshlambert_vert:Z0,meshlambert_frag:j0,meshmatcap_vert:K0,meshmatcap_frag:Q0,meshnormal_vert:J0,meshnormal_frag:tm,meshphong_vert:em,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:om,meshtoon_frag:am,points_vert:rm,points_frag:lm,shadow_vert:cm,shadow_frag:hm,sprite_vert:um,sprite_frag:dm},Wt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},ti={basic:{uniforms:mn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:mn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:mn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:mn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:mn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:mn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:mn([Wt.points,Wt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:mn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:mn([Wt.common,Wt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:mn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:mn([Wt.sprite,Wt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:mn([Wt.common,Wt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:mn([Wt.lights,Wt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};ti.physical={uniforms:mn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Ko={r:0,b:0,g:0},qi=new wn,pm=new ce;function fm(i,t,e,n,s,o,a){const r=new Ht(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function v(w){let _=!1;const A=g(w);A===null?p(r,l):A&&A.isColor&&(p(A,1),_=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Ca)?(h===void 0&&(h=new Ne(new yo(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Xs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qi.copy(_.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(qi)),h.material.toneMapped=Pe.getTransfer(A.colorSpace)!==Fe,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ne(new Ys(2,2),new ke({name:"BackgroundMaterial",uniforms:Xs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(A.colorSpace)!==Fe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,_){w.getRGB(Ko,Kh(i)),n.buffers.color.setClear(Ko.r,Ko.g,Ko.b,_,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,_=1){r.set(w),l=_,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(r,l)},render:v,addToRenderList:m,dispose:x}}function mm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,a=!1;function r(M,P,C,R,L){let D=!1;const U=u(R,C,P);o!==U&&(o=U,c(o.object)),D=f(M,R,C,L),D&&g(M,R,C,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,_(M,P,C,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,C){const R=C.wireframe===!0;let L=n[M.id];L===void 0&&(L={},n[M.id]=L);let D=L[P.id];D===void 0&&(D={},L[P.id]=D);let U=D[R];return U===void 0&&(U=d(l()),D[R]=U),U}function d(M){const P=[],C=[],R=[];for(let L=0;L<e;L++)P[L]=0,C[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:R,object:M,attributes:{},index:null}}function f(M,P,C,R){const L=o.attributes,D=P.attributes;let U=0;const z=C.getAttributes();for(const N in z)if(z[N].location>=0){const V=L[N];let $=D[N];if($===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),V===void 0||V.attribute!==$||$&&V.data!==$.data)return!0;U++}return o.attributesNum!==U||o.index!==R}function g(M,P,C,R){const L={},D=P.attributes;let U=0;const z=C.getAttributes();for(const N in z)if(z[N].location>=0){let V=D[N];V===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(V=M.instanceColor));const $={};$.attribute=V,V&&V.data&&($.data=V.data),L[N]=$,U++}o.attributes=L,o.attributesNum=U,o.index=R}function v(){const M=o.newAttributes;for(let P=0,C=M.length;P<C;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const C=o.newAttributes,R=o.enabledAttributes,L=o.attributeDivisors;C[M]=1,R[M]===0&&(i.enableVertexAttribArray(M),R[M]=1),L[M]!==P&&(i.vertexAttribDivisor(M,P),L[M]=P)}function x(){const M=o.newAttributes,P=o.enabledAttributes;for(let C=0,R=P.length;C<R;C++)P[C]!==M[C]&&(i.disableVertexAttribArray(C),P[C]=0)}function w(M,P,C,R,L,D,U){U===!0?i.vertexAttribIPointer(M,P,C,L,D):i.vertexAttribPointer(M,P,C,R,L,D)}function _(M,P,C,R){v();const L=R.attributes,D=C.getAttributes(),U=P.defaultAttributeValues;for(const z in D){const N=D[z];if(N.location>=0){let H=L[z];if(H===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){const V=H.normalized,$=H.itemSize,K=t.get(H);if(K===void 0)continue;const X=K.buffer,G=K.type,O=K.bytesPerElement,J=G===i.INT||G===i.UNSIGNED_INT||H.gpuType===ml;if(H.isInterleavedBufferAttribute){const lt=H.data,j=lt.stride,Q=H.offset;if(lt.isInstancedInterleavedBuffer){for(let W=0;W<N.locationSize;W++)p(N.location+W,lt.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let W=0;W<N.locationSize;W++)m(N.location+W);i.bindBuffer(i.ARRAY_BUFFER,X);for(let W=0;W<N.locationSize;W++)w(N.location+W,$/N.locationSize,G,V,j*O,(Q+$/N.locationSize*W)*O,J)}else{if(H.isInstancedBufferAttribute){for(let lt=0;lt<N.locationSize;lt++)p(N.location+lt,H.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let lt=0;lt<N.locationSize;lt++)m(N.location+lt);i.bindBuffer(i.ARRAY_BUFFER,X);for(let lt=0;lt<N.locationSize;lt++)w(N.location+lt,$/N.locationSize,G,V,$*O,$/N.locationSize*lt*O,J)}}else if(U!==void 0){const V=U[z];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(N.location,V);break;case 3:i.vertexAttrib3fv(N.location,V);break;case 4:i.vertexAttrib4fv(N.location,V);break;default:i.vertexAttrib1fv(N.location,V)}}}}x()}function A(){T();for(const M in n){const P=n[M];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[M]}}function y(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[M.id]}function S(M){for(const P in n){const C=n[P];if(C[M.id]===void 0)continue;const R=C[M.id];for(const L in R)h(R[L].object),delete R[L];delete C[M.id]}}function T(){b(),a=!0,o!==s&&(o=s,c(o.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:T,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function gm(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function vm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==Pn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(S){const T=S===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==_i&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==qn&&!T)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:A,maxSamples:y}}function _m(i){const t=this;let e=null,n=0,s=!1,o=!1;const a=new Pi,r=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const x=o?0:n,w=x*4;let _=p.clippingState||null;l.value=_,_=h(g,d,w,f);for(let A=0;A!==w;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;r.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==v;++w,_+=4)a.copy(u[w]).applyMatrix4(x,r),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function xm(i){let t=new WeakMap;function e(a,r){return r===Dr?a.mapping=Os:r===Fr&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Dr||r===Fr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ip(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const r=a.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Is=4,Pc=[.125,.215,.35,.446,.526,.582],es=20,hr=new Rl,Rc=new Ht;let ur=null,dr=0,pr=0,fr=!1;const Ji=(1+Math.sqrt(5))/2,As=1/Ji,Lc=[new E(-Ji,As,0),new E(Ji,As,0),new E(-As,0,Ji),new E(As,0,Ji),new E(0,Ji,-As),new E(0,Ji,As),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Mm=new E;class cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){const{size:a=256,position:r=Mm}=o;ur=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ur,dr,pr),this._renderer.xr.enabled=fr,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ur=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ni,format:Pn,colorSpace:Gs,depthBuffer:!1},s=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(o)),this._blurMaterial=ym(o,t,e)}return s}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,hr)}_sceneToCubeUV(t,e,n,s,o){const l=new Un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Rc),u.toneMapping=Fi,u.autoClear=!1;const g=new vo({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),v=new Ne(new yo,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(Rc),m=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(l.up.set(0,c[x],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[x],o.y,o.z)):w===1?(l.up.set(0,0,c[x]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[x],o.z)):(l.up.set(0,c[x],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[x]));const _=this._cubeSize;Qo(s,w*_,x>2?_:0,_,_),u.setRenderTarget(s),m&&u.render(v,l),u.render(t,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Os||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;Qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,hr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=Lc[(s-o-1)%Lc.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",o),this._halfBlur(a,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ne(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*es-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):es;m>es&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const p=[];let x=0;for(let S=0;S<es;++S){const T=S/v,b=Math.exp(-T*T/2);p.push(b),S===0?x+=b:S<m&&(x+=2*b)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const _=this._sizeLods[s],A=3*_*(s>w-Is?s-w+Is:0),y=4*(this._cubeSize-_);Qo(e,A,y,3*_,2*_),l.setRenderTarget(e),l.render(u,hr)}}function wm(i){const t=[],e=[],n=[];let s=i;const o=i-Is+1+Pc.length;for(let a=0;a<o;a++){const r=Math.pow(2,s);e.push(r);let l=1/r;a>i-Is?l=Pc[a-i+Is-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),w=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let y=0;y<f;y++){const S=y%3*2/3-1,T=y>2?0:-1,b=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];x.set(b,v*g*y),w.set(d,m*g*y);const M=[y,y,y,y,y,y];_.set(M,p*g*y)}const A=new Zt;A.setAttribute("position",new Z(x,v)),A.setAttribute("uv",new Z(w,m)),A.setAttribute("faceIndex",new Z(_,p)),t.push(A),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ic(i,t,e){const n=new zn(i,t,e);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ym(i,t,e){const n=new Float32Array(es),s=new E(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Dc(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Fc(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function bm(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Dr||l===Fr,h=l===Os||l===Hs;if(c||h){let u=t.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return e===null&&(e=new cl(i)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new cl(i)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function s(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Am(i,t,e,n){const s={},o=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let w=0,_=x.length;w<_;w+=3){const A=x[w+0],y=x[w+1],S=x[w+2];d.push(A,y,y,S,S,A)}}else if(g!==void 0){const x=g.array;v=g.version;for(let w=0,_=x.length/3-1;w<_;w+=3){const A=w+0,y=w+1,S=w+2;d.push(A,y,y,S,S,A)}}else return;const m=new($h(d)?jh:ye)(d,1);m.version=v;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function Tm(i,t,e){let n;function s(d){n=d}let o,a;function r(d){o=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,o,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Em(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=r*(o/3);break;case i.LINES:e.lines+=r*(o/2);break;case i.LINE_STRIP:e.lines+=r*(o-1);break;case i.LINE_LOOP:e.lines+=r*o;break;case i.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,t,e){const n=new WeakMap,s=new ze;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(r);if(d===void 0||d.count!==u){let M=function(){T.dispose(),n.delete(r),r.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],x=r.morphAttributes.normal||[],w=r.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let A=r.attributes.position.count*_,y=1;A>t.maxTextureSize&&(y=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*y*4*u),T=new qh(S,A,y,u);T.type=qn,T.needsUpdate=!0;const b=_*4;for(let P=0;P<u;P++){const C=p[P],R=x[P],L=w[P],D=A*y*4*P;for(let U=0;U<C.count;U++){const z=U*b;g===!0&&(s.fromBufferAttribute(C,U),S[D+z+0]=s.x,S[D+z+1]=s.y,S[D+z+2]=s.z,S[D+z+3]=0),v===!0&&(s.fromBufferAttribute(R,U),S[D+z+4]=s.x,S[D+z+5]=s.y,S[D+z+6]=s.z,S[D+z+7]=0),m===!0&&(s.fromBufferAttribute(L,U),S[D+z+8]=s.x,S[D+z+9]=s.y,S[D+z+10]=s.z,S[D+z+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new $t(A,y)},n.set(r,d),r.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Pm(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}const au=new cn,Nc=new nu(1,1),ru=new qh,lu=new Hd,cu=new Jh,Uc=[],kc=[],zc=new Float32Array(16),Bc=new Float32Array(9),Oc=new Float32Array(4);function Ks(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Uc[s];if(o===void 0&&(o=new Float32Array(s),Uc[s]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,i[a].toArray(o,r)}return o}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ia(i,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function Fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Oc.set(n),i.uniformMatrix2fv(this.addr,!1,Oc),en(e,n)}}function Nm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Bc.set(n),i.uniformMatrix3fv(this.addr,!1,Bc),en(e,n)}}function Um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),en(e,n)}}function km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function Hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Nc.compareFunction=Yh,o=Nc):o=au,e.setTexture2D(t||o,s)}function Ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lu,s)}function $m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cu,s)}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ru,s)}function Zm(i){switch(i){case 5126:return Rm;case 35664:return Lm;case 35665:return Im;case 35666:return Dm;case 35674:return Fm;case 35675:return Nm;case 35676:return Um;case 5124:case 35670:return km;case 35667:case 35671:return zm;case 35668:case 35672:return Bm;case 35669:case 35673:return Om;case 5125:return Hm;case 36294:return Vm;case 36295:return Wm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return qm}}function jm(i,t){i.uniform1fv(this.addr,t)}function Km(i,t){const e=Ks(t,this.size,2);i.uniform2fv(this.addr,e)}function Qm(i,t){const e=Ks(t,this.size,3);i.uniform3fv(this.addr,e)}function Jm(i,t){const e=Ks(t,this.size,4);i.uniform4fv(this.addr,e)}function tg(i,t){const e=Ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function eg(i,t){const e=Ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ng(i,t){const e=Ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ig(i,t){i.uniform1iv(this.addr,t)}function sg(i,t){i.uniform2iv(this.addr,t)}function og(i,t){i.uniform3iv(this.addr,t)}function ag(i,t){i.uniform4iv(this.addr,t)}function rg(i,t){i.uniform1uiv(this.addr,t)}function lg(i,t){i.uniform2uiv(this.addr,t)}function cg(i,t){i.uniform3uiv(this.addr,t)}function hg(i,t){i.uniform4uiv(this.addr,t)}function ug(i,t,e){const n=this.cache,s=t.length,o=Ia(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||au,o[a])}function dg(i,t,e){const n=this.cache,s=t.length,o=Ia(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||lu,o[a])}function pg(i,t,e){const n=this.cache,s=t.length,o=Ia(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||cu,o[a])}function fg(i,t,e){const n=this.cache,s=t.length,o=Ia(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ru,o[a])}function mg(i){switch(i){case 5126:return jm;case 35664:return Km;case 35665:return Qm;case 35666:return Jm;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return rg;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return fg}}class gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zm(e.type)}}class vg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mg(e.type)}}class _g{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(t,e[r.id],n)}}}const mr=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function xg(i,t,e){const n=i.name,s=n.length;for(mr.lastIndex=0;;){const o=mr.exec(n),a=mr.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===s){Hc(e,c===void 0?new gg(r,i,t):new vg(r,i,t));break}else{let u=e.map[r];u===void 0&&(u=new _g(r),Hc(e,u)),e=u}}}class ua{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);xg(o,a,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Vc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Mg=37297;let wg=0;function yg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const Wc=new xe;function bg(i){Pe._getMatrix(Wc,Pe.workingColorSpace,i);const t=`mat3( ${Wc.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(i)){case ma:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+yg(i.getShaderSource(t),a)}else return s}function Sg(i,t){const e=bg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ag(i,t){let e;switch(t){case Ch:e="Linear";break;case Ph:e="Reinhard";break;case Rh:e="Cineon";break;case fl:e="ACESFilmic";break;case Ih:e="AgX";break;case Dh:e="Neutral";break;case Lh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Jo=new E;function Tg(){Pe.getLuminanceCoefficients(Jo);const i=Jo.x.toFixed(4),t=Jo.y.toFixed(4),e=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function Cg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),a=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:r}}return e}function ro(i){return i!==""}function Xc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(Rg,Ig)}const Lg=new Map;function Ig(i,t){let e=we[t];if(e===void 0){const n=Lg.get(t);if(n!==void 0)e=we[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(Dg,Fg)}function Fg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function qc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ng(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function Ug(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case Hs:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function zg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eh:t="ENVMAP_BLENDING_MULTIPLY";break;case ed:t="ENVMAP_BLENDING_MIX";break;case nd:t="ENVMAP_BLENDING_ADD";break}return t}function Bg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Og(i,t,e,n){const s=i.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=Ng(e),c=Ug(e),h=kg(e),u=zg(e),d=Bg(e),f=Eg(e),g=Cg(o),v=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(m=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?we.tonemapping_pars_fragment:"",e.toneMapping!==Fi?Ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,Sg("linearToOutputTexel",e.outputColorSpace),Tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),a=hl(a),a=Xc(a,e),a=Yc(a,e),r=hl(r),r=Xc(r,e),r=Yc(r,e),a=$c(a),r=$c(r),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=x+m+a,_=x+p+r,A=Vc(s,s.VERTEX_SHADER,w),y=Vc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,A),s.attachShader(v,y),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function S(P){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(v).trim(),R=s.getShaderInfoLog(A).trim(),L=s.getShaderInfoLog(y).trim();let D=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,y);else{const z=Gc(s,A,"vertex"),N=Gc(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+z+`
`+N)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||L==="")&&(U=!1);U&&(P.diagnostics={runnable:D,programLog:C,vertexShader:{log:R,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(A),s.deleteShader(y),T=new ua(s,v),b=Pg(s,v)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Mg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=y,this}let Hg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wg(t),e.set(t,n)),n}}class Wg{constructor(t){this.id=Hg++,this.code=t,this.usedTimes=0}}function Gg(i,t,e,n,s,o,a){const r=new bl,l=new Vg,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,C,R){const L=C.fog,D=R.geometry,U=b.isMeshStandardMaterial?C.environment:null,z=(b.isMeshStandardMaterial?e:t).get(b.envMap||U),N=z&&z.mapping===Ca?z.image.height:null,H=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,$=V!==void 0?V.length:0;let K=0;D.morphAttributes.position!==void 0&&(K=1),D.morphAttributes.normal!==void 0&&(K=2),D.morphAttributes.color!==void 0&&(K=3);let X,G,O,J;if(H){const ve=ti[H];X=ve.vertexShader,G=ve.fragmentShader}else X=b.vertexShader,G=b.fragmentShader,l.update(b),O=l.getVertexShaderID(b),J=l.getFragmentShaderID(b);const lt=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),Q=R.isInstancedMesh===!0,W=R.isBatchedMesh===!0,it=!!b.map,St=!!b.matcap,et=!!z,k=!!b.aoMap,wt=!!b.lightMap,at=!!b.bumpMap,yt=!!b.normalMap,dt=!!b.displacementMap,Ut=!!b.emissiveMap,Pt=!!b.metalnessMap,B=!!b.roughnessMap,I=b.anisotropy>0,nt=b.clearcoat>0,mt=b.dispersion>0,xt=b.iridescence>0,_t=b.sheen>0,Ft=b.transmission>0,gt=I&&!!b.anisotropyMap,Rt=nt&&!!b.clearcoatMap,ne=nt&&!!b.clearcoatNormalMap,Et=nt&&!!b.clearcoatRoughnessMap,Dt=xt&&!!b.iridescenceMap,te=xt&&!!b.iridescenceThicknessMap,ie=_t&&!!b.sheenColorMap,Gt=_t&&!!b.sheenRoughnessMap,fe=!!b.specularMap,ae=!!b.specularColorMap,be=!!b.specularIntensityMap,tt=Ft&&!!b.transmissionMap,kt=Ft&&!!b.thicknessMap,ct=!!b.gradientMap,Ct=!!b.alphaMap,Vt=b.alphaTest>0,It=!!b.alphaHash,re=!!b.extensions;let Ce=Fi;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const $e={shaderID:H,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:G,defines:b.defines,customVertexShaderID:O,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:W,batchingColor:W&&R._colorsTexture!==null,instancing:Q,instancingColor:Q&&R.instanceColor!==null,instancingMorph:Q&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Gs,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:St,envMap:et,envMapMode:et&&z.mapping,envMapCubeUVHeight:N,aoMap:k,lightMap:wt,bumpMap:at,normalMap:yt,displacementMap:d&&dt,emissiveMap:Ut,normalMapObjectSpace:yt&&b.normalMapType===ld,normalMapTangentSpace:yt&&b.normalMapType===Xh,metalnessMap:Pt,roughnessMap:B,anisotropy:I,anisotropyMap:gt,clearcoat:nt,clearcoatMap:Rt,clearcoatNormalMap:ne,clearcoatRoughnessMap:Et,dispersion:mt,iridescence:xt,iridescenceMap:Dt,iridescenceThicknessMap:te,sheen:_t,sheenColorMap:ie,sheenRoughnessMap:Gt,specularMap:fe,specularColorMap:ae,specularIntensityMap:be,transmission:Ft,transmissionMap:tt,thicknessMap:kt,gradientMap:ct,opaque:b.transparent===!1&&b.blending===Ns&&b.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Vt,alphaHash:It,combine:b.combine,mapUv:it&&v(b.map.channel),aoMapUv:k&&v(b.aoMap.channel),lightMapUv:wt&&v(b.lightMap.channel),bumpMapUv:at&&v(b.bumpMap.channel),normalMapUv:yt&&v(b.normalMap.channel),displacementMapUv:dt&&v(b.displacementMap.channel),emissiveMapUv:Ut&&v(b.emissiveMap.channel),metalnessMapUv:Pt&&v(b.metalnessMap.channel),roughnessMapUv:B&&v(b.roughnessMap.channel),anisotropyMapUv:gt&&v(b.anisotropyMap.channel),clearcoatMapUv:Rt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&v(b.sheenRoughnessMap.channel),specularMapUv:fe&&v(b.specularMap.channel),specularColorMapUv:ae&&v(b.specularColorMap.channel),specularIntensityMapUv:be&&v(b.specularIntensityMap.channel),transmissionMapUv:tt&&v(b.transmissionMap.channel),thicknessMapUv:kt&&v(b.thicknessMap.channel),alphaMapUv:Ct&&v(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(yt||I),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!D.attributes.uv&&(it||Ct),fog:!!L,useFog:b.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:j,skinning:R.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:K,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&Pe.getTransfer(b.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ut&&b.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(b.emissiveMap.colorSpace)===Fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Je,flipSided:b.side===_n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:re&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&b.extensions.multiDraw===!0||W)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(x(M,b),w(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function w(b,M){r.disableAll(),M.supportsVertexTextures&&r.enable(0),M.instancing&&r.enable(1),M.instancingColor&&r.enable(2),M.instancingMorph&&r.enable(3),M.matcap&&r.enable(4),M.envMap&&r.enable(5),M.normalMapObjectSpace&&r.enable(6),M.normalMapTangentSpace&&r.enable(7),M.clearcoat&&r.enable(8),M.iridescence&&r.enable(9),M.alphaTest&&r.enable(10),M.vertexColors&&r.enable(11),M.vertexAlphas&&r.enable(12),M.vertexUv1s&&r.enable(13),M.vertexUv2s&&r.enable(14),M.vertexUv3s&&r.enable(15),M.vertexTangents&&r.enable(16),M.anisotropy&&r.enable(17),M.alphaHash&&r.enable(18),M.batching&&r.enable(19),M.dispersion&&r.enable(20),M.batchingColor&&r.enable(21),b.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reverseDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),b.push(r.mask)}function _(b){const M=g[b.type];let P;if(M){const C=ti[M];P=_o.clone(C.uniforms)}else P=b.uniforms;return P}function A(b,M){let P;for(let C=0,R=h.length;C<R;C++){const L=h[C];if(L.cacheKey===M){P=L,++P.usedTimes;break}}return P===void 0&&(P=new Og(i,M,b,o),h.push(P)),P}function y(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function S(b){l.remove(b)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:y,releaseShaderCache:S,programs:h,dispose:T}}function Xg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function n(a){i.delete(a)}function s(a,r,l){i.get(a)[r]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Yg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function r(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Yg),n.length>1&&n.sort(d||Zc),s.length>1&&s.sort(d||Zc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:r,unshift:l,finish:h,sort:c}}function $g(){let i=new WeakMap;function t(n,s){const o=i.get(n);let a;return o===void 0?(a=new jc,i.set(n,[a])):s>=o.length?(a=new jc,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function qg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Ht};break;case"SpotLight":e={position:new E,direction:new E,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function Zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let jg=0;function Kg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qg(i){const t=new qg,e=Zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,o=new ce,a=new ce;function r(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,w=0,_=0,A=0,y=0,S=0;c.sort(Kg);for(let b=0,M=c.length;b<M;b++){const P=c[b],C=P.color,R=P.intensity,L=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*R,u+=C.g*R,d+=C.b*R;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],R);S++}else if(P.isDirectionalLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,N=e.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=U,f++}else if(P.isSpotLight){const U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(C).multiplyScalar(R),U.distance=L,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[v]=U;const z=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,z.updateMatrices(P),P.castShadow&&y++),n.spotLightMatrix[v]=z.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=D,_++}v++}else if(P.isRectAreaLight){const U=t.get(P);U.color.copy(C).multiplyScalar(R),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=U,m++}else if(P.isPointLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const z=P.shadow,N=e.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=U,g++}else if(P.isHemisphereLight){const U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(R),U.groundColor.copy(P.groundColor).multiplyScalar(R),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==x||T.numPointShadows!==w||T.numSpotShadows!==_||T.numSpotMaps!==A||T.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=_+A-y,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=S,T.directionalLength=f,T.pointLength=g,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=x,T.numPointShadows=w,T.numSpotShadows=_,T.numSpotMaps=A,T.numLightProbes=S,n.version=jg++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const w=c[p];if(w.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(w.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:n}}function Kc(i){const t=new Qg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function Jg(i){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let r;return a===void 0?(r=new Kc(i),t.set(s,[r])):o>=a.length?(r=new Kc(i),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}const t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
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
}`;function n1(i,t,e){let n=new Tl;const s=new $t,o=new $t,a=new ze,r=new pp({depthPacking:rd}),l=new fp,c={},h=e.maxTextureSize,u={[zi]:_n,[_n]:zi,[Je]:Je},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:t1,fragmentShader:e1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new Z(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let p=this.type;this.render=function(y,S,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(fi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const R=p!==ci&&this.type===ci,L=p===ci&&this.type!==ci;for(let D=0,U=y.length;D<U;D++){const z=y[D],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const H=N.getFrameExtents();if(s.multiply(H),o.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/H.x),s.x=o.x*H.x,N.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/H.y),s.y=o.y*H.y,N.mapSize.y=o.y)),N.map===null||R===!0||L===!0){const $=this.type!==ci?{minFilter:Mn,magFilter:Mn}:{};N.map!==null&&N.map.dispose(),N.map=new zn(s.x,s.y,$),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const V=N.getViewportCount();for(let $=0;$<V;$++){const K=N.getViewport($);a.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),C.viewport(a),N.updateMatrices(z,$),n=N.getFrustum(),_(S,T,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===ci&&x(N,T),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,P)};function x(y,S){const T=t.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(S,null,T,d,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(S,null,T,f,v,null)}function w(y,S,T,b){let M=null;const P=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)M=P;else if(M=T.isPointLight===!0?l:r,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const C=M.uuid,R=S.uuid;let L=c[C];L===void 0&&(L={},c[C]=L);let D=L[R];D===void 0&&(D=M.clone(),L[R]=D,S.addEventListener("dispose",A)),M=D}if(M.visible=S.visible,M.wireframe=S.wireframe,b===ci?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:u[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const C=i.properties.get(M);C.light=T}return M}function _(y,S,T,b,M){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===ci)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const R=t.update(y),L=y.material;if(Array.isArray(L)){const D=R.groups;for(let U=0,z=D.length;U<z;U++){const N=D[U],H=L[N.materialIndex];if(H&&H.visible){const V=w(y,H,b,M);y.onBeforeShadow(i,y,S,T,R,V,N),i.renderBufferDirect(T,null,R,V,y,N),y.onAfterShadow(i,y,S,T,R,V,N)}}}else if(L.visible){const D=w(y,L,b,M);y.onBeforeShadow(i,y,S,T,R,D,null),i.renderBufferDirect(T,null,R,D,y,null),y.onAfterShadow(i,y,S,T,R,D,null)}}const C=y.children;for(let R=0,L=C.length;R<L;R++)_(C[R],S,T,b,M)}function A(y){y.target.removeEventListener("dispose",A);for(const T in c){const b=c[T],M=y.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const i1={[Tr]:Er,[Cr]:Lr,[Pr]:Ir,[mi]:Rr,[Er]:Tr,[Lr]:Cr,[Ir]:Pr,[Rr]:mi};function s1(i,t){function e(){let tt=!1;const kt=new ze;let ct=null;const Ct=new ze(0,0,0,0);return{setMask:function(Vt){ct!==Vt&&!tt&&(i.colorMask(Vt,Vt,Vt,Vt),ct=Vt)},setLocked:function(Vt){tt=Vt},setClear:function(Vt,It,re,Ce,$e){$e===!0&&(Vt*=Ce,It*=Ce,re*=Ce),kt.set(Vt,It,re,Ce),Ct.equals(kt)===!1&&(i.clearColor(Vt,It,re,Ce),Ct.copy(kt))},reset:function(){tt=!1,ct=null,Ct.set(-1,0,0,0)}}}function n(){let tt=!1,kt=!1,ct=null,Ct=null,Vt=null;return{setReversed:function(It){if(kt!==It){const re=t.get("EXT_clip_control");kt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const Ce=Vt;Vt=null,this.setClear(Ce)}kt=It},getReversed:function(){return kt},setTest:function(It){It?lt(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(It){ct!==It&&!tt&&(i.depthMask(It),ct=It)},setFunc:function(It){if(kt&&(It=i1[It]),Ct!==It){switch(It){case Tr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case Cr:i.depthFunc(i.LESS);break;case mi:i.depthFunc(i.LEQUAL);break;case Pr:i.depthFunc(i.EQUAL);break;case Rr:i.depthFunc(i.GEQUAL);break;case Lr:i.depthFunc(i.GREATER);break;case Ir:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=It}},setLocked:function(It){tt=It},setClear:function(It){Vt!==It&&(kt&&(It=1-It),i.clearDepth(It),Vt=It)},reset:function(){tt=!1,ct=null,Ct=null,Vt=null,kt=!1}}}function s(){let tt=!1,kt=null,ct=null,Ct=null,Vt=null,It=null,re=null,Ce=null,$e=null;return{setTest:function(ve){tt||(ve?lt(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ve){kt!==ve&&!tt&&(i.stencilMask(ve),kt=ve)},setFunc:function(ve,We,Xe){(ct!==ve||Ct!==We||Vt!==Xe)&&(i.stencilFunc(ve,We,Xe),ct=ve,Ct=We,Vt=Xe)},setOp:function(ve,We,Xe){(It!==ve||re!==We||Ce!==Xe)&&(i.stencilOp(ve,We,Xe),It=ve,re=We,Ce=Xe)},setLocked:function(ve){tt=ve},setClear:function(ve){$e!==ve&&(i.clearStencil(ve),$e=ve)},reset:function(){tt=!1,kt=null,ct=null,Ct=null,Vt=null,It=null,re=null,Ce=null,$e=null}}}const o=new e,a=new n,r=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,w=null,_=null,A=null,y=null,S=new Ht(0,0,0),T=0,b=!1,M=null,P=null,C=null,R=null,L=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),U=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),U=z>=2);let H=null,V={};const $=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),X=new ze().fromArray($),G=new ze().fromArray(K);function O(tt,kt,ct,Ct){const Vt=new Uint8Array(4),It=i.createTexture();i.bindTexture(tt,It),i.texParameteri(tt,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(tt,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<ct;re++)tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?i.texImage3D(kt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(kt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return It}const J={};J[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),lt(i.DEPTH_TEST),a.setFunc(mi),at(!1),yt(Ol),lt(i.CULL_FACE),k(fi);function lt(tt){h[tt]!==!0&&(i.enable(tt),h[tt]=!0)}function j(tt){h[tt]!==!1&&(i.disable(tt),h[tt]=!1)}function Q(tt,kt){return u[tt]!==kt?(i.bindFramebuffer(tt,kt),u[tt]=kt,tt===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=kt),tt===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=kt),!0):!1}function W(tt,kt){let ct=f,Ct=!1;if(tt){ct=d.get(kt),ct===void 0&&(ct=[],d.set(kt,ct));const Vt=tt.textures;if(ct.length!==Vt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let It=0,re=Vt.length;It<re;It++)ct[It]=i.COLOR_ATTACHMENT0+It;ct.length=Vt.length,Ct=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(ct)}function it(tt){return g!==tt?(i.useProgram(tt),g=tt,!0):!1}const St={[ts]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[Bu]:i.FUNC_REVERSE_SUBTRACT};St[Ou]=i.MIN,St[Hu]=i.MAX;const et={[Vu]:i.ZERO,[Wu]:i.ONE,[Gu]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[ju]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[Xu]:i.ONE_MINUS_SRC_COLOR,[Ar]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[Ju]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function k(tt,kt,ct,Ct,Vt,It,re,Ce,$e,ve){if(tt===fi){v===!0&&(j(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),tt!==ku){if(tt!==m||ve!==b){if((p!==ts||_!==ts)&&(i.blendEquation(i.FUNC_ADD),p=ts,_=ts),ve)switch(tt){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",tt);break}else switch(tt){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",tt);break}x=null,w=null,A=null,y=null,S.set(0,0,0),T=0,m=tt,b=ve}return}Vt=Vt||kt,It=It||ct,re=re||Ct,(kt!==p||Vt!==_)&&(i.blendEquationSeparate(St[kt],St[Vt]),p=kt,_=Vt),(ct!==x||Ct!==w||It!==A||re!==y)&&(i.blendFuncSeparate(et[ct],et[Ct],et[It],et[re]),x=ct,w=Ct,A=It,y=re),(Ce.equals(S)===!1||$e!==T)&&(i.blendColor(Ce.r,Ce.g,Ce.b,$e),S.copy(Ce),T=$e),m=tt,b=!1}function wt(tt,kt){tt.side===Je?j(i.CULL_FACE):lt(i.CULL_FACE);let ct=tt.side===_n;kt&&(ct=!ct),at(ct),tt.blending===Ns&&tt.transparent===!1?k(fi):k(tt.blending,tt.blendEquation,tt.blendSrc,tt.blendDst,tt.blendEquationAlpha,tt.blendSrcAlpha,tt.blendDstAlpha,tt.blendColor,tt.blendAlpha,tt.premultipliedAlpha),a.setFunc(tt.depthFunc),a.setTest(tt.depthTest),a.setMask(tt.depthWrite),o.setMask(tt.colorWrite);const Ct=tt.stencilWrite;r.setTest(Ct),Ct&&(r.setMask(tt.stencilWriteMask),r.setFunc(tt.stencilFunc,tt.stencilRef,tt.stencilFuncMask),r.setOp(tt.stencilFail,tt.stencilZFail,tt.stencilZPass)),Ut(tt.polygonOffset,tt.polygonOffsetFactor,tt.polygonOffsetUnits),tt.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(tt){M!==tt&&(tt?i.frontFace(i.CW):i.frontFace(i.CCW),M=tt)}function yt(tt){tt!==Nu?(lt(i.CULL_FACE),tt!==P&&(tt===Ol?i.cullFace(i.BACK):tt===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),P=tt}function dt(tt){tt!==C&&(U&&i.lineWidth(tt),C=tt)}function Ut(tt,kt,ct){tt?(lt(i.POLYGON_OFFSET_FILL),(R!==kt||L!==ct)&&(i.polygonOffset(kt,ct),R=kt,L=ct)):j(i.POLYGON_OFFSET_FILL)}function Pt(tt){tt?lt(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function B(tt){tt===void 0&&(tt=i.TEXTURE0+D-1),H!==tt&&(i.activeTexture(tt),H=tt)}function I(tt,kt,ct){ct===void 0&&(H===null?ct=i.TEXTURE0+D-1:ct=H);let Ct=V[ct];Ct===void 0&&(Ct={type:void 0,texture:void 0},V[ct]=Ct),(Ct.type!==tt||Ct.texture!==kt)&&(H!==ct&&(i.activeTexture(ct),H=ct),i.bindTexture(tt,kt||J[tt]),Ct.type=tt,Ct.texture=kt)}function nt(){const tt=V[H];tt!==void 0&&tt.type!==void 0&&(i.bindTexture(tt.type,null),tt.type=void 0,tt.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function xt(){try{i.compressedTexImage3D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function _t(){try{i.texSubImage2D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function Ft(){try{i.texSubImage3D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function ne(){try{i.texStorage2D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function Et(){try{i.texStorage3D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function Dt(){try{i.texImage2D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function te(){try{i.texImage3D(...arguments)}catch(tt){console.error("THREE.WebGLState:",tt)}}function ie(tt){X.equals(tt)===!1&&(i.scissor(tt.x,tt.y,tt.z,tt.w),X.copy(tt))}function Gt(tt){G.equals(tt)===!1&&(i.viewport(tt.x,tt.y,tt.z,tt.w),G.copy(tt))}function fe(tt,kt){let ct=c.get(kt);ct===void 0&&(ct=new WeakMap,c.set(kt,ct));let Ct=ct.get(tt);Ct===void 0&&(Ct=i.getUniformBlockIndex(kt,tt.name),ct.set(tt,Ct))}function ae(tt,kt){const Ct=c.get(kt).get(tt);l.get(kt)!==Ct&&(i.uniformBlockBinding(kt,Ct,tt.__bindingPointIndex),l.set(kt,Ct))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,V={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,w=null,_=null,A=null,y=null,S=new Ht(0,0,0),T=0,b=!1,M=null,P=null,C=null,R=null,L=null,X.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:lt,disable:j,bindFramebuffer:Q,drawBuffers:W,useProgram:it,setBlending:k,setMaterial:wt,setFlipSided:at,setCullFace:yt,setLineWidth:dt,setPolygonOffset:Ut,setScissorTest:Pt,activeTexture:B,bindTexture:I,unbindTexture:nt,compressedTexImage2D:mt,compressedTexImage3D:xt,texImage2D:Dt,texImage3D:te,updateUBOMapping:fe,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:Et,texSubImage2D:_t,texSubImage3D:Ft,compressedTexSubImage2D:gt,compressedTexSubImage3D:Rt,scissor:ie,viewport:Gt,reset:be}}function o1(i,t,e,n,s,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(B,I){return f?new OffscreenCanvas(B,I):va("canvas")}function v(B,I,nt){let mt=1;const xt=Pt(B);if((xt.width>nt||xt.height>nt)&&(mt=nt/Math.max(xt.width,xt.height)),mt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const _t=Math.floor(mt*xt.width),Ft=Math.floor(mt*xt.height);u===void 0&&(u=g(_t,Ft));const gt=I?g(_t,Ft):u;return gt.width=_t,gt.height=Ft,gt.getContext("2d").drawImage(B,0,0,_t,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+_t+"x"+Ft+")."),gt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),B;return B}function m(B){return B.generateMipmaps}function p(B){i.generateMipmap(B)}function x(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(B,I,nt,mt,xt=!1){if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let _t=I;if(I===i.RED&&(nt===i.FLOAT&&(_t=i.R32F),nt===i.HALF_FLOAT&&(_t=i.R16F),nt===i.UNSIGNED_BYTE&&(_t=i.R8)),I===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(_t=i.R8UI),nt===i.UNSIGNED_SHORT&&(_t=i.R16UI),nt===i.UNSIGNED_INT&&(_t=i.R32UI),nt===i.BYTE&&(_t=i.R8I),nt===i.SHORT&&(_t=i.R16I),nt===i.INT&&(_t=i.R32I)),I===i.RG&&(nt===i.FLOAT&&(_t=i.RG32F),nt===i.HALF_FLOAT&&(_t=i.RG16F),nt===i.UNSIGNED_BYTE&&(_t=i.RG8)),I===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(_t=i.RG8UI),nt===i.UNSIGNED_SHORT&&(_t=i.RG16UI),nt===i.UNSIGNED_INT&&(_t=i.RG32UI),nt===i.BYTE&&(_t=i.RG8I),nt===i.SHORT&&(_t=i.RG16I),nt===i.INT&&(_t=i.RG32I)),I===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(_t=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(_t=i.RGB16UI),nt===i.UNSIGNED_INT&&(_t=i.RGB32UI),nt===i.BYTE&&(_t=i.RGB8I),nt===i.SHORT&&(_t=i.RGB16I),nt===i.INT&&(_t=i.RGB32I)),I===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(_t=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(_t=i.RGBA16UI),nt===i.UNSIGNED_INT&&(_t=i.RGBA32UI),nt===i.BYTE&&(_t=i.RGBA8I),nt===i.SHORT&&(_t=i.RGBA16I),nt===i.INT&&(_t=i.RGBA32I)),I===i.RGB&&nt===i.UNSIGNED_INT_5_9_9_9_REV&&(_t=i.RGB9_E5),I===i.RGBA){const Ft=xt?ma:Pe.getTransfer(mt);nt===i.FLOAT&&(_t=i.RGBA32F),nt===i.HALF_FLOAT&&(_t=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(_t=Ft===Fe?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT_4_4_4_4&&(_t=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(_t=i.RGB5_A1)}return(_t===i.R16F||_t===i.R32F||_t===i.RG16F||_t===i.RG32F||_t===i.RGBA16F||_t===i.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function _(B,I){let nt;return B?I===null||I===os||I===Vs?nt=i.DEPTH24_STENCIL8:I===qn?nt=i.DEPTH32F_STENCIL8:I===mo&&(nt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===os||I===Vs?nt=i.DEPTH_COMPONENT24:I===qn?nt=i.DEPTH_COMPONENT32F:I===mo&&(nt=i.DEPTH_COMPONENT16),nt}function A(B,I){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==Mn&&B.minFilter!==$n?Math.log2(Math.max(I.width,I.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?I.mipmaps.length:1}function y(B){const I=B.target;I.removeEventListener("dispose",y),T(I),I.isVideoTexture&&h.delete(I)}function S(B){const I=B.target;I.removeEventListener("dispose",S),M(I)}function T(B){const I=n.get(B);if(I.__webglInit===void 0)return;const nt=B.source,mt=d.get(nt);if(mt){const xt=mt[I.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&b(B),Object.keys(mt).length===0&&d.delete(nt)}n.remove(B)}function b(B){const I=n.get(B);i.deleteTexture(I.__webglTexture);const nt=B.source,mt=d.get(nt);delete mt[I.__cacheKey],a.memory.textures--}function M(B){const I=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(I.__webglFramebuffer[mt]))for(let xt=0;xt<I.__webglFramebuffer[mt].length;xt++)i.deleteFramebuffer(I.__webglFramebuffer[mt][xt]);else i.deleteFramebuffer(I.__webglFramebuffer[mt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[mt])}else{if(Array.isArray(I.__webglFramebuffer))for(let mt=0;mt<I.__webglFramebuffer.length;mt++)i.deleteFramebuffer(I.__webglFramebuffer[mt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let mt=0;mt<I.__webglColorRenderbuffer.length;mt++)I.__webglColorRenderbuffer[mt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[mt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const nt=B.textures;for(let mt=0,xt=nt.length;mt<xt;mt++){const _t=n.get(nt[mt]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(nt[mt])}n.remove(B)}let P=0;function C(){P=0}function R(){const B=P;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),P+=1,B}function L(B){const I=[];return I.push(B.wrapS),I.push(B.wrapT),I.push(B.wrapR||0),I.push(B.magFilter),I.push(B.minFilter),I.push(B.anisotropy),I.push(B.internalFormat),I.push(B.format),I.push(B.type),I.push(B.generateMipmaps),I.push(B.premultiplyAlpha),I.push(B.flipY),I.push(B.unpackAlignment),I.push(B.colorSpace),I.join()}function D(B,I){const nt=n.get(B);if(B.isVideoTexture&&dt(B),B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){const mt=B.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(nt,B,I);return}}e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+I)}function U(B,I){const nt=n.get(B);if(B.version>0&&nt.__version!==B.version){G(nt,B,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+I)}function z(B,I){const nt=n.get(B);if(B.version>0&&nt.__version!==B.version){G(nt,B,I);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+I)}function N(B,I){const nt=n.get(B);if(B.version>0&&nt.__version!==B.version){O(nt,B,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+I)}const H={[ii]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},V={[Mn]:i.NEAREST,[Nh]:i.NEAREST_MIPMAP_NEAREST,[ao]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},$={[cd]:i.NEVER,[md]:i.ALWAYS,[hd]:i.LESS,[Yh]:i.LEQUAL,[ud]:i.EQUAL,[fd]:i.GEQUAL,[dd]:i.GREATER,[pd]:i.NOTEQUAL};function K(B,I){if(I.type===qn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===$n||I.magFilter===oa||I.magFilter===ao||I.magFilter===Ii||I.minFilter===$n||I.minFilter===oa||I.minFilter===ao||I.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,H[I.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,H[I.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,H[I.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,V[I.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,V[I.minFilter]),I.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,$[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Mn||I.minFilter!==ao&&I.minFilter!==Ii||I.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function X(B,I){let nt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,I.addEventListener("dispose",y));const mt=I.source;let xt=d.get(mt);xt===void 0&&(xt={},d.set(mt,xt));const _t=L(I);if(_t!==B.__cacheKey){xt[_t]===void 0&&(xt[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,nt=!0),xt[_t].usedTimes++;const Ft=xt[B.__cacheKey];Ft!==void 0&&(xt[B.__cacheKey].usedTimes--,Ft.usedTimes===0&&b(I)),B.__cacheKey=_t,B.__webglTexture=xt[_t].texture}return nt}function G(B,I,nt){let mt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(mt=i.TEXTURE_3D);const xt=X(B,I),_t=I.source;e.bindTexture(mt,B.__webglTexture,i.TEXTURE0+nt);const Ft=n.get(_t);if(_t.version!==Ft.__version||xt===!0){e.activeTexture(i.TEXTURE0+nt);const gt=Pe.getPrimaries(Pe.workingColorSpace),Rt=I.colorSpace===kn?null:Pe.getPrimaries(I.colorSpace),ne=I.colorSpace===kn||gt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Et=v(I.image,!1,s.maxTextureSize);Et=Ut(I,Et);const Dt=o.convert(I.format,I.colorSpace),te=o.convert(I.type);let ie=w(I.internalFormat,Dt,te,I.colorSpace,I.isVideoTexture);K(mt,I);let Gt;const fe=I.mipmaps,ae=I.isVideoTexture!==!0,be=Ft.__version===void 0||xt===!0,tt=_t.dataReady,kt=A(I,Et);if(I.isDepthTexture)ie=_(I.format===Ws,I.type),be&&(ae?e.texStorage2D(i.TEXTURE_2D,1,ie,Et.width,Et.height):e.texImage2D(i.TEXTURE_2D,0,ie,Et.width,Et.height,0,Dt,te,null));else if(I.isDataTexture)if(fe.length>0){ae&&be&&e.texStorage2D(i.TEXTURE_2D,kt,ie,fe[0].width,fe[0].height);for(let ct=0,Ct=fe.length;ct<Ct;ct++)Gt=fe[ct],ae?tt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Gt.width,Gt.height,Dt,te,Gt.data):e.texImage2D(i.TEXTURE_2D,ct,ie,Gt.width,Gt.height,0,Dt,te,Gt.data);I.generateMipmaps=!1}else ae?(be&&e.texStorage2D(i.TEXTURE_2D,kt,ie,Et.width,Et.height),tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et.width,Et.height,Dt,te,Et.data)):e.texImage2D(i.TEXTURE_2D,0,ie,Et.width,Et.height,0,Dt,te,Et.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ae&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,ie,fe[0].width,fe[0].height,Et.depth);for(let ct=0,Ct=fe.length;ct<Ct;ct++)if(Gt=fe[ct],I.format!==Pn)if(Dt!==null)if(ae){if(tt)if(I.layerUpdates.size>0){const Vt=Cc(Gt.width,Gt.height,I.format,I.type);for(const It of I.layerUpdates){const re=Gt.data.subarray(It*Vt/Gt.data.BYTES_PER_ELEMENT,(It+1)*Vt/Gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,It,Gt.width,Gt.height,1,Dt,re)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Gt.width,Gt.height,Et.depth,Dt,Gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,ie,Gt.width,Gt.height,Et.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?tt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Gt.width,Gt.height,Et.depth,Dt,te,Gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,ie,Gt.width,Gt.height,Et.depth,0,Dt,te,Gt.data)}else{ae&&be&&e.texStorage2D(i.TEXTURE_2D,kt,ie,fe[0].width,fe[0].height);for(let ct=0,Ct=fe.length;ct<Ct;ct++)Gt=fe[ct],I.format!==Pn?Dt!==null?ae?tt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Gt.width,Gt.height,Dt,Gt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,ie,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?tt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Gt.width,Gt.height,Dt,te,Gt.data):e.texImage2D(i.TEXTURE_2D,ct,ie,Gt.width,Gt.height,0,Dt,te,Gt.data)}else if(I.isDataArrayTexture)if(ae){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,ie,Et.width,Et.height,Et.depth),tt)if(I.layerUpdates.size>0){const ct=Cc(Et.width,Et.height,I.format,I.type);for(const Ct of I.layerUpdates){const Vt=Et.data.subarray(Ct*ct/Et.data.BYTES_PER_ELEMENT,(Ct+1)*ct/Et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,Et.width,Et.height,1,Dt,te,Vt)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Dt,te,Et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,Et.width,Et.height,Et.depth,0,Dt,te,Et.data);else if(I.isData3DTexture)ae?(be&&e.texStorage3D(i.TEXTURE_3D,kt,ie,Et.width,Et.height,Et.depth),tt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Dt,te,Et.data)):e.texImage3D(i.TEXTURE_3D,0,ie,Et.width,Et.height,Et.depth,0,Dt,te,Et.data);else if(I.isFramebufferTexture){if(be)if(ae)e.texStorage2D(i.TEXTURE_2D,kt,ie,Et.width,Et.height);else{let ct=Et.width,Ct=Et.height;for(let Vt=0;Vt<kt;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,ie,ct,Ct,0,Dt,te,null),ct>>=1,Ct>>=1}}else if(fe.length>0){if(ae&&be){const ct=Pt(fe[0]);e.texStorage2D(i.TEXTURE_2D,kt,ie,ct.width,ct.height)}for(let ct=0,Ct=fe.length;ct<Ct;ct++)Gt=fe[ct],ae?tt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Dt,te,Gt):e.texImage2D(i.TEXTURE_2D,ct,ie,Dt,te,Gt);I.generateMipmaps=!1}else if(ae){if(be){const ct=Pt(Et);e.texStorage2D(i.TEXTURE_2D,kt,ie,ct.width,ct.height)}tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,te,Et)}else e.texImage2D(i.TEXTURE_2D,0,ie,Dt,te,Et);m(I)&&p(mt),Ft.__version=_t.version,I.onUpdate&&I.onUpdate(I)}B.__version=I.version}function O(B,I,nt){if(I.image.length!==6)return;const mt=X(B,I),xt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+nt);const _t=n.get(xt);if(xt.version!==_t.__version||mt===!0){e.activeTexture(i.TEXTURE0+nt);const Ft=Pe.getPrimaries(Pe.workingColorSpace),gt=I.colorSpace===kn?null:Pe.getPrimaries(I.colorSpace),Rt=I.colorSpace===kn||Ft===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ne=I.isCompressedTexture||I.image[0].isCompressedTexture,Et=I.image[0]&&I.image[0].isDataTexture,Dt=[];for(let Ct=0;Ct<6;Ct++)!ne&&!Et?Dt[Ct]=v(I.image[Ct],!0,s.maxCubemapSize):Dt[Ct]=Et?I.image[Ct].image:I.image[Ct],Dt[Ct]=Ut(I,Dt[Ct]);const te=Dt[0],ie=o.convert(I.format,I.colorSpace),Gt=o.convert(I.type),fe=w(I.internalFormat,ie,Gt,I.colorSpace),ae=I.isVideoTexture!==!0,be=_t.__version===void 0||mt===!0,tt=xt.dataReady;let kt=A(I,te);K(i.TEXTURE_CUBE_MAP,I);let ct;if(ne){ae&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,fe,te.width,te.height);for(let Ct=0;Ct<6;Ct++){ct=Dt[Ct].mipmaps;for(let Vt=0;Vt<ct.length;Vt++){const It=ct[Vt];I.format!==Pn?ie!==null?ae?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt,0,0,It.width,It.height,ie,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt,fe,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt,0,0,It.width,It.height,ie,Gt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt,fe,It.width,It.height,0,ie,Gt,It.data)}}}else{if(ct=I.mipmaps,ae&&be){ct.length>0&&kt++;const Ct=Pt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,fe,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(Et){ae?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Dt[Ct].width,Dt[Ct].height,ie,Gt,Dt[Ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,fe,Dt[Ct].width,Dt[Ct].height,0,ie,Gt,Dt[Ct].data);for(let Vt=0;Vt<ct.length;Vt++){const re=ct[Vt].image[Ct].image;ae?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt+1,0,0,re.width,re.height,ie,Gt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt+1,fe,re.width,re.height,0,ie,Gt,re.data)}}else{ae?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,ie,Gt,Dt[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,fe,ie,Gt,Dt[Ct]);for(let Vt=0;Vt<ct.length;Vt++){const It=ct[Vt];ae?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt+1,0,0,ie,Gt,It.image[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt+1,fe,ie,Gt,It.image[Ct])}}}m(I)&&p(i.TEXTURE_CUBE_MAP),_t.__version=xt.version,I.onUpdate&&I.onUpdate(I)}B.__version=I.version}function J(B,I,nt,mt,xt,_t){const Ft=o.convert(nt.format,nt.colorSpace),gt=o.convert(nt.type),Rt=w(nt.internalFormat,Ft,gt,nt.colorSpace),ne=n.get(I),Et=n.get(nt);if(Et.__renderTarget=I,!ne.__hasExternalTextures){const Dt=Math.max(1,I.width>>_t),te=Math.max(1,I.height>>_t);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?e.texImage3D(xt,_t,Rt,Dt,te,I.depth,0,Ft,gt,null):e.texImage2D(xt,_t,Rt,Dt,te,0,Ft,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),yt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,xt,Et.__webglTexture,0,at(I)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,xt,Et.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(B,I,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,B),I.depthBuffer){const mt=I.depthTexture,xt=mt&&mt.isDepthTexture?mt.type:null,_t=_(I.stencilBuffer,xt),Ft=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=at(I);yt(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,_t,I.width,I.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,_t,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,_t,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,B)}else{const mt=I.textures;for(let xt=0;xt<mt.length;xt++){const _t=mt[xt],Ft=o.convert(_t.format,_t.colorSpace),gt=o.convert(_t.type),Rt=w(_t.internalFormat,Ft,gt,_t.colorSpace),ne=at(I);nt&&yt(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Rt,I.width,I.height):yt(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Rt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function j(B,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=n.get(I.depthTexture);mt.__renderTarget=I,(!mt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),D(I.depthTexture,0);const xt=mt.__webglTexture,_t=at(I);if(I.depthTexture.format===Us)yt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xt,0);else if(I.depthTexture.format===Ws)yt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Q(B){const I=n.get(B),nt=B.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==B.depthTexture){const mt=B.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),mt){const xt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,mt.removeEventListener("dispose",xt)};mt.addEventListener("dispose",xt),I.__depthDisposeCallback=xt}I.__boundDepthTexture=mt}if(B.depthTexture&&!I.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");j(I.__webglFramebuffer,B)}else if(nt){I.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[mt]),I.__webglDepthbuffer[mt]===void 0)I.__webglDepthbuffer[mt]=i.createRenderbuffer(),lt(I.__webglDepthbuffer[mt],B,!1);else{const xt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=I.__webglDepthbuffer[mt];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,_t)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),lt(I.__webglDepthbuffer,B,!1);else{const mt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,xt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(B,I,nt){const mt=n.get(B);I!==void 0&&J(mt.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&Q(B)}function it(B){const I=B.texture,nt=n.get(B),mt=n.get(I);B.addEventListener("dispose",S);const xt=B.textures,_t=B.isWebGLCubeRenderTarget===!0,Ft=xt.length>1;if(Ft||(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=I.version,a.memory.textures++),_t){nt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(I.mipmaps&&I.mipmaps.length>0){nt.__webglFramebuffer[gt]=[];for(let Rt=0;Rt<I.mipmaps.length;Rt++)nt.__webglFramebuffer[gt][Rt]=i.createFramebuffer()}else nt.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){nt.__webglFramebuffer=[];for(let gt=0;gt<I.mipmaps.length;gt++)nt.__webglFramebuffer[gt]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let gt=0,Rt=xt.length;gt<Rt;gt++){const ne=n.get(xt[gt]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(B.samples>0&&yt(B)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let gt=0;gt<xt.length;gt++){const Rt=xt[gt];nt.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[gt]);const ne=o.convert(Rt.format,Rt.colorSpace),Et=o.convert(Rt.type),Dt=w(Rt.internalFormat,ne,Et,Rt.colorSpace,B.isXRRenderTarget===!0),te=at(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Dt,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,nt.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(nt.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),K(i.TEXTURE_CUBE_MAP,I);for(let gt=0;gt<6;gt++)if(I.mipmaps&&I.mipmaps.length>0)for(let Rt=0;Rt<I.mipmaps.length;Rt++)J(nt.__webglFramebuffer[gt][Rt],B,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt);else J(nt.__webglFramebuffer[gt],B,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(I)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let gt=0,Rt=xt.length;gt<Rt;gt++){const ne=xt[gt],Et=n.get(ne);e.bindTexture(i.TEXTURE_2D,Et.__webglTexture),K(i.TEXTURE_2D,ne),J(nt.__webglFramebuffer,B,ne,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),m(ne)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(gt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,mt.__webglTexture),K(gt,I),I.mipmaps&&I.mipmaps.length>0)for(let Rt=0;Rt<I.mipmaps.length;Rt++)J(nt.__webglFramebuffer[Rt],B,I,i.COLOR_ATTACHMENT0,gt,Rt);else J(nt.__webglFramebuffer,B,I,i.COLOR_ATTACHMENT0,gt,0);m(I)&&p(gt),e.unbindTexture()}B.depthBuffer&&Q(B)}function St(B){const I=B.textures;for(let nt=0,mt=I.length;nt<mt;nt++){const xt=I[nt];if(m(xt)){const _t=x(B),Ft=n.get(xt).__webglTexture;e.bindTexture(_t,Ft),p(_t),e.unbindTexture()}}}const et=[],k=[];function wt(B){if(B.samples>0){if(yt(B)===!1){const I=B.textures,nt=B.width,mt=B.height;let xt=i.COLOR_BUFFER_BIT;const _t=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(B),gt=I.length>1;if(gt)for(let Rt=0;Rt<I.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Rt=0;Rt<I.length;Rt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Rt]);const ne=n.get(I[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,nt,mt,0,0,nt,mt,xt,i.NEAREST),l===!0&&(et.length=0,k.length=0,et.push(i.COLOR_ATTACHMENT0+Rt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(et.push(_t),k.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Rt=0;Rt<I.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Rt]);const ne=n.get(I[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){const I=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function at(B){return Math.min(s.maxSamples,B.samples)}function yt(B){const I=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function dt(B){const I=a.render.frame;h.get(B)!==I&&(h.set(B,I),B.update())}function Ut(B,I){const nt=B.colorSpace,mt=B.format,xt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||nt!==Gs&&nt!==kn&&(Pe.getTransfer(nt)===Fe?(mt!==Pn||xt!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),I}function Pt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=C,this.setTexture2D=D,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=W,this.setupRenderTarget=it,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=J,this.useMultisampledRTT=yt}function a1(i,t){function e(n,s=kn){let o;const a=Pe.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return i.BYTE;if(n===kh)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===os)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===ni)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===Oh)return i.RGB;if(n===Pn)return i.RGBA;if(n===Hh)return i.LUMINANCE;if(n===Vh)return i.LUMINANCE_ALPHA;if(n===Us)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===_l)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===Wh)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===aa||n===ra||n===la||n===ca)if(a===Fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===aa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===aa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nr||n===Ur||n===kr||n===zr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Nr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ur)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Br||n===Or||n===Hr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Br||n===Or)return a===Fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Hr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vr||n===Wr||n===Gr||n===Xr||n===Yr||n===$r||n===qr||n===Zr||n===jr||n===Kr||n===Qr||n===Jr||n===tl||n===el)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Vr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$r)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jr)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===nl||n===il)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ha)return a===Fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gh||n===sl||n===ol||n===al)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ha)return o.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const r1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`;class c1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new cn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ke({vertexShader:r1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h1 extends as{constructor(t,e){super();const n=this;let s=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new c1,m=e.getContextAttributes();let p=null,x=null;const w=[],_=[],A=new $t;let y=null;const S=new Un;S.viewport=new ze;const T=new Un;T.viewport=new ze;const b=[S,T],M=new xp;let P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let O=w[G];return O===void 0&&(O=new er,w[G]=O),O.getTargetRaySpace()},this.getControllerGrip=function(G){let O=w[G];return O===void 0&&(O=new er,w[G]=O),O.getGripSpace()},this.getHand=function(G){let O=w[G];return O===void 0&&(O=new er,w[G]=O),O.getHandSpace()};function R(G){const O=_.indexOf(G.inputSource);if(O===-1)return;const J=w[O];J!==void 0&&(J.update(G.inputSource,G.frame,c||a),J.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",D);for(let G=0;G<w.length;G++){const O=_[G];O!==null&&(_[G]=null,w[G].disconnect(O))}P=null,C=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,X.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",L),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,lt=null,j=null;m.depth&&(j=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Ws:Us,lt=m.stencil?Vs:os);const Q={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Q),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new zn(d.textureWidth,d.textureHeight,{format:Pn,type:_i,depthTexture:new nu(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new zn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(r),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function D(G){for(let O=0;O<G.removed.length;O++){const J=G.removed[O],lt=_.indexOf(J);lt>=0&&(_[lt]=null,w[lt].disconnect(J))}for(let O=0;O<G.added.length;O++){const J=G.added[O];let lt=_.indexOf(J);if(lt===-1){for(let Q=0;Q<w.length;Q++)if(Q>=_.length){_.push(J),lt=Q;break}else if(_[Q]===null){_[Q]=J,lt=Q;break}if(lt===-1)break}const j=w[lt];j&&j.connect(J)}}const U=new E,z=new E;function N(G,O,J){U.setFromMatrixPosition(O.matrixWorld),z.setFromMatrixPosition(J.matrixWorld);const lt=U.distanceTo(z),j=O.projectionMatrix.elements,Q=J.projectionMatrix.elements,W=j[14]/(j[10]-1),it=j[14]/(j[10]+1),St=(j[9]+1)/j[5],et=(j[9]-1)/j[5],k=(j[8]-1)/j[0],wt=(Q[8]+1)/Q[0],at=W*k,yt=W*wt,dt=lt/(-k+wt),Ut=dt*-k;if(O.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ut),G.translateZ(dt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),j[10]===-1)G.projectionMatrix.copy(O.projectionMatrix),G.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const Pt=W+dt,B=it+dt,I=at-Ut,nt=yt+(lt-Ut),mt=St*it/B*Pt,xt=et*it/B*Pt;G.projectionMatrix.makePerspective(I,nt,mt,xt,Pt,B),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function H(G,O){O===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(O.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let O=G.near,J=G.far;v.texture!==null&&(v.depthNear>0&&(O=v.depthNear),v.depthFar>0&&(J=v.depthFar)),M.near=T.near=S.near=O,M.far=T.far=S.far=J,(P!==M.near||C!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,C=M.far),S.layers.mask=G.layers.mask|2,T.layers.mask=G.layers.mask|4,M.layers.mask=S.layers.mask|T.layers.mask;const lt=G.parent,j=M.cameras;H(M,lt);for(let Q=0;Q<j.length;Q++)H(j[Q],lt);j.length===2?N(M,S,T):M.projectionMatrix.copy(S.projectionMatrix),V(G,M,lt)};function V(G,O,J){J===null?G.matrix.copy(O.matrixWorld):(G.matrix.copy(J.matrixWorld),G.matrix.invert(),G.matrix.multiply(O.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(O.projectionMatrix),G.projectionMatrixInverse.copy(O.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=go*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let $=null;function K(G,O){if(h=O.getViewerPose(c||a),g=O,h!==null){const J=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let lt=!1;J.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let W=0;W<J.length;W++){const it=J[W];let St=null;if(f!==null)St=f.getViewport(it);else{const k=u.getViewSubImage(d,it);St=k.viewport,W===0&&(t.setRenderTargetTextures(x,k.colorTexture,d.ignoreDepthValues?void 0:k.depthStencilTexture),t.setRenderTarget(x))}let et=b[W];et===void 0&&(et=new Un,et.layers.enable(W),et.viewport=new ze,b[W]=et),et.matrix.fromArray(it.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(it.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(St.x,St.y,St.width,St.height),W===0&&(M.matrix.copy(et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(et)}const j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const W=u.getDepthInformation(J[0]);W&&W.isValid&&W.texture&&v.init(t,W,s.renderState)}}for(let J=0;J<w.length;J++){const lt=_[J],j=w[J];lt!==null&&j!==void 0&&j.update(lt,O,c||a)}$&&$(G,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}const X=new ou;X.setAnimationLoop(K),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}}const Zi=new wn,u1=new ce;function d1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,x,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),w=x.envMap,_=x.envMapRotation;w&&(m.envMap.value=w,Zi.copy(_),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Zi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p1(i,t,e,n){let s={},o={},a=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const _=w.program;n.uniformBlockBinding(x,_)}function c(x,w){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const A=w.program;n.updateUBOMapping(x,A);const y=t.render.frame;o[x.id]!==y&&(d(x),o[x.id]=y)}function h(x){const w=u();x.__bindingPointIndex=w;const _=i.createBuffer(),A=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,_),_}function u(){for(let x=0;x<r;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const w=s[x.id],_=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,S=_.length;y<S;y++){const T=Array.isArray(_[y])?_[y]:[_[y]];for(let b=0,M=T.length;b<M;b++){const P=T[b];if(f(P,y,b,A)===!0){const C=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let D=0;D<R.length;D++){const U=R[D],z=v(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,C+L,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,L),L+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,w,_,A){const y=x.value,S=w+"_"+_;if(A[S]===void 0)return typeof y=="number"||typeof y=="boolean"?A[S]=y:A[S]=y.clone(),!0;{const T=A[S];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return A[S]=y,!0}else if(T.equals(y)===!1)return T.copy(y),!0}return!1}function g(x){const w=x.uniforms;let _=0;const A=16;for(let S=0,T=w.length;S<T;S++){const b=Array.isArray(w[S])?w[S]:[w[S]];for(let M=0,P=b.length;M<P;M++){const C=b[M],R=Array.isArray(C.value)?C.value:[C.value];for(let L=0,D=R.length;L<D;L++){const U=R[L],z=v(U),N=_%A,H=N%z.boundary,V=N+H;_+=H,V!==0&&A-V<z.storage&&(_+=A-V),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=z.storage}}}const y=_%A;return y>0&&(_+=A-y),x.__size=_,x.__cache={},this}function v(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),w}function m(x){const w=x.target;w.removeEventListener("dispose",m);const _=a.indexOf(w.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},o={}}return{bind:l,update:c,dispose:p}}class f1{constructor(t={}){const{canvas:e=Id(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=Fi,this.toneMappingExposure=1;const _=this;let A=!1,y=0,S=0,T=null,b=-1,M=null;const P=new ze,C=new ze;let R=null;const L=new Ht(0);let D=0,U=e.width,z=e.height,N=1,H=null,V=null;const $=new ze(0,0,U,z),K=new ze(0,0,U,z);let X=!1;const G=new Tl;let O=!1,J=!1;this.transmissionResolutionScale=1;const lt=new ce,j=new ce,Q=new E,W=new ze,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function et(){return T===null?N:1}let k=n;function wt(F,ot){return e.getContext(F,ot)}try{const F={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ea}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",It,!1),k===null){const ot="webgl2";if(k=wt(ot,F),k===null)throw wt(ot)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let at,yt,dt,Ut,Pt,B,I,nt,mt,xt,_t,Ft,gt,Rt,ne,Et,Dt,te,ie,Gt,fe,ae,be,tt;function kt(){at=new Sm(k),at.init(),ae=new a1(k,at),yt=new vm(k,at,t,ae),dt=new s1(k,at),yt.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Ut=new Em(k),Pt=new Xg,B=new o1(k,at,dt,Pt,yt,ae,Ut),I=new xm(_),nt=new bm(_),mt=new Ip(k),be=new mm(k,mt),xt=new Am(k,mt,Ut,be),_t=new Pm(k,xt,mt,Ut),ie=new Cm(k,yt,B),Et=new _m(Pt),Ft=new Gg(_,I,nt,at,yt,be,Et),gt=new d1(_,Pt),Rt=new $g,ne=new Jg(at),te=new fm(_,I,nt,dt,_t,f,l),Dt=new n1(_,_t,yt),tt=new p1(k,Ut,yt,dt),Gt=new gm(k,at,Ut),fe=new Tm(k,at,Ut),Ut.programs=Ft.programs,_.capabilities=yt,_.extensions=at,_.properties=Pt,_.renderLists=Rt,_.shadowMap=Dt,_.state=dt,_.info=Ut}kt();const ct=new h1(_,k);this.xr=ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const F=at.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=at.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(F){F!==void 0&&(N=F,this.setSize(U,z,!1))},this.getSize=function(F){return F.set(U,z)},this.setSize=function(F,ot,ut=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=F,z=ot,e.width=Math.floor(F*N),e.height=Math.floor(ot*N),ut===!0&&(e.style.width=F+"px",e.style.height=ot+"px"),this.setViewport(0,0,F,ot)},this.getDrawingBufferSize=function(F){return F.set(U*N,z*N).floor()},this.setDrawingBufferSize=function(F,ot,ut){U=F,z=ot,N=ut,e.width=Math.floor(F*ut),e.height=Math.floor(ot*ut),this.setViewport(0,0,F,ot)},this.getCurrentViewport=function(F){return F.copy(P)},this.getViewport=function(F){return F.copy($)},this.setViewport=function(F,ot,ut,pt){F.isVector4?$.set(F.x,F.y,F.z,F.w):$.set(F,ot,ut,pt),dt.viewport(P.copy($).multiplyScalar(N).round())},this.getScissor=function(F){return F.copy(K)},this.setScissor=function(F,ot,ut,pt){F.isVector4?K.set(F.x,F.y,F.z,F.w):K.set(F,ot,ut,pt),dt.scissor(C.copy(K).multiplyScalar(N).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(F){dt.setScissorTest(X=F)},this.setOpaqueSort=function(F){H=F},this.setTransparentSort=function(F){V=F},this.getClearColor=function(F){return F.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(F=!0,ot=!0,ut=!0){let pt=0;if(F){let rt=!1;if(T!==null){const Lt=T.texture.format;rt=Lt===wl||Lt===Ml||Lt===xl}if(rt){const Lt=T.texture.type,Ot=Lt===_i||Lt===os||Lt===mo||Lt===Vs||Lt===gl||Lt===vl,Xt=te.getClearColor(),qt=te.getClearAlpha(),se=Xt.r,le=Xt.g,Jt=Xt.b;Ot?(g[0]=se,g[1]=le,g[2]=Jt,g[3]=qt,k.clearBufferuiv(k.COLOR,0,g)):(v[0]=se,v[1]=le,v[2]=Jt,v[3]=qt,k.clearBufferiv(k.COLOR,0,v))}else pt|=k.COLOR_BUFFER_BIT}ot&&(pt|=k.DEPTH_BUFFER_BIT),ut&&(pt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),te.dispose(),Rt.dispose(),ne.dispose(),Pt.dispose(),I.dispose(),nt.dispose(),_t.dispose(),be.dispose(),tt.dispose(),Ft.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",qe),ct.removeEventListener("sessionend",Ln),nn.stop()};function Ct(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const F=Ut.autoReset,ot=Dt.enabled,ut=Dt.autoUpdate,pt=Dt.needsUpdate,rt=Dt.type;kt(),Ut.autoReset=F,Dt.enabled=ot,Dt.autoUpdate=ut,Dt.needsUpdate=pt,Dt.type=rt}function It(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function re(F){const ot=F.target;ot.removeEventListener("dispose",re),Ce(ot)}function Ce(F){$e(F),Pt.remove(F)}function $e(F){const ot=Pt.get(F).programs;ot!==void 0&&(ot.forEach(function(ut){Ft.releaseProgram(ut)}),F.isShaderMaterial&&Ft.releaseShaderCache(F))}this.renderBufferDirect=function(F,ot,ut,pt,rt,Lt){ot===null&&(ot=it);const Ot=rt.isMesh&&rt.matrixWorld.determinant()<0,Xt=In(F,ot,ut,pt,rt);dt.setMaterial(pt,Ot);let qt=ut.index,se=1;if(pt.wireframe===!0){if(qt=xt.getWireframeAttribute(ut),qt===void 0)return;se=2}const le=ut.drawRange,Jt=ut.attributes.position;let Ae=le.start*se,Se=(le.start+le.count)*se;Lt!==null&&(Ae=Math.max(Ae,Lt.start*se),Se=Math.min(Se,(Lt.start+Lt.count)*se)),qt!==null?(Ae=Math.max(Ae,0),Se=Math.min(Se,qt.count)):Jt!=null&&(Ae=Math.max(Ae,0),Se=Math.min(Se,Jt.count));const Y=Se-Ae;if(Y<0||Y===1/0)return;be.setup(rt,pt,Xt,ut,qt);let ht,bt=Gt;if(qt!==null&&(ht=mt.get(qt),bt=fe,bt.setIndex(ht)),rt.isMesh)pt.wireframe===!0?(dt.setLineWidth(pt.wireframeLinewidth*et()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(rt.isLine){let At=pt.linewidth;At===void 0&&(At=1),dt.setLineWidth(At*et()),rt.isLineSegments?bt.setMode(k.LINES):rt.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else rt.isPoints?bt.setMode(k.POINTS):rt.isSprite&&bt.setMode(k.TRIANGLES);if(rt.isBatchedMesh)if(rt._multiDrawInstances!==null)Qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount,rt._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))bt.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const At=rt._multiDrawStarts,Nt=rt._multiDrawCounts,Mt=rt._multiDrawCount,Bt=qt?mt.get(qt).bytesPerElement:1,Yt=Pt.get(pt).currentProgram.getUniforms();for(let jt=0;jt<Mt;jt++)Yt.setValue(k,"_gl_DrawID",jt),bt.render(At[jt]/Bt,Nt[jt])}else if(rt.isInstancedMesh)bt.renderInstances(Ae,Y,rt.count);else if(ut.isInstancedBufferGeometry){const At=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Nt=Math.min(ut.instanceCount,At);bt.renderInstances(Ae,Y,Nt)}else bt.render(Ae,Y)};function ve(F,ot,ut){F.transparent===!0&&F.side===Je&&F.forceSinglePass===!1?(F.side=_n,F.needsUpdate=!0,yn(F,ot,ut),F.side=zi,F.needsUpdate=!0,yn(F,ot,ut),F.side=Je):yn(F,ot,ut)}this.compile=function(F,ot,ut=null){ut===null&&(ut=F),p=ne.get(ut),p.init(ot),w.push(p),ut.traverseVisible(function(rt){rt.isLight&&rt.layers.test(ot.layers)&&(p.pushLight(rt),rt.castShadow&&p.pushShadow(rt))}),F!==ut&&F.traverseVisible(function(rt){rt.isLight&&rt.layers.test(ot.layers)&&(p.pushLight(rt),rt.castShadow&&p.pushShadow(rt))}),p.setupLights();const pt=new Set;return F.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const Lt=rt.material;if(Lt)if(Array.isArray(Lt))for(let Ot=0;Ot<Lt.length;Ot++){const Xt=Lt[Ot];ve(Xt,ut,rt),pt.add(Xt)}else ve(Lt,ut,rt),pt.add(Lt)}),p=w.pop(),pt},this.compileAsync=function(F,ot,ut=null){const pt=this.compile(F,ot,ut);return new Promise(rt=>{function Lt(){if(pt.forEach(function(Ot){Pt.get(Ot).currentProgram.isReady()&&pt.delete(Ot)}),pt.size===0){rt(F);return}setTimeout(Lt,10)}at.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let We=null;function Xe(F){We&&We(F)}function qe(){nn.stop()}function Ln(){nn.start()}const nn=new ou;nn.setAnimationLoop(Xe),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(F){We=F,ct.setAnimationLoop(F),F===null?nn.stop():nn.start()},ct.addEventListener("sessionstart",qe),ct.addEventListener("sessionend",Ln),this.render=function(F,ot){if(ot!==void 0&&ot.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(ot),ot=ct.getCamera()),F.isScene===!0&&F.onBeforeRender(_,F,ot,T),p=ne.get(F,w.length),p.init(ot),w.push(p),j.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),G.setFromProjectionMatrix(j),J=this.localClippingEnabled,O=Et.init(this.clippingPlanes,J),m=Rt.get(F,x.length),m.init(),x.push(m),ct.enabled===!0&&ct.isPresenting===!0){const Lt=_.xr.getDepthSensingMesh();Lt!==null&&Kn(Lt,ot,-1/0,_.sortObjects)}Kn(F,ot,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(H,V),St=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,St&&te.addToRenderList(m,F),this.info.render.frame++,O===!0&&Et.beginShadows();const ut=p.state.shadowsArray;Dt.render(ut,F,ot),O===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const pt=m.opaque,rt=m.transmissive;if(p.setupLights(),ot.isArrayCamera){const Lt=ot.cameras;if(rt.length>0)for(let Ot=0,Xt=Lt.length;Ot<Xt;Ot++){const qt=Lt[Ot];Qn(pt,rt,F,qt)}St&&te.render(F);for(let Ot=0,Xt=Lt.length;Ot<Xt;Ot++){const qt=Lt[Ot];xi(m,F,qt,qt.viewport)}}else rt.length>0&&Qn(pt,rt,F,ot),St&&te.render(F),xi(m,F,ot);T!==null&&S===0&&(B.updateMultisampleRenderTarget(T),B.updateRenderTargetMipmap(T)),F.isScene===!0&&F.onAfterRender(_,F,ot),be.resetDefaultState(),b=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],O===!0&&Et.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Kn(F,ot,ut,pt){if(F.visible===!1)return;if(F.layers.test(ot.layers)){if(F.isGroup)ut=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ot);else if(F.isLight)p.pushLight(F),F.castShadow&&p.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||G.intersectsSprite(F)){pt&&W.setFromMatrixPosition(F.matrixWorld).applyMatrix4(j);const Ot=_t.update(F),Xt=F.material;Xt.visible&&m.push(F,Ot,Xt,ut,W.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||G.intersectsObject(F))){const Ot=_t.update(F),Xt=F.material;if(pt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),W.copy(F.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),W.copy(Ot.boundingSphere.center)),W.applyMatrix4(F.matrixWorld).applyMatrix4(j)),Array.isArray(Xt)){const qt=Ot.groups;for(let se=0,le=qt.length;se<le;se++){const Jt=qt[se],Ae=Xt[Jt.materialIndex];Ae&&Ae.visible&&m.push(F,Ot,Ae,ut,W.z,Jt)}}else Xt.visible&&m.push(F,Ot,Xt,ut,W.z,null)}}const Lt=F.children;for(let Ot=0,Xt=Lt.length;Ot<Xt;Ot++)Kn(Lt[Ot],ot,ut,pt)}function xi(F,ot,ut,pt){const rt=F.opaque,Lt=F.transmissive,Ot=F.transparent;p.setupLightsView(ut),O===!0&&Et.setGlobalState(_.clippingPlanes,ut),pt&&dt.viewport(P.copy(pt)),rt.length>0&&hn(rt,ot,ut),Lt.length>0&&hn(Lt,ot,ut),Ot.length>0&&hn(Ot,ot,ut),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Qn(F,ot,ut,pt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[pt.id]===void 0&&(p.state.transmissionRenderTarget[pt.id]=new zn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?ni:_i,minFilter:Ii,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));const Lt=p.state.transmissionRenderTarget[pt.id],Ot=pt.viewport||P;Lt.setSize(Ot.z*_.transmissionResolutionScale,Ot.w*_.transmissionResolutionScale);const Xt=_.getRenderTarget();_.setRenderTarget(Lt),_.getClearColor(L),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),St&&te.render(ut);const qt=_.toneMapping;_.toneMapping=Fi;const se=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),p.setupLightsView(pt),O===!0&&Et.setGlobalState(_.clippingPlanes,pt),hn(F,ut,pt),B.updateMultisampleRenderTarget(Lt),B.updateRenderTargetMipmap(Lt),at.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Jt=0,Ae=ot.length;Jt<Ae;Jt++){const Se=ot[Jt],Y=Se.object,ht=Se.geometry,bt=Se.material,At=Se.group;if(bt.side===Je&&Y.layers.test(pt.layers)){const Nt=bt.side;bt.side=_n,bt.needsUpdate=!0,Mi(Y,ut,pt,ht,bt,At),bt.side=Nt,bt.needsUpdate=!0,le=!0}}le===!0&&(B.updateMultisampleRenderTarget(Lt),B.updateRenderTargetMipmap(Lt))}_.setRenderTarget(Xt),_.setClearColor(L,D),se!==void 0&&(pt.viewport=se),_.toneMapping=qt}function hn(F,ot,ut){const pt=ot.isScene===!0?ot.overrideMaterial:null;for(let rt=0,Lt=F.length;rt<Lt;rt++){const Ot=F[rt],Xt=Ot.object,qt=Ot.geometry,se=pt===null?Ot.material:pt,le=Ot.group;Xt.layers.test(ut.layers)&&Mi(Xt,ot,ut,qt,se,le)}}function Mi(F,ot,ut,pt,rt,Lt){F.onBeforeRender(_,ot,ut,pt,rt,Lt),F.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),rt.onBeforeRender(_,ot,ut,pt,F,Lt),rt.transparent===!0&&rt.side===Je&&rt.forceSinglePass===!1?(rt.side=_n,rt.needsUpdate=!0,_.renderBufferDirect(ut,ot,pt,rt,F,Lt),rt.side=zi,rt.needsUpdate=!0,_.renderBufferDirect(ut,ot,pt,rt,F,Lt),rt.side=Je):_.renderBufferDirect(ut,ot,pt,rt,F,Lt),F.onAfterRender(_,ot,ut,pt,rt,Lt)}function yn(F,ot,ut){ot.isScene!==!0&&(ot=it);const pt=Pt.get(F),rt=p.state.lights,Lt=p.state.shadowsArray,Ot=rt.state.version,Xt=Ft.getParameters(F,rt.state,Lt,ot,ut),qt=Ft.getProgramCacheKey(Xt);let se=pt.programs;pt.environment=F.isMeshStandardMaterial?ot.environment:null,pt.fog=ot.fog,pt.envMap=(F.isMeshStandardMaterial?nt:I).get(F.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&F.envMap===null?ot.environmentRotation:F.envMapRotation,se===void 0&&(F.addEventListener("dispose",re),se=new Map,pt.programs=se);let le=se.get(qt);if(le!==void 0){if(pt.currentProgram===le&&pt.lightsStateVersion===Ot)return un(F,Xt),le}else Xt.uniforms=Ft.getUniforms(F),F.onBeforeCompile(Xt,_),le=Ft.acquireProgram(Xt,qt),se.set(qt,le),pt.uniforms=Xt.uniforms;const Jt=pt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Jt.clippingPlanes=Et.uniform),un(F,Xt),pt.needsLights=wi(F),pt.lightsStateVersion=Ot,pt.needsLights&&(Jt.ambientLightColor.value=rt.state.ambient,Jt.lightProbe.value=rt.state.probe,Jt.directionalLights.value=rt.state.directional,Jt.directionalLightShadows.value=rt.state.directionalShadow,Jt.spotLights.value=rt.state.spot,Jt.spotLightShadows.value=rt.state.spotShadow,Jt.rectAreaLights.value=rt.state.rectArea,Jt.ltc_1.value=rt.state.rectAreaLTC1,Jt.ltc_2.value=rt.state.rectAreaLTC2,Jt.pointLights.value=rt.state.point,Jt.pointLightShadows.value=rt.state.pointShadow,Jt.hemisphereLights.value=rt.state.hemi,Jt.directionalShadowMap.value=rt.state.directionalShadowMap,Jt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Jt.spotShadowMap.value=rt.state.spotShadowMap,Jt.spotLightMatrix.value=rt.state.spotLightMatrix,Jt.spotLightMap.value=rt.state.spotLightMap,Jt.pointShadowMap.value=rt.state.pointShadowMap,Jt.pointShadowMatrix.value=rt.state.pointShadowMatrix),pt.currentProgram=le,pt.uniformsList=null,le}function bn(F){if(F.uniformsList===null){const ot=F.currentProgram.getUniforms();F.uniformsList=ua.seqWithValue(ot.seq,F.uniforms)}return F.uniformsList}function un(F,ot){const ut=Pt.get(F);ut.outputColorSpace=ot.outputColorSpace,ut.batching=ot.batching,ut.batchingColor=ot.batchingColor,ut.instancing=ot.instancing,ut.instancingColor=ot.instancingColor,ut.instancingMorph=ot.instancingMorph,ut.skinning=ot.skinning,ut.morphTargets=ot.morphTargets,ut.morphNormals=ot.morphNormals,ut.morphColors=ot.morphColors,ut.morphTargetsCount=ot.morphTargetsCount,ut.numClippingPlanes=ot.numClippingPlanes,ut.numIntersection=ot.numClipIntersection,ut.vertexAlphas=ot.vertexAlphas,ut.vertexTangents=ot.vertexTangents,ut.toneMapping=ot.toneMapping}function In(F,ot,ut,pt,rt){ot.isScene!==!0&&(ot=it),B.resetTextureUnits();const Lt=ot.fog,Ot=pt.isMeshStandardMaterial?ot.environment:null,Xt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gs,qt=(pt.isMeshStandardMaterial?nt:I).get(pt.envMap||Ot),se=pt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,le=!!ut.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),Jt=!!ut.morphAttributes.position,Ae=!!ut.morphAttributes.normal,Se=!!ut.morphAttributes.color;let Y=Fi;pt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Y=_.toneMapping);const ht=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,bt=ht!==void 0?ht.length:0,At=Pt.get(pt),Nt=p.state.lights;if(O===!0&&(J===!0||F!==M)){const vt=F===M&&pt.id===b;Et.setState(pt,F,vt)}let Mt=!1;pt.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Nt.state.version||At.outputColorSpace!==Xt||rt.isBatchedMesh&&At.batching===!1||!rt.isBatchedMesh&&At.batching===!0||rt.isBatchedMesh&&At.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&At.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&At.instancing===!1||!rt.isInstancedMesh&&At.instancing===!0||rt.isSkinnedMesh&&At.skinning===!1||!rt.isSkinnedMesh&&At.skinning===!0||rt.isInstancedMesh&&At.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&At.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&At.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&At.instancingMorph===!1&&rt.morphTexture!==null||At.envMap!==qt||pt.fog===!0&&At.fog!==Lt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Et.numPlanes||At.numIntersection!==Et.numIntersection)||At.vertexAlphas!==se||At.vertexTangents!==le||At.morphTargets!==Jt||At.morphNormals!==Ae||At.morphColors!==Se||At.toneMapping!==Y||At.morphTargetsCount!==bt)&&(Mt=!0):(Mt=!0,At.__version=pt.version);let Bt=At.currentProgram;Mt===!0&&(Bt=yn(pt,ot,rt));let Yt=!1,jt=!1,Ie=!1;const Kt=Bt.getUniforms(),he=At.uniforms;if(dt.useProgram(Bt.program)&&(Yt=!0,jt=!0,Ie=!0),pt.id!==b&&(b=pt.id,jt=!0),Yt||M!==F){dt.buffers.depth.getReversed()?(lt.copy(F.projectionMatrix),Fd(lt),Nd(lt),Kt.setValue(k,"projectionMatrix",lt)):Kt.setValue(k,"projectionMatrix",F.projectionMatrix),Kt.setValue(k,"viewMatrix",F.matrixWorldInverse);const Tt=Kt.map.cameraPosition;Tt!==void 0&&Tt.setValue(k,Q.setFromMatrixPosition(F.matrixWorld)),yt.logarithmicDepthBuffer&&Kt.setValue(k,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&Kt.setValue(k,"isOrthographic",F.isOrthographicCamera===!0),M!==F&&(M=F,jt=!0,Ie=!0)}if(rt.isSkinnedMesh){Kt.setOptional(k,rt,"bindMatrix"),Kt.setOptional(k,rt,"bindMatrixInverse");const vt=rt.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),Kt.setValue(k,"boneTexture",vt.boneTexture,B))}rt.isBatchedMesh&&(Kt.setOptional(k,rt,"batchingTexture"),Kt.setValue(k,"batchingTexture",rt._matricesTexture,B),Kt.setOptional(k,rt,"batchingIdTexture"),Kt.setValue(k,"batchingIdTexture",rt._indirectTexture,B),Kt.setOptional(k,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Kt.setValue(k,"batchingColorTexture",rt._colorsTexture,B));const st=ut.morphAttributes;if((st.position!==void 0||st.normal!==void 0||st.color!==void 0)&&ie.update(rt,ut,Bt),(jt||At.receiveShadow!==rt.receiveShadow)&&(At.receiveShadow=rt.receiveShadow,Kt.setValue(k,"receiveShadow",rt.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(he.envMap.value=qt,he.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&ot.environment!==null&&(he.envMapIntensity.value=ot.environmentIntensity),jt&&(Kt.setValue(k,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&Dn(he,Ie),Lt&&pt.fog===!0&&gt.refreshFogUniforms(he,Lt),gt.refreshMaterialUniforms(he,pt,N,z,p.state.transmissionRenderTarget[F.id]),ua.upload(k,bn(At),he,B)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(ua.upload(k,bn(At),he,B),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&Kt.setValue(k,"center",rt.center),Kt.setValue(k,"modelViewMatrix",rt.modelViewMatrix),Kt.setValue(k,"normalMatrix",rt.normalMatrix),Kt.setValue(k,"modelMatrix",rt.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const vt=pt.uniformsGroups;for(let Tt=0,zt=vt.length;Tt<zt;Tt++){const ee=vt[Tt];tt.update(ee,Bt),tt.bind(ee,Bt)}}return Bt}function Dn(F,ot){F.ambientLightColor.needsUpdate=ot,F.lightProbe.needsUpdate=ot,F.directionalLights.needsUpdate=ot,F.directionalLightShadows.needsUpdate=ot,F.pointLights.needsUpdate=ot,F.pointLightShadows.needsUpdate=ot,F.spotLights.needsUpdate=ot,F.spotLightShadows.needsUpdate=ot,F.rectAreaLights.needsUpdate=ot,F.hemisphereLights.needsUpdate=ot}function wi(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(F,ot,ut){Pt.get(F.texture).__webglTexture=ot,Pt.get(F.depthTexture).__webglTexture=ut;const pt=Pt.get(F);pt.__hasExternalTextures=!0,pt.__autoAllocateDepthBuffer=ut===void 0,pt.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),pt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ot){const ut=Pt.get(F);ut.__webglFramebuffer=ot,ut.__useDefaultFramebuffer=ot===void 0};const ls=k.createFramebuffer();this.setRenderTarget=function(F,ot=0,ut=0){T=F,y=ot,S=ut;let pt=!0,rt=null,Lt=!1,Ot=!1;if(F){const qt=Pt.get(F);if(qt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(k.FRAMEBUFFER,null),pt=!1;else if(qt.__webglFramebuffer===void 0)B.setupRenderTarget(F);else if(qt.__hasExternalTextures)B.rebindTextures(F,Pt.get(F.texture).__webglTexture,Pt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Jt=F.depthTexture;if(qt.__boundDepthTexture!==Jt){if(Jt!==null&&Pt.has(Jt)&&(F.width!==Jt.image.width||F.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(F)}}const se=F.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Ot=!0);const le=Pt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(le[ot])?rt=le[ot][ut]:rt=le[ot],Lt=!0):F.samples>0&&B.useMultisampledRTT(F)===!1?rt=Pt.get(F).__webglMultisampledFramebuffer:Array.isArray(le)?rt=le[ut]:rt=le,P.copy(F.viewport),C.copy(F.scissor),R=F.scissorTest}else P.copy($).multiplyScalar(N).floor(),C.copy(K).multiplyScalar(N).floor(),R=X;if(ut!==0&&(rt=ls),dt.bindFramebuffer(k.FRAMEBUFFER,rt)&&pt&&dt.drawBuffers(F,rt),dt.viewport(P),dt.scissor(C),dt.setScissorTest(R),Lt){const qt=Pt.get(F.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+ot,qt.__webglTexture,ut)}else if(Ot){const qt=Pt.get(F.texture),se=ot;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.__webglTexture,ut,se)}else if(F!==null&&ut!==0){const qt=Pt.get(F.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qt.__webglTexture,ut)}b=-1},this.readRenderTargetPixels=function(F,ot,ut,pt,rt,Lt,Ot){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=Pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ot!==void 0&&(Xt=Xt[Ot]),Xt){dt.bindFramebuffer(k.FRAMEBUFFER,Xt);try{const qt=F.texture,se=qt.format,le=qt.type;if(!yt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=F.width-pt&&ut>=0&&ut<=F.height-rt&&k.readPixels(ot,ut,pt,rt,ae.convert(se),ae.convert(le),Lt)}finally{const qt=T!==null?Pt.get(T).__webglFramebuffer:null;dt.bindFramebuffer(k.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(F,ot,ut,pt,rt,Lt,Ot){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=Pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ot!==void 0&&(Xt=Xt[Ot]),Xt){const qt=F.texture,se=qt.format,le=qt.type;if(!yt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ot>=0&&ot<=F.width-pt&&ut>=0&&ut<=F.height-rt){dt.bindFramebuffer(k.FRAMEBUFFER,Xt);const Jt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Jt),k.bufferData(k.PIXEL_PACK_BUFFER,Lt.byteLength,k.STREAM_READ),k.readPixels(ot,ut,pt,rt,ae.convert(se),ae.convert(le),0);const Ae=T!==null?Pt.get(T).__webglFramebuffer:null;dt.bindFramebuffer(k.FRAMEBUFFER,Ae);const Se=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Dd(k,Se,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Jt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Lt),k.deleteBuffer(Jt),k.deleteSync(Se),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,ot=null,ut=0){F.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ot=arguments[0]||null,F=arguments[1]);const pt=Math.pow(2,-ut),rt=Math.floor(F.image.width*pt),Lt=Math.floor(F.image.height*pt),Ot=ot!==null?ot.x:0,Xt=ot!==null?ot.y:0;B.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,ut,0,0,Ot,Xt,rt,Lt),dt.unbindTexture()};const Vi=k.createFramebuffer(),Jn=k.createFramebuffer();this.copyTextureToTexture=function(F,ot,ut=null,pt=null,rt=0,Lt=null){F.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),pt=arguments[0]||null,F=arguments[1],ot=arguments[2],Lt=arguments[3]||0,ut=null),Lt===null&&(rt!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=rt,rt=0):Lt=0);let Ot,Xt,qt,se,le,Jt,Ae,Se,Y;const ht=F.isCompressedTexture?F.mipmaps[Lt]:F.image;if(ut!==null)Ot=ut.max.x-ut.min.x,Xt=ut.max.y-ut.min.y,qt=ut.isBox3?ut.max.z-ut.min.z:1,se=ut.min.x,le=ut.min.y,Jt=ut.isBox3?ut.min.z:0;else{const st=Math.pow(2,-rt);Ot=Math.floor(ht.width*st),Xt=Math.floor(ht.height*st),F.isDataArrayTexture?qt=ht.depth:F.isData3DTexture?qt=Math.floor(ht.depth*st):qt=1,se=0,le=0,Jt=0}pt!==null?(Ae=pt.x,Se=pt.y,Y=pt.z):(Ae=0,Se=0,Y=0);const bt=ae.convert(ot.format),At=ae.convert(ot.type);let Nt;ot.isData3DTexture?(B.setTexture3D(ot,0),Nt=k.TEXTURE_3D):ot.isDataArrayTexture||ot.isCompressedArrayTexture?(B.setTexture2DArray(ot,0),Nt=k.TEXTURE_2D_ARRAY):(B.setTexture2D(ot,0),Nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,ot.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,ot.unpackAlignment);const Mt=k.getParameter(k.UNPACK_ROW_LENGTH),Bt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Yt=k.getParameter(k.UNPACK_SKIP_PIXELS),jt=k.getParameter(k.UNPACK_SKIP_ROWS),Ie=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,se),k.pixelStorei(k.UNPACK_SKIP_ROWS,le),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Jt);const Kt=F.isDataArrayTexture||F.isData3DTexture,he=ot.isDataArrayTexture||ot.isData3DTexture;if(F.isDepthTexture){const st=Pt.get(F),vt=Pt.get(ot),Tt=Pt.get(st.__renderTarget),zt=Pt.get(vt.__renderTarget);dt.bindFramebuffer(k.READ_FRAMEBUFFER,Tt.__webglFramebuffer),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let ee=0;ee<qt;ee++)Kt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.get(F).__webglTexture,rt,Jt+ee),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.get(ot).__webglTexture,Lt,Y+ee)),k.blitFramebuffer(se,le,Ot,Xt,Ae,Se,Ot,Xt,k.DEPTH_BUFFER_BIT,k.NEAREST);dt.bindFramebuffer(k.READ_FRAMEBUFFER,null),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(rt!==0||F.isRenderTargetTexture||Pt.has(F)){const st=Pt.get(F),vt=Pt.get(ot);dt.bindFramebuffer(k.READ_FRAMEBUFFER,Vi),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Jn);for(let Tt=0;Tt<qt;Tt++)Kt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,st.__webglTexture,rt,Jt+Tt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,st.__webglTexture,rt),he?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,vt.__webglTexture,Lt,Y+Tt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vt.__webglTexture,Lt),rt!==0?k.blitFramebuffer(se,le,Ot,Xt,Ae,Se,Ot,Xt,k.COLOR_BUFFER_BIT,k.NEAREST):he?k.copyTexSubImage3D(Nt,Lt,Ae,Se,Y+Tt,se,le,Ot,Xt):k.copyTexSubImage2D(Nt,Lt,Ae,Se,se,le,Ot,Xt);dt.bindFramebuffer(k.READ_FRAMEBUFFER,null),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else he?F.isDataTexture||F.isData3DTexture?k.texSubImage3D(Nt,Lt,Ae,Se,Y,Ot,Xt,qt,bt,At,ht.data):ot.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,Lt,Ae,Se,Y,Ot,Xt,qt,bt,ht.data):k.texSubImage3D(Nt,Lt,Ae,Se,Y,Ot,Xt,qt,bt,At,ht):F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Lt,Ae,Se,Ot,Xt,bt,At,ht.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Lt,Ae,Se,ht.width,ht.height,bt,ht.data):k.texSubImage2D(k.TEXTURE_2D,Lt,Ae,Se,Ot,Xt,bt,At,ht);k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Bt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Yt),k.pixelStorei(k.UNPACK_SKIP_ROWS,jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ie),Lt===0&&ot.generateMipmaps&&k.generateMipmap(Nt),dt.unbindTexture()},this.copyTextureToTexture3D=function(F,ot,ut=null,pt=null,rt=0){return F.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ut=arguments[0]||null,pt=arguments[1]||null,F=arguments[2],ot=arguments[3],rt=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ot,ut,pt,rt)},this.initRenderTarget=function(F){Pt.get(F).__webglFramebuffer===void 0&&B.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?B.setTextureCube(F,0):F.isData3DTexture?B.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?B.setTexture2DArray(F,0):B.setTexture2D(F,0),dt.unbindTexture()},this.resetState=function(){y=0,S=0,T=null,dt.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}}const Qc={type:"change"},Fl={type:"start"},hu={type:"end"},ta=new wo,Jc=new Pi,m1=Math.cos(70*q.DEG2RAD),Ke=new E,xn=2*Math.PI,Ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gr=1e-6;class g1 extends Rp{constructor(t,e=null){super(t,e),this.state=Ue.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fs.ROTATE,MIDDLE:Fs.DOLLY,RIGHT:Fs.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new Ye,this._lastTargetPosition=new E,this._quat=new Ye().setFromUnitVectors(t.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ec,this._sphericalDelta=new Ec,this._scale=1,this._panOffset=new E,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new E,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_1.bind(this),this._onPointerDown=v1.bind(this),this._onPointerUp=x1.bind(this),this._onContextMenu=T1.bind(this),this._onMouseWheel=y1.bind(this),this._onKeyDown=b1.bind(this),this._onTouchStart=S1.bind(this),this._onTouchMove=A1.bind(this),this._onMouseDown=M1.bind(this),this._onMouseMove=w1.bind(this),this._interceptControlDown=E1.bind(this),this._interceptControlUp=C1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qc),this.update(),this.state=Ue.NONE}update(t=null){const e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===Ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=Ke.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new E(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ta.origin.copy(this.object.position),ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ta.direction))<m1?this.object.lookAt(this.target):(Jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ta.intersectPlane(Jc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>gr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gr||this._lastTargetPosition.distanceToSquared(this.target)>gr?(this.dispatchEvent(Qc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ke.copy(s).sub(this.target);let o=Ke.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,a=n.width,r=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function v1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function _1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function x1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hu),this.state=Ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function M1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ue.DOLLY;break;case Fs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}break;case Fs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Fl)}function w1(i){switch(this.state){case Ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function y1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ue.NONE||(i.preventDefault(),this.dispatchEvent(Fl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hu))}function b1(i){this.enabled!==!1&&this._handleKeyDown(i)}function S1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ue.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ue.TOUCH_PAN;break;default:this.state=Ue.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ue.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ue.TOUCH_DOLLY_ROTATE;break;default:this.state=Ue.NONE}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Fl)}function A1(i){switch(this._trackPointer(i),this.state){case Ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ue.NONE}}function T1(i){this.enabled!==!1&&i.preventDefault()}function E1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const uu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const P1=new Rl(-1,1,1,-1,0,1);class R1 extends Zt{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const L1=new R1;class Nl{constructor(t){this._mesh=new Ne(L1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,P1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class I1 extends Qs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_o.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Nl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class th extends Qs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class D1 extends Qs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class F1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new $t);this._width=n.width,this._height=n.height,e=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new I1(uu),this.copyPass.material.blending=fi,this.clock=new su}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}th!==void 0&&(a instanceof th?n=!0:a instanceof D1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new $t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class N1 extends Qs{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const U1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class $s extends Qs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new $t(t.x,t.y):new $t(256,256),this.clearColor=new Ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new zn(o,a,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new zn(o,a,{type:ni});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new zn(o,a,{type:ni});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),a=Math.round(a/2)}const r=U1;this.highPassUniforms=_o.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $t(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=uu;this.copyUniforms=_o.clone(h.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:pa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ht,this.oldClearAlpha=1,this.basic=new vo,this.fsQuad=new Nl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new $t(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=$s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=$s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $t(.5,.5)},direction:{value:new $t(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}$s.BlurDirectionX=new $t(1,0);$s.BlurDirectionY=new $t(0,1);const k1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class z1 extends Qs{constructor(){super();const t=k1;this.uniforms=_o.clone(t.uniforms),this.material=new dp({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Nl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Pe.getTransfer(this._outputColorSpace)===Fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ch?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ih?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function du(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function eh(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function qs(i){const t=Math.max(0,Math.min(1,(i-1.54)/.6949999999999998)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.8)/.2),2))),n=.056*eh(t,.38,.24),s=-.042*du(.54,.88,t),o=.016*eh(t,.78,.13);return(.228+n+s+o)*e}function Ui(i){const t=Math.max(0,Math.min(1,(i-1.66)/.575)),e=.02*Math.pow(1-du(0,.42,t),1.6),n=-.01*Math.sin(t*Math.PI);return 1.578+e+n}const is=[{rootX:.024,rootY:.126,rootZ:-3.6,tipX:.34,tipY:.142,tipZ:-3.72},{rootX:.024,rootY:.126,rootZ:-3.78,tipX:.49,tipY:.148,tipZ:-3.96},{rootX:.024,rootY:.126,rootZ:-3.96,tipX:.55,tipY:.152,tipZ:-4.22},{rootX:.024,rootY:.126,rootZ:-4.14,tipX:.46,tipY:.146,tipZ:-4.45},{rootX:.024,rootY:.126,rootZ:-4.3,tipX:.27,tipY:.138,tipZ:-4.58}],ya=[{parentBone:"tail_1",rootX:.18,rootY:.75,rootZ:-.84,tipX:.44,tipY:.72,tipZ:-.98},{parentBone:"tail_2",rootX:.15,rootY:.67,rootZ:-1.1,tipX:.5,tipY:.63,tipZ:-1.27},{parentBone:"tail_2",rootX:.12,rootY:.59,rootZ:-1.34,tipX:.37,tipY:.56,tipZ:-1.52}],bo=new E(.435,.03,.8999).normalize(),So=new E(-.435,.03,.8999).normalize(),ba=.082;function pu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.342:.318),o=t?1.005:-.555,a=.04,r=t?.088:.082,l=[],c=[-.88,-.29,.29,.88];for(let h=0;h<4;h++){const u=c[h]+e*.055,d=h===1||h===2,f=(t?.126:.118)*(d?1:.86),g=(t?.066:.062)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.036,dirX:Math.sin(u)*.92,dirZ:Math.cos(u),toeLength:f,baseRadius:d?.044:.039,tipRadius:d?.029:.0255,clawLength:g})}return l}function B1(){const i=[{name:"root",parent:null,worldPos:[0,.86,.12]},{name:"pelvis",parent:"root",worldPos:[0,.83,-.54]},{name:"spine_1",parent:"root",worldPos:[0,.85,.14]},{name:"spine_2",parent:"spine_1",worldPos:[0,.91,.5]},{name:"chest",parent:"spine_2",worldPos:[0,.98,.86]},{name:"neck_1",parent:"chest",worldPos:[0,1.11,1.08]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.27,1.24]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.44,1.39]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.56,1.51]},{name:"head",parent:"neck_4",worldPos:[0,1.63,1.62]},{name:"eye_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eye_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidUpper_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidLower_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidLower_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"teethUpper",parent:"head",worldPos:[0,1.592,1.95]},{name:"jaw",parent:"head",worldPos:[0,1.588,1.66]},{name:"teethLower",parent:"jaw",worldPos:[0,1.568,1.95]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.568,1.74]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.568,1.85]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.568,1.96]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.566,2.07]},{name:"ear_L_1",parent:"head",worldPos:[.158,1.772,1.57]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.208,1.895,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.246,2.005,1.19]},{name:"ear_R_1",parent:"head",worldPos:[-.158,1.772,1.57]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.208,1.895,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.246,2.005,1.19]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.268,1.648,1.58]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.348,1.68,1.43]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.268,1.648,1.58]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.348,1.68,1.43]},{name:"cheekLower_L_1",parent:"head",worldPos:[.252,1.552,1.61]},{name:"cheekLower_L_2",parent:"cheekLower_L_1",worldPos:[.312,1.562,1.48]},{name:"cheekLower_R_1",parent:"head",worldPos:[-.252,1.552,1.61]},{name:"cheekLower_R_2",parent:"cheekLower_R_1",worldPos:[-.312,1.562,1.48]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.235,.94,.88]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.272,.8,.9]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.325,.47,.8]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.338,.155,.94]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.342,.044,1.045]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.222,.77,-.55]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.295,.46,-.34]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.312,.23,-.66]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.318,.044,-.515]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.23,1.11,.78]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.38,1.15,.76]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.96,1.18,.5]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.72,1.24,.96]}),[{mid:[n*1.62,1.16,.18],tip:[n*1.54,1.06,-.66]},{mid:[n*2.02,1.17,.24],tip:[n*2.24,1.07,-.62]},{mid:[n*2.38,1.19,.36],tip:[n*2.88,1.09,-.44]},{mid:[n*2.72,1.21,.52],tip:[n*3.44,1.12,-.16]},{mid:[n*3.04,1.23,.74],tip:[n*3.88,1.16,.24]},{mid:[n*3.22,1.25,.94],tip:[n*4.28,1.2,.76]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.78,-.82],[0,.68,-1.16],[0,.54,-1.54],[0,.39,-1.94],[0,.26,-2.35],[0,.17,-2.76],[0,.13,-3.18],[0,.126,-3.58],[0,.126,-3.98],[0,.126,-4.42]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;ya.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.024,.126,-3.96]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.024,.126,-3.96]}),is.forEach((e,n)=>{i.push({name:`tailFin_R_${n+1}`,parent:"tailFinHinge_R",worldPos:[-e.rootX,e.rootY,e.rootZ]})}),i.push({name:"prostheticCollar",parent:"tail_8",worldPos:[.024,.128,-3.54]},{name:"prostheticRod",parent:"tail_9",worldPos:[.036,.138,-3.96]}),is.forEach((e,n)=>{i.push({name:`tailFin_L_${n+1}`,parent:"tailFinHinge_L",worldPos:[e.rootX,e.rootY,e.rootZ]})}),i}function O1(){const i=B1(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new Al;c.name=l.name;const h=new E(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);if(!u||!d)throw new Error(`Missing parent bone ${l.parent} for ${l.name}`);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new Ra(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}function H1(i,t,e){let n=i*374761393+t*668265263+e*1442695041|0;n=(n^n>>>13)*1274126177;const s=((n^n>>>16)>>>0)/4294967296;let o=i*1103515245+t*12345+(e+7919)*2654435761|0;o=(o^o>>>15)*2246822519;const a=((o^o>>>13)>>>0)/4294967296;let r=i*73856093+t*19349663+(e+31337)*83492791|0;r=(r^r>>>14)*1597334677;const l=((r^r>>>15)>>>0)/4294967296;return[s,a,l]}function ea(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function vr(i,t,e,n,s,o=1){const a=i*e,r=t*n,l=Math.floor(a),c=Math.floor(r);let h=1e9,u=1e9,d=.5,f=0,g=0,v=0;for(let x=-1;x<=1;x++)for(let w=-1;w<=1;w++){const _=l+w,A=c+x,y=(_%e+e)%e,S=(A%n+n)%n,[T,b,M]=H1(y,S,s),P=_+.14+T*.72,C=A+.14+b*.72,R=(P-a)*o,L=C-r,D=Math.sqrt(R*R+L*L);D<h?(u=h,h=D,d=M,f=(T-.5)*Math.PI,g=R,v=L):D<u&&(u=D)}const m=Math.max(0,(u-h)*.5),p=g*Math.cos(f)+v*Math.sin(f);return{edgeDist:m,centerDist:h,cellTone:d,cellAngle:p}}let na=null;function V1(i=1024){if(na)return na;const t=i,e=new Float32Array(t*t),n=new Float32Array(t*t),s=new Float32Array(t*t),o=new Float32Array(t*t),a=new Float32Array(t*t),r=28,l=76;for(let N=0;N<t;N++){const H=N/t;for(let V=0;V<t;V++){const $=V/t,K=N*t+V,X=vr($,H,r,r,101,1.08),G=vr($,H,l,l,409,1),O=ea(.015,.24,X.edgeDist),J=ea(.02,.28,G.edgeDist),lt=Math.sin(($*135+H*47+X.cellTone*6.28)*Math.PI*2)*Math.sin(($*29-H*113+X.cellTone*3.14)*Math.PI*2),j=lt>.86?-.055*(lt-.86)*7:0,Q=Math.max(-.08,Math.min(.08,X.cellAngle*.11))*O,W=O*(.76+.14*X.cellTone)+J*.22*(1-O*.55)+Q+j*O;e[K]=Math.max(0,Math.min(1,W));const it=1-O,St=.3+.09*(1-X.cellTone)+it*.52+(1-J)*.08-j*.4;n[K]=Math.max(.18,Math.min(.95,St));const et=.24+.76*ea(0,.16,X.edgeDist)*(.85+.15*J);s[K]=Math.max(.15,Math.min(1,et)),o[K]=X.cellTone*.7+G.cellTone*.3,a[K]=Math.max(0,Math.min(1,.32+.58*X.cellTone*O+.1*J))}}const c=document.createElement("canvas"),h=document.createElement("canvas"),u=document.createElement("canvas"),d=document.createElement("canvas"),f=document.createElement("canvas");for(const N of[c,h,u,d,f])N.width=t,N.height=t;const g=c.getContext("2d"),v=h.getContext("2d"),m=u.getContext("2d"),p=d.getContext("2d"),x=f.getContext("2d"),w=g.createImageData(t,t),_=v.createImageData(t,t),A=m.createImageData(t,t),y=p.createImageData(t,t),S=x.createImageData(t,t),T=3.6;for(let N=0;N<t;N++){const H=(N-1+t)%t,V=(N+1)%t;for(let $=0;$<t;$++){const K=($-1+t)%t,X=($+1)%t,G=N*t+$,O=G*4,J=e[H*t+K],lt=e[H*t+$],j=e[H*t+X],Q=e[N*t+K],W=e[N*t+X],it=e[V*t+K],St=e[V*t+$],et=e[V*t+X],k=(j+3*W+et-(J+3*Q+it))*T,wt=(it+3*St+et-(J+3*lt+j))*T;let at=-k,yt=-wt,dt=1;const Ut=1/Math.sqrt(at*at+yt*yt+dt*dt);at*=Ut,yt*=Ut,dt*=Ut,_.data[O]=Math.round((at*.5+.5)*255),_.data[O+1]=Math.round((yt*.5+.5)*255),_.data[O+2]=Math.round((dt*.5+.5)*255),_.data[O+3]=255;const Pt=e[G],B=o[G],I=12+Pt*15+B*8;w.data[O]=Math.round(I*.86),w.data[O+1]=Math.round(I*.96),w.data[O+2]=Math.round(I*1.14),w.data[O+3]=255;const nt=Math.round(n[G]*255);A.data[O]=nt,A.data[O+1]=nt,A.data[O+2]=nt,A.data[O+3]=255;const mt=Math.round(s[G]*255);y.data[O]=mt,y.data[O+1]=mt,y.data[O+2]=mt,y.data[O+3]=255;const xt=Math.round(a[G]*255);S.data[O]=xt,S.data[O+1]=xt,S.data[O+2]=xt,S.data[O+3]=255}}g.putImageData(w,0,0),v.putImageData(_,0,0),m.putImageData(A,0,0),p.putImageData(y,0,0),x.putImageData(S,0,0);const b=(N,H=!1,V=7)=>(N.wrapS=ii,N.wrapT=ii,N.repeat.set(V,V),N.anisotropy=8,N.colorSpace=H?an:kn,N.needsUpdate=!0,N),M=512,P=document.createElement("canvas"),C=document.createElement("canvas");P.width=M,P.height=M,C.width=M,C.height=M;const R=P.getContext("2d"),L=C.getContext("2d"),D=R.createImageData(M,M),U=L.createImageData(M,M),z=new Float32Array(M*M);for(let N=0;N<M;N++){const H=N/M;for(let V=0;V<M;V++){const $=V/M,K=N*M+V,X=Math.sin(H*92*Math.PI*2+Math.sin($*9*Math.PI*2)*1.4)*.25+Math.sin(H*210*Math.PI*2+$*18)*.12,G=vr($,H,44,44,887,1),O=ea(.08,.22,G.edgeDist)*(G.cellTone>.45?.55:.15);z[K]=.5+X*.35+O*.4}}for(let N=0;N<M;N++){const H=(N-1+M)%M,V=(N+1)%M;for(let $=0;$<M;$++){const K=($-1+M)%M,X=($+1)%M,G=N*M+$,O=G*4,J=(z[N*M+X]-z[N*M+K])*2.4,lt=(z[V*M+$]-z[H*M+$])*2.4,j=1/Math.sqrt(J*J+lt*lt+1);D.data[O]=Math.round((-J*j*.5+.5)*255),D.data[O+1]=Math.round((-lt*j*.5+.5)*255),D.data[O+2]=Math.round((j*.5+.5)*255),D.data[O+3]=255;const Q=Math.round((.36+(1-z[G])*.28)*255);U.data[O]=Q,U.data[O+1]=Q,U.data[O+2]=Q,U.data[O+3]=255}}return R.putImageData(D,0,0),L.putImageData(U,0,0),na={albedoMap:b(new gn(c),!0,7),normalMap:b(new gn(h),!1,7),roughnessMap:b(new gn(u),!1,7),aoMap:b(new gn(d),!1,7),iridescenceThicknessMap:b(new gn(f),!1,7),prostheticPasteNormalMap:b(new gn(P),!1,3),prostheticPasteRoughnessMap:b(new gn(C),!1,3)},na}let ji=null;function W1(i=1024){if(ji)return ji;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=8,n.data[u+1]=12,n.data[u+2]=11,n.data[u+3]=255;continue}const d=Math.sin(h*68+Math.sin(c*11)*.65),f=Math.sin(h*142-Math.cos(c*19)*.85),g=Math.sin(h*260+c*24),v=Math.sin(h*23+1.4)*Math.cos(c*15-h*5),m=d*.42+f*.33+g*.15+v*.25,p=Math.sin(c*42+d*.6)*.08,x=Math.exp(-Math.pow((c-.38)/.13,2)),w=Math.max(0,Math.min(1,(.94-c)/.16)),_=Math.max(0,Math.min(1,1-c*1.08)),A=.84+.3*m+p;let y=(38+166*_+66*x)*A*w,S=(146+106*_+34*x)*A*w,T=(64-24*_+22*(1-_))*A*w;if(v<-.58&&c>.25&&c<.78){const b=Math.min(1,(-v-.58)*2.2);y*=1-.42*b,S*=1-.34*b,T*=1-.28*b}n.data[u]=Math.max(0,Math.min(255,Math.round(y))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(S))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(T))),n.data[u+3]=255}}return e.putImageData(n,0,0),ji=new gn(t),ji.colorSpace=an,ji.anisotropy=8,ji.needsUpdate=!0,ji}function G1(){const i=W1(1024),t={uPupilDilation:{value:.76},uLightDir:{value:new E(.45,.65,.6).normalize()},uAlphaGlow:{value:0}},e=new Ni({name:"Toothless_Iris_PBR",map:i,roughness:.55,metalness:0,envMapIntensity:.65});e.onBeforeCompile=s=>{s.uniforms.uPupilDilation=t.uPupilDilation,s.uniforms.uLightDir=t.uLightDir,s.uniforms.uAlphaGlow=t.uAlphaGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.34 + uAlphaGlow * 0.92) * eRadial;`)};const n=new vn({name:"Toothless_Cornea_WetCoat",color:new Ht(16777215),transparent:!0,opacity:.14,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function _r(i,t,e){i.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uAlphaGlow=t.uAlphaGlow,n.uniforms.uBiolumGlow=t.uBiolumGlow,n.uniforms.uLightningCloak=t.uLightningCloak,n.uniforms.uSunDir=t.uSunDir,n.uniforms.uSunColor=t.uSunColor,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function X1(){const i=V1(1024),t=G1(),e={uTime:{value:0},uAlphaGlow:{value:.08},uBiolumGlow:{value:0},uLightningCloak:{value:0},uSunDir:{value:new E(-.55,.38,-.74).normalize()},uSunColor:{value:new Ht(16765601)}},n=new vn({name:"Toothless_ObsidianScales_PBR",color:new Ht(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new $t(1.28,1.28),roughnessMap:i.roughnessMap,roughness:.88,aoMap:i.aoMap,aoMapIntensity:.88,metalness:.05,iridescence:.62,iridescenceIOR:1.4,iridescenceThicknessRange:[260,470],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.34,clearcoatRoughness:.3,sheen:.44,sheenRoughness:.48,sheenColor:new Ht(2178905),envMapIntensity:1.48});_r(n,e,!1);const s=new vn({name:"Toothless_PatagiumMembrane_PBR",color:new Ht(15660282),map:i.albedoMap,normalMap:i.normalMap,normalScale:new $t(.65,.65),roughnessMap:i.roughnessMap,roughness:.96,aoMap:i.aoMap,aoMapIntensity:.65,metalness:.02,iridescence:.38,iridescenceIOR:1.36,iridescenceThicknessRange:[250,430],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.18,clearcoatRoughness:.44,sheen:.42,sheenRoughness:.58,sheenColor:new Ht(1977920),side:Je,envMapIntensity:1.25});_r(s,e,!0);const o=new vn({name:"Toothless_ProstheticScalePaste_PBR",color:new Ht(1185308),normalMap:i.prostheticPasteNormalMap,normalScale:new $t(.95,.95),roughnessMap:i.prostheticPasteRoughnessMap,roughness:.46,metalness:.14,iridescence:.46,iridescenceIOR:1.4,iridescenceThicknessRange:[270,440],clearcoat:.42,clearcoatRoughness:.28,side:Je,envMapIntensity:1.35});_r(o,e,!1);const a=new Ni({name:"Toothless_VikingBronze_PBR",color:new Ht(12094282),metalness:.88,roughness:.33,envMapIntensity:1.45}),r=new Ni({name:"Toothless_ForgedIron_PBR",color:new Ht(2632754),metalness:.82,roughness:.42,envMapIntensity:1.3}),l=new vn({name:"Toothless_ObsidianClaws_PBR",color:new Ht(1316636),roughness:.24,metalness:.08,clearcoat:.65,clearcoatRoughness:.2,envMapIntensity:1.5}),c=new vn({name:"Toothless_RetractableTeeth_PBR",color:new Ht(15394524),roughness:.16,metalness:0,clearcoat:.85,clearcoatRoughness:.08,sheen:.2,sheenColor:new Ht(14018293),envMapIntensity:1.2}),h=new vn({name:"Toothless_OralGums_PBR",color:new Ht(2628390),normalMap:i.normalMap,normalScale:new $t(.58,.58),roughnessMap:i.roughnessMap,roughness:.42,metalness:0,clearcoat:.68,clearcoatRoughness:.18,side:Je});h.onBeforeCompile=d=>{d.uniforms.uAlphaGlow=e.uAlphaGlow,d.uniforms.uTime=e.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
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
        }`)};const u=new vn({name:"Toothless_Tongue_PBR",color:new Ht(7880269),normalMap:i.normalMap,normalScale:new $t(.68,.68),roughnessMap:i.roughnessMap,roughness:.36,metalness:0,clearcoat:.8,clearcoatRoughness:.14,sheen:.38,sheenColor:new Ht(10904693)});return{maps:i,skinMaterial:n,wingMembraneMaterial:s,prostheticPasteMaterial:o,prostheticBronzeMaterial:a,prostheticIronMaterial:r,clawMaterial:l,teethMaterial:c,oralGumMaterial:h,tongueMaterial:u,eyeMaterials:t,uniforms:e}}function Ve(i){let t=0,e=0;for(const f of i){const g=f.getAttribute("position");t+=g.count;const v=f.getIndex();e+=v?v.count:g.count}const n=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Float32Array(t*4),r=new Uint16Array(t*4),l=new Float32Array(t*4),c=t>65535?new Uint32Array(e):new Uint16Array(e);let h=0,u=0;for(const f of i){const g=f.getAttribute("position"),v=f.getAttribute("normal"),m=f.getAttribute("uv"),p=f.getAttribute("aAnatomyData"),x=f.getAttribute("skinIndex"),w=f.getAttribute("skinWeight"),_=g.count;if(n.set(g.array,h*3),v&&s.set(v.array,h*3),m&&o.set(m.array,h*2),p)a.set(p.array,h*4);else for(let y=0;y<_;y++)a[(h+y)*4]=.35;if(x&&w)for(let y=0;y<_*4;y++)r[h*4+y]=x.array[y],l[h*4+y]=w.array[y];const A=f.getIndex();if(A){for(let y=0;y<A.count;y++)c[u+y]=A.getX(y)+h;u+=A.count}else{for(let y=0;y<_;y++)c[u+y]=h+y;u+=_}h+=_}const d=new Zt;return d.setAttribute("position",new Z(n,3)),d.setAttribute("normal",new Z(s,3)),d.setAttribute("uv",new Z(o,2)),d.setAttribute("uv1",new Z(o,2)),d.setAttribute("aAnatomyData",new Z(a,4)),d.setAttribute("skinIndex",new ye(r,4)),d.setAttribute("skinWeight",new Qt(l,4)),d.setIndex(new Z(c,1)),d.computeBoundingSphere(),d.computeBoundingBox(),d}function Be(i,t){const e=t[0]+t[1]+t[2]+t[3];if(e<=1e-6)return{indices:[i[0],0,0,0],weights:[1,0,0,0]};const n=1/e;return{indices:i,weights:[t[0]*n,t[1]*n,t[2]*n,t[3]*n]}}function jn(i,t,e,n=3.2){const s=[];for(let a=0;a<t.length;a++){const r=e[a];let l=i.distanceTo(r);if(a<t.length-1){const h=e[a+1],u=new E().subVectors(h,r),d=u.lengthSq();if(d>1e-6){const f=Math.max(0,Math.min(1,new E().subVectors(i,r).dot(u)/d)),g=new E().copy(r).addScaledVector(u,f);l=Math.min(l,i.distanceTo(g)+f*.08)}}const c=1/Math.pow(Math.max(.035,l),n);s.push({idx:t[a],w:c})}s.sort((a,r)=>r.w-a.w);const o=s.slice(0,4);for(;o.length<4;)o.push({idx:0,w:0});return Be([o[0].idx,o[1].idx,o[2].idx,o[3].idx],[o[0].w,o[1].w,o[2].w,o[3].w])}function pe(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function de(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function ia(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function ul(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let g=0;g<e-1;g++)n[g]=(t[g+1][1]-t[g][1])/(t[g+1][0]-t[g][0]);s[0]=n[0],s[e-1]=n[e-2];for(let g=1;g<e-1;g++)n[g-1]*n[g]<=0?s[g]=0:s[g]=(n[g-1]+n[g])*.5;for(let g=0;g<e-1;g++)if(Math.abs(n[g])<1e-8)s[g]=0,s[g+1]=0;else{const v=s[g]/n[g],m=s[g+1]/n[g],p=Math.hypot(v,m);if(p>3){const x=3/p;s[g]=x*v*n[g],s[g+1]=x*m*n[g]}}let o=0;for(let g=0;g<e-1;g++)if(i>=t[g][0]&&i<=t[g+1][0]){o=g;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r,h=2*c-3*l+1,u=c-2*l+r,d=-2*c+3*l,f=c-l;return h*t[o][1]+u*a*s[o]+d*t[o+1][1]+f*a*s[o+1]}const Y1=[[-4.55,.018],[-3.95,.052],[-3.05,.095],[-2.1,.16],[-1.35,.228],[-.88,.282],[-.54,.334],[-.1,.328],[.42,.378],[.82,.394],[1.08,.304],[1.32,.25],[1.54,.228]],fu=[[-4.55,.016],[-3.95,.044],[-3.05,.084],[-2.1,.14],[-1.35,.194],[-.88,.236],[-.54,.274],[-.1,.272],[.42,.306],[.82,.312],[1.08,.246],[1.32,.208],[1.54,.192]],$1=[new E(0,.126,-4.55),new E(0,.126,-4.05),new E(0,.126,-3.55),new E(0,.13,-3.05),new E(0,.19,-2.5),new E(0,.35,-1.92),new E(0,.56,-1.42),new E(0,.74,-.92),new E(0,.81,-.54),new E(0,.82,-.1),new E(0,.87,.4),new E(0,.94,.8),new E(0,1.09,1.06),new E(0,1.31,1.28),new E(0,1.53,1.48),new E(0,1.635,1.66),new E(0,1.654,1.86),new E(0,1.632,2.05),new E(0,1.586,2.235)];let xr=null;function mu(){return xr||(xr=new Bn($1,!1,"centripetal",.5)),xr}function Mr(i){const t=mu();let e=0,n=1;for(let v=0;v<22;v++){const m=(e+n)*.5;t.getPointAt(m).z<i?e=m:n=m}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new E(0,1,0),l=r.clone().addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=pe(-4.55,-4.46,c);let u=ul(c,fu)*h;const d=pe(1.46,1.6,c);if(d>0){const v=Math.max(0,Math.min(1,(c-1.54)/.6949999999999998)),m=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(v-.8)/.2),2))),p=(.192+.014*de(v,.35,.22)-.068*pe(.34,.94,v))*m;u=q.lerp(u,p,d)}let f=u;return c>-.45&&c<1.18&&(f+=.01*de(c,.35,.55)),{point:o.clone().addScaledVector(l,f),tangent:a,up:l}}function gu(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.64)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.38){const r=pe(1.42,1.64,i.z),l=1-r,c=pe(1.36,1.56,i.z);return Be([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return jn(i,e,n,3.5)}function q1(i,t){const e=[];return e.push(Z1(i,t)),e.push(...j1(i,t)),e.push(...K1(i,t)),e.push(...Q1(i,t)),Ve(e)}function Z1(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=mu(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(A=>i.boneIndexMap.get(A)),r=o.map(A=>i.bindWorldPositions.get(A)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4),g=new E(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),p=[{center:v,fwd:bo,up:new E(-.16,.985,.06).normalize()},{center:m,fwd:So,up:new E(.16,.985,.06).normalize()}].map(A=>{const y=new E().crossVectors(A.up,A.fwd).normalize(),S=new E().crossVectors(A.fwd,y).normalize();return{center:A.center,fwd:A.fwd,right:y,up:S}});for(let A=0;A<=e;A++){const y=A/e,S=1-Math.pow(1-y,1.85),T=s.getPointAt(S),b=s.getTangentAt(S).normalize(),M=new E().copy(g).addScaledVector(b,-g.dot(b)).normalize(),P=new E().crossVectors(M,b).normalize(),C=T.z,R=pe(-4.55,-4.46,C),L=ul(C,Y1)*R+.008*de(C,-3.96,.36),D=ul(C,fu)*R,U=pe(1.46,1.6,C);let z=L,N=D;if(U>0){const H=Math.max(0,Math.min(1,(C-1.54)/.6949999999999998)),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(H-.8)/.2),2))),$=qs(C),K=(.192+.014*de(H,.35,.22)-.068*pe(.34,.94,H))*V;z=q.lerp(L,$,U),N=q.lerp(D,K,U)}for(let H=0;H<=n;H++){const V=H/n,$=V*Math.PI*2,K=Math.sin($),X=Math.cos($);let G=z*K,O=N*X,J=.28,lt=0,j=0;if(C>-.85&&C<1.18){const et=de(C,.76,.3),k=de(Math.abs(K),.48,.24)*pe(-.05,-.88,X),wt=de(K,0,.11)*pe(-.55,-.98,X)*et;O-=.026*et*k-.012*wt,G+=Math.sign(K)*.016*et*k;const at=de(C,.88,.22)*de(Math.abs(K),.72,.18)*pe(-.08,-.78,X),yt=de(C,-.54,.24)*de(Math.abs(K),.7,.19)*pe(-.05,-.78,X);O-=.032*at+.028*yt;const dt=de(C,.38,.28)*de(Math.abs(K),.92,.16)*de(X,-.12,.35);G+=Math.sign(K)*Math.sin(C*26)*.003*dt,X>.75&&C>-.45&&(O+=.01*Math.pow((X-.75)/.25,2)*de(C,.35,.55))}if(C>=1&&C<1.56){const et=pe(1,1.18,C)*(1-pe(1.44,1.56,C)),k=de(Math.abs(K),.62,.18)*de(X,-.35,.3);G+=Math.sign(K)*.008*k*et}if(C>=1.5){const et=de(C,1.75,.1)*de(Math.abs(K),.52,.2)*pe(.35,.9,X);O+=.014*et,G+=Math.sign(K)*.01*et;const k=de(C,1.985,.105),wt=de(Math.abs(K),.64,.17)*pe(.16,.72,X),at=1+.22*Math.max(0,Math.sin((C-1.88)/.21*Math.PI*6));O+=.024*k*wt*at,G+=Math.sign(K)*.012*k*wt;const yt=de(C,1.76,.11)*de(Math.abs(K),.92,.16)*de(X,-.18,.26),dt=de(C,1.9,.13)*de(Math.abs(K),.88,.17)*de(X,-.1,.24);if(G+=Math.sign(K)*(.018*yt+.015*dt),X>.86&&C>1.58&&C<1.95){const mt=Math.pow((X-.86)/.14,2),xt=Math.max(0,Math.sin((C-1.58)/.37*Math.PI*6)),_t=-.003*de(Math.abs(K),.16,.07);O+=(.008+.015*Math.pow(xt,1.5))*mt+_t,j=Math.max(j,.75*mt*pe(1.58,1.94,C))}if(C>2.15&&X>-.35&&X<.35){const mt=de(K,0,.08)*pe(2.15,2.225,C);O-=.0025*mt}const Ut=de(K,0,.26)*pe(.42,.96,X)*pe(1.66,1.98,C),Pt=pe(1.98,2.19,C)*pe(-.35,.85,X),B=k*wt*1.45,I=de(X,-.2,.2)*pe(1.74,2.18,C);J=.38+1.56*Math.min(1,Math.max(Ut,Pt,B,I*.88))}const Q=new E().copy(T).addScaledVector(P,G).addScaledVector(M,O),W=pe(1.63,1.72,C);if(W>0&&X<.04){const et=Ui(C),k=Math.max(pe(.56,.9,Math.abs(K)),pe(2.12,2.21,C)),wt=et-.0045,at=et+.044*(1-pe(2.08,2.22,C)),yt=q.lerp(at,wt,k),dt=W*pe(.04,-.26,X);Q.y=q.lerp(Q.y,yt,dt)}if(C>1.8&&C<2.16)for(const et of p){if(Math.sign(Q.x)!==Math.sign(et.center.x))continue;const k=new E().subVectors(Q,et.center),wt=k.dot(et.fwd),at=k.dot(et.right),yt=k.dot(et.up);if(wt>0){const dt=Math.exp(-.5*(Math.pow(at/.058,2)+Math.pow(yt/.05,2)))*pe(0,.035,wt),Ut=ba-.024,Pt=q.lerp(wt,Ut,dt);wt>Pt&&(Q.addScaledVector(et.fwd,Pt-wt),J=Math.max(J,.78*dt))}}if(C>2.1&&C<2.23&&Q.y>1.575){const et=ia(Q.x,Q.z,.066,2.182,.021,.024)*de(Q.y,1.606,.017),k=ia(Q.x,Q.z,-.066,2.182,.021,.024)*de(Q.y,1.606,.017),wt=Math.max(et,k),at=Math.max(ia(Q.x,Q.z,.068,2.176,.025,.026),ia(Q.x,Q.z,-.068,2.176,.025,.026))*de(Q.y,1.622,.012);at>.05&&(Q.y+=.0035*at,Q.x+=Math.sign(Q.x)*.0025*at),wt>.05&&(Q.x*=1-.16*wt,Q.y-=.011*wt,Q.z-=.014*wt,j=Math.max(j,Math.min(1,wt*1.35)))}if(C>1.76&&C<2.02&&Q.y>1.68){const et=Math.abs(Q.x+.14-(Q.z-1.89)*.4),k=de(Q.z,1.89,.052)*pe(.015,.002,et),wt=Math.abs(Q.x-.12+(Q.z-1.84)*.34),at=de(Q.z,1.84,.034)*pe(.012,.002,wt);lt=Math.min(1,Math.max(k,at*.85)),lt>.01&&(Q.y-=.0035*lt)}X>.92&&C<1.56&&(j=Math.max(j,(X-.92)/.08*.55),J=Math.max(J,.65*((X-.92)/.08)));const it=A*(n+1)+H;c[it*3]=Q.x,c[it*3+1]=Q.y,c[it*3+2]=Q.z,h[it*2]=S*5.2,h[it*2+1]=V*1.6,u[it*4]=J,u[it*4+1]=lt,u[it*4+2]=j,u[it*4+3]=0;const St=gu(Q,i,a,r);d.set(St.indices,it*4),f.set(St.weights,it*4)}}const x=new Uint32Array(e*n*6);let w=0;for(let A=0;A<e;A++)for(let y=0;y<n;y++){const S=A*(n+1)+y,T=(A+1)*(n+1)+y,b=(A+1)*(n+1)+(y+1),M=A*(n+1)+(y+1);x[w++]=S,x[w++]=T,x[w++]=b,x[w++]=S,x[w++]=b,x[w++]=M}const _=new Zt;return _.setAttribute("position",new Z(c,3)),_.setAttribute("uv",new Z(h,2)),_.setAttribute("aAnatomyData",new Z(u,4)),_.setAttribute("skinIndex",new ye(d,4)),_.setAttribute("skinWeight",new Qt(f,4)),_.setIndex(new Z(x,1)),_.computeVertexNormals(),Da(_,e,n),_}function j1(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.272,2.09,1.06],maxWidth:.074,maxThick:.027,rollAngle:l*-.46}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.395,1.692,1.33],maxWidth:.038,maxThick:.017,rollAngle:l*-.95}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],tipPos:[l*.348,1.565,1.39],maxWidth:.03,maxThick:.015,rollAngle:l*-1.15}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],customStart:[l*.218,1.498,1.62],tipPos:[l*.274,1.488,1.48],maxWidth:.021,maxThick:.012,rollAngle:l*-1.28})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.customStart?[new E(...r.customStart),new E(...r.tipPos).lerp(new E(...r.customStart),.5)]:r.boneNames.map(T=>i.bindWorldPositions.get(T).clone()),c=new E().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.052),...l,new E(...r.tipPos)],d=new Bn(u),f=r.boneNames.map(T=>i.boneIndexMap.get(T)),g=r.boneNames.map(T=>i.bindWorldPositions.get(T)),v=(o+1)*(a+1),m=new Float32Array(v*3),p=new Float32Array(v*2),x=new Float32Array(v*4),w=new Uint16Array(v*4),_=new Float32Array(v*4);for(let T=0;T<=o;T++){const M=1-T/o,P=d.getPointAt(M),C=d.getTangentAt(M).negate().normalize(),R=new E(Math.sin(r.rollAngle),Math.cos(r.rollAngle),0).normalize(),L=R.clone().addScaledVector(C,-R.dot(C)).normalize(),D=new E().crossVectors(L,C).normalize(),U=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.76)/.24),2))),z=.72+.44*Math.sin(Math.min(1,M*1.15)*Math.PI),N=1+.34*Math.pow(Math.max(0,1-M*4.2),2),H=r.maxWidth*z*U*N,V=r.maxThick*(.85+.25*(1-M))*U*N;for(let $=0;$<=a;$++){const K=$/a,X=K*Math.PI*2,G=new E().copy(P).addScaledVector(D,H*Math.sin(X)).addScaledVector(L,V*Math.cos(X)),O=T*(a+1)+$;m[O*3]=G.x,m[O*3+1]=G.y,m[O*3+2]=G.z,p[O*2]=M*.85,p[O*2+1]=K*.65,x[O*4]=.45+1.35*pe(.32,.9,M);const J=jn(G,f,g,3.6),lt=pe(.28,0,M),j=Be([n,J.indices[0],J.indices[1],J.indices[2]],[lt,J.weights[0]*(1-lt),J.weights[1]*(1-lt),J.weights[2]*(1-lt)]);w.set(j.indices,O*4),_.set(j.weights,O*4)}}const A=new Uint16Array(o*a*6);let y=0;for(let T=0;T<o;T++)for(let b=0;b<a;b++){const M=T*(a+1)+b,P=(T+1)*(a+1)+b,C=(T+1)*(a+1)+(b+1),R=T*(a+1)+(b+1);A[y++]=M,A[y++]=P,A[y++]=C,A[y++]=M,A[y++]=C,A[y++]=R}const S=new Zt;S.setAttribute("position",new Z(m,3)),S.setAttribute("uv",new Z(p,2)),S.setAttribute("aAnatomyData",new Z(x,4)),S.setAttribute("skinIndex",new ye(w,4)),S.setAttribute("skinWeight",new Qt(_,4)),S.setIndex(new Z(A,1)),S.computeVertexNormals(),Da(S,o,a),e.push(S)}return e}function K1(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?bo:So).clone(),d=new E(r*-.16,.985,.06).normalize(),f=new E().crossVectors(u,d).normalize(),g=new E().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,p=(s+1)*(o+1),x=new Float32Array(p*3),w=new Float32Array(p*2),_=new Float32Array(p*4),A=new Uint16Array(p*4),y=new Float32Array(p*4),S=ba+.0018;for(let P=0;P<=o;P++){const C=P/o,R=de(C,.06,.08);for(let L=0;L<=s;L++){const D=L/s,U=q.degToRad(q.lerp(-65,65,D)),z=Math.sin(D*Math.PI),N=v?44*z:-40*z,H=v?78:-74,V=q.degToRad(q.lerp(N,H,C)),$=Math.max(0,Math.sin(D*Math.PI*22))*.0014*R,K=S+.0018*R+$-.0028*C,X=new E().addScaledVector(u,Math.cos(V)*Math.cos(U)).addScaledVector(f,Math.cos(V)*Math.sin(U)).addScaledVector(g,Math.sin(V)).normalize(),G=new E().copy(l).addScaledVector(X,K),O=P*(s+1)+L;x[O*3]=G.x,x[O*3+1]=G.y,x[O*3+2]=G.z,w[O*2]=D*.35,w[O*2+1]=C*.18,_[O*4]=.85;const J=z*(1-pe(.48,1,C)),lt=Math.max(0,Math.min(1,J));A.set([m,n,0,0],O*4),y.set([lt,1-lt,0,0],O*4)}}const T=new Uint16Array(s*o*6);let b=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,D=(P+1)*(s+1)+(C+1),U=P*(s+1)+(C+1);v?(T[b++]=R,T[b++]=D,T[b++]=L,T[b++]=R,T[b++]=U,T[b++]=D):(T[b++]=R,T[b++]=L,T[b++]=D,T[b++]=R,T[b++]=D,T[b++]=U)}const M=new Zt;M.setAttribute("position",new Z(x,3)),M.setAttribute("uv",new Z(w,2)),M.setAttribute("aAnatomyData",new Z(_,4)),M.setAttribute("skinIndex",new ye(A,4)),M.setAttribute("skinWeight",new Qt(y,4)),M.setIndex(new Z(T,1)),M.computeVertexNormals(),e.push(M)}}return e}function Q1(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new E(a*.16,.96,.86),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new E(a*.342,.056,1),new E(a*.342,.032,1.078)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(ih(i,r,l,!0,o,n,s)),e.push(...nh(i,o,!0,t));const c=[new E(a*.15,.8,-.54),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new E(a*.318,.054,-.562),new E(a*.318,.032,-.488)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(ih(i,c,h,!1,o,n,s)),e.push(...nh(i,o,!1,t))}return e}function nh(i,t,e,n){const s=[],o=pu(t,e),a=n===0?16:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=l.dirX,p=l.dirZ,x=Math.hypot(m,p),w=m/x,_=p/x,A=_,y=-w;for(let M=0;M<=a;M++){const P=M/a,C=q.lerp(-.38,1,P),R=Math.max(0,C),L=Math.max(0,-C)*.042,D=Math.sin(R*Math.PI)*.011-.009*R*R+L,U=l.rootX+w*l.toeLength*C,z=l.rootZ+_*l.toeLength*C,N=l.rootY+D,H=1+.44*Math.pow(1-pe(-.38,.18,C),1.5),V=1+.15*de(R,.4,.18)+.14*de(R,.84,.1),$=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(P-.89)/.11),2))),K=q.lerp(l.baseRadius,l.tipRadius,R)*H*V*$;for(let X=0;X<=r;X++){const G=X/r,O=G*Math.PI*2,J=Math.sin(O),lt=Math.cos(O),j=lt>.15?Math.pow(Math.max(0,Math.sin(R*Math.PI*4.5)),.75)*.0042*((lt-.15)/.85):0,Q=1.12+.24*(1-pe(-.35,.22,C)),W=U+A*J*K*Q,it=z+y*J*K*Q;let St=N+lt*(K*.86+j);St<.003&&(St=.003+Math.max(0,St)*.12);const et=M*(r+1)+X;u[et*3]=W,u[et*3+1]=St,u[et*3+2]=it,d[et*2]=P*.42,d[et*2+1]=G*.36,f[et*4]=lt>.05?1.95:.38,g.set([c,0,0,0],et*4),v.set([1,0,0,0],et*4)}}const S=new Uint16Array(a*r*6);let T=0;for(let M=0;M<a;M++)for(let P=0;P<r;P++){const C=M*(r+1)+P,R=(M+1)*(r+1)+P,L=(M+1)*(r+1)+(P+1),D=M*(r+1)+(P+1);S[T++]=C,S[T++]=R,S[T++]=L,S[T++]=C,S[T++]=L,S[T++]=D}const b=new Zt;b.setAttribute("position",new Z(u,3)),b.setAttribute("uv",new Z(d,2)),b.setAttribute("aAnatomyData",new Z(f,4)),b.setAttribute("skinIndex",new ye(g,4)),b.setAttribute("skinWeight",new Qt(v,4)),b.setIndex(new Z(S,1)),b.computeVertexNormals(),Da(b,a,r),s.push(b)}return s}function ih(i,t,e,n,s,o,a){const r=s==="L"?1:-1,l=new Bn(t,!1,"centripetal",.5),c=e.map(A=>i.boneIndexMap.get(A)),h=e.map(A=>i.bindWorldPositions.get(A)),u=(o+1)*(a+1),d=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),p=new E(0,0,1);for(let A=0;A<=o;A++){const S=1-A/o,T=l.getPointAt(S),b=l.getTangentAt(S).negate().normalize(),M=p.clone().addScaledVector(b,-p.dot(b)).normalize(),P=new E().crossVectors(M,b).normalize(),C=.52+.48*pe(0,.34,S),R=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(S-.91)/.09),2)))*C;let L=.095,D=.11;if(n){const N=de(S,.54,.16)*.028,H=de(S,.86,.12)*.088;L=(.09+N+H)*R,D=(.106+de(S,.26,.18)*.036+N+H*.86)*R}else{const N=de(S,.52,.15)*.032,H=de(S,.86,.12)*.082;L=(.088+N+H)*R,D=(.11+de(S,.26,.19)*.046+N*1.08+H*.84)*R}const U=pe(.7,.94,S),z=1-pe(.08,.42,S);for(let N=0;N<=a;N++){const H=N/a,V=H*Math.PI*2,$=Math.sin(V),K=Math.cos(V),X=$*r>0?Math.abs($):0,G=1-.28*z*X;let O=1;if(U>.01&&K>-.35){const I=Math.atan2($,Math.max(.05,K+.25)),nt=Math.cos(I*3.6);O+=.16*U*Math.max(-.12,nt)*pe(-.35,.45,K)}const J=pe(-.82,.78,K+.35*X),lt=Math.pow(pe(.08,.94,S),1.42),j=Math.pow(pe(.56,.95,S),1.75),Q=S*22,W=H*14+Math.floor(Q)*.5,it=Math.max(0,Math.sin(Q*Math.PI))*Math.max(0,Math.sin(W*Math.PI))*.0018*J*j,St=L*G*O+it,et=D*O+it,k=new E().copy(T).addScaledVector(P,St*$).addScaledVector(M,et*K);S>.7&&k.y<.004&&(k.y=.002+Math.max(0,k.y)*.14);const wt=A*(a+1)+N;d[wt*3]=k.x,d[wt*3+1]=k.y,d[wt*3+2]=k.z,f[wt*2]=S*1.35,f[wt*2+1]=H*.85,g[wt*4]=.34+1.48*J*lt;const at=jn(k,c,h,3.5),yt=pe(.24,0,S)*.72,dt=c[c.length-1],Ut=pe(.74,.88,S),Pt=(1-yt)*(1-Ut),B=Be([dt,c[0],at.indices[0],at.indices[1]],[Ut,yt*(1-Ut),at.weights[0]*Pt,at.weights[1]*Pt]);v.set(B.indices,wt*4),m.set(B.weights,wt*4)}}const x=new Uint16Array(o*a*6);let w=0;for(let A=0;A<o;A++)for(let y=0;y<a;y++){const S=A*(a+1)+y,T=(A+1)*(a+1)+y,b=(A+1)*(a+1)+(y+1),M=A*(a+1)+(y+1);x[w++]=S,x[w++]=T,x[w++]=b,x[w++]=S,x[w++]=b,x[w++]=M}const _=new Zt;return _.setAttribute("position",new Z(d,3)),_.setAttribute("uv",new Z(f,2)),_.setAttribute("aAnatomyData",new Z(g,4)),_.setAttribute("skinIndex",new ye(v,4)),_.setAttribute("skinWeight",new Qt(m,4)),_.setIndex(new Z(x,1)),_.computeVertexNormals(),Da(_,o,a),_}function Da(i,t,e){const n=i.getAttribute("normal"),s=new E,o=new E;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function J1(i,t){return{jawSkinGeometry:Ve([tv(i,t),...ev(i,t)]),oralGumsGeometry:nv(i,t),teethGeometry:iv(i,t),tongueGeometry:sv(i,t),irisGeometry:sh(i,t,!1),corneaGeometry:sh(i,t,!0),clawsGeometry:ov(i,t)}}function Cn(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function tv(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4);for(let p=0;p<=e;p++){const x=p/e,w=q.lerp(1.55,2.226,x),_=qs(w),A=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(x-.88)/.12),2))),y=Math.max(.002,(_-.0035*Cn(1.66,1.76,w))*A),S=Ui(w),T=.028*(1-Cn(1.55,1.7,w)),b=S+.0035+T,M=(.088-.034*x)*A;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),D=Math.cos(R),U=Math.exp(-Math.pow((x-.28)/.22,2))*.011,z=Math.exp(-Math.pow((x-.3)/.16,2))*Math.abs(L)*.01,N=(y+z)*L,H=-.022*D*(1-Math.pow(L,2))*Cn(1.68,1.78,w),V=D>=0?b+H:b+(M+U)*D;let $=0,K=V;if(w>1.98&&w<2.18&&D<-.55){const it=Math.abs(N-.024-(w-2.08)*.25);it<.013&&($=1-it/.013,K+=.0022*$)}const X=p*(n+1)+P;c[X*3]=N,c[X*3+1]=K,c[X*3+2]=w,h[X*2]=x*.95,h[X*2+1]=C*.85;const G=Math.exp(-Math.pow(D/.35,2));u[X*4]=Math.min(1,.38+.56*Math.max(G,x>.7?(x-.7)*3:0)),u[X*4+1]=$,u[X*4+2]=0,u[X*4+3]=0;const O=Cn(1.62,1.71,w),J=1-O,lt=Cn(1.42,1.64,w),j=Cn(1.36,1.56,w),Q=J*(1-lt),W=Be([s,o,a,r],[O,J*lt,Q*(.52+.48*j),Q*(.48-.48*j)]);d.set(W.indices,X*4),f.set(W.weights,X*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let p=0;p<e;p++)for(let x=0;x<n;x++){const w=p*(n+1)+x,_=(p+1)*(n+1)+x,A=(p+1)*(n+1)+(x+1),y=p*(n+1)+(x+1);g[v++]=w,g[v++]=_,g[v++]=A,g[v++]=w,g[v++]=A,g[v++]=y}const m=new Zt;return m.setAttribute("position",new Z(c,3)),m.setAttribute("uv",new Z(h,2)),m.setAttribute("aAnatomyData",new Z(u,4)),m.setAttribute("skinIndex",new ye(d,4)),m.setAttribute("skinWeight",new Qt(f,4)),m.setIndex(new Z(g,1)),m.computeVertexNormals(),m}function ev(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=t===0?14:8,o=t===0?12:8,a=[];for(const r of["L","R"]){const l=r==="L"?1:-1,c=(s+1)*(o+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let x=0;x<=o;x++){const w=x/o;for(let _=0;_<=s;_++){const A=_/s,y=q.lerp(1.65,1.9,A),S=Ui(y),T=qs(y)-.008,b=-.016*Math.sin(w*Math.PI)*Math.pow(A,1.3),M=.026*(1-.55*A),P=S+(w-.5)*2*M,C=l*(T-.006*A+b*.35),R=x*(s+1)+_;h[R*3]=C,h[R*3+1]=P,h[R*3+2]=y+b,u[R*2]=A*.3,u[R*2+1]=w*.3,d[R*4]=.35;const L=Cn(0,1,w),D=1-L;f.set([e,n,0,0],R*4),g.set([L,D,0,0],R*4)}}const v=new Uint16Array(s*o*6);let m=0;for(let x=0;x<o;x++)for(let w=0;w<s;w++){const _=x*(s+1)+w,A=(x+1)*(s+1)+w,y=(x+1)*(s+1)+(w+1),S=x*(s+1)+(w+1);r==="L"?(v[m++]=_,v[m++]=S,v[m++]=y,v[m++]=_,v[m++]=y,v[m++]=A):(v[m++]=_,v[m++]=A,v[m++]=y,v[m++]=_,v[m++]=y,v[m++]=S)}const p=new Zt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new ye(f,4)),p.setAttribute("skinWeight",new Qt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),a.push(p)}return a}function vu(i,t){const e=1.76+Math.cos(i)*(t?.422:.406),n=Math.max(.04,qs(e)-(t?.022:.03));return{x:Math.sin(i)*n,z:e}}function nv(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=[],o=t===0?32:18,a=t===0?28:16;for(const u of[!0,!1]){const d=u?e:n,f=(o+1)*(a+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),p=new Uint16Array(f*4),x=new Float32Array(f*4);for(let y=0;y<=o;y++){const S=y/o,T=q.lerp(1.68,2.19,S),b=Ui(T),M=Math.max(.02,(qs(T)-.016)*Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(S-.86)/.14),2))));for(let P=0;P<=a;P++){const C=P/a*2-1,R=Math.abs(C),L=Math.sqrt(Math.max(0,1-C*C)),D=C*M;let U;if(u){const N=S*Math.PI*18-R*2.6,H=Math.pow(.5+.5*Math.sin(N),1.8)*.0052*L*Cn(.08,.25,S),V=-.0032*Math.exp(-Math.pow(C/.1,2))*L,$=.0035*Math.abs(Math.sin(S*Math.PI*16))*Cn(.75,.98,R);U=b+.004+.032*L-H+V-$}else{const N=.0038*Math.exp(-Math.pow((R-.34)/.14,2))*L,H=.0035*Math.exp(-Math.pow(C/.07,2))*Cn(.55,.2,S),V=.003*Math.abs(Math.sin(S*Math.PI*14))*Cn(.75,.98,R);U=b-.002-.02*L+N+H+V}const z=y*(a+1)+P;g[z*3]=D,g[z*3+1]=U,g[z*3+2]=T,v[z*2]=S*2.4,v[z*2+1]=(C*.5+.5)*2,m[z*4]=.45,m[z*4+2]=(1-Cn(0,.38,S))*.85,p.set([d,0,0,0],z*4),x.set([1,0,0,0],z*4)}}const w=new Uint16Array(o*a*6);let _=0;for(let y=0;y<o;y++)for(let S=0;S<a;S++){const T=y*(a+1)+S,b=(y+1)*(a+1)+S,M=(y+1)*(a+1)+(S+1),P=y*(a+1)+(S+1);u?(w[_++]=T,w[_++]=M,w[_++]=b,w[_++]=T,w[_++]=P,w[_++]=M):(w[_++]=T,w[_++]=b,w[_++]=M,w[_++]=T,w[_++]=M,w[_++]=P)}const A=new Zt;A.setAttribute("position",new Z(g,3)),A.setAttribute("uv",new Z(v,2)),A.setAttribute("aAnatomyData",new Z(m,4)),A.setAttribute("skinIndex",new ye(p,4)),A.setAttribute("skinWeight",new Qt(x,4)),A.setIndex(new Z(w,1)),A.computeVertexNormals(),s.push(A)}const r=t===0?42:22,l=t===0?12:8;for(const u of[!0,!1]){const d=u?e:n,f=u?16:14,g=.0155,v=(r+1)*(l+1),m=new Float32Array(v*3),p=new Float32Array(v*2),x=new Float32Array(v*4),w=new Uint16Array(v*4),_=new Float32Array(v*4),A=[];for(let M=0;M<=18;M++){const P=q.lerp(-Math.PI*.46,Math.PI*.46,M/18),C=vu(P,u),R=Ui(C.z)+(u?.012:-.01);A.push(new E(C.x,R,C.z))}const y=new Bn(A);for(let M=0;M<=r;M++){const P=M/r,C=y.getPointAt(P),R=y.getTangentAt(P).normalize(),L=new E(0,1,0),D=new E().crossVectors(L,R).normalize(),U=1+.24*Math.pow(.5+.5*Math.cos(P*Math.PI*f*2),2),z=g*U;for(let N=0;N<=l;N++){const H=N/l,V=H*Math.PI*2,$=1+.12*Math.sin(V*3),K=new E().copy(C).addScaledVector(D,z*$*Math.sin(V)).addScaledVector(L,z*.82*Math.cos(V)),X=M*(l+1)+N;m[X*3]=K.x,m[X*3+1]=K.y,m[X*3+2]=K.z,p[X*2]=P*3,p[X*2+1]=H*1.2,x[X*4]=.4,w.set([d,0,0,0],X*4),_.set([1,0,0,0],X*4)}}const S=new Uint16Array(r*l*6);let T=0;for(let M=0;M<r;M++)for(let P=0;P<l;P++){const C=M*(l+1)+P,R=(M+1)*(l+1)+P,L=(M+1)*(l+1)+(P+1),D=M*(l+1)+(P+1);S[T++]=C,S[T++]=R,S[T++]=L,S[T++]=C,S[T++]=L,S[T++]=D}const b=new Zt;b.setAttribute("position",new Z(m,3)),b.setAttribute("uv",new Z(p,2)),b.setAttribute("aAnatomyData",new Z(x,4)),b.setAttribute("skinIndex",new ye(w,4)),b.setAttribute("skinWeight",new Qt(_,4)),b.setIndex(new Z(S,1)),b.computeVertexNormals(),s.push(b)}const c=t===0?18:10,h=t===0?12:8;{const u=(c+1)*(h+1),d=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4);for(let _=0;_<=h;_++){const A=_/h;for(let y=0;y<=c;y++){const S=y/c,T=q.lerp(-Math.PI*.62,Math.PI*.62,S),b=1.78-Math.cos(T)*.11,M=qs(Math.max(1.66,b))-.022,P=Math.sin(T)*M,C=Ui(b),R=q.lerp(C-.018,C+.03,A),L=_*(c+1)+y;d[L*3]=P,d[L*3+1]=R,d[L*3+2]=b,f[L*2]=S*1.5,f[L*2+1]=A*1.5,g[L*4]=.5,g[L*4+2]=.95*Math.cos(T*.65);const D=Cn(0,1,A);v.set([e,n,0,0],L*4),m.set([D,1-D,0,0],L*4)}}const p=new Uint16Array(c*h*6);let x=0;for(let _=0;_<h;_++)for(let A=0;A<c;A++){const y=_*(c+1)+A,S=(_+1)*(c+1)+A,T=(_+1)*(c+1)+(A+1),b=_*(c+1)+(A+1);p[x++]=y,p[x++]=S,p[x++]=T,p[x++]=y,p[x++]=T,p[x++]=b}const w=new Zt;w.setAttribute("position",new Z(d,3)),w.setAttribute("uv",new Z(f,2)),w.setAttribute("aAnatomyData",new Z(g,4)),w.setAttribute("skinIndex",new ye(v,4)),w.setAttribute("skinWeight",new Qt(m,4)),w.setIndex(new Z(p,1)),w.computeVertexNormals(),s.push(w)}return Ve(s)}function iv(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,f=q.lerp(-Math.PI*.42,Math.PI*.42,d),g=vu(f,r),v=g.x,m=g.z,p=Ui(m)+(r?.011:-.01),x=1+.34*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),w=.023*x*(.78+.22*Math.cos(f)),_=.0062*x,A=(o+1)*(a+1),y=new Float32Array(A*3),S=new Float32Array(A*2),T=new Float32Array(A*4),b=new Uint16Array(A*4),M=new Float32Array(A*4),P=-Math.sin(f),C=-Math.cos(f);for(let U=0;U<=o;U++){const z=r?1-U/o:U/o,N=_*(1-.88*Math.pow(z,1.25)),H=.0055*z*z,V=v+P*H,$=p+h*w*z,K=m+C*H-.003*z*z;for(let X=0;X<=a;X++){const G=X/a,O=G*Math.PI*2,J=U*(a+1)+X;y[J*3]=V+Math.sin(O)*N,y[J*3+1]=$,y[J*3+2]=K+Math.cos(O)*N,S[J*2]=z,S[J*2+1]=G,b.set([c,0,0,0],J*4),M.set([1,0,0,0],J*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let U=0;U<o;U++)for(let z=0;z<a;z++){const N=U*(a+1)+z,H=(U+1)*(a+1)+z,V=(U+1)*(a+1)+(z+1),$=U*(a+1)+(z+1);R[L++]=N,R[L++]=H,R[L++]=V,R[L++]=N,R[L++]=V,R[L++]=$}const D=new Zt;D.setAttribute("position",new Z(y,3)),D.setAttribute("uv",new Z(S,2)),D.setAttribute("aAnatomyData",new Z(T,4)),D.setAttribute("skinIndex",new ye(b,4)),D.setAttribute("skinWeight",new Qt(M,4)),D.setIndex(new Z(R,1)),D.computeVertexNormals(),s.push(D)}}return Ve(s)}function sv(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let m=0;m<=e;m++){const p=m/e,x=q.lerp(1.74,2.12,p),w=Ui(x)-.004,_=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),A=(.08+.012*Math.sin(p*Math.PI)-.022*p)*_,y=(.015-.005*p)*_;for(let S=0;S<=n;S++){const T=S/n,b=T*Math.PI*2,M=Math.sin(b),P=Math.cos(b),C=P>.35?-.0042*Math.exp(-Math.pow(M/.24,2)):0,R=P>.2?.0012*Math.sin(p*Math.PI*26)*Math.cos(M*Math.PI*9)*_:0,L=new E(A*M,w+y*P+C+R,x),D=m*(n+1)+S;l[D*3]=L.x,l[D*3+1]=L.y,l[D*3+2]=L.z,c[D*2]=p*2.5,c[D*2+1]=T*1.8;const U=jn(L,o,a,3.8);u.set(U.indices,D*4),d.set(U.weights,D*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let p=0;p<n;p++){const x=m*(n+1)+p,w=(m+1)*(n+1)+p,_=(m+1)*(n+1)+(p+1),A=m*(n+1)+(p+1);f[g++]=x,f[g++]=w,f[g++]=_,f[g++]=x,f[g++]=_,f[g++]=A}const v=new Zt;return v.setAttribute("position",new Z(l,3)),v.setAttribute("uv",new Z(c,2)),v.setAttribute("aAnatomyData",new Z(h,4)),v.setAttribute("skinIndex",new ye(u,4)),v.setAttribute("skinWeight",new Qt(d,4)),v.setIndex(new Z(f,1)),v.computeVertexNormals(),v}function sh(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?bo:So).clone(),u=new E(r*-.16,.985,.06).normalize(),d=new E().crossVectors(u,h).normalize(),f=new E().crossVectors(h,d).normalize(),g=e?ba+9e-4:ba,v=.94,m=(s+1)*(o+1),p=new Float32Array(m*3),x=new Float32Array(m*2),w=new Float32Array(m*4),_=new Uint16Array(m*4),A=new Float32Array(m*4);for(let b=0;b<=s;b++){const M=b/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(M),C=Math.cos(M);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,D=Math.cos(L),U=Math.sin(L);let z=g;if(M<v){const K=1-M/v;e?z+=.0014*K*K:z-=.0028*K*K}const N=new E().addScaledVector(h,C).addScaledVector(d,P*D).addScaledVector(f,P*U).normalize(),H=new E().copy(l).addScaledVector(N,z),V=b*(o+1)+R;p[V*3]=H.x,p[V*3+1]=H.y,p[V*3+2]=H.z;const $=Math.min(.498,M/v*.48);x[V*2]=.5+$*D,x[V*2+1]=.5+$*U,_.set([c,0,0,0],V*4),A.set([1,0,0,0],V*4)}}const y=new Uint16Array(s*o*6);let S=0;for(let b=0;b<s;b++)for(let M=0;M<o;M++){const P=b*(o+1)+M,C=(b+1)*(o+1)+M,R=(b+1)*(o+1)+(M+1),L=b*(o+1)+(M+1);y[S++]=P,y[S++]=C,y[S++]=R,y[S++]=P,y[S++]=R,y[S++]=L}const T=new Zt;T.setAttribute("position",new Z(p,3)),T.setAttribute("uv",new Z(x,2)),T.setAttribute("aAnatomyData",new Z(w,4)),T.setAttribute("skinIndex",new ye(_,4)),T.setAttribute("skinWeight",new Qt(A,4)),T.setIndex(new Z(y,1)),T.computeVertexNormals(),n.push(T)}return Ve(n)}function ov(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=pu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,f=d,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,p=l.rootZ+d*l.toeLength*v,x=l.rootY+Math.sin(v*Math.PI)*.011-.009*v*v+.002,w=l.toeLength*(1-v)+l.clawLength,_=l.tipRadius*.76,A=(n+1)*(s+1),y=new Float32Array(A*3),S=new Float32Array(A*2),T=new Float32Array(A*4),b=new Uint16Array(A*4),M=new Float32Array(A*4);for(let L=0;L<=n;L++){const D=L/n,U=_*(1-.85*Math.pow(D,1.52)),z=m+u*w*D,N=p+d*w*D,H=Math.max(.004,x-.036*Math.pow(D,1.8)+.006*Math.sin(D*Math.PI));for(let V=0;V<=s;V++){const $=V/s,K=$*Math.PI*2,X=Math.sin(K),G=Math.cos(K),O=L*(s+1)+V;y[O*3]=z+f*X*U*.74,y[O*3+1]=Math.max(.002,H+G*U*1.05),y[O*3+2]=N+g*X*U*.74,S[O*2]=D,S[O*2+1]=$,b.set([c,0,0,0],O*4),M.set([1,0,0,0],O*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let D=0;D<s;D++){const U=L*(s+1)+D,z=(L+1)*(s+1)+D,N=(L+1)*(s+1)+(D+1),H=L*(s+1)+(D+1);P[C++]=U,P[C++]=z,P[C++]=N,P[C++]=U,P[C++]=N,P[C++]=H}const R=new Zt;R.setAttribute("position",new Z(y,3)),R.setAttribute("uv",new Z(S,2)),R.setAttribute("aAnatomyData",new Z(T,4)),R.setAttribute("skinIndex",new ye(b,4)),R.setAttribute("skinWeight",new Qt(M,4)),R.setIndex(new Z(P,1)),R.computeVertexNormals(),e.push(R)}}return Ve(e)}function av(i,t){const e=[],n=[],s=[];for(const o of["L","R"]){const a=o==="L"?1:-1;e.push(...rv(i,o,a,t)),n.push(...lv(i,o,a,t)),e.push(...cv(i,o,t)),n.push(hv(i,o,t)),s.push(fv(i,o,a,t))}return e.push(...uv(i,t)),n.push(dv(i,t)),{wingSparsSkinGeometry:Ve(e),wingMembraneGeometry:Ve(n),dorsalSpinesGeometry:pv(i,t),alulaClawsGeometry:Ve(s)}}function xo(i,t,e,n,s,o,a=.55){const r=new Bn(t),l=e.map(_=>i.boneIndexMap.get(_)),c=e.map(_=>i.bindWorldPositions.get(_)),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new E(0,1,0);for(let _=0;_<=s;_++){const A=_/s,y=r.getPointAt(A),S=r.getTangentAt(A).normalize();let T=m.clone().addScaledVector(S,-m.dot(S));T.lengthSq()<1e-4&&T.set(0,0,1),T.normalize();const b=new E().crossVectors(T,S).normalize(),M=A*(n.length-1),P=Math.min(n.length-2,Math.floor(M)),C=M-P;let R=q.lerp(n[P],n[P+1],C);A>.92&&(R*=Math.sqrt(Math.max(0,1-Math.pow((A-.92)/.08,2))));for(let L=0;L<=o;L++){const D=L/o,U=D*Math.PI*2,z=new E().copy(y).addScaledVector(b,R*Math.sin(U)).addScaledVector(T,R*.88*Math.cos(U)),N=_*(o+1)+L;u[N*3]=z.x,u[N*3+1]=z.y,u[N*3+2]=z.z,d[N*2]=A*1.4,d[N*2+1]=D*.45,f[N*4]=a;const H=jn(z,l,c,3.8);g.set(H.indices,N*4),v.set(H.weights,N*4)}}const p=new Uint16Array(s*o*6);let x=0;for(let _=0;_<s;_++)for(let A=0;A<o;A++){const y=_*(o+1)+A,S=(_+1)*(o+1)+A,T=(_+1)*(o+1)+(A+1),b=_*(o+1)+(A+1);p[x++]=y,p[x++]=S,p[x++]=T,p[x++]=y,p[x++]=T,p[x++]=b}const w=new Zt;return w.setAttribute("position",new Z(u,3)),w.setAttribute("uv",new Z(d,2)),w.setAttribute("aAnatomyData",new Z(f,4)),w.setAttribute("skinIndex",new ye(g,4)),w.setAttribute("skinWeight",new Qt(v,4)),w.setIndex(new Z(p,1)),w.computeVertexNormals(),w}function rv(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new E(e*.17,1.01,.75),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(xo(i,c,h,[.062,.068,.066,.056,.044,.03,.008],o,a,.72));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(xo(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.03,.019,.005],r,l,.58))}return s}function lv(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(zs(o,Math.max(4,Math.floor(a*.5)),(S,T)=>{const b=new E().lerpVectors(new E(e*.3,1.13,.88),f,S);b.z+=.05*Math.sin(S*Math.PI);const M=S<.48?new E().lerpVectors(v,g,S/.48):new E().lerpVectors(g,f,(S-.48)/.52),P=new E().lerpVectors(M,b,T),C=Math.max(0,(S-.45)/.55),R=Math.max(0,(.55-S)/.55),L=1-Math.abs(S-.5)*1.8,D=Be([c,l,r,h],[R,Math.max(0,L),C,(1-S)*.25]);return{pos:P,skin:D,thinness:T*.65}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),x=i.boneIndexMap.get(`wingFinger_${t}_1_a`),w=i.boneIndexMap.get(`wingFinger_${t}_1_b`),_=new E(e*.32,1.06,.72),A=new E(e*.29,.9,.14),y=new E(e*.26,.82,-.46);s.push(zs(o,a,(S,T)=>{const b=T<.5?new E().lerpVectors(_,A,T*2):new E().lerpVectors(A,y,(T-.5)*2),M=T<.5?new E().lerpVectors(f,m,T*2):new E().lerpVectors(m,p,(T-.5)*2),P=S<.45?new E().lerpVectors(_,g,S/.45):new E().lerpVectors(g,f,(S-.45)/.55),C=new E().lerpVectors(b,M,S),R=new E().lerpVectors(P,C,Math.pow(T,.88)),L=Math.sin(S*Math.PI)*Math.pow(T,2.2);R.z+=.19*L,R.y+=.035*Math.sin(S*Math.PI)*Math.sin(T*Math.PI);const D=T<.42?h:T<.78?u:d,U=T<.35?r:T<.72?x:w,z=(1-T)*Math.sin(S*Math.PI)*.6,N=Be([D,U,l,r],[(1-S)*(1-z*.5),S*(1-z*.5),z*.65,z*.35]);return{pos:R,skin:N,thinness:.35+.65*Math.sin(S*Math.PI)*T}}));for(let S=1;S<=5;S++){const T=i.bindWorldPositions.get(`wingFinger_${t}_${S}_a`),b=i.bindWorldPositions.get(`wingFinger_${t}_${S}_b`),M=i.bindWorldPositions.get(`wingFinger_${t}_${S+1}_a`),P=i.bindWorldPositions.get(`wingFinger_${t}_${S+1}_b`),C=i.boneIndexMap.get(`wingFinger_${t}_${S}_a`),R=i.boneIndexMap.get(`wingFinger_${t}_${S}_b`),L=i.boneIndexMap.get(`wingFinger_${t}_${S+1}_a`),D=i.boneIndexMap.get(`wingFinger_${t}_${S+1}_b`),U=S===5?.24:.17;s.push(zs(o,a,(z,N)=>{const H=N<.5?new E().lerpVectors(f,T,N*2):new E().lerpVectors(T,b,(N-.5)*2),V=N<.5?new E().lerpVectors(f,M,N*2):new E().lerpVectors(M,P,(N-.5)*2),$=new E().lerpVectors(H,V,z),K=new E().subVectors(f,$).normalize(),X=Math.sin(z*Math.PI)*Math.pow(N,2.4);$.addScaledVector(K,U*X),$.y+=.028*Math.sin(z*Math.PI)*Math.sin(N*Math.PI);let G;if(N<.25){const O=1-N/.25;G=Be([r,C,L,0],[O,(1-O)*(1-z),(1-O)*z,0])}else{const O=Math.max(0,Math.min(1,(N-.42)/.48));G=Be([C,R,L,D],[(1-z)*(1-O),(1-z)*O,z*(1-O),z*O])}return{pos:$,skin:G,thinness:.3+.7*Math.sin(z*Math.PI)*Math.pow(N,.7)}}))}return s}function cv(i,t,e){const n=e===0?12:7,s=e===0?8:6,o=t==="L"?1:-1,a=[];return ya.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new E(o*r.rootX,r.rootY,r.rootZ),u=new E(o*r.tipX,r.tipY,r.tipZ);a.push(xo(i,[h,u],[c],[.017,.004],n,s,.55))}),a}function hv(i,t,e){const n=e===0?12:7,s=t==="L"?1:-1,o=[],a=ya.map(d=>new E(s*d.rootX,d.rootY,d.rootZ)),r=ya.map(d=>new E(s*d.tipX,d.tipY,d.tipZ)),l=[1,2,3].map(d=>i.boneIndexMap.get(`pelvicFin_${t}_${d}`)),c=i.boneIndexMap.get("tail_3"),h=new E(s*.1,.54,-1.56),u=[{rA:a[0],tA:r[0],rB:a[1],tB:r[1],iA:l[0],iB:l[1]},{rA:a[1],tA:r[1],rB:a[2],tB:r[2],iA:l[1],iB:l[2]},{rA:a[2],tA:r[2],rB:h,tB:h,iA:l[2],iB:c}];for(const d of u)o.push(zs(n,n,(f,g)=>{const v=new E().lerpVectors(d.rA,d.tA,g),m=new E().lerpVectors(d.rB,d.tB,g),p=new E().lerpVectors(v,m,f),x=new E().subVectors(d.rA,p).normalize();p.addScaledVector(x,.042*Math.sin(f*Math.PI)*Math.pow(g,2.1));const w=Be([d.iA,d.iB,0,0],[1-f,f,0,0]);return{pos:p,skin:w,thinness:.4+.55*g}}));return Ve(o)}function uv(i,t){const e=t===0?12:7,n=t===0?8:6,s=[];return is.forEach((o,a)=>{const r=`tailFin_R_${a+1}`,l=new E(-o.rootX,o.rootY,o.rootZ),c=new E(-o.tipX,o.tipY,o.tipZ);s.push(xo(i,[l,c],[r],[.014,.0038],e,n,.52))}),s}function dv(i,t){const e=t===0?12:7,n=[];for(let h=0;h<4;h++){const u=is[h],d=is[h+1],f=new E(-u.rootX,u.rootY,u.rootZ),g=new E(-d.rootX,d.rootY,d.rootZ),v=new E(-u.tipX,u.tipY,u.tipZ),m=new E(-d.tipX,d.tipY,d.tipZ),p=i.boneIndexMap.get(`tailFin_R_${h+1}`),x=i.boneIndexMap.get(`tailFin_R_${h+2}`);n.push(zs(e,e,(w,_)=>{const A=new E().lerpVectors(f,v,_),y=new E().lerpVectors(g,m,_),S=new E().lerpVectors(A,y,w),T=new E().lerpVectors(f,g,w),b=new E().subVectors(T,S).normalize();S.addScaledVector(b,.046*Math.sin(w*Math.PI)*Math.pow(_,2.15));const M=Be([p,x,0,0],[1-w,w,0,0]);return{pos:S,skin:M,thinness:.45+.55*_}}))}const s=is[4],o=new E(-s.rootX,s.rootY,s.rootZ),a=new E(-s.tipX,s.tipY,s.tipZ),r=new E(-s.rootX,s.rootY,-4.5),l=i.boneIndexMap.get("tailFin_R_5"),c=i.boneIndexMap.get("tailFinHinge_R");return n.push(zs(e,e,(h,u)=>{const d=new E().lerpVectors(o,a,u),f=new E().lerpVectors(d,r,h),g=Be([l,c,0,0],[1-h,h,0,0]);return{pos:f,skin:g,thinness:.45+.5*u}})),Ve(n)}function zs(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const f=d/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),p=d*(i+1)+g;s[p*3]=m.pos.x,s[p*3+1]=m.pos.y,s[p*3+2]=m.pos.z,o[p*2]=v*1.25,o[p*2+1]=f*1.25,a[p*4]=.22,a[p*4+1]=0,a[p*4+2]=.18*m.thinness,a[p*4+3]=m.thinness,r.set(m.skin.indices,p*4),l.set(m.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let f=0;f<i;f++){const g=d*(i+1)+f,v=(d+1)*(i+1)+f,m=(d+1)*(i+1)+(f+1),p=d*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=p}const u=new Zt;return u.setAttribute("position",new Z(s,3)),u.setAttribute("uv",new Z(o,2)),u.setAttribute("uv1",new Z(o,2)),u.setAttribute("aAnatomyData",new Z(a,4)),u.setAttribute("skinIndex",new ye(r,4)),u.setAttribute("skinWeight",new Qt(l,4)),u.setIndex(new Z(c,1)),u.computeVertexNormals(),u}function pv(i,t){const e=t===0?32:t===1?22:14,n=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],s=n.map(_=>i.boneIndexMap.get(_)),o=n.map(_=>i.bindWorldPositions.get(_)),a=e*2,r=6,l=8,c=new Float32Array(a*r*3),h=new Float32Array(a*r*3),u=new Float32Array(a*r*2),d=new Float32Array(a*r*4),f=new Uint16Array(a*r*4),g=new Float32Array(a*r*4),v=new Uint16Array(a*l*3);let m=0,p=0;for(let _=0;_<e;_++){const A=_/(e-1),y=q.lerp(-3.25,1.48,1-Math.pow(1-A,1.28)),S=Mr(y),T=S.point,b=S.tangent,M=S.up,P=.32+.68*Math.sin(Math.pow(A,.74)*Math.PI),C=.078*P,R=.108*P,L=-.028,D=gu(T,i,s,o);for(const U of[1,-1]){const z=U*.004,N=U*C*.62,H=-C*.16,V=Mr(y+R*.5).point,$=Mr(y-R*.5).point,K=[V.clone().addScaledVector(M,L).setX(z),$.clone().addScaledVector(M,L).setX(z),T.clone().addScaledVector(M,L*.85).setX(U*.02*P),T.clone().addScaledVector(b,R*.1).addScaledVector(M,C*.64).setX(z*1.2),T.clone().addScaledVector(b,-R*.4).addScaledVector(M,C).setX(z*1.1),T.clone().addScaledVector(b,-R*.12).addScaledVector(M,C*.42).setX(U*.001)],X=K.map((O,J)=>{const lt=O.clone();if(J>=3){const j=J===4?1:J===3?.68:.48;lt.x+=N*j,lt.y+=H*j}return lt});for(let O=0;O<r;O++){const J=(m+O)*3;c[J]=K[O].x,c[J+1]=K[O].y,c[J+2]=K[O].z,h[J]=X[O].x,h[J+1]=X[O].y,h[J+2]=X[O].z,u[(m+O)*2]=A,u[(m+O)*2+1]=O/r,d[(m+O)*4]=.75,d[(m+O)*4+1]=0,d[(m+O)*4+2]=O===5||O>=3?.96:.72,d[(m+O)*4+3]=0,f.set(D.indices,(m+O)*4),g.set(D.weights,(m+O)*4)}const G=U>0?[[0,2,3],[2,1,4],[2,4,3],[0,3,5],[5,3,4],[5,4,1],[0,5,1],[0,1,2]]:[[0,3,2],[2,4,1],[2,3,4],[0,5,3],[5,4,3],[5,1,4],[0,1,5],[0,2,1]];for(const O of G)v[p++]=m+O[0],v[p++]=m+O[1],v[p++]=m+O[2];m+=r}}const x=new Zt;x.setAttribute("position",new Z(c,3)),x.setAttribute("uv",new Z(u,2)),x.setAttribute("uv1",new Z(u,2)),x.setAttribute("aAnatomyData",new Z(d,4)),x.setAttribute("skinIndex",new ye(f,4)),x.setAttribute("skinWeight",new Qt(g,4)),x.setIndex(new Z(v,1));const w=new Z(h,3);return w.name="dorsalVSplit",x.morphAttributes.position=[w],x.computeVertexNormals(),x}function fv(i,t,e,n){const s=i.bindWorldPositions.get(`wingWrist_${t}`),o=s.clone().add(new E(e*.035,.018,.085));return xo(i,[s,o],[`wingWrist_${t}`],[.016,.003],n===0?7:4,n===0?8:6,.8)}function mv(i,t){const e=[],n=[],s=[],o=i.boneIndexMap.get("prostheticCollar"),a=i.boneIndexMap.get("prostheticRod"),r=i.boneIndexMap.get("tail_8"),l=i.boneIndexMap.get("tail_9"),c=i.boneIndexMap.get("tail_10"),h=t===0?20:12,u=[{z:-3.48,y:.125,rOuter:.066,length:.044,boneIdx:o},{z:-3.56,y:.125,rOuter:.062,length:.04,boneIdx:o},{z:-4.34,y:.128,rOuter:.033,length:.032,boneIdx:c}];for(const y of u)e.push(oo(new E(0,y.y,y.z-y.length*.5),new E(0,y.y,y.z+y.length*.5),y.rOuter,y.rOuter*1.03,h,y.boneIdx));e.push(oo(new E(.044,.138,-3.6),new E(.048,.142,-3.46),.024,.028,t===0?14:8,o));const d=t===0?16:8;e.push(ah(new E(.038,.138,-3.52),new E(.02,.138,-4.34),.012,.0085,d,t===0?12:8,[a,l,c])),n.push(ah(new E(.026,.126,-3.5),new E(.014,.127,-4.35),.014,.009,d,t===0?10:6,[r,l,c]));const f=[],g=[],v=[];is.forEach((y,S)=>{const T=`tailFin_L_${S+1}`,b=i.boneIndexMap.get(T),M=new E(y.rootX,y.rootY,y.rootZ),P=new E(y.tipX,y.tipY,y.tipZ);f.push(M),g.push(P),v.push(b),n.push(_u(M,P,.0125,.004,t===0?10:6,t===0?10:6,b,b));const C=new E().subVectors(P,M).normalize();e.push(oo(M.clone(),M.clone().addScaledVector(C,.026),.0155,.0145,t===0?10:6,b)),e.push(oo(P.clone().addScaledVector(C,-.012),P.clone().addScaledVector(C,.02),.0055,.0018,t===0?8:6,b))});for(let y=1;y<=4;y++){const S=y/5,T=new E().lerpVectors(f[0],g[0],S);e.push(oo(T.clone().add(new E(0,-.0055,0)),T.clone().add(new E(0,.0055,0)),.006,.006,8,v[0]))}const m=t===0?12:7;for(let y=0;y<4;y++){const S=f[y],T=f[y+1],b=g[y],M=g[y+1],P=v[y],C=v[y+1];s.push(oh(m,y,(R,L)=>{const D=new E().lerpVectors(S,b,L),U=new E().lerpVectors(T,M,L),z=new E().lerpVectors(D,U,R),N=new E().lerpVectors(S,T,R),H=new E().subVectors(N,z).normalize();z.addScaledVector(H,.046*Math.sin(R*Math.PI)*Math.pow(L,2.15));const V=Be([P,C,0,0],[1-R,R,0,0]);return{pos:z,skin:V}}))}const p=f[4],x=g[4],w=new E(p.x,p.y,-4.5),_=v[4],A=i.boneIndexMap.get("tailFinHinge_L");return s.push(oh(m,4,(y,S)=>{const T=new E().lerpVectors(p,x,S),b=new E().lerpVectors(T,w,y),M=Be([_,A,0,0],[1-y,y,0,0]);return{pos:b,skin:M}})),{bronzeHardwareGeometry:Ve(e),ironStrutsGeometry:Ve(n),scalePasteMembraneGeometry:Ve(s)}}function oh(i,t,e){const n=(i+1)*(i+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=i;d++){const f=d/i;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),p=d*(i+1)+g;s[p*3]=m.pos.x,s[p*3+1]=m.pos.y,s[p*3+2]=m.pos.z,o[p*2]=(t+v)*.45,o[p*2+1]=f*1.2,a[p*4]=.55,a[p*4+3]=.25,r.set(m.skin.indices,p*4),l.set(m.skin.weights,p*4)}}const c=new Uint16Array(i*i*6);let h=0;for(let d=0;d<i;d++)for(let f=0;f<i;f++){const g=d*(i+1)+f,v=(d+1)*(i+1)+f,m=(d+1)*(i+1)+(f+1),p=d*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=p}const u=new Zt;return u.setAttribute("position",new Z(s,3)),u.setAttribute("uv",new Z(o,2)),u.setAttribute("uv1",new Z(o,2)),u.setAttribute("aAnatomyData",new Z(a,4)),u.setAttribute("skinIndex",new ye(r,4)),u.setAttribute("skinWeight",new Qt(l,4)),u.setIndex(new Z(c,1)),u.computeVertexNormals(),u}function oo(i,t,e,n,s,o){return _u(i,t,e,n,3,s,o,o)}function _u(i,t,e,n,s,o,a,r){const c=new E().subVectors(t,i).clone().normalize();let h=new E(0,1,0);Math.abs(c.dot(h))>.92&&(h=new E(0,0,1));const u=h.clone().addScaledVector(c,-h.dot(c)).normalize(),d=new E().crossVectors(u,c).normalize(),f=(s+1)*(o+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),p=new Uint16Array(f*4),x=new Float32Array(f*4);for(let y=0;y<=s;y++){const S=y/s,T=new E().lerpVectors(i,t,S),b=q.lerp(e,n,S),M=y===0||y===s?.35:1;for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=T.clone().addScaledVector(d,b*M*Math.sin(R)).addScaledVector(u,b*M*Math.cos(R)),D=y*(o+1)+P;g[D*3]=L.x,g[D*3+1]=L.y,g[D*3+2]=L.z,v[D*2]=S,v[D*2+1]=C;const U=Be([a,r,0,0],[1-S,S,0,0]);p.set(U.indices,D*4),x.set(U.weights,D*4)}}const w=new Uint16Array(s*o*6);let _=0;for(let y=0;y<s;y++)for(let S=0;S<o;S++){const T=y*(o+1)+S,b=(y+1)*(o+1)+S,M=(y+1)*(o+1)+(S+1),P=y*(o+1)+(S+1);w[_++]=T,w[_++]=b,w[_++]=M,w[_++]=T,w[_++]=M,w[_++]=P}const A=new Zt;return A.setAttribute("position",new Z(g,3)),A.setAttribute("uv",new Z(v,2)),A.setAttribute("uv1",new Z(v,2)),A.setAttribute("aAnatomyData",new Z(m,4)),A.setAttribute("skinIndex",new ye(p,4)),A.setAttribute("skinWeight",new Qt(x,4)),A.setIndex(new Z(w,1)),A.computeVertexNormals(),A}function ah(i,t,e,n,s,o,a){const r=new E().subVectors(t,i).normalize(),l=new E(0,1,0).addScaledVector(r,-r.y).normalize(),c=new E().crossVectors(l,r).normalize(),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4);for(let w=0;w<=s;w++){const _=w/s,A=new E().lerpVectors(i,t,_),y=q.lerp(e,n,_),S=Math.max(0,1-_*2),T=Math.max(0,(_-.5)*2),b=1-S-T,M=Be([a[0],a[1],a[2],0],[S,b,T,0]);for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=A.clone().addScaledVector(c,y*Math.sin(R)).addScaledVector(l,y*Math.cos(R)),D=w*(o+1)+P;u[D*3]=L.x,u[D*3+1]=L.y,u[D*3+2]=L.z,d[D*2]=_,d[D*2+1]=C,g.set(M.indices,D*4),v.set(M.weights,D*4)}}const m=new Uint16Array(s*o*6);let p=0;for(let w=0;w<s;w++)for(let _=0;_<o;_++){const A=w*(o+1)+_,y=(w+1)*(o+1)+_,S=(w+1)*(o+1)+(_+1),T=w*(o+1)+(_+1);m[p++]=A,m[p++]=y,m[p++]=S,m[p++]=A,m[p++]=S,m[p++]=T}const x=new Zt;return x.setAttribute("position",new Z(u,3)),x.setAttribute("uv",new Z(d,2)),x.setAttribute("uv1",new Z(d,2)),x.setAttribute("aAnatomyData",new Z(f,4)),x.setAttribute("skinIndex",new ye(g,4)),x.setAttribute("skinWeight",new Qt(v,4)),x.setIndex(new Z(m,1)),x.computeVertexNormals(),x}function gv(){const i=O1(),t=X1(),e=new Zn;e.name="Toothless_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s={},o={};for(const r of[0,1,2]){const l=new Zn;l.name=`Toothless_LOD${r}`;const c=q1(i,r),h=J1(i,r),u=av(i,r),d=mv(i,r),f=Ve([c,h.jawSkinGeometry,u.wingSparsSkinGeometry]),g=Ve([h.clawsGeometry,u.alulaClawsGeometry]),v=(D,U,z,N=!0,H=!0)=>{const V=new tu(U,z);return V.name=`${D}_LOD${r}`,V.castShadow=N,V.receiveShadow=H,V.frustumCulled=!1,V.bind(i.skeleton,new ce),V},m=v("BodyAndHeadSkin",f,t.skinMaterial),p=v("FlightPatagiumMembranes",u.wingMembraneGeometry,t.wingMembraneMaterial),x=v("VSplittingDorsalSpines",u.dorsalSpinesGeometry,t.skinMaterial);n.push(x);const w=v("OralGums",h.oralGumsGeometry,t.oralGumMaterial,!1,!0),_=v("RetractableTeeth",h.teethGeometry,t.teethMaterial,!0,!0),A=v("ArticulatedTongue",h.tongueGeometry,t.tongueMaterial,!1,!0),y=v("LightReactiveIrises",h.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),S=v("RefractiveCorneas",h.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1);S.renderOrder=2;const T=v("ObsidianClaws",g,t.clawMaterial,!0,!0),b=v("ProstheticBronzeLinkage",d.bronzeHardwareGeometry,t.prostheticBronzeMaterial),M=v("ProstheticIronStruts",d.ironStrutsGeometry,t.prostheticIronMaterial),P=v("ProstheticScalePasteFin",d.scalePasteMembraneGeometry,t.prostheticPasteMaterial),C=[m,p,x,w,_,A,y,S,T,b,M,P];let R=0,L=0;for(const D of C){l.add(D);const U=D.geometry.getIndex();R+=U?U.count/3:D.geometry.getAttribute("position").count/3,L+=D.geometry.getAttribute("position").count}l.visible=r===0,e.add(l),s[r]=l,o[r]={lod:r,triangles:Math.round(R),vertices:L,subMeshCount:C.length}}const a={rootGroup:e,rig:i,materials:t,lodGroups:s,dorsalSpineMeshes:n,lodStats:o,activeLOD:0,autoLOD:!1,setActiveLOD(r){a.activeLOD=r;for(const l of[0,1,2])s[l].visible=l===r},updateAutoLOD(r){if(!a.autoLOD)return a.activeLOD;const l=r<9.5?0:r<20?1:2;return l!==a.activeLOD&&a.setActiveLOD(l),a.activeLOD}};return a}function Ao(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},r=i[0].morphTargetsRelative,l=new Zt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=rh(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);const g=rh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function rh(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const a=new t(o),r=new Z(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);r.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(r.gpuType=s),r}const Ds={"golden-hour":{id:"golden-hour",label:"Golden Hour",subtitle:"Warm Berk Sunset",sunElevationDeg:11.5,sunAzimuthDeg:-140,zenithColor:1517638,horizonSunColor:14255183,horizonAntiSunColor:4938872,mieHaloColor:16754776,mieStrength:.62,mieExponent:6.5,sunLightColor:16760698,sunLightIntensity:3.75,rimLightColor:7645928,rimLightIntensity:1.55,hemiSkyColor:9811164,hemiGroundColor:3550505,hemiIntensity:1.12,cloudDarkColor:2763581,cloudLitColor:15899230,cloudCoverage:.46,mistDensity:.0021,rainIntensity:.36,exposure:1.14,nightFactor:0,auroraIntensity:0,waterDeepColor:332061,waterShallowColor:735294,glitterIntensity:4.8},"clear-day":{id:"clear-day",label:"Clear Day",subtitle:"Crisp Nordic Sun",sunElevationDeg:44,sunAzimuthDeg:-124,zenithColor:1854342,horizonSunColor:10208486,horizonAntiSunColor:8564696,mieHaloColor:16774110,mieStrength:.26,mieExponent:8,sunLightColor:16774630,sunLightIntensity:3.55,rimLightColor:10143989,rimLightIntensity:1.65,hemiSkyColor:11852026,hemiGroundColor:3490360,hemiIntensity:1.38,cloudDarkColor:6980254,cloudLitColor:16777215,cloudCoverage:.26,mistDensity:.0013,rainIntensity:0,exposure:1.1,nightFactor:0,auroraIntensity:0,waterDeepColor:268848,waterShallowColor:808032,glitterIntensity:3.6},"dawn-dusk":{id:"dawn-dusk",label:"Dawn / Dusk",subtitle:"Alpenglow Twilight",sunElevationDeg:4.8,sunAzimuthDeg:-148,zenithColor:1448248,horizonSunColor:14184040,horizonAntiSunColor:4081256,mieHaloColor:16749688,mieStrength:.58,mieExponent:5.8,sunLightColor:16752260,sunLightIntensity:2.85,rimLightColor:8295650,rimLightIntensity:1.65,hemiSkyColor:9212620,hemiGroundColor:2761776,hemiIntensity:1.15,cloudDarkColor:2302008,cloudLitColor:15367800,cloudCoverage:.42,mistDensity:.0024,rainIntensity:.24,exposure:1.18,nightFactor:.22,auroraIntensity:0,waterDeepColor:396828,waterShallowColor:1190972,glitterIntensity:4.2},"misty-overcast":{id:"misty-overcast",label:"Misty Cloud",subtitle:"Nordic Sea Fog",sunElevationDeg:31,sunAzimuthDeg:-130,zenithColor:4411744,horizonSunColor:9280166,horizonAntiSunColor:7767444,mieHaloColor:13161694,mieStrength:.18,mieExponent:3.5,sunLightColor:14477039,sunLightIntensity:2.05,rimLightColor:10796760,rimLightIntensity:1.85,hemiSkyColor:11978452,hemiGroundColor:3028792,hemiIntensity:1.55,cloudDarkColor:4543072,cloudLitColor:10135733,cloudCoverage:.86,mistDensity:.0042,rainIntensity:.58,exposure:1.16,nightFactor:0,auroraIntensity:0,waterDeepColor:529950,waterShallowColor:1456188,glitterIntensity:1.25},"starlit-night":{id:"starlit-night",label:"Starlit Night",subtitle:"Moon & Boreal Glow",sunElevationDeg:29,sunAzimuthDeg:-136,zenithColor:330520,horizonSunColor:1452614,horizonAntiSunColor:858670,mieHaloColor:7250652,mieStrength:.3,mieExponent:9,sunLightColor:11062527,sunLightIntensity:2.35,rimLightColor:6071538,rimLightIntensity:1.95,hemiSkyColor:4220052,hemiGroundColor:1317926,hemiIntensity:1.08,cloudDarkColor:594207,cloudLitColor:2901608,cloudCoverage:.24,mistDensity:.0018,rainIntensity:.16,exposure:1.26,nightFactor:1,auroraIntensity:.65,waterDeepColor:132880,waterShallowColor:466476,glitterIntensity:3.4},"stormy-squall":{id:"stormy-squall",label:"Storm Squall",subtitle:"Dark North Gale",sunElevationDeg:18,sunAzimuthDeg:-138,zenithColor:1317926,horizonSunColor:4938088,horizonAntiSunColor:2634818,mieHaloColor:9348280,mieStrength:.28,mieExponent:4.5,sunLightColor:11979484,sunLightIntensity:2.45,rimLightColor:7313604,rimLightIntensity:1.8,hemiSkyColor:6979736,hemiGroundColor:1844264,hemiIntensity:1.25,cloudDarkColor:1383719,cloudLitColor:6189186,cloudCoverage:.92,mistDensity:.0036,rainIntensity:1,exposure:1.18,nightFactor:0,auroraIntensity:0,waterDeepColor:265492,waterShallowColor:797746,glitterIntensity:2.1}},En=`
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

  // Evaluates clean, continuous sky + perspective cloud radiance (100% seamless across rawDir.y = 0, ZERO horizon dark strip, NaN-proof at nadir!)
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

    // Smooth azimuthal warm/cool gradient around the 360-deg horizon
    vec2 horizDir = length(dir.xz) > 1e-5 ? normalize(dir.xz) : vec2(0.0, -1.0);
    vec2 horizSun = length(sunN.xz) > 1e-5 ? normalize(sunN.xz) : vec2(0.0, -1.0);
    float azim = dot(horizDir, horizSun) * 0.5 + 0.5;
    vec3 horizBase = mix(uHorizonAntiColor, uHorizonSunColor, smoothstep(0.08, 0.95, azim));

    // Rayleigh vertical gradient from zenith down to horizon
    float horizonCurve = pow(max(1.0 - elev, 1e-5), 3.1);
    vec3 sky = mix(uZenithColor, horizBase, horizonCurve);

    // Anisotropic Mie forward-scattering solar/lunar glow
    sky += uMieColor * pow(max(sunDot, 1e-5), max(uMieExponent, 1.0)) * uMieStrength * (0.35 + 0.65 * pow(max(1.0 - elev, 1e-5), 1.6));

    // Crisp Starfield + Subtle Authentic Aurora Borealis (when uNightFactor > 0)
    if (includeStarsAndDisc && uNightFactor > 0.01 && dir.y > 0.02) {
      float horizonFade = smoothstep(0.02, 0.24, dir.y);
      // 3D-projected seamless star grid
      vec2 starUv = dir.xz / (dir.y + 0.35) * 140.0;
      vec2 starCell = floor(starUv);
      vec2 starFrac = fract(starUv) - 0.5;
      float sSeed = skyHash21(starCell);
      if (sSeed > 0.965) {
        vec2 jitter = vec2(skyHash21(starCell + 7.1), skyHash21(starCell + 13.7)) - 0.5;
        float dStar = length(starFrac - jitter * 0.65);
        float twinkle = 0.72 + 0.28 * sin(timeSec * (1.8 + sSeed * 3.0) + sSeed * 40.0);
        float starBright = smoothstep(0.09, 0.008, dStar) * twinkle * smoothstep(0.965, 0.999, sSeed);
        vec3 starTint = mix(vec3(0.78, 0.88, 1.0), vec3(1.0, 0.92, 0.82), skyHash21(starCell + 3.3));
        sky += starTint * starBright * 1.45 * uNightFactor * horizonFade * (1.0 - uCloudCoverage * 0.85);
      }

      // Delicate, authentic Nordic Aurora Borealis curtain high in the sky
      if (uAuroraIntensity > 0.01) {
        vec2 aurUv = dir.xz / (dir.y + 0.28);
        float curtainWave = aurUv.x * 1.4 + sin(aurUv.y * 1.8 + timeSec * 0.05) * 0.55;
        float band = exp(-pow((curtainWave - 0.35) / 0.42, 2.0));
        float rays = skyFbm(vec2(curtainWave * 4.5 + timeSec * 0.03, aurUv.y * 1.6 - timeSec * 0.02));
        float aurMask = band * smoothstep(0.38, 0.82, rays) * smoothstep(0.10, 0.42, dir.y) * smoothstep(0.92, 0.48, dir.y);
        vec3 aurCol = mix(vec3(0.08, 0.58, 0.42), vec3(0.22, 0.36, 0.68), clamp((dir.y - 0.18) * 2.2, 0.0, 1.0));
        sky += aurCol * aurMask * uAuroraIntensity * 0.52 * (1.0 - uCloudCoverage * 0.7);
      }
    }

    // Continuous Perspective Cloud Deck: naturally foreshortens into delicate horizon strata as dir.y -> 0,
    // fading cleanly into the exact local sky+Mie radiance with ZERO dark/white horizon bands!
    if (dir.y > 0.004 && uCloudCoverage > 0.01) {
      vec2 cUv = dir.xz / (dir.y + 0.14) * 0.92 + vec2(timeSec * 0.0055, timeSec * 0.0028);
      float n1 = skyFbm(cUv);
      float n2 = skyFbm(cUv * 2.35 - vec2(timeSec * 0.003, 0.0));
      float cField = n1 * 0.72 + n2 * 0.28;

      float thresh = mix(0.68, 0.24, uCloudCoverage);
      float cloudHorizonFade = smoothstep(0.008, 0.15, dir.y);
      float cMask = smoothstep(thresh, thresh + 0.34, cField) * cloudHorizonFade;

      float sunLining = pow(max(sunDot, 1e-5), 3.2) * (1.0 - uCloudCoverage * 0.35);
      float thickness = smoothstep(thresh, thresh + 0.42, cField);
      vec3 cCol = mix(uCloudLitColor, uCloudDarkColor, thickness * 0.68);
      cCol += uMieColor * sunLining * 0.35;
      // Blend distant low-angle clouds toward local sky (including Mie glow!) so they never create dark bands above the horizon!
      cCol = mix(sky, cCol, smoothstep(0.015, 0.20, dir.y));
      sky = mix(sky, cCol, cMask * min(0.92, 0.45 + uCloudCoverage * 0.52));
    }

    // Crisp Solar or Lunar Disc (bounded below harsh bloom blowout)
    if (includeStarsAndDisc) {
      float discRadius = mix(0.99935, 0.99945, uNightFactor);
      float disc = smoothstep(discRadius, discRadius + 0.00035, sunDot) * (1.0 - uCloudCoverage * 0.78) * smoothstep(0.0, 0.04, dir.y);
      vec3 discCol = mix(uMieColor * 1.85, vec3(1.15, 1.24, 1.38), uNightFactor);
      sky += discCol * disc;
    }

    // Only during offscreen PMREM cubemap baking (uIsEnvBake > 0.5), gently dim steep downward rays for realistic ocean/ground bounce!
    if (uIsEnvBake > 0.5 && normRaw.y < 0.0) {
      vec3 seaBounce = mix(horizBase * 0.78, uZenithColor * 0.36, clamp(-normRaw.y * 2.4, 0.0, 1.0));
      sky = mix(sky, seaBounce, smoothstep(0.08, 0.42, -normRaw.y));
    }

    return clamp(sky, vec3(0.0), vec3(24.0));
  }

  // Evaluates exact matching sky/horizon radiance along any view ray (100% NaN-safe even looking straight down at nadir!)
  vec3 evalHorizonHazeColor(vec3 viewRayDir) {
    vec2 hz = viewRayDir.xz;
    float hzLen = length(hz);
    vec3 rayDir = hzLen > 1e-5 ? vec3(hz.x / hzLen, 0.0, hz.y / hzLen) : vec3(0.0, 0.0, -1.0);
    return evalPhysicalSky(rayDir, uTime, false);
  }
`,vv=`
  varying vec3 vWorldDir;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldDir = normalize(position);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,_v=`
  ${En}
  varying vec3 vWorldDir;

  void main() {
    vec3 col = evalPhysicalSky(vWorldDir, uTime, true);
    gl_FragColor = vec4(col, 1.0);
  }
`;function xv(i,t,e="golden-hour"){const n=new E,s=new Ht,o=Ds[e],a={uSunDir:{value:new E(-.52,.24,-.82).normalize()},uSunColor:{value:new Ht(o.sunLightColor)},uZenithColor:{value:new Ht(o.zenithColor)},uHorizonSunColor:{value:new Ht(o.horizonSunColor)},uHorizonAntiColor:{value:new Ht(o.horizonAntiSunColor)},uMieColor:{value:new Ht(o.mieHaloColor)},uMieStrength:{value:o.mieStrength},uMieExponent:{value:o.mieExponent},uCloudDarkColor:{value:new Ht(o.cloudDarkColor)},uCloudLitColor:{value:new Ht(o.cloudLitColor)},uCloudCoverage:{value:o.cloudCoverage},uMistDensity:{value:o.mistDensity},uRainIntensity:{value:o.rainIntensity},uNightFactor:{value:o.nightFactor},uAuroraIntensity:{value:o.auroraIntensity},uWaterDeepColor:{value:new Ht(o.waterDeepColor)},uWaterShallowColor:{value:new Ht(o.waterShallowColor)},uGlitterIntensity:{value:o.glitterIntensity},uIsEnvBake:{value:0},uTime:{value:0}},r=new wa(3900,64,44),l=new ke({name:"NordicPhysicalSky",vertexShader:vv,fragmentShader:_v,uniforms:a,side:_n,depthWrite:!1,depthTest:!1}),c=new Ne(r,l);c.renderOrder=-100,c.frustumCulled=!1,t.add(c);const h=new bc(o.sunLightColor,o.sunLightIntensity);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=1,h.shadow.camera.far=54;const u=13.8;h.shadow.camera.left=-u,h.shadow.camera.right=u,h.shadow.camera.top=u,h.shadow.camera.bottom=-u,h.shadow.bias=-4e-4,h.shadow.normalBias=.018,t.add(h),t.add(h.target);const d=new bc(o.rimLightColor,o.rimLightIntensity);d.position.set(5.8,4.4,5.4),t.add(d);const f=new mp(o.hemiSkyColor,o.hemiGroundColor,o.hemiIntensity);t.add(f);const g=new Sl(o.horizonAntiSunColor,o.mistDensity);t.fog=g;const v=new _a,m=new Ne(new wa(50,32,20),l);v.add(m);const p=new cl(i);p.compileEquirectangularShader();let x=null,w=o.sunAzimuthDeg;function _(S){const T=p.fromScene(v,.015);x&&x.dispose(),x=T,S.environment=x.texture}function A(S,T){const b=q.degToRad(q.clamp(S,1.5,82)),M=q.degToRad(T);n.set(Math.cos(b)*Math.sin(M),Math.sin(b),Math.cos(b)*Math.cos(M)).normalize(),a.uSunDir.value.copy(n),h.position.copy(h.target.position).addScaledVector(n,20)}const y={skyMesh:c,sunLight:h,rimLight:d,hemiLight:f,sunDirection:n,sunColor:s,activePreset:e,sharedUniforms:a,applyPreset(S,T,b){const M=Ds[S];y.activePreset=S,w=M.sunAzimuthDeg,a.uZenithColor.value.setHex(M.zenithColor),a.uHorizonSunColor.value.setHex(M.horizonSunColor),a.uHorizonAntiColor.value.setHex(M.horizonAntiSunColor),a.uMieColor.value.setHex(M.mieHaloColor),a.uMieStrength.value=M.mieStrength,a.uMieExponent.value=M.mieExponent,a.uCloudDarkColor.value.setHex(M.cloudDarkColor),a.uCloudLitColor.value.setHex(M.cloudLitColor),a.uCloudCoverage.value=M.cloudCoverage,a.uMistDensity.value=M.mistDensity,a.uRainIntensity.value=M.rainIntensity,a.uNightFactor.value=M.nightFactor,a.uAuroraIntensity.value=M.auroraIntensity,a.uWaterDeepColor.value.setHex(M.waterDeepColor),a.uWaterShallowColor.value.setHex(M.waterShallowColor),a.uGlitterIntensity.value=M.glitterIntensity,s.setHex(M.sunLightColor),a.uSunColor.value.copy(s),h.color.copy(s),h.intensity=M.sunLightIntensity,d.color.setHex(M.rimLightColor),d.intensity=M.rimLightIntensity,f.color.setHex(M.hemiSkyColor),f.groundColor.setHex(M.hemiGroundColor),f.intensity=M.hemiIntensity,g.color.setHex(M.horizonAntiSunColor).lerp(new Ht(M.horizonSunColor),.35),g.density=M.mistDensity,T.toneMappingExposure=M.exposure,A(M.sunElevationDeg,M.sunAzimuthDeg),_(b)},setMistDensity(S,T){const b=q.clamp(S,5e-4,.0075);a.uMistDensity.value=b,g.density=b},setRainIntensity(S){a.uRainIntensity.value=q.clamp(S,0,1)},setSunElevation(S,T,b){A(S,w),_(b)},update(S,T,b){a.uTime.value=S,b&&c.position.copy(b),T&&(h.target.position.copy(T),h.position.copy(T).addScaledVector(n,20),h.target.updateMatrixWorld())}};return y.applyPreset(e,i,t),y}const lo={waveAmplitude:1,waveSpeed:1,seaChoppiness:.48},Mv=`
  uniform float uTime;
  uniform float uWaveAmp;
  uniform float uWaveSpeed;
  uniform float uChoppiness;
  uniform vec4 uStackCenters[24];

  varying vec3 vWorldPos;
  varying vec3 vMacroNormal;
  varying float vWaveHeight;
  varying float vCrestFactor;
  varying float vGroupEnergy;

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
    float pinch = clamp(uChoppiness * 0.76, 0.0, 0.86);
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
    float farDampLong = 1.0 - smoothstep(380.0, 1080.0, effDist);
    float farDampCross = 1.0 - smoothstep(240.0, 680.0, effDist);
    float farDampChop = 1.0 - smoothstep(110.0, 340.0, effDist);
    float t = uTime * uWaveSpeed;

    // 1. Irregular Swell Wave-Packet Envelopes ("Seventh-Wave" swell sets vs calmer lulls!)
    float swellSetA = ocFbm2(wp.xz * 0.011 - vec2(t * 0.042, t * 0.028));
    float swellSetB = ocFbm2(wp.xz * 0.023 + vec2(t * 0.031, -t * 0.048) + 19.4);
    float groupA = mix(0.42, 1.42, smoothstep(0.18, 0.84, swellSetA));
    float groupB = mix(0.38, 1.36, smoothstep(0.20, 0.82, swellSetB));

    // 2. Coastal Shoaling & Island Lee-Shadowing around archipelago islands!
    float coastalShelter = 1.0;
    for (int i = 0; i < 12; i++) {
      vec4 sc = uStackCenters[i];
      if (sc.z <= 0.1) continue;
      float d = length(wp.xz - sc.xy) - sc.z;
      // Gentle shoaling steepening near reefs, slight lee damping inside sheltered coves/lagoons
      coastalShelter *= mix(0.74, 1.0, smoothstep(-6.0, 18.0, d));
    }

    // 3. Domain-warped wave coordinates so crests curve, bend, fork & refract naturally (NEVER straight ruler lines!)
    vec2 swellWarp = vec2(
      ocFbm2(wp.xz * 0.016 + vec2(t * 0.018, -t * 0.014)) - 0.5,
      ocFbm2(wp.xz * 0.016 + vec2(-t * 0.015, t * 0.021) + 31.7) - 0.5
    ) * 22.0;
    vec2 chopWarp = vec2(
      ocNoise2(wp.xz * 0.055 + t * 0.08) - 0.5,
      ocNoise2(wp.xz * 0.055 - t * 0.07 + 11.3) - 0.5
    ) * 6.5;

    vec2 pPrimary = wp.xz + swellWarp;
    vec2 pCross = wp.xz - swellWarp * 0.75 + chopWarp;

    vec3 disp = vec3(0.0);
    vec2 slopeXZ = vec2(0.0);

    float envPrimary = farDampLong * groupA * coastalShelter;
    float envCross = farDampCross * groupB * coastalShelter;
    float envChop = farDampChop * mix(0.55, 1.35, swellSetB) * (0.38 + 0.92 * uChoppiness);

    // Primary North Atlantic irregular long swell train
    accumTrochoidalWave(pPrimary, vec2(0.81, 0.58), 0.19, 48.0, 1.00, t, envPrimary, disp, slopeXZ);
    accumTrochoidalWave(pPrimary, vec2(0.64, 0.77), 0.15, 29.0, 1.06, t + 4.1, envPrimary * 0.92, disp, slopeXZ);
    // Crossed fjord-refraction swell train creating natural diamond/3D interference peaks!
    accumTrochoidalWave(pCross, vec2(-0.52, 0.85), 0.16, 24.5, 1.09, t + 1.7, envCross, disp, slopeXZ);
    accumTrochoidalWave(pCross, vec2(0.28, -0.96), 0.12, 16.2, 1.16, t + 8.3, envCross * 0.88, disp, slopeXZ);
    // Mid-scale irregular wind-waves & turbulent currents
    accumTrochoidalWave(wp.xz + chopWarp, vec2(-0.88, -0.47), 0.10, 10.4, 1.24, t, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz - chopWarp, vec2(0.59, -0.80), 0.08, 6.7, 1.34, t + 2.9, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz + chopWarp * 0.5, vec2(-0.24, 0.97), 0.06, 4.1, 1.44, t + 5.6, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz, vec2(0.93, -0.36), 0.045, 2.7, 1.54, t + 3.2, envChop * 0.85, disp, slopeXZ);

    // Subtle low-frequency tidal surge & irregular ocean current heave
    float currentUndulation = (swellSetA - 0.5) * 0.55 * uWaveAmp * farDampLong;
    disp.y += currentUndulation;

    wp.xyz += disp;
    vMacroNormal = normalize(vec3(-slopeXZ.x, 1.0, -slopeXZ.y));
    vWaveHeight = disp.y;
    vCrestFactor = clamp((disp.y / max(0.24, 1.25 * uWaveAmp)) * 0.5 + 0.5, 0.0, 1.0);
    vGroupEnergy = clamp(0.5 * (groupA + groupB) - 0.35, 0.0, 1.0);
    vWorldPos = wp.xyz;

    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,wv=`
  ${En}

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

  float waterMicroDetail(vec2 p, float distScale) {
    float t = uTime * uWaveSpeed;
    float chop = 0.25 + 1.15 * uChoppiness;
    float amp = (0.22 + 0.74 * clamp(uWaveAmp, 0.05, 2.2)) * distScale;

    // Domain-warped wind streaks & Langmuir current bands so ripples vary across the sea!
    vec2 flow = vec2(
      skyFbm(p * 0.045 + vec2(t * 0.03, -t * 0.02)) - 0.5,
      skyFbm(p * 0.045 - vec2(t * 0.02, t * 0.03) + 7.7) - 0.5
    ) * 4.2;
    vec2 pw = p + flow;

    float h = 0.0;
    h += sin(dot(pw, vec2(0.32, 0.21)) - t * 1.55) * 0.22;
    h += sin(dot(pw, vec2(-0.26, 0.37)) - t * 2.05) * 0.17;
    h += sin(dot(pw, vec2(0.51, -0.44)) - t * 2.65) * 0.11 * chop;
    h += (skyFbm(pw * 0.44 + vec2(t * 0.36, -t * 0.24)) - 0.5) * 0.38 * chop;
    h += (skyNoise2(pw * 2.35 - vec2(t * 0.92, t * 0.68)) - 0.5) * 0.11 * chop;
    h += (skyNoise2(pw * 6.40 + vec2(t * 1.42, -t * 1.05)) - 0.5) * 0.034 * chop * distScale;
    return h * amp;
  }

  void main() {
    vec2 p = vWorldPos.xz;
    vec3 toCam = cameraPosition - vWorldPos;
    float dist = length(toCam);
    vec3 V = toCam / max(dist, 1e-4);
    vec3 L = normalize(uSunDir);

    float detailFade = 1.0 - smoothstep(55.0, 480.0, dist);
    // Irregular wind-catspaw roughness patches (glassy current slicks vs wind-rippled patches!)
    float windCatspaw = mix(0.52, 1.28, smoothstep(0.25, 0.78, skyFbm(p * 0.018 + vec2(uTime * 0.025, -uTime * 0.018))));
    float localDetail = detailFade * windCatspaw;

    float eps = mix(0.14, 1.15, smoothstep(15.0, 420.0, dist));
    float hC = waterMicroDetail(p, localDetail);
    float hX = waterMicroDetail(p + vec2(eps, 0.0), localDetail);
    float hZ = waterMicroDetail(p + vec2(0.0, eps), localDetail);

    vec3 microN = normalize(vec3(hC - hX, eps * 1.92, hC - hZ));
    vec3 combinedN = normalize(vec3(vMacroNormal.x + microN.x * localDetail, vMacroNormal.y, vMacroNormal.z + microN.z * localDetail));
    vec3 N = normalize(mix(vec3(0.0, 1.0, 0.0), combinedN, 1.0 - smoothstep(220.0, 820.0, dist)));

    vec3 R = reflect(-V, N);
    // Smooth grazing horizon clamp: NEVER use abs(R.y), which flipped wave back-slopes up into dark overhead zenith sky!
    R.y = mix(0.005, R.y, smoothstep(-0.02, 0.14, R.y));
    R = normalize(R);

    // Grazing wave-slope masking: at distance, wave crests occlude steep front troughs so effective Fresnel follows macro grazing V.y!
    float localCos = clamp(dot(N, V), 0.0, 1.0);
    float macroCos = clamp(V.y, 0.0, 1.0);
    float effectiveCos = mix(localCos, macroCos, smoothstep(130.0, 520.0, dist));
    float fresnel = 0.028 + 0.972 * pow(max(1.0 - effectiveCos, 1e-5), 4.8);

    // Coastal shoaling tint & surf around all 24 archipelago islands, crescents, lagoons & sea-stacks!
    float foamLace = skyFbm(p * 0.88 + vec2(uTime * 0.20 * uWaveSpeed, -uTime * 0.14 * uWaveSpeed));
    float spumeCells = skyNoise2(p * 3.1 - vec2(uTime * 0.42 * uWaveSpeed, 0.0));

    float coastalSurf = 0.0;
    float shoalGlow = 0.0;
    for (int i = 0; i < 24; i++) {
      vec4 sc = uStackCenters[i];
      if (sc.z <= 0.01) continue;
      float d = length(p - sc.xy) - sc.z;
      if (d < 24.0 && d > -12.0) {
        shoalGlow = max(shoalGlow, smoothstep(24.0, -4.0, d));
        if (d < 12.5 && d > -5.0) {
          float warpD = d + (foamLace - 0.5) * 2.8;
          float surge1 = sin(warpD * 1.48 - uTime * (1.65 + uWaveSpeed * 0.82)) * 0.5 + 0.5;
          float surge2 = sin(warpD * 2.85 + uTime * 1.18) * 0.5 + 0.5;
          float collar = smoothstep(9.2, 0.4, warpD) * smoothstep(-3.4, 0.15, warpD);
          float intensityBoost = sc.w > 0.5 ? 1.58 : 1.0;
          coastalSurf += collar * intensityBoost * (0.36 + 0.64 * surge1 * (0.6 + 0.4 * surge2)) * (0.45 + 0.55 * spumeCells) * (0.45 + 0.55 * clamp(uWaveAmp, 0.25, 1.6));
        }
      }
    }

    // Water body + shallow glacial shoal aquamarine shift + backlit wave-crest subsurface scatter!
    vec3 shoalTint = uWaterShallowColor * vec3(0.95, 1.24, 1.18);
    vec3 baseBody = mix(uWaterDeepColor, uWaterShallowColor, vCrestFactor * 0.48);
    vec3 waterBody = mix(baseBody, shoalTint, shoalGlow * 0.55);

    float sunBacklit = pow(max(clamp(dot(V, -vec3(L.x, L.y * 0.35, L.z)), 0.0, 1.0), 1e-5), 2.6);
    float thinCrest = smoothstep(0.46, 0.96, vCrestFactor) * clamp(uWaveAmp, 0.15, 1.9);
    vec3 crestSSS = uWaterShallowColor * 1.68 * thinCrest * (0.28 + 0.85 * sunBacklit) * (1.0 - uNightFactor * 0.55);

    vec3 skyReflect = evalPhysicalSky(R, uTime, false);
    // Softly lift deep-water body shadow at far distances so high-altitude / low-mist views never form a dark band below the horizon!
    vec3 farWaterScatter = mix(waterBody + crestSSS, skyReflect * 0.72, smoothstep(320.0, 1450.0, dist));
    vec3 col = mix(farWaterScatter, skyReflect, fresnel);

    // Dual-lobe solar / lunar glitter path modulated by wind catspaws (NaN-safe anti-sun half-vector!)
    vec3 halfSum = L + V;
    vec3 H = dot(halfSum, halfSum) > 1e-6 ? normalize(halfSum) : vec3(0.0, 1.0, 0.0);
    float ndoth = max(clamp(dot(N, H), 0.0, 1.0), 1e-5);
    float specPowerTight = mix(440.0, 105.0, smoothstep(35.0, 520.0, dist));
    float specTight = pow(ndoth, specPowerTight) * (0.30 + 0.70 * localDetail) * (1.0 - smoothstep(420.0, 1200.0, dist));
    float specBroad = pow(ndoth, 36.0) * (0.35 + 0.65 * localDetail) * (1.0 - smoothstep(420.0, 1550.0, dist));
    col += uSunColor * (specTight * uGlitterIntensity + specBroad * uGlitterIntensity * 0.09);

    // Irregular wave-group whitecaps & wind-driven Langmuir foam streaks!
    float langmuirStreak = smoothstep(0.62, 0.92, skyFbm(vec2(p.x * 0.18 + p.y * 0.06, p.y * 0.28 - p.x * 0.08) + uTime * 0.06));
    float openSeaWhitecap =
      smoothstep(0.72 - uChoppiness * 0.24 - vGroupEnergy * 0.08, 0.97, vCrestFactor + (foamLace - 0.5) * 0.38) *
      uChoppiness *
      (0.55 + 0.65 * vGroupEnergy) *
      clamp(uWaveAmp * 0.84, 0.0, 1.40) *
      (0.42 + 0.58 * spumeCells) +
      langmuirStreak * uChoppiness * clamp(uWaveAmp - 0.4, 0.0, 1.2) * 0.14 * spumeCells;

    float totalFoam = clamp((openSeaWhitecap + coastalSurf) * (1.0 - smoothstep(240.0, 760.0, dist)), 0.0, 0.90);
    vec3 foamAmbient = mix(uHorizonAntiColor, uHorizonSunColor, 0.45) * 1.25 + uSunColor * 0.32;
    col = mix(col, foamAmbient, totalFoam);

    // Gradual aerial perspective convergence to exact horizon sky (100% pixel-identical to skydome at every angle & altitude!)
    vec3 exactHorizonSky = evalHorizonHazeColor(-toCam);
    float aerialExtinction = 1.0 - exp(-pow(max(uMistDensity * dist, 1e-6), 1.24));
    float distRimFeather = smoothstep(1650.0, 5100.0, dist);
    float outerRimFeather = smoothstep(2400.0, 5350.0, length(p));
    float horizonBlend = clamp(max(aerialExtinction, max(distRimFeather, outerRimFeather)), 0.0, 1.0);
    col = mix(col, exactHorizonSky, horizonBlend);

    // Physical coastal water clarity ONLY in shallow near-island reefs (< 165m);
    // mid & far ocean is 100% opaque (alpha = 1.0) so underwater geometry never bleeds through from high viewpoints!
    float nearShoalClarity = shoalGlow * (1.0 - smoothstep(75.0, 165.0, dist)) * (1.0 - fresnel) * (1.0 - totalFoam);
    float waterAlpha = mix(1.0, 0.80, clamp(nearShoalClarity, 0.0, 1.0));
    waterAlpha = mix(waterAlpha, 1.0, horizonBlend);

    gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), clamp(waterAlpha, 0.80, 1.0));
  }
`;function yv(i=5600,t=300,e=256){const n=(t+1)*(e+1),s=new Float32Array(n*3),o=new Float32Array(n*2);for(let c=0;c<=t;c++){const h=c/t,u=i*Math.pow(h,2.3);for(let d=0;d<=e;d++){const g=d/e*Math.PI*2,v=Math.cos(g)*u,m=Math.sin(g)*u,p=c*(e+1)+d;s[p*3]=v,s[p*3+1]=0,s[p*3+2]=m,o[p*2]=v*.02,o[p*2+1]=m*.02}}const a=new Uint32Array(t*e*6);let r=0;for(let c=0;c<t;c++)for(let h=0;h<e;h++){const u=c*(e+1)+h,d=(c+1)*(e+1)+h,f=(c+1)*(e+1)+(h+1),g=c*(e+1)+(h+1);a[r++]=u,a[r++]=f,a[r++]=d,a[r++]=u,a[r++]=g,a[r++]=f}const l=new Zt;return l.setAttribute("position",new Z(s,3)),l.setAttribute("uv",new Z(o,2)),l.setIndex(new Z(a,1)),l.computeBoundingSphere(),l}function bv(i,t,e){const n={...lo,...e},s=[];for(let c=0;c<24;c++){const h=i[c];h?s.push(new ze(h.x,h.z,h.radius,h.boost??0)):s.push(new ze(9999,9999,0,0))}const o={...t,uWaveAmp:{value:n.waveAmplitude},uWaveSpeed:{value:n.waveSpeed},uChoppiness:{value:n.seaChoppiness},uStackCenters:{value:s}},a=yv(5600,300,256),r=new ke({name:"NorthSeaPhysicalOcean",vertexShader:Mv,fragmentShader:wv,uniforms:o,transparent:!0,depthWrite:!0}),l=new Ne(a,r);return l.position.y=-11.5,l.renderOrder=2,l.frustumCulled=!1,l.name="NorthSeaOcean",{mesh:l,params:n,setOceanParams(c){Object.assign(n,c),o.uWaveAmp.value=n.waveAmplitude,o.uWaveSpeed.value=n.waveSpeed,o.uChoppiness.value=n.seaChoppiness},update(c){o.uTime.value=c}}}const ge=-11.5,Sv=-25.5,vi=-44;function Av(i){return i-Math.floor(i)}function ft(i,t){return Av(Math.sin(i*127.1+t*311.7)*43758.5453123)}function xu(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,a=s*s*s*(s*(s*6-15)+10),r=o*o*o*(o*(o*6-15)+10),l=ft(e,n),c=ft(e+1,n),h=ft(e,n+1),u=ft(e+1,n+1);return l+(c-l)*a+(h-l)*r+(l-c-h+u)*a*r}function ue(i,t,e=4){let n=0,s=.5,o=1;for(let a=0;a<e;a++)n+=s*xu(i*o,t*o),o*=2.03,s*=.5;return n}function oe(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Ge(i,t,e=2){let n=0,s=1,o=.56,a=1,r=0;for(let l=0;l<e;l++){const c=xu(i*a,t*a)*2-1,h=1-(Math.sqrt(c*c+.068)-.261)/.78,u=Math.max(0,Math.min(1,h));n+=o*u*s,r+=o,s=.55+.45*u,a*=2.03,o*=.46}return n/Math.max(1e-4,r)}function Mo(i,t,e,n,s=999){if(i<=.4)return i;const o=(i+t)/e,a=Math.floor(o),r=o-a,l=.38*Math.pow(r,1.28)+.62*oe(.64,.96,r),c=(a+l)*e-t,h=1-oe(s*.74,s*.95,i);return q.lerp(i,c,n*h)}function Fa(i,t,e,n,s,o){const a=Math.max(0,Math.min(1,e)),r=Math.sin(a*Math.PI),l=ue(n*.052+o*1.3,s*.052-o*1.7,3)-.5,c=Ge(n*.115-o*2.1,s*.115+o*1.4,2)-.48,h=Ge((n*.86+s*.5)*.17+o*2.9,(s*.86-n*.5)*.14-o,2)-.48,u=ue(n*.24+o*.9,s*.24-o*2.3,2)-.5,d=q.clamp(a-(l*.4+c*.28+h*.18+u*.12)*r,0,1),f=oe(.24,.72,ue(n*.058+o*1.7,s*.058-o*1.3,2)),g=.36+.26*(ue(n*.085-o,s*.085+o,2)-.5),v=oe(0,.38,d),m=oe(.58,1,d),p=v*g+m*(1-g),x=Math.pow(d,.78),w=q.lerp(x,p,f*.82),_=Ge(n*.14+o*2.1,s*.14-o*1.9,2),A=ue(n*.27-o,s*.27+o*2.3,2)-.5,y=((_-.48)*3.4+A*2.05+h*1.65)*r,S=ue(n*.095+o*3.1,s*.095-o*2.7,3),T=oe(.42,.78,S)*oe(.62,.86,a)*(1-oe(.95,1,a)),b=ge+.25+(S-.5)*1.85;let M=q.lerp(i,t,w)+y;return M=q.lerp(M,Math.max(M,b),T*.82),Math.min(i+.04,Math.max(t-1.2,M))}function Ul(i,t,e,n){const s=(Ge(i*.16+n,t*.16-n,2)-.48)*.68+(ue(i*.32-n*1.3,t*.32+n*.7,2)-.5)*.28,o=i*.024-t*.019+(ue(i*.045+n,t*.045,2)-.5)*1.4,a=(e+o)/2.65,r=a-Math.floor(a),l=(oe(.1,.36,r)-r)*.34,c=Math.exp(-Math.pow((e-(ge-.45))/1.9,2))*.62;return{radialOffset:s+l+c,verticalLedgeOffset:l*.42}}const Gn={position:new E(4.45,0,.22),yaw:-.14},Xn={position:new E(-4.45,0,-.22),yaw:.16};function pi(i,t){const e=Math.hypot((i-4.45)/2.45,(t-.22)/1.95),n=Math.hypot((i+4.45)/2.45,(t+.22)/1.95),s=Math.min(e,n),o=oe(.84,1.32,s),a=oe(.72,1.18,s),r=(ue(i*.065+3.1,t*.065-2.4,3)-.5)*5.6+(Ge(i*.14-1.7,t*.14+4.3,2)-.48)*2.3,l=(ue(i*.065-5.2,t*.065+1.9,3)-.5)*4.8+(Ge(i*.15+2.9,t*.15-3.1,2)-.48)*2.1,c=i+a*r,h=t+a*l,u=Math.atan2(h+4.2,c),d=t>1.2?.66:t<-8?1.52:1+(-t+1.2)*.046,f=1+.19*Math.sin(u*2-.42)+.14*Math.sin(u*3+.72)+.1*Math.cos(u*5-1.15)+.06*Math.sin(u*7+.4),g=c/(15.8*f),v=(h+4.2)/(11.2*d*f);let m=Math.sqrt(g*g+v*v);if(t>.6){const H=Math.exp(-Math.pow((i-4.85)/2.65,2)-Math.pow((t-3.9)/3.4,2))*.21,V=Math.exp(-Math.pow((i+5.15)/2.75,2)-Math.pow((t-3.6)/3.2,2))*.19,$=Math.exp(-Math.pow((i-.35)/1.75,2)-Math.pow((t-2.9)/2.8,2))*.17,K=Math.exp(-Math.pow((i-10.6)/2.4,2)-Math.pow((t-2.2)/3.2,2))*.18,X=Math.exp(-Math.pow((i+9.2)/1.9,2)-Math.pow((t-2.4)/2.9,2))*.15,G=(Ge(i*.26+7.4,t*.26-3.8,2)-.48)*.11*oe(1.1,2.4,t);m+=-H-V+$-K+X+G}let p=0;if(t<-3.5){const H=(c+17.5)/15.4,V=(h+25)/18.8,$=Math.sqrt(H*H+V*V),K=$*(.92+.16*ue(i*.065+2.2,t*.065-1.4,3)),X=Math.max(0,1-Math.abs(m-K)/.52);m=Math.min(m,K)-.11*X*X;const G=Math.min(1,$/.98*($/.98)),O=Math.pow(Math.max(0,1-G),1.18),J=q.clamp(.62-H*.38-V*.22,.26,1.12),lt=O*J*(7.8+2.4*Ge(i*.05+5.1,t*.05-3.2,2));p=Mo(lt,i*.04-t*.03,3.6,.52)}if(i>9&&t<-6.5){const H=(i-18.2)/6.2,V=(t+19.2)/7.2,$=Math.exp(-(H*H+V*V))*.36;m+=$}const x=1-.78*oe(-.4,4.2,t)*(1-oe(4.2,11.8,Math.abs(i))),w=((ue(i*.095+4.2,t*.095-1.7,3)-.47)*1.35+(Ge(i*.15-2.3,t*.15+6.1,2)-.48)*.52)*o*x,_=Math.max(0,(-t-6.2)/25),A=Math.pow(Math.min(1.22,_),1.32)/(1+.22*_*_),y=oe(39,9,Math.abs(i+3.2)),S=Ge(i*.046+1.8,t*.042-2.7,2),T=A*y*(7.4+6.4*S+(ue(i*.075-3.4,t*.075+1.9,2)-.5)*2.8),b=Mo(T,i*.045+t*.028,4,.56,13.5),M=w+Math.max(b,p*o),C=.76+(.13*(Ge(i*.12+3.7,t*.12-2.1,2)-.48)+.09*(ue(Math.cos(u)*2.6+2.1,Math.sin(u)*2.6-1.3,3)-.5))*a;if(m<=C)return M;const R=1.48+.24*(ue(Math.cos(u)*2.2-4.1,Math.sin(u)*2.2+3.3,2)-.5),L=oe(C,R,m),D=oe(R-.08,R+.78,m),U=ue(i*.08+5.7,t*.08-4.3,2),z=ge-1.35+oe(.45,.85,U)*1.95,N=Fa(M,z,L,i,t,7.3);return q.lerp(N,vi,D)}function Hi(i){const t=Math.cos(i.rotRad),e=Math.sin(i.rotRad),n=i.summitOffset?.dx??i.rx*.24*Math.sin(i.seed),s=i.summitOffset?.dz??i.rz*-.2*Math.cos(i.seed*1.3),o=i.seed*1.37,a=Math.cos(o),r=Math.sin(o);return(l,c)=>{const h=l-i.cx,u=c-i.cz,d=h*t-u*e,f=h*e+u*t,g=d+(ue(d*.042+i.seed,f*.042-i.seed,3)-.5)*(i.rx*.48)+(Ge(d*.095+i.seed,f*.095,2)-.48)*(i.rx*.18),v=f+(ue(d*.042-i.seed,f*.042+i.seed,3)-.5)*(i.rz*.48)+(Ge(d*.095-i.seed,f*.095+2.1,2)-.48)*(i.rz*.18),m=Math.atan2(v,g),p=1+.21*Math.sin(m*2+i.seed)+.15*Math.cos(m*3-i.seed*1.5)+.1*Math.sin(m*5+.9)+.06*Math.cos(m*7-i.seed*.6);let w=Math.sqrt(Math.pow(g/(i.rx*p),2)+Math.pow(v/(i.rz*p),2));const _=(g-n)*-r+(v-s)*a,A=(g-n)*a+(v-s)*r,y=Math.pow(_/(i.rx*p*1.28),2)+Math.pow(A/(i.rz*p*.88),2),S=(d*a+f*r)/Math.max(8,i.rx),T=q.clamp(.62+.38*S,.3,1.12),b=Math.pow(Math.max(0,1-Math.min(1,y)),1.38),M=1/(1+1.85*y*y);let P=i.peakY*(.2+.5*b*T+.24*M);if(i.secondaryLobe){const j=i.secondaryLobe,Q=g-j.dx,W=v-j.dz,it=Math.atan2(W,Q),St=1+.18*Math.cos(it*2-i.seed)+.12*Math.sin(it*3+i.seed),et=Math.sqrt(Math.pow(Q/(j.rx*St),2)+Math.pow(W/(j.rz*St),2)),k=j.lowSaddle?.44:.38,wt=Math.max(0,Math.min(1,.5+.5*(et-w)/k));w=et*(1-wt)+w*wt-k*wt*(1-wt);const at=i.peakY*Math.min(j.peakScale,1.06),yt=Math.min(1,et*et),dt=Math.pow(Math.max(0,1-yt),1.35),Ut=at*(.22+.68*dt),Pt=j.lowSaddle?Math.sin(wt*Math.PI)*.44:Math.sin(wt*Math.PI)*.22;P=q.lerp(Ut,P,wt)*(1-Pt)}const C=1-oe(.56,1.02,w),R=Ge(d*.032+i.seed*1.3,f*.038-i.seed*.9,2),L=ue(d*.045-i.seed*.7,f*.045+i.seed*1.4,3),D=P+(R-.48)*(i.peakY*.18)*(.35+.65*C)+(L-.48)*(i.peakY*.12)*C;let U=Mo(D,d*.032*a+f*.032*r,Math.max(3.8,i.peakY*.22),.48,i.peakY),z=0;if(i.carveRiverToEast&&d>4.2){const j=Math.sin(d*.11+.35)*1.85,Q=Math.abs(f-j),W=oe(5.2,8.8,d)*(1-oe(.95,3.8,Q));if(W>.001){const et=8.35-oe(5.5,10.4,d)*.75;U=q.lerp(U,Math.min(U,et),W)}const it=(ue(d*.18+3.1,f*.18-1.9,2)-.5)*1.35,St=Math.exp(-Math.pow((f-j+it*.35)/7.8,2));if(St>.02&&d>7.2){const et=10.55-1.15*St+it*.35;z=oe(et-.6,et+.9,d)*St,w=Math.max(w,.72+oe(et-.2,et+1.15,d)*.72*St)}}const H=.66+(.13*(Ge(d*.1+i.seed,f*.1-i.seed,2)-.48)+.1*(ue(Math.cos(m)*2.5+i.seed,Math.sin(m)*2.5-i.seed,3)-.5))*(1-z*.65);if(w<=H)return U;const V=1.06+.18*(ue(Math.cos(m)*2.3-i.seed,Math.sin(m)*2.3+i.seed,2)-.5),$=q.lerp(V,H+.09,z),K=oe(H,$,w),X=oe(q.lerp(V-.06,H+.07,z),q.lerp(V+.34,H+.24,z),w),G=ue(l*.075+i.seed,c*.075-i.seed,2),O=ge-1.35+oe(.44,.84,G)*1.95,J=q.lerp(O,ge-5.8,z),lt=z>.35?q.lerp(U,J,Math.pow(q.clamp(K+(ue(l*.16,c*.16,2)-.5)*.18*Math.sin(K*Math.PI),0,1),.68)):Fa(U,J,K,l,c,i.seed);return q.lerp(lt,vi,X)}}function kl(i){return(t,e)=>{const n=t-i.cx,s=e-i.cz,o=n+(ue(n*.038+i.seed,s*.038-i.seed,3)-.5)*(i.ringRadius*.34)+(Ge(n*.085+i.seed,s*.085,2)-.48)*3.8,a=s+(ue(n*.038-i.seed,s*.038+i.seed,3)-.5)*(i.ringRadius*.34)+(Ge(n*.085-i.seed,s*.085+1.7,2)-.48)*3.8,r=Math.hypot(o,a),l=Math.atan2(a,o),c=i.openAngleRad+Math.PI;let h=l-c;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const u=Math.abs(h),d=1-oe(i.arcHalfSpanRad*.72,i.arcHalfSpanRad*1.08,u),f=i.ringHalfWidth*(.72+.42*d+.18*Math.sin(h*2.6+i.seed)),g=r-i.ringRadius*1.06,v=g>=0?f*.72:f*1.28,p=Math.abs(g)/Math.max(3.5,v)+(1-d)*1.35,x=.72+.2*Math.cos(h*2.2+i.seed*.7)+.11*Math.sin(h*3.6-i.seed),w=Ge(n*.036+i.seed,s*.036-i.seed,2),_=Math.min(1,p/.94*(p/.94)),A=g<0?Math.pow(Math.max(0,1-_),1.45):Math.pow(Math.max(0,1-_),1.05),y=i.peakY*(.24+.72*A)*(.58+.42*d)*x+(w-.48)*(i.peakY*.16)*d,S=Mo(y,n*.03-s*.025,Math.max(3.6,i.peakY*.22),.46,i.peakY),T=(1-oe(i.ringRadius*.55,i.ringRadius*1.15,r))*.65,b=q.lerp(vi,-16.2,T),M=.54+.13*(Ge(n*.095+i.seed,s*.095-i.seed,2)-.48)+.08*(ue(n*.06-i.seed,s*.06+i.seed,2)-.5);if(p<=M)return S;const P=1.06+.16*(ue(Math.cos(l)*2.4+i.seed,Math.sin(l)*2.4,2)-.5),C=oe(M,P,p),R=oe(P-.06,P+.34,p),L=ue(t*.08+i.seed,e*.08-i.seed,2),D=ge-1.35+oe(.45,.84,L)*1.9,U=Fa(S,D,C,t,e,i.seed);return q.lerp(U,b,R)}}const ui=Hi({cx:-66,cz:-32,rx:21.5,rz:25,peakY:18.4,summitOffset:{dx:-3.5,dz:-7.5},seed:5.7,rotRad:.18,secondaryLobe:{dx:-24.5,dz:-11.5,rx:17.5,rz:19.5,peakScale:1.24},carveRiverToEast:!0}),zl=kl({cx:88,cz:36,ringRadius:28,ringHalfWidth:12.6,peakY:16.8,openAngleRad:-2.45,arcHalfSpanRad:1.92,seed:22.9}),Bl=Hi({cx:88,cz:-56,rx:25,rz:31.5,peakY:22.4,summitOffset:{dx:4.2,dz:-6},seed:14.3,rotRad:-.34,secondaryLobe:{dx:-18,dz:33.5,rx:15,rz:17,peakScale:.74,lowSaddle:!0}}),Mu=Hi({cx:-124,cz:-86,rx:33,rz:24.5,peakY:25.5,summitOffset:{dx:-7.5,dz:3},seed:37.8,rotRad:.42,secondaryLobe:{dx:21,dz:-10.5,rx:16.5,rz:15,peakScale:.72}}),wu=Hi({cx:-42,cz:-96,rx:17.5,rz:19.5,peakY:20.2,seed:31.6,rotRad:-.28,secondaryLobe:{dx:-19.5,dz:14,rx:12.5,rz:14,peakScale:.74}}),yu=Hi({cx:36,cz:-108,rx:19.5,rz:22,peakY:22.8,seed:44.1,rotRad:.52,secondaryLobe:{dx:18.5,dz:-14.5,rx:13.5,rz:15,peakScale:.78}}),Tv=kl({cx:-144,cz:78,ringRadius:38,ringHalfWidth:15.5,peakY:23.8,openAngleRad:.62,arcHalfSpanRad:1.84,seed:58.4}),Ev=Hi({cx:168,cz:122,rx:38,rz:32,peakY:29.5,seed:71.2,rotRad:-.48,secondaryLobe:{dx:-36,dz:-18,rx:24,rz:22,peakScale:.76}}),Cv=Hi({cx:-206,cz:-96,rx:42,rz:46,peakY:36.5,seed:83.9,rotRad:-.19,secondaryLobe:{dx:28,dz:34,rx:23,rz:25,peakScale:.7}}),Pv=kl({cx:-8,cz:-222,ringRadius:52,ringHalfWidth:19.5,peakY:33.5,openAngleRad:1.52,arcHalfSpanRad:1.8,seed:96.3}),Rv=Hi({cx:-18,cz:236,rx:34,rz:26,peakY:25.5,seed:109.7,rotRad:.15,secondaryLobe:{dx:38,dz:-12,rx:22,rz:18,peakScale:.78}}),dl=[{name:"WestWaterfallDoubleIsland",centerX:-74,centerZ:-36,spanX:112,spanZ:102,gridSegs:168,hasFlora:!0,evalHeight:ui},{name:"StarboardCrescentLagoonAtoll",centerX:88,centerZ:36,spanX:124,spanZ:124,gridSegs:164,hasFlora:!0,evalHeight:zl},{name:"EastSerpentineTomboloIsland",centerX:84,centerZ:-46,spanX:118,spanZ:134,gridSegs:156,hasFlora:!0,evalHeight:Bl},{name:"WestTraelanipaTableIsland",centerX:-124,centerZ:-86,spanX:116,spanZ:102,gridSegs:132,hasFlora:!0,evalHeight:Mu},{name:"NorthWestHolmPair",centerX:-48,centerZ:-92,spanX:92,spanZ:86,gridSegs:112,hasFlora:!0,evalHeight:wu},{name:"NorthEastHeadlandTable",centerX:42,centerZ:-112,spanX:94,spanZ:90,gridSegs:112,hasFlora:!1,evalHeight:yu},{name:"SouthWestBrokenCrescent",centerX:-144,centerZ:78,spanX:156,spanZ:152,gridSegs:120,hasFlora:!1,evalHeight:Tv},{name:"SouthEastTableSound",centerX:156,centerZ:116,spanX:168,spanZ:152,gridSegs:112,hasFlora:!1,evalHeight:Ev},{name:"FarWestCliffMassif",centerX:-198,centerZ:-88,spanX:174,spanZ:168,gridSegs:108,hasFlora:!1,evalHeight:Cv},{name:"NorthernSoundCrescentIsland",centerX:-8,centerZ:-222,spanX:196,spanZ:166,gridSegs:112,hasFlora:!1,evalHeight:Pv},{name:"SouthHorizonHolms",centerX:-4,centerZ:232,spanX:166,spanZ:122,gridSegs:100,hasFlora:!1,evalHeight:Rv}],Ls=[{x:43.5,z:14.5,rx:4.8,rz:4.2,topY:4.6,topSlopeX:-.08,rotY:.45,seed:14.2},{x:63,z:50.5,rx:7.5,rz:5.2,topY:-8.2,topSlopeX:.05,rotY:-.35,seed:23.8},{x:27.5,z:-10.5,rx:5.4,rz:4.4,topY:1.8,topSlopeX:.07,rotY:.22,seed:31.4},{x:-37.5,z:-22,rx:6.2,rz:4.8,topY:2.6,topSlopeX:-.09,rotY:-.52,seed:42.7},{x:-46.5,z:-15.5,rx:5.2,rz:4.2,topY:-6.8,topSlopeX:-.06,rotY:.61,seed:55.3},{x:-106,z:-49,rx:7.8,rz:6,topY:6.4,topSlopeX:-.1,rotY:.18,seed:68.9},{x:57.5,z:-22.5,rx:6.4,rz:5,topY:-5.4,topSlopeX:.08,rotY:-.44,seed:79.1},{x:-21.5,z:-79,rx:7.2,rz:5.8,topY:5.2,topSlopeX:-.07,rotY:.33,seed:92.6}],co=[{x:59.5,z:23,rotY:-.58,halfLength:14.5,halfThickness:4.6,plateauTopY:6.8,openingHalfSpan:5.4,vaultCrownY:.4,seed:17.3},{x:-95.5,z:-22.5,rotY:.88,halfLength:13,halfThickness:4.4,plateauTopY:6.2,openingHalfSpan:4.8,vaultCrownY:-.2,seed:49.8}];function ei(i,t){let e=vi;Math.abs(i)<54&&t>-66&&t<40&&(e=Math.max(e,pi(i,t)));for(const n of dl)Math.abs(i-n.centerX)<=n.spanX*.52&&Math.abs(t-n.centerZ)<=n.spanZ*.52&&(e=Math.max(e,n.evalHeight(i,t)));for(const n of co)Math.hypot(i-n.x,t-n.z)<n.halfLength+5&&(e=Math.max(e,n.plateauTopY+1));for(const n of Ls){const s=Math.max(n.rx,n.rz),o=Math.hypot(i-n.x,t-n.z);if(o<s*1.45){const a=1-oe(.65,1.45,o/s);e=Math.max(e,vi+(n.topY-vi)*a)}}return e}function lh(i,t,e){i.computeVertexNormals();const n=i.getAttribute("position"),s=i.getAttribute("normal");for(let o=0;o<n.count;o++){const a=n.getX(o),r=n.getY(o),l=n.getZ(o),c=s.getX(o),h=s.getY(o),u=s.getZ(o);if(h>=.72||r<-23.5)continue;let d=1;if(e){const _=Math.hypot((a-4.45)/2.75,(l-.22)/2.25),A=Math.hypot((a+4.45)/2.75,(l+.22)/2.25);if(d=oe(.88,1.32,Math.min(_,A)),d<=.001)continue}const f=oe(.7,.22,h)*oe(-23.5,-16.5,r)*d;if(f<=.002)continue;const g=Math.hypot(c,u);if(g<1e-4)continue;const v=c/g,m=u/g,p=Ul(a,l,r,t),x=q.clamp(p.radialOffset*f,-.13,.19),w=q.clamp(p.verticalLedgeOffset*f,-.22,.22);n.setXYZ(o,a+v*x,r+w,l+m*x)}i.computeVertexNormals()}function Lv(i){const l=new Float32Array(28257),c=new Float32Array(9419*2);for(let g=0;g<=128;g++){const v=g/128,m=(v-.5)*2*i.halfLength,p=v<.5?-1:1,x=Math.min(v,1-v),w=Math.sin(v*Math.PI*1.65+i.seed)*2.65+Math.cos(v*Math.PI*2.9-i.seed*.7)*1.25+(ue(v*4.2+i.seed,1.7,3)-.5)*2.35,_=oe(0,.24,x),A=_+.085*Math.sin(_*Math.PI*3+i.seed*.8)*Math.sin(_*Math.PI),y=q.clamp(A,0,1),S=oe(0,.035,x),T=(.5-v)*2.2+Math.sin(v*Math.PI)*.85,b=(ue(m*.09+i.seed,w*.09,3)-.5)*1.35+(Ge(m*.08+i.seed,2.3,2)-.48)*.85,M=i.plateauTopY+T+b,P=q.lerp(ge-18.5,M,y),C=m-i.openingHalfSpan*.06,R=Math.abs(C)/i.openingHalfSpan,L=1-oe(.74,1.18,R),D=Math.pow(Math.max(0,1-Math.min(1,R*R)),.88),U=(ue(m*.35-i.seed,2.1,3)-.5)*.95,z=ge-5.2+(i.vaultCrownY+.35-(ge-5.2))*D+U,N=q.lerp(vi,z,L),H=1+.48*(1-L)+.34*Math.sin(v*Math.PI*3.6+i.seed*1.3)+.3*(ue(v*5.6+i.seed,6.2,3)-.5),V=i.halfThickness*H*(.28+.72*Math.pow(y,.65))*S;for(let $=0;$<=72;$++){const K=$/72,X=K*Math.PI*2,G=Math.sin(X),O=Math.cos(X),J=Math.sign(G)*Math.pow(Math.abs(G),.78),lt=.5+.5*Math.sign(O)*Math.pow(Math.abs(O),.7),j=Math.pow(Math.abs(G),.88)*S,Q=(.32-.42*J)*Math.max(0,O)*y;let W=q.lerp(N,P,lt)+Q;O<-.22&&L>.05&&(W+=(-O-.22)*(1-J*J)*1.15*L);const it=G>=0?i.seed+11.7:i.seed-19.3,St=(ue(m*.13+it,W*.1,3)-.48)*3.15+(Ge(m*.21-it,W*.085+m*.04,2)-.48)*1.95+Math.sin(m*.36+W*.18+it)*.65,et=Math.sin(W*1.05+m*.07+it)*.52+(Math.abs((W*.28+10)%1-.5)-.25)*.75,k=Math.exp(-Math.pow((W-(ge+.15))/2.3,2))*(1.95+1.25*ue(m*.18+it,3.7,2))*(1-L*.72)*S,wt=Ul(m,w+J*5,W,it),at=j*oe(-24,-14.5,W),yt=Math.max(0,V+k+(St+et+wt.radialOffset*1.05)*at),dt=(1-oe(.02,.3,x))*S,Ut=Math.pow(Math.max(0,1-Math.min(1,J*J*.85)),.75),Pt=1-.55*oe(ge-1,i.plateauTopY,W),B=p*dt*(3.8*Ut*Pt+(ue(W*.15+it,J*2.1+p*3.1,3)-.42)*2.85+(Ge(J*2.8-it,W*.12,2)-.45)*1.75),I=m+B+(ue(W*.14+it,v*4.8,3)-.5)*1.35*at,nt=w*S+J*yt,mt=W+wt.verticalLedgeOffset*.68*j*S,xt=g*73+$;l[xt*3]=I,l[xt*3+1]=mt,l[xt*3+2]=nt,c[xt*2]=v*3.8,c[xt*2+1]=K*2.6}}const h=9417,u=9418;l[h*3]=-i.halfLength,l[h*3+1]=ge-23,l[h*3+2]=0,c[h*2]=0,c[h*2+1]=.5,l[u*3]=i.halfLength,l[u*3+1]=ge-23,l[u*3+2]=0,c[u*2]=3.8,c[u*2+1]=.5;const d=[];for(let g=0;g<128;g++)for(let v=0;v<72;v++){const m=g*73+v,p=(g+1)*73+v,x=(g+1)*73+(v+1),w=g*73+(v+1);d.push(m,w,x,m,x,p)}for(let g=0;g<72;g++){d.push(h,g+1,g);const v=9344;d.push(u,v+g,v+g+1)}const f=new Zt;return f.setAttribute("position",new Z(l,3)),f.setAttribute("uv",new Z(c,2)),f.setIndex(d),f.computeVertexNormals(),f}function Iv(i){const r=new Float32Array(5808),l=new Float32Array(1936*2),c=Math.cos(i.rotY),h=Math.sin(i.rotY),u=(w,_,A,y)=>{const S=1+.18*Math.cos(A*3+i.seed+y*.9)+.14*Math.sin(A*5-i.seed*.8-y*1.2)+.09*Math.cos(A*7+i.seed*1.7),T=.84+.3*ue(w*1.8+i.seed,_*1.8+y*2.4,3);return{lx:w*i.rx*S*T,lz:_*i.rz*S*T}},f=i.topY>ge+4?.68:.42;for(let w=0;w<=42;w++){const _=w>36,A=Math.min(1,w/36),y=_?(w-36)/6:0;for(let S=0;S<=44;S++){const T=S/44,b=T*Math.PI*2,M=Math.cos(b),P=Math.sin(b),C=_?Math.cos(y*Math.PI*.5):1,R=_?Math.sin(y*Math.PI*.5)*f:0,L=u(M,P,b,A),D=(ue(L.lx*.18+i.seed,L.lz*.18-i.seed,2)-.5)*.85,U=i.topY+(L.lx*i.topSlopeX+D)*C,z=.034*Math.sin(A*18+i.seed+b*.5)*Math.sin(A*Math.PI),N=q.clamp(A+z,0,1),H=q.lerp(vi,U,N)+R,V=1.28-.3*Math.pow(A,.85)+.09*Math.cos(A*14+i.seed+P*1.4)+.06*Math.sin(b*4+A*9-i.seed),$=1+(.48+.24*P)*Math.exp(-Math.pow((H-(ge+.1))/2.1,2)),K=Ul(i.x+L.lx,i.z+L.lz,H,i.seed),X=oe(.12,.36,A)*(1-oe(.88,1,A))*C,G=V*$*C,O=L.lx*G+M*K.radialOffset*.92*X,J=L.lz*G+P*K.radialOffset*.92*X,lt=i.x+O*c-J*h,j=i.z+O*h+J*c,Q=w*45+S;r[Q*3]=lt,r[Q*3+1]=H,r[Q*3+2]=j,l[Q*2]=T*2.4,l[Q*2+1]=A*3+y*.4}}const g=1935;r[g*3]=i.x,r[g*3+1]=i.topY+f,r[g*3+2]=i.z,l[g*2]=.5,l[g*2+1]=3.5;const v=[],m=42;for(let w=0;w<m;w++)for(let _=0;_<44;_++){const A=w*45+_,y=(w+1)*45+_,S=(w+1)*45+(_+1),T=w*45+(_+1);v.push(A,y,S,A,S,T)}const p=m*45;for(let w=0;w<44;w++)v.push(g,p+w+1,p+w);const x=new Zt;return x.setAttribute("position",new Z(r,3)),x.setAttribute("uv",new Z(l,2)),x.setIndex(v),x.computeVertexNormals(),x}function Dv(){const i=[],t=a=>{const d=new Float32Array(822),f=new Float32Array(274*2),g=Math.cos(a.rotY),v=Math.sin(a.rotY);for(let y=0;y<=15;y++){const S=y>12,T=Math.min(1,y/12),b=S?(y-12)/3:0,M=S?Math.cos(b*Math.PI*.5):1,P=S?Math.sin(b*Math.PI*.5)*.22:0,C=(1.16-.18*T+.16*Math.exp(-Math.pow((T-.78)/.16,2))+.11*Math.sin(T*11.5+a.seed))*M,R=q.lerp(a.botY,a.topY-.22,T)+P,L=a.leanX*(T-.45),D=a.leanZ*(T-.45);for(let U=0;U<=16;U++){const z=U/16,N=z*Math.PI*2,H=Math.cos(N),V=Math.sin(N),$=.78+.38*ue(H*1.9+a.seed,V*1.9+T*2.6-a.seed,3)+.1*Math.cos(N*3+a.seed+T*2),K=H*a.rx*C*$,X=V*a.rz*C*$,G=a.x+L+K*g-X*v,O=a.z+D+K*v+X*g,J=y*17+U;d[J*3]=G,d[J*3+1]=R,d[J*3+2]=O,f[J*2]=z*1.8,f[J*2+1]=T*2.2+b*.3}}const m=15,p=(m+1)*17,x=p+1;d[p*3]=a.x-a.leanX*.45,d[p*3+1]=a.botY,d[p*3+2]=a.z-a.leanZ*.45,f[p*2]=.5,f[p*2+1]=0,d[x*3]=a.x+a.leanX*.55,d[x*3+1]=a.topY,d[x*3+2]=a.z+a.leanZ*.55,f[x*2]=.5,f[x*2+1]=2.5;const w=[];for(let y=0;y<m;y++)for(let S=0;S<16;S++){const T=y*17+S,b=(y+1)*17+S,M=(y+1)*17+(S+1),P=y*17+(S+1);w.push(T,b,M,T,M,P)}const _=m*17;for(let y=0;y<16;y++)w.push(p,y,y+1),w.push(x,_+y+1,_+y);const A=new Zt;return A.setAttribute("position",new Z(d,3)),A.setAttribute("uv",new Z(f,2)),A.setIndex(w),A.computeVertexNormals(),A},e=[];for(let a=0;a<34;a++)e.push(.14*Math.PI+a/33*.72*Math.PI);for(let a=0;a<24;a++)e.push(-.88*Math.PI+a/23*1*Math.PI);for(let a=0;a<e.length;a++){const r=e[a]+(ft(a,19.4)-.5)*.045,l=Math.cos(r),c=Math.sin(r);let h=-1,u=0;for(let _=4.5;_<=34;_+=.35){const A=l*_,y=-4.2+c*_,S=pi(A,y),T=pi(A+l*1.1,y+c*1.1);if(S>-2.6&&S-T>1.25){h=_,u=S;break}}if(h<0)continue;const d=l*h,f=-4.2+c*h,g=Math.hypot((d-4.45)/2.65,(f-.22)/2.15),v=Math.hypot((d+4.45)/2.65,(f+.22)/2.15);if(Math.min(g,v)<1.02)continue;const p=f>-.2&&Math.abs(d)<13.5?Math.min(-.1,u-.06):u-.08+(ft(a,31.7)-.5)*.28,x=Math.max(ge-2.6,p-(4.8+ft(a,43.2)*5.4));i.push(t({x:d+l*.62,z:f+c*.62,topY:p,botY:x,rx:1.15+ft(a,51.3)*1.55,rz:.92+ft(a,63.8)*1.25,rotY:r+(ft(a,71.9)-.5)*.8,leanX:l*(.3+ft(a,83.1)*.45),leanZ:c*(.3+ft(a,83.1)*.45),seed:10+a*3.7}));const w=Math.min(p-.9,ge+3.2+ft(a,104.2)*3.8);i.push(t({x:d+l*(1.85+ft(a,112.6)*1.45),z:f+c*(1.85+ft(a,112.6)*1.45),topY:w,botY:ge-3.6,rx:1.35+ft(a,124.5)*1.75,rz:1.05+ft(a,137.1)*1.45,rotY:r+(ft(a,149.8)-.5)*.6,leanX:-l*.22,leanZ:-c*.22,seed:200+a*5.3}))}const n=Math.cos(.18),s=Math.sin(.18);for(const a of[-1,1])for(let r=0;r<4;r++){const l=9.2+r*1.35,h=Math.sin(l*.11+.35)*1.85+a*(8.8+r*2.15),u=-66+l*n+h*s,d=-32-l*s+h*n,f=ui(u,d);if(f<ge+1.5)continue;const g=Math.min(8.2-r*.9,Math.max(ge+3.8,f-.2));i.push(t({x:u,z:d,topY:g,botY:ge-4.2,rx:1.55+ft(r+a*7,31.2)*1.05,rz:1.35+ft(r+a*7,57.9)*.95,rotY:.18+r*.5,leanX:n*.32,leanZ:-s*.32,seed:410+a*37+r*9.1}))}const o=[{cx:-68,cz:-33,maxR:42,rays:26,evalH:ui,skipWaterfallCorridor:!0,seedBase:520},{cx:88,cz:36,maxR:48,rays:28,evalH:zl,seedBase:640},{cx:84,cz:-46,maxR:48,rays:26,evalH:Bl,seedBase:760}];for(const a of o)for(let r=0;r<a.rays;r++){const l=r/a.rays*Math.PI*2+(ft(r,a.seedBase*.13)-.5)*.08,c=Math.cos(l),h=Math.sin(l);let u=0,d=0,f=-999;for(let p=8;p<=a.maxR;p+=.65){const x=a.cx+c*p,w=a.cz+h*p,_=a.evalH(x,w),A=a.evalH(x+c*1.4,w+h*1.4);if(_>ge+4.5&&_-A>1.85){u=x,d=w,f=_;break}}if(f<ge+4.5)continue;if(a.skipWaterfallCorridor){const p=u- -66,x=d- -32,w=p*n-x*s,_=p*s+x*n,A=Math.sin(Math.max(0,w)*.11+.35)*1.85;if(w>2.5&&Math.abs(_-A)<10.5)continue}const g=a.seedBase+r*4.3,v=f-.35-ft(r,g)*1.1,m=Math.max(ge-4,v-(8.5+ft(r,g+7.1)*9.5));i.push(t({x:u+c*.85,z:d+h*.85,topY:v,botY:m,rx:1.85+ft(r,g+13.4)*2.15,rz:1.45+ft(r,g+21.8)*1.75,rotY:l+(ft(r,g+29.2)-.5)*.7,leanX:c*.42,leanZ:h*.42,seed:g}))}return Ao(i,!1)}function Fv(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a),c=o-r,h=a-l,u=c*c*c*(c*(c*6-15)+10),d=h*h*h*(h*(h*6-15)+10),f=(r%e+e)%e,g=(f+1)%e,v=(l%n+n)%n,m=(v+1)%n,p=ft(f+s,v-s),x=ft(g+s,v-s),w=ft(f+s,m-s),_=ft(g+s,m-s);return p+(x-p)*u+(w-p)*d+(p-x-w+_)*u*d}function Ts(i,t,e,n,s,o){let a=0,r=.5,l=0,c=e,h=n;for(let u=0;u<s;u++)a+=r*Fv(i,t,c,h,o+u*17.3),l+=r,c*=2,h*=2,r*=.5;return a/l}function ch(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a);let c=1e9,h=1e9,u=0,d=0,f=0;for(let p=-1;p<=1;p++)for(let x=-1;x<=1;x++){const w=((r+x)%e+e)%e,_=((l+p)%n+n)%n,A=.16+.68*ft(w+s,_*1.7-s),y=.16+.68*ft(w*2.3-s,_+s),S=r+x+A,T=l+p+y,b=(S-o)*.85,M=(T-a)*1.25,P=Math.hypot(b,M);P<c?(h=c,c=P,u=ft(w*3.1+s,_*5.7+s),d=b,f=M):P<h&&(h=P)}const g=Math.max(0,h-c),v=u*Math.PI*2,m=(d*Math.cos(v)+f*Math.sin(v))*.55;return{edgeDist:g,cellTilt:m,cellId:u}}function Nv(){const t=new Float32Array(262144),e=new Float32Array(512*512),n=new Float32Array(512*512),s=new Float32Array(512*512);for(let v=0;v<512;v++){const m=v/512;for(let p=0;p<512;p++){const x=p/512,w=v*512+p,_=x+(Ts(x,m,4,6,3,5.1)-.5)*.068,A=m+(Ts(x,m,6,4,3,13.7)-.5)*.032,y=ch(_,A,5,15,21.4),S=ch(_,A,11,28,57.9),T=Ts(x,m,6,10,3,44.8),b=(1-oe(.01,.085,y.edgeDist))*oe(.18,.78,T),M=(1-oe(.008,.07,S.edgeDist))*(.45+.55*T),P=Ts(_,A,3,22,4,33.2),C=Math.abs((A*14+P*.55)%1-.5)*2,R=1-oe(.04,.24,C),L=Ts(x,m,28,28,3,71.6),D=.52+y.cellTilt*.26+(y.cellId-.5)*.16+S.cellTilt*.15+(P-.5)*.4+(L-.5)*.16-R*.28-b*.32-M*.18;t[w]=Math.max(0,Math.min(1,D)),e[w]=Math.min(1,R*.52+b*.58+M*.36),n[w]=y.cellId*.65+S.cellId*.35;const U=Ts(x,m,8,8,4,93.4);s[w]=oe(.6,.84,U)*(1-b*.5)}}const o=document.createElement("canvas"),a=document.createElement("canvas"),r=document.createElement("canvas");for(const v of[o,a,r])v.width=512,v.height=512;const l=o.getContext("2d"),c=a.getContext("2d"),h=r.getContext("2d"),u=l.createImageData(512,512),d=c.createImageData(512,512),f=h.createImageData(512,512);for(let v=0;v<512;v++){const m=(v-1+512)%512,p=(v+1)%512;for(let x=0;x<512;x++){const w=(x-1+512)%512,_=(x+1)%512,A=v*512+x,y=A*4,S=(t[v*512+_]-t[v*512+w])*7.6,T=(t[p*512+x]-t[m*512+x])*7.6,b=1/Math.sqrt(S*S+T*T+1);d.data[y]=Math.round((-S*b*.5+.5)*255),d.data[y+1]=Math.round((T*b*.5+.5)*255),d.data[y+2]=Math.round((b*.5+.5)*255),d.data[y+3]=255;const M=t[A],P=e[A],C=n[A],R=s[A],L=oe(.62,.92,C),D=1-P*.56,U=(36+M*58+L*22)*D,z=(40+M*58+L*11)*D,N=(46+M*60-L*6)*D,H=52+M*26,V=74+M*34,$=38+M*18;u.data[y]=Math.round(q.lerp(U,H,R*.52)),u.data[y+1]=Math.round(q.lerp(z,V,R*.52)),u.data[y+2]=Math.round(q.lerp(N,$,R*.52)),u.data[y+3]=255;const K=.54+(1-M)*.28+P*.16,X=Math.round(q.clamp(q.lerp(K,.92,R),.15,.98)*255);f.data[y]=X,f.data[y+1]=X,f.data[y+2]=X,f.data[y+3]=255}}l.putImageData(u,0,0),c.putImageData(d,0,0),h.putImageData(f,0,0);const g=(v,m)=>(v.wrapS=ii,v.wrapT=ii,v.repeat.set(9,9),v.anisotropy=8,v.colorSpace=m?an:kn,v.needsUpdate=!0,v);return{albedo:g(new gn(o),!0),normal:g(new gn(a),!1),roughness:g(new gn(r),!1)}}function Uv(i){const o=new Float32Array(37539);for(let u=0;u<=96;u++){const d=u/96,f=3200*Math.pow(d,2.05);for(let g=0;g<=128;g++){const m=g/128*Math.PI*2,p=Math.cos(m)*f,x=Math.sin(m)*f,w=(ue(p*.015+3.7,x*.015-5.2,3)-.5)*3.2*(1-d*.7),_=Sv+w,A=u*129+g;o[A*3]=p,o[A*3+1]=_,o[A*3+2]=x}}const a=new Uint32Array(12288*6);let r=0;for(let u=0;u<96;u++)for(let d=0;d<128;d++){const f=u*129+d,g=(u+1)*129+d,v=(u+1)*129+(d+1),m=u*129+(d+1);a[r++]=f,a[r++]=v,a[r++]=g,a[r++]=f,a[r++]=m,a[r++]=v}const l=new Zt;l.setAttribute("position",new Z(o,3)),l.setIndex(new Z(a,1)),l.computeVertexNormals();const c=new ke({name:"NordicSubmarineBathymetry",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${En}
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
    `}),h=new Ne(l,c);return h.frustumCulled=!1,h.name="NordicSubmarineBathymetryFloor",h}function kv(i){const t=[{cx:-480,cz:-280,rx:145,rz:95,peakY:56,offX:-22,rot:.4,seed:11.4},{cx:520,cz:-310,rx:165,rz:105,peakY:62,offX:28,rot:-.5,seed:23.8},{cx:-320,cz:-560,rx:135,rz:90,peakY:54,offX:18,rot:.2,seed:37.2},{cx:490,cz:340,rx:155,rz:98,peakY:52,offX:-24,rot:-.3,seed:46.5},{cx:-860,cz:-420,rx:240,rz:145,peakY:86,offX:-36,rot:.35,seed:51.9},{cx:880,cz:-460,rx:255,rz:155,peakY:82,offX:38,rot:-.42,seed:67.3},{cx:-740,cz:580,rx:220,rz:135,peakY:72,offX:-28,rot:.55,seed:76.4},{cx:140,cz:-1180,rx:290,rz:165,peakY:94,offX:42,rot:.15,seed:83.5},{cx:-1150,cz:-880,rx:310,rz:180,peakY:104,offX:-45,rot:-.28,seed:94.1},{cx:1080,cz:780,rx:285,rz:165,peakY:92,offX:36,rot:.38,seed:108.7}],e=[],n=28,s=52;for(const l of t){const c=(n+1)*(s+1),h=new Float32Array(c*3),u=Math.cos(l.rot),d=Math.sin(l.rot);for(let m=0;m<=n;m++){const p=m/n*1.42;for(let x=0;x<=s;x++){const w=x/s*Math.PI*2,_=1+.18*Math.sin(w*2+l.seed)+.11*Math.cos(w*3-l.seed),A=Math.cos(w)*l.rx*_*p,y=Math.sin(w)*l.rz*_*p,S=l.cx+A*u-y*d,T=l.cz+A*d+y*u,b=Math.min(1,Math.pow((A-l.offX*1.15)/(l.rx*1.05),2)+Math.pow(y/(l.rz*.96),2)),M=q.clamp(.6+A/Math.max(20,l.rx)*.36,.28,1.14),P=Math.pow(Math.max(0,1-b),1.32),C=1/(1+1.9*b*b),R=(Ge(S*.008+l.seed,T*.01-l.seed,2)-.48)*(l.peakY*.18)*(1-oe(.55,1.05,p)),L=l.peakY*(.2+.48*P*M+.26*C)+R,D=Mo(L,A*.02,Math.max(9,l.peakY*.2),.42),U=.66+.13*Math.sin(w*3-l.seed)+.08*Math.cos(w*5+l.seed),z=oe(U,1.06,p),N=oe(.98,1.38,p),H=ge-1.5,V=Fa(D,H,z,S,T,l.seed),$=q.lerp(V,vi,N),K=m*(s+1)+x;h[K*3]=S,h[K*3+1]=$,h[K*3+2]=T}}const f=new Uint32Array(n*s*6);let g=0;for(let m=0;m<n;m++)for(let p=0;p<s;p++){const x=m*(s+1)+p,w=(m+1)*(s+1)+p,_=(m+1)*(s+1)+(p+1),A=m*(s+1)+(p+1);f[g++]=x,f[g++]=_,f[g++]=w,f[g++]=x,f[g++]=A,f[g++]=_}const v=new Zt;v.setAttribute("position",new Z(h,3)),v.setIndex(new Z(f,1)),v.computeVertexNormals(),e.push(v)}const o=Ao(e,!1),a=new ke({name:"DistantFjordAerialMaterial",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${En}
      uniform vec3 uSunColor;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      void main() {
        vec3 N = normalize(vWorldNormal + vec3(0.0, 1e-5, 0.0));
        vec3 L = normalize(uSunDir + vec3(0.0, 1e-5, 0.0));
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);

        float strataBands = 0.90 + 0.14 * sin(vWorldPos.y * 0.55 + skyNoise2(vWorldPos.xz * 0.025) * 2.4);
        float slopeTurf = smoothstep(0.56, 0.84, N.y) * smoothstep(-4.0, 14.0, vWorldPos.y);
        vec3 rockBase = mix(vec3(0.058, 0.068, 0.084) * strataBands, vec3(0.074, 0.122, 0.058), slopeTurf * 0.82);

        float ndotl = clamp(dot(N, L), 0.0, 1.0);
        vec3 ambientSky = mix(uHorizonAntiColor, uZenithColor, 0.45) * 0.44;
        vec3 directSun = uSunColor * ndotl * 0.56;
        vec3 surfaceCol = rockBase * (ambientSky * 2.8 + directSun * 2.2);

        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float distHaze = 1.0 - exp(-pow(max(uMistDensity * 0.88 * dist, 1e-6), 1.22));
        float farFade = smoothstep(1250.0, 2250.0, dist);
        float waterlineMist = (1.0 - smoothstep(-11.5, 4.5, vWorldPos.y)) * 0.28;
        float totalVeil = clamp(max(distHaze, farFade) + waterlineMist * (1.0 - distHaze), 0.0, 1.0);

        vec3 finalCol = mix(surfaceCol, hazeCol, totalVeil);
        gl_FragColor = vec4(clamp(finalCol, vec3(0.0), vec3(24.0)), 1.0);
      }
    `}),r=new Ne(o,a);return r.frustumCulled=!1,r.name="DistantFjordArchipelago",r}function zv(){const i=[],t=[{dx:0,dz:0,h:.36,w:.02,bend:.11,rotY:.1},{dx:.032,dz:.018,h:.28,w:.017,bend:.14,rotY:1.8},{dx:-.028,dz:.022,h:.31,w:.018,bend:.12,rotY:3.7},{dx:.012,dz:-.03,h:.23,w:.015,bend:.15,rotY:5}];for(const e of t){const s=[],o=[],a=[],r=Math.cos(e.rotY),l=Math.sin(e.rotY);for(let h=0;h<=4;h++){const u=h/4,d=e.w*(1-.88*Math.pow(u,1.3)),f=e.h*u,g=e.bend*u*u;for(const v of[-1,1]){const m=v*d,p=g,x=e.dx+m*r-p*l,w=e.dz+m*l+p*r;s.push(x,f,w),o.push(-l*.3,.92,r*.3)}}for(let h=0;h<4;h++){const u=h*2,d=u+1,f=u+2,g=u+3;a.push(u,d,g,u,g,f)}const c=new Zt;c.setAttribute("position",new Qt(s,3)),c.setAttribute("normal",new Qt(o,3)),c.setIndex(a),i.push(c)}return Ao(i,!1)}function Bv(){const i=[],t=[{ox:0,oz:0,h:.24,leanX:.03,leanZ:.02,r:.032},{ox:.045,oz:.025,h:.19,leanX:.05,leanZ:-.02,r:.027},{ox:-.038,oz:.03,h:.21,leanX:-.04,leanZ:.04,r:.029}];for(const e of t){const n=new Ma(.004,.006,e.h,4,1);n.translate(e.ox+e.leanX*.5,e.h*.5,e.oz+e.leanZ*.5);const s=n.getAttribute("position").count,o=new Float32Array(s*3);for(let c=0;c<s;c++)o[c*3]=.24,o[c*3+1]=.44,o[c*3+2]=.2;n.setAttribute("color",new Z(o,3)),i.push(n);const a=new Ma(e.r,e.r*.28,e.r*.55,6,1);a.translate(e.ox+e.leanX,e.h+e.r*.15,e.oz+e.leanZ);const r=a.getAttribute("position").count,l=new Float32Array(r*3);for(let c=0;c<r;c++)l[c*3]=1,l[c*3+1]=1,l[c*3+2]=1;a.setAttribute("color",new Z(l,3)),i.push(a)}return Ao(i,!1)}function Ov(i,t,e,n){const s=new Zn;s.position.set(i,t,e);const o=[{rx:.44,ry:.17,rz:.38,dy:.08,rot:.2},{rx:.35,ry:.14,rz:.31,dy:.28,rot:1.1},{rx:.27,ry:.12,rz:.24,dy:.45,rot:2.3},{rx:.19,ry:.11,rz:.18,dy:.6,rot:.7},{rx:.12,ry:.1,rz:.11,dy:.73,rot:1.9}];for(const a of o){const r=new La(1,1);r.scale(a.rx,a.ry,a.rz);const l=new Ne(r,n);l.position.set((Math.sin(a.rot*3)-.5)*.03,a.dy,(Math.cos(a.rot*2)-.5)*.03),l.rotation.y=a.rot,l.castShadow=!0,l.receiveShadow=!0,s.add(l)}return s}function Hv(i){const t=new Zn;t.name="NordicCliffsideWorld";const e=Nv(),n=new Ni({name:"NordicBasaltCliff_PBR",map:e.albedo,normalMap:e.normal,normalScale:new $t(1.25,1.25),roughnessMap:e.roughness,roughness:.86,metalness:.04,envMapIntensity:.98});n.onBeforeCompile=Y=>{Object.assign(Y.uniforms,i),Y.vertexShader=Y.vertexShader.replace("#include <common>",`#include <common>
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
        vRockWorldNormal = normalize(rawWorldN + vec3(0.0, 1e-5, 0.0));`),Y.fragmentShader=Y.fragmentShader.replace("#include <common>",`#include <common>
        ${En}
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
          // Macro 3D rock-buttress shadow/highlight variation + horizontal mineral/lichen strata (never flat uniform cells!)
          float rockMassShade = 0.80 + 0.38 * skyFbm(vRockWorldPos.xz * 0.052 + vec2(vRockWorldPos.y * 0.038, -vRockWorldPos.y * 0.029));
          vec3 mineralTint = mix(vec3(0.64, 0.67, 0.73), vec3(1.25, 1.21, 1.16), strataVal) * rockMassShade;
          diffuseColor.rgb *= mix(albMacro, albDetail, 0.48) * mix(vec3(1.0), mineralTint, cliffSteepMask * 0.88);
        #endif`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 wNCol = normalize(vRockWorldNormal + vec3(0.0, 1e-5, 0.0));
        // Localized basalt rock pads right beneath Toothless & Light Fury's claws
        float dPadTL = length((vRockWorldPos.xz - vec2(4.45, 0.22)) / vec2(2.35, 1.95));
        float dPadLF = length((vRockWorldPos.xz - vec2(-4.45, -0.22)) / vec2(2.35, 1.95));
        float dragonPadClear = smoothstep(0.68, 1.18, min(dPadTL, dPadLF));

        // Expose bare fractured basalt rock on cliffs, "hamrar" terrace risers, shore reefs & cliff rims!
        // Keep coastal turf well above the ocean wave-splash zone (> -8.8m) so all shoreline rocks stay dark bare basalt!
        float crownSlope = smoothstep(0.60, 0.84, wNCol.y);
        float aboveSpray = smoothstep(-8.8, -3.2, vRockWorldPos.y);
        float rimRockBreakup = smoothstep(0.24, 0.62, skyFbm(vRockWorldPos.xz * 0.16 + 2.9) * 0.78 + skyNoise2(vRockWorldPos.xz * 0.45) * 0.22);
        float turfMask = dragonPadClear * crownSlope * aboveSpray * mix(rimRockBreakup, 1.0, smoothstep(0.76, 0.93, wNCol.y));

        // Natural Faroese / North Atlantic coastal turf: lush emerald-olive hollows + warm golden-olive upland fescue
        float meadowMacro = skyFbm(vRockWorldPos.xz * 0.065);
        float uplandElev = smoothstep(2.0, 20.0, vRockWorldPos.y);
        vec3 lushEmerald = mix(vec3(0.074, 0.148, 0.044), vec3(0.148, 0.186, 0.058), meadowMacro);
        vec3 uplandOlive = vec3(0.168, 0.178, 0.064);
        vec3 turfLush = mix(lushEmerald, uplandOlive, uplandElev * 0.36 * (1.0 - meadowMacro * 0.5));
        diffuseColor.rgb = mix(diffuseColor.rgb, turfLush, clamp(turfMask * 0.92, 0.0, 0.92));

        // Rich, dark, glistened wet-basalt intertidal rock zone right near the ocean surface (-12.0m .. -6.4m)!
        float wetNoise = (skyFbm(vRockWorldPos.xz * 0.22) - 0.5) * 1.1;
        float wetZone = 1.0 - smoothstep(-11.4, -6.5, vRockWorldPos.y + wetNoise);
        float nearWaterline = 1.0 - smoothstep(-11.6, -9.2, vRockWorldPos.y + wetNoise * 0.5);
        float submergedDepth = 1.0 - smoothstep(-24.0, -11.7, vRockWorldPos.y);
        diffuseColor.rgb *= mix(1.0, 0.25, wetZone);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.018, 0.022, 0.028), nearWaterline * 0.52);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.022, 0.038, 0.050), submergedDepth * 0.76);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
        gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, rHazeCol, clamp(rAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)},t.add(Uv(i));const s=304,o=new Ys(102,104,s,s);o.rotateX(-Math.PI*.5);const a=o.getAttribute("position"),r=o.getAttribute("uv");for(let Y=0;Y<a.count;Y++){const ht=a.getX(Y)-4,bt=a.getZ(Y)-14.5,At=pi(ht,bt);a.setXYZ(Y,ht,At,bt),r.setXY(Y,ht*.015,(bt+At*.55)*.015)}lh(o,7.3,!0);const l=new Ne(o,n);l.receiveShadow=!0,l.castShadow=!0,l.name="HeroBasaltCliffPerch",t.add(l);const c=new Ne(Dv(),n);c.castShadow=!0,c.receiveShadow=!0,c.name="HeroCliffBasaltCragOutcrops",t.add(c);const h=pi(-8.65,-7.25);t.add(Ov(-8.65,h-.04,-7.25,n));const u=new Zn;u.name="NordicArchipelago";for(let Y=0;Y<dl.length;Y++){const ht=dl[Y],bt=new Ys(ht.spanX,ht.spanZ,ht.gridSegs,ht.gridSegs);bt.rotateX(-Math.PI*.5);const At=bt.getAttribute("position"),Nt=bt.getAttribute("uv");for(let Bt=0;Bt<At.count;Bt++){const Yt=ht.centerX+At.getX(Bt),jt=ht.centerZ+At.getZ(Bt),Ie=ht.evalHeight(Yt,jt);At.setXYZ(Bt,Yt,Ie,jt),Nt.setXY(Bt,Yt*.015,(jt+Ie*.55)*.015)}lh(bt,19.1+Y*13.7,!1);const Mt=new Ne(bt,n);Mt.receiveShadow=!0,Mt.castShadow=!0,Mt.name=ht.name,u.add(Mt)}for(let Y=0;Y<co.length;Y++){const ht=co[Y],bt=new Ne(Lv(ht),n);bt.position.set(ht.x,0,ht.z),bt.rotation.y=ht.rotY,bt.castShadow=!0,bt.receiveShadow=!0,bt.name=`FaroeseHeadlandSeaArch_${Y}`,u.add(bt)}const d=Ls.map(Y=>Iv(Y)),f=new Ne(Ao(d,!1),n);f.castShadow=!0,f.receiveShadow=!0,f.name="TabularFaroeseSeaStacks",u.add(f),t.add(u);const g=Math.cos(.18),v=Math.sin(.18),m=Y=>{const ht=Math.sin(Y*.11+.35)*1.85,bt=-66+Y*g+ht*v,At=-32-Y*v+ht*g,Nt=ui(bt,At);return new E(bt,Nt,At)};let p=9.4;for(let Y=5;Y<=16;Y+=.05){const ht=m(Y),bt=m(Y+1.35);if(ht.y>5.5&&bt.y<ge-1.5){p=Y;break}if(ht.y<5.5){p=Y-.15;break}}const x=m(p),w=1.2,_=ui(x.x+w,x.z)-ui(x.x-w,x.z),A=ui(x.x,x.z+w)-ui(x.x,x.z-w),y=new $t(-_,-A);y.lengthSq()<1e-4?y.set(g,-v):y.normalize();const S=new $t(-y.y,y.x),T=(Y,ht,bt,At,Nt)=>{const Yt=x.y-.12,jt=ge-1.85,Ie=Yt-jt,Kt=new Float32Array(1113*3),he=new Float32Array(1113*2);for(let Tt=0;Tt<=52;Tt++){const zt=Tt/52,ee=Yt-Ie*Math.pow(zt,1.62),_e=.22+bt*Math.pow(zt,.72),Ee=q.lerp(Y,ht,Math.pow(zt,.88)),Re=Nt*zt*zt;for(let He=0;He<=20;He++){const On=He/20,Fn=(On-.5)*2*Ee+Re,Sn=Math.sin(On*Math.PI)*(At+.42*zt);let yi=x.x+S.x*Fn+y.x*(_e+Sn),cs=x.z+S.y*Fn+y.y*(_e+Sn);for(let hs=0;hs<12;hs++){const Wi=ei(yi,cs);if(ee>=Wi+.52)break;yi+=y.x*.42,cs+=y.y*.42}const rn=Tt*21+He;Kt[rn*3]=yi,Kt[rn*3+1]=ee,Kt[rn*3+2]=cs,he[rn*2]=On,he[rn*2+1]=1-zt}}const st=[];for(let Tt=0;Tt<52;Tt++)for(let zt=0;zt<20;zt++){const ee=Tt*21+zt,_e=(Tt+1)*21+zt,Ee=(Tt+1)*21+(zt+1),Re=Tt*21+(zt+1);st.push(ee,_e,Ee,ee,Ee,Re)}const vt=new Zt;return vt.setAttribute("position",new Z(Kt,3)),vt.setAttribute("uv",new Z(he,2)),vt.setIndex(st),vt.computeVertexNormals(),vt},b=3.85,M=T(.92,2.15,b,.34,.28),P=T(1.18,3.35,b+.55,.68,.72),C=Math.pow((x.y+.18-ge)/(x.y+.18-(ge-1.85)),1/1.62);let R=x.x+y.x*(.28+b*Math.pow(C,.72)+.55),L=x.z+y.y*(.28+b*Math.pow(C,.72)+.55);for(let Y=0;Y<12&&!(ei(R,L)<ge-2.2);Y++)R+=y.x*.55,L+=y.y*.55;const D={...i},U=Y=>new ke({name:"NordicWaterfallShader",transparent:!0,depthWrite:!1,side:Je,uniforms:{...D,uVeilMode:{value:Y?1:0}},vertexShader:`
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
        ${En}
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
      `}),z=U(!1),N=U(!0),H=new Ne(M,z);H.renderOrder=3;const V=new Ne(P,N);V.renderOrder=4,t.add(H),t.add(V);const $=new Cl(9.2,48);$.rotateX(-Math.PI*.5);const K=new ke({transparent:!0,depthWrite:!1,uniforms:D,vertexShader:`
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
      ${En}
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
    `}),X=new Ne($,K);X.position.set(R,ge+.16,L),X.renderOrder=3,t.add(X);const G=1650,O=new Float32Array(G*3),J=new Float32Array(G*3),lt=new Float32Array(G*3);for(let Y=0;Y<G;Y++){const ht=ft(Y,5.7)*Math.PI*2,bt=.35+Math.pow(ft(Y,13.1),.7)*2.85;O[Y*3]=R+Math.cos(ht)*bt+(ft(Y,19.4)-.5)*.8,O[Y*3+1]=ge+.05+ft(Y,23.8)*.65,O[Y*3+2]=L+Math.sin(ht)*bt+(ft(Y,29.2)-.5)*.8;const At=ht+(ft(Y,37.6)-.5)*.85,Nt=1.85+ft(Y,41.9)*5.35;J[Y*3]=Math.cos(At)*Nt+y.x*(1.1+ft(Y,47.3)*1.8),J[Y*3+1]=5.4+Math.pow(ft(Y,53.1),.75)*8.4,J[Y*3+2]=Math.sin(At)*Nt+y.y*(1.1+ft(Y,59.7)*1.8),lt[Y*3]=ft(Y,67.3),lt[Y*3+1]=.52+ft(Y,73.9)*.46,lt[Y*3+2]=.55+ft(Y,83.1)*1.15}const j=new Zt;j.setAttribute("position",new Z(O,3)),j.setAttribute("aVelocity",new Z(J,3)),j.setAttribute("aMeta",new Z(lt,3));const Q=new ke({name:"WaterfallBallisticSplashDroplets",transparent:!0,depthWrite:!1,uniforms:D,vertexShader:`
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
      ${En}
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
    `}),W=new Rs(j,Q);W.renderOrder=4,W.frustumCulled=!1,t.add(W);const it=420,St=new Float32Array(it*3),et=new Float32Array(it);for(let Y=0;Y<it;Y++){const ht=ft(Y,11.3)*Math.PI*2,bt=Math.pow(ft(Y,19.7),.65)*6.4;St[Y*3]=R+Math.cos(ht)*bt,St[Y*3+1]=ge+ft(Y,27.9)*11.5,St[Y*3+2]=L+Math.sin(ht)*bt,et[Y]=ft(Y,61.7)}const k=new Zt;k.setAttribute("position",new Z(St,3)),k.setAttribute("aSeed",new Z(et,1));const wt=new ke({transparent:!0,depthWrite:!1,uniforms:D,vertexShader:`
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
      ${En}
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
    `}),at=new Rs(k,wt);at.renderOrder=4,at.frustumCulled=!1,t.add(at);const yt=(Y,ht)=>{if(Math.hypot(Y-R,ht-L)<10.2||Math.hypot(Y-x.x,ht-x.z)<8.5)return!0;const bt=Y-x.x,At=ht-x.z,Nt=bt*y.x+At*y.y,Mt=Math.abs(bt*S.x+At*S.y);return Nt>-8&&Nt<26&&Mt<9.5},dt=new je,Ut=new La(.62,1),Pt=Ut.getAttribute("position");for(let Y=0;Y<Pt.count;Y++){const ht=Pt.getX(Y);let bt=Pt.getY(Y);const At=Pt.getZ(Y),Nt=.82+.32*ue(ht*2.2+4.3,bt*2.2+At*2.2,3);bt<-.1&&(bt=-.1+(bt+.1)*.35),Pt.setXYZ(Y,ht*Nt*1.36,bt*Nt*.62,At*Nt*1.22)}Ut.computeVertexNormals();const B=(()=>{const Nt=new Float32Array(411),Mt=new Float32Array(274);for(let he=0;he<=14;he++){const st=he/14,vt=(st-.5)*3.4,Tt=.58+.42*Math.sin(st*Math.PI),zt=Math.sin(st*Math.PI*1.3+.4)*.18,ee=-Math.pow(st-.5,2)*.14;for(let _e=0;_e<=8;_e++){const Ee=_e/8,Re=Ee*Math.PI*2,He=.84+.26*ue(vt*1.3+2.1,Math.cos(Re)*1.7+Math.sin(Re)*1.7,2),On=.3*Tt*He,Fn=.38*Tt*He,Sn=he*9+_e;Nt[Sn*3]=vt,Nt[Sn*3+1]=ee+Math.sin(Re)*On,Nt[Sn*3+2]=zt+Math.cos(Re)*Fn,Mt[Sn*2]=st*2.4,Mt[Sn*2+1]=Ee}}const Bt=135,Yt=Bt+1;Nt[Bt*3]=-1.72,Nt[Bt*3+1]=-.04,Nt[Bt*3+2]=0,Mt[Bt*2]=0,Mt[Bt*2+1]=.5,Nt[Yt*3]=1.72,Nt[Yt*3+1]=-.04,Nt[Yt*3+2]=0,Mt[Yt*2]=2.4,Mt[Yt*2+1]=.5;const jt=[];for(let he=0;he<14;he++)for(let st=0;st<8;st++){const vt=he*9+st,Tt=(he+1)*9+st,zt=(he+1)*9+(st+1),ee=he*9+(st+1);jt.push(vt,Tt,zt,vt,zt,ee)}const Ie=126;for(let he=0;he<8;he++)jt.push(Bt,he+1,he),jt.push(Yt,Ie+he,Ie+he+1);const Kt=new Zt;return Kt.setAttribute("position",new Z(Nt,3)),Kt.setAttribute("uv",new Z(Mt,2)),Kt.setIndex(jt),Kt.computeVertexNormals(),Kt})(),I=[{cx:-3.5,cz:-14,spanX:64,spanZ:60,isHero:!0,evalH:pi},{cx:-70,cz:-34,spanX:74,spanZ:64,isHero:!1,evalH:ui},{cx:88,cz:36,spanX:78,spanZ:78,isHero:!1,evalH:zl},{cx:84,cz:-46,spanX:74,spanZ:82,isHero:!1,evalH:Bl},{cx:-124,cz:-86,spanX:74,spanZ:64,isHero:!1,evalH:Mu},{cx:-48,cz:-92,spanX:58,spanZ:54,isHero:!1,evalH:wu},{cx:36,cz:-108,spanX:56,spanZ:56,isHero:!1,evalH:yu}],nt=820,mt=new Yo(Ut,n,nt);mt.castShadow=!0,mt.receiveShadow=!0;let xt=0;const _t=210,Ft=new Yo(B,n,_t);Ft.castShadow=!0,Ft.receiveShadow=!0;let gt=0;const Rt=new E(0,1,0),ne=new E,Et=new Ye,Dt=new Ye;for(let Y=0;Y<I.length;Y++){const ht=I[Y],bt=ht.isHero?36:24;let At=0;for(let Nt=0;Nt<900&&At<bt&&xt<nt-6;Nt++){const Mt=7e3+Y*1100+Nt,Bt=ht.cx+(ft(Mt,14.7)-.5)*(ht.spanX*1.28),Yt=ht.cz+(ft(Mt,53.9)-.5)*(ht.spanZ*1.28),jt=ht.evalH(Bt,Yt);if(jt<-16.2||jt>-9.2||yt(Bt,Yt))continue;At++;const Ie=1.05+ft(Mt,29.1)*1.85,Kt=Math.max(jt-.12,ge-.08+ft(Mt,37.4)*.62);dt.position.set(Bt,Kt,Yt),dt.rotation.set((ft(Mt,3.3)-.5)*.24,ft(Mt,9.8)*Math.PI*2,(ft(Mt,6.1)-.5)*.24),dt.scale.set(Ie*(.92+ft(Mt,4.4)*.45),Ie*(.58+ft(Mt,8.2)*.35),Ie*(.88+ft(Mt,11.6)*.42)),dt.updateMatrix(),mt.setMatrixAt(xt++,dt.matrix);const he=2+Math.floor(ft(Mt,45.2)*3);for(let st=0;st<he&&xt<nt;st++){const vt=Mt*7+st*19.3,Tt=ft(vt,2.7)*Math.PI*2,zt=1.15+ft(vt,5.9)*3.4,ee=Bt+Math.cos(Tt)*zt,_e=Yt+Math.sin(Tt)*zt;if(yt(ee,_e))continue;const Ee=.48+ft(vt,12.4)*.95,Re=ge-.1+ft(vt,18.8)*.44;dt.position.set(ee,Re,_e),dt.rotation.set((ft(vt,21.1)-.5)*.32,ft(vt,25.6)*Math.PI*2,(ft(vt,29.3)-.5)*.32),dt.scale.set(Ee*(.95+ft(vt,33.1)*.55),Ee*(.52+ft(vt,37.7)*.32),Ee),dt.updateMatrix(),mt.setMatrixAt(xt++,dt.matrix)}if(gt<_t&&ft(Mt,63.5)>.28){const st=ft(Mt,71.2)*Math.PI*2,vt=Bt+Math.cos(st)*(1.2+ft(Mt,77.8)*2.4),Tt=Yt+Math.sin(st)*(1.2+ft(Mt,81.4)*2.4);if(!yt(vt,Tt)){const zt=.72+ft(Mt,88.9)*1.15,ee=.68+ft(Mt,93.1)*.65,_e=Math.max(ht.evalH(vt,Tt)-.08,ge-.04+ft(Mt,97.6)*.36),Ee=ht.evalH(vt+1,Tt)-ht.evalH(vt-1,Tt),Re=ht.evalH(vt,Tt+1)-ht.evalH(vt,Tt-1),He=Math.atan2(Ee,-Re)+(ft(Mt,102.3)-.5)*.95;dt.position.set(vt,_e,Tt),dt.rotation.set((ft(Mt,108.7)-.5)*.16,He,(ft(Mt,114.2)-.5)*.18),dt.scale.set(zt,ee,ee*1.08),dt.updateMatrix(),Ft.setMatrixAt(gt++,dt.matrix)}}}}for(let Y=0;Y<Ls.length;Y++){const ht=Ls[Y];for(let bt=0;bt<6&&xt<nt;bt++){const At=19e3+Y*71+bt*13,Nt=bt/6*Math.PI*2+(ft(At,4.1)-.5)*.55,Mt=Math.max(ht.rx,ht.rz)*(1.12+ft(At,8.7)*.52),Bt=ht.x+Math.cos(Nt)*Mt,Yt=ht.z+Math.sin(Nt)*Mt;if(yt(Bt,Yt))continue;const jt=.65+ft(At,15.3)*1.15;dt.position.set(Bt,ge-.08+ft(At,19.9)*.48,Yt),dt.rotation.set(.08,ft(At,24.4)*Math.PI*2,-.06),dt.scale.set(jt*1.25,jt*.62,jt),dt.updateMatrix(),mt.setMatrixAt(xt++,dt.matrix),bt%2===0&&gt<_t&&(dt.position.set(Bt+Math.cos(Nt+.6)*1.6,ge+.02+ft(At,31.2)*.26,Yt+Math.sin(Nt+.6)*1.6),dt.rotation.set(.05,Nt+Math.PI*.5+(ft(At,36.8)-.5)*.6,-.09),dt.scale.set(.75+ft(At,41.5)*.85,.72,.78),dt.updateMatrix(),Ft.setMatrixAt(gt++,dt.matrix))}}for(let Y=0;Y<I.length;Y++){const ht=I[Y],bt=ht.isHero?24:10;let At=0;for(let Nt=0;Nt<400&&At<bt&&xt<nt;Nt++){const Mt=Y*500+Nt,Bt=ht.cx+(ft(Mt,41.2)-.5)*ht.spanX,Yt=ht.cz+(ft(Mt,83.7)-.5)*ht.spanZ;if(ht.isHero){if(Math.sqrt(Math.pow(Bt/10.2,2)+Math.pow((Yt+1)/6.4,2))<1)continue}else if(yt(Bt,Yt))continue;const jt=ht.evalH(Bt,Yt);if(jt<.25||jt>34)continue;const Ie=ht.evalH(Bt+.6,Yt),Kt=ht.evalH(Bt-.6,Yt),he=ht.evalH(Bt,Yt+.6),st=ht.evalH(Bt,Yt-.6),vt=(Ie-Kt)/1.2,Tt=(he-st)/1.2;if(Math.hypot(vt,Tt)>.38||Math.min(Ie,Kt,he,st)<0)continue;const ee=(ht.isHero?.38:.58)+ft(Mt,19.4)*(ht.isHero?.62:.95);ne.set(-vt,1,-Tt).normalize(),Et.setFromUnitVectors(Rt,ne),Dt.setFromAxisAngle(Rt,ft(Mt,8.9)*Math.PI*2),dt.quaternion.copy(Et).multiply(Dt),dt.position.set(Bt,jt-.14*ee,Yt),dt.scale.set(ee*(.95+ft(Mt,2.3)*.32),ee*.55,ee),dt.updateMatrix(),mt.setMatrixAt(xt++,dt.matrix),At++}}mt.count=xt,mt.instanceMatrix.needsUpdate=!0,t.add(mt),Ft.count=gt,Ft.instanceMatrix.needsUpdate=!0,Ft.name="ShorelineBasaltRockyLogs",t.add(Ft);const te=zv(),ie={uTime:{value:0}},Gt=(Y,ht)=>{Y.onBeforeCompile=bt=>{Object.assign(bt.uniforms,i),bt.uniforms.uFloraTime=ie.uTime,bt.vertexShader=bt.vertexShader.replace("#include <common>",`#include <common>
          uniform float uFloraTime;
          varying vec3 vFloraWorldPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float hFrac = clamp(position.y / ${ht.toFixed(2)}, 0.0, 1.0);
          vec3 instW = vec3(0.0);
          #ifdef USE_INSTANCING
            instW = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          #endif
          float gust = sin(uFloraTime * 2.1 + instW.x * 0.75 + instW.z * 0.65) * 0.085
                     + sin(uFloraTime * 4.3 + instW.x * 1.9) * 0.032;
          transformed.x += gust * hFrac * hFrac;
          transformed.z += gust * 0.55 * hFrac * hFrac;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
          vec4 fwPos = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            fwPos = instanceMatrix * fwPos;
          #endif
          fwPos = modelMatrix * fwPos;
          vFloraWorldPos = fwPos.xyz;`),bt.fragmentShader=bt.fragmentShader.replace("#include <common>",`#include <common>
          ${En}
          varying vec3 vFloraWorldPos;`).replace("#include <fog_fragment>",`vec3 fToFrag = vFloraWorldPos - cameraPosition;
          float fDist = length(fToFrag);
          vec3 fHaze = evalHorizonHazeColor(fToFrag);
          float fAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * fDist, 1e-6), 1.26));
          gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, fHaze, clamp(fAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)}},fe=new Ni({name:"NordicVariedCoastalGrass",color:new Ht(16777215),roughness:.78,metalness:0,side:Je});Gt(fe,.36);const ae=8400,be=new Yo(te,fe,ae);be.castShadow=!1,be.receiveShadow=!0;const tt=new Ht;let kt=0;for(let Y=0;Y<I.length;Y++){const ht=I[Y],bt=ht.isHero?4200:840;let At=0,Nt=0;for(;At<bt&&Nt<bt*7&&kt<ae;){Nt++;const Mt=Y*25e3+Nt,Bt=ht.cx+(ft(Mt,1.3)-.5)*ht.spanX,Yt=ht.cz+(ft(Mt,7.9)-.5)*ht.spanZ;if(ht.isHero){const _e=Math.sqrt(Math.pow((Bt-4.45)/2.35,2)+Math.pow((Yt+.85)/3.85,2)),Ee=Math.sqrt(Math.pow((Bt+4.45)/2.35,2)+Math.pow((Yt+1.15)/3.85,2));if(_e<1||Ee<1)continue}const jt=ht.evalH(Bt,Yt),Ie=ht.evalH(Bt+.4,Yt),Kt=ht.evalH(Bt,Yt+.4),he=Math.hypot(Ie-jt,Kt-jt)/.4;if(jt<-.5||he>.78)continue;const st=ue(Bt*.45+2.3,Yt*.45-4.1,3);if(st<.32)continue;const vt=oe(.58,.85,st),Tt=.55+ft(Mt,3.7)*.72+vt*.5,zt=.75+ft(Mt,5.1)*.62;dt.position.set(Bt,jt-.02,Yt),dt.scale.set(zt,Tt,zt),dt.rotation.set((ft(Mt,9.2)-.5)*.18,ft(Mt,11.4)*Math.PI*2,(ft(Mt,13.8)-.5)*.18),dt.updateMatrix(),be.setMatrixAt(kt,dt.matrix);const ee=ft(Mt,17.1);ee<.54?tt.setHSL(.24+(ft(Mt,21.1)-.5)*.04,.44,.21+ft(Mt,23.7)*.11):ee<.8?tt.setHSL(.14+(ft(Mt,25.3)-.5)*.03,.42,.3+ft(Mt,29.1)*.11):tt.setHSL(.28+(ft(Mt,31.9)-.5)*.03,.3,.22+ft(Mt,37.4)*.1),be.setColorAt(kt,tt),kt++,At++}}be.count=kt,be.instanceMatrix.needsUpdate=!0,be.instanceColor&&(be.instanceColor.needsUpdate=!0),t.add(be);const ct=Bv(),Ct=new Ni({name:"NordicCliffWildflowers",vertexColors:!0,roughness:.68,metalness:0});Gt(Ct,.26);const Vt=2400,It=new Yo(ct,Ct,Vt);It.castShadow=!1,It.receiveShadow=!0;const re=new Ht;let Ce=0;for(let Y=0;Y<I.length;Y++){const ht=I[Y],bt=ht.isHero?1280:220;let At=0,Nt=0;for(;At<bt&&Nt<bt*8&&Ce<Vt;){Nt++;const Mt=9e4+Y*18e3+Nt,Bt=ht.cx+(ft(Mt,2.7)-.5)*ht.spanX,Yt=ht.cz+(ft(Mt,6.3)-.5)*ht.spanZ;if(ht.isHero){const vt=Math.sqrt(Math.pow((Bt-4.45)/2.55,2)+Math.pow((Yt+.85)/4.05,2)),Tt=Math.sqrt(Math.pow((Bt+4.45)/2.55,2)+Math.pow((Yt+1.15)/4.05,2));if(vt<1||Tt<1)continue}const jt=ht.evalH(Bt,Yt),Ie=Math.hypot(ht.evalH(Bt+.4,Yt)-jt,ht.evalH(Bt,Yt+.4)-jt)/.4;if(jt<-.2||Ie>.66||ue(Bt*.48-8.2,Yt*.48+5.7,3)<.48)continue;const he=.68+ft(Mt,11.9)*.65;dt.position.set(Bt,jt-.015,Yt),dt.scale.set(he,he*(.85+ft(Mt,14.2)*.35),he),dt.rotation.set((ft(Mt,18.5)-.5)*.18,ft(Mt,22.1)*Math.PI*2,(ft(Mt,26.8)-.5)*.18),dt.updateMatrix(),It.setMatrixAt(Ce,dt.matrix);const st=ue(Bt*.25+13.1,Yt*.25-9.4,2);st<.42?re.setHSL(.93+(ft(Mt,31.1)-.5)*.04,.68,.66+ft(Mt,33.7)*.1):st<.62?re.setHSL(.12,.14,.88+ft(Mt,35.9)*.08):st<.78?re.setHSL(.13+(ft(Mt,39.2)-.5)*.02,.86,.56+ft(Mt,41.8)*.08):re.setHSL(.79+(ft(Mt,45.1)-.5)*.04,.52,.54+ft(Mt,49.3)*.1),It.setColorAt(Ce,re),Ce++,At++}}It.count=Ce,It.instanceMatrix.needsUpdate=!0,It.instanceColor&&(It.instanceColor.needsUpdate=!0),t.add(It),t.add(kv(i));const ve=bv([{x:-2,z:-8,radius:22.5},{x:-18,z:-26,radius:18},{x:27.5,z:-10.5,radius:6.5},{x:-37.5,z:-22,radius:7.2},{x:R,z:L,radius:5.8,boost:1},{x:-66,z:-32,radius:25.5},{x:-91,z:-42.5,radius:21},{x:88,z:36,radius:34.5},{x:59.5,z:23,radius:11},{x:43.5,z:14.5,radius:6.2},{x:63,z:50.5,radius:8.2},{x:88,z:-56,radius:30.5},{x:70,z:-22.5,radius:17.5},{x:-124,z:-86,radius:34},{x:-42,z:-96,radius:20},{x:36,z:-108,radius:22},{x:-144,z:78,radius:44},{x:168,z:122,radius:42},{x:-206,z:-96,radius:46},{x:-8,z:-222,radius:58},{x:-18,z:236,radius:32}],i);t.add(ve.mesh);const We=[],Xe=[{cx:-2,cz:-8,rMax:42,rays:84,boost:1.15},{cx:-68,cz:-33,rMax:44,rays:52,boost:1.05},{cx:88,cz:36,rMax:48,rays:44,boost:.95},{cx:84,cz:-46,rMax:48,rays:40,boost:.95},{cx:-124,cz:-86,rMax:46,rays:28,boost:.9}];for(let Y=0;Y<Xe.length;Y++){const ht=Xe[Y];for(let bt=0;bt<ht.rays;bt++){const At=bt/ht.rays*Math.PI*2+(ft(Y*97+bt,13.7)-.5)*.05,Nt=Math.cos(At),Mt=Math.sin(At);for(let Bt=ht.rMax;Bt>=4.5;Bt-=.75){const Yt=ht.cx+Nt*Bt,jt=ht.cz+Mt*Bt;if(ei(Yt,jt)>=ge-.35){ei(Yt+Nt*1.2,jt+Mt*1.2)<ge-.45&&We.push({x:Yt+Nt*.25,z:jt+Mt*.25,landX:-Nt,landZ:-Mt,boost:ht.boost});break}}}}for(let Y=0;Y<Ls.length;Y++){const ht=Ls[Y];for(let bt=0;bt<10;bt++){const At=bt/10*Math.PI*2+ft(Y*31+bt,7.3)*.3,Nt=(ht.rx*Math.abs(Math.cos(At))+ht.rz*Math.abs(Math.sin(At)))*.92+.6;We.push({x:ht.x+Math.cos(At)*Nt,z:ht.z+Math.sin(At)*Nt,landX:-Math.cos(At),landZ:-Math.sin(At),boost:1.12})}}for(let Y=0;Y<co.length;Y++){const ht=co[Y],bt=Math.cos(ht.rotY),At=Math.sin(ht.rotY);for(let Nt=0;Nt<16;Nt++){const Mt=-.82+Nt/15*1.64;if(!(Math.abs(Mt*ht.halfLength)<ht.openingHalfSpan*.72))for(const Bt of[-1,1]){const Yt=Mt*ht.halfLength,jt=Bt*(ht.halfThickness*1.15),Ie=ht.x+Yt*bt+jt*At,Kt=ht.z-Yt*At+jt*bt;We.push({x:Ie,z:Kt,landX:-Bt*At,landZ:-Bt*bt,boost:1.1})}}}const qe=2400,Ln=new Float32Array(qe*3),nn=new Float32Array(qe*3),Kn=new Float32Array(qe*3),xi=Math.max(1,We.length);for(let Y=0;Y<qe;Y++){const ht=We[Y%xi]??{x:0,z:12,landX:0,landZ:-1,boost:1},bt=-ht.landZ,At=ht.landX,Nt=(ft(Y,9.1)-.5)*2.6,Mt=(ft(Y,15.4)-.4)*1.1;Ln[Y*3]=ht.x+bt*Nt+ht.landX*Mt,Ln[Y*3+1]=ge+.08+ft(Y,21.8)*.45,Ln[Y*3+2]=ht.z+At*Nt+ht.landZ*Mt;const Bt=ft(Y,28.3)<.72?1:-.45,Yt=(1.6+ft(Y,34.7)*3.8)*Bt*ht.boost,jt=(ft(Y,41.2)-.5)*2.8;nn[Y*3]=ht.landX*Yt+bt*jt,nn[Y*3+1]=(4.4+Math.pow(ft(Y,49.6),.72)*5.8)*ht.boost,nn[Y*3+2]=ht.landZ*Yt+At*jt,Kn[Y*3]=ft(Y,57.3),Kn[Y*3+1]=.48+ft(Y,64.9)*.36,Kn[Y*3+2]=.55+ft(Y,73.1)*.95}const Qn=new Zt;Qn.setAttribute("position",new Z(Ln,3)),Qn.setAttribute("aVelocity",new Z(nn,3)),Qn.setAttribute("aMeta",new Z(Kn,3));const hn={...i,uWaveEnergy:{value:1}},Mi=new ke({name:"CoastalWaveRockSplashParticles",transparent:!0,depthWrite:!1,uniforms:hn,vertexShader:`
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
      ${En}
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
    `}),yn=new Rs(Qn,Mi);yn.renderOrder=4,yn.frustumCulled=!1,t.add(yn);const bn=3200,un=new Zt;un.setAttribute("position",new Z(new Float32Array([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0]),3)),un.setAttribute("uv",new Z(new Float32Array([0,0,1,0,1,1,0,1]),2)),un.setIndex([0,1,2,0,2,3]);const In=new _p;In.index=un.index,In.attributes.position=un.attributes.position,In.attributes.uv=un.attributes.uv;const Dn=new Float32Array(bn*3),wi=new Float32Array(bn*2);for(let Y=0;Y<bn;Y++)Dn[Y*3]=(ft(Y,3.7)-.5)*92,Dn[Y*3+1]=(ft(Y,11.9)-.5)*48,Dn[Y*3+2]=(ft(Y,19.3)-.5)*92,wi[Y*2]=ft(Y,29.1),wi[Y*2+1]=ft(Y,43.7);In.setAttribute("aRainOffset",new xa(Dn,3)),In.setAttribute("aRainSeed",new xa(wi,2)),In.instanceCount=bn;const ls=new E(0,2.5,8),Vi={...i,uCamCenter:{value:ls}},Jn=new ke({name:"NordicPhysicalRainStreaks",transparent:!0,depthWrite:!1,side:Je,uniforms:Vi,vertexShader:`
      attribute vec3 aRainOffset;
      attribute vec2 aRainSeed;
      uniform float uTime;
      uniform float uRainIntensity;
      uniform vec3 uCamCenter;
      varying vec2 vRainUv;
      varying float vRainAlpha;
      varying vec3 vWorldPos;

      void main() {
        vRainUv = uv;
        float rainAmt = clamp(uRainIntensity, 0.0, 1.0);
        // Terminal raindrop velocity (~21..28 m/s downward) slanted by turbulent North Sea wind gusts!
        float fallSpeed = (20.5 + 8.0 * aRainSeed.x) * (0.82 + 0.30 * rainAmt);
        float gust = sin(uTime * 1.35 + aRainSeed.y * 6.283) * 1.35;
        vec3 rainVel = vec3(3.8 + 4.4 * rainAmt + gust, -fallSpeed, -2.4 - 2.8 * rainAmt + gust * 0.5);

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
      ${En}
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

        vec3 skyTint = mix(uHorizonAntiColor, uHorizonSunColor, 0.42) * 1.35 + uSunColor * 0.48 + vec3(0.18, 0.22, 0.26);
        gl_FragColor = vec4(clamp(skyTint, vec3(0.0), vec3(4.5)), alpha);
      }
    `}),F=new Ne(In,Jn);F.renderOrder=6,F.frustumCulled=!1,t.add(F);const ot=900,ut=new Float32Array(ot*3),pt=new Float32Array(ot*2);for(let Y=0;Y<ot;Y++){let ht=0,bt=0,At=0;Y<540?(ht=(ft(Y,7.1)-.5)*44,At=-12+(ft(Y,15.9)-.5)*38,bt=Math.max(ge+.14,pi(ht,At)+.04)):(ht=(ft(Y,23.4)-.5)*110,At=-16+(ft(Y,31.8)-.5)*110,bt=ge+.14),ut[Y*3]=ht,ut[Y*3+1]=bt,ut[Y*3+2]=At,pt[Y*2]=ft(Y,47.2),pt[Y*2+1]=ft(Y,61.5)}const rt=new Zt;rt.setAttribute("position",new Z(ut,3)),rt.setAttribute("aSplashSeed",new Z(pt,2));const Lt=new ke({name:"NordicRaindropSurfaceSplashes",transparent:!0,depthWrite:!1,uniforms:Vi,vertexShader:`
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
      ${En}
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
    `}),Ot=new Rs(rt,Lt);Ot.renderOrder=5,Ot.frustumCulled=!1,t.add(Ot);const Xt=720,qt=new Float32Array(Xt*3),se=new Float32Array(Xt);for(let Y=0;Y<Xt;Y++)qt[Y*3]=(ft(Y,31.7)-.5)*76,qt[Y*3+1]=-9.5+ft(Y,47.3)*32,qt[Y*3+2]=-22+ft(Y,59.1)*64,se[Y]=ft(Y,73.9);const le=new Zt;le.setAttribute("position",new Z(qt,3)),le.setAttribute("aSeed",new Z(se,1));const Jt={uTime:{value:0},uColor:i.uSunColor},Ae=new ke({transparent:!0,depthWrite:!1,blending:pa,uniforms:Jt,vertexShader:`
      attribute float aSeed;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.x = mod(p.x + 38.0 + uTime * (1.25 + aSeed * 1.1), 76.0) - 38.0;
        // Coastal cliff updraft near the front jump-off rim (z ~ 2..10, |x| < 18)!
        float cliffUpdraft = exp(-pow((p.z - 5.0) / 8.5, 2.0)) * smoothstep(22.0, 4.0, abs(p.x));
        p.y += sin(uTime * 1.15 + aSeed * 12.0 + p.x * 0.12) * 0.55 + cliffUpdraft * (1.8 + 1.4 * sin(uTime * 0.8 + aSeed * 6.28));
        p.z = mod(p.z + 22.0 - uTime * (0.85 + aSeed * 0.75), 64.0) - 22.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((18.0 + 15.0 * aSeed) / max(1.0, -mv.z), 1.5, 5.4);
        vAlpha = (0.12 + 0.20 * aSeed) * smoothstep(62.0, 6.0, -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
        float soft = exp(-r2 * 14.0);
        gl_FragColor = vec4(uColor * 0.85 + vec3(0.25), vAlpha * soft);
      }
    `}),Se=new Rs(le,Ae);return Se.renderOrder=5,Se.frustumCulled=!1,t.add(Se),{group:t,ocean:ve,update(Y,ht){ie.uTime.value=Y,Jt.uTime.value=Y,ve.update(Y);const bt=ve.params;hn.uWaveEnergy.value=.45+bt.waveAmplitude*(.55+.45*bt.seaChoppiness),ht&&ls.copy(ht);const At=i.uRainIntensity.value>.005;F.visible=At,Ot.visible=At}}}const on={neckArch:.16,neckYaw:.08,headPitch:-.04,headYaw:.14,headRoll:-.08,earPerk:.76,earAsymmetry:.06,cheekNubFlare:.5,eyeYaw:.06,eyePitch:.02,pupilDilation:.76,blink:0,squint:0,jawOpen:0,teethExtension:0,tongueExtend:.12,tongueCurl:.08,wingUnfurl:.46,wingFlap:.08,wingSweep:-.05,wingCamber:.3,wingWristFold:0,wingTipLag:0,pelvicFinFlare:.9,dorsalSpineSplit:.22,spineArch:.08,spineTwist:.02,forelegStance:.1,hindlegStance:.06,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:.2,tailPitch:.26,tailCurl:.16,tailWaveAmp:0,tailWavePhase:0,rightTailFinFlare:.24,leftProstheticFinFlare:.24,autoSyncProstheticTail:!0,subtleBreathing:!0,alphaGlow:.08,biolumGlow:0,lightningCloak:0},Vv=[{id:"hero-perch",label:"Hero Perch",subtitle:"Noble Alpha Sentinel",patch:{...on}},{id:"gummy-smile",label:"Gummy Grin",subtitle:"Toothless Happy Smile",patch:{...on,headYaw:.22,headPitch:-.06,headRoll:-.24,earPerk:.96,pupilDilation:.94,squint:.22,jawOpen:.34,teethExtension:0,tongueExtend:.58,tongueCurl:.26,tailYaw:.36}},{id:"courtship-cape",label:"Courtship Cape",subtitle:"Beach Wing-Display Dance",patch:{...on,forelegStance:.52,neckArch:.48,headYaw:.28,headPitch:.08,headRoll:-.18,earPerk:1,pupilDilation:.96,jawOpen:.26,teethExtension:0,tongueExtend:.42,wingUnfurl:.96,wingFlap:.88,wingSweep:.44,wingCamber:.68,dorsalSpineSplit:.85}},{id:"curious-tilt",label:"Curious Tilt",subtitle:"Asymmetric Ear-Perk",patch:{...on,headRoll:-.62,headYaw:.14,headPitch:.08,earPerk:.92,earAsymmetry:-.45,pupilDilation:.92,jawOpen:.05,teethExtension:0}},{id:"alpha-roar",label:"Alpha Roar",subtitle:"Split Spines & Cyan Fire",patch:{...on,forelegStance:-.48,spineArch:.36,neckArch:-.22,headPitch:-.22,earPerk:.08,squint:.42,pupilDilation:.08,jawOpen:.88,teethExtension:1,tongueExtend:.52,tongueCurl:.46,wingUnfurl:.92,wingFlap:.46,wingSweep:.28,dorsalSpineSplit:1,alphaGlow:1,biolumGlow:.65,lightningCloak:.35}},{id:"lightning-storm",label:"Storm Skrill",subtitle:"Arc-Plasma Overload",patch:{...on,forelegStance:-.35,wingUnfurl:.98,wingFlap:.62,wingCamber:.72,dorsalSpineSplit:1,pupilDilation:.16,jawOpen:.54,teethExtension:1,alphaGlow:1,biolumGlow:.92,lightningCloak:1}}];function Es(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const Wv=new E(-.16,.985,.06).normalize(),Gv=new E(.16,.985,.06).normalize(),bu=new E().crossVectors(Wv,bo).normalize(),Xv=new E().crossVectors(bo,bu).normalize(),Su=new E().crossVectors(Gv,So).normalize(),Yv=new E().crossVectors(So,Su).normalize();class $v{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new wn;tmpQuat=new Ye;tmpQuatB=new Ye;tmpVecA=new E;tmpVecB=new E;tmpVecC=new E;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;prevHeadRoll=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...on,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,on),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.autoSyncProstheticTail&&(t.rightTailFinFlare!==void 0?this.state.leftProstheticFinFlare=t.rightTailFinFlare:t.leftProstheticFinFlare!==void 0?this.state.rightTailFinFlare=t.leftProstheticFinFlare:t.autoSyncProstheticTail===!0&&(this.state.leftProstheticFinFlare=this.state.rightTailFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0};const e=4.6,n=t%e,s=Math.floor(t/e);let o=0;n>3.85&&n<4.03?o=Math.sin((n-3.85)/.18*Math.PI):s%3===1&&n>4.12&&n<4.29&&(o=Math.sin((n-4.12)/.17*Math.PI));const a=(t+1.3)%6.2,r=a<.22?Math.sin(a/.22*Math.PI)*.085:0,l=(t+3.9)%7.4,c=l<.2?-Math.sin(l/.2*Math.PI)*.075:0,h=Math.sin(t*.72)*.032+Math.sin(t*1.95+1.1)*.014,u=Math.cos(t*.58+.4)*.022,d=Math.sin(t*1.15)*.025;return{autoBlink:o,earTwitchL:r,earTwitchR:c,gazeMicroX:h,gazeMicroY:u,pupilPulse:d}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new ce().copy(this.asset.rootGroup.matrixWorld).invert(),g=new ce().multiplyMatrices(f,c.parent.matrixWorld),v=new E().setFromMatrixPosition(new ce().multiplyMatrices(g,new ce().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),x=l.bindWorldPositions.get(n),w=new E().subVectors(p,m),_=new E().subVectors(x,p),A=w.length(),y=_.length(),S=x.clone();a&&(S.add(a),S.y=Math.max(x.y,S.y));const T=new E().subVectors(S,v),b=T.length(),M=(A+y)*.968,P=Math.abs(A-y)+.085,C=q.clamp(b,P,M),R=T.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),D=q.clamp((A*A+C*C-y*y)/(2*A*C),-1,1),U=Math.sqrt(Math.max(0,1-D*D)),z=v.clone().addScaledVector(R,A*D).addScaledVector(L,A*U),N=v.clone().addScaledVector(R,C),H=new E().subVectors(z,v).normalize(),V=new E().subVectors(N,z).normalize(),$=new Ye().setFromUnitVectors(w.clone().normalize(),H),K=new Ye().setFromUnitVectors(_.clone().normalize(),V),X=new Ye().setFromRotationMatrix(g);c.quaternion.copy(X).invert().multiply($),h.quaternion.copy($).invert().multiply(K),u.quaternion.copy(K).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;const o=68,a=11.5,r=q.clamp(-n*.055,-.28,.28),l=q.clamp(-s*.055,-.28,.28);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=q.clamp(e.airborneFactor,0,1),s=this.sampleLivingIdleMicros(t),o=e.subtleBreathing?Math.sin(t*1.55)*.8+Math.sin(t*3.1)*.2:0,a=e.subtleBreathing?Math.sin(t*1.15-.5)*.02:0,r=Es(.02,.55,Math.abs(e.legFlightTuck))*(1-n),l=Math.max(n,r),c=1-l,h=e.forelegStance>=0?e.forelegStance*.055:e.forelegStance*.275,u=e.hindlegStance>=0?e.hindlegStance*.048:e.hindlegStance*.245,d=.52*h+.48*u,f=q.clamp((u-h)*.44,-.22,.24),g=q.clamp(e.limbStride,-1,1)*.045*c,v=r*.34;this.setBonePose("root",f*c,g,0,"XYZ",0,d*c+v+o*.004,0);const m=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+m,-e.spineTwist*.05-g*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+o*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+o*.008,e.spineTwist*.07,0),this.setBonePose("chest",-f*.32*c+o*.01-m*.6,e.spineTwist*.07+g*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const p=q.clamp(e.limbStride,-1,1),x=Math.max(0,-e.forelegStance),w=Math.max(0,-e.hindlegStance);for(const j of["L","R"]){const Q=j==="L"?1:-1,W=this.asset.rig.boneMap.get(`scapula_${j}`);if(this.setBonePose(`scapula_${j}`,0,0,0),W.updateMatrixWorld(!0),l<.999){const it=Q*p*.23,St=-Q*p*.22,et=Math.max(0,Q*p)*Math.sin(Math.abs(p)*Math.PI)*.042,k=Math.max(0,-Q*p)*Math.sin(Math.abs(p)*Math.PI)*.038,wt=new E(Q*x*.055,et,it+x*.045),at=new E(Q*w*.05,k,St-w*.04);this.asset.rootGroup.updateMatrixWorld(!1);const yt=new ce().copy(this.asset.rootGroup.matrixWorld).invert(),dt=this.asset.rig.boneMap.get(`shoulder_${j}`);dt.position.copy(this.restPos.get(`shoulder_${j}`)),dt.updateMatrixWorld(!0);const Ut=this.tmpVecC.setFromMatrixPosition(dt.matrixWorld).applyMatrix4(yt),Pt=this.asset.rig.bindWorldPositions.get(`wrist_${j}`).clone().add(wt),B=Ut.distanceTo(Pt)-.675;B>0&&(this.setBonePose(`scapula_${j}`,0,0,0,"XYZ",0,-B*1.08*c,0),W.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${j}`,`elbow_${j}`,`wrist_${j}`,`forepaw_${j}`,this.tmpVecA.set(Q*(.2+.16*x),-.08+.18*x,-1).normalize(),wt,et*2.2),this.solvePlantedLimbIK(`hip_${j}`,`knee_${j}`,`ankle_${j}`,`hindpaw_${j}`,this.tmpVecB.set(Q*(.2+.14*w),.14+.16*w,1).normalize(),at,k*2)}if(l>.001){const it=q.clamp(e.legFlightTuck,-1,1),St=e.wingFlap*.082*l,et=Math.sin(t*2.05+(j==="L"?0:1.25))*.052*l,k=Math.cos(t*1.58+(j==="L"?.7:2.2))*.046*l,wt=(it>=0?.86*it:-.44*-it)+St*.65+et*.5,at=it>=0?-Q*.06*it:0,yt=(it>=0?Q*.09*it:Q*.05*-it)+Q*k*.35,dt=(it>=0?.34*it:.28*-it)-St*.55+k*.65,Ut=(it>=0?.4*it:.2*-it)+et*.7,Pt=(it>=0?.36*it:-.1*-it)+k*.55,B=(it>=0?1.16*it:-.48*-it)+St*.55+k*.55,I=(it>=0?-Q*.05*it:0)+Q*et*.25,nt=(it>=0?Q*.07*it:Q*.05*-it)+Q*et*.3,mt=(it>=0?-.66*it:.34*-it)-St*.5-et*.65,xt=(it>=0?.78*it:-.16*-it)+St*.45+k*.75,_t=(it>=0?.62*it:.16*-it)+et*.6,Ft=(gt,Rt,ne,Et)=>{const Dt=this.asset.rig.boneMap.get(gt);this.tmpEuler.set(Rt,ne,Et,"XYZ"),this.tmpQuat.copy(this.restQuat.get(gt)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),l>=.999?(Dt.position.copy(this.restPos.get(gt)),Dt.quaternion.copy(this.tmpQuat)):Dt.quaternion.slerp(this.tmpQuat,l)};Ft(`shoulder_${j}`,wt,at,yt),Ft(`elbow_${j}`,dt,0,0),Ft(`wrist_${j}`,Ut,0,0),Ft(`forepaw_${j}`,Pt,0,0),Ft(`hip_${j}`,B,I,nt),Ft(`knee_${j}`,mt,0,0),Ft(`ankle_${j}`,xt,0,0),Ft(`hindpaw_${j}`,_t,0,0)}}const _=Es(.28,.85,e.jawOpen),A=-e.neckArch*.12-o*.009-_*.035,y=e.neckYaw*.13;this.setBonePose("neck_1",A+e.headPitch*.04,y+e.headYaw*.05,e.headRoll*.04,"YXZ"),this.setBonePose("neck_2",A+e.headPitch*.07,y+e.headYaw*.09,e.headRoll*.07,"YXZ"),this.setBonePose("neck_3",A*.9+e.headPitch*.1,y+e.headYaw*.14,e.headRoll*.11,"YXZ"),this.setBonePose("neck_4",A*.8+e.headPitch*.14,y*.85+e.headYaw*.19,e.headRoll*.15,"YXZ"),this.setBonePose("head",e.headPitch*.36+o*.01-_*.05,e.headYaw*.46,e.headRoll*.36,"YXZ");const S=q.clamp(e.earPerk-_*.28,0,1),T=(S-.5)*.72,b=e.headRoll*.18;for(const j of["L","R"]){const Q=j==="L"?1:-1,W=j==="L"?s.earTwitchL:s.earTwitchR,it=Q*(e.earAsymmetry*.28+b)+W,St=T+it+this.earLagPitch*.65,et=(1-S)*.36-Q*this.earLagYaw*.55;this.setBonePose(`ear_${j}_1`,St*.65,-Q*et,Q*St*.25,"YXZ"),this.setBonePose(`ear_${j}_2`,St*.36+this.earLagPitch*.35,-Q*et*.35,0,"YXZ"),this.setBonePose(`ear_${j}_3`,St*.24+this.earLagPitch*.25,0,0,"YXZ");const wt=(q.clamp(e.cheekNubFlare+_*.22,0,1)-.5)*.44;this.setBonePose(`cheekUpper_${j}_1`,wt*.3,-Q*(wt*.55+this.earLagYaw*.25),0),this.setBonePose(`cheekLower_${j}_1`,wt*.2,-Q*(wt*.45+this.earLagYaw*.2),0)}const M=q.clamp(e.eyeYaw+s.gazeMicroX,-1,1),P=q.clamp(e.eyePitch+s.gazeMicroY,-1,1),C=Math.max(e.blink,s.autoBlink*(1-e.blink)),R=q.clamp(e.squint+_*.26,0,1);for(const j of["L","R"]){const Q=j==="L"?bu:Su,W=j==="L"?Xv:Yv;this.tmpQuat.setFromAxisAngle(W,M*.34),this.tmpQuatB.setFromAxisAngle(Q,-P*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${j}`,this.tmpQuat);const it=P>0?-P*.14:-P*.22,St=P>0?P*.12:P*.08,et=q.clamp(Math.max(C,R*.52)+it*(1-C),-.14,1),k=q.clamp(Math.max(C,R*.6)+St*(1-C),-.1,1);this.tmpQuat.setFromAxisAngle(Q,et*.72),this.setBoneAxisQuat(`eyelidUpper_${j}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(Q,-k*.64),this.setBoneAxisQuat(`eyelidLower_${j}`,this.tmpQuat)}const L=q.clamp(e.pupilDilation+s.pupilPulse-_*.25,0,1);this.asset.materials.eyeMaterials.uniforms.uPupilDilation.value=L,this.asset.materials.eyeMaterials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uTime.value=t,this.asset.materials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uBiolumGlow.value=e.biolumGlow,this.asset.materials.uniforms.uLightningCloak.value=e.lightningCloak,this.setBonePose("jaw",e.jawOpen*.66,0,0);const D=.28+.72*Es(0,.14,e.jawOpen),z=1-e.teethExtension*D;this.setBonePose("teethUpper",0,0,0,"XYZ",0,z*.025,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-z*.023,0);const N=Es(.06,.48,e.jawOpen),H=e.tongueExtend*.044*N;if(e.tongueCurl>=0){const j=-e.tongueCurl*(.018+.2*N);this.setBonePose("tongue_1",j*.35,0,0,"XYZ",0,0,H),this.setBonePose("tongue_2",j*.65,0,0),this.setBonePose("tongue_3",j*.95,0,0),this.setBonePose("tongue_4",j*1.15,0,0)}else{const j=N*Es(.2,.95,e.tongueExtend),Q=-e.tongueCurl*j;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,H),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",Q*.13,0,0),this.setBonePose("tongue_4",Q*.2,0,0)}const V=q.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),$=q.lerp(.11,.74,l);for(const j of["L","R"]){const Q=j==="L"?1:-1,W=e.wingFlap*(.25+.75*e.wingUnfurl),it=Q*(W>=0?W*.74:W*$),St=W<0?W*q.lerp(.04,.26,n)*e.wingUnfurl:0,et=Q*e.wingSweep*.44,k=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${j}`,.05*V,Q*.12*V,it*.18,"YXZ"),this.setBonePose(`wingShoulder_${j}`,e.wingCamber*.09,Q*.82*V+et,it-Q*.22*V,"YXZ"),this.setBonePose(`wingElbow_${j}`,0,-Q*(1.42*V+k*.45),Q*.86*V+it*.22+Q*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${j}`,-.35*V-e.wingCamber*.18,Q*(1.32*V+k*.55)+et*.35,Q*.12*V+Q*St*.3+Q*e.wingTipLag*.26,"YXZ");for(let at=1;at<=6;at++){const yt=(at-1)/5,dt=Q*(-.38+yt*.58)*V,Ut=-e.wingCamber*(.14+.18*(1-yt))-.1*V,Pt=e.wingTipLag*(.18+.26*yt),B=W>=0?-W*.22:-W*q.lerp(.06*Math.pow(Math.max(0,(yt-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${j}_${at}_a`,Ut,dt,Q*(B*.4+Pt*.45),"YXZ"),this.setBonePose(`wingFinger_${j}_${at}_b`,Ut*.5,dt*.25,Q*(B*.7+Pt*.75),"YXZ")}const wt=1-e.pelvicFinFlare;for(let at=1;at<=3;at++)this.setBonePose(`pelvicFin_${j}_${at}`,0,0,-Q*wt*1.18,"XYZ")}for(const j of this.asset.dorsalSpineMeshes)j.morphTargetInfluences&&j.morphTargetInfluences.length>0&&(j.morphTargetInfluences[0]=e.dorsalSpineSplit);const K=e.autoSyncProstheticTail?e.rightTailFinFlare:e.leftProstheticFinFlare,X=Math.min(e.rightTailFinFlare,K),G=X<0?Math.sin(Math.abs(X)*1.38)*.53:.02;for(let j=1;j<=10;j++){const Q=j/10,W=j>=9,it=W?0:e.tailYaw*.13+e.tailCurl*.18*Math.pow(Q,1.4)+a*Q,St=W?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-j*.48)*.085*(.4+.6*Q);let et=W?0:e.tailPitch*.088*(.45+Q)+St;if(!W&&n<.85&&j>=2&&j<=8){const k=Math.max(0,(G-.05)*.135)*(1-n);et<k&&(et=q.lerp(et,k,Es(1,5,j)))}if(this.setBonePose(`tail_${j}`,et,it,0,"YXZ"),n<.85){const k=this.asset.rig.boneMap.get(`tail_${j}`);k.parent.updateMatrixWorld(!0),k.updateMatrixWorld(!0);const wt=this.tmpVecC.setFromMatrixPosition(k.matrixWorld),yt=pi(wt.x,wt.z)+(j>=8?.055+G:.065);if(wt.y<yt&&j>1){const dt=k.parent,Ut=k.position.length(),Pt=Math.min(.45,(yt-wt.y)/Math.max(.15,Ut))*(1-n);this.tmpEuler.set(Pt,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),dt.quaternion.multiply(this.tmpQuat),dt.updateMatrixWorld(!0)}}}const O=1.38,J=e.rightTailFinFlare*O,lt=K*O;this.setBonePose("tailFinHinge_R",0,0,-J,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,lt,"XYZ");for(let j=1;j<=5;j++)this.setBonePose(`tailFin_R_${j}`,0,0,0),this.setBonePose(`tailFin_L_${j}`,0,0,0);this.setBonePose("prostheticCollar",0,0,lt*.22),this.setBonePose("prostheticRod",0,0,0),this.asset.rig.rootBone.updateMatrixWorld(!0)}}function Au(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function hh(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function ss(i){const t=Math.max(0,Math.min(1,(i-1.44)/.625)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.78)/.22),2))),n=.054*hh(t,.36,.23),s=-.046*Au(.5,.88,t),o=.013*hh(t,.77,.13);return(.204+n+s+o)*e}function ki(i){const t=Math.max(0,Math.min(1,(i-1.55)/.5149999999999999)),e=.022*Math.pow(1-Au(0,.44,t),1.55),n=-.008*Math.sin(t*Math.PI);return 1.482+e+n}const Tu=[{rootX:.018,rootY:.116,rootZ:-3.34,tipX:.34,tipY:.126,tipZ:-3.32},{rootX:.018,rootY:.116,rootZ:-3.5,tipX:.45,tipY:.13,tipZ:-3.52},{rootX:.018,rootY:.116,rootZ:-3.66,tipX:.44,tipY:.13,tipZ:-3.74},{rootX:.018,rootY:.116,rootZ:-3.82,tipX:.34,tipY:.125,tipZ:-3.96},{rootX:.018,rootY:.116,rootZ:-3.97,tipX:.18,tipY:.12,tipZ:-4.14}],Eu=[{parentBone:"tail_1",rootX:.155,rootY:.7,rootZ:-.78,tipX:.37,tipY:.68,tipZ:-.92},{parentBone:"tail_2",rootX:.13,rootY:.62,rootZ:-1.02,tipX:.42,tipY:.59,tipZ:-1.19},{parentBone:"tail_2",rootX:.105,rootY:.55,rootZ:-1.24,tipX:.31,tipY:.52,tipZ:-1.42}],To=new E(.415,.035,.909).normalize(),Eo=new E(-.415,.035,.909).normalize(),Sa=.075;function Cu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.292:.274),o=t?.935:-.51,a=.036,r=t?.074:.069,l=[],c=[-.84,-.28,.28,.84];for(let h=0;h<4;h++){const u=c[h]+e*.05,d=h===1||h===2,f=(t?.106:.098)*(d?1:.86),g=(t?.054:.05)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.032,dirX:Math.sin(u)*.9,dirZ:Math.cos(u),toeLength:f,baseRadius:d?.037:.033,tipRadius:d?.024:.021,clawLength:g})}return l}function qv(){const i=[{name:"root",parent:null,worldPos:[0,.79,.11]},{name:"pelvis",parent:"root",worldPos:[0,.77,-.5]},{name:"spine_1",parent:"root",worldPos:[0,.78,.13]},{name:"spine_2",parent:"spine_1",worldPos:[0,.84,.46]},{name:"chest",parent:"spine_2",worldPos:[0,.91,.79]},{name:"neck_1",parent:"chest",worldPos:[0,1.04,.99]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.19,1.14]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.35,1.28]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.47,1.4]},{name:"head",parent:"neck_4",worldPos:[0,1.535,1.51]},{name:"eye_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eye_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidUpper_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidLower_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidLower_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"teethUpper",parent:"head",worldPos:[0,1.495,1.8]},{name:"jaw",parent:"head",worldPos:[0,1.49,1.55]},{name:"teethLower",parent:"jaw",worldPos:[0,1.472,1.8]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.472,1.62]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.472,1.72]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.472,1.82]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.47,1.91]},{name:"ear_L_1",parent:"head",worldPos:[.118,1.665,1.48]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.142,1.748,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.156,1.815,1.29]},{name:"ear_R_1",parent:"head",worldPos:[-.118,1.665,1.48]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.142,1.748,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.156,1.815,1.29]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.222,1.568,1.49]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.268,1.592,1.4]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.222,1.568,1.49]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.268,1.592,1.4]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.2,.87,.81]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.232,.75,.83]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.278,.435,.74]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.288,.142,.87]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.292,.04,.965]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.192,.71,-.5]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.256,.425,-.32]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.27,.215,-.61]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.274,.04,-.475]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.21,.96,.69]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.34,1,.67]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.88,1.05,.46]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.56,1.11,.86]}),[{mid:[n*1.48,1.08,.16],tip:[n*1.4,.99,-.6]},{mid:[n*1.84,1.09,.22],tip:[n*2.04,1,-.56]},{mid:[n*2.18,1.11,.33],tip:[n*2.62,1.02,-.4]},{mid:[n*2.48,1.13,.48],tip:[n*3.14,1.05,-.14]},{mid:[n*2.78,1.15,.68],tip:[n*3.54,1.08,.22]},{mid:[n*2.94,1.17,.86],tip:[n*3.9,1.12,.7]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.72,-.76],[0,.63,-1.08],[0,.5,-1.43],[0,.36,-1.8],[0,.24,-2.18],[0,.16,-2.56],[0,.12,-2.94],[0,.116,-3.3],[0,.116,-3.66],[0,.116,-4.06]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;Eu.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.02,.116,-3.65]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.02,.116,-3.65]});for(const e of["L","R"]){const n=e==="L"?1:-1;Tu.forEach((s,o)=>{i.push({name:`tailFin_${e}_${o+1}`,parent:`tailFinHinge_${e}`,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i}function Zv(){const i=qv(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new Al;c.name=l.name;const h=new E(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new Ra(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}const Qe={neckArch:.24,neckYaw:-.1,headPitch:-.02,headYaw:-.18,headRoll:.16,earPerk:.82,earAsymmetry:.1,cheekNubFlare:.52,eyeYaw:-.08,eyePitch:.04,pupilDilation:.84,blink:0,squint:.08,jawOpen:0,teethExtension:0,tongueExtend:.1,tongueCurl:.05,wingUnfurl:.36,wingFlap:.06,wingSweep:-.08,wingCamber:.28,wingWristFold:0,wingTipLag:0,coyWingVeil:0,pelvicFinFlare:.88,dorsalSailFlex:.24,spineArch:.12,spineTwist:-.04,forelegStance:.14,hindlegStance:.08,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:-.26,tailPitch:.24,tailCurl:-.24,tailWaveAmp:0,tailWavePhase:0,rightHeartFinFlare:.18,leftHeartFinFlare:.18,syncHeartTailFlukes:!0,subtleBreathing:!0,iridescentShimmer:.78,pastelTint:.78,radiantGlow:.34,biolumGlow:0,plasmaGlow:.04,thermalCloak:0},jv=[{id:"serene-mate",label:"Serene Mate",subtitle:"Sweet Gaze & Heart Tail",patch:{...Qe}},{id:"curious-cat",label:"Curious Tilt",subtitle:"Adorable Head-Roll & Big Eyes",patch:{...Qe,headRoll:.68,headPitch:.1,headYaw:-.06,earPerk:.98,earAsymmetry:.42,pupilDilation:.96,squint:0,jawOpen:.06,teethExtension:0,coyWingVeil:0,thermalCloak:0,plasmaGlow:.08}},{id:"happy-purr",label:"Happy Purr",subtitle:"Blissful Feline Smile",patch:{...Qe,neckArch:.42,neckYaw:-.22,headYaw:-.28,headPitch:-.1,headRoll:.28,earPerk:.66,squint:.68,blink:.22,pupilDilation:.9,jawOpen:.14,teethExtension:0,tongueExtend:.35,tailYaw:-.45,tailCurl:-.48,rightHeartFinFlare:.04,leftHeartFinFlare:.04,coyWingVeil:0,thermalCloak:0,iridescentShimmer:.95}},{id:"coy-wing-veil",label:"Coy Wing Peek",subtitle:"Shy Wing-Curtain Pose",patch:{...Qe,headYaw:-.26,headPitch:-.12,headRoll:.34,eyeYaw:.22,eyePitch:.14,pupilDilation:.88,earPerk:.58,coyWingVeil:.92,wingUnfurl:.52,thermalCloak:0}},{id:"hidden-world-biolum",label:"Hidden World Glow",subtitle:"Neon Rose & Cyan Filigree",patch:{...Qe,wingUnfurl:.78,wingFlap:.22,neckArch:.34,headRoll:.22,pupilDilation:.94,iridescentShimmer:.96,radiantGlow:.64,biolumGlow:.96,plasmaGlow:.42,thermalCloak:0}},{id:"mirror-cloak",label:"Mirror Cloak",subtitle:"Plasma Silicate Stealth",patch:{...Qe,wingUnfurl:.72,wingFlap:.24,neckArch:.3,headPitch:.12,pupilDilation:.62,coyWingVeil:0,plasmaGlow:.78,iridescentShimmer:1,thermalCloak:.86}},{id:"strike-hiss",label:"Strike Hiss",subtitle:"Fangs & Orchid Plasma",patch:{...Qe,forelegStance:-.55,spineArch:.42,neckArch:-.18,headPitch:-.14,headRoll:-.08,earPerk:.06,squint:.48,pupilDilation:.06,jawOpen:.76,teethExtension:1,tongueExtend:.48,tongueCurl:.45,wingUnfurl:.84,wingFlap:.38,wingSweep:.32,coyWingVeil:0,dorsalSailFlex:1,plasmaGlow:.92,thermalCloak:0}}];function Cs(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const Kv=new E(-.19,.98,.06).normalize(),Qv=new E(.19,.98,.06).normalize(),Pu=new E().crossVectors(Kv,To).normalize(),Jv=new E().crossVectors(To,Pu).normalize(),Ru=new E().crossVectors(Qv,Eo).normalize(),t_=new E().crossVectors(Eo,Ru).normalize();class e_{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new wn;tmpQuat=new Ye;tmpQuatB=new Ye;tmpVecA=new E;tmpVecB=new E;tmpVecC=new E;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...Qe,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,Qe),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.syncHeartTailFlukes&&(t.rightHeartFinFlare!==void 0?this.state.leftHeartFinFlare=t.rightHeartFinFlare:t.leftHeartFinFlare!==void 0?this.state.rightHeartFinFlare=t.leftHeartFinFlare:t.syncHeartTailFlukes===!0&&(this.state.leftHeartFinFlare=this.state.rightHeartFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingFelineIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0,felineHeadMicroRoll:0};const e=(t+2.15)%4.35;let n=0;e<.16?n=Math.sin(e/.16*Math.PI):e>.25&&e<.4&&Math.floor((t+2.15)/4.35)%3===1&&(n=Math.sin((e-.25)/.15*Math.PI));const s=(t+.8)%5.6,o=s<.2?Math.sin(s/.2*Math.PI)*.095:0,a=(t+3.2)%6.8,r=a<.18?-Math.sin(a/.18*Math.PI)*.085:0,l=Math.sin(t*.68+1.4)*.03+Math.sin(t*1.85)*.012,c=Math.cos(t*.54+2.1)*.022,h=Math.sin(t*1.25+.8)*.028,u=Math.sin(t*.62+.7)*.026;return{autoBlink:n,earTwitchL:o,earTwitchR:r,gazeMicroX:l,gazeMicroY:c,pupilPulse:h,felineHeadMicroRoll:u}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new ce().copy(this.asset.rootGroup.matrixWorld).invert(),g=new ce().multiplyMatrices(f,c.parent.matrixWorld),v=new E().setFromMatrixPosition(new ce().multiplyMatrices(g,new ce().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),x=l.bindWorldPositions.get(n),w=new E().subVectors(p,m),_=new E().subVectors(x,p),A=w.length(),y=_.length(),S=x.clone();a&&(S.add(a),S.y=Math.max(x.y,S.y));const T=new E().subVectors(S,v),b=T.length(),M=(A+y)*.968,P=Math.abs(A-y)+.08,C=q.clamp(b,P,M),R=T.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),D=q.clamp((A*A+C*C-y*y)/(2*A*C),-1,1),U=Math.sqrt(Math.max(0,1-D*D)),z=v.clone().addScaledVector(R,A*D).addScaledVector(L,A*U),N=v.clone().addScaledVector(R,C),H=new E().subVectors(z,v).normalize(),V=new E().subVectors(N,z).normalize(),$=new Ye().setFromUnitVectors(w.clone().normalize(),H),K=new Ye().setFromUnitVectors(_.clone().normalize(),V),X=new Ye().setFromRotationMatrix(g);c.quaternion.copy(X).invert().multiply($),h.quaternion.copy($).invert().multiply(K),u.quaternion.copy(K).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;const o=64,a=10.8,r=q.clamp(-n*.06,-.3,.3),l=q.clamp(-s*.06,-.3,.3);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=q.clamp(e.airborneFactor,0,1),s=this.sampleLivingFelineIdleMicros(t),o=e.subtleBreathing&&e.squint>.35?Math.sin(t*24)*.08*e.squint:0,a=e.subtleBreathing?Math.sin(t*1.68+.9)*.8+Math.sin(t*3.36+.9)*.2+o:0,r=e.subtleBreathing?Math.sin(t*1.28+1.2)*.026:0,l=Cs(.02,.55,Math.abs(e.legFlightTuck))*(1-n),c=Math.max(n,l),h=1-c,u=e.forelegStance>=0?e.forelegStance*.05:e.forelegStance*.255,d=e.hindlegStance>=0?e.hindlegStance*.044:e.hindlegStance*.23,f=.52*u+.48*d,g=q.clamp((d-u)*.44,-.22,.24),v=q.clamp(e.limbStride,-1,1)*.045*h,m=l*.34;this.setBonePose("root",g*h,v,0,"XYZ",0,f*h+m+a*.004,0);const p=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+p,-e.spineTwist*.05-v*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+a*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+a*.008,e.spineTwist*.07,0),this.setBonePose("chest",-g*.32*h+a*.01-p*.6,e.spineTwist*.07+v*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const x=q.clamp(e.limbStride,-1,1),w=Math.max(0,-e.forelegStance),_=Math.max(0,-e.hindlegStance);for(const W of["L","R"]){const it=W==="L"?1:-1,St=this.asset.rig.boneMap.get(`scapula_${W}`);if(this.setBonePose(`scapula_${W}`,0,0,0),St.updateMatrixWorld(!0),c<.999){const et=it*x*.21,k=-it*x*.2,wt=Math.max(0,it*x)*Math.sin(Math.abs(x)*Math.PI)*.038,at=Math.max(0,-it*x)*Math.sin(Math.abs(x)*Math.PI)*.034,yt=new E(it*w*.05,wt,et+w*.04),dt=new E(it*_*.045,at,k-_*.036);this.asset.rootGroup.updateMatrixWorld(!1);const Ut=new ce().copy(this.asset.rootGroup.matrixWorld).invert(),Pt=this.asset.rig.boneMap.get(`shoulder_${W}`);Pt.position.copy(this.restPos.get(`shoulder_${W}`)),Pt.updateMatrixWorld(!0);const B=this.tmpVecC.setFromMatrixPosition(Pt.matrixWorld).applyMatrix4(Ut),I=this.asset.rig.bindWorldPositions.get(`wrist_${W}`).clone().add(yt),nt=B.distanceTo(I)-.615;nt>0&&(this.setBonePose(`scapula_${W}`,0,0,0,"XYZ",0,-nt*1.08*h,0),St.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${W}`,`elbow_${W}`,`wrist_${W}`,`forepaw_${W}`,this.tmpVecA.set(it*(.2+.16*w),-.08+.18*w,-1).normalize(),yt,wt*2.2),this.solvePlantedLimbIK(`hip_${W}`,`knee_${W}`,`ankle_${W}`,`hindpaw_${W}`,this.tmpVecB.set(it*(.2+.14*_),.14+.16*_,1).normalize(),dt,at*2)}if(c>.001){const et=q.clamp(e.legFlightTuck,-1,1),k=e.wingFlap*.075*c,wt=Math.sin(t*2.15+(W==="L"?0:1.15))*.048*c,at=Math.cos(t*1.65+(W==="L"?.6:2.1))*.042*c,yt=(et>=0?.88*et:-.44*-et)+k*.65+wt*.5,dt=et>=0?-it*.06*et:0,Ut=(et>=0?it*.09*et:it*.05*-et)+it*at*.35,Pt=(et>=0?.36*et:.28*-et)-k*.55+at*.65,B=(et>=0?.42*et:.2*-et)+wt*.7,I=(et>=0?.38*et:-.1*-et)+at*.55,nt=(et>=0?1.18*et:-.48*-et)+k*.55+at*.55,mt=(et>=0?-it*.05*et:0)+it*wt*.25,xt=(et>=0?it*.07*et:it*.05*-et)+it*wt*.3,_t=(et>=0?-.68*et:.34*-et)-k*.5-wt*.65,Ft=(et>=0?.82*et:-.16*-et)+k*.45+at*.75,gt=(et>=0?.64*et:.16*-et)+wt*.6,Rt=(ne,Et,Dt,te)=>{const ie=this.asset.rig.boneMap.get(ne);this.tmpEuler.set(Et,Dt,te,"XYZ"),this.tmpQuat.copy(this.restQuat.get(ne)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),c>=.999?(ie.position.copy(this.restPos.get(ne)),ie.quaternion.copy(this.tmpQuat)):ie.quaternion.slerp(this.tmpQuat,c)};Rt(`shoulder_${W}`,yt,dt,Ut),Rt(`elbow_${W}`,Pt,0,0),Rt(`wrist_${W}`,B,0,0),Rt(`forepaw_${W}`,I,0,0),Rt(`hip_${W}`,nt,mt,xt),Rt(`knee_${W}`,_t,0,0),Rt(`ankle_${W}`,Ft,0,0),Rt(`hindpaw_${W}`,gt,0,0)}}const A=Cs(.32,.85,e.jawOpen),y=e.headRoll+s.felineHeadMicroRoll*(1-n),S=-e.neckArch*.12-a*.009-A*.032,T=e.neckYaw*.14;this.setBonePose("neck_1",S+e.headPitch*.04,T+e.headYaw*.05,y*.05,"YXZ"),this.setBonePose("neck_2",S+e.headPitch*.07,T+e.headYaw*.09,y*.08,"YXZ"),this.setBonePose("neck_3",S*.9+e.headPitch*.11,T+e.headYaw*.14,y*.12,"YXZ"),this.setBonePose("neck_4",S*.8+e.headPitch*.15,T*.85+e.headYaw*.19,y*.16,"YXZ"),this.setBonePose("head",e.headPitch*.36+a*.01-A*.045,e.headYaw*.46,y*.4,"YXZ");const b=q.clamp(e.earPerk-A*.32,0,1),M=(b-.5)*.68,P=y*.2;for(const W of["L","R"]){const it=W==="L"?1:-1,St=W==="L"?s.earTwitchL:s.earTwitchR,et=it*(e.earAsymmetry*.28+P)+St,k=M+et+this.earLagPitch*.65,wt=(1-b)*.32-it*this.earLagYaw*.5;this.setBonePose(`ear_${W}_1`,k*.6,-it*wt,it*k*.22,"YXZ"),this.setBonePose(`ear_${W}_2`,k*.34+this.earLagPitch*.32,-it*wt*.32,0,"YXZ"),this.setBonePose(`ear_${W}_3`,k*.22+this.earLagPitch*.22,0,0,"YXZ");const at=(q.clamp(e.cheekNubFlare+A*.2,0,1)-.5)*.4;this.setBonePose(`cheekUpper_${W}_1`,at*.28,-it*(at*.5+this.earLagYaw*.22),0)}const C=q.clamp(e.eyeYaw+s.gazeMicroX,-1,1),R=q.clamp(e.eyePitch+s.gazeMicroY,-1,1),L=Math.max(e.blink,s.autoBlink*(1-e.blink)),D=q.clamp(e.squint+A*.24,0,1);for(const W of["L","R"]){const it=W==="L"?Pu:Ru,St=W==="L"?Jv:t_;this.tmpQuat.setFromAxisAngle(St,C*.34),this.tmpQuatB.setFromAxisAngle(it,-R*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${W}`,this.tmpQuat);const et=R>0?-R*.14:-R*.22,k=R>0?R*.12:R*.08,wt=q.clamp(Math.max(L,D*.54)+et*(1-L),-.14,1),at=q.clamp(Math.max(L,D*.62)+k*(1-L),-.1,1);this.tmpQuat.setFromAxisAngle(it,wt*.72),this.setBoneAxisQuat(`eyelidUpper_${W}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(it,-at*.64),this.setBoneAxisQuat(`eyelidLower_${W}`,this.tmpQuat)}const U=q.clamp(e.pupilDilation+s.pupilPulse-A*.28,0,1),z=this.asset.materials;z.eyeMaterials.uniforms.uPupilDilation.value=U,z.eyeMaterials.uniforms.uBiolumGlow.value=e.biolumGlow,z.eyeMaterials.uniforms.uPlasmaGlow.value=e.plasmaGlow,z.eyeMaterials.uniforms.uThermalCloak.value=e.thermalCloak,z.uniforms.uTime.value=t,z.uniforms.uIridescentShimmer.value=e.iridescentShimmer,z.uniforms.uPastelTint.value=e.pastelTint,z.uniforms.uRadiantGlow.value=e.radiantGlow,z.uniforms.uBiolumGlow.value=e.biolumGlow,z.uniforms.uPlasmaGlow.value=e.plasmaGlow,z.uniforms.uThermalCloak.value=e.thermalCloak;const N=z.syncCloakTransparency(e.thermalCloak);for(const W of this.asset.hullDepthMeshes)W.visible=N;this.setBonePose("jaw",e.jawOpen*.64,0,0);const H=.28+.72*Cs(0,.14,e.jawOpen),V=1-e.teethExtension*H;this.setBonePose("teethUpper",0,0,0,"XYZ",0,V*.022,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-V*.02,0);const $=Cs(.06,.48,e.jawOpen),K=e.tongueExtend*.039*$;if(e.tongueCurl>=0){const W=-e.tongueCurl*(.016+.19*$);this.setBonePose("tongue_1",W*.35,0,0,"XYZ",0,0,K),this.setBonePose("tongue_2",W*.65,0,0),this.setBonePose("tongue_3",W*.95,0,0),this.setBonePose("tongue_4",W*1.15,0,0)}else{const W=$*Cs(.2,.95,e.tongueExtend),it=-e.tongueCurl*W;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,K),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",it*.12,0,0),this.setBonePose("tongue_4",it*.18,0,0)}const X=q.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),G=q.lerp(.11,.74,c);for(const W of["L","R"]){const it=W==="L"?1:-1,St=W==="R"?e.coyWingVeil*h:0,et=e.wingFlap*(.25+.75*e.wingUnfurl),k=it*(et>=0?et*.74:et*G),wt=et<0?et*q.lerp(.04,.26,c)*e.wingUnfurl:0,at=it*(e.wingSweep*.44-St*.68),yt=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${W}`,.05*X+St*.08,it*.12*X,k*.18,"YXZ"),this.setBonePose(`wingShoulder_${W}`,e.wingCamber*.09+St*.18,it*.82*X*(1-St*.65)+at,k-it*.22*X+it*St*.32,"YXZ"),this.setBonePose(`wingElbow_${W}`,St*.12,-it*(1.42*X*(1-St*.58)+yt*.45-St*.42),it*.86*X*(1-St*.45)+k*.22+it*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${W}`,-.35*X-e.wingCamber*.18-St*.28,it*(1.32*X*(1-St*.6)+yt*.55-St*.48)+at*.35,it*.12*X+it*wt*.3+it*e.wingTipLag*.26,"YXZ");for(let Ut=1;Ut<=6;Ut++){const Pt=(Ut-1)/5,B=it*(-.38+Pt*.58)*X*(1-St*.6),I=-e.wingCamber*(.14+.18*(1-Pt))-.1*X-St*.24,nt=e.wingTipLag*(.18+.26*Pt),mt=et>=0?-et*.22:-et*q.lerp(.06*Math.pow(Math.max(0,(Pt-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${W}_${Ut}_a`,I,B,it*(mt*.4+nt*.45),"YXZ"),this.setBonePose(`wingFinger_${W}_${Ut}_b`,I*.5,B*.25,it*(mt*.7+nt*.75),"YXZ")}const dt=1-e.pelvicFinFlare;for(let Ut=1;Ut<=3;Ut++)this.setBonePose(`pelvicFin_${W}_${Ut}`,0,0,-it*dt*1.18,"XYZ")}for(const W of this.asset.dorsalSailMeshes)W.morphTargetInfluences&&W.morphTargetInfluences.length>0&&(W.morphTargetInfluences[0]=e.dorsalSailFlex);const O=e.syncHeartTailFlukes?e.rightHeartFinFlare:e.leftHeartFinFlare,J=Math.min(e.rightHeartFinFlare,O),lt=J<0?Math.sin(Math.abs(J)*1.38)*.48:.02;this.asset.rootGroup.updateMatrixWorld(!1);for(let W=1;W<=10;W++){const it=W/10,St=W>=9,et=St?0:e.tailYaw*.14+e.tailCurl*.19*Math.pow(it,1.4)+r*it,k=St?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-W*.48)*.085*(.4+.6*it);let wt=St?0:e.tailPitch*.088*(.45+it)+k;if(!St&&n<.85&&W>=2&&W<=8){const at=Math.max(0,(lt-.05)*.135)*(1-n);wt<at&&(wt=q.lerp(wt,at,Cs(1,5,W)))}if(this.setBonePose(`tail_${W}`,wt,et,0,"YXZ"),n<.85){const at=this.asset.rig.boneMap.get(`tail_${W}`);at.parent.updateMatrixWorld(!0),at.updateMatrixWorld(!0);const yt=this.tmpVecC.setFromMatrixPosition(at.matrixWorld),Ut=pi(yt.x,yt.z)+(W>=8?.05+lt:.058);if(yt.y<Ut&&W>1){const Pt=at.parent,B=at.position.length(),I=Math.min(.45,(Ut-yt.y)/Math.max(.14,B))*(1-n);this.tmpEuler.set(I,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),Pt.quaternion.multiply(this.tmpQuat),Pt.updateMatrixWorld(!0)}}}const j=-e.rightHeartFinFlare*1.38,Q=O*1.38;this.setBonePose("tailFinHinge_R",0,0,j,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,Q,"XYZ");for(let W=1;W<=5;W++)this.setBonePose(`tailFin_R_${W}`,0,0,0),this.setBonePose(`tailFin_L_${W}`,0,0,0);this.asset.rig.rootBone.updateMatrixWorld(!0)}}function Di(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Oe(i,t,e,n,s){return i<=t||i>=s?0:i<e?Di(t,e,i):i>n?1-Di(n,s,i):1}function ho(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function n_(i,t,e){return i+ho(t-i)*e}function i_(i,t,e){const s=i/Math.max(1,64);let o=e;for(let a=0;a<64;a++){const r=(a+.5)*s,l=Di(.4,2.4,r),c=Oe(r,7.6,8.8,15.2,16.5),h=1-.18*Di(18.5,22.5,r),u=q.lerp(4.45,5.18,l)*h,d=q.lerp(u,1.65,c)*t;o+=d*s}return o}class ns{static DURATION_SEC=25;isPlaying=!1;isPaused=!1;loop=!1;followCamera=!0;subjectMode="duet";toothlessAsset;toothlessController;lightFuryAsset;lightFuryController;toothlessSpline;lightFurySpline;flightTime=0;tmpPos=new E;tmpPosAhead=new E;tmpPosBehind=new E;tmpPosLook=new E;tmpVel=new E;tmpEuler=new wn;tmpQuat=new Ye;prevWorldAnchor=new E(0,1.15,.35);constructor(t,e,n,s){this.toothlessAsset=t,this.toothlessController=e,this.lightFuryAsset=n,this.lightFuryController=s;const o=Gn.position.clone(),a=Xn.position.clone();this.toothlessSpline=new Bn([o.clone(),new E(6.8,3.8,8.2),new E(16.4,11.4,19.5),new E(24.5,17.6,33.5),new E(12.5,19.6,44.5),new E(-6.5,17.2,39.5),new E(-19.5,6.8,29),new E(-22.5,-3.2,18.5),new E(-17.5,10.6,3.5),new E(-2.5,9.8,-5.8),new E(3.85,3.15,-2.15),o.clone()],!1,"centripetal",.5),this.lightFurySpline=new Bn([a.clone(),new E(-3.2,4.1,7.8),new E(6.2,12,20.4),new E(14.2,18.3,34.8),new E(2.2,20.2,46),new E(-16.8,17.8,41),new E(-29.8,7.4,30.2),new E(-32.8,-2.8,19.2),new E(-27.2,11.2,4.2),new E(-12.2,10.2,-5.8),new E(-5.15,3.05,-2.35),a.clone()],!1,"centripetal",.5)}setSubjectMode(t){this.subjectMode!==t&&(this.subjectMode=t,this.isPlaying&&(this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())))}resetDragonToPerch(t){t==="toothless"?(this.toothlessAsset.rootGroup.position.copy(Gn.position),this.toothlessAsset.rootGroup.rotation.set(0,Gn.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0),this.toothlessController.resetToHeroPose()):this.lightFuryAsset&&this.lightFuryController&&(this.lightFuryAsset.rootGroup.position.copy(Xn.position),this.lightFuryAsset.rootGroup.rotation.set(0,Xn.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0),this.lightFuryController.resetToHeroPose())}computeDesiredWorldFocus(){const t=this.toothlessAsset.rig.boneMap.get("chest"),e=new E().setFromMatrixPosition(t.matrixWorld);if(!this.lightFuryAsset)return e;const n=this.lightFuryAsset.rig.boneMap.get("chest"),s=new E().setFromMatrixPosition(n.matrixWorld);return this.subjectMode==="toothless"?e:this.subjectMode==="light-fury"?s:e.add(s).multiplyScalar(.5)}startFromBeginning(){this.flightTime=0,this.isPlaying=!0,this.isPaused=!1,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(0),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}togglePlayPause(){if(!this.isPlaying){this.startFromBeginning();return}this.isPaused=!this.isPaused}stopAndResetToPerch(){this.isPlaying=!1,this.isPaused=!1,this.flightTime=0,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.prevWorldAnchor.set(0,1.15,.35)}scrubToProgress(t){const e=q.clamp(t,0,1);this.isPlaying||(this.isPlaying=!0,this.isPaused=!0),this.flightTime=e*ns.DURATION_SEC,this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}getPhaseInfo(){const t=this.flightTime,e=this.subjectMode==="duet";let n=e?"Twin Perch Ready":"Perched Ready";return this.isPlaying&&(t<2.8?n=e?"1/6 · Twin Courtship Cliff Leap":"1/6 · Launch Crouch & Cliff Leap":t<7.8?n="2/6 · Majestic Climbing Wingbeats":t<13?n=e?"3/6 · Wingtip Courtship Sky Soar":"3/6 · High-Altitude Sky Soar":t<17.4?n=e?"4/6 · Mirror-Cloak Ocean Skim":"4/6 · Peregrine Ocean Skim":t<21.8?n="5/6 · Cushioned Air-Brake Hover":n=e?"6/6 · Twin Touchdown & Settle":"6/6 · Four-Paw Landing & Settle"),{isPlaying:this.isPlaying,isPaused:this.isPaused,loop:this.loop,followCamera:this.followCamera,subjectMode:this.subjectMode,progress:q.clamp(t/ns.DURATION_SEC,0,1),elapsedSec:t,durationSec:ns.DURATION_SEC,phaseLabel:n}}update(t,e,n){if(!this.isPlaying)return this.prevWorldAnchor.set(0,1.15,.35),{worldFocus:this.prevWorldAnchor,isAirborne:!1};if(!this.isPaused&&(this.flightTime+=t,this.flightTime>=ns.DURATION_SEC))if(this.loop)this.flightTime%=ns.DURATION_SEC;else return this.stopAndResetToPerch(),{worldFocus:this.prevWorldAnchor,isAirborne:!1};this.applyAtTime(this.flightTime);const s=this.computeDesiredWorldFocus();if(this.followCamera){const r=s.clone().sub(this.prevWorldAnchor);n.add(r),e.position.add(r);const l=Oe(this.flightTime,1.8,5.2,18.8,23.2),c=this.subjectMode==="duet"?9.4:4.95,h=this.subjectMode==="duet"?17.8:11.2,u=q.lerp(c,h,l),d=e.position.clone().sub(n),f=Math.max(.5,d.length()),g=q.lerp(f,u,1-Math.exp(-2.2*Math.max(.016,t)));d.setLength(g),e.position.copy(n).add(d);const v=ei(e.position.x,e.position.z),m=Math.max(-8.8,v+1.8);e.position.y<m&&(e.position.y=m),n.lerp(s,1-Math.exp(-7.5*Math.max(.016,t)))}this.prevWorldAnchor.copy(s);const o=this.toothlessController.state.airborneFactor,a=this.lightFuryController?.state.airborneFactor??0;return{worldFocus:s,isAirborne:Math.max(o,a)>.15}}computeKinematicsAlongSpline(t,e,n,s,o,a){let h=0;if(s<=2.05)h=0;else if(s>=21.85)h=1;else{const L=(s-2.05)/19.8,D=L*L*(3-2*L),U=Math.sin(L*Math.PI*2-1.2)*.024*Math.sin(L*Math.PI);h=q.clamp(q.lerp(L,D,.38)+U,0,1)}const u=Oe(s,2.05-.1,2.05+.72,21.85-.75,21.85+.08),d=Oe(s,1.65,2.75,7.2,8.6),f=Oe(s,7.8,9,12.2,13.4),g=Oe(s,12.6,13.6,16.4,17.5),v=Oe(s,15.8,16.8,18,19),m=Oe(s,18,19.2,21.1,22.05),p=i_(s,a,o),x=q.clamp(d*.94+v*.82+m*.88+(1-f)*(1-g)*.16,0,.96)*u,w=Math.sin(p),_=q.clamp(w+.14*Math.sin(p*2),-1,1),A=Math.cos(p),y=-A*.26*x,S=A*.056*x;let T=0,b=0,M=0,P=0;const C=e.clone(),R=new Ye().setFromEuler(new wn(0,n,0,"YXZ"));if(h>1e-4&&h<.9999){const D=Math.max(0,h-.008),U=Math.min(1,h+.008);t.getPointAt(h,this.tmpPos),t.getPointAt(D,this.tmpPosBehind),t.getPointAt(U,this.tmpPosAhead),this.tmpVel.subVectors(this.tmpPosAhead,this.tmpPosBehind).normalize();const z=Math.atan2(this.tmpVel.x,this.tmpVel.z),N=Math.max(0,h-.028),H=Math.min(1,h+.028),V=t.getTangentAt(N),$=t.getTangentAt(H),K=Math.atan2(V.x,V.z),X=Math.atan2($.x,$.z);T=ho(X-K)/Math.max(.005,H-N);const G=Math.min(1,h+.048);t.getTangentAt(G,this.tmpPosLook);const O=Math.atan2(this.tmpPosLook.x,this.tmpPosLook.z);b=ho(O-z),P=-Math.asin(q.clamp(this.tmpVel.y,-.84,.84));const J=-.56*m,lt=Oe(h,.025,.11,.86,.98);M=q.clamp(-T*.24,-.74,.74)*lt;const j=Oe(h,0,.032,.962,1);C.lerpVectors(e,this.tmpPos,j),C.y+=y*lt;const Q=Oe(h,.04,.09,.91,.96);if(Q>.001){const et=ei(C.x,C.z),k=ei(C.x-3.6,C.z),wt=ei(C.x+3.6,C.z),at=Math.max(et,k,wt),yt=Math.max(-7.2,at+3.8*Q);C.y<yt&&(C.y=yt)}const W=n_(n,z,j),it=(P*.86+J+S)*j,St=M*j;this.tmpEuler.set(it,W,St,"YXZ"),R.setFromEuler(this.tmpEuler)}return{u:h,airborneEnv:u,climbEnv:d,glideEnv:f,diveEnv:g,pulloutEnv:v,brakeEnv:m,flapPhase:p,activeFlapAmp:x,flapSin:_,flapCos:A,lookAheadTurnDiff:b,bankRoll:M,pathClimbPitch:P,outPos:C,outQuat:R}}applyToothlessFlightAtTime(t,e){const n=this.computeKinematicsAlongSpline(this.toothlessSpline,Gn.position,Gn.yaw,t,0,1);this.toothlessAsset.rootGroup.position.copy(n.outPos),this.toothlessAsset.rootGroup.quaternion.copy(n.outQuat),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const s=Oe(t,.35,1.15,1.68,2.1),o=Oe(t,1.82,2.05,2.35,2.85),a=Oe(t,19.2,20.2,21.75,22.25),r=Oe(t,21.75,22.2,22.85,23.9),l=Oe(t,23.1,23.65,24.35,24.95),c=e?.34*n.glideEnv+.36*l:-.22*l,h=on.forelegStance*(1-s-r)-.88*s-.8*r+.18*l,u=on.hindlegStance*(1-s-r)-.84*s-.76*r+.12*l,d=q.clamp(.82*n.airborneEnv-1.55*o-1.58*a,-.84,.88),f=q.lerp(on.wingUnfurl+.34*s,1-.16*n.diveEnv,Di(.95,2.15,t)*(1-Di(22.1,24.1,t))),g=Math.max(0,n.flapCos)*.56*n.activeFlapAmp*(1-n.brakeEnv*.6),v=q.clamp(.68*s+n.flapSin*.92*n.activeFlapAmp+.14*n.glideEnv-.08*n.diveEnv,-1,1),m=-n.flapCos*.84*n.activeFlapAmp,p=q.clamp(on.wingSweep*(1-n.airborneEnv)-.8*n.diveEnv+.74*n.brakeEnv-.16*s,-1,1),x=Math.max(0,-n.flapSin)*n.activeFlapAmp,w=q.clamp(.28+.46*x+.54*n.pulloutEnv+.64*n.brakeEnv-.18*n.diveEnv,.08,1),_=q.clamp(.22*(1-n.airborneEnv)+.95*n.glideEnv+.85*Math.min(1,Math.abs(n.bankRoll)*1.8)+.9*n.brakeEnv,.15,1),A=.24*(1-n.airborneEnv)+.18*n.climbEnv+.06*n.glideEnv+.42*n.diveEnv-.32*n.brakeEnv,y=q.clamp(n.bankRoll*.38,-.32,.32),S={airborneFactor:n.airborneEnv,forelegStance:h,hindlegStance:u,limbStride:0,legFlightTuck:d,spineArch:.2*s-.16*o+.24*n.brakeEnv+.08*(1-n.airborneEnv),spineTwist:q.clamp(-n.bankRoll*.35,-1,1),wingUnfurl:f,wingFlap:v,wingWristFold:g,wingTipLag:m,wingSweep:p,wingCamber:w,pelvicFinFlare:q.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.35*n.diveEnv,.3,1),dorsalSpineSplit:_,autoSyncProstheticTail:Math.abs(y)<.02,leftProstheticFinFlare:q.clamp(A+y,-1,1),rightTailFinFlare:q.clamp(A-y,-1,1),tailYaw:q.clamp(on.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv+.28*l,-1,1),tailPitch:q.clamp(on.tailPitch*(1-n.airborneEnv)-.34*n.brakeEnv+.15*n.pulloutEnv+.22*r,-1,1),tailCurl:.16*(1-n.diveEnv)+n.lookAheadTurnDiff*.8,tailWaveAmp:n.activeFlapAmp*.78+n.glideEnv*.16,tailWavePhase:n.flapPhase,neckArch:.16+.24*n.brakeEnv-.2*n.diveEnv,neckYaw:n.lookAheadTurnDiff*.95*n.airborneEnv+c*.45,headYaw:q.clamp(on.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+c,-1,1),headPitch:q.clamp(on.headPitch*(1-n.airborneEnv)-.34*s+n.pathClimbPitch*-.24*n.airborneEnv+.48*n.brakeEnv+.16*r,-1,1),headRoll:q.clamp(on.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv-.22*l,-1,1),earPerk:q.clamp(.76+.2*s-.56*n.diveEnv-.2*n.climbEnv+.18*n.brakeEnv+.18*l,.12,1),earAsymmetry:n.bankRoll*.22+.12*l,cheekNubFlare:.5+.25*n.diveEnv,eyeYaw:q.clamp(n.lookAheadTurnDiff*1.7*n.airborneEnv+c*.55,-.85,.85),eyePitch:q.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:q.clamp(.76-.24*n.diveEnv+.16*l,.25,.96),squint:q.clamp(.36*n.diveEnv+.18*l,0,1),blink:Oe(t,23.35,23.45,23.52,23.64),jawOpen:q.clamp(.2*o+.15*n.pulloutEnv+.26*l,0,1),teethExtension:0,tongueExtend:.4*l,tongueCurl:.2*l};Object.assign(this.toothlessController.state,S)}applyLightFuryFlightAtTime(t,e){if(!this.lightFuryAsset||!this.lightFuryController)return;const n=this.computeKinematicsAlongSpline(this.lightFurySpline,Xn.position,Xn.yaw,t,.95,1.03);this.lightFuryAsset.rootGroup.position.copy(n.outPos),this.lightFuryAsset.rootGroup.quaternion.copy(n.outQuat),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const s=Oe(t,.32,1.12,1.65,2.08),o=Oe(t,1.8,2.04,2.32,2.82),a=Oe(t,19.2,20.2,21.75,22.25),r=Oe(t,21.75,22.2,22.85,23.9),l=Oe(t,23,23.6,24.4,24.96),c=Oe(t,13.2,14.2,15.8,16.9),h=Oe(t,8.2,9.4,12.2,13.4),u=Oe(t,12.6,13.6,16,17.2),d=e?-.36*n.glideEnv-.34*l:-.18*l,f=Qe.forelegStance*(1-s-r)-.86*s-.78*r+.2*l,g=Qe.hindlegStance*(1-s-r)-.82*s-.74*r+.12*l,v=q.clamp(.82*n.airborneEnv-1.52*o-1.56*a,-.84,.88),m=q.lerp(Qe.wingUnfurl+.34*s,1-.18*n.diveEnv,Di(.9,2.12,t)*(1-Di(22.1,24.1,t))),p=Math.max(0,n.flapCos)*.54*n.activeFlapAmp*(1-n.brakeEnv*.6),x=q.clamp(.66*s+n.flapSin*.9*n.activeFlapAmp+.16*n.glideEnv-.08*n.diveEnv,-1,1),w=-n.flapCos*.86*n.activeFlapAmp,_=q.clamp(Qe.wingSweep*(1-n.airborneEnv)-.82*n.diveEnv+.74*n.brakeEnv-.15*s,-1,1),A=Math.max(0,-n.flapSin)*n.activeFlapAmp,y=q.clamp(.26+.44*A+.52*n.pulloutEnv+.62*n.brakeEnv-.16*n.diveEnv,.08,1),S=.18*(1-n.airborneEnv)+.12*n.climbEnv+.02*n.glideEnv+.38*n.diveEnv-.28*n.brakeEnv,T=q.clamp(n.bankRoll*.36,-.3,.3),b={airborneFactor:n.airborneEnv,forelegStance:f,hindlegStance:g,limbStride:0,legFlightTuck:v,coyWingVeil:0,spineArch:.22*s-.15*o+.24*n.brakeEnv+.12*(1-n.airborneEnv),spineTwist:q.clamp(-n.bankRoll*.36,-1,1),wingUnfurl:m,wingFlap:x,wingWristFold:p,wingTipLag:w,wingSweep:_,wingCamber:y,pelvicFinFlare:q.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.32*n.diveEnv,.32,1),dorsalSailFlex:q.clamp(.24*(1-n.airborneEnv)+.92*n.glideEnv+.85*n.brakeEnv+.65*Math.abs(n.bankRoll),.15,1),syncHeartTailFlukes:Math.abs(T)<.02,leftHeartFinFlare:q.clamp(S+T,-1,1),rightHeartFinFlare:q.clamp(S-T,-1,1),tailYaw:q.clamp(Qe.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv-.36*l,-1,1),tailPitch:q.clamp(Qe.tailPitch*(1-n.airborneEnv)-.32*n.brakeEnv+.16*n.pulloutEnv+.2*r,-1,1),tailCurl:-.24*(1-n.airborneEnv)+n.lookAheadTurnDiff*.8-.26*l,tailWaveAmp:n.activeFlapAmp*.76+n.glideEnv*.18,tailWavePhase:n.flapPhase,neckArch:.24+.24*n.brakeEnv-.2*n.diveEnv+.14*l,neckYaw:n.lookAheadTurnDiff*.92*n.airborneEnv+d*.48,headYaw:q.clamp(Qe.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+d,-1,1),headPitch:q.clamp(Qe.headPitch*(1-n.airborneEnv)-.32*s+n.pathClimbPitch*-.24*n.airborneEnv+.46*n.brakeEnv+.14*r,-1,1),headRoll:q.clamp(Qe.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv+.28*l,-1,1),earPerk:q.clamp(.82+.16*s-.56*n.diveEnv-.2*n.climbEnv+.16*n.brakeEnv,.14,1),earAsymmetry:n.bankRoll*.24+.18*l,cheekNubFlare:.52+.22*n.diveEnv,eyeYaw:q.clamp(n.lookAheadTurnDiff*1.65*n.airborneEnv+d*.55,-.85,.85),eyePitch:q.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:q.clamp(.84-.2*n.diveEnv+.1*l,.3,.96),squint:q.clamp(.3*n.diveEnv+.56*l,0,1),blink:Oe(t,23.18,23.28,23.36,23.48),jawOpen:q.clamp(.14*o+.12*n.pulloutEnv+.14*l,0,1),teethExtension:0,tongueExtend:.28*l,tongueCurl:.12*l,iridescentShimmer:q.clamp(.78+.22*(n.glideEnv+c),0,1),radiantGlow:q.clamp(.34+.36*(n.glideEnv+c),0,1),biolumGlow:q.clamp(.58*h,0,1),plasmaGlow:q.clamp(.04+.78*u,0,1),thermalCloak:q.clamp(.78*c,0,1)};Object.assign(this.lightFuryController.state,b)}applyPerchedSpectatorGaze(t,e){if(t==="toothless"){this.toothlessAsset.rootGroup.position.copy(Gn.position),this.toothlessAsset.rootGroup.rotation.set(0,Gn.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(Gn.position);n.y-=1.5;const s=Math.atan2(n.x,n.z),o=ho(s-Gn.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.toothlessController.state,{...on,neckYaw:q.clamp(o*.55,-.85,.85),headYaw:q.clamp(o*.85,-.95,.95),headPitch:q.clamp(-r*.95,-.85,.75),headRoll:q.clamp(-o*.18,-.45,.45),eyeYaw:q.clamp(o*.45,-.75,.75),eyePitch:q.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.88})}else if(this.lightFuryAsset&&this.lightFuryController){this.lightFuryAsset.rootGroup.position.copy(Xn.position),this.lightFuryAsset.rootGroup.rotation.set(0,Xn.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(Xn.position);n.y-=1.48;const s=Math.atan2(n.x,n.z),o=ho(s-Xn.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.lightFuryController.state,{...Qe,neckYaw:q.clamp(o*.55,-.85,.85),headYaw:q.clamp(o*.85,-.95,.95),headPitch:q.clamp(-r*.95,-.85,.75),headRoll:q.clamp(.18-o*.18,-.5,.55),eyeYaw:q.clamp(o*.45,-.75,.75),eyePitch:q.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.9})}}applyAtTime(t){if(this.subjectMode==="duet")this.applyToothlessFlightAtTime(t,!0),this.applyLightFuryFlightAtTime(t,!0);else if(this.subjectMode==="toothless"){this.applyToothlessFlightAtTime(t,!1);const e=this.toothlessAsset.rig.boneMap.get("chest"),n=new E().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("light-fury",n)}else if(this.applyLightFuryFlightAtTime(t,!1),this.lightFuryAsset){const e=this.lightFuryAsset.rig.boneMap.get("chest"),n=new E().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("toothless",n)}}}function s_(i){return i-Math.floor(i)}function uh(i,t){return s_(Math.sin(i*127.1+t*311.7)*43758.5453123)}let sa=null;function o_(i=512){if(sa)return sa;const t=new Float32Array(i*i),e=76;for(let f=0;f<i;f++){const g=f/i*e,v=Math.floor(g),m=g-v;for(let p=0;p<i;p++){const x=p/i*e,w=Math.floor(x),_=x-w;let A=10;for(let S=-1;S<=1;S++)for(let T=-1;T<=1;T++){const b=((w+T)%e+e)%e,M=((v+S)%e+e)%e,P=T+.5+(uh(b,M)-.5)*.68-_,C=S+.5+(uh(M+19,b+7)-.5)*.68-m,R=Math.sqrt(P*P+C*C);R<A&&(A=R)}const y=Math.max(0,1-Math.pow(A*1.15,2.2));t[f*i+p]=y}}const n=document.createElement("canvas"),s=document.createElement("canvas"),o=document.createElement("canvas");for(const f of[n,s,o])f.width=i,f.height=i;const a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(i,i),h=r.createImageData(i,i),u=l.createImageData(i,i);for(let f=0;f<i;f++){const g=(f-1+i)%i,v=(f+1)%i;for(let m=0;m<i;m++){const p=(m-1+i)%i,x=(m+1)%i,w=f*i+m,_=w*4,A=t[w],y=(t[f*i+x]-t[f*i+p])*.24,S=(t[v*i+m]-t[g*i+m])*.24,T=1/Math.sqrt(y*y+S*S+1);h.data[_]=Math.round((-y*T*.5+.5)*255),h.data[_+1]=Math.round((-S*T*.5+.5)*255),h.data[_+2]=Math.round((T*.5+.5)*255),h.data[_+3]=255;const b=249+A*5;c.data[_]=Math.min(255,Math.round(b+.8)),c.data[_+1]=Math.round(b),c.data[_+2]=Math.min(255,Math.round(b+.6)),c.data[_+3]=255;const M=Math.round((.45-A*.07)*255);u.data[_]=M,u.data[_+1]=M,u.data[_+2]=M,u.data[_+3]=255}}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0);const d=(f,g)=>(f.wrapS=ii,f.wrapT=ii,f.anisotropy=8,f.colorSpace=g?an:kn,f.needsUpdate=!0,f);return sa={albedoMap:d(new gn(n),!0),normalMap:d(new gn(s),!1),roughnessMap:d(new gn(o),!1)},sa}let Ki=null;function a_(i=1024){if(Ki)return Ki;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=14,n.data[u+1]=24,n.data[u+2]=42,n.data[u+3]=255;continue}const d=Math.sin(h*64+Math.sin(c*12)*.65),f=Math.sin(h*138-Math.cos(c*18)*.85),g=Math.sin(h*250+c*22),v=Math.sin(h*21+.9)*Math.cos(c*14-h*4),m=d*.42+f*.33+g*.15+v*.24,p=Math.exp(-Math.pow((c-.36)/.13,2)),x=Math.max(0,Math.min(1,(.95-c)/.17)),w=Math.max(0,Math.min(1,1-c*1.06)),_=.86+.28*m;let A=(32+128*w+58*p)*_*x,y=(118+114*w+36*p)*_*x,S=(205+48*w+20*p)*_*x;if(v<-.58&&c>.25&&c<.78){const T=Math.min(1,(-v-.58)*2.1);A*=1-.38*T,y*=1-.28*T,S*=1-.16*T}n.data[u]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(y))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(S))),n.data[u+3]=255}}return e.putImageData(n,0,0),Ki=new gn(t),Ki.colorSpace=an,Ki.anisotropy=8,Ki.needsUpdate=!0,Ki}function r_(){const i=a_(1024),t={uPupilDilation:{value:.78},uLightDir:{value:new E(.45,.65,.6).normalize()},uBiolumGlow:{value:0},uPlasmaGlow:{value:0},uThermalCloak:{value:0}},e=new Ni({name:"LightFury_SkyBlueIris_PBR",map:i,roughness:.48,metalness:0,envMapIntensity:.78});e.onBeforeCompile=s=>{Object.assign(s.uniforms,t),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.36 + uPlasmaGlow * 0.85 + uBiolumGlow * 0.72) * eRadial * (1.0 - smoothstep(0.0, 0.95, uThermalCloak) * 0.88);`)};const n=new vn({name:"LightFury_Cornea_WetCoat",color:new Ht(16777215),transparent:!0,opacity:.15,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function dh(i,t,e){i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function l_(){const i=o_(512),t=r_(),e={uTime:{value:0},uIridescentShimmer:{value:.76},uPastelTint:{value:.78},uRadiantGlow:{value:.34},uBiolumGlow:{value:0},uPlasmaGlow:{value:.04},uThermalCloak:{value:0},uSunDir:{value:new E(-.55,.38,-.74).normalize()},uSunColor:{value:new Ht(16765601)}},n=new vn({name:"LightFury_SnowPearlHide_PBR",color:new Ht(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new $t(.05,.05),roughnessMap:i.roughnessMap,roughness:.46,metalness:.02,iridescence:.42,iridescenceIOR:1.38,iridescenceThicknessRange:[320,520],clearcoat:.34,clearcoatRoughness:.22,sheen:.28,sheenRoughness:.42,sheenColor:new Ht(16773366),envMapIntensity:1.22});dh(n,e,!1);const s={albedo:i.albedoMap.clone(),normal:i.normalMap.clone(),rough:i.roughnessMap.clone()};for(const m of[s.albedo,s.normal,s.rough])m.repeat.set(3,3),m.needsUpdate=!0;const o=new vn({name:"LightFury_IridescentWingPatagium_PBR",color:new Ht(16776445),map:s.albedo,normalMap:s.normal,normalScale:new $t(.028,.028),roughnessMap:s.rough,roughness:.42,metalness:.02,iridescence:.52,iridescenceIOR:1.4,iridescenceThicknessRange:[310,540],clearcoat:.28,clearcoatRoughness:.24,side:Je,envMapIntensity:1.28});dh(o,e,!0);const a=new vn({name:"LightFury_SlatePearlClaws_PBR",color:new Ht(2633016),roughness:.24,metalness:.08,clearcoat:.84,clearcoatRoughness:.12,envMapIntensity:1.5}),r=new vn({name:"LightFury_PearlyTeeth_PBR",color:new Ht(16447218),roughness:.14,metalness:0,clearcoat:.92,clearcoatRoughness:.08}),l=new vn({name:"LightFury_RoseGums_PBR",color:new Ht(12084344),normalMap:i.normalMap,normalScale:new $t(.08,.08),roughness:.32,clearcoat:.82,clearcoatRoughness:.12,side:Je}),c=new vn({name:"LightFury_PinkTongue_PBR",color:new Ht(13924494),normalMap:i.normalMap,normalScale:new $t(.1,.1),roughness:.26,clearcoat:.88,clearcoatRoughness:.1}),h=new vo({name:"LightFury_OuterHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0}),u=new vo({name:"LightFury_WingHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0,side:Je}),d=[n,o,a],f=[r,l,c,t.irisMaterial];let g=!1;return{skinMaterial:n,wingMembraneMaterial:o,clawMaterial:a,teethMaterial:r,oralGumMaterial:l,tongueMaterial:c,hullDepthMaterial:h,doubleSidedHullDepthMaterial:u,eyeMaterials:t,uniforms:e,syncCloakTransparency:m=>{const p=m>.001;if(p!==g){g=p;for(const w of d)w.transparent=p,w.depthWrite=!p,w.depthFunc=mi,w.polygonOffset=p,w.polygonOffsetFactor=p?-1:0,w.polygonOffsetUnits=p?-2:0,w.needsUpdate=!0;for(const w of f)w.transparent=p,w.depthWrite=!p,w.depthTest=!0,w.depthFunc=mi,w.needsUpdate=!0}const x=q.smoothstep(m,0,.96);return a.opacity=1-x*.86,r.opacity=1-x*.9,l.opacity=1-x*.9,c.opacity=1-x*.9,t.corneaMaterial.opacity=q.lerp(.15,.03,x),p}}}function me(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function De(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function ph(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function pl(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let h=0;h<e-1;h++)n[h]=(t[h+1][1]-t[h][1])/(t[h+1][0]-t[h][0]);s[0]=n[0],s[e-1]=n[e-2];for(let h=1;h<e-1;h++)n[h-1]*n[h]<=0?s[h]=0:s[h]=(n[h-1]+n[h])*.5;for(let h=0;h<e-1;h++)if(Math.abs(n[h])<1e-8)s[h]=0,s[h+1]=0;else{const u=s[h]/n[h],d=s[h+1]/n[h],f=Math.hypot(u,d);if(f>3){const g=3/f;s[h]=g*u*n[h],s[h+1]=g*d*n[h]}}let o=0;for(let h=0;h<e-1;h++)if(i>=t[h][0]&&i<=t[h+1][0]){o=h;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r;return(2*c-3*l+1)*t[o][1]+(c-2*l+r)*a*s[o]+(-2*c+3*l)*t[o+1][1]+(c-l)*a*s[o+1]}const c_=[[-4.18,.015],[-3.55,.048],[-2.75,.088],[-1.9,.146],[-1.25,.202],[-.82,.246],[-.5,.278],[-.08,.258],[.42,.312],[.72,.326],[.98,.254],[1.22,.21],[1.44,.198]],Lu=[[-4.18,.014],[-3.55,.042],[-2.75,.076],[-1.9,.126],[-1.25,.172],[-.82,.204],[-.5,.228],[-.08,.214],[.42,.248],[.72,.26],[.98,.208],[1.22,.182],[1.44,.174]],h_=[[0,.116,-4.18],[0,.116,-3.72],[0,.116,-3.28],[0,.12,-2.82],[0,.175,-2.3],[0,.32,-1.78],[0,.51,-1.32],[0,.68,-.86],[0,.755,-.5],[0,.76,-.08],[0,.815,.38],[0,.885,.75],[0,1.03,.98],[0,1.24,1.19],[0,1.45,1.38],[0,1.54,1.54],[0,1.562,1.73],[0,1.538,1.9],[0,1.49,2.065]];let wr=null;function Iu(){return wr||(wr=new Bn(h_.map(([i,t,e])=>new E(i,t,e)),!1,"centripetal",.5)),wr}function u_(i){const t=Iu();let e=0,n=1;for(let u=0;u<24;u++){const d=(e+n)*.5;t.getPointAt(d).z<i?e=d:n=d}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new E(0,1,0),l=new E().copy(r).addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=pl(c,Lu)*me(-4.18,-4.1,c);return{point:o.clone().addScaledVector(l,h),tangent:a,up:l}}function fh(i,t,e){const n=i/e,s=t/e+.15,o=n*n+Math.pow(s-.58*Math.sqrt(Math.abs(n)+.04),2);return 1-me(.62,1.15,o)}function d_(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.53)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.28){const r=me(1.31,1.53,i.z),l=1-r,c=me(1.26,1.45,i.z);return Be([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return jn(i,e,n,3.5)}function p_(i,t){const e=[];return e.push(f_(i,t)),e.push(...m_(i,t)),e.push(...g_(i,t)),e.push(...v_(i,t)),Ve(e)}function f_(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=Iu(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(A=>i.boneIndexMap.get(A)),r=o.map(A=>i.bindWorldPositions.get(A)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4),g=new E(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),p=[{center:v,fwd:To,up:new E(-.19,.98,.06).normalize()},{center:m,fwd:Eo,up:new E(.19,.98,.06).normalize()}].map(A=>{const y=new E().crossVectors(A.up,A.fwd).normalize(),S=new E().crossVectors(A.fwd,y).normalize();return{center:A.center,fwd:A.fwd,right:y,up:S}});for(let A=0;A<=e;A++){const y=A/e,S=1-Math.pow(1-y,1.85),T=s.getPointAt(S),b=s.getTangentAt(S).normalize(),M=new E().copy(g).addScaledVector(b,-g.dot(b)).normalize(),P=new E().crossVectors(M,b).normalize(),C=T.z,R=me(-4.18,-4.1,C),L=pl(C,c_)*R,D=pl(C,Lu)*R,U=me(1.36,1.5,C);let z=L,N=D;if(U>0){const H=Math.max(0,Math.min(1,(C-1.44)/.625)),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(H-.78)/.22),2))),$=ss(C),K=(.174+.018*De(H,.36,.24)-.062*me(.36,.94,H))*V;z=q.lerp(L,$,U),N=q.lerp(D,K,U)}for(let H=0;H<=n;H++){const V=H/n,$=V*Math.PI*2,K=Math.sin($),X=Math.cos($);let G=z*K,O=N*X,J=.08,lt=0,j=0,Q=0;if(C>-2.9&&C<1.6&&X<.12){const k=me(-2.9,-.55,C)*(1-me(1.36,1.6,C));j=me(.12,-.68,X)*k}if(C>-.45&&C<.92){const k=De(C,.3,.42)*De(Math.abs(K),.88,.22)*De(X,.08,.36);Q=Math.max(Q,k*.28)}if(X>.35&&C>-3.9&&C<1.6){const k=me(.35,.92,X)*me(.1,.85,C)*(1-me(1.45,1.65,C)),wt=De(K,0,.16)*me(.55,.96,X),at=Math.pow(Math.max(0,Math.sin(C*5.8+Math.abs(K)*3.4)),4)*De(X,.42,.24)*me(-2.4,-.4,C)*(1-me(.95,1.35,C));lt=Math.max(lt,k*.48,wt*.84,at*.72)}if(C>-.78&&C<1.08){const k=De(C,.68,.28),wt=De(Math.abs(K),.44,.22)*me(-.1,-.86,X);O-=.018*k*wt,G+=Math.sign(K)*.012*k*wt;const at=De(C,.78,.2)*De(Math.abs(K),.7,.18)*me(-.08,-.78,X),yt=De(C,-.49,.22)*De(Math.abs(K),.68,.19)*me(-.05,-.78,X);O-=.026*at+.022*yt}if(C>=1.42){const k=De(C,1.842,.095),wt=De(Math.abs(K),.62,.17)*me(.18,.74,X);O+=.014*k*wt,G+=Math.sign(K)*.007*k*wt;const at=De(C,1.76,.12)*De(Math.abs(K),.88,.17)*De(X,-.12,.25);if(G+=Math.sign(K)*.016*at,X>.65&&C>1.56&&C<1.86){const yt=fh(G,C-1.745,.052),dt=fh(G,C-1.648,.038);lt=Math.max(lt,Math.max(yt,dt*.92))}C>1.98&&X>-.35&&X<.35&&(O-=.002*De(K,0,.08)*me(1.98,2.055,C)),J=.22+.24*me(1.85,2.05,C)}const W=new E().copy(T).addScaledVector(P,G).addScaledVector(M,O),it=me(1.52,1.6,C);if(it>0&&X<.04){const k=ki(C),wt=Math.max(me(.56,.9,Math.abs(K)),me(1.96,2.04,C)),at=k-.0042,yt=k+.039*(1-me(1.92,2.05,C)),dt=q.lerp(yt,at,wt),Ut=it*me(.04,-.26,X);W.y=q.lerp(W.y,dt,Ut)}if(C>1.66&&C<2)for(const k of p){if(Math.sign(W.x)!==Math.sign(k.center.x))continue;const wt=new E().subVectors(W,k.center),at=wt.dot(k.fwd),yt=wt.dot(k.right),dt=wt.dot(k.up);if(at>0){const Ut=Math.exp(-.5*(Math.pow(yt/.053,2)+Math.pow(dt/.045,2)))*me(0,.032,at),Pt=Sa-.022,B=q.lerp(at,Pt,Ut);at>B&&W.addScaledVector(k.fwd,B-at)}}if(C>1.94&&C<2.065&&W.y>1.48){const k=ph(W.x,W.z,.054,2.018,.017,.02)*De(W.y,1.508,.014),wt=ph(W.x,W.z,-.054,2.018,.017,.02)*De(W.y,1.508,.014),at=Math.max(k,wt),yt=me(1.96,2.055,W.z)*De(W.y,1.505,.032);Q=Math.max(Q,yt*.65),at>.05&&(W.x*=1-.14*at,W.y-=.009*at,W.z-=.011*at,Q=Math.max(Q,Math.min(1,.55+at*.85)))}const St=A*(n+1)+H;c[St*3]=W.x,c[St*3+1]=W.y,c[St*3+2]=W.z,h[St*2]=S*5.2,h[St*2+1]=V*1.6,u[St*4]=J,u[St*4+1]=lt,u[St*4+2]=j,u[St*4+3]=Q;const et=d_(W,i,a,r);d.set(et.indices,St*4),f.set(et.weights,St*4)}}const x=new Uint32Array(e*n*6);let w=0;for(let A=0;A<e;A++)for(let y=0;y<n;y++){const S=A*(n+1)+y,T=(A+1)*(n+1)+y,b=(A+1)*(n+1)+(y+1),M=A*(n+1)+(y+1);x[w++]=S,x[w++]=T,x[w++]=b,x[w++]=S,x[w++]=b,x[w++]=M}const _=new Zt;return _.setAttribute("position",new Z(c,3)),_.setAttribute("uv",new Z(h,2)),_.setAttribute("aAnatomyData",new Z(u,4)),_.setAttribute("skinIndex",new ye(d,4)),_.setAttribute("skinWeight",new Qt(f,4)),_.setIndex(new Z(x,1)),_.computeVertexNormals(),Na(_,e,n),_}function m_(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.162,1.848,1.24],maxWidth:.068,maxThick:.028,rollAngle:l*-.28,isPrimaryEar:!0}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.288,1.608,1.35],maxWidth:.032,maxThick:.017,rollAngle:l*-.82,isPrimaryEar:!1})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.boneNames.map(b=>i.bindWorldPositions.get(b).clone()),c=new E().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.055),...l,new E(...r.tipPos)],d=new Bn(u),f=r.boneNames.map(b=>i.boneIndexMap.get(b)),g=r.boneNames.map(b=>i.bindWorldPositions.get(b)),v=(o+1)*(a+1),m=new Float32Array(v*3),p=new Float32Array(v*2),x=new Float32Array(v*4),w=new Uint16Array(v*4),_=new Float32Array(v*4),A=new E(0,1,0);for(let b=0;b<=o;b++){const M=b/o,P=d.getPointAt(M),C=d.getTangentAt(M).normalize(),R=A.clone().addScaledVector(C,-A.dot(C)).normalize(),L=new E().crossVectors(R,C).normalize(),D=Math.cos(r.rollAngle),U=Math.sin(r.rollAngle),z=L.clone().multiplyScalar(D).addScaledVector(R,U),N=R.clone().multiplyScalar(D).addScaledVector(L,-U),H=r.isPrimaryEar?.72+.36*Math.sin(Math.pow(M,.75)*Math.PI*.88):Math.sin(Math.pow(M,.68)*Math.PI*.92),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.76)/.24),2))),$=r.maxWidth*H*V,K=r.maxThick*(.78+.28*Math.sin(M*Math.PI))*V;for(let X=0;X<=a;X++){const G=X/a,O=G*Math.PI*2,J=new E().copy(P).addScaledVector(z,$*Math.cos(O)).addScaledVector(N,K*Math.sin(O)),lt=b*(a+1)+X;m[lt*3]=J.x,m[lt*3+1]=J.y,m[lt*3+2]=J.z,p[lt*2]=M*.48,p[lt*2+1]=G*.48,x[lt*4]=.2,x[lt*4+1]=me(.55,.95,M)*.65,x[lt*4+2]=0,x[lt*4+3]=me(.65,1,M)*.3;const j=jn(J,f,g,4),Q=me(.3,0,M),W=Be([n,j.indices[0],j.indices[1],j.indices[2]],[Q,j.weights[0]*(1-Q),j.weights[1]*(1-Q),j.weights[2]*(1-Q)]);w.set(W.indices,lt*4),_.set(W.weights,lt*4)}}const y=new Uint16Array(o*a*6);let S=0;for(let b=0;b<o;b++)for(let M=0;M<a;M++){const P=b*(a+1)+M,C=(b+1)*(a+1)+M,R=(b+1)*(a+1)+(M+1),L=b*(a+1)+(M+1);y[S++]=P,y[S++]=C,y[S++]=R,y[S++]=P,y[S++]=R,y[S++]=L}const T=new Zt;T.setAttribute("position",new Z(m,3)),T.setAttribute("uv",new Z(p,2)),T.setAttribute("aAnatomyData",new Z(x,4)),T.setAttribute("skinIndex",new ye(w,4)),T.setAttribute("skinWeight",new Qt(_,4)),T.setIndex(new Z(y,1)),T.computeVertexNormals(),Na(T,o,a),e.push(T)}return e}function g_(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?To:Eo).clone(),d=new E(r*-.19,.98,.06).normalize(),f=new E().crossVectors(u,d).normalize(),g=new E().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,p=(s+1)*(o+1),x=new Float32Array(p*3),w=new Float32Array(p*2),_=new Float32Array(p*4),A=new Uint16Array(p*4),y=new Float32Array(p*4),S=Sa+.0016;for(let P=0;P<=o;P++){const C=P/o,R=De(C,.06,.08);for(let L=0;L<=s;L++){const D=L/s,U=q.degToRad(q.lerp(-65,65,D)),z=Math.sin(D*Math.PI),N=v?42*z:-38*z,H=v?78:-74,V=q.degToRad(q.lerp(N,H,C)),$=S+.0016*R-.0026*C,K=new E().addScaledVector(u,Math.cos(V)*Math.cos(U)).addScaledVector(f,Math.cos(V)*Math.sin(U)).addScaledVector(g,Math.sin(V)).normalize(),X=new E().copy(l).addScaledVector(K,$),G=P*(s+1)+L;x[G*3]=X.x,x[G*3+1]=X.y,x[G*3+2]=X.z,w[G*2]=D*.35,w[G*2+1]=C*.18,_[G*4]=.25;const O=z*(1-me(.48,1,C)),J=Math.max(0,Math.min(1,O));A.set([m,n,0,0],G*4),y.set([J,1-J,0,0],G*4)}}const T=new Uint16Array(s*o*6);let b=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,D=(P+1)*(s+1)+(C+1),U=P*(s+1)+(C+1);v?(T[b++]=R,T[b++]=D,T[b++]=L,T[b++]=R,T[b++]=U,T[b++]=D):(T[b++]=R,T[b++]=L,T[b++]=D,T[b++]=R,T[b++]=D,T[b++]=U)}const M=new Zt;M.setAttribute("position",new Z(x,3)),M.setAttribute("uv",new Z(w,2)),M.setAttribute("aAnatomyData",new Z(_,4)),M.setAttribute("skinIndex",new ye(A,4)),M.setAttribute("skinWeight",new Qt(y,4)),M.setIndex(new Z(T,1)),M.computeVertexNormals(),e.push(M)}}return e}function v_(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new E(a*.14,.89,.78),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new E(a*.292,.048,.925),new E(a*.292,.028,.992)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(gh(i,r,l,!0,a,n,s)),e.push(...mh(i,o,!0,t));const c=[new E(a*.13,.75,-.49),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new E(a*.278,.046,-.506),new E(a*.278,.028,-.442)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(gh(i,c,h,!1,a,n,s)),e.push(...mh(i,o,!1,t))}return e}function mh(i,t,e,n){const s=[],o=Cu(t,e),a=n===0?15:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=Math.hypot(l.dirX,l.dirZ),p=l.dirX/m,x=l.dirZ/m,w=x,_=-p;for(let T=0;T<=a;T++){const b=T/a,M=q.lerp(-.36,1,b),P=Math.max(0,M),C=Math.max(0,-M)*.036,R=Math.sin(P*Math.PI)*.009-.008*P*P+C,L=l.rootX+p*l.toeLength*M,D=l.rootZ+x*l.toeLength*M,U=l.rootY+R,z=1+.42*Math.pow(1-me(-.36,.18,M),1.5),N=1+.13*De(P,.4,.18)+.11*De(P,.84,.1),H=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(b-.89)/.11),2))),V=q.lerp(l.baseRadius,l.tipRadius,P)*z*N*H;for(let $=0;$<=r;$++){const K=$/r,X=K*Math.PI*2,G=Math.sin(X),O=Math.cos(X),J=1.1+.22*(1-me(-.34,.2,M)),lt=L+w*G*V*J,j=D+_*G*V*J;let Q=U+O*V*.86;Q<.003&&(Q=.003+Math.max(0,Q)*.14);const W=T*(r+1)+$;u[W*3]=lt,u[W*3+1]=Q,u[W*3+2]=j,d[W*2]=b*.36,d[W*2+1]=K*.32,f[W*4]=.28,f[W*4+1]=O>.2?.52*me(.2,.85,P):0,f[W*4+2]=.35,g.set([c,0,0,0],W*4),v.set([1,0,0,0],W*4)}}const A=new Uint16Array(a*r*6);let y=0;for(let T=0;T<a;T++)for(let b=0;b<r;b++){const M=T*(r+1)+b,P=(T+1)*(r+1)+b,C=(T+1)*(r+1)+(b+1),R=T*(r+1)+(b+1);A[y++]=M,A[y++]=P,A[y++]=C,A[y++]=M,A[y++]=C,A[y++]=R}const S=new Zt;S.setAttribute("position",new Z(u,3)),S.setAttribute("uv",new Z(d,2)),S.setAttribute("aAnatomyData",new Z(f,4)),S.setAttribute("skinIndex",new ye(g,4)),S.setAttribute("skinWeight",new Qt(v,4)),S.setIndex(new Z(A,1)),S.computeVertexNormals(),Na(S,a,r),s.push(S)}return s}function gh(i,t,e,n,s,o,a){const r=new Bn(t,!1,"centripetal",.5),l=e.map(_=>i.boneIndexMap.get(_)),c=e.map(_=>i.bindWorldPositions.get(_)),h=(o+1)*(a+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new E(0,0,1);for(let _=0;_<=o;_++){const y=1-_/o,S=r.getPointAt(y),T=r.getTangentAt(y).negate().normalize(),b=m.clone().addScaledVector(T,-m.dot(T)).normalize(),M=new E().crossVectors(b,T).normalize(),P=.5+.5*me(0,.34,y),C=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(y-.91)/.09),2)))*P;let R=.08,L=.092;if(n){const z=De(y,.54,.16)*.022,N=De(y,.86,.12)*.072;R=(.076+z+N)*C,L=(.09+De(y,.25,.18)*.028+z+N*.86)*C}else{const z=De(y,.52,.15)*.026,N=De(y,.86,.12)*.068;R=(.074+z+N)*C,L=(.094+De(y,.26,.19)*.038+z*1.06+N*.84)*C}const D=me(.7,.94,y),U=1-me(.08,.42,y);for(let z=0;z<=a;z++){const N=z/a,H=N*Math.PI*2,V=Math.sin(H),$=Math.cos(H),K=V*s>0?Math.abs(V):0,X=1-.28*U*K;let G=1;if(D>.01&&$>-.35){const k=Math.atan2(V,Math.max(.05,$+.25)),wt=Math.cos(k*3.6);G+=.14*D*Math.max(-.12,wt)*me(-.35,.45,$)}let O=0;if(n&&y>.28&&y<.84){const k=Math.max(0,V*s*.62-$*.78);O=Math.pow(k,3.6)*Math.sin((y-.28)/.56*Math.PI)*.028}else if(!n&&y>.34&&y<.84){const k=Math.max(0,V*s*.58-$*.81);O=Math.pow(k,3.8)*Math.sin((y-.34)/.5*Math.PI)*.022}const J=new E().copy(S).addScaledVector(M,(R*X*V+s*O*.65)*G).addScaledVector(b,(L*$-O*.75)*G);y>.7&&J.y<.004&&(J.y=.002+Math.max(0,J.y)*.14);const lt=_*(a+1)+z;u[lt*3]=J.x,u[lt*3+1]=J.y,u[lt*3+2]=J.z,d[lt*2]=y*1.35,d[lt*2+1]=N*.85,f[lt*4]=.22,f[lt*4+1]=Math.min(1,O*22+Math.pow(Math.max(0,Math.sin(y*14)),4)*K*.65),f[lt*4+2]=Math.max(me(.65,.96,y)*.35,Math.max(0,-V*s)*.45);const j=jn(J,l,c,3.5),Q=me(.24,0,y)*.72,W=l[l.length-1],it=me(.74,.88,y),St=(1-Q)*(1-it),et=Be([W,l[0],j.indices[0],j.indices[1]],[it,Q*(1-it),j.weights[0]*St,j.weights[1]*St]);g.set(et.indices,lt*4),v.set(et.weights,lt*4)}}const p=new Uint16Array(o*a*6);let x=0;for(let _=0;_<o;_++)for(let A=0;A<a;A++){const y=_*(a+1)+A,S=(_+1)*(a+1)+A,T=(_+1)*(a+1)+(A+1),b=_*(a+1)+(A+1);p[x++]=y,p[x++]=S,p[x++]=T,p[x++]=y,p[x++]=T,p[x++]=b}const w=new Zt;return w.setAttribute("position",new Z(u,3)),w.setAttribute("uv",new Z(d,2)),w.setAttribute("aAnatomyData",new Z(f,4)),w.setAttribute("skinIndex",new ye(g,4)),w.setAttribute("skinWeight",new Qt(v,4)),w.setIndex(new Z(p,1)),w.computeVertexNormals(),Na(w,o,a),w}function Na(i,t,e){const n=i.getAttribute("normal"),s=new E,o=new E;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function hi(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function __(i,t){return{jawSkinGeometry:Ve([M_(i,t),...w_(i,t)]),oralGumsGeometry:y_(i,t),teethGeometry:b_(i,t),tongueGeometry:S_(i,t),irisGeometry:vh(i,t,!1),corneaGeometry:vh(i,t,!0),clawsGeometry:A_(i,t)}}function x_(i,t){const e=1.66+Math.cos(i)*(t?.355:.34),n=Math.max(.02,ss(e)-(t?.022:.028));return{x:Math.sin(i)*n,z:e}}function M_(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4);for(let p=0;p<=e;p++){const x=p/e,w=q.lerp(1.45,2.056,x),_=ss(w),A=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(x-.87)/.13),2))),y=Math.max(.002,(_-.0032*hi(1.55,1.65,w))*A),S=ki(w),T=.025*(1-hi(1.45,1.59,w)),b=S+.0032+T,M=(.074-.03*x)*A;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),D=Math.cos(R),U=Math.exp(-Math.pow((x-.28)/.22,2))*.009,z=Math.exp(-Math.pow((x-.3)/.16,2))*Math.abs(L)*.008,N=(y+z)*L,H=-.019*D*(1-Math.pow(L,2))*hi(1.57,1.66,w),V=D>=0?b+H:b+(M+U)*D,$=p*(n+1)+P;c[$*3]=N,c[$*3+1]=V,c[$*3+2]=w,h[$*2]=x*.95,h[$*2+1]=C*.85,u[$*4]=.22,u[$*4+1]=0,u[$*4+2]=D<-.15?hi(.92,.25,x)*-D*.72:0,u[$*4+3]=x>.82?(x-.82)*2.2:0;const K=hi(1.51,1.6,w),X=1-K,G=hi(1.31,1.53,w),O=hi(1.26,1.45,w),J=X*(1-G),lt=Be([s,o,a,r],[K,X*G,J*(.52+.48*O),J*(.48-.48*O)]);d.set(lt.indices,$*4),f.set(lt.weights,$*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let p=0;p<e;p++)for(let x=0;x<n;x++){const w=p*(n+1)+x,_=(p+1)*(n+1)+x,A=(p+1)*(n+1)+(x+1),y=p*(n+1)+(x+1);g[v++]=w,g[v++]=_,g[v++]=A,g[v++]=w,g[v++]=A,g[v++]=y}const m=new Zt;return m.setAttribute("position",new Z(c,3)),m.setAttribute("uv",new Z(h,2)),m.setAttribute("aAnatomyData",new Z(u,4)),m.setAttribute("skinIndex",new ye(d,4)),m.setAttribute("skinWeight",new Qt(f,4)),m.setIndex(new Z(g,1)),m.computeVertexNormals(),m}function w_(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?12:8,a=t===0?10:6;for(const r of["L","R"]){const l=r==="L"?1:-1,c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let x=0;x<=a;x++){const w=x/a;for(let _=0;_<=o;_++){const A=_/o,y=q.lerp(1.56,1.72,A),S=ki(y),T=q.lerp(S-.015,S+.018,w),b=ss(y)-.008,M=-.005*Math.sin(A*Math.PI)*Math.sin(w*Math.PI),P=l*(b+M),C=x*(o+1)+_;h[C*3]=P,h[C*3+1]=T,h[C*3+2]=y,u[C*2]=A*.25,u[C*2+1]=w*.25,d[C*4]=.22;const R=hi(0,1,w);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let x=0;x<a;x++)for(let w=0;w<o;w++){const _=x*(o+1)+w,A=(x+1)*(o+1)+w,y=(x+1)*(o+1)+(w+1),S=x*(o+1)+(w+1);l>0?(v[m++]=_,v[m++]=y,v[m++]=A,v[m++]=_,v[m++]=S,v[m++]=y):(v[m++]=_,v[m++]=A,v[m++]=y,v[m++]=_,v[m++]=y,v[m++]=S)}const p=new Zt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new ye(f,4)),p.setAttribute("skinWeight",new Qt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),e.push(p)}return e}function y_(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?28:16,a=t===0?18:10;{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let x=0;x<=o;x++){const w=x/o,_=q.lerp(1.58,2.025,w),A=Math.max(.014,ss(_)-.018),y=ki(_),S=Math.sin(w*Math.PI*12)*.0022*Math.sin(w*Math.PI);for(let T=0;T<=a;T++){const b=T/a,M=(b-.5)*2,P=Math.cos(M*Math.PI*.5)*.028*(1-.45*w),C=-.002*Math.exp(-Math.pow(M/.12,2)),R=Math.exp(-Math.pow((Math.abs(M)-.88)/.12,2))*-.005,L=M*A,D=y+.007+P+S*(1-Math.abs(M)*.5)+C+R,U=x*(a+1)+T;h[U*3]=L,h[U*3+1]=D,h[U*3+2]=_,u[U*2]=w*2,u[U*2+1]=b*2,d[U*4+3]=(1-w)*.65,f.set([n,0,0,0],U*4),g.set([1,0,0,0],U*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let x=0;x<o;x++)for(let w=0;w<a;w++){const _=x*(a+1)+w,A=(x+1)*(a+1)+w,y=(x+1)*(a+1)+(w+1),S=x*(a+1)+(w+1);v[m++]=_,v[m++]=y,v[m++]=A,v[m++]=_,v[m++]=S,v[m++]=y}const p=new Zt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new ye(f,4)),p.setAttribute("skinWeight",new Qt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),e.push(p)}{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let x=0;x<=o;x++){const w=x/o,_=q.lerp(1.58,2.015,w),A=Math.max(.012,ss(_)-.022),y=ki(_);for(let S=0;S<=a;S++){const T=S/a,b=(T-.5)*2,M=-Math.cos(b*Math.PI*.5)*.016*(1-.35*w),P=Math.exp(-Math.pow((Math.abs(b)-.86)/.14,2))*.0055,C=b*A,R=y-.004+M+P,L=x*(a+1)+S;h[L*3]=C,h[L*3+1]=R,h[L*3+2]=_,u[L*2]=w*2,u[L*2+1]=T*2,d[L*4+3]=(1-w)*.55,f.set([s,0,0,0],L*4),g.set([1,0,0,0],L*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let x=0;x<o;x++)for(let w=0;w<a;w++){const _=x*(a+1)+w,A=(x+1)*(a+1)+w,y=(x+1)*(a+1)+(w+1),S=x*(a+1)+(w+1);v[m++]=_,v[m++]=A,v[m++]=y,v[m++]=_,v[m++]=y,v[m++]=S}const p=new Zt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new ye(f,4)),p.setAttribute("skinWeight",new Qt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),e.push(p)}const r=t===0?18:10,l=t===0?12:8;{const c=(r+1)*(l+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let x=0;x<=l;x++){const w=x/l;for(let _=0;_<=r;_++){const A=_/r,y=q.lerp(-Math.PI*.62,Math.PI*.62,A),S=1.66-Math.cos(y)*.1,T=ss(Math.max(1.55,S))-.02,b=Math.sin(y)*T,M=ki(S),P=q.lerp(M-.016,M+.026,w),C=x*(r+1)+_;h[C*3]=b,h[C*3+1]=P,h[C*3+2]=S,u[C*2]=A*1.5,u[C*2+1]=w*1.5,d[C*4+3]=.95*Math.cos(y*.65);const R=hi(0,1,w);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(r*l*6);let m=0;for(let x=0;x<l;x++)for(let w=0;w<r;w++){const _=x*(r+1)+w,A=(x+1)*(r+1)+w,y=(x+1)*(r+1)+(w+1),S=x*(r+1)+(w+1);v[m++]=_,v[m++]=A,v[m++]=y,v[m++]=_,v[m++]=y,v[m++]=S}const p=new Zt;p.setAttribute("position",new Z(h,3)),p.setAttribute("uv",new Z(u,2)),p.setAttribute("aAnatomyData",new Z(d,4)),p.setAttribute("skinIndex",new ye(f,4)),p.setAttribute("skinWeight",new Qt(g,4)),p.setIndex(new Z(v,1)),p.computeVertexNormals(),e.push(p)}return Ve(e)}function b_(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,f=q.lerp(-Math.PI*.42,Math.PI*.42,d),g=x_(f,r),v=g.x,m=g.z,p=ki(m)+(r?.01:-.009),x=1+.3*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),w=.0195*x*(.78+.22*Math.cos(f)),_=.0054*x,A=(o+1)*(a+1),y=new Float32Array(A*3),S=new Float32Array(A*2),T=new Float32Array(A*4),b=new Uint16Array(A*4),M=new Float32Array(A*4),P=-Math.sin(f),C=-Math.cos(f);for(let U=0;U<=o;U++){const z=r?1-U/o:U/o,N=_*(1-.88*Math.pow(z,1.25)),H=.0045*z*z,V=v+P*H,$=p+h*w*z,K=m+C*H-.0025*z*z;for(let X=0;X<=a;X++){const G=X/a,O=G*Math.PI*2,J=U*(a+1)+X;y[J*3]=V+Math.sin(O)*N,y[J*3+1]=$,y[J*3+2]=K+Math.cos(O)*N,S[J*2]=z,S[J*2+1]=G,b.set([c,0,0,0],J*4),M.set([1,0,0,0],J*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let U=0;U<o;U++)for(let z=0;z<a;z++){const N=U*(a+1)+z,H=(U+1)*(a+1)+z,V=(U+1)*(a+1)+(z+1),$=U*(a+1)+(z+1);R[L++]=N,R[L++]=H,R[L++]=V,R[L++]=N,R[L++]=V,R[L++]=$}const D=new Zt;D.setAttribute("position",new Z(y,3)),D.setAttribute("uv",new Z(S,2)),D.setAttribute("aAnatomyData",new Z(T,4)),D.setAttribute("skinIndex",new ye(b,4)),D.setAttribute("skinWeight",new Qt(M,4)),D.setIndex(new Z(R,1)),D.computeVertexNormals(),s.push(D)}}return Ve(s)}function S_(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let m=0;m<=e;m++){const p=m/e,x=q.lerp(1.62,1.96,p),w=ki(x)-.0035,_=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),A=(.068+.01*Math.sin(p*Math.PI)-.02*p)*_,y=(.013-.004*p)*_;for(let S=0;S<=n;S++){const T=S/n,b=T*Math.PI*2,M=Math.sin(b),P=Math.cos(b),C=P>.35?-.0035*Math.exp(-Math.pow(M/.24,2)):0,R=P>.2?.001*Math.sin(p*Math.PI*26)*Math.cos(M*Math.PI*9)*_:0,L=new E(A*M,w+y*P+C+R,x),D=m*(n+1)+S;l[D*3]=L.x,l[D*3+1]=L.y,l[D*3+2]=L.z,c[D*2]=p*2.5,c[D*2+1]=T*1.8;const U=jn(L,o,a,3.8);u.set(U.indices,D*4),d.set(U.weights,D*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let p=0;p<n;p++){const x=m*(n+1)+p,w=(m+1)*(n+1)+p,_=(m+1)*(n+1)+(p+1),A=m*(n+1)+(p+1);f[g++]=x,f[g++]=w,f[g++]=_,f[g++]=x,f[g++]=_,f[g++]=A}const v=new Zt;return v.setAttribute("position",new Z(l,3)),v.setAttribute("uv",new Z(c,2)),v.setAttribute("aAnatomyData",new Z(h,4)),v.setAttribute("skinIndex",new ye(u,4)),v.setAttribute("skinWeight",new Qt(d,4)),v.setIndex(new Z(f,1)),v.computeVertexNormals(),v}function vh(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?To:Eo).clone(),u=new E(r*-.19,.98,.06).normalize(),d=new E().crossVectors(u,h).normalize(),f=new E().crossVectors(h,d).normalize(),g=e?Sa+8e-4:Sa,v=.94,m=(s+1)*(o+1),p=new Float32Array(m*3),x=new Float32Array(m*2),w=new Float32Array(m*4),_=new Uint16Array(m*4),A=new Float32Array(m*4);for(let b=0;b<=s;b++){const M=b/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(M),C=Math.cos(M);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,D=Math.cos(L),U=Math.sin(L);let z=g;if(M<v){const K=1-M/v;z+=e?.0013*K*K:-.0025*K*K}const N=new E().addScaledVector(h,C).addScaledVector(d,P*D).addScaledVector(f,P*U).normalize(),H=new E().copy(l).addScaledVector(N,z),V=b*(o+1)+R;p[V*3]=H.x,p[V*3+1]=H.y,p[V*3+2]=H.z;const $=Math.min(.498,M/v*.48);x[V*2]=.5+$*D,x[V*2+1]=.5+$*U,_.set([c,0,0,0],V*4),A.set([1,0,0,0],V*4)}}const y=new Uint16Array(s*o*6);let S=0;for(let b=0;b<s;b++)for(let M=0;M<o;M++){const P=b*(o+1)+M,C=(b+1)*(o+1)+M,R=(b+1)*(o+1)+(M+1),L=b*(o+1)+(M+1);y[S++]=P,y[S++]=C,y[S++]=R,y[S++]=P,y[S++]=R,y[S++]=L}const T=new Zt;T.setAttribute("position",new Z(p,3)),T.setAttribute("uv",new Z(x,2)),T.setAttribute("aAnatomyData",new Z(w,4)),T.setAttribute("skinIndex",new ye(_,4)),T.setAttribute("skinWeight",new Qt(A,4)),T.setIndex(new Z(y,1)),T.computeVertexNormals(),n.push(T)}return Ve(n)}function A_(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=Cu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,f=d,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,p=l.rootZ+d*l.toeLength*v,x=l.rootY+Math.sin(v*Math.PI)*.009-.008*v*v+.002,w=l.toeLength*(1-v)+l.clawLength,_=l.tipRadius*.72,A=(n+1)*(s+1),y=new Float32Array(A*3),S=new Float32Array(A*2),T=new Float32Array(A*4),b=new Uint16Array(A*4),M=new Float32Array(A*4);for(let L=0;L<=n;L++){const D=L/n,U=_*Math.sqrt(Math.max(.06,1-Math.pow(D,1.72))),z=m+u*w*D,N=p+d*w*D,H=Math.max(.004,x-.028*Math.pow(D,1.82)+.004*Math.sin(D*Math.PI));for(let V=0;V<=s;V++){const $=V/s,K=$*Math.PI*2,X=Math.sin(K),G=Math.cos(K),O=L*(s+1)+V;y[O*3]=z+f*X*U*.72,y[O*3+1]=Math.max(.002,H+G*U*1.04),y[O*3+2]=N+g*X*U*.72,S[O*2]=D,S[O*2+1]=$,b.set([c,0,0,0],O*4),M.set([1,0,0,0],O*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let D=0;D<s;D++){const U=L*(s+1)+D,z=(L+1)*(s+1)+D,N=(L+1)*(s+1)+(D+1),H=L*(s+1)+(D+1);P[C++]=U,P[C++]=z,P[C++]=N,P[C++]=U,P[C++]=N,P[C++]=H}const R=new Zt;R.setAttribute("position",new Z(y,3)),R.setAttribute("uv",new Z(S,2)),R.setAttribute("aAnatomyData",new Z(T,4)),R.setAttribute("skinIndex",new ye(b,4)),R.setAttribute("skinWeight",new Qt(M,4)),R.setIndex(new Z(P,1)),R.computeVertexNormals(),e.push(R)}}return Ve(e)}function Zs(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function T_(i,t){const e=[],n=[];for(const s of["L","R"]){const o=s==="L"?1:-1;e.push(...E_(i,s,o,t)),n.push(...C_(i,s,o,t)),e.push(...P_(i,s,t)),n.push(R_(i,s,t)),n.push(L_(i,s,o,t)),e.push(...I_(i,s,o,t)),n.push(D_(i,s,o,t))}return{wingSparsSkinGeometry:Ve(e),wingMembraneGeometry:Ve(n),dorsalSpinesGeometry:F_(i,t)}}function Aa(i,t,e,n,s,o,a=.42,r=.12){const l=new Bn(t),c=e.map(A=>i.boneIndexMap.get(A)),h=e.map(A=>i.bindWorldPositions.get(A)),u=(s+1)*(o+1),d=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),p=new E(0,1,0);for(let A=0;A<=s;A++){const y=A/s,S=l.getPointAt(y),T=l.getTangentAt(y).normalize();let b=p.clone().addScaledVector(T,-p.dot(T));b.lengthSq()<1e-4&&b.set(0,0,1),b.normalize();const M=new E().crossVectors(b,T).normalize(),P=y*(n.length-1),C=Math.min(n.length-2,Math.floor(P)),R=P-C;let L=q.lerp(n[C],n[C+1],R);y>.86&&(L*=Math.sqrt(Math.max(0,1-Math.pow((y-.86)/.14,2))));for(let D=0;D<=o;D++){const U=D/o,z=U*Math.PI*2,N=new E().copy(S).addScaledVector(M,L*Math.sin(z)).addScaledVector(b,L*a*Math.cos(z)),H=A*(o+1)+D;d[H*3]=N.x,d[H*3+1]=N.y,d[H*3+2]=N.z,f[H*2]=y*1.4,f[H*2+1]=U*.45,g[H*4]=.08,g[H*4+1]=Zs(.3,.92,y)*.38,g[H*4+2]=r;const V=jn(N,c,h,3.8);v.set(V.indices,H*4),m.set(V.weights,H*4)}}const x=new Uint16Array(s*o*6);let w=0;for(let A=0;A<s;A++)for(let y=0;y<o;y++){const S=A*(o+1)+y,T=(A+1)*(o+1)+y,b=(A+1)*(o+1)+(y+1),M=A*(o+1)+(y+1);x[w++]=S,x[w++]=T,x[w++]=b,x[w++]=S,x[w++]=b,x[w++]=M}const _=new Zt;return _.setAttribute("position",new Z(d,3)),_.setAttribute("uv",new Z(f,2)),_.setAttribute("aAnatomyData",new Z(g,4)),_.setAttribute("skinIndex",new ye(v,4)),_.setAttribute("skinWeight",new Qt(m,4)),_.setIndex(new Z(x,1)),_.computeVertexNormals(),_}function E_(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new E(e*.16,.9,.68),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(Aa(i,c,h,[.048,.052,.05,.042,.032,.02,.005],o,a,.58,.08));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(Aa(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.013,.0085,.0025],r,l,.34,.1))}return s}function Bs(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const f=d/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),p=d*(i+1)+g;s[p*3]=m.pos.x,s[p*3+1]=m.pos.y,s[p*3+2]=m.pos.z,o[p*2]=v*1.25,o[p*2+1]=f*1.25,a[p*4]=.06,a[p*4+1]=m.pinkStripe??0,a[p*4+2]=m.iceBlue??.14,a[p*4+3]=m.thinness,r.set(m.skin.indices,p*4),l.set(m.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let f=0;f<i;f++){const g=d*(i+1)+f,v=(d+1)*(i+1)+f,m=(d+1)*(i+1)+(f+1),p=d*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=p}const u=new Zt;return u.setAttribute("position",new Z(s,3)),u.setAttribute("uv",new Z(o,2)),u.setAttribute("uv1",new Z(o,2)),u.setAttribute("aAnatomyData",new Z(a,4)),u.setAttribute("skinIndex",new ye(r,4)),u.setAttribute("skinWeight",new Qt(l,4)),u.setIndex(new Z(c,1)),u.computeVertexNormals(),u}function C_(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(Bs(o,Math.max(4,Math.floor(a*.5)),(_,A)=>{const y=new E().lerpVectors(new E(e*.25,.96,.74),f,_),S=_<.45?new E().lerpVectors(v,g,_/.45):new E().lerpVectors(g,f,(_-.45)/.55),T=new E().lerpVectors(S,y,A),b=Math.max(0,1-_*2.1),M=Math.max(0,(_-.45)*1.82),P=Math.max(0,1-b-M),C=Be([c,l,r,0],[b,P,M,0]);return{pos:T,skin:C,thinness:.38+.34*A,pinkStripe:.18*A,iceBlue:.1}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),x=i.boneIndexMap.get(`wingFinger_${t}_1_a`),w=i.boneIndexMap.get(`wingFinger_${t}_1_b`);s.push(Bs(o,a,(_,A)=>{const y=new E(e*.21,.9,.62),S=new E(e*.18,.75,-.44),T=new E().lerpVectors(y,S,A),b=A<.5?new E().lerpVectors(f,m,A*2):new E().lerpVectors(m,p,(A-.5)*2),M=_<.45?new E().lerpVectors(v,g,_/.45):new E().lerpVectors(g,f,(_-.45)/.55),P=new E().lerpVectors(T,b,_),C=new E().lerpVectors(M,P,Math.pow(A,.85));C.z+=Math.sin(_*Math.PI)*.045*Math.pow(A,1.8),C.y+=Math.sin(_*Math.PI)*Math.sin(A*Math.PI)*.022;const R=1-_,L=_,D=A<.36?h:A<.72?u:d,U=A<.25?l:A<.55?r:x,z=A<.55?x:w,N=A<.55?A/.55:(A-.55)/.45,H=Be([D,U,z,c],[R*.88,L*(1-N),L*N,R*.12]),V=Math.pow(.5+.5*Math.sin(A*14+_*4.5),3)*.55;return{pos:C,skin:H,thinness:.55+.4*A,pinkStripe:V*_,iceBlue:(1-_)*.35+.08}}));for(let _=1;_<=5;_++){const A=i.bindWorldPositions.get(`wingFinger_${t}_${_}_a`),y=i.bindWorldPositions.get(`wingFinger_${t}_${_}_b`),S=i.bindWorldPositions.get(`wingFinger_${t}_${_+1}_a`),T=i.bindWorldPositions.get(`wingFinger_${t}_${_+1}_b`),b=i.boneIndexMap.get(`wingFinger_${t}_${_}_a`),M=i.boneIndexMap.get(`wingFinger_${t}_${_}_b`),P=i.boneIndexMap.get(`wingFinger_${t}_${_+1}_a`),C=i.boneIndexMap.get(`wingFinger_${t}_${_+1}_b`);s.push(Bs(o,a,(R,L)=>{const D=L<.5?new E().lerpVectors(f,A,L*2):new E().lerpVectors(A,y,(L-.5)*2),U=L<.5?new E().lerpVectors(f,S,L*2):new E().lerpVectors(S,T,(L-.5)*2),z=new E().lerpVectors(D,U,R),N=_===5?-.028:.042,H=new E().subVectors(f,z).normalize();z.addScaledVector(H,N*Math.sin(R*Math.PI)*Math.pow(L,2.2)),z.y+=Math.sin(R*Math.PI)*Math.sin(L*Math.PI)*.018;let V;if(L<.5){const X=L*2;V=Be([r,b,P,0],[1-X,X*(1-R),X*R,0])}else{const X=(L-.5)*2;V=Be([b,M,P,C],[(1-R)*(1-X),(1-R)*X,R*(1-X),R*X])}const $=Math.sin(L*18-_*.65+Math.sin(R*Math.PI)*1.4),K=Zs(.28,.94,$)*Zs(.14,.58,L)*.88;return{pos:z,skin:V,thinness:.62+.38*L,pinkStripe:K,iceBlue:(1-L)*.24+.06}}))}return s}function P_(i,t,e){const n=t==="L"?1:-1,s=[],o=e===0?10:6,a=e===0?8:6;return Eu.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new E(n*r.rootX,r.rootY,r.rootZ),u=new E(n*r.tipX,r.tipY,r.tipZ);s.push(Aa(i,[h,u],[c],[.009,.0022],o,a,.35,.2))}),s}function R_(i,t,e){const n=t==="L"?1:-1,s=e===0?16:9,o=i.boneIndexMap.get(`pelvicFin_${t}_1`),a=i.boneIndexMap.get(`pelvicFin_${t}_2`),r=i.boneIndexMap.get(`pelvicFin_${t}_3`),l=new E(n*.16,.72,-.7),c=new E(n*.095,.52,-1.46);return Bs(s,s,(h,u)=>{const d=new E().lerpVectors(l,c,h),f=.29*Math.sin(Math.pow(h,.74)*Math.PI),g=d.clone().add(new E(n*f,-.025*f,-.08*Math.sin(h*Math.PI))),v=new E().lerpVectors(d,g,u),m=Math.max(0,1-h*2),p=Math.max(0,(h-.5)*2),x=Math.max(0,1-m-p),w=Be([o,a,r,0],[m,x,p,0]);return{pos:v,skin:w,thinness:.52+.45*u,pinkStripe:u*.38,iceBlue:.26}})}function L_(i,t,e,n){const s=n===0?12:6,o=i.boneIndexMap.get("tail_7"),a=i.boneIndexMap.get("tail_8"),r=new E(e*.02,.12,-2.92),l=new E(e*.018,.116,-3.22);return Bs(s,s,(c,h)=>{const u=new E().lerpVectors(r,l,c),d=.115*Math.sin(Math.pow(c,.75)*Math.PI),f=u.clone().add(new E(e*d,.008*Math.sin(c*Math.PI),-.025*c)),g=new E().lerpVectors(u,f,h),v=Be([o,a,0,0],[1-c,c,0,0]);return{pos:g,skin:v,thinness:.55+.4*h,pinkStripe:h*.35,iceBlue:.28}})}function I_(i,t,e,n){const s=[],o=n===0?10:6,a=n===0?8:6;return Tu.forEach((r,l)=>{const c=`tailFin_${t}_${l+1}`,h=new E(e*r.rootX,r.rootY,r.rootZ),u=new E().lerpVectors(h,new E(e*r.tipX,r.tipY,r.tipZ),.92);s.push(Aa(i,[h,u],[c],[.0075,.0018],o,a,.34,.24))}),s}function D_(i,t,e,n){const s=n===0?28:n===1?16:10,o=n===0?16:n===1?10:6,a=i.boneIndexMap.get(`tailFinHinge_${t}`),r=i.boneIndexMap.get(`tailFin_${t}_1`),l=i.boneIndexMap.get(`tailFin_${t}_3`),c=i.boneIndexMap.get(`tailFin_${t}_5`),h=-3.22,u=-4.08;return Bs(s,o,(d,f)=>{const g=q.lerp(h,u,d),v=e*.016,m=.116,p=Math.sin(Math.pow(d,.6)*Math.PI),x=.455*p*(1+.1*Math.sin(d*Math.PI*2-.6)),w=.095*Math.sin(Math.min(1,d/.52)*Math.PI)*(d<.52?1:0),_=-.115*Math.sin(Math.max(0,(d-.5)/.5)*Math.PI),A=g+w+_,y=v+e*x,S=m+.012*p,T=Math.sin(d*Math.PI*5)*.0028*Math.sin(f*Math.PI)*p,b=new E(q.lerp(v,y,f),q.lerp(m,S,f)+T,q.lerp(g,A,f)),M=Math.max(0,1-d*2.2),P=Math.max(0,(d-.55)*2.2),C=Math.max(0,1-M-P),R=Be([a,r,l,c],[.25,M*.75,C*.75,P*.75]);return{pos:b,skin:R,thinness:.54+.44*f,pinkStripe:Zs(.32,.94,f)*.52,iceBlue:.34*(1-f*.35)}})}function F_(i,t){const e=t===0?84:t===1?48:28,n=t===0?10:6,s=["tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest"],o=s.map(x=>i.boneIndexMap.get(x)),a=s.map(x=>i.bindWorldPositions.get(x));new Bn([new E(0,.14,-3.02),new E(0,.23,-2.24),new E(0,.45,-1.5),new E(0,.82,-.78),new E(0,.94,-.32),new E(0,1.01,.18),new E(0,1.07,.6)]);const r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*3),h=new Float32Array(r*2),u=new Float32Array(r*4),d=new Uint16Array(r*4),f=new Float32Array(r*4);for(let x=0;x<=e;x++){const w=x/e,_=q.lerp(-3.02,.66,w),A=u_(_),y=A.point,S=A.up,T=Zs(0,.14,w)*Zs(1,.82,w),b=(.012+.024*Math.sin(Math.pow(w,.78)*Math.PI))*T,M=.015*(.45+.55*T),P=jn(y,o,a,3.8);for(let C=0;C<=n;C++){const R=C/n,L=Math.sin(R*Math.PI),D=Math.cos(R*Math.PI)*M*(1-.55*L),U=-.016+(b+.016)*Math.pow(L,.9),z=y.clone().addScaledVector(S,U);z.x=D;const N=z.clone().addScaledVector(S,b*.35*L),H=x*(n+1)+C;l[H*3]=z.x,l[H*3+1]=z.y,l[H*3+2]=z.z,c[H*3]=N.x,c[H*3+1]=N.y,c[H*3+2]=N.z,h[H*2]=w*3,h[H*2+1]=R,u[H*4]=.08,u[H*4+1]=L*.72,u[H*4+2]=L*.28,u[H*4+3]=L*.88,d.set(P.indices,H*4),f.set(P.weights,H*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let x=0;x<e;x++)for(let w=0;w<n;w++){const _=x*(n+1)+w,A=(x+1)*(n+1)+w,y=(x+1)*(n+1)+(w+1),S=x*(n+1)+(w+1);g[v++]=_,g[v++]=y,g[v++]=A,g[v++]=_,g[v++]=S,g[v++]=y}const m=new Zt;m.setAttribute("position",new Z(l,3)),m.setAttribute("uv",new Z(h,2)),m.setAttribute("uv1",new Z(h,2)),m.setAttribute("aAnatomyData",new Z(u,4)),m.setAttribute("skinIndex",new ye(d,4)),m.setAttribute("skinWeight",new Qt(f,4)),m.setIndex(new Z(g,1));const p=new Z(c,3);return p.name="dorsalFlex",m.morphAttributes.position=[p],m.computeVertexNormals(),m}function N_(){const i=Zv(),t=l_(),e=new Zn;e.name="LightFury_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s=[],o={},a={};for(const l of[0,1,2]){const c=new Zn;c.name=`LightFury_LOD${l}`;const h=p_(i,l),u=__(i,l),d=T_(i,l),f=Ve([h,u.jawSkinGeometry,d.wingSparsSkinGeometry]),g=u.clawsGeometry,v=(R,L,D,U=!0,z=!0)=>{const N=new tu(L,D);return N.name=`${R}_LOD${l}`,N.castShadow=U,N.receiveShadow=z,N.frustumCulled=!1,N.bind(i.skeleton,new ce),N},m=v("LightFuryBodyAndHeadSkin",f,t.skinMaterial),p=v("LightFuryIridescentWingsAndHeartTail",d.wingMembraneGeometry,t.wingMembraneMaterial),x=v("LightFuryContinuousDorsalSail",d.dorsalSpinesGeometry,t.skinMaterial);n.push(x);const w=v("LightFuryOralGums",u.oralGumsGeometry,t.oralGumMaterial,!1,!0),_=v("LightFuryRetractableTeeth",u.teethGeometry,t.teethMaterial,!0,!0),A=v("LightFuryArticulatedTongue",u.tongueGeometry,t.tongueMaterial,!1,!0),y=v("LightFurySkyBlueIrises",u.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),S=v("LightFuryRefractiveCorneas",u.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1),T=v("LightFurySlatePearlClaws",g,t.clawMaterial,!0,!0);for(const R of[m,x,T,w,_,A,y])R.renderOrder=11;S.renderOrder=12,p.renderOrder=13;const b=[m,p,x,w,_,A,y,S,T],M=[["LFDepth_BodySkin",f,t.hullDepthMaterial,!1],["LFDepth_WingMembrane",d.wingMembraneGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_DorsalSail",d.dorsalSpinesGeometry,t.hullDepthMaterial,!0],["LFDepth_Gums",u.oralGumsGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_Teeth",u.teethGeometry,t.hullDepthMaterial,!1],["LFDepth_Tongue",u.tongueGeometry,t.hullDepthMaterial,!1],["LFDepth_Irises",u.irisGeometry,t.hullDepthMaterial,!1],["LFDepth_Claws",g,t.hullDepthMaterial,!1]];for(const[R,L,D,U]of M){const z=v(R,L,D,!1,!1);z.renderOrder=10,z.visible=!1,z.userData.excludeFromExport=!0,c.add(z),s.push(z),U&&n.push(z)}let P=0,C=0;for(const R of b){c.add(R);const L=R.geometry.getIndex();P+=L?L.count/3:R.geometry.getAttribute("position").count/3,C+=R.geometry.getAttribute("position").count}c.visible=l===0,e.add(c),o[l]=c,a[l]={lod:l,triangles:Math.round(P),vertices:C,subMeshCount:b.length}}const r={rootGroup:e,rig:i,materials:t,lodGroups:o,dorsalSailMeshes:n,hullDepthMeshes:s,lodStats:a,activeLOD:0,autoLOD:!1,setActiveLOD(l){r.activeLOD=l;for(const c of[0,1,2])o[c].visible=c===l},updateAutoLOD(l){if(!r.autoLOD)return r.activeLOD;const c=l<9.5?0:l<20?1:2;return c!==r.activeLOD&&r.setActiveLOD(c),r.activeLOD}};return r}function _h(){return new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})})}function U_(){const i=document.getElementById("loading-curtain"),t=document.getElementById("lc-progress-fill"),e=document.getElementById("lc-stage-text"),n=document.getElementById("lc-pct-text"),s=Array.from(document.querySelectorAll("#lc-stage-pills .lc-stage-pill"));let o=4,a=2,r=0;const l=d=>{const f=d>=100?4:d>=84?3:d>=60?2:d>=36?1:0;s.forEach((g,v)=>{g.classList.toggle("is-done",v<f),g.classList.toggle("is-active",v===f)})},c=()=>{const d=o-a;Math.abs(d)>.15?a+=d*.24:a=o,t&&(t.style.width=`${a.toFixed(1)}%`),n&&(n.textContent=`${String(Math.round(a)).padStart(2,"0")}%`),l(a),(a<99.9||o<100)&&(r=requestAnimationFrame(c))};r=requestAnimationFrame(c);const h=d=>{!d||!e||e.textContent===d||(e.classList.add("is-switching"),window.setTimeout(()=>{e.textContent=d,e.classList.remove("is-switching")},95))},u=(d,f)=>{o=Math.max(o,Math.min(100,d)),t&&(t.style.width=`${o.toFixed(1)}%`),l(o),h(f)};return u(6,"Preparing WebGL2 twilight canvas…"),{async advanceTo(d,f){u(d,f),await _h()},async completeAndDissolve(d){o=100,a=100,t&&(t.style.width="100%"),n&&(n.textContent="100%"),l(100),h("The horizon is ready."),await _h(),await new Promise(f=>setTimeout(f,320)),i&&(i.classList.add("is-dissolving"),setTimeout(()=>{r&&cancelAnimationFrame(r),window.__stopLoadingAmbient?.(),i.remove()},1280)),d.classList.remove("hud-entering")}}}const xh={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Ta{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new Y_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new ox(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,s){const o=new X_,a=[];for(let r=0,l=this.pluginCallbacks.length;r<l;r++)a.push(this.pluginCallbacks[r](o));o.setPlugins(a),o.setTextureUtils(this.textureUtils),o.writeAsync(t,e,s).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(s,o){n.parse(t,s,o,e)})}}const Te={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},yr="KHR_mesh_quantization",Rn={};Rn[Mn]=Te.NEAREST;Rn[Nh]=Te.NEAREST_MIPMAP_NEAREST;Rn[ao]=Te.NEAREST_MIPMAP_LINEAR;Rn[$n]=Te.LINEAR;Rn[oa]=Te.LINEAR_MIPMAP_NEAREST;Rn[Ii]=Te.LINEAR_MIPMAP_LINEAR;Rn[Li]=Te.CLAMP_TO_EDGE;Rn[ii]=Te.REPEAT;Rn[fa]=Te.MIRRORED_REPEAT;const Mh={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},k_=new Ht,wh=12,z_=1179937895,B_=2,yh=8,O_=1313821514,H_=5130562;function uo(i,t){return i.length===t.length&&i.every(function(e,n){return e===t[n]})}function V_(i){return new TextEncoder().encode(i).buffer}function W_(i){return uo(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function G_(i,t,e){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let o=0;o<i.itemSize;o++){let a;i.itemSize>4?a=i.array[s*i.itemSize+o]:(o===0?a=i.getX(s):o===1?a=i.getY(s):o===2?a=i.getZ(s):o===3&&(a=i.getW(s)),i.normalized===!0&&(a=q.normalize(a,i.array))),n.min[o]=Math.min(n.min[o],a),n.max[o]=Math.max(n.max[o],a)}return n}function Du(i){return Math.ceil(i/4)*4}function br(i,t=0){const e=Du(i.byteLength);if(e!==i.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(i)),t!==0)for(let s=i.byteLength;s<e;s++)n[s]=t;return n.buffer}return i}function bh(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Sh(i,t){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),i.convertToBlob({type:t,quality:e})}class X_{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Ea}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const s=this,o=s.buffers,a=s.json;n=s.options;const r=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(o,{type:"application/octet-stream"}),h=Object.keys(r),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const f=br(d.result),g=new DataView(new ArrayBuffer(yh));g.setUint32(0,f.byteLength,!0),g.setUint32(4,H_,!0);const v=br(V_(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(yh));m.setUint32(0,v.byteLength,!0),m.setUint32(4,O_,!0);const p=new ArrayBuffer(wh),x=new DataView(p);x.setUint32(0,z_,!0),x.setUint32(4,B_,!0);const w=wh+m.byteLength+v.byteLength+g.byteLength+f.byteLength;x.setUint32(8,w,!0);const _=new Blob([p,m,v,g,f],{type:"application/octet-stream"}),A=new FileReader;A.readAsArrayBuffer(_),A.onloadend=function(){e(A.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const f=d.result;a.buffers[0].uri=f,e(a)}}else e(a)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const o=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&o.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const a in o.gltfExtensions)e.extensions[a]=o.gltfExtensions[a],s[a]=!0;delete o.gltfExtensions}Object.keys(o).length>0&&(e.extras=o)}catch(o){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+o.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new E;for(let s=0,o=t.count;s<o;s++)if(Math.abs(n.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),s=new E;for(let o=0,a=n.count;o<a;o++)s.fromBufferAttribute(n,o),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(o,s.x,s.y,s.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(s.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(f){return f.colorSpace===an?function(v){return v<.04045?v*.0773993808:Math.pow(v*.9478672986+.0521327014,2.4)}:function(v){return v}}t instanceof or&&(t=await this.decompressTextureAsync(t)),e instanceof or&&(e=await this.decompressTextureAsync(e));const s=t?t.image:null,o=e?e.image:null,a=Math.max(s?s.width:0,o?o.width:0),r=Math.max(s?s.height:0,o?o.height:0),l=bh();l.width=a,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,r);const h=c.getImageData(0,0,a,r);if(s){c.drawImage(s,0,0,a,r);const f=n(t),g=c.getImageData(0,0,a,r).data;for(let v=2;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}if(o){c.drawImage(o,0,0,a,r);const f=n(e),g=c.getImageData(0,0,a,r).data;for(let v=1;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}c.putImageData(h,0,0);const d=(t||e).clone();return d.source=new Pa(l),d.colorSpace=kn,d.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,s,o){const a=this.json;a.bufferViews||(a.bufferViews=[]);let r;switch(e){case Te.BYTE:case Te.UNSIGNED_BYTE:r=1;break;case Te.SHORT:case Te.UNSIGNED_SHORT:r=2;break;default:r=4}let l=t.itemSize*r;o===Te.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Du(s*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let g=n;g<n+s;g++){for(let v=0;v<t.itemSize;v++){let m;t.itemSize>4?m=t.array[g*t.itemSize+v]:(v===0?m=t.getX(g):v===1?m=t.getY(g):v===2?m=t.getZ(g):v===3&&(m=t.getW(g)),t.normalized===!0&&(m=q.normalize(m,t.array))),e===Te.FLOAT?h.setFloat32(u,m,!0):e===Te.INT?h.setInt32(u,m,!0):e===Te.UNSIGNED_INT?h.setUint32(u,m,!0):e===Te.SHORT?h.setInt16(u,m,!0):e===Te.UNSIGNED_SHORT?h.setUint16(u,m,!0):e===Te.BYTE?h.setInt8(u,m):e===Te.UNSIGNED_BYTE&&h.setUint8(u,m),u+=r}u%l!==0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return o!==void 0&&(d.target=o),o===Te.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const o=new FileReader;o.readAsArrayBuffer(t),o.onloadend=function(){const a=br(o.result),r={buffer:e.processBuffer(a),byteOffset:e.byteOffset,byteLength:a.byteLength};e.byteOffset+=a.byteLength,s(n.bufferViews.push(r)-1)}})}processAccessor(t,e,n,s){const o=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let r;if(t.array.constructor===Float32Array)r=Te.FLOAT;else if(t.array.constructor===Int32Array)r=Te.INT;else if(t.array.constructor===Uint32Array)r=Te.UNSIGNED_INT;else if(t.array.constructor===Int16Array)r=Te.SHORT;else if(t.array.constructor===Uint16Array)r=Te.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)r=Te.BYTE;else if(t.array.constructor===Uint8Array)r=Te.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;const l=G_(t,n,s);let c;e!==void 0&&(c=t===e.index?Te.ELEMENT_ARRAY_BUFFER:Te.ARRAY_BUFFER);const h=this.processBufferView(t,r,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:r,count:s,max:l.max,min:l.min,type:a[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),o.accessors||(o.accessors=[]),o.accessors.push(u)-1}processImage(t,e,n,s="image/png"){if(t!==null){const o=this,a=o.cache,r=o.json,l=o.options,c=o.pending;a.images.has(t)||a.images.set(t,{});const h=a.images.get(t),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];r.images||(r.images=[]);const d={mimeType:s},f=bh();f.width=Math.min(t.width,l.maxTextureSize),f.height=Math.min(t.height,l.maxTextureSize);const g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),t.data!==void 0){e!==Pn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const m=new Uint8ClampedArray(t.height*t.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=t.data[p+0],m[p+1]=t.data[p+1],m[p+2]=t.data[p+2],m[p+3]=t.data[p+3];g.putImageData(new ImageData(m,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(Sh(f,s).then(m=>o.processBufferViewImage(m)).then(m=>{d.bufferView=m})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):c.push(Sh(f,s).then(m=>new FileReader().readAsDataURL(m)).then(m=>{d.uri=m}));const v=r.images.push(d)-1;return h[u]=v,v}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:Rn[t.magFilter],minFilter:Rn[t.minFilter],wrapS:Rn[t.wrapS],wrapT:Rn[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,s=this.cache,o=this.json;if(s.textures.has(t))return s.textures.get(t);o.textures||(o.textures=[]),t instanceof or&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let a=t.userData.mimeType;a==="image/webp"&&(a="image/png");const r={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,a)};t.name&&(r.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,r)});const l=o.textures.push(r)-1;return s.textures.set(t,l),l}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const o=t.color.toArray().concat([t.opacity]);if(uo(o,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=o),t.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=t.metalness,s.pbrMetallicRoughness.roughnessFactor=t.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const r=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(r),texCoord:r.channel};this.applyTextureTransform(l,r),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const r={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(r,t.map),s.pbrMetallicRoughness.baseColorTexture=r}if(t.emissive){const r=t.emissive;if(Math.max(r.r,r.g,r.b)>0&&(s.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const c={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(c,t.emissiveMap),s.emissiveTexture=c}}if(t.normalMap){const r={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(r.scale=t.normalScale.x),this.applyTextureTransform(r,t.normalMap),s.normalTexture=r}if(t.aoMap){const r={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(r.strength=t.aoMapIntensity),this.applyTextureTransform(r,t.aoMap),s.occlusionTexture=r}t.transparent?s.alphaMode="BLEND":t.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=t.alphaTest),t.side===Je&&(s.doubleSided=!0),t.name!==""&&(s.name=t.name),this.serializeUserData(t,s),await this._invokeAllAsync(async function(r){r.writeMaterialAsync&&await r.writeMaterialAsync(t,s)});const a=n.materials.push(s)-1;return e.materials.set(t,a),a}async processMeshAsync(t){const e=this.cache,n=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let _=0,A=t.material.length;_<A;_++)s.push(t.material[_].uuid);else s.push(t.material.uuid);const o=s.join(":");if(e.meshes.has(o))return e.meshes.get(o);const a=t.geometry;let r;t.isLineSegments?r=Te.LINES:t.isLineLoop?r=Te.LINE_LOOP:t.isLine?r=Te.LINE_STRIP:t.isPoints?r=Te.POINTS:r=t.material.wireframe?Te.LINES:Te.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in a.attributes){if(_.slice(0,5)==="morph")continue;const A=a.attributes[_];if(_=d[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),e.attributes.has(this.getUID(A))){c[_]=e.attributes.get(this.getUID(A));continue}g=null;const S=A.array;_==="JOINTS_0"&&!(S instanceof Uint16Array)&&!(S instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Z(new Uint16Array(S),A.itemSize,A.normalized)):(S instanceof Uint32Array||S instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=Ta.Utils.toFloat32BufferAttribute(A));const T=this.processAccessor(g||A,a);T!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,A),c[_]=T,e.attributes.set(this.getUID(A),T))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const _=[],A=[],y={};if(t.morphTargetDictionary!==void 0)for(const S in t.morphTargetDictionary)y[t.morphTargetDictionary[S]]=S;for(let S=0;S<t.morphTargetInfluences.length;++S){const T={};let b=!1;for(const M in a.morphAttributes){if(M!=="position"&&M!=="normal"){b||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),b=!0);continue}const P=a.morphAttributes[M][S],C=M.toUpperCase(),R=a.attributes[M];if(e.attributes.has(this.getUID(P,!0))){T[C]=e.attributes.get(this.getUID(P,!0));continue}const L=P.clone();if(!a.morphTargetsRelative)for(let D=0,U=P.count;D<U;D++)for(let z=0;z<P.itemSize;z++)z===0&&L.setX(D,P.getX(D)-R.getX(D)),z===1&&L.setY(D,P.getY(D)-R.getY(D)),z===2&&L.setZ(D,P.getZ(D)-R.getZ(D)),z===3&&L.setW(D,P.getW(D)-R.getW(D));T[C]=this.processAccessor(L,a),e.attributes.set(this.getUID(R,!0),T[C])}u.push(T),_.push(t.morphTargetInfluences[S]),t.morphTargetDictionary!==void 0&&A.push(y[S])}l.weights=_,A.length>0&&(l.extras={},l.extras.targetNames=A)}const v=Array.isArray(t.material);if(v&&a.groups.length===0)return null;let m=!1;if(v&&a.index===null){const _=[];for(let A=0,y=a.attributes.position.count;A<y;A++)_[A]=A;a.setIndex(_),m=!0}const p=v?t.material:[t.material],x=v?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,A=x.length;_<A;_++){const y={mode:r,attributes:c};if(this.serializeUserData(a,y),u.length>0&&(y.targets=u),a.index!==null){let T=this.getUID(a.index);(x[_].start!==void 0||x[_].count!==void 0)&&(T+=":"+x[_].start+":"+x[_].count),e.attributes.has(T)?y.indices=e.attributes.get(T):(y.indices=this.processAccessor(a.index,a,x[_].start,x[_].count),e.attributes.set(T,y.indices)),y.indices===null&&delete y.indices}const S=await this.processMaterialAsync(p[x[_].materialIndex]);S!==null&&(y.material=S),h.push(y)}m===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(t,l)});const w=n.meshes.push(l)-1;return e.meshes.set(o,w),w}detectMeshQuantization(t,e){if(this.extensionsUsed[yr])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const s=t.split("_",1)[0];xh[s]&&xh[s].includes(n)&&(this.extensionsUsed[yr]=!0,this.extensionsRequired[yr]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:q.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),t=Ta.Utils.mergeMorphTargetTracks(t.clone(),e);const o=t.tracks,a=[],r=[];for(let l=0;l<o.length;++l){const c=o[l],h=Le.parseTrackName(c.name);let u=Le.findNode(e,h.nodeName);const d=Mh[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const f=1;let g=c.values.length/c.times.length;d===Mh.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let v;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(v="CUBICSPLINE",g/=3):c.getInterpolation()===sd?v="STEP":v="LINEAR",r.push({input:this.processAccessor(new Z(c.times,f)),output:this.processAccessor(new Z(c.values,g)),interpolation:v}),a.push({sampler:r.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:r,channels:a}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,s=e.nodes[n.get(t)],o=t.skeleton;if(o===void 0)return null;const a=t.skeleton.bones[0];if(a===void 0)return null;const r=[],l=new Float32Array(o.bones.length*16),c=new ce;for(let u=0;u<o.bones.length;++u)r.push(n.get(o.bones[u])),c.copy(o.boneInverses[u]),c.multiply(t.bindMatrix).toArray(l,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new Z(l,16)),joints:r,skeleton:n.get(a)}),s.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,s=this.nodeMap;e.nodes||(e.nodes=[]);const o={};if(n.trs){const r=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();uo(r,[0,0,0,1])||(o.rotation=r),uo(l,[0,0,0])||(o.translation=l),uo(c,[1,1,1])||(o.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),W_(t.matrix)===!1&&(o.matrix=t.matrix.elements);if(t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o),t.isMesh||t.isLine||t.isPoints){const r=await this.processMeshAsync(t);r!==null&&(o.mesh=r)}else t.isCamera&&(o.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const r=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&r.push(u)}}r.length>0&&(o.children=r)}await this._invokeAllAsync(function(r){r.writeNode&&r.writeNode(t,o)});const a=e.nodes.push(o)-1;return s.set(t,a),a}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);const o=[];for(let a=0,r=t.children.length;a<r;a++){const l=t.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&o.push(c)}}o.length>0&&(s.nodes=o),this.serializeUserData(t,s)}async processObjectsAsync(t){const e=new _a;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});const n=[];for(let s=0;s<t.length;s++)t[s]instanceof _a?await this.processSceneAsync(t[s]):n.push(t[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class Y_{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,s=n.json,o=n.extensionsUsed,a={};t.name&&(a.name=t.name),a.color=t.color.toArray(),a.intensity=t.intensity,t.isDirectionalLight?a.type="directional":t.isPointLight?(a.type="point",t.distance>0&&(a.range=t.distance)):t.isSpotLight&&(a.type="spot",t.distance>0&&(a.range=t.distance),a.spot={},a.spot.innerConeAngle=(1-t.penumbra)*t.angle,a.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),o[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},o[this.name]=!0);const r=s.extensions[this.name].lights;r.push(a),e.extensions=e.extensions||{},e.extensions[this.name]={light:r.length-1}}}class $_{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class q_{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.clearcoatFactor=t.clearcoat,t.clearcoatMap){const a={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(a,t.clearcoatMap),o.clearcoatTexture=a}if(o.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,t.clearcoatRoughnessMap),o.clearcoatRoughnessTexture=a}if(t.clearcoatNormalMap){const a={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(a.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(a,t.clearcoatNormalMap),o.clearcoatNormalTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Z_{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const s=this.writer.extensionsUsed,o={};o.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class j_{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.iridescenceFactor=t.iridescence,t.iridescenceMap){const a={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(a,t.iridescenceMap),o.iridescenceTexture=a}if(o.iridescenceIor=t.iridescenceIOR,o.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const a={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(a,t.iridescenceThicknessMap),o.iridescenceThicknessTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class K_{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.transmissionFactor=t.transmission,t.transmissionMap){const a={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(a,t.transmissionMap),o.transmissionTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Q_{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.thicknessFactor=t.thickness,t.thicknessMap){const a={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(a,t.thicknessMap),o.thicknessTexture=a}t.attenuationDistance!==1/0&&(o.attenuationDistance=t.attenuationDistance),o.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class J_{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const s=this.writer.extensionsUsed,o={};o.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class tx{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(k_)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.specularIntensityMap){const a={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(a,t.specularIntensityMap),o.specularTexture=a}if(t.specularColorMap){const a={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(a,t.specularColorMap),o.specularColorTexture=a}o.specularFactor=t.specularIntensity,o.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class ex{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.sheenRoughnessMap){const a={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(a,t.sheenRoughnessMap),o.sheenRoughnessTexture=a}if(t.sheenColorMap){const a={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(a,t.sheenColorMap),o.sheenColorTexture=a}o.sheenRoughnessFactor=t.sheenRoughness,o.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class nx{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.anisotropyMap){const a={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(a,t.anisotropyMap),o.anisotropyTexture=a}o.anisotropyStrength=t.anisotropy,o.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class ix{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,o={};o.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class sx{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.bumpMap){const a={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(a,t.bumpMap),o.bumpTexture=a}o.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class ox{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,s=t,o=new Float32Array(s.count*3),a=new Float32Array(s.count*4),r=new Float32Array(s.count*3),l=new ce,c=new E,h=new Ye,u=new E;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,h,u),c.toArray(o,f*3),h.toArray(a,f*4),u.toArray(r,f*3);const d={TRANSLATION:n.processAccessor(new Z(o,3)),ROTATION:n.processAccessor(new Z(a,4)),SCALE:n.processAccessor(new Z(r,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Ta.Utils={insertKeyframe:function(i,t){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),o=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n));let r;if(i.times.length===0){s[0]=t;for(let l=0;l<n;l++)o[l]=0;r=0}else if(t<i.times[0]){if(Math.abs(i.times[0]-t)<.001)return 0;s[0]=t,s.set(i.times,1),o.set(a.evaluate(t),0),o.set(i.values,n),r=0}else if(t>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-t)<.001)return i.times.length-1;s[s.length-1]=t,s.set(i.times,0),o.set(i.values,0),o.set(a.evaluate(t),i.values.length),r=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-t)<.001)return l;if(i.times[l]<t&&i.times[l+1]>t){s.set(i.times.slice(0,l+1),0),s[l+1]=t,s.set(i.times.slice(l+1),l+2),o.set(i.values.slice(0,(l+1)*n),0),o.set(a.evaluate(t),(l+1)*n),o.set(i.values.slice((l+1)*n),(l+2)*n),r=l+1;break}}return i.times=s,i.values=o,r},mergeMorphTargetTracks:function(i,t){const e=[],n={},s=i.tracks;for(let o=0;o<s.length;++o){let a=s[o];const r=Le.parseTrackName(a.name),l=Le.findNode(t,r.nodeName);if(r.propertyName!=="morphTargetInfluences"||r.propertyIndex===void 0){e.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(od)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[r.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+r.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const f=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)f[g*c+h]=u.values[g];u.name=(r.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,e.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+h]=d.evaluate(u.times[f]);for(let f=0;f<a.times.length;f++){const g=this.insertKeyframe(u,a.times[f]);u.values[g*c+h]=a.values[f]}}return i.tracks=e,i},toFloat32BufferAttribute:function(i){const t=new Z(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let e=0,n=i.count;e<n;e++)for(let s=0;s<i.itemSize;s++)t.setComponent(e,s,i.getComponent(e,s));return t}};async function ax(i,t){const e=new Ta;i.updateMatrixWorld(!0);const n=[];i.traverse(l=>{l.userData?.excludeFromExport&&l.visible&&(l.visible=!1,n.push(l))});let s;try{s=await new Promise((l,c)=>{e.parse(i,h=>{h instanceof ArrayBuffer?l(h):c(new Error("Expected binary ArrayBuffer from GLTFExporter"))},h=>c(h),{binary:!0,onlyVisible:!0,maxTextureSize:1024})})}finally{for(const l of n)l.visible=!0}const o=new Blob([s],{type:"model/gltf-binary"}),a=URL.createObjectURL(o),r=document.createElement("a");return r.href=a,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(a),5e3),{filename:t,sizeMB:s.byteLength/(1024*1024)}}async function Fu(i,t,e=i.activeLOD){const n=i.activeLOD,s=i.autoLOD;i.autoLOD=!1,i.setActiveLOD(e);try{return await ax(i.rootGroup,`${t}-lod${e}.glb`)}finally{i.setActiveLOD(n),i.autoLOD=s}}async function rx(i,t=i.activeLOD){return Fu(i,"toothless-hidden-world",t)}async function lx(i,t=i.activeLOD){return Fu(i,"light-fury-hidden-world",t)}const da=[{id:"twin-pair",label:"Twin Furies Perch",position:new E(.05,2.75,11.4),target:new E(0,.98,-.12)},{id:"light-fury-hero",label:"Light Fury 3/4",position:new E(-6.85,1.68,3.15),target:new E(-4.42,1,.25)},{id:"light-fury-face",label:"Light Fury Portrait",position:new E(-3.65,1.64,2.38),target:new E(-4.22,1.5,1.55)},{id:"toothless-hero",label:"Toothless 3/4",position:new E(7.15,1.82,3.68),target:new E(4.42,1.06,.55)},{id:"toothless-paws-scales",label:"Scales & Claws Study",position:new E(6.15,.96,2.95),target:new E(4.52,.62,1.25)},{id:"waterfall-islands",label:"Waterfall Double-Isle",position:new E(14.5,8.2,16),target:new E(-56,-1.5,-28)},{id:"sea-arch-drangar",label:"Sea-Arch & Clett",position:new E(28,5.4,2.5),target:new E(54.5,-1.8,20.5)},{id:"crescent-lagoon",label:"Crescent Lagoon",position:new E(24,38,-12),target:new E(84,-6,34)},{id:"archipelago-aerial",label:"Archipelago Panorama",position:new E(18,68,108),target:new E(-4,-4,-24)}];function ln(i){const t=parseFloat(i.min||"0"),e=parseFloat(i.max||"1"),n=parseFloat(i.value||"0"),s=e>t?(n-t)/(e-t)*100:50;i.style.setProperty("--fill-pct",`${Math.max(0,Math.min(100,s)).toFixed(1)}%`)}function cx(i,t,e,n,s,o,a){let r=!1,l=window.innerWidth<=780,c=!0,h=1,u=null;i.classList.toggle("drawer-collapsed",l);const d=t.rig.bones.length+n.rig.bones.length,f=document.createElement("div");f.className="hud-toast",i.appendChild(f);const g=document.createElement("div");g.className="shutter-flash",i.appendChild(g);const v=st=>{f.textContent=st,f.classList.add("visible"),u!==null&&window.clearTimeout(u),u=window.setTimeout(()=>{f.classList.remove("visible")},2200)},m=()=>{g.classList.add("flash"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{g.classList.remove("flash")})})},p=document.createElement("div");p.className="hud-header",p.innerHTML=`
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
  `,i.appendChild(p);const x=p.querySelector("#tel-fps"),w=p.querySelector("#tel-lod"),_=p.querySelector("#btn-cursor-gaze"),A=p.querySelector("#btn-photo"),y=p.querySelector("#btn-fullscreen"),S=p.querySelector("#btn-help"),T=p.querySelector("#btn-toggle-hud"),b=document.createElement("button");b.className="drawer-reopen-btn hud-collapsible",b.title="Open Character & Atmosphere Atelier [Tab]",b.innerHTML='<span>Open Atelier</span><span class="kbd-hint">Tab</span>',i.appendChild(b);const M=st=>{l=st,i.classList.toggle("drawer-collapsed",l)};b.addEventListener("click",()=>M(!1));const P=()=>{r=!r,i.classList.toggle("hud-hidden",r),T.innerHTML=r?'Show UI <span class="kbd-hint">H</span>':'Cinema <span class="kbd-hint">H</span>'};T.addEventListener("click",P);const C=()=>{c=!c,_.classList.toggle("is-active",c),a.onToggleCursorGaze(c),v(c?"Interactive Cursor Gaze enabled":"Sculpted Manual Gaze locked")};_.addEventListener("click",C),A.addEventListener("click",()=>{a.onCaptureSnapshot()});const R=()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})};y.addEventListener("click",R),document.addEventListener("fullscreenchange",()=>{y.classList.toggle("is-active",!!document.fullscreenElement)});const L=document.createElement("div");L.className="help-backdrop",L.innerHTML=`
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
        <div class="help-item"><span>HD Photo Snapshot</span><span class="help-keys"><span class="help-key">P</span></span></div>
        <div class="help-item"><span>Fullscreen / Cinema</span><span class="help-keys"><span class="help-key">F</span><span class="help-key">H</span></span></div>
        <div class="help-item"><span>Reset Any Slider</span><span class="help-keys"><span class="help-key">Double-Click</span></span></div>
      </div>
      <div class="help-footer-tip">Touchscreens: 1-finger drag to orbit &middot; 2-finger pinch &amp; drag to zoom and pan &middot; double-tap to focus</div>
    </div>
  `,i.appendChild(L);const D=st=>{const vt=st??!L.classList.contains("open");L.classList.toggle("open",vt),S.classList.toggle("is-active",vt)};S.addEventListener("click",()=>D()),L.querySelector("#btn-help-close").addEventListener("click",()=>D(!1)),L.addEventListener("click",st=>{st.target===L&&D(!1)});const U=document.createElement("div");U.className="flight-bar hud-collapsible",U.innerHTML=`
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
  `,i.appendChild(U);const z=U.querySelector("#btn-flight-play"),N=U.querySelector("#flight-play-icon"),H=U.querySelector("#flight-play-text"),V=U.querySelector("#btn-flight-reset"),$=U.querySelector("#flight-phase-label"),K=U.querySelector("#flight-time-label"),X=U.querySelector("#flight-scrubber"),G=U.querySelector("#btn-flight-speed"),O=U.querySelector("#btn-flight-cam"),J=U.querySelector("#btn-flight-loop"),lt=Array.from(U.querySelectorAll(".flight-mode-pill"));let j=!1;const Q=()=>{const st=o.getPhaseInfo(),vt=st.isPlaying&&!st.isPaused;U.classList.toggle("playing",vt);const Tt=st.subjectMode==="duet"?"Begin Courtship Flight":st.subjectMode==="light-fury"?"Fly Light Fury":"Fly Toothless";st.isPlaying?st.isPaused?(N.innerHTML="&#9654;",H.textContent="Resume Flight",$.textContent=`${st.phaseLabel} (Paused)`):(N.innerHTML="&#10074;&#10074;",H.textContent="Pause Flight",$.textContent=st.phaseLabel):(N.innerHTML="&#9654;",H.textContent=Tt,$.innerHTML=st.subjectMode==="duet"?"Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown":"Perched Ready &mdash; Solo Takeoff, Sea Soar &amp; Landing"),K.textContent=`${st.elapsedSec.toFixed(1)}s / ${st.durationSec.toFixed(1)}s`,j||(X.value=String(st.progress),ln(X)),O.classList.toggle("active",st.followCamera),J.classList.toggle("active",st.loop),G.classList.toggle("active",h<.99),G.innerHTML=`${h.toFixed(1)}&times;`,lt.forEach(zt=>zt.classList.toggle("active",zt.dataset.fmode===st.subjectMode))};G.addEventListener("click",()=>{h=h>.75?.5:1,a.onFlightSpeedChange(h),Q(),v(h<.75?"0.5× Slow-Motion Wingbeat Study":"1.0× Natural Flight Speed")}),lt.forEach(st=>{st.addEventListener("click",()=>{const vt=st.dataset.fmode;o.setSubjectMode(vt),Q(),Kt()})}),z.addEventListener("click",()=>{o.togglePlayPause(),Q(),Kt()}),V.addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),Q(),Kt()}),X.addEventListener("pointerdown",()=>{j=!0}),window.addEventListener("pointerup",()=>{j=!1}),X.addEventListener("input",()=>{ln(X),o.scrubToProgress(parseFloat(X.value)),e.applyRigState(0),s.applyRigState(0),Q(),Kt()}),O.addEventListener("click",()=>{o.followCamera=!o.followCamera,Q()}),J.addEventListener("click",()=>{o.loop=!o.loop,Q()});const W=document.createElement("div");W.className="camera-bar hud-collapsible";const it=[],St=st=>{const vt=da[st];vt&&(o.isPlaying&&(o.stopAndResetToPerch(),Q(),Kt()),it.forEach((Tt,zt)=>Tt.classList.toggle("active",zt===st)),it[st]?.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"}),vt.id.startsWith("light-fury")?Pt("light-fury"):vt.id.startsWith("toothless")&&Pt("toothless"),a.onSelectCameraBookmark(vt))};da.forEach((st,vt)=>{const Tt=document.createElement("button");Tt.className=`cam-btn${vt===0?" active":""}`,Tt.title=`${st.label} [Hotkey ${vt+1}]`,Tt.innerHTML=`<span class="cam-btn-idx">${vt+1}</span><span>${st.label}</span>`,Tt.addEventListener("click",()=>St(vt)),it.push(Tt),W.appendChild(Tt)}),i.appendChild(W),window.addEventListener("keydown",st=>{const vt=document.activeElement?.tagName;if(!(vt==="INPUT"||vt==="TEXTAREA")){if(st.key==="Escape"&&L.classList.contains("open")){D(!1);return}if(st.key==="?"||st.key==="/"&&st.shiftKey){st.preventDefault(),D();return}if(st.key==="Tab"){st.preventDefault(),M(!l);return}if(st.key==="h"||st.key==="H")P();else if(st.key==="c"||st.key==="C")C();else if(st.key==="p"||st.key==="P")a.onCaptureSnapshot();else if(st.key==="f"||st.key==="F")R();else if(st.code==="Space")st.preventDefault(),o.togglePlayPause(),Q(),Kt();else if(st.key>="1"&&st.key<="9"&&!st.ctrlKey&&!st.metaKey&&!st.altKey){const Tt=parseInt(st.key,10)-1;Tt>=0&&Tt<da.length&&St(Tt)}}});const et=document.createElement("aside");et.className="rig-drawer hud-collapsible",et.innerHTML=`
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
  `,i.appendChild(et),et.querySelector("#btn-collapse-drawer").addEventListener("click",()=>{M(!0)});const k=et.querySelector("#moments-grid"),wt=et.querySelector("#tab-light-fury"),at=et.querySelector("#tab-toothless"),yt=et.querySelector("#panel-light-fury"),dt=et.querySelector("#panel-toothless"),Ut=et.querySelector("#panel-shared-world");function Pt(st){wt.classList.toggle("active",st==="light-fury"),at.classList.toggle("active",st==="toothless"),yt.style.display=st==="light-fury"?"block":"none",dt.style.display=st==="toothless"?"block":"none"}wt.addEventListener("click",()=>Pt("light-fury")),at.addEventListener("click",()=>Pt("toothless"));const B=[];function I(st,vt,Tt=!1){const zt=document.createElement("div");zt.className=`accordion-section${Tt?" open":""}`;const ee=document.createElement("button");ee.className="accordion-header",ee.innerHTML=`<span>${vt}</span><span class="accordion-chevron">&#9662;</span>`;const _e=document.createElement("div");_e.className="accordion-collapse";const Ee=document.createElement("div");Ee.className="accordion-collapse-inner";const Re=document.createElement("div");return Re.className="accordion-body",Ee.appendChild(Re),_e.appendChild(Ee),ee.addEventListener("click",()=>{zt.classList.toggle("open")}),zt.appendChild(ee),zt.appendChild(_e),st.appendChild(zt),Re}function nt(st,vt,Tt,zt,ee,_e,Ee,Re=.01,He=!1){const On=Number(Tt[ee]),Fn=document.createElement("div");Fn.className="control-row",Fn.title="Double-click slider to reset";const Sn=document.createElement("span");Sn.className="control-val";const yi=document.createElement("div");yi.className="control-label-line";const cs=document.createElement("span");cs.textContent=vt,yi.appendChild(cs),yi.appendChild(Sn);const rn=document.createElement("input");rn.type="range",rn.min=String(_e),rn.max=String(Ee),rn.step=String(Re);const hs=()=>{const Wi=Number(Tt[ee]);rn.value=String(Wi),Sn.textContent=Wi.toFixed(2),ln(rn)};hs(),B.push(hs),rn.addEventListener("input",()=>{o.isPlaying&&!o.isPaused&&(o.isPaused=!0,Q());const Wi=parseFloat(rn.value);zt({[ee]:Wi}),Sn.textContent=Wi.toFixed(2),ln(rn),He&&Kt()}),rn.addEventListener("dblclick",()=>{zt({[ee]:On}),hs(),He&&Kt(),v(`Reset ${vt}`)}),Fn.appendChild(yi),Fn.appendChild(rn),st.appendChild(Fn)}function mt(st,vt,Tt,zt,ee){const _e=document.createElement("label");_e.className="toggle-row";const Ee=document.createElement("span");Ee.textContent=vt;const Re=document.createElement("input");Re.type="checkbox";const He=()=>{Re.checked=!!Tt[ee]};He(),B.push(He),Re.addEventListener("change",()=>{zt({[ee]:Re.checked}),Kt()}),_e.appendChild(Ee),_e.appendChild(Re),st.appendChild(_e)}const xt=I(yt,"Light Fury Moods & Expressions",!0),_t=document.createElement("div");_t.className="weather-grid";const Ft=[];jv.forEach((st,vt)=>{const Tt=document.createElement("button");Tt.className=`weather-btn${vt===0?" active":""}`,Tt.innerHTML=`
      <span class="weather-btn-title">${st.label}</span>
      <span class="weather-btn-sub">${st.subtitle}</span>
    `,Tt.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),Q()),Ft.forEach(zt=>zt.classList.remove("active")),Tt.classList.add("active"),s.setState(st.patch),Kt()}),Ft.push(Tt),_t.appendChild(Tt)}),xt.appendChild(_t);const gt=(st,vt,Tt,zt,ee,_e=.01,Ee=!1)=>nt(st,vt,s.state,Re=>s.setState(Re),Tt,zt,ee,_e,Ee),Rt=(st,vt,Tt)=>mt(st,vt,s.state,zt=>s.setState(zt),Tt),ne=I(yt,"I. Bioluminescence, Shimmer & Cloak",!0);gt(ne,"Hidden World Neon Bioluminescence","biolumGlow",0,1),gt(ne,"Thermal-Mirror Optical Cloak","thermalCloak",0,1),gt(ne,"Stardust Glimmer & Opal Sheen","iridescentShimmer",0,1),gt(ne,"Radiant Partly-Glowing Skin","radiantGlow",0,1),gt(ne,"Underwing Rose & Ice Countershade","pastelTint",0,1),gt(ne,"Orchid-Cyan Plasma Charge","plasmaGlow",0,1);const Et=I(yt,"II. Gaze, Ears & Expression",!1);gt(Et,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),gt(Et,"Curious Head-Tilt (Roll)","headRoll",-1,1),gt(Et,"Head Yaw (Swan-Neck Coupled)","headYaw",-1,1),gt(Et,"Head Pitch","headPitch",-1,1),gt(Et,"Eye Gaze Horizontal","eyeYaw",-1,1),gt(Et,"Eye Gaze Vertical","eyePitch",-1,1),gt(Et,"Affectionate Squint-Smile","squint",0,1),gt(Et,"Almond Eyelid Blink","blink",0,1),gt(Et,"Rounded Ear-Nubs Perk","earPerk",0,1),gt(Et,"Ear Asymmetry","earAsymmetry",-1,1),gt(Et,"Temple Cheek Nubs","cheekNubFlare",0,1);const Dt=I(yt,"III. Smile, Retractable Fangs & Tongue",!1);gt(Dt,"Jaw Open","jawOpen",0,1),gt(Dt,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),gt(Dt,"Pink Tongue Extend","tongueExtend",0,1),gt(Dt,"Tongue Curl","tongueCurl",-1,1);const te=document.createElement("button");te.className="action-btn secondary",te.textContent="Toggle Soft Gums vs. Strike Fangs";let ie=!1;te.addEventListener("click",()=>{ie=!ie,ie?s.setState({jawOpen:.68,teethExtension:1,pupilDilation:.1,squint:.36,earPerk:.14}):s.setState({jawOpen:.26,teethExtension:0,pupilDilation:.92,squint:.24,earPerk:.9}),Kt()}),Dt.appendChild(te);const Gt=I(yt,"IV. Scalloped Wings, Veil & Sail",!1);gt(Gt,"Coy Wing-Veil Drape","coyWingVeil",0,1),gt(Gt,"Wing Unfurl (Cape ↔ 7.80m Span)","wingUnfurl",0,1),gt(Gt,"Wing Flap Elevation","wingFlap",-1,1),gt(Gt,"Wing Forward/Dive Sweep","wingSweep",-1,1),gt(Gt,"Airfoil Camber","wingCamber",0,1),gt(Gt,"Pelvic Glide Flukes","pelvicFinFlare",0,1),gt(Gt,"Continuous Dorsal Sail Flex","dorsalSailFlex",0,1);const fe=I(yt,"V. Symmetrical Heart-Tail Flukes",!1);Rt(fe,"Sync Heart-Tail Lobes","syncHeartTailFlukes"),gt(fe,"Right Heart-Lobe Fold","rightHeartFinFlare",-1,1,.01,!0),gt(fe,"Left Heart-Lobe Fold","leftHeartFinFlare",-1,1,.01,!0),gt(fe,"Tail Horizontal Sweep","tailYaw",-1,1),gt(fe,"Tail Vertical Lift","tailPitch",-1,1),gt(fe,"Feline Tail Curl","tailCurl",-1,1);const ae=I(yt,"VI. Stance, 4-Paw IK & Flight Legs",!1);gt(ae,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),gt(ae,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),gt(ae,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),gt(ae,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),gt(ae,"Swan Neck Arch","neckArch",-1,1),gt(ae,"Neck Turn","neckYaw",-1,1),gt(ae,"Spine Arch","spineArch",-1,1),gt(ae,"Spine Twist","spineTwist",-1,1),Rt(ae,"Living Idle (Purr & Natural Blinks)","subtleBreathing");const be=I(dt,"Toothless Moods & Expressions",!0),tt=document.createElement("div");tt.className="weather-grid";const kt=[];Vv.forEach((st,vt)=>{const Tt=document.createElement("button");Tt.className=`weather-btn${vt===0?" active":""}`,Tt.innerHTML=`
      <span class="weather-btn-title">${st.label}</span>
      <span class="weather-btn-sub">${st.subtitle}</span>
    `,Tt.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),Q()),kt.forEach(zt=>zt.classList.remove("active")),Tt.classList.add("active"),e.setState(st.patch),Kt()}),kt.push(Tt),tt.appendChild(Tt)}),be.appendChild(tt);const ct=(st,vt,Tt,zt,ee,_e=.01,Ee=!1)=>nt(st,vt,e.state,Re=>e.setState(Re),Tt,zt,ee,_e,Ee),Ct=(st,vt,Tt)=>mt(st,vt,e.state,zt=>e.setState(zt),Tt),Vt=I(dt,"I. Alpha Bioluminescence & Lightning",!0);ct(Vt,"Alpha Blue Plasma Glow","alphaGlow",0,1),ct(Vt,"Cavern Bioluminescent Markings","biolumGlow",0,1),ct(Vt,"Lightning-Cloak Mirror Arcs","lightningCloak",0,1);const It=I(dt,"II. Head, Ear-Plates & Emerald Eyes",!1);ct(It,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),ct(It,"Head Yaw (Cervical Coupled)","headYaw",-1,1),ct(It,"Head Pitch","headPitch",-1,1),ct(It,"Curious Head Roll","headRoll",-1,1),ct(It,"Eye Gaze Horizontal","eyeYaw",-1,1),ct(It,"Eye Gaze Vertical","eyePitch",-1,1),ct(It,"Palpebral Eyelid Blink","blink",0,1),ct(It,"Focus Squint","squint",0,1),ct(It,"Primary Ear-Plates Perk","earPerk",0,1),ct(It,"Ear-Plate Asymmetry","earAsymmetry",-1,1),ct(It,"Secondary Cheek Nubs","cheekNubFlare",0,1);const re=I(dt,"III. Jaw, Retractable Teeth & Tongue",!1);ct(re,"Jaw Open","jawOpen",0,1),ct(re,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),ct(re,"Tongue Extend","tongueExtend",0,1),ct(re,"Tongue Curl","tongueCurl",-1,1);const Ce=document.createElement("button");Ce.className="action-btn secondary",Ce.textContent='Toggle "Toothless" Gums vs. Fangs';let $e=!1;Ce.addEventListener("click",()=>{$e=!$e,$e?e.setState({jawOpen:.72,teethExtension:1,pupilDilation:.14,squint:.32}):e.setState({jawOpen:.36,teethExtension:0,pupilDilation:.85,squint:0}),Kt()}),re.appendChild(Ce);const ve=I(dt,"IV. Wings, Fins & Flush V-Spines",!1);ct(ve,"Wing Unfurl (Cape ↔ 8.56m Span)","wingUnfurl",0,1),ct(ve,"Wing Flap Elevation","wingFlap",-1,1),ct(ve,"Wing Forward/Dive Sweep","wingSweep",-1,1),ct(ve,"Phalangeal Airfoil Camber","wingCamber",0,1),ct(ve,"Pelvic 3-Spar Glide Fins","pelvicFinFlare",0,1),ct(ve,"Dorsal V-Spine Split","dorsalSpineSplit",0,1);const We=I(dt,"V. Prosthetic Tail & Mechanics",!1);Ct(We,"Auto-Sync Left Prosthetic Linkage","autoSyncProstheticTail"),ct(We,"Left Prosthetic Fin Fold","leftProstheticFinFlare",-1,1,.01,!0),ct(We,"Right Biological Fin Fold","rightTailFinFlare",-1,1,.01,!0),ct(We,"Tail Horizontal Sweep","tailYaw",-1,1),ct(We,"Tail Vertical Lift","tailPitch",-1,1),ct(We,"Distal Tail Whip Curl","tailCurl",-1,1);const Xe=I(dt,"VI. Stance, 4-Paw IK & Flight Legs",!1);ct(Xe,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),ct(Xe,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),ct(Xe,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),ct(Xe,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),ct(Xe,"Neck Arch","neckArch",-1,1),ct(Xe,"Neck Turn","neckYaw",-1,1),ct(Xe,"Spine Arch","spineArch",-1,1),ct(Xe,"Spine Twist","spineTwist",-1,1),Ct(Xe,"Living Idle (Breath, Blinks & Twitches)","subtleBreathing");const qe=I(Ut,"Archipelago, Sky & North Sea",!0),Ln=document.createElement("div");Ln.className="control-label-line";const nn=Ds[a.initialWeatherPreset]??Ds["golden-hour"];Ln.innerHTML=`<span>Coastal Atmosphere</span><span class="control-val" id="weather-preset-desc">${nn.subtitle}</span>`,qe.appendChild(Ln);const Kn=Ln.querySelector("#weather-preset-desc"),xi=document.createElement("div");xi.className="weather-grid";const Qn=[],hn={...lo},Mi=[],yn=[],bn=document.createElement("div");bn.className="control-row",bn.innerHTML=`
    <div class="control-label-line">
      <span>Sun / Moon Elevation</span>
      <span class="control-val" id="elev-val">${nn.sunElevationDeg.toFixed(1)}&deg;</span>
    </div>
    <input type="range" id="elev-slider" min="2" max="55" step="0.5" value="${nn.sunElevationDeg}" />
  `;const un=bn.querySelector("#elev-slider"),In=bn.querySelector("#elev-val");ln(un),un.addEventListener("input",()=>{const st=parseFloat(un.value);In.textContent=`${st.toFixed(1)}°`,ln(un),a.onSunElevationChange(st)});const Dn=document.createElement("div");Dn.className="control-row";const wi=st=>Math.min(1,Math.max(0,(st-6e-4)/.0044)),ls=st=>6e-4+st*.0044,Vi=wi(nn.mistDensity);Dn.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Mist &amp; Horizon Veil</span>
      <span class="control-val" id="mist-val">${Vi.toFixed(2)}</span>
    </div>
    <input type="range" id="mist-slider" min="0" max="1" step="0.01" value="${Vi.toFixed(2)}" />
  `;const Jn=Dn.querySelector("#mist-slider"),F=Dn.querySelector("#mist-val");ln(Jn),Jn.addEventListener("input",()=>{const st=parseFloat(Jn.value);F.textContent=st.toFixed(2),ln(Jn),a.onMistDensityChange(ls(st))});const ot=nn.rainIntensity,ut=document.createElement("div");ut.className="control-row",ut.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Rain &amp; Splash Physics</span>
      <span class="control-val" id="rain-val">${ot.toFixed(2)}</span>
    </div>
    <input type="range" id="rain-slider" min="0" max="1" step="0.01" value="${ot.toFixed(2)}" />
  `;const pt=ut.querySelector("#rain-slider"),rt=ut.querySelector("#rain-val");ln(pt),pt.addEventListener("input",()=>{const st=parseFloat(pt.value);rt.textContent=st.toFixed(2),ln(pt),a.onRainIntensityChange(st)});let Lt=null;const Ot=st=>{const vt=Ds[st];if(!vt)return;Qn.forEach(({id:ee,btn:_e})=>_e.classList.toggle("active",ee===st)),Kn.textContent=vt.subtitle,un.value=String(vt.sunElevationDeg),In.textContent=`${vt.sunElevationDeg.toFixed(1)}°`,ln(un);const Tt=wi(vt.mistDensity);Jn.value=Tt.toFixed(2),F.textContent=Tt.toFixed(2),ln(Jn),pt.value=vt.rainIntensity.toFixed(2),rt.textContent=vt.rainIntensity.toFixed(2),ln(pt),a.onSelectWeatherPreset(vt.id);let zt=null;vt.id==="stormy-squall"?zt={idx:3,desc:"Storm Gale",params:{waveAmplitude:2.15,waveSpeed:1.85,seaChoppiness:.96}}:vt.id==="starlit-night"||vt.id==="dawn-dusk"?zt={idx:0,desc:"Calm Fjord",params:{waveAmplitude:.34,waveSpeed:.72,seaChoppiness:.24}}:zt={idx:1,desc:"Nordic Swell",params:{...lo}},zt&&(yn.forEach((ee,_e)=>ee.classList.toggle("active",_e===zt.idx)),Lt&&(Lt.textContent=zt.desc),Object.assign(hn,zt.params),Mi.forEach(ee=>ee()),a.onOceanParamsChange(zt.params))};Object.values(Ds).forEach(st=>{const vt=document.createElement("button");vt.className=`weather-btn${st.id===a.initialWeatherPreset?" active":""}`,vt.innerHTML=`
      <span class="weather-btn-title">${st.label}</span>
      <span class="weather-btn-sub">${st.subtitle}</span>
    `,vt.addEventListener("click",()=>{Xt.forEach(Tt=>Tt.classList.remove("active")),Ot(st.id)}),Qn.push({id:st.id,btn:vt}),xi.appendChild(vt)}),qe.appendChild(xi),qe.appendChild(bn),qe.appendChild(Dn),qe.appendChild(ut);const Xt=[];[{label:"Golden Dusk",toast:"Scene Moment — Golden Dusk Courtship",weather:"golden-hour",lfPatch:{biolumGlow:.12,thermalCloak:0,iridescentShimmer:.68,radiantGlow:.3,plasmaGlow:0},nfPatch:{alphaGlow:0,biolumGlow:.08,lightningCloak:0}},{label:"Biolum Night",toast:"Scene Moment — Hidden World Bioluminescence",weather:"starlit-night",lfPatch:{biolumGlow:.96,thermalCloak:0,iridescentShimmer:.85,radiantGlow:.72,plasmaGlow:.58},nfPatch:{alphaGlow:.92,biolumGlow:.95,lightningCloak:.24}},{label:"Mirror Cloak",toast:"Scene Moment — Light Fury Optical Cloak",weather:"dawn-dusk",lfPatch:{thermalCloak:.88,iridescentShimmer:.96,biolumGlow:.42,plasmaGlow:.32},nfPatch:{alphaGlow:.18,biolumGlow:.22,lightningCloak:0}},{label:"Storm Gale",toast:"Scene Moment — North Sea Lightning Squall",weather:"stormy-squall",lfPatch:{biolumGlow:.54,thermalCloak:0,plasmaGlow:.65,wingUnfurl:.58},nfPatch:{alphaGlow:.86,biolumGlow:.78,lightningCloak:.88,wingUnfurl:.62}}].forEach((st,vt)=>{const Tt=document.createElement("button");Tt.className=`moment-chip${vt===0?" active":""}`,Tt.textContent=st.label,Tt.addEventListener("click",()=>{Xt.forEach((zt,ee)=>zt.classList.toggle("active",ee===vt)),Ot(st.weather),s.setState(st.lfPatch),e.setState(st.nfPatch),Kt(),v(st.toast)}),Xt.push(Tt),k.appendChild(Tt)});const se=document.createElement("div");se.className="control-label-line",se.style.marginTop="11px",se.innerHTML='<span>Irregular North Sea Swells</span><span class="control-val" id="sea-preset-desc">Nordic Swell</span>',qe.appendChild(se);const le=se.querySelector("#sea-preset-desc");Lt=le;const Jt=document.createElement("div");Jt.className="segmented-row";const Ae=[{label:"Quiet",desc:"Glassy Fjord",params:{waveAmplitude:.14,waveSpeed:.5,seaChoppiness:.06}},{label:"Swell",desc:"Nordic Swell",params:{...lo}},{label:"Rough",desc:"Crossed Sea",params:{waveAmplitude:1.65,waveSpeed:1.45,seaChoppiness:.82}},{label:"Storm",desc:"Storm Gale",params:{waveAmplitude:2.3,waveSpeed:1.95,seaChoppiness:1}}];function Se(st,vt,Tt,zt,ee=.01){const _e=lo[vt],Ee=document.createElement("div");Ee.className="control-row",Ee.title="Double-click slider to reset",Ee.innerHTML=`
      <div class="control-label-line">
        <span>${st}</span>
        <span class="control-val">${hn[vt].toFixed(2)}</span>
      </div>
      <input type="range" min="${Tt}" max="${zt}" step="${ee}" value="${hn[vt]}" />
    `;const Re=Ee.querySelector(".control-val"),He=Ee.querySelector("input");ln(He),Mi.push(()=>{He.value=String(hn[vt]),Re.textContent=hn[vt].toFixed(2),ln(He)}),He.addEventListener("input",()=>{const On=parseFloat(He.value);hn[vt]=On,Re.textContent=On.toFixed(2),ln(He),yn.forEach(Fn=>Fn.classList.remove("active")),le.textContent="Custom Swell",a.onOceanParamsChange({[vt]:On})}),He.addEventListener("dblclick",()=>{hn[vt]=_e,He.value=String(_e),Re.textContent=_e.toFixed(2),ln(He),a.onOceanParamsChange({[vt]:_e}),v(`Reset ${st}`)}),qe.appendChild(Ee)}Ae.forEach((st,vt)=>{const Tt=document.createElement("button");Tt.className=`seg-btn${vt===1?" active":""}`,Tt.textContent=st.label,Tt.addEventListener("click",()=>{yn.forEach(zt=>zt.classList.remove("active")),Tt.classList.add("active"),le.textContent=st.desc,Object.assign(hn,st.params),Mi.forEach(zt=>zt()),a.onOceanParamsChange(st.params)}),yn.push(Tt),Jt.appendChild(Tt)}),qe.appendChild(Jt),Se("Swell Group Height","waveAmplitude",.05,2.5,.01),Se("Current & Swell Velocity","waveSpeed",.15,2.5,.01),Se("Cross-Chop & Whitecap Foam","seaChoppiness",0,1,.01);const Y=document.createElement("div");Y.className="control-label-line",Y.style.marginTop="11px",Y.innerHTML='<span>Mesh Level-of-Detail</span><span class="control-val" id="lod-mode-label">LOD0 Hero</span>',qe.appendChild(Y);const ht=Y.querySelector("#lod-mode-label"),bt=document.createElement("div");bt.className="segmented-row";const At=[{label:"LOD0",mode:"0",desc:"LOD0 Hero"},{label:"LOD1",mode:"1",desc:"LOD1 Mid"},{label:"LOD2",mode:"2",desc:"LOD2 Far"},{label:"Auto",mode:"auto",desc:"Auto Distance"}],Nt=[];At.forEach((st,vt)=>{const Tt=document.createElement("button");Tt.className=`seg-btn${vt===0?" active":""}`,Tt.textContent=st.label,Tt.addEventListener("click",()=>{if(Nt.forEach(zt=>zt.classList.remove("active")),Tt.classList.add("active"),ht.textContent=st.desc,st.mode==="auto")t.autoLOD=!0,n.autoLOD=!0;else{const zt=Number(st.mode);t.autoLOD=!1,n.autoLOD=!1,t.setActiveLOD(zt),n.setActiveLOD(zt)}}),Nt.push(Tt),bt.appendChild(Tt)}),qe.appendChild(bt);const Mt=document.createElement("div");Mt.className="export-btn-grid";const Bt=document.createElement("button");Bt.className="action-btn",Bt.textContent="Light Fury .GLB";const Yt=document.createElement("button");Yt.className="action-btn",Yt.textContent="Toothless .GLB",Mt.appendChild(Bt),Mt.appendChild(Yt);const jt=document.createElement("div");jt.className="export-status";const Ie=async st=>{Bt.disabled=!0,Yt.disabled=!0,jt.style.color="",jt.textContent="Packaging binary .GLB asset…";try{const vt=st==="light-fury"?await lx(n,n.activeLOD):await rx(t,t.activeLOD);jt.textContent=`Saved ${vt.filename} (${vt.sizeMB.toFixed(2)} MB)`,v(`Exported ${vt.filename}`)}catch(vt){jt.style.color="#f09898",jt.textContent=`Export failed: ${vt.message}`}finally{Bt.disabled=!1,Yt.disabled=!1}};Bt.addEventListener("click",()=>Ie("light-fury")),Yt.addEventListener("click",()=>Ie("toothless")),qe.appendChild(Mt),qe.appendChild(jt);function Kt(){for(const st of B)st()}return et.querySelector("#btn-reset-pose").addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),Ft.forEach((st,vt)=>st.classList.toggle("active",vt===0)),kt.forEach((st,vt)=>st.classList.toggle("active",vt===0)),Xt.forEach((st,vt)=>st.classList.toggle("active",vt===0)),Q(),Kt(),v("Reset Twin Furies to Hero Perch")}),Q(),{updateTelemetry(st,vt){x.innerHTML=`<strong>${Math.round(st)}</strong> FPS`;const Tt=t.lodStats[vt].triangles+n.lodStats[vt].triangles;w.innerHTML=`<strong>LOD${vt}</strong> &middot; ${Tt.toLocaleString()} tris`},updateFlightUI:Q,syncControlsFromRig:Kt,showToast:v,triggerShutterFlash:m,clearActiveCameraBookmark(){it.forEach(st=>st.classList.remove("active"))}}}async function hx(){const i=U_(),t=document.getElementById("canvas-container"),e=document.getElementById("hud-root");await i.advanceTo(14,"Initializing HDR WebGL2 post-processing pipeline…");const n=new f1({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=Th,n.toneMapping=fl,n.toneMappingExposure=1.14,t.appendChild(n.domElement);const s=new _a,o=new Un(42,window.innerWidth/window.innerHeight,.12,9500);let a=da[0];o.position.copy(a.position);const r=new g1(o,n.domElement);r.target.copy(a.target),r.enableDamping=!0,r.dampingFactor=.065,r.rotateSpeed=.78,r.panSpeed=.85,r.zoomSpeed=.92,r.minDistance=.34,r.maxDistance=280,r.maxPolarAngle=Math.PI*.56,r.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},r.update();const l=new zn(window.innerWidth*n.getPixelRatio(),window.innerHeight*n.getPixelRatio(),{type:ni,samples:4}),c=new F1(n,l);c.addPass(new N1(s,o));const h=new $s(new $t(window.innerWidth,window.innerHeight),.26,.52,1.04);h.materialHighPassFilter.fragmentShader=`
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
  `,h.materialHighPassFilter.needsUpdate=!0,c.addPass(h);const u=new z1;u.material.fragmentShader=u.material.fragmentShader.replace("gl_FragColor = texture2D( tDiffuse, vUv );",`gl_FragColor = texture2D( tDiffuse, vUv );
     gl_FragColor.r = !(gl_FragColor.r >= 0.0) ? 0.0 : (!(gl_FragColor.r <= 65000.0) ? 32.0 : min(gl_FragColor.r, 32.0));
     gl_FragColor.g = !(gl_FragColor.g >= 0.0) ? 0.0 : (!(gl_FragColor.g <= 65000.0) ? 32.0 : min(gl_FragColor.g, 32.0));
     gl_FragColor.b = !(gl_FragColor.b >= 0.0) ? 0.0 : (!(gl_FragColor.b <= 65000.0) ? 32.0 : min(gl_FragColor.b, 32.0));
     gl_FragColor.a = 1.0;`),u.material.needsUpdate=!0,c.addPass(u),await i.advanceTo(34,"Sculpting Nordic archipelago ridges, sea-arches & North Sea swells…");const d="golden-hour",f=xv(n,s,d),g=Hv(f.sharedUniforms);s.add(g.group),await i.advanceTo(58,"Forging Night Fury armor scutes, flush dorsal spines & 117-bone rig…");const v=gv();v.rootGroup.position.copy(Gn.position),v.rootGroup.rotation.set(0,Gn.yaw,0),s.add(v.rootGroup),v.rootGroup.updateMatrixWorld(!0);const m=new $v(v);await i.advanceTo(82,"Weaving Light Fury pearl luminescence, mirror cloak & 111-bone rig…");const p=N_();p.rootGroup.position.copy(Xn.position),p.rootGroup.rotation.set(0,Xn.yaw,0),s.add(p.rootGroup),p.rootGroup.updateMatrixWorld(!0);const x=new e_(p);await i.advanceTo(94,"Compiling shaders & calibrating twin courtship flight splines…");const w=new ns(v,m,p,x);let _=null,A=1,y=!0,S=!1;r.addEventListener("start",()=>{_=null});const T=cx(e,v,m,p,x,w,{initialWeatherPreset:d,onSelectCameraBookmark(at){a=at,_={goalPos:at.position.clone(),goalTarget:at.target.clone()}},onFlightResetCamera(){_={goalPos:a.position.clone(),goalTarget:a.target.clone()}},onFlightSpeedChange(at){A=at},onToggleCursorGaze(at){y=at},onCaptureSnapshot(){S=!0},onSelectWeatherPreset(at){f.applyPreset(at,n,s)},onSunElevationChange(at){f.setSunElevation(at,n,s)},onMistDensityChange(at){f.setMistDensity(at)},onRainIntensityChange(at){f.setRainIntensity(at)},onOceanParamsChange(at){g.ocean.setOceanParams(at)}}),b=new Set,M=new E,P=new E,C=new E,R=new E;window.addEventListener("keydown",at=>{const yt=document.activeElement?.tagName;yt==="INPUT"||yt==="TEXTAREA"||b.add(at.code)}),window.addEventListener("keyup",at=>{b.delete(at.code)}),window.addEventListener("blur",()=>{b.clear()});const L=new Pp,D=new $t;n.domElement.addEventListener("dblclick",at=>{if(w.isPlaying)return;const yt=n.domElement.getBoundingClientRect();D.x=(at.clientX-yt.left)/yt.width*2-1,D.y=-((at.clientY-yt.top)/yt.height)*2+1,L.setFromCamera(D,o);const dt=[p.rootGroup,v.rootGroup,g.group],Pt=L.intersectObjects(dt,!0).find(Rt=>Rt.distance<650&&!(Rt.object instanceof Rs)&&!Rt.object.userData?.excludeFromExport);if(!Pt)return;const B=Pt.point.clone();let I=!1,nt=Pt.object,mt="Coastal Landform";for(;nt;){if(nt===p.rootGroup){I=!0,mt="Light Fury";break}if(nt===v.rootGroup){I=!0,mt="Toothless";break}if(nt.name.startsWith("FaroeseHeadlandSeaArch")){mt="Headland Sea-Arch";break}if(nt.name==="TabularFaroeseSeaStacks"){mt="Tabular Sea-Stack";break}if(nt.name==="WestWaterfallDoubleIsland"){mt="Waterfall Double-Island";break}if(nt.name==="StarboardCrescentLagoonAtoll"){mt="Crescent Lagoon";break}nt=nt.parent}const xt=o.position.clone().sub(B).normalize(),_t=o.position.distanceTo(B),Ft=I?q.clamp(_t*.6,2.6,7.5):q.clamp(_t*.55,10,68),gt=B.clone().addScaledVector(xt,Ft);gt.y=Math.max(gt.y,ei(gt.x,gt.z)+1.2,-9.2),T.clearActiveCameraBookmark(),_={goalPos:gt,goalTarget:B},T.showToast(`Focused on ${mt}`)});const U=new $t(0,0);let z=-10,N=!1,H=0,V=0,$=0;window.addEventListener("pointerdown",at=>{at.target===n.domElement&&(N=!0)}),window.addEventListener("pointerup",()=>{N=!1}),window.addEventListener("pointermove",at=>{N||(U.x=at.clientX/Math.max(1,window.innerWidth)*2-1,U.y=-(at.clientY/Math.max(1,window.innerHeight)*2+1),z=performance.now()*.001)});const K=v.rig.boneMap.get("head"),X=v.rig.boneMap.get("neck_03"),G=v.rig.boneMap.get("eye_L"),O=v.rig.boneMap.get("eye_R"),J=p.rig.boneMap.get("head"),lt=p.rig.boneMap.get("neck_03"),j=p.rig.boneMap.get("eye_L"),Q=p.rig.boneMap.get("eye_R");window.addEventListener("resize",()=>{const at=window.innerWidth,yt=window.innerHeight;o.aspect=at/yt,o.updateProjectionMatrix(),n.setSize(at,yt),c.setSize(at,yt),h.resolution.set(at,yt)}),m.update(.016),x.update(.016),f.update(0,new E(0,1.15,.35),o.position),g.update(0,o.position),c.render();const W=new su;let it=0,St=0,et=60,k=!1;function wt(){requestAnimationFrame(wt);const at=Math.min(W.getDelta(),.05),yt=W.elapsedTime,dt=w.isPlaying,Ut=w.update(at*A,o,r.target);if(r.maxPolarAngle=Ut.isAirborne?Math.PI*.84:Math.PI*.56,k&&!w.isPlaying&&(_={goalPos:a.position.clone(),goalTarget:a.target.clone()},T.updateFlightUI(),T.syncControlsFromRig()),k=w.isPlaying,dt&&T.updateFlightUI(),R.set(0,0,0),!w.isPlaying||!w.followCamera){const gt=(b.has("KeyW")||b.has("ArrowUp")?1:0)-(b.has("KeyS")||b.has("ArrowDown")?1:0),Rt=(b.has("KeyD")||b.has("ArrowRight")?1:0)-(b.has("KeyA")||b.has("ArrowLeft")?1:0),ne=(b.has("KeyE")?1:0)-(b.has("KeyQ")?1:0);if(gt!==0||Rt!==0||ne!==0){_=null,o.getWorldDirection(P),C.crossVectors(P,o.up).normalize(),R.addScaledVector(P,gt).addScaledVector(C,Rt),R.y+=ne*.85,R.lengthSq()>1e-5&&R.normalize();const Et=o.position.distanceTo(r.target),Dt=q.clamp(Et*.85,6.5,34),te=b.has("ShiftLeft")||b.has("ShiftRight")?2.4:1;R.multiplyScalar(Dt*te)}}if(M.lerp(R,1-Math.exp(-9*at)),M.lengthSq()>1e-4&&(o.position.addScaledVector(M,at),r.target.addScaledVector(M,at)),_&&!w.isPlaying){const gt=1-Math.exp(-5.5*at);o.position.lerp(_.goalPos,gt),r.target.lerp(_.goalTarget,gt),o.position.distanceTo(_.goalPos)<.012&&r.target.distanceTo(_.goalTarget)<.012&&(_=null)}r.update();const Pt=ei(o.position.x,o.position.z),B=Math.max(-9.8,Pt+.55);o.position.y<B&&(o.position.y=B),m.update(at),x.update(at);const nt=performance.now()*.001-z<4&&!N,mt=o.position.distanceTo(new E(0,1.1,0))<26,xt=y&&!w.isPlaying&&nt&&mt?1:0;if($+=(xt-$)*(1-Math.exp(-4.2*at)),H+=(U.x-H)*(1-Math.exp(-5.5*at)),V+=(U.y-V)*(1-Math.exp(-5.5*at)),$>.002){const gt=H*.22*$,Rt=-V*.14*$,ne=-H*.07*$,Et=H*.14*$,Dt=-V*.1*$;K&&(K.rotation.y+=gt*.72,K.rotation.x+=Rt*.75,K.rotation.z+=ne),X&&(X.rotation.y+=gt*.32,X.rotation.x+=Rt*.25),G&&O&&(G.rotation.y+=Et,O.rotation.y+=Et,G.rotation.x+=Dt,O.rotation.x+=Dt),J&&(J.rotation.y+=gt*.78,J.rotation.x+=Rt*.78,J.rotation.z+=ne*1.15),lt&&(lt.rotation.y+=gt*.36,lt.rotation.x+=Rt*.28),j&&Q&&(j.rotation.y+=Et,Q.rotation.y+=Et,j.rotation.x+=Dt,Q.rotation.x+=Dt)}const _t=o.position.distanceTo(Ut.worldFocus),Ft=v.updateAutoLOD(_t);if(p.updateAutoLOD(_t),f.update(yt,Ut.worldFocus,o.position),g.update(yt,o.position),it+=at,St++,it>=.4){const gt=St/it;et=et*.65+gt*.35,T.updateTelemetry(et,Ft),it=0,St=0}if(c.render(),S){S=!1;try{const gt=n.domElement.toDataURL("image/png"),Rt=document.createElement("a"),ne=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");Rt.download=`twin-furies-atelier-${ne}.png`,Rt.href=gt,Rt.click(),T.triggerShutterFlash(),T.showToast("Saved UI-Free HD Snapshot (.PNG)")}catch{T.showToast("Snapshot unavailable on this device")}}}wt(),await i.completeAndDissolve(e)}hx();
