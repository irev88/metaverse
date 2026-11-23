(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="174",Ms={ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cu=0,Il=1,Pu=2,_h=1,vh=2,ni=3,Ti=0,xn=1,hn=2,ai=0,ws=1,na=2,Dl=3,Fl=4,Ru=5,Wi=100,Lu=101,Iu=102,Du=103,Fu=104,Nu=200,Uu=201,ku=202,Bu=203,fr=204,mr=205,zu=206,Ou=207,Hu=208,Vu=209,Wu=210,Gu=211,Xu=212,Yu=213,$u=214,gr=0,_r=1,vr=2,ri=3,xr=4,Mr=5,wr=6,yr=7,xh=0,qu=1,Zu=2,bi=0,Mh=1,wh=2,yh=3,al=4,bh=5,Sh=6,Ah=7,Nl="attached",ju="detached",Eh=300,Ts=301,Cs=302,br=303,Sr=304,ga=306,jn=1e3,Mi=1001,ia=1002,yn=1003,Th=1004,Zs=1005,Wn=1006,qo=1007,wi=1008,hi=1009,Ch=1010,Ph=1011,io=1012,rl=1013,qi=1014,Gn=1015,qn=1016,ll=1017,cl=1018,Ps=1020,Rh=35902,Lh=1021,Ih=1022,Cn=1023,Dh=1024,Fh=1025,ys=1026,Rs=1027,hl=1028,ul=1029,Nh=1030,dl=1031,pl=1033,Zo=33776,jo=33777,Ko=33778,Qo=33779,Ar=35840,Er=35841,Tr=35842,Cr=35843,Pr=36196,Rr=37492,Lr=37496,Ir=37808,Dr=37809,Fr=37810,Nr=37811,Ur=37812,kr=37813,Br=37814,zr=37815,Or=37816,Hr=37817,Vr=37818,Wr=37819,Gr=37820,Xr=37821,Jo=36492,Yr=36494,$r=36495,Uh=36283,qr=36284,Zr=36285,jr=36286,Ku=2300,Qu=2301,Ju=3200,td=3201,kh=0,ed=1,Dn="",cn="srgb",Ls="srgb-linear",sa="linear",Le="srgb",Ji=7680,Ul=519,nd=512,id=513,sd=514,Bh=515,od=516,ad=517,rd=518,ld=519,kl=35044,Bl="300 es",oi=2e3,oa=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const eo=Math.PI/180,so=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function fl(i,t){return(i%t+t)%t}function cd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function hd(i,t,e){return i!==t?(e-i)/(t-i):0}function no(i,t,e){return(1-e)*i+e*t}function ud(i,t,e,n){return no(i,t,1-Math.exp(-e*n))}function dd(i,t=1){return t-Math.abs(fl(i,t*2)-t)}function pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function md(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gd(i,t){return i+Math.random()*(t-i)}function _d(i){return i*(.5-Math.random())}function vd(i){i!==void 0&&(zl=i);let t=zl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xd(i){return i*eo}function Md(i){return i*so}function wd(i){return(i&i-1)===0&&i!==0}function yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sd(i,t,e,n,s){const o=Math.cos,a=Math.sin,r=o(e/2),l=a(e/2),c=o((t+n)/2),h=a((t+n)/2),u=o((t-n)/2),p=a((t-n)/2),f=o((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(r*h,l*u,l*p,r*c);break;case"YZY":i.set(l*p,r*h,l*u,r*c);break;case"ZXZ":i.set(l*u,l*p,r*h,r*c);break;case"XZX":i.set(r*h,l*g,l*f,r*c);break;case"YXY":i.set(l*f,r*h,l*g,r*c);break;case"ZYZ":i.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const q={DEG2RAD:eo,RAD2DEG:so,generateUUID:ji,clamp:fe,euclideanModulo:fl,mapLinear:cd,inverseLerp:hd,lerp:no,damp:ud,pingpong:dd,smoothstep:pd,smootherstep:fd,randInt:md,randFloat:gd,randFloatSpread:_d,seededRandom:vd,degToRad:xd,radToDeg:Md,isPowerOfTwo:wd,ceilPowerOfTwo:yd,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Sd,normalize:mn,denormalize:gs};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(t,e,n,s,o,a,r,l,c){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c)}set(t,e,n,s,o,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],f=n[5],g=n[8],v=s[0],m=s[3],d=s[6],M=s[1],b=s[4],_=s[7],S=s[2],w=s[5],A=s[8];return o[0]=a*v+r*M+l*S,o[3]=a*m+r*b+l*w,o[6]=a*d+r*_+l*A,o[1]=c*v+h*M+u*S,o[4]=c*m+h*b+u*w,o[7]=c*d+h*_+u*A,o[2]=p*v+f*M+g*S,o[5]=p*m+f*b+g*w,o[8]=p*d+f*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*o*h+n*r*l+s*o*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,p=r*l-h*o,f=c*o-a*l,g=e*u+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(r*n-s*a)*v,t[3]=p*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-r*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-s*c,s*l,-s*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new pe;function zh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ad(){const i=aa("canvas");return i.style.display="block",i}const Ol={};function Hi(i){i in Ol||(Ol[i]=!0,console.warn(i))}function Ed(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Td(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hl=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){const i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===Le&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Le&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?sa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,a){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:t,whitePoint:n,transfer:sa,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:Le,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const Ae=Pd();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class Rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=aa("canvas")),ts.width=t.width,ts.height=t.height;const n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=li(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ld=0;class _a{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(Ea(s[a].image)):o.push(Ea(s[a]))}else o=Ea(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Id=0;class dn extends Zi{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,n=Mi,s=Mi,o=Wn,a=wi,r=Cn,l=hi,c=dn.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=ji(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Eh;dn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,s=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],f=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,_=(f+1)/2,S=(d+1)/2,w=(h+p)/4,A=(u+v)/4,E=(g+m)/4;return b>_&&b>S?b<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(b),s=w/n,o=A/n):_>S?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=w/s,o=E/s):S<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(S),n=A/o,s=E/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(p-h)/M,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends Zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _a(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Dd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oh extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fd extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class je{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,r){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const p=o[a+0],f=o[a+1],g=o[a+2],v=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==p||c!==f||h!==g){let m=1-r;const d=l*p+c*f+h*g+u*v,M=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const S=Math.sqrt(b),w=Math.atan2(S,d*M);m=Math.sin(m*w)/S,r=Math.sin(r*w)/S}const _=r*M;if(l=l*m+p*_,c=c*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-r){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,a){const r=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[a],p=o[a+1],f=o[a+2],g=o[a+3];return t[e]=r*g+h*u+l*f-c*p,t[e+1]=l*g+h*p+c*u-r*f,t[e+2]=c*g+h*f+r*p-l*u,t[e+3]=h*g-r*u-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(s/2),u=r(o/2),p=l(n/2),f=l(s/2),g=l(o/2);switch(a){case"XYZ":this._x=p*h*u+c*f*g,this._y=c*f*u-p*h*g,this._z=c*h*g+p*f*u,this._w=c*h*u-p*f*g;break;case"YXZ":this._x=p*h*u+c*f*g,this._y=c*f*u-p*h*g,this._z=c*h*g-p*f*u,this._w=c*h*u+p*f*g;break;case"ZXY":this._x=p*h*u-c*f*g,this._y=c*f*u+p*h*g,this._z=c*h*g+p*f*u,this._w=c*h*u-p*f*g;break;case"ZYX":this._x=p*h*u-c*f*g,this._y=c*f*u+p*h*g,this._z=c*h*g-p*f*u,this._w=c*h*u+p*f*g;break;case"YZX":this._x=p*h*u+c*f*g,this._y=c*f*u+p*h*g,this._z=c*h*g-p*f*u,this._w=c*h*u-p*f*g;break;case"XZY":this._x=p*h*u-c*f*g,this._y=c*f*u-p*h*g,this._z=c*h*g+p*f*u,this._w=c*h*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+r+u;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(a-s)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(o+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(o-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(a-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+s*c-o*l,this._y=s*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-s*r,this._w=a*h-n*r-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+s*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=o*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*s-r*n),h=2*(r*e-o*s),u=2*(o*n-a*e);return this.x=e+l*c+a*u-r*h,this.y=n+l*h+r*c-o*u,this.z=s+l*u+o*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=s*l-o*r,this.y=o*a-n*l,this.z=n*r-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new T,Wl=new je;class Ci{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(o,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),xo.subVectors(this.max,Vs),es.subVectors(t.a,Vs),ns.subVectors(t.b,Vs),is.subVectors(t.c,Vs),di.subVectors(ns,es),pi.subVectors(is,ns),Di.subVectors(es,is);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Di.z,Di.y,di.z,0,-di.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-di.y,di.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!Ca(e,es,ns,is,xo)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,es,ns,is,xo))?!1:(Mo.crossVectors(di,pi),e=[Mo.x,Mo.y,Mo.z],Ca(e,es,ns,is,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new T,new T,new T,new T,new T,new T,new T,new T],kn=new T,vo=new Ci,es=new T,ns=new T,is=new T,di=new T,pi=new T,Di=new T,Vs=new T,xo=new T,Mo=new T,Fi=new T;function Ca(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){Fi.fromArray(i,o);const r=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Nd=new Ci,Ws=new T,Pa=new T;class Pi{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Pa)),this.expandByPoint(Ws.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new T,Ra=new T,wo=new T,fi=new T,La=new T,yo=new T,Ia=new T;class co{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Ra);const o=t.distanceTo(e)*.5,a=-this.direction.dot(wo),r=fi.dot(this.direction),l=-fi.dot(wo),c=fi.lengthSq(),h=Math.abs(1-a*a);let u,p,f,g;if(h>0)if(u=a*l-r,p=a*r-l,g=o*h,u>=0)if(p>=-g)if(p<=g){const v=1/h;u*=v,p*=v,f=u*(u+a*p+2*r)+p*(a*u+p+2*l)+c}else p=o,u=Math.max(0,-(a*p+r)),f=-u*u+p*(p+2*l)+c;else p=-o,u=Math.max(0,-(a*p+r)),f=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*o+r)),p=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-o,-l),o),f=p*(p+2*l)+c):(u=Math.max(0,-(a*o+r)),p=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+p*(p+2*l)+c);else p=a>0?-o:o,u=Math.max(0,-(a*p+r)),f=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ra).addScaledVector(wo,p),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(o=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),u>=0?(r=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(r=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,o){La.subVectors(e,t),yo.subVectors(n,t),Ia.crossVectors(La,yo);let a=this.direction.dot(Ia),r;if(a>0){if(s)return null;r=1}else if(a<0)r=-1,a=-a;else return null;fi.subVectors(this.origin,t);const l=r*this.direction.dot(yo.crossVectors(fi,yo));if(l<0)return null;const c=r*this.direction.dot(La.cross(fi));if(c<0||l+c>a)return null;const h=-r*fi.dot(Ia);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,o,a,r,l,c,h,u,p,f,g,v,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c,h,u,p,f,g,v,m)}set(t,e,n,s,o,a,r,l,c,h,u,p,f,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=o,d[5]=a,d[9]=r,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),o=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const p=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=p-v*c,e[9]=-r*l,e[2]=v-p*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,f=l*u,g=c*h,v=c*u;e[0]=p+v*r,e[4]=g*r-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=f*r-g,e[6]=v+p*r,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,f=l*u,g=c*h,v=c*u;e[0]=p-v*r,e[4]=-a*u,e[8]=g+f*r,e[1]=f+g*r,e[5]=a*h,e[9]=v-p*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,f=a*u,g=r*h,v=r*u;e[0]=l*h,e[4]=g*c-f,e[8]=p*c+v,e[1]=l*u,e[5]=v*c+p,e[9]=f*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=v-p*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=f*u+g,e[10]=p-v*u}else if(t.order==="XZY"){const p=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=r*h,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,kd)}lookAt(t,e,n){const s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),mi.crossVectors(n,An),mi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),mi.crossVectors(n,An)),mi.normalize(),bo.crossVectors(An,mi),s[0]=mi.x,s[4]=bo.x,s[8]=An.x,s[1]=mi.y,s[5]=bo.y,s[9]=An.y,s[2]=mi.z,s[6]=bo.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],f=n[13],g=n[2],v=n[6],m=n[10],d=n[14],M=n[3],b=n[7],_=n[11],S=n[15],w=s[0],A=s[4],E=s[8],y=s[12],x=s[1],P=s[5],C=s[9],R=s[13],L=s[2],D=s[6],k=s[10],B=s[14],N=s[3],H=s[7],V=s[11],X=s[15];return o[0]=a*w+r*x+l*L+c*N,o[4]=a*A+r*P+l*D+c*H,o[8]=a*E+r*C+l*k+c*V,o[12]=a*y+r*R+l*B+c*X,o[1]=h*w+u*x+p*L+f*N,o[5]=h*A+u*P+p*D+f*H,o[9]=h*E+u*C+p*k+f*V,o[13]=h*y+u*R+p*B+f*X,o[2]=g*w+v*x+m*L+d*N,o[6]=g*A+v*P+m*D+d*H,o[10]=g*E+v*C+m*k+d*V,o[14]=g*y+v*R+m*B+d*X,o[3]=M*w+b*x+_*L+S*N,o[7]=M*A+b*P+_*D+S*H,o[11]=M*E+b*C+_*k+S*V,o[15]=M*y+b*R+_*B+S*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],f=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+o*l*u-s*c*u-o*r*p+n*c*p+s*r*f-n*l*f)+v*(+e*l*f-e*c*p+o*a*p-s*a*f+s*c*h-o*l*h)+m*(+e*c*u-e*r*f-o*a*u+n*a*f+o*r*h-n*c*h)+d*(-s*r*h-e*l*u+e*r*p+s*a*u-n*a*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],f=t[11],g=t[12],v=t[13],m=t[14],d=t[15],M=u*m*c-v*p*c+v*l*f-r*m*f-u*l*d+r*p*d,b=g*p*c-h*m*c-g*l*f+a*m*f+h*l*d-a*p*d,_=h*v*c-g*u*c+g*r*f-a*v*f-h*r*d+a*u*d,S=g*u*l-h*v*l-g*r*p+a*v*p+h*r*m-a*u*m,w=e*M+n*b+s*_+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=M*A,t[1]=(v*p*o-u*m*o-v*s*f+n*m*f+u*s*d-n*p*d)*A,t[2]=(r*m*o-v*l*o+v*s*c-n*m*c-r*s*d+n*l*d)*A,t[3]=(u*l*o-r*p*o-u*s*c+n*p*c+r*s*f-n*l*f)*A,t[4]=b*A,t[5]=(h*m*o-g*p*o+g*s*f-e*m*f-h*s*d+e*p*d)*A,t[6]=(g*l*o-a*m*o-g*s*c+e*m*c+a*s*d-e*l*d)*A,t[7]=(a*p*o-h*l*o+h*s*c-e*p*c-a*s*f+e*l*f)*A,t[8]=_*A,t[9]=(g*u*o-h*v*o-g*n*f+e*v*f+h*n*d-e*u*d)*A,t[10]=(a*v*o-g*r*o+g*n*c-e*v*c-a*n*d+e*r*d)*A,t[11]=(h*r*o-a*u*o-h*n*c+e*u*c+a*n*f-e*r*f)*A,t[12]=S*A,t[13]=(h*v*s-g*u*s+g*n*p-e*v*p-h*n*m+e*u*m)*A,t[14]=(g*r*s-a*v*s-g*n*l+e*v*l+a*n*m-e*r*m)*A,t[15]=(a*u*s-h*r*s+h*n*l-e*u*l-a*n*p+e*r*p)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+n,h*l-s*a,0,c*l-s*r,h*l+s*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,h=a+a,u=r+r,p=o*c,f=o*h,g=o*u,v=a*h,m=a*u,d=r*u,M=l*c,b=l*h,_=l*u,S=n.x,w=n.y,A=n.z;return s[0]=(1-(v+d))*S,s[1]=(f+_)*S,s[2]=(g-b)*S,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(p+d))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+b)*A,s[9]=(m-M)*A,s[10]=(1-(p+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),r=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);const c=1/o,h=1/a,u=1/r;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,s,o,a,r=oi){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let f,g;if(r===oi)f=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===oa)f=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,a,r=oi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-o),p=(e+t)*c,f=(n+s)*h;let g,v;if(r===oi)g=(a+o)*u,v=-2*u;else if(r===oa)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new T,Bn=new ee,Ud=new T(0,0,0),kd=new T(1,1,1),mi=new T,bo=new T,An=new T,Gl=new ee,Xl=new je;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],a=s[4],r=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(fe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const Yl=new T,os=new je,Jn=new ee,So=new T,Gs=new T,zd=new T,Od=new je,$l=new T(1,0,0),ql=new T(0,1,0),Zl=new T(0,0,1),jl={type:"added"},Hd={type:"removed"},as={type:"childadded",child:null},Da={type:"childremoved",child:null};class Qe extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new T,e=new bn,n=new je,s=new T(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new pe}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?So.copy(t):So.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Gs,So,this.up):Jn.lookAt(So,Gs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Jn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));s.material=r}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),f=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Qe.DEFAULT_UP=new T(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new T,ti=new T,Fa=new T,ei=new T,rs=new T,ls=new T,Kl=new T,Na=new T,Ua=new T,ka=new T,Ba=new Be,za=new Be,Oa=new Be;class Vn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){zn.subVectors(s,e),ti.subVectors(n,e),Fa.subVectors(t,e);const a=zn.dot(zn),r=zn.dot(ti),l=zn.dot(Fa),c=ti.dot(ti),h=ti.dot(Fa),u=a*c-r*r;if(u===0)return o.set(0,0,0),null;const p=1/u,f=(c*l-r*h)*p,g=(a*h-r*l)*p;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,o,a,r,l){return this.getBarycoord(t,e,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(r,ei.z),l)}static getInterpolatedAttribute(t,e,n,s,o,a){return Ba.setScalar(0),za.setScalar(0),Oa.setScalar(0),Ba.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),Oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ba,o.x),a.addScaledVector(za,o.y),a.addScaledVector(Oa,o.z),a}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),ti.subVectors(t,e),zn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),zn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let a,r;rs.subVectors(s,n),ls.subVectors(o,n),Na.subVectors(t,n);const l=rs.dot(Na),c=ls.dot(Na);if(l<=0&&c<=0)return e.copy(n);Ua.subVectors(t,s);const h=rs.dot(Ua),u=ls.dot(Ua);if(h>=0&&u<=h)return e.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);ka.subVectors(t,o);const f=rs.dot(ka),g=ls.dot(ka);if(g>=0&&f<=g)return e.copy(o);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(ls,r);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Kl.subVectors(o,s),r=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Kl,r);const d=1/(m+v+p);return a=v*d,r=p*d,e.copy(n).addScaledVector(rs,a).addScaledVector(ls,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=fl(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Ha(a,o,t+1/3),this.g=Ha(a,o,t),this.b=Ha(a,o,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Ae.fromWorkingColorSpace(fn.copy(this),t),Math.round(fe(fn.r*255,0,255))*65536+Math.round(fe(fn.g*255,0,255))*256+Math.round(fe(fn.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,s=fn.g,o=fn.b,a=Math.max(n,s,o),r=Math.min(n,s,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=cn){Ae.fromWorkingColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,s=fn.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Ao);const n=no(gi.h,Ao.h,e),s=no(gi.s,Ao.s,e),o=no(gi.l,Ao.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new It;It.NAMES=Hh;let Vd=0;class ks extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=ws,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=mr,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fr&&(n.blendSrc=this.blendSrc),this.blendDst!==mr&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oo extends ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new T,Eo=new zt;let Wd=0;class Z{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array),o=mn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kl&&(t.usage=this.usage),t}}class ge extends Z{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vh extends Z{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends Z{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gd=0;const Ln=new ee,Va=new Qe,cs=new T,En=new Ci,Xs=new Ci,rn=new T;class Xt extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zh(t)?Vh:ge)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new pe().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];En.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Xs.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(En.min,Xs.min),En.expandByPoint(rn),rn.addVectors(En.max,Xs.max),En.expandByPoint(rn)):(En.expandByPoint(Xs.min),En.expandByPoint(Xs.max))}En.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)rn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)rn.fromBufferAttribute(r,c),l&&(cs.fromBufferAttribute(t,c),rn.add(cs)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Z(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let E=0;E<n.count;E++)r[E]=new T,l[E]=new T;const c=new T,h=new T,u=new T,p=new zt,f=new zt,g=new zt,v=new T,m=new T;function d(E,y,x){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),p.fromBufferAttribute(o,E),f.fromBufferAttribute(o,y),g.fromBufferAttribute(o,x),h.sub(c),u.sub(c),f.sub(p),g.sub(p);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),r[E].add(v),r[y].add(v),r[x].add(v),l[E].add(m),l[y].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let E=0,y=M.length;E<y;++E){const x=M[E],P=x.start,C=x.count;for(let R=P,L=P+C;R<L;R+=3)d(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const b=new T,_=new T,S=new T,w=new T;function A(E){S.fromBufferAttribute(s,E),w.copy(S);const y=r[E];b.copy(y),b.sub(S.multiplyScalar(S.dot(y))).normalize(),_.crossVectors(w,y);const P=_.dot(l[E])<0?-1:1;a.setXYZW(E,b.x,b.y,b.z,P)}for(let E=0,y=M.length;E<y;++E){const x=M[E],P=x.start,C=x.count;for(let R=P,L=P+C;R<L;R+=3)A(t.getX(R+0)),A(t.getX(R+1)),A(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Z(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new T,o=new T,a=new T,r=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,p=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let d=0;d<h;d++)p[g++]=c[f++]}return new Z(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xt,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,u=c.length;h<u;h++){const p=c[h],f=t(p,n);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new ee,Ni=new co,To=new Pi,Jl=new T,Co=new T,Po=new T,Ro=new T,Wa=new T,Lo=new T,tc=new T,Io=new T;class He extends Qe{constructor(t=new Xt,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(o&&r){Lo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],u=o[l];h!==0&&(Wa.fromBufferAttribute(u,t),a?Lo.addScaledVector(Wa,h):Lo.addScaledVector(Wa.sub(e),h))}e.add(Lo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(o),Ni.copy(t.ray).recast(t.near),!(To.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(To,Jl)===null||Ni.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&(Ql.copy(o).invert(),Ni.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,p=o.groups,f=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=b;_<S;_+=3){const w=r.getX(_),A=r.getX(_+1),E=r.getX(_+2);s=Do(this,d,t,n,c,h,u,w,A,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){const M=r.getX(m),b=r.getX(m+1),_=r.getX(m+2);s=Do(this,a,t,n,c,h,u,M,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=b;_<S;_+=3){const w=_,A=_+1,E=_+2;s=Do(this,d,t,n,c,h,u,w,A,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){const M=m,b=m+1,_=m+2;s=Do(this,a,t,n,c,h,u,M,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xd(i,t,e,n,s,o,a,r){let l;if(t.side===xn?l=n.intersectTriangle(a,o,s,!0,r):l=n.intersectTriangle(s,o,a,t.side===Ti,r),l===null)return null;Io.copy(r),Io.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Io);return c<e.near||c>e.far?null:{distance:c,point:Io.clone(),object:i}}function Do(i,t,e,n,s,o,a,r,l,c){i.getVertexPosition(r,Co),i.getVertexPosition(l,Po),i.getVertexPosition(c,Ro);const h=Xd(i,t,e,n,Co,Po,Ro,tc);if(h){const u=new T;Vn.getBarycoord(tc,Co,Po,Ro,u),s&&(h.uv=Vn.getInterpolatedAttribute(s,r,l,c,u,new zt)),o&&(h.uv1=Vn.getInterpolatedAttribute(o,r,l,c,u,new zt)),a&&(h.normal=Vn.getInterpolatedAttribute(a,r,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:r,b:l,c,normal:new T,materialIndex:0};Vn.getNormal(Co,Po,Ro,p.normal),h.face=p,h.barycoord=u}return h}class ho extends Xt{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],u=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(v,m,d,M,b,_,S,w,A,E,y){const x=_/A,P=S/E,C=_/2,R=S/2,L=w/2,D=A+1,k=E+1;let B=0,N=0;const H=new T;for(let V=0;V<k;V++){const X=V*P-R;for(let K=0;K<D;K++){const G=K*x-C;H[v]=G*M,H[m]=X*b,H[d]=L,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[d]=w>0?1:-1,h.push(H.x,H.y,H.z),u.push(K/A),u.push(1-V/E),B+=1}}for(let V=0;V<E;V++)for(let X=0;X<A;X++){const K=p+X+D*V,G=p+X+D*(V+1),W=p+(X+1)+D*(V+1),O=p+(X+1)+D*V;l.push(K,G,O),l.push(G,W,O),N+=6}r.addGroup(f,N,y),f+=N,p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function gn(i){const t={};for(let e=0;e<i.length;e++){const n=Is(i[e]);for(const s in n)t[s]=n[s]}return t}function Yd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const ao={clone:Is,merge:gn};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gh extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new T,ec=new zt,nc=new zt;class In extends Gh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=so*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return so*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(eo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class Zd extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(hs,us,t,e);s.layers=this.layers,this.add(s);const o=new In(hs,us,t,e);o.layers=this.layers,this.add(o);const a=new In(hs,us,t,e);a.layers=this.layers,this.add(a);const r=new In(hs,us,t,e);r.layers=this.layers,this.add(r);const l=new In(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new In(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xh extends dn{constructor(t,e,n,s,o,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jd extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ho(5,5,5),o=new Ze({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:ai});o.uniforms.tEquirect.value=e;const a=new He(s,o),r=e.minFilter;return e.minFilter===wi&&(e.minFilter=Wn),new Zd(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}}class Xn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kd={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Kd)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new gl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ra extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ic=new T,sc=new Be,oc=new Be,Qd=new T,ac=new ee,Fo=new T,Xa=new Pi,rc=new ee,Ya=new co;class Yh extends He{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nl,this.bindMatrix=new ee,this.bindMatrixInverse=new ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fo),this.boundingBox.expandByPoint(Fo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fo),this.boundingSphere.expandByPoint(Fo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(s),t.ray.intersectsSphere(Xa)!==!1&&(rc.copy(s).invert(),Ya.copy(t.ray).applyMatrix4(rc),!(this.boundingBox!==null&&Ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ya)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Be,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ju?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;sc.fromBufferAttribute(s.attributes.skinIndex,t),oc.fromBufferAttribute(s.attributes.skinWeight,t),ic.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const a=oc.getComponent(o);if(a!==0){const r=sc.getComponent(o);ac.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(Qd.copy(ic).applyMatrix4(ac),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class _l extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $h extends dn{constructor(t=null,e=1,n=1,s,o,a,r,l,c=yn,h=yn,u,p){super(null,a,r,l,c,h,s,o,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=new ee,Jd=new ee;class va{constructor(t=[],e=[]){this.uuid=ji(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ee)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ee;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const r=t[o]?t[o].matrixWorld:Jd;lc.multiplyMatrices(r,e[o]),lc.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new va(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new $h(e,t,t,Cn,Gn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let a=e[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new _l),this.bones.push(a),this.boneInverses.push(new ee().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const a=e[s];t.bones.push(a.uuid);const r=n[s];t.boneInverses.push(r.toArray())}return t}}class cc extends Z{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new ee,hc=new ee,No=[],uc=new Ci,tp=new ee,Ys=new He,$s=new Pi;class $a extends He{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),uc.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(uc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),$s.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=t*o+1;for(let r=0;r<n.length;r++)n[r]=s[a+r]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ds),hc.multiplyMatrices(n,ds),Ys.matrixWorld=hc,Ys.raycast(t,No);for(let a=0,r=No.length;a<r;a++){const l=No[a];l.instanceId=o,l.object=this,e.push(l)}No.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $h(new Float32Array(s*this.count),s,this.count,hl,Gn));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=s*t;o[l]=r,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qa=new T,ep=new T,np=new pe;class vi{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qa.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||np.getNormalMatrix(t),s=this.coplanarPoint(qa).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Pi,Uo=new T;class vl{constructor(t=new vi,e=new vi,n=new vi,s=new vi,o=new vi,a=new vi){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){const n=this.planes,s=t.elements,o=s[0],a=s[1],r=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],f=s[8],g=s[9],v=s[10],m=s[11],d=s[12],M=s[13],b=s[14],_=s[15];if(n[0].setComponents(l-o,p-c,m-f,_-d).normalize(),n[1].setComponents(l+o,p+c,m+f,_+d).normalize(),n[2].setComponents(l+a,p+h,m+g,_+M).normalize(),n[3].setComponents(l-a,p-h,m-g,_-M).normalize(),n[4].setComponents(l-r,p-u,m-v,_-b).normalize(),e===oi)n[5].setComponents(l+r,p+u,m+v,_+b).normalize();else if(e===oa)n[5].setComponents(r,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ip extends ks{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dc=new ee,Kr=new co,ko=new Pi,Bo=new T;class Qr extends Qe{constructor(t=new Xt,e=new ip){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=o,t.ray.intersectsSphere(ko)===!1)return;dc.copy(s).invert(),Kr.copy(t.ray).applyMatrix4(dc);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=p,v=f;g<v;g++){const m=c.getX(g);Bo.fromBufferAttribute(u,m),pc(Bo,m,l,s,t,e,this)}}else{const p=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=p,v=f;g<v;g++)Bo.fromBufferAttribute(u,g),pc(Bo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function pc(i,t,e,n,s,o,a){const r=Kr.distanceSqToPoint(i);if(r<e){const l=new T;Kr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Za extends dn{constructor(t,e,n,s,o,a,r,l,c,h,u,p){super(null,a,r,l,c,h,s,o,u,p),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class _n extends dn{constructor(t,e,n,s,o,a,r,l,c){super(t,e,n,s,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qh extends dn{constructor(t,e,n,s,o,a,r,l,c,h=ys){if(h!==ys&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=qi),n===void 0&&h===Rs&&(n=Ps),super(null,s,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _a(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class sp{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=n[s]-a,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(o-1);const h=n[s],p=n[s+1]-h,f=(a-h)/p;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),r=this.getPoint(o),l=e||(a.isVector2?new zt:new T);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new T,s=[],o=[],a=[],r=new T,l=new ee;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}o[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],r),a[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(s[f-1],s[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(fe(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(r,g))}a[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(fe(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(r.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function xl(){let i=0,t=0,e=0,n=0;function s(o,a,r,l){i=o,t=r,e=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){s(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,u){let p=(a-o)/c-(r-o)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+u)+(l-r)/u;p*=h,f*=h,s(a,r,p,f)},calc:function(o){const a=o*o,r=a*o;return i+t*o+e*a+n*r}}}const zo=new T,ja=new xl,Ka=new xl,Qa=new xl;class Nn extends sp{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%o]:(zo.subVectors(s[0],s[1]).add(s[0]),c=zo);const u=s[r%o],p=s[(r+1)%o];if(this.closed||r+2<o?h=s[(r+2)%o]:(zo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=zo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ja.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,v,m),Ka.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,v,m),Qa.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Ka.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Qa.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(ja.calc(l),Ka.calc(l),Qa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ml extends Xt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new T,h=new zt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class la extends Xt{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],p=[],f=[];let g=0;const v=[],m=n/2;let d=0;M(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(f,2));function M(){const _=new T,S=new T;let w=0;const A=(e-t)/n;for(let E=0;E<=o;E++){const y=[],x=E/o,P=x*(e-t)+t;for(let C=0;C<=s;C++){const R=C/s,L=R*l+r,D=Math.sin(L),k=Math.cos(L);S.x=P*D,S.y=-x*n+m,S.z=P*k,u.push(S.x,S.y,S.z),_.set(D,A,k).normalize(),p.push(_.x,_.y,_.z),f.push(R,1-x),y.push(g++)}v.push(y)}for(let E=0;E<s;E++)for(let y=0;y<o;y++){const x=v[y][E],P=v[y+1][E],C=v[y+1][E+1],R=v[y][E+1];(t>0||y!==0)&&(h.push(x,P,R),w+=3),(e>0||y!==o-1)&&(h.push(P,C,R),w+=3)}c.addGroup(d,w,0),d+=w}function b(_){const S=g,w=new zt,A=new T;let E=0;const y=_===!0?t:e,x=_===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*x,0),p.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let C=0;C<=s;C++){const L=C/s*l+r,D=Math.cos(L),k=Math.sin(L);A.x=y*k,A.y=m*x,A.z=y*D,u.push(A.x,A.y,A.z),p.push(0,x,0),w.x=D*.5+.5,w.y=k*.5*x+.5,f.push(w.x,w.y),g++}for(let C=0;C<s;C++){const R=S+C,L=P+C;_===!0?h.push(L,L+1,R):h.push(L+1,L,R),E+=3}c.addGroup(d,E,_===!0?1:2),d+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wl extends Xt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],a=[];r(s),c(n),h(),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(o.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(M){const b=new T,_=new T,S=new T;for(let w=0;w<e.length;w+=3)f(e[w+0],b),f(e[w+1],_),f(e[w+2],S),l(b,_,S,M)}function l(M,b,_,S){const w=S+1,A=[];for(let E=0;E<=w;E++){A[E]=[];const y=M.clone().lerp(_,E/w),x=b.clone().lerp(_,E/w),P=w-E;for(let C=0;C<=P;C++)C===0&&E===w?A[E][C]=y:A[E][C]=y.clone().lerp(x,C/P)}for(let E=0;E<w;E++)for(let y=0;y<2*(w-E)-1;y++){const x=Math.floor(y/2);y%2===0?(p(A[E][x+1]),p(A[E+1][x]),p(A[E][x])):(p(A[E][x+1]),p(A[E+1][x+1]),p(A[E+1][x]))}}function c(M){const b=new T;for(let _=0;_<o.length;_+=3)b.x=o[_+0],b.y=o[_+1],b.z=o[_+2],b.normalize().multiplyScalar(M),o[_+0]=b.x,o[_+1]=b.y,o[_+2]=b.z}function h(){const M=new T;for(let b=0;b<o.length;b+=3){M.x=o[b+0],M.y=o[b+1],M.z=o[b+2];const _=m(M)/2/Math.PI+.5,S=d(M)/Math.PI+.5;a.push(_,1-S)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const b=a[M+0],_=a[M+2],S=a[M+4],w=Math.max(b,_,S),A=Math.min(b,_,S);w>.9&&A<.1&&(b<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function p(M){o.push(M.x,M.y,M.z)}function f(M,b){const _=M*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function g(){const M=new T,b=new T,_=new T,S=new T,w=new zt,A=new zt,E=new zt;for(let y=0,x=0;y<o.length;y+=9,x+=6){M.set(o[y+0],o[y+1],o[y+2]),b.set(o[y+3],o[y+4],o[y+5]),_.set(o[y+6],o[y+7],o[y+8]),w.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),E.set(a[x+4],a[x+5]),S.copy(M).add(b).add(_).divideScalar(3);const P=m(S);v(w,x+0,M,P),v(A,x+2,b,P),v(E,x+4,_,P)}}function v(M,b,_,S){S<0&&M.x===1&&(a[b]=M.x-1),_.x===0&&_.z===0&&(a[b]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.vertices,t.indices,t.radius,t.details)}}class xa extends wl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xa(t.radius,t.detail)}}class Ds extends Xt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(s),c=r+1,h=l+1,u=t/r,p=e/l,f=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const M=d*p-a;for(let b=0;b<c;b++){const _=b*u-o;g.push(_,-M,0),v.push(0,0,1),m.push(b/r),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<r;M++){const b=M+c*d,_=M+c*(d+1),S=M+1+c*(d+1),w=M+1+c*d;f.push(b,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.width,t.height,t.widthSegments,t.heightSegments)}}class ca extends Xt{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new T,p=new T,f=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const M=[],b=d/n;let _=0;d===0&&a===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const w=S/e;u.x=-t*Math.cos(s+w*o)*Math.sin(a+b*r),u.y=t*Math.cos(a+b*r),u.z=t*Math.sin(s+w*o)*Math.sin(a+b*r),g.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),m.push(w+_,1-b),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const b=h[d][M+1],_=h[d][M],S=h[d+1][M],w=h[d+1][M+1];(d!==0||a>0)&&f.push(b,_,w),(d!==n-1||l<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class op extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Si extends ks{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vn extends Si{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ap extends ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rp extends ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Zh extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class lp extends Zh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ja=new ee,fc=new T,mc=new T;class cp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(fc),mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mc),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class yl extends Gh{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hp extends cp{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gc extends Zh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new hp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class up extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class jh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=_c();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function _c(){return performance.now()}const bl="\\[\\]\\.:\\/",dp=new RegExp("["+bl+"]","g"),Sl="[^"+bl+"]",pp="[^"+bl.replace("\\.","")+"]",fp=/((?:WC+[\/:])*)/.source.replace("WC",Sl),mp=/(WCOD+)?/.source.replace("WCOD",pp),gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),_p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),vp=new RegExp("^"+fp+mp+gp+_p+"$"),xp=["material","materials","bones","map"];class Mp{constructor(t,e,n){const s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Te{constructor(t,e,n){this.path=e,this.parsedPath=n||Te.parseTrackName(e),this.node=Te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Te.Composite(t,e,n):new Te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dp,"")}static parseTrackName(t){const e=vp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);xp.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===e||r.uuid===e)return r;const l=n(r.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let o=e.propertyIndex;if(t||(t=Te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?r=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=Mp;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const vc=new ee;class wp{constructor(t,e,n=0,s=1/0){this.ray=new co(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vc),this}intersectObject(t,e=!0,n=[]){return Jr(t,this,n,e),n.sort(xc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Jr(t[s],this,n,e);return n.sort(xc),n}}function xc(i,t){return i.distance-t.distance}function Jr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let a=0,r=o.length;a<r;a++)Jr(o[a],t,e,!0)}}class Mc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yp extends Zi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function wc(i,t,e,n){const s=bp(n);switch(e){case Lh:return i*t;case Dh:return i*t;case Fh:return i*t*2;case hl:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case Nh:return i*t*2/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case pl:return i*t*4/s.components*s.byteLength;case Zo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Er:case Cr:return Math.max(i,16)*Math.max(t,8)/4;case Ar:case Tr:return Math.max(i,8)*Math.max(t,8)/2;case Pr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Br:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Or:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case Yr:case $r:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uh:case qr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zr:case jr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bp(i){switch(i){case hi:case Ch:return{byteLength:1,components:1};case io:case Ph:case qn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case qi:case rl:case Gn:return{byteLength:4,components:1};case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kh(){let i=null,t=!1,e=null,n=null;function s(o,a){e(o,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Sp(i){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<u.length;f++){const g=u[p],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,u[p]=v)}u.length=p+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(i.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:o,update:a}}var Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
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
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
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
#endif`,Sf=`struct PhysicalMaterial {
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
}`,Af=`
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
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
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,D0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,W0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,Y0=`#define NORMAL
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
}`,$0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,K0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,J0=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Ap,alphahash_pars_fragment:Ep,alphamap_fragment:Tp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Rp,aomap_fragment:Lp,aomap_pars_fragment:Ip,batching_pars_vertex:Dp,batching_vertex:Fp,begin_vertex:Np,beginnormal_vertex:Up,bsdfs:kp,iridescence_fragment:Bp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Gp,color_pars_fragment:Xp,color_pars_vertex:Yp,color_vertex:$p,common:qp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Kp,displacementmap_vertex:Qp,emissivemap_fragment:Jp,emissivemap_pars_fragment:tf,colorspace_fragment:ef,colorspace_pars_fragment:nf,envmap_fragment:sf,envmap_common_pars_fragment:of,envmap_pars_fragment:af,envmap_pars_vertex:rf,envmap_physical_pars_fragment:vf,envmap_vertex:lf,fog_vertex:cf,fog_pars_vertex:hf,fog_fragment:uf,fog_pars_fragment:df,gradientmap_pars_fragment:pf,lightmap_pars_fragment:ff,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:_f,lights_toon_fragment:xf,lights_toon_pars_fragment:Mf,lights_phong_fragment:wf,lights_phong_pars_fragment:yf,lights_physical_fragment:bf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Af,lights_fragment_maps:Ef,lights_fragment_end:Tf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:Rf,logdepthbuf_vertex:Lf,map_fragment:If,map_pars_fragment:Df,map_particle_fragment:Ff,map_particle_pars_fragment:Nf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:kf,morphinstance_vertex:Bf,morphcolor_vertex:zf,morphnormal_vertex:Of,morphtarget_pars_vertex:Hf,morphtarget_vertex:Vf,normal_fragment_begin:Wf,normal_fragment_maps:Gf,normal_pars_fragment:Xf,normal_pars_vertex:Yf,normal_vertex:$f,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:Qf,opaque_fragment:Jf,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:p0,skinnormal_vertex:f0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:x0,transmission_pars_fragment:M0,uv_pars_fragment:w0,uv_pars_vertex:y0,uv_vertex:b0,worldpos_vertex:S0,background_vert:A0,background_frag:E0,backgroundCube_vert:T0,backgroundCube_frag:C0,cube_vert:P0,cube_frag:R0,depth_vert:L0,depth_frag:I0,distanceRGBA_vert:D0,distanceRGBA_frag:F0,equirect_vert:N0,equirect_frag:U0,linedashed_vert:k0,linedashed_frag:B0,meshbasic_vert:z0,meshbasic_frag:O0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:W0,meshmatcap_frag:G0,meshnormal_vert:X0,meshnormal_frag:Y0,meshphong_vert:$0,meshphong_frag:q0,meshphysical_vert:Z0,meshphysical_frag:j0,meshtoon_vert:K0,meshtoon_frag:Q0,points_vert:J0,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},Ut={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},$n={basic:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new It(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:gn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:gn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new It(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:gn([Ut.points,Ut.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:gn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:gn([Ut.common,Ut.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:gn([Ut.sprite,Ut.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:gn([Ut.common,Ut.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:gn([Ut.lights,Ut.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};$n.physical={uniforms:gn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Oo={r:0,b:0,g:0},ki=new bn,om=new ee;function am(i,t,e,n,s,o,a){const r=new It(0);let l=o===!0?0:1,c,h,u=null,p=0,f=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function v(b){let _=!1;const S=g(b);S===null?d(r,l):S&&S.isColor&&(d(S,1),_=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===ga)?(h===void 0&&(h=new He(new ho(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Is($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(_.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(ki)),h.material.toneMapped=Ae.getTransfer(S.colorSpace)!==Le,(u!==S||p!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,p=S.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new He(new Ds(2,2),new Ze({name:"BackgroundMaterial",uniforms:Is($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ae.getTransfer(S.colorSpace)!==Le,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,_){b.getRGB(Oo,Wh(i)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,_,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(b,_=1){r.set(b),l=_,d(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(r,l)},render:v,addToRenderList:m,dispose:M}}function rm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let o=s,a=!1;function r(x,P,C,R,L){let D=!1;const k=u(R,C,P);o!==k&&(o=k,c(o.object)),D=f(x,R,C,L),D&&g(x,R,C,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,_(x,P,C,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,P,C){const R=C.wireframe===!0;let L=n[x.id];L===void 0&&(L={},n[x.id]=L);let D=L[P.id];D===void 0&&(D={},L[P.id]=D);let k=D[R];return k===void 0&&(k=p(l()),D[R]=k),k}function p(x){const P=[],C=[],R=[];for(let L=0;L<e;L++)P[L]=0,C[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:R,object:x,attributes:{},index:null}}function f(x,P,C,R){const L=o.attributes,D=P.attributes;let k=0;const B=C.getAttributes();for(const N in B)if(B[N].location>=0){const V=L[N];let X=D[N];if(X===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),V===void 0||V.attribute!==X||X&&V.data!==X.data)return!0;k++}return o.attributesNum!==k||o.index!==R}function g(x,P,C,R){const L={},D=P.attributes;let k=0;const B=C.getAttributes();for(const N in B)if(B[N].location>=0){let V=D[N];V===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(V=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(V=x.instanceColor));const X={};X.attribute=V,V&&V.data&&(X.data=V.data),L[N]=X,k++}o.attributes=L,o.attributesNum=k,o.index=R}function v(){const x=o.newAttributes;for(let P=0,C=x.length;P<C;P++)x[P]=0}function m(x){d(x,0)}function d(x,P){const C=o.newAttributes,R=o.enabledAttributes,L=o.attributeDivisors;C[x]=1,R[x]===0&&(i.enableVertexAttribArray(x),R[x]=1),L[x]!==P&&(i.vertexAttribDivisor(x,P),L[x]=P)}function M(){const x=o.newAttributes,P=o.enabledAttributes;for(let C=0,R=P.length;C<R;C++)P[C]!==x[C]&&(i.disableVertexAttribArray(C),P[C]=0)}function b(x,P,C,R,L,D,k){k===!0?i.vertexAttribIPointer(x,P,C,L,D):i.vertexAttribPointer(x,P,C,R,L,D)}function _(x,P,C,R){v();const L=R.attributes,D=C.getAttributes(),k=P.defaultAttributeValues;for(const B in D){const N=D[B];if(N.location>=0){let H=L[B];if(H===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(H=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(H=x.instanceColor)),H!==void 0){const V=H.normalized,X=H.itemSize,K=t.get(H);if(K===void 0)continue;const G=K.buffer,W=K.type,O=K.bytesPerElement,nt=W===i.INT||W===i.UNSIGNED_INT||H.gpuType===rl;if(H.isInterleavedBufferAttribute){const at=H.data,$=at.stride,j=H.offset;if(at.isInstancedInterleavedBuffer){for(let Y=0;Y<N.locationSize;Y++)d(N.location+Y,at.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Y=0;Y<N.locationSize;Y++)m(N.location+Y);i.bindBuffer(i.ARRAY_BUFFER,G);for(let Y=0;Y<N.locationSize;Y++)b(N.location+Y,X/N.locationSize,W,V,$*O,(j+X/N.locationSize*Y)*O,nt)}else{if(H.isInstancedBufferAttribute){for(let at=0;at<N.locationSize;at++)d(N.location+at,H.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let at=0;at<N.locationSize;at++)m(N.location+at);i.bindBuffer(i.ARRAY_BUFFER,G);for(let at=0;at<N.locationSize;at++)b(N.location+at,X/N.locationSize,W,V,X*O,X/N.locationSize*at*O,nt)}}else if(k!==void 0){const V=k[B];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(N.location,V);break;case 3:i.vertexAttrib3fv(N.location,V);break;case 4:i.vertexAttrib4fv(N.location,V);break;default:i.vertexAttrib1fv(N.location,V)}}}}M()}function S(){E();for(const x in n){const P=n[x];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const C in P){const R=P[C];for(const L in R)h(R[L].object),delete R[L];delete P[C]}delete n[x.id]}function A(x){for(const P in n){const C=n[P];if(C[x.id]===void 0)continue;const R=C[x.id];for(const L in R)h(R[L].object),delete R[L];delete C[x.id]}}function E(){y(),a=!0,o!==s&&(o=s,c(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:E,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function lm(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,p){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*p[v];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function cm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const E=A===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!E)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:S,maxSamples:w}}function hm(i){const t=this;let e=null,n=0,s=!1,o=!1;const a=new vi,r=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const M=o?0:n,b=M*4;let _=d.clippingState||null;l.value=_,_=h(g,p,b,f);for(let S=0;S!==b;++S)_[S]=e[S];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=f+v*4,M=p.matrixWorldInverse;r.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,_=f;b!==v;++b,_+=4)a.copy(u[b]).applyMatrix4(M,r),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function um(i){let t=new WeakMap;function e(a,r){return r===br?a.mapping=Ts:r===Sr&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===br||r===Sr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const r=a.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const _s=4,yc=[.125,.215,.35,.446,.526,.582],Gi=20,tr=new yl,bc=new It;let er=null,nr=0,ir=0,sr=!1;const Vi=(1+Math.sqrt(5))/2,ps=1/Vi,Sc=[new T(-Vi,ps,0),new T(Vi,ps,0),new T(-ps,0,Vi),new T(ps,0,Vi),new T(0,Vi,-ps),new T(0,Vi,ps),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],dm=new T;class tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){const{size:a=256,position:r=dm}=o;er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(er,nr,ir),this._renderer.xr.enabled=sr,t.scissorTest=!1,Ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:qn,format:Cn,colorSpace:Ls,depthBuffer:!1},s=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(o)),this._blurMaterial=fm(o,t,e)}return s}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,s,o){const l=new In(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(bc),u.toneMapping=bi,u.autoClear=!1;const g=new oo({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),v=new He(new ho,g);let m=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,m=!0):(g.color.copy(bc),m=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));const _=this._cubeSize;Ho(s,b*_,M>2?_:0,_,_),u.setRenderTarget(s),m&&u.render(v,l),u.render(t,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=p,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ts||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;Ho(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=Sc[(s-o-1)%Sc.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",o),this._halfBlur(a,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new He(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):Gi;m>Gi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const d=[];let M=0;for(let A=0;A<Gi;++A){const E=A/v,y=Math.exp(-E*E/2);d.push(y),A===0?M+=y:A<m&&(M+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-n;const _=this._sizeLods[s],S=3*_*(s>b-_s?s-b+_s:0),w=4*(this._cubeSize-_);Ho(e,S,w,3*_,2*_),l.setRenderTarget(e),l.render(u,tr)}}function pm(i){const t=[],e=[],n=[];let s=i;const o=i-_s+1+yc.length;for(let a=0;a<o;a++){const r=Math.pow(2,s);e.push(r);let l=1/r;a>i-_s?l=yc[a-i+_s-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,d=1,M=new Float32Array(v*g*f),b=new Float32Array(m*g*f),_=new Float32Array(d*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,E=w>2?0:-1,y=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];M.set(y,v*g*w),b.set(p,m*g*w);const x=[w,w,w,w,w,w];_.set(x,d*g*w)}const S=new Xt;S.setAttribute("position",new Z(M,v)),S.setAttribute("uv",new Z(b,m)),S.setAttribute("faceIndex",new Z(_,d)),t.push(S),s>_s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ac(i,t,e){const n=new Fn(i,t,e);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fm(i,t,e){const n=new Float32Array(Gi),s=new T(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ec(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Tc(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function mm(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===br||l===Sr,h=l===Ts||l===Cs;if(c||h){let u=t.get(r);const p=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==p)return e===null&&(e=new tl(i)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new tl(i)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function s(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function gm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _m(i,t,e,n){const s={},o=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id];const f=o.get(p);f&&(t.remove(f),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const f in p)t.update(p[f],i.ARRAY_BUFFER)}function c(u){const p=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let b=0,_=M.length;b<_;b+=3){const S=M[b+0],w=M[b+1],A=M[b+2];p.push(S,w,w,A,A,S)}}else if(g!==void 0){const M=g.array;v=g.version;for(let b=0,_=M.length/3-1;b<_;b+=3){const S=b+0,w=b+1,A=b+2;p.push(S,w,w,A,A,S)}}else return;const m=new(zh(p)?Vh:ge)(p,1);m.version=v;const d=o.get(u);d&&t.remove(d),o.set(u,m)}function h(u){const p=o.get(u);if(p){const f=u.index;f!==null&&p.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function vm(i,t,e){let n;function s(p){n=p}let o,a;function r(p){o=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,o,p*a),e.update(f,n,1)}function c(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,p*a,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,p,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];e.update(m,n,1)}function u(p,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/a,f[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,p,0,v,0,g);let d=0;for(let M=0;M<g;M++)d+=f[M]*v[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=r*(o/3);break;case i.LINES:e.lines+=r*(o/2);break;case i.LINE_STRIP:e.lines+=r*(o-1);break;case i.LINE_LOOP:e.lines+=r*o;break;case i.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mm(i,t,e){const n=new WeakMap,s=new Be;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(r);if(p===void 0||p.count!==u){let x=function(){E.dispose(),n.delete(r),r.removeEventListener("dispose",x)};var f=x;p!==void 0&&p.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,d=r.morphAttributes.position||[],M=r.morphAttributes.normal||[],b=r.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let S=r.attributes.position.count*_,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const A=new Float32Array(S*w*4*u),E=new Oh(A,S,w,u);E.type=Gn,E.needsUpdate=!0;const y=_*4;for(let P=0;P<u;P++){const C=d[P],R=M[P],L=b[P],D=S*w*4*P;for(let k=0;k<C.count;k++){const B=k*y;g===!0&&(s.fromBufferAttribute(C,k),A[D+B+0]=s.x,A[D+B+1]=s.y,A[D+B+2]=s.z,A[D+B+3]=0),v===!0&&(s.fromBufferAttribute(R,k),A[D+B+4]=s.x,A[D+B+5]=s.y,A[D+B+6]=s.z,A[D+B+7]=0),m===!0&&(s.fromBufferAttribute(L,k),A[D+B+8]=s.x,A[D+B+9]=s.y,A[D+B+10]=s.z,A[D+B+11]=L.itemSize===4?s.w:1)}}p={count:u,texture:E,size:new zt(S,w)},n.set(r,p),r.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function wm(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}const Qh=new dn,Cc=new qh(1,1),Jh=new Oh,tu=new Fd,eu=new Xh,Pc=[],Rc=[],Lc=new Float32Array(16),Ic=new Float32Array(9),Dc=new Float32Array(4);function Bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Pc[s];if(o===void 0&&(o=new Float32Array(s),Pc[s]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,i[a].toArray(o,r)}return o}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ma(i,t){let e=Rc[t];e===void 0&&(e=new Int32Array(t),Rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Dc.set(n),i.uniformMatrix2fv(this.addr,!1,Dc),sn(e,n)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Ic.set(n),i.uniformMatrix3fv(this.addr,!1,Ic),sn(e,n)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Lc.set(n),i.uniformMatrix4fv(this.addr,!1,Lc),sn(e,n)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Cc.compareFunction=Bh,o=Cc):o=Qh,e.setTexture2D(t||o,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tu,s)}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||eu,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jh,s)}function Hm(i){switch(i){case 5126:return ym;case 35664:return bm;case 35665:return Sm;case 35666:return Am;case 35674:return Em;case 35675:return Tm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Rm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Dm;case 36294:return Fm;case 36295:return Nm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Om}}function Vm(i,t){i.uniform1fv(this.addr,t)}function Wm(i,t){const e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function Gm(i,t){const e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function Xm(i,t){const e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ym(i,t){const e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){const e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qm(i,t){const e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zm(i,t){i.uniform1iv(this.addr,t)}function jm(i,t){i.uniform2iv(this.addr,t)}function Km(i,t){i.uniform3iv(this.addr,t)}function Qm(i,t){i.uniform4iv(this.addr,t)}function Jm(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){const n=this.cache,s=t.length,o=Ma(e,s);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qh,o[a])}function sg(i,t,e){const n=this.cache,s=t.length,o=Ma(e,s);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||tu,o[a])}function og(i,t,e){const n=this.cache,s=t.length,o=Ma(e,s);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||eu,o[a])}function ag(i,t,e){const n=this.cache,s=t.length,o=Ma(e,s);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jh,o[a])}function rg(i){switch(i){case 5126:return Vm;case 35664:return Wm;case 35665:return Gm;case 35666:return Xm;case 35674:return Ym;case 35675:return $m;case 35676:return qm;case 5124:case 35670:return Zm;case 35667:case 35671:return jm;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return Jm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hm(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(t,e[r.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function Fc(i,t){i.seq.push(t),i.map[t.id]=t}function ug(i,t,e){const n=i.name,s=n.length;for(or.lastIndex=0;;){const o=or.exec(n),a=or.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===s){Fc(e,c===void 0?new lg(r,i,t):new cg(r,i,t));break}else{let u=e.map[r];u===void 0&&(u=new hg(r),Fc(e,u)),e=u}}}class ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);ug(o,a,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Nc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dg=37297;let pg=0;function fg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const Uc=new pe;function mg(i){Ae._getMatrix(Uc,Ae.workingColorSpace,i);const t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+fg(i.getShaderSource(t),a)}else return s}function gg(i,t){const e=mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _g(i,t){let e;switch(t){case Mh:e="Linear";break;case wh:e="Reinhard";break;case yh:e="Cineon";break;case al:e="ACESFilmic";break;case Sh:e="AgX";break;case Ah:e="Neutral";break;case bh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vo=new T;function vg(){Ae.getLuminanceCoefficients(Vo);const i=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Mg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),a=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:r}}return e}function js(i){return i!==""}function Bc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(yg,Sg)}const bg=new Map;function Sg(i,t){let e=me[t];if(e===void 0){const n=bg.get(t);if(n!==void 0)e=me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(i){return i.replace(Ag,Eg)}function Eg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Hc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function Cg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case Cs:t="ENVMAP_TYPE_CUBE";break;case ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xh:t="ENVMAP_BLENDING_MULTIPLY";break;case qu:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function Lg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ig(i,t,e,n){const s=i.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=Tg(e),c=Cg(e),h=Pg(e),u=Rg(e),p=Lg(e),f=xg(e),g=Mg(o),v=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),d.length>0&&(d+=`
`)):(m=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),d=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?me.tonemapping_pars_fragment:"",e.toneMapping!==bi?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),a=el(a),a=Bc(a,e),a=zc(a,e),r=el(r),r=Bc(r,e),r=zc(r,e),a=Oc(a),r=Oc(r),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=M+m+a,_=M+d+r,S=Nc(s,s.VERTEX_SHADER,b),w=Nc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,S),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(v).trim(),R=s.getShaderInfoLog(S).trim(),L=s.getShaderInfoLog(w).trim();let D=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,w);else{const B=kc(s,S,"vertex"),N=kc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+B+`
`+N)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||L==="")&&(k=!1);k&&(P.diagnostics={runnable:D,programLog:C,vertexShader:{log:R,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(S),s.deleteShader(w),E=new ta(s,v),y=wg(s,v)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,dg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}let Dg=0;class Fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ng(t),e.set(t,n)),n}}class Ng{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}}function Ug(i,t,e,n,s,o,a){const r=new ml,l=new Fg,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,P,C,R){const L=C.fog,D=R.geometry,k=y.isMeshStandardMaterial?C.environment:null,B=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),N=B&&B.mapping===ga?B.image.height:null,H=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,X=V!==void 0?V.length:0;let K=0;D.morphAttributes.position!==void 0&&(K=1),D.morphAttributes.normal!==void 0&&(K=2),D.morphAttributes.color!==void 0&&(K=3);let G,W,O,nt;if(H){const ct=$n[H];G=ct.vertexShader,W=ct.fragmentShader}else G=y.vertexShader,W=y.fragmentShader,l.update(y),O=l.getVertexShaderID(y),nt=l.getFragmentShaderID(y);const at=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),j=R.isInstancedMesh===!0,Y=R.isBatchedMesh===!0,it=!!y.map,gt=!!y.matcap,Q=!!B,F=!!y.aoMap,wt=!!y.lightMap,st=!!y.bumpMap,mt=!!y.normalMap,_t=!!y.displacementMap,Pt=!!y.emissiveMap,bt=!!y.metalnessMap,z=!!y.roughnessMap,I=y.anisotropy>0,tt=y.clearcoat>0,pt=y.dispersion>0,vt=y.iridescence>0,ft=y.sheen>0,Dt=y.transmission>0,dt=I&&!!y.anisotropyMap,St=tt&&!!y.clearcoatMap,Wt=tt&&!!y.clearcoatNormalMap,xt=tt&&!!y.clearcoatRoughnessMap,Ct=vt&&!!y.iridescenceMap,$t=vt&&!!y.iridescenceThicknessMap,Zt=ft&&!!y.sheenColorMap,kt=ft&&!!y.sheenRoughnessMap,Jt=!!y.specularMap,jt=!!y.specularColorMap,ye=!!y.specularIntensityMap,J=Dt&&!!y.transmissionMap,Lt=Dt&&!!y.thicknessMap,rt=!!y.gradientMap,Mt=!!y.alphaMap,Ft=y.alphaTest>0,Rt=!!y.alphaHash,ne=!!y.extensions;let Re=bi;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Re=i.toneMapping);const Ge={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:W,defines:y.defines,customVertexShaderID:O,customFragmentShaderID:nt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Y,batchingColor:Y&&R._colorsTexture!==null,instancing:j,instancingColor:j&&R.instanceColor!==null,instancingMorph:j&&R.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ls,alphaToCoverage:!!y.alphaToCoverage,map:it,matcap:gt,envMap:Q,envMapMode:Q&&B.mapping,envMapCubeUVHeight:N,aoMap:F,lightMap:wt,bumpMap:st,normalMap:mt,displacementMap:p&&_t,emissiveMap:Pt,normalMapObjectSpace:mt&&y.normalMapType===ed,normalMapTangentSpace:mt&&y.normalMapType===kh,metalnessMap:bt,roughnessMap:z,anisotropy:I,anisotropyMap:dt,clearcoat:tt,clearcoatMap:St,clearcoatNormalMap:Wt,clearcoatRoughnessMap:xt,dispersion:pt,iridescence:vt,iridescenceMap:Ct,iridescenceThicknessMap:$t,sheen:ft,sheenColorMap:Zt,sheenRoughnessMap:kt,specularMap:Jt,specularColorMap:jt,specularIntensityMap:ye,transmission:Dt,transmissionMap:J,thicknessMap:Lt,gradientMap:rt,opaque:y.transparent===!1&&y.blending===ws&&y.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Ft,alphaHash:Rt,combine:y.combine,mapUv:it&&v(y.map.channel),aoMapUv:F&&v(y.aoMap.channel),lightMapUv:wt&&v(y.lightMap.channel),bumpMapUv:st&&v(y.bumpMap.channel),normalMapUv:mt&&v(y.normalMap.channel),displacementMapUv:_t&&v(y.displacementMap.channel),emissiveMapUv:Pt&&v(y.emissiveMap.channel),metalnessMapUv:bt&&v(y.metalnessMap.channel),roughnessMapUv:z&&v(y.roughnessMap.channel),anisotropyMapUv:dt&&v(y.anisotropyMap.channel),clearcoatMapUv:St&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:kt&&v(y.sheenRoughnessMap.channel),specularMapUv:Jt&&v(y.specularMap.channel),specularColorMapUv:jt&&v(y.specularColorMap.channel),specularIntensityMapUv:ye&&v(y.specularIntensityMap.channel),transmissionMapUv:J&&v(y.transmissionMap.channel),thicknessMapUv:Lt&&v(y.thicknessMap.channel),alphaMapUv:Mt&&v(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(mt||I),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!D.attributes.uv&&(it||Mt),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:$,skinning:R.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:K,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:it&&y.map.isVideoTexture===!0&&Ae.getTransfer(y.map.colorSpace)===Le,decodeVideoTextureEmissive:Pt&&y.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(y.emissiveMap.colorSpace)===Le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hn,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&y.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(M(x,y),b(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){r.disableAll(),x.supportsVertexTextures&&r.enable(0),x.instancing&&r.enable(1),x.instancingColor&&r.enable(2),x.instancingMorph&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),x.dispersion&&r.enable(20),x.batchingColor&&r.enable(21),y.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reverseDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),y.push(r.mask)}function _(y){const x=g[y.type];let P;if(x){const C=$n[x];P=ao.clone(C.uniforms)}else P=y.uniforms;return P}function S(y,x){let P;for(let C=0,R=h.length;C<R;C++){const L=h[C];if(L.cacheKey===x){P=L,++P.usedTimes;break}}return P===void 0&&(P=new Ig(i,x,y,o),h.push(P)),P}function w(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:E}}function kg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function n(a){i.delete(a)}function s(a,r,l){i.get(a)[r]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(u,p,f,g,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function r(u,p,f,g,v,m){const d=a(u,p,f,g,v,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function l(u,p,f,g,v,m){const d=a(u,p,f,g,v,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,p){e.length>1&&e.sort(u||Bg),n.length>1&&n.sort(p||Vc),s.length>1&&s.sort(p||Vc)}function h(){for(let u=t,p=i.length;u<p;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:r,unshift:l,finish:h,sort:c}}function zg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let a;return o===void 0?(a=new Wc,i.set(n,[a])):s>=o.length?(a=new Wc,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Og(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new It};break;case"SpotLight":e={position:new T,direction:new T,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vg=0;function Wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gg(i){const t=new Og,e=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,o=new ee,a=new ee;function r(c){let h=0,u=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,v=0,m=0,d=0,M=0,b=0,_=0,S=0,w=0,A=0;c.sort(Wg);for(let y=0,x=c.length;y<x;y++){const P=c[y],C=P.color,R=P.intensity,L=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*R,u+=C.g*R,p+=C.b*R;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],R);A++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,N=e.get(P);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(C).multiplyScalar(R),k.distance=L,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[v]=k;const B=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,B.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[v]=B.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=D,_++}v++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(C).multiplyScalar(R),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const B=P.shadow,N=e.get(P);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,N.shadowCameraNear=B.camera.near,N.shadowCameraFar=B.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(R),k.groundColor.copy(P.groundColor).multiplyScalar(R),n.hemi[d]=k,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==d||E.numDirectionalShadows!==M||E.numPointShadows!==b||E.numSpotShadows!==_||E.numSpotMaps!==S||E.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,E.directionalLength=f,E.pointLength=g,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=d,E.numDirectionalShadows=M,E.numPointShadows=b,E.numSpotShadows=_,E.numSpotMaps=S,E.numLightProbes=A,n.version=Vg++)}function l(c,h){let u=0,p=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const b=c[d];if(b.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(b.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),a.identity(),o.copy(b.matrixWorld),o.premultiply(m),a.extractRotation(o),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const _=n.point[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:n}}function Gc(i){const t=new Gg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function Xg(i){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let r;return a===void 0?(r=new Gc(i),t.set(s,[r])):o>=a.length?(r=new Gc(i),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}const Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function qg(i,t,e){let n=new vl;const s=new zt,o=new zt,a=new Be,r=new ap({depthPacking:td}),l=new rp,c={},h=e.maxTextureSize,u={[Ti]:xn,[xn]:Ti,[hn]:hn},p=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Yg,fragmentShader:$g}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new Z(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new He(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let d=this.type;this.render=function(w,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ai),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const R=d!==ni&&this.type===ni,L=d===ni&&this.type!==ni;for(let D=0,k=w.length;D<k;D++){const B=w[D],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const H=N.getFrameExtents();if(s.multiply(H),o.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/H.x),s.x=o.x*H.x,N.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/H.y),s.y=o.y*H.y,N.mapSize.y=o.y)),N.map===null||R===!0||L===!0){const X=this.type!==ni?{minFilter:yn,magFilter:yn}:{};N.map!==null&&N.map.dispose(),N.map=new Fn(s.x,s.y,X),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const V=N.getViewportCount();for(let X=0;X<V;X++){const K=N.getViewport(X);a.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),C.viewport(a),N.updateMatrices(B,X),n=N.getFrustum(),_(A,E,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===ni&&M(N,E),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,P)};function M(w,A){const E=t.update(v);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fn(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,E,p,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,E,f,v,null)}function b(w,A,E,y){let x=null;const P=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=E.isPointLight===!0?l:r,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const C=x.uuid,R=A.uuid;let L=c[C];L===void 0&&(L={},c[C]=L);let D=L[R];D===void 0&&(D=x.clone(),L[R]=D,A.addEventListener("dispose",S)),x=D}if(x.visible=A.visible,x.wireframe=A.wireframe,y===ni?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const C=i.properties.get(x);C.light=E}return x}function _(w,A,E,y,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===ni)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const R=t.update(w),L=w.material;if(Array.isArray(L)){const D=R.groups;for(let k=0,B=D.length;k<B;k++){const N=D[k],H=L[N.materialIndex];if(H&&H.visible){const V=b(w,H,y,x);w.onBeforeShadow(i,w,A,E,R,V,N),i.renderBufferDirect(E,null,R,V,w,N),w.onAfterShadow(i,w,A,E,R,V,N)}}}else if(L.visible){const D=b(w,L,y,x);w.onBeforeShadow(i,w,A,E,R,D,null),i.renderBufferDirect(E,null,R,D,w,null),w.onAfterShadow(i,w,A,E,R,D,null)}}const C=w.children;for(let R=0,L=C.length;R<L;R++)_(C[R],A,E,y,x)}function S(w){w.target.removeEventListener("dispose",S);for(const E in c){const y=c[E],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Zg={[gr]:_r,[vr]:wr,[xr]:yr,[ri]:Mr,[_r]:gr,[wr]:vr,[yr]:xr,[Mr]:ri};function jg(i,t){function e(){let J=!1;const Lt=new Be;let rt=null;const Mt=new Be(0,0,0,0);return{setMask:function(Ft){rt!==Ft&&!J&&(i.colorMask(Ft,Ft,Ft,Ft),rt=Ft)},setLocked:function(Ft){J=Ft},setClear:function(Ft,Rt,ne,Re,Ge){Ge===!0&&(Ft*=Re,Rt*=Re,ne*=Re),Lt.set(Ft,Rt,ne,Re),Mt.equals(Lt)===!1&&(i.clearColor(Ft,Rt,ne,Re),Mt.copy(Lt))},reset:function(){J=!1,rt=null,Mt.set(-1,0,0,0)}}}function n(){let J=!1,Lt=!1,rt=null,Mt=null,Ft=null;return{setReversed:function(Rt){if(Lt!==Rt){const ne=t.get("EXT_clip_control");Lt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const Re=Ft;Ft=null,this.setClear(Re)}Lt=Rt},getReversed:function(){return Lt},setTest:function(Rt){Rt?at(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(Rt){rt!==Rt&&!J&&(i.depthMask(Rt),rt=Rt)},setFunc:function(Rt){if(Lt&&(Rt=Zg[Rt]),Mt!==Rt){switch(Rt){case gr:i.depthFunc(i.NEVER);break;case _r:i.depthFunc(i.ALWAYS);break;case vr:i.depthFunc(i.LESS);break;case ri:i.depthFunc(i.LEQUAL);break;case xr:i.depthFunc(i.EQUAL);break;case Mr:i.depthFunc(i.GEQUAL);break;case wr:i.depthFunc(i.GREATER);break;case yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Rt}},setLocked:function(Rt){J=Rt},setClear:function(Rt){Ft!==Rt&&(Lt&&(Rt=1-Rt),i.clearDepth(Rt),Ft=Rt)},reset:function(){J=!1,rt=null,Mt=null,Ft=null,Lt=!1}}}function s(){let J=!1,Lt=null,rt=null,Mt=null,Ft=null,Rt=null,ne=null,Re=null,Ge=null;return{setTest:function(ct){J||(ct?at(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(ct){Lt!==ct&&!J&&(i.stencilMask(ct),Lt=ct)},setFunc:function(ct,yt,Bt){(rt!==ct||Mt!==yt||Ft!==Bt)&&(i.stencilFunc(ct,yt,Bt),rt=ct,Mt=yt,Ft=Bt)},setOp:function(ct,yt,Bt){(Rt!==ct||ne!==yt||Re!==Bt)&&(i.stencilOp(ct,yt,Bt),Rt=ct,ne=yt,Re=Bt)},setLocked:function(ct){J=ct},setClear:function(ct){Ge!==ct&&(i.clearStencil(ct),Ge=ct)},reset:function(){J=!1,Lt=null,rt=null,Mt=null,Ft=null,Rt=null,ne=null,Re=null,Ge=null}}}const o=new e,a=new n,r=new s,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,f=[],g=null,v=!1,m=null,d=null,M=null,b=null,_=null,S=null,w=null,A=new It(0,0,0),E=0,y=!1,x=null,P=null,C=null,R=null,L=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(N)[1]),k=B>=1):N.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),k=B>=2);let H=null,V={};const X=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),G=new Be().fromArray(X),W=new Be().fromArray(K);function O(J,Lt,rt,Mt){const Ft=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(J,Rt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<rt;ne++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(Lt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return Rt}const nt={};nt[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),at(i.DEPTH_TEST),a.setFunc(ri),st(!1),mt(Il),at(i.CULL_FACE),F(ai);function at(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function $(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function j(J,Lt){return u[J]!==Lt?(i.bindFramebuffer(J,Lt),u[J]=Lt,J===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Lt),J===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Y(J,Lt){let rt=f,Mt=!1;if(J){rt=p.get(Lt),rt===void 0&&(rt=[],p.set(Lt,rt));const Ft=J.textures;if(rt.length!==Ft.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,ne=Ft.length;Rt<ne;Rt++)rt[Rt]=i.COLOR_ATTACHMENT0+Rt;rt.length=Ft.length,Mt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(rt)}function it(J){return g!==J?(i.useProgram(J),g=J,!0):!1}const gt={[Wi]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};gt[Du]=i.MIN,gt[Fu]=i.MAX;const Q={[Nu]:i.ZERO,[Uu]:i.ONE,[ku]:i.SRC_COLOR,[fr]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[mr]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function F(J,Lt,rt,Mt,Ft,Rt,ne,Re,Ge,ct){if(J===ai){v===!0&&($(i.BLEND),v=!1);return}if(v===!1&&(at(i.BLEND),v=!0),J!==Ru){if(J!==m||ct!==y){if((d!==Wi||_!==Wi)&&(i.blendEquation(i.FUNC_ADD),d=Wi,_=Wi),ct)switch(J){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}M=null,b=null,S=null,w=null,A.set(0,0,0),E=0,m=J,y=ct}return}Ft=Ft||Lt,Rt=Rt||rt,ne=ne||Mt,(Lt!==d||Ft!==_)&&(i.blendEquationSeparate(gt[Lt],gt[Ft]),d=Lt,_=Ft),(rt!==M||Mt!==b||Rt!==S||ne!==w)&&(i.blendFuncSeparate(Q[rt],Q[Mt],Q[Rt],Q[ne]),M=rt,b=Mt,S=Rt,w=ne),(Re.equals(A)===!1||Ge!==E)&&(i.blendColor(Re.r,Re.g,Re.b,Ge),A.copy(Re),E=Ge),m=J,y=!1}function wt(J,Lt){J.side===hn?$(i.CULL_FACE):at(i.CULL_FACE);let rt=J.side===xn;Lt&&(rt=!rt),st(rt),J.blending===ws&&J.transparent===!1?F(ai):F(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),a.setFunc(J.depthFunc),a.setTest(J.depthTest),a.setMask(J.depthWrite),o.setMask(J.colorWrite);const Mt=J.stencilWrite;r.setTest(Mt),Mt&&(r.setMask(J.stencilWriteMask),r.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),r.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Pt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(J){x!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),x=J)}function mt(J){J!==Cu?(at(i.CULL_FACE),J!==P&&(J===Il?i.cullFace(i.BACK):J===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),P=J}function _t(J){J!==C&&(k&&i.lineWidth(J),C=J)}function Pt(J,Lt,rt){J?(at(i.POLYGON_OFFSET_FILL),(R!==Lt||L!==rt)&&(i.polygonOffset(Lt,rt),R=Lt,L=rt)):$(i.POLYGON_OFFSET_FILL)}function bt(J){J?at(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function z(J){J===void 0&&(J=i.TEXTURE0+D-1),H!==J&&(i.activeTexture(J),H=J)}function I(J,Lt,rt){rt===void 0&&(H===null?rt=i.TEXTURE0+D-1:rt=H);let Mt=V[rt];Mt===void 0&&(Mt={type:void 0,texture:void 0},V[rt]=Mt),(Mt.type!==J||Mt.texture!==Lt)&&(H!==rt&&(i.activeTexture(rt),H=rt),i.bindTexture(J,Lt||nt[J]),Mt.type=J,Mt.texture=Lt)}function tt(){const J=V[H];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function vt(){try{i.compressedTexImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ft(){try{i.texSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Dt(){try{i.texSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function dt(){try{i.compressedTexSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function St(){try{i.compressedTexSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Wt(){try{i.texStorage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function xt(){try{i.texStorage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ct(){try{i.texImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function $t(){try{i.texImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Zt(J){G.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),G.copy(J))}function kt(J){W.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),W.copy(J))}function Jt(J,Lt){let rt=c.get(Lt);rt===void 0&&(rt=new WeakMap,c.set(Lt,rt));let Mt=rt.get(J);Mt===void 0&&(Mt=i.getUniformBlockIndex(Lt,J.name),rt.set(J,Mt))}function jt(J,Lt){const Mt=c.get(Lt).get(J);l.get(Lt)!==Mt&&(i.uniformBlockBinding(Lt,Mt,J.__bindingPointIndex),l.set(Lt,Mt))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,V={},u={},p=new WeakMap,f=[],g=null,v=!1,m=null,d=null,M=null,b=null,_=null,S=null,w=null,A=new It(0,0,0),E=0,y=!1,x=null,P=null,C=null,R=null,L=null,G.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:at,disable:$,bindFramebuffer:j,drawBuffers:Y,useProgram:it,setBlending:F,setMaterial:wt,setFlipSided:st,setCullFace:mt,setLineWidth:_t,setPolygonOffset:Pt,setScissorTest:bt,activeTexture:z,bindTexture:I,unbindTexture:tt,compressedTexImage2D:pt,compressedTexImage3D:vt,texImage2D:Ct,texImage3D:$t,updateUBOMapping:Jt,uniformBlockBinding:jt,texStorage2D:Wt,texStorage3D:xt,texSubImage2D:ft,texSubImage3D:Dt,compressedTexSubImage2D:dt,compressedTexSubImage3D:St,scissor:Zt,viewport:kt,reset:ye}}function Kg(i,t,e,n,s,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap;let u;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,I){return f?new OffscreenCanvas(z,I):aa("canvas")}function v(z,I,tt){let pt=1;const vt=bt(z);if((vt.width>tt||vt.height>tt)&&(pt=tt/Math.max(vt.width,vt.height)),pt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ft=Math.floor(pt*vt.width),Dt=Math.floor(pt*vt.height);u===void 0&&(u=g(ft,Dt));const dt=I?g(ft,Dt):u;return dt.width=ft,dt.height=Dt,dt.getContext("2d").drawImage(z,0,0,ft,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Dt+")."),dt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),z;return z}function m(z){return z.generateMipmaps}function d(z){i.generateMipmap(z)}function M(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(z,I,tt,pt,vt=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ft=I;if(I===i.RED&&(tt===i.FLOAT&&(ft=i.R32F),tt===i.HALF_FLOAT&&(ft=i.R16F),tt===i.UNSIGNED_BYTE&&(ft=i.R8)),I===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ft=i.R8UI),tt===i.UNSIGNED_SHORT&&(ft=i.R16UI),tt===i.UNSIGNED_INT&&(ft=i.R32UI),tt===i.BYTE&&(ft=i.R8I),tt===i.SHORT&&(ft=i.R16I),tt===i.INT&&(ft=i.R32I)),I===i.RG&&(tt===i.FLOAT&&(ft=i.RG32F),tt===i.HALF_FLOAT&&(ft=i.RG16F),tt===i.UNSIGNED_BYTE&&(ft=i.RG8)),I===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ft=i.RG8UI),tt===i.UNSIGNED_SHORT&&(ft=i.RG16UI),tt===i.UNSIGNED_INT&&(ft=i.RG32UI),tt===i.BYTE&&(ft=i.RG8I),tt===i.SHORT&&(ft=i.RG16I),tt===i.INT&&(ft=i.RG32I)),I===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),tt===i.UNSIGNED_INT&&(ft=i.RGB32UI),tt===i.BYTE&&(ft=i.RGB8I),tt===i.SHORT&&(ft=i.RGB16I),tt===i.INT&&(ft=i.RGB32I)),I===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),tt===i.UNSIGNED_INT&&(ft=i.RGBA32UI),tt===i.BYTE&&(ft=i.RGBA8I),tt===i.SHORT&&(ft=i.RGBA16I),tt===i.INT&&(ft=i.RGBA32I)),I===i.RGB&&tt===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),I===i.RGBA){const Dt=vt?sa:Ae.getTransfer(pt);tt===i.FLOAT&&(ft=i.RGBA32F),tt===i.HALF_FLOAT&&(ft=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(ft=Dt===Le?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function _(z,I){let tt;return z?I===null||I===qi||I===Ps?tt=i.DEPTH24_STENCIL8:I===Gn?tt=i.DEPTH32F_STENCIL8:I===io&&(tt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===qi||I===Ps?tt=i.DEPTH_COMPONENT24:I===Gn?tt=i.DEPTH_COMPONENT32F:I===io&&(tt=i.DEPTH_COMPONENT16),tt}function S(z,I){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==yn&&z.minFilter!==Wn?Math.log2(Math.max(I.width,I.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?I.mipmaps.length:1}function w(z){const I=z.target;I.removeEventListener("dispose",w),E(I),I.isVideoTexture&&h.delete(I)}function A(z){const I=z.target;I.removeEventListener("dispose",A),x(I)}function E(z){const I=n.get(z);if(I.__webglInit===void 0)return;const tt=z.source,pt=p.get(tt);if(pt){const vt=pt[I.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&y(z),Object.keys(pt).length===0&&p.delete(tt)}n.remove(z)}function y(z){const I=n.get(z);i.deleteTexture(I.__webglTexture);const tt=z.source,pt=p.get(tt);delete pt[I.__cacheKey],a.memory.textures--}function x(z){const I=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(I.__webglFramebuffer[pt]))for(let vt=0;vt<I.__webglFramebuffer[pt].length;vt++)i.deleteFramebuffer(I.__webglFramebuffer[pt][vt]);else i.deleteFramebuffer(I.__webglFramebuffer[pt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[pt])}else{if(Array.isArray(I.__webglFramebuffer))for(let pt=0;pt<I.__webglFramebuffer.length;pt++)i.deleteFramebuffer(I.__webglFramebuffer[pt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let pt=0;pt<I.__webglColorRenderbuffer.length;pt++)I.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[pt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const tt=z.textures;for(let pt=0,vt=tt.length;pt<vt;pt++){const ft=n.get(tt[pt]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(tt[pt])}n.remove(z)}let P=0;function C(){P=0}function R(){const z=P;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),P+=1,z}function L(z){const I=[];return I.push(z.wrapS),I.push(z.wrapT),I.push(z.wrapR||0),I.push(z.magFilter),I.push(z.minFilter),I.push(z.anisotropy),I.push(z.internalFormat),I.push(z.format),I.push(z.type),I.push(z.generateMipmaps),I.push(z.premultiplyAlpha),I.push(z.flipY),I.push(z.unpackAlignment),I.push(z.colorSpace),I.join()}function D(z,I){const tt=n.get(z);if(z.isVideoTexture&&_t(z),z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){const pt=z.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(tt,z,I);return}}e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+I)}function k(z,I){const tt=n.get(z);if(z.version>0&&tt.__version!==z.version){W(tt,z,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+I)}function B(z,I){const tt=n.get(z);if(z.version>0&&tt.__version!==z.version){W(tt,z,I);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+I)}function N(z,I){const tt=n.get(z);if(z.version>0&&tt.__version!==z.version){O(tt,z,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+I)}const H={[jn]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},V={[yn]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},X={[nd]:i.NEVER,[ld]:i.ALWAYS,[id]:i.LESS,[Bh]:i.LEQUAL,[sd]:i.EQUAL,[rd]:i.GEQUAL,[od]:i.GREATER,[ad]:i.NOTEQUAL};function K(z,I){if(I.type===Gn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Wn||I.magFilter===qo||I.magFilter===Zs||I.magFilter===wi||I.minFilter===Wn||I.minFilter===qo||I.minFilter===Zs||I.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,H[I.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,H[I.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,H[I.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,V[I.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,V[I.minFilter]),I.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,X[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===yn||I.minFilter!==Zs&&I.minFilter!==wi||I.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function G(z,I){let tt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,I.addEventListener("dispose",w));const pt=I.source;let vt=p.get(pt);vt===void 0&&(vt={},p.set(pt,vt));const ft=L(I);if(ft!==z.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),vt[ft].usedTimes++;const Dt=vt[z.__cacheKey];Dt!==void 0&&(vt[z.__cacheKey].usedTimes--,Dt.usedTimes===0&&y(I)),z.__cacheKey=ft,z.__webglTexture=vt[ft].texture}return tt}function W(z,I,tt){let pt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(pt=i.TEXTURE_3D);const vt=G(z,I),ft=I.source;e.bindTexture(pt,z.__webglTexture,i.TEXTURE0+tt);const Dt=n.get(ft);if(ft.version!==Dt.__version||vt===!0){e.activeTexture(i.TEXTURE0+tt);const dt=Ae.getPrimaries(Ae.workingColorSpace),St=I.colorSpace===Dn?null:Ae.getPrimaries(I.colorSpace),Wt=I.colorSpace===Dn||dt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let xt=v(I.image,!1,s.maxTextureSize);xt=Pt(I,xt);const Ct=o.convert(I.format,I.colorSpace),$t=o.convert(I.type);let Zt=b(I.internalFormat,Ct,$t,I.colorSpace,I.isVideoTexture);K(pt,I);let kt;const Jt=I.mipmaps,jt=I.isVideoTexture!==!0,ye=Dt.__version===void 0||vt===!0,J=ft.dataReady,Lt=S(I,xt);if(I.isDepthTexture)Zt=_(I.format===Rs,I.type),ye&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Zt,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,xt.width,xt.height,0,Ct,$t,null));else if(I.isDataTexture)if(Jt.length>0){jt&&ye&&e.texStorage2D(i.TEXTURE_2D,Lt,Zt,Jt[0].width,Jt[0].height);for(let rt=0,Mt=Jt.length;rt<Mt;rt++)kt=Jt[rt],jt?J&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,kt.width,kt.height,Ct,$t,kt.data):e.texImage2D(i.TEXTURE_2D,rt,Zt,kt.width,kt.height,0,Ct,$t,kt.data);I.generateMipmaps=!1}else jt?(ye&&e.texStorage2D(i.TEXTURE_2D,Lt,Zt,xt.width,xt.height),J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt.width,xt.height,Ct,$t,xt.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,xt.width,xt.height,0,Ct,$t,xt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){jt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Zt,Jt[0].width,Jt[0].height,xt.depth);for(let rt=0,Mt=Jt.length;rt<Mt;rt++)if(kt=Jt[rt],I.format!==Cn)if(Ct!==null)if(jt){if(J)if(I.layerUpdates.size>0){const Ft=wc(kt.width,kt.height,I.format,I.type);for(const Rt of I.layerUpdates){const ne=kt.data.subarray(Rt*Ft/kt.data.BYTES_PER_ELEMENT,(Rt+1)*Ft/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Rt,kt.width,kt.height,1,Ct,ne)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,kt.width,kt.height,xt.depth,Ct,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Zt,kt.width,kt.height,xt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,kt.width,kt.height,xt.depth,Ct,$t,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Zt,kt.width,kt.height,xt.depth,0,Ct,$t,kt.data)}else{jt&&ye&&e.texStorage2D(i.TEXTURE_2D,Lt,Zt,Jt[0].width,Jt[0].height);for(let rt=0,Mt=Jt.length;rt<Mt;rt++)kt=Jt[rt],I.format!==Cn?Ct!==null?jt?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,kt.width,kt.height,Ct,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Zt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?J&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,kt.width,kt.height,Ct,$t,kt.data):e.texImage2D(i.TEXTURE_2D,rt,Zt,kt.width,kt.height,0,Ct,$t,kt.data)}else if(I.isDataArrayTexture)if(jt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Zt,xt.width,xt.height,xt.depth),J)if(I.layerUpdates.size>0){const rt=wc(xt.width,xt.height,I.format,I.type);for(const Mt of I.layerUpdates){const Ft=xt.data.subarray(Mt*rt/xt.data.BYTES_PER_ELEMENT,(Mt+1)*rt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,xt.width,xt.height,1,Ct,$t,Ft)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ct,$t,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,xt.width,xt.height,xt.depth,0,Ct,$t,xt.data);else if(I.isData3DTexture)jt?(ye&&e.texStorage3D(i.TEXTURE_3D,Lt,Zt,xt.width,xt.height,xt.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ct,$t,xt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,xt.width,xt.height,xt.depth,0,Ct,$t,xt.data);else if(I.isFramebufferTexture){if(ye)if(jt)e.texStorage2D(i.TEXTURE_2D,Lt,Zt,xt.width,xt.height);else{let rt=xt.width,Mt=xt.height;for(let Ft=0;Ft<Lt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Zt,rt,Mt,0,Ct,$t,null),rt>>=1,Mt>>=1}}else if(Jt.length>0){if(jt&&ye){const rt=bt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,Zt,rt.width,rt.height)}for(let rt=0,Mt=Jt.length;rt<Mt;rt++)kt=Jt[rt],jt?J&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Ct,$t,kt):e.texImage2D(i.TEXTURE_2D,rt,Zt,Ct,$t,kt);I.generateMipmaps=!1}else if(jt){if(ye){const rt=bt(xt);e.texStorage2D(i.TEXTURE_2D,Lt,Zt,rt.width,rt.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,$t,xt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Ct,$t,xt);m(I)&&d(pt),Dt.__version=ft.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function O(z,I,tt){if(I.image.length!==6)return;const pt=G(z,I),vt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+tt);const ft=n.get(vt);if(vt.version!==ft.__version||pt===!0){e.activeTexture(i.TEXTURE0+tt);const Dt=Ae.getPrimaries(Ae.workingColorSpace),dt=I.colorSpace===Dn?null:Ae.getPrimaries(I.colorSpace),St=I.colorSpace===Dn||Dt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Wt=I.isCompressedTexture||I.image[0].isCompressedTexture,xt=I.image[0]&&I.image[0].isDataTexture,Ct=[];for(let Mt=0;Mt<6;Mt++)!Wt&&!xt?Ct[Mt]=v(I.image[Mt],!0,s.maxCubemapSize):Ct[Mt]=xt?I.image[Mt].image:I.image[Mt],Ct[Mt]=Pt(I,Ct[Mt]);const $t=Ct[0],Zt=o.convert(I.format,I.colorSpace),kt=o.convert(I.type),Jt=b(I.internalFormat,Zt,kt,I.colorSpace),jt=I.isVideoTexture!==!0,ye=ft.__version===void 0||pt===!0,J=vt.dataReady;let Lt=S(I,$t);K(i.TEXTURE_CUBE_MAP,I);let rt;if(Wt){jt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Jt,$t.width,$t.height);for(let Mt=0;Mt<6;Mt++){rt=Ct[Mt].mipmaps;for(let Ft=0;Ft<rt.length;Ft++){const Rt=rt[Ft];I.format!==Cn?Zt!==null?jt?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,0,0,Rt.width,Rt.height,Zt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,Jt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,0,0,Rt.width,Rt.height,Zt,kt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,Jt,Rt.width,Rt.height,0,Zt,kt,Rt.data)}}}else{if(rt=I.mipmaps,jt&&ye){rt.length>0&&Lt++;const Mt=bt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Jt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(xt){jt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Ct[Mt].width,Ct[Mt].height,Zt,kt,Ct[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Jt,Ct[Mt].width,Ct[Mt].height,0,Zt,kt,Ct[Mt].data);for(let Ft=0;Ft<rt.length;Ft++){const ne=rt[Ft].image[Mt].image;jt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,0,0,ne.width,ne.height,Zt,kt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,Jt,ne.width,ne.height,0,Zt,kt,ne.data)}}else{jt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Zt,kt,Ct[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Jt,Zt,kt,Ct[Mt]);for(let Ft=0;Ft<rt.length;Ft++){const Rt=rt[Ft];jt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,0,0,Zt,kt,Rt.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,Jt,Zt,kt,Rt.image[Mt])}}}m(I)&&d(i.TEXTURE_CUBE_MAP),ft.__version=vt.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function nt(z,I,tt,pt,vt,ft){const Dt=o.convert(tt.format,tt.colorSpace),dt=o.convert(tt.type),St=b(tt.internalFormat,Dt,dt,tt.colorSpace),Wt=n.get(I),xt=n.get(tt);if(xt.__renderTarget=I,!Wt.__hasExternalTextures){const Ct=Math.max(1,I.width>>ft),$t=Math.max(1,I.height>>ft);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,ft,St,Ct,$t,I.depth,0,Dt,dt,null):e.texImage2D(vt,ft,St,Ct,$t,0,Dt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),mt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,vt,xt.__webglTexture,0,st(I)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,vt,xt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(z,I,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,z),I.depthBuffer){const pt=I.depthTexture,vt=pt&&pt.isDepthTexture?pt.type:null,ft=_(I.stencilBuffer,vt),Dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=st(I);mt(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,ft,I.width,I.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,ft,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,ft,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,z)}else{const pt=I.textures;for(let vt=0;vt<pt.length;vt++){const ft=pt[vt],Dt=o.convert(ft.format,ft.colorSpace),dt=o.convert(ft.type),St=b(ft.internalFormat,Dt,dt,ft.colorSpace),Wt=st(I);tt&&mt(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,St,I.width,I.height):mt(I)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,St,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,St,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(z,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=n.get(I.depthTexture);pt.__renderTarget=I,(!pt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),D(I.depthTexture,0);const vt=pt.__webglTexture,ft=st(I);if(I.depthTexture.format===ys)mt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(I.depthTexture.format===Rs)mt(I)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function j(z){const I=n.get(z),tt=z.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==z.depthTexture){const pt=z.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),pt){const vt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,pt.removeEventListener("dispose",vt)};pt.addEventListener("dispose",vt),I.__depthDisposeCallback=vt}I.__boundDepthTexture=pt}if(z.depthTexture&&!I.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");$(I.__webglFramebuffer,z)}else if(tt){I.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[pt]),I.__webglDepthbuffer[pt]===void 0)I.__webglDepthbuffer[pt]=i.createRenderbuffer(),at(I.__webglDepthbuffer[pt],z,!1);else{const vt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=I.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,ft)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),at(I.__webglDepthbuffer,z,!1);else{const pt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,vt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(z,I,tt){const pt=n.get(z);I!==void 0&&nt(pt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&j(z)}function it(z){const I=z.texture,tt=n.get(z),pt=n.get(I);z.addEventListener("dispose",A);const vt=z.textures,ft=z.isWebGLCubeRenderTarget===!0,Dt=vt.length>1;if(Dt||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=I.version,a.memory.textures++),ft){tt.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(I.mipmaps&&I.mipmaps.length>0){tt.__webglFramebuffer[dt]=[];for(let St=0;St<I.mipmaps.length;St++)tt.__webglFramebuffer[dt][St]=i.createFramebuffer()}else tt.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){tt.__webglFramebuffer=[];for(let dt=0;dt<I.mipmaps.length;dt++)tt.__webglFramebuffer[dt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let dt=0,St=vt.length;dt<St;dt++){const Wt=n.get(vt[dt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(z.samples>0&&mt(z)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let dt=0;dt<vt.length;dt++){const St=vt[dt];tt.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[dt]);const Wt=o.convert(St.format,St.colorSpace),xt=o.convert(St.type),Ct=b(St.internalFormat,Wt,xt,St.colorSpace,z.isXRRenderTarget===!0),$t=st(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Ct,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),at(tt.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),K(i.TEXTURE_CUBE_MAP,I);for(let dt=0;dt<6;dt++)if(I.mipmaps&&I.mipmaps.length>0)for(let St=0;St<I.mipmaps.length;St++)nt(tt.__webglFramebuffer[dt][St],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,St);else nt(tt.__webglFramebuffer[dt],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(I)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let dt=0,St=vt.length;dt<St;dt++){const Wt=vt[dt],xt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,xt.__webglTexture),K(i.TEXTURE_2D,Wt),nt(tt.__webglFramebuffer,z,Wt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(Wt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(dt=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,pt.__webglTexture),K(dt,I),I.mipmaps&&I.mipmaps.length>0)for(let St=0;St<I.mipmaps.length;St++)nt(tt.__webglFramebuffer[St],z,I,i.COLOR_ATTACHMENT0,dt,St);else nt(tt.__webglFramebuffer,z,I,i.COLOR_ATTACHMENT0,dt,0);m(I)&&d(dt),e.unbindTexture()}z.depthBuffer&&j(z)}function gt(z){const I=z.textures;for(let tt=0,pt=I.length;tt<pt;tt++){const vt=I[tt];if(m(vt)){const ft=M(z),Dt=n.get(vt).__webglTexture;e.bindTexture(ft,Dt),d(ft),e.unbindTexture()}}}const Q=[],F=[];function wt(z){if(z.samples>0){if(mt(z)===!1){const I=z.textures,tt=z.width,pt=z.height;let vt=i.COLOR_BUFFER_BIT;const ft=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(z),dt=I.length>1;if(dt)for(let St=0;St<I.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let St=0;St<I.length;St++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[St]);const Wt=n.get(I[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,vt,i.NEAREST),l===!0&&(Q.length=0,F.length=0,Q.push(i.COLOR_ATTACHMENT0+St),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Q.push(ft),F.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let St=0;St<I.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[St]);const Wt=n.get(I[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){const I=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function st(z){return Math.min(s.maxSamples,z.samples)}function mt(z){const I=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function _t(z){const I=a.render.frame;h.get(z)!==I&&(h.set(z,I),z.update())}function Pt(z,I){const tt=z.colorSpace,pt=z.format,vt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||tt!==Ls&&tt!==Dn&&(Ae.getTransfer(tt)===Le?(pt!==Cn||vt!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),I}function bt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=C,this.setTexture2D=D,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=N,this.rebindTextures=Y,this.setupRenderTarget=it,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=mt}function Qg(i,t){function e(n,s=Dn){let o;const a=Ae.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Ph)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===rl)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Cn)return i.RGBA;if(n===Dh)return i.LUMINANCE;if(n===Fh)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===Nh)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===pl)return i.RGBA_INTEGER;if(n===Zo||n===jo||n===Ko||n===Qo)if(a===Le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ar||n===Er||n===Tr||n===Cr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ar)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Er)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pr||n===Rr||n===Lr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Pr||n===Rr)return a===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Lr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ir||n===Dr||n===Fr||n===Nr||n===Ur||n===kr||n===Br||n===zr||n===Or||n===Hr||n===Vr||n===Wr||n===Gr||n===Xr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ir)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ur)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Br)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Or)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xr)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===Yr||n===$r)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Jo)return a===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$r)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===qr||n===Zr||n===jr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Jo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===qr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t1=`
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

}`;class e1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new dn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:Jg,fragmentShader:t1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new Ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n1 extends Zi{constructor(t,e){super();const n=this;let s=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,p=null,f=null,g=null;const v=new e1,m=e.getContextAttributes();let d=null,M=null;const b=[],_=[],S=new zt;let w=null;const A=new In;A.viewport=new Be;const E=new In;E.viewport=new Be;const y=[A,E],x=new up;let P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let O=b[W];return O===void 0&&(O=new Ga,b[W]=O),O.getTargetRaySpace()},this.getControllerGrip=function(W){let O=b[W];return O===void 0&&(O=new Ga,b[W]=O),O.getGripSpace()},this.getHand=function(W){let O=b[W];return O===void 0&&(O=new Ga,b[W]=O),O.getHandSpace()};function R(W){const O=_.indexOf(W.inputSource);if(O===-1)return;const nt=b[O];nt!==void 0&&(nt.update(W.inputSource,W.frame,c||a),nt.dispatchEvent({type:W.type,data:W.inputSource}))}function L(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",D);for(let W=0;W<b.length;W++){const O=_[W];O!==null&&(_[W]=null,b[W].disconnect(O))}P=null,C=null,v.reset(),t.setRenderTarget(d),f=null,p=null,u=null,s=null,M=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",L),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(S),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,at=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Rs:ys,at=m.stencil?Ps:qi);const j={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:o};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(j),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new Fn(p.textureWidth,p.textureHeight,{format:Cn,type:hi,depthTexture:new qh(p.textureWidth,p.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Fn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(r),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function D(W){for(let O=0;O<W.removed.length;O++){const nt=W.removed[O],at=_.indexOf(nt);at>=0&&(_[at]=null,b[at].disconnect(nt))}for(let O=0;O<W.added.length;O++){const nt=W.added[O];let at=_.indexOf(nt);if(at===-1){for(let j=0;j<b.length;j++)if(j>=_.length){_.push(nt),at=j;break}else if(_[j]===null){_[j]=nt,at=j;break}if(at===-1)break}const $=b[at];$&&$.connect(nt)}}const k=new T,B=new T;function N(W,O,nt){k.setFromMatrixPosition(O.matrixWorld),B.setFromMatrixPosition(nt.matrixWorld);const at=k.distanceTo(B),$=O.projectionMatrix.elements,j=nt.projectionMatrix.elements,Y=$[14]/($[10]-1),it=$[14]/($[10]+1),gt=($[9]+1)/$[5],Q=($[9]-1)/$[5],F=($[8]-1)/$[0],wt=(j[8]+1)/j[0],st=Y*F,mt=Y*wt,_t=at/(-F+wt),Pt=_t*-F;if(O.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Pt),W.translateZ(_t),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),$[10]===-1)W.projectionMatrix.copy(O.projectionMatrix),W.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const bt=Y+_t,z=it+_t,I=st-Pt,tt=mt+(at-Pt),pt=gt*it/z*bt,vt=Q*it/z*bt;W.projectionMatrix.makePerspective(I,tt,pt,vt,bt,z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function H(W,O){O===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(O.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let O=W.near,nt=W.far;v.texture!==null&&(v.depthNear>0&&(O=v.depthNear),v.depthFar>0&&(nt=v.depthFar)),x.near=E.near=A.near=O,x.far=E.far=A.far=nt,(P!==x.near||C!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,C=x.far),A.layers.mask=W.layers.mask|2,E.layers.mask=W.layers.mask|4,x.layers.mask=A.layers.mask|E.layers.mask;const at=W.parent,$=x.cameras;H(x,at);for(let j=0;j<$.length;j++)H($[j],at);$.length===2?N(x,A,E):x.projectionMatrix.copy(A.projectionMatrix),V(W,x,at)};function V(W,O,nt){nt===null?W.matrix.copy(O.matrixWorld):(W.matrix.copy(nt.matrixWorld),W.matrix.invert(),W.matrix.multiply(O.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(O.projectionMatrix),W.projectionMatrixInverse.copy(O.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=so*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let X=null;function K(W,O){if(h=O.getViewerPose(c||a),g=O,h!==null){const nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let at=!1;nt.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let Y=0;Y<nt.length;Y++){const it=nt[Y];let gt=null;if(f!==null)gt=f.getViewport(it);else{const F=u.getViewSubImage(p,it);gt=F.viewport,Y===0&&(t.setRenderTargetTextures(M,F.colorTexture,p.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(M))}let Q=y[Y];Q===void 0&&(Q=new In,Q.layers.enable(Y),Q.viewport=new Be,y[Y]=Q),Q.matrix.fromArray(it.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(it.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(gt.x,gt.y,gt.width,gt.height),Y===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Q)}const $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Y=u.getDepthInformation(nt[0]);Y&&Y.isValid&&Y.texture&&v.init(t,Y,s.renderState)}}for(let nt=0;nt<b.length;nt++){const at=_[nt],$=b[nt];at!==null&&$!==void 0&&$.update(at,O,c||a)}X&&X(W,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}const G=new Kh;G.setAnimationLoop(K),this.setAnimationLoop=function(W){X=W},this.dispose=function(){}}}const Bi=new bn,i1=new ee;function s1(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Wh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,b,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),u(m,d)):d.isMeshPhongMaterial?(o(m,d),h(m,d)):d.isMeshStandardMaterial?(o(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,_)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),v(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&r(m,d)):d.isPointsMaterial?l(m,d,M,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),b=M.envMap,_=M.envMapRotation;b&&(m.envMap.value=b,Bi.copy(_),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(Bi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function r(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function o1(i,t,e,n){let s={},o={},a=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const _=b.program;n.uniformBlockBinding(M,_)}function c(M,b){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const S=b.program;n.updateUBOMapping(M,S);const w=t.render.frame;o[M.id]!==w&&(p(M),o[M.id]=w)}function h(M){const b=u();M.__bindingPointIndex=b;const _=i.createBuffer(),S=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function u(){for(let M=0;M<r;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const b=s[M.id],_=M.uniforms,S=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,A=_.length;w<A;w++){const E=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,x=E.length;y<x;y++){const P=E[y];if(f(P,w,y,S)===!0){const C=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let D=0;D<R.length;D++){const k=R[D],B=v(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,C+L,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,L),L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,b,_,S){const w=M.value,A=b+"_"+_;if(S[A]===void 0)return typeof w=="number"||typeof w=="boolean"?S[A]=w:S[A]=w.clone(),!0;{const E=S[A];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return S[A]=w,!0}else if(E.equals(w)===!1)return E.copy(w),!0}return!1}function g(M){const b=M.uniforms;let _=0;const S=16;for(let A=0,E=b.length;A<E;A++){const y=Array.isArray(b[A])?b[A]:[b[A]];for(let x=0,P=y.length;x<P;x++){const C=y[x],R=Array.isArray(C.value)?C.value:[C.value];for(let L=0,D=R.length;L<D;L++){const k=R[L],B=v(k),N=_%S,H=N%B.boundary,V=N+H;_+=H,V!==0&&S-V<B.storage&&(_+=S-V),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=B.storage}}}const w=_%S;return w>0&&(_+=S-w),M.__size=_,M.__cache={},this}function v(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},o={}}return{bind:l,update:c,dispose:d}}class a1{constructor(t={}){const{canvas:e=Ad(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=bi,this.toneMappingExposure=1;const _=this;let S=!1,w=0,A=0,E=null,y=-1,x=null;const P=new Be,C=new Be;let R=null;const L=new It(0);let D=0,k=e.width,B=e.height,N=1,H=null,V=null;const X=new Be(0,0,k,B),K=new Be(0,0,k,B);let G=!1;const W=new vl;let O=!1,nt=!1;this.transmissionResolutionScale=1;const at=new ee,$=new ee,j=new T,Y=new Be,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Q(){return E===null?N:1}let F=n;function wt(U,et){return e.getContext(U,et)}try{const U={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),F===null){const et="webgl2";if(F=wt(et,U),F===null)throw wt(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let st,mt,_t,Pt,bt,z,I,tt,pt,vt,ft,Dt,dt,St,Wt,xt,Ct,$t,Zt,kt,Jt,jt,ye,J;function Lt(){st=new gm(F),st.init(),jt=new Qg(F,st),mt=new cm(F,st,t,jt),_t=new jg(F,st),mt.reverseDepthBuffer&&p&&_t.buffers.depth.setReversed(!0),Pt=new xm(F),bt=new kg,z=new Kg(F,st,_t,bt,mt,jt,Pt),I=new um(_),tt=new mm(_),pt=new Sp(F),ye=new rm(F,pt),vt=new _m(F,pt,Pt,ye),ft=new wm(F,vt,pt,Pt),Zt=new Mm(F,mt,z),xt=new hm(bt),Dt=new Ug(_,I,tt,st,mt,ye,xt),dt=new s1(_,bt),St=new zg,Wt=new Xg(st),$t=new am(_,I,tt,_t,ft,f,l),Ct=new qg(_,ft,mt),J=new o1(F,Pt,mt,_t),kt=new lm(F,st,Pt),Jt=new vm(F,st,Pt),Pt.programs=Dt.programs,_.capabilities=mt,_.extensions=st,_.properties=bt,_.renderLists=St,_.shadowMap=Ct,_.state=_t,_.info=Pt}Lt();const rt=new n1(_,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const U=st.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=st.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(U){U!==void 0&&(N=U,this.setSize(k,B,!1))},this.getSize=function(U){return U.set(k,B)},this.setSize=function(U,et,ht=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=U,B=et,e.width=Math.floor(U*N),e.height=Math.floor(et*N),ht===!0&&(e.style.width=U+"px",e.style.height=et+"px"),this.setViewport(0,0,U,et)},this.getDrawingBufferSize=function(U){return U.set(k*N,B*N).floor()},this.setDrawingBufferSize=function(U,et,ht){k=U,B=et,N=ht,e.width=Math.floor(U*ht),e.height=Math.floor(et*ht),this.setViewport(0,0,U,et)},this.getCurrentViewport=function(U){return U.copy(P)},this.getViewport=function(U){return U.copy(X)},this.setViewport=function(U,et,ht,ut){U.isVector4?X.set(U.x,U.y,U.z,U.w):X.set(U,et,ht,ut),_t.viewport(P.copy(X).multiplyScalar(N).round())},this.getScissor=function(U){return U.copy(K)},this.setScissor=function(U,et,ht,ut){U.isVector4?K.set(U.x,U.y,U.z,U.w):K.set(U,et,ht,ut),_t.scissor(C.copy(K).multiplyScalar(N).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(U){_t.setScissorTest(G=U)},this.setOpaqueSort=function(U){H=U},this.setTransparentSort=function(U){V=U},this.getClearColor=function(U){return U.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(U=!0,et=!0,ht=!0){let ut=0;if(U){let ot=!1;if(E!==null){const At=E.texture.format;ot=At===pl||At===dl||At===ul}if(ot){const At=E.texture.type,Nt=At===hi||At===qi||At===io||At===Ps||At===ll||At===cl,Ht=$t.getClearColor(),Vt=$t.getClearAlpha(),oe=Ht.r,ie=Ht.g,Kt=Ht.b;Nt?(g[0]=oe,g[1]=ie,g[2]=Kt,g[3]=Vt,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=oe,v[1]=ie,v[2]=Kt,v[3]=Vt,F.clearBufferiv(F.COLOR,0,v))}else ut|=F.COLOR_BUFFER_BIT}et&&(ut|=F.DEPTH_BUFFER_BIT),ht&&(ut|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),$t.dispose(),St.dispose(),Wt.dispose(),bt.dispose(),I.dispose(),tt.dispose(),ft.dispose(),ye.dispose(),J.dispose(),Dt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",te),rt.removeEventListener("sessionend",se),Ot.stop()};function Mt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const U=Pt.autoReset,et=Ct.enabled,ht=Ct.autoUpdate,ut=Ct.needsUpdate,ot=Ct.type;Lt(),Pt.autoReset=U,Ct.enabled=et,Ct.autoUpdate=ht,Ct.needsUpdate=ut,Ct.type=ot}function Rt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ne(U){const et=U.target;et.removeEventListener("dispose",ne),Re(et)}function Re(U){Ge(U),bt.remove(U)}function Ge(U){const et=bt.get(U).programs;et!==void 0&&(et.forEach(function(ht){Dt.releaseProgram(ht)}),U.isShaderMaterial&&Dt.releaseShaderCache(U))}this.renderBufferDirect=function(U,et,ht,ut,ot,At){et===null&&(et=it);const Nt=ot.isMesh&&ot.matrixWorld.determinant()<0,Ht=Sn(U,et,ht,ut,ot);_t.setMaterial(ut,Nt);let Vt=ht.index,oe=1;if(ut.wireframe===!0){if(Vt=vt.getWireframeAttribute(ht),Vt===void 0)return;oe=2}const ie=ht.drawRange,Kt=ht.attributes.position;let Me=ie.start*oe,Ee=(ie.start+ie.count)*oe;At!==null&&(Me=Math.max(Me,At.start*oe),Ee=Math.min(Ee,(At.start+At.count)*oe)),Vt!==null?(Me=Math.max(Me,0),Ee=Math.min(Ee,Vt.count)):Kt!=null&&(Me=Math.max(Me,0),Ee=Math.min(Ee,Kt.count));const Ye=Ee-Me;if(Ye<0||Ye===1/0)return;ye.setup(ot,ut,Ht,ht,Vt);let ke,_e=kt;if(Vt!==null&&(ke=pt.get(Vt),_e=Jt,_e.setIndex(ke)),ot.isMesh)ut.wireframe===!0?(_t.setLineWidth(ut.wireframeLinewidth*Q()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(ot.isLine){let qt=ut.linewidth;qt===void 0&&(qt=1),_t.setLineWidth(qt*Q()),ot.isLineSegments?_e.setMode(F.LINES):ot.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else ot.isPoints?_e.setMode(F.POINTS):ot.isSprite&&_e.setMode(F.TRIANGLES);if(ot.isBatchedMesh)if(ot._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount,ot._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))_e.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const qt=ot._multiDrawStarts,Ve=ot._multiDrawCounts,Se=ot._multiDrawCount,Fe=Vt?pt.get(Vt).bytesPerElement:1,Li=bt.get(ut).currentProgram.getUniforms();for(let lt=0;lt<Se;lt++)Li.setValue(F,"_gl_DrawID",lt),_e.render(qt[lt]/Fe,Ve[lt])}else if(ot.isInstancedMesh)_e.renderInstances(Me,Ye,ot.count);else if(ht.isInstancedBufferGeometry){const qt=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Ve=Math.min(ht.instanceCount,qt);_e.renderInstances(Me,Ye,Ve)}else _e.render(Me,Ye)};function ct(U,et,ht){U.transparent===!0&&U.side===hn&&U.forceSinglePass===!1?(U.side=xn,U.needsUpdate=!0,Xe(U,et,ht),U.side=Ti,U.needsUpdate=!0,Xe(U,et,ht),U.side=hn):Xe(U,et,ht)}this.compile=function(U,et,ht=null){ht===null&&(ht=U),d=Wt.get(ht),d.init(et),b.push(d),ht.traverseVisible(function(ot){ot.isLight&&ot.layers.test(et.layers)&&(d.pushLight(ot),ot.castShadow&&d.pushShadow(ot))}),U!==ht&&U.traverseVisible(function(ot){ot.isLight&&ot.layers.test(et.layers)&&(d.pushLight(ot),ot.castShadow&&d.pushShadow(ot))}),d.setupLights();const ut=new Set;return U.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const At=ot.material;if(At)if(Array.isArray(At))for(let Nt=0;Nt<At.length;Nt++){const Ht=At[Nt];ct(Ht,ht,ot),ut.add(Ht)}else ct(At,ht,ot),ut.add(At)}),d=b.pop(),ut},this.compileAsync=function(U,et,ht=null){const ut=this.compile(U,et,ht);return new Promise(ot=>{function At(){if(ut.forEach(function(Nt){bt.get(Nt).currentProgram.isReady()&&ut.delete(Nt)}),ut.size===0){ot(U);return}setTimeout(At,10)}st.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let yt=null;function Bt(U){yt&&yt(U)}function te(){Ot.stop()}function se(){Ot.start()}const Ot=new Kh;Ot.setAnimationLoop(Bt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(U){yt=U,rt.setAnimationLoop(U),U===null?Ot.stop():Ot.start()},rt.addEventListener("sessionstart",te),rt.addEventListener("sessionend",se),this.render=function(U,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(et),et=rt.getCamera()),U.isScene===!0&&U.onBeforeRender(_,U,et,E),d=Wt.get(U,b.length),d.init(et),b.push(d),$.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),W.setFromProjectionMatrix($),nt=this.localClippingEnabled,O=xt.init(this.clippingPlanes,nt),m=St.get(U,M.length),m.init(),M.push(m),rt.enabled===!0&&rt.isPresenting===!0){const At=_.xr.getDepthSensingMesh();At!==null&&he(At,et,-1/0,_.sortObjects)}he(U,et,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(H,V),gt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,gt&&$t.addToRenderList(m,U),this.info.render.frame++,O===!0&&xt.beginShadows();const ht=d.state.shadowsArray;Ct.render(ht,U,et),O===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=m.opaque,ot=m.transmissive;if(d.setupLights(),et.isArrayCamera){const At=et.cameras;if(ot.length>0)for(let Nt=0,Ht=At.length;Nt<Ht;Nt++){const Vt=At[Nt];Ce(ut,ot,U,Vt)}gt&&$t.render(U);for(let Nt=0,Ht=At.length;Nt<Ht;Nt++){const Vt=At[Nt];re(m,U,Vt,Vt.viewport)}}else ot.length>0&&Ce(ut,ot,U,et),gt&&$t.render(U),re(m,U,et);E!==null&&A===0&&(z.updateMultisampleRenderTarget(E),z.updateRenderTargetMipmap(E)),U.isScene===!0&&U.onAfterRender(_,U,et),ye.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(d=b[b.length-1],O===!0&&xt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function he(U,et,ht,ut){if(U.visible===!1)return;if(U.layers.test(et.layers)){if(U.isGroup)ht=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(et);else if(U.isLight)d.pushLight(U),U.castShadow&&d.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||W.intersectsSprite(U)){ut&&Y.setFromMatrixPosition(U.matrixWorld).applyMatrix4($);const Nt=ft.update(U),Ht=U.material;Ht.visible&&m.push(U,Nt,Ht,ht,Y.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||W.intersectsObject(U))){const Nt=ft.update(U),Ht=U.material;if(ut&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Y.copy(U.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Y.copy(Nt.boundingSphere.center)),Y.applyMatrix4(U.matrixWorld).applyMatrix4($)),Array.isArray(Ht)){const Vt=Nt.groups;for(let oe=0,ie=Vt.length;oe<ie;oe++){const Kt=Vt[oe],Me=Ht[Kt.materialIndex];Me&&Me.visible&&m.push(U,Nt,Me,ht,Y.z,Kt)}}else Ht.visible&&m.push(U,Nt,Ht,ht,Y.z,null)}}const At=U.children;for(let Nt=0,Ht=At.length;Nt<Ht;Nt++)he(At[Nt],et,ht,ut)}function re(U,et,ht,ut){const ot=U.opaque,At=U.transmissive,Nt=U.transparent;d.setupLightsView(ht),O===!0&&xt.setGlobalState(_.clippingPlanes,ht),ut&&_t.viewport(P.copy(ut)),ot.length>0&&De(ot,et,ht),At.length>0&&De(At,et,ht),Nt.length>0&&De(Nt,et,ht),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ce(U,et,ht,ut){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ut.id]===void 0&&(d.state.transmissionRenderTarget[ut.id]=new Fn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?qn:hi,minFilter:wi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const At=d.state.transmissionRenderTarget[ut.id],Nt=ut.viewport||P;At.setSize(Nt.z*_.transmissionResolutionScale,Nt.w*_.transmissionResolutionScale);const Ht=_.getRenderTarget();_.setRenderTarget(At),_.getClearColor(L),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),gt&&$t.render(ht);const Vt=_.toneMapping;_.toneMapping=bi;const oe=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),d.setupLightsView(ut),O===!0&&xt.setGlobalState(_.clippingPlanes,ut),De(U,ht,ut),z.updateMultisampleRenderTarget(At),z.updateRenderTargetMipmap(At),st.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Kt=0,Me=et.length;Kt<Me;Kt++){const Ee=et[Kt],Ye=Ee.object,ke=Ee.geometry,_e=Ee.material,qt=Ee.group;if(_e.side===hn&&Ye.layers.test(ut.layers)){const Ve=_e.side;_e.side=xn,_e.needsUpdate=!0,on(Ye,ht,ut,ke,_e,qt),_e.side=Ve,_e.needsUpdate=!0,ie=!0}}ie===!0&&(z.updateMultisampleRenderTarget(At),z.updateRenderTargetMipmap(At))}_.setRenderTarget(Ht),_.setClearColor(L,D),oe!==void 0&&(ut.viewport=oe),_.toneMapping=Vt}function De(U,et,ht){const ut=et.isScene===!0?et.overrideMaterial:null;for(let ot=0,At=U.length;ot<At;ot++){const Nt=U[ot],Ht=Nt.object,Vt=Nt.geometry,oe=ut===null?Nt.material:ut,ie=Nt.group;Ht.layers.test(ht.layers)&&on(Ht,et,ht,Vt,oe,ie)}}function on(U,et,ht,ut,ot,At){U.onBeforeRender(_,et,ht,ut,ot,At),U.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ot.onBeforeRender(_,et,ht,ut,U,At),ot.transparent===!0&&ot.side===hn&&ot.forceSinglePass===!1?(ot.side=xn,ot.needsUpdate=!0,_.renderBufferDirect(ht,et,ut,ot,U,At),ot.side=Ti,ot.needsUpdate=!0,_.renderBufferDirect(ht,et,ut,ot,U,At),ot.side=hn):_.renderBufferDirect(ht,et,ut,ot,U,At),U.onAfterRender(_,et,ht,ut,ot,At)}function Xe(U,et,ht){et.isScene!==!0&&(et=it);const ut=bt.get(U),ot=d.state.lights,At=d.state.shadowsArray,Nt=ot.state.version,Ht=Dt.getParameters(U,ot.state,At,et,ht),Vt=Dt.getProgramCacheKey(Ht);let oe=ut.programs;ut.environment=U.isMeshStandardMaterial?et.environment:null,ut.fog=et.fog,ut.envMap=(U.isMeshStandardMaterial?tt:I).get(U.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&U.envMap===null?et.environmentRotation:U.envMapRotation,oe===void 0&&(U.addEventListener("dispose",ne),oe=new Map,ut.programs=oe);let ie=oe.get(Vt);if(ie!==void 0){if(ut.currentProgram===ie&&ut.lightsStateVersion===Nt)return an(U,Ht),ie}else Ht.uniforms=Dt.getUniforms(U),U.onBeforeCompile(Ht,_),ie=Dt.acquireProgram(Ht,Vt),oe.set(Vt,ie),ut.uniforms=Ht.uniforms;const Kt=ut.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Kt.clippingPlanes=xt.uniform),an(U,Ht),ut.needsLights=Rn(U),ut.lightsStateVersion=Nt,ut.needsLights&&(Kt.ambientLightColor.value=ot.state.ambient,Kt.lightProbe.value=ot.state.probe,Kt.directionalLights.value=ot.state.directional,Kt.directionalLightShadows.value=ot.state.directionalShadow,Kt.spotLights.value=ot.state.spot,Kt.spotLightShadows.value=ot.state.spotShadow,Kt.rectAreaLights.value=ot.state.rectArea,Kt.ltc_1.value=ot.state.rectAreaLTC1,Kt.ltc_2.value=ot.state.rectAreaLTC2,Kt.pointLights.value=ot.state.point,Kt.pointLightShadows.value=ot.state.pointShadow,Kt.hemisphereLights.value=ot.state.hemi,Kt.directionalShadowMap.value=ot.state.directionalShadowMap,Kt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Kt.spotShadowMap.value=ot.state.spotShadowMap,Kt.spotLightMatrix.value=ot.state.spotLightMatrix,Kt.spotLightMap.value=ot.state.spotLightMap,Kt.pointShadowMap.value=ot.state.pointShadowMap,Kt.pointShadowMatrix.value=ot.state.pointShadowMatrix),ut.currentProgram=ie,ut.uniformsList=null,ie}function Ue(U){if(U.uniformsList===null){const et=U.currentProgram.getUniforms();U.uniformsList=ta.seqWithValue(et.seq,U.uniforms)}return U.uniformsList}function an(U,et){const ht=bt.get(U);ht.outputColorSpace=et.outputColorSpace,ht.batching=et.batching,ht.batchingColor=et.batchingColor,ht.instancing=et.instancing,ht.instancingColor=et.instancingColor,ht.instancingMorph=et.instancingMorph,ht.skinning=et.skinning,ht.morphTargets=et.morphTargets,ht.morphNormals=et.morphNormals,ht.morphColors=et.morphColors,ht.morphTargetsCount=et.morphTargetsCount,ht.numClippingPlanes=et.numClippingPlanes,ht.numIntersection=et.numClipIntersection,ht.vertexAlphas=et.vertexAlphas,ht.vertexTangents=et.vertexTangents,ht.toneMapping=et.toneMapping}function Sn(U,et,ht,ut,ot){et.isScene!==!0&&(et=it),z.resetTextureUnits();const At=et.fog,Nt=ut.isMeshStandardMaterial?et.environment:null,Ht=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ls,Vt=(ut.isMeshStandardMaterial?tt:I).get(ut.envMap||Nt),oe=ut.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ie=!!ht.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Kt=!!ht.morphAttributes.position,Me=!!ht.morphAttributes.normal,Ee=!!ht.morphAttributes.color;let Ye=bi;ut.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ye=_.toneMapping);const ke=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,_e=ke!==void 0?ke.length:0,qt=bt.get(ut),Ve=d.state.lights;if(O===!0&&(nt===!0||U!==x)){const xe=U===x&&ut.id===y;xt.setState(ut,U,xe)}let Se=!1;ut.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ve.state.version||qt.outputColorSpace!==Ht||ot.isBatchedMesh&&qt.batching===!1||!ot.isBatchedMesh&&qt.batching===!0||ot.isBatchedMesh&&qt.batchingColor===!0&&ot.colorTexture===null||ot.isBatchedMesh&&qt.batchingColor===!1&&ot.colorTexture!==null||ot.isInstancedMesh&&qt.instancing===!1||!ot.isInstancedMesh&&qt.instancing===!0||ot.isSkinnedMesh&&qt.skinning===!1||!ot.isSkinnedMesh&&qt.skinning===!0||ot.isInstancedMesh&&qt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&qt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&qt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&qt.instancingMorph===!1&&ot.morphTexture!==null||qt.envMap!==Vt||ut.fog===!0&&qt.fog!==At||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==xt.numPlanes||qt.numIntersection!==xt.numIntersection)||qt.vertexAlphas!==oe||qt.vertexTangents!==ie||qt.morphTargets!==Kt||qt.morphNormals!==Me||qt.morphColors!==Ee||qt.toneMapping!==Ye||qt.morphTargetsCount!==_e)&&(Se=!0):(Se=!0,qt.__version=ut.version);let Fe=qt.currentProgram;Se===!0&&(Fe=Xe(ut,et,ot));let Li=!1,lt=!1,Tt=!1;const Et=Fe.getUniforms(),Gt=qt.uniforms;if(_t.useProgram(Fe.program)&&(Li=!0,lt=!0,Tt=!0),ut.id!==y&&(y=ut.id,lt=!0),Li||x!==U){_t.buffers.depth.getReversed()?(at.copy(U.projectionMatrix),Td(at),Cd(at),Et.setValue(F,"projectionMatrix",at)):Et.setValue(F,"projectionMatrix",U.projectionMatrix),Et.setValue(F,"viewMatrix",U.matrixWorldInverse);const be=Et.map.cameraPosition;be!==void 0&&be.setValue(F,j.setFromMatrixPosition(U.matrixWorld)),mt.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Et.setValue(F,"isOrthographic",U.isOrthographicCamera===!0),x!==U&&(x=U,lt=!0,Tt=!0)}if(ot.isSkinnedMesh){Et.setOptional(F,ot,"bindMatrix"),Et.setOptional(F,ot,"bindMatrixInverse");const xe=ot.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),Et.setValue(F,"boneTexture",xe.boneTexture,z))}ot.isBatchedMesh&&(Et.setOptional(F,ot,"batchingTexture"),Et.setValue(F,"batchingTexture",ot._matricesTexture,z),Et.setOptional(F,ot,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",ot._indirectTexture,z),Et.setOptional(F,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",ot._colorsTexture,z));const ve=ht.morphAttributes;if((ve.position!==void 0||ve.normal!==void 0||ve.color!==void 0)&&Zt.update(ot,ht,Fe),(lt||qt.receiveShadow!==ot.receiveShadow)&&(qt.receiveShadow=ot.receiveShadow,Et.setValue(F,"receiveShadow",ot.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Gt.envMap.value=Vt,Gt.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&et.environment!==null&&(Gt.envMapIntensity.value=et.environmentIntensity),lt&&(Et.setValue(F,"toneMappingExposure",_.toneMappingExposure),qt.needsLights&&un(Gt,Tt),At&&ut.fog===!0&&dt.refreshFogUniforms(Gt,At),dt.refreshMaterialUniforms(Gt,ut,N,B,d.state.transmissionRenderTarget[U.id]),ta.upload(F,Ue(qt),Gt,z)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(ta.upload(F,Ue(qt),Gt,z),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Et.setValue(F,"center",ot.center),Et.setValue(F,"modelViewMatrix",ot.modelViewMatrix),Et.setValue(F,"normalMatrix",ot.normalMatrix),Et.setValue(F,"modelMatrix",ot.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const xe=ut.uniformsGroups;for(let be=0,$e=xe.length;be<$e;be++){const qe=xe[be];J.update(qe,Fe),J.bind(qe,Fe)}}return Fe}function un(U,et){U.ambientLightColor.needsUpdate=et,U.lightProbe.needsUpdate=et,U.directionalLights.needsUpdate=et,U.directionalLightShadows.needsUpdate=et,U.pointLights.needsUpdate=et,U.pointLightShadows.needsUpdate=et,U.spotLights.needsUpdate=et,U.spotLightShadows.needsUpdate=et,U.rectAreaLights.needsUpdate=et,U.hemisphereLights.needsUpdate=et}function Rn(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(U,et,ht){bt.get(U.texture).__webglTexture=et,bt.get(U.depthTexture).__webglTexture=ht;const ut=bt.get(U);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=ht===void 0,ut.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,et){const ht=bt.get(U);ht.__webglFramebuffer=et,ht.__useDefaultFramebuffer=et===void 0};const Ki=F.createFramebuffer();this.setRenderTarget=function(U,et=0,ht=0){E=U,w=et,A=ht;let ut=!0,ot=null,At=!1,Nt=!1;if(U){const Vt=bt.get(U);if(Vt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(F.FRAMEBUFFER,null),ut=!1;else if(Vt.__webglFramebuffer===void 0)z.setupRenderTarget(U);else if(Vt.__hasExternalTextures)z.rebindTextures(U,bt.get(U.texture).__webglTexture,bt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Kt=U.depthTexture;if(Vt.__boundDepthTexture!==Kt){if(Kt!==null&&bt.has(Kt)&&(U.width!==Kt.image.width||U.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(U)}}const oe=U.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Nt=!0);const ie=bt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ie[et])?ot=ie[et][ht]:ot=ie[et],At=!0):U.samples>0&&z.useMultisampledRTT(U)===!1?ot=bt.get(U).__webglMultisampledFramebuffer:Array.isArray(ie)?ot=ie[ht]:ot=ie,P.copy(U.viewport),C.copy(U.scissor),R=U.scissorTest}else P.copy(X).multiplyScalar(N).floor(),C.copy(K).multiplyScalar(N).floor(),R=G;if(ht!==0&&(ot=Ki),_t.bindFramebuffer(F.FRAMEBUFFER,ot)&&ut&&_t.drawBuffers(U,ot),_t.viewport(P),_t.scissor(C),_t.setScissorTest(R),At){const Vt=bt.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+et,Vt.__webglTexture,ht)}else if(Nt){const Vt=bt.get(U.texture),oe=et;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.__webglTexture,ht,oe)}else if(U!==null&&ht!==0){const Vt=bt.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Vt.__webglTexture,ht)}y=-1},this.readRenderTargetPixels=function(U,et,ht,ut,ot,At,Nt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=bt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht){_t.bindFramebuffer(F.FRAMEBUFFER,Ht);try{const Vt=U.texture,oe=Vt.format,ie=Vt.type;if(!mt.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=U.width-ut&&ht>=0&&ht<=U.height-ot&&F.readPixels(et,ht,ut,ot,jt.convert(oe),jt.convert(ie),At)}finally{const Vt=E!==null?bt.get(E).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(U,et,ht,ut,ot,At,Nt){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=bt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht){const Vt=U.texture,oe=Vt.format,ie=Vt.type;if(!mt.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(et>=0&&et<=U.width-ut&&ht>=0&&ht<=U.height-ot){_t.bindFramebuffer(F.FRAMEBUFFER,Ht);const Kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),F.readPixels(et,ht,ut,ot,jt.convert(oe),jt.convert(ie),0);const Me=E!==null?bt.get(E).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,Me);const Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ed(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.deleteBuffer(Kt),F.deleteSync(Ee),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,et=null,ht=0){U.isTexture!==!0&&(Hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),et=arguments[0]||null,U=arguments[1]);const ut=Math.pow(2,-ht),ot=Math.floor(U.image.width*ut),At=Math.floor(U.image.height*ut),Nt=et!==null?et.x:0,Ht=et!==null?et.y:0;z.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,ht,0,0,Nt,Ht,ot,At),_t.unbindTexture()};const Qi=F.createFramebuffer(),ui=F.createFramebuffer();this.copyTextureToTexture=function(U,et,ht=null,ut=null,ot=0,At=null){U.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture function signature has changed."),ut=arguments[0]||null,U=arguments[1],et=arguments[2],At=arguments[3]||0,ht=null),At===null&&(ot!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=ot,ot=0):At=0);let Nt,Ht,Vt,oe,ie,Kt,Me,Ee,Ye;const ke=U.isCompressedTexture?U.mipmaps[At]:U.image;if(ht!==null)Nt=ht.max.x-ht.min.x,Ht=ht.max.y-ht.min.y,Vt=ht.isBox3?ht.max.z-ht.min.z:1,oe=ht.min.x,ie=ht.min.y,Kt=ht.isBox3?ht.min.z:0;else{const ve=Math.pow(2,-ot);Nt=Math.floor(ke.width*ve),Ht=Math.floor(ke.height*ve),U.isDataArrayTexture?Vt=ke.depth:U.isData3DTexture?Vt=Math.floor(ke.depth*ve):Vt=1,oe=0,ie=0,Kt=0}ut!==null?(Me=ut.x,Ee=ut.y,Ye=ut.z):(Me=0,Ee=0,Ye=0);const _e=jt.convert(et.format),qt=jt.convert(et.type);let Ve;et.isData3DTexture?(z.setTexture3D(et,0),Ve=F.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(z.setTexture2DArray(et,0),Ve=F.TEXTURE_2D_ARRAY):(z.setTexture2D(et,0),Ve=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,et.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,et.unpackAlignment);const Se=F.getParameter(F.UNPACK_ROW_LENGTH),Fe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Li=F.getParameter(F.UNPACK_SKIP_PIXELS),lt=F.getParameter(F.UNPACK_SKIP_ROWS),Tt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ke.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ke.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,oe),F.pixelStorei(F.UNPACK_SKIP_ROWS,ie),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Kt);const Et=U.isDataArrayTexture||U.isData3DTexture,Gt=et.isDataArrayTexture||et.isData3DTexture;if(U.isDepthTexture){const ve=bt.get(U),xe=bt.get(et),be=bt.get(ve.__renderTarget),$e=bt.get(xe.__renderTarget);_t.bindFramebuffer(F.READ_FRAMEBUFFER,be.__webglFramebuffer),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let qe=0;qe<Vt;qe++)Et&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,ot,Kt+qe),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(et).__webglTexture,At,Ye+qe)),F.blitFramebuffer(oe,ie,Nt,Ht,Me,Ee,Nt,Ht,F.DEPTH_BUFFER_BIT,F.NEAREST);_t.bindFramebuffer(F.READ_FRAMEBUFFER,null),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ot!==0||U.isRenderTargetTexture||bt.has(U)){const ve=bt.get(U),xe=bt.get(et);_t.bindFramebuffer(F.READ_FRAMEBUFFER,Qi),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,ui);for(let be=0;be<Vt;be++)Et?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ve.__webglTexture,ot,Kt+be):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,ot),Gt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,At,Ye+be):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,At),ot!==0?F.blitFramebuffer(oe,ie,Nt,Ht,Me,Ee,Nt,Ht,F.COLOR_BUFFER_BIT,F.NEAREST):Gt?F.copyTexSubImage3D(Ve,At,Me,Ee,Ye+be,oe,ie,Nt,Ht):F.copyTexSubImage2D(Ve,At,Me,Ee,oe,ie,Nt,Ht);_t.bindFramebuffer(F.READ_FRAMEBUFFER,null),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Gt?U.isDataTexture||U.isData3DTexture?F.texSubImage3D(Ve,At,Me,Ee,Ye,Nt,Ht,Vt,_e,qt,ke.data):et.isCompressedArrayTexture?F.compressedTexSubImage3D(Ve,At,Me,Ee,Ye,Nt,Ht,Vt,_e,ke.data):F.texSubImage3D(Ve,At,Me,Ee,Ye,Nt,Ht,Vt,_e,qt,ke):U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,Me,Ee,Nt,Ht,_e,qt,ke.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,Me,Ee,ke.width,ke.height,_e,ke.data):F.texSubImage2D(F.TEXTURE_2D,At,Me,Ee,Nt,Ht,_e,qt,ke);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Li),F.pixelStorei(F.UNPACK_SKIP_ROWS,lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Tt),At===0&&et.generateMipmaps&&F.generateMipmap(Ve),_t.unbindTexture()},this.copyTextureToTexture3D=function(U,et,ht=null,ut=null,ot=0){return U.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ht=arguments[0]||null,ut=arguments[1]||null,U=arguments[2],et=arguments[3],ot=arguments[4]||0),Hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,et,ht,ut,ot)},this.initRenderTarget=function(U){bt.get(U).__webglFramebuffer===void 0&&z.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?z.setTextureCube(U,0):U.isData3DTexture?z.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?z.setTexture2DArray(U,0):z.setTexture2D(U,0),_t.unbindTexture()},this.resetState=function(){w=0,A=0,E=null,_t.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}const Xc={type:"change"},El={type:"start"},nu={type:"end"},Wo=new co,Yc=new vi,r1=Math.cos(70*q.DEG2RAD),Je=new T,Mn=2*Math.PI,Ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ar=1e-6;class l1 extends yp{constructor(t,e=null){super(t,e),this.state=Ne.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new je,this._lastTargetPosition=new T,this._quat=new je().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mc,this._sphericalDelta=new Mc,this._scale=1,this._panOffset=new T,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new T,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=h1.bind(this),this._onPointerDown=c1.bind(this),this._onPointerUp=u1.bind(this),this._onContextMenu=v1.bind(this),this._onMouseWheel=f1.bind(this),this._onKeyDown=m1.bind(this),this._onTouchStart=g1.bind(this),this._onTouchMove=_1.bind(this),this._onMouseDown=d1.bind(this),this._onMouseMove=p1.bind(this),this._interceptControlDown=x1.bind(this),this._interceptControlUp=M1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xc),this.update(),this.state=Ne.NONE}update(t=null){const e=this.object.position;Je.copy(e).sub(this.target),Je.applyQuaternion(this._quat),this._spherical.setFromVector3(Je),this.autoRotate&&this.state===Ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Mn:n>Math.PI&&(n-=Mn),s<-Math.PI?s+=Mn:s>Math.PI&&(s-=Mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(Je.setFromSpherical(this._spherical),Je.applyQuaternion(this._quatInverse),e.copy(this.target).add(Je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=Je.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new T(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=Je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wo.origin.copy(this.object.position),Wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wo.direction))<r1?this.object.lookAt(this.target):(Yc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wo.intersectPlane(Yc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ar||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ar||this._lastTargetPosition.distanceToSquared(this.target)>ar?(this.dispatchEvent(Xc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Mn/60*this.autoRotateSpeed*t:Mn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Je.setFromMatrixColumn(e,0),Je.multiplyScalar(-t),this._panOffset.add(Je)}_panUp(t,e){this.screenSpacePanning===!0?Je.setFromMatrixColumn(e,1):(Je.setFromMatrixColumn(e,0),Je.crossVectors(this.object.up,Je)),Je.multiplyScalar(t),this._panOffset.add(Je)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Je.copy(s).sub(this.target);let o=Je.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,a=n.width,r=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function c1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function h1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function u1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nu),this.state=Ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function d1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ne.DOLLY;break;case Ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ne.ROTATE}break;case Ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ne.PAN}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(El)}function p1(i){switch(this.state){case Ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ne.NONE||(i.preventDefault(),this.dispatchEvent(El),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nu))}function m1(i){this.enabled!==!1&&this._handleKeyDown(i)}function g1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ne.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ne.TOUCH_PAN;break;default:this.state=Ne.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ne.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ne.TOUCH_DOLLY_ROTATE;break;default:this.state=Ne.NONE}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(El)}function _1(i){switch(this._trackPointer(i),this.state){case Ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ne.NONE}}function v1(i){this.enabled!==!1&&i.preventDefault()}function x1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const iu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class zs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const w1=new yl(-1,1,1,-1,0,1);class y1 extends Xt{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const b1=new y1;class Tl{constructor(t){this._mesh=new He(b1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,w1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class S1 extends zs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ao.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Tl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $c extends zs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class A1 extends zs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class E1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new zt);this._width=n.width,this._height=n.height,e=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new S1(iu),this.copyPass.material.blending=ai,this.clock=new jh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}$c!==void 0&&(a instanceof $c?n=!0:a instanceof A1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new zt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T1 extends zs{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new It}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const C1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Fs extends zs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new zt(t.x,t.y):new zt(256,256),this.clearColor=new It(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(o,a,{type:qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const p=new Fn(o,a,{type:qn});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const f=new Fn(o,a,{type:qn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),a=Math.round(a/2)}const r=C1;this.highPassUniforms=ao.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ze({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new zt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=iu;this.copyUniforms=ao.clone(h.uniforms),this.blendMaterial=new Ze({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:na,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new It,this.oldClearAlpha=1,this.basic=new oo,this.fsQuad=new Tl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new zt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new zt(.5,.5)},direction:{value:new zt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Fs.BlurDirectionX=new zt(1,0);Fs.BlurDirectionY=new zt(0,1);const P1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class R1 extends zs{constructor(){super();const t=P1;this.uniforms=ao.clone(t.uniforms),this.material=new op({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Tl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ae.getTransfer(this._outputColorSpace)===Le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===al?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===bh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function su(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function qc(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Ns(i){const t=Math.max(0,Math.min(1,(i-1.54)/.6949999999999998)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.8)/.2),2))),n=.056*qc(t,.38,.24),s=-.042*su(.54,.88,t),o=.016*qc(t,.78,.13);return(.228+n+s+o)*e}function Ai(i){const t=Math.max(0,Math.min(1,(i-1.66)/.575)),e=.02*Math.pow(1-su(0,.42,t),1.6),n=-.01*Math.sin(t*Math.PI);return 1.578+e+n}const Yi=[{rootX:.024,rootY:.126,rootZ:-3.6,tipX:.34,tipY:.142,tipZ:-3.72},{rootX:.024,rootY:.126,rootZ:-3.78,tipX:.49,tipY:.148,tipZ:-3.96},{rootX:.024,rootY:.126,rootZ:-3.96,tipX:.55,tipY:.152,tipZ:-4.22},{rootX:.024,rootY:.126,rootZ:-4.14,tipX:.46,tipY:.146,tipZ:-4.45},{rootX:.024,rootY:.126,rootZ:-4.3,tipX:.27,tipY:.138,tipZ:-4.58}],ha=[{parentBone:"tail_1",rootX:.18,rootY:.75,rootZ:-.84,tipX:.44,tipY:.72,tipZ:-.98},{parentBone:"tail_2",rootX:.15,rootY:.67,rootZ:-1.1,tipX:.5,tipY:.63,tipZ:-1.27},{parentBone:"tail_2",rootX:.12,rootY:.59,rootZ:-1.34,tipX:.37,tipY:.56,tipZ:-1.52}],uo=new T(.435,.03,.8999).normalize(),po=new T(-.435,.03,.8999).normalize(),ua=.082;function ou(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.342:.318),o=t?1.005:-.555,a=.04,r=t?.088:.082,l=[],c=[-.88,-.29,.29,.88];for(let h=0;h<4;h++){const u=c[h]+e*.055,p=h===1||h===2,f=(t?.126:.118)*(p?1:.86),g=(t?.066:.062)*(p?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.036,dirX:Math.sin(u)*.92,dirZ:Math.cos(u),toeLength:f,baseRadius:p?.044:.039,tipRadius:p?.029:.0255,clawLength:g})}return l}function L1(){const i=[{name:"root",parent:null,worldPos:[0,.86,.12]},{name:"pelvis",parent:"root",worldPos:[0,.83,-.54]},{name:"spine_1",parent:"root",worldPos:[0,.85,.14]},{name:"spine_2",parent:"spine_1",worldPos:[0,.91,.5]},{name:"chest",parent:"spine_2",worldPos:[0,.98,.86]},{name:"neck_1",parent:"chest",worldPos:[0,1.11,1.08]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.27,1.24]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.44,1.39]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.56,1.51]},{name:"head",parent:"neck_4",worldPos:[0,1.63,1.62]},{name:"eye_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eye_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidUpper_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidLower_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidLower_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"teethUpper",parent:"head",worldPos:[0,1.592,1.95]},{name:"jaw",parent:"head",worldPos:[0,1.588,1.66]},{name:"teethLower",parent:"jaw",worldPos:[0,1.568,1.95]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.568,1.74]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.568,1.85]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.568,1.96]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.566,2.07]},{name:"ear_L_1",parent:"head",worldPos:[.158,1.772,1.57]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.208,1.895,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.246,2.005,1.19]},{name:"ear_R_1",parent:"head",worldPos:[-.158,1.772,1.57]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.208,1.895,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.246,2.005,1.19]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.268,1.648,1.58]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.348,1.68,1.43]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.268,1.648,1.58]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.348,1.68,1.43]},{name:"cheekLower_L_1",parent:"head",worldPos:[.252,1.552,1.61]},{name:"cheekLower_L_2",parent:"cheekLower_L_1",worldPos:[.312,1.562,1.48]},{name:"cheekLower_R_1",parent:"head",worldPos:[-.252,1.552,1.61]},{name:"cheekLower_R_2",parent:"cheekLower_R_1",worldPos:[-.312,1.562,1.48]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.235,.94,.88]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.272,.8,.9]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.325,.47,.8]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.338,.155,.94]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.342,.044,1.045]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.222,.77,-.55]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.295,.46,-.34]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.312,.23,-.66]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.318,.044,-.515]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.23,1.11,.78]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.38,1.15,.76]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.96,1.18,.5]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.72,1.24,.96]}),[{mid:[n*1.62,1.16,.18],tip:[n*1.54,1.06,-.66]},{mid:[n*2.02,1.17,.24],tip:[n*2.24,1.07,-.62]},{mid:[n*2.38,1.19,.36],tip:[n*2.88,1.09,-.44]},{mid:[n*2.72,1.21,.52],tip:[n*3.44,1.12,-.16]},{mid:[n*3.04,1.23,.74],tip:[n*3.88,1.16,.24]},{mid:[n*3.22,1.25,.94],tip:[n*4.28,1.2,.76]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.78,-.82],[0,.68,-1.16],[0,.54,-1.54],[0,.39,-1.94],[0,.26,-2.35],[0,.17,-2.76],[0,.13,-3.18],[0,.126,-3.58],[0,.126,-3.98],[0,.126,-4.42]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;ha.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.024,.126,-3.96]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.024,.126,-3.96]}),Yi.forEach((e,n)=>{i.push({name:`tailFin_R_${n+1}`,parent:"tailFinHinge_R",worldPos:[-e.rootX,e.rootY,e.rootZ]})}),i.push({name:"prostheticCollar",parent:"tail_8",worldPos:[.024,.128,-3.54]},{name:"prostheticRod",parent:"tail_9",worldPos:[.036,.138,-3.96]}),Yi.forEach((e,n)=>{i.push({name:`tailFin_L_${n+1}`,parent:"tailFinHinge_L",worldPos:[e.rootX,e.rootY,e.rootZ]})}),i}function I1(){const i=L1(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new _l;c.name=l.name;const h=new T(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),p=s.get(l.parent);if(!u||!p)throw new Error(`Missing parent bone ${l.parent} for ${l.name}`);c.position.copy(h).sub(p),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new va(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}function D1(i,t,e){let n=i*374761393+t*668265263+e*1442695041|0;n=(n^n>>>13)*1274126177;const s=((n^n>>>16)>>>0)/4294967296;let o=i*1103515245+t*12345+(e+7919)*2654435761|0;o=(o^o>>>15)*2246822519;const a=((o^o>>>13)>>>0)/4294967296;let r=i*73856093+t*19349663+(e+31337)*83492791|0;r=(r^r>>>14)*1597334677;const l=((r^r>>>15)>>>0)/4294967296;return[s,a,l]}function Go(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function rr(i,t,e,n,s,o=1){const a=i*e,r=t*n,l=Math.floor(a),c=Math.floor(r);let h=1e9,u=1e9,p=.5,f=0,g=0,v=0;for(let M=-1;M<=1;M++)for(let b=-1;b<=1;b++){const _=l+b,S=c+M,w=(_%e+e)%e,A=(S%n+n)%n,[E,y,x]=D1(w,A,s),P=_+.14+E*.72,C=S+.14+y*.72,R=(P-a)*o,L=C-r,D=Math.sqrt(R*R+L*L);D<h?(u=h,h=D,p=x,f=(E-.5)*Math.PI,g=R,v=L):D<u&&(u=D)}const m=Math.max(0,(u-h)*.5),d=g*Math.cos(f)+v*Math.sin(f);return{edgeDist:m,centerDist:h,cellTone:p,cellAngle:d}}let Xo=null;function F1(i=1024){if(Xo)return Xo;const t=i,e=new Float32Array(t*t),n=new Float32Array(t*t),s=new Float32Array(t*t),o=new Float32Array(t*t),a=new Float32Array(t*t),r=28,l=76;for(let N=0;N<t;N++){const H=N/t;for(let V=0;V<t;V++){const X=V/t,K=N*t+V,G=rr(X,H,r,r,101,1.08),W=rr(X,H,l,l,409,1),O=Go(.015,.24,G.edgeDist),nt=Go(.02,.28,W.edgeDist),at=Math.sin((X*135+H*47+G.cellTone*6.28)*Math.PI*2)*Math.sin((X*29-H*113+G.cellTone*3.14)*Math.PI*2),$=at>.86?-.055*(at-.86)*7:0,j=Math.max(-.08,Math.min(.08,G.cellAngle*.11))*O,Y=O*(.76+.14*G.cellTone)+nt*.22*(1-O*.55)+j+$*O;e[K]=Math.max(0,Math.min(1,Y));const it=1-O,gt=.3+.09*(1-G.cellTone)+it*.52+(1-nt)*.08-$*.4;n[K]=Math.max(.18,Math.min(.95,gt));const Q=.24+.76*Go(0,.16,G.edgeDist)*(.85+.15*nt);s[K]=Math.max(.15,Math.min(1,Q)),o[K]=G.cellTone*.7+W.cellTone*.3,a[K]=Math.max(0,Math.min(1,.32+.58*G.cellTone*O+.1*nt))}}const c=document.createElement("canvas"),h=document.createElement("canvas"),u=document.createElement("canvas"),p=document.createElement("canvas"),f=document.createElement("canvas");for(const N of[c,h,u,p,f])N.width=t,N.height=t;const g=c.getContext("2d"),v=h.getContext("2d"),m=u.getContext("2d"),d=p.getContext("2d"),M=f.getContext("2d"),b=g.createImageData(t,t),_=v.createImageData(t,t),S=m.createImageData(t,t),w=d.createImageData(t,t),A=M.createImageData(t,t),E=3.6;for(let N=0;N<t;N++){const H=(N-1+t)%t,V=(N+1)%t;for(let X=0;X<t;X++){const K=(X-1+t)%t,G=(X+1)%t,W=N*t+X,O=W*4,nt=e[H*t+K],at=e[H*t+X],$=e[H*t+G],j=e[N*t+K],Y=e[N*t+G],it=e[V*t+K],gt=e[V*t+X],Q=e[V*t+G],F=($+3*Y+Q-(nt+3*j+it))*E,wt=(it+3*gt+Q-(nt+3*at+$))*E;let st=-F,mt=-wt,_t=1;const Pt=1/Math.sqrt(st*st+mt*mt+_t*_t);st*=Pt,mt*=Pt,_t*=Pt,_.data[O]=Math.round((st*.5+.5)*255),_.data[O+1]=Math.round((mt*.5+.5)*255),_.data[O+2]=Math.round((_t*.5+.5)*255),_.data[O+3]=255;const bt=e[W],z=o[W],I=12+bt*15+z*8;b.data[O]=Math.round(I*.86),b.data[O+1]=Math.round(I*.96),b.data[O+2]=Math.round(I*1.14),b.data[O+3]=255;const tt=Math.round(n[W]*255);S.data[O]=tt,S.data[O+1]=tt,S.data[O+2]=tt,S.data[O+3]=255;const pt=Math.round(s[W]*255);w.data[O]=pt,w.data[O+1]=pt,w.data[O+2]=pt,w.data[O+3]=255;const vt=Math.round(a[W]*255);A.data[O]=vt,A.data[O+1]=vt,A.data[O+2]=vt,A.data[O+3]=255}}g.putImageData(b,0,0),v.putImageData(_,0,0),m.putImageData(S,0,0),d.putImageData(w,0,0),M.putImageData(A,0,0);const y=(N,H=!1,V=7)=>(N.wrapS=jn,N.wrapT=jn,N.repeat.set(V,V),N.anisotropy=8,N.colorSpace=H?cn:Dn,N.needsUpdate=!0,N),x=512,P=document.createElement("canvas"),C=document.createElement("canvas");P.width=x,P.height=x,C.width=x,C.height=x;const R=P.getContext("2d"),L=C.getContext("2d"),D=R.createImageData(x,x),k=L.createImageData(x,x),B=new Float32Array(x*x);for(let N=0;N<x;N++){const H=N/x;for(let V=0;V<x;V++){const X=V/x,K=N*x+V,G=Math.sin(H*92*Math.PI*2+Math.sin(X*9*Math.PI*2)*1.4)*.25+Math.sin(H*210*Math.PI*2+X*18)*.12,W=rr(X,H,44,44,887,1),O=Go(.08,.22,W.edgeDist)*(W.cellTone>.45?.55:.15);B[K]=.5+G*.35+O*.4}}for(let N=0;N<x;N++){const H=(N-1+x)%x,V=(N+1)%x;for(let X=0;X<x;X++){const K=(X-1+x)%x,G=(X+1)%x,W=N*x+X,O=W*4,nt=(B[N*x+G]-B[N*x+K])*2.4,at=(B[V*x+X]-B[H*x+X])*2.4,$=1/Math.sqrt(nt*nt+at*at+1);D.data[O]=Math.round((-nt*$*.5+.5)*255),D.data[O+1]=Math.round((-at*$*.5+.5)*255),D.data[O+2]=Math.round(($*.5+.5)*255),D.data[O+3]=255;const j=Math.round((.36+(1-B[W])*.28)*255);k.data[O]=j,k.data[O+1]=j,k.data[O+2]=j,k.data[O+3]=255}}return R.putImageData(D,0,0),L.putImageData(k,0,0),Xo={albedoMap:y(new _n(c),!0,7),normalMap:y(new _n(h),!1,7),roughnessMap:y(new _n(u),!1,7),aoMap:y(new _n(p),!1,7),iridescenceThicknessMap:y(new _n(f),!1,7),prostheticPasteNormalMap:y(new _n(P),!1,3),prostheticPasteRoughnessMap:y(new _n(C),!1,3)},Xo}let zi=null;function N1(i=1024){if(zi)return zi;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=8,n.data[u+1]=12,n.data[u+2]=11,n.data[u+3]=255;continue}const p=Math.sin(h*68+Math.sin(c*11)*.65),f=Math.sin(h*142-Math.cos(c*19)*.85),g=Math.sin(h*260+c*24),v=Math.sin(h*23+1.4)*Math.cos(c*15-h*5),m=p*.42+f*.33+g*.15+v*.25,d=Math.sin(c*42+p*.6)*.08,M=Math.exp(-Math.pow((c-.38)/.13,2)),b=Math.max(0,Math.min(1,(.94-c)/.16)),_=Math.max(0,Math.min(1,1-c*1.08)),S=.84+.3*m+d;let w=(38+166*_+66*M)*S*b,A=(146+106*_+34*M)*S*b,E=(64-24*_+22*(1-_))*S*b;if(v<-.58&&c>.25&&c<.78){const y=Math.min(1,(-v-.58)*2.2);w*=1-.42*y,A*=1-.34*y,E*=1-.28*y}n.data[u]=Math.max(0,Math.min(255,Math.round(w))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(E))),n.data[u+3]=255}}return e.putImageData(n,0,0),zi=new _n(t),zi.colorSpace=cn,zi.anisotropy=8,zi.needsUpdate=!0,zi}function U1(){const i=N1(1024),t={uPupilDilation:{value:.76},uLightDir:{value:new T(.45,.65,.6).normalize()},uAlphaGlow:{value:0}},e=new Si({name:"Toothless_Iris_PBR",map:i,roughness:.55,metalness:0,envMapIntensity:.65});e.onBeforeCompile=s=>{s.uniforms.uPupilDilation=t.uPupilDilation,s.uniforms.uLightDir=t.uLightDir,s.uniforms.uAlphaGlow=t.uAlphaGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.34 + uAlphaGlow * 0.92) * eRadial;`)};const n=new vn({name:"Toothless_Cornea_WetCoat",color:new It(16777215),transparent:!0,opacity:.14,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function k1(){const i=F1(1024),t=U1(),e={uTime:{value:0},uAlphaGlow:{value:.08},uBiolumGlow:{value:0},uLightningCloak:{value:0},uSunDir:{value:new T(-.55,.38,-.74).normalize()},uSunColor:{value:new It(16765601)}},n=new vn({name:"Toothless_ObsidianScales_PBR",color:new It(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new zt(1.28,1.28),roughnessMap:i.roughnessMap,roughness:.88,aoMap:i.aoMap,aoMapIntensity:.88,metalness:.05,iridescence:.62,iridescenceIOR:1.4,iridescenceThicknessRange:[260,470],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.34,clearcoatRoughness:.3,sheen:.44,sheenRoughness:.48,sheenColor:new It(2178905),envMapIntensity:1.48});lr(n,e,!1);const s=new vn({name:"Toothless_PatagiumMembrane_PBR",color:new It(15660282),map:i.albedoMap,normalMap:i.normalMap,normalScale:new zt(.65,.65),roughnessMap:i.roughnessMap,roughness:.96,aoMap:i.aoMap,aoMapIntensity:.65,metalness:.02,iridescence:.38,iridescenceIOR:1.36,iridescenceThicknessRange:[250,430],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.18,clearcoatRoughness:.44,sheen:.42,sheenRoughness:.58,sheenColor:new It(1977920),side:hn,envMapIntensity:1.25});lr(s,e,!0);const o=new vn({name:"Toothless_ProstheticScalePaste_PBR",color:new It(1185308),normalMap:i.prostheticPasteNormalMap,normalScale:new zt(.95,.95),roughnessMap:i.prostheticPasteRoughnessMap,roughness:.46,metalness:.14,iridescence:.46,iridescenceIOR:1.4,iridescenceThicknessRange:[270,440],clearcoat:.42,clearcoatRoughness:.28,side:hn,envMapIntensity:1.35});lr(o,e,!1);const a=new Si({name:"Toothless_VikingBronze_PBR",color:new It(12094282),metalness:.88,roughness:.33,envMapIntensity:1.45}),r=new Si({name:"Toothless_ForgedIron_PBR",color:new It(2632754),metalness:.82,roughness:.42,envMapIntensity:1.3}),l=new vn({name:"Toothless_ObsidianClaws_PBR",color:new It(1316636),roughness:.24,metalness:.08,clearcoat:.65,clearcoatRoughness:.2,envMapIntensity:1.5}),c=new vn({name:"Toothless_RetractableTeeth_PBR",color:new It(15394524),roughness:.16,metalness:0,clearcoat:.85,clearcoatRoughness:.08,sheen:.2,sheenColor:new It(14018293),envMapIntensity:1.2}),h=new vn({name:"Toothless_OralGums_PBR",color:new It(2628390),normalMap:i.normalMap,normalScale:new zt(.58,.58),roughnessMap:i.roughnessMap,roughness:.42,metalness:0,clearcoat:.68,clearcoatRoughness:.18,side:hn});h.onBeforeCompile=p=>{p.uniforms.uAlphaGlow=e.uAlphaGlow,p.uniforms.uTime=e.uTime,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
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
        }`)};const u=new vn({name:"Toothless_Tongue_PBR",color:new It(7880269),normalMap:i.normalMap,normalScale:new zt(.68,.68),roughnessMap:i.roughnessMap,roughness:.36,metalness:0,clearcoat:.8,clearcoatRoughness:.14,sheen:.38,sheenColor:new It(10904693)});return{maps:i,skinMaterial:n,wingMembraneMaterial:s,prostheticPasteMaterial:o,prostheticBronzeMaterial:a,prostheticIronMaterial:r,clawMaterial:l,teethMaterial:c,oralGumMaterial:h,tongueMaterial:u,eyeMaterials:t,uniforms:e}}function We(i){let t=0,e=0;for(const f of i){const g=f.getAttribute("position");t+=g.count;const v=f.getIndex();e+=v?v.count:g.count}const n=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Float32Array(t*4),r=new Uint16Array(t*4),l=new Float32Array(t*4),c=t>65535?new Uint32Array(e):new Uint16Array(e);let h=0,u=0;for(const f of i){const g=f.getAttribute("position"),v=f.getAttribute("normal"),m=f.getAttribute("uv"),d=f.getAttribute("aAnatomyData"),M=f.getAttribute("skinIndex"),b=f.getAttribute("skinWeight"),_=g.count;if(n.set(g.array,h*3),v&&s.set(v.array,h*3),m&&o.set(m.array,h*2),d)a.set(d.array,h*4);else for(let w=0;w<_;w++)a[(h+w)*4]=.35;if(M&&b)for(let w=0;w<_*4;w++)r[h*4+w]=M.array[w],l[h*4+w]=b.array[w];const S=f.getIndex();if(S){for(let w=0;w<S.count;w++)c[u+w]=S.getX(w)+h;u+=S.count}else{for(let w=0;w<_;w++)c[u+w]=h+w;u+=_}h+=_}const p=new Xt;return p.setAttribute("position",new Z(n,3)),p.setAttribute("normal",new Z(s,3)),p.setAttribute("uv",new Z(o,2)),p.setAttribute("uv1",new Z(o,2)),p.setAttribute("aAnatomyData",new Z(a,4)),p.setAttribute("skinIndex",new ge(r,4)),p.setAttribute("skinWeight",new Yt(l,4)),p.setIndex(new Z(c,1)),p.computeBoundingSphere(),p.computeBoundingBox(),p}function ze(i,t){const e=t[0]+t[1]+t[2]+t[3];if(e<=1e-6)return{indices:[i[0],0,0,0],weights:[1,0,0,0]};const n=1/e;return{indices:i,weights:[t[0]*n,t[1]*n,t[2]*n,t[3]*n]}}function Yn(i,t,e,n=3.2){const s=[];for(let a=0;a<t.length;a++){const r=e[a];let l=i.distanceTo(r);if(a<t.length-1){const h=e[a+1],u=new T().subVectors(h,r),p=u.lengthSq();if(p>1e-6){const f=Math.max(0,Math.min(1,new T().subVectors(i,r).dot(u)/p)),g=new T().copy(r).addScaledVector(u,f);l=Math.min(l,i.distanceTo(g)+f*.08)}}const c=1/Math.pow(Math.max(.035,l),n);s.push({idx:t[a],w:c})}s.sort((a,r)=>r.w-a.w);const o=s.slice(0,4);for(;o.length<4;)o.push({idx:0,w:0});return ze([o[0].idx,o[1].idx,o[2].idx,o[3].idx],[o[0].w,o[1].w,o[2].w,o[3].w])}function le(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function ae(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Yo(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function nl(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let g=0;g<e-1;g++)n[g]=(t[g+1][1]-t[g][1])/(t[g+1][0]-t[g][0]);s[0]=n[0],s[e-1]=n[e-2];for(let g=1;g<e-1;g++)n[g-1]*n[g]<=0?s[g]=0:s[g]=(n[g-1]+n[g])*.5;for(let g=0;g<e-1;g++)if(Math.abs(n[g])<1e-8)s[g]=0,s[g+1]=0;else{const v=s[g]/n[g],m=s[g+1]/n[g],d=Math.hypot(v,m);if(d>3){const M=3/d;s[g]=M*v*n[g],s[g+1]=M*m*n[g]}}let o=0;for(let g=0;g<e-1;g++)if(i>=t[g][0]&&i<=t[g+1][0]){o=g;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r,h=2*c-3*l+1,u=c-2*l+r,p=-2*c+3*l,f=c-l;return h*t[o][1]+u*a*s[o]+p*t[o+1][1]+f*a*s[o+1]}const B1=[[-4.55,.018],[-3.95,.052],[-3.05,.095],[-2.1,.16],[-1.35,.228],[-.88,.282],[-.54,.334],[-.1,.328],[.42,.378],[.82,.394],[1.08,.304],[1.32,.25],[1.54,.228]],au=[[-4.55,.016],[-3.95,.044],[-3.05,.084],[-2.1,.14],[-1.35,.194],[-.88,.236],[-.54,.274],[-.1,.272],[.42,.306],[.82,.312],[1.08,.246],[1.32,.208],[1.54,.192]],z1=[new T(0,.126,-4.55),new T(0,.126,-4.05),new T(0,.126,-3.55),new T(0,.13,-3.05),new T(0,.19,-2.5),new T(0,.35,-1.92),new T(0,.56,-1.42),new T(0,.74,-.92),new T(0,.81,-.54),new T(0,.82,-.1),new T(0,.87,.4),new T(0,.94,.8),new T(0,1.09,1.06),new T(0,1.31,1.28),new T(0,1.53,1.48),new T(0,1.635,1.66),new T(0,1.654,1.86),new T(0,1.632,2.05),new T(0,1.586,2.235)];let cr=null;function ru(){return cr||(cr=new Nn(z1,!1,"centripetal",.5)),cr}function hr(i){const t=ru();let e=0,n=1;for(let v=0;v<22;v++){const m=(e+n)*.5;t.getPointAt(m).z<i?e=m:n=m}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new T(0,1,0),l=r.clone().addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=le(-4.55,-4.46,c);let u=nl(c,au)*h;const p=le(1.46,1.6,c);if(p>0){const v=Math.max(0,Math.min(1,(c-1.54)/.6949999999999998)),m=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(v-.8)/.2),2))),d=(.192+.014*ae(v,.35,.22)-.068*le(.34,.94,v))*m;u=q.lerp(u,d,p)}let f=u;return c>-.45&&c<1.18&&(f+=.01*ae(c,.35,.55)),{point:o.clone().addScaledVector(l,f),tangent:a,up:l}}function lu(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.64)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.38){const r=le(1.42,1.64,i.z),l=1-r,c=le(1.36,1.56,i.z);return ze([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return Yn(i,e,n,3.5)}function O1(i,t){const e=[];return e.push(H1(i,t)),e.push(...V1(i,t)),e.push(...W1(i,t)),e.push(...G1(i,t)),We(e)}function H1(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=ru(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(S=>i.boneIndexMap.get(S)),r=o.map(S=>i.bindWorldPositions.get(S)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),p=new Uint16Array(l*4),f=new Float32Array(l*4),g=new T(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),d=[{center:v,fwd:uo,up:new T(-.16,.985,.06).normalize()},{center:m,fwd:po,up:new T(.16,.985,.06).normalize()}].map(S=>{const w=new T().crossVectors(S.up,S.fwd).normalize(),A=new T().crossVectors(S.fwd,w).normalize();return{center:S.center,fwd:S.fwd,right:w,up:A}});for(let S=0;S<=e;S++){const w=S/e,A=1-Math.pow(1-w,1.85),E=s.getPointAt(A),y=s.getTangentAt(A).normalize(),x=new T().copy(g).addScaledVector(y,-g.dot(y)).normalize(),P=new T().crossVectors(x,y).normalize(),C=E.z,R=le(-4.55,-4.46,C),L=nl(C,B1)*R+.008*ae(C,-3.96,.36),D=nl(C,au)*R,k=le(1.46,1.6,C);let B=L,N=D;if(k>0){const H=Math.max(0,Math.min(1,(C-1.54)/.6949999999999998)),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(H-.8)/.2),2))),X=Ns(C),K=(.192+.014*ae(H,.35,.22)-.068*le(.34,.94,H))*V;B=q.lerp(L,X,k),N=q.lerp(D,K,k)}for(let H=0;H<=n;H++){const V=H/n,X=V*Math.PI*2,K=Math.sin(X),G=Math.cos(X);let W=B*K,O=N*G,nt=.28,at=0,$=0;if(C>-.85&&C<1.18){const Q=ae(C,.76,.3),F=ae(Math.abs(K),.48,.24)*le(-.05,-.88,G),wt=ae(K,0,.11)*le(-.55,-.98,G)*Q;O-=.026*Q*F-.012*wt,W+=Math.sign(K)*.016*Q*F;const st=ae(C,.88,.22)*ae(Math.abs(K),.72,.18)*le(-.08,-.78,G),mt=ae(C,-.54,.24)*ae(Math.abs(K),.7,.19)*le(-.05,-.78,G);O-=.032*st+.028*mt;const _t=ae(C,.38,.28)*ae(Math.abs(K),.92,.16)*ae(G,-.12,.35);W+=Math.sign(K)*Math.sin(C*26)*.003*_t,G>.75&&C>-.45&&(O+=.01*Math.pow((G-.75)/.25,2)*ae(C,.35,.55))}if(C>=1&&C<1.56){const Q=le(1,1.18,C)*(1-le(1.44,1.56,C)),F=ae(Math.abs(K),.62,.18)*ae(G,-.35,.3);W+=Math.sign(K)*.008*F*Q}if(C>=1.5){const Q=ae(C,1.75,.1)*ae(Math.abs(K),.52,.2)*le(.35,.9,G);O+=.014*Q,W+=Math.sign(K)*.01*Q;const F=ae(C,1.985,.105),wt=ae(Math.abs(K),.64,.17)*le(.16,.72,G),st=1+.22*Math.max(0,Math.sin((C-1.88)/.21*Math.PI*6));O+=.024*F*wt*st,W+=Math.sign(K)*.012*F*wt;const mt=ae(C,1.76,.11)*ae(Math.abs(K),.92,.16)*ae(G,-.18,.26),_t=ae(C,1.9,.13)*ae(Math.abs(K),.88,.17)*ae(G,-.1,.24);if(W+=Math.sign(K)*(.018*mt+.015*_t),G>.86&&C>1.58&&C<1.95){const pt=Math.pow((G-.86)/.14,2),vt=Math.max(0,Math.sin((C-1.58)/.37*Math.PI*6)),ft=-.003*ae(Math.abs(K),.16,.07);O+=(.008+.015*Math.pow(vt,1.5))*pt+ft,$=Math.max($,.75*pt*le(1.58,1.94,C))}if(C>2.15&&G>-.35&&G<.35){const pt=ae(K,0,.08)*le(2.15,2.225,C);O-=.0025*pt}const Pt=ae(K,0,.26)*le(.42,.96,G)*le(1.66,1.98,C),bt=le(1.98,2.19,C)*le(-.35,.85,G),z=F*wt*1.45,I=ae(G,-.2,.2)*le(1.74,2.18,C);nt=.38+1.56*Math.min(1,Math.max(Pt,bt,z,I*.88))}const j=new T().copy(E).addScaledVector(P,W).addScaledVector(x,O),Y=le(1.63,1.72,C);if(Y>0&&G<.04){const Q=Ai(C),F=Math.max(le(.56,.9,Math.abs(K)),le(2.12,2.21,C)),wt=Q-.0045,st=Q+.044*(1-le(2.08,2.22,C)),mt=q.lerp(st,wt,F),_t=Y*le(.04,-.26,G);j.y=q.lerp(j.y,mt,_t)}if(C>1.8&&C<2.16)for(const Q of d){if(Math.sign(j.x)!==Math.sign(Q.center.x))continue;const F=new T().subVectors(j,Q.center),wt=F.dot(Q.fwd),st=F.dot(Q.right),mt=F.dot(Q.up);if(wt>0){const _t=Math.exp(-.5*(Math.pow(st/.058,2)+Math.pow(mt/.05,2)))*le(0,.035,wt),Pt=ua-.024,bt=q.lerp(wt,Pt,_t);wt>bt&&(j.addScaledVector(Q.fwd,bt-wt),nt=Math.max(nt,.78*_t))}}if(C>2.1&&C<2.23&&j.y>1.575){const Q=Yo(j.x,j.z,.066,2.182,.021,.024)*ae(j.y,1.606,.017),F=Yo(j.x,j.z,-.066,2.182,.021,.024)*ae(j.y,1.606,.017),wt=Math.max(Q,F),st=Math.max(Yo(j.x,j.z,.068,2.176,.025,.026),Yo(j.x,j.z,-.068,2.176,.025,.026))*ae(j.y,1.622,.012);st>.05&&(j.y+=.0035*st,j.x+=Math.sign(j.x)*.0025*st),wt>.05&&(j.x*=1-.16*wt,j.y-=.011*wt,j.z-=.014*wt,$=Math.max($,Math.min(1,wt*1.35)))}if(C>1.76&&C<2.02&&j.y>1.68){const Q=Math.abs(j.x+.14-(j.z-1.89)*.4),F=ae(j.z,1.89,.052)*le(.015,.002,Q),wt=Math.abs(j.x-.12+(j.z-1.84)*.34),st=ae(j.z,1.84,.034)*le(.012,.002,wt);at=Math.min(1,Math.max(F,st*.85)),at>.01&&(j.y-=.0035*at)}G>.92&&C<1.56&&($=Math.max($,(G-.92)/.08*.55),nt=Math.max(nt,.65*((G-.92)/.08)));const it=S*(n+1)+H;c[it*3]=j.x,c[it*3+1]=j.y,c[it*3+2]=j.z,h[it*2]=A*5.2,h[it*2+1]=V*1.6,u[it*4]=nt,u[it*4+1]=at,u[it*4+2]=$,u[it*4+3]=0;const gt=lu(j,i,a,r);p.set(gt.indices,it*4),f.set(gt.weights,it*4)}}const M=new Uint32Array(e*n*6);let b=0;for(let S=0;S<e;S++)for(let w=0;w<n;w++){const A=S*(n+1)+w,E=(S+1)*(n+1)+w,y=(S+1)*(n+1)+(w+1),x=S*(n+1)+(w+1);M[b++]=A,M[b++]=E,M[b++]=y,M[b++]=A,M[b++]=y,M[b++]=x}const _=new Xt;return _.setAttribute("position",new Z(c,3)),_.setAttribute("uv",new Z(h,2)),_.setAttribute("aAnatomyData",new Z(u,4)),_.setAttribute("skinIndex",new ge(p,4)),_.setAttribute("skinWeight",new Yt(f,4)),_.setIndex(new Z(M,1)),_.computeVertexNormals(),wa(_,e,n),_}function V1(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.272,2.09,1.06],maxWidth:.074,maxThick:.027,rollAngle:l*-.46}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.395,1.692,1.33],maxWidth:.038,maxThick:.017,rollAngle:l*-.95}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],tipPos:[l*.348,1.565,1.39],maxWidth:.03,maxThick:.015,rollAngle:l*-1.15}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],customStart:[l*.218,1.498,1.62],tipPos:[l*.274,1.488,1.48],maxWidth:.021,maxThick:.012,rollAngle:l*-1.28})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.customStart?[new T(...r.customStart),new T(...r.tipPos).lerp(new T(...r.customStart),.5)]:r.boneNames.map(E=>i.bindWorldPositions.get(E).clone()),c=new T().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.052),...l,new T(...r.tipPos)],p=new Nn(u),f=r.boneNames.map(E=>i.boneIndexMap.get(E)),g=r.boneNames.map(E=>i.bindWorldPositions.get(E)),v=(o+1)*(a+1),m=new Float32Array(v*3),d=new Float32Array(v*2),M=new Float32Array(v*4),b=new Uint16Array(v*4),_=new Float32Array(v*4);for(let E=0;E<=o;E++){const x=1-E/o,P=p.getPointAt(x),C=p.getTangentAt(x).negate().normalize(),R=new T(Math.sin(r.rollAngle),Math.cos(r.rollAngle),0).normalize(),L=R.clone().addScaledVector(C,-R.dot(C)).normalize(),D=new T().crossVectors(L,C).normalize(),k=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(x-.76)/.24),2))),B=.72+.44*Math.sin(Math.min(1,x*1.15)*Math.PI),N=1+.34*Math.pow(Math.max(0,1-x*4.2),2),H=r.maxWidth*B*k*N,V=r.maxThick*(.85+.25*(1-x))*k*N;for(let X=0;X<=a;X++){const K=X/a,G=K*Math.PI*2,W=new T().copy(P).addScaledVector(D,H*Math.sin(G)).addScaledVector(L,V*Math.cos(G)),O=E*(a+1)+X;m[O*3]=W.x,m[O*3+1]=W.y,m[O*3+2]=W.z,d[O*2]=x*.85,d[O*2+1]=K*.65,M[O*4]=.45+1.35*le(.32,.9,x);const nt=Yn(W,f,g,3.6),at=le(.28,0,x),$=ze([n,nt.indices[0],nt.indices[1],nt.indices[2]],[at,nt.weights[0]*(1-at),nt.weights[1]*(1-at),nt.weights[2]*(1-at)]);b.set($.indices,O*4),_.set($.weights,O*4)}}const S=new Uint16Array(o*a*6);let w=0;for(let E=0;E<o;E++)for(let y=0;y<a;y++){const x=E*(a+1)+y,P=(E+1)*(a+1)+y,C=(E+1)*(a+1)+(y+1),R=E*(a+1)+(y+1);S[w++]=x,S[w++]=P,S[w++]=C,S[w++]=x,S[w++]=C,S[w++]=R}const A=new Xt;A.setAttribute("position",new Z(m,3)),A.setAttribute("uv",new Z(d,2)),A.setAttribute("aAnatomyData",new Z(M,4)),A.setAttribute("skinIndex",new ge(b,4)),A.setAttribute("skinWeight",new Yt(_,4)),A.setIndex(new Z(S,1)),A.computeVertexNormals(),wa(A,o,a),e.push(A)}return e}function W1(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?uo:po).clone(),p=new T(r*-.16,.985,.06).normalize(),f=new T().crossVectors(u,p).normalize(),g=new T().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,d=(s+1)*(o+1),M=new Float32Array(d*3),b=new Float32Array(d*2),_=new Float32Array(d*4),S=new Uint16Array(d*4),w=new Float32Array(d*4),A=ua+.0018;for(let P=0;P<=o;P++){const C=P/o,R=ae(C,.06,.08);for(let L=0;L<=s;L++){const D=L/s,k=q.degToRad(q.lerp(-65,65,D)),B=Math.sin(D*Math.PI),N=v?44*B:-40*B,H=v?78:-74,V=q.degToRad(q.lerp(N,H,C)),X=Math.max(0,Math.sin(D*Math.PI*22))*.0014*R,K=A+.0018*R+X-.0028*C,G=new T().addScaledVector(u,Math.cos(V)*Math.cos(k)).addScaledVector(f,Math.cos(V)*Math.sin(k)).addScaledVector(g,Math.sin(V)).normalize(),W=new T().copy(l).addScaledVector(G,K),O=P*(s+1)+L;M[O*3]=W.x,M[O*3+1]=W.y,M[O*3+2]=W.z,b[O*2]=D*.35,b[O*2+1]=C*.18,_[O*4]=.85;const nt=B*(1-le(.48,1,C)),at=Math.max(0,Math.min(1,nt));S.set([m,n,0,0],O*4),w.set([at,1-at,0,0],O*4)}}const E=new Uint16Array(s*o*6);let y=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,D=(P+1)*(s+1)+(C+1),k=P*(s+1)+(C+1);v?(E[y++]=R,E[y++]=D,E[y++]=L,E[y++]=R,E[y++]=k,E[y++]=D):(E[y++]=R,E[y++]=L,E[y++]=D,E[y++]=R,E[y++]=D,E[y++]=k)}const x=new Xt;x.setAttribute("position",new Z(M,3)),x.setAttribute("uv",new Z(b,2)),x.setAttribute("aAnatomyData",new Z(_,4)),x.setAttribute("skinIndex",new ge(S,4)),x.setAttribute("skinWeight",new Yt(w,4)),x.setIndex(new Z(E,1)),x.computeVertexNormals(),e.push(x)}}return e}function G1(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new T(a*.16,.96,.86),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new T(a*.342,.056,1),new T(a*.342,.032,1.078)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(jc(i,r,l,!0,o,n,s)),e.push(...Zc(i,o,!0,t));const c=[new T(a*.15,.8,-.54),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new T(a*.318,.054,-.562),new T(a*.318,.032,-.488)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(jc(i,c,h,!1,o,n,s)),e.push(...Zc(i,o,!1,t))}return e}function Zc(i,t,e,n){const s=[],o=ou(t,e),a=n===0?16:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=l.dirX,d=l.dirZ,M=Math.hypot(m,d),b=m/M,_=d/M,S=_,w=-b;for(let x=0;x<=a;x++){const P=x/a,C=q.lerp(-.38,1,P),R=Math.max(0,C),L=Math.max(0,-C)*.042,D=Math.sin(R*Math.PI)*.011-.009*R*R+L,k=l.rootX+b*l.toeLength*C,B=l.rootZ+_*l.toeLength*C,N=l.rootY+D,H=1+.44*Math.pow(1-le(-.38,.18,C),1.5),V=1+.15*ae(R,.4,.18)+.14*ae(R,.84,.1),X=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(P-.89)/.11),2))),K=q.lerp(l.baseRadius,l.tipRadius,R)*H*V*X;for(let G=0;G<=r;G++){const W=G/r,O=W*Math.PI*2,nt=Math.sin(O),at=Math.cos(O),$=at>.15?Math.pow(Math.max(0,Math.sin(R*Math.PI*4.5)),.75)*.0042*((at-.15)/.85):0,j=1.12+.24*(1-le(-.35,.22,C)),Y=k+S*nt*K*j,it=B+w*nt*K*j;let gt=N+at*(K*.86+$);gt<.003&&(gt=.003+Math.max(0,gt)*.12);const Q=x*(r+1)+G;u[Q*3]=Y,u[Q*3+1]=gt,u[Q*3+2]=it,p[Q*2]=P*.42,p[Q*2+1]=W*.36,f[Q*4]=at>.05?1.95:.38,g.set([c,0,0,0],Q*4),v.set([1,0,0,0],Q*4)}}const A=new Uint16Array(a*r*6);let E=0;for(let x=0;x<a;x++)for(let P=0;P<r;P++){const C=x*(r+1)+P,R=(x+1)*(r+1)+P,L=(x+1)*(r+1)+(P+1),D=x*(r+1)+(P+1);A[E++]=C,A[E++]=R,A[E++]=L,A[E++]=C,A[E++]=L,A[E++]=D}const y=new Xt;y.setAttribute("position",new Z(u,3)),y.setAttribute("uv",new Z(p,2)),y.setAttribute("aAnatomyData",new Z(f,4)),y.setAttribute("skinIndex",new ge(g,4)),y.setAttribute("skinWeight",new Yt(v,4)),y.setIndex(new Z(A,1)),y.computeVertexNormals(),wa(y,a,r),s.push(y)}return s}function jc(i,t,e,n,s,o,a){const r=s==="L"?1:-1,l=new Nn(t,!1,"centripetal",.5),c=e.map(S=>i.boneIndexMap.get(S)),h=e.map(S=>i.bindWorldPositions.get(S)),u=(o+1)*(a+1),p=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),d=new T(0,0,1);for(let S=0;S<=o;S++){const A=1-S/o,E=l.getPointAt(A),y=l.getTangentAt(A).negate().normalize(),x=d.clone().addScaledVector(y,-d.dot(y)).normalize(),P=new T().crossVectors(x,y).normalize(),C=.52+.48*le(0,.34,A),R=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(A-.91)/.09),2)))*C;let L=.095,D=.11;if(n){const N=ae(A,.54,.16)*.028,H=ae(A,.86,.12)*.088;L=(.09+N+H)*R,D=(.106+ae(A,.26,.18)*.036+N+H*.86)*R}else{const N=ae(A,.52,.15)*.032,H=ae(A,.86,.12)*.082;L=(.088+N+H)*R,D=(.11+ae(A,.26,.19)*.046+N*1.08+H*.84)*R}const k=le(.7,.94,A),B=1-le(.08,.42,A);for(let N=0;N<=a;N++){const H=N/a,V=H*Math.PI*2,X=Math.sin(V),K=Math.cos(V),G=X*r>0?Math.abs(X):0,W=1-.28*B*G;let O=1;if(k>.01&&K>-.35){const z=Math.atan2(X,Math.max(.05,K+.25)),I=Math.cos(z*3.6);O+=.16*k*Math.max(-.12,I)*le(-.35,.45,K)}const nt=le(-.25,.55,K+.35*G),at=le(.36,.68,A),$=A*22,j=H*14+Math.floor($)*.5,Y=Math.max(0,Math.sin($*Math.PI))*Math.max(0,Math.sin(j*Math.PI))*.0038*nt*at,it=L*W*O+Y,gt=D*O+Y,Q=new T().copy(E).addScaledVector(P,it*X).addScaledVector(x,gt*K);A>.7&&Q.y<.004&&(Q.y=.002+Math.max(0,Q.y)*.14);const F=S*(a+1)+N;p[F*3]=Q.x,p[F*3+1]=Q.y,p[F*3+2]=Q.z,f[F*2]=A*1.35,f[F*2+1]=H*.85,g[F*4]=.36+1.62*nt*at;const wt=Yn(Q,c,h,3.5),st=le(.24,0,A)*.72,mt=c[c.length-1],_t=le(.74,.88,A),Pt=(1-st)*(1-_t),bt=ze([mt,c[0],wt.indices[0],wt.indices[1]],[_t,st*(1-_t),wt.weights[0]*Pt,wt.weights[1]*Pt]);v.set(bt.indices,F*4),m.set(bt.weights,F*4)}}const M=new Uint16Array(o*a*6);let b=0;for(let S=0;S<o;S++)for(let w=0;w<a;w++){const A=S*(a+1)+w,E=(S+1)*(a+1)+w,y=(S+1)*(a+1)+(w+1),x=S*(a+1)+(w+1);M[b++]=A,M[b++]=E,M[b++]=y,M[b++]=A,M[b++]=y,M[b++]=x}const _=new Xt;return _.setAttribute("position",new Z(p,3)),_.setAttribute("uv",new Z(f,2)),_.setAttribute("aAnatomyData",new Z(g,4)),_.setAttribute("skinIndex",new ge(v,4)),_.setAttribute("skinWeight",new Yt(m,4)),_.setIndex(new Z(M,1)),_.computeVertexNormals(),wa(_,o,a),_}function wa(i,t,e){const n=i.getAttribute("normal"),s=new T,o=new T;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function X1(i,t){return{jawSkinGeometry:We([Y1(i,t),...$1(i,t)]),oralGumsGeometry:q1(i,t),teethGeometry:Z1(i,t),tongueGeometry:j1(i,t),irisGeometry:Kc(i,t,!1),corneaGeometry:Kc(i,t,!0),clawsGeometry:K1(i,t)}}function Tn(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Y1(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),p=new Uint16Array(l*4),f=new Float32Array(l*4);for(let d=0;d<=e;d++){const M=d/e,b=q.lerp(1.55,2.226,M),_=Ns(b),S=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.88)/.12),2))),w=Math.max(.002,(_-.0035*Tn(1.66,1.76,b))*S),A=Ai(b),E=.028*(1-Tn(1.55,1.7,b)),y=A+.0035+E,x=(.088-.034*M)*S;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),D=Math.cos(R),k=Math.exp(-Math.pow((M-.28)/.22,2))*.011,B=Math.exp(-Math.pow((M-.3)/.16,2))*Math.abs(L)*.01,N=(w+B)*L,H=-.022*D*(1-Math.pow(L,2))*Tn(1.68,1.78,b),V=D>=0?y+H:y+(x+k)*D;let X=0,K=V;if(b>1.98&&b<2.18&&D<-.55){const it=Math.abs(N-.024-(b-2.08)*.25);it<.013&&(X=1-it/.013,K+=.0022*X)}const G=d*(n+1)+P;c[G*3]=N,c[G*3+1]=K,c[G*3+2]=b,h[G*2]=M*.95,h[G*2+1]=C*.85;const W=Math.exp(-Math.pow(D/.35,2));u[G*4]=Math.min(1,.38+.56*Math.max(W,M>.7?(M-.7)*3:0)),u[G*4+1]=X,u[G*4+2]=0,u[G*4+3]=0;const O=Tn(1.62,1.71,b),nt=1-O,at=Tn(1.42,1.64,b),$=Tn(1.36,1.56,b),j=nt*(1-at),Y=ze([s,o,a,r],[O,nt*at,j*(.52+.48*$),j*(.48-.48*$)]);p.set(Y.indices,G*4),f.set(Y.weights,G*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let d=0;d<e;d++)for(let M=0;M<n;M++){const b=d*(n+1)+M,_=(d+1)*(n+1)+M,S=(d+1)*(n+1)+(M+1),w=d*(n+1)+(M+1);g[v++]=b,g[v++]=_,g[v++]=S,g[v++]=b,g[v++]=S,g[v++]=w}const m=new Xt;return m.setAttribute("position",new Z(c,3)),m.setAttribute("uv",new Z(h,2)),m.setAttribute("aAnatomyData",new Z(u,4)),m.setAttribute("skinIndex",new ge(p,4)),m.setAttribute("skinWeight",new Yt(f,4)),m.setIndex(new Z(g,1)),m.computeVertexNormals(),m}function $1(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=t===0?14:8,o=t===0?12:8,a=[];for(const r of["L","R"]){const l=r==="L"?1:-1,c=(s+1)*(o+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const b=M/o;for(let _=0;_<=s;_++){const S=_/s,w=q.lerp(1.65,1.9,S),A=Ai(w),E=Ns(w)-.008,y=-.016*Math.sin(b*Math.PI)*Math.pow(S,1.3),x=.026*(1-.55*S),P=A+(b-.5)*2*x,C=l*(E-.006*S+y*.35),R=M*(s+1)+_;h[R*3]=C,h[R*3+1]=P,h[R*3+2]=w+y,u[R*2]=S*.3,u[R*2+1]=b*.3,p[R*4]=.35;const L=Tn(0,1,b),D=1-L;f.set([e,n,0,0],R*4),g.set([L,D,0,0],R*4)}}const v=new Uint16Array(s*o*6);let m=0;for(let M=0;M<o;M++)for(let b=0;b<s;b++){const _=M*(s+1)+b,S=(M+1)*(s+1)+b,w=(M+1)*(s+1)+(b+1),A=M*(s+1)+(b+1);r==="L"?(v[m++]=_,v[m++]=A,v[m++]=w,v[m++]=_,v[m++]=w,v[m++]=S):(v[m++]=_,v[m++]=S,v[m++]=w,v[m++]=_,v[m++]=w,v[m++]=A)}const d=new Xt;d.setAttribute("position",new Z(h,3)),d.setAttribute("uv",new Z(u,2)),d.setAttribute("aAnatomyData",new Z(p,4)),d.setAttribute("skinIndex",new ge(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new Z(v,1)),d.computeVertexNormals(),a.push(d)}return a}function cu(i,t){const e=1.76+Math.cos(i)*(t?.422:.406),n=Math.max(.04,Ns(e)-(t?.022:.03));return{x:Math.sin(i)*n,z:e}}function q1(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=[],o=t===0?32:18,a=t===0?28:16;for(const u of[!0,!1]){const p=u?e:n,f=(o+1)*(a+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),d=new Uint16Array(f*4),M=new Float32Array(f*4);for(let w=0;w<=o;w++){const A=w/o,E=q.lerp(1.68,2.19,A),y=Ai(E),x=Math.max(.02,(Ns(E)-.016)*Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(A-.86)/.14),2))));for(let P=0;P<=a;P++){const C=P/a*2-1,R=Math.abs(C),L=Math.sqrt(Math.max(0,1-C*C)),D=C*x;let k;if(u){const N=A*Math.PI*18-R*2.6,H=Math.pow(.5+.5*Math.sin(N),1.8)*.0052*L*Tn(.08,.25,A),V=-.0032*Math.exp(-Math.pow(C/.1,2))*L,X=.0035*Math.abs(Math.sin(A*Math.PI*16))*Tn(.75,.98,R);k=y+.004+.032*L-H+V-X}else{const N=.0038*Math.exp(-Math.pow((R-.34)/.14,2))*L,H=.0035*Math.exp(-Math.pow(C/.07,2))*Tn(.55,.2,A),V=.003*Math.abs(Math.sin(A*Math.PI*14))*Tn(.75,.98,R);k=y-.002-.02*L+N+H+V}const B=w*(a+1)+P;g[B*3]=D,g[B*3+1]=k,g[B*3+2]=E,v[B*2]=A*2.4,v[B*2+1]=(C*.5+.5)*2,m[B*4]=.45,m[B*4+2]=(1-Tn(0,.38,A))*.85,d.set([p,0,0,0],B*4),M.set([1,0,0,0],B*4)}}const b=new Uint16Array(o*a*6);let _=0;for(let w=0;w<o;w++)for(let A=0;A<a;A++){const E=w*(a+1)+A,y=(w+1)*(a+1)+A,x=(w+1)*(a+1)+(A+1),P=w*(a+1)+(A+1);u?(b[_++]=E,b[_++]=x,b[_++]=y,b[_++]=E,b[_++]=P,b[_++]=x):(b[_++]=E,b[_++]=y,b[_++]=x,b[_++]=E,b[_++]=x,b[_++]=P)}const S=new Xt;S.setAttribute("position",new Z(g,3)),S.setAttribute("uv",new Z(v,2)),S.setAttribute("aAnatomyData",new Z(m,4)),S.setAttribute("skinIndex",new ge(d,4)),S.setAttribute("skinWeight",new Yt(M,4)),S.setIndex(new Z(b,1)),S.computeVertexNormals(),s.push(S)}const r=t===0?42:22,l=t===0?12:8;for(const u of[!0,!1]){const p=u?e:n,f=u?16:14,g=.0155,v=(r+1)*(l+1),m=new Float32Array(v*3),d=new Float32Array(v*2),M=new Float32Array(v*4),b=new Uint16Array(v*4),_=new Float32Array(v*4),S=[];for(let x=0;x<=18;x++){const P=q.lerp(-Math.PI*.46,Math.PI*.46,x/18),C=cu(P,u),R=Ai(C.z)+(u?.012:-.01);S.push(new T(C.x,R,C.z))}const w=new Nn(S);for(let x=0;x<=r;x++){const P=x/r,C=w.getPointAt(P),R=w.getTangentAt(P).normalize(),L=new T(0,1,0),D=new T().crossVectors(L,R).normalize(),k=1+.24*Math.pow(.5+.5*Math.cos(P*Math.PI*f*2),2),B=g*k;for(let N=0;N<=l;N++){const H=N/l,V=H*Math.PI*2,X=1+.12*Math.sin(V*3),K=new T().copy(C).addScaledVector(D,B*X*Math.sin(V)).addScaledVector(L,B*.82*Math.cos(V)),G=x*(l+1)+N;m[G*3]=K.x,m[G*3+1]=K.y,m[G*3+2]=K.z,d[G*2]=P*3,d[G*2+1]=H*1.2,M[G*4]=.4,b.set([p,0,0,0],G*4),_.set([1,0,0,0],G*4)}}const A=new Uint16Array(r*l*6);let E=0;for(let x=0;x<r;x++)for(let P=0;P<l;P++){const C=x*(l+1)+P,R=(x+1)*(l+1)+P,L=(x+1)*(l+1)+(P+1),D=x*(l+1)+(P+1);A[E++]=C,A[E++]=R,A[E++]=L,A[E++]=C,A[E++]=L,A[E++]=D}const y=new Xt;y.setAttribute("position",new Z(m,3)),y.setAttribute("uv",new Z(d,2)),y.setAttribute("aAnatomyData",new Z(M,4)),y.setAttribute("skinIndex",new ge(b,4)),y.setAttribute("skinWeight",new Yt(_,4)),y.setIndex(new Z(A,1)),y.computeVertexNormals(),s.push(y)}const c=t===0?18:10,h=t===0?12:8;{const u=(c+1)*(h+1),p=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4);for(let _=0;_<=h;_++){const S=_/h;for(let w=0;w<=c;w++){const A=w/c,E=q.lerp(-Math.PI*.62,Math.PI*.62,A),y=1.78-Math.cos(E)*.11,x=Ns(Math.max(1.66,y))-.022,P=Math.sin(E)*x,C=Ai(y),R=q.lerp(C-.018,C+.03,S),L=_*(c+1)+w;p[L*3]=P,p[L*3+1]=R,p[L*3+2]=y,f[L*2]=A*1.5,f[L*2+1]=S*1.5,g[L*4]=.5,g[L*4+2]=.95*Math.cos(E*.65);const D=Tn(0,1,S);v.set([e,n,0,0],L*4),m.set([D,1-D,0,0],L*4)}}const d=new Uint16Array(c*h*6);let M=0;for(let _=0;_<h;_++)for(let S=0;S<c;S++){const w=_*(c+1)+S,A=(_+1)*(c+1)+S,E=(_+1)*(c+1)+(S+1),y=_*(c+1)+(S+1);d[M++]=w,d[M++]=A,d[M++]=E,d[M++]=w,d[M++]=E,d[M++]=y}const b=new Xt;b.setAttribute("position",new Z(p,3)),b.setAttribute("uv",new Z(f,2)),b.setAttribute("aAnatomyData",new Z(g,4)),b.setAttribute("skinIndex",new ge(v,4)),b.setAttribute("skinWeight",new Yt(m,4)),b.setIndex(new Z(d,1)),b.computeVertexNormals(),s.push(b)}return We(s)}function Z1(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const p=(u+.5)/l,f=q.lerp(-Math.PI*.42,Math.PI*.42,p),g=cu(f,r),v=g.x,m=g.z,d=Ai(m)+(r?.011:-.01),M=1+.34*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),b=.023*M*(.78+.22*Math.cos(f)),_=.0062*M,S=(o+1)*(a+1),w=new Float32Array(S*3),A=new Float32Array(S*2),E=new Float32Array(S*4),y=new Uint16Array(S*4),x=new Float32Array(S*4),P=-Math.sin(f),C=-Math.cos(f);for(let k=0;k<=o;k++){const B=r?1-k/o:k/o,N=_*(1-.88*Math.pow(B,1.25)),H=.0055*B*B,V=v+P*H,X=d+h*b*B,K=m+C*H-.003*B*B;for(let G=0;G<=a;G++){const W=G/a,O=W*Math.PI*2,nt=k*(a+1)+G;w[nt*3]=V+Math.sin(O)*N,w[nt*3+1]=X,w[nt*3+2]=K+Math.cos(O)*N,A[nt*2]=B,A[nt*2+1]=W,y.set([c,0,0,0],nt*4),x.set([1,0,0,0],nt*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let k=0;k<o;k++)for(let B=0;B<a;B++){const N=k*(a+1)+B,H=(k+1)*(a+1)+B,V=(k+1)*(a+1)+(B+1),X=k*(a+1)+(B+1);R[L++]=N,R[L++]=H,R[L++]=V,R[L++]=N,R[L++]=V,R[L++]=X}const D=new Xt;D.setAttribute("position",new Z(w,3)),D.setAttribute("uv",new Z(A,2)),D.setAttribute("aAnatomyData",new Z(E,4)),D.setAttribute("skinIndex",new ge(y,4)),D.setAttribute("skinWeight",new Yt(x,4)),D.setIndex(new Z(R,1)),D.computeVertexNormals(),s.push(D)}}return We(s)}function j1(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),p=new Float32Array(r*4);for(let m=0;m<=e;m++){const d=m/e,M=q.lerp(1.74,2.12,d),b=Ai(M)-.004,_=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(d-.76)/.24),2))),S=(.08+.012*Math.sin(d*Math.PI)-.022*d)*_,w=(.015-.005*d)*_;for(let A=0;A<=n;A++){const E=A/n,y=E*Math.PI*2,x=Math.sin(y),P=Math.cos(y),C=P>.35?-.0042*Math.exp(-Math.pow(x/.24,2)):0,R=P>.2?.0012*Math.sin(d*Math.PI*26)*Math.cos(x*Math.PI*9)*_:0,L=new T(S*x,b+w*P+C+R,M),D=m*(n+1)+A;l[D*3]=L.x,l[D*3+1]=L.y,l[D*3+2]=L.z,c[D*2]=d*2.5,c[D*2+1]=E*1.8;const k=Yn(L,o,a,3.8);u.set(k.indices,D*4),p.set(k.weights,D*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let d=0;d<n;d++){const M=m*(n+1)+d,b=(m+1)*(n+1)+d,_=(m+1)*(n+1)+(d+1),S=m*(n+1)+(d+1);f[g++]=M,f[g++]=b,f[g++]=_,f[g++]=M,f[g++]=_,f[g++]=S}const v=new Xt;return v.setAttribute("position",new Z(l,3)),v.setAttribute("uv",new Z(c,2)),v.setAttribute("aAnatomyData",new Z(h,4)),v.setAttribute("skinIndex",new ge(u,4)),v.setAttribute("skinWeight",new Yt(p,4)),v.setIndex(new Z(f,1)),v.computeVertexNormals(),v}function Kc(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?uo:po).clone(),u=new T(r*-.16,.985,.06).normalize(),p=new T().crossVectors(u,h).normalize(),f=new T().crossVectors(h,p).normalize(),g=e?ua+9e-4:ua,v=.94,m=(s+1)*(o+1),d=new Float32Array(m*3),M=new Float32Array(m*2),b=new Float32Array(m*4),_=new Uint16Array(m*4),S=new Float32Array(m*4);for(let y=0;y<=s;y++){const x=y/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(x),C=Math.cos(x);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,D=Math.cos(L),k=Math.sin(L);let B=g;if(x<v){const K=1-x/v;e?B+=.0014*K*K:B-=.0028*K*K}const N=new T().addScaledVector(h,C).addScaledVector(p,P*D).addScaledVector(f,P*k).normalize(),H=new T().copy(l).addScaledVector(N,B),V=y*(o+1)+R;d[V*3]=H.x,d[V*3+1]=H.y,d[V*3+2]=H.z;const X=Math.min(.498,x/v*.48);M[V*2]=.5+X*D,M[V*2+1]=.5+X*k,_.set([c,0,0,0],V*4),S.set([1,0,0,0],V*4)}}const w=new Uint16Array(s*o*6);let A=0;for(let y=0;y<s;y++)for(let x=0;x<o;x++){const P=y*(o+1)+x,C=(y+1)*(o+1)+x,R=(y+1)*(o+1)+(x+1),L=y*(o+1)+(x+1);w[A++]=P,w[A++]=C,w[A++]=R,w[A++]=P,w[A++]=R,w[A++]=L}const E=new Xt;E.setAttribute("position",new Z(d,3)),E.setAttribute("uv",new Z(M,2)),E.setAttribute("aAnatomyData",new Z(b,4)),E.setAttribute("skinIndex",new ge(_,4)),E.setAttribute("skinWeight",new Yt(S,4)),E.setIndex(new Z(w,1)),E.computeVertexNormals(),n.push(E)}return We(n)}function K1(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=ou(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,p=l.dirZ/h,f=p,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,d=l.rootZ+p*l.toeLength*v,M=l.rootY+Math.sin(v*Math.PI)*.011-.009*v*v+.002,b=l.toeLength*(1-v)+l.clawLength,_=l.tipRadius*.76,S=(n+1)*(s+1),w=new Float32Array(S*3),A=new Float32Array(S*2),E=new Float32Array(S*4),y=new Uint16Array(S*4),x=new Float32Array(S*4);for(let L=0;L<=n;L++){const D=L/n,k=_*(1-.85*Math.pow(D,1.52)),B=m+u*b*D,N=d+p*b*D,H=Math.max(.004,M-.036*Math.pow(D,1.8)+.006*Math.sin(D*Math.PI));for(let V=0;V<=s;V++){const X=V/s,K=X*Math.PI*2,G=Math.sin(K),W=Math.cos(K),O=L*(s+1)+V;w[O*3]=B+f*G*k*.74,w[O*3+1]=Math.max(.002,H+W*k*1.05),w[O*3+2]=N+g*G*k*.74,A[O*2]=D,A[O*2+1]=X,y.set([c,0,0,0],O*4),x.set([1,0,0,0],O*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let D=0;D<s;D++){const k=L*(s+1)+D,B=(L+1)*(s+1)+D,N=(L+1)*(s+1)+(D+1),H=L*(s+1)+(D+1);P[C++]=k,P[C++]=B,P[C++]=N,P[C++]=k,P[C++]=N,P[C++]=H}const R=new Xt;R.setAttribute("position",new Z(w,3)),R.setAttribute("uv",new Z(A,2)),R.setAttribute("aAnatomyData",new Z(E,4)),R.setAttribute("skinIndex",new ge(y,4)),R.setAttribute("skinWeight",new Yt(x,4)),R.setIndex(new Z(P,1)),R.computeVertexNormals(),e.push(R)}}return We(e)}function Q1(i,t){const e=[],n=[],s=[];for(const o of["L","R"]){const a=o==="L"?1:-1;e.push(...J1(i,o,a,t)),n.push(...t_(i,o,a,t)),e.push(...e_(i,o,t)),n.push(n_(i,o,t)),s.push(a_(i,o,a,t))}return e.push(...i_(i,t)),n.push(s_(i,t)),{wingSparsSkinGeometry:We(e),wingMembraneGeometry:We(n),dorsalSpinesGeometry:o_(i,t),alulaClawsGeometry:We(s)}}function ro(i,t,e,n,s,o,a=.55){const r=new Nn(t),l=e.map(_=>i.boneIndexMap.get(_)),c=e.map(_=>i.bindWorldPositions.get(_)),h=(s+1)*(o+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new T(0,1,0);for(let _=0;_<=s;_++){const S=_/s,w=r.getPointAt(S),A=r.getTangentAt(S).normalize();let E=m.clone().addScaledVector(A,-m.dot(A));E.lengthSq()<1e-4&&E.set(0,0,1),E.normalize();const y=new T().crossVectors(E,A).normalize(),x=S*(n.length-1),P=Math.min(n.length-2,Math.floor(x)),C=x-P;let R=q.lerp(n[P],n[P+1],C);S>.92&&(R*=Math.sqrt(Math.max(0,1-Math.pow((S-.92)/.08,2))));for(let L=0;L<=o;L++){const D=L/o,k=D*Math.PI*2,B=new T().copy(w).addScaledVector(y,R*Math.sin(k)).addScaledVector(E,R*.88*Math.cos(k)),N=_*(o+1)+L;u[N*3]=B.x,u[N*3+1]=B.y,u[N*3+2]=B.z,p[N*2]=S*1.4,p[N*2+1]=D*.45,f[N*4]=a;const H=Yn(B,l,c,3.8);g.set(H.indices,N*4),v.set(H.weights,N*4)}}const d=new Uint16Array(s*o*6);let M=0;for(let _=0;_<s;_++)for(let S=0;S<o;S++){const w=_*(o+1)+S,A=(_+1)*(o+1)+S,E=(_+1)*(o+1)+(S+1),y=_*(o+1)+(S+1);d[M++]=w,d[M++]=A,d[M++]=E,d[M++]=w,d[M++]=E,d[M++]=y}const b=new Xt;return b.setAttribute("position",new Z(u,3)),b.setAttribute("uv",new Z(p,2)),b.setAttribute("aAnatomyData",new Z(f,4)),b.setAttribute("skinIndex",new ge(g,4)),b.setAttribute("skinWeight",new Yt(v,4)),b.setIndex(new Z(d,1)),b.computeVertexNormals(),b}function J1(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new T(e*.17,1.01,.75),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(ro(i,c,h,[.062,.068,.066,.056,.044,.03,.008],o,a,.72));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let p=1;p<=5;p++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${p}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${p}_b`);s.push(ro(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${p}_a`,`wingFinger_${t}_${p}_b`],[.03,.019,.005],r,l,.58))}return s}function t_(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),p=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(Ss(o,Math.max(4,Math.floor(a*.5)),(A,E)=>{const y=new T().lerpVectors(new T(e*.3,1.13,.88),f,A);y.z+=.05*Math.sin(A*Math.PI);const x=A<.48?new T().lerpVectors(v,g,A/.48):new T().lerpVectors(g,f,(A-.48)/.52),P=new T().lerpVectors(x,y,E),C=Math.max(0,(A-.45)/.55),R=Math.max(0,(.55-A)/.55),L=1-Math.abs(A-.5)*1.8,D=ze([c,l,r,h],[R,Math.max(0,L),C,(1-A)*.25]);return{pos:P,skin:D,thinness:E*.65}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),d=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),M=i.boneIndexMap.get(`wingFinger_${t}_1_a`),b=i.boneIndexMap.get(`wingFinger_${t}_1_b`),_=new T(e*.32,1.06,.72),S=new T(e*.29,.9,.14),w=new T(e*.26,.82,-.46);s.push(Ss(o,a,(A,E)=>{const y=E<.5?new T().lerpVectors(_,S,E*2):new T().lerpVectors(S,w,(E-.5)*2),x=E<.5?new T().lerpVectors(f,m,E*2):new T().lerpVectors(m,d,(E-.5)*2),P=A<.45?new T().lerpVectors(_,g,A/.45):new T().lerpVectors(g,f,(A-.45)/.55),C=new T().lerpVectors(y,x,A),R=new T().lerpVectors(P,C,Math.pow(E,.88)),L=Math.sin(A*Math.PI)*Math.pow(E,2.2);R.z+=.19*L,R.y+=.035*Math.sin(A*Math.PI)*Math.sin(E*Math.PI);const D=E<.42?h:E<.78?u:p,k=E<.35?r:E<.72?M:b,B=(1-E)*Math.sin(A*Math.PI)*.6,N=ze([D,k,l,r],[(1-A)*(1-B*.5),A*(1-B*.5),B*.65,B*.35]);return{pos:R,skin:N,thinness:.35+.65*Math.sin(A*Math.PI)*E}}));for(let A=1;A<=5;A++){const E=i.bindWorldPositions.get(`wingFinger_${t}_${A}_a`),y=i.bindWorldPositions.get(`wingFinger_${t}_${A}_b`),x=i.bindWorldPositions.get(`wingFinger_${t}_${A+1}_a`),P=i.bindWorldPositions.get(`wingFinger_${t}_${A+1}_b`),C=i.boneIndexMap.get(`wingFinger_${t}_${A}_a`),R=i.boneIndexMap.get(`wingFinger_${t}_${A}_b`),L=i.boneIndexMap.get(`wingFinger_${t}_${A+1}_a`),D=i.boneIndexMap.get(`wingFinger_${t}_${A+1}_b`),k=A===5?.24:.17;s.push(Ss(o,a,(B,N)=>{const H=N<.5?new T().lerpVectors(f,E,N*2):new T().lerpVectors(E,y,(N-.5)*2),V=N<.5?new T().lerpVectors(f,x,N*2):new T().lerpVectors(x,P,(N-.5)*2),X=new T().lerpVectors(H,V,B),K=new T().subVectors(f,X).normalize(),G=Math.sin(B*Math.PI)*Math.pow(N,2.4);X.addScaledVector(K,k*G),X.y+=.028*Math.sin(B*Math.PI)*Math.sin(N*Math.PI);let W;if(N<.25){const O=1-N/.25;W=ze([r,C,L,0],[O,(1-O)*(1-B),(1-O)*B,0])}else{const O=Math.max(0,Math.min(1,(N-.42)/.48));W=ze([C,R,L,D],[(1-B)*(1-O),(1-B)*O,B*(1-O),B*O])}return{pos:X,skin:W,thinness:.3+.7*Math.sin(B*Math.PI)*Math.pow(N,.7)}}))}return s}function e_(i,t,e){const n=e===0?12:7,s=e===0?8:6,o=t==="L"?1:-1,a=[];return ha.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new T(o*r.rootX,r.rootY,r.rootZ),u=new T(o*r.tipX,r.tipY,r.tipZ);a.push(ro(i,[h,u],[c],[.017,.004],n,s,.55))}),a}function n_(i,t,e){const n=e===0?12:7,s=t==="L"?1:-1,o=[],a=ha.map(p=>new T(s*p.rootX,p.rootY,p.rootZ)),r=ha.map(p=>new T(s*p.tipX,p.tipY,p.tipZ)),l=[1,2,3].map(p=>i.boneIndexMap.get(`pelvicFin_${t}_${p}`)),c=i.boneIndexMap.get("tail_3"),h=new T(s*.1,.54,-1.56),u=[{rA:a[0],tA:r[0],rB:a[1],tB:r[1],iA:l[0],iB:l[1]},{rA:a[1],tA:r[1],rB:a[2],tB:r[2],iA:l[1],iB:l[2]},{rA:a[2],tA:r[2],rB:h,tB:h,iA:l[2],iB:c}];for(const p of u)o.push(Ss(n,n,(f,g)=>{const v=new T().lerpVectors(p.rA,p.tA,g),m=new T().lerpVectors(p.rB,p.tB,g),d=new T().lerpVectors(v,m,f),M=new T().subVectors(p.rA,d).normalize();d.addScaledVector(M,.042*Math.sin(f*Math.PI)*Math.pow(g,2.1));const b=ze([p.iA,p.iB,0,0],[1-f,f,0,0]);return{pos:d,skin:b,thinness:.4+.55*g}}));return We(o)}function i_(i,t){const e=t===0?12:7,n=t===0?8:6,s=[];return Yi.forEach((o,a)=>{const r=`tailFin_R_${a+1}`,l=new T(-o.rootX,o.rootY,o.rootZ),c=new T(-o.tipX,o.tipY,o.tipZ);s.push(ro(i,[l,c],[r],[.014,.0038],e,n,.52))}),s}function s_(i,t){const e=t===0?12:7,n=[];for(let h=0;h<4;h++){const u=Yi[h],p=Yi[h+1],f=new T(-u.rootX,u.rootY,u.rootZ),g=new T(-p.rootX,p.rootY,p.rootZ),v=new T(-u.tipX,u.tipY,u.tipZ),m=new T(-p.tipX,p.tipY,p.tipZ),d=i.boneIndexMap.get(`tailFin_R_${h+1}`),M=i.boneIndexMap.get(`tailFin_R_${h+2}`);n.push(Ss(e,e,(b,_)=>{const S=new T().lerpVectors(f,v,_),w=new T().lerpVectors(g,m,_),A=new T().lerpVectors(S,w,b),E=new T().lerpVectors(f,g,b),y=new T().subVectors(E,A).normalize();A.addScaledVector(y,.046*Math.sin(b*Math.PI)*Math.pow(_,2.15));const x=ze([d,M,0,0],[1-b,b,0,0]);return{pos:A,skin:x,thinness:.45+.55*_}}))}const s=Yi[4],o=new T(-s.rootX,s.rootY,s.rootZ),a=new T(-s.tipX,s.tipY,s.tipZ),r=new T(-s.rootX,s.rootY,-4.5),l=i.boneIndexMap.get("tailFin_R_5"),c=i.boneIndexMap.get("tailFinHinge_R");return n.push(Ss(e,e,(h,u)=>{const p=new T().lerpVectors(o,a,u),f=new T().lerpVectors(p,r,h),g=ze([l,c,0,0],[1-h,h,0,0]);return{pos:f,skin:g,thinness:.45+.5*u}})),We(n)}function Ss(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let p=0;p<=t;p++){const f=p/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),d=p*(i+1)+g;s[d*3]=m.pos.x,s[d*3+1]=m.pos.y,s[d*3+2]=m.pos.z,o[d*2]=v*1.25,o[d*2+1]=f*1.25,a[d*4]=.22,a[d*4+1]=0,a[d*4+2]=.18*m.thinness,a[d*4+3]=m.thinness,r.set(m.skin.indices,d*4),l.set(m.skin.weights,d*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let p=0;p<t;p++)for(let f=0;f<i;f++){const g=p*(i+1)+f,v=(p+1)*(i+1)+f,m=(p+1)*(i+1)+(f+1),d=p*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=d}const u=new Xt;return u.setAttribute("position",new Z(s,3)),u.setAttribute("uv",new Z(o,2)),u.setAttribute("uv1",new Z(o,2)),u.setAttribute("aAnatomyData",new Z(a,4)),u.setAttribute("skinIndex",new ge(r,4)),u.setAttribute("skinWeight",new Yt(l,4)),u.setIndex(new Z(c,1)),u.computeVertexNormals(),u}function o_(i,t){const e=t===0?32:t===1?22:14,n=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],s=n.map(_=>i.boneIndexMap.get(_)),o=n.map(_=>i.bindWorldPositions.get(_)),a=e*2,r=6,l=8,c=new Float32Array(a*r*3),h=new Float32Array(a*r*3),u=new Float32Array(a*r*2),p=new Float32Array(a*r*4),f=new Uint16Array(a*r*4),g=new Float32Array(a*r*4),v=new Uint16Array(a*l*3);let m=0,d=0;for(let _=0;_<e;_++){const S=_/(e-1),w=q.lerp(-3.25,1.48,1-Math.pow(1-S,1.28)),A=hr(w),E=A.point,y=A.tangent,x=A.up,P=.32+.68*Math.sin(Math.pow(S,.74)*Math.PI),C=.078*P,R=.108*P,L=-.028,D=lu(E,i,s,o);for(const k of[1,-1]){const B=k*.004,N=k*C*.62,H=-C*.16,V=hr(w+R*.5).point,X=hr(w-R*.5).point,K=[V.clone().addScaledVector(x,L).setX(B),X.clone().addScaledVector(x,L).setX(B),E.clone().addScaledVector(x,L*.85).setX(k*.02*P),E.clone().addScaledVector(y,R*.1).addScaledVector(x,C*.64).setX(B*1.2),E.clone().addScaledVector(y,-R*.4).addScaledVector(x,C).setX(B*1.1),E.clone().addScaledVector(y,-R*.12).addScaledVector(x,C*.42).setX(k*.001)],G=K.map((O,nt)=>{const at=O.clone();if(nt>=3){const $=nt===4?1:nt===3?.68:.48;at.x+=N*$,at.y+=H*$}return at});for(let O=0;O<r;O++){const nt=(m+O)*3;c[nt]=K[O].x,c[nt+1]=K[O].y,c[nt+2]=K[O].z,h[nt]=G[O].x,h[nt+1]=G[O].y,h[nt+2]=G[O].z,u[(m+O)*2]=S,u[(m+O)*2+1]=O/r,p[(m+O)*4]=.75,p[(m+O)*4+1]=0,p[(m+O)*4+2]=O===5||O>=3?.96:.72,p[(m+O)*4+3]=0,f.set(D.indices,(m+O)*4),g.set(D.weights,(m+O)*4)}const W=k>0?[[0,2,3],[2,1,4],[2,4,3],[0,3,5],[5,3,4],[5,4,1],[0,5,1],[0,1,2]]:[[0,3,2],[2,4,1],[2,3,4],[0,5,3],[5,4,3],[5,1,4],[0,1,5],[0,2,1]];for(const O of W)v[d++]=m+O[0],v[d++]=m+O[1],v[d++]=m+O[2];m+=r}}const M=new Xt;M.setAttribute("position",new Z(c,3)),M.setAttribute("uv",new Z(u,2)),M.setAttribute("uv1",new Z(u,2)),M.setAttribute("aAnatomyData",new Z(p,4)),M.setAttribute("skinIndex",new ge(f,4)),M.setAttribute("skinWeight",new Yt(g,4)),M.setIndex(new Z(v,1));const b=new Z(h,3);return b.name="dorsalVSplit",M.morphAttributes.position=[b],M.computeVertexNormals(),M}function a_(i,t,e,n){const s=i.bindWorldPositions.get(`wingWrist_${t}`),o=s.clone().add(new T(e*.035,.018,.085));return ro(i,[s,o],[`wingWrist_${t}`],[.016,.003],n===0?7:4,n===0?8:6,.8)}function r_(i,t){const e=[],n=[],s=[],o=i.boneIndexMap.get("prostheticCollar"),a=i.boneIndexMap.get("prostheticRod"),r=i.boneIndexMap.get("tail_8"),l=i.boneIndexMap.get("tail_9"),c=i.boneIndexMap.get("tail_10"),h=t===0?20:12,u=[{z:-3.48,y:.125,rOuter:.066,length:.044,boneIdx:o},{z:-3.56,y:.125,rOuter:.062,length:.04,boneIdx:o},{z:-4.34,y:.128,rOuter:.033,length:.032,boneIdx:c}];for(const w of u)e.push(qs(new T(0,w.y,w.z-w.length*.5),new T(0,w.y,w.z+w.length*.5),w.rOuter,w.rOuter*1.03,h,w.boneIdx));e.push(qs(new T(.044,.138,-3.6),new T(.048,.142,-3.46),.024,.028,t===0?14:8,o));const p=t===0?16:8;e.push(Jc(new T(.038,.138,-3.52),new T(.02,.138,-4.34),.012,.0085,p,t===0?12:8,[a,l,c])),n.push(Jc(new T(.026,.126,-3.5),new T(.014,.127,-4.35),.014,.009,p,t===0?10:6,[r,l,c]));const f=[],g=[],v=[];Yi.forEach((w,A)=>{const E=`tailFin_L_${A+1}`,y=i.boneIndexMap.get(E),x=new T(w.rootX,w.rootY,w.rootZ),P=new T(w.tipX,w.tipY,w.tipZ);f.push(x),g.push(P),v.push(y),n.push(hu(x,P,.0125,.004,t===0?10:6,t===0?10:6,y,y));const C=new T().subVectors(P,x).normalize();e.push(qs(x.clone(),x.clone().addScaledVector(C,.026),.0155,.0145,t===0?10:6,y)),e.push(qs(P.clone().addScaledVector(C,-.012),P.clone().addScaledVector(C,.02),.0055,.0018,t===0?8:6,y))});for(let w=1;w<=4;w++){const A=w/5,E=new T().lerpVectors(f[0],g[0],A);e.push(qs(E.clone().add(new T(0,-.0055,0)),E.clone().add(new T(0,.0055,0)),.006,.006,8,v[0]))}const m=t===0?12:7;for(let w=0;w<4;w++){const A=f[w],E=f[w+1],y=g[w],x=g[w+1],P=v[w],C=v[w+1];s.push(Qc(m,w,(R,L)=>{const D=new T().lerpVectors(A,y,L),k=new T().lerpVectors(E,x,L),B=new T().lerpVectors(D,k,R),N=new T().lerpVectors(A,E,R),H=new T().subVectors(N,B).normalize();B.addScaledVector(H,.046*Math.sin(R*Math.PI)*Math.pow(L,2.15));const V=ze([P,C,0,0],[1-R,R,0,0]);return{pos:B,skin:V}}))}const d=f[4],M=g[4],b=new T(d.x,d.y,-4.5),_=v[4],S=i.boneIndexMap.get("tailFinHinge_L");return s.push(Qc(m,4,(w,A)=>{const E=new T().lerpVectors(d,M,A),y=new T().lerpVectors(E,b,w),x=ze([_,S,0,0],[1-w,w,0,0]);return{pos:y,skin:x}})),{bronzeHardwareGeometry:We(e),ironStrutsGeometry:We(n),scalePasteMembraneGeometry:We(s)}}function Qc(i,t,e){const n=(i+1)*(i+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let p=0;p<=i;p++){const f=p/i;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),d=p*(i+1)+g;s[d*3]=m.pos.x,s[d*3+1]=m.pos.y,s[d*3+2]=m.pos.z,o[d*2]=(t+v)*.45,o[d*2+1]=f*1.2,a[d*4]=.55,a[d*4+3]=.25,r.set(m.skin.indices,d*4),l.set(m.skin.weights,d*4)}}const c=new Uint16Array(i*i*6);let h=0;for(let p=0;p<i;p++)for(let f=0;f<i;f++){const g=p*(i+1)+f,v=(p+1)*(i+1)+f,m=(p+1)*(i+1)+(f+1),d=p*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=d}const u=new Xt;return u.setAttribute("position",new Z(s,3)),u.setAttribute("uv",new Z(o,2)),u.setAttribute("uv1",new Z(o,2)),u.setAttribute("aAnatomyData",new Z(a,4)),u.setAttribute("skinIndex",new ge(r,4)),u.setAttribute("skinWeight",new Yt(l,4)),u.setIndex(new Z(c,1)),u.computeVertexNormals(),u}function qs(i,t,e,n,s,o){return hu(i,t,e,n,3,s,o,o)}function hu(i,t,e,n,s,o,a,r){const c=new T().subVectors(t,i).clone().normalize();let h=new T(0,1,0);Math.abs(c.dot(h))>.92&&(h=new T(0,0,1));const u=h.clone().addScaledVector(c,-h.dot(c)).normalize(),p=new T().crossVectors(u,c).normalize(),f=(s+1)*(o+1),g=new Float32Array(f*3),v=new Float32Array(f*2),m=new Float32Array(f*4),d=new Uint16Array(f*4),M=new Float32Array(f*4);for(let w=0;w<=s;w++){const A=w/s,E=new T().lerpVectors(i,t,A),y=q.lerp(e,n,A),x=w===0||w===s?.35:1;for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=E.clone().addScaledVector(p,y*x*Math.sin(R)).addScaledVector(u,y*x*Math.cos(R)),D=w*(o+1)+P;g[D*3]=L.x,g[D*3+1]=L.y,g[D*3+2]=L.z,v[D*2]=A,v[D*2+1]=C;const k=ze([a,r,0,0],[1-A,A,0,0]);d.set(k.indices,D*4),M.set(k.weights,D*4)}}const b=new Uint16Array(s*o*6);let _=0;for(let w=0;w<s;w++)for(let A=0;A<o;A++){const E=w*(o+1)+A,y=(w+1)*(o+1)+A,x=(w+1)*(o+1)+(A+1),P=w*(o+1)+(A+1);b[_++]=E,b[_++]=y,b[_++]=x,b[_++]=E,b[_++]=x,b[_++]=P}const S=new Xt;return S.setAttribute("position",new Z(g,3)),S.setAttribute("uv",new Z(v,2)),S.setAttribute("uv1",new Z(v,2)),S.setAttribute("aAnatomyData",new Z(m,4)),S.setAttribute("skinIndex",new ge(d,4)),S.setAttribute("skinWeight",new Yt(M,4)),S.setIndex(new Z(b,1)),S.computeVertexNormals(),S}function Jc(i,t,e,n,s,o,a){const r=new T().subVectors(t,i).normalize(),l=new T(0,1,0).addScaledVector(r,-r.y).normalize(),c=new T().crossVectors(l,r).normalize(),h=(s+1)*(o+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4);for(let b=0;b<=s;b++){const _=b/s,S=new T().lerpVectors(i,t,_),w=q.lerp(e,n,_),A=Math.max(0,1-_*2),E=Math.max(0,(_-.5)*2),y=1-A-E,x=ze([a[0],a[1],a[2],0],[A,y,E,0]);for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,L=S.clone().addScaledVector(c,w*Math.sin(R)).addScaledVector(l,w*Math.cos(R)),D=b*(o+1)+P;u[D*3]=L.x,u[D*3+1]=L.y,u[D*3+2]=L.z,p[D*2]=_,p[D*2+1]=C,g.set(x.indices,D*4),v.set(x.weights,D*4)}}const m=new Uint16Array(s*o*6);let d=0;for(let b=0;b<s;b++)for(let _=0;_<o;_++){const S=b*(o+1)+_,w=(b+1)*(o+1)+_,A=(b+1)*(o+1)+(_+1),E=b*(o+1)+(_+1);m[d++]=S,m[d++]=w,m[d++]=A,m[d++]=S,m[d++]=A,m[d++]=E}const M=new Xt;return M.setAttribute("position",new Z(u,3)),M.setAttribute("uv",new Z(p,2)),M.setAttribute("uv1",new Z(p,2)),M.setAttribute("aAnatomyData",new Z(f,4)),M.setAttribute("skinIndex",new ge(g,4)),M.setAttribute("skinWeight",new Yt(v,4)),M.setIndex(new Z(m,1)),M.computeVertexNormals(),M}function l_(){const i=I1(),t=k1(),e=new Xn;e.name="Toothless_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s={},o={};for(const r of[0,1,2]){const l=new Xn;l.name=`Toothless_LOD${r}`;const c=O1(i,r),h=X1(i,r),u=Q1(i,r),p=r_(i,r),f=We([c,h.jawSkinGeometry,u.wingSparsSkinGeometry]),g=We([h.clawsGeometry,u.alulaClawsGeometry]),v=(D,k,B,N=!0,H=!0)=>{const V=new Yh(k,B);return V.name=`${D}_LOD${r}`,V.castShadow=N,V.receiveShadow=H,V.frustumCulled=!1,V.bind(i.skeleton,new ee),V},m=v("BodyAndHeadSkin",f,t.skinMaterial),d=v("FlightPatagiumMembranes",u.wingMembraneGeometry,t.wingMembraneMaterial),M=v("VSplittingDorsalSpines",u.dorsalSpinesGeometry,t.skinMaterial);n.push(M);const b=v("OralGums",h.oralGumsGeometry,t.oralGumMaterial,!1,!0),_=v("RetractableTeeth",h.teethGeometry,t.teethMaterial,!0,!0),S=v("ArticulatedTongue",h.tongueGeometry,t.tongueMaterial,!1,!0),w=v("LightReactiveIrises",h.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),A=v("RefractiveCorneas",h.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1);A.renderOrder=2;const E=v("ObsidianClaws",g,t.clawMaterial,!0,!0),y=v("ProstheticBronzeLinkage",p.bronzeHardwareGeometry,t.prostheticBronzeMaterial),x=v("ProstheticIronStruts",p.ironStrutsGeometry,t.prostheticIronMaterial),P=v("ProstheticScalePasteFin",p.scalePasteMembraneGeometry,t.prostheticPasteMaterial),C=[m,d,M,b,_,S,w,A,E,y,x,P];let R=0,L=0;for(const D of C){l.add(D);const k=D.geometry.getIndex();R+=k?k.count/3:D.geometry.getAttribute("position").count/3,L+=D.geometry.getAttribute("position").count}l.visible=r===0,e.add(l),s[r]=l,o[r]={lod:r,triangles:Math.round(R),vertices:L,subMeshCount:C.length}}const a={rootGroup:e,rig:i,materials:t,lodGroups:s,dorsalSpineMeshes:n,lodStats:o,activeLOD:0,autoLOD:!1,setActiveLOD(r){a.activeLOD=r;for(const l of[0,1,2])s[l].visible=l===r},updateAutoLOD(r){if(!a.autoLOD)return a.activeLOD;const l=r<9.5?0:r<20?1:2;return l!==a.activeLOD&&a.setActiveLOD(l),a.activeLOD}};return a}function ya(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},r=i[0].morphTargetsRelative,l=new Xt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let p=0;p<i.length;++p){const f=i[p].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[p].attributes.position.count}l.setIndex(u)}for(const h in o){const u=th(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][p]);const g=th(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function th(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const a=new t(o),r=new Z(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<e;g++){const v=h.getComponent(p,g);r.setComponent(p+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(r.gpuType=s),r}const vs={"golden-hour":{id:"golden-hour",label:"Golden Hour",subtitle:"Warm Berk Sunset",sunElevationDeg:11.5,sunAzimuthDeg:-140,zenithColor:1517638,horizonSunColor:14255183,horizonAntiSunColor:4938872,mieHaloColor:16754776,mieStrength:.62,mieExponent:6.5,sunLightColor:16760698,sunLightIntensity:3.75,rimLightColor:7645928,rimLightIntensity:1.55,hemiSkyColor:9811164,hemiGroundColor:3550505,hemiIntensity:1.12,cloudDarkColor:2763581,cloudLitColor:15899230,cloudCoverage:.46,mistDensity:.0021,exposure:1.14,nightFactor:0,auroraIntensity:0,waterDeepColor:332061,waterShallowColor:735294,glitterIntensity:4.8},"clear-day":{id:"clear-day",label:"Clear Day",subtitle:"Crisp Nordic Sun",sunElevationDeg:44,sunAzimuthDeg:-124,zenithColor:1854342,horizonSunColor:10208486,horizonAntiSunColor:8564696,mieHaloColor:16774110,mieStrength:.26,mieExponent:8,sunLightColor:16774630,sunLightIntensity:3.55,rimLightColor:10143989,rimLightIntensity:1.65,hemiSkyColor:11852026,hemiGroundColor:3490360,hemiIntensity:1.38,cloudDarkColor:6980254,cloudLitColor:16777215,cloudCoverage:.26,mistDensity:.0013,exposure:1.1,nightFactor:0,auroraIntensity:0,waterDeepColor:268848,waterShallowColor:808032,glitterIntensity:3.6},"dawn-dusk":{id:"dawn-dusk",label:"Dawn / Dusk",subtitle:"Alpenglow Twilight",sunElevationDeg:4.8,sunAzimuthDeg:-148,zenithColor:1448248,horizonSunColor:14184040,horizonAntiSunColor:4081256,mieHaloColor:16749688,mieStrength:.58,mieExponent:5.8,sunLightColor:16752260,sunLightIntensity:2.85,rimLightColor:8295650,rimLightIntensity:1.65,hemiSkyColor:9212620,hemiGroundColor:2761776,hemiIntensity:1.15,cloudDarkColor:2302008,cloudLitColor:15367800,cloudCoverage:.42,mistDensity:.0024,exposure:1.18,nightFactor:.22,auroraIntensity:0,waterDeepColor:396828,waterShallowColor:1190972,glitterIntensity:4.2},"misty-overcast":{id:"misty-overcast",label:"Misty Cloud",subtitle:"Nordic Sea Fog",sunElevationDeg:31,sunAzimuthDeg:-130,zenithColor:4411744,horizonSunColor:9280166,horizonAntiSunColor:7767444,mieHaloColor:13161694,mieStrength:.18,mieExponent:3.5,sunLightColor:14477039,sunLightIntensity:2.05,rimLightColor:10796760,rimLightIntensity:1.85,hemiSkyColor:11978452,hemiGroundColor:3028792,hemiIntensity:1.55,cloudDarkColor:4543072,cloudLitColor:10135733,cloudCoverage:.86,mistDensity:.0042,exposure:1.16,nightFactor:0,auroraIntensity:0,waterDeepColor:529950,waterShallowColor:1456188,glitterIntensity:1.25},"starlit-night":{id:"starlit-night",label:"Starlit Night",subtitle:"Moon & Boreal Glow",sunElevationDeg:29,sunAzimuthDeg:-136,zenithColor:330520,horizonSunColor:1452614,horizonAntiSunColor:858670,mieHaloColor:7250652,mieStrength:.3,mieExponent:9,sunLightColor:11062527,sunLightIntensity:2.35,rimLightColor:6071538,rimLightIntensity:1.95,hemiSkyColor:4220052,hemiGroundColor:1317926,hemiIntensity:1.08,cloudDarkColor:594207,cloudLitColor:2901608,cloudCoverage:.24,mistDensity:.0018,exposure:1.26,nightFactor:1,auroraIntensity:.65,waterDeepColor:132880,waterShallowColor:466476,glitterIntensity:3.4},"stormy-squall":{id:"stormy-squall",label:"Storm Squall",subtitle:"Dark North Gale",sunElevationDeg:18,sunAzimuthDeg:-138,zenithColor:1317926,horizonSunColor:4938088,horizonAntiSunColor:2634818,mieHaloColor:9348280,mieStrength:.28,mieExponent:4.5,sunLightColor:11979484,sunLightIntensity:2.45,rimLightColor:7313604,rimLightIntensity:1.8,hemiSkyColor:6979736,hemiGroundColor:1844264,hemiIntensity:1.25,cloudDarkColor:1383719,cloudLitColor:6189186,cloudCoverage:.92,mistDensity:.0036,exposure:1.18,nightFactor:0,auroraIntensity:0,waterDeepColor:265492,waterShallowColor:797746,glitterIntensity:2.1}},si=`
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
`,c_=`
  varying vec3 vWorldDir;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldDir = normalize(position);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,h_=`
  ${si}
  varying vec3 vWorldDir;

  void main() {
    vec3 col = evalPhysicalSky(vWorldDir, uTime, true);
    gl_FragColor = vec4(col, 1.0);
  }
`;function u_(i,t,e="golden-hour"){const n=new T,s=new It,o=vs[e],a={uSunDir:{value:new T(-.52,.24,-.82).normalize()},uSunColor:{value:new It(o.sunLightColor)},uZenithColor:{value:new It(o.zenithColor)},uHorizonSunColor:{value:new It(o.horizonSunColor)},uHorizonAntiColor:{value:new It(o.horizonAntiSunColor)},uMieColor:{value:new It(o.mieHaloColor)},uMieStrength:{value:o.mieStrength},uMieExponent:{value:o.mieExponent},uCloudDarkColor:{value:new It(o.cloudDarkColor)},uCloudLitColor:{value:new It(o.cloudLitColor)},uCloudCoverage:{value:o.cloudCoverage},uMistDensity:{value:o.mistDensity},uNightFactor:{value:o.nightFactor},uAuroraIntensity:{value:o.auroraIntensity},uWaterDeepColor:{value:new It(o.waterDeepColor)},uWaterShallowColor:{value:new It(o.waterShallowColor)},uGlitterIntensity:{value:o.glitterIntensity},uIsEnvBake:{value:0},uTime:{value:0}},r=new ca(3900,64,44),l=new Ze({name:"NordicPhysicalSky",vertexShader:c_,fragmentShader:h_,uniforms:a,side:xn,depthWrite:!1,depthTest:!1}),c=new He(r,l);c.renderOrder=-100,c.frustumCulled=!1,t.add(c);const h=new gc(o.sunLightColor,o.sunLightIntensity);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=1,h.shadow.camera.far=54;const u=13.8;h.shadow.camera.left=-u,h.shadow.camera.right=u,h.shadow.camera.top=u,h.shadow.camera.bottom=-u,h.shadow.bias=-4e-4,h.shadow.normalBias=.018,t.add(h),t.add(h.target);const p=new gc(o.rimLightColor,o.rimLightIntensity);p.position.set(5.8,4.4,5.4),t.add(p);const f=new lp(o.hemiSkyColor,o.hemiGroundColor,o.hemiIntensity);t.add(f);const g=new gl(o.horizonAntiSunColor,o.mistDensity);t.fog=g;const v=new ra,m=new He(new ca(50,32,20),l);v.add(m);const d=new tl(i);d.compileEquirectangularShader();let M=null,b=o.sunAzimuthDeg;function _(A){const E=d.fromScene(v,.015);M&&M.dispose(),M=E,A.environment=M.texture}function S(A,E){const y=q.degToRad(q.clamp(A,1.5,82)),x=q.degToRad(E);n.set(Math.cos(y)*Math.sin(x),Math.sin(y),Math.cos(y)*Math.cos(x)).normalize(),a.uSunDir.value.copy(n),h.position.copy(h.target.position).addScaledVector(n,20)}const w={skyMesh:c,sunLight:h,rimLight:p,hemiLight:f,sunDirection:n,sunColor:s,activePreset:e,sharedUniforms:a,applyPreset(A,E,y){const x=vs[A];w.activePreset=A,b=x.sunAzimuthDeg,a.uZenithColor.value.setHex(x.zenithColor),a.uHorizonSunColor.value.setHex(x.horizonSunColor),a.uHorizonAntiColor.value.setHex(x.horizonAntiSunColor),a.uMieColor.value.setHex(x.mieHaloColor),a.uMieStrength.value=x.mieStrength,a.uMieExponent.value=x.mieExponent,a.uCloudDarkColor.value.setHex(x.cloudDarkColor),a.uCloudLitColor.value.setHex(x.cloudLitColor),a.uCloudCoverage.value=x.cloudCoverage,a.uMistDensity.value=x.mistDensity,a.uNightFactor.value=x.nightFactor,a.uAuroraIntensity.value=x.auroraIntensity,a.uWaterDeepColor.value.setHex(x.waterDeepColor),a.uWaterShallowColor.value.setHex(x.waterShallowColor),a.uGlitterIntensity.value=x.glitterIntensity,s.setHex(x.sunLightColor),a.uSunColor.value.copy(s),h.color.copy(s),h.intensity=x.sunLightIntensity,p.color.setHex(x.rimLightColor),p.intensity=x.rimLightIntensity,f.color.setHex(x.hemiSkyColor),f.groundColor.setHex(x.hemiGroundColor),f.intensity=x.hemiIntensity,g.color.setHex(x.horizonAntiSunColor).lerp(new It(x.horizonSunColor),.35),g.density=x.mistDensity,E.toneMappingExposure=x.exposure,S(x.sunElevationDeg,x.sunAzimuthDeg),_(y)},setMistDensity(A,E){const y=q.clamp(A,5e-4,.0075);a.uMistDensity.value=y,g.density=y},setSunElevation(A,E,y){S(A,b),_(y)},update(A,E,y){a.uTime.value=A,y&&c.position.copy(y),E&&(h.target.position.copy(E),h.position.copy(E).addScaledVector(n,20),h.target.updateMatrixWorld())}};return w.applyPreset(e,i,t),w}const Ks={waveAmplitude:1,waveSpeed:1,seaChoppiness:.48},d_=`
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
`,p_=`
  ${si}

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
`;function f_(i=5600,t=300,e=256){const n=(t+1)*(e+1),s=new Float32Array(n*3),o=new Float32Array(n*2);for(let c=0;c<=t;c++){const h=c/t,u=i*Math.pow(h,2.3);for(let p=0;p<=e;p++){const g=p/e*Math.PI*2,v=Math.cos(g)*u,m=Math.sin(g)*u,d=c*(e+1)+p;s[d*3]=v,s[d*3+1]=0,s[d*3+2]=m,o[d*2]=v*.02,o[d*2+1]=m*.02}}const a=new Uint32Array(t*e*6);let r=0;for(let c=0;c<t;c++)for(let h=0;h<e;h++){const u=c*(e+1)+h,p=(c+1)*(e+1)+h,f=(c+1)*(e+1)+(h+1),g=c*(e+1)+(h+1);a[r++]=u,a[r++]=f,a[r++]=p,a[r++]=u,a[r++]=g,a[r++]=f}const l=new Xt;return l.setAttribute("position",new Z(s,3)),l.setAttribute("uv",new Z(o,2)),l.setIndex(new Z(a,1)),l.computeBoundingSphere(),l}function m_(i,t,e){const n={...Ks,...e},s=[];for(let c=0;c<24;c++){const h=i[c];h?s.push(new Be(h.x,h.z,h.radius,h.boost??0)):s.push(new Be(9999,9999,0,0))}const o={...t,uWaveAmp:{value:n.waveAmplitude},uWaveSpeed:{value:n.waveSpeed},uChoppiness:{value:n.seaChoppiness},uStackCenters:{value:s}},a=f_(5600,300,256),r=new Ze({name:"NorthSeaPhysicalOcean",vertexShader:d_,fragmentShader:p_,uniforms:o,transparent:!0,depthWrite:!0}),l=new He(a,r);return l.position.y=-11.5,l.renderOrder=2,l.frustumCulled=!1,l.name="NorthSeaOcean",{mesh:l,params:n,setOceanParams(c){Object.assign(n,c),o.uWaveAmp.value=n.waveAmplitude,o.uWaveSpeed.value=n.waveSpeed,o.uChoppiness.value=n.seaChoppiness},update(c){o.uTime.value=c}}}const en=-11.5,g_=-25.5,ci=-44;function __(i){return i-Math.floor(i)}function Qt(i,t){return __(Math.sin(i*127.1+t*311.7)*43758.5453123)}function Zn(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,a=s*s*s*(s*(s*6-15)+10),r=o*o*o*(o*(o*6-15)+10),l=Qt(e,n),c=Qt(e+1,n),h=Qt(e,n+1),u=Qt(e+1,n+1);return l+(c-l)*a+(h-l)*r+(l-c-h+u)*a*r}function ce(i,t,e=4){let n=0,s=.5,o=1;for(let a=0;a<e;a++)n+=s*Zn(i*o,t*o),o*=2.03,s*=.5;return n}function de(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function lo(i,t,e=3){let n=0,s=1,o=.52,a=1,r=0;for(let l=0;l<e;l++){const c=Zn(i*a,t*a)*2-1,h=1-(Math.sqrt(c*c+.085)-.2915)/.75,u=Math.max(0,Math.min(1,h));n+=o*u*s,r+=o,s=.54+.46*u,a*=2.04,o*=.48}return n/Math.max(1e-4,r)}function Ie(i,t,e=3){const n=i+(Zn(i*.75+11.3,t*.75-7.9)-.5)*1.15,s=t+(Zn(i*.75-5.4,t*.75+14.2)-.5)*1.15;let o=0,a=1,r=.54,l=1,c=0;for(let h=0;h<e;h++){const u=Zn(n*l,s*l)*2-1,p=1-(Math.sqrt(u*u+.022)-.148)/.87,f=Math.max(0,Math.min(1,p));o+=r*f*a,c+=r,a=.48+.52*f,l*=2.18,r*=.49}return o/Math.max(1e-4,c)}function Cl(i,t,e,n){const s=Math.max(0,Math.min(1,i)),a=.62+.54*ce(t*.085+n*1.7,e*.085-n*1.3,3);let r=Math.pow(s,a);const l=de(.36,.74,ce(t*.06+n,e*.06+4.1,2)),c=de(.4,.78,ce(t*.075-n,e*.075-6.3,2)),h=.3+(Zn(t*.05+n,e*.05)-.5)*.14,u=.66+(Zn(t*.05-n,e*.05+3.7)-.5)*.14,p=Math.sin(Math.max(-1,Math.min(1,(s-h)/.16))*Math.PI)*Math.exp(-Math.pow((s-h)/.13,2))*.095*l,f=Math.sin(Math.max(-1,Math.min(1,(s-u)/.17))*Math.PI)*Math.exp(-Math.pow((s-u)/.14,2))*.085*c,g=(Ie(t*.16+n,e*.16-n,2)-.48)*.11*Math.sin(s*Math.PI);return r=Math.max(0,Math.min(1,r-p-f+g)),r}function Pl(i,t,e,n){const s=i+e*.14*Math.sin(n*1.9)+(Zn(i*.06+n,e*.07)-.5)*3.4,o=t+e*.14*Math.cos(n*1.3)+(Zn(t*.06-n,e*.07)-.5)*3.4,a=(Ie(s*.068+n,o*.068-n,3)-.47)*3.85,r=(Ie(s*.19-n*1.3,o*.19+e*.09,2)-.48)*1.35,l=(ce(i*.44+e*.22,t*.44-e*.18,2)-.5)*.58,c=i*.032-t*.026+(ce(i*.048+n,t*.048-n,3)-.5)*3.6,h=de(.24,.72,ce(i*.09-n*.8,t*.09+e*.04,2)),u=(e+c)/3.4,p=u-Math.floor(u),f=(de(.08,.36,p)-p)*1.18*(.25+.75*h),g=.55+.9*ce(i*.08+n,t*.08,2),v=Math.exp(-Math.pow((e-(en-.55))/2.3,2))*1.45*g-Math.exp(-Math.pow((e-(en+1.45))/1.35,2))*.55*g,m=(Zn(s*.12-n,o*.12+e*.11)-.5)*1.35;return{radialOffset:a+r+l+f+v,lateralTwist:m,verticalLedgeOffset:f*.62+l*.42}}const On={position:new T(4.45,0,.22),yaw:-.14},Hn={position:new T(-4.45,0,-.22),yaw:.16};function As(i,t){const e=Math.sqrt(Math.pow(i/7.45,2)+Math.pow((t+.85)/4.65,2)),n=de(.76,1.3,e),s=i+n*((ce(i*.055+3.1,t*.055-2.4,3)-.5)*6.4+(Ie(i*.13-1.7,t*.13+4.3,2)-.48)*3.4+(ce(i*.28+5.1,t*.28-1.9,2)-.5)*1.35),o=t+n*((ce(i*.055-5.2,t*.055+1.9,3)-.5)*5.6+(Ie(i*.13+2.9,t*.13-3.1,2)-.48)*3.1+(ce(i*.28-2.7,t*.28+3.8,2)-.5)*1.25),a=Math.atan2(o+4.2,s),r=t>1.2?.64:t<-8?1.5:1+(-t+1.2)*.046,l=1+.19*Math.sin(a*2-.45)+.14*Math.sin(a*3+.65)+.09*Math.cos(a*5-1.15)+.06*Math.sin(a*7+2.1),c=s/(15.8*l),h=(o+4.2)/(11.2*r*l);let u=Math.sqrt(c*c+h*h),p=0;if(t<-3.5){const C=(s+17.5)/15.2,R=(o+25)/18.5,L=Math.sqrt(C*C+R*R),D=L*(.9+.18*ce(i*.07+2.2,t*.07-1.4,3)),k=Math.max(0,1-Math.abs(u-D)/.55);u=Math.min(u,D)-.12*k*k,p=Math.pow(Math.max(0,1-Math.pow(L/.88,1.72)),1.2)*(6.2+3.8*lo(i*.058+5.1,t*.058-3.2,3)+2.1*Ie(i*.14-2.4,t*.14+1.7,2))}if(i>9.5&&t<-7){const C=(i-18.5)/6.5,R=(t+19.5)/7.5,L=Math.exp(-(C*C+R*R))*.36;u+=L}const f=de(.76,1.26,e),g=1-.62*de(-.5,4.5,t)*(1-de(4.5,11.5,Math.abs(i))),v=((ce(i*.11+4.2,t*.11-1.7,3)-.45)*2.25+(Ie(i*.16-2.3,t*.16+6.1,3)-.44)*1.75+(ce(i*.42+1.3,t*.42-2.8,2)-.48)*.62)*f*g,m=de(-6.6,-26,t)*de(38.5,7.2,Math.abs(i+3)),d=lo(i*.054+1.8,t*.054-2.7,3),M=Ie(i*.125-3.9,t*.125+2.4,3),b=ce(i*.09-3.4,t*.09+1.9,3),_=m*(4.8+6.8*d+3.6*M+2.8*b),S=v+Math.max(_,p*f),w=.74+.13*ce(Math.cos(a)*2.1+2.1,Math.sin(a)*2.1-1.3,3)+.06*(Ie(i*.12,t*.12,2)-.5);if(u<=w)return S;const A=de(w,1.62,u),E=de(1.45,2.25,u),y=Cl(A,i,t,7.3),x=en-2.2,P=q.lerp(S,x,y);return q.lerp(P,ci,E)}function Ri(i){const t=Math.cos(i.rotRad),e=Math.sin(i.rotRad),n=i.summitOffset?.dx??i.rx*.12*Math.sin(i.seed),s=i.summitOffset?.dz??i.rz*-.1*Math.cos(i.seed*1.3);return(o,a)=>{const r=o-i.cx,l=a-i.cz,c=r*t-l*e,h=r*e+l*t,u=c+(ce(c*.036+i.seed,h*.036-i.seed,3)-.5)*(i.rx*.48)+(Ie(c*.095-i.seed,h*.095+i.seed,2)-.48)*(i.rx*.22)+(ce(c*.21+i.seed*1.4,h*.21-i.seed,2)-.5)*2.4,p=h+(ce(c*.036-i.seed,h*.036+i.seed,3)-.5)*(i.rz*.48)+(Ie(c*.095+i.seed,h*.095-i.seed,2)-.48)*(i.rz*.22)+(ce(c*.21-i.seed,h*.21+i.seed*1.4,2)-.5)*2.4,f=Math.atan2(p,u),g=1+.21*Math.sin(f*2+i.seed)+.14*Math.cos(f*3-i.seed*1.5)+.09*Math.sin(f*5+.9)+.05*Math.cos(f*7-i.seed*.6);let m=Math.sqrt(Math.pow(u/(i.rx*g),2)+Math.pow(p/(i.rz*g),2));const d=Math.sqrt(Math.pow((u-n)/(i.rx*g*.94),2)+Math.pow((p-s)/(i.rz*g*.94),2)),M=i.peakY*.34,b=Math.pow(Math.max(0,1-Math.pow(d/.9,1.64)),1.18)*(i.peakY*.58);let _=M+b;if(i.secondaryLobe){const X=i.secondaryLobe,K=u-X.dx,G=p-X.dz,W=Math.atan2(G,K),O=1+.19*Math.cos(W*2-i.seed)+.12*Math.sin(W*3+i.seed)+.07*Math.cos(W*5+i.seed*1.2),nt=Math.sqrt(Math.pow(K/(X.rx*O),2)+Math.pow(G/(X.rz*O),2)),at=X.lowSaddle?.42:.35,$=Math.max(0,Math.min(1,.5+.5*(nt-m)/at));m=nt*(1-$)+m*$-at*$*(1-$);const j=i.peakY*X.peakScale,Y=j*.33+Math.pow(Math.max(0,1-Math.pow(nt/.88,1.66)),1.18)*(j*.62),it=X.lowSaddle?Math.sin($*Math.PI)*.44:Math.sin($*Math.PI)*.2;_=q.lerp(Y,_,$)*(1-it)}const S=1-de(.58,1.04,m),w=lo(c*.036+i.seed*1.3,h*.044-i.seed*.9,3),A=Ie(c*.088-i.seed*1.1,h*.088+i.seed*.8,3),E=ce(c*.055-i.seed*.7,h*.055+i.seed*1.4,3),y=Ie(c*.19+i.seed,h*.19-i.seed,2),x=ce(c*.36-i.seed,h*.36+i.seed,2),P=(_+E*3)/4.2,C=P-Math.floor(P),R=(de(.15,.55,C)-C)*.85*de(.35,.75,A);let L=_+(w-.36)*(i.peakY*.36)*(.3+.7*S)+(A-.44)*(2.6+i.peakY*.14)*(.38+.62*S)+(E-.47)*(2.8+i.peakY*.11)+(y-.46)*1.55+(x-.48)*.68+R;if(i.carveRiverToEast&&c>-i.rx*.52){const X=Math.sin(c*.13+.5)*2.1,K=Math.abs(h-X),G=1-de(1.5,6.8,K);if(G>.001){const W=10.6-de(-i.rx*.45,i.rx*.78,c)*3;L=q.lerp(L,Math.min(L,W),G)}}const D=.64+.15*ce(Math.cos(f)*1.9+i.seed,Math.sin(f)*1.9-i.seed,3)+.07*(Ie(o*.09+i.seed,a*.09,2)-.5);if(m<=D)return L;const k=de(D,1.09,m),B=de(1.02,1.38,m),N=en-1.8,H=Cl(k,o,a,i.seed),V=q.lerp(L,N,H);return q.lerp(V,ci,B)}}function Rl(i){return(t,e)=>{const n=t-i.cx,s=e-i.cz,o=n+(ce(n*.034+i.seed,s*.034-i.seed,3)-.5)*(i.ringRadius*.34)+(Ie(n*.088-i.seed,s*.088+i.seed,2)-.48)*(i.ringHalfWidth*.44)+(ce(n*.2+i.seed,s*.2-i.seed,2)-.5)*2.2,a=s+(ce(n*.034-i.seed,s*.034+i.seed,3)-.5)*(i.ringRadius*.34)+(Ie(n*.088+i.seed,s*.088-i.seed,2)-.48)*(i.ringHalfWidth*.44)+(ce(n*.2-i.seed,s*.2+i.seed,2)-.5)*2.2,r=Math.hypot(o,a),l=Math.atan2(a,o),c=i.openAngleRad+Math.PI;let h=l-c;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const u=Math.abs(h),p=1-de(i.arcHalfSpanRad*.72,i.arcHalfSpanRad*1.08,u),f=i.ringHalfWidth*(.68+.44*p+.18*Math.sin(h*2.7+i.seed)+.11*Math.cos(h*5.3-i.seed*1.4)),g=r-i.ringRadius,v=g>=0?f*.88:f*1.14,d=Math.abs(g)/Math.max(3.5,v)+(1-p)*1.35,M=.7+.26*Math.cos(h*2.6+i.seed*.7)+.16*Math.sin(h*4.3-i.seed)+.09*Math.cos(h*7.1+i.seed*.4),b=lo(n*.042+i.seed,s*.042-i.seed,3),_=Ie(n*.105-i.seed,s*.105+i.seed,3),S=Ie(n*.24+i.seed,s*.24-i.seed,2),w=Math.pow(Math.max(0,1-Math.pow(Math.min(1,d/.88),1.58)),1.15),A=i.peakY*(.32+.68*w)*(.56+.44*p)*M+(b-.4)*(i.peakY*.26)*p+(_-.45)*(2.4+i.peakY*.13)*(.35+.65*p)+(S-.47)*1.35+(ce(n*.35+i.seed,s*.35-i.seed,2)-.48)*.62,E=(1-de(i.ringRadius*.55,i.ringRadius*1.15,r))*.65,y=q.lerp(ci,-16.2,E),x=.52+.14*ce(n*.065+i.seed,s*.065,3)+.07*(Ie(t*.11,e*.11+i.seed,2)-.5);if(d<=x)return A;const P=de(x,1.06,d),C=de(.98,1.36,d),R=en-1.8,L=Cl(P,t,e,i.seed),D=q.lerp(A,R,L);return q.lerp(D,y,C)}}const Qs=Ri({cx:-66,cz:-32,rx:21.5,rz:25,peakY:18.4,summitOffset:{dx:-3.5,dz:-7.5},seed:5.7,rotRad:.18,secondaryLobe:{dx:-24.5,dz:-11.5,rx:17.5,rz:19.5,peakScale:1.24},carveRiverToEast:!0}),uu=Rl({cx:88,cz:36,ringRadius:28,ringHalfWidth:12.6,peakY:16.8,openAngleRad:-2.45,arcHalfSpanRad:1.92,seed:22.9}),du=Ri({cx:88,cz:-56,rx:25,rz:31.5,peakY:22.4,summitOffset:{dx:4.2,dz:-6},seed:14.3,rotRad:-.34,secondaryLobe:{dx:-18,dz:33.5,rx:15,rz:17,peakScale:.74,lowSaddle:!0}}),pu=Ri({cx:-124,cz:-86,rx:33,rz:24.5,peakY:25.5,summitOffset:{dx:-7.5,dz:3},seed:37.8,rotRad:.42,secondaryLobe:{dx:21,dz:-10.5,rx:16.5,rz:15,peakScale:.72}}),fu=Ri({cx:-42,cz:-96,rx:17.5,rz:19.5,peakY:20.2,seed:31.6,rotRad:-.28,secondaryLobe:{dx:-19.5,dz:14,rx:12.5,rz:14,peakScale:.74}}),v_=Ri({cx:36,cz:-108,rx:19.5,rz:22,peakY:22.8,seed:44.1,rotRad:.52,secondaryLobe:{dx:18.5,dz:-14.5,rx:13.5,rz:15,peakScale:.78}}),x_=Rl({cx:-144,cz:78,ringRadius:38,ringHalfWidth:15.5,peakY:23.8,openAngleRad:.62,arcHalfSpanRad:1.84,seed:58.4}),M_=Ri({cx:168,cz:122,rx:38,rz:32,peakY:29.5,seed:71.2,rotRad:-.48,secondaryLobe:{dx:-36,dz:-18,rx:24,rz:22,peakScale:.76}}),w_=Ri({cx:-206,cz:-96,rx:42,rz:46,peakY:36.5,seed:83.9,rotRad:-.19,secondaryLobe:{dx:28,dz:34,rx:23,rz:25,peakScale:.7}}),y_=Rl({cx:-8,cz:-222,ringRadius:52,ringHalfWidth:19.5,peakY:33.5,openAngleRad:1.52,arcHalfSpanRad:1.8,seed:96.3}),b_=Ri({cx:-18,cz:236,rx:34,rz:26,peakY:25.5,seed:109.7,rotRad:.15,secondaryLobe:{dx:38,dz:-12,rx:22,rz:18,peakScale:.78}}),il=[{name:"WestWaterfallDoubleIsland",centerX:-74,centerZ:-36,spanX:112,spanZ:102,gridSegs:184,hasFlora:!0,evalHeight:Qs},{name:"StarboardCrescentLagoonAtoll",centerX:88,centerZ:36,spanX:124,spanZ:124,gridSegs:180,hasFlora:!0,evalHeight:uu},{name:"EastSerpentineTomboloIsland",centerX:84,centerZ:-46,spanX:118,spanZ:134,gridSegs:172,hasFlora:!0,evalHeight:du},{name:"WestTraelanipaTableIsland",centerX:-124,centerZ:-86,spanX:116,spanZ:102,gridSegs:156,hasFlora:!0,evalHeight:pu},{name:"NorthWestHolmPair",centerX:-48,centerZ:-92,spanX:92,spanZ:86,gridSegs:140,hasFlora:!0,evalHeight:fu},{name:"NorthEastHeadlandTable",centerX:42,centerZ:-112,spanX:94,spanZ:90,gridSegs:136,hasFlora:!1,evalHeight:v_},{name:"SouthWestBrokenCrescent",centerX:-144,centerZ:78,spanX:156,spanZ:152,gridSegs:148,hasFlora:!1,evalHeight:x_},{name:"SouthEastTableSound",centerX:156,centerZ:116,spanX:168,spanZ:152,gridSegs:136,hasFlora:!1,evalHeight:M_},{name:"FarWestCliffMassif",centerX:-198,centerZ:-88,spanX:174,spanZ:168,gridSegs:132,hasFlora:!1,evalHeight:w_},{name:"NorthernSoundCrescentIsland",centerX:-8,centerZ:-222,spanX:196,spanZ:166,gridSegs:136,hasFlora:!1,evalHeight:y_},{name:"SouthHorizonHolms",centerX:-4,centerZ:232,spanX:166,spanZ:122,gridSegs:124,hasFlora:!1,evalHeight:b_}],mu=[{x:43.5,z:14.5,rx:4.8,rz:4.2,topY:4.6,topSlopeX:-.08,rotY:.45,seed:14.2},{x:63,z:50.5,rx:7.5,rz:5.2,topY:-8.2,topSlopeX:.05,rotY:-.35,seed:23.8},{x:27.5,z:-10.5,rx:5.4,rz:4.4,topY:1.8,topSlopeX:.07,rotY:.22,seed:31.4},{x:-37.5,z:-22,rx:6.2,rz:4.8,topY:2.6,topSlopeX:-.09,rotY:-.52,seed:42.7},{x:-46.5,z:-15.5,rx:5.2,rz:4.2,topY:-6.8,topSlopeX:-.06,rotY:.61,seed:55.3},{x:-106,z:-49,rx:7.8,rz:6,topY:6.4,topSlopeX:-.1,rotY:.18,seed:68.9},{x:57.5,z:-22.5,rx:6.4,rz:5,topY:-5.4,topSlopeX:.08,rotY:-.44,seed:79.1},{x:-21.5,z:-79,rx:7.2,rz:5.8,topY:5.2,topSlopeX:-.07,rotY:.33,seed:92.6}],sl=[{x:59.5,z:23,rotY:-.58,halfLength:14.5,halfThickness:4.6,plateauTopY:6.8,openingHalfSpan:5.4,vaultCrownY:.4,seed:17.3},{x:-95.5,z:-22.5,rotY:.88,halfLength:13,halfThickness:4.4,plateauTopY:6.2,openingHalfSpan:4.8,vaultCrownY:-.2,seed:49.8}];function xs(i,t){let e=ci;Math.abs(i)<54&&t>-66&&t<40&&(e=Math.max(e,As(i,t)));for(const n of il)Math.abs(i-n.centerX)<=n.spanX*.52&&Math.abs(t-n.centerZ)<=n.spanZ*.52&&(e=Math.max(e,n.evalHeight(i,t)));for(const n of sl)Math.hypot(i-n.x,t-n.z)<n.halfLength+5&&(e=Math.max(e,n.plateauTopY+3.8));for(const n of mu){const s=Math.max(n.rx,n.rz),o=Math.hypot(i-n.x,t-n.z);if(o<s*1.45){const a=1-de(.65,1.45,o/s);e=Math.max(e,ci+(n.topY+2.8-ci)*a)}}return e}function eh(i,t,e){i.computeVertexNormals();const n=i.getAttribute("position"),s=i.getAttribute("normal");for(let o=0;o<n.count;o++){const a=n.getX(o),r=n.getY(o),l=n.getZ(o),c=s.getX(o),h=s.getY(o),u=s.getZ(o);if(r<-25)continue;let p=1;if(e){const y=Math.sqrt(Math.pow(a/8.8,2)+Math.pow((l+.95)/5.8,2));if(p=de(.88,1.38,y),p<=.001)continue}const f=de(.76,.22,h)*de(-24.5,-16,r)*p,g=de(-5.5,1.2,r)*p*(.34+.66*de(.96,.55,h));if(f<=.002&&g<=.002)continue;const v=Math.hypot(c,u),m=v>1e-4?c/v:Math.cos(t),d=v>1e-4?u/v:Math.sin(t),M=-d,b=m,_=Pl(a,l,r,t),S=(Ie(a*.14+t,l*.14-t,3)-.46)*1.25+(ce(a*.38-t,l*.38+t,2)-.48)*.45,w=(m*_.radialOffset+M*_.lateralTwist)*f+m*S*g*.48,A=_.verticalLedgeOffset*f+S*g*.62,E=(d*_.radialOffset+b*_.lateralTwist)*f+d*S*g*.48;n.setXYZ(o,a+w,r+A,l+E)}i.computeVertexNormals()}function S_(i){const l=new Float32Array(26505),c=new Float32Array(8835*2);for(let g=0;g<=120;g++){const v=g/120,m=(v-.5)*2*i.halfLength,d=Math.sin(v*Math.PI*1.45+i.seed)*2.65+Math.cos(v*Math.PI*2.7-i.seed*.6)*1.15+(Ie(v*3.8+i.seed,2.3,2)-.48)*2.1,M=de(0,.09,v)*de(1,.9,v),b=(1-de(0,.44,v))*2.85,_=Math.exp(-Math.pow((v-.77)/.16,2))*2.15,S=-Math.exp(-Math.pow((v-.47)/.19,2))*1.05,w=(Ie(m*.12+i.seed,d*.12-i.seed,3)-.45)*1.95+(ce(m*.28-i.seed,d*.28,2)-.48)*.85,A=i.plateauTopY+b+_+S+w,E=q.lerp(en-4.5,A,M),y=m+(ce(v*4.5+i.seed,6.1,2)-.5)*1.35,x=Math.abs(y)/i.openingHalfSpan,P=1-de(.74,1.18,x),C=Math.max(0,1-Math.pow(Math.min(1.2,x),1.95)),R=(Ie(m*.26+i.seed,4.3,3)-.48)*1.45+(ce(m*.55-i.seed,1.9,2)-.5)*.55,L=en-5.5+(i.vaultCrownY-(en-5.5))*C+R*P,D=q.lerp(ci,L,P),k=.82+.38*Ie(v*3.4-i.seed,5.7,2)+.22*Math.sin(v*8.5+i.seed),B=1+.42*(1-P),N=i.halfThickness*B*k*(.42+.58*M);for(let H=0;H<=72;H++){const X=H/72*Math.PI*2,K=Math.sin(X),G=Math.cos(X),W=.5+.5*G,O=1.24-.38*Math.pow(W,.85),nt=K>=0?1:-1,at=Math.pow(Math.abs(K),.72),$=nt*at*O,j=Math.pow(Math.abs(K),.65),Y=Math.max(0,G),it=Math.pow(Y,1.4)*(1.45+.95*Ie(m*.18+K*.8,i.seed,2))*M;let gt=q.lerp(D,E,W)+it;G<-.25&&P>.05&&(gt+=(1-K*K)*1.35*P*Math.abs(G));const Q=Pl(m+K*2.3,d+$*N,gt,i.seed+nt*3.7),F=j*de(-24,-14.5,gt),wt=$*N+nt*Q.radialOffset*.78*F,st=m+Q.lateralTwist*.45*F,mt=d+wt,_t=gt+Q.verticalLedgeOffset*.52*F,Pt=g*73+H;l[Pt*3]=st,l[Pt*3+1]=_t,l[Pt*3+2]=mt,c[Pt*2]=st*.18,c[Pt*2+1]=_t*.18}}const h=8833,u=8834;l[h*3]=-i.halfLength,l[h*3+1]=en-12,l[h*3+2]=0,c[h*2]=-i.halfLength*.18,c[h*2+1]=(en-12)*.18,l[u*3]=i.halfLength,l[u*3+1]=en-12,l[u*3+2]=0,c[u*2]=i.halfLength*.18,c[u*2+1]=(en-12)*.18;const p=[];for(let g=0;g<120;g++)for(let v=0;v<72;v++){const m=g*73+v,d=(g+1)*73+v,M=(g+1)*73+(v+1),b=g*73+(v+1);p.push(m,b,M,m,M,d)}for(let g=0;g<72;g++){p.push(h,g+1,g);const v=8760;p.push(u,v+g,v+g+1)}const f=new Xt;return f.setAttribute("position",new Z(l,3)),f.setAttribute("uv",new Z(c,2)),f.setIndex(p),f.computeVertexNormals(),f}function A_(i){const r=new Float32Array(5679),l=new Float32Array(1893*2),c=Math.cos(i.rotY),h=Math.sin(i.rotY),p=i.topY>en+4?3.1:1.55,f=i.rx*.19*Math.sin(i.seed*1.7),g=i.rz*-.17*Math.cos(i.seed*1.1);for(let w=0;w<=43;w++){const A=w>36,E=Math.min(1,w/36),y=A?(w-36)/7:0;for(let x=0;x<=42;x++){const P=x/42,C=P*Math.PI*2,R=C+(E-.5)*.28*Math.sin(i.seed),L=Math.cos(R),D=Math.sin(R),k=1+.16*Math.cos(R*3+i.seed)+.13*Math.sin(R*2-i.seed*.7)+.09*Math.cos(R*5+i.seed*1.3+E*2.4),B=.82+.34*Ie(L*1.55+i.seed+E*.85,D*1.55-i.seed+E*.65,3),N=Math.cos(C)*i.rx*k*B,H=Math.sin(C)*i.rz*k*B,V=i.topY+N*i.topSlopeX+(Ie(N*.19+i.seed,H*.19-i.seed,2)-.48)*1.65,X=A?Math.pow(Math.cos(y*Math.PI*.5),.88):1,K=A?Math.pow(Math.sin(y*Math.PI*.5),1.05)*(p+(Ie((N*X+i.seed)*.25,(H*X-i.seed)*.25,2)-.44)*1.45):0,G=q.lerp(ci,V,E)+K,W=1.24-.4*Math.pow(E,.84),O=1+.36*Math.exp(-Math.pow((G-(en-.6))/2.3,2))-.1*Math.exp(-Math.pow((G-(en+1.3))/1.3,2)),nt=Pl(i.x+N,i.z+H,G,i.seed),at=de(.16,.42,E)*(1-de(.88,1,E))*(A?.25:1),$=W*O*X,j=q.lerp(0,f,y*y)+N*$+Math.cos(C)*nt.radialOffset*.52*at,Y=q.lerp(0,g,y*y)+H*$+Math.sin(C)*nt.radialOffset*.52*at,it=i.x+j*c-Y*h,gt=i.z+j*h+Y*c,Q=w*43+x;r[Q*3]=it,r[Q*3+1]=G+nt.verticalLedgeOffset*.42*at,r[Q*3+2]=gt,l[Q*2]=P*4,l[Q*2+1]=E*5+y*.9}}const v=1892,m=i.x+f*c-g*h,d=i.z+f*h+g*c;r[v*3]=m,r[v*3+1]=i.topY+p+(Ie(i.seed,i.seed*.5,2)-.46)*.55,r[v*3+2]=d,l[v*2]=.5,l[v*2+1]=5.9;const M=[],b=43;for(let w=0;w<b;w++)for(let A=0;A<42;A++){const E=w*43+A,y=(w+1)*43+A,x=(w+1)*43+(A+1),P=w*43+(A+1);M.push(E,y,x,E,x,P)}const _=b*43;for(let w=0;w<42;w++)M.push(v,_+w+1,_+w);const S=new Xt;return S.setAttribute("position",new Z(r,3)),S.setAttribute("uv",new Z(l,2)),S.setIndex(M),S.computeVertexNormals(),S}function E_(){const t=new Float32Array(262144),e=new Float32Array(512*512);for(let f=0;f<512;f++){const g=f/512;for(let v=0;v<512;v++){const m=v/512,d=f*512+v,M=ce(m*8+2.3,g*26-1.7,4),b=ce(m*22-3.1,g*7+4.2,4),_=Math.abs(ce(m*6+1.1,g*20+3.4,3)-.5),S=Math.abs(ce(m*18-4.8,g*9+9.1,3)-.5),w=de(.055,0,_)*.45+de(.045,0,S)*.35;t[d]=Math.max(0,Math.min(1,M*.58+b*.42-w));const A=ce(m*9+19.3,g*9+8.2,4);e[d]=de(.58,.82,A)}}const n=document.createElement("canvas"),s=document.createElement("canvas"),o=document.createElement("canvas");for(const f of[n,s,o])f.width=512,f.height=512;const a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(512,512),h=r.createImageData(512,512),u=l.createImageData(512,512);for(let f=0;f<512;f++){const g=(f-1+512)%512,v=(f+1)%512;for(let m=0;m<512;m++){const d=(m-1+512)%512,M=(m+1)%512,b=f*512+m,_=b*4,S=(t[f*512+M]-t[f*512+d])*4.4,w=(t[v*512+m]-t[g*512+m])*4.4,A=1/Math.sqrt(S*S+w*w+1);h.data[_]=Math.round((-S*A*.5+.5)*255),h.data[_+1]=Math.round((-w*A*.5+.5)*255),h.data[_+2]=Math.round((A*.5+.5)*255),h.data[_+3]=255;const E=t[b],y=e[b],x=40+E*54,P=44+E*56,C=50+E*60,R=45+E*25,L=69+E*35,D=34+E*18;c.data[_]=Math.round(q.lerp(x,R,y*.65)),c.data[_+1]=Math.round(q.lerp(P,L,y*.65)),c.data[_+2]=Math.round(q.lerp(C,D,y*.65)),c.data[_+3]=255;const k=Math.round(q.lerp(.6+(1-E)*.3,.92,y)*255);u.data[_]=k,u.data[_+1]=k,u.data[_+2]=k,u.data[_+3]=255}}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0);const p=(f,g)=>(f.wrapS=jn,f.wrapT=jn,f.repeat.set(9,9),f.anisotropy=8,f.colorSpace=g?cn:Dn,f.needsUpdate=!0,f);return{albedo:p(new _n(n),!0),normal:p(new _n(s),!1),roughness:p(new _n(o),!1)}}function T_(i){const o=new Float32Array(37539);for(let u=0;u<=96;u++){const p=u/96,f=3200*Math.pow(p,2.05);for(let g=0;g<=128;g++){const m=g/128*Math.PI*2,d=Math.cos(m)*f,M=Math.sin(m)*f,b=(ce(d*.015+3.7,M*.015-5.2,3)-.5)*3.2*(1-p*.7),_=g_+b,S=u*129+g;o[S*3]=d,o[S*3+1]=_,o[S*3+2]=M}}const a=new Uint32Array(12288*6);let r=0;for(let u=0;u<96;u++)for(let p=0;p<128;p++){const f=u*129+p,g=(u+1)*129+p,v=(u+1)*129+(p+1),m=u*129+(p+1);a[r++]=f,a[r++]=v,a[r++]=g,a[r++]=f,a[r++]=m,a[r++]=v}const l=new Xt;l.setAttribute("position",new Z(o,3)),l.setIndex(new Z(a,1)),l.computeVertexNormals();const c=new Ze({name:"NordicSubmarineBathymetry",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${si}
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

        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float aerial = 1.0 - exp(-pow(max(uMistDensity * dist, 1e-6), 1.26));
        float rimFade = smoothstep(1800.0, 2950.0, length(vWorldPos.xz));
        col = mix(col, hazeCol, clamp(max(aerial, rimFade), 0.0, 1.0));
        gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), 1.0);
      }
    `}),h=new He(l,c);return h.frustumCulled=!1,h.name="NordicSubmarineBathymetryFloor",h}function C_(i){const t=[{cx:-480,cz:-280,rx:145,rz:95,peakY:56,offX:-22,rot:.4,seed:11.4},{cx:520,cz:-310,rx:165,rz:105,peakY:62,offX:28,rot:-.5,seed:23.8},{cx:-320,cz:-560,rx:135,rz:90,peakY:54,offX:18,rot:.2,seed:37.2},{cx:490,cz:340,rx:155,rz:98,peakY:52,offX:-24,rot:-.3,seed:46.5},{cx:-860,cz:-420,rx:240,rz:145,peakY:86,offX:-36,rot:.35,seed:51.9},{cx:880,cz:-460,rx:255,rz:155,peakY:82,offX:38,rot:-.42,seed:67.3},{cx:-740,cz:580,rx:220,rz:135,peakY:72,offX:-28,rot:.55,seed:76.4},{cx:140,cz:-1180,rx:290,rz:165,peakY:94,offX:42,rot:.15,seed:83.5},{cx:-1150,cz:-880,rx:310,rz:180,peakY:104,offX:-45,rot:-.28,seed:94.1},{cx:1080,cz:780,rx:285,rz:165,peakY:92,offX:36,rot:.38,seed:108.7}],e=[],n=28,s=52;for(const l of t){const c=(n+1)*(s+1),h=new Float32Array(c*3),u=Math.cos(l.rot),p=Math.sin(l.rot);for(let m=0;m<=n;m++){const d=m/n*1.42;for(let M=0;M<=s;M++){const b=M/s*Math.PI*2,_=1+.18*Math.sin(b*2+l.seed)+.11*Math.cos(b*3-l.seed),S=Math.cos(b)*l.rx*_*d,w=Math.sin(b)*l.rz*_*d,A=l.cx+S*u-w*p,E=l.cz+S*p+w*u,y=Math.hypot((S-l.offX)/(l.rx*.92),w/(l.rz*.92)),x=l.peakY*.32,P=Math.pow(Math.max(0,1-Math.pow(y/.92,1.65)),1.25)*(l.peakY*.64),C=(lo(A*.0085+l.seed,E*.01-l.seed,3)-.38)*(l.peakY*.34)*(1-de(.55,1.05,d)),R=(ce(A*.009+l.seed,E*.009,3)-.5)*9.5,L=x+P+C+R,D=.68+.1*Math.sin(b*2-l.seed),k=de(D,1.05,d),B=de(.98,1.38,d),N=en-2,H=q.lerp(L,N,Math.pow(k,.84)),V=q.lerp(H,ci,B),X=m*(s+1)+M;h[X*3]=A,h[X*3+1]=V,h[X*3+2]=E}}const f=new Uint32Array(n*s*6);let g=0;for(let m=0;m<n;m++)for(let d=0;d<s;d++){const M=m*(s+1)+d,b=(m+1)*(s+1)+d,_=(m+1)*(s+1)+(d+1),S=m*(s+1)+(d+1);f[g++]=M,f[g++]=_,f[g++]=b,f[g++]=M,f[g++]=S,f[g++]=_}const v=new Xt;v.setAttribute("position",new Z(h,3)),v.setIndex(new Z(f,1)),v.computeVertexNormals(),e.push(v)}const o=ya(e,!1),a=new Ze({name:"DistantFjordAerialMaterial",uniforms:{...i},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${si}
      uniform vec3 uSunColor;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      void main() {
        vec3 N = normalize(vWorldNormal);
        vec3 L = normalize(uSunDir);
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);

        float strataBands = 0.88 + 0.18 * sin(vWorldPos.y * 0.65 + skyNoise2(vWorldPos.xz * 0.03) * 3.0);
        float slopeTurf = smoothstep(0.58, 0.86, N.y) * smoothstep(-4.0, 14.0, vWorldPos.y);
        vec3 rockBase = mix(vec3(0.058, 0.068, 0.084) * strataBands, vec3(0.072, 0.118, 0.058), slopeTurf * 0.80);

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
        gl_FragColor = vec4(finalCol, 1.0);
      }
    `}),r=new He(o,a);return r.frustumCulled=!1,r.name="DistantFjordArchipelago",r}function P_(){const i=[],t=[{dx:0,dz:0,h:.36,w:.02,bend:.11,rotY:.1},{dx:.032,dz:.018,h:.28,w:.017,bend:.14,rotY:1.8},{dx:-.028,dz:.022,h:.31,w:.018,bend:.12,rotY:3.7},{dx:.012,dz:-.03,h:.23,w:.015,bend:.15,rotY:5}];for(const e of t){const s=[],o=[],a=[],r=Math.cos(e.rotY),l=Math.sin(e.rotY);for(let h=0;h<=4;h++){const u=h/4,p=e.w*(1-.88*Math.pow(u,1.3)),f=e.h*u,g=e.bend*u*u;for(const v of[-1,1]){const m=v*p,d=g,M=e.dx+m*r-d*l,b=e.dz+m*l+d*r;s.push(M,f,b),o.push(-l*.3,.92,r*.3)}}for(let h=0;h<4;h++){const u=h*2,p=u+1,f=u+2,g=u+3;a.push(u,p,g,u,g,f)}const c=new Xt;c.setAttribute("position",new Yt(s,3)),c.setAttribute("normal",new Yt(o,3)),c.setIndex(a),i.push(c)}return ya(i,!1)}function R_(){const i=[],t=[{ox:0,oz:0,h:.24,leanX:.03,leanZ:.02,r:.032},{ox:.045,oz:.025,h:.19,leanX:.05,leanZ:-.02,r:.027},{ox:-.038,oz:.03,h:.21,leanX:-.04,leanZ:.04,r:.029}];for(const e of t){const n=new la(.004,.006,e.h,4,1);n.translate(e.ox+e.leanX*.5,e.h*.5,e.oz+e.leanZ*.5);const s=n.getAttribute("position").count,o=new Float32Array(s*3);for(let c=0;c<s;c++)o[c*3]=.24,o[c*3+1]=.44,o[c*3+2]=.2;n.setAttribute("color",new Z(o,3)),i.push(n);const a=new la(e.r,e.r*.28,e.r*.55,6,1);a.translate(e.ox+e.leanX,e.h+e.r*.15,e.oz+e.leanZ);const r=a.getAttribute("position").count,l=new Float32Array(r*3);for(let c=0;c<r;c++)l[c*3]=1,l[c*3+1]=1,l[c*3+2]=1;a.setAttribute("color",new Z(l,3)),i.push(a)}return ya(i,!1)}function L_(i,t,e,n){const s=new Xn;s.position.set(i,t,e);const o=[{rx:.44,ry:.17,rz:.38,dy:.08,rot:.2},{rx:.35,ry:.14,rz:.31,dy:.28,rot:1.1},{rx:.27,ry:.12,rz:.24,dy:.45,rot:2.3},{rx:.19,ry:.11,rz:.18,dy:.6,rot:.7},{rx:.12,ry:.1,rz:.11,dy:.73,rot:1.9}];for(const a of o){const r=new xa(1,1);r.scale(a.rx,a.ry,a.rz);const l=new He(r,n);l.position.set((Math.sin(a.rot*3)-.5)*.03,a.dy,(Math.cos(a.rot*2)-.5)*.03),l.rotation.y=a.rot,l.castShadow=!0,l.receiveShadow=!0,s.add(l)}return s}function I_(i){const t=new Xn;t.name="NordicCliffsideWorld";const e=E_(),n=new Si({name:"NordicBasaltCliff_PBR",map:e.albedo,roughnessMap:e.roughness,roughness:.88,metalness:.04,envMapIntensity:.96});n.onBeforeCompile=ct=>{Object.assign(ct.uniforms,i),ct.vertexShader=ct.vertexShader.replace("#include <common>",`#include <common>
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
        ${si}
        varying vec3 vRockWorldPos;
        varying vec3 vRockWorldNormal;

        // Evaluates irregular, fractured Nordic basalt cliff ledges, leaning vertical fissures & angular rock facets!
        float evalFaroeseCliffStrata(vec3 wp) {
          // Warp dip & elevation laterally so strata break, tilt, and terminate naturally (ZERO straight stripes!)
          float warpDip =
            wp.x * 0.032 -
            wp.z * 0.026 +
            (skyFbm(wp.xz * 0.055) - 0.5) * 4.2 +
            (skyNoise2(wp.xz * 0.19) - 0.5) * 1.45;
          float lateralBreak = smoothstep(0.22, 0.76, skyFbm(wp.xz * 0.095 + vec2(wp.y * 0.035, -wp.y * 0.028)));
          float coarseBed = abs(fract((wp.y + warpDip) * 0.29) - 0.5) * 2.0;
          float fineBed = abs(fract((wp.y * 1.7 + warpDip * 1.3) * 0.44) - 0.5) * 2.0;
          float brokenLedge = mix(0.45, smoothstep(0.06, 0.42, coarseBed), lateralBreak);
          // Leaning vertical columnar joints & erosion fissures
          vec2 fissureCoord = vec2(
            (wp.x + wp.z) * 0.34 + wp.y * 0.09 + (skyNoise2(wp.xz * 0.14) - 0.5) * 1.6,
            wp.y * 0.11 - (wp.x - wp.z) * 0.08
          );
          float vertJoints = skyFbm(fissureCoord);
          float angularBlocks = skyNoise2(vec2(wp.x * 0.78 - wp.z * 0.62, wp.y * 0.68));
          return brokenLedge * 0.42 + smoothstep(0.12, 0.65, fineBed) * 0.18 + vertJoints * 0.26 + angularBlocks * 0.14;
        }`).replace("#include <map_fragment>",`#ifdef USE_MAP
          vec3 wN = normalize(vRockWorldNormal);
          vec3 triBlend = pow(max(abs(wN), vec3(1e-4)), vec3(4.0));
          triBlend /= max(triBlend.x + triBlend.y + triBlend.z, 1e-4);
          vec3 rpMacro = vRockWorldPos * 0.068;
          vec3 rpDetail = vRockWorldPos * 0.32;
          vec3 rpFine = vRockWorldPos * 1.38;
          vec3 albMacro =
            texture2D(map, rpMacro.zy).rgb * triBlend.x +
            texture2D(map, rpMacro.xz).rgb * triBlend.y +
            texture2D(map, rpMacro.xy).rgb * triBlend.z;
          vec3 albDetail =
            texture2D(map, rpDetail.zy).rgb * triBlend.x +
            texture2D(map, rpDetail.xz).rgb * triBlend.y +
            texture2D(map, rpDetail.xy).rgb * triBlend.z;
          vec3 albFine =
            texture2D(map, rpFine.zy).rgb * triBlend.x +
            texture2D(map, rpFine.xz).rgb * triBlend.y +
            texture2D(map, rpFine.xy).rgb * triBlend.z;

          vec3 multiRockAlb = mix(mix(albMacro, albDetail, 0.48), albFine, 0.28);
          float cliffSteepMask = 1.0 - smoothstep(0.34, 0.76, abs(wN.y));
          float strataVal = evalFaroeseCliffStrata(vRockWorldPos);
          // Deepen fracture crevices with natural rock AO & add irregular pale coastal lichen / mineral patches!
          float creviceAO = mix(0.54, 1.12, smoothstep(0.18, 0.68, strataVal));
          float lichenPatch = smoothstep(0.62, 0.88, skyFbm(vRockWorldPos.xz * 0.22 + vRockWorldPos.y * 0.14));
          vec3 mineralTint = mix(vec3(0.72, 0.74, 0.79), vec3(1.18, 1.15, 1.10), strataVal) * creviceAO;
          mineralTint = mix(mineralTint, vec3(1.16, 1.20, 1.08), lichenPatch * 0.28);
          diffuseColor.rgb *= multiRockAlb * mix(vec3(1.0), mineralTint, 0.35 + 0.65 * cliffSteepMask);
        #endif`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 twinPadNorm = (vRockWorldPos.xz - vec2(-0.05, -1.05)) / vec2(4.35, 4.10);
        float dragonPadClear = smoothstep(0.76, 1.26, length(twinPadNorm));

        // Natural rugged Nordic mosaic: exposed craggy basalt ribs & scree + textured fescue/moss tussocks + russet heather!
        float crownSlope = smoothstep(0.54, 0.86, vRockWorldNormal.y);
        float aboveSpray = smoothstep(-5.2, 0.4, vRockWorldPos.y);
        float patchField =
          skyFbm(vRockWorldPos.xz * 0.13 + 3.7) * 0.56 +
          skyFbm(vRockWorldPos.xz * 0.46 - 2.1) * 0.28 +
          skyNoise2(vRockWorldPos.xz * 1.55) * 0.16;
        // Crisp rock-outcrop islands breaking right through the turf on ridges & steeper shoulders!
        float outcropMosaic = smoothstep(0.32, 0.64, patchField + (vRockWorldNormal.y - 0.76) * 0.55);
        float turfMask = dragonPadClear * crownSlope * aboveSpray * outcropMosaic;

        // Multi-species textured turf (olive moss, coastal fescue, golden dry sedge & russet heather + fine tussock grain!)
        float tussockGrain = skyNoise2(vRockWorldPos.xz * 2.35) * 0.55 + skyNoise2(vRockWorldPos.xz * 6.4) * 0.45;
        float heatherZone = smoothstep(0.56, 0.84, skyFbm(vRockWorldPos.xz * 0.19 - 5.4)) * smoothstep(2.5, 14.0, vRockWorldPos.y);
        float drySedge = smoothstep(0.48, 0.82, skyFbm(vRockWorldPos.xz * 0.31 + 1.9));
        vec3 turfBase = mix(vec3(0.068, 0.136, 0.042), vec3(0.155, 0.188, 0.060), skyFbm(vRockWorldPos.xz * 0.11));
        turfBase = mix(turfBase, vec3(0.195, 0.168, 0.068), drySedge * 0.38);
        turfBase = mix(turfBase, vec3(0.148, 0.096, 0.064), heatherZone * 0.44);
        // Retain crisp micro-tussock & underlying rock grain so turf NEVER looks flat or velvety-smooth!
        turfBase *= (0.72 + 0.56 * tussockGrain);
        diffuseColor.rgb = mix(diffuseColor.rgb, mix(diffuseColor.rgb * 1.15, turfBase, 0.78), clamp(turfMask, 0.0, 0.86));

        // Dark wet intertidal basalt splash zone (-11.8m .. -7.5m) & submarine rock below
        float wetZone = 1.0 - smoothstep(-11.2, -7.5, vRockWorldPos.y);
        float submergedDepth = 1.0 - smoothstep(-24.0, -11.6, vRockWorldPos.y);
        diffuseColor.rgb *= mix(1.0, 0.36, wetZone);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.024, 0.042, 0.054), submergedDepth * 0.74);`).replace("#include <roughnessmap_fragment>",`float roughnessFactor = roughness;
        #ifdef USE_ROUGHNESSMAP
          vec3 wNR = normalize(vRockWorldNormal);
          vec3 triWR = pow(max(abs(wNR), vec3(1e-4)), vec3(4.0));
          triWR /= max(triWR.x + triWR.y + triWR.z, 1e-4);
          vec3 rpRMid = vRockWorldPos * 0.34;
          vec3 rpRFine = vRockWorldPos * 1.42;
          float rMid =
            texture2D(roughnessMap, rpRMid.zy).g * triWR.x +
            texture2D(roughnessMap, rpRMid.xz).g * triWR.y +
            texture2D(roughnessMap, rpRMid.xy).g * triWR.z;
          float rFine =
            texture2D(roughnessMap, rpRFine.zy).g * triWR.x +
            texture2D(roughnessMap, rpRFine.xz).g * triWR.y +
            texture2D(roughnessMap, rpRFine.xy).g * triWR.z;
          roughnessFactor *= mix(0.68, 1.08, mix(rMid, rFine, 0.42));
        #endif
        float wetRough = 1.0 - smoothstep(-11.2, -7.5, vRockWorldPos.y);
        roughnessFactor = clamp(mix(roughnessFactor, 0.16, wetRough * 0.86), 0.12, 0.98);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        // True 3D multi-scale triplanar rock fracture, cliff strata & coastal turf-tussock normal perturbation!
        {
          vec3 wN2 = normalize(vRockWorldNormal);
          vec2 padN2 = (vRockWorldPos.xz - vec2(-0.05, -1.05)) / vec2(4.35, 4.10);
          float padGentle = mix(0.32, 1.0, smoothstep(0.70, 1.22, length(padN2)));
          float wallBoost = mix(0.68, 1.32, 1.0 - smoothstep(0.38, 0.82, abs(wN2.y)));
          float hMacro = 0.5;
          float hMid = 0.5;
          float hFine = 0.5;
          #ifdef USE_ROUGHNESSMAP
            vec3 triW = pow(max(abs(wN2), vec3(1e-4)), vec3(4.0));
            triW /= max(triW.x + triW.y + triW.z, 1e-4);
            vec3 rpNMacro = vRockWorldPos * 0.14;
            vec3 rpNMid = vRockWorldPos * 0.48;
            vec3 rpNFine = vRockWorldPos * 1.75;
            hMacro =
              texture2D(roughnessMap, rpNMacro.zy).g * triW.x +
              texture2D(roughnessMap, rpNMacro.xz).g * triW.y +
              texture2D(roughnessMap, rpNMacro.xy).g * triW.z;
            hMid =
              texture2D(roughnessMap, rpNMid.zy).g * triW.x +
              texture2D(roughnessMap, rpNMid.xz).g * triW.y +
              texture2D(roughnessMap, rpNMid.xy).g * triW.z;
            hFine =
              texture2D(roughnessMap, rpNFine.zy).g * triW.x +
              texture2D(roughnessMap, rpNFine.xz).g * triW.y +
              texture2D(roughnessMap, rpNFine.xy).g * triW.z;
          #endif

          float tussockMicro = skyNoise2(vRockWorldPos.xz * 2.6) * 0.6 + skyNoise2(vRockWorldPos.xz * 6.8) * 0.4;
          float strataRelief = evalFaroeseCliffStrata(vRockWorldPos);
          float combinedH =
            strataRelief * 0.44 +
            (1.0 - hMacro) * 0.22 +
            (1.0 - hMid) * 0.20 +
            (1.0 - hFine) * 0.14 +
            tussockMicro * 0.16 * smoothstep(0.55, 0.88, wN2.y);

          float rockBumpH = combinedH * 0.175 * wallBoost * padGentle;
          vec3 dPdxR = dFdx( -vViewPosition );
          vec3 dPdyR = dFdy( -vViewPosition );
          vec3 r1R = cross( dPdyR, normal );
          vec3 r2R = cross( normal, dPdxR );
          float detR = dot( dPdxR, r1R );
          float signDetR = detR < 0.0 ? -1.0 : 1.0;
          vec3 surfGradR = signDetR * ( dFdx( rockBumpH ) * r1R + dFdy( rockBumpH ) * r2R );
          vec3 pertRockN = abs( detR ) * normal - surfGradR;
          normal = dot( pertRockN, pertRockN ) > 1e-12 ? normalize( pertRockN ) : normal;
        }`).replace("#include <fog_fragment>",`vec3 rToFrag = vRockWorldPos - cameraPosition;
        float rDist = length(rToFrag);
        vec3 rHazeCol = evalHorizonHazeColor(rToFrag);
        float rAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * rDist, 1e-6), 1.26));
        gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, rHazeCol, clamp(rAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)},t.add(T_(i));const s=288,o=new Ds(102,104,s,s);o.rotateX(-Math.PI*.5);const a=o.getAttribute("position");for(let ct=0;ct<a.count;ct++){const yt=a.getX(ct)-4,Bt=a.getZ(ct)-14.5,te=As(yt,Bt);a.setXYZ(ct,yt,te,Bt)}eh(o,7.3,!0);const r=new He(o,n);r.receiveShadow=!0,r.castShadow=!0,r.name="HeroBasaltCliffPerch",t.add(r);const l=As(-8.65,-7.25);t.add(L_(-8.65,l-.04,-7.25,n));const c=new Xn;c.name="NordicArchipelago";for(let ct=0;ct<il.length;ct++){const yt=il[ct],Bt=new Ds(yt.spanX,yt.spanZ,yt.gridSegs,yt.gridSegs);Bt.rotateX(-Math.PI*.5);const te=Bt.getAttribute("position");for(let Ot=0;Ot<te.count;Ot++){const he=yt.centerX+te.getX(Ot),re=yt.centerZ+te.getZ(Ot),Ce=yt.evalHeight(he,re);te.setXYZ(Ot,he,Ce,re)}eh(Bt,19.1+ct*13.7,!1);const se=new He(Bt,n);se.receiveShadow=!0,se.castShadow=!0,se.name=yt.name,c.add(se)}for(let ct=0;ct<sl.length;ct++){const yt=sl[ct],Bt=new He(S_(yt),n);Bt.position.set(yt.x,0,yt.z),Bt.rotation.y=yt.rotY,Bt.castShadow=!0,Bt.receiveShadow=!0,Bt.name=`FaroeseHeadlandSeaArch_${ct}`,c.add(Bt)}const h=mu.map(ct=>A_(ct)),u=new He(ya(h,!1),n);u.castShadow=!0,u.receiveShadow=!0,u.name="TabularFaroeseSeaStacks",c.add(u),t.add(c);const p=Math.cos(.18),f=Math.sin(.18),g=ct=>{const yt=Math.sin(ct*.13+.5)*2.1,Bt=-66+ct*p+yt*f,te=-32-ct*f+yt*p,se=Qs(Bt,te);return new T(Bt,se,te)};let v=10;for(let ct=3;ct<=25;ct+=.08)if(g(ct).y<6.2){v=ct-.16;break}const m=g(v),d=g(v-1.2),M=new zt(m.x-d.x,m.z-d.z).normalize(),b=new zt(-M.y,M.x),_=32,S=6,w=new Float32Array((_+1)*(S+1)*3),A=new Float32Array((_+1)*(S+1)*2);for(let ct=0;ct<=_;ct++){const yt=ct/_,Bt=q.lerp(-8.5,v+.14,yt),te=g(Bt),se=q.lerp(1.1,1.48,yt);for(let Ot=0;Ot<=S;Ot++){const he=Ot/S,re=(he-.5)*2*se,Ce=te.x+b.x*re,De=te.z+b.y*re,on=Qs(Ce,De),Xe=Math.max(on+.04,te.y+.22),Ue=ct*(S+1)+Ot;w[Ue*3]=Ce,w[Ue*3+1]=Xe,w[Ue*3+2]=De,A[Ue*2]=he,A[Ue*2+1]=1-yt*2.8}}const E=[];for(let ct=0;ct<_;ct++)for(let yt=0;yt<S;yt++){const Bt=ct*(S+1)+yt,te=(ct+1)*(S+1)+yt,se=(ct+1)*(S+1)+(yt+1),Ot=ct*(S+1)+(yt+1);E.push(Bt,te,se,Bt,se,Ot)}const y=new Xt;y.setAttribute("position",new Z(w,3)),y.setAttribute("uv",new Z(A,2)),y.setIndex(E),y.computeVertexNormals();const x=48,P=16,C=en-3.6,R=m.y+.22-C,L=3.1,D=new Float32Array((x+1)*(P+1)*3),k=new Float32Array((x+1)*(P+1)*2);for(let ct=0;ct<=x;ct++){const yt=ct/x,Bt=-.35+(L+.35)*Math.pow(yt,.62),te=m.y+.22-R*Math.pow(yt,1.55),se=m.x+M.x*Bt,Ot=m.z+M.y*Bt,he=Qs(se,Ot),re=te<he+.45?.55:0,Ce=q.lerp(1.42,2.75,Math.pow(yt,.85));for(let De=0;De<=P;De++){const on=De/P,Xe=(on-.5)*2*Ce,Ue=Math.sin(on*Math.PI)*(.32+.5*yt)+re,an=se+b.x*Xe+M.x*Ue,Sn=Ot+b.y*Xe+M.y*Ue,un=ct*(P+1)+De;D[un*3]=an,D[un*3+1]=te,D[un*3+2]=Sn,k[un*2]=on,k[un*2+1]=1-yt}}const B=[];for(let ct=0;ct<x;ct++)for(let yt=0;yt<P;yt++){const Bt=ct*(P+1)+yt,te=(ct+1)*(P+1)+yt,se=(ct+1)*(P+1)+(yt+1),Ot=ct*(P+1)+(yt+1);B.push(Bt,te,se,Bt,se,Ot)}const N=new Xt;N.setAttribute("position",new Z(D,3)),N.setAttribute("uv",new Z(k,2)),N.setIndex(B),N.computeVertexNormals();const H=m.x+M.x*(L+.45),V=m.z+M.y*(L+.45),X={...i},K=new Ze({name:"NordicWaterfallShader",transparent:!0,depthWrite:!1,side:hn,uniforms:X,vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${si}
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

        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float aerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26));
        col = mix(col, hazeCol, clamp(aerial, 0.0, 0.95));

        float alpha = pow(max(sideFeather, 1e-5), 0.65) * (0.36 + 0.54 * threads + crestFoam + plungeBoil);
        gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), clamp(alpha, 0.0, 0.92));
      }
    `}),G=new He(y,K);G.renderOrder=3;const W=new He(N,K);W.renderOrder=3,t.add(G),t.add(W);const O=new Ml(7.8,40);O.rotateX(-Math.PI*.5);const nt=new Ze({transparent:!0,depthWrite:!1,uniforms:X,vertexShader:`
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
      ${si}
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
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        foamCol = mix(foamCol, hazeCol, clamp(1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26)), 0.0, 0.95));
        gl_FragColor = vec4(clamp(foamCol, vec3(0.0), vec3(24.0)), alpha);
      }
    `}),at=new He(O,nt);at.position.set(H,en+.16,V),at.renderOrder=3,t.add(at);const $=140,j=new Float32Array($*3),Y=new Float32Array($);for(let ct=0;ct<$;ct++)j[ct*3]=H+(Qt(ct,11.3)-.5)*5.8,j[ct*3+1]=en+Qt(ct,27.9)*9.5,j[ct*3+2]=V+(Qt(ct,43.1)-.5)*5.8,Y[ct]=Qt(ct,61.7);const it=new Xt;it.setAttribute("position",new Z(j,3)),it.setAttribute("aSeed",new Z(Y,1));const gt=new Ze({transparent:!0,depthWrite:!1,uniforms:X,vertexShader:`
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
      ${si}
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
    `}),Q=new Qr(it,gt);Q.renderOrder=4,Q.frustumCulled=!1,t.add(Q);const F=new Qe,wt=new xa(.58,1),st=wt.getAttribute("position");for(let ct=0;ct<st.count;ct++){const yt=st.getX(ct);let Bt=st.getY(ct);const te=st.getZ(ct),se=.84+.28*ce(yt*2.2+4.3,Bt*2.2+te*2.2,3);Bt<-.06&&(Bt=-.06+(Bt+.06)*.25),st.setXYZ(ct,yt*se*1.38,Bt*se*.52,te*se*1.22)}wt.computeVertexNormals();const mt=[{cx:-3.5,cz:-14,spanX:62,spanZ:58,isHero:!0,evalH:As},{cx:-74,cz:-36,spanX:68,spanZ:58,isHero:!1,evalH:Qs},{cx:88,cz:36,spanX:74,spanZ:74,isHero:!1,evalH:uu},{cx:84,cz:-46,spanX:68,spanZ:78,isHero:!1,evalH:du},{cx:-124,cz:-86,spanX:68,spanZ:58,isHero:!1,evalH:pu},{cx:-48,cz:-92,spanX:52,spanZ:48,isHero:!1,evalH:fu}],_t=220,Pt=new $a(wt,n,_t);Pt.castShadow=!0,Pt.receiveShadow=!0;let bt=0;const z=new T(0,1,0),I=new T,tt=new je,pt=new je;for(let ct=0;ct<mt.length;ct++){const yt=mt[ct];let Bt=0;for(let te=0;te<550&&Bt<20&&bt<_t;te++){const se=7e3+ct*800+te,Ot=yt.cx+(Qt(se,14.7)-.5)*(yt.spanX*1.25),he=yt.cz+(Qt(se,53.9)-.5)*(yt.spanZ*1.25),re=yt.evalH(Ot,he);if(re<-12.3||re>-10.6||Math.hypot(Ot-m.x,he-m.z)<7)continue;const Ce=1.25+Qt(se,29.1)*2.1;F.position.set(Ot,re-.25*Ce,he),F.rotation.set((Qt(se,3.3)-.5)*.18,Qt(se,9.8)*Math.PI*2,(Qt(se,6.1)-.5)*.18),F.scale.set(Ce*(.95+Qt(se,4.4)*.35),Ce*.58,Ce),F.updateMatrix(),Pt.setMatrixAt(bt++,F.matrix),Bt++}}for(let ct=0;ct<mt.length;ct++){const yt=mt[ct],Bt=yt.isHero?26:12;let te=0;for(let se=0;se<400&&te<Bt&&bt<_t;se++){const Ot=ct*500+se,he=yt.cx+(Qt(Ot,41.2)-.5)*yt.spanX,re=yt.cz+(Qt(Ot,83.7)-.5)*yt.spanZ;if(yt.isHero){if(Math.sqrt(Math.pow(he/10.2,2)+Math.pow((re+1)/6.4,2))<1)continue}else if(Math.hypot(he-m.x,re-m.z)<5.5)continue;const Ce=yt.evalH(he,re);if(Ce<.25||Ce>34)continue;const De=yt.evalH(he+.6,re),on=yt.evalH(he-.6,re),Xe=yt.evalH(he,re+.6),Ue=yt.evalH(he,re-.6),an=(De-on)/1.2,Sn=(Xe-Ue)/1.2;if(Math.hypot(an,Sn)>.38||Math.min(De,on,Xe,Ue)<0)continue;const Rn=(yt.isHero?.38:.58)+Qt(Ot,19.4)*(yt.isHero?.62:.95);I.set(-an,1,-Sn).normalize(),tt.setFromUnitVectors(z,I),pt.setFromAxisAngle(z,Qt(Ot,8.9)*Math.PI*2),F.quaternion.copy(tt).multiply(pt),F.position.set(he,Ce-.14*Rn,re),F.scale.set(Rn*(.95+Qt(Ot,2.3)*.32),Rn*.55,Rn),F.updateMatrix(),Pt.setMatrixAt(bt++,F.matrix),te++}}Pt.count=bt,Pt.instanceMatrix.needsUpdate=!0,t.add(Pt);const vt=P_(),ft={uTime:{value:0}},Dt=(ct,yt)=>{ct.onBeforeCompile=Bt=>{Object.assign(Bt.uniforms,i),Bt.uniforms.uFloraTime=ft.uTime,Bt.vertexShader=Bt.vertexShader.replace("#include <common>",`#include <common>
          uniform float uFloraTime;
          varying vec3 vFloraWorldPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float hFrac = clamp(position.y / ${yt.toFixed(2)}, 0.0, 1.0);
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
          vFloraWorldPos = fwPos.xyz;`),Bt.fragmentShader=Bt.fragmentShader.replace("#include <common>",`#include <common>
          ${si}
          varying vec3 vFloraWorldPos;`).replace("#include <fog_fragment>",`vec3 fToFrag = vFloraWorldPos - cameraPosition;
          float fDist = length(fToFrag);
          vec3 fHaze = evalHorizonHazeColor(fToFrag);
          float fAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * fDist, 1e-6), 1.26));
          gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, fHaze, clamp(fAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)}},dt=new Si({name:"NordicVariedCoastalGrass",color:new It(16777215),roughness:.78,metalness:0,side:hn});Dt(dt,.36);const St=8400,Wt=new $a(vt,dt,St);Wt.castShadow=!1,Wt.receiveShadow=!0;const xt=new It;let Ct=0;for(let ct=0;ct<mt.length;ct++){const yt=mt[ct],Bt=yt.isHero?4200:840;let te=0,se=0;for(;te<Bt&&se<Bt*7&&Ct<St;){se++;const Ot=ct*25e3+se,he=yt.cx+(Qt(Ot,1.3)-.5)*yt.spanX,re=yt.cz+(Qt(Ot,7.9)-.5)*yt.spanZ;if(yt.isHero){const Ki=Math.sqrt(Math.pow((he-4.45)/2.35,2)+Math.pow((re+.85)/3.85,2)),Qi=Math.sqrt(Math.pow((he+4.45)/2.35,2)+Math.pow((re+1.15)/3.85,2));if(Ki<1||Qi<1)continue}const Ce=yt.evalH(he,re),De=yt.evalH(he+.4,re),on=yt.evalH(he,re+.4),Xe=Math.hypot(De-Ce,on-Ce)/.4;if(Ce<-.5||Xe>.78)continue;const Ue=ce(he*.45+2.3,re*.45-4.1,3);if(Ue<.32)continue;const an=de(.58,.85,Ue),Sn=.55+Qt(Ot,3.7)*.72+an*.5,un=.75+Qt(Ot,5.1)*.62;F.position.set(he,Ce-.02,re),F.scale.set(un,Sn,un),F.rotation.set((Qt(Ot,9.2)-.5)*.18,Qt(Ot,11.4)*Math.PI*2,(Qt(Ot,13.8)-.5)*.18),F.updateMatrix(),Wt.setMatrixAt(Ct,F.matrix);const Rn=Qt(Ot,17.1);Rn<.54?xt.setHSL(.24+(Qt(Ot,21.1)-.5)*.04,.44,.21+Qt(Ot,23.7)*.11):Rn<.8?xt.setHSL(.14+(Qt(Ot,25.3)-.5)*.03,.42,.3+Qt(Ot,29.1)*.11):xt.setHSL(.28+(Qt(Ot,31.9)-.5)*.03,.3,.22+Qt(Ot,37.4)*.1),Wt.setColorAt(Ct,xt),Ct++,te++}}Wt.count=Ct,Wt.instanceMatrix.needsUpdate=!0,Wt.instanceColor&&(Wt.instanceColor.needsUpdate=!0),t.add(Wt);const $t=R_(),Zt=new Si({name:"NordicCliffWildflowers",vertexColors:!0,roughness:.68,metalness:0});Dt(Zt,.26);const kt=2400,Jt=new $a($t,Zt,kt);Jt.castShadow=!1,Jt.receiveShadow=!0;const jt=new It;let ye=0;for(let ct=0;ct<mt.length;ct++){const yt=mt[ct],Bt=yt.isHero?1280:220;let te=0,se=0;for(;te<Bt&&se<Bt*8&&ye<kt;){se++;const Ot=9e4+ct*18e3+se,he=yt.cx+(Qt(Ot,2.7)-.5)*yt.spanX,re=yt.cz+(Qt(Ot,6.3)-.5)*yt.spanZ;if(yt.isHero){const an=Math.sqrt(Math.pow((he-4.45)/2.55,2)+Math.pow((re+.85)/4.05,2)),Sn=Math.sqrt(Math.pow((he+4.45)/2.55,2)+Math.pow((re+1.15)/4.05,2));if(an<1||Sn<1)continue}const Ce=yt.evalH(he,re),De=Math.hypot(yt.evalH(he+.4,re)-Ce,yt.evalH(he,re+.4)-Ce)/.4;if(Ce<-.2||De>.66||ce(he*.48-8.2,re*.48+5.7,3)<.48)continue;const Xe=.68+Qt(Ot,11.9)*.65;F.position.set(he,Ce-.015,re),F.scale.set(Xe,Xe*(.85+Qt(Ot,14.2)*.35),Xe),F.rotation.set((Qt(Ot,18.5)-.5)*.18,Qt(Ot,22.1)*Math.PI*2,(Qt(Ot,26.8)-.5)*.18),F.updateMatrix(),Jt.setMatrixAt(ye,F.matrix);const Ue=ce(he*.25+13.1,re*.25-9.4,2);Ue<.42?jt.setHSL(.93+(Qt(Ot,31.1)-.5)*.04,.68,.66+Qt(Ot,33.7)*.1):Ue<.62?jt.setHSL(.12,.14,.88+Qt(Ot,35.9)*.08):Ue<.78?jt.setHSL(.13+(Qt(Ot,39.2)-.5)*.02,.86,.56+Qt(Ot,41.8)*.08):jt.setHSL(.79+(Qt(Ot,45.1)-.5)*.04,.52,.54+Qt(Ot,49.3)*.1),Jt.setColorAt(ye,jt),ye++,te++}}Jt.count=ye,Jt.instanceMatrix.needsUpdate=!0,Jt.instanceColor&&(Jt.instanceColor.needsUpdate=!0),t.add(Jt),t.add(C_(i));const Lt=m_([{x:-2,z:-8,radius:22.5},{x:-18,z:-26,radius:18},{x:27.5,z:-10.5,radius:6.5},{x:-37.5,z:-22,radius:7.2},{x:H,z:V,radius:5.8,boost:1},{x:-66,z:-32,radius:25.5},{x:-91,z:-42.5,radius:21},{x:88,z:36,radius:34.5},{x:59.5,z:23,radius:11},{x:43.5,z:14.5,radius:6.2},{x:63,z:50.5,radius:8.2},{x:88,z:-56,radius:30.5},{x:70,z:-22.5,radius:17.5},{x:-124,z:-86,radius:34},{x:-42,z:-96,radius:20},{x:36,z:-108,radius:22},{x:-144,z:78,radius:44},{x:168,z:122,radius:42},{x:-206,z:-96,radius:46},{x:-8,z:-222,radius:58},{x:-18,z:236,radius:32}],i);t.add(Lt.mesh);const rt=460,Mt=new Float32Array(rt*3),Ft=new Float32Array(rt);for(let ct=0;ct<rt;ct++)Mt[ct*3]=(Qt(ct,31.7)-.5)*64,Mt[ct*3+1]=-7+Qt(ct,47.3)*28,Mt[ct*3+2]=-16+Qt(ct,59.1)*56,Ft[ct]=Qt(ct,73.9);const Rt=new Xt;Rt.setAttribute("position",new Z(Mt,3)),Rt.setAttribute("aSeed",new Z(Ft,1));const ne={uTime:{value:0},uColor:i.uSunColor},Re=new Ze({transparent:!0,depthWrite:!1,blending:na,uniforms:ne,vertexShader:`
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
    `}),Ge=new Qr(Rt,Re);return Ge.renderOrder=5,Ge.frustumCulled=!1,t.add(Ge),{group:t,ocean:Lt,update(ct){ft.uTime.value=ct,ne.uTime.value=ct,Lt.update(ct)}}}const ln={neckArch:.16,neckYaw:.08,headPitch:-.04,headYaw:.14,headRoll:-.08,earPerk:.76,earAsymmetry:.06,cheekNubFlare:.5,eyeYaw:.06,eyePitch:.02,pupilDilation:.76,blink:0,squint:0,jawOpen:0,teethExtension:0,tongueExtend:.12,tongueCurl:.08,wingUnfurl:.46,wingFlap:.08,wingSweep:-.05,wingCamber:.3,wingWristFold:0,wingTipLag:0,pelvicFinFlare:.9,dorsalSpineSplit:.22,spineArch:.08,spineTwist:.02,forelegStance:.1,hindlegStance:.06,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:.2,tailPitch:.26,tailCurl:.16,tailWaveAmp:0,tailWavePhase:0,rightTailFinFlare:.24,leftProstheticFinFlare:.24,autoSyncProstheticTail:!0,subtleBreathing:!0,alphaGlow:.08,biolumGlow:0,lightningCloak:0},D_=[{id:"hero-perch",label:"Hero Perch",subtitle:"Noble Alpha Sentinel",patch:{...ln}},{id:"gummy-smile",label:"Gummy Grin",subtitle:"Toothless Happy Smile",patch:{...ln,headYaw:.22,headPitch:-.06,headRoll:-.24,earPerk:.96,pupilDilation:.94,squint:.22,jawOpen:.34,teethExtension:0,tongueExtend:.58,tongueCurl:.26,tailYaw:.36}},{id:"courtship-cape",label:"Courtship Cape",subtitle:"Beach Wing-Display Dance",patch:{...ln,forelegStance:.52,neckArch:.48,headYaw:.28,headPitch:.08,headRoll:-.18,earPerk:1,pupilDilation:.96,jawOpen:.26,teethExtension:0,tongueExtend:.42,wingUnfurl:.96,wingFlap:.88,wingSweep:.44,wingCamber:.68,dorsalSpineSplit:.85}},{id:"curious-tilt",label:"Curious Tilt",subtitle:"Asymmetric Ear-Perk",patch:{...ln,headRoll:-.62,headYaw:.14,headPitch:.08,earPerk:.92,earAsymmetry:-.45,pupilDilation:.92,jawOpen:.05,teethExtension:0}},{id:"alpha-roar",label:"Alpha Roar",subtitle:"Split Spines & Cyan Fire",patch:{...ln,forelegStance:-.48,spineArch:.36,neckArch:-.22,headPitch:-.22,earPerk:.08,squint:.42,pupilDilation:.08,jawOpen:.88,teethExtension:1,tongueExtend:.52,tongueCurl:.46,wingUnfurl:.92,wingFlap:.46,wingSweep:.28,dorsalSpineSplit:1,alphaGlow:1,biolumGlow:.65,lightningCloak:.35}},{id:"lightning-storm",label:"Storm Skrill",subtitle:"Arc-Plasma Overload",patch:{...ln,forelegStance:-.35,wingUnfurl:.98,wingFlap:.62,wingCamber:.72,dorsalSpineSplit:1,pupilDilation:.16,jawOpen:.54,teethExtension:1,alphaGlow:1,biolumGlow:.92,lightningCloak:1}}];function fs(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const F_=new T(-.16,.985,.06).normalize(),N_=new T(.16,.985,.06).normalize(),gu=new T().crossVectors(F_,uo).normalize(),U_=new T().crossVectors(uo,gu).normalize(),_u=new T().crossVectors(N_,po).normalize(),k_=new T().crossVectors(po,_u).normalize();class B_{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new bn;tmpQuat=new je;tmpQuatB=new je;tmpVecA=new T;tmpVecB=new T;tmpVecC=new T;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;prevHeadRoll=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...ln,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,ln),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.autoSyncProstheticTail&&(t.rightTailFinFlare!==void 0?this.state.leftProstheticFinFlare=t.rightTailFinFlare:t.leftProstheticFinFlare!==void 0?this.state.rightTailFinFlare=t.leftProstheticFinFlare:t.autoSyncProstheticTail===!0&&(this.state.leftProstheticFinFlare=this.state.rightTailFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0};const e=4.6,n=t%e,s=Math.floor(t/e);let o=0;n>3.85&&n<4.03?o=Math.sin((n-3.85)/.18*Math.PI):s%3===1&&n>4.12&&n<4.29&&(o=Math.sin((n-4.12)/.17*Math.PI));const a=(t+1.3)%6.2,r=a<.22?Math.sin(a/.22*Math.PI)*.085:0,l=(t+3.9)%7.4,c=l<.2?-Math.sin(l/.2*Math.PI)*.075:0,h=Math.sin(t*.72)*.032+Math.sin(t*1.95+1.1)*.014,u=Math.cos(t*.58+.4)*.022,p=Math.sin(t*1.15)*.025;return{autoBlink:o,earTwitchL:r,earTwitchR:c,gazeMicroX:h,gazeMicroY:u,pupilPulse:p}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),p=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),p.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),p.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new ee().copy(this.asset.rootGroup.matrixWorld).invert(),g=new ee().multiplyMatrices(f,c.parent.matrixWorld),v=new T().setFromMatrixPosition(new ee().multiplyMatrices(g,new ee().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),d=l.bindWorldPositions.get(e),M=l.bindWorldPositions.get(n),b=new T().subVectors(d,m),_=new T().subVectors(M,d),S=b.length(),w=_.length(),A=M.clone();a&&(A.add(a),A.y=Math.max(M.y,A.y));const E=new T().subVectors(A,v),y=E.length(),x=(S+w)*.968,P=Math.abs(S-w)+.085,C=q.clamp(y,P,x),R=E.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),D=q.clamp((S*S+C*C-w*w)/(2*S*C),-1,1),k=Math.sqrt(Math.max(0,1-D*D)),B=v.clone().addScaledVector(R,S*D).addScaledVector(L,S*k),N=v.clone().addScaledVector(R,C),H=new T().subVectors(B,v).normalize(),V=new T().subVectors(N,B).normalize(),X=new je().setFromUnitVectors(b.clone().normalize(),H),K=new je().setFromUnitVectors(_.clone().normalize(),V),G=new je().setFromRotationMatrix(g);c.quaternion.copy(G).invert().multiply(X),h.quaternion.copy(X).invert().multiply(K),u.quaternion.copy(K).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;const o=68,a=11.5,r=q.clamp(-n*.055,-.28,.28),l=q.clamp(-s*.055,-.28,.28);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=q.clamp(e.airborneFactor,0,1),s=this.sampleLivingIdleMicros(t),o=e.subtleBreathing?Math.sin(t*1.55)*.8+Math.sin(t*3.1)*.2:0,a=e.subtleBreathing?Math.sin(t*1.15-.5)*.02:0,r=fs(.02,.55,Math.abs(e.legFlightTuck))*(1-n),l=Math.max(n,r),c=1-l,h=e.forelegStance>=0?e.forelegStance*.055:e.forelegStance*.275,u=e.hindlegStance>=0?e.hindlegStance*.048:e.hindlegStance*.245,p=.52*h+.48*u,f=q.clamp((u-h)*.44,-.22,.24),g=q.clamp(e.limbStride,-1,1)*.045*c,v=r*.34;this.setBonePose("root",f*c,g,0,"XYZ",0,p*c+v+o*.004,0);const m=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+m,-e.spineTwist*.05-g*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+o*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+o*.008,e.spineTwist*.07,0),this.setBonePose("chest",-f*.32*c+o*.01-m*.6,e.spineTwist*.07+g*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const d=q.clamp(e.limbStride,-1,1),M=Math.max(0,-e.forelegStance),b=Math.max(0,-e.hindlegStance);for(const $ of["L","R"]){const j=$==="L"?1:-1,Y=this.asset.rig.boneMap.get(`scapula_${$}`);if(this.setBonePose(`scapula_${$}`,0,0,0),Y.updateMatrixWorld(!0),l<.999){const it=j*d*.23,gt=-j*d*.22,Q=Math.max(0,j*d)*Math.sin(Math.abs(d)*Math.PI)*.042,F=Math.max(0,-j*d)*Math.sin(Math.abs(d)*Math.PI)*.038,wt=new T(j*M*.055,Q,it+M*.045),st=new T(j*b*.05,F,gt-b*.04);this.asset.rootGroup.updateMatrixWorld(!1);const mt=new ee().copy(this.asset.rootGroup.matrixWorld).invert(),_t=this.asset.rig.boneMap.get(`shoulder_${$}`);_t.position.copy(this.restPos.get(`shoulder_${$}`)),_t.updateMatrixWorld(!0);const Pt=this.tmpVecC.setFromMatrixPosition(_t.matrixWorld).applyMatrix4(mt),bt=this.asset.rig.bindWorldPositions.get(`wrist_${$}`).clone().add(wt),z=Pt.distanceTo(bt)-.675;z>0&&(this.setBonePose(`scapula_${$}`,0,0,0,"XYZ",0,-z*1.08*c,0),Y.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${$}`,`elbow_${$}`,`wrist_${$}`,`forepaw_${$}`,this.tmpVecA.set(j*(.2+.16*M),-.08+.18*M,-1).normalize(),wt,Q*2.2),this.solvePlantedLimbIK(`hip_${$}`,`knee_${$}`,`ankle_${$}`,`hindpaw_${$}`,this.tmpVecB.set(j*(.2+.14*b),.14+.16*b,1).normalize(),st,F*2)}if(l>.001){const it=q.clamp(e.legFlightTuck,-1,1),gt=e.wingFlap*.082*l,Q=Math.sin(t*2.05+($==="L"?0:1.25))*.052*l,F=Math.cos(t*1.58+($==="L"?.7:2.2))*.046*l,wt=(it>=0?.86*it:-.44*-it)+gt*.65+Q*.5,st=it>=0?-j*.06*it:0,mt=(it>=0?j*.09*it:j*.05*-it)+j*F*.35,_t=(it>=0?.34*it:.28*-it)-gt*.55+F*.65,Pt=(it>=0?.4*it:.2*-it)+Q*.7,bt=(it>=0?.36*it:-.1*-it)+F*.55,z=(it>=0?1.16*it:-.48*-it)+gt*.55+F*.55,I=(it>=0?-j*.05*it:0)+j*Q*.25,tt=(it>=0?j*.07*it:j*.05*-it)+j*Q*.3,pt=(it>=0?-.66*it:.34*-it)-gt*.5-Q*.65,vt=(it>=0?.78*it:-.16*-it)+gt*.45+F*.75,ft=(it>=0?.62*it:.16*-it)+Q*.6,Dt=(dt,St,Wt,xt)=>{const Ct=this.asset.rig.boneMap.get(dt);this.tmpEuler.set(St,Wt,xt,"XYZ"),this.tmpQuat.copy(this.restQuat.get(dt)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),l>=.999?(Ct.position.copy(this.restPos.get(dt)),Ct.quaternion.copy(this.tmpQuat)):Ct.quaternion.slerp(this.tmpQuat,l)};Dt(`shoulder_${$}`,wt,st,mt),Dt(`elbow_${$}`,_t,0,0),Dt(`wrist_${$}`,Pt,0,0),Dt(`forepaw_${$}`,bt,0,0),Dt(`hip_${$}`,z,I,tt),Dt(`knee_${$}`,pt,0,0),Dt(`ankle_${$}`,vt,0,0),Dt(`hindpaw_${$}`,ft,0,0)}}const _=fs(.28,.85,e.jawOpen),S=-e.neckArch*.12-o*.009-_*.035,w=e.neckYaw*.13;this.setBonePose("neck_1",S+e.headPitch*.04,w+e.headYaw*.05,e.headRoll*.04,"YXZ"),this.setBonePose("neck_2",S+e.headPitch*.07,w+e.headYaw*.09,e.headRoll*.07,"YXZ"),this.setBonePose("neck_3",S*.9+e.headPitch*.1,w+e.headYaw*.14,e.headRoll*.11,"YXZ"),this.setBonePose("neck_4",S*.8+e.headPitch*.14,w*.85+e.headYaw*.19,e.headRoll*.15,"YXZ"),this.setBonePose("head",e.headPitch*.36+o*.01-_*.05,e.headYaw*.46,e.headRoll*.36,"YXZ");const A=q.clamp(e.earPerk-_*.28,0,1),E=(A-.5)*.72,y=e.headRoll*.18;for(const $ of["L","R"]){const j=$==="L"?1:-1,Y=$==="L"?s.earTwitchL:s.earTwitchR,it=j*(e.earAsymmetry*.28+y)+Y,gt=E+it+this.earLagPitch*.65,Q=(1-A)*.36-j*this.earLagYaw*.55;this.setBonePose(`ear_${$}_1`,gt*.65,-j*Q,j*gt*.25,"YXZ"),this.setBonePose(`ear_${$}_2`,gt*.36+this.earLagPitch*.35,-j*Q*.35,0,"YXZ"),this.setBonePose(`ear_${$}_3`,gt*.24+this.earLagPitch*.25,0,0,"YXZ");const wt=(q.clamp(e.cheekNubFlare+_*.22,0,1)-.5)*.44;this.setBonePose(`cheekUpper_${$}_1`,wt*.3,-j*(wt*.55+this.earLagYaw*.25),0),this.setBonePose(`cheekLower_${$}_1`,wt*.2,-j*(wt*.45+this.earLagYaw*.2),0)}const x=q.clamp(e.eyeYaw+s.gazeMicroX,-1,1),P=q.clamp(e.eyePitch+s.gazeMicroY,-1,1),C=Math.max(e.blink,s.autoBlink*(1-e.blink)),R=q.clamp(e.squint+_*.26,0,1);for(const $ of["L","R"]){const j=$==="L"?gu:_u,Y=$==="L"?U_:k_;this.tmpQuat.setFromAxisAngle(Y,x*.34),this.tmpQuatB.setFromAxisAngle(j,-P*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${$}`,this.tmpQuat);const it=P>0?-P*.14:-P*.22,gt=P>0?P*.12:P*.08,Q=q.clamp(Math.max(C,R*.52)+it*(1-C),-.14,1),F=q.clamp(Math.max(C,R*.6)+gt*(1-C),-.1,1);this.tmpQuat.setFromAxisAngle(j,Q*.72),this.setBoneAxisQuat(`eyelidUpper_${$}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(j,-F*.64),this.setBoneAxisQuat(`eyelidLower_${$}`,this.tmpQuat)}const L=q.clamp(e.pupilDilation+s.pupilPulse-_*.25,0,1);this.asset.materials.eyeMaterials.uniforms.uPupilDilation.value=L,this.asset.materials.eyeMaterials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uTime.value=t,this.asset.materials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uBiolumGlow.value=e.biolumGlow,this.asset.materials.uniforms.uLightningCloak.value=e.lightningCloak,this.setBonePose("jaw",e.jawOpen*.66,0,0);const D=.28+.72*fs(0,.14,e.jawOpen),B=1-e.teethExtension*D;this.setBonePose("teethUpper",0,0,0,"XYZ",0,B*.025,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-B*.023,0);const N=fs(.06,.48,e.jawOpen),H=e.tongueExtend*.044*N;if(e.tongueCurl>=0){const $=-e.tongueCurl*(.018+.2*N);this.setBonePose("tongue_1",$*.35,0,0,"XYZ",0,0,H),this.setBonePose("tongue_2",$*.65,0,0),this.setBonePose("tongue_3",$*.95,0,0),this.setBonePose("tongue_4",$*1.15,0,0)}else{const $=N*fs(.2,.95,e.tongueExtend),j=-e.tongueCurl*$;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,H),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",j*.13,0,0),this.setBonePose("tongue_4",j*.2,0,0)}const V=q.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),X=q.lerp(.11,.74,l);for(const $ of["L","R"]){const j=$==="L"?1:-1,Y=e.wingFlap*(.25+.75*e.wingUnfurl),it=j*(Y>=0?Y*.74:Y*X),gt=Y<0?Y*q.lerp(.04,.26,n)*e.wingUnfurl:0,Q=j*e.wingSweep*.44,F=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${$}`,.05*V,j*.12*V,it*.18,"YXZ"),this.setBonePose(`wingShoulder_${$}`,e.wingCamber*.09,j*.82*V+Q,it-j*.22*V,"YXZ"),this.setBonePose(`wingElbow_${$}`,0,-j*(1.42*V+F*.45),j*.86*V+it*.22+j*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${$}`,-.35*V-e.wingCamber*.18,j*(1.32*V+F*.55)+Q*.35,j*.12*V+j*gt*.3+j*e.wingTipLag*.26,"YXZ");for(let st=1;st<=6;st++){const mt=(st-1)/5,_t=j*(-.38+mt*.58)*V,Pt=-e.wingCamber*(.14+.18*(1-mt))-.1*V,bt=e.wingTipLag*(.18+.26*mt),z=Y>=0?-Y*.22:-Y*q.lerp(.06*Math.pow(Math.max(0,(mt-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${$}_${st}_a`,Pt,_t,j*(z*.4+bt*.45),"YXZ"),this.setBonePose(`wingFinger_${$}_${st}_b`,Pt*.5,_t*.25,j*(z*.7+bt*.75),"YXZ")}const wt=1-e.pelvicFinFlare;for(let st=1;st<=3;st++)this.setBonePose(`pelvicFin_${$}_${st}`,0,0,-j*wt*1.18,"XYZ")}for(const $ of this.asset.dorsalSpineMeshes)$.morphTargetInfluences&&$.morphTargetInfluences.length>0&&($.morphTargetInfluences[0]=e.dorsalSpineSplit);const K=e.autoSyncProstheticTail?e.rightTailFinFlare:e.leftProstheticFinFlare,G=Math.min(e.rightTailFinFlare,K),W=G<0?Math.sin(Math.abs(G)*1.38)*.53:.02;for(let $=1;$<=10;$++){const j=$/10,Y=$>=9,it=Y?0:e.tailYaw*.13+e.tailCurl*.18*Math.pow(j,1.4)+a*j,gt=Y?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-$*.48)*.085*(.4+.6*j);let Q=Y?0:e.tailPitch*.088*(.45+j)+gt;if(!Y&&n<.85&&$>=2&&$<=8){const F=Math.max(0,(W-.05)*.135)*(1-n);Q<F&&(Q=q.lerp(Q,F,fs(1,5,$)))}if(this.setBonePose(`tail_${$}`,Q,it,0,"YXZ"),n<.85){const F=this.asset.rig.boneMap.get(`tail_${$}`);F.parent.updateMatrixWorld(!0),F.updateMatrixWorld(!0);const wt=this.tmpVecC.setFromMatrixPosition(F.matrixWorld),mt=As(wt.x,wt.z)+($>=8?.055+W:.065);if(wt.y<mt&&$>1){const _t=F.parent,Pt=F.position.length(),bt=Math.min(.45,(mt-wt.y)/Math.max(.15,Pt))*(1-n);this.tmpEuler.set(bt,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),_t.quaternion.multiply(this.tmpQuat),_t.updateMatrixWorld(!0)}}}const O=1.38,nt=e.rightTailFinFlare*O,at=K*O;this.setBonePose("tailFinHinge_R",0,0,-nt,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,at,"XYZ");for(let $=1;$<=5;$++)this.setBonePose(`tailFin_R_${$}`,0,0,0),this.setBonePose(`tailFin_L_${$}`,0,0,0);this.setBonePose("prostheticCollar",0,0,at*.22),this.setBonePose("prostheticRod",0,0,0),this.asset.rig.rootBone.updateMatrixWorld(!0)}}function vu(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function nh(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function $i(i){const t=Math.max(0,Math.min(1,(i-1.44)/.625)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.78)/.22),2))),n=.054*nh(t,.36,.23),s=-.046*vu(.5,.88,t),o=.013*nh(t,.77,.13);return(.204+n+s+o)*e}function Ei(i){const t=Math.max(0,Math.min(1,(i-1.55)/.5149999999999999)),e=.022*Math.pow(1-vu(0,.44,t),1.55),n=-.008*Math.sin(t*Math.PI);return 1.482+e+n}const xu=[{rootX:.018,rootY:.116,rootZ:-3.34,tipX:.34,tipY:.126,tipZ:-3.32},{rootX:.018,rootY:.116,rootZ:-3.5,tipX:.45,tipY:.13,tipZ:-3.52},{rootX:.018,rootY:.116,rootZ:-3.66,tipX:.44,tipY:.13,tipZ:-3.74},{rootX:.018,rootY:.116,rootZ:-3.82,tipX:.34,tipY:.125,tipZ:-3.96},{rootX:.018,rootY:.116,rootZ:-3.97,tipX:.18,tipY:.12,tipZ:-4.14}],Mu=[{parentBone:"tail_1",rootX:.155,rootY:.7,rootZ:-.78,tipX:.37,tipY:.68,tipZ:-.92},{parentBone:"tail_2",rootX:.13,rootY:.62,rootZ:-1.02,tipX:.42,tipY:.59,tipZ:-1.19},{parentBone:"tail_2",rootX:.105,rootY:.55,rootZ:-1.24,tipX:.31,tipY:.52,tipZ:-1.42}],fo=new T(.415,.035,.909).normalize(),mo=new T(-.415,.035,.909).normalize(),da=.075;function wu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.292:.274),o=t?.935:-.51,a=.036,r=t?.074:.069,l=[],c=[-.84,-.28,.28,.84];for(let h=0;h<4;h++){const u=c[h]+e*.05,p=h===1||h===2,f=(t?.106:.098)*(p?1:.86),g=(t?.054:.05)*(p?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.032,dirX:Math.sin(u)*.9,dirZ:Math.cos(u),toeLength:f,baseRadius:p?.037:.033,tipRadius:p?.024:.021,clawLength:g})}return l}function z_(){const i=[{name:"root",parent:null,worldPos:[0,.79,.11]},{name:"pelvis",parent:"root",worldPos:[0,.77,-.5]},{name:"spine_1",parent:"root",worldPos:[0,.78,.13]},{name:"spine_2",parent:"spine_1",worldPos:[0,.84,.46]},{name:"chest",parent:"spine_2",worldPos:[0,.91,.79]},{name:"neck_1",parent:"chest",worldPos:[0,1.04,.99]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.19,1.14]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.35,1.28]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.47,1.4]},{name:"head",parent:"neck_4",worldPos:[0,1.535,1.51]},{name:"eye_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eye_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidUpper_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidLower_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidLower_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"teethUpper",parent:"head",worldPos:[0,1.495,1.8]},{name:"jaw",parent:"head",worldPos:[0,1.49,1.55]},{name:"teethLower",parent:"jaw",worldPos:[0,1.472,1.8]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.472,1.62]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.472,1.72]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.472,1.82]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.47,1.91]},{name:"ear_L_1",parent:"head",worldPos:[.118,1.665,1.48]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.142,1.748,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.156,1.815,1.29]},{name:"ear_R_1",parent:"head",worldPos:[-.118,1.665,1.48]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.142,1.748,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.156,1.815,1.29]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.222,1.568,1.49]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.268,1.592,1.4]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.222,1.568,1.49]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.268,1.592,1.4]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.2,.87,.81]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.232,.75,.83]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.278,.435,.74]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.288,.142,.87]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.292,.04,.965]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.192,.71,-.5]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.256,.425,-.32]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.27,.215,-.61]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.274,.04,-.475]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.21,.96,.69]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.34,1,.67]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.88,1.05,.46]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.56,1.11,.86]}),[{mid:[n*1.48,1.08,.16],tip:[n*1.4,.99,-.6]},{mid:[n*1.84,1.09,.22],tip:[n*2.04,1,-.56]},{mid:[n*2.18,1.11,.33],tip:[n*2.62,1.02,-.4]},{mid:[n*2.48,1.13,.48],tip:[n*3.14,1.05,-.14]},{mid:[n*2.78,1.15,.68],tip:[n*3.54,1.08,.22]},{mid:[n*2.94,1.17,.86],tip:[n*3.9,1.12,.7]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.72,-.76],[0,.63,-1.08],[0,.5,-1.43],[0,.36,-1.8],[0,.24,-2.18],[0,.16,-2.56],[0,.12,-2.94],[0,.116,-3.3],[0,.116,-3.66],[0,.116,-4.06]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;Mu.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.02,.116,-3.65]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.02,.116,-3.65]});for(const e of["L","R"]){const n=e==="L"?1:-1;xu.forEach((s,o)=>{i.push({name:`tailFin_${e}_${o+1}`,parent:`tailFinHinge_${e}`,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i}function O_(){const i=z_(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new _l;c.name=l.name;const h=new T(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),p=s.get(l.parent);c.position.copy(h).sub(p),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new va(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}const tn={neckArch:.24,neckYaw:-.1,headPitch:-.02,headYaw:-.18,headRoll:.16,earPerk:.82,earAsymmetry:.1,cheekNubFlare:.52,eyeYaw:-.08,eyePitch:.04,pupilDilation:.84,blink:0,squint:.08,jawOpen:0,teethExtension:0,tongueExtend:.1,tongueCurl:.05,wingUnfurl:.36,wingFlap:.06,wingSweep:-.08,wingCamber:.28,wingWristFold:0,wingTipLag:0,coyWingVeil:0,pelvicFinFlare:.88,dorsalSailFlex:.24,spineArch:.12,spineTwist:-.04,forelegStance:.14,hindlegStance:.08,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:-.26,tailPitch:.24,tailCurl:-.24,tailWaveAmp:0,tailWavePhase:0,rightHeartFinFlare:.18,leftHeartFinFlare:.18,syncHeartTailFlukes:!0,subtleBreathing:!0,iridescentShimmer:.78,pastelTint:.78,radiantGlow:.34,biolumGlow:0,plasmaGlow:.04,thermalCloak:0},H_=[{id:"serene-mate",label:"Serene Mate",subtitle:"Sweet Gaze & Heart Tail",patch:{...tn}},{id:"curious-cat",label:"Curious Tilt",subtitle:"Adorable Head-Roll & Big Eyes",patch:{...tn,headRoll:.68,headPitch:.1,headYaw:-.06,earPerk:.98,earAsymmetry:.42,pupilDilation:.96,squint:0,jawOpen:.06,teethExtension:0,coyWingVeil:0,thermalCloak:0,plasmaGlow:.08}},{id:"happy-purr",label:"Happy Purr",subtitle:"Blissful Feline Smile",patch:{...tn,neckArch:.42,neckYaw:-.22,headYaw:-.28,headPitch:-.1,headRoll:.28,earPerk:.66,squint:.68,blink:.22,pupilDilation:.9,jawOpen:.14,teethExtension:0,tongueExtend:.35,tailYaw:-.45,tailCurl:-.48,rightHeartFinFlare:.04,leftHeartFinFlare:.04,coyWingVeil:0,thermalCloak:0,iridescentShimmer:.95}},{id:"coy-wing-veil",label:"Coy Wing Peek",subtitle:"Shy Wing-Curtain Pose",patch:{...tn,headYaw:-.26,headPitch:-.12,headRoll:.34,eyeYaw:.22,eyePitch:.14,pupilDilation:.88,earPerk:.58,coyWingVeil:.92,wingUnfurl:.52,thermalCloak:0}},{id:"hidden-world-biolum",label:"Hidden World Glow",subtitle:"Neon Rose & Cyan Filigree",patch:{...tn,wingUnfurl:.78,wingFlap:.22,neckArch:.34,headRoll:.22,pupilDilation:.94,iridescentShimmer:.96,radiantGlow:.64,biolumGlow:.96,plasmaGlow:.42,thermalCloak:0}},{id:"mirror-cloak",label:"Mirror Cloak",subtitle:"Plasma Silicate Stealth",patch:{...tn,wingUnfurl:.72,wingFlap:.24,neckArch:.3,headPitch:.12,pupilDilation:.62,coyWingVeil:0,plasmaGlow:.78,iridescentShimmer:1,thermalCloak:.86}},{id:"strike-hiss",label:"Strike Hiss",subtitle:"Fangs & Orchid Plasma",patch:{...tn,forelegStance:-.55,spineArch:.42,neckArch:-.18,headPitch:-.14,headRoll:-.08,earPerk:.06,squint:.48,pupilDilation:.06,jawOpen:.76,teethExtension:1,tongueExtend:.48,tongueCurl:.45,wingUnfurl:.84,wingFlap:.38,wingSweep:.32,coyWingVeil:0,dorsalSailFlex:1,plasmaGlow:.92,thermalCloak:0}}];function ms(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const V_=new T(-.19,.98,.06).normalize(),W_=new T(.19,.98,.06).normalize(),yu=new T().crossVectors(V_,fo).normalize(),G_=new T().crossVectors(fo,yu).normalize(),bu=new T().crossVectors(W_,mo).normalize(),X_=new T().crossVectors(mo,bu).normalize();class Y_{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new bn;tmpQuat=new je;tmpQuatB=new je;tmpVecA=new T;tmpVecB=new T;tmpVecC=new T;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...tn,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,tn),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.syncHeartTailFlukes&&(t.rightHeartFinFlare!==void 0?this.state.leftHeartFinFlare=t.rightHeartFinFlare:t.leftHeartFinFlare!==void 0?this.state.rightHeartFinFlare=t.leftHeartFinFlare:t.syncHeartTailFlukes===!0&&(this.state.leftHeartFinFlare=this.state.rightHeartFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingFelineIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0,felineHeadMicroRoll:0};const e=(t+2.15)%4.35;let n=0;e<.16?n=Math.sin(e/.16*Math.PI):e>.25&&e<.4&&Math.floor((t+2.15)/4.35)%3===1&&(n=Math.sin((e-.25)/.15*Math.PI));const s=(t+.8)%5.6,o=s<.2?Math.sin(s/.2*Math.PI)*.095:0,a=(t+3.2)%6.8,r=a<.18?-Math.sin(a/.18*Math.PI)*.085:0,l=Math.sin(t*.68+1.4)*.03+Math.sin(t*1.85)*.012,c=Math.cos(t*.54+2.1)*.022,h=Math.sin(t*1.25+.8)*.028,u=Math.sin(t*.62+.7)*.026;return{autoBlink:n,earTwitchL:o,earTwitchR:r,gazeMicroX:l,gazeMicroY:c,pupilPulse:h,felineHeadMicroRoll:u}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),p=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),p.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),p.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const f=new ee().copy(this.asset.rootGroup.matrixWorld).invert(),g=new ee().multiplyMatrices(f,c.parent.matrixWorld),v=new T().setFromMatrixPosition(new ee().multiplyMatrices(g,new ee().makeTranslation(c.position.x,c.position.y,c.position.z))),m=l.bindWorldPositions.get(t),d=l.bindWorldPositions.get(e),M=l.bindWorldPositions.get(n),b=new T().subVectors(d,m),_=new T().subVectors(M,d),S=b.length(),w=_.length(),A=M.clone();a&&(A.add(a),A.y=Math.max(M.y,A.y));const E=new T().subVectors(A,v),y=E.length(),x=(S+w)*.968,P=Math.abs(S-w)+.08,C=q.clamp(y,P,x),R=E.normalize(),L=o.clone().addScaledVector(R,-o.dot(R)).normalize(),D=q.clamp((S*S+C*C-w*w)/(2*S*C),-1,1),k=Math.sqrt(Math.max(0,1-D*D)),B=v.clone().addScaledVector(R,S*D).addScaledVector(L,S*k),N=v.clone().addScaledVector(R,C),H=new T().subVectors(B,v).normalize(),V=new T().subVectors(N,B).normalize(),X=new je().setFromUnitVectors(b.clone().normalize(),H),K=new je().setFromUnitVectors(_.clone().normalize(),V),G=new je().setFromRotationMatrix(g);c.quaternion.copy(G).invert().multiply(X),h.quaternion.copy(X).invert().multiply(K),u.quaternion.copy(K).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;const o=64,a=10.8,r=q.clamp(-n*.06,-.3,.3),l=q.clamp(-s*.06,-.3,.3);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=q.clamp(e.airborneFactor,0,1),s=this.sampleLivingFelineIdleMicros(t),o=e.subtleBreathing&&e.squint>.35?Math.sin(t*24)*.08*e.squint:0,a=e.subtleBreathing?Math.sin(t*1.68+.9)*.8+Math.sin(t*3.36+.9)*.2+o:0,r=e.subtleBreathing?Math.sin(t*1.28+1.2)*.026:0,l=ms(.02,.55,Math.abs(e.legFlightTuck))*(1-n),c=Math.max(n,l),h=1-c,u=e.forelegStance>=0?e.forelegStance*.05:e.forelegStance*.255,p=e.hindlegStance>=0?e.hindlegStance*.044:e.hindlegStance*.23,f=.52*u+.48*p,g=q.clamp((p-u)*.44,-.22,.24),v=q.clamp(e.limbStride,-1,1)*.045*h,m=l*.34;this.setBonePose("root",g*h,v,0,"XYZ",0,f*h+m+a*.004,0);const d=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+d,-e.spineTwist*.05-v*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+a*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+a*.008,e.spineTwist*.07,0),this.setBonePose("chest",-g*.32*h+a*.01-d*.6,e.spineTwist*.07+v*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const M=q.clamp(e.limbStride,-1,1),b=Math.max(0,-e.forelegStance),_=Math.max(0,-e.hindlegStance);for(const Y of["L","R"]){const it=Y==="L"?1:-1,gt=this.asset.rig.boneMap.get(`scapula_${Y}`);if(this.setBonePose(`scapula_${Y}`,0,0,0),gt.updateMatrixWorld(!0),c<.999){const Q=it*M*.21,F=-it*M*.2,wt=Math.max(0,it*M)*Math.sin(Math.abs(M)*Math.PI)*.038,st=Math.max(0,-it*M)*Math.sin(Math.abs(M)*Math.PI)*.034,mt=new T(it*b*.05,wt,Q+b*.04),_t=new T(it*_*.045,st,F-_*.036);this.asset.rootGroup.updateMatrixWorld(!1);const Pt=new ee().copy(this.asset.rootGroup.matrixWorld).invert(),bt=this.asset.rig.boneMap.get(`shoulder_${Y}`);bt.position.copy(this.restPos.get(`shoulder_${Y}`)),bt.updateMatrixWorld(!0);const z=this.tmpVecC.setFromMatrixPosition(bt.matrixWorld).applyMatrix4(Pt),I=this.asset.rig.bindWorldPositions.get(`wrist_${Y}`).clone().add(mt),tt=z.distanceTo(I)-.615;tt>0&&(this.setBonePose(`scapula_${Y}`,0,0,0,"XYZ",0,-tt*1.08*h,0),gt.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${Y}`,`elbow_${Y}`,`wrist_${Y}`,`forepaw_${Y}`,this.tmpVecA.set(it*(.2+.16*b),-.08+.18*b,-1).normalize(),mt,wt*2.2),this.solvePlantedLimbIK(`hip_${Y}`,`knee_${Y}`,`ankle_${Y}`,`hindpaw_${Y}`,this.tmpVecB.set(it*(.2+.14*_),.14+.16*_,1).normalize(),_t,st*2)}if(c>.001){const Q=q.clamp(e.legFlightTuck,-1,1),F=e.wingFlap*.075*c,wt=Math.sin(t*2.15+(Y==="L"?0:1.15))*.048*c,st=Math.cos(t*1.65+(Y==="L"?.6:2.1))*.042*c,mt=(Q>=0?.88*Q:-.44*-Q)+F*.65+wt*.5,_t=Q>=0?-it*.06*Q:0,Pt=(Q>=0?it*.09*Q:it*.05*-Q)+it*st*.35,bt=(Q>=0?.36*Q:.28*-Q)-F*.55+st*.65,z=(Q>=0?.42*Q:.2*-Q)+wt*.7,I=(Q>=0?.38*Q:-.1*-Q)+st*.55,tt=(Q>=0?1.18*Q:-.48*-Q)+F*.55+st*.55,pt=(Q>=0?-it*.05*Q:0)+it*wt*.25,vt=(Q>=0?it*.07*Q:it*.05*-Q)+it*wt*.3,ft=(Q>=0?-.68*Q:.34*-Q)-F*.5-wt*.65,Dt=(Q>=0?.82*Q:-.16*-Q)+F*.45+st*.75,dt=(Q>=0?.64*Q:.16*-Q)+wt*.6,St=(Wt,xt,Ct,$t)=>{const Zt=this.asset.rig.boneMap.get(Wt);this.tmpEuler.set(xt,Ct,$t,"XYZ"),this.tmpQuat.copy(this.restQuat.get(Wt)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),c>=.999?(Zt.position.copy(this.restPos.get(Wt)),Zt.quaternion.copy(this.tmpQuat)):Zt.quaternion.slerp(this.tmpQuat,c)};St(`shoulder_${Y}`,mt,_t,Pt),St(`elbow_${Y}`,bt,0,0),St(`wrist_${Y}`,z,0,0),St(`forepaw_${Y}`,I,0,0),St(`hip_${Y}`,tt,pt,vt),St(`knee_${Y}`,ft,0,0),St(`ankle_${Y}`,Dt,0,0),St(`hindpaw_${Y}`,dt,0,0)}}const S=ms(.32,.85,e.jawOpen),w=e.headRoll+s.felineHeadMicroRoll*(1-n),A=-e.neckArch*.12-a*.009-S*.032,E=e.neckYaw*.14;this.setBonePose("neck_1",A+e.headPitch*.04,E+e.headYaw*.05,w*.05,"YXZ"),this.setBonePose("neck_2",A+e.headPitch*.07,E+e.headYaw*.09,w*.08,"YXZ"),this.setBonePose("neck_3",A*.9+e.headPitch*.11,E+e.headYaw*.14,w*.12,"YXZ"),this.setBonePose("neck_4",A*.8+e.headPitch*.15,E*.85+e.headYaw*.19,w*.16,"YXZ"),this.setBonePose("head",e.headPitch*.36+a*.01-S*.045,e.headYaw*.46,w*.4,"YXZ");const y=q.clamp(e.earPerk-S*.32,0,1),x=(y-.5)*.68,P=w*.2;for(const Y of["L","R"]){const it=Y==="L"?1:-1,gt=Y==="L"?s.earTwitchL:s.earTwitchR,Q=it*(e.earAsymmetry*.28+P)+gt,F=x+Q+this.earLagPitch*.65,wt=(1-y)*.32-it*this.earLagYaw*.5;this.setBonePose(`ear_${Y}_1`,F*.6,-it*wt,it*F*.22,"YXZ"),this.setBonePose(`ear_${Y}_2`,F*.34+this.earLagPitch*.32,-it*wt*.32,0,"YXZ"),this.setBonePose(`ear_${Y}_3`,F*.22+this.earLagPitch*.22,0,0,"YXZ");const st=(q.clamp(e.cheekNubFlare+S*.2,0,1)-.5)*.4;this.setBonePose(`cheekUpper_${Y}_1`,st*.28,-it*(st*.5+this.earLagYaw*.22),0)}const C=q.clamp(e.eyeYaw+s.gazeMicroX,-1,1),R=q.clamp(e.eyePitch+s.gazeMicroY,-1,1),L=Math.max(e.blink,s.autoBlink*(1-e.blink)),D=q.clamp(e.squint+S*.24,0,1);for(const Y of["L","R"]){const it=Y==="L"?yu:bu,gt=Y==="L"?G_:X_;this.tmpQuat.setFromAxisAngle(gt,C*.34),this.tmpQuatB.setFromAxisAngle(it,-R*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${Y}`,this.tmpQuat);const Q=R>0?-R*.14:-R*.22,F=R>0?R*.12:R*.08,wt=q.clamp(Math.max(L,D*.54)+Q*(1-L),-.14,1),st=q.clamp(Math.max(L,D*.62)+F*(1-L),-.1,1);this.tmpQuat.setFromAxisAngle(it,wt*.72),this.setBoneAxisQuat(`eyelidUpper_${Y}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(it,-st*.64),this.setBoneAxisQuat(`eyelidLower_${Y}`,this.tmpQuat)}const k=q.clamp(e.pupilDilation+s.pupilPulse-S*.28,0,1),B=this.asset.materials;B.eyeMaterials.uniforms.uPupilDilation.value=k,B.eyeMaterials.uniforms.uBiolumGlow.value=e.biolumGlow,B.eyeMaterials.uniforms.uPlasmaGlow.value=e.plasmaGlow,B.eyeMaterials.uniforms.uThermalCloak.value=e.thermalCloak,B.uniforms.uTime.value=t,B.uniforms.uIridescentShimmer.value=e.iridescentShimmer,B.uniforms.uPastelTint.value=e.pastelTint,B.uniforms.uRadiantGlow.value=e.radiantGlow,B.uniforms.uBiolumGlow.value=e.biolumGlow,B.uniforms.uPlasmaGlow.value=e.plasmaGlow,B.uniforms.uThermalCloak.value=e.thermalCloak;const N=B.syncCloakTransparency(e.thermalCloak);for(const Y of this.asset.hullDepthMeshes)Y.visible=N;this.setBonePose("jaw",e.jawOpen*.64,0,0);const H=.28+.72*ms(0,.14,e.jawOpen),V=1-e.teethExtension*H;this.setBonePose("teethUpper",0,0,0,"XYZ",0,V*.022,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-V*.02,0);const X=ms(.06,.48,e.jawOpen),K=e.tongueExtend*.039*X;if(e.tongueCurl>=0){const Y=-e.tongueCurl*(.016+.19*X);this.setBonePose("tongue_1",Y*.35,0,0,"XYZ",0,0,K),this.setBonePose("tongue_2",Y*.65,0,0),this.setBonePose("tongue_3",Y*.95,0,0),this.setBonePose("tongue_4",Y*1.15,0,0)}else{const Y=X*ms(.2,.95,e.tongueExtend),it=-e.tongueCurl*Y;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,K),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",it*.12,0,0),this.setBonePose("tongue_4",it*.18,0,0)}const G=q.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),W=q.lerp(.11,.74,c);for(const Y of["L","R"]){const it=Y==="L"?1:-1,gt=Y==="R"?e.coyWingVeil*h:0,Q=e.wingFlap*(.25+.75*e.wingUnfurl),F=it*(Q>=0?Q*.74:Q*W),wt=Q<0?Q*q.lerp(.04,.26,c)*e.wingUnfurl:0,st=it*(e.wingSweep*.44-gt*.68),mt=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${Y}`,.05*G+gt*.08,it*.12*G,F*.18,"YXZ"),this.setBonePose(`wingShoulder_${Y}`,e.wingCamber*.09+gt*.18,it*.82*G*(1-gt*.65)+st,F-it*.22*G+it*gt*.32,"YXZ"),this.setBonePose(`wingElbow_${Y}`,gt*.12,-it*(1.42*G*(1-gt*.58)+mt*.45-gt*.42),it*.86*G*(1-gt*.45)+F*.22+it*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${Y}`,-.35*G-e.wingCamber*.18-gt*.28,it*(1.32*G*(1-gt*.6)+mt*.55-gt*.48)+st*.35,it*.12*G+it*wt*.3+it*e.wingTipLag*.26,"YXZ");for(let Pt=1;Pt<=6;Pt++){const bt=(Pt-1)/5,z=it*(-.38+bt*.58)*G*(1-gt*.6),I=-e.wingCamber*(.14+.18*(1-bt))-.1*G-gt*.24,tt=e.wingTipLag*(.18+.26*bt),pt=Q>=0?-Q*.22:-Q*q.lerp(.06*Math.pow(Math.max(0,(bt-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${Y}_${Pt}_a`,I,z,it*(pt*.4+tt*.45),"YXZ"),this.setBonePose(`wingFinger_${Y}_${Pt}_b`,I*.5,z*.25,it*(pt*.7+tt*.75),"YXZ")}const _t=1-e.pelvicFinFlare;for(let Pt=1;Pt<=3;Pt++)this.setBonePose(`pelvicFin_${Y}_${Pt}`,0,0,-it*_t*1.18,"XYZ")}for(const Y of this.asset.dorsalSailMeshes)Y.morphTargetInfluences&&Y.morphTargetInfluences.length>0&&(Y.morphTargetInfluences[0]=e.dorsalSailFlex);const O=e.syncHeartTailFlukes?e.rightHeartFinFlare:e.leftHeartFinFlare,nt=Math.min(e.rightHeartFinFlare,O),at=nt<0?Math.sin(Math.abs(nt)*1.38)*.48:.02;this.asset.rootGroup.updateMatrixWorld(!1);for(let Y=1;Y<=10;Y++){const it=Y/10,gt=Y>=9,Q=gt?0:e.tailYaw*.14+e.tailCurl*.19*Math.pow(it,1.4)+r*it,F=gt?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-Y*.48)*.085*(.4+.6*it);let wt=gt?0:e.tailPitch*.088*(.45+it)+F;if(!gt&&n<.85&&Y>=2&&Y<=8){const st=Math.max(0,(at-.05)*.135)*(1-n);wt<st&&(wt=q.lerp(wt,st,ms(1,5,Y)))}if(this.setBonePose(`tail_${Y}`,wt,Q,0,"YXZ"),n<.85){const st=this.asset.rig.boneMap.get(`tail_${Y}`);st.parent.updateMatrixWorld(!0),st.updateMatrixWorld(!0);const mt=this.tmpVecC.setFromMatrixPosition(st.matrixWorld),Pt=As(mt.x,mt.z)+(Y>=8?.05+at:.058);if(mt.y<Pt&&Y>1){const bt=st.parent,z=st.position.length(),I=Math.min(.45,(Pt-mt.y)/Math.max(.14,z))*(1-n);this.tmpEuler.set(I,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),bt.quaternion.multiply(this.tmpQuat),bt.updateMatrixWorld(!0)}}}const $=-e.rightHeartFinFlare*1.38,j=O*1.38;this.setBonePose("tailFinHinge_R",0,0,$,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,j,"XYZ");for(let Y=1;Y<=5;Y++)this.setBonePose(`tailFin_R_${Y}`,0,0,0),this.setBonePose(`tailFin_L_${Y}`,0,0,0);this.asset.rig.rootBone.updateMatrixWorld(!0)}}function yi(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Oe(i,t,e,n,s){return i<=t||i>=s?0:i<e?yi(t,e,i):i>n?1-yi(n,s,i):1}function Js(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function $_(i,t,e){return i+Js(t-i)*e}function q_(i,t,e){const s=i/Math.max(1,64);let o=e;for(let a=0;a<64;a++){const r=(a+.5)*s,l=yi(.4,2.4,r),c=Oe(r,7.6,8.8,15.2,16.5),h=1-.18*yi(18.5,22.5,r),u=q.lerp(4.45,5.18,l)*h,p=q.lerp(u,1.65,c)*t;o+=p*s}return o}class Xi{static DURATION_SEC=25;isPlaying=!1;isPaused=!1;loop=!1;followCamera=!0;subjectMode="duet";toothlessAsset;toothlessController;lightFuryAsset;lightFuryController;toothlessSpline;lightFurySpline;flightTime=0;tmpPos=new T;tmpPosAhead=new T;tmpPosBehind=new T;tmpPosLook=new T;tmpVel=new T;tmpEuler=new bn;tmpQuat=new je;prevWorldAnchor=new T(0,1.15,.35);constructor(t,e,n,s){this.toothlessAsset=t,this.toothlessController=e,this.lightFuryAsset=n,this.lightFuryController=s;const o=On.position.clone(),a=Hn.position.clone();this.toothlessSpline=new Nn([o.clone(),new T(6.8,3.8,8.2),new T(16.4,11.4,19.5),new T(24.5,17.6,33.5),new T(12.5,19.6,44.5),new T(-6.5,17.2,39.5),new T(-19.5,6.8,29),new T(-22.5,-3.2,18.5),new T(-17.5,10.6,3.5),new T(-2.5,9.8,-5.8),new T(3.85,3.15,-2.15),o.clone()],!1,"centripetal",.5),this.lightFurySpline=new Nn([a.clone(),new T(-3.2,4.1,7.8),new T(6.2,12,20.4),new T(14.2,18.3,34.8),new T(2.2,20.2,46),new T(-16.8,17.8,41),new T(-29.8,7.4,30.2),new T(-32.8,-2.8,19.2),new T(-27.2,11.2,4.2),new T(-12.2,10.2,-5.8),new T(-5.15,3.05,-2.35),a.clone()],!1,"centripetal",.5)}setSubjectMode(t){this.subjectMode!==t&&(this.subjectMode=t,this.isPlaying&&(this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())))}resetDragonToPerch(t){t==="toothless"?(this.toothlessAsset.rootGroup.position.copy(On.position),this.toothlessAsset.rootGroup.rotation.set(0,On.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0),this.toothlessController.resetToHeroPose()):this.lightFuryAsset&&this.lightFuryController&&(this.lightFuryAsset.rootGroup.position.copy(Hn.position),this.lightFuryAsset.rootGroup.rotation.set(0,Hn.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0),this.lightFuryController.resetToHeroPose())}computeDesiredWorldFocus(){const t=this.toothlessAsset.rig.boneMap.get("chest"),e=new T().setFromMatrixPosition(t.matrixWorld);if(!this.lightFuryAsset)return e;const n=this.lightFuryAsset.rig.boneMap.get("chest"),s=new T().setFromMatrixPosition(n.matrixWorld);return this.subjectMode==="toothless"?e:this.subjectMode==="light-fury"?s:e.add(s).multiplyScalar(.5)}startFromBeginning(){this.flightTime=0,this.isPlaying=!0,this.isPaused=!1,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(0),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}togglePlayPause(){if(!this.isPlaying){this.startFromBeginning();return}this.isPaused=!this.isPaused}stopAndResetToPerch(){this.isPlaying=!1,this.isPaused=!1,this.flightTime=0,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.prevWorldAnchor.set(0,1.15,.35)}scrubToProgress(t){const e=q.clamp(t,0,1);this.isPlaying||(this.isPlaying=!0,this.isPaused=!0),this.flightTime=e*Xi.DURATION_SEC,this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}getPhaseInfo(){const t=this.flightTime,e=this.subjectMode==="duet";let n=e?"Twin Perch Ready":"Perched Ready";return this.isPlaying&&(t<2.8?n=e?"1/6 · Twin Courtship Cliff Leap":"1/6 · Launch Crouch & Cliff Leap":t<7.8?n="2/6 · Majestic Climbing Wingbeats":t<13?n=e?"3/6 · Wingtip Courtship Sky Soar":"3/6 · High-Altitude Sky Soar":t<17.4?n=e?"4/6 · Mirror-Cloak Ocean Skim":"4/6 · Peregrine Ocean Skim":t<21.8?n="5/6 · Cushioned Air-Brake Hover":n=e?"6/6 · Twin Touchdown & Settle":"6/6 · Four-Paw Landing & Settle"),{isPlaying:this.isPlaying,isPaused:this.isPaused,loop:this.loop,followCamera:this.followCamera,subjectMode:this.subjectMode,progress:q.clamp(t/Xi.DURATION_SEC,0,1),elapsedSec:t,durationSec:Xi.DURATION_SEC,phaseLabel:n}}update(t,e,n){if(!this.isPlaying)return this.prevWorldAnchor.set(0,1.15,.35),{worldFocus:this.prevWorldAnchor,isAirborne:!1};if(!this.isPaused&&(this.flightTime+=t,this.flightTime>=Xi.DURATION_SEC))if(this.loop)this.flightTime%=Xi.DURATION_SEC;else return this.stopAndResetToPerch(),{worldFocus:this.prevWorldAnchor,isAirborne:!1};this.applyAtTime(this.flightTime);const s=this.computeDesiredWorldFocus();if(this.followCamera){const r=s.clone().sub(this.prevWorldAnchor);n.add(r),e.position.add(r);const l=Oe(this.flightTime,1.8,5.2,18.8,23.2),c=this.subjectMode==="duet"?9.4:4.95,h=this.subjectMode==="duet"?17.8:11.2,u=q.lerp(c,h,l),p=e.position.clone().sub(n),f=Math.max(.5,p.length()),g=q.lerp(f,u,1-Math.exp(-2.2*Math.max(.016,t)));p.setLength(g),e.position.copy(n).add(p);const v=xs(e.position.x,e.position.z),m=Math.max(-8.8,v+1.8);e.position.y<m&&(e.position.y=m),n.lerp(s,1-Math.exp(-7.5*Math.max(.016,t)))}this.prevWorldAnchor.copy(s);const o=this.toothlessController.state.airborneFactor,a=this.lightFuryController?.state.airborneFactor??0;return{worldFocus:s,isAirborne:Math.max(o,a)>.15}}computeKinematicsAlongSpline(t,e,n,s,o,a){let h=0;if(s<=2.05)h=0;else if(s>=21.85)h=1;else{const L=(s-2.05)/19.8,D=L*L*(3-2*L),k=Math.sin(L*Math.PI*2-1.2)*.024*Math.sin(L*Math.PI);h=q.clamp(q.lerp(L,D,.38)+k,0,1)}const u=Oe(s,2.05-.1,2.05+.72,21.85-.75,21.85+.08),p=Oe(s,1.65,2.75,7.2,8.6),f=Oe(s,7.8,9,12.2,13.4),g=Oe(s,12.6,13.6,16.4,17.5),v=Oe(s,15.8,16.8,18,19),m=Oe(s,18,19.2,21.1,22.05),d=q_(s,a,o),M=q.clamp(p*.94+v*.82+m*.88+(1-f)*(1-g)*.16,0,.96)*u,b=Math.sin(d),_=q.clamp(b+.14*Math.sin(d*2),-1,1),S=Math.cos(d),w=-S*.26*M,A=S*.056*M;let E=0,y=0,x=0,P=0;const C=e.clone(),R=new je().setFromEuler(new bn(0,n,0,"YXZ"));if(h>1e-4&&h<.9999){const D=Math.max(0,h-.008),k=Math.min(1,h+.008);t.getPointAt(h,this.tmpPos),t.getPointAt(D,this.tmpPosBehind),t.getPointAt(k,this.tmpPosAhead),this.tmpVel.subVectors(this.tmpPosAhead,this.tmpPosBehind).normalize();const B=Math.atan2(this.tmpVel.x,this.tmpVel.z),N=Math.max(0,h-.028),H=Math.min(1,h+.028),V=t.getTangentAt(N),X=t.getTangentAt(H),K=Math.atan2(V.x,V.z),G=Math.atan2(X.x,X.z);E=Js(G-K)/Math.max(.005,H-N);const W=Math.min(1,h+.048);t.getTangentAt(W,this.tmpPosLook);const O=Math.atan2(this.tmpPosLook.x,this.tmpPosLook.z);y=Js(O-B),P=-Math.asin(q.clamp(this.tmpVel.y,-.84,.84));const nt=-.56*m,at=Oe(h,.025,.11,.86,.98);x=q.clamp(-E*.24,-.74,.74)*at;const $=Oe(h,0,.032,.962,1);C.lerpVectors(e,this.tmpPos,$),C.y+=w*at;const j=Oe(h,.04,.09,.91,.96);if(j>.001){const Q=xs(C.x,C.z),F=xs(C.x-3.6,C.z),wt=xs(C.x+3.6,C.z),st=Math.max(Q,F,wt),mt=Math.max(-7.2,st+3.8*j);C.y<mt&&(C.y=mt)}const Y=$_(n,B,$),it=(P*.86+nt+A)*$,gt=x*$;this.tmpEuler.set(it,Y,gt,"YXZ"),R.setFromEuler(this.tmpEuler)}return{u:h,airborneEnv:u,climbEnv:p,glideEnv:f,diveEnv:g,pulloutEnv:v,brakeEnv:m,flapPhase:d,activeFlapAmp:M,flapSin:_,flapCos:S,lookAheadTurnDiff:y,bankRoll:x,pathClimbPitch:P,outPos:C,outQuat:R}}applyToothlessFlightAtTime(t,e){const n=this.computeKinematicsAlongSpline(this.toothlessSpline,On.position,On.yaw,t,0,1);this.toothlessAsset.rootGroup.position.copy(n.outPos),this.toothlessAsset.rootGroup.quaternion.copy(n.outQuat),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const s=Oe(t,.35,1.15,1.68,2.1),o=Oe(t,1.82,2.05,2.35,2.85),a=Oe(t,19.2,20.2,21.75,22.25),r=Oe(t,21.75,22.2,22.85,23.9),l=Oe(t,23.1,23.65,24.35,24.95),c=e?.34*n.glideEnv+.36*l:-.22*l,h=ln.forelegStance*(1-s-r)-.88*s-.8*r+.18*l,u=ln.hindlegStance*(1-s-r)-.84*s-.76*r+.12*l,p=q.clamp(.82*n.airborneEnv-1.55*o-1.58*a,-.84,.88),f=q.lerp(ln.wingUnfurl+.34*s,1-.16*n.diveEnv,yi(.95,2.15,t)*(1-yi(22.1,24.1,t))),g=Math.max(0,n.flapCos)*.56*n.activeFlapAmp*(1-n.brakeEnv*.6),v=q.clamp(.68*s+n.flapSin*.92*n.activeFlapAmp+.14*n.glideEnv-.08*n.diveEnv,-1,1),m=-n.flapCos*.84*n.activeFlapAmp,d=q.clamp(ln.wingSweep*(1-n.airborneEnv)-.8*n.diveEnv+.74*n.brakeEnv-.16*s,-1,1),M=Math.max(0,-n.flapSin)*n.activeFlapAmp,b=q.clamp(.28+.46*M+.54*n.pulloutEnv+.64*n.brakeEnv-.18*n.diveEnv,.08,1),_=q.clamp(.22*(1-n.airborneEnv)+.95*n.glideEnv+.85*Math.min(1,Math.abs(n.bankRoll)*1.8)+.9*n.brakeEnv,.15,1),S=.24*(1-n.airborneEnv)+.18*n.climbEnv+.06*n.glideEnv+.42*n.diveEnv-.32*n.brakeEnv,w=q.clamp(n.bankRoll*.38,-.32,.32),A={airborneFactor:n.airborneEnv,forelegStance:h,hindlegStance:u,limbStride:0,legFlightTuck:p,spineArch:.2*s-.16*o+.24*n.brakeEnv+.08*(1-n.airborneEnv),spineTwist:q.clamp(-n.bankRoll*.35,-1,1),wingUnfurl:f,wingFlap:v,wingWristFold:g,wingTipLag:m,wingSweep:d,wingCamber:b,pelvicFinFlare:q.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.35*n.diveEnv,.3,1),dorsalSpineSplit:_,autoSyncProstheticTail:Math.abs(w)<.02,leftProstheticFinFlare:q.clamp(S+w,-1,1),rightTailFinFlare:q.clamp(S-w,-1,1),tailYaw:q.clamp(ln.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv+.28*l,-1,1),tailPitch:q.clamp(ln.tailPitch*(1-n.airborneEnv)-.34*n.brakeEnv+.15*n.pulloutEnv+.22*r,-1,1),tailCurl:.16*(1-n.diveEnv)+n.lookAheadTurnDiff*.8,tailWaveAmp:n.activeFlapAmp*.78+n.glideEnv*.16,tailWavePhase:n.flapPhase,neckArch:.16+.24*n.brakeEnv-.2*n.diveEnv,neckYaw:n.lookAheadTurnDiff*.95*n.airborneEnv+c*.45,headYaw:q.clamp(ln.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+c,-1,1),headPitch:q.clamp(ln.headPitch*(1-n.airborneEnv)-.34*s+n.pathClimbPitch*-.24*n.airborneEnv+.48*n.brakeEnv+.16*r,-1,1),headRoll:q.clamp(ln.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv-.22*l,-1,1),earPerk:q.clamp(.76+.2*s-.56*n.diveEnv-.2*n.climbEnv+.18*n.brakeEnv+.18*l,.12,1),earAsymmetry:n.bankRoll*.22+.12*l,cheekNubFlare:.5+.25*n.diveEnv,eyeYaw:q.clamp(n.lookAheadTurnDiff*1.7*n.airborneEnv+c*.55,-.85,.85),eyePitch:q.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:q.clamp(.76-.24*n.diveEnv+.16*l,.25,.96),squint:q.clamp(.36*n.diveEnv+.18*l,0,1),blink:Oe(t,23.35,23.45,23.52,23.64),jawOpen:q.clamp(.2*o+.15*n.pulloutEnv+.26*l,0,1),teethExtension:0,tongueExtend:.4*l,tongueCurl:.2*l};Object.assign(this.toothlessController.state,A)}applyLightFuryFlightAtTime(t,e){if(!this.lightFuryAsset||!this.lightFuryController)return;const n=this.computeKinematicsAlongSpline(this.lightFurySpline,Hn.position,Hn.yaw,t,.95,1.03);this.lightFuryAsset.rootGroup.position.copy(n.outPos),this.lightFuryAsset.rootGroup.quaternion.copy(n.outQuat),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const s=Oe(t,.32,1.12,1.65,2.08),o=Oe(t,1.8,2.04,2.32,2.82),a=Oe(t,19.2,20.2,21.75,22.25),r=Oe(t,21.75,22.2,22.85,23.9),l=Oe(t,23,23.6,24.4,24.96),c=Oe(t,13.2,14.2,15.8,16.9),h=Oe(t,8.2,9.4,12.2,13.4),u=Oe(t,12.6,13.6,16,17.2),p=e?-.36*n.glideEnv-.34*l:-.18*l,f=tn.forelegStance*(1-s-r)-.86*s-.78*r+.2*l,g=tn.hindlegStance*(1-s-r)-.82*s-.74*r+.12*l,v=q.clamp(.82*n.airborneEnv-1.52*o-1.56*a,-.84,.88),m=q.lerp(tn.wingUnfurl+.34*s,1-.18*n.diveEnv,yi(.9,2.12,t)*(1-yi(22.1,24.1,t))),d=Math.max(0,n.flapCos)*.54*n.activeFlapAmp*(1-n.brakeEnv*.6),M=q.clamp(.66*s+n.flapSin*.9*n.activeFlapAmp+.16*n.glideEnv-.08*n.diveEnv,-1,1),b=-n.flapCos*.86*n.activeFlapAmp,_=q.clamp(tn.wingSweep*(1-n.airborneEnv)-.82*n.diveEnv+.74*n.brakeEnv-.15*s,-1,1),S=Math.max(0,-n.flapSin)*n.activeFlapAmp,w=q.clamp(.26+.44*S+.52*n.pulloutEnv+.62*n.brakeEnv-.16*n.diveEnv,.08,1),A=.18*(1-n.airborneEnv)+.12*n.climbEnv+.02*n.glideEnv+.38*n.diveEnv-.28*n.brakeEnv,E=q.clamp(n.bankRoll*.36,-.3,.3),y={airborneFactor:n.airborneEnv,forelegStance:f,hindlegStance:g,limbStride:0,legFlightTuck:v,coyWingVeil:0,spineArch:.22*s-.15*o+.24*n.brakeEnv+.12*(1-n.airborneEnv),spineTwist:q.clamp(-n.bankRoll*.36,-1,1),wingUnfurl:m,wingFlap:M,wingWristFold:d,wingTipLag:b,wingSweep:_,wingCamber:w,pelvicFinFlare:q.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.32*n.diveEnv,.32,1),dorsalSailFlex:q.clamp(.24*(1-n.airborneEnv)+.92*n.glideEnv+.85*n.brakeEnv+.65*Math.abs(n.bankRoll),.15,1),syncHeartTailFlukes:Math.abs(E)<.02,leftHeartFinFlare:q.clamp(A+E,-1,1),rightHeartFinFlare:q.clamp(A-E,-1,1),tailYaw:q.clamp(tn.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv-.36*l,-1,1),tailPitch:q.clamp(tn.tailPitch*(1-n.airborneEnv)-.32*n.brakeEnv+.16*n.pulloutEnv+.2*r,-1,1),tailCurl:-.24*(1-n.airborneEnv)+n.lookAheadTurnDiff*.8-.26*l,tailWaveAmp:n.activeFlapAmp*.76+n.glideEnv*.18,tailWavePhase:n.flapPhase,neckArch:.24+.24*n.brakeEnv-.2*n.diveEnv+.14*l,neckYaw:n.lookAheadTurnDiff*.92*n.airborneEnv+p*.48,headYaw:q.clamp(tn.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+p,-1,1),headPitch:q.clamp(tn.headPitch*(1-n.airborneEnv)-.32*s+n.pathClimbPitch*-.24*n.airborneEnv+.46*n.brakeEnv+.14*r,-1,1),headRoll:q.clamp(tn.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv+.28*l,-1,1),earPerk:q.clamp(.82+.16*s-.56*n.diveEnv-.2*n.climbEnv+.16*n.brakeEnv,.14,1),earAsymmetry:n.bankRoll*.24+.18*l,cheekNubFlare:.52+.22*n.diveEnv,eyeYaw:q.clamp(n.lookAheadTurnDiff*1.65*n.airborneEnv+p*.55,-.85,.85),eyePitch:q.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:q.clamp(.84-.2*n.diveEnv+.1*l,.3,.96),squint:q.clamp(.3*n.diveEnv+.56*l,0,1),blink:Oe(t,23.18,23.28,23.36,23.48),jawOpen:q.clamp(.14*o+.12*n.pulloutEnv+.14*l,0,1),teethExtension:0,tongueExtend:.28*l,tongueCurl:.12*l,iridescentShimmer:q.clamp(.78+.22*(n.glideEnv+c),0,1),radiantGlow:q.clamp(.34+.36*(n.glideEnv+c),0,1),biolumGlow:q.clamp(.58*h,0,1),plasmaGlow:q.clamp(.04+.78*u,0,1),thermalCloak:q.clamp(.78*c,0,1)};Object.assign(this.lightFuryController.state,y)}applyPerchedSpectatorGaze(t,e){if(t==="toothless"){this.toothlessAsset.rootGroup.position.copy(On.position),this.toothlessAsset.rootGroup.rotation.set(0,On.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(On.position);n.y-=1.5;const s=Math.atan2(n.x,n.z),o=Js(s-On.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.toothlessController.state,{...ln,neckYaw:q.clamp(o*.55,-.85,.85),headYaw:q.clamp(o*.85,-.95,.95),headPitch:q.clamp(-r*.95,-.85,.75),headRoll:q.clamp(-o*.18,-.45,.45),eyeYaw:q.clamp(o*.45,-.75,.75),eyePitch:q.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.88})}else if(this.lightFuryAsset&&this.lightFuryController){this.lightFuryAsset.rootGroup.position.copy(Hn.position),this.lightFuryAsset.rootGroup.rotation.set(0,Hn.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(Hn.position);n.y-=1.48;const s=Math.atan2(n.x,n.z),o=Js(s-Hn.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.lightFuryController.state,{...tn,neckYaw:q.clamp(o*.55,-.85,.85),headYaw:q.clamp(o*.85,-.95,.95),headPitch:q.clamp(-r*.95,-.85,.75),headRoll:q.clamp(.18-o*.18,-.5,.55),eyeYaw:q.clamp(o*.45,-.75,.75),eyePitch:q.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.9})}}applyAtTime(t){if(this.subjectMode==="duet")this.applyToothlessFlightAtTime(t,!0),this.applyLightFuryFlightAtTime(t,!0);else if(this.subjectMode==="toothless"){this.applyToothlessFlightAtTime(t,!1);const e=this.toothlessAsset.rig.boneMap.get("chest"),n=new T().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("light-fury",n)}else if(this.applyLightFuryFlightAtTime(t,!1),this.lightFuryAsset){const e=this.lightFuryAsset.rig.boneMap.get("chest"),n=new T().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("toothless",n)}}}function Z_(i){return i-Math.floor(i)}function ih(i,t){return Z_(Math.sin(i*127.1+t*311.7)*43758.5453123)}let $o=null;function j_(i=512){if($o)return $o;const t=new Float32Array(i*i),e=76;for(let f=0;f<i;f++){const g=f/i*e,v=Math.floor(g),m=g-v;for(let d=0;d<i;d++){const M=d/i*e,b=Math.floor(M),_=M-b;let S=10;for(let A=-1;A<=1;A++)for(let E=-1;E<=1;E++){const y=((b+E)%e+e)%e,x=((v+A)%e+e)%e,P=E+.5+(ih(y,x)-.5)*.68-_,C=A+.5+(ih(x+19,y+7)-.5)*.68-m,R=Math.sqrt(P*P+C*C);R<S&&(S=R)}const w=Math.max(0,1-Math.pow(S*1.15,2.2));t[f*i+d]=w}}const n=document.createElement("canvas"),s=document.createElement("canvas"),o=document.createElement("canvas");for(const f of[n,s,o])f.width=i,f.height=i;const a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(i,i),h=r.createImageData(i,i),u=l.createImageData(i,i);for(let f=0;f<i;f++){const g=(f-1+i)%i,v=(f+1)%i;for(let m=0;m<i;m++){const d=(m-1+i)%i,M=(m+1)%i,b=f*i+m,_=b*4,S=t[b],w=(t[f*i+M]-t[f*i+d])*.24,A=(t[v*i+m]-t[g*i+m])*.24,E=1/Math.sqrt(w*w+A*A+1);h.data[_]=Math.round((-w*E*.5+.5)*255),h.data[_+1]=Math.round((-A*E*.5+.5)*255),h.data[_+2]=Math.round((E*.5+.5)*255),h.data[_+3]=255;const y=249+S*5;c.data[_]=Math.min(255,Math.round(y+.8)),c.data[_+1]=Math.round(y),c.data[_+2]=Math.min(255,Math.round(y+.6)),c.data[_+3]=255;const x=Math.round((.45-S*.07)*255);u.data[_]=x,u.data[_+1]=x,u.data[_+2]=x,u.data[_+3]=255}}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0);const p=(f,g)=>(f.wrapS=jn,f.wrapT=jn,f.anisotropy=8,f.colorSpace=g?cn:Dn,f.needsUpdate=!0,f);return $o={albedoMap:p(new _n(n),!0),normalMap:p(new _n(s),!1),roughnessMap:p(new _n(o),!1)},$o}let Oi=null;function K_(i=1024){if(Oi)return Oi;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=14,n.data[u+1]=24,n.data[u+2]=42,n.data[u+3]=255;continue}const p=Math.sin(h*64+Math.sin(c*12)*.65),f=Math.sin(h*138-Math.cos(c*18)*.85),g=Math.sin(h*250+c*22),v=Math.sin(h*21+.9)*Math.cos(c*14-h*4),m=p*.42+f*.33+g*.15+v*.24,d=Math.exp(-Math.pow((c-.36)/.13,2)),M=Math.max(0,Math.min(1,(.95-c)/.17)),b=Math.max(0,Math.min(1,1-c*1.06)),_=.86+.28*m;let S=(32+128*b+58*d)*_*M,w=(118+114*b+36*d)*_*M,A=(205+48*b+20*d)*_*M;if(v<-.58&&c>.25&&c<.78){const E=Math.min(1,(-v-.58)*2.1);S*=1-.38*E,w*=1-.28*E,A*=1-.16*E}n.data[u]=Math.max(0,Math.min(255,Math.round(S))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(w))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+3]=255}}return e.putImageData(n,0,0),Oi=new _n(t),Oi.colorSpace=cn,Oi.anisotropy=8,Oi.needsUpdate=!0,Oi}function Q_(){const i=K_(1024),t={uPupilDilation:{value:.78},uLightDir:{value:new T(.45,.65,.6).normalize()},uBiolumGlow:{value:0},uPlasmaGlow:{value:0},uThermalCloak:{value:0}},e=new Si({name:"LightFury_SkyBlueIris_PBR",map:i,roughness:.48,metalness:0,envMapIntensity:.78});e.onBeforeCompile=s=>{Object.assign(s.uniforms,t),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += diffuseColor.rgb * (0.36 + uPlasmaGlow * 0.85 + uBiolumGlow * 0.72) * eRadial * (1.0 - smoothstep(0.0, 0.95, uThermalCloak) * 0.88);`)};const n=new vn({name:"LightFury_Cornea_WetCoat",color:new It(16777215),transparent:!0,opacity:.15,roughness:.072,metalness:0,ior:1.376,reflectivity:1,clearcoat:1,clearcoatRoughness:.068,envMapIntensity:2.4,depthWrite:!1});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function sh(i,t,e){i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function J_(){const i=j_(512),t=Q_(),e={uTime:{value:0},uIridescentShimmer:{value:.76},uPastelTint:{value:.78},uRadiantGlow:{value:.34},uBiolumGlow:{value:0},uPlasmaGlow:{value:.04},uThermalCloak:{value:0},uSunDir:{value:new T(-.55,.38,-.74).normalize()},uSunColor:{value:new It(16765601)}},n=new vn({name:"LightFury_SnowPearlHide_PBR",color:new It(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new zt(.05,.05),roughnessMap:i.roughnessMap,roughness:.46,metalness:.02,iridescence:.42,iridescenceIOR:1.38,iridescenceThicknessRange:[320,520],clearcoat:.34,clearcoatRoughness:.22,sheen:.28,sheenRoughness:.42,sheenColor:new It(16773366),envMapIntensity:1.22});sh(n,e,!1);const s={albedo:i.albedoMap.clone(),normal:i.normalMap.clone(),rough:i.roughnessMap.clone()};for(const m of[s.albedo,s.normal,s.rough])m.repeat.set(3,3),m.needsUpdate=!0;const o=new vn({name:"LightFury_IridescentWingPatagium_PBR",color:new It(16776445),map:s.albedo,normalMap:s.normal,normalScale:new zt(.028,.028),roughnessMap:s.rough,roughness:.42,metalness:.02,iridescence:.52,iridescenceIOR:1.4,iridescenceThicknessRange:[310,540],clearcoat:.28,clearcoatRoughness:.24,side:hn,envMapIntensity:1.28});sh(o,e,!0);const a=new vn({name:"LightFury_SlatePearlClaws_PBR",color:new It(2633016),roughness:.24,metalness:.08,clearcoat:.84,clearcoatRoughness:.12,envMapIntensity:1.5}),r=new vn({name:"LightFury_PearlyTeeth_PBR",color:new It(16447218),roughness:.14,metalness:0,clearcoat:.92,clearcoatRoughness:.08}),l=new vn({name:"LightFury_RoseGums_PBR",color:new It(12084344),normalMap:i.normalMap,normalScale:new zt(.08,.08),roughness:.32,clearcoat:.82,clearcoatRoughness:.12,side:hn}),c=new vn({name:"LightFury_PinkTongue_PBR",color:new It(13924494),normalMap:i.normalMap,normalScale:new zt(.1,.1),roughness:.26,clearcoat:.88,clearcoatRoughness:.1}),h=new oo({name:"LightFury_OuterHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0}),u=new oo({name:"LightFury_WingHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0,side:hn}),p=[n,o,a],f=[r,l,c,t.irisMaterial];let g=!1;return{skinMaterial:n,wingMembraneMaterial:o,clawMaterial:a,teethMaterial:r,oralGumMaterial:l,tongueMaterial:c,hullDepthMaterial:h,doubleSidedHullDepthMaterial:u,eyeMaterials:t,uniforms:e,syncCloakTransparency:m=>{const d=m>.001;if(d!==g){g=d;for(const b of p)b.transparent=d,b.depthWrite=!d,b.depthFunc=ri,b.polygonOffset=d,b.polygonOffsetFactor=d?-1:0,b.polygonOffsetUnits=d?-2:0,b.needsUpdate=!0;for(const b of f)b.transparent=d,b.depthWrite=!d,b.depthTest=!0,b.depthFunc=ri,b.needsUpdate=!0}const M=q.smoothstep(m,0,.96);return a.opacity=1-M*.86,r.opacity=1-M*.9,l.opacity=1-M*.9,c.opacity=1-M*.9,t.corneaMaterial.opacity=q.lerp(.15,.03,M),d}}}function ue(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Pe(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function oh(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function ol(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let h=0;h<e-1;h++)n[h]=(t[h+1][1]-t[h][1])/(t[h+1][0]-t[h][0]);s[0]=n[0],s[e-1]=n[e-2];for(let h=1;h<e-1;h++)n[h-1]*n[h]<=0?s[h]=0:s[h]=(n[h-1]+n[h])*.5;for(let h=0;h<e-1;h++)if(Math.abs(n[h])<1e-8)s[h]=0,s[h+1]=0;else{const u=s[h]/n[h],p=s[h+1]/n[h],f=Math.hypot(u,p);if(f>3){const g=3/f;s[h]=g*u*n[h],s[h+1]=g*p*n[h]}}let o=0;for(let h=0;h<e-1;h++)if(i>=t[h][0]&&i<=t[h+1][0]){o=h;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r;return(2*c-3*l+1)*t[o][1]+(c-2*l+r)*a*s[o]+(-2*c+3*l)*t[o+1][1]+(c-l)*a*s[o+1]}const tv=[[-4.18,.015],[-3.55,.048],[-2.75,.088],[-1.9,.146],[-1.25,.202],[-.82,.246],[-.5,.278],[-.08,.258],[.42,.312],[.72,.326],[.98,.254],[1.22,.21],[1.44,.198]],Su=[[-4.18,.014],[-3.55,.042],[-2.75,.076],[-1.9,.126],[-1.25,.172],[-.82,.204],[-.5,.228],[-.08,.214],[.42,.248],[.72,.26],[.98,.208],[1.22,.182],[1.44,.174]],ev=[[0,.116,-4.18],[0,.116,-3.72],[0,.116,-3.28],[0,.12,-2.82],[0,.175,-2.3],[0,.32,-1.78],[0,.51,-1.32],[0,.68,-.86],[0,.755,-.5],[0,.76,-.08],[0,.815,.38],[0,.885,.75],[0,1.03,.98],[0,1.24,1.19],[0,1.45,1.38],[0,1.54,1.54],[0,1.562,1.73],[0,1.538,1.9],[0,1.49,2.065]];let ur=null;function Au(){return ur||(ur=new Nn(ev.map(([i,t,e])=>new T(i,t,e)),!1,"centripetal",.5)),ur}function nv(i){const t=Au();let e=0,n=1;for(let u=0;u<24;u++){const p=(e+n)*.5;t.getPointAt(p).z<i?e=p:n=p}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new T(0,1,0),l=new T().copy(r).addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=ol(c,Su)*ue(-4.18,-4.1,c);return{point:o.clone().addScaledVector(l,h),tangent:a,up:l}}function ah(i,t,e){const n=i/e,s=t/e+.15,o=n*n+Math.pow(s-.58*Math.sqrt(Math.abs(n)+.04),2);return 1-ue(.62,1.15,o)}function iv(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.53)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.28){const r=ue(1.31,1.53,i.z),l=1-r,c=ue(1.26,1.45,i.z);return ze([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return Yn(i,e,n,3.5)}function sv(i,t){const e=[];return e.push(ov(i,t)),e.push(...av(i,t)),e.push(...rv(i,t)),e.push(...lv(i,t)),We(e)}function ov(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=Au(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(S=>i.boneIndexMap.get(S)),r=o.map(S=>i.bindWorldPositions.get(S)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),p=new Uint16Array(l*4),f=new Float32Array(l*4),g=new T(0,1,0),v=i.bindWorldPositions.get("eye_L"),m=i.bindWorldPositions.get("eye_R"),d=[{center:v,fwd:fo,up:new T(-.19,.98,.06).normalize()},{center:m,fwd:mo,up:new T(.19,.98,.06).normalize()}].map(S=>{const w=new T().crossVectors(S.up,S.fwd).normalize(),A=new T().crossVectors(S.fwd,w).normalize();return{center:S.center,fwd:S.fwd,right:w,up:A}});for(let S=0;S<=e;S++){const w=S/e,A=1-Math.pow(1-w,1.85),E=s.getPointAt(A),y=s.getTangentAt(A).normalize(),x=new T().copy(g).addScaledVector(y,-g.dot(y)).normalize(),P=new T().crossVectors(x,y).normalize(),C=E.z,R=ue(-4.18,-4.1,C),L=ol(C,tv)*R,D=ol(C,Su)*R,k=ue(1.36,1.5,C);let B=L,N=D;if(k>0){const H=Math.max(0,Math.min(1,(C-1.44)/.625)),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(H-.78)/.22),2))),X=$i(C),K=(.174+.018*Pe(H,.36,.24)-.062*ue(.36,.94,H))*V;B=q.lerp(L,X,k),N=q.lerp(D,K,k)}for(let H=0;H<=n;H++){const V=H/n,X=V*Math.PI*2,K=Math.sin(X),G=Math.cos(X);let W=B*K,O=N*G,nt=.08,at=0,$=0,j=0;if(C>-2.9&&C<1.6&&G<.12){const F=ue(-2.9,-.55,C)*(1-ue(1.36,1.6,C));$=ue(.12,-.68,G)*F}if(C>-.45&&C<.92){const F=Pe(C,.3,.42)*Pe(Math.abs(K),.88,.22)*Pe(G,.08,.36);j=Math.max(j,F*.28)}if(G>.35&&C>-3.9&&C<1.6){const F=ue(.35,.92,G)*ue(.1,.85,C)*(1-ue(1.45,1.65,C)),wt=Pe(K,0,.16)*ue(.55,.96,G),st=Math.pow(Math.max(0,Math.sin(C*5.8+Math.abs(K)*3.4)),4)*Pe(G,.42,.24)*ue(-2.4,-.4,C)*(1-ue(.95,1.35,C));at=Math.max(at,F*.48,wt*.84,st*.72)}if(C>-.78&&C<1.08){const F=Pe(C,.68,.28),wt=Pe(Math.abs(K),.44,.22)*ue(-.1,-.86,G);O-=.018*F*wt,W+=Math.sign(K)*.012*F*wt;const st=Pe(C,.78,.2)*Pe(Math.abs(K),.7,.18)*ue(-.08,-.78,G),mt=Pe(C,-.49,.22)*Pe(Math.abs(K),.68,.19)*ue(-.05,-.78,G);O-=.026*st+.022*mt}if(C>=1.42){const F=Pe(C,1.842,.095),wt=Pe(Math.abs(K),.62,.17)*ue(.18,.74,G);O+=.014*F*wt,W+=Math.sign(K)*.007*F*wt;const st=Pe(C,1.76,.12)*Pe(Math.abs(K),.88,.17)*Pe(G,-.12,.25);if(W+=Math.sign(K)*.016*st,G>.65&&C>1.56&&C<1.86){const mt=ah(W,C-1.745,.052),_t=ah(W,C-1.648,.038);at=Math.max(at,Math.max(mt,_t*.92))}C>1.98&&G>-.35&&G<.35&&(O-=.002*Pe(K,0,.08)*ue(1.98,2.055,C)),nt=.22+.24*ue(1.85,2.05,C)}const Y=new T().copy(E).addScaledVector(P,W).addScaledVector(x,O),it=ue(1.52,1.6,C);if(it>0&&G<.04){const F=Ei(C),wt=Math.max(ue(.56,.9,Math.abs(K)),ue(1.96,2.04,C)),st=F-.0042,mt=F+.039*(1-ue(1.92,2.05,C)),_t=q.lerp(mt,st,wt),Pt=it*ue(.04,-.26,G);Y.y=q.lerp(Y.y,_t,Pt)}if(C>1.66&&C<2)for(const F of d){if(Math.sign(Y.x)!==Math.sign(F.center.x))continue;const wt=new T().subVectors(Y,F.center),st=wt.dot(F.fwd),mt=wt.dot(F.right),_t=wt.dot(F.up);if(st>0){const Pt=Math.exp(-.5*(Math.pow(mt/.053,2)+Math.pow(_t/.045,2)))*ue(0,.032,st),bt=da-.022,z=q.lerp(st,bt,Pt);st>z&&Y.addScaledVector(F.fwd,z-st)}}if(C>1.94&&C<2.065&&Y.y>1.48){const F=oh(Y.x,Y.z,.054,2.018,.017,.02)*Pe(Y.y,1.508,.014),wt=oh(Y.x,Y.z,-.054,2.018,.017,.02)*Pe(Y.y,1.508,.014),st=Math.max(F,wt),mt=ue(1.96,2.055,Y.z)*Pe(Y.y,1.505,.032);j=Math.max(j,mt*.65),st>.05&&(Y.x*=1-.14*st,Y.y-=.009*st,Y.z-=.011*st,j=Math.max(j,Math.min(1,.55+st*.85)))}const gt=S*(n+1)+H;c[gt*3]=Y.x,c[gt*3+1]=Y.y,c[gt*3+2]=Y.z,h[gt*2]=A*5.2,h[gt*2+1]=V*1.6,u[gt*4]=nt,u[gt*4+1]=at,u[gt*4+2]=$,u[gt*4+3]=j;const Q=iv(Y,i,a,r);p.set(Q.indices,gt*4),f.set(Q.weights,gt*4)}}const M=new Uint32Array(e*n*6);let b=0;for(let S=0;S<e;S++)for(let w=0;w<n;w++){const A=S*(n+1)+w,E=(S+1)*(n+1)+w,y=(S+1)*(n+1)+(w+1),x=S*(n+1)+(w+1);M[b++]=A,M[b++]=E,M[b++]=y,M[b++]=A,M[b++]=y,M[b++]=x}const _=new Xt;return _.setAttribute("position",new Z(c,3)),_.setAttribute("uv",new Z(h,2)),_.setAttribute("aAnatomyData",new Z(u,4)),_.setAttribute("skinIndex",new ge(p,4)),_.setAttribute("skinWeight",new Yt(f,4)),_.setIndex(new Z(M,1)),_.computeVertexNormals(),ba(_,e,n),_}function av(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.162,1.848,1.24],maxWidth:.068,maxThick:.028,rollAngle:l*-.28,isPrimaryEar:!0}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.288,1.608,1.35],maxWidth:.032,maxThick:.017,rollAngle:l*-.82,isPrimaryEar:!1})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.boneNames.map(y=>i.bindWorldPositions.get(y).clone()),c=new T().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.055),...l,new T(...r.tipPos)],p=new Nn(u),f=r.boneNames.map(y=>i.boneIndexMap.get(y)),g=r.boneNames.map(y=>i.bindWorldPositions.get(y)),v=(o+1)*(a+1),m=new Float32Array(v*3),d=new Float32Array(v*2),M=new Float32Array(v*4),b=new Uint16Array(v*4),_=new Float32Array(v*4),S=new T(0,1,0);for(let y=0;y<=o;y++){const x=y/o,P=p.getPointAt(x),C=p.getTangentAt(x).normalize(),R=S.clone().addScaledVector(C,-S.dot(C)).normalize(),L=new T().crossVectors(R,C).normalize(),D=Math.cos(r.rollAngle),k=Math.sin(r.rollAngle),B=L.clone().multiplyScalar(D).addScaledVector(R,k),N=R.clone().multiplyScalar(D).addScaledVector(L,-k),H=r.isPrimaryEar?.72+.36*Math.sin(Math.pow(x,.75)*Math.PI*.88):Math.sin(Math.pow(x,.68)*Math.PI*.92),V=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(x-.76)/.24),2))),X=r.maxWidth*H*V,K=r.maxThick*(.78+.28*Math.sin(x*Math.PI))*V;for(let G=0;G<=a;G++){const W=G/a,O=W*Math.PI*2,nt=new T().copy(P).addScaledVector(B,X*Math.cos(O)).addScaledVector(N,K*Math.sin(O)),at=y*(a+1)+G;m[at*3]=nt.x,m[at*3+1]=nt.y,m[at*3+2]=nt.z,d[at*2]=x*.48,d[at*2+1]=W*.48,M[at*4]=.2,M[at*4+1]=ue(.55,.95,x)*.65,M[at*4+2]=0,M[at*4+3]=ue(.65,1,x)*.3;const $=Yn(nt,f,g,4),j=ue(.3,0,x),Y=ze([n,$.indices[0],$.indices[1],$.indices[2]],[j,$.weights[0]*(1-j),$.weights[1]*(1-j),$.weights[2]*(1-j)]);b.set(Y.indices,at*4),_.set(Y.weights,at*4)}}const w=new Uint16Array(o*a*6);let A=0;for(let y=0;y<o;y++)for(let x=0;x<a;x++){const P=y*(a+1)+x,C=(y+1)*(a+1)+x,R=(y+1)*(a+1)+(x+1),L=y*(a+1)+(x+1);w[A++]=P,w[A++]=C,w[A++]=R,w[A++]=P,w[A++]=R,w[A++]=L}const E=new Xt;E.setAttribute("position",new Z(m,3)),E.setAttribute("uv",new Z(d,2)),E.setAttribute("aAnatomyData",new Z(M,4)),E.setAttribute("skinIndex",new ge(b,4)),E.setAttribute("skinWeight",new Yt(_,4)),E.setIndex(new Z(w,1)),E.computeVertexNormals(),ba(E,o,a),e.push(E)}return e}function rv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?fo:mo).clone(),p=new T(r*-.19,.98,.06).normalize(),f=new T().crossVectors(u,p).normalize(),g=new T().crossVectors(f,u).normalize();for(const v of[!0,!1]){const m=v?c:h,d=(s+1)*(o+1),M=new Float32Array(d*3),b=new Float32Array(d*2),_=new Float32Array(d*4),S=new Uint16Array(d*4),w=new Float32Array(d*4),A=da+.0016;for(let P=0;P<=o;P++){const C=P/o,R=Pe(C,.06,.08);for(let L=0;L<=s;L++){const D=L/s,k=q.degToRad(q.lerp(-65,65,D)),B=Math.sin(D*Math.PI),N=v?42*B:-38*B,H=v?78:-74,V=q.degToRad(q.lerp(N,H,C)),X=A+.0016*R-.0026*C,K=new T().addScaledVector(u,Math.cos(V)*Math.cos(k)).addScaledVector(f,Math.cos(V)*Math.sin(k)).addScaledVector(g,Math.sin(V)).normalize(),G=new T().copy(l).addScaledVector(K,X),W=P*(s+1)+L;M[W*3]=G.x,M[W*3+1]=G.y,M[W*3+2]=G.z,b[W*2]=D*.35,b[W*2+1]=C*.18,_[W*4]=.25;const O=B*(1-ue(.48,1,C)),nt=Math.max(0,Math.min(1,O));S.set([m,n,0,0],W*4),w.set([nt,1-nt,0,0],W*4)}}const E=new Uint16Array(s*o*6);let y=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,L=(P+1)*(s+1)+C,D=(P+1)*(s+1)+(C+1),k=P*(s+1)+(C+1);v?(E[y++]=R,E[y++]=D,E[y++]=L,E[y++]=R,E[y++]=k,E[y++]=D):(E[y++]=R,E[y++]=L,E[y++]=D,E[y++]=R,E[y++]=D,E[y++]=k)}const x=new Xt;x.setAttribute("position",new Z(M,3)),x.setAttribute("uv",new Z(b,2)),x.setAttribute("aAnatomyData",new Z(_,4)),x.setAttribute("skinIndex",new ge(S,4)),x.setAttribute("skinWeight",new Yt(w,4)),x.setIndex(new Z(E,1)),x.computeVertexNormals(),e.push(x)}}return e}function lv(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new T(a*.14,.89,.78),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new T(a*.292,.048,.925),new T(a*.292,.028,.992)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(lh(i,r,l,!0,a,n,s)),e.push(...rh(i,o,!0,t));const c=[new T(a*.13,.75,-.49),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new T(a*.278,.046,-.506),new T(a*.278,.028,-.442)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(lh(i,c,h,!1,a,n,s)),e.push(...rh(i,o,!1,t))}return e}function rh(i,t,e,n){const s=[],o=wu(t,e),a=n===0?15:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=Math.hypot(l.dirX,l.dirZ),d=l.dirX/m,M=l.dirZ/m,b=M,_=-d;for(let E=0;E<=a;E++){const y=E/a,x=q.lerp(-.36,1,y),P=Math.max(0,x),C=Math.max(0,-x)*.036,R=Math.sin(P*Math.PI)*.009-.008*P*P+C,L=l.rootX+d*l.toeLength*x,D=l.rootZ+M*l.toeLength*x,k=l.rootY+R,B=1+.42*Math.pow(1-ue(-.36,.18,x),1.5),N=1+.13*Pe(P,.4,.18)+.11*Pe(P,.84,.1),H=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(y-.89)/.11),2))),V=q.lerp(l.baseRadius,l.tipRadius,P)*B*N*H;for(let X=0;X<=r;X++){const K=X/r,G=K*Math.PI*2,W=Math.sin(G),O=Math.cos(G),nt=1.1+.22*(1-ue(-.34,.2,x)),at=L+b*W*V*nt,$=D+_*W*V*nt;let j=k+O*V*.86;j<.003&&(j=.003+Math.max(0,j)*.14);const Y=E*(r+1)+X;u[Y*3]=at,u[Y*3+1]=j,u[Y*3+2]=$,p[Y*2]=y*.36,p[Y*2+1]=K*.32,f[Y*4]=.28,f[Y*4+1]=O>.2?.52*ue(.2,.85,P):0,f[Y*4+2]=.35,g.set([c,0,0,0],Y*4),v.set([1,0,0,0],Y*4)}}const S=new Uint16Array(a*r*6);let w=0;for(let E=0;E<a;E++)for(let y=0;y<r;y++){const x=E*(r+1)+y,P=(E+1)*(r+1)+y,C=(E+1)*(r+1)+(y+1),R=E*(r+1)+(y+1);S[w++]=x,S[w++]=P,S[w++]=C,S[w++]=x,S[w++]=C,S[w++]=R}const A=new Xt;A.setAttribute("position",new Z(u,3)),A.setAttribute("uv",new Z(p,2)),A.setAttribute("aAnatomyData",new Z(f,4)),A.setAttribute("skinIndex",new ge(g,4)),A.setAttribute("skinWeight",new Yt(v,4)),A.setIndex(new Z(S,1)),A.computeVertexNormals(),ba(A,a,r),s.push(A)}return s}function lh(i,t,e,n,s,o,a){const r=new Nn(t,!1,"centripetal",.5),l=e.map(_=>i.boneIndexMap.get(_)),c=e.map(_=>i.bindWorldPositions.get(_)),h=(o+1)*(a+1),u=new Float32Array(h*3),p=new Float32Array(h*2),f=new Float32Array(h*4),g=new Uint16Array(h*4),v=new Float32Array(h*4),m=new T(0,0,1);for(let _=0;_<=o;_++){const w=1-_/o,A=r.getPointAt(w),E=r.getTangentAt(w).negate().normalize(),y=m.clone().addScaledVector(E,-m.dot(E)).normalize(),x=new T().crossVectors(y,E).normalize(),P=.5+.5*ue(0,.34,w),C=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(w-.91)/.09),2)))*P;let R=.08,L=.092;if(n){const B=Pe(w,.54,.16)*.022,N=Pe(w,.86,.12)*.072;R=(.076+B+N)*C,L=(.09+Pe(w,.25,.18)*.028+B+N*.86)*C}else{const B=Pe(w,.52,.15)*.026,N=Pe(w,.86,.12)*.068;R=(.074+B+N)*C,L=(.094+Pe(w,.26,.19)*.038+B*1.06+N*.84)*C}const D=ue(.7,.94,w),k=1-ue(.08,.42,w);for(let B=0;B<=a;B++){const N=B/a,H=N*Math.PI*2,V=Math.sin(H),X=Math.cos(H),K=V*s>0?Math.abs(V):0,G=1-.28*k*K;let W=1;if(D>.01&&X>-.35){const F=Math.atan2(V,Math.max(.05,X+.25)),wt=Math.cos(F*3.6);W+=.14*D*Math.max(-.12,wt)*ue(-.35,.45,X)}let O=0;if(n&&w>.28&&w<.84){const F=Math.max(0,V*s*.62-X*.78);O=Math.pow(F,3.6)*Math.sin((w-.28)/.56*Math.PI)*.028}else if(!n&&w>.34&&w<.84){const F=Math.max(0,V*s*.58-X*.81);O=Math.pow(F,3.8)*Math.sin((w-.34)/.5*Math.PI)*.022}const nt=new T().copy(A).addScaledVector(x,(R*G*V+s*O*.65)*W).addScaledVector(y,(L*X-O*.75)*W);w>.7&&nt.y<.004&&(nt.y=.002+Math.max(0,nt.y)*.14);const at=_*(a+1)+B;u[at*3]=nt.x,u[at*3+1]=nt.y,u[at*3+2]=nt.z,p[at*2]=w*1.35,p[at*2+1]=N*.85,f[at*4]=.22,f[at*4+1]=Math.min(1,O*22+Math.pow(Math.max(0,Math.sin(w*14)),4)*K*.65),f[at*4+2]=Math.max(ue(.65,.96,w)*.35,Math.max(0,-V*s)*.45);const $=Yn(nt,l,c,3.5),j=ue(.24,0,w)*.72,Y=l[l.length-1],it=ue(.74,.88,w),gt=(1-j)*(1-it),Q=ze([Y,l[0],$.indices[0],$.indices[1]],[it,j*(1-it),$.weights[0]*gt,$.weights[1]*gt]);g.set(Q.indices,at*4),v.set(Q.weights,at*4)}}const d=new Uint16Array(o*a*6);let M=0;for(let _=0;_<o;_++)for(let S=0;S<a;S++){const w=_*(a+1)+S,A=(_+1)*(a+1)+S,E=(_+1)*(a+1)+(S+1),y=_*(a+1)+(S+1);d[M++]=w,d[M++]=A,d[M++]=E,d[M++]=w,d[M++]=E,d[M++]=y}const b=new Xt;return b.setAttribute("position",new Z(u,3)),b.setAttribute("uv",new Z(p,2)),b.setAttribute("aAnatomyData",new Z(f,4)),b.setAttribute("skinIndex",new ge(g,4)),b.setAttribute("skinWeight",new Yt(v,4)),b.setIndex(new Z(d,1)),b.computeVertexNormals(),ba(b,o,a),b}function ba(i,t,e){const n=i.getAttribute("normal"),s=new T,o=new T;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function ii(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function cv(i,t){return{jawSkinGeometry:We([uv(i,t),...dv(i,t)]),oralGumsGeometry:pv(i,t),teethGeometry:fv(i,t),tongueGeometry:mv(i,t),irisGeometry:ch(i,t,!1),corneaGeometry:ch(i,t,!0),clawsGeometry:gv(i,t)}}function hv(i,t){const e=1.66+Math.cos(i)*(t?.355:.34),n=Math.max(.02,$i(e)-(t?.022:.028));return{x:Math.sin(i)*n,z:e}}function uv(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),p=new Uint16Array(l*4),f=new Float32Array(l*4);for(let d=0;d<=e;d++){const M=d/e,b=q.lerp(1.45,2.056,M),_=$i(b),S=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.87)/.13),2))),w=Math.max(.002,(_-.0032*ii(1.55,1.65,b))*S),A=Ei(b),E=.025*(1-ii(1.45,1.59,b)),y=A+.0032+E,x=(.074-.03*M)*S;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,L=Math.sin(R),D=Math.cos(R),k=Math.exp(-Math.pow((M-.28)/.22,2))*.009,B=Math.exp(-Math.pow((M-.3)/.16,2))*Math.abs(L)*.008,N=(w+B)*L,H=-.019*D*(1-Math.pow(L,2))*ii(1.57,1.66,b),V=D>=0?y+H:y+(x+k)*D,X=d*(n+1)+P;c[X*3]=N,c[X*3+1]=V,c[X*3+2]=b,h[X*2]=M*.95,h[X*2+1]=C*.85,u[X*4]=.22,u[X*4+1]=0,u[X*4+2]=D<-.15?ii(.92,.25,M)*-D*.72:0,u[X*4+3]=M>.82?(M-.82)*2.2:0;const K=ii(1.51,1.6,b),G=1-K,W=ii(1.31,1.53,b),O=ii(1.26,1.45,b),nt=G*(1-W),at=ze([s,o,a,r],[K,G*W,nt*(.52+.48*O),nt*(.48-.48*O)]);p.set(at.indices,X*4),f.set(at.weights,X*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let d=0;d<e;d++)for(let M=0;M<n;M++){const b=d*(n+1)+M,_=(d+1)*(n+1)+M,S=(d+1)*(n+1)+(M+1),w=d*(n+1)+(M+1);g[v++]=b,g[v++]=_,g[v++]=S,g[v++]=b,g[v++]=S,g[v++]=w}const m=new Xt;return m.setAttribute("position",new Z(c,3)),m.setAttribute("uv",new Z(h,2)),m.setAttribute("aAnatomyData",new Z(u,4)),m.setAttribute("skinIndex",new ge(p,4)),m.setAttribute("skinWeight",new Yt(f,4)),m.setIndex(new Z(g,1)),m.computeVertexNormals(),m}function dv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?12:8,a=t===0?10:6;for(const r of["L","R"]){const l=r==="L"?1:-1,c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=a;M++){const b=M/a;for(let _=0;_<=o;_++){const S=_/o,w=q.lerp(1.56,1.72,S),A=Ei(w),E=q.lerp(A-.015,A+.018,b),y=$i(w)-.008,x=-.005*Math.sin(S*Math.PI)*Math.sin(b*Math.PI),P=l*(y+x),C=M*(o+1)+_;h[C*3]=P,h[C*3+1]=E,h[C*3+2]=w,u[C*2]=S*.25,u[C*2+1]=b*.25,p[C*4]=.22;const R=ii(0,1,b);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<a;M++)for(let b=0;b<o;b++){const _=M*(o+1)+b,S=(M+1)*(o+1)+b,w=(M+1)*(o+1)+(b+1),A=M*(o+1)+(b+1);l>0?(v[m++]=_,v[m++]=w,v[m++]=S,v[m++]=_,v[m++]=A,v[m++]=w):(v[m++]=_,v[m++]=S,v[m++]=w,v[m++]=_,v[m++]=w,v[m++]=A)}const d=new Xt;d.setAttribute("position",new Z(h,3)),d.setAttribute("uv",new Z(u,2)),d.setAttribute("aAnatomyData",new Z(p,4)),d.setAttribute("skinIndex",new ge(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new Z(v,1)),d.computeVertexNormals(),e.push(d)}return e}function pv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?28:16,a=t===0?18:10;{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const b=M/o,_=q.lerp(1.58,2.025,b),S=Math.max(.014,$i(_)-.018),w=Ei(_),A=Math.sin(b*Math.PI*12)*.0022*Math.sin(b*Math.PI);for(let E=0;E<=a;E++){const y=E/a,x=(y-.5)*2,P=Math.cos(x*Math.PI*.5)*.028*(1-.45*b),C=-.002*Math.exp(-Math.pow(x/.12,2)),R=Math.exp(-Math.pow((Math.abs(x)-.88)/.12,2))*-.005,L=x*S,D=w+.007+P+A*(1-Math.abs(x)*.5)+C+R,k=M*(a+1)+E;h[k*3]=L,h[k*3+1]=D,h[k*3+2]=_,u[k*2]=b*2,u[k*2+1]=y*2,p[k*4+3]=(1-b)*.65,f.set([n,0,0,0],k*4),g.set([1,0,0,0],k*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<o;M++)for(let b=0;b<a;b++){const _=M*(a+1)+b,S=(M+1)*(a+1)+b,w=(M+1)*(a+1)+(b+1),A=M*(a+1)+(b+1);v[m++]=_,v[m++]=w,v[m++]=S,v[m++]=_,v[m++]=A,v[m++]=w}const d=new Xt;d.setAttribute("position",new Z(h,3)),d.setAttribute("uv",new Z(u,2)),d.setAttribute("aAnatomyData",new Z(p,4)),d.setAttribute("skinIndex",new ge(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new Z(v,1)),d.computeVertexNormals(),e.push(d)}{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=o;M++){const b=M/o,_=q.lerp(1.58,2.015,b),S=Math.max(.012,$i(_)-.022),w=Ei(_);for(let A=0;A<=a;A++){const E=A/a,y=(E-.5)*2,x=-Math.cos(y*Math.PI*.5)*.016*(1-.35*b),P=Math.exp(-Math.pow((Math.abs(y)-.86)/.14,2))*.0055,C=y*S,R=w-.004+x+P,L=M*(a+1)+A;h[L*3]=C,h[L*3+1]=R,h[L*3+2]=_,u[L*2]=b*2,u[L*2+1]=E*2,p[L*4+3]=(1-b)*.55,f.set([s,0,0,0],L*4),g.set([1,0,0,0],L*4)}}const v=new Uint16Array(o*a*6);let m=0;for(let M=0;M<o;M++)for(let b=0;b<a;b++){const _=M*(a+1)+b,S=(M+1)*(a+1)+b,w=(M+1)*(a+1)+(b+1),A=M*(a+1)+(b+1);v[m++]=_,v[m++]=S,v[m++]=w,v[m++]=_,v[m++]=w,v[m++]=A}const d=new Xt;d.setAttribute("position",new Z(h,3)),d.setAttribute("uv",new Z(u,2)),d.setAttribute("aAnatomyData",new Z(p,4)),d.setAttribute("skinIndex",new ge(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new Z(v,1)),d.computeVertexNormals(),e.push(d)}const r=t===0?18:10,l=t===0?12:8;{const c=(r+1)*(l+1),h=new Float32Array(c*3),u=new Float32Array(c*2),p=new Float32Array(c*4),f=new Uint16Array(c*4),g=new Float32Array(c*4);for(let M=0;M<=l;M++){const b=M/l;for(let _=0;_<=r;_++){const S=_/r,w=q.lerp(-Math.PI*.62,Math.PI*.62,S),A=1.66-Math.cos(w)*.1,E=$i(Math.max(1.55,A))-.02,y=Math.sin(w)*E,x=Ei(A),P=q.lerp(x-.016,x+.026,b),C=M*(r+1)+_;h[C*3]=y,h[C*3+1]=P,h[C*3+2]=A,u[C*2]=S*1.5,u[C*2+1]=b*1.5,p[C*4+3]=.95*Math.cos(w*.65);const R=ii(0,1,b);f.set([n,s,0,0],C*4),g.set([R,1-R,0,0],C*4)}}const v=new Uint16Array(r*l*6);let m=0;for(let M=0;M<l;M++)for(let b=0;b<r;b++){const _=M*(r+1)+b,S=(M+1)*(r+1)+b,w=(M+1)*(r+1)+(b+1),A=M*(r+1)+(b+1);v[m++]=_,v[m++]=S,v[m++]=w,v[m++]=_,v[m++]=w,v[m++]=A}const d=new Xt;d.setAttribute("position",new Z(h,3)),d.setAttribute("uv",new Z(u,2)),d.setAttribute("aAnatomyData",new Z(p,4)),d.setAttribute("skinIndex",new ge(f,4)),d.setAttribute("skinWeight",new Yt(g,4)),d.setIndex(new Z(v,1)),d.computeVertexNormals(),e.push(d)}return We(e)}function fv(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const p=(u+.5)/l,f=q.lerp(-Math.PI*.42,Math.PI*.42,p),g=hv(f,r),v=g.x,m=g.z,d=Ei(m)+(r?.01:-.009),M=1+.3*Math.exp(-Math.pow((Math.abs(f)-.52)/.25,2)),b=.0195*M*(.78+.22*Math.cos(f)),_=.0054*M,S=(o+1)*(a+1),w=new Float32Array(S*3),A=new Float32Array(S*2),E=new Float32Array(S*4),y=new Uint16Array(S*4),x=new Float32Array(S*4),P=-Math.sin(f),C=-Math.cos(f);for(let k=0;k<=o;k++){const B=r?1-k/o:k/o,N=_*(1-.88*Math.pow(B,1.25)),H=.0045*B*B,V=v+P*H,X=d+h*b*B,K=m+C*H-.0025*B*B;for(let G=0;G<=a;G++){const W=G/a,O=W*Math.PI*2,nt=k*(a+1)+G;w[nt*3]=V+Math.sin(O)*N,w[nt*3+1]=X,w[nt*3+2]=K+Math.cos(O)*N,A[nt*2]=B,A[nt*2+1]=W,y.set([c,0,0,0],nt*4),x.set([1,0,0,0],nt*4)}}const R=new Uint16Array(o*a*6);let L=0;for(let k=0;k<o;k++)for(let B=0;B<a;B++){const N=k*(a+1)+B,H=(k+1)*(a+1)+B,V=(k+1)*(a+1)+(B+1),X=k*(a+1)+(B+1);R[L++]=N,R[L++]=H,R[L++]=V,R[L++]=N,R[L++]=V,R[L++]=X}const D=new Xt;D.setAttribute("position",new Z(w,3)),D.setAttribute("uv",new Z(A,2)),D.setAttribute("aAnatomyData",new Z(E,4)),D.setAttribute("skinIndex",new ge(y,4)),D.setAttribute("skinWeight",new Yt(x,4)),D.setIndex(new Z(R,1)),D.computeVertexNormals(),s.push(D)}}return We(s)}function mv(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(m=>i.boneIndexMap.get(m)),a=s.map(m=>i.bindWorldPositions.get(m)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),p=new Float32Array(r*4);for(let m=0;m<=e;m++){const d=m/e,M=q.lerp(1.62,1.96,d),b=Ei(M)-.0035,_=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(d-.76)/.24),2))),S=(.068+.01*Math.sin(d*Math.PI)-.02*d)*_,w=(.013-.004*d)*_;for(let A=0;A<=n;A++){const E=A/n,y=E*Math.PI*2,x=Math.sin(y),P=Math.cos(y),C=P>.35?-.0035*Math.exp(-Math.pow(x/.24,2)):0,R=P>.2?.001*Math.sin(d*Math.PI*26)*Math.cos(x*Math.PI*9)*_:0,L=new T(S*x,b+w*P+C+R,M),D=m*(n+1)+A;l[D*3]=L.x,l[D*3+1]=L.y,l[D*3+2]=L.z,c[D*2]=d*2.5,c[D*2+1]=E*1.8;const k=Yn(L,o,a,3.8);u.set(k.indices,D*4),p.set(k.weights,D*4)}}const f=new Uint16Array(e*n*6);let g=0;for(let m=0;m<e;m++)for(let d=0;d<n;d++){const M=m*(n+1)+d,b=(m+1)*(n+1)+d,_=(m+1)*(n+1)+(d+1),S=m*(n+1)+(d+1);f[g++]=M,f[g++]=b,f[g++]=_,f[g++]=M,f[g++]=_,f[g++]=S}const v=new Xt;return v.setAttribute("position",new Z(l,3)),v.setAttribute("uv",new Z(c,2)),v.setAttribute("aAnatomyData",new Z(h,4)),v.setAttribute("skinIndex",new ge(u,4)),v.setAttribute("skinWeight",new Yt(p,4)),v.setIndex(new Z(f,1)),v.computeVertexNormals(),v}function ch(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?fo:mo).clone(),u=new T(r*-.19,.98,.06).normalize(),p=new T().crossVectors(u,h).normalize(),f=new T().crossVectors(h,p).normalize(),g=e?da+8e-4:da,v=.94,m=(s+1)*(o+1),d=new Float32Array(m*3),M=new Float32Array(m*2),b=new Float32Array(m*4),_=new Uint16Array(m*4),S=new Float32Array(m*4);for(let y=0;y<=s;y++){const x=y/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(x),C=Math.cos(x);for(let R=0;R<=o;R++){const L=R/o*Math.PI*2,D=Math.cos(L),k=Math.sin(L);let B=g;if(x<v){const K=1-x/v;B+=e?.0013*K*K:-.0025*K*K}const N=new T().addScaledVector(h,C).addScaledVector(p,P*D).addScaledVector(f,P*k).normalize(),H=new T().copy(l).addScaledVector(N,B),V=y*(o+1)+R;d[V*3]=H.x,d[V*3+1]=H.y,d[V*3+2]=H.z;const X=Math.min(.498,x/v*.48);M[V*2]=.5+X*D,M[V*2+1]=.5+X*k,_.set([c,0,0,0],V*4),S.set([1,0,0,0],V*4)}}const w=new Uint16Array(s*o*6);let A=0;for(let y=0;y<s;y++)for(let x=0;x<o;x++){const P=y*(o+1)+x,C=(y+1)*(o+1)+x,R=(y+1)*(o+1)+(x+1),L=y*(o+1)+(x+1);w[A++]=P,w[A++]=C,w[A++]=R,w[A++]=P,w[A++]=R,w[A++]=L}const E=new Xt;E.setAttribute("position",new Z(d,3)),E.setAttribute("uv",new Z(M,2)),E.setAttribute("aAnatomyData",new Z(b,4)),E.setAttribute("skinIndex",new ge(_,4)),E.setAttribute("skinWeight",new Yt(S,4)),E.setIndex(new Z(w,1)),E.computeVertexNormals(),n.push(E)}return We(n)}function gv(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=wu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,p=l.dirZ/h,f=p,g=-u,v=.74,m=l.rootX+u*l.toeLength*v,d=l.rootZ+p*l.toeLength*v,M=l.rootY+Math.sin(v*Math.PI)*.009-.008*v*v+.002,b=l.toeLength*(1-v)+l.clawLength,_=l.tipRadius*.72,S=(n+1)*(s+1),w=new Float32Array(S*3),A=new Float32Array(S*2),E=new Float32Array(S*4),y=new Uint16Array(S*4),x=new Float32Array(S*4);for(let L=0;L<=n;L++){const D=L/n,k=_*Math.sqrt(Math.max(.06,1-Math.pow(D,1.72))),B=m+u*b*D,N=d+p*b*D,H=Math.max(.004,M-.028*Math.pow(D,1.82)+.004*Math.sin(D*Math.PI));for(let V=0;V<=s;V++){const X=V/s,K=X*Math.PI*2,G=Math.sin(K),W=Math.cos(K),O=L*(s+1)+V;w[O*3]=B+f*G*k*.72,w[O*3+1]=Math.max(.002,H+W*k*1.04),w[O*3+2]=N+g*G*k*.72,A[O*2]=D,A[O*2+1]=X,y.set([c,0,0,0],O*4),x.set([1,0,0,0],O*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let L=0;L<n;L++)for(let D=0;D<s;D++){const k=L*(s+1)+D,B=(L+1)*(s+1)+D,N=(L+1)*(s+1)+(D+1),H=L*(s+1)+(D+1);P[C++]=k,P[C++]=B,P[C++]=N,P[C++]=k,P[C++]=N,P[C++]=H}const R=new Xt;R.setAttribute("position",new Z(w,3)),R.setAttribute("uv",new Z(A,2)),R.setAttribute("aAnatomyData",new Z(E,4)),R.setAttribute("skinIndex",new ge(y,4)),R.setAttribute("skinWeight",new Yt(x,4)),R.setIndex(new Z(P,1)),R.computeVertexNormals(),e.push(R)}}return We(e)}function Us(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function _v(i,t){const e=[],n=[];for(const s of["L","R"]){const o=s==="L"?1:-1;e.push(...vv(i,s,o,t)),n.push(...xv(i,s,o,t)),e.push(...Mv(i,s,t)),n.push(wv(i,s,t)),n.push(yv(i,s,o,t)),e.push(...bv(i,s,o,t)),n.push(Sv(i,s,o,t))}return{wingSparsSkinGeometry:We(e),wingMembraneGeometry:We(n),dorsalSpinesGeometry:Av(i,t)}}function pa(i,t,e,n,s,o,a=.42,r=.12){const l=new Nn(t),c=e.map(S=>i.boneIndexMap.get(S)),h=e.map(S=>i.bindWorldPositions.get(S)),u=(s+1)*(o+1),p=new Float32Array(u*3),f=new Float32Array(u*2),g=new Float32Array(u*4),v=new Uint16Array(u*4),m=new Float32Array(u*4),d=new T(0,1,0);for(let S=0;S<=s;S++){const w=S/s,A=l.getPointAt(w),E=l.getTangentAt(w).normalize();let y=d.clone().addScaledVector(E,-d.dot(E));y.lengthSq()<1e-4&&y.set(0,0,1),y.normalize();const x=new T().crossVectors(y,E).normalize(),P=w*(n.length-1),C=Math.min(n.length-2,Math.floor(P)),R=P-C;let L=q.lerp(n[C],n[C+1],R);w>.86&&(L*=Math.sqrt(Math.max(0,1-Math.pow((w-.86)/.14,2))));for(let D=0;D<=o;D++){const k=D/o,B=k*Math.PI*2,N=new T().copy(A).addScaledVector(x,L*Math.sin(B)).addScaledVector(y,L*a*Math.cos(B)),H=S*(o+1)+D;p[H*3]=N.x,p[H*3+1]=N.y,p[H*3+2]=N.z,f[H*2]=w*1.4,f[H*2+1]=k*.45,g[H*4]=.08,g[H*4+1]=Us(.3,.92,w)*.38,g[H*4+2]=r;const V=Yn(N,c,h,3.8);v.set(V.indices,H*4),m.set(V.weights,H*4)}}const M=new Uint16Array(s*o*6);let b=0;for(let S=0;S<s;S++)for(let w=0;w<o;w++){const A=S*(o+1)+w,E=(S+1)*(o+1)+w,y=(S+1)*(o+1)+(w+1),x=S*(o+1)+(w+1);M[b++]=A,M[b++]=E,M[b++]=y,M[b++]=A,M[b++]=y,M[b++]=x}const _=new Xt;return _.setAttribute("position",new Z(p,3)),_.setAttribute("uv",new Z(f,2)),_.setAttribute("aAnatomyData",new Z(g,4)),_.setAttribute("skinIndex",new ge(v,4)),_.setAttribute("skinWeight",new Yt(m,4)),_.setIndex(new Z(M,1)),_.computeVertexNormals(),_}function vv(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new T(e*.16,.9,.68),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(pa(i,c,h,[.048,.052,.05,.042,.032,.02,.005],o,a,.58,.08));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let p=1;p<=5;p++){const f=i.bindWorldPositions.get(`wingFinger_${t}_${p}_a`),g=i.bindWorldPositions.get(`wingFinger_${t}_${p}_b`);s.push(pa(i,[u,f,g],[`wingWrist_${t}`,`wingFinger_${t}_${p}_a`,`wingFinger_${t}_${p}_b`],[.013,.0085,.0025],r,l,.34,.1))}return s}function Es(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let p=0;p<=t;p++){const f=p/t;for(let g=0;g<=i;g++){const v=g/i,m=e(v,f),d=p*(i+1)+g;s[d*3]=m.pos.x,s[d*3+1]=m.pos.y,s[d*3+2]=m.pos.z,o[d*2]=v*1.25,o[d*2+1]=f*1.25,a[d*4]=.06,a[d*4+1]=m.pinkStripe??0,a[d*4+2]=m.iceBlue??.14,a[d*4+3]=m.thinness,r.set(m.skin.indices,d*4),l.set(m.skin.weights,d*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let p=0;p<t;p++)for(let f=0;f<i;f++){const g=p*(i+1)+f,v=(p+1)*(i+1)+f,m=(p+1)*(i+1)+(f+1),d=p*(i+1)+(f+1);c[h++]=g,c[h++]=v,c[h++]=m,c[h++]=g,c[h++]=m,c[h++]=d}const u=new Xt;return u.setAttribute("position",new Z(s,3)),u.setAttribute("uv",new Z(o,2)),u.setAttribute("uv1",new Z(o,2)),u.setAttribute("aAnatomyData",new Z(a,4)),u.setAttribute("skinIndex",new ge(r,4)),u.setAttribute("skinWeight",new Yt(l,4)),u.setIndex(new Z(c,1)),u.computeVertexNormals(),u}function xv(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),p=i.boneIndexMap.get("pelvis"),f=i.bindWorldPositions.get(`wingWrist_${t}`),g=i.bindWorldPositions.get(`wingElbow_${t}`),v=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(Es(o,Math.max(4,Math.floor(a*.5)),(_,S)=>{const w=new T().lerpVectors(new T(e*.25,.96,.74),f,_),A=_<.45?new T().lerpVectors(v,g,_/.45):new T().lerpVectors(g,f,(_-.45)/.55),E=new T().lerpVectors(A,w,S),y=Math.max(0,1-_*2.1),x=Math.max(0,(_-.45)*1.82),P=Math.max(0,1-y-x),C=ze([c,l,r,0],[y,P,x,0]);return{pos:E,skin:C,thinness:.38+.34*S,pinkStripe:.18*S,iceBlue:.1}}));const m=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),d=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),M=i.boneIndexMap.get(`wingFinger_${t}_1_a`),b=i.boneIndexMap.get(`wingFinger_${t}_1_b`);s.push(Es(o,a,(_,S)=>{const w=new T(e*.21,.9,.62),A=new T(e*.18,.75,-.44),E=new T().lerpVectors(w,A,S),y=S<.5?new T().lerpVectors(f,m,S*2):new T().lerpVectors(m,d,(S-.5)*2),x=_<.45?new T().lerpVectors(v,g,_/.45):new T().lerpVectors(g,f,(_-.45)/.55),P=new T().lerpVectors(E,y,_),C=new T().lerpVectors(x,P,Math.pow(S,.85));C.z+=Math.sin(_*Math.PI)*.045*Math.pow(S,1.8),C.y+=Math.sin(_*Math.PI)*Math.sin(S*Math.PI)*.022;const R=1-_,L=_,D=S<.36?h:S<.72?u:p,k=S<.25?l:S<.55?r:M,B=S<.55?M:b,N=S<.55?S/.55:(S-.55)/.45,H=ze([D,k,B,c],[R*.88,L*(1-N),L*N,R*.12]),V=Math.pow(.5+.5*Math.sin(S*14+_*4.5),3)*.55;return{pos:C,skin:H,thinness:.55+.4*S,pinkStripe:V*_,iceBlue:(1-_)*.35+.08}}));for(let _=1;_<=5;_++){const S=i.bindWorldPositions.get(`wingFinger_${t}_${_}_a`),w=i.bindWorldPositions.get(`wingFinger_${t}_${_}_b`),A=i.bindWorldPositions.get(`wingFinger_${t}_${_+1}_a`),E=i.bindWorldPositions.get(`wingFinger_${t}_${_+1}_b`),y=i.boneIndexMap.get(`wingFinger_${t}_${_}_a`),x=i.boneIndexMap.get(`wingFinger_${t}_${_}_b`),P=i.boneIndexMap.get(`wingFinger_${t}_${_+1}_a`),C=i.boneIndexMap.get(`wingFinger_${t}_${_+1}_b`);s.push(Es(o,a,(R,L)=>{const D=L<.5?new T().lerpVectors(f,S,L*2):new T().lerpVectors(S,w,(L-.5)*2),k=L<.5?new T().lerpVectors(f,A,L*2):new T().lerpVectors(A,E,(L-.5)*2),B=new T().lerpVectors(D,k,R),N=_===5?-.028:.042,H=new T().subVectors(f,B).normalize();B.addScaledVector(H,N*Math.sin(R*Math.PI)*Math.pow(L,2.2)),B.y+=Math.sin(R*Math.PI)*Math.sin(L*Math.PI)*.018;let V;if(L<.5){const G=L*2;V=ze([r,y,P,0],[1-G,G*(1-R),G*R,0])}else{const G=(L-.5)*2;V=ze([y,x,P,C],[(1-R)*(1-G),(1-R)*G,R*(1-G),R*G])}const X=Math.sin(L*18-_*.65+Math.sin(R*Math.PI)*1.4),K=Us(.28,.94,X)*Us(.14,.58,L)*.88;return{pos:B,skin:V,thinness:.62+.38*L,pinkStripe:K,iceBlue:(1-L)*.24+.06}}))}return s}function Mv(i,t,e){const n=t==="L"?1:-1,s=[],o=e===0?10:6,a=e===0?8:6;return Mu.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new T(n*r.rootX,r.rootY,r.rootZ),u=new T(n*r.tipX,r.tipY,r.tipZ);s.push(pa(i,[h,u],[c],[.009,.0022],o,a,.35,.2))}),s}function wv(i,t,e){const n=t==="L"?1:-1,s=e===0?16:9,o=i.boneIndexMap.get(`pelvicFin_${t}_1`),a=i.boneIndexMap.get(`pelvicFin_${t}_2`),r=i.boneIndexMap.get(`pelvicFin_${t}_3`),l=new T(n*.16,.72,-.7),c=new T(n*.095,.52,-1.46);return Es(s,s,(h,u)=>{const p=new T().lerpVectors(l,c,h),f=.29*Math.sin(Math.pow(h,.74)*Math.PI),g=p.clone().add(new T(n*f,-.025*f,-.08*Math.sin(h*Math.PI))),v=new T().lerpVectors(p,g,u),m=Math.max(0,1-h*2),d=Math.max(0,(h-.5)*2),M=Math.max(0,1-m-d),b=ze([o,a,r,0],[m,M,d,0]);return{pos:v,skin:b,thinness:.52+.45*u,pinkStripe:u*.38,iceBlue:.26}})}function yv(i,t,e,n){const s=n===0?12:6,o=i.boneIndexMap.get("tail_7"),a=i.boneIndexMap.get("tail_8"),r=new T(e*.02,.12,-2.92),l=new T(e*.018,.116,-3.22);return Es(s,s,(c,h)=>{const u=new T().lerpVectors(r,l,c),p=.115*Math.sin(Math.pow(c,.75)*Math.PI),f=u.clone().add(new T(e*p,.008*Math.sin(c*Math.PI),-.025*c)),g=new T().lerpVectors(u,f,h),v=ze([o,a,0,0],[1-c,c,0,0]);return{pos:g,skin:v,thinness:.55+.4*h,pinkStripe:h*.35,iceBlue:.28}})}function bv(i,t,e,n){const s=[],o=n===0?10:6,a=n===0?8:6;return xu.forEach((r,l)=>{const c=`tailFin_${t}_${l+1}`,h=new T(e*r.rootX,r.rootY,r.rootZ),u=new T().lerpVectors(h,new T(e*r.tipX,r.tipY,r.tipZ),.92);s.push(pa(i,[h,u],[c],[.0075,.0018],o,a,.34,.24))}),s}function Sv(i,t,e,n){const s=n===0?28:n===1?16:10,o=n===0?16:n===1?10:6,a=i.boneIndexMap.get(`tailFinHinge_${t}`),r=i.boneIndexMap.get(`tailFin_${t}_1`),l=i.boneIndexMap.get(`tailFin_${t}_3`),c=i.boneIndexMap.get(`tailFin_${t}_5`),h=-3.22,u=-4.08;return Es(s,o,(p,f)=>{const g=q.lerp(h,u,p),v=e*.016,m=.116,d=Math.sin(Math.pow(p,.6)*Math.PI),M=.455*d*(1+.1*Math.sin(p*Math.PI*2-.6)),b=.095*Math.sin(Math.min(1,p/.52)*Math.PI)*(p<.52?1:0),_=-.115*Math.sin(Math.max(0,(p-.5)/.5)*Math.PI),S=g+b+_,w=v+e*M,A=m+.012*d,E=Math.sin(p*Math.PI*5)*.0028*Math.sin(f*Math.PI)*d,y=new T(q.lerp(v,w,f),q.lerp(m,A,f)+E,q.lerp(g,S,f)),x=Math.max(0,1-p*2.2),P=Math.max(0,(p-.55)*2.2),C=Math.max(0,1-x-P),R=ze([a,r,l,c],[.25,x*.75,C*.75,P*.75]);return{pos:y,skin:R,thinness:.54+.44*f,pinkStripe:Us(.32,.94,f)*.52,iceBlue:.34*(1-f*.35)}})}function Av(i,t){const e=t===0?84:t===1?48:28,n=t===0?10:6,s=["tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest"],o=s.map(M=>i.boneIndexMap.get(M)),a=s.map(M=>i.bindWorldPositions.get(M));new Nn([new T(0,.14,-3.02),new T(0,.23,-2.24),new T(0,.45,-1.5),new T(0,.82,-.78),new T(0,.94,-.32),new T(0,1.01,.18),new T(0,1.07,.6)]);const r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*3),h=new Float32Array(r*2),u=new Float32Array(r*4),p=new Uint16Array(r*4),f=new Float32Array(r*4);for(let M=0;M<=e;M++){const b=M/e,_=q.lerp(-3.02,.66,b),S=nv(_),w=S.point,A=S.up,E=Us(0,.14,b)*Us(1,.82,b),y=(.012+.024*Math.sin(Math.pow(b,.78)*Math.PI))*E,x=.015*(.45+.55*E),P=Yn(w,o,a,3.8);for(let C=0;C<=n;C++){const R=C/n,L=Math.sin(R*Math.PI),D=Math.cos(R*Math.PI)*x*(1-.55*L),k=-.016+(y+.016)*Math.pow(L,.9),B=w.clone().addScaledVector(A,k);B.x=D;const N=B.clone().addScaledVector(A,y*.35*L),H=M*(n+1)+C;l[H*3]=B.x,l[H*3+1]=B.y,l[H*3+2]=B.z,c[H*3]=N.x,c[H*3+1]=N.y,c[H*3+2]=N.z,h[H*2]=b*3,h[H*2+1]=R,u[H*4]=.08,u[H*4+1]=L*.72,u[H*4+2]=L*.28,u[H*4+3]=L*.88,p.set(P.indices,H*4),f.set(P.weights,H*4)}}const g=new Uint16Array(e*n*6);let v=0;for(let M=0;M<e;M++)for(let b=0;b<n;b++){const _=M*(n+1)+b,S=(M+1)*(n+1)+b,w=(M+1)*(n+1)+(b+1),A=M*(n+1)+(b+1);g[v++]=_,g[v++]=w,g[v++]=S,g[v++]=_,g[v++]=A,g[v++]=w}const m=new Xt;m.setAttribute("position",new Z(l,3)),m.setAttribute("uv",new Z(h,2)),m.setAttribute("uv1",new Z(h,2)),m.setAttribute("aAnatomyData",new Z(u,4)),m.setAttribute("skinIndex",new ge(p,4)),m.setAttribute("skinWeight",new Yt(f,4)),m.setIndex(new Z(g,1));const d=new Z(c,3);return d.name="dorsalFlex",m.morphAttributes.position=[d],m.computeVertexNormals(),m}function Ev(){const i=O_(),t=J_(),e=new Xn;e.name="LightFury_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s=[],o={},a={};for(const l of[0,1,2]){const c=new Xn;c.name=`LightFury_LOD${l}`;const h=sv(i,l),u=cv(i,l),p=_v(i,l),f=We([h,u.jawSkinGeometry,p.wingSparsSkinGeometry]),g=u.clawsGeometry,v=(R,L,D,k=!0,B=!0)=>{const N=new Yh(L,D);return N.name=`${R}_LOD${l}`,N.castShadow=k,N.receiveShadow=B,N.frustumCulled=!1,N.bind(i.skeleton,new ee),N},m=v("LightFuryBodyAndHeadSkin",f,t.skinMaterial),d=v("LightFuryIridescentWingsAndHeartTail",p.wingMembraneGeometry,t.wingMembraneMaterial),M=v("LightFuryContinuousDorsalSail",p.dorsalSpinesGeometry,t.skinMaterial);n.push(M);const b=v("LightFuryOralGums",u.oralGumsGeometry,t.oralGumMaterial,!1,!0),_=v("LightFuryRetractableTeeth",u.teethGeometry,t.teethMaterial,!0,!0),S=v("LightFuryArticulatedTongue",u.tongueGeometry,t.tongueMaterial,!1,!0),w=v("LightFurySkyBlueIrises",u.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),A=v("LightFuryRefractiveCorneas",u.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1),E=v("LightFurySlatePearlClaws",g,t.clawMaterial,!0,!0);for(const R of[m,M,E,b,_,S,w])R.renderOrder=11;A.renderOrder=12,d.renderOrder=13;const y=[m,d,M,b,_,S,w,A,E],x=[["LFDepth_BodySkin",f,t.hullDepthMaterial,!1],["LFDepth_WingMembrane",p.wingMembraneGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_DorsalSail",p.dorsalSpinesGeometry,t.hullDepthMaterial,!0],["LFDepth_Gums",u.oralGumsGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_Teeth",u.teethGeometry,t.hullDepthMaterial,!1],["LFDepth_Tongue",u.tongueGeometry,t.hullDepthMaterial,!1],["LFDepth_Irises",u.irisGeometry,t.hullDepthMaterial,!1],["LFDepth_Claws",g,t.hullDepthMaterial,!1]];for(const[R,L,D,k]of x){const B=v(R,L,D,!1,!1);B.renderOrder=10,B.visible=!1,B.userData.excludeFromExport=!0,c.add(B),s.push(B),k&&n.push(B)}let P=0,C=0;for(const R of y){c.add(R);const L=R.geometry.getIndex();P+=L?L.count/3:R.geometry.getAttribute("position").count/3,C+=R.geometry.getAttribute("position").count}c.visible=l===0,e.add(c),o[l]=c,a[l]={lod:l,triangles:Math.round(P),vertices:C,subMeshCount:y.length}}const r={rootGroup:e,rig:i,materials:t,lodGroups:o,dorsalSailMeshes:n,hullDepthMeshes:s,lodStats:a,activeLOD:0,autoLOD:!1,setActiveLOD(l){r.activeLOD=l;for(const c of[0,1,2])o[c].visible=c===l},updateAutoLOD(l){if(!r.autoLOD)return r.activeLOD;const c=l<9.5?0:l<20?1:2;return c!==r.activeLOD&&r.setActiveLOD(c),r.activeLOD}};return r}function hh(){return new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})})}function Tv(){const i=document.getElementById("loading-curtain"),t=document.getElementById("lc-progress-fill"),e=document.getElementById("lc-stage-text"),n=document.getElementById("lc-pct-text");let s=2;const o=(a,r)=>{s=Math.max(s,Math.min(100,a)),t&&(t.style.width=`${s.toFixed(1)}%`),n&&(n.textContent=`${String(Math.round(s)).padStart(2,"0")}%`),r&&e&&(e.textContent=r)};return o(4,"Preparing WebGL2 twilight canvas…"),{async advanceTo(a,r){o(a,r),await hh()},async completeAndDissolve(a){o(100,"The horizon is ready."),await hh(),await new Promise(r=>setTimeout(r,260)),i&&(i.classList.add("is-dissolving"),setTimeout(()=>{i.remove()},1250)),a.classList.remove("hud-entering")}}}const uh={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class fa{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new kv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new jv(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,s){const o=new Uv,a=[];for(let r=0,l=this.pluginCallbacks.length;r<l;r++)a.push(this.pluginCallbacks[r](o));o.setPlugins(a),o.setTextureUtils(this.textureUtils),o.writeAsync(t,e,s).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(s,o){n.parse(t,s,o,e)})}}const we={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},dr="KHR_mesh_quantization",Pn={};Pn[yn]=we.NEAREST;Pn[Th]=we.NEAREST_MIPMAP_NEAREST;Pn[Zs]=we.NEAREST_MIPMAP_LINEAR;Pn[Wn]=we.LINEAR;Pn[qo]=we.LINEAR_MIPMAP_NEAREST;Pn[wi]=we.LINEAR_MIPMAP_LINEAR;Pn[Mi]=we.CLAMP_TO_EDGE;Pn[jn]=we.REPEAT;Pn[ia]=we.MIRRORED_REPEAT;const dh={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Cv=new It,ph=12,Pv=1179937895,Rv=2,fh=8,Lv=1313821514,Iv=5130562;function to(i,t){return i.length===t.length&&i.every(function(e,n){return e===t[n]})}function Dv(i){return new TextEncoder().encode(i).buffer}function Fv(i){return to(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Nv(i,t,e){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let o=0;o<i.itemSize;o++){let a;i.itemSize>4?a=i.array[s*i.itemSize+o]:(o===0?a=i.getX(s):o===1?a=i.getY(s):o===2?a=i.getZ(s):o===3&&(a=i.getW(s)),i.normalized===!0&&(a=q.normalize(a,i.array))),n.min[o]=Math.min(n.min[o],a),n.max[o]=Math.max(n.max[o],a)}return n}function Eu(i){return Math.ceil(i/4)*4}function pr(i,t=0){const e=Eu(i.byteLength);if(e!==i.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(i)),t!==0)for(let s=i.byteLength;s<e;s++)n[s]=t;return n.buffer}return i}function mh(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function gh(i,t){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),i.convertToBlob({type:t,quality:e})}class Uv{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+ma}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const s=this,o=s.buffers,a=s.json;n=s.options;const r=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(o,{type:"application/octet-stream"}),h=Object.keys(r),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const p=new FileReader;p.readAsArrayBuffer(c),p.onloadend=function(){const f=pr(p.result),g=new DataView(new ArrayBuffer(fh));g.setUint32(0,f.byteLength,!0),g.setUint32(4,Iv,!0);const v=pr(Dv(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(fh));m.setUint32(0,v.byteLength,!0),m.setUint32(4,Lv,!0);const d=new ArrayBuffer(ph),M=new DataView(d);M.setUint32(0,Pv,!0),M.setUint32(4,Rv,!0);const b=ph+m.byteLength+v.byteLength+g.byteLength+f.byteLength;M.setUint32(8,b,!0);const _=new Blob([d,m,v,g,f],{type:"application/octet-stream"}),S=new FileReader;S.readAsArrayBuffer(_),S.onloadend=function(){e(S.result)}}}else if(a.buffers&&a.buffers.length>0){const p=new FileReader;p.readAsDataURL(c),p.onloadend=function(){const f=p.result;a.buffers[0].uri=f,e(a)}}else e(a)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const o=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&o.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const a in o.gltfExtensions)e.extensions[a]=o.gltfExtensions[a],s[a]=!0;delete o.gltfExtensions}Object.keys(o).length>0&&(e.extras=o)}catch(o){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+o.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new T;for(let s=0,o=t.count;s<o;s++)if(Math.abs(n.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),s=new T;for(let o=0,a=n.count;o<a;o++)s.fromBufferAttribute(n,o),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(o,s.x,s.y,s.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(s.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(f){return f.colorSpace===cn?function(v){return v<.04045?v*.0773993808:Math.pow(v*.9478672986+.0521327014,2.4)}:function(v){return v}}t instanceof Za&&(t=await this.decompressTextureAsync(t)),e instanceof Za&&(e=await this.decompressTextureAsync(e));const s=t?t.image:null,o=e?e.image:null,a=Math.max(s?s.width:0,o?o.width:0),r=Math.max(s?s.height:0,o?o.height:0),l=mh();l.width=a,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,r);const h=c.getImageData(0,0,a,r);if(s){c.drawImage(s,0,0,a,r);const f=n(t),g=c.getImageData(0,0,a,r).data;for(let v=2;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}if(o){c.drawImage(o,0,0,a,r);const f=n(e),g=c.getImageData(0,0,a,r).data;for(let v=1;v<g.length;v+=4)h.data[v]=f(g[v]/256)*256}c.putImageData(h,0,0);const p=(t||e).clone();return p.source=new _a(l),p.colorSpace=Dn,p.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),p}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,s,o){const a=this.json;a.bufferViews||(a.bufferViews=[]);let r;switch(e){case we.BYTE:case we.UNSIGNED_BYTE:r=1;break;case we.SHORT:case we.UNSIGNED_SHORT:r=2;break;default:r=4}let l=t.itemSize*r;o===we.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Eu(s*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let g=n;g<n+s;g++){for(let v=0;v<t.itemSize;v++){let m;t.itemSize>4?m=t.array[g*t.itemSize+v]:(v===0?m=t.getX(g):v===1?m=t.getY(g):v===2?m=t.getZ(g):v===3&&(m=t.getW(g)),t.normalized===!0&&(m=q.normalize(m,t.array))),e===we.FLOAT?h.setFloat32(u,m,!0):e===we.INT?h.setInt32(u,m,!0):e===we.UNSIGNED_INT?h.setUint32(u,m,!0):e===we.SHORT?h.setInt16(u,m,!0):e===we.UNSIGNED_SHORT?h.setUint16(u,m,!0):e===we.BYTE?h.setInt8(u,m):e===we.UNSIGNED_BYTE&&h.setUint8(u,m),u+=r}u%l!==0&&(u+=l-u%l)}const p={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return o!==void 0&&(p.target=o),o===we.ARRAY_BUFFER&&(p.byteStride=l),this.byteOffset+=c,a.bufferViews.push(p),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const o=new FileReader;o.readAsArrayBuffer(t),o.onloadend=function(){const a=pr(o.result),r={buffer:e.processBuffer(a),byteOffset:e.byteOffset,byteLength:a.byteLength};e.byteOffset+=a.byteLength,s(n.bufferViews.push(r)-1)}})}processAccessor(t,e,n,s){const o=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let r;if(t.array.constructor===Float32Array)r=we.FLOAT;else if(t.array.constructor===Int32Array)r=we.INT;else if(t.array.constructor===Uint32Array)r=we.UNSIGNED_INT;else if(t.array.constructor===Int16Array)r=we.SHORT;else if(t.array.constructor===Uint16Array)r=we.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)r=we.BYTE;else if(t.array.constructor===Uint8Array)r=we.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;const l=Nv(t,n,s);let c;e!==void 0&&(c=t===e.index?we.ELEMENT_ARRAY_BUFFER:we.ARRAY_BUFFER);const h=this.processBufferView(t,r,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:r,count:s,max:l.max,min:l.min,type:a[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),o.accessors||(o.accessors=[]),o.accessors.push(u)-1}processImage(t,e,n,s="image/png"){if(t!==null){const o=this,a=o.cache,r=o.json,l=o.options,c=o.pending;a.images.has(t)||a.images.set(t,{});const h=a.images.get(t),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];r.images||(r.images=[]);const p={mimeType:s},f=mh();f.width=Math.min(t.width,l.maxTextureSize),f.height=Math.min(t.height,l.maxTextureSize);const g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),t.data!==void 0){e!==Cn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const m=new Uint8ClampedArray(t.height*t.width*4);for(let d=0;d<m.length;d+=4)m[d+0]=t.data[d+0],m[d+1]=t.data[d+1],m[d+2]=t.data[d+2],m[d+3]=t.data[d+3];g.putImageData(new ImageData(m,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(gh(f,s).then(m=>o.processBufferViewImage(m)).then(m=>{p.bufferView=m})):f.toDataURL!==void 0?p.uri=f.toDataURL(s):c.push(gh(f,s).then(m=>new FileReader().readAsDataURL(m)).then(m=>{p.uri=m}));const v=r.images.push(p)-1;return h[u]=v,v}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:Pn[t.magFilter],minFilter:Pn[t.minFilter],wrapS:Pn[t.wrapS],wrapT:Pn[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,s=this.cache,o=this.json;if(s.textures.has(t))return s.textures.get(t);o.textures||(o.textures=[]),t instanceof Za&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let a=t.userData.mimeType;a==="image/webp"&&(a="image/png");const r={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,a)};t.name&&(r.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,r)});const l=o.textures.push(r)-1;return s.textures.set(t,l),l}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const o=t.color.toArray().concat([t.opacity]);if(to(o,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=o),t.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=t.metalness,s.pbrMetallicRoughness.roughnessFactor=t.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const r=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(r),texCoord:r.channel};this.applyTextureTransform(l,r),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const r={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(r,t.map),s.pbrMetallicRoughness.baseColorTexture=r}if(t.emissive){const r=t.emissive;if(Math.max(r.r,r.g,r.b)>0&&(s.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const c={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(c,t.emissiveMap),s.emissiveTexture=c}}if(t.normalMap){const r={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(r.scale=t.normalScale.x),this.applyTextureTransform(r,t.normalMap),s.normalTexture=r}if(t.aoMap){const r={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(r.strength=t.aoMapIntensity),this.applyTextureTransform(r,t.aoMap),s.occlusionTexture=r}t.transparent?s.alphaMode="BLEND":t.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=t.alphaTest),t.side===hn&&(s.doubleSided=!0),t.name!==""&&(s.name=t.name),this.serializeUserData(t,s),await this._invokeAllAsync(async function(r){r.writeMaterialAsync&&await r.writeMaterialAsync(t,s)});const a=n.materials.push(s)-1;return e.materials.set(t,a),a}async processMeshAsync(t){const e=this.cache,n=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let _=0,S=t.material.length;_<S;_++)s.push(t.material[_].uuid);else s.push(t.material.uuid);const o=s.join(":");if(e.meshes.has(o))return e.meshes.get(o);const a=t.geometry;let r;t.isLineSegments?r=we.LINES:t.isLineLoop?r=we.LINE_LOOP:t.isLine?r=we.LINE_STRIP:t.isPoints?r=we.POINTS:r=t.material.wireframe?we.LINES:we.TRIANGLES;const l={},c={},h=[],u=[],p={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in a.attributes){if(_.slice(0,5)==="morph")continue;const S=a.attributes[_];if(_=p[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),e.attributes.has(this.getUID(S))){c[_]=e.attributes.get(this.getUID(S));continue}g=null;const A=S.array;_==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Z(new Uint16Array(A),S.itemSize,S.normalized)):(A instanceof Uint32Array||A instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=fa.Utils.toFloat32BufferAttribute(S));const E=this.processAccessor(g||S,a);E!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,S),c[_]=E,e.attributes.set(this.getUID(S),E))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const _=[],S=[],w={};if(t.morphTargetDictionary!==void 0)for(const A in t.morphTargetDictionary)w[t.morphTargetDictionary[A]]=A;for(let A=0;A<t.morphTargetInfluences.length;++A){const E={};let y=!1;for(const x in a.morphAttributes){if(x!=="position"&&x!=="normal"){y||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),y=!0);continue}const P=a.morphAttributes[x][A],C=x.toUpperCase(),R=a.attributes[x];if(e.attributes.has(this.getUID(P,!0))){E[C]=e.attributes.get(this.getUID(P,!0));continue}const L=P.clone();if(!a.morphTargetsRelative)for(let D=0,k=P.count;D<k;D++)for(let B=0;B<P.itemSize;B++)B===0&&L.setX(D,P.getX(D)-R.getX(D)),B===1&&L.setY(D,P.getY(D)-R.getY(D)),B===2&&L.setZ(D,P.getZ(D)-R.getZ(D)),B===3&&L.setW(D,P.getW(D)-R.getW(D));E[C]=this.processAccessor(L,a),e.attributes.set(this.getUID(R,!0),E[C])}u.push(E),_.push(t.morphTargetInfluences[A]),t.morphTargetDictionary!==void 0&&S.push(w[A])}l.weights=_,S.length>0&&(l.extras={},l.extras.targetNames=S)}const v=Array.isArray(t.material);if(v&&a.groups.length===0)return null;let m=!1;if(v&&a.index===null){const _=[];for(let S=0,w=a.attributes.position.count;S<w;S++)_[S]=S;a.setIndex(_),m=!0}const d=v?t.material:[t.material],M=v?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,S=M.length;_<S;_++){const w={mode:r,attributes:c};if(this.serializeUserData(a,w),u.length>0&&(w.targets=u),a.index!==null){let E=this.getUID(a.index);(M[_].start!==void 0||M[_].count!==void 0)&&(E+=":"+M[_].start+":"+M[_].count),e.attributes.has(E)?w.indices=e.attributes.get(E):(w.indices=this.processAccessor(a.index,a,M[_].start,M[_].count),e.attributes.set(E,w.indices)),w.indices===null&&delete w.indices}const A=await this.processMaterialAsync(d[M[_].materialIndex]);A!==null&&(w.material=A),h.push(w)}m===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(t,l)});const b=n.meshes.push(l)-1;return e.meshes.set(o,b),b}detectMeshQuantization(t,e){if(this.extensionsUsed[dr])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const s=t.split("_",1)[0];uh[s]&&uh[s].includes(n)&&(this.extensionsUsed[dr]=!0,this.extensionsRequired[dr]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:q.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),t=fa.Utils.mergeMorphTargetTracks(t.clone(),e);const o=t.tracks,a=[],r=[];for(let l=0;l<o.length;++l){const c=o[l],h=Te.parseTrackName(c.name);let u=Te.findNode(e,h.nodeName);const p=dh[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!p){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const f=1;let g=c.values.length/c.times.length;p===dh.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let v;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(v="CUBICSPLINE",g/=3):c.getInterpolation()===Ku?v="STEP":v="LINEAR",r.push({input:this.processAccessor(new Z(c.times,f)),output:this.processAccessor(new Z(c.values,g)),interpolation:v}),a.push({sampler:r.length-1,target:{node:s.get(u),path:p}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:r,channels:a}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,s=e.nodes[n.get(t)],o=t.skeleton;if(o===void 0)return null;const a=t.skeleton.bones[0];if(a===void 0)return null;const r=[],l=new Float32Array(o.bones.length*16),c=new ee;for(let u=0;u<o.bones.length;++u)r.push(n.get(o.bones[u])),c.copy(o.boneInverses[u]),c.multiply(t.bindMatrix).toArray(l,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new Z(l,16)),joints:r,skeleton:n.get(a)}),s.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,s=this.nodeMap;e.nodes||(e.nodes=[]);const o={};if(n.trs){const r=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();to(r,[0,0,0,1])||(o.rotation=r),to(l,[0,0,0])||(o.translation=l),to(c,[1,1,1])||(o.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),Fv(t.matrix)===!1&&(o.matrix=t.matrix.elements);if(t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o),t.isMesh||t.isLine||t.isPoints){const r=await this.processMeshAsync(t);r!==null&&(o.mesh=r)}else t.isCamera&&(o.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const r=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&r.push(u)}}r.length>0&&(o.children=r)}await this._invokeAllAsync(function(r){r.writeNode&&r.writeNode(t,o)});const a=e.nodes.push(o)-1;return s.set(t,a),a}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);const o=[];for(let a=0,r=t.children.length;a<r;a++){const l=t.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&o.push(c)}}o.length>0&&(s.nodes=o),this.serializeUserData(t,s)}async processObjectsAsync(t){const e=new ra;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});const n=[];for(let s=0;s<t.length;s++)t[s]instanceof ra?await this.processSceneAsync(t[s]):n.push(t[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class kv{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,s=n.json,o=n.extensionsUsed,a={};t.name&&(a.name=t.name),a.color=t.color.toArray(),a.intensity=t.intensity,t.isDirectionalLight?a.type="directional":t.isPointLight?(a.type="point",t.distance>0&&(a.range=t.distance)):t.isSpotLight&&(a.type="spot",t.distance>0&&(a.range=t.distance),a.spot={},a.spot.innerConeAngle=(1-t.penumbra)*t.angle,a.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),o[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},o[this.name]=!0);const r=s.extensions[this.name].lights;r.push(a),e.extensions=e.extensions||{},e.extensions[this.name]={light:r.length-1}}}class Bv{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class zv{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.clearcoatFactor=t.clearcoat,t.clearcoatMap){const a={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(a,t.clearcoatMap),o.clearcoatTexture=a}if(o.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,t.clearcoatRoughnessMap),o.clearcoatRoughnessTexture=a}if(t.clearcoatNormalMap){const a={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(a.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(a,t.clearcoatNormalMap),o.clearcoatNormalTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Ov{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const s=this.writer.extensionsUsed,o={};o.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Hv{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.iridescenceFactor=t.iridescence,t.iridescenceMap){const a={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(a,t.iridescenceMap),o.iridescenceTexture=a}if(o.iridescenceIor=t.iridescenceIOR,o.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const a={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(a,t.iridescenceThicknessMap),o.iridescenceThicknessTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Vv{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.transmissionFactor=t.transmission,t.transmissionMap){const a={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(a,t.transmissionMap),o.transmissionTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Wv{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.thicknessFactor=t.thickness,t.thicknessMap){const a={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(a,t.thicknessMap),o.thicknessTexture=a}t.attenuationDistance!==1/0&&(o.attenuationDistance=t.attenuationDistance),o.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Gv{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const s=this.writer.extensionsUsed,o={};o.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Xv{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(Cv)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.specularIntensityMap){const a={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(a,t.specularIntensityMap),o.specularTexture=a}if(t.specularColorMap){const a={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(a,t.specularColorMap),o.specularColorTexture=a}o.specularFactor=t.specularIntensity,o.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Yv{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.sheenRoughnessMap){const a={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(a,t.sheenRoughnessMap),o.sheenRoughnessTexture=a}if(t.sheenColorMap){const a={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(a,t.sheenColorMap),o.sheenColorTexture=a}o.sheenRoughnessFactor=t.sheenRoughness,o.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class $v{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.anisotropyMap){const a={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(a,t.anisotropyMap),o.anisotropyTexture=a}o.anisotropyStrength=t.anisotropy,o.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class qv{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,o={};o.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class Zv{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.bumpMap){const a={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(a,t.bumpMap),o.bumpTexture=a}o.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class jv{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,s=t,o=new Float32Array(s.count*3),a=new Float32Array(s.count*4),r=new Float32Array(s.count*3),l=new ee,c=new T,h=new je,u=new T;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,h,u),c.toArray(o,f*3),h.toArray(a,f*4),u.toArray(r,f*3);const p={TRANSLATION:n.processAccessor(new Z(o,3)),ROTATION:n.processAccessor(new Z(a,4)),SCALE:n.processAccessor(new Z(r,3))};s.instanceColor&&(p._COLOR_0=n.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:p},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}fa.Utils={insertKeyframe:function(i,t){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),o=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n));let r;if(i.times.length===0){s[0]=t;for(let l=0;l<n;l++)o[l]=0;r=0}else if(t<i.times[0]){if(Math.abs(i.times[0]-t)<.001)return 0;s[0]=t,s.set(i.times,1),o.set(a.evaluate(t),0),o.set(i.values,n),r=0}else if(t>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-t)<.001)return i.times.length-1;s[s.length-1]=t,s.set(i.times,0),o.set(i.values,0),o.set(a.evaluate(t),i.values.length),r=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-t)<.001)return l;if(i.times[l]<t&&i.times[l+1]>t){s.set(i.times.slice(0,l+1),0),s[l+1]=t,s.set(i.times.slice(l+1),l+2),o.set(i.values.slice(0,(l+1)*n),0),o.set(a.evaluate(t),(l+1)*n),o.set(i.values.slice((l+1)*n),(l+2)*n),r=l+1;break}}return i.times=s,i.values=o,r},mergeMorphTargetTracks:function(i,t){const e=[],n={},s=i.tracks;for(let o=0;o<s.length;++o){let a=s[o];const r=Te.parseTrackName(a.name),l=Te.findNode(t,r.nodeName);if(r.propertyName!=="morphTargetInfluences"||r.propertyIndex===void 0){e.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Qu)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[r.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+r.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const f=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)f[g*c+h]=u.values[g];u.name=(r.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,e.push(u);continue}const p=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+h]=p.evaluate(u.times[f]);for(let f=0;f<a.times.length;f++){const g=this.insertKeyframe(u,a.times[f]);u.values[g*c+h]=a.values[f]}}return i.tracks=e,i},toFloat32BufferAttribute:function(i){const t=new Z(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let e=0,n=i.count;e<n;e++)for(let s=0;s<i.itemSize;s++)t.setComponent(e,s,i.getComponent(e,s));return t}};async function Kv(i,t){const e=new fa;i.updateMatrixWorld(!0);const n=[];i.traverse(l=>{l.userData?.excludeFromExport&&l.visible&&(l.visible=!1,n.push(l))});let s;try{s=await new Promise((l,c)=>{e.parse(i,h=>{h instanceof ArrayBuffer?l(h):c(new Error("Expected binary ArrayBuffer from GLTFExporter"))},h=>c(h),{binary:!0,onlyVisible:!0,maxTextureSize:1024})})}finally{for(const l of n)l.visible=!0}const o=new Blob([s],{type:"model/gltf-binary"}),a=URL.createObjectURL(o),r=document.createElement("a");return r.href=a,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(a),5e3),{filename:t,sizeMB:s.byteLength/(1024*1024)}}async function Tu(i,t,e=i.activeLOD){const n=i.activeLOD,s=i.autoLOD;i.autoLOD=!1,i.setActiveLOD(e);try{return await Kv(i.rootGroup,`${t}-lod${e}.glb`)}finally{i.setActiveLOD(n),i.autoLOD=s}}async function Qv(i,t=i.activeLOD){return Tu(i,"toothless-hidden-world",t)}async function Jv(i,t=i.activeLOD){return Tu(i,"light-fury-hidden-world",t)}const ea=[{id:"twin-pair",label:"Twin Furies Perch",position:new T(.05,2.75,11.4),target:new T(0,.98,-.12)},{id:"light-fury-hero",label:"Light Fury 3/4",position:new T(-6.85,1.68,3.15),target:new T(-4.42,1,.25)},{id:"light-fury-face",label:"Light Fury Portrait",position:new T(-3.65,1.64,2.38),target:new T(-4.22,1.5,1.55)},{id:"toothless-hero",label:"Toothless 3/4",position:new T(7.15,1.82,3.68),target:new T(4.42,1.06,.55)},{id:"toothless-paws-scales",label:"Scales & Claws Study",position:new T(6.15,.96,2.95),target:new T(4.52,.62,1.25)},{id:"waterfall-islands",label:"Waterfall Double-Isle",position:new T(14.5,8.2,16),target:new T(-56,-1.5,-28)},{id:"sea-arch-drangar",label:"Sea-Arch & Clett",position:new T(28,5.4,2.5),target:new T(54.5,-1.8,20.5)},{id:"crescent-lagoon",label:"Crescent Lagoon",position:new T(24,38,-12),target:new T(84,-6,34)},{id:"archipelago-aerial",label:"Archipelago Panorama",position:new T(18,68,108),target:new T(-4,-4,-24)}];function wn(i){const t=parseFloat(i.min||"0"),e=parseFloat(i.max||"1"),n=parseFloat(i.value||"0"),s=e>t?(n-t)/(e-t)*100:50;i.style.setProperty("--fill-pct",`${Math.max(0,Math.min(100,s)).toFixed(1)}%`)}function tx(i,t,e,n,s,o,a){let r=!1,l=window.innerWidth<=780,c=!0,h=1,u=null;i.classList.toggle("drawer-collapsed",l);const p=t.rig.bones.length+n.rig.bones.length,f=document.createElement("div");f.className="hud-toast",i.appendChild(f);const g=document.createElement("div");g.className="shutter-flash",i.appendChild(g);const v=lt=>{f.textContent=lt,f.classList.add("visible"),u!==null&&window.clearTimeout(u),u=window.setTimeout(()=>{f.classList.remove("visible")},2200)},m=()=>{g.classList.add("flash"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{g.classList.remove("flash")})})},d=document.createElement("div");d.className="hud-header",d.innerHTML=`
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
  `,i.appendChild(d);const M=d.querySelector("#tel-fps"),b=d.querySelector("#tel-lod"),_=d.querySelector("#btn-cursor-gaze"),S=d.querySelector("#btn-photo"),w=d.querySelector("#btn-fullscreen"),A=d.querySelector("#btn-help"),E=d.querySelector("#btn-toggle-hud"),y=document.createElement("button");y.className="drawer-reopen-btn hud-collapsible",y.title="Open Character & Atmosphere Atelier [Tab]",y.innerHTML='<span>Open Atelier</span><span class="kbd-hint">Tab</span>',i.appendChild(y);const x=lt=>{l=lt,i.classList.toggle("drawer-collapsed",l)};y.addEventListener("click",()=>x(!1));const P=()=>{r=!r,i.classList.toggle("hud-hidden",r),E.innerHTML=r?'Show UI <span class="kbd-hint">H</span>':'Cinema <span class="kbd-hint">H</span>'};E.addEventListener("click",P);const C=()=>{c=!c,_.classList.toggle("is-active",c),a.onToggleCursorGaze(c),v(c?"Interactive Cursor Gaze enabled":"Sculpted Manual Gaze locked")};_.addEventListener("click",C),S.addEventListener("click",()=>{a.onCaptureSnapshot()});const R=()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})};w.addEventListener("click",R),document.addEventListener("fullscreenchange",()=>{w.classList.toggle("is-active",!!document.fullscreenElement)});const L=document.createElement("div");L.className="help-backdrop",L.innerHTML=`
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
  `,i.appendChild(L);const D=lt=>{const Tt=lt??!L.classList.contains("open");L.classList.toggle("open",Tt),A.classList.toggle("is-active",Tt)};A.addEventListener("click",()=>D()),L.querySelector("#btn-help-close").addEventListener("click",()=>D(!1)),L.addEventListener("click",lt=>{lt.target===L&&D(!1)});const k=document.createElement("div");k.className="flight-bar hud-collapsible",k.innerHTML=`
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
  `,i.appendChild(k);const B=k.querySelector("#btn-flight-play"),N=k.querySelector("#flight-play-icon"),H=k.querySelector("#flight-play-text"),V=k.querySelector("#btn-flight-reset"),X=k.querySelector("#flight-phase-label"),K=k.querySelector("#flight-time-label"),G=k.querySelector("#flight-scrubber"),W=k.querySelector("#btn-flight-speed"),O=k.querySelector("#btn-flight-cam"),nt=k.querySelector("#btn-flight-loop"),at=Array.from(k.querySelectorAll(".flight-mode-pill"));let $=!1;const j=()=>{const lt=o.getPhaseInfo(),Tt=lt.isPlaying&&!lt.isPaused;k.classList.toggle("playing",Tt);const Et=lt.subjectMode==="duet"?"Begin Courtship Flight":lt.subjectMode==="light-fury"?"Fly Light Fury":"Fly Toothless";lt.isPlaying?lt.isPaused?(N.innerHTML="&#9654;",H.textContent="Resume Flight",X.textContent=`${lt.phaseLabel} (Paused)`):(N.innerHTML="&#10074;&#10074;",H.textContent="Pause Flight",X.textContent=lt.phaseLabel):(N.innerHTML="&#9654;",H.textContent=Et,X.innerHTML=lt.subjectMode==="duet"?"Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown":"Perched Ready &mdash; Solo Takeoff, Sea Soar &amp; Landing"),K.textContent=`${lt.elapsedSec.toFixed(1)}s / ${lt.durationSec.toFixed(1)}s`,$||(G.value=String(lt.progress),wn(G)),O.classList.toggle("active",lt.followCamera),nt.classList.toggle("active",lt.loop),W.classList.toggle("active",h<.99),W.innerHTML=`${h.toFixed(1)}&times;`,at.forEach(Gt=>Gt.classList.toggle("active",Gt.dataset.fmode===lt.subjectMode))};W.addEventListener("click",()=>{h=h>.75?.5:1,a.onFlightSpeedChange(h),j(),v(h<.75?"0.5× Slow-Motion Wingbeat Study":"1.0× Natural Flight Speed")}),at.forEach(lt=>{lt.addEventListener("click",()=>{const Tt=lt.dataset.fmode;o.setSubjectMode(Tt),j(),Fe()})}),B.addEventListener("click",()=>{o.togglePlayPause(),j(),Fe()}),V.addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),j(),Fe()}),G.addEventListener("pointerdown",()=>{$=!0}),window.addEventListener("pointerup",()=>{$=!1}),G.addEventListener("input",()=>{wn(G),o.scrubToProgress(parseFloat(G.value)),e.applyRigState(0),s.applyRigState(0),j(),Fe()}),O.addEventListener("click",()=>{o.followCamera=!o.followCamera,j()}),nt.addEventListener("click",()=>{o.loop=!o.loop,j()});const Y=document.createElement("div");Y.className="camera-bar hud-collapsible";const it=[],gt=lt=>{const Tt=ea[lt];Tt&&(o.isPlaying&&(o.stopAndResetToPerch(),j(),Fe()),it.forEach((Et,Gt)=>Et.classList.toggle("active",Gt===lt)),it[lt]?.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"}),Tt.id.startsWith("light-fury")?bt("light-fury"):Tt.id.startsWith("toothless")&&bt("toothless"),a.onSelectCameraBookmark(Tt))};ea.forEach((lt,Tt)=>{const Et=document.createElement("button");Et.className=`cam-btn${Tt===0?" active":""}`,Et.title=`${lt.label} [Hotkey ${Tt+1}]`,Et.innerHTML=`<span class="cam-btn-idx">${Tt+1}</span><span>${lt.label}</span>`,Et.addEventListener("click",()=>gt(Tt)),it.push(Et),Y.appendChild(Et)}),i.appendChild(Y),window.addEventListener("keydown",lt=>{const Tt=document.activeElement?.tagName;if(!(Tt==="INPUT"||Tt==="TEXTAREA")){if(lt.key==="Escape"&&L.classList.contains("open")){D(!1);return}if(lt.key==="?"||lt.key==="/"&&lt.shiftKey){lt.preventDefault(),D();return}if(lt.key==="Tab"){lt.preventDefault(),x(!l);return}if(lt.key==="h"||lt.key==="H")P();else if(lt.key==="c"||lt.key==="C")C();else if(lt.key==="p"||lt.key==="P")a.onCaptureSnapshot();else if(lt.key==="f"||lt.key==="F")R();else if(lt.code==="Space")lt.preventDefault(),o.togglePlayPause(),j(),Fe();else if(lt.key>="1"&&lt.key<="9"&&!lt.ctrlKey&&!lt.metaKey&&!lt.altKey){const Et=parseInt(lt.key,10)-1;Et>=0&&Et<ea.length&&gt(Et)}}});const Q=document.createElement("aside");Q.className="rig-drawer hud-collapsible",Q.innerHTML=`
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
  `,i.appendChild(Q),Q.querySelector("#btn-collapse-drawer").addEventListener("click",()=>{x(!0)});const F=Q.querySelector("#moments-grid"),wt=Q.querySelector("#tab-light-fury"),st=Q.querySelector("#tab-toothless"),mt=Q.querySelector("#panel-light-fury"),_t=Q.querySelector("#panel-toothless"),Pt=Q.querySelector("#panel-shared-world");function bt(lt){wt.classList.toggle("active",lt==="light-fury"),st.classList.toggle("active",lt==="toothless"),mt.style.display=lt==="light-fury"?"block":"none",_t.style.display=lt==="toothless"?"block":"none"}wt.addEventListener("click",()=>bt("light-fury")),st.addEventListener("click",()=>bt("toothless"));const z=[];function I(lt,Tt,Et=!1){const Gt=document.createElement("div");Gt.className=`accordion-section${Et?" open":""}`;const ve=document.createElement("button");ve.className="accordion-header",ve.innerHTML=`<span>${Tt}</span><span class="accordion-chevron">&#9662;</span>`;const xe=document.createElement("div");xe.className="accordion-collapse";const be=document.createElement("div");be.className="accordion-collapse-inner";const $e=document.createElement("div");return $e.className="accordion-body",be.appendChild($e),xe.appendChild(be),ve.addEventListener("click",()=>{Gt.classList.toggle("open")}),Gt.appendChild(ve),Gt.appendChild(xe),lt.appendChild(Gt),$e}function tt(lt,Tt,Et,Gt,ve,xe,be,$e=.01,qe=!1){const Os=Number(Et[ve]),Ii=document.createElement("div");Ii.className="control-row",Ii.title="Double-click slider to reset";const go=document.createElement("span");go.className="control-val";const _o=document.createElement("div");_o.className="control-label-line";const Ll=document.createElement("span");Ll.textContent=Tt,_o.appendChild(Ll),_o.appendChild(go);const Un=document.createElement("input");Un.type="range",Un.min=String(xe),Un.max=String(be),Un.step=String($e);const Sa=()=>{const Hs=Number(Et[ve]);Un.value=String(Hs),go.textContent=Hs.toFixed(2),wn(Un)};Sa(),z.push(Sa),Un.addEventListener("input",()=>{o.isPlaying&&!o.isPaused&&(o.isPaused=!0,j());const Hs=parseFloat(Un.value);Gt({[ve]:Hs}),go.textContent=Hs.toFixed(2),wn(Un),qe&&Fe()}),Un.addEventListener("dblclick",()=>{Gt({[ve]:Os}),Sa(),qe&&Fe(),v(`Reset ${Tt}`)}),Ii.appendChild(_o),Ii.appendChild(Un),lt.appendChild(Ii)}function pt(lt,Tt,Et,Gt,ve){const xe=document.createElement("label");xe.className="toggle-row";const be=document.createElement("span");be.textContent=Tt;const $e=document.createElement("input");$e.type="checkbox";const qe=()=>{$e.checked=!!Et[ve]};qe(),z.push(qe),$e.addEventListener("change",()=>{Gt({[ve]:$e.checked}),Fe()}),xe.appendChild(be),xe.appendChild($e),lt.appendChild(xe)}const vt=I(mt,"Light Fury Moods & Expressions",!0),ft=document.createElement("div");ft.className="weather-grid";const Dt=[];H_.forEach((lt,Tt)=>{const Et=document.createElement("button");Et.className=`weather-btn${Tt===0?" active":""}`,Et.innerHTML=`
      <span class="weather-btn-title">${lt.label}</span>
      <span class="weather-btn-sub">${lt.subtitle}</span>
    `,Et.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),j()),Dt.forEach(Gt=>Gt.classList.remove("active")),Et.classList.add("active"),s.setState(lt.patch),Fe()}),Dt.push(Et),ft.appendChild(Et)}),vt.appendChild(ft);const dt=(lt,Tt,Et,Gt,ve,xe=.01,be=!1)=>tt(lt,Tt,s.state,$e=>s.setState($e),Et,Gt,ve,xe,be),St=(lt,Tt,Et)=>pt(lt,Tt,s.state,Gt=>s.setState(Gt),Et),Wt=I(mt,"I. Bioluminescence, Shimmer & Cloak",!0);dt(Wt,"Hidden World Neon Bioluminescence","biolumGlow",0,1),dt(Wt,"Thermal-Mirror Optical Cloak","thermalCloak",0,1),dt(Wt,"Stardust Glimmer & Opal Sheen","iridescentShimmer",0,1),dt(Wt,"Radiant Partly-Glowing Skin","radiantGlow",0,1),dt(Wt,"Underwing Rose & Ice Countershade","pastelTint",0,1),dt(Wt,"Orchid-Cyan Plasma Charge","plasmaGlow",0,1);const xt=I(mt,"II. Gaze, Ears & Expression",!1);dt(xt,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),dt(xt,"Curious Head-Tilt (Roll)","headRoll",-1,1),dt(xt,"Head Yaw (Swan-Neck Coupled)","headYaw",-1,1),dt(xt,"Head Pitch","headPitch",-1,1),dt(xt,"Eye Gaze Horizontal","eyeYaw",-1,1),dt(xt,"Eye Gaze Vertical","eyePitch",-1,1),dt(xt,"Affectionate Squint-Smile","squint",0,1),dt(xt,"Almond Eyelid Blink","blink",0,1),dt(xt,"Rounded Ear-Nubs Perk","earPerk",0,1),dt(xt,"Ear Asymmetry","earAsymmetry",-1,1),dt(xt,"Temple Cheek Nubs","cheekNubFlare",0,1);const Ct=I(mt,"III. Smile, Retractable Fangs & Tongue",!1);dt(Ct,"Jaw Open","jawOpen",0,1),dt(Ct,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),dt(Ct,"Pink Tongue Extend","tongueExtend",0,1),dt(Ct,"Tongue Curl","tongueCurl",-1,1);const $t=document.createElement("button");$t.className="action-btn secondary",$t.textContent="Toggle Soft Gums vs. Strike Fangs";let Zt=!1;$t.addEventListener("click",()=>{Zt=!Zt,Zt?s.setState({jawOpen:.68,teethExtension:1,pupilDilation:.1,squint:.36,earPerk:.14}):s.setState({jawOpen:.26,teethExtension:0,pupilDilation:.92,squint:.24,earPerk:.9}),Fe()}),Ct.appendChild($t);const kt=I(mt,"IV. Scalloped Wings, Veil & Sail",!1);dt(kt,"Coy Wing-Veil Drape","coyWingVeil",0,1),dt(kt,"Wing Unfurl (Cape ↔ 7.80m Span)","wingUnfurl",0,1),dt(kt,"Wing Flap Elevation","wingFlap",-1,1),dt(kt,"Wing Forward/Dive Sweep","wingSweep",-1,1),dt(kt,"Airfoil Camber","wingCamber",0,1),dt(kt,"Pelvic Glide Flukes","pelvicFinFlare",0,1),dt(kt,"Continuous Dorsal Sail Flex","dorsalSailFlex",0,1);const Jt=I(mt,"V. Symmetrical Heart-Tail Flukes",!1);St(Jt,"Sync Heart-Tail Lobes","syncHeartTailFlukes"),dt(Jt,"Right Heart-Lobe Fold","rightHeartFinFlare",-1,1,.01,!0),dt(Jt,"Left Heart-Lobe Fold","leftHeartFinFlare",-1,1,.01,!0),dt(Jt,"Tail Horizontal Sweep","tailYaw",-1,1),dt(Jt,"Tail Vertical Lift","tailPitch",-1,1),dt(Jt,"Feline Tail Curl","tailCurl",-1,1);const jt=I(mt,"VI. Stance, 4-Paw IK & Flight Legs",!1);dt(jt,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),dt(jt,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),dt(jt,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),dt(jt,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),dt(jt,"Swan Neck Arch","neckArch",-1,1),dt(jt,"Neck Turn","neckYaw",-1,1),dt(jt,"Spine Arch","spineArch",-1,1),dt(jt,"Spine Twist","spineTwist",-1,1),St(jt,"Living Idle (Purr & Natural Blinks)","subtleBreathing");const ye=I(_t,"Toothless Moods & Expressions",!0),J=document.createElement("div");J.className="weather-grid";const Lt=[];D_.forEach((lt,Tt)=>{const Et=document.createElement("button");Et.className=`weather-btn${Tt===0?" active":""}`,Et.innerHTML=`
      <span class="weather-btn-title">${lt.label}</span>
      <span class="weather-btn-sub">${lt.subtitle}</span>
    `,Et.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),j()),Lt.forEach(Gt=>Gt.classList.remove("active")),Et.classList.add("active"),e.setState(lt.patch),Fe()}),Lt.push(Et),J.appendChild(Et)}),ye.appendChild(J);const rt=(lt,Tt,Et,Gt,ve,xe=.01,be=!1)=>tt(lt,Tt,e.state,$e=>e.setState($e),Et,Gt,ve,xe,be),Mt=(lt,Tt,Et)=>pt(lt,Tt,e.state,Gt=>e.setState(Gt),Et),Ft=I(_t,"I. Alpha Bioluminescence & Lightning",!0);rt(Ft,"Alpha Blue Plasma Glow","alphaGlow",0,1),rt(Ft,"Cavern Bioluminescent Markings","biolumGlow",0,1),rt(Ft,"Lightning-Cloak Mirror Arcs","lightningCloak",0,1);const Rt=I(_t,"II. Head, Ear-Plates & Emerald Eyes",!1);rt(Rt,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),rt(Rt,"Head Yaw (Cervical Coupled)","headYaw",-1,1),rt(Rt,"Head Pitch","headPitch",-1,1),rt(Rt,"Curious Head Roll","headRoll",-1,1),rt(Rt,"Eye Gaze Horizontal","eyeYaw",-1,1),rt(Rt,"Eye Gaze Vertical","eyePitch",-1,1),rt(Rt,"Palpebral Eyelid Blink","blink",0,1),rt(Rt,"Focus Squint","squint",0,1),rt(Rt,"Primary Ear-Plates Perk","earPerk",0,1),rt(Rt,"Ear-Plate Asymmetry","earAsymmetry",-1,1),rt(Rt,"Secondary Cheek Nubs","cheekNubFlare",0,1);const ne=I(_t,"III. Jaw, Retractable Teeth & Tongue",!1);rt(ne,"Jaw Open","jawOpen",0,1),rt(ne,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),rt(ne,"Tongue Extend","tongueExtend",0,1),rt(ne,"Tongue Curl","tongueCurl",-1,1);const Re=document.createElement("button");Re.className="action-btn secondary",Re.textContent='Toggle "Toothless" Gums vs. Fangs';let Ge=!1;Re.addEventListener("click",()=>{Ge=!Ge,Ge?e.setState({jawOpen:.72,teethExtension:1,pupilDilation:.14,squint:.32}):e.setState({jawOpen:.36,teethExtension:0,pupilDilation:.85,squint:0}),Fe()}),ne.appendChild(Re);const ct=I(_t,"IV. Wings, Fins & Flush V-Spines",!1);rt(ct,"Wing Unfurl (Cape ↔ 8.56m Span)","wingUnfurl",0,1),rt(ct,"Wing Flap Elevation","wingFlap",-1,1),rt(ct,"Wing Forward/Dive Sweep","wingSweep",-1,1),rt(ct,"Phalangeal Airfoil Camber","wingCamber",0,1),rt(ct,"Pelvic 3-Spar Glide Fins","pelvicFinFlare",0,1),rt(ct,"Dorsal V-Spine Split","dorsalSpineSplit",0,1);const yt=I(_t,"V. Prosthetic Tail & Mechanics",!1);Mt(yt,"Auto-Sync Left Prosthetic Linkage","autoSyncProstheticTail"),rt(yt,"Left Prosthetic Fin Fold","leftProstheticFinFlare",-1,1,.01,!0),rt(yt,"Right Biological Fin Fold","rightTailFinFlare",-1,1,.01,!0),rt(yt,"Tail Horizontal Sweep","tailYaw",-1,1),rt(yt,"Tail Vertical Lift","tailPitch",-1,1),rt(yt,"Distal Tail Whip Curl","tailCurl",-1,1);const Bt=I(_t,"VI. Stance, 4-Paw IK & Flight Legs",!1);rt(Bt,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),rt(Bt,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),rt(Bt,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),rt(Bt,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),rt(Bt,"Neck Arch","neckArch",-1,1),rt(Bt,"Neck Turn","neckYaw",-1,1),rt(Bt,"Spine Arch","spineArch",-1,1),rt(Bt,"Spine Twist","spineTwist",-1,1),Mt(Bt,"Living Idle (Breath, Blinks & Twitches)","subtleBreathing");const te=I(Pt,"Archipelago, Sky & North Sea",!0),se=document.createElement("div");se.className="control-label-line";const Ot=vs[a.initialWeatherPreset]??vs["golden-hour"];se.innerHTML=`<span>Coastal Atmosphere</span><span class="control-val" id="weather-preset-desc">${Ot.subtitle}</span>`,te.appendChild(se);const he=se.querySelector("#weather-preset-desc"),re=document.createElement("div");re.className="weather-grid";const Ce=[],De={...Ks},on=[],Xe=[],Ue=document.createElement("div");Ue.className="control-row",Ue.innerHTML=`
    <div class="control-label-line">
      <span>Sun / Moon Elevation</span>
      <span class="control-val" id="elev-val">${Ot.sunElevationDeg.toFixed(1)}&deg;</span>
    </div>
    <input type="range" id="elev-slider" min="2" max="55" step="0.5" value="${Ot.sunElevationDeg}" />
  `;const an=Ue.querySelector("#elev-slider"),Sn=Ue.querySelector("#elev-val");wn(an),an.addEventListener("input",()=>{const lt=parseFloat(an.value);Sn.textContent=`${lt.toFixed(1)}°`,wn(an),a.onSunElevationChange(lt)});const un=document.createElement("div");un.className="control-row";const Rn=lt=>Math.min(1,Math.max(0,(lt-6e-4)/.0044)),Ki=lt=>6e-4+lt*.0044,Qi=Rn(Ot.mistDensity);un.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Mist &amp; Horizon Veil</span>
      <span class="control-val" id="mist-val">${Qi.toFixed(2)}</span>
    </div>
    <input type="range" id="mist-slider" min="0" max="1" step="0.01" value="${Qi.toFixed(2)}" />
  `;const ui=un.querySelector("#mist-slider"),U=un.querySelector("#mist-val");wn(ui),ui.addEventListener("input",()=>{const lt=parseFloat(ui.value);U.textContent=lt.toFixed(2),wn(ui),a.onMistDensityChange(Ki(lt))});let et=null;const ht=lt=>{const Tt=vs[lt];if(!Tt)return;Ce.forEach(({id:ve,btn:xe})=>xe.classList.toggle("active",ve===lt)),he.textContent=Tt.subtitle,an.value=String(Tt.sunElevationDeg),Sn.textContent=`${Tt.sunElevationDeg.toFixed(1)}°`,wn(an);const Et=Rn(Tt.mistDensity);ui.value=Et.toFixed(2),U.textContent=Et.toFixed(2),wn(ui),a.onSelectWeatherPreset(Tt.id);let Gt=null;Tt.id==="stormy-squall"?Gt={idx:3,desc:"Storm Gale",params:{waveAmplitude:2.15,waveSpeed:1.85,seaChoppiness:.96}}:Tt.id==="starlit-night"||Tt.id==="dawn-dusk"?Gt={idx:0,desc:"Calm Fjord",params:{waveAmplitude:.34,waveSpeed:.72,seaChoppiness:.24}}:Gt={idx:1,desc:"Nordic Swell",params:{...Ks}},Gt&&(Xe.forEach((ve,xe)=>ve.classList.toggle("active",xe===Gt.idx)),et&&(et.textContent=Gt.desc),Object.assign(De,Gt.params),on.forEach(ve=>ve()),a.onOceanParamsChange(Gt.params))};Object.values(vs).forEach(lt=>{const Tt=document.createElement("button");Tt.className=`weather-btn${lt.id===a.initialWeatherPreset?" active":""}`,Tt.innerHTML=`
      <span class="weather-btn-title">${lt.label}</span>
      <span class="weather-btn-sub">${lt.subtitle}</span>
    `,Tt.addEventListener("click",()=>{ut.forEach(Et=>Et.classList.remove("active")),ht(lt.id)}),Ce.push({id:lt.id,btn:Tt}),re.appendChild(Tt)}),te.appendChild(re),te.appendChild(Ue),te.appendChild(un);const ut=[];[{label:"Golden Dusk",toast:"Scene Moment — Golden Dusk Courtship",weather:"golden-hour",lfPatch:{biolumGlow:.12,thermalCloak:0,iridescentShimmer:.68,radiantGlow:.3,plasmaGlow:0},nfPatch:{alphaGlow:0,biolumGlow:.08,lightningCloak:0}},{label:"Biolum Night",toast:"Scene Moment — Hidden World Bioluminescence",weather:"starlit-night",lfPatch:{biolumGlow:.96,thermalCloak:0,iridescentShimmer:.85,radiantGlow:.72,plasmaGlow:.58},nfPatch:{alphaGlow:.92,biolumGlow:.95,lightningCloak:.24}},{label:"Mirror Cloak",toast:"Scene Moment — Light Fury Optical Cloak",weather:"dawn-dusk",lfPatch:{thermalCloak:.88,iridescentShimmer:.96,biolumGlow:.42,plasmaGlow:.32},nfPatch:{alphaGlow:.18,biolumGlow:.22,lightningCloak:0}},{label:"Storm Gale",toast:"Scene Moment — North Sea Lightning Squall",weather:"stormy-squall",lfPatch:{biolumGlow:.54,thermalCloak:0,plasmaGlow:.65,wingUnfurl:.58},nfPatch:{alphaGlow:.86,biolumGlow:.78,lightningCloak:.88,wingUnfurl:.62}}].forEach((lt,Tt)=>{const Et=document.createElement("button");Et.className=`moment-chip${Tt===0?" active":""}`,Et.textContent=lt.label,Et.addEventListener("click",()=>{ut.forEach((Gt,ve)=>Gt.classList.toggle("active",ve===Tt)),ht(lt.weather),s.setState(lt.lfPatch),e.setState(lt.nfPatch),Fe(),v(lt.toast)}),ut.push(Et),F.appendChild(Et)});const At=document.createElement("div");At.className="control-label-line",At.style.marginTop="11px",At.innerHTML='<span>Irregular North Sea Swells</span><span class="control-val" id="sea-preset-desc">Nordic Swell</span>',te.appendChild(At);const Nt=At.querySelector("#sea-preset-desc");et=Nt;const Ht=document.createElement("div");Ht.className="segmented-row";const Vt=[{label:"Quiet",desc:"Glassy Fjord",params:{waveAmplitude:.14,waveSpeed:.5,seaChoppiness:.06}},{label:"Swell",desc:"Nordic Swell",params:{...Ks}},{label:"Rough",desc:"Crossed Sea",params:{waveAmplitude:1.65,waveSpeed:1.45,seaChoppiness:.82}},{label:"Storm",desc:"Storm Gale",params:{waveAmplitude:2.3,waveSpeed:1.95,seaChoppiness:1}}];function oe(lt,Tt,Et,Gt,ve=.01){const xe=Ks[Tt],be=document.createElement("div");be.className="control-row",be.title="Double-click slider to reset",be.innerHTML=`
      <div class="control-label-line">
        <span>${lt}</span>
        <span class="control-val">${De[Tt].toFixed(2)}</span>
      </div>
      <input type="range" min="${Et}" max="${Gt}" step="${ve}" value="${De[Tt]}" />
    `;const $e=be.querySelector(".control-val"),qe=be.querySelector("input");wn(qe),on.push(()=>{qe.value=String(De[Tt]),$e.textContent=De[Tt].toFixed(2),wn(qe)}),qe.addEventListener("input",()=>{const Os=parseFloat(qe.value);De[Tt]=Os,$e.textContent=Os.toFixed(2),wn(qe),Xe.forEach(Ii=>Ii.classList.remove("active")),Nt.textContent="Custom Swell",a.onOceanParamsChange({[Tt]:Os})}),qe.addEventListener("dblclick",()=>{De[Tt]=xe,qe.value=String(xe),$e.textContent=xe.toFixed(2),wn(qe),a.onOceanParamsChange({[Tt]:xe}),v(`Reset ${lt}`)}),te.appendChild(be)}Vt.forEach((lt,Tt)=>{const Et=document.createElement("button");Et.className=`seg-btn${Tt===1?" active":""}`,Et.textContent=lt.label,Et.addEventListener("click",()=>{Xe.forEach(Gt=>Gt.classList.remove("active")),Et.classList.add("active"),Nt.textContent=lt.desc,Object.assign(De,lt.params),on.forEach(Gt=>Gt()),a.onOceanParamsChange(lt.params)}),Xe.push(Et),Ht.appendChild(Et)}),te.appendChild(Ht),oe("Swell Group Height","waveAmplitude",.05,2.5,.01),oe("Current & Swell Velocity","waveSpeed",.15,2.5,.01),oe("Cross-Chop & Whitecap Foam","seaChoppiness",0,1,.01);const ie=document.createElement("div");ie.className="control-label-line",ie.style.marginTop="11px",ie.innerHTML='<span>Mesh Level-of-Detail</span><span class="control-val" id="lod-mode-label">LOD0 Hero</span>',te.appendChild(ie);const Kt=ie.querySelector("#lod-mode-label"),Me=document.createElement("div");Me.className="segmented-row";const Ee=[{label:"LOD0",mode:"0",desc:"LOD0 Hero"},{label:"LOD1",mode:"1",desc:"LOD1 Mid"},{label:"LOD2",mode:"2",desc:"LOD2 Far"},{label:"Auto",mode:"auto",desc:"Auto Distance"}],Ye=[];Ee.forEach((lt,Tt)=>{const Et=document.createElement("button");Et.className=`seg-btn${Tt===0?" active":""}`,Et.textContent=lt.label,Et.addEventListener("click",()=>{if(Ye.forEach(Gt=>Gt.classList.remove("active")),Et.classList.add("active"),Kt.textContent=lt.desc,lt.mode==="auto")t.autoLOD=!0,n.autoLOD=!0;else{const Gt=Number(lt.mode);t.autoLOD=!1,n.autoLOD=!1,t.setActiveLOD(Gt),n.setActiveLOD(Gt)}}),Ye.push(Et),Me.appendChild(Et)}),te.appendChild(Me);const ke=document.createElement("div");ke.className="export-btn-grid";const _e=document.createElement("button");_e.className="action-btn",_e.textContent="Light Fury .GLB";const qt=document.createElement("button");qt.className="action-btn",qt.textContent="Toothless .GLB",ke.appendChild(_e),ke.appendChild(qt);const Ve=document.createElement("div");Ve.className="export-status";const Se=async lt=>{_e.disabled=!0,qt.disabled=!0,Ve.style.color="",Ve.textContent="Packaging binary .GLB asset…";try{const Tt=lt==="light-fury"?await Jv(n,n.activeLOD):await Qv(t,t.activeLOD);Ve.textContent=`Saved ${Tt.filename} (${Tt.sizeMB.toFixed(2)} MB)`,v(`Exported ${Tt.filename}`)}catch(Tt){Ve.style.color="#f09898",Ve.textContent=`Export failed: ${Tt.message}`}finally{_e.disabled=!1,qt.disabled=!1}};_e.addEventListener("click",()=>Se("light-fury")),qt.addEventListener("click",()=>Se("toothless")),te.appendChild(ke),te.appendChild(Ve);function Fe(){for(const lt of z)lt()}return Q.querySelector("#btn-reset-pose").addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),Dt.forEach((lt,Tt)=>lt.classList.toggle("active",Tt===0)),Lt.forEach((lt,Tt)=>lt.classList.toggle("active",Tt===0)),ut.forEach((lt,Tt)=>lt.classList.toggle("active",Tt===0)),j(),Fe(),v("Reset Twin Furies to Hero Perch")}),j(),{updateTelemetry(lt,Tt){M.innerHTML=`<strong>${Math.round(lt)}</strong> FPS`;const Et=t.lodStats[Tt].triangles+n.lodStats[Tt].triangles;b.innerHTML=`<strong>LOD${Tt}</strong> &middot; ${Et.toLocaleString()} tris`},updateFlightUI:j,syncControlsFromRig:Fe,showToast:v,triggerShutterFlash:m,clearActiveCameraBookmark(){it.forEach(lt=>lt.classList.remove("active"))}}}async function ex(){const i=Tv(),t=document.getElementById("canvas-container"),e=document.getElementById("hud-root");await i.advanceTo(14,"Initializing HDR WebGL2 post-processing pipeline…");const n=new a1({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=vh,n.toneMapping=al,n.toneMappingExposure=1.14,t.appendChild(n.domElement);const s=new ra,o=new In(42,window.innerWidth/window.innerHeight,.12,9500);let a=ea[0];o.position.copy(a.position);const r=new l1(o,n.domElement);r.target.copy(a.target),r.enableDamping=!0,r.dampingFactor=.065,r.rotateSpeed=.78,r.panSpeed=.85,r.zoomSpeed=.92,r.minDistance=.34,r.maxDistance=280,r.maxPolarAngle=Math.PI*.56,r.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},r.update();const l=new Fn(window.innerWidth*n.getPixelRatio(),window.innerHeight*n.getPixelRatio(),{type:qn,samples:4}),c=new E1(n,l);c.addPass(new T1(s,o));const h=new Fs(new zt(window.innerWidth,window.innerHeight),.26,.52,1.04);h.materialHighPassFilter.fragmentShader=`
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
  `,h.materialHighPassFilter.needsUpdate=!0,c.addPass(h);const u=new R1;u.material.fragmentShader=u.material.fragmentShader.replace("gl_FragColor = texture2D( tDiffuse, vUv );",`gl_FragColor = texture2D( tDiffuse, vUv );
     gl_FragColor.r = !(gl_FragColor.r >= 0.0) ? 0.0 : (!(gl_FragColor.r <= 65000.0) ? 32.0 : min(gl_FragColor.r, 32.0));
     gl_FragColor.g = !(gl_FragColor.g >= 0.0) ? 0.0 : (!(gl_FragColor.g <= 65000.0) ? 32.0 : min(gl_FragColor.g, 32.0));
     gl_FragColor.b = !(gl_FragColor.b >= 0.0) ? 0.0 : (!(gl_FragColor.b <= 65000.0) ? 32.0 : min(gl_FragColor.b, 32.0));
     gl_FragColor.a = 1.0;`),u.material.needsUpdate=!0,c.addPass(u),await i.advanceTo(34,"Sculpting Nordic archipelago ridges, sea-arches & North Sea swells…");const p="golden-hour",f=u_(n,s,p),g=I_(f.sharedUniforms);s.add(g.group),await i.advanceTo(58,"Forging Night Fury armor scutes, flush dorsal spines & 117-bone rig…");const v=l_();v.rootGroup.position.copy(On.position),v.rootGroup.rotation.set(0,On.yaw,0),s.add(v.rootGroup),v.rootGroup.updateMatrixWorld(!0);const m=new B_(v);await i.advanceTo(82,"Weaving Light Fury pearl luminescence, mirror cloak & 111-bone rig…");const d=Ev();d.rootGroup.position.copy(Hn.position),d.rootGroup.rotation.set(0,Hn.yaw,0),s.add(d.rootGroup),d.rootGroup.updateMatrixWorld(!0);const M=new Y_(d);await i.advanceTo(94,"Compiling shaders & calibrating twin courtship flight splines…");const b=new Xi(v,m,d,M);let _=null,S=1,w=!0,A=!1;r.addEventListener("start",()=>{_=null});const E=tx(e,v,m,d,M,b,{initialWeatherPreset:p,onSelectCameraBookmark(st){a=st,_={goalPos:st.position.clone(),goalTarget:st.target.clone()}},onFlightResetCamera(){_={goalPos:a.position.clone(),goalTarget:a.target.clone()}},onFlightSpeedChange(st){S=st},onToggleCursorGaze(st){w=st},onCaptureSnapshot(){A=!0},onSelectWeatherPreset(st){f.applyPreset(st,n,s)},onSunElevationChange(st){f.setSunElevation(st,n,s)},onMistDensityChange(st){f.setMistDensity(st)},onOceanParamsChange(st){g.ocean.setOceanParams(st)}}),y=new Set,x=new T,P=new T,C=new T,R=new T;window.addEventListener("keydown",st=>{const mt=document.activeElement?.tagName;mt==="INPUT"||mt==="TEXTAREA"||y.add(st.code)}),window.addEventListener("keyup",st=>{y.delete(st.code)}),window.addEventListener("blur",()=>{y.clear()});const L=new wp,D=new zt;n.domElement.addEventListener("dblclick",st=>{if(b.isPlaying)return;const mt=n.domElement.getBoundingClientRect();D.x=(st.clientX-mt.left)/mt.width*2-1,D.y=-((st.clientY-mt.top)/mt.height)*2+1,L.setFromCamera(D,o);const _t=[d.rootGroup,v.rootGroup,g.group],bt=L.intersectObjects(_t,!0).find(St=>St.distance<650&&!(St.object instanceof Qr)&&!St.object.userData?.excludeFromExport);if(!bt)return;const z=bt.point.clone();let I=!1,tt=bt.object,pt="Coastal Landform";for(;tt;){if(tt===d.rootGroup){I=!0,pt="Light Fury";break}if(tt===v.rootGroup){I=!0,pt="Toothless";break}if(tt.name.startsWith("FaroeseHeadlandSeaArch")){pt="Headland Sea-Arch";break}if(tt.name==="TabularFaroeseSeaStacks"){pt="Tabular Sea-Stack";break}if(tt.name==="WestWaterfallDoubleIsland"){pt="Waterfall Double-Island";break}if(tt.name==="StarboardCrescentLagoonAtoll"){pt="Crescent Lagoon";break}tt=tt.parent}const vt=o.position.clone().sub(z).normalize(),ft=o.position.distanceTo(z),Dt=I?q.clamp(ft*.6,2.6,7.5):q.clamp(ft*.55,10,68),dt=z.clone().addScaledVector(vt,Dt);dt.y=Math.max(dt.y,xs(dt.x,dt.z)+1.2,-9.2),E.clearActiveCameraBookmark(),_={goalPos:dt,goalTarget:z},E.showToast(`Focused on ${pt}`)});const k=new zt(0,0);let B=-10,N=!1,H=0,V=0,X=0;window.addEventListener("pointerdown",st=>{st.target===n.domElement&&(N=!0)}),window.addEventListener("pointerup",()=>{N=!1}),window.addEventListener("pointermove",st=>{N||(k.x=st.clientX/Math.max(1,window.innerWidth)*2-1,k.y=-(st.clientY/Math.max(1,window.innerHeight)*2+1),B=performance.now()*.001)});const K=v.rig.boneMap.get("head"),G=v.rig.boneMap.get("neck_03"),W=v.rig.boneMap.get("eye_L"),O=v.rig.boneMap.get("eye_R"),nt=d.rig.boneMap.get("head"),at=d.rig.boneMap.get("neck_03"),$=d.rig.boneMap.get("eye_L"),j=d.rig.boneMap.get("eye_R");window.addEventListener("resize",()=>{const st=window.innerWidth,mt=window.innerHeight;o.aspect=st/mt,o.updateProjectionMatrix(),n.setSize(st,mt),c.setSize(st,mt),h.resolution.set(st,mt)}),m.update(.016),M.update(.016),f.update(0,new T(0,1.15,.35),o.position),g.update(0),c.render();const Y=new jh;let it=0,gt=0,Q=60,F=!1;function wt(){requestAnimationFrame(wt);const st=Math.min(Y.getDelta(),.05),mt=Y.elapsedTime,_t=b.isPlaying,Pt=b.update(st*S,o,r.target);if(r.maxPolarAngle=Pt.isAirborne?Math.PI*.84:Math.PI*.56,F&&!b.isPlaying&&(_={goalPos:a.position.clone(),goalTarget:a.target.clone()},E.updateFlightUI(),E.syncControlsFromRig()),F=b.isPlaying,_t&&E.updateFlightUI(),R.set(0,0,0),!b.isPlaying||!b.followCamera){const dt=(y.has("KeyW")||y.has("ArrowUp")?1:0)-(y.has("KeyS")||y.has("ArrowDown")?1:0),St=(y.has("KeyD")||y.has("ArrowRight")?1:0)-(y.has("KeyA")||y.has("ArrowLeft")?1:0),Wt=(y.has("KeyE")?1:0)-(y.has("KeyQ")?1:0);if(dt!==0||St!==0||Wt!==0){_=null,o.getWorldDirection(P),C.crossVectors(P,o.up).normalize(),R.addScaledVector(P,dt).addScaledVector(C,St),R.y+=Wt*.85,R.lengthSq()>1e-5&&R.normalize();const xt=o.position.distanceTo(r.target),Ct=q.clamp(xt*.85,6.5,34),$t=y.has("ShiftLeft")||y.has("ShiftRight")?2.4:1;R.multiplyScalar(Ct*$t)}}if(x.lerp(R,1-Math.exp(-9*st)),x.lengthSq()>1e-4&&(o.position.addScaledVector(x,st),r.target.addScaledVector(x,st)),_&&!b.isPlaying){const dt=1-Math.exp(-5.5*st);o.position.lerp(_.goalPos,dt),r.target.lerp(_.goalTarget,dt),o.position.distanceTo(_.goalPos)<.012&&r.target.distanceTo(_.goalTarget)<.012&&(_=null)}r.update();const bt=xs(o.position.x,o.position.z),z=Math.max(-9.8,bt+.55);o.position.y<z&&(o.position.y=z),m.update(st),M.update(st);const tt=performance.now()*.001-B<4&&!N,pt=o.position.distanceTo(new T(0,1.1,0))<26,vt=w&&!b.isPlaying&&tt&&pt?1:0;if(X+=(vt-X)*(1-Math.exp(-4.2*st)),H+=(k.x-H)*(1-Math.exp(-5.5*st)),V+=(k.y-V)*(1-Math.exp(-5.5*st)),X>.002){const dt=H*.22*X,St=-V*.14*X,Wt=-H*.07*X,xt=H*.14*X,Ct=-V*.1*X;K&&(K.rotation.y+=dt*.72,K.rotation.x+=St*.75,K.rotation.z+=Wt),G&&(G.rotation.y+=dt*.32,G.rotation.x+=St*.25),W&&O&&(W.rotation.y+=xt,O.rotation.y+=xt,W.rotation.x+=Ct,O.rotation.x+=Ct),nt&&(nt.rotation.y+=dt*.78,nt.rotation.x+=St*.78,nt.rotation.z+=Wt*1.15),at&&(at.rotation.y+=dt*.36,at.rotation.x+=St*.28),$&&j&&($.rotation.y+=xt,j.rotation.y+=xt,$.rotation.x+=Ct,j.rotation.x+=Ct)}const ft=o.position.distanceTo(Pt.worldFocus),Dt=v.updateAutoLOD(ft);if(d.updateAutoLOD(ft),f.update(mt,Pt.worldFocus,o.position),g.update(mt),it+=st,gt++,it>=.4){const dt=gt/it;Q=Q*.65+dt*.35,E.updateTelemetry(Q,Dt),it=0,gt=0}if(c.render(),A){A=!1;try{const dt=n.domElement.toDataURL("image/png"),St=document.createElement("a"),Wt=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");St.download=`twin-furies-atelier-${Wt}.png`,St.href=dt,St.click(),E.triggerShutterFlash(),E.showToast("Saved UI-Free HD Snapshot (.PNG)")}catch{E.showToast("Snapshot unavailable on this device")}}}wt(),await i.completeAndDissolve(e)}ex();
