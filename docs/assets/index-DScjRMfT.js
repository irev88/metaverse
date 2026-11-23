(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="174",ws={ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,Il=1,Lu=2,_h=1,xh=2,si=3,Li=0,Sn=1,gn=2,li=0,ys=1,ia=2,Dl=3,Fl=4,Iu=5,$i=100,Du=101,Fu=102,Nu=103,Uu=104,ku=200,Bu=201,zu=202,Ou=203,fr=204,mr=205,Hu=206,Vu=207,Wu=208,Gu=209,Xu=210,Yu=211,$u=212,qu=213,Zu=214,gr=0,vr=1,_r=2,ci=3,xr=4,Mr=5,wr=6,yr=7,Mh=0,ju=1,Ku=2,Ei=0,wh=1,yh=2,bh=3,al=4,Sh=5,Ah=6,Eh=7,Nl="attached",Qu="detached",Th=300,Ts=301,Cs=302,br=303,Sr=304,va=306,Qn=1e3,yi=1001,sa=1002,Tn=1003,Ch=1004,Ks=1005,Yn=1006,Zo=1007,bi=1008,di=1009,Ph=1010,Rh=1011,so=1012,rl=1013,Qi=1014,$n=1015,Kn=1016,ll=1017,cl=1018,Ps=1020,Lh=35902,Ih=1021,Dh=1022,In=1023,Fh=1024,Nh=1025,bs=1026,Rs=1027,hl=1028,ul=1029,Uh=1030,dl=1031,pl=1033,jo=33776,Ko=33777,Qo=33778,Jo=33779,Ar=35840,Er=35841,Tr=35842,Cr=35843,Pr=36196,Rr=37492,Lr=37496,Ir=37808,Dr=37809,Fr=37810,Nr=37811,Ur=37812,kr=37813,Br=37814,zr=37815,Or=37816,Hr=37817,Vr=37818,Wr=37819,Gr=37820,Xr=37821,ta=36492,Yr=36494,$r=36495,kh=36283,qr=36284,Zr=36285,jr=36286,Ju=2300,td=2301,ed=3200,nd=3201,Bh=0,id=1,Un="",mn="srgb",Ls="srgb-linear",oa="linear",Ie="srgb",es=7680,Ul=519,sd=512,od=513,ad=514,zh=515,rd=516,ld=517,cd=518,hd=519,kl=35044,Bl="300 es",ri=2e3,aa=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const no=Math.PI/180,oo=180/Math.PI;function ts(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function fl(i,t){return(i%t+t)%t}function ud(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dd(i,t,e){return i!==t?(e-i)/(t-i):0}function io(i,t,e){return(1-e)*i+e*t}function pd(i,t,e,n){return io(i,t,1-Math.exp(-e*n))}function fd(i,t=1){return t-Math.abs(fl(i,t*2)-t)}function md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _d(i,t){return i+Math.random()*(t-i)}function xd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(zl=i);let t=zl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wd(i){return i*no}function yd(i){return i*oo}function bd(i){return(i&i-1)===0&&i!==0}function Sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ad(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ed(i,t,e,n,s){const o=Math.cos,a=Math.sin,r=o(e/2),l=a(e/2),c=o((t+n)/2),h=a((t+n)/2),u=o((t-n)/2),p=a((t-n)/2),f=o((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(r*h,l*u,l*p,r*c);break;case"YZY":i.set(l*p,r*h,l*u,r*c);break;case"ZXZ":i.set(l*u,l*p,r*h,r*c);break;case"XZX":i.set(r*h,l*g,l*f,r*c);break;case"YXY":i.set(l*f,r*h,l*g,r*c);break;case"ZYZ":i.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $={DEG2RAD:no,RAD2DEG:oo,generateUUID:ts,clamp:pe,euclideanModulo:fl,mapLinear:ud,inverseLerp:dd,lerp:io,damp:pd,pingpong:fd,smoothstep:md,smootherstep:gd,randInt:vd,randFloat:_d,randFloatSpread:xd,seededRandom:Md,degToRad:wd,radToDeg:yd,isPowerOfTwo:bd,ceilPowerOfTwo:Sd,floorPowerOfTwo:Ad,setQuaternionFromProperEuler:Ed,normalize:Mn,denormalize:_s};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,e,n,s,o,a,r,l,c){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c)}set(t,e,n,s,o,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],f=n[5],g=n[8],v=s[0],m=s[3],d=s[6],M=s[1],w=s[4],_=s[7],A=s[2],b=s[5],S=s[8];return o[0]=a*v+r*M+l*A,o[3]=a*m+r*w+l*b,o[6]=a*d+r*_+l*S,o[1]=c*v+h*M+u*A,o[4]=c*m+h*w+u*b,o[7]=c*d+h*_+u*S,o[2]=p*v+f*M+g*A,o[5]=p*m+f*w+g*b,o[8]=p*d+f*_+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*o*h+n*r*l+s*o*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,p=r*l-h*o,f=c*o-a*l,g=e*u+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(r*n-s*a)*v,t[3]=p*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-r*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-s*c,s*l,-s*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new de;function Oh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){const i=ra("canvas");return i.style.display="block",i}const Ol={};function Xi(i){i in Ol||(Ol[i]=!0,console.warn(i))}function Cd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Pd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hl=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){const i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===Ie&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ie&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?oa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,a){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:n,transfer:Ie,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),i}const Ae=Ld();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ns;class Id{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=ra("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ra("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=hi(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dd=0;class _a{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(Ea(s[a].image)):o.push(Ea(s[a]))}else o=Ea(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Id.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fd=0;class vn extends Ji{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,n=yi,s=yi,o=Yn,a=bi,r=In,l=di,c=vn.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=ts(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qn:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qn:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Th;vn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,e=0,n=0,s=1){ke.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],f=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(f+1)/2,A=(d+1)/2,b=(h+p)/4,S=(u+v)/4,E=(g+m)/4;return w>_&&w>A?w<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(w),s=b/n,o=S/n):_>A?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=b/s,o=E/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=S/o,s=E/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(p-h)/M,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nd extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _a(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Nd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hh extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,r){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const p=o[a+0],f=o[a+1],g=o[a+2],v=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==p||c!==f||h!==g){let m=1-r;const d=l*p+c*f+h*g+u*v,M=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const A=Math.sqrt(w),b=Math.atan2(A,d*M);m=Math.sin(m*b)/A,r=Math.sin(r*b)/A}const _=r*M;if(l=l*m+p*_,c=c*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-r){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,a){const r=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[a],p=o[a+1],f=o[a+2],g=o[a+3];return t[e]=r*g+h*u+l*f-c*p,t[e+1]=l*g+h*p+c*u-r*f,t[e+2]=c*g+h*f+r*p-l*u,t[e+3]=h*g-r*u-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(s/2),u=r(o/2),p=l(n/2),f=l(s/2),g=l(o/2);switch(a){case"XYZ":this._x=p*h*u+c*f*g,this._y=c*f*u-p*h*g,this._z=c*h*g+p*f*u,this._w=c*h*u-p*f*g;break;case"YXZ":this._x=p*h*u+c*f*g,this._y=c*f*u-p*h*g,this._z=c*h*g-p*f*u,this._w=c*h*u+p*f*g;break;case"ZXY":this._x=p*h*u-c*f*g,this._y=c*f*u+p*h*g,this._z=c*h*g+p*f*u,this._w=c*h*u-p*f*g;break;case"ZYX":this._x=p*h*u-c*f*g,this._y=c*f*u+p*h*g,this._z=c*h*g-p*f*u,this._w=c*h*u+p*f*g;break;case"YZX":this._x=p*h*u+c*f*g,this._y=c*f*u+p*h*g,this._z=c*h*g-p*f*u,this._w=c*h*u-p*f*g;break;case"XZY":this._x=p*h*u-c*f*g,this._y=c*f*u-p*h*g,this._z=c*h*g+p*f*u,this._w=c*h*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+r+u;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(a-s)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(o+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(o-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(a-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+s*c-o*l,this._y=s*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-s*r,this._w=a*h-n*r-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+s*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=o*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*s-r*n),h=2*(r*e-o*s),u=2*(o*n-a*e);return this.x=e+l*c+a*u-r*h,this.y=n+l*h+r*c-o*u,this.z=s+l*u+o*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=s*l-o*r,this.y=o*a-n*l,this.z=n*r-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new T,Wl=new nn;class Ii{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(o,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Mo.subVectors(this.max,Ws),is.subVectors(t.a,Ws),ss.subVectors(t.b,Ws),os.subVectors(t.c,Ws),pi.subVectors(ss,is),fi.subVectors(os,ss),ki.subVectors(is,os);let e=[0,-pi.z,pi.y,0,-fi.z,fi.y,0,-ki.z,ki.y,pi.z,0,-pi.x,fi.z,0,-fi.x,ki.z,0,-ki.x,-pi.y,pi.x,0,-fi.y,fi.x,0,-ki.y,ki.x,0];return!Ca(e,is,ss,os,Mo)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,is,ss,os,Mo))?!1:(wo.crossVectors(pi,fi),e=[wo.x,wo.y,wo.z],Ca(e,is,ss,os,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Jn=[new T,new T,new T,new T,new T,new T,new T,new T],On=new T,xo=new Ii,is=new T,ss=new T,os=new T,pi=new T,fi=new T,ki=new T,Ws=new T,Mo=new T,wo=new T,Bi=new T;function Ca(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){Bi.fromArray(i,o);const r=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const kd=new Ii,Gs=new T,Pa=new T;class Di{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Pa)),this.expandByPoint(Gs.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new T,Ra=new T,yo=new T,mi=new T,La=new T,bo=new T,Ia=new T;class co{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Ra);const o=t.distanceTo(e)*.5,a=-this.direction.dot(yo),r=mi.dot(this.direction),l=-mi.dot(yo),c=mi.lengthSq(),h=Math.abs(1-a*a);let u,p,f,g;if(h>0)if(u=a*l-r,p=a*r-l,g=o*h,u>=0)if(p>=-g)if(p<=g){const v=1/h;u*=v,p*=v,f=u*(u+a*p+2*r)+p*(a*u+p+2*l)+c}else p=o,u=Math.max(0,-(a*p+r)),f=-u*u+p*(p+2*l)+c;else p=-o,u=Math.max(0,-(a*p+r)),f=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*o+r)),p=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-o,-l),o),f=p*(p+2*l)+c):(u=Math.max(0,-(a*o+r)),p=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+p*(p+2*l)+c);else p=a>0?-o:o,u=Math.max(0,-(a*p+r)),f=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ra).addScaledVector(yo,p),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(o=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),u>=0?(r=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(r=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,o){La.subVectors(e,t),bo.subVectors(n,t),Ia.crossVectors(La,bo);let a=this.direction.dot(Ia),r;if(a>0){if(s)return null;r=1}else if(a<0)r=-1,a=-a;else return null;mi.subVectors(this.origin,t);const l=r*this.direction.dot(bo.crossVectors(mi,bo));if(l<0)return null;const c=r*this.direction.dot(La.cross(mi));if(c<0||l+c>a)return null;const h=-r*mi.dot(Ia);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,o,a,r,l,c,h,u,p,f,g,v,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c,h,u,p,f,g,v,m)}set(t,e,n,s,o,a,r,l,c,h,u,p,f,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=o,d[5]=a,d[9]=r,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),o=1/as.setFromMatrixColumn(t,1).length(),a=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const p=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=p-v*c,e[9]=-r*l,e[2]=v-p*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,f=l*u,g=c*h,v=c*u;e[0]=p+v*r,e[4]=g*r-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=f*r-g,e[6]=v+p*r,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,f=l*u,g=c*h,v=c*u;e[0]=p-v*r,e[4]=-a*u,e[8]=g+f*r,e[1]=f+g*r,e[5]=a*h,e[9]=v-p*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=g*c-f,e[8]=p*c+v,e[1]=l*u,e[5]=v*c+p,e[9]=f*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=v-p*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=f*u+g,e[10]=p-v*u}else if(t.order==="XZY"){const p=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=r*h,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,zd)}lookAt(t,e,n){const s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),gi.crossVectors(n,Pn),gi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),gi.crossVectors(n,Pn)),gi.normalize(),So.crossVectors(Pn,gi),s[0]=gi.x,s[4]=So.x,s[8]=Pn.x,s[1]=gi.y,s[5]=So.y,s[9]=Pn.y,s[2]=gi.z,s[6]=So.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],f=n[13],g=n[2],v=n[6],m=n[10],d=n[14],M=n[3],w=n[7],_=n[11],A=n[15],b=s[0],S=s[4],E=s[8],y=s[12],x=s[1],P=s[5],C=s[9],R=s[13],L=s[2],D=s[6],B=s[10],k=s[14],F=s[3],H=s[7],V=s[11],Y=s[15];return o[0]=a*b+r*x+l*L+c*F,o[4]=a*S+r*P+l*D+c*H,o[8]=a*E+r*C+l*B+c*V,o[12]=a*y+r*R+l*k+c*Y,o[1]=h*b+u*x+p*L+f*F,o[5]=h*S+u*P+p*D+f*H,o[9]=h*E+u*C+p*B+f*V,o[13]=h*y+u*R+p*k+f*Y,o[2]=g*b+v*x+m*L+d*F,o[6]=g*S+v*P+m*D+d*H,o[10]=g*E+v*C+m*B+d*V,o[14]=g*y+v*R+m*k+d*Y,o[3]=M*b+w*x+_*L+A*F,o[7]=M*S+w*P+_*D+A*H,o[11]=M*E+w*C+_*B+A*V,o[15]=M*y+w*R+_*k+A*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],f=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+o*l*u-s*c*u-o*r*p+n*c*p+s*r*f-n*l*f)+v*(+e*l*f-e*c*p+o*a*p-s*a*f+s*c*h-o*l*h)+m*(+e*c*u-e*r*f-o*a*u+n*a*f+o*r*h-n*c*h)+d*(-s*r*h-e*l*u+e*r*p+s*a*u-n*a*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],f=t[11],g=t[12],v=t[13],m=t[14],d=t[15],M=u*m*c-v*p*c+v*l*f-r*m*f-u*l*d+r*p*d,w=g*p*c-h*m*c-g*l*f+a*m*f+h*l*d-a*p*d,_=h*v*c-g*u*c+g*r*f-a*v*f-h*r*d+a*u*d,A=g*u*l-h*v*l-g*r*p+a*v*p+h*r*m-a*u*m,b=e*M+n*w+s*_+o*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return t[0]=M*S,t[1]=(v*p*o-u*m*o-v*s*f+n*m*f+u*s*d-n*p*d)*S,t[2]=(r*m*o-v*l*o+v*s*c-n*m*c-r*s*d+n*l*d)*S,t[3]=(u*l*o-r*p*o-u*s*c+n*p*c+r*s*f-n*l*f)*S,t[4]=w*S,t[5]=(h*m*o-g*p*o+g*s*f-e*m*f-h*s*d+e*p*d)*S,t[6]=(g*l*o-a*m*o-g*s*c+e*m*c+a*s*d-e*l*d)*S,t[7]=(a*p*o-h*l*o+h*s*c-e*p*c-a*s*f+e*l*f)*S,t[8]=_*S,t[9]=(g*u*o-h*v*o-g*n*f+e*v*f+h*n*d-e*u*d)*S,t[10]=(a*v*o-g*r*o+g*n*c-e*v*c-a*n*d+e*r*d)*S,t[11]=(h*r*o-a*u*o-h*n*c+e*u*c+a*n*f-e*r*f)*S,t[12]=A*S,t[13]=(h*v*s-g*u*s+g*n*p-e*v*p-h*n*m+e*u*m)*S,t[14]=(g*r*s-a*v*s-g*n*l+e*v*l+a*n*m-e*r*m)*S,t[15]=(a*u*s-h*r*s+h*n*l-e*u*l-a*n*p+e*r*p)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+n,h*l-s*a,0,c*l-s*r,h*l+s*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,h=a+a,u=r+r,p=o*c,f=o*h,g=o*u,v=a*h,m=a*u,d=r*u,M=l*c,w=l*h,_=l*u,A=n.x,b=n.y,S=n.z;return s[0]=(1-(v+d))*A,s[1]=(f+_)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(p+d))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+w)*S,s[9]=(m-M)*S,s[10]=(1-(p+v))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=as.set(s[0],s[1],s[2]).length();const a=as.set(s[4],s[5],s[6]).length(),r=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Hn.copy(this);const c=1/o,h=1/a,u=1/r;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,s,o,a,r=ri){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let f,g;if(r===ri)f=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===aa)f=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,a,r=ri){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-o),p=(e+t)*c,f=(n+s)*h;let g,v;if(r===ri)g=(a+o)*u,v=-2*u;else if(r===aa)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const as=new T,Hn=new ie,Bd=new T(0,0,0),zd=new T(1,1,1),gi=new T,So=new T,Pn=new T,Gl=new ie,Xl=new nn;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],a=s[4],r=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(pe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Od=0;const Yl=new T,rs=new nn,ei=new ie,Ao=new T,Xs=new T,Hd=new T,Vd=new nn,$l=new T(1,0,0),ql=new T(0,1,0),Zl=new T(0,0,1),jl={type:"added"},Wd={type:"removed"},ls={type:"childadded",child:null},Da={type:"childremoved",child:null};class rn extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new T,e=new Cn,n=new nn,s=new T(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new de}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Xs,Ao,this.up):ei.lookAt(Ao,Xs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(ei),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wd),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));s.material=r}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),f=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}rn.DEFAULT_UP=new T(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new T,ni=new T,Fa=new T,ii=new T,cs=new T,hs=new T,Kl=new T,Na=new T,Ua=new T,ka=new T,Ba=new ke,za=new ke,Oa=new ke;class Xn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Vn.subVectors(s,e),ni.subVectors(n,e),Fa.subVectors(t,e);const a=Vn.dot(Vn),r=Vn.dot(ni),l=Vn.dot(Fa),c=ni.dot(ni),h=ni.dot(Fa),u=a*c-r*r;if(u===0)return o.set(0,0,0),null;const p=1/u,f=(c*l-r*h)*p,g=(a*h-r*l)*p;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,o,a,r,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(r,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,o,a){return Ba.setScalar(0),za.setScalar(0),Oa.setScalar(0),Ba.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),Oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ba,o.x),a.addScaledVector(za,o.y),a.addScaledVector(Oa,o.z),a}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),ni.subVectors(t,e),Vn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Vn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let a,r;cs.subVectors(s,n),hs.subVectors(o,n),Na.subVectors(t,n);const l=cs.dot(Na),c=hs.dot(Na);if(l<=0&&c<=0)return e.copy(n);Ua.subVectors(t,s);const h=cs.dot(Ua),u=hs.dot(Ua);if(h>=0&&u<=h)return e.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cs,a);ka.subVectors(t,o);const f=cs.dot(ka),g=hs.dot(ka);if(g>=0&&f<=g)return e.copy(o);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(hs,r);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Kl.subVectors(o,s),r=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Kl,r);const d=1/(m+v+p);return a=v*d,r=p*d,e.copy(n).addScaledVector(cs,a).addScaledVector(hs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=fl(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Ha(a,o,t+1/3),this.g=Ha(a,o,t),this.b=Ha(a,o,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Ae.fromWorkingColorSpace(xn.copy(this),t),Math.round(pe(xn.r*255,0,255))*65536+Math.round(pe(xn.g*255,0,255))*256+Math.round(pe(xn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,s=xn.g,o=xn.b,a=Math.max(n,s,o),r=Math.min(n,s,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=mn){Ae.fromWorkingColorSpace(xn.copy(this),t);const e=xn.r,n=xn.g,s=xn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Eo);const n=io(vi.h,Eo.h,e),s=io(vi.s,Eo.s,e),o=io(vi.l,Eo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Lt;Lt.NAMES=Vh;let Gd=0;class Bs extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=ys,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=mr,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fr&&(n.blendSrc=this.blendSrc),this.blendDst!==mr&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ao extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new T,To=new zt;let Xd=0;class q{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)To.fromBufferAttribute(this,e),To.applyMatrix3(t),this.setXY(e,To.x,To.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),s=Mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),s=Mn(s,this.array),o=Mn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kl&&(t.usage=this.usage),t}}class me extends q{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wh extends q{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends q{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yd=0;const Fn=new ie,Va=new rn,us=new T,Rn=new Ii,Ys=new Ii,pn=new T;class Gt extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oh(t)?Wh:me)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new de().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Ys.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(Rn.min,Ys.min),Rn.expandByPoint(pn),pn.addVectors(Rn.max,Ys.max),Rn.expandByPoint(pn)):(Rn.expandByPoint(Ys.min),Rn.expandByPoint(Ys.max))}Rn.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)pn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(pn));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)pn.fromBufferAttribute(r,c),l&&(us.fromBufferAttribute(t,c),pn.add(us)),s=Math.max(s,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new q(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let E=0;E<n.count;E++)r[E]=new T,l[E]=new T;const c=new T,h=new T,u=new T,p=new zt,f=new zt,g=new zt,v=new T,m=new T;function d(E,y,x){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),p.fromBufferAttribute(o,E),f.fromBufferAttribute(o,y),g.fromBufferAttribute(o,x),h.sub(c),u.sub(c),f.sub(p),g.sub(p);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),r[E].add(v),r[y].add(v),r[x].add(v),l[E].add(m),l[y].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let E=0,y=M.length;E<y;++E){const x=M[E],P=x.start,C=x.count;for(let R=P,L=P+C;R<L;R+=3)d(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const w=new T,_=new T,A=new T,b=new T;function S(E){A.fromBufferAttribute(s,E),b.copy(A);const y=r[E];w.copy(y),w.sub(A.multiplyScalar(A.dot(y))).normalize(),_.crossVectors(b,y);const P=_.dot(l[E])<0?-1:1;a.setXYZW(E,w.x,w.y,w.z,P)}for(let E=0,y=M.length;E<y;++E){const x=M[E],P=x.start,C=x.count;for(let R=P,L=P+C;R<L;R+=3)S(t.getX(R+0)),S(t.getX(R+1)),S(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new q(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new T,o=new T,a=new T,r=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,p=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let d=0;d<h;d++)p[g++]=c[f++]}return new q(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gt,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,u=c.length;h<u;h++){const p=c[h],f=t(p,n);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new ie,zi=new co,Co=new Di,Jl=new T,Po=new T,Ro=new T,Lo=new T,Wa=new T,Io=new T,tc=new T,Do=new T;class Fe extends rn{constructor(t=new Gt,e=new ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(o&&r){Io.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],u=o[l];h!==0&&(Wa.fromBufferAttribute(u,t),a?Io.addScaledVector(Wa,h):Io.addScaledVector(Wa.sub(e),h))}e.add(Io)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(o),zi.copy(t.ray).recast(t.near),!(Co.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Co,Jl)===null||zi.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&(Ql.copy(o).invert(),zi.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,p=o.groups,f=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,A=w;_<A;_+=3){const b=r.getX(_),S=r.getX(_+1),E=r.getX(_+2);s=Fo(this,d,t,n,c,h,u,b,S,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){const M=r.getX(m),w=r.getX(m+1),_=r.getX(m+2);s=Fo(this,a,t,n,c,h,u,M,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,A=w;_<A;_+=3){const b=_,S=_+1,E=_+2;s=Fo(this,d,t,n,c,h,u,b,S,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){const M=m,w=m+1,_=m+2;s=Fo(this,a,t,n,c,h,u,M,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function $d(i,t,e,n,s,o,a,r){let l;if(t.side===Sn?l=n.intersectTriangle(a,o,s,!0,r):l=n.intersectTriangle(s,o,a,t.side===Li,r),l===null)return null;Do.copy(r),Do.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:i}}function Fo(i,t,e,n,s,o,a,r,l,c){i.getVertexPosition(r,Po),i.getVertexPosition(l,Ro),i.getVertexPosition(c,Lo);const h=$d(i,t,e,n,Po,Ro,Lo,tc);if(h){const u=new T;Xn.getBarycoord(tc,Po,Ro,Lo,u),s&&(h.uv=Xn.getInterpolatedAttribute(s,r,l,c,u,new zt)),o&&(h.uv1=Xn.getInterpolatedAttribute(o,r,l,c,u,new zt)),a&&(h.normal=Xn.getInterpolatedAttribute(a,r,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:r,b:l,c,normal:new T,materialIndex:0};Xn.getNormal(Po,Ro,Lo,p.normal),h.face=p,h.barycoord=u}return h}class ho extends Gt{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],u=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(v,m,d,M,w,_,A,b,S,E,y){const x=_/S,P=A/E,C=_/2,R=A/2,L=b/2,D=S+1,B=E+1;let k=0,F=0;const H=new T;for(let V=0;V<B;V++){const Y=V*P-R;for(let j=0;j<D;j++){const W=j*x-C;H[v]=W*M,H[m]=Y*w,H[d]=L,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[d]=b>0?1:-1,h.push(H.x,H.y,H.z),u.push(j/S),u.push(1-V/E),k+=1}}for(let V=0;V<E;V++)for(let Y=0;Y<S;Y++){const j=p+Y+D*V,W=p+Y+D*(V+1),X=p+(Y+1)+D*(V+1),O=p+(Y+1)+D*V;l.push(j,W,O),l.push(W,X,O),F+=6}r.addGroup(f,F,y),f+=F,p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function wn(i){const t={};for(let e=0;e<i.length;e++){const n=Is(i[e]);for(const s in n)t[s]=n[s]}return t}function qd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const ro={clone:Is,merge:wn};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xh extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new T,ec=new zt,nc=new zt;class Nn extends Xh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(no*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,ps=1;class Kd extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(ds,ps,t,e);s.layers=this.layers,this.add(s);const o=new Nn(ds,ps,t,e);o.layers=this.layers,this.add(o);const a=new Nn(ds,ps,t,e);a.layers=this.layers,this.add(a);const r=new Nn(ds,ps,t,e);r.layers=this.layers,this.add(r);const l=new Nn(ds,ps,t,e);l.layers=this.layers,this.add(l);const c=new Nn(ds,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yh extends vn{constructor(t,e,n,s,o,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qd extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ho(5,5,5),o=new tn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:li});o.uniforms.tEquirect.value=e;const a=new Fe(s,o),r=e.minFilter;return e.minFilter===bi&&(e.minFilter=Yn),new Kd(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}}class qn extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jd={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new gl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class la extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ic=new T,sc=new ke,oc=new ke,tp=new T,ac=new ie,No=new T,Xa=new Di,rc=new ie,Ya=new co;class $h extends Fe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nl,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ii),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Di),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,No),this.boundingSphere.expandByPoint(No)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(s),t.ray.intersectsSphere(Xa)!==!1&&(rc.copy(s).invert(),Ya.copy(t.ray).applyMatrix4(rc),!(this.boundingBox!==null&&Ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ya)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ke,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;sc.fromBufferAttribute(s.attributes.skinIndex,t),oc.fromBufferAttribute(s.attributes.skinWeight,t),ic.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const a=oc.getComponent(o);if(a!==0){const r=sc.getComponent(o);ac.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(tp.copy(ic).applyMatrix4(ac),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class vl extends rn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qh extends vn{constructor(t=null,e=1,n=1,s,o,a,r,l,c=Tn,h=Tn,u,p){super(null,a,r,l,c,h,s,o,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=new ie,ep=new ie;class xa{constructor(t=[],e=[]){this.uuid=ts(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const r=t[o]?t[o].matrixWorld:ep;lc.multiplyMatrices(r,e[o]),lc.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xa(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new qh(e,t,t,In,$n);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let a=e[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new vl),this.bones.push(a),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const a=e[s];t.bones.push(a.uuid);const r=n[s];t.boneInverses.push(r.toArray())}return t}}class cc extends q{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fs=new ie,hc=new ie,Uo=[],uc=new Ii,np=new ie,$s=new Fe,qs=new Di;class $a extends Fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,np)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),uc.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(uc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),qs.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=t*o+1;for(let r=0;r<n.length;r++)n[r]=s[a+r]}raycast(t,e){const n=this.matrixWorld,s=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,fs),hc.multiplyMatrices(n,fs),$s.matrixWorld=hc,$s.raycast(t,Uo);for(let a=0,r=Uo.length;a<r;a++){const l=Uo[a];l.instanceId=o,l.object=this,e.push(l)}Uo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qh(new Float32Array(s*this.count),s,this.count,hl,$n));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=s*t;o[l]=r,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qa=new T,ip=new T,sp=new de;class Mi{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qa.subVectors(n,e).cross(ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sp.getNormalMatrix(t),s=this.coplanarPoint(qa).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Di,ko=new T;class _l{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,o=new Mi,a=new Mi){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){const n=this.planes,s=t.elements,o=s[0],a=s[1],r=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],f=s[8],g=s[9],v=s[10],m=s[11],d=s[12],M=s[13],w=s[14],_=s[15];if(n[0].setComponents(l-o,p-c,m-f,_-d).normalize(),n[1].setComponents(l+o,p+c,m+f,_+d).normalize(),n[2].setComponents(l+a,p+h,m+g,_+M).normalize(),n[3].setComponents(l-a,p-h,m-g,_-M).normalize(),n[4].setComponents(l-r,p-u,m-v,_-w).normalize(),e===ri)n[5].setComponents(l+r,p+u,m+v,_+w).normalize();else if(e===aa)n[5].setComponents(r,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class op extends Bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dc=new ie,Kr=new co,Bo=new Di,zo=new T;class Qr extends rn{constructor(t=new Gt,e=new op){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=o,t.ray.intersectsSphere(Bo)===!1)return;dc.copy(s).invert(),Kr.copy(t.ray).applyMatrix4(dc);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=p,v=f;g<v;g++){const m=c.getX(g);zo.fromBufferAttribute(u,m),pc(zo,m,l,s,t,e,this)}}else{const p=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=p,v=f;g<v;g++)zo.fromBufferAttribute(u,g),pc(zo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function pc(i,t,e,n,s,o,a){const r=Kr.distanceSqToPoint(i);if(r<e){const l=new T;Kr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Za extends vn{constructor(t,e,n,s,o,a,r,l,c,h,u,p){super(null,a,r,l,c,h,s,o,u,p),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class yn extends vn{constructor(t,e,n,s,o,a,r,l,c){super(t,e,n,s,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zh extends vn{constructor(t,e,n,s,o,a,r,l,c,h=bs){if(h!==bs&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bs&&(n=Qi),n===void 0&&h===Rs&&(n=Ps),super(null,s,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _a(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ap{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=n[s]-a,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(o-1);const h=n[s],p=n[s+1]-h,f=(a-h)/p;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),r=this.getPoint(o),l=e||(a.isVector2?new zt:new T);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new T,s=[],o=[],a=[],r=new T,l=new ie;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}o[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],r),a[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(s[f-1],s[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(pe(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(r,g))}a[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(pe(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(r.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function xl(){let i=0,t=0,e=0,n=0;function s(o,a,r,l){i=o,t=r,e=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){s(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,u){let p=(a-o)/c-(r-o)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+u)+(l-r)/u;p*=h,f*=h,s(a,r,p,f)},calc:function(o){const a=o*o,r=a*o;return i+t*o+e*a+n*r}}}const Oo=new T,ja=new xl,Ka=new xl,Qa=new xl;class Bn extends ap{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%o]:(Oo.subVectors(s[0],s[1]).add(s[0]),c=Oo);const u=s[r%o],p=s[(r+1)%o];if(this.closed||r+2<o?h=s[(r+2)%o]:(Oo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Oo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ja.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,v,m),Ka.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,v,m),Qa.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Ka.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Qa.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(ja.calc(l),Ka.calc(l),Qa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ml extends Gt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new T,h=new zt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ca extends Gt{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],p=[],f=[];let g=0;const v=[],m=n/2;let d=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(f,2));function M(){const _=new T,A=new T;let b=0;const S=(e-t)/n;for(let E=0;E<=o;E++){const y=[],x=E/o,P=x*(e-t)+t;for(let C=0;C<=s;C++){const R=C/s,L=R*l+r,D=Math.sin(L),B=Math.cos(L);A.x=P*D,A.y=-x*n+m,A.z=P*B,u.push(A.x,A.y,A.z),_.set(D,S,B).normalize(),p.push(_.x,_.y,_.z),f.push(R,1-x),y.push(g++)}v.push(y)}for(let E=0;E<s;E++)for(let y=0;y<o;y++){const x=v[y][E],P=v[y+1][E],C=v[y+1][E+1],R=v[y][E+1];(t>0||y!==0)&&(h.push(x,P,R),b+=3),(e>0||y!==o-1)&&(h.push(P,C,R),b+=3)}c.addGroup(d,b,0),d+=b}function w(_){const A=g,b=new zt,S=new T;let E=0;const y=_===!0?t:e,x=_===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*x,0),p.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let C=0;C<=s;C++){const L=C/s*l+r,D=Math.cos(L),B=Math.sin(L);S.x=y*B,S.y=m*x,S.z=y*D,u.push(S.x,S.y,S.z),p.push(0,x,0),b.x=D*.5+.5,b.y=B*.5*x+.5,f.push(b.x,b.y),g++}for(let C=0;C<s;C++){const R=A+C,L=P+C;_===!0?h.push(L,L+1,R):h.push(L+1,L,R),E+=3}c.addGroup(d,E,_===!0?1:2),d+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wl extends Gt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],a=[];r(s),c(n),h(),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(o.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(M){const w=new T,_=new T,A=new T;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],_),f(e[b+2],A),l(w,_,A,M)}function l(M,w,_,A){const b=A+1,S=[];for(let E=0;E<=b;E++){S[E]=[];const y=M.clone().lerp(_,E/b),x=w.clone().lerp(_,E/b),P=b-E;for(let C=0;C<=P;C++)C===0&&E===b?S[E][C]=y:S[E][C]=y.clone().lerp(x,C/P)}for(let E=0;E<b;E++)for(let y=0;y<2*(b-E)-1;y++){const x=Math.floor(y/2);y%2===0?(p(S[E][x+1]),p(S[E+1][x]),p(S[E][x])):(p(S[E][x+1]),p(S[E+1][x+1]),p(S[E+1][x]))}}function c(M){const w=new T;for(let _=0;_<o.length;_+=3)w.x=o[_+0],w.y=o[_+1],w.z=o[_+2],w.normalize().multiplyScalar(M),o[_+0]=w.x,o[_+1]=w.y,o[_+2]=w.z}function h(){const M=new T;for(let w=0;w<o.length;w+=3){M.x=o[w+0],M.y=o[w+1],M.z=o[w+2];const _=m(M)/2/Math.PI+.5,A=d(M)/Math.PI+.5;a.push(_,1-A)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const w=a[M+0],_=a[M+2],A=a[M+4],b=Math.max(w,_,A),S=Math.min(w,_,A);b>.9&&S<.1&&(w<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function p(M){o.push(M.x,M.y,M.z)}function f(M,w){const _=M*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const M=new T,w=new T,_=new T,A=new T,b=new zt,S=new zt,E=new zt;for(let y=0,x=0;y<o.length;y+=9,x+=6){M.set(o[y+0],o[y+1],o[y+2]),w.set(o[y+3],o[y+4],o[y+5]),_.set(o[y+6],o[y+7],o[y+8]),b.set(a[x+0],a[x+1]),S.set(a[x+2],a[x+3]),E.set(a[x+4],a[x+5]),A.copy(M).add(w).add(_).divideScalar(3);const P=m(A);v(b,x+0,M,P),v(S,x+2,w,P),v(E,x+4,_,P)}}function v(M,w,_,A){A<0&&M.x===1&&(a[w]=M.x-1),_.x===0&&_.z===0&&(a[w]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.vertices,t.indices,t.radius,t.details)}}class Ma extends wl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ma(t.radius,t.detail)}}class Ds extends Gt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(s),c=r+1,h=l+1,u=t/r,p=e/l,f=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const M=d*p-a;for(let w=0;w<c;w++){const _=w*u-o;g.push(_,-M,0),v.push(0,0,1),m.push(w/r),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<r;M++){const w=M+c*d,_=M+c*(d+1),A=M+1+c*(d+1),b=M+1+c*d;f.push(w,_,b),f.push(_,A,b)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.width,t.height,t.widthSegments,t.heightSegments)}}class ha extends Gt{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new T,p=new T,f=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const M=[],w=d/n;let _=0;d===0&&a===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const b=A/e;u.x=-t*Math.cos(s+b*o)*Math.sin(a+w*r),u.y=t*Math.cos(a+w*r),u.z=t*Math.sin(s+b*o)*Math.sin(a+w*r),g.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),m.push(b+_,1-w),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const w=h[d][M+1],_=h[d][M],A=h[d+1][M],b=h[d+1][M+1];(d!==0||a>0)&&f.push(w,_,b),(d!==n-1||l<Math.PI)&&f.push(_,A,b)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rp extends tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ti extends Bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bn extends Ti{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class lp extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cp extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jh extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hp extends jh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ja=new ie,fc=new T,mc=new T;class up{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(fc),mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mc),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class yl extends Xh{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dp extends up{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gc extends jh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new dp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pp extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Kh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function vc(){return performance.now()}const bl="\\[\\]\\.:\\/",fp=new RegExp("["+bl+"]","g"),Sl="[^"+bl+"]",mp="[^"+bl.replace("\\.","")+"]",gp=/((?:WC+[\/:])*)/.source.replace("WC",Sl),vp=/(WCOD+)?/.source.replace("WCOD",mp),_p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),Mp=new RegExp("^"+gp+vp+_p+xp+"$"),wp=["material","materials","bones","map"];class yp{constructor(t,e,n){const s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Te{constructor(t,e,n){this.path=e,this.parsedPath=n||Te.parseTrackName(e),this.node=Te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Te.Composite(t,e,n):new Te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fp,"")}static parseTrackName(t){const e=Mp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);wp.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===e||r.uuid===e)return r;const l=n(r.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let o=e.propertyIndex;if(t||(t=Te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?r=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=yp;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const _c=new ie;class bp{constructor(t,e,n=0,s=1/0){this.ray=new co(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _c.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_c),this}intersectObject(t,e=!0,n=[]){return Jr(t,this,n,e),n.sort(xc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Jr(t[s],this,n,e);return n.sort(xc),n}}function xc(i,t){return i.distance-t.distance}function Jr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let a=0,r=o.length;a<r;a++)Jr(o[a],t,e,!0)}}class Mc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Sp extends Ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function wc(i,t,e,n){const s=Ap(n);switch(e){case Ih:return i*t;case Fh:return i*t;case Nh:return i*t*2;case hl:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case Uh:return i*t*2/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case Dh:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case pl:return i*t*4/s.components*s.byteLength;case jo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Er:case Cr:return Math.max(i,16)*Math.max(t,8)/4;case Ar:case Tr:return Math.max(i,8)*Math.max(t,8)/2;case Pr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Br:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Or:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ta:case Yr:case $r:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kh:case qr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zr:case jr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ap(i){switch(i){case di:case Ph:return{byteLength:1,components:1};case so:case Rh:case Kn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case Qi:case rl:case $n:return{byteLength:4,components:1};case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qh(){let i=null,t=!1,e=null,n=null;function s(o,a){e(o,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ep(i){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<u.length;f++){const g=u[p],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,u[p]=v)}u.length=p+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(i.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:o,update:a}}var Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
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
} // validated`,Op=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
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
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
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
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Af=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,Tf=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,Bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jf=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
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
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
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
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
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
}`,F0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,k0=`varying vec3 vWorldDirection;
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
}`,z0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,G0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,q0=`#define NORMAL
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
}`,j0=`#define PHONG
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
}`,Q0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,tm=`#define TOON
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
}`,em=`uniform float size;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Tp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Rp,alphatest_fragment:Lp,alphatest_pars_fragment:Ip,aomap_fragment:Dp,aomap_pars_fragment:Fp,batching_pars_vertex:Np,batching_vertex:Up,begin_vertex:kp,beginnormal_vertex:Bp,bsdfs:zp,iridescence_fragment:Op,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Xp,color_fragment:Yp,color_pars_fragment:$p,color_pars_vertex:qp,color_vertex:Zp,common:jp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:Jp,displacementmap_vertex:tf,emissivemap_fragment:ef,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:of,envmap_fragment:af,envmap_common_pars_fragment:rf,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:Mf,envmap_vertex:hf,fog_vertex:uf,fog_pars_vertex:df,fog_fragment:pf,fog_pars_fragment:ff,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:_f,lights_pars_begin:xf,lights_toon_fragment:wf,lights_toon_pars_fragment:yf,lights_phong_fragment:bf,lights_phong_pars_fragment:Sf,lights_physical_fragment:Af,lights_physical_pars_fragment:Ef,lights_fragment_begin:Tf,lights_fragment_maps:Cf,lights_fragment_end:Pf,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Df,map_fragment:Ff,map_pars_fragment:Nf,map_particle_fragment:Uf,map_particle_pars_fragment:kf,metalnessmap_fragment:Bf,metalnessmap_pars_fragment:zf,morphinstance_vertex:Of,morphcolor_vertex:Hf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Gf,normal_fragment_begin:Xf,normal_fragment_maps:Yf,normal_pars_fragment:$f,normal_pars_vertex:qf,normal_vertex:Zf,normalmap_pars_fragment:jf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:o0,dithering_pars_fragment:a0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:p0,skinning_pars_vertex:f0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:v0,specularmap_pars_fragment:_0,tonemapping_fragment:x0,tonemapping_pars_fragment:M0,transmission_fragment:w0,transmission_pars_fragment:y0,uv_pars_fragment:b0,uv_pars_vertex:S0,uv_vertex:A0,worldpos_vertex:E0,background_vert:T0,background_frag:C0,backgroundCube_vert:P0,backgroundCube_frag:R0,cube_vert:L0,cube_frag:I0,depth_vert:D0,depth_frag:F0,distanceRGBA_vert:N0,distanceRGBA_frag:U0,equirect_vert:k0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:O0,meshbasic_vert:H0,meshbasic_frag:V0,meshlambert_vert:W0,meshlambert_frag:G0,meshmatcap_vert:X0,meshmatcap_frag:Y0,meshnormal_vert:$0,meshnormal_frag:q0,meshphong_vert:Z0,meshphong_frag:j0,meshphysical_vert:K0,meshphysical_frag:Q0,meshtoon_vert:J0,meshtoon_frag:tm,points_vert:em,points_frag:nm,shadow_vert:im,shadow_frag:sm,sprite_vert:om,sprite_frag:am},Bt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},jn={basic:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:wn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:wn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:wn([Bt.points,Bt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:wn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:wn([Bt.common,Bt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:wn([Bt.sprite,Bt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:wn([Bt.common,Bt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:wn([Bt.lights,Bt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};jn.physical={uniforms:wn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Ho={r:0,b:0,g:0},Hi=new Cn,rm=new ie;function lm(i,t,e,n,s,o,a){const r=new Lt(0);let l=o===!0?0:1,c,h,u=null,p=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function v(w){let _=!1;const A=g(w);A===null?d(r,l):A&&A.isColor&&(d(A,1),_=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===va)?(h===void 0&&(h=new Fe(new ho(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Is(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(_.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(Hi)),h.material.toneMapped=Ae.getTransfer(A.colorSpace)!==Ie,(u!==A||p!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,p=A.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Fe(new Ds(2,2),new tn({name:"BackgroundMaterial",uniforms:Is(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ae.getTransfer(A.colorSpace)!==Ie,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||p!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,p=A.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,_){w.getRGB(Ho,Gh(i)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,_,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,_=1){r.set(w),l=_,d(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(r,l)},render:v,addToRenderList:m,dispose:M}}function cm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let o=s,a=!1;function r(x,P,C,R,L){let D=!1;const B=u(R,C,P);o!==B&&(o=B,c(o.object)),D=f(x,R,C,L),D&&g(x,R,C,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,_(x,P,C,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,P,C){const R=C.wireframe===!0;let L=n[x.id];L===void 0&&(L={},n[x.id]=L);let D=L[P.id];D===void 0&&(D={},L[P.id]=D);let B=D[R];return B===void 0&&(B=p(l()),D[R]=B),B}function p(x){const P=[],C=[],R=[];for(let L=0;L<e;L++)P[L]=0,C[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:R,object:x,attributes:{},index:null}}function f(x,P,C,R){const L=o.attributes,D=P.attributes;let B=0;const k=C.getAttributes();for(const F in k)if(k[F].location>=0){const V=L[F];let Y=D[F];if(Y===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),V===void 0||V.attribute!==Y||Y&&V.data!==Y.data)return!0;B++}return o.attributesNum!==B||o.index!==R}function g(x,P,C,R){const L={},D=P.attributes;let B=0;const k=C.getAttributes();for(const F in k)if(k[F].location>=0){let V=D[F];V===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(V=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(V=x.instanceColor));const Y={};Y.attribute=V,V&&V.data&&(Y.data=V.data),L[F]=Y,B++}o.attributes=L,o.attributesNum=B,o.index=R}function v(){const x=o.newAttributes;for(let P=0,C=x.length;P<C;P++)x[P]=0}function m(x){d(x,0)}function d(x,P){const C=o.newAttributes,R=o.enabledAttributes,L=o.attributeDivisors;C[x]=1,R[x]===0&&(i.enableVertexAttribArray(x),R[x]=1),L[x]!==P&&(i.vertexAttribDivisor(x,P),L[x]=P)}function M(){const x=o.newAttributes,P=o.enabledAttributes;for(let C=0,R=P.length;C<R;C++)P[C]!==x[C]&&(i.disableVertexAttribArray(C),P[C]=0)}function w(x,P,C,R,L,D,B){B===!0?i.vertexAttribIPointer(x,P,C,L,D):i.vertexAttribPointer(x,P,C,R,L,D)}function _(x,P,C,R){v();const L=R.attributes,D=C.getAttributes(),B=P.defaultAttributeValues;for(const k in D){const F=D[k];if(F.location>=0){let H=L[k];if(H===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(H=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(H=x.instanceColor)),H!==void 0){const V=H.normalized,Y=H.itemSize,j=t.get(H);if(j===void 0)continue;const W=j.buffer,X=j.type,O=j.bytesPerElement,it=X===i.INT||X===i.UNSIGNED_INT||H.gpuType===rl;if(H.isInterleavedBufferAttribute){const nt=H.data,Z=nt.stride,Q=H.offset;if(nt.isInstancedInterleavedBuffer){for(let G=0;G<F.locationSize;G++)d(F.location+G,nt.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let G=0;G<F.locationSize;G++)m(F.location+G);i.bindBuffer(i.ARRAY_BUFFER,W);for(let G=0;G<F.locationSize;G++)w(F.location+G,Y/F.locationSize,X,V,Z*O,(Q+Y/F.locationSize*G)*O,it)}else{if(H.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)d(F.location+nt,H.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let nt=0;nt<F.locationSize;nt++)m(F.location+nt);i.bindBuffer(i.ARRAY_BUFFER,W);for(let nt=0;nt<F.locationSize;nt++)w(F.location+nt,Y/F.locationSize,X,V,Y*O,Y/F.locationSize*nt*O,it)}}else if(B!==void 0){const V=B[k];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(F.location,V);break;case 3:i.vertexAttrib3fv(F.location,V);break;case 4:i.vertexAttrib4fv(F.location,V);break;default:i.vertexAttrib1fv(F.location,V)}}}}M()}function A(){E();for(const x in n){const P=n[x];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[x.id]}function S(x){for(const P in n){const C=n[P];if(C[x.id]===void 0)continue;const R=C[x.id];for(const L in R)h(R[L].object),delete R[L];delete C[x.id]}}function E(){y(),a=!0,o!==s&&(o=s,c(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:E,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function hm(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,p){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*p[v];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function um(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==In&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(S){const E=S===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==di&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==$n&&!E)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:A,maxSamples:b}}function dm(i){const t=this;let e=null,n=0,s=!1,o=!1;const a=new Mi,r=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const M=o?0:n,w=M*4;let _=d.clippingState||null;l.value=_,_=h(g,p,w,f);for(let A=0;A!==w;++A)_[A]=e[A];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=f+v*4,M=p.matrixWorldInverse;r.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,_=f;w!==v;++w,_+=4)a.copy(u[w]).applyMatrix4(M,r),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function pm(i){let t=new WeakMap;function e(a,r){return r===br?a.mapping=Ts:r===Sr&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===br||r===Sr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const r=a.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const xs=4,yc=[.125,.215,.35,.446,.526,.582],qi=20,tr=new yl,bc=new Lt;let er=null,nr=0,ir=0,sr=!1;const Yi=(1+Math.sqrt(5))/2,ms=1/Yi,Sc=[new T(-Yi,ms,0),new T(Yi,ms,0),new T(-ms,0,Yi),new T(ms,0,Yi),new T(0,Yi,-ms),new T(0,Yi,ms),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],fm=new T;class tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){const{size:a=256,position:r=fm}=o;er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(er,nr,ir),this._renderer.xr.enabled=sr,t.scissorTest=!1,Vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Kn,format:In,colorSpace:Ls,depthBuffer:!1},s=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(o)),this._blurMaterial=gm(o,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,s,o){const l=new Nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(bc),u.toneMapping=Ei,u.autoClear=!1;const g=new ao({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),v=new Fe(new ho,g);let m=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,m=!0):(g.color.copy(bc),m=!0);for(let M=0;M<6;M++){const w=M%3;w===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):w===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));const _=this._cubeSize;Vo(s,w*_,M>2?_:0,_,_),u.setRenderTarget(s),m&&u.render(v,l),u.render(t,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=p,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ts||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;Vo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=Sc[(s-o-1)%Sc.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",o),this._halfBlur(a,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Fe(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*qi-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):qi;m>qi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const d=[];let M=0;for(let S=0;S<qi;++S){const E=S/v,y=Math.exp(-E*E/2);d.push(y),S===0?M+=y:S<m&&(M+=2*y)}for(let S=0;S<d.length;S++)d[S]=d[S]/M;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:w}=this;p.dTheta.value=g,p.mipInt.value=w-n;const _=this._sizeLods[s],A=3*_*(s>w-xs?s-w+xs:0),b=4*(this._cubeSize-_);Vo(e,A,b,3*_,2*_),l.setRenderTarget(e),l.render(u,tr)}}function mm(i){const t=[],e=[],n=[];let s=i;const o=i-xs+1+yc.length;for(let a=0;a<o;a++){const r=Math.pow(2,s);e.push(r);let l=1/r;a>i-xs?l=yc[a-i+xs-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,d=1,M=new Float32Array(v*g*f),w=new Float32Array(m*g*f),_=new Float32Array(d*g*f);for(let b=0;b<f;b++){const S=b%3*2/3-1,E=b>2?0:-1,y=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];M.set(y,v*g*b),w.set(p,m*g*b);const x=[b,b,b,b,b,b];_.set(x,d*g*b)}const A=new Gt;A.setAttribute("position",new q(M,v)),A.setAttribute("uv",new q(w,m)),A.setAttribute("faceIndex",new q(_,d)),t.push(A),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ac(i,t,e){const n=new kn(i,t,e);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gm(i,t,e){const n=new Float32Array(qi),s=new T(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ec(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Tc(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function vm(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===br||l===Sr,h=l===Ts||l===Cs;if(c||h){let u=t.get(r);const p=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==p)return e===null&&(e=new tl(i)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new tl(i)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function s(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function _m(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xm(i,t,e,n){const s={},o=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id];const f=o.get(p);f&&(t.remove(f),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const f in p)t.update(p[f],i.ARRAY_BUFFER)}function c(u){const p=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let w=0,_=M.length;w<_;w+=3){const A=M[w+0],b=M[w+1],S=M[w+2];p.push(A,b,b,S,S,A)}}else if(g!==void 0){const M=g.array;v=g.version;for(let w=0,_=M.length/3-1;w<_;w+=3){const A=w+0,b=w+1,S=w+2;p.push(A,b,b,S,S,A)}}else return;const m=new(Oh(p)?Wh:me)(p,1);m.version=v;const d=o.get(u);d&&t.remove(d),o.set(u,m)}function h(u){const p=o.get(u);if(p){const f=u.index;f!==null&&p.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function Mm(i,t,e){let n;function s(p){n=p}let o,a;function r(p){o=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,o,p*a),e.update(f,n,1)}function c(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,p*a,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,p,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];e.update(m,n,1)}function u(p,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/a,f[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,p,0,v,0,g);let d=0;for(let M=0;M<g;M++)d+=f[M]*v[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=r*(o/3);break;case i.LINES:e.lines+=r*(o/2);break;case i.LINE_STRIP:e.lines+=r*(o-1);break;case i.LINE_LOOP:e.lines+=r*o;break;case i.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,t,e){const n=new WeakMap,s=new ke;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(r);if(p===void 0||p.count!==u){let x=function(){E.dispose(),n.delete(r),r.removeEventListener("dispose",x)};var f=x;p!==void 0&&p.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,d=r.morphAttributes.position||[],M=r.morphAttributes.normal||[],w=r.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let A=r.attributes.position.count*_,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*b*4*u),E=new Hh(S,A,b,u);E.type=$n,E.needsUpdate=!0;const y=_*4;for(let P=0;P<u;P++){const C=d[P],R=M[P],L=w[P],D=A*b*4*P;for(let B=0;B<C.count;B++){const k=B*y;g===!0&&(s.fromBufferAttribute(C,B),S[D+k+0]=s.x,S[D+k+1]=s.y,S[D+k+2]=s.z,S[D+k+3]=0),v===!0&&(s.fromBufferAttribute(R,B),S[D+k+4]=s.x,S[D+k+5]=s.y,S[D+k+6]=s.z,S[D+k+7]=0),m===!0&&(s.fromBufferAttribute(L,B),S[D+k+8]=s.x,S[D+k+9]=s.y,S[D+k+10]=s.z,S[D+k+11]=L.itemSize===4?s.w:1)}}p={count:u,texture:E,size:new zt(A,b)},n.set(r,p),r.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function bm(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}const Jh=new vn,Cc=new Zh(1,1),tu=new Hh,eu=new Ud,nu=new Yh,Pc=[],Rc=[],Lc=new Float32Array(16),Ic=new Float32Array(9),Dc=new Float32Array(4);function zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Pc[s];if(o===void 0&&(o=new Float32Array(s),Pc[s]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,i[a].toArray(o,r)}return o}function un(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function dn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wa(i,t){let e=Rc[t];e===void 0&&(e=new Int32Array(t),Rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2fv(this.addr,t),dn(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;i.uniform3fv(this.addr,t),dn(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4fv(this.addr,t),dn(e,t)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;Dc.set(n),i.uniformMatrix2fv(this.addr,!1,Dc),dn(e,n)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;Ic.set(n),i.uniformMatrix3fv(this.addr,!1,Ic),dn(e,n)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;Lc.set(n),i.uniformMatrix4fv(this.addr,!1,Lc),dn(e,n)}}function Lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2iv(this.addr,t),dn(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3iv(this.addr,t),dn(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4iv(this.addr,t),dn(e,t)}}function Nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2uiv(this.addr,t),dn(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3uiv(this.addr,t),dn(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4uiv(this.addr,t),dn(e,t)}}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Cc.compareFunction=zh,o=Cc):o=Jh,e.setTexture2D(t||o,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eu,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nu,s)}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tu,s)}function Wm(i){switch(i){case 5126:return Sm;case 35664:return Am;case 35665:return Em;case 35666:return Tm;case 35674:return Cm;case 35675:return Pm;case 35676:return Rm;case 5124:case 35670:return Lm;case 35667:case 35671:return Im;case 35668:case 35672:return Dm;case 35669:case 35673:return Fm;case 5125:return Nm;case 36294:return Um;case 36295:return km;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Gm(i,t){i.uniform1fv(this.addr,t)}function Xm(i,t){const e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ym(i,t){const e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function $m(i,t){const e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function qm(i,t){const e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zm(i,t){const e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jm(i,t){const e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Km(i,t){i.uniform1iv(this.addr,t)}function Qm(i,t){i.uniform2iv(this.addr,t)}function Jm(i,t){i.uniform3iv(this.addr,t)}function tg(i,t){i.uniform4iv(this.addr,t)}function eg(i,t){i.uniform1uiv(this.addr,t)}function ng(i,t){i.uniform2uiv(this.addr,t)}function ig(i,t){i.uniform3uiv(this.addr,t)}function sg(i,t){i.uniform4uiv(this.addr,t)}function og(i,t,e){const n=this.cache,s=t.length,o=wa(e,s);un(n,o)||(i.uniform1iv(this.addr,o),dn(n,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Jh,o[a])}function ag(i,t,e){const n=this.cache,s=t.length,o=wa(e,s);un(n,o)||(i.uniform1iv(this.addr,o),dn(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eu,o[a])}function rg(i,t,e){const n=this.cache,s=t.length,o=wa(e,s);un(n,o)||(i.uniform1iv(this.addr,o),dn(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nu,o[a])}function lg(i,t,e){const n=this.cache,s=t.length,o=wa(e,s);un(n,o)||(i.uniform1iv(this.addr,o),dn(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||tu,o[a])}function cg(i){switch(i){case 5126:return Gm;case 35664:return Xm;case 35665:return Ym;case 35666:return $m;case 35674:return qm;case 35675:return Zm;case 35676:return jm;case 5124:case 35670:return Km;case 35667:case 35671:return Qm;case 35668:case 35672:return Jm;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return lg}}class hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wm(e.type)}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}}class dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(t,e[r.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function Fc(i,t){i.seq.push(t),i.map[t.id]=t}function pg(i,t,e){const n=i.name,s=n.length;for(or.lastIndex=0;;){const o=or.exec(n),a=or.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===s){Fc(e,c===void 0?new hg(r,i,t):new ug(r,i,t));break}else{let u=e.map[r];u===void 0&&(u=new dg(r),Fc(e,u)),e=u}}}class ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);pg(o,a,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Nc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fg=37297;let mg=0;function gg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const Uc=new de;function vg(i){Ae._getMatrix(Uc,Ae.workingColorSpace,i);const t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+gg(i.getShaderSource(t),a)}else return s}function _g(i,t){const e=vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xg(i,t){let e;switch(t){case wh:e="Linear";break;case yh:e="Reinhard";break;case bh:e="Cineon";break;case al:e="ACESFilmic";break;case Ah:e="AgX";break;case Eh:e="Neutral";break;case Sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wo=new T;function Mg(){Ae.getLuminanceCoefficients(Wo);const i=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),a=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:r}}return e}function Qs(i){return i!==""}function Bc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Sg,Eg)}const Ag=new Map;function Eg(i,t){let e=fe[t];if(e===void 0){const n=Ag.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(i){return i.replace(Tg,Cg)}function Cg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Hc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Pg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function Rg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case Cs:t="ENVMAP_TYPE_CUBE";break;case va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ig(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mh:t="ENVMAP_BLENDING_MULTIPLY";break;case ju:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fg(i,t,e,n){const s=i.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=Pg(e),c=Rg(e),h=Lg(e),u=Ig(e),p=Dg(e),f=wg(e),g=yg(o),v=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),d.length>0&&(d+=`
`)):(m=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),d=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?fe.tonemapping_pars_fragment:"",e.toneMapping!==Ei?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,_g("linearToOutputTexel",e.outputColorSpace),Mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=el(a),a=Bc(a,e),a=zc(a,e),r=el(r),r=Bc(r,e),r=zc(r,e),a=Oc(a),r=Oc(r),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=M+m+a,_=M+d+r,A=Nc(s,s.VERTEX_SHADER,w),b=Nc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,A),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function S(P){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(v).trim(),R=s.getShaderInfoLog(A).trim(),L=s.getShaderInfoLog(b).trim();let D=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,b);else{const k=kc(s,A,"vertex"),F=kc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+k+`
`+F)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||L==="")&&(B=!1);B&&(P.diagnostics={runnable:D,programLog:C,vertexShader:{log:R,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(A),s.deleteShader(b),E=new ea(s,v),y=bg(s,v)}let E;this.getUniforms=function(){return E===void 0&&S(this),E};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,fg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=b,this}let Ng=0;class Ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kg(t),e.set(t,n)),n}}class kg{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}}function Bg(i,t,e,n,s,o,a){const r=new ml,l=new Ug,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,P,C,R){const L=C.fog,D=R.geometry,B=y.isMeshStandardMaterial?C.environment:null,k=(y.isMeshStandardMaterial?e:t).get(y.envMap||B),F=k&&k.mapping===va?k.image.height:null,H=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Y=V!==void 0?V.length:0;let j=0;D.morphAttributes.position!==void 0&&(j=1),D.morphAttributes.normal!==void 0&&(j=2),D.morphAttributes.color!==void 0&&(j=3);let W,X,O,it;if(H){const ge=jn[H];W=ge.vertexShader,X=ge.fragmentShader}else W=y.vertexShader,X=y.fragmentShader,l.update(y),O=l.getVertexShaderID(y),it=l.getFragmentShaderID(y);const nt=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),Q=R.isInstancedMesh===!0,G=R.isBatchedMesh===!0,ot=!!y.map,gt=!!y.matcap,tt=!!k,U=!!y.aoMap,Mt=!!y.lightMap,at=!!y.bumpMap,pt=!!y.normalMap,_t=!!y.displacementMap,It=!!y.emissiveMap,yt=!!y.metalnessMap,z=!!y.roughnessMap,I=y.anisotropy>0,et=y.clearcoat>0,dt=y.dispersion>0,vt=y.iridescence>0,ft=y.sheen>0,Ft=y.transmission>0,ut=I&&!!y.anisotropyMap,St=et&&!!y.clearcoatMap,Zt=et&&!!y.clearcoatNormalMap,xt=et&&!!y.clearcoatRoughnessMap,Pt=vt&&!!y.iridescenceMap,Vt=vt&&!!y.iridescenceThicknessMap,$t=ft&&!!y.sheenColorMap,Nt=ft&&!!y.sheenRoughnessMap,re=!!y.specularMap,te=!!y.specularColorMap,Ce=!!y.specularIntensityMap,K=Ft&&!!y.transmissionMap,Rt=Ft&&!!y.thicknessMap,rt=!!y.gradientMap,wt=!!y.alphaMap,Ut=y.alphaTest>0,Ct=!!y.alphaHash,ne=!!y.extensions;let Pe=Ei;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const We={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:X,defines:y.defines,customVertexShaderID:O,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:G,batchingColor:G&&R._colorsTexture!==null,instancing:Q,instancingColor:Q&&R.instanceColor!==null,instancingMorph:Q&&R.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ls,alphaToCoverage:!!y.alphaToCoverage,map:ot,matcap:gt,envMap:tt,envMapMode:tt&&k.mapping,envMapCubeUVHeight:F,aoMap:U,lightMap:Mt,bumpMap:at,normalMap:pt,displacementMap:p&&_t,emissiveMap:It,normalMapObjectSpace:pt&&y.normalMapType===id,normalMapTangentSpace:pt&&y.normalMapType===Bh,metalnessMap:yt,roughnessMap:z,anisotropy:I,anisotropyMap:ut,clearcoat:et,clearcoatMap:St,clearcoatNormalMap:Zt,clearcoatRoughnessMap:xt,dispersion:dt,iridescence:vt,iridescenceMap:Pt,iridescenceThicknessMap:Vt,sheen:ft,sheenColorMap:$t,sheenRoughnessMap:Nt,specularMap:re,specularColorMap:te,specularIntensityMap:Ce,transmission:Ft,transmissionMap:K,thicknessMap:Rt,gradientMap:rt,opaque:y.transparent===!1&&y.blending===ys&&y.alphaToCoverage===!1,alphaMap:wt,alphaTest:Ut,alphaHash:Ct,combine:y.combine,mapUv:ot&&v(y.map.channel),aoMapUv:U&&v(y.aoMap.channel),lightMapUv:Mt&&v(y.lightMap.channel),bumpMapUv:at&&v(y.bumpMap.channel),normalMapUv:pt&&v(y.normalMap.channel),displacementMapUv:_t&&v(y.displacementMap.channel),emissiveMapUv:It&&v(y.emissiveMap.channel),metalnessMapUv:yt&&v(y.metalnessMap.channel),roughnessMapUv:z&&v(y.roughnessMap.channel),anisotropyMapUv:ut&&v(y.anisotropyMap.channel),clearcoatMapUv:St&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(y.sheenRoughnessMap.channel),specularMapUv:re&&v(y.specularMap.channel),specularColorMapUv:te&&v(y.specularColorMap.channel),specularIntensityMapUv:Ce&&v(y.specularIntensityMap.channel),transmissionMapUv:K&&v(y.transmissionMap.channel),thicknessMapUv:Rt&&v(y.thicknessMap.channel),alphaMapUv:wt&&v(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pt||I),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!D.attributes.uv&&(ot||wt),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Z,skinning:R.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:j,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ot&&y.map.isVideoTexture===!0&&Ae.getTransfer(y.map.colorSpace)===Ie,decodeVideoTextureEmissive:It&&y.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(y.emissiveMap.colorSpace)===Ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gn,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&y.extensions.multiDraw===!0||G)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(M(x,y),w(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function w(y,x){r.disableAll(),x.supportsVertexTextures&&r.enable(0),x.instancing&&r.enable(1),x.instancingColor&&r.enable(2),x.instancingMorph&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),x.dispersion&&r.enable(20),x.batchingColor&&r.enable(21),y.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reverseDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),y.push(r.mask)}function _(y){const x=g[y.type];let P;if(x){const C=jn[x];P=ro.clone(C.uniforms)}else P=y.uniforms;return P}function A(y,x){let P;for(let C=0,R=h.length;C<R;C++){const L=h[C];if(L.cacheKey===x){P=L,++P.usedTimes;break}}return P===void 0&&(P=new Fg(i,x,y,o),h.push(P)),P}function b(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function S(y){l.remove(y)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:A,releaseProgram:b,releaseShaderCache:S,programs:h,dispose:E}}function zg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function n(a){i.delete(a)}function s(a,r,l){i.get(a)[r]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Og(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(u,p,f,g,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function r(u,p,f,g,v,m){const d=a(u,p,f,g,v,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function l(u,p,f,g,v,m){const d=a(u,p,f,g,v,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,p){e.length>1&&e.sort(u||Og),n.length>1&&n.sort(p||Vc),s.length>1&&s.sort(p||Vc)}function h(){for(let u=t,p=i.length;u<p;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:r,unshift:l,finish:h,sort:c}}function Hg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let a;return o===void 0?(a=new Wc,i.set(n,[a])):s>=o.length?(a=new Wc,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Lt};break;case"SpotLight":e={position:new T,direction:new T,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Wg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gg=0;function Xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){const t=new Vg,e=Wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,o=new ie,a=new ie;function r(c){let h=0,u=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,v=0,m=0,d=0,M=0,w=0,_=0,A=0,b=0,S=0;c.sort(Xg);for(let y=0,x=c.length;y<x;y++){const P=c[y],C=P.color,R=P.intensity,L=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*R,u+=C.g*R,p+=C.b*R;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],R);S++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,F=e.get(P);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=B,f++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(C).multiplyScalar(R),B.distance=L,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[v]=B;const k=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,k.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[v]=k.matrix,P.castShadow){const F=e.get(P);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=D,_++}v++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(C).multiplyScalar(R),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const k=P.shadow,F=e.get(P);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,F.shadowCameraNear=k.camera.near,F.shadowCameraFar=k.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=B,g++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(R),B.groundColor.copy(P.groundColor).multiplyScalar(R),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==d||E.numDirectionalShadows!==M||E.numPointShadows!==w||E.numSpotShadows!==_||E.numSpotMaps!==A||E.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=_+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=S,E.directionalLength=f,E.pointLength=g,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=d,E.numDirectionalShadows=M,E.numPointShadows=w,E.numSpotShadows=_,E.numSpotMaps=A,E.numLightProbes=S,n.version=Gg++)}function l(c,h){let u=0,p=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const w=c[d];if(w.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(w.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const _=n.point[p];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:n}}function Gc(i){const t=new Yg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function $g(i){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let r;return a===void 0?(r=new Gc(i),t.set(s,[r])):o>=a.length?(r=new Gc(i),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`;function jg(i,t,e){let n=new _l;const s=new zt,o=new zt,a=new ke,r=new lp({depthPacking:nd}),l=new cp,c={},h=e.maxTextureSize,u={[Li]:Sn,[Sn]:Li,[gn]:gn},p=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:qg,fragmentShader:Zg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new q(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fe(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let d=this.type;this.render=function(b,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(li),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const R=d!==si&&this.type===si,L=d===si&&this.type!==si;for(let D=0,B=b.length;D<B;D++){const k=b[D],F=k.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const H=F.getFrameExtents();if(s.multiply(H),o.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/H.x),s.x=o.x*H.x,F.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/H.y),s.y=o.y*H.y,F.mapSize.y=o.y)),F.map===null||R===!0||L===!0){const Y=this.type!==si?{minFilter:Tn,magFilter:Tn}:{};F.map!==null&&F.map.dispose(),F.map=new kn(s.x,s.y,Y),F.map.texture.name=k.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const V=F.getViewportCount();for(let Y=0;Y<V;Y++){const j=F.getViewport(Y);a.set(o.x*j.x,o.y*j.y,o.x*j.z,o.y*j.w),C.viewport(a),F.updateMatrices(k,Y),n=F.getFrustum(),_(S,E,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===si&&M(F,E),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,P)};function M(b,S){const E=t.update(v);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new kn(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,E,p,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,E,f,v,null)}function w(b,S,E,y){let x=null;const P=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)x=P;else if(x=E.isPointLight===!0?l:r,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const C=x.uuid,R=S.uuid;let L=c[C];L===void 0&&(L={},c[C]=L);let D=L[R];D===void 0&&(D=x.clone(),L[R]=D,S.addEventListener("dispose",A)),x=D}if(x.visible=S.visible,x.wireframe=S.wireframe,y===si?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:u[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const C=i.properties.get(x);C.light=E}return x}function _(b,S,E,y,x){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===si)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const R=t.update(b),L=b.material;if(Array.isArray(L)){const D=R.groups;for(let B=0,k=D.length;B<k;B++){const F=D[B],H=L[F.materialIndex];if(H&&H.visible){const V=w(b,H,y,x);b.onBeforeShadow(i,b,S,E,R,V,F),i.renderBufferDirect(E,null,R,V,b,F),b.onAfterShadow(i,b,S,E,R,V,F)}}}else if(L.visible){const D=w(b,L,y,x);b.onBeforeShadow(i,b,S,E,R,D,null),i.renderBufferDirect(E,null,R,D,b,null),b.onAfterShadow(i,b,S,E,R,D,null)}}const C=b.children;for(let R=0,L=C.length;R<L;R++)_(C[R],S,E,y,x)}function A(b){b.target.removeEventListener("dispose",A);for(const E in c){const y=c[E],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Kg={[gr]:vr,[_r]:wr,[xr]:yr,[ci]:Mr,[vr]:gr,[wr]:_r,[yr]:xr,[Mr]:ci};function Qg(i,t){function e(){let K=!1;const Rt=new ke;let rt=null;const wt=new ke(0,0,0,0);return{setMask:function(Ut){rt!==Ut&&!K&&(i.colorMask(Ut,Ut,Ut,Ut),rt=Ut)},setLocked:function(Ut){K=Ut},setClear:function(Ut,Ct,ne,Pe,We){We===!0&&(Ut*=Pe,Ct*=Pe,ne*=Pe),Rt.set(Ut,Ct,ne,Pe),wt.equals(Rt)===!1&&(i.clearColor(Ut,Ct,ne,Pe),wt.copy(Rt))},reset:function(){K=!1,rt=null,wt.set(-1,0,0,0)}}}function n(){let K=!1,Rt=!1,rt=null,wt=null,Ut=null;return{setReversed:function(Ct){if(Rt!==Ct){const ne=t.get("EXT_clip_control");Rt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const Pe=Ut;Ut=null,this.setClear(Pe)}Rt=Ct},getReversed:function(){return Rt},setTest:function(Ct){Ct?nt(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Ct){rt!==Ct&&!K&&(i.depthMask(Ct),rt=Ct)},setFunc:function(Ct){if(Rt&&(Ct=Kg[Ct]),wt!==Ct){switch(Ct){case gr:i.depthFunc(i.NEVER);break;case vr:i.depthFunc(i.ALWAYS);break;case _r:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case xr:i.depthFunc(i.EQUAL);break;case Mr:i.depthFunc(i.GEQUAL);break;case wr:i.depthFunc(i.GREATER);break;case yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Ct}},setLocked:function(Ct){K=Ct},setClear:function(Ct){Ut!==Ct&&(Rt&&(Ct=1-Ct),i.clearDepth(Ct),Ut=Ct)},reset:function(){K=!1,rt=null,wt=null,Ut=null,Rt=!1}}}function s(){let K=!1,Rt=null,rt=null,wt=null,Ut=null,Ct=null,ne=null,Pe=null,We=null;return{setTest:function(ge){K||(ge?nt(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(ge){Rt!==ge&&!K&&(i.stencilMask(ge),Rt=ge)},setFunc:function(ge,sn,Xe){(rt!==ge||wt!==sn||Ut!==Xe)&&(i.stencilFunc(ge,sn,Xe),rt=ge,wt=sn,Ut=Xe)},setOp:function(ge,sn,Xe){(Ct!==ge||ne!==sn||Pe!==Xe)&&(i.stencilOp(ge,sn,Xe),Ct=ge,ne=sn,Pe=Xe)},setLocked:function(ge){K=ge},setClear:function(ge){We!==ge&&(i.clearStencil(ge),We=ge)},reset:function(){K=!1,Rt=null,rt=null,wt=null,Ut=null,Ct=null,ne=null,Pe=null,We=null}}}const o=new e,a=new n,r=new s,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,f=[],g=null,v=!1,m=null,d=null,M=null,w=null,_=null,A=null,b=null,S=new Lt(0,0,0),E=0,y=!1,x=null,P=null,C=null,R=null,L=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),B=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),B=k>=2);let H=null,V={};const Y=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),W=new ke().fromArray(Y),X=new ke().fromArray(j);function O(K,Rt,rt,wt){const Ut=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(K,Ct),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<rt;ne++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Rt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return Ct}const it={};it[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),nt(i.DEPTH_TEST),a.setFunc(ci),at(!1),pt(Il),nt(i.CULL_FACE),U(li);function nt(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function Z(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function Q(K,Rt){return u[K]!==Rt?(i.bindFramebuffer(K,Rt),u[K]=Rt,K===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Rt),K===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function G(K,Rt){let rt=f,wt=!1;if(K){rt=p.get(Rt),rt===void 0&&(rt=[],p.set(Rt,rt));const Ut=K.textures;if(rt.length!==Ut.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,ne=Ut.length;Ct<ne;Ct++)rt[Ct]=i.COLOR_ATTACHMENT0+Ct;rt.length=Ut.length,wt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(rt)}function ot(K){return g!==K?(i.useProgram(K),g=K,!0):!1}const gt={[$i]:i.FUNC_ADD,[Du]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};gt[Nu]=i.MIN,gt[Uu]=i.MAX;const tt={[ku]:i.ZERO,[Bu]:i.ONE,[zu]:i.SRC_COLOR,[fr]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Hu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[mr]:i.ONE_MINUS_SRC_ALPHA,[Gu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[$u]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Zu]:i.ONE_MINUS_CONSTANT_ALPHA};function U(K,Rt,rt,wt,Ut,Ct,ne,Pe,We,ge){if(K===li){v===!0&&(Z(i.BLEND),v=!1);return}if(v===!1&&(nt(i.BLEND),v=!0),K!==Iu){if(K!==m||ge!==y){if((d!==$i||_!==$i)&&(i.blendEquation(i.FUNC_ADD),d=$i,_=$i),ge)switch(K){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}M=null,w=null,A=null,b=null,S.set(0,0,0),E=0,m=K,y=ge}return}Ut=Ut||Rt,Ct=Ct||rt,ne=ne||wt,(Rt!==d||Ut!==_)&&(i.blendEquationSeparate(gt[Rt],gt[Ut]),d=Rt,_=Ut),(rt!==M||wt!==w||Ct!==A||ne!==b)&&(i.blendFuncSeparate(tt[rt],tt[wt],tt[Ct],tt[ne]),M=rt,w=wt,A=Ct,b=ne),(Pe.equals(S)===!1||We!==E)&&(i.blendColor(Pe.r,Pe.g,Pe.b,We),S.copy(Pe),E=We),m=K,y=!1}function Mt(K,Rt){K.side===gn?Z(i.CULL_FACE):nt(i.CULL_FACE);let rt=K.side===Sn;Rt&&(rt=!rt),at(rt),K.blending===ys&&K.transparent===!1?U(li):U(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),o.setMask(K.colorWrite);const wt=K.stencilWrite;r.setTest(wt),wt&&(r.setMask(K.stencilWriteMask),r.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),r.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),It(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(K){x!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),x=K)}function pt(K){K!==Ru?(nt(i.CULL_FACE),K!==P&&(K===Il?i.cullFace(i.BACK):K===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),P=K}function _t(K){K!==C&&(B&&i.lineWidth(K),C=K)}function It(K,Rt,rt){K?(nt(i.POLYGON_OFFSET_FILL),(R!==Rt||L!==rt)&&(i.polygonOffset(Rt,rt),R=Rt,L=rt)):Z(i.POLYGON_OFFSET_FILL)}function yt(K){K?nt(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function z(K){K===void 0&&(K=i.TEXTURE0+D-1),H!==K&&(i.activeTexture(K),H=K)}function I(K,Rt,rt){rt===void 0&&(H===null?rt=i.TEXTURE0+D-1:rt=H);let wt=V[rt];wt===void 0&&(wt={type:void 0,texture:void 0},V[rt]=wt),(wt.type!==K||wt.texture!==Rt)&&(H!==rt&&(i.activeTexture(rt),H=rt),i.bindTexture(K,Rt||it[K]),wt.type=K,wt.texture=Rt)}function et(){const K=V[H];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function vt(){try{i.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ft(){try{i.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ft(){try{i.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function St(){try{i.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Zt(){try{i.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function xt(){try{i.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Pt(){try{i.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Vt(){try{i.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function $t(K){W.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),W.copy(K))}function Nt(K){X.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),X.copy(K))}function re(K,Rt){let rt=c.get(Rt);rt===void 0&&(rt=new WeakMap,c.set(Rt,rt));let wt=rt.get(K);wt===void 0&&(wt=i.getUniformBlockIndex(Rt,K.name),rt.set(K,wt))}function te(K,Rt){const wt=c.get(Rt).get(K);l.get(Rt)!==wt&&(i.uniformBlockBinding(Rt,wt,K.__bindingPointIndex),l.set(Rt,wt))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,V={},u={},p=new WeakMap,f=[],g=null,v=!1,m=null,d=null,M=null,w=null,_=null,A=null,b=null,S=new Lt(0,0,0),E=0,y=!1,x=null,P=null,C=null,R=null,L=null,W.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:nt,disable:Z,bindFramebuffer:Q,drawBuffers:G,useProgram:ot,setBlending:U,setMaterial:Mt,setFlipSided:at,setCullFace:pt,setLineWidth:_t,setPolygonOffset:It,setScissorTest:yt,activeTexture:z,bindTexture:I,unbindTexture:et,compressedTexImage2D:dt,compressedTexImage3D:vt,texImage2D:Pt,texImage3D:Vt,updateUBOMapping:re,uniformBlockBinding:te,texStorage2D:Zt,texStorage3D:xt,texSubImage2D:ft,texSubImage3D:Ft,compressedTexSubImage2D:ut,compressedTexSubImage3D:St,scissor:$t,viewport:Nt,reset:Ce}}function Jg(i,t,e,n,s,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap;let u;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,I){return f?new OffscreenCanvas(z,I):ra("canvas")}function v(z,I,et){let dt=1;const vt=yt(z);if((vt.width>et||vt.height>et)&&(dt=et/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ft=Math.floor(dt*vt.width),Ft=Math.floor(dt*vt.height);u===void 0&&(u=g(ft,Ft));const ut=I?g(ft,Ft):u;return ut.width=ft,ut.height=Ft,ut.getContext("2d").drawImage(z,0,0,ft,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Ft+")."),ut}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),z;return z}function m(z){return z.generateMipmaps}function d(z){i.generateMipmap(z)}function M(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(z,I,et,dt,vt=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ft=I;if(I===i.RED&&(et===i.FLOAT&&(ft=i.R32F),et===i.HALF_FLOAT&&(ft=i.R16F),et===i.UNSIGNED_BYTE&&(ft=i.R8)),I===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(ft=i.R8UI),et===i.UNSIGNED_SHORT&&(ft=i.R16UI),et===i.UNSIGNED_INT&&(ft=i.R32UI),et===i.BYTE&&(ft=i.R8I),et===i.SHORT&&(ft=i.R16I),et===i.INT&&(ft=i.R32I)),I===i.RG&&(et===i.FLOAT&&(ft=i.RG32F),et===i.HALF_FLOAT&&(ft=i.RG16F),et===i.UNSIGNED_BYTE&&(ft=i.RG8)),I===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(ft=i.RG8UI),et===i.UNSIGNED_SHORT&&(ft=i.RG16UI),et===i.UNSIGNED_INT&&(ft=i.RG32UI),et===i.BYTE&&(ft=i.RG8I),et===i.SHORT&&(ft=i.RG16I),et===i.INT&&(ft=i.RG32I)),I===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),et===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),et===i.UNSIGNED_INT&&(ft=i.RGB32UI),et===i.BYTE&&(ft=i.RGB8I),et===i.SHORT&&(ft=i.RGB16I),et===i.INT&&(ft=i.RGB32I)),I===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),et===i.UNSIGNED_INT&&(ft=i.RGBA32UI),et===i.BYTE&&(ft=i.RGBA8I),et===i.SHORT&&(ft=i.RGBA16I),et===i.INT&&(ft=i.RGBA32I)),I===i.RGB&&et===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),I===i.RGBA){const Ft=vt?oa:Ae.getTransfer(dt);et===i.FLOAT&&(ft=i.RGBA32F),et===i.HALF_FLOAT&&(ft=i.RGBA16F),et===i.UNSIGNED_BYTE&&(ft=Ft===Ie?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function _(z,I){let et;return z?I===null||I===Qi||I===Ps?et=i.DEPTH24_STENCIL8:I===$n?et=i.DEPTH32F_STENCIL8:I===so&&(et=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Qi||I===Ps?et=i.DEPTH_COMPONENT24:I===$n?et=i.DEPTH_COMPONENT32F:I===so&&(et=i.DEPTH_COMPONENT16),et}function A(z,I){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==Tn&&z.minFilter!==Yn?Math.log2(Math.max(I.width,I.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?I.mipmaps.length:1}function b(z){const I=z.target;I.removeEventListener("dispose",b),E(I),I.isVideoTexture&&h.delete(I)}function S(z){const I=z.target;I.removeEventListener("dispose",S),x(I)}function E(z){const I=n.get(z);if(I.__webglInit===void 0)return;const et=z.source,dt=p.get(et);if(dt){const vt=dt[I.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&y(z),Object.keys(dt).length===0&&p.delete(et)}n.remove(z)}function y(z){const I=n.get(z);i.deleteTexture(I.__webglTexture);const et=z.source,dt=p.get(et);delete dt[I.__cacheKey],a.memory.textures--}function x(z){const I=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(I.__webglFramebuffer[dt]))for(let vt=0;vt<I.__webglFramebuffer[dt].length;vt++)i.deleteFramebuffer(I.__webglFramebuffer[dt][vt]);else i.deleteFramebuffer(I.__webglFramebuffer[dt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[dt])}else{if(Array.isArray(I.__webglFramebuffer))for(let dt=0;dt<I.__webglFramebuffer.length;dt++)i.deleteFramebuffer(I.__webglFramebuffer[dt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let dt=0;dt<I.__webglColorRenderbuffer.length;dt++)I.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[dt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const et=z.textures;for(let dt=0,vt=et.length;dt<vt;dt++){const ft=n.get(et[dt]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(et[dt])}n.remove(z)}let P=0;function C(){P=0}function R(){const z=P;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),P+=1,z}function L(z){const I=[];return I.push(z.wrapS),I.push(z.wrapT),I.push(z.wrapR||0),I.push(z.magFilter),I.push(z.minFilter),I.push(z.anisotropy),I.push(z.internalFormat),I.push(z.format),I.push(z.type),I.push(z.generateMipmaps),I.push(z.premultiplyAlpha),I.push(z.flipY),I.push(z.unpackAlignment),I.push(z.colorSpace),I.join()}function D(z,I){const et=n.get(z);if(z.isVideoTexture&&_t(z),z.isRenderTargetTexture===!1&&z.version>0&&et.__version!==z.version){const dt=z.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(et,z,I);return}}e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+I)}function B(z,I){const et=n.get(z);if(z.version>0&&et.__version!==z.version){X(et,z,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+I)}function k(z,I){const et=n.get(z);if(z.version>0&&et.__version!==z.version){X(et,z,I);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+I)}function F(z,I){const et=n.get(z);if(z.version>0&&et.__version!==z.version){O(et,z,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+I)}const H={[Qn]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},V={[Tn]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[Zo]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Y={[sd]:i.NEVER,[hd]:i.ALWAYS,[od]:i.LESS,[zh]:i.LEQUAL,[ad]:i.EQUAL,[cd]:i.GEQUAL,[rd]:i.GREATER,[ld]:i.NOTEQUAL};function j(z,I){if(I.type===$n&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Yn||I.magFilter===Zo||I.magFilter===Ks||I.magFilter===bi||I.minFilter===Yn||I.minFilter===Zo||I.minFilter===Ks||I.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,H[I.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,H[I.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,H[I.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,V[I.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,V[I.minFilter]),I.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,Y[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Tn||I.minFilter!==Ks&&I.minFilter!==bi||I.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function W(z,I){let et=!1;z.__webglInit===void 0&&(z.__webglInit=!0,I.addEventListener("dispose",b));const dt=I.source;let vt=p.get(dt);vt===void 0&&(vt={},p.set(dt,vt));const ft=L(I);if(ft!==z.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,et=!0),vt[ft].usedTimes++;const Ft=vt[z.__cacheKey];Ft!==void 0&&(vt[z.__cacheKey].usedTimes--,Ft.usedTimes===0&&y(I)),z.__cacheKey=ft,z.__webglTexture=vt[ft].texture}return et}function X(z,I,et){let dt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(dt=i.TEXTURE_3D);const vt=W(z,I),ft=I.source;e.bindTexture(dt,z.__webglTexture,i.TEXTURE0+et);const Ft=n.get(ft);if(ft.version!==Ft.__version||vt===!0){e.activeTexture(i.TEXTURE0+et);const ut=Ae.getPrimaries(Ae.workingColorSpace),St=I.colorSpace===Un?null:Ae.getPrimaries(I.colorSpace),Zt=I.colorSpace===Un||ut===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let xt=v(I.image,!1,s.maxTextureSize);xt=It(I,xt);const Pt=o.convert(I.format,I.colorSpace),Vt=o.convert(I.type);let $t=w(I.internalFormat,Pt,Vt,I.colorSpace,I.isVideoTexture);j(dt,I);let Nt;const re=I.mipmaps,te=I.isVideoTexture!==!0,Ce=Ft.__version===void 0||vt===!0,K=ft.dataReady,Rt=A(I,xt);if(I.isDepthTexture)$t=_(I.format===Rs,I.type),Ce&&(te?e.texStorage2D(i.TEXTURE_2D,1,$t,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,$t,xt.width,xt.height,0,Pt,Vt,null));else if(I.isDataTexture)if(re.length>0){te&&Ce&&e.texStorage2D(i.TEXTURE_2D,Rt,$t,re[0].width,re[0].height);for(let rt=0,wt=re.length;rt<wt;rt++)Nt=re[rt],te?K&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Nt.width,Nt.height,Pt,Vt,Nt.data):e.texImage2D(i.TEXTURE_2D,rt,$t,Nt.width,Nt.height,0,Pt,Vt,Nt.data);I.generateMipmaps=!1}else te?(Ce&&e.texStorage2D(i.TEXTURE_2D,Rt,$t,xt.width,xt.height),K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt.width,xt.height,Pt,Vt,xt.data)):e.texImage2D(i.TEXTURE_2D,0,$t,xt.width,xt.height,0,Pt,Vt,xt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){te&&Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,$t,re[0].width,re[0].height,xt.depth);for(let rt=0,wt=re.length;rt<wt;rt++)if(Nt=re[rt],I.format!==In)if(Pt!==null)if(te){if(K)if(I.layerUpdates.size>0){const Ut=wc(Nt.width,Nt.height,I.format,I.type);for(const Ct of I.layerUpdates){const ne=Nt.data.subarray(Ct*Ut/Nt.data.BYTES_PER_ELEMENT,(Ct+1)*Ut/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Ct,Nt.width,Nt.height,1,Pt,ne)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Nt.width,Nt.height,xt.depth,Pt,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,$t,Nt.width,Nt.height,xt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Nt.width,Nt.height,xt.depth,Pt,Vt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,$t,Nt.width,Nt.height,xt.depth,0,Pt,Vt,Nt.data)}else{te&&Ce&&e.texStorage2D(i.TEXTURE_2D,Rt,$t,re[0].width,re[0].height);for(let rt=0,wt=re.length;rt<wt;rt++)Nt=re[rt],I.format!==In?Pt!==null?te?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Nt.width,Nt.height,Pt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,$t,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?K&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Nt.width,Nt.height,Pt,Vt,Nt.data):e.texImage2D(i.TEXTURE_2D,rt,$t,Nt.width,Nt.height,0,Pt,Vt,Nt.data)}else if(I.isDataArrayTexture)if(te){if(Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,$t,xt.width,xt.height,xt.depth),K)if(I.layerUpdates.size>0){const rt=wc(xt.width,xt.height,I.format,I.type);for(const wt of I.layerUpdates){const Ut=xt.data.subarray(wt*rt/xt.data.BYTES_PER_ELEMENT,(wt+1)*rt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,xt.width,xt.height,1,Pt,Vt,Ut)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(I.isData3DTexture)te?(Ce&&e.texStorage3D(i.TEXTURE_3D,Rt,$t,xt.width,xt.height,xt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,$t,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(I.isFramebufferTexture){if(Ce)if(te)e.texStorage2D(i.TEXTURE_2D,Rt,$t,xt.width,xt.height);else{let rt=xt.width,wt=xt.height;for(let Ut=0;Ut<Rt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,$t,rt,wt,0,Pt,Vt,null),rt>>=1,wt>>=1}}else if(re.length>0){if(te&&Ce){const rt=yt(re[0]);e.texStorage2D(i.TEXTURE_2D,Rt,$t,rt.width,rt.height)}for(let rt=0,wt=re.length;rt<wt;rt++)Nt=re[rt],te?K&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Pt,Vt,Nt):e.texImage2D(i.TEXTURE_2D,rt,$t,Pt,Vt,Nt);I.generateMipmaps=!1}else if(te){if(Ce){const rt=yt(xt);e.texStorage2D(i.TEXTURE_2D,Rt,$t,rt.width,rt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Vt,xt)}else e.texImage2D(i.TEXTURE_2D,0,$t,Pt,Vt,xt);m(I)&&d(dt),Ft.__version=ft.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function O(z,I,et){if(I.image.length!==6)return;const dt=W(z,I),vt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+et);const ft=n.get(vt);if(vt.version!==ft.__version||dt===!0){e.activeTexture(i.TEXTURE0+et);const Ft=Ae.getPrimaries(Ae.workingColorSpace),ut=I.colorSpace===Un?null:Ae.getPrimaries(I.colorSpace),St=I.colorSpace===Un||Ft===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Zt=I.isCompressedTexture||I.image[0].isCompressedTexture,xt=I.image[0]&&I.image[0].isDataTexture,Pt=[];for(let wt=0;wt<6;wt++)!Zt&&!xt?Pt[wt]=v(I.image[wt],!0,s.maxCubemapSize):Pt[wt]=xt?I.image[wt].image:I.image[wt],Pt[wt]=It(I,Pt[wt]);const Vt=Pt[0],$t=o.convert(I.format,I.colorSpace),Nt=o.convert(I.type),re=w(I.internalFormat,$t,Nt,I.colorSpace),te=I.isVideoTexture!==!0,Ce=ft.__version===void 0||dt===!0,K=vt.dataReady;let Rt=A(I,Vt);j(i.TEXTURE_CUBE_MAP,I);let rt;if(Zt){te&&Ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,re,Vt.width,Vt.height);for(let wt=0;wt<6;wt++){rt=Pt[wt].mipmaps;for(let Ut=0;Ut<rt.length;Ut++){const Ct=rt[Ut];I.format!==In?$t!==null?te?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,0,0,Ct.width,Ct.height,$t,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,re,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,0,0,Ct.width,Ct.height,$t,Nt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,re,Ct.width,Ct.height,0,$t,Nt,Ct.data)}}}else{if(rt=I.mipmaps,te&&Ce){rt.length>0&&Rt++;const wt=yt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,re,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(xt){te?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Pt[wt].width,Pt[wt].height,$t,Nt,Pt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,re,Pt[wt].width,Pt[wt].height,0,$t,Nt,Pt[wt].data);for(let Ut=0;Ut<rt.length;Ut++){const ne=rt[Ut].image[wt].image;te?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,0,0,ne.width,ne.height,$t,Nt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,re,ne.width,ne.height,0,$t,Nt,ne.data)}}else{te?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,$t,Nt,Pt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,re,$t,Nt,Pt[wt]);for(let Ut=0;Ut<rt.length;Ut++){const Ct=rt[Ut];te?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,0,0,$t,Nt,Ct.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,re,$t,Nt,Ct.image[wt])}}}m(I)&&d(i.TEXTURE_CUBE_MAP),ft.__version=vt.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function it(z,I,et,dt,vt,ft){const Ft=o.convert(et.format,et.colorSpace),ut=o.convert(et.type),St=w(et.internalFormat,Ft,ut,et.colorSpace),Zt=n.get(I),xt=n.get(et);if(xt.__renderTarget=I,!Zt.__hasExternalTextures){const Pt=Math.max(1,I.width>>ft),Vt=Math.max(1,I.height>>ft);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,ft,St,Pt,Vt,I.depth,0,Ft,ut,null):e.texImage2D(vt,ft,St,Pt,Vt,0,Ft,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),pt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,vt,xt.__webglTexture,0,at(I)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,vt,xt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(z,I,et){if(i.bindRenderbuffer(i.RENDERBUFFER,z),I.depthBuffer){const dt=I.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ft=_(I.stencilBuffer,vt),Ft=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=at(I);pt(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,ft,I.width,I.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,ft,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,ft,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,z)}else{const dt=I.textures;for(let vt=0;vt<dt.length;vt++){const ft=dt[vt],Ft=o.convert(ft.format,ft.colorSpace),ut=o.convert(ft.type),St=w(ft.internalFormat,Ft,ut,ft.colorSpace),Zt=at(I);et&&pt(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,St,I.width,I.height):pt(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,St,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,St,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(z,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=n.get(I.depthTexture);dt.__renderTarget=I,(!dt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),D(I.depthTexture,0);const vt=dt.__webglTexture,ft=at(I);if(I.depthTexture.format===bs)pt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(I.depthTexture.format===Rs)pt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Q(z){const I=n.get(z),et=z.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==z.depthTexture){const dt=z.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),dt){const vt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),I.__depthDisposeCallback=vt}I.__boundDepthTexture=dt}if(z.depthTexture&&!I.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Z(I.__webglFramebuffer,z)}else if(et){I.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[dt]),I.__webglDepthbuffer[dt]===void 0)I.__webglDepthbuffer[dt]=i.createRenderbuffer(),nt(I.__webglDepthbuffer[dt],z,!1);else{const vt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=I.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,ft)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),nt(I.__webglDepthbuffer,z,!1);else{const dt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,vt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(z,I,et){const dt=n.get(z);I!==void 0&&it(dt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&Q(z)}function ot(z){const I=z.texture,et=n.get(z),dt=n.get(I);z.addEventListener("dispose",S);const vt=z.textures,ft=z.isWebGLCubeRenderTarget===!0,Ft=vt.length>1;if(Ft||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=I.version,a.memory.textures++),ft){et.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0){et.__webglFramebuffer[ut]=[];for(let St=0;St<I.mipmaps.length;St++)et.__webglFramebuffer[ut][St]=i.createFramebuffer()}else et.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){et.__webglFramebuffer=[];for(let ut=0;ut<I.mipmaps.length;ut++)et.__webglFramebuffer[ut]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let ut=0,St=vt.length;ut<St;ut++){const Zt=n.get(vt[ut]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(z.samples>0&&pt(z)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let ut=0;ut<vt.length;ut++){const St=vt[ut];et.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[ut]);const Zt=o.convert(St.format,St.colorSpace),xt=o.convert(St.type),Pt=w(St.internalFormat,Zt,xt,St.colorSpace,z.isXRRenderTarget===!0),Vt=at(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Pt,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,et.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(et.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),j(i.TEXTURE_CUBE_MAP,I);for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0)for(let St=0;St<I.mipmaps.length;St++)it(et.__webglFramebuffer[ut][St],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,St);else it(et.__webglFramebuffer[ut],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(I)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let ut=0,St=vt.length;ut<St;ut++){const Zt=vt[ut],xt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,xt.__webglTexture),j(i.TEXTURE_2D,Zt),it(et.__webglFramebuffer,z,Zt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Zt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ut=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,dt.__webglTexture),j(ut,I),I.mipmaps&&I.mipmaps.length>0)for(let St=0;St<I.mipmaps.length;St++)it(et.__webglFramebuffer[St],z,I,i.COLOR_ATTACHMENT0,ut,St);else it(et.__webglFramebuffer,z,I,i.COLOR_ATTACHMENT0,ut,0);m(I)&&d(ut),e.unbindTexture()}z.depthBuffer&&Q(z)}function gt(z){const I=z.textures;for(let et=0,dt=I.length;et<dt;et++){const vt=I[et];if(m(vt)){const ft=M(z),Ft=n.get(vt).__webglTexture;e.bindTexture(ft,Ft),d(ft),e.unbindTexture()}}}const tt=[],U=[];function Mt(z){if(z.samples>0){if(pt(z)===!1){const I=z.textures,et=z.width,dt=z.height;let vt=i.COLOR_BUFFER_BIT;const ft=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(z),ut=I.length>1;if(ut)for(let St=0;St<I.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let St=0;St<I.length;St++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[St]);const Zt=n.get(I[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,et,dt,0,0,et,dt,vt,i.NEAREST),l===!0&&(tt.length=0,U.length=0,tt.push(i.COLOR_ATTACHMENT0+St),z.depthBuffer&&z.resolveDepthBuffer===!1&&(tt.push(ft),U.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let St=0;St<I.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[St]);const Zt=n.get(I[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){const I=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function at(z){return Math.min(s.maxSamples,z.samples)}function pt(z){const I=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function _t(z){const I=a.render.frame;h.get(z)!==I&&(h.set(z,I),z.update())}function It(z,I){const et=z.colorSpace,dt=z.format,vt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||et!==Ls&&et!==Un&&(Ae.getTransfer(et)===Ie?(dt!==In||vt!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),I}function yt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=C,this.setTexture2D=D,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=F,this.rebindTextures=G,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=it,this.useMultisampledRTT=pt}function t1(i,t){function e(n,s=Un){let o;const a=Ae.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.BYTE;if(n===Rh)return i.SHORT;if(n===so)return i.UNSIGNED_SHORT;if(n===rl)return i.INT;if(n===Qi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Ih)return i.ALPHA;if(n===Dh)return i.RGB;if(n===In)return i.RGBA;if(n===Fh)return i.LUMINANCE;if(n===Nh)return i.LUMINANCE_ALPHA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===Uh)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===pl)return i.RGBA_INTEGER;if(n===jo||n===Ko||n===Qo||n===Jo)if(a===Ie)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===jo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===jo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ar||n===Er||n===Tr||n===Cr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ar)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Er)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pr||n===Rr||n===Lr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Pr||n===Rr)return a===Ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Lr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ir||n===Dr||n===Fr||n===Nr||n===Ur||n===kr||n===Br||n===zr||n===Or||n===Hr||n===Vr||n===Wr||n===Gr||n===Xr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ir)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ur)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Br)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Or)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xr)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ta||n===Yr||n===$r)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ta)return a===Ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$r)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===qr||n===Zr||n===jr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ta)return o.COMPRESSED_RED_RGTC1_EXT;if(n===qr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
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

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new vn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new tn({vertexShader:e1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s1 extends Ji{constructor(t,e){super();const n=this;let s=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,p=null,f=null,g=null;const v=new i1,m=e.getContextAttributes();let d=null,M=null;const w=[],_=[],A=new zt;let b=null;const S=new Nn;S.viewport=new ke;const E=new Nn;E.viewport=new ke;const y=[S,E],x=new pp;let P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let O=w[X];return O===void 0&&(O=new Ga,w[X]=O),O.getTargetRaySpace()},this.getControllerGrip=function(X){let O=w[X];return O===void 0&&(O=new Ga,w[X]=O),O.getGripSpace()},this.getHand=function(X){let O=w[X];return O===void 0&&(O=new Ga,w[X]=O),O.getHandSpace()};function R(X){const O=_.indexOf(X.inputSource);if(O===-1)return;const it=w[O];it!==void 0&&(it.update(X.inputSource,X.frame,c||a),it.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",D);for(let X=0;X<w.length;X++){const O=_[X];O!==null&&(_[X]=null,w[X].disconnect(O))}P=null,C=null,v.reset(),t.setRenderTarget(d),f=null,p=null,u=null,s=null,M=null,W.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",L),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,nt=null,Z=null;m.depth&&(Z=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Rs:bs,nt=m.stencil?Ps:Qi);const Q={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:o};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Q),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new kn(p.textureWidth,p.textureHeight,{format:In,type:di,depthTexture:new Zh(p.textureWidth,p.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new kn(f.framebufferWidth,f.framebufferHeight,{format:In,type:di,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(r),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function D(X){for(let O=0;O<X.removed.length;O++){const it=X.removed[O],nt=_.indexOf(it);nt>=0&&(_[nt]=null,w[nt].disconnect(it))}for(let O=0;O<X.added.length;O++){const it=X.added[O];let nt=_.indexOf(it);if(nt===-1){for(let Q=0;Q<w.length;Q++)if(Q>=_.length){_.push(it),nt=Q;break}else if(_[Q]===null){_[Q]=it,nt=Q;break}if(nt===-1)break}const Z=w[nt];Z&&Z.connect(it)}}const B=new T,k=new T;function F(X,O,it){B.setFromMatrixPosition(O.matrixWorld),k.setFromMatrixPosition(it.matrixWorld);const nt=B.distanceTo(k),Z=O.projectionMatrix.elements,Q=it.projectionMatrix.elements,G=Z[14]/(Z[10]-1),ot=Z[14]/(Z[10]+1),gt=(Z[9]+1)/Z[5],tt=(Z[9]-1)/Z[5],U=(Z[8]-1)/Z[0],Mt=(Q[8]+1)/Q[0],at=G*U,pt=G*Mt,_t=nt/(-U+Mt),It=_t*-U;if(O.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(It),X.translateZ(_t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Z[10]===-1)X.projectionMatrix.copy(O.projectionMatrix),X.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const yt=G+_t,z=ot+_t,I=at-It,et=pt+(nt-It),dt=gt*ot/z*yt,vt=tt*ot/z*yt;X.projectionMatrix.makePerspective(I,et,dt,vt,yt,z),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function H(X,O){O===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(O.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let O=X.near,it=X.far;v.texture!==null&&(v.depthNear>0&&(O=v.depthNear),v.depthFar>0&&(it=v.depthFar)),x.near=E.near=S.near=O,x.far=E.far=S.far=it,(P!==x.near||C!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,C=x.far),S.layers.mask=X.layers.mask|2,E.layers.mask=X.layers.mask|4,x.layers.mask=S.layers.mask|E.layers.mask;const nt=X.parent,Z=x.cameras;H(x,nt);for(let Q=0;Q<Z.length;Q++)H(Z[Q],nt);Z.length===2?F(x,S,E):x.projectionMatrix.copy(S.projectionMatrix),V(X,x,nt)};function V(X,O,it){it===null?X.matrix.copy(O.matrixWorld):(X.matrix.copy(it.matrixWorld),X.matrix.invert(),X.matrix.multiply(O.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(O.projectionMatrix),X.projectionMatrixInverse.copy(O.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=oo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Y=null;function j(X,O){if(h=O.getViewerPose(c||a),g=O,h!==null){const it=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let nt=!1;it.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let G=0;G<it.length;G++){const ot=it[G];let gt=null;if(f!==null)gt=f.getViewport(ot);else{const U=u.getViewSubImage(p,ot);gt=U.viewport,G===0&&(t.setRenderTargetTextures(M,U.colorTexture,p.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(M))}let tt=y[G];tt===void 0&&(tt=new Nn,tt.layers.enable(G),tt.viewport=new ke,y[G]=tt),tt.matrix.fromArray(ot.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ot.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(gt.x,gt.y,gt.width,gt.height),G===0&&(x.matrix.copy(tt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(tt)}const Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const G=u.getDepthInformation(it[0]);G&&G.isValid&&G.texture&&v.init(t,G,s.renderState)}}for(let it=0;it<w.length;it++){const nt=_[it],Z=w[it];nt!==null&&Z!==void 0&&Z.update(nt,O,c||a)}Y&&Y(X,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}const W=new Qh;W.setAnimationLoop(j),this.setAnimationLoop=function(X){Y=X},this.dispose=function(){}}}const Vi=new Cn,o1=new ie;function a1(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Gh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,w,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),u(m,d)):d.isMeshPhongMaterial?(o(m,d),h(m,d)):d.isMeshStandardMaterial?(o(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,_)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),v(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&r(m,d)):d.isPointsMaterial?l(m,d,M,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),w=M.envMap,_=M.envMapRotation;w&&(m.envMap.value=w,Vi.copy(_),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(o1.makeRotationFromEuler(Vi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function r(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=w*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r1(i,t,e,n){let s={},o={},a=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const _=w.program;n.uniformBlockBinding(M,_)}function c(M,w){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const A=w.program;n.updateUBOMapping(M,A);const b=t.render.frame;o[M.id]!==b&&(p(M),o[M.id]=b)}function h(M){const w=u();M.__bindingPointIndex=w;const _=i.createBuffer(),A=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,_),_}function u(){for(let M=0;M<r;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const w=s[M.id],_=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let b=0,S=_.length;b<S;b++){const E=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,x=E.length;y<x;y++){const P=E[y];if(f(P,b,y,A)===!0){const C=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let D=0;D<R.length;D++){const B=R[D],k=v(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,C+L,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,_,A){const b=M.value,S=w+"_"+_;if(A[S]===void 0)return typeof b=="number"||typeof b=="boolean"?A[S]=b:A[S]=b.clone(),!0;{const E=A[S];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return A[S]=b,!0}else if(E.equals(b)===!1)return E.copy(b),!0}return!1}function g(M){const w=M.uniforms;let _=0;const A=16;for(let S=0,E=w.length;S<E;S++){const y=Array.isArray(w[S])?w[S]:[w[S]];for(let x=0,P=y.length;x<P;x++){const C=y[x],R=Array.isArray(C.value)?C.value:[C.value];for(let L=0,D=R.length;L<D;L++){const B=R[L],k=v(B),F=_%A,H=F%k.boundary,V=F+H;_+=H,V!==0&&A-V<k.storage&&(_+=A-V),C.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=k.storage}}}const b=_%A;return b>0&&(_+=A-b),M.__size=_,M.__cache={},this}function v(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){const w=M.target;w.removeEventListener("dispose",m);const _=a.indexOf(w.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},o={}}return{bind:l,update:c,dispose:d}}class l1{constructor(t={}){const{canvas:e=Td(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Ei,this.toneMappingExposure=1;const _=this;let A=!1,b=0,S=0,E=null,y=-1,x=null;const P=new ke,C=new ke;let R=null;const L=new Lt(0);let D=0,B=e.width,k=e.height,F=1,H=null,V=null;const Y=new ke(0,0,B,k),j=new ke(0,0,B,k);let W=!1;const X=new _l;let O=!1,it=!1;this.transmissionResolutionScale=1;const nt=new ie,Z=new ie,Q=new T,G=new ke,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function tt(){return E===null?F:1}let U=n;function Mt(N,J){return e.getContext(N,J)}try{const N={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),U===null){const J="webgl2";if(U=Mt(J,N),U===null)throw Mt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let at,pt,_t,It,yt,z,I,et,dt,vt,ft,Ft,ut,St,Zt,xt,Pt,Vt,$t,Nt,re,te,Ce,K;function Rt(){at=new _m(U),at.init(),te=new t1(U,at),pt=new um(U,at,t,te),_t=new Qg(U,at),pt.reverseDepthBuffer&&p&&_t.buffers.depth.setReversed(!0),It=new wm(U),yt=new zg,z=new Jg(U,at,_t,yt,pt,te,It),I=new pm(_),et=new vm(_),dt=new Ep(U),Ce=new cm(U,dt),vt=new xm(U,dt,It,Ce),ft=new bm(U,vt,dt,It),$t=new ym(U,pt,z),xt=new dm(yt),Ft=new Bg(_,I,et,at,pt,Ce,xt),ut=new a1(_,yt),St=new Hg,Zt=new $g(at),Vt=new lm(_,I,et,_t,ft,f,l),Pt=new jg(_,ft,pt),K=new r1(U,It,pt,_t),Nt=new hm(U,at,It),re=new Mm(U,at,It),It.programs=Ft.programs,_.capabilities=pt,_.extensions=at,_.properties=yt,_.renderLists=St,_.shadowMap=Pt,_.state=_t,_.info=It}Rt();const rt=new s1(_,U);this.xr=rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const N=at.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=at.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(N){N!==void 0&&(F=N,this.setSize(B,k,!1))},this.getSize=function(N){return N.set(B,k)},this.setSize=function(N,J,lt=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=N,k=J,e.width=Math.floor(N*F),e.height=Math.floor(J*F),lt===!0&&(e.style.width=N+"px",e.style.height=J+"px"),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(B*F,k*F).floor()},this.setDrawingBufferSize=function(N,J,lt){B=N,k=J,F=lt,e.width=Math.floor(N*lt),e.height=Math.floor(J*lt),this.setViewport(0,0,N,J)},this.getCurrentViewport=function(N){return N.copy(P)},this.getViewport=function(N){return N.copy(Y)},this.setViewport=function(N,J,lt,ct){N.isVector4?Y.set(N.x,N.y,N.z,N.w):Y.set(N,J,lt,ct),_t.viewport(P.copy(Y).multiplyScalar(F).round())},this.getScissor=function(N){return N.copy(j)},this.setScissor=function(N,J,lt,ct){N.isVector4?j.set(N.x,N.y,N.z,N.w):j.set(N,J,lt,ct),_t.scissor(C.copy(j).multiplyScalar(F).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(N){_t.setScissorTest(W=N)},this.setOpaqueSort=function(N){H=N},this.setTransparentSort=function(N){V=N},this.getClearColor=function(N){return N.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,lt=!0){let ct=0;if(N){let st=!1;if(E!==null){const bt=E.texture.format;st=bt===pl||bt===dl||bt===ul}if(st){const bt=E.texture.type,Dt=bt===di||bt===Qi||bt===so||bt===Ps||bt===ll||bt===cl,Ot=Vt.getClearColor(),Ht=Vt.getClearAlpha(),Qt=Ot.r,ee=Ot.g,Kt=Ot.b;Dt?(g[0]=Qt,g[1]=ee,g[2]=Kt,g[3]=Ht,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Qt,v[1]=ee,v[2]=Kt,v[3]=Ht,U.clearBufferiv(U.COLOR,0,v))}else ct|=U.COLOR_BUFFER_BIT}J&&(ct|=U.DEPTH_BUFFER_BIT),lt&&(ct|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Vt.dispose(),St.dispose(),Zt.dispose(),yt.dispose(),I.dispose(),et.dispose(),ft.dispose(),Ce.dispose(),K.dispose(),Ft.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",mt),rt.removeEventListener("sessionend",Tt),Wt.stop()};function wt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const N=It.autoReset,J=Pt.enabled,lt=Pt.autoUpdate,ct=Pt.needsUpdate,st=Pt.type;Rt(),It.autoReset=N,Pt.enabled=J,Pt.autoUpdate=lt,Pt.needsUpdate=ct,Pt.type=st}function Ct(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ne(N){const J=N.target;J.removeEventListener("dispose",ne),Pe(J)}function Pe(N){We(N),yt.remove(N)}function We(N){const J=yt.get(N).programs;J!==void 0&&(J.forEach(function(lt){Ft.releaseProgram(lt)}),N.isShaderMaterial&&Ft.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,lt,ct,st,bt){J===null&&(J=ot);const Dt=st.isMesh&&st.matrixWorld.determinant()<0,Ot=on(N,J,lt,ct,st);_t.setMaterial(ct,Dt);let Ht=lt.index,Qt=1;if(ct.wireframe===!0){if(Ht=vt.getWireframeAttribute(lt),Ht===void 0)return;Qt=2}const ee=lt.drawRange,Kt=lt.attributes.position;let we=ee.start*Qt,Ee=(ee.start+ee.count)*Qt;bt!==null&&(we=Math.max(we,bt.start*Qt),Ee=Math.min(Ee,(bt.start+bt.count)*Qt)),Ht!==null?(we=Math.max(we,0),Ee=Math.min(Ee,Ht.count)):Kt!=null&&(we=Math.max(we,0),Ee=Math.min(Ee,Kt.count));const Ze=Ee-we;if(Ze<0||Ze===1/0)return;Ce.setup(st,ct,Ot,lt,Ht);let Ue,_e=Nt;if(Ht!==null&&(Ue=dt.get(Ht),_e=re,_e.setIndex(Ue)),st.isMesh)ct.wireframe===!0?(_t.setLineWidth(ct.wireframeLinewidth*tt()),_e.setMode(U.LINES)):_e.setMode(U.TRIANGLES);else if(st.isLine){let qt=ct.linewidth;qt===void 0&&(qt=1),_t.setLineWidth(qt*tt()),st.isLineSegments?_e.setMode(U.LINES):st.isLineLoop?_e.setMode(U.LINE_LOOP):_e.setMode(U.LINE_STRIP)}else st.isPoints?_e.setMode(U.POINTS):st.isSprite&&_e.setMode(U.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)Xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))_e.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const qt=st._multiDrawStarts,Oe=st._multiDrawCounts,Se=st._multiDrawCount,De=Ht?dt.get(Ht).bytesPerElement:1,Ni=yt.get(ct).currentProgram.getUniforms();for(let ht=0;ht<Se;ht++)Ni.setValue(U,"_gl_DrawID",ht),_e.render(qt[ht]/De,Oe[ht])}else if(st.isInstancedMesh)_e.renderInstances(we,Ze,st.count);else if(lt.isInstancedBufferGeometry){const qt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Oe=Math.min(lt.instanceCount,qt);_e.renderInstances(we,Ze,Oe)}else _e.render(we,Ze)};function ge(N,J,lt){N.transparent===!0&&N.side===gn&&N.forceSinglePass===!1?(N.side=Sn,N.needsUpdate=!0,ve(N,J,lt),N.side=Li,N.needsUpdate=!0,ve(N,J,lt),N.side=gn):ve(N,J,lt)}this.compile=function(N,J,lt=null){lt===null&&(lt=N),d=Zt.get(lt),d.init(J),w.push(d),lt.traverseVisible(function(st){st.isLight&&st.layers.test(J.layers)&&(d.pushLight(st),st.castShadow&&d.pushShadow(st))}),N!==lt&&N.traverseVisible(function(st){st.isLight&&st.layers.test(J.layers)&&(d.pushLight(st),st.castShadow&&d.pushShadow(st))}),d.setupLights();const ct=new Set;return N.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const bt=st.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Ot=bt[Dt];ge(Ot,lt,st),ct.add(Ot)}else ge(bt,lt,st),ct.add(bt)}),d=w.pop(),ct},this.compileAsync=function(N,J,lt=null){const ct=this.compile(N,J,lt);return new Promise(st=>{function bt(){if(ct.forEach(function(Dt){yt.get(Dt).currentProgram.isReady()&&ct.delete(Dt)}),ct.size===0){st(N);return}setTimeout(bt,10)}at.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let sn=null;function Xe(N){sn&&sn(N)}function mt(){Wt.stop()}function Tt(){Wt.start()}const Wt=new Qh;Wt.setAnimationLoop(Xe),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(N){sn=N,rt.setAnimationLoop(N),N===null?Wt.stop():Wt.start()},rt.addEventListener("sessionstart",mt),rt.addEventListener("sessionend",Tt),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(J),J=rt.getCamera()),N.isScene===!0&&N.onBeforeRender(_,N,J,E),d=Zt.get(N,w.length),d.init(J),w.push(d),Z.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),X.setFromProjectionMatrix(Z),it=this.localClippingEnabled,O=xt.init(this.clippingPlanes,it),m=St.get(N,M.length),m.init(),M.push(m),rt.enabled===!0&&rt.isPresenting===!0){const bt=_.xr.getDepthSensingMesh();bt!==null&&he(bt,J,-1/0,_.sortObjects)}he(N,J,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(H,V),gt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,gt&&Vt.addToRenderList(m,N),this.info.render.frame++,O===!0&&xt.beginShadows();const lt=d.state.shadowsArray;Pt.render(lt,N,J),O===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=m.opaque,st=m.transmissive;if(d.setupLights(),J.isArrayCamera){const bt=J.cameras;if(st.length>0)for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Ht=bt[Dt];jt(ct,st,N,Ht)}gt&&Vt.render(N);for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Ht=bt[Dt];ue(m,N,Ht,Ht.viewport)}}else st.length>0&&jt(ct,st,N,J),gt&&Vt.render(N),ue(m,N,J);E!==null&&S===0&&(z.updateMultisampleRenderTarget(E),z.updateRenderTargetMipmap(E)),N.isScene===!0&&N.onAfterRender(_,N,J),Ce.resetDefaultState(),y=-1,x=null,w.pop(),w.length>0?(d=w[w.length-1],O===!0&&xt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function he(N,J,lt,ct){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)lt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)d.pushLight(N),N.castShadow&&d.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||X.intersectsSprite(N)){ct&&G.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Z);const Dt=ft.update(N),Ot=N.material;Ot.visible&&m.push(N,Dt,Ot,lt,G.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||X.intersectsObject(N))){const Dt=ft.update(N),Ot=N.material;if(ct&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),G.copy(N.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),G.copy(Dt.boundingSphere.center)),G.applyMatrix4(N.matrixWorld).applyMatrix4(Z)),Array.isArray(Ot)){const Ht=Dt.groups;for(let Qt=0,ee=Ht.length;Qt<ee;Qt++){const Kt=Ht[Qt],we=Ot[Kt.materialIndex];we&&we.visible&&m.push(N,Dt,we,lt,G.z,Kt)}}else Ot.visible&&m.push(N,Dt,Ot,lt,G.z,null)}}const bt=N.children;for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++)he(bt[Dt],J,lt,ct)}function ue(N,J,lt,ct){const st=N.opaque,bt=N.transmissive,Dt=N.transparent;d.setupLightsView(lt),O===!0&&xt.setGlobalState(_.clippingPlanes,lt),ct&&_t.viewport(P.copy(ct)),st.length>0&&Jt(st,J,lt),bt.length>0&&Jt(bt,J,lt),Dt.length>0&&Jt(Dt,J,lt),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function jt(N,J,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ct.id]===void 0&&(d.state.transmissionRenderTarget[ct.id]=new kn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Kn:di,minFilter:bi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=d.state.transmissionRenderTarget[ct.id],Dt=ct.viewport||P;bt.setSize(Dt.z*_.transmissionResolutionScale,Dt.w*_.transmissionResolutionScale);const Ot=_.getRenderTarget();_.setRenderTarget(bt),_.getClearColor(L),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),gt&&Vt.render(lt);const Ht=_.toneMapping;_.toneMapping=Ei;const Qt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),d.setupLightsView(ct),O===!0&&xt.setGlobalState(_.clippingPlanes,ct),Jt(N,lt,ct),z.updateMultisampleRenderTarget(bt),z.updateRenderTargetMipmap(bt),at.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Kt=0,we=J.length;Kt<we;Kt++){const Ee=J[Kt],Ze=Ee.object,Ue=Ee.geometry,_e=Ee.material,qt=Ee.group;if(_e.side===gn&&Ze.layers.test(ct.layers)){const Oe=_e.side;_e.side=Sn,_e.needsUpdate=!0,se(Ze,lt,ct,Ue,_e,qt),_e.side=Oe,_e.needsUpdate=!0,ee=!0}}ee===!0&&(z.updateMultisampleRenderTarget(bt),z.updateRenderTargetMipmap(bt))}_.setRenderTarget(Ot),_.setClearColor(L,D),Qt!==void 0&&(ct.viewport=Qt),_.toneMapping=Ht}function Jt(N,J,lt){const ct=J.isScene===!0?J.overrideMaterial:null;for(let st=0,bt=N.length;st<bt;st++){const Dt=N[st],Ot=Dt.object,Ht=Dt.geometry,Qt=ct===null?Dt.material:ct,ee=Dt.group;Ot.layers.test(lt.layers)&&se(Ot,J,lt,Ht,Qt,ee)}}function se(N,J,lt,ct,st,bt){N.onBeforeRender(_,J,lt,ct,st,bt),N.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),st.onBeforeRender(_,J,lt,ct,N,bt),st.transparent===!0&&st.side===gn&&st.forceSinglePass===!1?(st.side=Sn,st.needsUpdate=!0,_.renderBufferDirect(lt,J,ct,st,N,bt),st.side=Li,st.needsUpdate=!0,_.renderBufferDirect(lt,J,ct,st,N,bt),st.side=gn):_.renderBufferDirect(lt,J,ct,st,N,bt),N.onAfterRender(_,J,lt,ct,st,bt)}function ve(N,J,lt){J.isScene!==!0&&(J=ot);const ct=yt.get(N),st=d.state.lights,bt=d.state.shadowsArray,Dt=st.state.version,Ot=Ft.getParameters(N,st.state,bt,J,lt),Ht=Ft.getProgramCacheKey(Ot);let Qt=ct.programs;ct.environment=N.isMeshStandardMaterial?J.environment:null,ct.fog=J.fog,ct.envMap=(N.isMeshStandardMaterial?et:I).get(N.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,Qt===void 0&&(N.addEventListener("dispose",ne),Qt=new Map,ct.programs=Qt);let ee=Qt.get(Ht);if(ee!==void 0){if(ct.currentProgram===ee&&ct.lightsStateVersion===Dt)return $e(N,Ot),ee}else Ot.uniforms=Ft.getUniforms(N),N.onBeforeCompile(Ot,_),ee=Ft.acquireProgram(Ot,Ht),Qt.set(Ht,ee),ct.uniforms=Ot.uniforms;const Kt=ct.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Kt.clippingPlanes=xt.uniform),$e(N,Ot),ct.needsLights=ln(N),ct.lightsStateVersion=Dt,ct.needsLights&&(Kt.ambientLightColor.value=st.state.ambient,Kt.lightProbe.value=st.state.probe,Kt.directionalLights.value=st.state.directional,Kt.directionalLightShadows.value=st.state.directionalShadow,Kt.spotLights.value=st.state.spot,Kt.spotLightShadows.value=st.state.spotShadow,Kt.rectAreaLights.value=st.state.rectArea,Kt.ltc_1.value=st.state.rectAreaLTC1,Kt.ltc_2.value=st.state.rectAreaLTC2,Kt.pointLights.value=st.state.point,Kt.pointLightShadows.value=st.state.pointShadow,Kt.hemisphereLights.value=st.state.hemi,Kt.directionalShadowMap.value=st.state.directionalShadowMap,Kt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Kt.spotShadowMap.value=st.state.spotShadowMap,Kt.spotLightMatrix.value=st.state.spotLightMatrix,Kt.spotLightMap.value=st.state.spotLightMap,Kt.pointShadowMap.value=st.state.pointShadowMap,Kt.pointShadowMatrix.value=st.state.pointShadowMatrix),ct.currentProgram=ee,ct.uniformsList=null,ee}function Ye(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=ea.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function $e(N,J){const lt=yt.get(N);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function on(N,J,lt,ct,st){J.isScene!==!0&&(J=ot),z.resetTextureUnits();const bt=J.fog,Dt=ct.isMeshStandardMaterial?J.environment:null,Ot=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ls,Ht=(ct.isMeshStandardMaterial?et:I).get(ct.envMap||Dt),Qt=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ee=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Kt=!!lt.morphAttributes.position,we=!!lt.morphAttributes.normal,Ee=!!lt.morphAttributes.color;let Ze=Ei;ct.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ze=_.toneMapping);const Ue=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,_e=Ue!==void 0?Ue.length:0,qt=yt.get(ct),Oe=d.state.lights;if(O===!0&&(it===!0||N!==x)){const Me=N===x&&ct.id===y;xt.setState(ct,N,Me)}let Se=!1;ct.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Oe.state.version||qt.outputColorSpace!==Ot||st.isBatchedMesh&&qt.batching===!1||!st.isBatchedMesh&&qt.batching===!0||st.isBatchedMesh&&qt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&qt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&qt.instancing===!1||!st.isInstancedMesh&&qt.instancing===!0||st.isSkinnedMesh&&qt.skinning===!1||!st.isSkinnedMesh&&qt.skinning===!0||st.isInstancedMesh&&qt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&qt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&qt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&qt.instancingMorph===!1&&st.morphTexture!==null||qt.envMap!==Ht||ct.fog===!0&&qt.fog!==bt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==xt.numPlanes||qt.numIntersection!==xt.numIntersection)||qt.vertexAlphas!==Qt||qt.vertexTangents!==ee||qt.morphTargets!==Kt||qt.morphNormals!==we||qt.morphColors!==Ee||qt.toneMapping!==Ze||qt.morphTargetsCount!==_e)&&(Se=!0):(Se=!0,qt.__version=ct.version);let De=qt.currentProgram;Se===!0&&(De=ve(ct,J,st));let Ni=!1,ht=!1,Et=!1;const At=De.getUniforms(),Xt=qt.uniforms;if(_t.useProgram(De.program)&&(Ni=!0,ht=!0,Et=!0),ct.id!==y&&(y=ct.id,ht=!0),Ni||x!==N){_t.buffers.depth.getReversed()?(nt.copy(N.projectionMatrix),Pd(nt),Rd(nt),At.setValue(U,"projectionMatrix",nt)):At.setValue(U,"projectionMatrix",N.projectionMatrix),At.setValue(U,"viewMatrix",N.matrixWorldInverse);const be=At.map.cameraPosition;be!==void 0&&be.setValue(U,Q.setFromMatrixPosition(N.matrixWorld)),pt.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&At.setValue(U,"isOrthographic",N.isOrthographicCamera===!0),x!==N&&(x=N,ht=!0,Et=!0)}if(st.isSkinnedMesh){At.setOptional(U,st,"bindMatrix"),At.setOptional(U,st,"bindMatrixInverse");const Me=st.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),At.setValue(U,"boneTexture",Me.boneTexture,z))}st.isBatchedMesh&&(At.setOptional(U,st,"batchingTexture"),At.setValue(U,"batchingTexture",st._matricesTexture,z),At.setOptional(U,st,"batchingIdTexture"),At.setValue(U,"batchingIdTexture",st._indirectTexture,z),At.setOptional(U,st,"batchingColorTexture"),st._colorsTexture!==null&&At.setValue(U,"batchingColorTexture",st._colorsTexture,z));const xe=lt.morphAttributes;if((xe.position!==void 0||xe.normal!==void 0||xe.color!==void 0)&&$t.update(st,lt,De),(ht||qt.receiveShadow!==st.receiveShadow)&&(qt.receiveShadow=st.receiveShadow,At.setValue(U,"receiveShadow",st.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Xt.envMap.value=Ht,Xt.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&J.environment!==null&&(Xt.envMapIntensity.value=J.environmentIntensity),ht&&(At.setValue(U,"toneMappingExposure",_.toneMappingExposure),qt.needsLights&&qe(Xt,Et),bt&&ct.fog===!0&&ut.refreshFogUniforms(Xt,bt),ut.refreshMaterialUniforms(Xt,ct,F,k,d.state.transmissionRenderTarget[N.id]),ea.upload(U,Ye(qt),Xt,z)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(ea.upload(U,Ye(qt),Xt,z),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&At.setValue(U,"center",st.center),At.setValue(U,"modelViewMatrix",st.modelViewMatrix),At.setValue(U,"normalMatrix",st.normalMatrix),At.setValue(U,"modelMatrix",st.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Me=ct.uniformsGroups;for(let be=0,je=Me.length;be<je;be++){const Ke=Me[be];K.update(Ke,De),K.bind(Ke,De)}}return De}function qe(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function ln(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(N,J,lt){yt.get(N.texture).__webglTexture=J,yt.get(N.depthTexture).__webglTexture=lt;const ct=yt.get(N);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=lt===void 0,ct.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,J){const lt=yt.get(N);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0};const Ge=U.createFramebuffer();this.setRenderTarget=function(N,J=0,lt=0){E=N,b=J,S=lt;let ct=!0,st=null,bt=!1,Dt=!1;if(N){const Ht=yt.get(N);if(Ht.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(U.FRAMEBUFFER,null),ct=!1;else if(Ht.__webglFramebuffer===void 0)z.setupRenderTarget(N);else if(Ht.__hasExternalTextures)z.rebindTextures(N,yt.get(N.texture).__webglTexture,yt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Kt=N.depthTexture;if(Ht.__boundDepthTexture!==Kt){if(Kt!==null&&yt.has(Kt)&&(N.width!==Kt.image.width||N.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(N)}}const Qt=N.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Dt=!0);const ee=yt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ee[J])?st=ee[J][lt]:st=ee[J],bt=!0):N.samples>0&&z.useMultisampledRTT(N)===!1?st=yt.get(N).__webglMultisampledFramebuffer:Array.isArray(ee)?st=ee[lt]:st=ee,P.copy(N.viewport),C.copy(N.scissor),R=N.scissorTest}else P.copy(Y).multiplyScalar(F).floor(),C.copy(j).multiplyScalar(F).floor(),R=W;if(lt!==0&&(st=Ge),_t.bindFramebuffer(U.FRAMEBUFFER,st)&&ct&&_t.drawBuffers(N,st),_t.viewport(P),_t.scissor(C),_t.setScissorTest(R),bt){const Ht=yt.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ht.__webglTexture,lt)}else if(Dt){const Ht=yt.get(N.texture),Qt=J;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ht.__webglTexture,lt,Qt)}else if(N!==null&&lt!==0){const Ht=yt.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ht.__webglTexture,lt)}y=-1},this.readRenderTargetPixels=function(N,J,lt,ct,st,bt,Dt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){_t.bindFramebuffer(U.FRAMEBUFFER,Ot);try{const Ht=N.texture,Qt=Ht.format,ee=Ht.type;if(!pt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-ct&&lt>=0&&lt<=N.height-st&&U.readPixels(J,lt,ct,st,te.convert(Qt),te.convert(ee),bt)}finally{const Ht=E!==null?yt.get(E).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(N,J,lt,ct,st,bt,Dt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){const Ht=N.texture,Qt=Ht.format,ee=Ht.type;if(!pt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=N.width-ct&&lt>=0&&lt<=N.height-st){_t.bindFramebuffer(U.FRAMEBUFFER,Ot);const Kt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Kt),U.bufferData(U.PIXEL_PACK_BUFFER,bt.byteLength,U.STREAM_READ),U.readPixels(J,lt,ct,st,te.convert(Qt),te.convert(ee),0);const we=E!==null?yt.get(E).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,we);const Ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cd(U,Ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Kt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,bt),U.deleteBuffer(Kt),U.deleteSync(Ee),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,J=null,lt=0){N.isTexture!==!0&&(Xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,N=arguments[1]);const ct=Math.pow(2,-lt),st=Math.floor(N.image.width*ct),bt=Math.floor(N.image.height*ct),Dt=J!==null?J.x:0,Ot=J!==null?J.y:0;z.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,lt,0,0,Dt,Ot,st,bt),_t.unbindTexture()};const Le=U.createFramebuffer(),en=U.createFramebuffer();this.copyTextureToTexture=function(N,J,lt=null,ct=null,st=0,bt=null){N.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,N=arguments[1],J=arguments[2],bt=arguments[3]||0,lt=null),bt===null&&(st!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=st,st=0):bt=0);let Dt,Ot,Ht,Qt,ee,Kt,we,Ee,Ze;const Ue=N.isCompressedTexture?N.mipmaps[bt]:N.image;if(lt!==null)Dt=lt.max.x-lt.min.x,Ot=lt.max.y-lt.min.y,Ht=lt.isBox3?lt.max.z-lt.min.z:1,Qt=lt.min.x,ee=lt.min.y,Kt=lt.isBox3?lt.min.z:0;else{const xe=Math.pow(2,-st);Dt=Math.floor(Ue.width*xe),Ot=Math.floor(Ue.height*xe),N.isDataArrayTexture?Ht=Ue.depth:N.isData3DTexture?Ht=Math.floor(Ue.depth*xe):Ht=1,Qt=0,ee=0,Kt=0}ct!==null?(we=ct.x,Ee=ct.y,Ze=ct.z):(we=0,Ee=0,Ze=0);const _e=te.convert(J.format),qt=te.convert(J.type);let Oe;J.isData3DTexture?(z.setTexture3D(J,0),Oe=U.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(z.setTexture2DArray(J,0),Oe=U.TEXTURE_2D_ARRAY):(z.setTexture2D(J,0),Oe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment);const Se=U.getParameter(U.UNPACK_ROW_LENGTH),De=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ni=U.getParameter(U.UNPACK_SKIP_PIXELS),ht=U.getParameter(U.UNPACK_SKIP_ROWS),Et=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ue.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ue.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Qt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ee),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt);const At=N.isDataArrayTexture||N.isData3DTexture,Xt=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const xe=yt.get(N),Me=yt.get(J),be=yt.get(xe.__renderTarget),je=yt.get(Me.__renderTarget);_t.bindFramebuffer(U.READ_FRAMEBUFFER,be.__webglFramebuffer),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ke=0;Ke<Ht;Ke++)At&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(N).__webglTexture,st,Kt+Ke),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(J).__webglTexture,bt,Ze+Ke)),U.blitFramebuffer(Qt,ee,Dt,Ot,we,Ee,Dt,Ot,U.DEPTH_BUFFER_BIT,U.NEAREST);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(st!==0||N.isRenderTargetTexture||yt.has(N)){const xe=yt.get(N),Me=yt.get(J);_t.bindFramebuffer(U.READ_FRAMEBUFFER,Le),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,en);for(let be=0;be<Ht;be++)At?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.__webglTexture,st,Kt+be):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,st),Xt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.__webglTexture,bt,Ze+be):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,bt),st!==0?U.blitFramebuffer(Qt,ee,Dt,Ot,we,Ee,Dt,Ot,U.COLOR_BUFFER_BIT,U.NEAREST):Xt?U.copyTexSubImage3D(Oe,bt,we,Ee,Ze+be,Qt,ee,Dt,Ot):U.copyTexSubImage2D(Oe,bt,we,Ee,Qt,ee,Dt,Ot);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Xt?N.isDataTexture||N.isData3DTexture?U.texSubImage3D(Oe,bt,we,Ee,Ze,Dt,Ot,Ht,_e,qt,Ue.data):J.isCompressedArrayTexture?U.compressedTexSubImage3D(Oe,bt,we,Ee,Ze,Dt,Ot,Ht,_e,Ue.data):U.texSubImage3D(Oe,bt,we,Ee,Ze,Dt,Ot,Ht,_e,qt,Ue):N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,bt,we,Ee,Dt,Ot,_e,qt,Ue.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,bt,we,Ee,Ue.width,Ue.height,_e,Ue.data):U.texSubImage2D(U.TEXTURE_2D,bt,we,Ee,Dt,Ot,_e,qt,Ue);U.pixelStorei(U.UNPACK_ROW_LENGTH,Se),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,De),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ni),U.pixelStorei(U.UNPACK_SKIP_ROWS,ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Et),bt===0&&J.generateMipmaps&&U.generateMipmap(Oe),_t.unbindTexture()},this.copyTextureToTexture3D=function(N,J,lt=null,ct=null,st=0){return N.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),lt=arguments[0]||null,ct=arguments[1]||null,N=arguments[2],J=arguments[3],st=arguments[4]||0),Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,J,lt,ct,st)},this.initRenderTarget=function(N){yt.get(N).__webglFramebuffer===void 0&&z.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?z.setTextureCube(N,0):N.isData3DTexture?z.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?z.setTexture2DArray(N,0):z.setTexture2D(N,0),_t.unbindTexture()},this.resetState=function(){b=0,S=0,E=null,_t.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}const Xc={type:"change"},El={type:"start"},iu={type:"end"},Go=new co,Yc=new Mi,c1=Math.cos(70*$.DEG2RAD),cn=new T,An=2*Math.PI,Ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ar=1e-6;class h1 extends Sp{constructor(t,e=null){super(t,e),this.state=Ne.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new nn,this._lastTargetPosition=new T,this._quat=new nn().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mc,this._sphericalDelta=new Mc,this._scale=1,this._panOffset=new T,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new T,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d1.bind(this),this._onPointerDown=u1.bind(this),this._onPointerUp=p1.bind(this),this._onContextMenu=M1.bind(this),this._onMouseWheel=g1.bind(this),this._onKeyDown=v1.bind(this),this._onTouchStart=_1.bind(this),this._onTouchMove=x1.bind(this),this._onMouseDown=f1.bind(this),this._onMouseMove=m1.bind(this),this._interceptControlDown=w1.bind(this),this._interceptControlUp=y1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xc),this.update(),this.state=Ne.NONE}update(t=null){const e=this.object.position;cn.copy(e).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=An:n>Math.PI&&(n-=An),s<-Math.PI?s+=An:s>Math.PI&&(s-=An),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),e.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=cn.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new T(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Go.origin.copy(this.object.position),Go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Go.direction))<c1?this.object.lookAt(this.target):(Yc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Go.intersectPlane(Yc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ar||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ar||this._lastTargetPosition.distanceToSquared(this.target)>ar?(this.dispatchEvent(Xc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?An/60*this.autoRotateSpeed*t:An/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){cn.setFromMatrixColumn(e,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,e){this.screenSpacePanning===!0?cn.setFromMatrixColumn(e,1):(cn.setFromMatrixColumn(e,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;cn.copy(s).sub(this.target);let o=cn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,a=n.width,r=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function u1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function d1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function p1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(iu),this.state=Ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function f1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ne.DOLLY;break;case ws.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ne.ROTATE}break;case ws.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ne.PAN}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(El)}function m1(i){switch(this.state){case Ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function g1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ne.NONE||(i.preventDefault(),this.dispatchEvent(El),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(iu))}function v1(i){this.enabled!==!1&&this._handleKeyDown(i)}function _1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ne.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ne.TOUCH_PAN;break;default:this.state=Ne.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ne.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ne.TOUCH_DOLLY_ROTATE;break;default:this.state=Ne.NONE}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(El)}function x1(i){switch(this._trackPointer(i),this.state){case Ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ne.NONE}}function M1(i){this.enabled!==!1&&i.preventDefault()}function w1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const su={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Os{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const b1=new yl(-1,1,1,-1,0,1);class S1 extends Gt{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const A1=new S1;class Tl{constructor(t){this._mesh=new Fe(A1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,b1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class E1 extends Os{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof tn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ro.clone(t.uniforms),this.material=new tn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Tl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $c extends Os{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class T1 extends Os{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class C1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new zt);this._width=n.width,this._height=n.height,e=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new E1(su),this.copyPass.material.blending=li,this.clock=new Kh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}$c!==void 0&&(a instanceof $c?n=!0:a instanceof T1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new zt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class P1 extends Os{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const R1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Fs extends Os{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new zt(t.x,t.y):new zt(256,256),this.clearColor=new Lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kn(o,a,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const p=new kn(o,a,{type:Kn});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const f=new kn(o,a,{type:Kn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),a=Math.round(a/2)}const r=R1;this.highPassUniforms=ro.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new zt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=su;this.copyUniforms=ro.clone(h.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ia,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Lt,this.oldClearAlpha=1,this.basic=new ao,this.fsQuad=new Tl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new zt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new tn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new zt(.5,.5)},direction:{value:new zt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new tn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Fs.BlurDirectionX=new zt(1,0);Fs.BlurDirectionY=new zt(0,1);const L1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class I1 extends Os{constructor(){super();const t=L1;this.uniforms=ro.clone(t.uniforms),this.material=new rp({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Tl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ae.getTransfer(this._outputColorSpace)===Ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===al?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Sh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function ou(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function qc(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Ns(i){const t=Math.max(0,Math.min(1,(i-1.54)/.6949999999999998)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.8)/.2),2))),n=.056*qc(t,.38,.24),s=-.042*ou(.54,.88,t),o=.016*qc(t,.78,.13);return(.228+n+s+o)*e}function Ci(i){const t=Math.max(0,Math.min(1,(i-1.66)/.575)),e=.02*Math.pow(1-ou(0,.42,t),1.6),n=-.01*Math.sin(t*Math.PI);return 1.578+e+n}const ji=[{rootX:.024,rootY:.126,rootZ:-3.6,tipX:.34,tipY:.142,tipZ:-3.72},{rootX:.024,rootY:.126,rootZ:-3.78,tipX:.49,tipY:.148,tipZ:-3.96},{rootX:.024,rootY:.126,rootZ:-3.96,tipX:.55,tipY:.152,tipZ:-4.22},{rootX:.024,rootY:.126,rootZ:-4.14,tipX:.46,tipY:.146,tipZ:-4.45},{rootX:.024,rootY:.126,rootZ:-4.3,tipX:.27,tipY:.138,tipZ:-4.58}],ua=[{parentBone:"tail_1",rootX:.18,rootY:.75,rootZ:-.84,tipX:.44,tipY:.72,tipZ:-.98},{parentBone:"tail_2",rootX:.15,rootY:.67,rootZ:-1.1,tipX:.5,tipY:.63,tipZ:-1.27},{parentBone:"tail_2",rootX:.12,rootY:.59,rootZ:-1.34,tipX:.37,tipY:.56,tipZ:-1.52}],uo=new T(.435,.03,.8999).normalize(),po=new T(-.435,.03,.8999).normalize(),da=.082;function au(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.342:.318),o=t?1.005:-.555,a=.04,r=t?.088:.082,l=[],c=[-.88,-.29,.29,.88];for(let h=0;h<4;h++){const u=c[h]+e*.055,p=h===1||h===2,f=(t?.126:.118)*(p?1:.86),g=(t?.066:.062)*(p?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.036,dirX:Math.sin(u)*.92,dirZ:Math.cos(u),toeLength:f,baseRadius:p?.044:.039,tipRadius:p?.029:.0255,clawLength:g})}return l}function D1(){const i=[{name:"root",parent:null,worldPos:[0,.86,.12]},{name:"pelvis",parent:"root",worldPos:[0,.83,-.54]},{name:"spine_1",parent:"root",worldPos:[0,.85,.14]},{name:"spine_2",parent:"spine_1",worldPos:[0,.91,.5]},{name:"chest",parent:"spine_2",worldPos:[0,.98,.86]},{name:"neck_1",parent:"chest",worldPos:[0,1.11,1.08]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.27,1.24]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.44,1.39]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.56,1.51]},{name:"head",parent:"neck_4",worldPos:[0,1.63,1.62]},{name:"eye_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eye_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidUpper_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidLower_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidLower_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"teethUpper",parent:"head",worldPos:[0,1.592,1.95]},{name:"jaw",parent:"head",worldPos:[0,1.588,1.66]},{name:"teethLower",parent:"jaw",worldPos:[0,1.568,1.95]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.568,1.74]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.568,1.85]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.568,1.96]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.566,2.07]},{name:"ear_L_1",parent:"head",worldPos:[.158,1.772,1.57]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.208,1.895,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.246,2.005,1.19]},{name:"ear_R_1",parent:"head",worldPos:[-.158,1.772,1.57]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.208,1.895,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.246,2.005,1.19]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.268,1.648,1.58]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.348,1.68,1.43]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.268,1.648,1.58]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.348,1.68,1.43]},{name:"cheekLower_L_1",parent:"head",worldPos:[.252,1.552,1.61]},{name:"cheekLower_L_2",parent:"cheekLower_L_1",worldPos:[.312,1.562,1.48]},{name:"cheekLower_R_1",parent:"head",worldPos:[-.252,1.552,1.61]},{name:"cheekLower_R_2",parent:"cheekLower_R_1",worldPos:[-.312,1.562,1.48]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.235,.94,.88]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.272,.8,.9]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.325,.47,.8]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.338,.155,.94]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.342,.044,1.045]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.222,.77,-.55]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.295,.46,-.34]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.312,.23,-.66]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.318,.044,-.515]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.23,1.11,.78]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.38,1.15,.76]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.96,1.18,.5]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.72,1.24,.96]}),[{mid:[n*1.62,1.16,.18],tip:[n*1.54,1.06,-.66]},{mid:[n*2.02,1.17,.24],tip:[n*2.24,1.07,-.62]},{mid:[n*2.38,1.19,.36],tip:[n*2.88,1.09,-.44]},{mid:[n*2.72,1.21,.52],tip:[n*3.44,1.12,-.16]},{mid:[n*3.04,1.23,.74],tip:[n*3.88,1.16,.24]},{mid:[n*3.22,1.25,.94],tip:[n*4.28,1.2,.76]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.78,-.82],[0,.68,-1.16],[0,.54,-1.54],[0,.39,-1.94],[0,.26,-2.35],[0,.17,-2.76],[0,.13,-3.18],[0,.126,-3.58],[0,.126,-3.98],[0,.126,-4.42]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;ua.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.024,.126,-3.96]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.024,.126,-3.96]}),ji.forEach((e,n)=>{i.push({name:`tailFin_R_${n+1}`,parent:"tailFinHinge_R",worldPos:[-e.rootX,e.rootY,e.rootZ]})}),i.push({name:"prostheticCollar",parent:"tail_8",worldPos:[.024,.128,-3.54]},{name:"prostheticRod",parent:"tail_9",worldPos:[.036,.138,-3.96]}),ji.forEach((e,n)=>{i.push({name:`tailFin_L_${n+1}`,parent:"tailFinHinge_L",worldPos:[e.rootX,e.rootY,e.rootZ]})}),i}function F1(){const i=D1(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new vl;c.name=l.name;const h=new T(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),p=s.get(l.parent);if(!u||!p)throw new Error(`Missing parent bone ${l.parent} for ${l.name}`);c.position.copy(h).sub(p),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new xa(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}function N1(i,t,e){let n=i*374761393+t*668265263+e*1442695041|0;n=(n^n>>>13)*1274126177;const s=((n^n>>>16)>>>0)/4294967296;let o=i*1103515245+t*12345+(e+7919)*2654435761|0;o=(o^o>>>15)*2246822519;const a=((o^o>>>13)>>>0)/4294967296;let r=i*73856093+t*19349663+(e+31337)*83492791|0;r=(r^r>>>14)*1597334677;const l=((r^r>>>15)>>>0)/4294967296;return[s,a,l]}function Xo(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function rr(i,t,e,n,s,o=1){const a=i*e,r=t*n,l=Math.floor(a),c=Math.floor(r);let h=1e9,u=1e9,p=.5,f=0,g=0,v=0;for(let M=-1;M<=1;M++)for(let w=-1;w<=1;w++){const _=l+w,A=c+M,b=(_%e+e)%e,S=(A%n+n)%n,[E,y,x]=N1(b,S,s),P=_+.14+E*.72,C=A+.14+y*.72,R=(P-a)*o,L=C-r,D=Math.sqrt(R*R+L*L);D<h?(u=h,h=D,p=x,f=(E-.5)*Math.PI,g=R,v=L):D<u&&(u=D)}const m=Math.max(0,(u-h)*.5),d=g*Math.cos(f)+v*Math.sin(f);return{edgeDist:m,centerDist:h,cellTone:p,cellAngle:d}}let Yo=null;function U1(i=1024){if(Yo)return Yo;const t=i,e=new Float32Array(t*t),n=new Float32Array(t*t),s=new Float32Array(t*t),o=new Float32Array(t*t),a=new Float32Array(t*t),r=28,l=76;for(let F=0;F<t;F++){const H=F/t;for(let V=0;V<t;V++){const Y=V/t,j=F*t+V,W=rr(Y,H,r,r,101,1.08),X=rr(Y,H,l,l,409,1),O=Xo(.015,.24,W.edgeDist),it=Xo(.02,.28,X.edgeDist),nt=Math.sin((Y*135+H*47+W.cellTone*6.28)*Math.PI*2)*Math.sin((Y*29-H*113+W.cellTone*3.14)*Math.PI*2),Z=nt>.86?-.055*(nt-.86)*7:0,Q=Math.max(-.08,Math.min(.08,W.cellAngle*.11))*O,G=O*(.76+.14*W.cellTone)+it*.22*(1-O*.55)+Q+Z*O;e[j]=Math.max(0,Math.min(1,G));const ot=1-O,gt=.3+.09*(1-W.cellTone)+ot*.52+(1-it)*.08-Z*.4;n[j]=Math.max(.18,Math.min(.95,gt));const tt=.24+.76*Xo(0,.16,W.edgeDist)*(.85+.15*it);s[j]=Math.max(.15,Math.min(1,tt)),o[j]=W.cellTone*.7+X.cellTone*.3,a[j]=Math.max(0,Math.min(1,.32+.58*W.cellTone*O+.1*it))}}const c=document.createElement("canvas"),h=document.createElement("canvas"),u=document.createElement("canvas"),p=document.createElement("canvas"),f=document.createElement("canvas");for(const F of[c,h,u,p,f])F.width=t,F.height=t;const g=c.getContext("2d"),v=h.getContext("2d"),m=u.getContext("2d"),d=p.getContext("2d"),M=f.getContext("2d"),w=g.createImageData(t,t),_=v.createImageData(t,t),A=m.createImageData(t,t),b=d.createImageData(t,t),S=M.createImageData(t,t),E=3.6;for(let F=0;F<t;F++){const H=(F-1+t)%t,V=(F+1)%t;for(let Y=0;Y<t;Y++){const j=(Y-1+t)%t,W=(Y+1)%t,X=F*t+Y,O=X*4,it=e[H*t+j],nt=e[H*t+Y],Z=e[H*t+W],Q=e[F*t+j],G=e[F*t+W],ot=e[V*t+j],gt=e[V*t+Y],tt=e[V*t+W],U=(Z+3*G+tt-(it+3*Q+ot))*E,Mt=(ot+3*gt+tt-(it+3*nt+Z))*E;let at=-U,pt=-Mt,_t=1;const It=1/Math.sqrt(at*at+pt*pt+_t*_t);at*=It,pt*=It,_t*=It,_.data[O]=Math.round((at*.5+.5)*255),_.data[O+1]=Math.round((pt*.5+.5)*255),_.data[O+2]=Math.round((_t*.5+.5)*255),_.data[O+3]=255;const yt=e[X],z=o[X],I=12+yt*15+z*8;w.data[O]=Math.round(I*.86),w.data[O+1]=Math.round(I*.96),w.data[O+2]=Math.round(I*1.14),w.data[O+3]=255;const et=Math.round(n[X]*255);A.data[O]=et,A.data[O+1]=et,A.data[O+2]=et,A.data[O+3]=255;const dt=Math.round(s[X]*255);b.data[O]=dt,b.data[O+1]=dt,b.data[O+2]=dt,b.data[O+3]=255;const vt=Math.round(a[X]*255);S.data[O]=vt,S.data[O+1]=vt,S.data[O+2]=vt,S.data[O+3]=255}}g.putImageData(w,0,0),v.putImageData(_,0,0),m.putImageData(A,0,0),d.putImageData(b,0,0),M.putImageData(S,0,0);const y=(F,H=!1,V=7)=>(F.wrapS=Qn,F.wrapT=Qn,F.repeat.set(V,V),F.anisotropy=8,F.colorSpace=H?mn:Un,F.needsUpdate=!0,F),x=512,P=document.createElement("canvas"),C=document.createElement("canvas");P.width=x,P.height=x,C.width=x,C.height=x;const R=P.getContext("2d"),L=C.getContext("2d"),D=R.createImageData(x,x),B=L.createImageData(x,x),k=new Float32Array(x*x);for(let F=0;F<x;F++){const H=F/x;for(let V=0;V<x;V++){const Y=V/x,j=F*x+V,W=Math.sin(H*92*Math.PI*2+Math.sin(Y*9*Math.PI*2)*1.4)*.25+Math.sin(H*210*Math.PI*2+Y*18)*.12,X=rr(Y,H,44,44,887,1),O=Xo(.08,.22,X.edgeDist)*(X.cellTone>.45?.55:.15);k[j]=.5+W*.35+O*.4}}for(let F=0;F<x;F++){const H=(F-1+x)%x,V=(F+1)%x;for(let Y=0;Y<x;Y++){const j=(Y-1+x)%x,W=(Y+1)%x,X=F*x+Y,O=X*4,it=(k[F*x+W]-k[F*x+j])*2.4,nt=(k[V*x+Y]-k[H*x+Y])*2.4,Z=1/Math.sqrt(it*it+nt*nt+1);D.data[O]=Math.round((-it*Z*.5+.5)*255),D.data[O+1]=Math.round((-nt*Z*.5+.5)*255),D.data[O+2]=Math.round((Z*.5+.5)*255),D.data[O+3]=255;const Q=Math.round((.36+(1-k[X])*.28)*255);B.data[O]=Q,B.data[O+1]=Q,B.data[O+2]=Q,B.data[O+3]=255}}return R.putImageData(D,0,0),L.putImageData(B,0,0),Yo={albedoMap:y(new yn(c),!0,7),normalMap:y(new yn(h),!1,7),roughnessMap:y(new yn(u),!1,7),aoMap:y(new yn(p),!1,7),iridescenceThicknessMap:y(new yn(f),!1,7),prostheticPasteNormalMap:y(new yn(P),!1,3),prostheticPasteRoughnessMap:y(new yn(C),!1,3)},Yo}let Wi=null;function k1(i=1024){if(Wi)return Wi;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=8,n.data[u+1]=12,n.data[u+2]=11,n.data[u+3]=255;continue}const p=Math.sin(h*68+Math.sin(c*11)*.65),f=Math.sin(h*142-Math.cos(c*19)*.85),g=Math.sin(h*260+c*24),v=Math.sin(h*23+1.4)*Math.cos(c*15-h*5),m=p*.42+f*.33+g*.15+v*.25,d=Math.sin(c*42+p*.6)*.08,M=Math.exp(-Math.pow((c-.38)/.13,2)),w=Math.max(0,Math.min(1,(.94-c)/.16)),_=Math.max(0,Math.min(1,1-c*1.08)),A=.84+.3*m+d;let b=(38+166*_+66*M)*A*w,S=(146+106*_+34*M)*A*w,E=(64-24*_+22*(1-_))*A*w;if(v<-.58&&c>.25&&c<.78){const y=Math.min(1,(-v-.58)*2.2);b*=1-.42*y,S*=1-.34*y,E*=1-.28*y}n.data[u]=Math.max(0,Math.min(255,Math.round(b))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(S))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(E))),n.data[u+3]=255}}return e.putImageData(n,0,0),Wi=new yn(t),Wi.colorSpace=mn,Wi.anisotropy=8,Wi.needsUpdate=!0,Wi}function B1(){const i=k1(1024),t={uPupilDilation:{value:.76},uLightDir:{value:new T(.45,.65,.6).normalize()},uAlphaGlow:{value:0}},e=new Ti({name:"Toothless_Iris_PBR",map:i,roughness:.55,metalness:0,envMapIntensity:.65});e.onBeforeCompile=s=>{s.uniforms.uPupilDilation=t.uPupilDilation,s.uniforms.uLightDir=t.uLightDir,s.uniforms.uAlphaGlow=t.uAlphaGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.34 + uAlphaGlow * 0.92) * eRadial;`)};const n=new bn({name:"Toothless_Cornea_WetCoat",color:new Lt(16777215),transparent:!0,opacity:.14,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function lr(i,t,e){i.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uAlphaGlow=t.uAlphaGlow,n.uniforms.uBiolumGlow=t.uBiolumGlow,n.uniforms.uLightningCloak=t.uLightningCloak,n.uniforms.uSunDir=t.uSunDir,n.uniforms.uSunColor=t.uSunColor,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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

        // 3D Cellular Voronoi evaluator for large, sculpted Night Fury armor plates on distal legs, feet, brows & snout!
        // Returns vec4(domeHeight, gradX, gradY, gradZ) in object space.
        vec4 evalMacroArmorPlate3D(vec3 p) {
          vec3 sp = p * 34.0; // ~2.9 cm bold reptilian shield scutes!
          vec3 ip = floor(sp);
          vec3 fp = fract(sp);
          float d1 = 8.0;
          float d2 = 8.0;
          vec3 nearestVec = vec3(0.0);
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
                  nearestVec = r;
                } else if (d < d2) {
                  d2 = d;
                }
              }
            }
          }
          float border = clamp((d2 - d1) / 0.28, 0.0, 1.0);
          float dome = smoothstep(0.0, 0.42, border) * (1.0 - 0.32 * d1 * d1);
          vec3 outGrad = -normalize(nearestVec + vec3(1e-5)) * (1.0 - smoothstep(0.0, 0.58, d1)) * smoothstep(0.02, 0.35, border);
          return vec4(dome, outGrad);
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        // Three-tier scale hierarchy: fine pebble hide (0..1) -> bold, large 3D Voronoi armor plates (1..2) on distal legs, feet & head!
        float macroWeight = clamp(vAnatomyData.x, 0.0, 1.0);
        float plateArmor = clamp(vAnatomyData.x - 1.0, 0.0, 1.0);
        float scarWeight = clamp(vAnatomyData.y, 0.0, 1.0);
        float thinness = clamp(vAnatomyData.w, 0.0, 1.0);

        #ifdef USE_MAP
          vec4 fineAlbedo = texture2D(map, vMapUv * 2.85);
          diffuseColor.rgb = mix(fineAlbedo.rgb * 0.92, diffuseColor.rgb * 1.12, macroWeight);
        #endif

        if (plateArmor > 0.01 && !${e?"true":"false"}) {
          vec4 plate = evalMacroArmorPlate3D(vObjPos);
          // Deep obsidian-charcoal interstitial groove + slightly brighter slate-sheen crown on large scutes!
          vec3 plateCrown = diffuseColor.rgb * 1.48 + vec3(0.018, 0.022, 0.028);
          vec3 plateGroove = diffuseColor.rgb * 0.22;
          diffuseColor.rgb = mix(diffuseColor.rgb, mix(plateGroove, plateCrown, plate.x), plateArmor * 0.92);
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
        float macroRWeight = clamp(vAnatomyData.x, 0.0, 1.0);
        float plateRArmor = clamp(vAnatomyData.x - 1.0, 0.0, 1.0);
        float scarRWeight = clamp(vAnatomyData.y, 0.0, 1.0);
        #ifdef USE_ROUGHNESSMAP
          float fineRough = texture2D(roughnessMap, vRoughnessMapUv * 2.85).g;
          roughnessFactor = mix(fineRough * 1.06, roughnessFactor * 0.84, macroRWeight);
        #endif
        if (plateRArmor > 0.01 && !${e?"true":"false"}) {
          vec4 plateR = evalMacroArmorPlate3D(vObjPos);
          // Glossy keratin-shield scute crowns (0.22) vs matte crevices (0.78) so individual large plates catch crisp rim light!
          roughnessFactor = mix(roughnessFactor, mix(0.78, 0.22, plateR.x), plateRArmor * 0.88);
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
          float mScaleW = clamp(vAnatomyData.x, 0.0, 1.0);
          float plateNW = clamp(vAnatomyData.x - 1.0, 0.0, 1.0);
          float scarW = clamp(vAnatomyData.y, 0.0, 1.0);
          vec3 blendedMapN = normalize(mix(
            vec3(mapNFine.xy * 0.82, max(mapNFine.z, 0.15)),
            vec3(mapNMacro.xy * 1.45, max(mapNMacro.z, 0.15)),
            mScaleW
          ));
          blendedMapN.xy *= (1.0 - scarW * 0.72);
          blendedMapN.xy *= normalScale * (1.0 - plateNW * 0.55);
          vec3 tbnN = tbn * blendedMapN;
          normal = dot(tbnN, tbnN) > 1e-8 ? normalize(tbnN) : normal;
          if (plateNW > 0.01 && !${e?"true":"false"}) {
            vec4 plateN = evalMacroArmorPlate3D(vObjPos);
            float plateBumpH = plateN.x * plateNW * 0.020 * (1.0 - scarW * 0.8);
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function z1(){const i=U1(1024),t=B1(),e={uTime:{value:0},uAlphaGlow:{value:.08},uBiolumGlow:{value:0},uLightningCloak:{value:0},uSunDir:{value:new T(-.55,.38,-.74).normalize()},uSunColor:{value:new Lt(16765601)}},n=new bn({name:"Toothless_ObsidianScales_PBR",color:new Lt(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new zt(1.28,1.28),roughnessMap:i.roughnessMap,roughness:.88,aoMap:i.aoMap,aoMapIntensity:.88,metalness:.05,iridescence:.62,iridescenceIOR:1.4,iridescenceThicknessRange:[260,470],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.34,clearcoatRoughness:.3,sheen:.44,sheenRoughness:.48,sheenColor:new Lt(2178905),envMapIntensity:1.48});lr(n,e,!1);const s=new bn({name:"Toothless_PatagiumMembrane_PBR",color:new Lt(15660282),map:i.albedoMap,normalMap:i.normalMap,normalScale:new zt(.65,.65),roughnessMap:i.roughnessMap,roughness:.96,aoMap:i.aoMap,aoMapIntensity:.65,metalness:.02,iridescence:.38,iridescenceIOR:1.36,iridescenceThicknessRange:[250,430],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.18,clearcoatRoughness:.44,sheen:.42,sheenRoughness:.58,sheenColor:new Lt(1977920),side:gn,envMapIntensity:1.25});lr(s,e,!0);const o=new bn({name:"Toothless_ProstheticScalePaste_PBR",color:new Lt(1185308),normalMap:i.prostheticPasteNormalMap,normalScale:new zt(.95,.95),roughnessMap:i.prostheticPasteRoughnessMap,roughness:.46,metalness:.14,iridescence:.46,iridescenceIOR:1.4,iridescenceThicknessRange:[270,440],clearcoat:.42,clearcoatRoughness:.28,side:gn,envMapIntensity:1.35});lr(o,e,!1);const a=new Ti({name:"Toothless_VikingBronze_PBR",color:new Lt(12094282),metalness:.88,roughness:.33,envMapIntensity:1.45}),r=new Ti({name:"Toothless_ForgedIron_PBR",color:new Lt(2632754),metalness:.82,roughness:.42,envMapIntensity:1.3}),l=new bn({name:"Toothless_ObsidianClaws_PBR",color:new Lt(1316636),roughness:.24,metalness:.08,clearcoat:.65,clearcoatRoughness:.2,envMapIntensity:1.5}),c=new bn({name:"Toothless_RetractableTeeth_PBR",color:new Lt(15394524),roughness:.16,metalness:0,clearcoat:.85,clearcoatRoughness:.08,sheen:.2,sheenColor:new Lt(14018293),envMapIntensity:1.2}),h=new bn({name:"Toothless_OralGums_PBR",color:new Lt(2628390),normalMap:i.normalMap,normalScale:new zt(.58,.58),roughnessMap:i.roughnessMap,roughness:.42,metalness:0,clearcoat:.68,clearcoatRoughness:.18,side:gn});h.onBeforeCompile=p=>{p.uniforms.uAlphaGlow=e.uAlphaGlow,p.uniforms.uTime=e.uTime,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aAnatomyData;
        varying vec4 vAnatomyData;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vAnatomyData = aAnatomyData;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uAlphaGlow;
        uniform float uTime;
        varying vec4 vAnatomyData;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (uAlphaGlow > 0.001) {
          float throatFire = clamp(vAnatomyData.z, 0.0, 1.0);
          float pulse = 0.84 + 0.16 * sin(uTime * 5.2);
          totalEmissiveRadiance += vec3(0.12, 0.68, 1.5) * throatFire * uAlphaGlow * 2.8 * pulse;
        }`)};const u=new bn({name:"Toothless_Tongue_PBR",color:new Lt(7880269),normalMap:i.normalMap,normalScale:new zt(.68,.68),roughnessMap:i.roughnessMap,roughness:.36,metalness:0,clearcoat:.8,clearcoatRoughness:.14,sheen:.38,sheenColor:new Lt(10904693)});return{maps:i,skinMaterial:n,wingMembraneMaterial:s,prostheticPasteMaterial:o,prostheticBronzeMaterial:a,prostheticIronMaterial:r,clawMaterial:l,teethMaterial:c,oralGumMaterial:h,tongueMaterial:u,eyeMaterials:t,uniforms:e}}function Ve(i){let t=0,e=0;for(const f of i){const g=f.getAttribute("position");t+=g.count;const v=f.getIndex();e+=v?v.count:g.count}const n=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Float32Array(t*4),r=new Uint16Array(t*4),l=new Float32Array(t*4),c=t>65535?new Uint32Array(e):new Uint16Array(e);let h=0,u=0;for(const f of i){const g=f.getAttribute("position"),v=f.getAttribute("normal"),m=f.getAttribute("uv"),d=f.getAttribute("aAnatomyData"),M=f.getAttribute("skinIndex"),w=f.getAttribute("skinWeight"),_=g.count;if(n.set(g.array,h*3),v&&s.set(v.array,h*3),m&&o.set(m.array,h*2),d)a.set(d.array,h*4);else for(let b=0;b<_;b++)a[(h+b)*4]=.35;if(M&&w)for(let b=0;b<_*4;b++)r[h*4+b]=M.array[b],l[h*4+b]=w.array[b];const A=f.getIndex();if(A){for(let b=0;b<A.count;b++)c[u+b]=A.getX(b)+h;u+=A.count}else{for(let b=0;b<_;b++)c[u+b]=h+b;u+=_}h+=_}const p=new Gt;return p.setAttribute("position",new q(n,3)),p.setAttribute("normal",new q(s,3)),p.setAttribute("uv",new q(o,2)),p.setAttribute("uv1",new q(o,2)),p.setAttribute("aAnatomyData",new q(a,4)),p.setAttribute("skinIndex",new me(r,4)),p.setAttribute("skinWeight",new Yt(l,4)),p.setIndex(new q(c,1)),p.computeBoundingSphere(),p.computeBoundingBox(),p}function Be(i,t){const e=t[0]+t[1]+t[2]+t[3];if(e<=1e-6)return{indices:[i[0],0,0,0],weights:[1,0,0,0]};const n=1/e;return{indices:i,weights:[t[0]*n,t[1]*n,t[2]*n,t[3]*n]}}function Zn(i,t,e,n=3.2){const s=[];for(let a=0;a<t.length;a++){const r=e[a];let l=i.distanceTo(r);if(a<t.length-1){const h=e[a+1],u=new T().subVectors(h,r),p=u.lengthSq();if(p>1e-6){const f=Math.max(0,Math.min(1,new T().subVectors(i,r).dot(u)/p)),g=new T().copy(r).addScaledVector(u,f);l=Math.min(l,i.distanceTo(g)+f*.08)}}const c=1/Math.pow(Math.max(.035,l),n);s.push({idx:t[a],w:c})}s.sort((a,r)=>r.w-a.w);const o=s.slice(0,4);for(;o.length<4;)o.push({idx:0,w:0});return Be([o[0].idx,o[1].idx,o[2].idx,o[3].idx],[o[0].w,o[1].w,o[2].w,o[3].w])}function ae(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function oe(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function $o(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function nl(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let g=0;g<e-1;g++)n[g]=(t[g+1][1]-t[g][1])/(t[g+1][0]-t[g][0]);s[0]=n[0],s[e-1]=n[e-2];for(let g=1;g<e-1;g++)n[g-1]*n[g]<=0?s[g]=0:s[g]=(n[g-1]+n[g])*.5;for(let g=0;g<e-1;g++)if(Math.abs(n[g])<1e-8)s[g]=0,s[g+1]=0;else{const v=s[g]/n[g],m=s[g+1]/n[g],d=Math.hypot(v,m);if(d>3){const M=3/d;s[g]=M*v*n[g],s[g+1]=M*m*n[g]}}let o=0;for(let g=0;g<e-1;g++)if(i>=t[g][0]&&i<=t[g+1][0]){o=g;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r,h=2*c-3*l+1,u=c-2*l+r,p=-2*c+3*l,f=c-l;return h*t[o][1]+u*a*s[o]+p*t[o+1][1]+f*a*s[o+1]}const O1=[[-4.55,.018],[-3.95,.052],[-3.05,.095],[-2.1,.16],[-1.35,.228],[-.88,.282],[-.54,.334],[-.1,.328],[.42,.378],[.82,.394],[1.08,.304],[1.32,.25],[1.54,.228]],ru=[[-4.55,.016],[-3.95,.044],[-3.05,.084],[-2.1,.14],[-1.35,.194],[-.88,.236],[-.54,.274],[-.1,.272],[.42,.306],[.82,.312],[1.08,.246],[1.32,.208],[1.54,.192]],H1=[new T(0,.126,-4.55),new T(0,.126,-4.05),new T(0,.126,-3.55),new T(0,.13,-3.05),new T(0,.19,-2.5),new T(0,.35,-1.92),new T(0,.56,-1.42),new T(0,.74,-.92),new T(0,.81,-.54),new T(0,.82,-.1),new T(0,.87,.4),new T(0,.94,.8),new T(0,1.09,1.06),new T(0,1.31,1.28),new T(0,1.53,1.48),new T(0,1.635,1.66),new T(0,1.654,1.86),new T(0,1.632,2.05),new T(0,1.586,2.235)];let cr=null;function lu(){return cr||(cr=new Bn(H1,!1,"centripetal",.5)),cr}function hr(i){const t=lu();let e=0,n=1;for(let v=0;v<22;v++){const m=(e+n)*.5;t.getPointAt(m).z<i?e=m:n=m}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new T(0,1,0),l=r.clone().addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=ae(-4.55,-4.46,c);let u=nl(c,ru)*h;const p=ae(1.46,1.6,c);if(p>0){const v=Math.max(0,Math.min(1,(c-1.54)/.6949999999999998)),m=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(v-.8)/.2),2))),d=(.192+.014*oe(v,.35,.22)-.068*ae(.34,.94,v))*m;u=$.lerp(u,d,p)}let f=u;return c>-.45&&c<1.18&&(f+=.01*oe(c,.35,.55)),{point:o.clone().addScaledVector(l,f),tangent:a,up:l}}function cu(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.64)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.38){const r=ae(1.42,1.64,i.z),l=1-r,c=ae(1.36,1.56,i.z);return Be([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return Zn(i,e,n,3.5)}function V1(i,t){const e=[];return e.push(W1(i,t)),e.push(...G1(i,t)),e.push(...X1(i,t)),e.push(...Y1(i,t)),Ve(e)}function W1(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=lu(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(A=>i.boneIndexMap.get(A)),r=o.map(A=>i.bindWorldPositions.get(A)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),p=new Uint16Array(l*4),f=new Float32Array(l*4),g=new T(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),d=[{center:v,fwd:uo,up:new T(-.16,.985,.06).normalize()},{center:m,fwd:po,up:new T(.16,.985,.06).normalize()}].map(A=>{const b=new T().crossVectors(A.up,A.fwd).normalize(),S=new T().crossVectors(A.fwd,b).normalize();return{center:A.center,fwd:A.fwd,right:b,up:S}});for(let A=0;A<=e;A++){const b=A/e,S=1-Math.pow(1-b,1.85),E=s.getPointAt(S),y=s.getTangentAt(S).normalize(),x=new T().copy(g).addScaledVector(y,-g.dot(y)).normalize(),P=new T().crossVectors(x,y).normalize(),C=E.z,R=ae(-4.55,-4.46,C),L=nl(C,O1)*R+.008*oe(C,-3.96,.36),D=nl(C,ru)*R,B=ae(1.46,1.6,C);let k=L,F=D;if(B>0){const H=Math.max(0,Math.min(1,(C-1.54)/.6949999999999998)),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(H-.8)/.2),2))),Y=Ns(C),j=(.192+.014*oe(H,.35,.22)-.068*ae(.34,.94,H))*V;k=$.lerp(L,Y,B),F=$.lerp(D,j,B)}for(let H=0;H<=n;H++){const V=H/n,Y=V*Math.PI*2,j=Math.sin(Y),W=Math.cos(Y);let X=k*j,O=F*W,it=.28,nt=0,Z=0;if(C>-.85&&C<1.18){const tt=oe(C,.76,.3),U=oe(Math.abs(j),.48,.24)*ae(-.05,-.88,W),Mt=oe(j,0,.11)*ae(-.55,-.98,W)*tt;O-=.026*tt*U-.012*Mt,X+=Math.sign(j)*.016*tt*U;const at=oe(C,.88,.22)*oe(Math.abs(j),.72,.18)*ae(-.08,-.78,W),pt=oe(C,-.54,.24)*oe(Math.abs(j),.7,.19)*ae(-.05,-.78,W);O-=.032*at+.028*pt;const _t=oe(C,.38,.28)*oe(Math.abs(j),.92,.16)*oe(W,-.12,.35);X+=Math.sign(j)*Math.sin(C*26)*.003*_t,W>.75&&C>-.45&&(O+=.01*Math.pow((W-.75)/.25,2)*oe(C,.35,.55))}if(C>=1&&C<1.56){const tt=ae(1,1.18,C)*(1-ae(1.44,1.56,C)),U=oe(Math.abs(j),.62,.18)*oe(W,-.35,.3);X+=Math.sign(j)*.008*U*tt}if(C>=1.5){const tt=oe(C,1.75,.1)*oe(Math.abs(j),.52,.2)*ae(.35,.9,W);O+=.014*tt,X+=Math.sign(j)*.01*tt;const U=oe(C,1.985,.105),Mt=oe(Math.abs(j),.64,.17)*ae(.16,.72,W),at=1+.22*Math.max(0,Math.sin((C-1.88)/.21*Math.PI*6));O+=.024*U*Mt*at,X+=Math.sign(j)*.012*U*Mt;const pt=oe(C,1.76,.11)*oe(Math.abs(j),.92,.16)*oe(W,-.18,.26),_t=oe(C,1.9,.13)*oe(Math.abs(j),.88,.17)*oe(W,-.1,.24);if(X+=Math.sign(j)*(.018*pt+.015*_t),W>.86&&C>1.58&&C<1.95){const dt=Math.pow((W-.86)/.14,2),vt=Math.max(0,Math.sin((C-1.58)/.37*Math.PI*6)),ft=-.003*oe(Math.abs(j),.16,.07);O+=(.008+.015*Math.pow(vt,1.5))*dt+ft,Z=Math.max(Z,.75*dt*ae(1.58,1.94,C))}if(C>2.15&&W>-.35&&W<.35){const dt=oe(j,0,.08)*ae(2.15,2.225,C);O-=.0025*dt}const It=oe(j,0,.26)*ae(.42,.96,W)*ae(1.66,1.98,C),yt=ae(1.98,2.19,C)*ae(-.35,.85,W),z=U*Mt*1.45,I=oe(W,-.2,.2)*ae(1.74,2.18,C);it=.38+1.56*Math.min(1,Math.max(It,yt,z,I*.88))}const Q=new T().copy(E).addScaledVector(P,X).addScaledVector(x,O),G=ae(1.63,1.72,C);if(G>0&&W<.04){const tt=Ci(C),U=Math.max(ae(.56,.9,Math.abs(j)),ae(2.12,2.21,C)),Mt=tt-.0045,at=tt+.044*(1-ae(2.08,2.22,C)),pt=$.lerp(at,Mt,U),_t=G*ae(.04,-.26,W);Q.y=$.lerp(Q.y,pt,_t)}if(C>1.8&&C<2.16)for(const tt of d){if(Math.sign(Q.x)!==Math.sign(tt.center.x))continue;const U=new T().subVectors(Q,tt.center),Mt=U.dot(tt.fwd),at=U.dot(tt.right),pt=U.dot(tt.up);if(Mt>0){const _t=Math.exp(-.5*(Math.pow(at/.058,2)+Math.pow(pt/.05,2)))*ae(0,.035,Mt),It=da-.024,yt=$.lerp(Mt,It,_t);Mt>yt&&(Q.addScaledVector(tt.fwd,yt-Mt),it=Math.max(it,.78*_t))}}if(C>2.1&&C<2.23&&Q.y>1.575){const tt=$o(Q.x,Q.z,.066,2.182,.021,.024)*oe(Q.y,1.606,.017),U=$o(Q.x,Q.z,-.066,2.182,.021,.024)*oe(Q.y,1.606,.017),Mt=Math.max(tt,U),at=Math.max($o(Q.x,Q.z,.068,2.176,.025,.026),$o(Q.x,Q.z,-.068,2.176,.025,.026))*oe(Q.y,1.622,.012);at>.05&&(Q.y+=.0035*at,Q.x+=Math.sign(Q.x)*.0025*at),Mt>.05&&(Q.x*=1-.16*Mt,Q.y-=.011*Mt,Q.z-=.014*Mt,Z=Math.max(Z,Math.min(1,Mt*1.35)))}if(C>1.76&&C<2.02&&Q.y>1.68){const tt=Math.abs(Q.x+.14-(Q.z-1.89)*.4),U=oe(Q.z,1.89,.052)*ae(.015,.002,tt),Mt=Math.abs(Q.x-.12+(Q.z-1.84)*.34),at=oe(Q.z,1.84,.034)*ae(.012,.002,Mt);nt=Math.min(1,Math.max(U,at*.85)),nt>.01&&(Q.y-=.0035*nt)}W>.92&&C<1.56&&(Z=Math.max(Z,(W-.92)/.08*.55),it=Math.max(it,.65*((W-.92)/.08)));const ot=A*(n+1)+H;c[ot*3]=Q.x,c[ot*3+1]=Q.y,c[ot*3+2]=Q.z,h[ot*2]=S*5.2,h[ot*2+1]=V*1.6,u[ot*4]=it,u[ot*4+1]=nt,u[ot*4+2]=Z,u[ot*4+3]=0;const gt=cu(Q,i,a,r);p.set(gt.indices,ot*4),f.set(gt.weights,ot*4)}}const M=new Uint32Array(e*n*6);let w=0;for(let A=0;A<e;A++)for(let b=0;b<n;b++){const S=A*(n+1)+b,E=(A+1)*(n+1)+b,y=(A+1)*(n+1)+(b+1),x=A*(n+1)+(b+1);M[w++]=S,M[w++]=E,M[w++]=y,M[w++]=S,M[w++]=y,M[w++]=x}const _=new Gt;return _.setAttribute("position",new q(c,3)),_.setAttribute("uv",new q(h,2)),_.setAttribute("aAnatomyData",new q(u,4)),_.setAttribute("skinIndex",new me(p,4)),_.setAttribute("skinWeight",new Yt(f,4)),_.setIndex(new q(M,1)),_.computeVertexNormals(),ya(_,e,n),_}function G1(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.272,2.09,1.06],maxWidth:.074,maxThick:.027,rollAngle:l*-.46}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.395,1.692,1.33],maxWidth:.038,maxThick:.017,rollAngle:l*-.95}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],tipPos:[l*.348,1.565,1.39],maxWidth:.03,maxThick:.015,rollAngle:l*-1.15}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],customStart:[l*.218,1.498,1.62],tipPos:[l*.274,1.488,1.48],maxWidth:.021,maxThick:.012,rollAngle:l*-1.28})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.customStart?[new T(...r.customStart),new T(...r.tipPos).lerp(new T(...r.customStart),.5)]:r.boneNames.map(E=>i.bindWorldPositions.get(E).clone()),c=new T().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.052),...l,new T(...r.tipPos)],p=new Bn(u),f=r.boneNames.map(E=>i.boneIndexMap.get(E)),g=r.boneNames.map(E=>i.bindWorldPositions.get(E)),v=(o+1)*(a+1),m=new Float32Array(v*3),d=new Float32Array(v*2),M=new Float32Array(v*4),w=new Uint16Array(v*4),_=new Float32Array(v*4);for(let E=0;E<=o;E++){const x=1-E/o,P=p.getPointAt(x),C=p.getTangentAt(x).negate().normalize(),R=new T(Math.sin(r.rollAngle),Math.cos(r.rollAngle),0).normalize(),L=R.clone().addScaledVector(C,-R.dot(C)).normalize(),D=new T().crossVectors(L,C).normalize(),B=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(x-.76)/.24),2))),k=.72+.44*Math.sin(Math.min(1,x*1.15)*Math.PI),F=1+.34*Math.pow(Math.max(0,1-x*4.2),2),H=r.maxWidth*k*B*F,V=r.maxThick*(.85+.25*(1-x))*B*F;for(let Y=0;Y<=a;Y++){const j=Y/a,W=j*Math.PI*2,X=new T().copy(P).addScaledVector(D,H*Math.sin(W)).addScaledVector(L,V*Math.cos(W)),O=E*(a+1)+Y;m[O*3]=X.x,m[O*3+1]=X.y,m[O*3+2]=X.z,d[O*2]=x*.85,d[O*2+1]=j*.65,M[O*4]=.45+1.35*ae(.32,.9,x);const it=Zn(X,f,g,3.6),nt=ae(.28,0,x),Z=Be([n,it.indices[0],it.indices[1],it.indices[2]],[nt,it.weights[0]*(1-nt),it.weights[1]*(1-nt),it.weights[2]*(1-nt)]);w.set(Z.indices,O*4),_.set(Z.weights,O*4)}}const A=new Uint16Array(o*a*6);let b=0;for(let E=0;E<o;E++)for(let y=0;y<a;y++){const x=E*(a+1)+y,P=(E+1)*(a+1)+y,C=(E+1)*(a+1)+(y+1),R=E*(a+1)+(y+1);A[b++]=x,A[b++]=P,A[b++]=C,A[b++]=x,A[b++]=C,A[b++]=R}const S=new Gt;S.setAttribute("position",new q(m,3)),S.setAttribute("uv",new q(d,2)),S.setAttribute("aAnatomyData",new q(M,4)),S.setAttribute("skinIndex",new me(w,4)),S.setAttribute("skinWeight",new Yt(_,4)),S.setIndex(new q(A,1)),S.computeVertexNormals(),ya(S,o,a),e.push(S)}return e}function X1(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?uo:po).clone(),p=new T(r*-.16,.985,.06).normalize(),f=new T().crossVectors(u,p).normalize(),g=new T().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,d=(s+1)*(o+1),M=new Float32Array(d*3),w=new Float32Array(d*2),_=new Float32Array(d*4),A=new Uint16Array(d*4),b=new Float32Array(d*4),S=da+.0018;for(let P=0;P<=o;P++){const C=P/o,R=oe(C,.06,.08);for(let L=0;L<=s;L++){const D=L/s,B=$.degToRad($.lerp(-65,65,D)),k=Math.sin(D*Math.PI),F=v?44*k:-40*k,H=v?78:-74,V=$.degToRad($.lerp(F,H,C)),Y=Math.max(0,Math.sin(D*Math.PI*22))*.0014*R,j=S+.0018*R+Y-.0028*C,W=new T().addScaledVector(u,Math.cos(V)*Math.cos(B)).addScaledVector(f,Math.cos(V)*Math.sin(B)).addScaledVector(g,Math.sin(V)).normalize(),X=new T().copy(l).addScaledVector(W,j),O=P*(s+1)+L;M[O*3]=X.x,M[O*3+1]=X.y,M[O*3+2]=X.z,w[O*2]=D*.35,w[O*2+1]=C*.18,_[O*4]=.85;const it=k*(1-ae(.48,1,C)),nt=Math.max(0,Math.min(1,it));A.set([m,n,0,0],O*4),b.set([nt,1-nt,0,0],O*4)}}const E=new Uint16Array(s*o*6);let y=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,D=(P+1)*(s+1)+(C+1),B=P*(s+1)+(C+1);v?(E[y++]=R,E[y++]=D,E[y++]=L,E[y++]=R,E[y++]=B,E[y++]=D):(E[y++]=R,E[y++]=L,E[y++]=D,E[y++]=R,E[y++]=D,E[y++]=B)}const x=new Gt;x.setAttribute("position",new q(M,3)),x.setAttribute("uv",new q(w,2)),x.setAttribute("aAnatomyData",new q(_,4)),x.setAttribute("skinIndex",new me(A,4)),x.setAttribute("skinWeight",new Yt(b,4)),x.setIndex(new q(E,1)),x.computeVertexNormals(),e.push(x)}}return e}function Y1(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new T(a*.16,.96,.86),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new T(a*.342,.056,1),new T(a*.342,.032,1.078)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(jc(i,r,l,!0,o,n,s)),e.push(...Zc(i,o,!0,t));const c=[new T(a*.15,.8,-.54),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new T(a*.318,.054,-.562),new T(a*.318,.032,-.488)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(jc(i,c,h,!1,o,n,s)),e.push(...Zc(i,o,!1,t))}return e}function Zc(i,t,e,n){const s=[],o=au(t,e),a=n===0?16:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=l.dirX,d=l.dirZ,M=Math.hypot(m,d),w=m/M,_=d/M,A=_,b=-w;for(let x=0;x<=a;x++){const P=x/a,C=$.lerp(-.38,1,P),R=Math.max(0,C),L=Math.max(0,-C)*.042,D=Math.sin(R*Math.PI)*.011-.009*R*R+L,B=l.rootX+w*l.toeLength*C,k=l.rootZ+_*l.toeLength*C,F=l.rootY+D,H=1+.44*Math.pow(1-ae(-.38,.18,C),1.5),V=1+.15*oe(R,.4,.18)+.14*oe(R,.84,.1),Y=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(P-.89)/.11),2))),j=$.lerp(l.baseRadius,l.tipRadius,R)*H*V*Y;for(let W=0;W<=r;W++){const X=W/r,O=X*Math.PI*2,it=Math.sin(O),nt=Math.cos(O),Z=nt>.15?Math.pow(Math.max(0,Math.sin(R*Math.PI*4.5)),.75)*.0042*((nt-.15)/.85):0,Q=1.12+.24*(1-ae(-.35,.22,C)),G=B+A*it*j*Q,ot=k+b*it*j*Q;let gt=F+nt*(j*.86+Z);gt<.003&&(gt=.003+Math.max(0,gt)*.12);const tt=x*(r+1)+W;u[tt*3]=G,u[tt*3+1]=gt,u[tt*3+2]=ot,p[tt*2]=P*.42,p[tt*2+1]=X*.36,f[tt*4]=nt>.05?1.95:.38,g.set([c,0,0,0],tt*4),v.set([1,0,0,0],tt*4)}}const S=new Uint16Array(a*r*6);let E=0;for(let x=0;x<a;x++)for(let P=0;P<r;P++){const C=x*(r+1)+P,R=(x+1)*(r+1)+P,L=(x+1)*(r+1)+(P+1),D=x*(r+1)+(P+1);S[E++]=C,S[E++]=R,S[E++]=L,S[E++]=C,S[E++]=L,S[E++]=D}const y=new Gt;y.setAttribute("position",new q(u,3)),y.setAttribute("uv",new q(p,2)),y.setAttribute("aAnatomyData",new q(f,4)),y.setAttribute("skinIndex",new me(g,4)),y.setAttribute("skinWeight",new Yt(v,4)),y.setIndex(new q(S,1)),y.computeVertexNormals(),ya(y,a,r),s.push(y)}return s}function jc(i,t,e,n,s,o,a){const r=s==="L"?1:-1,l=new Bn(t,!1,"centripetal",.5),c=e.map(A=>i.boneIndexMap.get(A)),h=e.map(A=>i.bindWorldPositions.get(A)),u=(o+1)*(a+1),p=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),d=new T(0,0,1);for(let A=0;A<=o;A++){const S=1-A/o,E=l.getPointAt(S),y=l.getTangentAt(S).negate().normalize(),x=d.clone().addScaledVector(y,-d.dot(y)).normalize(),P=new T().crossVectors(x,y).normalize(),C=.52+.48*ae(0,.34,S),R=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(S-.91)/.09),2)))*C;let L=.095,D=.11;if(n){const F=oe(S,.54,.16)*.028,H=oe(S,.86,.12)*.088;L=(.09+F+H)*R,D=(.106+oe(S,.26,.18)*.036+F+H*.86)*R}else{const F=oe(S,.52,.15)*.032,H=oe(S,.86,.12)*.082;L=(.088+F+H)*R,D=(.11+oe(S,.26,.19)*.046+F*1.08+H*.84)*R}const B=ae(.7,.94,S),k=1-ae(.08,.42,S);for(let F=0;F<=a;F++){const H=F/a,V=H*Math.PI*2,Y=Math.sin(V),j=Math.cos(V),W=Y*r>0?Math.abs(Y):0,X=1-.28*k*W;let O=1;if(B>.01&&j>-.35){const z=Math.atan2(Y,Math.max(.05,j+.25)),I=Math.cos(z*3.6);O+=.16*B*Math.max(-.12,I)*ae(-.35,.45,j)}const it=ae(-.25,.55,j+.35*W),nt=ae(.36,.68,S),Z=S*22,Q=H*14+Math.floor(Z)*.5,G=Math.max(0,Math.sin(Z*Math.PI))*Math.max(0,Math.sin(Q*Math.PI))*.0038*it*nt,ot=L*X*O+G,gt=D*O+G,tt=new T().copy(E).addScaledVector(P,ot*Y).addScaledVector(x,gt*j);S>.7&&tt.y<.004&&(tt.y=.002+Math.max(0,tt.y)*.14);const U=A*(a+1)+F;p[U*3]=tt.x,p[U*3+1]=tt.y,p[U*3+2]=tt.z,f[U*2]=S*1.35,f[U*2+1]=H*.85,g[U*4]=.36+1.62*it*nt;const Mt=Zn(tt,c,h,3.5),at=ae(.24,0,S)*.72,pt=c[c.length-1],_t=ae(.74,.88,S),It=(1-at)*(1-_t),yt=Be([pt,c[0],Mt.indices[0],Mt.indices[1]],[_t,at*(1-_t),Mt.weights[0]*It,Mt.weights[1]*It]);v.set(yt.indices,U*4),m.set(yt.weights,U*4)}}const M=new Uint16Array(o*a*6);let w=0;for(let A=0;A<o;A++)for(let b=0;b<a;b++){const S=A*(a+1)+b,E=(A+1)*(a+1)+b,y=(A+1)*(a+1)+(b+1),x=A*(a+1)+(b+1);M[w++]=S,M[w++]=E,M[w++]=y,M[w++]=S,M[w++]=y,M[w++]=x}const _=new Gt;return _.setAttribute("position",new q(p,3)),_.setAttribute("uv",new q(f,2)),_.setAttribute("aAnatomyData",new q(g,4)),_.setAttribute("skinIndex",new me(v,4)),_.setAttribute("skinWeight",new Yt(m,4)),_.setIndex(new q(M,1)),_.computeVertexNormals(),ya(_,o,a),_}function ya(i,t,e){const n=i.getAttribute("normal"),s=new T,o=new T;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function $1(i,t){return{jawSkinGeometry:Ve([q1(i,t),...Z1(i,t)]),oralGumsGeometry:j1(i,t),teethGeometry:K1(i,t),tongueGeometry:Q1(i,t),irisGeometry:Kc(i,t,!1),corneaGeometry:Kc(i,t,!0),clawsGeometry:J1(i,t)}}function Ln(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function q1(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),p=new Uint16Array(l*4),f=new Float32Array(l*4);for(let d=0;d<=e;d++){const M=d/e,w=$.lerp(1.55,2.226,M),_=Ns(w),A=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.88)/.12),2))),b=Math.max(.002,(_-.0035*Ln(1.66,1.76,w))*A),S=Ci(w),E=.028*(1-Ln(1.55,1.7,w)),y=S+.0035+E,x=(.088-.034*M)*A;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),D=Math.cos(R),B=Math.exp(-Math.pow((M-.28)/.22,2))*.011,k=Math.exp(-Math.pow((M-.3)/.16,2))*Math.abs(L)*.01,F=(b+k)*L,H=-.022*D*(1-Math.pow(L,2))*Ln(1.68,1.78,w),V=D>=0?y+H:y+(x+B)*D;let Y=0,j=V;if(w>1.98&&w<2.18&&D<-.55){const ot=Math.abs(F-.024-(w-2.08)*.25);ot<.013&&(Y=1-ot/.013,j+=.0022*Y)}const W=d*(n+1)+P;c[W*3]=F,c[W*3+1]=j,c[W*3+2]=w,h[W*2]=M*.95,h[W*2+1]=C*.85;const X=Math.exp(-Math.pow(D/.35,2));u[W*4]=Math.min(1,.38+.56*Math.max(X,M>.7?(M-.7)*3:0)),u[W*4+1]=Y,u[W*4+2]=0,u[W*4+3]=0;const O=Ln(1.62,1.71,w),it=1-O,nt=Ln(1.42,1.64,w),Z=Ln(1.36,1.56,w),Q=it*(1-nt),G=Be([s,o,a,r],[O,it*nt,Q*(.52+.48*Z),Q*(.48-.48*Z)]);p.set(G.indices,W*4),f.set(G.weights,W*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let d=0;d<e;d++)for(let M=0;M<n;M++){const w=d*(n+1)+M,_=(d+1)*(n+1)+M,A=(d+1)*(n+1)+(M+1),b=d*(n+1)+(M+1);g[v++]=w,g[v++]=_,g[v++]=A,g[v++]=w,g[v++]=A,g[v++]=b}const m=new Gt;return m.setAttribute("position",new q(c,3)),m.setAttribute("uv",new q(h,2)),m.setAttribute("aAnatomyData",new q(u,4)),m.setAttribute("skinIndex",new me(p,4)),m.setAttribute("skinWeight",new Yt(f,4)),m.setIndex(new q(g,1)),m.computeVertexNormals(),m}function Z1(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=t===0?14:8,o=t===0?12:8,a=[];for(const r of["L","R"]){const l=r==="L"?1:-1,c=(s+1)*(o+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const w=M/o;for(let _=0;_<=s;_++){const A=_/s,b=$.lerp(1.65,1.9,A),S=Ci(b),E=Ns(b)-.008,y=-.016*Math.sin(w*Math.PI)*Math.pow(A,1.3),x=.026*(1-.55*A),P=S+(w-.5)*2*x,C=l*(E-.006*A+y*.35),R=M*(s+1)+_;h[R*3]=C,h[R*3+1]=P,h[R*3+2]=b+y,u[R*2]=A*.3,u[R*2+1]=w*.3,p[R*4]=.35;const L=Ln(0,1,w),D=1-L;f.set([e,n,0,0],R*4),g.set([L,D,0,0],R*4)}}const v=new Uint16Array(s*o*6);let m=0;for(let M=0;M<o;M++)for(let w=0;w<s;w++){const _=M*(s+1)+w,A=(M+1)*(s+1)+w,b=(M+1)*(s+1)+(w+1),S=M*(s+1)+(w+1);r==="L"?(v[m++]=_,v[m++]=S,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=A):(v[m++]=_,v[m++]=A,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=S)}const d=new Gt;d.setAttribute("position",new q(h,3)),d.setAttribute("uv",new q(u,2)),d.setAttribute("aAnatomyData",new q(p,4)),d.setAttribute("skinIndex",new me(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new q(v,1)),d.computeVertexNormals(),a.push(d)}return a}function hu(i,t){const e=1.76+Math.cos(i)*(t?.422:.406),n=Math.max(.04,Ns(e)-(t?.022:.03));return{x:Math.sin(i)*n,z:e}}function j1(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=[],o=t===0?32:18,a=t===0?28:16;for(const u of[!0,!1]){const p=u?e:n,f=(o+1)*(a+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),d=new Uint16Array(f*4),M=new Float32Array(f*4);for(let b=0;b<=o;b++){const S=b/o,E=$.lerp(1.68,2.19,S),y=Ci(E),x=Math.max(.02,(Ns(E)-.016)*Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(S-.86)/.14),2))));for(let P=0;P<=a;P++){const C=P/a*2-1,R=Math.abs(C),L=Math.sqrt(Math.max(0,1-C*C)),D=C*x;let B;if(u){const F=S*Math.PI*18-R*2.6,H=Math.pow(.5+.5*Math.sin(F),1.8)*.0052*L*Ln(.08,.25,S),V=-.0032*Math.exp(-Math.pow(C/.1,2))*L,Y=.0035*Math.abs(Math.sin(S*Math.PI*16))*Ln(.75,.98,R);B=y+.004+.032*L-H+V-Y}else{const F=.0038*Math.exp(-Math.pow((R-.34)/.14,2))*L,H=.0035*Math.exp(-Math.pow(C/.07,2))*Ln(.55,.2,S),V=.003*Math.abs(Math.sin(S*Math.PI*14))*Ln(.75,.98,R);B=y-.002-.02*L+F+H+V}const k=b*(a+1)+P;g[k*3]=D,g[k*3+1]=B,g[k*3+2]=E,v[k*2]=S*2.4,v[k*2+1]=(C*.5+.5)*2,m[k*4]=.45,m[k*4+2]=(1-Ln(0,.38,S))*.85,d.set([p,0,0,0],k*4),M.set([1,0,0,0],k*4)}}const w=new Uint16Array(o*a*6);let _=0;for(let b=0;b<o;b++)for(let S=0;S<a;S++){const E=b*(a+1)+S,y=(b+1)*(a+1)+S,x=(b+1)*(a+1)+(S+1),P=b*(a+1)+(S+1);u?(w[_++]=E,w[_++]=x,w[_++]=y,w[_++]=E,w[_++]=P,w[_++]=x):(w[_++]=E,w[_++]=y,w[_++]=x,w[_++]=E,w[_++]=x,w[_++]=P)}const A=new Gt;A.setAttribute("position",new q(g,3)),A.setAttribute("uv",new q(v,2)),A.setAttribute("aAnatomyData",new q(m,4)),A.setAttribute("skinIndex",new me(d,4)),A.setAttribute("skinWeight",new Yt(M,4)),A.setIndex(new q(w,1)),A.computeVertexNormals(),s.push(A)}const r=t===0?42:22,l=t===0?12:8;for(const u of[!0,!1]){const p=u?e:n,f=u?16:14,g=.0155,v=(r+1)*(l+1),m=new Float32Array(v*3),d=new Float32Array(v*2),M=new Float32Array(v*4),w=new Uint16Array(v*4),_=new Float32Array(v*4),A=[];for(let x=0;x<=18;x++){const P=$.lerp(-Math.PI*.46,Math.PI*.46,x/18),C=hu(P,u),R=Ci(C.z)+(u?.012:-.01);A.push(new T(C.x,R,C.z))}const b=new Bn(A);for(let x=0;x<=r;x++){const P=x/r,C=b.getPointAt(P),R=b.getTangentAt(P).normalize(),L=new T(0,1,0),D=new T().crossVectors(L,R).normalize(),B=1+.24*Math.pow(.5+.5*Math.cos(P*Math.PI*f*2),2),k=g*B;for(let F=0;F<=l;F++){const H=F/l,V=H*Math.PI*2,Y=1+.12*Math.sin(V*3),j=new T().copy(C).addScaledVector(D,k*Y*Math.sin(V)).addScaledVector(L,k*.82*Math.cos(V)),W=x*(l+1)+F;m[W*3]=j.x,m[W*3+1]=j.y,m[W*3+2]=j.z,d[W*2]=P*3,d[W*2+1]=H*1.2,M[W*4]=.4,w.set([p,0,0,0],W*4),_.set([1,0,0,0],W*4)}}const S=new Uint16Array(r*l*6);let E=0;for(let x=0;x<r;x++)for(let P=0;P<l;P++){const C=x*(l+1)+P,R=(x+1)*(l+1)+P,L=(x+1)*(l+1)+(P+1),D=x*(l+1)+(P+1);S[E++]=C,S[E++]=R,S[E++]=L,S[E++]=C,S[E++]=L,S[E++]=D}const y=new Gt;y.setAttribute("position",new q(m,3)),y.setAttribute("uv",new q(d,2)),y.setAttribute("aAnatomyData",new q(M,4)),y.setAttribute("skinIndex",new me(w,4)),y.setAttribute("skinWeight",new Yt(_,4)),y.setIndex(new q(S,1)),y.computeVertexNormals(),s.push(y)}const c=t===0?18:10,h=t===0?12:8;{const u=(c+1)*(h+1),p=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4);for(let _=0;_<=h;_++){const A=_/h;for(let b=0;b<=c;b++){const S=b/c,E=$.lerp(-Math.PI*.62,Math.PI*.62,S),y=1.78-Math.cos(E)*.11,x=Ns(Math.max(1.66,y))-.022,P=Math.sin(E)*x,C=Ci(y),R=$.lerp(C-.018,C+.03,A),L=_*(c+1)+b;p[L*3]=P,p[L*3+1]=R,p[L*3+2]=y,f[L*2]=S*1.5,f[L*2+1]=A*1.5,g[L*4]=.5,g[L*4+2]=.95*Math.cos(E*.65);const D=Ln(0,1,A);v.set([e,n,0,0],L*4),m.set([D,1-D,0,0],L*4)}}const d=new Uint16Array(c*h*6);let M=0;for(let _=0;_<h;_++)for(let A=0;A<c;A++){const b=_*(c+1)+A,S=(_+1)*(c+1)+A,E=(_+1)*(c+1)+(A+1),y=_*(c+1)+(A+1);d[M++]=b,d[M++]=S,d[M++]=E,d[M++]=b,d[M++]=E,d[M++]=y}const w=new Gt;w.setAttribute("position",new q(p,3)),w.setAttribute("uv",new q(f,2)),w.setAttribute("aAnatomyData",new q(g,4)),w.setAttribute("skinIndex",new me(v,4)),w.setAttribute("skinWeight",new Yt(m,4)),w.setIndex(new q(d,1)),w.computeVertexNormals(),s.push(w)}return Ve(s)}function K1(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const p=(u+.5)/l,f=$.lerp(-Math.PI*.42,Math.PI*.42,p),g=hu(f,r),v=g.x,m=g.z,d=Ci(m)+(r?.011:-.01),M=1+.34*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),w=.023*M*(.78+.22*Math.cos(f)),_=.0062*M,A=(o+1)*(a+1),b=new Float32Array(A*3),S=new Float32Array(A*2),E=new Float32Array(A*4),y=new Uint16Array(A*4),x=new Float32Array(A*4),P=-Math.sin(f),C=-Math.cos(f);for(let B=0;B<=o;B++){const k=r?1-B/o:B/o,F=_*(1-.88*Math.pow(k,1.25)),H=.0055*k*k,V=v+P*H,Y=d+h*w*k,j=m+C*H-.003*k*k;for(let W=0;W<=a;W++){const X=W/a,O=X*Math.PI*2,it=B*(a+1)+W;b[it*3]=V+Math.sin(O)*F,b[it*3+1]=Y,b[it*3+2]=j+Math.cos(O)*F,S[it*2]=k,S[it*2+1]=X,y.set([c,0,0,0],it*4),x.set([1,0,0,0],it*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let B=0;B<o;B++)for(let k=0;k<a;k++){const F=B*(a+1)+k,H=(B+1)*(a+1)+k,V=(B+1)*(a+1)+(k+1),Y=B*(a+1)+(k+1);R[L++]=F,R[L++]=H,R[L++]=V,R[L++]=F,R[L++]=V,R[L++]=Y}const D=new Gt;D.setAttribute("position",new q(b,3)),D.setAttribute("uv",new q(S,2)),D.setAttribute("aAnatomyData",new q(E,4)),D.setAttribute("skinIndex",new me(y,4)),D.setAttribute("skinWeight",new Yt(x,4)),D.setIndex(new q(R,1)),D.computeVertexNormals(),s.push(D)}}return Ve(s)}function Q1(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),p=new Float32Array(r*4);for(let m=0;m<=e;m++){const d=m/e,M=$.lerp(1.74,2.12,d),w=Ci(M)-.004,_=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(d-.76)/.24),2))),A=(.08+.012*Math.sin(d*Math.PI)-.022*d)*_,b=(.015-.005*d)*_;for(let S=0;S<=n;S++){const E=S/n,y=E*Math.PI*2,x=Math.sin(y),P=Math.cos(y),C=P>.35?-.0042*Math.exp(-Math.pow(x/.24,2)):0,R=P>.2?.0012*Math.sin(d*Math.PI*26)*Math.cos(x*Math.PI*9)*_:0,L=new T(A*x,w+b*P+C+R,M),D=m*(n+1)+S;l[D*3]=L.x,l[D*3+1]=L.y,l[D*3+2]=L.z,c[D*2]=d*2.5,c[D*2+1]=E*1.8;const B=Zn(L,o,a,3.8);u.set(B.indices,D*4),p.set(B.weights,D*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let d=0;d<n;d++){const M=m*(n+1)+d,w=(m+1)*(n+1)+d,_=(m+1)*(n+1)+(d+1),A=m*(n+1)+(d+1);f[g++]=M,f[g++]=w,f[g++]=_,f[g++]=M,f[g++]=_,f[g++]=A}const v=new Gt;return v.setAttribute("position",new q(l,3)),v.setAttribute("uv",new q(c,2)),v.setAttribute("aAnatomyData",new q(h,4)),v.setAttribute("skinIndex",new me(u,4)),v.setAttribute("skinWeight",new Yt(p,4)),v.setIndex(new q(f,1)),v.computeVertexNormals(),v}function Kc(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?uo:po).clone(),u=new T(r*-.16,.985,.06).normalize(),p=new T().crossVectors(u,h).normalize(),f=new T().crossVectors(h,p).normalize(),g=e?da+9e-4:da,v=.94,m=(s+1)*(o+1),d=new Float32Array(m*3),M=new Float32Array(m*2),w=new Float32Array(m*4),_=new Uint16Array(m*4),A=new Float32Array(m*4);for(let y=0;y<=s;y++){const x=y/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(x),C=Math.cos(x);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,D=Math.cos(L),B=Math.sin(L);let k=g;if(x<v){const j=1-x/v;e?k+=.0014*j*j:k-=.0028*j*j}const F=new T().addScaledVector(h,C).addScaledVector(p,P*D).addScaledVector(f,P*B).normalize(),H=new T().copy(l).addScaledVector(F,k),V=y*(o+1)+R;d[V*3]=H.x,d[V*3+1]=H.y,d[V*3+2]=H.z;const Y=Math.min(.498,x/v*.48);M[V*2]=.5+Y*D,M[V*2+1]=.5+Y*B,_.set([c,0,0,0],V*4),A.set([1,0,0,0],V*4)}}const b=new Uint16Array(s*o*6);let S=0;for(let y=0;y<s;y++)for(let x=0;x<o;x++){const P=y*(o+1)+x,C=(y+1)*(o+1)+x,R=(y+1)*(o+1)+(x+1),L=y*(o+1)+(x+1);b[S++]=P,b[S++]=C,b[S++]=R,b[S++]=P,b[S++]=R,b[S++]=L}const E=new Gt;E.setAttribute("position",new q(d,3)),E.setAttribute("uv",new q(M,2)),E.setAttribute("aAnatomyData",new q(w,4)),E.setAttribute("skinIndex",new me(_,4)),E.setAttribute("skinWeight",new Yt(A,4)),E.setIndex(new q(b,1)),E.computeVertexNormals(),n.push(E)}return Ve(n)}function J1(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=au(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,p=l.dirZ/h,f=p,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,d=l.rootZ+p*l.toeLength*v,M=l.rootY+Math.sin(v*Math.PI)*.011-.009*v*v+.002,w=l.toeLength*(1-v)+l.clawLength,_=l.tipRadius*.76,A=(n+1)*(s+1),b=new Float32Array(A*3),S=new Float32Array(A*2),E=new Float32Array(A*4),y=new Uint16Array(A*4),x=new Float32Array(A*4);for(let L=0;L<=n;L++){const D=L/n,B=_*(1-.85*Math.pow(D,1.52)),k=m+u*w*D,F=d+p*w*D,H=Math.max(.004,M-.036*Math.pow(D,1.8)+.006*Math.sin(D*Math.PI));for(let V=0;V<=s;V++){const Y=V/s,j=Y*Math.PI*2,W=Math.sin(j),X=Math.cos(j),O=L*(s+1)+V;b[O*3]=k+f*W*B*.74,b[O*3+1]=Math.max(.002,H+X*B*1.05),b[O*3+2]=F+g*W*B*.74,S[O*2]=D,S[O*2+1]=Y,y.set([c,0,0,0],O*4),x.set([1,0,0,0],O*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let D=0;D<s;D++){const B=L*(s+1)+D,k=(L+1)*(s+1)+D,F=(L+1)*(s+1)+(D+1),H=L*(s+1)+(D+1);P[C++]=B,P[C++]=k,P[C++]=F,P[C++]=B,P[C++]=F,P[C++]=H}const R=new Gt;R.setAttribute("position",new q(b,3)),R.setAttribute("uv",new q(S,2)),R.setAttribute("aAnatomyData",new q(E,4)),R.setAttribute("skinIndex",new me(y,4)),R.setAttribute("skinWeight",new Yt(x,4)),R.setIndex(new q(P,1)),R.computeVertexNormals(),e.push(R)}}return Ve(e)}function tv(i,t){const e=[],n=[],s=[];for(const o of["L","R"]){const a=o==="L"?1:-1;e.push(...ev(i,o,a,t)),n.push(...nv(i,o,a,t)),e.push(...iv(i,o,t)),n.push(sv(i,o,t)),s.push(lv(i,o,a,t))}return e.push(...ov(i,t)),n.push(av(i,t)),{wingSparsSkinGeometry:Ve(e),wingMembraneGeometry:Ve(n),dorsalSpinesGeometry:rv(i,t),alulaClawsGeometry:Ve(s)}}function lo(i,t,e,n,s,o,a=.55){const r=new Bn(t),l=e.map(_=>i.boneIndexMap.get(_)),c=e.map(_=>i.bindWorldPositions.get(_)),h=(s+1)*(o+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new T(0,1,0);for(let _=0;_<=s;_++){const A=_/s,b=r.getPointAt(A),S=r.getTangentAt(A).normalize();let E=m.clone().addScaledVector(S,-m.dot(S));E.lengthSq()<1e-4&&E.set(0,0,1),E.normalize();const y=new T().crossVectors(E,S).normalize(),x=A*(n.length-1),P=Math.min(n.length-2,Math.floor(x)),C=x-P;let R=$.lerp(n[P],n[P+1],C);A>.92&&(R*=Math.sqrt(Math.max(0,1-Math.pow((A-.92)/.08,2))));for(let L=0;L<=o;L++){const D=L/o,B=D*Math.PI*2,k=new T().copy(b).addScaledVector(y,R*Math.sin(B)).addScaledVector(E,R*.88*Math.cos(B)),F=_*(o+1)+L;u[F*3]=k.x,u[F*3+1]=k.y,u[F*3+2]=k.z,p[F*2]=A*1.4,p[F*2+1]=D*.45,f[F*4]=a;const H=Zn(k,l,c,3.8);g.set(H.indices,F*4),v.set(H.weights,F*4)}}const d=new Uint16Array(s*o*6);let M=0;for(let _=0;_<s;_++)for(let A=0;A<o;A++){const b=_*(o+1)+A,S=(_+1)*(o+1)+A,E=(_+1)*(o+1)+(A+1),y=_*(o+1)+(A+1);d[M++]=b,d[M++]=S,d[M++]=E,d[M++]=b,d[M++]=E,d[M++]=y}const w=new Gt;return w.setAttribute("position",new q(u,3)),w.setAttribute("uv",new q(p,2)),w.setAttribute("aAnatomyData",new q(f,4)),w.setAttribute("skinIndex",new me(g,4)),w.setAttribute("skinWeight",new Yt(v,4)),w.setIndex(new q(d,1)),w.computeVertexNormals(),w}function ev(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new T(e*.17,1.01,.75),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(lo(i,c,h,[.062,.068,.066,.056,.044,.03,.008],o,a,.72));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let p=1;p<=5;p++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${p}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${p}_b`);s.push(lo(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${p}_a`,`wingFinger_${t}_${p}_b`],[.03,.019,.005],r,l,.58))}return s}function nv(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),p=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(As(o,Math.max(4,Math.floor(a*.5)),(S,E)=>{const y=new T().lerpVectors(new T(e*.3,1.13,.88),f,S);y.z+=.05*Math.sin(S*Math.PI);const x=S<.48?new T().lerpVectors(v,g,S/.48):new T().lerpVectors(g,f,(S-.48)/.52),P=new T().lerpVectors(x,y,E),C=Math.max(0,(S-.45)/.55),R=Math.max(0,(.55-S)/.55),L=1-Math.abs(S-.5)*1.8,D=Be([c,l,r,h],[R,Math.max(0,L),C,(1-S)*.25]);return{pos:P,skin:D,thinness:E*.65}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),d=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),M=i.boneIndexMap.get(`wingFinger_${t}_1_a`),w=i.boneIndexMap.get(`wingFinger_${t}_1_b`),_=new T(e*.32,1.06,.72),A=new T(e*.29,.9,.14),b=new T(e*.26,.82,-.46);s.push(As(o,a,(S,E)=>{const y=E<.5?new T().lerpVectors(_,A,E*2):new T().lerpVectors(A,b,(E-.5)*2),x=E<.5?new T().lerpVectors(f,m,E*2):new T().lerpVectors(m,d,(E-.5)*2),P=S<.45?new T().lerpVectors(_,g,S/.45):new T().lerpVectors(g,f,(S-.45)/.55),C=new T().lerpVectors(y,x,S),R=new T().lerpVectors(P,C,Math.pow(E,.88)),L=Math.sin(S*Math.PI)*Math.pow(E,2.2);R.z+=.19*L,R.y+=.035*Math.sin(S*Math.PI)*Math.sin(E*Math.PI);const D=E<.42?h:E<.78?u:p,B=E<.35?r:E<.72?M:w,k=(1-E)*Math.sin(S*Math.PI)*.6,F=Be([D,B,l,r],[(1-S)*(1-k*.5),S*(1-k*.5),k*.65,k*.35]);return{pos:R,skin:F,thinness:.35+.65*Math.sin(S*Math.PI)*E}}));for(let S=1;S<=5;S++){const E=i.bindWorldPositions.get(`wingFinger_${t}_${S}_a`),y=i.bindWorldPositions.get(`wingFinger_${t}_${S}_b`),x=i.bindWorldPositions.get(`wingFinger_${t}_${S+1}_a`),P=i.bindWorldPositions.get(`wingFinger_${t}_${S+1}_b`),C=i.boneIndexMap.get(`wingFinger_${t}_${S}_a`),R=i.boneIndexMap.get(`wingFinger_${t}_${S}_b`),L=i.boneIndexMap.get(`wingFinger_${t}_${S+1}_a`),D=i.boneIndexMap.get(`wingFinger_${t}_${S+1}_b`),B=S===5?.24:.17;s.push(As(o,a,(k,F)=>{const H=F<.5?new T().lerpVectors(f,E,F*2):new T().lerpVectors(E,y,(F-.5)*2),V=F<.5?new T().lerpVectors(f,x,F*2):new T().lerpVectors(x,P,(F-.5)*2),Y=new T().lerpVectors(H,V,k),j=new T().subVectors(f,Y).normalize(),W=Math.sin(k*Math.PI)*Math.pow(F,2.4);Y.addScaledVector(j,B*W),Y.y+=.028*Math.sin(k*Math.PI)*Math.sin(F*Math.PI);let X;if(F<.25){const O=1-F/.25;X=Be([r,C,L,0],[O,(1-O)*(1-k),(1-O)*k,0])}else{const O=Math.max(0,Math.min(1,(F-.42)/.48));X=Be([C,R,L,D],[(1-k)*(1-O),(1-k)*O,k*(1-O),k*O])}return{pos:Y,skin:X,thinness:.3+.7*Math.sin(k*Math.PI)*Math.pow(F,.7)}}))}return s}function iv(i,t,e){const n=e===0?12:7,s=e===0?8:6,o=t==="L"?1:-1,a=[];return ua.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new T(o*r.rootX,r.rootY,r.rootZ),u=new T(o*r.tipX,r.tipY,r.tipZ);a.push(lo(i,[h,u],[c],[.017,.004],n,s,.55))}),a}function sv(i,t,e){const n=e===0?12:7,s=t==="L"?1:-1,o=[],a=ua.map(p=>new T(s*p.rootX,p.rootY,p.rootZ)),r=ua.map(p=>new T(s*p.tipX,p.tipY,p.tipZ)),l=[1,2,3].map(p=>i.boneIndexMap.get(`pelvicFin_${t}_${p}`)),c=i.boneIndexMap.get("tail_3"),h=new T(s*.1,.54,-1.56),u=[{rA:a[0],tA:r[0],rB:a[1],tB:r[1],iA:l[0],iB:l[1]},{rA:a[1],tA:r[1],rB:a[2],tB:r[2],iA:l[1],iB:l[2]},{rA:a[2],tA:r[2],rB:h,tB:h,iA:l[2],iB:c}];for(const p of u)o.push(As(n,n,(f,g)=>{const v=new T().lerpVectors(p.rA,p.tA,g),m=new T().lerpVectors(p.rB,p.tB,g),d=new T().lerpVectors(v,m,f),M=new T().subVectors(p.rA,d).normalize();d.addScaledVector(M,.042*Math.sin(f*Math.PI)*Math.pow(g,2.1));const w=Be([p.iA,p.iB,0,0],[1-f,f,0,0]);return{pos:d,skin:w,thinness:.4+.55*g}}));return Ve(o)}function ov(i,t){const e=t===0?12:7,n=t===0?8:6,s=[];return ji.forEach((o,a)=>{const r=`tailFin_R_${a+1}`,l=new T(-o.rootX,o.rootY,o.rootZ),c=new T(-o.tipX,o.tipY,o.tipZ);s.push(lo(i,[l,c],[r],[.014,.0038],e,n,.52))}),s}function av(i,t){const e=t===0?12:7,n=[];for(let h=0;h<4;h++){const u=ji[h],p=ji[h+1],f=new T(-u.rootX,u.rootY,u.rootZ),g=new T(-p.rootX,p.rootY,p.rootZ),v=new T(-u.tipX,u.tipY,u.tipZ),m=new T(-p.tipX,p.tipY,p.tipZ),d=i.boneIndexMap.get(`tailFin_R_${h+1}`),M=i.boneIndexMap.get(`tailFin_R_${h+2}`);n.push(As(e,e,(w,_)=>{const A=new T().lerpVectors(f,v,_),b=new T().lerpVectors(g,m,_),S=new T().lerpVectors(A,b,w),E=new T().lerpVectors(f,g,w),y=new T().subVectors(E,S).normalize();S.addScaledVector(y,.046*Math.sin(w*Math.PI)*Math.pow(_,2.15));const x=Be([d,M,0,0],[1-w,w,0,0]);return{pos:S,skin:x,thinness:.45+.55*_}}))}const s=ji[4],o=new T(-s.rootX,s.rootY,s.rootZ),a=new T(-s.tipX,s.tipY,s.tipZ),r=new T(-s.rootX,s.rootY,-4.5),l=i.boneIndexMap.get("tailFin_R_5"),c=i.boneIndexMap.get("tailFinHinge_R");return n.push(As(e,e,(h,u)=>{const p=new T().lerpVectors(o,a,u),f=new T().lerpVectors(p,r,h),g=Be([l,c,0,0],[1-h,h,0,0]);return{pos:f,skin:g,thinness:.45+.5*u}})),Ve(n)}function As(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let p=0;p<=t;p++){const f=p/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),d=p*(i+1)+g;s[d*3]=m.pos.x,s[d*3+1]=m.pos.y,s[d*3+2]=m.pos.z,o[d*2]=v*1.25,o[d*2+1]=f*1.25,a[d*4]=.22,a[d*4+1]=0,a[d*4+2]=.18*m.thinness,a[d*4+3]=m.thinness,r.set(m.skin.indices,d*4),l.set(m.skin.weights,d*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let p=0;p<t;p++)for(let f=0;f<i;f++){const g=p*(i+1)+f,v=(p+1)*(i+1)+f,m=(p+1)*(i+1)+(f+1),d=p*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=d}const u=new Gt;return u.setAttribute("position",new q(s,3)),u.setAttribute("uv",new q(o,2)),u.setAttribute("uv1",new q(o,2)),u.setAttribute("aAnatomyData",new q(a,4)),u.setAttribute("skinIndex",new me(r,4)),u.setAttribute("skinWeight",new Yt(l,4)),u.setIndex(new q(c,1)),u.computeVertexNormals(),u}function rv(i,t){const e=t===0?32:t===1?22:14,n=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],s=n.map(_=>i.boneIndexMap.get(_)),o=n.map(_=>i.bindWorldPositions.get(_)),a=e*2,r=6,l=8,c=new Float32Array(a*r*3),h=new Float32Array(a*r*3),u=new Float32Array(a*r*2),p=new Float32Array(a*r*4),f=new Uint16Array(a*r*4),g=new Float32Array(a*r*4),v=new Uint16Array(a*l*3);let m=0,d=0;for(let _=0;_<e;_++){const A=_/(e-1),b=$.lerp(-3.25,1.48,1-Math.pow(1-A,1.28)),S=hr(b),E=S.point,y=S.tangent,x=S.up,P=.32+.68*Math.sin(Math.pow(A,.74)*Math.PI),C=.078*P,R=.108*P,L=-.028,D=cu(E,i,s,o);for(const B of[1,-1]){const k=B*.004,F=B*C*.62,H=-C*.16,V=hr(b+R*.5).point,Y=hr(b-R*.5).point,j=[V.clone().addScaledVector(x,L).setX(k),Y.clone().addScaledVector(x,L).setX(k),E.clone().addScaledVector(x,L*.85).setX(B*.02*P),E.clone().addScaledVector(y,R*.1).addScaledVector(x,C*.64).setX(k*1.2),E.clone().addScaledVector(y,-R*.4).addScaledVector(x,C).setX(k*1.1),E.clone().addScaledVector(y,-R*.12).addScaledVector(x,C*.42).setX(B*.001)],W=j.map((O,it)=>{const nt=O.clone();if(it>=3){const Z=it===4?1:it===3?.68:.48;nt.x+=F*Z,nt.y+=H*Z}return nt});for(let O=0;O<r;O++){const it=(m+O)*3;c[it]=j[O].x,c[it+1]=j[O].y,c[it+2]=j[O].z,h[it]=W[O].x,h[it+1]=W[O].y,h[it+2]=W[O].z,u[(m+O)*2]=A,u[(m+O)*2+1]=O/r,p[(m+O)*4]=.75,p[(m+O)*4+1]=0,p[(m+O)*4+2]=O===5||O>=3?.96:.72,p[(m+O)*4+3]=0,f.set(D.indices,(m+O)*4),g.set(D.weights,(m+O)*4)}const X=B>0?[[0,2,3],[2,1,4],[2,4,3],[0,3,5],[5,3,4],[5,4,1],[0,5,1],[0,1,2]]:[[0,3,2],[2,4,1],[2,3,4],[0,5,3],[5,4,3],[5,1,4],[0,1,5],[0,2,1]];for(const O of X)v[d++]=m+O[0],v[d++]=m+O[1],v[d++]=m+O[2];m+=r}}const M=new Gt;M.setAttribute("position",new q(c,3)),M.setAttribute("uv",new q(u,2)),M.setAttribute("uv1",new q(u,2)),M.setAttribute("aAnatomyData",new q(p,4)),M.setAttribute("skinIndex",new me(f,4)),M.setAttribute("skinWeight",new Yt(g,4)),M.setIndex(new q(v,1));const w=new q(h,3);return w.name="dorsalVSplit",M.morphAttributes.position=[w],M.computeVertexNormals(),M}function lv(i,t,e,n){const s=i.bindWorldPositions.get(`wingWrist_${t}`),o=s.clone().add(new T(e*.035,.018,.085));return lo(i,[s,o],[`wingWrist_${t}`],[.016,.003],n===0?7:4,n===0?8:6,.8)}function cv(i,t){const e=[],n=[],s=[],o=i.boneIndexMap.get("prostheticCollar"),a=i.boneIndexMap.get("prostheticRod"),r=i.boneIndexMap.get("tail_8"),l=i.boneIndexMap.get("tail_9"),c=i.boneIndexMap.get("tail_10"),h=t===0?20:12,u=[{z:-3.48,y:.125,rOuter:.066,length:.044,boneIdx:o},{z:-3.56,y:.125,rOuter:.062,length:.04,boneIdx:o},{z:-4.34,y:.128,rOuter:.033,length:.032,boneIdx:c}];for(const b of u)e.push(Zs(new T(0,b.y,b.z-b.length*.5),new T(0,b.y,b.z+b.length*.5),b.rOuter,b.rOuter*1.03,h,b.boneIdx));e.push(Zs(new T(.044,.138,-3.6),new T(.048,.142,-3.46),.024,.028,t===0?14:8,o));const p=t===0?16:8;e.push(Jc(new T(.038,.138,-3.52),new T(.02,.138,-4.34),.012,.0085,p,t===0?12:8,[a,l,c])),n.push(Jc(new T(.026,.126,-3.5),new T(.014,.127,-4.35),.014,.009,p,t===0?10:6,[r,l,c]));const f=[],g=[],v=[];ji.forEach((b,S)=>{const E=`tailFin_L_${S+1}`,y=i.boneIndexMap.get(E),x=new T(b.rootX,b.rootY,b.rootZ),P=new T(b.tipX,b.tipY,b.tipZ);f.push(x),g.push(P),v.push(y),n.push(uu(x,P,.0125,.004,t===0?10:6,t===0?10:6,y,y));const C=new T().subVectors(P,x).normalize();e.push(Zs(x.clone(),x.clone().addScaledVector(C,.026),.0155,.0145,t===0?10:6,y)),e.push(Zs(P.clone().addScaledVector(C,-.012),P.clone().addScaledVector(C,.02),.0055,.0018,t===0?8:6,y))});for(let b=1;b<=4;b++){const S=b/5,E=new T().lerpVectors(f[0],g[0],S);e.push(Zs(E.clone().add(new T(0,-.0055,0)),E.clone().add(new T(0,.0055,0)),.006,.006,8,v[0]))}const m=t===0?12:7;for(let b=0;b<4;b++){const S=f[b],E=f[b+1],y=g[b],x=g[b+1],P=v[b],C=v[b+1];s.push(Qc(m,b,(R,L)=>{const D=new T().lerpVectors(S,y,L),B=new T().lerpVectors(E,x,L),k=new T().lerpVectors(D,B,R),F=new T().lerpVectors(S,E,R),H=new T().subVectors(F,k).normalize();k.addScaledVector(H,.046*Math.sin(R*Math.PI)*Math.pow(L,2.15));const V=Be([P,C,0,0],[1-R,R,0,0]);return{pos:k,skin:V}}))}const d=f[4],M=g[4],w=new T(d.x,d.y,-4.5),_=v[4],A=i.boneIndexMap.get("tailFinHinge_L");return s.push(Qc(m,4,(b,S)=>{const E=new T().lerpVectors(d,M,S),y=new T().lerpVectors(E,w,b),x=Be([_,A,0,0],[1-b,b,0,0]);return{pos:y,skin:x}})),{bronzeHardwareGeometry:Ve(e),ironStrutsGeometry:Ve(n),scalePasteMembraneGeometry:Ve(s)}}function Qc(i,t,e){const n=(i+1)*(i+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let p=0;p<=i;p++){const f=p/i;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),d=p*(i+1)+g;s[d*3]=m.pos.x,s[d*3+1]=m.pos.y,s[d*3+2]=m.pos.z,o[d*2]=(t+v)*.45,o[d*2+1]=f*1.2,a[d*4]=.55,a[d*4+3]=.25,r.set(m.skin.indices,d*4),l.set(m.skin.weights,d*4)}}const c=new Uint16Array(i*i*6);let h=0;for(let p=0;p<i;p++)for(let f=0;f<i;f++){const g=p*(i+1)+f,v=(p+1)*(i+1)+f,m=(p+1)*(i+1)+(f+1),d=p*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=d}const u=new Gt;return u.setAttribute("position",new q(s,3)),u.setAttribute("uv",new q(o,2)),u.setAttribute("uv1",new q(o,2)),u.setAttribute("aAnatomyData",new q(a,4)),u.setAttribute("skinIndex",new me(r,4)),u.setAttribute("skinWeight",new Yt(l,4)),u.setIndex(new q(c,1)),u.computeVertexNormals(),u}function Zs(i,t,e,n,s,o){return uu(i,t,e,n,3,s,o,o)}function uu(i,t,e,n,s,o,a,r){const c=new T().subVectors(t,i).clone().normalize();let h=new T(0,1,0);Math.abs(c.dot(h))>.92&&(h=new T(0,0,1));const u=h.clone().addScaledVector(c,-h.dot(c)).normalize(),p=new T().crossVectors(u,c).normalize(),f=(s+1)*(o+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),d=new Uint16Array(f*4),M=new Float32Array(f*4);for(let b=0;b<=s;b++){const S=b/s,E=new T().lerpVectors(i,t,S),y=$.lerp(e,n,S),x=b===0||b===s?.35:1;for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=E.clone().addScaledVector(p,y*x*Math.sin(R)).addScaledVector(u,y*x*Math.cos(R)),D=b*(o+1)+P;g[D*3]=L.x,g[D*3+1]=L.y,g[D*3+2]=L.z,v[D*2]=S,v[D*2+1]=C;const B=Be([a,r,0,0],[1-S,S,0,0]);d.set(B.indices,D*4),M.set(B.weights,D*4)}}const w=new Uint16Array(s*o*6);let _=0;for(let b=0;b<s;b++)for(let S=0;S<o;S++){const E=b*(o+1)+S,y=(b+1)*(o+1)+S,x=(b+1)*(o+1)+(S+1),P=b*(o+1)+(S+1);w[_++]=E,w[_++]=y,w[_++]=x,w[_++]=E,w[_++]=x,w[_++]=P}const A=new Gt;return A.setAttribute("position",new q(g,3)),A.setAttribute("uv",new q(v,2)),A.setAttribute("uv1",new q(v,2)),A.setAttribute("aAnatomyData",new q(m,4)),A.setAttribute("skinIndex",new me(d,4)),A.setAttribute("skinWeight",new Yt(M,4)),A.setIndex(new q(w,1)),A.computeVertexNormals(),A}function Jc(i,t,e,n,s,o,a){const r=new T().subVectors(t,i).normalize(),l=new T(0,1,0).addScaledVector(r,-r.y).normalize(),c=new T().crossVectors(l,r).normalize(),h=(s+1)*(o+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4);for(let w=0;w<=s;w++){const _=w/s,A=new T().lerpVectors(i,t,_),b=$.lerp(e,n,_),S=Math.max(0,1-_*2),E=Math.max(0,(_-.5)*2),y=1-S-E,x=Be([a[0],a[1],a[2],0],[S,y,E,0]);for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=A.clone().addScaledVector(c,b*Math.sin(R)).addScaledVector(l,b*Math.cos(R)),D=w*(o+1)+P;u[D*3]=L.x,u[D*3+1]=L.y,u[D*3+2]=L.z,p[D*2]=_,p[D*2+1]=C,g.set(x.indices,D*4),v.set(x.weights,D*4)}}const m=new Uint16Array(s*o*6);let d=0;for(let w=0;w<s;w++)for(let _=0;_<o;_++){const A=w*(o+1)+_,b=(w+1)*(o+1)+_,S=(w+1)*(o+1)+(_+1),E=w*(o+1)+(_+1);m[d++]=A,m[d++]=b,m[d++]=S,m[d++]=A,m[d++]=S,m[d++]=E}const M=new Gt;return M.setAttribute("position",new q(u,3)),M.setAttribute("uv",new q(p,2)),M.setAttribute("uv1",new q(p,2)),M.setAttribute("aAnatomyData",new q(f,4)),M.setAttribute("skinIndex",new me(g,4)),M.setAttribute("skinWeight",new Yt(v,4)),M.setIndex(new q(m,1)),M.computeVertexNormals(),M}function hv(){const i=F1(),t=z1(),e=new qn;e.name="Toothless_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s={},o={};for(const r of[0,1,2]){const l=new qn;l.name=`Toothless_LOD${r}`;const c=V1(i,r),h=$1(i,r),u=tv(i,r),p=cv(i,r),f=Ve([c,h.jawSkinGeometry,u.wingSparsSkinGeometry]),g=Ve([h.clawsGeometry,u.alulaClawsGeometry]),v=(D,B,k,F=!0,H=!0)=>{const V=new $h(B,k);return V.name=`${D}_LOD${r}`,V.castShadow=F,V.receiveShadow=H,V.frustumCulled=!1,V.bind(i.skeleton,new ie),V},m=v("BodyAndHeadSkin",f,t.skinMaterial),d=v("FlightPatagiumMembranes",u.wingMembraneGeometry,t.wingMembraneMaterial),M=v("VSplittingDorsalSpines",u.dorsalSpinesGeometry,t.skinMaterial);n.push(M);const w=v("OralGums",h.oralGumsGeometry,t.oralGumMaterial,!1,!0),_=v("RetractableTeeth",h.teethGeometry,t.teethMaterial,!0,!0),A=v("ArticulatedTongue",h.tongueGeometry,t.tongueMaterial,!1,!0),b=v("LightReactiveIrises",h.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),S=v("RefractiveCorneas",h.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1);S.renderOrder=2;const E=v("ObsidianClaws",g,t.clawMaterial,!0,!0),y=v("ProstheticBronzeLinkage",p.bronzeHardwareGeometry,t.prostheticBronzeMaterial),x=v("ProstheticIronStruts",p.ironStrutsGeometry,t.prostheticIronMaterial),P=v("ProstheticScalePasteFin",p.scalePasteMembraneGeometry,t.prostheticPasteMaterial),C=[m,d,M,w,_,A,b,S,E,y,x,P];let R=0,L=0;for(const D of C){l.add(D);const B=D.geometry.getIndex();R+=B?B.count/3:D.geometry.getAttribute("position").count/3,L+=D.geometry.getAttribute("position").count}l.visible=r===0,e.add(l),s[r]=l,o[r]={lod:r,triangles:Math.round(R),vertices:L,subMeshCount:C.length}}const a={rootGroup:e,rig:i,materials:t,lodGroups:s,dorsalSpineMeshes:n,lodStats:o,activeLOD:0,autoLOD:!1,setActiveLOD(r){a.activeLOD=r;for(const l of[0,1,2])s[l].visible=l===r},updateAutoLOD(r){if(!a.autoLOD)return a.activeLOD;const l=r<9.5?0:r<20?1:2;return l!==a.activeLOD&&a.setActiveLOD(l),a.activeLOD}};return a}function fo(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},r=i[0].morphTargetsRelative,l=new Gt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let p=0;p<i.length;++p){const f=i[p].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[p].attributes.position.count}l.setIndex(u)}for(const h in o){const u=th(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][p]);const g=th(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function th(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const a=new t(o),r=new q(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<e;g++){const v=h.getComponent(p,g);r.setComponent(p+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(r.gpuType=s),r}const Ms={"golden-hour":{id:"golden-hour",label:"Golden Hour",subtitle:"Warm Berk Sunset",sunElevationDeg:11.5,sunAzimuthDeg:-140,zenithColor:1517638,horizonSunColor:14255183,horizonAntiSunColor:4938872,mieHaloColor:16754776,mieStrength:.62,mieExponent:6.5,sunLightColor:16760698,sunLightIntensity:3.75,rimLightColor:7645928,rimLightIntensity:1.55,hemiSkyColor:9811164,hemiGroundColor:3550505,hemiIntensity:1.12,cloudDarkColor:2763581,cloudLitColor:15899230,cloudCoverage:.46,mistDensity:.0021,exposure:1.14,nightFactor:0,auroraIntensity:0,waterDeepColor:332061,waterShallowColor:735294,glitterIntensity:4.8},"clear-day":{id:"clear-day",label:"Clear Day",subtitle:"Crisp Nordic Sun",sunElevationDeg:44,sunAzimuthDeg:-124,zenithColor:1854342,horizonSunColor:10208486,horizonAntiSunColor:8564696,mieHaloColor:16774110,mieStrength:.26,mieExponent:8,sunLightColor:16774630,sunLightIntensity:3.55,rimLightColor:10143989,rimLightIntensity:1.65,hemiSkyColor:11852026,hemiGroundColor:3490360,hemiIntensity:1.38,cloudDarkColor:6980254,cloudLitColor:16777215,cloudCoverage:.26,mistDensity:.0013,exposure:1.1,nightFactor:0,auroraIntensity:0,waterDeepColor:268848,waterShallowColor:808032,glitterIntensity:3.6},"dawn-dusk":{id:"dawn-dusk",label:"Dawn / Dusk",subtitle:"Alpenglow Twilight",sunElevationDeg:4.8,sunAzimuthDeg:-148,zenithColor:1448248,horizonSunColor:14184040,horizonAntiSunColor:4081256,mieHaloColor:16749688,mieStrength:.58,mieExponent:5.8,sunLightColor:16752260,sunLightIntensity:2.85,rimLightColor:8295650,rimLightIntensity:1.65,hemiSkyColor:9212620,hemiGroundColor:2761776,hemiIntensity:1.15,cloudDarkColor:2302008,cloudLitColor:15367800,cloudCoverage:.42,mistDensity:.0024,exposure:1.18,nightFactor:.22,auroraIntensity:0,waterDeepColor:396828,waterShallowColor:1190972,glitterIntensity:4.2},"misty-overcast":{id:"misty-overcast",label:"Misty Cloud",subtitle:"Nordic Sea Fog",sunElevationDeg:31,sunAzimuthDeg:-130,zenithColor:4411744,horizonSunColor:9280166,horizonAntiSunColor:7767444,mieHaloColor:13161694,mieStrength:.18,mieExponent:3.5,sunLightColor:14477039,sunLightIntensity:2.05,rimLightColor:10796760,rimLightIntensity:1.85,hemiSkyColor:11978452,hemiGroundColor:3028792,hemiIntensity:1.55,cloudDarkColor:4543072,cloudLitColor:10135733,cloudCoverage:.86,mistDensity:.0042,exposure:1.16,nightFactor:0,auroraIntensity:0,waterDeepColor:529950,waterShallowColor:1456188,glitterIntensity:1.25},"starlit-night":{id:"starlit-night",label:"Starlit Night",subtitle:"Moon & Boreal Glow",sunElevationDeg:29,sunAzimuthDeg:-136,zenithColor:330520,horizonSunColor:1452614,horizonAntiSunColor:858670,mieHaloColor:7250652,mieStrength:.3,mieExponent:9,sunLightColor:11062527,sunLightIntensity:2.35,rimLightColor:6071538,rimLightIntensity:1.95,hemiSkyColor:4220052,hemiGroundColor:1317926,hemiIntensity:1.08,cloudDarkColor:594207,cloudLitColor:2901608,cloudCoverage:.24,mistDensity:.0018,exposure:1.26,nightFactor:1,auroraIntensity:.65,waterDeepColor:132880,waterShallowColor:466476,glitterIntensity:3.4},"stormy-squall":{id:"stormy-squall",label:"Storm Squall",subtitle:"Dark North Gale",sunElevationDeg:18,sunAzimuthDeg:-138,zenithColor:1317926,horizonSunColor:4938088,horizonAntiSunColor:2634818,mieHaloColor:9348280,mieStrength:.28,mieExponent:4.5,sunLightColor:11979484,sunLightIntensity:2.45,rimLightColor:7313604,rimLightIntensity:1.8,hemiSkyColor:6979736,hemiGroundColor:1844264,hemiIntensity:1.25,cloudDarkColor:1383719,cloudLitColor:6189186,cloudCoverage:.92,mistDensity:.0036,exposure:1.18,nightFactor:0,auroraIntensity:0,waterDeepColor:265492,waterShallowColor:797746,glitterIntensity:2.1}},ai=`
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
`,uv=`
  varying vec3 vWorldDir;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldDir = normalize(position);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,dv=`
  ${ai}
  varying vec3 vWorldDir;

  void main() {
    vec3 col = evalPhysicalSky(vWorldDir, uTime, true);
    gl_FragColor = vec4(col, 1.0);
  }
`;function pv(i,t,e="golden-hour"){const n=new T,s=new Lt,o=Ms[e],a={uSunDir:{value:new T(-.52,.24,-.82).normalize()},uSunColor:{value:new Lt(o.sunLightColor)},uZenithColor:{value:new Lt(o.zenithColor)},uHorizonSunColor:{value:new Lt(o.horizonSunColor)},uHorizonAntiColor:{value:new Lt(o.horizonAntiSunColor)},uMieColor:{value:new Lt(o.mieHaloColor)},uMieStrength:{value:o.mieStrength},uMieExponent:{value:o.mieExponent},uCloudDarkColor:{value:new Lt(o.cloudDarkColor)},uCloudLitColor:{value:new Lt(o.cloudLitColor)},uCloudCoverage:{value:o.cloudCoverage},uMistDensity:{value:o.mistDensity},uNightFactor:{value:o.nightFactor},uAuroraIntensity:{value:o.auroraIntensity},uWaterDeepColor:{value:new Lt(o.waterDeepColor)},uWaterShallowColor:{value:new Lt(o.waterShallowColor)},uGlitterIntensity:{value:o.glitterIntensity},uIsEnvBake:{value:0},uTime:{value:0}},r=new ha(3900,64,44),l=new tn({name:"NordicPhysicalSky",vertexShader:uv,fragmentShader:dv,uniforms:a,side:Sn,depthWrite:!1,depthTest:!1}),c=new Fe(r,l);c.renderOrder=-100,c.frustumCulled=!1,t.add(c);const h=new gc(o.sunLightColor,o.sunLightIntensity);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=1,h.shadow.camera.far=54;const u=13.8;h.shadow.camera.left=-u,h.shadow.camera.right=u,h.shadow.camera.top=u,h.shadow.camera.bottom=-u,h.shadow.bias=-4e-4,h.shadow.normalBias=.018,t.add(h),t.add(h.target);const p=new gc(o.rimLightColor,o.rimLightIntensity);p.position.set(5.8,4.4,5.4),t.add(p);const f=new hp(o.hemiSkyColor,o.hemiGroundColor,o.hemiIntensity);t.add(f);const g=new gl(o.horizonAntiSunColor,o.mistDensity);t.fog=g;const v=new la,m=new Fe(new ha(50,32,20),l);v.add(m);const d=new tl(i);d.compileEquirectangularShader();let M=null,w=o.sunAzimuthDeg;function _(S){const E=d.fromScene(v,.015);M&&M.dispose(),M=E,S.environment=M.texture}function A(S,E){const y=$.degToRad($.clamp(S,1.5,82)),x=$.degToRad(E);n.set(Math.cos(y)*Math.sin(x),Math.sin(y),Math.cos(y)*Math.cos(x)).normalize(),a.uSunDir.value.copy(n),h.position.copy(h.target.position).addScaledVector(n,20)}const b={skyMesh:c,sunLight:h,rimLight:p,hemiLight:f,sunDirection:n,sunColor:s,activePreset:e,sharedUniforms:a,applyPreset(S,E,y){const x=Ms[S];b.activePreset=S,w=x.sunAzimuthDeg,a.uZenithColor.value.setHex(x.zenithColor),a.uHorizonSunColor.value.setHex(x.horizonSunColor),a.uHorizonAntiColor.value.setHex(x.horizonAntiSunColor),a.uMieColor.value.setHex(x.mieHaloColor),a.uMieStrength.value=x.mieStrength,a.uMieExponent.value=x.mieExponent,a.uCloudDarkColor.value.setHex(x.cloudDarkColor),a.uCloudLitColor.value.setHex(x.cloudLitColor),a.uCloudCoverage.value=x.cloudCoverage,a.uMistDensity.value=x.mistDensity,a.uNightFactor.value=x.nightFactor,a.uAuroraIntensity.value=x.auroraIntensity,a.uWaterDeepColor.value.setHex(x.waterDeepColor),a.uWaterShallowColor.value.setHex(x.waterShallowColor),a.uGlitterIntensity.value=x.glitterIntensity,s.setHex(x.sunLightColor),a.uSunColor.value.copy(s),h.color.copy(s),h.intensity=x.sunLightIntensity,p.color.setHex(x.rimLightColor),p.intensity=x.rimLightIntensity,f.color.setHex(x.hemiSkyColor),f.groundColor.setHex(x.hemiGroundColor),f.intensity=x.hemiIntensity,g.color.setHex(x.horizonAntiSunColor).lerp(new Lt(x.horizonSunColor),.35),g.density=x.mistDensity,E.toneMappingExposure=x.exposure,A(x.sunElevationDeg,x.sunAzimuthDeg),_(y)},setMistDensity(S,E){const y=$.clamp(S,5e-4,.0075);a.uMistDensity.value=y,g.density=y},setSunElevation(S,E,y){A(S,w),_(y)},update(S,E,y){a.uTime.value=S,y&&c.position.copy(y),E&&(h.target.position.copy(E),h.position.copy(E).addScaledVector(n,20),h.target.updateMatrixWorld())}};return b.applyPreset(e,i,t),b}const Js={waveAmplitude:1,waveSpeed:1,seaChoppiness:.48},fv=`
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
`,mv=`
  ${ai}

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
`;function gv(i=5600,t=300,e=256){const n=(t+1)*(e+1),s=new Float32Array(n*3),o=new Float32Array(n*2);for(let c=0;c<=t;c++){const h=c/t,u=i*Math.pow(h,2.3);for(let p=0;p<=e;p++){const g=p/e*Math.PI*2,v=Math.cos(g)*u,m=Math.sin(g)*u,d=c*(e+1)+p;s[d*3]=v,s[d*3+1]=0,s[d*3+2]=m,o[d*2]=v*.02,o[d*2+1]=m*.02}}const a=new Uint32Array(t*e*6);let r=0;for(let c=0;c<t;c++)for(let h=0;h<e;h++){const u=c*(e+1)+h,p=(c+1)*(e+1)+h,f=(c+1)*(e+1)+(h+1),g=c*(e+1)+(h+1);a[r++]=u,a[r++]=f,a[r++]=p,a[r++]=u,a[r++]=g,a[r++]=f}const l=new Gt;return l.setAttribute("position",new q(s,3)),l.setAttribute("uv",new q(o,2)),l.setIndex(new q(a,1)),l.computeBoundingSphere(),l}function vv(i,t,e){const n={...Js,...e},s=[];for(let c=0;c<24;c++){const h=i[c];h?s.push(new ke(h.x,h.z,h.radius,h.boost??0)):s.push(new ke(9999,9999,0,0))}const o={...t,uWaveAmp:{value:n.waveAmplitude},uWaveSpeed:{value:n.waveSpeed},uChoppiness:{value:n.seaChoppiness},uStackCenters:{value:s}},a=gv(5600,300,256),r=new tn({name:"NorthSeaPhysicalOcean",vertexShader:fv,fragmentShader:mv,uniforms:o,transparent:!0,depthWrite:!0}),l=new Fe(a,r);return l.position.y=-11.5,l.renderOrder=2,l.frustumCulled=!1,l.name="NorthSeaOcean",{mesh:l,params:n,setOceanParams(c){Object.assign(n,c),o.uWaveAmp.value=n.waveAmplitude,o.uWaveSpeed.value=n.waveSpeed,o.uChoppiness.value=n.seaChoppiness},update(c){o.uTime.value=c}}}const Qe=-11.5,_v=-25.5,ui=-44;function xv(i){return i-Math.floor(i)}function kt(i,t){return xv(Math.sin(i*127.1+t*311.7)*43758.5453123)}function du(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,a=s*s*s*(s*(s*6-15)+10),r=o*o*o*(o*(o*6-15)+10),l=kt(e,n),c=kt(e+1,n),h=kt(e,n+1),u=kt(e+1,n+1);return l+(c-l)*a+(h-l)*r+(l-c-h+u)*a*r}function He(i,t,e=4){let n=0,s=.5,o=1;for(let a=0;a<e;a++)n+=s*du(i*o,t*o),o*=2.03,s*=.5;return n}function ce(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Je(i,t,e=3){let n=0,s=1,o=.54,a=1,r=0;for(let l=0;l<e;l++){const c=du(i*a,t*a)*2-1,h=1-(Math.sqrt(c*c+.018)-.134)/.88,u=Math.max(0,Math.min(1,h));n+=o*u*s,r+=o,s=.48+.52*u,a*=2.07,o*=.48}return n/Math.max(1e-4,r)}function Us(i,t,e,n){if(i<=.4)return i;const s=(i+t)/e,o=Math.floor(s),a=s-o,r=.34*Math.pow(a,1.35)+.66*ce(.66,.96,a),l=(o+r)*e-t;return $.lerp(i,l,n)}function Cl(i,t,e,n,s,o){const a=Math.max(0,Math.min(1,e)),r=ce(.34,.76,He(n*.065+o*1.7,s*.065-o*1.3,2)),l=.38+.18*(He(n*.09-o,s*.09+o,2)-.5),c=ce(0,.44,a),h=ce(.56,1,a),u=c*l+h*(1-l),p=Math.pow(a,.78),f=$.lerp(p,u,r*.72),g=Je(n*.14+o*2.1,s*.14-o*1.9,3),v=He(n*.28-o,s*.28+o*2.3,2)-.5,m=Math.sin(Math.min(1,a)*Math.PI),d=((g-.46)*3.2+v*1.35)*m,M=$.lerp(i,t,f)+d;return Math.min(i+.12,Math.max(t-1.2,M))}function Pl(i,t,e,n){const s=(Je(i*.16+n,t*.16-n,2)-.48)*.68+(He(i*.32-n*1.3,t*.32+n*.7,2)-.5)*.28,o=i*.024-t*.019+(He(i*.045+n,t*.045,2)-.5)*1.4,a=(e+o)/2.65,r=a-Math.floor(a),l=(ce(.1,.36,r)-r)*.34,c=Math.exp(-Math.pow((e-(Qe-.45))/1.9,2))*.62;return{radialOffset:s+l+c,verticalLedgeOffset:l*.42}}const Wn={position:new T(4.45,0,.22),yaw:-.14},Gn={position:new T(-4.45,0,-.22),yaw:.16};function Pi(i,t){const e=Math.hypot((i-4.45)/2.45,(t-.22)/1.95),n=Math.hypot((i+4.45)/2.45,(t+.22)/1.95),s=Math.min(e,n),o=ce(.84,1.32,s),a=ce(.72,1.18,s),r=(He(i*.065+3.1,t*.065-2.4,3)-.5)*5.6+(Je(i*.14-1.7,t*.14+4.3,2)-.48)*2.3,l=(He(i*.065-5.2,t*.065+1.9,3)-.5)*4.8+(Je(i*.15+2.9,t*.15-3.1,2)-.48)*2.1,c=i+a*r,h=t+a*l,u=Math.atan2(h+4.2,c),p=t>1.2?.66:t<-8?1.52:1+(-t+1.2)*.046,f=1+.19*Math.sin(u*2-.42)+.14*Math.sin(u*3+.72)+.1*Math.cos(u*5-1.15)+.06*Math.sin(u*7+.4),g=c/(15.8*f),v=(h+4.2)/(11.2*p*f);let m=Math.sqrt(g*g+v*v);if(t>.6){const k=Math.exp(-Math.pow((i-4.85)/2.65,2)-Math.pow((t-3.9)/3.4,2))*.21,F=Math.exp(-Math.pow((i+5.15)/2.75,2)-Math.pow((t-3.6)/3.2,2))*.19,H=Math.exp(-Math.pow((i-.35)/1.75,2)-Math.pow((t-2.9)/2.8,2))*.17,V=Math.exp(-Math.pow((i-10.6)/2.4,2)-Math.pow((t-2.2)/3.2,2))*.18,Y=Math.exp(-Math.pow((i+9.2)/1.9,2)-Math.pow((t-2.4)/2.9,2))*.15,j=(Je(i*.26+7.4,t*.26-3.8,2)-.48)*.11*ce(1.1,2.4,t);m+=-k-F+H-V+Y+j}let d=0;if(t<-3.5){const k=(c+17.5)/15.4,F=(h+25)/18.8,H=Math.sqrt(k*k+F*F),V=H*(.92+.16*He(i*.065+2.2,t*.065-1.4,3)),Y=Math.max(0,1-Math.abs(m-V)/.52);m=Math.min(m,V)-.11*Y*Y;const j=Math.pow(Math.max(0,1-H/.96),.82),W=$.clamp(.62-k*.42-F*.25,.22,1.18),X=j*W*(8.4+3.2*Je(i*.055+5.1,t*.055-3.2,3));d=Us(X,i*.04-t*.03,3.6,.58)}if(i>9&&t<-6.5){const k=(i-18.2)/6.2,F=(t+19.2)/7.2,H=Math.exp(-(k*k+F*F))*.36;m+=H}const M=1-.78*ce(-.4,4.2,t)*(1-ce(4.2,11.8,Math.abs(i))),w=((He(i*.095+4.2,t*.095-1.7,3)-.47)*1.45+(Je(i*.16-2.3,t*.16+6.1,2)-.46)*.62)*o*M,_=Math.max(0,(-t-6.2)/24),A=Math.pow(Math.min(1.35,_),1.38),b=ce(39,8,Math.abs(i+3.2)),S=Je(i*.052+1.8,t*.048-2.7,3),E=A*b*(7.8+8.6*S+(He(i*.08-3.4,t*.08+1.9,2)-.5)*3.2),y=Us(E,i*.05+t*.03,4.2,.64),x=w+Math.max(y,d*o),C=.77+(.11*(Je(i*.13+3.7,t*.13-2.1,2)-.48)+.07*(He(Math.cos(u)*2.4+2.1,Math.sin(u)*2.4-1.3,3)-.5))*a;if(m<=C)return x;const R=ce(C,1.54,m),L=ce(1.42,2.24,m),D=Qe-1.85,B=Cl(x,D,R,i,t,7.3);return $.lerp(B,ui,L)}function Fi(i){const t=Math.cos(i.rotRad),e=Math.sin(i.rotRad),n=i.summitOffset?.dx??i.rx*.24*Math.sin(i.seed),s=i.summitOffset?.dz??i.rz*-.2*Math.cos(i.seed*1.3),o=i.seed*1.37,a=Math.cos(o),r=Math.sin(o);return(l,c)=>{const h=l-i.cx,u=c-i.cz,p=h*t-u*e,f=h*e+u*t,g=p+(He(p*.038+i.seed,f*.038-i.seed,3)-.5)*(i.rx*.4)+(Je(p*.095+i.seed,f*.095,2)-.48)*(i.rx*.14),v=f+(He(p*.038-i.seed,f*.038+i.seed,3)-.5)*(i.rz*.4)+(Je(p*.095-i.seed,f*.095+2.1,2)-.48)*(i.rz*.14),m=Math.atan2(v,g),d=1+.19*Math.sin(m*2+i.seed)+.13*Math.cos(m*3-i.seed*1.5)+.08*Math.sin(m*5+.9);let w=Math.sqrt(Math.pow(g/(i.rx*d),2)+Math.pow(v/(i.rz*d),2));const _=Math.sqrt(Math.pow((g-n)/(i.rx*d*.98),2)+Math.pow((v-s)/(i.rz*d*.98),2)),A=(p*a+f*r)/Math.max(8,i.rx),b=$.clamp(.58+.46*A,.24,1.22),S=Math.pow(Math.max(0,1-Math.min(1,_/1.02)),.86),E=Math.pow(Math.max(0,1-Math.min(1,_/.78)),1.65);let y=i.peakY*(.22+.52*S*b+.34*E);if(i.secondaryLobe){const W=i.secondaryLobe,X=g-W.dx,O=v-W.dz,it=Math.atan2(O,X),nt=1+.16*Math.cos(it*2-i.seed)+.11*Math.sin(it*3+i.seed),Z=Math.sqrt(Math.pow(X/(W.rx*nt),2)+Math.pow(O/(W.rz*nt),2)),Q=W.lowSaddle?.44:.36,G=Math.max(0,Math.min(1,.5+.5*(Z-w)/Q));w=Z*(1-G)+w*G-Q*G*(1-G);const ot=i.peakY*W.peakScale,gt=Math.pow(Math.max(0,1-Math.min(1,Z/.98)),.88),tt=Math.pow(Math.max(0,1-Math.min(1,Z/.72)),1.6),U=ot*(.24+.48*gt+.34*tt),Mt=W.lowSaddle?Math.sin(G*Math.PI)*.46:Math.sin(G*Math.PI)*.24;y=$.lerp(U,y,G)*(1-Mt)}const x=1-ce(.58,1.04,w),P=Je(p*.036+i.seed*1.3,f*.044-i.seed*.9,3),C=Math.pow(He(p*.048-i.seed*.7,f*.048+i.seed*1.4,3),1.45),R=y+(P-.42)*(i.peakY*.34)*(.3+.7*x)+(C-.36)*(i.peakY*.16)*x;let L=Us(R,p*.035*a+f*.035*r,Math.max(3.6,i.peakY*.21),.56),D=0;if(i.carveRiverToEast&&p>-i.rx*.55){const W=Math.sin(p*.11+.35)*1.85,X=Math.abs(f-W),O=1-ce(1.35,6.4,X);if(O>.001){const nt=11.2-ce(-i.rx*.45,10.6,p)*3.1;L=$.lerp(L,Math.min(L,nt),O)}const it=Math.exp(-Math.pow((f-W)/7.8,2));if(it>.02&&p>7.5){const nt=10.6-1.15*it;D=ce(nt-.6,nt+.9,p)*it,w=Math.max(w,.72+ce(nt-.2,nt+1.15,p)*.72*it)}}const k=.68+(.1*(Je(p*.11+i.seed,f*.11-i.seed,2)-.48)+.08*(He(Math.cos(m)*2.2+i.seed,Math.sin(m)*2.2-i.seed,2)-.5))*(1-D*.7);if(w<=k)return L;const F=$.lerp(1.06,k+.09,D),H=ce(k,F,w),V=ce($.lerp(1,k+.07,D),$.lerp(1.36,k+.24,D),w),Y=$.lerp(Qe-1.85,Qe-5.8,D),j=D>.35?$.lerp(L,Y,Math.pow(H,.65)):Cl(L,Y,H,l,c,i.seed);return $.lerp(j,ui,V)}}function Rl(i){return(t,e)=>{const n=t-i.cx,s=e-i.cz,o=n+(He(n*.035+i.seed,s*.035-i.seed,3)-.5)*(i.ringRadius*.28)+(Je(n*.09+i.seed,s*.09,2)-.48)*3.4,a=s+(He(n*.035-i.seed,s*.035+i.seed,3)-.5)*(i.ringRadius*.28)+(Je(n*.09-i.seed,s*.09+1.7,2)-.48)*3.4,r=Math.hypot(o,a),l=Math.atan2(a,o),c=i.openAngleRad+Math.PI;let h=l-c;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const u=Math.abs(h),p=1-ce(i.arcHalfSpanRad*.72,i.arcHalfSpanRad*1.08,u),f=i.ringHalfWidth*(.7+.42*p+.16*Math.sin(h*2.6+i.seed)),g=r-i.ringRadius*1.06,v=g>=0?f*.68:f*1.28,d=Math.abs(g)/Math.max(3.5,v)+(1-p)*1.35,M=.7+.26*Math.cos(h*2.5+i.seed*.7)+.15*Math.sin(h*4.2-i.seed),w=Je(n*.042+i.seed,s*.042-i.seed,3),_=g<0?Math.pow(Math.max(0,1-Math.min(1,d/.96)),1.48):Math.pow(Math.max(0,1-Math.min(1,d/.84)),.85),A=i.peakY*(.24+.76*_)*(.56+.44*p)*M+(w-.42)*(i.peakY*.28)*p,b=Us(A,n*.03-s*.025,Math.max(3.4,i.peakY*.22),.52),S=(1-ce(i.ringRadius*.55,i.ringRadius*1.15,r))*.65,E=$.lerp(ui,-16.2,S),y=.56+.11*(Je(n*.1+i.seed,s*.1-i.seed,2)-.48);if(d<=y)return b;const x=ce(y,1.05,d),P=ce(.98,1.36,d),C=Qe-1.85,R=Cl(b,C,x,t,e,i.seed);return $.lerp(R,E,P)}}const xi=Fi({cx:-66,cz:-32,rx:21.5,rz:25,peakY:18.4,summitOffset:{dx:-3.5,dz:-7.5},seed:5.7,rotRad:.18,secondaryLobe:{dx:-24.5,dz:-11.5,rx:17.5,rz:19.5,peakScale:1.24},carveRiverToEast:!0}),pu=Rl({cx:88,cz:36,ringRadius:28,ringHalfWidth:12.6,peakY:16.8,openAngleRad:-2.45,arcHalfSpanRad:1.92,seed:22.9}),fu=Fi({cx:88,cz:-56,rx:25,rz:31.5,peakY:22.4,summitOffset:{dx:4.2,dz:-6},seed:14.3,rotRad:-.34,secondaryLobe:{dx:-18,dz:33.5,rx:15,rz:17,peakScale:.74,lowSaddle:!0}}),mu=Fi({cx:-124,cz:-86,rx:33,rz:24.5,peakY:25.5,summitOffset:{dx:-7.5,dz:3},seed:37.8,rotRad:.42,secondaryLobe:{dx:21,dz:-10.5,rx:16.5,rz:15,peakScale:.72}}),gu=Fi({cx:-42,cz:-96,rx:17.5,rz:19.5,peakY:20.2,seed:31.6,rotRad:-.28,secondaryLobe:{dx:-19.5,dz:14,rx:12.5,rz:14,peakScale:.74}}),Mv=Fi({cx:36,cz:-108,rx:19.5,rz:22,peakY:22.8,seed:44.1,rotRad:.52,secondaryLobe:{dx:18.5,dz:-14.5,rx:13.5,rz:15,peakScale:.78}}),wv=Rl({cx:-144,cz:78,ringRadius:38,ringHalfWidth:15.5,peakY:23.8,openAngleRad:.62,arcHalfSpanRad:1.84,seed:58.4}),yv=Fi({cx:168,cz:122,rx:38,rz:32,peakY:29.5,seed:71.2,rotRad:-.48,secondaryLobe:{dx:-36,dz:-18,rx:24,rz:22,peakScale:.76}}),bv=Fi({cx:-206,cz:-96,rx:42,rz:46,peakY:36.5,seed:83.9,rotRad:-.19,secondaryLobe:{dx:28,dz:34,rx:23,rz:25,peakScale:.7}}),Sv=Rl({cx:-8,cz:-222,ringRadius:52,ringHalfWidth:19.5,peakY:33.5,openAngleRad:1.52,arcHalfSpanRad:1.8,seed:96.3}),Av=Fi({cx:-18,cz:236,rx:34,rz:26,peakY:25.5,seed:109.7,rotRad:.15,secondaryLobe:{dx:38,dz:-12,rx:22,rz:18,peakScale:.78}}),il=[{name:"WestWaterfallDoubleIsland",centerX:-74,centerZ:-36,spanX:112,spanZ:102,gridSegs:168,hasFlora:!0,evalHeight:xi},{name:"StarboardCrescentLagoonAtoll",centerX:88,centerZ:36,spanX:124,spanZ:124,gridSegs:164,hasFlora:!0,evalHeight:pu},{name:"EastSerpentineTomboloIsland",centerX:84,centerZ:-46,spanX:118,spanZ:134,gridSegs:156,hasFlora:!0,evalHeight:fu},{name:"WestTraelanipaTableIsland",centerX:-124,centerZ:-86,spanX:116,spanZ:102,gridSegs:132,hasFlora:!0,evalHeight:mu},{name:"NorthWestHolmPair",centerX:-48,centerZ:-92,spanX:92,spanZ:86,gridSegs:112,hasFlora:!0,evalHeight:gu},{name:"NorthEastHeadlandTable",centerX:42,centerZ:-112,spanX:94,spanZ:90,gridSegs:112,hasFlora:!1,evalHeight:Mv},{name:"SouthWestBrokenCrescent",centerX:-144,centerZ:78,spanX:156,spanZ:152,gridSegs:120,hasFlora:!1,evalHeight:wv},{name:"SouthEastTableSound",centerX:156,centerZ:116,spanX:168,spanZ:152,gridSegs:112,hasFlora:!1,evalHeight:yv},{name:"FarWestCliffMassif",centerX:-198,centerZ:-88,spanX:174,spanZ:168,gridSegs:108,hasFlora:!1,evalHeight:bv},{name:"NorthernSoundCrescentIsland",centerX:-8,centerZ:-222,spanX:196,spanZ:166,gridSegs:112,hasFlora:!1,evalHeight:Sv},{name:"SouthHorizonHolms",centerX:-4,centerZ:232,spanX:166,spanZ:122,gridSegs:100,hasFlora:!1,evalHeight:Av}],vu=[{x:43.5,z:14.5,rx:4.8,rz:4.2,topY:4.6,topSlopeX:-.08,rotY:.45,seed:14.2},{x:63,z:50.5,rx:7.5,rz:5.2,topY:-8.2,topSlopeX:.05,rotY:-.35,seed:23.8},{x:27.5,z:-10.5,rx:5.4,rz:4.4,topY:1.8,topSlopeX:.07,rotY:.22,seed:31.4},{x:-37.5,z:-22,rx:6.2,rz:4.8,topY:2.6,topSlopeX:-.09,rotY:-.52,seed:42.7},{x:-46.5,z:-15.5,rx:5.2,rz:4.2,topY:-6.8,topSlopeX:-.06,rotY:.61,seed:55.3},{x:-106,z:-49,rx:7.8,rz:6,topY:6.4,topSlopeX:-.1,rotY:.18,seed:68.9},{x:57.5,z:-22.5,rx:6.4,rz:5,topY:-5.4,topSlopeX:.08,rotY:-.44,seed:79.1},{x:-21.5,z:-79,rx:7.2,rz:5.8,topY:5.2,topSlopeX:-.07,rotY:.33,seed:92.6}],sl=[{x:59.5,z:23,rotY:-.58,halfLength:14.5,halfThickness:4.6,plateauTopY:6.8,openingHalfSpan:5.4,vaultCrownY:.4,seed:17.3},{x:-95.5,z:-22.5,rotY:.88,halfLength:13,halfThickness:4.4,plateauTopY:6.2,openingHalfSpan:4.8,vaultCrownY:-.2,seed:49.8}];function Si(i,t){let e=ui;Math.abs(i)<54&&t>-66&&t<40&&(e=Math.max(e,Pi(i,t)));for(const n of il)Math.abs(i-n.centerX)<=n.spanX*.52&&Math.abs(t-n.centerZ)<=n.spanZ*.52&&(e=Math.max(e,n.evalHeight(i,t)));for(const n of sl)Math.hypot(i-n.x,t-n.z)<n.halfLength+5&&(e=Math.max(e,n.plateauTopY+1));for(const n of vu){const s=Math.max(n.rx,n.rz),o=Math.hypot(i-n.x,t-n.z);if(o<s*1.45){const a=1-ce(.65,1.45,o/s);e=Math.max(e,ui+(n.topY-ui)*a)}}return e}function eh(i,t,e){i.computeVertexNormals();const n=i.getAttribute("position"),s=i.getAttribute("normal");for(let o=0;o<n.count;o++){const a=n.getX(o),r=n.getY(o),l=n.getZ(o),c=s.getX(o),h=s.getY(o),u=s.getZ(o);if(h>=.72||r<-23.5)continue;let p=1;if(e){const _=Math.hypot((a-4.45)/2.75,(l-.22)/2.25),A=Math.hypot((a+4.45)/2.75,(l+.22)/2.25);if(p=ce(.88,1.32,Math.min(_,A)),p<=.001)continue}const f=ce(.7,.22,h)*ce(-23.5,-16.5,r)*p;if(f<=.002)continue;const g=Math.hypot(c,u);if(g<1e-4)continue;const v=c/g,m=u/g,d=Pl(a,l,r,t),M=$.clamp(d.radialOffset*f,-.13,.19),w=$.clamp(d.verticalLedgeOffset*f,-.22,.22);n.setXYZ(o,a+v*M,r+w,l+m*M)}i.computeVertexNormals()}function Ev(i){const l=new Float32Array(22821),c=new Float32Array(7607*2);for(let g=0;g<=116;g++){const v=g/116,m=(v-.5)*2*i.halfLength,d=Math.sin(v*Math.PI*1.35+i.seed)*1.15+(He(v*3.8+i.seed,1.7,3)-.5)*1.45,M=ce(0,.055,v)*ce(1,.945,v),w=Math.pow(Math.max(0,1-v*.92),1.18)*5.2,_=Math.exp(-Math.pow((v-.86)/.085,2))*2.85,A=-Math.exp(-Math.pow((v-.54)/.18,2))*.95,b=Us(w,v*1.8,2.4,.45)-w+(Je(m*.12+i.seed,d*.12,2)-.46)*1.05,S=i.plateauTopY-1.1+w+_+A+b,E=$.lerp(Qe-4,S,M),y=m-i.openingHalfSpan*.08,x=Math.abs(y)/i.openingHalfSpan,P=1-ce(.78,1.14,x),C=Math.max(0,1-Math.pow(Math.min(1.16,x),1.65)),R=(Je(m*.28+i.seed,4.3,2)-.48)*.85+(He(m*.45-i.seed,2.1,2)-.5)*.45,L=Qe-5.5+(i.vaultCrownY+.6-(Qe-5.5))*C+R,D=$.lerp(ui,L,P),B=1+.38*(1-P)+.16*(He(v*4.5+i.seed,6.2,2)-.5),k=i.halfThickness*B*(.48+.52*M);for(let F=0;F<=64;F++){const H=F/64,V=H*Math.PI*2,Y=Math.sin(V),j=Math.cos(V),W=Math.sign(Y)*Math.pow(Math.abs(Y),.44),X=.5+.5*Math.sign(j)*Math.pow(Math.abs(j),.56),O=Math.pow(Math.abs(Y),1.15),it=(.35-.45*W)*Math.max(0,j)*M;let nt=$.lerp(D,E,X)+it;j<-.22&&P>.05&&(nt+=(-j-.22)*(1-W*W)*1.15*P);const Z=Math.exp(-Math.pow((nt-(Qe-.45))/2.1,2))*1.35*(1-P*.65),Q=Pl(m,d+W*4.5,nt,i.seed),G=k+Z+Q.radialOffset*.72*O*ce(-22,-14,nt),ot=m,gt=d+W*G,tt=nt+Q.verticalLedgeOffset*.48*O,U=g*65+F;l[U*3]=ot,l[U*3+1]=tt,l[U*3+2]=gt,c[U*2]=v*3.8,c[U*2+1]=H*2.6}}const h=7605,u=7606;l[h*3]=-i.halfLength,l[h*3+1]=Qe-12,l[h*3+2]=0,c[h*2]=0,c[h*2+1]=.5,l[u*3]=i.halfLength,l[u*3+1]=Qe-12,l[u*3+2]=0,c[u*2]=3.8,c[u*2+1]=.5;const p=[];for(let g=0;g<116;g++)for(let v=0;v<64;v++){const m=g*65+v,d=(g+1)*65+v,M=(g+1)*65+(v+1),w=g*65+(v+1);p.push(m,w,M,m,M,d)}for(let g=0;g<64;g++){p.push(h,g+1,g);const v=7540;p.push(u,v+g,v+g+1)}const f=new Gt;return f.setAttribute("position",new q(l,3)),f.setAttribute("uv",new q(c,2)),f.setIndex(p),f.computeVertexNormals(),f}function Tv(i){const r=new Float32Array(5415),l=new Float32Array(1805*2),c=Math.cos(i.rotY),h=Math.sin(i.rotY),u=(S,E,y)=>{const x=1+.16*Math.cos(y*3+i.seed)+.13*Math.sin(y*5-i.seed*.8)+.08*Math.cos(y*7+i.seed*1.7),P=.84+.28*Je(S*1.5+i.seed,E*1.5-i.seed,2);return{lx:S*i.rx*x*P,lz:E*i.rz*x*P}},p=i.topY>Qe+4,f=p?3.45:1.55,g=i.rx*.26*Math.sin(i.seed*1.7),v=i.rz*-.22*Math.cos(i.seed*1.1);for(let S=0;S<=43;S++){const E=S>36,y=Math.min(1,S/36),x=E?(S-36)/7:0;for(let P=0;P<=40;P++){const C=P/40,R=C*Math.PI*2,L=Math.cos(R),D=Math.sin(R),B=u(L,D,R),k=(Je(B.lx*.22+i.seed,B.lz*.22,2)-.45)*1.45,F=i.topY+B.lx*(i.topSlopeX*1.65+.08)+k,H=E?Math.pow(1-x,.82):1,V=E?Math.pow(x,.78)*(f+(Je(L*1.8+i.seed,D*1.8-i.seed,2)-.45)*1.25):0,Y=y+.022*Math.sin(y*22+i.seed),j=$.lerp(ui,F,Math.min(1,Math.max(0,Y)))+V,W=1.22-.36*Math.pow(y,.82)+(p?.05*Math.cos(y*18+i.seed):0),X=1+.36*Math.exp(-Math.pow((j-(Qe-.45))/2.1,2)),O=Pl(i.x+B.lx,i.z+B.lz,j,i.seed),it=ce(.16,.42,y)*(1-ce(.88,1,y))*(E?.25:1),nt=W*X*H,Z=$.lerp(0,g,x)+B.lx*nt+L*O.radialOffset*.58*it,Q=$.lerp(0,v,x)+B.lz*nt+D*O.radialOffset*.58*it,G=i.x+Z*c-Q*h,ot=i.z+Z*h+Q*c,gt=S*41+P;r[gt*3]=G,r[gt*3+1]=j,r[gt*3+2]=ot,l[gt*2]=C*2.4,l[gt*2+1]=y*3+x*.6}}const m=1804,d=i.x+g*c-v*h,M=i.z+g*h+v*c;r[m*3]=d,r[m*3+1]=i.topY+f+.35,r[m*3+2]=M,l[m*2]=.5,l[m*2+1]=3.7;const w=[],_=43;for(let S=0;S<_;S++)for(let E=0;E<40;E++){const y=S*41+E,x=(S+1)*41+E,P=(S+1)*41+(E+1),C=S*41+(E+1);w.push(y,x,P,y,P,C)}const A=_*41;for(let S=0;S<40;S++)w.push(m,A+S+1,A+S);const b=new Gt;return b.setAttribute("position",new q(r,3)),b.setAttribute("uv",new q(l,2)),b.setIndex(w),b.computeVertexNormals(),b}function Cv(){const i=[],t=n=>{const o=n.sides,a=o+1,r=11*a+2,l=new Float32Array(r*3),c=new Float32Array(r*2),h=Math.cos(n.rotY),u=Math.sin(n.rotY);for(let d=0;d<=10;d++){const M=d/10,w=1.08-.16*M+.18*Math.exp(-Math.pow((M-.82)/.14,2))+.07*Math.sin(M*15+n.seed),_=$.lerp(n.botY,n.topY,M),A=n.leanX*(M-.5),b=n.leanZ*(M-.5);for(let S=0;S<=o;S++){const E=S/o,y=E*Math.PI*2,x=.86+.26*kt(Math.floor(S%o)+n.seed*7.1,Math.floor(d*.5)+3.3),P=Math.cos(y)*n.rx*w*x,C=Math.sin(y)*n.rz*w*x,R=n.x+A+P*h-C*u,L=n.z+b+P*u+C*h,D=d*a+S;l[D*3]=R,l[D*3+1]=_+(M>.92?(kt(S,n.seed)-.5)*.18:0),l[D*3+2]=L,c[D*2]=E*1.5,c[D*2+1]=M*2.2}}const p=11*a,f=p+1;l[p*3]=n.x-n.leanX*.5,l[p*3+1]=n.botY,l[p*3+2]=n.z-n.leanZ*.5,c[p*2]=.5,c[p*2+1]=0,l[f*3]=n.x+n.leanX*.5,l[f*3+1]=n.topY+.04,l[f*3+2]=n.z+n.leanZ*.5,c[f*2]=.5,c[f*2+1]=2.2;const g=[];for(let d=0;d<10;d++)for(let M=0;M<o;M++){const w=d*a+M,_=(d+1)*a+M,A=(d+1)*a+(M+1),b=d*a+(M+1);g.push(w,_,A,w,A,b)}const v=10*a;for(let d=0;d<o;d++)g.push(p,d,d+1),g.push(f,v+d+1,v+d);const m=new Gt;return m.setAttribute("position",new q(l,3)),m.setAttribute("uv",new q(c,2)),m.setIndex(g),m.computeVertexNormals(),m},e=[];for(let n=0;n<34;n++)e.push(.14*Math.PI+n/33*.72*Math.PI);for(let n=0;n<24;n++)e.push(-.88*Math.PI+n/23*1*Math.PI);for(let n=0;n<e.length;n++){const s=e[n]+(kt(n,19.4)-.5)*.045,o=Math.cos(s),a=Math.sin(s);let r=-1,l=0;for(let d=4.5;d<=34;d+=.35){const M=o*d,w=-4.2+a*d,_=Pi(M,w),A=Pi(M+o*1.1,w+a*1.1);if(_>-2.6&&_-A>1.35){r=d,l=_;break}}if(r<0)continue;const c=o*r,h=-4.2+a*r,u=Math.hypot((c-4.45)/2.65,(h-.22)/2.15),p=Math.hypot((c+4.45)/2.65,(h+.22)/2.15);if(Math.min(u,p)<1.02)continue;const g=h>-.2&&Math.abs(c)<13.5?Math.min(-.08,l-.04):l+(kt(n,31.7)-.45)*.42,v=Math.max(Qe-3.2,g-(4.8+kt(n,43.2)*5.6));i.push(t({x:c+o*.55,z:h+a*.55,topY:g,botY:v,rx:.95+kt(n,51.3)*1.35,rz:.78+kt(n,63.8)*1.05,rotY:s+(kt(n,71.9)-.5)*.8,leanX:o*(.35+kt(n,83.1)*.55),leanZ:a*(.35+kt(n,83.1)*.55),sides:5+Math.floor(kt(n,91.4)*3),seed:10+n*3.7}));const m=v+2.4+kt(n,104.2)*2.2;i.push(t({x:c+o*(1.55+kt(n,112.6)*1.15),z:h+a*(1.55+kt(n,112.6)*1.15),topY:Math.min(g-.8,m),botY:Qe-3.8,rx:1.15+kt(n,124.5)*1.45,rz:.92+kt(n,137.1)*1.2,rotY:s+(kt(n,149.8)-.5)*.6,leanX:-o*.25,leanZ:-a*.25,sides:6,seed:200+n*5.3}))}return fo(i,!1)}function Pv(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a),c=o-r,h=a-l,u=c*c*c*(c*(c*6-15)+10),p=h*h*h*(h*(h*6-15)+10),f=(r%e+e)%e,g=(f+1)%e,v=(l%n+n)%n,m=(v+1)%n,d=kt(f+s,v-s),M=kt(g+s,v-s),w=kt(f+s,m-s),_=kt(g+s,m-s);return d+(M-d)*u+(w-d)*p+(d-M-w+_)*u*p}function js(i,t,e,n,s,o){let a=0,r=.5,l=0,c=e,h=n;for(let u=0;u<s;u++)a+=r*Pv(i,t,c,h,o+u*17.3),l+=r,c*=2,h*=2,r*=.5;return a/l}function nh(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a);let c=1e9,h=1e9,u=0,p=0,f=0;for(let d=-1;d<=1;d++)for(let M=-1;M<=1;M++){const w=((r+M)%e+e)%e,_=((l+d)%n+n)%n,A=.16+.68*kt(w+s,_*1.7-s),b=.16+.68*kt(w*2.3-s,_+s),S=r+M+A,E=l+d+b,y=(S-o)*.85,x=(E-a)*1.25,P=Math.hypot(y,x);P<c?(h=c,c=P,u=kt(w*3.1+s,_*5.7+s),p=y,f=x):P<h&&(h=P)}const g=Math.max(0,h-c),v=u*Math.PI*2,m=(p*Math.cos(v)+f*Math.sin(v))*.55;return{edgeDist:g,cellTilt:m,cellId:u}}function Rv(){const t=new Float32Array(262144),e=new Float32Array(512*512),n=new Float32Array(512*512),s=new Float32Array(512*512);for(let v=0;v<512;v++){const m=v/512;for(let d=0;d<512;d++){const M=d/512,w=v*512+d,_=M+(js(M,m,4,4,3,5.1)-.5)*.045,A=m+(js(M,m,4,4,3,13.7)-.5)*.035,b=nh(_,A,7,11,21.4),S=nh(_,A,16,22,57.9),E=1-ce(.015,.11,b.edgeDist),y=1-ce(.012,.09,S.edgeDist),x=js(_,A,4,18,4,33.2),P=js(M,m,24,24,3,71.6),C=.52+b.cellTilt*.34+(b.cellId-.5)*.22+S.cellTilt*.18+(x-.5)*.32+(P-.5)*.14-E*.42-y*.22;t[w]=Math.max(0,Math.min(1,C)),e[w]=Math.min(1,E*.75+y*.45),n[w]=b.cellId*.65+S.cellId*.35;const R=js(M,m,8,8,4,93.4);s[w]=ce(.6,.84,R)*(1-E*.5)}}const o=document.createElement("canvas"),a=document.createElement("canvas"),r=document.createElement("canvas");for(const v of[o,a,r])v.width=512,v.height=512;const l=o.getContext("2d"),c=a.getContext("2d"),h=r.getContext("2d"),u=l.createImageData(512,512),p=c.createImageData(512,512),f=h.createImageData(512,512);for(let v=0;v<512;v++){const m=(v-1+512)%512,d=(v+1)%512;for(let M=0;M<512;M++){const w=(M-1+512)%512,_=(M+1)%512,A=v*512+M,b=A*4,S=(t[v*512+_]-t[v*512+w])*7.6,E=(t[d*512+M]-t[m*512+M])*7.6,y=1/Math.sqrt(S*S+E*E+1);p.data[b]=Math.round((-S*y*.5+.5)*255),p.data[b+1]=Math.round((E*y*.5+.5)*255),p.data[b+2]=Math.round((y*.5+.5)*255),p.data[b+3]=255;const x=t[A],P=e[A],C=n[A],R=s[A],L=ce(.62,.92,C),D=1-P*.56,B=(36+x*58+L*22)*D,k=(40+x*58+L*11)*D,F=(46+x*60-L*6)*D,H=52+x*26,V=74+x*34,Y=38+x*18;u.data[b]=Math.round($.lerp(B,H,R*.52)),u.data[b+1]=Math.round($.lerp(k,V,R*.52)),u.data[b+2]=Math.round($.lerp(F,Y,R*.52)),u.data[b+3]=255;const j=.54+(1-x)*.28+P*.16,W=Math.round($.clamp($.lerp(j,.92,R),.15,.98)*255);f.data[b]=W,f.data[b+1]=W,f.data[b+2]=W,f.data[b+3]=255}}l.putImageData(u,0,0),c.putImageData(p,0,0),h.putImageData(f,0,0);const g=(v,m)=>(v.wrapS=Qn,v.wrapT=Qn,v.repeat.set(9,9),v.anisotropy=8,v.colorSpace=m?mn:Un,v.needsUpdate=!0,v);return{albedo:g(new yn(o),!0),normal:g(new yn(a),!1),roughness:g(new yn(r),!1)}}function Lv(i){const o=new Float32Array(37539);for(let u=0;u<=96;u++){const p=u/96,f=3200*Math.pow(p,2.05);for(let g=0;g<=128;g++){const m=g/128*Math.PI*2,d=Math.cos(m)*f,M=Math.sin(m)*f,w=(He(d*.015+3.7,M*.015-5.2,3)-.5)*3.2*(1-p*.7),_=_v+w,A=u*129+g;o[A*3]=d,o[A*3+1]=_,o[A*3+2]=M}}const a=new Uint32Array(12288*6);let r=0;for(let u=0;u<96;u++)for(let p=0;p<128;p++){const f=u*129+p,g=(u+1)*129+p,v=(u+1)*129+(p+1),m=u*129+(p+1);a[r++]=f,a[r++]=v,a[r++]=g,a[r++]=f,a[r++]=m,a[r++]=v}const l=new Gt;l.setAttribute("position",new q(o,3)),l.setIndex(new q(a,1)),l.computeVertexNormals();const c=new tn({name:"NordicSubmarineBathymetry",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${ai}
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
    `}),h=new Fe(l,c);return h.frustumCulled=!1,h.name="NordicSubmarineBathymetryFloor",h}function Iv(i){const t=[{cx:-480,cz:-280,rx:145,rz:95,peakY:56,offX:-22,rot:.4,seed:11.4},{cx:520,cz:-310,rx:165,rz:105,peakY:62,offX:28,rot:-.5,seed:23.8},{cx:-320,cz:-560,rx:135,rz:90,peakY:54,offX:18,rot:.2,seed:37.2},{cx:490,cz:340,rx:155,rz:98,peakY:52,offX:-24,rot:-.3,seed:46.5},{cx:-860,cz:-420,rx:240,rz:145,peakY:86,offX:-36,rot:.35,seed:51.9},{cx:880,cz:-460,rx:255,rz:155,peakY:82,offX:38,rot:-.42,seed:67.3},{cx:-740,cz:580,rx:220,rz:135,peakY:72,offX:-28,rot:.55,seed:76.4},{cx:140,cz:-1180,rx:290,rz:165,peakY:94,offX:42,rot:.15,seed:83.5},{cx:-1150,cz:-880,rx:310,rz:180,peakY:104,offX:-45,rot:-.28,seed:94.1},{cx:1080,cz:780,rx:285,rz:165,peakY:92,offX:36,rot:.38,seed:108.7}],e=[],n=28,s=52;for(const l of t){const c=(n+1)*(s+1),h=new Float32Array(c*3),u=Math.cos(l.rot),p=Math.sin(l.rot);for(let m=0;m<=n;m++){const d=m/n*1.42;for(let M=0;M<=s;M++){const w=M/s*Math.PI*2,_=1+.18*Math.sin(w*2+l.seed)+.11*Math.cos(w*3-l.seed),A=Math.cos(w)*l.rx*_*d,b=Math.sin(w)*l.rz*_*d,S=l.cx+A*u-b*p,E=l.cz+A*p+b*u,y=Math.hypot((A-l.offX*1.35)/(l.rx*.96),b/(l.rz*.96)),x=$.clamp(.56+A/Math.max(20,l.rx)*.44,.22,1.24),P=Math.pow(Math.max(0,1-Math.min(1,y/1.02)),.85),C=Math.pow(Math.max(0,1-Math.min(1,y/.76)),1.65),R=(Je(S*.009+l.seed,E*.011-l.seed,3)-.4)*(l.peakY*.34)*(1-ce(.55,1.05,d)),L=l.peakY*(.2+.5*P*x+.32*C)+R,D=Us(L,A*.02,Math.max(8.5,l.peakY*.18),.48),B=.68+.11*Math.sin(w*3-l.seed)+.06*Math.cos(w*5+l.seed),k=ce(B,1.05,d),F=ce(.98,1.38,d),H=Qe-2,V=$.lerp(D,H,Math.pow(k,.8)),Y=$.lerp(V,ui,F),j=m*(s+1)+M;h[j*3]=S,h[j*3+1]=Y,h[j*3+2]=E}}const f=new Uint32Array(n*s*6);let g=0;for(let m=0;m<n;m++)for(let d=0;d<s;d++){const M=m*(s+1)+d,w=(m+1)*(s+1)+d,_=(m+1)*(s+1)+(d+1),A=m*(s+1)+(d+1);f[g++]=M,f[g++]=_,f[g++]=w,f[g++]=M,f[g++]=A,f[g++]=_}const v=new Gt;v.setAttribute("position",new q(h,3)),v.setIndex(new q(f,1)),v.computeVertexNormals(),e.push(v)}const o=fo(e,!1),a=new tn({name:"DistantFjordAerialMaterial",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${ai}
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
    `}),r=new Fe(o,a);return r.frustumCulled=!1,r.name="DistantFjordArchipelago",r}function Dv(){const i=[],t=[{dx:0,dz:0,h:.36,w:.02,bend:.11,rotY:.1},{dx:.032,dz:.018,h:.28,w:.017,bend:.14,rotY:1.8},{dx:-.028,dz:.022,h:.31,w:.018,bend:.12,rotY:3.7},{dx:.012,dz:-.03,h:.23,w:.015,bend:.15,rotY:5}];for(const e of t){const s=[],o=[],a=[],r=Math.cos(e.rotY),l=Math.sin(e.rotY);for(let h=0;h<=4;h++){const u=h/4,p=e.w*(1-.88*Math.pow(u,1.3)),f=e.h*u,g=e.bend*u*u;for(const v of[-1,1]){const m=v*p,d=g,M=e.dx+m*r-d*l,w=e.dz+m*l+d*r;s.push(M,f,w),o.push(-l*.3,.92,r*.3)}}for(let h=0;h<4;h++){const u=h*2,p=u+1,f=u+2,g=u+3;a.push(u,p,g,u,g,f)}const c=new Gt;c.setAttribute("position",new Yt(s,3)),c.setAttribute("normal",new Yt(o,3)),c.setIndex(a),i.push(c)}return fo(i,!1)}function Fv(){const i=[],t=[{ox:0,oz:0,h:.24,leanX:.03,leanZ:.02,r:.032},{ox:.045,oz:.025,h:.19,leanX:.05,leanZ:-.02,r:.027},{ox:-.038,oz:.03,h:.21,leanX:-.04,leanZ:.04,r:.029}];for(const e of t){const n=new ca(.004,.006,e.h,4,1);n.translate(e.ox+e.leanX*.5,e.h*.5,e.oz+e.leanZ*.5);const s=n.getAttribute("position").count,o=new Float32Array(s*3);for(let c=0;c<s;c++)o[c*3]=.24,o[c*3+1]=.44,o[c*3+2]=.2;n.setAttribute("color",new q(o,3)),i.push(n);const a=new ca(e.r,e.r*.28,e.r*.55,6,1);a.translate(e.ox+e.leanX,e.h+e.r*.15,e.oz+e.leanZ);const r=a.getAttribute("position").count,l=new Float32Array(r*3);for(let c=0;c<r;c++)l[c*3]=1,l[c*3+1]=1,l[c*3+2]=1;a.setAttribute("color",new q(l,3)),i.push(a)}return fo(i,!1)}function Nv(i,t,e,n){const s=new qn;s.position.set(i,t,e);const o=[{rx:.44,ry:.17,rz:.38,dy:.08,rot:.2},{rx:.35,ry:.14,rz:.31,dy:.28,rot:1.1},{rx:.27,ry:.12,rz:.24,dy:.45,rot:2.3},{rx:.19,ry:.11,rz:.18,dy:.6,rot:.7},{rx:.12,ry:.1,rz:.11,dy:.73,rot:1.9}];for(const a of o){const r=new Ma(1,1);r.scale(a.rx,a.ry,a.rz);const l=new Fe(r,n);l.position.set((Math.sin(a.rot*3)-.5)*.03,a.dy,(Math.cos(a.rot*2)-.5)*.03),l.rotation.y=a.rot,l.castShadow=!0,l.receiveShadow=!0,s.add(l)}return s}function Uv(i){const t=new qn;t.name="NordicCliffsideWorld";const e=Rv(),n=new Ti({name:"NordicBasaltCliff_PBR",map:e.albedo,normalMap:e.normal,normalScale:new zt(1.25,1.25),roughnessMap:e.roughness,roughness:.86,metalness:.04,envMapIntensity:.98});n.onBeforeCompile=mt=>{Object.assign(mt.uniforms,i),mt.vertexShader=mt.vertexShader.replace("#include <common>",`#include <common>
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
        vRockWorldNormal = normalize(rawWorldN + vec3(0.0, 1e-5, 0.0));`),mt.fragmentShader=mt.fragmentShader.replace("#include <common>",`#include <common>
        ${ai}
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
          // Subtle mineral & pale coastal lichen banding on sheer basalt rock walls (like Reynisfjara & Drangarnir!)
          vec3 mineralTint = mix(vec3(0.68, 0.70, 0.75), vec3(1.22, 1.19, 1.15), strataVal);
          diffuseColor.rgb *= mix(albMacro, albDetail, 0.52) * mix(vec3(1.0), mineralTint, cliffSteepMask * 0.84);
        #endif`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 wNCol = normalize(vRockWorldNormal + vec3(0.0, 1e-5, 0.0));
        // Localized basalt rock pads right beneath Toothless & Light Fury's claws
        float dPadTL = length((vRockWorldPos.xz - vec2(4.45, 0.22)) / vec2(2.35, 1.95));
        float dPadLF = length((vRockWorldPos.xz - vec2(-4.45, -0.22)) / vec2(2.35, 1.95));
        float dragonPadClear = smoothstep(0.68, 1.18, min(dPadTL, dPadLF));

        // Expose bare fractured basalt rock on cliffs, "hamrar" terrace risers & wind-scoured cliff rims (wN.y < 0.68)!
        float crownSlope = smoothstep(0.60, 0.84, wNCol.y);
        float aboveSpray = smoothstep(-4.8, 0.2, vRockWorldPos.y);
        float rimRockBreakup = smoothstep(0.24, 0.62, skyFbm(vRockWorldPos.xz * 0.16 + 2.9) * 0.78 + skyNoise2(vRockWorldPos.xz * 0.45) * 0.22);
        float turfMask = dragonPadClear * crownSlope * aboveSpray * mix(rimRockBreakup, 1.0, smoothstep(0.76, 0.93, wNCol.y));

        // Natural Faroese / North Atlantic coastal turf: lush emerald-olive hollows + warm golden-olive upland fescue
        float meadowMacro = skyFbm(vRockWorldPos.xz * 0.065);
        float uplandElev = smoothstep(2.0, 20.0, vRockWorldPos.y);
        vec3 lushEmerald = mix(vec3(0.074, 0.148, 0.044), vec3(0.148, 0.186, 0.058), meadowMacro);
        vec3 uplandOlive = vec3(0.168, 0.178, 0.064);
        vec3 turfLush = mix(lushEmerald, uplandOlive, uplandElev * 0.36 * (1.0 - meadowMacro * 0.5));
        diffuseColor.rgb = mix(diffuseColor.rgb, turfLush, clamp(turfMask * 0.92, 0.0, 0.92));

        // Dark wet intertidal basalt splash zone (-11.8m .. -7.2m) & submarine rock below
        float wetZone = 1.0 - smoothstep(-11.3, -7.2, vRockWorldPos.y);
        float submergedDepth = 1.0 - smoothstep(-24.0, -11.6, vRockWorldPos.y);
        diffuseColor.rgb *= mix(1.0, 0.34, wetZone);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.024, 0.042, 0.054), submergedDepth * 0.74);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
        roughnessFactor = mix(roughnessFactor, 0.18, wetRough * 0.85);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
        gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, rHazeCol, clamp(rAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)},t.add(Lv(i));const s=304,o=new Ds(102,104,s,s);o.rotateX(-Math.PI*.5);const a=o.getAttribute("position"),r=o.getAttribute("uv");for(let mt=0;mt<a.count;mt++){const Tt=a.getX(mt)-4,Wt=a.getZ(mt)-14.5,he=Pi(Tt,Wt);a.setXYZ(mt,Tt,he,Wt),r.setXY(mt,Tt*.015,(Wt+he*.55)*.015)}eh(o,7.3,!0);const l=new Fe(o,n);l.receiveShadow=!0,l.castShadow=!0,l.name="HeroBasaltCliffPerch",t.add(l);const c=new Fe(Cv(),n);c.castShadow=!0,c.receiveShadow=!0,c.name="HeroCliffBasaltCragOutcrops",t.add(c);const h=Pi(-8.65,-7.25);t.add(Nv(-8.65,h-.04,-7.25,n));const u=new qn;u.name="NordicArchipelago";for(let mt=0;mt<il.length;mt++){const Tt=il[mt],Wt=new Ds(Tt.spanX,Tt.spanZ,Tt.gridSegs,Tt.gridSegs);Wt.rotateX(-Math.PI*.5);const he=Wt.getAttribute("position"),ue=Wt.getAttribute("uv");for(let Jt=0;Jt<he.count;Jt++){const se=Tt.centerX+he.getX(Jt),ve=Tt.centerZ+he.getZ(Jt),Ye=Tt.evalHeight(se,ve);he.setXYZ(Jt,se,Ye,ve),ue.setXY(Jt,se*.015,(ve+Ye*.55)*.015)}eh(Wt,19.1+mt*13.7,!1);const jt=new Fe(Wt,n);jt.receiveShadow=!0,jt.castShadow=!0,jt.name=Tt.name,u.add(jt)}for(let mt=0;mt<sl.length;mt++){const Tt=sl[mt],Wt=new Fe(Ev(Tt),n);Wt.position.set(Tt.x,0,Tt.z),Wt.rotation.y=Tt.rotY,Wt.castShadow=!0,Wt.receiveShadow=!0,Wt.name=`FaroeseHeadlandSeaArch_${mt}`,u.add(Wt)}const p=vu.map(mt=>Tv(mt)),f=new Fe(fo(p,!1),n);f.castShadow=!0,f.receiveShadow=!0,f.name="TabularFaroeseSeaStacks",u.add(f),t.add(u);const g=Math.cos(.18),v=Math.sin(.18),m=mt=>{const Tt=Math.sin(mt*.11+.35)*1.85,Wt=-66+mt*g+Tt*v,he=-32-mt*v+Tt*g,ue=xi(Wt,he);return new T(Wt,ue,he)};let d=9.4;for(let mt=5;mt<=16;mt+=.05){const Tt=m(mt),Wt=m(mt+1.35);if(Tt.y>5.5&&Wt.y<Qe-1.5){d=mt;break}if(Tt.y<5.5){d=mt-.15;break}}const M=m(d),w=1.2,_=xi(M.x+w,M.z)-xi(M.x-w,M.z),A=xi(M.x,M.z+w)-xi(M.x,M.z-w),b=new zt(-_,-A);b.lengthSq()<1e-4?b.set(g,-v):b.normalize();const S=new zt(-b.y,b.x),E=36,y=8,x=new Float32Array((E+1)*(y+1)*3),P=new Float32Array((E+1)*(y+1)*2);for(let mt=0;mt<=E;mt++){const Tt=mt/E,Wt=$.lerp(-9,d+.18,Tt),he=m(Wt),ue=m(Wt+.35),jt=new zt(ue.x-he.x,ue.z-he.z).normalize(),Jt=new zt(-jt.y,jt.x),se=$.lerp(1.15,.92,ce(.55,1,Tt));for(let ve=0;ve<=y;ve++){const Ye=ve/y,$e=(Ye-.5)*2*se,on=he.x+Jt.x*$e,qe=he.z+Jt.y*$e,ln=xi(on,qe),Ge=Math.max(ln+.12,he.y+.18),Le=mt*(y+1)+ve;x[Le*3]=on,x[Le*3+1]=Ge,x[Le*3+2]=qe,P[Le*2]=Ye,P[Le*2+1]=1+(1-Tt)*2.4}}const C=[];for(let mt=0;mt<E;mt++)for(let Tt=0;Tt<y;Tt++){const Wt=mt*(y+1)+Tt,he=(mt+1)*(y+1)+Tt,ue=(mt+1)*(y+1)+(Tt+1),jt=mt*(y+1)+(Tt+1);C.push(Wt,he,ue,Wt,ue,jt)}const R=new Gt;R.setAttribute("position",new q(x,3)),R.setAttribute("uv",new q(P,2)),R.setIndex(C),R.computeVertexNormals();const L=(mt,Tt,Wt,he,ue)=>{const se=M.y+.18,ve=Qe-1.85,Ye=se-ve,$e=new Float32Array(1113*3),on=new Float32Array(1113*2);for(let Ge=0;Ge<=52;Ge++){const Le=Ge/52,en=se-Ye*Math.pow(Le,1.62),N=.28+Wt*Math.pow(Le,.72),J=$.lerp(mt,Tt,Math.pow(Le,.88)),lt=ue*Le*Le;for(let ct=0;ct<=20;ct++){const st=ct/20,bt=(st-.5)*2*J+lt,Dt=Math.sin(st*Math.PI)*(he+.42*Le);let Ot=M.x+S.x*bt+b.x*(N+Dt),Ht=M.z+S.y*bt+b.y*(N+Dt);for(let ee=0;ee<12;ee++){const Kt=Si(Ot,Ht);if(en>=Kt+.52)break;Ot+=b.x*.42,Ht+=b.y*.42}const Qt=Ge*21+ct;$e[Qt*3]=Ot,$e[Qt*3+1]=en,$e[Qt*3+2]=Ht,on[Qt*2]=st,on[Qt*2+1]=1-Le}}const qe=[];for(let Ge=0;Ge<52;Ge++)for(let Le=0;Le<20;Le++){const en=Ge*21+Le,N=(Ge+1)*21+Le,J=(Ge+1)*21+(Le+1),lt=Ge*21+(Le+1);qe.push(en,N,J,en,J,lt)}const ln=new Gt;return ln.setAttribute("position",new q($e,3)),ln.setAttribute("uv",new q(on,2)),ln.setIndex(qe),ln.computeVertexNormals(),ln},D=3.85,B=L(.92,2.15,D,.34,.28),k=L(1.18,3.35,D+.55,.68,.72),F=Math.pow((M.y+.18-Qe)/(M.y+.18-(Qe-1.85)),1/1.62);let H=M.x+b.x*(.28+D*Math.pow(F,.72)+.55),V=M.z+b.y*(.28+D*Math.pow(F,.72)+.55);for(let mt=0;mt<12&&!(Si(H,V)<Qe-2.2);mt++)H+=b.x*.55,V+=b.y*.55;const Y={...i},j=mt=>new tn({name:"NordicWaterfallShader",transparent:!0,depthWrite:!1,side:gn,uniforms:{...Y,uVeilMode:{value:mt?1:0}},vertexShader:`
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
        ${ai}
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
          // Soft sub-surface fade below sea level (-11.5m) so the curtain dissolves into the ocean boil seamlessly!
          float subSeaFade = smoothstep(-13.2, -11.35, vWorldPos.y);
          float alpha = clamp(baseAlpha * subSeaFade, 0.0, mix(0.95, 0.44, uVeilMode));
          gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), alpha);
        }
      `}),W=j(!1),X=j(!0),O=new Fe(R,W);O.renderOrder=3;const it=new Fe(B,W);it.renderOrder=3;const nt=new Fe(k,X);nt.renderOrder=4,t.add(O),t.add(it),t.add(nt);const Z=new Ml(9.2,48);Z.rotateX(-Math.PI*.5);const Q=new tn({transparent:!0,depthWrite:!1,uniforms:Y,vertexShader:`
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
      ${ai}
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
    `}),G=new Fe(Z,Q);G.position.set(H,Qe+.16,V),G.renderOrder=3,t.add(G);const ot=140,gt=new Float32Array(ot*3),tt=new Float32Array(ot);for(let mt=0;mt<ot;mt++)gt[mt*3]=H+(kt(mt,11.3)-.5)*5.8,gt[mt*3+1]=Qe+kt(mt,27.9)*9.5,gt[mt*3+2]=V+(kt(mt,43.1)-.5)*5.8,tt[mt]=kt(mt,61.7);const U=new Gt;U.setAttribute("position",new q(gt,3)),U.setAttribute("aSeed",new q(tt,1));const Mt=new tn({transparent:!0,depthWrite:!1,uniforms:Y,vertexShader:`
      attribute float aSeed;
      uniform float uTime;
      varying float vLife;
      void main() {
        float life = fract(aSeed + uTime * (0.22 + aSeed * 0.16));
        vLife = life;
        vec3 p = position;
        p.y = -11.3 + life * 10.2;
        p.x += sin(life * 4.0 + aSeed * 10.0) * (0.8 + life * 2.4);
        p.z += cos(life * 3.5 + aSeed * 8.0) * (0.8 + life * 2.4);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((195.0 * (0.4 + life * 0.9)) / max(1.0, -mv.z), 4.0, 44.0);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${ai}
      uniform vec3 uSunColor;
      varying float vLife;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
        float puff = exp(-r2 * 10.0) * sin(vLife * 3.14159) * 0.22;
        vec3 mistCol = mix(uHorizonAntiColor, uHorizonSunColor, 0.45) * 1.15 + uSunColor * 0.25;
        gl_FragColor = vec4(mistCol, puff);
      }
    `}),at=new Qr(U,Mt);at.renderOrder=4,at.frustumCulled=!1,t.add(at);const pt=new rn,_t=new Ma(.58,1),It=_t.getAttribute("position");for(let mt=0;mt<It.count;mt++){const Tt=It.getX(mt);let Wt=It.getY(mt);const he=It.getZ(mt),ue=.84+.28*He(Tt*2.2+4.3,Wt*2.2+he*2.2,3);Wt<-.06&&(Wt=-.06+(Wt+.06)*.25),It.setXYZ(mt,Tt*ue*1.38,Wt*ue*.52,he*ue*1.22)}_t.computeVertexNormals();const yt=[{cx:-3.5,cz:-14,spanX:62,spanZ:58,isHero:!0,evalH:Pi},{cx:-74,cz:-36,spanX:68,spanZ:58,isHero:!1,evalH:xi},{cx:88,cz:36,spanX:74,spanZ:74,isHero:!1,evalH:pu},{cx:84,cz:-46,spanX:68,spanZ:78,isHero:!1,evalH:fu},{cx:-124,cz:-86,spanX:68,spanZ:58,isHero:!1,evalH:mu},{cx:-48,cz:-92,spanX:52,spanZ:48,isHero:!1,evalH:gu}],z=220,I=new $a(_t,n,z);I.castShadow=!0,I.receiveShadow=!0;let et=0;const dt=new T(0,1,0),vt=new T,ft=new nn,Ft=new nn;for(let mt=0;mt<yt.length;mt++){const Tt=yt[mt];let Wt=0;for(let he=0;he<550&&Wt<20&&et<z;he++){const ue=7e3+mt*800+he,jt=Tt.cx+(kt(ue,14.7)-.5)*(Tt.spanX*1.25),Jt=Tt.cz+(kt(ue,53.9)-.5)*(Tt.spanZ*1.25),se=Tt.evalH(jt,Jt);if(se<-12.3||se>-10.6||Math.hypot(jt-M.x,Jt-M.z)<7)continue;const ve=1.25+kt(ue,29.1)*2.1;pt.position.set(jt,se-.25*ve,Jt),pt.rotation.set((kt(ue,3.3)-.5)*.18,kt(ue,9.8)*Math.PI*2,(kt(ue,6.1)-.5)*.18),pt.scale.set(ve*(.95+kt(ue,4.4)*.35),ve*.58,ve),pt.updateMatrix(),I.setMatrixAt(et++,pt.matrix),Wt++}}for(let mt=0;mt<yt.length;mt++){const Tt=yt[mt],Wt=Tt.isHero?26:12;let he=0;for(let ue=0;ue<400&&he<Wt&&et<z;ue++){const jt=mt*500+ue,Jt=Tt.cx+(kt(jt,41.2)-.5)*Tt.spanX,se=Tt.cz+(kt(jt,83.7)-.5)*Tt.spanZ;if(Tt.isHero){if(Math.sqrt(Math.pow(Jt/10.2,2)+Math.pow((se+1)/6.4,2))<1)continue}else if(Math.hypot(Jt-M.x,se-M.z)<5.5)continue;const ve=Tt.evalH(Jt,se);if(ve<.25||ve>34)continue;const Ye=Tt.evalH(Jt+.6,se),$e=Tt.evalH(Jt-.6,se),on=Tt.evalH(Jt,se+.6),qe=Tt.evalH(Jt,se-.6),ln=(Ye-$e)/1.2,Ge=(on-qe)/1.2;if(Math.hypot(ln,Ge)>.38||Math.min(Ye,$e,on,qe)<0)continue;const en=(Tt.isHero?.38:.58)+kt(jt,19.4)*(Tt.isHero?.62:.95);vt.set(-ln,1,-Ge).normalize(),ft.setFromUnitVectors(dt,vt),Ft.setFromAxisAngle(dt,kt(jt,8.9)*Math.PI*2),pt.quaternion.copy(ft).multiply(Ft),pt.position.set(Jt,ve-.14*en,se),pt.scale.set(en*(.95+kt(jt,2.3)*.32),en*.55,en),pt.updateMatrix(),I.setMatrixAt(et++,pt.matrix),he++}}I.count=et,I.instanceMatrix.needsUpdate=!0,t.add(I);const ut=Dv(),St={uTime:{value:0}},Zt=(mt,Tt)=>{mt.onBeforeCompile=Wt=>{Object.assign(Wt.uniforms,i),Wt.uniforms.uFloraTime=St.uTime,Wt.vertexShader=Wt.vertexShader.replace("#include <common>",`#include <common>
          uniform float uFloraTime;
          varying vec3 vFloraWorldPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float hFrac = clamp(position.y / ${Tt.toFixed(2)}, 0.0, 1.0);
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
          vFloraWorldPos = fwPos.xyz;`),Wt.fragmentShader=Wt.fragmentShader.replace("#include <common>",`#include <common>
          ${ai}
          varying vec3 vFloraWorldPos;`).replace("#include <fog_fragment>",`vec3 fToFrag = vFloraWorldPos - cameraPosition;
          float fDist = length(fToFrag);
          vec3 fHaze = evalHorizonHazeColor(fToFrag);
          float fAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * fDist, 1e-6), 1.26));
          gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, fHaze, clamp(fAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)}},xt=new Ti({name:"NordicVariedCoastalGrass",color:new Lt(16777215),roughness:.78,metalness:0,side:gn});Zt(xt,.36);const Pt=8400,Vt=new $a(ut,xt,Pt);Vt.castShadow=!1,Vt.receiveShadow=!0;const $t=new Lt;let Nt=0;for(let mt=0;mt<yt.length;mt++){const Tt=yt[mt],Wt=Tt.isHero?4200:840;let he=0,ue=0;for(;he<Wt&&ue<Wt*7&&Nt<Pt;){ue++;const jt=mt*25e3+ue,Jt=Tt.cx+(kt(jt,1.3)-.5)*Tt.spanX,se=Tt.cz+(kt(jt,7.9)-.5)*Tt.spanZ;if(Tt.isHero){const N=Math.sqrt(Math.pow((Jt-4.45)/2.35,2)+Math.pow((se+.85)/3.85,2)),J=Math.sqrt(Math.pow((Jt+4.45)/2.35,2)+Math.pow((se+1.15)/3.85,2));if(N<1||J<1)continue}const ve=Tt.evalH(Jt,se),Ye=Tt.evalH(Jt+.4,se),$e=Tt.evalH(Jt,se+.4),on=Math.hypot(Ye-ve,$e-ve)/.4;if(ve<-.5||on>.78)continue;const qe=He(Jt*.45+2.3,se*.45-4.1,3);if(qe<.32)continue;const ln=ce(.58,.85,qe),Ge=.55+kt(jt,3.7)*.72+ln*.5,Le=.75+kt(jt,5.1)*.62;pt.position.set(Jt,ve-.02,se),pt.scale.set(Le,Ge,Le),pt.rotation.set((kt(jt,9.2)-.5)*.18,kt(jt,11.4)*Math.PI*2,(kt(jt,13.8)-.5)*.18),pt.updateMatrix(),Vt.setMatrixAt(Nt,pt.matrix);const en=kt(jt,17.1);en<.54?$t.setHSL(.24+(kt(jt,21.1)-.5)*.04,.44,.21+kt(jt,23.7)*.11):en<.8?$t.setHSL(.14+(kt(jt,25.3)-.5)*.03,.42,.3+kt(jt,29.1)*.11):$t.setHSL(.28+(kt(jt,31.9)-.5)*.03,.3,.22+kt(jt,37.4)*.1),Vt.setColorAt(Nt,$t),Nt++,he++}}Vt.count=Nt,Vt.instanceMatrix.needsUpdate=!0,Vt.instanceColor&&(Vt.instanceColor.needsUpdate=!0),t.add(Vt);const re=Fv(),te=new Ti({name:"NordicCliffWildflowers",vertexColors:!0,roughness:.68,metalness:0});Zt(te,.26);const Ce=2400,K=new $a(re,te,Ce);K.castShadow=!1,K.receiveShadow=!0;const Rt=new Lt;let rt=0;for(let mt=0;mt<yt.length;mt++){const Tt=yt[mt],Wt=Tt.isHero?1280:220;let he=0,ue=0;for(;he<Wt&&ue<Wt*8&&rt<Ce;){ue++;const jt=9e4+mt*18e3+ue,Jt=Tt.cx+(kt(jt,2.7)-.5)*Tt.spanX,se=Tt.cz+(kt(jt,6.3)-.5)*Tt.spanZ;if(Tt.isHero){const ln=Math.sqrt(Math.pow((Jt-4.45)/2.55,2)+Math.pow((se+.85)/4.05,2)),Ge=Math.sqrt(Math.pow((Jt+4.45)/2.55,2)+Math.pow((se+1.15)/4.05,2));if(ln<1||Ge<1)continue}const ve=Tt.evalH(Jt,se),Ye=Math.hypot(Tt.evalH(Jt+.4,se)-ve,Tt.evalH(Jt,se+.4)-ve)/.4;if(ve<-.2||Ye>.66||He(Jt*.48-8.2,se*.48+5.7,3)<.48)continue;const on=.68+kt(jt,11.9)*.65;pt.position.set(Jt,ve-.015,se),pt.scale.set(on,on*(.85+kt(jt,14.2)*.35),on),pt.rotation.set((kt(jt,18.5)-.5)*.18,kt(jt,22.1)*Math.PI*2,(kt(jt,26.8)-.5)*.18),pt.updateMatrix(),K.setMatrixAt(rt,pt.matrix);const qe=He(Jt*.25+13.1,se*.25-9.4,2);qe<.42?Rt.setHSL(.93+(kt(jt,31.1)-.5)*.04,.68,.66+kt(jt,33.7)*.1):qe<.62?Rt.setHSL(.12,.14,.88+kt(jt,35.9)*.08):qe<.78?Rt.setHSL(.13+(kt(jt,39.2)-.5)*.02,.86,.56+kt(jt,41.8)*.08):Rt.setHSL(.79+(kt(jt,45.1)-.5)*.04,.52,.54+kt(jt,49.3)*.1),K.setColorAt(rt,Rt),rt++,he++}}K.count=rt,K.instanceMatrix.needsUpdate=!0,K.instanceColor&&(K.instanceColor.needsUpdate=!0),t.add(K),t.add(Iv(i));const Ut=vv([{x:-2,z:-8,radius:22.5},{x:-18,z:-26,radius:18},{x:27.5,z:-10.5,radius:6.5},{x:-37.5,z:-22,radius:7.2},{x:H,z:V,radius:5.8,boost:1},{x:-66,z:-32,radius:25.5},{x:-91,z:-42.5,radius:21},{x:88,z:36,radius:34.5},{x:59.5,z:23,radius:11},{x:43.5,z:14.5,radius:6.2},{x:63,z:50.5,radius:8.2},{x:88,z:-56,radius:30.5},{x:70,z:-22.5,radius:17.5},{x:-124,z:-86,radius:34},{x:-42,z:-96,radius:20},{x:36,z:-108,radius:22},{x:-144,z:78,radius:44},{x:168,z:122,radius:42},{x:-206,z:-96,radius:46},{x:-8,z:-222,radius:58},{x:-18,z:236,radius:32}],i);t.add(Ut.mesh);const Ct=460,ne=new Float32Array(Ct*3),Pe=new Float32Array(Ct);for(let mt=0;mt<Ct;mt++)ne[mt*3]=(kt(mt,31.7)-.5)*64,ne[mt*3+1]=-7+kt(mt,47.3)*28,ne[mt*3+2]=-16+kt(mt,59.1)*56,Pe[mt]=kt(mt,73.9);const We=new Gt;We.setAttribute("position",new q(ne,3)),We.setAttribute("aSeed",new q(Pe,1));const ge={uTime:{value:0},uColor:i.uSunColor},sn=new tn({transparent:!0,depthWrite:!1,blending:ia,uniforms:ge,vertexShader:`
      attribute float aSeed;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.x = mod(p.x + 32.0 + uTime * (1.1 + aSeed * 0.9), 64.0) - 32.0;
        p.y += sin(uTime * 0.9 + aSeed * 12.0) * 0.35;
        p.z = mod(p.z + 18.0 - uTime * (0.7 + aSeed * 0.6), 56.0) - 18.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((16.0 + 12.0 * aSeed) / max(1.0, -mv.z), 1.5, 4.8);
        vAlpha = (0.11 + 0.18 * aSeed) * smoothstep(54.0, 6.0, -mv.z);
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
    `}),Xe=new Qr(We,sn);return Xe.renderOrder=5,Xe.frustumCulled=!1,t.add(Xe),{group:t,ocean:Ut,update(mt){St.uTime.value=mt,ge.uTime.value=mt,Ut.update(mt)}}}const fn={neckArch:.16,neckYaw:.08,headPitch:-.04,headYaw:.14,headRoll:-.08,earPerk:.76,earAsymmetry:.06,cheekNubFlare:.5,eyeYaw:.06,eyePitch:.02,pupilDilation:.76,blink:0,squint:0,jawOpen:0,teethExtension:0,tongueExtend:.12,tongueCurl:.08,wingUnfurl:.46,wingFlap:.08,wingSweep:-.05,wingCamber:.3,wingWristFold:0,wingTipLag:0,pelvicFinFlare:.9,dorsalSpineSplit:.22,spineArch:.08,spineTwist:.02,forelegStance:.1,hindlegStance:.06,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:.2,tailPitch:.26,tailCurl:.16,tailWaveAmp:0,tailWavePhase:0,rightTailFinFlare:.24,leftProstheticFinFlare:.24,autoSyncProstheticTail:!0,subtleBreathing:!0,alphaGlow:.08,biolumGlow:0,lightningCloak:0},kv=[{id:"hero-perch",label:"Hero Perch",subtitle:"Noble Alpha Sentinel",patch:{...fn}},{id:"gummy-smile",label:"Gummy Grin",subtitle:"Toothless Happy Smile",patch:{...fn,headYaw:.22,headPitch:-.06,headRoll:-.24,earPerk:.96,pupilDilation:.94,squint:.22,jawOpen:.34,teethExtension:0,tongueExtend:.58,tongueCurl:.26,tailYaw:.36}},{id:"courtship-cape",label:"Courtship Cape",subtitle:"Beach Wing-Display Dance",patch:{...fn,forelegStance:.52,neckArch:.48,headYaw:.28,headPitch:.08,headRoll:-.18,earPerk:1,pupilDilation:.96,jawOpen:.26,teethExtension:0,tongueExtend:.42,wingUnfurl:.96,wingFlap:.88,wingSweep:.44,wingCamber:.68,dorsalSpineSplit:.85}},{id:"curious-tilt",label:"Curious Tilt",subtitle:"Asymmetric Ear-Perk",patch:{...fn,headRoll:-.62,headYaw:.14,headPitch:.08,earPerk:.92,earAsymmetry:-.45,pupilDilation:.92,jawOpen:.05,teethExtension:0}},{id:"alpha-roar",label:"Alpha Roar",subtitle:"Split Spines & Cyan Fire",patch:{...fn,forelegStance:-.48,spineArch:.36,neckArch:-.22,headPitch:-.22,earPerk:.08,squint:.42,pupilDilation:.08,jawOpen:.88,teethExtension:1,tongueExtend:.52,tongueCurl:.46,wingUnfurl:.92,wingFlap:.46,wingSweep:.28,dorsalSpineSplit:1,alphaGlow:1,biolumGlow:.65,lightningCloak:.35}},{id:"lightning-storm",label:"Storm Skrill",subtitle:"Arc-Plasma Overload",patch:{...fn,forelegStance:-.35,wingUnfurl:.98,wingFlap:.62,wingCamber:.72,dorsalSpineSplit:1,pupilDilation:.16,jawOpen:.54,teethExtension:1,alphaGlow:1,biolumGlow:.92,lightningCloak:1}}];function gs(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const Bv=new T(-.16,.985,.06).normalize(),zv=new T(.16,.985,.06).normalize(),_u=new T().crossVectors(Bv,uo).normalize(),Ov=new T().crossVectors(uo,_u).normalize(),xu=new T().crossVectors(zv,po).normalize(),Hv=new T().crossVectors(po,xu).normalize();class Vv{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new Cn;tmpQuat=new nn;tmpQuatB=new nn;tmpVecA=new T;tmpVecB=new T;tmpVecC=new T;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;prevHeadRoll=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...fn,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,fn),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.autoSyncProstheticTail&&(t.rightTailFinFlare!==void 0?this.state.leftProstheticFinFlare=t.rightTailFinFlare:t.leftProstheticFinFlare!==void 0?this.state.rightTailFinFlare=t.leftProstheticFinFlare:t.autoSyncProstheticTail===!0&&(this.state.leftProstheticFinFlare=this.state.rightTailFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0};const e=4.6,n=t%e,s=Math.floor(t/e);let o=0;n>3.85&&n<4.03?o=Math.sin((n-3.85)/.18*Math.PI):s%3===1&&n>4.12&&n<4.29&&(o=Math.sin((n-4.12)/.17*Math.PI));const a=(t+1.3)%6.2,r=a<.22?Math.sin(a/.22*Math.PI)*.085:0,l=(t+3.9)%7.4,c=l<.2?-Math.sin(l/.2*Math.PI)*.075:0,h=Math.sin(t*.72)*.032+Math.sin(t*1.95+1.1)*.014,u=Math.cos(t*.58+.4)*.022,p=Math.sin(t*1.15)*.025;return{autoBlink:o,earTwitchL:r,earTwitchR:c,gazeMicroX:h,gazeMicroY:u,pupilPulse:p}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),p=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),p.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),p.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new ie().copy(this.asset.rootGroup.matrixWorld).invert(),g=new ie().multiplyMatrices(f,c.parent.matrixWorld),v=new T().setFromMatrixPosition(new ie().multiplyMatrices(g,new ie().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),d=l.bindWorldPositions.get(e),M=l.bindWorldPositions.get(n),w=new T().subVectors(d,m),_=new T().subVectors(M,d),A=w.length(),b=_.length(),S=M.clone();a&&(S.add(a),S.y=Math.max(M.y,S.y));const E=new T().subVectors(S,v),y=E.length(),x=(A+b)*.968,P=Math.abs(A-b)+.085,C=$.clamp(y,P,x),R=E.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),D=$.clamp((A*A+C*C-b*b)/(2*A*C),-1,1),B=Math.sqrt(Math.max(0,1-D*D)),k=v.clone().addScaledVector(R,A*D).addScaledVector(L,A*B),F=v.clone().addScaledVector(R,C),H=new T().subVectors(k,v).normalize(),V=new T().subVectors(F,k).normalize(),Y=new nn().setFromUnitVectors(w.clone().normalize(),H),j=new nn().setFromUnitVectors(_.clone().normalize(),V),W=new nn().setFromRotationMatrix(g);c.quaternion.copy(W).invert().multiply(Y),h.quaternion.copy(Y).invert().multiply(j),u.quaternion.copy(j).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;const o=68,a=11.5,r=$.clamp(-n*.055,-.28,.28),l=$.clamp(-s*.055,-.28,.28);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=$.clamp(e.airborneFactor,0,1),s=this.sampleLivingIdleMicros(t),o=e.subtleBreathing?Math.sin(t*1.55)*.8+Math.sin(t*3.1)*.2:0,a=e.subtleBreathing?Math.sin(t*1.15-.5)*.02:0,r=gs(.02,.55,Math.abs(e.legFlightTuck))*(1-n),l=Math.max(n,r),c=1-l,h=e.forelegStance>=0?e.forelegStance*.055:e.forelegStance*.275,u=e.hindlegStance>=0?e.hindlegStance*.048:e.hindlegStance*.245,p=.52*h+.48*u,f=$.clamp((u-h)*.44,-.22,.24),g=$.clamp(e.limbStride,-1,1)*.045*c,v=r*.34;this.setBonePose("root",f*c,g,0,"XYZ",0,p*c+v+o*.004,0);const m=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+m,-e.spineTwist*.05-g*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+o*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+o*.008,e.spineTwist*.07,0),this.setBonePose("chest",-f*.32*c+o*.01-m*.6,e.spineTwist*.07+g*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const d=$.clamp(e.limbStride,-1,1),M=Math.max(0,-e.forelegStance),w=Math.max(0,-e.hindlegStance);for(const Z of["L","R"]){const Q=Z==="L"?1:-1,G=this.asset.rig.boneMap.get(`scapula_${Z}`);if(this.setBonePose(`scapula_${Z}`,0,0,0),G.updateMatrixWorld(!0),l<.999){const ot=Q*d*.23,gt=-Q*d*.22,tt=Math.max(0,Q*d)*Math.sin(Math.abs(d)*Math.PI)*.042,U=Math.max(0,-Q*d)*Math.sin(Math.abs(d)*Math.PI)*.038,Mt=new T(Q*M*.055,tt,ot+M*.045),at=new T(Q*w*.05,U,gt-w*.04);this.asset.rootGroup.updateMatrixWorld(!1);const pt=new ie().copy(this.asset.rootGroup.matrixWorld).invert(),_t=this.asset.rig.boneMap.get(`shoulder_${Z}`);_t.position.copy(this.restPos.get(`shoulder_${Z}`)),_t.updateMatrixWorld(!0);const It=this.tmpVecC.setFromMatrixPosition(_t.matrixWorld).applyMatrix4(pt),yt=this.asset.rig.bindWorldPositions.get(`wrist_${Z}`).clone().add(Mt),z=It.distanceTo(yt)-.675;z>0&&(this.setBonePose(`scapula_${Z}`,0,0,0,"XYZ",0,-z*1.08*c,0),G.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${Z}`,`elbow_${Z}`,`wrist_${Z}`,`forepaw_${Z}`,this.tmpVecA.set(Q*(.2+.16*M),-.08+.18*M,-1).normalize(),Mt,tt*2.2),this.solvePlantedLimbIK(`hip_${Z}`,`knee_${Z}`,`ankle_${Z}`,`hindpaw_${Z}`,this.tmpVecB.set(Q*(.2+.14*w),.14+.16*w,1).normalize(),at,U*2)}if(l>.001){const ot=$.clamp(e.legFlightTuck,-1,1),gt=e.wingFlap*.082*l,tt=Math.sin(t*2.05+(Z==="L"?0:1.25))*.052*l,U=Math.cos(t*1.58+(Z==="L"?.7:2.2))*.046*l,Mt=(ot>=0?.86*ot:-.44*-ot)+gt*.65+tt*.5,at=ot>=0?-Q*.06*ot:0,pt=(ot>=0?Q*.09*ot:Q*.05*-ot)+Q*U*.35,_t=(ot>=0?.34*ot:.28*-ot)-gt*.55+U*.65,It=(ot>=0?.4*ot:.2*-ot)+tt*.7,yt=(ot>=0?.36*ot:-.1*-ot)+U*.55,z=(ot>=0?1.16*ot:-.48*-ot)+gt*.55+U*.55,I=(ot>=0?-Q*.05*ot:0)+Q*tt*.25,et=(ot>=0?Q*.07*ot:Q*.05*-ot)+Q*tt*.3,dt=(ot>=0?-.66*ot:.34*-ot)-gt*.5-tt*.65,vt=(ot>=0?.78*ot:-.16*-ot)+gt*.45+U*.75,ft=(ot>=0?.62*ot:.16*-ot)+tt*.6,Ft=(ut,St,Zt,xt)=>{const Pt=this.asset.rig.boneMap.get(ut);this.tmpEuler.set(St,Zt,xt,"XYZ"),this.tmpQuat.copy(this.restQuat.get(ut)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),l>=.999?(Pt.position.copy(this.restPos.get(ut)),Pt.quaternion.copy(this.tmpQuat)):Pt.quaternion.slerp(this.tmpQuat,l)};Ft(`shoulder_${Z}`,Mt,at,pt),Ft(`elbow_${Z}`,_t,0,0),Ft(`wrist_${Z}`,It,0,0),Ft(`forepaw_${Z}`,yt,0,0),Ft(`hip_${Z}`,z,I,et),Ft(`knee_${Z}`,dt,0,0),Ft(`ankle_${Z}`,vt,0,0),Ft(`hindpaw_${Z}`,ft,0,0)}}const _=gs(.28,.85,e.jawOpen),A=-e.neckArch*.12-o*.009-_*.035,b=e.neckYaw*.13;this.setBonePose("neck_1",A+e.headPitch*.04,b+e.headYaw*.05,e.headRoll*.04,"YXZ"),this.setBonePose("neck_2",A+e.headPitch*.07,b+e.headYaw*.09,e.headRoll*.07,"YXZ"),this.setBonePose("neck_3",A*.9+e.headPitch*.1,b+e.headYaw*.14,e.headRoll*.11,"YXZ"),this.setBonePose("neck_4",A*.8+e.headPitch*.14,b*.85+e.headYaw*.19,e.headRoll*.15,"YXZ"),this.setBonePose("head",e.headPitch*.36+o*.01-_*.05,e.headYaw*.46,e.headRoll*.36,"YXZ");const S=$.clamp(e.earPerk-_*.28,0,1),E=(S-.5)*.72,y=e.headRoll*.18;for(const Z of["L","R"]){const Q=Z==="L"?1:-1,G=Z==="L"?s.earTwitchL:s.earTwitchR,ot=Q*(e.earAsymmetry*.28+y)+G,gt=E+ot+this.earLagPitch*.65,tt=(1-S)*.36-Q*this.earLagYaw*.55;this.setBonePose(`ear_${Z}_1`,gt*.65,-Q*tt,Q*gt*.25,"YXZ"),this.setBonePose(`ear_${Z}_2`,gt*.36+this.earLagPitch*.35,-Q*tt*.35,0,"YXZ"),this.setBonePose(`ear_${Z}_3`,gt*.24+this.earLagPitch*.25,0,0,"YXZ");const Mt=($.clamp(e.cheekNubFlare+_*.22,0,1)-.5)*.44;this.setBonePose(`cheekUpper_${Z}_1`,Mt*.3,-Q*(Mt*.55+this.earLagYaw*.25),0),this.setBonePose(`cheekLower_${Z}_1`,Mt*.2,-Q*(Mt*.45+this.earLagYaw*.2),0)}const x=$.clamp(e.eyeYaw+s.gazeMicroX,-1,1),P=$.clamp(e.eyePitch+s.gazeMicroY,-1,1),C=Math.max(e.blink,s.autoBlink*(1-e.blink)),R=$.clamp(e.squint+_*.26,0,1);for(const Z of["L","R"]){const Q=Z==="L"?_u:xu,G=Z==="L"?Ov:Hv;this.tmpQuat.setFromAxisAngle(G,x*.34),this.tmpQuatB.setFromAxisAngle(Q,-P*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${Z}`,this.tmpQuat);const ot=P>0?-P*.14:-P*.22,gt=P>0?P*.12:P*.08,tt=$.clamp(Math.max(C,R*.52)+ot*(1-C),-.14,1),U=$.clamp(Math.max(C,R*.6)+gt*(1-C),-.1,1);this.tmpQuat.setFromAxisAngle(Q,tt*.72),this.setBoneAxisQuat(`eyelidUpper_${Z}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(Q,-U*.64),this.setBoneAxisQuat(`eyelidLower_${Z}`,this.tmpQuat)}const L=$.clamp(e.pupilDilation+s.pupilPulse-_*.25,0,1);this.asset.materials.eyeMaterials.uniforms.uPupilDilation.value=L,this.asset.materials.eyeMaterials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uTime.value=t,this.asset.materials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uBiolumGlow.value=e.biolumGlow,this.asset.materials.uniforms.uLightningCloak.value=e.lightningCloak,this.setBonePose("jaw",e.jawOpen*.66,0,0);const D=.28+.72*gs(0,.14,e.jawOpen),k=1-e.teethExtension*D;this.setBonePose("teethUpper",0,0,0,"XYZ",0,k*.025,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-k*.023,0);const F=gs(.06,.48,e.jawOpen),H=e.tongueExtend*.044*F;if(e.tongueCurl>=0){const Z=-e.tongueCurl*(.018+.2*F);this.setBonePose("tongue_1",Z*.35,0,0,"XYZ",0,0,H),this.setBonePose("tongue_2",Z*.65,0,0),this.setBonePose("tongue_3",Z*.95,0,0),this.setBonePose("tongue_4",Z*1.15,0,0)}else{const Z=F*gs(.2,.95,e.tongueExtend),Q=-e.tongueCurl*Z;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,H),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",Q*.13,0,0),this.setBonePose("tongue_4",Q*.2,0,0)}const V=$.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),Y=$.lerp(.11,.74,l);for(const Z of["L","R"]){const Q=Z==="L"?1:-1,G=e.wingFlap*(.25+.75*e.wingUnfurl),ot=Q*(G>=0?G*.74:G*Y),gt=G<0?G*$.lerp(.04,.26,n)*e.wingUnfurl:0,tt=Q*e.wingSweep*.44,U=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${Z}`,.05*V,Q*.12*V,ot*.18,"YXZ"),this.setBonePose(`wingShoulder_${Z}`,e.wingCamber*.09,Q*.82*V+tt,ot-Q*.22*V,"YXZ"),this.setBonePose(`wingElbow_${Z}`,0,-Q*(1.42*V+U*.45),Q*.86*V+ot*.22+Q*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${Z}`,-.35*V-e.wingCamber*.18,Q*(1.32*V+U*.55)+tt*.35,Q*.12*V+Q*gt*.3+Q*e.wingTipLag*.26,"YXZ");for(let at=1;at<=6;at++){const pt=(at-1)/5,_t=Q*(-.38+pt*.58)*V,It=-e.wingCamber*(.14+.18*(1-pt))-.1*V,yt=e.wingTipLag*(.18+.26*pt),z=G>=0?-G*.22:-G*$.lerp(.06*Math.pow(Math.max(0,(pt-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${Z}_${at}_a`,It,_t,Q*(z*.4+yt*.45),"YXZ"),this.setBonePose(`wingFinger_${Z}_${at}_b`,It*.5,_t*.25,Q*(z*.7+yt*.75),"YXZ")}const Mt=1-e.pelvicFinFlare;for(let at=1;at<=3;at++)this.setBonePose(`pelvicFin_${Z}_${at}`,0,0,-Q*Mt*1.18,"XYZ")}for(const Z of this.asset.dorsalSpineMeshes)Z.morphTargetInfluences&&Z.morphTargetInfluences.length>0&&(Z.morphTargetInfluences[0]=e.dorsalSpineSplit);const j=e.autoSyncProstheticTail?e.rightTailFinFlare:e.leftProstheticFinFlare,W=Math.min(e.rightTailFinFlare,j),X=W<0?Math.sin(Math.abs(W)*1.38)*.53:.02;for(let Z=1;Z<=10;Z++){const Q=Z/10,G=Z>=9,ot=G?0:e.tailYaw*.13+e.tailCurl*.18*Math.pow(Q,1.4)+a*Q,gt=G?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-Z*.48)*.085*(.4+.6*Q);let tt=G?0:e.tailPitch*.088*(.45+Q)+gt;if(!G&&n<.85&&Z>=2&&Z<=8){const U=Math.max(0,(X-.05)*.135)*(1-n);tt<U&&(tt=$.lerp(tt,U,gs(1,5,Z)))}if(this.setBonePose(`tail_${Z}`,tt,ot,0,"YXZ"),n<.85){const U=this.asset.rig.boneMap.get(`tail_${Z}`);U.parent.updateMatrixWorld(!0),U.updateMatrixWorld(!0);const Mt=this.tmpVecC.setFromMatrixPosition(U.matrixWorld),pt=Pi(Mt.x,Mt.z)+(Z>=8?.055+X:.065);if(Mt.y<pt&&Z>1){const _t=U.parent,It=U.position.length(),yt=Math.min(.45,(pt-Mt.y)/Math.max(.15,It))*(1-n);this.tmpEuler.set(yt,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),_t.quaternion.multiply(this.tmpQuat),_t.updateMatrixWorld(!0)}}}const O=1.38,it=e.rightTailFinFlare*O,nt=j*O;this.setBonePose("tailFinHinge_R",0,0,-it,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,nt,"XYZ");for(let Z=1;Z<=5;Z++)this.setBonePose(`tailFin_R_${Z}`,0,0,0),this.setBonePose(`tailFin_L_${Z}`,0,0,0);this.setBonePose("prostheticCollar",0,0,nt*.22),this.setBonePose("prostheticRod",0,0,0),this.asset.rig.rootBone.updateMatrixWorld(!0)}}function Mu(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function ih(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Ki(i){const t=Math.max(0,Math.min(1,(i-1.44)/.625)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.78)/.22),2))),n=.054*ih(t,.36,.23),s=-.046*Mu(.5,.88,t),o=.013*ih(t,.77,.13);return(.204+n+s+o)*e}function Ri(i){const t=Math.max(0,Math.min(1,(i-1.55)/.5149999999999999)),e=.022*Math.pow(1-Mu(0,.44,t),1.55),n=-.008*Math.sin(t*Math.PI);return 1.482+e+n}const wu=[{rootX:.018,rootY:.116,rootZ:-3.34,tipX:.34,tipY:.126,tipZ:-3.32},{rootX:.018,rootY:.116,rootZ:-3.5,tipX:.45,tipY:.13,tipZ:-3.52},{rootX:.018,rootY:.116,rootZ:-3.66,tipX:.44,tipY:.13,tipZ:-3.74},{rootX:.018,rootY:.116,rootZ:-3.82,tipX:.34,tipY:.125,tipZ:-3.96},{rootX:.018,rootY:.116,rootZ:-3.97,tipX:.18,tipY:.12,tipZ:-4.14}],yu=[{parentBone:"tail_1",rootX:.155,rootY:.7,rootZ:-.78,tipX:.37,tipY:.68,tipZ:-.92},{parentBone:"tail_2",rootX:.13,rootY:.62,rootZ:-1.02,tipX:.42,tipY:.59,tipZ:-1.19},{parentBone:"tail_2",rootX:.105,rootY:.55,rootZ:-1.24,tipX:.31,tipY:.52,tipZ:-1.42}],mo=new T(.415,.035,.909).normalize(),go=new T(-.415,.035,.909).normalize(),pa=.075;function bu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.292:.274),o=t?.935:-.51,a=.036,r=t?.074:.069,l=[],c=[-.84,-.28,.28,.84];for(let h=0;h<4;h++){const u=c[h]+e*.05,p=h===1||h===2,f=(t?.106:.098)*(p?1:.86),g=(t?.054:.05)*(p?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.032,dirX:Math.sin(u)*.9,dirZ:Math.cos(u),toeLength:f,baseRadius:p?.037:.033,tipRadius:p?.024:.021,clawLength:g})}return l}function Wv(){const i=[{name:"root",parent:null,worldPos:[0,.79,.11]},{name:"pelvis",parent:"root",worldPos:[0,.77,-.5]},{name:"spine_1",parent:"root",worldPos:[0,.78,.13]},{name:"spine_2",parent:"spine_1",worldPos:[0,.84,.46]},{name:"chest",parent:"spine_2",worldPos:[0,.91,.79]},{name:"neck_1",parent:"chest",worldPos:[0,1.04,.99]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.19,1.14]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.35,1.28]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.47,1.4]},{name:"head",parent:"neck_4",worldPos:[0,1.535,1.51]},{name:"eye_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eye_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidUpper_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidLower_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidLower_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"teethUpper",parent:"head",worldPos:[0,1.495,1.8]},{name:"jaw",parent:"head",worldPos:[0,1.49,1.55]},{name:"teethLower",parent:"jaw",worldPos:[0,1.472,1.8]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.472,1.62]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.472,1.72]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.472,1.82]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.47,1.91]},{name:"ear_L_1",parent:"head",worldPos:[.118,1.665,1.48]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.142,1.748,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.156,1.815,1.29]},{name:"ear_R_1",parent:"head",worldPos:[-.118,1.665,1.48]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.142,1.748,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.156,1.815,1.29]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.222,1.568,1.49]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.268,1.592,1.4]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.222,1.568,1.49]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.268,1.592,1.4]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.2,.87,.81]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.232,.75,.83]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.278,.435,.74]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.288,.142,.87]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.292,.04,.965]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.192,.71,-.5]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.256,.425,-.32]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.27,.215,-.61]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.274,.04,-.475]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.21,.96,.69]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.34,1,.67]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.88,1.05,.46]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.56,1.11,.86]}),[{mid:[n*1.48,1.08,.16],tip:[n*1.4,.99,-.6]},{mid:[n*1.84,1.09,.22],tip:[n*2.04,1,-.56]},{mid:[n*2.18,1.11,.33],tip:[n*2.62,1.02,-.4]},{mid:[n*2.48,1.13,.48],tip:[n*3.14,1.05,-.14]},{mid:[n*2.78,1.15,.68],tip:[n*3.54,1.08,.22]},{mid:[n*2.94,1.17,.86],tip:[n*3.9,1.12,.7]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.72,-.76],[0,.63,-1.08],[0,.5,-1.43],[0,.36,-1.8],[0,.24,-2.18],[0,.16,-2.56],[0,.12,-2.94],[0,.116,-3.3],[0,.116,-3.66],[0,.116,-4.06]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;yu.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.02,.116,-3.65]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.02,.116,-3.65]});for(const e of["L","R"]){const n=e==="L"?1:-1;wu.forEach((s,o)=>{i.push({name:`tailFin_${e}_${o+1}`,parent:`tailFinHinge_${e}`,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i}function Gv(){const i=Wv(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new vl;c.name=l.name;const h=new T(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),p=s.get(l.parent);c.position.copy(h).sub(p),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new xa(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}const hn={neckArch:.24,neckYaw:-.1,headPitch:-.02,headYaw:-.18,headRoll:.16,earPerk:.82,earAsymmetry:.1,cheekNubFlare:.52,eyeYaw:-.08,eyePitch:.04,pupilDilation:.84,blink:0,squint:.08,jawOpen:0,teethExtension:0,tongueExtend:.1,tongueCurl:.05,wingUnfurl:.36,wingFlap:.06,wingSweep:-.08,wingCamber:.28,wingWristFold:0,wingTipLag:0,coyWingVeil:0,pelvicFinFlare:.88,dorsalSailFlex:.24,spineArch:.12,spineTwist:-.04,forelegStance:.14,hindlegStance:.08,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:-.26,tailPitch:.24,tailCurl:-.24,tailWaveAmp:0,tailWavePhase:0,rightHeartFinFlare:.18,leftHeartFinFlare:.18,syncHeartTailFlukes:!0,subtleBreathing:!0,iridescentShimmer:.78,pastelTint:.78,radiantGlow:.34,biolumGlow:0,plasmaGlow:.04,thermalCloak:0},Xv=[{id:"serene-mate",label:"Serene Mate",subtitle:"Sweet Gaze & Heart Tail",patch:{...hn}},{id:"curious-cat",label:"Curious Tilt",subtitle:"Adorable Head-Roll & Big Eyes",patch:{...hn,headRoll:.68,headPitch:.1,headYaw:-.06,earPerk:.98,earAsymmetry:.42,pupilDilation:.96,squint:0,jawOpen:.06,teethExtension:0,coyWingVeil:0,thermalCloak:0,plasmaGlow:.08}},{id:"happy-purr",label:"Happy Purr",subtitle:"Blissful Feline Smile",patch:{...hn,neckArch:.42,neckYaw:-.22,headYaw:-.28,headPitch:-.1,headRoll:.28,earPerk:.66,squint:.68,blink:.22,pupilDilation:.9,jawOpen:.14,teethExtension:0,tongueExtend:.35,tailYaw:-.45,tailCurl:-.48,rightHeartFinFlare:.04,leftHeartFinFlare:.04,coyWingVeil:0,thermalCloak:0,iridescentShimmer:.95}},{id:"coy-wing-veil",label:"Coy Wing Peek",subtitle:"Shy Wing-Curtain Pose",patch:{...hn,headYaw:-.26,headPitch:-.12,headRoll:.34,eyeYaw:.22,eyePitch:.14,pupilDilation:.88,earPerk:.58,coyWingVeil:.92,wingUnfurl:.52,thermalCloak:0}},{id:"hidden-world-biolum",label:"Hidden World Glow",subtitle:"Neon Rose & Cyan Filigree",patch:{...hn,wingUnfurl:.78,wingFlap:.22,neckArch:.34,headRoll:.22,pupilDilation:.94,iridescentShimmer:.96,radiantGlow:.64,biolumGlow:.96,plasmaGlow:.42,thermalCloak:0}},{id:"mirror-cloak",label:"Mirror Cloak",subtitle:"Plasma Silicate Stealth",patch:{...hn,wingUnfurl:.72,wingFlap:.24,neckArch:.3,headPitch:.12,pupilDilation:.62,coyWingVeil:0,plasmaGlow:.78,iridescentShimmer:1,thermalCloak:.86}},{id:"strike-hiss",label:"Strike Hiss",subtitle:"Fangs & Orchid Plasma",patch:{...hn,forelegStance:-.55,spineArch:.42,neckArch:-.18,headPitch:-.14,headRoll:-.08,earPerk:.06,squint:.48,pupilDilation:.06,jawOpen:.76,teethExtension:1,tongueExtend:.48,tongueCurl:.45,wingUnfurl:.84,wingFlap:.38,wingSweep:.32,coyWingVeil:0,dorsalSailFlex:1,plasmaGlow:.92,thermalCloak:0}}];function vs(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const Yv=new T(-.19,.98,.06).normalize(),$v=new T(.19,.98,.06).normalize(),Su=new T().crossVectors(Yv,mo).normalize(),qv=new T().crossVectors(mo,Su).normalize(),Au=new T().crossVectors($v,go).normalize(),Zv=new T().crossVectors(go,Au).normalize();class jv{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new Cn;tmpQuat=new nn;tmpQuatB=new nn;tmpVecA=new T;tmpVecB=new T;tmpVecC=new T;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...hn,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,hn),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.syncHeartTailFlukes&&(t.rightHeartFinFlare!==void 0?this.state.leftHeartFinFlare=t.rightHeartFinFlare:t.leftHeartFinFlare!==void 0?this.state.rightHeartFinFlare=t.leftHeartFinFlare:t.syncHeartTailFlukes===!0&&(this.state.leftHeartFinFlare=this.state.rightHeartFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingFelineIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0,felineHeadMicroRoll:0};const e=(t+2.15)%4.35;let n=0;e<.16?n=Math.sin(e/.16*Math.PI):e>.25&&e<.4&&Math.floor((t+2.15)/4.35)%3===1&&(n=Math.sin((e-.25)/.15*Math.PI));const s=(t+.8)%5.6,o=s<.2?Math.sin(s/.2*Math.PI)*.095:0,a=(t+3.2)%6.8,r=a<.18?-Math.sin(a/.18*Math.PI)*.085:0,l=Math.sin(t*.68+1.4)*.03+Math.sin(t*1.85)*.012,c=Math.cos(t*.54+2.1)*.022,h=Math.sin(t*1.25+.8)*.028,u=Math.sin(t*.62+.7)*.026;return{autoBlink:n,earTwitchL:o,earTwitchR:r,gazeMicroX:l,gazeMicroY:c,pupilPulse:h,felineHeadMicroRoll:u}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),p=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),p.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),p.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new ie().copy(this.asset.rootGroup.matrixWorld).invert(),g=new ie().multiplyMatrices(f,c.parent.matrixWorld),v=new T().setFromMatrixPosition(new ie().multiplyMatrices(g,new ie().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),d=l.bindWorldPositions.get(e),M=l.bindWorldPositions.get(n),w=new T().subVectors(d,m),_=new T().subVectors(M,d),A=w.length(),b=_.length(),S=M.clone();a&&(S.add(a),S.y=Math.max(M.y,S.y));const E=new T().subVectors(S,v),y=E.length(),x=(A+b)*.968,P=Math.abs(A-b)+.08,C=$.clamp(y,P,x),R=E.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),D=$.clamp((A*A+C*C-b*b)/(2*A*C),-1,1),B=Math.sqrt(Math.max(0,1-D*D)),k=v.clone().addScaledVector(R,A*D).addScaledVector(L,A*B),F=v.clone().addScaledVector(R,C),H=new T().subVectors(k,v).normalize(),V=new T().subVectors(F,k).normalize(),Y=new nn().setFromUnitVectors(w.clone().normalize(),H),j=new nn().setFromUnitVectors(_.clone().normalize(),V),W=new nn().setFromRotationMatrix(g);c.quaternion.copy(W).invert().multiply(Y),h.quaternion.copy(Y).invert().multiply(j),u.quaternion.copy(j).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;const o=64,a=10.8,r=$.clamp(-n*.06,-.3,.3),l=$.clamp(-s*.06,-.3,.3);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=$.clamp(e.airborneFactor,0,1),s=this.sampleLivingFelineIdleMicros(t),o=e.subtleBreathing&&e.squint>.35?Math.sin(t*24)*.08*e.squint:0,a=e.subtleBreathing?Math.sin(t*1.68+.9)*.8+Math.sin(t*3.36+.9)*.2+o:0,r=e.subtleBreathing?Math.sin(t*1.28+1.2)*.026:0,l=vs(.02,.55,Math.abs(e.legFlightTuck))*(1-n),c=Math.max(n,l),h=1-c,u=e.forelegStance>=0?e.forelegStance*.05:e.forelegStance*.255,p=e.hindlegStance>=0?e.hindlegStance*.044:e.hindlegStance*.23,f=.52*u+.48*p,g=$.clamp((p-u)*.44,-.22,.24),v=$.clamp(e.limbStride,-1,1)*.045*h,m=l*.34;this.setBonePose("root",g*h,v,0,"XYZ",0,f*h+m+a*.004,0);const d=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+d,-e.spineTwist*.05-v*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+a*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+a*.008,e.spineTwist*.07,0),this.setBonePose("chest",-g*.32*h+a*.01-d*.6,e.spineTwist*.07+v*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const M=$.clamp(e.limbStride,-1,1),w=Math.max(0,-e.forelegStance),_=Math.max(0,-e.hindlegStance);for(const G of["L","R"]){const ot=G==="L"?1:-1,gt=this.asset.rig.boneMap.get(`scapula_${G}`);if(this.setBonePose(`scapula_${G}`,0,0,0),gt.updateMatrixWorld(!0),c<.999){const tt=ot*M*.21,U=-ot*M*.2,Mt=Math.max(0,ot*M)*Math.sin(Math.abs(M)*Math.PI)*.038,at=Math.max(0,-ot*M)*Math.sin(Math.abs(M)*Math.PI)*.034,pt=new T(ot*w*.05,Mt,tt+w*.04),_t=new T(ot*_*.045,at,U-_*.036);this.asset.rootGroup.updateMatrixWorld(!1);const It=new ie().copy(this.asset.rootGroup.matrixWorld).invert(),yt=this.asset.rig.boneMap.get(`shoulder_${G}`);yt.position.copy(this.restPos.get(`shoulder_${G}`)),yt.updateMatrixWorld(!0);const z=this.tmpVecC.setFromMatrixPosition(yt.matrixWorld).applyMatrix4(It),I=this.asset.rig.bindWorldPositions.get(`wrist_${G}`).clone().add(pt),et=z.distanceTo(I)-.615;et>0&&(this.setBonePose(`scapula_${G}`,0,0,0,"XYZ",0,-et*1.08*h,0),gt.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${G}`,`elbow_${G}`,`wrist_${G}`,`forepaw_${G}`,this.tmpVecA.set(ot*(.2+.16*w),-.08+.18*w,-1).normalize(),pt,Mt*2.2),this.solvePlantedLimbIK(`hip_${G}`,`knee_${G}`,`ankle_${G}`,`hindpaw_${G}`,this.tmpVecB.set(ot*(.2+.14*_),.14+.16*_,1).normalize(),_t,at*2)}if(c>.001){const tt=$.clamp(e.legFlightTuck,-1,1),U=e.wingFlap*.075*c,Mt=Math.sin(t*2.15+(G==="L"?0:1.15))*.048*c,at=Math.cos(t*1.65+(G==="L"?.6:2.1))*.042*c,pt=(tt>=0?.88*tt:-.44*-tt)+U*.65+Mt*.5,_t=tt>=0?-ot*.06*tt:0,It=(tt>=0?ot*.09*tt:ot*.05*-tt)+ot*at*.35,yt=(tt>=0?.36*tt:.28*-tt)-U*.55+at*.65,z=(tt>=0?.42*tt:.2*-tt)+Mt*.7,I=(tt>=0?.38*tt:-.1*-tt)+at*.55,et=(tt>=0?1.18*tt:-.48*-tt)+U*.55+at*.55,dt=(tt>=0?-ot*.05*tt:0)+ot*Mt*.25,vt=(tt>=0?ot*.07*tt:ot*.05*-tt)+ot*Mt*.3,ft=(tt>=0?-.68*tt:.34*-tt)-U*.5-Mt*.65,Ft=(tt>=0?.82*tt:-.16*-tt)+U*.45+at*.75,ut=(tt>=0?.64*tt:.16*-tt)+Mt*.6,St=(Zt,xt,Pt,Vt)=>{const $t=this.asset.rig.boneMap.get(Zt);this.tmpEuler.set(xt,Pt,Vt,"XYZ"),this.tmpQuat.copy(this.restQuat.get(Zt)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),c>=.999?($t.position.copy(this.restPos.get(Zt)),$t.quaternion.copy(this.tmpQuat)):$t.quaternion.slerp(this.tmpQuat,c)};St(`shoulder_${G}`,pt,_t,It),St(`elbow_${G}`,yt,0,0),St(`wrist_${G}`,z,0,0),St(`forepaw_${G}`,I,0,0),St(`hip_${G}`,et,dt,vt),St(`knee_${G}`,ft,0,0),St(`ankle_${G}`,Ft,0,0),St(`hindpaw_${G}`,ut,0,0)}}const A=vs(.32,.85,e.jawOpen),b=e.headRoll+s.felineHeadMicroRoll*(1-n),S=-e.neckArch*.12-a*.009-A*.032,E=e.neckYaw*.14;this.setBonePose("neck_1",S+e.headPitch*.04,E+e.headYaw*.05,b*.05,"YXZ"),this.setBonePose("neck_2",S+e.headPitch*.07,E+e.headYaw*.09,b*.08,"YXZ"),this.setBonePose("neck_3",S*.9+e.headPitch*.11,E+e.headYaw*.14,b*.12,"YXZ"),this.setBonePose("neck_4",S*.8+e.headPitch*.15,E*.85+e.headYaw*.19,b*.16,"YXZ"),this.setBonePose("head",e.headPitch*.36+a*.01-A*.045,e.headYaw*.46,b*.4,"YXZ");const y=$.clamp(e.earPerk-A*.32,0,1),x=(y-.5)*.68,P=b*.2;for(const G of["L","R"]){const ot=G==="L"?1:-1,gt=G==="L"?s.earTwitchL:s.earTwitchR,tt=ot*(e.earAsymmetry*.28+P)+gt,U=x+tt+this.earLagPitch*.65,Mt=(1-y)*.32-ot*this.earLagYaw*.5;this.setBonePose(`ear_${G}_1`,U*.6,-ot*Mt,ot*U*.22,"YXZ"),this.setBonePose(`ear_${G}_2`,U*.34+this.earLagPitch*.32,-ot*Mt*.32,0,"YXZ"),this.setBonePose(`ear_${G}_3`,U*.22+this.earLagPitch*.22,0,0,"YXZ");const at=($.clamp(e.cheekNubFlare+A*.2,0,1)-.5)*.4;this.setBonePose(`cheekUpper_${G}_1`,at*.28,-ot*(at*.5+this.earLagYaw*.22),0)}const C=$.clamp(e.eyeYaw+s.gazeMicroX,-1,1),R=$.clamp(e.eyePitch+s.gazeMicroY,-1,1),L=Math.max(e.blink,s.autoBlink*(1-e.blink)),D=$.clamp(e.squint+A*.24,0,1);for(const G of["L","R"]){const ot=G==="L"?Su:Au,gt=G==="L"?qv:Zv;this.tmpQuat.setFromAxisAngle(gt,C*.34),this.tmpQuatB.setFromAxisAngle(ot,-R*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${G}`,this.tmpQuat);const tt=R>0?-R*.14:-R*.22,U=R>0?R*.12:R*.08,Mt=$.clamp(Math.max(L,D*.54)+tt*(1-L),-.14,1),at=$.clamp(Math.max(L,D*.62)+U*(1-L),-.1,1);this.tmpQuat.setFromAxisAngle(ot,Mt*.72),this.setBoneAxisQuat(`eyelidUpper_${G}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(ot,-at*.64),this.setBoneAxisQuat(`eyelidLower_${G}`,this.tmpQuat)}const B=$.clamp(e.pupilDilation+s.pupilPulse-A*.28,0,1),k=this.asset.materials;k.eyeMaterials.uniforms.uPupilDilation.value=B,k.eyeMaterials.uniforms.uBiolumGlow.value=e.biolumGlow,k.eyeMaterials.uniforms.uPlasmaGlow.value=e.plasmaGlow,k.eyeMaterials.uniforms.uThermalCloak.value=e.thermalCloak,k.uniforms.uTime.value=t,k.uniforms.uIridescentShimmer.value=e.iridescentShimmer,k.uniforms.uPastelTint.value=e.pastelTint,k.uniforms.uRadiantGlow.value=e.radiantGlow,k.uniforms.uBiolumGlow.value=e.biolumGlow,k.uniforms.uPlasmaGlow.value=e.plasmaGlow,k.uniforms.uThermalCloak.value=e.thermalCloak;const F=k.syncCloakTransparency(e.thermalCloak);for(const G of this.asset.hullDepthMeshes)G.visible=F;this.setBonePose("jaw",e.jawOpen*.64,0,0);const H=.28+.72*vs(0,.14,e.jawOpen),V=1-e.teethExtension*H;this.setBonePose("teethUpper",0,0,0,"XYZ",0,V*.022,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-V*.02,0);const Y=vs(.06,.48,e.jawOpen),j=e.tongueExtend*.039*Y;if(e.tongueCurl>=0){const G=-e.tongueCurl*(.016+.19*Y);this.setBonePose("tongue_1",G*.35,0,0,"XYZ",0,0,j),this.setBonePose("tongue_2",G*.65,0,0),this.setBonePose("tongue_3",G*.95,0,0),this.setBonePose("tongue_4",G*1.15,0,0)}else{const G=Y*vs(.2,.95,e.tongueExtend),ot=-e.tongueCurl*G;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,j),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",ot*.12,0,0),this.setBonePose("tongue_4",ot*.18,0,0)}const W=$.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),X=$.lerp(.11,.74,c);for(const G of["L","R"]){const ot=G==="L"?1:-1,gt=G==="R"?e.coyWingVeil*h:0,tt=e.wingFlap*(.25+.75*e.wingUnfurl),U=ot*(tt>=0?tt*.74:tt*X),Mt=tt<0?tt*$.lerp(.04,.26,c)*e.wingUnfurl:0,at=ot*(e.wingSweep*.44-gt*.68),pt=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${G}`,.05*W+gt*.08,ot*.12*W,U*.18,"YXZ"),this.setBonePose(`wingShoulder_${G}`,e.wingCamber*.09+gt*.18,ot*.82*W*(1-gt*.65)+at,U-ot*.22*W+ot*gt*.32,"YXZ"),this.setBonePose(`wingElbow_${G}`,gt*.12,-ot*(1.42*W*(1-gt*.58)+pt*.45-gt*.42),ot*.86*W*(1-gt*.45)+U*.22+ot*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${G}`,-.35*W-e.wingCamber*.18-gt*.28,ot*(1.32*W*(1-gt*.6)+pt*.55-gt*.48)+at*.35,ot*.12*W+ot*Mt*.3+ot*e.wingTipLag*.26,"YXZ");for(let It=1;It<=6;It++){const yt=(It-1)/5,z=ot*(-.38+yt*.58)*W*(1-gt*.6),I=-e.wingCamber*(.14+.18*(1-yt))-.1*W-gt*.24,et=e.wingTipLag*(.18+.26*yt),dt=tt>=0?-tt*.22:-tt*$.lerp(.06*Math.pow(Math.max(0,(yt-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${G}_${It}_a`,I,z,ot*(dt*.4+et*.45),"YXZ"),this.setBonePose(`wingFinger_${G}_${It}_b`,I*.5,z*.25,ot*(dt*.7+et*.75),"YXZ")}const _t=1-e.pelvicFinFlare;for(let It=1;It<=3;It++)this.setBonePose(`pelvicFin_${G}_${It}`,0,0,-ot*_t*1.18,"XYZ")}for(const G of this.asset.dorsalSailMeshes)G.morphTargetInfluences&&G.morphTargetInfluences.length>0&&(G.morphTargetInfluences[0]=e.dorsalSailFlex);const O=e.syncHeartTailFlukes?e.rightHeartFinFlare:e.leftHeartFinFlare,it=Math.min(e.rightHeartFinFlare,O),nt=it<0?Math.sin(Math.abs(it)*1.38)*.48:.02;this.asset.rootGroup.updateMatrixWorld(!1);for(let G=1;G<=10;G++){const ot=G/10,gt=G>=9,tt=gt?0:e.tailYaw*.14+e.tailCurl*.19*Math.pow(ot,1.4)+r*ot,U=gt?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-G*.48)*.085*(.4+.6*ot);let Mt=gt?0:e.tailPitch*.088*(.45+ot)+U;if(!gt&&n<.85&&G>=2&&G<=8){const at=Math.max(0,(nt-.05)*.135)*(1-n);Mt<at&&(Mt=$.lerp(Mt,at,vs(1,5,G)))}if(this.setBonePose(`tail_${G}`,Mt,tt,0,"YXZ"),n<.85){const at=this.asset.rig.boneMap.get(`tail_${G}`);at.parent.updateMatrixWorld(!0),at.updateMatrixWorld(!0);const pt=this.tmpVecC.setFromMatrixPosition(at.matrixWorld),It=Pi(pt.x,pt.z)+(G>=8?.05+nt:.058);if(pt.y<It&&G>1){const yt=at.parent,z=at.position.length(),I=Math.min(.45,(It-pt.y)/Math.max(.14,z))*(1-n);this.tmpEuler.set(I,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),yt.quaternion.multiply(this.tmpQuat),yt.updateMatrixWorld(!0)}}}const Z=-e.rightHeartFinFlare*1.38,Q=O*1.38;this.setBonePose("tailFinHinge_R",0,0,Z,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,Q,"XYZ");for(let G=1;G<=5;G++)this.setBonePose(`tailFin_R_${G}`,0,0,0),this.setBonePose(`tailFin_L_${G}`,0,0,0);this.asset.rig.rootBone.updateMatrixWorld(!0)}}function Ai(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function ze(i,t,e,n,s){return i<=t||i>=s?0:i<e?Ai(t,e,i):i>n?1-Ai(n,s,i):1}function to(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function Kv(i,t,e){return i+to(t-i)*e}function Qv(i,t,e){const s=i/Math.max(1,64);let o=e;for(let a=0;a<64;a++){const r=(a+.5)*s,l=Ai(.4,2.4,r),c=ze(r,7.6,8.8,15.2,16.5),h=1-.18*Ai(18.5,22.5,r),u=$.lerp(4.45,5.18,l)*h,p=$.lerp(u,1.65,c)*t;o+=p*s}return o}class Zi{static DURATION_SEC=25;isPlaying=!1;isPaused=!1;loop=!1;followCamera=!0;subjectMode="duet";toothlessAsset;toothlessController;lightFuryAsset;lightFuryController;toothlessSpline;lightFurySpline;flightTime=0;tmpPos=new T;tmpPosAhead=new T;tmpPosBehind=new T;tmpPosLook=new T;tmpVel=new T;tmpEuler=new Cn;tmpQuat=new nn;prevWorldAnchor=new T(0,1.15,.35);constructor(t,e,n,s){this.toothlessAsset=t,this.toothlessController=e,this.lightFuryAsset=n,this.lightFuryController=s;const o=Wn.position.clone(),a=Gn.position.clone();this.toothlessSpline=new Bn([o.clone(),new T(6.8,3.8,8.2),new T(16.4,11.4,19.5),new T(24.5,17.6,33.5),new T(12.5,19.6,44.5),new T(-6.5,17.2,39.5),new T(-19.5,6.8,29),new T(-22.5,-3.2,18.5),new T(-17.5,10.6,3.5),new T(-2.5,9.8,-5.8),new T(3.85,3.15,-2.15),o.clone()],!1,"centripetal",.5),this.lightFurySpline=new Bn([a.clone(),new T(-3.2,4.1,7.8),new T(6.2,12,20.4),new T(14.2,18.3,34.8),new T(2.2,20.2,46),new T(-16.8,17.8,41),new T(-29.8,7.4,30.2),new T(-32.8,-2.8,19.2),new T(-27.2,11.2,4.2),new T(-12.2,10.2,-5.8),new T(-5.15,3.05,-2.35),a.clone()],!1,"centripetal",.5)}setSubjectMode(t){this.subjectMode!==t&&(this.subjectMode=t,this.isPlaying&&(this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())))}resetDragonToPerch(t){t==="toothless"?(this.toothlessAsset.rootGroup.position.copy(Wn.position),this.toothlessAsset.rootGroup.rotation.set(0,Wn.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0),this.toothlessController.resetToHeroPose()):this.lightFuryAsset&&this.lightFuryController&&(this.lightFuryAsset.rootGroup.position.copy(Gn.position),this.lightFuryAsset.rootGroup.rotation.set(0,Gn.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0),this.lightFuryController.resetToHeroPose())}computeDesiredWorldFocus(){const t=this.toothlessAsset.rig.boneMap.get("chest"),e=new T().setFromMatrixPosition(t.matrixWorld);if(!this.lightFuryAsset)return e;const n=this.lightFuryAsset.rig.boneMap.get("chest"),s=new T().setFromMatrixPosition(n.matrixWorld);return this.subjectMode==="toothless"?e:this.subjectMode==="light-fury"?s:e.add(s).multiplyScalar(.5)}startFromBeginning(){this.flightTime=0,this.isPlaying=!0,this.isPaused=!1,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(0),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}togglePlayPause(){if(!this.isPlaying){this.startFromBeginning();return}this.isPaused=!this.isPaused}stopAndResetToPerch(){this.isPlaying=!1,this.isPaused=!1,this.flightTime=0,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.prevWorldAnchor.set(0,1.15,.35)}scrubToProgress(t){const e=$.clamp(t,0,1);this.isPlaying||(this.isPlaying=!0,this.isPaused=!0),this.flightTime=e*Zi.DURATION_SEC,this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}getPhaseInfo(){const t=this.flightTime,e=this.subjectMode==="duet";let n=e?"Twin Perch Ready":"Perched Ready";return this.isPlaying&&(t<2.8?n=e?"1/6 · Twin Courtship Cliff Leap":"1/6 · Launch Crouch & Cliff Leap":t<7.8?n="2/6 · Majestic Climbing Wingbeats":t<13?n=e?"3/6 · Wingtip Courtship Sky Soar":"3/6 · High-Altitude Sky Soar":t<17.4?n=e?"4/6 · Mirror-Cloak Ocean Skim":"4/6 · Peregrine Ocean Skim":t<21.8?n="5/6 · Cushioned Air-Brake Hover":n=e?"6/6 · Twin Touchdown & Settle":"6/6 · Four-Paw Landing & Settle"),{isPlaying:this.isPlaying,isPaused:this.isPaused,loop:this.loop,followCamera:this.followCamera,subjectMode:this.subjectMode,progress:$.clamp(t/Zi.DURATION_SEC,0,1),elapsedSec:t,durationSec:Zi.DURATION_SEC,phaseLabel:n}}update(t,e,n){if(!this.isPlaying)return this.prevWorldAnchor.set(0,1.15,.35),{worldFocus:this.prevWorldAnchor,isAirborne:!1};if(!this.isPaused&&(this.flightTime+=t,this.flightTime>=Zi.DURATION_SEC))if(this.loop)this.flightTime%=Zi.DURATION_SEC;else return this.stopAndResetToPerch(),{worldFocus:this.prevWorldAnchor,isAirborne:!1};this.applyAtTime(this.flightTime);const s=this.computeDesiredWorldFocus();if(this.followCamera){const r=s.clone().sub(this.prevWorldAnchor);n.add(r),e.position.add(r);const l=ze(this.flightTime,1.8,5.2,18.8,23.2),c=this.subjectMode==="duet"?9.4:4.95,h=this.subjectMode==="duet"?17.8:11.2,u=$.lerp(c,h,l),p=e.position.clone().sub(n),f=Math.max(.5,p.length()),g=$.lerp(f,u,1-Math.exp(-2.2*Math.max(.016,t)));p.setLength(g),e.position.copy(n).add(p);const v=Si(e.position.x,e.position.z),m=Math.max(-8.8,v+1.8);e.position.y<m&&(e.position.y=m),n.lerp(s,1-Math.exp(-7.5*Math.max(.016,t)))}this.prevWorldAnchor.copy(s);const o=this.toothlessController.state.airborneFactor,a=this.lightFuryController?.state.airborneFactor??0;return{worldFocus:s,isAirborne:Math.max(o,a)>.15}}computeKinematicsAlongSpline(t,e,n,s,o,a){let h=0;if(s<=2.05)h=0;else if(s>=21.85)h=1;else{const L=(s-2.05)/19.8,D=L*L*(3-2*L),B=Math.sin(L*Math.PI*2-1.2)*.024*Math.sin(L*Math.PI);h=$.clamp($.lerp(L,D,.38)+B,0,1)}const u=ze(s,2.05-.1,2.05+.72,21.85-.75,21.85+.08),p=ze(s,1.65,2.75,7.2,8.6),f=ze(s,7.8,9,12.2,13.4),g=ze(s,12.6,13.6,16.4,17.5),v=ze(s,15.8,16.8,18,19),m=ze(s,18,19.2,21.1,22.05),d=Qv(s,a,o),M=$.clamp(p*.94+v*.82+m*.88+(1-f)*(1-g)*.16,0,.96)*u,w=Math.sin(d),_=$.clamp(w+.14*Math.sin(d*2),-1,1),A=Math.cos(d),b=-A*.26*M,S=A*.056*M;let E=0,y=0,x=0,P=0;const C=e.clone(),R=new nn().setFromEuler(new Cn(0,n,0,"YXZ"));if(h>1e-4&&h<.9999){const D=Math.max(0,h-.008),B=Math.min(1,h+.008);t.getPointAt(h,this.tmpPos),t.getPointAt(D,this.tmpPosBehind),t.getPointAt(B,this.tmpPosAhead),this.tmpVel.subVectors(this.tmpPosAhead,this.tmpPosBehind).normalize();const k=Math.atan2(this.tmpVel.x,this.tmpVel.z),F=Math.max(0,h-.028),H=Math.min(1,h+.028),V=t.getTangentAt(F),Y=t.getTangentAt(H),j=Math.atan2(V.x,V.z),W=Math.atan2(Y.x,Y.z);E=to(W-j)/Math.max(.005,H-F);const X=Math.min(1,h+.048);t.getTangentAt(X,this.tmpPosLook);const O=Math.atan2(this.tmpPosLook.x,this.tmpPosLook.z);y=to(O-k),P=-Math.asin($.clamp(this.tmpVel.y,-.84,.84));const it=-.56*m,nt=ze(h,.025,.11,.86,.98);x=$.clamp(-E*.24,-.74,.74)*nt;const Z=ze(h,0,.032,.962,1);C.lerpVectors(e,this.tmpPos,Z),C.y+=b*nt;const Q=ze(h,.04,.09,.91,.96);if(Q>.001){const tt=Si(C.x,C.z),U=Si(C.x-3.6,C.z),Mt=Si(C.x+3.6,C.z),at=Math.max(tt,U,Mt),pt=Math.max(-7.2,at+3.8*Q);C.y<pt&&(C.y=pt)}const G=Kv(n,k,Z),ot=(P*.86+it+S)*Z,gt=x*Z;this.tmpEuler.set(ot,G,gt,"YXZ"),R.setFromEuler(this.tmpEuler)}return{u:h,airborneEnv:u,climbEnv:p,glideEnv:f,diveEnv:g,pulloutEnv:v,brakeEnv:m,flapPhase:d,activeFlapAmp:M,flapSin:_,flapCos:A,lookAheadTurnDiff:y,bankRoll:x,pathClimbPitch:P,outPos:C,outQuat:R}}applyToothlessFlightAtTime(t,e){const n=this.computeKinematicsAlongSpline(this.toothlessSpline,Wn.position,Wn.yaw,t,0,1);this.toothlessAsset.rootGroup.position.copy(n.outPos),this.toothlessAsset.rootGroup.quaternion.copy(n.outQuat),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const s=ze(t,.35,1.15,1.68,2.1),o=ze(t,1.82,2.05,2.35,2.85),a=ze(t,19.2,20.2,21.75,22.25),r=ze(t,21.75,22.2,22.85,23.9),l=ze(t,23.1,23.65,24.35,24.95),c=e?.34*n.glideEnv+.36*l:-.22*l,h=fn.forelegStance*(1-s-r)-.88*s-.8*r+.18*l,u=fn.hindlegStance*(1-s-r)-.84*s-.76*r+.12*l,p=$.clamp(.82*n.airborneEnv-1.55*o-1.58*a,-.84,.88),f=$.lerp(fn.wingUnfurl+.34*s,1-.16*n.diveEnv,Ai(.95,2.15,t)*(1-Ai(22.1,24.1,t))),g=Math.max(0,n.flapCos)*.56*n.activeFlapAmp*(1-n.brakeEnv*.6),v=$.clamp(.68*s+n.flapSin*.92*n.activeFlapAmp+.14*n.glideEnv-.08*n.diveEnv,-1,1),m=-n.flapCos*.84*n.activeFlapAmp,d=$.clamp(fn.wingSweep*(1-n.airborneEnv)-.8*n.diveEnv+.74*n.brakeEnv-.16*s,-1,1),M=Math.max(0,-n.flapSin)*n.activeFlapAmp,w=$.clamp(.28+.46*M+.54*n.pulloutEnv+.64*n.brakeEnv-.18*n.diveEnv,.08,1),_=$.clamp(.22*(1-n.airborneEnv)+.95*n.glideEnv+.85*Math.min(1,Math.abs(n.bankRoll)*1.8)+.9*n.brakeEnv,.15,1),A=.24*(1-n.airborneEnv)+.18*n.climbEnv+.06*n.glideEnv+.42*n.diveEnv-.32*n.brakeEnv,b=$.clamp(n.bankRoll*.38,-.32,.32),S={airborneFactor:n.airborneEnv,forelegStance:h,hindlegStance:u,limbStride:0,legFlightTuck:p,spineArch:.2*s-.16*o+.24*n.brakeEnv+.08*(1-n.airborneEnv),spineTwist:$.clamp(-n.bankRoll*.35,-1,1),wingUnfurl:f,wingFlap:v,wingWristFold:g,wingTipLag:m,wingSweep:d,wingCamber:w,pelvicFinFlare:$.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.35*n.diveEnv,.3,1),dorsalSpineSplit:_,autoSyncProstheticTail:Math.abs(b)<.02,leftProstheticFinFlare:$.clamp(A+b,-1,1),rightTailFinFlare:$.clamp(A-b,-1,1),tailYaw:$.clamp(fn.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv+.28*l,-1,1),tailPitch:$.clamp(fn.tailPitch*(1-n.airborneEnv)-.34*n.brakeEnv+.15*n.pulloutEnv+.22*r,-1,1),tailCurl:.16*(1-n.diveEnv)+n.lookAheadTurnDiff*.8,tailWaveAmp:n.activeFlapAmp*.78+n.glideEnv*.16,tailWavePhase:n.flapPhase,neckArch:.16+.24*n.brakeEnv-.2*n.diveEnv,neckYaw:n.lookAheadTurnDiff*.95*n.airborneEnv+c*.45,headYaw:$.clamp(fn.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+c,-1,1),headPitch:$.clamp(fn.headPitch*(1-n.airborneEnv)-.34*s+n.pathClimbPitch*-.24*n.airborneEnv+.48*n.brakeEnv+.16*r,-1,1),headRoll:$.clamp(fn.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv-.22*l,-1,1),earPerk:$.clamp(.76+.2*s-.56*n.diveEnv-.2*n.climbEnv+.18*n.brakeEnv+.18*l,.12,1),earAsymmetry:n.bankRoll*.22+.12*l,cheekNubFlare:.5+.25*n.diveEnv,eyeYaw:$.clamp(n.lookAheadTurnDiff*1.7*n.airborneEnv+c*.55,-.85,.85),eyePitch:$.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:$.clamp(.76-.24*n.diveEnv+.16*l,.25,.96),squint:$.clamp(.36*n.diveEnv+.18*l,0,1),blink:ze(t,23.35,23.45,23.52,23.64),jawOpen:$.clamp(.2*o+.15*n.pulloutEnv+.26*l,0,1),teethExtension:0,tongueExtend:.4*l,tongueCurl:.2*l};Object.assign(this.toothlessController.state,S)}applyLightFuryFlightAtTime(t,e){if(!this.lightFuryAsset||!this.lightFuryController)return;const n=this.computeKinematicsAlongSpline(this.lightFurySpline,Gn.position,Gn.yaw,t,.95,1.03);this.lightFuryAsset.rootGroup.position.copy(n.outPos),this.lightFuryAsset.rootGroup.quaternion.copy(n.outQuat),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const s=ze(t,.32,1.12,1.65,2.08),o=ze(t,1.8,2.04,2.32,2.82),a=ze(t,19.2,20.2,21.75,22.25),r=ze(t,21.75,22.2,22.85,23.9),l=ze(t,23,23.6,24.4,24.96),c=ze(t,13.2,14.2,15.8,16.9),h=ze(t,8.2,9.4,12.2,13.4),u=ze(t,12.6,13.6,16,17.2),p=e?-.36*n.glideEnv-.34*l:-.18*l,f=hn.forelegStance*(1-s-r)-.86*s-.78*r+.2*l,g=hn.hindlegStance*(1-s-r)-.82*s-.74*r+.12*l,v=$.clamp(.82*n.airborneEnv-1.52*o-1.56*a,-.84,.88),m=$.lerp(hn.wingUnfurl+.34*s,1-.18*n.diveEnv,Ai(.9,2.12,t)*(1-Ai(22.1,24.1,t))),d=Math.max(0,n.flapCos)*.54*n.activeFlapAmp*(1-n.brakeEnv*.6),M=$.clamp(.66*s+n.flapSin*.9*n.activeFlapAmp+.16*n.glideEnv-.08*n.diveEnv,-1,1),w=-n.flapCos*.86*n.activeFlapAmp,_=$.clamp(hn.wingSweep*(1-n.airborneEnv)-.82*n.diveEnv+.74*n.brakeEnv-.15*s,-1,1),A=Math.max(0,-n.flapSin)*n.activeFlapAmp,b=$.clamp(.26+.44*A+.52*n.pulloutEnv+.62*n.brakeEnv-.16*n.diveEnv,.08,1),S=.18*(1-n.airborneEnv)+.12*n.climbEnv+.02*n.glideEnv+.38*n.diveEnv-.28*n.brakeEnv,E=$.clamp(n.bankRoll*.36,-.3,.3),y={airborneFactor:n.airborneEnv,forelegStance:f,hindlegStance:g,limbStride:0,legFlightTuck:v,coyWingVeil:0,spineArch:.22*s-.15*o+.24*n.brakeEnv+.12*(1-n.airborneEnv),spineTwist:$.clamp(-n.bankRoll*.36,-1,1),wingUnfurl:m,wingFlap:M,wingWristFold:d,wingTipLag:w,wingSweep:_,wingCamber:b,pelvicFinFlare:$.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.32*n.diveEnv,.32,1),dorsalSailFlex:$.clamp(.24*(1-n.airborneEnv)+.92*n.glideEnv+.85*n.brakeEnv+.65*Math.abs(n.bankRoll),.15,1),syncHeartTailFlukes:Math.abs(E)<.02,leftHeartFinFlare:$.clamp(S+E,-1,1),rightHeartFinFlare:$.clamp(S-E,-1,1),tailYaw:$.clamp(hn.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv-.36*l,-1,1),tailPitch:$.clamp(hn.tailPitch*(1-n.airborneEnv)-.32*n.brakeEnv+.16*n.pulloutEnv+.2*r,-1,1),tailCurl:-.24*(1-n.airborneEnv)+n.lookAheadTurnDiff*.8-.26*l,tailWaveAmp:n.activeFlapAmp*.76+n.glideEnv*.18,tailWavePhase:n.flapPhase,neckArch:.24+.24*n.brakeEnv-.2*n.diveEnv+.14*l,neckYaw:n.lookAheadTurnDiff*.92*n.airborneEnv+p*.48,headYaw:$.clamp(hn.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+p,-1,1),headPitch:$.clamp(hn.headPitch*(1-n.airborneEnv)-.32*s+n.pathClimbPitch*-.24*n.airborneEnv+.46*n.brakeEnv+.14*r,-1,1),headRoll:$.clamp(hn.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv+.28*l,-1,1),earPerk:$.clamp(.82+.16*s-.56*n.diveEnv-.2*n.climbEnv+.16*n.brakeEnv,.14,1),earAsymmetry:n.bankRoll*.24+.18*l,cheekNubFlare:.52+.22*n.diveEnv,eyeYaw:$.clamp(n.lookAheadTurnDiff*1.65*n.airborneEnv+p*.55,-.85,.85),eyePitch:$.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:$.clamp(.84-.2*n.diveEnv+.1*l,.3,.96),squint:$.clamp(.3*n.diveEnv+.56*l,0,1),blink:ze(t,23.18,23.28,23.36,23.48),jawOpen:$.clamp(.14*o+.12*n.pulloutEnv+.14*l,0,1),teethExtension:0,tongueExtend:.28*l,tongueCurl:.12*l,iridescentShimmer:$.clamp(.78+.22*(n.glideEnv+c),0,1),radiantGlow:$.clamp(.34+.36*(n.glideEnv+c),0,1),biolumGlow:$.clamp(.58*h,0,1),plasmaGlow:$.clamp(.04+.78*u,0,1),thermalCloak:$.clamp(.78*c,0,1)};Object.assign(this.lightFuryController.state,y)}applyPerchedSpectatorGaze(t,e){if(t==="toothless"){this.toothlessAsset.rootGroup.position.copy(Wn.position),this.toothlessAsset.rootGroup.rotation.set(0,Wn.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(Wn.position);n.y-=1.5;const s=Math.atan2(n.x,n.z),o=to(s-Wn.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.toothlessController.state,{...fn,neckYaw:$.clamp(o*.55,-.85,.85),headYaw:$.clamp(o*.85,-.95,.95),headPitch:$.clamp(-r*.95,-.85,.75),headRoll:$.clamp(-o*.18,-.45,.45),eyeYaw:$.clamp(o*.45,-.75,.75),eyePitch:$.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.88})}else if(this.lightFuryAsset&&this.lightFuryController){this.lightFuryAsset.rootGroup.position.copy(Gn.position),this.lightFuryAsset.rootGroup.rotation.set(0,Gn.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(Gn.position);n.y-=1.48;const s=Math.atan2(n.x,n.z),o=to(s-Gn.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.lightFuryController.state,{...hn,neckYaw:$.clamp(o*.55,-.85,.85),headYaw:$.clamp(o*.85,-.95,.95),headPitch:$.clamp(-r*.95,-.85,.75),headRoll:$.clamp(.18-o*.18,-.5,.55),eyeYaw:$.clamp(o*.45,-.75,.75),eyePitch:$.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.9})}}applyAtTime(t){if(this.subjectMode==="duet")this.applyToothlessFlightAtTime(t,!0),this.applyLightFuryFlightAtTime(t,!0);else if(this.subjectMode==="toothless"){this.applyToothlessFlightAtTime(t,!1);const e=this.toothlessAsset.rig.boneMap.get("chest"),n=new T().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("light-fury",n)}else if(this.applyLightFuryFlightAtTime(t,!1),this.lightFuryAsset){const e=this.lightFuryAsset.rig.boneMap.get("chest"),n=new T().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("toothless",n)}}}function Jv(i){return i-Math.floor(i)}function sh(i,t){return Jv(Math.sin(i*127.1+t*311.7)*43758.5453123)}let qo=null;function t_(i=512){if(qo)return qo;const t=new Float32Array(i*i),e=76;for(let f=0;f<i;f++){const g=f/i*e,v=Math.floor(g),m=g-v;for(let d=0;d<i;d++){const M=d/i*e,w=Math.floor(M),_=M-w;let A=10;for(let S=-1;S<=1;S++)for(let E=-1;E<=1;E++){const y=((w+E)%e+e)%e,x=((v+S)%e+e)%e,P=E+.5+(sh(y,x)-.5)*.68-_,C=S+.5+(sh(x+19,y+7)-.5)*.68-m,R=Math.sqrt(P*P+C*C);R<A&&(A=R)}const b=Math.max(0,1-Math.pow(A*1.15,2.2));t[f*i+d]=b}}const n=document.createElement("canvas"),s=document.createElement("canvas"),o=document.createElement("canvas");for(const f of[n,s,o])f.width=i,f.height=i;const a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(i,i),h=r.createImageData(i,i),u=l.createImageData(i,i);for(let f=0;f<i;f++){const g=(f-1+i)%i,v=(f+1)%i;for(let m=0;m<i;m++){const d=(m-1+i)%i,M=(m+1)%i,w=f*i+m,_=w*4,A=t[w],b=(t[f*i+M]-t[f*i+d])*.24,S=(t[v*i+m]-t[g*i+m])*.24,E=1/Math.sqrt(b*b+S*S+1);h.data[_]=Math.round((-b*E*.5+.5)*255),h.data[_+1]=Math.round((-S*E*.5+.5)*255),h.data[_+2]=Math.round((E*.5+.5)*255),h.data[_+3]=255;const y=249+A*5;c.data[_]=Math.min(255,Math.round(y+.8)),c.data[_+1]=Math.round(y),c.data[_+2]=Math.min(255,Math.round(y+.6)),c.data[_+3]=255;const x=Math.round((.45-A*.07)*255);u.data[_]=x,u.data[_+1]=x,u.data[_+2]=x,u.data[_+3]=255}}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0);const p=(f,g)=>(f.wrapS=Qn,f.wrapT=Qn,f.anisotropy=8,f.colorSpace=g?mn:Un,f.needsUpdate=!0,f);return qo={albedoMap:p(new yn(n),!0),normalMap:p(new yn(s),!1),roughnessMap:p(new yn(o),!1)},qo}let Gi=null;function e_(i=1024){if(Gi)return Gi;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=14,n.data[u+1]=24,n.data[u+2]=42,n.data[u+3]=255;continue}const p=Math.sin(h*64+Math.sin(c*12)*.65),f=Math.sin(h*138-Math.cos(c*18)*.85),g=Math.sin(h*250+c*22),v=Math.sin(h*21+.9)*Math.cos(c*14-h*4),m=p*.42+f*.33+g*.15+v*.24,d=Math.exp(-Math.pow((c-.36)/.13,2)),M=Math.max(0,Math.min(1,(.95-c)/.17)),w=Math.max(0,Math.min(1,1-c*1.06)),_=.86+.28*m;let A=(32+128*w+58*d)*_*M,b=(118+114*w+36*d)*_*M,S=(205+48*w+20*d)*_*M;if(v<-.58&&c>.25&&c<.78){const E=Math.min(1,(-v-.58)*2.1);A*=1-.38*E,b*=1-.28*E,S*=1-.16*E}n.data[u]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(b))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(S))),n.data[u+3]=255}}return e.putImageData(n,0,0),Gi=new yn(t),Gi.colorSpace=mn,Gi.anisotropy=8,Gi.needsUpdate=!0,Gi}function n_(){const i=e_(1024),t={uPupilDilation:{value:.78},uLightDir:{value:new T(.45,.65,.6).normalize()},uBiolumGlow:{value:0},uPlasmaGlow:{value:0},uThermalCloak:{value:0}},e=new Ti({name:"LightFury_SkyBlueIris_PBR",map:i,roughness:.48,metalness:0,envMapIntensity:.78});e.onBeforeCompile=s=>{Object.assign(s.uniforms,t),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.36 + uPlasmaGlow * 0.85 + uBiolumGlow * 0.72) * eRadial * (1.0 - smoothstep(0.0, 0.95, uThermalCloak) * 0.88);`)};const n=new bn({name:"LightFury_Cornea_WetCoat",color:new Lt(16777215),transparent:!0,opacity:.15,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function oh(i,t,e){i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function i_(){const i=t_(512),t=n_(),e={uTime:{value:0},uIridescentShimmer:{value:.76},uPastelTint:{value:.78},uRadiantGlow:{value:.34},uBiolumGlow:{value:0},uPlasmaGlow:{value:.04},uThermalCloak:{value:0},uSunDir:{value:new T(-.55,.38,-.74).normalize()},uSunColor:{value:new Lt(16765601)}},n=new bn({name:"LightFury_SnowPearlHide_PBR",color:new Lt(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new zt(.05,.05),roughnessMap:i.roughnessMap,roughness:.46,metalness:.02,iridescence:.42,iridescenceIOR:1.38,iridescenceThicknessRange:[320,520],clearcoat:.34,clearcoatRoughness:.22,sheen:.28,sheenRoughness:.42,sheenColor:new Lt(16773366),envMapIntensity:1.22});oh(n,e,!1);const s={albedo:i.albedoMap.clone(),normal:i.normalMap.clone(),rough:i.roughnessMap.clone()};for(const m of[s.albedo,s.normal,s.rough])m.repeat.set(3,3),m.needsUpdate=!0;const o=new bn({name:"LightFury_IridescentWingPatagium_PBR",color:new Lt(16776445),map:s.albedo,normalMap:s.normal,normalScale:new zt(.028,.028),roughnessMap:s.rough,roughness:.42,metalness:.02,iridescence:.52,iridescenceIOR:1.4,iridescenceThicknessRange:[310,540],clearcoat:.28,clearcoatRoughness:.24,side:gn,envMapIntensity:1.28});oh(o,e,!0);const a=new bn({name:"LightFury_SlatePearlClaws_PBR",color:new Lt(2633016),roughness:.24,metalness:.08,clearcoat:.84,clearcoatRoughness:.12,envMapIntensity:1.5}),r=new bn({name:"LightFury_PearlyTeeth_PBR",color:new Lt(16447218),roughness:.14,metalness:0,clearcoat:.92,clearcoatRoughness:.08}),l=new bn({name:"LightFury_RoseGums_PBR",color:new Lt(12084344),normalMap:i.normalMap,normalScale:new zt(.08,.08),roughness:.32,clearcoat:.82,clearcoatRoughness:.12,side:gn}),c=new bn({name:"LightFury_PinkTongue_PBR",color:new Lt(13924494),normalMap:i.normalMap,normalScale:new zt(.1,.1),roughness:.26,clearcoat:.88,clearcoatRoughness:.1}),h=new ao({name:"LightFury_OuterHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0}),u=new ao({name:"LightFury_WingHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0,side:gn}),p=[n,o,a],f=[r,l,c,t.irisMaterial];let g=!1;return{skinMaterial:n,wingMembraneMaterial:o,clawMaterial:a,teethMaterial:r,oralGumMaterial:l,tongueMaterial:c,hullDepthMaterial:h,doubleSidedHullDepthMaterial:u,eyeMaterials:t,uniforms:e,syncCloakTransparency:m=>{const d=m>.001;if(d!==g){g=d;for(const w of p)w.transparent=d,w.depthWrite=!d,w.depthFunc=ci,w.polygonOffset=d,w.polygonOffsetFactor=d?-1:0,w.polygonOffsetUnits=d?-2:0,w.needsUpdate=!0;for(const w of f)w.transparent=d,w.depthWrite=!d,w.depthTest=!0,w.depthFunc=ci,w.needsUpdate=!0}const M=$.smoothstep(m,0,.96);return a.opacity=1-M*.86,r.opacity=1-M*.9,l.opacity=1-M*.9,c.opacity=1-M*.9,t.corneaMaterial.opacity=$.lerp(.15,.03,M),d}}}function le(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Re(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function ah(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function ol(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let h=0;h<e-1;h++)n[h]=(t[h+1][1]-t[h][1])/(t[h+1][0]-t[h][0]);s[0]=n[0],s[e-1]=n[e-2];for(let h=1;h<e-1;h++)n[h-1]*n[h]<=0?s[h]=0:s[h]=(n[h-1]+n[h])*.5;for(let h=0;h<e-1;h++)if(Math.abs(n[h])<1e-8)s[h]=0,s[h+1]=0;else{const u=s[h]/n[h],p=s[h+1]/n[h],f=Math.hypot(u,p);if(f>3){const g=3/f;s[h]=g*u*n[h],s[h+1]=g*p*n[h]}}let o=0;for(let h=0;h<e-1;h++)if(i>=t[h][0]&&i<=t[h+1][0]){o=h;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r;return(2*c-3*l+1)*t[o][1]+(c-2*l+r)*a*s[o]+(-2*c+3*l)*t[o+1][1]+(c-l)*a*s[o+1]}const s_=[[-4.18,.015],[-3.55,.048],[-2.75,.088],[-1.9,.146],[-1.25,.202],[-.82,.246],[-.5,.278],[-.08,.258],[.42,.312],[.72,.326],[.98,.254],[1.22,.21],[1.44,.198]],Eu=[[-4.18,.014],[-3.55,.042],[-2.75,.076],[-1.9,.126],[-1.25,.172],[-.82,.204],[-.5,.228],[-.08,.214],[.42,.248],[.72,.26],[.98,.208],[1.22,.182],[1.44,.174]],o_=[[0,.116,-4.18],[0,.116,-3.72],[0,.116,-3.28],[0,.12,-2.82],[0,.175,-2.3],[0,.32,-1.78],[0,.51,-1.32],[0,.68,-.86],[0,.755,-.5],[0,.76,-.08],[0,.815,.38],[0,.885,.75],[0,1.03,.98],[0,1.24,1.19],[0,1.45,1.38],[0,1.54,1.54],[0,1.562,1.73],[0,1.538,1.9],[0,1.49,2.065]];let ur=null;function Tu(){return ur||(ur=new Bn(o_.map(([i,t,e])=>new T(i,t,e)),!1,"centripetal",.5)),ur}function a_(i){const t=Tu();let e=0,n=1;for(let u=0;u<24;u++){const p=(e+n)*.5;t.getPointAt(p).z<i?e=p:n=p}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new T(0,1,0),l=new T().copy(r).addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=ol(c,Eu)*le(-4.18,-4.1,c);return{point:o.clone().addScaledVector(l,h),tangent:a,up:l}}function rh(i,t,e){const n=i/e,s=t/e+.15,o=n*n+Math.pow(s-.58*Math.sqrt(Math.abs(n)+.04),2);return 1-le(.62,1.15,o)}function r_(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.53)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.28){const r=le(1.31,1.53,i.z),l=1-r,c=le(1.26,1.45,i.z);return Be([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return Zn(i,e,n,3.5)}function l_(i,t){const e=[];return e.push(c_(i,t)),e.push(...h_(i,t)),e.push(...u_(i,t)),e.push(...d_(i,t)),Ve(e)}function c_(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=Tu(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(A=>i.boneIndexMap.get(A)),r=o.map(A=>i.bindWorldPositions.get(A)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),p=new Uint16Array(l*4),f=new Float32Array(l*4),g=new T(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),d=[{center:v,fwd:mo,up:new T(-.19,.98,.06).normalize()},{center:m,fwd:go,up:new T(.19,.98,.06).normalize()}].map(A=>{const b=new T().crossVectors(A.up,A.fwd).normalize(),S=new T().crossVectors(A.fwd,b).normalize();return{center:A.center,fwd:A.fwd,right:b,up:S}});for(let A=0;A<=e;A++){const b=A/e,S=1-Math.pow(1-b,1.85),E=s.getPointAt(S),y=s.getTangentAt(S).normalize(),x=new T().copy(g).addScaledVector(y,-g.dot(y)).normalize(),P=new T().crossVectors(x,y).normalize(),C=E.z,R=le(-4.18,-4.1,C),L=ol(C,s_)*R,D=ol(C,Eu)*R,B=le(1.36,1.5,C);let k=L,F=D;if(B>0){const H=Math.max(0,Math.min(1,(C-1.44)/.625)),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(H-.78)/.22),2))),Y=Ki(C),j=(.174+.018*Re(H,.36,.24)-.062*le(.36,.94,H))*V;k=$.lerp(L,Y,B),F=$.lerp(D,j,B)}for(let H=0;H<=n;H++){const V=H/n,Y=V*Math.PI*2,j=Math.sin(Y),W=Math.cos(Y);let X=k*j,O=F*W,it=.08,nt=0,Z=0,Q=0;if(C>-2.9&&C<1.6&&W<.12){const U=le(-2.9,-.55,C)*(1-le(1.36,1.6,C));Z=le(.12,-.68,W)*U}if(C>-.45&&C<.92){const U=Re(C,.3,.42)*Re(Math.abs(j),.88,.22)*Re(W,.08,.36);Q=Math.max(Q,U*.28)}if(W>.35&&C>-3.9&&C<1.6){const U=le(.35,.92,W)*le(.1,.85,C)*(1-le(1.45,1.65,C)),Mt=Re(j,0,.16)*le(.55,.96,W),at=Math.pow(Math.max(0,Math.sin(C*5.8+Math.abs(j)*3.4)),4)*Re(W,.42,.24)*le(-2.4,-.4,C)*(1-le(.95,1.35,C));nt=Math.max(nt,U*.48,Mt*.84,at*.72)}if(C>-.78&&C<1.08){const U=Re(C,.68,.28),Mt=Re(Math.abs(j),.44,.22)*le(-.1,-.86,W);O-=.018*U*Mt,X+=Math.sign(j)*.012*U*Mt;const at=Re(C,.78,.2)*Re(Math.abs(j),.7,.18)*le(-.08,-.78,W),pt=Re(C,-.49,.22)*Re(Math.abs(j),.68,.19)*le(-.05,-.78,W);O-=.026*at+.022*pt}if(C>=1.42){const U=Re(C,1.842,.095),Mt=Re(Math.abs(j),.62,.17)*le(.18,.74,W);O+=.014*U*Mt,X+=Math.sign(j)*.007*U*Mt;const at=Re(C,1.76,.12)*Re(Math.abs(j),.88,.17)*Re(W,-.12,.25);if(X+=Math.sign(j)*.016*at,W>.65&&C>1.56&&C<1.86){const pt=rh(X,C-1.745,.052),_t=rh(X,C-1.648,.038);nt=Math.max(nt,Math.max(pt,_t*.92))}C>1.98&&W>-.35&&W<.35&&(O-=.002*Re(j,0,.08)*le(1.98,2.055,C)),it=.22+.24*le(1.85,2.05,C)}const G=new T().copy(E).addScaledVector(P,X).addScaledVector(x,O),ot=le(1.52,1.6,C);if(ot>0&&W<.04){const U=Ri(C),Mt=Math.max(le(.56,.9,Math.abs(j)),le(1.96,2.04,C)),at=U-.0042,pt=U+.039*(1-le(1.92,2.05,C)),_t=$.lerp(pt,at,Mt),It=ot*le(.04,-.26,W);G.y=$.lerp(G.y,_t,It)}if(C>1.66&&C<2)for(const U of d){if(Math.sign(G.x)!==Math.sign(U.center.x))continue;const Mt=new T().subVectors(G,U.center),at=Mt.dot(U.fwd),pt=Mt.dot(U.right),_t=Mt.dot(U.up);if(at>0){const It=Math.exp(-.5*(Math.pow(pt/.053,2)+Math.pow(_t/.045,2)))*le(0,.032,at),yt=pa-.022,z=$.lerp(at,yt,It);at>z&&G.addScaledVector(U.fwd,z-at)}}if(C>1.94&&C<2.065&&G.y>1.48){const U=ah(G.x,G.z,.054,2.018,.017,.02)*Re(G.y,1.508,.014),Mt=ah(G.x,G.z,-.054,2.018,.017,.02)*Re(G.y,1.508,.014),at=Math.max(U,Mt),pt=le(1.96,2.055,G.z)*Re(G.y,1.505,.032);Q=Math.max(Q,pt*.65),at>.05&&(G.x*=1-.14*at,G.y-=.009*at,G.z-=.011*at,Q=Math.max(Q,Math.min(1,.55+at*.85)))}const gt=A*(n+1)+H;c[gt*3]=G.x,c[gt*3+1]=G.y,c[gt*3+2]=G.z,h[gt*2]=S*5.2,h[gt*2+1]=V*1.6,u[gt*4]=it,u[gt*4+1]=nt,u[gt*4+2]=Z,u[gt*4+3]=Q;const tt=r_(G,i,a,r);p.set(tt.indices,gt*4),f.set(tt.weights,gt*4)}}const M=new Uint32Array(e*n*6);let w=0;for(let A=0;A<e;A++)for(let b=0;b<n;b++){const S=A*(n+1)+b,E=(A+1)*(n+1)+b,y=(A+1)*(n+1)+(b+1),x=A*(n+1)+(b+1);M[w++]=S,M[w++]=E,M[w++]=y,M[w++]=S,M[w++]=y,M[w++]=x}const _=new Gt;return _.setAttribute("position",new q(c,3)),_.setAttribute("uv",new q(h,2)),_.setAttribute("aAnatomyData",new q(u,4)),_.setAttribute("skinIndex",new me(p,4)),_.setAttribute("skinWeight",new Yt(f,4)),_.setIndex(new q(M,1)),_.computeVertexNormals(),ba(_,e,n),_}function h_(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.162,1.848,1.24],maxWidth:.068,maxThick:.028,rollAngle:l*-.28,isPrimaryEar:!0}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.288,1.608,1.35],maxWidth:.032,maxThick:.017,rollAngle:l*-.82,isPrimaryEar:!1})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.boneNames.map(y=>i.bindWorldPositions.get(y).clone()),c=new T().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.055),...l,new T(...r.tipPos)],p=new Bn(u),f=r.boneNames.map(y=>i.boneIndexMap.get(y)),g=r.boneNames.map(y=>i.bindWorldPositions.get(y)),v=(o+1)*(a+1),m=new Float32Array(v*3),d=new Float32Array(v*2),M=new Float32Array(v*4),w=new Uint16Array(v*4),_=new Float32Array(v*4),A=new T(0,1,0);for(let y=0;y<=o;y++){const x=y/o,P=p.getPointAt(x),C=p.getTangentAt(x).normalize(),R=A.clone().addScaledVector(C,-A.dot(C)).normalize(),L=new T().crossVectors(R,C).normalize(),D=Math.cos(r.rollAngle),B=Math.sin(r.rollAngle),k=L.clone().multiplyScalar(D).addScaledVector(R,B),F=R.clone().multiplyScalar(D).addScaledVector(L,-B),H=r.isPrimaryEar?.72+.36*Math.sin(Math.pow(x,.75)*Math.PI*.88):Math.sin(Math.pow(x,.68)*Math.PI*.92),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(x-.76)/.24),2))),Y=r.maxWidth*H*V,j=r.maxThick*(.78+.28*Math.sin(x*Math.PI))*V;for(let W=0;W<=a;W++){const X=W/a,O=X*Math.PI*2,it=new T().copy(P).addScaledVector(k,Y*Math.cos(O)).addScaledVector(F,j*Math.sin(O)),nt=y*(a+1)+W;m[nt*3]=it.x,m[nt*3+1]=it.y,m[nt*3+2]=it.z,d[nt*2]=x*.48,d[nt*2+1]=X*.48,M[nt*4]=.2,M[nt*4+1]=le(.55,.95,x)*.65,M[nt*4+2]=0,M[nt*4+3]=le(.65,1,x)*.3;const Z=Zn(it,f,g,4),Q=le(.3,0,x),G=Be([n,Z.indices[0],Z.indices[1],Z.indices[2]],[Q,Z.weights[0]*(1-Q),Z.weights[1]*(1-Q),Z.weights[2]*(1-Q)]);w.set(G.indices,nt*4),_.set(G.weights,nt*4)}}const b=new Uint16Array(o*a*6);let S=0;for(let y=0;y<o;y++)for(let x=0;x<a;x++){const P=y*(a+1)+x,C=(y+1)*(a+1)+x,R=(y+1)*(a+1)+(x+1),L=y*(a+1)+(x+1);b[S++]=P,b[S++]=C,b[S++]=R,b[S++]=P,b[S++]=R,b[S++]=L}const E=new Gt;E.setAttribute("position",new q(m,3)),E.setAttribute("uv",new q(d,2)),E.setAttribute("aAnatomyData",new q(M,4)),E.setAttribute("skinIndex",new me(w,4)),E.setAttribute("skinWeight",new Yt(_,4)),E.setIndex(new q(b,1)),E.computeVertexNormals(),ba(E,o,a),e.push(E)}return e}function u_(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?mo:go).clone(),p=new T(r*-.19,.98,.06).normalize(),f=new T().crossVectors(u,p).normalize(),g=new T().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,d=(s+1)*(o+1),M=new Float32Array(d*3),w=new Float32Array(d*2),_=new Float32Array(d*4),A=new Uint16Array(d*4),b=new Float32Array(d*4),S=pa+.0016;for(let P=0;P<=o;P++){const C=P/o,R=Re(C,.06,.08);for(let L=0;L<=s;L++){const D=L/s,B=$.degToRad($.lerp(-65,65,D)),k=Math.sin(D*Math.PI),F=v?42*k:-38*k,H=v?78:-74,V=$.degToRad($.lerp(F,H,C)),Y=S+.0016*R-.0026*C,j=new T().addScaledVector(u,Math.cos(V)*Math.cos(B)).addScaledVector(f,Math.cos(V)*Math.sin(B)).addScaledVector(g,Math.sin(V)).normalize(),W=new T().copy(l).addScaledVector(j,Y),X=P*(s+1)+L;M[X*3]=W.x,M[X*3+1]=W.y,M[X*3+2]=W.z,w[X*2]=D*.35,w[X*2+1]=C*.18,_[X*4]=.25;const O=k*(1-le(.48,1,C)),it=Math.max(0,Math.min(1,O));A.set([m,n,0,0],X*4),b.set([it,1-it,0,0],X*4)}}const E=new Uint16Array(s*o*6);let y=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,D=(P+1)*(s+1)+(C+1),B=P*(s+1)+(C+1);v?(E[y++]=R,E[y++]=D,E[y++]=L,E[y++]=R,E[y++]=B,E[y++]=D):(E[y++]=R,E[y++]=L,E[y++]=D,E[y++]=R,E[y++]=D,E[y++]=B)}const x=new Gt;x.setAttribute("position",new q(M,3)),x.setAttribute("uv",new q(w,2)),x.setAttribute("aAnatomyData",new q(_,4)),x.setAttribute("skinIndex",new me(A,4)),x.setAttribute("skinWeight",new Yt(b,4)),x.setIndex(new q(E,1)),x.computeVertexNormals(),e.push(x)}}return e}function d_(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new T(a*.14,.89,.78),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new T(a*.292,.048,.925),new T(a*.292,.028,.992)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(ch(i,r,l,!0,a,n,s)),e.push(...lh(i,o,!0,t));const c=[new T(a*.13,.75,-.49),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new T(a*.278,.046,-.506),new T(a*.278,.028,-.442)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(ch(i,c,h,!1,a,n,s)),e.push(...lh(i,o,!1,t))}return e}function lh(i,t,e,n){const s=[],o=bu(t,e),a=n===0?15:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=Math.hypot(l.dirX,l.dirZ),d=l.dirX/m,M=l.dirZ/m,w=M,_=-d;for(let E=0;E<=a;E++){const y=E/a,x=$.lerp(-.36,1,y),P=Math.max(0,x),C=Math.max(0,-x)*.036,R=Math.sin(P*Math.PI)*.009-.008*P*P+C,L=l.rootX+d*l.toeLength*x,D=l.rootZ+M*l.toeLength*x,B=l.rootY+R,k=1+.42*Math.pow(1-le(-.36,.18,x),1.5),F=1+.13*Re(P,.4,.18)+.11*Re(P,.84,.1),H=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(y-.89)/.11),2))),V=$.lerp(l.baseRadius,l.tipRadius,P)*k*F*H;for(let Y=0;Y<=r;Y++){const j=Y/r,W=j*Math.PI*2,X=Math.sin(W),O=Math.cos(W),it=1.1+.22*(1-le(-.34,.2,x)),nt=L+w*X*V*it,Z=D+_*X*V*it;let Q=B+O*V*.86;Q<.003&&(Q=.003+Math.max(0,Q)*.14);const G=E*(r+1)+Y;u[G*3]=nt,u[G*3+1]=Q,u[G*3+2]=Z,p[G*2]=y*.36,p[G*2+1]=j*.32,f[G*4]=.28,f[G*4+1]=O>.2?.52*le(.2,.85,P):0,f[G*4+2]=.35,g.set([c,0,0,0],G*4),v.set([1,0,0,0],G*4)}}const A=new Uint16Array(a*r*6);let b=0;for(let E=0;E<a;E++)for(let y=0;y<r;y++){const x=E*(r+1)+y,P=(E+1)*(r+1)+y,C=(E+1)*(r+1)+(y+1),R=E*(r+1)+(y+1);A[b++]=x,A[b++]=P,A[b++]=C,A[b++]=x,A[b++]=C,A[b++]=R}const S=new Gt;S.setAttribute("position",new q(u,3)),S.setAttribute("uv",new q(p,2)),S.setAttribute("aAnatomyData",new q(f,4)),S.setAttribute("skinIndex",new me(g,4)),S.setAttribute("skinWeight",new Yt(v,4)),S.setIndex(new q(A,1)),S.computeVertexNormals(),ba(S,a,r),s.push(S)}return s}function ch(i,t,e,n,s,o,a){const r=new Bn(t,!1,"centripetal",.5),l=e.map(_=>i.boneIndexMap.get(_)),c=e.map(_=>i.bindWorldPositions.get(_)),h=(o+1)*(a+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new T(0,0,1);for(let _=0;_<=o;_++){const b=1-_/o,S=r.getPointAt(b),E=r.getTangentAt(b).negate().normalize(),y=m.clone().addScaledVector(E,-m.dot(E)).normalize(),x=new T().crossVectors(y,E).normalize(),P=.5+.5*le(0,.34,b),C=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(b-.91)/.09),2)))*P;let R=.08,L=.092;if(n){const k=Re(b,.54,.16)*.022,F=Re(b,.86,.12)*.072;R=(.076+k+F)*C,L=(.09+Re(b,.25,.18)*.028+k+F*.86)*C}else{const k=Re(b,.52,.15)*.026,F=Re(b,.86,.12)*.068;R=(.074+k+F)*C,L=(.094+Re(b,.26,.19)*.038+k*1.06+F*.84)*C}const D=le(.7,.94,b),B=1-le(.08,.42,b);for(let k=0;k<=a;k++){const F=k/a,H=F*Math.PI*2,V=Math.sin(H),Y=Math.cos(H),j=V*s>0?Math.abs(V):0,W=1-.28*B*j;let X=1;if(D>.01&&Y>-.35){const U=Math.atan2(V,Math.max(.05,Y+.25)),Mt=Math.cos(U*3.6);X+=.14*D*Math.max(-.12,Mt)*le(-.35,.45,Y)}let O=0;if(n&&b>.28&&b<.84){const U=Math.max(0,V*s*.62-Y*.78);O=Math.pow(U,3.6)*Math.sin((b-.28)/.56*Math.PI)*.028}else if(!n&&b>.34&&b<.84){const U=Math.max(0,V*s*.58-Y*.81);O=Math.pow(U,3.8)*Math.sin((b-.34)/.5*Math.PI)*.022}const it=new T().copy(S).addScaledVector(x,(R*W*V+s*O*.65)*X).addScaledVector(y,(L*Y-O*.75)*X);b>.7&&it.y<.004&&(it.y=.002+Math.max(0,it.y)*.14);const nt=_*(a+1)+k;u[nt*3]=it.x,u[nt*3+1]=it.y,u[nt*3+2]=it.z,p[nt*2]=b*1.35,p[nt*2+1]=F*.85,f[nt*4]=.22,f[nt*4+1]=Math.min(1,O*22+Math.pow(Math.max(0,Math.sin(b*14)),4)*j*.65),f[nt*4+2]=Math.max(le(.65,.96,b)*.35,Math.max(0,-V*s)*.45);const Z=Zn(it,l,c,3.5),Q=le(.24,0,b)*.72,G=l[l.length-1],ot=le(.74,.88,b),gt=(1-Q)*(1-ot),tt=Be([G,l[0],Z.indices[0],Z.indices[1]],[ot,Q*(1-ot),Z.weights[0]*gt,Z.weights[1]*gt]);g.set(tt.indices,nt*4),v.set(tt.weights,nt*4)}}const d=new Uint16Array(o*a*6);let M=0;for(let _=0;_<o;_++)for(let A=0;A<a;A++){const b=_*(a+1)+A,S=(_+1)*(a+1)+A,E=(_+1)*(a+1)+(A+1),y=_*(a+1)+(A+1);d[M++]=b,d[M++]=S,d[M++]=E,d[M++]=b,d[M++]=E,d[M++]=y}const w=new Gt;return w.setAttribute("position",new q(u,3)),w.setAttribute("uv",new q(p,2)),w.setAttribute("aAnatomyData",new q(f,4)),w.setAttribute("skinIndex",new me(g,4)),w.setAttribute("skinWeight",new Yt(v,4)),w.setIndex(new q(d,1)),w.computeVertexNormals(),ba(w,o,a),w}function ba(i,t,e){const n=i.getAttribute("normal"),s=new T,o=new T;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function oi(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function p_(i,t){return{jawSkinGeometry:Ve([m_(i,t),...g_(i,t)]),oralGumsGeometry:v_(i,t),teethGeometry:__(i,t),tongueGeometry:x_(i,t),irisGeometry:hh(i,t,!1),corneaGeometry:hh(i,t,!0),clawsGeometry:M_(i,t)}}function f_(i,t){const e=1.66+Math.cos(i)*(t?.355:.34),n=Math.max(.02,Ki(e)-(t?.022:.028));return{x:Math.sin(i)*n,z:e}}function m_(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),p=new Uint16Array(l*4),f=new Float32Array(l*4);for(let d=0;d<=e;d++){const M=d/e,w=$.lerp(1.45,2.056,M),_=Ki(w),A=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.87)/.13),2))),b=Math.max(.002,(_-.0032*oi(1.55,1.65,w))*A),S=Ri(w),E=.025*(1-oi(1.45,1.59,w)),y=S+.0032+E,x=(.074-.03*M)*A;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),D=Math.cos(R),B=Math.exp(-Math.pow((M-.28)/.22,2))*.009,k=Math.exp(-Math.pow((M-.3)/.16,2))*Math.abs(L)*.008,F=(b+k)*L,H=-.019*D*(1-Math.pow(L,2))*oi(1.57,1.66,w),V=D>=0?y+H:y+(x+B)*D,Y=d*(n+1)+P;c[Y*3]=F,c[Y*3+1]=V,c[Y*3+2]=w,h[Y*2]=M*.95,h[Y*2+1]=C*.85,u[Y*4]=.22,u[Y*4+1]=0,u[Y*4+2]=D<-.15?oi(.92,.25,M)*-D*.72:0,u[Y*4+3]=M>.82?(M-.82)*2.2:0;const j=oi(1.51,1.6,w),W=1-j,X=oi(1.31,1.53,w),O=oi(1.26,1.45,w),it=W*(1-X),nt=Be([s,o,a,r],[j,W*X,it*(.52+.48*O),it*(.48-.48*O)]);p.set(nt.indices,Y*4),f.set(nt.weights,Y*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let d=0;d<e;d++)for(let M=0;M<n;M++){const w=d*(n+1)+M,_=(d+1)*(n+1)+M,A=(d+1)*(n+1)+(M+1),b=d*(n+1)+(M+1);g[v++]=w,g[v++]=_,g[v++]=A,g[v++]=w,g[v++]=A,g[v++]=b}const m=new Gt;return m.setAttribute("position",new q(c,3)),m.setAttribute("uv",new q(h,2)),m.setAttribute("aAnatomyData",new q(u,4)),m.setAttribute("skinIndex",new me(p,4)),m.setAttribute("skinWeight",new Yt(f,4)),m.setIndex(new q(g,1)),m.computeVertexNormals(),m}function g_(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?12:8,a=t===0?10:6;for(const r of["L","R"]){const l=r==="L"?1:-1,c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=a;M++){const w=M/a;for(let _=0;_<=o;_++){const A=_/o,b=$.lerp(1.56,1.72,A),S=Ri(b),E=$.lerp(S-.015,S+.018,w),y=Ki(b)-.008,x=-.005*Math.sin(A*Math.PI)*Math.sin(w*Math.PI),P=l*(y+x),C=M*(o+1)+_;h[C*3]=P,h[C*3+1]=E,h[C*3+2]=b,u[C*2]=A*.25,u[C*2+1]=w*.25,p[C*4]=.22;const R=oi(0,1,w);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<a;M++)for(let w=0;w<o;w++){const _=M*(o+1)+w,A=(M+1)*(o+1)+w,b=(M+1)*(o+1)+(w+1),S=M*(o+1)+(w+1);l>0?(v[m++]=_,v[m++]=b,v[m++]=A,v[m++]=_,v[m++]=S,v[m++]=b):(v[m++]=_,v[m++]=A,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=S)}const d=new Gt;d.setAttribute("position",new q(h,3)),d.setAttribute("uv",new q(u,2)),d.setAttribute("aAnatomyData",new q(p,4)),d.setAttribute("skinIndex",new me(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new q(v,1)),d.computeVertexNormals(),e.push(d)}return e}function v_(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?28:16,a=t===0?18:10;{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const w=M/o,_=$.lerp(1.58,2.025,w),A=Math.max(.014,Ki(_)-.018),b=Ri(_),S=Math.sin(w*Math.PI*12)*.0022*Math.sin(w*Math.PI);for(let E=0;E<=a;E++){const y=E/a,x=(y-.5)*2,P=Math.cos(x*Math.PI*.5)*.028*(1-.45*w),C=-.002*Math.exp(-Math.pow(x/.12,2)),R=Math.exp(-Math.pow((Math.abs(x)-.88)/.12,2))*-.005,L=x*A,D=b+.007+P+S*(1-Math.abs(x)*.5)+C+R,B=M*(a+1)+E;h[B*3]=L,h[B*3+1]=D,h[B*3+2]=_,u[B*2]=w*2,u[B*2+1]=y*2,p[B*4+3]=(1-w)*.65,f.set([n,0,0,0],B*4),g.set([1,0,0,0],B*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<o;M++)for(let w=0;w<a;w++){const _=M*(a+1)+w,A=(M+1)*(a+1)+w,b=(M+1)*(a+1)+(w+1),S=M*(a+1)+(w+1);v[m++]=_,v[m++]=b,v[m++]=A,v[m++]=_,v[m++]=S,v[m++]=b}const d=new Gt;d.setAttribute("position",new q(h,3)),d.setAttribute("uv",new q(u,2)),d.setAttribute("aAnatomyData",new q(p,4)),d.setAttribute("skinIndex",new me(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new q(v,1)),d.computeVertexNormals(),e.push(d)}{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const w=M/o,_=$.lerp(1.58,2.015,w),A=Math.max(.012,Ki(_)-.022),b=Ri(_);for(let S=0;S<=a;S++){const E=S/a,y=(E-.5)*2,x=-Math.cos(y*Math.PI*.5)*.016*(1-.35*w),P=Math.exp(-Math.pow((Math.abs(y)-.86)/.14,2))*.0055,C=y*A,R=b-.004+x+P,L=M*(a+1)+S;h[L*3]=C,h[L*3+1]=R,h[L*3+2]=_,u[L*2]=w*2,u[L*2+1]=E*2,p[L*4+3]=(1-w)*.55,f.set([s,0,0,0],L*4),g.set([1,0,0,0],L*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<o;M++)for(let w=0;w<a;w++){const _=M*(a+1)+w,A=(M+1)*(a+1)+w,b=(M+1)*(a+1)+(w+1),S=M*(a+1)+(w+1);v[m++]=_,v[m++]=A,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=S}const d=new Gt;d.setAttribute("position",new q(h,3)),d.setAttribute("uv",new q(u,2)),d.setAttribute("aAnatomyData",new q(p,4)),d.setAttribute("skinIndex",new me(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new q(v,1)),d.computeVertexNormals(),e.push(d)}const r=t===0?18:10,l=t===0?12:8;{const c=(r+1)*(l+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=l;M++){const w=M/l;for(let _=0;_<=r;_++){const A=_/r,b=$.lerp(-Math.PI*.62,Math.PI*.62,A),S=1.66-Math.cos(b)*.1,E=Ki(Math.max(1.55,S))-.02,y=Math.sin(b)*E,x=Ri(S),P=$.lerp(x-.016,x+.026,w),C=M*(r+1)+_;h[C*3]=y,h[C*3+1]=P,h[C*3+2]=S,u[C*2]=A*1.5,u[C*2+1]=w*1.5,p[C*4+3]=.95*Math.cos(b*.65);const R=oi(0,1,w);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(r*l*6);let m=0;for(let M=0;M<l;M++)for(let w=0;w<r;w++){const _=M*(r+1)+w,A=(M+1)*(r+1)+w,b=(M+1)*(r+1)+(w+1),S=M*(r+1)+(w+1);v[m++]=_,v[m++]=A,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=S}const d=new Gt;d.setAttribute("position",new q(h,3)),d.setAttribute("uv",new q(u,2)),d.setAttribute("aAnatomyData",new q(p,4)),d.setAttribute("skinIndex",new me(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new q(v,1)),d.computeVertexNormals(),e.push(d)}return Ve(e)}function __(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const p=(u+.5)/l,f=$.lerp(-Math.PI*.42,Math.PI*.42,p),g=f_(f,r),v=g.x,m=g.z,d=Ri(m)+(r?.01:-.009),M=1+.3*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),w=.0195*M*(.78+.22*Math.cos(f)),_=.0054*M,A=(o+1)*(a+1),b=new Float32Array(A*3),S=new Float32Array(A*2),E=new Float32Array(A*4),y=new Uint16Array(A*4),x=new Float32Array(A*4),P=-Math.sin(f),C=-Math.cos(f);for(let B=0;B<=o;B++){const k=r?1-B/o:B/o,F=_*(1-.88*Math.pow(k,1.25)),H=.0045*k*k,V=v+P*H,Y=d+h*w*k,j=m+C*H-.0025*k*k;for(let W=0;W<=a;W++){const X=W/a,O=X*Math.PI*2,it=B*(a+1)+W;b[it*3]=V+Math.sin(O)*F,b[it*3+1]=Y,b[it*3+2]=j+Math.cos(O)*F,S[it*2]=k,S[it*2+1]=X,y.set([c,0,0,0],it*4),x.set([1,0,0,0],it*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let B=0;B<o;B++)for(let k=0;k<a;k++){const F=B*(a+1)+k,H=(B+1)*(a+1)+k,V=(B+1)*(a+1)+(k+1),Y=B*(a+1)+(k+1);R[L++]=F,R[L++]=H,R[L++]=V,R[L++]=F,R[L++]=V,R[L++]=Y}const D=new Gt;D.setAttribute("position",new q(b,3)),D.setAttribute("uv",new q(S,2)),D.setAttribute("aAnatomyData",new q(E,4)),D.setAttribute("skinIndex",new me(y,4)),D.setAttribute("skinWeight",new Yt(x,4)),D.setIndex(new q(R,1)),D.computeVertexNormals(),s.push(D)}}return Ve(s)}function x_(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),p=new Float32Array(r*4);for(let m=0;m<=e;m++){const d=m/e,M=$.lerp(1.62,1.96,d),w=Ri(M)-.0035,_=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(d-.76)/.24),2))),A=(.068+.01*Math.sin(d*Math.PI)-.02*d)*_,b=(.013-.004*d)*_;for(let S=0;S<=n;S++){const E=S/n,y=E*Math.PI*2,x=Math.sin(y),P=Math.cos(y),C=P>.35?-.0035*Math.exp(-Math.pow(x/.24,2)):0,R=P>.2?.001*Math.sin(d*Math.PI*26)*Math.cos(x*Math.PI*9)*_:0,L=new T(A*x,w+b*P+C+R,M),D=m*(n+1)+S;l[D*3]=L.x,l[D*3+1]=L.y,l[D*3+2]=L.z,c[D*2]=d*2.5,c[D*2+1]=E*1.8;const B=Zn(L,o,a,3.8);u.set(B.indices,D*4),p.set(B.weights,D*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let d=0;d<n;d++){const M=m*(n+1)+d,w=(m+1)*(n+1)+d,_=(m+1)*(n+1)+(d+1),A=m*(n+1)+(d+1);f[g++]=M,f[g++]=w,f[g++]=_,f[g++]=M,f[g++]=_,f[g++]=A}const v=new Gt;return v.setAttribute("position",new q(l,3)),v.setAttribute("uv",new q(c,2)),v.setAttribute("aAnatomyData",new q(h,4)),v.setAttribute("skinIndex",new me(u,4)),v.setAttribute("skinWeight",new Yt(p,4)),v.setIndex(new q(f,1)),v.computeVertexNormals(),v}function hh(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?mo:go).clone(),u=new T(r*-.19,.98,.06).normalize(),p=new T().crossVectors(u,h).normalize(),f=new T().crossVectors(h,p).normalize(),g=e?pa+8e-4:pa,v=.94,m=(s+1)*(o+1),d=new Float32Array(m*3),M=new Float32Array(m*2),w=new Float32Array(m*4),_=new Uint16Array(m*4),A=new Float32Array(m*4);for(let y=0;y<=s;y++){const x=y/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(x),C=Math.cos(x);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,D=Math.cos(L),B=Math.sin(L);let k=g;if(x<v){const j=1-x/v;k+=e?.0013*j*j:-.0025*j*j}const F=new T().addScaledVector(h,C).addScaledVector(p,P*D).addScaledVector(f,P*B).normalize(),H=new T().copy(l).addScaledVector(F,k),V=y*(o+1)+R;d[V*3]=H.x,d[V*3+1]=H.y,d[V*3+2]=H.z;const Y=Math.min(.498,x/v*.48);M[V*2]=.5+Y*D,M[V*2+1]=.5+Y*B,_.set([c,0,0,0],V*4),A.set([1,0,0,0],V*4)}}const b=new Uint16Array(s*o*6);let S=0;for(let y=0;y<s;y++)for(let x=0;x<o;x++){const P=y*(o+1)+x,C=(y+1)*(o+1)+x,R=(y+1)*(o+1)+(x+1),L=y*(o+1)+(x+1);b[S++]=P,b[S++]=C,b[S++]=R,b[S++]=P,b[S++]=R,b[S++]=L}const E=new Gt;E.setAttribute("position",new q(d,3)),E.setAttribute("uv",new q(M,2)),E.setAttribute("aAnatomyData",new q(w,4)),E.setAttribute("skinIndex",new me(_,4)),E.setAttribute("skinWeight",new Yt(A,4)),E.setIndex(new q(b,1)),E.computeVertexNormals(),n.push(E)}return Ve(n)}function M_(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=bu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,p=l.dirZ/h,f=p,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,d=l.rootZ+p*l.toeLength*v,M=l.rootY+Math.sin(v*Math.PI)*.009-.008*v*v+.002,w=l.toeLength*(1-v)+l.clawLength,_=l.tipRadius*.72,A=(n+1)*(s+1),b=new Float32Array(A*3),S=new Float32Array(A*2),E=new Float32Array(A*4),y=new Uint16Array(A*4),x=new Float32Array(A*4);for(let L=0;L<=n;L++){const D=L/n,B=_*Math.sqrt(Math.max(.06,1-Math.pow(D,1.72))),k=m+u*w*D,F=d+p*w*D,H=Math.max(.004,M-.028*Math.pow(D,1.82)+.004*Math.sin(D*Math.PI));for(let V=0;V<=s;V++){const Y=V/s,j=Y*Math.PI*2,W=Math.sin(j),X=Math.cos(j),O=L*(s+1)+V;b[O*3]=k+f*W*B*.72,b[O*3+1]=Math.max(.002,H+X*B*1.04),b[O*3+2]=F+g*W*B*.72,S[O*2]=D,S[O*2+1]=Y,y.set([c,0,0,0],O*4),x.set([1,0,0,0],O*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let D=0;D<s;D++){const B=L*(s+1)+D,k=(L+1)*(s+1)+D,F=(L+1)*(s+1)+(D+1),H=L*(s+1)+(D+1);P[C++]=B,P[C++]=k,P[C++]=F,P[C++]=B,P[C++]=F,P[C++]=H}const R=new Gt;R.setAttribute("position",new q(b,3)),R.setAttribute("uv",new q(S,2)),R.setAttribute("aAnatomyData",new q(E,4)),R.setAttribute("skinIndex",new me(y,4)),R.setAttribute("skinWeight",new Yt(x,4)),R.setIndex(new q(P,1)),R.computeVertexNormals(),e.push(R)}}return Ve(e)}function ks(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function w_(i,t){const e=[],n=[];for(const s of["L","R"]){const o=s==="L"?1:-1;e.push(...y_(i,s,o,t)),n.push(...b_(i,s,o,t)),e.push(...S_(i,s,t)),n.push(A_(i,s,t)),n.push(E_(i,s,o,t)),e.push(...T_(i,s,o,t)),n.push(C_(i,s,o,t))}return{wingSparsSkinGeometry:Ve(e),wingMembraneGeometry:Ve(n),dorsalSpinesGeometry:P_(i,t)}}function fa(i,t,e,n,s,o,a=.42,r=.12){const l=new Bn(t),c=e.map(A=>i.boneIndexMap.get(A)),h=e.map(A=>i.bindWorldPositions.get(A)),u=(s+1)*(o+1),p=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),d=new T(0,1,0);for(let A=0;A<=s;A++){const b=A/s,S=l.getPointAt(b),E=l.getTangentAt(b).normalize();let y=d.clone().addScaledVector(E,-d.dot(E));y.lengthSq()<1e-4&&y.set(0,0,1),y.normalize();const x=new T().crossVectors(y,E).normalize(),P=b*(n.length-1),C=Math.min(n.length-2,Math.floor(P)),R=P-C;let L=$.lerp(n[C],n[C+1],R);b>.86&&(L*=Math.sqrt(Math.max(0,1-Math.pow((b-.86)/.14,2))));for(let D=0;D<=o;D++){const B=D/o,k=B*Math.PI*2,F=new T().copy(S).addScaledVector(x,L*Math.sin(k)).addScaledVector(y,L*a*Math.cos(k)),H=A*(o+1)+D;p[H*3]=F.x,p[H*3+1]=F.y,p[H*3+2]=F.z,f[H*2]=b*1.4,f[H*2+1]=B*.45,g[H*4]=.08,g[H*4+1]=ks(.3,.92,b)*.38,g[H*4+2]=r;const V=Zn(F,c,h,3.8);v.set(V.indices,H*4),m.set(V.weights,H*4)}}const M=new Uint16Array(s*o*6);let w=0;for(let A=0;A<s;A++)for(let b=0;b<o;b++){const S=A*(o+1)+b,E=(A+1)*(o+1)+b,y=(A+1)*(o+1)+(b+1),x=A*(o+1)+(b+1);M[w++]=S,M[w++]=E,M[w++]=y,M[w++]=S,M[w++]=y,M[w++]=x}const _=new Gt;return _.setAttribute("position",new q(p,3)),_.setAttribute("uv",new q(f,2)),_.setAttribute("aAnatomyData",new q(g,4)),_.setAttribute("skinIndex",new me(v,4)),_.setAttribute("skinWeight",new Yt(m,4)),_.setIndex(new q(M,1)),_.computeVertexNormals(),_}function y_(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new T(e*.16,.9,.68),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(fa(i,c,h,[.048,.052,.05,.042,.032,.02,.005],o,a,.58,.08));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let p=1;p<=5;p++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${p}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${p}_b`);s.push(fa(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${p}_a`,`wingFinger_${t}_${p}_b`],[.013,.0085,.0025],r,l,.34,.1))}return s}function Es(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let p=0;p<=t;p++){const f=p/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),d=p*(i+1)+g;s[d*3]=m.pos.x,s[d*3+1]=m.pos.y,s[d*3+2]=m.pos.z,o[d*2]=v*1.25,o[d*2+1]=f*1.25,a[d*4]=.06,a[d*4+1]=m.pinkStripe??0,a[d*4+2]=m.iceBlue??.14,a[d*4+3]=m.thinness,r.set(m.skin.indices,d*4),l.set(m.skin.weights,d*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let p=0;p<t;p++)for(let f=0;f<i;f++){const g=p*(i+1)+f,v=(p+1)*(i+1)+f,m=(p+1)*(i+1)+(f+1),d=p*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=d}const u=new Gt;return u.setAttribute("position",new q(s,3)),u.setAttribute("uv",new q(o,2)),u.setAttribute("uv1",new q(o,2)),u.setAttribute("aAnatomyData",new q(a,4)),u.setAttribute("skinIndex",new me(r,4)),u.setAttribute("skinWeight",new Yt(l,4)),u.setIndex(new q(c,1)),u.computeVertexNormals(),u}function b_(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),p=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(Es(o,Math.max(4,Math.floor(a*.5)),(_,A)=>{const b=new T().lerpVectors(new T(e*.25,.96,.74),f,_),S=_<.45?new T().lerpVectors(v,g,_/.45):new T().lerpVectors(g,f,(_-.45)/.55),E=new T().lerpVectors(S,b,A),y=Math.max(0,1-_*2.1),x=Math.max(0,(_-.45)*1.82),P=Math.max(0,1-y-x),C=Be([c,l,r,0],[y,P,x,0]);return{pos:E,skin:C,thinness:.38+.34*A,pinkStripe:.18*A,iceBlue:.1}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),d=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),M=i.boneIndexMap.get(`wingFinger_${t}_1_a`),w=i.boneIndexMap.get(`wingFinger_${t}_1_b`);s.push(Es(o,a,(_,A)=>{const b=new T(e*.21,.9,.62),S=new T(e*.18,.75,-.44),E=new T().lerpVectors(b,S,A),y=A<.5?new T().lerpVectors(f,m,A*2):new T().lerpVectors(m,d,(A-.5)*2),x=_<.45?new T().lerpVectors(v,g,_/.45):new T().lerpVectors(g,f,(_-.45)/.55),P=new T().lerpVectors(E,y,_),C=new T().lerpVectors(x,P,Math.pow(A,.85));C.z+=Math.sin(_*Math.PI)*.045*Math.pow(A,1.8),C.y+=Math.sin(_*Math.PI)*Math.sin(A*Math.PI)*.022;const R=1-_,L=_,D=A<.36?h:A<.72?u:p,B=A<.25?l:A<.55?r:M,k=A<.55?M:w,F=A<.55?A/.55:(A-.55)/.45,H=Be([D,B,k,c],[R*.88,L*(1-F),L*F,R*.12]),V=Math.pow(.5+.5*Math.sin(A*14+_*4.5),3)*.55;return{pos:C,skin:H,thinness:.55+.4*A,pinkStripe:V*_,iceBlue:(1-_)*.35+.08}}));for(let _=1;_<=5;_++){const A=i.bindWorldPositions.get(`wingFinger_${t}_${_}_a`),b=i.bindWorldPositions.get(`wingFinger_${t}_${_}_b`),S=i.bindWorldPositions.get(`wingFinger_${t}_${_+1}_a`),E=i.bindWorldPositions.get(`wingFinger_${t}_${_+1}_b`),y=i.boneIndexMap.get(`wingFinger_${t}_${_}_a`),x=i.boneIndexMap.get(`wingFinger_${t}_${_}_b`),P=i.boneIndexMap.get(`wingFinger_${t}_${_+1}_a`),C=i.boneIndexMap.get(`wingFinger_${t}_${_+1}_b`);s.push(Es(o,a,(R,L)=>{const D=L<.5?new T().lerpVectors(f,A,L*2):new T().lerpVectors(A,b,(L-.5)*2),B=L<.5?new T().lerpVectors(f,S,L*2):new T().lerpVectors(S,E,(L-.5)*2),k=new T().lerpVectors(D,B,R),F=_===5?-.028:.042,H=new T().subVectors(f,k).normalize();k.addScaledVector(H,F*Math.sin(R*Math.PI)*Math.pow(L,2.2)),k.y+=Math.sin(R*Math.PI)*Math.sin(L*Math.PI)*.018;let V;if(L<.5){const W=L*2;V=Be([r,y,P,0],[1-W,W*(1-R),W*R,0])}else{const W=(L-.5)*2;V=Be([y,x,P,C],[(1-R)*(1-W),(1-R)*W,R*(1-W),R*W])}const Y=Math.sin(L*18-_*.65+Math.sin(R*Math.PI)*1.4),j=ks(.28,.94,Y)*ks(.14,.58,L)*.88;return{pos:k,skin:V,thinness:.62+.38*L,pinkStripe:j,iceBlue:(1-L)*.24+.06}}))}return s}function S_(i,t,e){const n=t==="L"?1:-1,s=[],o=e===0?10:6,a=e===0?8:6;return yu.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new T(n*r.rootX,r.rootY,r.rootZ),u=new T(n*r.tipX,r.tipY,r.tipZ);s.push(fa(i,[h,u],[c],[.009,.0022],o,a,.35,.2))}),s}function A_(i,t,e){const n=t==="L"?1:-1,s=e===0?16:9,o=i.boneIndexMap.get(`pelvicFin_${t}_1`),a=i.boneIndexMap.get(`pelvicFin_${t}_2`),r=i.boneIndexMap.get(`pelvicFin_${t}_3`),l=new T(n*.16,.72,-.7),c=new T(n*.095,.52,-1.46);return Es(s,s,(h,u)=>{const p=new T().lerpVectors(l,c,h),f=.29*Math.sin(Math.pow(h,.74)*Math.PI),g=p.clone().add(new T(n*f,-.025*f,-.08*Math.sin(h*Math.PI))),v=new T().lerpVectors(p,g,u),m=Math.max(0,1-h*2),d=Math.max(0,(h-.5)*2),M=Math.max(0,1-m-d),w=Be([o,a,r,0],[m,M,d,0]);return{pos:v,skin:w,thinness:.52+.45*u,pinkStripe:u*.38,iceBlue:.26}})}function E_(i,t,e,n){const s=n===0?12:6,o=i.boneIndexMap.get("tail_7"),a=i.boneIndexMap.get("tail_8"),r=new T(e*.02,.12,-2.92),l=new T(e*.018,.116,-3.22);return Es(s,s,(c,h)=>{const u=new T().lerpVectors(r,l,c),p=.115*Math.sin(Math.pow(c,.75)*Math.PI),f=u.clone().add(new T(e*p,.008*Math.sin(c*Math.PI),-.025*c)),g=new T().lerpVectors(u,f,h),v=Be([o,a,0,0],[1-c,c,0,0]);return{pos:g,skin:v,thinness:.55+.4*h,pinkStripe:h*.35,iceBlue:.28}})}function T_(i,t,e,n){const s=[],o=n===0?10:6,a=n===0?8:6;return wu.forEach((r,l)=>{const c=`tailFin_${t}_${l+1}`,h=new T(e*r.rootX,r.rootY,r.rootZ),u=new T().lerpVectors(h,new T(e*r.tipX,r.tipY,r.tipZ),.92);s.push(fa(i,[h,u],[c],[.0075,.0018],o,a,.34,.24))}),s}function C_(i,t,e,n){const s=n===0?28:n===1?16:10,o=n===0?16:n===1?10:6,a=i.boneIndexMap.get(`tailFinHinge_${t}`),r=i.boneIndexMap.get(`tailFin_${t}_1`),l=i.boneIndexMap.get(`tailFin_${t}_3`),c=i.boneIndexMap.get(`tailFin_${t}_5`),h=-3.22,u=-4.08;return Es(s,o,(p,f)=>{const g=$.lerp(h,u,p),v=e*.016,m=.116,d=Math.sin(Math.pow(p,.6)*Math.PI),M=.455*d*(1+.1*Math.sin(p*Math.PI*2-.6)),w=.095*Math.sin(Math.min(1,p/.52)*Math.PI)*(p<.52?1:0),_=-.115*Math.sin(Math.max(0,(p-.5)/.5)*Math.PI),A=g+w+_,b=v+e*M,S=m+.012*d,E=Math.sin(p*Math.PI*5)*.0028*Math.sin(f*Math.PI)*d,y=new T($.lerp(v,b,f),$.lerp(m,S,f)+E,$.lerp(g,A,f)),x=Math.max(0,1-p*2.2),P=Math.max(0,(p-.55)*2.2),C=Math.max(0,1-x-P),R=Be([a,r,l,c],[.25,x*.75,C*.75,P*.75]);return{pos:y,skin:R,thinness:.54+.44*f,pinkStripe:ks(.32,.94,f)*.52,iceBlue:.34*(1-f*.35)}})}function P_(i,t){const e=t===0?84:t===1?48:28,n=t===0?10:6,s=["tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest"],o=s.map(M=>i.boneIndexMap.get(M)),a=s.map(M=>i.bindWorldPositions.get(M));new Bn([new T(0,.14,-3.02),new T(0,.23,-2.24),new T(0,.45,-1.5),new T(0,.82,-.78),new T(0,.94,-.32),new T(0,1.01,.18),new T(0,1.07,.6)]);const r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*3),h=new Float32Array(r*2),u=new Float32Array(r*4),p=new Uint16Array(r*4),f=new Float32Array(r*4);for(let M=0;M<=e;M++){const w=M/e,_=$.lerp(-3.02,.66,w),A=a_(_),b=A.point,S=A.up,E=ks(0,.14,w)*ks(1,.82,w),y=(.012+.024*Math.sin(Math.pow(w,.78)*Math.PI))*E,x=.015*(.45+.55*E),P=Zn(b,o,a,3.8);for(let C=0;C<=n;C++){const R=C/n,L=Math.sin(R*Math.PI),D=Math.cos(R*Math.PI)*x*(1-.55*L),B=-.016+(y+.016)*Math.pow(L,.9),k=b.clone().addScaledVector(S,B);k.x=D;const F=k.clone().addScaledVector(S,y*.35*L),H=M*(n+1)+C;l[H*3]=k.x,l[H*3+1]=k.y,l[H*3+2]=k.z,c[H*3]=F.x,c[H*3+1]=F.y,c[H*3+2]=F.z,h[H*2]=w*3,h[H*2+1]=R,u[H*4]=.08,u[H*4+1]=L*.72,u[H*4+2]=L*.28,u[H*4+3]=L*.88,p.set(P.indices,H*4),f.set(P.weights,H*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let M=0;M<e;M++)for(let w=0;w<n;w++){const _=M*(n+1)+w,A=(M+1)*(n+1)+w,b=(M+1)*(n+1)+(w+1),S=M*(n+1)+(w+1);g[v++]=_,g[v++]=b,g[v++]=A,g[v++]=_,g[v++]=S,g[v++]=b}const m=new Gt;m.setAttribute("position",new q(l,3)),m.setAttribute("uv",new q(h,2)),m.setAttribute("uv1",new q(h,2)),m.setAttribute("aAnatomyData",new q(u,4)),m.setAttribute("skinIndex",new me(p,4)),m.setAttribute("skinWeight",new Yt(f,4)),m.setIndex(new q(g,1));const d=new q(c,3);return d.name="dorsalFlex",m.morphAttributes.position=[d],m.computeVertexNormals(),m}function R_(){const i=Gv(),t=i_(),e=new qn;e.name="LightFury_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s=[],o={},a={};for(const l of[0,1,2]){const c=new qn;c.name=`LightFury_LOD${l}`;const h=l_(i,l),u=p_(i,l),p=w_(i,l),f=Ve([h,u.jawSkinGeometry,p.wingSparsSkinGeometry]),g=u.clawsGeometry,v=(R,L,D,B=!0,k=!0)=>{const F=new $h(L,D);return F.name=`${R}_LOD${l}`,F.castShadow=B,F.receiveShadow=k,F.frustumCulled=!1,F.bind(i.skeleton,new ie),F},m=v("LightFuryBodyAndHeadSkin",f,t.skinMaterial),d=v("LightFuryIridescentWingsAndHeartTail",p.wingMembraneGeometry,t.wingMembraneMaterial),M=v("LightFuryContinuousDorsalSail",p.dorsalSpinesGeometry,t.skinMaterial);n.push(M);const w=v("LightFuryOralGums",u.oralGumsGeometry,t.oralGumMaterial,!1,!0),_=v("LightFuryRetractableTeeth",u.teethGeometry,t.teethMaterial,!0,!0),A=v("LightFuryArticulatedTongue",u.tongueGeometry,t.tongueMaterial,!1,!0),b=v("LightFurySkyBlueIrises",u.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),S=v("LightFuryRefractiveCorneas",u.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1),E=v("LightFurySlatePearlClaws",g,t.clawMaterial,!0,!0);for(const R of[m,M,E,w,_,A,b])R.renderOrder=11;S.renderOrder=12,d.renderOrder=13;const y=[m,d,M,w,_,A,b,S,E],x=[["LFDepth_BodySkin",f,t.hullDepthMaterial,!1],["LFDepth_WingMembrane",p.wingMembraneGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_DorsalSail",p.dorsalSpinesGeometry,t.hullDepthMaterial,!0],["LFDepth_Gums",u.oralGumsGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_Teeth",u.teethGeometry,t.hullDepthMaterial,!1],["LFDepth_Tongue",u.tongueGeometry,t.hullDepthMaterial,!1],["LFDepth_Irises",u.irisGeometry,t.hullDepthMaterial,!1],["LFDepth_Claws",g,t.hullDepthMaterial,!1]];for(const[R,L,D,B]of x){const k=v(R,L,D,!1,!1);k.renderOrder=10,k.visible=!1,k.userData.excludeFromExport=!0,c.add(k),s.push(k),B&&n.push(k)}let P=0,C=0;for(const R of y){c.add(R);const L=R.geometry.getIndex();P+=L?L.count/3:R.geometry.getAttribute("position").count/3,C+=R.geometry.getAttribute("position").count}c.visible=l===0,e.add(c),o[l]=c,a[l]={lod:l,triangles:Math.round(P),vertices:C,subMeshCount:y.length}}const r={rootGroup:e,rig:i,materials:t,lodGroups:o,dorsalSailMeshes:n,hullDepthMeshes:s,lodStats:a,activeLOD:0,autoLOD:!1,setActiveLOD(l){r.activeLOD=l;for(const c of[0,1,2])o[c].visible=c===l},updateAutoLOD(l){if(!r.autoLOD)return r.activeLOD;const c=l<9.5?0:l<20?1:2;return c!==r.activeLOD&&r.setActiveLOD(c),r.activeLOD}};return r}function uh(){return new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})})}function L_(){const i=document.getElementById("loading-curtain"),t=document.getElementById("lc-progress-fill"),e=document.getElementById("lc-stage-text"),n=document.getElementById("lc-pct-text");let s=2;const o=(a,r)=>{s=Math.max(s,Math.min(100,a)),t&&(t.style.width=`${s.toFixed(1)}%`),n&&(n.textContent=`${String(Math.round(s)).padStart(2,"0")}%`),r&&e&&(e.textContent=r)};return o(4,"Preparing WebGL2 twilight canvas…"),{async advanceTo(a,r){o(a,r),await uh()},async completeAndDissolve(a){o(100,"The horizon is ready."),await uh(),await new Promise(r=>setTimeout(r,260)),i&&(i.classList.add("is-dissolving"),setTimeout(()=>{i.remove()},1250)),a.classList.remove("hud-entering")}}}const dh={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class ma{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new H_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new tx(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,s){const o=new O_,a=[];for(let r=0,l=this.pluginCallbacks.length;r<l;r++)a.push(this.pluginCallbacks[r](o));o.setPlugins(a),o.setTextureUtils(this.textureUtils),o.writeAsync(t,e,s).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(s,o){n.parse(t,s,o,e)})}}const ye={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},dr="KHR_mesh_quantization",Dn={};Dn[Tn]=ye.NEAREST;Dn[Ch]=ye.NEAREST_MIPMAP_NEAREST;Dn[Ks]=ye.NEAREST_MIPMAP_LINEAR;Dn[Yn]=ye.LINEAR;Dn[Zo]=ye.LINEAR_MIPMAP_NEAREST;Dn[bi]=ye.LINEAR_MIPMAP_LINEAR;Dn[yi]=ye.CLAMP_TO_EDGE;Dn[Qn]=ye.REPEAT;Dn[sa]=ye.MIRRORED_REPEAT;const ph={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},I_=new Lt,fh=12,D_=1179937895,F_=2,mh=8,N_=1313821514,U_=5130562;function eo(i,t){return i.length===t.length&&i.every(function(e,n){return e===t[n]})}function k_(i){return new TextEncoder().encode(i).buffer}function B_(i){return eo(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function z_(i,t,e){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let o=0;o<i.itemSize;o++){let a;i.itemSize>4?a=i.array[s*i.itemSize+o]:(o===0?a=i.getX(s):o===1?a=i.getY(s):o===2?a=i.getZ(s):o===3&&(a=i.getW(s)),i.normalized===!0&&(a=$.normalize(a,i.array))),n.min[o]=Math.min(n.min[o],a),n.max[o]=Math.max(n.max[o],a)}return n}function Cu(i){return Math.ceil(i/4)*4}function pr(i,t=0){const e=Cu(i.byteLength);if(e!==i.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(i)),t!==0)for(let s=i.byteLength;s<e;s++)n[s]=t;return n.buffer}return i}function gh(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function vh(i,t){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),i.convertToBlob({type:t,quality:e})}class O_{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+ga}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const s=this,o=s.buffers,a=s.json;n=s.options;const r=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(o,{type:"application/octet-stream"}),h=Object.keys(r),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const p=new FileReader;p.readAsArrayBuffer(c),p.onloadend=function(){const f=pr(p.result),g=new DataView(new ArrayBuffer(mh));g.setUint32(0,f.byteLength,!0),g.setUint32(4,U_,!0);const v=pr(k_(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(mh));m.setUint32(0,v.byteLength,!0),m.setUint32(4,N_,!0);const d=new ArrayBuffer(fh),M=new DataView(d);M.setUint32(0,D_,!0),M.setUint32(4,F_,!0);const w=fh+m.byteLength+v.byteLength+g.byteLength+f.byteLength;M.setUint32(8,w,!0);const _=new Blob([d,m,v,g,f],{type:"application/octet-stream"}),A=new FileReader;A.readAsArrayBuffer(_),A.onloadend=function(){e(A.result)}}}else if(a.buffers&&a.buffers.length>0){const p=new FileReader;p.readAsDataURL(c),p.onloadend=function(){const f=p.result;a.buffers[0].uri=f,e(a)}}else e(a)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const o=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&o.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const a in o.gltfExtensions)e.extensions[a]=o.gltfExtensions[a],s[a]=!0;delete o.gltfExtensions}Object.keys(o).length>0&&(e.extras=o)}catch(o){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+o.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new T;for(let s=0,o=t.count;s<o;s++)if(Math.abs(n.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),s=new T;for(let o=0,a=n.count;o<a;o++)s.fromBufferAttribute(n,o),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(o,s.x,s.y,s.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(s.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(f){return f.colorSpace===mn?function(v){return v<.04045?v*.0773993808:Math.pow(v*.9478672986+.0521327014,2.4)}:function(v){return v}}t instanceof Za&&(t=await this.decompressTextureAsync(t)),e instanceof Za&&(e=await this.decompressTextureAsync(e));const s=t?t.image:null,o=e?e.image:null,a=Math.max(s?s.width:0,o?o.width:0),r=Math.max(s?s.height:0,o?o.height:0),l=gh();l.width=a,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,r);const h=c.getImageData(0,0,a,r);if(s){c.drawImage(s,0,0,a,r);const f=n(t),g=c.getImageData(0,0,a,r).data;for(let v=2;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}if(o){c.drawImage(o,0,0,a,r);const f=n(e),g=c.getImageData(0,0,a,r).data;for(let v=1;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}c.putImageData(h,0,0);const p=(t||e).clone();return p.source=new _a(l),p.colorSpace=Un,p.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),p}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,s,o){const a=this.json;a.bufferViews||(a.bufferViews=[]);let r;switch(e){case ye.BYTE:case ye.UNSIGNED_BYTE:r=1;break;case ye.SHORT:case ye.UNSIGNED_SHORT:r=2;break;default:r=4}let l=t.itemSize*r;o===ye.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Cu(s*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let g=n;g<n+s;g++){for(let v=0;v<t.itemSize;v++){let m;t.itemSize>4?m=t.array[g*t.itemSize+v]:(v===0?m=t.getX(g):v===1?m=t.getY(g):v===2?m=t.getZ(g):v===3&&(m=t.getW(g)),t.normalized===!0&&(m=$.normalize(m,t.array))),e===ye.FLOAT?h.setFloat32(u,m,!0):e===ye.INT?h.setInt32(u,m,!0):e===ye.UNSIGNED_INT?h.setUint32(u,m,!0):e===ye.SHORT?h.setInt16(u,m,!0):e===ye.UNSIGNED_SHORT?h.setUint16(u,m,!0):e===ye.BYTE?h.setInt8(u,m):e===ye.UNSIGNED_BYTE&&h.setUint8(u,m),u+=r}u%l!==0&&(u+=l-u%l)}const p={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return o!==void 0&&(p.target=o),o===ye.ARRAY_BUFFER&&(p.byteStride=l),this.byteOffset+=c,a.bufferViews.push(p),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const o=new FileReader;o.readAsArrayBuffer(t),o.onloadend=function(){const a=pr(o.result),r={buffer:e.processBuffer(a),byteOffset:e.byteOffset,byteLength:a.byteLength};e.byteOffset+=a.byteLength,s(n.bufferViews.push(r)-1)}})}processAccessor(t,e,n,s){const o=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let r;if(t.array.constructor===Float32Array)r=ye.FLOAT;else if(t.array.constructor===Int32Array)r=ye.INT;else if(t.array.constructor===Uint32Array)r=ye.UNSIGNED_INT;else if(t.array.constructor===Int16Array)r=ye.SHORT;else if(t.array.constructor===Uint16Array)r=ye.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)r=ye.BYTE;else if(t.array.constructor===Uint8Array)r=ye.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;const l=z_(t,n,s);let c;e!==void 0&&(c=t===e.index?ye.ELEMENT_ARRAY_BUFFER:ye.ARRAY_BUFFER);const h=this.processBufferView(t,r,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:r,count:s,max:l.max,min:l.min,type:a[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),o.accessors||(o.accessors=[]),o.accessors.push(u)-1}processImage(t,e,n,s="image/png"){if(t!==null){const o=this,a=o.cache,r=o.json,l=o.options,c=o.pending;a.images.has(t)||a.images.set(t,{});const h=a.images.get(t),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];r.images||(r.images=[]);const p={mimeType:s},f=gh();f.width=Math.min(t.width,l.maxTextureSize),f.height=Math.min(t.height,l.maxTextureSize);const g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),t.data!==void 0){e!==In&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const m=new Uint8ClampedArray(t.height*t.width*4);for(let d=0;d<m.length;d+=4)m[d+0]=t.data[d+0],m[d+1]=t.data[d+1],m[d+2]=t.data[d+2],m[d+3]=t.data[d+3];g.putImageData(new ImageData(m,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(vh(f,s).then(m=>o.processBufferViewImage(m)).then(m=>{p.bufferView=m})):f.toDataURL!==void 0?p.uri=f.toDataURL(s):c.push(vh(f,s).then(m=>new FileReader().readAsDataURL(m)).then(m=>{p.uri=m}));const v=r.images.push(p)-1;return h[u]=v,v}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:Dn[t.magFilter],minFilter:Dn[t.minFilter],wrapS:Dn[t.wrapS],wrapT:Dn[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,s=this.cache,o=this.json;if(s.textures.has(t))return s.textures.get(t);o.textures||(o.textures=[]),t instanceof Za&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let a=t.userData.mimeType;a==="image/webp"&&(a="image/png");const r={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,a)};t.name&&(r.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,r)});const l=o.textures.push(r)-1;return s.textures.set(t,l),l}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const o=t.color.toArray().concat([t.opacity]);if(eo(o,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=o),t.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=t.metalness,s.pbrMetallicRoughness.roughnessFactor=t.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const r=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(r),texCoord:r.channel};this.applyTextureTransform(l,r),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const r={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(r,t.map),s.pbrMetallicRoughness.baseColorTexture=r}if(t.emissive){const r=t.emissive;if(Math.max(r.r,r.g,r.b)>0&&(s.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const c={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(c,t.emissiveMap),s.emissiveTexture=c}}if(t.normalMap){const r={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(r.scale=t.normalScale.x),this.applyTextureTransform(r,t.normalMap),s.normalTexture=r}if(t.aoMap){const r={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(r.strength=t.aoMapIntensity),this.applyTextureTransform(r,t.aoMap),s.occlusionTexture=r}t.transparent?s.alphaMode="BLEND":t.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=t.alphaTest),t.side===gn&&(s.doubleSided=!0),t.name!==""&&(s.name=t.name),this.serializeUserData(t,s),await this._invokeAllAsync(async function(r){r.writeMaterialAsync&&await r.writeMaterialAsync(t,s)});const a=n.materials.push(s)-1;return e.materials.set(t,a),a}async processMeshAsync(t){const e=this.cache,n=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let _=0,A=t.material.length;_<A;_++)s.push(t.material[_].uuid);else s.push(t.material.uuid);const o=s.join(":");if(e.meshes.has(o))return e.meshes.get(o);const a=t.geometry;let r;t.isLineSegments?r=ye.LINES:t.isLineLoop?r=ye.LINE_LOOP:t.isLine?r=ye.LINE_STRIP:t.isPoints?r=ye.POINTS:r=t.material.wireframe?ye.LINES:ye.TRIANGLES;const l={},c={},h=[],u=[],p={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in a.attributes){if(_.slice(0,5)==="morph")continue;const A=a.attributes[_];if(_=p[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),e.attributes.has(this.getUID(A))){c[_]=e.attributes.get(this.getUID(A));continue}g=null;const S=A.array;_==="JOINTS_0"&&!(S instanceof Uint16Array)&&!(S instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new q(new Uint16Array(S),A.itemSize,A.normalized)):(S instanceof Uint32Array||S instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=ma.Utils.toFloat32BufferAttribute(A));const E=this.processAccessor(g||A,a);E!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,A),c[_]=E,e.attributes.set(this.getUID(A),E))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const _=[],A=[],b={};if(t.morphTargetDictionary!==void 0)for(const S in t.morphTargetDictionary)b[t.morphTargetDictionary[S]]=S;for(let S=0;S<t.morphTargetInfluences.length;++S){const E={};let y=!1;for(const x in a.morphAttributes){if(x!=="position"&&x!=="normal"){y||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),y=!0);continue}const P=a.morphAttributes[x][S],C=x.toUpperCase(),R=a.attributes[x];if(e.attributes.has(this.getUID(P,!0))){E[C]=e.attributes.get(this.getUID(P,!0));continue}const L=P.clone();if(!a.morphTargetsRelative)for(let D=0,B=P.count;D<B;D++)for(let k=0;k<P.itemSize;k++)k===0&&L.setX(D,P.getX(D)-R.getX(D)),k===1&&L.setY(D,P.getY(D)-R.getY(D)),k===2&&L.setZ(D,P.getZ(D)-R.getZ(D)),k===3&&L.setW(D,P.getW(D)-R.getW(D));E[C]=this.processAccessor(L,a),e.attributes.set(this.getUID(R,!0),E[C])}u.push(E),_.push(t.morphTargetInfluences[S]),t.morphTargetDictionary!==void 0&&A.push(b[S])}l.weights=_,A.length>0&&(l.extras={},l.extras.targetNames=A)}const v=Array.isArray(t.material);if(v&&a.groups.length===0)return null;let m=!1;if(v&&a.index===null){const _=[];for(let A=0,b=a.attributes.position.count;A<b;A++)_[A]=A;a.setIndex(_),m=!0}const d=v?t.material:[t.material],M=v?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,A=M.length;_<A;_++){const b={mode:r,attributes:c};if(this.serializeUserData(a,b),u.length>0&&(b.targets=u),a.index!==null){let E=this.getUID(a.index);(M[_].start!==void 0||M[_].count!==void 0)&&(E+=":"+M[_].start+":"+M[_].count),e.attributes.has(E)?b.indices=e.attributes.get(E):(b.indices=this.processAccessor(a.index,a,M[_].start,M[_].count),e.attributes.set(E,b.indices)),b.indices===null&&delete b.indices}const S=await this.processMaterialAsync(d[M[_].materialIndex]);S!==null&&(b.material=S),h.push(b)}m===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(t,l)});const w=n.meshes.push(l)-1;return e.meshes.set(o,w),w}detectMeshQuantization(t,e){if(this.extensionsUsed[dr])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const s=t.split("_",1)[0];dh[s]&&dh[s].includes(n)&&(this.extensionsUsed[dr]=!0,this.extensionsRequired[dr]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:$.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),t=ma.Utils.mergeMorphTargetTracks(t.clone(),e);const o=t.tracks,a=[],r=[];for(let l=0;l<o.length;++l){const c=o[l],h=Te.parseTrackName(c.name);let u=Te.findNode(e,h.nodeName);const p=ph[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!p){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const f=1;let g=c.values.length/c.times.length;p===ph.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let v;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(v="CUBICSPLINE",g/=3):c.getInterpolation()===Ju?v="STEP":v="LINEAR",r.push({input:this.processAccessor(new q(c.times,f)),output:this.processAccessor(new q(c.values,g)),interpolation:v}),a.push({sampler:r.length-1,target:{node:s.get(u),path:p}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:r,channels:a}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,s=e.nodes[n.get(t)],o=t.skeleton;if(o===void 0)return null;const a=t.skeleton.bones[0];if(a===void 0)return null;const r=[],l=new Float32Array(o.bones.length*16),c=new ie;for(let u=0;u<o.bones.length;++u)r.push(n.get(o.bones[u])),c.copy(o.boneInverses[u]),c.multiply(t.bindMatrix).toArray(l,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new q(l,16)),joints:r,skeleton:n.get(a)}),s.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,s=this.nodeMap;e.nodes||(e.nodes=[]);const o={};if(n.trs){const r=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();eo(r,[0,0,0,1])||(o.rotation=r),eo(l,[0,0,0])||(o.translation=l),eo(c,[1,1,1])||(o.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),B_(t.matrix)===!1&&(o.matrix=t.matrix.elements);if(t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o),t.isMesh||t.isLine||t.isPoints){const r=await this.processMeshAsync(t);r!==null&&(o.mesh=r)}else t.isCamera&&(o.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const r=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&r.push(u)}}r.length>0&&(o.children=r)}await this._invokeAllAsync(function(r){r.writeNode&&r.writeNode(t,o)});const a=e.nodes.push(o)-1;return s.set(t,a),a}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);const o=[];for(let a=0,r=t.children.length;a<r;a++){const l=t.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&o.push(c)}}o.length>0&&(s.nodes=o),this.serializeUserData(t,s)}async processObjectsAsync(t){const e=new la;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});const n=[];for(let s=0;s<t.length;s++)t[s]instanceof la?await this.processSceneAsync(t[s]):n.push(t[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class H_{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,s=n.json,o=n.extensionsUsed,a={};t.name&&(a.name=t.name),a.color=t.color.toArray(),a.intensity=t.intensity,t.isDirectionalLight?a.type="directional":t.isPointLight?(a.type="point",t.distance>0&&(a.range=t.distance)):t.isSpotLight&&(a.type="spot",t.distance>0&&(a.range=t.distance),a.spot={},a.spot.innerConeAngle=(1-t.penumbra)*t.angle,a.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),o[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},o[this.name]=!0);const r=s.extensions[this.name].lights;r.push(a),e.extensions=e.extensions||{},e.extensions[this.name]={light:r.length-1}}}class V_{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class W_{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.clearcoatFactor=t.clearcoat,t.clearcoatMap){const a={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(a,t.clearcoatMap),o.clearcoatTexture=a}if(o.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,t.clearcoatRoughnessMap),o.clearcoatRoughnessTexture=a}if(t.clearcoatNormalMap){const a={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(a.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(a,t.clearcoatNormalMap),o.clearcoatNormalTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class G_{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const s=this.writer.extensionsUsed,o={};o.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class X_{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.iridescenceFactor=t.iridescence,t.iridescenceMap){const a={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(a,t.iridescenceMap),o.iridescenceTexture=a}if(o.iridescenceIor=t.iridescenceIOR,o.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const a={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(a,t.iridescenceThicknessMap),o.iridescenceThicknessTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Y_{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.transmissionFactor=t.transmission,t.transmissionMap){const a={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(a,t.transmissionMap),o.transmissionTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class $_{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.thicknessFactor=t.thickness,t.thicknessMap){const a={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(a,t.thicknessMap),o.thicknessTexture=a}t.attenuationDistance!==1/0&&(o.attenuationDistance=t.attenuationDistance),o.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class q_{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const s=this.writer.extensionsUsed,o={};o.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Z_{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(I_)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.specularIntensityMap){const a={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(a,t.specularIntensityMap),o.specularTexture=a}if(t.specularColorMap){const a={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(a,t.specularColorMap),o.specularColorTexture=a}o.specularFactor=t.specularIntensity,o.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class j_{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.sheenRoughnessMap){const a={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(a,t.sheenRoughnessMap),o.sheenRoughnessTexture=a}if(t.sheenColorMap){const a={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(a,t.sheenColorMap),o.sheenColorTexture=a}o.sheenRoughnessFactor=t.sheenRoughness,o.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class K_{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.anisotropyMap){const a={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(a,t.anisotropyMap),o.anisotropyTexture=a}o.anisotropyStrength=t.anisotropy,o.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Q_{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,o={};o.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class J_{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.bumpMap){const a={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(a,t.bumpMap),o.bumpTexture=a}o.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class tx{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,s=t,o=new Float32Array(s.count*3),a=new Float32Array(s.count*4),r=new Float32Array(s.count*3),l=new ie,c=new T,h=new nn,u=new T;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,h,u),c.toArray(o,f*3),h.toArray(a,f*4),u.toArray(r,f*3);const p={TRANSLATION:n.processAccessor(new q(o,3)),ROTATION:n.processAccessor(new q(a,4)),SCALE:n.processAccessor(new q(r,3))};s.instanceColor&&(p._COLOR_0=n.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:p},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}ma.Utils={insertKeyframe:function(i,t){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),o=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n));let r;if(i.times.length===0){s[0]=t;for(let l=0;l<n;l++)o[l]=0;r=0}else if(t<i.times[0]){if(Math.abs(i.times[0]-t)<.001)return 0;s[0]=t,s.set(i.times,1),o.set(a.evaluate(t),0),o.set(i.values,n),r=0}else if(t>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-t)<.001)return i.times.length-1;s[s.length-1]=t,s.set(i.times,0),o.set(i.values,0),o.set(a.evaluate(t),i.values.length),r=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-t)<.001)return l;if(i.times[l]<t&&i.times[l+1]>t){s.set(i.times.slice(0,l+1),0),s[l+1]=t,s.set(i.times.slice(l+1),l+2),o.set(i.values.slice(0,(l+1)*n),0),o.set(a.evaluate(t),(l+1)*n),o.set(i.values.slice((l+1)*n),(l+2)*n),r=l+1;break}}return i.times=s,i.values=o,r},mergeMorphTargetTracks:function(i,t){const e=[],n={},s=i.tracks;for(let o=0;o<s.length;++o){let a=s[o];const r=Te.parseTrackName(a.name),l=Te.findNode(t,r.nodeName);if(r.propertyName!=="morphTargetInfluences"||r.propertyIndex===void 0){e.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(td)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[r.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+r.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const f=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)f[g*c+h]=u.values[g];u.name=(r.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,e.push(u);continue}const p=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+h]=p.evaluate(u.times[f]);for(let f=0;f<a.times.length;f++){const g=this.insertKeyframe(u,a.times[f]);u.values[g*c+h]=a.values[f]}}return i.tracks=e,i},toFloat32BufferAttribute:function(i){const t=new q(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let e=0,n=i.count;e<n;e++)for(let s=0;s<i.itemSize;s++)t.setComponent(e,s,i.getComponent(e,s));return t}};async function ex(i,t){const e=new ma;i.updateMatrixWorld(!0);const n=[];i.traverse(l=>{l.userData?.excludeFromExport&&l.visible&&(l.visible=!1,n.push(l))});let s;try{s=await new Promise((l,c)=>{e.parse(i,h=>{h instanceof ArrayBuffer?l(h):c(new Error("Expected binary ArrayBuffer from GLTFExporter"))},h=>c(h),{binary:!0,onlyVisible:!0,maxTextureSize:1024})})}finally{for(const l of n)l.visible=!0}const o=new Blob([s],{type:"model/gltf-binary"}),a=URL.createObjectURL(o),r=document.createElement("a");return r.href=a,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(a),5e3),{filename:t,sizeMB:s.byteLength/(1024*1024)}}async function Pu(i,t,e=i.activeLOD){const n=i.activeLOD,s=i.autoLOD;i.autoLOD=!1,i.setActiveLOD(e);try{return await ex(i.rootGroup,`${t}-lod${e}.glb`)}finally{i.setActiveLOD(n),i.autoLOD=s}}async function nx(i,t=i.activeLOD){return Pu(i,"toothless-hidden-world",t)}async function ix(i,t=i.activeLOD){return Pu(i,"light-fury-hidden-world",t)}const na=[{id:"twin-pair",label:"Twin Furies Perch",position:new T(.05,2.75,11.4),target:new T(0,.98,-.12)},{id:"light-fury-hero",label:"Light Fury 3/4",position:new T(-6.85,1.68,3.15),target:new T(-4.42,1,.25)},{id:"light-fury-face",label:"Light Fury Portrait",position:new T(-3.65,1.64,2.38),target:new T(-4.22,1.5,1.55)},{id:"toothless-hero",label:"Toothless 3/4",position:new T(7.15,1.82,3.68),target:new T(4.42,1.06,.55)},{id:"toothless-paws-scales",label:"Scales & Claws Study",position:new T(6.15,.96,2.95),target:new T(4.52,.62,1.25)},{id:"waterfall-islands",label:"Waterfall Double-Isle",position:new T(14.5,8.2,16),target:new T(-56,-1.5,-28)},{id:"sea-arch-drangar",label:"Sea-Arch & Clett",position:new T(28,5.4,2.5),target:new T(54.5,-1.8,20.5)},{id:"crescent-lagoon",label:"Crescent Lagoon",position:new T(24,38,-12),target:new T(84,-6,34)},{id:"archipelago-aerial",label:"Archipelago Panorama",position:new T(18,68,108),target:new T(-4,-4,-24)}];function En(i){const t=parseFloat(i.min||"0"),e=parseFloat(i.max||"1"),n=parseFloat(i.value||"0"),s=e>t?(n-t)/(e-t)*100:50;i.style.setProperty("--fill-pct",`${Math.max(0,Math.min(100,s)).toFixed(1)}%`)}function sx(i,t,e,n,s,o,a){let r=!1,l=window.innerWidth<=780,c=!0,h=1,u=null;i.classList.toggle("drawer-collapsed",l);const p=t.rig.bones.length+n.rig.bones.length,f=document.createElement("div");f.className="hud-toast",i.appendChild(f);const g=document.createElement("div");g.className="shutter-flash",i.appendChild(g);const v=ht=>{f.textContent=ht,f.classList.add("visible"),u!==null&&window.clearTimeout(u),u=window.setTimeout(()=>{f.classList.remove("visible")},2200)},m=()=>{g.classList.add("flash"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{g.classList.remove("flash")})})},d=document.createElement("div");d.className="hud-header",d.innerHTML=`
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
      <div class="telemetry-pill hud-collapsible"><strong>${p}</strong> Bones</div>
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
  `,i.appendChild(d);const M=d.querySelector("#tel-fps"),w=d.querySelector("#tel-lod"),_=d.querySelector("#btn-cursor-gaze"),A=d.querySelector("#btn-photo"),b=d.querySelector("#btn-fullscreen"),S=d.querySelector("#btn-help"),E=d.querySelector("#btn-toggle-hud"),y=document.createElement("button");y.className="drawer-reopen-btn hud-collapsible",y.title="Open Character & Atmosphere Atelier [Tab]",y.innerHTML='<span>Open Atelier</span><span class="kbd-hint">Tab</span>',i.appendChild(y);const x=ht=>{l=ht,i.classList.toggle("drawer-collapsed",l)};y.addEventListener("click",()=>x(!1));const P=()=>{r=!r,i.classList.toggle("hud-hidden",r),E.innerHTML=r?'Show UI <span class="kbd-hint">H</span>':'Cinema <span class="kbd-hint">H</span>'};E.addEventListener("click",P);const C=()=>{c=!c,_.classList.toggle("is-active",c),a.onToggleCursorGaze(c),v(c?"Interactive Cursor Gaze enabled":"Sculpted Manual Gaze locked")};_.addEventListener("click",C),A.addEventListener("click",()=>{a.onCaptureSnapshot()});const R=()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})};b.addEventListener("click",R),document.addEventListener("fullscreenchange",()=>{b.classList.toggle("is-active",!!document.fullscreenElement)});const L=document.createElement("div");L.className="help-backdrop",L.innerHTML=`
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
  `,i.appendChild(L);const D=ht=>{const Et=ht??!L.classList.contains("open");L.classList.toggle("open",Et),S.classList.toggle("is-active",Et)};S.addEventListener("click",()=>D()),L.querySelector("#btn-help-close").addEventListener("click",()=>D(!1)),L.addEventListener("click",ht=>{ht.target===L&&D(!1)});const B=document.createElement("div");B.className="flight-bar hud-collapsible",B.innerHTML=`
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
  `,i.appendChild(B);const k=B.querySelector("#btn-flight-play"),F=B.querySelector("#flight-play-icon"),H=B.querySelector("#flight-play-text"),V=B.querySelector("#btn-flight-reset"),Y=B.querySelector("#flight-phase-label"),j=B.querySelector("#flight-time-label"),W=B.querySelector("#flight-scrubber"),X=B.querySelector("#btn-flight-speed"),O=B.querySelector("#btn-flight-cam"),it=B.querySelector("#btn-flight-loop"),nt=Array.from(B.querySelectorAll(".flight-mode-pill"));let Z=!1;const Q=()=>{const ht=o.getPhaseInfo(),Et=ht.isPlaying&&!ht.isPaused;B.classList.toggle("playing",Et);const At=ht.subjectMode==="duet"?"Begin Courtship Flight":ht.subjectMode==="light-fury"?"Fly Light Fury":"Fly Toothless";ht.isPlaying?ht.isPaused?(F.innerHTML="&#9654;",H.textContent="Resume Flight",Y.textContent=`${ht.phaseLabel} (Paused)`):(F.innerHTML="&#10074;&#10074;",H.textContent="Pause Flight",Y.textContent=ht.phaseLabel):(F.innerHTML="&#9654;",H.textContent=At,Y.innerHTML=ht.subjectMode==="duet"?"Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown":"Perched Ready &mdash; Solo Takeoff, Sea Soar &amp; Landing"),j.textContent=`${ht.elapsedSec.toFixed(1)}s / ${ht.durationSec.toFixed(1)}s`,Z||(W.value=String(ht.progress),En(W)),O.classList.toggle("active",ht.followCamera),it.classList.toggle("active",ht.loop),X.classList.toggle("active",h<.99),X.innerHTML=`${h.toFixed(1)}&times;`,nt.forEach(Xt=>Xt.classList.toggle("active",Xt.dataset.fmode===ht.subjectMode))};X.addEventListener("click",()=>{h=h>.75?.5:1,a.onFlightSpeedChange(h),Q(),v(h<.75?"0.5× Slow-Motion Wingbeat Study":"1.0× Natural Flight Speed")}),nt.forEach(ht=>{ht.addEventListener("click",()=>{const Et=ht.dataset.fmode;o.setSubjectMode(Et),Q(),De()})}),k.addEventListener("click",()=>{o.togglePlayPause(),Q(),De()}),V.addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),Q(),De()}),W.addEventListener("pointerdown",()=>{Z=!0}),window.addEventListener("pointerup",()=>{Z=!1}),W.addEventListener("input",()=>{En(W),o.scrubToProgress(parseFloat(W.value)),e.applyRigState(0),s.applyRigState(0),Q(),De()}),O.addEventListener("click",()=>{o.followCamera=!o.followCamera,Q()}),it.addEventListener("click",()=>{o.loop=!o.loop,Q()});const G=document.createElement("div");G.className="camera-bar hud-collapsible";const ot=[],gt=ht=>{const Et=na[ht];Et&&(o.isPlaying&&(o.stopAndResetToPerch(),Q(),De()),ot.forEach((At,Xt)=>At.classList.toggle("active",Xt===ht)),ot[ht]?.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"}),Et.id.startsWith("light-fury")?yt("light-fury"):Et.id.startsWith("toothless")&&yt("toothless"),a.onSelectCameraBookmark(Et))};na.forEach((ht,Et)=>{const At=document.createElement("button");At.className=`cam-btn${Et===0?" active":""}`,At.title=`${ht.label} [Hotkey ${Et+1}]`,At.innerHTML=`<span class="cam-btn-idx">${Et+1}</span><span>${ht.label}</span>`,At.addEventListener("click",()=>gt(Et)),ot.push(At),G.appendChild(At)}),i.appendChild(G),window.addEventListener("keydown",ht=>{const Et=document.activeElement?.tagName;if(!(Et==="INPUT"||Et==="TEXTAREA")){if(ht.key==="Escape"&&L.classList.contains("open")){D(!1);return}if(ht.key==="?"||ht.key==="/"&&ht.shiftKey){ht.preventDefault(),D();return}if(ht.key==="Tab"){ht.preventDefault(),x(!l);return}if(ht.key==="h"||ht.key==="H")P();else if(ht.key==="c"||ht.key==="C")C();else if(ht.key==="p"||ht.key==="P")a.onCaptureSnapshot();else if(ht.key==="f"||ht.key==="F")R();else if(ht.code==="Space")ht.preventDefault(),o.togglePlayPause(),Q(),De();else if(ht.key>="1"&&ht.key<="9"&&!ht.ctrlKey&&!ht.metaKey&&!ht.altKey){const At=parseInt(ht.key,10)-1;At>=0&&At<na.length&&gt(At)}}});const tt=document.createElement("aside");tt.className="rig-drawer hud-collapsible",tt.innerHTML=`
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
  `,i.appendChild(tt),tt.querySelector("#btn-collapse-drawer").addEventListener("click",()=>{x(!0)});const U=tt.querySelector("#moments-grid"),Mt=tt.querySelector("#tab-light-fury"),at=tt.querySelector("#tab-toothless"),pt=tt.querySelector("#panel-light-fury"),_t=tt.querySelector("#panel-toothless"),It=tt.querySelector("#panel-shared-world");function yt(ht){Mt.classList.toggle("active",ht==="light-fury"),at.classList.toggle("active",ht==="toothless"),pt.style.display=ht==="light-fury"?"block":"none",_t.style.display=ht==="toothless"?"block":"none"}Mt.addEventListener("click",()=>yt("light-fury")),at.addEventListener("click",()=>yt("toothless"));const z=[];function I(ht,Et,At=!1){const Xt=document.createElement("div");Xt.className=`accordion-section${At?" open":""}`;const xe=document.createElement("button");xe.className="accordion-header",xe.innerHTML=`<span>${Et}</span><span class="accordion-chevron">&#9662;</span>`;const Me=document.createElement("div");Me.className="accordion-collapse";const be=document.createElement("div");be.className="accordion-collapse-inner";const je=document.createElement("div");return je.className="accordion-body",be.appendChild(je),Me.appendChild(be),xe.addEventListener("click",()=>{Xt.classList.toggle("open")}),Xt.appendChild(xe),Xt.appendChild(Me),ht.appendChild(Xt),je}function et(ht,Et,At,Xt,xe,Me,be,je=.01,Ke=!1){const Hs=Number(At[xe]),Ui=document.createElement("div");Ui.className="control-row",Ui.title="Double-click slider to reset";const vo=document.createElement("span");vo.className="control-val";const _o=document.createElement("div");_o.className="control-label-line";const Ll=document.createElement("span");Ll.textContent=Et,_o.appendChild(Ll),_o.appendChild(vo);const zn=document.createElement("input");zn.type="range",zn.min=String(Me),zn.max=String(be),zn.step=String(je);const Sa=()=>{const Vs=Number(At[xe]);zn.value=String(Vs),vo.textContent=Vs.toFixed(2),En(zn)};Sa(),z.push(Sa),zn.addEventListener("input",()=>{o.isPlaying&&!o.isPaused&&(o.isPaused=!0,Q());const Vs=parseFloat(zn.value);Xt({[xe]:Vs}),vo.textContent=Vs.toFixed(2),En(zn),Ke&&De()}),zn.addEventListener("dblclick",()=>{Xt({[xe]:Hs}),Sa(),Ke&&De(),v(`Reset ${Et}`)}),Ui.appendChild(_o),Ui.appendChild(zn),ht.appendChild(Ui)}function dt(ht,Et,At,Xt,xe){const Me=document.createElement("label");Me.className="toggle-row";const be=document.createElement("span");be.textContent=Et;const je=document.createElement("input");je.type="checkbox";const Ke=()=>{je.checked=!!At[xe]};Ke(),z.push(Ke),je.addEventListener("change",()=>{Xt({[xe]:je.checked}),De()}),Me.appendChild(be),Me.appendChild(je),ht.appendChild(Me)}const vt=I(pt,"Light Fury Moods & Expressions",!0),ft=document.createElement("div");ft.className="weather-grid";const Ft=[];Xv.forEach((ht,Et)=>{const At=document.createElement("button");At.className=`weather-btn${Et===0?" active":""}`,At.innerHTML=`
      <span class="weather-btn-title">${ht.label}</span>
      <span class="weather-btn-sub">${ht.subtitle}</span>
    `,At.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),Q()),Ft.forEach(Xt=>Xt.classList.remove("active")),At.classList.add("active"),s.setState(ht.patch),De()}),Ft.push(At),ft.appendChild(At)}),vt.appendChild(ft);const ut=(ht,Et,At,Xt,xe,Me=.01,be=!1)=>et(ht,Et,s.state,je=>s.setState(je),At,Xt,xe,Me,be),St=(ht,Et,At)=>dt(ht,Et,s.state,Xt=>s.setState(Xt),At),Zt=I(pt,"I. Bioluminescence, Shimmer & Cloak",!0);ut(Zt,"Hidden World Neon Bioluminescence","biolumGlow",0,1),ut(Zt,"Thermal-Mirror Optical Cloak","thermalCloak",0,1),ut(Zt,"Stardust Glimmer & Opal Sheen","iridescentShimmer",0,1),ut(Zt,"Radiant Partly-Glowing Skin","radiantGlow",0,1),ut(Zt,"Underwing Rose & Ice Countershade","pastelTint",0,1),ut(Zt,"Orchid-Cyan Plasma Charge","plasmaGlow",0,1);const xt=I(pt,"II. Gaze, Ears & Expression",!1);ut(xt,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),ut(xt,"Curious Head-Tilt (Roll)","headRoll",-1,1),ut(xt,"Head Yaw (Swan-Neck Coupled)","headYaw",-1,1),ut(xt,"Head Pitch","headPitch",-1,1),ut(xt,"Eye Gaze Horizontal","eyeYaw",-1,1),ut(xt,"Eye Gaze Vertical","eyePitch",-1,1),ut(xt,"Affectionate Squint-Smile","squint",0,1),ut(xt,"Almond Eyelid Blink","blink",0,1),ut(xt,"Rounded Ear-Nubs Perk","earPerk",0,1),ut(xt,"Ear Asymmetry","earAsymmetry",-1,1),ut(xt,"Temple Cheek Nubs","cheekNubFlare",0,1);const Pt=I(pt,"III. Smile, Retractable Fangs & Tongue",!1);ut(Pt,"Jaw Open","jawOpen",0,1),ut(Pt,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),ut(Pt,"Pink Tongue Extend","tongueExtend",0,1),ut(Pt,"Tongue Curl","tongueCurl",-1,1);const Vt=document.createElement("button");Vt.className="action-btn secondary",Vt.textContent="Toggle Soft Gums vs. Strike Fangs";let $t=!1;Vt.addEventListener("click",()=>{$t=!$t,$t?s.setState({jawOpen:.68,teethExtension:1,pupilDilation:.1,squint:.36,earPerk:.14}):s.setState({jawOpen:.26,teethExtension:0,pupilDilation:.92,squint:.24,earPerk:.9}),De()}),Pt.appendChild(Vt);const Nt=I(pt,"IV. Scalloped Wings, Veil & Sail",!1);ut(Nt,"Coy Wing-Veil Drape","coyWingVeil",0,1),ut(Nt,"Wing Unfurl (Cape ↔ 7.80m Span)","wingUnfurl",0,1),ut(Nt,"Wing Flap Elevation","wingFlap",-1,1),ut(Nt,"Wing Forward/Dive Sweep","wingSweep",-1,1),ut(Nt,"Airfoil Camber","wingCamber",0,1),ut(Nt,"Pelvic Glide Flukes","pelvicFinFlare",0,1),ut(Nt,"Continuous Dorsal Sail Flex","dorsalSailFlex",0,1);const re=I(pt,"V. Symmetrical Heart-Tail Flukes",!1);St(re,"Sync Heart-Tail Lobes","syncHeartTailFlukes"),ut(re,"Right Heart-Lobe Fold","rightHeartFinFlare",-1,1,.01,!0),ut(re,"Left Heart-Lobe Fold","leftHeartFinFlare",-1,1,.01,!0),ut(re,"Tail Horizontal Sweep","tailYaw",-1,1),ut(re,"Tail Vertical Lift","tailPitch",-1,1),ut(re,"Feline Tail Curl","tailCurl",-1,1);const te=I(pt,"VI. Stance, 4-Paw IK & Flight Legs",!1);ut(te,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),ut(te,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),ut(te,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),ut(te,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),ut(te,"Swan Neck Arch","neckArch",-1,1),ut(te,"Neck Turn","neckYaw",-1,1),ut(te,"Spine Arch","spineArch",-1,1),ut(te,"Spine Twist","spineTwist",-1,1),St(te,"Living Idle (Purr & Natural Blinks)","subtleBreathing");const Ce=I(_t,"Toothless Moods & Expressions",!0),K=document.createElement("div");K.className="weather-grid";const Rt=[];kv.forEach((ht,Et)=>{const At=document.createElement("button");At.className=`weather-btn${Et===0?" active":""}`,At.innerHTML=`
      <span class="weather-btn-title">${ht.label}</span>
      <span class="weather-btn-sub">${ht.subtitle}</span>
    `,At.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),Q()),Rt.forEach(Xt=>Xt.classList.remove("active")),At.classList.add("active"),e.setState(ht.patch),De()}),Rt.push(At),K.appendChild(At)}),Ce.appendChild(K);const rt=(ht,Et,At,Xt,xe,Me=.01,be=!1)=>et(ht,Et,e.state,je=>e.setState(je),At,Xt,xe,Me,be),wt=(ht,Et,At)=>dt(ht,Et,e.state,Xt=>e.setState(Xt),At),Ut=I(_t,"I. Alpha Bioluminescence & Lightning",!0);rt(Ut,"Alpha Blue Plasma Glow","alphaGlow",0,1),rt(Ut,"Cavern Bioluminescent Markings","biolumGlow",0,1),rt(Ut,"Lightning-Cloak Mirror Arcs","lightningCloak",0,1);const Ct=I(_t,"II. Head, Ear-Plates & Emerald Eyes",!1);rt(Ct,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),rt(Ct,"Head Yaw (Cervical Coupled)","headYaw",-1,1),rt(Ct,"Head Pitch","headPitch",-1,1),rt(Ct,"Curious Head Roll","headRoll",-1,1),rt(Ct,"Eye Gaze Horizontal","eyeYaw",-1,1),rt(Ct,"Eye Gaze Vertical","eyePitch",-1,1),rt(Ct,"Palpebral Eyelid Blink","blink",0,1),rt(Ct,"Focus Squint","squint",0,1),rt(Ct,"Primary Ear-Plates Perk","earPerk",0,1),rt(Ct,"Ear-Plate Asymmetry","earAsymmetry",-1,1),rt(Ct,"Secondary Cheek Nubs","cheekNubFlare",0,1);const ne=I(_t,"III. Jaw, Retractable Teeth & Tongue",!1);rt(ne,"Jaw Open","jawOpen",0,1),rt(ne,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),rt(ne,"Tongue Extend","tongueExtend",0,1),rt(ne,"Tongue Curl","tongueCurl",-1,1);const Pe=document.createElement("button");Pe.className="action-btn secondary",Pe.textContent='Toggle "Toothless" Gums vs. Fangs';let We=!1;Pe.addEventListener("click",()=>{We=!We,We?e.setState({jawOpen:.72,teethExtension:1,pupilDilation:.14,squint:.32}):e.setState({jawOpen:.36,teethExtension:0,pupilDilation:.85,squint:0}),De()}),ne.appendChild(Pe);const ge=I(_t,"IV. Wings, Fins & Flush V-Spines",!1);rt(ge,"Wing Unfurl (Cape ↔ 8.56m Span)","wingUnfurl",0,1),rt(ge,"Wing Flap Elevation","wingFlap",-1,1),rt(ge,"Wing Forward/Dive Sweep","wingSweep",-1,1),rt(ge,"Phalangeal Airfoil Camber","wingCamber",0,1),rt(ge,"Pelvic 3-Spar Glide Fins","pelvicFinFlare",0,1),rt(ge,"Dorsal V-Spine Split","dorsalSpineSplit",0,1);const sn=I(_t,"V. Prosthetic Tail & Mechanics",!1);wt(sn,"Auto-Sync Left Prosthetic Linkage","autoSyncProstheticTail"),rt(sn,"Left Prosthetic Fin Fold","leftProstheticFinFlare",-1,1,.01,!0),rt(sn,"Right Biological Fin Fold","rightTailFinFlare",-1,1,.01,!0),rt(sn,"Tail Horizontal Sweep","tailYaw",-1,1),rt(sn,"Tail Vertical Lift","tailPitch",-1,1),rt(sn,"Distal Tail Whip Curl","tailCurl",-1,1);const Xe=I(_t,"VI. Stance, 4-Paw IK & Flight Legs",!1);rt(Xe,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),rt(Xe,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),rt(Xe,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),rt(Xe,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),rt(Xe,"Neck Arch","neckArch",-1,1),rt(Xe,"Neck Turn","neckYaw",-1,1),rt(Xe,"Spine Arch","spineArch",-1,1),rt(Xe,"Spine Twist","spineTwist",-1,1),wt(Xe,"Living Idle (Breath, Blinks & Twitches)","subtleBreathing");const mt=I(It,"Archipelago, Sky & North Sea",!0),Tt=document.createElement("div");Tt.className="control-label-line";const Wt=Ms[a.initialWeatherPreset]??Ms["golden-hour"];Tt.innerHTML=`<span>Coastal Atmosphere</span><span class="control-val" id="weather-preset-desc">${Wt.subtitle}</span>`,mt.appendChild(Tt);const he=Tt.querySelector("#weather-preset-desc"),ue=document.createElement("div");ue.className="weather-grid";const jt=[],Jt={...Js},se=[],ve=[],Ye=document.createElement("div");Ye.className="control-row",Ye.innerHTML=`
    <div class="control-label-line">
      <span>Sun / Moon Elevation</span>
      <span class="control-val" id="elev-val">${Wt.sunElevationDeg.toFixed(1)}&deg;</span>
    </div>
    <input type="range" id="elev-slider" min="2" max="55" step="0.5" value="${Wt.sunElevationDeg}" />
  `;const $e=Ye.querySelector("#elev-slider"),on=Ye.querySelector("#elev-val");En($e),$e.addEventListener("input",()=>{const ht=parseFloat($e.value);on.textContent=`${ht.toFixed(1)}°`,En($e),a.onSunElevationChange(ht)});const qe=document.createElement("div");qe.className="control-row";const ln=ht=>Math.min(1,Math.max(0,(ht-6e-4)/.0044)),Ge=ht=>6e-4+ht*.0044,Le=ln(Wt.mistDensity);qe.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Mist &amp; Horizon Veil</span>
      <span class="control-val" id="mist-val">${Le.toFixed(2)}</span>
    </div>
    <input type="range" id="mist-slider" min="0" max="1" step="0.01" value="${Le.toFixed(2)}" />
  `;const en=qe.querySelector("#mist-slider"),N=qe.querySelector("#mist-val");En(en),en.addEventListener("input",()=>{const ht=parseFloat(en.value);N.textContent=ht.toFixed(2),En(en),a.onMistDensityChange(Ge(ht))});let J=null;const lt=ht=>{const Et=Ms[ht];if(!Et)return;jt.forEach(({id:xe,btn:Me})=>Me.classList.toggle("active",xe===ht)),he.textContent=Et.subtitle,$e.value=String(Et.sunElevationDeg),on.textContent=`${Et.sunElevationDeg.toFixed(1)}°`,En($e);const At=ln(Et.mistDensity);en.value=At.toFixed(2),N.textContent=At.toFixed(2),En(en),a.onSelectWeatherPreset(Et.id);let Xt=null;Et.id==="stormy-squall"?Xt={idx:3,desc:"Storm Gale",params:{waveAmplitude:2.15,waveSpeed:1.85,seaChoppiness:.96}}:Et.id==="starlit-night"||Et.id==="dawn-dusk"?Xt={idx:0,desc:"Calm Fjord",params:{waveAmplitude:.34,waveSpeed:.72,seaChoppiness:.24}}:Xt={idx:1,desc:"Nordic Swell",params:{...Js}},Xt&&(ve.forEach((xe,Me)=>xe.classList.toggle("active",Me===Xt.idx)),J&&(J.textContent=Xt.desc),Object.assign(Jt,Xt.params),se.forEach(xe=>xe()),a.onOceanParamsChange(Xt.params))};Object.values(Ms).forEach(ht=>{const Et=document.createElement("button");Et.className=`weather-btn${ht.id===a.initialWeatherPreset?" active":""}`,Et.innerHTML=`
      <span class="weather-btn-title">${ht.label}</span>
      <span class="weather-btn-sub">${ht.subtitle}</span>
    `,Et.addEventListener("click",()=>{ct.forEach(At=>At.classList.remove("active")),lt(ht.id)}),jt.push({id:ht.id,btn:Et}),ue.appendChild(Et)}),mt.appendChild(ue),mt.appendChild(Ye),mt.appendChild(qe);const ct=[];[{label:"Golden Dusk",toast:"Scene Moment — Golden Dusk Courtship",weather:"golden-hour",lfPatch:{biolumGlow:.12,thermalCloak:0,iridescentShimmer:.68,radiantGlow:.3,plasmaGlow:0},nfPatch:{alphaGlow:0,biolumGlow:.08,lightningCloak:0}},{label:"Biolum Night",toast:"Scene Moment — Hidden World Bioluminescence",weather:"starlit-night",lfPatch:{biolumGlow:.96,thermalCloak:0,iridescentShimmer:.85,radiantGlow:.72,plasmaGlow:.58},nfPatch:{alphaGlow:.92,biolumGlow:.95,lightningCloak:.24}},{label:"Mirror Cloak",toast:"Scene Moment — Light Fury Optical Cloak",weather:"dawn-dusk",lfPatch:{thermalCloak:.88,iridescentShimmer:.96,biolumGlow:.42,plasmaGlow:.32},nfPatch:{alphaGlow:.18,biolumGlow:.22,lightningCloak:0}},{label:"Storm Gale",toast:"Scene Moment — North Sea Lightning Squall",weather:"stormy-squall",lfPatch:{biolumGlow:.54,thermalCloak:0,plasmaGlow:.65,wingUnfurl:.58},nfPatch:{alphaGlow:.86,biolumGlow:.78,lightningCloak:.88,wingUnfurl:.62}}].forEach((ht,Et)=>{const At=document.createElement("button");At.className=`moment-chip${Et===0?" active":""}`,At.textContent=ht.label,At.addEventListener("click",()=>{ct.forEach((Xt,xe)=>Xt.classList.toggle("active",xe===Et)),lt(ht.weather),s.setState(ht.lfPatch),e.setState(ht.nfPatch),De(),v(ht.toast)}),ct.push(At),U.appendChild(At)});const bt=document.createElement("div");bt.className="control-label-line",bt.style.marginTop="11px",bt.innerHTML='<span>Irregular North Sea Swells</span><span class="control-val" id="sea-preset-desc">Nordic Swell</span>',mt.appendChild(bt);const Dt=bt.querySelector("#sea-preset-desc");J=Dt;const Ot=document.createElement("div");Ot.className="segmented-row";const Ht=[{label:"Quiet",desc:"Glassy Fjord",params:{waveAmplitude:.14,waveSpeed:.5,seaChoppiness:.06}},{label:"Swell",desc:"Nordic Swell",params:{...Js}},{label:"Rough",desc:"Crossed Sea",params:{waveAmplitude:1.65,waveSpeed:1.45,seaChoppiness:.82}},{label:"Storm",desc:"Storm Gale",params:{waveAmplitude:2.3,waveSpeed:1.95,seaChoppiness:1}}];function Qt(ht,Et,At,Xt,xe=.01){const Me=Js[Et],be=document.createElement("div");be.className="control-row",be.title="Double-click slider to reset",be.innerHTML=`
      <div class="control-label-line">
        <span>${ht}</span>
        <span class="control-val">${Jt[Et].toFixed(2)}</span>
      </div>
      <input type="range" min="${At}" max="${Xt}" step="${xe}" value="${Jt[Et]}" />
    `;const je=be.querySelector(".control-val"),Ke=be.querySelector("input");En(Ke),se.push(()=>{Ke.value=String(Jt[Et]),je.textContent=Jt[Et].toFixed(2),En(Ke)}),Ke.addEventListener("input",()=>{const Hs=parseFloat(Ke.value);Jt[Et]=Hs,je.textContent=Hs.toFixed(2),En(Ke),ve.forEach(Ui=>Ui.classList.remove("active")),Dt.textContent="Custom Swell",a.onOceanParamsChange({[Et]:Hs})}),Ke.addEventListener("dblclick",()=>{Jt[Et]=Me,Ke.value=String(Me),je.textContent=Me.toFixed(2),En(Ke),a.onOceanParamsChange({[Et]:Me}),v(`Reset ${ht}`)}),mt.appendChild(be)}Ht.forEach((ht,Et)=>{const At=document.createElement("button");At.className=`seg-btn${Et===1?" active":""}`,At.textContent=ht.label,At.addEventListener("click",()=>{ve.forEach(Xt=>Xt.classList.remove("active")),At.classList.add("active"),Dt.textContent=ht.desc,Object.assign(Jt,ht.params),se.forEach(Xt=>Xt()),a.onOceanParamsChange(ht.params)}),ve.push(At),Ot.appendChild(At)}),mt.appendChild(Ot),Qt("Swell Group Height","waveAmplitude",.05,2.5,.01),Qt("Current & Swell Velocity","waveSpeed",.15,2.5,.01),Qt("Cross-Chop & Whitecap Foam","seaChoppiness",0,1,.01);const ee=document.createElement("div");ee.className="control-label-line",ee.style.marginTop="11px",ee.innerHTML='<span>Mesh Level-of-Detail</span><span class="control-val" id="lod-mode-label">LOD0 Hero</span>',mt.appendChild(ee);const Kt=ee.querySelector("#lod-mode-label"),we=document.createElement("div");we.className="segmented-row";const Ee=[{label:"LOD0",mode:"0",desc:"LOD0 Hero"},{label:"LOD1",mode:"1",desc:"LOD1 Mid"},{label:"LOD2",mode:"2",desc:"LOD2 Far"},{label:"Auto",mode:"auto",desc:"Auto Distance"}],Ze=[];Ee.forEach((ht,Et)=>{const At=document.createElement("button");At.className=`seg-btn${Et===0?" active":""}`,At.textContent=ht.label,At.addEventListener("click",()=>{if(Ze.forEach(Xt=>Xt.classList.remove("active")),At.classList.add("active"),Kt.textContent=ht.desc,ht.mode==="auto")t.autoLOD=!0,n.autoLOD=!0;else{const Xt=Number(ht.mode);t.autoLOD=!1,n.autoLOD=!1,t.setActiveLOD(Xt),n.setActiveLOD(Xt)}}),Ze.push(At),we.appendChild(At)}),mt.appendChild(we);const Ue=document.createElement("div");Ue.className="export-btn-grid";const _e=document.createElement("button");_e.className="action-btn",_e.textContent="Light Fury .GLB";const qt=document.createElement("button");qt.className="action-btn",qt.textContent="Toothless .GLB",Ue.appendChild(_e),Ue.appendChild(qt);const Oe=document.createElement("div");Oe.className="export-status";const Se=async ht=>{_e.disabled=!0,qt.disabled=!0,Oe.style.color="",Oe.textContent="Packaging binary .GLB asset…";try{const Et=ht==="light-fury"?await ix(n,n.activeLOD):await nx(t,t.activeLOD);Oe.textContent=`Saved ${Et.filename} (${Et.sizeMB.toFixed(2)} MB)`,v(`Exported ${Et.filename}`)}catch(Et){Oe.style.color="#f09898",Oe.textContent=`Export failed: ${Et.message}`}finally{_e.disabled=!1,qt.disabled=!1}};_e.addEventListener("click",()=>Se("light-fury")),qt.addEventListener("click",()=>Se("toothless")),mt.appendChild(Ue),mt.appendChild(Oe);function De(){for(const ht of z)ht()}return tt.querySelector("#btn-reset-pose").addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),Ft.forEach((ht,Et)=>ht.classList.toggle("active",Et===0)),Rt.forEach((ht,Et)=>ht.classList.toggle("active",Et===0)),ct.forEach((ht,Et)=>ht.classList.toggle("active",Et===0)),Q(),De(),v("Reset Twin Furies to Hero Perch")}),Q(),{updateTelemetry(ht,Et){M.innerHTML=`<strong>${Math.round(ht)}</strong> FPS`;const At=t.lodStats[Et].triangles+n.lodStats[Et].triangles;w.innerHTML=`<strong>LOD${Et}</strong> &middot; ${At.toLocaleString()} tris`},updateFlightUI:Q,syncControlsFromRig:De,showToast:v,triggerShutterFlash:m,clearActiveCameraBookmark(){ot.forEach(ht=>ht.classList.remove("active"))}}}async function ox(){const i=L_(),t=document.getElementById("canvas-container"),e=document.getElementById("hud-root");await i.advanceTo(14,"Initializing HDR WebGL2 post-processing pipeline…");const n=new l1({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=xh,n.toneMapping=al,n.toneMappingExposure=1.14,t.appendChild(n.domElement);const s=new la,o=new Nn(42,window.innerWidth/window.innerHeight,.12,9500);let a=na[0];o.position.copy(a.position);const r=new h1(o,n.domElement);r.target.copy(a.target),r.enableDamping=!0,r.dampingFactor=.065,r.rotateSpeed=.78,r.panSpeed=.85,r.zoomSpeed=.92,r.minDistance=.34,r.maxDistance=280,r.maxPolarAngle=Math.PI*.56,r.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},r.update();const l=new kn(window.innerWidth*n.getPixelRatio(),window.innerHeight*n.getPixelRatio(),{type:Kn,samples:4}),c=new C1(n,l);c.addPass(new P1(s,o));const h=new Fs(new zt(window.innerWidth,window.innerHeight),.26,.52,1.04);h.materialHighPassFilter.fragmentShader=`
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
  `,h.materialHighPassFilter.needsUpdate=!0,c.addPass(h);const u=new I1;u.material.fragmentShader=u.material.fragmentShader.replace("gl_FragColor = texture2D( tDiffuse, vUv );",`gl_FragColor = texture2D( tDiffuse, vUv );
     gl_FragColor.r = !(gl_FragColor.r >= 0.0) ? 0.0 : (!(gl_FragColor.r <= 65000.0) ? 32.0 : min(gl_FragColor.r, 32.0));
     gl_FragColor.g = !(gl_FragColor.g >= 0.0) ? 0.0 : (!(gl_FragColor.g <= 65000.0) ? 32.0 : min(gl_FragColor.g, 32.0));
     gl_FragColor.b = !(gl_FragColor.b >= 0.0) ? 0.0 : (!(gl_FragColor.b <= 65000.0) ? 32.0 : min(gl_FragColor.b, 32.0));
     gl_FragColor.a = 1.0;`),u.material.needsUpdate=!0,c.addPass(u),await i.advanceTo(34,"Sculpting Nordic archipelago ridges, sea-arches & North Sea swells…");const p="golden-hour",f=pv(n,s,p),g=Uv(f.sharedUniforms);s.add(g.group),await i.advanceTo(58,"Forging Night Fury armor scutes, flush dorsal spines & 117-bone rig…");const v=hv();v.rootGroup.position.copy(Wn.position),v.rootGroup.rotation.set(0,Wn.yaw,0),s.add(v.rootGroup),v.rootGroup.updateMatrixWorld(!0);const m=new Vv(v);await i.advanceTo(82,"Weaving Light Fury pearl luminescence, mirror cloak & 111-bone rig…");const d=R_();d.rootGroup.position.copy(Gn.position),d.rootGroup.rotation.set(0,Gn.yaw,0),s.add(d.rootGroup),d.rootGroup.updateMatrixWorld(!0);const M=new jv(d);await i.advanceTo(94,"Compiling shaders & calibrating twin courtship flight splines…");const w=new Zi(v,m,d,M);let _=null,A=1,b=!0,S=!1;r.addEventListener("start",()=>{_=null});const E=sx(e,v,m,d,M,w,{initialWeatherPreset:p,onSelectCameraBookmark(at){a=at,_={goalPos:at.position.clone(),goalTarget:at.target.clone()}},onFlightResetCamera(){_={goalPos:a.position.clone(),goalTarget:a.target.clone()}},onFlightSpeedChange(at){A=at},onToggleCursorGaze(at){b=at},onCaptureSnapshot(){S=!0},onSelectWeatherPreset(at){f.applyPreset(at,n,s)},onSunElevationChange(at){f.setSunElevation(at,n,s)},onMistDensityChange(at){f.setMistDensity(at)},onOceanParamsChange(at){g.ocean.setOceanParams(at)}}),y=new Set,x=new T,P=new T,C=new T,R=new T;window.addEventListener("keydown",at=>{const pt=document.activeElement?.tagName;pt==="INPUT"||pt==="TEXTAREA"||y.add(at.code)}),window.addEventListener("keyup",at=>{y.delete(at.code)}),window.addEventListener("blur",()=>{y.clear()});const L=new bp,D=new zt;n.domElement.addEventListener("dblclick",at=>{if(w.isPlaying)return;const pt=n.domElement.getBoundingClientRect();D.x=(at.clientX-pt.left)/pt.width*2-1,D.y=-((at.clientY-pt.top)/pt.height)*2+1,L.setFromCamera(D,o);const _t=[d.rootGroup,v.rootGroup,g.group],yt=L.intersectObjects(_t,!0).find(St=>St.distance<650&&!(St.object instanceof Qr)&&!St.object.userData?.excludeFromExport);if(!yt)return;const z=yt.point.clone();let I=!1,et=yt.object,dt="Coastal Landform";for(;et;){if(et===d.rootGroup){I=!0,dt="Light Fury";break}if(et===v.rootGroup){I=!0,dt="Toothless";break}if(et.name.startsWith("FaroeseHeadlandSeaArch")){dt="Headland Sea-Arch";break}if(et.name==="TabularFaroeseSeaStacks"){dt="Tabular Sea-Stack";break}if(et.name==="WestWaterfallDoubleIsland"){dt="Waterfall Double-Island";break}if(et.name==="StarboardCrescentLagoonAtoll"){dt="Crescent Lagoon";break}et=et.parent}const vt=o.position.clone().sub(z).normalize(),ft=o.position.distanceTo(z),Ft=I?$.clamp(ft*.6,2.6,7.5):$.clamp(ft*.55,10,68),ut=z.clone().addScaledVector(vt,Ft);ut.y=Math.max(ut.y,Si(ut.x,ut.z)+1.2,-9.2),E.clearActiveCameraBookmark(),_={goalPos:ut,goalTarget:z},E.showToast(`Focused on ${dt}`)});const B=new zt(0,0);let k=-10,F=!1,H=0,V=0,Y=0;window.addEventListener("pointerdown",at=>{at.target===n.domElement&&(F=!0)}),window.addEventListener("pointerup",()=>{F=!1}),window.addEventListener("pointermove",at=>{F||(B.x=at.clientX/Math.max(1,window.innerWidth)*2-1,B.y=-(at.clientY/Math.max(1,window.innerHeight)*2+1),k=performance.now()*.001)});const j=v.rig.boneMap.get("head"),W=v.rig.boneMap.get("neck_03"),X=v.rig.boneMap.get("eye_L"),O=v.rig.boneMap.get("eye_R"),it=d.rig.boneMap.get("head"),nt=d.rig.boneMap.get("neck_03"),Z=d.rig.boneMap.get("eye_L"),Q=d.rig.boneMap.get("eye_R");window.addEventListener("resize",()=>{const at=window.innerWidth,pt=window.innerHeight;o.aspect=at/pt,o.updateProjectionMatrix(),n.setSize(at,pt),c.setSize(at,pt),h.resolution.set(at,pt)}),m.update(.016),M.update(.016),f.update(0,new T(0,1.15,.35),o.position),g.update(0),c.render();const G=new Kh;let ot=0,gt=0,tt=60,U=!1;function Mt(){requestAnimationFrame(Mt);const at=Math.min(G.getDelta(),.05),pt=G.elapsedTime,_t=w.isPlaying,It=w.update(at*A,o,r.target);if(r.maxPolarAngle=It.isAirborne?Math.PI*.84:Math.PI*.56,U&&!w.isPlaying&&(_={goalPos:a.position.clone(),goalTarget:a.target.clone()},E.updateFlightUI(),E.syncControlsFromRig()),U=w.isPlaying,_t&&E.updateFlightUI(),R.set(0,0,0),!w.isPlaying||!w.followCamera){const ut=(y.has("KeyW")||y.has("ArrowUp")?1:0)-(y.has("KeyS")||y.has("ArrowDown")?1:0),St=(y.has("KeyD")||y.has("ArrowRight")?1:0)-(y.has("KeyA")||y.has("ArrowLeft")?1:0),Zt=(y.has("KeyE")?1:0)-(y.has("KeyQ")?1:0);if(ut!==0||St!==0||Zt!==0){_=null,o.getWorldDirection(P),C.crossVectors(P,o.up).normalize(),R.addScaledVector(P,ut).addScaledVector(C,St),R.y+=Zt*.85,R.lengthSq()>1e-5&&R.normalize();const xt=o.position.distanceTo(r.target),Pt=$.clamp(xt*.85,6.5,34),Vt=y.has("ShiftLeft")||y.has("ShiftRight")?2.4:1;R.multiplyScalar(Pt*Vt)}}if(x.lerp(R,1-Math.exp(-9*at)),x.lengthSq()>1e-4&&(o.position.addScaledVector(x,at),r.target.addScaledVector(x,at)),_&&!w.isPlaying){const ut=1-Math.exp(-5.5*at);o.position.lerp(_.goalPos,ut),r.target.lerp(_.goalTarget,ut),o.position.distanceTo(_.goalPos)<.012&&r.target.distanceTo(_.goalTarget)<.012&&(_=null)}r.update();const yt=Si(o.position.x,o.position.z),z=Math.max(-9.8,yt+.55);o.position.y<z&&(o.position.y=z),m.update(at),M.update(at);const et=performance.now()*.001-k<4&&!F,dt=o.position.distanceTo(new T(0,1.1,0))<26,vt=b&&!w.isPlaying&&et&&dt?1:0;if(Y+=(vt-Y)*(1-Math.exp(-4.2*at)),H+=(B.x-H)*(1-Math.exp(-5.5*at)),V+=(B.y-V)*(1-Math.exp(-5.5*at)),Y>.002){const ut=H*.22*Y,St=-V*.14*Y,Zt=-H*.07*Y,xt=H*.14*Y,Pt=-V*.1*Y;j&&(j.rotation.y+=ut*.72,j.rotation.x+=St*.75,j.rotation.z+=Zt),W&&(W.rotation.y+=ut*.32,W.rotation.x+=St*.25),X&&O&&(X.rotation.y+=xt,O.rotation.y+=xt,X.rotation.x+=Pt,O.rotation.x+=Pt),it&&(it.rotation.y+=ut*.78,it.rotation.x+=St*.78,it.rotation.z+=Zt*1.15),nt&&(nt.rotation.y+=ut*.36,nt.rotation.x+=St*.28),Z&&Q&&(Z.rotation.y+=xt,Q.rotation.y+=xt,Z.rotation.x+=Pt,Q.rotation.x+=Pt)}const ft=o.position.distanceTo(It.worldFocus),Ft=v.updateAutoLOD(ft);if(d.updateAutoLOD(ft),f.update(pt,It.worldFocus,o.position),g.update(pt),ot+=at,gt++,ot>=.4){const ut=gt/ot;tt=tt*.65+ut*.35,E.updateTelemetry(tt,Ft),ot=0,gt=0}if(c.render(),S){S=!1;try{const ut=n.domElement.toDataURL("image/png"),St=document.createElement("a"),Zt=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");St.download=`twin-furies-atelier-${Zt}.png`,St.href=ut,St.click(),E.triggerShutterFlash(),E.showToast("Saved UI-Free HD Snapshot (.PNG)")}catch{E.showToast("Snapshot unavailable on this device")}}}Mt(),await i.completeAndDissolve(e)}ox();
