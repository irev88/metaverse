(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="174",xs={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eu=0,Pl=1,Tu=2,fh=1,mh=2,ti=3,Ei=0,vn=1,ln=2,si=0,Ms=1,ta=2,Rl=3,Ll=4,Cu=5,Vi=100,Pu=101,Ru=102,Lu=103,Iu=104,Du=200,Fu=201,Uu=202,Nu=203,dr=204,pr=205,ku=206,Bu=207,zu=208,Ou=209,Hu=210,Vu=211,Wu=212,Gu=213,Xu=214,fr=0,mr=1,gr=2,oi=3,_r=4,vr=5,xr=6,Mr=7,gh=0,Yu=1,$u=2,yi=0,_h=1,vh=2,xh=3,sl=4,Mh=5,wh=6,yh=7,Il="attached",qu="detached",bh=300,Es=301,Ts=302,wr=303,yr=304,fa=306,qn=1e3,xi=1001,ea=1002,wn=1003,Sh=1004,qs=1005,Vn=1006,Yo=1007,Mi=1008,ci=1009,Ah=1010,Eh=1011,no=1012,ol=1013,$i=1014,Wn=1015,$n=1016,al=1017,rl=1018,Cs=1020,Th=35902,Ch=1021,Ph=1022,Tn=1023,Rh=1024,Lh=1025,ws=1026,Ps=1027,ll=1028,cl=1029,Ih=1030,hl=1031,ul=1033,$o=33776,qo=33777,jo=33778,Zo=33779,br=35840,Sr=35841,Ar=35842,Er=35843,Tr=36196,Cr=37492,Pr=37496,Rr=37808,Lr=37809,Ir=37810,Dr=37811,Fr=37812,Ur=37813,Nr=37814,kr=37815,Br=37816,zr=37817,Or=37818,Hr=37819,Vr=37820,Wr=37821,Ko=36492,Gr=36494,Xr=36495,Dh=36283,Yr=36284,$r=36285,qr=36286,ju=2300,Zu=2301,Ku=3200,Qu=3201,Fh=0,Ju=1,In="",rn="srgb",Rs="srgb-linear",na="linear",Le="srgb",Qi=7680,Dl=519,td=512,ed=513,nd=514,Uh=515,id=516,sd=517,od=518,ad=519,Fl=35044,Ul="300 es",ii=2e3,ia=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const to=Math.PI/180,io=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function dl(i,t){return(i%t+t)%t}function rd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ld(i,t,e){return i!==t?(e-i)/(t-i):0}function eo(i,t,e){return(1-e)*i+e*t}function cd(i,t,e,n){return eo(i,t,1-Math.exp(-e*n))}function hd(i,t=1){return t-Math.abs(dl(i,t*2)-t)}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fd(i,t){return i+Math.random()*(t-i)}function md(i){return i*(.5-Math.random())}function gd(i){i!==void 0&&(Nl=i);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _d(i){return i*to}function vd(i){return i*io}function xd(i){return(i&i-1)===0&&i!==0}function Md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yd(i,t,e,n,s){const o=Math.cos,a=Math.sin,r=o(e/2),l=a(e/2),c=o((t+n)/2),h=a((t+n)/2),u=o((t-n)/2),d=a((t-n)/2),f=o((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(r*h,l*u,l*d,r*c);break;case"YZY":i.set(l*d,r*h,l*u,r*c);break;case"ZXZ":i.set(l*u,l*d,r*h,r*c);break;case"XZX":i.set(r*h,l*g,l*f,r*c);break;case"YXY":i.set(l*f,r*h,l*g,r*c);break;case"ZYZ":i.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $={DEG2RAD:to,RAD2DEG:io,generateUUID:ji,clamp:de,euclideanModulo:dl,mapLinear:rd,inverseLerp:ld,lerp:eo,damp:cd,pingpong:hd,smoothstep:ud,smootherstep:dd,randInt:pd,randFloat:fd,randFloatSpread:md,seededRandom:gd,degToRad:_d,radToDeg:vd,isPowerOfTwo:xd,ceilPowerOfTwo:Md,floorPowerOfTwo:wd,setQuaternionFromProperEuler:yd,normalize:fn,denormalize:ms};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,o,a,r,l,c){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c)}set(t,e,n,s,o,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],w=s[4],_=s[7],A=s[2],b=s[5],S=s[8];return o[0]=a*v+r*M+l*A,o[3]=a*m+r*w+l*b,o[6]=a*p+r*_+l*S,o[1]=c*v+h*M+u*A,o[4]=c*m+h*w+u*b,o[7]=c*p+h*_+u*S,o[2]=d*v+f*M+g*A,o[5]=d*m+f*w+g*b,o[8]=d*p+f*_+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*o*h+n*r*l+s*o*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,d=r*l-h*o,f=c*o-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(r*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-r*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-s*c,s*l,-s*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new ue;function Nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bd(){const i=sa("canvas");return i.style.display="block",i}const kl={};function Oi(i){i in kl||(kl[i]=!0,console.warn(i))}function Sd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Ad(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ed(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bl=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){const i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===Le&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Le&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?na:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,a){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:t,whitePoint:n,transfer:na,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:Le,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const Ae=Td();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ji;class Cd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=sa("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=ai(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pd=0;class ma{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(Sa(s[a].image)):o.push(Sa(s[a]))}else o=Sa(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class hn extends qi{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,n=xi,s=xi,o=Vn,a=Mi,r=Tn,l=ci,c=hn.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ji(),this.name="",this.source=new ma(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qn:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qn:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=bh;hn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,e=0,n=0,s=1){ke.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(f+1)/2,A=(p+1)/2,b=(h+d)/4,S=(u+v)/4,E=(g+m)/4;return w>_&&w>A?w<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(w),s=b/n,o=S/n):_>A?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=b/s,o=E/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=S/o,s=E/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new hn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ma(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Ld{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kh extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Id extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class je{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,r){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[a+0],f=o[a+1],g=o[a+2],v=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-r;const p=l*d+c*f+h*g+u*v,M=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const A=Math.sqrt(w),b=Math.atan2(A,p*M);m=Math.sin(m*b)/A,r=Math.sin(r*b)/A}const _=r*M;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-r){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,a){const r=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[a],d=o[a+1],f=o[a+2],g=o[a+3];return t[e]=r*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-r*f,t[e+2]=c*g+h*f+r*d-l*u,t[e+3]=h*g-r*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(s/2),u=r(o/2),d=l(n/2),f=l(s/2),g=l(o/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(a-s)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(o+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(o-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(a-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+s*c-o*l,this._y=s*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-s*r,this._w=a*h-n*r-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+s*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*s-r*n),h=2*(r*e-o*s),u=2*(o*n-a*e);return this.x=e+l*c+a*u-r*h,this.y=n+l*h+r*c-o*u,this.z=s+l*u+o*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=s*l-o*r,this.y=o*a-n*l,this.z=n*r-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new T,Ol=new je;class Ti{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(o,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),_o.subVectors(this.max,Hs),ts.subVectors(t.a,Hs),es.subVectors(t.b,Hs),ns.subVectors(t.c,Hs),ui.subVectors(es,ts),di.subVectors(ns,es),Ii.subVectors(ts,ns);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ii.z,Ii.y,ui.z,0,-ui.x,di.z,0,-di.x,Ii.z,0,-Ii.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ii.y,Ii.x,0];return!Ea(e,ts,es,ns,_o)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,ts,es,ns,_o))?!1:(vo.crossVectors(ui,di),e=[vo.x,vo.y,vo.z],Ea(e,ts,es,ns,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new T,new T,new T,new T,new T,new T,new T,new T],Nn=new T,go=new Ti,ts=new T,es=new T,ns=new T,ui=new T,di=new T,Ii=new T,Hs=new T,_o=new T,vo=new T,Di=new T;function Ea(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){Di.fromArray(i,o);const r=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Dd=new Ti,Vs=new T,Ta=new T;class Ci{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Ta)),this.expandByPoint(Vs.copy(t.center).sub(Ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new T,Ca=new T,xo=new T,pi=new T,Pa=new T,Mo=new T,Ra=new T;class ro{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ca.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Ca);const o=t.distanceTo(e)*.5,a=-this.direction.dot(xo),r=pi.dot(this.direction),l=-pi.dot(xo),c=pi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-r,d=a*r-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*o+r)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(a*o+r)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=a>0?-o:o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ca).addScaledVector(xo,d),f}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,o){Pa.subVectors(e,t),Mo.subVectors(n,t),Ra.crossVectors(Pa,Mo);let a=this.direction.dot(Ra),r;if(a>0){if(s)return null;r=1}else if(a<0)r=-1,a=-a;else return null;pi.subVectors(this.origin,t);const l=r*this.direction.dot(Mo.crossVectors(pi,Mo));if(l<0)return null;const c=r*this.direction.dot(Pa.cross(pi));if(c<0||l+c>a)return null;const h=-r*pi.dot(Ra);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,o,a,r,l,c,h,u,d,f,g,v,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,o,a,r,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),o=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-r*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*r,e[4]=g*r-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=f*r-g,e[6]=v+d*r,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*r,e[4]=-a*u,e[8]=g+f*r,e[1]=f+g*r,e[5]=a*h,e[9]=v-d*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=r*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Ud)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),fi.crossVectors(n,Sn),fi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),fi.crossVectors(n,Sn)),fi.normalize(),wo.crossVectors(Sn,fi),s[0]=fi.x,s[4]=wo.x,s[8]=Sn.x,s[1]=fi.y,s[5]=wo.y,s[9]=Sn.y,s[2]=fi.z,s[6]=wo.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],w=n[7],_=n[11],A=n[15],b=s[0],S=s[4],E=s[8],y=s[12],x=s[1],P=s[5],C=s[9],R=s[13],L=s[2],D=s[6],k=s[10],B=s[14],F=s[3],H=s[7],V=s[11],Y=s[15];return o[0]=a*b+r*x+l*L+c*F,o[4]=a*S+r*P+l*D+c*H,o[8]=a*E+r*C+l*k+c*V,o[12]=a*y+r*R+l*B+c*Y,o[1]=h*b+u*x+d*L+f*F,o[5]=h*S+u*P+d*D+f*H,o[9]=h*E+u*C+d*k+f*V,o[13]=h*y+u*R+d*B+f*Y,o[2]=g*b+v*x+m*L+p*F,o[6]=g*S+v*P+m*D+p*H,o[10]=g*E+v*C+m*k+p*V,o[14]=g*y+v*R+m*B+p*Y,o[3]=M*b+w*x+_*L+A*F,o[7]=M*S+w*P+_*D+A*H,o[11]=M*E+w*C+_*k+A*V,o[15]=M*y+w*R+_*B+A*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+o*l*u-s*c*u-o*r*d+n*c*d+s*r*f-n*l*f)+v*(+e*l*f-e*c*d+o*a*d-s*a*f+s*c*h-o*l*h)+m*(+e*c*u-e*r*f-o*a*u+n*a*f+o*r*h-n*c*h)+p*(-s*r*h-e*l*u+e*r*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=u*m*c-v*d*c+v*l*f-r*m*f-u*l*p+r*d*p,w=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,_=h*v*c-g*u*c+g*r*f-a*v*f-h*r*p+a*u*p,A=g*u*l-h*v*l-g*r*d+a*v*d+h*r*m-a*u*m,b=e*M+n*w+s*_+o*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return t[0]=M*S,t[1]=(v*d*o-u*m*o-v*s*f+n*m*f+u*s*p-n*d*p)*S,t[2]=(r*m*o-v*l*o+v*s*c-n*m*c-r*s*p+n*l*p)*S,t[3]=(u*l*o-r*d*o-u*s*c+n*d*c+r*s*f-n*l*f)*S,t[4]=w*S,t[5]=(h*m*o-g*d*o+g*s*f-e*m*f-h*s*p+e*d*p)*S,t[6]=(g*l*o-a*m*o-g*s*c+e*m*c+a*s*p-e*l*p)*S,t[7]=(a*d*o-h*l*o+h*s*c-e*d*c-a*s*f+e*l*f)*S,t[8]=_*S,t[9]=(g*u*o-h*v*o-g*n*f+e*v*f+h*n*p-e*u*p)*S,t[10]=(a*v*o-g*r*o+g*n*c-e*v*c-a*n*p+e*r*p)*S,t[11]=(h*r*o-a*u*o-h*n*c+e*u*c+a*n*f-e*r*f)*S,t[12]=A*S,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*S,t[14]=(g*r*s-a*v*s-g*n*l+e*v*l+a*n*m-e*r*m)*S,t[15]=(a*u*s-h*r*s+h*n*l-e*u*l-a*n*d+e*r*d)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+n,h*l-s*a,0,c*l-s*r,h*l+s*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,h=a+a,u=r+r,d=o*c,f=o*h,g=o*u,v=a*h,m=a*u,p=r*u,M=l*c,w=l*h,_=l*u,A=n.x,b=n.y,S=n.z;return s[0]=(1-(v+p))*A,s[1]=(f+_)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+w)*S,s[9]=(m-M)*S,s[10]=(1-(d+v))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=is.set(s[0],s[1],s[2]).length();const a=is.set(s[4],s[5],s[6]).length(),r=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],kn.copy(this);const c=1/o,h=1/a,u=1/r;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,s,o,a,r=ii){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(r===ii)f=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===ia)f=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,a,r=ii){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-o),d=(e+t)*c,f=(n+s)*h;let g,v;if(r===ii)g=(a+o)*u,v=-2*u;else if(r===ia)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const is=new T,kn=new ee,Fd=new T(0,0,0),Ud=new T(1,1,1),fi=new T,wo=new T,Sn=new T,Hl=new ee,Vl=new je;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],a=s[4],r=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(de(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nd=0;const Wl=new T,ss=new je,Kn=new ee,yo=new T,Ws=new T,kd=new T,Bd=new je,Gl=new T(1,0,0),Xl=new T(0,1,0),Yl=new T(0,0,1),$l={type:"added"},zd={type:"removed"},os={type:"childadded",child:null},La={type:"childremoved",child:null};class Ke extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new T,e=new yn,n=new je,s=new T(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new ue}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ws,yo,this.up):Kn.lookAt(yo,Ws,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Kn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));s.material=r}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ke.DEFAULT_UP=new T(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new T,Qn=new T,Ia=new T,Jn=new T,as=new T,rs=new T,ql=new T,Da=new T,Fa=new T,Ua=new T,Na=new ke,ka=new ke,Ba=new ke;class Hn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Bn.subVectors(s,e),Qn.subVectors(n,e),Ia.subVectors(t,e);const a=Bn.dot(Bn),r=Bn.dot(Qn),l=Bn.dot(Ia),c=Qn.dot(Qn),h=Qn.dot(Ia),u=a*c-r*r;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-r*h)*d,g=(a*h-r*l)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,o,a,r,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(r,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,o,a){return Na.setScalar(0),ka.setScalar(0),Ba.setScalar(0),Na.fromBufferAttribute(t,e),ka.fromBufferAttribute(t,n),Ba.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Na,o.x),a.addScaledVector(ka,o.y),a.addScaledVector(Ba,o.z),a}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),Qn.subVectors(t,e),Bn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Bn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let a,r;as.subVectors(s,n),rs.subVectors(o,n),Da.subVectors(t,n);const l=as.dot(Da),c=rs.dot(Da);if(l<=0&&c<=0)return e.copy(n);Fa.subVectors(t,s);const h=as.dot(Fa),u=rs.dot(Fa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(as,a);Ua.subVectors(t,o);const f=as.dot(Ua),g=rs.dot(Ua);if(g>=0&&f<=g)return e.copy(o);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(rs,r);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ql.subVectors(o,s),r=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(ql,r);const p=1/(m+v+d);return a=v*p,r=d*p,e.copy(n).addScaledVector(as,a).addScaledVector(rs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=dl(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=za(a,o,t+1/3),this.g=za(a,o,t),this.b=za(a,o,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Ae.fromWorkingColorSpace(dn.copy(this),t),Math.round(de(dn.r*255,0,255))*65536+Math.round(de(dn.g*255,0,255))*256+Math.round(de(dn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,s=dn.g,o=dn.b,a=Math.max(n,s,o),r=Math.min(n,s,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=rn){Ae.fromWorkingColorSpace(dn.copy(this),t);const e=dn.r,n=dn.g,s=dn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(bo);const n=eo(mi.h,bo.h,e),s=eo(mi.s,bo.s,e),o=eo(mi.l,bo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Dt;Dt.NAMES=Bh;let Od=0;class Ns extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Ms,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=pr,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==pr&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class so extends Ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new T,So=new Bt;let Hd=0;class q{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array),o=fn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}}class fe extends q{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zh extends q{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends q{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vd=0;const Rn=new ee,Oa=new Ke,ls=new T,An=new Ti,Gs=new Ti,on=new T;class Xt extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?zh:fe)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ue().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];An.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Gs.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(An.min,Gs.min),An.expandByPoint(on),on.addVectors(An.max,Gs.max),An.expandByPoint(on)):(An.expandByPoint(Gs.min),An.expandByPoint(Gs.max))}An.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)on.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(on));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)on.fromBufferAttribute(r,c),l&&(ls.fromBufferAttribute(t,c),on.add(ls)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new q(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let E=0;E<n.count;E++)r[E]=new T,l[E]=new T;const c=new T,h=new T,u=new T,d=new Bt,f=new Bt,g=new Bt,v=new T,m=new T;function p(E,y,x){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),d.fromBufferAttribute(o,E),f.fromBufferAttribute(o,y),g.fromBufferAttribute(o,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),r[E].add(v),r[y].add(v),r[x].add(v),l[E].add(m),l[y].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let E=0,y=M.length;E<y;++E){const x=M[E],P=x.start,C=x.count;for(let R=P,L=P+C;R<L;R+=3)p(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const w=new T,_=new T,A=new T,b=new T;function S(E){A.fromBufferAttribute(s,E),b.copy(A);const y=r[E];w.copy(y),w.sub(A.multiplyScalar(A.dot(y))).normalize(),_.crossVectors(b,y);const P=_.dot(l[E])<0?-1:1;a.setXYZW(E,w.x,w.y,w.z,P)}for(let E=0,y=M.length;E<y;++E){const x=M[E],P=x.start,C=x.count;for(let R=P,L=P+C;R<L;R+=3)S(t.getX(R+0)),S(t.getX(R+1)),S(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new q(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,o=new T,a=new T,r=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new q(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xt,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new ee,Fi=new ro,Ao=new Ci,Zl=new T,Eo=new T,To=new T,Co=new T,Ha=new T,Po=new T,Kl=new T,Ro=new T;class Oe extends Ke{constructor(t=new Xt,e=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(o&&r){Po.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],u=o[l];h!==0&&(Ha.fromBufferAttribute(u,t),a?Po.addScaledVector(Ha,h):Po.addScaledVector(Ha.sub(e),h))}e.add(Po)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(o),Fi.copy(t.ray).recast(t.near),!(Ao.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Ao,Zl)===null||Fi.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(jl.copy(o).invert(),Fi.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,A=w;_<A;_+=3){const b=r.getX(_),S=r.getX(_+1),E=r.getX(_+2);s=Lo(this,p,t,n,c,h,u,b,S,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=r.getX(m),w=r.getX(m+1),_=r.getX(m+2);s=Lo(this,a,t,n,c,h,u,M,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,A=w;_<A;_+=3){const b=_,S=_+1,E=_+2;s=Lo(this,p,t,n,c,h,u,b,S,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,w=m+1,_=m+2;s=Lo(this,a,t,n,c,h,u,M,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Wd(i,t,e,n,s,o,a,r){let l;if(t.side===vn?l=n.intersectTriangle(a,o,s,!0,r):l=n.intersectTriangle(s,o,a,t.side===Ei,r),l===null)return null;Ro.copy(r),Ro.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ro);return c<e.near||c>e.far?null:{distance:c,point:Ro.clone(),object:i}}function Lo(i,t,e,n,s,o,a,r,l,c){i.getVertexPosition(r,Eo),i.getVertexPosition(l,To),i.getVertexPosition(c,Co);const h=Wd(i,t,e,n,Eo,To,Co,Kl);if(h){const u=new T;Hn.getBarycoord(Kl,Eo,To,Co,u),s&&(h.uv=Hn.getInterpolatedAttribute(s,r,l,c,u,new Bt)),o&&(h.uv1=Hn.getInterpolatedAttribute(o,r,l,c,u,new Bt)),a&&(h.normal=Hn.getInterpolatedAttribute(a,r,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new T,materialIndex:0};Hn.getNormal(Eo,To,Co,d.normal),h.face=d,h.barycoord=u}return h}class lo extends Xt{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(v,m,p,M,w,_,A,b,S,E,y){const x=_/S,P=A/E,C=_/2,R=A/2,L=b/2,D=S+1,k=E+1;let B=0,F=0;const H=new T;for(let V=0;V<k;V++){const Y=V*P-R;for(let Z=0;Z<D;Z++){const X=Z*x-C;H[v]=X*M,H[m]=Y*w,H[p]=L,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[p]=b>0?1:-1,h.push(H.x,H.y,H.z),u.push(Z/S),u.push(1-V/E),B+=1}}for(let V=0;V<E;V++)for(let Y=0;Y<S;Y++){const Z=d+Y+D*V,X=d+Y+D*(V+1),W=d+(Y+1)+D*(V+1),O=d+(Y+1)+D*V;l.push(Z,X,O),l.push(X,W,O),F+=6}r.addGroup(f,F,y),f+=F,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=Ls(i[e]);for(const s in n)t[s]=n[s]}return t}function Gd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const oo={clone:Ls,merge:mn};var Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends Ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=Gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hh extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new T,Ql=new Bt,Jl=new Bt;class Ln extends Hh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return io*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,Jl),e.subVectors(Jl,Ql)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cs=-90,hs=1;class $d extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(cs,hs,t,e);s.layers=this.layers,this.add(s);const o=new Ln(cs,hs,t,e);o.layers=this.layers,this.add(o);const a=new Ln(cs,hs,t,e);a.layers=this.layers,this.add(a);const r=new Ln(cs,hs,t,e);r.layers=this.layers,this.add(r);const l=new Ln(cs,hs,t,e);l.layers=this.layers,this.add(l);const c=new Ln(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vh extends hn{constructor(t,e,n,s,o,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,n,s,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qd extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lo(5,5,5),o=new qe({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:si});o.uniforms.tEquirect.value=e;const a=new Oe(s,o),r=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Vn),new $d(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}}class Gn extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jd={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class fl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Dt(t),this.density=e}clone(){return new fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class oa extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const tc=new T,ec=new ke,nc=new ke,Zd=new T,ic=new ee,Io=new T,Wa=new Ci,sc=new ee,Ga=new ro;class Wh extends Oe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Il,this.bindMatrix=new ee,this.bindMatrixInverse=new ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Io),this.boundingBox.expandByPoint(Io)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Io),this.boundingSphere.expandByPoint(Io)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(s),t.ray.intersectsSphere(Wa)!==!1&&(sc.copy(s).invert(),Ga.copy(t.ray).applyMatrix4(sc),!(this.boundingBox!==null&&Ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ga)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ke,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ec.fromBufferAttribute(s.attributes.skinIndex,t),nc.fromBufferAttribute(s.attributes.skinWeight,t),tc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const a=nc.getComponent(o);if(a!==0){const r=ec.getComponent(o);ic.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(Zd.copy(tc).applyMatrix4(ic),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class ml extends Ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gh extends hn{constructor(t=null,e=1,n=1,s,o,a,r,l,c=wn,h=wn,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oc=new ee,Kd=new ee;class ga{constructor(t=[],e=[]){this.uuid=ji(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ee)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ee;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const r=t[o]?t[o].matrixWorld:Kd;oc.multiplyMatrices(r,e[o]),oc.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ga(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Gh(e,t,t,Tn,Wn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let a=e[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new ml),this.bones.push(a),this.boneInverses.push(new ee().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const a=e[s];t.bones.push(a.uuid);const r=n[s];t.boneInverses.push(r.toArray())}return t}}class ac extends q{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const us=new ee,rc=new ee,Do=[],lc=new Ti,Qd=new ee,Xs=new Oe,Ys=new Ci;class Xa extends Oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),lc.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(lc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Ys.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=t*o+1;for(let r=0;r<n.length;r++)n[r]=s[a+r]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),t.ray.intersectsSphere(Ys)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,us),rc.multiplyMatrices(n,us),Xs.matrixWorld=rc,Xs.raycast(t,Do);for(let a=0,r=Do.length;a<r;a++){const l=Do[a];l.instanceId=o,l.object=this,e.push(l)}Do.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gh(new Float32Array(s*this.count),s,this.count,ll,Wn));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=s*t;o[l]=r,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ya=new T,Jd=new T,tp=new ue;class _i{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ya.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tp.getNormalMatrix(t),s=this.coplanarPoint(Ya).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Ci,Fo=new T;class gl{constructor(t=new _i,e=new _i,n=new _i,s=new _i,o=new _i,a=new _i){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,s=t.elements,o=s[0],a=s[1],r=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],w=s[14],_=s[15];if(n[0].setComponents(l-o,d-c,m-f,_-p).normalize(),n[1].setComponents(l+o,d+c,m+f,_+p).normalize(),n[2].setComponents(l+a,d+h,m+g,_+M).normalize(),n[3].setComponents(l-a,d-h,m-g,_-M).normalize(),n[4].setComponents(l-r,d-u,m-v,_-w).normalize(),e===ii)n[5].setComponents(l+r,d+u,m+v,_+w).normalize();else if(e===ia)n[5].setComponents(r,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fo.x=s.normal.x>0?t.max.x:t.min.x,Fo.y=s.normal.y>0?t.max.y:t.min.y,Fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ep extends Ns{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cc=new ee,jr=new ro,Uo=new Ci,No=new T;class Zr extends Ke{constructor(t=new Xt,e=new ep){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=o,t.ray.intersectsSphere(Uo)===!1)return;cc.copy(s).invert(),jr.copy(t.ray).applyMatrix4(cc);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);No.fromBufferAttribute(u,m),hc(No,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)No.fromBufferAttribute(u,g),hc(No,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function hc(i,t,e,n,s,o,a){const r=jr.distanceSqToPoint(i);if(r<e){const l=new T;jr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class $a extends hn{constructor(t,e,n,s,o,a,r,l,c,h,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class gn extends hn{constructor(t,e,n,s,o,a,r,l,c){super(t,e,n,s,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xh extends hn{constructor(t,e,n,s,o,a,r,l,c,h=ws){if(h!==ws&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ws&&(n=$i),n===void 0&&h===Ps&&(n=Cs),super(null,s,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ma(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class np{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=n[s]-a,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(o-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),r=this.getPoint(o),l=e||(a.isVector2?new Bt:new T);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new T,s=[],o=[],a=[],r=new T,l=new ee;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}o[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],r),a[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(s[f-1],s[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(de(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(r,g))}a[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(de(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(r.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function _l(){let i=0,t=0,e=0,n=0;function s(o,a,r,l){i=o,t=r,e=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){s(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,u){let d=(a-o)/c-(r-o)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+u)+(l-r)/u;d*=h,f*=h,s(a,r,d,f)},calc:function(o){const a=o*o,r=a*o;return i+t*o+e*a+n*r}}}const ko=new T,qa=new _l,ja=new _l,Za=new _l;class Fn extends np{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%o]:(ko.subVectors(s[0],s[1]).add(s[0]),c=ko);const u=s[r%o],d=s[(r+1)%o];if(this.closed||r+2<o?h=s[(r+2)%o]:(ko.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=ko),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),qa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),ja.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Za.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ja.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Za.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(qa.calc(l),ja.calc(l),Za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class vl extends Xt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new T,h=new Bt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class aa extends Xt{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function M(){const _=new T,A=new T;let b=0;const S=(e-t)/n;for(let E=0;E<=o;E++){const y=[],x=E/o,P=x*(e-t)+t;for(let C=0;C<=s;C++){const R=C/s,L=R*l+r,D=Math.sin(L),k=Math.cos(L);A.x=P*D,A.y=-x*n+m,A.z=P*k,u.push(A.x,A.y,A.z),_.set(D,S,k).normalize(),d.push(_.x,_.y,_.z),f.push(R,1-x),y.push(g++)}v.push(y)}for(let E=0;E<s;E++)for(let y=0;y<o;y++){const x=v[y][E],P=v[y+1][E],C=v[y+1][E+1],R=v[y][E+1];(t>0||y!==0)&&(h.push(x,P,R),b+=3),(e>0||y!==o-1)&&(h.push(P,C,R),b+=3)}c.addGroup(p,b,0),p+=b}function w(_){const A=g,b=new Bt,S=new T;let E=0;const y=_===!0?t:e,x=_===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let C=0;C<=s;C++){const L=C/s*l+r,D=Math.cos(L),k=Math.sin(L);S.x=y*k,S.y=m*x,S.z=y*D,u.push(S.x,S.y,S.z),d.push(0,x,0),b.x=D*.5+.5,b.y=k*.5*x+.5,f.push(b.x,b.y),g++}for(let C=0;C<s;C++){const R=A+C,L=P+C;_===!0?h.push(L,L+1,R):h.push(L+1,L,R),E+=3}c.addGroup(p,E,_===!0?1:2),p+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xl extends Xt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],a=[];r(s),c(n),h(),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(o.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(M){const w=new T,_=new T,A=new T;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],_),f(e[b+2],A),l(w,_,A,M)}function l(M,w,_,A){const b=A+1,S=[];for(let E=0;E<=b;E++){S[E]=[];const y=M.clone().lerp(_,E/b),x=w.clone().lerp(_,E/b),P=b-E;for(let C=0;C<=P;C++)C===0&&E===b?S[E][C]=y:S[E][C]=y.clone().lerp(x,C/P)}for(let E=0;E<b;E++)for(let y=0;y<2*(b-E)-1;y++){const x=Math.floor(y/2);y%2===0?(d(S[E][x+1]),d(S[E+1][x]),d(S[E][x])):(d(S[E][x+1]),d(S[E+1][x+1]),d(S[E+1][x]))}}function c(M){const w=new T;for(let _=0;_<o.length;_+=3)w.x=o[_+0],w.y=o[_+1],w.z=o[_+2],w.normalize().multiplyScalar(M),o[_+0]=w.x,o[_+1]=w.y,o[_+2]=w.z}function h(){const M=new T;for(let w=0;w<o.length;w+=3){M.x=o[w+0],M.y=o[w+1],M.z=o[w+2];const _=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;a.push(_,1-A)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const w=a[M+0],_=a[M+2],A=a[M+4],b=Math.max(w,_,A),S=Math.min(w,_,A);b>.9&&S<.1&&(w<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function d(M){o.push(M.x,M.y,M.z)}function f(M,w){const _=M*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const M=new T,w=new T,_=new T,A=new T,b=new Bt,S=new Bt,E=new Bt;for(let y=0,x=0;y<o.length;y+=9,x+=6){M.set(o[y+0],o[y+1],o[y+2]),w.set(o[y+3],o[y+4],o[y+5]),_.set(o[y+6],o[y+7],o[y+8]),b.set(a[x+0],a[x+1]),S.set(a[x+2],a[x+3]),E.set(a[x+4],a[x+5]),A.copy(M).add(w).add(_).divideScalar(3);const P=m(A);v(b,x+0,M,P),v(S,x+2,w,P),v(E,x+4,_,P)}}function v(M,w,_,A){A<0&&M.x===1&&(a[w]=M.x-1),_.x===0&&_.z===0&&(a[w]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.vertices,t.indices,t.radius,t.details)}}class _a extends xl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _a(t.radius,t.detail)}}class Is extends Xt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(s),c=r+1,h=l+1,u=t/r,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let w=0;w<c;w++){const _=w*u-o;g.push(_,-M,0),v.push(0,0,1),m.push(w/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<r;M++){const w=M+c*p,_=M+c*(p+1),A=M+1+c*(p+1),b=M+1+c*p;f.push(w,_,b),f.push(_,A,b)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.widthSegments,t.heightSegments)}}class ra extends Xt{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new T,d=new T,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],w=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const b=A/e;u.x=-t*Math.cos(s+b*o)*Math.sin(a+w*r),u.y=t*Math.cos(a+w*r),u.z=t*Math.sin(s+b*o)*Math.sin(a+w*r),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(b+_,1-w),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const w=h[p][M+1],_=h[p][M],A=h[p+1][M],b=h[p+1][M+1];(p!==0||a>0)&&f.push(w,_,b),(p!==n-1||l<Math.PI)&&f.push(_,A,b)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ip extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bi extends Ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _n extends bi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class sp extends Ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class op extends Ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yh extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ap extends Yh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ka=new ee,uc=new T,dc=new T;class rp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(uc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ml extends Hh{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lp extends rp{constructor(){super(new Ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pc extends Yh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new lp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cp extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class $h{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fc(){return performance.now()}const wl="\\[\\]\\.:\\/",hp=new RegExp("["+wl+"]","g"),yl="[^"+wl+"]",up="[^"+wl.replace("\\.","")+"]",dp=/((?:WC+[\/:])*)/.source.replace("WC",yl),pp=/(WCOD+)?/.source.replace("WCOD",up),fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),gp=new RegExp("^"+dp+pp+fp+mp+"$"),_p=["material","materials","bones","map"];class vp{constructor(t,e,n){const s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Te{constructor(t,e,n){this.path=e,this.parsedPath=n||Te.parseTrackName(e),this.node=Te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Te.Composite(t,e,n):new Te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hp,"")}static parseTrackName(t){const e=gp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);_p.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===e||r.uuid===e)return r;const l=n(r.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let o=e.propertyIndex;if(t||(t=Te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?r=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=vp;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const mc=new ee;class xp{constructor(t,e,n=0,s=1/0){this.ray=new ro(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mc),this}intersectObject(t,e=!0,n=[]){return Kr(t,this,n,e),n.sort(gc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Kr(t[s],this,n,e);return n.sort(gc),n}}function gc(i,t){return i.distance-t.distance}function Kr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let a=0,r=o.length;a<r;a++)Kr(o[a],t,e,!0)}}class _c{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(de(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mp extends qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function vc(i,t,e,n){const s=wp(n);switch(e){case Ch:return i*t;case Rh:return i*t;case Lh:return i*t*2;case ll:return i*t/s.components*s.byteLength;case cl:return i*t/s.components*s.byteLength;case Ih:return i*t*2/s.components*s.byteLength;case hl:return i*t*2/s.components*s.byteLength;case Ph:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case ul:return i*t*4/s.components*s.byteLength;case $o:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sr:case Er:return Math.max(i,16)*Math.max(t,8)/4;case br:case Ar:return Math.max(i,8)*Math.max(t,8)/2;case Tr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ur:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case kr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Br:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Or:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case Gr:case Xr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dh:case Yr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $r:case qr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wp(i){switch(i){case ci:case Ah:return{byteLength:1,components:1};case no:case Eh:case $n:return{byteLength:2,components:1};case al:case rl:return{byteLength:2,components:4};case $i:case ol:case Wn:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qh(){let i=null,t=!1,e=null,n=null;function s(o,a){e(o,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function yp(i){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(i.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:o,update:a}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
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
}`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
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
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
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
#endif`,yf=`struct PhysicalMaterial {
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
}`,bf=`
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Df=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l0=`float getShadowMask() {
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
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,N0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,O0=`#define LAMBERT
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
}`,H0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,W0=`#define NORMAL
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
}`,G0=`#define NORMAL
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
}`,X0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,q0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,Z0=`#define TOON
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
}`,K0=`uniform float size;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,tm=`uniform vec3 color;
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
}`,em=`uniform float rotation;
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
}`,nm=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:bp,alphahash_pars_fragment:Sp,alphamap_fragment:Ap,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:Cp,aomap_fragment:Pp,aomap_pars_fragment:Rp,batching_pars_vertex:Lp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Fp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:kp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Op,clipping_planes_vertex:Hp,color_fragment:Vp,color_pars_fragment:Wp,color_pars_vertex:Gp,color_vertex:Xp,common:Yp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:qp,displacementmap_pars_vertex:jp,displacementmap_vertex:Zp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Qp,colorspace_fragment:Jp,colorspace_pars_fragment:tf,envmap_fragment:ef,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:of,envmap_physical_pars_fragment:gf,envmap_vertex:af,fog_vertex:rf,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_pars_fragment:df,lights_lambert_fragment:pf,lights_lambert_pars_fragment:ff,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:vf,lights_phong_fragment:xf,lights_phong_pars_fragment:Mf,lights_physical_fragment:wf,lights_physical_pars_fragment:yf,lights_fragment_begin:bf,lights_fragment_maps:Sf,lights_fragment_end:Af,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:Tf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:Rf,map_pars_fragment:Lf,map_particle_fragment:If,map_particle_pars_fragment:Df,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Uf,morphinstance_vertex:Nf,morphcolor_vertex:kf,morphnormal_vertex:Bf,morphtarget_pars_vertex:zf,morphtarget_vertex:Of,normal_fragment_begin:Hf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Gf,normal_vertex:Xf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:qf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:Zf,opaque_fragment:Kf,packing:Qf,premultiplied_alpha_fragment:Jf,project_vertex:t0,dithering_fragment:e0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:a0,shadowmap_vertex:r0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:h0,skinning_vertex:u0,skinnormal_vertex:d0,specularmap_fragment:p0,specularmap_pars_fragment:f0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:_0,transmission_pars_fragment:v0,uv_pars_fragment:x0,uv_pars_vertex:M0,uv_vertex:w0,worldpos_vertex:y0,background_vert:b0,background_frag:S0,backgroundCube_vert:A0,backgroundCube_frag:E0,cube_vert:T0,cube_frag:C0,depth_vert:P0,depth_frag:R0,distanceRGBA_vert:L0,distanceRGBA_frag:I0,equirect_vert:D0,equirect_frag:F0,linedashed_vert:U0,linedashed_frag:N0,meshbasic_vert:k0,meshbasic_frag:B0,meshlambert_vert:z0,meshlambert_frag:O0,meshmatcap_vert:H0,meshmatcap_frag:V0,meshnormal_vert:W0,meshnormal_frag:G0,meshphong_vert:X0,meshphong_frag:Y0,meshphysical_vert:$0,meshphysical_frag:q0,meshtoon_vert:j0,meshtoon_frag:Z0,points_vert:K0,points_frag:Q0,shadow_vert:J0,shadow_frag:tm,sprite_vert:em,sprite_frag:nm},Nt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Yn={basic:{uniforms:mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:mn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:mn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:mn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:mn([Nt.points,Nt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:mn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:mn([Nt.common,Nt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:mn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:mn([Nt.sprite,Nt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:mn([Nt.common,Nt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:mn([Nt.lights,Nt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Yn.physical={uniforms:mn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Bo={r:0,b:0,g:0},Ni=new yn,im=new ee;function sm(i,t,e,n,s,o,a){const r=new Dt(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function v(w){let _=!1;const A=g(w);A===null?p(r,l):A&&A.isColor&&(p(A,1),_=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===fa)?(h===void 0&&(h=new Oe(new lo(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Ls(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(_.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(im.makeRotationFromEuler(Ni)),h.material.toneMapped=Ae.getTransfer(A.colorSpace)!==Le,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Oe(new Is(2,2),new qe({name:"BackgroundMaterial",uniforms:Ls(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ae.getTransfer(A.colorSpace)!==Le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,_){w.getRGB(Bo,Oh(i)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,_,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,_=1){r.set(w),l=_,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(r,l)},render:v,addToRenderList:m,dispose:M}}function om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,a=!1;function r(x,P,C,R,L){let D=!1;const k=u(R,C,P);o!==k&&(o=k,c(o.object)),D=f(x,R,C,L),D&&g(x,R,C,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,_(x,P,C,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,P,C){const R=C.wireframe===!0;let L=n[x.id];L===void 0&&(L={},n[x.id]=L);let D=L[P.id];D===void 0&&(D={},L[P.id]=D);let k=D[R];return k===void 0&&(k=d(l()),D[R]=k),k}function d(x){const P=[],C=[],R=[];for(let L=0;L<e;L++)P[L]=0,C[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:R,object:x,attributes:{},index:null}}function f(x,P,C,R){const L=o.attributes,D=P.attributes;let k=0;const B=C.getAttributes();for(const F in B)if(B[F].location>=0){const V=L[F];let Y=D[F];if(Y===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),V===void 0||V.attribute!==Y||Y&&V.data!==Y.data)return!0;k++}return o.attributesNum!==k||o.index!==R}function g(x,P,C,R){const L={},D=P.attributes;let k=0;const B=C.getAttributes();for(const F in B)if(B[F].location>=0){let V=D[F];V===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(V=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(V=x.instanceColor));const Y={};Y.attribute=V,V&&V.data&&(Y.data=V.data),L[F]=Y,k++}o.attributes=L,o.attributesNum=k,o.index=R}function v(){const x=o.newAttributes;for(let P=0,C=x.length;P<C;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const C=o.newAttributes,R=o.enabledAttributes,L=o.attributeDivisors;C[x]=1,R[x]===0&&(i.enableVertexAttribArray(x),R[x]=1),L[x]!==P&&(i.vertexAttribDivisor(x,P),L[x]=P)}function M(){const x=o.newAttributes,P=o.enabledAttributes;for(let C=0,R=P.length;C<R;C++)P[C]!==x[C]&&(i.disableVertexAttribArray(C),P[C]=0)}function w(x,P,C,R,L,D,k){k===!0?i.vertexAttribIPointer(x,P,C,L,D):i.vertexAttribPointer(x,P,C,R,L,D)}function _(x,P,C,R){v();const L=R.attributes,D=C.getAttributes(),k=P.defaultAttributeValues;for(const B in D){const F=D[B];if(F.location>=0){let H=L[B];if(H===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(H=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(H=x.instanceColor)),H!==void 0){const V=H.normalized,Y=H.itemSize,Z=t.get(H);if(Z===void 0)continue;const X=Z.buffer,W=Z.type,O=Z.bytesPerElement,st=W===i.INT||W===i.UNSIGNED_INT||H.gpuType===ol;if(H.isInterleavedBufferAttribute){const at=H.data,j=at.stride,K=H.offset;if(at.isInstancedInterleavedBuffer){for(let G=0;G<F.locationSize;G++)p(F.location+G,at.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let G=0;G<F.locationSize;G++)m(F.location+G);i.bindBuffer(i.ARRAY_BUFFER,X);for(let G=0;G<F.locationSize;G++)w(F.location+G,Y/F.locationSize,W,V,j*O,(K+Y/F.locationSize*G)*O,st)}else{if(H.isInstancedBufferAttribute){for(let at=0;at<F.locationSize;at++)p(F.location+at,H.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let at=0;at<F.locationSize;at++)m(F.location+at);i.bindBuffer(i.ARRAY_BUFFER,X);for(let at=0;at<F.locationSize;at++)w(F.location+at,Y/F.locationSize,W,V,Y*O,Y/F.locationSize*at*O,st)}}else if(k!==void 0){const V=k[B];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(F.location,V);break;case 3:i.vertexAttrib3fv(F.location,V);break;case 4:i.vertexAttrib4fv(F.location,V);break;default:i.vertexAttrib1fv(F.location,V)}}}}M()}function A(){E();for(const x in n){const P=n[x];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[x.id]}function S(x){for(const P in n){const C=n[P];if(C[x.id]===void 0)continue;const R=C[x.id];for(const L in R)h(R[L].object),delete R[L];delete C[x.id]}}function E(){y(),a=!0,o!==s&&(o=s,c(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:E,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function am(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function rm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==Tn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(S){const E=S===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==ci&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Wn&&!E)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:A,maxSamples:b}}function lm(i){const t=this;let e=null,n=0,s=!1,o=!1;const a=new _i,r=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const M=o?0:n,w=M*4;let _=p.clippingState||null;l.value=_,_=h(g,d,w,f);for(let A=0;A!==w;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;r.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==v;++w,_+=4)a.copy(u[w]).applyMatrix4(M,r),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function cm(i){let t=new WeakMap;function e(a,r){return r===wr?a.mapping=Es:r===yr&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===wr||r===yr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const r=a.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const gs=4,xc=[.125,.215,.35,.446,.526,.582],Wi=20,Qa=new Ml,Mc=new Dt;let Ja=null,tr=0,er=0,nr=!1;const Hi=(1+Math.sqrt(5))/2,ds=1/Hi,wc=[new T(-Hi,ds,0),new T(Hi,ds,0),new T(-ds,0,Hi),new T(ds,0,Hi),new T(0,Hi,-ds),new T(0,Hi,ds),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],hm=new T;class Qr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){const{size:a=256,position:r=hm}=o;Ja=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),er=this._renderer.getActiveMipmapLevel(),nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ja,tr,er),this._renderer.xr.enabled=nr,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ja=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),er=this._renderer.getActiveMipmapLevel(),nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:$n,format:Tn,colorSpace:Rs,depthBuffer:!1},s=yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=um(o)),this._blurMaterial=dm(o,t,e)}return s}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,s,o){const l=new Ln(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Mc),u.toneMapping=yi,u.autoClear=!1;const g=new so({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),v=new Oe(new lo,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(Mc),m=!0);for(let M=0;M<6;M++){const w=M%3;w===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):w===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));const _=this._cubeSize;zo(s,w*_,M>2?_:0,_,_),u.setRenderTarget(s),m&&u.render(v,l),u.render(t,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Es||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;zo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=wc[(s-o-1)%wc.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",o),this._halfBlur(a,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Oe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):Wi;m>Wi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let M=0;for(let S=0;S<Wi;++S){const E=S/v,y=Math.exp(-E*E/2);p.push(y),S===0?M+=y:S<m&&(M+=2*y)}for(let S=0;S<p.length;S++)p[S]=p[S]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const _=this._sizeLods[s],A=3*_*(s>w-gs?s-w+gs:0),b=4*(this._cubeSize-_);zo(e,A,b,3*_,2*_),l.setRenderTarget(e),l.render(u,Qa)}}function um(i){const t=[],e=[],n=[];let s=i;const o=i-gs+1+xc.length;for(let a=0;a<o;a++){const r=Math.pow(2,s);e.push(r);let l=1/r;a>i-gs?l=xc[a-i+gs-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),w=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let b=0;b<f;b++){const S=b%3*2/3-1,E=b>2?0:-1,y=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];M.set(y,v*g*b),w.set(d,m*g*b);const x=[b,b,b,b,b,b];_.set(x,p*g*b)}const A=new Xt;A.setAttribute("position",new q(M,v)),A.setAttribute("uv",new q(w,m)),A.setAttribute("faceIndex",new q(_,p)),t.push(A),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yc(i,t,e){const n=new Dn(i,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dm(i,t,e){const n=new Float32Array(Wi),s=new T(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function bc(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Sc(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function pm(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===wr||l===yr,h=l===Es||l===Ts;if(c||h){let u=t.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return e===null&&(e=new Qr(i)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Qr(i)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function s(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function fm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mm(i,t,e,n){const s={},o=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let w=0,_=M.length;w<_;w+=3){const A=M[w+0],b=M[w+1],S=M[w+2];d.push(A,b,b,S,S,A)}}else if(g!==void 0){const M=g.array;v=g.version;for(let w=0,_=M.length/3-1;w<_;w+=3){const A=w+0,b=w+1,S=w+2;d.push(A,b,b,S,S,A)}}else return;const m=new(Nh(d)?zh:fe)(d,1);m.version=v;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function gm(i,t,e){let n;function s(d){n=d}let o,a;function r(d){o=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,o,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _m(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=r*(o/3);break;case i.LINES:e.lines+=r*(o/2);break;case i.LINE_STRIP:e.lines+=r*(o-1);break;case i.LINE_LOOP:e.lines+=r*o;break;case i.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vm(i,t,e){const n=new WeakMap,s=new ke;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(r);if(d===void 0||d.count!==u){let x=function(){E.dispose(),n.delete(r),r.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],M=r.morphAttributes.normal||[],w=r.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let A=r.attributes.position.count*_,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*b*4*u),E=new kh(S,A,b,u);E.type=Wn,E.needsUpdate=!0;const y=_*4;for(let P=0;P<u;P++){const C=p[P],R=M[P],L=w[P],D=A*b*4*P;for(let k=0;k<C.count;k++){const B=k*y;g===!0&&(s.fromBufferAttribute(C,k),S[D+B+0]=s.x,S[D+B+1]=s.y,S[D+B+2]=s.z,S[D+B+3]=0),v===!0&&(s.fromBufferAttribute(R,k),S[D+B+4]=s.x,S[D+B+5]=s.y,S[D+B+6]=s.z,S[D+B+7]=0),m===!0&&(s.fromBufferAttribute(L,k),S[D+B+8]=s.x,S[D+B+9]=s.y,S[D+B+10]=s.z,S[D+B+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new Bt(A,b)},n.set(r,d),r.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function xm(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}const jh=new hn,Ac=new Xh(1,1),Zh=new kh,Kh=new Id,Qh=new Vh,Ec=[],Tc=[],Cc=new Float32Array(16),Pc=new Float32Array(9),Rc=new Float32Array(4);function ks(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Ec[s];if(o===void 0&&(o=new Float32Array(s),Ec[s]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,i[a].toArray(o,r)}return o}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function va(i,t){let e=Tc[t];e===void 0&&(e=new Int32Array(t),Tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function Sm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),en(e,n)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Pc.set(n),i.uniformMatrix3fv(this.addr,!1,Pc),en(e,n)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),en(e,n)}}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function Lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function Um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Ac.compareFunction=Uh,o=Ac):o=jh,e.setTexture2D(t||o,s)}function Nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kh,s)}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qh,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zh,s)}function zm(i){switch(i){case 5126:return Mm;case 35664:return wm;case 35665:return ym;case 35666:return bm;case 35674:return Sm;case 35675:return Am;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Rm;case 5125:return Lm;case 36294:return Im;case 36295:return Dm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Bm}}function Om(i,t){i.uniform1fv(this.addr,t)}function Hm(i,t){const e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function Vm(i,t){const e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function Wm(i,t){const e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function Gm(i,t){const e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xm(i,t){const e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ym(i,t){const e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $m(i,t){i.uniform1iv(this.addr,t)}function qm(i,t){i.uniform2iv(this.addr,t)}function jm(i,t){i.uniform3iv(this.addr,t)}function Zm(i,t){i.uniform4iv(this.addr,t)}function Km(i,t){i.uniform1uiv(this.addr,t)}function Qm(i,t){i.uniform2uiv(this.addr,t)}function Jm(i,t){i.uniform3uiv(this.addr,t)}function tg(i,t){i.uniform4uiv(this.addr,t)}function eg(i,t,e){const n=this.cache,s=t.length,o=va(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||jh,o[a])}function ng(i,t,e){const n=this.cache,s=t.length,o=va(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kh,o[a])}function ig(i,t,e){const n=this.cache,s=t.length,o=va(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qh,o[a])}function sg(i,t,e){const n=this.cache,s=t.length,o=va(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zh,o[a])}function og(i){switch(i){case 5126:return Om;case 35664:return Hm;case 35665:return Vm;case 35666:return Wm;case 35674:return Gm;case 35675:return Xm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return qm;case 35668:case 35672:return jm;case 35669:case 35673:return Zm;case 5125:return Km;case 36294:return Qm;case 36295:return Jm;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}class ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zm(e.type)}}class rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}}class lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(t,e[r.id],n)}}}const ir=/(\w+)(\])?(\[|\.)?/g;function Lc(i,t){i.seq.push(t),i.map[t.id]=t}function cg(i,t,e){const n=i.name,s=n.length;for(ir.lastIndex=0;;){const o=ir.exec(n),a=ir.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===s){Lc(e,c===void 0?new ag(r,i,t):new rg(r,i,t));break}else{let u=e.map[r];u===void 0&&(u=new lg(r),Lc(e,u)),e=u}}}class Qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);cg(o,a,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ic(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hg=37297;let ug=0;function dg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const Dc=new ue;function pg(i){Ae._getMatrix(Dc,Ae.workingColorSpace,i);const t=`mat3( ${Dc.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(i)){case na:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+dg(i.getShaderSource(t),a)}else return s}function fg(i,t){const e=pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mg(i,t){let e;switch(t){case _h:e="Linear";break;case vh:e="Reinhard";break;case xh:e="Cineon";break;case sl:e="ACESFilmic";break;case wh:e="AgX";break;case yh:e="Neutral";break;case Mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Oo=new T;function gg(){Ae.getLuminanceCoefficients(Oo);const i=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function vg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),a=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:r}}return e}function js(i){return i!==""}function Uc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(i){return i.replace(Mg,yg)}const wg=new Map;function yg(i,t){let e=pe[t];if(e===void 0){const n=wg.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jr(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(i){return i.replace(bg,Sg)}function Sg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Bc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Es:case Ts:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function Cg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gh:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Rg(i,t,e,n){const s=i.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=Ag(e),c=Eg(e),h=Tg(e),u=Cg(e),d=Pg(e),f=_g(e),g=vg(o),v=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?pe.tonemapping_pars_fragment:"",e.toneMapping!==yi?mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,fg("linearToOutputTexel",e.outputColorSpace),gg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),a=Jr(a),a=Uc(a,e),a=Nc(a,e),r=Jr(r),r=Uc(r,e),r=Nc(r,e),a=kc(a),r=kc(r),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+a,_=M+p+r,A=Ic(s,s.VERTEX_SHADER,w),b=Ic(s,s.FRAGMENT_SHADER,_);s.attachShader(v,A),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function S(P){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(v).trim(),R=s.getShaderInfoLog(A).trim(),L=s.getShaderInfoLog(b).trim();let D=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,b);else{const B=Fc(s,A,"vertex"),F=Fc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+B+`
`+F)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||L==="")&&(k=!1);k&&(P.diagnostics={runnable:D,programLog:C,vertexShader:{log:R,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(A),s.deleteShader(b),E=new Qo(s,v),y=xg(s,v)}let E;this.getUniforms=function(){return E===void 0&&S(this),E};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,hg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=b,this}let Lg=0;class Ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dg(t),e.set(t,n)),n}}class Dg{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Fg(i,t,e,n,s,o,a){const r=new pl,l=new Ig,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,P,C,R){const L=C.fog,D=R.geometry,k=y.isMeshStandardMaterial?C.environment:null,B=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),F=B&&B.mapping===fa?B.image.height:null,H=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Y=V!==void 0?V.length:0;let Z=0;D.morphAttributes.position!==void 0&&(Z=1),D.morphAttributes.normal!==void 0&&(Z=2),D.morphAttributes.color!==void 0&&(Z=3);let X,W,O,st;if(H){const ct=Yn[H];X=ct.vertexShader,W=ct.fragmentShader}else X=y.vertexShader,W=y.fragmentShader,l.update(y),O=l.getVertexShaderID(y),st=l.getFragmentShaderID(y);const at=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),K=R.isInstancedMesh===!0,G=R.isBatchedMesh===!0,nt=!!y.map,_t=!!y.matcap,J=!!B,U=!!y.aoMap,rt=!!y.lightMap,dt=!!y.bumpMap,wt=!!y.normalMap,vt=!!y.displacementMap,Lt=!!y.emissiveMap,yt=!!y.metalnessMap,z=!!y.roughnessMap,I=y.anisotropy>0,et=y.clearcoat>0,ft=y.dispersion>0,gt=y.iridescence>0,mt=y.sheen>0,Et=y.transmission>0,pt=I&&!!y.anisotropyMap,Ct=et&&!!y.clearcoatMap,Wt=et&&!!y.clearcoatNormalMap,xt=et&&!!y.clearcoatRoughnessMap,Rt=gt&&!!y.iridescenceMap,qt=gt&&!!y.iridescenceThicknessMap,jt=mt&&!!y.sheenColorMap,kt=mt&&!!y.sheenRoughnessMap,Jt=!!y.specularMap,Zt=!!y.specularColorMap,ye=!!y.specularIntensityMap,Q=Et&&!!y.transmissionMap,It=Et&&!!y.thicknessMap,ot=!!y.gradientMap,Mt=!!y.alphaMap,Ft=y.alphaTest>0,Pt=!!y.alphaHash,ne=!!y.extensions;let Re=yi;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Re=i.toneMapping);const We={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:W,defines:y.defines,customVertexShaderID:O,customFragmentShaderID:st,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:G,batchingColor:G&&R._colorsTexture!==null,instancing:K,instancingColor:K&&R.instanceColor!==null,instancingMorph:K&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Rs,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:_t,envMap:J,envMapMode:J&&B.mapping,envMapCubeUVHeight:F,aoMap:U,lightMap:rt,bumpMap:dt,normalMap:wt,displacementMap:d&&vt,emissiveMap:Lt,normalMapObjectSpace:wt&&y.normalMapType===Ju,normalMapTangentSpace:wt&&y.normalMapType===Fh,metalnessMap:yt,roughnessMap:z,anisotropy:I,anisotropyMap:pt,clearcoat:et,clearcoatMap:Ct,clearcoatNormalMap:Wt,clearcoatRoughnessMap:xt,dispersion:ft,iridescence:gt,iridescenceMap:Rt,iridescenceThicknessMap:qt,sheen:mt,sheenColorMap:jt,sheenRoughnessMap:kt,specularMap:Jt,specularColorMap:Zt,specularIntensityMap:ye,transmission:Et,transmissionMap:Q,thicknessMap:It,gradientMap:ot,opaque:y.transparent===!1&&y.blending===Ms&&y.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Ft,alphaHash:Pt,combine:y.combine,mapUv:nt&&v(y.map.channel),aoMapUv:U&&v(y.aoMap.channel),lightMapUv:rt&&v(y.lightMap.channel),bumpMapUv:dt&&v(y.bumpMap.channel),normalMapUv:wt&&v(y.normalMap.channel),displacementMapUv:vt&&v(y.displacementMap.channel),emissiveMapUv:Lt&&v(y.emissiveMap.channel),metalnessMapUv:yt&&v(y.metalnessMap.channel),roughnessMapUv:z&&v(y.roughnessMap.channel),anisotropyMapUv:pt&&v(y.anisotropyMap.channel),clearcoatMapUv:Ct&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:kt&&v(y.sheenRoughnessMap.channel),specularMapUv:Jt&&v(y.specularMap.channel),specularColorMapUv:Zt&&v(y.specularColorMap.channel),specularIntensityMapUv:ye&&v(y.specularIntensityMap.channel),transmissionMapUv:Q&&v(y.transmissionMap.channel),thicknessMapUv:It&&v(y.thicknessMap.channel),alphaMapUv:Mt&&v(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(wt||I),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!D.attributes.uv&&(nt||Mt),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:j,skinning:R.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Z,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&Ae.getTransfer(y.map.colorSpace)===Le,decodeVideoTextureEmissive:Lt&&y.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(y.emissiveMap.colorSpace)===Le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&y.extensions.multiDraw===!0||G)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(M(x,y),w(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function w(y,x){r.disableAll(),x.supportsVertexTextures&&r.enable(0),x.instancing&&r.enable(1),x.instancingColor&&r.enable(2),x.instancingMorph&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),x.dispersion&&r.enable(20),x.batchingColor&&r.enable(21),y.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reverseDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),y.push(r.mask)}function _(y){const x=g[y.type];let P;if(x){const C=Yn[x];P=oo.clone(C.uniforms)}else P=y.uniforms;return P}function A(y,x){let P;for(let C=0,R=h.length;C<R;C++){const L=h[C];if(L.cacheKey===x){P=L,++P.usedTimes;break}}return P===void 0&&(P=new Rg(i,x,y,o),h.push(P)),P}function b(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function S(y){l.remove(y)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:b,releaseShaderCache:S,programs:h,dispose:E}}function Ug(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function n(a){i.delete(a)}function s(a,r,l){i.get(a)[r]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Ng(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Oc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function r(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Ng),n.length>1&&n.sort(d||zc),s.length>1&&s.sort(d||zc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:r,unshift:l,finish:h,sort:c}}function kg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let a;return o===void 0?(a=new Oc,i.set(n,[a])):s>=o.length?(a=new Oc,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Dt};break;case"SpotLight":e={position:new T,direction:new T,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Og=0;function Hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vg(i){const t=new Bg,e=zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,o=new ee,a=new ee;function r(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,w=0,_=0,A=0,b=0,S=0;c.sort(Hg);for(let y=0,x=c.length;y<x;y++){const P=c[y],C=P.color,R=P.intensity,L=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*R,u+=C.g*R,d+=C.b*R;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],R);S++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,F=e.get(P);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(C).multiplyScalar(R),k.distance=L,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[v]=k;const B=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,B.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[v]=B.matrix,P.castShadow){const F=e.get(P);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=D,_++}v++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(C).multiplyScalar(R),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const B=P.shadow,F=e.get(P);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,F.shadowCameraNear=B.camera.near,F.shadowCameraFar=B.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(R),k.groundColor.copy(P.groundColor).multiplyScalar(R),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==M||E.numPointShadows!==w||E.numSpotShadows!==_||E.numSpotMaps!==A||E.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=_+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=S,E.directionalLength=f,E.pointLength=g,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=M,E.numPointShadows=w,E.numSpotShadows=_,E.numSpotMaps=A,E.numLightProbes=S,n.version=Og++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const w=c[p];if(w.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(w.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:n}}function Hc(i){const t=new Vg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function Wg(i){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let r;return a===void 0?(r=new Hc(i),t.set(s,[r])):o>=a.length?(r=new Hc(i),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}const Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
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
}`;function Yg(i,t,e){let n=new gl;const s=new Bt,o=new Bt,a=new ke,r=new sp({depthPacking:Qu}),l=new op,c={},h=e.maxTextureSize,u={[Ei]:vn,[vn]:Ei,[ln]:ln},d=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Gg,fragmentShader:Xg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new q(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let p=this.type;this.render=function(b,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(si),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const R=p!==ti&&this.type===ti,L=p===ti&&this.type!==ti;for(let D=0,k=b.length;D<k;D++){const B=b[D],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const H=F.getFrameExtents();if(s.multiply(H),o.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/H.x),s.x=o.x*H.x,F.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/H.y),s.y=o.y*H.y,F.mapSize.y=o.y)),F.map===null||R===!0||L===!0){const Y=this.type!==ti?{minFilter:wn,magFilter:wn}:{};F.map!==null&&F.map.dispose(),F.map=new Dn(s.x,s.y,Y),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const V=F.getViewportCount();for(let Y=0;Y<V;Y++){const Z=F.getViewport(Y);a.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),C.viewport(a),F.updateMatrices(B,Y),n=F.getFrustum(),_(S,E,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===ti&&M(F,E),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,P)};function M(b,S){const E=t.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Dn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,E,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,E,f,v,null)}function w(b,S,E,y){let x=null;const P=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)x=P;else if(x=E.isPointLight===!0?l:r,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const C=x.uuid,R=S.uuid;let L=c[C];L===void 0&&(L={},c[C]=L);let D=L[R];D===void 0&&(D=x.clone(),L[R]=D,S.addEventListener("dispose",A)),x=D}if(x.visible=S.visible,x.wireframe=S.wireframe,y===ti?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:u[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const C=i.properties.get(x);C.light=E}return x}function _(b,S,E,y,x){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===ti)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const R=t.update(b),L=b.material;if(Array.isArray(L)){const D=R.groups;for(let k=0,B=D.length;k<B;k++){const F=D[k],H=L[F.materialIndex];if(H&&H.visible){const V=w(b,H,y,x);b.onBeforeShadow(i,b,S,E,R,V,F),i.renderBufferDirect(E,null,R,V,b,F),b.onAfterShadow(i,b,S,E,R,V,F)}}}else if(L.visible){const D=w(b,L,y,x);b.onBeforeShadow(i,b,S,E,R,D,null),i.renderBufferDirect(E,null,R,D,b,null),b.onAfterShadow(i,b,S,E,R,D,null)}}const C=b.children;for(let R=0,L=C.length;R<L;R++)_(C[R],S,E,y,x)}function A(b){b.target.removeEventListener("dispose",A);for(const E in c){const y=c[E],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const $g={[fr]:mr,[gr]:xr,[_r]:Mr,[oi]:vr,[mr]:fr,[xr]:gr,[Mr]:_r,[vr]:oi};function qg(i,t){function e(){let Q=!1;const It=new ke;let ot=null;const Mt=new ke(0,0,0,0);return{setMask:function(Ft){ot!==Ft&&!Q&&(i.colorMask(Ft,Ft,Ft,Ft),ot=Ft)},setLocked:function(Ft){Q=Ft},setClear:function(Ft,Pt,ne,Re,We){We===!0&&(Ft*=Re,Pt*=Re,ne*=Re),It.set(Ft,Pt,ne,Re),Mt.equals(It)===!1&&(i.clearColor(Ft,Pt,ne,Re),Mt.copy(It))},reset:function(){Q=!1,ot=null,Mt.set(-1,0,0,0)}}}function n(){let Q=!1,It=!1,ot=null,Mt=null,Ft=null;return{setReversed:function(Pt){if(It!==Pt){const ne=t.get("EXT_clip_control");It?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const Re=Ft;Ft=null,this.setClear(Re)}It=Pt},getReversed:function(){return It},setTest:function(Pt){Pt?at(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(Pt){ot!==Pt&&!Q&&(i.depthMask(Pt),ot=Pt)},setFunc:function(Pt){if(It&&(Pt=$g[Pt]),Mt!==Pt){switch(Pt){case fr:i.depthFunc(i.NEVER);break;case mr:i.depthFunc(i.ALWAYS);break;case gr:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case _r:i.depthFunc(i.EQUAL);break;case vr:i.depthFunc(i.GEQUAL);break;case xr:i.depthFunc(i.GREATER);break;case Mr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Pt}},setLocked:function(Pt){Q=Pt},setClear:function(Pt){Ft!==Pt&&(It&&(Pt=1-Pt),i.clearDepth(Pt),Ft=Pt)},reset:function(){Q=!1,ot=null,Mt=null,Ft=null,It=!1}}}function s(){let Q=!1,It=null,ot=null,Mt=null,Ft=null,Pt=null,ne=null,Re=null,We=null;return{setTest:function(ct){Q||(ct?at(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ct){It!==ct&&!Q&&(i.stencilMask(ct),It=ct)},setFunc:function(ct,bt,zt){(ot!==ct||Mt!==bt||Ft!==zt)&&(i.stencilFunc(ct,bt,zt),ot=ct,Mt=bt,Ft=zt)},setOp:function(ct,bt,zt){(Pt!==ct||ne!==bt||Re!==zt)&&(i.stencilOp(ct,bt,zt),Pt=ct,ne=bt,Re=zt)},setLocked:function(ct){Q=ct},setClear:function(ct){We!==ct&&(i.clearStencil(ct),We=ct)},reset:function(){Q=!1,It=null,ot=null,Mt=null,Ft=null,Pt=null,ne=null,Re=null,We=null}}}const o=new e,a=new n,r=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,w=null,_=null,A=null,b=null,S=new Dt(0,0,0),E=0,y=!1,x=null,P=null,C=null,R=null,L=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),k=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),k=B>=2);let H=null,V={};const Y=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),X=new ke().fromArray(Y),W=new ke().fromArray(Z);function O(Q,It,ot,Mt){const Ft=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(Q,Pt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<ot;ne++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(It+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return Pt}const st={};st[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),at(i.DEPTH_TEST),a.setFunc(oi),dt(!1),wt(Pl),at(i.CULL_FACE),U(si);function at(Q){h[Q]!==!0&&(i.enable(Q),h[Q]=!0)}function j(Q){h[Q]!==!1&&(i.disable(Q),h[Q]=!1)}function K(Q,It){return u[Q]!==It?(i.bindFramebuffer(Q,It),u[Q]=It,Q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=It),Q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=It),!0):!1}function G(Q,It){let ot=f,Mt=!1;if(Q){ot=d.get(It),ot===void 0&&(ot=[],d.set(It,ot));const Ft=Q.textures;if(ot.length!==Ft.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,ne=Ft.length;Pt<ne;Pt++)ot[Pt]=i.COLOR_ATTACHMENT0+Pt;ot.length=Ft.length,Mt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(ot)}function nt(Q){return g!==Q?(i.useProgram(Q),g=Q,!0):!1}const _t={[Vi]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};_t[Lu]=i.MIN,_t[Iu]=i.MAX;const J={[Du]:i.ZERO,[Fu]:i.ONE,[Uu]:i.SRC_COLOR,[dr]:i.SRC_ALPHA,[Hu]:i.SRC_ALPHA_SATURATE,[zu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[pr]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA,[Vu]:i.CONSTANT_COLOR,[Wu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Xu]:i.ONE_MINUS_CONSTANT_ALPHA};function U(Q,It,ot,Mt,Ft,Pt,ne,Re,We,ct){if(Q===si){v===!0&&(j(i.BLEND),v=!1);return}if(v===!1&&(at(i.BLEND),v=!0),Q!==Cu){if(Q!==m||ct!==y){if((p!==Vi||_!==Vi)&&(i.blendEquation(i.FUNC_ADD),p=Vi,_=Vi),ct)switch(Q){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ll:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}M=null,w=null,A=null,b=null,S.set(0,0,0),E=0,m=Q,y=ct}return}Ft=Ft||It,Pt=Pt||ot,ne=ne||Mt,(It!==p||Ft!==_)&&(i.blendEquationSeparate(_t[It],_t[Ft]),p=It,_=Ft),(ot!==M||Mt!==w||Pt!==A||ne!==b)&&(i.blendFuncSeparate(J[ot],J[Mt],J[Pt],J[ne]),M=ot,w=Mt,A=Pt,b=ne),(Re.equals(S)===!1||We!==E)&&(i.blendColor(Re.r,Re.g,Re.b,We),S.copy(Re),E=We),m=Q,y=!1}function rt(Q,It){Q.side===ln?j(i.CULL_FACE):at(i.CULL_FACE);let ot=Q.side===vn;It&&(ot=!ot),dt(ot),Q.blending===Ms&&Q.transparent===!1?U(si):U(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),a.setFunc(Q.depthFunc),a.setTest(Q.depthTest),a.setMask(Q.depthWrite),o.setMask(Q.colorWrite);const Mt=Q.stencilWrite;r.setTest(Mt),Mt&&(r.setMask(Q.stencilWriteMask),r.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),r.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Lt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(Q){x!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),x=Q)}function wt(Q){Q!==Eu?(at(i.CULL_FACE),Q!==P&&(Q===Pl?i.cullFace(i.BACK):Q===Tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),P=Q}function vt(Q){Q!==C&&(k&&i.lineWidth(Q),C=Q)}function Lt(Q,It,ot){Q?(at(i.POLYGON_OFFSET_FILL),(R!==It||L!==ot)&&(i.polygonOffset(It,ot),R=It,L=ot)):j(i.POLYGON_OFFSET_FILL)}function yt(Q){Q?at(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function z(Q){Q===void 0&&(Q=i.TEXTURE0+D-1),H!==Q&&(i.activeTexture(Q),H=Q)}function I(Q,It,ot){ot===void 0&&(H===null?ot=i.TEXTURE0+D-1:ot=H);let Mt=V[ot];Mt===void 0&&(Mt={type:void 0,texture:void 0},V[ot]=Mt),(Mt.type!==Q||Mt.texture!==It)&&(H!==ot&&(i.activeTexture(ot),H=ot),i.bindTexture(Q,It||st[Q]),Mt.type=Q,Mt.texture=It)}function et(){const Q=V[H];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function gt(){try{i.compressedTexImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function mt(){try{i.texSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Et(){try{i.texSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function pt(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Wt(){try{i.texStorage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function xt(){try{i.texStorage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Rt(){try{i.texImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function qt(){try{i.texImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function jt(Q){X.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),X.copy(Q))}function kt(Q){W.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),W.copy(Q))}function Jt(Q,It){let ot=c.get(It);ot===void 0&&(ot=new WeakMap,c.set(It,ot));let Mt=ot.get(Q);Mt===void 0&&(Mt=i.getUniformBlockIndex(It,Q.name),ot.set(Q,Mt))}function Zt(Q,It){const Mt=c.get(It).get(Q);l.get(It)!==Mt&&(i.uniformBlockBinding(It,Mt,Q.__bindingPointIndex),l.set(It,Mt))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,V={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,w=null,_=null,A=null,b=null,S=new Dt(0,0,0),E=0,y=!1,x=null,P=null,C=null,R=null,L=null,X.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:at,disable:j,bindFramebuffer:K,drawBuffers:G,useProgram:nt,setBlending:U,setMaterial:rt,setFlipSided:dt,setCullFace:wt,setLineWidth:vt,setPolygonOffset:Lt,setScissorTest:yt,activeTexture:z,bindTexture:I,unbindTexture:et,compressedTexImage2D:ft,compressedTexImage3D:gt,texImage2D:Rt,texImage3D:qt,updateUBOMapping:Jt,uniformBlockBinding:Zt,texStorage2D:Wt,texStorage3D:xt,texSubImage2D:mt,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:Ct,scissor:jt,viewport:kt,reset:ye}}function jg(i,t,e,n,s,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,I){return f?new OffscreenCanvas(z,I):sa("canvas")}function v(z,I,et){let ft=1;const gt=yt(z);if((gt.width>et||gt.height>et)&&(ft=et/Math.max(gt.width,gt.height)),ft<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const mt=Math.floor(ft*gt.width),Et=Math.floor(ft*gt.height);u===void 0&&(u=g(mt,Et));const pt=I?g(mt,Et):u;return pt.width=mt,pt.height=Et,pt.getContext("2d").drawImage(z,0,0,mt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+mt+"x"+Et+")."),pt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),z;return z}function m(z){return z.generateMipmaps}function p(z){i.generateMipmap(z)}function M(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(z,I,et,ft,gt=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let mt=I;if(I===i.RED&&(et===i.FLOAT&&(mt=i.R32F),et===i.HALF_FLOAT&&(mt=i.R16F),et===i.UNSIGNED_BYTE&&(mt=i.R8)),I===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(mt=i.R8UI),et===i.UNSIGNED_SHORT&&(mt=i.R16UI),et===i.UNSIGNED_INT&&(mt=i.R32UI),et===i.BYTE&&(mt=i.R8I),et===i.SHORT&&(mt=i.R16I),et===i.INT&&(mt=i.R32I)),I===i.RG&&(et===i.FLOAT&&(mt=i.RG32F),et===i.HALF_FLOAT&&(mt=i.RG16F),et===i.UNSIGNED_BYTE&&(mt=i.RG8)),I===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(mt=i.RG8UI),et===i.UNSIGNED_SHORT&&(mt=i.RG16UI),et===i.UNSIGNED_INT&&(mt=i.RG32UI),et===i.BYTE&&(mt=i.RG8I),et===i.SHORT&&(mt=i.RG16I),et===i.INT&&(mt=i.RG32I)),I===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),et===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),et===i.UNSIGNED_INT&&(mt=i.RGB32UI),et===i.BYTE&&(mt=i.RGB8I),et===i.SHORT&&(mt=i.RGB16I),et===i.INT&&(mt=i.RGB32I)),I===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),et===i.UNSIGNED_INT&&(mt=i.RGBA32UI),et===i.BYTE&&(mt=i.RGBA8I),et===i.SHORT&&(mt=i.RGBA16I),et===i.INT&&(mt=i.RGBA32I)),I===i.RGB&&et===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),I===i.RGBA){const Et=gt?na:Ae.getTransfer(ft);et===i.FLOAT&&(mt=i.RGBA32F),et===i.HALF_FLOAT&&(mt=i.RGBA16F),et===i.UNSIGNED_BYTE&&(mt=Et===Le?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function _(z,I){let et;return z?I===null||I===$i||I===Cs?et=i.DEPTH24_STENCIL8:I===Wn?et=i.DEPTH32F_STENCIL8:I===no&&(et=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===$i||I===Cs?et=i.DEPTH_COMPONENT24:I===Wn?et=i.DEPTH_COMPONENT32F:I===no&&(et=i.DEPTH_COMPONENT16),et}function A(z,I){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==wn&&z.minFilter!==Vn?Math.log2(Math.max(I.width,I.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?I.mipmaps.length:1}function b(z){const I=z.target;I.removeEventListener("dispose",b),E(I),I.isVideoTexture&&h.delete(I)}function S(z){const I=z.target;I.removeEventListener("dispose",S),x(I)}function E(z){const I=n.get(z);if(I.__webglInit===void 0)return;const et=z.source,ft=d.get(et);if(ft){const gt=ft[I.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&y(z),Object.keys(ft).length===0&&d.delete(et)}n.remove(z)}function y(z){const I=n.get(z);i.deleteTexture(I.__webglTexture);const et=z.source,ft=d.get(et);delete ft[I.__cacheKey],a.memory.textures--}function x(z){const I=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(I.__webglFramebuffer[ft]))for(let gt=0;gt<I.__webglFramebuffer[ft].length;gt++)i.deleteFramebuffer(I.__webglFramebuffer[ft][gt]);else i.deleteFramebuffer(I.__webglFramebuffer[ft]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[ft])}else{if(Array.isArray(I.__webglFramebuffer))for(let ft=0;ft<I.__webglFramebuffer.length;ft++)i.deleteFramebuffer(I.__webglFramebuffer[ft]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ft=0;ft<I.__webglColorRenderbuffer.length;ft++)I.__webglColorRenderbuffer[ft]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[ft]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const et=z.textures;for(let ft=0,gt=et.length;ft<gt;ft++){const mt=n.get(et[ft]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(et[ft])}n.remove(z)}let P=0;function C(){P=0}function R(){const z=P;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),P+=1,z}function L(z){const I=[];return I.push(z.wrapS),I.push(z.wrapT),I.push(z.wrapR||0),I.push(z.magFilter),I.push(z.minFilter),I.push(z.anisotropy),I.push(z.internalFormat),I.push(z.format),I.push(z.type),I.push(z.generateMipmaps),I.push(z.premultiplyAlpha),I.push(z.flipY),I.push(z.unpackAlignment),I.push(z.colorSpace),I.join()}function D(z,I){const et=n.get(z);if(z.isVideoTexture&&vt(z),z.isRenderTargetTexture===!1&&z.version>0&&et.__version!==z.version){const ft=z.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(et,z,I);return}}e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+I)}function k(z,I){const et=n.get(z);if(z.version>0&&et.__version!==z.version){W(et,z,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+I)}function B(z,I){const et=n.get(z);if(z.version>0&&et.__version!==z.version){W(et,z,I);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+I)}function F(z,I){const et=n.get(z);if(z.version>0&&et.__version!==z.version){O(et,z,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+I)}const H={[qn]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},V={[wn]:i.NEAREST,[Sh]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[Yo]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},Y={[td]:i.NEVER,[ad]:i.ALWAYS,[ed]:i.LESS,[Uh]:i.LEQUAL,[nd]:i.EQUAL,[od]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function Z(z,I){if(I.type===Wn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Vn||I.magFilter===Yo||I.magFilter===qs||I.magFilter===Mi||I.minFilter===Vn||I.minFilter===Yo||I.minFilter===qs||I.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,H[I.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,H[I.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,H[I.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,V[I.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,V[I.minFilter]),I.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,Y[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===wn||I.minFilter!==qs&&I.minFilter!==Mi||I.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function X(z,I){let et=!1;z.__webglInit===void 0&&(z.__webglInit=!0,I.addEventListener("dispose",b));const ft=I.source;let gt=d.get(ft);gt===void 0&&(gt={},d.set(ft,gt));const mt=L(I);if(mt!==z.__cacheKey){gt[mt]===void 0&&(gt[mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,et=!0),gt[mt].usedTimes++;const Et=gt[z.__cacheKey];Et!==void 0&&(gt[z.__cacheKey].usedTimes--,Et.usedTimes===0&&y(I)),z.__cacheKey=mt,z.__webglTexture=gt[mt].texture}return et}function W(z,I,et){let ft=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ft=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ft=i.TEXTURE_3D);const gt=X(z,I),mt=I.source;e.bindTexture(ft,z.__webglTexture,i.TEXTURE0+et);const Et=n.get(mt);if(mt.version!==Et.__version||gt===!0){e.activeTexture(i.TEXTURE0+et);const pt=Ae.getPrimaries(Ae.workingColorSpace),Ct=I.colorSpace===In?null:Ae.getPrimaries(I.colorSpace),Wt=I.colorSpace===In||pt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let xt=v(I.image,!1,s.maxTextureSize);xt=Lt(I,xt);const Rt=o.convert(I.format,I.colorSpace),qt=o.convert(I.type);let jt=w(I.internalFormat,Rt,qt,I.colorSpace,I.isVideoTexture);Z(ft,I);let kt;const Jt=I.mipmaps,Zt=I.isVideoTexture!==!0,ye=Et.__version===void 0||gt===!0,Q=mt.dataReady,It=A(I,xt);if(I.isDepthTexture)jt=_(I.format===Ps,I.type),ye&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,jt,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,jt,xt.width,xt.height,0,Rt,qt,null));else if(I.isDataTexture)if(Jt.length>0){Zt&&ye&&e.texStorage2D(i.TEXTURE_2D,It,jt,Jt[0].width,Jt[0].height);for(let ot=0,Mt=Jt.length;ot<Mt;ot++)kt=Jt[ot],Zt?Q&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,kt.width,kt.height,Rt,qt,kt.data):e.texImage2D(i.TEXTURE_2D,ot,jt,kt.width,kt.height,0,Rt,qt,kt.data);I.generateMipmaps=!1}else Zt?(ye&&e.texStorage2D(i.TEXTURE_2D,It,jt,xt.width,xt.height),Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt.width,xt.height,Rt,qt,xt.data)):e.texImage2D(i.TEXTURE_2D,0,jt,xt.width,xt.height,0,Rt,qt,xt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Zt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,jt,Jt[0].width,Jt[0].height,xt.depth);for(let ot=0,Mt=Jt.length;ot<Mt;ot++)if(kt=Jt[ot],I.format!==Tn)if(Rt!==null)if(Zt){if(Q)if(I.layerUpdates.size>0){const Ft=vc(kt.width,kt.height,I.format,I.type);for(const Pt of I.layerUpdates){const ne=kt.data.subarray(Pt*Ft/kt.data.BYTES_PER_ELEMENT,(Pt+1)*Ft/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Pt,kt.width,kt.height,1,Rt,ne)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,kt.width,kt.height,xt.depth,Rt,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,jt,kt.width,kt.height,xt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,kt.width,kt.height,xt.depth,Rt,qt,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,jt,kt.width,kt.height,xt.depth,0,Rt,qt,kt.data)}else{Zt&&ye&&e.texStorage2D(i.TEXTURE_2D,It,jt,Jt[0].width,Jt[0].height);for(let ot=0,Mt=Jt.length;ot<Mt;ot++)kt=Jt[ot],I.format!==Tn?Rt!==null?Zt?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,kt.width,kt.height,Rt,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,jt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?Q&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,kt.width,kt.height,Rt,qt,kt.data):e.texImage2D(i.TEXTURE_2D,ot,jt,kt.width,kt.height,0,Rt,qt,kt.data)}else if(I.isDataArrayTexture)if(Zt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,jt,xt.width,xt.height,xt.depth),Q)if(I.layerUpdates.size>0){const ot=vc(xt.width,xt.height,I.format,I.type);for(const Mt of I.layerUpdates){const Ft=xt.data.subarray(Mt*ot/xt.data.BYTES_PER_ELEMENT,(Mt+1)*ot/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,xt.width,xt.height,1,Rt,qt,Ft)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Rt,qt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,xt.width,xt.height,xt.depth,0,Rt,qt,xt.data);else if(I.isData3DTexture)Zt?(ye&&e.texStorage3D(i.TEXTURE_3D,It,jt,xt.width,xt.height,xt.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Rt,qt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,jt,xt.width,xt.height,xt.depth,0,Rt,qt,xt.data);else if(I.isFramebufferTexture){if(ye)if(Zt)e.texStorage2D(i.TEXTURE_2D,It,jt,xt.width,xt.height);else{let ot=xt.width,Mt=xt.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,jt,ot,Mt,0,Rt,qt,null),ot>>=1,Mt>>=1}}else if(Jt.length>0){if(Zt&&ye){const ot=yt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,It,jt,ot.width,ot.height)}for(let ot=0,Mt=Jt.length;ot<Mt;ot++)kt=Jt[ot],Zt?Q&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Rt,qt,kt):e.texImage2D(i.TEXTURE_2D,ot,jt,Rt,qt,kt);I.generateMipmaps=!1}else if(Zt){if(ye){const ot=yt(xt);e.texStorage2D(i.TEXTURE_2D,It,jt,ot.width,ot.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,qt,xt)}else e.texImage2D(i.TEXTURE_2D,0,jt,Rt,qt,xt);m(I)&&p(ft),Et.__version=mt.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function O(z,I,et){if(I.image.length!==6)return;const ft=X(z,I),gt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+et);const mt=n.get(gt);if(gt.version!==mt.__version||ft===!0){e.activeTexture(i.TEXTURE0+et);const Et=Ae.getPrimaries(Ae.workingColorSpace),pt=I.colorSpace===In?null:Ae.getPrimaries(I.colorSpace),Ct=I.colorSpace===In||Et===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Wt=I.isCompressedTexture||I.image[0].isCompressedTexture,xt=I.image[0]&&I.image[0].isDataTexture,Rt=[];for(let Mt=0;Mt<6;Mt++)!Wt&&!xt?Rt[Mt]=v(I.image[Mt],!0,s.maxCubemapSize):Rt[Mt]=xt?I.image[Mt].image:I.image[Mt],Rt[Mt]=Lt(I,Rt[Mt]);const qt=Rt[0],jt=o.convert(I.format,I.colorSpace),kt=o.convert(I.type),Jt=w(I.internalFormat,jt,kt,I.colorSpace),Zt=I.isVideoTexture!==!0,ye=mt.__version===void 0||ft===!0,Q=gt.dataReady;let It=A(I,qt);Z(i.TEXTURE_CUBE_MAP,I);let ot;if(Wt){Zt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Jt,qt.width,qt.height);for(let Mt=0;Mt<6;Mt++){ot=Rt[Mt].mipmaps;for(let Ft=0;Ft<ot.length;Ft++){const Pt=ot[Ft];I.format!==Tn?jt!==null?Zt?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,0,0,Pt.width,Pt.height,jt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,Jt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,0,0,Pt.width,Pt.height,jt,kt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,Jt,Pt.width,Pt.height,0,jt,kt,Pt.data)}}}else{if(ot=I.mipmaps,Zt&&ye){ot.length>0&&It++;const Mt=yt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Jt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(xt){Zt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Rt[Mt].width,Rt[Mt].height,jt,kt,Rt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Jt,Rt[Mt].width,Rt[Mt].height,0,jt,kt,Rt[Mt].data);for(let Ft=0;Ft<ot.length;Ft++){const ne=ot[Ft].image[Mt].image;Zt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,0,0,ne.width,ne.height,jt,kt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,Jt,ne.width,ne.height,0,jt,kt,ne.data)}}else{Zt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,jt,kt,Rt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Jt,jt,kt,Rt[Mt]);for(let Ft=0;Ft<ot.length;Ft++){const Pt=ot[Ft];Zt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,0,0,jt,kt,Pt.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,Jt,jt,kt,Pt.image[Mt])}}}m(I)&&p(i.TEXTURE_CUBE_MAP),mt.__version=gt.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function st(z,I,et,ft,gt,mt){const Et=o.convert(et.format,et.colorSpace),pt=o.convert(et.type),Ct=w(et.internalFormat,Et,pt,et.colorSpace),Wt=n.get(I),xt=n.get(et);if(xt.__renderTarget=I,!Wt.__hasExternalTextures){const Rt=Math.max(1,I.width>>mt),qt=Math.max(1,I.height>>mt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,mt,Ct,Rt,qt,I.depth,0,Et,pt,null):e.texImage2D(gt,mt,Ct,Rt,qt,0,Et,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),wt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,gt,xt.__webglTexture,0,dt(I)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ft,gt,xt.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(z,I,et){if(i.bindRenderbuffer(i.RENDERBUFFER,z),I.depthBuffer){const ft=I.depthTexture,gt=ft&&ft.isDepthTexture?ft.type:null,mt=_(I.stencilBuffer,gt),Et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=dt(I);wt(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,mt,I.width,I.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,mt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,mt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,z)}else{const ft=I.textures;for(let gt=0;gt<ft.length;gt++){const mt=ft[gt],Et=o.convert(mt.format,mt.colorSpace),pt=o.convert(mt.type),Ct=w(mt.internalFormat,Et,pt,mt.colorSpace),Wt=dt(I);et&&wt(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Ct,I.width,I.height):wt(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,Ct,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function j(z,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=n.get(I.depthTexture);ft.__renderTarget=I,(!ft.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),D(I.depthTexture,0);const gt=ft.__webglTexture,mt=dt(I);if(I.depthTexture.format===ws)wt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0);else if(I.depthTexture.format===Ps)wt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function K(z){const I=n.get(z),et=z.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==z.depthTexture){const ft=z.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),ft){const gt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,ft.removeEventListener("dispose",gt)};ft.addEventListener("dispose",gt),I.__depthDisposeCallback=gt}I.__boundDepthTexture=ft}if(z.depthTexture&&!I.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");j(I.__webglFramebuffer,z)}else if(et){I.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[ft]),I.__webglDepthbuffer[ft]===void 0)I.__webglDepthbuffer[ft]=i.createRenderbuffer(),at(I.__webglDepthbuffer[ft],z,!1);else{const gt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=I.__webglDepthbuffer[ft];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,mt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),at(I.__webglDepthbuffer,z,!1);else{const ft=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(z,I,et){const ft=n.get(z);I!==void 0&&st(ft.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&K(z)}function nt(z){const I=z.texture,et=n.get(z),ft=n.get(I);z.addEventListener("dispose",S);const gt=z.textures,mt=z.isWebGLCubeRenderTarget===!0,Et=gt.length>1;if(Et||(ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture()),ft.__version=I.version,a.memory.textures++),mt){et.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(I.mipmaps&&I.mipmaps.length>0){et.__webglFramebuffer[pt]=[];for(let Ct=0;Ct<I.mipmaps.length;Ct++)et.__webglFramebuffer[pt][Ct]=i.createFramebuffer()}else et.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){et.__webglFramebuffer=[];for(let pt=0;pt<I.mipmaps.length;pt++)et.__webglFramebuffer[pt]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(Et)for(let pt=0,Ct=gt.length;pt<Ct;pt++){const Wt=n.get(gt[pt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(z.samples>0&&wt(z)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let pt=0;pt<gt.length;pt++){const Ct=gt[pt];et.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[pt]);const Wt=o.convert(Ct.format,Ct.colorSpace),xt=o.convert(Ct.type),Rt=w(Ct.internalFormat,Wt,xt,Ct.colorSpace,z.isXRRenderTarget===!0),qt=dt(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Rt,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,et.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),at(et.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),Z(i.TEXTURE_CUBE_MAP,I);for(let pt=0;pt<6;pt++)if(I.mipmaps&&I.mipmaps.length>0)for(let Ct=0;Ct<I.mipmaps.length;Ct++)st(et.__webglFramebuffer[pt][Ct],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct);else st(et.__webglFramebuffer[pt],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(I)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let pt=0,Ct=gt.length;pt<Ct;pt++){const Wt=gt[pt],xt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,xt.__webglTexture),Z(i.TEXTURE_2D,Wt),st(et.__webglFramebuffer,z,Wt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(pt=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,ft.__webglTexture),Z(pt,I),I.mipmaps&&I.mipmaps.length>0)for(let Ct=0;Ct<I.mipmaps.length;Ct++)st(et.__webglFramebuffer[Ct],z,I,i.COLOR_ATTACHMENT0,pt,Ct);else st(et.__webglFramebuffer,z,I,i.COLOR_ATTACHMENT0,pt,0);m(I)&&p(pt),e.unbindTexture()}z.depthBuffer&&K(z)}function _t(z){const I=z.textures;for(let et=0,ft=I.length;et<ft;et++){const gt=I[et];if(m(gt)){const mt=M(z),Et=n.get(gt).__webglTexture;e.bindTexture(mt,Et),p(mt),e.unbindTexture()}}}const J=[],U=[];function rt(z){if(z.samples>0){if(wt(z)===!1){const I=z.textures,et=z.width,ft=z.height;let gt=i.COLOR_BUFFER_BIT;const mt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(z),pt=I.length>1;if(pt)for(let Ct=0;Ct<I.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ct=0;Ct<I.length;Ct++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Ct]);const Wt=n.get(I[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,et,ft,0,0,et,ft,gt,i.NEAREST),l===!0&&(J.length=0,U.length=0,J.push(i.COLOR_ATTACHMENT0+Ct),z.depthBuffer&&z.resolveDepthBuffer===!1&&(J.push(mt),U.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Ct=0;Ct<I.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Ct]);const Wt=n.get(I[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){const I=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function dt(z){return Math.min(s.maxSamples,z.samples)}function wt(z){const I=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function vt(z){const I=a.render.frame;h.get(z)!==I&&(h.set(z,I),z.update())}function Lt(z,I){const et=z.colorSpace,ft=z.format,gt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||et!==Rs&&et!==In&&(Ae.getTransfer(et)===Le?(ft!==Tn||gt!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),I}function yt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=C,this.setTexture2D=D,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=F,this.rebindTextures=G,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=st,this.useMultisampledRTT=wt}function Zg(i,t){function e(n,s=In){let o;const a=Ae.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.BYTE;if(n===Eh)return i.SHORT;if(n===no)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ph)return i.RGB;if(n===Tn)return i.RGBA;if(n===Rh)return i.LUMINANCE;if(n===Lh)return i.LUMINANCE_ALPHA;if(n===ws)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===cl)return i.RED_INTEGER;if(n===Ih)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===$o||n===qo||n===jo||n===Zo)if(a===Le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===$o)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===$o)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===br||n===Sr||n===Ar||n===Er)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===br)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ar)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Er)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tr||n===Cr||n===Pr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Tr||n===Cr)return a===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Pr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rr||n===Lr||n===Ir||n===Dr||n===Fr||n===Ur||n===Nr||n===kr||n===Br||n===zr||n===Or||n===Hr||n===Vr||n===Wr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Rr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ir)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ur)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Br)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Or)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===Gr||n===Xr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ko)return a===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dh||n===Yr||n===$r||n===qr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ko)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Yr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`;class Jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new hn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qe({vertexShader:Kg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t1 extends qi{constructor(t,e){super();const n=this;let s=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new Jg,m=e.getContextAttributes();let p=null,M=null;const w=[],_=[],A=new Bt;let b=null;const S=new Ln;S.viewport=new ke;const E=new Ln;E.viewport=new ke;const y=[S,E],x=new cp;let P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let O=w[W];return O===void 0&&(O=new Va,w[W]=O),O.getTargetRaySpace()},this.getControllerGrip=function(W){let O=w[W];return O===void 0&&(O=new Va,w[W]=O),O.getGripSpace()},this.getHand=function(W){let O=w[W];return O===void 0&&(O=new Va,w[W]=O),O.getHandSpace()};function R(W){const O=_.indexOf(W.inputSource);if(O===-1)return;const st=w[O];st!==void 0&&(st.update(W.inputSource,W.frame,c||a),st.dispatchEvent({type:W.type,data:W.inputSource}))}function L(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",D);for(let W=0;W<w.length;W++){const O=_[W];O!==null&&(_[W]=null,w[W].disconnect(O))}P=null,C=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,X.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",L),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,at=null,j=null;m.depth&&(j=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Ps:ws,at=m.stencil?Cs:$i);const K={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(K),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Dn(d.textureWidth,d.textureHeight,{format:Tn,type:ci,depthTexture:new Xh(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Dn(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(r),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function D(W){for(let O=0;O<W.removed.length;O++){const st=W.removed[O],at=_.indexOf(st);at>=0&&(_[at]=null,w[at].disconnect(st))}for(let O=0;O<W.added.length;O++){const st=W.added[O];let at=_.indexOf(st);if(at===-1){for(let K=0;K<w.length;K++)if(K>=_.length){_.push(st),at=K;break}else if(_[K]===null){_[K]=st,at=K;break}if(at===-1)break}const j=w[at];j&&j.connect(st)}}const k=new T,B=new T;function F(W,O,st){k.setFromMatrixPosition(O.matrixWorld),B.setFromMatrixPosition(st.matrixWorld);const at=k.distanceTo(B),j=O.projectionMatrix.elements,K=st.projectionMatrix.elements,G=j[14]/(j[10]-1),nt=j[14]/(j[10]+1),_t=(j[9]+1)/j[5],J=(j[9]-1)/j[5],U=(j[8]-1)/j[0],rt=(K[8]+1)/K[0],dt=G*U,wt=G*rt,vt=at/(-U+rt),Lt=vt*-U;if(O.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Lt),W.translateZ(vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),j[10]===-1)W.projectionMatrix.copy(O.projectionMatrix),W.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const yt=G+vt,z=nt+vt,I=dt-Lt,et=wt+(at-Lt),ft=_t*nt/z*yt,gt=J*nt/z*yt;W.projectionMatrix.makePerspective(I,et,ft,gt,yt,z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function H(W,O){O===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(O.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let O=W.near,st=W.far;v.texture!==null&&(v.depthNear>0&&(O=v.depthNear),v.depthFar>0&&(st=v.depthFar)),x.near=E.near=S.near=O,x.far=E.far=S.far=st,(P!==x.near||C!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,C=x.far),S.layers.mask=W.layers.mask|2,E.layers.mask=W.layers.mask|4,x.layers.mask=S.layers.mask|E.layers.mask;const at=W.parent,j=x.cameras;H(x,at);for(let K=0;K<j.length;K++)H(j[K],at);j.length===2?F(x,S,E):x.projectionMatrix.copy(S.projectionMatrix),V(W,x,at)};function V(W,O,st){st===null?W.matrix.copy(O.matrixWorld):(W.matrix.copy(st.matrixWorld),W.matrix.invert(),W.matrix.multiply(O.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(O.projectionMatrix),W.projectionMatrixInverse.copy(O.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=io*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Y=null;function Z(W,O){if(h=O.getViewerPose(c||a),g=O,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let at=!1;st.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let G=0;G<st.length;G++){const nt=st[G];let _t=null;if(f!==null)_t=f.getViewport(nt);else{const U=u.getViewSubImage(d,nt);_t=U.viewport,G===0&&(t.setRenderTargetTextures(M,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(M))}let J=y[G];J===void 0&&(J=new Ln,J.layers.enable(G),J.viewport=new ke,y[G]=J),J.matrix.fromArray(nt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(nt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(_t.x,_t.y,_t.width,_t.height),G===0&&(x.matrix.copy(J.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(J)}const j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const G=u.getDepthInformation(st[0]);G&&G.isValid&&G.texture&&v.init(t,G,s.renderState)}}for(let st=0;st<w.length;st++){const at=_[st],j=w[st];at!==null&&j!==void 0&&j.update(at,O,c||a)}Y&&Y(W,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}const X=new qh;X.setAnimationLoop(Z),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}}const ki=new yn,e1=new ee;function n1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),w=M.envMap,_=M.envMapRotation;w&&(m.envMap.value=w,ki.copy(_),ki.x*=-1,ki.y*=-1,ki.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(ki)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i1(i,t,e,n){let s={},o={},a=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const _=w.program;n.uniformBlockBinding(M,_)}function c(M,w){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const A=w.program;n.updateUBOMapping(M,A);const b=t.render.frame;o[M.id]!==b&&(d(M),o[M.id]=b)}function h(M){const w=u();M.__bindingPointIndex=w;const _=i.createBuffer(),A=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,_),_}function u(){for(let M=0;M<r;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const w=s[M.id],_=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let b=0,S=_.length;b<S;b++){const E=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,x=E.length;y<x;y++){const P=E[y];if(f(P,b,y,A)===!0){const C=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let D=0;D<R.length;D++){const k=R[D],B=v(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,C+L,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,L),L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,_,A){const b=M.value,S=w+"_"+_;if(A[S]===void 0)return typeof b=="number"||typeof b=="boolean"?A[S]=b:A[S]=b.clone(),!0;{const E=A[S];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return A[S]=b,!0}else if(E.equals(b)===!1)return E.copy(b),!0}return!1}function g(M){const w=M.uniforms;let _=0;const A=16;for(let S=0,E=w.length;S<E;S++){const y=Array.isArray(w[S])?w[S]:[w[S]];for(let x=0,P=y.length;x<P;x++){const C=y[x],R=Array.isArray(C.value)?C.value:[C.value];for(let L=0,D=R.length;L<D;L++){const k=R[L],B=v(k),F=_%A,H=F%B.boundary,V=F+H;_+=H,V!==0&&A-V<B.storage&&(_+=A-V),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=B.storage}}}const b=_%A;return b>0&&(_+=A-b),M.__size=_,M.__cache={},this}function v(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){const w=M.target;w.removeEventListener("dispose",m);const _=a.indexOf(w.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},o={}}return{bind:l,update:c,dispose:p}}class s1{constructor(t={}){const{canvas:e=bd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=yi,this.toneMappingExposure=1;const _=this;let A=!1,b=0,S=0,E=null,y=-1,x=null;const P=new ke,C=new ke;let R=null;const L=new Dt(0);let D=0,k=e.width,B=e.height,F=1,H=null,V=null;const Y=new ke(0,0,k,B),Z=new ke(0,0,k,B);let X=!1;const W=new gl;let O=!1,st=!1;this.transmissionResolutionScale=1;const at=new ee,j=new ee,K=new T,G=new ke,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function J(){return E===null?F:1}let U=n;function rt(N,tt){return e.getContext(N,tt)}try{const N={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pa}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),U===null){const tt="webgl2";if(U=rt(tt,N),U===null)throw rt(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let dt,wt,vt,Lt,yt,z,I,et,ft,gt,mt,Et,pt,Ct,Wt,xt,Rt,qt,jt,kt,Jt,Zt,ye,Q;function It(){dt=new fm(U),dt.init(),Zt=new Zg(U,dt),wt=new rm(U,dt,t,Zt),vt=new qg(U,dt),wt.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),Lt=new _m(U),yt=new Ug,z=new jg(U,dt,vt,yt,wt,Zt,Lt),I=new cm(_),et=new pm(_),ft=new yp(U),ye=new om(U,ft),gt=new mm(U,ft,Lt,ye),mt=new xm(U,gt,ft,Lt),jt=new vm(U,wt,z),xt=new lm(yt),Et=new Fg(_,I,et,dt,wt,ye,xt),pt=new n1(_,yt),Ct=new kg,Wt=new Wg(dt),qt=new sm(_,I,et,vt,mt,f,l),Rt=new Yg(_,mt,wt),Q=new i1(U,Lt,wt,vt),kt=new am(U,dt,Lt),Jt=new gm(U,dt,Lt),Lt.programs=Et.programs,_.capabilities=wt,_.extensions=dt,_.properties=yt,_.renderLists=Ct,_.shadowMap=Rt,_.state=vt,_.info=Lt}It();const ot=new t1(_,U);this.xr=ot,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const N=dt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=dt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(N){N!==void 0&&(F=N,this.setSize(k,B,!1))},this.getSize=function(N){return N.set(k,B)},this.setSize=function(N,tt,ht=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=N,B=tt,e.width=Math.floor(N*F),e.height=Math.floor(tt*F),ht===!0&&(e.style.width=N+"px",e.style.height=tt+"px"),this.setViewport(0,0,N,tt)},this.getDrawingBufferSize=function(N){return N.set(k*F,B*F).floor()},this.setDrawingBufferSize=function(N,tt,ht){k=N,B=tt,F=ht,e.width=Math.floor(N*ht),e.height=Math.floor(tt*ht),this.setViewport(0,0,N,tt)},this.getCurrentViewport=function(N){return N.copy(P)},this.getViewport=function(N){return N.copy(Y)},this.setViewport=function(N,tt,ht,ut){N.isVector4?Y.set(N.x,N.y,N.z,N.w):Y.set(N,tt,ht,ut),vt.viewport(P.copy(Y).multiplyScalar(F).round())},this.getScissor=function(N){return N.copy(Z)},this.setScissor=function(N,tt,ht,ut){N.isVector4?Z.set(N.x,N.y,N.z,N.w):Z.set(N,tt,ht,ut),vt.scissor(C.copy(Z).multiplyScalar(F).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(N){vt.setScissorTest(X=N)},this.setOpaqueSort=function(N){H=N},this.setTransparentSort=function(N){V=N},this.getClearColor=function(N){return N.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(N=!0,tt=!0,ht=!0){let ut=0;if(N){let it=!1;if(E!==null){const St=E.texture.format;it=St===ul||St===hl||St===cl}if(it){const St=E.texture.type,Ut=St===ci||St===$i||St===no||St===Cs||St===al||St===rl,Ht=qt.getClearColor(),Vt=qt.getClearAlpha(),oe=Ht.r,ie=Ht.g,Kt=Ht.b;Ut?(g[0]=oe,g[1]=ie,g[2]=Kt,g[3]=Vt,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=oe,v[1]=ie,v[2]=Kt,v[3]=Vt,U.clearBufferiv(U.COLOR,0,v))}else ut|=U.COLOR_BUFFER_BIT}tt&&(ut|=U.DEPTH_BUFFER_BIT),ht&&(ut|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),qt.dispose(),Ct.dispose(),Wt.dispose(),yt.dispose(),I.dispose(),et.dispose(),mt.dispose(),ye.dispose(),Q.dispose(),Et.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",te),ot.removeEventListener("sessionend",se),Ot.stop()};function Mt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const N=Lt.autoReset,tt=Rt.enabled,ht=Rt.autoUpdate,ut=Rt.needsUpdate,it=Rt.type;It(),Lt.autoReset=N,Rt.enabled=tt,Rt.autoUpdate=ht,Rt.needsUpdate=ut,Rt.type=it}function Pt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ne(N){const tt=N.target;tt.removeEventListener("dispose",ne),Re(tt)}function Re(N){We(N),yt.remove(N)}function We(N){const tt=yt.get(N).programs;tt!==void 0&&(tt.forEach(function(ht){Et.releaseProgram(ht)}),N.isShaderMaterial&&Et.releaseShaderCache(N))}this.renderBufferDirect=function(N,tt,ht,ut,it,St){tt===null&&(tt=nt);const Ut=it.isMesh&&it.matrixWorld.determinant()<0,Ht=bn(N,tt,ht,ut,it);vt.setMaterial(ut,Ut);let Vt=ht.index,oe=1;if(ut.wireframe===!0){if(Vt=gt.getWireframeAttribute(ht),Vt===void 0)return;oe=2}const ie=ht.drawRange,Kt=ht.attributes.position;let Me=ie.start*oe,Ee=(ie.start+ie.count)*oe;St!==null&&(Me=Math.max(Me,St.start*oe),Ee=Math.min(Ee,(St.start+St.count)*oe)),Vt!==null?(Me=Math.max(Me,0),Ee=Math.min(Ee,Vt.count)):Kt!=null&&(Me=Math.max(Me,0),Ee=Math.min(Ee,Kt.count));const Xe=Ee-Me;if(Xe<0||Xe===1/0)return;ye.setup(it,ut,Ht,ht,Vt);let Ne,me=kt;if(Vt!==null&&(Ne=ft.get(Vt),me=Jt,me.setIndex(Ne)),it.isMesh)ut.wireframe===!0?(vt.setLineWidth(ut.wireframeLinewidth*J()),me.setMode(U.LINES)):me.setMode(U.TRIANGLES);else if(it.isLine){let $t=ut.linewidth;$t===void 0&&($t=1),vt.setLineWidth($t*J()),it.isLineSegments?me.setMode(U.LINES):it.isLineLoop?me.setMode(U.LINE_LOOP):me.setMode(U.LINE_STRIP)}else it.isPoints?me.setMode(U.POINTS):it.isSprite&&me.setMode(U.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))me.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const $t=it._multiDrawStarts,He=it._multiDrawCounts,Se=it._multiDrawCount,De=Vt?ft.get(Vt).bytesPerElement:1,Ri=yt.get(ut).currentProgram.getUniforms();for(let lt=0;lt<Se;lt++)Ri.setValue(U,"_gl_DrawID",lt),me.render($t[lt]/De,He[lt])}else if(it.isInstancedMesh)me.renderInstances(Me,Xe,it.count);else if(ht.isInstancedBufferGeometry){const $t=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,He=Math.min(ht.instanceCount,$t);me.renderInstances(Me,Xe,He)}else me.render(Me,Xe)};function ct(N,tt,ht){N.transparent===!0&&N.side===ln&&N.forceSinglePass===!1?(N.side=vn,N.needsUpdate=!0,Ge(N,tt,ht),N.side=Ei,N.needsUpdate=!0,Ge(N,tt,ht),N.side=ln):Ge(N,tt,ht)}this.compile=function(N,tt,ht=null){ht===null&&(ht=N),p=Wt.get(ht),p.init(tt),w.push(p),ht.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(p.pushLight(it),it.castShadow&&p.pushShadow(it))}),N!==ht&&N.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(p.pushLight(it),it.castShadow&&p.pushShadow(it))}),p.setupLights();const ut=new Set;return N.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const St=it.material;if(St)if(Array.isArray(St))for(let Ut=0;Ut<St.length;Ut++){const Ht=St[Ut];ct(Ht,ht,it),ut.add(Ht)}else ct(St,ht,it),ut.add(St)}),p=w.pop(),ut},this.compileAsync=function(N,tt,ht=null){const ut=this.compile(N,tt,ht);return new Promise(it=>{function St(){if(ut.forEach(function(Ut){yt.get(Ut).currentProgram.isReady()&&ut.delete(Ut)}),ut.size===0){it(N);return}setTimeout(St,10)}dt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let bt=null;function zt(N){bt&&bt(N)}function te(){Ot.stop()}function se(){Ot.start()}const Ot=new qh;Ot.setAnimationLoop(zt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(N){bt=N,ot.setAnimationLoop(N),N===null?Ot.stop():Ot.start()},ot.addEventListener("sessionstart",te),ot.addEventListener("sessionend",se),this.render=function(N,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(tt),tt=ot.getCamera()),N.isScene===!0&&N.onBeforeRender(_,N,tt,E),p=Wt.get(N,w.length),p.init(tt),w.push(p),j.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),W.setFromProjectionMatrix(j),st=this.localClippingEnabled,O=xt.init(this.clippingPlanes,st),m=Ct.get(N,M.length),m.init(),M.push(m),ot.enabled===!0&&ot.isPresenting===!0){const St=_.xr.getDepthSensingMesh();St!==null&&ce(St,tt,-1/0,_.sortObjects)}ce(N,tt,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(H,V),_t=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,_t&&qt.addToRenderList(m,N),this.info.render.frame++,O===!0&&xt.beginShadows();const ht=p.state.shadowsArray;Rt.render(ht,N,tt),O===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=m.opaque,it=m.transmissive;if(p.setupLights(),tt.isArrayCamera){const St=tt.cameras;if(it.length>0)for(let Ut=0,Ht=St.length;Ut<Ht;Ut++){const Vt=St[Ut];Ce(ut,it,N,Vt)}_t&&qt.render(N);for(let Ut=0,Ht=St.length;Ut<Ht;Ut++){const Vt=St[Ut];re(m,N,Vt,Vt.viewport)}}else it.length>0&&Ce(ut,it,N,tt),_t&&qt.render(N),re(m,N,tt);E!==null&&S===0&&(z.updateMultisampleRenderTarget(E),z.updateRenderTargetMipmap(E)),N.isScene===!0&&N.onAfterRender(_,N,tt),ye.resetDefaultState(),y=-1,x=null,w.pop(),w.length>0?(p=w[w.length-1],O===!0&&xt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ce(N,tt,ht,ut){if(N.visible===!1)return;if(N.layers.test(tt.layers)){if(N.isGroup)ht=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(tt);else if(N.isLight)p.pushLight(N),N.castShadow&&p.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||W.intersectsSprite(N)){ut&&G.setFromMatrixPosition(N.matrixWorld).applyMatrix4(j);const Ut=mt.update(N),Ht=N.material;Ht.visible&&m.push(N,Ut,Ht,ht,G.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||W.intersectsObject(N))){const Ut=mt.update(N),Ht=N.material;if(ut&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),G.copy(N.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),G.copy(Ut.boundingSphere.center)),G.applyMatrix4(N.matrixWorld).applyMatrix4(j)),Array.isArray(Ht)){const Vt=Ut.groups;for(let oe=0,ie=Vt.length;oe<ie;oe++){const Kt=Vt[oe],Me=Ht[Kt.materialIndex];Me&&Me.visible&&m.push(N,Ut,Me,ht,G.z,Kt)}}else Ht.visible&&m.push(N,Ut,Ht,ht,G.z,null)}}const St=N.children;for(let Ut=0,Ht=St.length;Ut<Ht;Ut++)ce(St[Ut],tt,ht,ut)}function re(N,tt,ht,ut){const it=N.opaque,St=N.transmissive,Ut=N.transparent;p.setupLightsView(ht),O===!0&&xt.setGlobalState(_.clippingPlanes,ht),ut&&vt.viewport(P.copy(ut)),it.length>0&&Ie(it,tt,ht),St.length>0&&Ie(St,tt,ht),Ut.length>0&&Ie(Ut,tt,ht),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Ce(N,tt,ht,ut){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ut.id]===void 0&&(p.state.transmissionRenderTarget[ut.id]=new Dn(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?$n:ci,minFilter:Mi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const St=p.state.transmissionRenderTarget[ut.id],Ut=ut.viewport||P;St.setSize(Ut.z*_.transmissionResolutionScale,Ut.w*_.transmissionResolutionScale);const Ht=_.getRenderTarget();_.setRenderTarget(St),_.getClearColor(L),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),_t&&qt.render(ht);const Vt=_.toneMapping;_.toneMapping=yi;const oe=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),p.setupLightsView(ut),O===!0&&xt.setGlobalState(_.clippingPlanes,ut),Ie(N,ht,ut),z.updateMultisampleRenderTarget(St),z.updateRenderTargetMipmap(St),dt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Kt=0,Me=tt.length;Kt<Me;Kt++){const Ee=tt[Kt],Xe=Ee.object,Ne=Ee.geometry,me=Ee.material,$t=Ee.group;if(me.side===ln&&Xe.layers.test(ut.layers)){const He=me.side;me.side=vn,me.needsUpdate=!0,nn(Xe,ht,ut,Ne,me,$t),me.side=He,me.needsUpdate=!0,ie=!0}}ie===!0&&(z.updateMultisampleRenderTarget(St),z.updateRenderTargetMipmap(St))}_.setRenderTarget(Ht),_.setClearColor(L,D),oe!==void 0&&(ut.viewport=oe),_.toneMapping=Vt}function Ie(N,tt,ht){const ut=tt.isScene===!0?tt.overrideMaterial:null;for(let it=0,St=N.length;it<St;it++){const Ut=N[it],Ht=Ut.object,Vt=Ut.geometry,oe=ut===null?Ut.material:ut,ie=Ut.group;Ht.layers.test(ht.layers)&&nn(Ht,tt,ht,Vt,oe,ie)}}function nn(N,tt,ht,ut,it,St){N.onBeforeRender(_,tt,ht,ut,it,St),N.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),it.onBeforeRender(_,tt,ht,ut,N,St),it.transparent===!0&&it.side===ln&&it.forceSinglePass===!1?(it.side=vn,it.needsUpdate=!0,_.renderBufferDirect(ht,tt,ut,it,N,St),it.side=Ei,it.needsUpdate=!0,_.renderBufferDirect(ht,tt,ut,it,N,St),it.side=ln):_.renderBufferDirect(ht,tt,ut,it,N,St),N.onAfterRender(_,tt,ht,ut,it,St)}function Ge(N,tt,ht){tt.isScene!==!0&&(tt=nt);const ut=yt.get(N),it=p.state.lights,St=p.state.shadowsArray,Ut=it.state.version,Ht=Et.getParameters(N,it.state,St,tt,ht),Vt=Et.getProgramCacheKey(Ht);let oe=ut.programs;ut.environment=N.isMeshStandardMaterial?tt.environment:null,ut.fog=tt.fog,ut.envMap=(N.isMeshStandardMaterial?et:I).get(N.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&N.envMap===null?tt.environmentRotation:N.envMapRotation,oe===void 0&&(N.addEventListener("dispose",ne),oe=new Map,ut.programs=oe);let ie=oe.get(Vt);if(ie!==void 0){if(ut.currentProgram===ie&&ut.lightsStateVersion===Ut)return sn(N,Ht),ie}else Ht.uniforms=Et.getUniforms(N),N.onBeforeCompile(Ht,_),ie=Et.acquireProgram(Ht,Vt),oe.set(Vt,ie),ut.uniforms=Ht.uniforms;const Kt=ut.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Kt.clippingPlanes=xt.uniform),sn(N,Ht),ut.needsLights=Pn(N),ut.lightsStateVersion=Ut,ut.needsLights&&(Kt.ambientLightColor.value=it.state.ambient,Kt.lightProbe.value=it.state.probe,Kt.directionalLights.value=it.state.directional,Kt.directionalLightShadows.value=it.state.directionalShadow,Kt.spotLights.value=it.state.spot,Kt.spotLightShadows.value=it.state.spotShadow,Kt.rectAreaLights.value=it.state.rectArea,Kt.ltc_1.value=it.state.rectAreaLTC1,Kt.ltc_2.value=it.state.rectAreaLTC2,Kt.pointLights.value=it.state.point,Kt.pointLightShadows.value=it.state.pointShadow,Kt.hemisphereLights.value=it.state.hemi,Kt.directionalShadowMap.value=it.state.directionalShadowMap,Kt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Kt.spotShadowMap.value=it.state.spotShadowMap,Kt.spotLightMatrix.value=it.state.spotLightMatrix,Kt.spotLightMap.value=it.state.spotLightMap,Kt.pointShadowMap.value=it.state.pointShadowMap,Kt.pointShadowMatrix.value=it.state.pointShadowMatrix),ut.currentProgram=ie,ut.uniformsList=null,ie}function Ue(N){if(N.uniformsList===null){const tt=N.currentProgram.getUniforms();N.uniformsList=Qo.seqWithValue(tt.seq,N.uniforms)}return N.uniformsList}function sn(N,tt){const ht=yt.get(N);ht.outputColorSpace=tt.outputColorSpace,ht.batching=tt.batching,ht.batchingColor=tt.batchingColor,ht.instancing=tt.instancing,ht.instancingColor=tt.instancingColor,ht.instancingMorph=tt.instancingMorph,ht.skinning=tt.skinning,ht.morphTargets=tt.morphTargets,ht.morphNormals=tt.morphNormals,ht.morphColors=tt.morphColors,ht.morphTargetsCount=tt.morphTargetsCount,ht.numClippingPlanes=tt.numClippingPlanes,ht.numIntersection=tt.numClipIntersection,ht.vertexAlphas=tt.vertexAlphas,ht.vertexTangents=tt.vertexTangents,ht.toneMapping=tt.toneMapping}function bn(N,tt,ht,ut,it){tt.isScene!==!0&&(tt=nt),z.resetTextureUnits();const St=tt.fog,Ut=ut.isMeshStandardMaterial?tt.environment:null,Ht=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Rs,Vt=(ut.isMeshStandardMaterial?et:I).get(ut.envMap||Ut),oe=ut.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ie=!!ht.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Kt=!!ht.morphAttributes.position,Me=!!ht.morphAttributes.normal,Ee=!!ht.morphAttributes.color;let Xe=yi;ut.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Xe=_.toneMapping);const Ne=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,me=Ne!==void 0?Ne.length:0,$t=yt.get(ut),He=p.state.lights;if(O===!0&&(st===!0||N!==x)){const _e=N===x&&ut.id===y;xt.setState(ut,N,_e)}let Se=!1;ut.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==He.state.version||$t.outputColorSpace!==Ht||it.isBatchedMesh&&$t.batching===!1||!it.isBatchedMesh&&$t.batching===!0||it.isBatchedMesh&&$t.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&$t.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&$t.instancing===!1||!it.isInstancedMesh&&$t.instancing===!0||it.isSkinnedMesh&&$t.skinning===!1||!it.isSkinnedMesh&&$t.skinning===!0||it.isInstancedMesh&&$t.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&$t.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&$t.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&$t.instancingMorph===!1&&it.morphTexture!==null||$t.envMap!==Vt||ut.fog===!0&&$t.fog!==St||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==xt.numPlanes||$t.numIntersection!==xt.numIntersection)||$t.vertexAlphas!==oe||$t.vertexTangents!==ie||$t.morphTargets!==Kt||$t.morphNormals!==Me||$t.morphColors!==Ee||$t.toneMapping!==Xe||$t.morphTargetsCount!==me)&&(Se=!0):(Se=!0,$t.__version=ut.version);let De=$t.currentProgram;Se===!0&&(De=Ge(ut,tt,it));let Ri=!1,lt=!1,Tt=!1;const At=De.getUniforms(),Gt=$t.uniforms;if(vt.useProgram(De.program)&&(Ri=!0,lt=!0,Tt=!0),ut.id!==y&&(y=ut.id,lt=!0),Ri||x!==N){vt.buffers.depth.getReversed()?(at.copy(N.projectionMatrix),Ad(at),Ed(at),At.setValue(U,"projectionMatrix",at)):At.setValue(U,"projectionMatrix",N.projectionMatrix),At.setValue(U,"viewMatrix",N.matrixWorldInverse);const be=At.map.cameraPosition;be!==void 0&&be.setValue(U,K.setFromMatrixPosition(N.matrixWorld)),wt.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&At.setValue(U,"isOrthographic",N.isOrthographicCamera===!0),x!==N&&(x=N,lt=!0,Tt=!0)}if(it.isSkinnedMesh){At.setOptional(U,it,"bindMatrix"),At.setOptional(U,it,"bindMatrixInverse");const _e=it.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),At.setValue(U,"boneTexture",_e.boneTexture,z))}it.isBatchedMesh&&(At.setOptional(U,it,"batchingTexture"),At.setValue(U,"batchingTexture",it._matricesTexture,z),At.setOptional(U,it,"batchingIdTexture"),At.setValue(U,"batchingIdTexture",it._indirectTexture,z),At.setOptional(U,it,"batchingColorTexture"),it._colorsTexture!==null&&At.setValue(U,"batchingColorTexture",it._colorsTexture,z));const ge=ht.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0)&&jt.update(it,ht,De),(lt||$t.receiveShadow!==it.receiveShadow)&&($t.receiveShadow=it.receiveShadow,At.setValue(U,"receiveShadow",it.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Gt.envMap.value=Vt,Gt.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&tt.environment!==null&&(Gt.envMapIntensity.value=tt.environmentIntensity),lt&&(At.setValue(U,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&cn(Gt,Tt),St&&ut.fog===!0&&pt.refreshFogUniforms(Gt,St),pt.refreshMaterialUniforms(Gt,ut,F,B,p.state.transmissionRenderTarget[N.id]),Qo.upload(U,Ue($t),Gt,z)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Qo.upload(U,Ue($t),Gt,z),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&At.setValue(U,"center",it.center),At.setValue(U,"modelViewMatrix",it.modelViewMatrix),At.setValue(U,"normalMatrix",it.normalMatrix),At.setValue(U,"modelMatrix",it.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const _e=ut.uniformsGroups;for(let be=0,Ye=_e.length;be<Ye;be++){const $e=_e[be];Q.update($e,De),Q.bind($e,De)}}return De}function cn(N,tt){N.ambientLightColor.needsUpdate=tt,N.lightProbe.needsUpdate=tt,N.directionalLights.needsUpdate=tt,N.directionalLightShadows.needsUpdate=tt,N.pointLights.needsUpdate=tt,N.pointLightShadows.needsUpdate=tt,N.spotLights.needsUpdate=tt,N.spotLightShadows.needsUpdate=tt,N.rectAreaLights.needsUpdate=tt,N.hemisphereLights.needsUpdate=tt}function Pn(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(N,tt,ht){yt.get(N.texture).__webglTexture=tt,yt.get(N.depthTexture).__webglTexture=ht;const ut=yt.get(N);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=ht===void 0,ut.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,tt){const ht=yt.get(N);ht.__webglFramebuffer=tt,ht.__useDefaultFramebuffer=tt===void 0};const Zi=U.createFramebuffer();this.setRenderTarget=function(N,tt=0,ht=0){E=N,b=tt,S=ht;let ut=!0,it=null,St=!1,Ut=!1;if(N){const Vt=yt.get(N);if(Vt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(U.FRAMEBUFFER,null),ut=!1;else if(Vt.__webglFramebuffer===void 0)z.setupRenderTarget(N);else if(Vt.__hasExternalTextures)z.rebindTextures(N,yt.get(N.texture).__webglTexture,yt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Kt=N.depthTexture;if(Vt.__boundDepthTexture!==Kt){if(Kt!==null&&yt.has(Kt)&&(N.width!==Kt.image.width||N.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(N)}}const oe=N.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Ut=!0);const ie=yt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ie[tt])?it=ie[tt][ht]:it=ie[tt],St=!0):N.samples>0&&z.useMultisampledRTT(N)===!1?it=yt.get(N).__webglMultisampledFramebuffer:Array.isArray(ie)?it=ie[ht]:it=ie,P.copy(N.viewport),C.copy(N.scissor),R=N.scissorTest}else P.copy(Y).multiplyScalar(F).floor(),C.copy(Z).multiplyScalar(F).floor(),R=X;if(ht!==0&&(it=Zi),vt.bindFramebuffer(U.FRAMEBUFFER,it)&&ut&&vt.drawBuffers(N,it),vt.viewport(P),vt.scissor(C),vt.setScissorTest(R),St){const Vt=yt.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Vt.__webglTexture,ht)}else if(Ut){const Vt=yt.get(N.texture),oe=tt;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Vt.__webglTexture,ht,oe)}else if(N!==null&&ht!==0){const Vt=yt.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vt.__webglTexture,ht)}y=-1},this.readRenderTargetPixels=function(N,tt,ht,ut,it,St,Ut){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht){vt.bindFramebuffer(U.FRAMEBUFFER,Ht);try{const Vt=N.texture,oe=Vt.format,ie=Vt.type;if(!wt.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=N.width-ut&&ht>=0&&ht<=N.height-it&&U.readPixels(tt,ht,ut,it,Zt.convert(oe),Zt.convert(ie),St)}finally{const Vt=E!==null?yt.get(E).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(N,tt,ht,ut,it,St,Ut){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht){const Vt=N.texture,oe=Vt.format,ie=Vt.type;if(!wt.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(tt>=0&&tt<=N.width-ut&&ht>=0&&ht<=N.height-it){vt.bindFramebuffer(U.FRAMEBUFFER,Ht);const Kt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Kt),U.bufferData(U.PIXEL_PACK_BUFFER,St.byteLength,U.STREAM_READ),U.readPixels(tt,ht,ut,it,Zt.convert(oe),Zt.convert(ie),0);const Me=E!==null?yt.get(E).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Me);const Ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Sd(U,Ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Kt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,St),U.deleteBuffer(Kt),U.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,tt=null,ht=0){N.isTexture!==!0&&(Oi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),tt=arguments[0]||null,N=arguments[1]);const ut=Math.pow(2,-ht),it=Math.floor(N.image.width*ut),St=Math.floor(N.image.height*ut),Ut=tt!==null?tt.x:0,Ht=tt!==null?tt.y:0;z.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,ht,0,0,Ut,Ht,it,St),vt.unbindTexture()};const Ki=U.createFramebuffer(),hi=U.createFramebuffer();this.copyTextureToTexture=function(N,tt,ht=null,ut=null,it=0,St=null){N.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture function signature has changed."),ut=arguments[0]||null,N=arguments[1],tt=arguments[2],St=arguments[3]||0,ht=null),St===null&&(it!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=it,it=0):St=0);let Ut,Ht,Vt,oe,ie,Kt,Me,Ee,Xe;const Ne=N.isCompressedTexture?N.mipmaps[St]:N.image;if(ht!==null)Ut=ht.max.x-ht.min.x,Ht=ht.max.y-ht.min.y,Vt=ht.isBox3?ht.max.z-ht.min.z:1,oe=ht.min.x,ie=ht.min.y,Kt=ht.isBox3?ht.min.z:0;else{const ge=Math.pow(2,-it);Ut=Math.floor(Ne.width*ge),Ht=Math.floor(Ne.height*ge),N.isDataArrayTexture?Vt=Ne.depth:N.isData3DTexture?Vt=Math.floor(Ne.depth*ge):Vt=1,oe=0,ie=0,Kt=0}ut!==null?(Me=ut.x,Ee=ut.y,Xe=ut.z):(Me=0,Ee=0,Xe=0);const me=Zt.convert(tt.format),$t=Zt.convert(tt.type);let He;tt.isData3DTexture?(z.setTexture3D(tt,0),He=U.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(z.setTexture2DArray(tt,0),He=U.TEXTURE_2D_ARRAY):(z.setTexture2D(tt,0),He=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,tt.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,tt.unpackAlignment);const Se=U.getParameter(U.UNPACK_ROW_LENGTH),De=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ri=U.getParameter(U.UNPACK_SKIP_PIXELS),lt=U.getParameter(U.UNPACK_SKIP_ROWS),Tt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ne.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ne.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,oe),U.pixelStorei(U.UNPACK_SKIP_ROWS,ie),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt);const At=N.isDataArrayTexture||N.isData3DTexture,Gt=tt.isDataArrayTexture||tt.isData3DTexture;if(N.isDepthTexture){const ge=yt.get(N),_e=yt.get(tt),be=yt.get(ge.__renderTarget),Ye=yt.get(_e.__renderTarget);vt.bindFramebuffer(U.READ_FRAMEBUFFER,be.__webglFramebuffer),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let $e=0;$e<Vt;$e++)At&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(N).__webglTexture,it,Kt+$e),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(tt).__webglTexture,St,Xe+$e)),U.blitFramebuffer(oe,ie,Ut,Ht,Me,Ee,Ut,Ht,U.DEPTH_BUFFER_BIT,U.NEAREST);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(it!==0||N.isRenderTargetTexture||yt.has(N)){const ge=yt.get(N),_e=yt.get(tt);vt.bindFramebuffer(U.READ_FRAMEBUFFER,Ki),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,hi);for(let be=0;be<Vt;be++)At?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ge.__webglTexture,it,Kt+be):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ge.__webglTexture,it),Gt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,St,Xe+be):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,St),it!==0?U.blitFramebuffer(oe,ie,Ut,Ht,Me,Ee,Ut,Ht,U.COLOR_BUFFER_BIT,U.NEAREST):Gt?U.copyTexSubImage3D(He,St,Me,Ee,Xe+be,oe,ie,Ut,Ht):U.copyTexSubImage2D(He,St,Me,Ee,oe,ie,Ut,Ht);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Gt?N.isDataTexture||N.isData3DTexture?U.texSubImage3D(He,St,Me,Ee,Xe,Ut,Ht,Vt,me,$t,Ne.data):tt.isCompressedArrayTexture?U.compressedTexSubImage3D(He,St,Me,Ee,Xe,Ut,Ht,Vt,me,Ne.data):U.texSubImage3D(He,St,Me,Ee,Xe,Ut,Ht,Vt,me,$t,Ne):N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,St,Me,Ee,Ut,Ht,me,$t,Ne.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,St,Me,Ee,Ne.width,Ne.height,me,Ne.data):U.texSubImage2D(U.TEXTURE_2D,St,Me,Ee,Ut,Ht,me,$t,Ne);U.pixelStorei(U.UNPACK_ROW_LENGTH,Se),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,De),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ri),U.pixelStorei(U.UNPACK_SKIP_ROWS,lt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Tt),St===0&&tt.generateMipmaps&&U.generateMipmap(He),vt.unbindTexture()},this.copyTextureToTexture3D=function(N,tt,ht=null,ut=null,it=0){return N.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ht=arguments[0]||null,ut=arguments[1]||null,N=arguments[2],tt=arguments[3],it=arguments[4]||0),Oi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,tt,ht,ut,it)},this.initRenderTarget=function(N){yt.get(N).__webglFramebuffer===void 0&&z.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?z.setTextureCube(N,0):N.isData3DTexture?z.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?z.setTexture2DArray(N,0):z.setTexture2D(N,0),vt.unbindTexture()},this.resetState=function(){b=0,S=0,E=null,vt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}const Vc={type:"change"},Sl={type:"start"},Jh={type:"end"},Ho=new ro,Wc=new _i,o1=Math.cos(70*$.DEG2RAD),Qe=new T,xn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sr=1e-6;class a1 extends Mp{constructor(t,e=null){super(t,e),this.state=Fe.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new je,this._lastTargetPosition=new T,this._quat=new je().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _c,this._sphericalDelta=new _c,this._scale=1,this._panOffset=new T,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new T,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=l1.bind(this),this._onPointerDown=r1.bind(this),this._onPointerUp=c1.bind(this),this._onContextMenu=g1.bind(this),this._onMouseWheel=d1.bind(this),this._onKeyDown=p1.bind(this),this._onTouchStart=f1.bind(this),this._onTouchMove=m1.bind(this),this._onMouseDown=h1.bind(this),this._onMouseMove=u1.bind(this),this._interceptControlDown=_1.bind(this),this._interceptControlUp=v1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vc),this.update(),this.state=Fe.NONE}update(t=null){const e=this.object.position;Qe.copy(e).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=Qe.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new T(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<o1?this.object.lookAt(this.target):(Wc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(Wc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>sr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sr||this._lastTargetPosition.distanceToSquared(this.target)>sr?(this.dispatchEvent(Vc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Qe.setFromMatrixColumn(e,0),Qe.multiplyScalar(-t),this._panOffset.add(Qe)}_panUp(t,e){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(e,1):(Qe.setFromMatrixColumn(e,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(t),this._panOffset.add(Qe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Qe.copy(s).sub(this.target);let o=Qe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,a=n.width,r=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function r1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function l1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function c1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jh),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function h1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Fe.DOLLY;break;case xs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Fe.ROTATE}break;case xs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Sl)}function u1(i){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function d1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(i.preventDefault(),this.dispatchEvent(Sl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Jh))}function p1(i){this.enabled!==!1&&this._handleKeyDown(i)}function f1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Fe.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Fe.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Sl)}function m1(i){switch(this._trackPointer(i),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Fe.NONE}}function g1(i){this.enabled!==!1&&i.preventDefault()}function _1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function v1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const tu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Bs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const x1=new Ml(-1,1,1,-1,0,1);class M1 extends Xt{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const w1=new M1;class Al{constructor(t){this._mesh=new Oe(w1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,x1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class y1 extends Bs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=oo.clone(t.uniforms),this.material=new qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Al(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gc extends Bs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class b1 extends Bs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class S1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Bt);this._width=n.width,this._height=n.height,e=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new y1(tu),this.copyPass.material.blending=si,this.clock=new $h}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Gc!==void 0&&(a instanceof Gc?n=!0:a instanceof b1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class A1 extends Bs{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Dt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const E1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ds extends Bs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Bt(t.x,t.y):new Bt(256,256),this.clearColor=new Dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Dn(o,a,{type:$n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Dn(o,a,{type:$n});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Dn(o,a,{type:$n});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),a=Math.round(a/2)}const r=E1;this.highPassUniforms=oo.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qe({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Bt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=tu;this.copyUniforms=oo.clone(h.uniforms),this.blendMaterial=new qe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ta,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Dt,this.oldClearAlpha=1,this.basic=new so,this.fsQuad=new Al(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Bt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new qe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Bt(.5,.5)},direction:{value:new Bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ds.BlurDirectionX=new Bt(1,0);Ds.BlurDirectionY=new Bt(0,1);const T1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class C1 extends Bs{constructor(){super();const t=T1;this.uniforms=oo.clone(t.uniforms),this.material=new ip({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Al(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ae.getTransfer(this._outputColorSpace)===Le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_h?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Mh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function eu(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Xc(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Fs(i){const t=Math.max(0,Math.min(1,(i-1.54)/.6949999999999998)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.8)/.2),2))),n=.056*Xc(t,.38,.24),s=-.042*eu(.54,.88,t),o=.016*Xc(t,.78,.13);return(.228+n+s+o)*e}function Si(i){const t=Math.max(0,Math.min(1,(i-1.66)/.575)),e=.02*Math.pow(1-eu(0,.42,t),1.6),n=-.01*Math.sin(t*Math.PI);return 1.578+e+n}const Xi=[{rootX:.024,rootY:.126,rootZ:-3.6,tipX:.34,tipY:.142,tipZ:-3.72},{rootX:.024,rootY:.126,rootZ:-3.78,tipX:.49,tipY:.148,tipZ:-3.96},{rootX:.024,rootY:.126,rootZ:-3.96,tipX:.55,tipY:.152,tipZ:-4.22},{rootX:.024,rootY:.126,rootZ:-4.14,tipX:.46,tipY:.146,tipZ:-4.45},{rootX:.024,rootY:.126,rootZ:-4.3,tipX:.27,tipY:.138,tipZ:-4.58}],la=[{parentBone:"tail_1",rootX:.18,rootY:.75,rootZ:-.84,tipX:.44,tipY:.72,tipZ:-.98},{parentBone:"tail_2",rootX:.15,rootY:.67,rootZ:-1.1,tipX:.5,tipY:.63,tipZ:-1.27},{parentBone:"tail_2",rootX:.12,rootY:.59,rootZ:-1.34,tipX:.37,tipY:.56,tipZ:-1.52}],co=new T(.435,.03,.8999).normalize(),ho=new T(-.435,.03,.8999).normalize(),ca=.082;function nu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.342:.318),o=t?1.005:-.555,a=.04,r=t?.088:.082,l=[],c=[-.88,-.29,.29,.88];for(let h=0;h<4;h++){const u=c[h]+e*.055,d=h===1||h===2,f=(t?.126:.118)*(d?1:.86),g=(t?.066:.062)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.036,dirX:Math.sin(u)*.92,dirZ:Math.cos(u),toeLength:f,baseRadius:d?.044:.039,tipRadius:d?.029:.0255,clawLength:g})}return l}function P1(){const i=[{name:"root",parent:null,worldPos:[0,.86,.12]},{name:"pelvis",parent:"root",worldPos:[0,.83,-.54]},{name:"spine_1",parent:"root",worldPos:[0,.85,.14]},{name:"spine_2",parent:"spine_1",worldPos:[0,.91,.5]},{name:"chest",parent:"spine_2",worldPos:[0,.98,.86]},{name:"neck_1",parent:"chest",worldPos:[0,1.11,1.08]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.27,1.24]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.44,1.39]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.56,1.51]},{name:"head",parent:"neck_4",worldPos:[0,1.63,1.62]},{name:"eye_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eye_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidUpper_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidLower_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidLower_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"teethUpper",parent:"head",worldPos:[0,1.592,1.95]},{name:"jaw",parent:"head",worldPos:[0,1.588,1.66]},{name:"teethLower",parent:"jaw",worldPos:[0,1.568,1.95]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.568,1.74]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.568,1.85]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.568,1.96]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.566,2.07]},{name:"ear_L_1",parent:"head",worldPos:[.158,1.772,1.57]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.208,1.895,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.246,2.005,1.19]},{name:"ear_R_1",parent:"head",worldPos:[-.158,1.772,1.57]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.208,1.895,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.246,2.005,1.19]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.268,1.648,1.58]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.348,1.68,1.43]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.268,1.648,1.58]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.348,1.68,1.43]},{name:"cheekLower_L_1",parent:"head",worldPos:[.252,1.552,1.61]},{name:"cheekLower_L_2",parent:"cheekLower_L_1",worldPos:[.312,1.562,1.48]},{name:"cheekLower_R_1",parent:"head",worldPos:[-.252,1.552,1.61]},{name:"cheekLower_R_2",parent:"cheekLower_R_1",worldPos:[-.312,1.562,1.48]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.235,.94,.88]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.272,.8,.9]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.325,.47,.8]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.338,.155,.94]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.342,.044,1.045]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.222,.77,-.55]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.295,.46,-.34]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.312,.23,-.66]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.318,.044,-.515]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.23,1.11,.78]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.38,1.15,.76]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.96,1.18,.5]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.72,1.24,.96]}),[{mid:[n*1.62,1.16,.18],tip:[n*1.54,1.06,-.66]},{mid:[n*2.02,1.17,.24],tip:[n*2.24,1.07,-.62]},{mid:[n*2.38,1.19,.36],tip:[n*2.88,1.09,-.44]},{mid:[n*2.72,1.21,.52],tip:[n*3.44,1.12,-.16]},{mid:[n*3.04,1.23,.74],tip:[n*3.88,1.16,.24]},{mid:[n*3.22,1.25,.94],tip:[n*4.28,1.2,.76]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.78,-.82],[0,.68,-1.16],[0,.54,-1.54],[0,.39,-1.94],[0,.26,-2.35],[0,.17,-2.76],[0,.13,-3.18],[0,.126,-3.58],[0,.126,-3.98],[0,.126,-4.42]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;la.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.024,.126,-3.96]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.024,.126,-3.96]}),Xi.forEach((e,n)=>{i.push({name:`tailFin_R_${n+1}`,parent:"tailFinHinge_R",worldPos:[-e.rootX,e.rootY,e.rootZ]})}),i.push({name:"prostheticCollar",parent:"tail_8",worldPos:[.024,.128,-3.54]},{name:"prostheticRod",parent:"tail_9",worldPos:[.036,.138,-3.96]}),Xi.forEach((e,n)=>{i.push({name:`tailFin_L_${n+1}`,parent:"tailFinHinge_L",worldPos:[e.rootX,e.rootY,e.rootZ]})}),i}function R1(){const i=P1(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new ml;c.name=l.name;const h=new T(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);if(!u||!d)throw new Error(`Missing parent bone ${l.parent} for ${l.name}`);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new ga(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}function L1(i,t,e){let n=i*374761393+t*668265263+e*1442695041|0;n=(n^n>>>13)*1274126177;const s=((n^n>>>16)>>>0)/4294967296;let o=i*1103515245+t*12345+(e+7919)*2654435761|0;o=(o^o>>>15)*2246822519;const a=((o^o>>>13)>>>0)/4294967296;let r=i*73856093+t*19349663+(e+31337)*83492791|0;r=(r^r>>>14)*1597334677;const l=((r^r>>>15)>>>0)/4294967296;return[s,a,l]}function Vo(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function or(i,t,e,n,s,o=1){const a=i*e,r=t*n,l=Math.floor(a),c=Math.floor(r);let h=1e9,u=1e9,d=.5,f=0,g=0,v=0;for(let M=-1;M<=1;M++)for(let w=-1;w<=1;w++){const _=l+w,A=c+M,b=(_%e+e)%e,S=(A%n+n)%n,[E,y,x]=L1(b,S,s),P=_+.14+E*.72,C=A+.14+y*.72,R=(P-a)*o,L=C-r,D=Math.sqrt(R*R+L*L);D<h?(u=h,h=D,d=x,f=(E-.5)*Math.PI,g=R,v=L):D<u&&(u=D)}const m=Math.max(0,(u-h)*.5),p=g*Math.cos(f)+v*Math.sin(f);return{edgeDist:m,centerDist:h,cellTone:d,cellAngle:p}}let Wo=null;function I1(i=1024){if(Wo)return Wo;const t=i,e=new Float32Array(t*t),n=new Float32Array(t*t),s=new Float32Array(t*t),o=new Float32Array(t*t),a=new Float32Array(t*t),r=28,l=76;for(let F=0;F<t;F++){const H=F/t;for(let V=0;V<t;V++){const Y=V/t,Z=F*t+V,X=or(Y,H,r,r,101,1.08),W=or(Y,H,l,l,409,1),O=Vo(.015,.24,X.edgeDist),st=Vo(.02,.28,W.edgeDist),at=Math.sin((Y*135+H*47+X.cellTone*6.28)*Math.PI*2)*Math.sin((Y*29-H*113+X.cellTone*3.14)*Math.PI*2),j=at>.86?-.055*(at-.86)*7:0,K=Math.max(-.08,Math.min(.08,X.cellAngle*.11))*O,G=O*(.76+.14*X.cellTone)+st*.22*(1-O*.55)+K+j*O;e[Z]=Math.max(0,Math.min(1,G));const nt=1-O,_t=.3+.09*(1-X.cellTone)+nt*.52+(1-st)*.08-j*.4;n[Z]=Math.max(.18,Math.min(.95,_t));const J=.24+.76*Vo(0,.16,X.edgeDist)*(.85+.15*st);s[Z]=Math.max(.15,Math.min(1,J)),o[Z]=X.cellTone*.7+W.cellTone*.3,a[Z]=Math.max(0,Math.min(1,.32+.58*X.cellTone*O+.1*st))}}const c=document.createElement("canvas"),h=document.createElement("canvas"),u=document.createElement("canvas"),d=document.createElement("canvas"),f=document.createElement("canvas");for(const F of[c,h,u,d,f])F.width=t,F.height=t;const g=c.getContext("2d"),v=h.getContext("2d"),m=u.getContext("2d"),p=d.getContext("2d"),M=f.getContext("2d"),w=g.createImageData(t,t),_=v.createImageData(t,t),A=m.createImageData(t,t),b=p.createImageData(t,t),S=M.createImageData(t,t),E=3.6;for(let F=0;F<t;F++){const H=(F-1+t)%t,V=(F+1)%t;for(let Y=0;Y<t;Y++){const Z=(Y-1+t)%t,X=(Y+1)%t,W=F*t+Y,O=W*4,st=e[H*t+Z],at=e[H*t+Y],j=e[H*t+X],K=e[F*t+Z],G=e[F*t+X],nt=e[V*t+Z],_t=e[V*t+Y],J=e[V*t+X],U=(j+3*G+J-(st+3*K+nt))*E,rt=(nt+3*_t+J-(st+3*at+j))*E;let dt=-U,wt=-rt,vt=1;const Lt=1/Math.sqrt(dt*dt+wt*wt+vt*vt);dt*=Lt,wt*=Lt,vt*=Lt,_.data[O]=Math.round((dt*.5+.5)*255),_.data[O+1]=Math.round((wt*.5+.5)*255),_.data[O+2]=Math.round((vt*.5+.5)*255),_.data[O+3]=255;const yt=e[W],z=o[W],I=12+yt*15+z*8;w.data[O]=Math.round(I*.86),w.data[O+1]=Math.round(I*.96),w.data[O+2]=Math.round(I*1.14),w.data[O+3]=255;const et=Math.round(n[W]*255);A.data[O]=et,A.data[O+1]=et,A.data[O+2]=et,A.data[O+3]=255;const ft=Math.round(s[W]*255);b.data[O]=ft,b.data[O+1]=ft,b.data[O+2]=ft,b.data[O+3]=255;const gt=Math.round(a[W]*255);S.data[O]=gt,S.data[O+1]=gt,S.data[O+2]=gt,S.data[O+3]=255}}g.putImageData(w,0,0),v.putImageData(_,0,0),m.putImageData(A,0,0),p.putImageData(b,0,0),M.putImageData(S,0,0);const y=(F,H=!1,V=7)=>(F.wrapS=qn,F.wrapT=qn,F.repeat.set(V,V),F.anisotropy=8,F.colorSpace=H?rn:In,F.needsUpdate=!0,F),x=512,P=document.createElement("canvas"),C=document.createElement("canvas");P.width=x,P.height=x,C.width=x,C.height=x;const R=P.getContext("2d"),L=C.getContext("2d"),D=R.createImageData(x,x),k=L.createImageData(x,x),B=new Float32Array(x*x);for(let F=0;F<x;F++){const H=F/x;for(let V=0;V<x;V++){const Y=V/x,Z=F*x+V,X=Math.sin(H*92*Math.PI*2+Math.sin(Y*9*Math.PI*2)*1.4)*.25+Math.sin(H*210*Math.PI*2+Y*18)*.12,W=or(Y,H,44,44,887,1),O=Vo(.08,.22,W.edgeDist)*(W.cellTone>.45?.55:.15);B[Z]=.5+X*.35+O*.4}}for(let F=0;F<x;F++){const H=(F-1+x)%x,V=(F+1)%x;for(let Y=0;Y<x;Y++){const Z=(Y-1+x)%x,X=(Y+1)%x,W=F*x+Y,O=W*4,st=(B[F*x+X]-B[F*x+Z])*2.4,at=(B[V*x+Y]-B[H*x+Y])*2.4,j=1/Math.sqrt(st*st+at*at+1);D.data[O]=Math.round((-st*j*.5+.5)*255),D.data[O+1]=Math.round((-at*j*.5+.5)*255),D.data[O+2]=Math.round((j*.5+.5)*255),D.data[O+3]=255;const K=Math.round((.36+(1-B[W])*.28)*255);k.data[O]=K,k.data[O+1]=K,k.data[O+2]=K,k.data[O+3]=255}}return R.putImageData(D,0,0),L.putImageData(k,0,0),Wo={albedoMap:y(new gn(c),!0,7),normalMap:y(new gn(h),!1,7),roughnessMap:y(new gn(u),!1,7),aoMap:y(new gn(d),!1,7),iridescenceThicknessMap:y(new gn(f),!1,7),prostheticPasteNormalMap:y(new gn(P),!1,3),prostheticPasteRoughnessMap:y(new gn(C),!1,3)},Wo}let Bi=null;function D1(i=1024){if(Bi)return Bi;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=8,n.data[u+1]=12,n.data[u+2]=11,n.data[u+3]=255;continue}const d=Math.sin(h*68+Math.sin(c*11)*.65),f=Math.sin(h*142-Math.cos(c*19)*.85),g=Math.sin(h*260+c*24),v=Math.sin(h*23+1.4)*Math.cos(c*15-h*5),m=d*.42+f*.33+g*.15+v*.25,p=Math.sin(c*42+d*.6)*.08,M=Math.exp(-Math.pow((c-.38)/.13,2)),w=Math.max(0,Math.min(1,(.94-c)/.16)),_=Math.max(0,Math.min(1,1-c*1.08)),A=.84+.3*m+p;let b=(38+166*_+66*M)*A*w,S=(146+106*_+34*M)*A*w,E=(64-24*_+22*(1-_))*A*w;if(v<-.58&&c>.25&&c<.78){const y=Math.min(1,(-v-.58)*2.2);b*=1-.42*y,S*=1-.34*y,E*=1-.28*y}n.data[u]=Math.max(0,Math.min(255,Math.round(b))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(S))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(E))),n.data[u+3]=255}}return e.putImageData(n,0,0),Bi=new gn(t),Bi.colorSpace=rn,Bi.anisotropy=8,Bi.needsUpdate=!0,Bi}function F1(){const i=D1(1024),t={uPupilDilation:{value:.76},uLightDir:{value:new T(.45,.65,.6).normalize()},uAlphaGlow:{value:0}},e=new bi({name:"Toothless_Iris_PBR",map:i,roughness:.55,metalness:0,envMapIntensity:.65});e.onBeforeCompile=s=>{s.uniforms.uPupilDilation=t.uPupilDilation,s.uniforms.uLightDir=t.uLightDir,s.uniforms.uAlphaGlow=t.uAlphaGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.34 + uAlphaGlow * 0.92) * eRadial;`)};const n=new _n({name:"Toothless_Cornea_WetCoat",color:new Dt(16777215),transparent:!0,opacity:.14,roughness:.012,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.01,envMapIntensity:2.8,depthWrite:!1});return{irisMaterial:e,corneaMaterial:n,uniforms:t}}function ar(i,t,e){i.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uAlphaGlow=t.uAlphaGlow,n.uniforms.uBiolumGlow=t.uBiolumGlow,n.uniforms.uLightningCloak=t.uLightningCloak,n.uniforms.uSunDir=t.uSunDir,n.uniforms.uSunColor=t.uSunColor,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        roughnessFactor = mix(roughnessFactor, 0.06, uLightningCloak * 0.88);
        roughnessFactor = clamp(roughnessFactor, 0.05, 0.96);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
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
            vec3(mapNFine.xy * 0.82, mapNFine.z),
            vec3(mapNMacro.xy * 1.45, mapNMacro.z),
            mScaleW
          ));
          blendedMapN.xy *= (1.0 - scarW * 0.72);
          blendedMapN.xy *= normalScale * (1.0 - plateNW * 0.55);
          normal = normalize( tbn * blendedMapN );
          if (plateNW > 0.01 && !${e?"true":"false"}) {
            vec4 plateN = evalMacroArmorPlate3D(vObjPos);
            // Screen-space Mikkelsen surface-gradient bump perturbation: uses only guaranteed view-space
            // vViewPosition + normal + dFdx/dFdy (zero undeclared uniforms, and 100% accurate under skeletal skinning!)
            float plateBumpH = plateN.x * plateNW * 0.020 * (1.0 - scarW * 0.8);
            vec3 dPdx = dFdx( -vViewPosition );
            vec3 dPdy = dFdy( -vViewPosition );
            vec3 r1 = cross( dPdy, normal );
            vec3 r2 = cross( normal, dPdx );
            float det = dot( dPdx, r1 );
            float signDet = det < 0.0 ? -1.0 : 1.0;
            vec3 surfGrad = signDet * ( dFdx( plateBumpH ) * r1 + dFdy( plateBumpH ) * r2 );
            normal = normalize( abs( det ) * normal - surfGrad + vec3( 0.0, 0.0, 1e-6 ) );
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
        }`)}}function U1(){const i=I1(1024),t=F1(),e={uTime:{value:0},uAlphaGlow:{value:.08},uBiolumGlow:{value:0},uLightningCloak:{value:0},uSunDir:{value:new T(-.55,.38,-.74).normalize()},uSunColor:{value:new Dt(16765601)}},n=new _n({name:"Toothless_ObsidianScales_PBR",color:new Dt(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new Bt(1.28,1.28),roughnessMap:i.roughnessMap,roughness:.88,aoMap:i.aoMap,aoMapIntensity:.88,metalness:.05,iridescence:.62,iridescenceIOR:1.4,iridescenceThicknessRange:[260,470],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.34,clearcoatRoughness:.3,sheen:.44,sheenRoughness:.48,sheenColor:new Dt(2178905),envMapIntensity:1.48});ar(n,e,!1);const s=new _n({name:"Toothless_PatagiumMembrane_PBR",color:new Dt(15660282),map:i.albedoMap,normalMap:i.normalMap,normalScale:new Bt(.65,.65),roughnessMap:i.roughnessMap,roughness:.96,aoMap:i.aoMap,aoMapIntensity:.65,metalness:.02,iridescence:.38,iridescenceIOR:1.36,iridescenceThicknessRange:[250,430],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.18,clearcoatRoughness:.44,sheen:.42,sheenRoughness:.58,sheenColor:new Dt(1977920),side:ln,envMapIntensity:1.25});ar(s,e,!0);const o=new _n({name:"Toothless_ProstheticScalePaste_PBR",color:new Dt(1185308),normalMap:i.prostheticPasteNormalMap,normalScale:new Bt(.95,.95),roughnessMap:i.prostheticPasteRoughnessMap,roughness:.46,metalness:.14,iridescence:.46,iridescenceIOR:1.4,iridescenceThicknessRange:[270,440],clearcoat:.42,clearcoatRoughness:.28,side:ln,envMapIntensity:1.35});ar(o,e,!1);const a=new bi({name:"Toothless_VikingBronze_PBR",color:new Dt(12094282),metalness:.88,roughness:.33,envMapIntensity:1.45}),r=new bi({name:"Toothless_ForgedIron_PBR",color:new Dt(2632754),metalness:.82,roughness:.42,envMapIntensity:1.3}),l=new _n({name:"Toothless_ObsidianClaws_PBR",color:new Dt(1316636),roughness:.24,metalness:.08,clearcoat:.65,clearcoatRoughness:.2,envMapIntensity:1.5}),c=new _n({name:"Toothless_RetractableTeeth_PBR",color:new Dt(15394524),roughness:.16,metalness:0,clearcoat:.85,clearcoatRoughness:.08,sheen:.2,sheenColor:new Dt(14018293),envMapIntensity:1.2}),h=new _n({name:"Toothless_OralGums_PBR",color:new Dt(2628390),normalMap:i.normalMap,normalScale:new Bt(.58,.58),roughnessMap:i.roughnessMap,roughness:.42,metalness:0,clearcoat:.68,clearcoatRoughness:.18,side:ln});h.onBeforeCompile=d=>{d.uniforms.uAlphaGlow=e.uAlphaGlow,d.uniforms.uTime=e.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
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
        }`)};const u=new _n({name:"Toothless_Tongue_PBR",color:new Dt(7880269),normalMap:i.normalMap,normalScale:new Bt(.68,.68),roughnessMap:i.roughnessMap,roughness:.36,metalness:0,clearcoat:.8,clearcoatRoughness:.14,sheen:.38,sheenColor:new Dt(10904693)});return{maps:i,skinMaterial:n,wingMembraneMaterial:s,prostheticPasteMaterial:o,prostheticBronzeMaterial:a,prostheticIronMaterial:r,clawMaterial:l,teethMaterial:c,oralGumMaterial:h,tongueMaterial:u,eyeMaterials:t,uniforms:e}}function Ve(i){let t=0,e=0;for(const f of i){const g=f.getAttribute("position");t+=g.count;const v=f.getIndex();e+=v?v.count:g.count}const n=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Float32Array(t*4),r=new Uint16Array(t*4),l=new Float32Array(t*4),c=t>65535?new Uint32Array(e):new Uint16Array(e);let h=0,u=0;for(const f of i){const g=f.getAttribute("position"),v=f.getAttribute("normal"),m=f.getAttribute("uv"),p=f.getAttribute("aAnatomyData"),M=f.getAttribute("skinIndex"),w=f.getAttribute("skinWeight"),_=g.count;if(n.set(g.array,h*3),v&&s.set(v.array,h*3),m&&o.set(m.array,h*2),p)a.set(p.array,h*4);else for(let b=0;b<_;b++)a[(h+b)*4]=.35;if(M&&w)for(let b=0;b<_*4;b++)r[h*4+b]=M.array[b],l[h*4+b]=w.array[b];const A=f.getIndex();if(A){for(let b=0;b<A.count;b++)c[u+b]=A.getX(b)+h;u+=A.count}else{for(let b=0;b<_;b++)c[u+b]=h+b;u+=_}h+=_}const d=new Xt;return d.setAttribute("position",new q(n,3)),d.setAttribute("normal",new q(s,3)),d.setAttribute("uv",new q(o,2)),d.setAttribute("uv1",new q(o,2)),d.setAttribute("aAnatomyData",new q(a,4)),d.setAttribute("skinIndex",new fe(r,4)),d.setAttribute("skinWeight",new Yt(l,4)),d.setIndex(new q(c,1)),d.computeBoundingSphere(),d.computeBoundingBox(),d}function Be(i,t){const e=t[0]+t[1]+t[2]+t[3];if(e<=1e-6)return{indices:[i[0],0,0,0],weights:[1,0,0,0]};const n=1/e;return{indices:i,weights:[t[0]*n,t[1]*n,t[2]*n,t[3]*n]}}function Xn(i,t,e,n=3.2){const s=[];for(let a=0;a<t.length;a++){const r=e[a];let l=i.distanceTo(r);if(a<t.length-1){const h=e[a+1],u=new T().subVectors(h,r),d=u.lengthSq();if(d>1e-6){const f=Math.max(0,Math.min(1,new T().subVectors(i,r).dot(u)/d)),g=new T().copy(r).addScaledVector(u,f);l=Math.min(l,i.distanceTo(g)+f*.08)}}const c=1/Math.pow(Math.max(.035,l),n);s.push({idx:t[a],w:c})}s.sort((a,r)=>r.w-a.w);const o=s.slice(0,4);for(;o.length<4;)o.push({idx:0,w:0});return Be([o[0].idx,o[1].idx,o[2].idx,o[3].idx],[o[0].w,o[1].w,o[2].w,o[3].w])}function le(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function ae(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Go(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function tl(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let g=0;g<e-1;g++)n[g]=(t[g+1][1]-t[g][1])/(t[g+1][0]-t[g][0]);s[0]=n[0],s[e-1]=n[e-2];for(let g=1;g<e-1;g++)n[g-1]*n[g]<=0?s[g]=0:s[g]=(n[g-1]+n[g])*.5;for(let g=0;g<e-1;g++)if(Math.abs(n[g])<1e-8)s[g]=0,s[g+1]=0;else{const v=s[g]/n[g],m=s[g+1]/n[g],p=Math.hypot(v,m);if(p>3){const M=3/p;s[g]=M*v*n[g],s[g+1]=M*m*n[g]}}let o=0;for(let g=0;g<e-1;g++)if(i>=t[g][0]&&i<=t[g+1][0]){o=g;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r,h=2*c-3*l+1,u=c-2*l+r,d=-2*c+3*l,f=c-l;return h*t[o][1]+u*a*s[o]+d*t[o+1][1]+f*a*s[o+1]}const N1=[[-4.55,.018],[-3.95,.052],[-3.05,.095],[-2.1,.16],[-1.35,.228],[-.88,.282],[-.54,.334],[-.1,.328],[.42,.378],[.82,.394],[1.08,.304],[1.32,.25],[1.54,.228]],iu=[[-4.55,.016],[-3.95,.044],[-3.05,.084],[-2.1,.14],[-1.35,.194],[-.88,.236],[-.54,.274],[-.1,.272],[.42,.306],[.82,.312],[1.08,.246],[1.32,.208],[1.54,.192]],k1=[new T(0,.126,-4.55),new T(0,.126,-4.05),new T(0,.126,-3.55),new T(0,.13,-3.05),new T(0,.19,-2.5),new T(0,.35,-1.92),new T(0,.56,-1.42),new T(0,.74,-.92),new T(0,.81,-.54),new T(0,.82,-.1),new T(0,.87,.4),new T(0,.94,.8),new T(0,1.09,1.06),new T(0,1.31,1.28),new T(0,1.53,1.48),new T(0,1.635,1.66),new T(0,1.654,1.86),new T(0,1.632,2.05),new T(0,1.586,2.235)];let rr=null;function su(){return rr||(rr=new Fn(k1,!1,"centripetal",.5)),rr}function lr(i){const t=su();let e=0,n=1;for(let v=0;v<22;v++){const m=(e+n)*.5;t.getPointAt(m).z<i?e=m:n=m}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new T(0,1,0),l=r.clone().addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=le(-4.55,-4.46,c);let u=tl(c,iu)*h;const d=le(1.46,1.6,c);if(d>0){const v=Math.max(0,Math.min(1,(c-1.54)/.6949999999999998)),m=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(v-.8)/.2),2))),p=(.192+.014*ae(v,.35,.22)-.068*le(.34,.94,v))*m;u=$.lerp(u,p,d)}let f=u;return c>-.45&&c<1.18&&(f+=.01*ae(c,.35,.55)),{point:o.clone().addScaledVector(l,f),tangent:a,up:l}}function ou(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.64)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.38){const r=le(1.42,1.64,i.z),l=1-r,c=le(1.36,1.56,i.z);return Be([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return Xn(i,e,n,3.5)}function B1(i,t){const e=[];return e.push(z1(i,t)),e.push(...O1(i,t)),e.push(...H1(i,t)),e.push(...V1(i,t)),Ve(e)}function z1(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=su(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(A=>i.boneIndexMap.get(A)),r=o.map(A=>i.bindWorldPositions.get(A)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4),g=new T(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),p=[{center:v,fwd:co,up:new T(-.16,.985,.06).normalize()},{center:m,fwd:ho,up:new T(.16,.985,.06).normalize()}].map(A=>{const b=new T().crossVectors(A.up,A.fwd).normalize(),S=new T().crossVectors(A.fwd,b).normalize();return{center:A.center,fwd:A.fwd,right:b,up:S}});for(let A=0;A<=e;A++){const b=A/e,S=1-Math.pow(1-b,1.85),E=s.getPointAt(S),y=s.getTangentAt(S).normalize(),x=new T().copy(g).addScaledVector(y,-g.dot(y)).normalize(),P=new T().crossVectors(x,y).normalize(),C=E.z,R=le(-4.55,-4.46,C),L=tl(C,N1)*R+.008*ae(C,-3.96,.36),D=tl(C,iu)*R,k=le(1.46,1.6,C);let B=L,F=D;if(k>0){const H=Math.max(0,Math.min(1,(C-1.54)/.6949999999999998)),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(H-.8)/.2),2))),Y=Fs(C),Z=(.192+.014*ae(H,.35,.22)-.068*le(.34,.94,H))*V;B=$.lerp(L,Y,k),F=$.lerp(D,Z,k)}for(let H=0;H<=n;H++){const V=H/n,Y=V*Math.PI*2,Z=Math.sin(Y),X=Math.cos(Y);let W=B*Z,O=F*X,st=.28,at=0,j=0;if(C>-.85&&C<1.18){const J=ae(C,.76,.3),U=ae(Math.abs(Z),.48,.24)*le(-.05,-.88,X),rt=ae(Z,0,.11)*le(-.55,-.98,X)*J;O-=.026*J*U-.012*rt,W+=Math.sign(Z)*.016*J*U;const dt=ae(C,.88,.22)*ae(Math.abs(Z),.72,.18)*le(-.08,-.78,X),wt=ae(C,-.54,.24)*ae(Math.abs(Z),.7,.19)*le(-.05,-.78,X);O-=.032*dt+.028*wt;const vt=ae(C,.38,.28)*ae(Math.abs(Z),.92,.16)*ae(X,-.12,.35);W+=Math.sign(Z)*Math.sin(C*26)*.003*vt,X>.75&&C>-.45&&(O+=.01*Math.pow((X-.75)/.25,2)*ae(C,.35,.55))}if(C>=1&&C<1.56){const J=le(1,1.18,C)*(1-le(1.44,1.56,C)),U=ae(Math.abs(Z),.62,.18)*ae(X,-.35,.3);W+=Math.sign(Z)*.008*U*J}if(C>=1.5){const J=ae(C,1.75,.1)*ae(Math.abs(Z),.52,.2)*le(.35,.9,X);O+=.014*J,W+=Math.sign(Z)*.01*J;const U=ae(C,1.985,.105),rt=ae(Math.abs(Z),.64,.17)*le(.16,.72,X),dt=1+.22*Math.max(0,Math.sin((C-1.88)/.21*Math.PI*6));O+=.024*U*rt*dt,W+=Math.sign(Z)*.012*U*rt;const wt=ae(C,1.76,.11)*ae(Math.abs(Z),.92,.16)*ae(X,-.18,.26),vt=ae(C,1.9,.13)*ae(Math.abs(Z),.88,.17)*ae(X,-.1,.24);if(W+=Math.sign(Z)*(.018*wt+.015*vt),X>.86&&C>1.58&&C<1.95){const ft=Math.pow((X-.86)/.14,2),gt=Math.max(0,Math.sin((C-1.58)/.37*Math.PI*6)),mt=-.003*ae(Math.abs(Z),.16,.07);O+=(.008+.015*Math.pow(gt,1.5))*ft+mt,j=Math.max(j,.75*ft*le(1.58,1.94,C))}if(C>2.15&&X>-.35&&X<.35){const ft=ae(Z,0,.08)*le(2.15,2.225,C);O-=.0025*ft}const Lt=ae(Z,0,.26)*le(.42,.96,X)*le(1.66,1.98,C),yt=le(1.98,2.19,C)*le(-.35,.85,X),z=U*rt*1.45,I=ae(X,-.2,.2)*le(1.74,2.18,C);st=.38+1.56*Math.min(1,Math.max(Lt,yt,z,I*.88))}const K=new T().copy(E).addScaledVector(P,W).addScaledVector(x,O),G=le(1.63,1.72,C);if(G>0&&X<.04){const J=Si(C),U=Math.max(le(.56,.9,Math.abs(Z)),le(2.12,2.21,C)),rt=J-.0045,dt=J+.044*(1-le(2.08,2.22,C)),wt=$.lerp(dt,rt,U),vt=G*le(.04,-.26,X);K.y=$.lerp(K.y,wt,vt)}if(C>1.8&&C<2.16)for(const J of p){if(Math.sign(K.x)!==Math.sign(J.center.x))continue;const U=new T().subVectors(K,J.center),rt=U.dot(J.fwd),dt=U.dot(J.right),wt=U.dot(J.up);if(rt>0){const vt=Math.exp(-.5*(Math.pow(dt/.058,2)+Math.pow(wt/.05,2)))*le(0,.035,rt),Lt=ca-.024,yt=$.lerp(rt,Lt,vt);rt>yt&&(K.addScaledVector(J.fwd,yt-rt),st=Math.max(st,.78*vt))}}if(C>2.1&&C<2.23&&K.y>1.575){const J=Go(K.x,K.z,.066,2.182,.021,.024)*ae(K.y,1.606,.017),U=Go(K.x,K.z,-.066,2.182,.021,.024)*ae(K.y,1.606,.017),rt=Math.max(J,U),dt=Math.max(Go(K.x,K.z,.068,2.176,.025,.026),Go(K.x,K.z,-.068,2.176,.025,.026))*ae(K.y,1.622,.012);dt>.05&&(K.y+=.0035*dt,K.x+=Math.sign(K.x)*.0025*dt),rt>.05&&(K.x*=1-.16*rt,K.y-=.011*rt,K.z-=.014*rt,j=Math.max(j,Math.min(1,rt*1.35)))}if(C>1.76&&C<2.02&&K.y>1.68){const J=Math.abs(K.x+.14-(K.z-1.89)*.4),U=ae(K.z,1.89,.052)*le(.015,.002,J),rt=Math.abs(K.x-.12+(K.z-1.84)*.34),dt=ae(K.z,1.84,.034)*le(.012,.002,rt);at=Math.min(1,Math.max(U,dt*.85)),at>.01&&(K.y-=.0035*at)}X>.92&&C<1.56&&(j=Math.max(j,(X-.92)/.08*.55),st=Math.max(st,.65*((X-.92)/.08)));const nt=A*(n+1)+H;c[nt*3]=K.x,c[nt*3+1]=K.y,c[nt*3+2]=K.z,h[nt*2]=S*5.2,h[nt*2+1]=V*1.6,u[nt*4]=st,u[nt*4+1]=at,u[nt*4+2]=j,u[nt*4+3]=0;const _t=ou(K,i,a,r);d.set(_t.indices,nt*4),f.set(_t.weights,nt*4)}}const M=new Uint32Array(e*n*6);let w=0;for(let A=0;A<e;A++)for(let b=0;b<n;b++){const S=A*(n+1)+b,E=(A+1)*(n+1)+b,y=(A+1)*(n+1)+(b+1),x=A*(n+1)+(b+1);M[w++]=S,M[w++]=E,M[w++]=y,M[w++]=S,M[w++]=y,M[w++]=x}const _=new Xt;return _.setAttribute("position",new q(c,3)),_.setAttribute("uv",new q(h,2)),_.setAttribute("aAnatomyData",new q(u,4)),_.setAttribute("skinIndex",new fe(d,4)),_.setAttribute("skinWeight",new Yt(f,4)),_.setIndex(new q(M,1)),_.computeVertexNormals(),xa(_,e,n),_}function O1(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.272,2.09,1.06],maxWidth:.074,maxThick:.027,rollAngle:l*-.46}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.395,1.692,1.33],maxWidth:.038,maxThick:.017,rollAngle:l*-.95}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],tipPos:[l*.348,1.565,1.39],maxWidth:.03,maxThick:.015,rollAngle:l*-1.15}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],customStart:[l*.218,1.498,1.62],tipPos:[l*.274,1.488,1.48],maxWidth:.021,maxThick:.012,rollAngle:l*-1.28})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.customStart?[new T(...r.customStart),new T(...r.tipPos).lerp(new T(...r.customStart),.5)]:r.boneNames.map(E=>i.bindWorldPositions.get(E).clone()),c=new T().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.052),...l,new T(...r.tipPos)],d=new Fn(u),f=r.boneNames.map(E=>i.boneIndexMap.get(E)),g=r.boneNames.map(E=>i.bindWorldPositions.get(E)),v=(o+1)*(a+1),m=new Float32Array(v*3),p=new Float32Array(v*2),M=new Float32Array(v*4),w=new Uint16Array(v*4),_=new Float32Array(v*4);for(let E=0;E<=o;E++){const x=1-E/o,P=d.getPointAt(x),C=d.getTangentAt(x).negate().normalize(),R=new T(Math.sin(r.rollAngle),Math.cos(r.rollAngle),0).normalize(),L=R.clone().addScaledVector(C,-R.dot(C)).normalize(),D=new T().crossVectors(L,C).normalize(),k=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(x-.76)/.24),2))),B=.72+.44*Math.sin(Math.min(1,x*1.15)*Math.PI),F=1+.34*Math.pow(Math.max(0,1-x*4.2),2),H=r.maxWidth*B*k*F,V=r.maxThick*(.85+.25*(1-x))*k*F;for(let Y=0;Y<=a;Y++){const Z=Y/a,X=Z*Math.PI*2,W=new T().copy(P).addScaledVector(D,H*Math.sin(X)).addScaledVector(L,V*Math.cos(X)),O=E*(a+1)+Y;m[O*3]=W.x,m[O*3+1]=W.y,m[O*3+2]=W.z,p[O*2]=x*.85,p[O*2+1]=Z*.65,M[O*4]=.45+1.35*le(.32,.9,x);const st=Xn(W,f,g,3.6),at=le(.28,0,x),j=Be([n,st.indices[0],st.indices[1],st.indices[2]],[at,st.weights[0]*(1-at),st.weights[1]*(1-at),st.weights[2]*(1-at)]);w.set(j.indices,O*4),_.set(j.weights,O*4)}}const A=new Uint16Array(o*a*6);let b=0;for(let E=0;E<o;E++)for(let y=0;y<a;y++){const x=E*(a+1)+y,P=(E+1)*(a+1)+y,C=(E+1)*(a+1)+(y+1),R=E*(a+1)+(y+1);A[b++]=x,A[b++]=P,A[b++]=C,A[b++]=x,A[b++]=C,A[b++]=R}const S=new Xt;S.setAttribute("position",new q(m,3)),S.setAttribute("uv",new q(p,2)),S.setAttribute("aAnatomyData",new q(M,4)),S.setAttribute("skinIndex",new fe(w,4)),S.setAttribute("skinWeight",new Yt(_,4)),S.setIndex(new q(A,1)),S.computeVertexNormals(),xa(S,o,a),e.push(S)}return e}function H1(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?co:ho).clone(),d=new T(r*-.16,.985,.06).normalize(),f=new T().crossVectors(u,d).normalize(),g=new T().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,p=(s+1)*(o+1),M=new Float32Array(p*3),w=new Float32Array(p*2),_=new Float32Array(p*4),A=new Uint16Array(p*4),b=new Float32Array(p*4),S=ca+.0018;for(let P=0;P<=o;P++){const C=P/o,R=ae(C,.06,.08);for(let L=0;L<=s;L++){const D=L/s,k=$.degToRad($.lerp(-65,65,D)),B=Math.sin(D*Math.PI),F=v?44*B:-40*B,H=v?78:-74,V=$.degToRad($.lerp(F,H,C)),Y=Math.max(0,Math.sin(D*Math.PI*22))*.0014*R,Z=S+.0018*R+Y-.0028*C,X=new T().addScaledVector(u,Math.cos(V)*Math.cos(k)).addScaledVector(f,Math.cos(V)*Math.sin(k)).addScaledVector(g,Math.sin(V)).normalize(),W=new T().copy(l).addScaledVector(X,Z),O=P*(s+1)+L;M[O*3]=W.x,M[O*3+1]=W.y,M[O*3+2]=W.z,w[O*2]=D*.35,w[O*2+1]=C*.18,_[O*4]=.85;const st=B*(1-le(.48,1,C)),at=Math.max(0,Math.min(1,st));A.set([m,n,0,0],O*4),b.set([at,1-at,0,0],O*4)}}const E=new Uint16Array(s*o*6);let y=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,D=(P+1)*(s+1)+(C+1),k=P*(s+1)+(C+1);v?(E[y++]=R,E[y++]=D,E[y++]=L,E[y++]=R,E[y++]=k,E[y++]=D):(E[y++]=R,E[y++]=L,E[y++]=D,E[y++]=R,E[y++]=D,E[y++]=k)}const x=new Xt;x.setAttribute("position",new q(M,3)),x.setAttribute("uv",new q(w,2)),x.setAttribute("aAnatomyData",new q(_,4)),x.setAttribute("skinIndex",new fe(A,4)),x.setAttribute("skinWeight",new Yt(b,4)),x.setIndex(new q(E,1)),x.computeVertexNormals(),e.push(x)}}return e}function V1(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new T(a*.16,.96,.86),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new T(a*.342,.056,1),new T(a*.342,.032,1.078)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push($c(i,r,l,!0,o,n,s)),e.push(...Yc(i,o,!0,t));const c=[new T(a*.15,.8,-.54),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new T(a*.318,.054,-.562),new T(a*.318,.032,-.488)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push($c(i,c,h,!1,o,n,s)),e.push(...Yc(i,o,!1,t))}return e}function Yc(i,t,e,n){const s=[],o=nu(t,e),a=n===0?16:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=l.dirX,p=l.dirZ,M=Math.hypot(m,p),w=m/M,_=p/M,A=_,b=-w;for(let x=0;x<=a;x++){const P=x/a,C=$.lerp(-.38,1,P),R=Math.max(0,C),L=Math.max(0,-C)*.042,D=Math.sin(R*Math.PI)*.011-.009*R*R+L,k=l.rootX+w*l.toeLength*C,B=l.rootZ+_*l.toeLength*C,F=l.rootY+D,H=1+.44*Math.pow(1-le(-.38,.18,C),1.5),V=1+.15*ae(R,.4,.18)+.14*ae(R,.84,.1),Y=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(P-.89)/.11),2))),Z=$.lerp(l.baseRadius,l.tipRadius,R)*H*V*Y;for(let X=0;X<=r;X++){const W=X/r,O=W*Math.PI*2,st=Math.sin(O),at=Math.cos(O),j=at>.15?Math.pow(Math.max(0,Math.sin(R*Math.PI*4.5)),.75)*.0042*((at-.15)/.85):0,K=1.12+.24*(1-le(-.35,.22,C)),G=k+A*st*Z*K,nt=B+b*st*Z*K;let _t=F+at*(Z*.86+j);_t<.003&&(_t=.003+Math.max(0,_t)*.12);const J=x*(r+1)+X;u[J*3]=G,u[J*3+1]=_t,u[J*3+2]=nt,d[J*2]=P*.42,d[J*2+1]=W*.36,f[J*4]=at>.05?1.95:.38,g.set([c,0,0,0],J*4),v.set([1,0,0,0],J*4)}}const S=new Uint16Array(a*r*6);let E=0;for(let x=0;x<a;x++)for(let P=0;P<r;P++){const C=x*(r+1)+P,R=(x+1)*(r+1)+P,L=(x+1)*(r+1)+(P+1),D=x*(r+1)+(P+1);S[E++]=C,S[E++]=R,S[E++]=L,S[E++]=C,S[E++]=L,S[E++]=D}const y=new Xt;y.setAttribute("position",new q(u,3)),y.setAttribute("uv",new q(d,2)),y.setAttribute("aAnatomyData",new q(f,4)),y.setAttribute("skinIndex",new fe(g,4)),y.setAttribute("skinWeight",new Yt(v,4)),y.setIndex(new q(S,1)),y.computeVertexNormals(),xa(y,a,r),s.push(y)}return s}function $c(i,t,e,n,s,o,a){const r=s==="L"?1:-1,l=new Fn(t,!1,"centripetal",.5),c=e.map(A=>i.boneIndexMap.get(A)),h=e.map(A=>i.bindWorldPositions.get(A)),u=(o+1)*(a+1),d=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),p=new T(0,0,1);for(let A=0;A<=o;A++){const S=1-A/o,E=l.getPointAt(S),y=l.getTangentAt(S).negate().normalize(),x=p.clone().addScaledVector(y,-p.dot(y)).normalize(),P=new T().crossVectors(x,y).normalize(),C=.52+.48*le(0,.34,S),R=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(S-.91)/.09),2)))*C;let L=.095,D=.11;if(n){const F=ae(S,.54,.16)*.028,H=ae(S,.86,.12)*.088;L=(.09+F+H)*R,D=(.106+ae(S,.26,.18)*.036+F+H*.86)*R}else{const F=ae(S,.52,.15)*.032,H=ae(S,.86,.12)*.082;L=(.088+F+H)*R,D=(.11+ae(S,.26,.19)*.046+F*1.08+H*.84)*R}const k=le(.7,.94,S),B=1-le(.08,.42,S);for(let F=0;F<=a;F++){const H=F/a,V=H*Math.PI*2,Y=Math.sin(V),Z=Math.cos(V),X=Y*r>0?Math.abs(Y):0,W=1-.28*B*X;let O=1;if(k>.01&&Z>-.35){const z=Math.atan2(Y,Math.max(.05,Z+.25)),I=Math.cos(z*3.6);O+=.16*k*Math.max(-.12,I)*le(-.35,.45,Z)}const st=le(-.25,.55,Z+.35*X),at=le(.36,.68,S),j=S*22,K=H*14+Math.floor(j)*.5,G=Math.max(0,Math.sin(j*Math.PI))*Math.max(0,Math.sin(K*Math.PI))*.0038*st*at,nt=L*W*O+G,_t=D*O+G,J=new T().copy(E).addScaledVector(P,nt*Y).addScaledVector(x,_t*Z);S>.7&&J.y<.004&&(J.y=.002+Math.max(0,J.y)*.14);const U=A*(a+1)+F;d[U*3]=J.x,d[U*3+1]=J.y,d[U*3+2]=J.z,f[U*2]=S*1.35,f[U*2+1]=H*.85,g[U*4]=.36+1.62*st*at;const rt=Xn(J,c,h,3.5),dt=le(.24,0,S)*.72,wt=c[c.length-1],vt=le(.74,.88,S),Lt=(1-dt)*(1-vt),yt=Be([wt,c[0],rt.indices[0],rt.indices[1]],[vt,dt*(1-vt),rt.weights[0]*Lt,rt.weights[1]*Lt]);v.set(yt.indices,U*4),m.set(yt.weights,U*4)}}const M=new Uint16Array(o*a*6);let w=0;for(let A=0;A<o;A++)for(let b=0;b<a;b++){const S=A*(a+1)+b,E=(A+1)*(a+1)+b,y=(A+1)*(a+1)+(b+1),x=A*(a+1)+(b+1);M[w++]=S,M[w++]=E,M[w++]=y,M[w++]=S,M[w++]=y,M[w++]=x}const _=new Xt;return _.setAttribute("position",new q(d,3)),_.setAttribute("uv",new q(f,2)),_.setAttribute("aAnatomyData",new q(g,4)),_.setAttribute("skinIndex",new fe(v,4)),_.setAttribute("skinWeight",new Yt(m,4)),_.setIndex(new q(M,1)),_.computeVertexNormals(),xa(_,o,a),_}function xa(i,t,e){const n=i.getAttribute("normal"),s=new T,o=new T;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function W1(i,t){return{jawSkinGeometry:Ve([G1(i,t),...X1(i,t)]),oralGumsGeometry:Y1(i,t),teethGeometry:$1(i,t),tongueGeometry:q1(i,t),irisGeometry:qc(i,t,!1),corneaGeometry:qc(i,t,!0),clawsGeometry:j1(i,t)}}function En(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function G1(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4);for(let p=0;p<=e;p++){const M=p/e,w=$.lerp(1.55,2.226,M),_=Fs(w),A=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.88)/.12),2))),b=Math.max(.002,(_-.0035*En(1.66,1.76,w))*A),S=Si(w),E=.028*(1-En(1.55,1.7,w)),y=S+.0035+E,x=(.088-.034*M)*A;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),D=Math.cos(R),k=Math.exp(-Math.pow((M-.28)/.22,2))*.011,B=Math.exp(-Math.pow((M-.3)/.16,2))*Math.abs(L)*.01,F=(b+B)*L,H=-.022*D*(1-Math.pow(L,2))*En(1.68,1.78,w),V=D>=0?y+H:y+(x+k)*D;let Y=0,Z=V;if(w>1.98&&w<2.18&&D<-.55){const nt=Math.abs(F-.024-(w-2.08)*.25);nt<.013&&(Y=1-nt/.013,Z+=.0022*Y)}const X=p*(n+1)+P;c[X*3]=F,c[X*3+1]=Z,c[X*3+2]=w,h[X*2]=M*.95,h[X*2+1]=C*.85;const W=Math.exp(-Math.pow(D/.35,2));u[X*4]=Math.min(1,.38+.56*Math.max(W,M>.7?(M-.7)*3:0)),u[X*4+1]=Y,u[X*4+2]=0,u[X*4+3]=0;const O=En(1.62,1.71,w),st=1-O,at=En(1.42,1.64,w),j=En(1.36,1.56,w),K=st*(1-at),G=Be([s,o,a,r],[O,st*at,K*(.52+.48*j),K*(.48-.48*j)]);d.set(G.indices,X*4),f.set(G.weights,X*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let p=0;p<e;p++)for(let M=0;M<n;M++){const w=p*(n+1)+M,_=(p+1)*(n+1)+M,A=(p+1)*(n+1)+(M+1),b=p*(n+1)+(M+1);g[v++]=w,g[v++]=_,g[v++]=A,g[v++]=w,g[v++]=A,g[v++]=b}const m=new Xt;return m.setAttribute("position",new q(c,3)),m.setAttribute("uv",new q(h,2)),m.setAttribute("aAnatomyData",new q(u,4)),m.setAttribute("skinIndex",new fe(d,4)),m.setAttribute("skinWeight",new Yt(f,4)),m.setIndex(new q(g,1)),m.computeVertexNormals(),m}function X1(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=t===0?14:8,o=t===0?12:8,a=[];for(const r of["L","R"]){const l=r==="L"?1:-1,c=(s+1)*(o+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const w=M/o;for(let _=0;_<=s;_++){const A=_/s,b=$.lerp(1.65,1.9,A),S=Si(b),E=Fs(b)-.008,y=-.016*Math.sin(w*Math.PI)*Math.pow(A,1.3),x=.026*(1-.55*A),P=S+(w-.5)*2*x,C=l*(E-.006*A+y*.35),R=M*(s+1)+_;h[R*3]=C,h[R*3+1]=P,h[R*3+2]=b+y,u[R*2]=A*.3,u[R*2+1]=w*.3,d[R*4]=.35;const L=En(0,1,w),D=1-L;f.set([e,n,0,0],R*4),g.set([L,D,0,0],R*4)}}const v=new Uint16Array(s*o*6);let m=0;for(let M=0;M<o;M++)for(let w=0;w<s;w++){const _=M*(s+1)+w,A=(M+1)*(s+1)+w,b=(M+1)*(s+1)+(w+1),S=M*(s+1)+(w+1);r==="L"?(v[m++]=_,v[m++]=S,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=A):(v[m++]=_,v[m++]=A,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=S)}const p=new Xt;p.setAttribute("position",new q(h,3)),p.setAttribute("uv",new q(u,2)),p.setAttribute("aAnatomyData",new q(d,4)),p.setAttribute("skinIndex",new fe(f,4)),p.setAttribute("skinWeight",new Yt(g,4)),p.setIndex(new q(v,1)),p.computeVertexNormals(),a.push(p)}return a}function au(i,t){const e=1.76+Math.cos(i)*(t?.422:.406),n=Math.max(.04,Fs(e)-(t?.022:.03));return{x:Math.sin(i)*n,z:e}}function Y1(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=[],o=t===0?32:18,a=t===0?28:16;for(const u of[!0,!1]){const d=u?e:n,f=(o+1)*(a+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),p=new Uint16Array(f*4),M=new Float32Array(f*4);for(let b=0;b<=o;b++){const S=b/o,E=$.lerp(1.68,2.19,S),y=Si(E),x=Math.max(.02,(Fs(E)-.016)*Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(S-.86)/.14),2))));for(let P=0;P<=a;P++){const C=P/a*2-1,R=Math.abs(C),L=Math.sqrt(Math.max(0,1-C*C)),D=C*x;let k;if(u){const F=S*Math.PI*18-R*2.6,H=Math.pow(.5+.5*Math.sin(F),1.8)*.0052*L*En(.08,.25,S),V=-.0032*Math.exp(-Math.pow(C/.1,2))*L,Y=.0035*Math.abs(Math.sin(S*Math.PI*16))*En(.75,.98,R);k=y+.004+.032*L-H+V-Y}else{const F=.0038*Math.exp(-Math.pow((R-.34)/.14,2))*L,H=.0035*Math.exp(-Math.pow(C/.07,2))*En(.55,.2,S),V=.003*Math.abs(Math.sin(S*Math.PI*14))*En(.75,.98,R);k=y-.002-.02*L+F+H+V}const B=b*(a+1)+P;g[B*3]=D,g[B*3+1]=k,g[B*3+2]=E,v[B*2]=S*2.4,v[B*2+1]=(C*.5+.5)*2,m[B*4]=.45,m[B*4+2]=(1-En(0,.38,S))*.85,p.set([d,0,0,0],B*4),M.set([1,0,0,0],B*4)}}const w=new Uint16Array(o*a*6);let _=0;for(let b=0;b<o;b++)for(let S=0;S<a;S++){const E=b*(a+1)+S,y=(b+1)*(a+1)+S,x=(b+1)*(a+1)+(S+1),P=b*(a+1)+(S+1);u?(w[_++]=E,w[_++]=x,w[_++]=y,w[_++]=E,w[_++]=P,w[_++]=x):(w[_++]=E,w[_++]=y,w[_++]=x,w[_++]=E,w[_++]=x,w[_++]=P)}const A=new Xt;A.setAttribute("position",new q(g,3)),A.setAttribute("uv",new q(v,2)),A.setAttribute("aAnatomyData",new q(m,4)),A.setAttribute("skinIndex",new fe(p,4)),A.setAttribute("skinWeight",new Yt(M,4)),A.setIndex(new q(w,1)),A.computeVertexNormals(),s.push(A)}const r=t===0?42:22,l=t===0?12:8;for(const u of[!0,!1]){const d=u?e:n,f=u?16:14,g=.0155,v=(r+1)*(l+1),m=new Float32Array(v*3),p=new Float32Array(v*2),M=new Float32Array(v*4),w=new Uint16Array(v*4),_=new Float32Array(v*4),A=[];for(let x=0;x<=18;x++){const P=$.lerp(-Math.PI*.46,Math.PI*.46,x/18),C=au(P,u),R=Si(C.z)+(u?.012:-.01);A.push(new T(C.x,R,C.z))}const b=new Fn(A);for(let x=0;x<=r;x++){const P=x/r,C=b.getPointAt(P),R=b.getTangentAt(P).normalize(),L=new T(0,1,0),D=new T().crossVectors(L,R).normalize(),k=1+.24*Math.pow(.5+.5*Math.cos(P*Math.PI*f*2),2),B=g*k;for(let F=0;F<=l;F++){const H=F/l,V=H*Math.PI*2,Y=1+.12*Math.sin(V*3),Z=new T().copy(C).addScaledVector(D,B*Y*Math.sin(V)).addScaledVector(L,B*.82*Math.cos(V)),X=x*(l+1)+F;m[X*3]=Z.x,m[X*3+1]=Z.y,m[X*3+2]=Z.z,p[X*2]=P*3,p[X*2+1]=H*1.2,M[X*4]=.4,w.set([d,0,0,0],X*4),_.set([1,0,0,0],X*4)}}const S=new Uint16Array(r*l*6);let E=0;for(let x=0;x<r;x++)for(let P=0;P<l;P++){const C=x*(l+1)+P,R=(x+1)*(l+1)+P,L=(x+1)*(l+1)+(P+1),D=x*(l+1)+(P+1);S[E++]=C,S[E++]=R,S[E++]=L,S[E++]=C,S[E++]=L,S[E++]=D}const y=new Xt;y.setAttribute("position",new q(m,3)),y.setAttribute("uv",new q(p,2)),y.setAttribute("aAnatomyData",new q(M,4)),y.setAttribute("skinIndex",new fe(w,4)),y.setAttribute("skinWeight",new Yt(_,4)),y.setIndex(new q(S,1)),y.computeVertexNormals(),s.push(y)}const c=t===0?18:10,h=t===0?12:8;{const u=(c+1)*(h+1),d=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4);for(let _=0;_<=h;_++){const A=_/h;for(let b=0;b<=c;b++){const S=b/c,E=$.lerp(-Math.PI*.62,Math.PI*.62,S),y=1.78-Math.cos(E)*.11,x=Fs(Math.max(1.66,y))-.022,P=Math.sin(E)*x,C=Si(y),R=$.lerp(C-.018,C+.03,A),L=_*(c+1)+b;d[L*3]=P,d[L*3+1]=R,d[L*3+2]=y,f[L*2]=S*1.5,f[L*2+1]=A*1.5,g[L*4]=.5,g[L*4+2]=.95*Math.cos(E*.65);const D=En(0,1,A);v.set([e,n,0,0],L*4),m.set([D,1-D,0,0],L*4)}}const p=new Uint16Array(c*h*6);let M=0;for(let _=0;_<h;_++)for(let A=0;A<c;A++){const b=_*(c+1)+A,S=(_+1)*(c+1)+A,E=(_+1)*(c+1)+(A+1),y=_*(c+1)+(A+1);p[M++]=b,p[M++]=S,p[M++]=E,p[M++]=b,p[M++]=E,p[M++]=y}const w=new Xt;w.setAttribute("position",new q(d,3)),w.setAttribute("uv",new q(f,2)),w.setAttribute("aAnatomyData",new q(g,4)),w.setAttribute("skinIndex",new fe(v,4)),w.setAttribute("skinWeight",new Yt(m,4)),w.setIndex(new q(p,1)),w.computeVertexNormals(),s.push(w)}return Ve(s)}function $1(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,f=$.lerp(-Math.PI*.42,Math.PI*.42,d),g=au(f,r),v=g.x,m=g.z,p=Si(m)+(r?.011:-.01),M=1+.34*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),w=.023*M*(.78+.22*Math.cos(f)),_=.0062*M,A=(o+1)*(a+1),b=new Float32Array(A*3),S=new Float32Array(A*2),E=new Float32Array(A*4),y=new Uint16Array(A*4),x=new Float32Array(A*4),P=-Math.sin(f),C=-Math.cos(f);for(let k=0;k<=o;k++){const B=r?1-k/o:k/o,F=_*(1-.88*Math.pow(B,1.25)),H=.0055*B*B,V=v+P*H,Y=p+h*w*B,Z=m+C*H-.003*B*B;for(let X=0;X<=a;X++){const W=X/a,O=W*Math.PI*2,st=k*(a+1)+X;b[st*3]=V+Math.sin(O)*F,b[st*3+1]=Y,b[st*3+2]=Z+Math.cos(O)*F,S[st*2]=B,S[st*2+1]=W,y.set([c,0,0,0],st*4),x.set([1,0,0,0],st*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let k=0;k<o;k++)for(let B=0;B<a;B++){const F=k*(a+1)+B,H=(k+1)*(a+1)+B,V=(k+1)*(a+1)+(B+1),Y=k*(a+1)+(B+1);R[L++]=F,R[L++]=H,R[L++]=V,R[L++]=F,R[L++]=V,R[L++]=Y}const D=new Xt;D.setAttribute("position",new q(b,3)),D.setAttribute("uv",new q(S,2)),D.setAttribute("aAnatomyData",new q(E,4)),D.setAttribute("skinIndex",new fe(y,4)),D.setAttribute("skinWeight",new Yt(x,4)),D.setIndex(new q(R,1)),D.computeVertexNormals(),s.push(D)}}return Ve(s)}function q1(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let m=0;m<=e;m++){const p=m/e,M=$.lerp(1.74,2.12,p),w=Si(M)-.004,_=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),A=(.08+.012*Math.sin(p*Math.PI)-.022*p)*_,b=(.015-.005*p)*_;for(let S=0;S<=n;S++){const E=S/n,y=E*Math.PI*2,x=Math.sin(y),P=Math.cos(y),C=P>.35?-.0042*Math.exp(-Math.pow(x/.24,2)):0,R=P>.2?.0012*Math.sin(p*Math.PI*26)*Math.cos(x*Math.PI*9)*_:0,L=new T(A*x,w+b*P+C+R,M),D=m*(n+1)+S;l[D*3]=L.x,l[D*3+1]=L.y,l[D*3+2]=L.z,c[D*2]=p*2.5,c[D*2+1]=E*1.8;const k=Xn(L,o,a,3.8);u.set(k.indices,D*4),d.set(k.weights,D*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let p=0;p<n;p++){const M=m*(n+1)+p,w=(m+1)*(n+1)+p,_=(m+1)*(n+1)+(p+1),A=m*(n+1)+(p+1);f[g++]=M,f[g++]=w,f[g++]=_,f[g++]=M,f[g++]=_,f[g++]=A}const v=new Xt;return v.setAttribute("position",new q(l,3)),v.setAttribute("uv",new q(c,2)),v.setAttribute("aAnatomyData",new q(h,4)),v.setAttribute("skinIndex",new fe(u,4)),v.setAttribute("skinWeight",new Yt(d,4)),v.setIndex(new q(f,1)),v.computeVertexNormals(),v}function qc(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?co:ho).clone(),u=new T(r*-.16,.985,.06).normalize(),d=new T().crossVectors(u,h).normalize(),f=new T().crossVectors(h,d).normalize(),g=e?ca+9e-4:ca,v=.94,m=(s+1)*(o+1),p=new Float32Array(m*3),M=new Float32Array(m*2),w=new Float32Array(m*4),_=new Uint16Array(m*4),A=new Float32Array(m*4);for(let y=0;y<=s;y++){const x=y/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(x),C=Math.cos(x);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,D=Math.cos(L),k=Math.sin(L);let B=g;if(x<v){const Z=1-x/v;e?B+=.0014*Z*Z:B-=.0028*Z*Z}const F=new T().addScaledVector(h,C).addScaledVector(d,P*D).addScaledVector(f,P*k).normalize(),H=new T().copy(l).addScaledVector(F,B),V=y*(o+1)+R;p[V*3]=H.x,p[V*3+1]=H.y,p[V*3+2]=H.z;const Y=Math.min(.498,x/v*.48);M[V*2]=.5+Y*D,M[V*2+1]=.5+Y*k,_.set([c,0,0,0],V*4),A.set([1,0,0,0],V*4)}}const b=new Uint16Array(s*o*6);let S=0;for(let y=0;y<s;y++)for(let x=0;x<o;x++){const P=y*(o+1)+x,C=(y+1)*(o+1)+x,R=(y+1)*(o+1)+(x+1),L=y*(o+1)+(x+1);b[S++]=P,b[S++]=C,b[S++]=R,b[S++]=P,b[S++]=R,b[S++]=L}const E=new Xt;E.setAttribute("position",new q(p,3)),E.setAttribute("uv",new q(M,2)),E.setAttribute("aAnatomyData",new q(w,4)),E.setAttribute("skinIndex",new fe(_,4)),E.setAttribute("skinWeight",new Yt(A,4)),E.setIndex(new q(b,1)),E.computeVertexNormals(),n.push(E)}return Ve(n)}function j1(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=nu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,f=d,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,p=l.rootZ+d*l.toeLength*v,M=l.rootY+Math.sin(v*Math.PI)*.011-.009*v*v+.002,w=l.toeLength*(1-v)+l.clawLength,_=l.tipRadius*.76,A=(n+1)*(s+1),b=new Float32Array(A*3),S=new Float32Array(A*2),E=new Float32Array(A*4),y=new Uint16Array(A*4),x=new Float32Array(A*4);for(let L=0;L<=n;L++){const D=L/n,k=_*(1-.85*Math.pow(D,1.52)),B=m+u*w*D,F=p+d*w*D,H=Math.max(.004,M-.036*Math.pow(D,1.8)+.006*Math.sin(D*Math.PI));for(let V=0;V<=s;V++){const Y=V/s,Z=Y*Math.PI*2,X=Math.sin(Z),W=Math.cos(Z),O=L*(s+1)+V;b[O*3]=B+f*X*k*.74,b[O*3+1]=Math.max(.002,H+W*k*1.05),b[O*3+2]=F+g*X*k*.74,S[O*2]=D,S[O*2+1]=Y,y.set([c,0,0,0],O*4),x.set([1,0,0,0],O*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let D=0;D<s;D++){const k=L*(s+1)+D,B=(L+1)*(s+1)+D,F=(L+1)*(s+1)+(D+1),H=L*(s+1)+(D+1);P[C++]=k,P[C++]=B,P[C++]=F,P[C++]=k,P[C++]=F,P[C++]=H}const R=new Xt;R.setAttribute("position",new q(b,3)),R.setAttribute("uv",new q(S,2)),R.setAttribute("aAnatomyData",new q(E,4)),R.setAttribute("skinIndex",new fe(y,4)),R.setAttribute("skinWeight",new Yt(x,4)),R.setIndex(new q(P,1)),R.computeVertexNormals(),e.push(R)}}return Ve(e)}function Z1(i,t){const e=[],n=[],s=[];for(const o of["L","R"]){const a=o==="L"?1:-1;e.push(...K1(i,o,a,t)),n.push(...Q1(i,o,a,t)),e.push(...J1(i,o,t)),n.push(t_(i,o,t)),s.push(s_(i,o,a,t))}return e.push(...e_(i,t)),n.push(n_(i,t)),{wingSparsSkinGeometry:Ve(e),wingMembraneGeometry:Ve(n),dorsalSpinesGeometry:i_(i,t),alulaClawsGeometry:Ve(s)}}function ao(i,t,e,n,s,o,a=.55){const r=new Fn(t),l=e.map(_=>i.boneIndexMap.get(_)),c=e.map(_=>i.bindWorldPositions.get(_)),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new T(0,1,0);for(let _=0;_<=s;_++){const A=_/s,b=r.getPointAt(A),S=r.getTangentAt(A).normalize();let E=m.clone().addScaledVector(S,-m.dot(S));E.lengthSq()<1e-4&&E.set(0,0,1),E.normalize();const y=new T().crossVectors(E,S).normalize(),x=A*(n.length-1),P=Math.min(n.length-2,Math.floor(x)),C=x-P;let R=$.lerp(n[P],n[P+1],C);A>.92&&(R*=Math.sqrt(Math.max(0,1-Math.pow((A-.92)/.08,2))));for(let L=0;L<=o;L++){const D=L/o,k=D*Math.PI*2,B=new T().copy(b).addScaledVector(y,R*Math.sin(k)).addScaledVector(E,R*.88*Math.cos(k)),F=_*(o+1)+L;u[F*3]=B.x,u[F*3+1]=B.y,u[F*3+2]=B.z,d[F*2]=A*1.4,d[F*2+1]=D*.45,f[F*4]=a;const H=Xn(B,l,c,3.8);g.set(H.indices,F*4),v.set(H.weights,F*4)}}const p=new Uint16Array(s*o*6);let M=0;for(let _=0;_<s;_++)for(let A=0;A<o;A++){const b=_*(o+1)+A,S=(_+1)*(o+1)+A,E=(_+1)*(o+1)+(A+1),y=_*(o+1)+(A+1);p[M++]=b,p[M++]=S,p[M++]=E,p[M++]=b,p[M++]=E,p[M++]=y}const w=new Xt;return w.setAttribute("position",new q(u,3)),w.setAttribute("uv",new q(d,2)),w.setAttribute("aAnatomyData",new q(f,4)),w.setAttribute("skinIndex",new fe(g,4)),w.setAttribute("skinWeight",new Yt(v,4)),w.setIndex(new q(p,1)),w.computeVertexNormals(),w}function K1(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new T(e*.17,1.01,.75),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(ao(i,c,h,[.062,.068,.066,.056,.044,.03,.008],o,a,.72));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(ao(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.03,.019,.005],r,l,.58))}return s}function Q1(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(bs(o,Math.max(4,Math.floor(a*.5)),(S,E)=>{const y=new T().lerpVectors(new T(e*.3,1.13,.88),f,S);y.z+=.05*Math.sin(S*Math.PI);const x=S<.48?new T().lerpVectors(v,g,S/.48):new T().lerpVectors(g,f,(S-.48)/.52),P=new T().lerpVectors(x,y,E),C=Math.max(0,(S-.45)/.55),R=Math.max(0,(.55-S)/.55),L=1-Math.abs(S-.5)*1.8,D=Be([c,l,r,h],[R,Math.max(0,L),C,(1-S)*.25]);return{pos:P,skin:D,thinness:E*.65}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),M=i.boneIndexMap.get(`wingFinger_${t}_1_a`),w=i.boneIndexMap.get(`wingFinger_${t}_1_b`),_=new T(e*.32,1.06,.72),A=new T(e*.29,.9,.14),b=new T(e*.26,.82,-.46);s.push(bs(o,a,(S,E)=>{const y=E<.5?new T().lerpVectors(_,A,E*2):new T().lerpVectors(A,b,(E-.5)*2),x=E<.5?new T().lerpVectors(f,m,E*2):new T().lerpVectors(m,p,(E-.5)*2),P=S<.45?new T().lerpVectors(_,g,S/.45):new T().lerpVectors(g,f,(S-.45)/.55),C=new T().lerpVectors(y,x,S),R=new T().lerpVectors(P,C,Math.pow(E,.88)),L=Math.sin(S*Math.PI)*Math.pow(E,2.2);R.z+=.19*L,R.y+=.035*Math.sin(S*Math.PI)*Math.sin(E*Math.PI);const D=E<.42?h:E<.78?u:d,k=E<.35?r:E<.72?M:w,B=(1-E)*Math.sin(S*Math.PI)*.6,F=Be([D,k,l,r],[(1-S)*(1-B*.5),S*(1-B*.5),B*.65,B*.35]);return{pos:R,skin:F,thinness:.35+.65*Math.sin(S*Math.PI)*E}}));for(let S=1;S<=5;S++){const E=i.bindWorldPositions.get(`wingFinger_${t}_${S}_a`),y=i.bindWorldPositions.get(`wingFinger_${t}_${S}_b`),x=i.bindWorldPositions.get(`wingFinger_${t}_${S+1}_a`),P=i.bindWorldPositions.get(`wingFinger_${t}_${S+1}_b`),C=i.boneIndexMap.get(`wingFinger_${t}_${S}_a`),R=i.boneIndexMap.get(`wingFinger_${t}_${S}_b`),L=i.boneIndexMap.get(`wingFinger_${t}_${S+1}_a`),D=i.boneIndexMap.get(`wingFinger_${t}_${S+1}_b`),k=S===5?.24:.17;s.push(bs(o,a,(B,F)=>{const H=F<.5?new T().lerpVectors(f,E,F*2):new T().lerpVectors(E,y,(F-.5)*2),V=F<.5?new T().lerpVectors(f,x,F*2):new T().lerpVectors(x,P,(F-.5)*2),Y=new T().lerpVectors(H,V,B),Z=new T().subVectors(f,Y).normalize(),X=Math.sin(B*Math.PI)*Math.pow(F,2.4);Y.addScaledVector(Z,k*X),Y.y+=.028*Math.sin(B*Math.PI)*Math.sin(F*Math.PI);let W;if(F<.25){const O=1-F/.25;W=Be([r,C,L,0],[O,(1-O)*(1-B),(1-O)*B,0])}else{const O=Math.max(0,Math.min(1,(F-.42)/.48));W=Be([C,R,L,D],[(1-B)*(1-O),(1-B)*O,B*(1-O),B*O])}return{pos:Y,skin:W,thinness:.3+.7*Math.sin(B*Math.PI)*Math.pow(F,.7)}}))}return s}function J1(i,t,e){const n=e===0?12:7,s=e===0?8:6,o=t==="L"?1:-1,a=[];return la.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new T(o*r.rootX,r.rootY,r.rootZ),u=new T(o*r.tipX,r.tipY,r.tipZ);a.push(ao(i,[h,u],[c],[.017,.004],n,s,.55))}),a}function t_(i,t,e){const n=e===0?12:7,s=t==="L"?1:-1,o=[],a=la.map(d=>new T(s*d.rootX,d.rootY,d.rootZ)),r=la.map(d=>new T(s*d.tipX,d.tipY,d.tipZ)),l=[1,2,3].map(d=>i.boneIndexMap.get(`pelvicFin_${t}_${d}`)),c=i.boneIndexMap.get("tail_3"),h=new T(s*.1,.54,-1.56),u=[{rA:a[0],tA:r[0],rB:a[1],tB:r[1],iA:l[0],iB:l[1]},{rA:a[1],tA:r[1],rB:a[2],tB:r[2],iA:l[1],iB:l[2]},{rA:a[2],tA:r[2],rB:h,tB:h,iA:l[2],iB:c}];for(const d of u)o.push(bs(n,n,(f,g)=>{const v=new T().lerpVectors(d.rA,d.tA,g),m=new T().lerpVectors(d.rB,d.tB,g),p=new T().lerpVectors(v,m,f),M=new T().subVectors(d.rA,p).normalize();p.addScaledVector(M,.042*Math.sin(f*Math.PI)*Math.pow(g,2.1));const w=Be([d.iA,d.iB,0,0],[1-f,f,0,0]);return{pos:p,skin:w,thinness:.4+.55*g}}));return Ve(o)}function e_(i,t){const e=t===0?12:7,n=t===0?8:6,s=[];return Xi.forEach((o,a)=>{const r=`tailFin_R_${a+1}`,l=new T(-o.rootX,o.rootY,o.rootZ),c=new T(-o.tipX,o.tipY,o.tipZ);s.push(ao(i,[l,c],[r],[.014,.0038],e,n,.52))}),s}function n_(i,t){const e=t===0?12:7,n=[];for(let h=0;h<4;h++){const u=Xi[h],d=Xi[h+1],f=new T(-u.rootX,u.rootY,u.rootZ),g=new T(-d.rootX,d.rootY,d.rootZ),v=new T(-u.tipX,u.tipY,u.tipZ),m=new T(-d.tipX,d.tipY,d.tipZ),p=i.boneIndexMap.get(`tailFin_R_${h+1}`),M=i.boneIndexMap.get(`tailFin_R_${h+2}`);n.push(bs(e,e,(w,_)=>{const A=new T().lerpVectors(f,v,_),b=new T().lerpVectors(g,m,_),S=new T().lerpVectors(A,b,w),E=new T().lerpVectors(f,g,w),y=new T().subVectors(E,S).normalize();S.addScaledVector(y,.046*Math.sin(w*Math.PI)*Math.pow(_,2.15));const x=Be([p,M,0,0],[1-w,w,0,0]);return{pos:S,skin:x,thinness:.45+.55*_}}))}const s=Xi[4],o=new T(-s.rootX,s.rootY,s.rootZ),a=new T(-s.tipX,s.tipY,s.tipZ),r=new T(-s.rootX,s.rootY,-4.5),l=i.boneIndexMap.get("tailFin_R_5"),c=i.boneIndexMap.get("tailFinHinge_R");return n.push(bs(e,e,(h,u)=>{const d=new T().lerpVectors(o,a,u),f=new T().lerpVectors(d,r,h),g=Be([l,c,0,0],[1-h,h,0,0]);return{pos:f,skin:g,thinness:.45+.5*u}})),Ve(n)}function bs(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const f=d/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),p=d*(i+1)+g;s[p*3]=m.pos.x,s[p*3+1]=m.pos.y,s[p*3+2]=m.pos.z,o[p*2]=v*1.25,o[p*2+1]=f*1.25,a[p*4]=.22,a[p*4+1]=0,a[p*4+2]=.18*m.thinness,a[p*4+3]=m.thinness,r.set(m.skin.indices,p*4),l.set(m.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let f=0;f<i;f++){const g=d*(i+1)+f,v=(d+1)*(i+1)+f,m=(d+1)*(i+1)+(f+1),p=d*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=p}const u=new Xt;return u.setAttribute("position",new q(s,3)),u.setAttribute("uv",new q(o,2)),u.setAttribute("uv1",new q(o,2)),u.setAttribute("aAnatomyData",new q(a,4)),u.setAttribute("skinIndex",new fe(r,4)),u.setAttribute("skinWeight",new Yt(l,4)),u.setIndex(new q(c,1)),u.computeVertexNormals(),u}function i_(i,t){const e=t===0?32:t===1?22:14,n=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],s=n.map(_=>i.boneIndexMap.get(_)),o=n.map(_=>i.bindWorldPositions.get(_)),a=e*2,r=6,l=8,c=new Float32Array(a*r*3),h=new Float32Array(a*r*3),u=new Float32Array(a*r*2),d=new Float32Array(a*r*4),f=new Uint16Array(a*r*4),g=new Float32Array(a*r*4),v=new Uint16Array(a*l*3);let m=0,p=0;for(let _=0;_<e;_++){const A=_/(e-1),b=$.lerp(-3.25,1.48,1-Math.pow(1-A,1.28)),S=lr(b),E=S.point,y=S.tangent,x=S.up,P=.32+.68*Math.sin(Math.pow(A,.74)*Math.PI),C=.078*P,R=.108*P,L=-.028,D=ou(E,i,s,o);for(const k of[1,-1]){const B=k*.004,F=k*C*.62,H=-C*.16,V=lr(b+R*.5).point,Y=lr(b-R*.5).point,Z=[V.clone().addScaledVector(x,L).setX(B),Y.clone().addScaledVector(x,L).setX(B),E.clone().addScaledVector(x,L*.85).setX(k*.02*P),E.clone().addScaledVector(y,R*.1).addScaledVector(x,C*.64).setX(B*1.2),E.clone().addScaledVector(y,-R*.4).addScaledVector(x,C).setX(B*1.1),E.clone().addScaledVector(y,-R*.12).addScaledVector(x,C*.42).setX(k*.001)],X=Z.map((O,st)=>{const at=O.clone();if(st>=3){const j=st===4?1:st===3?.68:.48;at.x+=F*j,at.y+=H*j}return at});for(let O=0;O<r;O++){const st=(m+O)*3;c[st]=Z[O].x,c[st+1]=Z[O].y,c[st+2]=Z[O].z,h[st]=X[O].x,h[st+1]=X[O].y,h[st+2]=X[O].z,u[(m+O)*2]=A,u[(m+O)*2+1]=O/r,d[(m+O)*4]=.75,d[(m+O)*4+1]=0,d[(m+O)*4+2]=O===5||O>=3?.96:.72,d[(m+O)*4+3]=0,f.set(D.indices,(m+O)*4),g.set(D.weights,(m+O)*4)}const W=k>0?[[0,2,3],[2,1,4],[2,4,3],[0,3,5],[5,3,4],[5,4,1],[0,5,1],[0,1,2]]:[[0,3,2],[2,4,1],[2,3,4],[0,5,3],[5,4,3],[5,1,4],[0,1,5],[0,2,1]];for(const O of W)v[p++]=m+O[0],v[p++]=m+O[1],v[p++]=m+O[2];m+=r}}const M=new Xt;M.setAttribute("position",new q(c,3)),M.setAttribute("uv",new q(u,2)),M.setAttribute("uv1",new q(u,2)),M.setAttribute("aAnatomyData",new q(d,4)),M.setAttribute("skinIndex",new fe(f,4)),M.setAttribute("skinWeight",new Yt(g,4)),M.setIndex(new q(v,1));const w=new q(h,3);return w.name="dorsalVSplit",M.morphAttributes.position=[w],M.computeVertexNormals(),M}function s_(i,t,e,n){const s=i.bindWorldPositions.get(`wingWrist_${t}`),o=s.clone().add(new T(e*.035,.018,.085));return ao(i,[s,o],[`wingWrist_${t}`],[.016,.003],n===0?7:4,n===0?8:6,.8)}function o_(i,t){const e=[],n=[],s=[],o=i.boneIndexMap.get("prostheticCollar"),a=i.boneIndexMap.get("prostheticRod"),r=i.boneIndexMap.get("tail_8"),l=i.boneIndexMap.get("tail_9"),c=i.boneIndexMap.get("tail_10"),h=t===0?20:12,u=[{z:-3.48,y:.125,rOuter:.066,length:.044,boneIdx:o},{z:-3.56,y:.125,rOuter:.062,length:.04,boneIdx:o},{z:-4.34,y:.128,rOuter:.033,length:.032,boneIdx:c}];for(const b of u)e.push($s(new T(0,b.y,b.z-b.length*.5),new T(0,b.y,b.z+b.length*.5),b.rOuter,b.rOuter*1.03,h,b.boneIdx));e.push($s(new T(.044,.138,-3.6),new T(.048,.142,-3.46),.024,.028,t===0?14:8,o));const d=t===0?16:8;e.push(Zc(new T(.038,.138,-3.52),new T(.02,.138,-4.34),.012,.0085,d,t===0?12:8,[a,l,c])),n.push(Zc(new T(.026,.126,-3.5),new T(.014,.127,-4.35),.014,.009,d,t===0?10:6,[r,l,c]));const f=[],g=[],v=[];Xi.forEach((b,S)=>{const E=`tailFin_L_${S+1}`,y=i.boneIndexMap.get(E),x=new T(b.rootX,b.rootY,b.rootZ),P=new T(b.tipX,b.tipY,b.tipZ);f.push(x),g.push(P),v.push(y),n.push(ru(x,P,.0125,.004,t===0?10:6,t===0?10:6,y,y));const C=new T().subVectors(P,x).normalize();e.push($s(x.clone(),x.clone().addScaledVector(C,.026),.0155,.0145,t===0?10:6,y)),e.push($s(P.clone().addScaledVector(C,-.012),P.clone().addScaledVector(C,.02),.0055,.0018,t===0?8:6,y))});for(let b=1;b<=4;b++){const S=b/5,E=new T().lerpVectors(f[0],g[0],S);e.push($s(E.clone().add(new T(0,-.0055,0)),E.clone().add(new T(0,.0055,0)),.006,.006,8,v[0]))}const m=t===0?12:7;for(let b=0;b<4;b++){const S=f[b],E=f[b+1],y=g[b],x=g[b+1],P=v[b],C=v[b+1];s.push(jc(m,b,(R,L)=>{const D=new T().lerpVectors(S,y,L),k=new T().lerpVectors(E,x,L),B=new T().lerpVectors(D,k,R),F=new T().lerpVectors(S,E,R),H=new T().subVectors(F,B).normalize();B.addScaledVector(H,.046*Math.sin(R*Math.PI)*Math.pow(L,2.15));const V=Be([P,C,0,0],[1-R,R,0,0]);return{pos:B,skin:V}}))}const p=f[4],M=g[4],w=new T(p.x,p.y,-4.5),_=v[4],A=i.boneIndexMap.get("tailFinHinge_L");return s.push(jc(m,4,(b,S)=>{const E=new T().lerpVectors(p,M,S),y=new T().lerpVectors(E,w,b),x=Be([_,A,0,0],[1-b,b,0,0]);return{pos:y,skin:x}})),{bronzeHardwareGeometry:Ve(e),ironStrutsGeometry:Ve(n),scalePasteMembraneGeometry:Ve(s)}}function jc(i,t,e){const n=(i+1)*(i+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=i;d++){const f=d/i;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),p=d*(i+1)+g;s[p*3]=m.pos.x,s[p*3+1]=m.pos.y,s[p*3+2]=m.pos.z,o[p*2]=(t+v)*.45,o[p*2+1]=f*1.2,a[p*4]=.55,a[p*4+3]=.25,r.set(m.skin.indices,p*4),l.set(m.skin.weights,p*4)}}const c=new Uint16Array(i*i*6);let h=0;for(let d=0;d<i;d++)for(let f=0;f<i;f++){const g=d*(i+1)+f,v=(d+1)*(i+1)+f,m=(d+1)*(i+1)+(f+1),p=d*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=p}const u=new Xt;return u.setAttribute("position",new q(s,3)),u.setAttribute("uv",new q(o,2)),u.setAttribute("uv1",new q(o,2)),u.setAttribute("aAnatomyData",new q(a,4)),u.setAttribute("skinIndex",new fe(r,4)),u.setAttribute("skinWeight",new Yt(l,4)),u.setIndex(new q(c,1)),u.computeVertexNormals(),u}function $s(i,t,e,n,s,o){return ru(i,t,e,n,3,s,o,o)}function ru(i,t,e,n,s,o,a,r){const c=new T().subVectors(t,i).clone().normalize();let h=new T(0,1,0);Math.abs(c.dot(h))>.92&&(h=new T(0,0,1));const u=h.clone().addScaledVector(c,-h.dot(c)).normalize(),d=new T().crossVectors(u,c).normalize(),f=(s+1)*(o+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),p=new Uint16Array(f*4),M=new Float32Array(f*4);for(let b=0;b<=s;b++){const S=b/s,E=new T().lerpVectors(i,t,S),y=$.lerp(e,n,S),x=b===0||b===s?.35:1;for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=E.clone().addScaledVector(d,y*x*Math.sin(R)).addScaledVector(u,y*x*Math.cos(R)),D=b*(o+1)+P;g[D*3]=L.x,g[D*3+1]=L.y,g[D*3+2]=L.z,v[D*2]=S,v[D*2+1]=C;const k=Be([a,r,0,0],[1-S,S,0,0]);p.set(k.indices,D*4),M.set(k.weights,D*4)}}const w=new Uint16Array(s*o*6);let _=0;for(let b=0;b<s;b++)for(let S=0;S<o;S++){const E=b*(o+1)+S,y=(b+1)*(o+1)+S,x=(b+1)*(o+1)+(S+1),P=b*(o+1)+(S+1);w[_++]=E,w[_++]=y,w[_++]=x,w[_++]=E,w[_++]=x,w[_++]=P}const A=new Xt;return A.setAttribute("position",new q(g,3)),A.setAttribute("uv",new q(v,2)),A.setAttribute("uv1",new q(v,2)),A.setAttribute("aAnatomyData",new q(m,4)),A.setAttribute("skinIndex",new fe(p,4)),A.setAttribute("skinWeight",new Yt(M,4)),A.setIndex(new q(w,1)),A.computeVertexNormals(),A}function Zc(i,t,e,n,s,o,a){const r=new T().subVectors(t,i).normalize(),l=new T(0,1,0).addScaledVector(r,-r.y).normalize(),c=new T().crossVectors(l,r).normalize(),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4);for(let w=0;w<=s;w++){const _=w/s,A=new T().lerpVectors(i,t,_),b=$.lerp(e,n,_),S=Math.max(0,1-_*2),E=Math.max(0,(_-.5)*2),y=1-S-E,x=Be([a[0],a[1],a[2],0],[S,y,E,0]);for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=A.clone().addScaledVector(c,b*Math.sin(R)).addScaledVector(l,b*Math.cos(R)),D=w*(o+1)+P;u[D*3]=L.x,u[D*3+1]=L.y,u[D*3+2]=L.z,d[D*2]=_,d[D*2+1]=C,g.set(x.indices,D*4),v.set(x.weights,D*4)}}const m=new Uint16Array(s*o*6);let p=0;for(let w=0;w<s;w++)for(let _=0;_<o;_++){const A=w*(o+1)+_,b=(w+1)*(o+1)+_,S=(w+1)*(o+1)+(_+1),E=w*(o+1)+(_+1);m[p++]=A,m[p++]=b,m[p++]=S,m[p++]=A,m[p++]=S,m[p++]=E}const M=new Xt;return M.setAttribute("position",new q(u,3)),M.setAttribute("uv",new q(d,2)),M.setAttribute("uv1",new q(d,2)),M.setAttribute("aAnatomyData",new q(f,4)),M.setAttribute("skinIndex",new fe(g,4)),M.setAttribute("skinWeight",new Yt(v,4)),M.setIndex(new q(m,1)),M.computeVertexNormals(),M}function a_(){const i=R1(),t=U1(),e=new Gn;e.name="Toothless_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s={},o={};for(const r of[0,1,2]){const l=new Gn;l.name=`Toothless_LOD${r}`;const c=B1(i,r),h=W1(i,r),u=Z1(i,r),d=o_(i,r),f=Ve([c,h.jawSkinGeometry,u.wingSparsSkinGeometry]),g=Ve([h.clawsGeometry,u.alulaClawsGeometry]),v=(D,k,B,F=!0,H=!0)=>{const V=new Wh(k,B);return V.name=`${D}_LOD${r}`,V.castShadow=F,V.receiveShadow=H,V.frustumCulled=!1,V.bind(i.skeleton,new ee),V},m=v("BodyAndHeadSkin",f,t.skinMaterial),p=v("FlightPatagiumMembranes",u.wingMembraneGeometry,t.wingMembraneMaterial),M=v("VSplittingDorsalSpines",u.dorsalSpinesGeometry,t.skinMaterial);n.push(M);const w=v("OralGums",h.oralGumsGeometry,t.oralGumMaterial,!1,!0),_=v("RetractableTeeth",h.teethGeometry,t.teethMaterial,!0,!0),A=v("ArticulatedTongue",h.tongueGeometry,t.tongueMaterial,!1,!0),b=v("LightReactiveIrises",h.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),S=v("RefractiveCorneas",h.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1);S.renderOrder=2;const E=v("ObsidianClaws",g,t.clawMaterial,!0,!0),y=v("ProstheticBronzeLinkage",d.bronzeHardwareGeometry,t.prostheticBronzeMaterial),x=v("ProstheticIronStruts",d.ironStrutsGeometry,t.prostheticIronMaterial),P=v("ProstheticScalePasteFin",d.scalePasteMembraneGeometry,t.prostheticPasteMaterial),C=[m,p,M,w,_,A,b,S,E,y,x,P];let R=0,L=0;for(const D of C){l.add(D);const k=D.geometry.getIndex();R+=k?k.count/3:D.geometry.getAttribute("position").count/3,L+=D.geometry.getAttribute("position").count}l.visible=r===0,e.add(l),s[r]=l,o[r]={lod:r,triangles:Math.round(R),vertices:L,subMeshCount:C.length}}const a={rootGroup:e,rig:i,materials:t,lodGroups:s,dorsalSpineMeshes:n,lodStats:o,activeLOD:0,autoLOD:!1,setActiveLOD(r){a.activeLOD=r;for(const l of[0,1,2])s[l].visible=l===r},updateAutoLOD(r){if(!a.autoLOD)return a.activeLOD;const l=r<9.5?0:r<20?1:2;return l!==a.activeLOD&&a.setActiveLOD(l),a.activeLOD}};return a}function Ma(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},r=i[0].morphTargetsRelative,l=new Xt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=Kc(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);const g=Kc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Kc(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const a=new t(o),r=new q(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);r.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(r.gpuType=s),r}const _s={"golden-hour":{id:"golden-hour",label:"Golden Hour",subtitle:"Warm Berk Sunset",sunElevationDeg:11.5,sunAzimuthDeg:-140,zenithColor:1517638,horizonSunColor:14255183,horizonAntiSunColor:4938872,mieHaloColor:16754776,mieStrength:.62,mieExponent:6.5,sunLightColor:16760698,sunLightIntensity:3.75,rimLightColor:7645928,rimLightIntensity:1.55,hemiSkyColor:9811164,hemiGroundColor:3550505,hemiIntensity:1.12,cloudDarkColor:2763581,cloudLitColor:15899230,cloudCoverage:.46,mistDensity:.0021,exposure:1.14,nightFactor:0,auroraIntensity:0,waterDeepColor:332061,waterShallowColor:735294,glitterIntensity:4.8},"clear-day":{id:"clear-day",label:"Clear Day",subtitle:"Crisp Nordic Sun",sunElevationDeg:44,sunAzimuthDeg:-124,zenithColor:1854342,horizonSunColor:10208486,horizonAntiSunColor:8564696,mieHaloColor:16774110,mieStrength:.26,mieExponent:8,sunLightColor:16774630,sunLightIntensity:3.55,rimLightColor:10143989,rimLightIntensity:1.65,hemiSkyColor:11852026,hemiGroundColor:3490360,hemiIntensity:1.38,cloudDarkColor:6980254,cloudLitColor:16777215,cloudCoverage:.26,mistDensity:.0013,exposure:1.1,nightFactor:0,auroraIntensity:0,waterDeepColor:268848,waterShallowColor:808032,glitterIntensity:3.6},"dawn-dusk":{id:"dawn-dusk",label:"Dawn / Dusk",subtitle:"Alpenglow Twilight",sunElevationDeg:4.8,sunAzimuthDeg:-148,zenithColor:1448248,horizonSunColor:14184040,horizonAntiSunColor:4081256,mieHaloColor:16749688,mieStrength:.58,mieExponent:5.8,sunLightColor:16752260,sunLightIntensity:2.85,rimLightColor:8295650,rimLightIntensity:1.65,hemiSkyColor:9212620,hemiGroundColor:2761776,hemiIntensity:1.15,cloudDarkColor:2302008,cloudLitColor:15367800,cloudCoverage:.42,mistDensity:.0024,exposure:1.18,nightFactor:.22,auroraIntensity:0,waterDeepColor:396828,waterShallowColor:1190972,glitterIntensity:4.2},"misty-overcast":{id:"misty-overcast",label:"Misty Cloud",subtitle:"Nordic Sea Fog",sunElevationDeg:31,sunAzimuthDeg:-130,zenithColor:4411744,horizonSunColor:9280166,horizonAntiSunColor:7767444,mieHaloColor:13161694,mieStrength:.18,mieExponent:3.5,sunLightColor:14477039,sunLightIntensity:2.05,rimLightColor:10796760,rimLightIntensity:1.85,hemiSkyColor:11978452,hemiGroundColor:3028792,hemiIntensity:1.55,cloudDarkColor:4543072,cloudLitColor:10135733,cloudCoverage:.86,mistDensity:.0042,exposure:1.16,nightFactor:0,auroraIntensity:0,waterDeepColor:529950,waterShallowColor:1456188,glitterIntensity:1.25},"starlit-night":{id:"starlit-night",label:"Starlit Night",subtitle:"Moon & Boreal Glow",sunElevationDeg:29,sunAzimuthDeg:-136,zenithColor:330520,horizonSunColor:1452614,horizonAntiSunColor:858670,mieHaloColor:7250652,mieStrength:.3,mieExponent:9,sunLightColor:11062527,sunLightIntensity:2.35,rimLightColor:6071538,rimLightIntensity:1.95,hemiSkyColor:4220052,hemiGroundColor:1317926,hemiIntensity:1.08,cloudDarkColor:594207,cloudLitColor:2901608,cloudCoverage:.24,mistDensity:.0018,exposure:1.26,nightFactor:1,auroraIntensity:.65,waterDeepColor:132880,waterShallowColor:466476,glitterIntensity:3.4},"stormy-squall":{id:"stormy-squall",label:"Storm Squall",subtitle:"Dark North Gale",sunElevationDeg:18,sunAzimuthDeg:-138,zenithColor:1317926,horizonSunColor:4938088,horizonAntiSunColor:2634818,mieHaloColor:9348280,mieStrength:.28,mieExponent:4.5,sunLightColor:11979484,sunLightIntensity:2.45,rimLightColor:7313604,rimLightIntensity:1.8,hemiSkyColor:6979736,hemiGroundColor:1844264,hemiIntensity:1.25,cloudDarkColor:1383719,cloudLitColor:6189186,cloudCoverage:.92,mistDensity:.0036,exposure:1.18,nightFactor:0,auroraIntensity:0,waterDeepColor:265492,waterShallowColor:797746,glitterIntensity:2.1}},ni=`
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

  // Evaluates clean, continuous sky + perspective cloud radiance (100% seamless across rawDir.y = 0, ZERO horizon dark strip!)
  vec3 evalPhysicalSky(vec3 rawDir, float timeSec, bool includeStarsAndDisc) {
    vec3 normRaw = normalize(rawDir);
    vec3 dir = uIsEnvBake > 0.5 ? normRaw : normalize(vec3(normRaw.x, max(normRaw.y, 0.0), normRaw.z));
    vec3 sunN = normalize(uSunDir);
    float elev = clamp(dir.y, 0.0, 1.0);
    float sunDot = clamp(dot(dir, sunN), 0.0, 1.0);

    // Smooth azimuthal warm/cool gradient around the 360-deg horizon
    vec2 horizDir = normalize(dir.xz + vec2(1e-5));
    vec2 horizSun = normalize(sunN.xz + vec2(1e-5));
    float azim = dot(horizDir, horizSun) * 0.5 + 0.5;
    vec3 horizBase = mix(uHorizonAntiColor, uHorizonSunColor, smoothstep(0.08, 0.95, azim));

    // Rayleigh vertical gradient from zenith down to horizon
    float horizonCurve = pow(1.0 - elev, 3.1);
    vec3 sky = mix(uZenithColor, horizBase, horizonCurve);

    // Anisotropic Mie forward-scattering solar/lunar glow
    sky += uMieColor * pow(sunDot, uMieExponent) * uMieStrength * (0.35 + 0.65 * pow(1.0 - elev, 1.6));

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

      float sunLining = pow(sunDot, 3.2) * (1.0 - uCloudCoverage * 0.35);
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

    return sky;
  }

  // Evaluates exact matching sky/horizon radiance along any view ray for 100% seamless ocean & mountain horizon blending!
  vec3 evalHorizonHazeColor(vec3 viewRayDir) {
    vec3 nRay = normalize(viewRayDir);
    vec3 rayDir = normalize(vec3(nRay.x, max(nRay.y, 0.0), nRay.z));
    return evalPhysicalSky(rayDir, uTime, false);
  }
`,r_=`
  varying vec3 vWorldDir;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldDir = normalize(position);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,l_=`
  ${ni}
  varying vec3 vWorldDir;

  void main() {
    vec3 col = evalPhysicalSky(vWorldDir, uTime, true);
    gl_FragColor = vec4(col, 1.0);
  }
`;function c_(i,t,e="golden-hour"){const n=new T,s=new Dt,o=_s[e],a={uSunDir:{value:new T(-.52,.24,-.82).normalize()},uSunColor:{value:new Dt(o.sunLightColor)},uZenithColor:{value:new Dt(o.zenithColor)},uHorizonSunColor:{value:new Dt(o.horizonSunColor)},uHorizonAntiColor:{value:new Dt(o.horizonAntiSunColor)},uMieColor:{value:new Dt(o.mieHaloColor)},uMieStrength:{value:o.mieStrength},uMieExponent:{value:o.mieExponent},uCloudDarkColor:{value:new Dt(o.cloudDarkColor)},uCloudLitColor:{value:new Dt(o.cloudLitColor)},uCloudCoverage:{value:o.cloudCoverage},uMistDensity:{value:o.mistDensity},uNightFactor:{value:o.nightFactor},uAuroraIntensity:{value:o.auroraIntensity},uWaterDeepColor:{value:new Dt(o.waterDeepColor)},uWaterShallowColor:{value:new Dt(o.waterShallowColor)},uGlitterIntensity:{value:o.glitterIntensity},uIsEnvBake:{value:0},uTime:{value:0}},r=new ra(3900,64,44),l=new qe({name:"NordicPhysicalSky",vertexShader:r_,fragmentShader:l_,uniforms:a,side:vn,depthWrite:!1,depthTest:!1}),c=new Oe(r,l);c.renderOrder=-100,c.frustumCulled=!1,t.add(c);const h=new pc(o.sunLightColor,o.sunLightIntensity);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=1,h.shadow.camera.far=54;const u=13.8;h.shadow.camera.left=-u,h.shadow.camera.right=u,h.shadow.camera.top=u,h.shadow.camera.bottom=-u,h.shadow.bias=-4e-4,h.shadow.normalBias=.018,t.add(h),t.add(h.target);const d=new pc(o.rimLightColor,o.rimLightIntensity);d.position.set(5.8,4.4,5.4),t.add(d);const f=new ap(o.hemiSkyColor,o.hemiGroundColor,o.hemiIntensity);t.add(f);const g=new fl(o.horizonAntiSunColor,o.mistDensity);t.fog=g;const v=new oa,m=new Oe(new ra(50,32,20),l);v.add(m);const p=new Qr(i);p.compileEquirectangularShader();let M=null,w=o.sunAzimuthDeg;function _(S){const E=p.fromScene(v,.015);M&&M.dispose(),M=E,S.environment=M.texture}function A(S,E){const y=$.degToRad($.clamp(S,1.5,82)),x=$.degToRad(E);n.set(Math.cos(y)*Math.sin(x),Math.sin(y),Math.cos(y)*Math.cos(x)).normalize(),a.uSunDir.value.copy(n),h.position.copy(h.target.position).addScaledVector(n,20)}const b={skyMesh:c,sunLight:h,rimLight:d,hemiLight:f,sunDirection:n,sunColor:s,activePreset:e,sharedUniforms:a,applyPreset(S,E,y){const x=_s[S];b.activePreset=S,w=x.sunAzimuthDeg,a.uZenithColor.value.setHex(x.zenithColor),a.uHorizonSunColor.value.setHex(x.horizonSunColor),a.uHorizonAntiColor.value.setHex(x.horizonAntiSunColor),a.uMieColor.value.setHex(x.mieHaloColor),a.uMieStrength.value=x.mieStrength,a.uMieExponent.value=x.mieExponent,a.uCloudDarkColor.value.setHex(x.cloudDarkColor),a.uCloudLitColor.value.setHex(x.cloudLitColor),a.uCloudCoverage.value=x.cloudCoverage,a.uMistDensity.value=x.mistDensity,a.uNightFactor.value=x.nightFactor,a.uAuroraIntensity.value=x.auroraIntensity,a.uWaterDeepColor.value.setHex(x.waterDeepColor),a.uWaterShallowColor.value.setHex(x.waterShallowColor),a.uGlitterIntensity.value=x.glitterIntensity,s.setHex(x.sunLightColor),a.uSunColor.value.copy(s),h.color.copy(s),h.intensity=x.sunLightIntensity,d.color.setHex(x.rimLightColor),d.intensity=x.rimLightIntensity,f.color.setHex(x.hemiSkyColor),f.groundColor.setHex(x.hemiGroundColor),f.intensity=x.hemiIntensity,g.color.setHex(x.horizonAntiSunColor).lerp(new Dt(x.horizonSunColor),.35),g.density=x.mistDensity,E.toneMappingExposure=x.exposure,A(x.sunElevationDeg,x.sunAzimuthDeg),_(y)},setMistDensity(S,E){const y=$.clamp(S,5e-4,.0075);a.uMistDensity.value=y,g.density=y},setSunElevation(S,E,y){A(S,w),_(y)},update(S,E,y){a.uTime.value=S,y&&c.position.copy(y),E&&(h.target.position.copy(E),h.position.copy(E).addScaledVector(n,20),h.target.updateMatrixWorld())}};return b.applyPreset(e,i,t),b}const Zs={waveAmplitude:1,waveSpeed:1,seaChoppiness:.48},h_=`
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
`,u_=`
  ${ni}

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
    float fresnel = 0.028 + 0.972 * pow(1.0 - effectiveCos, 4.8);

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

    float sunBacklit = pow(clamp(dot(V, -vec3(L.x, L.y * 0.35, L.z)), 0.0, 1.0), 2.6);
    float thinCrest = smoothstep(0.46, 0.96, vCrestFactor) * clamp(uWaveAmp, 0.15, 1.9);
    vec3 crestSSS = uWaterShallowColor * 1.68 * thinCrest * (0.28 + 0.85 * sunBacklit) * (1.0 - uNightFactor * 0.55);

    vec3 skyReflect = evalPhysicalSky(R, uTime, false);
    // Softly lift deep-water body shadow at far distances so high-altitude / low-mist views never form a dark band below the horizon!
    vec3 farWaterScatter = mix(waterBody + crestSSS, skyReflect * 0.72, smoothstep(320.0, 1450.0, dist));
    vec3 col = mix(farWaterScatter, skyReflect, fresnel);

    // Dual-lobe solar / lunar glitter path modulated by wind catspaws
    vec3 H = normalize(L + V);
    float ndoth = clamp(dot(N, H), 0.0, 1.0);
    float specPowerTight = mix(440.0, 105.0, smoothstep(35.0, 520.0, dist));
    float specTight = pow(ndoth, specPowerTight) * (0.30 + 0.70 * localDetail) * (1.0 - smoothstep(420.0, 1200.0, dist));
    float specBroad = pow(ndoth, 36.0) * (1.0 - smoothstep(420.0, 1550.0, dist));
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
    vec3 viewRay = normalize(vWorldPos - cameraPosition);
    vec3 exactHorizonSky = evalHorizonHazeColor(viewRay);
    float aerialExtinction = 1.0 - exp(-pow(uMistDensity * dist, 1.24));
    float distRimFeather = smoothstep(1650.0, 5100.0, dist);
    float outerRimFeather = smoothstep(2400.0, 5350.0, length(p));
    float horizonBlend = clamp(max(aerialExtinction, max(distRimFeather, outerRimFeather)), 0.0, 1.0);
    col = mix(col, exactHorizonSky, horizonBlend);

    // Physical coastal water clarity ONLY in shallow near-island reefs (< 165m);
    // mid & far ocean is 100% opaque (alpha = 1.0) so underwater geometry never bleeds through from high viewpoints!
    float nearShoalClarity = shoalGlow * (1.0 - smoothstep(75.0, 165.0, dist)) * (1.0 - fresnel) * (1.0 - totalFoam);
    float waterAlpha = mix(1.0, 0.80, clamp(nearShoalClarity, 0.0, 1.0));
    waterAlpha = mix(waterAlpha, 1.0, horizonBlend);

    gl_FragColor = vec4(col, clamp(waterAlpha, 0.80, 1.0));
  }
`;function d_(i=5600,t=300,e=256){const n=(t+1)*(e+1),s=new Float32Array(n*3),o=new Float32Array(n*2);for(let c=0;c<=t;c++){const h=c/t,u=i*Math.pow(h,2.3);for(let d=0;d<=e;d++){const g=d/e*Math.PI*2,v=Math.cos(g)*u,m=Math.sin(g)*u,p=c*(e+1)+d;s[p*3]=v,s[p*3+1]=0,s[p*3+2]=m,o[p*2]=v*.02,o[p*2+1]=m*.02}}const a=new Uint32Array(t*e*6);let r=0;for(let c=0;c<t;c++)for(let h=0;h<e;h++){const u=c*(e+1)+h,d=(c+1)*(e+1)+h,f=(c+1)*(e+1)+(h+1),g=c*(e+1)+(h+1);a[r++]=u,a[r++]=f,a[r++]=d,a[r++]=u,a[r++]=g,a[r++]=f}const l=new Xt;return l.setAttribute("position",new q(s,3)),l.setAttribute("uv",new q(o,2)),l.setIndex(new q(a,1)),l.computeBoundingSphere(),l}function p_(i,t,e){const n={...Zs,...e},s=[];for(let c=0;c<24;c++){const h=i[c];h?s.push(new ke(h.x,h.z,h.radius,h.boost??0)):s.push(new ke(9999,9999,0,0))}const o={...t,uWaveAmp:{value:n.waveAmplitude},uWaveSpeed:{value:n.waveSpeed},uChoppiness:{value:n.seaChoppiness},uStackCenters:{value:s}},a=d_(5600,300,256),r=new qe({name:"NorthSeaPhysicalOcean",vertexShader:h_,fragmentShader:u_,uniforms:o,transparent:!0,depthWrite:!0}),l=new Oe(a,r);return l.position.y=-11.5,l.renderOrder=2,l.frustumCulled=!1,l.name="NorthSeaOcean",{mesh:l,params:n,setOceanParams(c){Object.assign(n,c),o.uWaveAmp.value=n.waveAmplitude,o.uWaveSpeed.value=n.waveSpeed,o.uChoppiness.value=n.seaChoppiness},update(c){o.uTime.value=c}}}const pn=-11.5,f_=-25.5,ri=-44;function m_(i){return i-Math.floor(i)}function Qt(i,t){return m_(Math.sin(i*127.1+t*311.7)*43758.5453123)}function lu(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,a=s*s*s*(s*(s*6-15)+10),r=o*o*o*(o*(o*6-15)+10),l=Qt(e,n),c=Qt(e+1,n),h=Qt(e,n+1),u=Qt(e+1,n+1);return l+(c-l)*a+(h-l)*r+(l-c-h+u)*a*r}function xe(i,t,e=4){let n=0,s=.5,o=1;for(let a=0;a<e;a++)n+=s*lu(i*o,t*o),o*=2.03,s*=.5;return n}function ve(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function li(i,t,e=3){let n=0,s=1,o=.52,a=1,r=0;for(let l=0;l<e;l++){const c=lu(i*a,t*a)*2-1,h=1-(Math.sqrt(c*c+.085)-.2915)/.75,u=Math.max(0,Math.min(1,h));n+=o*u*s,r+=o,s=.54+.46*u,a*=2.04,o*=.48}return n/Math.max(1e-4,r)}function El(i,t,e,n){const s=(xe(i*.075+n,t*.075-n,3)-.5)*1.55+(xe(i*.19-n*1.3,t*.19+n*.7,2)-.5)*.52,o=i*.025-t*.02+(xe(i*.04+n,t*.04,2)-.5)*1.8,a=(e+o)/3.1,r=a-Math.floor(a),l=(ve(.12,.42,r)-r)*.48,c=Math.exp(-Math.pow((e-(pn-.35))/2.2,2))*.85;return{radialOffset:s+l+c,verticalLedgeOffset:l*.45}}const zn={position:new T(4.45,0,.22),yaw:-.14},On={position:new T(-4.45,0,-.22),yaw:.16};function Ss(i,t){const e=Math.sqrt(Math.pow(i/7.55,2)+Math.pow((t+.85)/4.75,2)),n=ve(.75,1.32,e),s=i+n*((xe(i*.055+3.1,t*.055-2.4,3)-.5)*5.4+(xe(i*.14-1.7,t*.14+4.3,2)-.5)*1.7),o=t+n*((xe(i*.055-5.2,t*.055+1.9,3)-.5)*4.6+(xe(i*.14+2.9,t*.14-3.1,2)-.5)*1.5),a=Math.atan2(o+4.2,s),r=t>1.2?.64:t<-8?1.5:1+(-t+1.2)*.046,l=1+.18*Math.sin(a*2-.45)+.13*Math.sin(a*3+.65)+.08*Math.cos(a*4-1.15),c=s/(15.8*l),h=(o+4.2)/(11.2*r*l);let u=Math.sqrt(c*c+h*h),d=0;if(t<-3.5){const P=(s+17.5)/15.2,C=(o+25)/18.5,R=Math.sqrt(P*P+C*C),L=R*(.92+.14*xe(i*.06+2.2,t*.06-1.4,3)),D=Math.max(0,1-Math.abs(u-L)/.55);u=Math.min(u,L)-.12*D*D,d=Math.pow(Math.max(0,1-Math.pow(R/.88,1.75)),1.25)*(6.4+3.4*li(i*.055+5.1,t*.055-3.2,3))}if(i>9.5&&t<-7){const P=(i-18.5)/6.5,C=(t+19.5)/7.5,R=Math.exp(-(P*P+C*C))*.34;u+=R}const f=ve(.74,1.28,e),g=1-.65*ve(-.5,4.5,t)*(1-ve(4.5,11.5,Math.abs(i))),v=((xe(i*.11+4.2,t*.11-1.7,3)-.45)*1.95+(li(i*.075-2.3,t*.075+6.1,2)-.42)*1.45+(xe(i*.34,t*.34,2)-.5)*.28)*f*g,m=ve(-6.8,-26.5,t)*ve(38,7.5,Math.abs(i+3)),p=li(i*.052+1.8,t*.052-2.7,3),M=xe(i*.085-3.4,t*.085+1.9,3),w=m*(5.2+7.2*p+3.6*M),_=v+Math.max(w,d*f),A=.77+.1*xe(Math.cos(a)*1.6+2.1,Math.sin(a)*1.6-1.3,2);if(u<=A)return _;const b=ve(A,1.62,u),S=ve(1.45,2.25,u),E=Math.pow(b,.88),y=pn-2.2,x=$.lerp(_,y,E);return $.lerp(x,ri,S)}function Pi(i){const t=Math.cos(i.rotRad),e=Math.sin(i.rotRad),n=i.summitOffset?.dx??i.rx*.12*Math.sin(i.seed),s=i.summitOffset?.dz??i.rz*-.1*Math.cos(i.seed*1.3);return(o,a)=>{const r=o-i.cx,l=a-i.cz,c=r*t-l*e,h=r*e+l*t,u=c+(xe(c*.038+i.seed,h*.038-i.seed,3)-.5)*(i.rx*.44),d=h+(xe(c*.038-i.seed,h*.038+i.seed,3)-.5)*(i.rz*.44),f=Math.atan2(d,u),g=1+.2*Math.sin(f*2+i.seed)+.13*Math.cos(f*3-i.seed*1.5)+.07*Math.sin(f*4+.9);let m=Math.sqrt(Math.pow(u/(i.rx*g),2)+Math.pow(d/(i.rz*g),2));const p=Math.sqrt(Math.pow((u-n)/(i.rx*g*.94),2)+Math.pow((d-s)/(i.rz*g*.94),2)),M=i.peakY*.36,w=Math.pow(Math.max(0,1-Math.pow(p/.9,1.68)),1.24)*(i.peakY*.62);let _=M+w;if(i.secondaryLobe){const D=i.secondaryLobe,k=u-D.dx,B=d-D.dz,F=Math.atan2(B,k),H=1+.18*Math.cos(F*2-i.seed)+.11*Math.sin(F*3+i.seed),V=Math.sqrt(Math.pow(k/(D.rx*H),2)+Math.pow(B/(D.rz*H),2)),Y=D.lowSaddle?.42:.35,Z=Math.max(0,Math.min(1,.5+.5*(V-m)/Y));m=V*(1-Z)+m*Z-Y*Z*(1-Z);const X=i.peakY*D.peakScale,W=X*.35+Math.pow(Math.max(0,1-Math.pow(V/.88,1.7)),1.22)*(X*.65),O=D.lowSaddle?Math.sin(Z*Math.PI)*.44:Math.sin(Z*Math.PI)*.18;_=$.lerp(W,_,Z)*(1-O)}const A=1-ve(.54,1.02,m),b=li(c*.034+i.seed*1.3,h*.042-i.seed*.9,3),S=xe(c*.052-i.seed*.7,h*.052+i.seed*1.4,3),E=xe(c*.14+i.seed,h*.14-i.seed,2);let y=_+(b-.36)*(i.peakY*.36)*(.28+.72*A)+(S-.47)*(3.2+i.peakY*.14)*(.35+.65*A)+(E-.5)*.85;if(i.carveRiverToEast&&c>-i.rx*.52){const D=Math.sin(c*.13+.5)*2.1,k=Math.abs(h-D),B=1-ve(1.5,6.8,k);if(B>.001){const F=10.6-ve(-i.rx*.45,i.rx*.78,c)*3;y=$.lerp(y,Math.min(y,F),B)}}const x=.66+.14*xe(Math.cos(f)*1.5+i.seed,Math.sin(f)*1.5-i.seed,2);if(m<=x)return y;const P=ve(x,1.08,m),C=ve(1.02,1.38,m),R=pn-1.8,L=$.lerp(y,R,Math.pow(P,.86));return $.lerp(L,ri,C)}}function Tl(i){return(t,e)=>{const n=t-i.cx,s=e-i.cz,o=n+(xe(n*.034+i.seed,s*.034-i.seed,3)-.5)*(i.ringRadius*.3),a=s+(xe(n*.034-i.seed,s*.034+i.seed,3)-.5)*(i.ringRadius*.3),r=Math.hypot(o,a),l=Math.atan2(a,o),c=i.openAngleRad+Math.PI;let h=l-c;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const u=Math.abs(h),d=1-ve(i.arcHalfSpanRad*.72,i.arcHalfSpanRad*1.08,u),f=i.ringHalfWidth*(.7+.42*d+.16*Math.sin(h*2.5+i.seed)),g=r-i.ringRadius,v=g>=0?f*.9:f*1.12,p=Math.abs(g)/Math.max(3.5,v)+(1-d)*1.35,M=.72+.24*Math.cos(h*2.6+i.seed*.7)+.14*Math.sin(h*4.1-i.seed),w=li(n*.038+i.seed,s*.038-i.seed,3),_=Math.pow(Math.max(0,1-Math.pow(Math.min(1,p/.88),1.65)),1.18),A=i.peakY*(.34+.66*_)*(.58+.42*d)*M+(w-.4)*(i.peakY*.28)*d+(xe(n*.09+i.seed,s*.09-i.seed,2)-.48)*1.85,b=(1-ve(i.ringRadius*.55,i.ringRadius*1.15,r))*.65,S=$.lerp(ri,-16.2,b),E=.56+.12*xe(n*.05+i.seed,s*.05,2);if(p<=E)return A;const y=ve(E,1.05,p),x=ve(.98,1.36,p),P=pn-1.8,C=$.lerp(A,P,Math.pow(y,.84));return $.lerp(C,S,x)}}const Ks=Pi({cx:-66,cz:-32,rx:21.5,rz:25,peakY:18.4,summitOffset:{dx:-3.5,dz:-7.5},seed:5.7,rotRad:.18,secondaryLobe:{dx:-24.5,dz:-11.5,rx:17.5,rz:19.5,peakScale:1.24},carveRiverToEast:!0}),cu=Tl({cx:88,cz:36,ringRadius:28,ringHalfWidth:12.6,peakY:16.8,openAngleRad:-2.45,arcHalfSpanRad:1.92,seed:22.9}),hu=Pi({cx:88,cz:-56,rx:25,rz:31.5,peakY:22.4,summitOffset:{dx:4.2,dz:-6},seed:14.3,rotRad:-.34,secondaryLobe:{dx:-18,dz:33.5,rx:15,rz:17,peakScale:.74,lowSaddle:!0}}),uu=Pi({cx:-124,cz:-86,rx:33,rz:24.5,peakY:25.5,summitOffset:{dx:-7.5,dz:3},seed:37.8,rotRad:.42,secondaryLobe:{dx:21,dz:-10.5,rx:16.5,rz:15,peakScale:.72}}),du=Pi({cx:-42,cz:-96,rx:17.5,rz:19.5,peakY:20.2,seed:31.6,rotRad:-.28,secondaryLobe:{dx:-19.5,dz:14,rx:12.5,rz:14,peakScale:.74}}),g_=Pi({cx:36,cz:-108,rx:19.5,rz:22,peakY:22.8,seed:44.1,rotRad:.52,secondaryLobe:{dx:18.5,dz:-14.5,rx:13.5,rz:15,peakScale:.78}}),__=Tl({cx:-144,cz:78,ringRadius:38,ringHalfWidth:15.5,peakY:23.8,openAngleRad:.62,arcHalfSpanRad:1.84,seed:58.4}),v_=Pi({cx:168,cz:122,rx:38,rz:32,peakY:29.5,seed:71.2,rotRad:-.48,secondaryLobe:{dx:-36,dz:-18,rx:24,rz:22,peakScale:.76}}),x_=Pi({cx:-206,cz:-96,rx:42,rz:46,peakY:36.5,seed:83.9,rotRad:-.19,secondaryLobe:{dx:28,dz:34,rx:23,rz:25,peakScale:.7}}),M_=Tl({cx:-8,cz:-222,ringRadius:52,ringHalfWidth:19.5,peakY:33.5,openAngleRad:1.52,arcHalfSpanRad:1.8,seed:96.3}),w_=Pi({cx:-18,cz:236,rx:34,rz:26,peakY:25.5,seed:109.7,rotRad:.15,secondaryLobe:{dx:38,dz:-12,rx:22,rz:18,peakScale:.78}}),el=[{name:"WestWaterfallDoubleIsland",centerX:-74,centerZ:-36,spanX:112,spanZ:102,gridSegs:168,hasFlora:!0,evalHeight:Ks},{name:"StarboardCrescentLagoonAtoll",centerX:88,centerZ:36,spanX:124,spanZ:124,gridSegs:164,hasFlora:!0,evalHeight:cu},{name:"EastSerpentineTomboloIsland",centerX:84,centerZ:-46,spanX:118,spanZ:134,gridSegs:156,hasFlora:!0,evalHeight:hu},{name:"WestTraelanipaTableIsland",centerX:-124,centerZ:-86,spanX:116,spanZ:102,gridSegs:132,hasFlora:!0,evalHeight:uu},{name:"NorthWestHolmPair",centerX:-48,centerZ:-92,spanX:92,spanZ:86,gridSegs:112,hasFlora:!0,evalHeight:du},{name:"NorthEastHeadlandTable",centerX:42,centerZ:-112,spanX:94,spanZ:90,gridSegs:112,hasFlora:!1,evalHeight:g_},{name:"SouthWestBrokenCrescent",centerX:-144,centerZ:78,spanX:156,spanZ:152,gridSegs:120,hasFlora:!1,evalHeight:__},{name:"SouthEastTableSound",centerX:156,centerZ:116,spanX:168,spanZ:152,gridSegs:112,hasFlora:!1,evalHeight:v_},{name:"FarWestCliffMassif",centerX:-198,centerZ:-88,spanX:174,spanZ:168,gridSegs:108,hasFlora:!1,evalHeight:x_},{name:"NorthernSoundCrescentIsland",centerX:-8,centerZ:-222,spanX:196,spanZ:166,gridSegs:112,hasFlora:!1,evalHeight:M_},{name:"SouthHorizonHolms",centerX:-4,centerZ:232,spanX:166,spanZ:122,gridSegs:100,hasFlora:!1,evalHeight:w_}],pu=[{x:43.5,z:14.5,rx:4.8,rz:4.2,topY:4.6,topSlopeX:-.08,rotY:.45,seed:14.2},{x:63,z:50.5,rx:7.5,rz:5.2,topY:-8.2,topSlopeX:.05,rotY:-.35,seed:23.8},{x:27.5,z:-10.5,rx:5.4,rz:4.4,topY:1.8,topSlopeX:.07,rotY:.22,seed:31.4},{x:-37.5,z:-22,rx:6.2,rz:4.8,topY:2.6,topSlopeX:-.09,rotY:-.52,seed:42.7},{x:-46.5,z:-15.5,rx:5.2,rz:4.2,topY:-6.8,topSlopeX:-.06,rotY:.61,seed:55.3},{x:-106,z:-49,rx:7.8,rz:6,topY:6.4,topSlopeX:-.1,rotY:.18,seed:68.9},{x:57.5,z:-22.5,rx:6.4,rz:5,topY:-5.4,topSlopeX:.08,rotY:-.44,seed:79.1},{x:-21.5,z:-79,rx:7.2,rz:5.8,topY:5.2,topSlopeX:-.07,rotY:.33,seed:92.6}],nl=[{x:59.5,z:23,rotY:-.58,halfLength:14.5,halfThickness:4.6,plateauTopY:6.8,openingHalfSpan:5.4,vaultCrownY:.4,seed:17.3},{x:-95.5,z:-22.5,rotY:.88,halfLength:13,halfThickness:4.4,plateauTopY:6.2,openingHalfSpan:4.8,vaultCrownY:-.2,seed:49.8}];function vs(i,t){let e=ri;Math.abs(i)<54&&t>-66&&t<40&&(e=Math.max(e,Ss(i,t)));for(const n of el)Math.abs(i-n.centerX)<=n.spanX*.52&&Math.abs(t-n.centerZ)<=n.spanZ*.52&&(e=Math.max(e,n.evalHeight(i,t)));for(const n of nl)Math.hypot(i-n.x,t-n.z)<n.halfLength+5&&(e=Math.max(e,n.plateauTopY+1));for(const n of pu){const s=Math.max(n.rx,n.rz),o=Math.hypot(i-n.x,t-n.z);if(o<s*1.45){const a=1-ve(.65,1.45,o/s);e=Math.max(e,ri+(n.topY-ri)*a)}}return e}function Qc(i,t,e){i.computeVertexNormals();const n=i.getAttribute("position"),s=i.getAttribute("normal");for(let o=0;o<n.count;o++){const a=n.getX(o),r=n.getY(o),l=n.getZ(o),c=s.getX(o),h=s.getY(o),u=s.getZ(o);if(h>=.86||r<-23.5)continue;let d=1;if(e){const _=Math.sqrt(Math.pow(a/8.8,2)+Math.pow((l+.95)/5.8,2));if(d=ve(.88,1.35,_),d<=.001)continue}const f=ve(.68,.24,h)*ve(-23.5,-16.5,r)*d,g=ve(.86,.58,h)*ve(-6,2,r)*d*.26;if(f<=.002&&g<=.002)continue;const v=Math.hypot(c,u);if(v<1e-4)continue;const m=c/v,p=u/v,M=El(a,l,r,t),w=(li(a*.11+t,l*.11-t,2)-.45)*1.15;n.setXYZ(o,a+m*(M.radialOffset*f+w*g*.55),r+M.verticalLedgeOffset*f+w*g*.7,l+p*(M.radialOffset*f+w*g*.55))}i.computeVertexNormals()}function y_(i){const l=new Float32Array(22041),c=new Float32Array(7347*2);for(let g=0;g<=112;g++){const v=g/112,m=(v-.5)*2*i.halfLength,p=Math.sin(v*Math.PI*1.3+i.seed)*.95+(xe(v*3.2+i.seed,1.7,2)-.5)*1.25,M=ve(0,.07,v)*ve(1,.92,v),w=(1-ve(0,.42,v))*2.35,_=Math.exp(-Math.pow((v-.78)/.16,2))*1.65,A=-Math.exp(-Math.pow((v-.48)/.2,2))*.85,b=(li(m*.09+i.seed,p*.09,2)-.45)*1.35+(xe(m*.16-i.seed,p*.16,2)-.5)*.65,S=i.plateauTopY+w+_+A+b,E=$.lerp(pn-4,S,M),y=Math.abs(m)/i.openingHalfSpan,x=1-ve(.76,1.16,y),P=Math.max(0,1-Math.pow(Math.min(1.18,y),2.1)),C=(xe(m*.28+i.seed,4.3,3)-.5)*.75,R=pn-5.5+(i.vaultCrownY-(pn-5.5))*P+C,L=$.lerp(ri,R,x),D=1+.34*(1-x),k=i.halfThickness*D*(.45+.55*M);for(let B=0;B<=64;B++){const F=B/64;let H=0,V=1,Y=0,Z=0;if(F<=.25)H=-1+2*(F/.25),V=1,Z=(1-H*H)*1.35*M,Y=ve(.82,1,Math.abs(H))*.35;else if(F<=.5){const _t=(F-.25)/.25;H=1,V=1-_t,Y=1}else if(F<=.75)H=1-2*((F-.5)/.25),V=0,Y=.65;else{const _t=(F-.75)/.25;H=-1,V=_t,Y=1}const X=1-.08*Math.pow(H,4)*Math.pow(2*V-1,4);let W=$.lerp(L,E,V)+Z;V<.05&&x>.05&&(W+=(1-H*H)*1.15*x);const O=Math.exp(-Math.pow((W-(pn-.4))/2.3,2))*1.55*(1-x*.6),st=El(m,p+H*4,W,i.seed),at=k*X+O+st.radialOffset*.62*Y*ve(-22,-14,W),j=m,K=p+H*at,G=W+st.verticalLedgeOffset*.35*Y,nt=g*65+B;l[nt*3]=j,l[nt*3+1]=G,l[nt*3+2]=K,c[nt*2]=v*6,c[nt*2+1]=F*4}}const h=7345,u=7346;l[h*3]=-i.halfLength,l[h*3+1]=pn-12,l[h*3+2]=0,l[u*3]=i.halfLength,l[u*3+1]=pn-12,l[u*3+2]=0;const d=[];for(let g=0;g<112;g++)for(let v=0;v<64;v++){const m=g*65+v,p=(g+1)*65+v,M=(g+1)*65+(v+1),w=g*65+(v+1);d.push(m,w,M,m,M,p)}for(let g=0;g<64;g++){d.push(h,g+1,g);const v=7280;d.push(u,v+g,v+g+1)}const f=new Xt;return f.setAttribute("position",new q(l,3)),f.setAttribute("uv",new q(c,2)),f.setIndex(d),f.computeVertexNormals(),f}function b_(i){const r=new Float32Array(4332),l=new Float32Array(1444*2),c=Math.cos(i.rotY),h=Math.sin(i.rotY),u=(S,E,y)=>{const x=1+.11*Math.cos(y*4+i.seed)+.15*Math.sin(y*2-i.seed*.7)+.09*Math.cos(y*3+i.seed*1.3),P=.88+.24*xe(S*1.4+i.seed,E*1.4-i.seed,3);return{lx:S*i.rx*x*P,lz:E*i.rz*x*P}},f=i.topY>pn+4?2.65:1.35,g=i.rx*.16*Math.sin(i.seed*1.7),v=i.rz*-.14*Math.cos(i.seed*1.1);for(let S=0;S<=38;S++){const E=S>32,y=Math.min(1,S/32),x=E?(S-32)/6:0;for(let P=0;P<=36;P++){const C=P/36,R=C*Math.PI*2,L=Math.cos(R),D=Math.sin(R),k=u(L,D,R),B=i.topY+k.lx*i.topSlopeX+(xe(k.lx*.18+i.seed,k.lz*.18,2)-.5)*.95,F=E?Math.cos(x*Math.PI*.5):1,H=E?Math.pow(Math.sin(x*Math.PI*.5),1.08)*(f+(li((k.lx*F+i.seed)*.24,(k.lz*F-i.seed)*.24,2)-.42)*1.05):0,V=$.lerp(ri,B,y)+H,Y=1.2-.38*Math.pow(y,.88),Z=1+.34*Math.exp(-Math.pow((V-(pn-.5))/2.3,2)),X=El(i.x+k.lx,i.z+k.lz,V,i.seed),W=ve(.18,.45,y)*(1-ve(.86,1,y))*(E?0:1),O=Y*Z*F,st=$.lerp(0,g,x*x)+k.lx*O+L*X.radialOffset*.42*W,at=$.lerp(0,v,x*x)+k.lz*O+D*X.radialOffset*.42*W,j=i.x+st*c-at*h,K=i.z+st*h+at*c,G=S*37+P;r[G*3]=j,r[G*3+1]=V,r[G*3+2]=K,l[G*2]=C*4,l[G*2+1]=y*5+x*.8}}const m=1443,p=i.x+g*c-v*h,M=i.z+g*h+v*c;r[m*3]=p,r[m*3+1]=i.topY+f+(xe(i.seed,i.seed*.5,2)-.5)*.35,r[m*3+2]=M,l[m*2]=.5,l[m*2+1]=5.9;const w=[],_=38;for(let S=0;S<_;S++)for(let E=0;E<36;E++){const y=S*37+E,x=(S+1)*37+E,P=(S+1)*37+(E+1),C=S*37+(E+1);w.push(y,x,P,y,P,C)}const A=_*37;for(let S=0;S<36;S++)w.push(m,A+S+1,A+S);const b=new Xt;return b.setAttribute("position",new q(r,3)),b.setAttribute("uv",new q(l,2)),b.setIndex(w),b.computeVertexNormals(),b}function S_(){const t=new Float32Array(262144),e=new Float32Array(512*512);for(let f=0;f<512;f++){const g=f/512;for(let v=0;v<512;v++){const m=v/512,p=f*512+v,M=xe(m*8+2.3,g*26-1.7,4),w=xe(m*22-3.1,g*7+4.2,4),_=Math.abs(xe(m*6+1.1,g*20+3.4,3)-.5),A=Math.abs(xe(m*18-4.8,g*9+9.1,3)-.5),b=ve(.055,0,_)*.45+ve(.045,0,A)*.35;t[p]=Math.max(0,Math.min(1,M*.58+w*.42-b));const S=xe(m*9+19.3,g*9+8.2,4);e[p]=ve(.58,.82,S)}}const n=document.createElement("canvas"),s=document.createElement("canvas"),o=document.createElement("canvas");for(const f of[n,s,o])f.width=512,f.height=512;const a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(512,512),h=r.createImageData(512,512),u=l.createImageData(512,512);for(let f=0;f<512;f++){const g=(f-1+512)%512,v=(f+1)%512;for(let m=0;m<512;m++){const p=(m-1+512)%512,M=(m+1)%512,w=f*512+m,_=w*4,A=(t[f*512+M]-t[f*512+p])*4.4,b=(t[v*512+m]-t[g*512+m])*4.4,S=1/Math.sqrt(A*A+b*b+1);h.data[_]=Math.round((-A*S*.5+.5)*255),h.data[_+1]=Math.round((-b*S*.5+.5)*255),h.data[_+2]=Math.round((S*.5+.5)*255),h.data[_+3]=255;const E=t[w],y=e[w],x=40+E*54,P=44+E*56,C=50+E*60,R=45+E*25,L=69+E*35,D=34+E*18;c.data[_]=Math.round($.lerp(x,R,y*.65)),c.data[_+1]=Math.round($.lerp(P,L,y*.65)),c.data[_+2]=Math.round($.lerp(C,D,y*.65)),c.data[_+3]=255;const k=Math.round($.lerp(.6+(1-E)*.3,.92,y)*255);u.data[_]=k,u.data[_+1]=k,u.data[_+2]=k,u.data[_+3]=255}}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0);const d=(f,g)=>(f.wrapS=qn,f.wrapT=qn,f.repeat.set(9,9),f.anisotropy=8,f.colorSpace=g?rn:In,f.needsUpdate=!0,f);return{albedo:d(new gn(n),!0),normal:d(new gn(s),!1),roughness:d(new gn(o),!1)}}function A_(i){const o=new Float32Array(37539);for(let u=0;u<=96;u++){const d=u/96,f=3200*Math.pow(d,2.05);for(let g=0;g<=128;g++){const m=g/128*Math.PI*2,p=Math.cos(m)*f,M=Math.sin(m)*f,w=(xe(p*.015+3.7,M*.015-5.2,3)-.5)*3.2*(1-d*.7),_=f_+w,A=u*129+g;o[A*3]=p,o[A*3+1]=_,o[A*3+2]=M}}const a=new Uint32Array(12288*6);let r=0;for(let u=0;u<96;u++)for(let d=0;d<128;d++){const f=u*129+d,g=(u+1)*129+d,v=(u+1)*129+(d+1),m=u*129+(d+1);a[r++]=f,a[r++]=v,a[r++]=g,a[r++]=f,a[r++]=m,a[r++]=v}const l=new Xt;l.setAttribute("position",new q(o,3)),l.setIndex(new q(a,1)),l.computeVertexNormals();const c=new qe({name:"NordicSubmarineBathymetry",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${ni}
      uniform vec3 uWaterDeepColor;
      uniform vec3 uWaterShallowColor;
      uniform vec3 uSunColor;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      void main() {
        vec3 N = normalize(vWorldNormal);
        vec3 L = normalize(uSunDir);
        float waterColumnDepth = clamp((-11.5 - vWorldPos.y) / 16.0, 0.0, 1.0);
        float sandMask = smoothstep(0.75, 0.95, N.y) * skyNoise2(vWorldPos.xz * 0.08);
        vec3 bedAlbedo = mix(vec3(0.028, 0.044, 0.056), vec3(0.058, 0.074, 0.080), sandMask);
        float ndotl = 0.35 + 0.65 * clamp(dot(N, L), 0.0, 1.0);
        vec3 litBed = bedAlbedo * (uWaterShallowColor * 2.2 + uSunColor * 0.30 * ndotl);
        vec3 abyssCol = uWaterDeepColor * 0.55;
        vec3 col = mix(litBed, abyssCol, smoothstep(0.15, 0.92, waterColumnDepth));

        float dist = length(vWorldPos - cameraPosition);
        vec3 hazeCol = evalHorizonHazeColor(normalize(vWorldPos - cameraPosition));
        float aerial = 1.0 - exp(-pow(uMistDensity * dist, 1.26));
        float rimFade = smoothstep(1800.0, 2950.0, length(vWorldPos.xz));
        col = mix(col, hazeCol, clamp(max(aerial, rimFade), 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
      }
    `}),h=new Oe(l,c);return h.frustumCulled=!1,h.name="NordicSubmarineBathymetryFloor",h}function E_(i){const t=[{cx:-480,cz:-280,rx:145,rz:95,peakY:56,offX:-22,rot:.4,seed:11.4},{cx:520,cz:-310,rx:165,rz:105,peakY:62,offX:28,rot:-.5,seed:23.8},{cx:-320,cz:-560,rx:135,rz:90,peakY:54,offX:18,rot:.2,seed:37.2},{cx:490,cz:340,rx:155,rz:98,peakY:52,offX:-24,rot:-.3,seed:46.5},{cx:-860,cz:-420,rx:240,rz:145,peakY:86,offX:-36,rot:.35,seed:51.9},{cx:880,cz:-460,rx:255,rz:155,peakY:82,offX:38,rot:-.42,seed:67.3},{cx:-740,cz:580,rx:220,rz:135,peakY:72,offX:-28,rot:.55,seed:76.4},{cx:140,cz:-1180,rx:290,rz:165,peakY:94,offX:42,rot:.15,seed:83.5},{cx:-1150,cz:-880,rx:310,rz:180,peakY:104,offX:-45,rot:-.28,seed:94.1},{cx:1080,cz:780,rx:285,rz:165,peakY:92,offX:36,rot:.38,seed:108.7}],e=[],n=28,s=52;for(const l of t){const c=(n+1)*(s+1),h=new Float32Array(c*3),u=Math.cos(l.rot),d=Math.sin(l.rot);for(let m=0;m<=n;m++){const p=m/n*1.42;for(let M=0;M<=s;M++){const w=M/s*Math.PI*2,_=1+.18*Math.sin(w*2+l.seed)+.11*Math.cos(w*3-l.seed),A=Math.cos(w)*l.rx*_*p,b=Math.sin(w)*l.rz*_*p,S=l.cx+A*u-b*d,E=l.cz+A*d+b*u,y=Math.hypot((A-l.offX)/(l.rx*.92),b/(l.rz*.92)),x=l.peakY*.32,P=Math.pow(Math.max(0,1-Math.pow(y/.92,1.65)),1.25)*(l.peakY*.64),C=(li(S*.0085+l.seed,E*.01-l.seed,3)-.38)*(l.peakY*.34)*(1-ve(.55,1.05,p)),R=(xe(S*.009+l.seed,E*.009,3)-.5)*9.5,L=x+P+C+R,D=.68+.1*Math.sin(w*2-l.seed),k=ve(D,1.05,p),B=ve(.98,1.38,p),F=pn-2,H=$.lerp(L,F,Math.pow(k,.84)),V=$.lerp(H,ri,B),Y=m*(s+1)+M;h[Y*3]=S,h[Y*3+1]=V,h[Y*3+2]=E}}const f=new Uint32Array(n*s*6);let g=0;for(let m=0;m<n;m++)for(let p=0;p<s;p++){const M=m*(s+1)+p,w=(m+1)*(s+1)+p,_=(m+1)*(s+1)+(p+1),A=m*(s+1)+(p+1);f[g++]=M,f[g++]=_,f[g++]=w,f[g++]=M,f[g++]=A,f[g++]=_}const v=new Xt;v.setAttribute("position",new q(h,3)),v.setIndex(new q(f,1)),v.computeVertexNormals(),e.push(v)}const o=Ma(e,!1),a=new qe({name:"DistantFjordAerialMaterial",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${ni}
      uniform vec3 uSunColor;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      void main() {
        vec3 N = normalize(vWorldNormal);
        vec3 L = normalize(uSunDir);
        float dist = length(vWorldPos - cameraPosition);
        vec3 viewRay = normalize(vWorldPos - cameraPosition);

        float strataBands = 0.88 + 0.18 * sin(vWorldPos.y * 0.65 + skyNoise2(vWorldPos.xz * 0.03) * 3.0);
        float slopeTurf = smoothstep(0.58, 0.86, N.y) * smoothstep(-4.0, 14.0, vWorldPos.y);
        vec3 rockBase = mix(vec3(0.058, 0.068, 0.084) * strataBands, vec3(0.072, 0.118, 0.058), slopeTurf * 0.80);

        float ndotl = clamp(dot(N, L), 0.0, 1.0);
        vec3 ambientSky = mix(uHorizonAntiColor, uZenithColor, 0.45) * 0.44;
        vec3 directSun = uSunColor * ndotl * 0.56;
        vec3 surfaceCol = rockBase * (ambientSky * 2.8 + directSun * 2.2);

        vec3 hazeCol = evalHorizonHazeColor(viewRay);
        float distHaze = 1.0 - exp(-pow(uMistDensity * 0.88 * dist, 1.22));
        float farFade = smoothstep(1250.0, 2250.0, dist);
        float waterlineMist = (1.0 - smoothstep(-11.5, 4.5, vWorldPos.y)) * 0.28;
        float totalVeil = clamp(max(distHaze, farFade) + waterlineMist * (1.0 - distHaze), 0.0, 1.0);

        vec3 finalCol = mix(surfaceCol, hazeCol, totalVeil);
        gl_FragColor = vec4(finalCol, 1.0);
      }
    `}),r=new Oe(o,a);return r.frustumCulled=!1,r.name="DistantFjordArchipelago",r}function T_(){const i=[],t=[{dx:0,dz:0,h:.36,w:.02,bend:.11,rotY:.1},{dx:.032,dz:.018,h:.28,w:.017,bend:.14,rotY:1.8},{dx:-.028,dz:.022,h:.31,w:.018,bend:.12,rotY:3.7},{dx:.012,dz:-.03,h:.23,w:.015,bend:.15,rotY:5}];for(const e of t){const s=[],o=[],a=[],r=Math.cos(e.rotY),l=Math.sin(e.rotY);for(let h=0;h<=4;h++){const u=h/4,d=e.w*(1-.88*Math.pow(u,1.3)),f=e.h*u,g=e.bend*u*u;for(const v of[-1,1]){const m=v*d,p=g,M=e.dx+m*r-p*l,w=e.dz+m*l+p*r;s.push(M,f,w),o.push(-l*.3,.92,r*.3)}}for(let h=0;h<4;h++){const u=h*2,d=u+1,f=u+2,g=u+3;a.push(u,d,g,u,g,f)}const c=new Xt;c.setAttribute("position",new Yt(s,3)),c.setAttribute("normal",new Yt(o,3)),c.setIndex(a),i.push(c)}return Ma(i,!1)}function C_(){const i=[],t=[{ox:0,oz:0,h:.24,leanX:.03,leanZ:.02,r:.032},{ox:.045,oz:.025,h:.19,leanX:.05,leanZ:-.02,r:.027},{ox:-.038,oz:.03,h:.21,leanX:-.04,leanZ:.04,r:.029}];for(const e of t){const n=new aa(.004,.006,e.h,4,1);n.translate(e.ox+e.leanX*.5,e.h*.5,e.oz+e.leanZ*.5);const s=n.getAttribute("position").count,o=new Float32Array(s*3);for(let c=0;c<s;c++)o[c*3]=.24,o[c*3+1]=.44,o[c*3+2]=.2;n.setAttribute("color",new q(o,3)),i.push(n);const a=new aa(e.r,e.r*.28,e.r*.55,6,1);a.translate(e.ox+e.leanX,e.h+e.r*.15,e.oz+e.leanZ);const r=a.getAttribute("position").count,l=new Float32Array(r*3);for(let c=0;c<r;c++)l[c*3]=1,l[c*3+1]=1,l[c*3+2]=1;a.setAttribute("color",new q(l,3)),i.push(a)}return Ma(i,!1)}function P_(i,t,e,n){const s=new Gn;s.position.set(i,t,e);const o=[{rx:.44,ry:.17,rz:.38,dy:.08,rot:.2},{rx:.35,ry:.14,rz:.31,dy:.28,rot:1.1},{rx:.27,ry:.12,rz:.24,dy:.45,rot:2.3},{rx:.19,ry:.11,rz:.18,dy:.6,rot:.7},{rx:.12,ry:.1,rz:.11,dy:.73,rot:1.9}];for(const a of o){const r=new _a(1,1);r.scale(a.rx,a.ry,a.rz);const l=new Oe(r,n);l.position.set((Math.sin(a.rot*3)-.5)*.03,a.dy,(Math.cos(a.rot*2)-.5)*.03),l.rotation.y=a.rot,l.castShadow=!0,l.receiveShadow=!0,s.add(l)}return s}function R_(i){const t=new Gn;t.name="NordicCliffsideWorld";const e=S_(),n=new bi({name:"NordicBasaltCliff_PBR",map:e.albedo,normalMap:e.normal,normalScale:new Bt(1.55,1.55),roughnessMap:e.roughness,roughness:.88,metalness:.04,envMapIntensity:.96});n.onBeforeCompile=ct=>{Object.assign(ct.uniforms,i),ct.vertexShader=ct.vertexShader.replace("#include <common>",`#include <common>
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
        vRockWorldNormal = normalize(nMat * objectNormal);`),ct.fragmentShader=ct.fragmentShader.replace("#include <common>",`#include <common>
        ${ni}
        varying vec3 vRockWorldPos;
        varying vec3 vRockWorldNormal;

        // Evaluates Faroese horizontal basalt lava-bedding & vertical block-jointing relief for steep cliff faces!
        float evalFaroeseCliffStrata(vec3 wp) {
          float bedDip = wp.x * 0.025 - wp.z * 0.020 + skyFbm(wp.xz * 0.05) * 1.4;
          float bedWave = sin((wp.y + bedDip) * 2.1);
          float fineBed = abs(fract((wp.y + bedDip) * 0.36) - 0.5) * 2.0;
          float ledge = smoothstep(0.08, 0.38, fineBed);
          float vertFlutes = skyFbm(vec2(wp.x * 0.42 + wp.z * 0.42, wp.y * 0.08));
          return ledge * 0.48 + (0.5 + 0.5 * bedWave) * 0.24 + vertFlutes * 0.28;
        }`).replace("#include <map_fragment>",`#ifdef USE_MAP
          vec3 wN = normalize(vRockWorldNormal);
          vec3 triBlend = pow(abs(wN), vec3(4.0));
          triBlend /= max(triBlend.x + triBlend.y + triBlend.z, 1e-4);
          vec3 rpMacro = vRockWorldPos * 0.075;
          vec3 rpDetail = vRockWorldPos * 0.30;
          vec3 albMacro =
            texture2D(map, rpMacro.zy).rgb * triBlend.x +
            texture2D(map, rpMacro.xz).rgb * triBlend.y +
            texture2D(map, rpMacro.xy).rgb * triBlend.z;
          vec3 albDetail =
            texture2D(map, rpDetail.zy).rgb * triBlend.x +
            texture2D(map, rpDetail.xz).rgb * triBlend.y +
            texture2D(map, rpDetail.xy).rgb * triBlend.z;

          float cliffSteepMask = 1.0 - smoothstep(0.35, 0.72, abs(wN.y));
          float strataVal = evalFaroeseCliffStrata(vRockWorldPos);
          // Subtle pale mineral/lichen basalt band modulation on vertical cliffs (like Faroe Photo 1 & 3!)
          vec3 mineralTint = mix(vec3(0.76, 0.78, 0.82), vec3(1.18, 1.16, 1.14), strataVal);
          diffuseColor.rgb *= mix(albMacro, albDetail, 0.44) * mix(vec3(1.0), mineralTint, cliffSteepMask * 0.85);
        #endif`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 twinPadNorm = (vRockWorldPos.xz - vec2(-0.05, -1.05)) / vec2(4.35, 4.10);
        float dragonPadClear = smoothstep(0.76, 1.26, length(twinPadNorm));
        // Natural Nordic mosaic of lush coastal grass in hollows/slopes & weathered mossy basalt outcrops along ridges!
        float crownSlope = smoothstep(0.58, 0.88, vRockWorldNormal.y);
        float aboveSpray = smoothstep(-5.2, 0.4, vRockWorldPos.y);
        float outcropMosaic = smoothstep(0.20, 0.66, skyFbm(vRockWorldPos.xz * 0.14 + 3.7) * 0.72 + skyNoise2(vRockWorldPos.xz * 0.42) * 0.28);
        float turfMask = dragonPadClear * crownSlope * aboveSpray * (0.42 + 0.58 * outcropMosaic);
        vec3 turfLush = mix(vec3(0.076, 0.148, 0.045), vec3(0.162, 0.194, 0.064), skyFbm(vRockWorldPos.xz * 0.09));
        diffuseColor.rgb = mix(diffuseColor.rgb, turfLush, clamp(turfMask * 0.90, 0.0, 0.90));

        // Dark wet intertidal basalt splash zone (-11.8m .. -7.5m) & submarine rock below
        float wetZone = 1.0 - smoothstep(-11.2, -7.5, vRockWorldPos.y);
        float submergedDepth = 1.0 - smoothstep(-24.0, -11.6, vRockWorldPos.y);
        diffuseColor.rgb *= mix(1.0, 0.36, wetZone);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.024, 0.042, 0.054), submergedDepth * 0.74);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float wetRough = 1.0 - smoothstep(-11.2, -7.5, vRockWorldPos.y);
        roughnessFactor = mix(roughnessFactor, 0.16, wetRough * 0.86);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        // Full basalt strata relief on steep cliff walls + subtle natural rock/turf micro-relief across hill ridges!
        {
          vec3 wN2 = normalize(vRockWorldNormal);
          float wallWeight = mix(0.24, 1.0, 1.0 - smoothstep(0.42, 0.80, abs(wN2.y)));
          vec3 triW = pow(abs(wN2), vec3(4.0));
          triW /= max(triW.x + triW.y + triW.z, 1e-4);
          vec3 rpN = vRockWorldPos * 0.30;
          float texH =
            texture2D(roughnessMap, rpN.zy).g * triW.x +
            texture2D(roughnessMap, rpN.xz).g * triW.y +
            texture2D(roughnessMap, rpN.xy).g * triW.z;
          float rockBumpH = (evalFaroeseCliffStrata(vRockWorldPos) * 0.60 + (1.0 - texH) * 0.40) * 0.12 * wallWeight;
          vec3 dPdxR = dFdx( -vViewPosition );
          vec3 dPdyR = dFdy( -vViewPosition );
          vec3 r1R = cross( dPdyR, normal );
          vec3 r2R = cross( normal, dPdxR );
          float detR = dot( dPdxR, r1R );
          float signDetR = detR < 0.0 ? -1.0 : 1.0;
          vec3 surfGradR = signDetR * ( dFdx( rockBumpH ) * r1R + dFdy( rockBumpH ) * r2R );
          normal = normalize( abs( detR ) * normal - surfGradR + vec3( 0.0, 0.0, 1e-6 ) );
        }`).replace("#include <fog_fragment>",`float rDist = length(vRockWorldPos - cameraPosition);
        vec3 rViewRay = normalize(vRockWorldPos - cameraPosition);
        vec3 rHazeCol = evalHorizonHazeColor(rViewRay);
        float rAerial = 1.0 - exp(-pow(uMistDensity * 0.85 * rDist, 1.26));
        gl_FragColor.rgb = mix(gl_FragColor.rgb, rHazeCol, clamp(rAerial, 0.0, 1.0));`)},t.add(A_(i));const s=264,o=new Is(102,104,s,s);o.rotateX(-Math.PI*.5);const a=o.getAttribute("position");for(let ct=0;ct<a.count;ct++){const bt=a.getX(ct)-4,zt=a.getZ(ct)-14.5,te=Ss(bt,zt);a.setXYZ(ct,bt,te,zt)}Qc(o,7.3,!0);const r=new Oe(o,n);r.receiveShadow=!0,r.castShadow=!0,r.name="HeroBasaltCliffPerch",t.add(r);const l=Ss(-8.65,-7.25);t.add(P_(-8.65,l-.04,-7.25,n));const c=new Gn;c.name="NordicArchipelago";for(let ct=0;ct<el.length;ct++){const bt=el[ct],zt=new Is(bt.spanX,bt.spanZ,bt.gridSegs,bt.gridSegs);zt.rotateX(-Math.PI*.5);const te=zt.getAttribute("position");for(let Ot=0;Ot<te.count;Ot++){const ce=bt.centerX+te.getX(Ot),re=bt.centerZ+te.getZ(Ot),Ce=bt.evalHeight(ce,re);te.setXYZ(Ot,ce,Ce,re)}Qc(zt,19.1+ct*13.7,!1);const se=new Oe(zt,n);se.receiveShadow=!0,se.castShadow=!0,se.name=bt.name,c.add(se)}for(let ct=0;ct<nl.length;ct++){const bt=nl[ct],zt=new Oe(y_(bt),n);zt.position.set(bt.x,0,bt.z),zt.rotation.y=bt.rotY,zt.castShadow=!0,zt.receiveShadow=!0,zt.name=`FaroeseHeadlandSeaArch_${ct}`,c.add(zt)}const h=pu.map(ct=>b_(ct)),u=new Oe(Ma(h,!1),n);u.castShadow=!0,u.receiveShadow=!0,u.name="TabularFaroeseSeaStacks",c.add(u),t.add(c);const d=Math.cos(.18),f=Math.sin(.18),g=ct=>{const bt=Math.sin(ct*.13+.5)*2.1,zt=-66+ct*d+bt*f,te=-32-ct*f+bt*d,se=Ks(zt,te);return new T(zt,se,te)};let v=10;for(let ct=3;ct<=25;ct+=.08)if(g(ct).y<6.2){v=ct-.16;break}const m=g(v),p=g(v-1.2),M=new Bt(m.x-p.x,m.z-p.z).normalize(),w=new Bt(-M.y,M.x),_=32,A=6,b=new Float32Array((_+1)*(A+1)*3),S=new Float32Array((_+1)*(A+1)*2);for(let ct=0;ct<=_;ct++){const bt=ct/_,zt=$.lerp(-8.5,v+.14,bt),te=g(zt),se=$.lerp(1.1,1.48,bt);for(let Ot=0;Ot<=A;Ot++){const ce=Ot/A,re=(ce-.5)*2*se,Ce=te.x+w.x*re,Ie=te.z+w.y*re,nn=Ks(Ce,Ie),Ge=Math.max(nn+.04,te.y+.22),Ue=ct*(A+1)+Ot;b[Ue*3]=Ce,b[Ue*3+1]=Ge,b[Ue*3+2]=Ie,S[Ue*2]=ce,S[Ue*2+1]=1-bt*2.8}}const E=[];for(let ct=0;ct<_;ct++)for(let bt=0;bt<A;bt++){const zt=ct*(A+1)+bt,te=(ct+1)*(A+1)+bt,se=(ct+1)*(A+1)+(bt+1),Ot=ct*(A+1)+(bt+1);E.push(zt,te,se,zt,se,Ot)}const y=new Xt;y.setAttribute("position",new q(b,3)),y.setAttribute("uv",new q(S,2)),y.setIndex(E),y.computeVertexNormals();const x=48,P=16,C=pn-3.6,R=m.y+.22-C,L=3.1,D=new Float32Array((x+1)*(P+1)*3),k=new Float32Array((x+1)*(P+1)*2);for(let ct=0;ct<=x;ct++){const bt=ct/x,zt=-.35+(L+.35)*Math.pow(bt,.62),te=m.y+.22-R*Math.pow(bt,1.55),se=m.x+M.x*zt,Ot=m.z+M.y*zt,ce=Ks(se,Ot),re=te<ce+.45?.55:0,Ce=$.lerp(1.42,2.75,Math.pow(bt,.85));for(let Ie=0;Ie<=P;Ie++){const nn=Ie/P,Ge=(nn-.5)*2*Ce,Ue=Math.sin(nn*Math.PI)*(.32+.5*bt)+re,sn=se+w.x*Ge+M.x*Ue,bn=Ot+w.y*Ge+M.y*Ue,cn=ct*(P+1)+Ie;D[cn*3]=sn,D[cn*3+1]=te,D[cn*3+2]=bn,k[cn*2]=nn,k[cn*2+1]=1-bt}}const B=[];for(let ct=0;ct<x;ct++)for(let bt=0;bt<P;bt++){const zt=ct*(P+1)+bt,te=(ct+1)*(P+1)+bt,se=(ct+1)*(P+1)+(bt+1),Ot=ct*(P+1)+(bt+1);B.push(zt,te,se,zt,se,Ot)}const F=new Xt;F.setAttribute("position",new q(D,3)),F.setAttribute("uv",new q(k,2)),F.setIndex(B),F.computeVertexNormals();const H=m.x+M.x*(L+.45),V=m.z+M.y*(L+.45),Y={...i},Z=new qe({name:"NordicWaterfallShader",transparent:!0,depthWrite:!1,side:ln,uniforms:Y,vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${ni}
      uniform vec3 uSunColor;
      uniform vec3 uWaterShallowColor;
      varying vec2 vUv;
      varying vec3 vWorldPos;

      void main() {
        float sideFeather = sin(clamp(vUv.x, 0.0, 1.0) * 3.14159);
        float f1 = skyFbm(vec2(vUv.x * 8.5, vUv.y * 10.0 + uTime * 2.6));
        float f2 = skyFbm(vec2(vUv.x * 19.0 + 4.2, vUv.y * 22.0 + uTime * 4.3));
        float threads = smoothstep(0.28, 0.78, f1 * 0.62 + f2 * 0.38);

        float crestFoam = smoothstep(0.75, 0.98, vUv.y) * 0.45;
        float plungeBoil = smoothstep(0.28, 0.02, vUv.y) * 0.68;

        vec3 ambientWater = mix(uHorizonAntiColor, uHorizonSunColor, 0.42) * 1.18 + uSunColor * 0.36;
        vec3 deepChute = uWaterShallowColor * 1.4 + ambientWater * 0.35;
        vec3 col = mix(deepChute, ambientWater, clamp(threads * 0.82 + crestFoam + plungeBoil, 0.0, 1.0));

        float dist = length(vWorldPos - cameraPosition);
        vec3 hazeCol = evalHorizonHazeColor(normalize(vWorldPos - cameraPosition));
        float aerial = 1.0 - exp(-pow(uMistDensity * 0.85 * dist, 1.26));
        col = mix(col, hazeCol, clamp(aerial, 0.0, 0.95));

        float alpha = pow(sideFeather, 0.65) * (0.36 + 0.54 * threads + crestFoam + plungeBoil);
        gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.92));
      }
    `}),X=new Oe(y,Z);X.renderOrder=3;const W=new Oe(F,Z);W.renderOrder=3,t.add(X),t.add(W);const O=new vl(7.8,40);O.rotateX(-Math.PI*.5);const st=new qe({transparent:!0,depthWrite:!1,uniforms:Y,vertexShader:`
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
      ${ni}
      uniform vec3 uSunColor;
      varying vec2 vLocalXZ;
      varying vec3 vWorldPos;
      void main() {
        float r = length(vLocalXZ) / 7.8;
        if (r > 1.0) discard;
        float ang = atan(vLocalXZ.y, vLocalXZ.x);
        float radialWave = sin(r * 18.0 - uTime * 3.8 + skyNoise2(vLocalXZ * 0.9) * 2.5) * 0.5 + 0.5;
        float foamCells = skyFbm(vLocalXZ * 0.85 - vec2(cos(ang), sin(ang)) * uTime * 0.55);
        float coreBoil = smoothstep(0.55, 0.05, r) * 0.88;
        float outerRings = smoothstep(1.0, 0.25, r) * radialWave * smoothstep(0.32, 0.78, foamCells) * 0.72;
        float alpha = clamp(coreBoil + outerRings, 0.0, 0.92) * smoothstep(1.0, 0.72, r);

        vec3 foamCol = mix(uHorizonAntiColor, uHorizonSunColor, 0.45) * 1.28 + uSunColor * 0.36;
        float dist = length(vWorldPos - cameraPosition);
        vec3 hazeCol = evalHorizonHazeColor(normalize(vWorldPos - cameraPosition));
        foamCol = mix(foamCol, hazeCol, clamp(1.0 - exp(-pow(uMistDensity * 0.85 * dist, 1.26)), 0.0, 0.95));
        gl_FragColor = vec4(foamCol, alpha);
      }
    `}),at=new Oe(O,st);at.position.set(H,pn+.16,V),at.renderOrder=3,t.add(at);const j=140,K=new Float32Array(j*3),G=new Float32Array(j);for(let ct=0;ct<j;ct++)K[ct*3]=H+(Qt(ct,11.3)-.5)*5.8,K[ct*3+1]=pn+Qt(ct,27.9)*9.5,K[ct*3+2]=V+(Qt(ct,43.1)-.5)*5.8,G[ct]=Qt(ct,61.7);const nt=new Xt;nt.setAttribute("position",new q(K,3)),nt.setAttribute("aSeed",new q(G,1));const _t=new qe({transparent:!0,depthWrite:!1,uniforms:Y,vertexShader:`
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
      ${ni}
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
    `}),J=new Zr(nt,_t);J.renderOrder=4,J.frustumCulled=!1,t.add(J);const U=new Ke,rt=new _a(.58,1),dt=rt.getAttribute("position");for(let ct=0;ct<dt.count;ct++){const bt=dt.getX(ct);let zt=dt.getY(ct);const te=dt.getZ(ct),se=.84+.28*xe(bt*2.2+4.3,zt*2.2+te*2.2,3);zt<-.06&&(zt=-.06+(zt+.06)*.25),dt.setXYZ(ct,bt*se*1.38,zt*se*.52,te*se*1.22)}rt.computeVertexNormals();const wt=[{cx:-3.5,cz:-14,spanX:62,spanZ:58,isHero:!0,evalH:Ss},{cx:-74,cz:-36,spanX:68,spanZ:58,isHero:!1,evalH:Ks},{cx:88,cz:36,spanX:74,spanZ:74,isHero:!1,evalH:cu},{cx:84,cz:-46,spanX:68,spanZ:78,isHero:!1,evalH:hu},{cx:-124,cz:-86,spanX:68,spanZ:58,isHero:!1,evalH:uu},{cx:-48,cz:-92,spanX:52,spanZ:48,isHero:!1,evalH:du}],vt=220,Lt=new Xa(rt,n,vt);Lt.castShadow=!0,Lt.receiveShadow=!0;let yt=0;const z=new T(0,1,0),I=new T,et=new je,ft=new je;for(let ct=0;ct<wt.length;ct++){const bt=wt[ct];let zt=0;for(let te=0;te<550&&zt<20&&yt<vt;te++){const se=7e3+ct*800+te,Ot=bt.cx+(Qt(se,14.7)-.5)*(bt.spanX*1.25),ce=bt.cz+(Qt(se,53.9)-.5)*(bt.spanZ*1.25),re=bt.evalH(Ot,ce);if(re<-12.3||re>-10.6||Math.hypot(Ot-m.x,ce-m.z)<7)continue;const Ce=1.25+Qt(se,29.1)*2.1;U.position.set(Ot,re-.25*Ce,ce),U.rotation.set((Qt(se,3.3)-.5)*.18,Qt(se,9.8)*Math.PI*2,(Qt(se,6.1)-.5)*.18),U.scale.set(Ce*(.95+Qt(se,4.4)*.35),Ce*.58,Ce),U.updateMatrix(),Lt.setMatrixAt(yt++,U.matrix),zt++}}for(let ct=0;ct<wt.length;ct++){const bt=wt[ct],zt=bt.isHero?26:12;let te=0;for(let se=0;se<400&&te<zt&&yt<vt;se++){const Ot=ct*500+se,ce=bt.cx+(Qt(Ot,41.2)-.5)*bt.spanX,re=bt.cz+(Qt(Ot,83.7)-.5)*bt.spanZ;if(bt.isHero){if(Math.sqrt(Math.pow(ce/10.2,2)+Math.pow((re+1)/6.4,2))<1)continue}else if(Math.hypot(ce-m.x,re-m.z)<5.5)continue;const Ce=bt.evalH(ce,re);if(Ce<.25||Ce>34)continue;const Ie=bt.evalH(ce+.6,re),nn=bt.evalH(ce-.6,re),Ge=bt.evalH(ce,re+.6),Ue=bt.evalH(ce,re-.6),sn=(Ie-nn)/1.2,bn=(Ge-Ue)/1.2;if(Math.hypot(sn,bn)>.38||Math.min(Ie,nn,Ge,Ue)<0)continue;const Pn=(bt.isHero?.38:.58)+Qt(Ot,19.4)*(bt.isHero?.62:.95);I.set(-sn,1,-bn).normalize(),et.setFromUnitVectors(z,I),ft.setFromAxisAngle(z,Qt(Ot,8.9)*Math.PI*2),U.quaternion.copy(et).multiply(ft),U.position.set(ce,Ce-.14*Pn,re),U.scale.set(Pn*(.95+Qt(Ot,2.3)*.32),Pn*.55,Pn),U.updateMatrix(),Lt.setMatrixAt(yt++,U.matrix),te++}}Lt.count=yt,Lt.instanceMatrix.needsUpdate=!0,t.add(Lt);const gt=T_(),mt={uTime:{value:0}},Et=(ct,bt)=>{ct.onBeforeCompile=zt=>{Object.assign(zt.uniforms,i),zt.uniforms.uFloraTime=mt.uTime,zt.vertexShader=zt.vertexShader.replace("#include <common>",`#include <common>
          uniform float uFloraTime;
          varying vec3 vFloraWorldPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float hFrac = clamp(position.y / ${bt.toFixed(2)}, 0.0, 1.0);
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
          vFloraWorldPos = fwPos.xyz;`),zt.fragmentShader=zt.fragmentShader.replace("#include <common>",`#include <common>
          ${ni}
          varying vec3 vFloraWorldPos;`).replace("#include <fog_fragment>",`float fDist = length(vFloraWorldPos - cameraPosition);
          vec3 fHaze = evalHorizonHazeColor(normalize(vFloraWorldPos - cameraPosition));
          float fAerial = 1.0 - exp(-pow(uMistDensity * 0.85 * fDist, 1.26));
          gl_FragColor.rgb = mix(gl_FragColor.rgb, fHaze, clamp(fAerial, 0.0, 1.0));`)}},pt=new bi({name:"NordicVariedCoastalGrass",color:new Dt(16777215),roughness:.78,metalness:0,side:ln});Et(pt,.36);const Ct=8400,Wt=new Xa(gt,pt,Ct);Wt.castShadow=!1,Wt.receiveShadow=!0;const xt=new Dt;let Rt=0;for(let ct=0;ct<wt.length;ct++){const bt=wt[ct],zt=bt.isHero?4200:840;let te=0,se=0;for(;te<zt&&se<zt*7&&Rt<Ct;){se++;const Ot=ct*25e3+se,ce=bt.cx+(Qt(Ot,1.3)-.5)*bt.spanX,re=bt.cz+(Qt(Ot,7.9)-.5)*bt.spanZ;if(bt.isHero){const Zi=Math.sqrt(Math.pow((ce-4.45)/2.35,2)+Math.pow((re+.85)/3.85,2)),Ki=Math.sqrt(Math.pow((ce+4.45)/2.35,2)+Math.pow((re+1.15)/3.85,2));if(Zi<1||Ki<1)continue}const Ce=bt.evalH(ce,re),Ie=bt.evalH(ce+.4,re),nn=bt.evalH(ce,re+.4),Ge=Math.hypot(Ie-Ce,nn-Ce)/.4;if(Ce<-.5||Ge>.78)continue;const Ue=xe(ce*.45+2.3,re*.45-4.1,3);if(Ue<.32)continue;const sn=ve(.58,.85,Ue),bn=.55+Qt(Ot,3.7)*.72+sn*.5,cn=.75+Qt(Ot,5.1)*.62;U.position.set(ce,Ce-.02,re),U.scale.set(cn,bn,cn),U.rotation.set((Qt(Ot,9.2)-.5)*.18,Qt(Ot,11.4)*Math.PI*2,(Qt(Ot,13.8)-.5)*.18),U.updateMatrix(),Wt.setMatrixAt(Rt,U.matrix);const Pn=Qt(Ot,17.1);Pn<.54?xt.setHSL(.24+(Qt(Ot,21.1)-.5)*.04,.44,.21+Qt(Ot,23.7)*.11):Pn<.8?xt.setHSL(.14+(Qt(Ot,25.3)-.5)*.03,.42,.3+Qt(Ot,29.1)*.11):xt.setHSL(.28+(Qt(Ot,31.9)-.5)*.03,.3,.22+Qt(Ot,37.4)*.1),Wt.setColorAt(Rt,xt),Rt++,te++}}Wt.count=Rt,Wt.instanceMatrix.needsUpdate=!0,Wt.instanceColor&&(Wt.instanceColor.needsUpdate=!0),t.add(Wt);const qt=C_(),jt=new bi({name:"NordicCliffWildflowers",vertexColors:!0,roughness:.68,metalness:0});Et(jt,.26);const kt=2400,Jt=new Xa(qt,jt,kt);Jt.castShadow=!1,Jt.receiveShadow=!0;const Zt=new Dt;let ye=0;for(let ct=0;ct<wt.length;ct++){const bt=wt[ct],zt=bt.isHero?1280:220;let te=0,se=0;for(;te<zt&&se<zt*8&&ye<kt;){se++;const Ot=9e4+ct*18e3+se,ce=bt.cx+(Qt(Ot,2.7)-.5)*bt.spanX,re=bt.cz+(Qt(Ot,6.3)-.5)*bt.spanZ;if(bt.isHero){const sn=Math.sqrt(Math.pow((ce-4.45)/2.55,2)+Math.pow((re+.85)/4.05,2)),bn=Math.sqrt(Math.pow((ce+4.45)/2.55,2)+Math.pow((re+1.15)/4.05,2));if(sn<1||bn<1)continue}const Ce=bt.evalH(ce,re),Ie=Math.hypot(bt.evalH(ce+.4,re)-Ce,bt.evalH(ce,re+.4)-Ce)/.4;if(Ce<-.2||Ie>.66||xe(ce*.48-8.2,re*.48+5.7,3)<.48)continue;const Ge=.68+Qt(Ot,11.9)*.65;U.position.set(ce,Ce-.015,re),U.scale.set(Ge,Ge*(.85+Qt(Ot,14.2)*.35),Ge),U.rotation.set((Qt(Ot,18.5)-.5)*.18,Qt(Ot,22.1)*Math.PI*2,(Qt(Ot,26.8)-.5)*.18),U.updateMatrix(),Jt.setMatrixAt(ye,U.matrix);const Ue=xe(ce*.25+13.1,re*.25-9.4,2);Ue<.42?Zt.setHSL(.93+(Qt(Ot,31.1)-.5)*.04,.68,.66+Qt(Ot,33.7)*.1):Ue<.62?Zt.setHSL(.12,.14,.88+Qt(Ot,35.9)*.08):Ue<.78?Zt.setHSL(.13+(Qt(Ot,39.2)-.5)*.02,.86,.56+Qt(Ot,41.8)*.08):Zt.setHSL(.79+(Qt(Ot,45.1)-.5)*.04,.52,.54+Qt(Ot,49.3)*.1),Jt.setColorAt(ye,Zt),ye++,te++}}Jt.count=ye,Jt.instanceMatrix.needsUpdate=!0,Jt.instanceColor&&(Jt.instanceColor.needsUpdate=!0),t.add(Jt),t.add(E_(i));const It=p_([{x:-2,z:-8,radius:22.5},{x:-18,z:-26,radius:18},{x:27.5,z:-10.5,radius:6.5},{x:-37.5,z:-22,radius:7.2},{x:H,z:V,radius:5.8,boost:1},{x:-66,z:-32,radius:25.5},{x:-91,z:-42.5,radius:21},{x:88,z:36,radius:34.5},{x:59.5,z:23,radius:11},{x:43.5,z:14.5,radius:6.2},{x:63,z:50.5,radius:8.2},{x:88,z:-56,radius:30.5},{x:70,z:-22.5,radius:17.5},{x:-124,z:-86,radius:34},{x:-42,z:-96,radius:20},{x:36,z:-108,radius:22},{x:-144,z:78,radius:44},{x:168,z:122,radius:42},{x:-206,z:-96,radius:46},{x:-8,z:-222,radius:58},{x:-18,z:236,radius:32}],i);t.add(It.mesh);const ot=460,Mt=new Float32Array(ot*3),Ft=new Float32Array(ot);for(let ct=0;ct<ot;ct++)Mt[ct*3]=(Qt(ct,31.7)-.5)*64,Mt[ct*3+1]=-7+Qt(ct,47.3)*28,Mt[ct*3+2]=-16+Qt(ct,59.1)*56,Ft[ct]=Qt(ct,73.9);const Pt=new Xt;Pt.setAttribute("position",new q(Mt,3)),Pt.setAttribute("aSeed",new q(Ft,1));const ne={uTime:{value:0},uColor:i.uSunColor},Re=new qe({transparent:!0,depthWrite:!1,blending:ta,uniforms:ne,vertexShader:`
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
    `}),We=new Zr(Pt,Re);return We.renderOrder=5,We.frustumCulled=!1,t.add(We),{group:t,ocean:It,update(ct){mt.uTime.value=ct,ne.uTime.value=ct,It.update(ct)}}}const an={neckArch:.16,neckYaw:.08,headPitch:-.04,headYaw:.14,headRoll:-.08,earPerk:.76,earAsymmetry:.06,cheekNubFlare:.5,eyeYaw:.06,eyePitch:.02,pupilDilation:.76,blink:0,squint:0,jawOpen:0,teethExtension:0,tongueExtend:.12,tongueCurl:.08,wingUnfurl:.46,wingFlap:.08,wingSweep:-.05,wingCamber:.3,wingWristFold:0,wingTipLag:0,pelvicFinFlare:.9,dorsalSpineSplit:.22,spineArch:.08,spineTwist:.02,forelegStance:.1,hindlegStance:.06,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:.2,tailPitch:.26,tailCurl:.16,tailWaveAmp:0,tailWavePhase:0,rightTailFinFlare:.24,leftProstheticFinFlare:.24,autoSyncProstheticTail:!0,subtleBreathing:!0,alphaGlow:.08,biolumGlow:0,lightningCloak:0},L_=[{id:"hero-perch",label:"Hero Perch",subtitle:"Noble Alpha Sentinel",patch:{...an}},{id:"gummy-smile",label:"Gummy Grin",subtitle:"Toothless Happy Smile",patch:{...an,headYaw:.22,headPitch:-.06,headRoll:-.24,earPerk:.96,pupilDilation:.94,squint:.22,jawOpen:.34,teethExtension:0,tongueExtend:.58,tongueCurl:.26,tailYaw:.36}},{id:"courtship-cape",label:"Courtship Cape",subtitle:"Beach Wing-Display Dance",patch:{...an,forelegStance:.52,neckArch:.48,headYaw:.28,headPitch:.08,headRoll:-.18,earPerk:1,pupilDilation:.96,jawOpen:.26,teethExtension:0,tongueExtend:.42,wingUnfurl:.96,wingFlap:.88,wingSweep:.44,wingCamber:.68,dorsalSpineSplit:.85}},{id:"curious-tilt",label:"Curious Tilt",subtitle:"Asymmetric Ear-Perk",patch:{...an,headRoll:-.62,headYaw:.14,headPitch:.08,earPerk:.92,earAsymmetry:-.45,pupilDilation:.92,jawOpen:.05,teethExtension:0}},{id:"alpha-roar",label:"Alpha Roar",subtitle:"Split Spines & Cyan Fire",patch:{...an,forelegStance:-.48,spineArch:.36,neckArch:-.22,headPitch:-.22,earPerk:.08,squint:.42,pupilDilation:.08,jawOpen:.88,teethExtension:1,tongueExtend:.52,tongueCurl:.46,wingUnfurl:.92,wingFlap:.46,wingSweep:.28,dorsalSpineSplit:1,alphaGlow:1,biolumGlow:.65,lightningCloak:.35}},{id:"lightning-storm",label:"Storm Skrill",subtitle:"Arc-Plasma Overload",patch:{...an,forelegStance:-.35,wingUnfurl:.98,wingFlap:.62,wingCamber:.72,dorsalSpineSplit:1,pupilDilation:.16,jawOpen:.54,teethExtension:1,alphaGlow:1,biolumGlow:.92,lightningCloak:1}}];function ps(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const I_=new T(-.16,.985,.06).normalize(),D_=new T(.16,.985,.06).normalize(),fu=new T().crossVectors(I_,co).normalize(),F_=new T().crossVectors(co,fu).normalize(),mu=new T().crossVectors(D_,ho).normalize(),U_=new T().crossVectors(ho,mu).normalize();class N_{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new yn;tmpQuat=new je;tmpQuatB=new je;tmpVecA=new T;tmpVecB=new T;tmpVecC=new T;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;prevHeadRoll=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...an,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,an),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.autoSyncProstheticTail&&(t.rightTailFinFlare!==void 0?this.state.leftProstheticFinFlare=t.rightTailFinFlare:t.leftProstheticFinFlare!==void 0?this.state.rightTailFinFlare=t.leftProstheticFinFlare:t.autoSyncProstheticTail===!0&&(this.state.leftProstheticFinFlare=this.state.rightTailFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0};const e=4.6,n=t%e,s=Math.floor(t/e);let o=0;n>3.85&&n<4.03?o=Math.sin((n-3.85)/.18*Math.PI):s%3===1&&n>4.12&&n<4.29&&(o=Math.sin((n-4.12)/.17*Math.PI));const a=(t+1.3)%6.2,r=a<.22?Math.sin(a/.22*Math.PI)*.085:0,l=(t+3.9)%7.4,c=l<.2?-Math.sin(l/.2*Math.PI)*.075:0,h=Math.sin(t*.72)*.032+Math.sin(t*1.95+1.1)*.014,u=Math.cos(t*.58+.4)*.022,d=Math.sin(t*1.15)*.025;return{autoBlink:o,earTwitchL:r,earTwitchR:c,gazeMicroX:h,gazeMicroY:u,pupilPulse:d}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new ee().copy(this.asset.rootGroup.matrixWorld).invert(),g=new ee().multiplyMatrices(f,c.parent.matrixWorld),v=new T().setFromMatrixPosition(new ee().multiplyMatrices(g,new ee().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),M=l.bindWorldPositions.get(n),w=new T().subVectors(p,m),_=new T().subVectors(M,p),A=w.length(),b=_.length(),S=M.clone();a&&(S.add(a),S.y=Math.max(M.y,S.y));const E=new T().subVectors(S,v),y=E.length(),x=(A+b)*.968,P=Math.abs(A-b)+.085,C=$.clamp(y,P,x),R=E.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),D=$.clamp((A*A+C*C-b*b)/(2*A*C),-1,1),k=Math.sqrt(Math.max(0,1-D*D)),B=v.clone().addScaledVector(R,A*D).addScaledVector(L,A*k),F=v.clone().addScaledVector(R,C),H=new T().subVectors(B,v).normalize(),V=new T().subVectors(F,B).normalize(),Y=new je().setFromUnitVectors(w.clone().normalize(),H),Z=new je().setFromUnitVectors(_.clone().normalize(),V),X=new je().setFromRotationMatrix(g);c.quaternion.copy(X).invert().multiply(Y),h.quaternion.copy(Y).invert().multiply(Z),u.quaternion.copy(Z).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;const o=68,a=11.5,r=$.clamp(-n*.055,-.28,.28),l=$.clamp(-s*.055,-.28,.28);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=$.clamp(e.airborneFactor,0,1),s=this.sampleLivingIdleMicros(t),o=e.subtleBreathing?Math.sin(t*1.55)*.8+Math.sin(t*3.1)*.2:0,a=e.subtleBreathing?Math.sin(t*1.15-.5)*.02:0,r=ps(.02,.55,Math.abs(e.legFlightTuck))*(1-n),l=Math.max(n,r),c=1-l,h=e.forelegStance>=0?e.forelegStance*.055:e.forelegStance*.275,u=e.hindlegStance>=0?e.hindlegStance*.048:e.hindlegStance*.245,d=.52*h+.48*u,f=$.clamp((u-h)*.44,-.22,.24),g=$.clamp(e.limbStride,-1,1)*.045*c,v=r*.34;this.setBonePose("root",f*c,g,0,"XYZ",0,d*c+v+o*.004,0);const m=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+m,-e.spineTwist*.05-g*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+o*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+o*.008,e.spineTwist*.07,0),this.setBonePose("chest",-f*.32*c+o*.01-m*.6,e.spineTwist*.07+g*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const p=$.clamp(e.limbStride,-1,1),M=Math.max(0,-e.forelegStance),w=Math.max(0,-e.hindlegStance);for(const j of["L","R"]){const K=j==="L"?1:-1,G=this.asset.rig.boneMap.get(`scapula_${j}`);if(this.setBonePose(`scapula_${j}`,0,0,0),G.updateMatrixWorld(!0),l<.999){const nt=K*p*.23,_t=-K*p*.22,J=Math.max(0,K*p)*Math.sin(Math.abs(p)*Math.PI)*.042,U=Math.max(0,-K*p)*Math.sin(Math.abs(p)*Math.PI)*.038,rt=new T(K*M*.055,J,nt+M*.045),dt=new T(K*w*.05,U,_t-w*.04);this.asset.rootGroup.updateMatrixWorld(!1);const wt=new ee().copy(this.asset.rootGroup.matrixWorld).invert(),vt=this.asset.rig.boneMap.get(`shoulder_${j}`);vt.position.copy(this.restPos.get(`shoulder_${j}`)),vt.updateMatrixWorld(!0);const Lt=this.tmpVecC.setFromMatrixPosition(vt.matrixWorld).applyMatrix4(wt),yt=this.asset.rig.bindWorldPositions.get(`wrist_${j}`).clone().add(rt),z=Lt.distanceTo(yt)-.675;z>0&&(this.setBonePose(`scapula_${j}`,0,0,0,"XYZ",0,-z*1.08*c,0),G.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${j}`,`elbow_${j}`,`wrist_${j}`,`forepaw_${j}`,this.tmpVecA.set(K*(.2+.16*M),-.08+.18*M,-1).normalize(),rt,J*2.2),this.solvePlantedLimbIK(`hip_${j}`,`knee_${j}`,`ankle_${j}`,`hindpaw_${j}`,this.tmpVecB.set(K*(.2+.14*w),.14+.16*w,1).normalize(),dt,U*2)}if(l>.001){const nt=$.clamp(e.legFlightTuck,-1,1),_t=e.wingFlap*.082*l,J=Math.sin(t*2.05+(j==="L"?0:1.25))*.052*l,U=Math.cos(t*1.58+(j==="L"?.7:2.2))*.046*l,rt=(nt>=0?.86*nt:-.44*-nt)+_t*.65+J*.5,dt=nt>=0?-K*.06*nt:0,wt=(nt>=0?K*.09*nt:K*.05*-nt)+K*U*.35,vt=(nt>=0?.34*nt:.28*-nt)-_t*.55+U*.65,Lt=(nt>=0?.4*nt:.2*-nt)+J*.7,yt=(nt>=0?.36*nt:-.1*-nt)+U*.55,z=(nt>=0?1.16*nt:-.48*-nt)+_t*.55+U*.55,I=(nt>=0?-K*.05*nt:0)+K*J*.25,et=(nt>=0?K*.07*nt:K*.05*-nt)+K*J*.3,ft=(nt>=0?-.66*nt:.34*-nt)-_t*.5-J*.65,gt=(nt>=0?.78*nt:-.16*-nt)+_t*.45+U*.75,mt=(nt>=0?.62*nt:.16*-nt)+J*.6,Et=(pt,Ct,Wt,xt)=>{const Rt=this.asset.rig.boneMap.get(pt);this.tmpEuler.set(Ct,Wt,xt,"XYZ"),this.tmpQuat.copy(this.restQuat.get(pt)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),l>=.999?(Rt.position.copy(this.restPos.get(pt)),Rt.quaternion.copy(this.tmpQuat)):Rt.quaternion.slerp(this.tmpQuat,l)};Et(`shoulder_${j}`,rt,dt,wt),Et(`elbow_${j}`,vt,0,0),Et(`wrist_${j}`,Lt,0,0),Et(`forepaw_${j}`,yt,0,0),Et(`hip_${j}`,z,I,et),Et(`knee_${j}`,ft,0,0),Et(`ankle_${j}`,gt,0,0),Et(`hindpaw_${j}`,mt,0,0)}}const _=ps(.28,.85,e.jawOpen),A=-e.neckArch*.12-o*.009-_*.035,b=e.neckYaw*.13;this.setBonePose("neck_1",A+e.headPitch*.04,b+e.headYaw*.05,e.headRoll*.04,"YXZ"),this.setBonePose("neck_2",A+e.headPitch*.07,b+e.headYaw*.09,e.headRoll*.07,"YXZ"),this.setBonePose("neck_3",A*.9+e.headPitch*.1,b+e.headYaw*.14,e.headRoll*.11,"YXZ"),this.setBonePose("neck_4",A*.8+e.headPitch*.14,b*.85+e.headYaw*.19,e.headRoll*.15,"YXZ"),this.setBonePose("head",e.headPitch*.36+o*.01-_*.05,e.headYaw*.46,e.headRoll*.36,"YXZ");const S=$.clamp(e.earPerk-_*.28,0,1),E=(S-.5)*.72,y=e.headRoll*.18;for(const j of["L","R"]){const K=j==="L"?1:-1,G=j==="L"?s.earTwitchL:s.earTwitchR,nt=K*(e.earAsymmetry*.28+y)+G,_t=E+nt+this.earLagPitch*.65,J=(1-S)*.36-K*this.earLagYaw*.55;this.setBonePose(`ear_${j}_1`,_t*.65,-K*J,K*_t*.25,"YXZ"),this.setBonePose(`ear_${j}_2`,_t*.36+this.earLagPitch*.35,-K*J*.35,0,"YXZ"),this.setBonePose(`ear_${j}_3`,_t*.24+this.earLagPitch*.25,0,0,"YXZ");const rt=($.clamp(e.cheekNubFlare+_*.22,0,1)-.5)*.44;this.setBonePose(`cheekUpper_${j}_1`,rt*.3,-K*(rt*.55+this.earLagYaw*.25),0),this.setBonePose(`cheekLower_${j}_1`,rt*.2,-K*(rt*.45+this.earLagYaw*.2),0)}const x=$.clamp(e.eyeYaw+s.gazeMicroX,-1,1),P=$.clamp(e.eyePitch+s.gazeMicroY,-1,1),C=Math.max(e.blink,s.autoBlink*(1-e.blink)),R=$.clamp(e.squint+_*.26,0,1);for(const j of["L","R"]){const K=j==="L"?fu:mu,G=j==="L"?F_:U_;this.tmpQuat.setFromAxisAngle(G,x*.34),this.tmpQuatB.setFromAxisAngle(K,-P*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${j}`,this.tmpQuat);const nt=P>0?-P*.14:-P*.22,_t=P>0?P*.12:P*.08,J=$.clamp(Math.max(C,R*.52)+nt*(1-C),-.14,1),U=$.clamp(Math.max(C,R*.6)+_t*(1-C),-.1,1);this.tmpQuat.setFromAxisAngle(K,J*.72),this.setBoneAxisQuat(`eyelidUpper_${j}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(K,-U*.64),this.setBoneAxisQuat(`eyelidLower_${j}`,this.tmpQuat)}const L=$.clamp(e.pupilDilation+s.pupilPulse-_*.25,0,1);this.asset.materials.eyeMaterials.uniforms.uPupilDilation.value=L,this.asset.materials.eyeMaterials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uTime.value=t,this.asset.materials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uBiolumGlow.value=e.biolumGlow,this.asset.materials.uniforms.uLightningCloak.value=e.lightningCloak,this.setBonePose("jaw",e.jawOpen*.66,0,0);const D=.28+.72*ps(0,.14,e.jawOpen),B=1-e.teethExtension*D;this.setBonePose("teethUpper",0,0,0,"XYZ",0,B*.025,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-B*.023,0);const F=ps(.06,.48,e.jawOpen),H=e.tongueExtend*.044*F;if(e.tongueCurl>=0){const j=-e.tongueCurl*(.018+.2*F);this.setBonePose("tongue_1",j*.35,0,0,"XYZ",0,0,H),this.setBonePose("tongue_2",j*.65,0,0),this.setBonePose("tongue_3",j*.95,0,0),this.setBonePose("tongue_4",j*1.15,0,0)}else{const j=F*ps(.2,.95,e.tongueExtend),K=-e.tongueCurl*j;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,H),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",K*.13,0,0),this.setBonePose("tongue_4",K*.2,0,0)}const V=$.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),Y=$.lerp(.11,.74,l);for(const j of["L","R"]){const K=j==="L"?1:-1,G=e.wingFlap*(.25+.75*e.wingUnfurl),nt=K*(G>=0?G*.74:G*Y),_t=G<0?G*$.lerp(.04,.26,n)*e.wingUnfurl:0,J=K*e.wingSweep*.44,U=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${j}`,.05*V,K*.12*V,nt*.18,"YXZ"),this.setBonePose(`wingShoulder_${j}`,e.wingCamber*.09,K*.82*V+J,nt-K*.22*V,"YXZ"),this.setBonePose(`wingElbow_${j}`,0,-K*(1.42*V+U*.45),K*.86*V+nt*.22+K*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${j}`,-.35*V-e.wingCamber*.18,K*(1.32*V+U*.55)+J*.35,K*.12*V+K*_t*.3+K*e.wingTipLag*.26,"YXZ");for(let dt=1;dt<=6;dt++){const wt=(dt-1)/5,vt=K*(-.38+wt*.58)*V,Lt=-e.wingCamber*(.14+.18*(1-wt))-.1*V,yt=e.wingTipLag*(.18+.26*wt),z=G>=0?-G*.22:-G*$.lerp(.06*Math.pow(Math.max(0,(wt-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${j}_${dt}_a`,Lt,vt,K*(z*.4+yt*.45),"YXZ"),this.setBonePose(`wingFinger_${j}_${dt}_b`,Lt*.5,vt*.25,K*(z*.7+yt*.75),"YXZ")}const rt=1-e.pelvicFinFlare;for(let dt=1;dt<=3;dt++)this.setBonePose(`pelvicFin_${j}_${dt}`,0,0,-K*rt*1.18,"XYZ")}for(const j of this.asset.dorsalSpineMeshes)j.morphTargetInfluences&&j.morphTargetInfluences.length>0&&(j.morphTargetInfluences[0]=e.dorsalSpineSplit);const Z=e.autoSyncProstheticTail?e.rightTailFinFlare:e.leftProstheticFinFlare,X=Math.min(e.rightTailFinFlare,Z),W=X<0?Math.sin(Math.abs(X)*1.38)*.53:.02;for(let j=1;j<=10;j++){const K=j/10,G=j>=9,nt=G?0:e.tailYaw*.13+e.tailCurl*.18*Math.pow(K,1.4)+a*K,_t=G?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-j*.48)*.085*(.4+.6*K);let J=G?0:e.tailPitch*.088*(.45+K)+_t;if(!G&&n<.85&&j>=2&&j<=8){const U=Math.max(0,(W-.05)*.135)*(1-n);J<U&&(J=$.lerp(J,U,ps(1,5,j)))}if(this.setBonePose(`tail_${j}`,J,nt,0,"YXZ"),n<.85){const U=this.asset.rig.boneMap.get(`tail_${j}`);U.parent.updateMatrixWorld(!0),U.updateMatrixWorld(!0);const rt=this.tmpVecC.setFromMatrixPosition(U.matrixWorld),wt=Ss(rt.x,rt.z)+(j>=8?.055+W:.065);if(rt.y<wt&&j>1){const vt=U.parent,Lt=U.position.length(),yt=Math.min(.45,(wt-rt.y)/Math.max(.15,Lt))*(1-n);this.tmpEuler.set(yt,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),vt.quaternion.multiply(this.tmpQuat),vt.updateMatrixWorld(!0)}}}const O=1.38,st=e.rightTailFinFlare*O,at=Z*O;this.setBonePose("tailFinHinge_R",0,0,-st,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,at,"XYZ");for(let j=1;j<=5;j++)this.setBonePose(`tailFin_R_${j}`,0,0,0),this.setBonePose(`tailFin_L_${j}`,0,0,0);this.setBonePose("prostheticCollar",0,0,at*.22),this.setBonePose("prostheticRod",0,0,0),this.asset.rig.rootBone.updateMatrixWorld(!0)}}function gu(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Jc(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Yi(i){const t=Math.max(0,Math.min(1,(i-1.44)/.625)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.78)/.22),2))),n=.054*Jc(t,.36,.23),s=-.046*gu(.5,.88,t),o=.013*Jc(t,.77,.13);return(.204+n+s+o)*e}function Ai(i){const t=Math.max(0,Math.min(1,(i-1.55)/.5149999999999999)),e=.022*Math.pow(1-gu(0,.44,t),1.55),n=-.008*Math.sin(t*Math.PI);return 1.482+e+n}const _u=[{rootX:.018,rootY:.116,rootZ:-3.34,tipX:.34,tipY:.126,tipZ:-3.32},{rootX:.018,rootY:.116,rootZ:-3.5,tipX:.45,tipY:.13,tipZ:-3.52},{rootX:.018,rootY:.116,rootZ:-3.66,tipX:.44,tipY:.13,tipZ:-3.74},{rootX:.018,rootY:.116,rootZ:-3.82,tipX:.34,tipY:.125,tipZ:-3.96},{rootX:.018,rootY:.116,rootZ:-3.97,tipX:.18,tipY:.12,tipZ:-4.14}],vu=[{parentBone:"tail_1",rootX:.155,rootY:.7,rootZ:-.78,tipX:.37,tipY:.68,tipZ:-.92},{parentBone:"tail_2",rootX:.13,rootY:.62,rootZ:-1.02,tipX:.42,tipY:.59,tipZ:-1.19},{parentBone:"tail_2",rootX:.105,rootY:.55,rootZ:-1.24,tipX:.31,tipY:.52,tipZ:-1.42}],uo=new T(.415,.035,.909).normalize(),po=new T(-.415,.035,.909).normalize(),ha=.075;function xu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.292:.274),o=t?.935:-.51,a=.036,r=t?.074:.069,l=[],c=[-.84,-.28,.28,.84];for(let h=0;h<4;h++){const u=c[h]+e*.05,d=h===1||h===2,f=(t?.106:.098)*(d?1:.86),g=(t?.054:.05)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.032,dirX:Math.sin(u)*.9,dirZ:Math.cos(u),toeLength:f,baseRadius:d?.037:.033,tipRadius:d?.024:.021,clawLength:g})}return l}function k_(){const i=[{name:"root",parent:null,worldPos:[0,.79,.11]},{name:"pelvis",parent:"root",worldPos:[0,.77,-.5]},{name:"spine_1",parent:"root",worldPos:[0,.78,.13]},{name:"spine_2",parent:"spine_1",worldPos:[0,.84,.46]},{name:"chest",parent:"spine_2",worldPos:[0,.91,.79]},{name:"neck_1",parent:"chest",worldPos:[0,1.04,.99]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.19,1.14]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.35,1.28]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.47,1.4]},{name:"head",parent:"neck_4",worldPos:[0,1.535,1.51]},{name:"eye_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eye_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidUpper_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidLower_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidLower_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"teethUpper",parent:"head",worldPos:[0,1.495,1.8]},{name:"jaw",parent:"head",worldPos:[0,1.49,1.55]},{name:"teethLower",parent:"jaw",worldPos:[0,1.472,1.8]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.472,1.62]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.472,1.72]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.472,1.82]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.47,1.91]},{name:"ear_L_1",parent:"head",worldPos:[.118,1.665,1.48]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.142,1.748,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.156,1.815,1.29]},{name:"ear_R_1",parent:"head",worldPos:[-.118,1.665,1.48]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.142,1.748,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.156,1.815,1.29]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.222,1.568,1.49]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.268,1.592,1.4]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.222,1.568,1.49]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.268,1.592,1.4]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.2,.87,.81]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.232,.75,.83]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.278,.435,.74]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.288,.142,.87]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.292,.04,.965]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.192,.71,-.5]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.256,.425,-.32]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.27,.215,-.61]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.274,.04,-.475]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.21,.96,.69]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.34,1,.67]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.88,1.05,.46]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.56,1.11,.86]}),[{mid:[n*1.48,1.08,.16],tip:[n*1.4,.99,-.6]},{mid:[n*1.84,1.09,.22],tip:[n*2.04,1,-.56]},{mid:[n*2.18,1.11,.33],tip:[n*2.62,1.02,-.4]},{mid:[n*2.48,1.13,.48],tip:[n*3.14,1.05,-.14]},{mid:[n*2.78,1.15,.68],tip:[n*3.54,1.08,.22]},{mid:[n*2.94,1.17,.86],tip:[n*3.9,1.12,.7]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.72,-.76],[0,.63,-1.08],[0,.5,-1.43],[0,.36,-1.8],[0,.24,-2.18],[0,.16,-2.56],[0,.12,-2.94],[0,.116,-3.3],[0,.116,-3.66],[0,.116,-4.06]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;vu.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.02,.116,-3.65]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.02,.116,-3.65]});for(const e of["L","R"]){const n=e==="L"?1:-1;_u.forEach((s,o)=>{i.push({name:`tailFin_${e}_${o+1}`,parent:`tailFinHinge_${e}`,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i}function B_(){const i=k_(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new ml;c.name=l.name;const h=new T(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new ga(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}const Je={neckArch:.24,neckYaw:-.1,headPitch:-.02,headYaw:-.18,headRoll:.16,earPerk:.82,earAsymmetry:.1,cheekNubFlare:.52,eyeYaw:-.08,eyePitch:.04,pupilDilation:.84,blink:0,squint:.08,jawOpen:0,teethExtension:0,tongueExtend:.1,tongueCurl:.05,wingUnfurl:.36,wingFlap:.06,wingSweep:-.08,wingCamber:.28,wingWristFold:0,wingTipLag:0,coyWingVeil:0,pelvicFinFlare:.88,dorsalSailFlex:.24,spineArch:.12,spineTwist:-.04,forelegStance:.14,hindlegStance:.08,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:-.26,tailPitch:.24,tailCurl:-.24,tailWaveAmp:0,tailWavePhase:0,rightHeartFinFlare:.18,leftHeartFinFlare:.18,syncHeartTailFlukes:!0,subtleBreathing:!0,iridescentShimmer:.78,pastelTint:.78,radiantGlow:.34,biolumGlow:0,plasmaGlow:.04,thermalCloak:0},z_=[{id:"serene-mate",label:"Serene Mate",subtitle:"Sweet Gaze & Heart Tail",patch:{...Je}},{id:"curious-cat",label:"Curious Tilt",subtitle:"Adorable Head-Roll & Big Eyes",patch:{...Je,headRoll:.68,headPitch:.1,headYaw:-.06,earPerk:.98,earAsymmetry:.42,pupilDilation:.96,squint:0,jawOpen:.06,teethExtension:0,coyWingVeil:0,thermalCloak:0,plasmaGlow:.08}},{id:"happy-purr",label:"Happy Purr",subtitle:"Blissful Feline Smile",patch:{...Je,neckArch:.42,neckYaw:-.22,headYaw:-.28,headPitch:-.1,headRoll:.28,earPerk:.66,squint:.68,blink:.22,pupilDilation:.9,jawOpen:.14,teethExtension:0,tongueExtend:.35,tailYaw:-.45,tailCurl:-.48,rightHeartFinFlare:.04,leftHeartFinFlare:.04,coyWingVeil:0,thermalCloak:0,iridescentShimmer:.95}},{id:"coy-wing-veil",label:"Coy Wing Peek",subtitle:"Shy Wing-Curtain Pose",patch:{...Je,headYaw:-.26,headPitch:-.12,headRoll:.34,eyeYaw:.22,eyePitch:.14,pupilDilation:.88,earPerk:.58,coyWingVeil:.92,wingUnfurl:.52,thermalCloak:0}},{id:"hidden-world-biolum",label:"Hidden World Glow",subtitle:"Neon Rose & Cyan Filigree",patch:{...Je,wingUnfurl:.78,wingFlap:.22,neckArch:.34,headRoll:.22,pupilDilation:.94,iridescentShimmer:.96,radiantGlow:.64,biolumGlow:.96,plasmaGlow:.42,thermalCloak:0}},{id:"mirror-cloak",label:"Mirror Cloak",subtitle:"Plasma Silicate Stealth",patch:{...Je,wingUnfurl:.72,wingFlap:.24,neckArch:.3,headPitch:.12,pupilDilation:.62,coyWingVeil:0,plasmaGlow:.78,iridescentShimmer:1,thermalCloak:.86}},{id:"strike-hiss",label:"Strike Hiss",subtitle:"Fangs & Orchid Plasma",patch:{...Je,forelegStance:-.55,spineArch:.42,neckArch:-.18,headPitch:-.14,headRoll:-.08,earPerk:.06,squint:.48,pupilDilation:.06,jawOpen:.76,teethExtension:1,tongueExtend:.48,tongueCurl:.45,wingUnfurl:.84,wingFlap:.38,wingSweep:.32,coyWingVeil:0,dorsalSailFlex:1,plasmaGlow:.92,thermalCloak:0}}];function fs(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const O_=new T(-.19,.98,.06).normalize(),H_=new T(.19,.98,.06).normalize(),Mu=new T().crossVectors(O_,uo).normalize(),V_=new T().crossVectors(uo,Mu).normalize(),wu=new T().crossVectors(H_,po).normalize(),W_=new T().crossVectors(po,wu).normalize();class G_{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new yn;tmpQuat=new je;tmpQuatB=new je;tmpVecA=new T;tmpVecB=new T;tmpVecC=new T;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...Je,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,Je),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.syncHeartTailFlukes&&(t.rightHeartFinFlare!==void 0?this.state.leftHeartFinFlare=t.rightHeartFinFlare:t.leftHeartFinFlare!==void 0?this.state.rightHeartFinFlare=t.leftHeartFinFlare:t.syncHeartTailFlukes===!0&&(this.state.leftHeartFinFlare=this.state.rightHeartFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingFelineIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0,felineHeadMicroRoll:0};const e=(t+2.15)%4.35;let n=0;e<.16?n=Math.sin(e/.16*Math.PI):e>.25&&e<.4&&Math.floor((t+2.15)/4.35)%3===1&&(n=Math.sin((e-.25)/.15*Math.PI));const s=(t+.8)%5.6,o=s<.2?Math.sin(s/.2*Math.PI)*.095:0,a=(t+3.2)%6.8,r=a<.18?-Math.sin(a/.18*Math.PI)*.085:0,l=Math.sin(t*.68+1.4)*.03+Math.sin(t*1.85)*.012,c=Math.cos(t*.54+2.1)*.022,h=Math.sin(t*1.25+.8)*.028,u=Math.sin(t*.62+.7)*.026;return{autoBlink:n,earTwitchL:o,earTwitchR:r,gazeMicroX:l,gazeMicroY:c,pupilPulse:h,felineHeadMicroRoll:u}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new ee().copy(this.asset.rootGroup.matrixWorld).invert(),g=new ee().multiplyMatrices(f,c.parent.matrixWorld),v=new T().setFromMatrixPosition(new ee().multiplyMatrices(g,new ee().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),M=l.bindWorldPositions.get(n),w=new T().subVectors(p,m),_=new T().subVectors(M,p),A=w.length(),b=_.length(),S=M.clone();a&&(S.add(a),S.y=Math.max(M.y,S.y));const E=new T().subVectors(S,v),y=E.length(),x=(A+b)*.968,P=Math.abs(A-b)+.08,C=$.clamp(y,P,x),R=E.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),D=$.clamp((A*A+C*C-b*b)/(2*A*C),-1,1),k=Math.sqrt(Math.max(0,1-D*D)),B=v.clone().addScaledVector(R,A*D).addScaledVector(L,A*k),F=v.clone().addScaledVector(R,C),H=new T().subVectors(B,v).normalize(),V=new T().subVectors(F,B).normalize(),Y=new je().setFromUnitVectors(w.clone().normalize(),H),Z=new je().setFromUnitVectors(_.clone().normalize(),V),X=new je().setFromRotationMatrix(g);c.quaternion.copy(X).invert().multiply(Y),h.quaternion.copy(Y).invert().multiply(Z),u.quaternion.copy(Z).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;const o=64,a=10.8,r=$.clamp(-n*.06,-.3,.3),l=$.clamp(-s*.06,-.3,.3);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=$.clamp(e.airborneFactor,0,1),s=this.sampleLivingFelineIdleMicros(t),o=e.subtleBreathing&&e.squint>.35?Math.sin(t*24)*.08*e.squint:0,a=e.subtleBreathing?Math.sin(t*1.68+.9)*.8+Math.sin(t*3.36+.9)*.2+o:0,r=e.subtleBreathing?Math.sin(t*1.28+1.2)*.026:0,l=fs(.02,.55,Math.abs(e.legFlightTuck))*(1-n),c=Math.max(n,l),h=1-c,u=e.forelegStance>=0?e.forelegStance*.05:e.forelegStance*.255,d=e.hindlegStance>=0?e.hindlegStance*.044:e.hindlegStance*.23,f=.52*u+.48*d,g=$.clamp((d-u)*.44,-.22,.24),v=$.clamp(e.limbStride,-1,1)*.045*h,m=l*.34;this.setBonePose("root",g*h,v,0,"XYZ",0,f*h+m+a*.004,0);const p=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+p,-e.spineTwist*.05-v*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+a*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+a*.008,e.spineTwist*.07,0),this.setBonePose("chest",-g*.32*h+a*.01-p*.6,e.spineTwist*.07+v*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const M=$.clamp(e.limbStride,-1,1),w=Math.max(0,-e.forelegStance),_=Math.max(0,-e.hindlegStance);for(const G of["L","R"]){const nt=G==="L"?1:-1,_t=this.asset.rig.boneMap.get(`scapula_${G}`);if(this.setBonePose(`scapula_${G}`,0,0,0),_t.updateMatrixWorld(!0),c<.999){const J=nt*M*.21,U=-nt*M*.2,rt=Math.max(0,nt*M)*Math.sin(Math.abs(M)*Math.PI)*.038,dt=Math.max(0,-nt*M)*Math.sin(Math.abs(M)*Math.PI)*.034,wt=new T(nt*w*.05,rt,J+w*.04),vt=new T(nt*_*.045,dt,U-_*.036);this.asset.rootGroup.updateMatrixWorld(!1);const Lt=new ee().copy(this.asset.rootGroup.matrixWorld).invert(),yt=this.asset.rig.boneMap.get(`shoulder_${G}`);yt.position.copy(this.restPos.get(`shoulder_${G}`)),yt.updateMatrixWorld(!0);const z=this.tmpVecC.setFromMatrixPosition(yt.matrixWorld).applyMatrix4(Lt),I=this.asset.rig.bindWorldPositions.get(`wrist_${G}`).clone().add(wt),et=z.distanceTo(I)-.615;et>0&&(this.setBonePose(`scapula_${G}`,0,0,0,"XYZ",0,-et*1.08*h,0),_t.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${G}`,`elbow_${G}`,`wrist_${G}`,`forepaw_${G}`,this.tmpVecA.set(nt*(.2+.16*w),-.08+.18*w,-1).normalize(),wt,rt*2.2),this.solvePlantedLimbIK(`hip_${G}`,`knee_${G}`,`ankle_${G}`,`hindpaw_${G}`,this.tmpVecB.set(nt*(.2+.14*_),.14+.16*_,1).normalize(),vt,dt*2)}if(c>.001){const J=$.clamp(e.legFlightTuck,-1,1),U=e.wingFlap*.075*c,rt=Math.sin(t*2.15+(G==="L"?0:1.15))*.048*c,dt=Math.cos(t*1.65+(G==="L"?.6:2.1))*.042*c,wt=(J>=0?.88*J:-.44*-J)+U*.65+rt*.5,vt=J>=0?-nt*.06*J:0,Lt=(J>=0?nt*.09*J:nt*.05*-J)+nt*dt*.35,yt=(J>=0?.36*J:.28*-J)-U*.55+dt*.65,z=(J>=0?.42*J:.2*-J)+rt*.7,I=(J>=0?.38*J:-.1*-J)+dt*.55,et=(J>=0?1.18*J:-.48*-J)+U*.55+dt*.55,ft=(J>=0?-nt*.05*J:0)+nt*rt*.25,gt=(J>=0?nt*.07*J:nt*.05*-J)+nt*rt*.3,mt=(J>=0?-.68*J:.34*-J)-U*.5-rt*.65,Et=(J>=0?.82*J:-.16*-J)+U*.45+dt*.75,pt=(J>=0?.64*J:.16*-J)+rt*.6,Ct=(Wt,xt,Rt,qt)=>{const jt=this.asset.rig.boneMap.get(Wt);this.tmpEuler.set(xt,Rt,qt,"XYZ"),this.tmpQuat.copy(this.restQuat.get(Wt)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),c>=.999?(jt.position.copy(this.restPos.get(Wt)),jt.quaternion.copy(this.tmpQuat)):jt.quaternion.slerp(this.tmpQuat,c)};Ct(`shoulder_${G}`,wt,vt,Lt),Ct(`elbow_${G}`,yt,0,0),Ct(`wrist_${G}`,z,0,0),Ct(`forepaw_${G}`,I,0,0),Ct(`hip_${G}`,et,ft,gt),Ct(`knee_${G}`,mt,0,0),Ct(`ankle_${G}`,Et,0,0),Ct(`hindpaw_${G}`,pt,0,0)}}const A=fs(.32,.85,e.jawOpen),b=e.headRoll+s.felineHeadMicroRoll*(1-n),S=-e.neckArch*.12-a*.009-A*.032,E=e.neckYaw*.14;this.setBonePose("neck_1",S+e.headPitch*.04,E+e.headYaw*.05,b*.05,"YXZ"),this.setBonePose("neck_2",S+e.headPitch*.07,E+e.headYaw*.09,b*.08,"YXZ"),this.setBonePose("neck_3",S*.9+e.headPitch*.11,E+e.headYaw*.14,b*.12,"YXZ"),this.setBonePose("neck_4",S*.8+e.headPitch*.15,E*.85+e.headYaw*.19,b*.16,"YXZ"),this.setBonePose("head",e.headPitch*.36+a*.01-A*.045,e.headYaw*.46,b*.4,"YXZ");const y=$.clamp(e.earPerk-A*.32,0,1),x=(y-.5)*.68,P=b*.2;for(const G of["L","R"]){const nt=G==="L"?1:-1,_t=G==="L"?s.earTwitchL:s.earTwitchR,J=nt*(e.earAsymmetry*.28+P)+_t,U=x+J+this.earLagPitch*.65,rt=(1-y)*.32-nt*this.earLagYaw*.5;this.setBonePose(`ear_${G}_1`,U*.6,-nt*rt,nt*U*.22,"YXZ"),this.setBonePose(`ear_${G}_2`,U*.34+this.earLagPitch*.32,-nt*rt*.32,0,"YXZ"),this.setBonePose(`ear_${G}_3`,U*.22+this.earLagPitch*.22,0,0,"YXZ");const dt=($.clamp(e.cheekNubFlare+A*.2,0,1)-.5)*.4;this.setBonePose(`cheekUpper_${G}_1`,dt*.28,-nt*(dt*.5+this.earLagYaw*.22),0)}const C=$.clamp(e.eyeYaw+s.gazeMicroX,-1,1),R=$.clamp(e.eyePitch+s.gazeMicroY,-1,1),L=Math.max(e.blink,s.autoBlink*(1-e.blink)),D=$.clamp(e.squint+A*.24,0,1);for(const G of["L","R"]){const nt=G==="L"?Mu:wu,_t=G==="L"?V_:W_;this.tmpQuat.setFromAxisAngle(_t,C*.34),this.tmpQuatB.setFromAxisAngle(nt,-R*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${G}`,this.tmpQuat);const J=R>0?-R*.14:-R*.22,U=R>0?R*.12:R*.08,rt=$.clamp(Math.max(L,D*.54)+J*(1-L),-.14,1),dt=$.clamp(Math.max(L,D*.62)+U*(1-L),-.1,1);this.tmpQuat.setFromAxisAngle(nt,rt*.72),this.setBoneAxisQuat(`eyelidUpper_${G}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(nt,-dt*.64),this.setBoneAxisQuat(`eyelidLower_${G}`,this.tmpQuat)}const k=$.clamp(e.pupilDilation+s.pupilPulse-A*.28,0,1),B=this.asset.materials;B.eyeMaterials.uniforms.uPupilDilation.value=k,B.eyeMaterials.uniforms.uBiolumGlow.value=e.biolumGlow,B.eyeMaterials.uniforms.uPlasmaGlow.value=e.plasmaGlow,B.eyeMaterials.uniforms.uThermalCloak.value=e.thermalCloak,B.uniforms.uTime.value=t,B.uniforms.uIridescentShimmer.value=e.iridescentShimmer,B.uniforms.uPastelTint.value=e.pastelTint,B.uniforms.uRadiantGlow.value=e.radiantGlow,B.uniforms.uBiolumGlow.value=e.biolumGlow,B.uniforms.uPlasmaGlow.value=e.plasmaGlow,B.uniforms.uThermalCloak.value=e.thermalCloak;const F=B.syncCloakTransparency(e.thermalCloak);for(const G of this.asset.hullDepthMeshes)G.visible=F;this.setBonePose("jaw",e.jawOpen*.64,0,0);const H=.28+.72*fs(0,.14,e.jawOpen),V=1-e.teethExtension*H;this.setBonePose("teethUpper",0,0,0,"XYZ",0,V*.022,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-V*.02,0);const Y=fs(.06,.48,e.jawOpen),Z=e.tongueExtend*.039*Y;if(e.tongueCurl>=0){const G=-e.tongueCurl*(.016+.19*Y);this.setBonePose("tongue_1",G*.35,0,0,"XYZ",0,0,Z),this.setBonePose("tongue_2",G*.65,0,0),this.setBonePose("tongue_3",G*.95,0,0),this.setBonePose("tongue_4",G*1.15,0,0)}else{const G=Y*fs(.2,.95,e.tongueExtend),nt=-e.tongueCurl*G;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,Z),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",nt*.12,0,0),this.setBonePose("tongue_4",nt*.18,0,0)}const X=$.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),W=$.lerp(.11,.74,c);for(const G of["L","R"]){const nt=G==="L"?1:-1,_t=G==="R"?e.coyWingVeil*h:0,J=e.wingFlap*(.25+.75*e.wingUnfurl),U=nt*(J>=0?J*.74:J*W),rt=J<0?J*$.lerp(.04,.26,c)*e.wingUnfurl:0,dt=nt*(e.wingSweep*.44-_t*.68),wt=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${G}`,.05*X+_t*.08,nt*.12*X,U*.18,"YXZ"),this.setBonePose(`wingShoulder_${G}`,e.wingCamber*.09+_t*.18,nt*.82*X*(1-_t*.65)+dt,U-nt*.22*X+nt*_t*.32,"YXZ"),this.setBonePose(`wingElbow_${G}`,_t*.12,-nt*(1.42*X*(1-_t*.58)+wt*.45-_t*.42),nt*.86*X*(1-_t*.45)+U*.22+nt*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${G}`,-.35*X-e.wingCamber*.18-_t*.28,nt*(1.32*X*(1-_t*.6)+wt*.55-_t*.48)+dt*.35,nt*.12*X+nt*rt*.3+nt*e.wingTipLag*.26,"YXZ");for(let Lt=1;Lt<=6;Lt++){const yt=(Lt-1)/5,z=nt*(-.38+yt*.58)*X*(1-_t*.6),I=-e.wingCamber*(.14+.18*(1-yt))-.1*X-_t*.24,et=e.wingTipLag*(.18+.26*yt),ft=J>=0?-J*.22:-J*$.lerp(.06*Math.pow(Math.max(0,(yt-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${G}_${Lt}_a`,I,z,nt*(ft*.4+et*.45),"YXZ"),this.setBonePose(`wingFinger_${G}_${Lt}_b`,I*.5,z*.25,nt*(ft*.7+et*.75),"YXZ")}const vt=1-e.pelvicFinFlare;for(let Lt=1;Lt<=3;Lt++)this.setBonePose(`pelvicFin_${G}_${Lt}`,0,0,-nt*vt*1.18,"XYZ")}for(const G of this.asset.dorsalSailMeshes)G.morphTargetInfluences&&G.morphTargetInfluences.length>0&&(G.morphTargetInfluences[0]=e.dorsalSailFlex);const O=e.syncHeartTailFlukes?e.rightHeartFinFlare:e.leftHeartFinFlare,st=Math.min(e.rightHeartFinFlare,O),at=st<0?Math.sin(Math.abs(st)*1.38)*.48:.02;this.asset.rootGroup.updateMatrixWorld(!1);for(let G=1;G<=10;G++){const nt=G/10,_t=G>=9,J=_t?0:e.tailYaw*.14+e.tailCurl*.19*Math.pow(nt,1.4)+r*nt,U=_t?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-G*.48)*.085*(.4+.6*nt);let rt=_t?0:e.tailPitch*.088*(.45+nt)+U;if(!_t&&n<.85&&G>=2&&G<=8){const dt=Math.max(0,(at-.05)*.135)*(1-n);rt<dt&&(rt=$.lerp(rt,dt,fs(1,5,G)))}if(this.setBonePose(`tail_${G}`,rt,J,0,"YXZ"),n<.85){const dt=this.asset.rig.boneMap.get(`tail_${G}`);dt.parent.updateMatrixWorld(!0),dt.updateMatrixWorld(!0);const wt=this.tmpVecC.setFromMatrixPosition(dt.matrixWorld),Lt=Ss(wt.x,wt.z)+(G>=8?.05+at:.058);if(wt.y<Lt&&G>1){const yt=dt.parent,z=dt.position.length(),I=Math.min(.45,(Lt-wt.y)/Math.max(.14,z))*(1-n);this.tmpEuler.set(I,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),yt.quaternion.multiply(this.tmpQuat),yt.updateMatrixWorld(!0)}}}const j=-e.rightHeartFinFlare*1.38,K=O*1.38;this.setBonePose("tailFinHinge_R",0,0,j,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,K,"XYZ");for(let G=1;G<=5;G++)this.setBonePose(`tailFin_R_${G}`,0,0,0),this.setBonePose(`tailFin_L_${G}`,0,0,0);this.asset.rig.rootBone.updateMatrixWorld(!0)}}function wi(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function ze(i,t,e,n,s){return i<=t||i>=s?0:i<e?wi(t,e,i):i>n?1-wi(n,s,i):1}function Qs(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function X_(i,t,e){return i+Qs(t-i)*e}function Y_(i,t,e){const s=i/Math.max(1,64);let o=e;for(let a=0;a<64;a++){const r=(a+.5)*s,l=wi(.4,2.4,r),c=ze(r,7.6,8.8,15.2,16.5),h=1-.18*wi(18.5,22.5,r),u=$.lerp(4.45,5.18,l)*h,d=$.lerp(u,1.65,c)*t;o+=d*s}return o}class Gi{static DURATION_SEC=25;isPlaying=!1;isPaused=!1;loop=!1;followCamera=!0;subjectMode="duet";toothlessAsset;toothlessController;lightFuryAsset;lightFuryController;toothlessSpline;lightFurySpline;flightTime=0;tmpPos=new T;tmpPosAhead=new T;tmpPosBehind=new T;tmpPosLook=new T;tmpVel=new T;tmpEuler=new yn;tmpQuat=new je;prevWorldAnchor=new T(0,1.15,.35);constructor(t,e,n,s){this.toothlessAsset=t,this.toothlessController=e,this.lightFuryAsset=n,this.lightFuryController=s;const o=zn.position.clone(),a=On.position.clone();this.toothlessSpline=new Fn([o.clone(),new T(6.8,3.8,8.2),new T(16.4,11.4,19.5),new T(24.5,17.6,33.5),new T(12.5,19.6,44.5),new T(-6.5,17.2,39.5),new T(-19.5,6.8,29),new T(-22.5,-3.2,18.5),new T(-17.5,10.6,3.5),new T(-2.5,9.8,-5.8),new T(3.85,3.15,-2.15),o.clone()],!1,"centripetal",.5),this.lightFurySpline=new Fn([a.clone(),new T(-3.2,4.1,7.8),new T(6.2,12,20.4),new T(14.2,18.3,34.8),new T(2.2,20.2,46),new T(-16.8,17.8,41),new T(-29.8,7.4,30.2),new T(-32.8,-2.8,19.2),new T(-27.2,11.2,4.2),new T(-12.2,10.2,-5.8),new T(-5.15,3.05,-2.35),a.clone()],!1,"centripetal",.5)}setSubjectMode(t){this.subjectMode!==t&&(this.subjectMode=t,this.isPlaying&&(this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())))}resetDragonToPerch(t){t==="toothless"?(this.toothlessAsset.rootGroup.position.copy(zn.position),this.toothlessAsset.rootGroup.rotation.set(0,zn.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0),this.toothlessController.resetToHeroPose()):this.lightFuryAsset&&this.lightFuryController&&(this.lightFuryAsset.rootGroup.position.copy(On.position),this.lightFuryAsset.rootGroup.rotation.set(0,On.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0),this.lightFuryController.resetToHeroPose())}computeDesiredWorldFocus(){const t=this.toothlessAsset.rig.boneMap.get("chest"),e=new T().setFromMatrixPosition(t.matrixWorld);if(!this.lightFuryAsset)return e;const n=this.lightFuryAsset.rig.boneMap.get("chest"),s=new T().setFromMatrixPosition(n.matrixWorld);return this.subjectMode==="toothless"?e:this.subjectMode==="light-fury"?s:e.add(s).multiplyScalar(.5)}startFromBeginning(){this.flightTime=0,this.isPlaying=!0,this.isPaused=!1,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(0),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}togglePlayPause(){if(!this.isPlaying){this.startFromBeginning();return}this.isPaused=!this.isPaused}stopAndResetToPerch(){this.isPlaying=!1,this.isPaused=!1,this.flightTime=0,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.prevWorldAnchor.set(0,1.15,.35)}scrubToProgress(t){const e=$.clamp(t,0,1);this.isPlaying||(this.isPlaying=!0,this.isPaused=!0),this.flightTime=e*Gi.DURATION_SEC,this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}getPhaseInfo(){const t=this.flightTime,e=this.subjectMode==="duet";let n=e?"Twin Perch Ready":"Perched Ready";return this.isPlaying&&(t<2.8?n=e?"1/6 · Twin Courtship Cliff Leap":"1/6 · Launch Crouch & Cliff Leap":t<7.8?n="2/6 · Majestic Climbing Wingbeats":t<13?n=e?"3/6 · Wingtip Courtship Sky Soar":"3/6 · High-Altitude Sky Soar":t<17.4?n=e?"4/6 · Mirror-Cloak Ocean Skim":"4/6 · Peregrine Ocean Skim":t<21.8?n="5/6 · Cushioned Air-Brake Hover":n=e?"6/6 · Twin Touchdown & Settle":"6/6 · Four-Paw Landing & Settle"),{isPlaying:this.isPlaying,isPaused:this.isPaused,loop:this.loop,followCamera:this.followCamera,subjectMode:this.subjectMode,progress:$.clamp(t/Gi.DURATION_SEC,0,1),elapsedSec:t,durationSec:Gi.DURATION_SEC,phaseLabel:n}}update(t,e,n){if(!this.isPlaying)return this.prevWorldAnchor.set(0,1.15,.35),{worldFocus:this.prevWorldAnchor,isAirborne:!1};if(!this.isPaused&&(this.flightTime+=t,this.flightTime>=Gi.DURATION_SEC))if(this.loop)this.flightTime%=Gi.DURATION_SEC;else return this.stopAndResetToPerch(),{worldFocus:this.prevWorldAnchor,isAirborne:!1};this.applyAtTime(this.flightTime);const s=this.computeDesiredWorldFocus();if(this.followCamera){const r=s.clone().sub(this.prevWorldAnchor);n.add(r),e.position.add(r);const l=ze(this.flightTime,1.8,5.2,18.8,23.2),c=this.subjectMode==="duet"?9.4:4.95,h=this.subjectMode==="duet"?17.8:11.2,u=$.lerp(c,h,l),d=e.position.clone().sub(n),f=Math.max(.5,d.length()),g=$.lerp(f,u,1-Math.exp(-2.2*Math.max(.016,t)));d.setLength(g),e.position.copy(n).add(d);const v=vs(e.position.x,e.position.z),m=Math.max(-8.8,v+1.8);e.position.y<m&&(e.position.y=m),n.lerp(s,1-Math.exp(-7.5*Math.max(.016,t)))}this.prevWorldAnchor.copy(s);const o=this.toothlessController.state.airborneFactor,a=this.lightFuryController?.state.airborneFactor??0;return{worldFocus:s,isAirborne:Math.max(o,a)>.15}}computeKinematicsAlongSpline(t,e,n,s,o,a){let h=0;if(s<=2.05)h=0;else if(s>=21.85)h=1;else{const L=(s-2.05)/19.8,D=L*L*(3-2*L),k=Math.sin(L*Math.PI*2-1.2)*.024*Math.sin(L*Math.PI);h=$.clamp($.lerp(L,D,.38)+k,0,1)}const u=ze(s,2.05-.1,2.05+.72,21.85-.75,21.85+.08),d=ze(s,1.65,2.75,7.2,8.6),f=ze(s,7.8,9,12.2,13.4),g=ze(s,12.6,13.6,16.4,17.5),v=ze(s,15.8,16.8,18,19),m=ze(s,18,19.2,21.1,22.05),p=Y_(s,a,o),M=$.clamp(d*.94+v*.82+m*.88+(1-f)*(1-g)*.16,0,.96)*u,w=Math.sin(p),_=$.clamp(w+.14*Math.sin(p*2),-1,1),A=Math.cos(p),b=-A*.26*M,S=A*.056*M;let E=0,y=0,x=0,P=0;const C=e.clone(),R=new je().setFromEuler(new yn(0,n,0,"YXZ"));if(h>1e-4&&h<.9999){const D=Math.max(0,h-.008),k=Math.min(1,h+.008);t.getPointAt(h,this.tmpPos),t.getPointAt(D,this.tmpPosBehind),t.getPointAt(k,this.tmpPosAhead),this.tmpVel.subVectors(this.tmpPosAhead,this.tmpPosBehind).normalize();const B=Math.atan2(this.tmpVel.x,this.tmpVel.z),F=Math.max(0,h-.028),H=Math.min(1,h+.028),V=t.getTangentAt(F),Y=t.getTangentAt(H),Z=Math.atan2(V.x,V.z),X=Math.atan2(Y.x,Y.z);E=Qs(X-Z)/Math.max(.005,H-F);const W=Math.min(1,h+.048);t.getTangentAt(W,this.tmpPosLook);const O=Math.atan2(this.tmpPosLook.x,this.tmpPosLook.z);y=Qs(O-B),P=-Math.asin($.clamp(this.tmpVel.y,-.84,.84));const st=-.56*m,at=ze(h,.025,.11,.86,.98);x=$.clamp(-E*.24,-.74,.74)*at;const j=ze(h,0,.032,.962,1);C.lerpVectors(e,this.tmpPos,j),C.y+=b*at;const K=ze(h,.04,.09,.91,.96);if(K>.001){const J=vs(C.x,C.z),U=vs(C.x-3.6,C.z),rt=vs(C.x+3.6,C.z),dt=Math.max(J,U,rt),wt=Math.max(-7.2,dt+3.8*K);C.y<wt&&(C.y=wt)}const G=X_(n,B,j),nt=(P*.86+st+S)*j,_t=x*j;this.tmpEuler.set(nt,G,_t,"YXZ"),R.setFromEuler(this.tmpEuler)}return{u:h,airborneEnv:u,climbEnv:d,glideEnv:f,diveEnv:g,pulloutEnv:v,brakeEnv:m,flapPhase:p,activeFlapAmp:M,flapSin:_,flapCos:A,lookAheadTurnDiff:y,bankRoll:x,pathClimbPitch:P,outPos:C,outQuat:R}}applyToothlessFlightAtTime(t,e){const n=this.computeKinematicsAlongSpline(this.toothlessSpline,zn.position,zn.yaw,t,0,1);this.toothlessAsset.rootGroup.position.copy(n.outPos),this.toothlessAsset.rootGroup.quaternion.copy(n.outQuat),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const s=ze(t,.35,1.15,1.68,2.1),o=ze(t,1.82,2.05,2.35,2.85),a=ze(t,19.2,20.2,21.75,22.25),r=ze(t,21.75,22.2,22.85,23.9),l=ze(t,23.1,23.65,24.35,24.95),c=e?.34*n.glideEnv+.36*l:-.22*l,h=an.forelegStance*(1-s-r)-.88*s-.8*r+.18*l,u=an.hindlegStance*(1-s-r)-.84*s-.76*r+.12*l,d=$.clamp(.82*n.airborneEnv-1.55*o-1.58*a,-.84,.88),f=$.lerp(an.wingUnfurl+.34*s,1-.16*n.diveEnv,wi(.95,2.15,t)*(1-wi(22.1,24.1,t))),g=Math.max(0,n.flapCos)*.56*n.activeFlapAmp*(1-n.brakeEnv*.6),v=$.clamp(.68*s+n.flapSin*.92*n.activeFlapAmp+.14*n.glideEnv-.08*n.diveEnv,-1,1),m=-n.flapCos*.84*n.activeFlapAmp,p=$.clamp(an.wingSweep*(1-n.airborneEnv)-.8*n.diveEnv+.74*n.brakeEnv-.16*s,-1,1),M=Math.max(0,-n.flapSin)*n.activeFlapAmp,w=$.clamp(.28+.46*M+.54*n.pulloutEnv+.64*n.brakeEnv-.18*n.diveEnv,.08,1),_=$.clamp(.22*(1-n.airborneEnv)+.95*n.glideEnv+.85*Math.min(1,Math.abs(n.bankRoll)*1.8)+.9*n.brakeEnv,.15,1),A=.24*(1-n.airborneEnv)+.18*n.climbEnv+.06*n.glideEnv+.42*n.diveEnv-.32*n.brakeEnv,b=$.clamp(n.bankRoll*.38,-.32,.32),S={airborneFactor:n.airborneEnv,forelegStance:h,hindlegStance:u,limbStride:0,legFlightTuck:d,spineArch:.2*s-.16*o+.24*n.brakeEnv+.08*(1-n.airborneEnv),spineTwist:$.clamp(-n.bankRoll*.35,-1,1),wingUnfurl:f,wingFlap:v,wingWristFold:g,wingTipLag:m,wingSweep:p,wingCamber:w,pelvicFinFlare:$.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.35*n.diveEnv,.3,1),dorsalSpineSplit:_,autoSyncProstheticTail:Math.abs(b)<.02,leftProstheticFinFlare:$.clamp(A+b,-1,1),rightTailFinFlare:$.clamp(A-b,-1,1),tailYaw:$.clamp(an.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv+.28*l,-1,1),tailPitch:$.clamp(an.tailPitch*(1-n.airborneEnv)-.34*n.brakeEnv+.15*n.pulloutEnv+.22*r,-1,1),tailCurl:.16*(1-n.diveEnv)+n.lookAheadTurnDiff*.8,tailWaveAmp:n.activeFlapAmp*.78+n.glideEnv*.16,tailWavePhase:n.flapPhase,neckArch:.16+.24*n.brakeEnv-.2*n.diveEnv,neckYaw:n.lookAheadTurnDiff*.95*n.airborneEnv+c*.45,headYaw:$.clamp(an.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+c,-1,1),headPitch:$.clamp(an.headPitch*(1-n.airborneEnv)-.34*s+n.pathClimbPitch*-.24*n.airborneEnv+.48*n.brakeEnv+.16*r,-1,1),headRoll:$.clamp(an.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv-.22*l,-1,1),earPerk:$.clamp(.76+.2*s-.56*n.diveEnv-.2*n.climbEnv+.18*n.brakeEnv+.18*l,.12,1),earAsymmetry:n.bankRoll*.22+.12*l,cheekNubFlare:.5+.25*n.diveEnv,eyeYaw:$.clamp(n.lookAheadTurnDiff*1.7*n.airborneEnv+c*.55,-.85,.85),eyePitch:$.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:$.clamp(.76-.24*n.diveEnv+.16*l,.25,.96),squint:$.clamp(.36*n.diveEnv+.18*l,0,1),blink:ze(t,23.35,23.45,23.52,23.64),jawOpen:$.clamp(.2*o+.15*n.pulloutEnv+.26*l,0,1),teethExtension:0,tongueExtend:.4*l,tongueCurl:.2*l};Object.assign(this.toothlessController.state,S)}applyLightFuryFlightAtTime(t,e){if(!this.lightFuryAsset||!this.lightFuryController)return;const n=this.computeKinematicsAlongSpline(this.lightFurySpline,On.position,On.yaw,t,.95,1.03);this.lightFuryAsset.rootGroup.position.copy(n.outPos),this.lightFuryAsset.rootGroup.quaternion.copy(n.outQuat),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const s=ze(t,.32,1.12,1.65,2.08),o=ze(t,1.8,2.04,2.32,2.82),a=ze(t,19.2,20.2,21.75,22.25),r=ze(t,21.75,22.2,22.85,23.9),l=ze(t,23,23.6,24.4,24.96),c=ze(t,13.2,14.2,15.8,16.9),h=ze(t,8.2,9.4,12.2,13.4),u=ze(t,12.6,13.6,16,17.2),d=e?-.36*n.glideEnv-.34*l:-.18*l,f=Je.forelegStance*(1-s-r)-.86*s-.78*r+.2*l,g=Je.hindlegStance*(1-s-r)-.82*s-.74*r+.12*l,v=$.clamp(.82*n.airborneEnv-1.52*o-1.56*a,-.84,.88),m=$.lerp(Je.wingUnfurl+.34*s,1-.18*n.diveEnv,wi(.9,2.12,t)*(1-wi(22.1,24.1,t))),p=Math.max(0,n.flapCos)*.54*n.activeFlapAmp*(1-n.brakeEnv*.6),M=$.clamp(.66*s+n.flapSin*.9*n.activeFlapAmp+.16*n.glideEnv-.08*n.diveEnv,-1,1),w=-n.flapCos*.86*n.activeFlapAmp,_=$.clamp(Je.wingSweep*(1-n.airborneEnv)-.82*n.diveEnv+.74*n.brakeEnv-.15*s,-1,1),A=Math.max(0,-n.flapSin)*n.activeFlapAmp,b=$.clamp(.26+.44*A+.52*n.pulloutEnv+.62*n.brakeEnv-.16*n.diveEnv,.08,1),S=.18*(1-n.airborneEnv)+.12*n.climbEnv+.02*n.glideEnv+.38*n.diveEnv-.28*n.brakeEnv,E=$.clamp(n.bankRoll*.36,-.3,.3),y={airborneFactor:n.airborneEnv,forelegStance:f,hindlegStance:g,limbStride:0,legFlightTuck:v,coyWingVeil:0,spineArch:.22*s-.15*o+.24*n.brakeEnv+.12*(1-n.airborneEnv),spineTwist:$.clamp(-n.bankRoll*.36,-1,1),wingUnfurl:m,wingFlap:M,wingWristFold:p,wingTipLag:w,wingSweep:_,wingCamber:b,pelvicFinFlare:$.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.32*n.diveEnv,.32,1),dorsalSailFlex:$.clamp(.24*(1-n.airborneEnv)+.92*n.glideEnv+.85*n.brakeEnv+.65*Math.abs(n.bankRoll),.15,1),syncHeartTailFlukes:Math.abs(E)<.02,leftHeartFinFlare:$.clamp(S+E,-1,1),rightHeartFinFlare:$.clamp(S-E,-1,1),tailYaw:$.clamp(Je.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv-.36*l,-1,1),tailPitch:$.clamp(Je.tailPitch*(1-n.airborneEnv)-.32*n.brakeEnv+.16*n.pulloutEnv+.2*r,-1,1),tailCurl:-.24*(1-n.airborneEnv)+n.lookAheadTurnDiff*.8-.26*l,tailWaveAmp:n.activeFlapAmp*.76+n.glideEnv*.18,tailWavePhase:n.flapPhase,neckArch:.24+.24*n.brakeEnv-.2*n.diveEnv+.14*l,neckYaw:n.lookAheadTurnDiff*.92*n.airborneEnv+d*.48,headYaw:$.clamp(Je.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+d,-1,1),headPitch:$.clamp(Je.headPitch*(1-n.airborneEnv)-.32*s+n.pathClimbPitch*-.24*n.airborneEnv+.46*n.brakeEnv+.14*r,-1,1),headRoll:$.clamp(Je.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv+.28*l,-1,1),earPerk:$.clamp(.82+.16*s-.56*n.diveEnv-.2*n.climbEnv+.16*n.brakeEnv,.14,1),earAsymmetry:n.bankRoll*.24+.18*l,cheekNubFlare:.52+.22*n.diveEnv,eyeYaw:$.clamp(n.lookAheadTurnDiff*1.65*n.airborneEnv+d*.55,-.85,.85),eyePitch:$.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:$.clamp(.84-.2*n.diveEnv+.1*l,.3,.96),squint:$.clamp(.3*n.diveEnv+.56*l,0,1),blink:ze(t,23.18,23.28,23.36,23.48),jawOpen:$.clamp(.14*o+.12*n.pulloutEnv+.14*l,0,1),teethExtension:0,tongueExtend:.28*l,tongueCurl:.12*l,iridescentShimmer:$.clamp(.78+.22*(n.glideEnv+c),0,1),radiantGlow:$.clamp(.34+.36*(n.glideEnv+c),0,1),biolumGlow:$.clamp(.58*h,0,1),plasmaGlow:$.clamp(.04+.78*u,0,1),thermalCloak:$.clamp(.78*c,0,1)};Object.assign(this.lightFuryController.state,y)}applyPerchedSpectatorGaze(t,e){if(t==="toothless"){this.toothlessAsset.rootGroup.position.copy(zn.position),this.toothlessAsset.rootGroup.rotation.set(0,zn.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(zn.position);n.y-=1.5;const s=Math.atan2(n.x,n.z),o=Qs(s-zn.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.toothlessController.state,{...an,neckYaw:$.clamp(o*.55,-.85,.85),headYaw:$.clamp(o*.85,-.95,.95),headPitch:$.clamp(-r*.95,-.85,.75),headRoll:$.clamp(-o*.18,-.45,.45),eyeYaw:$.clamp(o*.45,-.75,.75),eyePitch:$.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.88})}else if(this.lightFuryAsset&&this.lightFuryController){this.lightFuryAsset.rootGroup.position.copy(On.position),this.lightFuryAsset.rootGroup.rotation.set(0,On.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(On.position);n.y-=1.48;const s=Math.atan2(n.x,n.z),o=Qs(s-On.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.lightFuryController.state,{...Je,neckYaw:$.clamp(o*.55,-.85,.85),headYaw:$.clamp(o*.85,-.95,.95),headPitch:$.clamp(-r*.95,-.85,.75),headRoll:$.clamp(.18-o*.18,-.5,.55),eyeYaw:$.clamp(o*.45,-.75,.75),eyePitch:$.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.9})}}applyAtTime(t){if(this.subjectMode==="duet")this.applyToothlessFlightAtTime(t,!0),this.applyLightFuryFlightAtTime(t,!0);else if(this.subjectMode==="toothless"){this.applyToothlessFlightAtTime(t,!1);const e=this.toothlessAsset.rig.boneMap.get("chest"),n=new T().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("light-fury",n)}else if(this.applyLightFuryFlightAtTime(t,!1),this.lightFuryAsset){const e=this.lightFuryAsset.rig.boneMap.get("chest"),n=new T().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("toothless",n)}}}function $_(i){return i-Math.floor(i)}function th(i,t){return $_(Math.sin(i*127.1+t*311.7)*43758.5453123)}let Xo=null;function q_(i=512){if(Xo)return Xo;const t=new Float32Array(i*i),e=76;for(let f=0;f<i;f++){const g=f/i*e,v=Math.floor(g),m=g-v;for(let p=0;p<i;p++){const M=p/i*e,w=Math.floor(M),_=M-w;let A=10;for(let S=-1;S<=1;S++)for(let E=-1;E<=1;E++){const y=((w+E)%e+e)%e,x=((v+S)%e+e)%e,P=E+.5+(th(y,x)-.5)*.68-_,C=S+.5+(th(x+19,y+7)-.5)*.68-m,R=Math.sqrt(P*P+C*C);R<A&&(A=R)}const b=Math.max(0,1-Math.pow(A*1.15,2.2));t[f*i+p]=b}}const n=document.createElement("canvas"),s=document.createElement("canvas"),o=document.createElement("canvas");for(const f of[n,s,o])f.width=i,f.height=i;const a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(i,i),h=r.createImageData(i,i),u=l.createImageData(i,i);for(let f=0;f<i;f++){const g=(f-1+i)%i,v=(f+1)%i;for(let m=0;m<i;m++){const p=(m-1+i)%i,M=(m+1)%i,w=f*i+m,_=w*4,A=t[w],b=(t[f*i+M]-t[f*i+p])*.24,S=(t[v*i+m]-t[g*i+m])*.24,E=1/Math.sqrt(b*b+S*S+1);h.data[_]=Math.round((-b*E*.5+.5)*255),h.data[_+1]=Math.round((-S*E*.5+.5)*255),h.data[_+2]=Math.round((E*.5+.5)*255),h.data[_+3]=255;const y=249+A*5;c.data[_]=Math.min(255,Math.round(y+.8)),c.data[_+1]=Math.round(y),c.data[_+2]=Math.min(255,Math.round(y+.6)),c.data[_+3]=255;const x=Math.round((.45-A*.07)*255);u.data[_]=x,u.data[_+1]=x,u.data[_+2]=x,u.data[_+3]=255}}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0);const d=(f,g)=>(f.wrapS=qn,f.wrapT=qn,f.anisotropy=8,f.colorSpace=g?rn:In,f.needsUpdate=!0,f);return Xo={albedoMap:d(new gn(n),!0),normalMap:d(new gn(s),!1),roughnessMap:d(new gn(o),!1)},Xo}let zi=null;function j_(i=1024){if(zi)return zi;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=14,n.data[u+1]=24,n.data[u+2]=42,n.data[u+3]=255;continue}const d=Math.sin(h*64+Math.sin(c*12)*.65),f=Math.sin(h*138-Math.cos(c*18)*.85),g=Math.sin(h*250+c*22),v=Math.sin(h*21+.9)*Math.cos(c*14-h*4),m=d*.42+f*.33+g*.15+v*.24,p=Math.exp(-Math.pow((c-.36)/.13,2)),M=Math.max(0,Math.min(1,(.95-c)/.17)),w=Math.max(0,Math.min(1,1-c*1.06)),_=.86+.28*m;let A=(32+128*w+58*p)*_*M,b=(118+114*w+36*p)*_*M,S=(205+48*w+20*p)*_*M;if(v<-.58&&c>.25&&c<.78){const E=Math.min(1,(-v-.58)*2.1);A*=1-.38*E,b*=1-.28*E,S*=1-.16*E}n.data[u]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(b))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(S))),n.data[u+3]=255}}return e.putImageData(n,0,0),zi=new gn(t),zi.colorSpace=rn,zi.anisotropy=8,zi.needsUpdate=!0,zi}function Z_(){const i=j_(1024),t={uPupilDilation:{value:.78},uLightDir:{value:new T(.45,.65,.6).normalize()},uBiolumGlow:{value:0},uPlasmaGlow:{value:0},uThermalCloak:{value:0}},e=new bi({name:"LightFury_SkyBlueIris_PBR",map:i,roughness:.48,metalness:0,envMapIntensity:.78});e.onBeforeCompile=s=>{Object.assign(s.uniforms,t),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.36 + uPlasmaGlow * 0.85 + uBiolumGlow * 0.72) * eRadial * (1.0 - smoothstep(0.0, 0.95, uThermalCloak) * 0.88);`)};const n=new _n({name:"LightFury_Cornea_WetCoat",color:new Dt(16777215),transparent:!0,opacity:.15,roughness:.012,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.01,envMapIntensity:2.8,depthWrite:!1});return{irisMaterial:e,corneaMaterial:n,uniforms:t}}function eh(i,t,e){i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        roughnessFactor = mix(roughnessFactor * 0.86, 0.022, uThermalCloak * 0.95);
        roughnessFactor = clamp(roughnessFactor, 0.02, 0.65);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.94, uThermalCloak * 0.92);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float pStripe = clamp(vAnatomyData.y, 0.0, 1.0);
        float pBlue = clamp(vAnatomyData.z, 0.0, 1.0);
        float pZone = clamp(vAnatomyData.w, 0.0, 1.0);
        vec3 viewW = normalize(cameraPosition - vWorldPositionCustom);
        vec3 sunN = normalize(uSunDir);

        // 1. Pinpoint Stardust Crystal Glimmer & Subtle Pearlescent Sheen (movie stills refs 13 & 16!)
        if (uIridescentShimmer > 0.001) {
          // Tier A: Tiny, crisp pinpoint diamond stardust specks (twinkling gently as view/breath shifts!)
          vec3 fineCell = floor(vObjPos * 285.0);
          vec3 randDirA = normalize(vec3(
            lfHash31(fineCell) - 0.5,
            lfHash31(fineCell + 19.7) - 0.5,
            lfHash31(fineCell + 47.3) - 0.5
          ));
          vec3 halfV = normalize(viewW + sunN);
          float twinkle = 0.78 + 0.22 * sin(uTime * 2.4 + lfHash31(fineCell + 7.7) * 6.283);
          float pinpoint = pow(clamp(dot(normalize(normal + randDirA * 0.48), halfV), 0.0, 1.0), 88.0);
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
        }`)}}function K_(){const i=q_(512),t=Z_(),e={uTime:{value:0},uIridescentShimmer:{value:.76},uPastelTint:{value:.78},uRadiantGlow:{value:.34},uBiolumGlow:{value:0},uPlasmaGlow:{value:.04},uThermalCloak:{value:0},uSunDir:{value:new T(-.55,.38,-.74).normalize()},uSunColor:{value:new Dt(16765601)}},n=new _n({name:"LightFury_SnowPearlHide_PBR",color:new Dt(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new Bt(.05,.05),roughnessMap:i.roughnessMap,roughness:.46,metalness:.02,iridescence:.42,iridescenceIOR:1.38,iridescenceThicknessRange:[320,520],clearcoat:.34,clearcoatRoughness:.22,sheen:.28,sheenRoughness:.42,sheenColor:new Dt(16773366),envMapIntensity:1.22});eh(n,e,!1);const s={albedo:i.albedoMap.clone(),normal:i.normalMap.clone(),rough:i.roughnessMap.clone()};for(const m of[s.albedo,s.normal,s.rough])m.repeat.set(3,3),m.needsUpdate=!0;const o=new _n({name:"LightFury_IridescentWingPatagium_PBR",color:new Dt(16776445),map:s.albedo,normalMap:s.normal,normalScale:new Bt(.028,.028),roughnessMap:s.rough,roughness:.42,metalness:.02,iridescence:.52,iridescenceIOR:1.4,iridescenceThicknessRange:[310,540],clearcoat:.28,clearcoatRoughness:.24,side:ln,envMapIntensity:1.28});eh(o,e,!0);const a=new _n({name:"LightFury_SlatePearlClaws_PBR",color:new Dt(2633016),roughness:.24,metalness:.08,clearcoat:.84,clearcoatRoughness:.12,envMapIntensity:1.5}),r=new _n({name:"LightFury_PearlyTeeth_PBR",color:new Dt(16447218),roughness:.14,metalness:0,clearcoat:.92,clearcoatRoughness:.08}),l=new _n({name:"LightFury_RoseGums_PBR",color:new Dt(12084344),normalMap:i.normalMap,normalScale:new Bt(.08,.08),roughness:.32,clearcoat:.82,clearcoatRoughness:.12,side:ln}),c=new _n({name:"LightFury_PinkTongue_PBR",color:new Dt(13924494),normalMap:i.normalMap,normalScale:new Bt(.1,.1),roughness:.26,clearcoat:.88,clearcoatRoughness:.1}),h=new so({name:"LightFury_OuterHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0}),u=new so({name:"LightFury_WingHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0,side:ln}),d=[n,o,a],f=[r,l,c,t.irisMaterial];let g=!1;return{skinMaterial:n,wingMembraneMaterial:o,clawMaterial:a,teethMaterial:r,oralGumMaterial:l,tongueMaterial:c,hullDepthMaterial:h,doubleSidedHullDepthMaterial:u,eyeMaterials:t,uniforms:e,syncCloakTransparency:m=>{const p=m>.001;if(p!==g){g=p;for(const w of d)w.transparent=p,w.depthWrite=!p,w.depthFunc=oi,w.polygonOffset=p,w.polygonOffsetFactor=p?-1:0,w.polygonOffsetUnits=p?-2:0,w.needsUpdate=!0;for(const w of f)w.transparent=p,w.depthWrite=!p,w.depthTest=!0,w.depthFunc=oi,w.needsUpdate=!0}const M=$.smoothstep(m,0,.96);return a.opacity=1-M*.86,r.opacity=1-M*.9,l.opacity=1-M*.9,c.opacity=1-M*.9,t.corneaMaterial.opacity=$.lerp(.15,.03,M),p}}}function he(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Pe(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function nh(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function il(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let h=0;h<e-1;h++)n[h]=(t[h+1][1]-t[h][1])/(t[h+1][0]-t[h][0]);s[0]=n[0],s[e-1]=n[e-2];for(let h=1;h<e-1;h++)n[h-1]*n[h]<=0?s[h]=0:s[h]=(n[h-1]+n[h])*.5;for(let h=0;h<e-1;h++)if(Math.abs(n[h])<1e-8)s[h]=0,s[h+1]=0;else{const u=s[h]/n[h],d=s[h+1]/n[h],f=Math.hypot(u,d);if(f>3){const g=3/f;s[h]=g*u*n[h],s[h+1]=g*d*n[h]}}let o=0;for(let h=0;h<e-1;h++)if(i>=t[h][0]&&i<=t[h+1][0]){o=h;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r;return(2*c-3*l+1)*t[o][1]+(c-2*l+r)*a*s[o]+(-2*c+3*l)*t[o+1][1]+(c-l)*a*s[o+1]}const Q_=[[-4.18,.015],[-3.55,.048],[-2.75,.088],[-1.9,.146],[-1.25,.202],[-.82,.246],[-.5,.278],[-.08,.258],[.42,.312],[.72,.326],[.98,.254],[1.22,.21],[1.44,.198]],yu=[[-4.18,.014],[-3.55,.042],[-2.75,.076],[-1.9,.126],[-1.25,.172],[-.82,.204],[-.5,.228],[-.08,.214],[.42,.248],[.72,.26],[.98,.208],[1.22,.182],[1.44,.174]],J_=[[0,.116,-4.18],[0,.116,-3.72],[0,.116,-3.28],[0,.12,-2.82],[0,.175,-2.3],[0,.32,-1.78],[0,.51,-1.32],[0,.68,-.86],[0,.755,-.5],[0,.76,-.08],[0,.815,.38],[0,.885,.75],[0,1.03,.98],[0,1.24,1.19],[0,1.45,1.38],[0,1.54,1.54],[0,1.562,1.73],[0,1.538,1.9],[0,1.49,2.065]];let cr=null;function bu(){return cr||(cr=new Fn(J_.map(([i,t,e])=>new T(i,t,e)),!1,"centripetal",.5)),cr}function tv(i){const t=bu();let e=0,n=1;for(let u=0;u<24;u++){const d=(e+n)*.5;t.getPointAt(d).z<i?e=d:n=d}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new T(0,1,0),l=new T().copy(r).addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=il(c,yu)*he(-4.18,-4.1,c);return{point:o.clone().addScaledVector(l,h),tangent:a,up:l}}function ih(i,t,e){const n=i/e,s=t/e+.15,o=n*n+Math.pow(s-.58*Math.sqrt(Math.abs(n)+.04),2);return 1-he(.62,1.15,o)}function ev(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.53)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.28){const r=he(1.31,1.53,i.z),l=1-r,c=he(1.26,1.45,i.z);return Be([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return Xn(i,e,n,3.5)}function nv(i,t){const e=[];return e.push(iv(i,t)),e.push(...sv(i,t)),e.push(...ov(i,t)),e.push(...av(i,t)),Ve(e)}function iv(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=bu(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(A=>i.boneIndexMap.get(A)),r=o.map(A=>i.bindWorldPositions.get(A)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4),g=new T(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),p=[{center:v,fwd:uo,up:new T(-.19,.98,.06).normalize()},{center:m,fwd:po,up:new T(.19,.98,.06).normalize()}].map(A=>{const b=new T().crossVectors(A.up,A.fwd).normalize(),S=new T().crossVectors(A.fwd,b).normalize();return{center:A.center,fwd:A.fwd,right:b,up:S}});for(let A=0;A<=e;A++){const b=A/e,S=1-Math.pow(1-b,1.85),E=s.getPointAt(S),y=s.getTangentAt(S).normalize(),x=new T().copy(g).addScaledVector(y,-g.dot(y)).normalize(),P=new T().crossVectors(x,y).normalize(),C=E.z,R=he(-4.18,-4.1,C),L=il(C,Q_)*R,D=il(C,yu)*R,k=he(1.36,1.5,C);let B=L,F=D;if(k>0){const H=Math.max(0,Math.min(1,(C-1.44)/.625)),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(H-.78)/.22),2))),Y=Yi(C),Z=(.174+.018*Pe(H,.36,.24)-.062*he(.36,.94,H))*V;B=$.lerp(L,Y,k),F=$.lerp(D,Z,k)}for(let H=0;H<=n;H++){const V=H/n,Y=V*Math.PI*2,Z=Math.sin(Y),X=Math.cos(Y);let W=B*Z,O=F*X,st=.08,at=0,j=0,K=0;if(C>-2.9&&C<1.6&&X<.12){const U=he(-2.9,-.55,C)*(1-he(1.36,1.6,C));j=he(.12,-.68,X)*U}if(C>-.45&&C<.92){const U=Pe(C,.3,.42)*Pe(Math.abs(Z),.88,.22)*Pe(X,.08,.36);K=Math.max(K,U*.28)}if(X>.35&&C>-3.9&&C<1.6){const U=he(.35,.92,X)*he(.1,.85,C)*(1-he(1.45,1.65,C)),rt=Pe(Z,0,.16)*he(.55,.96,X),dt=Math.pow(Math.max(0,Math.sin(C*5.8+Math.abs(Z)*3.4)),4)*Pe(X,.42,.24)*he(-2.4,-.4,C)*(1-he(.95,1.35,C));at=Math.max(at,U*.48,rt*.84,dt*.72)}if(C>-.78&&C<1.08){const U=Pe(C,.68,.28),rt=Pe(Math.abs(Z),.44,.22)*he(-.1,-.86,X);O-=.018*U*rt,W+=Math.sign(Z)*.012*U*rt;const dt=Pe(C,.78,.2)*Pe(Math.abs(Z),.7,.18)*he(-.08,-.78,X),wt=Pe(C,-.49,.22)*Pe(Math.abs(Z),.68,.19)*he(-.05,-.78,X);O-=.026*dt+.022*wt}if(C>=1.42){const U=Pe(C,1.842,.095),rt=Pe(Math.abs(Z),.62,.17)*he(.18,.74,X);O+=.014*U*rt,W+=Math.sign(Z)*.007*U*rt;const dt=Pe(C,1.76,.12)*Pe(Math.abs(Z),.88,.17)*Pe(X,-.12,.25);if(W+=Math.sign(Z)*.016*dt,X>.65&&C>1.56&&C<1.86){const wt=ih(W,C-1.745,.052),vt=ih(W,C-1.648,.038);at=Math.max(at,Math.max(wt,vt*.92))}C>1.98&&X>-.35&&X<.35&&(O-=.002*Pe(Z,0,.08)*he(1.98,2.055,C)),st=.22+.24*he(1.85,2.05,C)}const G=new T().copy(E).addScaledVector(P,W).addScaledVector(x,O),nt=he(1.52,1.6,C);if(nt>0&&X<.04){const U=Ai(C),rt=Math.max(he(.56,.9,Math.abs(Z)),he(1.96,2.04,C)),dt=U-.0042,wt=U+.039*(1-he(1.92,2.05,C)),vt=$.lerp(wt,dt,rt),Lt=nt*he(.04,-.26,X);G.y=$.lerp(G.y,vt,Lt)}if(C>1.66&&C<2)for(const U of p){if(Math.sign(G.x)!==Math.sign(U.center.x))continue;const rt=new T().subVectors(G,U.center),dt=rt.dot(U.fwd),wt=rt.dot(U.right),vt=rt.dot(U.up);if(dt>0){const Lt=Math.exp(-.5*(Math.pow(wt/.053,2)+Math.pow(vt/.045,2)))*he(0,.032,dt),yt=ha-.022,z=$.lerp(dt,yt,Lt);dt>z&&G.addScaledVector(U.fwd,z-dt)}}if(C>1.94&&C<2.065&&G.y>1.48){const U=nh(G.x,G.z,.054,2.018,.017,.02)*Pe(G.y,1.508,.014),rt=nh(G.x,G.z,-.054,2.018,.017,.02)*Pe(G.y,1.508,.014),dt=Math.max(U,rt),wt=he(1.96,2.055,G.z)*Pe(G.y,1.505,.032);K=Math.max(K,wt*.65),dt>.05&&(G.x*=1-.14*dt,G.y-=.009*dt,G.z-=.011*dt,K=Math.max(K,Math.min(1,.55+dt*.85)))}const _t=A*(n+1)+H;c[_t*3]=G.x,c[_t*3+1]=G.y,c[_t*3+2]=G.z,h[_t*2]=S*5.2,h[_t*2+1]=V*1.6,u[_t*4]=st,u[_t*4+1]=at,u[_t*4+2]=j,u[_t*4+3]=K;const J=ev(G,i,a,r);d.set(J.indices,_t*4),f.set(J.weights,_t*4)}}const M=new Uint32Array(e*n*6);let w=0;for(let A=0;A<e;A++)for(let b=0;b<n;b++){const S=A*(n+1)+b,E=(A+1)*(n+1)+b,y=(A+1)*(n+1)+(b+1),x=A*(n+1)+(b+1);M[w++]=S,M[w++]=E,M[w++]=y,M[w++]=S,M[w++]=y,M[w++]=x}const _=new Xt;return _.setAttribute("position",new q(c,3)),_.setAttribute("uv",new q(h,2)),_.setAttribute("aAnatomyData",new q(u,4)),_.setAttribute("skinIndex",new fe(d,4)),_.setAttribute("skinWeight",new Yt(f,4)),_.setIndex(new q(M,1)),_.computeVertexNormals(),wa(_,e,n),_}function sv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.162,1.848,1.24],maxWidth:.068,maxThick:.028,rollAngle:l*-.28,isPrimaryEar:!0}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.288,1.608,1.35],maxWidth:.032,maxThick:.017,rollAngle:l*-.82,isPrimaryEar:!1})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.boneNames.map(y=>i.bindWorldPositions.get(y).clone()),c=new T().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.055),...l,new T(...r.tipPos)],d=new Fn(u),f=r.boneNames.map(y=>i.boneIndexMap.get(y)),g=r.boneNames.map(y=>i.bindWorldPositions.get(y)),v=(o+1)*(a+1),m=new Float32Array(v*3),p=new Float32Array(v*2),M=new Float32Array(v*4),w=new Uint16Array(v*4),_=new Float32Array(v*4),A=new T(0,1,0);for(let y=0;y<=o;y++){const x=y/o,P=d.getPointAt(x),C=d.getTangentAt(x).normalize(),R=A.clone().addScaledVector(C,-A.dot(C)).normalize(),L=new T().crossVectors(R,C).normalize(),D=Math.cos(r.rollAngle),k=Math.sin(r.rollAngle),B=L.clone().multiplyScalar(D).addScaledVector(R,k),F=R.clone().multiplyScalar(D).addScaledVector(L,-k),H=r.isPrimaryEar?.72+.36*Math.sin(Math.pow(x,.75)*Math.PI*.88):Math.sin(Math.pow(x,.68)*Math.PI*.92),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(x-.76)/.24),2))),Y=r.maxWidth*H*V,Z=r.maxThick*(.78+.28*Math.sin(x*Math.PI))*V;for(let X=0;X<=a;X++){const W=X/a,O=W*Math.PI*2,st=new T().copy(P).addScaledVector(B,Y*Math.cos(O)).addScaledVector(F,Z*Math.sin(O)),at=y*(a+1)+X;m[at*3]=st.x,m[at*3+1]=st.y,m[at*3+2]=st.z,p[at*2]=x*.48,p[at*2+1]=W*.48,M[at*4]=.2,M[at*4+1]=he(.55,.95,x)*.65,M[at*4+2]=0,M[at*4+3]=he(.65,1,x)*.3;const j=Xn(st,f,g,4),K=he(.3,0,x),G=Be([n,j.indices[0],j.indices[1],j.indices[2]],[K,j.weights[0]*(1-K),j.weights[1]*(1-K),j.weights[2]*(1-K)]);w.set(G.indices,at*4),_.set(G.weights,at*4)}}const b=new Uint16Array(o*a*6);let S=0;for(let y=0;y<o;y++)for(let x=0;x<a;x++){const P=y*(a+1)+x,C=(y+1)*(a+1)+x,R=(y+1)*(a+1)+(x+1),L=y*(a+1)+(x+1);b[S++]=P,b[S++]=C,b[S++]=R,b[S++]=P,b[S++]=R,b[S++]=L}const E=new Xt;E.setAttribute("position",new q(m,3)),E.setAttribute("uv",new q(p,2)),E.setAttribute("aAnatomyData",new q(M,4)),E.setAttribute("skinIndex",new fe(w,4)),E.setAttribute("skinWeight",new Yt(_,4)),E.setIndex(new q(b,1)),E.computeVertexNormals(),wa(E,o,a),e.push(E)}return e}function ov(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?uo:po).clone(),d=new T(r*-.19,.98,.06).normalize(),f=new T().crossVectors(u,d).normalize(),g=new T().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,p=(s+1)*(o+1),M=new Float32Array(p*3),w=new Float32Array(p*2),_=new Float32Array(p*4),A=new Uint16Array(p*4),b=new Float32Array(p*4),S=ha+.0016;for(let P=0;P<=o;P++){const C=P/o,R=Pe(C,.06,.08);for(let L=0;L<=s;L++){const D=L/s,k=$.degToRad($.lerp(-65,65,D)),B=Math.sin(D*Math.PI),F=v?42*B:-38*B,H=v?78:-74,V=$.degToRad($.lerp(F,H,C)),Y=S+.0016*R-.0026*C,Z=new T().addScaledVector(u,Math.cos(V)*Math.cos(k)).addScaledVector(f,Math.cos(V)*Math.sin(k)).addScaledVector(g,Math.sin(V)).normalize(),X=new T().copy(l).addScaledVector(Z,Y),W=P*(s+1)+L;M[W*3]=X.x,M[W*3+1]=X.y,M[W*3+2]=X.z,w[W*2]=D*.35,w[W*2+1]=C*.18,_[W*4]=.25;const O=B*(1-he(.48,1,C)),st=Math.max(0,Math.min(1,O));A.set([m,n,0,0],W*4),b.set([st,1-st,0,0],W*4)}}const E=new Uint16Array(s*o*6);let y=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,D=(P+1)*(s+1)+(C+1),k=P*(s+1)+(C+1);v?(E[y++]=R,E[y++]=D,E[y++]=L,E[y++]=R,E[y++]=k,E[y++]=D):(E[y++]=R,E[y++]=L,E[y++]=D,E[y++]=R,E[y++]=D,E[y++]=k)}const x=new Xt;x.setAttribute("position",new q(M,3)),x.setAttribute("uv",new q(w,2)),x.setAttribute("aAnatomyData",new q(_,4)),x.setAttribute("skinIndex",new fe(A,4)),x.setAttribute("skinWeight",new Yt(b,4)),x.setIndex(new q(E,1)),x.computeVertexNormals(),e.push(x)}}return e}function av(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new T(a*.14,.89,.78),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new T(a*.292,.048,.925),new T(a*.292,.028,.992)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(oh(i,r,l,!0,a,n,s)),e.push(...sh(i,o,!0,t));const c=[new T(a*.13,.75,-.49),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new T(a*.278,.046,-.506),new T(a*.278,.028,-.442)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(oh(i,c,h,!1,a,n,s)),e.push(...sh(i,o,!1,t))}return e}function sh(i,t,e,n){const s=[],o=xu(t,e),a=n===0?15:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=Math.hypot(l.dirX,l.dirZ),p=l.dirX/m,M=l.dirZ/m,w=M,_=-p;for(let E=0;E<=a;E++){const y=E/a,x=$.lerp(-.36,1,y),P=Math.max(0,x),C=Math.max(0,-x)*.036,R=Math.sin(P*Math.PI)*.009-.008*P*P+C,L=l.rootX+p*l.toeLength*x,D=l.rootZ+M*l.toeLength*x,k=l.rootY+R,B=1+.42*Math.pow(1-he(-.36,.18,x),1.5),F=1+.13*Pe(P,.4,.18)+.11*Pe(P,.84,.1),H=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(y-.89)/.11),2))),V=$.lerp(l.baseRadius,l.tipRadius,P)*B*F*H;for(let Y=0;Y<=r;Y++){const Z=Y/r,X=Z*Math.PI*2,W=Math.sin(X),O=Math.cos(X),st=1.1+.22*(1-he(-.34,.2,x)),at=L+w*W*V*st,j=D+_*W*V*st;let K=k+O*V*.86;K<.003&&(K=.003+Math.max(0,K)*.14);const G=E*(r+1)+Y;u[G*3]=at,u[G*3+1]=K,u[G*3+2]=j,d[G*2]=y*.36,d[G*2+1]=Z*.32,f[G*4]=.28,f[G*4+1]=O>.2?.52*he(.2,.85,P):0,f[G*4+2]=.35,g.set([c,0,0,0],G*4),v.set([1,0,0,0],G*4)}}const A=new Uint16Array(a*r*6);let b=0;for(let E=0;E<a;E++)for(let y=0;y<r;y++){const x=E*(r+1)+y,P=(E+1)*(r+1)+y,C=(E+1)*(r+1)+(y+1),R=E*(r+1)+(y+1);A[b++]=x,A[b++]=P,A[b++]=C,A[b++]=x,A[b++]=C,A[b++]=R}const S=new Xt;S.setAttribute("position",new q(u,3)),S.setAttribute("uv",new q(d,2)),S.setAttribute("aAnatomyData",new q(f,4)),S.setAttribute("skinIndex",new fe(g,4)),S.setAttribute("skinWeight",new Yt(v,4)),S.setIndex(new q(A,1)),S.computeVertexNormals(),wa(S,a,r),s.push(S)}return s}function oh(i,t,e,n,s,o,a){const r=new Fn(t,!1,"centripetal",.5),l=e.map(_=>i.boneIndexMap.get(_)),c=e.map(_=>i.bindWorldPositions.get(_)),h=(o+1)*(a+1),u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new T(0,0,1);for(let _=0;_<=o;_++){const b=1-_/o,S=r.getPointAt(b),E=r.getTangentAt(b).negate().normalize(),y=m.clone().addScaledVector(E,-m.dot(E)).normalize(),x=new T().crossVectors(y,E).normalize(),P=.5+.5*he(0,.34,b),C=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(b-.91)/.09),2)))*P;let R=.08,L=.092;if(n){const B=Pe(b,.54,.16)*.022,F=Pe(b,.86,.12)*.072;R=(.076+B+F)*C,L=(.09+Pe(b,.25,.18)*.028+B+F*.86)*C}else{const B=Pe(b,.52,.15)*.026,F=Pe(b,.86,.12)*.068;R=(.074+B+F)*C,L=(.094+Pe(b,.26,.19)*.038+B*1.06+F*.84)*C}const D=he(.7,.94,b),k=1-he(.08,.42,b);for(let B=0;B<=a;B++){const F=B/a,H=F*Math.PI*2,V=Math.sin(H),Y=Math.cos(H),Z=V*s>0?Math.abs(V):0,X=1-.28*k*Z;let W=1;if(D>.01&&Y>-.35){const U=Math.atan2(V,Math.max(.05,Y+.25)),rt=Math.cos(U*3.6);W+=.14*D*Math.max(-.12,rt)*he(-.35,.45,Y)}let O=0;if(n&&b>.28&&b<.84){const U=Math.max(0,V*s*.62-Y*.78);O=Math.pow(U,3.6)*Math.sin((b-.28)/.56*Math.PI)*.028}else if(!n&&b>.34&&b<.84){const U=Math.max(0,V*s*.58-Y*.81);O=Math.pow(U,3.8)*Math.sin((b-.34)/.5*Math.PI)*.022}const st=new T().copy(S).addScaledVector(x,(R*X*V+s*O*.65)*W).addScaledVector(y,(L*Y-O*.75)*W);b>.7&&st.y<.004&&(st.y=.002+Math.max(0,st.y)*.14);const at=_*(a+1)+B;u[at*3]=st.x,u[at*3+1]=st.y,u[at*3+2]=st.z,d[at*2]=b*1.35,d[at*2+1]=F*.85,f[at*4]=.22,f[at*4+1]=Math.min(1,O*22+Math.pow(Math.max(0,Math.sin(b*14)),4)*Z*.65),f[at*4+2]=Math.max(he(.65,.96,b)*.35,Math.max(0,-V*s)*.45);const j=Xn(st,l,c,3.5),K=he(.24,0,b)*.72,G=l[l.length-1],nt=he(.74,.88,b),_t=(1-K)*(1-nt),J=Be([G,l[0],j.indices[0],j.indices[1]],[nt,K*(1-nt),j.weights[0]*_t,j.weights[1]*_t]);g.set(J.indices,at*4),v.set(J.weights,at*4)}}const p=new Uint16Array(o*a*6);let M=0;for(let _=0;_<o;_++)for(let A=0;A<a;A++){const b=_*(a+1)+A,S=(_+1)*(a+1)+A,E=(_+1)*(a+1)+(A+1),y=_*(a+1)+(A+1);p[M++]=b,p[M++]=S,p[M++]=E,p[M++]=b,p[M++]=E,p[M++]=y}const w=new Xt;return w.setAttribute("position",new q(u,3)),w.setAttribute("uv",new q(d,2)),w.setAttribute("aAnatomyData",new q(f,4)),w.setAttribute("skinIndex",new fe(g,4)),w.setAttribute("skinWeight",new Yt(v,4)),w.setIndex(new q(p,1)),w.computeVertexNormals(),wa(w,o,a),w}function wa(i,t,e){const n=i.getAttribute("normal"),s=new T,o=new T;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function ei(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function rv(i,t){return{jawSkinGeometry:Ve([cv(i,t),...hv(i,t)]),oralGumsGeometry:uv(i,t),teethGeometry:dv(i,t),tongueGeometry:pv(i,t),irisGeometry:ah(i,t,!1),corneaGeometry:ah(i,t,!0),clawsGeometry:fv(i,t)}}function lv(i,t){const e=1.66+Math.cos(i)*(t?.355:.34),n=Math.max(.02,Yi(e)-(t?.022:.028));return{x:Math.sin(i)*n,z:e}}function cv(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),f=new Float32Array(l*4);for(let p=0;p<=e;p++){const M=p/e,w=$.lerp(1.45,2.056,M),_=Yi(w),A=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.87)/.13),2))),b=Math.max(.002,(_-.0032*ei(1.55,1.65,w))*A),S=Ai(w),E=.025*(1-ei(1.45,1.59,w)),y=S+.0032+E,x=(.074-.03*M)*A;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),D=Math.cos(R),k=Math.exp(-Math.pow((M-.28)/.22,2))*.009,B=Math.exp(-Math.pow((M-.3)/.16,2))*Math.abs(L)*.008,F=(b+B)*L,H=-.019*D*(1-Math.pow(L,2))*ei(1.57,1.66,w),V=D>=0?y+H:y+(x+k)*D,Y=p*(n+1)+P;c[Y*3]=F,c[Y*3+1]=V,c[Y*3+2]=w,h[Y*2]=M*.95,h[Y*2+1]=C*.85,u[Y*4]=.22,u[Y*4+1]=0,u[Y*4+2]=D<-.15?ei(.92,.25,M)*-D*.72:0,u[Y*4+3]=M>.82?(M-.82)*2.2:0;const Z=ei(1.51,1.6,w),X=1-Z,W=ei(1.31,1.53,w),O=ei(1.26,1.45,w),st=X*(1-W),at=Be([s,o,a,r],[Z,X*W,st*(.52+.48*O),st*(.48-.48*O)]);d.set(at.indices,Y*4),f.set(at.weights,Y*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let p=0;p<e;p++)for(let M=0;M<n;M++){const w=p*(n+1)+M,_=(p+1)*(n+1)+M,A=(p+1)*(n+1)+(M+1),b=p*(n+1)+(M+1);g[v++]=w,g[v++]=_,g[v++]=A,g[v++]=w,g[v++]=A,g[v++]=b}const m=new Xt;return m.setAttribute("position",new q(c,3)),m.setAttribute("uv",new q(h,2)),m.setAttribute("aAnatomyData",new q(u,4)),m.setAttribute("skinIndex",new fe(d,4)),m.setAttribute("skinWeight",new Yt(f,4)),m.setIndex(new q(g,1)),m.computeVertexNormals(),m}function hv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?12:8,a=t===0?10:6;for(const r of["L","R"]){const l=r==="L"?1:-1,c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=a;M++){const w=M/a;for(let _=0;_<=o;_++){const A=_/o,b=$.lerp(1.56,1.72,A),S=Ai(b),E=$.lerp(S-.015,S+.018,w),y=Yi(b)-.008,x=-.005*Math.sin(A*Math.PI)*Math.sin(w*Math.PI),P=l*(y+x),C=M*(o+1)+_;h[C*3]=P,h[C*3+1]=E,h[C*3+2]=b,u[C*2]=A*.25,u[C*2+1]=w*.25,d[C*4]=.22;const R=ei(0,1,w);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<a;M++)for(let w=0;w<o;w++){const _=M*(o+1)+w,A=(M+1)*(o+1)+w,b=(M+1)*(o+1)+(w+1),S=M*(o+1)+(w+1);l>0?(v[m++]=_,v[m++]=b,v[m++]=A,v[m++]=_,v[m++]=S,v[m++]=b):(v[m++]=_,v[m++]=A,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=S)}const p=new Xt;p.setAttribute("position",new q(h,3)),p.setAttribute("uv",new q(u,2)),p.setAttribute("aAnatomyData",new q(d,4)),p.setAttribute("skinIndex",new fe(f,4)),p.setAttribute("skinWeight",new Yt(g,4)),p.setIndex(new q(v,1)),p.computeVertexNormals(),e.push(p)}return e}function uv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?28:16,a=t===0?18:10;{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const w=M/o,_=$.lerp(1.58,2.025,w),A=Math.max(.014,Yi(_)-.018),b=Ai(_),S=Math.sin(w*Math.PI*12)*.0022*Math.sin(w*Math.PI);for(let E=0;E<=a;E++){const y=E/a,x=(y-.5)*2,P=Math.cos(x*Math.PI*.5)*.028*(1-.45*w),C=-.002*Math.exp(-Math.pow(x/.12,2)),R=Math.exp(-Math.pow((Math.abs(x)-.88)/.12,2))*-.005,L=x*A,D=b+.007+P+S*(1-Math.abs(x)*.5)+C+R,k=M*(a+1)+E;h[k*3]=L,h[k*3+1]=D,h[k*3+2]=_,u[k*2]=w*2,u[k*2+1]=y*2,d[k*4+3]=(1-w)*.65,f.set([n,0,0,0],k*4),g.set([1,0,0,0],k*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<o;M++)for(let w=0;w<a;w++){const _=M*(a+1)+w,A=(M+1)*(a+1)+w,b=(M+1)*(a+1)+(w+1),S=M*(a+1)+(w+1);v[m++]=_,v[m++]=b,v[m++]=A,v[m++]=_,v[m++]=S,v[m++]=b}const p=new Xt;p.setAttribute("position",new q(h,3)),p.setAttribute("uv",new q(u,2)),p.setAttribute("aAnatomyData",new q(d,4)),p.setAttribute("skinIndex",new fe(f,4)),p.setAttribute("skinWeight",new Yt(g,4)),p.setIndex(new q(v,1)),p.computeVertexNormals(),e.push(p)}{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const w=M/o,_=$.lerp(1.58,2.015,w),A=Math.max(.012,Yi(_)-.022),b=Ai(_);for(let S=0;S<=a;S++){const E=S/a,y=(E-.5)*2,x=-Math.cos(y*Math.PI*.5)*.016*(1-.35*w),P=Math.exp(-Math.pow((Math.abs(y)-.86)/.14,2))*.0055,C=y*A,R=b-.004+x+P,L=M*(a+1)+S;h[L*3]=C,h[L*3+1]=R,h[L*3+2]=_,u[L*2]=w*2,u[L*2+1]=E*2,d[L*4+3]=(1-w)*.55,f.set([s,0,0,0],L*4),g.set([1,0,0,0],L*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<o;M++)for(let w=0;w<a;w++){const _=M*(a+1)+w,A=(M+1)*(a+1)+w,b=(M+1)*(a+1)+(w+1),S=M*(a+1)+(w+1);v[m++]=_,v[m++]=A,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=S}const p=new Xt;p.setAttribute("position",new q(h,3)),p.setAttribute("uv",new q(u,2)),p.setAttribute("aAnatomyData",new q(d,4)),p.setAttribute("skinIndex",new fe(f,4)),p.setAttribute("skinWeight",new Yt(g,4)),p.setIndex(new q(v,1)),p.computeVertexNormals(),e.push(p)}const r=t===0?18:10,l=t===0?12:8;{const c=(r+1)*(l+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=l;M++){const w=M/l;for(let _=0;_<=r;_++){const A=_/r,b=$.lerp(-Math.PI*.62,Math.PI*.62,A),S=1.66-Math.cos(b)*.1,E=Yi(Math.max(1.55,S))-.02,y=Math.sin(b)*E,x=Ai(S),P=$.lerp(x-.016,x+.026,w),C=M*(r+1)+_;h[C*3]=y,h[C*3+1]=P,h[C*3+2]=S,u[C*2]=A*1.5,u[C*2+1]=w*1.5,d[C*4+3]=.95*Math.cos(b*.65);const R=ei(0,1,w);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(r*l*6);let m=0;for(let M=0;M<l;M++)for(let w=0;w<r;w++){const _=M*(r+1)+w,A=(M+1)*(r+1)+w,b=(M+1)*(r+1)+(w+1),S=M*(r+1)+(w+1);v[m++]=_,v[m++]=A,v[m++]=b,v[m++]=_,v[m++]=b,v[m++]=S}const p=new Xt;p.setAttribute("position",new q(h,3)),p.setAttribute("uv",new q(u,2)),p.setAttribute("aAnatomyData",new q(d,4)),p.setAttribute("skinIndex",new fe(f,4)),p.setAttribute("skinWeight",new Yt(g,4)),p.setIndex(new q(v,1)),p.computeVertexNormals(),e.push(p)}return Ve(e)}function dv(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,f=$.lerp(-Math.PI*.42,Math.PI*.42,d),g=lv(f,r),v=g.x,m=g.z,p=Ai(m)+(r?.01:-.009),M=1+.3*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),w=.0195*M*(.78+.22*Math.cos(f)),_=.0054*M,A=(o+1)*(a+1),b=new Float32Array(A*3),S=new Float32Array(A*2),E=new Float32Array(A*4),y=new Uint16Array(A*4),x=new Float32Array(A*4),P=-Math.sin(f),C=-Math.cos(f);for(let k=0;k<=o;k++){const B=r?1-k/o:k/o,F=_*(1-.88*Math.pow(B,1.25)),H=.0045*B*B,V=v+P*H,Y=p+h*w*B,Z=m+C*H-.0025*B*B;for(let X=0;X<=a;X++){const W=X/a,O=W*Math.PI*2,st=k*(a+1)+X;b[st*3]=V+Math.sin(O)*F,b[st*3+1]=Y,b[st*3+2]=Z+Math.cos(O)*F,S[st*2]=B,S[st*2+1]=W,y.set([c,0,0,0],st*4),x.set([1,0,0,0],st*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let k=0;k<o;k++)for(let B=0;B<a;B++){const F=k*(a+1)+B,H=(k+1)*(a+1)+B,V=(k+1)*(a+1)+(B+1),Y=k*(a+1)+(B+1);R[L++]=F,R[L++]=H,R[L++]=V,R[L++]=F,R[L++]=V,R[L++]=Y}const D=new Xt;D.setAttribute("position",new q(b,3)),D.setAttribute("uv",new q(S,2)),D.setAttribute("aAnatomyData",new q(E,4)),D.setAttribute("skinIndex",new fe(y,4)),D.setAttribute("skinWeight",new Yt(x,4)),D.setIndex(new q(R,1)),D.computeVertexNormals(),s.push(D)}}return Ve(s)}function pv(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let m=0;m<=e;m++){const p=m/e,M=$.lerp(1.62,1.96,p),w=Ai(M)-.0035,_=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),A=(.068+.01*Math.sin(p*Math.PI)-.02*p)*_,b=(.013-.004*p)*_;for(let S=0;S<=n;S++){const E=S/n,y=E*Math.PI*2,x=Math.sin(y),P=Math.cos(y),C=P>.35?-.0035*Math.exp(-Math.pow(x/.24,2)):0,R=P>.2?.001*Math.sin(p*Math.PI*26)*Math.cos(x*Math.PI*9)*_:0,L=new T(A*x,w+b*P+C+R,M),D=m*(n+1)+S;l[D*3]=L.x,l[D*3+1]=L.y,l[D*3+2]=L.z,c[D*2]=p*2.5,c[D*2+1]=E*1.8;const k=Xn(L,o,a,3.8);u.set(k.indices,D*4),d.set(k.weights,D*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let p=0;p<n;p++){const M=m*(n+1)+p,w=(m+1)*(n+1)+p,_=(m+1)*(n+1)+(p+1),A=m*(n+1)+(p+1);f[g++]=M,f[g++]=w,f[g++]=_,f[g++]=M,f[g++]=_,f[g++]=A}const v=new Xt;return v.setAttribute("position",new q(l,3)),v.setAttribute("uv",new q(c,2)),v.setAttribute("aAnatomyData",new q(h,4)),v.setAttribute("skinIndex",new fe(u,4)),v.setAttribute("skinWeight",new Yt(d,4)),v.setIndex(new q(f,1)),v.computeVertexNormals(),v}function ah(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?uo:po).clone(),u=new T(r*-.19,.98,.06).normalize(),d=new T().crossVectors(u,h).normalize(),f=new T().crossVectors(h,d).normalize(),g=e?ha+8e-4:ha,v=.94,m=(s+1)*(o+1),p=new Float32Array(m*3),M=new Float32Array(m*2),w=new Float32Array(m*4),_=new Uint16Array(m*4),A=new Float32Array(m*4);for(let y=0;y<=s;y++){const x=y/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(x),C=Math.cos(x);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,D=Math.cos(L),k=Math.sin(L);let B=g;if(x<v){const Z=1-x/v;B+=e?.0013*Z*Z:-.0025*Z*Z}const F=new T().addScaledVector(h,C).addScaledVector(d,P*D).addScaledVector(f,P*k).normalize(),H=new T().copy(l).addScaledVector(F,B),V=y*(o+1)+R;p[V*3]=H.x,p[V*3+1]=H.y,p[V*3+2]=H.z;const Y=Math.min(.498,x/v*.48);M[V*2]=.5+Y*D,M[V*2+1]=.5+Y*k,_.set([c,0,0,0],V*4),A.set([1,0,0,0],V*4)}}const b=new Uint16Array(s*o*6);let S=0;for(let y=0;y<s;y++)for(let x=0;x<o;x++){const P=y*(o+1)+x,C=(y+1)*(o+1)+x,R=(y+1)*(o+1)+(x+1),L=y*(o+1)+(x+1);b[S++]=P,b[S++]=C,b[S++]=R,b[S++]=P,b[S++]=R,b[S++]=L}const E=new Xt;E.setAttribute("position",new q(p,3)),E.setAttribute("uv",new q(M,2)),E.setAttribute("aAnatomyData",new q(w,4)),E.setAttribute("skinIndex",new fe(_,4)),E.setAttribute("skinWeight",new Yt(A,4)),E.setIndex(new q(b,1)),E.computeVertexNormals(),n.push(E)}return Ve(n)}function fv(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=xu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,f=d,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,p=l.rootZ+d*l.toeLength*v,M=l.rootY+Math.sin(v*Math.PI)*.009-.008*v*v+.002,w=l.toeLength*(1-v)+l.clawLength,_=l.tipRadius*.72,A=(n+1)*(s+1),b=new Float32Array(A*3),S=new Float32Array(A*2),E=new Float32Array(A*4),y=new Uint16Array(A*4),x=new Float32Array(A*4);for(let L=0;L<=n;L++){const D=L/n,k=_*Math.sqrt(Math.max(.06,1-Math.pow(D,1.72))),B=m+u*w*D,F=p+d*w*D,H=Math.max(.004,M-.028*Math.pow(D,1.82)+.004*Math.sin(D*Math.PI));for(let V=0;V<=s;V++){const Y=V/s,Z=Y*Math.PI*2,X=Math.sin(Z),W=Math.cos(Z),O=L*(s+1)+V;b[O*3]=B+f*X*k*.72,b[O*3+1]=Math.max(.002,H+W*k*1.04),b[O*3+2]=F+g*X*k*.72,S[O*2]=D,S[O*2+1]=Y,y.set([c,0,0,0],O*4),x.set([1,0,0,0],O*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let D=0;D<s;D++){const k=L*(s+1)+D,B=(L+1)*(s+1)+D,F=(L+1)*(s+1)+(D+1),H=L*(s+1)+(D+1);P[C++]=k,P[C++]=B,P[C++]=F,P[C++]=k,P[C++]=F,P[C++]=H}const R=new Xt;R.setAttribute("position",new q(b,3)),R.setAttribute("uv",new q(S,2)),R.setAttribute("aAnatomyData",new q(E,4)),R.setAttribute("skinIndex",new fe(y,4)),R.setAttribute("skinWeight",new Yt(x,4)),R.setIndex(new q(P,1)),R.computeVertexNormals(),e.push(R)}}return Ve(e)}function Us(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function mv(i,t){const e=[],n=[];for(const s of["L","R"]){const o=s==="L"?1:-1;e.push(...gv(i,s,o,t)),n.push(..._v(i,s,o,t)),e.push(...vv(i,s,t)),n.push(xv(i,s,t)),n.push(Mv(i,s,o,t)),e.push(...wv(i,s,o,t)),n.push(yv(i,s,o,t))}return{wingSparsSkinGeometry:Ve(e),wingMembraneGeometry:Ve(n),dorsalSpinesGeometry:bv(i,t)}}function ua(i,t,e,n,s,o,a=.42,r=.12){const l=new Fn(t),c=e.map(A=>i.boneIndexMap.get(A)),h=e.map(A=>i.bindWorldPositions.get(A)),u=(s+1)*(o+1),d=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),p=new T(0,1,0);for(let A=0;A<=s;A++){const b=A/s,S=l.getPointAt(b),E=l.getTangentAt(b).normalize();let y=p.clone().addScaledVector(E,-p.dot(E));y.lengthSq()<1e-4&&y.set(0,0,1),y.normalize();const x=new T().crossVectors(y,E).normalize(),P=b*(n.length-1),C=Math.min(n.length-2,Math.floor(P)),R=P-C;let L=$.lerp(n[C],n[C+1],R);b>.86&&(L*=Math.sqrt(Math.max(0,1-Math.pow((b-.86)/.14,2))));for(let D=0;D<=o;D++){const k=D/o,B=k*Math.PI*2,F=new T().copy(S).addScaledVector(x,L*Math.sin(B)).addScaledVector(y,L*a*Math.cos(B)),H=A*(o+1)+D;d[H*3]=F.x,d[H*3+1]=F.y,d[H*3+2]=F.z,f[H*2]=b*1.4,f[H*2+1]=k*.45,g[H*4]=.08,g[H*4+1]=Us(.3,.92,b)*.38,g[H*4+2]=r;const V=Xn(F,c,h,3.8);v.set(V.indices,H*4),m.set(V.weights,H*4)}}const M=new Uint16Array(s*o*6);let w=0;for(let A=0;A<s;A++)for(let b=0;b<o;b++){const S=A*(o+1)+b,E=(A+1)*(o+1)+b,y=(A+1)*(o+1)+(b+1),x=A*(o+1)+(b+1);M[w++]=S,M[w++]=E,M[w++]=y,M[w++]=S,M[w++]=y,M[w++]=x}const _=new Xt;return _.setAttribute("position",new q(d,3)),_.setAttribute("uv",new q(f,2)),_.setAttribute("aAnatomyData",new q(g,4)),_.setAttribute("skinIndex",new fe(v,4)),_.setAttribute("skinWeight",new Yt(m,4)),_.setIndex(new q(M,1)),_.computeVertexNormals(),_}function gv(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new T(e*.16,.9,.68),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(ua(i,c,h,[.048,.052,.05,.042,.032,.02,.005],o,a,.58,.08));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(ua(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.013,.0085,.0025],r,l,.34,.1))}return s}function As(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const f=d/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),p=d*(i+1)+g;s[p*3]=m.pos.x,s[p*3+1]=m.pos.y,s[p*3+2]=m.pos.z,o[p*2]=v*1.25,o[p*2+1]=f*1.25,a[p*4]=.06,a[p*4+1]=m.pinkStripe??0,a[p*4+2]=m.iceBlue??.14,a[p*4+3]=m.thinness,r.set(m.skin.indices,p*4),l.set(m.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let f=0;f<i;f++){const g=d*(i+1)+f,v=(d+1)*(i+1)+f,m=(d+1)*(i+1)+(f+1),p=d*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=p}const u=new Xt;return u.setAttribute("position",new q(s,3)),u.setAttribute("uv",new q(o,2)),u.setAttribute("uv1",new q(o,2)),u.setAttribute("aAnatomyData",new q(a,4)),u.setAttribute("skinIndex",new fe(r,4)),u.setAttribute("skinWeight",new Yt(l,4)),u.setIndex(new q(c,1)),u.computeVertexNormals(),u}function _v(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(As(o,Math.max(4,Math.floor(a*.5)),(_,A)=>{const b=new T().lerpVectors(new T(e*.25,.96,.74),f,_),S=_<.45?new T().lerpVectors(v,g,_/.45):new T().lerpVectors(g,f,(_-.45)/.55),E=new T().lerpVectors(S,b,A),y=Math.max(0,1-_*2.1),x=Math.max(0,(_-.45)*1.82),P=Math.max(0,1-y-x),C=Be([c,l,r,0],[y,P,x,0]);return{pos:E,skin:C,thinness:.38+.34*A,pinkStripe:.18*A,iceBlue:.1}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),M=i.boneIndexMap.get(`wingFinger_${t}_1_a`),w=i.boneIndexMap.get(`wingFinger_${t}_1_b`);s.push(As(o,a,(_,A)=>{const b=new T(e*.21,.9,.62),S=new T(e*.18,.75,-.44),E=new T().lerpVectors(b,S,A),y=A<.5?new T().lerpVectors(f,m,A*2):new T().lerpVectors(m,p,(A-.5)*2),x=_<.45?new T().lerpVectors(v,g,_/.45):new T().lerpVectors(g,f,(_-.45)/.55),P=new T().lerpVectors(E,y,_),C=new T().lerpVectors(x,P,Math.pow(A,.85));C.z+=Math.sin(_*Math.PI)*.045*Math.pow(A,1.8),C.y+=Math.sin(_*Math.PI)*Math.sin(A*Math.PI)*.022;const R=1-_,L=_,D=A<.36?h:A<.72?u:d,k=A<.25?l:A<.55?r:M,B=A<.55?M:w,F=A<.55?A/.55:(A-.55)/.45,H=Be([D,k,B,c],[R*.88,L*(1-F),L*F,R*.12]),V=Math.pow(.5+.5*Math.sin(A*14+_*4.5),3)*.55;return{pos:C,skin:H,thinness:.55+.4*A,pinkStripe:V*_,iceBlue:(1-_)*.35+.08}}));for(let _=1;_<=5;_++){const A=i.bindWorldPositions.get(`wingFinger_${t}_${_}_a`),b=i.bindWorldPositions.get(`wingFinger_${t}_${_}_b`),S=i.bindWorldPositions.get(`wingFinger_${t}_${_+1}_a`),E=i.bindWorldPositions.get(`wingFinger_${t}_${_+1}_b`),y=i.boneIndexMap.get(`wingFinger_${t}_${_}_a`),x=i.boneIndexMap.get(`wingFinger_${t}_${_}_b`),P=i.boneIndexMap.get(`wingFinger_${t}_${_+1}_a`),C=i.boneIndexMap.get(`wingFinger_${t}_${_+1}_b`);s.push(As(o,a,(R,L)=>{const D=L<.5?new T().lerpVectors(f,A,L*2):new T().lerpVectors(A,b,(L-.5)*2),k=L<.5?new T().lerpVectors(f,S,L*2):new T().lerpVectors(S,E,(L-.5)*2),B=new T().lerpVectors(D,k,R),F=_===5?-.028:.042,H=new T().subVectors(f,B).normalize();B.addScaledVector(H,F*Math.sin(R*Math.PI)*Math.pow(L,2.2)),B.y+=Math.sin(R*Math.PI)*Math.sin(L*Math.PI)*.018;let V;if(L<.5){const X=L*2;V=Be([r,y,P,0],[1-X,X*(1-R),X*R,0])}else{const X=(L-.5)*2;V=Be([y,x,P,C],[(1-R)*(1-X),(1-R)*X,R*(1-X),R*X])}const Y=Math.sin(L*18-_*.65+Math.sin(R*Math.PI)*1.4),Z=Us(.28,.94,Y)*Us(.14,.58,L)*.88;return{pos:B,skin:V,thinness:.62+.38*L,pinkStripe:Z,iceBlue:(1-L)*.24+.06}}))}return s}function vv(i,t,e){const n=t==="L"?1:-1,s=[],o=e===0?10:6,a=e===0?8:6;return vu.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new T(n*r.rootX,r.rootY,r.rootZ),u=new T(n*r.tipX,r.tipY,r.tipZ);s.push(ua(i,[h,u],[c],[.009,.0022],o,a,.35,.2))}),s}function xv(i,t,e){const n=t==="L"?1:-1,s=e===0?16:9,o=i.boneIndexMap.get(`pelvicFin_${t}_1`),a=i.boneIndexMap.get(`pelvicFin_${t}_2`),r=i.boneIndexMap.get(`pelvicFin_${t}_3`),l=new T(n*.16,.72,-.7),c=new T(n*.095,.52,-1.46);return As(s,s,(h,u)=>{const d=new T().lerpVectors(l,c,h),f=.29*Math.sin(Math.pow(h,.74)*Math.PI),g=d.clone().add(new T(n*f,-.025*f,-.08*Math.sin(h*Math.PI))),v=new T().lerpVectors(d,g,u),m=Math.max(0,1-h*2),p=Math.max(0,(h-.5)*2),M=Math.max(0,1-m-p),w=Be([o,a,r,0],[m,M,p,0]);return{pos:v,skin:w,thinness:.52+.45*u,pinkStripe:u*.38,iceBlue:.26}})}function Mv(i,t,e,n){const s=n===0?12:6,o=i.boneIndexMap.get("tail_7"),a=i.boneIndexMap.get("tail_8"),r=new T(e*.02,.12,-2.92),l=new T(e*.018,.116,-3.22);return As(s,s,(c,h)=>{const u=new T().lerpVectors(r,l,c),d=.115*Math.sin(Math.pow(c,.75)*Math.PI),f=u.clone().add(new T(e*d,.008*Math.sin(c*Math.PI),-.025*c)),g=new T().lerpVectors(u,f,h),v=Be([o,a,0,0],[1-c,c,0,0]);return{pos:g,skin:v,thinness:.55+.4*h,pinkStripe:h*.35,iceBlue:.28}})}function wv(i,t,e,n){const s=[],o=n===0?10:6,a=n===0?8:6;return _u.forEach((r,l)=>{const c=`tailFin_${t}_${l+1}`,h=new T(e*r.rootX,r.rootY,r.rootZ),u=new T().lerpVectors(h,new T(e*r.tipX,r.tipY,r.tipZ),.92);s.push(ua(i,[h,u],[c],[.0075,.0018],o,a,.34,.24))}),s}function yv(i,t,e,n){const s=n===0?28:n===1?16:10,o=n===0?16:n===1?10:6,a=i.boneIndexMap.get(`tailFinHinge_${t}`),r=i.boneIndexMap.get(`tailFin_${t}_1`),l=i.boneIndexMap.get(`tailFin_${t}_3`),c=i.boneIndexMap.get(`tailFin_${t}_5`),h=-3.22,u=-4.08;return As(s,o,(d,f)=>{const g=$.lerp(h,u,d),v=e*.016,m=.116,p=Math.sin(Math.pow(d,.6)*Math.PI),M=.455*p*(1+.1*Math.sin(d*Math.PI*2-.6)),w=.095*Math.sin(Math.min(1,d/.52)*Math.PI)*(d<.52?1:0),_=-.115*Math.sin(Math.max(0,(d-.5)/.5)*Math.PI),A=g+w+_,b=v+e*M,S=m+.012*p,E=Math.sin(d*Math.PI*5)*.0028*Math.sin(f*Math.PI)*p,y=new T($.lerp(v,b,f),$.lerp(m,S,f)+E,$.lerp(g,A,f)),x=Math.max(0,1-d*2.2),P=Math.max(0,(d-.55)*2.2),C=Math.max(0,1-x-P),R=Be([a,r,l,c],[.25,x*.75,C*.75,P*.75]);return{pos:y,skin:R,thinness:.54+.44*f,pinkStripe:Us(.32,.94,f)*.52,iceBlue:.34*(1-f*.35)}})}function bv(i,t){const e=t===0?84:t===1?48:28,n=t===0?10:6,s=["tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest"],o=s.map(M=>i.boneIndexMap.get(M)),a=s.map(M=>i.bindWorldPositions.get(M));new Fn([new T(0,.14,-3.02),new T(0,.23,-2.24),new T(0,.45,-1.5),new T(0,.82,-.78),new T(0,.94,-.32),new T(0,1.01,.18),new T(0,1.07,.6)]);const r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*3),h=new Float32Array(r*2),u=new Float32Array(r*4),d=new Uint16Array(r*4),f=new Float32Array(r*4);for(let M=0;M<=e;M++){const w=M/e,_=$.lerp(-3.02,.66,w),A=tv(_),b=A.point,S=A.up,E=Us(0,.14,w)*Us(1,.82,w),y=(.012+.024*Math.sin(Math.pow(w,.78)*Math.PI))*E,x=.015*(.45+.55*E),P=Xn(b,o,a,3.8);for(let C=0;C<=n;C++){const R=C/n,L=Math.sin(R*Math.PI),D=Math.cos(R*Math.PI)*x*(1-.55*L),k=-.016+(y+.016)*Math.pow(L,.9),B=b.clone().addScaledVector(S,k);B.x=D;const F=B.clone().addScaledVector(S,y*.35*L),H=M*(n+1)+C;l[H*3]=B.x,l[H*3+1]=B.y,l[H*3+2]=B.z,c[H*3]=F.x,c[H*3+1]=F.y,c[H*3+2]=F.z,h[H*2]=w*3,h[H*2+1]=R,u[H*4]=.08,u[H*4+1]=L*.72,u[H*4+2]=L*.28,u[H*4+3]=L*.88,d.set(P.indices,H*4),f.set(P.weights,H*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let M=0;M<e;M++)for(let w=0;w<n;w++){const _=M*(n+1)+w,A=(M+1)*(n+1)+w,b=(M+1)*(n+1)+(w+1),S=M*(n+1)+(w+1);g[v++]=_,g[v++]=b,g[v++]=A,g[v++]=_,g[v++]=S,g[v++]=b}const m=new Xt;m.setAttribute("position",new q(l,3)),m.setAttribute("uv",new q(h,2)),m.setAttribute("uv1",new q(h,2)),m.setAttribute("aAnatomyData",new q(u,4)),m.setAttribute("skinIndex",new fe(d,4)),m.setAttribute("skinWeight",new Yt(f,4)),m.setIndex(new q(g,1));const p=new q(c,3);return p.name="dorsalFlex",m.morphAttributes.position=[p],m.computeVertexNormals(),m}function Sv(){const i=B_(),t=K_(),e=new Gn;e.name="LightFury_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s=[],o={},a={};for(const l of[0,1,2]){const c=new Gn;c.name=`LightFury_LOD${l}`;const h=nv(i,l),u=rv(i,l),d=mv(i,l),f=Ve([h,u.jawSkinGeometry,d.wingSparsSkinGeometry]),g=u.clawsGeometry,v=(R,L,D,k=!0,B=!0)=>{const F=new Wh(L,D);return F.name=`${R}_LOD${l}`,F.castShadow=k,F.receiveShadow=B,F.frustumCulled=!1,F.bind(i.skeleton,new ee),F},m=v("LightFuryBodyAndHeadSkin",f,t.skinMaterial),p=v("LightFuryIridescentWingsAndHeartTail",d.wingMembraneGeometry,t.wingMembraneMaterial),M=v("LightFuryContinuousDorsalSail",d.dorsalSpinesGeometry,t.skinMaterial);n.push(M);const w=v("LightFuryOralGums",u.oralGumsGeometry,t.oralGumMaterial,!1,!0),_=v("LightFuryRetractableTeeth",u.teethGeometry,t.teethMaterial,!0,!0),A=v("LightFuryArticulatedTongue",u.tongueGeometry,t.tongueMaterial,!1,!0),b=v("LightFurySkyBlueIrises",u.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),S=v("LightFuryRefractiveCorneas",u.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1),E=v("LightFurySlatePearlClaws",g,t.clawMaterial,!0,!0);for(const R of[m,M,E,w,_,A,b])R.renderOrder=11;S.renderOrder=12,p.renderOrder=13;const y=[m,p,M,w,_,A,b,S,E],x=[["LFDepth_BodySkin",f,t.hullDepthMaterial,!1],["LFDepth_WingMembrane",d.wingMembraneGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_DorsalSail",d.dorsalSpinesGeometry,t.hullDepthMaterial,!0],["LFDepth_Gums",u.oralGumsGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_Teeth",u.teethGeometry,t.hullDepthMaterial,!1],["LFDepth_Tongue",u.tongueGeometry,t.hullDepthMaterial,!1],["LFDepth_Irises",u.irisGeometry,t.hullDepthMaterial,!1],["LFDepth_Claws",g,t.hullDepthMaterial,!1]];for(const[R,L,D,k]of x){const B=v(R,L,D,!1,!1);B.renderOrder=10,B.visible=!1,B.userData.excludeFromExport=!0,c.add(B),s.push(B),k&&n.push(B)}let P=0,C=0;for(const R of y){c.add(R);const L=R.geometry.getIndex();P+=L?L.count/3:R.geometry.getAttribute("position").count/3,C+=R.geometry.getAttribute("position").count}c.visible=l===0,e.add(c),o[l]=c,a[l]={lod:l,triangles:Math.round(P),vertices:C,subMeshCount:y.length}}const r={rootGroup:e,rig:i,materials:t,lodGroups:o,dorsalSailMeshes:n,hullDepthMeshes:s,lodStats:a,activeLOD:0,autoLOD:!1,setActiveLOD(l){r.activeLOD=l;for(const c of[0,1,2])o[c].visible=c===l},updateAutoLOD(l){if(!r.autoLOD)return r.activeLOD;const c=l<9.5?0:l<20?1:2;return c!==r.activeLOD&&r.setActiveLOD(c),r.activeLOD}};return r}function rh(){return new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})})}function Av(){const i=document.getElementById("loading-curtain"),t=document.getElementById("lc-progress-fill"),e=document.getElementById("lc-stage-text"),n=document.getElementById("lc-pct-text");let s=2;const o=(a,r)=>{s=Math.max(s,Math.min(100,a)),t&&(t.style.width=`${s.toFixed(1)}%`),n&&(n.textContent=`${String(Math.round(s)).padStart(2,"0")}%`),r&&e&&(e.textContent=r)};return o(4,"Preparing WebGL2 twilight canvas…"),{async advanceTo(a,r){o(a,r),await rh()},async completeAndDissolve(a){o(100,"The horizon is ready."),await rh(),await new Promise(r=>setTimeout(r,260)),i&&(i.classList.add("is-dissolving"),setTimeout(()=>{i.remove()},1250)),a.classList.remove("hud-entering")}}}const lh={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class da{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new Uv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new qv(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,s){const o=new Fv,a=[];for(let r=0,l=this.pluginCallbacks.length;r<l;r++)a.push(this.pluginCallbacks[r](o));o.setPlugins(a),o.setTextureUtils(this.textureUtils),o.writeAsync(t,e,s).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(s,o){n.parse(t,s,o,e)})}}const we={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},hr="KHR_mesh_quantization",Cn={};Cn[wn]=we.NEAREST;Cn[Sh]=we.NEAREST_MIPMAP_NEAREST;Cn[qs]=we.NEAREST_MIPMAP_LINEAR;Cn[Vn]=we.LINEAR;Cn[Yo]=we.LINEAR_MIPMAP_NEAREST;Cn[Mi]=we.LINEAR_MIPMAP_LINEAR;Cn[xi]=we.CLAMP_TO_EDGE;Cn[qn]=we.REPEAT;Cn[ea]=we.MIRRORED_REPEAT;const ch={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Ev=new Dt,hh=12,Tv=1179937895,Cv=2,uh=8,Pv=1313821514,Rv=5130562;function Js(i,t){return i.length===t.length&&i.every(function(e,n){return e===t[n]})}function Lv(i){return new TextEncoder().encode(i).buffer}function Iv(i){return Js(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Dv(i,t,e){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let o=0;o<i.itemSize;o++){let a;i.itemSize>4?a=i.array[s*i.itemSize+o]:(o===0?a=i.getX(s):o===1?a=i.getY(s):o===2?a=i.getZ(s):o===3&&(a=i.getW(s)),i.normalized===!0&&(a=$.normalize(a,i.array))),n.min[o]=Math.min(n.min[o],a),n.max[o]=Math.max(n.max[o],a)}return n}function Su(i){return Math.ceil(i/4)*4}function ur(i,t=0){const e=Su(i.byteLength);if(e!==i.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(i)),t!==0)for(let s=i.byteLength;s<e;s++)n[s]=t;return n.buffer}return i}function dh(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function ph(i,t){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),i.convertToBlob({type:t,quality:e})}class Fv{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+pa}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const s=this,o=s.buffers,a=s.json;n=s.options;const r=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(o,{type:"application/octet-stream"}),h=Object.keys(r),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const f=ur(d.result),g=new DataView(new ArrayBuffer(uh));g.setUint32(0,f.byteLength,!0),g.setUint32(4,Rv,!0);const v=ur(Lv(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(uh));m.setUint32(0,v.byteLength,!0),m.setUint32(4,Pv,!0);const p=new ArrayBuffer(hh),M=new DataView(p);M.setUint32(0,Tv,!0),M.setUint32(4,Cv,!0);const w=hh+m.byteLength+v.byteLength+g.byteLength+f.byteLength;M.setUint32(8,w,!0);const _=new Blob([p,m,v,g,f],{type:"application/octet-stream"}),A=new FileReader;A.readAsArrayBuffer(_),A.onloadend=function(){e(A.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const f=d.result;a.buffers[0].uri=f,e(a)}}else e(a)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const o=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&o.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const a in o.gltfExtensions)e.extensions[a]=o.gltfExtensions[a],s[a]=!0;delete o.gltfExtensions}Object.keys(o).length>0&&(e.extras=o)}catch(o){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+o.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new T;for(let s=0,o=t.count;s<o;s++)if(Math.abs(n.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),s=new T;for(let o=0,a=n.count;o<a;o++)s.fromBufferAttribute(n,o),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(o,s.x,s.y,s.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(s.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(f){return f.colorSpace===rn?function(v){return v<.04045?v*.0773993808:Math.pow(v*.9478672986+.0521327014,2.4)}:function(v){return v}}t instanceof $a&&(t=await this.decompressTextureAsync(t)),e instanceof $a&&(e=await this.decompressTextureAsync(e));const s=t?t.image:null,o=e?e.image:null,a=Math.max(s?s.width:0,o?o.width:0),r=Math.max(s?s.height:0,o?o.height:0),l=dh();l.width=a,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,r);const h=c.getImageData(0,0,a,r);if(s){c.drawImage(s,0,0,a,r);const f=n(t),g=c.getImageData(0,0,a,r).data;for(let v=2;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}if(o){c.drawImage(o,0,0,a,r);const f=n(e),g=c.getImageData(0,0,a,r).data;for(let v=1;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}c.putImageData(h,0,0);const d=(t||e).clone();return d.source=new ma(l),d.colorSpace=In,d.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,s,o){const a=this.json;a.bufferViews||(a.bufferViews=[]);let r;switch(e){case we.BYTE:case we.UNSIGNED_BYTE:r=1;break;case we.SHORT:case we.UNSIGNED_SHORT:r=2;break;default:r=4}let l=t.itemSize*r;o===we.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Su(s*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let g=n;g<n+s;g++){for(let v=0;v<t.itemSize;v++){let m;t.itemSize>4?m=t.array[g*t.itemSize+v]:(v===0?m=t.getX(g):v===1?m=t.getY(g):v===2?m=t.getZ(g):v===3&&(m=t.getW(g)),t.normalized===!0&&(m=$.normalize(m,t.array))),e===we.FLOAT?h.setFloat32(u,m,!0):e===we.INT?h.setInt32(u,m,!0):e===we.UNSIGNED_INT?h.setUint32(u,m,!0):e===we.SHORT?h.setInt16(u,m,!0):e===we.UNSIGNED_SHORT?h.setUint16(u,m,!0):e===we.BYTE?h.setInt8(u,m):e===we.UNSIGNED_BYTE&&h.setUint8(u,m),u+=r}u%l!==0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return o!==void 0&&(d.target=o),o===we.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const o=new FileReader;o.readAsArrayBuffer(t),o.onloadend=function(){const a=ur(o.result),r={buffer:e.processBuffer(a),byteOffset:e.byteOffset,byteLength:a.byteLength};e.byteOffset+=a.byteLength,s(n.bufferViews.push(r)-1)}})}processAccessor(t,e,n,s){const o=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let r;if(t.array.constructor===Float32Array)r=we.FLOAT;else if(t.array.constructor===Int32Array)r=we.INT;else if(t.array.constructor===Uint32Array)r=we.UNSIGNED_INT;else if(t.array.constructor===Int16Array)r=we.SHORT;else if(t.array.constructor===Uint16Array)r=we.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)r=we.BYTE;else if(t.array.constructor===Uint8Array)r=we.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;const l=Dv(t,n,s);let c;e!==void 0&&(c=t===e.index?we.ELEMENT_ARRAY_BUFFER:we.ARRAY_BUFFER);const h=this.processBufferView(t,r,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:r,count:s,max:l.max,min:l.min,type:a[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),o.accessors||(o.accessors=[]),o.accessors.push(u)-1}processImage(t,e,n,s="image/png"){if(t!==null){const o=this,a=o.cache,r=o.json,l=o.options,c=o.pending;a.images.has(t)||a.images.set(t,{});const h=a.images.get(t),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];r.images||(r.images=[]);const d={mimeType:s},f=dh();f.width=Math.min(t.width,l.maxTextureSize),f.height=Math.min(t.height,l.maxTextureSize);const g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),t.data!==void 0){e!==Tn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const m=new Uint8ClampedArray(t.height*t.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=t.data[p+0],m[p+1]=t.data[p+1],m[p+2]=t.data[p+2],m[p+3]=t.data[p+3];g.putImageData(new ImageData(m,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(ph(f,s).then(m=>o.processBufferViewImage(m)).then(m=>{d.bufferView=m})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):c.push(ph(f,s).then(m=>new FileReader().readAsDataURL(m)).then(m=>{d.uri=m}));const v=r.images.push(d)-1;return h[u]=v,v}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:Cn[t.magFilter],minFilter:Cn[t.minFilter],wrapS:Cn[t.wrapS],wrapT:Cn[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,s=this.cache,o=this.json;if(s.textures.has(t))return s.textures.get(t);o.textures||(o.textures=[]),t instanceof $a&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let a=t.userData.mimeType;a==="image/webp"&&(a="image/png");const r={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,a)};t.name&&(r.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,r)});const l=o.textures.push(r)-1;return s.textures.set(t,l),l}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const o=t.color.toArray().concat([t.opacity]);if(Js(o,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=o),t.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=t.metalness,s.pbrMetallicRoughness.roughnessFactor=t.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const r=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(r),texCoord:r.channel};this.applyTextureTransform(l,r),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const r={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(r,t.map),s.pbrMetallicRoughness.baseColorTexture=r}if(t.emissive){const r=t.emissive;if(Math.max(r.r,r.g,r.b)>0&&(s.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const c={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(c,t.emissiveMap),s.emissiveTexture=c}}if(t.normalMap){const r={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(r.scale=t.normalScale.x),this.applyTextureTransform(r,t.normalMap),s.normalTexture=r}if(t.aoMap){const r={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(r.strength=t.aoMapIntensity),this.applyTextureTransform(r,t.aoMap),s.occlusionTexture=r}t.transparent?s.alphaMode="BLEND":t.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=t.alphaTest),t.side===ln&&(s.doubleSided=!0),t.name!==""&&(s.name=t.name),this.serializeUserData(t,s),await this._invokeAllAsync(async function(r){r.writeMaterialAsync&&await r.writeMaterialAsync(t,s)});const a=n.materials.push(s)-1;return e.materials.set(t,a),a}async processMeshAsync(t){const e=this.cache,n=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let _=0,A=t.material.length;_<A;_++)s.push(t.material[_].uuid);else s.push(t.material.uuid);const o=s.join(":");if(e.meshes.has(o))return e.meshes.get(o);const a=t.geometry;let r;t.isLineSegments?r=we.LINES:t.isLineLoop?r=we.LINE_LOOP:t.isLine?r=we.LINE_STRIP:t.isPoints?r=we.POINTS:r=t.material.wireframe?we.LINES:we.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in a.attributes){if(_.slice(0,5)==="morph")continue;const A=a.attributes[_];if(_=d[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),e.attributes.has(this.getUID(A))){c[_]=e.attributes.get(this.getUID(A));continue}g=null;const S=A.array;_==="JOINTS_0"&&!(S instanceof Uint16Array)&&!(S instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new q(new Uint16Array(S),A.itemSize,A.normalized)):(S instanceof Uint32Array||S instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=da.Utils.toFloat32BufferAttribute(A));const E=this.processAccessor(g||A,a);E!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,A),c[_]=E,e.attributes.set(this.getUID(A),E))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const _=[],A=[],b={};if(t.morphTargetDictionary!==void 0)for(const S in t.morphTargetDictionary)b[t.morphTargetDictionary[S]]=S;for(let S=0;S<t.morphTargetInfluences.length;++S){const E={};let y=!1;for(const x in a.morphAttributes){if(x!=="position"&&x!=="normal"){y||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),y=!0);continue}const P=a.morphAttributes[x][S],C=x.toUpperCase(),R=a.attributes[x];if(e.attributes.has(this.getUID(P,!0))){E[C]=e.attributes.get(this.getUID(P,!0));continue}const L=P.clone();if(!a.morphTargetsRelative)for(let D=0,k=P.count;D<k;D++)for(let B=0;B<P.itemSize;B++)B===0&&L.setX(D,P.getX(D)-R.getX(D)),B===1&&L.setY(D,P.getY(D)-R.getY(D)),B===2&&L.setZ(D,P.getZ(D)-R.getZ(D)),B===3&&L.setW(D,P.getW(D)-R.getW(D));E[C]=this.processAccessor(L,a),e.attributes.set(this.getUID(R,!0),E[C])}u.push(E),_.push(t.morphTargetInfluences[S]),t.morphTargetDictionary!==void 0&&A.push(b[S])}l.weights=_,A.length>0&&(l.extras={},l.extras.targetNames=A)}const v=Array.isArray(t.material);if(v&&a.groups.length===0)return null;let m=!1;if(v&&a.index===null){const _=[];for(let A=0,b=a.attributes.position.count;A<b;A++)_[A]=A;a.setIndex(_),m=!0}const p=v?t.material:[t.material],M=v?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,A=M.length;_<A;_++){const b={mode:r,attributes:c};if(this.serializeUserData(a,b),u.length>0&&(b.targets=u),a.index!==null){let E=this.getUID(a.index);(M[_].start!==void 0||M[_].count!==void 0)&&(E+=":"+M[_].start+":"+M[_].count),e.attributes.has(E)?b.indices=e.attributes.get(E):(b.indices=this.processAccessor(a.index,a,M[_].start,M[_].count),e.attributes.set(E,b.indices)),b.indices===null&&delete b.indices}const S=await this.processMaterialAsync(p[M[_].materialIndex]);S!==null&&(b.material=S),h.push(b)}m===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(t,l)});const w=n.meshes.push(l)-1;return e.meshes.set(o,w),w}detectMeshQuantization(t,e){if(this.extensionsUsed[hr])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const s=t.split("_",1)[0];lh[s]&&lh[s].includes(n)&&(this.extensionsUsed[hr]=!0,this.extensionsRequired[hr]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:$.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),t=da.Utils.mergeMorphTargetTracks(t.clone(),e);const o=t.tracks,a=[],r=[];for(let l=0;l<o.length;++l){const c=o[l],h=Te.parseTrackName(c.name);let u=Te.findNode(e,h.nodeName);const d=ch[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const f=1;let g=c.values.length/c.times.length;d===ch.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let v;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(v="CUBICSPLINE",g/=3):c.getInterpolation()===ju?v="STEP":v="LINEAR",r.push({input:this.processAccessor(new q(c.times,f)),output:this.processAccessor(new q(c.values,g)),interpolation:v}),a.push({sampler:r.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:r,channels:a}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,s=e.nodes[n.get(t)],o=t.skeleton;if(o===void 0)return null;const a=t.skeleton.bones[0];if(a===void 0)return null;const r=[],l=new Float32Array(o.bones.length*16),c=new ee;for(let u=0;u<o.bones.length;++u)r.push(n.get(o.bones[u])),c.copy(o.boneInverses[u]),c.multiply(t.bindMatrix).toArray(l,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new q(l,16)),joints:r,skeleton:n.get(a)}),s.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,s=this.nodeMap;e.nodes||(e.nodes=[]);const o={};if(n.trs){const r=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();Js(r,[0,0,0,1])||(o.rotation=r),Js(l,[0,0,0])||(o.translation=l),Js(c,[1,1,1])||(o.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),Iv(t.matrix)===!1&&(o.matrix=t.matrix.elements);if(t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o),t.isMesh||t.isLine||t.isPoints){const r=await this.processMeshAsync(t);r!==null&&(o.mesh=r)}else t.isCamera&&(o.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const r=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&r.push(u)}}r.length>0&&(o.children=r)}await this._invokeAllAsync(function(r){r.writeNode&&r.writeNode(t,o)});const a=e.nodes.push(o)-1;return s.set(t,a),a}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);const o=[];for(let a=0,r=t.children.length;a<r;a++){const l=t.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&o.push(c)}}o.length>0&&(s.nodes=o),this.serializeUserData(t,s)}async processObjectsAsync(t){const e=new oa;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});const n=[];for(let s=0;s<t.length;s++)t[s]instanceof oa?await this.processSceneAsync(t[s]):n.push(t[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class Uv{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,s=n.json,o=n.extensionsUsed,a={};t.name&&(a.name=t.name),a.color=t.color.toArray(),a.intensity=t.intensity,t.isDirectionalLight?a.type="directional":t.isPointLight?(a.type="point",t.distance>0&&(a.range=t.distance)):t.isSpotLight&&(a.type="spot",t.distance>0&&(a.range=t.distance),a.spot={},a.spot.innerConeAngle=(1-t.penumbra)*t.angle,a.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),o[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},o[this.name]=!0);const r=s.extensions[this.name].lights;r.push(a),e.extensions=e.extensions||{},e.extensions[this.name]={light:r.length-1}}}class Nv{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class kv{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.clearcoatFactor=t.clearcoat,t.clearcoatMap){const a={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(a,t.clearcoatMap),o.clearcoatTexture=a}if(o.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,t.clearcoatRoughnessMap),o.clearcoatRoughnessTexture=a}if(t.clearcoatNormalMap){const a={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(a.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(a,t.clearcoatNormalMap),o.clearcoatNormalTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Bv{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const s=this.writer.extensionsUsed,o={};o.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class zv{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.iridescenceFactor=t.iridescence,t.iridescenceMap){const a={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(a,t.iridescenceMap),o.iridescenceTexture=a}if(o.iridescenceIor=t.iridescenceIOR,o.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const a={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(a,t.iridescenceThicknessMap),o.iridescenceThicknessTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Ov{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.transmissionFactor=t.transmission,t.transmissionMap){const a={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(a,t.transmissionMap),o.transmissionTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Hv{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.thicknessFactor=t.thickness,t.thicknessMap){const a={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(a,t.thicknessMap),o.thicknessTexture=a}t.attenuationDistance!==1/0&&(o.attenuationDistance=t.attenuationDistance),o.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Vv{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const s=this.writer.extensionsUsed,o={};o.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Wv{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(Ev)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.specularIntensityMap){const a={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(a,t.specularIntensityMap),o.specularTexture=a}if(t.specularColorMap){const a={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(a,t.specularColorMap),o.specularColorTexture=a}o.specularFactor=t.specularIntensity,o.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Gv{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.sheenRoughnessMap){const a={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(a,t.sheenRoughnessMap),o.sheenRoughnessTexture=a}if(t.sheenColorMap){const a={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(a,t.sheenColorMap),o.sheenColorTexture=a}o.sheenRoughnessFactor=t.sheenRoughness,o.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Xv{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.anisotropyMap){const a={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(a,t.anisotropyMap),o.anisotropyTexture=a}o.anisotropyStrength=t.anisotropy,o.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Yv{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,o={};o.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class $v{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.bumpMap){const a={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(a,t.bumpMap),o.bumpTexture=a}o.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class qv{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,s=t,o=new Float32Array(s.count*3),a=new Float32Array(s.count*4),r=new Float32Array(s.count*3),l=new ee,c=new T,h=new je,u=new T;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,h,u),c.toArray(o,f*3),h.toArray(a,f*4),u.toArray(r,f*3);const d={TRANSLATION:n.processAccessor(new q(o,3)),ROTATION:n.processAccessor(new q(a,4)),SCALE:n.processAccessor(new q(r,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}da.Utils={insertKeyframe:function(i,t){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),o=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n));let r;if(i.times.length===0){s[0]=t;for(let l=0;l<n;l++)o[l]=0;r=0}else if(t<i.times[0]){if(Math.abs(i.times[0]-t)<.001)return 0;s[0]=t,s.set(i.times,1),o.set(a.evaluate(t),0),o.set(i.values,n),r=0}else if(t>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-t)<.001)return i.times.length-1;s[s.length-1]=t,s.set(i.times,0),o.set(i.values,0),o.set(a.evaluate(t),i.values.length),r=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-t)<.001)return l;if(i.times[l]<t&&i.times[l+1]>t){s.set(i.times.slice(0,l+1),0),s[l+1]=t,s.set(i.times.slice(l+1),l+2),o.set(i.values.slice(0,(l+1)*n),0),o.set(a.evaluate(t),(l+1)*n),o.set(i.values.slice((l+1)*n),(l+2)*n),r=l+1;break}}return i.times=s,i.values=o,r},mergeMorphTargetTracks:function(i,t){const e=[],n={},s=i.tracks;for(let o=0;o<s.length;++o){let a=s[o];const r=Te.parseTrackName(a.name),l=Te.findNode(t,r.nodeName);if(r.propertyName!=="morphTargetInfluences"||r.propertyIndex===void 0){e.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Zu)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[r.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+r.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const f=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)f[g*c+h]=u.values[g];u.name=(r.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,e.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+h]=d.evaluate(u.times[f]);for(let f=0;f<a.times.length;f++){const g=this.insertKeyframe(u,a.times[f]);u.values[g*c+h]=a.values[f]}}return i.tracks=e,i},toFloat32BufferAttribute:function(i){const t=new q(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let e=0,n=i.count;e<n;e++)for(let s=0;s<i.itemSize;s++)t.setComponent(e,s,i.getComponent(e,s));return t}};async function jv(i,t){const e=new da;i.updateMatrixWorld(!0);const n=[];i.traverse(l=>{l.userData?.excludeFromExport&&l.visible&&(l.visible=!1,n.push(l))});let s;try{s=await new Promise((l,c)=>{e.parse(i,h=>{h instanceof ArrayBuffer?l(h):c(new Error("Expected binary ArrayBuffer from GLTFExporter"))},h=>c(h),{binary:!0,onlyVisible:!0,maxTextureSize:1024})})}finally{for(const l of n)l.visible=!0}const o=new Blob([s],{type:"model/gltf-binary"}),a=URL.createObjectURL(o),r=document.createElement("a");return r.href=a,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(a),5e3),{filename:t,sizeMB:s.byteLength/(1024*1024)}}async function Au(i,t,e=i.activeLOD){const n=i.activeLOD,s=i.autoLOD;i.autoLOD=!1,i.setActiveLOD(e);try{return await jv(i.rootGroup,`${t}-lod${e}.glb`)}finally{i.setActiveLOD(n),i.autoLOD=s}}async function Zv(i,t=i.activeLOD){return Au(i,"toothless-hidden-world",t)}async function Kv(i,t=i.activeLOD){return Au(i,"light-fury-hidden-world",t)}const Jo=[{id:"twin-pair",label:"Twin Furies Perch",position:new T(.05,2.75,11.4),target:new T(0,.98,-.12)},{id:"light-fury-hero",label:"Light Fury 3/4",position:new T(-6.85,1.68,3.15),target:new T(-4.42,1,.25)},{id:"light-fury-face",label:"Light Fury Portrait",position:new T(-3.65,1.64,2.38),target:new T(-4.22,1.5,1.55)},{id:"toothless-hero",label:"Toothless 3/4",position:new T(7.15,1.82,3.68),target:new T(4.42,1.06,.55)},{id:"toothless-paws-scales",label:"Scales & Claws Study",position:new T(6.15,.96,2.95),target:new T(4.52,.62,1.25)},{id:"waterfall-islands",label:"Waterfall Double-Isle",position:new T(14.5,8.2,16),target:new T(-56,-1.5,-28)},{id:"sea-arch-drangar",label:"Sea-Arch & Clett",position:new T(28,5.4,2.5),target:new T(54.5,-1.8,20.5)},{id:"crescent-lagoon",label:"Crescent Lagoon",position:new T(24,38,-12),target:new T(84,-6,34)},{id:"archipelago-aerial",label:"Archipelago Panorama",position:new T(18,68,108),target:new T(-4,-4,-24)}];function Mn(i){const t=parseFloat(i.min||"0"),e=parseFloat(i.max||"1"),n=parseFloat(i.value||"0"),s=e>t?(n-t)/(e-t)*100:50;i.style.setProperty("--fill-pct",`${Math.max(0,Math.min(100,s)).toFixed(1)}%`)}function Qv(i,t,e,n,s,o,a){let r=!1,l=window.innerWidth<=780,c=!0,h=1,u=null;i.classList.toggle("drawer-collapsed",l);const d=t.rig.bones.length+n.rig.bones.length,f=document.createElement("div");f.className="hud-toast",i.appendChild(f);const g=document.createElement("div");g.className="shutter-flash",i.appendChild(g);const v=lt=>{f.textContent=lt,f.classList.add("visible"),u!==null&&window.clearTimeout(u),u=window.setTimeout(()=>{f.classList.remove("visible")},2200)},m=()=>{g.classList.add("flash"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{g.classList.remove("flash")})})},p=document.createElement("div");p.className="hud-header",p.innerHTML=`
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
  `,i.appendChild(p);const M=p.querySelector("#tel-fps"),w=p.querySelector("#tel-lod"),_=p.querySelector("#btn-cursor-gaze"),A=p.querySelector("#btn-photo"),b=p.querySelector("#btn-fullscreen"),S=p.querySelector("#btn-help"),E=p.querySelector("#btn-toggle-hud"),y=document.createElement("button");y.className="drawer-reopen-btn hud-collapsible",y.title="Open Character & Atmosphere Atelier [Tab]",y.innerHTML='<span>Open Atelier</span><span class="kbd-hint">Tab</span>',i.appendChild(y);const x=lt=>{l=lt,i.classList.toggle("drawer-collapsed",l)};y.addEventListener("click",()=>x(!1));const P=()=>{r=!r,i.classList.toggle("hud-hidden",r),E.innerHTML=r?'Show UI <span class="kbd-hint">H</span>':'Cinema <span class="kbd-hint">H</span>'};E.addEventListener("click",P);const C=()=>{c=!c,_.classList.toggle("is-active",c),a.onToggleCursorGaze(c),v(c?"Interactive Cursor Gaze enabled":"Sculpted Manual Gaze locked")};_.addEventListener("click",C),A.addEventListener("click",()=>{a.onCaptureSnapshot()});const R=()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})};b.addEventListener("click",R),document.addEventListener("fullscreenchange",()=>{b.classList.toggle("is-active",!!document.fullscreenElement)});const L=document.createElement("div");L.className="help-backdrop",L.innerHTML=`
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
  `,i.appendChild(L);const D=lt=>{const Tt=lt??!L.classList.contains("open");L.classList.toggle("open",Tt),S.classList.toggle("is-active",Tt)};S.addEventListener("click",()=>D()),L.querySelector("#btn-help-close").addEventListener("click",()=>D(!1)),L.addEventListener("click",lt=>{lt.target===L&&D(!1)});const k=document.createElement("div");k.className="flight-bar hud-collapsible",k.innerHTML=`
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
  `,i.appendChild(k);const B=k.querySelector("#btn-flight-play"),F=k.querySelector("#flight-play-icon"),H=k.querySelector("#flight-play-text"),V=k.querySelector("#btn-flight-reset"),Y=k.querySelector("#flight-phase-label"),Z=k.querySelector("#flight-time-label"),X=k.querySelector("#flight-scrubber"),W=k.querySelector("#btn-flight-speed"),O=k.querySelector("#btn-flight-cam"),st=k.querySelector("#btn-flight-loop"),at=Array.from(k.querySelectorAll(".flight-mode-pill"));let j=!1;const K=()=>{const lt=o.getPhaseInfo(),Tt=lt.isPlaying&&!lt.isPaused;k.classList.toggle("playing",Tt);const At=lt.subjectMode==="duet"?"Begin Courtship Flight":lt.subjectMode==="light-fury"?"Fly Light Fury":"Fly Toothless";lt.isPlaying?lt.isPaused?(F.innerHTML="&#9654;",H.textContent="Resume Flight",Y.textContent=`${lt.phaseLabel} (Paused)`):(F.innerHTML="&#10074;&#10074;",H.textContent="Pause Flight",Y.textContent=lt.phaseLabel):(F.innerHTML="&#9654;",H.textContent=At,Y.innerHTML=lt.subjectMode==="duet"?"Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown":"Perched Ready &mdash; Solo Takeoff, Sea Soar &amp; Landing"),Z.textContent=`${lt.elapsedSec.toFixed(1)}s / ${lt.durationSec.toFixed(1)}s`,j||(X.value=String(lt.progress),Mn(X)),O.classList.toggle("active",lt.followCamera),st.classList.toggle("active",lt.loop),W.classList.toggle("active",h<.99),W.innerHTML=`${h.toFixed(1)}&times;`,at.forEach(Gt=>Gt.classList.toggle("active",Gt.dataset.fmode===lt.subjectMode))};W.addEventListener("click",()=>{h=h>.75?.5:1,a.onFlightSpeedChange(h),K(),v(h<.75?"0.5× Slow-Motion Wingbeat Study":"1.0× Natural Flight Speed")}),at.forEach(lt=>{lt.addEventListener("click",()=>{const Tt=lt.dataset.fmode;o.setSubjectMode(Tt),K(),De()})}),B.addEventListener("click",()=>{o.togglePlayPause(),K(),De()}),V.addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),K(),De()}),X.addEventListener("pointerdown",()=>{j=!0}),window.addEventListener("pointerup",()=>{j=!1}),X.addEventListener("input",()=>{Mn(X),o.scrubToProgress(parseFloat(X.value)),e.applyRigState(0),s.applyRigState(0),K(),De()}),O.addEventListener("click",()=>{o.followCamera=!o.followCamera,K()}),st.addEventListener("click",()=>{o.loop=!o.loop,K()});const G=document.createElement("div");G.className="camera-bar hud-collapsible";const nt=[],_t=lt=>{const Tt=Jo[lt];Tt&&(o.isPlaying&&(o.stopAndResetToPerch(),K(),De()),nt.forEach((At,Gt)=>At.classList.toggle("active",Gt===lt)),nt[lt]?.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"}),Tt.id.startsWith("light-fury")?yt("light-fury"):Tt.id.startsWith("toothless")&&yt("toothless"),a.onSelectCameraBookmark(Tt))};Jo.forEach((lt,Tt)=>{const At=document.createElement("button");At.className=`cam-btn${Tt===0?" active":""}`,At.title=`${lt.label} [Hotkey ${Tt+1}]`,At.innerHTML=`<span class="cam-btn-idx">${Tt+1}</span><span>${lt.label}</span>`,At.addEventListener("click",()=>_t(Tt)),nt.push(At),G.appendChild(At)}),i.appendChild(G),window.addEventListener("keydown",lt=>{const Tt=document.activeElement?.tagName;if(!(Tt==="INPUT"||Tt==="TEXTAREA")){if(lt.key==="Escape"&&L.classList.contains("open")){D(!1);return}if(lt.key==="?"||lt.key==="/"&&lt.shiftKey){lt.preventDefault(),D();return}if(lt.key==="Tab"){lt.preventDefault(),x(!l);return}if(lt.key==="h"||lt.key==="H")P();else if(lt.key==="c"||lt.key==="C")C();else if(lt.key==="p"||lt.key==="P")a.onCaptureSnapshot();else if(lt.key==="f"||lt.key==="F")R();else if(lt.code==="Space")lt.preventDefault(),o.togglePlayPause(),K(),De();else if(lt.key>="1"&&lt.key<="9"&&!lt.ctrlKey&&!lt.metaKey&&!lt.altKey){const At=parseInt(lt.key,10)-1;At>=0&&At<Jo.length&&_t(At)}}});const J=document.createElement("aside");J.className="rig-drawer hud-collapsible",J.innerHTML=`
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
  `,i.appendChild(J),J.querySelector("#btn-collapse-drawer").addEventListener("click",()=>{x(!0)});const U=J.querySelector("#moments-grid"),rt=J.querySelector("#tab-light-fury"),dt=J.querySelector("#tab-toothless"),wt=J.querySelector("#panel-light-fury"),vt=J.querySelector("#panel-toothless"),Lt=J.querySelector("#panel-shared-world");function yt(lt){rt.classList.toggle("active",lt==="light-fury"),dt.classList.toggle("active",lt==="toothless"),wt.style.display=lt==="light-fury"?"block":"none",vt.style.display=lt==="toothless"?"block":"none"}rt.addEventListener("click",()=>yt("light-fury")),dt.addEventListener("click",()=>yt("toothless"));const z=[];function I(lt,Tt,At=!1){const Gt=document.createElement("div");Gt.className=`accordion-section${At?" open":""}`;const ge=document.createElement("button");ge.className="accordion-header",ge.innerHTML=`<span>${Tt}</span><span class="accordion-chevron">&#9662;</span>`;const _e=document.createElement("div");_e.className="accordion-collapse";const be=document.createElement("div");be.className="accordion-collapse-inner";const Ye=document.createElement("div");return Ye.className="accordion-body",be.appendChild(Ye),_e.appendChild(be),ge.addEventListener("click",()=>{Gt.classList.toggle("open")}),Gt.appendChild(ge),Gt.appendChild(_e),lt.appendChild(Gt),Ye}function et(lt,Tt,At,Gt,ge,_e,be,Ye=.01,$e=!1){const zs=Number(At[ge]),Li=document.createElement("div");Li.className="control-row",Li.title="Double-click slider to reset";const fo=document.createElement("span");fo.className="control-val";const mo=document.createElement("div");mo.className="control-label-line";const Cl=document.createElement("span");Cl.textContent=Tt,mo.appendChild(Cl),mo.appendChild(fo);const Un=document.createElement("input");Un.type="range",Un.min=String(_e),Un.max=String(be),Un.step=String(Ye);const ya=()=>{const Os=Number(At[ge]);Un.value=String(Os),fo.textContent=Os.toFixed(2),Mn(Un)};ya(),z.push(ya),Un.addEventListener("input",()=>{o.isPlaying&&!o.isPaused&&(o.isPaused=!0,K());const Os=parseFloat(Un.value);Gt({[ge]:Os}),fo.textContent=Os.toFixed(2),Mn(Un),$e&&De()}),Un.addEventListener("dblclick",()=>{Gt({[ge]:zs}),ya(),$e&&De(),v(`Reset ${Tt}`)}),Li.appendChild(mo),Li.appendChild(Un),lt.appendChild(Li)}function ft(lt,Tt,At,Gt,ge){const _e=document.createElement("label");_e.className="toggle-row";const be=document.createElement("span");be.textContent=Tt;const Ye=document.createElement("input");Ye.type="checkbox";const $e=()=>{Ye.checked=!!At[ge]};$e(),z.push($e),Ye.addEventListener("change",()=>{Gt({[ge]:Ye.checked}),De()}),_e.appendChild(be),_e.appendChild(Ye),lt.appendChild(_e)}const gt=I(wt,"Light Fury Moods & Expressions",!0),mt=document.createElement("div");mt.className="weather-grid";const Et=[];z_.forEach((lt,Tt)=>{const At=document.createElement("button");At.className=`weather-btn${Tt===0?" active":""}`,At.innerHTML=`
      <span class="weather-btn-title">${lt.label}</span>
      <span class="weather-btn-sub">${lt.subtitle}</span>
    `,At.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),K()),Et.forEach(Gt=>Gt.classList.remove("active")),At.classList.add("active"),s.setState(lt.patch),De()}),Et.push(At),mt.appendChild(At)}),gt.appendChild(mt);const pt=(lt,Tt,At,Gt,ge,_e=.01,be=!1)=>et(lt,Tt,s.state,Ye=>s.setState(Ye),At,Gt,ge,_e,be),Ct=(lt,Tt,At)=>ft(lt,Tt,s.state,Gt=>s.setState(Gt),At),Wt=I(wt,"I. Bioluminescence, Shimmer & Cloak",!0);pt(Wt,"Hidden World Neon Bioluminescence","biolumGlow",0,1),pt(Wt,"Thermal-Mirror Optical Cloak","thermalCloak",0,1),pt(Wt,"Stardust Glimmer & Opal Sheen","iridescentShimmer",0,1),pt(Wt,"Radiant Partly-Glowing Skin","radiantGlow",0,1),pt(Wt,"Underwing Rose & Ice Countershade","pastelTint",0,1),pt(Wt,"Orchid-Cyan Plasma Charge","plasmaGlow",0,1);const xt=I(wt,"II. Gaze, Ears & Expression",!1);pt(xt,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),pt(xt,"Curious Head-Tilt (Roll)","headRoll",-1,1),pt(xt,"Head Yaw (Swan-Neck Coupled)","headYaw",-1,1),pt(xt,"Head Pitch","headPitch",-1,1),pt(xt,"Eye Gaze Horizontal","eyeYaw",-1,1),pt(xt,"Eye Gaze Vertical","eyePitch",-1,1),pt(xt,"Affectionate Squint-Smile","squint",0,1),pt(xt,"Almond Eyelid Blink","blink",0,1),pt(xt,"Rounded Ear-Nubs Perk","earPerk",0,1),pt(xt,"Ear Asymmetry","earAsymmetry",-1,1),pt(xt,"Temple Cheek Nubs","cheekNubFlare",0,1);const Rt=I(wt,"III. Smile, Retractable Fangs & Tongue",!1);pt(Rt,"Jaw Open","jawOpen",0,1),pt(Rt,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),pt(Rt,"Pink Tongue Extend","tongueExtend",0,1),pt(Rt,"Tongue Curl","tongueCurl",-1,1);const qt=document.createElement("button");qt.className="action-btn secondary",qt.textContent="Toggle Soft Gums vs. Strike Fangs";let jt=!1;qt.addEventListener("click",()=>{jt=!jt,jt?s.setState({jawOpen:.68,teethExtension:1,pupilDilation:.1,squint:.36,earPerk:.14}):s.setState({jawOpen:.26,teethExtension:0,pupilDilation:.92,squint:.24,earPerk:.9}),De()}),Rt.appendChild(qt);const kt=I(wt,"IV. Scalloped Wings, Veil & Sail",!1);pt(kt,"Coy Wing-Veil Drape","coyWingVeil",0,1),pt(kt,"Wing Unfurl (Cape ↔ 7.80m Span)","wingUnfurl",0,1),pt(kt,"Wing Flap Elevation","wingFlap",-1,1),pt(kt,"Wing Forward/Dive Sweep","wingSweep",-1,1),pt(kt,"Airfoil Camber","wingCamber",0,1),pt(kt,"Pelvic Glide Flukes","pelvicFinFlare",0,1),pt(kt,"Continuous Dorsal Sail Flex","dorsalSailFlex",0,1);const Jt=I(wt,"V. Symmetrical Heart-Tail Flukes",!1);Ct(Jt,"Sync Heart-Tail Lobes","syncHeartTailFlukes"),pt(Jt,"Right Heart-Lobe Fold","rightHeartFinFlare",-1,1,.01,!0),pt(Jt,"Left Heart-Lobe Fold","leftHeartFinFlare",-1,1,.01,!0),pt(Jt,"Tail Horizontal Sweep","tailYaw",-1,1),pt(Jt,"Tail Vertical Lift","tailPitch",-1,1),pt(Jt,"Feline Tail Curl","tailCurl",-1,1);const Zt=I(wt,"VI. Stance, 4-Paw IK & Flight Legs",!1);pt(Zt,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),pt(Zt,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),pt(Zt,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),pt(Zt,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),pt(Zt,"Swan Neck Arch","neckArch",-1,1),pt(Zt,"Neck Turn","neckYaw",-1,1),pt(Zt,"Spine Arch","spineArch",-1,1),pt(Zt,"Spine Twist","spineTwist",-1,1),Ct(Zt,"Living Idle (Purr & Natural Blinks)","subtleBreathing");const ye=I(vt,"Toothless Moods & Expressions",!0),Q=document.createElement("div");Q.className="weather-grid";const It=[];L_.forEach((lt,Tt)=>{const At=document.createElement("button");At.className=`weather-btn${Tt===0?" active":""}`,At.innerHTML=`
      <span class="weather-btn-title">${lt.label}</span>
      <span class="weather-btn-sub">${lt.subtitle}</span>
    `,At.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),K()),It.forEach(Gt=>Gt.classList.remove("active")),At.classList.add("active"),e.setState(lt.patch),De()}),It.push(At),Q.appendChild(At)}),ye.appendChild(Q);const ot=(lt,Tt,At,Gt,ge,_e=.01,be=!1)=>et(lt,Tt,e.state,Ye=>e.setState(Ye),At,Gt,ge,_e,be),Mt=(lt,Tt,At)=>ft(lt,Tt,e.state,Gt=>e.setState(Gt),At),Ft=I(vt,"I. Alpha Bioluminescence & Lightning",!0);ot(Ft,"Alpha Blue Plasma Glow","alphaGlow",0,1),ot(Ft,"Cavern Bioluminescent Markings","biolumGlow",0,1),ot(Ft,"Lightning-Cloak Mirror Arcs","lightningCloak",0,1);const Pt=I(vt,"II. Head, Ear-Plates & Emerald Eyes",!1);ot(Pt,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),ot(Pt,"Head Yaw (Cervical Coupled)","headYaw",-1,1),ot(Pt,"Head Pitch","headPitch",-1,1),ot(Pt,"Curious Head Roll","headRoll",-1,1),ot(Pt,"Eye Gaze Horizontal","eyeYaw",-1,1),ot(Pt,"Eye Gaze Vertical","eyePitch",-1,1),ot(Pt,"Palpebral Eyelid Blink","blink",0,1),ot(Pt,"Focus Squint","squint",0,1),ot(Pt,"Primary Ear-Plates Perk","earPerk",0,1),ot(Pt,"Ear-Plate Asymmetry","earAsymmetry",-1,1),ot(Pt,"Secondary Cheek Nubs","cheekNubFlare",0,1);const ne=I(vt,"III. Jaw, Retractable Teeth & Tongue",!1);ot(ne,"Jaw Open","jawOpen",0,1),ot(ne,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),ot(ne,"Tongue Extend","tongueExtend",0,1),ot(ne,"Tongue Curl","tongueCurl",-1,1);const Re=document.createElement("button");Re.className="action-btn secondary",Re.textContent='Toggle "Toothless" Gums vs. Fangs';let We=!1;Re.addEventListener("click",()=>{We=!We,We?e.setState({jawOpen:.72,teethExtension:1,pupilDilation:.14,squint:.32}):e.setState({jawOpen:.36,teethExtension:0,pupilDilation:.85,squint:0}),De()}),ne.appendChild(Re);const ct=I(vt,"IV. Wings, Fins & Flush V-Spines",!1);ot(ct,"Wing Unfurl (Cape ↔ 8.56m Span)","wingUnfurl",0,1),ot(ct,"Wing Flap Elevation","wingFlap",-1,1),ot(ct,"Wing Forward/Dive Sweep","wingSweep",-1,1),ot(ct,"Phalangeal Airfoil Camber","wingCamber",0,1),ot(ct,"Pelvic 3-Spar Glide Fins","pelvicFinFlare",0,1),ot(ct,"Dorsal V-Spine Split","dorsalSpineSplit",0,1);const bt=I(vt,"V. Prosthetic Tail & Mechanics",!1);Mt(bt,"Auto-Sync Left Prosthetic Linkage","autoSyncProstheticTail"),ot(bt,"Left Prosthetic Fin Fold","leftProstheticFinFlare",-1,1,.01,!0),ot(bt,"Right Biological Fin Fold","rightTailFinFlare",-1,1,.01,!0),ot(bt,"Tail Horizontal Sweep","tailYaw",-1,1),ot(bt,"Tail Vertical Lift","tailPitch",-1,1),ot(bt,"Distal Tail Whip Curl","tailCurl",-1,1);const zt=I(vt,"VI. Stance, 4-Paw IK & Flight Legs",!1);ot(zt,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),ot(zt,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),ot(zt,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),ot(zt,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),ot(zt,"Neck Arch","neckArch",-1,1),ot(zt,"Neck Turn","neckYaw",-1,1),ot(zt,"Spine Arch","spineArch",-1,1),ot(zt,"Spine Twist","spineTwist",-1,1),Mt(zt,"Living Idle (Breath, Blinks & Twitches)","subtleBreathing");const te=I(Lt,"Archipelago, Sky & North Sea",!0),se=document.createElement("div");se.className="control-label-line";const Ot=_s[a.initialWeatherPreset]??_s["golden-hour"];se.innerHTML=`<span>Coastal Atmosphere</span><span class="control-val" id="weather-preset-desc">${Ot.subtitle}</span>`,te.appendChild(se);const ce=se.querySelector("#weather-preset-desc"),re=document.createElement("div");re.className="weather-grid";const Ce=[],Ie={...Zs},nn=[],Ge=[],Ue=document.createElement("div");Ue.className="control-row",Ue.innerHTML=`
    <div class="control-label-line">
      <span>Sun / Moon Elevation</span>
      <span class="control-val" id="elev-val">${Ot.sunElevationDeg.toFixed(1)}&deg;</span>
    </div>
    <input type="range" id="elev-slider" min="2" max="55" step="0.5" value="${Ot.sunElevationDeg}" />
  `;const sn=Ue.querySelector("#elev-slider"),bn=Ue.querySelector("#elev-val");Mn(sn),sn.addEventListener("input",()=>{const lt=parseFloat(sn.value);bn.textContent=`${lt.toFixed(1)}°`,Mn(sn),a.onSunElevationChange(lt)});const cn=document.createElement("div");cn.className="control-row";const Pn=lt=>Math.min(1,Math.max(0,(lt-6e-4)/.0044)),Zi=lt=>6e-4+lt*.0044,Ki=Pn(Ot.mistDensity);cn.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Mist &amp; Horizon Veil</span>
      <span class="control-val" id="mist-val">${Ki.toFixed(2)}</span>
    </div>
    <input type="range" id="mist-slider" min="0" max="1" step="0.01" value="${Ki.toFixed(2)}" />
  `;const hi=cn.querySelector("#mist-slider"),N=cn.querySelector("#mist-val");Mn(hi),hi.addEventListener("input",()=>{const lt=parseFloat(hi.value);N.textContent=lt.toFixed(2),Mn(hi),a.onMistDensityChange(Zi(lt))});let tt=null;const ht=lt=>{const Tt=_s[lt];if(!Tt)return;Ce.forEach(({id:ge,btn:_e})=>_e.classList.toggle("active",ge===lt)),ce.textContent=Tt.subtitle,sn.value=String(Tt.sunElevationDeg),bn.textContent=`${Tt.sunElevationDeg.toFixed(1)}°`,Mn(sn);const At=Pn(Tt.mistDensity);hi.value=At.toFixed(2),N.textContent=At.toFixed(2),Mn(hi),a.onSelectWeatherPreset(Tt.id);let Gt=null;Tt.id==="stormy-squall"?Gt={idx:3,desc:"Storm Gale",params:{waveAmplitude:2.15,waveSpeed:1.85,seaChoppiness:.96}}:Tt.id==="starlit-night"||Tt.id==="dawn-dusk"?Gt={idx:0,desc:"Calm Fjord",params:{waveAmplitude:.34,waveSpeed:.72,seaChoppiness:.24}}:Gt={idx:1,desc:"Nordic Swell",params:{...Zs}},Gt&&(Ge.forEach((ge,_e)=>ge.classList.toggle("active",_e===Gt.idx)),tt&&(tt.textContent=Gt.desc),Object.assign(Ie,Gt.params),nn.forEach(ge=>ge()),a.onOceanParamsChange(Gt.params))};Object.values(_s).forEach(lt=>{const Tt=document.createElement("button");Tt.className=`weather-btn${lt.id===a.initialWeatherPreset?" active":""}`,Tt.innerHTML=`
      <span class="weather-btn-title">${lt.label}</span>
      <span class="weather-btn-sub">${lt.subtitle}</span>
    `,Tt.addEventListener("click",()=>{ut.forEach(At=>At.classList.remove("active")),ht(lt.id)}),Ce.push({id:lt.id,btn:Tt}),re.appendChild(Tt)}),te.appendChild(re),te.appendChild(Ue),te.appendChild(cn);const ut=[];[{label:"Golden Dusk",toast:"Scene Moment — Golden Dusk Courtship",weather:"golden-hour",lfPatch:{biolumGlow:.12,thermalCloak:0,iridescentShimmer:.68,radiantGlow:.3,plasmaGlow:0},nfPatch:{alphaGlow:0,biolumGlow:.08,lightningCloak:0}},{label:"Biolum Night",toast:"Scene Moment — Hidden World Bioluminescence",weather:"starlit-night",lfPatch:{biolumGlow:.96,thermalCloak:0,iridescentShimmer:.85,radiantGlow:.72,plasmaGlow:.58},nfPatch:{alphaGlow:.92,biolumGlow:.95,lightningCloak:.24}},{label:"Mirror Cloak",toast:"Scene Moment — Light Fury Optical Cloak",weather:"dawn-dusk",lfPatch:{thermalCloak:.88,iridescentShimmer:.96,biolumGlow:.42,plasmaGlow:.32},nfPatch:{alphaGlow:.18,biolumGlow:.22,lightningCloak:0}},{label:"Storm Gale",toast:"Scene Moment — North Sea Lightning Squall",weather:"stormy-squall",lfPatch:{biolumGlow:.54,thermalCloak:0,plasmaGlow:.65,wingUnfurl:.58},nfPatch:{alphaGlow:.86,biolumGlow:.78,lightningCloak:.88,wingUnfurl:.62}}].forEach((lt,Tt)=>{const At=document.createElement("button");At.className=`moment-chip${Tt===0?" active":""}`,At.textContent=lt.label,At.addEventListener("click",()=>{ut.forEach((Gt,ge)=>Gt.classList.toggle("active",ge===Tt)),ht(lt.weather),s.setState(lt.lfPatch),e.setState(lt.nfPatch),De(),v(lt.toast)}),ut.push(At),U.appendChild(At)});const St=document.createElement("div");St.className="control-label-line",St.style.marginTop="11px",St.innerHTML='<span>Irregular North Sea Swells</span><span class="control-val" id="sea-preset-desc">Nordic Swell</span>',te.appendChild(St);const Ut=St.querySelector("#sea-preset-desc");tt=Ut;const Ht=document.createElement("div");Ht.className="segmented-row";const Vt=[{label:"Quiet",desc:"Glassy Fjord",params:{waveAmplitude:.14,waveSpeed:.5,seaChoppiness:.06}},{label:"Swell",desc:"Nordic Swell",params:{...Zs}},{label:"Rough",desc:"Crossed Sea",params:{waveAmplitude:1.65,waveSpeed:1.45,seaChoppiness:.82}},{label:"Storm",desc:"Storm Gale",params:{waveAmplitude:2.3,waveSpeed:1.95,seaChoppiness:1}}];function oe(lt,Tt,At,Gt,ge=.01){const _e=Zs[Tt],be=document.createElement("div");be.className="control-row",be.title="Double-click slider to reset",be.innerHTML=`
      <div class="control-label-line">
        <span>${lt}</span>
        <span class="control-val">${Ie[Tt].toFixed(2)}</span>
      </div>
      <input type="range" min="${At}" max="${Gt}" step="${ge}" value="${Ie[Tt]}" />
    `;const Ye=be.querySelector(".control-val"),$e=be.querySelector("input");Mn($e),nn.push(()=>{$e.value=String(Ie[Tt]),Ye.textContent=Ie[Tt].toFixed(2),Mn($e)}),$e.addEventListener("input",()=>{const zs=parseFloat($e.value);Ie[Tt]=zs,Ye.textContent=zs.toFixed(2),Mn($e),Ge.forEach(Li=>Li.classList.remove("active")),Ut.textContent="Custom Swell",a.onOceanParamsChange({[Tt]:zs})}),$e.addEventListener("dblclick",()=>{Ie[Tt]=_e,$e.value=String(_e),Ye.textContent=_e.toFixed(2),Mn($e),a.onOceanParamsChange({[Tt]:_e}),v(`Reset ${lt}`)}),te.appendChild(be)}Vt.forEach((lt,Tt)=>{const At=document.createElement("button");At.className=`seg-btn${Tt===1?" active":""}`,At.textContent=lt.label,At.addEventListener("click",()=>{Ge.forEach(Gt=>Gt.classList.remove("active")),At.classList.add("active"),Ut.textContent=lt.desc,Object.assign(Ie,lt.params),nn.forEach(Gt=>Gt()),a.onOceanParamsChange(lt.params)}),Ge.push(At),Ht.appendChild(At)}),te.appendChild(Ht),oe("Swell Group Height","waveAmplitude",.05,2.5,.01),oe("Current & Swell Velocity","waveSpeed",.15,2.5,.01),oe("Cross-Chop & Whitecap Foam","seaChoppiness",0,1,.01);const ie=document.createElement("div");ie.className="control-label-line",ie.style.marginTop="11px",ie.innerHTML='<span>Mesh Level-of-Detail</span><span class="control-val" id="lod-mode-label">LOD0 Hero</span>',te.appendChild(ie);const Kt=ie.querySelector("#lod-mode-label"),Me=document.createElement("div");Me.className="segmented-row";const Ee=[{label:"LOD0",mode:"0",desc:"LOD0 Hero"},{label:"LOD1",mode:"1",desc:"LOD1 Mid"},{label:"LOD2",mode:"2",desc:"LOD2 Far"},{label:"Auto",mode:"auto",desc:"Auto Distance"}],Xe=[];Ee.forEach((lt,Tt)=>{const At=document.createElement("button");At.className=`seg-btn${Tt===0?" active":""}`,At.textContent=lt.label,At.addEventListener("click",()=>{if(Xe.forEach(Gt=>Gt.classList.remove("active")),At.classList.add("active"),Kt.textContent=lt.desc,lt.mode==="auto")t.autoLOD=!0,n.autoLOD=!0;else{const Gt=Number(lt.mode);t.autoLOD=!1,n.autoLOD=!1,t.setActiveLOD(Gt),n.setActiveLOD(Gt)}}),Xe.push(At),Me.appendChild(At)}),te.appendChild(Me);const Ne=document.createElement("div");Ne.className="export-btn-grid";const me=document.createElement("button");me.className="action-btn",me.textContent="Light Fury .GLB";const $t=document.createElement("button");$t.className="action-btn",$t.textContent="Toothless .GLB",Ne.appendChild(me),Ne.appendChild($t);const He=document.createElement("div");He.className="export-status";const Se=async lt=>{me.disabled=!0,$t.disabled=!0,He.style.color="",He.textContent="Packaging binary .GLB asset…";try{const Tt=lt==="light-fury"?await Kv(n,n.activeLOD):await Zv(t,t.activeLOD);He.textContent=`Saved ${Tt.filename} (${Tt.sizeMB.toFixed(2)} MB)`,v(`Exported ${Tt.filename}`)}catch(Tt){He.style.color="#f09898",He.textContent=`Export failed: ${Tt.message}`}finally{me.disabled=!1,$t.disabled=!1}};me.addEventListener("click",()=>Se("light-fury")),$t.addEventListener("click",()=>Se("toothless")),te.appendChild(Ne),te.appendChild(He);function De(){for(const lt of z)lt()}return J.querySelector("#btn-reset-pose").addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),Et.forEach((lt,Tt)=>lt.classList.toggle("active",Tt===0)),It.forEach((lt,Tt)=>lt.classList.toggle("active",Tt===0)),ut.forEach((lt,Tt)=>lt.classList.toggle("active",Tt===0)),K(),De(),v("Reset Twin Furies to Hero Perch")}),K(),{updateTelemetry(lt,Tt){M.innerHTML=`<strong>${Math.round(lt)}</strong> FPS`;const At=t.lodStats[Tt].triangles+n.lodStats[Tt].triangles;w.innerHTML=`<strong>LOD${Tt}</strong> &middot; ${At.toLocaleString()} tris`},updateFlightUI:K,syncControlsFromRig:De,showToast:v,triggerShutterFlash:m,clearActiveCameraBookmark(){nt.forEach(lt=>lt.classList.remove("active"))}}}async function Jv(){const i=Av(),t=document.getElementById("canvas-container"),e=document.getElementById("hud-root");await i.advanceTo(14,"Initializing HDR WebGL2 post-processing pipeline…");const n=new s1({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=mh,n.toneMapping=sl,n.toneMappingExposure=1.14,t.appendChild(n.domElement);const s=new oa,o=new Ln(42,window.innerWidth/window.innerHeight,.12,9500);let a=Jo[0];o.position.copy(a.position);const r=new a1(o,n.domElement);r.target.copy(a.target),r.enableDamping=!0,r.dampingFactor=.065,r.rotateSpeed=.78,r.panSpeed=.85,r.zoomSpeed=.92,r.minDistance=.34,r.maxDistance=280,r.maxPolarAngle=Math.PI*.56,r.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},r.update();const l=new Dn(window.innerWidth*n.getPixelRatio(),window.innerHeight*n.getPixelRatio(),{type:$n,samples:4}),c=new S1(n,l);c.addPass(new A1(s,o));const h=new Ds(new Bt(window.innerWidth,window.innerHeight),.26,.52,1.04);c.addPass(h),c.addPass(new C1),await i.advanceTo(34,"Sculpting Nordic archipelago ridges, sea-arches & North Sea swells…");const u="golden-hour",d=c_(n,s,u),f=R_(d.sharedUniforms);s.add(f.group),await i.advanceTo(58,"Forging Night Fury armor scutes, flush dorsal spines & 117-bone rig…");const g=a_();g.rootGroup.position.copy(zn.position),g.rootGroup.rotation.set(0,zn.yaw,0),s.add(g.rootGroup),g.rootGroup.updateMatrixWorld(!0);const v=new N_(g);await i.advanceTo(82,"Weaving Light Fury pearl luminescence, mirror cloak & 111-bone rig…");const m=Sv();m.rootGroup.position.copy(On.position),m.rootGroup.rotation.set(0,On.yaw,0),s.add(m.rootGroup),m.rootGroup.updateMatrixWorld(!0);const p=new G_(m);await i.advanceTo(94,"Compiling shaders & calibrating twin courtship flight splines…");const M=new Gi(g,v,m,p);let w=null,_=1,A=!0,b=!1;r.addEventListener("start",()=>{w=null});const S=Qv(e,g,v,m,p,M,{initialWeatherPreset:u,onSelectCameraBookmark(rt){a=rt,w={goalPos:rt.position.clone(),goalTarget:rt.target.clone()}},onFlightResetCamera(){w={goalPos:a.position.clone(),goalTarget:a.target.clone()}},onFlightSpeedChange(rt){_=rt},onToggleCursorGaze(rt){A=rt},onCaptureSnapshot(){b=!0},onSelectWeatherPreset(rt){d.applyPreset(rt,n,s)},onSunElevationChange(rt){d.setSunElevation(rt,n,s)},onMistDensityChange(rt){d.setMistDensity(rt)},onOceanParamsChange(rt){f.ocean.setOceanParams(rt)}}),E=new Set,y=new T,x=new T,P=new T,C=new T;window.addEventListener("keydown",rt=>{const dt=document.activeElement?.tagName;dt==="INPUT"||dt==="TEXTAREA"||E.add(rt.code)}),window.addEventListener("keyup",rt=>{E.delete(rt.code)}),window.addEventListener("blur",()=>{E.clear()});const R=new xp,L=new Bt;n.domElement.addEventListener("dblclick",rt=>{if(M.isPlaying)return;const dt=n.domElement.getBoundingClientRect();L.x=(rt.clientX-dt.left)/dt.width*2-1,L.y=-((rt.clientY-dt.top)/dt.height)*2+1,R.setFromCamera(L,o);const wt=[m.rootGroup,g.rootGroup,f.group],Lt=R.intersectObjects(wt,!0).find(pt=>pt.distance<650&&!(pt.object instanceof Zr)&&!pt.object.userData?.excludeFromExport);if(!Lt)return;const yt=Lt.point.clone();let z=!1,I=Lt.object,et="Coastal Landform";for(;I;){if(I===m.rootGroup){z=!0,et="Light Fury";break}if(I===g.rootGroup){z=!0,et="Toothless";break}if(I.name.startsWith("FaroeseHeadlandSeaArch")){et="Headland Sea-Arch";break}if(I.name==="TabularFaroeseSeaStacks"){et="Tabular Sea-Stack";break}if(I.name==="WestWaterfallDoubleIsland"){et="Waterfall Double-Island";break}if(I.name==="StarboardCrescentLagoonAtoll"){et="Crescent Lagoon";break}I=I.parent}const ft=o.position.clone().sub(yt).normalize(),gt=o.position.distanceTo(yt),mt=z?$.clamp(gt*.6,2.6,7.5):$.clamp(gt*.55,10,68),Et=yt.clone().addScaledVector(ft,mt);Et.y=Math.max(Et.y,vs(Et.x,Et.z)+1.2,-9.2),S.clearActiveCameraBookmark(),w={goalPos:Et,goalTarget:yt},S.showToast(`Focused on ${et}`)});const D=new Bt(0,0);let k=-10,B=!1,F=0,H=0,V=0;window.addEventListener("pointerdown",rt=>{rt.target===n.domElement&&(B=!0)}),window.addEventListener("pointerup",()=>{B=!1}),window.addEventListener("pointermove",rt=>{B||(D.x=rt.clientX/Math.max(1,window.innerWidth)*2-1,D.y=-(rt.clientY/Math.max(1,window.innerHeight)*2+1),k=performance.now()*.001)});const Y=g.rig.boneMap.get("head"),Z=g.rig.boneMap.get("neck_03"),X=g.rig.boneMap.get("eye_L"),W=g.rig.boneMap.get("eye_R"),O=m.rig.boneMap.get("head"),st=m.rig.boneMap.get("neck_03"),at=m.rig.boneMap.get("eye_L"),j=m.rig.boneMap.get("eye_R");window.addEventListener("resize",()=>{const rt=window.innerWidth,dt=window.innerHeight;o.aspect=rt/dt,o.updateProjectionMatrix(),n.setSize(rt,dt),c.setSize(rt,dt),h.resolution.set(rt,dt)}),v.update(.016),p.update(.016),d.update(0,new T(0,1.15,.35),o.position),f.update(0),c.render();const K=new $h;let G=0,nt=0,_t=60,J=!1;function U(){requestAnimationFrame(U);const rt=Math.min(K.getDelta(),.05),dt=K.elapsedTime,wt=M.isPlaying,vt=M.update(rt*_,o,r.target);if(r.maxPolarAngle=vt.isAirborne?Math.PI*.84:Math.PI*.56,J&&!M.isPlaying&&(w={goalPos:a.position.clone(),goalTarget:a.target.clone()},S.updateFlightUI(),S.syncControlsFromRig()),J=M.isPlaying,wt&&S.updateFlightUI(),C.set(0,0,0),!M.isPlaying||!M.followCamera){const Et=(E.has("KeyW")||E.has("ArrowUp")?1:0)-(E.has("KeyS")||E.has("ArrowDown")?1:0),pt=(E.has("KeyD")||E.has("ArrowRight")?1:0)-(E.has("KeyA")||E.has("ArrowLeft")?1:0),Ct=(E.has("KeyE")?1:0)-(E.has("KeyQ")?1:0);if(Et!==0||pt!==0||Ct!==0){w=null,o.getWorldDirection(x),P.crossVectors(x,o.up).normalize(),C.addScaledVector(x,Et).addScaledVector(P,pt),C.y+=Ct*.85,C.lengthSq()>1e-5&&C.normalize();const Wt=o.position.distanceTo(r.target),xt=$.clamp(Wt*.85,6.5,34),Rt=E.has("ShiftLeft")||E.has("ShiftRight")?2.4:1;C.multiplyScalar(xt*Rt)}}if(y.lerp(C,1-Math.exp(-9*rt)),y.lengthSq()>1e-4&&(o.position.addScaledVector(y,rt),r.target.addScaledVector(y,rt)),w&&!M.isPlaying){const Et=1-Math.exp(-5.5*rt);o.position.lerp(w.goalPos,Et),r.target.lerp(w.goalTarget,Et),o.position.distanceTo(w.goalPos)<.012&&r.target.distanceTo(w.goalTarget)<.012&&(w=null)}r.update();const Lt=vs(o.position.x,o.position.z),yt=Math.max(-9.8,Lt+.55);o.position.y<yt&&(o.position.y=yt),v.update(rt),p.update(rt);const I=performance.now()*.001-k<4&&!B,et=o.position.distanceTo(new T(0,1.1,0))<26,ft=A&&!M.isPlaying&&I&&et?1:0;if(V+=(ft-V)*(1-Math.exp(-4.2*rt)),F+=(D.x-F)*(1-Math.exp(-5.5*rt)),H+=(D.y-H)*(1-Math.exp(-5.5*rt)),V>.002){const Et=F*.22*V,pt=-H*.14*V,Ct=-F*.07*V,Wt=F*.14*V,xt=-H*.1*V;Y&&(Y.rotation.y+=Et*.72,Y.rotation.x+=pt*.75,Y.rotation.z+=Ct),Z&&(Z.rotation.y+=Et*.32,Z.rotation.x+=pt*.25),X&&W&&(X.rotation.y+=Wt,W.rotation.y+=Wt,X.rotation.x+=xt,W.rotation.x+=xt),O&&(O.rotation.y+=Et*.78,O.rotation.x+=pt*.78,O.rotation.z+=Ct*1.15),st&&(st.rotation.y+=Et*.36,st.rotation.x+=pt*.28),at&&j&&(at.rotation.y+=Wt,j.rotation.y+=Wt,at.rotation.x+=xt,j.rotation.x+=xt)}const gt=o.position.distanceTo(vt.worldFocus),mt=g.updateAutoLOD(gt);if(m.updateAutoLOD(gt),d.update(dt,vt.worldFocus,o.position),f.update(dt),G+=rt,nt++,G>=.4){const Et=nt/G;_t=_t*.65+Et*.35,S.updateTelemetry(_t,mt),G=0,nt=0}if(c.render(),b){b=!1;try{const Et=n.domElement.toDataURL("image/png"),pt=document.createElement("a"),Ct=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");pt.download=`twin-furies-atelier-${Ct}.png`,pt.href=Et,pt.click(),S.triggerShutterFlash(),S.showToast("Saved UI-Free HD Snapshot (.PNG)")}catch{S.showToast("Snapshot unavailable on this device")}}}U(),await i.completeAndDissolve(e)}Jv();
