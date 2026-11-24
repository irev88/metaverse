(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const er="174",oo={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Md=0,xc=1,wd=2,iu=1,su=2,Ii=3,ls=0,Fn=1,en=2,ki=0,ao=1,Xo=2,_c=3,Mc=4,yd=5,Ts=100,bd=101,Sd=102,Ad=103,Td=104,Ed=200,Cd=201,Pd=202,Rd=203,el=204,nl=205,Ld=206,Id=207,Fd=208,Dd=209,Nd=210,Ud=211,kd=212,zd=213,Bd=214,il=0,sl=1,ol=2,zi=3,al=4,rl=5,ll=6,cl=7,ou=0,Od=1,Hd=2,os=0,au=1,ru=2,lu=3,Xl=4,cu=5,hu=6,uu=7,wc="attached",Wd="detached",du=300,fo=301,mo=302,hl=303,ul=304,nr=306,Ai=1e3,es=1001,Wa=1002,zn=1003,pu=1004,zo=1005,gi=1006,Da=1007,ns=1008,Hi=1009,fu=1010,mu=1011,Yo=1012,Yl=1013,Ls=1014,vi=1015,_i=1016,$l=1017,ql=1018,go=1020,gu=35902,vu=1021,xu=1022,$n=1023,_u=1024,Mu=1025,ro=1026,vo=1027,Zl=1028,jl=1029,wu=1030,Kl=1031,Ql=1033,Na=33776,Ua=33777,ka=33778,za=33779,dl=35840,pl=35841,fl=35842,ml=35843,gl=36196,vl=37492,xl=37496,_l=37808,Ml=37809,wl=37810,yl=37811,bl=37812,Sl=37813,Al=37814,Tl=37815,El=37816,Cl=37817,Pl=37818,Rl=37819,Ll=37820,Il=37821,Ba=36492,Fl=36494,Dl=36495,yu=36283,Nl=36284,Ul=36285,kl=36286,Vd=2300,Gd=2301,Xd=3200,Yd=3201,bu=0,$d=1,ii="",Mn="srgb",xo="srgb-linear",Va="linear",ke="srgb",ks=7680,yc=519,qd=512,Zd=513,jd=514,Su=515,Kd=516,Qd=517,Jd=518,tp=519,bc=35044,Sc="300 es",Ni=2e3,Ga=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ac=1234567;const Wo=Math.PI/180,$o=180/Math.PI;function Fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Jl(i,t){return(i%t+t)%t}function ep(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function np(i,t,e){return i!==t?(e-i)/(t-i):0}function Vo(i,t,e){return(1-e)*i+e*t}function ip(i,t,e,n){return Vo(i,t,1-Math.exp(-e*n))}function sp(i,t=1){return t-Math.abs(Jl(i,t*2)-t)}function op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lp(i,t){return i+Math.random()*(t-i)}function cp(i){return i*(.5-Math.random())}function hp(i){i!==void 0&&(Ac=i);let t=Ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function up(i){return i*Wo}function dp(i){return i*$o}function pp(i){return(i&i-1)===0&&i!==0}function fp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gp(i,t,e,n,s){const o=Math.cos,a=Math.sin,r=o(e/2),l=a(e/2),c=o((t+n)/2),h=a((t+n)/2),u=o((t-n)/2),d=a((t-n)/2),m=o((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(r*h,l*u,l*d,r*c);break;case"YZY":i.set(l*d,r*h,l*u,r*c);break;case"ZXZ":i.set(l*u,l*d,r*h,r*c);break;case"XZX":i.set(r*h,l*v,l*m,r*c);break;case"YXY":i.set(l*m,r*h,l*v,r*c);break;case"ZYZ":i.set(l*v,l*m,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function eo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const X={DEG2RAD:Wo,RAD2DEG:$o,generateUUID:Fs,clamp:Te,euclideanModulo:Jl,mapLinear:ep,inverseLerp:np,lerp:Vo,damp:ip,pingpong:sp,smoothstep:op,smootherstep:ap,randInt:rp,randFloat:lp,randFloatSpread:cp,seededRandom:hp,degToRad:up,radToDeg:dp,isPowerOfTwo:pp,ceilPowerOfTwo:fp,floorPowerOfTwo:mp,setQuaternionFromProperEuler:gp,normalize:Pn,denormalize:eo};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ae{constructor(t,e,n,s,o,a,r,l,c){Ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c)}set(t,e,n,s,o,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],v=n[8],g=s[0],f=s[3],p=s[6],_=s[1],M=s[4],x=s[7],b=s[2],y=s[5],A=s[8];return o[0]=a*g+r*_+l*b,o[3]=a*f+r*M+l*y,o[6]=a*p+r*x+l*A,o[1]=c*g+h*_+u*b,o[4]=c*f+h*M+u*y,o[7]=c*p+h*x+u*A,o[2]=d*g+m*_+v*b,o[5]=d*f+m*M+v*y,o[8]=d*p+m*x+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*o*h+n*r*l+s*o*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,d=r*l-h*o,m=c*o-a*l,v=e*u+n*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(r*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*o-r*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*o)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-s*c,s*l,-s*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(dr.makeScale(t,e)),this}rotate(t){return this.premultiply(dr.makeRotation(-t)),this}translate(t,e){return this.premultiply(dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dr=new Ae;function Au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vp(){const i=Xa("canvas");return i.style.display="block",i}const Tc={};function bs(i){i in Tc||(Tc[i]=!0,console.warn(i))}function xp(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function _p(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Mp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ec=new Ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new Ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wp(){const i={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(s,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===ke&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ke&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Va:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,a){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xo]:{primaries:t,whitePoint:n,transfer:Va,toXYZ:Ec,fromXYZ:Cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:n,transfer:ke,toXYZ:Ec,fromXYZ:Cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),i}const Le=wp();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zs;class yp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zs===void 0&&(zs=Xa("canvas")),zs.width=t.width,zs.height=t.height;const n=zs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zs}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=Bi(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bp=0;class ir{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(pr(s[a].image)):o.push(pr(s[a]))}else o=pr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sp=0;class wn extends Is{constructor(t=wn.DEFAULT_IMAGE,e=wn.DEFAULT_MAPPING,n=es,s=es,o=gi,a=ns,r=$n,l=Hi,c=wn.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Fs(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ai:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ai:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=du;wn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,e=0,n=0,s=1){Ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],v=l[9],g=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(m+1)/2,b=(p+1)/2,y=(h+d)/4,A=(u+g)/4,T=(v+f)/4;return M>x&&M>b?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=y/n,o=A/n):x>b?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=y/s,o=T/s):b<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),n=A/o,s=T/o),this.set(n,s,o,e),this}let _=Math.sqrt((f-v)*(f-v)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(f-v)/_,this.y=(u-g)/_,this.z=(d-h)/_,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ap extends Is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new wn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ir(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Ap{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tu extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tp extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,r){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[a+0],m=o[a+1],v=o[a+2],g=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=g;return}if(u!==g||l!==d||c!==m||h!==v){let f=1-r;const p=l*d+c*m+h*v+u*g,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),y=Math.atan2(b,p*_);f=Math.sin(f*y)/b,r=Math.sin(r*y)/b}const x=r*_;if(l=l*f+d*x,c=c*f+m*x,h=h*f+v*x,u=u*f+g*x,f===1-r){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,a){const r=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[a],d=o[a+1],m=o[a+2],v=o[a+3];return t[e]=r*v+h*u+l*m-c*d,t[e+1]=l*v+h*d+c*u-r*m,t[e+2]=c*v+h*m+r*d-l*u,t[e+3]=h*v-r*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(s/2),u=r(o/2),d=l(n/2),m=l(s/2),v=l(o/2);switch(a){case"XYZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"YZX":this._x=d*h*u+c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u-d*m*v;break;case"XZY":this._x=d*h*u-c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+r+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(o-c)*m,this._z=(a-s)*m}else if(n>r&&n>u){const m=2*Math.sqrt(1+n-r-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(o+c)/m}else if(r>u){const m=2*Math.sqrt(1+r-n-u);this._w=(o-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-r);this._w=(a-s)/m,this._x=(o+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+s*c-o*l,this._y=s*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-s*r,this._w=a*h-n*r-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+s*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*s-r*n),h=2*(r*e-o*s),u=2*(o*n-a*e);return this.x=e+l*c+a*u-r*h,this.y=n+l*h+r*c-o*u,this.z=s+l*u+o*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=s*l-o*r,this.y=o*a-n*l,this.z=n*r-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fr.copy(this).projectOnVector(t),this.sub(fr)}reflect(t){return this.sub(fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new P,Pc=new on;class cs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,li):li.fromBufferAttribute(o,a),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),oa.subVectors(this.max,Ro),Bs.subVectors(t.a,Ro),Os.subVectors(t.b,Ro),Hs.subVectors(t.c,Ro),Yi.subVectors(Os,Bs),$i.subVectors(Hs,Os),fs.subVectors(Bs,Hs);let e=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-fs.z,fs.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,fs.z,0,-fs.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-fs.y,fs.x,0];return!mr(e,Bs,Os,Hs,oa)||(e=[1,0,0,0,1,0,0,0,1],!mr(e,Bs,Os,Hs,oa))?!1:(aa.crossVectors(Yi,$i),e=[aa.x,aa.y,aa.z],mr(e,Bs,Os,Hs,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new P,new P,new P,new P,new P,new P,new P,new P],li=new P,sa=new cs,Bs=new P,Os=new P,Hs=new P,Yi=new P,$i=new P,fs=new P,Ro=new P,oa=new P,aa=new P,ms=new P;function mr(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){ms.fromArray(i,o);const r=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Ep=new cs,Lo=new P,gr=new P;class hs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ep.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const e=Lo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Lo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(gr)),this.expandByPoint(Lo.copy(t.center).sub(gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new P,vr=new P,ra=new P,qi=new P,xr=new P,la=new P,_r=new P;class Qo{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vr.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(vr);const o=t.distanceTo(e)*.5,a=-this.direction.dot(ra),r=qi.dot(this.direction),l=-qi.dot(ra),c=qi.lengthSq(),h=Math.abs(1-a*a);let u,d,m,v;if(h>0)if(u=a*l-r,d=a*r-l,v=o*h,u>=0)if(d>=-v)if(d<=v){const g=1/h;u*=g,d*=g,m=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=o,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*o+r)),d=u>0?-o:Math.min(Math.max(-o,-l),o),m=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-o,-l),o),m=d*(d+2*l)+c):(u=Math.max(0,-(a*o+r)),d=u>0?o:Math.min(Math.max(-o,-l),o),m=-u*u+d*(d+2*l)+c);else d=a>0?-o:o,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vr).addScaledVector(ra,d),m}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,s,o){xr.subVectors(e,t),la.subVectors(n,t),_r.crossVectors(xr,la);let a=this.direction.dot(_r),r;if(a>0){if(s)return null;r=1}else if(a<0)r=-1,a=-a;else return null;qi.subVectors(this.origin,t);const l=r*this.direction.dot(la.crossVectors(qi,la));if(l<0)return null;const c=r*this.direction.dot(xr.cross(qi));if(c<0||l+c>a)return null;const h=-r*qi.dot(_r);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,o,a,r,l,c,h,u,d,m,v,g,f){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c,h,u,d,m,v,g,f)}set(t,e,n,s,o,a,r,l,c,h,u,d,m,v,g,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=v,p[11]=g,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ws.setFromMatrixColumn(t,0).length(),o=1/Ws.setFromMatrixColumn(t,1).length(),a=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=a*h,m=a*u,v=r*h,g=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+v*c,e[5]=d-g*c,e[9]=-r*l,e[2]=g-d*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,v=c*h,g=c*u;e[0]=d+g*r,e[4]=v*r-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=m*r-v,e[6]=g+d*r,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,v=c*h,g=c*u;e[0]=d-g*r,e[4]=-a*u,e[8]=v+m*r,e[1]=m+v*r,e[5]=a*h,e[9]=g-d*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,v=r*h,g=r*u;e[0]=l*h,e[4]=v*c-m,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=m*c-v,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,v=r*l,g=r*c;e[0]=l*h,e[4]=g-d*u,e[8]=v*u+m,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=m*u+v,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,m=a*c,v=r*l,g=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=m*u-v,e[2]=v*u-m,e[6]=r*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cp,t,Pp)}lookAt(t,e,n){const s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Zi.crossVectors(n,Vn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Zi.crossVectors(n,Vn)),Zi.normalize(),ca.crossVectors(Vn,Zi),s[0]=Zi.x,s[4]=ca.x,s[8]=Vn.x,s[1]=Zi.y,s[5]=ca.y,s[9]=Vn.y,s[2]=Zi.z,s[6]=ca.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],v=n[2],g=n[6],f=n[10],p=n[14],_=n[3],M=n[7],x=n[11],b=n[15],y=s[0],A=s[4],T=s[8],S=s[12],w=s[1],C=s[5],E=s[9],R=s[13],L=s[2],I=s[6],k=s[10],D=s[14],U=s[3],O=s[7],F=s[11],Z=s[15];return o[0]=a*y+r*w+l*L+c*U,o[4]=a*A+r*C+l*I+c*O,o[8]=a*T+r*E+l*k+c*F,o[12]=a*S+r*R+l*D+c*Z,o[1]=h*y+u*w+d*L+m*U,o[5]=h*A+u*C+d*I+m*O,o[9]=h*T+u*E+d*k+m*F,o[13]=h*S+u*R+d*D+m*Z,o[2]=v*y+g*w+f*L+p*U,o[6]=v*A+g*C+f*I+p*O,o[10]=v*T+g*E+f*k+p*F,o[14]=v*S+g*R+f*D+p*Z,o[3]=_*y+M*w+x*L+b*U,o[7]=_*A+M*C+x*I+b*O,o[11]=_*T+M*E+x*k+b*F,o[15]=_*S+M*R+x*D+b*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],v=t[3],g=t[7],f=t[11],p=t[15];return v*(+o*l*u-s*c*u-o*r*d+n*c*d+s*r*m-n*l*m)+g*(+e*l*m-e*c*d+o*a*d-s*a*m+s*c*h-o*l*h)+f*(+e*c*u-e*r*m-o*a*u+n*a*m+o*r*h-n*c*h)+p*(-s*r*h-e*l*u+e*r*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],v=t[12],g=t[13],f=t[14],p=t[15],_=u*f*c-g*d*c+g*l*m-r*f*m-u*l*p+r*d*p,M=v*d*c-h*f*c-v*l*m+a*f*m+h*l*p-a*d*p,x=h*g*c-v*u*c+v*r*m-a*g*m-h*r*p+a*u*p,b=v*u*l-h*g*l-v*r*d+a*g*d+h*r*f-a*u*f,y=e*_+n*M+s*x+o*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/y;return t[0]=_*A,t[1]=(g*d*o-u*f*o-g*s*m+n*f*m+u*s*p-n*d*p)*A,t[2]=(r*f*o-g*l*o+g*s*c-n*f*c-r*s*p+n*l*p)*A,t[3]=(u*l*o-r*d*o-u*s*c+n*d*c+r*s*m-n*l*m)*A,t[4]=M*A,t[5]=(h*f*o-v*d*o+v*s*m-e*f*m-h*s*p+e*d*p)*A,t[6]=(v*l*o-a*f*o-v*s*c+e*f*c+a*s*p-e*l*p)*A,t[7]=(a*d*o-h*l*o+h*s*c-e*d*c-a*s*m+e*l*m)*A,t[8]=x*A,t[9]=(v*u*o-h*g*o-v*n*m+e*g*m+h*n*p-e*u*p)*A,t[10]=(a*g*o-v*r*o+v*n*c-e*g*c-a*n*p+e*r*p)*A,t[11]=(h*r*o-a*u*o-h*n*c+e*u*c+a*n*m-e*r*m)*A,t[12]=b*A,t[13]=(h*g*s-v*u*s+v*n*d-e*g*d-h*n*f+e*u*f)*A,t[14]=(v*r*s-a*g*s-v*n*l+e*g*l+a*n*f-e*r*f)*A,t[15]=(a*u*s-h*r*s+h*n*l-e*u*l-a*n*d+e*r*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+n,h*l-s*a,0,c*l-s*r,h*l+s*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,h=a+a,u=r+r,d=o*c,m=o*h,v=o*u,g=a*h,f=a*u,p=r*u,_=l*c,M=l*h,x=l*u,b=n.x,y=n.y,A=n.z;return s[0]=(1-(g+p))*b,s[1]=(m+x)*b,s[2]=(v-M)*b,s[3]=0,s[4]=(m-x)*y,s[5]=(1-(d+p))*y,s[6]=(f+_)*y,s[7]=0,s[8]=(v+M)*A,s[9]=(f-_)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Ws.set(s[0],s[1],s[2]).length();const a=Ws.set(s[4],s[5],s[6]).length(),r=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ci.copy(this);const c=1/o,h=1/a,u=1/r;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,e.setFromRotationMatrix(ci),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,s,o,a,r=Ni){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,v;if(r===Ni)m=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(r===Ga)m=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,a,r=Ni){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-o),d=(e+t)*c,m=(n+s)*h;let v,g;if(r===Ni)v=(a+o)*u,g=-2*u;else if(r===Ga)v=o*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ws=new P,ci=new de,Cp=new P(0,0,0),Pp=new P(1,1,1),Zi=new P,ca=new P,Vn=new P,Rc=new de,Lc=new on;class Bn{constructor(t=0,e=0,n=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],a=s[4],r=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rp=0;const Ic=new P,Vs=new on,Pi=new de,ha=new P,Io=new P,Lp=new P,Ip=new on,Fc=new P(1,0,0),Dc=new P(0,1,0),Nc=new P(0,0,1),Uc={type:"added"},Fp={type:"removed"},Gs={type:"childadded",child:null},Mr={type:"childremoved",child:null};class pn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new P,e=new Bn,n=new on,s=new P(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Ae}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Io,ha,this.up):Pi.lookAt(ha,Io,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uc),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fp),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uc),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,Lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));s.material=r}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pn.DEFAULT_UP=new P(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new P,Ri=new P,wr=new P,Li=new P,Xs=new P,Ys=new P,kc=new P,yr=new P,br=new P,Sr=new P,Ar=new Ge,Tr=new Ge,Er=new Ge;class mi{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hi.subVectors(t,e),s.cross(hi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){hi.subVectors(s,e),Ri.subVectors(n,e),wr.subVectors(t,e);const a=hi.dot(hi),r=hi.dot(Ri),l=hi.dot(wr),c=Ri.dot(Ri),h=Ri.dot(wr),u=a*c-r*r;if(u===0)return o.set(0,0,0),null;const d=1/u,m=(c*l-r*h)*d,v=(a*h-r*l)*d;return o.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,s,o,a,r,l){return this.getBarycoord(t,e,n,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(r,Li.z),l)}static getInterpolatedAttribute(t,e,n,s,o,a){return Ar.setScalar(0),Tr.setScalar(0),Er.setScalar(0),Ar.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,n),Er.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ar,o.x),a.addScaledVector(Tr,o.y),a.addScaledVector(Er,o.z),a}static isFrontFacing(t,e,n,s){return hi.subVectors(n,e),Ri.subVectors(t,e),hi.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),hi.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return mi.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let a,r;Xs.subVectors(s,n),Ys.subVectors(o,n),yr.subVectors(t,n);const l=Xs.dot(yr),c=Ys.dot(yr);if(l<=0&&c<=0)return e.copy(n);br.subVectors(t,s);const h=Xs.dot(br),u=Ys.dot(br);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xs,a);Sr.subVectors(t,o);const m=Xs.dot(Sr),v=Ys.dot(Sr);if(v>=0&&m<=v)return e.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return r=c/(c-v),e.copy(n).addScaledVector(Ys,r);const f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return kc.subVectors(o,s),r=(u-h)/(u-h+(m-v)),e.copy(s).addScaledVector(kc,r);const p=1/(f+g+d);return a=g*p,r=d*p,e.copy(n).addScaledVector(Xs,a).addScaledVector(Ys,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Cr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=Jl(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Cr(a,o,t+1/3),this.g=Cr(a,o,t),this.b=Cr(a,o,t-1/3)}return Le.toWorkingColorSpace(this,s),this}setStyle(t,e=Mn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return Le.fromWorkingColorSpace(Tn.copy(this),t),Math.round(Te(Tn.r*255,0,255))*65536+Math.round(Te(Tn.g*255,0,255))*256+Math.round(Te(Tn.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(Tn.copy(this),e);const n=Tn.r,s=Tn.g,o=Tn.b,a=Math.max(n,s,o),r=Math.min(n,s,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=Mn){Le.fromWorkingColorSpace(Tn.copy(this),t);const e=Tn.r,n=Tn.g,s=Tn.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(ua);const n=Vo(ji.h,ua.h,e),s=Vo(ji.s,ua.s,e),o=Vo(ji.l,ua.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Bt;Bt.NAMES=Eu;let Dp=0;class So extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=ao,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=nl,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(n.blending=this.blending),this.side!==ls&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==nl&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qo extends So{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new P,da=new qt;let Np=0;class J{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=eo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=eo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=eo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=eo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=eo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array),o=Pn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}}class Ce extends J{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cu extends J{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends J{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Up=0;const ti=new de,Pr=new pn,$s=new P,Gn=new cs,Fo=new cs,_n=new P;class jt extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?Cu:Ce)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ae().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,n){return ti.makeTranslation(t,e,n),this.applyMatrix4(ti),this}scale(t,e,n){return ti.makeScale(t,e,n),this.applyMatrix4(ti),this}lookAt(t){return Pr.lookAt(t),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Gn.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Fo.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(Gn.min,Fo.min),Gn.expandByPoint(_n),_n.addVectors(Gn.max,Fo.max),Gn.expandByPoint(_n)):(Gn.expandByPoint(Fo.min),Gn.expandByPoint(Fo.max))}Gn.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)_n.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(_n));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)_n.fromBufferAttribute(r,c),l&&($s.fromBufferAttribute(t,c),_n.add($s)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new J(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let T=0;T<n.count;T++)r[T]=new P,l[T]=new P;const c=new P,h=new P,u=new P,d=new qt,m=new qt,v=new qt,g=new P,f=new P;function p(T,S,w){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,w),d.fromBufferAttribute(o,T),m.fromBufferAttribute(o,S),v.fromBufferAttribute(o,w),h.sub(c),u.sub(c),m.sub(d),v.sub(d);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(C),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(C),r[T].add(g),r[S].add(g),r[w].add(g),l[T].add(f),l[S].add(f),l[w].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,S=_.length;T<S;++T){const w=_[T],C=w.start,E=w.count;for(let R=C,L=C+E;R<L;R+=3)p(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const M=new P,x=new P,b=new P,y=new P;function A(T){b.fromBufferAttribute(s,T),y.copy(b);const S=r[T];M.copy(S),M.sub(b.multiplyScalar(b.dot(S))).normalize(),x.crossVectors(y,S);const C=x.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,C)}for(let T=0,S=_.length;T<S;++T){const w=_[T],C=w.start,E=w.count;for(let R=C,L=C+E;R<L;R+=3)A(t.getX(R+0)),A(t.getX(R+1)),A(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new J(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new P,o=new P,a=new P,r=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),g=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),r.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),r.add(h),l.add(h),c.add(h),n.setXYZ(v,r.x,r.y,r.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let g=0,f=l.length;g<f;g++){r.isInterleavedBufferAttribute?m=l[g]*r.data.stride+r.offset:m=l[g]*h;for(let p=0;p<h;p++)d[v++]=c[m++]}return new J(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new jt,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new de,gs=new Qo,pa=new hs,Bc=new P,fa=new P,ma=new P,ga=new P,Rr=new P,va=new P,Oc=new P,xa=new P;class ze extends pn{constructor(t=new jt,e=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(o&&r){va.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],u=o[l];h!==0&&(Rr.fromBufferAttribute(u,t),a?va.addScaledVector(Rr,h):va.addScaledVector(Rr.sub(e),h))}e.add(va)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(o),gs.copy(t.ray).recast(t.near),!(pa.containsPoint(gs.origin)===!1&&(gs.intersectSphere(pa,Bc)===null||gs.origin.distanceToSquared(Bc)>(t.far-t.near)**2))&&(zc.copy(o).invert(),gs.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,m=o.drawRange;if(r!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const f=d[v],p=a[f.materialIndex],_=Math.max(f.start,m.start),M=Math.min(r.count,Math.min(f.start+f.count,m.start+m.count));for(let x=_,b=M;x<b;x+=3){const y=r.getX(x),A=r.getX(x+1),T=r.getX(x+2);s=_a(this,p,t,n,c,h,u,y,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(r.count,m.start+m.count);for(let f=v,p=g;f<p;f+=3){const _=r.getX(f),M=r.getX(f+1),x=r.getX(f+2);s=_a(this,a,t,n,c,h,u,_,M,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const f=d[v],p=a[f.materialIndex],_=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let x=_,b=M;x<b;x+=3){const y=x,A=x+1,T=x+2;s=_a(this,p,t,n,c,h,u,y,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=v,p=g;f<p;f+=3){const _=f,M=f+1,x=f+2;s=_a(this,a,t,n,c,h,u,_,M,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function kp(i,t,e,n,s,o,a,r){let l;if(t.side===Fn?l=n.intersectTriangle(a,o,s,!0,r):l=n.intersectTriangle(s,o,a,t.side===ls,r),l===null)return null;xa.copy(r),xa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xa);return c<e.near||c>e.far?null:{distance:c,point:xa.clone(),object:i}}function _a(i,t,e,n,s,o,a,r,l,c){i.getVertexPosition(r,fa),i.getVertexPosition(l,ma),i.getVertexPosition(c,ga);const h=kp(i,t,e,n,fa,ma,ga,Oc);if(h){const u=new P;mi.getBarycoord(Oc,fa,ma,ga,u),s&&(h.uv=mi.getInterpolatedAttribute(s,r,l,c,u,new qt)),o&&(h.uv1=mi.getInterpolatedAttribute(o,r,l,c,u,new qt)),a&&(h.normal=mi.getInterpolatedAttribute(a,r,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new P,materialIndex:0};mi.getNormal(fa,ma,ga,d.normal),h.face=d,h.barycoord=u}return h}class Jo extends jt{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,o,0),v("z","y","x",1,-1,n,e,-t,a,o,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,o,4),v("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function v(g,f,p,_,M,x,b,y,A,T,S){const w=x/A,C=b/T,E=x/2,R=b/2,L=y/2,I=A+1,k=T+1;let D=0,U=0;const O=new P;for(let F=0;F<k;F++){const Z=F*C-R;for(let G=0;G<I;G++){const $=G*w-E;O[g]=$*_,O[f]=Z*M,O[p]=L,c.push(O.x,O.y,O.z),O[g]=0,O[f]=0,O[p]=y>0?1:-1,h.push(O.x,O.y,O.z),u.push(G/A),u.push(1-F/T),D+=1}}for(let F=0;F<T;F++)for(let Z=0;Z<A;Z++){const G=d+Z+I*F,$=d+Z+I*(F+1),q=d+(Z+1)+I*(F+1),W=d+(Z+1)+I*F;l.push(G,$,W),l.push($,q,W),U+=6}r.addGroup(m,U,S),m+=U,d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _o(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Rn(i){const t={};for(let e=0;e<i.length;e++){const n=_o(i[e]);for(const s in n)t[s]=n[s]}return t}function zp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Zo={clone:_o,merge:Rn};var Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oe extends So{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ru extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new P,Hc=new qt,Wc=new qt;class ni extends Ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,Hc,Wc),e.subVectors(Wc,Hc)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qs=-90,Zs=1;class Hp extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ni(qs,Zs,t,e);s.layers=this.layers,this.add(s);const o=new ni(qs,Zs,t,e);o.layers=this.layers,this.add(o);const a=new ni(qs,Zs,t,e);a.layers=this.layers,this.add(a);const r=new ni(qs,Zs,t,e);r.layers=this.layers,this.add(r);const l=new ni(qs,Zs,t,e);l.layers=this.layers,this.add(l);const c=new ni(qs,Zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Lu extends wn{constructor(t,e,n,s,o,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:fo,super(t,e,n,s,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wp extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jo(5,5,5),o=new Oe({name:"CubemapFromEquirect",uniforms:_o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:ki});o.uniforms.tEquirect.value=e;const a=new ze(s,o),r=e.minFilter;return e.minFilter===ns&&(e.minFilter=gi),new Hp(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}}class xi extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),p=this._getHandJoint(c,g);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ec{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new ec(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ya extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Vc=new P,Gc=new Ge,Xc=new Ge,Gp=new P,Yc=new de,Ma=new P,Ir=new hs,$c=new de,Fr=new Qo;class Iu extends ze{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new de,this.bindMatrixInverse=new de,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new cs),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(s),t.ray.intersectsSphere(Ir)!==!1&&($c.copy(s).invert(),Fr.copy(t.ray).applyMatrix4($c),!(this.boundingBox!==null&&Fr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Fr)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ge,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Gc.fromBufferAttribute(s.attributes.skinIndex,t),Xc.fromBufferAttribute(s.attributes.skinWeight,t),Vc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const a=Xc.getComponent(o);if(a!==0){const r=Gc.getComponent(o);Yc.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(Gp.copy(Vc).applyMatrix4(Yc),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class nc extends pn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fu extends wn{constructor(t=null,e=1,n=1,s,o,a,r,l,c=zn,h=zn,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qc=new de,Xp=new de;class sr{constructor(t=[],e=[]){this.uuid=Fs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new de)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new de;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const r=t[o]?t[o].matrixWorld:Xp;qc.multiplyMatrices(r,e[o]),qc.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new sr(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Fu(e,t,t,$n,vi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let a=e[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new nc),this.bones.push(a),this.boneInverses.push(new de().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const a=e[s];t.bones.push(a.uuid);const r=n[s];t.boneInverses.push(r.toArray())}return t}}class $a extends J{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const js=new de,Zc=new de,wa=[],jc=new cs,Yp=new de,Do=new ze,No=new hs;class vs extends ze{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),jc.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(jc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),No.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(No)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=t*o+1;for(let r=0;r<n.length;r++)n[r]=s[a+r]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),t.ray.intersectsSphere(No)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,js),Zc.multiplyMatrices(n,js),Do.matrixWorld=Zc,Do.raycast(t,wa);for(let a=0,r=wa.length;a<r;a++){const l=wa[a];l.instanceId=o,l.object=this,e.push(l)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fu(new Float32Array(s*this.count),s,this.count,Zl,vi));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=s*t;o[l]=r,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dr=new P,$p=new P,qp=new Ae;class Qi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Dr.subVectors(n,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Dr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qp.getNormalMatrix(t),s=this.coplanarPoint(Dr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new hs,ya=new P;class ic{constructor(t=new Qi,e=new Qi,n=new Qi,s=new Qi,o=new Qi,a=new Qi){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ni){const n=this.planes,s=t.elements,o=s[0],a=s[1],r=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],v=s[9],g=s[10],f=s[11],p=s[12],_=s[13],M=s[14],x=s[15];if(n[0].setComponents(l-o,d-c,f-m,x-p).normalize(),n[1].setComponents(l+o,d+c,f+m,x+p).normalize(),n[2].setComponents(l+a,d+h,f+v,x+_).normalize(),n[3].setComponents(l-a,d-h,f-v,x-_).normalize(),n[4].setComponents(l-r,d-u,f-g,x-M).normalize(),e===Ni)n[5].setComponents(l+r,d+u,f+g,x+M).normalize();else if(e===Ga)n[5].setComponents(r,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zp extends So{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kc=new de,zl=new Qo,ba=new hs,Sa=new P;class no extends pn{constructor(t=new jt,e=new Zp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=o,t.ray.intersectsSphere(ba)===!1)return;Kc.copy(s).invert(),zl.copy(t.ray).applyMatrix4(Kc);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,g=m;v<g;v++){const f=c.getX(v);Sa.fromBufferAttribute(u,f),Qc(Sa,f,l,s,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,g=m;v<g;v++)Sa.fromBufferAttribute(u,v),Qc(Sa,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Qc(i,t,e,n,s,o,a){const r=zl.distanceSqToPoint(i);if(r<e){const l=new P;zl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Nr extends wn{constructor(t,e,n,s,o,a,r,l,c,h,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Ln extends wn{constructor(t,e,n,s,o,a,r,l,c){super(t,e,n,s,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Du extends wn{constructor(t,e,n,s,o,a,r,l,c,h=ro){if(h!==ro&&h!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ro&&(n=Ls),n===void 0&&h===vo&&(n=go),super(null,s,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class jp{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=n[s]-a,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(o-1);const h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),r=this.getPoint(o),l=e||(a.isVector2?new qt:new P);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],o=[],a=[],r=new P,l=new de;for(let m=0;m<=t;m++){const v=m/t;s[m]=this.getTangentAt(v,new P)}o[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],r),a[0].crossVectors(s[0],o[0]);for(let m=1;m<=t;m++){if(o[m]=o[m-1].clone(),a[m]=a[m-1].clone(),r.crossVectors(s[m-1],s[m]),r.length()>Number.EPSILON){r.normalize();const v=Math.acos(Te(s[m-1].dot(s[m]),-1,1));o[m].applyMatrix4(l.makeRotationAxis(r,v))}a[m].crossVectors(s[m],o[m])}if(e===!0){let m=Math.acos(Te(o[0].dot(o[t]),-1,1));m/=t,s[0].dot(r.crossVectors(o[0],o[t]))>0&&(m=-m);for(let v=1;v<=t;v++)o[v].applyMatrix4(l.makeRotationAxis(s[v],m*v)),a[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function sc(){let i=0,t=0,e=0,n=0;function s(o,a,r,l){i=o,t=r,e=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){s(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,u){let d=(a-o)/c-(r-o)/(c+h)+(r-a)/h,m=(r-a)/h-(l-a)/(h+u)+(l-r)/u;d*=h,m*=h,s(a,r,d,m)},calc:function(o){const a=o*o,r=a*o;return i+t*o+e*a+n*r}}}const Aa=new P,Ur=new sc,kr=new sc,zr=new sc;class si extends jp{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%o]:(Aa.subVectors(s[0],s[1]).add(s[0]),c=Aa);const u=s[r%o],d=s[(r+1)%o];if(this.closed||r+2<o?h=s[(r+2)%o]:(Aa.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Aa),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);g<1e-4&&(g=1),v<1e-4&&(v=g),f<1e-4&&(f=g),Ur.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,v,g,f),kr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,v,g,f),zr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,v,g,f)}else this.curveType==="catmullrom"&&(Ur.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),kr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),zr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ur.calc(l),kr.calc(l),zr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class oc extends jt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new P,h=new qt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class co extends jt{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],m=[];let v=0;const g=[],f=n/2;let p=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(m,2));function _(){const x=new P,b=new P;let y=0;const A=(e-t)/n;for(let T=0;T<=o;T++){const S=[],w=T/o,C=w*(e-t)+t;for(let E=0;E<=s;E++){const R=E/s,L=R*l+r,I=Math.sin(L),k=Math.cos(L);b.x=C*I,b.y=-w*n+f,b.z=C*k,u.push(b.x,b.y,b.z),x.set(I,A,k).normalize(),d.push(x.x,x.y,x.z),m.push(R,1-w),S.push(v++)}g.push(S)}for(let T=0;T<s;T++)for(let S=0;S<o;S++){const w=g[S][T],C=g[S+1][T],E=g[S+1][T+1],R=g[S][T+1];(t>0||S!==0)&&(h.push(w,C,R),y+=3),(e>0||S!==o-1)&&(h.push(C,E,R),y+=3)}c.addGroup(p,y,0),p+=y}function M(x){const b=v,y=new qt,A=new P;let T=0;const S=x===!0?t:e,w=x===!0?1:-1;for(let E=1;E<=s;E++)u.push(0,f*w,0),d.push(0,w,0),m.push(.5,.5),v++;const C=v;for(let E=0;E<=s;E++){const L=E/s*l+r,I=Math.cos(L),k=Math.sin(L);A.x=S*k,A.y=f*w,A.z=S*I,u.push(A.x,A.y,A.z),d.push(0,w,0),y.x=I*.5+.5,y.y=k*.5*w+.5,m.push(y.x,y.y),v++}for(let E=0;E<s;E++){const R=b+E,L=C+E;x===!0?h.push(L,L+1,R):h.push(L+1,L,R),T+=3}c.addGroup(p,T,x===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ac extends jt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],a=[];r(s),c(n),h(),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(o.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(_){const M=new P,x=new P,b=new P;for(let y=0;y<e.length;y+=3)m(e[y+0],M),m(e[y+1],x),m(e[y+2],b),l(M,x,b,_)}function l(_,M,x,b){const y=b+1,A=[];for(let T=0;T<=y;T++){A[T]=[];const S=_.clone().lerp(x,T/y),w=M.clone().lerp(x,T/y),C=y-T;for(let E=0;E<=C;E++)E===0&&T===y?A[T][E]=S:A[T][E]=S.clone().lerp(w,E/C)}for(let T=0;T<y;T++)for(let S=0;S<2*(y-T)-1;S++){const w=Math.floor(S/2);S%2===0?(d(A[T][w+1]),d(A[T+1][w]),d(A[T][w])):(d(A[T][w+1]),d(A[T+1][w+1]),d(A[T+1][w]))}}function c(_){const M=new P;for(let x=0;x<o.length;x+=3)M.x=o[x+0],M.y=o[x+1],M.z=o[x+2],M.normalize().multiplyScalar(_),o[x+0]=M.x,o[x+1]=M.y,o[x+2]=M.z}function h(){const _=new P;for(let M=0;M<o.length;M+=3){_.x=o[M+0],_.y=o[M+1],_.z=o[M+2];const x=f(_)/2/Math.PI+.5,b=p(_)/Math.PI+.5;a.push(x,1-b)}v(),u()}function u(){for(let _=0;_<a.length;_+=6){const M=a[_+0],x=a[_+2],b=a[_+4],y=Math.max(M,x,b),A=Math.min(M,x,b);y>.9&&A<.1&&(M<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function d(_){o.push(_.x,_.y,_.z)}function m(_,M){const x=_*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function v(){const _=new P,M=new P,x=new P,b=new P,y=new qt,A=new qt,T=new qt;for(let S=0,w=0;S<o.length;S+=9,w+=6){_.set(o[S+0],o[S+1],o[S+2]),M.set(o[S+3],o[S+4],o[S+5]),x.set(o[S+6],o[S+7],o[S+8]),y.set(a[w+0],a[w+1]),A.set(a[w+2],a[w+3]),T.set(a[w+4],a[w+5]),b.copy(_).add(M).add(x).divideScalar(3);const C=f(b);g(y,w+0,_,C),g(A,w+2,M,C),g(T,w+4,x,C)}}function g(_,M,x,b){b<0&&_.x===1&&(a[M]=_.x-1),x.x===0&&x.z===0&&(a[M]=b/2/Math.PI+.5)}function f(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.vertices,t.indices,t.radius,t.details)}}class Ao extends ac{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ao(t.radius,t.detail)}}class Mo extends jt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(s),c=r+1,h=l+1,u=t/r,d=e/l,m=[],v=[],g=[],f=[];for(let p=0;p<h;p++){const _=p*d-a;for(let M=0;M<c;M++){const x=M*u-o;v.push(x,-_,0),g.push(0,0,1),f.push(M/r),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<r;_++){const M=_+c*p,x=_+c*(p+1),b=_+1+c*(p+1),y=_+1+c*p;m.push(M,x,y),m.push(x,b,y)}this.setIndex(m),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.width,t.height,t.widthSegments,t.heightSegments)}}class qa extends jt{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new P,d=new P,m=[],v=[],g=[],f=[];for(let p=0;p<=n;p++){const _=[],M=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const y=b/e;u.x=-t*Math.cos(s+y*o)*Math.sin(a+M*r),u.y=t*Math.cos(a+M*r),u.z=t*Math.sin(s+y*o)*Math.sin(a+M*r),v.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),f.push(y+x,1-M),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const M=h[p][_+1],x=h[p][_],b=h[p+1][_],y=h[p+1][_+1];(p!==0||a>0)&&m.push(M,x,y),(p!==n-1||l<Math.PI)&&m.push(x,b,y)}this.setIndex(m),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kp extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fi extends So{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class In extends fi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qp extends So{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jp extends So{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nu extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class t0 extends Nu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Br=new de,Jc=new P,th=new P;class e0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ic,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jc),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),Br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rc extends Ru{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class n0 extends e0{constructor(){super(new rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Or extends Nu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new n0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class i0 extends jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class s0 extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Uu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eh(){return performance.now()}const lc="\\[\\]\\.:\\/",o0=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",a0="[^"+lc.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",cc),l0=/(WCOD+)?/.source.replace("WCOD",a0),c0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),u0=new RegExp("^"+r0+l0+c0+h0+"$"),d0=["material","materials","bones","map"];class p0{constructor(t,e,n){const s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Fe{constructor(t,e,n){this.path=e,this.parsedPath=n||Fe.parseTrackName(e),this.node=Fe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Fe.Composite(t,e,n):new Fe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o0,"")}static parseTrackName(t){const e=u0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);d0.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===e||r.uuid===e)return r;const l=n(r.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let o=e.propertyIndex;if(t||(t=Fe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?r=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Fe.Composite=p0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const nh=new de;class f0{constructor(t,e,n=0,s=1/0){this.ray=new Qo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(t,e=!0,n=[]){return Bl(t,this,n,e),n.sort(ih),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Bl(t[s],this,n,e);return n.sort(ih),n}}function ih(i,t){return i.distance-t.distance}function Bl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let a=0,r=o.length;a<r;a++)Bl(o[a],t,e,!0)}}class sh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class m0 extends Is{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function oh(i,t,e,n){const s=g0(n);switch(e){case vu:return i*t;case _u:return i*t;case Mu:return i*t*2;case Zl:return i*t/s.components*s.byteLength;case jl:return i*t/s.components*s.byteLength;case wu:return i*t*2/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case xu:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case Ql:return i*t*4/s.components*s.byteLength;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case ml:return Math.max(i,16)*Math.max(t,8)/4;case dl:case fl:return Math.max(i,8)*Math.max(t,8)/2;case gl:case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ba:case Fl:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yu:case Nl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ul:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g0(i){switch(i){case Hi:case fu:return{byteLength:1,components:1};case Yo:case mu:case _i:return{byteLength:2,components:1};case $l:case ql:return{byteLength:2,components:4};case Ls:case Yl:case vi:return{byteLength:4,components:1};case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:er}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=er);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ku(){let i=null,t=!1,e=null,n=null;function s(o,a){e(o,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function v0(i){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),r.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<u.length;m++){const v=u[d],g=u[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,u[d]=g)}u.length=d+1;for(let m=0,v=u.length;m<v;m++){const g=u[m];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(i.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:o,update:a}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
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
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,H0=`#define PI 3.141592653589793
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
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
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
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
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
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
#endif`,vf=`struct PhysicalMaterial {
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
}`,xf=`
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cf=`#if defined( USE_POINTS_UV )
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
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,If=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`#ifdef USE_MORPHTARGETS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,km=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Xm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,jm=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:x0,alphahash_pars_fragment:_0,alphamap_fragment:M0,alphamap_pars_fragment:w0,alphatest_fragment:y0,alphatest_pars_fragment:b0,aomap_fragment:S0,aomap_pars_fragment:A0,batching_pars_vertex:T0,batching_vertex:E0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:R0,iridescence_fragment:L0,bumpmap_pars_fragment:I0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:U0,color_fragment:k0,color_pars_fragment:z0,color_pars_vertex:B0,color_vertex:O0,common:H0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:V0,displacementmap_pars_vertex:G0,displacementmap_vertex:X0,emissivemap_fragment:Y0,emissivemap_pars_fragment:$0,colorspace_fragment:q0,colorspace_pars_fragment:Z0,envmap_fragment:j0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Q0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:uf,envmap_vertex:tf,fog_vertex:ef,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:of,gradientmap_pars_fragment:af,lightmap_pars_fragment:rf,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:hf,lights_toon_fragment:df,lights_toon_pars_fragment:pf,lights_phong_fragment:ff,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:vf,lights_fragment_begin:xf,lights_fragment_maps:_f,lights_fragment_end:Mf,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:Sf,map_fragment:Af,map_pars_fragment:Tf,map_particle_fragment:Ef,map_particle_pars_fragment:Cf,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:Rf,morphinstance_vertex:Lf,morphcolor_vertex:If,morphnormal_vertex:Ff,morphtarget_pars_vertex:Df,morphtarget_vertex:Nf,normal_fragment_begin:Uf,normal_fragment_maps:kf,normal_pars_fragment:zf,normal_pars_vertex:Bf,normal_vertex:Of,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Xf,opaque_fragment:Yf,packing:$f,premultiplied_alpha_fragment:qf,project_vertex:Zf,dithering_fragment:jf,dithering_pars_fragment:Kf,roughnessmap_fragment:Qf,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:em,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:om,skinning_vertex:am,skinnormal_vertex:rm,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:dm,transmission_pars_fragment:pm,uv_pars_fragment:fm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:vm,background_vert:xm,background_frag:_m,backgroundCube_vert:Mm,backgroundCube_frag:wm,cube_vert:ym,cube_frag:bm,depth_vert:Sm,depth_frag:Am,distanceRGBA_vert:Tm,distanceRGBA_frag:Em,equirect_vert:Cm,equirect_frag:Pm,linedashed_vert:Rm,linedashed_frag:Lm,meshbasic_vert:Im,meshbasic_frag:Fm,meshlambert_vert:Dm,meshlambert_frag:Nm,meshmatcap_vert:Um,meshmatcap_frag:km,meshnormal_vert:zm,meshnormal_frag:Bm,meshphong_vert:Om,meshphong_frag:Hm,meshphysical_vert:Wm,meshphysical_frag:Vm,meshtoon_vert:Gm,meshtoon_frag:Xm,points_vert:Ym,points_frag:$m,shadow_vert:qm,shadow_frag:Zm,sprite_vert:jm,sprite_frag:Km},Xt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},envMapRotation:{value:new Ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},bi={basic:{uniforms:Rn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Rn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Rn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Rn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Rn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Rn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Rn([Xt.points,Xt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Rn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Rn([Xt.common,Xt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Rn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Rn([Xt.sprite,Xt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ae}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Rn([Xt.common,Xt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Rn([Xt.lights,Xt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};bi.physical={uniforms:Rn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Ta={r:0,b:0,g:0},_s=new Bn,Qm=new de;function Jm(i,t,e,n,s,o,a){const r=new Bt(0);let l=o===!0?0:1,c,h,u=null,d=0,m=null;function v(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function g(M){let x=!1;const b=v(M);b===null?p(r,l):b&&b.isColor&&(p(b,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(M,x){const b=v(x);b&&(b.isCubeTexture||b.mapping===nr)?(h===void 0&&(h=new ze(new Jo(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:_o(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(x.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(_s)),h.material.toneMapped=Le.getTransfer(b.colorSpace)!==ke,(u!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ze(new Mo(2,2),new Oe({name:"BackgroundMaterial",uniforms:_o(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Le.getTransfer(b.colorSpace)!==ke,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Ta,Pu(i)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,x,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(M,x=1){r.set(M),l=x,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(r,l)},render:g,addToRenderList:f,dispose:_}}function tg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,a=!1;function r(w,C,E,R,L){let I=!1;const k=u(R,E,C);o!==k&&(o=k,c(o.object)),I=m(w,R,E,L),I&&v(w,R,E,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,x(w,C,E,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,C,E){const R=E.wireframe===!0;let L=n[w.id];L===void 0&&(L={},n[w.id]=L);let I=L[C.id];I===void 0&&(I={},L[C.id]=I);let k=I[R];return k===void 0&&(k=d(l()),I[R]=k),k}function d(w){const C=[],E=[],R=[];for(let L=0;L<e;L++)C[L]=0,E[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:E,attributeDivisors:R,object:w,attributes:{},index:null}}function m(w,C,E,R){const L=o.attributes,I=C.attributes;let k=0;const D=E.getAttributes();for(const U in D)if(D[U].location>=0){const F=L[U];let Z=I[U];if(Z===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor)),F===void 0||F.attribute!==Z||Z&&F.data!==Z.data)return!0;k++}return o.attributesNum!==k||o.index!==R}function v(w,C,E,R){const L={},I=C.attributes;let k=0;const D=E.getAttributes();for(const U in D)if(D[U].location>=0){let F=I[U];F===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(F=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(F=w.instanceColor));const Z={};Z.attribute=F,F&&F.data&&(Z.data=F.data),L[U]=Z,k++}o.attributes=L,o.attributesNum=k,o.index=R}function g(){const w=o.newAttributes;for(let C=0,E=w.length;C<E;C++)w[C]=0}function f(w){p(w,0)}function p(w,C){const E=o.newAttributes,R=o.enabledAttributes,L=o.attributeDivisors;E[w]=1,R[w]===0&&(i.enableVertexAttribArray(w),R[w]=1),L[w]!==C&&(i.vertexAttribDivisor(w,C),L[w]=C)}function _(){const w=o.newAttributes,C=o.enabledAttributes;for(let E=0,R=C.length;E<R;E++)C[E]!==w[E]&&(i.disableVertexAttribArray(E),C[E]=0)}function M(w,C,E,R,L,I,k){k===!0?i.vertexAttribIPointer(w,C,E,L,I):i.vertexAttribPointer(w,C,E,R,L,I)}function x(w,C,E,R){g();const L=R.attributes,I=E.getAttributes(),k=C.defaultAttributeValues;for(const D in I){const U=I[D];if(U.location>=0){let O=L[D];if(O===void 0&&(D==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),D==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),O!==void 0){const F=O.normalized,Z=O.itemSize,G=t.get(O);if(G===void 0)continue;const $=G.buffer,q=G.type,W=G.bytesPerElement,nt=q===i.INT||q===i.UNSIGNED_INT||O.gpuType===Yl;if(O.isInterleavedBufferAttribute){const ot=O.data,Q=ot.stride,it=O.offset;if(ot.isInstancedInterleavedBuffer){for(let j=0;j<U.locationSize;j++)p(U.location+j,ot.meshPerAttribute);w.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let j=0;j<U.locationSize;j++)f(U.location+j);i.bindBuffer(i.ARRAY_BUFFER,$);for(let j=0;j<U.locationSize;j++)M(U.location+j,Z/U.locationSize,q,F,Q*W,(it+Z/U.locationSize*j)*W,nt)}else{if(O.isInstancedBufferAttribute){for(let ot=0;ot<U.locationSize;ot++)p(U.location+ot,O.meshPerAttribute);w.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ot=0;ot<U.locationSize;ot++)f(U.location+ot);i.bindBuffer(i.ARRAY_BUFFER,$);for(let ot=0;ot<U.locationSize;ot++)M(U.location+ot,Z/U.locationSize,q,F,Z*W,Z/U.locationSize*ot*W,nt)}}else if(k!==void 0){const F=k[D];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(U.location,F);break;case 3:i.vertexAttrib3fv(U.location,F);break;case 4:i.vertexAttrib4fv(U.location,F);break;default:i.vertexAttrib1fv(U.location,F)}}}}_()}function b(){T();for(const w in n){const C=n[w];for(const E in C){const R=C[E];for(const L in R)h(R[L].object),delete R[L];delete C[E]}delete n[w]}}function y(w){if(n[w.id]===void 0)return;const C=n[w.id];for(const E in C){const R=C[E];for(const L in R)h(R[L].object),delete R[L];delete C[E]}delete n[w.id]}function A(w){for(const C in n){const E=n[C];if(E[w.id]===void 0)continue;const R=E[w.id];for(const L in R)h(R[L].object),delete R[L];delete E[w.id]}}function T(){S(),a=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:T,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:f,disableUnusedAttributes:_}}function eg(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g]*d[g];e.update(v,n,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function ng(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==$n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const T=A===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Hi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vi&&!T)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:b,maxSamples:y}}function ig(i){const t=this;let e=null,n=0,s=!1,o=!1;const a=new Qi,r=new Ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const v=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||o&&!f)o?h(null):c();else{const _=o?0:n,M=_*4;let x=p.clippingState||null;l.value=x,x=h(v,d,M,m);for(let b=0;b!==M;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,v){const g=u!==null?u.length:0;let f=null;if(g!==0){if(f=l.value,v!==!0||f===null){const p=m+g*4,_=d.matrixWorldInverse;r.getNormalMatrix(_),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,x=m;M!==g;++M,x+=4)a.copy(u[M]).applyMatrix4(_,r),a.normal.toArray(f,x),f[x+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function sg(i){let t=new WeakMap;function e(a,r){return r===hl?a.mapping=fo:r===ul&&(a.mapping=mo),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===hl||r===ul)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const r=a.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const io=4,ah=[.125,.215,.35,.446,.526,.582],Es=20,Hr=new rc,rh=new Bt;let Wr=null,Vr=0,Gr=0,Xr=!1;const Ss=(1+Math.sqrt(5))/2,Ks=1/Ss,lh=[new P(-Ss,Ks,0),new P(Ss,Ks,0),new P(-Ks,0,Ss),new P(Ks,0,Ss),new P(0,Ss,-Ks),new P(0,Ss,Ks),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],og=new P;class Ol{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){const{size:a=256,position:r=og}=o;Wr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr,Vr,Gr),this._renderer.xr.enabled=Xr,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fo||t.mapping===mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:_i,format:$n,colorSpace:xo,depthBuffer:!1},s=ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(o)),this._blurMaterial=rg(o,t,e)}return s}_compileMaterial(t){const e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,Hr)}_sceneToCubeUV(t,e,n,s,o){const l=new ni(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(rh),u.toneMapping=os,u.autoClear=!1;const v=new qo({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new ze(new Jo,v);let f=!1;const p=t.background;p?p.isColor&&(v.color.copy(p),t.background=null,f=!0):(v.color.copy(rh),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[_],o.y,o.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[_],o.z)):(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[_]));const x=this._cubeSize;Ea(s,M*x,_>2?x:0,x,x),u.setRenderTarget(s),f&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===fo||t.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;Ea(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Hr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=lh[(s-o-1)%lh.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",o),this._halfBlur(a,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ze(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Es-1),g=o/v,f=isFinite(o)?1+Math.floor(h*g):Es;f>Es&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Es}`);const p=[];let _=0;for(let A=0;A<Es;++A){const T=A/g,S=Math.exp(-T*T/2);p.push(S),A===0?_+=S:A<f&&(_+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:M}=this;d.dTheta.value=v,d.mipInt.value=M-n;const x=this._sizeLods[s],b=3*x*(s>M-io?s-M+io:0),y=4*(this._cubeSize-x);Ea(e,b,y,3*x,2*x),l.setRenderTarget(e),l.render(u,Hr)}}function ag(i){const t=[],e=[],n=[];let s=i;const o=i-io+1+ah.length;for(let a=0;a<o;a++){const r=Math.pow(2,s);e.push(r);let l=1/r;a>i-io?l=ah[a-i+io-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,g=3,f=2,p=1,_=new Float32Array(g*v*m),M=new Float32Array(f*v*m),x=new Float32Array(p*v*m);for(let y=0;y<m;y++){const A=y%3*2/3-1,T=y>2?0:-1,S=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];_.set(S,g*v*y),M.set(d,f*v*y);const w=[y,y,y,y,y,y];x.set(w,p*v*y)}const b=new jt;b.setAttribute("position",new J(_,g)),b.setAttribute("uv",new J(M,f)),b.setAttribute("faceIndex",new J(x,p)),t.push(b),s>io&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ch(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rg(i,t,e){const n=new Float32Array(Es),s=new P(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function hh(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function uh(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function lg(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===hl||l===ul,h=l===fo||l===mo;if(c||h){let u=t.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return e===null&&(e=new Ol(i)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const m=r.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Ol(i)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function s(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function cg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hg(i,t,e,n){const s={},o=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const m=o.get(d);m&&(t.remove(m),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,v=u.attributes.position;let g=0;if(m!==null){const _=m.array;g=m.version;for(let M=0,x=_.length;M<x;M+=3){const b=_[M+0],y=_[M+1],A=_[M+2];d.push(b,y,y,A,A,b)}}else if(v!==void 0){const _=v.array;g=v.version;for(let M=0,x=_.length/3-1;M<x;M+=3){const b=M+0,y=M+1,A=M+2;d.push(b,y,y,A,A,b)}}else return;const f=new(Au(d)?Cu:Ce)(d,1);f.version=g;const p=o.get(u);p&&t.remove(p),o.set(u,f)}function h(u){const d=o.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function ug(i,t,e){let n;function s(d){n=d}let o,a;function r(d){o=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,o,d*a),e.update(m,n,1)}function c(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,d*a,v),e.update(m,n,v))}function h(d,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,d,0,v);let f=0;for(let p=0;p<v;p++)f+=m[p];e.update(f,n,1)}function u(d,m,v,g){if(v===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/a,m[p],g[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,o,d,0,g,0,v);let p=0;for(let _=0;_<v;_++)p+=m[_]*g[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=r*(o/3);break;case i.LINES:e.lines+=r*(o/2);break;case i.LINE_STRIP:e.lines+=r*(o-1);break;case i.LINE_LOOP:e.lines+=r*o;break;case i.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pg(i,t,e){const n=new WeakMap,s=new Ge;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(r);if(d===void 0||d.count!==u){let w=function(){T.dispose(),n.delete(r),r.removeEventListener("dispose",w)};var m=w;d!==void 0&&d.texture.dispose();const v=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,f=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],_=r.morphAttributes.normal||[],M=r.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),f===!0&&(x=3);let b=r.attributes.position.count*x,y=1;b>t.maxTextureSize&&(y=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*y*4*u),T=new Tu(A,b,y,u);T.type=vi,T.needsUpdate=!0;const S=x*4;for(let C=0;C<u;C++){const E=p[C],R=_[C],L=M[C],I=b*y*4*C;for(let k=0;k<E.count;k++){const D=k*S;v===!0&&(s.fromBufferAttribute(E,k),A[I+D+0]=s.x,A[I+D+1]=s.y,A[I+D+2]=s.z,A[I+D+3]=0),g===!0&&(s.fromBufferAttribute(R,k),A[I+D+4]=s.x,A[I+D+5]=s.y,A[I+D+6]=s.z,A[I+D+7]=0),f===!0&&(s.fromBufferAttribute(L,k),A[I+D+8]=s.x,A[I+D+9]=s.y,A[I+D+10]=s.z,A[I+D+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new qt(b,y)},n.set(r,d),r.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let f=0;f<c.length;f++)v+=c[f];const g=r.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function fg(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}const zu=new wn,dh=new Du(1,1),Bu=new Tu,Ou=new Tp,Hu=new Lu,ph=[],fh=[],mh=new Float32Array(16),gh=new Float32Array(9),vh=new Float32Array(4);function To(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=ph[s];if(o===void 0&&(o=new Float32Array(s),ph[s]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,i[a].toArray(o,r)}return o}function gn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function vn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function or(i,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2fv(this.addr,t),vn(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;i.uniform3fv(this.addr,t),vn(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4fv(this.addr,t),vn(e,t)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),vn(e,t)}else{if(gn(e,n))return;vh.set(n),i.uniformMatrix2fv(this.addr,!1,vh),vn(e,n)}}function Mg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),vn(e,t)}else{if(gn(e,n))return;gh.set(n),i.uniformMatrix3fv(this.addr,!1,gh),vn(e,n)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),vn(e,t)}else{if(gn(e,n))return;mh.set(n),i.uniformMatrix4fv(this.addr,!1,mh),vn(e,n)}}function yg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2iv(this.addr,t),vn(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3iv(this.addr,t),vn(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4iv(this.addr,t),vn(e,t)}}function Tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2uiv(this.addr,t),vn(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3uiv(this.addr,t),vn(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4uiv(this.addr,t),vn(e,t)}}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(dh.compareFunction=Su,o=dh):o=zu,e.setTexture2D(t||o,s)}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ou,s)}function Ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hu,s)}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bu,s)}function Dg(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return vg;case 35666:return xg;case 35674:return _g;case 35675:return Mg;case 35676:return wg;case 5124:case 35670:return yg;case 35667:case 35671:return bg;case 35668:case 35672:return Sg;case 35669:case 35673:return Ag;case 5125:return Tg;case 36294:return Eg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Fg}}function Ng(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){const e=To(t,this.size,2);i.uniform2fv(this.addr,e)}function kg(i,t){const e=To(t,this.size,3);i.uniform3fv(this.addr,e)}function zg(i,t){const e=To(t,this.size,4);i.uniform4fv(this.addr,e)}function Bg(i,t){const e=To(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Og(i,t){const e=To(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hg(i,t){const e=To(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wg(i,t){i.uniform1iv(this.addr,t)}function Vg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Xg(i,t){i.uniform4iv(this.addr,t)}function Yg(i,t){i.uniform1uiv(this.addr,t)}function $g(i,t){i.uniform2uiv(this.addr,t)}function qg(i,t){i.uniform3uiv(this.addr,t)}function Zg(i,t){i.uniform4uiv(this.addr,t)}function jg(i,t,e){const n=this.cache,s=t.length,o=or(e,s);gn(n,o)||(i.uniform1iv(this.addr,o),vn(n,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||zu,o[a])}function Kg(i,t,e){const n=this.cache,s=t.length,o=or(e,s);gn(n,o)||(i.uniform1iv(this.addr,o),vn(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ou,o[a])}function Qg(i,t,e){const n=this.cache,s=t.length,o=or(e,s);gn(n,o)||(i.uniform1iv(this.addr,o),vn(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hu,o[a])}function Jg(i,t,e){const n=this.cache,s=t.length,o=or(e,s);gn(n,o)||(i.uniform1iv(this.addr,o),vn(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bu,o[a])}function t1(i){switch(i){case 5126:return Ng;case 35664:return Ug;case 35665:return kg;case 35666:return zg;case 35674:return Bg;case 35675:return Og;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Xg;case 5125:return Yg;case 36294:return $g;case 36295:return qg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return Jg}}class e1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class n1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t1(e.type)}}class i1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(t,e[r.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function xh(i,t){i.seq.push(t),i.map[t.id]=t}function s1(i,t,e){const n=i.name,s=n.length;for(Yr.lastIndex=0;;){const o=Yr.exec(n),a=Yr.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===s){xh(e,c===void 0?new e1(r,i,t):new n1(r,i,t));break}else{let u=e.map[r];u===void 0&&(u=new i1(r),xh(e,u)),e=u}}}class Oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);s1(o,a,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function _h(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const o1=37297;let a1=0;function r1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const Mh=new Ae;function l1(i){Le._getMatrix(Mh,Le.workingColorSpace,i);const t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case Va:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+r1(i.getShaderSource(t),a)}else return s}function c1(i,t){const e=l1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function h1(i,t){let e;switch(t){case au:e="Linear";break;case ru:e="Reinhard";break;case lu:e="Cineon";break;case Xl:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ca=new P;function u1(){Le.getLuminanceCoefficients(Ca);const i=Ca.x.toFixed(4),t=Ca.y.toFixed(4),e=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function p1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),a=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:r}}return e}function Bo(i){return i!==""}function yh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(i){return i.replace(m1,v1)}const g1=new Map;function v1(i,t){let e=Ee[t];if(e===void 0){const n=g1.get(t);if(n!==void 0)e=Ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(i){return i.replace(x1,_1)}function _1(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ah(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function M1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===su?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function w1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fo:case mo:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mo:t="ENVMAP_MODE_REFRACTION";break}return t}function b1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case Od:t="ENVMAP_BLENDING_MIX";break;case Hd:t="ENVMAP_BLENDING_ADD";break}return t}function S1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function A1(i,t,e,n){const s=i.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=M1(e),c=w1(e),h=y1(e),u=b1(e),d=S1(e),m=d1(e),v=p1(o),g=s.createProgram();let f,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Bo).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Bo).join(`
`),p.length>0&&(p+=`
`)):(f=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),p=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==os?"#define TONE_MAPPING":"",e.toneMapping!==os?Ee.tonemapping_pars_fragment:"",e.toneMapping!==os?h1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,c1("linearToOutputTexel",e.outputColorSpace),u1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bo).join(`
`)),a=Hl(a),a=yh(a,e),a=bh(a,e),r=Hl(r),r=yh(r,e),r=bh(r,e),a=Sh(a),r=Sh(r),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=_+f+a,x=_+p+r,b=_h(s,s.VERTEX_SHADER,M),y=_h(s,s.FRAGMENT_SHADER,x);s.attachShader(g,b),s.attachShader(g,y),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(C){if(i.debug.checkShaderErrors){const E=s.getProgramInfoLog(g).trim(),R=s.getShaderInfoLog(b).trim(),L=s.getShaderInfoLog(y).trim();let I=!0,k=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,y);else{const D=wh(s,b,"vertex"),U=wh(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+E+`
`+D+`
`+U)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(R===""||L==="")&&(k=!1);k&&(C.diagnostics={runnable:I,programLog:E,vertexShader:{log:R,prefix:f},fragmentShader:{log:L,prefix:p}})}s.deleteShader(b),s.deleteShader(y),T=new Oa(s,g),S=f1(s,g)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,o1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a1++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=y,this}let T1=0;class E1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new C1(t),e.set(t,n)),n}}class C1{constructor(t){this.id=T1++,this.code=t,this.usedTimes=0}}function P1(i,t,e,n,s,o,a){const r=new tc,l=new E1,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,w,C,E,R){const L=E.fog,I=R.geometry,k=S.isMeshStandardMaterial?E.environment:null,D=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),U=D&&D.mapping===nr?D.image.height:null,O=v[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const F=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=F!==void 0?F.length:0;let G=0;I.morphAttributes.position!==void 0&&(G=1),I.morphAttributes.normal!==void 0&&(G=2),I.morphAttributes.color!==void 0&&(G=3);let $,q,W,nt;if(O){const me=bi[O];$=me.vertexShader,q=me.fragmentShader}else $=S.vertexShader,q=S.fragmentShader,l.update(S),W=l.getVertexShaderID(S),nt=l.getFragmentShaderID(S);const ot=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),it=R.isInstancedMesh===!0,j=R.isBatchedMesh===!0,tt=!!S.map,ft=!!S.matcap,et=!!D,z=!!S.aoMap,xt=!!S.lightMap,gt=!!S.bumpMap,Et=!!S.normalMap,Tt=!!S.displacementMap,Ft=!!S.emissiveMap,ht=!!S.metalnessMap,H=!!S.roughnessMap,N=S.anisotropy>0,K=S.clearcoat>0,dt=S.dispersion>0,bt=S.iridescence>0,_t=S.sheen>0,zt=S.transmission>0,Pt=N&&!!S.anisotropyMap,Ut=K&&!!S.clearcoatMap,se=K&&!!S.clearcoatNormalMap,Rt=K&&!!S.clearcoatRoughnessMap,Wt=bt&&!!S.iridescenceMap,ie=bt&&!!S.iridescenceThicknessMap,It=_t&&!!S.sheenColorMap,Nt=_t&&!!S.sheenRoughnessMap,Jt=!!S.specularMap,te=!!S.specularColorMap,be=!!S.specularIntensityMap,at=zt&&!!S.transmissionMap,Vt=zt&&!!S.thicknessMap,Mt=!!S.gradientMap,At=!!S.alphaMap,Ot=S.alphaTest>0,Gt=!!S.alphaHash,pe=!!S.extensions;let Ue=os;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const ae={shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:q,defines:S.defines,customVertexShaderID:W,customFragmentShaderID:nt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:j,batchingColor:j&&R._colorsTexture!==null,instancing:it,instancingColor:it&&R.instanceColor!==null,instancingMorph:it&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:xo,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:ft,envMap:et,envMapMode:et&&D.mapping,envMapCubeUVHeight:U,aoMap:z,lightMap:xt,bumpMap:gt,normalMap:Et,displacementMap:d&&Tt,emissiveMap:Ft,normalMapObjectSpace:Et&&S.normalMapType===$d,normalMapTangentSpace:Et&&S.normalMapType===bu,metalnessMap:ht,roughnessMap:H,anisotropy:N,anisotropyMap:Pt,clearcoat:K,clearcoatMap:Ut,clearcoatNormalMap:se,clearcoatRoughnessMap:Rt,dispersion:dt,iridescence:bt,iridescenceMap:Wt,iridescenceThicknessMap:ie,sheen:_t,sheenColorMap:It,sheenRoughnessMap:Nt,specularMap:Jt,specularColorMap:te,specularIntensityMap:be,transmission:zt,transmissionMap:at,thicknessMap:Vt,gradientMap:Mt,opaque:S.transparent===!1&&S.blending===ao&&S.alphaToCoverage===!1,alphaMap:At,alphaTest:Ot,alphaHash:Gt,combine:S.combine,mapUv:tt&&g(S.map.channel),aoMapUv:z&&g(S.aoMap.channel),lightMapUv:xt&&g(S.lightMap.channel),bumpMapUv:gt&&g(S.bumpMap.channel),normalMapUv:Et&&g(S.normalMap.channel),displacementMapUv:Tt&&g(S.displacementMap.channel),emissiveMapUv:Ft&&g(S.emissiveMap.channel),metalnessMapUv:ht&&g(S.metalnessMap.channel),roughnessMapUv:H&&g(S.roughnessMap.channel),anisotropyMapUv:Pt&&g(S.anisotropyMap.channel),clearcoatMapUv:Ut&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&g(S.sheenRoughnessMap.channel),specularMapUv:Jt&&g(S.specularMap.channel),specularColorMapUv:te&&g(S.specularColorMap.channel),specularIntensityMapUv:be&&g(S.specularIntensityMap.channel),transmissionMapUv:at&&g(S.transmissionMap.channel),thicknessMapUv:Vt&&g(S.thicknessMap.channel),alphaMapUv:At&&g(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Et||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(tt||At),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Q,skinning:R.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:G,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&Le.getTransfer(S.map.colorSpace)===ke,decodeVideoTextureEmissive:Ft&&S.emissiveMap.isVideoTexture===!0&&Le.getTransfer(S.emissiveMap.colorSpace)===ke,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===Fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===!0||j)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)w.push(C),w.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(_(w,S),M(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function M(S,w){r.disableAll(),w.supportsVertexTextures&&r.enable(0),w.instancing&&r.enable(1),w.instancingColor&&r.enable(2),w.instancingMorph&&r.enable(3),w.matcap&&r.enable(4),w.envMap&&r.enable(5),w.normalMapObjectSpace&&r.enable(6),w.normalMapTangentSpace&&r.enable(7),w.clearcoat&&r.enable(8),w.iridescence&&r.enable(9),w.alphaTest&&r.enable(10),w.vertexColors&&r.enable(11),w.vertexAlphas&&r.enable(12),w.vertexUv1s&&r.enable(13),w.vertexUv2s&&r.enable(14),w.vertexUv3s&&r.enable(15),w.vertexTangents&&r.enable(16),w.anisotropy&&r.enable(17),w.alphaHash&&r.enable(18),w.batching&&r.enable(19),w.dispersion&&r.enable(20),w.batchingColor&&r.enable(21),S.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reverseDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),S.push(r.mask)}function x(S){const w=v[S.type];let C;if(w){const E=bi[w];C=Zo.clone(E.uniforms)}else C=S.uniforms;return C}function b(S,w){let C;for(let E=0,R=h.length;E<R;E++){const L=h[E];if(L.cacheKey===w){C=L,++C.usedTimes;break}}return C===void 0&&(C=new A1(i,w,S,o),h.push(C)),C}function y(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:h,dispose:T}}function R1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function n(a){i.delete(a)}function s(a,r,l){i.get(a)[r]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function L1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,v,g,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:g,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=f),t++,p}function r(u,d,m,v,g,f){const p=a(u,d,m,v,g,f);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function l(u,d,m,v,g,f){const p=a(u,d,m,v,g,f);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||L1),n.length>1&&n.sort(d||Th),s.length>1&&s.sort(d||Th)}function h(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:r,unshift:l,finish:h,sort:c}}function I1(){let i=new WeakMap;function t(n,s){const o=i.get(n);let a;return o===void 0?(a=new Eh,i.set(n,[a])):s>=o.length?(a=new Eh,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function F1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Bt};break;case"SpotLight":e={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function D1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let N1=0;function U1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k1(i){const t=new F1,e=D1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,o=new de,a=new de;function r(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,v=0,g=0,f=0,p=0,_=0,M=0,x=0,b=0,y=0,A=0;c.sort(U1);for(let S=0,w=c.length;S<w;S++){const C=c[S],E=C.color,R=C.intensity,L=C.distance,I=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=E.r*R,u+=E.g*R,d+=E.b*R;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],R);A++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const D=C.shadow,U=e.get(C);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=I,n.directionalShadowMatrix[m]=C.shadow.matrix,_++}n.directional[m]=k,m++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(E).multiplyScalar(R),k.distance=L,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[g]=k;const D=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,D.updateMatrices(C),C.castShadow&&y++),n.spotLightMatrix[g]=D.matrix,C.castShadow){const U=e.get(C);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,n.spotShadow[g]=U,n.spotShadowMap[g]=I,x++}g++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(E).multiplyScalar(R),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[f]=k,f++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const D=C.shadow,U=e.get(C);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,U.shadowCameraNear=D.camera.near,U.shadowCameraFar=D.camera.far,n.pointShadow[v]=U,n.pointShadowMap[v]=I,n.pointShadowMatrix[v]=C.shadow.matrix,M++}n.point[v]=k,v++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(R),k.groundColor.copy(C.groundColor).multiplyScalar(R),n.hemi[p]=k,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==m||T.pointLength!==v||T.spotLength!==g||T.rectAreaLength!==f||T.hemiLength!==p||T.numDirectionalShadows!==_||T.numPointShadows!==M||T.numSpotShadows!==x||T.numSpotMaps!==b||T.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=f,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+b-y,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=A,T.directionalLength=m,T.pointLength=v,T.spotLength=g,T.rectAreaLength=f,T.hemiLength=p,T.numDirectionalShadows=_,T.numPointShadows=M,T.numSpotShadows=x,T.numSpotMaps=b,T.numLightProbes=A,n.version=N1++)}function l(c,h){let u=0,d=0,m=0,v=0,g=0;const f=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),u++}else if(M.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),m++}else if(M.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(f),g++}}}return{setup:r,setupView:l,state:n}}function Ch(i){const t=new k1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function z1(i){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let r;return a===void 0?(r=new Ch(i),t.set(s,[r])):o>=a.length?(r=new Ch(i),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}const B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O1=`uniform sampler2D shadow_pass;
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
}`;function H1(i,t,e){let n=new ic;const s=new qt,o=new qt,a=new Ge,r=new Qp({depthPacking:Yd}),l=new Jp,c={},h=e.maxTextureSize,u={[ls]:Fn,[Fn]:ls,[en]:en},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:B1,fragmentShader:O1}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new jt;v.setAttribute("position",new J(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ze(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(y,A,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),E=i.state;E.setBlending(ki),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);const R=p!==Ii&&this.type===Ii,L=p===Ii&&this.type!==Ii;for(let I=0,k=y.length;I<k;I++){const D=y[I],U=D.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const O=U.getFrameExtents();if(s.multiply(O),o.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/O.x),s.x=o.x*O.x,U.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/O.y),s.y=o.y*O.y,U.mapSize.y=o.y)),U.map===null||R===!0||L===!0){const Z=this.type!==Ii?{minFilter:zn,magFilter:zn}:{};U.map!==null&&U.map.dispose(),U.map=new Zn(s.x,s.y,Z),U.map.texture.name=D.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const F=U.getViewportCount();for(let Z=0;Z<F;Z++){const G=U.getViewport(Z);a.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),E.viewport(a),U.updateMatrices(D,Z),n=U.getFrustum(),x(A,T,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===Ii&&_(U,T),U.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(S,w,C)};function _(y,A){const T=t.update(g);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Zn(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(A,null,T,d,g,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(A,null,T,m,g,null)}function M(y,A,T,S){let w=null;const C=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)w=C;else if(w=T.isPointLight===!0?l:r,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const E=w.uuid,R=A.uuid;let L=c[E];L===void 0&&(L={},c[E]=L);let I=L[R];I===void 0&&(I=w.clone(),L[R]=I,A.addEventListener("dispose",b)),w=I}if(w.visible=A.visible,w.wireframe=A.wireframe,S===Ii?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const E=i.properties.get(w);E.light=T}return w}function x(y,A,T,S,w){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&w===Ii)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const R=t.update(y),L=y.material;if(Array.isArray(L)){const I=R.groups;for(let k=0,D=I.length;k<D;k++){const U=I[k],O=L[U.materialIndex];if(O&&O.visible){const F=M(y,O,S,w);y.onBeforeShadow(i,y,A,T,R,F,U),i.renderBufferDirect(T,null,R,F,y,U),y.onAfterShadow(i,y,A,T,R,F,U)}}}else if(L.visible){const I=M(y,L,S,w);y.onBeforeShadow(i,y,A,T,R,I,null),i.renderBufferDirect(T,null,R,I,y,null),y.onAfterShadow(i,y,A,T,R,I,null)}}const E=y.children;for(let R=0,L=E.length;R<L;R++)x(E[R],A,T,S,w)}function b(y){y.target.removeEventListener("dispose",b);for(const T in c){const S=c[T],w=y.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const W1={[il]:sl,[ol]:ll,[al]:cl,[zi]:rl,[sl]:il,[ll]:ol,[cl]:al,[rl]:zi};function V1(i,t){function e(){let at=!1;const Vt=new Ge;let Mt=null;const At=new Ge(0,0,0,0);return{setMask:function(Ot){Mt!==Ot&&!at&&(i.colorMask(Ot,Ot,Ot,Ot),Mt=Ot)},setLocked:function(Ot){at=Ot},setClear:function(Ot,Gt,pe,Ue,ae){ae===!0&&(Ot*=Ue,Gt*=Ue,pe*=Ue),Vt.set(Ot,Gt,pe,Ue),At.equals(Vt)===!1&&(i.clearColor(Ot,Gt,pe,Ue),At.copy(Vt))},reset:function(){at=!1,Mt=null,At.set(-1,0,0,0)}}}function n(){let at=!1,Vt=!1,Mt=null,At=null,Ot=null;return{setReversed:function(Gt){if(Vt!==Gt){const pe=t.get("EXT_clip_control");Vt?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT);const Ue=Ot;Ot=null,this.setClear(Ue)}Vt=Gt},getReversed:function(){return Vt},setTest:function(Gt){Gt?ot(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(Gt){Mt!==Gt&&!at&&(i.depthMask(Gt),Mt=Gt)},setFunc:function(Gt){if(Vt&&(Gt=W1[Gt]),At!==Gt){switch(Gt){case il:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case ol:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=Gt}},setLocked:function(Gt){at=Gt},setClear:function(Gt){Ot!==Gt&&(Vt&&(Gt=1-Gt),i.clearDepth(Gt),Ot=Gt)},reset:function(){at=!1,Mt=null,At=null,Ot=null,Vt=!1}}}function s(){let at=!1,Vt=null,Mt=null,At=null,Ot=null,Gt=null,pe=null,Ue=null,ae=null;return{setTest:function(me){at||(me?ot(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(me){Vt!==me&&!at&&(i.stencilMask(me),Vt=me)},setFunc:function(me,Je,Re){(Mt!==me||At!==Je||Ot!==Re)&&(i.stencilFunc(me,Je,Re),Mt=me,At=Je,Ot=Re)},setOp:function(me,Je,Re){(Gt!==me||pe!==Je||Ue!==Re)&&(i.stencilOp(me,Je,Re),Gt=me,pe=Je,Ue=Re)},setLocked:function(me){at=me},setClear:function(me){ae!==me&&(i.clearStencil(me),ae=me)},reset:function(){at=!1,Vt=null,Mt=null,At=null,Ot=null,Gt=null,pe=null,Ue=null,ae=null}}}const o=new e,a=new n,r=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,m=[],v=null,g=!1,f=null,p=null,_=null,M=null,x=null,b=null,y=null,A=new Bt(0,0,0),T=0,S=!1,w=null,C=null,E=null,R=null,L=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,D=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=D>=1):U.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=D>=2);let O=null,F={};const Z=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),$=new Ge().fromArray(Z),q=new Ge().fromArray(G);function W(at,Vt,Mt,At){const Ot=new Uint8Array(4),Gt=i.createTexture();i.bindTexture(at,Gt),i.texParameteri(at,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(at,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<Mt;pe++)at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?i.texImage3D(Vt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(Vt+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return Gt}const nt={};nt[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),ot(i.DEPTH_TEST),a.setFunc(zi),gt(!1),Et(xc),ot(i.CULL_FACE),z(ki);function ot(at){h[at]!==!0&&(i.enable(at),h[at]=!0)}function Q(at){h[at]!==!1&&(i.disable(at),h[at]=!1)}function it(at,Vt){return u[at]!==Vt?(i.bindFramebuffer(at,Vt),u[at]=Vt,at===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Vt),at===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Vt),!0):!1}function j(at,Vt){let Mt=m,At=!1;if(at){Mt=d.get(Vt),Mt===void 0&&(Mt=[],d.set(Vt,Mt));const Ot=at.textures;if(Mt.length!==Ot.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let Gt=0,pe=Ot.length;Gt<pe;Gt++)Mt[Gt]=i.COLOR_ATTACHMENT0+Gt;Mt.length=Ot.length,At=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,At=!0);At&&i.drawBuffers(Mt)}function tt(at){return v!==at?(i.useProgram(at),v=at,!0):!1}const ft={[Ts]:i.FUNC_ADD,[bd]:i.FUNC_SUBTRACT,[Sd]:i.FUNC_REVERSE_SUBTRACT};ft[Ad]=i.MIN,ft[Td]=i.MAX;const et={[Ed]:i.ZERO,[Cd]:i.ONE,[Pd]:i.SRC_COLOR,[el]:i.SRC_ALPHA,[Nd]:i.SRC_ALPHA_SATURATE,[Fd]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[nl]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Id]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[kd]:i.ONE_MINUS_CONSTANT_COLOR,[zd]:i.CONSTANT_ALPHA,[Bd]:i.ONE_MINUS_CONSTANT_ALPHA};function z(at,Vt,Mt,At,Ot,Gt,pe,Ue,ae,me){if(at===ki){g===!0&&(Q(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),at!==yd){if(at!==f||me!==S){if((p!==Ts||x!==Ts)&&(i.blendEquation(i.FUNC_ADD),p=Ts,x=Ts),me)switch(at){case ao:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}_=null,M=null,b=null,y=null,A.set(0,0,0),T=0,f=at,S=me}return}Ot=Ot||Vt,Gt=Gt||Mt,pe=pe||At,(Vt!==p||Ot!==x)&&(i.blendEquationSeparate(ft[Vt],ft[Ot]),p=Vt,x=Ot),(Mt!==_||At!==M||Gt!==b||pe!==y)&&(i.blendFuncSeparate(et[Mt],et[At],et[Gt],et[pe]),_=Mt,M=At,b=Gt,y=pe),(Ue.equals(A)===!1||ae!==T)&&(i.blendColor(Ue.r,Ue.g,Ue.b,ae),A.copy(Ue),T=ae),f=at,S=!1}function xt(at,Vt){at.side===en?Q(i.CULL_FACE):ot(i.CULL_FACE);let Mt=at.side===Fn;Vt&&(Mt=!Mt),gt(Mt),at.blending===ao&&at.transparent===!1?z(ki):z(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),a.setFunc(at.depthFunc),a.setTest(at.depthTest),a.setMask(at.depthWrite),o.setMask(at.colorWrite);const At=at.stencilWrite;r.setTest(At),At&&(r.setMask(at.stencilWriteMask),r.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),r.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),Ft(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(at){w!==at&&(at?i.frontFace(i.CW):i.frontFace(i.CCW),w=at)}function Et(at){at!==Md?(ot(i.CULL_FACE),at!==C&&(at===xc?i.cullFace(i.BACK):at===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),C=at}function Tt(at){at!==E&&(k&&i.lineWidth(at),E=at)}function Ft(at,Vt,Mt){at?(ot(i.POLYGON_OFFSET_FILL),(R!==Vt||L!==Mt)&&(i.polygonOffset(Vt,Mt),R=Vt,L=Mt)):Q(i.POLYGON_OFFSET_FILL)}function ht(at){at?ot(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function H(at){at===void 0&&(at=i.TEXTURE0+I-1),O!==at&&(i.activeTexture(at),O=at)}function N(at,Vt,Mt){Mt===void 0&&(O===null?Mt=i.TEXTURE0+I-1:Mt=O);let At=F[Mt];At===void 0&&(At={type:void 0,texture:void 0},F[Mt]=At),(At.type!==at||At.texture!==Vt)&&(O!==Mt&&(i.activeTexture(Mt),O=Mt),i.bindTexture(at,Vt||nt[at]),At.type=at,At.texture=Vt)}function K(){const at=F[O];at!==void 0&&at.type!==void 0&&(i.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function bt(){try{i.compressedTexImage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function _t(){try{i.texSubImage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function zt(){try{i.texSubImage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Pt(){try{i.compressedTexSubImage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function se(){try{i.texStorage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Rt(){try{i.texStorage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Wt(){try{i.texImage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function ie(){try{i.texImage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function It(at){$.equals(at)===!1&&(i.scissor(at.x,at.y,at.z,at.w),$.copy(at))}function Nt(at){q.equals(at)===!1&&(i.viewport(at.x,at.y,at.z,at.w),q.copy(at))}function Jt(at,Vt){let Mt=c.get(Vt);Mt===void 0&&(Mt=new WeakMap,c.set(Vt,Mt));let At=Mt.get(at);At===void 0&&(At=i.getUniformBlockIndex(Vt,at.name),Mt.set(at,At))}function te(at,Vt){const At=c.get(Vt).get(at);l.get(Vt)!==At&&(i.uniformBlockBinding(Vt,At,at.__bindingPointIndex),l.set(Vt,At))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},O=null,F={},u={},d=new WeakMap,m=[],v=null,g=!1,f=null,p=null,_=null,M=null,x=null,b=null,y=null,A=new Bt(0,0,0),T=0,S=!1,w=null,C=null,E=null,R=null,L=null,$.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:ot,disable:Q,bindFramebuffer:it,drawBuffers:j,useProgram:tt,setBlending:z,setMaterial:xt,setFlipSided:gt,setCullFace:Et,setLineWidth:Tt,setPolygonOffset:Ft,setScissorTest:ht,activeTexture:H,bindTexture:N,unbindTexture:K,compressedTexImage2D:dt,compressedTexImage3D:bt,texImage2D:Wt,texImage3D:ie,updateUBOMapping:Jt,uniformBlockBinding:te,texStorage2D:se,texStorage3D:Rt,texSubImage2D:_t,texSubImage3D:zt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Ut,scissor:It,viewport:Nt,reset:be}}function G1(i,t,e,n,s,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(H,N){return m?new OffscreenCanvas(H,N):Xa("canvas")}function g(H,N,K){let dt=1;const bt=ht(H);if((bt.width>K||bt.height>K)&&(dt=K/Math.max(bt.width,bt.height)),dt<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const _t=Math.floor(dt*bt.width),zt=Math.floor(dt*bt.height);u===void 0&&(u=v(_t,zt));const Pt=N?v(_t,zt):u;return Pt.width=_t,Pt.height=zt,Pt.getContext("2d").drawImage(H,0,0,_t,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+_t+"x"+zt+")."),Pt}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),H;return H}function f(H){return H.generateMipmaps}function p(H){i.generateMipmap(H)}function _(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(H,N,K,dt,bt=!1){if(H!==null){if(i[H]!==void 0)return i[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let _t=N;if(N===i.RED&&(K===i.FLOAT&&(_t=i.R32F),K===i.HALF_FLOAT&&(_t=i.R16F),K===i.UNSIGNED_BYTE&&(_t=i.R8)),N===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(_t=i.R8UI),K===i.UNSIGNED_SHORT&&(_t=i.R16UI),K===i.UNSIGNED_INT&&(_t=i.R32UI),K===i.BYTE&&(_t=i.R8I),K===i.SHORT&&(_t=i.R16I),K===i.INT&&(_t=i.R32I)),N===i.RG&&(K===i.FLOAT&&(_t=i.RG32F),K===i.HALF_FLOAT&&(_t=i.RG16F),K===i.UNSIGNED_BYTE&&(_t=i.RG8)),N===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(_t=i.RG8UI),K===i.UNSIGNED_SHORT&&(_t=i.RG16UI),K===i.UNSIGNED_INT&&(_t=i.RG32UI),K===i.BYTE&&(_t=i.RG8I),K===i.SHORT&&(_t=i.RG16I),K===i.INT&&(_t=i.RG32I)),N===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(_t=i.RGB8UI),K===i.UNSIGNED_SHORT&&(_t=i.RGB16UI),K===i.UNSIGNED_INT&&(_t=i.RGB32UI),K===i.BYTE&&(_t=i.RGB8I),K===i.SHORT&&(_t=i.RGB16I),K===i.INT&&(_t=i.RGB32I)),N===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(_t=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(_t=i.RGBA16UI),K===i.UNSIGNED_INT&&(_t=i.RGBA32UI),K===i.BYTE&&(_t=i.RGBA8I),K===i.SHORT&&(_t=i.RGBA16I),K===i.INT&&(_t=i.RGBA32I)),N===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(_t=i.RGB9_E5),N===i.RGBA){const zt=bt?Va:Le.getTransfer(dt);K===i.FLOAT&&(_t=i.RGBA32F),K===i.HALF_FLOAT&&(_t=i.RGBA16F),K===i.UNSIGNED_BYTE&&(_t=zt===ke?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(_t=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(_t=i.RGB5_A1)}return(_t===i.R16F||_t===i.R32F||_t===i.RG16F||_t===i.RG32F||_t===i.RGBA16F||_t===i.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function x(H,N){let K;return H?N===null||N===Ls||N===go?K=i.DEPTH24_STENCIL8:N===vi?K=i.DEPTH32F_STENCIL8:N===Yo&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):N===null||N===Ls||N===go?K=i.DEPTH_COMPONENT24:N===vi?K=i.DEPTH_COMPONENT32F:N===Yo&&(K=i.DEPTH_COMPONENT16),K}function b(H,N){return f(H)===!0||H.isFramebufferTexture&&H.minFilter!==zn&&H.minFilter!==gi?Math.log2(Math.max(N.width,N.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?N.mipmaps.length:1}function y(H){const N=H.target;N.removeEventListener("dispose",y),T(N),N.isVideoTexture&&h.delete(N)}function A(H){const N=H.target;N.removeEventListener("dispose",A),w(N)}function T(H){const N=n.get(H);if(N.__webglInit===void 0)return;const K=H.source,dt=d.get(K);if(dt){const bt=dt[N.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&S(H),Object.keys(dt).length===0&&d.delete(K)}n.remove(H)}function S(H){const N=n.get(H);i.deleteTexture(N.__webglTexture);const K=H.source,dt=d.get(K);delete dt[N.__cacheKey],a.memory.textures--}function w(H){const N=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(N.__webglFramebuffer[dt]))for(let bt=0;bt<N.__webglFramebuffer[dt].length;bt++)i.deleteFramebuffer(N.__webglFramebuffer[dt][bt]);else i.deleteFramebuffer(N.__webglFramebuffer[dt]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[dt])}else{if(Array.isArray(N.__webglFramebuffer))for(let dt=0;dt<N.__webglFramebuffer.length;dt++)i.deleteFramebuffer(N.__webglFramebuffer[dt]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let dt=0;dt<N.__webglColorRenderbuffer.length;dt++)N.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[dt]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}const K=H.textures;for(let dt=0,bt=K.length;dt<bt;dt++){const _t=n.get(K[dt]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(K[dt])}n.remove(H)}let C=0;function E(){C=0}function R(){const H=C;return H>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+s.maxTextures),C+=1,H}function L(H){const N=[];return N.push(H.wrapS),N.push(H.wrapT),N.push(H.wrapR||0),N.push(H.magFilter),N.push(H.minFilter),N.push(H.anisotropy),N.push(H.internalFormat),N.push(H.format),N.push(H.type),N.push(H.generateMipmaps),N.push(H.premultiplyAlpha),N.push(H.flipY),N.push(H.unpackAlignment),N.push(H.colorSpace),N.join()}function I(H,N){const K=n.get(H);if(H.isVideoTexture&&Tt(H),H.isRenderTargetTexture===!1&&H.version>0&&K.__version!==H.version){const dt=H.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(K,H,N);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+N)}function k(H,N){const K=n.get(H);if(H.version>0&&K.__version!==H.version){q(K,H,N);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+N)}function D(H,N){const K=n.get(H);if(H.version>0&&K.__version!==H.version){q(K,H,N);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+N)}function U(H,N){const K=n.get(H);if(H.version>0&&K.__version!==H.version){W(K,H,N);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+N)}const O={[Ai]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},F={[zn]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[zo]:i.NEAREST_MIPMAP_LINEAR,[gi]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},Z={[qd]:i.NEVER,[tp]:i.ALWAYS,[Zd]:i.LESS,[Su]:i.LEQUAL,[jd]:i.EQUAL,[Jd]:i.GEQUAL,[Kd]:i.GREATER,[Qd]:i.NOTEQUAL};function G(H,N){if(N.type===vi&&t.has("OES_texture_float_linear")===!1&&(N.magFilter===gi||N.magFilter===Da||N.magFilter===zo||N.magFilter===ns||N.minFilter===gi||N.minFilter===Da||N.minFilter===zo||N.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,O[N.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,O[N.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,O[N.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,F[N.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,F[N.minFilter]),N.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,Z[N.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(N.magFilter===zn||N.minFilter!==zo&&N.minFilter!==ns||N.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(N.anisotropy>1||n.get(N).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(H,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,s.getMaxAnisotropy())),n.get(N).__currentAnisotropy=N.anisotropy}}}function $(H,N){let K=!1;H.__webglInit===void 0&&(H.__webglInit=!0,N.addEventListener("dispose",y));const dt=N.source;let bt=d.get(dt);bt===void 0&&(bt={},d.set(dt,bt));const _t=L(N);if(_t!==H.__cacheKey){bt[_t]===void 0&&(bt[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),bt[_t].usedTimes++;const zt=bt[H.__cacheKey];zt!==void 0&&(bt[H.__cacheKey].usedTimes--,zt.usedTimes===0&&S(N)),H.__cacheKey=_t,H.__webglTexture=bt[_t].texture}return K}function q(H,N,K){let dt=i.TEXTURE_2D;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),N.isData3DTexture&&(dt=i.TEXTURE_3D);const bt=$(H,N),_t=N.source;e.bindTexture(dt,H.__webglTexture,i.TEXTURE0+K);const zt=n.get(_t);if(_t.version!==zt.__version||bt===!0){e.activeTexture(i.TEXTURE0+K);const Pt=Le.getPrimaries(Le.workingColorSpace),Ut=N.colorSpace===ii?null:Le.getPrimaries(N.colorSpace),se=N.colorSpace===ii||Pt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,N.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,N.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Rt=g(N.image,!1,s.maxTextureSize);Rt=Ft(N,Rt);const Wt=o.convert(N.format,N.colorSpace),ie=o.convert(N.type);let It=M(N.internalFormat,Wt,ie,N.colorSpace,N.isVideoTexture);G(dt,N);let Nt;const Jt=N.mipmaps,te=N.isVideoTexture!==!0,be=zt.__version===void 0||bt===!0,at=_t.dataReady,Vt=b(N,Rt);if(N.isDepthTexture)It=x(N.format===vo,N.type),be&&(te?e.texStorage2D(i.TEXTURE_2D,1,It,Rt.width,Rt.height):e.texImage2D(i.TEXTURE_2D,0,It,Rt.width,Rt.height,0,Wt,ie,null));else if(N.isDataTexture)if(Jt.length>0){te&&be&&e.texStorage2D(i.TEXTURE_2D,Vt,It,Jt[0].width,Jt[0].height);for(let Mt=0,At=Jt.length;Mt<At;Mt++)Nt=Jt[Mt],te?at&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,Wt,ie,Nt.data):e.texImage2D(i.TEXTURE_2D,Mt,It,Nt.width,Nt.height,0,Wt,ie,Nt.data);N.generateMipmaps=!1}else te?(be&&e.texStorage2D(i.TEXTURE_2D,Vt,It,Rt.width,Rt.height),at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Wt,ie,Rt.data)):e.texImage2D(i.TEXTURE_2D,0,It,Rt.width,Rt.height,0,Wt,ie,Rt.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){te&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,It,Jt[0].width,Jt[0].height,Rt.depth);for(let Mt=0,At=Jt.length;Mt<At;Mt++)if(Nt=Jt[Mt],N.format!==$n)if(Wt!==null)if(te){if(at)if(N.layerUpdates.size>0){const Ot=oh(Nt.width,Nt.height,N.format,N.type);for(const Gt of N.layerUpdates){const pe=Nt.data.subarray(Gt*Ot/Nt.data.BYTES_PER_ELEMENT,(Gt+1)*Ot/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,Gt,Nt.width,Nt.height,1,Wt,pe)}N.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,Rt.depth,Wt,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,It,Nt.width,Nt.height,Rt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,Rt.depth,Wt,ie,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,It,Nt.width,Nt.height,Rt.depth,0,Wt,ie,Nt.data)}else{te&&be&&e.texStorage2D(i.TEXTURE_2D,Vt,It,Jt[0].width,Jt[0].height);for(let Mt=0,At=Jt.length;Mt<At;Mt++)Nt=Jt[Mt],N.format!==$n?Wt!==null?te?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,Wt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,It,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?at&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,Wt,ie,Nt.data):e.texImage2D(i.TEXTURE_2D,Mt,It,Nt.width,Nt.height,0,Wt,ie,Nt.data)}else if(N.isDataArrayTexture)if(te){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,It,Rt.width,Rt.height,Rt.depth),at)if(N.layerUpdates.size>0){const Mt=oh(Rt.width,Rt.height,N.format,N.type);for(const At of N.layerUpdates){const Ot=Rt.data.subarray(At*Mt/Rt.data.BYTES_PER_ELEMENT,(At+1)*Mt/Rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,Rt.width,Rt.height,1,Wt,ie,Ot)}N.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Wt,ie,Rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,Rt.width,Rt.height,Rt.depth,0,Wt,ie,Rt.data);else if(N.isData3DTexture)te?(be&&e.texStorage3D(i.TEXTURE_3D,Vt,It,Rt.width,Rt.height,Rt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Wt,ie,Rt.data)):e.texImage3D(i.TEXTURE_3D,0,It,Rt.width,Rt.height,Rt.depth,0,Wt,ie,Rt.data);else if(N.isFramebufferTexture){if(be)if(te)e.texStorage2D(i.TEXTURE_2D,Vt,It,Rt.width,Rt.height);else{let Mt=Rt.width,At=Rt.height;for(let Ot=0;Ot<Vt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,It,Mt,At,0,Wt,ie,null),Mt>>=1,At>>=1}}else if(Jt.length>0){if(te&&be){const Mt=ht(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Vt,It,Mt.width,Mt.height)}for(let Mt=0,At=Jt.length;Mt<At;Mt++)Nt=Jt[Mt],te?at&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Wt,ie,Nt):e.texImage2D(i.TEXTURE_2D,Mt,It,Wt,ie,Nt);N.generateMipmaps=!1}else if(te){if(be){const Mt=ht(Rt);e.texStorage2D(i.TEXTURE_2D,Vt,It,Mt.width,Mt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,ie,Rt)}else e.texImage2D(i.TEXTURE_2D,0,It,Wt,ie,Rt);f(N)&&p(dt),zt.__version=_t.version,N.onUpdate&&N.onUpdate(N)}H.__version=N.version}function W(H,N,K){if(N.image.length!==6)return;const dt=$(H,N),bt=N.source;e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+K);const _t=n.get(bt);if(bt.version!==_t.__version||dt===!0){e.activeTexture(i.TEXTURE0+K);const zt=Le.getPrimaries(Le.workingColorSpace),Pt=N.colorSpace===ii?null:Le.getPrimaries(N.colorSpace),Ut=N.colorSpace===ii||zt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,N.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,N.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const se=N.isCompressedTexture||N.image[0].isCompressedTexture,Rt=N.image[0]&&N.image[0].isDataTexture,Wt=[];for(let At=0;At<6;At++)!se&&!Rt?Wt[At]=g(N.image[At],!0,s.maxCubemapSize):Wt[At]=Rt?N.image[At].image:N.image[At],Wt[At]=Ft(N,Wt[At]);const ie=Wt[0],It=o.convert(N.format,N.colorSpace),Nt=o.convert(N.type),Jt=M(N.internalFormat,It,Nt,N.colorSpace),te=N.isVideoTexture!==!0,be=_t.__version===void 0||dt===!0,at=bt.dataReady;let Vt=b(N,ie);G(i.TEXTURE_CUBE_MAP,N);let Mt;if(se){te&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Jt,ie.width,ie.height);for(let At=0;At<6;At++){Mt=Wt[At].mipmaps;for(let Ot=0;Ot<Mt.length;Ot++){const Gt=Mt[Ot];N.format!==$n?It!==null?te?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ot,0,0,Gt.width,Gt.height,It,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ot,Jt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ot,0,0,Gt.width,Gt.height,It,Nt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ot,Jt,Gt.width,Gt.height,0,It,Nt,Gt.data)}}}else{if(Mt=N.mipmaps,te&&be){Mt.length>0&&Vt++;const At=ht(Wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Jt,At.width,At.height)}for(let At=0;At<6;At++)if(Rt){te?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Wt[At].width,Wt[At].height,It,Nt,Wt[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Jt,Wt[At].width,Wt[At].height,0,It,Nt,Wt[At].data);for(let Ot=0;Ot<Mt.length;Ot++){const pe=Mt[Ot].image[At].image;te?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ot+1,0,0,pe.width,pe.height,It,Nt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ot+1,Jt,pe.width,pe.height,0,It,Nt,pe.data)}}else{te?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,It,Nt,Wt[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Jt,It,Nt,Wt[At]);for(let Ot=0;Ot<Mt.length;Ot++){const Gt=Mt[Ot];te?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ot+1,0,0,It,Nt,Gt.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ot+1,Jt,It,Nt,Gt.image[At])}}}f(N)&&p(i.TEXTURE_CUBE_MAP),_t.__version=bt.version,N.onUpdate&&N.onUpdate(N)}H.__version=N.version}function nt(H,N,K,dt,bt,_t){const zt=o.convert(K.format,K.colorSpace),Pt=o.convert(K.type),Ut=M(K.internalFormat,zt,Pt,K.colorSpace),se=n.get(N),Rt=n.get(K);if(Rt.__renderTarget=N,!se.__hasExternalTextures){const Wt=Math.max(1,N.width>>_t),ie=Math.max(1,N.height>>_t);bt===i.TEXTURE_3D||bt===i.TEXTURE_2D_ARRAY?e.texImage3D(bt,_t,Ut,Wt,ie,N.depth,0,zt,Pt,null):e.texImage2D(bt,_t,Ut,Wt,ie,0,zt,Pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,H),Et(N)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,bt,Rt.__webglTexture,0,gt(N)):(bt===i.TEXTURE_2D||bt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,bt,Rt.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(H,N,K){if(i.bindRenderbuffer(i.RENDERBUFFER,H),N.depthBuffer){const dt=N.depthTexture,bt=dt&&dt.isDepthTexture?dt.type:null,_t=x(N.stencilBuffer,bt),zt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=gt(N);Et(N)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,_t,N.width,N.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,_t,N.width,N.height):i.renderbufferStorage(i.RENDERBUFFER,_t,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,H)}else{const dt=N.textures;for(let bt=0;bt<dt.length;bt++){const _t=dt[bt],zt=o.convert(_t.format,_t.colorSpace),Pt=o.convert(_t.type),Ut=M(_t.internalFormat,zt,Pt,_t.colorSpace),se=gt(N);K&&Et(N)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Ut,N.width,N.height):Et(N)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Ut,N.width,N.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,N.width,N.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(H,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,H),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=n.get(N.depthTexture);dt.__renderTarget=N,(!dt.__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),I(N.depthTexture,0);const bt=dt.__webglTexture,_t=gt(N);if(N.depthTexture.format===ro)Et(N)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0);else if(N.depthTexture.format===vo)Et(N)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function it(H){const N=n.get(H),K=H.isWebGLCubeRenderTarget===!0;if(N.__boundDepthTexture!==H.depthTexture){const dt=H.depthTexture;if(N.__depthDisposeCallback&&N.__depthDisposeCallback(),dt){const bt=()=>{delete N.__boundDepthTexture,delete N.__depthDisposeCallback,dt.removeEventListener("dispose",bt)};dt.addEventListener("dispose",bt),N.__depthDisposeCallback=bt}N.__boundDepthTexture=dt}if(H.depthTexture&&!N.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Q(N.__webglFramebuffer,H)}else if(K){N.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,N.__webglFramebuffer[dt]),N.__webglDepthbuffer[dt]===void 0)N.__webglDepthbuffer[dt]=i.createRenderbuffer(),ot(N.__webglDepthbuffer[dt],H,!1);else{const bt=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=N.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,_t)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer===void 0)N.__webglDepthbuffer=i.createRenderbuffer(),ot(N.__webglDepthbuffer,H,!1);else{const dt=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=N.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(H,N,K){const dt=n.get(H);N!==void 0&&nt(dt.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&it(H)}function tt(H){const N=H.texture,K=n.get(H),dt=n.get(N);H.addEventListener("dispose",A);const bt=H.textures,_t=H.isWebGLCubeRenderTarget===!0,zt=bt.length>1;if(zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=N.version,a.memory.textures++),_t){K.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(N.mipmaps&&N.mipmaps.length>0){K.__webglFramebuffer[Pt]=[];for(let Ut=0;Ut<N.mipmaps.length;Ut++)K.__webglFramebuffer[Pt][Ut]=i.createFramebuffer()}else K.__webglFramebuffer[Pt]=i.createFramebuffer()}else{if(N.mipmaps&&N.mipmaps.length>0){K.__webglFramebuffer=[];for(let Pt=0;Pt<N.mipmaps.length;Pt++)K.__webglFramebuffer[Pt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(zt)for(let Pt=0,Ut=bt.length;Pt<Ut;Pt++){const se=n.get(bt[Pt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(H.samples>0&&Et(H)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Pt=0;Pt<bt.length;Pt++){const Ut=bt[Pt];K.__webglColorRenderbuffer[Pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Pt]);const se=o.convert(Ut.format,Ut.colorSpace),Rt=o.convert(Ut.type),Wt=M(Ut.internalFormat,se,Rt,Ut.colorSpace,H.isXRRenderTarget===!0),ie=gt(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Wt,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,K.__webglColorRenderbuffer[Pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(K.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),G(i.TEXTURE_CUBE_MAP,N);for(let Pt=0;Pt<6;Pt++)if(N.mipmaps&&N.mipmaps.length>0)for(let Ut=0;Ut<N.mipmaps.length;Ut++)nt(K.__webglFramebuffer[Pt][Ut],H,N,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut);else nt(K.__webglFramebuffer[Pt],H,N,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);f(N)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let Pt=0,Ut=bt.length;Pt<Ut;Pt++){const se=bt[Pt],Rt=n.get(se);e.bindTexture(i.TEXTURE_2D,Rt.__webglTexture),G(i.TEXTURE_2D,se),nt(K.__webglFramebuffer,H,se,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,0),f(se)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Pt=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Pt=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,dt.__webglTexture),G(Pt,N),N.mipmaps&&N.mipmaps.length>0)for(let Ut=0;Ut<N.mipmaps.length;Ut++)nt(K.__webglFramebuffer[Ut],H,N,i.COLOR_ATTACHMENT0,Pt,Ut);else nt(K.__webglFramebuffer,H,N,i.COLOR_ATTACHMENT0,Pt,0);f(N)&&p(Pt),e.unbindTexture()}H.depthBuffer&&it(H)}function ft(H){const N=H.textures;for(let K=0,dt=N.length;K<dt;K++){const bt=N[K];if(f(bt)){const _t=_(H),zt=n.get(bt).__webglTexture;e.bindTexture(_t,zt),p(_t),e.unbindTexture()}}}const et=[],z=[];function xt(H){if(H.samples>0){if(Et(H)===!1){const N=H.textures,K=H.width,dt=H.height;let bt=i.COLOR_BUFFER_BIT;const _t=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(H),Pt=N.length>1;if(Pt)for(let Ut=0;Ut<N.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ut=0;Ut<N.length;Ut++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(bt|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(bt|=i.STENCIL_BUFFER_BIT)),Pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Ut]);const se=n.get(N[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,K,dt,0,0,K,dt,bt,i.NEAREST),l===!0&&(et.length=0,z.length=0,et.push(i.COLOR_ATTACHMENT0+Ut),H.depthBuffer&&H.resolveDepthBuffer===!1&&(et.push(_t),z.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pt)for(let Ut=0;Ut<N.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Ut]);const se=n.get(N[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&l){const N=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[N])}}}function gt(H){return Math.min(s.maxSamples,H.samples)}function Et(H){const N=n.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function Tt(H){const N=a.render.frame;h.get(H)!==N&&(h.set(H,N),H.update())}function Ft(H,N){const K=H.colorSpace,dt=H.format,bt=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||K!==xo&&K!==ii&&(Le.getTransfer(K)===ke?(dt!==$n||bt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),N}function ht(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(c.width=H.naturalWidth||H.width,c.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(c.width=H.displayWidth,c.height=H.displayHeight):(c.width=H.width,c.height=H.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=E,this.setTexture2D=I,this.setTexture2DArray=k,this.setTexture3D=D,this.setTextureCube=U,this.rebindTextures=j,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Et}function X1(i,t){function e(n,s=ii){let o;const a=Le.getTransfer(s);if(n===Hi)return i.UNSIGNED_BYTE;if(n===$l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return i.BYTE;if(n===mu)return i.SHORT;if(n===Yo)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===Ls)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===_i)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===xu)return i.RGB;if(n===$n)return i.RGBA;if(n===_u)return i.LUMINANCE;if(n===Mu)return i.LUMINANCE_ALPHA;if(n===ro)return i.DEPTH_COMPONENT;if(n===vo)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===wu)return i.RG;if(n===Kl)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===Na||n===Ua||n===ka||n===za)if(a===ke)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Na)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Na)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===pl||n===fl||n===ml)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===dl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ml)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===vl||n===xl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===gl||n===vl)return a===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===xl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_l||n===Ml||n===wl||n===yl||n===bl||n===Sl||n===Al||n===Tl||n===El||n===Cl||n===Pl||n===Rl||n===Ll||n===Il)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===_l)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===Fl||n===Dl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ba)return a===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===Nl||n===Ul||n===kl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ba)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===go?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$1=`
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

}`;class q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new wn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Oe({vertexShader:Y1,fragmentShader:$1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new Mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z1 extends Is{constructor(t,e){super();const n=this;let s=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,v=null;const g=new q1,f=e.getContextAttributes();let p=null,_=null;const M=[],x=[],b=new qt;let y=null;const A=new ni;A.viewport=new Ge;const T=new ni;T.viewport=new Ge;const S=[A,T],w=new s0;let C=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let W=M[q];return W===void 0&&(W=new Lr,M[q]=W),W.getTargetRaySpace()},this.getControllerGrip=function(q){let W=M[q];return W===void 0&&(W=new Lr,M[q]=W),W.getGripSpace()},this.getHand=function(q){let W=M[q];return W===void 0&&(W=new Lr,M[q]=W),W.getHandSpace()};function R(q){const W=x.indexOf(q.inputSource);if(W===-1)return;const nt=M[W];nt!==void 0&&(nt.update(q.inputSource,q.frame,c||a),nt.dispatchEvent({type:q.type,data:q.inputSource}))}function L(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",I);for(let q=0;q<M.length;q++){const W=x[q];W!==null&&(x[q]=null,M[q].disconnect(W))}C=null,E=null,g.reset(),t.setRenderTarget(p),m=null,d=null,u=null,s=null,_=null,$.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",L),s.addEventListener("inputsourceschange",I),f.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ot=null,Q=null;f.depth&&(Q=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=f.stencil?vo:ro,ot=f.stencil?go:Ls);const it={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(it),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Zn(d.textureWidth,d.textureHeight,{format:$n,type:Hi,depthTexture:new Du(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const nt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Zn(m.framebufferWidth,m.framebufferHeight,{format:$n,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(r),$.setContext(s),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(q){for(let W=0;W<q.removed.length;W++){const nt=q.removed[W],ot=x.indexOf(nt);ot>=0&&(x[ot]=null,M[ot].disconnect(nt))}for(let W=0;W<q.added.length;W++){const nt=q.added[W];let ot=x.indexOf(nt);if(ot===-1){for(let it=0;it<M.length;it++)if(it>=x.length){x.push(nt),ot=it;break}else if(x[it]===null){x[it]=nt,ot=it;break}if(ot===-1)break}const Q=M[ot];Q&&Q.connect(nt)}}const k=new P,D=new P;function U(q,W,nt){k.setFromMatrixPosition(W.matrixWorld),D.setFromMatrixPosition(nt.matrixWorld);const ot=k.distanceTo(D),Q=W.projectionMatrix.elements,it=nt.projectionMatrix.elements,j=Q[14]/(Q[10]-1),tt=Q[14]/(Q[10]+1),ft=(Q[9]+1)/Q[5],et=(Q[9]-1)/Q[5],z=(Q[8]-1)/Q[0],xt=(it[8]+1)/it[0],gt=j*z,Et=j*xt,Tt=ot/(-z+xt),Ft=Tt*-z;if(W.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ft),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Q[10]===-1)q.projectionMatrix.copy(W.projectionMatrix),q.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const ht=j+Tt,H=tt+Tt,N=gt-Ft,K=Et+(ot-Ft),dt=ft*tt/H*ht,bt=et*tt/H*ht;q.projectionMatrix.makePerspective(N,K,dt,bt,ht,H),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function O(q,W){W===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(W.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let W=q.near,nt=q.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),w.near=T.near=A.near=W,w.far=T.far=A.far=nt,(C!==w.near||E!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,E=w.far),A.layers.mask=q.layers.mask|2,T.layers.mask=q.layers.mask|4,w.layers.mask=A.layers.mask|T.layers.mask;const ot=q.parent,Q=w.cameras;O(w,ot);for(let it=0;it<Q.length;it++)O(Q[it],ot);Q.length===2?U(w,A,T):w.projectionMatrix.copy(A.projectionMatrix),F(q,w,ot)};function F(q,W,nt){nt===null?q.matrix.copy(W.matrixWorld):(q.matrix.copy(nt.matrixWorld),q.matrix.invert(),q.matrix.multiply(W.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(W.projectionMatrix),q.projectionMatrixInverse.copy(W.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$o*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let Z=null;function G(q,W){if(h=W.getViewerPose(c||a),v=W,h!==null){const nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let ot=!1;nt.length!==w.cameras.length&&(w.cameras.length=0,ot=!0);for(let j=0;j<nt.length;j++){const tt=nt[j];let ft=null;if(m!==null)ft=m.getViewport(tt);else{const z=u.getViewSubImage(d,tt);ft=z.viewport,j===0&&(t.setRenderTargetTextures(_,z.colorTexture,d.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(_))}let et=S[j];et===void 0&&(et=new ni,et.layers.enable(j),et.viewport=new Ge,S[j]=et),et.matrix.fromArray(tt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(tt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ft.x,ft.y,ft.width,ft.height),j===0&&(w.matrix.copy(et.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ot===!0&&w.cameras.push(et)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const j=u.getDepthInformation(nt[0]);j&&j.isValid&&j.texture&&g.init(t,j,s.renderState)}}for(let nt=0;nt<M.length;nt++){const ot=x[nt],Q=M[nt];ot!==null&&Q!==void 0&&Q.update(ot,W,c||a)}Z&&Z(q,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),v=null}const $=new ku;$.setAnimationLoop(G),this.setAnimationLoop=function(q){Z=q},this.dispose=function(){}}}const Ms=new Bn,j1=new de;function K1(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Pu(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,_,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(f,p):p.isMeshToonMaterial?(o(f,p),u(f,p)):p.isMeshPhongMaterial?(o(f,p),h(f,p)):p.isMeshStandardMaterial?(o(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,x)):p.isMeshMatcapMaterial?(o(f,p),v(f,p)):p.isMeshDepthMaterial?o(f,p):p.isMeshDistanceMaterial?(o(f,p),g(f,p)):p.isMeshNormalMaterial?o(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&r(f,p)):p.isPointsMaterial?l(f,p,_,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Fn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Fn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=t.get(p),M=_.envMap,x=_.envMapRotation;M&&(f.envMap.value=M,Ms.copy(x),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),f.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Ms)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function r(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,_,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=M*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){const _=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q1(i,t,e,n){let s={},o={},a=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const x=M.program;n.uniformBlockBinding(_,x)}function c(_,M){let x=s[_.id];x===void 0&&(v(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",f));const b=M.program;n.updateUBOMapping(_,b);const y=t.render.frame;o[_.id]!==y&&(d(_),o[_.id]=y)}function h(_){const M=u();_.__bindingPointIndex=M;const x=i.createBuffer(),b=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,b,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let _=0;_<r;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const M=s[_.id],x=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,A=x.length;y<A;y++){const T=Array.isArray(x[y])?x[y]:[x[y]];for(let S=0,w=T.length;S<w;S++){const C=T[S];if(m(C,y,S,b)===!0){const E=C.__offset,R=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let I=0;I<R.length;I++){const k=R[I],D=g(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,E+L,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,L),L+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(_,M,x,b){const y=_.value,A=M+"_"+x;if(b[A]===void 0)return typeof y=="number"||typeof y=="boolean"?b[A]=y:b[A]=y.clone(),!0;{const T=b[A];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return b[A]=y,!0}else if(T.equals(y)===!1)return T.copy(y),!0}return!1}function v(_){const M=_.uniforms;let x=0;const b=16;for(let A=0,T=M.length;A<T;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,C=S.length;w<C;w++){const E=S[w],R=Array.isArray(E.value)?E.value:[E.value];for(let L=0,I=R.length;L<I;L++){const k=R[L],D=g(k),U=x%b,O=U%D.boundary,F=U+O;x+=O,F!==0&&b-F<D.storage&&(x+=b-F),E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,x+=D.storage}}}const y=x%b;return y>0&&(x+=b-y),_.__size=x,_.__cache={},this}function g(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function f(_){const M=_.target;M.removeEventListener("dispose",f);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},o={}}return{bind:l,update:c,dispose:p}}class J1{constructor(t={}){const{canvas:e=vp(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),g=new Int32Array(4);let f=null,p=null;const _=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=os,this.toneMappingExposure=1;const x=this;let b=!1,y=0,A=0,T=null,S=-1,w=null;const C=new Ge,E=new Ge;let R=null;const L=new Bt(0);let I=0,k=e.width,D=e.height,U=1,O=null,F=null;const Z=new Ge(0,0,k,D),G=new Ge(0,0,k,D);let $=!1;const q=new ic;let W=!1,nt=!1;this.transmissionResolutionScale=1;const ot=new de,Q=new de,it=new P,j=new Ge,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function et(){return T===null?U:1}let z=n;function xt(B,rt){return e.getContext(B,rt)}try{const B={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${er}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),z===null){const rt="webgl2";if(z=xt(rt,B),z===null)throw xt(rt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let gt,Et,Tt,Ft,ht,H,N,K,dt,bt,_t,zt,Pt,Ut,se,Rt,Wt,ie,It,Nt,Jt,te,be,at;function Vt(){gt=new cg(z),gt.init(),te=new X1(z,gt),Et=new ng(z,gt,t,te),Tt=new V1(z,gt),Et.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),Ft=new dg(z),ht=new R1,H=new G1(z,gt,Tt,ht,Et,te,Ft),N=new sg(x),K=new lg(x),dt=new v0(z),be=new tg(z,dt),bt=new hg(z,dt,Ft,be),_t=new fg(z,bt,dt,Ft),It=new pg(z,Et,H),Rt=new ig(ht),zt=new P1(x,N,K,gt,Et,be,Rt),Pt=new K1(x,ht),Ut=new I1,se=new z1(gt),ie=new Jm(x,N,K,Tt,_t,m,l),Wt=new H1(x,_t,Et),at=new Q1(z,Ft,Et,Tt),Nt=new eg(z,gt,Ft),Jt=new ug(z,gt,Ft),Ft.programs=zt.programs,x.capabilities=Et,x.extensions=gt,x.properties=ht,x.renderLists=Ut,x.shadowMap=Wt,x.state=Tt,x.info=Ft}Vt();const Mt=new Z1(x,z);this.xr=Mt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const B=gt.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=gt.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(B){B!==void 0&&(U=B,this.setSize(k,D,!1))},this.getSize=function(B){return B.set(k,D)},this.setSize=function(B,rt,mt=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=B,D=rt,e.width=Math.floor(B*U),e.height=Math.floor(rt*U),mt===!0&&(e.style.width=B+"px",e.style.height=rt+"px"),this.setViewport(0,0,B,rt)},this.getDrawingBufferSize=function(B){return B.set(k*U,D*U).floor()},this.setDrawingBufferSize=function(B,rt,mt){k=B,D=rt,U=mt,e.width=Math.floor(B*mt),e.height=Math.floor(rt*mt),this.setViewport(0,0,B,rt)},this.getCurrentViewport=function(B){return B.copy(C)},this.getViewport=function(B){return B.copy(Z)},this.setViewport=function(B,rt,mt,vt){B.isVector4?Z.set(B.x,B.y,B.z,B.w):Z.set(B,rt,mt,vt),Tt.viewport(C.copy(Z).multiplyScalar(U).round())},this.getScissor=function(B){return B.copy(G)},this.setScissor=function(B,rt,mt,vt){B.isVector4?G.set(B.x,B.y,B.z,B.w):G.set(B,rt,mt,vt),Tt.scissor(E.copy(G).multiplyScalar(U).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(B){Tt.setScissorTest($=B)},this.setOpaqueSort=function(B){O=B},this.setTransparentSort=function(B){F=B},this.getClearColor=function(B){return B.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(B=!0,rt=!0,mt=!0){let vt=0;if(B){let ct=!1;if(T!==null){const Lt=T.texture.format;ct=Lt===Ql||Lt===Kl||Lt===jl}if(ct){const Lt=T.texture.type,Ht=Lt===Hi||Lt===Ls||Lt===Yo||Lt===go||Lt===$l||Lt===ql,Zt=ie.getClearColor(),Yt=ie.getClearAlpha(),ce=Zt.r,ue=Zt.g,oe=Zt.b;Ht?(v[0]=ce,v[1]=ue,v[2]=oe,v[3]=Yt,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=ce,g[1]=ue,g[2]=oe,g[3]=Yt,z.clearBufferiv(z.COLOR,0,g))}else vt|=z.COLOR_BUFFER_BIT}rt&&(vt|=z.DEPTH_BUFFER_BIT),mt&&(vt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(vt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),ie.dispose(),Ut.dispose(),se.dispose(),ht.dispose(),N.dispose(),K.dispose(),_t.dispose(),be.dispose(),at.dispose(),zt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",jn),Mt.removeEventListener("sessionend",Kn),Dn.stop()};function At(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const B=Ft.autoReset,rt=Wt.enabled,mt=Wt.autoUpdate,vt=Wt.needsUpdate,ct=Wt.type;Vt(),Ft.autoReset=B,Wt.enabled=rt,Wt.autoUpdate=mt,Wt.needsUpdate=vt,Wt.type=ct}function Gt(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function pe(B){const rt=B.target;rt.removeEventListener("dispose",pe),Ue(rt)}function Ue(B){ae(B),ht.remove(B)}function ae(B){const rt=ht.get(B).programs;rt!==void 0&&(rt.forEach(function(mt){zt.releaseProgram(mt)}),B.isShaderMaterial&&zt.releaseShaderCache(B))}this.renderBufferDirect=function(B,rt,mt,vt,ct,Lt){rt===null&&(rt=tt);const Ht=ct.isMesh&&ct.matrixWorld.determinant()<0,Zt=ps(B,rt,mt,vt,ct);Tt.setMaterial(vt,Ht);let Yt=mt.index,ce=1;if(vt.wireframe===!0){if(Yt=bt.getWireframeAttribute(mt),Yt===void 0)return;ce=2}const ue=mt.drawRange,oe=mt.attributes.position;let Se=ue.start*ce,we=(ue.start+ue.count)*ce;Lt!==null&&(Se=Math.max(Se,Lt.start*ce),we=Math.min(we,(Lt.start+Lt.count)*ce)),Yt!==null?(Se=Math.max(Se,0),we=Math.min(we,Yt.count)):oe!=null&&(Se=Math.max(Se,0),we=Math.min(we,oe.count));const Ye=we-Se;if(Ye<0||Ye===1/0)return;be.setup(ct,vt,Zt,mt,Yt);let We,ye=Nt;if(Yt!==null&&(We=dt.get(Yt),ye=Jt,ye.setIndex(We)),ct.isMesh)vt.wireframe===!0?(Tt.setLineWidth(vt.wireframeLinewidth*et()),ye.setMode(z.LINES)):ye.setMode(z.TRIANGLES);else if(ct.isLine){let ee=vt.linewidth;ee===void 0&&(ee=1),Tt.setLineWidth(ee*et()),ct.isLineSegments?ye.setMode(z.LINES):ct.isLineLoop?ye.setMode(z.LINE_LOOP):ye.setMode(z.LINE_STRIP)}else ct.isPoints?ye.setMode(z.POINTS):ct.isSprite&&ye.setMode(z.TRIANGLES);if(ct.isBatchedMesh)if(ct._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount,ct._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))ye.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const ee=ct._multiDrawStarts,Ve=ct._multiDrawCounts,ge=ct._multiDrawCount,cn=Yt?dt.get(Yt).bytesPerElement:1,Hn=ht.get(vt).currentProgram.getUniforms();for(let an=0;an<ge;an++)Hn.setValue(z,"_gl_DrawID",an),ye.render(ee[an]/cn,Ve[an])}else if(ct.isInstancedMesh)ye.renderInstances(Se,Ye,ct.count);else if(mt.isInstancedBufferGeometry){const ee=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Ve=Math.min(mt.instanceCount,ee);ye.renderInstances(Se,Ye,Ve)}else ye.render(Se,Ye)};function me(B,rt,mt){B.transparent===!0&&B.side===en&&B.forceSinglePass===!1?(B.side=Fn,B.needsUpdate=!0,En(B,rt,mt),B.side=ls,B.needsUpdate=!0,En(B,rt,mt),B.side=en):En(B,rt,mt)}this.compile=function(B,rt,mt=null){mt===null&&(mt=B),p=se.get(mt),p.init(rt),M.push(p),mt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(rt.layers)&&(p.pushLight(ct),ct.castShadow&&p.pushShadow(ct))}),B!==mt&&B.traverseVisible(function(ct){ct.isLight&&ct.layers.test(rt.layers)&&(p.pushLight(ct),ct.castShadow&&p.pushShadow(ct))}),p.setupLights();const vt=new Set;return B.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Lt=ct.material;if(Lt)if(Array.isArray(Lt))for(let Ht=0;Ht<Lt.length;Ht++){const Zt=Lt[Ht];me(Zt,mt,ct),vt.add(Zt)}else me(Lt,mt,ct),vt.add(Lt)}),p=M.pop(),vt},this.compileAsync=function(B,rt,mt=null){const vt=this.compile(B,rt,mt);return new Promise(ct=>{function Lt(){if(vt.forEach(function(Ht){ht.get(Ht).currentProgram.isReady()&&vt.delete(Ht)}),vt.size===0){ct(B);return}setTimeout(Lt,10)}gt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Je=null;function Re(B){Je&&Je(B)}function jn(){Dn.stop()}function Kn(){Dn.start()}const Dn=new ku;Dn.setAnimationLoop(Re),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(B){Je=B,Mt.setAnimationLoop(B),B===null?Dn.stop():Dn.start()},Mt.addEventListener("sessionstart",jn),Mt.addEventListener("sessionend",Kn),this.render=function(B,rt){if(rt!==void 0&&rt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(rt),rt=Mt.getCamera()),B.isScene===!0&&B.onBeforeRender(x,B,rt,T),p=se.get(B,M.length),p.init(rt),M.push(p),Q.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),q.setFromProjectionMatrix(Q),nt=this.localClippingEnabled,W=Rt.init(this.clippingPlanes,nt),f=Ut.get(B,_.length),f.init(),_.push(f),Mt.enabled===!0&&Mt.isPresenting===!0){const Lt=x.xr.getDepthSensingMesh();Lt!==null&&On(Lt,rt,-1/0,x.sortObjects)}On(B,rt,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(O,F),ft=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ft&&ie.addToRenderList(f,B),this.info.render.frame++,W===!0&&Rt.beginShadows();const mt=p.state.shadowsArray;Wt.render(mt,B,rt),W===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const vt=f.opaque,ct=f.transmissive;if(p.setupLights(),rt.isArrayCamera){const Lt=rt.cameras;if(ct.length>0)for(let Ht=0,Zt=Lt.length;Ht<Zt;Ht++){const Yt=Lt[Ht];fn(vt,ct,B,Yt)}ft&&ie.render(B);for(let Ht=0,Zt=Lt.length;Ht<Zt;Ht++){const Yt=Lt[Ht];ln(f,B,Yt,Yt.viewport)}}else ct.length>0&&fn(vt,ct,B,rt),ft&&ie.render(B),ln(f,B,rt);T!==null&&A===0&&(H.updateMultisampleRenderTarget(T),H.updateRenderTargetMipmap(T)),B.isScene===!0&&B.onAfterRender(x,B,rt),be.resetDefaultState(),S=-1,w=null,M.pop(),M.length>0?(p=M[M.length-1],W===!0&&Rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?f=_[_.length-1]:f=null};function On(B,rt,mt,vt){if(B.visible===!1)return;if(B.layers.test(rt.layers)){if(B.isGroup)mt=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(rt);else if(B.isLight)p.pushLight(B),B.castShadow&&p.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||q.intersectsSprite(B)){vt&&j.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Q);const Ht=_t.update(B),Zt=B.material;Zt.visible&&f.push(B,Ht,Zt,mt,j.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||q.intersectsObject(B))){const Ht=_t.update(B),Zt=B.material;if(vt&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),j.copy(B.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),j.copy(Ht.boundingSphere.center)),j.applyMatrix4(B.matrixWorld).applyMatrix4(Q)),Array.isArray(Zt)){const Yt=Ht.groups;for(let ce=0,ue=Yt.length;ce<ue;ce++){const oe=Yt[ce],Se=Zt[oe.materialIndex];Se&&Se.visible&&f.push(B,Ht,Se,mt,j.z,oe)}}else Zt.visible&&f.push(B,Ht,Zt,mt,j.z,null)}}const Lt=B.children;for(let Ht=0,Zt=Lt.length;Ht<Zt;Ht++)On(Lt[Ht],rt,mt,vt)}function ln(B,rt,mt,vt){const ct=B.opaque,Lt=B.transmissive,Ht=B.transparent;p.setupLightsView(mt),W===!0&&Rt.setGlobalState(x.clippingPlanes,mt),vt&&Tt.viewport(C.copy(vt)),ct.length>0&&Be(ct,rt,mt),Lt.length>0&&Be(Lt,rt,mt),Ht.length>0&&Be(Ht,rt,mt),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function fn(B,rt,mt,vt){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[vt.id]===void 0&&(p.state.transmissionRenderTarget[vt.id]=new Zn(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?_i:Hi,minFilter:ns,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Lt=p.state.transmissionRenderTarget[vt.id],Ht=vt.viewport||C;Lt.setSize(Ht.z*x.transmissionResolutionScale,Ht.w*x.transmissionResolutionScale);const Zt=x.getRenderTarget();x.setRenderTarget(Lt),x.getClearColor(L),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),ft&&ie.render(mt);const Yt=x.toneMapping;x.toneMapping=os;const ce=vt.viewport;if(vt.viewport!==void 0&&(vt.viewport=void 0),p.setupLightsView(vt),W===!0&&Rt.setGlobalState(x.clippingPlanes,vt),Be(B,mt,vt),H.updateMultisampleRenderTarget(Lt),H.updateRenderTargetMipmap(Lt),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let oe=0,Se=rt.length;oe<Se;oe++){const we=rt[oe],Ye=we.object,We=we.geometry,ye=we.material,ee=we.group;if(ye.side===en&&Ye.layers.test(vt.layers)){const Ve=ye.side;ye.side=Fn,ye.needsUpdate=!0,wi(Ye,mt,vt,We,ye,ee),ye.side=Ve,ye.needsUpdate=!0,ue=!0}}ue===!0&&(H.updateMultisampleRenderTarget(Lt),H.updateRenderTargetMipmap(Lt))}x.setRenderTarget(Zt),x.setClearColor(L,I),ce!==void 0&&(vt.viewport=ce),x.toneMapping=Yt}function Be(B,rt,mt){const vt=rt.isScene===!0?rt.overrideMaterial:null;for(let ct=0,Lt=B.length;ct<Lt;ct++){const Ht=B[ct],Zt=Ht.object,Yt=Ht.geometry,ce=vt===null?Ht.material:vt,ue=Ht.group;Zt.layers.test(mt.layers)&&wi(Zt,rt,mt,Yt,ce,ue)}}function wi(B,rt,mt,vt,ct,Lt){B.onBeforeRender(x,rt,mt,vt,ct,Lt),B.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),ct.onBeforeRender(x,rt,mt,vt,B,Lt),ct.transparent===!0&&ct.side===en&&ct.forceSinglePass===!1?(ct.side=Fn,ct.needsUpdate=!0,x.renderBufferDirect(mt,rt,vt,ct,B,Lt),ct.side=ls,ct.needsUpdate=!0,x.renderBufferDirect(mt,rt,vt,ct,B,Lt),ct.side=en):x.renderBufferDirect(mt,rt,vt,ct,B,Lt),B.onAfterRender(x,rt,mt,vt,ct,Lt)}function En(B,rt,mt){rt.isScene!==!0&&(rt=tt);const vt=ht.get(B),ct=p.state.lights,Lt=p.state.shadowsArray,Ht=ct.state.version,Zt=zt.getParameters(B,ct.state,Lt,rt,mt),Yt=zt.getProgramCacheKey(Zt);let ce=vt.programs;vt.environment=B.isMeshStandardMaterial?rt.environment:null,vt.fog=rt.fog,vt.envMap=(B.isMeshStandardMaterial?K:N).get(B.envMap||vt.environment),vt.envMapRotation=vt.environment!==null&&B.envMap===null?rt.environmentRotation:B.envMapRotation,ce===void 0&&(B.addEventListener("dispose",pe),ce=new Map,vt.programs=ce);let ue=ce.get(Yt);if(ue!==void 0){if(vt.currentProgram===ue&&vt.lightsStateVersion===Ht)return Qn(B,Zt),ue}else Zt.uniforms=zt.getUniforms(B),B.onBeforeCompile(Zt,x),ue=zt.acquireProgram(Zt,Yt),ce.set(Yt,ue),vt.uniforms=Zt.uniforms;const oe=vt.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(oe.clippingPlanes=Rt.uniform),Qn(B,Zt),vt.needsLights=xn(B),vt.lightsStateVersion=Ht,vt.needsLights&&(oe.ambientLightColor.value=ct.state.ambient,oe.lightProbe.value=ct.state.probe,oe.directionalLights.value=ct.state.directional,oe.directionalLightShadows.value=ct.state.directionalShadow,oe.spotLights.value=ct.state.spot,oe.spotLightShadows.value=ct.state.spotShadow,oe.rectAreaLights.value=ct.state.rectArea,oe.ltc_1.value=ct.state.rectAreaLTC1,oe.ltc_2.value=ct.state.rectAreaLTC2,oe.pointLights.value=ct.state.point,oe.pointLightShadows.value=ct.state.pointShadow,oe.hemisphereLights.value=ct.state.hemi,oe.directionalShadowMap.value=ct.state.directionalShadowMap,oe.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,oe.spotShadowMap.value=ct.state.spotShadowMap,oe.spotLightMatrix.value=ct.state.spotLightMatrix,oe.spotLightMap.value=ct.state.spotLightMap,oe.pointShadowMap.value=ct.state.pointShadowMap,oe.pointShadowMatrix.value=ct.state.pointShadowMatrix),vt.currentProgram=ue,vt.uniformsList=null,ue}function Cn(B){if(B.uniformsList===null){const rt=B.currentProgram.getUniforms();B.uniformsList=Oa.seqWithValue(rt.seq,B.uniforms)}return B.uniformsList}function Qn(B,rt){const mt=ht.get(B);mt.outputColorSpace=rt.outputColorSpace,mt.batching=rt.batching,mt.batchingColor=rt.batchingColor,mt.instancing=rt.instancing,mt.instancingColor=rt.instancingColor,mt.instancingMorph=rt.instancingMorph,mt.skinning=rt.skinning,mt.morphTargets=rt.morphTargets,mt.morphNormals=rt.morphNormals,mt.morphColors=rt.morphColors,mt.morphTargetsCount=rt.morphTargetsCount,mt.numClippingPlanes=rt.numClippingPlanes,mt.numIntersection=rt.numClipIntersection,mt.vertexAlphas=rt.vertexAlphas,mt.vertexTangents=rt.vertexTangents,mt.toneMapping=rt.toneMapping}function ps(B,rt,mt,vt,ct){rt.isScene!==!0&&(rt=tt),H.resetTextureUnits();const Lt=rt.fog,Ht=vt.isMeshStandardMaterial?rt.environment:null,Zt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:xo,Yt=(vt.isMeshStandardMaterial?K:N).get(vt.envMap||Ht),ce=vt.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,ue=!!mt.attributes.tangent&&(!!vt.normalMap||vt.anisotropy>0),oe=!!mt.morphAttributes.position,Se=!!mt.morphAttributes.normal,we=!!mt.morphAttributes.color;let Ye=os;vt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ye=x.toneMapping);const We=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,ye=We!==void 0?We.length:0,ee=ht.get(vt),Ve=p.state.lights;if(W===!0&&(nt===!0||B!==w)){const nn=B===w&&vt.id===S;Rt.setState(vt,B,nn)}let ge=!1;vt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ve.state.version||ee.outputColorSpace!==Zt||ct.isBatchedMesh&&ee.batching===!1||!ct.isBatchedMesh&&ee.batching===!0||ct.isBatchedMesh&&ee.batchingColor===!0&&ct.colorTexture===null||ct.isBatchedMesh&&ee.batchingColor===!1&&ct.colorTexture!==null||ct.isInstancedMesh&&ee.instancing===!1||!ct.isInstancedMesh&&ee.instancing===!0||ct.isSkinnedMesh&&ee.skinning===!1||!ct.isSkinnedMesh&&ee.skinning===!0||ct.isInstancedMesh&&ee.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&ee.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&ee.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&ee.instancingMorph===!1&&ct.morphTexture!==null||ee.envMap!==Yt||vt.fog===!0&&ee.fog!==Lt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Rt.numPlanes||ee.numIntersection!==Rt.numIntersection)||ee.vertexAlphas!==ce||ee.vertexTangents!==ue||ee.morphTargets!==oe||ee.morphNormals!==Se||ee.morphColors!==we||ee.toneMapping!==Ye||ee.morphTargetsCount!==ye)&&(ge=!0):(ge=!0,ee.__version=vt.version);let cn=ee.currentProgram;ge===!0&&(cn=En(vt,rt,ct));let Hn=!1,an=!1,Ti=!1;const Ie=cn.getUniforms(),rn=ee.uniforms;if(Tt.useProgram(cn.program)&&(Hn=!0,an=!0,Ti=!0),vt.id!==S&&(S=vt.id,an=!0),Hn||w!==B){Tt.buffers.depth.getReversed()?(ot.copy(B.projectionMatrix),_p(ot),Mp(ot),Ie.setValue(z,"projectionMatrix",ot)):Ie.setValue(z,"projectionMatrix",B.projectionMatrix),Ie.setValue(z,"viewMatrix",B.matrixWorldInverse);const sn=Ie.map.cameraPosition;sn!==void 0&&sn.setValue(z,it.setFromMatrixPosition(B.matrixWorld)),Et.logarithmicDepthBuffer&&Ie.setValue(z,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(vt.isMeshPhongMaterial||vt.isMeshToonMaterial||vt.isMeshLambertMaterial||vt.isMeshBasicMaterial||vt.isMeshStandardMaterial||vt.isShaderMaterial)&&Ie.setValue(z,"isOrthographic",B.isOrthographicCamera===!0),w!==B&&(w=B,an=!0,Ti=!0)}if(ct.isSkinnedMesh){Ie.setOptional(z,ct,"bindMatrix"),Ie.setOptional(z,ct,"bindMatrixInverse");const nn=ct.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ie.setValue(z,"boneTexture",nn.boneTexture,H))}ct.isBatchedMesh&&(Ie.setOptional(z,ct,"batchingTexture"),Ie.setValue(z,"batchingTexture",ct._matricesTexture,H),Ie.setOptional(z,ct,"batchingIdTexture"),Ie.setValue(z,"batchingIdTexture",ct._indirectTexture,H),Ie.setOptional(z,ct,"batchingColorTexture"),ct._colorsTexture!==null&&Ie.setValue(z,"batchingColorTexture",ct._colorsTexture,H));const hn=mt.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&It.update(ct,mt,cn),(an||ee.receiveShadow!==ct.receiveShadow)&&(ee.receiveShadow=ct.receiveShadow,Ie.setValue(z,"receiveShadow",ct.receiveShadow)),vt.isMeshGouraudMaterial&&vt.envMap!==null&&(rn.envMap.value=Yt,rn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),vt.isMeshStandardMaterial&&vt.envMap===null&&rt.environment!==null&&(rn.envMapIntensity.value=rt.environmentIntensity),an&&(Ie.setValue(z,"toneMappingExposure",x.toneMappingExposure),ee.needsLights&&Nn(rn,Ti),Lt&&vt.fog===!0&&Pt.refreshFogUniforms(rn,Lt),Pt.refreshMaterialUniforms(rn,vt,U,D,p.state.transmissionRenderTarget[B.id]),Oa.upload(z,Cn(ee),rn,H)),vt.isShaderMaterial&&vt.uniformsNeedUpdate===!0&&(Oa.upload(z,Cn(ee),rn,H),vt.uniformsNeedUpdate=!1),vt.isSpriteMaterial&&Ie.setValue(z,"center",ct.center),Ie.setValue(z,"modelViewMatrix",ct.modelViewMatrix),Ie.setValue(z,"normalMatrix",ct.normalMatrix),Ie.setValue(z,"modelMatrix",ct.matrixWorld),vt.isShaderMaterial||vt.isRawShaderMaterial){const nn=vt.uniformsGroups;for(let sn=0,Wn=nn.length;sn<Wn;sn++){const ri=nn[sn];at.update(ri,cn),at.bind(ri,cn)}}return cn}function Nn(B,rt){B.ambientLightColor.needsUpdate=rt,B.lightProbe.needsUpdate=rt,B.directionalLights.needsUpdate=rt,B.directionalLightShadows.needsUpdate=rt,B.pointLights.needsUpdate=rt,B.pointLightShadows.needsUpdate=rt,B.spotLights.needsUpdate=rt,B.spotLightShadows.needsUpdate=rt,B.rectAreaLights.needsUpdate=rt,B.hemisphereLights.needsUpdate=rt}function xn(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(B,rt,mt){ht.get(B.texture).__webglTexture=rt,ht.get(B.depthTexture).__webglTexture=mt;const vt=ht.get(B);vt.__hasExternalTextures=!0,vt.__autoAllocateDepthBuffer=mt===void 0,vt.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),vt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(B,rt){const mt=ht.get(B);mt.__webglFramebuffer=rt,mt.__useDefaultFramebuffer=rt===void 0};const oi=z.createFramebuffer();this.setRenderTarget=function(B,rt=0,mt=0){T=B,y=rt,A=mt;let vt=!0,ct=null,Lt=!1,Ht=!1;if(B){const Yt=ht.get(B);if(Yt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(z.FRAMEBUFFER,null),vt=!1;else if(Yt.__webglFramebuffer===void 0)H.setupRenderTarget(B);else if(Yt.__hasExternalTextures)H.rebindTextures(B,ht.get(B.texture).__webglTexture,ht.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){const oe=B.depthTexture;if(Yt.__boundDepthTexture!==oe){if(oe!==null&&ht.has(oe)&&(B.width!==oe.image.width||B.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(B)}}const ce=B.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Ht=!0);const ue=ht.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(ue[rt])?ct=ue[rt][mt]:ct=ue[rt],Lt=!0):B.samples>0&&H.useMultisampledRTT(B)===!1?ct=ht.get(B).__webglMultisampledFramebuffer:Array.isArray(ue)?ct=ue[mt]:ct=ue,C.copy(B.viewport),E.copy(B.scissor),R=B.scissorTest}else C.copy(Z).multiplyScalar(U).floor(),E.copy(G).multiplyScalar(U).floor(),R=$;if(mt!==0&&(ct=oi),Tt.bindFramebuffer(z.FRAMEBUFFER,ct)&&vt&&Tt.drawBuffers(B,ct),Tt.viewport(C),Tt.scissor(E),Tt.setScissorTest(R),Lt){const Yt=ht.get(B.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Yt.__webglTexture,mt)}else if(Ht){const Yt=ht.get(B.texture),ce=rt;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Yt.__webglTexture,mt,ce)}else if(B!==null&&mt!==0){const Yt=ht.get(B.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Yt.__webglTexture,mt)}S=-1},this.readRenderTargetPixels=function(B,rt,mt,vt,ct,Lt,Ht){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=ht.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt){Tt.bindFramebuffer(z.FRAMEBUFFER,Zt);try{const Yt=B.texture,ce=Yt.format,ue=Yt.type;if(!Et.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=B.width-vt&&mt>=0&&mt<=B.height-ct&&z.readPixels(rt,mt,vt,ct,te.convert(ce),te.convert(ue),Lt)}finally{const Yt=T!==null?ht.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(z.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(B,rt,mt,vt,ct,Lt,Ht){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=ht.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt){const Yt=B.texture,ce=Yt.format,ue=Yt.type;if(!Et.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(rt>=0&&rt<=B.width-vt&&mt>=0&&mt<=B.height-ct){Tt.bindFramebuffer(z.FRAMEBUFFER,Zt);const oe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),z.readPixels(rt,mt,vt,ct,te.convert(ce),te.convert(ue),0);const Se=T!==null?ht.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(z.FRAMEBUFFER,Se);const we=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await xp(z,we,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.deleteBuffer(oe),z.deleteSync(we),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(B,rt=null,mt=0){B.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),rt=arguments[0]||null,B=arguments[1]);const vt=Math.pow(2,-mt),ct=Math.floor(B.image.width*vt),Lt=Math.floor(B.image.height*vt),Ht=rt!==null?rt.x:0,Zt=rt!==null?rt.y:0;H.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,mt,0,0,Ht,Zt,ct,Lt),Tt.unbindTexture()};const yn=z.createFramebuffer(),ai=z.createFramebuffer();this.copyTextureToTexture=function(B,rt,mt=null,vt=null,ct=0,Lt=null){B.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),vt=arguments[0]||null,B=arguments[1],rt=arguments[2],Lt=arguments[3]||0,mt=null),Lt===null&&(ct!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=ct,ct=0):Lt=0);let Ht,Zt,Yt,ce,ue,oe,Se,we,Ye;const We=B.isCompressedTexture?B.mipmaps[Lt]:B.image;if(mt!==null)Ht=mt.max.x-mt.min.x,Zt=mt.max.y-mt.min.y,Yt=mt.isBox3?mt.max.z-mt.min.z:1,ce=mt.min.x,ue=mt.min.y,oe=mt.isBox3?mt.min.z:0;else{const hn=Math.pow(2,-ct);Ht=Math.floor(We.width*hn),Zt=Math.floor(We.height*hn),B.isDataArrayTexture?Yt=We.depth:B.isData3DTexture?Yt=Math.floor(We.depth*hn):Yt=1,ce=0,ue=0,oe=0}vt!==null?(Se=vt.x,we=vt.y,Ye=vt.z):(Se=0,we=0,Ye=0);const ye=te.convert(rt.format),ee=te.convert(rt.type);let Ve;rt.isData3DTexture?(H.setTexture3D(rt,0),Ve=z.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(H.setTexture2DArray(rt,0),Ve=z.TEXTURE_2D_ARRAY):(H.setTexture2D(rt,0),Ve=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,rt.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,rt.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),cn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Hn=z.getParameter(z.UNPACK_SKIP_PIXELS),an=z.getParameter(z.UNPACK_SKIP_ROWS),Ti=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,We.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,We.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ce),z.pixelStorei(z.UNPACK_SKIP_ROWS,ue),z.pixelStorei(z.UNPACK_SKIP_IMAGES,oe);const Ie=B.isDataArrayTexture||B.isData3DTexture,rn=rt.isDataArrayTexture||rt.isData3DTexture;if(B.isDepthTexture){const hn=ht.get(B),nn=ht.get(rt),sn=ht.get(hn.__renderTarget),Wn=ht.get(nn.__renderTarget);Tt.bindFramebuffer(z.READ_FRAMEBUFFER,sn.__webglFramebuffer),Tt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let ri=0;ri<Yt;ri++)Ie&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ht.get(B).__webglTexture,ct,oe+ri),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ht.get(rt).__webglTexture,Lt,Ye+ri)),z.blitFramebuffer(ce,ue,Ht,Zt,Se,we,Ht,Zt,z.DEPTH_BUFFER_BIT,z.NEAREST);Tt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ct!==0||B.isRenderTargetTexture||ht.has(B)){const hn=ht.get(B),nn=ht.get(rt);Tt.bindFramebuffer(z.READ_FRAMEBUFFER,yn),Tt.bindFramebuffer(z.DRAW_FRAMEBUFFER,ai);for(let sn=0;sn<Yt;sn++)Ie?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hn.__webglTexture,ct,oe+sn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hn.__webglTexture,ct),rn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Lt,Ye+sn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Lt),ct!==0?z.blitFramebuffer(ce,ue,Ht,Zt,Se,we,Ht,Zt,z.COLOR_BUFFER_BIT,z.NEAREST):rn?z.copyTexSubImage3D(Ve,Lt,Se,we,Ye+sn,ce,ue,Ht,Zt):z.copyTexSubImage2D(Ve,Lt,Se,we,ce,ue,Ht,Zt);Tt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else rn?B.isDataTexture||B.isData3DTexture?z.texSubImage3D(Ve,Lt,Se,we,Ye,Ht,Zt,Yt,ye,ee,We.data):rt.isCompressedArrayTexture?z.compressedTexSubImage3D(Ve,Lt,Se,we,Ye,Ht,Zt,Yt,ye,We.data):z.texSubImage3D(Ve,Lt,Se,we,Ye,Ht,Zt,Yt,ye,ee,We):B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Lt,Se,we,Ht,Zt,ye,ee,We.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Lt,Se,we,We.width,We.height,ye,We.data):z.texSubImage2D(z.TEXTURE_2D,Lt,Se,we,Ht,Zt,ye,ee,We);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,cn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Hn),z.pixelStorei(z.UNPACK_SKIP_ROWS,an),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ti),Lt===0&&rt.generateMipmaps&&z.generateMipmap(Ve),Tt.unbindTexture()},this.copyTextureToTexture3D=function(B,rt,mt=null,vt=null,ct=0){return B.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),mt=arguments[0]||null,vt=arguments[1]||null,B=arguments[2],rt=arguments[3],ct=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(B,rt,mt,vt,ct)},this.initRenderTarget=function(B){ht.get(B).__webglFramebuffer===void 0&&H.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?H.setTextureCube(B,0):B.isData3DTexture?H.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?H.setTexture2DArray(B,0):H.setTexture2D(B,0),Tt.unbindTexture()},this.resetState=function(){y=0,A=0,T=null,Tt.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}const Ph={type:"change"},uc={type:"start"},Wu={type:"end"},Pa=new Qo,Rh=new Qi,tv=Math.cos(70*X.DEG2RAD),mn=new P,kn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$r=1e-6;class ev extends m0{constructor(t,e=null){super(t,e),this.state=He.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oo.ROTATE,MIDDLE:oo.DOLLY,RIGHT:oo.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new on,this._lastTargetPosition=new P,this._quat=new on().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sh,this._sphericalDelta=new sh,this._scale=1,this._panOffset=new P,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new P,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iv.bind(this),this._onPointerDown=nv.bind(this),this._onPointerUp=sv.bind(this),this._onContextMenu=uv.bind(this),this._onMouseWheel=rv.bind(this),this._onKeyDown=lv.bind(this),this._onTouchStart=cv.bind(this),this._onTouchMove=hv.bind(this),this._onMouseDown=ov.bind(this),this._onMouseMove=av.bind(this),this._interceptControlDown=dv.bind(this),this._interceptControlUp=pv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ph),this.update(),this.state=He.NONE}update(t=null){const e=this.object.position;mn.copy(e).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=kn:n>Math.PI&&(n-=kn),s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),e.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=mn.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new P(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Pa.origin.copy(this.object.position),Pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pa.direction))<tv?this.object.lookAt(this.target):(Rh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pa.intersectPlane(Rh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>$r||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$r||this._lastTargetPosition.distanceToSquared(this.target)>$r?(this.dispatchEvent(Ph),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?kn/60*this.autoRotateSpeed*t:kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){mn.setFromMatrixColumn(e,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,e){this.screenSpacePanning===!0?mn.setFromMatrixColumn(e,1):(mn.setFromMatrixColumn(e,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;mn.copy(s).sub(this.target);let o=mn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,a=n.width,r=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/e.clientHeight),this._rotateUp(kn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/e.clientHeight),this._rotateUp(kn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new qt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function iv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wu),this.state=He.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ov(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case oo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=He.DOLLY;break;case oo.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=He.ROTATE}break;case oo.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(uc)}function av(i){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function rv(i){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(i.preventDefault(),this.dispatchEvent(uc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wu))}function lv(i){this.enabled!==!1&&this._handleKeyDown(i)}function cv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=He.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=He.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(uc)}function hv(i){switch(this._trackPointer(i),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=He.NONE}}function uv(i){this.enabled!==!1&&i.preventDefault()}function dv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Eo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fv=new rc(-1,1,1,-1,0,1);class mv extends jt{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const gv=new mv;class dc{constructor(t){this._mesh=new ze(gv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class vv extends Eo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Zo.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new dc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lh extends Eo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class xv extends Eo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _v{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new qt);this._width=n.width,this._height=n.height,e=new Zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vv(Vu),this.copyPass.material.blending=ki,this.clock=new Uu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Lh!==void 0&&(a instanceof Lh?n=!0:a instanceof xv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Mv extends Eo{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const wv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class wo extends Eo{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new qt(t.x,t.y):new qt(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Zn(o,a,{type:_i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Zn(o,a,{type:_i});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Zn(o,a,{type:_i});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),a=Math.round(a/2)}const r=wv;this.highPassUniforms=Zo.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new qt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Vu;this.copyUniforms=Zo.clone(h.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Xo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new qo,this.fsQuad=new dc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new qt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=wo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=wo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new qt(.5,.5)},direction:{value:new qt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}wo.BlurDirectionX=new qt(1,0);wo.BlurDirectionY=new qt(0,1);const yv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class bv extends Eo{constructor(){super();const t=yv;this.uniforms=Zo.clone(t.uniforms),this.material=new Kp({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new dc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===ke&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===au?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===cu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Gu(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Ih(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function yo(i){const t=Math.max(0,Math.min(1,(i-1.54)/.6949999999999998)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.8)/.2),2))),n=.056*Ih(t,.38,.24),s=-.042*Gu(.54,.88,t),o=.016*Ih(t,.78,.13);return(.228+n+s+o)*e}function as(i){const t=Math.max(0,Math.min(1,(i-1.66)/.575)),e=.02*Math.pow(1-Gu(0,.42,t),1.6),n=-.01*Math.sin(t*Math.PI);return 1.578+e+n}const Ps=[{rootX:.024,rootY:.126,rootZ:-3.6,tipX:.34,tipY:.142,tipZ:-3.72},{rootX:.024,rootY:.126,rootZ:-3.78,tipX:.49,tipY:.148,tipZ:-3.96},{rootX:.024,rootY:.126,rootZ:-3.96,tipX:.55,tipY:.152,tipZ:-4.22},{rootX:.024,rootY:.126,rootZ:-4.14,tipX:.46,tipY:.146,tipZ:-4.45},{rootX:.024,rootY:.126,rootZ:-4.3,tipX:.27,tipY:.138,tipZ:-4.58}],Za=[{parentBone:"tail_1",rootX:.18,rootY:.75,rootZ:-.84,tipX:.44,tipY:.72,tipZ:-.98},{parentBone:"tail_2",rootX:.15,rootY:.67,rootZ:-1.1,tipX:.5,tipY:.63,tipZ:-1.27},{parentBone:"tail_2",rootX:.12,rootY:.59,rootZ:-1.34,tipX:.37,tipY:.56,tipZ:-1.52}],ta=new P(.435,.03,.8999).normalize(),ea=new P(-.435,.03,.8999).normalize(),ja=.082;function Xu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.342:.318),o=t?1.005:-.555,a=.04,r=t?.088:.082,l=[],c=[-.88,-.29,.29,.88];for(let h=0;h<4;h++){const u=c[h]+e*.055,d=h===1||h===2,m=(t?.126:.118)*(d?1:.86),v=(t?.066:.062)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.036,dirX:Math.sin(u)*.92,dirZ:Math.cos(u),toeLength:m,baseRadius:d?.044:.039,tipRadius:d?.029:.0255,clawLength:v})}return l}function Sv(){const i=[{name:"root",parent:null,worldPos:[0,.86,.12]},{name:"pelvis",parent:"root",worldPos:[0,.83,-.54]},{name:"spine_1",parent:"root",worldPos:[0,.85,.14]},{name:"spine_2",parent:"spine_1",worldPos:[0,.91,.5]},{name:"chest",parent:"spine_2",worldPos:[0,.98,.86]},{name:"neck_1",parent:"chest",worldPos:[0,1.11,1.08]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.27,1.24]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.44,1.39]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.56,1.51]},{name:"head",parent:"neck_4",worldPos:[0,1.63,1.62]},{name:"eye_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eye_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidUpper_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidLower_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidLower_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"teethUpper",parent:"head",worldPos:[0,1.592,1.95]},{name:"jaw",parent:"head",worldPos:[0,1.588,1.66]},{name:"teethLower",parent:"jaw",worldPos:[0,1.568,1.95]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.568,1.74]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.568,1.85]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.568,1.96]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.566,2.07]},{name:"ear_L_1",parent:"head",worldPos:[.158,1.772,1.57]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.208,1.895,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.246,2.005,1.19]},{name:"ear_R_1",parent:"head",worldPos:[-.158,1.772,1.57]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.208,1.895,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.246,2.005,1.19]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.268,1.648,1.58]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.348,1.68,1.43]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.268,1.648,1.58]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.348,1.68,1.43]},{name:"cheekLower_L_1",parent:"head",worldPos:[.252,1.552,1.61]},{name:"cheekLower_L_2",parent:"cheekLower_L_1",worldPos:[.312,1.562,1.48]},{name:"cheekLower_R_1",parent:"head",worldPos:[-.252,1.552,1.61]},{name:"cheekLower_R_2",parent:"cheekLower_R_1",worldPos:[-.312,1.562,1.48]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.235,.94,.88]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.272,.8,.9]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.325,.47,.8]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.338,.155,.94]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.342,.044,1.045]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.222,.77,-.55]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.295,.46,-.34]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.312,.23,-.66]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.318,.044,-.515]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.23,1.11,.78]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.38,1.15,.76]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.96,1.18,.5]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.72,1.24,.96]}),[{mid:[n*1.62,1.16,.18],tip:[n*1.54,1.06,-.66]},{mid:[n*2.02,1.17,.24],tip:[n*2.24,1.07,-.62]},{mid:[n*2.38,1.19,.36],tip:[n*2.88,1.09,-.44]},{mid:[n*2.72,1.21,.52],tip:[n*3.44,1.12,-.16]},{mid:[n*3.04,1.23,.74],tip:[n*3.88,1.16,.24]},{mid:[n*3.22,1.25,.94],tip:[n*4.28,1.2,.76]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.78,-.82],[0,.68,-1.16],[0,.54,-1.54],[0,.39,-1.94],[0,.26,-2.35],[0,.17,-2.76],[0,.13,-3.18],[0,.126,-3.58],[0,.126,-3.98],[0,.126,-4.42]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;Za.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.024,.126,-3.96]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.024,.126,-3.96]}),Ps.forEach((e,n)=>{i.push({name:`tailFin_R_${n+1}`,parent:"tailFinHinge_R",worldPos:[-e.rootX,e.rootY,e.rootZ]})}),i.push({name:"prostheticCollar",parent:"tail_8",worldPos:[.024,.128,-3.54]},{name:"prostheticRod",parent:"tail_9",worldPos:[.036,.138,-3.96]}),Ps.forEach((e,n)=>{i.push({name:`tailFin_L_${n+1}`,parent:"tailFinHinge_L",worldPos:[e.rootX,e.rootY,e.rootZ]})}),i}function Av(){const i=Sv(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new nc;c.name=l.name;const h=new P(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);if(!u||!d)throw new Error(`Missing parent bone ${l.parent} for ${l.name}`);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new sr(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}function Tv(i,t,e){let n=i*374761393+t*668265263+e*1442695041|0;n=(n^n>>>13)*1274126177;const s=((n^n>>>16)>>>0)/4294967296;let o=i*1103515245+t*12345+(e+7919)*2654435761|0;o=(o^o>>>15)*2246822519;const a=((o^o>>>13)>>>0)/4294967296;let r=i*73856093+t*19349663+(e+31337)*83492791|0;r=(r^r>>>14)*1597334677;const l=((r^r>>>15)>>>0)/4294967296;return[s,a,l]}function Ra(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function qr(i,t,e,n,s,o=1){const a=i*e,r=t*n,l=Math.floor(a),c=Math.floor(r);let h=1e9,u=1e9,d=.5,m=0,v=0,g=0;for(let _=-1;_<=1;_++)for(let M=-1;M<=1;M++){const x=l+M,b=c+_,y=(x%e+e)%e,A=(b%n+n)%n,[T,S,w]=Tv(y,A,s),C=x+.14+T*.72,E=b+.14+S*.72,R=(C-a)*o,L=E-r,I=Math.sqrt(R*R+L*L);I<h?(u=h,h=I,d=w,m=(T-.5)*Math.PI,v=R,g=L):I<u&&(u=I)}const f=Math.max(0,(u-h)*.5),p=v*Math.cos(m)+g*Math.sin(m);return{edgeDist:f,centerDist:h,cellTone:d,cellAngle:p}}let La=null;function Ev(i=1024){if(La)return La;const t=i,e=new Float32Array(t*t),n=new Float32Array(t*t),s=new Float32Array(t*t),o=new Float32Array(t*t),a=new Float32Array(t*t),r=28,l=76;for(let U=0;U<t;U++){const O=U/t;for(let F=0;F<t;F++){const Z=F/t,G=U*t+F,$=qr(Z,O,r,r,101,1.08),q=qr(Z,O,l,l,409,1),W=Ra(.034,.27,$.edgeDist),nt=Ra(.03,.29,q.edgeDist),ot=Math.sin((Z*135+O*47+$.cellTone*6.28)*Math.PI*2)*Math.sin((Z*29-O*113+$.cellTone*3.14)*Math.PI*2),Q=ot>.86?-.045*(ot-.86)*7:0,it=Math.max(-.055,Math.min(.055,$.cellAngle*.08))*W,j=W*(.72+.12*$.cellTone)+nt*.18*(1-W*.55)+it+Q*W;e[G]=Math.max(0,Math.min(1,j));const tt=1-W,ft=.39+.09*(1-$.cellTone)+tt*.52+(1-nt)*.06-Q*.3;n[G]=Math.max(.28,Math.min(.96,ft));const et=.18+.82*Ra(.015,.2,$.edgeDist)*(.86+.14*nt);s[G]=Math.max(.14,Math.min(1,et)),o[G]=$.cellTone*.7+q.cellTone*.3;const z=W*W;a[G]=Math.max(0,Math.min(1,.24*z+.62*$.cellTone*z+.08*nt*W))}}const c=document.createElement("canvas"),h=document.createElement("canvas"),u=document.createElement("canvas"),d=document.createElement("canvas"),m=document.createElement("canvas");for(const U of[c,h,u,d,m])U.width=t,U.height=t;const v=c.getContext("2d"),g=h.getContext("2d"),f=u.getContext("2d"),p=d.getContext("2d"),_=m.getContext("2d"),M=v.createImageData(t,t),x=g.createImageData(t,t),b=f.createImageData(t,t),y=p.createImageData(t,t),A=_.createImageData(t,t),T=2.05;for(let U=0;U<t;U++){const O=(U-1+t)%t,F=(U+1)%t;for(let Z=0;Z<t;Z++){const G=(Z-1+t)%t,$=(Z+1)%t,q=U*t+Z,W=q*4,nt=e[O*t+G],ot=e[O*t+Z],Q=e[O*t+$],it=e[U*t+G],j=e[U*t+$],tt=e[F*t+G],ft=e[F*t+Z],et=e[F*t+$],z=(Q+3*j+et-(nt+3*it+tt))*T,xt=(tt+3*ft+et-(nt+3*ot+Q))*T;let gt=-z,Et=-xt,Tt=1;const Ft=1/Math.sqrt(gt*gt+Et*Et+Tt*Tt);gt*=Ft,Et*=Ft,Tt*=Ft,x.data[W]=Math.round((gt*.5+.5)*255),x.data[W+1]=Math.round((Et*.5+.5)*255),x.data[W+2]=Math.round((Tt*.5+.5)*255),x.data[W+3]=255;const ht=e[q],H=o[q],N=12+ht*15+H*8;M.data[W]=Math.round(N*.86),M.data[W+1]=Math.round(N*.96),M.data[W+2]=Math.round(N*1.14),M.data[W+3]=255;const K=Math.round(n[q]*255);b.data[W]=K,b.data[W+1]=K,b.data[W+2]=K,b.data[W+3]=255;const dt=Math.round(s[q]*255);y.data[W]=dt,y.data[W+1]=dt,y.data[W+2]=dt,y.data[W+3]=255;const bt=Math.round(a[q]*255);A.data[W]=bt,A.data[W+1]=bt,A.data[W+2]=bt,A.data[W+3]=255}}v.putImageData(M,0,0),g.putImageData(x,0,0),f.putImageData(b,0,0),p.putImageData(y,0,0),_.putImageData(A,0,0);const S=(U,O=!1,F=7)=>(U.wrapS=Ai,U.wrapT=Ai,U.repeat.set(F,F),U.anisotropy=8,U.colorSpace=O?Mn:ii,U.needsUpdate=!0,U),w=512,C=document.createElement("canvas"),E=document.createElement("canvas");C.width=w,C.height=w,E.width=w,E.height=w;const R=C.getContext("2d"),L=E.getContext("2d"),I=R.createImageData(w,w),k=L.createImageData(w,w),D=new Float32Array(w*w);for(let U=0;U<w;U++){const O=U/w;for(let F=0;F<w;F++){const Z=F/w,G=U*w+F,$=Math.sin(O*92*Math.PI*2+Math.sin(Z*9*Math.PI*2)*1.4)*.25+Math.sin(O*210*Math.PI*2+Z*18)*.12,q=qr(Z,O,44,44,887,1),W=Ra(.08,.22,q.edgeDist)*(q.cellTone>.45?.55:.15);D[G]=.5+$*.35+W*.4}}for(let U=0;U<w;U++){const O=(U-1+w)%w,F=(U+1)%w;for(let Z=0;Z<w;Z++){const G=(Z-1+w)%w,$=(Z+1)%w,q=U*w+Z,W=q*4,nt=(D[U*w+$]-D[U*w+G])*2.4,ot=(D[F*w+Z]-D[O*w+Z])*2.4,Q=1/Math.sqrt(nt*nt+ot*ot+1);I.data[W]=Math.round((-nt*Q*.5+.5)*255),I.data[W+1]=Math.round((-ot*Q*.5+.5)*255),I.data[W+2]=Math.round((Q*.5+.5)*255),I.data[W+3]=255;const it=Math.round((.36+(1-D[q])*.28)*255);k.data[W]=it,k.data[W+1]=it,k.data[W+2]=it,k.data[W+3]=255}}return R.putImageData(I,0,0),L.putImageData(k,0,0),La={albedoMap:S(new Ln(c),!0,7),normalMap:S(new Ln(h),!1,7),roughnessMap:S(new Ln(u),!1,7),aoMap:S(new Ln(d),!1,7),iridescenceThicknessMap:S(new Ln(m),!1,7),prostheticPasteNormalMap:S(new Ln(C),!1,3),prostheticPasteRoughnessMap:S(new Ln(E),!1,3)},La}let ws=null;function Cv(i=1024){if(ws)return ws;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=8,n.data[u+1]=12,n.data[u+2]=11,n.data[u+3]=255;continue}const d=Math.sin(h*68+Math.sin(c*11)*.65),m=Math.sin(h*142-Math.cos(c*19)*.85),v=Math.sin(h*260+c*24),g=Math.sin(h*23+1.4)*Math.cos(c*15-h*5),f=d*.42+m*.33+v*.15+g*.25,p=Math.sin(c*42+d*.6)*.08,_=Math.exp(-Math.pow((c-.38)/.13,2)),M=Math.max(0,Math.min(1,(.94-c)/.16)),x=Math.max(0,Math.min(1,1-c*1.08)),b=.84+.3*f+p;let y=(38+166*x+66*_)*b*M,A=(146+106*x+34*_)*b*M,T=(64-24*x+22*(1-x))*b*M;if(g<-.58&&c>.25&&c<.78){const S=Math.min(1,(-g-.58)*2.2);y*=1-.42*S,A*=1-.34*S,T*=1-.28*S}n.data[u]=Math.max(0,Math.min(255,Math.round(y))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(T))),n.data[u+3]=255}}return e.putImageData(n,0,0),ws=new Ln(t),ws.colorSpace=Mn,ws.anisotropy=8,ws.needsUpdate=!0,ws}function Pv(){const i=Cv(1024),t={uPupilDilation:{value:.76},uLightDir:{value:new P(.45,.65,.6).normalize()},uAlphaGlow:{value:0}},e=new fi({name:"Toothless_Iris_PBR",map:i,roughness:.55,metalness:0,envMapIntensity:.65});e.onBeforeCompile=s=>{s.uniforms.uPupilDilation=t.uPupilDilation,s.uniforms.uLightDir=t.uLightDir,s.uniforms.uAlphaGlow=t.uAlphaGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.34 + uAlphaGlow * 0.92) * eRadial;`)};const n=new In({name:"Toothless_Cornea_WetCoat",color:new Bt(16777215),transparent:!0,opacity:.14,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function Zr(i,t,e){i.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uAlphaGlow=t.uAlphaGlow,n.uniforms.uBiolumGlow=t.uBiolumGlow,n.uniforms.uLightningCloak=t.uLightningCloak,n.uniforms.uSunDir=t.uSunDir,n.uniforms.uSunColor=t.uSunColor,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          float border = clamp((d2 - d1) / 0.34, 0.0, 1.0);
          // Cushioned osteoderm dome profile — avoids steep vertical edge walls that catch harsh sky/sun glare
          return smoothstep(0.08, 0.64, border) * (1.0 - 0.18 * d1 * d1);
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
          diffuseColor.rgb = mix(fineAlbedo.rgb * 0.94, diffuseColor.rgb * 1.02, macroWeight);
        #endif

        if (vAnatomyData.x > 0.18 && !${e?"true":"false"}) {
          vec2 scute = evalBlendedScuteHierarchy(vObjPos, vAnatomyData.x);
          if (scute.y > 0.005) {
            // Subtle, natural obsidian-slate tonal modulation so individual scales & crevices read clearly without harsh contrast!
            vec3 plateCrown = diffuseColor.rgb * 1.14 + vec3(0.006, 0.008, 0.011);
            vec3 plateGroove = diffuseColor.rgb * 0.46;
            diffuseColor.rgb = mix(diffuseColor.rgb, mix(plateGroove, plateCrown, scute.x), scute.y * 0.64);
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
          float macroMapRough = texture2D(roughnessMap, vRoughnessMapUv).g;
          float fineRough = texture2D(roughnessMap, vRoughnessMapUv * 2.85).g;
          // Preserve matte crevice roughness from the 2D scale map while calming crown gloss in dense scale zones!
          roughnessFactor = mix(fineRough * 1.04, max(macroMapRough, 0.44), macroRWeight);
        #endif
        if (vAnatomyData.x > 0.18 && !${e?"true":"false"}) {
          vec2 scuteR = evalBlendedScuteHierarchy(vObjPos, vAnatomyData.x);
          if (scuteR.y > 0.005) {
            float scuteCrevice = 1.0 - smoothstep(0.12, 0.72, scuteR.x);
            float targetScuteRough = mix(0.46, 0.92, scuteCrevice);
            roughnessFactor = mix(roughnessFactor, max(roughnessFactor * 0.92, targetScuteRough), scuteR.y * 0.72);
          }
        }
        roughnessFactor = mix(roughnessFactor, 0.48, scarRWeight * 0.75);
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
          // Cushioned low-relief scale normals in dense face & lower-leg regions so gaps don't catch bright grazing glare!
          vec3 blendedMapN = normalize(mix(
            vec3(mapNFine.xy * 0.82, max(mapNFine.z, 0.25)),
            vec3(mapNMacro.xy * 0.66, max(mapNMacro.z, 0.35)),
            mScaleW
          ));
          blendedMapN.xy *= (1.0 - scarW * 0.72);
          blendedMapN.xy *= normalScale * (1.0 - scuteN.y * 0.46);
          vec3 tbnN = tbn * blendedMapN;
          normal = dot(tbnN, tbnN) > 1e-8 ? normalize(tbnN) : normal;
          if (scuteN.y > 0.005 && !${e?"true":"false"}) {
            float plateBumpH = scuteN.x * scuteN.y * 0.0042 * (1.0 - scarW * 0.8);
            vec3 dPdx = dFdx( -vViewPosition );
            vec3 dPdy = dFdy( -vViewPosition );
            vec3 r1 = cross( dPdy, normal );
            vec3 r2 = cross( normal, dPdx );
            float det = dot( dPdx, r1 );
            float signDet = det < 0.0 ? -1.0 : 1.0;
            vec3 surfGrad = signDet * ( dFdx( plateBumpH ) * r1 + dFdy( plateBumpH ) * r2 );
            // Soft slope limiter so inter-scale borders never tilt into bright mirror-like grazing edges!
            float maxGrad = 0.26 * abs( det ) + 1e-6;
            float gradLen = length( surfGrad );
            if ( gradLen > maxGrad ) {
              surfGrad *= maxGrad / gradLen;
            }
            vec3 pertPlate = abs( det ) * normal - surfGrad;
            normal = dot( pertPlate, pertPlate ) > 1e-12 ? normalize( pertPlate ) : normal;
          }
        #elif defined( USE_BUMPMAP )
          normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
        // Physically grounded Inter-Scale Cavity Specular Occlusion:
        // Keeps dense face & lower-leg scales and their interstitial gaps subtly visible via soft texture & gentle crown sheen,
        // while suppressing distracting bright/glowing light reflections from inside the narrow gaps between scales!
        if (!${e?"true":"false"}) {
          float aoScaleZone = smoothstep(0.08, 0.96, vAnatomyData.x);
          float uvGap = 0.0;
          #ifdef USE_AOMAP
            float aoMacroSample = texture2D(aoMap, vAoMapUv).r;
            float aoFineSample = texture2D(aoMap, vAoMapUv * 2.85).r;
            uvGap = 1.0 - smoothstep(0.22, 0.86, mix(aoFineSample, aoMacroSample, aoScaleZone));
          #endif
          vec2 scuteOcc = vAnatomyData.x > 0.18 ? evalBlendedScuteHierarchy(vObjPos, vAnatomyData.x) : vec2(1.0, 0.0);
          float voronoiGap = (1.0 - smoothstep(0.14, 0.74, scuteOcc.x)) * scuteOcc.y;
          float combinedGap = clamp(max(uvGap * (0.45 + 0.55 * aoScaleZone), voronoiGap), 0.0, 1.0);
          float denseScaleCalm = mix(1.0, 0.68, aoScaleZone) * (1.0 - uLightningCloak * 0.65);
          float gapSpecOcclusion = mix(1.0, 0.14, combinedGap * (0.55 + 0.45 * aoScaleZone)) * denseScaleCalm;
          float gapDiffuseOcclusion = mix(1.0, 0.58, combinedGap * aoScaleZone);

          reflectedLight.directSpecular *= gapSpecOcclusion;
          reflectedLight.indirectSpecular *= gapSpecOcclusion;
          reflectedLight.directDiffuse *= gapDiffuseOcclusion;
          #ifdef USE_CLEARCOAT
            clearcoatSpecularDirect *= gapSpecOcclusion * mix(1.0, 0.55, aoScaleZone);
            clearcoatSpecularIndirect *= gapSpecOcclusion * mix(1.0, 0.55, aoScaleZone);
          #endif
          #ifdef USE_SHEEN
            sheenSpecularDirect *= mix(1.0, 0.25, combinedGap);
            sheenSpecularIndirect *= mix(1.0, 0.25, combinedGap);
          #endif
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function Rv(){const i=Ev(1024),t=Pv(),e={uTime:{value:0},uAlphaGlow:{value:.08},uBiolumGlow:{value:0},uLightningCloak:{value:0},uSunDir:{value:new P(-.55,.38,-.74).normalize()},uSunColor:{value:new Bt(16765601)}},n=new In({name:"Toothless_ObsidianScales_PBR",color:new Bt(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new qt(.88,.88),roughnessMap:i.roughnessMap,roughness:.9,aoMap:i.aoMap,aoMapIntensity:.92,metalness:.04,iridescence:.46,iridescenceIOR:1.38,iridescenceThicknessRange:[260,470],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.22,clearcoatRoughness:.38,sheen:.34,sheenRoughness:.54,sheenColor:new Bt(1914187),envMapIntensity:1.24});Zr(n,e,!1);const s=new In({name:"Toothless_PatagiumMembrane_PBR",color:new Bt(15660282),map:i.albedoMap,normalMap:i.normalMap,normalScale:new qt(.65,.65),roughnessMap:i.roughnessMap,roughness:.96,aoMap:i.aoMap,aoMapIntensity:.65,metalness:.02,iridescence:.38,iridescenceIOR:1.36,iridescenceThicknessRange:[250,430],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.18,clearcoatRoughness:.44,sheen:.42,sheenRoughness:.58,sheenColor:new Bt(1977920),side:en,envMapIntensity:1.25});Zr(s,e,!0);const o=new In({name:"Toothless_ProstheticScalePaste_PBR",color:new Bt(1185308),normalMap:i.prostheticPasteNormalMap,normalScale:new qt(.95,.95),roughnessMap:i.prostheticPasteRoughnessMap,roughness:.46,metalness:.14,iridescence:.46,iridescenceIOR:1.4,iridescenceThicknessRange:[270,440],clearcoat:.42,clearcoatRoughness:.28,side:en,envMapIntensity:1.35});Zr(o,e,!1);const a=new fi({name:"Toothless_VikingBronze_PBR",color:new Bt(12094282),metalness:.88,roughness:.33,envMapIntensity:1.45}),r=new fi({name:"Toothless_ForgedIron_PBR",color:new Bt(2632754),metalness:.82,roughness:.42,envMapIntensity:1.3}),l=new In({name:"Toothless_ObsidianClaws_PBR",color:new Bt(1316636),roughness:.24,metalness:.08,clearcoat:.65,clearcoatRoughness:.2,envMapIntensity:1.5}),c=new In({name:"Toothless_RetractableTeeth_PBR",color:new Bt(15394524),roughness:.16,metalness:0,clearcoat:.85,clearcoatRoughness:.08,sheen:.2,sheenColor:new Bt(14018293),envMapIntensity:1.2}),h=new In({name:"Toothless_OralGums_PBR",color:new Bt(2628390),normalMap:i.normalMap,normalScale:new qt(.58,.58),roughnessMap:i.roughnessMap,roughness:.42,metalness:0,clearcoat:.68,clearcoatRoughness:.18,side:en});h.onBeforeCompile=d=>{d.uniforms.uAlphaGlow=e.uAlphaGlow,d.uniforms.uTime=e.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
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
        }`)};const u=new In({name:"Toothless_Tongue_PBR",color:new Bt(7880269),normalMap:i.normalMap,normalScale:new qt(.68,.68),roughnessMap:i.roughnessMap,roughness:.36,metalness:0,clearcoat:.8,clearcoatRoughness:.14,sheen:.38,sheenColor:new Bt(10904693)});return{maps:i,skinMaterial:n,wingMembraneMaterial:s,prostheticPasteMaterial:o,prostheticBronzeMaterial:a,prostheticIronMaterial:r,clawMaterial:l,teethMaterial:c,oralGumMaterial:h,tongueMaterial:u,eyeMaterials:t,uniforms:e}}function je(i){let t=0,e=0;for(const m of i){const v=m.getAttribute("position");t+=v.count;const g=m.getIndex();e+=g?g.count:v.count}const n=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Float32Array(t*4),r=new Uint16Array(t*4),l=new Float32Array(t*4),c=t>65535?new Uint32Array(e):new Uint16Array(e);let h=0,u=0;for(const m of i){const v=m.getAttribute("position"),g=m.getAttribute("normal"),f=m.getAttribute("uv"),p=m.getAttribute("aAnatomyData"),_=m.getAttribute("skinIndex"),M=m.getAttribute("skinWeight"),x=v.count;if(n.set(v.array,h*3),g&&s.set(g.array,h*3),f&&o.set(f.array,h*2),p)a.set(p.array,h*4);else for(let y=0;y<x;y++)a[(h+y)*4]=.35;if(_&&M)for(let y=0;y<x*4;y++)r[h*4+y]=_.array[y],l[h*4+y]=M.array[y];const b=m.getIndex();if(b){for(let y=0;y<b.count;y++)c[u+y]=b.getX(y)+h;u+=b.count}else{for(let y=0;y<x;y++)c[u+y]=h+y;u+=x}h+=x}const d=new jt;return d.setAttribute("position",new J(n,3)),d.setAttribute("normal",new J(s,3)),d.setAttribute("uv",new J(o,2)),d.setAttribute("uv1",new J(o,2)),d.setAttribute("aAnatomyData",new J(a,4)),d.setAttribute("skinIndex",new Ce(r,4)),d.setAttribute("skinWeight",new Kt(l,4)),d.setIndex(new J(c,1)),d.computeBoundingSphere(),d.computeBoundingBox(),d}function Xe(i,t){const e=t[0]+t[1]+t[2]+t[3];if(e<=1e-6)return{indices:[i[0],0,0,0],weights:[1,0,0,0]};const n=1/e;return{indices:i,weights:[t[0]*n,t[1]*n,t[2]*n,t[3]*n]}}function Mi(i,t,e,n=3.2){const s=[];for(let a=0;a<t.length;a++){const r=e[a];let l=i.distanceTo(r);if(a<t.length-1){const h=e[a+1],u=new P().subVectors(h,r),d=u.lengthSq();if(d>1e-6){const m=Math.max(0,Math.min(1,new P().subVectors(i,r).dot(u)/d)),v=new P().copy(r).addScaledVector(u,m);l=Math.min(l,i.distanceTo(v)+m*.08)}}const c=1/Math.pow(Math.max(.035,l),n);s.push({idx:t[a],w:c})}s.sort((a,r)=>r.w-a.w);const o=s.slice(0,4);for(;o.length<4;)o.push({idx:0,w:0});return Xe([o[0].idx,o[1].idx,o[2].idx,o[3].idx],[o[0].w,o[1].w,o[2].w,o[3].w])}function xe(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function ve(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Ia(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function Wl(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let v=0;v<e-1;v++)n[v]=(t[v+1][1]-t[v][1])/(t[v+1][0]-t[v][0]);s[0]=n[0],s[e-1]=n[e-2];for(let v=1;v<e-1;v++)n[v-1]*n[v]<=0?s[v]=0:s[v]=(n[v-1]+n[v])*.5;for(let v=0;v<e-1;v++)if(Math.abs(n[v])<1e-8)s[v]=0,s[v+1]=0;else{const g=s[v]/n[v],f=s[v+1]/n[v],p=Math.hypot(g,f);if(p>3){const _=3/p;s[v]=_*g*n[v],s[v+1]=_*f*n[v]}}let o=0;for(let v=0;v<e-1;v++)if(i>=t[v][0]&&i<=t[v+1][0]){o=v;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r,h=2*c-3*l+1,u=c-2*l+r,d=-2*c+3*l,m=c-l;return h*t[o][1]+u*a*s[o]+d*t[o+1][1]+m*a*s[o+1]}const Lv=[[-4.55,.018],[-3.95,.052],[-3.05,.095],[-2.1,.16],[-1.35,.228],[-.88,.282],[-.54,.334],[-.1,.328],[.42,.378],[.82,.394],[1.08,.304],[1.32,.25],[1.54,.228]],Yu=[[-4.55,.016],[-3.95,.044],[-3.05,.084],[-2.1,.14],[-1.35,.194],[-.88,.236],[-.54,.274],[-.1,.272],[.42,.306],[.82,.312],[1.08,.246],[1.32,.208],[1.54,.192]],Iv=[new P(0,.126,-4.55),new P(0,.126,-4.05),new P(0,.126,-3.55),new P(0,.13,-3.05),new P(0,.19,-2.5),new P(0,.35,-1.92),new P(0,.56,-1.42),new P(0,.74,-.92),new P(0,.81,-.54),new P(0,.82,-.1),new P(0,.87,.4),new P(0,.94,.8),new P(0,1.09,1.06),new P(0,1.31,1.28),new P(0,1.53,1.48),new P(0,1.635,1.66),new P(0,1.654,1.86),new P(0,1.632,2.05),new P(0,1.586,2.235)];let jr=null;function $u(){return jr||(jr=new si(Iv,!1,"centripetal",.5)),jr}function Kr(i){const t=$u();let e=0,n=1;for(let g=0;g<22;g++){const f=(e+n)*.5;t.getPointAt(f).z<i?e=f:n=f}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new P(0,1,0),l=r.clone().addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=xe(-4.55,-4.46,c);let u=Wl(c,Yu)*h;const d=xe(1.46,1.6,c);if(d>0){const g=Math.max(0,Math.min(1,(c-1.54)/.6949999999999998)),f=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(g-.8)/.2),2))),p=(.192+.014*ve(g,.35,.22)-.068*xe(.34,.94,g))*f;u=X.lerp(u,p,d)}let m=u;return c>-.45&&c<1.18&&(m+=.01*ve(c,.35,.55)),{point:o.clone().addScaledVector(l,m),tangent:a,up:l}}function qu(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.64)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.38){const r=xe(1.42,1.64,i.z),l=1-r,c=xe(1.36,1.56,i.z);return Xe([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return Mi(i,e,n,3.5)}function Fv(i,t){const e=[];return e.push(Dv(i,t)),e.push(...Nv(i,t)),e.push(...Uv(i,t)),e.push(...kv(i,t)),je(e)}function Dv(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=$u(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(b=>i.boneIndexMap.get(b)),r=o.map(b=>i.bindWorldPositions.get(b)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),m=new Float32Array(l*4),v=new P(0,1,0),g=i.bindWorldPositions.get("eye_L"),f=i.bindWorldPositions.get("eye_R"),p=[{center:g,fwd:ta,up:new P(-.16,.985,.06).normalize()},{center:f,fwd:ea,up:new P(.16,.985,.06).normalize()}].map(b=>{const y=new P().crossVectors(b.up,b.fwd).normalize(),A=new P().crossVectors(b.fwd,y).normalize();return{center:b.center,fwd:b.fwd,right:y,up:A}});for(let b=0;b<=e;b++){const y=b/e,A=1-Math.pow(1-y,1.85),T=s.getPointAt(A),S=s.getTangentAt(A).normalize(),w=new P().copy(v).addScaledVector(S,-v.dot(S)).normalize(),C=new P().crossVectors(w,S).normalize(),E=T.z,R=xe(-4.55,-4.46,E),L=Wl(E,Lv)*R+.008*ve(E,-3.96,.36),I=Wl(E,Yu)*R,k=xe(1.46,1.6,E);let D=L,U=I;if(k>0){const O=Math.max(0,Math.min(1,(E-1.54)/.6949999999999998)),F=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(O-.8)/.2),2))),Z=yo(E),G=(.192+.014*ve(O,.35,.22)-.068*xe(.34,.94,O))*F;D=X.lerp(L,Z,k),U=X.lerp(I,G,k)}for(let O=0;O<=n;O++){const F=O/n,Z=F*Math.PI*2,G=Math.sin(Z),$=Math.cos(Z);let q=D*G,W=U*$,nt=.28,ot=0,Q=0;if(E>-.85&&E<1.18){const et=ve(E,.76,.3),z=ve(Math.abs(G),.48,.24)*xe(-.05,-.88,$),xt=ve(G,0,.11)*xe(-.55,-.98,$)*et;W-=.026*et*z-.012*xt,q+=Math.sign(G)*.016*et*z;const gt=ve(E,.88,.22)*ve(Math.abs(G),.72,.18)*xe(-.08,-.78,$),Et=ve(E,-.54,.24)*ve(Math.abs(G),.7,.19)*xe(-.05,-.78,$);W-=.032*gt+.028*Et;const Tt=ve(E,.38,.28)*ve(Math.abs(G),.92,.16)*ve($,-.12,.35);q+=Math.sign(G)*Math.sin(E*26)*.003*Tt,$>.75&&E>-.45&&(W+=.01*Math.pow(($-.75)/.25,2)*ve(E,.35,.55))}if(E>=1&&E<1.56){const et=xe(1,1.18,E)*(1-xe(1.44,1.56,E)),z=ve(Math.abs(G),.62,.18)*ve($,-.35,.3);q+=Math.sign(G)*.008*z*et}if(E>=1.5){const et=ve(E,1.75,.1)*ve(Math.abs(G),.52,.2)*xe(.35,.9,$);W+=.014*et,q+=Math.sign(G)*.01*et;const z=ve(E,1.985,.105),xt=ve(Math.abs(G),.64,.17)*xe(.16,.72,$),gt=1+.22*Math.max(0,Math.sin((E-1.88)/.21*Math.PI*6));W+=.024*z*xt*gt,q+=Math.sign(G)*.012*z*xt;const Et=ve(E,1.76,.11)*ve(Math.abs(G),.92,.16)*ve($,-.18,.26),Tt=ve(E,1.9,.13)*ve(Math.abs(G),.88,.17)*ve($,-.1,.24);if(q+=Math.sign(G)*(.018*Et+.015*Tt),$>.86&&E>1.58&&E<1.95){const dt=Math.pow(($-.86)/.14,2),bt=Math.max(0,Math.sin((E-1.58)/.37*Math.PI*6)),_t=-.003*ve(Math.abs(G),.16,.07);W+=(.008+.015*Math.pow(bt,1.5))*dt+_t,Q=Math.max(Q,.75*dt*xe(1.58,1.94,E))}if(E>2.15&&$>-.35&&$<.35){const dt=ve(G,0,.08)*xe(2.15,2.225,E);W-=.0025*dt}const Ft=ve(G,0,.26)*xe(.42,.96,$)*xe(1.66,1.98,E),ht=xe(1.98,2.19,E)*xe(-.35,.85,$),H=z*xt*1.45,N=ve($,-.2,.2)*xe(1.74,2.18,E);nt=.38+1.56*Math.min(1,Math.max(Ft,ht,H,N*.88))}const it=new P().copy(T).addScaledVector(C,q).addScaledVector(w,W),j=xe(1.63,1.72,E);if(j>0&&$<.04){const et=as(E),z=Math.max(xe(.56,.9,Math.abs(G)),xe(2.12,2.21,E)),xt=et-.0045,gt=et+.044*(1-xe(2.08,2.22,E)),Et=X.lerp(gt,xt,z),Tt=j*xe(.04,-.26,$);it.y=X.lerp(it.y,Et,Tt)}if(E>1.8&&E<2.16)for(const et of p){if(Math.sign(it.x)!==Math.sign(et.center.x))continue;const z=new P().subVectors(it,et.center),xt=z.dot(et.fwd),gt=z.dot(et.right),Et=z.dot(et.up);if(xt>0){const Tt=Math.exp(-.5*(Math.pow(gt/.058,2)+Math.pow(Et/.05,2)))*xe(0,.035,xt),Ft=ja-.024,ht=X.lerp(xt,Ft,Tt);xt>ht&&(it.addScaledVector(et.fwd,ht-xt),nt=Math.max(nt,.78*Tt))}}if(E>2.1&&E<2.23&&it.y>1.575){const et=Ia(it.x,it.z,.066,2.182,.021,.024)*ve(it.y,1.606,.017),z=Ia(it.x,it.z,-.066,2.182,.021,.024)*ve(it.y,1.606,.017),xt=Math.max(et,z),gt=Math.max(Ia(it.x,it.z,.068,2.176,.025,.026),Ia(it.x,it.z,-.068,2.176,.025,.026))*ve(it.y,1.622,.012);gt>.05&&(it.y+=.0035*gt,it.x+=Math.sign(it.x)*.0025*gt),xt>.05&&(it.x*=1-.16*xt,it.y-=.011*xt,it.z-=.014*xt,Q=Math.max(Q,Math.min(1,xt*1.35)))}if(E>1.76&&E<2.02&&it.y>1.68){const et=Math.abs(it.x+.14-(it.z-1.89)*.4),z=ve(it.z,1.89,.052)*xe(.015,.002,et),xt=Math.abs(it.x-.12+(it.z-1.84)*.34),gt=ve(it.z,1.84,.034)*xe(.012,.002,xt);ot=Math.min(1,Math.max(z,gt*.85)),ot>.01&&(it.y-=.0035*ot)}$>.92&&E<1.56&&(Q=Math.max(Q,($-.92)/.08*.55),nt=Math.max(nt,.65*(($-.92)/.08)));const tt=b*(n+1)+O;c[tt*3]=it.x,c[tt*3+1]=it.y,c[tt*3+2]=it.z,h[tt*2]=A*5.2,h[tt*2+1]=F*1.6,u[tt*4]=nt,u[tt*4+1]=ot,u[tt*4+2]=Q,u[tt*4+3]=0;const ft=qu(it,i,a,r);d.set(ft.indices,tt*4),m.set(ft.weights,tt*4)}}const _=new Uint32Array(e*n*6);let M=0;for(let b=0;b<e;b++)for(let y=0;y<n;y++){const A=b*(n+1)+y,T=(b+1)*(n+1)+y,S=(b+1)*(n+1)+(y+1),w=b*(n+1)+(y+1);_[M++]=A,_[M++]=T,_[M++]=S,_[M++]=A,_[M++]=S,_[M++]=w}const x=new jt;return x.setAttribute("position",new J(c,3)),x.setAttribute("uv",new J(h,2)),x.setAttribute("aAnatomyData",new J(u,4)),x.setAttribute("skinIndex",new Ce(d,4)),x.setAttribute("skinWeight",new Kt(m,4)),x.setIndex(new J(_,1)),x.computeVertexNormals(),ar(x,e,n),x}function Nv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.272,2.09,1.06],maxWidth:.074,maxThick:.027,rollAngle:l*-.46}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.395,1.692,1.33],maxWidth:.038,maxThick:.017,rollAngle:l*-.95}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],tipPos:[l*.348,1.565,1.39],maxWidth:.03,maxThick:.015,rollAngle:l*-1.15}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],customStart:[l*.218,1.498,1.62],tipPos:[l*.274,1.488,1.48],maxWidth:.021,maxThick:.012,rollAngle:l*-1.28})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.customStart?[new P(...r.customStart),new P(...r.tipPos).lerp(new P(...r.customStart),.5)]:r.boneNames.map(T=>i.bindWorldPositions.get(T).clone()),c=new P().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.052),...l,new P(...r.tipPos)],d=new si(u),m=r.boneNames.map(T=>i.boneIndexMap.get(T)),v=r.boneNames.map(T=>i.bindWorldPositions.get(T)),g=(o+1)*(a+1),f=new Float32Array(g*3),p=new Float32Array(g*2),_=new Float32Array(g*4),M=new Uint16Array(g*4),x=new Float32Array(g*4);for(let T=0;T<=o;T++){const w=1-T/o,C=d.getPointAt(w),E=d.getTangentAt(w).negate().normalize(),R=new P(Math.sin(r.rollAngle),Math.cos(r.rollAngle),0).normalize(),L=R.clone().addScaledVector(E,-R.dot(E)).normalize(),I=new P().crossVectors(L,E).normalize(),k=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(w-.76)/.24),2))),D=.72+.44*Math.sin(Math.min(1,w*1.15)*Math.PI),U=1+.34*Math.pow(Math.max(0,1-w*4.2),2),O=r.maxWidth*D*k*U,F=r.maxThick*(.85+.25*(1-w))*k*U;for(let Z=0;Z<=a;Z++){const G=Z/a,$=G*Math.PI*2,q=new P().copy(C).addScaledVector(I,O*Math.sin($)).addScaledVector(L,F*Math.cos($)),W=T*(a+1)+Z;f[W*3]=q.x,f[W*3+1]=q.y,f[W*3+2]=q.z,p[W*2]=w*.85,p[W*2+1]=G*.65,_[W*4]=.45+1.35*xe(.32,.9,w);const nt=Mi(q,m,v,3.6),ot=xe(.28,0,w),Q=Xe([n,nt.indices[0],nt.indices[1],nt.indices[2]],[ot,nt.weights[0]*(1-ot),nt.weights[1]*(1-ot),nt.weights[2]*(1-ot)]);M.set(Q.indices,W*4),x.set(Q.weights,W*4)}}const b=new Uint16Array(o*a*6);let y=0;for(let T=0;T<o;T++)for(let S=0;S<a;S++){const w=T*(a+1)+S,C=(T+1)*(a+1)+S,E=(T+1)*(a+1)+(S+1),R=T*(a+1)+(S+1);b[y++]=w,b[y++]=C,b[y++]=E,b[y++]=w,b[y++]=E,b[y++]=R}const A=new jt;A.setAttribute("position",new J(f,3)),A.setAttribute("uv",new J(p,2)),A.setAttribute("aAnatomyData",new J(_,4)),A.setAttribute("skinIndex",new Ce(M,4)),A.setAttribute("skinWeight",new Kt(x,4)),A.setIndex(new J(b,1)),A.computeVertexNormals(),ar(A,o,a),e.push(A)}return e}function Uv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?ta:ea).clone(),d=new P(r*-.16,.985,.06).normalize(),m=new P().crossVectors(u,d).normalize(),v=new P().crossVectors(m,u).normalize();for(const g of[!0,!1]){const f=g?c:h,p=(s+1)*(o+1),_=new Float32Array(p*3),M=new Float32Array(p*2),x=new Float32Array(p*4),b=new Uint16Array(p*4),y=new Float32Array(p*4),A=ja+.0018;for(let C=0;C<=o;C++){const E=C/o,R=ve(E,.06,.08);for(let L=0;L<=s;L++){const I=L/s,k=X.degToRad(X.lerp(-65,65,I)),D=Math.sin(I*Math.PI),U=g?44*D:-40*D,O=g?78:-74,F=X.degToRad(X.lerp(U,O,E)),Z=Math.max(0,Math.sin(I*Math.PI*22))*.0014*R,G=A+.0018*R+Z-.0028*E,$=new P().addScaledVector(u,Math.cos(F)*Math.cos(k)).addScaledVector(m,Math.cos(F)*Math.sin(k)).addScaledVector(v,Math.sin(F)).normalize(),q=new P().copy(l).addScaledVector($,G),W=C*(s+1)+L;_[W*3]=q.x,_[W*3+1]=q.y,_[W*3+2]=q.z,M[W*2]=I*.35,M[W*2+1]=E*.18,x[W*4]=.85;const nt=D*(1-xe(.48,1,E)),ot=Math.max(0,Math.min(1,nt));b.set([f,n,0,0],W*4),y.set([ot,1-ot,0,0],W*4)}}const T=new Uint16Array(s*o*6);let S=0;for(let C=0;C<o;C++)for(let E=0;E<s;E++){const R=C*(s+1)+E,L=(C+1)*(s+1)+E,I=(C+1)*(s+1)+(E+1),k=C*(s+1)+(E+1);g?(T[S++]=R,T[S++]=I,T[S++]=L,T[S++]=R,T[S++]=k,T[S++]=I):(T[S++]=R,T[S++]=L,T[S++]=I,T[S++]=R,T[S++]=I,T[S++]=k)}const w=new jt;w.setAttribute("position",new J(_,3)),w.setAttribute("uv",new J(M,2)),w.setAttribute("aAnatomyData",new J(x,4)),w.setAttribute("skinIndex",new Ce(b,4)),w.setAttribute("skinWeight",new Kt(y,4)),w.setIndex(new J(T,1)),w.computeVertexNormals(),e.push(w)}}return e}function kv(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new P(a*.16,.96,.86),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new P(a*.342,.056,1),new P(a*.342,.032,1.078)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(Dh(i,r,l,!0,o,n,s)),e.push(...Fh(i,o,!0,t));const c=[new P(a*.15,.8,-.54),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new P(a*.318,.054,-.562),new P(a*.318,.032,-.488)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(Dh(i,c,h,!1,o,n,s)),e.push(...Fh(i,o,!1,t))}return e}function Fh(i,t,e,n){const s=[],o=Xu(t,e),a=n===0?16:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4),f=l.dirX,p=l.dirZ,_=Math.hypot(f,p),M=f/_,x=p/_,b=x,y=-M;for(let w=0;w<=a;w++){const C=w/a,E=X.lerp(-.38,1,C),R=Math.max(0,E),L=Math.max(0,-E)*.042,I=Math.sin(R*Math.PI)*.011-.009*R*R+L,k=l.rootX+M*l.toeLength*E,D=l.rootZ+x*l.toeLength*E,U=l.rootY+I,O=1+.44*Math.pow(1-xe(-.38,.18,E),1.5),F=1+.15*ve(R,.4,.18)+.14*ve(R,.84,.1),Z=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(C-.89)/.11),2))),G=X.lerp(l.baseRadius,l.tipRadius,R)*O*F*Z;for(let $=0;$<=r;$++){const q=$/r,W=q*Math.PI*2,nt=Math.sin(W),ot=Math.cos(W),Q=ot>.15?Math.pow(Math.max(0,Math.sin(R*Math.PI*4.5)),.75)*.0042*((ot-.15)/.85):0,it=1.12+.24*(1-xe(-.35,.22,E)),j=k+b*nt*G*it,tt=D+y*nt*G*it;let ft=U+ot*(G*.86+Q);ft<.003&&(ft=.003+Math.max(0,ft)*.12);const et=w*(r+1)+$;u[et*3]=j,u[et*3+1]=ft,u[et*3+2]=tt,d[et*2]=C*.42,d[et*2+1]=q*.36,m[et*4]=ot>.05?1.95:.38,v.set([c,0,0,0],et*4),g.set([1,0,0,0],et*4)}}const A=new Uint16Array(a*r*6);let T=0;for(let w=0;w<a;w++)for(let C=0;C<r;C++){const E=w*(r+1)+C,R=(w+1)*(r+1)+C,L=(w+1)*(r+1)+(C+1),I=w*(r+1)+(C+1);A[T++]=E,A[T++]=R,A[T++]=L,A[T++]=E,A[T++]=L,A[T++]=I}const S=new jt;S.setAttribute("position",new J(u,3)),S.setAttribute("uv",new J(d,2)),S.setAttribute("aAnatomyData",new J(m,4)),S.setAttribute("skinIndex",new Ce(v,4)),S.setAttribute("skinWeight",new Kt(g,4)),S.setIndex(new J(A,1)),S.computeVertexNormals(),ar(S,a,r),s.push(S)}return s}function Dh(i,t,e,n,s,o,a){const r=s==="L"?1:-1,l=new si(t,!1,"centripetal",.5),c=e.map(b=>i.boneIndexMap.get(b)),h=e.map(b=>i.bindWorldPositions.get(b)),u=(o+1)*(a+1),d=new Float32Array(u*3),m=new Float32Array(u*2),v=new Float32Array(u*4),g=new Uint16Array(u*4),f=new Float32Array(u*4),p=new P(0,0,1);for(let b=0;b<=o;b++){const A=1-b/o,T=l.getPointAt(A),S=l.getTangentAt(A).negate().normalize(),w=p.clone().addScaledVector(S,-p.dot(S)).normalize(),C=new P().crossVectors(w,S).normalize(),E=.52+.48*xe(0,.34,A),R=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(A-.91)/.09),2)))*E;let L=.095,I=.11;if(n){const U=ve(A,.54,.16)*.028,O=ve(A,.86,.12)*.088;L=(.09+U+O)*R,I=(.106+ve(A,.26,.18)*.036+U+O*.86)*R}else{const U=ve(A,.52,.15)*.032,O=ve(A,.86,.12)*.082;L=(.088+U+O)*R,I=(.11+ve(A,.26,.19)*.046+U*1.08+O*.84)*R}const k=xe(.7,.94,A),D=1-xe(.08,.42,A);for(let U=0;U<=a;U++){const O=U/a,F=O*Math.PI*2,Z=Math.sin(F),G=Math.cos(F),$=Z*r>0?Math.abs(Z):0,q=1-.28*D*$;let W=1;if(k>.01&&G>-.35){const N=Math.atan2(Z,Math.max(.05,G+.25)),K=Math.cos(N*3.6);W+=.16*k*Math.max(-.12,K)*xe(-.35,.45,G)}const nt=xe(-.82,.78,G+.35*$),ot=Math.pow(xe(.08,.94,A),1.42),Q=Math.pow(xe(.56,.95,A),1.75),it=A*22,j=O*14+Math.floor(it)*.5,tt=Math.max(0,Math.sin(it*Math.PI))*Math.max(0,Math.sin(j*Math.PI))*.0018*nt*Q,ft=L*q*W+tt,et=I*W+tt,z=new P().copy(T).addScaledVector(C,ft*Z).addScaledVector(w,et*G);A>.7&&z.y<.004&&(z.y=.002+Math.max(0,z.y)*.14);const xt=b*(a+1)+U;d[xt*3]=z.x,d[xt*3+1]=z.y,d[xt*3+2]=z.z,m[xt*2]=A*1.35,m[xt*2+1]=O*.85,v[xt*4]=.34+1.48*nt*ot;const gt=Mi(z,c,h,3.5),Et=xe(.24,0,A)*.72,Tt=c[c.length-1],Ft=xe(.74,.88,A),ht=(1-Et)*(1-Ft),H=Xe([Tt,c[0],gt.indices[0],gt.indices[1]],[Ft,Et*(1-Ft),gt.weights[0]*ht,gt.weights[1]*ht]);g.set(H.indices,xt*4),f.set(H.weights,xt*4)}}const _=new Uint16Array(o*a*6);let M=0;for(let b=0;b<o;b++)for(let y=0;y<a;y++){const A=b*(a+1)+y,T=(b+1)*(a+1)+y,S=(b+1)*(a+1)+(y+1),w=b*(a+1)+(y+1);_[M++]=A,_[M++]=T,_[M++]=S,_[M++]=A,_[M++]=S,_[M++]=w}const x=new jt;return x.setAttribute("position",new J(d,3)),x.setAttribute("uv",new J(m,2)),x.setAttribute("aAnatomyData",new J(v,4)),x.setAttribute("skinIndex",new Ce(g,4)),x.setAttribute("skinWeight",new Kt(f,4)),x.setIndex(new J(_,1)),x.computeVertexNormals(),ar(x,o,a),x}function ar(i,t,e){const n=i.getAttribute("normal"),s=new P,o=new P;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function zv(i,t){return{jawSkinGeometry:je([Bv(i,t),...Ov(i,t)]),oralGumsGeometry:Hv(i,t),teethGeometry:Wv(i,t),tongueGeometry:Vv(i,t),irisGeometry:Nh(i,t,!1),corneaGeometry:Nh(i,t,!0),clawsGeometry:Gv(i,t)}}function Yn(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Bv(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),m=new Float32Array(l*4);for(let p=0;p<=e;p++){const _=p/e,M=X.lerp(1.55,2.226,_),x=yo(M),b=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(_-.88)/.12),2))),y=Math.max(.002,(x-.0035*Yn(1.66,1.76,M))*b),A=as(M),T=.028*(1-Yn(1.55,1.7,M)),S=A+.0035+T,w=(.088-.034*_)*b;for(let C=0;C<=n;C++){const E=C/n,R=E*Math.PI*2,L=Math.sin(R),I=Math.cos(R),k=Math.exp(-Math.pow((_-.28)/.22,2))*.011,D=Math.exp(-Math.pow((_-.3)/.16,2))*Math.abs(L)*.01,U=(y+D)*L,O=-.022*I*(1-Math.pow(L,2))*Yn(1.68,1.78,M),F=I>=0?S+O:S+(w+k)*I;let Z=0,G=F;if(M>1.98&&M<2.18&&I<-.55){const tt=Math.abs(U-.024-(M-2.08)*.25);tt<.013&&(Z=1-tt/.013,G+=.0022*Z)}const $=p*(n+1)+C;c[$*3]=U,c[$*3+1]=G,c[$*3+2]=M,h[$*2]=_*.95,h[$*2+1]=E*.85;const q=Math.exp(-Math.pow(I/.35,2));u[$*4]=Math.min(1,.38+.56*Math.max(q,_>.7?(_-.7)*3:0)),u[$*4+1]=Z,u[$*4+2]=0,u[$*4+3]=0;const W=Yn(1.62,1.71,M),nt=1-W,ot=Yn(1.42,1.64,M),Q=Yn(1.36,1.56,M),it=nt*(1-ot),j=Xe([s,o,a,r],[W,nt*ot,it*(.52+.48*Q),it*(.48-.48*Q)]);d.set(j.indices,$*4),m.set(j.weights,$*4)}}const v=new Uint16Array(e*n*6);let g=0;for(let p=0;p<e;p++)for(let _=0;_<n;_++){const M=p*(n+1)+_,x=(p+1)*(n+1)+_,b=(p+1)*(n+1)+(_+1),y=p*(n+1)+(_+1);v[g++]=M,v[g++]=x,v[g++]=b,v[g++]=M,v[g++]=b,v[g++]=y}const f=new jt;return f.setAttribute("position",new J(c,3)),f.setAttribute("uv",new J(h,2)),f.setAttribute("aAnatomyData",new J(u,4)),f.setAttribute("skinIndex",new Ce(d,4)),f.setAttribute("skinWeight",new Kt(m,4)),f.setIndex(new J(v,1)),f.computeVertexNormals(),f}function Ov(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=t===0?14:8,o=t===0?12:8,a=[];for(const r of["L","R"]){const l=r==="L"?1:-1,c=(s+1)*(o+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let _=0;_<=o;_++){const M=_/o;for(let x=0;x<=s;x++){const b=x/s,y=X.lerp(1.65,1.9,b),A=as(y),T=yo(y)-.008,S=-.016*Math.sin(M*Math.PI)*Math.pow(b,1.3),w=.026*(1-.55*b),C=A+(M-.5)*2*w,E=l*(T-.006*b+S*.35),R=_*(s+1)+x;h[R*3]=E,h[R*3+1]=C,h[R*3+2]=y+S,u[R*2]=b*.3,u[R*2+1]=M*.3,d[R*4]=.35;const L=Yn(0,1,M),I=1-L;m.set([e,n,0,0],R*4),v.set([L,I,0,0],R*4)}}const g=new Uint16Array(s*o*6);let f=0;for(let _=0;_<o;_++)for(let M=0;M<s;M++){const x=_*(s+1)+M,b=(_+1)*(s+1)+M,y=(_+1)*(s+1)+(M+1),A=_*(s+1)+(M+1);r==="L"?(g[f++]=x,g[f++]=A,g[f++]=y,g[f++]=x,g[f++]=y,g[f++]=b):(g[f++]=x,g[f++]=b,g[f++]=y,g[f++]=x,g[f++]=y,g[f++]=A)}const p=new jt;p.setAttribute("position",new J(h,3)),p.setAttribute("uv",new J(u,2)),p.setAttribute("aAnatomyData",new J(d,4)),p.setAttribute("skinIndex",new Ce(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new J(g,1)),p.computeVertexNormals(),a.push(p)}return a}function Zu(i,t){const e=1.76+Math.cos(i)*(t?.422:.406),n=Math.max(.04,yo(e)-(t?.022:.03));return{x:Math.sin(i)*n,z:e}}function Hv(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=[],o=t===0?32:18,a=t===0?28:16;for(const u of[!0,!1]){const d=u?e:n,m=(o+1)*(a+1),v=new Float32Array(m*3),g=new Float32Array(m*2),f=new Float32Array(m*4),p=new Uint16Array(m*4),_=new Float32Array(m*4);for(let y=0;y<=o;y++){const A=y/o,T=X.lerp(1.68,2.19,A),S=as(T),w=Math.max(.02,(yo(T)-.016)*Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(A-.86)/.14),2))));for(let C=0;C<=a;C++){const E=C/a*2-1,R=Math.abs(E),L=Math.sqrt(Math.max(0,1-E*E)),I=E*w;let k;if(u){const U=A*Math.PI*18-R*2.6,O=Math.pow(.5+.5*Math.sin(U),1.8)*.0052*L*Yn(.08,.25,A),F=-.0032*Math.exp(-Math.pow(E/.1,2))*L,Z=.0035*Math.abs(Math.sin(A*Math.PI*16))*Yn(.75,.98,R);k=S+.004+.032*L-O+F-Z}else{const U=.0038*Math.exp(-Math.pow((R-.34)/.14,2))*L,O=.0035*Math.exp(-Math.pow(E/.07,2))*Yn(.55,.2,A),F=.003*Math.abs(Math.sin(A*Math.PI*14))*Yn(.75,.98,R);k=S-.002-.02*L+U+O+F}const D=y*(a+1)+C;v[D*3]=I,v[D*3+1]=k,v[D*3+2]=T,g[D*2]=A*2.4,g[D*2+1]=(E*.5+.5)*2,f[D*4]=.45,f[D*4+2]=(1-Yn(0,.38,A))*.85,p.set([d,0,0,0],D*4),_.set([1,0,0,0],D*4)}}const M=new Uint16Array(o*a*6);let x=0;for(let y=0;y<o;y++)for(let A=0;A<a;A++){const T=y*(a+1)+A,S=(y+1)*(a+1)+A,w=(y+1)*(a+1)+(A+1),C=y*(a+1)+(A+1);u?(M[x++]=T,M[x++]=w,M[x++]=S,M[x++]=T,M[x++]=C,M[x++]=w):(M[x++]=T,M[x++]=S,M[x++]=w,M[x++]=T,M[x++]=w,M[x++]=C)}const b=new jt;b.setAttribute("position",new J(v,3)),b.setAttribute("uv",new J(g,2)),b.setAttribute("aAnatomyData",new J(f,4)),b.setAttribute("skinIndex",new Ce(p,4)),b.setAttribute("skinWeight",new Kt(_,4)),b.setIndex(new J(M,1)),b.computeVertexNormals(),s.push(b)}const r=t===0?42:22,l=t===0?12:8;for(const u of[!0,!1]){const d=u?e:n,m=u?16:14,v=.0155,g=(r+1)*(l+1),f=new Float32Array(g*3),p=new Float32Array(g*2),_=new Float32Array(g*4),M=new Uint16Array(g*4),x=new Float32Array(g*4),b=[];for(let w=0;w<=18;w++){const C=X.lerp(-Math.PI*.46,Math.PI*.46,w/18),E=Zu(C,u),R=as(E.z)+(u?.012:-.01);b.push(new P(E.x,R,E.z))}const y=new si(b);for(let w=0;w<=r;w++){const C=w/r,E=y.getPointAt(C),R=y.getTangentAt(C).normalize(),L=new P(0,1,0),I=new P().crossVectors(L,R).normalize(),k=1+.24*Math.pow(.5+.5*Math.cos(C*Math.PI*m*2),2),D=v*k;for(let U=0;U<=l;U++){const O=U/l,F=O*Math.PI*2,Z=1+.12*Math.sin(F*3),G=new P().copy(E).addScaledVector(I,D*Z*Math.sin(F)).addScaledVector(L,D*.82*Math.cos(F)),$=w*(l+1)+U;f[$*3]=G.x,f[$*3+1]=G.y,f[$*3+2]=G.z,p[$*2]=C*3,p[$*2+1]=O*1.2,_[$*4]=.4,M.set([d,0,0,0],$*4),x.set([1,0,0,0],$*4)}}const A=new Uint16Array(r*l*6);let T=0;for(let w=0;w<r;w++)for(let C=0;C<l;C++){const E=w*(l+1)+C,R=(w+1)*(l+1)+C,L=(w+1)*(l+1)+(C+1),I=w*(l+1)+(C+1);A[T++]=E,A[T++]=R,A[T++]=L,A[T++]=E,A[T++]=L,A[T++]=I}const S=new jt;S.setAttribute("position",new J(f,3)),S.setAttribute("uv",new J(p,2)),S.setAttribute("aAnatomyData",new J(_,4)),S.setAttribute("skinIndex",new Ce(M,4)),S.setAttribute("skinWeight",new Kt(x,4)),S.setIndex(new J(A,1)),S.computeVertexNormals(),s.push(S)}const c=t===0?18:10,h=t===0?12:8;{const u=(c+1)*(h+1),d=new Float32Array(u*3),m=new Float32Array(u*2),v=new Float32Array(u*4),g=new Uint16Array(u*4),f=new Float32Array(u*4);for(let x=0;x<=h;x++){const b=x/h;for(let y=0;y<=c;y++){const A=y/c,T=X.lerp(-Math.PI*.62,Math.PI*.62,A),S=1.78-Math.cos(T)*.11,w=yo(Math.max(1.66,S))-.022,C=Math.sin(T)*w,E=as(S),R=X.lerp(E-.018,E+.03,b),L=x*(c+1)+y;d[L*3]=C,d[L*3+1]=R,d[L*3+2]=S,m[L*2]=A*1.5,m[L*2+1]=b*1.5,v[L*4]=.5,v[L*4+2]=.95*Math.cos(T*.65);const I=Yn(0,1,b);g.set([e,n,0,0],L*4),f.set([I,1-I,0,0],L*4)}}const p=new Uint16Array(c*h*6);let _=0;for(let x=0;x<h;x++)for(let b=0;b<c;b++){const y=x*(c+1)+b,A=(x+1)*(c+1)+b,T=(x+1)*(c+1)+(b+1),S=x*(c+1)+(b+1);p[_++]=y,p[_++]=A,p[_++]=T,p[_++]=y,p[_++]=T,p[_++]=S}const M=new jt;M.setAttribute("position",new J(d,3)),M.setAttribute("uv",new J(m,2)),M.setAttribute("aAnatomyData",new J(v,4)),M.setAttribute("skinIndex",new Ce(g,4)),M.setAttribute("skinWeight",new Kt(f,4)),M.setIndex(new J(p,1)),M.computeVertexNormals(),s.push(M)}return je(s)}function Wv(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,m=X.lerp(-Math.PI*.42,Math.PI*.42,d),v=Zu(m,r),g=v.x,f=v.z,p=as(f)+(r?.011:-.01),_=1+.34*Math.exp(-Math.pow((Math.abs(m)-.52)/.25,2)),M=.023*_*(.78+.22*Math.cos(m)),x=.0062*_,b=(o+1)*(a+1),y=new Float32Array(b*3),A=new Float32Array(b*2),T=new Float32Array(b*4),S=new Uint16Array(b*4),w=new Float32Array(b*4),C=-Math.sin(m),E=-Math.cos(m);for(let k=0;k<=o;k++){const D=r?1-k/o:k/o,U=x*(1-.88*Math.pow(D,1.25)),O=.0055*D*D,F=g+C*O,Z=p+h*M*D,G=f+E*O-.003*D*D;for(let $=0;$<=a;$++){const q=$/a,W=q*Math.PI*2,nt=k*(a+1)+$;y[nt*3]=F+Math.sin(W)*U,y[nt*3+1]=Z,y[nt*3+2]=G+Math.cos(W)*U,A[nt*2]=D,A[nt*2+1]=q,S.set([c,0,0,0],nt*4),w.set([1,0,0,0],nt*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let k=0;k<o;k++)for(let D=0;D<a;D++){const U=k*(a+1)+D,O=(k+1)*(a+1)+D,F=(k+1)*(a+1)+(D+1),Z=k*(a+1)+(D+1);R[L++]=U,R[L++]=O,R[L++]=F,R[L++]=U,R[L++]=F,R[L++]=Z}const I=new jt;I.setAttribute("position",new J(y,3)),I.setAttribute("uv",new J(A,2)),I.setAttribute("aAnatomyData",new J(T,4)),I.setAttribute("skinIndex",new Ce(S,4)),I.setAttribute("skinWeight",new Kt(w,4)),I.setIndex(new J(R,1)),I.computeVertexNormals(),s.push(I)}}return je(s)}function Vv(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(f=>i.boneIndexMap.get(f)),a=s.map(f=>i.bindWorldPositions.get(f)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let f=0;f<=e;f++){const p=f/e,_=X.lerp(1.74,2.12,p),M=as(_)-.004,x=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),b=(.08+.012*Math.sin(p*Math.PI)-.022*p)*x,y=(.015-.005*p)*x;for(let A=0;A<=n;A++){const T=A/n,S=T*Math.PI*2,w=Math.sin(S),C=Math.cos(S),E=C>.35?-.0042*Math.exp(-Math.pow(w/.24,2)):0,R=C>.2?.0012*Math.sin(p*Math.PI*26)*Math.cos(w*Math.PI*9)*x:0,L=new P(b*w,M+y*C+E+R,_),I=f*(n+1)+A;l[I*3]=L.x,l[I*3+1]=L.y,l[I*3+2]=L.z,c[I*2]=p*2.5,c[I*2+1]=T*1.8;const k=Mi(L,o,a,3.8);u.set(k.indices,I*4),d.set(k.weights,I*4)}}const m=new Uint16Array(e*n*6);let v=0;for(let f=0;f<e;f++)for(let p=0;p<n;p++){const _=f*(n+1)+p,M=(f+1)*(n+1)+p,x=(f+1)*(n+1)+(p+1),b=f*(n+1)+(p+1);m[v++]=_,m[v++]=M,m[v++]=x,m[v++]=_,m[v++]=x,m[v++]=b}const g=new jt;return g.setAttribute("position",new J(l,3)),g.setAttribute("uv",new J(c,2)),g.setAttribute("aAnatomyData",new J(h,4)),g.setAttribute("skinIndex",new Ce(u,4)),g.setAttribute("skinWeight",new Kt(d,4)),g.setIndex(new J(m,1)),g.computeVertexNormals(),g}function Nh(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?ta:ea).clone(),u=new P(r*-.16,.985,.06).normalize(),d=new P().crossVectors(u,h).normalize(),m=new P().crossVectors(h,d).normalize(),v=e?ja+9e-4:ja,g=.94,f=(s+1)*(o+1),p=new Float32Array(f*3),_=new Float32Array(f*2),M=new Float32Array(f*4),x=new Uint16Array(f*4),b=new Float32Array(f*4);for(let S=0;S<=s;S++){const w=S/s*(e?Math.PI*.52:Math.PI*.88),C=Math.sin(w),E=Math.cos(w);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,I=Math.cos(L),k=Math.sin(L);let D=v;if(w<g){const G=1-w/g;e?D+=.0014*G*G:D-=.0028*G*G}const U=new P().addScaledVector(h,E).addScaledVector(d,C*I).addScaledVector(m,C*k).normalize(),O=new P().copy(l).addScaledVector(U,D),F=S*(o+1)+R;p[F*3]=O.x,p[F*3+1]=O.y,p[F*3+2]=O.z;const Z=Math.min(.498,w/g*.48);_[F*2]=.5+Z*I,_[F*2+1]=.5+Z*k,x.set([c,0,0,0],F*4),b.set([1,0,0,0],F*4)}}const y=new Uint16Array(s*o*6);let A=0;for(let S=0;S<s;S++)for(let w=0;w<o;w++){const C=S*(o+1)+w,E=(S+1)*(o+1)+w,R=(S+1)*(o+1)+(w+1),L=S*(o+1)+(w+1);y[A++]=C,y[A++]=E,y[A++]=R,y[A++]=C,y[A++]=R,y[A++]=L}const T=new jt;T.setAttribute("position",new J(p,3)),T.setAttribute("uv",new J(_,2)),T.setAttribute("aAnatomyData",new J(M,4)),T.setAttribute("skinIndex",new Ce(x,4)),T.setAttribute("skinWeight",new Kt(b,4)),T.setIndex(new J(y,1)),T.computeVertexNormals(),n.push(T)}return je(n)}function Gv(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=Xu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,m=d,v=-u,g=.74,f=l.rootX+u*l.toeLength*g,p=l.rootZ+d*l.toeLength*g,_=l.rootY+Math.sin(g*Math.PI)*.011-.009*g*g+.002,M=l.toeLength*(1-g)+l.clawLength,x=l.tipRadius*.76,b=(n+1)*(s+1),y=new Float32Array(b*3),A=new Float32Array(b*2),T=new Float32Array(b*4),S=new Uint16Array(b*4),w=new Float32Array(b*4);for(let L=0;L<=n;L++){const I=L/n,k=x*(1-.85*Math.pow(I,1.52)),D=f+u*M*I,U=p+d*M*I,O=Math.max(.004,_-.036*Math.pow(I,1.8)+.006*Math.sin(I*Math.PI));for(let F=0;F<=s;F++){const Z=F/s,G=Z*Math.PI*2,$=Math.sin(G),q=Math.cos(G),W=L*(s+1)+F;y[W*3]=D+m*$*k*.74,y[W*3+1]=Math.max(.002,O+q*k*1.05),y[W*3+2]=U+v*$*k*.74,A[W*2]=I,A[W*2+1]=Z,S.set([c,0,0,0],W*4),w.set([1,0,0,0],W*4)}}const C=new Uint16Array(n*s*6);let E=0;for(let L=0;L<n;L++)for(let I=0;I<s;I++){const k=L*(s+1)+I,D=(L+1)*(s+1)+I,U=(L+1)*(s+1)+(I+1),O=L*(s+1)+(I+1);C[E++]=k,C[E++]=D,C[E++]=U,C[E++]=k,C[E++]=U,C[E++]=O}const R=new jt;R.setAttribute("position",new J(y,3)),R.setAttribute("uv",new J(A,2)),R.setAttribute("aAnatomyData",new J(T,4)),R.setAttribute("skinIndex",new Ce(S,4)),R.setAttribute("skinWeight",new Kt(w,4)),R.setIndex(new J(C,1)),R.computeVertexNormals(),e.push(R)}}return je(e)}function Xv(i,t){const e=[],n=[],s=[];for(const o of["L","R"]){const a=o==="L"?1:-1;e.push(...Yv(i,o,a,t)),n.push(...$v(i,o,a,t)),e.push(...qv(i,o,t)),n.push(Zv(i,o,t)),s.push(Jv(i,o,a,t))}return e.push(...jv(i,t)),n.push(Kv(i,t)),{wingSparsSkinGeometry:je(e),wingMembraneGeometry:je(n),dorsalSpinesGeometry:Qv(i,t),alulaClawsGeometry:je(s)}}function jo(i,t,e,n,s,o,a=.55){const r=new si(t),l=e.map(x=>i.boneIndexMap.get(x)),c=e.map(x=>i.bindWorldPositions.get(x)),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4),f=new P(0,1,0);for(let x=0;x<=s;x++){const b=x/s,y=r.getPointAt(b),A=r.getTangentAt(b).normalize();let T=f.clone().addScaledVector(A,-f.dot(A));T.lengthSq()<1e-4&&T.set(0,0,1),T.normalize();const S=new P().crossVectors(T,A).normalize(),w=b*(n.length-1),C=Math.min(n.length-2,Math.floor(w)),E=w-C;let R=X.lerp(n[C],n[C+1],E);b>.92&&(R*=Math.sqrt(Math.max(0,1-Math.pow((b-.92)/.08,2))));for(let L=0;L<=o;L++){const I=L/o,k=I*Math.PI*2,D=new P().copy(y).addScaledVector(S,R*Math.sin(k)).addScaledVector(T,R*.88*Math.cos(k)),U=x*(o+1)+L;u[U*3]=D.x,u[U*3+1]=D.y,u[U*3+2]=D.z,d[U*2]=b*1.4,d[U*2+1]=I*.45,m[U*4]=a;const O=Mi(D,l,c,3.8);v.set(O.indices,U*4),g.set(O.weights,U*4)}}const p=new Uint16Array(s*o*6);let _=0;for(let x=0;x<s;x++)for(let b=0;b<o;b++){const y=x*(o+1)+b,A=(x+1)*(o+1)+b,T=(x+1)*(o+1)+(b+1),S=x*(o+1)+(b+1);p[_++]=y,p[_++]=A,p[_++]=T,p[_++]=y,p[_++]=T,p[_++]=S}const M=new jt;return M.setAttribute("position",new J(u,3)),M.setAttribute("uv",new J(d,2)),M.setAttribute("aAnatomyData",new J(m,4)),M.setAttribute("skinIndex",new Ce(v,4)),M.setAttribute("skinWeight",new Kt(g,4)),M.setIndex(new J(p,1)),M.computeVertexNormals(),M}function Yv(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new P(e*.17,1.01,.75),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(jo(i,c,h,[.062,.068,.066,.056,.044,.03,.008],o,a,.72));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const m=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),v=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(jo(i,[u,m,v],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.03,.019,.005],r,l,.58))}return s}function $v(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),m=i.bindWorldPositions.get(`wingWrist_${t}`),v=i.bindWorldPositions.get(`wingElbow_${t}`),g=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(ho(o,Math.max(4,Math.floor(a*.5)),(A,T)=>{const S=new P().lerpVectors(new P(e*.3,1.13,.88),m,A);S.z+=.05*Math.sin(A*Math.PI);const w=A<.48?new P().lerpVectors(g,v,A/.48):new P().lerpVectors(v,m,(A-.48)/.52),C=new P().lerpVectors(w,S,T),E=Math.max(0,(A-.45)/.55),R=Math.max(0,(.55-A)/.55),L=1-Math.abs(A-.5)*1.8,I=Xe([c,l,r,h],[R,Math.max(0,L),E,(1-A)*.25]);return{pos:C,skin:I,thinness:T*.65}}));const f=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),_=i.boneIndexMap.get(`wingFinger_${t}_1_a`),M=i.boneIndexMap.get(`wingFinger_${t}_1_b`),x=new P(e*.32,1.06,.72),b=new P(e*.29,.9,.14),y=new P(e*.26,.82,-.46);s.push(ho(o,a,(A,T)=>{const S=T<.5?new P().lerpVectors(x,b,T*2):new P().lerpVectors(b,y,(T-.5)*2),w=T<.5?new P().lerpVectors(m,f,T*2):new P().lerpVectors(f,p,(T-.5)*2),C=A<.45?new P().lerpVectors(x,v,A/.45):new P().lerpVectors(v,m,(A-.45)/.55),E=new P().lerpVectors(S,w,A),R=new P().lerpVectors(C,E,Math.pow(T,.88)),L=Math.sin(A*Math.PI)*Math.pow(T,2.2);R.z+=.19*L,R.y+=.035*Math.sin(A*Math.PI)*Math.sin(T*Math.PI);const I=T<.42?h:T<.78?u:d,k=T<.35?r:T<.72?_:M,D=(1-T)*Math.sin(A*Math.PI)*.6,U=Xe([I,k,l,r],[(1-A)*(1-D*.5),A*(1-D*.5),D*.65,D*.35]);return{pos:R,skin:U,thinness:.35+.65*Math.sin(A*Math.PI)*T}}));for(let A=1;A<=5;A++){const T=i.bindWorldPositions.get(`wingFinger_${t}_${A}_a`),S=i.bindWorldPositions.get(`wingFinger_${t}_${A}_b`),w=i.bindWorldPositions.get(`wingFinger_${t}_${A+1}_a`),C=i.bindWorldPositions.get(`wingFinger_${t}_${A+1}_b`),E=i.boneIndexMap.get(`wingFinger_${t}_${A}_a`),R=i.boneIndexMap.get(`wingFinger_${t}_${A}_b`),L=i.boneIndexMap.get(`wingFinger_${t}_${A+1}_a`),I=i.boneIndexMap.get(`wingFinger_${t}_${A+1}_b`),k=A===5?.24:.17;s.push(ho(o,a,(D,U)=>{const O=U<.5?new P().lerpVectors(m,T,U*2):new P().lerpVectors(T,S,(U-.5)*2),F=U<.5?new P().lerpVectors(m,w,U*2):new P().lerpVectors(w,C,(U-.5)*2),Z=new P().lerpVectors(O,F,D),G=new P().subVectors(m,Z).normalize(),$=Math.sin(D*Math.PI)*Math.pow(U,2.4);Z.addScaledVector(G,k*$),Z.y+=.028*Math.sin(D*Math.PI)*Math.sin(U*Math.PI);let q;if(U<.25){const W=1-U/.25;q=Xe([r,E,L,0],[W,(1-W)*(1-D),(1-W)*D,0])}else{const W=Math.max(0,Math.min(1,(U-.42)/.48));q=Xe([E,R,L,I],[(1-D)*(1-W),(1-D)*W,D*(1-W),D*W])}return{pos:Z,skin:q,thinness:.3+.7*Math.sin(D*Math.PI)*Math.pow(U,.7)}}))}return s}function qv(i,t,e){const n=e===0?12:7,s=e===0?8:6,o=t==="L"?1:-1,a=[];return Za.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new P(o*r.rootX,r.rootY,r.rootZ),u=new P(o*r.tipX,r.tipY,r.tipZ);a.push(jo(i,[h,u],[c],[.017,.004],n,s,.55))}),a}function Zv(i,t,e){const n=e===0?12:7,s=t==="L"?1:-1,o=[],a=Za.map(d=>new P(s*d.rootX,d.rootY,d.rootZ)),r=Za.map(d=>new P(s*d.tipX,d.tipY,d.tipZ)),l=[1,2,3].map(d=>i.boneIndexMap.get(`pelvicFin_${t}_${d}`)),c=i.boneIndexMap.get("tail_3"),h=new P(s*.1,.54,-1.56),u=[{rA:a[0],tA:r[0],rB:a[1],tB:r[1],iA:l[0],iB:l[1]},{rA:a[1],tA:r[1],rB:a[2],tB:r[2],iA:l[1],iB:l[2]},{rA:a[2],tA:r[2],rB:h,tB:h,iA:l[2],iB:c}];for(const d of u)o.push(ho(n,n,(m,v)=>{const g=new P().lerpVectors(d.rA,d.tA,v),f=new P().lerpVectors(d.rB,d.tB,v),p=new P().lerpVectors(g,f,m),_=new P().subVectors(d.rA,p).normalize();p.addScaledVector(_,.042*Math.sin(m*Math.PI)*Math.pow(v,2.1));const M=Xe([d.iA,d.iB,0,0],[1-m,m,0,0]);return{pos:p,skin:M,thinness:.4+.55*v}}));return je(o)}function jv(i,t){const e=t===0?12:7,n=t===0?8:6,s=[];return Ps.forEach((o,a)=>{const r=`tailFin_R_${a+1}`,l=new P(-o.rootX,o.rootY,o.rootZ),c=new P(-o.tipX,o.tipY,o.tipZ);s.push(jo(i,[l,c],[r],[.014,.0038],e,n,.52))}),s}function Kv(i,t){const e=t===0?12:7,n=[];for(let h=0;h<4;h++){const u=Ps[h],d=Ps[h+1],m=new P(-u.rootX,u.rootY,u.rootZ),v=new P(-d.rootX,d.rootY,d.rootZ),g=new P(-u.tipX,u.tipY,u.tipZ),f=new P(-d.tipX,d.tipY,d.tipZ),p=i.boneIndexMap.get(`tailFin_R_${h+1}`),_=i.boneIndexMap.get(`tailFin_R_${h+2}`);n.push(ho(e,e,(M,x)=>{const b=new P().lerpVectors(m,g,x),y=new P().lerpVectors(v,f,x),A=new P().lerpVectors(b,y,M),T=new P().lerpVectors(m,v,M),S=new P().subVectors(T,A).normalize();A.addScaledVector(S,.046*Math.sin(M*Math.PI)*Math.pow(x,2.15));const w=Xe([p,_,0,0],[1-M,M,0,0]);return{pos:A,skin:w,thinness:.45+.55*x}}))}const s=Ps[4],o=new P(-s.rootX,s.rootY,s.rootZ),a=new P(-s.tipX,s.tipY,s.tipZ),r=new P(-s.rootX,s.rootY,-4.5),l=i.boneIndexMap.get("tailFin_R_5"),c=i.boneIndexMap.get("tailFinHinge_R");return n.push(ho(e,e,(h,u)=>{const d=new P().lerpVectors(o,a,u),m=new P().lerpVectors(d,r,h),v=Xe([l,c,0,0],[1-h,h,0,0]);return{pos:m,skin:v,thinness:.45+.5*u}})),je(n)}function ho(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const m=d/t;for(let v=0;v<=i;v++){const g=v/i,f=e(g,m),p=d*(i+1)+v;s[p*3]=f.pos.x,s[p*3+1]=f.pos.y,s[p*3+2]=f.pos.z,o[p*2]=g*1.25,o[p*2+1]=m*1.25,a[p*4]=.22,a[p*4+1]=0,a[p*4+2]=.18*f.thinness,a[p*4+3]=f.thinness,r.set(f.skin.indices,p*4),l.set(f.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let m=0;m<i;m++){const v=d*(i+1)+m,g=(d+1)*(i+1)+m,f=(d+1)*(i+1)+(m+1),p=d*(i+1)+(m+1);c[h++]=v,c[h++]=g,c[h++]=f,c[h++]=v,c[h++]=f,c[h++]=p}const u=new jt;return u.setAttribute("position",new J(s,3)),u.setAttribute("uv",new J(o,2)),u.setAttribute("uv1",new J(o,2)),u.setAttribute("aAnatomyData",new J(a,4)),u.setAttribute("skinIndex",new Ce(r,4)),u.setAttribute("skinWeight",new Kt(l,4)),u.setIndex(new J(c,1)),u.computeVertexNormals(),u}function Qv(i,t){const e=t===0?32:t===1?22:14,n=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],s=n.map(x=>i.boneIndexMap.get(x)),o=n.map(x=>i.bindWorldPositions.get(x)),a=e*2,r=6,l=8,c=new Float32Array(a*r*3),h=new Float32Array(a*r*3),u=new Float32Array(a*r*2),d=new Float32Array(a*r*4),m=new Uint16Array(a*r*4),v=new Float32Array(a*r*4),g=new Uint16Array(a*l*3);let f=0,p=0;for(let x=0;x<e;x++){const b=x/(e-1),y=X.lerp(-3.25,1.48,1-Math.pow(1-b,1.28)),A=Kr(y),T=A.point,S=A.tangent,w=A.up,C=.32+.68*Math.sin(Math.pow(b,.74)*Math.PI),E=.078*C,R=.108*C,L=-.028,I=qu(T,i,s,o);for(const k of[1,-1]){const D=k*.004,U=k*E*.62,O=-E*.16,F=Kr(y+R*.5).point,Z=Kr(y-R*.5).point,G=[F.clone().addScaledVector(w,L).setX(D),Z.clone().addScaledVector(w,L).setX(D),T.clone().addScaledVector(w,L*.85).setX(k*.02*C),T.clone().addScaledVector(S,R*.1).addScaledVector(w,E*.64).setX(D*1.2),T.clone().addScaledVector(S,-R*.4).addScaledVector(w,E).setX(D*1.1),T.clone().addScaledVector(S,-R*.12).addScaledVector(w,E*.42).setX(k*.001)],$=G.map((W,nt)=>{const ot=W.clone();if(nt>=3){const Q=nt===4?1:nt===3?.68:.48;ot.x+=U*Q,ot.y+=O*Q}return ot});for(let W=0;W<r;W++){const nt=(f+W)*3;c[nt]=G[W].x,c[nt+1]=G[W].y,c[nt+2]=G[W].z,h[nt]=$[W].x,h[nt+1]=$[W].y,h[nt+2]=$[W].z,u[(f+W)*2]=b,u[(f+W)*2+1]=W/r,d[(f+W)*4]=.75,d[(f+W)*4+1]=0,d[(f+W)*4+2]=W===5||W>=3?.96:.72,d[(f+W)*4+3]=0,m.set(I.indices,(f+W)*4),v.set(I.weights,(f+W)*4)}const q=k>0?[[0,2,3],[2,1,4],[2,4,3],[0,3,5],[5,3,4],[5,4,1],[0,5,1],[0,1,2]]:[[0,3,2],[2,4,1],[2,3,4],[0,5,3],[5,4,3],[5,1,4],[0,1,5],[0,2,1]];for(const W of q)g[p++]=f+W[0],g[p++]=f+W[1],g[p++]=f+W[2];f+=r}}const _=new jt;_.setAttribute("position",new J(c,3)),_.setAttribute("uv",new J(u,2)),_.setAttribute("uv1",new J(u,2)),_.setAttribute("aAnatomyData",new J(d,4)),_.setAttribute("skinIndex",new Ce(m,4)),_.setAttribute("skinWeight",new Kt(v,4)),_.setIndex(new J(g,1));const M=new J(h,3);return M.name="dorsalVSplit",_.morphAttributes.position=[M],_.computeVertexNormals(),_}function Jv(i,t,e,n){const s=i.bindWorldPositions.get(`wingWrist_${t}`),o=s.clone().add(new P(e*.035,.018,.085));return jo(i,[s,o],[`wingWrist_${t}`],[.016,.003],n===0?7:4,n===0?8:6,.8)}function tx(i,t){const e=[],n=[],s=[],o=i.boneIndexMap.get("prostheticCollar"),a=i.boneIndexMap.get("prostheticRod"),r=i.boneIndexMap.get("tail_8"),l=i.boneIndexMap.get("tail_9"),c=i.boneIndexMap.get("tail_10"),h=t===0?20:12,u=[{z:-3.48,y:.125,rOuter:.066,length:.044,boneIdx:o},{z:-3.56,y:.125,rOuter:.062,length:.04,boneIdx:o},{z:-4.34,y:.128,rOuter:.033,length:.032,boneIdx:c}];for(const y of u)e.push(Uo(new P(0,y.y,y.z-y.length*.5),new P(0,y.y,y.z+y.length*.5),y.rOuter,y.rOuter*1.03,h,y.boneIdx));e.push(Uo(new P(.044,.138,-3.6),new P(.048,.142,-3.46),.024,.028,t===0?14:8,o));const d=t===0?16:8;e.push(kh(new P(.038,.138,-3.52),new P(.02,.138,-4.34),.012,.0085,d,t===0?12:8,[a,l,c])),n.push(kh(new P(.026,.126,-3.5),new P(.014,.127,-4.35),.014,.009,d,t===0?10:6,[r,l,c]));const m=[],v=[],g=[];Ps.forEach((y,A)=>{const T=`tailFin_L_${A+1}`,S=i.boneIndexMap.get(T),w=new P(y.rootX,y.rootY,y.rootZ),C=new P(y.tipX,y.tipY,y.tipZ);m.push(w),v.push(C),g.push(S),n.push(ju(w,C,.0125,.004,t===0?10:6,t===0?10:6,S,S));const E=new P().subVectors(C,w).normalize();e.push(Uo(w.clone(),w.clone().addScaledVector(E,.026),.0155,.0145,t===0?10:6,S)),e.push(Uo(C.clone().addScaledVector(E,-.012),C.clone().addScaledVector(E,.02),.0055,.0018,t===0?8:6,S))});for(let y=1;y<=4;y++){const A=y/5,T=new P().lerpVectors(m[0],v[0],A);e.push(Uo(T.clone().add(new P(0,-.0055,0)),T.clone().add(new P(0,.0055,0)),.006,.006,8,g[0]))}const f=t===0?12:7;for(let y=0;y<4;y++){const A=m[y],T=m[y+1],S=v[y],w=v[y+1],C=g[y],E=g[y+1];s.push(Uh(f,y,(R,L)=>{const I=new P().lerpVectors(A,S,L),k=new P().lerpVectors(T,w,L),D=new P().lerpVectors(I,k,R),U=new P().lerpVectors(A,T,R),O=new P().subVectors(U,D).normalize();D.addScaledVector(O,.046*Math.sin(R*Math.PI)*Math.pow(L,2.15));const F=Xe([C,E,0,0],[1-R,R,0,0]);return{pos:D,skin:F}}))}const p=m[4],_=v[4],M=new P(p.x,p.y,-4.5),x=g[4],b=i.boneIndexMap.get("tailFinHinge_L");return s.push(Uh(f,4,(y,A)=>{const T=new P().lerpVectors(p,_,A),S=new P().lerpVectors(T,M,y),w=Xe([x,b,0,0],[1-y,y,0,0]);return{pos:S,skin:w}})),{bronzeHardwareGeometry:je(e),ironStrutsGeometry:je(n),scalePasteMembraneGeometry:je(s)}}function Uh(i,t,e){const n=(i+1)*(i+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=i;d++){const m=d/i;for(let v=0;v<=i;v++){const g=v/i,f=e(g,m),p=d*(i+1)+v;s[p*3]=f.pos.x,s[p*3+1]=f.pos.y,s[p*3+2]=f.pos.z,o[p*2]=(t+g)*.45,o[p*2+1]=m*1.2,a[p*4]=.55,a[p*4+3]=.25,r.set(f.skin.indices,p*4),l.set(f.skin.weights,p*4)}}const c=new Uint16Array(i*i*6);let h=0;for(let d=0;d<i;d++)for(let m=0;m<i;m++){const v=d*(i+1)+m,g=(d+1)*(i+1)+m,f=(d+1)*(i+1)+(m+1),p=d*(i+1)+(m+1);c[h++]=v,c[h++]=g,c[h++]=f,c[h++]=v,c[h++]=f,c[h++]=p}const u=new jt;return u.setAttribute("position",new J(s,3)),u.setAttribute("uv",new J(o,2)),u.setAttribute("uv1",new J(o,2)),u.setAttribute("aAnatomyData",new J(a,4)),u.setAttribute("skinIndex",new Ce(r,4)),u.setAttribute("skinWeight",new Kt(l,4)),u.setIndex(new J(c,1)),u.computeVertexNormals(),u}function Uo(i,t,e,n,s,o){return ju(i,t,e,n,3,s,o,o)}function ju(i,t,e,n,s,o,a,r){const c=new P().subVectors(t,i).clone().normalize();let h=new P(0,1,0);Math.abs(c.dot(h))>.92&&(h=new P(0,0,1));const u=h.clone().addScaledVector(c,-h.dot(c)).normalize(),d=new P().crossVectors(u,c).normalize(),m=(s+1)*(o+1),v=new Float32Array(m*3),g=new Float32Array(m*2),f=new Float32Array(m*4),p=new Uint16Array(m*4),_=new Float32Array(m*4);for(let y=0;y<=s;y++){const A=y/s,T=new P().lerpVectors(i,t,A),S=X.lerp(e,n,A),w=y===0||y===s?.35:1;for(let C=0;C<=o;C++){const E=C/o,R=E*Math.PI*2,L=T.clone().addScaledVector(d,S*w*Math.sin(R)).addScaledVector(u,S*w*Math.cos(R)),I=y*(o+1)+C;v[I*3]=L.x,v[I*3+1]=L.y,v[I*3+2]=L.z,g[I*2]=A,g[I*2+1]=E;const k=Xe([a,r,0,0],[1-A,A,0,0]);p.set(k.indices,I*4),_.set(k.weights,I*4)}}const M=new Uint16Array(s*o*6);let x=0;for(let y=0;y<s;y++)for(let A=0;A<o;A++){const T=y*(o+1)+A,S=(y+1)*(o+1)+A,w=(y+1)*(o+1)+(A+1),C=y*(o+1)+(A+1);M[x++]=T,M[x++]=S,M[x++]=w,M[x++]=T,M[x++]=w,M[x++]=C}const b=new jt;return b.setAttribute("position",new J(v,3)),b.setAttribute("uv",new J(g,2)),b.setAttribute("uv1",new J(g,2)),b.setAttribute("aAnatomyData",new J(f,4)),b.setAttribute("skinIndex",new Ce(p,4)),b.setAttribute("skinWeight",new Kt(_,4)),b.setIndex(new J(M,1)),b.computeVertexNormals(),b}function kh(i,t,e,n,s,o,a){const r=new P().subVectors(t,i).normalize(),l=new P(0,1,0).addScaledVector(r,-r.y).normalize(),c=new P().crossVectors(l,r).normalize(),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4);for(let M=0;M<=s;M++){const x=M/s,b=new P().lerpVectors(i,t,x),y=X.lerp(e,n,x),A=Math.max(0,1-x*2),T=Math.max(0,(x-.5)*2),S=1-A-T,w=Xe([a[0],a[1],a[2],0],[A,S,T,0]);for(let C=0;C<=o;C++){const E=C/o,R=E*Math.PI*2,L=b.clone().addScaledVector(c,y*Math.sin(R)).addScaledVector(l,y*Math.cos(R)),I=M*(o+1)+C;u[I*3]=L.x,u[I*3+1]=L.y,u[I*3+2]=L.z,d[I*2]=x,d[I*2+1]=E,v.set(w.indices,I*4),g.set(w.weights,I*4)}}const f=new Uint16Array(s*o*6);let p=0;for(let M=0;M<s;M++)for(let x=0;x<o;x++){const b=M*(o+1)+x,y=(M+1)*(o+1)+x,A=(M+1)*(o+1)+(x+1),T=M*(o+1)+(x+1);f[p++]=b,f[p++]=y,f[p++]=A,f[p++]=b,f[p++]=A,f[p++]=T}const _=new jt;return _.setAttribute("position",new J(u,3)),_.setAttribute("uv",new J(d,2)),_.setAttribute("uv1",new J(d,2)),_.setAttribute("aAnatomyData",new J(m,4)),_.setAttribute("skinIndex",new Ce(v,4)),_.setAttribute("skinWeight",new Kt(g,4)),_.setIndex(new J(f,1)),_.computeVertexNormals(),_}function ex(){const i=Av(),t=Rv(),e=new xi;e.name="Toothless_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s={},o={};for(const r of[0,1,2]){const l=new xi;l.name=`Toothless_LOD${r}`;const c=Fv(i,r),h=zv(i,r),u=Xv(i,r),d=tx(i,r),m=je([c,h.jawSkinGeometry,u.wingSparsSkinGeometry]),v=je([h.clawsGeometry,u.alulaClawsGeometry]),g=(I,k,D,U=!0,O=!0)=>{const F=new Iu(k,D);return F.name=`${I}_LOD${r}`,F.castShadow=U,F.receiveShadow=O,F.frustumCulled=!1,F.bind(i.skeleton,new de),F},f=g("BodyAndHeadSkin",m,t.skinMaterial),p=g("FlightPatagiumMembranes",u.wingMembraneGeometry,t.wingMembraneMaterial),_=g("VSplittingDorsalSpines",u.dorsalSpinesGeometry,t.skinMaterial);n.push(_);const M=g("OralGums",h.oralGumsGeometry,t.oralGumMaterial,!1,!0),x=g("RetractableTeeth",h.teethGeometry,t.teethMaterial,!0,!0),b=g("ArticulatedTongue",h.tongueGeometry,t.tongueMaterial,!1,!0),y=g("LightReactiveIrises",h.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),A=g("RefractiveCorneas",h.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1);A.renderOrder=2;const T=g("ObsidianClaws",v,t.clawMaterial,!0,!0),S=g("ProstheticBronzeLinkage",d.bronzeHardwareGeometry,t.prostheticBronzeMaterial),w=g("ProstheticIronStruts",d.ironStrutsGeometry,t.prostheticIronMaterial),C=g("ProstheticScalePasteFin",d.scalePasteMembraneGeometry,t.prostheticPasteMaterial),E=[f,p,_,M,x,b,y,A,T,S,w,C];let R=0,L=0;for(const I of E){l.add(I);const k=I.geometry.getIndex();R+=k?k.count/3:I.geometry.getAttribute("position").count/3,L+=I.geometry.getAttribute("position").count}l.visible=r===0,e.add(l),s[r]=l,o[r]={lod:r,triangles:Math.round(R),vertices:L,subMeshCount:E.length}}const a={rootGroup:e,rig:i,materials:t,lodGroups:s,dorsalSpineMeshes:n,lodStats:o,activeLOD:0,autoLOD:!1,setActiveLOD(r){a.activeLOD=r;for(const l of[0,1,2])s[l].visible=l===r},updateAutoLOD(r){if(!a.autoLOD)return a.activeLOD;const l=r<9.5?0:r<20?1:2;return l!==a.activeLOD&&a.setActiveLOD(l),a.activeLOD}};return a}function us(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},r=i[0].morphTargetsRelative,l=new jt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let v=0;v<m.count;++v)u.push(m.getX(v)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=zh(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const m=[];for(let g=0;g<a[h].length;++g)m.push(a[h][g][d]);const v=zh(m);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function zh(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const a=new t(o),r=new J(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,m=h.count;d<m;d++)for(let v=0;v<e;v++){const g=h.getComponent(d,v);r.setComponent(d+u,v,g)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(r.gpuType=s),r}const is={"golden-hour":{id:"golden-hour",label:"Golden Hour",subtitle:"Amber & Violet Dusk",sunElevationDeg:10.8,sunAzimuthDeg:-140,zenithColor:1056060,horizonSunColor:15235902,horizonAntiSunColor:4933230,mieHaloColor:16753746,mieStrength:.52,mieExponent:6.8,sunLightColor:16759408,sunLightIntensity:4.05,rimLightColor:7055088,rimLightIntensity:1.78,hemiSkyColor:10138336,hemiGroundColor:3878182,hemiIntensity:1.16,cloudDarkColor:2367544,cloudLitColor:16751446,cloudCoverage:.46,mistDensity:.0021,rainIntensity:0,windStrength:.48,lightningFrequency:0,exposure:1.16,nightFactor:0,auroraIntensity:0,waterDeepColor:266014,waterShallowColor:740436,glitterIntensity:5.2},"clear-day":{id:"clear-day",label:"Clear Day",subtitle:"Emerald & Sapphire Sun",sunElevationDeg:43,sunAzimuthDeg:-124,zenithColor:1459330,horizonSunColor:10012394,horizonAntiSunColor:8039128,mieHaloColor:16773592,mieStrength:.3,mieExponent:7.8,sunLightColor:16774370,sunLightIntensity:3.75,rimLightColor:9619192,rimLightIntensity:1.72,hemiSkyColor:11720956,hemiGroundColor:3425334,hemiIntensity:1.4,cloudDarkColor:6059670,cloudLitColor:16777215,cloudCoverage:.28,mistDensity:.0013,rainIntensity:0,windStrength:.42,lightningFrequency:0,exposure:1.12,nightFactor:0,auroraIntensity:0,waterDeepColor:202798,waterShallowColor:812144,glitterIntensity:3.9},"dawn-dusk":{id:"dawn-dusk",label:"Dawn / Dusk",subtitle:"Crimson & Amethyst Tide",sunElevationDeg:4.6,sunAzimuthDeg:-148,zenithColor:1184822,horizonSunColor:14967912,horizonAntiSunColor:3817064,mieHaloColor:16747634,mieStrength:.48,mieExponent:6.4,sunLightColor:16750204,sunLightIntensity:3.15,rimLightColor:8033004,rimLightIntensity:1.85,hemiSkyColor:9212112,hemiGroundColor:2892338,hemiIntensity:1.18,cloudDarkColor:2104376,cloudLitColor:16021624,cloudCoverage:.44,mistDensity:.0024,rainIntensity:0,windStrength:.44,lightningFrequency:0,exposure:1.2,nightFactor:.24,auroraIntensity:.14,waterDeepColor:330780,waterShallowColor:1064014,glitterIntensity:4.5},"misty-overcast":{id:"misty-overcast",label:"Misty Rain",subtitle:"Coastal Drizzle & Fog",sunElevationDeg:29,sunAzimuthDeg:-130,zenithColor:3688536,horizonSunColor:8952488,horizonAntiSunColor:6847116,mieHaloColor:13162724,mieStrength:.2,mieExponent:4,sunLightColor:14214896,sunLightIntensity:2.25,rimLightColor:10141918,rimLightIntensity:1.92,hemiSkyColor:11584724,hemiGroundColor:2766390,hemiIntensity:1.55,cloudDarkColor:3819608,cloudLitColor:10268862,cloudCoverage:.88,mistDensity:.0042,rainIntensity:.45,windStrength:.64,lightningFrequency:0,exposure:1.18,nightFactor:0,auroraIntensity:0,waterDeepColor:398622,waterShallowColor:1328716,glitterIntensity:1.45},"starlit-night":{id:"starlit-night",label:"Starlit Night",subtitle:"Boreal Emerald & Moon",sunElevationDeg:29,sunAzimuthDeg:-136,zenithColor:264470,horizonSunColor:1321544,horizonAntiSunColor:792622,mieHaloColor:7120612,mieStrength:.3,mieExponent:9.5,sunLightColor:11193599,sunLightIntensity:2.55,rimLightColor:5678328,rimLightIntensity:2.1,hemiSkyColor:4089498,hemiGroundColor:1318184,hemiIntensity:1.14,cloudDarkColor:528414,cloudLitColor:2902640,cloudCoverage:.26,mistDensity:.0018,rainIntensity:0,windStrength:.36,lightningFrequency:0,exposure:1.28,nightFactor:1,auroraIntensity:.88,waterDeepColor:132881,waterShallowColor:535100,glitterIntensity:3.8},"stormy-squall":{id:"stormy-squall",label:"Storm Squall",subtitle:"Thunder & Rogue Gale",sunElevationDeg:16.5,sunAzimuthDeg:-138,zenithColor:857378,horizonSunColor:4610156,horizonAntiSunColor:2108476,mieHaloColor:9087172,mieStrength:.32,mieExponent:4.5,sunLightColor:11848930,sunLightIntensity:2.55,rimLightColor:7119064,rimLightIntensity:1.98,hemiSkyColor:6454424,hemiGroundColor:1581608,hemiIntensity:1.28,cloudDarkColor:1054498,cloudLitColor:6058632,cloudCoverage:.94,mistDensity:.0037,rainIntensity:1,windStrength:1,lightningFrequency:.92,exposure:1.2,nightFactor:0,auroraIntensity:0,waterDeepColor:199700,waterShallowColor:801860,glitterIntensity:2.4}},Xn=`
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

    // Smooth optical Mie forward-scattering solar/lunar glow (zero artificial radial ray lines!)
    float mieCore = pow(max(sunDot, 1e-5), max(uMieExponent, 1.0));
    sky += uMieColor * mieCore * uMieStrength * (0.36 + 0.64 * pow(max(1.0 - elev, 1e-5), 1.55));

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
`,nx=`
  varying vec3 vWorldDir;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldDir = normalize(position);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,ix=`
  ${Xn}
  varying vec3 vWorldDir;

  void main() {
    vec3 col = evalPhysicalSky(vWorldDir, uTime, true);
    gl_FragColor = vec4(col, 1.0);
  }
`;class sx{ctx=null;unlocked=!1;muted=!1;constructor(){if(typeof window>"u")return;const t=()=>{this.unlocked=!0,this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})};window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("keydown",t,{passive:!0})}playStrike(t,e,n=1){if(!(typeof window>"u"||!this.unlocked||this.muted))try{const s=window.AudioContext||window.webkitAudioContext;if(!s)return;this.ctx||(this.ctx=new s),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const o=this.ctx,a=X.clamp(t/343*.45,.08,1.15),r=o.currentTime+a,l=3.8,c=Math.floor(o.sampleRate*l),h=o.createBuffer(1,c,o.sampleRate),u=h.getChannelData(0);let d=0,m=0;for(let M=0;M<c;M++){const x=M/o.sampleRate,b=Math.random()*2-1;d=.985*d+b*.09,m=.92*m+b*.18;const y=Math.exp(-x*11.5)*.85,A=Math.exp(-Math.pow((x-.32)/.42,2))*.95,T=Math.exp(-Math.pow((x-1.05)/.68,2))*.68,S=Math.exp(-Math.pow((x-2.05)/.95,2))*.42,w=.68+.32*Math.sin(x*23+Math.sin(x*7.5)*2.5);u[M]=(d*1.45+m*.65+b*y*.35)*(y+(A+T+S)*w)}const v=o.createBufferSource();v.buffer=h;const g=o.createBiquadFilter();g.type="lowpass";const f=1-X.clamp((t-220)/520,0,1);g.frequency.setValueAtTime(240+f*460,r),g.frequency.exponentialRampToValueAtTime(62,r+l*.88),g.Q.value=1.35;const p=o.createGain(),_=X.clamp((.2+.24*f)*n,.05,.44);if(p.gain.setValueAtTime(1e-4,r),p.gain.linearRampToValueAtTime(_,r+.04),p.gain.exponentialRampToValueAtTime(8e-4,r+l),v.connect(g),typeof o.createStereoPanner=="function"){const M=o.createStereoPanner();M.pan.value=X.clamp(e,-.85,.85),g.connect(M),M.connect(p)}else g.connect(p);p.connect(o.destination),v.start(r),v.stop(r+l+.05)}catch{}}}function ox(){const t=new Float32Array(1680),e=new Float32Array(560*3),n=new Float32Array(560*3),s=[];for(let v=0;v<140;v++){const g=v*4;s.push(g,g+1,g+2,g,g+2,g+3)}const o=new jt,a=new J(t,3),r=new J(e,3),l=new J(n,3);o.setAttribute("position",a),o.setAttribute("aNextPos",r),o.setAttribute("aBoltMeta",l),o.setIndex(s);const c={uBoltAlpha:{value:0},uBoltCoreColor:{value:new Bt(14479615)}},h=new Oe({name:"NordicForkedLightningBolt",transparent:!0,depthWrite:!1,blending:Xo,side:en,uniforms:c,vertexShader:`
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
    `}),u=new ze(o,h);u.frustumCulled=!1,u.renderOrder=8,u.visible=!1;const d=v=>{const g=Math.sin(v*127.1+311.7)*43758.5453;return g-Math.floor(g)};return{mesh:u,uniforms:c,regenerateBolt:(v,g,f)=>{let p=0;const _=(b,y,A,T)=>{if(p>=140)return;const S=p*4,w=[b,b,y,y],C=[-1,1,1,-1];for(let E=0;E<4;E++){const R=w[E];t[(S+E)*3]=R.x,t[(S+E)*3+1]=R.y,t[(S+E)*3+2]=R.z,e[(S+E)*3]=y.x,e[(S+E)*3+1]=y.y,e[(S+E)*3+2]=y.z,n[(S+E)*3]=C[E],n[(S+E)*3+1]=A,n[(S+E)*3+2]=T}p++},M=(b,y,A,T,S,w,C)=>{const E=[];for(let R=0;R<=A;R++){const L=R/A,I=Math.sin(L*Math.PI),k=new P().lerpVectors(b,y,L);R>0&&R<A&&(k.x+=(d(f+C+R*3.1)-.5)*T*I,k.y+=(d(f+C+R*7.7)-.5)*T*.28*I,k.z+=(d(f+C+R*11.3)-.5)*T*I),E.push(k)}for(let R=0;R<E.length-1;R++)_(E[R],E[R+1],S,w);return E},x=M(v,g,34,28,2.65,1,1);for(let b=0;b<5;b++){const y=4+Math.floor(d(f+b*19.3)*20),A=x[Math.min(x.length-2,y)],T=d(f+b*29.7)*Math.PI*2,S=26+d(f+b*41.1)*48,w=34+d(f+b*53.9)*58,C=new P(A.x+Math.cos(T)*S,Math.max(-10,A.y-w),A.z+Math.sin(T)*S),E=M(A,C,14,14,1.25,.72,100+b*31);if(E.length>6){const R=E[5],L=new P(R.x+(d(f+b*67.3)-.5)*28,Math.max(-10,R.y-24),R.z+(d(f+b*79.1)-.5)*28);M(R,L,6,7,.72,.48,300+b*17)}}o.setDrawRange(0,p*6),a.needsUpdate=!0,r.needsUpdate=!0,l.needsUpdate=!0}}}function ax(i,t,e="golden-hour"){const n=new P,s=new Bt,o=is[e],a={uSunDir:{value:new P(-.52,.24,-.82).normalize()},uSunColor:{value:new Bt(o.sunLightColor)},uZenithColor:{value:new Bt(o.zenithColor)},uHorizonSunColor:{value:new Bt(o.horizonSunColor)},uHorizonAntiColor:{value:new Bt(o.horizonAntiSunColor)},uMieColor:{value:new Bt(o.mieHaloColor)},uMieStrength:{value:o.mieStrength},uMieExponent:{value:o.mieExponent},uCloudDarkColor:{value:new Bt(o.cloudDarkColor)},uCloudLitColor:{value:new Bt(o.cloudLitColor)},uCloudCoverage:{value:o.cloudCoverage},uMistDensity:{value:o.mistDensity},uRainIntensity:{value:o.rainIntensity},uWindStrength:{value:o.windStrength},uWindDir:{value:new qt(.84,-.54).normalize()},uLightningFlash:{value:0},uLightningDir:{value:new P(-.35,.28,-.89).normalize()},uNightFactor:{value:o.nightFactor},uAuroraIntensity:{value:o.auroraIntensity},uWaterDeepColor:{value:new Bt(o.waterDeepColor)},uWaterShallowColor:{value:new Bt(o.waterShallowColor)},uGlitterIntensity:{value:o.glitterIntensity},uIsEnvBake:{value:0},uTime:{value:0}},r=new qa(3900,64,44),l=new Oe({name:"NordicPhysicalSky",vertexShader:nx,fragmentShader:ix,uniforms:a,side:Fn,depthWrite:!1,depthTest:!1}),c=new ze(r,l);c.renderOrder=-100,c.frustumCulled=!1,t.add(c);const h=new Or(o.sunLightColor,o.sunLightIntensity);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=1,h.shadow.camera.far=54;const u=13.8;h.shadow.camera.left=-u,h.shadow.camera.right=u,h.shadow.camera.top=u,h.shadow.camera.bottom=-u,h.shadow.bias=-4e-4,h.shadow.normalBias=.018,t.add(h),t.add(h.target);const d=new Or(o.rimLightColor,o.rimLightIntensity);d.position.set(5.8,4.4,5.4),t.add(d);const m=new Or(14085375,0);m.position.set(-40,28,-90),t.add(m);const v=ox();t.add(v.mesh);const g=new sx;let f=o.lightningFrequency,p=0,_=4.2,M=99,x=1;const b=new P(-.35,.26,-.9).normalize(),y=(D,U=!1)=>{x+=13.7,M=0;const O=Math.sin(x*71.3)*43758.5453,F=O-Math.floor(O),Z=Math.sin(x*19.7+5.1)*43758.5453,G=Z-Math.floor(Z),$=(-.78+F*1.56)*Math.PI,q=250+G*310,W=(D?D.x*.35:0)+Math.sin($)*q,nt=(D?D.z*.35:0)-Math.cos($)*q,ot=new P(W+(F-.5)*34,165+G*65,nt+(G-.5)*28),Q=new P(W,-11.5,nt);v.regenerateBolt(ot,Q,x),v.mesh.visible=!0,b.set(W,68,nt).normalize(),a.uLightningDir.value.copy(b),m.position.set(W*.25,32,nt*.25);const it=X.clamp(Math.sin($),-.85,.85);g.playStrike(q,it,U?1:.65+.35*f)},A=new t0(o.hemiSkyColor,o.hemiGroundColor,o.hemiIntensity);t.add(A);const T=new ec(o.horizonAntiSunColor,o.mistDensity);t.fog=T;const S=new Ya,w=new ze(new qa(50,32,20),l);S.add(w);const C=new Ol(i);C.compileEquirectangularShader();let E=null,R=o.sunAzimuthDeg;function L(D){a.uIsEnvBake.value=1;const U=C.fromScene(S,.015);a.uIsEnvBake.value=0,E&&E.dispose(),E=U,D.environment=E.texture}function I(D,U){const O=X.degToRad(X.clamp(D,1.5,82)),F=X.degToRad(U);n.set(Math.cos(O)*Math.sin(F),Math.sin(O),Math.cos(O)*Math.cos(F)).normalize(),a.uSunDir.value.copy(n),h.position.copy(h.target.position).addScaledVector(n,20)}const k={skyMesh:c,sunLight:h,rimLight:d,hemiLight:A,sunDirection:n,sunColor:s,activePreset:e,sharedUniforms:a,applyPreset(D,U,O){const F=is[D];k.activePreset=D,R=F.sunAzimuthDeg,a.uZenithColor.value.setHex(F.zenithColor),a.uHorizonSunColor.value.setHex(F.horizonSunColor),a.uHorizonAntiColor.value.setHex(F.horizonAntiSunColor),a.uMieColor.value.setHex(F.mieHaloColor),a.uMieStrength.value=F.mieStrength,a.uMieExponent.value=F.mieExponent,a.uCloudDarkColor.value.setHex(F.cloudDarkColor),a.uCloudLitColor.value.setHex(F.cloudLitColor),a.uCloudCoverage.value=F.cloudCoverage,a.uMistDensity.value=F.mistDensity,a.uRainIntensity.value=F.rainIntensity,a.uWindStrength.value=F.windStrength,f=F.lightningFrequency,_=D==="stormy-squall"?.65:3.2,a.uNightFactor.value=F.nightFactor,a.uAuroraIntensity.value=F.auroraIntensity,a.uWaterDeepColor.value.setHex(F.waterDeepColor),a.uWaterShallowColor.value.setHex(F.waterShallowColor),a.uGlitterIntensity.value=F.glitterIntensity,s.setHex(F.sunLightColor),a.uSunColor.value.copy(s),h.color.copy(s),h.intensity=F.sunLightIntensity,d.color.setHex(F.rimLightColor),d.intensity=F.rimLightIntensity,A.color.setHex(F.hemiSkyColor),A.groundColor.setHex(F.hemiGroundColor),A.intensity=F.hemiIntensity,T.color.setHex(F.horizonAntiSunColor).lerp(new Bt(F.horizonSunColor),.35),T.density=F.mistDensity,U.toneMappingExposure=F.exposure,I(F.sunElevationDeg,F.sunAzimuthDeg),L(O)},blendPresets:(()=>{const D=new Bt,U=new Bt,O=new Bt;let F=-10,Z=!1;const G=(q,W,nt,ot)=>{D.setHex(W),U.setHex(nt),q.copy(D).lerp(U,ot)},$=(q,W,nt)=>{let ot=(W-q+540)%360-180;return ot<-180&&(ot+=360),q+ot*nt};return(q,W,nt,ot,Q,it=0,j=0)=>{const tt=X.clamp(nt,0,1),ft=is[q],et=is[W];k.activePreset=tt<.5?q:W,G(a.uZenithColor.value,ft.zenithColor,et.zenithColor,tt),G(a.uHorizonSunColor.value,ft.horizonSunColor,et.horizonSunColor,tt),G(a.uHorizonAntiColor.value,ft.horizonAntiSunColor,et.horizonAntiSunColor,tt),G(a.uMieColor.value,ft.mieHaloColor,et.mieHaloColor,tt),a.uMieStrength.value=X.lerp(ft.mieStrength,et.mieStrength,tt),a.uMieExponent.value=X.lerp(ft.mieExponent,et.mieExponent,tt),G(a.uCloudDarkColor.value,ft.cloudDarkColor,et.cloudDarkColor,tt),G(a.uCloudLitColor.value,ft.cloudLitColor,et.cloudLitColor,tt),a.uCloudCoverage.value=X.lerp(ft.cloudCoverage,et.cloudCoverage,tt);const z=X.lerp(ft.mistDensity,et.mistDensity,tt);a.uMistDensity.value=z,a.uRainIntensity.value=X.lerp(ft.rainIntensity,et.rainIntensity,tt),a.uWindStrength.value=X.lerp(ft.windStrength,et.windStrength,tt);const xt=X.lerp(ft.lightningFrequency,et.lightningFrequency,tt);xt>.12&&f<=.12&&_>2.2&&(_=1.4),f=xt,a.uNightFactor.value=X.lerp(ft.nightFactor,et.nightFactor,tt),a.uAuroraIntensity.value=X.lerp(ft.auroraIntensity,et.auroraIntensity,tt),G(a.uWaterDeepColor.value,ft.waterDeepColor,et.waterDeepColor,tt),G(a.uWaterShallowColor.value,ft.waterShallowColor,et.waterShallowColor,tt),a.uGlitterIntensity.value=X.lerp(ft.glitterIntensity,et.glitterIntensity,tt),G(s,ft.sunLightColor,et.sunLightColor,tt),a.uSunColor.value.copy(s),h.color.copy(s),h.intensity=X.lerp(ft.sunLightIntensity,et.sunLightIntensity,tt),G(d.color,ft.rimLightColor,et.rimLightColor,tt),d.intensity=X.lerp(ft.rimLightIntensity,et.rimLightIntensity,tt),G(A.color,ft.hemiSkyColor,et.hemiSkyColor,tt),G(A.groundColor,ft.hemiGroundColor,et.hemiGroundColor,tt),A.intensity=X.lerp(ft.hemiIntensity,et.hemiIntensity,tt),G(O,ft.horizonSunColor,et.horizonSunColor,tt),T.color.copy(a.uHorizonAntiColor.value).lerp(O,.35),T.density=z,ot.toneMappingExposure=X.lerp(ft.exposure,et.exposure,tt);const gt=X.lerp(ft.sunElevationDeg,et.sunElevationDeg,tt)+it,Et=$(ft.sunAzimuthDeg,et.sunAzimuthDeg,tt)+j;R=Et,I(gt,Et);const Tt=typeof performance<"u"?performance.now()*.001:p,Ft=(tt<=.001||tt>=.999)&&Math.abs(it)<.05;Tt-F>.45||Ft&&!Z?(F=Tt,Z=Ft,L(Q)):Ft||(Z=!1)}})(),setAudioMuted(D){g.muted=D},isAudioMuted(){return g.muted},setMistDensity(D,U){const O=X.clamp(D,5e-4,.0075);a.uMistDensity.value=O,T.density=O},setRainIntensity(D){a.uRainIntensity.value=X.clamp(D,0,1)},setWindStrength(D){a.uWindStrength.value=X.clamp(D,0,1.25)},setLightningFrequency(D){f=X.clamp(D,0,1),f>.05&&_>4&&(_=1.1)},triggerLightningStrike(D){y(D,!0)},setSunElevation(D,U,O){I(D,R),L(O)},update(D,U,O){const F=Math.min(.1,Math.max(0,D-p));p=D,a.uTime.value=D;const Z=-.58+Math.sin(D*.085)*.16;if(a.uWindDir.value.set(Math.cos(Z),Math.sin(Z)),f>.015&&(_-=F,_<=0)){y(O,!1);const G=X.lerp(13.5,2.2,f),$=X.lerp(14,3.8,f)*Math.abs(Math.sin(D*19.7+x));_=G+$}if(M<.65){M+=F;const G=Math.exp(-Math.pow((M-.025)/.028,2)),$=Math.exp(-Math.pow((M-.115)/.032,2))*.92,q=Math.exp(-Math.pow((M-.195)/.022,2))*.55,W=Math.exp(-M*7.2)*.34,nt=X.clamp(Math.max(G,$,q)+W,0,1.25);a.uLightningFlash.value=nt,v.uniforms.uBoltAlpha.value=X.clamp(nt*1.05,0,1),m.intensity=nt*8.2}else v.mesh.visible&&(a.uLightningFlash.value=0,v.uniforms.uBoltAlpha.value=0,m.intensity=0,v.mesh.visible=!1);O&&c.position.copy(O),U&&(h.target.position.copy(U),h.position.copy(U).addScaledVector(n,20),h.target.updateMatrixWorld())}};return k.applyPreset(e,i,t),k}const so={waveAmplitude:.68,waveSpeed:.98,seaChoppiness:.48},rx=`
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
    float farDampGiant = 1.0 - smoothstep(420.0, 1180.0, effDist);
    float farDampLong = 1.0 - smoothstep(320.0, 920.0, effDist);
    float farDampCross = 1.0 - smoothstep(190.0, 560.0, effDist);
    float farDampChop = 1.0 - smoothstep(92.0, 275.0, effDist);
    float windBoost = 0.86 + 0.28 * clamp(uWindStrength, 0.0, 1.25);
    float t = uTime * uWaveSpeed;

    // 1. Irregular Swell Wave-Packet Envelopes + Finer-Scale "Seventh-Wave" Cells Proportioned to Islands!
    float swellSetA = ocFbm2(wp.xz * 0.016 - vec2(t * 0.044, t * 0.030));
    float swellSetB = ocFbm2(wp.xz * 0.032 + vec2(t * 0.035, -t * 0.048) + 19.4);
    float rogueFieldA = ocFbm2(wp.xz * 0.011 - vec2(t * 0.056, -t * 0.034) + 41.7);
    float rogueFieldB = ocFbm2(wp.xz * 0.021 + vec2(-t * 0.040, t * 0.052) - 23.9);
    float rogueSurge = smoothstep(0.52, 0.88, rogueFieldA) * smoothstep(0.48, 0.86, rogueFieldB);

    float groupA = mix(0.38, 1.42, smoothstep(0.16, 0.84, swellSetA)) * (1.0 + 0.54 * rogueSurge) * windBoost;
    float groupB = mix(0.36, 1.36, smoothstep(0.18, 0.82, swellSetB)) * (1.0 + 0.44 * rogueSurge) * windBoost;

    // 2. Coastal Shoaling & Island Lee-Shadowing around archipelago islands!
    float coastalShelter = 1.0;
    for (int i = 0; i < 12; i++) {
      vec4 sc = uStackCenters[i];
      if (sc.z <= 0.1) continue;
      float d = length(wp.xz - sc.xy) - sc.z;
      // Shoaling amplification just outside rocky reefs, gentle damping deep inside coves
      float shoalAmp = 1.0 + 0.20 * exp(-pow((d - 5.5) / 5.2, 2.0));
      coastalShelter *= mix(0.68, shoalAmp, smoothstep(-5.5, 14.0, d));
    }

    // 3. Domain-warped wave coordinates scaled naturally against archipelago landforms!
    vec2 swellWarp = vec2(
      ocFbm2(wp.xz * 0.024 + vec2(t * 0.021, -t * 0.015)) - 0.5,
      ocFbm2(wp.xz * 0.024 + vec2(-t * 0.016, t * 0.024) + 31.7) - 0.5
    ) * 14.5;
    vec2 chopWarp = vec2(
      ocNoise2(wp.xz * 0.082 + t * 0.092) - 0.5,
      ocNoise2(wp.xz * 0.082 - t * 0.080 + 11.3) - 0.5
    ) * 4.2;

    vec2 pGiant = wp.xz + swellWarp * 1.20;
    vec2 pPrimary = wp.xz + swellWarp;
    vec2 pCross = wp.xz - swellWarp * 0.78 + chopWarp;

    vec3 disp = vec3(0.0);
    vec2 slopeXZ = vec2(0.0);

    float envGiant = farDampGiant * (0.62 + 0.96 * rogueSurge) * coastalShelter * windBoost;
    float envPrimary = farDampLong * groupA * coastalShelter;
    float envCross = farDampCross * groupB * coastalShelter;
    float envChop = farDampChop * mix(0.55, 1.40, swellSetB) * (0.38 + 0.92 * uChoppiness) * windBoost;

    // North-Atlantic groundswells proportioned to the archipelago islands (44m & 34m wavelengths)
    accumTrochoidalWave(pGiant, vec2(0.76, 0.65), 0.115, 44.0, 0.96, t + 2.3, envGiant, disp, slopeXZ);
    accumTrochoidalWave(pGiant, vec2(-0.62, 0.78), 0.092, 34.0, 1.02, t + 9.7, envGiant * 0.85, disp, slopeXZ);

    // Primary irregular swell train (27m & 17.8m wavelengths)
    accumTrochoidalWave(pPrimary, vec2(0.81, 0.58), 0.145, 27.0, 1.00, t, envPrimary, disp, slopeXZ);
    accumTrochoidalWave(pPrimary, vec2(0.64, 0.77), 0.118, 17.8, 1.06, t + 4.1, envPrimary * 0.92, disp, slopeXZ);
    // Crossed fjord-refraction swell train (14.5m & 9.8m wavelengths)
    accumTrochoidalWave(pCross, vec2(-0.52, 0.85), 0.125, 14.5, 1.09, t + 1.7, envCross, disp, slopeXZ);
    accumTrochoidalWave(pCross, vec2(0.28, -0.96), 0.098, 9.8, 1.16, t + 8.3, envCross * 0.90, disp, slopeXZ);
    // Finer wind-waves & coastal currents (6.6m .. 1.85m wavelengths)
    accumTrochoidalWave(wp.xz + chopWarp, vec2(-0.88, -0.47), 0.092, 6.6, 1.24, t, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz - chopWarp, vec2(0.59, -0.80), 0.076, 4.3, 1.34, t + 2.9, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz + chopWarp * 0.5, vec2(-0.24, 0.97), 0.056, 2.75, 1.44, t + 5.6, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz, vec2(0.93, -0.36), 0.044, 1.85, 1.54, t + 3.2, envChop * 0.85, disp, slopeXZ);

    // Subtle group heave & trough drawdown (proportioned cleanly below shoreline cliffs!)
    float currentUndulation = ((swellSetA - 0.5) * 0.38 + rogueSurge * 0.55) * uWaveAmp * farDampLong;
    disp.y = clamp(disp.y + currentUndulation, -4.8, 4.6);

    wp.xyz += disp;
    vMacroNormal = normalize(vec3(-slopeXZ.x, 1.0, -slopeXZ.y));
    vWaveHeight = disp.y;
    vCrestFactor = clamp((disp.y / max(0.20, 1.08 * uWaveAmp)) * 0.5 + 0.5, 0.0, 1.0);
    vGroupEnergy = clamp(0.5 * (groupA + groupB) - 0.35, 0.0, 1.0);
    vRogueFactor = clamp(rogueSurge * 1.35, 0.0, 1.0);
    vWorldPos = wp.xyz;

    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,lx=`
  ${Xn}

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
    float chop = (0.26 + 1.12 * uChoppiness) * (0.85 + 0.32 * clamp(uWindStrength, 0.0, 1.25));
    float amp = (0.18 + 0.58 * clamp(uWaveAmp, 0.05, 2.6)) * distScale;

    vec2 flow = vec2(
      skyFbm(p * 0.068 + vec2(t * 0.03, -t * 0.02)) - 0.5,
      skyFbm(p * 0.068 - vec2(t * 0.02, t * 0.03) + 7.7) - 0.5
    ) * 3.0;
    vec2 pw = p + flow;

    float h = 0.0;
    h += sin(dot(pw, vec2(0.48, 0.31)) - t * 1.65) * 0.20;
    h += sin(dot(pw, vec2(-0.38, 0.54)) - t * 2.15) * 0.15;
    h += sin(dot(pw, vec2(0.74, -0.64)) - t * 2.75) * 0.11 * chop;
    h += (skyFbm(pw * 0.62 + vec2(t * 0.38, -t * 0.25)) - 0.5) * 0.36 * chop;
    h += (skyNoise2(pw * 2.90 - vec2(t * 0.95, t * 0.70)) - 0.5) * 0.11 * chop;
    h += (skyNoise2(pw * 7.40 + vec2(t * 1.45, -t * 1.08)) - 0.5) * 0.032 * chop * distScale;
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

    float foamLace = skyFbm(p * 1.18 + vec2(uTime * 0.22 * uWaveSpeed, -uTime * 0.15 * uWaveSpeed));
    float spumeCells = skyNoise2(p * 3.8 - vec2(uTime * 0.44 * uWaveSpeed, 0.0));

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
`;function cx(i=5600,t=300,e=256){const n=(t+1)*(e+1),s=new Float32Array(n*3),o=new Float32Array(n*2);for(let c=0;c<=t;c++){const h=c/t,u=i*Math.pow(h,2.3);for(let d=0;d<=e;d++){const v=d/e*Math.PI*2,g=Math.cos(v)*u,f=Math.sin(v)*u,p=c*(e+1)+d;s[p*3]=g,s[p*3+1]=0,s[p*3+2]=f,o[p*2]=g*.02,o[p*2+1]=f*.02}}const a=new Uint32Array(t*e*6);let r=0;for(let c=0;c<t;c++)for(let h=0;h<e;h++){const u=c*(e+1)+h,d=(c+1)*(e+1)+h,m=(c+1)*(e+1)+(h+1),v=c*(e+1)+(h+1);a[r++]=u,a[r++]=m,a[r++]=d,a[r++]=u,a[r++]=v,a[r++]=m}const l=new jt;return l.setAttribute("position",new J(s,3)),l.setAttribute("uv",new J(o,2)),l.setIndex(new J(a,1)),l.computeBoundingSphere(),l}function hx(i,t,e){const n={...so,...e},s=[];for(let c=0;c<24;c++){const h=i[c];h?s.push(new Ge(h.x,h.z,h.radius,h.boost??0)):s.push(new Ge(9999,9999,0,0))}const o={...t,uWaveAmp:{value:n.waveAmplitude},uWaveSpeed:{value:n.waveSpeed},uChoppiness:{value:n.seaChoppiness},uStackCenters:{value:s}},a=cx(5600,300,256),r=new Oe({name:"NorthSeaPhysicalOcean",vertexShader:rx,fragmentShader:lx,uniforms:o,transparent:!0,depthWrite:!0}),l=new ze(a,r);return l.position.y=-11.5,l.renderOrder=2,l.frustumCulled=!1,l.name="NorthSeaOcean",{mesh:l,params:n,setOceanParams(c){Object.assign(n,c),o.uWaveAmp.value=n.waveAmplitude,o.uWaveSpeed.value=n.waveSpeed,o.uChoppiness.value=n.seaChoppiness},update(c){o.uTime.value=c}}}const Me=-11.5,ux=-25.5,Oi=-44;function dx(i){return i-Math.floor(i)}function st(i,t){return dx(Math.sin(i*127.1+t*311.7)*43758.5453123)}function Ku(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,a=s*s*s*(s*(s*6-15)+10),r=o*o*o*(o*(o*6-15)+10),l=st(e,n),c=st(e+1,n),h=st(e,n+1),u=st(e+1,n+1);return l+(c-l)*a+(h-l)*r+(l-c-h+u)*a*r}function he(i,t,e=4){let n=0,s=.5,o=1;for(let a=0;a<e;a++)n+=s*Ku(i*o,t*o),o*=2.03,s*=.5;return n}function le(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Qe(i,t,e=2){let n=0,s=1,o=.56,a=1,r=0;for(let l=0;l<e;l++){const c=Ku(i*a,t*a)*2-1,h=1-(Math.sqrt(c*c+.068)-.261)/.78,u=Math.max(0,Math.min(1,h));n+=o*u*s,r+=o,s=.55+.45*u,a*=2.03,o*=.46}return n/Math.max(1e-4,r)}function Ko(i,t,e,n,s=999){if(i<=.4)return i;const o=(i+t)/e,a=Math.floor(o),r=o-a,l=.38*Math.pow(r,1.28)+.62*le(.64,.96,r),c=(a+l)*e-t,h=1-le(s*.74,s*.95,i);return X.lerp(i,c,n*h)}function rr(i,t,e,n,s,o){const a=Math.max(0,Math.min(1,e)),r=Math.sin(a*Math.PI),l=he(n*.052+o*1.3,s*.052-o*1.7,3)-.5,c=Qe(n*.115-o*2.1,s*.115+o*1.4,2)-.48,h=Qe((n*.86+s*.5)*.17+o*2.9,(s*.86-n*.5)*.14-o,2)-.48,u=he(n*.24+o*.9,s*.24-o*2.3,2)-.5,d=X.clamp(a-(l*.4+c*.28+h*.18+u*.12)*r,0,1),m=le(.24,.72,he(n*.058+o*1.7,s*.058-o*1.3,2)),v=.36+.26*(he(n*.085-o,s*.085+o,2)-.5),g=le(0,.38,d),f=le(.58,1,d),p=g*v+f*(1-v),_=Math.pow(d,.78),M=X.lerp(_,p,m*.82),x=Qe(n*.14+o*2.1,s*.14-o*1.9,2),b=he(n*.27-o,s*.27+o*2.3,2)-.5,y=((x-.48)*3.4+b*2.05+h*1.65)*r,A=he(n*.095+o*3.1,s*.095-o*2.7,3),T=le(.42,.78,A)*le(.62,.86,a)*(1-le(.95,1,a)),S=Me+.25+(A-.5)*1.85;let w=X.lerp(i,t,M)+y;return w=X.lerp(w,Math.max(w,S),T*.82),Math.min(i+.04,Math.max(t-1.2,w))}function pc(i,t,e,n){const s=(Qe(i*.16+n,t*.16-n,2)-.48)*.68+(he(i*.32-n*1.3,t*.32+n*.7,2)-.5)*.28,o=i*.024-t*.019+(he(i*.045+n,t*.045,2)-.5)*1.4,a=(e+o)/2.65,r=a-Math.floor(a),l=(le(.1,.36,r)-r)*.34,c=Math.exp(-Math.pow((e-(Me-.45))/1.9,2))*.62;return{radialOffset:s+l+c,verticalLedgeOffset:l*.42}}const di={position:new P(4.45,0,.22),yaw:-.14},pi={position:new P(-4.45,0,-.22),yaw:.16};function Ui(i,t){const e=Math.hypot((i-4.45)/2.45,(t-.22)/1.95),n=Math.hypot((i+4.45)/2.45,(t+.22)/1.95),s=Math.min(e,n),o=le(.84,1.32,s),a=le(.72,1.18,s),r=(he(i*.065+3.1,t*.065-2.4,3)-.5)*5.6+(Qe(i*.14-1.7,t*.14+4.3,2)-.48)*2.3,l=(he(i*.065-5.2,t*.065+1.9,3)-.5)*4.8+(Qe(i*.15+2.9,t*.15-3.1,2)-.48)*2.1,c=i+a*r,h=t+a*l,u=Math.atan2(h+4.2,c),d=t>1.2?.66:t<-8?1.52:1+(-t+1.2)*.046,m=1+.19*Math.sin(u*2-.42)+.14*Math.sin(u*3+.72)+.1*Math.cos(u*5-1.15)+.06*Math.sin(u*7+.4),v=c/(15.8*m),g=(h+4.2)/(11.2*d*m);let f=Math.sqrt(v*v+g*g);if(t>.6){const O=Math.exp(-Math.pow((i-4.85)/2.65,2)-Math.pow((t-3.9)/3.4,2))*.21,F=Math.exp(-Math.pow((i+5.15)/2.75,2)-Math.pow((t-3.6)/3.2,2))*.19,Z=Math.exp(-Math.pow((i-.35)/1.75,2)-Math.pow((t-2.9)/2.8,2))*.17,G=Math.exp(-Math.pow((i-10.6)/2.4,2)-Math.pow((t-2.2)/3.2,2))*.18,$=Math.exp(-Math.pow((i+9.2)/1.9,2)-Math.pow((t-2.4)/2.9,2))*.15,q=(Qe(i*.26+7.4,t*.26-3.8,2)-.48)*.11*le(1.1,2.4,t);f+=-O-F+Z-G+$+q}let p=0;if(t<-3.5){const O=(c+17.5)/15.4,F=(h+25)/18.8,Z=Math.sqrt(O*O+F*F),G=Z*(.92+.16*he(i*.065+2.2,t*.065-1.4,3)),$=Math.max(0,1-Math.abs(f-G)/.52);f=Math.min(f,G)-.11*$*$;const q=Math.min(1,Z/.98*(Z/.98)),W=Math.pow(Math.max(0,1-q),1.18),nt=X.clamp(.62-O*.38-F*.22,.26,1.12),ot=W*nt*(7.8+2.4*Qe(i*.05+5.1,t*.05-3.2,2));p=Ko(ot,i*.04-t*.03,3.6,.52)}if(i>9&&t<-6.5){const O=(i-18.2)/6.2,F=(t+19.2)/7.2,Z=Math.exp(-(O*O+F*F))*.36;f+=Z}const _=1-.78*le(-.4,4.2,t)*(1-le(4.2,11.8,Math.abs(i))),M=((he(i*.095+4.2,t*.095-1.7,3)-.47)*1.35+(Qe(i*.15-2.3,t*.15+6.1,2)-.48)*.52)*o*_,x=Math.max(0,(-t-6.2)/25),b=Math.pow(Math.min(1.22,x),1.32)/(1+.22*x*x),y=le(39,9,Math.abs(i+3.2)),A=Qe(i*.046+1.8,t*.042-2.7,2),T=b*y*(7.4+6.4*A+(he(i*.075-3.4,t*.075+1.9,2)-.5)*2.8),S=Ko(T,i*.045+t*.028,4,.56,13.5),w=M+Math.max(S,p*o),E=.76+(.13*(Qe(i*.12+3.7,t*.12-2.1,2)-.48)+.09*(he(Math.cos(u)*2.6+2.1,Math.sin(u)*2.6-1.3,3)-.5))*a;if(f<=E)return w;const R=1.48+.24*(he(Math.cos(u)*2.2-4.1,Math.sin(u)*2.2+3.3,2)-.5),L=le(E,R,f),I=le(R-.08,R+.78,f),k=he(i*.08+5.7,t*.08-4.3,2),D=Me-1.35+le(.45,.85,k)*1.95,U=rr(w,D,L,i,t,7.3);return X.lerp(U,Oi,I)}function ds(i){const t=Math.cos(i.rotRad),e=Math.sin(i.rotRad),n=i.summitOffset?.dx??i.rx*.24*Math.sin(i.seed),s=i.summitOffset?.dz??i.rz*-.2*Math.cos(i.seed*1.3),o=i.seed*1.37,a=Math.cos(o),r=Math.sin(o);return(l,c)=>{const h=l-i.cx,u=c-i.cz,d=h*t-u*e,m=h*e+u*t,v=d+(he(d*.042+i.seed,m*.042-i.seed,3)-.5)*(i.rx*.48)+(Qe(d*.095+i.seed,m*.095,2)-.48)*(i.rx*.18),g=m+(he(d*.042-i.seed,m*.042+i.seed,3)-.5)*(i.rz*.48)+(Qe(d*.095-i.seed,m*.095+2.1,2)-.48)*(i.rz*.18),f=Math.atan2(g,v),p=1+.21*Math.sin(f*2+i.seed)+.15*Math.cos(f*3-i.seed*1.5)+.1*Math.sin(f*5+.9)+.06*Math.cos(f*7-i.seed*.6);let M=Math.sqrt(Math.pow(v/(i.rx*p),2)+Math.pow(g/(i.rz*p),2));const x=(v-n)*-r+(g-s)*a,b=(v-n)*a+(g-s)*r,y=Math.pow(x/(i.rx*p*1.28),2)+Math.pow(b/(i.rz*p*.88),2),A=(d*a+m*r)/Math.max(8,i.rx),T=X.clamp(.62+.38*A,.3,1.12),S=Math.pow(Math.max(0,1-Math.min(1,y)),1.38),w=1/(1+1.85*y*y);let C=i.peakY*(.2+.5*S*T+.24*w);if(i.secondaryLobe){const Q=i.secondaryLobe,it=v-Q.dx,j=g-Q.dz,tt=Math.atan2(j,it),ft=1+.18*Math.cos(tt*2-i.seed)+.12*Math.sin(tt*3+i.seed),et=Math.sqrt(Math.pow(it/(Q.rx*ft),2)+Math.pow(j/(Q.rz*ft),2)),z=Q.lowSaddle?.44:.38,xt=Math.max(0,Math.min(1,.5+.5*(et-M)/z));M=et*(1-xt)+M*xt-z*xt*(1-xt);const gt=i.peakY*Math.min(Q.peakScale,1.06),Et=Math.min(1,et*et),Tt=Math.pow(Math.max(0,1-Et),1.35),Ft=gt*(.22+.68*Tt),ht=Q.lowSaddle?Math.sin(xt*Math.PI)*.44:Math.sin(xt*Math.PI)*.22;C=X.lerp(Ft,C,xt)*(1-ht)}const E=1-le(.56,1.02,M),R=Qe(d*.032+i.seed*1.3,m*.038-i.seed*.9,2),L=he(d*.045-i.seed*.7,m*.045+i.seed*1.4,3),I=C+(R-.48)*(i.peakY*.18)*(.35+.65*E)+(L-.48)*(i.peakY*.12)*E;let k=Ko(I,d*.032*a+m*.032*r,Math.max(3.8,i.peakY*.22),.48,i.peakY),D=0;if(i.carveRiverToEast&&d>4.2){const Q=Math.sin(d*.11+.35)*1.85,it=Math.abs(m-Q),j=le(5.2,8.8,d)*(1-le(.95,3.8,it));if(j>.001){const et=8.35-le(5.5,10.4,d)*.75;k=X.lerp(k,Math.min(k,et),j)}const tt=(he(d*.18+3.1,m*.18-1.9,2)-.5)*1.35,ft=Math.exp(-Math.pow((m-Q+tt*.35)/7.8,2));if(ft>.02&&d>7.2){const et=10.55-1.15*ft+tt*.35;D=le(et-.6,et+.9,d)*ft,M=Math.max(M,.72+le(et-.2,et+1.15,d)*.72*ft)}}const O=.66+(.13*(Qe(d*.1+i.seed,m*.1-i.seed,2)-.48)+.1*(he(Math.cos(f)*2.5+i.seed,Math.sin(f)*2.5-i.seed,3)-.5))*(1-D*.65);if(M<=O)return k;const F=1.06+.18*(he(Math.cos(f)*2.3-i.seed,Math.sin(f)*2.3+i.seed,2)-.5),Z=X.lerp(F,O+.09,D),G=le(O,Z,M),$=le(X.lerp(F-.06,O+.07,D),X.lerp(F+.34,O+.24,D),M),q=he(l*.075+i.seed,c*.075-i.seed,2),W=Me-1.35+le(.44,.84,q)*1.95,nt=X.lerp(W,Me-5.8,D),ot=D>.35?X.lerp(k,nt,Math.pow(X.clamp(G+(he(l*.16,c*.16,2)-.5)*.18*Math.sin(G*Math.PI),0,1),.68)):rr(k,nt,G,l,c,i.seed);return X.lerp(ot,Oi,$)}}function fc(i){return(t,e)=>{const n=t-i.cx,s=e-i.cz,o=n+(he(n*.038+i.seed,s*.038-i.seed,3)-.5)*(i.ringRadius*.34)+(Qe(n*.085+i.seed,s*.085,2)-.48)*3.8,a=s+(he(n*.038-i.seed,s*.038+i.seed,3)-.5)*(i.ringRadius*.34)+(Qe(n*.085-i.seed,s*.085+1.7,2)-.48)*3.8,r=Math.hypot(o,a),l=Math.atan2(a,o),c=i.openAngleRad+Math.PI;let h=l-c;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const u=Math.abs(h),d=1-le(i.arcHalfSpanRad*.72,i.arcHalfSpanRad*1.08,u),m=i.ringHalfWidth*(.72+.42*d+.18*Math.sin(h*2.6+i.seed)),v=r-i.ringRadius*1.06,g=v>=0?m*.72:m*1.28,p=Math.abs(v)/Math.max(3.5,g)+(1-d)*1.35,_=.72+.2*Math.cos(h*2.2+i.seed*.7)+.11*Math.sin(h*3.6-i.seed),M=Qe(n*.036+i.seed,s*.036-i.seed,2),x=Math.min(1,p/.94*(p/.94)),b=v<0?Math.pow(Math.max(0,1-x),1.45):Math.pow(Math.max(0,1-x),1.05),y=i.peakY*(.24+.72*b)*(.58+.42*d)*_+(M-.48)*(i.peakY*.16)*d,A=Ko(y,n*.03-s*.025,Math.max(3.6,i.peakY*.22),.46,i.peakY),T=(1-le(i.ringRadius*.55,i.ringRadius*1.15,r))*.65,S=X.lerp(Oi,-16.2,T),w=.54+.13*(Qe(n*.095+i.seed,s*.095-i.seed,2)-.48)+.08*(he(n*.06-i.seed,s*.06+i.seed,2)-.5);if(p<=w)return A;const C=1.06+.16*(he(Math.cos(l)*2.4+i.seed,Math.sin(l)*2.4,2)-.5),E=le(w,C,p),R=le(C-.06,C+.34,p),L=he(t*.08+i.seed,e*.08-i.seed,2),I=Me-1.35+le(.45,.84,L)*1.9,k=rr(A,I,E,t,e,i.seed);return X.lerp(k,S,R)}}const Di=ds({cx:-66,cz:-32,rx:21.5,rz:25,peakY:18.4,summitOffset:{dx:-3.5,dz:-7.5},seed:5.7,rotRad:.18,secondaryLobe:{dx:-24.5,dz:-11.5,rx:17.5,rz:19.5,peakScale:1.24},carveRiverToEast:!0}),mc=fc({cx:88,cz:36,ringRadius:28,ringHalfWidth:12.6,peakY:16.8,openAngleRad:-2.45,arcHalfSpanRad:1.92,seed:22.9}),gc=ds({cx:88,cz:-56,rx:25,rz:31.5,peakY:22.4,summitOffset:{dx:4.2,dz:-6},seed:14.3,rotRad:-.34,secondaryLobe:{dx:-18,dz:33.5,rx:15,rz:17,peakScale:.74,lowSaddle:!0}}),Qu=ds({cx:-124,cz:-86,rx:33,rz:24.5,peakY:25.5,summitOffset:{dx:-7.5,dz:3},seed:37.8,rotRad:.42,secondaryLobe:{dx:21,dz:-10.5,rx:16.5,rz:15,peakScale:.72}}),Ju=ds({cx:-42,cz:-96,rx:17.5,rz:19.5,peakY:20.2,seed:31.6,rotRad:-.28,secondaryLobe:{dx:-19.5,dz:14,rx:12.5,rz:14,peakScale:.74}}),td=ds({cx:36,cz:-108,rx:19.5,rz:22,peakY:22.8,seed:44.1,rotRad:.52,secondaryLobe:{dx:18.5,dz:-14.5,rx:13.5,rz:15,peakScale:.78}}),ed=fc({cx:-144,cz:78,ringRadius:38,ringHalfWidth:15.5,peakY:23.8,openAngleRad:.62,arcHalfSpanRad:1.84,seed:58.4}),nd=ds({cx:168,cz:122,rx:38,rz:32,peakY:29.5,seed:71.2,rotRad:-.48,secondaryLobe:{dx:-36,dz:-18,rx:24,rz:22,peakScale:.76}}),px=ds({cx:-206,cz:-96,rx:42,rz:46,peakY:36.5,seed:83.9,rotRad:-.19,secondaryLobe:{dx:28,dz:34,rx:23,rz:25,peakScale:.7}}),fx=fc({cx:-8,cz:-222,ringRadius:52,ringHalfWidth:19.5,peakY:33.5,openAngleRad:1.52,arcHalfSpanRad:1.8,seed:96.3}),mx=ds({cx:-18,cz:236,rx:34,rz:26,peakY:25.5,seed:109.7,rotRad:.15,secondaryLobe:{dx:38,dz:-12,rx:22,rz:18,peakScale:.78}}),Vl=[{name:"WestWaterfallDoubleIsland",centerX:-74,centerZ:-36,spanX:112,spanZ:102,gridSegs:168,hasFlora:!0,evalHeight:Di},{name:"StarboardCrescentLagoonAtoll",centerX:88,centerZ:36,spanX:124,spanZ:124,gridSegs:164,hasFlora:!0,evalHeight:mc},{name:"EastSerpentineTomboloIsland",centerX:84,centerZ:-46,spanX:118,spanZ:134,gridSegs:156,hasFlora:!0,evalHeight:gc},{name:"WestTraelanipaTableIsland",centerX:-124,centerZ:-86,spanX:116,spanZ:102,gridSegs:132,hasFlora:!0,evalHeight:Qu},{name:"NorthWestHolmPair",centerX:-48,centerZ:-92,spanX:92,spanZ:86,gridSegs:112,hasFlora:!0,evalHeight:Ju},{name:"NorthEastHeadlandTable",centerX:42,centerZ:-112,spanX:94,spanZ:90,gridSegs:112,hasFlora:!1,evalHeight:td},{name:"SouthWestBrokenCrescent",centerX:-144,centerZ:78,spanX:156,spanZ:152,gridSegs:120,hasFlora:!1,evalHeight:ed},{name:"SouthEastTableSound",centerX:156,centerZ:116,spanX:168,spanZ:152,gridSegs:112,hasFlora:!1,evalHeight:nd},{name:"FarWestCliffMassif",centerX:-198,centerZ:-88,spanX:174,spanZ:168,gridSegs:108,hasFlora:!1,evalHeight:px},{name:"NorthernSoundCrescentIsland",centerX:-8,centerZ:-222,spanX:196,spanZ:166,gridSegs:112,hasFlora:!1,evalHeight:fx},{name:"SouthHorizonHolms",centerX:-4,centerZ:232,spanX:166,spanZ:122,gridSegs:100,hasFlora:!1,evalHeight:mx}],ei=[{x:43.5,z:14.5,rx:4.8,rz:4.2,topY:4.6,topSlopeX:-.08,rotY:.45,seed:14.2},{x:63,z:50.5,rx:7.5,rz:5.2,topY:-8.2,topSlopeX:.05,rotY:-.35,seed:23.8},{x:27.5,z:-10.5,rx:5.4,rz:4.4,topY:1.8,topSlopeX:.07,rotY:.22,seed:31.4},{x:-37.5,z:-22,rx:6.2,rz:4.8,topY:2.6,topSlopeX:-.09,rotY:-.52,seed:42.7},{x:-46.5,z:-15.5,rx:5.2,rz:4.2,topY:-6.8,topSlopeX:-.06,rotY:.61,seed:55.3},{x:-106,z:-49,rx:7.8,rz:6,topY:6.4,topSlopeX:-.1,rotY:.18,seed:68.9},{x:57.5,z:-22.5,rx:6.4,rz:5,topY:-5.4,topSlopeX:.08,rotY:-.44,seed:79.1},{x:-21.5,z:-79,rx:7.2,rz:5.8,topY:5.2,topSlopeX:-.07,rotY:.33,seed:92.6}],As=[{x:59.5,z:23,rotY:-.58,halfLength:14.5,halfThickness:4.6,plateauTopY:6.8,openingHalfSpan:5.4,vaultCrownY:.4,seed:17.3},{x:-95.5,z:-22.5,rotY:.88,halfLength:13,halfThickness:4.4,plateauTopY:6.2,openingHalfSpan:4.8,vaultCrownY:-.2,seed:49.8}];function Si(i,t){let e=Oi;Math.abs(i)<54&&t>-66&&t<40&&(e=Math.max(e,Ui(i,t)));for(const n of Vl)Math.abs(i-n.centerX)<=n.spanX*.52&&Math.abs(t-n.centerZ)<=n.spanZ*.52&&(e=Math.max(e,n.evalHeight(i,t)));for(const n of As)Math.hypot(i-n.x,t-n.z)<n.halfLength+5&&(e=Math.max(e,n.plateauTopY+1));for(const n of ei){const s=Math.max(n.rx,n.rz),o=Math.hypot(i-n.x,t-n.z);if(o<s*1.45){const a=1-le(.65,1.45,o/s);e=Math.max(e,Oi+(n.topY-Oi)*a)}}return e}function Bh(i,t,e){i.computeVertexNormals();const n=i.getAttribute("position"),s=i.getAttribute("normal");for(let o=0;o<n.count;o++){const a=n.getX(o),r=n.getY(o),l=n.getZ(o),c=s.getX(o),h=s.getY(o),u=s.getZ(o);if(h>=.72||r<-23.5)continue;let d=1;if(e){const x=Math.hypot((a-4.45)/2.75,(l-.22)/2.25),b=Math.hypot((a+4.45)/2.75,(l+.22)/2.25);if(d=le(.88,1.32,Math.min(x,b)),d<=.001)continue}const m=le(.7,.22,h)*le(-23.5,-16.5,r)*d;if(m<=.002)continue;const v=Math.hypot(c,u);if(v<1e-4)continue;const g=c/v,f=u/v,p=pc(a,l,r,t),_=X.clamp(p.radialOffset*m,-.13,.19),M=X.clamp(p.verticalLedgeOffset*m,-.22,.22);n.setXYZ(o,a+g*_,r+M,l+f*_)}i.computeVertexNormals()}function gx(i){const l=new Float32Array(28257),c=new Float32Array(9419*2);for(let v=0;v<=128;v++){const g=v/128,f=(g-.5)*2*i.halfLength,p=g<.5?-1:1,_=Math.min(g,1-g),M=Math.sin(g*Math.PI*1.65+i.seed)*2.65+Math.cos(g*Math.PI*2.9-i.seed*.7)*1.25+(he(g*4.2+i.seed,1.7,3)-.5)*2.35,x=le(0,.24,_),b=x+.085*Math.sin(x*Math.PI*3+i.seed*.8)*Math.sin(x*Math.PI),y=X.clamp(b,0,1),A=le(0,.035,_),T=(.5-g)*2.2+Math.sin(g*Math.PI)*.85,S=(he(f*.09+i.seed,M*.09,3)-.5)*1.35+(Qe(f*.08+i.seed,2.3,2)-.48)*.85,w=i.plateauTopY+T+S,C=X.lerp(Me-18.5,w,y),E=f-i.openingHalfSpan*.06,R=Math.abs(E)/i.openingHalfSpan,L=1-le(.74,1.18,R),I=Math.pow(Math.max(0,1-Math.min(1,R*R)),.88),k=(he(f*.35-i.seed,2.1,3)-.5)*.95,D=Me-5.2+(i.vaultCrownY+.35-(Me-5.2))*I+k,U=X.lerp(Oi,D,L),O=1+.48*(1-L)+.34*Math.sin(g*Math.PI*3.6+i.seed*1.3)+.3*(he(g*5.6+i.seed,6.2,3)-.5),F=i.halfThickness*O*(.28+.72*Math.pow(y,.65))*A;for(let Z=0;Z<=72;Z++){const G=Z/72,$=G*Math.PI*2,q=Math.sin($),W=Math.cos($),nt=Math.sign(q)*Math.pow(Math.abs(q),.78),ot=.5+.5*Math.sign(W)*Math.pow(Math.abs(W),.7),Q=Math.pow(Math.abs(q),.88)*A,it=(.32-.42*nt)*Math.max(0,W)*y;let j=X.lerp(U,C,ot)+it;W<-.22&&L>.05&&(j+=(-W-.22)*(1-nt*nt)*1.15*L);const tt=q>=0?i.seed+11.7:i.seed-19.3,ft=(he(f*.13+tt,j*.1,3)-.48)*3.15+(Qe(f*.21-tt,j*.085+f*.04,2)-.48)*1.95+Math.sin(f*.36+j*.18+tt)*.65,et=Math.sin(j*1.05+f*.07+tt)*.52+(Math.abs((j*.28+10)%1-.5)-.25)*.75,z=Math.exp(-Math.pow((j-(Me+.15))/2.3,2))*(1.95+1.25*he(f*.18+tt,3.7,2))*(1-L*.72)*A,xt=pc(f,M+nt*5,j,tt),gt=Q*le(-24,-14.5,j),Et=Math.max(0,F+z+(ft+et+xt.radialOffset*1.05)*gt),Tt=(1-le(.02,.3,_))*A,Ft=Math.pow(Math.max(0,1-Math.min(1,nt*nt*.85)),.75),ht=1-.55*le(Me-1,i.plateauTopY,j),H=p*Tt*(3.8*Ft*ht+(he(j*.15+tt,nt*2.1+p*3.1,3)-.42)*2.85+(Qe(nt*2.8-tt,j*.12,2)-.45)*1.75),N=f+H+(he(j*.14+tt,g*4.8,3)-.5)*1.35*gt,K=M*A+nt*Et,dt=j+xt.verticalLedgeOffset*.68*Q*A,bt=v*73+Z;l[bt*3]=N,l[bt*3+1]=dt,l[bt*3+2]=K,c[bt*2]=g*3.8,c[bt*2+1]=G*2.6}}const h=9417,u=9418;l[h*3]=-i.halfLength,l[h*3+1]=Me-23,l[h*3+2]=0,c[h*2]=0,c[h*2+1]=.5,l[u*3]=i.halfLength,l[u*3+1]=Me-23,l[u*3+2]=0,c[u*2]=3.8,c[u*2+1]=.5;const d=[];for(let v=0;v<128;v++)for(let g=0;g<72;g++){const f=v*73+g,p=(v+1)*73+g,_=(v+1)*73+(g+1),M=v*73+(g+1);d.push(f,M,_,f,_,p)}for(let v=0;v<72;v++){d.push(h,v+1,v);const g=9344;d.push(u,g+v,g+v+1)}const m=new jt;return m.setAttribute("position",new J(l,3)),m.setAttribute("uv",new J(c,2)),m.setIndex(d),m.computeVertexNormals(),m}function id(i,t,e,n,s){const o=1+.1*Math.cos(e*2+s.seed*.7)+.07*Math.sin(e*4-s.seed*1.1+n*.6)+.04*Math.cos(e*6+s.seed*1.9),a=.86+.26*he(i*1.55+s.seed,t*1.55+n*2.1,3);return{lx:i*s.rx*o*a,lz:t*s.rz*o*a}}function Ha(i,t,e,n){const o=n.topY>Me+4?.58:.38,a=Math.sin(e*Math.PI*.5)*o,r=(he(i*.16+n.seed,t*.16-n.seed,3)-.5)*.82+(he(i*.42-n.seed*.6,t*.42+n.seed*.6,2)-.5)*.28,l=(i-n.x)*n.topSlopeX+(t-n.z)*(n.topSlopeX*.45);return n.topY+l+r+a}function vx(i){const r=new Float32Array(6912),l=new Float32Array(2304*2),c=Math.cos(i.rotY),h=Math.sin(i.rotY);for(let f=0;f<=46;f++){const p=f>36,_=Math.min(1,f/36),M=p?(f-36)/10:0;for(let x=0;x<=48;x++){const b=x/48,y=b*Math.PI*2,A=Math.cos(y),T=Math.sin(y),S=p?Math.cos(M*Math.PI*.5):1,w=id(A,T,y,_,i),C=1.28-.3*Math.pow(_,.85)+.08*Math.cos(_*14+i.seed+T*1.4)+.05*Math.sin(y*4+_*9-i.seed),E=w.lx*C*S,R=w.lz*C*S,L=i.x+E*c-R*h,I=i.z+E*h+R*c,k=Ha(L,I,0,i),D=.034*Math.sin(_*18+i.seed+y*.5)*Math.sin(_*Math.PI),U=X.clamp(_+D,0,1),O=p?Ha(L,I,M,i):X.lerp(Oi,k,U),F=1+(.48+.24*T)*Math.exp(-Math.pow((O-(Me+.1))/2.1,2)),Z=pc(i.x+w.lx,i.z+w.lz,O,i.seed),G=le(.12,.36,_)*(1-le(.88,1,_))*S,$=C*F*S,q=w.lx*$+A*Z.radialOffset*.92*G,W=w.lz*$+T*Z.radialOffset*.92*G,nt=i.x+q*c-W*h,ot=i.z+q*h+W*c,Q=f*49+x;r[Q*3]=nt,r[Q*3+1]=O,r[Q*3+2]=ot,l[Q*2]=b*2.4,l[Q*2+1]=_*3+M*.4}}const u=2303;r[u*3]=i.x,r[u*3+1]=Ha(i.x,i.z,1,i),r[u*3+2]=i.z,l[u*2]=.5,l[u*2+1]=3.5;const d=[],m=46;for(let f=0;f<m;f++)for(let p=0;p<48;p++){const _=f*49+p,M=(f+1)*49+p,x=(f+1)*49+(p+1),b=f*49+(p+1);d.push(_,M,x,_,x,b)}const v=m*49;for(let f=0;f<48;f++)d.push(u,v+f+1,v+f);const g=new jt;return g.setAttribute("position",new J(r,3)),g.setAttribute("uv",new J(l,2)),g.setIndex(d),g.computeVertexNormals(),g}function xx(){const i=[],t=a=>{const d=new Float32Array(822),m=new Float32Array(274*2),v=Math.cos(a.rotY),g=Math.sin(a.rotY),f=a.x+a.leanX*.55,p=a.z+a.leanZ*.55,_=(S,w,C)=>{const E=Math.sin(C*Math.PI*.5)*.36,R=(he(S*.32+a.seed,w*.32-a.seed,3)-.5)*.48-((S-f)*a.leanX+(w-p)*a.leanZ)*.28;return a.topY-.28+R+E};for(let S=0;S<=15;S++){const w=S>12,C=Math.min(1,S/12),E=w?(S-12)/3:0,R=w?Math.cos(E*Math.PI*.5):1,L=(1.16-.18*C+.16*Math.exp(-Math.pow((C-.78)/.16,2))+.11*Math.sin(C*11.5+a.seed))*R,I=a.leanX*(C-.45),k=a.leanZ*(C-.45);for(let D=0;D<=16;D++){const U=D/16,O=U*Math.PI*2,F=Math.cos(O),Z=Math.sin(O),G=.82+.34*he(F*1.7+a.seed,Z*1.7+C*2.4-a.seed,3)+.07*Math.cos(O*2+a.seed)+.05*Math.sin(O*4-a.seed+C*1.8),$=F*a.rx*L*G,q=Z*a.rz*L*G,W=a.x+I+$*v-q*g,nt=a.z+k+$*g+q*v,ot=_(W,nt,0),Q=w?_(W,nt,E):X.lerp(a.botY,ot,C),it=S*17+D;d[it*3]=W,d[it*3+1]=Q,d[it*3+2]=nt,m[it*2]=U*1.8,m[it*2+1]=C*2.2+E*.3}}const M=15,x=(M+1)*17,b=x+1;d[x*3]=a.x-a.leanX*.45,d[x*3+1]=a.botY,d[x*3+2]=a.z-a.leanZ*.45,m[x*2]=.5,m[x*2+1]=0,d[b*3]=f,d[b*3+1]=_(f,p,1),d[b*3+2]=p,m[b*2]=.5,m[b*2+1]=2.5;const y=[];for(let S=0;S<M;S++)for(let w=0;w<16;w++){const C=S*17+w,E=(S+1)*17+w,R=(S+1)*17+(w+1),L=S*17+(w+1);y.push(C,E,R,C,R,L)}const A=M*17;for(let S=0;S<16;S++)y.push(x,S,S+1),y.push(b,A+S+1,A+S);const T=new jt;return T.setAttribute("position",new J(d,3)),T.setAttribute("uv",new J(m,2)),T.setIndex(y),T.computeVertexNormals(),T},e=[];for(let a=0;a<34;a++)e.push(.14*Math.PI+a/33*.72*Math.PI);for(let a=0;a<24;a++)e.push(-.88*Math.PI+a/23*1*Math.PI);for(let a=0;a<e.length;a++){const r=e[a]+(st(a,19.4)-.5)*.045,l=Math.cos(r),c=Math.sin(r);let h=-1,u=0;for(let x=4.5;x<=34;x+=.35){const b=l*x,y=-4.2+c*x,A=Ui(b,y),T=Ui(b+l*1.1,y+c*1.1);if(A>-2.6&&A-T>1.25){h=x,u=A;break}}if(h<0)continue;const d=l*h,m=-4.2+c*h,v=Math.hypot((d-4.45)/2.65,(m-.22)/2.15),g=Math.hypot((d+4.45)/2.65,(m+.22)/2.15);if(Math.min(v,g)<1.02)continue;const p=m>-.2&&Math.abs(d)<13.5?Math.min(-.1,u-.06):u-.08+(st(a,31.7)-.5)*.28,_=Math.max(Me-2.6,p-(4.8+st(a,43.2)*5.4));i.push(t({x:d+l*.62,z:m+c*.62,topY:p,botY:_,rx:1.15+st(a,51.3)*1.55,rz:.92+st(a,63.8)*1.25,rotY:r+(st(a,71.9)-.5)*.8,leanX:l*(.3+st(a,83.1)*.45),leanZ:c*(.3+st(a,83.1)*.45),seed:10+a*3.7}));const M=Math.min(p-.9,Me+3.2+st(a,104.2)*3.8);i.push(t({x:d+l*(1.85+st(a,112.6)*1.45),z:m+c*(1.85+st(a,112.6)*1.45),topY:M,botY:Me-3.6,rx:1.35+st(a,124.5)*1.75,rz:1.05+st(a,137.1)*1.45,rotY:r+(st(a,149.8)-.5)*.6,leanX:-l*.22,leanZ:-c*.22,seed:200+a*5.3}))}const n=Math.cos(.18),s=Math.sin(.18);for(const a of[-1,1])for(let r=0;r<4;r++){const l=9.2+r*1.35,h=Math.sin(l*.11+.35)*1.85+a*(8.8+r*2.15),u=-66+l*n+h*s,d=-32-l*s+h*n,m=Di(u,d);if(m<Me+1.5)continue;const v=Math.min(8.2-r*.9,Math.max(Me+3.8,m-.2));i.push(t({x:u,z:d,topY:v,botY:Me-4.2,rx:1.55+st(r+a*7,31.2)*1.05,rz:1.35+st(r+a*7,57.9)*.95,rotY:.18+r*.5,leanX:n*.32,leanZ:-s*.32,seed:410+a*37+r*9.1}))}const o=[{cx:-68,cz:-33,maxR:42,rays:26,evalH:Di,skipWaterfallCorridor:!0,seedBase:520},{cx:88,cz:36,maxR:48,rays:28,evalH:mc,seedBase:640},{cx:84,cz:-46,maxR:48,rays:26,evalH:gc,seedBase:760}];for(const a of o)for(let r=0;r<a.rays;r++){const l=r/a.rays*Math.PI*2+(st(r,a.seedBase*.13)-.5)*.08,c=Math.cos(l),h=Math.sin(l);let u=0,d=0,m=-999;for(let p=8;p<=a.maxR;p+=.65){const _=a.cx+c*p,M=a.cz+h*p,x=a.evalH(_,M),b=a.evalH(_+c*1.4,M+h*1.4);if(x>Me+4.5&&x-b>1.85){u=_,d=M,m=x;break}}if(m<Me+4.5)continue;if(a.skipWaterfallCorridor){const p=u- -66,_=d- -32,M=p*n-_*s,x=p*s+_*n,b=Math.sin(Math.max(0,M)*.11+.35)*1.85;if(M>2.5&&Math.abs(x-b)<10.5)continue}const v=a.seedBase+r*4.3,g=m-.35-st(r,v)*1.1,f=Math.max(Me-4,g-(8.5+st(r,v+7.1)*9.5));i.push(t({x:u+c*.85,z:d+h*.85,topY:g,botY:f,rx:1.85+st(r,v+13.4)*2.15,rz:1.45+st(r,v+21.8)*1.75,rotY:l+(st(r,v+29.2)-.5)*.7,leanX:c*.42,leanZ:h*.42,seed:v}))}return us(i,!1)}function _x(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a),c=o-r,h=a-l,u=c*c*c*(c*(c*6-15)+10),d=h*h*h*(h*(h*6-15)+10),m=(r%e+e)%e,v=(m+1)%e,g=(l%n+n)%n,f=(g+1)%n,p=st(m+s,g-s),_=st(v+s,g-s),M=st(m+s,f-s),x=st(v+s,f-s);return p+(_-p)*u+(M-p)*d+(p-_-M+x)*u*d}function Qs(i,t,e,n,s,o){let a=0,r=.5,l=0,c=e,h=n;for(let u=0;u<s;u++)a+=r*_x(i,t,c,h,o+u*17.3),l+=r,c*=2,h*=2,r*=.5;return a/l}function Oh(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a);let c=1e9,h=1e9,u=0,d=0,m=0;for(let p=-1;p<=1;p++)for(let _=-1;_<=1;_++){const M=((r+_)%e+e)%e,x=((l+p)%n+n)%n,b=.16+.68*st(M+s,x*1.7-s),y=.16+.68*st(M*2.3-s,x+s),A=r+_+b,T=l+p+y,S=(A-o)*.85,w=(T-a)*1.25,C=Math.hypot(S,w);C<c?(h=c,c=C,u=st(M*3.1+s,x*5.7+s),d=S,m=w):C<h&&(h=C)}const v=Math.max(0,h-c),g=u*Math.PI*2,f=(d*Math.cos(g)+m*Math.sin(g))*.55;return{edgeDist:v,cellTilt:f,cellId:u}}function Mx(){const t=new Float32Array(262144),e=new Float32Array(512*512),n=new Float32Array(512*512),s=new Float32Array(512*512);for(let g=0;g<512;g++){const f=g/512;for(let p=0;p<512;p++){const _=p/512,M=g*512+p,x=_+(Qs(_,f,4,6,3,5.1)-.5)*.068,b=f+(Qs(_,f,6,4,3,13.7)-.5)*.032,y=Oh(x,b,5,15,21.4),A=Oh(x,b,11,28,57.9),T=Qs(_,f,6,10,3,44.8),S=(1-le(.01,.085,y.edgeDist))*le(.18,.78,T),w=(1-le(.008,.07,A.edgeDist))*(.45+.55*T),C=Qs(x,b,3,22,4,33.2),E=Math.abs((b*14+C*.55)%1-.5)*2,R=1-le(.04,.24,E),L=Qs(_,f,28,28,3,71.6),I=.52+y.cellTilt*.26+(y.cellId-.5)*.16+A.cellTilt*.15+(C-.5)*.4+(L-.5)*.16-R*.28-S*.32-w*.18;t[M]=Math.max(0,Math.min(1,I)),e[M]=Math.min(1,R*.52+S*.58+w*.36),n[M]=y.cellId*.65+A.cellId*.35;const k=Qs(_,f,8,8,4,93.4);s[M]=le(.6,.84,k)*(1-S*.5)}}const o=document.createElement("canvas"),a=document.createElement("canvas"),r=document.createElement("canvas");for(const g of[o,a,r])g.width=512,g.height=512;const l=o.getContext("2d"),c=a.getContext("2d"),h=r.getContext("2d"),u=l.createImageData(512,512),d=c.createImageData(512,512),m=h.createImageData(512,512);for(let g=0;g<512;g++){const f=(g-1+512)%512,p=(g+1)%512;for(let _=0;_<512;_++){const M=(_-1+512)%512,x=(_+1)%512,b=g*512+_,y=b*4,A=(t[g*512+x]-t[g*512+M])*7.6,T=(t[p*512+_]-t[f*512+_])*7.6,S=1/Math.sqrt(A*A+T*T+1);d.data[y]=Math.round((-A*S*.5+.5)*255),d.data[y+1]=Math.round((T*S*.5+.5)*255),d.data[y+2]=Math.round((S*.5+.5)*255),d.data[y+3]=255;const w=t[b],C=e[b],E=n[b],R=s[b],L=le(.62,.92,E),I=1-C*.56,k=(30+w*62+L*34)*I,D=(34+w*58+L*15)*I,U=(44+w*64-L*8)*I,O=44+w*28,F=78+w*38,Z=34+w*18;u.data[y]=Math.round(X.lerp(k,O,R*.56)),u.data[y+1]=Math.round(X.lerp(D,F,R*.56)),u.data[y+2]=Math.round(X.lerp(U,Z,R*.56)),u.data[y+3]=255;const G=.54+(1-w)*.28+C*.16,$=Math.round(X.clamp(X.lerp(G,.92,R),.15,.98)*255);m.data[y]=$,m.data[y+1]=$,m.data[y+2]=$,m.data[y+3]=255}}l.putImageData(u,0,0),c.putImageData(d,0,0),h.putImageData(m,0,0);const v=(g,f)=>(g.wrapS=Ai,g.wrapT=Ai,g.repeat.set(9,9),g.anisotropy=8,g.colorSpace=f?Mn:ii,g.needsUpdate=!0,g);return{albedo:v(new Ln(o),!0),normal:v(new Ln(a),!1),roughness:v(new Ln(r),!1)}}function wx(i){const o=new Float32Array(37539);for(let u=0;u<=96;u++){const d=u/96,m=3200*Math.pow(d,2.05);for(let v=0;v<=128;v++){const f=v/128*Math.PI*2,p=Math.cos(f)*m,_=Math.sin(f)*m,M=(he(p*.015+3.7,_*.015-5.2,3)-.5)*3.2*(1-d*.7),x=ux+M,b=u*129+v;o[b*3]=p,o[b*3+1]=x,o[b*3+2]=_}}const a=new Uint32Array(12288*6);let r=0;for(let u=0;u<96;u++)for(let d=0;d<128;d++){const m=u*129+d,v=(u+1)*129+d,g=(u+1)*129+(d+1),f=u*129+(d+1);a[r++]=m,a[r++]=g,a[r++]=v,a[r++]=m,a[r++]=f,a[r++]=g}const l=new jt;l.setAttribute("position",new J(o,3)),l.setIndex(new J(a,1)),l.computeVertexNormals();const c=new Oe({name:"NordicSubmarineBathymetry",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${Xn}
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
    `}),h=new ze(l,c);return h.frustumCulled=!1,h.name="NordicSubmarineBathymetryFloor",h}function yx(i){const t=[{cx:-480,cz:-280,rx:145,rz:95,peakY:56,offX:-22,rot:.4,seed:11.4},{cx:520,cz:-310,rx:165,rz:105,peakY:62,offX:28,rot:-.5,seed:23.8},{cx:-320,cz:-560,rx:135,rz:90,peakY:54,offX:18,rot:.2,seed:37.2},{cx:490,cz:340,rx:155,rz:98,peakY:52,offX:-24,rot:-.3,seed:46.5},{cx:-860,cz:-420,rx:240,rz:145,peakY:86,offX:-36,rot:.35,seed:51.9},{cx:880,cz:-460,rx:255,rz:155,peakY:82,offX:38,rot:-.42,seed:67.3},{cx:-740,cz:580,rx:220,rz:135,peakY:72,offX:-28,rot:.55,seed:76.4},{cx:140,cz:-1180,rx:290,rz:165,peakY:94,offX:42,rot:.15,seed:83.5},{cx:-1150,cz:-880,rx:310,rz:180,peakY:104,offX:-45,rot:-.28,seed:94.1},{cx:1080,cz:780,rx:285,rz:165,peakY:92,offX:36,rot:.38,seed:108.7}],e=[],n=28,s=52;for(const l of t){const c=(n+1)*(s+1),h=new Float32Array(c*3),u=Math.cos(l.rot),d=Math.sin(l.rot);for(let f=0;f<=n;f++){const p=f/n*1.42;for(let _=0;_<=s;_++){const M=_/s*Math.PI*2,x=1+.18*Math.sin(M*2+l.seed)+.11*Math.cos(M*3-l.seed),b=Math.cos(M)*l.rx*x*p,y=Math.sin(M)*l.rz*x*p,A=l.cx+b*u-y*d,T=l.cz+b*d+y*u,S=Math.min(1,Math.pow((b-l.offX*1.15)/(l.rx*1.05),2)+Math.pow(y/(l.rz*.96),2)),w=X.clamp(.6+b/Math.max(20,l.rx)*.36,.28,1.14),C=Math.pow(Math.max(0,1-S),1.32),E=1/(1+1.9*S*S),R=(Qe(A*.008+l.seed,T*.01-l.seed,2)-.48)*(l.peakY*.18)*(1-le(.55,1.05,p)),L=l.peakY*(.2+.48*C*w+.26*E)+R,I=Ko(L,b*.02,Math.max(9,l.peakY*.2),.42),k=.66+.13*Math.sin(M*3-l.seed)+.08*Math.cos(M*5+l.seed),D=le(k,1.06,p),U=le(.98,1.38,p),O=Me-1.5,F=rr(I,O,D,A,T,l.seed),Z=X.lerp(F,Oi,U),G=f*(s+1)+_;h[G*3]=A,h[G*3+1]=Z,h[G*3+2]=T}}const m=new Uint32Array(n*s*6);let v=0;for(let f=0;f<n;f++)for(let p=0;p<s;p++){const _=f*(s+1)+p,M=(f+1)*(s+1)+p,x=(f+1)*(s+1)+(p+1),b=f*(s+1)+(p+1);m[v++]=_,m[v++]=x,m[v++]=M,m[v++]=_,m[v++]=b,m[v++]=x}const g=new jt;g.setAttribute("position",new J(h,3)),g.setIndex(new J(m,1)),g.computeVertexNormals(),e.push(g)}const o=us(e,!1),a=new Oe({name:"DistantFjordAerialMaterial",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${Xn}
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
    `}),r=new ze(o,a);return r.frustumCulled=!1,r.name="DistantFjordArchipelago",r}function bx(){const i=[],t=[{dx:0,dz:0,h:.52,w:.021,bend:.16,rotY:.15,plume:!0},{dx:.022,dz:-.018,h:.44,w:.019,bend:.19,rotY:2.35,plume:!0},{dx:.036,dz:.022,h:.34,w:.018,bend:.14,rotY:1.15,plume:!1},{dx:-.034,dz:.026,h:.37,w:.018,bend:.15,rotY:3.65,plume:!1},{dx:-.026,dz:-.032,h:.31,w:.016,bend:.13,rotY:4.55,plume:!1},{dx:.044,dz:-.012,h:.28,w:.016,bend:.16,rotY:5.5,plume:!1},{dx:.018,dz:.042,h:.2,w:.015,bend:.11,rotY:.78,plume:!1},{dx:-.046,dz:-.006,h:.17,w:.014,bend:.1,rotY:2.95,plume:!1},{dx:.006,dz:-.046,h:.22,w:.015,bend:.12,rotY:5.05,plume:!1}];for(const e of t){const s=[],o=[],a=[],r=[],l=Math.cos(e.rotY),c=Math.sin(e.rotY);for(let u=0;u<=5;u++){const d=u/5,m=e.plume?Math.exp(-Math.pow((d-.82)/.11,2))*.65:0,v=e.w*(1-.9*Math.pow(d,1.28)+m),g=e.h*d,f=e.bend*d*d,p=.42+.72*Math.pow(d,.65),_=p*(1+(e.plume?.32:.14)*d*d),M=p*(1+.12*d),x=p*(.88+.08*d);for(const b of[-1,1]){const y=b*v,A=f+b*.0025*(1-d),T=e.dx+y*l-A*c,S=e.dz+y*c+A*l;s.push(T,g,S),o.push(-c*.28+b*l*.22,.91,l*.28+b*c*.22),a.push(_,M,x)}}for(let u=0;u<5;u++){const d=u*2,m=d+1,v=d+2,g=d+3;r.push(d,m,g,d,g,v)}const h=new jt;h.setAttribute("position",new Kt(s,3)),h.setAttribute("normal",new Kt(o,3)),h.setAttribute("color",new Kt(a,3)),h.setIndex(r),i.push(h)}return us(i,!1)}function Go(i,t,e,n,s,o,a){const l=[],c=[],h=[],u=[],d=Math.cos(s),m=Math.sin(s);for(let g=0;g<=9;g++){const f=g/9,p=le(.06,.24,f),_=Math.pow(Math.max(0,1-Math.pow(f,1.35)),.68),M=.74+.26*Math.abs(Math.sin(f*Math.PI*7.5)),x=t*p*_*M,b=n*Math.pow(f,.88)*(i/.45),y=e*(1.28*f-.52*f*f*f)+(a?i*.22*f:-.06*i*f*f),A=a?X.lerp(.36,.68,f):X.lerp(.24,.48,Math.pow(f,.85)),T=a?X.lerp(.32,.62,f):X.lerp(.28,.88,Math.pow(f,.7)),S=a?X.lerp(.14,.24,f):X.lerp(.1,.26,f),w=[-1,0,1];for(const C of w){const E=C*x+o*f*.025,R=Math.abs(C)*x*.26,L=Math.max(.005,y+R),I=b,k=E*d-I*m,D=E*m+I*d;l.push(k,L,D);const U=-C*.28,O=.92,F=.24;c.push(U*d-F*m,O,U*m+F*d);const Z=C===0?.82:1.04;h.push(A*Z,T*Z,S*Z)}}for(let g=0;g<9;g++){const f=g*3,p=(g+1)*3;u.push(f+0,f+1,p+1,f+0,p+1,p+0),u.push(f+1,f+2,p+2,f+1,p+2,p+1)}const v=new jt;return v.setAttribute("position",new Kt(l,3)),v.setAttribute("normal",new Kt(c,3)),v.setAttribute("color",new Kt(h,3)),v.setIndex(u),v}function Sx(){const i=[];for(let e=0;e<7;e++){const n=e/7*Math.PI*2+(e%2===0?.14:-.11),s=e%3===0,o=s?.34:.42,a=s?.068:.088,r=s?.32:.24,l=s?.24:.38;i.push(Go(o,a,r,l,n,(e-3)*.3,!1))}return us(i,!1)}function Ax(){const i=[];for(let e=0;e<7;e++){const n=e/7*Math.PI*2+.22*Math.sin(e*2.1),s=e%2===0?1:.86;i.push(Go(.72*s,.135*s,.64*s,.54*s,n,Math.cos(e*1.7)*.4,!1))}return i.push(Go(.76,.068,.74,.22,.65,.15,!0)),i.push(Go(.7,.064,.69,.2,3.85,-.15,!0)),us(i,!1)}function Ji(i){if(i.deleteAttribute("uv"),i.getAttribute("normal")||i.computeVertexNormals(),!i.index){const t=i.getAttribute("position").count,e=new Uint16Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new J(e,1))}return i}function Tx(){const i=[],t=[{ox:0,oz:0,lx:.02,lz:.01,h:.24,r:.048},{ox:.055,oz:.032,lx:.08,lz:.05,h:.19,r:.044},{ox:-.052,oz:.038,lx:-.08,lz:.06,h:.2,r:.042},{ox:.032,oz:-.055,lx:.05,lz:-.08,h:.18,r:.04},{ox:-.048,oz:-.042,lx:-.07,lz:-.06,h:.17,r:.042}];for(const e of t){const n=Ji(new Ao(e.r,0));n.scale(1.25,.95,1.25),n.translate(e.ox+e.lx*.45,e.h*.45,e.oz+e.lz*.45);const s=n.getAttribute("position").count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=.16,o[a*3+1]=.28,o[a*3+2]=.12;n.setAttribute("color",new J(o,3)),i.push(n);for(let a=0;a<3;a++){const r=.62+a*.18,l=Ji(new co(.012,.02,.028,5,1));l.translate(e.ox+e.lx*r+(a-1)*.012,e.h*r,e.oz+e.lz*r+(a%2-.5)*.014);const c=l.getAttribute("position").count,h=new Float32Array(c*3);for(let u=0;u<c;u++){const d=.88+.12*a;h[u*3]=d,h[u*3+1]=d,h[u*3+2]=d}l.setAttribute("color",new J(h,3)),i.push(l)}}return us(i,!1)}function Ex(){const i=[];for(let o=0;o<5;o++){const a=o/5*Math.PI*2+.3,r=Ji(Go(.14,.028,.055,.12,a,0,!1));i.push(r)}const t=[{ox:0,oz:0,h:.27,leanX:.025,leanZ:.018,r:.038,tiltX:.18,tiltZ:-.12},{ox:.052,oz:.028,h:.21,leanX:.055,leanZ:-.022,r:.032,tiltX:-.22,tiltZ:.24},{ox:-.044,oz:.034,h:.24,leanX:-.045,leanZ:.042,r:.034,tiltX:.25,tiltZ:.18}];for(const o of t){const a=o.ox+o.leanX,r=o.h,l=o.oz+o.leanZ,c=Ji(new co(.0038,.0058,o.h,4,1));c.translate(o.ox+o.leanX*.5,o.h*.5,o.oz+o.leanZ*.5);const h=c.getAttribute("position").count,u=new Float32Array(h*3);for(let f=0;f<h;f++)u[f*3]=.2,u[f*3+1]=.42,u[f*3+2]=.16;c.setAttribute("color",new J(u,3)),i.push(c);const d=6;for(let f=0;f<d;f++){const p=f/d*Math.PI*2,_=[0,0,0,Math.cos(p-.34)*o.r*.62,o.r*.16,Math.sin(p-.34)*o.r*.62,Math.cos(p+.34)*o.r*.62,o.r*.16,Math.sin(p+.34)*o.r*.62,Math.cos(p)*o.r*1.12,o.r*.26,Math.sin(p)*o.r*1.12],M=[0,1,0,0,.94,0,0,.94,0,0,.88,0],x=[.78,.75,.78,1.02,1.02,1.02,1.02,1.02,1.02,1.14,1.14,1.14],b=new jt;b.setAttribute("position",new Kt(_,3)),b.setAttribute("normal",new Kt(M,3)),b.setAttribute("color",new Kt(x,3)),b.setIndex([0,2,1,1,2,3]),b.rotateX(o.tiltX),b.rotateZ(o.tiltZ),b.translate(a,r,l),i.push(Ji(b))}const m=Ji(new co(o.r*.24,o.r*.18,o.r*.2,6,1));m.rotateX(o.tiltX),m.rotateZ(o.tiltZ),m.translate(a,r+o.r*.08,l);const v=m.getAttribute("position").count,g=new Float32Array(v*3);for(let f=0;f<v;f++)g[f*3]=1.25,g[f*3+1]=.92,g[f*3+2]=.22;m.setAttribute("color",new J(g,3)),i.push(m)}const e=Ji(new co(.003,.005,.34,4,1));e.translate(-.015,.17,-.025);const n=e.getAttribute("position").count,s=new Float32Array(n*3);for(let o=0;o<n;o++)s[o*3]=.18,s[o*3+1]=.38,s[o*3+2]=.15;e.setAttribute("color",new J(s,3)),i.push(e);for(let o=0;o<4;o++){const a=.2+o*.042,r=.021*(1-o*.14),l=Ji(new Ao(r,0));l.scale(1.15,.82,1.15),l.translate(-.015+Math.sin(o*2.1)*.006,a,-.025+Math.cos(o*2.1)*.006);const c=l.getAttribute("position").count,h=new Float32Array(c*3);for(let u=0;u<c;u++){const d=.9+o*.07;h[u*3]=d,h[u*3+1]=d,h[u*3+2]=d}l.setAttribute("color",new J(h,3)),i.push(l)}return us(i,!1)}function Cx(i,t,e,n){const s=new xi;s.position.set(i,t,e);const o=[{rx:.44,ry:.17,rz:.38,dy:.08,rot:.2},{rx:.35,ry:.14,rz:.31,dy:.28,rot:1.1},{rx:.27,ry:.12,rz:.24,dy:.45,rot:2.3},{rx:.19,ry:.11,rz:.18,dy:.6,rot:.7},{rx:.12,ry:.1,rz:.11,dy:.73,rot:1.9}];for(const a of o){const r=new Ao(1,1);r.scale(a.rx,a.ry,a.rz);const l=new ze(r,n);l.position.set((Math.sin(a.rot*3)-.5)*.03,a.dy,(Math.cos(a.rot*2)-.5)*.03),l.rotation.y=a.rot,l.castShadow=!0,l.receiveShadow=!0,s.add(l)}return s}function Px(i){const t=new xi;t.name="NordicCliffsideWorld";const e=Mx(),n=(V,lt)=>{const yt=new fi({name:lt,map:e.albedo,normalMap:e.normal,normalScale:new qt(1.25,1.25),roughnessMap:e.roughness,roughness:.86,metalness:.04,envMapIntensity:.98});return yt.onBeforeCompile=wt=>{Object.assign(wt.uniforms,i),wt.vertexShader=wt.vertexShader.replace("#include <common>",`#include <common>
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
          vRockWorldNormal = normalize(rawWorldN + vec3(0.0, 1e-5, 0.0));`),wt.fragmentShader=wt.fragmentShader.replace("#include <common>",`#include <common>
          ${Xn}
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

            float cliffSteepMask = ${V?"1.0 - smoothstep(0.36, 0.78, abs(wN.y))":"1.0"};
            float strataVal = evalNordicCliffStrata(vRockWorldPos);
            float rockMassShade = 0.76 + 0.42 * skyFbm(vRockWorldPos.xz * 0.052 + vec2(vRockWorldPos.y * 0.038, -vRockWorldPos.y * 0.029));
            float ironSeam = smoothstep(0.56, 0.88, sin(vRockWorldPos.y * 0.42 + strataVal * 3.1 + vRockWorldPos.x * 0.02));
            float lichenRim = smoothstep(-5.5, 4.5, vRockWorldPos.y) * smoothstep(0.62, 0.90, skyFbm(vRockWorldPos.xz * 0.24 + vRockWorldPos.y * 0.14));
            vec3 slateStrata = mix(vec3(0.54, 0.59, 0.72), vec3(1.26, 1.18, 1.10), strataVal);
            vec3 rustOchre = vec3(1.42, 0.96, 0.72);
            vec3 goldenLichen = mix(vec3(1.08, 1.18, 0.96), vec3(1.52, 1.14, 0.54), smoothstep(0.35, 0.85, skyNoise2(vRockWorldPos.xz * 0.55)));
            vec3 mineralTint = mix(slateStrata, rustOchre, ironSeam * 0.36) * rockMassShade;
            mineralTint = mix(mineralTint, goldenLichen, lichenRim * 0.34);
            diffuseColor.rgb *= mix(albMacro, albDetail, 0.52) * mix(vec3(1.0), mineralTint, cliffSteepMask * 0.90);
          #endif`).replace("#include <color_fragment>",`#include <color_fragment>
          vec3 wNCol = normalize(vRockWorldNormal + vec3(0.0, 1e-5, 0.0));
          ${V?`
          // Localized basalt rock pads right beneath Toothless & Light Fury's claws
          float dPadTL = length((vRockWorldPos.xz - vec2(4.45, 0.22)) / vec2(2.35, 1.95));
          float dPadLF = length((vRockWorldPos.xz - vec2(-4.45, -0.22)) / vec2(2.35, 1.95));
          float dragonPadClear = smoothstep(0.68, 1.18, min(dPadTL, dPadLF));

          // Expose fractured basalt outcrops, stony ribs & mossy rock veins naturally across plateaus and rims!
          float crownSlope = smoothstep(0.62, 0.86, wNCol.y);
          float aboveSpray = smoothstep(-8.8, -3.2, vRockWorldPos.y);
          float rimRockBreakup = smoothstep(0.28, 0.66, skyFbm(vRockWorldPos.xz * 0.16 + 2.9) * 0.75 + skyNoise2(vRockWorldPos.xz * 0.48) * 0.25);
          float outcropBreakthrough = 1.0 - 0.72 * smoothstep(0.64, 0.86, skyFbm(vRockWorldPos.xz * 0.24 - 6.3) * 0.70 + skyNoise2(vRockWorldPos.xz * 0.92) * 0.30);
          float turfMask = dragonPadClear * crownSlope * aboveSpray * outcropBreakthrough * mix(rimRockBreakup, 1.0, smoothstep(0.78, 0.95, wNCol.y));

          // Rich Multi-Scale Tussock Turf & Fibrous Ground Micro-Detail (never smooth plain green!):
          float meadowMacro = skyFbm(vRockWorldPos.xz * 0.068);
          float ridgeDetail = skyFbm(vRockWorldPos.xz * 0.19 - vec2(4.1, 7.3));
          float tussockHummock = skyFbm(vRockWorldPos.xz * 1.15 + vec2(3.7, -2.9));
          float bladeMicroGrain = skyNoise2(vRockWorldPos.xz * 4.8 + vec2(-1.4, 5.2));
          float heatherBelt = smoothstep(0.58, 0.88, skyFbm(vRockWorldPos.xz * 0.11 + vec2(11.3, -5.8))) * (1.0 - smoothstep(0.84, 0.96, wNCol.y));
          float uplandElev = smoothstep(1.2, 18.0, vRockWorldPos.y);

          vec3 velvetMossHollow = vec3(0.042, 0.128, 0.036);
          vec3 springFaroeseTurf = vec3(0.106, 0.174, 0.048);
          vec3 autumnGoldFescue = vec3(0.198, 0.156, 0.050);
          vec3 earthyHeather = vec3(0.118, 0.068, 0.098);

          vec3 baseMeadow = mix(velvetMossHollow, springFaroeseTurf, smoothstep(0.20, 0.78, meadowMacro));
          float goldPatch = smoothstep(0.46, 0.84, ridgeDetail) * (0.28 + 0.50 * uplandElev);
          vec3 turfLush = mix(baseMeadow, autumnGoldFescue, goldPatch * 0.58);
          turfLush = mix(turfLush, earthyHeather, heatherBelt * 0.44);

          // Tussock root crevices, dry straw-gold grass thatch & fine pebble contrast!
          float tussockShade = 0.68 + 0.56 * tussockHummock + 0.22 * (bladeMicroGrain - 0.5);
          vec3 dryThatch = vec3(0.175, 0.148, 0.062);
          turfLush = mix(turfLush * tussockShade, dryThatch, smoothstep(0.68, 0.92, tussockHummock * 0.65 + bladeMicroGrain * 0.35) * 0.34);

          // Blend underlying basalt rock texture variance into turf so ground keeps natural geological grain!
          float rockGrainMod = 0.80 + 0.42 * dot(diffuseColor.rgb, vec3(0.333));
          diffuseColor.rgb = mix(diffuseColor.rgb, turfLush * rockGrainMod, clamp(turfMask * 0.88, 0.0, 0.88));
          `:""}

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
          float meadowSmooth = ${V?"smoothstep(0.64, 0.88, wNRgh.y) * smoothstep(-4.0, 0.5, vRockWorldPos.y)":"0.0"};
          roughnessFactor = mix(roughnessFactor, 0.90, meadowSmooth * 0.76);
          float wetRough = 1.0 - smoothstep(-11.3, -7.2, vRockWorldPos.y);
          roughnessFactor = mix(roughnessFactor, 0.18, wetRough * 0.85);
          roughnessFactor = mix(roughnessFactor, 0.24, clamp(uRainIntensity, 0.0, 1.0) * (1.0 - meadowSmooth * 0.65) * 0.45);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          #ifdef USE_NORMALMAP
          {
            // Hardware-filtered 3D Triplanar Basalt + Procedural Turf Tussock Normal Mapping (NEVER smooth plastic green!)
            vec3 gWN = normalize(inverseTransformDirection(nonPerturbedNormal, viewMatrix) + vec3(0.0, 1e-5, 0.0));
            vec3 triW = abs(gWN);
            triW = triW * triW * triW * triR_safe(triW);
            vec3 np1 = vRockWorldPos * 0.068;
            vec3 np2 = vRockWorldPos * 0.26;

            vec3 tX = (texture2D(normalMap, np1.zy).xyz * 2.0 - 1.0) * 0.58 + (texture2D(normalMap, np2.zy).xyz * 2.0 - 1.0) * 0.62;
            vec3 tY = (texture2D(normalMap, np1.xz).xyz * 2.0 - 1.0) * 0.58 + (texture2D(normalMap, np2.xz).xyz * 2.0 - 1.0) * 0.62;
            vec3 tZ = (texture2D(normalMap, np1.xy).xyz * 2.0 - 1.0) * 0.58 + (texture2D(normalMap, np2.xy).xyz * 2.0 - 1.0) * 0.62;

            vec3 worldPerturb =
              vec3(0.0, tX.y, tX.x) * triW.x +
              vec3(tY.x, 0.0, tY.y) * triW.y +
              vec3(tZ.x, tZ.y, 0.0) * triW.z;

            ${V?`
            float grassSoftMask = smoothstep(0.64, 0.88, gWN.y) * smoothstep(-4.0, 0.5, vRockWorldPos.y);
            // Analytical multi-scale turf tussock hummock & fibrous ground normal detail!
            float tEps = 0.14;
            float th0 = skyFbm(vRockWorldPos.xz * 1.25) * 0.7 + skyNoise2(vRockWorldPos.xz * 4.2) * 0.3;
            float thX = skyFbm((vRockWorldPos.xz + vec2(tEps, 0.0)) * 1.25) * 0.7 + skyNoise2((vRockWorldPos.xz + vec2(tEps, 0.0)) * 4.2) * 0.3;
            float thZ = skyFbm((vRockWorldPos.xz + vec2(0.0, tEps)) * 1.25) * 0.7 + skyNoise2((vRockWorldPos.xz + vec2(0.0, tEps)) * 4.2) * 0.3;
            vec3 tussockBump = vec3((th0 - thX) * 2.6, 0.0, (th0 - thZ) * 2.6);
            float bumpStrength = mix(1.34, 0.62, grassSoftMask);
            worldPerturb = worldPerturb * bumpStrength + tussockBump * grassSoftMask;
            `:`
            worldPerturb *= 1.36;
            `}

            worldPerturb -= gWN * dot(worldPerturb, gWN);
            vec3 perturbedWorldN = normalize(gWN + worldPerturb + vec3(0.0, 1e-5, 0.0));
            normal = normalize(transformDirection(perturbedWorldN, viewMatrix) + vec3(0.0, 0.0, 1e-6));
          }
          #endif`).replace("triW = triW * triW * triW * triR_safe(triW);",`triW = triW * triW * triW * triW;
            triW /= max(triW.x + triW.y + triW.z, 1e-4);`).replace("#include <fog_fragment>",`vec3 rToFrag = vRockWorldPos - cameraPosition;
          float rDist = length(rToFrag);
          vec3 rHazeCol = evalHorizonHazeColor(rToFrag);
          float rAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * rDist, 1e-6), 1.26));
          gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, rHazeCol, clamp(rAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)},yt},s=n(!0,"NordicBasaltCliff_PBR"),o=n(!1,"NordicBareBasaltCrags_PBR");t.add(wx(i));const a=304,r=new Mo(102,104,a,a);r.rotateX(-Math.PI*.5);const l=r.getAttribute("position"),c=r.getAttribute("uv");for(let V=0;V<l.count;V++){const lt=l.getX(V)-4,yt=l.getZ(V)-14.5,wt=Ui(lt,yt);l.setXYZ(V,lt,wt,yt),c.setXY(V,lt*.015,(yt+wt*.55)*.015)}Bh(r,7.3,!0);const h=new ze(r,s);h.receiveShadow=!0,h.castShadow=!0,h.name="HeroBasaltCliffPerch",t.add(h);const u=new ze(xx(),o);u.castShadow=!0,u.receiveShadow=!0,u.name="HeroCliffBasaltCragOutcrops",t.add(u);const d=Ui(-8.65,-7.25);t.add(Cx(-8.65,d-.04,-7.25,o));const m=new xi;m.name="NordicArchipelago";for(let V=0;V<Vl.length;V++){const lt=Vl[V],yt=new Mo(lt.spanX,lt.spanZ,lt.gridSegs,lt.gridSegs);yt.rotateX(-Math.PI*.5);const wt=yt.getAttribute("position"),Ct=yt.getAttribute("uv");for(let Dt=0;Dt<wt.count;Dt++){const Y=lt.centerX+wt.getX(Dt),pt=lt.centerZ+wt.getZ(Dt),St=lt.evalHeight(Y,pt);wt.setXYZ(Dt,Y,St,pt),Ct.setXY(Dt,Y*.015,(pt+St*.55)*.015)}Bh(yt,19.1+V*13.7,!1);const ut=new ze(yt,s);ut.receiveShadow=!0,ut.castShadow=!0,ut.name=lt.name,m.add(ut)}for(let V=0;V<As.length;V++){const lt=As[V],yt=new ze(gx(lt),s);yt.position.set(lt.x,0,lt.z),yt.rotation.y=lt.rotY,yt.castShadow=!0,yt.receiveShadow=!0,yt.name=`FaroeseHeadlandSeaArch_${V}`,m.add(yt)}const v=ei.map(V=>vx(V)),g=new ze(us(v,!1),s);g.castShadow=!0,g.receiveShadow=!0,g.name="TabularFaroeseSeaStacks",m.add(g),t.add(m);const f=Math.cos(.18),p=Math.sin(.18),_=V=>{const lt=Math.sin(V*.11+.35)*1.85,yt=-66+V*f+lt*p,wt=-32-V*p+lt*f,Ct=Di(yt,wt);return new P(yt,Ct,wt)};let M=9.4;for(let V=5;V<=16;V+=.05){const lt=_(V),yt=_(V+1.35);if(lt.y>5.5&&yt.y<Me-1.5){M=V;break}if(lt.y<5.5){M=V-.15;break}}const x=_(M),b=1.2,y=Di(x.x+b,x.z)-Di(x.x-b,x.z),A=Di(x.x,x.z+b)-Di(x.x,x.z-b),T=new qt(-y,-A);T.lengthSq()<1e-4?T.set(f,-p):T.normalize();const S=new qt(-T.y,T.x),w=(V,lt,yt,wt,Ct)=>{const Y=x.y-.12,pt=Me-1.85,St=Y-pt,kt=new Float32Array(1113*3),$t=new Float32Array(1113*2);for(let re=0;re<=52;re++){const fe=re/52,De=Y-St*Math.pow(fe,1.62),qe=.22+yt*Math.pow(fe,.72),un=X.lerp(V,lt,Math.pow(fe,.88)),bn=Ct*fe*fe;for(let Jn=0;Jn<=20;Jn++){const Sn=Jn/20,Xi=(Sn-.5)*2*un+bn,Un=Math.sin(Sn*Math.PI)*(wt+.42*fe);let hr=x.x+S.x*Xi+T.x*(qe+Un),ur=x.z+S.y*Xi+T.y*(qe+Un);for(let vc=0;vc<12;vc++){const _d=Si(hr,ur);if(De>=_d+.52)break;hr+=T.x*.42,ur+=T.y*.42}const Po=re*21+Jn;kt[Po*3]=hr,kt[Po*3+1]=De,kt[Po*3+2]=ur,$t[Po*2]=Sn,$t[Po*2+1]=1-fe}}const Qt=[];for(let re=0;re<52;re++)for(let fe=0;fe<20;fe++){const De=re*21+fe,qe=(re+1)*21+fe,un=(re+1)*21+(fe+1),bn=re*21+(fe+1);Qt.push(De,qe,un,De,un,bn)}const ne=new jt;return ne.setAttribute("position",new J(kt,3)),ne.setAttribute("uv",new J($t,2)),ne.setIndex(Qt),ne.computeVertexNormals(),ne},C=3.85,E=w(.92,2.15,C,.34,.28),R=w(1.18,3.35,C+.55,.68,.72),L=Math.pow((x.y+.18-Me)/(x.y+.18-(Me-1.85)),1/1.62);let I=x.x+T.x*(.28+C*Math.pow(L,.72)+.55),k=x.z+T.y*(.28+C*Math.pow(L,.72)+.55);for(let V=0;V<12&&!(Si(I,k)<Me-2.2);V++)I+=T.x*.55,k+=T.y*.55;const D={...i},U=V=>new Oe({name:"NordicWaterfallShader",transparent:!0,depthWrite:!1,side:en,uniforms:{...D,uVeilMode:{value:V?1:0}},vertexShader:`
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
        ${Xn}
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
      `}),O=U(!1),F=U(!0),Z=new ze(E,O);Z.renderOrder=3;const G=new ze(R,F);G.renderOrder=4,t.add(Z),t.add(G);const $=new oc(9.2,48);$.rotateX(-Math.PI*.5);const q=new Oe({transparent:!0,depthWrite:!1,uniforms:D,vertexShader:`
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
      ${Xn}
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
    `}),W=new ze($,q);W.position.set(I,Me+.16,k),W.renderOrder=3,t.add(W);const nt=1650,ot=new Float32Array(nt*3),Q=new Float32Array(nt*3),it=new Float32Array(nt*3);for(let V=0;V<nt;V++){const lt=st(V,5.7)*Math.PI*2,yt=.35+Math.pow(st(V,13.1),.7)*2.85;ot[V*3]=I+Math.cos(lt)*yt+(st(V,19.4)-.5)*.8,ot[V*3+1]=Me+.05+st(V,23.8)*.65,ot[V*3+2]=k+Math.sin(lt)*yt+(st(V,29.2)-.5)*.8;const wt=lt+(st(V,37.6)-.5)*.85,Ct=1.85+st(V,41.9)*5.35;Q[V*3]=Math.cos(wt)*Ct+T.x*(1.1+st(V,47.3)*1.8),Q[V*3+1]=5.4+Math.pow(st(V,53.1),.75)*8.4,Q[V*3+2]=Math.sin(wt)*Ct+T.y*(1.1+st(V,59.7)*1.8),it[V*3]=st(V,67.3),it[V*3+1]=.52+st(V,73.9)*.46,it[V*3+2]=.55+st(V,83.1)*1.15}const j=new jt;j.setAttribute("position",new J(ot,3)),j.setAttribute("aVelocity",new J(Q,3)),j.setAttribute("aMeta",new J(it,3));const tt=new Oe({name:"WaterfallBallisticSplashDroplets",transparent:!0,depthWrite:!1,uniforms:D,vertexShader:`
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
      ${Xn}
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
    `}),ft=new no(j,tt);ft.renderOrder=4,ft.frustumCulled=!1,t.add(ft);const et=420,z=new Float32Array(et*3),xt=new Float32Array(et);for(let V=0;V<et;V++){const lt=st(V,11.3)*Math.PI*2,yt=Math.pow(st(V,19.7),.65)*6.4;z[V*3]=I+Math.cos(lt)*yt,z[V*3+1]=Me+st(V,27.9)*11.5,z[V*3+2]=k+Math.sin(lt)*yt,xt[V]=st(V,61.7)}const gt=new jt;gt.setAttribute("position",new J(z,3)),gt.setAttribute("aSeed",new J(xt,1));const Et=new Oe({transparent:!0,depthWrite:!1,uniforms:D,vertexShader:`
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
      ${Xn}
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
    `}),Tt=new no(gt,Et);Tt.renderOrder=4,Tt.frustumCulled=!1,t.add(Tt);const Ft=(V,lt)=>{if(Math.hypot(V-I,lt-k)<10.2||Math.hypot(V-x.x,lt-x.z)<8.5)return!0;const yt=V-x.x,wt=lt-x.z,Ct=yt*T.x+wt*T.y,ut=Math.abs(yt*S.x+wt*S.y);return Ct>-8&&Ct<26&&ut<9.5},ht=new pn,H=new Ao(.62,1),N=H.getAttribute("position");for(let V=0;V<N.count;V++){const lt=N.getX(V);let yt=N.getY(V);const wt=N.getZ(V),Ct=.82+.32*he(lt*2.2+4.3,yt*2.2+wt*2.2,3);yt<-.1&&(yt=-.1+(yt+.1)*.35),N.setXYZ(V,lt*Ct*1.36,yt*Ct*.62,wt*Ct*1.22)}H.computeVertexNormals();const K=(()=>{const Ct=new Float32Array(411),ut=new Float32Array(274);for(let $t=0;$t<=14;$t++){const Qt=$t/14,ne=(Qt-.5)*3.4,re=.58+.42*Math.sin(Qt*Math.PI),fe=Math.sin(Qt*Math.PI*1.3+.4)*.18,De=-Math.pow(Qt-.5,2)*.14;for(let qe=0;qe<=8;qe++){const un=qe/8,bn=un*Math.PI*2,Jn=.84+.26*he(ne*1.3+2.1,Math.cos(bn)*1.7+Math.sin(bn)*1.7,2),Sn=.3*re*Jn,Xi=.38*re*Jn,Un=$t*9+qe;Ct[Un*3]=ne,Ct[Un*3+1]=De+Math.sin(bn)*Sn,Ct[Un*3+2]=fe+Math.cos(bn)*Xi,ut[Un*2]=Qt*2.4,ut[Un*2+1]=un}}const Dt=135,Y=Dt+1;Ct[Dt*3]=-1.72,Ct[Dt*3+1]=-.04,Ct[Dt*3+2]=0,ut[Dt*2]=0,ut[Dt*2+1]=.5,Ct[Y*3]=1.72,Ct[Y*3+1]=-.04,Ct[Y*3+2]=0,ut[Y*2]=2.4,ut[Y*2+1]=.5;const pt=[];for(let $t=0;$t<14;$t++)for(let Qt=0;Qt<8;Qt++){const ne=$t*9+Qt,re=($t+1)*9+Qt,fe=($t+1)*9+(Qt+1),De=$t*9+(Qt+1);pt.push(ne,re,fe,ne,fe,De)}const St=126;for(let $t=0;$t<8;$t++)pt.push(Dt,$t+1,$t),pt.push(Y,St+$t,St+$t+1);const kt=new jt;return kt.setAttribute("position",new J(Ct,3)),kt.setAttribute("uv",new J(ut,2)),kt.setIndex(pt),kt.computeVertexNormals(),kt})(),dt=[{cx:-3.5,cz:-14,spanX:64,spanZ:60,isHero:!0,evalH:Ui},{cx:-70,cz:-34,spanX:74,spanZ:64,isHero:!1,evalH:Di},{cx:88,cz:36,spanX:78,spanZ:78,isHero:!1,evalH:mc},{cx:84,cz:-46,spanX:74,spanZ:82,isHero:!1,evalH:gc},{cx:-124,cz:-86,spanX:74,spanZ:64,isHero:!1,evalH:Qu},{cx:-48,cz:-92,spanX:58,spanZ:54,isHero:!1,evalH:Ju},{cx:42,cz:-112,spanX:68,spanZ:66,isHero:!1,evalH:td},{cx:-144,cz:78,spanX:112,spanZ:108,isHero:!1,evalH:ed},{cx:156,cz:116,spanX:116,spanZ:106,isHero:!1,evalH:nd}],bt=880,_t=new vs(H,o,bt);_t.castShadow=!0,_t.receiveShadow=!0;let zt=0;const Pt=210,Ut=new vs(K,o,Pt);Ut.castShadow=!0,Ut.receiveShadow=!0;let se=0;const Rt=new P(0,1,0),Wt=new P,ie=new on,It=new on;for(let V=0;V<dt.length;V++){const lt=dt[V],yt=lt.isHero?36:24;let wt=0;for(let Ct=0;Ct<900&&wt<yt&&zt<bt-6;Ct++){const ut=7e3+V*1100+Ct,Dt=lt.cx+(st(ut,14.7)-.5)*(lt.spanX*1.28),Y=lt.cz+(st(ut,53.9)-.5)*(lt.spanZ*1.28),pt=lt.evalH(Dt,Y);if(pt<-16.2||pt>-9.2||Ft(Dt,Y))continue;wt++;const St=1.05+st(ut,29.1)*1.85,kt=Math.max(pt-.12,Me-.08+st(ut,37.4)*.62);ht.position.set(Dt,kt,Y),ht.rotation.set((st(ut,3.3)-.5)*.24,st(ut,9.8)*Math.PI*2,(st(ut,6.1)-.5)*.24),ht.scale.set(St*(.92+st(ut,4.4)*.45),St*(.58+st(ut,8.2)*.35),St*(.88+st(ut,11.6)*.42)),ht.updateMatrix(),_t.setMatrixAt(zt++,ht.matrix);const $t=2+Math.floor(st(ut,45.2)*3);for(let Qt=0;Qt<$t&&zt<bt;Qt++){const ne=ut*7+Qt*19.3,re=st(ne,2.7)*Math.PI*2,fe=1.15+st(ne,5.9)*3.4,De=Dt+Math.cos(re)*fe,qe=Y+Math.sin(re)*fe;if(Ft(De,qe))continue;const un=.48+st(ne,12.4)*.95,bn=Me-.1+st(ne,18.8)*.44;ht.position.set(De,bn,qe),ht.rotation.set((st(ne,21.1)-.5)*.32,st(ne,25.6)*Math.PI*2,(st(ne,29.3)-.5)*.32),ht.scale.set(un*(.95+st(ne,33.1)*.55),un*(.52+st(ne,37.7)*.32),un),ht.updateMatrix(),_t.setMatrixAt(zt++,ht.matrix)}if(se<Pt&&st(ut,63.5)>.28){const Qt=st(ut,71.2)*Math.PI*2,ne=Dt+Math.cos(Qt)*(1.2+st(ut,77.8)*2.4),re=Y+Math.sin(Qt)*(1.2+st(ut,81.4)*2.4);if(!Ft(ne,re)){const fe=.72+st(ut,88.9)*1.15,De=.68+st(ut,93.1)*.65,qe=Math.max(lt.evalH(ne,re)-.08,Me-.04+st(ut,97.6)*.36),un=lt.evalH(ne+1,re)-lt.evalH(ne-1,re),bn=lt.evalH(ne,re+1)-lt.evalH(ne,re-1),Jn=Math.atan2(un,-bn)+(st(ut,102.3)-.5)*.95;ht.position.set(ne,qe,re),ht.rotation.set((st(ut,108.7)-.5)*.16,Jn,(st(ut,114.2)-.5)*.18),ht.scale.set(fe,De,De*1.08),ht.updateMatrix(),Ut.setMatrixAt(se++,ht.matrix)}}}}for(let V=0;V<ei.length;V++){const lt=ei[V];for(let yt=0;yt<6&&zt<bt;yt++){const wt=19e3+V*71+yt*13,Ct=yt/6*Math.PI*2+(st(wt,4.1)-.5)*.55,ut=Math.max(lt.rx,lt.rz)*(1.12+st(wt,8.7)*.52),Dt=lt.x+Math.cos(Ct)*ut,Y=lt.z+Math.sin(Ct)*ut;if(Ft(Dt,Y))continue;const pt=.65+st(wt,15.3)*1.15;ht.position.set(Dt,Me-.08+st(wt,19.9)*.48,Y),ht.rotation.set(.08,st(wt,24.4)*Math.PI*2,-.06),ht.scale.set(pt*1.25,pt*.62,pt),ht.updateMatrix(),_t.setMatrixAt(zt++,ht.matrix),yt%2===0&&se<Pt&&(ht.position.set(Dt+Math.cos(Ct+.6)*1.6,Me+.02+st(wt,31.2)*.26,Y+Math.sin(Ct+.6)*1.6),ht.rotation.set(.05,Ct+Math.PI*.5+(st(wt,36.8)-.5)*.6,-.09),ht.scale.set(.75+st(wt,41.5)*.85,.72,.78),ht.updateMatrix(),Ut.setMatrixAt(se++,ht.matrix))}}for(let V=0;V<dt.length;V++){const lt=dt[V],yt=lt.isHero?24:10;let wt=0;for(let Ct=0;Ct<400&&wt<yt&&zt<bt;Ct++){const ut=V*500+Ct,Dt=lt.cx+(st(ut,41.2)-.5)*lt.spanX,Y=lt.cz+(st(ut,83.7)-.5)*lt.spanZ;if(lt.isHero){if(Math.sqrt(Math.pow(Dt/10.2,2)+Math.pow((Y+1)/6.4,2))<1)continue}else if(Ft(Dt,Y))continue;const pt=lt.evalH(Dt,Y);if(pt<.25||pt>34)continue;const St=lt.evalH(Dt+.6,Y),kt=lt.evalH(Dt-.6,Y),$t=lt.evalH(Dt,Y+.6),Qt=lt.evalH(Dt,Y-.6),ne=(St-kt)/1.2,re=($t-Qt)/1.2;if(Math.hypot(ne,re)>.38||Math.min(St,kt,$t,Qt)<0)continue;const De=(lt.isHero?.38:.58)+st(ut,19.4)*(lt.isHero?.62:.95);Wt.set(-ne,1,-re).normalize(),ie.setFromUnitVectors(Rt,Wt),It.setFromAxisAngle(Rt,st(ut,8.9)*Math.PI*2),ht.quaternion.copy(ie).multiply(It),ht.position.set(Dt,pt-.14*De,Y),ht.scale.set(De*(.95+st(ut,2.3)*.32),De*.55,De),ht.updateMatrix(),_t.setMatrixAt(zt++,ht.matrix),wt++}}const Nt=(V,lt,yt)=>{const wt=.24+.74*lt,Ct=Math.cos(wt*Math.PI*.5),ut=yt*Math.PI*2,Dt=Math.cos(ut),Y=Math.sin(ut),pt=id(Dt,Y,ut,1,V),St=.98+.08*Math.cos(14+V.seed+Y*1.4)+.05*Math.sin(ut*4+9-V.seed),kt=pt.lx*St*Ct*.86,$t=pt.lz*St*Ct*.86,Qt=Math.cos(V.rotY),ne=Math.sin(V.rotY),re=V.x+kt*Qt-$t*ne,fe=V.z+kt*ne+$t*Qt,De=Ha(re,fe,wt,V);return{wx:re,wy:De,wz:fe}},Jt=(V,lt,yt)=>{const wt=.26+.48*lt,Ct=(wt-.5)*2*V.halfLength,ut=Math.sin(wt*Math.PI*1.65+V.seed)*2.65+Math.cos(wt*Math.PI*2.9-V.seed*.7)*1.25+(he(wt*4.2+V.seed,1.7,3)-.5)*2.35,Dt=(.5-wt)*2.2+Math.sin(wt*Math.PI)*.85,Y=(he(Ct*.09+V.seed,ut*.09,3)-.5)*1.35+(Qe(Ct*.08+V.seed,2.3,2)-.48)*.85,pt=(yt-.5)*V.halfThickness*1.15,St=V.plateauTopY+Dt+Y+.28-.12*pt,kt=Math.cos(V.rotY),$t=Math.sin(V.rotY),Qt=ut+pt;return{wx:V.x+Ct*kt+Qt*$t,wy:St,wz:V.z-Ct*$t+Qt*kt}};for(let V=0;V<ei.length;V++){const lt=ei[V];if(!(lt.topY<-3.5))for(let yt=0;yt<4&&zt<bt;yt++){const wt=31e3+V*43+yt*17,Ct=Nt(lt,st(wt,3.1),st(wt,7.9)),ut=.34+st(wt,11.4)*.48;ht.position.set(Ct.wx,Ct.wy-.12*ut,Ct.wz),ht.rotation.set((st(wt,15.2)-.5)*.2,st(wt,19.8)*Math.PI*2,(st(wt,23.6)-.5)*.2),ht.scale.set(ut*1.15,ut*.52,ut),ht.updateMatrix(),_t.setMatrixAt(zt++,ht.matrix)}}_t.count=zt,_t.instanceMatrix.needsUpdate=!0,t.add(_t),Ut.count=se,Ut.instanceMatrix.needsUpdate=!0,Ut.name="ShorelineBasaltRockyLogs",t.add(Ut);const te=bx(),be=Sx(),at=Ax(),Vt=Tx(),Mt=Ex(),At={uTime:{value:0}},Ot=(V,lt,yt,wt,Ct)=>{V.onBeforeCompile=ut=>{Object.assign(ut.uniforms,i),ut.uniforms.uFloraTime=At.uTime,ut.vertexShader=ut.vertexShader.replace("#include <common>",`#include <common>
          uniform float uFloraTime;
          uniform float uWindStrength;
          uniform vec2 uWindDir;
          varying vec3 vFloraWorldPos;
          varying float vWindSheen;
          varying float vTipFrac;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float hFrac = clamp(position.y / ${lt.toFixed(3)}, 0.0, 1.0);
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
          float steadyLean = pow(windStr, 1.12) * ${yt.toFixed(3)} * 0.44 * plantScaleH;
          float gustSurge = (0.04 + 0.68 * windStr) * ${yt.toFixed(3)} * gustPacket * plantScaleH;
          float crossEddy = sin(uFloraTime * (2.1 + 2.5 * windStr) + instW.x * 0.85 + instW.z * 1.05) * ${yt.toFixed(3)} * (0.03 + 0.15 * windStr) * plantScaleH;

          // Out-of-phase individual frond/blade/petal shiver so each frond in a fern stand dances independently!
          float frondPhase = position.x * 19.5 + position.z * 17.5 + instW.x * 3.7 + instW.z * 2.9;
          float flutter = sin(uFloraTime * (6.6 + 6.8 * windStr) + frondPhase) * ${wt.toFixed(4)} * (0.16 + 0.88 * windStr) * (0.45 + 0.55 * gustPacket) * hFrac;

          vec2 worldDispXZ =
            wDir * ((steadyLean + gustSurge) * bendProfile + flutter) +
            wPerp * (crossEddy * bendProfile + flutter * 0.55);

          // Length-preserving parabolic droop so bowed ferns & tall grasses arc naturally without stretching!
          float worldPlantH = max(${lt.toFixed(3)} * plantScaleH, 0.14);
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
          vFloraWorldPos = fwPos.xyz;`),ut.fragmentShader=ut.fragmentShader.replace("#include <common>",`#include <common>
          ${Xn}
          uniform vec3 uSunColor;
          varying vec3 vFloraWorldPos;
          varying float vWindSheen;
          varying float vTipFrac;`).replace("#include <fog_fragment>",`vec3 fToFrag = vFloraWorldPos - cameraPosition;
          float fDist = length(fToFrag);
          vec3 fViewDir = fToFrag / max(fDist, 1e-4);
          // Backlit botanical subsurface translucency + traveling wind-ripple sheen + storm lightning rim!
          float sunTrans = pow(clamp(dot(fViewDir, normalize(uSunDir + vec3(0.0, 0.25, 0.0))), 0.0, 1.0), 2.2);
          vec3 sssGlow = diffuseColor.rgb * uSunColor * sunTrans * ${Ct.toFixed(3)} * (0.35 + 0.65 * vTipFrac);
          vec3 gustSheen = mix(uHorizonAntiColor, uSunColor, 0.38) * vWindSheen * 0.22;
          vec3 boltRim = diffuseColor.rgb * vec3(0.75, 0.88, 1.0) * uLightningFlash * (0.45 + 0.55 * vTipFrac);
          gl_FragColor.rgb += sssGlow + gustSheen + boltRim;

          vec3 fHaze = evalHorizonHazeColor(fToFrag);
          float fAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * fDist, 1e-6), 1.26));
          gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, fHaze, clamp(fAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)}},Gt=(V,lt)=>he(V*.11+6.3,lt*.11-4.7,3),pe=(V,lt)=>he(V*.1-11.2,lt*.1+8.4,3),Ue=new fi({name:"NordicVariedCoastalGrass",color:new Bt(16777215),vertexColors:!0,roughness:.74,metalness:0,side:en});Ot(Ue,.48,.38,.022,.65);const ae=18500,me=new vs(te,Ue,ae);me.castShadow=!1,me.receiveShadow=!0,me.name="NordicVariedCoastalGrassInstanced";const Je=new Bt;let Re=0;const jn=(V,lt)=>{const yt=st(V,17.1);lt>.62&&yt>.42?Je.setHSL(.13+(st(V,19.4)-.5)*.025,.46,.28+st(V,22.8)*.1):yt<.58?Je.setHSL(.24+(st(V,21.1)-.5)*.03,.48,.19+st(V,23.7)*.1):yt<.86?Je.setHSL(.16+(st(V,25.3)-.5)*.025,.44,.25+st(V,29.1)*.09):Je.setHSL(.29+(st(V,31.9)-.5)*.025,.32,.2+st(V,37.4)*.08)};for(let V=0;V<dt.length;V++){const lt=dt[V],yt=lt.isHero?5600:1280;let wt=0,Ct=0;for(;wt<yt&&Ct<yt*6&&Re<ae-1200;){Ct++;const ut=V*35e3+Ct,Dt=lt.cx+(st(ut,1.3)-.5)*lt.spanX,Y=lt.cz+(st(ut,7.9)-.5)*lt.spanZ;if(lt.isHero){const qe=Math.sqrt(Math.pow((Dt-4.45)/2.35,2)+Math.pow((Y+.85)/3.8,2)),un=Math.sqrt(Math.pow((Dt+4.45)/2.35,2)+Math.pow((Y+1.15)/3.8,2));if(qe<1||un<1)continue}const pt=lt.evalH(Dt,Y),St=lt.evalH(Dt+.45,Y),kt=lt.evalH(Dt,Y+.45),$t=Math.hypot(St-pt,kt-pt)/.45;if(pt<-.4||$t>.58)continue;const Qt=he(Dt*.38+2.3,Y*.38-4.1,3);if(Qt<.28)continue;const ne=le(.56,.88,he(Dt*.16-6.4,Y*.16+9.2,3)),re=1-le(.28,.54,Qt),fe=X.lerp(.54,.36,re)+st(ut,3.7)*.46+ne*(.48+st(ut,6.4)*.32),De=.72+st(ut,5.1)*.56+ne*.16;ht.position.set(Dt,pt-.02,Y),ht.scale.set(De,fe,De),ht.rotation.set((st(ut,9.2)-.5)*.14,st(ut,11.4)*Math.PI*2,(st(ut,13.8)-.5)*.14),ht.updateMatrix(),me.setMatrixAt(Re,ht.matrix),jn(ut,ne),me.setColorAt(Re,Je),Re++,wt++}}for(let V=0;V<ei.length;V++){const lt=ei[V];if(!(lt.topY<-3.5))for(let yt=0;yt<120&&Re<ae;yt++){const wt=51e4+V*310+yt,Ct=Nt(lt,Math.sqrt(st(wt,2.1)),st(wt,6.7));if(he(Ct.wx*.55+1.9,Ct.wz*.55-2.7,2)<.26)continue;const Dt=.68+st(wt,9.4)*.52,Y=.42+st(wt,12.8)*.55;ht.position.set(Ct.wx,Ct.wy-.02,Ct.wz),ht.scale.set(Dt,Y,Dt),ht.rotation.set(0,st(wt,15.3)*Math.PI*2,0),ht.updateMatrix(),me.setMatrixAt(Re,ht.matrix),jn(wt,.35),me.setColorAt(Re,Je),Re++}}for(let V=0;V<As.length;V++){const lt=As[V];for(let yt=0;yt<240&&Re<ae;yt++){const wt=56e4+V*420+yt,Ct=Jt(lt,st(wt,3.4),st(wt,8.2)),ut=.7+st(wt,11.1)*.55,Dt=.45+st(wt,14.6)*.62;ht.position.set(Ct.wx,Ct.wy-.02,Ct.wz),ht.scale.set(ut,Dt,ut),ht.rotation.set(0,st(wt,18.9)*Math.PI*2,0),ht.updateMatrix(),me.setMatrixAt(Re,ht.matrix),jn(wt,.42),me.setColorAt(Re,Je),Re++}}me.count=Re,me.instanceMatrix.needsUpdate=!0,me.instanceColor&&(me.instanceColor.needsUpdate=!0),t.add(me);const Kn=(V,lt,yt,wt,Ct)=>{const ut=V.isHero?-.22:-1.5,Dt=V.isHero?-.34:-2.2,Y=V.evalH(lt,yt);if(Y<ut)return null;const pt=V.evalH(lt+wt,yt),St=V.evalH(lt-wt,yt),kt=V.evalH(lt,yt+wt),$t=V.evalH(lt,yt-wt);return Math.min(pt,St,kt,$t)<Dt||Math.hypot(pt-St,kt-$t)/(2*wt)>Ct?null:Y},Dn=new fi({name:"NordicCoastalBrackenFerns",color:new Bt(16777215),vertexColors:!0,roughness:.64,metalness:0,side:en});Ot(Dn,.36,.34,.028,.78);const On=2600,ln=new vs(be,Dn,On);ln.castShadow=!1,ln.receiveShadow=!0,ln.name="NordicCoastalBrackenFernsInstanced";const fn=new Bt;let Be=0;for(let V=0;V<dt.length;V++){const lt=dt[V],yt=lt.isHero?480:210;let wt=0,Ct=0;for(;wt<yt&&Ct<yt*16&&Be<On;){Ct++;const ut=41e4+V*22e3+Ct,Dt=lt.cx+(st(ut,3.1)-.5)*lt.spanX,Y=lt.cz+(st(ut,8.7)-.5)*lt.spanZ;if(lt.isHero){const ne=Math.sqrt(Math.pow((Dt-4.45)/2.95,2)+Math.pow((Y+.85)/4.25,2)),re=Math.sqrt(Math.pow((Dt+4.45)/2.95,2)+Math.pow((Y+1.15)/4.25,2));if(ne<1||re<1)continue}const pt=Gt(Dt,Y);if(pt<.49)continue;const St=Kn(lt,Dt,Y,.65,.44);if(St===null)continue;const kt=.62+st(ut,12.3)*.65,$t=.55+st(ut,15.9)*.72+le(.5,.78,pt)*.24;ht.position.set(Dt,St-.025,Y),ht.scale.set(kt,$t,kt),ht.rotation.set((st(ut,19.1)-.5)*.14,st(ut,23.4)*Math.PI*2,(st(ut,27.8)-.5)*.14),ht.updateMatrix(),ln.setMatrixAt(Be,ht.matrix),st(ut,31.6)<.72?fn.setHSL(.25+(st(ut,35.2)-.5)*.04,.52,.34+st(ut,39.7)*.12):fn.setHSL(.16+(st(ut,43.1)-.5)*.03,.54,.36+st(ut,47.5)*.1),ln.setColorAt(Be,fn),Be++,wt++}}ln.count=Be,ln.instanceMatrix.needsUpdate=!0,ln.instanceColor&&(ln.instanceColor.needsUpdate=!0),t.add(ln);const wi=new fi({name:"NordicTallRoyalFernStands",color:new Bt(16777215),vertexColors:!0,roughness:.58,metalness:0,side:en});Ot(wi,.72,.52,.038,.88);const En=1200,Cn=new vs(at,wi,En);Cn.castShadow=!0,Cn.receiveShadow=!0,Cn.name="NordicTallRoyalFernStandsInstanced";let Qn=0;for(let V=0;V<dt.length;V++){const lt=dt[V],yt=lt.isHero?185:95;let wt=0,Ct=0;for(;wt<yt&&Ct<yt*20&&Qn<En;){Ct++;const ut=62e4+V*24e3+Ct,Dt=lt.cx+(st(ut,4.3)-.5)*lt.spanX,Y=lt.cz+(st(ut,9.6)-.5)*lt.spanZ;if(lt.isHero){const ne=Math.sqrt(Math.pow((Dt-4.45)/4.2,2)+Math.pow((Y+.45)/5.4,2)),re=Math.sqrt(Math.pow((Dt+4.45)/4.2,2)+Math.pow((Y+.75)/5.4,2)),fe=Math.sqrt(Math.pow(Dt/5.5,2)+Math.pow((Y-2.2)/5.8,2));if(ne<1||re<1||fe<1)continue}const pt=Gt(Dt,Y);if(pt<.54)continue;const St=Kn(lt,Dt,Y,.75,.38);if(St===null)continue;const kt=.82+st(ut,14.7)*.5+le(.55,.8,pt)*.22,$t=.8+st(ut,18.2)*.46;ht.position.set(Dt,St-.035,Y),ht.scale.set($t,kt,$t),ht.rotation.set((st(ut,21.9)-.5)*.12,st(ut,26.3)*Math.PI*2,(st(ut,30.5)-.5)*.12),ht.updateMatrix(),Cn.setMatrixAt(Qn,ht.matrix),st(ut,34.8)<.76?fn.setHSL(.26+(st(ut,38.1)-.5)*.035,.54,.36+st(ut,42.6)*.12):fn.setHSL(.18+(st(ut,46.9)-.5)*.03,.52,.38+st(ut,50.4)*.1),Cn.setColorAt(Qn,fn),Qn++,wt++}}Cn.count=Qn,Cn.instanceMatrix.needsUpdate=!0,Cn.instanceColor&&(Cn.instanceColor.needsUpdate=!0),t.add(Cn);const ps=new fi({name:"NordicHeatherShrubs",color:new Bt(16777215),vertexColors:!0,roughness:.72,metalness:0});Ot(ps,.24,.18,.014,.48);const Nn=1600,xn=new vs(Vt,ps,Nn);xn.castShadow=!1,xn.receiveShadow=!0,xn.name="NordicHeatherShrubsInstanced";const oi=new Bt;let yn=0;for(let V=0;V<dt.length;V++){const lt=dt[V],yt=lt.isHero?260:125;let wt=0,Ct=0;for(;wt<yt&&Ct<yt*18&&yn<Nn-160;){Ct++;const ut=79e4+V*19e3+Ct,Dt=lt.cx+(st(ut,5.4)-.5)*lt.spanX,Y=lt.cz+(st(ut,10.8)-.5)*lt.spanZ;if(lt.isHero){const $t=Math.sqrt(Math.pow((Dt-4.45)/2.85,2)+Math.pow((Y+.85)/4.2,2)),Qt=Math.sqrt(Math.pow((Dt+4.45)/2.85,2)+Math.pow((Y+1.15)/4.2,2));if($t<1||Qt<1)continue}if(Gt(Dt,Y)>.47||pe(Dt,Y)>.5||he(Dt*.28+23.1,Y*.28-9.7,3)<.43)continue;const St=Kn(lt,Dt,Y,.55,.46);if(St===null)continue;const kt=.68+st(ut,13.6)*.62;ht.position.set(Dt,St-.02,Y),ht.scale.set(kt*1.12,kt*(.72+st(ut,17.2)*.35),kt*1.12),ht.rotation.set((st(ut,20.4)-.5)*.14,st(ut,24.9)*Math.PI*2,(st(ut,28.3)-.5)*.14),ht.updateMatrix(),xn.setMatrixAt(yn,ht.matrix),oi.setHSL(.86+(st(ut,37.1)-.5)*.05,.38,.44+st(ut,41.2)*.12),xn.setColorAt(yn,oi),yn++,wt++}}for(let V=0;V<ei.length;V++){const lt=ei[V];if(!(lt.topY<-3.5))for(let yt=0;yt<14&&yn<Nn;yt++){const wt=88e4+V*97+yt,Ct=Nt(lt,.25+st(wt,4.1)*.65,st(wt,8.9)),ut=.65+st(wt,12.2)*.55;ht.position.set(Ct.wx,Ct.wy-.02,Ct.wz),ht.scale.set(ut*1.1,ut*.78,ut*1.1),ht.rotation.set(0,st(wt,16.7)*Math.PI*2,0),ht.updateMatrix(),xn.setMatrixAt(yn,ht.matrix),oi.setHSL(.87,.36,.46+st(wt,21.3)*.1),xn.setColorAt(yn,oi),yn++}}xn.count=yn,xn.instanceMatrix.needsUpdate=!0,xn.instanceColor&&(xn.instanceColor.needsUpdate=!0),t.add(xn);const ai=new fi({name:"NordicCliffWildflowers",vertexColors:!0,roughness:.56,metalness:0,side:en});Ot(ai,.32,.3,.024,.62);const B=2400,rt=new vs(Mt,ai,B);rt.castShadow=!1,rt.receiveShadow=!0,rt.name="NordicCliffWildflowersInstanced";const mt=new Bt;let vt=0;for(let V=0;V<dt.length;V++){const lt=dt[V],yt=lt.isHero?540:195;let wt=0,Ct=0;for(;wt<yt&&Ct<yt*18&&vt<B;){Ct++;const ut=9e4+V*26e3+Ct,Dt=lt.cx+(st(ut,2.7)-.5)*lt.spanX,Y=lt.cz+(st(ut,6.3)-.5)*lt.spanZ;if(lt.isHero){const $t=Math.sqrt(Math.pow((Dt-4.45)/2.85,2)+Math.pow((Y+.85)/4.25,2)),Qt=Math.sqrt(Math.pow((Dt+4.45)/2.85,2)+Math.pow((Y+1.15)/4.25,2));if($t<1||Qt<1)continue}if(Gt(Dt,Y)>.48||pe(Dt,Y)<.5)continue;const pt=Kn(lt,Dt,Y,.7,.34);if(pt===null)continue;const St=.65+st(ut,11.9)*.58;ht.position.set(Dt,pt-.015,Y),ht.scale.set(St,St*(.82+st(ut,14.2)*.38),St),ht.rotation.set((st(ut,18.5)-.5)*.12,st(ut,22.1)*Math.PI*2,(st(ut,26.8)-.5)*.12),ht.updateMatrix(),rt.setMatrixAt(vt,ht.matrix);const kt=he(Dt*.085+13.1,Y*.085-9.4,2);kt<.44?mt.setHSL(.94+(st(ut,31.1)-.5)*.03,.52,.68+st(ut,33.7)*.1):kt<.76?mt.setHSL(.12,.12,.88+st(ut,35.9)*.08):mt.setHSL(.13+(st(ut,39.2)-.5)*.02,.78,.58+st(ut,41.8)*.08),rt.setColorAt(vt,mt),vt++,wt++}}rt.count=vt,rt.instanceMatrix.needsUpdate=!0,rt.instanceColor&&(rt.instanceColor.needsUpdate=!0),t.add(rt),t.add(yx(i));const Lt=hx([{x:-2,z:-8,radius:22.5},{x:-18,z:-26,radius:18},{x:27.5,z:-10.5,radius:6.5},{x:-37.5,z:-22,radius:7.2},{x:I,z:k,radius:5.8,boost:1},{x:-66,z:-32,radius:25.5},{x:-91,z:-42.5,radius:21},{x:88,z:36,radius:34.5},{x:59.5,z:23,radius:11},{x:43.5,z:14.5,radius:6.2},{x:63,z:50.5,radius:8.2},{x:88,z:-56,radius:30.5},{x:70,z:-22.5,radius:17.5},{x:-124,z:-86,radius:34},{x:-42,z:-96,radius:20},{x:36,z:-108,radius:22},{x:-144,z:78,radius:44},{x:168,z:122,radius:42},{x:-206,z:-96,radius:46},{x:-8,z:-222,radius:58},{x:-18,z:236,radius:32}],i);t.add(Lt.mesh);const Ht=[],Zt=[{cx:-2,cz:-8,rMax:42,rays:84,boost:1.15},{cx:-68,cz:-33,rMax:44,rays:52,boost:1.05},{cx:88,cz:36,rMax:48,rays:44,boost:.95},{cx:84,cz:-46,rMax:48,rays:40,boost:.95},{cx:-124,cz:-86,rMax:46,rays:28,boost:.9}];for(let V=0;V<Zt.length;V++){const lt=Zt[V];for(let yt=0;yt<lt.rays;yt++){const wt=yt/lt.rays*Math.PI*2+(st(V*97+yt,13.7)-.5)*.05,Ct=Math.cos(wt),ut=Math.sin(wt);for(let Dt=lt.rMax;Dt>=4.5;Dt-=.75){const Y=lt.cx+Ct*Dt,pt=lt.cz+ut*Dt;if(Si(Y,pt)>=Me-.35){Si(Y+Ct*1.2,pt+ut*1.2)<Me-.45&&Ht.push({x:Y+Ct*.25,z:pt+ut*.25,landX:-Ct,landZ:-ut,boost:lt.boost});break}}}}for(let V=0;V<ei.length;V++){const lt=ei[V];for(let yt=0;yt<10;yt++){const wt=yt/10*Math.PI*2+st(V*31+yt,7.3)*.3,Ct=(lt.rx*Math.abs(Math.cos(wt))+lt.rz*Math.abs(Math.sin(wt)))*.92+.6;Ht.push({x:lt.x+Math.cos(wt)*Ct,z:lt.z+Math.sin(wt)*Ct,landX:-Math.cos(wt),landZ:-Math.sin(wt),boost:1.12})}}for(let V=0;V<As.length;V++){const lt=As[V],yt=Math.cos(lt.rotY),wt=Math.sin(lt.rotY);for(let Ct=0;Ct<16;Ct++){const ut=-.82+Ct/15*1.64;if(!(Math.abs(ut*lt.halfLength)<lt.openingHalfSpan*.72))for(const Dt of[-1,1]){const Y=ut*lt.halfLength,pt=Dt*(lt.halfThickness*1.15),St=lt.x+Y*yt+pt*wt,kt=lt.z-Y*wt+pt*yt;Ht.push({x:St,z:kt,landX:-Dt*wt,landZ:-Dt*yt,boost:1.1})}}}const Yt=2400,ce=new Float32Array(Yt*3),ue=new Float32Array(Yt*3),oe=new Float32Array(Yt*3),Se=Math.max(1,Ht.length);for(let V=0;V<Yt;V++){const lt=Ht[V%Se]??{x:0,z:12,landX:0,landZ:-1,boost:1},yt=-lt.landZ,wt=lt.landX,Ct=(st(V,9.1)-.5)*2.6,ut=(st(V,15.4)-.4)*1.1;ce[V*3]=lt.x+yt*Ct+lt.landX*ut,ce[V*3+1]=Me+.08+st(V,21.8)*.45,ce[V*3+2]=lt.z+wt*Ct+lt.landZ*ut;const Dt=st(V,28.3)<.72?1:-.45,Y=(1.6+st(V,34.7)*3.8)*Dt*lt.boost,pt=(st(V,41.2)-.5)*2.8;ue[V*3]=lt.landX*Y+yt*pt,ue[V*3+1]=(4.4+Math.pow(st(V,49.6),.72)*5.8)*lt.boost,ue[V*3+2]=lt.landZ*Y+wt*pt,oe[V*3]=st(V,57.3),oe[V*3+1]=.48+st(V,64.9)*.36,oe[V*3+2]=.55+st(V,73.1)*.95}const we=new jt;we.setAttribute("position",new J(ce,3)),we.setAttribute("aVelocity",new J(ue,3)),we.setAttribute("aMeta",new J(oe,3));const Ye={...i,uWaveEnergy:{value:1}},We=new Oe({name:"CoastalWaveRockSplashParticles",transparent:!0,depthWrite:!1,uniforms:Ye,vertexShader:`
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
      ${Xn}
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
    `}),ye=new no(we,We);ye.renderOrder=4,ye.frustumCulled=!1,t.add(ye);const ee=3200,Ve=new jt;Ve.setAttribute("position",new J(new Float32Array([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0]),3)),Ve.setAttribute("uv",new J(new Float32Array([0,0,1,0,1,1,0,1]),2)),Ve.setIndex([0,1,2,0,2,3]);const ge=new i0;ge.index=Ve.index,ge.attributes.position=Ve.attributes.position,ge.attributes.uv=Ve.attributes.uv;const cn=new Float32Array(ee*3),Hn=new Float32Array(ee*2);for(let V=0;V<ee;V++)cn[V*3]=(st(V,3.7)-.5)*92,cn[V*3+1]=(st(V,11.9)-.5)*48,cn[V*3+2]=(st(V,19.3)-.5)*92,Hn[V*2]=st(V,29.1),Hn[V*2+1]=st(V,43.7);ge.setAttribute("aRainOffset",new $a(cn,3)),ge.setAttribute("aRainSeed",new $a(Hn,2)),ge.instanceCount=ee;const an=new P(0,2.5,8),Ti={...i,uCamCenter:{value:an}},Ie=new Oe({name:"NordicPhysicalRainStreaks",transparent:!0,depthWrite:!1,side:en,uniforms:Ti,vertexShader:`
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
      ${Xn}
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
    `}),rn=new ze(ge,Ie);rn.renderOrder=6,rn.frustumCulled=!1,t.add(rn);const hn=900,nn=new Float32Array(hn*3),sn=new Float32Array(hn*2);for(let V=0;V<hn;V++){let lt=0,yt=0,wt=0;V<540?(lt=(st(V,7.1)-.5)*44,wt=-12+(st(V,15.9)-.5)*38,yt=Math.max(Me+.14,Ui(lt,wt)+.04)):(lt=(st(V,23.4)-.5)*110,wt=-16+(st(V,31.8)-.5)*110,yt=Me+.14),nn[V*3]=lt,nn[V*3+1]=yt,nn[V*3+2]=wt,sn[V*2]=st(V,47.2),sn[V*2+1]=st(V,61.5)}const Wn=new jt;Wn.setAttribute("position",new J(nn,3)),Wn.setAttribute("aSplashSeed",new J(sn,2));const ri=new Oe({name:"NordicRaindropSurfaceSplashes",transparent:!0,depthWrite:!1,uniforms:Ti,vertexShader:`
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
      ${Xn}
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
    `}),Wi=new no(Wn,ri);Wi.renderOrder=5,Wi.frustumCulled=!1,t.add(Wi);const Ds=1100,Vi=new Float32Array(Ds*3),Gi=new Float32Array(Ds);for(let V=0;V<Ds;V++)Vi[V*3]=(st(V,31.7)-.5)*76,Vi[V*3+1]=-9.5+st(V,47.3)*32,Vi[V*3+2]=-22+st(V,59.1)*64,Gi[V]=st(V,73.9);const Co=new jt;Co.setAttribute("position",new J(Vi,3)),Co.setAttribute("aSeed",new J(Gi,1));const Ns={uTime:{value:0},uColor:i.uSunColor,uWindStrength:i.uWindStrength,uWindDir:i.uWindDir,uLightningFlash:i.uLightningFlash},cr=new Oe({transparent:!0,depthWrite:!1,blending:Xo,uniforms:Ns,vertexShader:`
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
    `}),Us=new no(Co,cr);return Us.renderOrder=5,Us.frustumCulled=!1,t.add(Us),{group:t,ocean:Lt,update(V,lt){At.uTime.value=V,Ns.uTime.value=V,Lt.update(V);const yt=Lt.params;Ye.uWaveEnergy.value=.45+yt.waveAmplitude*(.55+.45*yt.seaChoppiness),lt&&an.copy(lt);const wt=i.uRainIntensity.value>.005;rn.visible=wt,Wi.visible=wt}}}const Ke={neckArch:.16,neckYaw:.08,headPitch:-.04,headYaw:.14,headRoll:-.08,earPerk:.76,earAsymmetry:.06,cheekNubFlare:.5,eyeYaw:.06,eyePitch:.02,pupilDilation:.76,blink:0,squint:0,jawOpen:0,teethExtension:0,tongueExtend:.12,tongueCurl:.08,wingUnfurl:.46,wingFlap:.08,wingSweep:-.05,wingCamber:.3,wingWristFold:0,wingTipLag:0,pelvicFinFlare:.9,dorsalSpineSplit:.22,spineArch:.08,spineTwist:.02,forelegStance:.1,hindlegStance:.06,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:.2,tailPitch:.26,tailCurl:.16,tailWaveAmp:0,tailWavePhase:0,rightTailFinFlare:.24,leftProstheticFinFlare:.24,autoSyncProstheticTail:!0,subtleBreathing:!0,alphaGlow:.08,biolumGlow:0,lightningCloak:0},sd=[{id:"hero-perch",label:"Hero Perch",subtitle:"Noble Alpha Sentinel",patch:{...Ke}},{id:"gummy-smile",label:"Gummy Grin",subtitle:"Toothless Happy Smile",patch:{...Ke,headYaw:.22,headPitch:-.06,headRoll:-.24,earPerk:.96,pupilDilation:.94,squint:.22,jawOpen:.34,teethExtension:0,tongueExtend:.58,tongueCurl:.26,tailYaw:.36}},{id:"courtship-cape",label:"Courtship Cape",subtitle:"Beach Wing-Display Dance",patch:{...Ke,forelegStance:.52,neckArch:.48,headYaw:.28,headPitch:.08,headRoll:-.18,earPerk:1,pupilDilation:.96,jawOpen:.26,teethExtension:0,tongueExtend:.42,wingUnfurl:.96,wingFlap:.88,wingSweep:.44,wingCamber:.68,dorsalSpineSplit:.85}},{id:"curious-tilt",label:"Curious Tilt",subtitle:"Asymmetric Ear-Perk",patch:{...Ke,headRoll:-.62,headYaw:.14,headPitch:.08,earPerk:.92,earAsymmetry:-.45,pupilDilation:.92,jawOpen:.05,teethExtension:0}},{id:"alpha-roar",label:"Alpha Roar",subtitle:"Split Spines & Cyan Fire",patch:{...Ke,forelegStance:-.48,spineArch:.36,neckArch:-.22,headPitch:-.22,earPerk:.08,squint:.42,pupilDilation:.08,jawOpen:.88,teethExtension:1,tongueExtend:.52,tongueCurl:.46,wingUnfurl:.92,wingFlap:.46,wingSweep:.28,dorsalSpineSplit:1,alphaGlow:1,biolumGlow:.65,lightningCloak:.35}},{id:"lightning-storm",label:"Storm Skrill",subtitle:"Arc-Plasma Overload",patch:{...Ke,forelegStance:-.35,wingUnfurl:.98,wingFlap:.62,wingCamber:.72,dorsalSpineSplit:1,pupilDilation:.16,jawOpen:.54,teethExtension:1,alphaGlow:1,biolumGlow:.92,lightningCloak:1}}];function Js(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const Rx=new P(-.16,.985,.06).normalize(),Lx=new P(.16,.985,.06).normalize(),od=new P().crossVectors(Rx,ta).normalize(),Ix=new P().crossVectors(ta,od).normalize(),ad=new P().crossVectors(Lx,ea).normalize(),Fx=new P().crossVectors(ea,ad).normalize();class Dx{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new Bn;tmpQuat=new on;tmpQuatB=new on;tmpVecA=new P;tmpVecB=new P;tmpVecC=new P;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;prevHeadRoll=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...Ke,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,Ke),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.autoSyncProstheticTail&&(t.rightTailFinFlare!==void 0?this.state.leftProstheticFinFlare=t.rightTailFinFlare:t.leftProstheticFinFlare!==void 0?this.state.rightTailFinFlare=t.leftProstheticFinFlare:t.autoSyncProstheticTail===!0&&(this.state.leftProstheticFinFlare=this.state.rightTailFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0};const e=4.6,n=t%e,s=Math.floor(t/e);let o=0;n>3.85&&n<4.03?o=Math.sin((n-3.85)/.18*Math.PI):s%3===1&&n>4.12&&n<4.29&&(o=Math.sin((n-4.12)/.17*Math.PI));const a=(t+1.3)%6.2,r=a<.22?Math.sin(a/.22*Math.PI)*.085:0,l=(t+3.9)%7.4,c=l<.2?-Math.sin(l/.2*Math.PI)*.075:0,h=Math.sin(t*.72)*.032+Math.sin(t*1.95+1.1)*.014,u=Math.cos(t*.58+.4)*.022,d=Math.sin(t*1.15)*.025;return{autoBlink:o,earTwitchL:r,earTwitchR:c,gazeMicroX:h,gazeMicroY:u,pupilPulse:d}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const m=new de().copy(this.asset.rootGroup.matrixWorld).invert(),v=new de().multiplyMatrices(m,c.parent.matrixWorld),g=new P().setFromMatrixPosition(new de().multiplyMatrices(v,new de().makeTranslation(c.position.x,c.position.y,c.position.z))),f=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),_=l.bindWorldPositions.get(n),M=new P().subVectors(p,f),x=new P().subVectors(_,p),b=M.length(),y=x.length(),A=_.clone();a&&(A.add(a),A.y=Math.max(_.y,A.y));const T=new P().subVectors(A,g),S=T.length(),w=(b+y)*.968,C=Math.abs(b-y)+.085,E=X.clamp(S,C,w),R=T.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),I=X.clamp((b*b+E*E-y*y)/(2*b*E),-1,1),k=Math.sqrt(Math.max(0,1-I*I)),D=g.clone().addScaledVector(R,b*I).addScaledVector(L,b*k),U=g.clone().addScaledVector(R,E),O=new P().subVectors(D,g).normalize(),F=new P().subVectors(U,D).normalize(),Z=new on().setFromUnitVectors(M.clone().normalize(),O),G=new on().setFromUnitVectors(x.clone().normalize(),F),$=new on().setFromRotationMatrix(v);c.quaternion.copy($).invert().multiply(Z),h.quaternion.copy(Z).invert().multiply(G),u.quaternion.copy(G).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;const o=68,a=11.5,r=X.clamp(-n*.055,-.28,.28),l=X.clamp(-s*.055,-.28,.28);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=X.clamp(e.airborneFactor,0,1),s=this.sampleLivingIdleMicros(t),o=e.subtleBreathing?Math.sin(t*1.55)*.8+Math.sin(t*3.1)*.2:0,a=e.subtleBreathing?Math.sin(t*1.15-.5)*.02:0,r=Js(.02,.55,Math.abs(e.legFlightTuck))*(1-n),l=Math.max(n,r),c=1-l,h=e.forelegStance>=0?e.forelegStance*.055:e.forelegStance*.275,u=e.hindlegStance>=0?e.hindlegStance*.048:e.hindlegStance*.245,d=.52*h+.48*u,m=X.clamp((u-h)*.44,-.22,.24),v=X.clamp(e.limbStride,-1,1)*.045*c,g=r*.34;this.setBonePose("root",m*c,v,0,"XYZ",0,d*c+g+o*.004,0);const f=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+f,-e.spineTwist*.05-v*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+o*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+o*.008,e.spineTwist*.07,0),this.setBonePose("chest",-m*.32*c+o*.01-f*.6,e.spineTwist*.07+v*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const p=X.clamp(e.limbStride,-1,1),_=Math.max(0,-e.forelegStance),M=Math.max(0,-e.hindlegStance);for(const Q of["L","R"]){const it=Q==="L"?1:-1,j=this.asset.rig.boneMap.get(`scapula_${Q}`);if(this.setBonePose(`scapula_${Q}`,0,0,0),j.updateMatrixWorld(!0),l<.999){const tt=it*p*.23,ft=-it*p*.22,et=Math.max(0,it*p)*Math.sin(Math.abs(p)*Math.PI)*.042,z=Math.max(0,-it*p)*Math.sin(Math.abs(p)*Math.PI)*.038,xt=new P(it*_*.055,et,tt+_*.045),gt=new P(it*M*.05,z,ft-M*.04);this.asset.rootGroup.updateMatrixWorld(!1);const Et=new de().copy(this.asset.rootGroup.matrixWorld).invert(),Tt=this.asset.rig.boneMap.get(`shoulder_${Q}`);Tt.position.copy(this.restPos.get(`shoulder_${Q}`)),Tt.updateMatrixWorld(!0);const Ft=this.tmpVecC.setFromMatrixPosition(Tt.matrixWorld).applyMatrix4(Et),ht=this.asset.rig.bindWorldPositions.get(`wrist_${Q}`).clone().add(xt),H=Ft.distanceTo(ht)-.675;H>0&&(this.setBonePose(`scapula_${Q}`,0,0,0,"XYZ",0,-H*1.08*c,0),j.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${Q}`,`elbow_${Q}`,`wrist_${Q}`,`forepaw_${Q}`,this.tmpVecA.set(it*(.2+.16*_),-.08+.18*_,-1).normalize(),xt,et*2.2),this.solvePlantedLimbIK(`hip_${Q}`,`knee_${Q}`,`ankle_${Q}`,`hindpaw_${Q}`,this.tmpVecB.set(it*(.2+.14*M),.14+.16*M,1).normalize(),gt,z*2)}if(l>.001){const tt=X.clamp(e.legFlightTuck,-1,1),ft=e.wingFlap*.082*l,et=Math.sin(t*2.05+(Q==="L"?0:1.25))*.052*l,z=Math.cos(t*1.58+(Q==="L"?.7:2.2))*.046*l,xt=(tt>=0?.86*tt:-.44*-tt)+ft*.65+et*.5,gt=tt>=0?-it*.06*tt:0,Et=(tt>=0?it*.09*tt:it*.05*-tt)+it*z*.35,Tt=(tt>=0?.34*tt:.28*-tt)-ft*.55+z*.65,Ft=(tt>=0?.4*tt:.2*-tt)+et*.7,ht=(tt>=0?.36*tt:-.1*-tt)+z*.55,H=(tt>=0?1.16*tt:-.48*-tt)+ft*.55+z*.55,N=(tt>=0?-it*.05*tt:0)+it*et*.25,K=(tt>=0?it*.07*tt:it*.05*-tt)+it*et*.3,dt=(tt>=0?-.66*tt:.34*-tt)-ft*.5-et*.65,bt=(tt>=0?.78*tt:-.16*-tt)+ft*.45+z*.75,_t=(tt>=0?.62*tt:.16*-tt)+et*.6,zt=(Pt,Ut,se,Rt)=>{const Wt=this.asset.rig.boneMap.get(Pt);this.tmpEuler.set(Ut,se,Rt,"XYZ"),this.tmpQuat.copy(this.restQuat.get(Pt)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),l>=.999?(Wt.position.copy(this.restPos.get(Pt)),Wt.quaternion.copy(this.tmpQuat)):Wt.quaternion.slerp(this.tmpQuat,l)};zt(`shoulder_${Q}`,xt,gt,Et),zt(`elbow_${Q}`,Tt,0,0),zt(`wrist_${Q}`,Ft,0,0),zt(`forepaw_${Q}`,ht,0,0),zt(`hip_${Q}`,H,N,K),zt(`knee_${Q}`,dt,0,0),zt(`ankle_${Q}`,bt,0,0),zt(`hindpaw_${Q}`,_t,0,0)}}const x=Js(.28,.85,e.jawOpen),b=-e.neckArch*.12-o*.009-x*.035,y=e.neckYaw*.13;this.setBonePose("neck_1",b+e.headPitch*.04,y+e.headYaw*.05,e.headRoll*.04,"YXZ"),this.setBonePose("neck_2",b+e.headPitch*.07,y+e.headYaw*.09,e.headRoll*.07,"YXZ"),this.setBonePose("neck_3",b*.9+e.headPitch*.1,y+e.headYaw*.14,e.headRoll*.11,"YXZ"),this.setBonePose("neck_4",b*.8+e.headPitch*.14,y*.85+e.headYaw*.19,e.headRoll*.15,"YXZ"),this.setBonePose("head",e.headPitch*.36+o*.01-x*.05,e.headYaw*.46,e.headRoll*.36,"YXZ");const A=X.clamp(e.earPerk-x*.28,0,1),T=(A-.5)*.72,S=e.headRoll*.18;for(const Q of["L","R"]){const it=Q==="L"?1:-1,j=Q==="L"?s.earTwitchL:s.earTwitchR,tt=it*(e.earAsymmetry*.28+S)+j,ft=T+tt+this.earLagPitch*.65,et=(1-A)*.36-it*this.earLagYaw*.55;this.setBonePose(`ear_${Q}_1`,ft*.65,-it*et,it*ft*.25,"YXZ"),this.setBonePose(`ear_${Q}_2`,ft*.36+this.earLagPitch*.35,-it*et*.35,0,"YXZ"),this.setBonePose(`ear_${Q}_3`,ft*.24+this.earLagPitch*.25,0,0,"YXZ");const xt=(X.clamp(e.cheekNubFlare+x*.22,0,1)-.5)*.44;this.setBonePose(`cheekUpper_${Q}_1`,xt*.3,-it*(xt*.55+this.earLagYaw*.25),0),this.setBonePose(`cheekLower_${Q}_1`,xt*.2,-it*(xt*.45+this.earLagYaw*.2),0)}const w=X.clamp(e.eyeYaw+s.gazeMicroX,-1,1),C=X.clamp(e.eyePitch+s.gazeMicroY,-1,1),E=Math.max(e.blink,s.autoBlink*(1-e.blink)),R=X.clamp(e.squint+x*.26,0,1);for(const Q of["L","R"]){const it=Q==="L"?od:ad,j=Q==="L"?Ix:Fx;this.tmpQuat.setFromAxisAngle(j,w*.34),this.tmpQuatB.setFromAxisAngle(it,-C*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${Q}`,this.tmpQuat);const tt=C>0?-C*.14:-C*.22,ft=C>0?C*.12:C*.08,et=X.clamp(Math.max(E,R*.52)+tt*(1-E),-.14,1),z=X.clamp(Math.max(E,R*.6)+ft*(1-E),-.1,1);this.tmpQuat.setFromAxisAngle(it,et*.72),this.setBoneAxisQuat(`eyelidUpper_${Q}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(it,-z*.64),this.setBoneAxisQuat(`eyelidLower_${Q}`,this.tmpQuat)}const L=X.clamp(e.pupilDilation+s.pupilPulse-x*.25,0,1);this.asset.materials.eyeMaterials.uniforms.uPupilDilation.value=L,this.asset.materials.eyeMaterials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uTime.value=t,this.asset.materials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uBiolumGlow.value=e.biolumGlow,this.asset.materials.uniforms.uLightningCloak.value=e.lightningCloak,this.setBonePose("jaw",e.jawOpen*.66,0,0);const I=.28+.72*Js(0,.14,e.jawOpen),D=1-e.teethExtension*I;this.setBonePose("teethUpper",0,0,0,"XYZ",0,D*.025,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-D*.023,0);const U=Js(.06,.48,e.jawOpen),O=e.tongueExtend*.044*U;if(e.tongueCurl>=0){const Q=-e.tongueCurl*(.018+.2*U);this.setBonePose("tongue_1",Q*.35,0,0,"XYZ",0,0,O),this.setBonePose("tongue_2",Q*.65,0,0),this.setBonePose("tongue_3",Q*.95,0,0),this.setBonePose("tongue_4",Q*1.15,0,0)}else{const Q=U*Js(.2,.95,e.tongueExtend),it=-e.tongueCurl*Q;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,O),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",it*.13,0,0),this.setBonePose("tongue_4",it*.2,0,0)}const F=X.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),Z=X.lerp(.11,.74,l);for(const Q of["L","R"]){const it=Q==="L"?1:-1,j=e.wingFlap*(.25+.75*e.wingUnfurl),tt=it*(j>=0?j*.74:j*Z),ft=j<0?j*X.lerp(.04,.26,n)*e.wingUnfurl:0,et=it*e.wingSweep*.44,z=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${Q}`,.05*F,it*.12*F,tt*.18,"YXZ"),this.setBonePose(`wingShoulder_${Q}`,e.wingCamber*.09,it*.82*F+et,tt-it*.22*F,"YXZ"),this.setBonePose(`wingElbow_${Q}`,0,-it*(1.42*F+z*.45),it*.86*F+tt*.22+it*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${Q}`,-.35*F-e.wingCamber*.18,it*(1.32*F+z*.55)+et*.35,it*.12*F+it*ft*.3+it*e.wingTipLag*.26,"YXZ");for(let gt=1;gt<=6;gt++){const Et=(gt-1)/5,Tt=it*(-.38+Et*.58)*F,Ft=-e.wingCamber*(.14+.18*(1-Et))-.1*F,ht=e.wingTipLag*(.18+.26*Et),H=j>=0?-j*.22:-j*X.lerp(.06*Math.pow(Math.max(0,(Et-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${Q}_${gt}_a`,Ft,Tt,it*(H*.4+ht*.45),"YXZ"),this.setBonePose(`wingFinger_${Q}_${gt}_b`,Ft*.5,Tt*.25,it*(H*.7+ht*.75),"YXZ")}const xt=1-e.pelvicFinFlare;for(let gt=1;gt<=3;gt++)this.setBonePose(`pelvicFin_${Q}_${gt}`,0,0,-it*xt*1.18,"XYZ")}for(const Q of this.asset.dorsalSpineMeshes)Q.morphTargetInfluences&&Q.morphTargetInfluences.length>0&&(Q.morphTargetInfluences[0]=e.dorsalSpineSplit);const G=e.autoSyncProstheticTail?e.rightTailFinFlare:e.leftProstheticFinFlare,$=Math.min(e.rightTailFinFlare,G),q=$<0?Math.sin(Math.abs($)*1.38)*.53:.02;for(let Q=1;Q<=10;Q++){const it=Q/10,j=Q>=9,tt=j?0:e.tailYaw*.13+e.tailCurl*.18*Math.pow(it,1.4)+a*it,ft=j?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-Q*.48)*.085*(.4+.6*it);let et=j?0:e.tailPitch*.088*(.45+it)+ft;if(!j&&n<.85&&Q>=2&&Q<=8){const z=Math.max(0,(q-.05)*.135)*(1-n);et<z&&(et=X.lerp(et,z,Js(1,5,Q)))}if(this.setBonePose(`tail_${Q}`,et,tt,0,"YXZ"),n<.85){const z=this.asset.rig.boneMap.get(`tail_${Q}`);z.parent.updateMatrixWorld(!0),z.updateMatrixWorld(!0);const xt=this.tmpVecC.setFromMatrixPosition(z.matrixWorld),Et=Ui(xt.x,xt.z)+(Q>=8?.055+q:.065);if(xt.y<Et&&Q>1){const Tt=z.parent,Ft=z.position.length(),ht=Math.min(.45,(Et-xt.y)/Math.max(.15,Ft))*(1-n);this.tmpEuler.set(ht,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),Tt.quaternion.multiply(this.tmpQuat),Tt.updateMatrixWorld(!0)}}}const W=1.38,nt=e.rightTailFinFlare*W,ot=G*W;this.setBonePose("tailFinHinge_R",0,0,-nt,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,ot,"XYZ");for(let Q=1;Q<=5;Q++)this.setBonePose(`tailFin_R_${Q}`,0,0,0),this.setBonePose(`tailFin_L_${Q}`,0,0,0);this.setBonePose("prostheticCollar",0,0,ot*.22),this.setBonePose("prostheticRod",0,0,0),this.asset.rig.rootBone.updateMatrixWorld(!0)}}function rd(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Hh(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Rs(i){const t=Math.max(0,Math.min(1,(i-1.44)/.625)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.78)/.22),2))),n=.054*Hh(t,.36,.23),s=-.046*rd(.5,.88,t),o=.013*Hh(t,.77,.13);return(.204+n+s+o)*e}function rs(i){const t=Math.max(0,Math.min(1,(i-1.55)/.5149999999999999)),e=.022*Math.pow(1-rd(0,.44,t),1.55),n=-.008*Math.sin(t*Math.PI);return 1.482+e+n}const ld=[{rootX:.018,rootY:.116,rootZ:-3.34,tipX:.34,tipY:.126,tipZ:-3.32},{rootX:.018,rootY:.116,rootZ:-3.5,tipX:.45,tipY:.13,tipZ:-3.52},{rootX:.018,rootY:.116,rootZ:-3.66,tipX:.44,tipY:.13,tipZ:-3.74},{rootX:.018,rootY:.116,rootZ:-3.82,tipX:.34,tipY:.125,tipZ:-3.96},{rootX:.018,rootY:.116,rootZ:-3.97,tipX:.18,tipY:.12,tipZ:-4.14}],cd=[{parentBone:"tail_1",rootX:.155,rootY:.7,rootZ:-.78,tipX:.37,tipY:.68,tipZ:-.92},{parentBone:"tail_2",rootX:.13,rootY:.62,rootZ:-1.02,tipX:.42,tipY:.59,tipZ:-1.19},{parentBone:"tail_2",rootX:.105,rootY:.55,rootZ:-1.24,tipX:.31,tipY:.52,tipZ:-1.42}],na=new P(.415,.035,.909).normalize(),ia=new P(-.415,.035,.909).normalize(),Ka=.075;function hd(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.292:.274),o=t?.935:-.51,a=.036,r=t?.074:.069,l=[],c=[-.84,-.28,.28,.84];for(let h=0;h<4;h++){const u=c[h]+e*.05,d=h===1||h===2,m=(t?.106:.098)*(d?1:.86),v=(t?.054:.05)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.032,dirX:Math.sin(u)*.9,dirZ:Math.cos(u),toeLength:m,baseRadius:d?.037:.033,tipRadius:d?.024:.021,clawLength:v})}return l}function Nx(){const i=[{name:"root",parent:null,worldPos:[0,.79,.11]},{name:"pelvis",parent:"root",worldPos:[0,.77,-.5]},{name:"spine_1",parent:"root",worldPos:[0,.78,.13]},{name:"spine_2",parent:"spine_1",worldPos:[0,.84,.46]},{name:"chest",parent:"spine_2",worldPos:[0,.91,.79]},{name:"neck_1",parent:"chest",worldPos:[0,1.04,.99]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.19,1.14]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.35,1.28]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.47,1.4]},{name:"head",parent:"neck_4",worldPos:[0,1.535,1.51]},{name:"eye_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eye_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidUpper_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidLower_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidLower_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"teethUpper",parent:"head",worldPos:[0,1.495,1.8]},{name:"jaw",parent:"head",worldPos:[0,1.49,1.55]},{name:"teethLower",parent:"jaw",worldPos:[0,1.472,1.8]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.472,1.62]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.472,1.72]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.472,1.82]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.47,1.91]},{name:"ear_L_1",parent:"head",worldPos:[.118,1.665,1.48]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.142,1.748,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.156,1.815,1.29]},{name:"ear_R_1",parent:"head",worldPos:[-.118,1.665,1.48]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.142,1.748,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.156,1.815,1.29]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.222,1.568,1.49]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.268,1.592,1.4]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.222,1.568,1.49]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.268,1.592,1.4]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.2,.87,.81]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.232,.75,.83]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.278,.435,.74]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.288,.142,.87]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.292,.04,.965]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.192,.71,-.5]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.256,.425,-.32]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.27,.215,-.61]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.274,.04,-.475]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.21,.96,.69]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.34,1,.67]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.88,1.05,.46]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.56,1.11,.86]}),[{mid:[n*1.48,1.08,.16],tip:[n*1.4,.99,-.6]},{mid:[n*1.84,1.09,.22],tip:[n*2.04,1,-.56]},{mid:[n*2.18,1.11,.33],tip:[n*2.62,1.02,-.4]},{mid:[n*2.48,1.13,.48],tip:[n*3.14,1.05,-.14]},{mid:[n*2.78,1.15,.68],tip:[n*3.54,1.08,.22]},{mid:[n*2.94,1.17,.86],tip:[n*3.9,1.12,.7]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.72,-.76],[0,.63,-1.08],[0,.5,-1.43],[0,.36,-1.8],[0,.24,-2.18],[0,.16,-2.56],[0,.12,-2.94],[0,.116,-3.3],[0,.116,-3.66],[0,.116,-4.06]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;cd.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.02,.116,-3.65]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.02,.116,-3.65]});for(const e of["L","R"]){const n=e==="L"?1:-1;ld.forEach((s,o)=>{i.push({name:`tailFin_${e}_${o+1}`,parent:`tailFinHinge_${e}`,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i}function Ux(){const i=Nx(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new nc;c.name=l.name;const h=new P(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new sr(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}const Ze={neckArch:.24,neckYaw:-.1,headPitch:-.02,headYaw:-.18,headRoll:.16,earPerk:.82,earAsymmetry:.1,cheekNubFlare:.52,eyeYaw:-.08,eyePitch:.04,pupilDilation:.84,blink:0,squint:.08,jawOpen:0,teethExtension:0,tongueExtend:.1,tongueCurl:.05,wingUnfurl:.36,wingFlap:.06,wingSweep:-.08,wingCamber:.28,wingWristFold:0,wingTipLag:0,coyWingVeil:0,pelvicFinFlare:.88,dorsalSailFlex:.24,spineArch:.12,spineTwist:-.04,forelegStance:.14,hindlegStance:.08,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:-.26,tailPitch:.24,tailCurl:-.24,tailWaveAmp:0,tailWavePhase:0,rightHeartFinFlare:.18,leftHeartFinFlare:.18,syncHeartTailFlukes:!0,subtleBreathing:!0,iridescentShimmer:.78,pastelTint:.78,radiantGlow:.34,biolumGlow:0,plasmaGlow:.04,thermalCloak:0},ud=[{id:"serene-mate",label:"Serene Mate",subtitle:"Sweet Gaze & Heart Tail",patch:{...Ze}},{id:"curious-cat",label:"Curious Tilt",subtitle:"Adorable Head-Roll & Big Eyes",patch:{...Ze,headRoll:.68,headPitch:.1,headYaw:-.06,earPerk:.98,earAsymmetry:.42,pupilDilation:.96,squint:0,jawOpen:.06,teethExtension:0,coyWingVeil:0,thermalCloak:0,plasmaGlow:.08}},{id:"happy-purr",label:"Happy Purr",subtitle:"Blissful Feline Smile",patch:{...Ze,neckArch:.42,neckYaw:-.22,headYaw:-.28,headPitch:-.1,headRoll:.28,earPerk:.66,squint:.68,blink:.22,pupilDilation:.9,jawOpen:.14,teethExtension:0,tongueExtend:.35,tailYaw:-.45,tailCurl:-.48,rightHeartFinFlare:.04,leftHeartFinFlare:.04,coyWingVeil:0,thermalCloak:0,iridescentShimmer:.95}},{id:"coy-wing-veil",label:"Coy Wing Peek",subtitle:"Shy Wing-Curtain Pose",patch:{...Ze,headYaw:-.26,headPitch:-.12,headRoll:.34,eyeYaw:.22,eyePitch:.14,pupilDilation:.88,earPerk:.58,coyWingVeil:.92,wingUnfurl:.52,thermalCloak:0}},{id:"hidden-world-biolum",label:"Hidden World Glow",subtitle:"Neon Rose & Cyan Filigree",patch:{...Ze,wingUnfurl:.78,wingFlap:.22,neckArch:.34,headRoll:.22,pupilDilation:.94,iridescentShimmer:.96,radiantGlow:.64,biolumGlow:.96,plasmaGlow:.42,thermalCloak:0}},{id:"mirror-cloak",label:"Mirror Cloak",subtitle:"Plasma Silicate Stealth",patch:{...Ze,wingUnfurl:.72,wingFlap:.24,neckArch:.3,headPitch:.12,pupilDilation:.62,coyWingVeil:0,plasmaGlow:.78,iridescentShimmer:1,thermalCloak:.86}},{id:"strike-hiss",label:"Strike Hiss",subtitle:"Fangs & Orchid Plasma",patch:{...Ze,forelegStance:-.55,spineArch:.42,neckArch:-.18,headPitch:-.14,headRoll:-.08,earPerk:.06,squint:.48,pupilDilation:.06,jawOpen:.76,teethExtension:1,tongueExtend:.48,tongueCurl:.45,wingUnfurl:.84,wingFlap:.38,wingSweep:.32,coyWingVeil:0,dorsalSailFlex:1,plasmaGlow:.92,thermalCloak:0}}];function to(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const kx=new P(-.19,.98,.06).normalize(),zx=new P(.19,.98,.06).normalize(),dd=new P().crossVectors(kx,na).normalize(),Bx=new P().crossVectors(na,dd).normalize(),pd=new P().crossVectors(zx,ia).normalize(),Ox=new P().crossVectors(ia,pd).normalize();class Hx{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new Bn;tmpQuat=new on;tmpQuatB=new on;tmpVecA=new P;tmpVecB=new P;tmpVecC=new P;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...Ze,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,Ze),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.syncHeartTailFlukes&&(t.rightHeartFinFlare!==void 0?this.state.leftHeartFinFlare=t.rightHeartFinFlare:t.leftHeartFinFlare!==void 0?this.state.rightHeartFinFlare=t.leftHeartFinFlare:t.syncHeartTailFlukes===!0&&(this.state.leftHeartFinFlare=this.state.rightHeartFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingFelineIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0,felineHeadMicroRoll:0};const e=(t+2.15)%4.35;let n=0;e<.16?n=Math.sin(e/.16*Math.PI):e>.25&&e<.4&&Math.floor((t+2.15)/4.35)%3===1&&(n=Math.sin((e-.25)/.15*Math.PI));const s=(t+.8)%5.6,o=s<.2?Math.sin(s/.2*Math.PI)*.095:0,a=(t+3.2)%6.8,r=a<.18?-Math.sin(a/.18*Math.PI)*.085:0,l=Math.sin(t*.68+1.4)*.03+Math.sin(t*1.85)*.012,c=Math.cos(t*.54+2.1)*.022,h=Math.sin(t*1.25+.8)*.028,u=Math.sin(t*.62+.7)*.026;return{autoBlink:n,earTwitchL:o,earTwitchR:r,gazeMicroX:l,gazeMicroY:c,pupilPulse:h,felineHeadMicroRoll:u}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const m=new de().copy(this.asset.rootGroup.matrixWorld).invert(),v=new de().multiplyMatrices(m,c.parent.matrixWorld),g=new P().setFromMatrixPosition(new de().multiplyMatrices(v,new de().makeTranslation(c.position.x,c.position.y,c.position.z))),f=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),_=l.bindWorldPositions.get(n),M=new P().subVectors(p,f),x=new P().subVectors(_,p),b=M.length(),y=x.length(),A=_.clone();a&&(A.add(a),A.y=Math.max(_.y,A.y));const T=new P().subVectors(A,g),S=T.length(),w=(b+y)*.968,C=Math.abs(b-y)+.08,E=X.clamp(S,C,w),R=T.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),I=X.clamp((b*b+E*E-y*y)/(2*b*E),-1,1),k=Math.sqrt(Math.max(0,1-I*I)),D=g.clone().addScaledVector(R,b*I).addScaledVector(L,b*k),U=g.clone().addScaledVector(R,E),O=new P().subVectors(D,g).normalize(),F=new P().subVectors(U,D).normalize(),Z=new on().setFromUnitVectors(M.clone().normalize(),O),G=new on().setFromUnitVectors(x.clone().normalize(),F),$=new on().setFromRotationMatrix(v);c.quaternion.copy($).invert().multiply(Z),h.quaternion.copy(Z).invert().multiply(G),u.quaternion.copy(G).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;const o=64,a=10.8,r=X.clamp(-n*.06,-.3,.3),l=X.clamp(-s*.06,-.3,.3);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=X.clamp(e.airborneFactor,0,1),s=this.sampleLivingFelineIdleMicros(t),o=e.subtleBreathing&&e.squint>.35?Math.sin(t*24)*.08*e.squint:0,a=e.subtleBreathing?Math.sin(t*1.68+.9)*.8+Math.sin(t*3.36+.9)*.2+o:0,r=e.subtleBreathing?Math.sin(t*1.28+1.2)*.026:0,l=to(.02,.55,Math.abs(e.legFlightTuck))*(1-n),c=Math.max(n,l),h=1-c,u=e.forelegStance>=0?e.forelegStance*.05:e.forelegStance*.255,d=e.hindlegStance>=0?e.hindlegStance*.044:e.hindlegStance*.23,m=.52*u+.48*d,v=X.clamp((d-u)*.44,-.22,.24),g=X.clamp(e.limbStride,-1,1)*.045*h,f=l*.34;this.setBonePose("root",v*h,g,0,"XYZ",0,m*h+f+a*.004,0);const p=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+p,-e.spineTwist*.05-g*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+a*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+a*.008,e.spineTwist*.07,0),this.setBonePose("chest",-v*.32*h+a*.01-p*.6,e.spineTwist*.07+g*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const _=X.clamp(e.limbStride,-1,1),M=Math.max(0,-e.forelegStance),x=Math.max(0,-e.hindlegStance);for(const j of["L","R"]){const tt=j==="L"?1:-1,ft=this.asset.rig.boneMap.get(`scapula_${j}`);if(this.setBonePose(`scapula_${j}`,0,0,0),ft.updateMatrixWorld(!0),c<.999){const et=tt*_*.21,z=-tt*_*.2,xt=Math.max(0,tt*_)*Math.sin(Math.abs(_)*Math.PI)*.038,gt=Math.max(0,-tt*_)*Math.sin(Math.abs(_)*Math.PI)*.034,Et=new P(tt*M*.05,xt,et+M*.04),Tt=new P(tt*x*.045,gt,z-x*.036);this.asset.rootGroup.updateMatrixWorld(!1);const Ft=new de().copy(this.asset.rootGroup.matrixWorld).invert(),ht=this.asset.rig.boneMap.get(`shoulder_${j}`);ht.position.copy(this.restPos.get(`shoulder_${j}`)),ht.updateMatrixWorld(!0);const H=this.tmpVecC.setFromMatrixPosition(ht.matrixWorld).applyMatrix4(Ft),N=this.asset.rig.bindWorldPositions.get(`wrist_${j}`).clone().add(Et),K=H.distanceTo(N)-.615;K>0&&(this.setBonePose(`scapula_${j}`,0,0,0,"XYZ",0,-K*1.08*h,0),ft.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${j}`,`elbow_${j}`,`wrist_${j}`,`forepaw_${j}`,this.tmpVecA.set(tt*(.2+.16*M),-.08+.18*M,-1).normalize(),Et,xt*2.2),this.solvePlantedLimbIK(`hip_${j}`,`knee_${j}`,`ankle_${j}`,`hindpaw_${j}`,this.tmpVecB.set(tt*(.2+.14*x),.14+.16*x,1).normalize(),Tt,gt*2)}if(c>.001){const et=X.clamp(e.legFlightTuck,-1,1),z=e.wingFlap*.075*c,xt=Math.sin(t*2.15+(j==="L"?0:1.15))*.048*c,gt=Math.cos(t*1.65+(j==="L"?.6:2.1))*.042*c,Et=(et>=0?.88*et:-.44*-et)+z*.65+xt*.5,Tt=et>=0?-tt*.06*et:0,Ft=(et>=0?tt*.09*et:tt*.05*-et)+tt*gt*.35,ht=(et>=0?.36*et:.28*-et)-z*.55+gt*.65,H=(et>=0?.42*et:.2*-et)+xt*.7,N=(et>=0?.38*et:-.1*-et)+gt*.55,K=(et>=0?1.18*et:-.48*-et)+z*.55+gt*.55,dt=(et>=0?-tt*.05*et:0)+tt*xt*.25,bt=(et>=0?tt*.07*et:tt*.05*-et)+tt*xt*.3,_t=(et>=0?-.68*et:.34*-et)-z*.5-xt*.65,zt=(et>=0?.82*et:-.16*-et)+z*.45+gt*.75,Pt=(et>=0?.64*et:.16*-et)+xt*.6,Ut=(se,Rt,Wt,ie)=>{const It=this.asset.rig.boneMap.get(se);this.tmpEuler.set(Rt,Wt,ie,"XYZ"),this.tmpQuat.copy(this.restQuat.get(se)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),c>=.999?(It.position.copy(this.restPos.get(se)),It.quaternion.copy(this.tmpQuat)):It.quaternion.slerp(this.tmpQuat,c)};Ut(`shoulder_${j}`,Et,Tt,Ft),Ut(`elbow_${j}`,ht,0,0),Ut(`wrist_${j}`,H,0,0),Ut(`forepaw_${j}`,N,0,0),Ut(`hip_${j}`,K,dt,bt),Ut(`knee_${j}`,_t,0,0),Ut(`ankle_${j}`,zt,0,0),Ut(`hindpaw_${j}`,Pt,0,0)}}const b=to(.32,.85,e.jawOpen),y=e.headRoll+s.felineHeadMicroRoll*(1-n),A=-e.neckArch*.12-a*.009-b*.032,T=e.neckYaw*.14;this.setBonePose("neck_1",A+e.headPitch*.04,T+e.headYaw*.05,y*.05,"YXZ"),this.setBonePose("neck_2",A+e.headPitch*.07,T+e.headYaw*.09,y*.08,"YXZ"),this.setBonePose("neck_3",A*.9+e.headPitch*.11,T+e.headYaw*.14,y*.12,"YXZ"),this.setBonePose("neck_4",A*.8+e.headPitch*.15,T*.85+e.headYaw*.19,y*.16,"YXZ"),this.setBonePose("head",e.headPitch*.36+a*.01-b*.045,e.headYaw*.46,y*.4,"YXZ");const S=X.clamp(e.earPerk-b*.32,0,1),w=(S-.5)*.68,C=y*.2;for(const j of["L","R"]){const tt=j==="L"?1:-1,ft=j==="L"?s.earTwitchL:s.earTwitchR,et=tt*(e.earAsymmetry*.28+C)+ft,z=w+et+this.earLagPitch*.65,xt=(1-S)*.32-tt*this.earLagYaw*.5;this.setBonePose(`ear_${j}_1`,z*.6,-tt*xt,tt*z*.22,"YXZ"),this.setBonePose(`ear_${j}_2`,z*.34+this.earLagPitch*.32,-tt*xt*.32,0,"YXZ"),this.setBonePose(`ear_${j}_3`,z*.22+this.earLagPitch*.22,0,0,"YXZ");const gt=(X.clamp(e.cheekNubFlare+b*.2,0,1)-.5)*.4;this.setBonePose(`cheekUpper_${j}_1`,gt*.28,-tt*(gt*.5+this.earLagYaw*.22),0)}const E=X.clamp(e.eyeYaw+s.gazeMicroX,-1,1),R=X.clamp(e.eyePitch+s.gazeMicroY,-1,1),L=Math.max(e.blink,s.autoBlink*(1-e.blink)),I=X.clamp(e.squint+b*.24,0,1);for(const j of["L","R"]){const tt=j==="L"?dd:pd,ft=j==="L"?Bx:Ox;this.tmpQuat.setFromAxisAngle(ft,E*.34),this.tmpQuatB.setFromAxisAngle(tt,-R*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${j}`,this.tmpQuat);const et=R>0?-R*.14:-R*.22,z=R>0?R*.12:R*.08,xt=X.clamp(Math.max(L,I*.54)+et*(1-L),-.14,1),gt=X.clamp(Math.max(L,I*.62)+z*(1-L),-.1,1);this.tmpQuat.setFromAxisAngle(tt,xt*.72),this.setBoneAxisQuat(`eyelidUpper_${j}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(tt,-gt*.64),this.setBoneAxisQuat(`eyelidLower_${j}`,this.tmpQuat)}const k=X.clamp(e.pupilDilation+s.pupilPulse-b*.28,0,1),D=this.asset.materials;D.eyeMaterials.uniforms.uPupilDilation.value=k,D.eyeMaterials.uniforms.uBiolumGlow.value=e.biolumGlow,D.eyeMaterials.uniforms.uPlasmaGlow.value=e.plasmaGlow,D.eyeMaterials.uniforms.uThermalCloak.value=e.thermalCloak,D.uniforms.uTime.value=t,D.uniforms.uIridescentShimmer.value=e.iridescentShimmer,D.uniforms.uPastelTint.value=e.pastelTint,D.uniforms.uRadiantGlow.value=e.radiantGlow,D.uniforms.uBiolumGlow.value=e.biolumGlow,D.uniforms.uPlasmaGlow.value=e.plasmaGlow,D.uniforms.uThermalCloak.value=e.thermalCloak;const U=D.syncCloakTransparency(e.thermalCloak);for(const j of this.asset.hullDepthMeshes)j.visible=U;this.setBonePose("jaw",e.jawOpen*.64,0,0);const O=.28+.72*to(0,.14,e.jawOpen),F=1-e.teethExtension*O;this.setBonePose("teethUpper",0,0,0,"XYZ",0,F*.022,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-F*.02,0);const Z=to(.06,.48,e.jawOpen),G=e.tongueExtend*.039*Z;if(e.tongueCurl>=0){const j=-e.tongueCurl*(.016+.19*Z);this.setBonePose("tongue_1",j*.35,0,0,"XYZ",0,0,G),this.setBonePose("tongue_2",j*.65,0,0),this.setBonePose("tongue_3",j*.95,0,0),this.setBonePose("tongue_4",j*1.15,0,0)}else{const j=Z*to(.2,.95,e.tongueExtend),tt=-e.tongueCurl*j;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,G),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",tt*.12,0,0),this.setBonePose("tongue_4",tt*.18,0,0)}const $=X.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),q=X.lerp(.11,.74,c);for(const j of["L","R"]){const tt=j==="L"?1:-1,ft=j==="R"?e.coyWingVeil*h:0,et=e.wingFlap*(.25+.75*e.wingUnfurl),z=tt*(et>=0?et*.74:et*q),xt=et<0?et*X.lerp(.04,.26,c)*e.wingUnfurl:0,gt=tt*(e.wingSweep*.44-ft*.68),Et=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${j}`,.05*$+ft*.08,tt*.12*$,z*.18,"YXZ"),this.setBonePose(`wingShoulder_${j}`,e.wingCamber*.09+ft*.18,tt*.82*$*(1-ft*.65)+gt,z-tt*.22*$+tt*ft*.32,"YXZ"),this.setBonePose(`wingElbow_${j}`,ft*.12,-tt*(1.42*$*(1-ft*.58)+Et*.45-ft*.42),tt*.86*$*(1-ft*.45)+z*.22+tt*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${j}`,-.35*$-e.wingCamber*.18-ft*.28,tt*(1.32*$*(1-ft*.6)+Et*.55-ft*.48)+gt*.35,tt*.12*$+tt*xt*.3+tt*e.wingTipLag*.26,"YXZ");for(let Ft=1;Ft<=6;Ft++){const ht=(Ft-1)/5,H=tt*(-.38+ht*.58)*$*(1-ft*.6),N=-e.wingCamber*(.14+.18*(1-ht))-.1*$-ft*.24,K=e.wingTipLag*(.18+.26*ht),dt=et>=0?-et*.22:-et*X.lerp(.06*Math.pow(Math.max(0,(ht-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${j}_${Ft}_a`,N,H,tt*(dt*.4+K*.45),"YXZ"),this.setBonePose(`wingFinger_${j}_${Ft}_b`,N*.5,H*.25,tt*(dt*.7+K*.75),"YXZ")}const Tt=1-e.pelvicFinFlare;for(let Ft=1;Ft<=3;Ft++)this.setBonePose(`pelvicFin_${j}_${Ft}`,0,0,-tt*Tt*1.18,"XYZ")}for(const j of this.asset.dorsalSailMeshes)j.morphTargetInfluences&&j.morphTargetInfluences.length>0&&(j.morphTargetInfluences[0]=e.dorsalSailFlex);const W=e.syncHeartTailFlukes?e.rightHeartFinFlare:e.leftHeartFinFlare,nt=Math.min(e.rightHeartFinFlare,W),ot=nt<0?Math.sin(Math.abs(nt)*1.38)*.48:.02;this.asset.rootGroup.updateMatrixWorld(!1);for(let j=1;j<=10;j++){const tt=j/10,ft=j>=9,et=ft?0:e.tailYaw*.14+e.tailCurl*.19*Math.pow(tt,1.4)+r*tt,z=ft?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-j*.48)*.085*(.4+.6*tt);let xt=ft?0:e.tailPitch*.088*(.45+tt)+z;if(!ft&&n<.85&&j>=2&&j<=8){const gt=Math.max(0,(ot-.05)*.135)*(1-n);xt<gt&&(xt=X.lerp(xt,gt,to(1,5,j)))}if(this.setBonePose(`tail_${j}`,xt,et,0,"YXZ"),n<.85){const gt=this.asset.rig.boneMap.get(`tail_${j}`);gt.parent.updateMatrixWorld(!0),gt.updateMatrixWorld(!0);const Et=this.tmpVecC.setFromMatrixPosition(gt.matrixWorld),Ft=Ui(Et.x,Et.z)+(j>=8?.05+ot:.058);if(Et.y<Ft&&j>1){const ht=gt.parent,H=gt.position.length(),N=Math.min(.45,(Ft-Et.y)/Math.max(.14,H))*(1-n);this.tmpEuler.set(N,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),ht.quaternion.multiply(this.tmpQuat),ht.updateMatrixWorld(!0)}}}const Q=-e.rightHeartFinFlare*1.38,it=W*1.38;this.setBonePose("tailFinHinge_R",0,0,Q,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,it,"XYZ");for(let j=1;j<=5;j++)this.setBonePose(`tailFin_R_${j}`,0,0,0),this.setBonePose(`tailFin_L_${j}`,0,0,0);this.asset.rig.rootBone.updateMatrixWorld(!0)}}function ss(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function $e(i,t,e,n,s){return i<=t||i>=s?0:i<e?ss(t,e,i):i>n?1-ss(n,s,i):1}function Oo(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function Wx(i,t,e){return i+Oo(t-i)*e}function Vx(i,t,e){const s=i/Math.max(1,64);let o=e;for(let a=0;a<64;a++){const r=(a+.5)*s,l=ss(.4,2.4,r),c=$e(r,7.6,8.8,15.2,16.5),h=1-.18*ss(18.5,22.5,r),u=X.lerp(4.45,5.18,l)*h,d=X.lerp(u,1.65,c)*t;o+=d*s}return o}class Cs{static DURATION_SEC=25;isPlaying=!1;isPaused=!1;loop=!1;followCamera=!0;subjectMode="duet";toothlessAsset;toothlessController;lightFuryAsset;lightFuryController;toothlessSpline;lightFurySpline;flightTime=0;tmpPos=new P;tmpPosAhead=new P;tmpPosBehind=new P;tmpPosLook=new P;tmpVel=new P;tmpEuler=new Bn;tmpQuat=new on;prevWorldAnchor=new P(0,1.15,.35);constructor(t,e,n,s){this.toothlessAsset=t,this.toothlessController=e,this.lightFuryAsset=n,this.lightFuryController=s;const o=di.position.clone(),a=pi.position.clone();this.toothlessSpline=new si([o.clone(),new P(6.8,3.8,8.2),new P(16.4,11.4,19.5),new P(24.5,17.6,33.5),new P(12.5,19.6,44.5),new P(-6.5,17.2,39.5),new P(-19.5,6.8,29),new P(-22.5,-3.2,18.5),new P(-17.5,10.6,3.5),new P(-2.5,9.8,-5.8),new P(3.85,3.15,-2.15),o.clone()],!1,"centripetal",.5),this.lightFurySpline=new si([a.clone(),new P(-3.2,4.1,7.8),new P(6.2,12,20.4),new P(14.2,18.3,34.8),new P(2.2,20.2,46),new P(-16.8,17.8,41),new P(-29.8,7.4,30.2),new P(-32.8,-2.8,19.2),new P(-27.2,11.2,4.2),new P(-12.2,10.2,-5.8),new P(-5.15,3.05,-2.35),a.clone()],!1,"centripetal",.5)}setSubjectMode(t){this.subjectMode!==t&&(this.subjectMode=t,this.isPlaying&&(this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())))}resetDragonToPerch(t){t==="toothless"?(this.toothlessAsset.rootGroup.position.copy(di.position),this.toothlessAsset.rootGroup.rotation.set(0,di.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0),this.toothlessController.resetToHeroPose()):this.lightFuryAsset&&this.lightFuryController&&(this.lightFuryAsset.rootGroup.position.copy(pi.position),this.lightFuryAsset.rootGroup.rotation.set(0,pi.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0),this.lightFuryController.resetToHeroPose())}computeDesiredWorldFocus(){const t=this.toothlessAsset.rig.boneMap.get("chest"),e=new P().setFromMatrixPosition(t.matrixWorld);if(!this.lightFuryAsset)return e;const n=this.lightFuryAsset.rig.boneMap.get("chest"),s=new P().setFromMatrixPosition(n.matrixWorld);return this.subjectMode==="toothless"?e:this.subjectMode==="light-fury"?s:e.add(s).multiplyScalar(.5)}startFromBeginning(){this.flightTime=0,this.isPlaying=!0,this.isPaused=!1,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(0),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}togglePlayPause(){if(!this.isPlaying){this.startFromBeginning();return}this.isPaused=!this.isPaused}stopAndResetToPerch(){this.isPlaying=!1,this.isPaused=!1,this.flightTime=0,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.prevWorldAnchor.set(0,1.15,.35)}scrubToProgress(t){const e=X.clamp(t,0,1);this.isPlaying||(this.isPlaying=!0,this.isPaused=!0),this.flightTime=e*Cs.DURATION_SEC,this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}getPhaseInfo(){const t=this.flightTime,e=this.subjectMode==="duet";let n=e?"Twin Perch Ready":"Perched Ready";return this.isPlaying&&(t<2.8?n=e?"1/6 · Twin Courtship Cliff Leap":"1/6 · Launch Crouch & Cliff Leap":t<7.8?n="2/6 · Majestic Climbing Wingbeats":t<13?n=e?"3/6 · Wingtip Courtship Sky Soar":"3/6 · High-Altitude Sky Soar":t<17.4?n=e?"4/6 · Mirror-Cloak Ocean Skim":"4/6 · Peregrine Ocean Skim":t<21.8?n="5/6 · Cushioned Air-Brake Hover":n=e?"6/6 · Twin Touchdown & Settle":"6/6 · Four-Paw Landing & Settle"),{isPlaying:this.isPlaying,isPaused:this.isPaused,loop:this.loop,followCamera:this.followCamera,subjectMode:this.subjectMode,progress:X.clamp(t/Cs.DURATION_SEC,0,1),elapsedSec:t,durationSec:Cs.DURATION_SEC,phaseLabel:n}}update(t,e,n){if(!this.isPlaying)return this.prevWorldAnchor.set(0,1.15,.35),{worldFocus:this.prevWorldAnchor,isAirborne:!1};if(!this.isPaused&&(this.flightTime+=t,this.flightTime>=Cs.DURATION_SEC))if(this.loop)this.flightTime%=Cs.DURATION_SEC;else return this.stopAndResetToPerch(),{worldFocus:this.prevWorldAnchor,isAirborne:!1};this.applyAtTime(this.flightTime);const s=this.computeDesiredWorldFocus();if(this.followCamera){const r=s.clone().sub(this.prevWorldAnchor);n.add(r),e.position.add(r);const l=$e(this.flightTime,1.8,5.2,18.8,23.2),c=this.subjectMode==="duet"?9.4:4.95,h=this.subjectMode==="duet"?17.8:11.2,u=X.lerp(c,h,l),d=e.position.clone().sub(n),m=Math.max(.5,d.length()),v=X.lerp(m,u,1-Math.exp(-2.2*Math.max(.016,t)));d.setLength(v),e.position.copy(n).add(d);const g=Si(e.position.x,e.position.z),f=Math.max(-8.8,g+1.8);e.position.y<f&&(e.position.y=f),n.lerp(s,1-Math.exp(-7.5*Math.max(.016,t)))}this.prevWorldAnchor.copy(s);const o=this.toothlessController.state.airborneFactor,a=this.lightFuryController?.state.airborneFactor??0;return{worldFocus:s,isAirborne:Math.max(o,a)>.15}}computeKinematicsAlongSpline(t,e,n,s,o,a){let h=0;if(s<=2.05)h=0;else if(s>=21.85)h=1;else{const L=(s-2.05)/19.8,I=L*L*(3-2*L),k=Math.sin(L*Math.PI*2-1.2)*.024*Math.sin(L*Math.PI);h=X.clamp(X.lerp(L,I,.38)+k,0,1)}const u=$e(s,2.05-.1,2.05+.72,21.85-.75,21.85+.08),d=$e(s,1.65,2.75,7.2,8.6),m=$e(s,7.8,9,12.2,13.4),v=$e(s,12.6,13.6,16.4,17.5),g=$e(s,15.8,16.8,18,19),f=$e(s,18,19.2,21.1,22.05),p=Vx(s,a,o),_=X.clamp(d*.94+g*.82+f*.88+(1-m)*(1-v)*.16,0,.96)*u,M=Math.sin(p),x=X.clamp(M+.14*Math.sin(p*2),-1,1),b=Math.cos(p),y=-b*.26*_,A=b*.056*_;let T=0,S=0,w=0,C=0;const E=e.clone(),R=new on().setFromEuler(new Bn(0,n,0,"YXZ"));if(h>1e-4&&h<.9999){const I=Math.max(0,h-.008),k=Math.min(1,h+.008);t.getPointAt(h,this.tmpPos),t.getPointAt(I,this.tmpPosBehind),t.getPointAt(k,this.tmpPosAhead),this.tmpVel.subVectors(this.tmpPosAhead,this.tmpPosBehind).normalize();const D=Math.atan2(this.tmpVel.x,this.tmpVel.z),U=Math.max(0,h-.028),O=Math.min(1,h+.028),F=t.getTangentAt(U),Z=t.getTangentAt(O),G=Math.atan2(F.x,F.z),$=Math.atan2(Z.x,Z.z);T=Oo($-G)/Math.max(.005,O-U);const q=Math.min(1,h+.048);t.getTangentAt(q,this.tmpPosLook);const W=Math.atan2(this.tmpPosLook.x,this.tmpPosLook.z);S=Oo(W-D),C=-Math.asin(X.clamp(this.tmpVel.y,-.84,.84));const nt=-.56*f,ot=$e(h,.025,.11,.86,.98);w=X.clamp(-T*.24,-.74,.74)*ot;const Q=$e(h,0,.032,.962,1);E.lerpVectors(e,this.tmpPos,Q),E.y+=y*ot;const it=$e(h,.04,.09,.91,.96);if(it>.001){const et=Si(E.x,E.z),z=Si(E.x-3.6,E.z),xt=Si(E.x+3.6,E.z),gt=Math.max(et,z,xt),Et=Math.max(-7.2,gt+3.8*it);E.y<Et&&(E.y=Et)}const j=Wx(n,D,Q),tt=(C*.86+nt+A)*Q,ft=w*Q;this.tmpEuler.set(tt,j,ft,"YXZ"),R.setFromEuler(this.tmpEuler)}return{u:h,airborneEnv:u,climbEnv:d,glideEnv:m,diveEnv:v,pulloutEnv:g,brakeEnv:f,flapPhase:p,activeFlapAmp:_,flapSin:x,flapCos:b,lookAheadTurnDiff:S,bankRoll:w,pathClimbPitch:C,outPos:E,outQuat:R}}applyToothlessFlightAtTime(t,e){const n=this.computeKinematicsAlongSpline(this.toothlessSpline,di.position,di.yaw,t,0,1);this.toothlessAsset.rootGroup.position.copy(n.outPos),this.toothlessAsset.rootGroup.quaternion.copy(n.outQuat),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const s=$e(t,.35,1.15,1.68,2.1),o=$e(t,1.82,2.05,2.35,2.85),a=$e(t,19.2,20.2,21.75,22.25),r=$e(t,21.75,22.2,22.85,23.9),l=$e(t,23.1,23.65,24.35,24.95),c=e?.34*n.glideEnv+.36*l:-.22*l,h=Ke.forelegStance*(1-s-r)-.88*s-.8*r+.18*l,u=Ke.hindlegStance*(1-s-r)-.84*s-.76*r+.12*l,d=X.clamp(.82*n.airborneEnv-1.55*o-1.58*a,-.84,.88),m=X.lerp(Ke.wingUnfurl+.34*s,1-.16*n.diveEnv,ss(.95,2.15,t)*(1-ss(22.1,24.1,t))),v=Math.max(0,n.flapCos)*.56*n.activeFlapAmp*(1-n.brakeEnv*.6),g=X.clamp(.68*s+n.flapSin*.92*n.activeFlapAmp+.14*n.glideEnv-.08*n.diveEnv,-1,1),f=-n.flapCos*.84*n.activeFlapAmp,p=X.clamp(Ke.wingSweep*(1-n.airborneEnv)-.8*n.diveEnv+.74*n.brakeEnv-.16*s,-1,1),_=Math.max(0,-n.flapSin)*n.activeFlapAmp,M=X.clamp(.28+.46*_+.54*n.pulloutEnv+.64*n.brakeEnv-.18*n.diveEnv,.08,1),x=X.clamp(.22*(1-n.airborneEnv)+.95*n.glideEnv+.85*Math.min(1,Math.abs(n.bankRoll)*1.8)+.9*n.brakeEnv,.15,1),b=.24*(1-n.airborneEnv)+.18*n.climbEnv+.06*n.glideEnv+.42*n.diveEnv-.32*n.brakeEnv,y=X.clamp(n.bankRoll*.38,-.32,.32),A={airborneFactor:n.airborneEnv,forelegStance:h,hindlegStance:u,limbStride:0,legFlightTuck:d,spineArch:.2*s-.16*o+.24*n.brakeEnv+.08*(1-n.airborneEnv),spineTwist:X.clamp(-n.bankRoll*.35,-1,1),wingUnfurl:m,wingFlap:g,wingWristFold:v,wingTipLag:f,wingSweep:p,wingCamber:M,pelvicFinFlare:X.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.35*n.diveEnv,.3,1),dorsalSpineSplit:x,autoSyncProstheticTail:Math.abs(y)<.02,leftProstheticFinFlare:X.clamp(b+y,-1,1),rightTailFinFlare:X.clamp(b-y,-1,1),tailYaw:X.clamp(Ke.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv+.28*l,-1,1),tailPitch:X.clamp(Ke.tailPitch*(1-n.airborneEnv)-.34*n.brakeEnv+.15*n.pulloutEnv+.22*r,-1,1),tailCurl:.16*(1-n.diveEnv)+n.lookAheadTurnDiff*.8,tailWaveAmp:n.activeFlapAmp*.78+n.glideEnv*.16,tailWavePhase:n.flapPhase,neckArch:.16+.24*n.brakeEnv-.2*n.diveEnv,neckYaw:n.lookAheadTurnDiff*.95*n.airborneEnv+c*.45,headYaw:X.clamp(Ke.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+c,-1,1),headPitch:X.clamp(Ke.headPitch*(1-n.airborneEnv)-.34*s+n.pathClimbPitch*-.24*n.airborneEnv+.48*n.brakeEnv+.16*r,-1,1),headRoll:X.clamp(Ke.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv-.22*l,-1,1),earPerk:X.clamp(.76+.2*s-.56*n.diveEnv-.2*n.climbEnv+.18*n.brakeEnv+.18*l,.12,1),earAsymmetry:n.bankRoll*.22+.12*l,cheekNubFlare:.5+.25*n.diveEnv,eyeYaw:X.clamp(n.lookAheadTurnDiff*1.7*n.airborneEnv+c*.55,-.85,.85),eyePitch:X.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:X.clamp(.76-.24*n.diveEnv+.16*l,.25,.96),squint:X.clamp(.36*n.diveEnv+.18*l,0,1),blink:$e(t,23.35,23.45,23.52,23.64),jawOpen:X.clamp(.2*o+.15*n.pulloutEnv+.26*l,0,1),teethExtension:0,tongueExtend:.4*l,tongueCurl:.2*l};Object.assign(this.toothlessController.state,A)}applyLightFuryFlightAtTime(t,e){if(!this.lightFuryAsset||!this.lightFuryController)return;const n=this.computeKinematicsAlongSpline(this.lightFurySpline,pi.position,pi.yaw,t,.95,1.03);this.lightFuryAsset.rootGroup.position.copy(n.outPos),this.lightFuryAsset.rootGroup.quaternion.copy(n.outQuat),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const s=$e(t,.32,1.12,1.65,2.08),o=$e(t,1.8,2.04,2.32,2.82),a=$e(t,19.2,20.2,21.75,22.25),r=$e(t,21.75,22.2,22.85,23.9),l=$e(t,23,23.6,24.4,24.96),c=$e(t,13.2,14.2,15.8,16.9),h=$e(t,8.2,9.4,12.2,13.4),u=$e(t,12.6,13.6,16,17.2),d=e?-.36*n.glideEnv-.34*l:-.18*l,m=Ze.forelegStance*(1-s-r)-.86*s-.78*r+.2*l,v=Ze.hindlegStance*(1-s-r)-.82*s-.74*r+.12*l,g=X.clamp(.82*n.airborneEnv-1.52*o-1.56*a,-.84,.88),f=X.lerp(Ze.wingUnfurl+.34*s,1-.18*n.diveEnv,ss(.9,2.12,t)*(1-ss(22.1,24.1,t))),p=Math.max(0,n.flapCos)*.54*n.activeFlapAmp*(1-n.brakeEnv*.6),_=X.clamp(.66*s+n.flapSin*.9*n.activeFlapAmp+.16*n.glideEnv-.08*n.diveEnv,-1,1),M=-n.flapCos*.86*n.activeFlapAmp,x=X.clamp(Ze.wingSweep*(1-n.airborneEnv)-.82*n.diveEnv+.74*n.brakeEnv-.15*s,-1,1),b=Math.max(0,-n.flapSin)*n.activeFlapAmp,y=X.clamp(.26+.44*b+.52*n.pulloutEnv+.62*n.brakeEnv-.16*n.diveEnv,.08,1),A=.18*(1-n.airborneEnv)+.12*n.climbEnv+.02*n.glideEnv+.38*n.diveEnv-.28*n.brakeEnv,T=X.clamp(n.bankRoll*.36,-.3,.3),S={airborneFactor:n.airborneEnv,forelegStance:m,hindlegStance:v,limbStride:0,legFlightTuck:g,coyWingVeil:0,spineArch:.22*s-.15*o+.24*n.brakeEnv+.12*(1-n.airborneEnv),spineTwist:X.clamp(-n.bankRoll*.36,-1,1),wingUnfurl:f,wingFlap:_,wingWristFold:p,wingTipLag:M,wingSweep:x,wingCamber:y,pelvicFinFlare:X.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.32*n.diveEnv,.32,1),dorsalSailFlex:X.clamp(.24*(1-n.airborneEnv)+.92*n.glideEnv+.85*n.brakeEnv+.65*Math.abs(n.bankRoll),.15,1),syncHeartTailFlukes:Math.abs(T)<.02,leftHeartFinFlare:X.clamp(A+T,-1,1),rightHeartFinFlare:X.clamp(A-T,-1,1),tailYaw:X.clamp(Ze.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv-.36*l,-1,1),tailPitch:X.clamp(Ze.tailPitch*(1-n.airborneEnv)-.32*n.brakeEnv+.16*n.pulloutEnv+.2*r,-1,1),tailCurl:-.24*(1-n.airborneEnv)+n.lookAheadTurnDiff*.8-.26*l,tailWaveAmp:n.activeFlapAmp*.76+n.glideEnv*.18,tailWavePhase:n.flapPhase,neckArch:.24+.24*n.brakeEnv-.2*n.diveEnv+.14*l,neckYaw:n.lookAheadTurnDiff*.92*n.airborneEnv+d*.48,headYaw:X.clamp(Ze.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+d,-1,1),headPitch:X.clamp(Ze.headPitch*(1-n.airborneEnv)-.32*s+n.pathClimbPitch*-.24*n.airborneEnv+.46*n.brakeEnv+.14*r,-1,1),headRoll:X.clamp(Ze.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv+.28*l,-1,1),earPerk:X.clamp(.82+.16*s-.56*n.diveEnv-.2*n.climbEnv+.16*n.brakeEnv,.14,1),earAsymmetry:n.bankRoll*.24+.18*l,cheekNubFlare:.52+.22*n.diveEnv,eyeYaw:X.clamp(n.lookAheadTurnDiff*1.65*n.airborneEnv+d*.55,-.85,.85),eyePitch:X.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:X.clamp(.84-.2*n.diveEnv+.1*l,.3,.96),squint:X.clamp(.3*n.diveEnv+.56*l,0,1),blink:$e(t,23.18,23.28,23.36,23.48),jawOpen:X.clamp(.14*o+.12*n.pulloutEnv+.14*l,0,1),teethExtension:0,tongueExtend:.28*l,tongueCurl:.12*l,iridescentShimmer:X.clamp(.78+.22*(n.glideEnv+c),0,1),radiantGlow:X.clamp(.34+.36*(n.glideEnv+c),0,1),biolumGlow:X.clamp(.58*h,0,1),plasmaGlow:X.clamp(.04+.78*u,0,1),thermalCloak:X.clamp(.78*c,0,1)};Object.assign(this.lightFuryController.state,S)}applyPerchedSpectatorGaze(t,e){if(t==="toothless"){this.toothlessAsset.rootGroup.position.copy(di.position),this.toothlessAsset.rootGroup.rotation.set(0,di.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(di.position);n.y-=1.5;const s=Math.atan2(n.x,n.z),o=Oo(s-di.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.toothlessController.state,{...Ke,neckYaw:X.clamp(o*.55,-.85,.85),headYaw:X.clamp(o*.85,-.95,.95),headPitch:X.clamp(-r*.95,-.85,.75),headRoll:X.clamp(-o*.18,-.45,.45),eyeYaw:X.clamp(o*.45,-.75,.75),eyePitch:X.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.88})}else if(this.lightFuryAsset&&this.lightFuryController){this.lightFuryAsset.rootGroup.position.copy(pi.position),this.lightFuryAsset.rootGroup.rotation.set(0,pi.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(pi.position);n.y-=1.48;const s=Math.atan2(n.x,n.z),o=Oo(s-pi.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.lightFuryController.state,{...Ze,neckYaw:X.clamp(o*.55,-.85,.85),headYaw:X.clamp(o*.85,-.95,.95),headPitch:X.clamp(-r*.95,-.85,.75),headRoll:X.clamp(.18-o*.18,-.5,.55),eyeYaw:X.clamp(o*.45,-.75,.75),eyePitch:X.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.9})}}applyAtTime(t){if(this.subjectMode==="duet")this.applyToothlessFlightAtTime(t,!0),this.applyLightFuryFlightAtTime(t,!0);else if(this.subjectMode==="toothless"){this.applyToothlessFlightAtTime(t,!1);const e=this.toothlessAsset.rig.boneMap.get("chest"),n=new P().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("light-fury",n)}else if(this.applyLightFuryFlightAtTime(t,!1),this.lightFuryAsset){const e=this.lightFuryAsset.rig.boneMap.get("chest"),n=new P().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("toothless",n)}}}function Gx(i){return i-Math.floor(i)}function Wh(i,t){return Gx(Math.sin(i*127.1+t*311.7)*43758.5453123)}let Fa=null;function Xx(i=512){if(Fa)return Fa;const t=new Float32Array(i*i),e=76;for(let m=0;m<i;m++){const v=m/i*e,g=Math.floor(v),f=v-g;for(let p=0;p<i;p++){const _=p/i*e,M=Math.floor(_),x=_-M;let b=10;for(let A=-1;A<=1;A++)for(let T=-1;T<=1;T++){const S=((M+T)%e+e)%e,w=((g+A)%e+e)%e,C=T+.5+(Wh(S,w)-.5)*.68-x,E=A+.5+(Wh(w+19,S+7)-.5)*.68-f,R=Math.sqrt(C*C+E*E);R<b&&(b=R)}const y=Math.max(0,1-Math.pow(b*1.15,2.2));t[m*i+p]=y}}const n=document.createElement("canvas"),s=document.createElement("canvas"),o=document.createElement("canvas");for(const m of[n,s,o])m.width=i,m.height=i;const a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(i,i),h=r.createImageData(i,i),u=l.createImageData(i,i);for(let m=0;m<i;m++){const v=(m-1+i)%i,g=(m+1)%i;for(let f=0;f<i;f++){const p=(f-1+i)%i,_=(f+1)%i,M=m*i+f,x=M*4,b=t[M],y=(t[m*i+_]-t[m*i+p])*.24,A=(t[g*i+f]-t[v*i+f])*.24,T=1/Math.sqrt(y*y+A*A+1);h.data[x]=Math.round((-y*T*.5+.5)*255),h.data[x+1]=Math.round((-A*T*.5+.5)*255),h.data[x+2]=Math.round((T*.5+.5)*255),h.data[x+3]=255;const S=249+b*5;c.data[x]=Math.min(255,Math.round(S+.8)),c.data[x+1]=Math.round(S),c.data[x+2]=Math.min(255,Math.round(S+.6)),c.data[x+3]=255;const w=Math.round((.45-b*.07)*255);u.data[x]=w,u.data[x+1]=w,u.data[x+2]=w,u.data[x+3]=255}}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0);const d=(m,v)=>(m.wrapS=Ai,m.wrapT=Ai,m.anisotropy=8,m.colorSpace=v?Mn:ii,m.needsUpdate=!0,m);return Fa={albedoMap:d(new Ln(n),!0),normalMap:d(new Ln(s),!1),roughnessMap:d(new Ln(o),!1)},Fa}let ys=null;function Yx(i=1024){if(ys)return ys;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=14,n.data[u+1]=24,n.data[u+2]=42,n.data[u+3]=255;continue}const d=Math.sin(h*64+Math.sin(c*12)*.65),m=Math.sin(h*138-Math.cos(c*18)*.85),v=Math.sin(h*250+c*22),g=Math.sin(h*21+.9)*Math.cos(c*14-h*4),f=d*.42+m*.33+v*.15+g*.24,p=Math.exp(-Math.pow((c-.36)/.13,2)),_=Math.max(0,Math.min(1,(.95-c)/.17)),M=Math.max(0,Math.min(1,1-c*1.06)),x=.86+.28*f;let b=(32+128*M+58*p)*x*_,y=(118+114*M+36*p)*x*_,A=(205+48*M+20*p)*x*_;if(g<-.58&&c>.25&&c<.78){const T=Math.min(1,(-g-.58)*2.1);b*=1-.38*T,y*=1-.28*T,A*=1-.16*T}n.data[u]=Math.max(0,Math.min(255,Math.round(b))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(y))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+3]=255}}return e.putImageData(n,0,0),ys=new Ln(t),ys.colorSpace=Mn,ys.anisotropy=8,ys.needsUpdate=!0,ys}function $x(){const i=Yx(1024),t={uPupilDilation:{value:.78},uLightDir:{value:new P(.45,.65,.6).normalize()},uBiolumGlow:{value:0},uPlasmaGlow:{value:0},uThermalCloak:{value:0}},e=new fi({name:"LightFury_SkyBlueIris_PBR",map:i,roughness:.48,metalness:0,envMapIntensity:.78});e.onBeforeCompile=s=>{Object.assign(s.uniforms,t),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.36 + uPlasmaGlow * 0.85 + uBiolumGlow * 0.72) * eRadial * (1.0 - smoothstep(0.0, 0.95, uThermalCloak) * 0.88);`)};const n=new In({name:"LightFury_Cornea_WetCoat",color:new Bt(16777215),transparent:!0,opacity:.15,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function Vh(i,t,e){i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function qx(){const i=Xx(512),t=$x(),e={uTime:{value:0},uIridescentShimmer:{value:.76},uPastelTint:{value:.78},uRadiantGlow:{value:.34},uBiolumGlow:{value:0},uPlasmaGlow:{value:.04},uThermalCloak:{value:0},uSunDir:{value:new P(-.55,.38,-.74).normalize()},uSunColor:{value:new Bt(16765601)}},n=new In({name:"LightFury_SnowPearlHide_PBR",color:new Bt(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new qt(.05,.05),roughnessMap:i.roughnessMap,roughness:.46,metalness:.02,iridescence:.42,iridescenceIOR:1.38,iridescenceThicknessRange:[320,520],clearcoat:.34,clearcoatRoughness:.22,sheen:.28,sheenRoughness:.42,sheenColor:new Bt(16773366),envMapIntensity:1.22});Vh(n,e,!1);const s={albedo:i.albedoMap.clone(),normal:i.normalMap.clone(),rough:i.roughnessMap.clone()};for(const f of[s.albedo,s.normal,s.rough])f.repeat.set(3,3),f.needsUpdate=!0;const o=new In({name:"LightFury_IridescentWingPatagium_PBR",color:new Bt(16776445),map:s.albedo,normalMap:s.normal,normalScale:new qt(.028,.028),roughnessMap:s.rough,roughness:.42,metalness:.02,iridescence:.52,iridescenceIOR:1.4,iridescenceThicknessRange:[310,540],clearcoat:.28,clearcoatRoughness:.24,side:en,envMapIntensity:1.28});Vh(o,e,!0);const a=new In({name:"LightFury_SlatePearlClaws_PBR",color:new Bt(2633016),roughness:.24,metalness:.08,clearcoat:.84,clearcoatRoughness:.12,envMapIntensity:1.5}),r=new In({name:"LightFury_PearlyTeeth_PBR",color:new Bt(16447218),roughness:.14,metalness:0,clearcoat:.92,clearcoatRoughness:.08}),l=new In({name:"LightFury_RoseGums_PBR",color:new Bt(12084344),normalMap:i.normalMap,normalScale:new qt(.08,.08),roughness:.32,clearcoat:.82,clearcoatRoughness:.12,side:en}),c=new In({name:"LightFury_PinkTongue_PBR",color:new Bt(13924494),normalMap:i.normalMap,normalScale:new qt(.1,.1),roughness:.26,clearcoat:.88,clearcoatRoughness:.1}),h=new qo({name:"LightFury_OuterHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0}),u=new qo({name:"LightFury_WingHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0,side:en}),d=[n,o,a],m=[r,l,c,t.irisMaterial];let v=!1;return{skinMaterial:n,wingMembraneMaterial:o,clawMaterial:a,teethMaterial:r,oralGumMaterial:l,tongueMaterial:c,hullDepthMaterial:h,doubleSidedHullDepthMaterial:u,eyeMaterials:t,uniforms:e,syncCloakTransparency:f=>{const p=f>.001;if(p!==v){v=p;for(const M of d)M.transparent=p,M.depthWrite=!p,M.depthFunc=zi,M.polygonOffset=p,M.polygonOffsetFactor=p?-1:0,M.polygonOffsetUnits=p?-2:0,M.needsUpdate=!0;for(const M of m)M.transparent=p,M.depthWrite=!p,M.depthTest=!0,M.depthFunc=zi,M.needsUpdate=!0}const _=X.smoothstep(f,0,.96);return a.opacity=1-_*.86,r.opacity=1-_*.9,l.opacity=1-_*.9,c.opacity=1-_*.9,t.corneaMaterial.opacity=X.lerp(.15,.03,_),p}}}function _e(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Ne(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Gh(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function Gl(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let h=0;h<e-1;h++)n[h]=(t[h+1][1]-t[h][1])/(t[h+1][0]-t[h][0]);s[0]=n[0],s[e-1]=n[e-2];for(let h=1;h<e-1;h++)n[h-1]*n[h]<=0?s[h]=0:s[h]=(n[h-1]+n[h])*.5;for(let h=0;h<e-1;h++)if(Math.abs(n[h])<1e-8)s[h]=0,s[h+1]=0;else{const u=s[h]/n[h],d=s[h+1]/n[h],m=Math.hypot(u,d);if(m>3){const v=3/m;s[h]=v*u*n[h],s[h+1]=v*d*n[h]}}let o=0;for(let h=0;h<e-1;h++)if(i>=t[h][0]&&i<=t[h+1][0]){o=h;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r;return(2*c-3*l+1)*t[o][1]+(c-2*l+r)*a*s[o]+(-2*c+3*l)*t[o+1][1]+(c-l)*a*s[o+1]}const Zx=[[-4.18,.015],[-3.55,.048],[-2.75,.088],[-1.9,.146],[-1.25,.202],[-.82,.246],[-.5,.278],[-.08,.258],[.42,.312],[.72,.326],[.98,.254],[1.22,.21],[1.44,.198]],fd=[[-4.18,.014],[-3.55,.042],[-2.75,.076],[-1.9,.126],[-1.25,.172],[-.82,.204],[-.5,.228],[-.08,.214],[.42,.248],[.72,.26],[.98,.208],[1.22,.182],[1.44,.174]],jx=[[0,.116,-4.18],[0,.116,-3.72],[0,.116,-3.28],[0,.12,-2.82],[0,.175,-2.3],[0,.32,-1.78],[0,.51,-1.32],[0,.68,-.86],[0,.755,-.5],[0,.76,-.08],[0,.815,.38],[0,.885,.75],[0,1.03,.98],[0,1.24,1.19],[0,1.45,1.38],[0,1.54,1.54],[0,1.562,1.73],[0,1.538,1.9],[0,1.49,2.065]];let Qr=null;function md(){return Qr||(Qr=new si(jx.map(([i,t,e])=>new P(i,t,e)),!1,"centripetal",.5)),Qr}function Kx(i){const t=md();let e=0,n=1;for(let u=0;u<24;u++){const d=(e+n)*.5;t.getPointAt(d).z<i?e=d:n=d}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new P(0,1,0),l=new P().copy(r).addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=Gl(c,fd)*_e(-4.18,-4.1,c);return{point:o.clone().addScaledVector(l,h),tangent:a,up:l}}function Xh(i,t,e){const n=i/e,s=t/e+.15,o=n*n+Math.pow(s-.58*Math.sqrt(Math.abs(n)+.04),2);return 1-_e(.62,1.15,o)}function Qx(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.53)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.28){const r=_e(1.31,1.53,i.z),l=1-r,c=_e(1.26,1.45,i.z);return Xe([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return Mi(i,e,n,3.5)}function Jx(i,t){const e=[];return e.push(t2(i,t)),e.push(...e2(i,t)),e.push(...n2(i,t)),e.push(...i2(i,t)),je(e)}function t2(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=md(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(b=>i.boneIndexMap.get(b)),r=o.map(b=>i.bindWorldPositions.get(b)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),m=new Float32Array(l*4),v=new P(0,1,0),g=i.bindWorldPositions.get("eye_L"),f=i.bindWorldPositions.get("eye_R"),p=[{center:g,fwd:na,up:new P(-.19,.98,.06).normalize()},{center:f,fwd:ia,up:new P(.19,.98,.06).normalize()}].map(b=>{const y=new P().crossVectors(b.up,b.fwd).normalize(),A=new P().crossVectors(b.fwd,y).normalize();return{center:b.center,fwd:b.fwd,right:y,up:A}});for(let b=0;b<=e;b++){const y=b/e,A=1-Math.pow(1-y,1.85),T=s.getPointAt(A),S=s.getTangentAt(A).normalize(),w=new P().copy(v).addScaledVector(S,-v.dot(S)).normalize(),C=new P().crossVectors(w,S).normalize(),E=T.z,R=_e(-4.18,-4.1,E),L=Gl(E,Zx)*R,I=Gl(E,fd)*R,k=_e(1.36,1.5,E);let D=L,U=I;if(k>0){const O=Math.max(0,Math.min(1,(E-1.44)/.625)),F=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(O-.78)/.22),2))),Z=Rs(E),G=(.174+.018*Ne(O,.36,.24)-.062*_e(.36,.94,O))*F;D=X.lerp(L,Z,k),U=X.lerp(I,G,k)}for(let O=0;O<=n;O++){const F=O/n,Z=F*Math.PI*2,G=Math.sin(Z),$=Math.cos(Z);let q=D*G,W=U*$,nt=.08,ot=0,Q=0,it=0;if(E>-2.9&&E<1.6&&$<.12){const z=_e(-2.9,-.55,E)*(1-_e(1.36,1.6,E));Q=_e(.12,-.68,$)*z}if(E>-.45&&E<.92){const z=Ne(E,.3,.42)*Ne(Math.abs(G),.88,.22)*Ne($,.08,.36);it=Math.max(it,z*.28)}if($>.35&&E>-3.9&&E<1.6){const z=_e(.35,.92,$)*_e(.1,.85,E)*(1-_e(1.45,1.65,E)),xt=Ne(G,0,.16)*_e(.55,.96,$),gt=Math.pow(Math.max(0,Math.sin(E*5.8+Math.abs(G)*3.4)),4)*Ne($,.42,.24)*_e(-2.4,-.4,E)*(1-_e(.95,1.35,E));ot=Math.max(ot,z*.48,xt*.84,gt*.72)}if(E>-.78&&E<1.08){const z=Ne(E,.68,.28),xt=Ne(Math.abs(G),.44,.22)*_e(-.1,-.86,$);W-=.018*z*xt,q+=Math.sign(G)*.012*z*xt;const gt=Ne(E,.78,.2)*Ne(Math.abs(G),.7,.18)*_e(-.08,-.78,$),Et=Ne(E,-.49,.22)*Ne(Math.abs(G),.68,.19)*_e(-.05,-.78,$);W-=.026*gt+.022*Et}if(E>=1.42){const z=Ne(E,1.842,.095),xt=Ne(Math.abs(G),.62,.17)*_e(.18,.74,$);W+=.014*z*xt,q+=Math.sign(G)*.007*z*xt;const gt=Ne(E,1.76,.12)*Ne(Math.abs(G),.88,.17)*Ne($,-.12,.25);if(q+=Math.sign(G)*.016*gt,$>.65&&E>1.56&&E<1.86){const Et=Xh(q,E-1.745,.052),Tt=Xh(q,E-1.648,.038);ot=Math.max(ot,Math.max(Et,Tt*.92))}E>1.98&&$>-.35&&$<.35&&(W-=.002*Ne(G,0,.08)*_e(1.98,2.055,E)),nt=.22+.24*_e(1.85,2.05,E)}const j=new P().copy(T).addScaledVector(C,q).addScaledVector(w,W),tt=_e(1.52,1.6,E);if(tt>0&&$<.04){const z=rs(E),xt=Math.max(_e(.56,.9,Math.abs(G)),_e(1.96,2.04,E)),gt=z-.0042,Et=z+.039*(1-_e(1.92,2.05,E)),Tt=X.lerp(Et,gt,xt),Ft=tt*_e(.04,-.26,$);j.y=X.lerp(j.y,Tt,Ft)}if(E>1.66&&E<2)for(const z of p){if(Math.sign(j.x)!==Math.sign(z.center.x))continue;const xt=new P().subVectors(j,z.center),gt=xt.dot(z.fwd),Et=xt.dot(z.right),Tt=xt.dot(z.up);if(gt>0){const Ft=Math.exp(-.5*(Math.pow(Et/.053,2)+Math.pow(Tt/.045,2)))*_e(0,.032,gt),ht=Ka-.022,H=X.lerp(gt,ht,Ft);gt>H&&j.addScaledVector(z.fwd,H-gt)}}if(E>1.94&&E<2.065&&j.y>1.48){const z=Gh(j.x,j.z,.054,2.018,.017,.02)*Ne(j.y,1.508,.014),xt=Gh(j.x,j.z,-.054,2.018,.017,.02)*Ne(j.y,1.508,.014),gt=Math.max(z,xt),Et=_e(1.96,2.055,j.z)*Ne(j.y,1.505,.032);it=Math.max(it,Et*.65),gt>.05&&(j.x*=1-.14*gt,j.y-=.009*gt,j.z-=.011*gt,it=Math.max(it,Math.min(1,.55+gt*.85)))}const ft=b*(n+1)+O;c[ft*3]=j.x,c[ft*3+1]=j.y,c[ft*3+2]=j.z,h[ft*2]=A*5.2,h[ft*2+1]=F*1.6,u[ft*4]=nt,u[ft*4+1]=ot,u[ft*4+2]=Q,u[ft*4+3]=it;const et=Qx(j,i,a,r);d.set(et.indices,ft*4),m.set(et.weights,ft*4)}}const _=new Uint32Array(e*n*6);let M=0;for(let b=0;b<e;b++)for(let y=0;y<n;y++){const A=b*(n+1)+y,T=(b+1)*(n+1)+y,S=(b+1)*(n+1)+(y+1),w=b*(n+1)+(y+1);_[M++]=A,_[M++]=T,_[M++]=S,_[M++]=A,_[M++]=S,_[M++]=w}const x=new jt;return x.setAttribute("position",new J(c,3)),x.setAttribute("uv",new J(h,2)),x.setAttribute("aAnatomyData",new J(u,4)),x.setAttribute("skinIndex",new Ce(d,4)),x.setAttribute("skinWeight",new Kt(m,4)),x.setIndex(new J(_,1)),x.computeVertexNormals(),lr(x,e,n),x}function e2(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.162,1.848,1.24],maxWidth:.068,maxThick:.028,rollAngle:l*-.28,isPrimaryEar:!0}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.288,1.608,1.35],maxWidth:.032,maxThick:.017,rollAngle:l*-.82,isPrimaryEar:!1})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.boneNames.map(S=>i.bindWorldPositions.get(S).clone()),c=new P().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.055),...l,new P(...r.tipPos)],d=new si(u),m=r.boneNames.map(S=>i.boneIndexMap.get(S)),v=r.boneNames.map(S=>i.bindWorldPositions.get(S)),g=(o+1)*(a+1),f=new Float32Array(g*3),p=new Float32Array(g*2),_=new Float32Array(g*4),M=new Uint16Array(g*4),x=new Float32Array(g*4),b=new P(0,1,0);for(let S=0;S<=o;S++){const w=S/o,C=d.getPointAt(w),E=d.getTangentAt(w).normalize(),R=b.clone().addScaledVector(E,-b.dot(E)).normalize(),L=new P().crossVectors(R,E).normalize(),I=Math.cos(r.rollAngle),k=Math.sin(r.rollAngle),D=L.clone().multiplyScalar(I).addScaledVector(R,k),U=R.clone().multiplyScalar(I).addScaledVector(L,-k),O=r.isPrimaryEar?.72+.36*Math.sin(Math.pow(w,.75)*Math.PI*.88):Math.sin(Math.pow(w,.68)*Math.PI*.92),F=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(w-.76)/.24),2))),Z=r.maxWidth*O*F,G=r.maxThick*(.78+.28*Math.sin(w*Math.PI))*F;for(let $=0;$<=a;$++){const q=$/a,W=q*Math.PI*2,nt=new P().copy(C).addScaledVector(D,Z*Math.cos(W)).addScaledVector(U,G*Math.sin(W)),ot=S*(a+1)+$;f[ot*3]=nt.x,f[ot*3+1]=nt.y,f[ot*3+2]=nt.z,p[ot*2]=w*.48,p[ot*2+1]=q*.48,_[ot*4]=.2,_[ot*4+1]=_e(.55,.95,w)*.65,_[ot*4+2]=0,_[ot*4+3]=_e(.65,1,w)*.3;const Q=Mi(nt,m,v,4),it=_e(.3,0,w),j=Xe([n,Q.indices[0],Q.indices[1],Q.indices[2]],[it,Q.weights[0]*(1-it),Q.weights[1]*(1-it),Q.weights[2]*(1-it)]);M.set(j.indices,ot*4),x.set(j.weights,ot*4)}}const y=new Uint16Array(o*a*6);let A=0;for(let S=0;S<o;S++)for(let w=0;w<a;w++){const C=S*(a+1)+w,E=(S+1)*(a+1)+w,R=(S+1)*(a+1)+(w+1),L=S*(a+1)+(w+1);y[A++]=C,y[A++]=E,y[A++]=R,y[A++]=C,y[A++]=R,y[A++]=L}const T=new jt;T.setAttribute("position",new J(f,3)),T.setAttribute("uv",new J(p,2)),T.setAttribute("aAnatomyData",new J(_,4)),T.setAttribute("skinIndex",new Ce(M,4)),T.setAttribute("skinWeight",new Kt(x,4)),T.setIndex(new J(y,1)),T.computeVertexNormals(),lr(T,o,a),e.push(T)}return e}function n2(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?na:ia).clone(),d=new P(r*-.19,.98,.06).normalize(),m=new P().crossVectors(u,d).normalize(),v=new P().crossVectors(m,u).normalize();for(const g of[!0,!1]){const f=g?c:h,p=(s+1)*(o+1),_=new Float32Array(p*3),M=new Float32Array(p*2),x=new Float32Array(p*4),b=new Uint16Array(p*4),y=new Float32Array(p*4),A=Ka+.0016;for(let C=0;C<=o;C++){const E=C/o,R=Ne(E,.06,.08);for(let L=0;L<=s;L++){const I=L/s,k=X.degToRad(X.lerp(-65,65,I)),D=Math.sin(I*Math.PI),U=g?42*D:-38*D,O=g?78:-74,F=X.degToRad(X.lerp(U,O,E)),Z=A+.0016*R-.0026*E,G=new P().addScaledVector(u,Math.cos(F)*Math.cos(k)).addScaledVector(m,Math.cos(F)*Math.sin(k)).addScaledVector(v,Math.sin(F)).normalize(),$=new P().copy(l).addScaledVector(G,Z),q=C*(s+1)+L;_[q*3]=$.x,_[q*3+1]=$.y,_[q*3+2]=$.z,M[q*2]=I*.35,M[q*2+1]=E*.18,x[q*4]=.25;const W=D*(1-_e(.48,1,E)),nt=Math.max(0,Math.min(1,W));b.set([f,n,0,0],q*4),y.set([nt,1-nt,0,0],q*4)}}const T=new Uint16Array(s*o*6);let S=0;for(let C=0;C<o;C++)for(let E=0;E<s;E++){const R=C*(s+1)+E,L=(C+1)*(s+1)+E,I=(C+1)*(s+1)+(E+1),k=C*(s+1)+(E+1);g?(T[S++]=R,T[S++]=I,T[S++]=L,T[S++]=R,T[S++]=k,T[S++]=I):(T[S++]=R,T[S++]=L,T[S++]=I,T[S++]=R,T[S++]=I,T[S++]=k)}const w=new jt;w.setAttribute("position",new J(_,3)),w.setAttribute("uv",new J(M,2)),w.setAttribute("aAnatomyData",new J(x,4)),w.setAttribute("skinIndex",new Ce(b,4)),w.setAttribute("skinWeight",new Kt(y,4)),w.setIndex(new J(T,1)),w.computeVertexNormals(),e.push(w)}}return e}function i2(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new P(a*.14,.89,.78),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new P(a*.292,.048,.925),new P(a*.292,.028,.992)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push($h(i,r,l,!0,a,n,s)),e.push(...Yh(i,o,!0,t));const c=[new P(a*.13,.75,-.49),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new P(a*.278,.046,-.506),new P(a*.278,.028,-.442)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push($h(i,c,h,!1,a,n,s)),e.push(...Yh(i,o,!1,t))}return e}function Yh(i,t,e,n){const s=[],o=hd(t,e),a=n===0?15:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4),f=Math.hypot(l.dirX,l.dirZ),p=l.dirX/f,_=l.dirZ/f,M=_,x=-p;for(let T=0;T<=a;T++){const S=T/a,w=X.lerp(-.36,1,S),C=Math.max(0,w),E=Math.max(0,-w)*.036,R=Math.sin(C*Math.PI)*.009-.008*C*C+E,L=l.rootX+p*l.toeLength*w,I=l.rootZ+_*l.toeLength*w,k=l.rootY+R,D=1+.42*Math.pow(1-_e(-.36,.18,w),1.5),U=1+.13*Ne(C,.4,.18)+.11*Ne(C,.84,.1),O=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(S-.89)/.11),2))),F=X.lerp(l.baseRadius,l.tipRadius,C)*D*U*O;for(let Z=0;Z<=r;Z++){const G=Z/r,$=G*Math.PI*2,q=Math.sin($),W=Math.cos($),nt=1.1+.22*(1-_e(-.34,.2,w)),ot=L+M*q*F*nt,Q=I+x*q*F*nt;let it=k+W*F*.86;it<.003&&(it=.003+Math.max(0,it)*.14);const j=T*(r+1)+Z;u[j*3]=ot,u[j*3+1]=it,u[j*3+2]=Q,d[j*2]=S*.36,d[j*2+1]=G*.32,m[j*4]=.28,m[j*4+1]=W>.2?.52*_e(.2,.85,C):0,m[j*4+2]=.35,v.set([c,0,0,0],j*4),g.set([1,0,0,0],j*4)}}const b=new Uint16Array(a*r*6);let y=0;for(let T=0;T<a;T++)for(let S=0;S<r;S++){const w=T*(r+1)+S,C=(T+1)*(r+1)+S,E=(T+1)*(r+1)+(S+1),R=T*(r+1)+(S+1);b[y++]=w,b[y++]=C,b[y++]=E,b[y++]=w,b[y++]=E,b[y++]=R}const A=new jt;A.setAttribute("position",new J(u,3)),A.setAttribute("uv",new J(d,2)),A.setAttribute("aAnatomyData",new J(m,4)),A.setAttribute("skinIndex",new Ce(v,4)),A.setAttribute("skinWeight",new Kt(g,4)),A.setIndex(new J(b,1)),A.computeVertexNormals(),lr(A,a,r),s.push(A)}return s}function $h(i,t,e,n,s,o,a){const r=new si(t,!1,"centripetal",.5),l=e.map(x=>i.boneIndexMap.get(x)),c=e.map(x=>i.bindWorldPositions.get(x)),h=(o+1)*(a+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4),f=new P(0,0,1);for(let x=0;x<=o;x++){const y=1-x/o,A=r.getPointAt(y),T=r.getTangentAt(y).negate().normalize(),S=f.clone().addScaledVector(T,-f.dot(T)).normalize(),w=new P().crossVectors(S,T).normalize(),C=.5+.5*_e(0,.34,y),E=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(y-.91)/.09),2)))*C;let R=.08,L=.092;if(n){const D=Ne(y,.54,.16)*.022,U=Ne(y,.86,.12)*.072;R=(.076+D+U)*E,L=(.09+Ne(y,.25,.18)*.028+D+U*.86)*E}else{const D=Ne(y,.52,.15)*.026,U=Ne(y,.86,.12)*.068;R=(.074+D+U)*E,L=(.094+Ne(y,.26,.19)*.038+D*1.06+U*.84)*E}const I=_e(.7,.94,y),k=1-_e(.08,.42,y);for(let D=0;D<=a;D++){const U=D/a,O=U*Math.PI*2,F=Math.sin(O),Z=Math.cos(O),G=F*s>0?Math.abs(F):0,$=1-.28*k*G;let q=1;if(I>.01&&Z>-.35){const z=Math.atan2(F,Math.max(.05,Z+.25)),xt=Math.cos(z*3.6);q+=.14*I*Math.max(-.12,xt)*_e(-.35,.45,Z)}let W=0;if(n&&y>.28&&y<.84){const z=Math.max(0,F*s*.62-Z*.78);W=Math.pow(z,3.6)*Math.sin((y-.28)/.56*Math.PI)*.028}else if(!n&&y>.34&&y<.84){const z=Math.max(0,F*s*.58-Z*.81);W=Math.pow(z,3.8)*Math.sin((y-.34)/.5*Math.PI)*.022}const nt=new P().copy(A).addScaledVector(w,(R*$*F+s*W*.65)*q).addScaledVector(S,(L*Z-W*.75)*q);y>.7&&nt.y<.004&&(nt.y=.002+Math.max(0,nt.y)*.14);const ot=x*(a+1)+D;u[ot*3]=nt.x,u[ot*3+1]=nt.y,u[ot*3+2]=nt.z,d[ot*2]=y*1.35,d[ot*2+1]=U*.85,m[ot*4]=.22,m[ot*4+1]=Math.min(1,W*22+Math.pow(Math.max(0,Math.sin(y*14)),4)*G*.65),m[ot*4+2]=Math.max(_e(.65,.96,y)*.35,Math.max(0,-F*s)*.45);const Q=Mi(nt,l,c,3.5),it=_e(.24,0,y)*.72,j=l[l.length-1],tt=_e(.74,.88,y),ft=(1-it)*(1-tt),et=Xe([j,l[0],Q.indices[0],Q.indices[1]],[tt,it*(1-tt),Q.weights[0]*ft,Q.weights[1]*ft]);v.set(et.indices,ot*4),g.set(et.weights,ot*4)}}const p=new Uint16Array(o*a*6);let _=0;for(let x=0;x<o;x++)for(let b=0;b<a;b++){const y=x*(a+1)+b,A=(x+1)*(a+1)+b,T=(x+1)*(a+1)+(b+1),S=x*(a+1)+(b+1);p[_++]=y,p[_++]=A,p[_++]=T,p[_++]=y,p[_++]=T,p[_++]=S}const M=new jt;return M.setAttribute("position",new J(u,3)),M.setAttribute("uv",new J(d,2)),M.setAttribute("aAnatomyData",new J(m,4)),M.setAttribute("skinIndex",new Ce(v,4)),M.setAttribute("skinWeight",new Kt(g,4)),M.setIndex(new J(p,1)),M.computeVertexNormals(),lr(M,o,a),M}function lr(i,t,e){const n=i.getAttribute("normal"),s=new P,o=new P;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function Fi(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function s2(i,t){return{jawSkinGeometry:je([a2(i,t),...r2(i,t)]),oralGumsGeometry:l2(i,t),teethGeometry:c2(i,t),tongueGeometry:h2(i,t),irisGeometry:qh(i,t,!1),corneaGeometry:qh(i,t,!0),clawsGeometry:u2(i,t)}}function o2(i,t){const e=1.66+Math.cos(i)*(t?.355:.34),n=Math.max(.02,Rs(e)-(t?.022:.028));return{x:Math.sin(i)*n,z:e}}function a2(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),m=new Float32Array(l*4);for(let p=0;p<=e;p++){const _=p/e,M=X.lerp(1.45,2.056,_),x=Rs(M),b=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(_-.87)/.13),2))),y=Math.max(.002,(x-.0032*Fi(1.55,1.65,M))*b),A=rs(M),T=.025*(1-Fi(1.45,1.59,M)),S=A+.0032+T,w=(.074-.03*_)*b;for(let C=0;C<=n;C++){const E=C/n,R=E*Math.PI*2,L=Math.sin(R),I=Math.cos(R),k=Math.exp(-Math.pow((_-.28)/.22,2))*.009,D=Math.exp(-Math.pow((_-.3)/.16,2))*Math.abs(L)*.008,U=(y+D)*L,O=-.019*I*(1-Math.pow(L,2))*Fi(1.57,1.66,M),F=I>=0?S+O:S+(w+k)*I,Z=p*(n+1)+C;c[Z*3]=U,c[Z*3+1]=F,c[Z*3+2]=M,h[Z*2]=_*.95,h[Z*2+1]=E*.85,u[Z*4]=.22,u[Z*4+1]=0,u[Z*4+2]=I<-.15?Fi(.92,.25,_)*-I*.72:0,u[Z*4+3]=_>.82?(_-.82)*2.2:0;const G=Fi(1.51,1.6,M),$=1-G,q=Fi(1.31,1.53,M),W=Fi(1.26,1.45,M),nt=$*(1-q),ot=Xe([s,o,a,r],[G,$*q,nt*(.52+.48*W),nt*(.48-.48*W)]);d.set(ot.indices,Z*4),m.set(ot.weights,Z*4)}}const v=new Uint16Array(e*n*6);let g=0;for(let p=0;p<e;p++)for(let _=0;_<n;_++){const M=p*(n+1)+_,x=(p+1)*(n+1)+_,b=(p+1)*(n+1)+(_+1),y=p*(n+1)+(_+1);v[g++]=M,v[g++]=x,v[g++]=b,v[g++]=M,v[g++]=b,v[g++]=y}const f=new jt;return f.setAttribute("position",new J(c,3)),f.setAttribute("uv",new J(h,2)),f.setAttribute("aAnatomyData",new J(u,4)),f.setAttribute("skinIndex",new Ce(d,4)),f.setAttribute("skinWeight",new Kt(m,4)),f.setIndex(new J(v,1)),f.computeVertexNormals(),f}function r2(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?12:8,a=t===0?10:6;for(const r of["L","R"]){const l=r==="L"?1:-1,c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let _=0;_<=a;_++){const M=_/a;for(let x=0;x<=o;x++){const b=x/o,y=X.lerp(1.56,1.72,b),A=rs(y),T=X.lerp(A-.015,A+.018,M),S=Rs(y)-.008,w=-.005*Math.sin(b*Math.PI)*Math.sin(M*Math.PI),C=l*(S+w),E=_*(o+1)+x;h[E*3]=C,h[E*3+1]=T,h[E*3+2]=y,u[E*2]=b*.25,u[E*2+1]=M*.25,d[E*4]=.22;const R=Fi(0,1,M);m.set([n,s,0,0],E*4),v.set([R,1-R,0,0],E*4)}}const g=new Uint16Array(o*a*6);let f=0;for(let _=0;_<a;_++)for(let M=0;M<o;M++){const x=_*(o+1)+M,b=(_+1)*(o+1)+M,y=(_+1)*(o+1)+(M+1),A=_*(o+1)+(M+1);l>0?(g[f++]=x,g[f++]=y,g[f++]=b,g[f++]=x,g[f++]=A,g[f++]=y):(g[f++]=x,g[f++]=b,g[f++]=y,g[f++]=x,g[f++]=y,g[f++]=A)}const p=new jt;p.setAttribute("position",new J(h,3)),p.setAttribute("uv",new J(u,2)),p.setAttribute("aAnatomyData",new J(d,4)),p.setAttribute("skinIndex",new Ce(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new J(g,1)),p.computeVertexNormals(),e.push(p)}return e}function l2(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?28:16,a=t===0?18:10;{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let _=0;_<=o;_++){const M=_/o,x=X.lerp(1.58,2.025,M),b=Math.max(.014,Rs(x)-.018),y=rs(x),A=Math.sin(M*Math.PI*12)*.0022*Math.sin(M*Math.PI);for(let T=0;T<=a;T++){const S=T/a,w=(S-.5)*2,C=Math.cos(w*Math.PI*.5)*.028*(1-.45*M),E=-.002*Math.exp(-Math.pow(w/.12,2)),R=Math.exp(-Math.pow((Math.abs(w)-.88)/.12,2))*-.005,L=w*b,I=y+.007+C+A*(1-Math.abs(w)*.5)+E+R,k=_*(a+1)+T;h[k*3]=L,h[k*3+1]=I,h[k*3+2]=x,u[k*2]=M*2,u[k*2+1]=S*2,d[k*4+3]=(1-M)*.65,m.set([n,0,0,0],k*4),v.set([1,0,0,0],k*4)}}const g=new Uint16Array(o*a*6);let f=0;for(let _=0;_<o;_++)for(let M=0;M<a;M++){const x=_*(a+1)+M,b=(_+1)*(a+1)+M,y=(_+1)*(a+1)+(M+1),A=_*(a+1)+(M+1);g[f++]=x,g[f++]=y,g[f++]=b,g[f++]=x,g[f++]=A,g[f++]=y}const p=new jt;p.setAttribute("position",new J(h,3)),p.setAttribute("uv",new J(u,2)),p.setAttribute("aAnatomyData",new J(d,4)),p.setAttribute("skinIndex",new Ce(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new J(g,1)),p.computeVertexNormals(),e.push(p)}{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let _=0;_<=o;_++){const M=_/o,x=X.lerp(1.58,2.015,M),b=Math.max(.012,Rs(x)-.022),y=rs(x);for(let A=0;A<=a;A++){const T=A/a,S=(T-.5)*2,w=-Math.cos(S*Math.PI*.5)*.016*(1-.35*M),C=Math.exp(-Math.pow((Math.abs(S)-.86)/.14,2))*.0055,E=S*b,R=y-.004+w+C,L=_*(a+1)+A;h[L*3]=E,h[L*3+1]=R,h[L*3+2]=x,u[L*2]=M*2,u[L*2+1]=T*2,d[L*4+3]=(1-M)*.55,m.set([s,0,0,0],L*4),v.set([1,0,0,0],L*4)}}const g=new Uint16Array(o*a*6);let f=0;for(let _=0;_<o;_++)for(let M=0;M<a;M++){const x=_*(a+1)+M,b=(_+1)*(a+1)+M,y=(_+1)*(a+1)+(M+1),A=_*(a+1)+(M+1);g[f++]=x,g[f++]=b,g[f++]=y,g[f++]=x,g[f++]=y,g[f++]=A}const p=new jt;p.setAttribute("position",new J(h,3)),p.setAttribute("uv",new J(u,2)),p.setAttribute("aAnatomyData",new J(d,4)),p.setAttribute("skinIndex",new Ce(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new J(g,1)),p.computeVertexNormals(),e.push(p)}const r=t===0?18:10,l=t===0?12:8;{const c=(r+1)*(l+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let _=0;_<=l;_++){const M=_/l;for(let x=0;x<=r;x++){const b=x/r,y=X.lerp(-Math.PI*.62,Math.PI*.62,b),A=1.66-Math.cos(y)*.1,T=Rs(Math.max(1.55,A))-.02,S=Math.sin(y)*T,w=rs(A),C=X.lerp(w-.016,w+.026,M),E=_*(r+1)+x;h[E*3]=S,h[E*3+1]=C,h[E*3+2]=A,u[E*2]=b*1.5,u[E*2+1]=M*1.5,d[E*4+3]=.95*Math.cos(y*.65);const R=Fi(0,1,M);m.set([n,s,0,0],E*4),v.set([R,1-R,0,0],E*4)}}const g=new Uint16Array(r*l*6);let f=0;for(let _=0;_<l;_++)for(let M=0;M<r;M++){const x=_*(r+1)+M,b=(_+1)*(r+1)+M,y=(_+1)*(r+1)+(M+1),A=_*(r+1)+(M+1);g[f++]=x,g[f++]=b,g[f++]=y,g[f++]=x,g[f++]=y,g[f++]=A}const p=new jt;p.setAttribute("position",new J(h,3)),p.setAttribute("uv",new J(u,2)),p.setAttribute("aAnatomyData",new J(d,4)),p.setAttribute("skinIndex",new Ce(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new J(g,1)),p.computeVertexNormals(),e.push(p)}return je(e)}function c2(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,m=X.lerp(-Math.PI*.42,Math.PI*.42,d),v=o2(m,r),g=v.x,f=v.z,p=rs(f)+(r?.01:-.009),_=1+.3*Math.exp(-Math.pow((Math.abs(m)-.52)/.25,2)),M=.0195*_*(.78+.22*Math.cos(m)),x=.0054*_,b=(o+1)*(a+1),y=new Float32Array(b*3),A=new Float32Array(b*2),T=new Float32Array(b*4),S=new Uint16Array(b*4),w=new Float32Array(b*4),C=-Math.sin(m),E=-Math.cos(m);for(let k=0;k<=o;k++){const D=r?1-k/o:k/o,U=x*(1-.88*Math.pow(D,1.25)),O=.0045*D*D,F=g+C*O,Z=p+h*M*D,G=f+E*O-.0025*D*D;for(let $=0;$<=a;$++){const q=$/a,W=q*Math.PI*2,nt=k*(a+1)+$;y[nt*3]=F+Math.sin(W)*U,y[nt*3+1]=Z,y[nt*3+2]=G+Math.cos(W)*U,A[nt*2]=D,A[nt*2+1]=q,S.set([c,0,0,0],nt*4),w.set([1,0,0,0],nt*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let k=0;k<o;k++)for(let D=0;D<a;D++){const U=k*(a+1)+D,O=(k+1)*(a+1)+D,F=(k+1)*(a+1)+(D+1),Z=k*(a+1)+(D+1);R[L++]=U,R[L++]=O,R[L++]=F,R[L++]=U,R[L++]=F,R[L++]=Z}const I=new jt;I.setAttribute("position",new J(y,3)),I.setAttribute("uv",new J(A,2)),I.setAttribute("aAnatomyData",new J(T,4)),I.setAttribute("skinIndex",new Ce(S,4)),I.setAttribute("skinWeight",new Kt(w,4)),I.setIndex(new J(R,1)),I.computeVertexNormals(),s.push(I)}}return je(s)}function h2(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(f=>i.boneIndexMap.get(f)),a=s.map(f=>i.bindWorldPositions.get(f)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let f=0;f<=e;f++){const p=f/e,_=X.lerp(1.62,1.96,p),M=rs(_)-.0035,x=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),b=(.068+.01*Math.sin(p*Math.PI)-.02*p)*x,y=(.013-.004*p)*x;for(let A=0;A<=n;A++){const T=A/n,S=T*Math.PI*2,w=Math.sin(S),C=Math.cos(S),E=C>.35?-.0035*Math.exp(-Math.pow(w/.24,2)):0,R=C>.2?.001*Math.sin(p*Math.PI*26)*Math.cos(w*Math.PI*9)*x:0,L=new P(b*w,M+y*C+E+R,_),I=f*(n+1)+A;l[I*3]=L.x,l[I*3+1]=L.y,l[I*3+2]=L.z,c[I*2]=p*2.5,c[I*2+1]=T*1.8;const k=Mi(L,o,a,3.8);u.set(k.indices,I*4),d.set(k.weights,I*4)}}const m=new Uint16Array(e*n*6);let v=0;for(let f=0;f<e;f++)for(let p=0;p<n;p++){const _=f*(n+1)+p,M=(f+1)*(n+1)+p,x=(f+1)*(n+1)+(p+1),b=f*(n+1)+(p+1);m[v++]=_,m[v++]=M,m[v++]=x,m[v++]=_,m[v++]=x,m[v++]=b}const g=new jt;return g.setAttribute("position",new J(l,3)),g.setAttribute("uv",new J(c,2)),g.setAttribute("aAnatomyData",new J(h,4)),g.setAttribute("skinIndex",new Ce(u,4)),g.setAttribute("skinWeight",new Kt(d,4)),g.setIndex(new J(m,1)),g.computeVertexNormals(),g}function qh(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?na:ia).clone(),u=new P(r*-.19,.98,.06).normalize(),d=new P().crossVectors(u,h).normalize(),m=new P().crossVectors(h,d).normalize(),v=e?Ka+8e-4:Ka,g=.94,f=(s+1)*(o+1),p=new Float32Array(f*3),_=new Float32Array(f*2),M=new Float32Array(f*4),x=new Uint16Array(f*4),b=new Float32Array(f*4);for(let S=0;S<=s;S++){const w=S/s*(e?Math.PI*.52:Math.PI*.88),C=Math.sin(w),E=Math.cos(w);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,I=Math.cos(L),k=Math.sin(L);let D=v;if(w<g){const G=1-w/g;D+=e?.0013*G*G:-.0025*G*G}const U=new P().addScaledVector(h,E).addScaledVector(d,C*I).addScaledVector(m,C*k).normalize(),O=new P().copy(l).addScaledVector(U,D),F=S*(o+1)+R;p[F*3]=O.x,p[F*3+1]=O.y,p[F*3+2]=O.z;const Z=Math.min(.498,w/g*.48);_[F*2]=.5+Z*I,_[F*2+1]=.5+Z*k,x.set([c,0,0,0],F*4),b.set([1,0,0,0],F*4)}}const y=new Uint16Array(s*o*6);let A=0;for(let S=0;S<s;S++)for(let w=0;w<o;w++){const C=S*(o+1)+w,E=(S+1)*(o+1)+w,R=(S+1)*(o+1)+(w+1),L=S*(o+1)+(w+1);y[A++]=C,y[A++]=E,y[A++]=R,y[A++]=C,y[A++]=R,y[A++]=L}const T=new jt;T.setAttribute("position",new J(p,3)),T.setAttribute("uv",new J(_,2)),T.setAttribute("aAnatomyData",new J(M,4)),T.setAttribute("skinIndex",new Ce(x,4)),T.setAttribute("skinWeight",new Kt(b,4)),T.setIndex(new J(y,1)),T.computeVertexNormals(),n.push(T)}return je(n)}function u2(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=hd(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,m=d,v=-u,g=.74,f=l.rootX+u*l.toeLength*g,p=l.rootZ+d*l.toeLength*g,_=l.rootY+Math.sin(g*Math.PI)*.009-.008*g*g+.002,M=l.toeLength*(1-g)+l.clawLength,x=l.tipRadius*.72,b=(n+1)*(s+1),y=new Float32Array(b*3),A=new Float32Array(b*2),T=new Float32Array(b*4),S=new Uint16Array(b*4),w=new Float32Array(b*4);for(let L=0;L<=n;L++){const I=L/n,k=x*Math.sqrt(Math.max(.06,1-Math.pow(I,1.72))),D=f+u*M*I,U=p+d*M*I,O=Math.max(.004,_-.028*Math.pow(I,1.82)+.004*Math.sin(I*Math.PI));for(let F=0;F<=s;F++){const Z=F/s,G=Z*Math.PI*2,$=Math.sin(G),q=Math.cos(G),W=L*(s+1)+F;y[W*3]=D+m*$*k*.72,y[W*3+1]=Math.max(.002,O+q*k*1.04),y[W*3+2]=U+v*$*k*.72,A[W*2]=I,A[W*2+1]=Z,S.set([c,0,0,0],W*4),w.set([1,0,0,0],W*4)}}const C=new Uint16Array(n*s*6);let E=0;for(let L=0;L<n;L++)for(let I=0;I<s;I++){const k=L*(s+1)+I,D=(L+1)*(s+1)+I,U=(L+1)*(s+1)+(I+1),O=L*(s+1)+(I+1);C[E++]=k,C[E++]=D,C[E++]=U,C[E++]=k,C[E++]=U,C[E++]=O}const R=new jt;R.setAttribute("position",new J(y,3)),R.setAttribute("uv",new J(A,2)),R.setAttribute("aAnatomyData",new J(T,4)),R.setAttribute("skinIndex",new Ce(S,4)),R.setAttribute("skinWeight",new Kt(w,4)),R.setIndex(new J(C,1)),R.computeVertexNormals(),e.push(R)}}return je(e)}function bo(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function d2(i,t){const e=[],n=[];for(const s of["L","R"]){const o=s==="L"?1:-1;e.push(...p2(i,s,o,t)),n.push(...f2(i,s,o,t)),e.push(...m2(i,s,t)),n.push(g2(i,s,t)),n.push(v2(i,s,o,t)),e.push(...x2(i,s,o,t)),n.push(_2(i,s,o,t))}return{wingSparsSkinGeometry:je(e),wingMembraneGeometry:je(n),dorsalSpinesGeometry:M2(i,t)}}function Qa(i,t,e,n,s,o,a=.42,r=.12){const l=new si(t),c=e.map(b=>i.boneIndexMap.get(b)),h=e.map(b=>i.bindWorldPositions.get(b)),u=(s+1)*(o+1),d=new Float32Array(u*3),m=new Float32Array(u*2),v=new Float32Array(u*4),g=new Uint16Array(u*4),f=new Float32Array(u*4),p=new P(0,1,0);for(let b=0;b<=s;b++){const y=b/s,A=l.getPointAt(y),T=l.getTangentAt(y).normalize();let S=p.clone().addScaledVector(T,-p.dot(T));S.lengthSq()<1e-4&&S.set(0,0,1),S.normalize();const w=new P().crossVectors(S,T).normalize(),C=y*(n.length-1),E=Math.min(n.length-2,Math.floor(C)),R=C-E;let L=X.lerp(n[E],n[E+1],R);y>.86&&(L*=Math.sqrt(Math.max(0,1-Math.pow((y-.86)/.14,2))));for(let I=0;I<=o;I++){const k=I/o,D=k*Math.PI*2,U=new P().copy(A).addScaledVector(w,L*Math.sin(D)).addScaledVector(S,L*a*Math.cos(D)),O=b*(o+1)+I;d[O*3]=U.x,d[O*3+1]=U.y,d[O*3+2]=U.z,m[O*2]=y*1.4,m[O*2+1]=k*.45,v[O*4]=.08,v[O*4+1]=bo(.3,.92,y)*.38,v[O*4+2]=r;const F=Mi(U,c,h,3.8);g.set(F.indices,O*4),f.set(F.weights,O*4)}}const _=new Uint16Array(s*o*6);let M=0;for(let b=0;b<s;b++)for(let y=0;y<o;y++){const A=b*(o+1)+y,T=(b+1)*(o+1)+y,S=(b+1)*(o+1)+(y+1),w=b*(o+1)+(y+1);_[M++]=A,_[M++]=T,_[M++]=S,_[M++]=A,_[M++]=S,_[M++]=w}const x=new jt;return x.setAttribute("position",new J(d,3)),x.setAttribute("uv",new J(m,2)),x.setAttribute("aAnatomyData",new J(v,4)),x.setAttribute("skinIndex",new Ce(g,4)),x.setAttribute("skinWeight",new Kt(f,4)),x.setIndex(new J(_,1)),x.computeVertexNormals(),x}function p2(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new P(e*.16,.9,.68),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(Qa(i,c,h,[.048,.052,.05,.042,.032,.02,.005],o,a,.58,.08));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const m=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),v=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(Qa(i,[u,m,v],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.013,.0085,.0025],r,l,.34,.1))}return s}function uo(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const m=d/t;for(let v=0;v<=i;v++){const g=v/i,f=e(g,m),p=d*(i+1)+v;s[p*3]=f.pos.x,s[p*3+1]=f.pos.y,s[p*3+2]=f.pos.z,o[p*2]=g*1.25,o[p*2+1]=m*1.25,a[p*4]=.06,a[p*4+1]=f.pinkStripe??0,a[p*4+2]=f.iceBlue??.14,a[p*4+3]=f.thinness,r.set(f.skin.indices,p*4),l.set(f.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let m=0;m<i;m++){const v=d*(i+1)+m,g=(d+1)*(i+1)+m,f=(d+1)*(i+1)+(m+1),p=d*(i+1)+(m+1);c[h++]=v,c[h++]=g,c[h++]=f,c[h++]=v,c[h++]=f,c[h++]=p}const u=new jt;return u.setAttribute("position",new J(s,3)),u.setAttribute("uv",new J(o,2)),u.setAttribute("uv1",new J(o,2)),u.setAttribute("aAnatomyData",new J(a,4)),u.setAttribute("skinIndex",new Ce(r,4)),u.setAttribute("skinWeight",new Kt(l,4)),u.setIndex(new J(c,1)),u.computeVertexNormals(),u}function f2(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),m=i.bindWorldPositions.get(`wingWrist_${t}`),v=i.bindWorldPositions.get(`wingElbow_${t}`),g=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(uo(o,Math.max(4,Math.floor(a*.5)),(x,b)=>{const y=new P().lerpVectors(new P(e*.25,.96,.74),m,x),A=x<.45?new P().lerpVectors(g,v,x/.45):new P().lerpVectors(v,m,(x-.45)/.55),T=new P().lerpVectors(A,y,b),S=Math.max(0,1-x*2.1),w=Math.max(0,(x-.45)*1.82),C=Math.max(0,1-S-w),E=Xe([c,l,r,0],[S,C,w,0]);return{pos:T,skin:E,thinness:.38+.34*b,pinkStripe:.18*b,iceBlue:.1}}));const f=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),_=i.boneIndexMap.get(`wingFinger_${t}_1_a`),M=i.boneIndexMap.get(`wingFinger_${t}_1_b`);s.push(uo(o,a,(x,b)=>{const y=new P(e*.21,.9,.62),A=new P(e*.18,.75,-.44),T=new P().lerpVectors(y,A,b),S=b<.5?new P().lerpVectors(m,f,b*2):new P().lerpVectors(f,p,(b-.5)*2),w=x<.45?new P().lerpVectors(g,v,x/.45):new P().lerpVectors(v,m,(x-.45)/.55),C=new P().lerpVectors(T,S,x),E=new P().lerpVectors(w,C,Math.pow(b,.85));E.z+=Math.sin(x*Math.PI)*.045*Math.pow(b,1.8),E.y+=Math.sin(x*Math.PI)*Math.sin(b*Math.PI)*.022;const R=1-x,L=x,I=b<.36?h:b<.72?u:d,k=b<.25?l:b<.55?r:_,D=b<.55?_:M,U=b<.55?b/.55:(b-.55)/.45,O=Xe([I,k,D,c],[R*.88,L*(1-U),L*U,R*.12]),F=Math.pow(.5+.5*Math.sin(b*14+x*4.5),3)*.55;return{pos:E,skin:O,thinness:.55+.4*b,pinkStripe:F*x,iceBlue:(1-x)*.35+.08}}));for(let x=1;x<=5;x++){const b=i.bindWorldPositions.get(`wingFinger_${t}_${x}_a`),y=i.bindWorldPositions.get(`wingFinger_${t}_${x}_b`),A=i.bindWorldPositions.get(`wingFinger_${t}_${x+1}_a`),T=i.bindWorldPositions.get(`wingFinger_${t}_${x+1}_b`),S=i.boneIndexMap.get(`wingFinger_${t}_${x}_a`),w=i.boneIndexMap.get(`wingFinger_${t}_${x}_b`),C=i.boneIndexMap.get(`wingFinger_${t}_${x+1}_a`),E=i.boneIndexMap.get(`wingFinger_${t}_${x+1}_b`);s.push(uo(o,a,(R,L)=>{const I=L<.5?new P().lerpVectors(m,b,L*2):new P().lerpVectors(b,y,(L-.5)*2),k=L<.5?new P().lerpVectors(m,A,L*2):new P().lerpVectors(A,T,(L-.5)*2),D=new P().lerpVectors(I,k,R),U=x===5?-.028:.042,O=new P().subVectors(m,D).normalize();D.addScaledVector(O,U*Math.sin(R*Math.PI)*Math.pow(L,2.2)),D.y+=Math.sin(R*Math.PI)*Math.sin(L*Math.PI)*.018;let F;if(L<.5){const $=L*2;F=Xe([r,S,C,0],[1-$,$*(1-R),$*R,0])}else{const $=(L-.5)*2;F=Xe([S,w,C,E],[(1-R)*(1-$),(1-R)*$,R*(1-$),R*$])}const Z=Math.sin(L*18-x*.65+Math.sin(R*Math.PI)*1.4),G=bo(.28,.94,Z)*bo(.14,.58,L)*.88;return{pos:D,skin:F,thinness:.62+.38*L,pinkStripe:G,iceBlue:(1-L)*.24+.06}}))}return s}function m2(i,t,e){const n=t==="L"?1:-1,s=[],o=e===0?10:6,a=e===0?8:6;return cd.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new P(n*r.rootX,r.rootY,r.rootZ),u=new P(n*r.tipX,r.tipY,r.tipZ);s.push(Qa(i,[h,u],[c],[.009,.0022],o,a,.35,.2))}),s}function g2(i,t,e){const n=t==="L"?1:-1,s=e===0?16:9,o=i.boneIndexMap.get(`pelvicFin_${t}_1`),a=i.boneIndexMap.get(`pelvicFin_${t}_2`),r=i.boneIndexMap.get(`pelvicFin_${t}_3`),l=new P(n*.16,.72,-.7),c=new P(n*.095,.52,-1.46);return uo(s,s,(h,u)=>{const d=new P().lerpVectors(l,c,h),m=.29*Math.sin(Math.pow(h,.74)*Math.PI),v=d.clone().add(new P(n*m,-.025*m,-.08*Math.sin(h*Math.PI))),g=new P().lerpVectors(d,v,u),f=Math.max(0,1-h*2),p=Math.max(0,(h-.5)*2),_=Math.max(0,1-f-p),M=Xe([o,a,r,0],[f,_,p,0]);return{pos:g,skin:M,thinness:.52+.45*u,pinkStripe:u*.38,iceBlue:.26}})}function v2(i,t,e,n){const s=n===0?12:6,o=i.boneIndexMap.get("tail_7"),a=i.boneIndexMap.get("tail_8"),r=new P(e*.02,.12,-2.92),l=new P(e*.018,.116,-3.22);return uo(s,s,(c,h)=>{const u=new P().lerpVectors(r,l,c),d=.115*Math.sin(Math.pow(c,.75)*Math.PI),m=u.clone().add(new P(e*d,.008*Math.sin(c*Math.PI),-.025*c)),v=new P().lerpVectors(u,m,h),g=Xe([o,a,0,0],[1-c,c,0,0]);return{pos:v,skin:g,thinness:.55+.4*h,pinkStripe:h*.35,iceBlue:.28}})}function x2(i,t,e,n){const s=[],o=n===0?10:6,a=n===0?8:6;return ld.forEach((r,l)=>{const c=`tailFin_${t}_${l+1}`,h=new P(e*r.rootX,r.rootY,r.rootZ),u=new P().lerpVectors(h,new P(e*r.tipX,r.tipY,r.tipZ),.92);s.push(Qa(i,[h,u],[c],[.0075,.0018],o,a,.34,.24))}),s}function _2(i,t,e,n){const s=n===0?28:n===1?16:10,o=n===0?16:n===1?10:6,a=i.boneIndexMap.get(`tailFinHinge_${t}`),r=i.boneIndexMap.get(`tailFin_${t}_1`),l=i.boneIndexMap.get(`tailFin_${t}_3`),c=i.boneIndexMap.get(`tailFin_${t}_5`),h=-3.22,u=-4.08;return uo(s,o,(d,m)=>{const v=X.lerp(h,u,d),g=e*.016,f=.116,p=Math.sin(Math.pow(d,.6)*Math.PI),_=.455*p*(1+.1*Math.sin(d*Math.PI*2-.6)),M=.095*Math.sin(Math.min(1,d/.52)*Math.PI)*(d<.52?1:0),x=-.115*Math.sin(Math.max(0,(d-.5)/.5)*Math.PI),b=v+M+x,y=g+e*_,A=f+.012*p,T=Math.sin(d*Math.PI*5)*.0028*Math.sin(m*Math.PI)*p,S=new P(X.lerp(g,y,m),X.lerp(f,A,m)+T,X.lerp(v,b,m)),w=Math.max(0,1-d*2.2),C=Math.max(0,(d-.55)*2.2),E=Math.max(0,1-w-C),R=Xe([a,r,l,c],[.25,w*.75,E*.75,C*.75]);return{pos:S,skin:R,thinness:.54+.44*m,pinkStripe:bo(.32,.94,m)*.52,iceBlue:.34*(1-m*.35)}})}function M2(i,t){const e=t===0?84:t===1?48:28,n=t===0?10:6,s=["tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest"],o=s.map(_=>i.boneIndexMap.get(_)),a=s.map(_=>i.bindWorldPositions.get(_));new si([new P(0,.14,-3.02),new P(0,.23,-2.24),new P(0,.45,-1.5),new P(0,.82,-.78),new P(0,.94,-.32),new P(0,1.01,.18),new P(0,1.07,.6)]);const r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*3),h=new Float32Array(r*2),u=new Float32Array(r*4),d=new Uint16Array(r*4),m=new Float32Array(r*4);for(let _=0;_<=e;_++){const M=_/e,x=X.lerp(-3.02,.66,M),b=Kx(x),y=b.point,A=b.up,T=bo(0,.14,M)*bo(1,.82,M),S=(.012+.024*Math.sin(Math.pow(M,.78)*Math.PI))*T,w=.015*(.45+.55*T),C=Mi(y,o,a,3.8);for(let E=0;E<=n;E++){const R=E/n,L=Math.sin(R*Math.PI),I=Math.cos(R*Math.PI)*w*(1-.55*L),k=-.016+(S+.016)*Math.pow(L,.9),D=y.clone().addScaledVector(A,k);D.x=I;const U=D.clone().addScaledVector(A,S*.35*L),O=_*(n+1)+E;l[O*3]=D.x,l[O*3+1]=D.y,l[O*3+2]=D.z,c[O*3]=U.x,c[O*3+1]=U.y,c[O*3+2]=U.z,h[O*2]=M*3,h[O*2+1]=R,u[O*4]=.08,u[O*4+1]=L*.72,u[O*4+2]=L*.28,u[O*4+3]=L*.88,d.set(C.indices,O*4),m.set(C.weights,O*4)}}const v=new Uint16Array(e*n*6);let g=0;for(let _=0;_<e;_++)for(let M=0;M<n;M++){const x=_*(n+1)+M,b=(_+1)*(n+1)+M,y=(_+1)*(n+1)+(M+1),A=_*(n+1)+(M+1);v[g++]=x,v[g++]=y,v[g++]=b,v[g++]=x,v[g++]=A,v[g++]=y}const f=new jt;f.setAttribute("position",new J(l,3)),f.setAttribute("uv",new J(h,2)),f.setAttribute("uv1",new J(h,2)),f.setAttribute("aAnatomyData",new J(u,4)),f.setAttribute("skinIndex",new Ce(d,4)),f.setAttribute("skinWeight",new Kt(m,4)),f.setIndex(new J(v,1));const p=new J(c,3);return p.name="dorsalFlex",f.morphAttributes.position=[p],f.computeVertexNormals(),f}function w2(){const i=Ux(),t=qx(),e=new xi;e.name="LightFury_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s=[],o={},a={};for(const l of[0,1,2]){const c=new xi;c.name=`LightFury_LOD${l}`;const h=Jx(i,l),u=s2(i,l),d=d2(i,l),m=je([h,u.jawSkinGeometry,d.wingSparsSkinGeometry]),v=u.clawsGeometry,g=(R,L,I,k=!0,D=!0)=>{const U=new Iu(L,I);return U.name=`${R}_LOD${l}`,U.castShadow=k,U.receiveShadow=D,U.frustumCulled=!1,U.bind(i.skeleton,new de),U},f=g("LightFuryBodyAndHeadSkin",m,t.skinMaterial),p=g("LightFuryIridescentWingsAndHeartTail",d.wingMembraneGeometry,t.wingMembraneMaterial),_=g("LightFuryContinuousDorsalSail",d.dorsalSpinesGeometry,t.skinMaterial);n.push(_);const M=g("LightFuryOralGums",u.oralGumsGeometry,t.oralGumMaterial,!1,!0),x=g("LightFuryRetractableTeeth",u.teethGeometry,t.teethMaterial,!0,!0),b=g("LightFuryArticulatedTongue",u.tongueGeometry,t.tongueMaterial,!1,!0),y=g("LightFurySkyBlueIrises",u.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),A=g("LightFuryRefractiveCorneas",u.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1),T=g("LightFurySlatePearlClaws",v,t.clawMaterial,!0,!0);for(const R of[f,_,T,M,x,b,y])R.renderOrder=11;A.renderOrder=12,p.renderOrder=13;const S=[f,p,_,M,x,b,y,A,T],w=[["LFDepth_BodySkin",m,t.hullDepthMaterial,!1],["LFDepth_WingMembrane",d.wingMembraneGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_DorsalSail",d.dorsalSpinesGeometry,t.hullDepthMaterial,!0],["LFDepth_Gums",u.oralGumsGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_Teeth",u.teethGeometry,t.hullDepthMaterial,!1],["LFDepth_Tongue",u.tongueGeometry,t.hullDepthMaterial,!1],["LFDepth_Irises",u.irisGeometry,t.hullDepthMaterial,!1],["LFDepth_Claws",v,t.hullDepthMaterial,!1]];for(const[R,L,I,k]of w){const D=g(R,L,I,!1,!1);D.renderOrder=10,D.visible=!1,D.userData.excludeFromExport=!0,c.add(D),s.push(D),k&&n.push(D)}let C=0,E=0;for(const R of S){c.add(R);const L=R.geometry.getIndex();C+=L?L.count/3:R.geometry.getAttribute("position").count/3,E+=R.geometry.getAttribute("position").count}c.visible=l===0,e.add(c),o[l]=c,a[l]={lod:l,triangles:Math.round(C),vertices:E,subMeshCount:S.length}}const r={rootGroup:e,rig:i,materials:t,lodGroups:o,dorsalSailMeshes:n,hullDepthMeshes:s,lodStats:a,activeLOD:0,autoLOD:!1,setActiveLOD(l){r.activeLOD=l;for(const c of[0,1,2])o[c].visible=c===l},updateAutoLOD(l){if(!r.autoLOD)return r.activeLOD;const c=l<9.5?0:l<20?1:2;return c!==r.activeLOD&&r.setActiveLOD(c),r.activeLOD}};return r}function ko(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function yi(i){const t=sd.find(e=>e.id===i);return{...Ke,...t?t.patch:{}}}function ui(i){const t=ud.find(e=>e.id===i);return{...Ze,...t?t.patch:{}}}function Zh(i,t,e,n){const s=Object.keys(t);for(let o=0;o<s.length;o++){const a=s[o],r=t[a],l=e[a];typeof r=="number"&&typeof l=="number"?i[a]=r+(l-r)*n:typeof l=="boolean"&&(i[a]=l)}}function y2(i,t,e,n,s,o,a,r,l){l.followCamera=!1,l.loop=!1;let c=Math.floor(Date.now()%864e5*1.37)+17389;const h=()=>(c=c*1664525+1013904223>>>0,c/4294967296),u=(U,O)=>U+(O-U)*h();let d=0,m=!1;const v=()=>{const U=d===0?.55:m?.25:.8,O=h()<U;m=O,d++;const F=O?{presetId:"stormy-squall",holdSec:u(18,23),fadeSec:12.5,sunDriftStartDeg:0,sunDriftEndDeg:1.5,ocean:{waveAmplitude:1.36,waveSpeed:1.44,seaChoppiness:.84}}:{presetId:"misty-overcast",holdSec:u(18,23),fadeSec:12,sunDriftStartDeg:-1.5,sunDriftEndDeg:2,ocean:{waveAmplitude:.82,waveSpeed:1.08,seaChoppiness:.58}};return[{presetId:"golden-hour",holdSec:u(21,25),fadeSec:12,sunDriftStartDeg:1.4,sunDriftEndDeg:-1.6,ocean:{...so}},{presetId:"dawn-dusk",holdSec:u(17,21),fadeSec:12.5,sunDriftStartDeg:1.2,sunDriftEndDeg:-1.4,ocean:{waveAmplitude:.38,waveSpeed:.8,seaChoppiness:.3}},{presetId:"starlit-night",holdSec:u(22,26),fadeSec:13,sunDriftStartDeg:-.8,sunDriftEndDeg:1.2,ocean:{waveAmplitude:.28,waveSpeed:.68,seaChoppiness:.22}},F,{presetId:"clear-day",holdSec:u(21,25),fadeSec:12.5,sunDriftStartDeg:-5,sunDriftEndDeg:-12,ocean:{waveAmplitude:.62,waveSpeed:.94,seaChoppiness:.44}}]};let g=v(),f=v(),p=0,_=0,M=0,x=0,b=0;const y={...Ke},A={...Ze},T={...Ke},S={...Ze},w={...Ke},C={...Ze};let E=0;const R=()=>{if(E++,E===1)return"duet";const U=h();return E%2===1?U<.72?"duet":U<.86?"light-fury":"toothless":U<.42?"light-fury":U<.82?"toothless":"duet"},L=U=>{const O=[];if(O.push({name:"Noble Cliff Watch",durationSec:U?u(5.5,7):u(4.2,5.6),toothless:yi("hero-perch"),lightFury:ui("serene-mate")}),x>.35){const F=h()<.55?"lightning-storm":"alpha-roar";O.push({name:"Storm Alpha Display",durationSec:u(6.2,8),toothless:yi(F),lightFury:ui(h()<.5?"strike-hiss":"hidden-world-biolum")})}else if(M>.35)O.push({name:"Hidden World Bioluminescence",durationSec:u(6.8,8.6),toothless:{...yi("curious-tilt"),alphaGlow:.88,biolumGlow:.96,wingUnfurl:.68},lightFury:ui("hidden-world-biolum")}),h()<.75&&O.push({name:"Optical Mirror-Cloak Shimmer",durationSec:u(5.4,7),toothless:{...yi("gummy-smile"),alphaGlow:.62,biolumGlow:.88},lightFury:ui("mirror-cloak")});else{const F=h();F<.36?(O.push({name:"Courtship Wing-Cape & Coy Peek",durationSec:u(6,7.8),toothless:yi("courtship-cape"),lightFury:ui("coy-wing-veil")}),O.push({name:"Gummy Grin & Happy Purr",durationSec:u(5.5,7.2),toothless:yi("gummy-smile"),lightFury:ui("happy-purr")})):F<.72?(O.push({name:"Curious Feline Tilts",durationSec:u(5.6,7.2),toothless:yi("curious-tilt"),lightFury:ui("curious-cat")}),O.push({name:"Gummy Smile & Coy Wing Veil",durationSec:u(5.8,7.4),toothless:yi("gummy-smile"),lightFury:h()<.55?ui("happy-purr"):ui("coy-wing-veil")})):(O.push({name:"Light Fury Shimmer & Noble Gaze",durationSec:u(5.8,7.4),toothless:yi("curious-tilt"),lightFury:ui(b>.25?"mirror-cloak":"happy-purr")}),O.push({name:"Courtship Wing Display",durationSec:u(5.6,7.2),toothless:yi("courtship-cape"),lightFury:ui("curious-cat")}))}return O.push({name:"Pre-Flight Horizon Focus",durationSec:u(3.4,4.6),toothless:{...Ke,forelegStance:-.18,earPerk:.92,wingUnfurl:.58},lightFury:{...Ze,forelegStance:-.16,earPerk:.9,wingUnfurl:.52}}),O};let I={kind:"perched-sequence",vignettes:L(!0),vIdx:0,vTimer:0,blendDur:2.2};const k=new P,D=new P;return{update(U,O){l.followCamera=!1;const F=g[p];p+1<g.length?g[p+1]:f[0];const Z=F.holdSec+F.fadeSec;_+=U,_>=Z&&(_-=Z,p++,p>=g.length&&(g=f,f=v(),p=0));const G=g[p],$=p+1<g.length?g[p+1]:f[0],q=G.holdSec+G.fadeSec,W=X.clamp(_/Math.max(.1,q),0,1),nt=_<=G.holdSec?0:(_-G.holdSec)/Math.max(.1,G.fadeSec),ot=ko(nt),Q=X.lerp(G.sunDriftStartDeg,G.sunDriftEndDeg,ko(W))*(1-ot)+$.sunDriftStartDeg*ot,it=Math.sin(O*.025)*4.5;if(e.blendPresets(G.presetId,$.presetId,ot,i,t,Q,it),n.setOceanParams({waveAmplitude:X.lerp(G.ocean.waveAmplitude,$.ocean.waveAmplitude,ot),waveSpeed:X.lerp(G.ocean.waveSpeed,$.ocean.waveSpeed,ot),seaChoppiness:X.lerp(G.ocean.seaChoppiness,$.ocean.seaChoppiness,ot)}),M=e.sharedUniforms.uNightFactor.value,x=(G.presetId==="stormy-squall"?1-ot:0)+($.presetId==="stormy-squall"?ot:0),b=(G.presetId==="dawn-dusk"?1-ot:0)+($.presetId==="dawn-dusk"?ot:0),I.kind==="perched-sequence"){const j=I.vignettes[I.vIdx];I.vTimer+=U;const tt=ko(I.vTimer/Math.max(.25,I.blendDur));Zh(w,T,j.toothless,tt),Zh(C,S,j.lightFury,tt);const ft=Math.sin(O*.62),et=Math.cos(O*.47+1.1),z=ko((M-.15)/.65)*.88+b*.24,xt=ko(x)*.72;w.headYaw=X.clamp(w.headYaw+ft*.08,-1,1),w.tailYaw=X.clamp(w.tailYaw+et*.1,-1,1),w.biolumGlow=Math.max(w.biolumGlow,z),w.alphaGlow=Math.max(w.alphaGlow,z*.65,xt),C.headYaw=X.clamp(C.headYaw-ft*.08,-1,1),C.tailYaw=X.clamp(C.tailYaw-et*.11,-1,1),C.biolumGlow=Math.max(C.biolumGlow,z*.96),C.radiantGlow=Math.max(C.radiantGlow,.34+z*.34),o.setState(w),r.setState(C),I.vTimer>=j.durationSec&&(Object.assign(T,w),Object.assign(S,C),I.vIdx++,I.vTimer=0,I.blendDur=u(2.1,2.9),I.vIdx>=I.vignettes.length&&(I={kind:"flight",mode:R(),started:!1}))}else if(!I.started)I.started=!0,l.setSubjectMode(I.mode),l.followCamera=!1,l.loop=!1,l.startFromBeginning();else if(!l.isPlaying)Object.assign(T,y),Object.assign(S,A),I={kind:"perched-sequence",vignettes:L(!1),vIdx:0,vTimer:0,blendDur:2.3};else if(I.mode!=="duet"){const j=s.rig.boneMap.get("chest"),tt=a.rig.boneMap.get("chest");if(j&&tt)if(I.mode==="light-fury"){tt.getWorldPosition(k),j.getWorldPosition(D);const ft=k.x-D.x,et=k.y-D.y,z=k.z-D.z,xt=Math.max(.5,Math.hypot(ft,z)),gt=X.clamp(Math.atan2(ft,z)*.72,-.85,.85),Et=X.clamp(Math.atan2(et,xt)*.85,-.45,.72);o.setState({...Ke,neckYaw:gt*.55,headYaw:gt*.85,headPitch:Et,eyeYaw:X.clamp(gt*.5,-.6,.6),earPerk:.94,biolumGlow:Math.max(0,M*.85),alphaGlow:Math.max(.08,M*.55,x*.65)})}else{j.getWorldPosition(k),tt.getWorldPosition(D);const ft=k.x-D.x,et=k.y-D.y,z=k.z-D.z,xt=Math.max(.5,Math.hypot(ft,z)),gt=X.clamp(Math.atan2(ft,z)*.72,-.85,.85),Et=X.clamp(Math.atan2(et,xt)*.85,-.45,.72);r.setState({...Ze,neckYaw:gt*.55,headYaw:gt*.85,headPitch:Et,headRoll:.18,eyeYaw:X.clamp(gt*.5,-.6,.6),earPerk:.92,biolumGlow:Math.max(0,M*.9)})}}}}}const Ja=[{stage:1,roman:"I",label:"Whisper",subtitle:"Featherlight 60 FPS",msaaSamples:0,shadowMapSize:1024,bloomScale:.55,anisotropy:2,computeScale:i=>Math.max(.68,Math.min(i*.72,.95))},{stage:2,roman:"II",label:"Silk",subtitle:"Balanced Native",msaaSamples:2,shadowMapSize:1536,bloomScale:.75,anisotropy:4,computeScale:i=>Math.min(Math.max(i*.95,1),1.3)},{stage:3,roman:"III",label:"Clarity",subtitle:"Enhanced HD",msaaSamples:4,shadowMapSize:2048,bloomScale:.92,anisotropy:8,computeScale:i=>Math.min(Math.max(i*1.25,1.42),1.75)},{stage:4,roman:"IV",label:"Cinema",subtitle:"High-Fidelity 2K+",msaaSamples:4,shadowMapSize:3072,bloomScale:1,anisotropy:16,computeScale:i=>Math.min(Math.max(i*1.6,2),2.18)},{stage:5,roman:"V",label:"Masterpiece",subtitle:"Ultra SSAA + 8× MSAA",msaaSamples:8,shadowMapSize:4096,bloomScale:1.25,anisotropy:16,computeScale:i=>Math.min(Math.max(i*2,2.65),3)}],gd="our-world-quality-stage-v1";function b2(){try{const i=window.localStorage?.getItem(gd);if(i){const t=Number(i);if(t>=1&&t<=5)return t}}catch{}return typeof window<"u"&&window.innerWidth<=780?3:4}function S2(i,t,e,n,s,o=b2()){let a=o;const r=[],l=Math.max(0,i.capabilities.maxSamples||4),c=Math.max(1,i.capabilities.getMaxAnisotropy()||4),h=Math.min(i.capabilities.maxTextureSize||8192,7680),u=v=>{const g=Math.min(v,c),f=new Set;t.traverse(p=>{const _=p;if(!_.material)return;const M=Array.isArray(_.material)?_.material:[_.material];for(const x of M){const b=x;for(const y of["map","normalMap","roughnessMap","aoMap","iridescenceThicknessMap","emissiveMap"]){const A=b[y];A instanceof wn&&!f.has(A)&&(f.add(A),A.anisotropy!==g&&(A.anisotropy=g,A.needsUpdate=!0))}}})};let d={stage:a,spec:Ja[a-1],pixelRatio:1,renderWidth:1920,renderHeight:1080,msaaSamples:4,shadowMapSize:2048};const m=(v,g,f,p)=>{const _=Ja[v-1],M=Math.max(1,Math.floor(g)),x=Math.max(1,Math.floor(f)),b=Math.max(1,window.devicePixelRatio||1),y=_.computeScale(b),A=Math.min(h/M,h/x),T=Math.max(.5,Math.min(y,A)),S=Math.max(1,Math.floor(M*T)),w=Math.max(1,Math.floor(x*T)),C=Math.min(_.msaaSamples,l);if(i.setPixelRatio(T),i.setSize(M,x),p||d.msaaSamples!==C){const L=new Zn(S,w,{type:_i,samples:C});e.reset(L)}e.setPixelRatio(T),e.setSize(M,x);const E=Math.max(64,Math.floor(M*T*_.bloomScale*.5)),R=Math.max(64,Math.floor(x*T*_.bloomScale*.5));n.resolution.set(E,R),(s.shadow.mapSize.width!==_.shadowMapSize||s.shadow.mapSize.height!==_.shadowMapSize)&&(s.shadow.mapSize.set(_.shadowMapSize,_.shadowMapSize),s.shadow.map&&(s.shadow.map.dispose(),s.shadow.map=null)),p&&u(_.anisotropy),d={stage:v,spec:_,pixelRatio:T,renderWidth:S,renderHeight:w,msaaSamples:C,shadowMapSize:_.shadowMapSize};for(const L of r)L(d);return d};return m(a,window.innerWidth,window.innerHeight,!0),{getCurrentStage:()=>a,getMetrics:()=>d,setStage(v){const g=Math.max(1,Math.min(5,Math.round(v))),f=g!==a;a=g;try{window.localStorage?.setItem(gd,String(a))}catch{}return m(a,window.innerWidth,window.innerHeight,f||!0)},handleResize(v,g){return m(a,v,g,!1)},onChange(v){r.push(v)}}}function jh(){return new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})})}function A2(){const i=document.getElementById("loading-curtain"),t=document.getElementById("lc-heart-left"),e=document.getElementById("lc-heart-right");let n=8,s=6,o=0;const a=l=>{const h=(100-Math.max(0,Math.min(100,l))).toFixed(2);t&&(t.style.strokeDashoffset=h),e&&(e.style.strokeDashoffset=h)},r=()=>{const l=n-s;Math.abs(l)>.12?s+=l*.22:s=n,a(s),(s<99.9||n<100)&&(o=requestAnimationFrame(r))};return o=requestAnimationFrame(r),a(8),{async advanceTo(l){n=Math.max(n,Math.min(100,l)),await jh()},async completeAndDissolve(l){n=100,s=100,a(100),i&&i.classList.add("is-completing"),window.__bloomLoadingComplete?.(),await jh(),await new Promise(c=>setTimeout(c,380)),i&&(i.classList.add("is-dissolving"),setTimeout(()=>{o&&cancelAnimationFrame(o),window.__stopLoadingAmbient?.(),i.remove()},1320)),l.classList.remove("hud-entering")}}}const Kh={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class tr{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new N2(t)}),this.register(function(t){return new U2(t)}),this.register(function(t){return new O2(t)}),this.register(function(t){return new H2(t)}),this.register(function(t){return new W2(t)}),this.register(function(t){return new V2(t)}),this.register(function(t){return new k2(t)}),this.register(function(t){return new z2(t)}),this.register(function(t){return new B2(t)}),this.register(function(t){return new G2(t)}),this.register(function(t){return new X2(t)}),this.register(function(t){return new Y2(t)}),this.register(function(t){return new $2(t)}),this.register(function(t){return new q2(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,s){const o=new D2,a=[];for(let r=0,l=this.pluginCallbacks.length;r<l;r++)a.push(this.pluginCallbacks[r](o));o.setPlugins(a),o.setTextureUtils(this.textureUtils),o.writeAsync(t,e,s).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(s,o){n.parse(t,s,o,e)})}}const Pe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Jr="KHR_mesh_quantization",qn={};qn[zn]=Pe.NEAREST;qn[pu]=Pe.NEAREST_MIPMAP_NEAREST;qn[zo]=Pe.NEAREST_MIPMAP_LINEAR;qn[gi]=Pe.LINEAR;qn[Da]=Pe.LINEAR_MIPMAP_NEAREST;qn[ns]=Pe.LINEAR_MIPMAP_LINEAR;qn[es]=Pe.CLAMP_TO_EDGE;qn[Ai]=Pe.REPEAT;qn[Wa]=Pe.MIRRORED_REPEAT;const Qh={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},T2=new Bt,Jh=12,E2=1179937895,C2=2,tu=8,P2=1313821514,R2=5130562;function Ho(i,t){return i.length===t.length&&i.every(function(e,n){return e===t[n]})}function L2(i){return new TextEncoder().encode(i).buffer}function I2(i){return Ho(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function F2(i,t,e){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let o=0;o<i.itemSize;o++){let a;i.itemSize>4?a=i.array[s*i.itemSize+o]:(o===0?a=i.getX(s):o===1?a=i.getY(s):o===2?a=i.getZ(s):o===3&&(a=i.getW(s)),i.normalized===!0&&(a=X.normalize(a,i.array))),n.min[o]=Math.min(n.min[o],a),n.max[o]=Math.max(n.max[o],a)}return n}function vd(i){return Math.ceil(i/4)*4}function tl(i,t=0){const e=vd(i.byteLength);if(e!==i.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(i)),t!==0)for(let s=i.byteLength;s<e;s++)n[s]=t;return n.buffer}return i}function eu(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function nu(i,t){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),i.convertToBlob({type:t,quality:e})}class D2{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+er}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const s=this,o=s.buffers,a=s.json;n=s.options;const r=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(o,{type:"application/octet-stream"}),h=Object.keys(r),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const m=tl(d.result),v=new DataView(new ArrayBuffer(tu));v.setUint32(0,m.byteLength,!0),v.setUint32(4,R2,!0);const g=tl(L2(JSON.stringify(a)),32),f=new DataView(new ArrayBuffer(tu));f.setUint32(0,g.byteLength,!0),f.setUint32(4,P2,!0);const p=new ArrayBuffer(Jh),_=new DataView(p);_.setUint32(0,E2,!0),_.setUint32(4,C2,!0);const M=Jh+f.byteLength+g.byteLength+v.byteLength+m.byteLength;_.setUint32(8,M,!0);const x=new Blob([p,f,g,v,m],{type:"application/octet-stream"}),b=new FileReader;b.readAsArrayBuffer(x),b.onloadend=function(){e(b.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const m=d.result;a.buffers[0].uri=m,e(a)}}else e(a)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const o=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&o.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const a in o.gltfExtensions)e.extensions[a]=o.gltfExtensions[a],s[a]=!0;delete o.gltfExtensions}Object.keys(o).length>0&&(e.extras=o)}catch(o){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+o.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new P;for(let s=0,o=t.count;s<o;s++)if(Math.abs(n.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),s=new P;for(let o=0,a=n.count;o<a;o++)s.fromBufferAttribute(n,o),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(o,s.x,s.y,s.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(s.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(m){return m.colorSpace===Mn?function(g){return g<.04045?g*.0773993808:Math.pow(g*.9478672986+.0521327014,2.4)}:function(g){return g}}t instanceof Nr&&(t=await this.decompressTextureAsync(t)),e instanceof Nr&&(e=await this.decompressTextureAsync(e));const s=t?t.image:null,o=e?e.image:null,a=Math.max(s?s.width:0,o?o.width:0),r=Math.max(s?s.height:0,o?o.height:0),l=eu();l.width=a,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,r);const h=c.getImageData(0,0,a,r);if(s){c.drawImage(s,0,0,a,r);const m=n(t),v=c.getImageData(0,0,a,r).data;for(let g=2;g<v.length;g+=4)h.data[g]=m(v[g]/256)*256}if(o){c.drawImage(o,0,0,a,r);const m=n(e),v=c.getImageData(0,0,a,r).data;for(let g=1;g<v.length;g+=4)h.data[g]=m(v[g]/256)*256}c.putImageData(h,0,0);const d=(t||e).clone();return d.source=new ir(l),d.colorSpace=ii,d.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,s,o){const a=this.json;a.bufferViews||(a.bufferViews=[]);let r;switch(e){case Pe.BYTE:case Pe.UNSIGNED_BYTE:r=1;break;case Pe.SHORT:case Pe.UNSIGNED_SHORT:r=2;break;default:r=4}let l=t.itemSize*r;o===Pe.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=vd(s*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let v=n;v<n+s;v++){for(let g=0;g<t.itemSize;g++){let f;t.itemSize>4?f=t.array[v*t.itemSize+g]:(g===0?f=t.getX(v):g===1?f=t.getY(v):g===2?f=t.getZ(v):g===3&&(f=t.getW(v)),t.normalized===!0&&(f=X.normalize(f,t.array))),e===Pe.FLOAT?h.setFloat32(u,f,!0):e===Pe.INT?h.setInt32(u,f,!0):e===Pe.UNSIGNED_INT?h.setUint32(u,f,!0):e===Pe.SHORT?h.setInt16(u,f,!0):e===Pe.UNSIGNED_SHORT?h.setUint16(u,f,!0):e===Pe.BYTE?h.setInt8(u,f):e===Pe.UNSIGNED_BYTE&&h.setUint8(u,f),u+=r}u%l!==0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return o!==void 0&&(d.target=o),o===Pe.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const o=new FileReader;o.readAsArrayBuffer(t),o.onloadend=function(){const a=tl(o.result),r={buffer:e.processBuffer(a),byteOffset:e.byteOffset,byteLength:a.byteLength};e.byteOffset+=a.byteLength,s(n.bufferViews.push(r)-1)}})}processAccessor(t,e,n,s){const o=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let r;if(t.array.constructor===Float32Array)r=Pe.FLOAT;else if(t.array.constructor===Int32Array)r=Pe.INT;else if(t.array.constructor===Uint32Array)r=Pe.UNSIGNED_INT;else if(t.array.constructor===Int16Array)r=Pe.SHORT;else if(t.array.constructor===Uint16Array)r=Pe.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)r=Pe.BYTE;else if(t.array.constructor===Uint8Array)r=Pe.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;const l=F2(t,n,s);let c;e!==void 0&&(c=t===e.index?Pe.ELEMENT_ARRAY_BUFFER:Pe.ARRAY_BUFFER);const h=this.processBufferView(t,r,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:r,count:s,max:l.max,min:l.min,type:a[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),o.accessors||(o.accessors=[]),o.accessors.push(u)-1}processImage(t,e,n,s="image/png"){if(t!==null){const o=this,a=o.cache,r=o.json,l=o.options,c=o.pending;a.images.has(t)||a.images.set(t,{});const h=a.images.get(t),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];r.images||(r.images=[]);const d={mimeType:s},m=eu();m.width=Math.min(t.width,l.maxTextureSize),m.height=Math.min(t.height,l.maxTextureSize);const v=m.getContext("2d",{willReadFrequently:!0});if(n===!0&&(v.translate(0,m.height),v.scale(1,-1)),t.data!==void 0){e!==$n&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const f=new Uint8ClampedArray(t.height*t.width*4);for(let p=0;p<f.length;p+=4)f[p+0]=t.data[p+0],f[p+1]=t.data[p+1],f[p+2]=t.data[p+2],f[p+3]=t.data[p+3];v.putImageData(new ImageData(f,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)v.drawImage(t,0,0,m.width,m.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(nu(m,s).then(f=>o.processBufferViewImage(f)).then(f=>{d.bufferView=f})):m.toDataURL!==void 0?d.uri=m.toDataURL(s):c.push(nu(m,s).then(f=>new FileReader().readAsDataURL(f)).then(f=>{d.uri=f}));const g=r.images.push(d)-1;return h[u]=g,g}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:qn[t.magFilter],minFilter:qn[t.minFilter],wrapS:qn[t.wrapS],wrapT:qn[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,s=this.cache,o=this.json;if(s.textures.has(t))return s.textures.get(t);o.textures||(o.textures=[]),t instanceof Nr&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let a=t.userData.mimeType;a==="image/webp"&&(a="image/png");const r={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,a)};t.name&&(r.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,r)});const l=o.textures.push(r)-1;return s.textures.set(t,l),l}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const o=t.color.toArray().concat([t.opacity]);if(Ho(o,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=o),t.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=t.metalness,s.pbrMetallicRoughness.roughnessFactor=t.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const r=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(r),texCoord:r.channel};this.applyTextureTransform(l,r),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const r={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(r,t.map),s.pbrMetallicRoughness.baseColorTexture=r}if(t.emissive){const r=t.emissive;if(Math.max(r.r,r.g,r.b)>0&&(s.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const c={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(c,t.emissiveMap),s.emissiveTexture=c}}if(t.normalMap){const r={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(r.scale=t.normalScale.x),this.applyTextureTransform(r,t.normalMap),s.normalTexture=r}if(t.aoMap){const r={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(r.strength=t.aoMapIntensity),this.applyTextureTransform(r,t.aoMap),s.occlusionTexture=r}t.transparent?s.alphaMode="BLEND":t.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=t.alphaTest),t.side===en&&(s.doubleSided=!0),t.name!==""&&(s.name=t.name),this.serializeUserData(t,s),await this._invokeAllAsync(async function(r){r.writeMaterialAsync&&await r.writeMaterialAsync(t,s)});const a=n.materials.push(s)-1;return e.materials.set(t,a),a}async processMeshAsync(t){const e=this.cache,n=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let x=0,b=t.material.length;x<b;x++)s.push(t.material[x].uuid);else s.push(t.material.uuid);const o=s.join(":");if(e.meshes.has(o))return e.meshes.get(o);const a=t.geometry;let r;t.isLineSegments?r=Pe.LINES:t.isLineLoop?r=Pe.LINE_LOOP:t.isLine?r=Pe.LINE_STRIP:t.isPoints?r=Pe.POINTS:r=t.material.wireframe?Pe.LINES:Pe.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},m=a.getAttribute("normal");m!==void 0&&!this.isNormalizedNormalAttribute(m)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(m)));let v=null;for(let x in a.attributes){if(x.slice(0,5)==="morph")continue;const b=a.attributes[x];if(x=d[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),e.attributes.has(this.getUID(b))){c[x]=e.attributes.get(this.getUID(b));continue}v=null;const A=b.array;x==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),v=new J(new Uint16Array(A),b.itemSize,b.normalized)):(A instanceof Uint32Array||A instanceof Int32Array)&&!x.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${x}" converted to type FLOAT.`),v=tr.Utils.toFloat32BufferAttribute(b));const T=this.processAccessor(v||b,a);T!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,b),c[x]=T,e.attributes.set(this.getUID(b),T))}if(m!==void 0&&a.setAttribute("normal",m),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const x=[],b=[],y={};if(t.morphTargetDictionary!==void 0)for(const A in t.morphTargetDictionary)y[t.morphTargetDictionary[A]]=A;for(let A=0;A<t.morphTargetInfluences.length;++A){const T={};let S=!1;for(const w in a.morphAttributes){if(w!=="position"&&w!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}const C=a.morphAttributes[w][A],E=w.toUpperCase(),R=a.attributes[w];if(e.attributes.has(this.getUID(C,!0))){T[E]=e.attributes.get(this.getUID(C,!0));continue}const L=C.clone();if(!a.morphTargetsRelative)for(let I=0,k=C.count;I<k;I++)for(let D=0;D<C.itemSize;D++)D===0&&L.setX(I,C.getX(I)-R.getX(I)),D===1&&L.setY(I,C.getY(I)-R.getY(I)),D===2&&L.setZ(I,C.getZ(I)-R.getZ(I)),D===3&&L.setW(I,C.getW(I)-R.getW(I));T[E]=this.processAccessor(L,a),e.attributes.set(this.getUID(R,!0),T[E])}u.push(T),x.push(t.morphTargetInfluences[A]),t.morphTargetDictionary!==void 0&&b.push(y[A])}l.weights=x,b.length>0&&(l.extras={},l.extras.targetNames=b)}const g=Array.isArray(t.material);if(g&&a.groups.length===0)return null;let f=!1;if(g&&a.index===null){const x=[];for(let b=0,y=a.attributes.position.count;b<y;b++)x[b]=b;a.setIndex(x),f=!0}const p=g?t.material:[t.material],_=g?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,b=_.length;x<b;x++){const y={mode:r,attributes:c};if(this.serializeUserData(a,y),u.length>0&&(y.targets=u),a.index!==null){let T=this.getUID(a.index);(_[x].start!==void 0||_[x].count!==void 0)&&(T+=":"+_[x].start+":"+_[x].count),e.attributes.has(T)?y.indices=e.attributes.get(T):(y.indices=this.processAccessor(a.index,a,_[x].start,_[x].count),e.attributes.set(T,y.indices)),y.indices===null&&delete y.indices}const A=await this.processMaterialAsync(p[_[x].materialIndex]);A!==null&&(y.material=A),h.push(y)}f===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(x){x.writeMesh&&x.writeMesh(t,l)});const M=n.meshes.push(l)-1;return e.meshes.set(o,M),M}detectMeshQuantization(t,e){if(this.extensionsUsed[Jr])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const s=t.split("_",1)[0];Kh[s]&&Kh[s].includes(n)&&(this.extensionsUsed[Jr]=!0,this.extensionsRequired[Jr]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:X.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),t=tr.Utils.mergeMorphTargetTracks(t.clone(),e);const o=t.tracks,a=[],r=[];for(let l=0;l<o.length;++l){const c=o[l],h=Fe.parseTrackName(c.name);let u=Fe.findNode(e,h.nodeName);const d=Qh[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const m=1;let v=c.values.length/c.times.length;d===Qh.morphTargetInfluences&&(v/=u.morphTargetInfluences.length);let g;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",v/=3):c.getInterpolation()===Vd?g="STEP":g="LINEAR",r.push({input:this.processAccessor(new J(c.times,m)),output:this.processAccessor(new J(c.values,v)),interpolation:g}),a.push({sampler:r.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:r,channels:a}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,s=e.nodes[n.get(t)],o=t.skeleton;if(o===void 0)return null;const a=t.skeleton.bones[0];if(a===void 0)return null;const r=[],l=new Float32Array(o.bones.length*16),c=new de;for(let u=0;u<o.bones.length;++u)r.push(n.get(o.bones[u])),c.copy(o.boneInverses[u]),c.multiply(t.bindMatrix).toArray(l,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new J(l,16)),joints:r,skeleton:n.get(a)}),s.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,s=this.nodeMap;e.nodes||(e.nodes=[]);const o={};if(n.trs){const r=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();Ho(r,[0,0,0,1])||(o.rotation=r),Ho(l,[0,0,0])||(o.translation=l),Ho(c,[1,1,1])||(o.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),I2(t.matrix)===!1&&(o.matrix=t.matrix.elements);if(t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o),t.isMesh||t.isLine||t.isPoints){const r=await this.processMeshAsync(t);r!==null&&(o.mesh=r)}else t.isCamera&&(o.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const r=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&r.push(u)}}r.length>0&&(o.children=r)}await this._invokeAllAsync(function(r){r.writeNode&&r.writeNode(t,o)});const a=e.nodes.push(o)-1;return s.set(t,a),a}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);const o=[];for(let a=0,r=t.children.length;a<r;a++){const l=t.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&o.push(c)}}o.length>0&&(s.nodes=o),this.serializeUserData(t,s)}async processObjectsAsync(t){const e=new Ya;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});const n=[];for(let s=0;s<t.length;s++)t[s]instanceof Ya?await this.processSceneAsync(t[s]):n.push(t[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class N2{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,s=n.json,o=n.extensionsUsed,a={};t.name&&(a.name=t.name),a.color=t.color.toArray(),a.intensity=t.intensity,t.isDirectionalLight?a.type="directional":t.isPointLight?(a.type="point",t.distance>0&&(a.range=t.distance)):t.isSpotLight&&(a.type="spot",t.distance>0&&(a.range=t.distance),a.spot={},a.spot.innerConeAngle=(1-t.penumbra)*t.angle,a.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),o[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},o[this.name]=!0);const r=s.extensions[this.name].lights;r.push(a),e.extensions=e.extensions||{},e.extensions[this.name]={light:r.length-1}}}class U2{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class k2{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.clearcoatFactor=t.clearcoat,t.clearcoatMap){const a={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(a,t.clearcoatMap),o.clearcoatTexture=a}if(o.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,t.clearcoatRoughnessMap),o.clearcoatRoughnessTexture=a}if(t.clearcoatNormalMap){const a={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(a.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(a,t.clearcoatNormalMap),o.clearcoatNormalTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class z2{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const s=this.writer.extensionsUsed,o={};o.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class B2{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.iridescenceFactor=t.iridescence,t.iridescenceMap){const a={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(a,t.iridescenceMap),o.iridescenceTexture=a}if(o.iridescenceIor=t.iridescenceIOR,o.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const a={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(a,t.iridescenceThicknessMap),o.iridescenceThicknessTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class O2{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.transmissionFactor=t.transmission,t.transmissionMap){const a={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(a,t.transmissionMap),o.transmissionTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class H2{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.thicknessFactor=t.thickness,t.thicknessMap){const a={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(a,t.thicknessMap),o.thicknessTexture=a}t.attenuationDistance!==1/0&&(o.attenuationDistance=t.attenuationDistance),o.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class W2{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const s=this.writer.extensionsUsed,o={};o.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class V2{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(T2)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.specularIntensityMap){const a={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(a,t.specularIntensityMap),o.specularTexture=a}if(t.specularColorMap){const a={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(a,t.specularColorMap),o.specularColorTexture=a}o.specularFactor=t.specularIntensity,o.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class G2{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.sheenRoughnessMap){const a={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(a,t.sheenRoughnessMap),o.sheenRoughnessTexture=a}if(t.sheenColorMap){const a={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(a,t.sheenColorMap),o.sheenColorTexture=a}o.sheenRoughnessFactor=t.sheenRoughness,o.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class X2{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.anisotropyMap){const a={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(a,t.anisotropyMap),o.anisotropyTexture=a}o.anisotropyStrength=t.anisotropy,o.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Y2{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,o={};o.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class $2{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.bumpMap){const a={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(a,t.bumpMap),o.bumpTexture=a}o.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class q2{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,s=t,o=new Float32Array(s.count*3),a=new Float32Array(s.count*4),r=new Float32Array(s.count*3),l=new de,c=new P,h=new on,u=new P;for(let m=0;m<s.count;m++)s.getMatrixAt(m,l),l.decompose(c,h,u),c.toArray(o,m*3),h.toArray(a,m*4),u.toArray(r,m*3);const d={TRANSLATION:n.processAccessor(new J(o,3)),ROTATION:n.processAccessor(new J(a,4)),SCALE:n.processAccessor(new J(r,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}tr.Utils={insertKeyframe:function(i,t){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),o=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n));let r;if(i.times.length===0){s[0]=t;for(let l=0;l<n;l++)o[l]=0;r=0}else if(t<i.times[0]){if(Math.abs(i.times[0]-t)<.001)return 0;s[0]=t,s.set(i.times,1),o.set(a.evaluate(t),0),o.set(i.values,n),r=0}else if(t>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-t)<.001)return i.times.length-1;s[s.length-1]=t,s.set(i.times,0),o.set(i.values,0),o.set(a.evaluate(t),i.values.length),r=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-t)<.001)return l;if(i.times[l]<t&&i.times[l+1]>t){s.set(i.times.slice(0,l+1),0),s[l+1]=t,s.set(i.times.slice(l+1),l+2),o.set(i.values.slice(0,(l+1)*n),0),o.set(a.evaluate(t),(l+1)*n),o.set(i.values.slice((l+1)*n),(l+2)*n),r=l+1;break}}return i.times=s,i.values=o,r},mergeMorphTargetTracks:function(i,t){const e=[],n={},s=i.tracks;for(let o=0;o<s.length;++o){let a=s[o];const r=Fe.parseTrackName(a.name),l=Fe.findNode(t,r.nodeName);if(r.propertyName!=="morphTargetInfluences"||r.propertyIndex===void 0){e.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Gd)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[r.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+r.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const m=new u.ValueBufferType(c*u.times.length);for(let v=0;v<u.times.length;v++)m[v*c+h]=u.values[v];u.name=(r.nodeName||"")+".morphTargetInfluences",u.values=m,n[l.uuid]=u,e.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let m=0;m<u.times.length;m++)u.values[m*c+h]=d.evaluate(u.times[m]);for(let m=0;m<a.times.length;m++){const v=this.insertKeyframe(u,a.times[m]);u.values[v*c+h]=a.values[m]}}return i.tracks=e,i},toFloat32BufferAttribute:function(i){const t=new J(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let e=0,n=i.count;e<n;e++)for(let s=0;s<i.itemSize;s++)t.setComponent(e,s,i.getComponent(e,s));return t}};async function Z2(i,t){const e=new tr;i.updateMatrixWorld(!0);const n=[];i.traverse(l=>{l.userData?.excludeFromExport&&l.visible&&(l.visible=!1,n.push(l))});let s;try{s=await new Promise((l,c)=>{e.parse(i,h=>{h instanceof ArrayBuffer?l(h):c(new Error("Expected binary ArrayBuffer from GLTFExporter"))},h=>c(h),{binary:!0,onlyVisible:!0,maxTextureSize:1024})})}finally{for(const l of n)l.visible=!0}const o=new Blob([s],{type:"model/gltf-binary"}),a=URL.createObjectURL(o),r=document.createElement("a");return r.href=a,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(a),5e3),{filename:t,sizeMB:s.byteLength/(1024*1024)}}async function xd(i,t,e=i.activeLOD){const n=i.activeLOD,s=i.autoLOD;i.autoLOD=!1,i.setActiveLOD(e);try{return await Z2(i.rootGroup,`${t}-lod${e}.glb`)}finally{i.setActiveLOD(n),i.autoLOD=s}}async function j2(i,t=i.activeLOD){return xd(i,"toothless-hidden-world",t)}async function K2(i,t=i.activeLOD){return xd(i,"light-fury-hidden-world",t)}const po=[{id:"twin-pair",label:"Twin Furies Perch",position:new P(.05,2.75,11.4),target:new P(0,.98,-.12)},{id:"light-fury-hero",label:"Light Fury 3/4",position:new P(-6.85,1.68,3.15),target:new P(-4.42,1,.25)},{id:"light-fury-face",label:"Light Fury Portrait",position:new P(-3.65,1.64,2.38),target:new P(-4.22,1.5,1.55)},{id:"toothless-hero",label:"Toothless 3/4",position:new P(7.15,1.82,3.68),target:new P(4.42,1.06,.55)},{id:"toothless-paws-scales",label:"Scales & Claws Study",position:new P(6.15,.96,2.95),target:new P(4.52,.62,1.25)},{id:"waterfall-islands",label:"Waterfall Double-Isle",position:new P(14.5,8.2,16),target:new P(-56,-1.5,-28)},{id:"sea-arch-drangar",label:"Sea-Arch & Clett",position:new P(28,5.4,2.5),target:new P(54.5,-1.8,20.5)},{id:"crescent-lagoon",label:"Crescent Lagoon",position:new P(24,38,-12),target:new P(84,-6,34)},{id:"archipelago-aerial",label:"Archipelago Panorama",position:new P(18,68,108),target:new P(-4,-4,-24)}];function tn(i){const t=parseFloat(i.min||"0"),e=parseFloat(i.max||"1"),n=parseFloat(i.value||"0"),s=e>t?(n-t)/(e-t)*100:50;i.style.setProperty("--fill-pct",`${Math.max(0,Math.min(100,s)).toFixed(1)}%`)}function Q2(i,t,e,n,s,o,a){let r=!1,l=window.innerWidth<=780,c=!0,h=1,u=null;i.classList.toggle("drawer-collapsed",l);const d=t.rig.bones.length+n.rig.bones.length,m=document.createElement("div");m.className="hud-toast",i.appendChild(m);const v=document.createElement("div");v.className="shutter-flash",i.appendChild(v);const g=Y=>{m.textContent=Y,m.classList.add("visible"),u!==null&&window.clearTimeout(u),u=window.setTimeout(()=>{m.classList.remove("visible")},2200)},f=()=>{v.classList.add("flash"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{v.classList.remove("flash")})})},p=a.quality.getMetrics(),_=document.createElement("div");_.className="hud-header",_.innerHTML=`
    <div class="brand-card hud-collapsible">
      <div class="brand-eyebrow">Night Fury &#9825; Light Fury &middot; 62&deg;N</div>
      <div class="brand-title-row">
        <span class="brand-dot"></span>
        <span class="brand-title">Our <em>World</em></span>
      </div>
      <div class="brand-subtitle">Sanctuary &amp; Atelier &middot; ${d} Bones</div>
    </div>
    <div class="telemetry-row">
      <div class="telemetry-pill hud-collapsible" id="tel-fps"><strong>60</strong> FPS</div>
      <div class="telemetry-pill hud-collapsible" id="tel-lod"><strong>LOD0</strong> &middot; 0 tris</div>
      <button class="telemetry-pill hud-collapsible is-active" id="btn-studio-quality" title="Cycle 5-Stage Render Resolution (I Whisper → V Masterpiece SSAA)">
        Clarity <strong id="tel-quality-roman">${p.spec.roman}</strong> &middot; <span id="tel-quality-res">${p.renderWidth}&times;${p.renderHeight}</span>
      </button>
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
  `,i.appendChild(_);const M=_.querySelector("#tel-fps"),x=_.querySelector("#tel-lod"),b=_.querySelector("#btn-studio-quality"),y=_.querySelector("#tel-quality-roman"),A=_.querySelector("#tel-quality-res"),T=_.querySelector("#btn-cursor-gaze"),S=_.querySelector("#btn-lightning-top"),w=_.querySelector("#btn-photo"),C=_.querySelector("#btn-fullscreen"),E=_.querySelector("#btn-help"),R=_.querySelector("#btn-toggle-hud"),L=()=>{a.onTriggerLightningStrike(),g("⚡ Forked Lightning Strike & Rolling Thunder")};S.addEventListener("click",L);const I=document.createElement("button");I.className="drawer-reopen-btn hud-collapsible",I.title="Open Character & Atmosphere Atelier [Tab]",I.innerHTML='<span>Open Atelier</span><span class="kbd-hint">Tab</span>',i.appendChild(I);const k=Y=>{l=Y,i.classList.toggle("drawer-collapsed",l)};I.addEventListener("click",()=>k(!1));const D=()=>{r=!r,i.classList.toggle("hud-hidden",r),R.innerHTML=r?'Show UI <span class="kbd-hint">H</span>':'Cinema <span class="kbd-hint">H</span>'};R.addEventListener("click",D);const U=()=>{c=!c,T.classList.toggle("is-active",c),a.onToggleCursorGaze(c),g(c?"Interactive Cursor Gaze enabled":"Sculpted Manual Gaze locked")};T.addEventListener("click",U),w.addEventListener("click",()=>{a.onCaptureSnapshot()});const O=()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})};C.addEventListener("click",O),document.addEventListener("fullscreenchange",()=>{C.classList.toggle("is-active",!!document.fullscreenElement)});const F=document.createElement("div");F.className="help-backdrop",F.innerHTML=`
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
  `,i.appendChild(F);const Z=Y=>{const pt=Y??!F.classList.contains("open");F.classList.toggle("open",pt),E.classList.toggle("is-active",pt)};E.addEventListener("click",()=>Z()),F.querySelector("#btn-help-close").addEventListener("click",()=>Z(!1)),F.addEventListener("click",Y=>{Y.target===F&&Z(!1)});const G=document.createElement("div");G.className="flight-bar hud-collapsible",G.innerHTML=`
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
  `,i.appendChild(G);const $=G.querySelector("#btn-flight-play"),q=G.querySelector("#flight-play-icon"),W=G.querySelector("#flight-play-text"),nt=G.querySelector("#btn-flight-reset"),ot=G.querySelector("#flight-phase-label"),Q=G.querySelector("#flight-time-label"),it=G.querySelector("#flight-scrubber"),j=G.querySelector("#btn-flight-speed"),tt=G.querySelector("#btn-flight-cam"),ft=G.querySelector("#btn-flight-loop"),et=Array.from(G.querySelectorAll(".flight-mode-pill"));let z=!1;const xt=()=>{const Y=o.getPhaseInfo(),pt=Y.isPlaying&&!Y.isPaused;G.classList.toggle("playing",pt);const St=Y.subjectMode==="duet"?"Begin Courtship Flight":Y.subjectMode==="light-fury"?"Fly Light Fury":"Fly Toothless";Y.isPlaying?Y.isPaused?(q.innerHTML="&#9654;",W.textContent="Resume Flight",ot.textContent=`${Y.phaseLabel} (Paused)`):(q.innerHTML="&#10074;&#10074;",W.textContent="Pause Flight",ot.textContent=Y.phaseLabel):(q.innerHTML="&#9654;",W.textContent=St,ot.innerHTML=Y.subjectMode==="duet"?"Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown":"Perched Ready &mdash; Solo Takeoff, Sea Soar &amp; Landing"),Q.textContent=`${Y.elapsedSec.toFixed(1)}s / ${Y.durationSec.toFixed(1)}s`,z||(it.value=String(Y.progress),tn(it)),tt.classList.toggle("active",Y.followCamera),ft.classList.toggle("active",Y.loop),j.classList.toggle("active",h<.99),j.innerHTML=`${h.toFixed(1)}&times;`,et.forEach(kt=>kt.classList.toggle("active",kt.dataset.fmode===Y.subjectMode))};j.addEventListener("click",()=>{h=h>.75?.5:1,a.onFlightSpeedChange(h),xt(),g(h<.75?"0.5× Slow-Motion Wingbeat Study":"1.0× Natural Flight Speed")}),et.forEach(Y=>{Y.addEventListener("click",()=>{const pt=Y.dataset.fmode;o.setSubjectMode(pt),xt(),ut()})}),$.addEventListener("click",()=>{o.togglePlayPause(),xt(),ut()}),nt.addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),xt(),ut()}),it.addEventListener("pointerdown",()=>{z=!0}),window.addEventListener("pointerup",()=>{z=!1}),it.addEventListener("input",()=>{tn(it),o.scrubToProgress(parseFloat(it.value)),e.applyRigState(0),s.applyRigState(0),xt(),ut()}),tt.addEventListener("click",()=>{o.followCamera=!o.followCamera,xt()}),ft.addEventListener("click",()=>{o.loop=!o.loop,xt()});const gt=document.createElement("div");gt.className="camera-bar hud-collapsible";const Et=[],Tt=Y=>{const pt=po[Y];pt&&(o.isPlaying&&(o.stopAndResetToPerch(),xt(),ut()),Et.forEach((St,kt)=>St.classList.toggle("active",kt===Y)),Et[Y]?.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"}),pt.id.startsWith("light-fury")?_t("light-fury"):pt.id.startsWith("toothless")&&_t("toothless"),a.onSelectCameraBookmark(pt))};po.forEach((Y,pt)=>{const St=document.createElement("button");St.className=`cam-btn${pt===0?" active":""}`,St.title=`${Y.label} [Hotkey ${pt+1}]`,St.innerHTML=`<span class="cam-btn-idx">${pt+1}</span><span>${Y.label}</span>`,St.addEventListener("click",()=>Tt(pt)),Et.push(St),gt.appendChild(St)}),i.appendChild(gt),window.addEventListener("keydown",Y=>{const pt=document.activeElement?.tagName;if(!(pt==="INPUT"||pt==="TEXTAREA")){if(Y.key==="Escape"&&F.classList.contains("open")){Z(!1);return}if(Y.key==="?"||Y.key==="/"&&Y.shiftKey){Y.preventDefault(),Z();return}if(Y.key==="Tab"){Y.preventDefault(),k(!l);return}if(Y.key==="h"||Y.key==="H")D();else if(Y.key==="c"||Y.key==="C")U();else if(Y.key==="l"||Y.key==="L")L();else if(Y.key==="p"||Y.key==="P")a.onCaptureSnapshot();else if(Y.key==="f"||Y.key==="F")O();else if(Y.code==="Space")Y.preventDefault(),o.togglePlayPause(),xt(),ut();else if(Y.key>="1"&&Y.key<="9"&&!Y.ctrlKey&&!Y.metaKey&&!Y.altKey){const St=parseInt(Y.key,10)-1;St>=0&&St<po.length&&Tt(St)}}});const Ft=document.createElement("aside");Ft.className="rig-drawer hud-collapsible",Ft.innerHTML=`
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
  `,i.appendChild(Ft),Ft.querySelector("#btn-collapse-drawer").addEventListener("click",()=>{k(!0)});const ht=Ft.querySelector("#moments-grid"),H=Ft.querySelector("#tab-light-fury"),N=Ft.querySelector("#tab-toothless"),K=Ft.querySelector("#panel-light-fury"),dt=Ft.querySelector("#panel-toothless"),bt=Ft.querySelector("#panel-shared-world");function _t(Y){H.classList.toggle("active",Y==="light-fury"),N.classList.toggle("active",Y==="toothless"),K.style.display=Y==="light-fury"?"block":"none",dt.style.display=Y==="toothless"?"block":"none"}H.addEventListener("click",()=>_t("light-fury")),N.addEventListener("click",()=>_t("toothless"));const zt=[];function Pt(Y,pt,St=!1){const kt=document.createElement("div");kt.className=`accordion-section${St?" open":""}`;const $t=document.createElement("button");$t.className="accordion-header",$t.innerHTML=`<span>${pt}</span><span class="accordion-chevron">&#9662;</span>`;const Qt=document.createElement("div");Qt.className="accordion-collapse";const ne=document.createElement("div");ne.className="accordion-collapse-inner";const re=document.createElement("div");return re.className="accordion-body",ne.appendChild(re),Qt.appendChild(ne),$t.addEventListener("click",()=>{kt.classList.toggle("open")}),kt.appendChild($t),kt.appendChild(Qt),Y.appendChild(kt),re}function Ut(Y,pt,St,kt,$t,Qt,ne,re=.01,fe=!1){const De=Number(St[$t]),qe=document.createElement("div");qe.className="control-row",qe.title="Double-click slider to reset";const un=document.createElement("span");un.className="control-val";const bn=document.createElement("div");bn.className="control-label-line";const Jn=document.createElement("span");Jn.textContent=pt,bn.appendChild(Jn),bn.appendChild(un);const Sn=document.createElement("input");Sn.type="range",Sn.min=String(Qt),Sn.max=String(ne),Sn.step=String(re);const Xi=()=>{const Un=Number(St[$t]);Sn.value=String(Un),un.textContent=Un.toFixed(2),tn(Sn)};Xi(),zt.push(Xi),Sn.addEventListener("input",()=>{o.isPlaying&&!o.isPaused&&(o.isPaused=!0,xt());const Un=parseFloat(Sn.value);kt({[$t]:Un}),un.textContent=Un.toFixed(2),tn(Sn),fe&&ut()}),Sn.addEventListener("dblclick",()=>{kt({[$t]:De}),Xi(),fe&&ut(),g(`Reset ${pt}`)}),qe.appendChild(bn),qe.appendChild(Sn),Y.appendChild(qe)}function se(Y,pt,St,kt,$t){const Qt=document.createElement("label");Qt.className="toggle-row";const ne=document.createElement("span");ne.textContent=pt;const re=document.createElement("input");re.type="checkbox";const fe=()=>{re.checked=!!St[$t]};fe(),zt.push(fe),re.addEventListener("change",()=>{kt({[$t]:re.checked}),ut()}),Qt.appendChild(ne),Qt.appendChild(re),Y.appendChild(Qt)}const Rt=Pt(K,"Light Fury Moods & Expressions",!0),Wt=document.createElement("div");Wt.className="weather-grid";const ie=[];ud.forEach((Y,pt)=>{const St=document.createElement("button");St.className=`weather-btn${pt===0?" active":""}`,St.innerHTML=`
      <span class="weather-btn-title">${Y.label}</span>
      <span class="weather-btn-sub">${Y.subtitle}</span>
    `,St.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),xt()),ie.forEach(kt=>kt.classList.remove("active")),St.classList.add("active"),s.setState(Y.patch),ut()}),ie.push(St),Wt.appendChild(St)}),Rt.appendChild(Wt);const It=(Y,pt,St,kt,$t,Qt=.01,ne=!1)=>Ut(Y,pt,s.state,re=>s.setState(re),St,kt,$t,Qt,ne),Nt=(Y,pt,St)=>se(Y,pt,s.state,kt=>s.setState(kt),St),Jt=Pt(K,"I. Bioluminescence, Shimmer & Cloak",!0);It(Jt,"Hidden World Neon Bioluminescence","biolumGlow",0,1),It(Jt,"Thermal-Mirror Optical Cloak","thermalCloak",0,1),It(Jt,"Stardust Glimmer & Opal Sheen","iridescentShimmer",0,1),It(Jt,"Radiant Partly-Glowing Skin","radiantGlow",0,1),It(Jt,"Underwing Rose & Ice Countershade","pastelTint",0,1),It(Jt,"Orchid-Cyan Plasma Charge","plasmaGlow",0,1);const te=Pt(K,"II. Gaze, Ears & Expression",!1);It(te,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),It(te,"Curious Head-Tilt (Roll)","headRoll",-1,1),It(te,"Head Yaw (Swan-Neck Coupled)","headYaw",-1,1),It(te,"Head Pitch","headPitch",-1,1),It(te,"Eye Gaze Horizontal","eyeYaw",-1,1),It(te,"Eye Gaze Vertical","eyePitch",-1,1),It(te,"Affectionate Squint-Smile","squint",0,1),It(te,"Almond Eyelid Blink","blink",0,1),It(te,"Rounded Ear-Nubs Perk","earPerk",0,1),It(te,"Ear Asymmetry","earAsymmetry",-1,1),It(te,"Temple Cheek Nubs","cheekNubFlare",0,1);const be=Pt(K,"III. Smile, Retractable Fangs & Tongue",!1);It(be,"Jaw Open","jawOpen",0,1),It(be,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),It(be,"Pink Tongue Extend","tongueExtend",0,1),It(be,"Tongue Curl","tongueCurl",-1,1);const at=document.createElement("button");at.className="action-btn secondary",at.textContent="Toggle Soft Gums vs. Strike Fangs";let Vt=!1;at.addEventListener("click",()=>{Vt=!Vt,Vt?s.setState({jawOpen:.68,teethExtension:1,pupilDilation:.1,squint:.36,earPerk:.14}):s.setState({jawOpen:.26,teethExtension:0,pupilDilation:.92,squint:.24,earPerk:.9}),ut()}),be.appendChild(at);const Mt=Pt(K,"IV. Scalloped Wings, Veil & Sail",!1);It(Mt,"Coy Wing-Veil Drape","coyWingVeil",0,1),It(Mt,"Wing Unfurl (Cape ↔ 7.80m Span)","wingUnfurl",0,1),It(Mt,"Wing Flap Elevation","wingFlap",-1,1),It(Mt,"Wing Forward/Dive Sweep","wingSweep",-1,1),It(Mt,"Airfoil Camber","wingCamber",0,1),It(Mt,"Pelvic Glide Flukes","pelvicFinFlare",0,1),It(Mt,"Continuous Dorsal Sail Flex","dorsalSailFlex",0,1);const At=Pt(K,"V. Symmetrical Heart-Tail Flukes",!1);Nt(At,"Sync Heart-Tail Lobes","syncHeartTailFlukes"),It(At,"Right Heart-Lobe Fold","rightHeartFinFlare",-1,1,.01,!0),It(At,"Left Heart-Lobe Fold","leftHeartFinFlare",-1,1,.01,!0),It(At,"Tail Horizontal Sweep","tailYaw",-1,1),It(At,"Tail Vertical Lift","tailPitch",-1,1),It(At,"Feline Tail Curl","tailCurl",-1,1);const Ot=Pt(K,"VI. Stance, 4-Paw IK & Flight Legs",!1);It(Ot,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),It(Ot,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),It(Ot,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),It(Ot,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),It(Ot,"Swan Neck Arch","neckArch",-1,1),It(Ot,"Neck Turn","neckYaw",-1,1),It(Ot,"Spine Arch","spineArch",-1,1),It(Ot,"Spine Twist","spineTwist",-1,1),Nt(Ot,"Living Idle (Purr & Natural Blinks)","subtleBreathing");const Gt=Pt(dt,"Toothless Moods & Expressions",!0),pe=document.createElement("div");pe.className="weather-grid";const Ue=[];sd.forEach((Y,pt)=>{const St=document.createElement("button");St.className=`weather-btn${pt===0?" active":""}`,St.innerHTML=`
      <span class="weather-btn-title">${Y.label}</span>
      <span class="weather-btn-sub">${Y.subtitle}</span>
    `,St.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),xt()),Ue.forEach(kt=>kt.classList.remove("active")),St.classList.add("active"),e.setState(Y.patch),ut()}),Ue.push(St),pe.appendChild(St)}),Gt.appendChild(pe);const ae=(Y,pt,St,kt,$t,Qt=.01,ne=!1)=>Ut(Y,pt,e.state,re=>e.setState(re),St,kt,$t,Qt,ne),me=(Y,pt,St)=>se(Y,pt,e.state,kt=>e.setState(kt),St),Je=Pt(dt,"I. Alpha Bioluminescence & Lightning",!0);ae(Je,"Alpha Blue Plasma Glow","alphaGlow",0,1),ae(Je,"Cavern Bioluminescent Markings","biolumGlow",0,1),ae(Je,"Lightning-Cloak Mirror Arcs","lightningCloak",0,1);const Re=Pt(dt,"II. Head, Ear-Plates & Emerald Eyes",!1);ae(Re,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),ae(Re,"Head Yaw (Cervical Coupled)","headYaw",-1,1),ae(Re,"Head Pitch","headPitch",-1,1),ae(Re,"Curious Head Roll","headRoll",-1,1),ae(Re,"Eye Gaze Horizontal","eyeYaw",-1,1),ae(Re,"Eye Gaze Vertical","eyePitch",-1,1),ae(Re,"Palpebral Eyelid Blink","blink",0,1),ae(Re,"Focus Squint","squint",0,1),ae(Re,"Primary Ear-Plates Perk","earPerk",0,1),ae(Re,"Ear-Plate Asymmetry","earAsymmetry",-1,1),ae(Re,"Secondary Cheek Nubs","cheekNubFlare",0,1);const jn=Pt(dt,"III. Jaw, Retractable Teeth & Tongue",!1);ae(jn,"Jaw Open","jawOpen",0,1),ae(jn,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),ae(jn,"Tongue Extend","tongueExtend",0,1),ae(jn,"Tongue Curl","tongueCurl",-1,1);const Kn=document.createElement("button");Kn.className="action-btn secondary",Kn.textContent='Toggle "Toothless" Gums vs. Fangs';let Dn=!1;Kn.addEventListener("click",()=>{Dn=!Dn,Dn?e.setState({jawOpen:.72,teethExtension:1,pupilDilation:.14,squint:.32}):e.setState({jawOpen:.36,teethExtension:0,pupilDilation:.85,squint:0}),ut()}),jn.appendChild(Kn);const On=Pt(dt,"IV. Wings, Fins & Flush V-Spines",!1);ae(On,"Wing Unfurl (Cape ↔ 8.56m Span)","wingUnfurl",0,1),ae(On,"Wing Flap Elevation","wingFlap",-1,1),ae(On,"Wing Forward/Dive Sweep","wingSweep",-1,1),ae(On,"Phalangeal Airfoil Camber","wingCamber",0,1),ae(On,"Pelvic 3-Spar Glide Fins","pelvicFinFlare",0,1),ae(On,"Dorsal V-Spine Split","dorsalSpineSplit",0,1);const ln=Pt(dt,"V. Prosthetic Tail & Mechanics",!1);me(ln,"Auto-Sync Left Prosthetic Linkage","autoSyncProstheticTail"),ae(ln,"Left Prosthetic Fin Fold","leftProstheticFinFlare",-1,1,.01,!0),ae(ln,"Right Biological Fin Fold","rightTailFinFlare",-1,1,.01,!0),ae(ln,"Tail Horizontal Sweep","tailYaw",-1,1),ae(ln,"Tail Vertical Lift","tailPitch",-1,1),ae(ln,"Distal Tail Whip Curl","tailCurl",-1,1);const fn=Pt(dt,"VI. Stance, 4-Paw IK & Flight Legs",!1);ae(fn,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),ae(fn,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),ae(fn,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),ae(fn,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),ae(fn,"Neck Arch","neckArch",-1,1),ae(fn,"Neck Turn","neckYaw",-1,1),ae(fn,"Spine Arch","spineArch",-1,1),ae(fn,"Spine Twist","spineTwist",-1,1),me(fn,"Living Idle (Breath, Blinks & Twitches)","subtleBreathing");const Be=Pt(bt,"Archipelago, Sky & North Sea",!0),wi=document.createElement("div");wi.className="control-label-line";const En=is[a.initialWeatherPreset]??is["golden-hour"];wi.innerHTML=`<span>Coastal Atmosphere</span><span class="control-val" id="weather-preset-desc">${En.subtitle}</span>`,Be.appendChild(wi);const Cn=wi.querySelector("#weather-preset-desc"),Qn=document.createElement("div");Qn.className="weather-grid";const ps=[],Nn={...so},xn=[],oi=[],yn=document.createElement("div");yn.className="control-row",yn.innerHTML=`
    <div class="control-label-line">
      <span>Sun / Moon Elevation</span>
      <span class="control-val" id="elev-val">${En.sunElevationDeg.toFixed(1)}&deg;</span>
    </div>
    <input type="range" id="elev-slider" min="2" max="55" step="0.5" value="${En.sunElevationDeg}" />
  `;const ai=yn.querySelector("#elev-slider"),B=yn.querySelector("#elev-val");tn(ai),ai.addEventListener("input",()=>{const Y=parseFloat(ai.value);B.textContent=`${Y.toFixed(1)}°`,tn(ai),a.onSunElevationChange(Y)});const rt=document.createElement("div");rt.className="control-row";const mt=Y=>Math.min(1,Math.max(0,(Y-6e-4)/.0044)),vt=Y=>6e-4+Y*.0044,ct=mt(En.mistDensity);rt.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Mist &amp; Horizon Veil</span>
      <span class="control-val" id="mist-val">${ct.toFixed(2)}</span>
    </div>
    <input type="range" id="mist-slider" min="0" max="1" step="0.01" value="${ct.toFixed(2)}" />
  `;const Lt=rt.querySelector("#mist-slider"),Ht=rt.querySelector("#mist-val");tn(Lt),Lt.addEventListener("input",()=>{const Y=parseFloat(Lt.value);Ht.textContent=Y.toFixed(2),tn(Lt),a.onMistDensityChange(vt(Y))});const Zt=En.rainIntensity,Yt=document.createElement("div");Yt.className="control-row",Yt.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Rain &amp; Splash Physics</span>
      <span class="control-val" id="rain-val">${Zt.toFixed(2)}</span>
    </div>
    <input type="range" id="rain-slider" min="0" max="1" step="0.01" value="${Zt.toFixed(2)}" />
  `;const ce=Yt.querySelector("#rain-slider"),ue=Yt.querySelector("#rain-val");tn(ce),ce.addEventListener("input",()=>{const Y=parseFloat(ce.value);ue.textContent=Y.toFixed(2),tn(ce),a.onRainIntensityChange(Y)});const oe=En.windStrength,Se=document.createElement("div");Se.className="control-row",Se.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Wind (Ferns, Grass &amp; Sea)</span>
      <span class="control-val" id="wind-val">${oe.toFixed(2)}</span>
    </div>
    <input type="range" id="wind-slider" min="0.05" max="1.25" step="0.01" value="${oe.toFixed(2)}" />
  `;const we=Se.querySelector("#wind-slider"),Ye=Se.querySelector("#wind-val");tn(we),we.addEventListener("input",()=>{const Y=parseFloat(we.value);Ye.textContent=Y.toFixed(2),tn(we),a.onWindStrengthChange(Y)});const We=En.lightningFrequency,ye=document.createElement("div");ye.className="control-row",ye.innerHTML=`
    <div class="control-label-line">
      <span>Thunder &amp; Lightning Storm Rate</span>
      <span class="control-val" id="bolt-val">${We.toFixed(2)}</span>
    </div>
    <input type="range" id="bolt-slider" min="0" max="1" step="0.01" value="${We.toFixed(2)}" />
  `;const ee=ye.querySelector("#bolt-slider"),Ve=ye.querySelector("#bolt-val");tn(ee),ee.addEventListener("input",()=>{const Y=parseFloat(ee.value);Ve.textContent=Y.toFixed(2),tn(ee),a.onLightningFrequencyChange(Y)});const ge=document.createElement("button");ge.className="action-btn",ge.style.width="100%",ge.style.marginTop="6px",ge.innerHTML="&#9889; Strike Forked Lightning &amp; Thunder [L]",ge.addEventListener("click",L);let cn=null;const Hn=Y=>{const pt=is[Y];if(!pt)return;ps.forEach(({id:$t,btn:Qt})=>Qt.classList.toggle("active",$t===Y)),Cn.textContent=pt.subtitle,ai.value=String(pt.sunElevationDeg),B.textContent=`${pt.sunElevationDeg.toFixed(1)}°`,tn(ai);const St=mt(pt.mistDensity);Lt.value=St.toFixed(2),Ht.textContent=St.toFixed(2),tn(Lt),ce.value=pt.rainIntensity.toFixed(2),ue.textContent=pt.rainIntensity.toFixed(2),tn(ce),we.value=pt.windStrength.toFixed(2),Ye.textContent=pt.windStrength.toFixed(2),tn(we),ee.value=pt.lightningFrequency.toFixed(2),Ve.textContent=pt.lightningFrequency.toFixed(2),tn(ee),a.onSelectWeatherPreset(pt.id);let kt=null;pt.id==="stormy-squall"?(kt={idx:3,desc:"Rogue Storm",params:{waveAmplitude:1.65,waveSpeed:1.68,seaChoppiness:.92}},a.onTriggerLightningStrike()):pt.id==="starlit-night"||pt.id==="dawn-dusk"?kt={idx:0,desc:"Calm Fjord",params:{waveAmplitude:.3,waveSpeed:.72,seaChoppiness:.24}}:kt={idx:1,desc:"Nordic Swell",params:{...so}},kt&&(oi.forEach(($t,Qt)=>$t.classList.toggle("active",Qt===kt.idx)),cn&&(cn.textContent=kt.desc),Object.assign(Nn,kt.params),xn.forEach($t=>$t()),a.onOceanParamsChange(kt.params))};Object.values(is).forEach(Y=>{const pt=document.createElement("button");pt.className=`weather-btn${Y.id===a.initialWeatherPreset?" active":""}`,pt.innerHTML=`
      <span class="weather-btn-title">${Y.label}</span>
      <span class="weather-btn-sub">${Y.subtitle}</span>
    `,pt.addEventListener("click",()=>{an.forEach(St=>St.classList.remove("active")),Hn(Y.id)}),ps.push({id:Y.id,btn:pt}),Qn.appendChild(pt)}),Be.appendChild(Qn),Be.appendChild(yn),Be.appendChild(rt),Be.appendChild(Yt),Be.appendChild(Se),Be.appendChild(ye),Be.appendChild(ge);const an=[];[{label:"Golden Dusk",toast:"Scene Moment — Golden Dusk Courtship",weather:"golden-hour",lfPatch:{biolumGlow:.12,thermalCloak:0,iridescentShimmer:.68,radiantGlow:.3,plasmaGlow:0},nfPatch:{alphaGlow:0,biolumGlow:.08,lightningCloak:0}},{label:"Biolum Night",toast:"Scene Moment — Hidden World Bioluminescence",weather:"starlit-night",lfPatch:{biolumGlow:.96,thermalCloak:0,iridescentShimmer:.85,radiantGlow:.72,plasmaGlow:.58},nfPatch:{alphaGlow:.92,biolumGlow:.95,lightningCloak:.24}},{label:"Mirror Cloak",toast:"Scene Moment — Light Fury Optical Cloak",weather:"dawn-dusk",lfPatch:{thermalCloak:.88,iridescentShimmer:.96,biolumGlow:.42,plasmaGlow:.32},nfPatch:{alphaGlow:.18,biolumGlow:.22,lightningCloak:0}},{label:"Storm Gale",toast:"Scene Moment — North Sea Lightning Squall",weather:"stormy-squall",lfPatch:{biolumGlow:.54,thermalCloak:0,plasmaGlow:.65,wingUnfurl:.58},nfPatch:{alphaGlow:.86,biolumGlow:.78,lightningCloak:.88,wingUnfurl:.62}}].forEach((Y,pt)=>{const St=document.createElement("button");St.className=`moment-chip${pt===0?" active":""}`,St.textContent=Y.label,St.addEventListener("click",()=>{an.forEach((kt,$t)=>kt.classList.toggle("active",$t===pt)),Hn(Y.weather),s.setState(Y.lfPatch),e.setState(Y.nfPatch),ut(),g(Y.toast)}),an.push(St),ht.appendChild(St)});const Ie=document.createElement("div");Ie.className="control-label-line",Ie.style.marginTop="11px",Ie.innerHTML='<span>Irregular North Sea Swells</span><span class="control-val" id="sea-preset-desc">Nordic Swell</span>',Be.appendChild(Ie);const rn=Ie.querySelector("#sea-preset-desc");cn=rn;const hn=document.createElement("div");hn.className="segmented-row";const nn=[{label:"Quiet",desc:"Glassy Fjord",params:{waveAmplitude:.14,waveSpeed:.52,seaChoppiness:.08}},{label:"Swell",desc:"Nordic Swell",params:{...so}},{label:"Rough",desc:"Crossed Sea",params:{waveAmplitude:1.18,waveSpeed:1.38,seaChoppiness:.8}},{label:"Storm",desc:"Rogue Storm",params:{waveAmplitude:1.72,waveSpeed:1.75,seaChoppiness:.96}}];function sn(Y,pt,St,kt,$t=.01){const Qt=so[pt],ne=document.createElement("div");ne.className="control-row",ne.title="Double-click slider to reset",ne.innerHTML=`
      <div class="control-label-line">
        <span>${Y}</span>
        <span class="control-val">${Nn[pt].toFixed(2)}</span>
      </div>
      <input type="range" min="${St}" max="${kt}" step="${$t}" value="${Nn[pt]}" />
    `;const re=ne.querySelector(".control-val"),fe=ne.querySelector("input");tn(fe),xn.push(()=>{fe.value=String(Nn[pt]),re.textContent=Nn[pt].toFixed(2),tn(fe)}),fe.addEventListener("input",()=>{const De=parseFloat(fe.value);Nn[pt]=De,re.textContent=De.toFixed(2),tn(fe),oi.forEach(qe=>qe.classList.remove("active")),rn.textContent="Custom Swell",a.onOceanParamsChange({[pt]:De})}),fe.addEventListener("dblclick",()=>{Nn[pt]=Qt,fe.value=String(Qt),re.textContent=Qt.toFixed(2),tn(fe),a.onOceanParamsChange({[pt]:Qt}),g(`Reset ${Y}`)}),Be.appendChild(ne)}nn.forEach((Y,pt)=>{const St=document.createElement("button");St.className=`seg-btn${pt===1?" active":""}`,St.textContent=Y.label,St.addEventListener("click",()=>{oi.forEach(kt=>kt.classList.remove("active")),St.classList.add("active"),rn.textContent=Y.desc,Object.assign(Nn,Y.params),xn.forEach(kt=>kt()),a.onOceanParamsChange(Y.params)}),oi.push(St),hn.appendChild(St)}),Be.appendChild(hn),sn("Swell & Rogue Wave Height","waveAmplitude",.05,3.2,.01),sn("Current & Swell Velocity","waveSpeed",.15,2.5,.01),sn("Cross-Chop & Whitecap Foam","seaChoppiness",0,1,.01);const Wn=document.createElement("div");Wn.className="control-label-line",Wn.style.marginTop="11px",Wn.innerHTML=`<span>Render Resolution (5 Stages)</span><span class="control-val" id="res-stage-label">${p.spec.label} (${p.renderWidth}&times;${p.renderHeight})</span>`,Be.appendChild(Wn);const ri=Wn.querySelector("#res-stage-label"),Wi=document.createElement("div");Wi.className="segmented-row";const Ds=[],Vi=Y=>{y.textContent=Y.spec.roman,A.textContent=`${Y.renderWidth}×${Y.renderHeight}`,ri.textContent=`${Y.spec.label} (${Y.renderWidth}×${Y.renderHeight})`,Ds.forEach(pt=>{const St=Number(pt.dataset.stage);pt.classList.toggle("active",St===Y.stage)})};Ja.forEach(Y=>{const pt=document.createElement("button");pt.className=`seg-btn${Y.stage===p.stage?" active":""}`,pt.dataset.stage=String(Y.stage),pt.title=`Stage ${Y.roman} · ${Y.label} — ${Y.subtitle}`,pt.textContent=Y.roman,pt.addEventListener("click",()=>{const St=a.quality.setStage(Y.stage);Vi(St),g(`Resolution Stage ${St.spec.roman} · ${St.spec.label} (${St.renderWidth}×${St.renderHeight})`)}),Ds.push(pt),Wi.appendChild(pt)}),Be.appendChild(Wi),b.addEventListener("click",()=>{const pt=a.quality.getCurrentStage()%5+1,St=a.quality.setStage(pt);Vi(St),g(`Resolution Stage ${St.spec.roman} · ${St.spec.label} (${St.renderWidth}×${St.renderHeight})`)}),a.quality.onChange(Vi);const Gi=document.createElement("div");Gi.className="control-label-line",Gi.style.marginTop="11px",Gi.innerHTML='<span>Mesh Level-of-Detail</span><span class="control-val" id="lod-mode-label">LOD0 Hero</span>',Be.appendChild(Gi);const Co=Gi.querySelector("#lod-mode-label"),Ns=document.createElement("div");Ns.className="segmented-row";const cr=[{label:"LOD0",mode:"0",desc:"LOD0 Hero"},{label:"LOD1",mode:"1",desc:"LOD1 Mid"},{label:"LOD2",mode:"2",desc:"LOD2 Far"},{label:"Auto",mode:"auto",desc:"Auto Distance"}],Us=[];cr.forEach((Y,pt)=>{const St=document.createElement("button");St.className=`seg-btn${pt===0?" active":""}`,St.textContent=Y.label,St.addEventListener("click",()=>{if(Us.forEach(kt=>kt.classList.remove("active")),St.classList.add("active"),Co.textContent=Y.desc,Y.mode==="auto")t.autoLOD=!0,n.autoLOD=!0;else{const kt=Number(Y.mode);t.autoLOD=!1,n.autoLOD=!1,t.setActiveLOD(kt),n.setActiveLOD(kt)}}),Us.push(St),Ns.appendChild(St)}),Be.appendChild(Ns);const V=document.createElement("div");V.className="export-btn-grid";const lt=document.createElement("button");lt.className="action-btn",lt.textContent="Light Fury .GLB";const yt=document.createElement("button");yt.className="action-btn",yt.textContent="Toothless .GLB",V.appendChild(lt),V.appendChild(yt);const wt=document.createElement("div");wt.className="export-status";const Ct=async Y=>{lt.disabled=!0,yt.disabled=!0,wt.style.color="",wt.textContent="Packaging binary .GLB asset…";try{const pt=Y==="light-fury"?await K2(n,n.activeLOD):await j2(t,t.activeLOD);wt.textContent=`Saved ${pt.filename} (${pt.sizeMB.toFixed(2)} MB)`,g(`Exported ${pt.filename}`)}catch(pt){wt.style.color="#f09898",wt.textContent=`Export failed: ${pt.message}`}finally{lt.disabled=!1,yt.disabled=!1}};lt.addEventListener("click",()=>Ct("light-fury")),yt.addEventListener("click",()=>Ct("toothless")),Be.appendChild(V),Be.appendChild(wt);function ut(){for(const Y of zt)Y()}return Ft.querySelector("#btn-reset-pose").addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),ie.forEach((Y,pt)=>Y.classList.toggle("active",pt===0)),Ue.forEach((Y,pt)=>Y.classList.toggle("active",pt===0)),an.forEach((Y,pt)=>Y.classList.toggle("active",pt===0)),xt(),ut(),g("Reset Twin Furies to Hero Perch")}),xt(),{updateTelemetry(Y,pt){M.innerHTML=`<strong>${Math.round(Y)}</strong> FPS`;const St=t.lodStats[pt].triangles+n.lodStats[pt].triangles;x.innerHTML=`<strong>LOD${pt}</strong> &middot; ${St.toLocaleString()} tris`},updateFlightUI:xt,syncControlsFromRig:ut,showToast:g,triggerShutterFlash:f,clearActiveCameraBookmark(){Et.forEach(Y=>Y.classList.remove("active"))}}}function J2(i,t){i.innerHTML="",i.classList.add("ux-viewer-mode");const e=document.createElement("div");e.className="ux-artwork-frame",e.setAttribute("aria-hidden","true"),e.innerHTML=`
    <span class="ux-frame-corner ux-fc-tl"></span>
    <span class="ux-frame-corner ux-fc-tr"></span>
    <span class="ux-frame-corner ux-fc-bl"></span>
    <span class="ux-frame-corner ux-fc-br"></span>
  `,i.appendChild(e);const n=document.createElement("div");n.className="ux-fx-layer",n.setAttribute("aria-hidden","true"),i.appendChild(n);function s(F,Z=6){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;const G=F.getBoundingClientRect(),$=G.left+G.width*.5,q=G.top+G.height*.5;for(let W=0;W<Z;W++){const nt=document.createElement("span");nt.className="ux-micro-heart",nt.innerHTML="&#10084;";const ot=(Math.random()-.5)*64,Q=-26-Math.random()*44,it=(Math.random()-.5)*38,j=.65+Math.random()*.55;nt.style.left=`${$.toFixed(1)}px`,nt.style.top=`${q.toFixed(1)}px`,nt.style.setProperty("--hx",`${ot.toFixed(1)}px`),nt.style.setProperty("--hy",`${Q.toFixed(1)}px`),nt.style.setProperty("--hr",`${it.toFixed(1)}deg`),nt.style.setProperty("--hs",j.toFixed(2)),n.appendChild(nt),window.setTimeout(()=>nt.remove(),1100)}}const o=document.createElement("div");o.className="shutter-flash",o.setAttribute("aria-hidden","true"),i.appendChild(o);const a=document.createElement("div");a.className="hud-toast ux-poetic-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),i.appendChild(a);let r=0;function l(F){a.innerHTML=`<span class="ux-toast-glyph" aria-hidden="true">&#9825;</span><span>${F}</span>`,a.classList.add("visible"),window.clearTimeout(r),r=window.setTimeout(()=>{a.classList.remove("visible")},2500)}function c(){o.classList.remove("is-flashing","flash"),o.offsetWidth,o.classList.add("flash"),window.setTimeout(()=>o.classList.remove("flash"),520)}const h=document.createElement("div");h.className="ux-dock-wrapper";const u=t.quality.getMetrics();h.innerHTML=`
    <nav class="ux-celestial-dock" aria-label="Experience tools">
      <button type="button" class="ux-jewel-btn" id="ux-btn-snapshot" data-tip="Capture Memory [P]" aria-label="Capture High-Resolution Snapshot (Shortcut P)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="3.2" y="5.6" width="15.6" height="11.8" rx="3.2" stroke="currentColor" stroke-width="1.25" />
          <path d="M8 5.6L9.2 3.9h3.6L14 5.6" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" />
          <path d="M11 14.3s-2.7-1.85-2.7-3.65a1.55 1.55 0 0 1 2.7-1.02 1.55 1.55 0 0 1 2.7 1.02c0 1.8-2.7 3.65-2.7 3.65Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" />
        </svg>
        <span class="ux-jewel-label">Capture</span>
      </button>

      <button type="button" class="ux-jewel-btn" id="ux-btn-quality" data-tip="Clarity &amp; Resolution [Q]" aria-expanded="false" aria-controls="ux-quality-popover" aria-label="Select Render Resolution Stage (Shortcut Q)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 3.2L13.1 8.4L18.5 9.1L14.4 12.7L15.6 18.1L11 15.2L6.4 18.1L7.6 12.7L3.5 9.1L8.9 8.4L11 3.2Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" />
        </svg>
        <span class="ux-jewel-label">Clarity <em id="ux-quality-roman">${u.spec.roman}</em></span>
      </button>

      <button type="button" class="ux-jewel-btn" id="ux-btn-reset" data-tip="Return to Pair [R]" aria-label="Smoothly Return Camera to Default View (Shortcut R)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M5.2 11a5.8 5.8 0 1 1 1.55 3.95M5.2 6.8V11h4.2" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="11" cy="11" r="1.4" fill="currentColor" />
        </svg>
        <span class="ux-jewel-label">Center</span>
      </button>

      <button type="button" class="ux-jewel-btn is-sound-on" id="ux-btn-sound" data-tip="Ambient Sound [M]" aria-pressed="true" aria-label="Toggle Ambient Sound (Shortcut M)">
        <span class="ux-sound-bars" id="ux-sound-bars" aria-hidden="true">
          <i></i><i></i><i></i><i></i>
        </span>
        <span class="ux-jewel-label" id="ux-sound-text">Sound</span>
      </button>

      <button type="button" class="ux-jewel-btn" id="ux-btn-fullscreen" data-tip="Fullscreen Canvas [F]" aria-pressed="false" aria-label="Toggle Fullscreen (Shortcut F)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M4.5 8.2V4.5h3.7M17.5 8.2V4.5h-3.7M4.5 13.8v3.7h3.7M17.5 13.8v3.7h-3.7" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button type="button" class="ux-jewel-btn" id="ux-btn-guide" data-tip="Navigation Guide [?]" aria-expanded="false" aria-controls="ux-guide-dialog" aria-label="Open Navigation &amp; Gesture Guide (Shortcut ?)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.25" />
          <path d="M9.3 8.9a1.85 1.85 0 1 1 2.55 1.72c-.58.26-.85.62-.85 1.22M11 14.6h.01" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
        </svg>
      </button>
    </nav>

    <!-- 5-Stage Resolution & Visual Quality Crystal Popover -->
    <div class="ux-quality-popover" id="ux-quality-popover" role="region" aria-label="5-Stage Resolution Selector">
      <div class="ux-qp-header">
        <span class="ux-qp-title">Visual Clarity</span>
        <span class="ux-qp-readout" id="ux-qp-readout">${u.renderWidth} &times; ${u.renderHeight}</span>
      </div>
      <div class="ux-qp-stages" role="radiogroup" aria-label="Resolution stages">
        ${Ja.map(F=>`
          <button
            type="button"
            role="radio"
            aria-checked="${F.stage===u.stage}"
            class="ux-stage-gem${F.stage===u.stage?" is-active":""}"
            data-stage="${F.stage}"
          >
            <span class="ux-gem-roman">${F.roman}</span>
            <span class="ux-gem-meta">
              <strong>${F.label}</strong>
              <small>${F.subtitle}</small>
            </span>
            <span class="ux-gem-heart" aria-hidden="true">&#9825;</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,i.appendChild(h);const d=h.querySelector(".ux-celestial-dock");d.addEventListener("pointermove",F=>{const Z=d.getBoundingClientRect();d.style.setProperty("--dock-x",`${(F.clientX-Z.left).toFixed(1)}px`),d.style.setProperty("--dock-y",`${(F.clientY-Z.top).toFixed(1)}px`)}),h.querySelectorAll(".ux-jewel-btn").forEach(F=>{F.addEventListener("pointermove",Z=>{if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;const G=F.getBoundingClientRect(),$=(Z.clientX-(G.left+G.width*.5))/G.width*4.5,q=(Z.clientY-(G.top+G.height*.5))/G.height*4.5;F.style.transform=`translate3d(${$.toFixed(2)}px, ${(q-1).toFixed(2)}px, 0)`}),F.addEventListener("pointerleave",()=>{F.style.transform=""})});const m=document.createElement("aside");m.className="ux-gesture-ribbon",m.setAttribute("aria-label","Camera gesture hints"),m.innerHTML=`
    <div class="ux-ribbon-flow">
      <span class="ux-ribbon-pair"><em>Drag</em> Rotate</span>
      <span class="ux-ribbon-heart" aria-hidden="true">&#9825;</span>
      <span class="ux-ribbon-pair"><em>Right-Drag / 2-Finger</em> Pan</span>
      <span class="ux-ribbon-heart" aria-hidden="true">&#9825;</span>
      <span class="ux-ribbon-pair"><em>Scroll / Pinch</em> Zoom</span>
      <span class="ux-ribbon-heart" aria-hidden="true">&#9825;</span>
      <span class="ux-ribbon-pair"><em>WASD</em> Drift</span>
      <span class="ux-ribbon-heart" aria-hidden="true">&#9825;</span>
      <span class="ux-ribbon-pair"><em>Double-Click</em> Approach</span>
    </div>
    <button type="button" class="ux-coach-dismiss" aria-label="Hide gesture hint" title="Hide">&times;</button>
  `,i.appendChild(m);let v=window.setTimeout(()=>{m.classList.add("is-hidden")},12500);m.addEventListener("pointerenter",()=>window.clearTimeout(v)),m.addEventListener("pointerleave",()=>{v=window.setTimeout(()=>m.classList.add("is-hidden"),5e3)}),m.querySelector(".ux-coach-dismiss").addEventListener("click",()=>{window.clearTimeout(v),m.classList.add("is-hidden")});const g=document.createElement("div");g.className="help-backdrop ux-carte-backdrop",g.id="ux-guide-dialog",g.innerHTML=`
    <div class="help-modal ux-carte-modal" role="dialog" aria-modal="true" aria-labelledby="ux-guide-title">
      <div class="help-modal-header">
        <div>
          <div class="brand-eyebrow">OUR WORLD &middot; INTERACTIVE SANCTUARY</div>
          <h2 class="help-modal-title" id="ux-guide-title">Moving Through the World</h2>
        </div>
        <button type="button" class="drawer-collapse-btn" id="ux-guide-close" aria-label="Close guide" title="Close [Esc]">&times;</button>
      </div>
      <div class="ux-gesture-cards">
        <div class="ux-gcard">
          <div class="ux-gcard-title">Orbit Around</div>
          <div class="ux-gcard-keys">Left-Drag &middot; 1-Finger Touch</div>
          <p>Circle gently around the cliff, islands, or soaring pair at your own pace.</p>
        </div>
        <div class="ux-gcard">
          <div class="ux-gcard-title">Velvet Pan</div>
          <div class="ux-gcard-keys">Right-Drag &middot; Shift+Drag &middot; 2-Finger</div>
          <p>Slide smoothly across the horizon in any screen direction.</p>
        </div>
        <div class="ux-gcard">
          <div class="ux-gcard-title">Depth &amp; Detail</div>
          <div class="ux-gcard-keys">Scroll Wheel &middot; Pinch &middot; Double-Click</div>
          <p>Zoom effortlessly or double-click any island, sea-arch, or dragon to glide closer.</p>
        </div>
        <div class="ux-gcard">
          <div class="ux-gcard-title">Free Drift</div>
          <div class="ux-gcard-keys">W A S D / Arrows &middot; E &amp; Q</div>
          <p>Roam freely through the air; hold Shift to travel faster across the sea.</p>
        </div>
      </div>
      <div class="help-grid" style="margin-top: 12px;">
        <div class="help-row"><span>Capture Snapshot</span><kbd>P</kbd></div>
        <div class="help-row"><span>Clarity Stage (I&ndash;V)</span><kbd>V</kbd></div>
        <div class="help-row"><span>Center Camera</span><kbd>R</kbd></div>
        <div class="help-row"><span>Fullscreen / Sound</span><kbd>F / M</kbd></div>
      </div>
      <p class="help-footer-tip">
        Day, dusk, starlight, rain, and flight unfold on their own &mdash; linger anywhere you wish.
      </p>
    </div>
  `,i.appendChild(g);const f=h.querySelector("#ux-btn-snapshot"),p=h.querySelector("#ux-btn-quality"),_=h.querySelector("#ux-quality-roman"),M=h.querySelector("#ux-quality-popover"),x=h.querySelector("#ux-qp-readout"),b=Array.from(h.querySelectorAll(".ux-stage-gem")),y=h.querySelector("#ux-btn-reset"),A=h.querySelector("#ux-btn-sound"),T=h.querySelector("#ux-sound-text"),S=h.querySelector("#ux-btn-fullscreen"),w=h.querySelector("#ux-btn-guide"),C=g.querySelector("#ux-guide-close");let E=!1;const R=F=>{E=F,M.classList.toggle("is-open",E),p.classList.toggle("is-active",E),p.setAttribute("aria-expanded",String(E))},L=F=>{_.textContent=F.spec.roman;const Z=F.msaaSamples>0?` · ${F.msaaSamples}× AA`:"";x.textContent=`${F.renderWidth} × ${F.renderHeight}${Z}`,b.forEach(G=>{const q=Number(G.dataset.stage)===F.stage;G.classList.toggle("is-active",q),G.setAttribute("aria-checked",String(q))})};t.quality.onChange(L),p.addEventListener("click",F=>{F.stopPropagation(),R(!E)}),b.forEach(F=>{F.addEventListener("click",Z=>{Z.stopPropagation();const G=Number(F.dataset.stage),$=t.quality.setStage(G);L($),s(F,5),l(`Clarity ${$.spec.roman} · ${$.spec.label} (${$.renderWidth}×${$.renderHeight})`)})}),window.addEventListener("pointerdown",F=>{E&&!h.contains(F.target)&&R(!1)});let I=!1;const k=F=>{I=F,I&&R(!1),g.classList.toggle("visible",I),w.setAttribute("aria-expanded",String(I)),w.classList.toggle("is-active",I),I?(m.classList.add("is-hidden"),C.focus()):w.focus()};w.addEventListener("click",()=>k(!I)),C.addEventListener("click",()=>k(!1)),g.addEventListener("click",F=>{F.target===g&&k(!1)}),f.addEventListener("click",()=>{s(f,8),t.onCaptureSnapshot()});const D=()=>{s(y,5),t.onResetView(),l("Returned gently to center view")};y.addEventListener("click",D);const U=()=>{const F=t.onToggleAudioMute();A.setAttribute("aria-pressed",String(!F)),A.classList.toggle("is-sound-on",!F),A.classList.toggle("is-muted",F),T.textContent=F?"Quiet":"Sound",l(F?"Ambient thunder hushed":"Ambient sound awakened")};A.addEventListener("click",U);const O=()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})};return S.addEventListener("click",O),document.addEventListener("fullscreenchange",()=>{const F=!!document.fullscreenElement;S.classList.toggle("is-active",F),S.setAttribute("aria-pressed",String(F))}),window.addEventListener("keydown",F=>{const Z=document.activeElement?.tagName;if(!(Z==="INPUT"||Z==="TEXTAREA")){if(F.code==="Escape"){I?(F.preventDefault(),k(!1)):E&&(F.preventDefault(),R(!1));return}F.key==="?"||F.code==="Slash"&&F.shiftKey?(F.preventDefault(),k(!I)):F.code==="KeyP"&&!F.metaKey&&!F.ctrlKey?(F.preventDefault(),s(f,7),t.onCaptureSnapshot()):F.code==="KeyF"&&!F.metaKey&&!F.ctrlKey?(F.preventDefault(),O()):F.code==="KeyR"&&!F.metaKey&&!F.ctrlKey?(F.preventDefault(),D()):F.code==="KeyM"&&!F.metaKey&&!F.ctrlKey?(F.preventDefault(),U()):F.code==="KeyV"&&!F.metaKey&&!F.ctrlKey&&(F.preventDefault(),R(!E))}}),{showToast:l,triggerShutterFlash:c}}function t_(){const i=window.__TWIN_FURIES_MODE__;return i==="developer"||i==="user"?i:"user"}async function e_(){const t=t_()==="user";document.title="Our World";const e=A2(),n=document.getElementById("canvas-container"),s=document.getElementById("hud-root");await e.advanceTo(14);const o=new J1({antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight),o.shadowMap.enabled=!0,o.shadowMap.type=su,o.toneMapping=Xl,o.toneMappingExposure=1.14,n.appendChild(o.domElement);const a=new Ya,r=new ni(42,window.innerWidth/window.innerHeight,.12,9500);let l=po[0];r.position.copy(l.position);const c=new ev(r,o.domElement);c.target.copy(l.target),c.enableDamping=!0,c.dampingFactor=t?.052:.065,c.screenSpacePanning=!0,c.rotateSpeed=t?.68:.78,c.panSpeed=t?.8:.85,c.zoomSpeed=t?.86:.92,c.minDistance=.45,c.maxDistance=320,c.maxPolarAngle=Math.PI*.56,c.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},c.update();const h=new Zn(window.innerWidth*o.getPixelRatio(),window.innerHeight*o.getPixelRatio(),{type:_i,samples:4}),u=new _v(o,h);u.addPass(new Mv(a,r));const d=new wo(new qt(window.innerWidth,window.innerHeight),.26,.52,1.04);d.materialHighPassFilter.fragmentShader=`
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
  `,d.materialHighPassFilter.needsUpdate=!0,u.addPass(d);const m=new bv;m.material.fragmentShader=m.material.fragmentShader.replace("gl_FragColor = texture2D( tDiffuse, vUv );",`gl_FragColor = texture2D( tDiffuse, vUv );
     gl_FragColor.r = !(gl_FragColor.r >= 0.0) ? 0.0 : (!(gl_FragColor.r <= 65000.0) ? 32.0 : min(gl_FragColor.r, 32.0));
     gl_FragColor.g = !(gl_FragColor.g >= 0.0) ? 0.0 : (!(gl_FragColor.g <= 65000.0) ? 32.0 : min(gl_FragColor.g, 32.0));
     gl_FragColor.b = !(gl_FragColor.b >= 0.0) ? 0.0 : (!(gl_FragColor.b <= 65000.0) ? 32.0 : min(gl_FragColor.b, 32.0));
     gl_FragColor.a = 1.0;`),m.material.needsUpdate=!0,u.addPass(m),await e.advanceTo(34);const v="golden-hour",g=ax(o,a,v),f=Px(g.sharedUniforms);a.add(f.group),await e.advanceTo(58);const p=ex();p.rootGroup.position.copy(di.position),p.rootGroup.rotation.set(0,di.yaw,0),a.add(p.rootGroup),p.rootGroup.updateMatrixWorld(!0);const _=new Dx(p);await e.advanceTo(82);const M=w2();M.rootGroup.position.copy(pi.position),M.rootGroup.rotation.set(0,pi.yaw,0),a.add(M.rootGroup),M.rootGroup.updateMatrixWorld(!0);const x=new Hx(M);await e.advanceTo(94);const b=S2(o,a,u,d,g.sunLight),y=new Cs(p,_,M,x);let A=null,T=1,S=!0,w=!1;c.addEventListener("start",()=>{A=null});let C=null,E=null,R=null;t?(R=y2(o,a,g,f.ocean,p,_,M,x,y),E=J2(s,{quality:b,onCaptureSnapshot(){w=!0},onResetView(){A={goalPos:po[0].position.clone(),goalTarget:po[0].target.clone()}},onToggleAudioMute(){const K=!g.isAudioMuted();return g.setAudioMuted(K),K}})):C=Q2(s,p,_,M,x,y,{quality:b,initialWeatherPreset:v,onSelectCameraBookmark(K){l=K,A={goalPos:K.position.clone(),goalTarget:K.target.clone()}},onFlightResetCamera(){A={goalPos:l.position.clone(),goalTarget:l.target.clone()}},onFlightSpeedChange(K){T=K},onToggleCursorGaze(K){S=K},onCaptureSnapshot(){w=!0},onSelectWeatherPreset(K){g.applyPreset(K,o,a)},onSunElevationChange(K){g.setSunElevation(K,o,a)},onMistDensityChange(K){g.setMistDensity(K)},onRainIntensityChange(K){g.setRainIntensity(K)},onWindStrengthChange(K){g.setWindStrength(K)},onLightningFrequencyChange(K){g.setLightningFrequency(K)},onTriggerLightningStrike(){g.triggerLightningStrike()},onOceanParamsChange(K){f.ocean.setOceanParams(K)}});const L=K=>{C?C.showToast(K):E&&E.showToast(K)},I=()=>{C?C.triggerShutterFlash():E&&E.triggerShutterFlash()},k=new Set,D=new P,U=new P,O=new P,F=new P;window.addEventListener("keydown",K=>{const dt=document.activeElement?.tagName;dt==="INPUT"||dt==="TEXTAREA"||k.add(K.code)}),window.addEventListener("keyup",K=>{k.delete(K.code)}),window.addEventListener("blur",()=>{k.clear()});const Z=new f0,G=new qt;o.domElement.addEventListener("dblclick",K=>{if(y.isPlaying&&!t)return;const dt=o.domElement.getBoundingClientRect();G.x=(K.clientX-dt.left)/dt.width*2-1,G.y=-((K.clientY-dt.top)/dt.height)*2+1,Z.setFromCamera(G,r);const bt=[M.rootGroup,p.rootGroup,f.group],zt=Z.intersectObjects(bt,!0).find(Jt=>Jt.distance<650&&!(Jt.object instanceof no)&&!Jt.object.userData?.excludeFromExport);if(!zt)return;const Pt=zt.point.clone();let Ut=!1,se=zt.object,Rt="Coastal Landform";for(;se;){if(se===M.rootGroup){Ut=!0,Rt="Light Fury";break}if(se===p.rootGroup){Ut=!0,Rt="Toothless";break}if(se.name.startsWith("FaroeseHeadlandSeaArch")){Rt="Headland Sea-Arch";break}if(se.name==="TabularFaroeseSeaStacks"){Rt="Tabular Sea-Stack";break}if(se.name==="WestWaterfallDoubleIsland"){Rt="Waterfall Double-Island";break}if(se.name==="StarboardCrescentLagoonAtoll"){Rt="Crescent Lagoon";break}se=se.parent}const Wt=r.position.clone().sub(Pt).normalize(),ie=r.position.distanceTo(Pt),It=Ut?X.clamp(ie*.6,2.6,7.5):X.clamp(ie*.55,10,68),Nt=Pt.clone().addScaledVector(Wt,It);Nt.y=Math.max(Nt.y,Si(Nt.x,Nt.z)+1.2,-9.2),C&&C.clearActiveCameraBookmark(),A={goalPos:Nt,goalTarget:Pt},C&&C.showToast(`Focused on ${Rt}`)});const $=new qt(0,0);let q=-10,W=!1,nt=0,ot=0,Q=0;window.addEventListener("pointerdown",K=>{K.target===o.domElement&&(W=!0)}),window.addEventListener("pointerup",()=>{W=!1}),window.addEventListener("pointermove",K=>{W||($.x=K.clientX/Math.max(1,window.innerWidth)*2-1,$.y=-(K.clientY/Math.max(1,window.innerHeight)*2+1),q=performance.now()*.001)});const it=p.rig.boneMap.get("head"),j=p.rig.boneMap.get("neck_03"),tt=p.rig.boneMap.get("eye_L"),ft=p.rig.boneMap.get("eye_R"),et=M.rig.boneMap.get("head"),z=M.rig.boneMap.get("neck_03"),xt=M.rig.boneMap.get("eye_L"),gt=M.rig.boneMap.get("eye_R");window.addEventListener("resize",()=>{const K=window.innerWidth,dt=window.innerHeight;r.aspect=K/dt,r.updateProjectionMatrix(),b.handleResize(K,dt)}),_.update(.016),x.update(.016),g.update(0,new P(0,1.15,.35),r.position),f.update(0,r.position),u.render();const Et=new Uu;let Tt=0,Ft=0,ht=60,H=!1;function N(){requestAnimationFrame(N);const K=Math.min(Et.getDelta(),.05),dt=Et.elapsedTime;R&&R.update(K,dt);const bt=y.isPlaying,_t=y.update(K*T,r,c.target);if(c.maxPolarAngle=_t.isAirborne||t?Math.PI*.78:Math.PI*.56,t){const Nt=r.position.distanceTo(c.target),Jt=X.clamp((Nt-1.5)/28,0,1);c.rotateSpeed=X.lerp(.46,.72,Jt),c.panSpeed=X.lerp(.54,1.02,Jt),c.zoomSpeed=X.lerp(.68,.96,Jt)}if(H&&!y.isPlaying&&C&&(A={goalPos:l.position.clone(),goalTarget:l.target.clone()},C.updateFlightUI(),C.syncControlsFromRig()),H=y.isPlaying,bt&&C&&C.updateFlightUI(),F.set(0,0,0),!y.isPlaying||!y.followCamera||t){const Nt=(k.has("KeyW")||k.has("ArrowUp")?1:0)-(k.has("KeyS")||k.has("ArrowDown")?1:0),Jt=(k.has("KeyD")||k.has("ArrowRight")?1:0)-(k.has("KeyA")||k.has("ArrowLeft")?1:0),te=(k.has("KeyE")?1:0)-(k.has("KeyQ")?1:0);if(Nt!==0||Jt!==0||te!==0){A=null,r.getWorldDirection(U),O.crossVectors(U,r.up).normalize(),F.addScaledVector(U,Nt).addScaledVector(O,Jt),F.y+=te*.85,F.lengthSq()>1e-5&&F.normalize();const be=r.position.distanceTo(c.target),at=X.clamp(be*.78,5.5,30),Vt=k.has("ShiftLeft")||k.has("ShiftRight")?2.2:1;F.multiplyScalar(at*Vt)}}if(D.lerp(F,1-Math.exp(-8.5*K)),D.lengthSq()>1e-4&&(r.position.addScaledVector(D,K),c.target.addScaledVector(D,K)),A&&(!y.isPlaying||t)){const Nt=1-Math.exp(-5*K);r.position.lerp(A.goalPos,Nt),c.target.lerp(A.goalTarget,Nt),r.position.distanceTo(A.goalPos)<.012&&c.target.distanceTo(A.goalTarget)<.012&&(A=null)}c.update();const zt=Si(r.position.x,r.position.z),Pt=Math.max(-9.8,zt+.55);r.position.y<Pt&&(r.position.y=Pt),_.update(K),x.update(K);const se=performance.now()*.001-q<4&&!W,Rt=r.position.distanceTo(new P(0,1.1,0))<26,Wt=S&&!y.isPlaying&&se&&Rt?1:0;if(Q+=(Wt-Q)*(1-Math.exp(-4.2*K)),nt+=($.x-nt)*(1-Math.exp(-5.5*K)),ot+=($.y-ot)*(1-Math.exp(-5.5*K)),Q>.002){const Nt=nt*.22*Q,Jt=-ot*.14*Q,te=-nt*.07*Q,be=nt*.14*Q,at=-ot*.1*Q;it&&(it.rotation.y+=Nt*.72,it.rotation.x+=Jt*.75,it.rotation.z+=te),j&&(j.rotation.y+=Nt*.32,j.rotation.x+=Jt*.25),tt&&ft&&(tt.rotation.y+=be,ft.rotation.y+=be,tt.rotation.x+=at,ft.rotation.x+=at),et&&(et.rotation.y+=Nt*.78,et.rotation.x+=Jt*.78,et.rotation.z+=te*1.15),z&&(z.rotation.y+=Nt*.36,z.rotation.x+=Jt*.28),xt&&gt&&(xt.rotation.y+=be,gt.rotation.y+=be,xt.rotation.x+=at,gt.rotation.x+=at)}const ie=r.position.distanceTo(_t.worldFocus),It=p.updateAutoLOD(ie);if(M.updateAutoLOD(ie),g.update(dt,_t.worldFocus,r.position),f.update(dt,r.position),Tt+=K,Ft++,Tt>=.4){const Nt=Ft/Tt;ht=ht*.65+Nt*.35,C&&C.updateTelemetry(ht,It),Tt=0,Ft=0}if(u.render(),w){w=!1;try{const Nt=o.domElement.toDataURL("image/png"),Jt=document.createElement("a"),te=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");Jt.download=t?`our-world-${te}.png`:`our-world-studio-${te}.png`,Jt.href=Nt,Jt.click(),I(),L("Memory Captured (.PNG)")}catch{L("Snapshot unavailable on this device")}}}N(),await e.completeAndDissolve(s)}e_();
