(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tr="174",io={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xd=0,vc=1,_d=2,nu=1,iu=2,Ni=3,cs=0,Fn=1,on=2,Oi=0,so=1,Go=2,xc=3,_c=4,Md=5,Ts=100,wd=101,yd=102,bd=103,Sd=104,Ad=200,Td=201,Ed=202,Cd=203,tl=204,el=205,Pd=206,Rd=207,Ld=208,Id=209,Fd=210,Dd=211,Nd=212,Ud=213,kd=214,nl=0,il=1,sl=2,Hi=3,ol=4,al=5,rl=6,ll=7,su=0,zd=1,Bd=2,as=0,ou=1,au=2,ru=3,Gl=4,lu=5,cu=6,hu=7,Mc="attached",Od="detached",uu=300,uo=301,po=302,cl=303,hl=304,er=306,Ci=1e3,ns=1001,Wa=1002,Bn=1003,du=1004,ko=1005,gi=1006,Da=1007,is=1008,Gi=1009,pu=1010,fu=1011,Xo=1012,Xl=1013,Ls=1014,vi=1015,Ei=1016,Yl=1017,$l=1018,fo=1020,mu=35902,gu=1021,vu=1022,$n=1023,xu=1024,_u=1025,oo=1026,mo=1027,ql=1028,Zl=1029,Mu=1030,jl=1031,Kl=1033,Na=33776,Ua=33777,ka=33778,za=33779,ul=35840,dl=35841,pl=35842,fl=35843,ml=36196,gl=37492,vl=37496,xl=37808,_l=37809,Ml=37810,wl=37811,yl=37812,bl=37813,Sl=37814,Al=37815,Tl=37816,El=37817,Cl=37818,Pl=37819,Rl=37820,Ll=37821,Ba=36492,Il=36494,Fl=36495,wu=36283,Dl=36284,Nl=36285,Ul=36286,Hd=2300,Wd=2301,Vd=3200,Gd=3201,yu=0,Xd=1,ni="",_n="srgb",go="srgb-linear",Va="linear",Be="srgb",Ns=7680,wc=519,Yd=512,$d=513,qd=514,bu=515,Zd=516,jd=517,Kd=518,Qd=519,yc=35044,bc="300 es",zi=2e3,Ga=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sc=1234567;const Ho=Math.PI/180,Yo=180/Math.PI;function Fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Ql(i,t){return(i%t+t)%t}function Jd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function tp(i,t,e){return i!==t?(e-i)/(t-i):0}function Wo(i,t,e){return(1-e)*i+e*t}function ep(i,t,e,n){return Wo(i,t,1-Math.exp(-e*n))}function np(i,t=1){return t-Math.abs(Ql(i,t*2)-t)}function ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function op(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ap(i,t){return i+Math.random()*(t-i)}function rp(i){return i*(.5-Math.random())}function lp(i){i!==void 0&&(Sc=i);let t=Sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cp(i){return i*Ho}function hp(i){return i*Yo}function up(i){return(i&i-1)===0&&i!==0}function dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,t,e,n,s){const o=Math.cos,a=Math.sin,r=o(e/2),l=a(e/2),c=o((t+n)/2),h=a((t+n)/2),u=o((t-n)/2),d=a((t-n)/2),m=o((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(r*h,l*u,l*d,r*c);break;case"YZY":i.set(l*d,r*h,l*u,r*c);break;case"ZXZ":i.set(l*u,l*d,r*h,r*c);break;case"XZX":i.set(r*h,l*v,l*m,r*c);break;case"YXY":i.set(l*m,r*h,l*v,r*c);break;case"ZYZ":i.set(l*v,l*m,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Js(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const G={DEG2RAD:Ho,RAD2DEG:Yo,generateUUID:Fs,clamp:Se,euclideanModulo:Ql,mapLinear:Jd,inverseLerp:tp,lerp:Wo,damp:ep,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:op,randFloat:ap,randFloatSpread:rp,seededRandom:lp,degToRad:cp,radToDeg:hp,isPowerOfTwo:up,ceilPowerOfTwo:dp,floorPowerOfTwo:pp,setQuaternionFromProperEuler:fp,normalize:Pn,denormalize:Js};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class be{constructor(t,e,n,s,o,a,r,l,c){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c)}set(t,e,n,s,o,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],v=n[8],g=s[0],f=s[3],p=s[6],w=s[1],_=s[4],x=s[7],y=s[2],b=s[5],A=s[8];return o[0]=a*g+r*w+l*y,o[3]=a*f+r*_+l*b,o[6]=a*p+r*x+l*A,o[1]=c*g+h*w+u*y,o[4]=c*f+h*_+u*b,o[7]=c*p+h*x+u*A,o[2]=d*g+m*w+v*y,o[5]=d*f+m*_+v*b,o[8]=d*p+m*x+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*o*h+n*r*l+s*o*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,d=r*l-h*o,m=c*o-a*l,v=e*u+n*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(r*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*o-r*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*o)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-s*c,s*l,-s*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(ur.makeScale(t,e)),this}rotate(t){return this.premultiply(ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new be;function Su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mp(){const i=Xa("canvas");return i.style.display="block",i}const Ac={};function bs(i){i in Ac||(Ac[i]=!0,console.warn(i))}function gp(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function vp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Tc=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _p(){const i={enabled:!0,workingColorSpace:go,spaces:{},convert:function(s,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===Be&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Be&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Va:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,a){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[go]:{primaries:t,whitePoint:n,transfer:Va,toXYZ:Tc,fromXYZ:Ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:Be,toXYZ:Tc,fromXYZ:Ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}const Le=_p();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Us;class Mp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Us===void 0&&(Us=Xa("canvas")),Us.width=t.width,Us.height=t.height;const n=Us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Us}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=Wi(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wp=0;class nr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(dr(s[a].image)):o.push(dr(s[a]))}else o=dr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yp=0;class Sn extends Is{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=ns,s=ns,o=gi,a=is,r=$n,l=Gi,c=Sn.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Fs(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ci:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ci:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=uu;Sn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,e=0,n=0,s=1){Ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],v=l[9],g=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,x=(m+1)/2,y=(p+1)/2,b=(h+d)/4,A=(u+g)/4,T=(v+f)/4;return _>x&&_>y?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=b/n,o=A/n):x>y?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=b/s,o=T/s):y<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(y),n=A/o,s=T/o),this.set(n,s,o,e),this}let w=Math.sqrt((f-v)*(f-v)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(f-v)/w,this.y=(u-g)/w,this.z=(d-h)/w,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bp extends Is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends bp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Au extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sp extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,r){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[a+0],m=o[a+1],v=o[a+2],g=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=g;return}if(u!==g||l!==d||c!==m||h!==v){let f=1-r;const p=l*d+c*m+h*v+u*g,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const y=Math.sqrt(_),b=Math.atan2(y,p*w);f=Math.sin(f*b)/y,r=Math.sin(r*b)/y}const x=r*w;if(l=l*f+d*x,c=c*f+m*x,h=h*f+v*x,u=u*f+g*x,f===1-r){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,a){const r=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[a],d=o[a+1],m=o[a+2],v=o[a+3];return t[e]=r*v+h*u+l*m-c*d,t[e+1]=l*v+h*d+c*u-r*m,t[e+2]=c*v+h*m+r*d-l*u,t[e+3]=h*v-r*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(s/2),u=r(o/2),d=l(n/2),m=l(s/2),v=l(o/2);switch(a){case"XYZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"YZX":this._x=d*h*u+c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u-d*m*v;break;case"XZY":this._x=d*h*u-c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+r+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(o-c)*m,this._z=(a-s)*m}else if(n>r&&n>u){const m=2*Math.sqrt(1+n-r-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(o+c)/m}else if(r>u){const m=2*Math.sqrt(1+r-n-u);this._w=(o-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-r);this._w=(a-s)/m,this._x=(o+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+s*c-o*l,this._y=s*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-s*r,this._w=a*h-n*r-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+s*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*s-r*n),h=2*(r*e-o*s),u=2*(o*n-a*e);return this.x=e+l*c+a*u-r*h,this.y=n+l*h+r*c-o*u,this.z=s+l*u+o*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=s*l-o*r,this.y=o*a-n*l,this.z=n*r-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pr.copy(this).projectOnVector(t),this.sub(pr)}reflect(t){return this.sub(pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new E,Cc=new rn;class hs{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,li):li.fromBufferAttribute(o,a),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),oa.subVectors(this.max,Po),ks.subVectors(t.a,Po),zs.subVectors(t.b,Po),Bs.subVectors(t.c,Po),$i.subVectors(zs,ks),qi.subVectors(Bs,zs),fs.subVectors(ks,Bs);let e=[0,-$i.z,$i.y,0,-qi.z,qi.y,0,-fs.z,fs.y,$i.z,0,-$i.x,qi.z,0,-qi.x,fs.z,0,-fs.x,-$i.y,$i.x,0,-qi.y,qi.x,0,-fs.y,fs.x,0];return!fr(e,ks,zs,Bs,oa)||(e=[1,0,0,0,1,0,0,0,1],!fr(e,ks,zs,Bs,oa))?!1:(aa.crossVectors($i,qi),e=[aa.x,aa.y,aa.z],fr(e,ks,zs,Bs,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ri=[new E,new E,new E,new E,new E,new E,new E,new E],li=new E,sa=new hs,ks=new E,zs=new E,Bs=new E,$i=new E,qi=new E,fs=new E,Po=new E,oa=new E,aa=new E,ms=new E;function fr(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){ms.fromArray(i,o);const r=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Ap=new hs,Ro=new E,mr=new E;class us{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ap.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const e=Ro.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ro,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(mr)),this.expandByPoint(Ro.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new E,gr=new E,ra=new E,Zi=new E,vr=new E,la=new E,xr=new E;class Ko{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gr.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(gr);const o=t.distanceTo(e)*.5,a=-this.direction.dot(ra),r=Zi.dot(this.direction),l=-Zi.dot(ra),c=Zi.lengthSq(),h=Math.abs(1-a*a);let u,d,m,v;if(h>0)if(u=a*l-r,d=a*r-l,v=o*h,u>=0)if(d>=-v)if(d<=v){const g=1/h;u*=g,d*=g,m=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=o,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*o+r)),d=u>0?-o:Math.min(Math.max(-o,-l),o),m=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-o,-l),o),m=d*(d+2*l)+c):(u=Math.max(0,-(a*o+r)),d=u>0?o:Math.min(Math.max(-o,-l),o),m=-u*u+d*(d+2*l)+c);else d=a>0?-o:o,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gr).addScaledVector(ra,d),m}intersectSphere(t,e){Li.subVectors(t.center,this.origin);const n=Li.dot(this.direction),s=Li.dot(Li)-n*n,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,s,o){vr.subVectors(e,t),la.subVectors(n,t),xr.crossVectors(vr,la);let a=this.direction.dot(xr),r;if(a>0){if(s)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Zi.subVectors(this.origin,t);const l=r*this.direction.dot(la.crossVectors(Zi,la));if(l<0)return null;const c=r*this.direction.dot(vr.cross(Zi));if(c<0||l+c>a)return null;const h=-r*Zi.dot(xr);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,o,a,r,l,c,h,u,d,m,v,g,f){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,r,l,c,h,u,d,m,v,g,f)}set(t,e,n,s,o,a,r,l,c,h,u,d,m,v,g,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=v,p[11]=g,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),o=1/Os.setFromMatrixColumn(t,1).length(),a=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=a*h,m=a*u,v=r*h,g=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+v*c,e[5]=d-g*c,e[9]=-r*l,e[2]=g-d*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,v=c*h,g=c*u;e[0]=d+g*r,e[4]=v*r-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=m*r-v,e[6]=g+d*r,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,v=c*h,g=c*u;e[0]=d-g*r,e[4]=-a*u,e[8]=v+m*r,e[1]=m+v*r,e[5]=a*h,e[9]=g-d*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,v=r*h,g=r*u;e[0]=l*h,e[4]=v*c-m,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=m*c-v,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,v=r*l,g=r*c;e[0]=l*h,e[4]=g-d*u,e[8]=v*u+m,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=m*u+v,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,m=a*c,v=r*l,g=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=m*u-v,e[2]=v*u-m,e[6]=r*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tp,t,Ep)}lookAt(t,e,n){const s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ji.crossVectors(n,Vn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ji.crossVectors(n,Vn)),ji.normalize(),ca.crossVectors(Vn,ji),s[0]=ji.x,s[4]=ca.x,s[8]=Vn.x,s[1]=ji.y,s[5]=ca.y,s[9]=Vn.y,s[2]=ji.z,s[6]=ca.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],v=n[2],g=n[6],f=n[10],p=n[14],w=n[3],_=n[7],x=n[11],y=n[15],b=s[0],A=s[4],T=s[8],S=s[12],M=s[1],P=s[5],C=s[9],R=s[13],F=s[2],I=s[6],k=s[10],N=s[14],D=s[3],O=s[7],H=s[11],Z=s[15];return o[0]=a*b+r*M+l*F+c*D,o[4]=a*A+r*P+l*I+c*O,o[8]=a*T+r*C+l*k+c*H,o[12]=a*S+r*R+l*N+c*Z,o[1]=h*b+u*M+d*F+m*D,o[5]=h*A+u*P+d*I+m*O,o[9]=h*T+u*C+d*k+m*H,o[13]=h*S+u*R+d*N+m*Z,o[2]=v*b+g*M+f*F+p*D,o[6]=v*A+g*P+f*I+p*O,o[10]=v*T+g*C+f*k+p*H,o[14]=v*S+g*R+f*N+p*Z,o[3]=w*b+_*M+x*F+y*D,o[7]=w*A+_*P+x*I+y*O,o[11]=w*T+_*C+x*k+y*H,o[15]=w*S+_*R+x*N+y*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],v=t[3],g=t[7],f=t[11],p=t[15];return v*(+o*l*u-s*c*u-o*r*d+n*c*d+s*r*m-n*l*m)+g*(+e*l*m-e*c*d+o*a*d-s*a*m+s*c*h-o*l*h)+f*(+e*c*u-e*r*m-o*a*u+n*a*m+o*r*h-n*c*h)+p*(-s*r*h-e*l*u+e*r*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],v=t[12],g=t[13],f=t[14],p=t[15],w=u*f*c-g*d*c+g*l*m-r*f*m-u*l*p+r*d*p,_=v*d*c-h*f*c-v*l*m+a*f*m+h*l*p-a*d*p,x=h*g*c-v*u*c+v*r*m-a*g*m-h*r*p+a*u*p,y=v*u*l-h*g*l-v*r*d+a*g*d+h*r*f-a*u*f,b=e*w+n*_+s*x+o*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=w*A,t[1]=(g*d*o-u*f*o-g*s*m+n*f*m+u*s*p-n*d*p)*A,t[2]=(r*f*o-g*l*o+g*s*c-n*f*c-r*s*p+n*l*p)*A,t[3]=(u*l*o-r*d*o-u*s*c+n*d*c+r*s*m-n*l*m)*A,t[4]=_*A,t[5]=(h*f*o-v*d*o+v*s*m-e*f*m-h*s*p+e*d*p)*A,t[6]=(v*l*o-a*f*o-v*s*c+e*f*c+a*s*p-e*l*p)*A,t[7]=(a*d*o-h*l*o+h*s*c-e*d*c-a*s*m+e*l*m)*A,t[8]=x*A,t[9]=(v*u*o-h*g*o-v*n*m+e*g*m+h*n*p-e*u*p)*A,t[10]=(a*g*o-v*r*o+v*n*c-e*g*c-a*n*p+e*r*p)*A,t[11]=(h*r*o-a*u*o-h*n*c+e*u*c+a*n*m-e*r*m)*A,t[12]=y*A,t[13]=(h*g*s-v*u*s+v*n*d-e*g*d-h*n*f+e*u*f)*A,t[14]=(v*r*s-a*g*s-v*n*l+e*g*l+a*n*f-e*r*f)*A,t[15]=(a*u*s-h*r*s+h*n*l-e*u*l-a*n*d+e*r*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+n,h*l-s*a,0,c*l-s*r,h*l+s*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,h=a+a,u=r+r,d=o*c,m=o*h,v=o*u,g=a*h,f=a*u,p=r*u,w=l*c,_=l*h,x=l*u,y=n.x,b=n.y,A=n.z;return s[0]=(1-(g+p))*y,s[1]=(m+x)*y,s[2]=(v-_)*y,s[3]=0,s[4]=(m-x)*b,s[5]=(1-(d+p))*b,s[6]=(f+w)*b,s[7]=0,s[8]=(v+_)*A,s[9]=(f-w)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Os.set(s[0],s[1],s[2]).length();const a=Os.set(s[4],s[5],s[6]).length(),r=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ci.copy(this);const c=1/o,h=1/a,u=1/r;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,e.setFromRotationMatrix(ci),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,s,o,a,r=zi){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,v;if(r===zi)m=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(r===Ga)m=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,a,r=zi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-o),d=(e+t)*c,m=(n+s)*h;let v,g;if(r===zi)v=(a+o)*u,g=-2*u;else if(r===Ga)v=o*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Os=new E,ci=new re,Tp=new E(0,0,0),Ep=new E(1,1,1),ji=new E,ca=new E,Vn=new E,Pc=new re,Rc=new rn;class On{constructor(t=0,e=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],a=s[4],r=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Jl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cp=0;const Lc=new E,Hs=new rn,Ii=new re,ha=new E,Lo=new E,Pp=new E,Rp=new rn,Ic=new E(1,0,0),Fc=new E(0,1,0),Dc=new E(0,0,1),Nc={type:"added"},Lp={type:"removed"},Ws={type:"childadded",child:null},_r={type:"childremoved",child:null};class pn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new E,e=new On,n=new rn,s=new E(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new be}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Dc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Lo,ha,this.up):Ii.lookAt(ha,Lo,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lp),_r.child=t,this.dispatchEvent(_r),_r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,Pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));s.material=r}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pn.DEFAULT_UP=new E(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new E,Fi=new E,Mr=new E,Di=new E,Vs=new E,Gs=new E,Uc=new E,wr=new E,yr=new E,br=new E,Sr=new Ge,Ar=new Ge,Tr=new Ge;class mi{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hi.subVectors(t,e),s.cross(hi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){hi.subVectors(s,e),Fi.subVectors(n,e),Mr.subVectors(t,e);const a=hi.dot(hi),r=hi.dot(Fi),l=hi.dot(Mr),c=Fi.dot(Fi),h=Fi.dot(Mr),u=a*c-r*r;if(u===0)return o.set(0,0,0),null;const d=1/u,m=(c*l-r*h)*d,v=(a*h-r*l)*d;return o.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,o,a,r,l){return this.getBarycoord(t,e,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(r,Di.z),l)}static getInterpolatedAttribute(t,e,n,s,o,a){return Sr.setScalar(0),Ar.setScalar(0),Tr.setScalar(0),Sr.fromBufferAttribute(t,e),Ar.fromBufferAttribute(t,n),Tr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Sr,o.x),a.addScaledVector(Ar,o.y),a.addScaledVector(Tr,o.z),a}static isFrontFacing(t,e,n,s){return hi.subVectors(n,e),Fi.subVectors(t,e),hi.cross(Fi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),hi.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return mi.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let a,r;Vs.subVectors(s,n),Gs.subVectors(o,n),wr.subVectors(t,n);const l=Vs.dot(wr),c=Gs.dot(wr);if(l<=0&&c<=0)return e.copy(n);yr.subVectors(t,s);const h=Vs.dot(yr),u=Gs.dot(yr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vs,a);br.subVectors(t,o);const m=Vs.dot(br),v=Gs.dot(br);if(v>=0&&m<=v)return e.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return r=c/(c-v),e.copy(n).addScaledVector(Gs,r);const f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return Uc.subVectors(o,s),r=(u-h)/(u-h+(m-v)),e.copy(s).addScaledVector(Uc,r);const p=1/(f+g+d);return a=g*p,r=d*p,e.copy(n).addScaledVector(Vs,a).addScaledVector(Gs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Er(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=Ql(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Er(a,o,t+1/3),this.g=Er(a,o,t),this.b=Er(a,o,t-1/3)}return Le.toWorkingColorSpace(this,s),this}setStyle(t,e=_n){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=Tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return Le.fromWorkingColorSpace(En.copy(this),t),Math.round(Se(En.r*255,0,255))*65536+Math.round(Se(En.g*255,0,255))*256+Math.round(Se(En.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(En.copy(this),e);const n=En.r,s=En.g,o=En.b,a=Math.max(n,s,o),r=Math.min(n,s,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=_n){Le.fromWorkingColorSpace(En.copy(this),t);const e=En.r,n=En.g,s=En.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(ua);const n=Wo(Ki.h,ua.h,e),s=Wo(Ki.s,ua.s,e),o=Wo(Ki.l,ua.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Bt;Bt.NAMES=Tu;let Ip=0;class yo extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=so,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(n.blending=this.blending),this.side!==cs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tl&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $o extends yo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new E,da=new $t;let Fp=0;class Q{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array),o=Pn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class Ee extends Q{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eu extends Q{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Q{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dp=0;const Jn=new re,Cr=new pn,Xs=new E,Gn=new hs,Io=new hs,xn=new E;class Zt extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?Eu:Ee)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new be().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Cr.lookAt(t),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Gn.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Io.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(Gn.min,Io.min),Gn.expandByPoint(xn),xn.addVectors(Gn.max,Io.max),Gn.expandByPoint(xn)):(Gn.expandByPoint(Io.min),Gn.expandByPoint(Io.max))}Gn.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)xn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(xn));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)xn.fromBufferAttribute(r,c),l&&(Xs.fromBufferAttribute(t,c),xn.add(Xs)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Q(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let T=0;T<n.count;T++)r[T]=new E,l[T]=new E;const c=new E,h=new E,u=new E,d=new $t,m=new $t,v=new $t,g=new E,f=new E;function p(T,S,M){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(o,T),m.fromBufferAttribute(o,S),v.fromBufferAttribute(o,M),h.sub(c),u.sub(c),m.sub(d),v.sub(d);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(P),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(P),r[T].add(g),r[S].add(g),r[M].add(g),l[T].add(f),l[S].add(f),l[M].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,S=w.length;T<S;++T){const M=w[T],P=M.start,C=M.count;for(let R=P,F=P+C;R<F;R+=3)p(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const _=new E,x=new E,y=new E,b=new E;function A(T){y.fromBufferAttribute(s,T),b.copy(y);const S=r[T];_.copy(S),_.sub(y.multiplyScalar(y.dot(S))).normalize(),x.crossVectors(b,S);const P=x.dot(l[T])<0?-1:1;a.setXYZW(T,_.x,_.y,_.z,P)}for(let T=0,S=w.length;T<S;++T){const M=w[T],P=M.start,C=M.count;for(let R=P,F=P+C;R<F;R+=3)A(t.getX(R+0)),A(t.getX(R+1)),A(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Q(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new E,o=new E,a=new E,r=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),g=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),r.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),r.add(h),l.add(h),c.add(h),n.setXYZ(v,r.x,r.y,r.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let g=0,f=l.length;g<f;g++){r.isInterleavedBufferAttribute?m=l[g]*r.data.stride+r.offset:m=l[g]*h;for(let p=0;p<h;p++)d[v++]=c[m++]}return new Q(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zt,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new re,gs=new Ko,pa=new us,zc=new E,fa=new E,ma=new E,ga=new E,Pr=new E,va=new E,Bc=new E,xa=new E;class Oe extends pn{constructor(t=new Zt,e=new $o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(o&&r){va.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],u=o[l];h!==0&&(Pr.fromBufferAttribute(u,t),a?va.addScaledVector(Pr,h):va.addScaledVector(Pr.sub(e),h))}e.add(va)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(o),gs.copy(t.ray).recast(t.near),!(pa.containsPoint(gs.origin)===!1&&(gs.intersectSphere(pa,zc)===null||gs.origin.distanceToSquared(zc)>(t.far-t.near)**2))&&(kc.copy(o).invert(),gs.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,m=o.drawRange;if(r!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const f=d[v],p=a[f.materialIndex],w=Math.max(f.start,m.start),_=Math.min(r.count,Math.min(f.start+f.count,m.start+m.count));for(let x=w,y=_;x<y;x+=3){const b=r.getX(x),A=r.getX(x+1),T=r.getX(x+2);s=_a(this,p,t,n,c,h,u,b,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(r.count,m.start+m.count);for(let f=v,p=g;f<p;f+=3){const w=r.getX(f),_=r.getX(f+1),x=r.getX(f+2);s=_a(this,a,t,n,c,h,u,w,_,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const f=d[v],p=a[f.materialIndex],w=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let x=w,y=_;x<y;x+=3){const b=x,A=x+1,T=x+2;s=_a(this,p,t,n,c,h,u,b,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=v,p=g;f<p;f+=3){const w=f,_=f+1,x=f+2;s=_a(this,a,t,n,c,h,u,w,_,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Np(i,t,e,n,s,o,a,r){let l;if(t.side===Fn?l=n.intersectTriangle(a,o,s,!0,r):l=n.intersectTriangle(s,o,a,t.side===cs,r),l===null)return null;xa.copy(r),xa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xa);return c<e.near||c>e.far?null:{distance:c,point:xa.clone(),object:i}}function _a(i,t,e,n,s,o,a,r,l,c){i.getVertexPosition(r,fa),i.getVertexPosition(l,ma),i.getVertexPosition(c,ga);const h=Np(i,t,e,n,fa,ma,ga,Bc);if(h){const u=new E;mi.getBarycoord(Bc,fa,ma,ga,u),s&&(h.uv=mi.getInterpolatedAttribute(s,r,l,c,u,new $t)),o&&(h.uv1=mi.getInterpolatedAttribute(o,r,l,c,u,new $t)),a&&(h.normal=mi.getInterpolatedAttribute(a,r,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new E,materialIndex:0};mi.getNormal(fa,ma,ga,d.normal),h.face=d,h.barycoord=u}return h}class Qo extends Zt{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,o,0),v("z","y","x",1,-1,n,e,-t,a,o,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,o,4),v("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function v(g,f,p,w,_,x,y,b,A,T,S){const M=x/A,P=y/T,C=x/2,R=y/2,F=b/2,I=A+1,k=T+1;let N=0,D=0;const O=new E;for(let H=0;H<k;H++){const Z=H*P-R;for(let q=0;q<I;q++){const $=q*M-C;O[g]=$*w,O[f]=Z*_,O[p]=F,c.push(O.x,O.y,O.z),O[g]=0,O[f]=0,O[p]=b>0?1:-1,h.push(O.x,O.y,O.z),u.push(q/A),u.push(1-H/T),N+=1}}for(let H=0;H<T;H++)for(let Z=0;Z<A;Z++){const q=d+Z+I*H,$=d+Z+I*(H+1),X=d+(Z+1)+I*(H+1),V=d+(Z+1)+I*H;l.push(q,$,V),l.push($,X,V),D+=6}r.addGroup(m,D,S),m+=D,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Rn(i){const t={};for(let e=0;e<i.length;e++){const n=vo(i[e]);for(const s in n)t[s]=n[s]}return t}function Up(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const qo={clone:vo,merge:Rn};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends yo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vo(t.uniforms),this.uniformsGroups=Up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pu extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new E,Oc=new $t,Hc=new $t;class ei extends Pu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Hc),e.subVectors(Hc,Oc)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ho*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ys=-90,$s=1;class Bp extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ei(Ys,$s,t,e);s.layers=this.layers,this.add(s);const o=new ei(Ys,$s,t,e);o.layers=this.layers,this.add(o);const a=new ei(Ys,$s,t,e);a.layers=this.layers,this.add(a);const r=new ei(Ys,$s,t,e);r.layers=this.layers,this.add(r);const l=new ei(Ys,$s,t,e);l.layers=this.layers,this.add(l);const c=new ei(Ys,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ru extends Sn{constructor(t,e,n,s,o,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:uo,super(t,e,n,s,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Op extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ru(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qo(5,5,5),o=new He({name:"CubemapFromEquirect",uniforms:vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Oi});o.uniforms.tEquirect.value=e;const a=new Oe(s,o),r=e.minFilter;return e.minFilter===is&&(e.minFilter=gi),new Bp(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}}class xi extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hp={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),p=this._getHandJoint(c,g);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class tc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new tc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ya extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Wc=new E,Vc=new Ge,Gc=new Ge,Wp=new E,Xc=new re,Ma=new E,Lr=new us,Yc=new re,Ir=new Ko;class Lu extends Oe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mc,this.bindMatrix=new re,this.bindMatrixInverse=new re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new hs),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new us),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(s),t.ray.intersectsSphere(Lr)!==!1&&(Yc.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(Yc),!(this.boundingBox!==null&&Ir.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ir)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ge,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Mc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Od?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Vc.fromBufferAttribute(s.attributes.skinIndex,t),Gc.fromBufferAttribute(s.attributes.skinWeight,t),Wc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const a=Gc.getComponent(o);if(a!==0){const r=Vc.getComponent(o);Xc.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(Wp.copy(Wc).applyMatrix4(Xc),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class ec extends pn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Iu extends Sn{constructor(t=null,e=1,n=1,s,o,a,r,l,c=Bn,h=Bn,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=new re,Vp=new re;class ir{constructor(t=[],e=[]){this.uuid=Fs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new re)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new re;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const r=t[o]?t[o].matrixWorld:Vp;$c.multiplyMatrices(r,e[o]),$c.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ir(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Iu(e,t,t,$n,vi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let a=e[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new ec),this.bones.push(a),this.boneInverses.push(new re().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const a=e[s];t.bones.push(a.uuid);const r=n[s];t.boneInverses.push(r.toArray())}return t}}class $a extends Q{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qs=new re,qc=new re,wa=[],Zc=new hs,Gp=new re,Fo=new Oe,Do=new us;class vs extends Oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Zc.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(Zc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Do.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Do)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=t*o+1;for(let r=0;r<n.length;r++)n[r]=s[a+r]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(n),t.ray.intersectsSphere(Do)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,qs),qc.multiplyMatrices(n,qs),Fo.matrixWorld=qc,Fo.raycast(t,wa);for(let a=0,r=wa.length;a<r;a++){const l=wa[a];l.instanceId=o,l.object=this,e.push(l)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Iu(new Float32Array(s*this.count),s,this.count,ql,vi));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=s*t;o[l]=r,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fr=new E,Xp=new E,Yp=new be;class Ji{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fr.subVectors(n,e).cross(Xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yp.getNormalMatrix(t),s=this.coplanarPoint(Fr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new us,ya=new E;class nc{constructor(t=new Ji,e=new Ji,n=new Ji,s=new Ji,o=new Ji,a=new Ji){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi){const n=this.planes,s=t.elements,o=s[0],a=s[1],r=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],v=s[9],g=s[10],f=s[11],p=s[12],w=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-o,d-c,f-m,x-p).normalize(),n[1].setComponents(l+o,d+c,f+m,x+p).normalize(),n[2].setComponents(l+a,d+h,f+v,x+w).normalize(),n[3].setComponents(l-a,d-h,f-v,x-w).normalize(),n[4].setComponents(l-r,d-u,f-g,x-_).normalize(),e===zi)n[5].setComponents(l+r,d+u,f+g,x+_).normalize();else if(e===Ga)n[5].setComponents(r,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $p extends yo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jc=new re,kl=new Ko,ba=new us,Sa=new E;class to extends pn{constructor(t=new Zt,e=new $p){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=o,t.ray.intersectsSphere(ba)===!1)return;jc.copy(s).invert(),kl.copy(t.ray).applyMatrix4(jc);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,g=m;v<g;v++){const f=c.getX(v);Sa.fromBufferAttribute(u,f),Kc(Sa,f,l,s,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,g=m;v<g;v++)Sa.fromBufferAttribute(u,v),Kc(Sa,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Kc(i,t,e,n,s,o,a){const r=kl.distanceSqToPoint(i);if(r<e){const l=new E;kl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Dr extends Sn{constructor(t,e,n,s,o,a,r,l,c,h,u,d){super(null,a,r,l,c,h,s,o,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Ln extends Sn{constructor(t,e,n,s,o,a,r,l,c){super(t,e,n,s,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fu extends Sn{constructor(t,e,n,s,o,a,r,l,c,h=oo){if(h!==oo&&h!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oo&&(n=Ls),n===void 0&&h===mo&&(n=fo),super(null,s,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qp{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=n[s]-a,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(o-1);const h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),r=this.getPoint(o),l=e||(a.isVector2?new $t:new E);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,s=[],o=[],a=[],r=new E,l=new re;for(let m=0;m<=t;m++){const v=m/t;s[m]=this.getTangentAt(v,new E)}o[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],r),a[0].crossVectors(s[0],o[0]);for(let m=1;m<=t;m++){if(o[m]=o[m-1].clone(),a[m]=a[m-1].clone(),r.crossVectors(s[m-1],s[m]),r.length()>Number.EPSILON){r.normalize();const v=Math.acos(Se(s[m-1].dot(s[m]),-1,1));o[m].applyMatrix4(l.makeRotationAxis(r,v))}a[m].crossVectors(s[m],o[m])}if(e===!0){let m=Math.acos(Se(o[0].dot(o[t]),-1,1));m/=t,s[0].dot(r.crossVectors(o[0],o[t]))>0&&(m=-m);for(let v=1;v<=t;v++)o[v].applyMatrix4(l.makeRotationAxis(s[v],m*v)),a[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ic(){let i=0,t=0,e=0,n=0;function s(o,a,r,l){i=o,t=r,e=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){s(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,u){let d=(a-o)/c-(r-o)/(c+h)+(r-a)/h,m=(r-a)/h-(l-a)/(h+u)+(l-r)/u;d*=h,m*=h,s(a,r,d,m)},calc:function(o){const a=o*o,r=a*o;return i+t*o+e*a+n*r}}}const Aa=new E,Nr=new ic,Ur=new ic,kr=new ic;class si extends qp{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){const n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%o]:(Aa.subVectors(s[0],s[1]).add(s[0]),c=Aa);const u=s[r%o],d=s[(r+1)%o];if(this.closed||r+2<o?h=s[(r+2)%o]:(Aa.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Aa),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);g<1e-4&&(g=1),v<1e-4&&(v=g),f<1e-4&&(f=g),Nr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,v,g,f),Ur.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,v,g,f),kr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,v,g,f)}else this.curveType==="catmullrom"&&(Nr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ur.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),kr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Nr.calc(l),Ur.calc(l),kr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class sc extends Zt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new E,h=new $t;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ro extends Zt{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],m=[];let v=0;const g=[],f=n/2;let p=0;w(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(m,2));function w(){const x=new E,y=new E;let b=0;const A=(e-t)/n;for(let T=0;T<=o;T++){const S=[],M=T/o,P=M*(e-t)+t;for(let C=0;C<=s;C++){const R=C/s,F=R*l+r,I=Math.sin(F),k=Math.cos(F);y.x=P*I,y.y=-M*n+f,y.z=P*k,u.push(y.x,y.y,y.z),x.set(I,A,k).normalize(),d.push(x.x,x.y,x.z),m.push(R,1-M),S.push(v++)}g.push(S)}for(let T=0;T<s;T++)for(let S=0;S<o;S++){const M=g[S][T],P=g[S+1][T],C=g[S+1][T+1],R=g[S][T+1];(t>0||S!==0)&&(h.push(M,P,R),b+=3),(e>0||S!==o-1)&&(h.push(P,C,R),b+=3)}c.addGroup(p,b,0),p+=b}function _(x){const y=v,b=new $t,A=new E;let T=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,f*M,0),d.push(0,M,0),m.push(.5,.5),v++;const P=v;for(let C=0;C<=s;C++){const F=C/s*l+r,I=Math.cos(F),k=Math.sin(F);A.x=S*k,A.y=f*M,A.z=S*I,u.push(A.x,A.y,A.z),d.push(0,M,0),b.x=I*.5+.5,b.y=k*.5*M+.5,m.push(b.x,b.y),v++}for(let C=0;C<s;C++){const R=y+C,F=P+C;x===!0?h.push(F,F+1,R):h.push(F+1,F,R),T+=3}c.addGroup(p,T,x===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oc extends Zt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],a=[];r(s),c(n),h(),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(o.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(w){const _=new E,x=new E,y=new E;for(let b=0;b<e.length;b+=3)m(e[b+0],_),m(e[b+1],x),m(e[b+2],y),l(_,x,y,w)}function l(w,_,x,y){const b=y+1,A=[];for(let T=0;T<=b;T++){A[T]=[];const S=w.clone().lerp(x,T/b),M=_.clone().lerp(x,T/b),P=b-T;for(let C=0;C<=P;C++)C===0&&T===b?A[T][C]=S:A[T][C]=S.clone().lerp(M,C/P)}for(let T=0;T<b;T++)for(let S=0;S<2*(b-T)-1;S++){const M=Math.floor(S/2);S%2===0?(d(A[T][M+1]),d(A[T+1][M]),d(A[T][M])):(d(A[T][M+1]),d(A[T+1][M+1]),d(A[T+1][M]))}}function c(w){const _=new E;for(let x=0;x<o.length;x+=3)_.x=o[x+0],_.y=o[x+1],_.z=o[x+2],_.normalize().multiplyScalar(w),o[x+0]=_.x,o[x+1]=_.y,o[x+2]=_.z}function h(){const w=new E;for(let _=0;_<o.length;_+=3){w.x=o[_+0],w.y=o[_+1],w.z=o[_+2];const x=f(w)/2/Math.PI+.5,y=p(w)/Math.PI+.5;a.push(x,1-y)}v(),u()}function u(){for(let w=0;w<a.length;w+=6){const _=a[w+0],x=a[w+2],y=a[w+4],b=Math.max(_,x,y),A=Math.min(_,x,y);b>.9&&A<.1&&(_<.2&&(a[w+0]+=1),x<.2&&(a[w+2]+=1),y<.2&&(a[w+4]+=1))}}function d(w){o.push(w.x,w.y,w.z)}function m(w,_){const x=w*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function v(){const w=new E,_=new E,x=new E,y=new E,b=new $t,A=new $t,T=new $t;for(let S=0,M=0;S<o.length;S+=9,M+=6){w.set(o[S+0],o[S+1],o[S+2]),_.set(o[S+3],o[S+4],o[S+5]),x.set(o[S+6],o[S+7],o[S+8]),b.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),T.set(a[M+4],a[M+5]),y.copy(w).add(_).add(x).divideScalar(3);const P=f(y);g(b,M+0,w,P),g(A,M+2,_,P),g(T,M+4,x,P)}}function g(w,_,x,y){y<0&&w.x===1&&(a[_]=w.x-1),x.x===0&&x.z===0&&(a[_]=y/2/Math.PI+.5)}function f(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.vertices,t.indices,t.radius,t.details)}}class bo extends oc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bo(t.radius,t.detail)}}class xo extends Zt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(s),c=r+1,h=l+1,u=t/r,d=e/l,m=[],v=[],g=[],f=[];for(let p=0;p<h;p++){const w=p*d-a;for(let _=0;_<c;_++){const x=_*u-o;v.push(x,-w,0),g.push(0,0,1),f.push(_/r),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<r;w++){const _=w+c*p,x=w+c*(p+1),y=w+1+c*(p+1),b=w+1+c*p;m.push(_,x,b),m.push(x,y,b)}this.setIndex(m),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.width,t.height,t.widthSegments,t.heightSegments)}}class qa extends Zt{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new E,d=new E,m=[],v=[],g=[],f=[];for(let p=0;p<=n;p++){const w=[],_=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){const b=y/e;u.x=-t*Math.cos(s+b*o)*Math.sin(a+_*r),u.y=t*Math.cos(a+_*r),u.z=t*Math.sin(s+b*o)*Math.sin(a+_*r),v.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),f.push(b+x,1-_),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const _=h[p][w+1],x=h[p][w],y=h[p+1][w],b=h[p+1][w+1];(p!==0||a>0)&&m.push(_,x,b),(p!==n-1||l<Math.PI)&&m.push(x,y,b)}this.setIndex(m),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zp extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fi extends yo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class In extends fi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class jp extends yo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kp extends yo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Du extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qp extends Du{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zr=new re,Qc=new E,Jc=new E;class Jp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ac extends Pu{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class t0 extends Jp{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Br extends Du{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class e0 extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class n0 extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Nu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=th();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function th(){return performance.now()}const rc="\\[\\]\\.:\\/",i0=new RegExp("["+rc+"]","g"),lc="[^"+rc+"]",s0="[^"+rc.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",lc),a0=/(WCOD+)?/.source.replace("WCOD",s0),r0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),c0=new RegExp("^"+o0+a0+r0+l0+"$"),h0=["material","materials","bones","map"];class u0{constructor(t,e,n){const s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Fe{constructor(t,e,n){this.path=e,this.parsedPath=n||Fe.parseTrackName(e),this.node=Fe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Fe.Composite(t,e,n):new Fe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(t){const e=c0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);h0.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===e||r.uuid===e)return r;const l=n(r.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let o=e.propertyIndex;if(t||(t=Fe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?r=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Fe.Composite=u0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const eh=new re;class d0{constructor(t,e,n=0,s=1/0){this.ray=new Ko(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Jl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(nh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)zl(t[s],this,n,e);return n.sort(nh),n}}function nh(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let a=0,r=o.length;a<r;a++)zl(o[a],t,e,!0)}}class ih{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class p0 extends Is{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function sh(i,t,e,n){const s=f0(n);switch(e){case gu:return i*t;case xu:return i*t;case _u:return i*t*2;case ql:return i*t/s.components*s.byteLength;case Zl:return i*t/s.components*s.byteLength;case Mu:return i*t*2/s.components*s.byteLength;case jl:return i*t*2/s.components*s.byteLength;case vu:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case Kl:return i*t*4/s.components*s.byteLength;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:case fl:return Math.max(i,16)*Math.max(t,8)/4;case ul:case pl:return Math.max(i,8)*Math.max(t,8)/2;case ml:case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ba:case Il:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wu:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f0(i){switch(i){case Gi:case pu:return{byteLength:1,components:1};case Xo:case fu:case Ei:return{byteLength:2,components:1};case Yl:case $l:return{byteLength:2,components:4};case Ls:case Xl:case vi:return{byteLength:4,components:1};case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uu(){let i=null,t=!1,e=null,n=null;function s(o,a){e(o,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function m0(i){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),r.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<u.length;m++){const v=u[d],g=u[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,u[d]=g)}u.length=d+1;for(let m=0,v=u.length;m<v;m++){const g=u[m];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(i.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:o,update:a}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
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
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ff=`PhysicalMaterial material;
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
#endif`,mf=`struct PhysicalMaterial {
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
}`,gf=`
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tf=`#if defined( USE_POINTS_UV )
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
#endif`,Ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bf=`#ifdef USE_NORMALMAP
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
#endif`,Of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Fm=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:g0,alphahash_pars_fragment:v0,alphamap_fragment:x0,alphamap_pars_fragment:_0,alphatest_fragment:M0,alphatest_pars_fragment:w0,aomap_fragment:y0,aomap_pars_fragment:b0,batching_pars_vertex:S0,batching_vertex:A0,begin_vertex:T0,beginnormal_vertex:E0,bsdfs:C0,iridescence_fragment:P0,bumpmap_pars_fragment:R0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:D0,color_fragment:N0,color_pars_fragment:U0,color_pars_vertex:k0,color_vertex:z0,common:B0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:H0,displacementmap_pars_vertex:W0,displacementmap_vertex:V0,emissivemap_fragment:G0,emissivemap_pars_fragment:X0,colorspace_fragment:Y0,colorspace_pars_fragment:$0,envmap_fragment:q0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:j0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:cf,envmap_vertex:Q0,fog_vertex:J0,fog_pars_vertex:tf,fog_fragment:ef,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:of,lights_lambert_fragment:af,lights_lambert_pars_fragment:rf,lights_pars_begin:lf,lights_toon_fragment:hf,lights_toon_pars_fragment:uf,lights_phong_fragment:df,lights_phong_pars_fragment:pf,lights_physical_fragment:ff,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:vf,lights_fragment_end:xf,logdepthbuf_fragment:_f,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:yf,map_fragment:bf,map_pars_fragment:Sf,map_particle_fragment:Af,map_particle_pars_fragment:Tf,metalnessmap_fragment:Ef,metalnessmap_pars_fragment:Cf,morphinstance_vertex:Pf,morphcolor_vertex:Rf,morphnormal_vertex:Lf,morphtarget_pars_vertex:If,morphtarget_vertex:Ff,normal_fragment_begin:Df,normal_fragment_maps:Nf,normal_pars_fragment:Uf,normal_pars_vertex:kf,normal_vertex:zf,normalmap_pars_fragment:Bf,clearcoat_normal_fragment_begin:Of,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:Vf,opaque_fragment:Gf,packing:Xf,premultiplied_alpha_fragment:Yf,project_vertex:$f,dithering_fragment:qf,dithering_pars_fragment:Zf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:Kf,shadowmap_pars_fragment:Qf,shadowmap_pars_vertex:Jf,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:om,specularmap_fragment:am,specularmap_pars_fragment:rm,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:pm,uv_vertex:fm,worldpos_vertex:mm,background_vert:gm,background_frag:vm,backgroundCube_vert:xm,backgroundCube_frag:_m,cube_vert:Mm,cube_frag:wm,depth_vert:ym,depth_frag:bm,distanceRGBA_vert:Sm,distanceRGBA_frag:Am,equirect_vert:Tm,equirect_frag:Em,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Rm,meshbasic_frag:Lm,meshlambert_vert:Im,meshlambert_frag:Fm,meshmatcap_vert:Dm,meshmatcap_frag:Nm,meshnormal_vert:Um,meshnormal_frag:km,meshphong_vert:zm,meshphong_frag:Bm,meshphysical_vert:Om,meshphysical_frag:Hm,meshtoon_vert:Wm,meshtoon_frag:Vm,points_vert:Gm,points_frag:Xm,shadow_vert:Ym,shadow_frag:$m,sprite_vert:qm,sprite_frag:Zm},Xt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Ai={basic:{uniforms:Rn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Rn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Rn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Rn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Rn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Rn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Rn([Xt.points,Xt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Rn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Rn([Xt.common,Xt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Rn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Rn([Xt.sprite,Xt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Rn([Xt.common,Xt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Rn([Xt.lights,Xt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Ai.physical={uniforms:Rn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Ta={r:0,b:0,g:0},_s=new On,jm=new re;function Km(i,t,e,n,s,o,a){const r=new Bt(0);let l=o===!0?0:1,c,h,u=null,d=0,m=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function g(_){let x=!1;const y=v(_);y===null?p(r,l):y&&y.isColor&&(p(y,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(_,x){const y=v(x);y&&(y.isCubeTexture||y.mapping===er)?(h===void 0&&(h=new Oe(new Qo(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:vo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(x.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(_s)),h.material.toneMapped=Le.getTransfer(y.colorSpace)!==Be,(u!==y||d!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,m=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Oe(new xo(2,2),new He({name:"BackgroundMaterial",uniforms:vo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Le.getTransfer(y.colorSpace)!==Be,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,m=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(Ta,Cu(i)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,x,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,x=1){r.set(_),l=x,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(r,l)},render:g,addToRenderList:f,dispose:w}}function Qm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,a=!1;function r(M,P,C,R,F){let I=!1;const k=u(R,C,P);o!==k&&(o=k,c(o.object)),I=m(M,R,C,F),I&&v(M,R,C,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,x(M,P,C,R),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,C){const R=C.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let I=F[P.id];I===void 0&&(I={},F[P.id]=I);let k=I[R];return k===void 0&&(k=d(l()),I[R]=k),k}function d(M){const P=[],C=[],R=[];for(let F=0;F<e;F++)P[F]=0,C[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:R,object:M,attributes:{},index:null}}function m(M,P,C,R){const F=o.attributes,I=P.attributes;let k=0;const N=C.getAttributes();for(const D in N)if(N[D].location>=0){const H=F[D];let Z=I[D];if(Z===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),H===void 0||H.attribute!==Z||Z&&H.data!==Z.data)return!0;k++}return o.attributesNum!==k||o.index!==R}function v(M,P,C,R){const F={},I=P.attributes;let k=0;const N=C.getAttributes();for(const D in N)if(N[D].location>=0){let H=I[D];H===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(H=M.instanceColor));const Z={};Z.attribute=H,H&&H.data&&(Z.data=H.data),F[D]=Z,k++}o.attributes=F,o.attributesNum=k,o.index=R}function g(){const M=o.newAttributes;for(let P=0,C=M.length;P<C;P++)M[P]=0}function f(M){p(M,0)}function p(M,P){const C=o.newAttributes,R=o.enabledAttributes,F=o.attributeDivisors;C[M]=1,R[M]===0&&(i.enableVertexAttribArray(M),R[M]=1),F[M]!==P&&(i.vertexAttribDivisor(M,P),F[M]=P)}function w(){const M=o.newAttributes,P=o.enabledAttributes;for(let C=0,R=P.length;C<R;C++)P[C]!==M[C]&&(i.disableVertexAttribArray(C),P[C]=0)}function _(M,P,C,R,F,I,k){k===!0?i.vertexAttribIPointer(M,P,C,F,I):i.vertexAttribPointer(M,P,C,R,F,I)}function x(M,P,C,R){g();const F=R.attributes,I=C.getAttributes(),k=P.defaultAttributeValues;for(const N in I){const D=I[N];if(D.location>=0){let O=F[N];if(O===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(O=M.instanceColor)),O!==void 0){const H=O.normalized,Z=O.itemSize,q=t.get(O);if(q===void 0)continue;const $=q.buffer,X=q.type,V=q.bytesPerElement,et=X===i.INT||X===i.UNSIGNED_INT||O.gpuType===Xl;if(O.isInterleavedBufferAttribute){const it=O.data,J=it.stride,st=O.offset;if(it.isInstancedInterleavedBuffer){for(let Y=0;Y<D.locationSize;Y++)p(D.location+Y,it.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Y=0;Y<D.locationSize;Y++)f(D.location+Y);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Y=0;Y<D.locationSize;Y++)_(D.location+Y,Z/D.locationSize,X,H,J*V,(st+Z/D.locationSize*Y)*V,et)}else{if(O.isInstancedBufferAttribute){for(let it=0;it<D.locationSize;it++)p(D.location+it,O.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let it=0;it<D.locationSize;it++)f(D.location+it);i.bindBuffer(i.ARRAY_BUFFER,$);for(let it=0;it<D.locationSize;it++)_(D.location+it,Z/D.locationSize,X,H,Z*V,Z/D.locationSize*it*V,et)}}else if(k!==void 0){const H=k[N];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(D.location,H);break;case 3:i.vertexAttrib3fv(D.location,H);break;case 4:i.vertexAttrib4fv(D.location,H);break;default:i.vertexAttrib1fv(D.location,H)}}}}w()}function y(){T();for(const M in n){const P=n[M];for(const C in P){const R=P[C];for(const F in R)h(R[F].object),delete R[F];delete P[C]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const C in P){const R=P[C];for(const F in R)h(R[F].object),delete R[F];delete P[C]}delete n[M.id]}function A(M){for(const P in n){const C=n[P];if(C[M.id]===void 0)continue;const R=C[M.id];for(const F in R)h(R[F].object),delete R[F];delete C[M.id]}}function T(){S(),a=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:T,resetDefaultState:S,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:f,disableUnusedAttributes:w}}function Jm(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g]*d[g];e.update(v,n,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function tg(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==$n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const T=A===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Gi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vi&&!T)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=v>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:b}}function eg(i){const t=this;let e=null,n=0,s=!1,o=!1;const a=new Ji,r=new be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const v=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||o&&!f)o?h(null):c();else{const w=o?0:n,_=w*4;let x=p.clippingState||null;l.value=x,x=h(v,d,_,m);for(let y=0;y!==_;++y)x[y]=e[y];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,v){const g=u!==null?u.length:0;let f=null;if(g!==0){if(f=l.value,v!==!0||f===null){const p=m+g*4,w=d.matrixWorldInverse;r.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let _=0,x=m;_!==g;++_,x+=4)a.copy(u[_]).applyMatrix4(w,r),a.normal.toArray(f,x),f[x+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function ng(i){let t=new WeakMap;function e(a,r){return r===cl?a.mapping=uo:r===hl&&(a.mapping=po),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===cl||r===hl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Op(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const r=a.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const eo=4,oh=[.125,.215,.35,.446,.526,.582],Es=20,Or=new ac,ah=new Bt;let Hr=null,Wr=0,Vr=0,Gr=!1;const Ss=(1+Math.sqrt(5))/2,Zs=1/Ss,rh=[new E(-Ss,Zs,0),new E(Ss,Zs,0),new E(-Zs,0,Ss),new E(Zs,0,Ss),new E(0,Ss,-Zs),new E(0,Ss,Zs),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],ig=new E;class Bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){const{size:a=256,position:r=ig}=o;Hr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hr,Wr,Vr),this._renderer.xr.enabled=Gr,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===uo||t.mapping===po?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Ei,format:$n,colorSpace:go,depthBuffer:!1},s=lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(o)),this._blurMaterial=og(o,t,e)}return s}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,s,o){const l=new ei(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(ah),u.toneMapping=as,u.autoClear=!1;const v=new $o({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new Oe(new Qo,v);let f=!1;const p=t.background;p?p.isColor&&(v.color.copy(p),t.background=null,f=!0):(v.color.copy(ah),f=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[w],o.y,o.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[w],o.z)):(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[w]));const x=this._cubeSize;Ea(s,_*x,w>2?x:0,x,x),u.setRenderTarget(s),f&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===uo||t.mapping===po;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;Ea(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=rh[(s-o-1)%rh.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",o),this._halfBlur(a,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Oe(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Es-1),g=o/v,f=isFinite(o)?1+Math.floor(h*g):Es;f>Es&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Es}`);const p=[];let w=0;for(let A=0;A<Es;++A){const T=A/g,S=Math.exp(-T*T/2);p.push(S),A===0?w+=S:A<f&&(w+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-n;const x=this._sizeLods[s],y=3*x*(s>_-eo?s-_+eo:0),b=4*(this._cubeSize-x);Ea(e,y,b,3*x,2*x),l.setRenderTarget(e),l.render(u,Or)}}function sg(i){const t=[],e=[],n=[];let s=i;const o=i-eo+1+oh.length;for(let a=0;a<o;a++){const r=Math.pow(2,s);e.push(r);let l=1/r;a>i-eo?l=oh[a-i+eo-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,g=3,f=2,p=1,w=new Float32Array(g*v*m),_=new Float32Array(f*v*m),x=new Float32Array(p*v*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,T=b>2?0:-1,S=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];w.set(S,g*v*b),_.set(d,f*v*b);const M=[b,b,b,b,b,b];x.set(M,p*v*b)}const y=new Zt;y.setAttribute("position",new Q(w,g)),y.setAttribute("uv",new Q(_,f)),y.setAttribute("faceIndex",new Q(x,p)),t.push(y),s>eo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lh(i,t,e){const n=new ii(i,t,e);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function og(i,t,e){const n=new Float32Array(Es),s=new E(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ch(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function hh(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}function ag(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===cl||l===hl,h=l===uo||l===po;if(c||h){let u=t.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return e===null&&(e=new Bl(i)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const m=r.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Bl(i)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function s(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,t,e,n){const s={},o=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const m=o.get(d);m&&(t.remove(m),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,v=u.attributes.position;let g=0;if(m!==null){const w=m.array;g=m.version;for(let _=0,x=w.length;_<x;_+=3){const y=w[_+0],b=w[_+1],A=w[_+2];d.push(y,b,b,A,A,y)}}else if(v!==void 0){const w=v.array;g=v.version;for(let _=0,x=w.length/3-1;_<x;_+=3){const y=_+0,b=_+1,A=_+2;d.push(y,b,b,A,A,y)}}else return;const f=new(Su(d)?Eu:Ee)(d,1);f.version=g;const p=o.get(u);p&&t.remove(p),o.set(u,f)}function h(u){const d=o.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function cg(i,t,e){let n;function s(d){n=d}let o,a;function r(d){o=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,o,d*a),e.update(m,n,1)}function c(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,d*a,v),e.update(m,n,v))}function h(d,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,d,0,v);let f=0;for(let p=0;p<v;p++)f+=m[p];e.update(f,n,1)}function u(d,m,v,g){if(v===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/a,m[p],g[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,o,d,0,g,0,v);let p=0;for(let w=0;w<v;w++)p+=m[w]*g[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=r*(o/3);break;case i.LINES:e.lines+=r*(o/2);break;case i.LINE_STRIP:e.lines+=r*(o-1);break;case i.LINE_LOOP:e.lines+=r*o;break;case i.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){const n=new WeakMap,s=new Ge;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(r);if(d===void 0||d.count!==u){let M=function(){T.dispose(),n.delete(r),r.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const v=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,f=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],w=r.morphAttributes.normal||[],_=r.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),f===!0&&(x=3);let y=r.attributes.position.count*x,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*b*4*u),T=new Au(A,y,b,u);T.type=vi,T.needsUpdate=!0;const S=x*4;for(let P=0;P<u;P++){const C=p[P],R=w[P],F=_[P],I=y*b*4*P;for(let k=0;k<C.count;k++){const N=k*S;v===!0&&(s.fromBufferAttribute(C,k),A[I+N+0]=s.x,A[I+N+1]=s.y,A[I+N+2]=s.z,A[I+N+3]=0),g===!0&&(s.fromBufferAttribute(R,k),A[I+N+4]=s.x,A[I+N+5]=s.y,A[I+N+6]=s.z,A[I+N+7]=0),f===!0&&(s.fromBufferAttribute(F,k),A[I+N+8]=s.x,A[I+N+9]=s.y,A[I+N+10]=s.z,A[I+N+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new $t(y,b)},n.set(r,d),r.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let f=0;f<c.length;f++)v+=c[f];const g=r.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function dg(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}const ku=new Sn,uh=new Fu(1,1),zu=new Au,Bu=new Sp,Ou=new Ru,dh=[],ph=[],fh=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function So(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=dh[s];if(o===void 0&&(o=new Float32Array(s),dh[s]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,i[a].toArray(o,r)}return o}function mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function gn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sr(i,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2fv(this.addr,t),gn(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;i.uniform3fv(this.addr,t),gn(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4fv(this.addr,t),gn(e,t)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;gh.set(n),i.uniformMatrix2fv(this.addr,!1,gh),gn(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;mh.set(n),i.uniformMatrix3fv(this.addr,!1,mh),gn(e,n)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;fh.set(n),i.uniformMatrix4fv(this.addr,!1,fh),gn(e,n)}}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2iv(this.addr,t),gn(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3iv(this.addr,t),gn(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4iv(this.addr,t),gn(e,t)}}function Sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2uiv(this.addr,t),gn(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3uiv(this.addr,t),gn(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4uiv(this.addr,t),gn(e,t)}}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(uh.compareFunction=bu,o=uh):o=ku,e.setTexture2D(t||o,s)}function Pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bu,s)}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ou,s)}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zu,s)}function Ig(i){switch(i){case 5126:return pg;case 35664:return fg;case 35665:return mg;case 35666:return gg;case 35674:return vg;case 35675:return xg;case 35676:return _g;case 5124:case 35670:return Mg;case 35667:case 35671:return wg;case 35668:case 35672:return yg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return Ag;case 36295:return Tg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Lg}}function Fg(i,t){i.uniform1fv(this.addr,t)}function Dg(i,t){const e=So(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){const e=So(t,this.size,3);i.uniform3fv(this.addr,e)}function Ug(i,t){const e=So(t,this.size,4);i.uniform4fv(this.addr,e)}function kg(i,t){const e=So(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zg(i,t){const e=So(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bg(i,t){const e=So(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Og(i,t){i.uniform1iv(this.addr,t)}function Hg(i,t){i.uniform2iv(this.addr,t)}function Wg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Gg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function Yg(i,t){i.uniform3uiv(this.addr,t)}function $g(i,t){i.uniform4uiv(this.addr,t)}function qg(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);mn(n,o)||(i.uniform1iv(this.addr,o),gn(n,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ku,o[a])}function Zg(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);mn(n,o)||(i.uniform1iv(this.addr,o),gn(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bu,o[a])}function jg(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);mn(n,o)||(i.uniform1iv(this.addr,o),gn(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ou,o[a])}function Kg(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);mn(n,o)||(i.uniform1iv(this.addr,o),gn(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zu,o[a])}function Qg(i){switch(i){case 5126:return Fg;case 35664:return Dg;case 35665:return Ng;case 35666:return Ug;case 35674:return kg;case 35675:return zg;case 35676:return Bg;case 5124:case 35670:return Og;case 35667:case 35671:return Hg;case 35668:case 35672:return Wg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Xg;case 36295:return Yg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Kg}}class Jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}}class t1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}}class e1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(t,e[r.id],n)}}}const Xr=/(\w+)(\])?(\[|\.)?/g;function vh(i,t){i.seq.push(t),i.map[t.id]=t}function n1(i,t,e){const n=i.name,s=n.length;for(Xr.lastIndex=0;;){const o=Xr.exec(n),a=Xr.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===s){vh(e,c===void 0?new Jg(r,i,t):new t1(r,i,t));break}else{let u=e.map[r];u===void 0&&(u=new e1(r),vh(e,u)),e=u}}}class Oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);n1(o,a,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function xh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i1=37297;let s1=0;function o1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const _h=new be;function a1(i){Le._getMatrix(_h,Le.workingColorSpace,i);const t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case Va:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+o1(i.getShaderSource(t),a)}else return s}function r1(i,t){const e=a1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function l1(i,t){let e;switch(t){case ou:e="Linear";break;case au:e="Reinhard";break;case ru:e="Cineon";break;case Gl:e="ACESFilmic";break;case cu:e="AgX";break;case hu:e="Neutral";break;case lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ca=new E;function c1(){Le.getLuminanceCoefficients(Ca);const i=Ca.x.toFixed(4),t=Ca.y.toFixed(4),e=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function u1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),a=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:r}}return e}function zo(i){return i!==""}function wh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(p1,m1)}const f1=new Map;function m1(i,t){let e=Te[t];if(e===void 0){const n=f1.get(t);if(n!==void 0)e=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}const g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(i){return i.replace(g1,v1)}function v1(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Sh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function x1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function _1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case uo:case po:t="ENVMAP_TYPE_CUBE";break;case er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case po:t="ENVMAP_MODE_REFRACTION";break}return t}function w1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case su:t="ENVMAP_BLENDING_MULTIPLY";break;case zd:t="ENVMAP_BLENDING_MIX";break;case Bd:t="ENVMAP_BLENDING_ADD";break}return t}function y1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function b1(i,t,e,n){const s=i.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=x1(e),c=_1(e),h=M1(e),u=w1(e),d=y1(e),m=h1(e),v=u1(o),g=s.createProgram();let f,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(zo).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(zo).join(`
`),p.length>0&&(p+=`
`)):(f=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),p=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?Te.tonemapping_pars_fragment:"",e.toneMapping!==as?l1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,r1("linearToOutputTexel",e.outputColorSpace),c1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zo).join(`
`)),a=Ol(a),a=wh(a,e),a=yh(a,e),r=Ol(r),r=wh(r,e),r=yh(r,e),a=bh(a),r=bh(r),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=w+f+a,x=w+p+r,y=xh(s,s.VERTEX_SHADER,_),b=xh(s,s.FRAGMENT_SHADER,x);s.attachShader(g,y),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(g).trim(),R=s.getShaderInfoLog(y).trim(),F=s.getShaderInfoLog(b).trim();let I=!0,k=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,b);else{const N=Mh(s,y,"vertex"),D=Mh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+N+`
`+D)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||F==="")&&(k=!1);k&&(P.diagnostics={runnable:I,programLog:C,vertexShader:{log:R,prefix:f},fragmentShader:{log:F,prefix:p}})}s.deleteShader(y),s.deleteShader(b),T=new Oa(s,g),S=d1(s,g)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,i1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s1++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=b,this}let S1=0;class A1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new T1(t),e.set(t,n)),n}}class T1{constructor(t){this.id=S1++,this.code=t,this.usedTimes=0}}function E1(i,t,e,n,s,o,a){const r=new Jl,l=new A1,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,M,P,C,R){const F=C.fog,I=R.geometry,k=S.isMeshStandardMaterial?C.environment:null,N=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),D=N&&N.mapping===er?N.image.height:null,O=v[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const H=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=H!==void 0?H.length:0;let q=0;I.morphAttributes.position!==void 0&&(q=1),I.morphAttributes.normal!==void 0&&(q=2),I.morphAttributes.color!==void 0&&(q=3);let $,X,V,et;if(O){const he=Ai[O];$=he.vertexShader,X=he.fragmentShader}else $=S.vertexShader,X=S.fragmentShader,l.update(S),V=l.getVertexShaderID(S),et=l.getFragmentShaderID(S);const it=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),st=R.isInstancedMesh===!0,Y=R.isBatchedMesh===!0,j=!!S.map,ut=!!S.matcap,tt=!!N,z=!!S.aoMap,_t=!!S.lightMap,xt=!!S.bumpMap,Ct=!!S.normalMap,Tt=!!S.displacementMap,Nt=!!S.emissiveMap,lt=!!S.metalnessMap,W=!!S.roughnessMap,L=S.anisotropy>0,rt=S.clearcoat>0,dt=S.dispersion>0,yt=S.iridescence>0,Mt=S.sheen>0,zt=S.transmission>0,kt=L&&!!S.anisotropyMap,Rt=rt&&!!S.clearcoatMap,It=rt&&!!S.clearcoatNormalMap,Lt=rt&&!!S.clearcoatRoughnessMap,Ot=yt&&!!S.iridescenceMap,jt=yt&&!!S.iridescenceThicknessMap,Ht=Mt&&!!S.sheenColorMap,Ut=Mt&&!!S.sheenRoughnessMap,ce=!!S.specularMap,ne=!!S.specularColorMap,Me=!!S.specularIntensityMap,ot=zt&&!!S.transmissionMap,Gt=zt&&!!S.thicknessMap,wt=!!S.gradientMap,St=!!S.alphaMap,At=S.alphaTest>0,Vt=!!S.alphaHash,ue=!!S.extensions;let Pe=as;S.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const Ve={shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:X,defines:S.defines,customVertexShaderID:V,customFragmentShaderID:et,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Y,batchingColor:Y&&R._colorsTexture!==null,instancing:st,instancingColor:st&&R.instanceColor!==null,instancingMorph:st&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:go,alphaToCoverage:!!S.alphaToCoverage,map:j,matcap:ut,envMap:tt,envMapMode:tt&&N.mapping,envMapCubeUVHeight:D,aoMap:z,lightMap:_t,bumpMap:xt,normalMap:Ct,displacementMap:d&&Tt,emissiveMap:Nt,normalMapObjectSpace:Ct&&S.normalMapType===Xd,normalMapTangentSpace:Ct&&S.normalMapType===yu,metalnessMap:lt,roughnessMap:W,anisotropy:L,anisotropyMap:kt,clearcoat:rt,clearcoatMap:Rt,clearcoatNormalMap:It,clearcoatRoughnessMap:Lt,dispersion:dt,iridescence:yt,iridescenceMap:Ot,iridescenceThicknessMap:jt,sheen:Mt,sheenColorMap:Ht,sheenRoughnessMap:Ut,specularMap:ce,specularColorMap:ne,specularIntensityMap:Me,transmission:zt,transmissionMap:ot,thicknessMap:Gt,gradientMap:wt,opaque:S.transparent===!1&&S.blending===so&&S.alphaToCoverage===!1,alphaMap:St,alphaTest:At,alphaHash:Vt,combine:S.combine,mapUv:j&&g(S.map.channel),aoMapUv:z&&g(S.aoMap.channel),lightMapUv:_t&&g(S.lightMap.channel),bumpMapUv:xt&&g(S.bumpMap.channel),normalMapUv:Ct&&g(S.normalMap.channel),displacementMapUv:Tt&&g(S.displacementMap.channel),emissiveMapUv:Nt&&g(S.emissiveMap.channel),metalnessMapUv:lt&&g(S.metalnessMap.channel),roughnessMapUv:W&&g(S.roughnessMap.channel),anisotropyMapUv:kt&&g(S.anisotropyMap.channel),clearcoatMapUv:Rt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:It&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&g(S.sheenRoughnessMap.channel),specularMapUv:ce&&g(S.specularMap.channel),specularColorMapUv:ne&&g(S.specularColorMap.channel),specularIntensityMapUv:Me&&g(S.specularIntensityMap.channel),transmissionMapUv:ot&&g(S.transmissionMap.channel),thicknessMapUv:Gt&&g(S.thicknessMap.channel),alphaMapUv:St&&g(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ct||L),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(j||St),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:J,skinning:R.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:j&&S.map.isVideoTexture===!0&&Le.getTransfer(S.map.colorSpace)===Be,decodeVideoTextureEmissive:Nt&&S.emissiveMap.isVideoTexture===!0&&Le.getTransfer(S.emissiveMap.colorSpace)===Be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===Fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&S.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(M,S),_(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){r.disableAll(),M.supportsVertexTextures&&r.enable(0),M.instancing&&r.enable(1),M.instancingColor&&r.enable(2),M.instancingMorph&&r.enable(3),M.matcap&&r.enable(4),M.envMap&&r.enable(5),M.normalMapObjectSpace&&r.enable(6),M.normalMapTangentSpace&&r.enable(7),M.clearcoat&&r.enable(8),M.iridescence&&r.enable(9),M.alphaTest&&r.enable(10),M.vertexColors&&r.enable(11),M.vertexAlphas&&r.enable(12),M.vertexUv1s&&r.enable(13),M.vertexUv2s&&r.enable(14),M.vertexUv3s&&r.enable(15),M.vertexTangents&&r.enable(16),M.anisotropy&&r.enable(17),M.alphaHash&&r.enable(18),M.batching&&r.enable(19),M.dispersion&&r.enable(20),M.batchingColor&&r.enable(21),S.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reverseDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),S.push(r.mask)}function x(S){const M=v[S.type];let P;if(M){const C=Ai[M];P=qo.clone(C.uniforms)}else P=S.uniforms;return P}function y(S,M){let P;for(let C=0,R=h.length;C<R;C++){const F=h[C];if(F.cacheKey===M){P=F,++P.usedTimes;break}}return P===void 0&&(P=new b1(i,M,S,o),h.push(P)),P}function b(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:T}}function C1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function n(a){i.delete(a)}function s(a,r,l){i.get(a)[r]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function P1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ah(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Th(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,v,g,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:g,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=f),t++,p}function r(u,d,m,v,g,f){const p=a(u,d,m,v,g,f);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function l(u,d,m,v,g,f){const p=a(u,d,m,v,g,f);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||P1),n.length>1&&n.sort(d||Ah),s.length>1&&s.sort(d||Ah)}function h(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:r,unshift:l,finish:h,sort:c}}function R1(){let i=new WeakMap;function t(n,s){const o=i.get(n);let a;return o===void 0?(a=new Th,i.set(n,[a])):s>=o.length?(a=new Th,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function L1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Bt};break;case"SpotLight":e={position:new E,direction:new E,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function I1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let F1=0;function D1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N1(i){const t=new L1,e=I1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,o=new re,a=new re;function r(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,v=0,g=0,f=0,p=0,w=0,_=0,x=0,y=0,b=0,A=0;c.sort(D1);for(let S=0,M=c.length;S<M;S++){const P=c[S],C=P.color,R=P.intensity,F=P.distance,I=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*R,u+=C.g*R,d+=C.b*R;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],R);A++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const N=P.shadow,D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=I,n.directionalShadowMatrix[m]=P.shadow.matrix,w++}n.directional[m]=k,m++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(C).multiplyScalar(R),k.distance=F,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[g]=k;const N=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,N.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[g]=N.matrix,P.castShadow){const D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,n.spotShadow[g]=D,n.spotShadowMap[g]=I,x++}g++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(C).multiplyScalar(R),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=k,f++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const N=P.shadow,D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,D.shadowCameraNear=N.camera.near,D.shadowCameraFar=N.camera.far,n.pointShadow[v]=D,n.pointShadowMap[v]=I,n.pointShadowMatrix[v]=P.shadow.matrix,_++}n.point[v]=k,v++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(R),k.groundColor.copy(P.groundColor).multiplyScalar(R),n.hemi[p]=k,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==m||T.pointLength!==v||T.spotLength!==g||T.rectAreaLength!==f||T.hemiLength!==p||T.numDirectionalShadows!==w||T.numPointShadows!==_||T.numSpotShadows!==x||T.numSpotMaps!==y||T.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=f,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,T.directionalLength=m,T.pointLength=v,T.spotLength=g,T.rectAreaLength=f,T.hemiLength=p,T.numDirectionalShadows=w,T.numPointShadows=_,T.numSpotShadows=x,T.numSpotMaps=y,T.numLightProbes=A,n.version=F1++)}function l(c,h){let u=0,d=0,m=0,v=0,g=0;const f=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const _=c[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),u++}else if(_.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),m++}else if(_.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(f),a.identity(),o.copy(_.matrixWorld),o.premultiply(f),a.extractRotation(o),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(f),g++}}}return{setup:r,setupView:l,state:n}}function Eh(i){const t=new N1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function U1(i){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let r;return a===void 0?(r=new Eh(i),t.set(s,[r])):o>=a.length?(r=new Eh(i),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}const k1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z1=`uniform sampler2D shadow_pass;
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
}`;function B1(i,t,e){let n=new nc;const s=new $t,o=new $t,a=new Ge,r=new jp({depthPacking:Gd}),l=new Kp,c={},h=e.maxTextureSize,u={[cs]:Fn,[Fn]:cs,[on]:on},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:k1,fragmentShader:z1}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Zt;v.setAttribute("position",new Q(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Oe(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let p=this.type;this.render=function(b,A,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Oi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const R=p!==Ni&&this.type===Ni,F=p===Ni&&this.type!==Ni;for(let I=0,k=b.length;I<k;I++){const N=b[I],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const O=D.getFrameExtents();if(s.multiply(O),o.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/O.x),s.x=o.x*O.x,D.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/O.y),s.y=o.y*O.y,D.mapSize.y=o.y)),D.map===null||R===!0||F===!0){const Z=this.type!==Ni?{minFilter:Bn,magFilter:Bn}:{};D.map!==null&&D.map.dispose(),D.map=new ii(s.x,s.y,Z),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const H=D.getViewportCount();for(let Z=0;Z<H;Z++){const q=D.getViewport(Z);a.set(o.x*q.x,o.y*q.y,o.x*q.z,o.y*q.w),C.viewport(a),D.updateMatrices(N,Z),n=D.getFrustum(),x(A,T,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===Ni&&w(D,T),D.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(S,M,P)};function w(b,A){const T=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ii(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,T,d,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,T,m,g,null)}function _(b,A,T,S){let M=null;const P=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=T.isPointLight===!0?l:r,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const C=M.uuid,R=A.uuid;let F=c[C];F===void 0&&(F={},c[C]=F);let I=F[R];I===void 0&&(I=M.clone(),F[R]=I,A.addEventListener("dispose",y)),M=I}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Ni?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const C=i.properties.get(M);C.light=T}return M}function x(b,A,T,S,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Ni)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const R=t.update(b),F=b.material;if(Array.isArray(F)){const I=R.groups;for(let k=0,N=I.length;k<N;k++){const D=I[k],O=F[D.materialIndex];if(O&&O.visible){const H=_(b,O,S,M);b.onBeforeShadow(i,b,A,T,R,H,D),i.renderBufferDirect(T,null,R,H,b,D),b.onAfterShadow(i,b,A,T,R,H,D)}}}else if(F.visible){const I=_(b,F,S,M);b.onBeforeShadow(i,b,A,T,R,I,null),i.renderBufferDirect(T,null,R,I,b,null),b.onAfterShadow(i,b,A,T,R,I,null)}}const C=b.children;for(let R=0,F=C.length;R<F;R++)x(C[R],A,T,S,M)}function y(b){b.target.removeEventListener("dispose",y);for(const T in c){const S=c[T],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const O1={[nl]:il,[sl]:rl,[ol]:ll,[Hi]:al,[il]:nl,[rl]:sl,[ll]:ol,[al]:Hi};function H1(i,t){function e(){let ot=!1;const Gt=new Ge;let wt=null;const St=new Ge(0,0,0,0);return{setMask:function(At){wt!==At&&!ot&&(i.colorMask(At,At,At,At),wt=At)},setLocked:function(At){ot=At},setClear:function(At,Vt,ue,Pe,Ve){Ve===!0&&(At*=Pe,Vt*=Pe,ue*=Pe),Gt.set(At,Vt,ue,Pe),St.equals(Gt)===!1&&(i.clearColor(At,Vt,ue,Pe),St.copy(Gt))},reset:function(){ot=!1,wt=null,St.set(-1,0,0,0)}}}function n(){let ot=!1,Gt=!1,wt=null,St=null,At=null;return{setReversed:function(Vt){if(Gt!==Vt){const ue=t.get("EXT_clip_control");Gt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);const Pe=At;At=null,this.setClear(Pe)}Gt=Vt},getReversed:function(){return Gt},setTest:function(Vt){Vt?it(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(Vt){wt!==Vt&&!ot&&(i.depthMask(Vt),wt=Vt)},setFunc:function(Vt){if(Gt&&(Vt=O1[Vt]),St!==Vt){switch(Vt){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case rl:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=Vt}},setLocked:function(Vt){ot=Vt},setClear:function(Vt){At!==Vt&&(Gt&&(Vt=1-Vt),i.clearDepth(Vt),At=Vt)},reset:function(){ot=!1,wt=null,St=null,At=null,Gt=!1}}}function s(){let ot=!1,Gt=null,wt=null,St=null,At=null,Vt=null,ue=null,Pe=null,Ve=null;return{setTest:function(he){ot||(he?it(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(he){Gt!==he&&!ot&&(i.stencilMask(he),Gt=he)},setFunc:function(he,en,Ne){(wt!==he||St!==en||At!==Ne)&&(i.stencilFunc(he,en,Ne),wt=he,St=en,At=Ne)},setOp:function(he,en,Ne){(Vt!==he||ue!==en||Pe!==Ne)&&(i.stencilOp(he,en,Ne),Vt=he,ue=en,Pe=Ne)},setLocked:function(he){ot=he},setClear:function(he){Ve!==he&&(i.clearStencil(he),Ve=he)},reset:function(){ot=!1,Gt=null,wt=null,St=null,At=null,Vt=null,ue=null,Pe=null,Ve=null}}}const o=new e,a=new n,r=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,m=[],v=null,g=!1,f=null,p=null,w=null,_=null,x=null,y=null,b=null,A=new Bt(0,0,0),T=0,S=!1,M=null,P=null,C=null,R=null,F=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(D)[1]),k=N>=1):D.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),k=N>=2);let O=null,H={};const Z=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),$=new Ge().fromArray(Z),X=new Ge().fromArray(q);function V(ot,Gt,wt,St){const At=new Uint8Array(4),Vt=i.createTexture();i.bindTexture(ot,Vt),i.texParameteri(ot,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(ot,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<wt;ue++)ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?i.texImage3D(Gt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Gt+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Vt}const et={};et[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),it(i.DEPTH_TEST),a.setFunc(Hi),xt(!1),Ct(vc),it(i.CULL_FACE),z(Oi);function it(ot){h[ot]!==!0&&(i.enable(ot),h[ot]=!0)}function J(ot){h[ot]!==!1&&(i.disable(ot),h[ot]=!1)}function st(ot,Gt){return u[ot]!==Gt?(i.bindFramebuffer(ot,Gt),u[ot]=Gt,ot===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Gt),ot===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Gt),!0):!1}function Y(ot,Gt){let wt=m,St=!1;if(ot){wt=d.get(Gt),wt===void 0&&(wt=[],d.set(Gt,wt));const At=ot.textures;if(wt.length!==At.length||wt[0]!==i.COLOR_ATTACHMENT0){for(let Vt=0,ue=At.length;Vt<ue;Vt++)wt[Vt]=i.COLOR_ATTACHMENT0+Vt;wt.length=At.length,St=!0}}else wt[0]!==i.BACK&&(wt[0]=i.BACK,St=!0);St&&i.drawBuffers(wt)}function j(ot){return v!==ot?(i.useProgram(ot),v=ot,!0):!1}const ut={[Ts]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[yd]:i.FUNC_REVERSE_SUBTRACT};ut[bd]=i.MIN,ut[Sd]=i.MAX;const tt={[Ad]:i.ZERO,[Td]:i.ONE,[Ed]:i.SRC_COLOR,[tl]:i.SRC_ALPHA,[Fd]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Pd]:i.DST_ALPHA,[Cd]:i.ONE_MINUS_SRC_COLOR,[el]:i.ONE_MINUS_SRC_ALPHA,[Id]:i.ONE_MINUS_DST_COLOR,[Rd]:i.ONE_MINUS_DST_ALPHA,[Dd]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[Ud]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function z(ot,Gt,wt,St,At,Vt,ue,Pe,Ve,he){if(ot===Oi){g===!0&&(J(i.BLEND),g=!1);return}if(g===!1&&(it(i.BLEND),g=!0),ot!==Md){if(ot!==f||he!==S){if((p!==Ts||x!==Ts)&&(i.blendEquation(i.FUNC_ADD),p=Ts,x=Ts),he)switch(ot){case so:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ot);break}else switch(ot){case so:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ot);break}w=null,_=null,y=null,b=null,A.set(0,0,0),T=0,f=ot,S=he}return}At=At||Gt,Vt=Vt||wt,ue=ue||St,(Gt!==p||At!==x)&&(i.blendEquationSeparate(ut[Gt],ut[At]),p=Gt,x=At),(wt!==w||St!==_||Vt!==y||ue!==b)&&(i.blendFuncSeparate(tt[wt],tt[St],tt[Vt],tt[ue]),w=wt,_=St,y=Vt,b=ue),(Pe.equals(A)===!1||Ve!==T)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Ve),A.copy(Pe),T=Ve),f=ot,S=!1}function _t(ot,Gt){ot.side===on?J(i.CULL_FACE):it(i.CULL_FACE);let wt=ot.side===Fn;Gt&&(wt=!wt),xt(wt),ot.blending===so&&ot.transparent===!1?z(Oi):z(ot.blending,ot.blendEquation,ot.blendSrc,ot.blendDst,ot.blendEquationAlpha,ot.blendSrcAlpha,ot.blendDstAlpha,ot.blendColor,ot.blendAlpha,ot.premultipliedAlpha),a.setFunc(ot.depthFunc),a.setTest(ot.depthTest),a.setMask(ot.depthWrite),o.setMask(ot.colorWrite);const St=ot.stencilWrite;r.setTest(St),St&&(r.setMask(ot.stencilWriteMask),r.setFunc(ot.stencilFunc,ot.stencilRef,ot.stencilFuncMask),r.setOp(ot.stencilFail,ot.stencilZFail,ot.stencilZPass)),Nt(ot.polygonOffset,ot.polygonOffsetFactor,ot.polygonOffsetUnits),ot.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(ot){M!==ot&&(ot?i.frontFace(i.CW):i.frontFace(i.CCW),M=ot)}function Ct(ot){ot!==xd?(it(i.CULL_FACE),ot!==P&&(ot===vc?i.cullFace(i.BACK):ot===_d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),P=ot}function Tt(ot){ot!==C&&(k&&i.lineWidth(ot),C=ot)}function Nt(ot,Gt,wt){ot?(it(i.POLYGON_OFFSET_FILL),(R!==Gt||F!==wt)&&(i.polygonOffset(Gt,wt),R=Gt,F=wt)):J(i.POLYGON_OFFSET_FILL)}function lt(ot){ot?it(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function W(ot){ot===void 0&&(ot=i.TEXTURE0+I-1),O!==ot&&(i.activeTexture(ot),O=ot)}function L(ot,Gt,wt){wt===void 0&&(O===null?wt=i.TEXTURE0+I-1:wt=O);let St=H[wt];St===void 0&&(St={type:void 0,texture:void 0},H[wt]=St),(St.type!==ot||St.texture!==Gt)&&(O!==wt&&(i.activeTexture(wt),O=wt),i.bindTexture(ot,Gt||et[ot]),St.type=ot,St.texture=Gt)}function rt(){const ot=H[O];ot!==void 0&&ot.type!==void 0&&(i.bindTexture(ot.type,null),ot.type=void 0,ot.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function yt(){try{i.compressedTexImage3D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Mt(){try{i.texSubImage2D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function zt(){try{i.texSubImage3D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function kt(){try{i.compressedTexSubImage2D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function It(){try{i.texStorage2D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Lt(){try{i.texStorage3D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Ot(){try{i.texImage2D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function jt(){try{i.texImage3D(...arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Ht(ot){$.equals(ot)===!1&&(i.scissor(ot.x,ot.y,ot.z,ot.w),$.copy(ot))}function Ut(ot){X.equals(ot)===!1&&(i.viewport(ot.x,ot.y,ot.z,ot.w),X.copy(ot))}function ce(ot,Gt){let wt=c.get(Gt);wt===void 0&&(wt=new WeakMap,c.set(Gt,wt));let St=wt.get(ot);St===void 0&&(St=i.getUniformBlockIndex(Gt,ot.name),wt.set(ot,St))}function ne(ot,Gt){const St=c.get(Gt).get(ot);l.get(Gt)!==St&&(i.uniformBlockBinding(Gt,St,ot.__bindingPointIndex),l.set(Gt,St))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},O=null,H={},u={},d=new WeakMap,m=[],v=null,g=!1,f=null,p=null,w=null,_=null,x=null,y=null,b=null,A=new Bt(0,0,0),T=0,S=!1,M=null,P=null,C=null,R=null,F=null,$.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:it,disable:J,bindFramebuffer:st,drawBuffers:Y,useProgram:j,setBlending:z,setMaterial:_t,setFlipSided:xt,setCullFace:Ct,setLineWidth:Tt,setPolygonOffset:Nt,setScissorTest:lt,activeTexture:W,bindTexture:L,unbindTexture:rt,compressedTexImage2D:dt,compressedTexImage3D:yt,texImage2D:Ot,texImage3D:jt,updateUBOMapping:ce,uniformBlockBinding:ne,texStorage2D:It,texStorage3D:Lt,texSubImage2D:Mt,texSubImage3D:zt,compressedTexSubImage2D:kt,compressedTexSubImage3D:Rt,scissor:Ht,viewport:Ut,reset:Me}}function W1(i,t,e,n,s,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(W,L){return m?new OffscreenCanvas(W,L):Xa("canvas")}function g(W,L,rt){let dt=1;const yt=lt(W);if((yt.width>rt||yt.height>rt)&&(dt=rt/Math.max(yt.width,yt.height)),dt<1)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap||typeof VideoFrame<"u"&&W instanceof VideoFrame){const Mt=Math.floor(dt*yt.width),zt=Math.floor(dt*yt.height);u===void 0&&(u=v(Mt,zt));const kt=L?v(Mt,zt):u;return kt.width=Mt,kt.height=zt,kt.getContext("2d").drawImage(W,0,0,Mt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+Mt+"x"+zt+")."),kt}else return"data"in W&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),W;return W}function f(W){return W.generateMipmaps}function p(W){i.generateMipmap(W)}function w(W){return W.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:W.isWebGL3DRenderTarget?i.TEXTURE_3D:W.isWebGLArrayRenderTarget||W.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(W,L,rt,dt,yt=!1){if(W!==null){if(i[W]!==void 0)return i[W];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let Mt=L;if(L===i.RED&&(rt===i.FLOAT&&(Mt=i.R32F),rt===i.HALF_FLOAT&&(Mt=i.R16F),rt===i.UNSIGNED_BYTE&&(Mt=i.R8)),L===i.RED_INTEGER&&(rt===i.UNSIGNED_BYTE&&(Mt=i.R8UI),rt===i.UNSIGNED_SHORT&&(Mt=i.R16UI),rt===i.UNSIGNED_INT&&(Mt=i.R32UI),rt===i.BYTE&&(Mt=i.R8I),rt===i.SHORT&&(Mt=i.R16I),rt===i.INT&&(Mt=i.R32I)),L===i.RG&&(rt===i.FLOAT&&(Mt=i.RG32F),rt===i.HALF_FLOAT&&(Mt=i.RG16F),rt===i.UNSIGNED_BYTE&&(Mt=i.RG8)),L===i.RG_INTEGER&&(rt===i.UNSIGNED_BYTE&&(Mt=i.RG8UI),rt===i.UNSIGNED_SHORT&&(Mt=i.RG16UI),rt===i.UNSIGNED_INT&&(Mt=i.RG32UI),rt===i.BYTE&&(Mt=i.RG8I),rt===i.SHORT&&(Mt=i.RG16I),rt===i.INT&&(Mt=i.RG32I)),L===i.RGB_INTEGER&&(rt===i.UNSIGNED_BYTE&&(Mt=i.RGB8UI),rt===i.UNSIGNED_SHORT&&(Mt=i.RGB16UI),rt===i.UNSIGNED_INT&&(Mt=i.RGB32UI),rt===i.BYTE&&(Mt=i.RGB8I),rt===i.SHORT&&(Mt=i.RGB16I),rt===i.INT&&(Mt=i.RGB32I)),L===i.RGBA_INTEGER&&(rt===i.UNSIGNED_BYTE&&(Mt=i.RGBA8UI),rt===i.UNSIGNED_SHORT&&(Mt=i.RGBA16UI),rt===i.UNSIGNED_INT&&(Mt=i.RGBA32UI),rt===i.BYTE&&(Mt=i.RGBA8I),rt===i.SHORT&&(Mt=i.RGBA16I),rt===i.INT&&(Mt=i.RGBA32I)),L===i.RGB&&rt===i.UNSIGNED_INT_5_9_9_9_REV&&(Mt=i.RGB9_E5),L===i.RGBA){const zt=yt?Va:Le.getTransfer(dt);rt===i.FLOAT&&(Mt=i.RGBA32F),rt===i.HALF_FLOAT&&(Mt=i.RGBA16F),rt===i.UNSIGNED_BYTE&&(Mt=zt===Be?i.SRGB8_ALPHA8:i.RGBA8),rt===i.UNSIGNED_SHORT_4_4_4_4&&(Mt=i.RGBA4),rt===i.UNSIGNED_SHORT_5_5_5_1&&(Mt=i.RGB5_A1)}return(Mt===i.R16F||Mt===i.R32F||Mt===i.RG16F||Mt===i.RG32F||Mt===i.RGBA16F||Mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Mt}function x(W,L){let rt;return W?L===null||L===Ls||L===fo?rt=i.DEPTH24_STENCIL8:L===vi?rt=i.DEPTH32F_STENCIL8:L===Xo&&(rt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Ls||L===fo?rt=i.DEPTH_COMPONENT24:L===vi?rt=i.DEPTH_COMPONENT32F:L===Xo&&(rt=i.DEPTH_COMPONENT16),rt}function y(W,L){return f(W)===!0||W.isFramebufferTexture&&W.minFilter!==Bn&&W.minFilter!==gi?Math.log2(Math.max(L.width,L.height))+1:W.mipmaps!==void 0&&W.mipmaps.length>0?W.mipmaps.length:W.isCompressedTexture&&Array.isArray(W.image)?L.mipmaps.length:1}function b(W){const L=W.target;L.removeEventListener("dispose",b),T(L),L.isVideoTexture&&h.delete(L)}function A(W){const L=W.target;L.removeEventListener("dispose",A),M(L)}function T(W){const L=n.get(W);if(L.__webglInit===void 0)return;const rt=W.source,dt=d.get(rt);if(dt){const yt=dt[L.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&S(W),Object.keys(dt).length===0&&d.delete(rt)}n.remove(W)}function S(W){const L=n.get(W);i.deleteTexture(L.__webglTexture);const rt=W.source,dt=d.get(rt);delete dt[L.__cacheKey],a.memory.textures--}function M(W){const L=n.get(W);if(W.depthTexture&&(W.depthTexture.dispose(),n.remove(W.depthTexture)),W.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(L.__webglFramebuffer[dt]))for(let yt=0;yt<L.__webglFramebuffer[dt].length;yt++)i.deleteFramebuffer(L.__webglFramebuffer[dt][yt]);else i.deleteFramebuffer(L.__webglFramebuffer[dt]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[dt])}else{if(Array.isArray(L.__webglFramebuffer))for(let dt=0;dt<L.__webglFramebuffer.length;dt++)i.deleteFramebuffer(L.__webglFramebuffer[dt]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let dt=0;dt<L.__webglColorRenderbuffer.length;dt++)L.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[dt]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const rt=W.textures;for(let dt=0,yt=rt.length;dt<yt;dt++){const Mt=n.get(rt[dt]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove(rt[dt])}n.remove(W)}let P=0;function C(){P=0}function R(){const W=P;return W>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+W+" texture units while this GPU supports only "+s.maxTextures),P+=1,W}function F(W){const L=[];return L.push(W.wrapS),L.push(W.wrapT),L.push(W.wrapR||0),L.push(W.magFilter),L.push(W.minFilter),L.push(W.anisotropy),L.push(W.internalFormat),L.push(W.format),L.push(W.type),L.push(W.generateMipmaps),L.push(W.premultiplyAlpha),L.push(W.flipY),L.push(W.unpackAlignment),L.push(W.colorSpace),L.join()}function I(W,L){const rt=n.get(W);if(W.isVideoTexture&&Tt(W),W.isRenderTargetTexture===!1&&W.version>0&&rt.__version!==W.version){const dt=W.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(rt,W,L);return}}e.bindTexture(i.TEXTURE_2D,rt.__webglTexture,i.TEXTURE0+L)}function k(W,L){const rt=n.get(W);if(W.version>0&&rt.__version!==W.version){X(rt,W,L);return}e.bindTexture(i.TEXTURE_2D_ARRAY,rt.__webglTexture,i.TEXTURE0+L)}function N(W,L){const rt=n.get(W);if(W.version>0&&rt.__version!==W.version){X(rt,W,L);return}e.bindTexture(i.TEXTURE_3D,rt.__webglTexture,i.TEXTURE0+L)}function D(W,L){const rt=n.get(W);if(W.version>0&&rt.__version!==W.version){V(rt,W,L);return}e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture,i.TEXTURE0+L)}const O={[Ci]:i.REPEAT,[ns]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},H={[Bn]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[gi]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},Z={[Yd]:i.NEVER,[Qd]:i.ALWAYS,[$d]:i.LESS,[bu]:i.LEQUAL,[qd]:i.EQUAL,[Kd]:i.GEQUAL,[Zd]:i.GREATER,[jd]:i.NOTEQUAL};function q(W,L){if(L.type===vi&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===gi||L.magFilter===Da||L.magFilter===ko||L.magFilter===is||L.minFilter===gi||L.minFilter===Da||L.minFilter===ko||L.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(W,i.TEXTURE_WRAP_S,O[L.wrapS]),i.texParameteri(W,i.TEXTURE_WRAP_T,O[L.wrapT]),(W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY)&&i.texParameteri(W,i.TEXTURE_WRAP_R,O[L.wrapR]),i.texParameteri(W,i.TEXTURE_MAG_FILTER,H[L.magFilter]),i.texParameteri(W,i.TEXTURE_MIN_FILTER,H[L.minFilter]),L.compareFunction&&(i.texParameteri(W,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(W,i.TEXTURE_COMPARE_FUNC,Z[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===Bn||L.minFilter!==ko&&L.minFilter!==is||L.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(W,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function $(W,L){let rt=!1;W.__webglInit===void 0&&(W.__webglInit=!0,L.addEventListener("dispose",b));const dt=L.source;let yt=d.get(dt);yt===void 0&&(yt={},d.set(dt,yt));const Mt=F(L);if(Mt!==W.__cacheKey){yt[Mt]===void 0&&(yt[Mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,rt=!0),yt[Mt].usedTimes++;const zt=yt[W.__cacheKey];zt!==void 0&&(yt[W.__cacheKey].usedTimes--,zt.usedTimes===0&&S(L)),W.__cacheKey=Mt,W.__webglTexture=yt[Mt].texture}return rt}function X(W,L,rt){let dt=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(dt=i.TEXTURE_3D);const yt=$(W,L),Mt=L.source;e.bindTexture(dt,W.__webglTexture,i.TEXTURE0+rt);const zt=n.get(Mt);if(Mt.version!==zt.__version||yt===!0){e.activeTexture(i.TEXTURE0+rt);const kt=Le.getPrimaries(Le.workingColorSpace),Rt=L.colorSpace===ni?null:Le.getPrimaries(L.colorSpace),It=L.colorSpace===ni||kt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Lt=g(L.image,!1,s.maxTextureSize);Lt=Nt(L,Lt);const Ot=o.convert(L.format,L.colorSpace),jt=o.convert(L.type);let Ht=_(L.internalFormat,Ot,jt,L.colorSpace,L.isVideoTexture);q(dt,L);let Ut;const ce=L.mipmaps,ne=L.isVideoTexture!==!0,Me=zt.__version===void 0||yt===!0,ot=Mt.dataReady,Gt=y(L,Lt);if(L.isDepthTexture)Ht=x(L.format===mo,L.type),Me&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Ht,Lt.width,Lt.height):e.texImage2D(i.TEXTURE_2D,0,Ht,Lt.width,Lt.height,0,Ot,jt,null));else if(L.isDataTexture)if(ce.length>0){ne&&Me&&e.texStorage2D(i.TEXTURE_2D,Gt,Ht,ce[0].width,ce[0].height);for(let wt=0,St=ce.length;wt<St;wt++)Ut=ce[wt],ne?ot&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,Ut.width,Ut.height,Ot,jt,Ut.data):e.texImage2D(i.TEXTURE_2D,wt,Ht,Ut.width,Ut.height,0,Ot,jt,Ut.data);L.generateMipmaps=!1}else ne?(Me&&e.texStorage2D(i.TEXTURE_2D,Gt,Ht,Lt.width,Lt.height),ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt.width,Lt.height,Ot,jt,Lt.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,Lt.width,Lt.height,0,Ot,jt,Lt.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){ne&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Ht,ce[0].width,ce[0].height,Lt.depth);for(let wt=0,St=ce.length;wt<St;wt++)if(Ut=ce[wt],L.format!==$n)if(Ot!==null)if(ne){if(ot)if(L.layerUpdates.size>0){const At=sh(Ut.width,Ut.height,L.format,L.type);for(const Vt of L.layerUpdates){const ue=Ut.data.subarray(Vt*At/Ut.data.BYTES_PER_ELEMENT,(Vt+1)*At/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,Vt,Ut.width,Ut.height,1,Ot,ue)}L.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,Ut.width,Ut.height,Lt.depth,Ot,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,wt,Ht,Ut.width,Ut.height,Lt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,Ut.width,Ut.height,Lt.depth,Ot,jt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,wt,Ht,Ut.width,Ut.height,Lt.depth,0,Ot,jt,Ut.data)}else{ne&&Me&&e.texStorage2D(i.TEXTURE_2D,Gt,Ht,ce[0].width,ce[0].height);for(let wt=0,St=ce.length;wt<St;wt++)Ut=ce[wt],L.format!==$n?Ot!==null?ne?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,wt,0,0,Ut.width,Ut.height,Ot,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,wt,Ht,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?ot&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,Ut.width,Ut.height,Ot,jt,Ut.data):e.texImage2D(i.TEXTURE_2D,wt,Ht,Ut.width,Ut.height,0,Ot,jt,Ut.data)}else if(L.isDataArrayTexture)if(ne){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Ht,Lt.width,Lt.height,Lt.depth),ot)if(L.layerUpdates.size>0){const wt=sh(Lt.width,Lt.height,L.format,L.type);for(const St of L.layerUpdates){const At=Lt.data.subarray(St*wt/Lt.data.BYTES_PER_ELEMENT,(St+1)*wt/Lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,Lt.width,Lt.height,1,Ot,jt,At)}L.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Lt.width,Lt.height,Lt.depth,Ot,jt,Lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,Lt.width,Lt.height,Lt.depth,0,Ot,jt,Lt.data);else if(L.isData3DTexture)ne?(Me&&e.texStorage3D(i.TEXTURE_3D,Gt,Ht,Lt.width,Lt.height,Lt.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Lt.width,Lt.height,Lt.depth,Ot,jt,Lt.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,Lt.width,Lt.height,Lt.depth,0,Ot,jt,Lt.data);else if(L.isFramebufferTexture){if(Me)if(ne)e.texStorage2D(i.TEXTURE_2D,Gt,Ht,Lt.width,Lt.height);else{let wt=Lt.width,St=Lt.height;for(let At=0;At<Gt;At++)e.texImage2D(i.TEXTURE_2D,At,Ht,wt,St,0,Ot,jt,null),wt>>=1,St>>=1}}else if(ce.length>0){if(ne&&Me){const wt=lt(ce[0]);e.texStorage2D(i.TEXTURE_2D,Gt,Ht,wt.width,wt.height)}for(let wt=0,St=ce.length;wt<St;wt++)Ut=ce[wt],ne?ot&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,Ot,jt,Ut):e.texImage2D(i.TEXTURE_2D,wt,Ht,Ot,jt,Ut);L.generateMipmaps=!1}else if(ne){if(Me){const wt=lt(Lt);e.texStorage2D(i.TEXTURE_2D,Gt,Ht,wt.width,wt.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ot,jt,Lt)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Ot,jt,Lt);f(L)&&p(dt),zt.__version=Mt.version,L.onUpdate&&L.onUpdate(L)}W.__version=L.version}function V(W,L,rt){if(L.image.length!==6)return;const dt=$(W,L),yt=L.source;e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+rt);const Mt=n.get(yt);if(yt.version!==Mt.__version||dt===!0){e.activeTexture(i.TEXTURE0+rt);const zt=Le.getPrimaries(Le.workingColorSpace),kt=L.colorSpace===ni?null:Le.getPrimaries(L.colorSpace),Rt=L.colorSpace===ni||zt===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const It=L.isCompressedTexture||L.image[0].isCompressedTexture,Lt=L.image[0]&&L.image[0].isDataTexture,Ot=[];for(let St=0;St<6;St++)!It&&!Lt?Ot[St]=g(L.image[St],!0,s.maxCubemapSize):Ot[St]=Lt?L.image[St].image:L.image[St],Ot[St]=Nt(L,Ot[St]);const jt=Ot[0],Ht=o.convert(L.format,L.colorSpace),Ut=o.convert(L.type),ce=_(L.internalFormat,Ht,Ut,L.colorSpace),ne=L.isVideoTexture!==!0,Me=Mt.__version===void 0||dt===!0,ot=yt.dataReady;let Gt=y(L,jt);q(i.TEXTURE_CUBE_MAP,L);let wt;if(It){ne&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,ce,jt.width,jt.height);for(let St=0;St<6;St++){wt=Ot[St].mipmaps;for(let At=0;At<wt.length;At++){const Vt=wt[At];L.format!==$n?Ht!==null?ne?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At,0,0,Vt.width,Vt.height,Ht,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At,ce,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At,0,0,Vt.width,Vt.height,Ht,Ut,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At,ce,Vt.width,Vt.height,0,Ht,Ut,Vt.data)}}}else{if(wt=L.mipmaps,ne&&Me){wt.length>0&&Gt++;const St=lt(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,ce,St.width,St.height)}for(let St=0;St<6;St++)if(Lt){ne?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ot[St].width,Ot[St].height,Ht,Ut,Ot[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,Ot[St].width,Ot[St].height,0,Ht,Ut,Ot[St].data);for(let At=0;At<wt.length;At++){const ue=wt[At].image[St].image;ne?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At+1,0,0,ue.width,ue.height,Ht,Ut,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At+1,ce,ue.width,ue.height,0,Ht,Ut,ue.data)}}else{ne?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ht,Ut,Ot[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,Ht,Ut,Ot[St]);for(let At=0;At<wt.length;At++){const Vt=wt[At];ne?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At+1,0,0,Ht,Ut,Vt.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At+1,ce,Ht,Ut,Vt.image[St])}}}f(L)&&p(i.TEXTURE_CUBE_MAP),Mt.__version=yt.version,L.onUpdate&&L.onUpdate(L)}W.__version=L.version}function et(W,L,rt,dt,yt,Mt){const zt=o.convert(rt.format,rt.colorSpace),kt=o.convert(rt.type),Rt=_(rt.internalFormat,zt,kt,rt.colorSpace),It=n.get(L),Lt=n.get(rt);if(Lt.__renderTarget=L,!It.__hasExternalTextures){const Ot=Math.max(1,L.width>>Mt),jt=Math.max(1,L.height>>Mt);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?e.texImage3D(yt,Mt,Rt,Ot,jt,L.depth,0,zt,kt,null):e.texImage2D(yt,Mt,Rt,Ot,jt,0,zt,kt,null)}e.bindFramebuffer(i.FRAMEBUFFER,W),Ct(L)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,yt,Lt.__webglTexture,0,xt(L)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,yt,Lt.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(W,L,rt){if(i.bindRenderbuffer(i.RENDERBUFFER,W),L.depthBuffer){const dt=L.depthTexture,yt=dt&&dt.isDepthTexture?dt.type:null,Mt=x(L.stencilBuffer,yt),zt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=xt(L);Ct(L)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,Mt,L.width,L.height):rt?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Mt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,W)}else{const dt=L.textures;for(let yt=0;yt<dt.length;yt++){const Mt=dt[yt],zt=o.convert(Mt.format,Mt.colorSpace),kt=o.convert(Mt.type),Rt=_(Mt.internalFormat,zt,kt,Mt.colorSpace),It=xt(L);rt&&Ct(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Rt,L.width,L.height):Ct(L)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Rt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(W,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,W),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=n.get(L.depthTexture);dt.__renderTarget=L,(!dt.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),I(L.depthTexture,0);const yt=dt.__webglTexture,Mt=xt(L);if(L.depthTexture.format===oo)Ct(L)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,yt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,yt,0);else if(L.depthTexture.format===mo)Ct(L)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,yt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function st(W){const L=n.get(W),rt=W.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==W.depthTexture){const dt=W.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),dt){const yt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,dt.removeEventListener("dispose",yt)};dt.addEventListener("dispose",yt),L.__depthDisposeCallback=yt}L.__boundDepthTexture=dt}if(W.depthTexture&&!L.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");J(L.__webglFramebuffer,W)}else if(rt){L.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[dt]),L.__webglDepthbuffer[dt]===void 0)L.__webglDepthbuffer[dt]=i.createRenderbuffer(),it(L.__webglDepthbuffer[dt],W,!1);else{const yt=W.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=L.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,Mt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=i.createRenderbuffer(),it(L.__webglDepthbuffer,W,!1);else{const dt=W.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=L.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,yt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(W,L,rt){const dt=n.get(W);L!==void 0&&et(dt.__webglFramebuffer,W,W.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),rt!==void 0&&st(W)}function j(W){const L=W.texture,rt=n.get(W),dt=n.get(L);W.addEventListener("dispose",A);const yt=W.textures,Mt=W.isWebGLCubeRenderTarget===!0,zt=yt.length>1;if(zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=L.version,a.memory.textures++),Mt){rt.__webglFramebuffer=[];for(let kt=0;kt<6;kt++)if(L.mipmaps&&L.mipmaps.length>0){rt.__webglFramebuffer[kt]=[];for(let Rt=0;Rt<L.mipmaps.length;Rt++)rt.__webglFramebuffer[kt][Rt]=i.createFramebuffer()}else rt.__webglFramebuffer[kt]=i.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){rt.__webglFramebuffer=[];for(let kt=0;kt<L.mipmaps.length;kt++)rt.__webglFramebuffer[kt]=i.createFramebuffer()}else rt.__webglFramebuffer=i.createFramebuffer();if(zt)for(let kt=0,Rt=yt.length;kt<Rt;kt++){const It=n.get(yt[kt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),a.memory.textures++)}if(W.samples>0&&Ct(W)===!1){rt.__webglMultisampledFramebuffer=i.createFramebuffer(),rt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let kt=0;kt<yt.length;kt++){const Rt=yt[kt];rt.__webglColorRenderbuffer[kt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,rt.__webglColorRenderbuffer[kt]);const It=o.convert(Rt.format,Rt.colorSpace),Lt=o.convert(Rt.type),Ot=_(Rt.internalFormat,It,Lt,Rt.colorSpace,W.isXRRenderTarget===!0),jt=xt(W);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Ot,W.width,W.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[kt])}i.bindRenderbuffer(i.RENDERBUFFER,null),W.depthBuffer&&(rt.__webglDepthRenderbuffer=i.createRenderbuffer(),it(rt.__webglDepthRenderbuffer,W,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),q(i.TEXTURE_CUBE_MAP,L);for(let kt=0;kt<6;kt++)if(L.mipmaps&&L.mipmaps.length>0)for(let Rt=0;Rt<L.mipmaps.length;Rt++)et(rt.__webglFramebuffer[kt][Rt],W,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Rt);else et(rt.__webglFramebuffer[kt],W,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0);f(L)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let kt=0,Rt=yt.length;kt<Rt;kt++){const It=yt[kt],Lt=n.get(It);e.bindTexture(i.TEXTURE_2D,Lt.__webglTexture),q(i.TEXTURE_2D,It),et(rt.__webglFramebuffer,W,It,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,0),f(It)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let kt=i.TEXTURE_2D;if((W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(kt=W.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(kt,dt.__webglTexture),q(kt,L),L.mipmaps&&L.mipmaps.length>0)for(let Rt=0;Rt<L.mipmaps.length;Rt++)et(rt.__webglFramebuffer[Rt],W,L,i.COLOR_ATTACHMENT0,kt,Rt);else et(rt.__webglFramebuffer,W,L,i.COLOR_ATTACHMENT0,kt,0);f(L)&&p(kt),e.unbindTexture()}W.depthBuffer&&st(W)}function ut(W){const L=W.textures;for(let rt=0,dt=L.length;rt<dt;rt++){const yt=L[rt];if(f(yt)){const Mt=w(W),zt=n.get(yt).__webglTexture;e.bindTexture(Mt,zt),p(Mt),e.unbindTexture()}}}const tt=[],z=[];function _t(W){if(W.samples>0){if(Ct(W)===!1){const L=W.textures,rt=W.width,dt=W.height;let yt=i.COLOR_BUFFER_BIT;const Mt=W.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(W),kt=L.length>1;if(kt)for(let Rt=0;Rt<L.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Rt=0;Rt<L.length;Rt++){if(W.resolveDepthBuffer&&(W.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),W.stencilBuffer&&W.resolveStencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),kt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Rt]);const It=n.get(L[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,rt,dt,0,0,rt,dt,yt,i.NEAREST),l===!0&&(tt.length=0,z.length=0,tt.push(i.COLOR_ATTACHMENT0+Rt),W.depthBuffer&&W.resolveDepthBuffer===!1&&(tt.push(Mt),z.push(Mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),kt)for(let Rt=0;Rt<L.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Rt]);const It=n.get(L[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(W.depthBuffer&&W.resolveDepthBuffer===!1&&l){const L=W.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])}}}function xt(W){return Math.min(s.maxSamples,W.samples)}function Ct(W){const L=n.get(W);return W.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Tt(W){const L=a.render.frame;h.get(W)!==L&&(h.set(W,L),W.update())}function Nt(W,L){const rt=W.colorSpace,dt=W.format,yt=W.type;return W.isCompressedTexture===!0||W.isVideoTexture===!0||rt!==go&&rt!==ni&&(Le.getTransfer(rt)===Be?(dt!==$n||yt!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),L}function lt(W){return typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement?(c.width=W.naturalWidth||W.width,c.height=W.naturalHeight||W.height):typeof VideoFrame<"u"&&W instanceof VideoFrame?(c.width=W.displayWidth,c.height=W.displayHeight):(c.width=W.width,c.height=W.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=C,this.setTexture2D=I,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=D,this.rebindTextures=Y,this.setupRenderTarget=j,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ct}function V1(i,t){function e(n,s=ni){let o;const a=Le.getTransfer(s);if(n===Gi)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.BYTE;if(n===fu)return i.SHORT;if(n===Xo)return i.UNSIGNED_SHORT;if(n===Xl)return i.INT;if(n===Ls)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===gu)return i.ALPHA;if(n===vu)return i.RGB;if(n===$n)return i.RGBA;if(n===xu)return i.LUMINANCE;if(n===_u)return i.LUMINANCE_ALPHA;if(n===oo)return i.DEPTH_COMPONENT;if(n===mo)return i.DEPTH_STENCIL;if(n===ql)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===Mu)return i.RG;if(n===jl)return i.RG_INTEGER;if(n===Kl)return i.RGBA_INTEGER;if(n===Na||n===Ua||n===ka||n===za)if(a===Be)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Na)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Na)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===dl||n===pl||n===fl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ul)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===gl||n===vl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ml||n===gl)return a===Be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===vl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xl||n===_l||n===Ml||n===wl||n===yl||n===bl||n===Sl||n===Al||n===Tl||n===El||n===Cl||n===Pl||n===Rl||n===Ll)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===xl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ll)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===Il||n===Fl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ba)return a===Be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===Dl||n===Nl||n===Ul)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ba)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X1=`
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

}`;class Y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Sn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new He({vertexShader:G1,fragmentShader:X1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new xo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $1 extends Is{constructor(t,e){super();const n=this;let s=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,v=null;const g=new Y1,f=e.getContextAttributes();let p=null,w=null;const _=[],x=[],y=new $t;let b=null;const A=new ei;A.viewport=new Ge;const T=new ei;T.viewport=new Ge;const S=[A,T],M=new n0;let P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let V=_[X];return V===void 0&&(V=new Rr,_[X]=V),V.getTargetRaySpace()},this.getControllerGrip=function(X){let V=_[X];return V===void 0&&(V=new Rr,_[X]=V),V.getGripSpace()},this.getHand=function(X){let V=_[X];return V===void 0&&(V=new Rr,_[X]=V),V.getHandSpace()};function R(X){const V=x.indexOf(X.inputSource);if(V===-1)return;const et=_[V];et!==void 0&&(et.update(X.inputSource,X.frame,c||a),et.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",I);for(let X=0;X<_.length;X++){const V=x[X];V!==null&&(x[X]=null,_[X].disconnect(V))}P=null,C=null,g.reset(),t.setRenderTarget(p),m=null,d=null,u=null,s=null,w=null,$.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",F),s.addEventListener("inputsourceschange",I),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(y),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,it=null,J=null;f.depth&&(J=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?mo:oo,it=f.stencil?fo:Ls);const st={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(st),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new ii(d.textureWidth,d.textureHeight,{format:$n,type:Gi,depthTexture:new Fu(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new ii(m.framebufferWidth,m.framebufferHeight,{format:$n,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(r),$.setContext(s),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(X){for(let V=0;V<X.removed.length;V++){const et=X.removed[V],it=x.indexOf(et);it>=0&&(x[it]=null,_[it].disconnect(et))}for(let V=0;V<X.added.length;V++){const et=X.added[V];let it=x.indexOf(et);if(it===-1){for(let st=0;st<_.length;st++)if(st>=x.length){x.push(et),it=st;break}else if(x[st]===null){x[st]=et,it=st;break}if(it===-1)break}const J=_[it];J&&J.connect(et)}}const k=new E,N=new E;function D(X,V,et){k.setFromMatrixPosition(V.matrixWorld),N.setFromMatrixPosition(et.matrixWorld);const it=k.distanceTo(N),J=V.projectionMatrix.elements,st=et.projectionMatrix.elements,Y=J[14]/(J[10]-1),j=J[14]/(J[10]+1),ut=(J[9]+1)/J[5],tt=(J[9]-1)/J[5],z=(J[8]-1)/J[0],_t=(st[8]+1)/st[0],xt=Y*z,Ct=Y*_t,Tt=it/(-z+_t),Nt=Tt*-z;if(V.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Nt),X.translateZ(Tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),J[10]===-1)X.projectionMatrix.copy(V.projectionMatrix),X.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const lt=Y+Tt,W=j+Tt,L=xt-Nt,rt=Ct+(it-Nt),dt=ut*j/W*lt,yt=tt*j/W*lt;X.projectionMatrix.makePerspective(L,rt,dt,yt,lt,W),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function O(X,V){V===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(V.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let V=X.near,et=X.far;g.texture!==null&&(g.depthNear>0&&(V=g.depthNear),g.depthFar>0&&(et=g.depthFar)),M.near=T.near=A.near=V,M.far=T.far=A.far=et,(P!==M.near||C!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,C=M.far),A.layers.mask=X.layers.mask|2,T.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|T.layers.mask;const it=X.parent,J=M.cameras;O(M,it);for(let st=0;st<J.length;st++)O(J[st],it);J.length===2?D(M,A,T):M.projectionMatrix.copy(A.projectionMatrix),H(X,M,it)};function H(X,V,et){et===null?X.matrix.copy(V.matrixWorld):(X.matrix.copy(et.matrixWorld),X.matrix.invert(),X.matrix.multiply(V.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(V.projectionMatrix),X.projectionMatrixInverse.copy(V.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Yo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Z=null;function q(X,V){if(h=V.getViewerPose(c||a),v=V,h!==null){const et=h.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let it=!1;et.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let Y=0;Y<et.length;Y++){const j=et[Y];let ut=null;if(m!==null)ut=m.getViewport(j);else{const z=u.getViewSubImage(d,j);ut=z.viewport,Y===0&&(t.setRenderTargetTextures(w,z.colorTexture,d.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(w))}let tt=S[Y];tt===void 0&&(tt=new ei,tt.layers.enable(Y),tt.viewport=new Ge,S[Y]=tt),tt.matrix.fromArray(j.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(j.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ut.x,ut.y,ut.width,ut.height),Y===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(tt)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Y=u.getDepthInformation(et[0]);Y&&Y.isValid&&Y.texture&&g.init(t,Y,s.renderState)}}for(let et=0;et<_.length;et++){const it=x[et],J=_[et];it!==null&&J!==void 0&&J.update(it,V,c||a)}Z&&Z(X,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),v=null}const $=new Uu;$.setAnimationLoop(q),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}}const Ms=new On,q1=new re;function Z1(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Cu(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,w,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(f,p):p.isMeshToonMaterial?(o(f,p),u(f,p)):p.isMeshPhongMaterial?(o(f,p),h(f,p)):p.isMeshStandardMaterial?(o(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,x)):p.isMeshMatcapMaterial?(o(f,p),v(f,p)):p.isMeshDepthMaterial?o(f,p):p.isMeshDistanceMaterial?(o(f,p),g(f,p)):p.isMeshNormalMaterial?o(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&r(f,p)):p.isPointsMaterial?l(f,p,w,_):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Fn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Fn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const w=t.get(p),_=w.envMap,x=w.envMapRotation;_&&(f.envMap.value=_,Ms.copy(x),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),f.envMapRotation.value.setFromMatrix4(q1.makeRotationFromEuler(Ms)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function r(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,w,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=_*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){const w=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j1(i,t,e,n){let s={},o={},a=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){const x=_.program;n.uniformBlockBinding(w,x)}function c(w,_){let x=s[w.id];x===void 0&&(v(w),x=h(w),s[w.id]=x,w.addEventListener("dispose",f));const y=_.program;n.updateUBOMapping(w,y);const b=t.render.frame;o[w.id]!==b&&(d(w),o[w.id]=b)}function h(w){const _=u();w.__bindingPointIndex=_;const x=i.createBuffer(),y=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let w=0;w<r;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const _=s[w.id],x=w.uniforms,y=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,A=x.length;b<A;b++){const T=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,M=T.length;S<M;S++){const P=T[S];if(m(P,b,S,y)===!0){const C=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let I=0;I<R.length;I++){const k=R[I],N=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,C+F,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,F),F+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,_,x,y){const b=w.value,A=_+"_"+x;if(y[A]===void 0)return typeof b=="number"||typeof b=="boolean"?y[A]=b:y[A]=b.clone(),!0;{const T=y[A];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return y[A]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function v(w){const _=w.uniforms;let x=0;const y=16;for(let A=0,T=_.length;A<T;A++){const S=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,P=S.length;M<P;M++){const C=S[M],R=Array.isArray(C.value)?C.value:[C.value];for(let F=0,I=R.length;F<I;F++){const k=R[F],N=g(k),D=x%y,O=D%N.boundary,H=D+O;x+=O,H!==0&&y-H<N.storage&&(x+=y-H),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,x+=N.storage}}}const b=x%y;return b>0&&(x+=y-b),w.__size=x,w.__cache={},this}function g(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function f(w){const _=w.target;_.removeEventListener("dispose",f);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},o={}}return{bind:l,update:c,dispose:p}}class K1{constructor(t={}){const{canvas:e=mp(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),g=new Int32Array(4);let f=null,p=null;const w=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=as,this.toneMappingExposure=1;const x=this;let y=!1,b=0,A=0,T=null,S=-1,M=null;const P=new Ge,C=new Ge;let R=null;const F=new Bt(0);let I=0,k=e.width,N=e.height,D=1,O=null,H=null;const Z=new Ge(0,0,k,N),q=new Ge(0,0,k,N);let $=!1;const X=new nc;let V=!1,et=!1;this.transmissionResolutionScale=1;const it=new re,J=new re,st=new E,Y=new Ge,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function tt(){return T===null?D:1}let z=n;function _t(B,at){return e.getContext(B,at)}try{const B={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tr}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),z===null){const at="webgl2";if(z=_t(at,B),z===null)throw _t(at)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let xt,Ct,Tt,Nt,lt,W,L,rt,dt,yt,Mt,zt,kt,Rt,It,Lt,Ot,jt,Ht,Ut,ce,ne,Me,ot;function Gt(){xt=new rg(z),xt.init(),ne=new V1(z,xt),Ct=new tg(z,xt,t,ne),Tt=new H1(z,xt),Ct.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),Nt=new hg(z),lt=new C1,W=new W1(z,xt,Tt,lt,Ct,ne,Nt),L=new ng(x),rt=new ag(x),dt=new m0(z),Me=new Qm(z,dt),yt=new lg(z,dt,Nt,Me),Mt=new dg(z,yt,dt,Nt),Ht=new ug(z,Ct,W),Lt=new eg(lt),zt=new E1(x,L,rt,xt,Ct,Me,Lt),kt=new Z1(x,lt),Rt=new R1,It=new U1(xt),jt=new Km(x,L,rt,Tt,Mt,m,l),Ot=new B1(x,Mt,Ct),ot=new j1(z,Nt,Ct,Tt),Ut=new Jm(z,xt,Nt),ce=new cg(z,xt,Nt),Nt.programs=zt.programs,x.capabilities=Ct,x.extensions=xt,x.properties=lt,x.renderLists=Rt,x.shadowMap=Ot,x.state=Tt,x.info=Nt}Gt();const wt=new $1(x,z);this.xr=wt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const B=xt.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=xt.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(B){B!==void 0&&(D=B,this.setSize(k,N,!1))},this.getSize=function(B){return B.set(k,N)},this.setSize=function(B,at,pt=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=B,N=at,e.width=Math.floor(B*D),e.height=Math.floor(at*D),pt===!0&&(e.style.width=B+"px",e.style.height=at+"px"),this.setViewport(0,0,B,at)},this.getDrawingBufferSize=function(B){return B.set(k*D,N*D).floor()},this.setDrawingBufferSize=function(B,at,pt){k=B,N=at,D=pt,e.width=Math.floor(B*pt),e.height=Math.floor(at*pt),this.setViewport(0,0,B,at)},this.getCurrentViewport=function(B){return B.copy(P)},this.getViewport=function(B){return B.copy(Z)},this.setViewport=function(B,at,pt,gt){B.isVector4?Z.set(B.x,B.y,B.z,B.w):Z.set(B,at,pt,gt),Tt.viewport(P.copy(Z).multiplyScalar(D).round())},this.getScissor=function(B){return B.copy(q)},this.setScissor=function(B,at,pt,gt){B.isVector4?q.set(B.x,B.y,B.z,B.w):q.set(B,at,pt,gt),Tt.scissor(C.copy(q).multiplyScalar(D).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(B){Tt.setScissorTest($=B)},this.setOpaqueSort=function(B){O=B},this.setTransparentSort=function(B){H=B},this.getClearColor=function(B){return B.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(B=!0,at=!0,pt=!0){let gt=0;if(B){let ct=!1;if(T!==null){const Pt=T.texture.format;ct=Pt===Kl||Pt===jl||Pt===Zl}if(ct){const Pt=T.texture.type,Wt=Pt===Gi||Pt===Ls||Pt===Xo||Pt===fo||Pt===Yl||Pt===$l,qt=jt.getClearColor(),Yt=jt.getClearAlpha(),ie=qt.r,ae=qt.g,Jt=qt.b;Wt?(v[0]=ie,v[1]=ae,v[2]=Jt,v[3]=Yt,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=ie,g[1]=ae,g[2]=Jt,g[3]=Yt,z.clearBufferiv(z.COLOR,0,g))}else gt|=z.COLOR_BUFFER_BIT}at&&(gt|=z.DEPTH_BUFFER_BIT),pt&&(gt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),jt.dispose(),Rt.dispose(),It.dispose(),lt.dispose(),L.dispose(),rt.dispose(),Mt.dispose(),Me.dispose(),ot.dispose(),zt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Hn),wt.removeEventListener("sessionend",Mn),Ye.stop()};function St(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const B=Nt.autoReset,at=Ot.enabled,pt=Ot.autoUpdate,gt=Ot.needsUpdate,ct=Ot.type;Gt(),Nt.autoReset=B,Ot.enabled=at,Ot.autoUpdate=pt,Ot.needsUpdate=gt,Ot.type=ct}function Vt(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function ue(B){const at=B.target;at.removeEventListener("dispose",ue),Pe(at)}function Pe(B){Ve(B),lt.remove(B)}function Ve(B){const at=lt.get(B).programs;at!==void 0&&(at.forEach(function(pt){zt.releaseProgram(pt)}),B.isShaderMaterial&&zt.releaseShaderCache(B))}this.renderBufferDirect=function(B,at,pt,gt,ct,Pt){at===null&&(at=j);const Wt=ct.isMesh&&ct.matrixWorld.determinant()<0,qt=Mi(B,at,pt,gt,ct);Tt.setMaterial(gt,Wt);let Yt=pt.index,ie=1;if(gt.wireframe===!0){if(Yt=yt.getWireframeAttribute(pt),Yt===void 0)return;ie=2}const ae=pt.drawRange,Jt=pt.attributes.position;let ye=ae.start*ie,we=(ae.start+ae.count)*ie;Pt!==null&&(ye=Math.max(ye,Pt.start*ie),we=Math.min(we,(Pt.start+Pt.count)*ie)),Yt!==null?(ye=Math.max(ye,0),we=Math.min(we,Yt.count)):Jt!=null&&(ye=Math.max(ye,0),we=Math.min(we,Jt.count));const $e=we-ye;if($e<0||$e===1/0)return;Me.setup(ct,gt,qt,pt,Yt);let De,Ae=Ut;if(Yt!==null&&(De=dt.get(Yt),Ae=ce,Ae.setIndex(De)),ct.isMesh)gt.wireframe===!0?(Tt.setLineWidth(gt.wireframeLinewidth*tt()),Ae.setMode(z.LINES)):Ae.setMode(z.TRIANGLES);else if(ct.isLine){let te=gt.linewidth;te===void 0&&(te=1),Tt.setLineWidth(te*tt()),ct.isLineSegments?Ae.setMode(z.LINES):ct.isLineLoop?Ae.setMode(z.LINE_LOOP):Ae.setMode(z.LINE_STRIP)}else ct.isPoints?Ae.setMode(z.POINTS):ct.isSprite&&Ae.setMode(z.TRIANGLES);if(ct.isBatchedMesh)if(ct._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount,ct._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const te=ct._multiDrawStarts,ze=ct._multiDrawCounts,Ce=ct._multiDrawCount,an=Yt?dt.get(Yt).bytesPerElement:1,Un=lt.get(gt).currentProgram.getUniforms();for(let cn=0;cn<Ce;cn++)Un.setValue(z,"_gl_DrawID",cn),Ae.render(te[cn]/an,ze[cn])}else if(ct.isInstancedMesh)Ae.renderInstances(ye,$e,ct.count);else if(pt.isInstancedBufferGeometry){const te=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,ze=Math.min(pt.instanceCount,te);Ae.renderInstances(ye,$e,ze)}else Ae.render(ye,$e)};function he(B,at,pt){B.transparent===!0&&B.side===on&&B.forceSinglePass===!1?(B.side=Fn,B.needsUpdate=!0,An(B,at,pt),B.side=cs,B.needsUpdate=!0,An(B,at,pt),B.side=on):An(B,at,pt)}this.compile=function(B,at,pt=null){pt===null&&(pt=B),p=It.get(pt),p.init(at),_.push(p),pt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(at.layers)&&(p.pushLight(ct),ct.castShadow&&p.pushShadow(ct))}),B!==pt&&B.traverseVisible(function(ct){ct.isLight&&ct.layers.test(at.layers)&&(p.pushLight(ct),ct.castShadow&&p.pushShadow(ct))}),p.setupLights();const gt=new Set;return B.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Pt=ct.material;if(Pt)if(Array.isArray(Pt))for(let Wt=0;Wt<Pt.length;Wt++){const qt=Pt[Wt];he(qt,pt,ct),gt.add(qt)}else he(Pt,pt,ct),gt.add(Pt)}),p=_.pop(),gt},this.compileAsync=function(B,at,pt=null){const gt=this.compile(B,at,pt);return new Promise(ct=>{function Pt(){if(gt.forEach(function(Wt){lt.get(Wt).currentProgram.isReady()&&gt.delete(Wt)}),gt.size===0){ct(B);return}setTimeout(Pt,10)}xt.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let en=null;function Ne(B){en&&en(B)}function Hn(){Ye.stop()}function Mn(){Ye.start()}const Ye=new Uu;Ye.setAnimationLoop(Ne),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(B){en=B,wt.setAnimationLoop(B),B===null?Ye.stop():Ye.start()},wt.addEventListener("sessionstart",Hn),wt.addEventListener("sessionend",Mn),this.render=function(B,at){if(at!==void 0&&at.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),at.parent===null&&at.matrixWorldAutoUpdate===!0&&at.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(at),at=wt.getCamera()),B.isScene===!0&&B.onBeforeRender(x,B,at,T),p=It.get(B,_.length),p.init(at),_.push(p),J.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),X.setFromProjectionMatrix(J),et=this.localClippingEnabled,V=Lt.init(this.clippingPlanes,et),f=Rt.get(B,w.length),f.init(),w.push(f),wt.enabled===!0&&wt.isPresenting===!0){const Pt=x.xr.getDepthSensingMesh();Pt!==null&&oi(Pt,at,-1/0,x.sortObjects)}oi(B,at,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(O,H),ut=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ut&&jt.addToRenderList(f,B),this.info.render.frame++,V===!0&&Lt.beginShadows();const pt=p.state.shadowsArray;Ot.render(pt,B,at),V===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const gt=f.opaque,ct=f.transmissive;if(p.setupLights(),at.isArrayCamera){const Pt=at.cameras;if(ct.length>0)for(let Wt=0,qt=Pt.length;Wt<qt;Wt++){const Yt=Pt[Wt];ai(gt,ct,B,Yt)}ut&&jt.render(B);for(let Wt=0,qt=Pt.length;Wt<qt;Wt++){const Yt=Pt[Wt];ln(f,B,Yt,Yt.viewport)}}else ct.length>0&&ai(gt,ct,B,at),ut&&jt.render(B),ln(f,B,at);T!==null&&A===0&&(W.updateMultisampleRenderTarget(T),W.updateRenderTargetMipmap(T)),B.isScene===!0&&B.onAfterRender(x,B,at),Me.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],V===!0&&Lt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?f=w[w.length-1]:f=null};function oi(B,at,pt,gt){if(B.visible===!1)return;if(B.layers.test(at.layers)){if(B.isGroup)pt=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(at);else if(B.isLight)p.pushLight(B),B.castShadow&&p.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||X.intersectsSprite(B)){gt&&Y.setFromMatrixPosition(B.matrixWorld).applyMatrix4(J);const Wt=Mt.update(B),qt=B.material;qt.visible&&f.push(B,Wt,qt,pt,Y.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||X.intersectsObject(B))){const Wt=Mt.update(B),qt=B.material;if(gt&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Y.copy(B.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Y.copy(Wt.boundingSphere.center)),Y.applyMatrix4(B.matrixWorld).applyMatrix4(J)),Array.isArray(qt)){const Yt=Wt.groups;for(let ie=0,ae=Yt.length;ie<ae;ie++){const Jt=Yt[ie],ye=qt[Jt.materialIndex];ye&&ye.visible&&f.push(B,Wt,ye,pt,Y.z,Jt)}}else qt.visible&&f.push(B,Wt,qt,pt,Y.z,null)}}const Pt=B.children;for(let Wt=0,qt=Pt.length;Wt<qt;Wt++)oi(Pt[Wt],at,pt,gt)}function ln(B,at,pt,gt){const ct=B.opaque,Pt=B.transmissive,Wt=B.transparent;p.setupLightsView(pt),V===!0&&Lt.setGlobalState(x.clippingPlanes,pt),gt&&Tt.viewport(P.copy(gt)),ct.length>0&&Dn(ct,at,pt),Pt.length>0&&Dn(Pt,at,pt),Wt.length>0&&Dn(Wt,at,pt),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ai(B,at,pt,gt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[gt.id]===void 0&&(p.state.transmissionRenderTarget[gt.id]=new ii(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Ei:Gi,minFilter:is,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Pt=p.state.transmissionRenderTarget[gt.id],Wt=gt.viewport||P;Pt.setSize(Wt.z*x.transmissionResolutionScale,Wt.w*x.transmissionResolutionScale);const qt=x.getRenderTarget();x.setRenderTarget(Pt),x.getClearColor(F),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),ut&&jt.render(pt);const Yt=x.toneMapping;x.toneMapping=as;const ie=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),p.setupLightsView(gt),V===!0&&Lt.setGlobalState(x.clippingPlanes,gt),Dn(B,pt,gt),W.updateMultisampleRenderTarget(Pt),W.updateRenderTargetMipmap(Pt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Jt=0,ye=at.length;Jt<ye;Jt++){const we=at[Jt],$e=we.object,De=we.geometry,Ae=we.material,te=we.group;if(Ae.side===on&&$e.layers.test(gt.layers)){const ze=Ae.side;Ae.side=Fn,Ae.needsUpdate=!0,Xi($e,pt,gt,De,Ae,te),Ae.side=ze,Ae.needsUpdate=!0,ae=!0}}ae===!0&&(W.updateMultisampleRenderTarget(Pt),W.updateRenderTargetMipmap(Pt))}x.setRenderTarget(qt),x.setClearColor(F,I),ie!==void 0&&(gt.viewport=ie),x.toneMapping=Yt}function Dn(B,at,pt){const gt=at.isScene===!0?at.overrideMaterial:null;for(let ct=0,Pt=B.length;ct<Pt;ct++){const Wt=B[ct],qt=Wt.object,Yt=Wt.geometry,ie=gt===null?Wt.material:gt,ae=Wt.group;qt.layers.test(pt.layers)&&Xi(qt,at,pt,Yt,ie,ae)}}function Xi(B,at,pt,gt,ct,Pt){B.onBeforeRender(x,at,pt,gt,ct,Pt),B.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),ct.onBeforeRender(x,at,pt,gt,B,Pt),ct.transparent===!0&&ct.side===on&&ct.forceSinglePass===!1?(ct.side=Fn,ct.needsUpdate=!0,x.renderBufferDirect(pt,at,gt,ct,B,Pt),ct.side=cs,ct.needsUpdate=!0,x.renderBufferDirect(pt,at,gt,ct,B,Pt),ct.side=on):x.renderBufferDirect(pt,at,gt,ct,B,Pt),B.onAfterRender(x,at,pt,gt,ct,Pt)}function An(B,at,pt){at.isScene!==!0&&(at=j);const gt=lt.get(B),ct=p.state.lights,Pt=p.state.shadowsArray,Wt=ct.state.version,qt=zt.getParameters(B,ct.state,Pt,at,pt),Yt=zt.getProgramCacheKey(qt);let ie=gt.programs;gt.environment=B.isMeshStandardMaterial?at.environment:null,gt.fog=at.fog,gt.envMap=(B.isMeshStandardMaterial?rt:L).get(B.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&B.envMap===null?at.environmentRotation:B.envMapRotation,ie===void 0&&(B.addEventListener("dispose",ue),ie=new Map,gt.programs=ie);let ae=ie.get(Yt);if(ae!==void 0){if(gt.currentProgram===ae&&gt.lightsStateVersion===Wt)return Wn(B,qt),ae}else qt.uniforms=zt.getUniforms(B),B.onBeforeCompile(qt,x),ae=zt.acquireProgram(qt,Yt),ie.set(Yt,ae),gt.uniforms=qt.uniforms;const Jt=gt.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Jt.clippingPlanes=Lt.uniform),Wn(B,qt),gt.needsLights=yn(B),gt.lightsStateVersion=Wt,gt.needsLights&&(Jt.ambientLightColor.value=ct.state.ambient,Jt.lightProbe.value=ct.state.probe,Jt.directionalLights.value=ct.state.directional,Jt.directionalLightShadows.value=ct.state.directionalShadow,Jt.spotLights.value=ct.state.spot,Jt.spotLightShadows.value=ct.state.spotShadow,Jt.rectAreaLights.value=ct.state.rectArea,Jt.ltc_1.value=ct.state.rectAreaLTC1,Jt.ltc_2.value=ct.state.rectAreaLTC2,Jt.pointLights.value=ct.state.point,Jt.pointLightShadows.value=ct.state.pointShadow,Jt.hemisphereLights.value=ct.state.hemi,Jt.directionalShadowMap.value=ct.state.directionalShadowMap,Jt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Jt.spotShadowMap.value=ct.state.spotShadowMap,Jt.spotLightMatrix.value=ct.state.spotLightMatrix,Jt.spotLightMap.value=ct.state.spotLightMap,Jt.pointShadowMap.value=ct.state.pointShadowMap,Jt.pointShadowMatrix.value=ct.state.pointShadowMatrix),gt.currentProgram=ae,gt.uniformsList=null,ae}function wn(B){if(B.uniformsList===null){const at=B.currentProgram.getUniforms();B.uniformsList=Oa.seqWithValue(at.seq,B.uniforms)}return B.uniformsList}function Wn(B,at){const pt=lt.get(B);pt.outputColorSpace=at.outputColorSpace,pt.batching=at.batching,pt.batchingColor=at.batchingColor,pt.instancing=at.instancing,pt.instancingColor=at.instancingColor,pt.instancingMorph=at.instancingMorph,pt.skinning=at.skinning,pt.morphTargets=at.morphTargets,pt.morphNormals=at.morphNormals,pt.morphColors=at.morphColors,pt.morphTargetsCount=at.morphTargetsCount,pt.numClippingPlanes=at.numClippingPlanes,pt.numIntersection=at.numClipIntersection,pt.vertexAlphas=at.vertexAlphas,pt.vertexTangents=at.vertexTangents,pt.toneMapping=at.toneMapping}function Mi(B,at,pt,gt,ct){at.isScene!==!0&&(at=j),W.resetTextureUnits();const Pt=at.fog,Wt=gt.isMeshStandardMaterial?at.environment:null,qt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:go,Yt=(gt.isMeshStandardMaterial?rt:L).get(gt.envMap||Wt),ie=gt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,ae=!!pt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),Jt=!!pt.morphAttributes.position,ye=!!pt.morphAttributes.normal,we=!!pt.morphAttributes.color;let $e=as;gt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&($e=x.toneMapping);const De=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Ae=De!==void 0?De.length:0,te=lt.get(gt),ze=p.state.lights;if(V===!0&&(et===!0||B!==M)){const Qe=B===M&&gt.id===S;Lt.setState(gt,B,Qe)}let Ce=!1;gt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==ze.state.version||te.outputColorSpace!==qt||ct.isBatchedMesh&&te.batching===!1||!ct.isBatchedMesh&&te.batching===!0||ct.isBatchedMesh&&te.batchingColor===!0&&ct.colorTexture===null||ct.isBatchedMesh&&te.batchingColor===!1&&ct.colorTexture!==null||ct.isInstancedMesh&&te.instancing===!1||!ct.isInstancedMesh&&te.instancing===!0||ct.isSkinnedMesh&&te.skinning===!1||!ct.isSkinnedMesh&&te.skinning===!0||ct.isInstancedMesh&&te.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&te.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&te.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&te.instancingMorph===!1&&ct.morphTexture!==null||te.envMap!==Yt||gt.fog===!0&&te.fog!==Pt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Lt.numPlanes||te.numIntersection!==Lt.numIntersection)||te.vertexAlphas!==ie||te.vertexTangents!==ae||te.morphTargets!==Jt||te.morphNormals!==ye||te.morphColors!==we||te.toneMapping!==$e||te.morphTargetsCount!==Ae)&&(Ce=!0):(Ce=!0,te.__version=gt.version);let an=te.currentProgram;Ce===!0&&(an=An(gt,at,ct));let Un=!1,cn=!1,wi=!1;const Ue=an.getUniforms(),nn=te.uniforms;if(Tt.useProgram(an.program)&&(Un=!0,cn=!0,wi=!0),gt.id!==S&&(S=gt.id,cn=!0),Un||M!==B){Tt.buffers.depth.getReversed()?(it.copy(B.projectionMatrix),vp(it),xp(it),Ue.setValue(z,"projectionMatrix",it)):Ue.setValue(z,"projectionMatrix",B.projectionMatrix),Ue.setValue(z,"viewMatrix",B.matrixWorldInverse);const hn=Ue.map.cameraPosition;hn!==void 0&&hn.setValue(z,st.setFromMatrixPosition(B.matrixWorld)),Ct.logarithmicDepthBuffer&&Ue.setValue(z,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&Ue.setValue(z,"isOrthographic",B.isOrthographicCamera===!0),M!==B&&(M=B,cn=!0,wi=!0)}if(ct.isSkinnedMesh){Ue.setOptional(z,ct,"bindMatrix"),Ue.setOptional(z,ct,"bindMatrixInverse");const Qe=ct.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ue.setValue(z,"boneTexture",Qe.boneTexture,W))}ct.isBatchedMesh&&(Ue.setOptional(z,ct,"batchingTexture"),Ue.setValue(z,"batchingTexture",ct._matricesTexture,W),Ue.setOptional(z,ct,"batchingIdTexture"),Ue.setValue(z,"batchingIdTexture",ct._indirectTexture,W),Ue.setOptional(z,ct,"batchingColorTexture"),ct._colorsTexture!==null&&Ue.setValue(z,"batchingColorTexture",ct._colorsTexture,W));const vn=pt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Ht.update(ct,pt,an),(cn||te.receiveShadow!==ct.receiveShadow)&&(te.receiveShadow=ct.receiveShadow,Ue.setValue(z,"receiveShadow",ct.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(nn.envMap.value=Yt,nn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&at.environment!==null&&(nn.envMapIntensity.value=at.environmentIntensity),cn&&(Ue.setValue(z,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&Zn(nn,wi),Pt&&gt.fog===!0&&kt.refreshFogUniforms(nn,Pt),kt.refreshMaterialUniforms(nn,gt,D,N,p.state.transmissionRenderTarget[B.id]),Oa.upload(z,wn(te),nn,W)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(Oa.upload(z,wn(te),nn,W),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&Ue.setValue(z,"center",ct.center),Ue.setValue(z,"modelViewMatrix",ct.modelViewMatrix),Ue.setValue(z,"normalMatrix",ct.normalMatrix),Ue.setValue(z,"modelMatrix",ct.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const Qe=gt.uniformsGroups;for(let hn=0,yi=Qe.length;hn<yi;hn++){const kn=Qe[hn];ot.update(kn,an),ot.bind(kn,an)}}return an}function Zn(B,at){B.ambientLightColor.needsUpdate=at,B.lightProbe.needsUpdate=at,B.directionalLights.needsUpdate=at,B.directionalLightShadows.needsUpdate=at,B.pointLights.needsUpdate=at,B.pointLightShadows.needsUpdate=at,B.spotLights.needsUpdate=at,B.spotLightShadows.needsUpdate=at,B.rectAreaLights.needsUpdate=at,B.hemisphereLights.needsUpdate=at}function yn(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(B,at,pt){lt.get(B.texture).__webglTexture=at,lt.get(B.depthTexture).__webglTexture=pt;const gt=lt.get(B);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=pt===void 0,gt.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(B,at){const pt=lt.get(B);pt.__webglFramebuffer=at,pt.__useDefaultFramebuffer=at===void 0};const jn=z.createFramebuffer();this.setRenderTarget=function(B,at=0,pt=0){T=B,b=at,A=pt;let gt=!0,ct=null,Pt=!1,Wt=!1;if(B){const Yt=lt.get(B);if(Yt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(z.FRAMEBUFFER,null),gt=!1;else if(Yt.__webglFramebuffer===void 0)W.setupRenderTarget(B);else if(Yt.__hasExternalTextures)W.rebindTextures(B,lt.get(B.texture).__webglTexture,lt.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){const Jt=B.depthTexture;if(Yt.__boundDepthTexture!==Jt){if(Jt!==null&&lt.has(Jt)&&(B.width!==Jt.image.width||B.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(B)}}const ie=B.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Wt=!0);const ae=lt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(ae[at])?ct=ae[at][pt]:ct=ae[at],Pt=!0):B.samples>0&&W.useMultisampledRTT(B)===!1?ct=lt.get(B).__webglMultisampledFramebuffer:Array.isArray(ae)?ct=ae[pt]:ct=ae,P.copy(B.viewport),C.copy(B.scissor),R=B.scissorTest}else P.copy(Z).multiplyScalar(D).floor(),C.copy(q).multiplyScalar(D).floor(),R=$;if(pt!==0&&(ct=jn),Tt.bindFramebuffer(z.FRAMEBUFFER,ct)&&gt&&Tt.drawBuffers(B,ct),Tt.viewport(P),Tt.scissor(C),Tt.setScissorTest(R),Pt){const Yt=lt.get(B.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+at,Yt.__webglTexture,pt)}else if(Wt){const Yt=lt.get(B.texture),ie=at;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Yt.__webglTexture,pt,ie)}else if(B!==null&&pt!==0){const Yt=lt.get(B.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Yt.__webglTexture,pt)}S=-1},this.readRenderTargetPixels=function(B,at,pt,gt,ct,Pt,Wt){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=lt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Wt!==void 0&&(qt=qt[Wt]),qt){Tt.bindFramebuffer(z.FRAMEBUFFER,qt);try{const Yt=B.texture,ie=Yt.format,ae=Yt.type;if(!Ct.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}at>=0&&at<=B.width-gt&&pt>=0&&pt<=B.height-ct&&z.readPixels(at,pt,gt,ct,ne.convert(ie),ne.convert(ae),Pt)}finally{const Yt=T!==null?lt.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(z.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(B,at,pt,gt,ct,Pt,Wt){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=lt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Wt!==void 0&&(qt=qt[Wt]),qt){const Yt=B.texture,ie=Yt.format,ae=Yt.type;if(!Ct.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(at>=0&&at<=B.width-gt&&pt>=0&&pt<=B.height-ct){Tt.bindFramebuffer(z.FRAMEBUFFER,qt);const Jt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.bufferData(z.PIXEL_PACK_BUFFER,Pt.byteLength,z.STREAM_READ),z.readPixels(at,pt,gt,ct,ne.convert(ie),ne.convert(ae),0);const ye=T!==null?lt.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(z.FRAMEBUFFER,ye);const we=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await gp(z,we,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pt),z.deleteBuffer(Jt),z.deleteSync(we),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(B,at=null,pt=0){B.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),at=arguments[0]||null,B=arguments[1]);const gt=Math.pow(2,-pt),ct=Math.floor(B.image.width*gt),Pt=Math.floor(B.image.height*gt),Wt=at!==null?at.x:0,qt=at!==null?at.y:0;W.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,pt,0,0,Wt,qt,ct,Pt),Tt.unbindTexture()};const Nn=z.createFramebuffer(),Ds=z.createFramebuffer();this.copyTextureToTexture=function(B,at,pt=null,gt=null,ct=0,Pt=null){B.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),gt=arguments[0]||null,B=arguments[1],at=arguments[2],Pt=arguments[3]||0,pt=null),Pt===null&&(ct!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=ct,ct=0):Pt=0);let Wt,qt,Yt,ie,ae,Jt,ye,we,$e;const De=B.isCompressedTexture?B.mipmaps[Pt]:B.image;if(pt!==null)Wt=pt.max.x-pt.min.x,qt=pt.max.y-pt.min.y,Yt=pt.isBox3?pt.max.z-pt.min.z:1,ie=pt.min.x,ae=pt.min.y,Jt=pt.isBox3?pt.min.z:0;else{const vn=Math.pow(2,-ct);Wt=Math.floor(De.width*vn),qt=Math.floor(De.height*vn),B.isDataArrayTexture?Yt=De.depth:B.isData3DTexture?Yt=Math.floor(De.depth*vn):Yt=1,ie=0,ae=0,Jt=0}gt!==null?(ye=gt.x,we=gt.y,$e=gt.z):(ye=0,we=0,$e=0);const Ae=ne.convert(at.format),te=ne.convert(at.type);let ze;at.isData3DTexture?(W.setTexture3D(at,0),ze=z.TEXTURE_3D):at.isDataArrayTexture||at.isCompressedArrayTexture?(W.setTexture2DArray(at,0),ze=z.TEXTURE_2D_ARRAY):(W.setTexture2D(at,0),ze=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,at.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,at.unpackAlignment);const Ce=z.getParameter(z.UNPACK_ROW_LENGTH),an=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Un=z.getParameter(z.UNPACK_SKIP_PIXELS),cn=z.getParameter(z.UNPACK_SKIP_ROWS),wi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,De.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,De.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ie),z.pixelStorei(z.UNPACK_SKIP_ROWS,ae),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Jt);const Ue=B.isDataArrayTexture||B.isData3DTexture,nn=at.isDataArrayTexture||at.isData3DTexture;if(B.isDepthTexture){const vn=lt.get(B),Qe=lt.get(at),hn=lt.get(vn.__renderTarget),yi=lt.get(Qe.__renderTarget);Tt.bindFramebuffer(z.READ_FRAMEBUFFER,hn.__webglFramebuffer),Tt.bindFramebuffer(z.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let kn=0;kn<Yt;kn++)Ue&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,lt.get(B).__webglTexture,ct,Jt+kn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,lt.get(at).__webglTexture,Pt,$e+kn)),z.blitFramebuffer(ie,ae,Wt,qt,ye,we,Wt,qt,z.DEPTH_BUFFER_BIT,z.NEAREST);Tt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ct!==0||B.isRenderTargetTexture||lt.has(B)){const vn=lt.get(B),Qe=lt.get(at);Tt.bindFramebuffer(z.READ_FRAMEBUFFER,Nn),Tt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ds);for(let hn=0;hn<Yt;hn++)Ue?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vn.__webglTexture,ct,Jt+hn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vn.__webglTexture,ct),nn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qe.__webglTexture,Pt,$e+hn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qe.__webglTexture,Pt),ct!==0?z.blitFramebuffer(ie,ae,Wt,qt,ye,we,Wt,qt,z.COLOR_BUFFER_BIT,z.NEAREST):nn?z.copyTexSubImage3D(ze,Pt,ye,we,$e+hn,ie,ae,Wt,qt):z.copyTexSubImage2D(ze,Pt,ye,we,ie,ae,Wt,qt);Tt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else nn?B.isDataTexture||B.isData3DTexture?z.texSubImage3D(ze,Pt,ye,we,$e,Wt,qt,Yt,Ae,te,De.data):at.isCompressedArrayTexture?z.compressedTexSubImage3D(ze,Pt,ye,we,$e,Wt,qt,Yt,Ae,De.data):z.texSubImage3D(ze,Pt,ye,we,$e,Wt,qt,Yt,Ae,te,De):B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pt,ye,we,Wt,qt,Ae,te,De.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pt,ye,we,De.width,De.height,Ae,De.data):z.texSubImage2D(z.TEXTURE_2D,Pt,ye,we,Wt,qt,Ae,te,De);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ce),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,an),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Un),z.pixelStorei(z.UNPACK_SKIP_ROWS,cn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,wi),Pt===0&&at.generateMipmaps&&z.generateMipmap(ze),Tt.unbindTexture()},this.copyTextureToTexture3D=function(B,at,pt=null,gt=null,ct=0){return B.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),pt=arguments[0]||null,gt=arguments[1]||null,B=arguments[2],at=arguments[3],ct=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(B,at,pt,gt,ct)},this.initRenderTarget=function(B){lt.get(B).__webglFramebuffer===void 0&&W.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?W.setTextureCube(B,0):B.isData3DTexture?W.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?W.setTexture2DArray(B,0):W.setTexture2D(B,0),Tt.unbindTexture()},this.resetState=function(){b=0,A=0,T=null,Tt.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}const Ch={type:"change"},hc={type:"start"},Hu={type:"end"},Pa=new Ko,Ph=new Ji,Q1=Math.cos(70*G.DEG2RAD),fn=new E,zn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yr=1e-6;class J1 extends p0{constructor(t,e=null){super(t,e),this.state=We.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:io.ROTATE,MIDDLE:io.DOLLY,RIGHT:io.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new rn,this._lastTargetPosition=new E,this._quat=new rn().setFromUnitVectors(t.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ih,this._sphericalDelta=new ih,this._scale=1,this._panOffset=new E,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new E,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ev.bind(this),this._onPointerDown=tv.bind(this),this._onPointerUp=nv.bind(this),this._onContextMenu=cv.bind(this),this._onMouseWheel=ov.bind(this),this._onKeyDown=av.bind(this),this._onTouchStart=rv.bind(this),this._onTouchMove=lv.bind(this),this._onMouseDown=iv.bind(this),this._onMouseMove=sv.bind(this),this._interceptControlDown=hv.bind(this),this._interceptControlUp=uv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ch),this.update(),this.state=We.NONE}update(t=null){const e=this.object.position;fn.copy(e).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=zn:n>Math.PI&&(n-=zn),s<-Math.PI?s+=zn:s>Math.PI&&(s-=zn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),e.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=fn.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new E(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Pa.origin.copy(this.object.position),Pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pa.direction))<Q1?this.object.lookAt(this.target):(Ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pa.intersectPlane(Ph,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Yr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yr||this._lastTargetPosition.distanceToSquared(this.target)>Yr?(this.dispatchEvent(Ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?zn/60*this.autoRotateSpeed*t:zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fn.setFromMatrixColumn(e,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,e){this.screenSpacePanning===!0?fn.setFromMatrixColumn(e,1):(fn.setFromMatrixColumn(e,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fn.copy(s).sub(this.target);let o=fn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,a=n.width,r=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/e.clientHeight),this._rotateUp(zn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/e.clientHeight),this._rotateUp(zn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ev(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hu),this.state=We.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function iv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case io.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=We.DOLLY;break;case io.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=We.ROTATE}break;case io.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(hc)}function sv(i){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ov(i){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(i.preventDefault(),this.dispatchEvent(hc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hu))}function av(i){this.enabled!==!1&&this._handleKeyDown(i)}function rv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=We.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=We.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(hc)}function lv(i){switch(this._trackPointer(i),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=We.NONE}}function cv(i){this.enabled!==!1&&i.preventDefault()}function hv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Wu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ao{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dv=new ac(-1,1,1,-1,0,1);class pv extends Zt{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const fv=new pv;class uc{constructor(t){this._mesh=new Oe(fv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class mv extends Ao{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qo.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new uc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Rh extends Ao{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class gv extends Ao{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class vv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new $t);this._width=n.width,this._height=n.height,e=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mv(Wu),this.copyPass.material.blending=Oi,this.clock=new Nu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Rh!==void 0&&(a instanceof Rh?n=!0:a instanceof gv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new $t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xv extends Ao{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const _v={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class _o extends Ao{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new $t(t.x,t.y):new $t(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(o,a,{type:Ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ii(o,a,{type:Ei});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new ii(o,a,{type:Ei});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),a=Math.round(a/2)}const r=_v;this.highPassUniforms=qo.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $t(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Wu;this.copyUniforms=qo.clone(h.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Go,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new $o,this.fsQuad=new uc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new $t(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=_o.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_o.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $t(.5,.5)},direction:{value:new $t(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new He({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}_o.BlurDirectionX=new $t(1,0);_o.BlurDirectionY=new $t(0,1);const Mv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class wv extends Ao{constructor(){super();const t=Mv;this.uniforms=qo.clone(t.uniforms),this.material=new Zp({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new uc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===Be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ou?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===au?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===lu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Vu(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Lh(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Mo(i){const t=Math.max(0,Math.min(1,(i-1.54)/.6949999999999998)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.8)/.2),2))),n=.056*Lh(t,.38,.24),s=-.042*Vu(.54,.88,t),o=.016*Lh(t,.78,.13);return(.228+n+s+o)*e}function rs(i){const t=Math.max(0,Math.min(1,(i-1.66)/.575)),e=.02*Math.pow(1-Vu(0,.42,t),1.6),n=-.01*Math.sin(t*Math.PI);return 1.578+e+n}const Ps=[{rootX:.024,rootY:.126,rootZ:-3.6,tipX:.34,tipY:.142,tipZ:-3.72},{rootX:.024,rootY:.126,rootZ:-3.78,tipX:.49,tipY:.148,tipZ:-3.96},{rootX:.024,rootY:.126,rootZ:-3.96,tipX:.55,tipY:.152,tipZ:-4.22},{rootX:.024,rootY:.126,rootZ:-4.14,tipX:.46,tipY:.146,tipZ:-4.45},{rootX:.024,rootY:.126,rootZ:-4.3,tipX:.27,tipY:.138,tipZ:-4.58}],Za=[{parentBone:"tail_1",rootX:.18,rootY:.75,rootZ:-.84,tipX:.44,tipY:.72,tipZ:-.98},{parentBone:"tail_2",rootX:.15,rootY:.67,rootZ:-1.1,tipX:.5,tipY:.63,tipZ:-1.27},{parentBone:"tail_2",rootX:.12,rootY:.59,rootZ:-1.34,tipX:.37,tipY:.56,tipZ:-1.52}],Jo=new E(.435,.03,.8999).normalize(),ta=new E(-.435,.03,.8999).normalize(),ja=.082;function Gu(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.342:.318),o=t?1.005:-.555,a=.04,r=t?.088:.082,l=[],c=[-.88,-.29,.29,.88];for(let h=0;h<4;h++){const u=c[h]+e*.055,d=h===1||h===2,m=(t?.126:.118)*(d?1:.86),v=(t?.066:.062)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.036,dirX:Math.sin(u)*.92,dirZ:Math.cos(u),toeLength:m,baseRadius:d?.044:.039,tipRadius:d?.029:.0255,clawLength:v})}return l}function yv(){const i=[{name:"root",parent:null,worldPos:[0,.86,.12]},{name:"pelvis",parent:"root",worldPos:[0,.83,-.54]},{name:"spine_1",parent:"root",worldPos:[0,.85,.14]},{name:"spine_2",parent:"spine_1",worldPos:[0,.91,.5]},{name:"chest",parent:"spine_2",worldPos:[0,.98,.86]},{name:"neck_1",parent:"chest",worldPos:[0,1.11,1.08]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.27,1.24]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.44,1.39]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.56,1.51]},{name:"head",parent:"neck_4",worldPos:[0,1.63,1.62]},{name:"eye_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eye_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidUpper_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidLower_L",parent:"head",worldPos:[.178,1.658,1.992]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"eyelidLower_R",parent:"head",worldPos:[-.178,1.658,1.992]},{name:"teethUpper",parent:"head",worldPos:[0,1.592,1.95]},{name:"jaw",parent:"head",worldPos:[0,1.588,1.66]},{name:"teethLower",parent:"jaw",worldPos:[0,1.568,1.95]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.568,1.74]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.568,1.85]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.568,1.96]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.566,2.07]},{name:"ear_L_1",parent:"head",worldPos:[.158,1.772,1.57]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.208,1.895,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.246,2.005,1.19]},{name:"ear_R_1",parent:"head",worldPos:[-.158,1.772,1.57]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.208,1.895,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.246,2.005,1.19]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.268,1.648,1.58]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.348,1.68,1.43]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.268,1.648,1.58]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.348,1.68,1.43]},{name:"cheekLower_L_1",parent:"head",worldPos:[.252,1.552,1.61]},{name:"cheekLower_L_2",parent:"cheekLower_L_1",worldPos:[.312,1.562,1.48]},{name:"cheekLower_R_1",parent:"head",worldPos:[-.252,1.552,1.61]},{name:"cheekLower_R_2",parent:"cheekLower_R_1",worldPos:[-.312,1.562,1.48]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.235,.94,.88]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.272,.8,.9]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.325,.47,.8]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.338,.155,.94]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.342,.044,1.045]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.222,.77,-.55]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.295,.46,-.34]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.312,.23,-.66]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.318,.044,-.515]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.23,1.11,.78]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.38,1.15,.76]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.96,1.18,.5]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.72,1.24,.96]}),[{mid:[n*1.62,1.16,.18],tip:[n*1.54,1.06,-.66]},{mid:[n*2.02,1.17,.24],tip:[n*2.24,1.07,-.62]},{mid:[n*2.38,1.19,.36],tip:[n*2.88,1.09,-.44]},{mid:[n*2.72,1.21,.52],tip:[n*3.44,1.12,-.16]},{mid:[n*3.04,1.23,.74],tip:[n*3.88,1.16,.24]},{mid:[n*3.22,1.25,.94],tip:[n*4.28,1.2,.76]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.78,-.82],[0,.68,-1.16],[0,.54,-1.54],[0,.39,-1.94],[0,.26,-2.35],[0,.17,-2.76],[0,.13,-3.18],[0,.126,-3.58],[0,.126,-3.98],[0,.126,-4.42]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;Za.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.024,.126,-3.96]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.024,.126,-3.96]}),Ps.forEach((e,n)=>{i.push({name:`tailFin_R_${n+1}`,parent:"tailFinHinge_R",worldPos:[-e.rootX,e.rootY,e.rootZ]})}),i.push({name:"prostheticCollar",parent:"tail_8",worldPos:[.024,.128,-3.54]},{name:"prostheticRod",parent:"tail_9",worldPos:[.036,.138,-3.96]}),Ps.forEach((e,n)=>{i.push({name:`tailFin_L_${n+1}`,parent:"tailFinHinge_L",worldPos:[e.rootX,e.rootY,e.rootZ]})}),i}function bv(){const i=yv(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new ec;c.name=l.name;const h=new E(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);if(!u||!d)throw new Error(`Missing parent bone ${l.parent} for ${l.name}`);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new ir(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}function Sv(i,t,e){let n=i*374761393+t*668265263+e*1442695041|0;n=(n^n>>>13)*1274126177;const s=((n^n>>>16)>>>0)/4294967296;let o=i*1103515245+t*12345+(e+7919)*2654435761|0;o=(o^o>>>15)*2246822519;const a=((o^o>>>13)>>>0)/4294967296;let r=i*73856093+t*19349663+(e+31337)*83492791|0;r=(r^r>>>14)*1597334677;const l=((r^r>>>15)>>>0)/4294967296;return[s,a,l]}function Ra(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function $r(i,t,e,n,s,o=1){const a=i*e,r=t*n,l=Math.floor(a),c=Math.floor(r);let h=1e9,u=1e9,d=.5,m=0,v=0,g=0;for(let w=-1;w<=1;w++)for(let _=-1;_<=1;_++){const x=l+_,y=c+w,b=(x%e+e)%e,A=(y%n+n)%n,[T,S,M]=Sv(b,A,s),P=x+.14+T*.72,C=y+.14+S*.72,R=(P-a)*o,F=C-r,I=Math.sqrt(R*R+F*F);I<h?(u=h,h=I,d=M,m=(T-.5)*Math.PI,v=R,g=F):I<u&&(u=I)}const f=Math.max(0,(u-h)*.5),p=v*Math.cos(m)+g*Math.sin(m);return{edgeDist:f,centerDist:h,cellTone:d,cellAngle:p}}let La=null;function Av(i=1024){if(La)return La;const t=i,e=new Float32Array(t*t),n=new Float32Array(t*t),s=new Float32Array(t*t),o=new Float32Array(t*t),a=new Float32Array(t*t),r=28,l=76;for(let D=0;D<t;D++){const O=D/t;for(let H=0;H<t;H++){const Z=H/t,q=D*t+H,$=$r(Z,O,r,r,101,1.08),X=$r(Z,O,l,l,409,1),V=Ra(.015,.24,$.edgeDist),et=Ra(.02,.28,X.edgeDist),it=Math.sin((Z*135+O*47+$.cellTone*6.28)*Math.PI*2)*Math.sin((Z*29-O*113+$.cellTone*3.14)*Math.PI*2),J=it>.86?-.055*(it-.86)*7:0,st=Math.max(-.08,Math.min(.08,$.cellAngle*.11))*V,Y=V*(.76+.14*$.cellTone)+et*.22*(1-V*.55)+st+J*V;e[q]=Math.max(0,Math.min(1,Y));const j=1-V,ut=.3+.09*(1-$.cellTone)+j*.52+(1-et)*.08-J*.4;n[q]=Math.max(.18,Math.min(.95,ut));const tt=.24+.76*Ra(0,.16,$.edgeDist)*(.85+.15*et);s[q]=Math.max(.15,Math.min(1,tt)),o[q]=$.cellTone*.7+X.cellTone*.3,a[q]=Math.max(0,Math.min(1,.32+.58*$.cellTone*V+.1*et))}}const c=document.createElement("canvas"),h=document.createElement("canvas"),u=document.createElement("canvas"),d=document.createElement("canvas"),m=document.createElement("canvas");for(const D of[c,h,u,d,m])D.width=t,D.height=t;const v=c.getContext("2d"),g=h.getContext("2d"),f=u.getContext("2d"),p=d.getContext("2d"),w=m.getContext("2d"),_=v.createImageData(t,t),x=g.createImageData(t,t),y=f.createImageData(t,t),b=p.createImageData(t,t),A=w.createImageData(t,t),T=3.6;for(let D=0;D<t;D++){const O=(D-1+t)%t,H=(D+1)%t;for(let Z=0;Z<t;Z++){const q=(Z-1+t)%t,$=(Z+1)%t,X=D*t+Z,V=X*4,et=e[O*t+q],it=e[O*t+Z],J=e[O*t+$],st=e[D*t+q],Y=e[D*t+$],j=e[H*t+q],ut=e[H*t+Z],tt=e[H*t+$],z=(J+3*Y+tt-(et+3*st+j))*T,_t=(j+3*ut+tt-(et+3*it+J))*T;let xt=-z,Ct=-_t,Tt=1;const Nt=1/Math.sqrt(xt*xt+Ct*Ct+Tt*Tt);xt*=Nt,Ct*=Nt,Tt*=Nt,x.data[V]=Math.round((xt*.5+.5)*255),x.data[V+1]=Math.round((Ct*.5+.5)*255),x.data[V+2]=Math.round((Tt*.5+.5)*255),x.data[V+3]=255;const lt=e[X],W=o[X],L=12+lt*15+W*8;_.data[V]=Math.round(L*.86),_.data[V+1]=Math.round(L*.96),_.data[V+2]=Math.round(L*1.14),_.data[V+3]=255;const rt=Math.round(n[X]*255);y.data[V]=rt,y.data[V+1]=rt,y.data[V+2]=rt,y.data[V+3]=255;const dt=Math.round(s[X]*255);b.data[V]=dt,b.data[V+1]=dt,b.data[V+2]=dt,b.data[V+3]=255;const yt=Math.round(a[X]*255);A.data[V]=yt,A.data[V+1]=yt,A.data[V+2]=yt,A.data[V+3]=255}}v.putImageData(_,0,0),g.putImageData(x,0,0),f.putImageData(y,0,0),p.putImageData(b,0,0),w.putImageData(A,0,0);const S=(D,O=!1,H=7)=>(D.wrapS=Ci,D.wrapT=Ci,D.repeat.set(H,H),D.anisotropy=8,D.colorSpace=O?_n:ni,D.needsUpdate=!0,D),M=512,P=document.createElement("canvas"),C=document.createElement("canvas");P.width=M,P.height=M,C.width=M,C.height=M;const R=P.getContext("2d"),F=C.getContext("2d"),I=R.createImageData(M,M),k=F.createImageData(M,M),N=new Float32Array(M*M);for(let D=0;D<M;D++){const O=D/M;for(let H=0;H<M;H++){const Z=H/M,q=D*M+H,$=Math.sin(O*92*Math.PI*2+Math.sin(Z*9*Math.PI*2)*1.4)*.25+Math.sin(O*210*Math.PI*2+Z*18)*.12,X=$r(Z,O,44,44,887,1),V=Ra(.08,.22,X.edgeDist)*(X.cellTone>.45?.55:.15);N[q]=.5+$*.35+V*.4}}for(let D=0;D<M;D++){const O=(D-1+M)%M,H=(D+1)%M;for(let Z=0;Z<M;Z++){const q=(Z-1+M)%M,$=(Z+1)%M,X=D*M+Z,V=X*4,et=(N[D*M+$]-N[D*M+q])*2.4,it=(N[H*M+Z]-N[O*M+Z])*2.4,J=1/Math.sqrt(et*et+it*it+1);I.data[V]=Math.round((-et*J*.5+.5)*255),I.data[V+1]=Math.round((-it*J*.5+.5)*255),I.data[V+2]=Math.round((J*.5+.5)*255),I.data[V+3]=255;const st=Math.round((.36+(1-N[X])*.28)*255);k.data[V]=st,k.data[V+1]=st,k.data[V+2]=st,k.data[V+3]=255}}return R.putImageData(I,0,0),F.putImageData(k,0,0),La={albedoMap:S(new Ln(c),!0,7),normalMap:S(new Ln(h),!1,7),roughnessMap:S(new Ln(u),!1,7),aoMap:S(new Ln(d),!1,7),iridescenceThicknessMap:S(new Ln(m),!1,7),prostheticPasteNormalMap:S(new Ln(P),!1,3),prostheticPasteRoughnessMap:S(new Ln(C),!1,3)},La}let ws=null;function Tv(i=1024){if(ws)return ws;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=8,n.data[u+1]=12,n.data[u+2]=11,n.data[u+3]=255;continue}const d=Math.sin(h*68+Math.sin(c*11)*.65),m=Math.sin(h*142-Math.cos(c*19)*.85),v=Math.sin(h*260+c*24),g=Math.sin(h*23+1.4)*Math.cos(c*15-h*5),f=d*.42+m*.33+v*.15+g*.25,p=Math.sin(c*42+d*.6)*.08,w=Math.exp(-Math.pow((c-.38)/.13,2)),_=Math.max(0,Math.min(1,(.94-c)/.16)),x=Math.max(0,Math.min(1,1-c*1.08)),y=.84+.3*f+p;let b=(38+166*x+66*w)*y*_,A=(146+106*x+34*w)*y*_,T=(64-24*x+22*(1-x))*y*_;if(g<-.58&&c>.25&&c<.78){const S=Math.min(1,(-g-.58)*2.2);b*=1-.42*S,A*=1-.34*S,T*=1-.28*S}n.data[u]=Math.max(0,Math.min(255,Math.round(b))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(T))),n.data[u+3]=255}}return e.putImageData(n,0,0),ws=new Ln(t),ws.colorSpace=_n,ws.anisotropy=8,ws.needsUpdate=!0,ws}function Ev(){const i=Tv(1024),t={uPupilDilation:{value:.76},uLightDir:{value:new E(.45,.65,.6).normalize()},uAlphaGlow:{value:0}},e=new fi({name:"Toothless_Iris_PBR",map:i,roughness:.55,metalness:0,envMapIntensity:.65});e.onBeforeCompile=s=>{s.uniforms.uPupilDilation=t.uPupilDilation,s.uniforms.uLightDir=t.uLightDir,s.uniforms.uAlphaGlow=t.uAlphaGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function qr(i,t,e){i.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uAlphaGlow=t.uAlphaGlow,n.uniforms.uBiolumGlow=t.uBiolumGlow,n.uniforms.uLightningCloak=t.uLightningCloak,n.uniforms.uSunDir=t.uSunDir,n.uniforms.uSunColor=t.uSunColor,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function Cv(){const i=Av(1024),t=Ev(),e={uTime:{value:0},uAlphaGlow:{value:.08},uBiolumGlow:{value:0},uLightningCloak:{value:0},uSunDir:{value:new E(-.55,.38,-.74).normalize()},uSunColor:{value:new Bt(16765601)}},n=new In({name:"Toothless_ObsidianScales_PBR",color:new Bt(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new $t(1.28,1.28),roughnessMap:i.roughnessMap,roughness:.88,aoMap:i.aoMap,aoMapIntensity:.88,metalness:.05,iridescence:.62,iridescenceIOR:1.4,iridescenceThicknessRange:[260,470],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.34,clearcoatRoughness:.3,sheen:.44,sheenRoughness:.48,sheenColor:new Bt(2178905),envMapIntensity:1.48});qr(n,e,!1);const s=new In({name:"Toothless_PatagiumMembrane_PBR",color:new Bt(15660282),map:i.albedoMap,normalMap:i.normalMap,normalScale:new $t(.65,.65),roughnessMap:i.roughnessMap,roughness:.96,aoMap:i.aoMap,aoMapIntensity:.65,metalness:.02,iridescence:.38,iridescenceIOR:1.36,iridescenceThicknessRange:[250,430],iridescenceThicknessMap:i.iridescenceThicknessMap,clearcoat:.18,clearcoatRoughness:.44,sheen:.42,sheenRoughness:.58,sheenColor:new Bt(1977920),side:on,envMapIntensity:1.25});qr(s,e,!0);const o=new In({name:"Toothless_ProstheticScalePaste_PBR",color:new Bt(1185308),normalMap:i.prostheticPasteNormalMap,normalScale:new $t(.95,.95),roughnessMap:i.prostheticPasteRoughnessMap,roughness:.46,metalness:.14,iridescence:.46,iridescenceIOR:1.4,iridescenceThicknessRange:[270,440],clearcoat:.42,clearcoatRoughness:.28,side:on,envMapIntensity:1.35});qr(o,e,!1);const a=new fi({name:"Toothless_VikingBronze_PBR",color:new Bt(12094282),metalness:.88,roughness:.33,envMapIntensity:1.45}),r=new fi({name:"Toothless_ForgedIron_PBR",color:new Bt(2632754),metalness:.82,roughness:.42,envMapIntensity:1.3}),l=new In({name:"Toothless_ObsidianClaws_PBR",color:new Bt(1316636),roughness:.24,metalness:.08,clearcoat:.65,clearcoatRoughness:.2,envMapIntensity:1.5}),c=new In({name:"Toothless_RetractableTeeth_PBR",color:new Bt(15394524),roughness:.16,metalness:0,clearcoat:.85,clearcoatRoughness:.08,sheen:.2,sheenColor:new Bt(14018293),envMapIntensity:1.2}),h=new In({name:"Toothless_OralGums_PBR",color:new Bt(2628390),normalMap:i.normalMap,normalScale:new $t(.58,.58),roughnessMap:i.roughnessMap,roughness:.42,metalness:0,clearcoat:.68,clearcoatRoughness:.18,side:on});h.onBeforeCompile=d=>{d.uniforms.uAlphaGlow=e.uAlphaGlow,d.uniforms.uTime=e.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
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
        }`)};const u=new In({name:"Toothless_Tongue_PBR",color:new Bt(7880269),normalMap:i.normalMap,normalScale:new $t(.68,.68),roughnessMap:i.roughnessMap,roughness:.36,metalness:0,clearcoat:.8,clearcoatRoughness:.14,sheen:.38,sheenColor:new Bt(10904693)});return{maps:i,skinMaterial:n,wingMembraneMaterial:s,prostheticPasteMaterial:o,prostheticBronzeMaterial:a,prostheticIronMaterial:r,clawMaterial:l,teethMaterial:c,oralGumMaterial:h,tongueMaterial:u,eyeMaterials:t,uniforms:e}}function Ke(i){let t=0,e=0;for(const m of i){const v=m.getAttribute("position");t+=v.count;const g=m.getIndex();e+=g?g.count:v.count}const n=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Float32Array(t*4),r=new Uint16Array(t*4),l=new Float32Array(t*4),c=t>65535?new Uint32Array(e):new Uint16Array(e);let h=0,u=0;for(const m of i){const v=m.getAttribute("position"),g=m.getAttribute("normal"),f=m.getAttribute("uv"),p=m.getAttribute("aAnatomyData"),w=m.getAttribute("skinIndex"),_=m.getAttribute("skinWeight"),x=v.count;if(n.set(v.array,h*3),g&&s.set(g.array,h*3),f&&o.set(f.array,h*2),p)a.set(p.array,h*4);else for(let b=0;b<x;b++)a[(h+b)*4]=.35;if(w&&_)for(let b=0;b<x*4;b++)r[h*4+b]=w.array[b],l[h*4+b]=_.array[b];const y=m.getIndex();if(y){for(let b=0;b<y.count;b++)c[u+b]=y.getX(b)+h;u+=y.count}else{for(let b=0;b<x;b++)c[u+b]=h+b;u+=x}h+=x}const d=new Zt;return d.setAttribute("position",new Q(n,3)),d.setAttribute("normal",new Q(s,3)),d.setAttribute("uv",new Q(o,2)),d.setAttribute("uv1",new Q(o,2)),d.setAttribute("aAnatomyData",new Q(a,4)),d.setAttribute("skinIndex",new Ee(r,4)),d.setAttribute("skinWeight",new Kt(l,4)),d.setIndex(new Q(c,1)),d.computeBoundingSphere(),d.computeBoundingBox(),d}function Xe(i,t){const e=t[0]+t[1]+t[2]+t[3];if(e<=1e-6)return{indices:[i[0],0,0,0],weights:[1,0,0,0]};const n=1/e;return{indices:i,weights:[t[0]*n,t[1]*n,t[2]*n,t[3]*n]}}function _i(i,t,e,n=3.2){const s=[];for(let a=0;a<t.length;a++){const r=e[a];let l=i.distanceTo(r);if(a<t.length-1){const h=e[a+1],u=new E().subVectors(h,r),d=u.lengthSq();if(d>1e-6){const m=Math.max(0,Math.min(1,new E().subVectors(i,r).dot(u)/d)),v=new E().copy(r).addScaledVector(u,m);l=Math.min(l,i.distanceTo(v)+m*.08)}}const c=1/Math.pow(Math.max(.035,l),n);s.push({idx:t[a],w:c})}s.sort((a,r)=>r.w-a.w);const o=s.slice(0,4);for(;o.length<4;)o.push({idx:0,w:0});return Xe([o[0].idx,o[1].idx,o[2].idx,o[3].idx],[o[0].w,o[1].w,o[2].w,o[3].w])}function ve(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function ge(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Ia(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function Hl(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let v=0;v<e-1;v++)n[v]=(t[v+1][1]-t[v][1])/(t[v+1][0]-t[v][0]);s[0]=n[0],s[e-1]=n[e-2];for(let v=1;v<e-1;v++)n[v-1]*n[v]<=0?s[v]=0:s[v]=(n[v-1]+n[v])*.5;for(let v=0;v<e-1;v++)if(Math.abs(n[v])<1e-8)s[v]=0,s[v+1]=0;else{const g=s[v]/n[v],f=s[v+1]/n[v],p=Math.hypot(g,f);if(p>3){const w=3/p;s[v]=w*g*n[v],s[v+1]=w*f*n[v]}}let o=0;for(let v=0;v<e-1;v++)if(i>=t[v][0]&&i<=t[v+1][0]){o=v;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r,h=2*c-3*l+1,u=c-2*l+r,d=-2*c+3*l,m=c-l;return h*t[o][1]+u*a*s[o]+d*t[o+1][1]+m*a*s[o+1]}const Pv=[[-4.55,.018],[-3.95,.052],[-3.05,.095],[-2.1,.16],[-1.35,.228],[-.88,.282],[-.54,.334],[-.1,.328],[.42,.378],[.82,.394],[1.08,.304],[1.32,.25],[1.54,.228]],Xu=[[-4.55,.016],[-3.95,.044],[-3.05,.084],[-2.1,.14],[-1.35,.194],[-.88,.236],[-.54,.274],[-.1,.272],[.42,.306],[.82,.312],[1.08,.246],[1.32,.208],[1.54,.192]],Rv=[new E(0,.126,-4.55),new E(0,.126,-4.05),new E(0,.126,-3.55),new E(0,.13,-3.05),new E(0,.19,-2.5),new E(0,.35,-1.92),new E(0,.56,-1.42),new E(0,.74,-.92),new E(0,.81,-.54),new E(0,.82,-.1),new E(0,.87,.4),new E(0,.94,.8),new E(0,1.09,1.06),new E(0,1.31,1.28),new E(0,1.53,1.48),new E(0,1.635,1.66),new E(0,1.654,1.86),new E(0,1.632,2.05),new E(0,1.586,2.235)];let Zr=null;function Yu(){return Zr||(Zr=new si(Rv,!1,"centripetal",.5)),Zr}function jr(i){const t=Yu();let e=0,n=1;for(let g=0;g<22;g++){const f=(e+n)*.5;t.getPointAt(f).z<i?e=f:n=f}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new E(0,1,0),l=r.clone().addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=ve(-4.55,-4.46,c);let u=Hl(c,Xu)*h;const d=ve(1.46,1.6,c);if(d>0){const g=Math.max(0,Math.min(1,(c-1.54)/.6949999999999998)),f=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(g-.8)/.2),2))),p=(.192+.014*ge(g,.35,.22)-.068*ve(.34,.94,g))*f;u=G.lerp(u,p,d)}let m=u;return c>-.45&&c<1.18&&(m+=.01*ge(c,.35,.55)),{point:o.clone().addScaledVector(l,m),tangent:a,up:l}}function $u(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.64)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.38){const r=ve(1.42,1.64,i.z),l=1-r,c=ve(1.36,1.56,i.z);return Xe([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return _i(i,e,n,3.5)}function Lv(i,t){const e=[];return e.push(Iv(i,t)),e.push(...Fv(i,t)),e.push(...Dv(i,t)),e.push(...Nv(i,t)),Ke(e)}function Iv(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=Yu(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(y=>i.boneIndexMap.get(y)),r=o.map(y=>i.bindWorldPositions.get(y)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),m=new Float32Array(l*4),v=new E(0,1,0),g=i.bindWorldPositions.get("eye_L"),f=i.bindWorldPositions.get("eye_R"),p=[{center:g,fwd:Jo,up:new E(-.16,.985,.06).normalize()},{center:f,fwd:ta,up:new E(.16,.985,.06).normalize()}].map(y=>{const b=new E().crossVectors(y.up,y.fwd).normalize(),A=new E().crossVectors(y.fwd,b).normalize();return{center:y.center,fwd:y.fwd,right:b,up:A}});for(let y=0;y<=e;y++){const b=y/e,A=1-Math.pow(1-b,1.85),T=s.getPointAt(A),S=s.getTangentAt(A).normalize(),M=new E().copy(v).addScaledVector(S,-v.dot(S)).normalize(),P=new E().crossVectors(M,S).normalize(),C=T.z,R=ve(-4.55,-4.46,C),F=Hl(C,Pv)*R+.008*ge(C,-3.96,.36),I=Hl(C,Xu)*R,k=ve(1.46,1.6,C);let N=F,D=I;if(k>0){const O=Math.max(0,Math.min(1,(C-1.54)/.6949999999999998)),H=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(O-.8)/.2),2))),Z=Mo(C),q=(.192+.014*ge(O,.35,.22)-.068*ve(.34,.94,O))*H;N=G.lerp(F,Z,k),D=G.lerp(I,q,k)}for(let O=0;O<=n;O++){const H=O/n,Z=H*Math.PI*2,q=Math.sin(Z),$=Math.cos(Z);let X=N*q,V=D*$,et=.28,it=0,J=0;if(C>-.85&&C<1.18){const tt=ge(C,.76,.3),z=ge(Math.abs(q),.48,.24)*ve(-.05,-.88,$),_t=ge(q,0,.11)*ve(-.55,-.98,$)*tt;V-=.026*tt*z-.012*_t,X+=Math.sign(q)*.016*tt*z;const xt=ge(C,.88,.22)*ge(Math.abs(q),.72,.18)*ve(-.08,-.78,$),Ct=ge(C,-.54,.24)*ge(Math.abs(q),.7,.19)*ve(-.05,-.78,$);V-=.032*xt+.028*Ct;const Tt=ge(C,.38,.28)*ge(Math.abs(q),.92,.16)*ge($,-.12,.35);X+=Math.sign(q)*Math.sin(C*26)*.003*Tt,$>.75&&C>-.45&&(V+=.01*Math.pow(($-.75)/.25,2)*ge(C,.35,.55))}if(C>=1&&C<1.56){const tt=ve(1,1.18,C)*(1-ve(1.44,1.56,C)),z=ge(Math.abs(q),.62,.18)*ge($,-.35,.3);X+=Math.sign(q)*.008*z*tt}if(C>=1.5){const tt=ge(C,1.75,.1)*ge(Math.abs(q),.52,.2)*ve(.35,.9,$);V+=.014*tt,X+=Math.sign(q)*.01*tt;const z=ge(C,1.985,.105),_t=ge(Math.abs(q),.64,.17)*ve(.16,.72,$),xt=1+.22*Math.max(0,Math.sin((C-1.88)/.21*Math.PI*6));V+=.024*z*_t*xt,X+=Math.sign(q)*.012*z*_t;const Ct=ge(C,1.76,.11)*ge(Math.abs(q),.92,.16)*ge($,-.18,.26),Tt=ge(C,1.9,.13)*ge(Math.abs(q),.88,.17)*ge($,-.1,.24);if(X+=Math.sign(q)*(.018*Ct+.015*Tt),$>.86&&C>1.58&&C<1.95){const dt=Math.pow(($-.86)/.14,2),yt=Math.max(0,Math.sin((C-1.58)/.37*Math.PI*6)),Mt=-.003*ge(Math.abs(q),.16,.07);V+=(.008+.015*Math.pow(yt,1.5))*dt+Mt,J=Math.max(J,.75*dt*ve(1.58,1.94,C))}if(C>2.15&&$>-.35&&$<.35){const dt=ge(q,0,.08)*ve(2.15,2.225,C);V-=.0025*dt}const Nt=ge(q,0,.26)*ve(.42,.96,$)*ve(1.66,1.98,C),lt=ve(1.98,2.19,C)*ve(-.35,.85,$),W=z*_t*1.45,L=ge($,-.2,.2)*ve(1.74,2.18,C);et=.38+1.56*Math.min(1,Math.max(Nt,lt,W,L*.88))}const st=new E().copy(T).addScaledVector(P,X).addScaledVector(M,V),Y=ve(1.63,1.72,C);if(Y>0&&$<.04){const tt=rs(C),z=Math.max(ve(.56,.9,Math.abs(q)),ve(2.12,2.21,C)),_t=tt-.0045,xt=tt+.044*(1-ve(2.08,2.22,C)),Ct=G.lerp(xt,_t,z),Tt=Y*ve(.04,-.26,$);st.y=G.lerp(st.y,Ct,Tt)}if(C>1.8&&C<2.16)for(const tt of p){if(Math.sign(st.x)!==Math.sign(tt.center.x))continue;const z=new E().subVectors(st,tt.center),_t=z.dot(tt.fwd),xt=z.dot(tt.right),Ct=z.dot(tt.up);if(_t>0){const Tt=Math.exp(-.5*(Math.pow(xt/.058,2)+Math.pow(Ct/.05,2)))*ve(0,.035,_t),Nt=ja-.024,lt=G.lerp(_t,Nt,Tt);_t>lt&&(st.addScaledVector(tt.fwd,lt-_t),et=Math.max(et,.78*Tt))}}if(C>2.1&&C<2.23&&st.y>1.575){const tt=Ia(st.x,st.z,.066,2.182,.021,.024)*ge(st.y,1.606,.017),z=Ia(st.x,st.z,-.066,2.182,.021,.024)*ge(st.y,1.606,.017),_t=Math.max(tt,z),xt=Math.max(Ia(st.x,st.z,.068,2.176,.025,.026),Ia(st.x,st.z,-.068,2.176,.025,.026))*ge(st.y,1.622,.012);xt>.05&&(st.y+=.0035*xt,st.x+=Math.sign(st.x)*.0025*xt),_t>.05&&(st.x*=1-.16*_t,st.y-=.011*_t,st.z-=.014*_t,J=Math.max(J,Math.min(1,_t*1.35)))}if(C>1.76&&C<2.02&&st.y>1.68){const tt=Math.abs(st.x+.14-(st.z-1.89)*.4),z=ge(st.z,1.89,.052)*ve(.015,.002,tt),_t=Math.abs(st.x-.12+(st.z-1.84)*.34),xt=ge(st.z,1.84,.034)*ve(.012,.002,_t);it=Math.min(1,Math.max(z,xt*.85)),it>.01&&(st.y-=.0035*it)}$>.92&&C<1.56&&(J=Math.max(J,($-.92)/.08*.55),et=Math.max(et,.65*(($-.92)/.08)));const j=y*(n+1)+O;c[j*3]=st.x,c[j*3+1]=st.y,c[j*3+2]=st.z,h[j*2]=A*5.2,h[j*2+1]=H*1.6,u[j*4]=et,u[j*4+1]=it,u[j*4+2]=J,u[j*4+3]=0;const ut=$u(st,i,a,r);d.set(ut.indices,j*4),m.set(ut.weights,j*4)}}const w=new Uint32Array(e*n*6);let _=0;for(let y=0;y<e;y++)for(let b=0;b<n;b++){const A=y*(n+1)+b,T=(y+1)*(n+1)+b,S=(y+1)*(n+1)+(b+1),M=y*(n+1)+(b+1);w[_++]=A,w[_++]=T,w[_++]=S,w[_++]=A,w[_++]=S,w[_++]=M}const x=new Zt;return x.setAttribute("position",new Q(c,3)),x.setAttribute("uv",new Q(h,2)),x.setAttribute("aAnatomyData",new Q(u,4)),x.setAttribute("skinIndex",new Ee(d,4)),x.setAttribute("skinWeight",new Kt(m,4)),x.setIndex(new Q(w,1)),x.computeVertexNormals(),or(x,e,n),x}function Fv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.272,2.09,1.06],maxWidth:.074,maxThick:.027,rollAngle:l*-.46}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.395,1.692,1.33],maxWidth:.038,maxThick:.017,rollAngle:l*-.95}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],tipPos:[l*.348,1.565,1.39],maxWidth:.03,maxThick:.015,rollAngle:l*-1.15}),s.push({boneNames:[`cheekLower_${r}_1`,`cheekLower_${r}_2`],customStart:[l*.218,1.498,1.62],tipPos:[l*.274,1.488,1.48],maxWidth:.021,maxThick:.012,rollAngle:l*-1.28})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.customStart?[new E(...r.customStart),new E(...r.tipPos).lerp(new E(...r.customStart),.5)]:r.boneNames.map(T=>i.bindWorldPositions.get(T).clone()),c=new E().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.052),...l,new E(...r.tipPos)],d=new si(u),m=r.boneNames.map(T=>i.boneIndexMap.get(T)),v=r.boneNames.map(T=>i.bindWorldPositions.get(T)),g=(o+1)*(a+1),f=new Float32Array(g*3),p=new Float32Array(g*2),w=new Float32Array(g*4),_=new Uint16Array(g*4),x=new Float32Array(g*4);for(let T=0;T<=o;T++){const M=1-T/o,P=d.getPointAt(M),C=d.getTangentAt(M).negate().normalize(),R=new E(Math.sin(r.rollAngle),Math.cos(r.rollAngle),0).normalize(),F=R.clone().addScaledVector(C,-R.dot(C)).normalize(),I=new E().crossVectors(F,C).normalize(),k=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.76)/.24),2))),N=.72+.44*Math.sin(Math.min(1,M*1.15)*Math.PI),D=1+.34*Math.pow(Math.max(0,1-M*4.2),2),O=r.maxWidth*N*k*D,H=r.maxThick*(.85+.25*(1-M))*k*D;for(let Z=0;Z<=a;Z++){const q=Z/a,$=q*Math.PI*2,X=new E().copy(P).addScaledVector(I,O*Math.sin($)).addScaledVector(F,H*Math.cos($)),V=T*(a+1)+Z;f[V*3]=X.x,f[V*3+1]=X.y,f[V*3+2]=X.z,p[V*2]=M*.85,p[V*2+1]=q*.65,w[V*4]=.45+1.35*ve(.32,.9,M);const et=_i(X,m,v,3.6),it=ve(.28,0,M),J=Xe([n,et.indices[0],et.indices[1],et.indices[2]],[it,et.weights[0]*(1-it),et.weights[1]*(1-it),et.weights[2]*(1-it)]);_.set(J.indices,V*4),x.set(J.weights,V*4)}}const y=new Uint16Array(o*a*6);let b=0;for(let T=0;T<o;T++)for(let S=0;S<a;S++){const M=T*(a+1)+S,P=(T+1)*(a+1)+S,C=(T+1)*(a+1)+(S+1),R=T*(a+1)+(S+1);y[b++]=M,y[b++]=P,y[b++]=C,y[b++]=M,y[b++]=C,y[b++]=R}const A=new Zt;A.setAttribute("position",new Q(f,3)),A.setAttribute("uv",new Q(p,2)),A.setAttribute("aAnatomyData",new Q(w,4)),A.setAttribute("skinIndex",new Ee(_,4)),A.setAttribute("skinWeight",new Kt(x,4)),A.setIndex(new Q(y,1)),A.computeVertexNormals(),or(A,o,a),e.push(A)}return e}function Dv(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?Jo:ta).clone(),d=new E(r*-.16,.985,.06).normalize(),m=new E().crossVectors(u,d).normalize(),v=new E().crossVectors(m,u).normalize();for(const g of[!0,!1]){const f=g?c:h,p=(s+1)*(o+1),w=new Float32Array(p*3),_=new Float32Array(p*2),x=new Float32Array(p*4),y=new Uint16Array(p*4),b=new Float32Array(p*4),A=ja+.0018;for(let P=0;P<=o;P++){const C=P/o,R=ge(C,.06,.08);for(let F=0;F<=s;F++){const I=F/s,k=G.degToRad(G.lerp(-65,65,I)),N=Math.sin(I*Math.PI),D=g?44*N:-40*N,O=g?78:-74,H=G.degToRad(G.lerp(D,O,C)),Z=Math.max(0,Math.sin(I*Math.PI*22))*.0014*R,q=A+.0018*R+Z-.0028*C,$=new E().addScaledVector(u,Math.cos(H)*Math.cos(k)).addScaledVector(m,Math.cos(H)*Math.sin(k)).addScaledVector(v,Math.sin(H)).normalize(),X=new E().copy(l).addScaledVector($,q),V=P*(s+1)+F;w[V*3]=X.x,w[V*3+1]=X.y,w[V*3+2]=X.z,_[V*2]=I*.35,_[V*2+1]=C*.18,x[V*4]=.85;const et=N*(1-ve(.48,1,C)),it=Math.max(0,Math.min(1,et));y.set([f,n,0,0],V*4),b.set([it,1-it,0,0],V*4)}}const T=new Uint16Array(s*o*6);let S=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,F=(P+1)*(s+1)+C,I=(P+1)*(s+1)+(C+1),k=P*(s+1)+(C+1);g?(T[S++]=R,T[S++]=I,T[S++]=F,T[S++]=R,T[S++]=k,T[S++]=I):(T[S++]=R,T[S++]=F,T[S++]=I,T[S++]=R,T[S++]=I,T[S++]=k)}const M=new Zt;M.setAttribute("position",new Q(w,3)),M.setAttribute("uv",new Q(_,2)),M.setAttribute("aAnatomyData",new Q(x,4)),M.setAttribute("skinIndex",new Ee(y,4)),M.setAttribute("skinWeight",new Kt(b,4)),M.setIndex(new Q(T,1)),M.computeVertexNormals(),e.push(M)}}return e}function Nv(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new E(a*.16,.96,.86),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new E(a*.342,.056,1),new E(a*.342,.032,1.078)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(Fh(i,r,l,!0,o,n,s)),e.push(...Ih(i,o,!0,t));const c=[new E(a*.15,.8,-.54),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new E(a*.318,.054,-.562),new E(a*.318,.032,-.488)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(Fh(i,c,h,!1,o,n,s)),e.push(...Ih(i,o,!1,t))}return e}function Ih(i,t,e,n){const s=[],o=Gu(t,e),a=n===0?16:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4),f=l.dirX,p=l.dirZ,w=Math.hypot(f,p),_=f/w,x=p/w,y=x,b=-_;for(let M=0;M<=a;M++){const P=M/a,C=G.lerp(-.38,1,P),R=Math.max(0,C),F=Math.max(0,-C)*.042,I=Math.sin(R*Math.PI)*.011-.009*R*R+F,k=l.rootX+_*l.toeLength*C,N=l.rootZ+x*l.toeLength*C,D=l.rootY+I,O=1+.44*Math.pow(1-ve(-.38,.18,C),1.5),H=1+.15*ge(R,.4,.18)+.14*ge(R,.84,.1),Z=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(P-.89)/.11),2))),q=G.lerp(l.baseRadius,l.tipRadius,R)*O*H*Z;for(let $=0;$<=r;$++){const X=$/r,V=X*Math.PI*2,et=Math.sin(V),it=Math.cos(V),J=it>.15?Math.pow(Math.max(0,Math.sin(R*Math.PI*4.5)),.75)*.0042*((it-.15)/.85):0,st=1.12+.24*(1-ve(-.35,.22,C)),Y=k+y*et*q*st,j=N+b*et*q*st;let ut=D+it*(q*.86+J);ut<.003&&(ut=.003+Math.max(0,ut)*.12);const tt=M*(r+1)+$;u[tt*3]=Y,u[tt*3+1]=ut,u[tt*3+2]=j,d[tt*2]=P*.42,d[tt*2+1]=X*.36,m[tt*4]=it>.05?1.95:.38,v.set([c,0,0,0],tt*4),g.set([1,0,0,0],tt*4)}}const A=new Uint16Array(a*r*6);let T=0;for(let M=0;M<a;M++)for(let P=0;P<r;P++){const C=M*(r+1)+P,R=(M+1)*(r+1)+P,F=(M+1)*(r+1)+(P+1),I=M*(r+1)+(P+1);A[T++]=C,A[T++]=R,A[T++]=F,A[T++]=C,A[T++]=F,A[T++]=I}const S=new Zt;S.setAttribute("position",new Q(u,3)),S.setAttribute("uv",new Q(d,2)),S.setAttribute("aAnatomyData",new Q(m,4)),S.setAttribute("skinIndex",new Ee(v,4)),S.setAttribute("skinWeight",new Kt(g,4)),S.setIndex(new Q(A,1)),S.computeVertexNormals(),or(S,a,r),s.push(S)}return s}function Fh(i,t,e,n,s,o,a){const r=s==="L"?1:-1,l=new si(t,!1,"centripetal",.5),c=e.map(y=>i.boneIndexMap.get(y)),h=e.map(y=>i.bindWorldPositions.get(y)),u=(o+1)*(a+1),d=new Float32Array(u*3),m=new Float32Array(u*2),v=new Float32Array(u*4),g=new Uint16Array(u*4),f=new Float32Array(u*4),p=new E(0,0,1);for(let y=0;y<=o;y++){const A=1-y/o,T=l.getPointAt(A),S=l.getTangentAt(A).negate().normalize(),M=p.clone().addScaledVector(S,-p.dot(S)).normalize(),P=new E().crossVectors(M,S).normalize(),C=.52+.48*ve(0,.34,A),R=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(A-.91)/.09),2)))*C;let F=.095,I=.11;if(n){const D=ge(A,.54,.16)*.028,O=ge(A,.86,.12)*.088;F=(.09+D+O)*R,I=(.106+ge(A,.26,.18)*.036+D+O*.86)*R}else{const D=ge(A,.52,.15)*.032,O=ge(A,.86,.12)*.082;F=(.088+D+O)*R,I=(.11+ge(A,.26,.19)*.046+D*1.08+O*.84)*R}const k=ve(.7,.94,A),N=1-ve(.08,.42,A);for(let D=0;D<=a;D++){const O=D/a,H=O*Math.PI*2,Z=Math.sin(H),q=Math.cos(H),$=Z*r>0?Math.abs(Z):0,X=1-.28*N*$;let V=1;if(k>.01&&q>-.35){const L=Math.atan2(Z,Math.max(.05,q+.25)),rt=Math.cos(L*3.6);V+=.16*k*Math.max(-.12,rt)*ve(-.35,.45,q)}const et=ve(-.82,.78,q+.35*$),it=Math.pow(ve(.08,.94,A),1.42),J=Math.pow(ve(.56,.95,A),1.75),st=A*22,Y=O*14+Math.floor(st)*.5,j=Math.max(0,Math.sin(st*Math.PI))*Math.max(0,Math.sin(Y*Math.PI))*.0018*et*J,ut=F*X*V+j,tt=I*V+j,z=new E().copy(T).addScaledVector(P,ut*Z).addScaledVector(M,tt*q);A>.7&&z.y<.004&&(z.y=.002+Math.max(0,z.y)*.14);const _t=y*(a+1)+D;d[_t*3]=z.x,d[_t*3+1]=z.y,d[_t*3+2]=z.z,m[_t*2]=A*1.35,m[_t*2+1]=O*.85,v[_t*4]=.34+1.48*et*it;const xt=_i(z,c,h,3.5),Ct=ve(.24,0,A)*.72,Tt=c[c.length-1],Nt=ve(.74,.88,A),lt=(1-Ct)*(1-Nt),W=Xe([Tt,c[0],xt.indices[0],xt.indices[1]],[Nt,Ct*(1-Nt),xt.weights[0]*lt,xt.weights[1]*lt]);g.set(W.indices,_t*4),f.set(W.weights,_t*4)}}const w=new Uint16Array(o*a*6);let _=0;for(let y=0;y<o;y++)for(let b=0;b<a;b++){const A=y*(a+1)+b,T=(y+1)*(a+1)+b,S=(y+1)*(a+1)+(b+1),M=y*(a+1)+(b+1);w[_++]=A,w[_++]=T,w[_++]=S,w[_++]=A,w[_++]=S,w[_++]=M}const x=new Zt;return x.setAttribute("position",new Q(d,3)),x.setAttribute("uv",new Q(m,2)),x.setAttribute("aAnatomyData",new Q(v,4)),x.setAttribute("skinIndex",new Ee(g,4)),x.setAttribute("skinWeight",new Kt(f,4)),x.setIndex(new Q(w,1)),x.computeVertexNormals(),or(x,o,a),x}function or(i,t,e){const n=i.getAttribute("normal"),s=new E,o=new E;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function Uv(i,t){return{jawSkinGeometry:Ke([kv(i,t),...zv(i,t)]),oralGumsGeometry:Bv(i,t),teethGeometry:Ov(i,t),tongueGeometry:Hv(i,t),irisGeometry:Dh(i,t,!1),corneaGeometry:Dh(i,t,!0),clawsGeometry:Wv(i,t)}}function Yn(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function kv(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),m=new Float32Array(l*4);for(let p=0;p<=e;p++){const w=p/e,_=G.lerp(1.55,2.226,w),x=Mo(_),y=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(w-.88)/.12),2))),b=Math.max(.002,(x-.0035*Yn(1.66,1.76,_))*y),A=rs(_),T=.028*(1-Yn(1.55,1.7,_)),S=A+.0035+T,M=(.088-.034*w)*y;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,F=Math.sin(R),I=Math.cos(R),k=Math.exp(-Math.pow((w-.28)/.22,2))*.011,N=Math.exp(-Math.pow((w-.3)/.16,2))*Math.abs(F)*.01,D=(b+N)*F,O=-.022*I*(1-Math.pow(F,2))*Yn(1.68,1.78,_),H=I>=0?S+O:S+(M+k)*I;let Z=0,q=H;if(_>1.98&&_<2.18&&I<-.55){const j=Math.abs(D-.024-(_-2.08)*.25);j<.013&&(Z=1-j/.013,q+=.0022*Z)}const $=p*(n+1)+P;c[$*3]=D,c[$*3+1]=q,c[$*3+2]=_,h[$*2]=w*.95,h[$*2+1]=C*.85;const X=Math.exp(-Math.pow(I/.35,2));u[$*4]=Math.min(1,.38+.56*Math.max(X,w>.7?(w-.7)*3:0)),u[$*4+1]=Z,u[$*4+2]=0,u[$*4+3]=0;const V=Yn(1.62,1.71,_),et=1-V,it=Yn(1.42,1.64,_),J=Yn(1.36,1.56,_),st=et*(1-it),Y=Xe([s,o,a,r],[V,et*it,st*(.52+.48*J),st*(.48-.48*J)]);d.set(Y.indices,$*4),m.set(Y.weights,$*4)}}const v=new Uint16Array(e*n*6);let g=0;for(let p=0;p<e;p++)for(let w=0;w<n;w++){const _=p*(n+1)+w,x=(p+1)*(n+1)+w,y=(p+1)*(n+1)+(w+1),b=p*(n+1)+(w+1);v[g++]=_,v[g++]=x,v[g++]=y,v[g++]=_,v[g++]=y,v[g++]=b}const f=new Zt;return f.setAttribute("position",new Q(c,3)),f.setAttribute("uv",new Q(h,2)),f.setAttribute("aAnatomyData",new Q(u,4)),f.setAttribute("skinIndex",new Ee(d,4)),f.setAttribute("skinWeight",new Kt(m,4)),f.setIndex(new Q(v,1)),f.computeVertexNormals(),f}function zv(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=t===0?14:8,o=t===0?12:8,a=[];for(const r of["L","R"]){const l=r==="L"?1:-1,c=(s+1)*(o+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let w=0;w<=o;w++){const _=w/o;for(let x=0;x<=s;x++){const y=x/s,b=G.lerp(1.65,1.9,y),A=rs(b),T=Mo(b)-.008,S=-.016*Math.sin(_*Math.PI)*Math.pow(y,1.3),M=.026*(1-.55*y),P=A+(_-.5)*2*M,C=l*(T-.006*y+S*.35),R=w*(s+1)+x;h[R*3]=C,h[R*3+1]=P,h[R*3+2]=b+S,u[R*2]=y*.3,u[R*2+1]=_*.3,d[R*4]=.35;const F=Yn(0,1,_),I=1-F;m.set([e,n,0,0],R*4),v.set([F,I,0,0],R*4)}}const g=new Uint16Array(s*o*6);let f=0;for(let w=0;w<o;w++)for(let _=0;_<s;_++){const x=w*(s+1)+_,y=(w+1)*(s+1)+_,b=(w+1)*(s+1)+(_+1),A=w*(s+1)+(_+1);r==="L"?(g[f++]=x,g[f++]=A,g[f++]=b,g[f++]=x,g[f++]=b,g[f++]=y):(g[f++]=x,g[f++]=y,g[f++]=b,g[f++]=x,g[f++]=b,g[f++]=A)}const p=new Zt;p.setAttribute("position",new Q(h,3)),p.setAttribute("uv",new Q(u,2)),p.setAttribute("aAnatomyData",new Q(d,4)),p.setAttribute("skinIndex",new Ee(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new Q(g,1)),p.computeVertexNormals(),a.push(p)}return a}function qu(i,t){const e=1.76+Math.cos(i)*(t?.422:.406),n=Math.max(.04,Mo(e)-(t?.022:.03));return{x:Math.sin(i)*n,z:e}}function Bv(i,t){const e=i.boneIndexMap.get("head"),n=i.boneIndexMap.get("jaw"),s=[],o=t===0?32:18,a=t===0?28:16;for(const u of[!0,!1]){const d=u?e:n,m=(o+1)*(a+1),v=new Float32Array(m*3),g=new Float32Array(m*2),f=new Float32Array(m*4),p=new Uint16Array(m*4),w=new Float32Array(m*4);for(let b=0;b<=o;b++){const A=b/o,T=G.lerp(1.68,2.19,A),S=rs(T),M=Math.max(.02,(Mo(T)-.016)*Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(A-.86)/.14),2))));for(let P=0;P<=a;P++){const C=P/a*2-1,R=Math.abs(C),F=Math.sqrt(Math.max(0,1-C*C)),I=C*M;let k;if(u){const D=A*Math.PI*18-R*2.6,O=Math.pow(.5+.5*Math.sin(D),1.8)*.0052*F*Yn(.08,.25,A),H=-.0032*Math.exp(-Math.pow(C/.1,2))*F,Z=.0035*Math.abs(Math.sin(A*Math.PI*16))*Yn(.75,.98,R);k=S+.004+.032*F-O+H-Z}else{const D=.0038*Math.exp(-Math.pow((R-.34)/.14,2))*F,O=.0035*Math.exp(-Math.pow(C/.07,2))*Yn(.55,.2,A),H=.003*Math.abs(Math.sin(A*Math.PI*14))*Yn(.75,.98,R);k=S-.002-.02*F+D+O+H}const N=b*(a+1)+P;v[N*3]=I,v[N*3+1]=k,v[N*3+2]=T,g[N*2]=A*2.4,g[N*2+1]=(C*.5+.5)*2,f[N*4]=.45,f[N*4+2]=(1-Yn(0,.38,A))*.85,p.set([d,0,0,0],N*4),w.set([1,0,0,0],N*4)}}const _=new Uint16Array(o*a*6);let x=0;for(let b=0;b<o;b++)for(let A=0;A<a;A++){const T=b*(a+1)+A,S=(b+1)*(a+1)+A,M=(b+1)*(a+1)+(A+1),P=b*(a+1)+(A+1);u?(_[x++]=T,_[x++]=M,_[x++]=S,_[x++]=T,_[x++]=P,_[x++]=M):(_[x++]=T,_[x++]=S,_[x++]=M,_[x++]=T,_[x++]=M,_[x++]=P)}const y=new Zt;y.setAttribute("position",new Q(v,3)),y.setAttribute("uv",new Q(g,2)),y.setAttribute("aAnatomyData",new Q(f,4)),y.setAttribute("skinIndex",new Ee(p,4)),y.setAttribute("skinWeight",new Kt(w,4)),y.setIndex(new Q(_,1)),y.computeVertexNormals(),s.push(y)}const r=t===0?42:22,l=t===0?12:8;for(const u of[!0,!1]){const d=u?e:n,m=u?16:14,v=.0155,g=(r+1)*(l+1),f=new Float32Array(g*3),p=new Float32Array(g*2),w=new Float32Array(g*4),_=new Uint16Array(g*4),x=new Float32Array(g*4),y=[];for(let M=0;M<=18;M++){const P=G.lerp(-Math.PI*.46,Math.PI*.46,M/18),C=qu(P,u),R=rs(C.z)+(u?.012:-.01);y.push(new E(C.x,R,C.z))}const b=new si(y);for(let M=0;M<=r;M++){const P=M/r,C=b.getPointAt(P),R=b.getTangentAt(P).normalize(),F=new E(0,1,0),I=new E().crossVectors(F,R).normalize(),k=1+.24*Math.pow(.5+.5*Math.cos(P*Math.PI*m*2),2),N=v*k;for(let D=0;D<=l;D++){const O=D/l,H=O*Math.PI*2,Z=1+.12*Math.sin(H*3),q=new E().copy(C).addScaledVector(I,N*Z*Math.sin(H)).addScaledVector(F,N*.82*Math.cos(H)),$=M*(l+1)+D;f[$*3]=q.x,f[$*3+1]=q.y,f[$*3+2]=q.z,p[$*2]=P*3,p[$*2+1]=O*1.2,w[$*4]=.4,_.set([d,0,0,0],$*4),x.set([1,0,0,0],$*4)}}const A=new Uint16Array(r*l*6);let T=0;for(let M=0;M<r;M++)for(let P=0;P<l;P++){const C=M*(l+1)+P,R=(M+1)*(l+1)+P,F=(M+1)*(l+1)+(P+1),I=M*(l+1)+(P+1);A[T++]=C,A[T++]=R,A[T++]=F,A[T++]=C,A[T++]=F,A[T++]=I}const S=new Zt;S.setAttribute("position",new Q(f,3)),S.setAttribute("uv",new Q(p,2)),S.setAttribute("aAnatomyData",new Q(w,4)),S.setAttribute("skinIndex",new Ee(_,4)),S.setAttribute("skinWeight",new Kt(x,4)),S.setIndex(new Q(A,1)),S.computeVertexNormals(),s.push(S)}const c=t===0?18:10,h=t===0?12:8;{const u=(c+1)*(h+1),d=new Float32Array(u*3),m=new Float32Array(u*2),v=new Float32Array(u*4),g=new Uint16Array(u*4),f=new Float32Array(u*4);for(let x=0;x<=h;x++){const y=x/h;for(let b=0;b<=c;b++){const A=b/c,T=G.lerp(-Math.PI*.62,Math.PI*.62,A),S=1.78-Math.cos(T)*.11,M=Mo(Math.max(1.66,S))-.022,P=Math.sin(T)*M,C=rs(S),R=G.lerp(C-.018,C+.03,y),F=x*(c+1)+b;d[F*3]=P,d[F*3+1]=R,d[F*3+2]=S,m[F*2]=A*1.5,m[F*2+1]=y*1.5,v[F*4]=.5,v[F*4+2]=.95*Math.cos(T*.65);const I=Yn(0,1,y);g.set([e,n,0,0],F*4),f.set([I,1-I,0,0],F*4)}}const p=new Uint16Array(c*h*6);let w=0;for(let x=0;x<h;x++)for(let y=0;y<c;y++){const b=x*(c+1)+y,A=(x+1)*(c+1)+y,T=(x+1)*(c+1)+(y+1),S=x*(c+1)+(y+1);p[w++]=b,p[w++]=A,p[w++]=T,p[w++]=b,p[w++]=T,p[w++]=S}const _=new Zt;_.setAttribute("position",new Q(d,3)),_.setAttribute("uv",new Q(m,2)),_.setAttribute("aAnatomyData",new Q(v,4)),_.setAttribute("skinIndex",new Ee(g,4)),_.setAttribute("skinWeight",new Kt(f,4)),_.setIndex(new Q(p,1)),_.computeVertexNormals(),s.push(_)}return Ke(s)}function Ov(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,m=G.lerp(-Math.PI*.42,Math.PI*.42,d),v=qu(m,r),g=v.x,f=v.z,p=rs(f)+(r?.011:-.01),w=1+.34*Math.exp(-Math.pow((Math.abs(m)-.52)/.25,2)),_=.023*w*(.78+.22*Math.cos(m)),x=.0062*w,y=(o+1)*(a+1),b=new Float32Array(y*3),A=new Float32Array(y*2),T=new Float32Array(y*4),S=new Uint16Array(y*4),M=new Float32Array(y*4),P=-Math.sin(m),C=-Math.cos(m);for(let k=0;k<=o;k++){const N=r?1-k/o:k/o,D=x*(1-.88*Math.pow(N,1.25)),O=.0055*N*N,H=g+P*O,Z=p+h*_*N,q=f+C*O-.003*N*N;for(let $=0;$<=a;$++){const X=$/a,V=X*Math.PI*2,et=k*(a+1)+$;b[et*3]=H+Math.sin(V)*D,b[et*3+1]=Z,b[et*3+2]=q+Math.cos(V)*D,A[et*2]=N,A[et*2+1]=X,S.set([c,0,0,0],et*4),M.set([1,0,0,0],et*4)}}const R=new Uint16Array(o*a*6);let F=0;for(let k=0;k<o;k++)for(let N=0;N<a;N++){const D=k*(a+1)+N,O=(k+1)*(a+1)+N,H=(k+1)*(a+1)+(N+1),Z=k*(a+1)+(N+1);R[F++]=D,R[F++]=O,R[F++]=H,R[F++]=D,R[F++]=H,R[F++]=Z}const I=new Zt;I.setAttribute("position",new Q(b,3)),I.setAttribute("uv",new Q(A,2)),I.setAttribute("aAnatomyData",new Q(T,4)),I.setAttribute("skinIndex",new Ee(S,4)),I.setAttribute("skinWeight",new Kt(M,4)),I.setIndex(new Q(R,1)),I.computeVertexNormals(),s.push(I)}}return Ke(s)}function Hv(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(f=>i.boneIndexMap.get(f)),a=s.map(f=>i.bindWorldPositions.get(f)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let f=0;f<=e;f++){const p=f/e,w=G.lerp(1.74,2.12,p),_=rs(w)-.004,x=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),y=(.08+.012*Math.sin(p*Math.PI)-.022*p)*x,b=(.015-.005*p)*x;for(let A=0;A<=n;A++){const T=A/n,S=T*Math.PI*2,M=Math.sin(S),P=Math.cos(S),C=P>.35?-.0042*Math.exp(-Math.pow(M/.24,2)):0,R=P>.2?.0012*Math.sin(p*Math.PI*26)*Math.cos(M*Math.PI*9)*x:0,F=new E(y*M,_+b*P+C+R,w),I=f*(n+1)+A;l[I*3]=F.x,l[I*3+1]=F.y,l[I*3+2]=F.z,c[I*2]=p*2.5,c[I*2+1]=T*1.8;const k=_i(F,o,a,3.8);u.set(k.indices,I*4),d.set(k.weights,I*4)}}const m=new Uint16Array(e*n*6);let v=0;for(let f=0;f<e;f++)for(let p=0;p<n;p++){const w=f*(n+1)+p,_=(f+1)*(n+1)+p,x=(f+1)*(n+1)+(p+1),y=f*(n+1)+(p+1);m[v++]=w,m[v++]=_,m[v++]=x,m[v++]=w,m[v++]=x,m[v++]=y}const g=new Zt;return g.setAttribute("position",new Q(l,3)),g.setAttribute("uv",new Q(c,2)),g.setAttribute("aAnatomyData",new Q(h,4)),g.setAttribute("skinIndex",new Ee(u,4)),g.setAttribute("skinWeight",new Kt(d,4)),g.setIndex(new Q(m,1)),g.computeVertexNormals(),g}function Dh(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?Jo:ta).clone(),u=new E(r*-.16,.985,.06).normalize(),d=new E().crossVectors(u,h).normalize(),m=new E().crossVectors(h,d).normalize(),v=e?ja+9e-4:ja,g=.94,f=(s+1)*(o+1),p=new Float32Array(f*3),w=new Float32Array(f*2),_=new Float32Array(f*4),x=new Uint16Array(f*4),y=new Float32Array(f*4);for(let S=0;S<=s;S++){const M=S/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(M),C=Math.cos(M);for(let R=0;R<=o;R++){const F=R/o*Math.PI*2,I=Math.cos(F),k=Math.sin(F);let N=v;if(M<g){const q=1-M/g;e?N+=.0014*q*q:N-=.0028*q*q}const D=new E().addScaledVector(h,C).addScaledVector(d,P*I).addScaledVector(m,P*k).normalize(),O=new E().copy(l).addScaledVector(D,N),H=S*(o+1)+R;p[H*3]=O.x,p[H*3+1]=O.y,p[H*3+2]=O.z;const Z=Math.min(.498,M/g*.48);w[H*2]=.5+Z*I,w[H*2+1]=.5+Z*k,x.set([c,0,0,0],H*4),y.set([1,0,0,0],H*4)}}const b=new Uint16Array(s*o*6);let A=0;for(let S=0;S<s;S++)for(let M=0;M<o;M++){const P=S*(o+1)+M,C=(S+1)*(o+1)+M,R=(S+1)*(o+1)+(M+1),F=S*(o+1)+(M+1);b[A++]=P,b[A++]=C,b[A++]=R,b[A++]=P,b[A++]=R,b[A++]=F}const T=new Zt;T.setAttribute("position",new Q(p,3)),T.setAttribute("uv",new Q(w,2)),T.setAttribute("aAnatomyData",new Q(_,4)),T.setAttribute("skinIndex",new Ee(x,4)),T.setAttribute("skinWeight",new Kt(y,4)),T.setIndex(new Q(b,1)),T.computeVertexNormals(),n.push(T)}return Ke(n)}function Wv(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=Gu(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,m=d,v=-u,g=.74,f=l.rootX+u*l.toeLength*g,p=l.rootZ+d*l.toeLength*g,w=l.rootY+Math.sin(g*Math.PI)*.011-.009*g*g+.002,_=l.toeLength*(1-g)+l.clawLength,x=l.tipRadius*.76,y=(n+1)*(s+1),b=new Float32Array(y*3),A=new Float32Array(y*2),T=new Float32Array(y*4),S=new Uint16Array(y*4),M=new Float32Array(y*4);for(let F=0;F<=n;F++){const I=F/n,k=x*(1-.85*Math.pow(I,1.52)),N=f+u*_*I,D=p+d*_*I,O=Math.max(.004,w-.036*Math.pow(I,1.8)+.006*Math.sin(I*Math.PI));for(let H=0;H<=s;H++){const Z=H/s,q=Z*Math.PI*2,$=Math.sin(q),X=Math.cos(q),V=F*(s+1)+H;b[V*3]=N+m*$*k*.74,b[V*3+1]=Math.max(.002,O+X*k*1.05),b[V*3+2]=D+v*$*k*.74,A[V*2]=I,A[V*2+1]=Z,S.set([c,0,0,0],V*4),M.set([1,0,0,0],V*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let F=0;F<n;F++)for(let I=0;I<s;I++){const k=F*(s+1)+I,N=(F+1)*(s+1)+I,D=(F+1)*(s+1)+(I+1),O=F*(s+1)+(I+1);P[C++]=k,P[C++]=N,P[C++]=D,P[C++]=k,P[C++]=D,P[C++]=O}const R=new Zt;R.setAttribute("position",new Q(b,3)),R.setAttribute("uv",new Q(A,2)),R.setAttribute("aAnatomyData",new Q(T,4)),R.setAttribute("skinIndex",new Ee(S,4)),R.setAttribute("skinWeight",new Kt(M,4)),R.setIndex(new Q(P,1)),R.computeVertexNormals(),e.push(R)}}return Ke(e)}function Vv(i,t){const e=[],n=[],s=[];for(const o of["L","R"]){const a=o==="L"?1:-1;e.push(...Gv(i,o,a,t)),n.push(...Xv(i,o,a,t)),e.push(...Yv(i,o,t)),n.push($v(i,o,t)),s.push(Kv(i,o,a,t))}return e.push(...qv(i,t)),n.push(Zv(i,t)),{wingSparsSkinGeometry:Ke(e),wingMembraneGeometry:Ke(n),dorsalSpinesGeometry:jv(i,t),alulaClawsGeometry:Ke(s)}}function Zo(i,t,e,n,s,o,a=.55){const r=new si(t),l=e.map(x=>i.boneIndexMap.get(x)),c=e.map(x=>i.bindWorldPositions.get(x)),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4),f=new E(0,1,0);for(let x=0;x<=s;x++){const y=x/s,b=r.getPointAt(y),A=r.getTangentAt(y).normalize();let T=f.clone().addScaledVector(A,-f.dot(A));T.lengthSq()<1e-4&&T.set(0,0,1),T.normalize();const S=new E().crossVectors(T,A).normalize(),M=y*(n.length-1),P=Math.min(n.length-2,Math.floor(M)),C=M-P;let R=G.lerp(n[P],n[P+1],C);y>.92&&(R*=Math.sqrt(Math.max(0,1-Math.pow((y-.92)/.08,2))));for(let F=0;F<=o;F++){const I=F/o,k=I*Math.PI*2,N=new E().copy(b).addScaledVector(S,R*Math.sin(k)).addScaledVector(T,R*.88*Math.cos(k)),D=x*(o+1)+F;u[D*3]=N.x,u[D*3+1]=N.y,u[D*3+2]=N.z,d[D*2]=y*1.4,d[D*2+1]=I*.45,m[D*4]=a;const O=_i(N,l,c,3.8);v.set(O.indices,D*4),g.set(O.weights,D*4)}}const p=new Uint16Array(s*o*6);let w=0;for(let x=0;x<s;x++)for(let y=0;y<o;y++){const b=x*(o+1)+y,A=(x+1)*(o+1)+y,T=(x+1)*(o+1)+(y+1),S=x*(o+1)+(y+1);p[w++]=b,p[w++]=A,p[w++]=T,p[w++]=b,p[w++]=T,p[w++]=S}const _=new Zt;return _.setAttribute("position",new Q(u,3)),_.setAttribute("uv",new Q(d,2)),_.setAttribute("aAnatomyData",new Q(m,4)),_.setAttribute("skinIndex",new Ee(v,4)),_.setAttribute("skinWeight",new Kt(g,4)),_.setIndex(new Q(p,1)),_.computeVertexNormals(),_}function Gv(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new E(e*.17,1.01,.75),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(Zo(i,c,h,[.062,.068,.066,.056,.044,.03,.008],o,a,.72));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const m=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),v=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(Zo(i,[u,m,v],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.03,.019,.005],r,l,.58))}return s}function Xv(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),m=i.bindWorldPositions.get(`wingWrist_${t}`),v=i.bindWorldPositions.get(`wingElbow_${t}`),g=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(lo(o,Math.max(4,Math.floor(a*.5)),(A,T)=>{const S=new E().lerpVectors(new E(e*.3,1.13,.88),m,A);S.z+=.05*Math.sin(A*Math.PI);const M=A<.48?new E().lerpVectors(g,v,A/.48):new E().lerpVectors(v,m,(A-.48)/.52),P=new E().lerpVectors(M,S,T),C=Math.max(0,(A-.45)/.55),R=Math.max(0,(.55-A)/.55),F=1-Math.abs(A-.5)*1.8,I=Xe([c,l,r,h],[R,Math.max(0,F),C,(1-A)*.25]);return{pos:P,skin:I,thinness:T*.65}}));const f=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),w=i.boneIndexMap.get(`wingFinger_${t}_1_a`),_=i.boneIndexMap.get(`wingFinger_${t}_1_b`),x=new E(e*.32,1.06,.72),y=new E(e*.29,.9,.14),b=new E(e*.26,.82,-.46);s.push(lo(o,a,(A,T)=>{const S=T<.5?new E().lerpVectors(x,y,T*2):new E().lerpVectors(y,b,(T-.5)*2),M=T<.5?new E().lerpVectors(m,f,T*2):new E().lerpVectors(f,p,(T-.5)*2),P=A<.45?new E().lerpVectors(x,v,A/.45):new E().lerpVectors(v,m,(A-.45)/.55),C=new E().lerpVectors(S,M,A),R=new E().lerpVectors(P,C,Math.pow(T,.88)),F=Math.sin(A*Math.PI)*Math.pow(T,2.2);R.z+=.19*F,R.y+=.035*Math.sin(A*Math.PI)*Math.sin(T*Math.PI);const I=T<.42?h:T<.78?u:d,k=T<.35?r:T<.72?w:_,N=(1-T)*Math.sin(A*Math.PI)*.6,D=Xe([I,k,l,r],[(1-A)*(1-N*.5),A*(1-N*.5),N*.65,N*.35]);return{pos:R,skin:D,thinness:.35+.65*Math.sin(A*Math.PI)*T}}));for(let A=1;A<=5;A++){const T=i.bindWorldPositions.get(`wingFinger_${t}_${A}_a`),S=i.bindWorldPositions.get(`wingFinger_${t}_${A}_b`),M=i.bindWorldPositions.get(`wingFinger_${t}_${A+1}_a`),P=i.bindWorldPositions.get(`wingFinger_${t}_${A+1}_b`),C=i.boneIndexMap.get(`wingFinger_${t}_${A}_a`),R=i.boneIndexMap.get(`wingFinger_${t}_${A}_b`),F=i.boneIndexMap.get(`wingFinger_${t}_${A+1}_a`),I=i.boneIndexMap.get(`wingFinger_${t}_${A+1}_b`),k=A===5?.24:.17;s.push(lo(o,a,(N,D)=>{const O=D<.5?new E().lerpVectors(m,T,D*2):new E().lerpVectors(T,S,(D-.5)*2),H=D<.5?new E().lerpVectors(m,M,D*2):new E().lerpVectors(M,P,(D-.5)*2),Z=new E().lerpVectors(O,H,N),q=new E().subVectors(m,Z).normalize(),$=Math.sin(N*Math.PI)*Math.pow(D,2.4);Z.addScaledVector(q,k*$),Z.y+=.028*Math.sin(N*Math.PI)*Math.sin(D*Math.PI);let X;if(D<.25){const V=1-D/.25;X=Xe([r,C,F,0],[V,(1-V)*(1-N),(1-V)*N,0])}else{const V=Math.max(0,Math.min(1,(D-.42)/.48));X=Xe([C,R,F,I],[(1-N)*(1-V),(1-N)*V,N*(1-V),N*V])}return{pos:Z,skin:X,thinness:.3+.7*Math.sin(N*Math.PI)*Math.pow(D,.7)}}))}return s}function Yv(i,t,e){const n=e===0?12:7,s=e===0?8:6,o=t==="L"?1:-1,a=[];return Za.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new E(o*r.rootX,r.rootY,r.rootZ),u=new E(o*r.tipX,r.tipY,r.tipZ);a.push(Zo(i,[h,u],[c],[.017,.004],n,s,.55))}),a}function $v(i,t,e){const n=e===0?12:7,s=t==="L"?1:-1,o=[],a=Za.map(d=>new E(s*d.rootX,d.rootY,d.rootZ)),r=Za.map(d=>new E(s*d.tipX,d.tipY,d.tipZ)),l=[1,2,3].map(d=>i.boneIndexMap.get(`pelvicFin_${t}_${d}`)),c=i.boneIndexMap.get("tail_3"),h=new E(s*.1,.54,-1.56),u=[{rA:a[0],tA:r[0],rB:a[1],tB:r[1],iA:l[0],iB:l[1]},{rA:a[1],tA:r[1],rB:a[2],tB:r[2],iA:l[1],iB:l[2]},{rA:a[2],tA:r[2],rB:h,tB:h,iA:l[2],iB:c}];for(const d of u)o.push(lo(n,n,(m,v)=>{const g=new E().lerpVectors(d.rA,d.tA,v),f=new E().lerpVectors(d.rB,d.tB,v),p=new E().lerpVectors(g,f,m),w=new E().subVectors(d.rA,p).normalize();p.addScaledVector(w,.042*Math.sin(m*Math.PI)*Math.pow(v,2.1));const _=Xe([d.iA,d.iB,0,0],[1-m,m,0,0]);return{pos:p,skin:_,thinness:.4+.55*v}}));return Ke(o)}function qv(i,t){const e=t===0?12:7,n=t===0?8:6,s=[];return Ps.forEach((o,a)=>{const r=`tailFin_R_${a+1}`,l=new E(-o.rootX,o.rootY,o.rootZ),c=new E(-o.tipX,o.tipY,o.tipZ);s.push(Zo(i,[l,c],[r],[.014,.0038],e,n,.52))}),s}function Zv(i,t){const e=t===0?12:7,n=[];for(let h=0;h<4;h++){const u=Ps[h],d=Ps[h+1],m=new E(-u.rootX,u.rootY,u.rootZ),v=new E(-d.rootX,d.rootY,d.rootZ),g=new E(-u.tipX,u.tipY,u.tipZ),f=new E(-d.tipX,d.tipY,d.tipZ),p=i.boneIndexMap.get(`tailFin_R_${h+1}`),w=i.boneIndexMap.get(`tailFin_R_${h+2}`);n.push(lo(e,e,(_,x)=>{const y=new E().lerpVectors(m,g,x),b=new E().lerpVectors(v,f,x),A=new E().lerpVectors(y,b,_),T=new E().lerpVectors(m,v,_),S=new E().subVectors(T,A).normalize();A.addScaledVector(S,.046*Math.sin(_*Math.PI)*Math.pow(x,2.15));const M=Xe([p,w,0,0],[1-_,_,0,0]);return{pos:A,skin:M,thinness:.45+.55*x}}))}const s=Ps[4],o=new E(-s.rootX,s.rootY,s.rootZ),a=new E(-s.tipX,s.tipY,s.tipZ),r=new E(-s.rootX,s.rootY,-4.5),l=i.boneIndexMap.get("tailFin_R_5"),c=i.boneIndexMap.get("tailFinHinge_R");return n.push(lo(e,e,(h,u)=>{const d=new E().lerpVectors(o,a,u),m=new E().lerpVectors(d,r,h),v=Xe([l,c,0,0],[1-h,h,0,0]);return{pos:m,skin:v,thinness:.45+.5*u}})),Ke(n)}function lo(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const m=d/t;for(let v=0;v<=i;v++){const g=v/i,f=e(g,m),p=d*(i+1)+v;s[p*3]=f.pos.x,s[p*3+1]=f.pos.y,s[p*3+2]=f.pos.z,o[p*2]=g*1.25,o[p*2+1]=m*1.25,a[p*4]=.22,a[p*4+1]=0,a[p*4+2]=.18*f.thinness,a[p*4+3]=f.thinness,r.set(f.skin.indices,p*4),l.set(f.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let m=0;m<i;m++){const v=d*(i+1)+m,g=(d+1)*(i+1)+m,f=(d+1)*(i+1)+(m+1),p=d*(i+1)+(m+1);c[h++]=v,c[h++]=g,c[h++]=f,c[h++]=v,c[h++]=f,c[h++]=p}const u=new Zt;return u.setAttribute("position",new Q(s,3)),u.setAttribute("uv",new Q(o,2)),u.setAttribute("uv1",new Q(o,2)),u.setAttribute("aAnatomyData",new Q(a,4)),u.setAttribute("skinIndex",new Ee(r,4)),u.setAttribute("skinWeight",new Kt(l,4)),u.setIndex(new Q(c,1)),u.computeVertexNormals(),u}function jv(i,t){const e=t===0?32:t===1?22:14,n=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],s=n.map(x=>i.boneIndexMap.get(x)),o=n.map(x=>i.bindWorldPositions.get(x)),a=e*2,r=6,l=8,c=new Float32Array(a*r*3),h=new Float32Array(a*r*3),u=new Float32Array(a*r*2),d=new Float32Array(a*r*4),m=new Uint16Array(a*r*4),v=new Float32Array(a*r*4),g=new Uint16Array(a*l*3);let f=0,p=0;for(let x=0;x<e;x++){const y=x/(e-1),b=G.lerp(-3.25,1.48,1-Math.pow(1-y,1.28)),A=jr(b),T=A.point,S=A.tangent,M=A.up,P=.32+.68*Math.sin(Math.pow(y,.74)*Math.PI),C=.078*P,R=.108*P,F=-.028,I=$u(T,i,s,o);for(const k of[1,-1]){const N=k*.004,D=k*C*.62,O=-C*.16,H=jr(b+R*.5).point,Z=jr(b-R*.5).point,q=[H.clone().addScaledVector(M,F).setX(N),Z.clone().addScaledVector(M,F).setX(N),T.clone().addScaledVector(M,F*.85).setX(k*.02*P),T.clone().addScaledVector(S,R*.1).addScaledVector(M,C*.64).setX(N*1.2),T.clone().addScaledVector(S,-R*.4).addScaledVector(M,C).setX(N*1.1),T.clone().addScaledVector(S,-R*.12).addScaledVector(M,C*.42).setX(k*.001)],$=q.map((V,et)=>{const it=V.clone();if(et>=3){const J=et===4?1:et===3?.68:.48;it.x+=D*J,it.y+=O*J}return it});for(let V=0;V<r;V++){const et=(f+V)*3;c[et]=q[V].x,c[et+1]=q[V].y,c[et+2]=q[V].z,h[et]=$[V].x,h[et+1]=$[V].y,h[et+2]=$[V].z,u[(f+V)*2]=y,u[(f+V)*2+1]=V/r,d[(f+V)*4]=.75,d[(f+V)*4+1]=0,d[(f+V)*4+2]=V===5||V>=3?.96:.72,d[(f+V)*4+3]=0,m.set(I.indices,(f+V)*4),v.set(I.weights,(f+V)*4)}const X=k>0?[[0,2,3],[2,1,4],[2,4,3],[0,3,5],[5,3,4],[5,4,1],[0,5,1],[0,1,2]]:[[0,3,2],[2,4,1],[2,3,4],[0,5,3],[5,4,3],[5,1,4],[0,1,5],[0,2,1]];for(const V of X)g[p++]=f+V[0],g[p++]=f+V[1],g[p++]=f+V[2];f+=r}}const w=new Zt;w.setAttribute("position",new Q(c,3)),w.setAttribute("uv",new Q(u,2)),w.setAttribute("uv1",new Q(u,2)),w.setAttribute("aAnatomyData",new Q(d,4)),w.setAttribute("skinIndex",new Ee(m,4)),w.setAttribute("skinWeight",new Kt(v,4)),w.setIndex(new Q(g,1));const _=new Q(h,3);return _.name="dorsalVSplit",w.morphAttributes.position=[_],w.computeVertexNormals(),w}function Kv(i,t,e,n){const s=i.bindWorldPositions.get(`wingWrist_${t}`),o=s.clone().add(new E(e*.035,.018,.085));return Zo(i,[s,o],[`wingWrist_${t}`],[.016,.003],n===0?7:4,n===0?8:6,.8)}function Qv(i,t){const e=[],n=[],s=[],o=i.boneIndexMap.get("prostheticCollar"),a=i.boneIndexMap.get("prostheticRod"),r=i.boneIndexMap.get("tail_8"),l=i.boneIndexMap.get("tail_9"),c=i.boneIndexMap.get("tail_10"),h=t===0?20:12,u=[{z:-3.48,y:.125,rOuter:.066,length:.044,boneIdx:o},{z:-3.56,y:.125,rOuter:.062,length:.04,boneIdx:o},{z:-4.34,y:.128,rOuter:.033,length:.032,boneIdx:c}];for(const b of u)e.push(No(new E(0,b.y,b.z-b.length*.5),new E(0,b.y,b.z+b.length*.5),b.rOuter,b.rOuter*1.03,h,b.boneIdx));e.push(No(new E(.044,.138,-3.6),new E(.048,.142,-3.46),.024,.028,t===0?14:8,o));const d=t===0?16:8;e.push(Uh(new E(.038,.138,-3.52),new E(.02,.138,-4.34),.012,.0085,d,t===0?12:8,[a,l,c])),n.push(Uh(new E(.026,.126,-3.5),new E(.014,.127,-4.35),.014,.009,d,t===0?10:6,[r,l,c]));const m=[],v=[],g=[];Ps.forEach((b,A)=>{const T=`tailFin_L_${A+1}`,S=i.boneIndexMap.get(T),M=new E(b.rootX,b.rootY,b.rootZ),P=new E(b.tipX,b.tipY,b.tipZ);m.push(M),v.push(P),g.push(S),n.push(Zu(M,P,.0125,.004,t===0?10:6,t===0?10:6,S,S));const C=new E().subVectors(P,M).normalize();e.push(No(M.clone(),M.clone().addScaledVector(C,.026),.0155,.0145,t===0?10:6,S)),e.push(No(P.clone().addScaledVector(C,-.012),P.clone().addScaledVector(C,.02),.0055,.0018,t===0?8:6,S))});for(let b=1;b<=4;b++){const A=b/5,T=new E().lerpVectors(m[0],v[0],A);e.push(No(T.clone().add(new E(0,-.0055,0)),T.clone().add(new E(0,.0055,0)),.006,.006,8,g[0]))}const f=t===0?12:7;for(let b=0;b<4;b++){const A=m[b],T=m[b+1],S=v[b],M=v[b+1],P=g[b],C=g[b+1];s.push(Nh(f,b,(R,F)=>{const I=new E().lerpVectors(A,S,F),k=new E().lerpVectors(T,M,F),N=new E().lerpVectors(I,k,R),D=new E().lerpVectors(A,T,R),O=new E().subVectors(D,N).normalize();N.addScaledVector(O,.046*Math.sin(R*Math.PI)*Math.pow(F,2.15));const H=Xe([P,C,0,0],[1-R,R,0,0]);return{pos:N,skin:H}}))}const p=m[4],w=v[4],_=new E(p.x,p.y,-4.5),x=g[4],y=i.boneIndexMap.get("tailFinHinge_L");return s.push(Nh(f,4,(b,A)=>{const T=new E().lerpVectors(p,w,A),S=new E().lerpVectors(T,_,b),M=Xe([x,y,0,0],[1-b,b,0,0]);return{pos:S,skin:M}})),{bronzeHardwareGeometry:Ke(e),ironStrutsGeometry:Ke(n),scalePasteMembraneGeometry:Ke(s)}}function Nh(i,t,e){const n=(i+1)*(i+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=i;d++){const m=d/i;for(let v=0;v<=i;v++){const g=v/i,f=e(g,m),p=d*(i+1)+v;s[p*3]=f.pos.x,s[p*3+1]=f.pos.y,s[p*3+2]=f.pos.z,o[p*2]=(t+g)*.45,o[p*2+1]=m*1.2,a[p*4]=.55,a[p*4+3]=.25,r.set(f.skin.indices,p*4),l.set(f.skin.weights,p*4)}}const c=new Uint16Array(i*i*6);let h=0;for(let d=0;d<i;d++)for(let m=0;m<i;m++){const v=d*(i+1)+m,g=(d+1)*(i+1)+m,f=(d+1)*(i+1)+(m+1),p=d*(i+1)+(m+1);c[h++]=v,c[h++]=g,c[h++]=f,c[h++]=v,c[h++]=f,c[h++]=p}const u=new Zt;return u.setAttribute("position",new Q(s,3)),u.setAttribute("uv",new Q(o,2)),u.setAttribute("uv1",new Q(o,2)),u.setAttribute("aAnatomyData",new Q(a,4)),u.setAttribute("skinIndex",new Ee(r,4)),u.setAttribute("skinWeight",new Kt(l,4)),u.setIndex(new Q(c,1)),u.computeVertexNormals(),u}function No(i,t,e,n,s,o){return Zu(i,t,e,n,3,s,o,o)}function Zu(i,t,e,n,s,o,a,r){const c=new E().subVectors(t,i).clone().normalize();let h=new E(0,1,0);Math.abs(c.dot(h))>.92&&(h=new E(0,0,1));const u=h.clone().addScaledVector(c,-h.dot(c)).normalize(),d=new E().crossVectors(u,c).normalize(),m=(s+1)*(o+1),v=new Float32Array(m*3),g=new Float32Array(m*2),f=new Float32Array(m*4),p=new Uint16Array(m*4),w=new Float32Array(m*4);for(let b=0;b<=s;b++){const A=b/s,T=new E().lerpVectors(i,t,A),S=G.lerp(e,n,A),M=b===0||b===s?.35:1;for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,F=T.clone().addScaledVector(d,S*M*Math.sin(R)).addScaledVector(u,S*M*Math.cos(R)),I=b*(o+1)+P;v[I*3]=F.x,v[I*3+1]=F.y,v[I*3+2]=F.z,g[I*2]=A,g[I*2+1]=C;const k=Xe([a,r,0,0],[1-A,A,0,0]);p.set(k.indices,I*4),w.set(k.weights,I*4)}}const _=new Uint16Array(s*o*6);let x=0;for(let b=0;b<s;b++)for(let A=0;A<o;A++){const T=b*(o+1)+A,S=(b+1)*(o+1)+A,M=(b+1)*(o+1)+(A+1),P=b*(o+1)+(A+1);_[x++]=T,_[x++]=S,_[x++]=M,_[x++]=T,_[x++]=M,_[x++]=P}const y=new Zt;return y.setAttribute("position",new Q(v,3)),y.setAttribute("uv",new Q(g,2)),y.setAttribute("uv1",new Q(g,2)),y.setAttribute("aAnatomyData",new Q(f,4)),y.setAttribute("skinIndex",new Ee(p,4)),y.setAttribute("skinWeight",new Kt(w,4)),y.setIndex(new Q(_,1)),y.computeVertexNormals(),y}function Uh(i,t,e,n,s,o,a){const r=new E().subVectors(t,i).normalize(),l=new E(0,1,0).addScaledVector(r,-r.y).normalize(),c=new E().crossVectors(l,r).normalize(),h=(s+1)*(o+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4);for(let _=0;_<=s;_++){const x=_/s,y=new E().lerpVectors(i,t,x),b=G.lerp(e,n,x),A=Math.max(0,1-x*2),T=Math.max(0,(x-.5)*2),S=1-A-T,M=Xe([a[0],a[1],a[2],0],[A,S,T,0]);for(let P=0;P<=o;P++){const C=P/o,R=C*Math.PI*2,F=y.clone().addScaledVector(c,b*Math.sin(R)).addScaledVector(l,b*Math.cos(R)),I=_*(o+1)+P;u[I*3]=F.x,u[I*3+1]=F.y,u[I*3+2]=F.z,d[I*2]=x,d[I*2+1]=C,v.set(M.indices,I*4),g.set(M.weights,I*4)}}const f=new Uint16Array(s*o*6);let p=0;for(let _=0;_<s;_++)for(let x=0;x<o;x++){const y=_*(o+1)+x,b=(_+1)*(o+1)+x,A=(_+1)*(o+1)+(x+1),T=_*(o+1)+(x+1);f[p++]=y,f[p++]=b,f[p++]=A,f[p++]=y,f[p++]=A,f[p++]=T}const w=new Zt;return w.setAttribute("position",new Q(u,3)),w.setAttribute("uv",new Q(d,2)),w.setAttribute("uv1",new Q(d,2)),w.setAttribute("aAnatomyData",new Q(m,4)),w.setAttribute("skinIndex",new Ee(v,4)),w.setAttribute("skinWeight",new Kt(g,4)),w.setIndex(new Q(f,1)),w.computeVertexNormals(),w}function Jv(){const i=bv(),t=Cv(),e=new xi;e.name="Toothless_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s={},o={};for(const r of[0,1,2]){const l=new xi;l.name=`Toothless_LOD${r}`;const c=Lv(i,r),h=Uv(i,r),u=Vv(i,r),d=Qv(i,r),m=Ke([c,h.jawSkinGeometry,u.wingSparsSkinGeometry]),v=Ke([h.clawsGeometry,u.alulaClawsGeometry]),g=(I,k,N,D=!0,O=!0)=>{const H=new Lu(k,N);return H.name=`${I}_LOD${r}`,H.castShadow=D,H.receiveShadow=O,H.frustumCulled=!1,H.bind(i.skeleton,new re),H},f=g("BodyAndHeadSkin",m,t.skinMaterial),p=g("FlightPatagiumMembranes",u.wingMembraneGeometry,t.wingMembraneMaterial),w=g("VSplittingDorsalSpines",u.dorsalSpinesGeometry,t.skinMaterial);n.push(w);const _=g("OralGums",h.oralGumsGeometry,t.oralGumMaterial,!1,!0),x=g("RetractableTeeth",h.teethGeometry,t.teethMaterial,!0,!0),y=g("ArticulatedTongue",h.tongueGeometry,t.tongueMaterial,!1,!0),b=g("LightReactiveIrises",h.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),A=g("RefractiveCorneas",h.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1);A.renderOrder=2;const T=g("ObsidianClaws",v,t.clawMaterial,!0,!0),S=g("ProstheticBronzeLinkage",d.bronzeHardwareGeometry,t.prostheticBronzeMaterial),M=g("ProstheticIronStruts",d.ironStrutsGeometry,t.prostheticIronMaterial),P=g("ProstheticScalePasteFin",d.scalePasteMembraneGeometry,t.prostheticPasteMaterial),C=[f,p,w,_,x,y,b,A,T,S,M,P];let R=0,F=0;for(const I of C){l.add(I);const k=I.geometry.getIndex();R+=k?k.count/3:I.geometry.getAttribute("position").count/3,F+=I.geometry.getAttribute("position").count}l.visible=r===0,e.add(l),s[r]=l,o[r]={lod:r,triangles:Math.round(R),vertices:F,subMeshCount:C.length}}const a={rootGroup:e,rig:i,materials:t,lodGroups:s,dorsalSpineMeshes:n,lodStats:o,activeLOD:0,autoLOD:!1,setActiveLOD(r){a.activeLOD=r;for(const l of[0,1,2])s[l].visible=l===r},updateAutoLOD(r){if(!a.autoLOD)return a.activeLOD;const l=r<9.5?0:r<20?1:2;return l!==a.activeLOD&&a.setActiveLOD(l),a.activeLOD}};return a}function ds(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},r=i[0].morphTargetsRelative,l=new Zt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let v=0;v<m.count;++v)u.push(m.getX(v)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=kh(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const m=[];for(let g=0;g<a[h].length;++g)m.push(a[h][g][d]);const v=kh(m);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function kh(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const a=new t(o),r=new Q(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,m=h.count;d<m;d++)for(let v=0;v<e;v++){const g=h.getComponent(d,v);r.setComponent(d+u,v,g)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(r.gpuType=s),r}const ss={"golden-hour":{id:"golden-hour",label:"Golden Hour",subtitle:"Amber & Violet Dusk",sunElevationDeg:10.8,sunAzimuthDeg:-140,zenithColor:1056060,horizonSunColor:15235902,horizonAntiSunColor:4933230,mieHaloColor:16753746,mieStrength:.52,mieExponent:6.8,sunLightColor:16759408,sunLightIntensity:4.05,rimLightColor:7055088,rimLightIntensity:1.78,hemiSkyColor:10138336,hemiGroundColor:3878182,hemiIntensity:1.16,cloudDarkColor:2367544,cloudLitColor:16751446,cloudCoverage:.46,mistDensity:.0021,rainIntensity:0,windStrength:.48,lightningFrequency:0,exposure:1.16,nightFactor:0,auroraIntensity:0,waterDeepColor:266014,waterShallowColor:740436,glitterIntensity:5.2},"clear-day":{id:"clear-day",label:"Clear Day",subtitle:"Emerald & Sapphire Sun",sunElevationDeg:43,sunAzimuthDeg:-124,zenithColor:1459330,horizonSunColor:10012394,horizonAntiSunColor:8039128,mieHaloColor:16773592,mieStrength:.3,mieExponent:7.8,sunLightColor:16774370,sunLightIntensity:3.75,rimLightColor:9619192,rimLightIntensity:1.72,hemiSkyColor:11720956,hemiGroundColor:3425334,hemiIntensity:1.4,cloudDarkColor:6059670,cloudLitColor:16777215,cloudCoverage:.28,mistDensity:.0013,rainIntensity:0,windStrength:.42,lightningFrequency:0,exposure:1.12,nightFactor:0,auroraIntensity:0,waterDeepColor:202798,waterShallowColor:812144,glitterIntensity:3.9},"dawn-dusk":{id:"dawn-dusk",label:"Dawn / Dusk",subtitle:"Crimson & Amethyst Tide",sunElevationDeg:4.6,sunAzimuthDeg:-148,zenithColor:1184822,horizonSunColor:14967912,horizonAntiSunColor:3817064,mieHaloColor:16747634,mieStrength:.48,mieExponent:6.4,sunLightColor:16750204,sunLightIntensity:3.15,rimLightColor:8033004,rimLightIntensity:1.85,hemiSkyColor:9212112,hemiGroundColor:2892338,hemiIntensity:1.18,cloudDarkColor:2104376,cloudLitColor:16021624,cloudCoverage:.44,mistDensity:.0024,rainIntensity:0,windStrength:.44,lightningFrequency:0,exposure:1.2,nightFactor:.24,auroraIntensity:.14,waterDeepColor:330780,waterShallowColor:1064014,glitterIntensity:4.5},"misty-overcast":{id:"misty-overcast",label:"Misty Rain",subtitle:"Coastal Drizzle & Fog",sunElevationDeg:29,sunAzimuthDeg:-130,zenithColor:3688536,horizonSunColor:8952488,horizonAntiSunColor:6847116,mieHaloColor:13162724,mieStrength:.2,mieExponent:4,sunLightColor:14214896,sunLightIntensity:2.25,rimLightColor:10141918,rimLightIntensity:1.92,hemiSkyColor:11584724,hemiGroundColor:2766390,hemiIntensity:1.55,cloudDarkColor:3819608,cloudLitColor:10268862,cloudCoverage:.88,mistDensity:.0042,rainIntensity:.45,windStrength:.64,lightningFrequency:0,exposure:1.18,nightFactor:0,auroraIntensity:0,waterDeepColor:398622,waterShallowColor:1328716,glitterIntensity:1.45},"starlit-night":{id:"starlit-night",label:"Starlit Night",subtitle:"Boreal Emerald & Moon",sunElevationDeg:29,sunAzimuthDeg:-136,zenithColor:264470,horizonSunColor:1321544,horizonAntiSunColor:792622,mieHaloColor:7120612,mieStrength:.3,mieExponent:9.5,sunLightColor:11193599,sunLightIntensity:2.55,rimLightColor:5678328,rimLightIntensity:2.1,hemiSkyColor:4089498,hemiGroundColor:1318184,hemiIntensity:1.14,cloudDarkColor:528414,cloudLitColor:2902640,cloudCoverage:.26,mistDensity:.0018,rainIntensity:0,windStrength:.36,lightningFrequency:0,exposure:1.28,nightFactor:1,auroraIntensity:.88,waterDeepColor:132881,waterShallowColor:535100,glitterIntensity:3.8},"stormy-squall":{id:"stormy-squall",label:"Storm Squall",subtitle:"Thunder & Rogue Gale",sunElevationDeg:16.5,sunAzimuthDeg:-138,zenithColor:857378,horizonSunColor:4610156,horizonAntiSunColor:2108476,mieHaloColor:9087172,mieStrength:.32,mieExponent:4.5,sunLightColor:11848930,sunLightIntensity:2.55,rimLightColor:7119064,rimLightIntensity:1.98,hemiSkyColor:6454424,hemiGroundColor:1581608,hemiIntensity:1.28,cloudDarkColor:1054498,cloudLitColor:6058632,cloudCoverage:.94,mistDensity:.0037,rainIntensity:1,windStrength:1,lightningFrequency:.92,exposure:1.2,nightFactor:0,auroraIntensity:0,waterDeepColor:199700,waterShallowColor:801860,glitterIntensity:2.4}},Xn=`
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
`,tx=`
  varying vec3 vWorldDir;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldDir = normalize(position);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,ex=`
  ${Xn}
  varying vec3 vWorldDir;

  void main() {
    vec3 col = evalPhysicalSky(vWorldDir, uTime, true);
    gl_FragColor = vec4(col, 1.0);
  }
`;class nx{ctx=null;unlocked=!1;muted=!1;constructor(){if(typeof window>"u")return;const t=()=>{this.unlocked=!0,this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})};window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("keydown",t,{passive:!0})}playStrike(t,e,n=1){if(!(typeof window>"u"||!this.unlocked||this.muted))try{const s=window.AudioContext||window.webkitAudioContext;if(!s)return;this.ctx||(this.ctx=new s),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const o=this.ctx,a=G.clamp(t/343*.45,.08,1.15),r=o.currentTime+a,l=3.8,c=Math.floor(o.sampleRate*l),h=o.createBuffer(1,c,o.sampleRate),u=h.getChannelData(0);let d=0,m=0;for(let _=0;_<c;_++){const x=_/o.sampleRate,y=Math.random()*2-1;d=.985*d+y*.09,m=.92*m+y*.18;const b=Math.exp(-x*11.5)*.85,A=Math.exp(-Math.pow((x-.32)/.42,2))*.95,T=Math.exp(-Math.pow((x-1.05)/.68,2))*.68,S=Math.exp(-Math.pow((x-2.05)/.95,2))*.42,M=.68+.32*Math.sin(x*23+Math.sin(x*7.5)*2.5);u[_]=(d*1.45+m*.65+y*b*.35)*(b+(A+T+S)*M)}const v=o.createBufferSource();v.buffer=h;const g=o.createBiquadFilter();g.type="lowpass";const f=1-G.clamp((t-220)/520,0,1);g.frequency.setValueAtTime(240+f*460,r),g.frequency.exponentialRampToValueAtTime(62,r+l*.88),g.Q.value=1.35;const p=o.createGain(),w=G.clamp((.2+.24*f)*n,.05,.44);if(p.gain.setValueAtTime(1e-4,r),p.gain.linearRampToValueAtTime(w,r+.04),p.gain.exponentialRampToValueAtTime(8e-4,r+l),v.connect(g),typeof o.createStereoPanner=="function"){const _=o.createStereoPanner();_.pan.value=G.clamp(e,-.85,.85),g.connect(_),_.connect(p)}else g.connect(p);p.connect(o.destination),v.start(r),v.stop(r+l+.05)}catch{}}}function ix(){const t=new Float32Array(1680),e=new Float32Array(560*3),n=new Float32Array(560*3),s=[];for(let v=0;v<140;v++){const g=v*4;s.push(g,g+1,g+2,g,g+2,g+3)}const o=new Zt,a=new Q(t,3),r=new Q(e,3),l=new Q(n,3);o.setAttribute("position",a),o.setAttribute("aNextPos",r),o.setAttribute("aBoltMeta",l),o.setIndex(s);const c={uBoltAlpha:{value:0},uBoltCoreColor:{value:new Bt(14479615)}},h=new He({name:"NordicForkedLightningBolt",transparent:!0,depthWrite:!1,blending:Go,side:on,uniforms:c,vertexShader:`
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
    `}),u=new Oe(o,h);u.frustumCulled=!1,u.renderOrder=8,u.visible=!1;const d=v=>{const g=Math.sin(v*127.1+311.7)*43758.5453;return g-Math.floor(g)};return{mesh:u,uniforms:c,regenerateBolt:(v,g,f)=>{let p=0;const w=(y,b,A,T)=>{if(p>=140)return;const S=p*4,M=[y,y,b,b],P=[-1,1,1,-1];for(let C=0;C<4;C++){const R=M[C];t[(S+C)*3]=R.x,t[(S+C)*3+1]=R.y,t[(S+C)*3+2]=R.z,e[(S+C)*3]=b.x,e[(S+C)*3+1]=b.y,e[(S+C)*3+2]=b.z,n[(S+C)*3]=P[C],n[(S+C)*3+1]=A,n[(S+C)*3+2]=T}p++},_=(y,b,A,T,S,M,P)=>{const C=[];for(let R=0;R<=A;R++){const F=R/A,I=Math.sin(F*Math.PI),k=new E().lerpVectors(y,b,F);R>0&&R<A&&(k.x+=(d(f+P+R*3.1)-.5)*T*I,k.y+=(d(f+P+R*7.7)-.5)*T*.28*I,k.z+=(d(f+P+R*11.3)-.5)*T*I),C.push(k)}for(let R=0;R<C.length-1;R++)w(C[R],C[R+1],S,M);return C},x=_(v,g,34,28,2.65,1,1);for(let y=0;y<5;y++){const b=4+Math.floor(d(f+y*19.3)*20),A=x[Math.min(x.length-2,b)],T=d(f+y*29.7)*Math.PI*2,S=26+d(f+y*41.1)*48,M=34+d(f+y*53.9)*58,P=new E(A.x+Math.cos(T)*S,Math.max(-10,A.y-M),A.z+Math.sin(T)*S),C=_(A,P,14,14,1.25,.72,100+y*31);if(C.length>6){const R=C[5],F=new E(R.x+(d(f+y*67.3)-.5)*28,Math.max(-10,R.y-24),R.z+(d(f+y*79.1)-.5)*28);_(R,F,6,7,.72,.48,300+y*17)}}o.setDrawRange(0,p*6),a.needsUpdate=!0,r.needsUpdate=!0,l.needsUpdate=!0}}}function sx(i,t,e="golden-hour"){const n=new E,s=new Bt,o=ss[e],a={uSunDir:{value:new E(-.52,.24,-.82).normalize()},uSunColor:{value:new Bt(o.sunLightColor)},uZenithColor:{value:new Bt(o.zenithColor)},uHorizonSunColor:{value:new Bt(o.horizonSunColor)},uHorizonAntiColor:{value:new Bt(o.horizonAntiSunColor)},uMieColor:{value:new Bt(o.mieHaloColor)},uMieStrength:{value:o.mieStrength},uMieExponent:{value:o.mieExponent},uCloudDarkColor:{value:new Bt(o.cloudDarkColor)},uCloudLitColor:{value:new Bt(o.cloudLitColor)},uCloudCoverage:{value:o.cloudCoverage},uMistDensity:{value:o.mistDensity},uRainIntensity:{value:o.rainIntensity},uWindStrength:{value:o.windStrength},uWindDir:{value:new $t(.84,-.54).normalize()},uLightningFlash:{value:0},uLightningDir:{value:new E(-.35,.28,-.89).normalize()},uNightFactor:{value:o.nightFactor},uAuroraIntensity:{value:o.auroraIntensity},uWaterDeepColor:{value:new Bt(o.waterDeepColor)},uWaterShallowColor:{value:new Bt(o.waterShallowColor)},uGlitterIntensity:{value:o.glitterIntensity},uIsEnvBake:{value:0},uTime:{value:0}},r=new qa(3900,64,44),l=new He({name:"NordicPhysicalSky",vertexShader:tx,fragmentShader:ex,uniforms:a,side:Fn,depthWrite:!1,depthTest:!1}),c=new Oe(r,l);c.renderOrder=-100,c.frustumCulled=!1,t.add(c);const h=new Br(o.sunLightColor,o.sunLightIntensity);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=1,h.shadow.camera.far=54;const u=13.8;h.shadow.camera.left=-u,h.shadow.camera.right=u,h.shadow.camera.top=u,h.shadow.camera.bottom=-u,h.shadow.bias=-4e-4,h.shadow.normalBias=.018,t.add(h),t.add(h.target);const d=new Br(o.rimLightColor,o.rimLightIntensity);d.position.set(5.8,4.4,5.4),t.add(d);const m=new Br(14085375,0);m.position.set(-40,28,-90),t.add(m);const v=ix();t.add(v.mesh);const g=new nx;let f=o.lightningFrequency,p=0,w=4.2,_=99,x=1;const y=new E(-.35,.26,-.9).normalize(),b=(N,D=!1)=>{x+=13.7,_=0;const O=Math.sin(x*71.3)*43758.5453,H=O-Math.floor(O),Z=Math.sin(x*19.7+5.1)*43758.5453,q=Z-Math.floor(Z),$=(-.78+H*1.56)*Math.PI,X=250+q*310,V=(N?N.x*.35:0)+Math.sin($)*X,et=(N?N.z*.35:0)-Math.cos($)*X,it=new E(V+(H-.5)*34,165+q*65,et+(q-.5)*28),J=new E(V,-11.5,et);v.regenerateBolt(it,J,x),v.mesh.visible=!0,y.set(V,68,et).normalize(),a.uLightningDir.value.copy(y),m.position.set(V*.25,32,et*.25);const st=G.clamp(Math.sin($),-.85,.85);g.playStrike(X,st,D?1:.65+.35*f)},A=new Qp(o.hemiSkyColor,o.hemiGroundColor,o.hemiIntensity);t.add(A);const T=new tc(o.horizonAntiSunColor,o.mistDensity);t.fog=T;const S=new Ya,M=new Oe(new qa(50,32,20),l);S.add(M);const P=new Bl(i);P.compileEquirectangularShader();let C=null,R=o.sunAzimuthDeg;function F(N){a.uIsEnvBake.value=1;const D=P.fromScene(S,.015);a.uIsEnvBake.value=0,C&&C.dispose(),C=D,N.environment=C.texture}function I(N,D){const O=G.degToRad(G.clamp(N,1.5,82)),H=G.degToRad(D);n.set(Math.cos(O)*Math.sin(H),Math.sin(O),Math.cos(O)*Math.cos(H)).normalize(),a.uSunDir.value.copy(n),h.position.copy(h.target.position).addScaledVector(n,20)}const k={skyMesh:c,sunLight:h,rimLight:d,hemiLight:A,sunDirection:n,sunColor:s,activePreset:e,sharedUniforms:a,applyPreset(N,D,O){const H=ss[N];k.activePreset=N,R=H.sunAzimuthDeg,a.uZenithColor.value.setHex(H.zenithColor),a.uHorizonSunColor.value.setHex(H.horizonSunColor),a.uHorizonAntiColor.value.setHex(H.horizonAntiSunColor),a.uMieColor.value.setHex(H.mieHaloColor),a.uMieStrength.value=H.mieStrength,a.uMieExponent.value=H.mieExponent,a.uCloudDarkColor.value.setHex(H.cloudDarkColor),a.uCloudLitColor.value.setHex(H.cloudLitColor),a.uCloudCoverage.value=H.cloudCoverage,a.uMistDensity.value=H.mistDensity,a.uRainIntensity.value=H.rainIntensity,a.uWindStrength.value=H.windStrength,f=H.lightningFrequency,w=N==="stormy-squall"?.65:3.2,a.uNightFactor.value=H.nightFactor,a.uAuroraIntensity.value=H.auroraIntensity,a.uWaterDeepColor.value.setHex(H.waterDeepColor),a.uWaterShallowColor.value.setHex(H.waterShallowColor),a.uGlitterIntensity.value=H.glitterIntensity,s.setHex(H.sunLightColor),a.uSunColor.value.copy(s),h.color.copy(s),h.intensity=H.sunLightIntensity,d.color.setHex(H.rimLightColor),d.intensity=H.rimLightIntensity,A.color.setHex(H.hemiSkyColor),A.groundColor.setHex(H.hemiGroundColor),A.intensity=H.hemiIntensity,T.color.setHex(H.horizonAntiSunColor).lerp(new Bt(H.horizonSunColor),.35),T.density=H.mistDensity,D.toneMappingExposure=H.exposure,I(H.sunElevationDeg,H.sunAzimuthDeg),F(O)},blendPresets:(()=>{const N=new Bt,D=new Bt,O=new Bt;let H=-10,Z=!1;const q=(X,V,et,it)=>{N.setHex(V),D.setHex(et),X.copy(N).lerp(D,it)},$=(X,V,et)=>{let it=(V-X+540)%360-180;return it<-180&&(it+=360),X+it*et};return(X,V,et,it,J,st=0,Y=0)=>{const j=G.clamp(et,0,1),ut=ss[X],tt=ss[V];k.activePreset=j<.5?X:V,q(a.uZenithColor.value,ut.zenithColor,tt.zenithColor,j),q(a.uHorizonSunColor.value,ut.horizonSunColor,tt.horizonSunColor,j),q(a.uHorizonAntiColor.value,ut.horizonAntiSunColor,tt.horizonAntiSunColor,j),q(a.uMieColor.value,ut.mieHaloColor,tt.mieHaloColor,j),a.uMieStrength.value=G.lerp(ut.mieStrength,tt.mieStrength,j),a.uMieExponent.value=G.lerp(ut.mieExponent,tt.mieExponent,j),q(a.uCloudDarkColor.value,ut.cloudDarkColor,tt.cloudDarkColor,j),q(a.uCloudLitColor.value,ut.cloudLitColor,tt.cloudLitColor,j),a.uCloudCoverage.value=G.lerp(ut.cloudCoverage,tt.cloudCoverage,j);const z=G.lerp(ut.mistDensity,tt.mistDensity,j);a.uMistDensity.value=z,a.uRainIntensity.value=G.lerp(ut.rainIntensity,tt.rainIntensity,j),a.uWindStrength.value=G.lerp(ut.windStrength,tt.windStrength,j);const _t=G.lerp(ut.lightningFrequency,tt.lightningFrequency,j);_t>.12&&f<=.12&&w>2.2&&(w=1.4),f=_t,a.uNightFactor.value=G.lerp(ut.nightFactor,tt.nightFactor,j),a.uAuroraIntensity.value=G.lerp(ut.auroraIntensity,tt.auroraIntensity,j),q(a.uWaterDeepColor.value,ut.waterDeepColor,tt.waterDeepColor,j),q(a.uWaterShallowColor.value,ut.waterShallowColor,tt.waterShallowColor,j),a.uGlitterIntensity.value=G.lerp(ut.glitterIntensity,tt.glitterIntensity,j),q(s,ut.sunLightColor,tt.sunLightColor,j),a.uSunColor.value.copy(s),h.color.copy(s),h.intensity=G.lerp(ut.sunLightIntensity,tt.sunLightIntensity,j),q(d.color,ut.rimLightColor,tt.rimLightColor,j),d.intensity=G.lerp(ut.rimLightIntensity,tt.rimLightIntensity,j),q(A.color,ut.hemiSkyColor,tt.hemiSkyColor,j),q(A.groundColor,ut.hemiGroundColor,tt.hemiGroundColor,j),A.intensity=G.lerp(ut.hemiIntensity,tt.hemiIntensity,j),q(O,ut.horizonSunColor,tt.horizonSunColor,j),T.color.copy(a.uHorizonAntiColor.value).lerp(O,.35),T.density=z,it.toneMappingExposure=G.lerp(ut.exposure,tt.exposure,j);const xt=G.lerp(ut.sunElevationDeg,tt.sunElevationDeg,j)+st,Ct=$(ut.sunAzimuthDeg,tt.sunAzimuthDeg,j)+Y;R=Ct,I(xt,Ct);const Tt=typeof performance<"u"?performance.now()*.001:p,Nt=(j<=.001||j>=.999)&&Math.abs(st)<.05;Tt-H>.45||Nt&&!Z?(H=Tt,Z=Nt,F(J)):Nt||(Z=!1)}})(),setAudioMuted(N){g.muted=N},isAudioMuted(){return g.muted},setMistDensity(N,D){const O=G.clamp(N,5e-4,.0075);a.uMistDensity.value=O,T.density=O},setRainIntensity(N){a.uRainIntensity.value=G.clamp(N,0,1)},setWindStrength(N){a.uWindStrength.value=G.clamp(N,0,1.25)},setLightningFrequency(N){f=G.clamp(N,0,1),f>.05&&w>4&&(w=1.1)},triggerLightningStrike(N){b(N,!0)},setSunElevation(N,D,O){I(N,R),F(O)},update(N,D,O){const H=Math.min(.1,Math.max(0,N-p));p=N,a.uTime.value=N;const Z=-.58+Math.sin(N*.085)*.16;if(a.uWindDir.value.set(Math.cos(Z),Math.sin(Z)),f>.015&&(w-=H,w<=0)){b(O,!1);const q=G.lerp(13.5,2.2,f),$=G.lerp(14,3.8,f)*Math.abs(Math.sin(N*19.7+x));w=q+$}if(_<.65){_+=H;const q=Math.exp(-Math.pow((_-.025)/.028,2)),$=Math.exp(-Math.pow((_-.115)/.032,2))*.92,X=Math.exp(-Math.pow((_-.195)/.022,2))*.55,V=Math.exp(-_*7.2)*.34,et=G.clamp(Math.max(q,$,X)+V,0,1.25);a.uLightningFlash.value=et,v.uniforms.uBoltAlpha.value=G.clamp(et*1.05,0,1),m.intensity=et*8.2}else v.mesh.visible&&(a.uLightningFlash.value=0,v.uniforms.uBoltAlpha.value=0,m.intensity=0,v.mesh.visible=!1);O&&c.position.copy(O),D&&(h.target.position.copy(D),h.position.copy(D).addScaledVector(n,20),h.target.updateMatrixWorld())}};return k.applyPreset(e,i,t),k}const no={waveAmplitude:.68,waveSpeed:.98,seaChoppiness:.48},ox=`
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
`,ax=`
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
`;function rx(i=5600,t=300,e=256){const n=(t+1)*(e+1),s=new Float32Array(n*3),o=new Float32Array(n*2);for(let c=0;c<=t;c++){const h=c/t,u=i*Math.pow(h,2.3);for(let d=0;d<=e;d++){const v=d/e*Math.PI*2,g=Math.cos(v)*u,f=Math.sin(v)*u,p=c*(e+1)+d;s[p*3]=g,s[p*3+1]=0,s[p*3+2]=f,o[p*2]=g*.02,o[p*2+1]=f*.02}}const a=new Uint32Array(t*e*6);let r=0;for(let c=0;c<t;c++)for(let h=0;h<e;h++){const u=c*(e+1)+h,d=(c+1)*(e+1)+h,m=(c+1)*(e+1)+(h+1),v=c*(e+1)+(h+1);a[r++]=u,a[r++]=m,a[r++]=d,a[r++]=u,a[r++]=v,a[r++]=m}const l=new Zt;return l.setAttribute("position",new Q(s,3)),l.setAttribute("uv",new Q(o,2)),l.setIndex(new Q(a,1)),l.computeBoundingSphere(),l}function lx(i,t,e){const n={...no,...e},s=[];for(let c=0;c<24;c++){const h=i[c];h?s.push(new Ge(h.x,h.z,h.radius,h.boost??0)):s.push(new Ge(9999,9999,0,0))}const o={...t,uWaveAmp:{value:n.waveAmplitude},uWaveSpeed:{value:n.waveSpeed},uChoppiness:{value:n.seaChoppiness},uStackCenters:{value:s}},a=rx(5600,300,256),r=new He({name:"NorthSeaPhysicalOcean",vertexShader:ox,fragmentShader:ax,uniforms:o,transparent:!0,depthWrite:!0}),l=new Oe(a,r);return l.position.y=-11.5,l.renderOrder=2,l.frustumCulled=!1,l.name="NorthSeaOcean",{mesh:l,params:n,setOceanParams(c){Object.assign(n,c),o.uWaveAmp.value=n.waveAmplitude,o.uWaveSpeed.value=n.waveSpeed,o.uChoppiness.value=n.seaChoppiness},update(c){o.uTime.value=c}}}const _e=-11.5,cx=-25.5,Vi=-44;function hx(i){return i-Math.floor(i)}function nt(i,t){return hx(Math.sin(i*127.1+t*311.7)*43758.5453123)}function ju(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,a=s*s*s*(s*(s*6-15)+10),r=o*o*o*(o*(o*6-15)+10),l=nt(e,n),c=nt(e+1,n),h=nt(e,n+1),u=nt(e+1,n+1);return l+(c-l)*a+(h-l)*r+(l-c-h+u)*a*r}function se(i,t,e=4){let n=0,s=.5,o=1;for(let a=0;a<e;a++)n+=s*ju(i*o,t*o),o*=2.03,s*=.5;return n}function ee(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function tn(i,t,e=2){let n=0,s=1,o=.56,a=1,r=0;for(let l=0;l<e;l++){const c=ju(i*a,t*a)*2-1,h=1-(Math.sqrt(c*c+.068)-.261)/.78,u=Math.max(0,Math.min(1,h));n+=o*u*s,r+=o,s=.55+.45*u,a*=2.03,o*=.46}return n/Math.max(1e-4,r)}function jo(i,t,e,n,s=999){if(i<=.4)return i;const o=(i+t)/e,a=Math.floor(o),r=o-a,l=.38*Math.pow(r,1.28)+.62*ee(.64,.96,r),c=(a+l)*e-t,h=1-ee(s*.74,s*.95,i);return G.lerp(i,c,n*h)}function ar(i,t,e,n,s,o){const a=Math.max(0,Math.min(1,e)),r=Math.sin(a*Math.PI),l=se(n*.052+o*1.3,s*.052-o*1.7,3)-.5,c=tn(n*.115-o*2.1,s*.115+o*1.4,2)-.48,h=tn((n*.86+s*.5)*.17+o*2.9,(s*.86-n*.5)*.14-o,2)-.48,u=se(n*.24+o*.9,s*.24-o*2.3,2)-.5,d=G.clamp(a-(l*.4+c*.28+h*.18+u*.12)*r,0,1),m=ee(.24,.72,se(n*.058+o*1.7,s*.058-o*1.3,2)),v=.36+.26*(se(n*.085-o,s*.085+o,2)-.5),g=ee(0,.38,d),f=ee(.58,1,d),p=g*v+f*(1-v),w=Math.pow(d,.78),_=G.lerp(w,p,m*.82),x=tn(n*.14+o*2.1,s*.14-o*1.9,2),y=se(n*.27-o,s*.27+o*2.3,2)-.5,b=((x-.48)*3.4+y*2.05+h*1.65)*r,A=se(n*.095+o*3.1,s*.095-o*2.7,3),T=ee(.42,.78,A)*ee(.62,.86,a)*(1-ee(.95,1,a)),S=_e+.25+(A-.5)*1.85;let M=G.lerp(i,t,_)+b;return M=G.lerp(M,Math.max(M,S),T*.82),Math.min(i+.04,Math.max(t-1.2,M))}function dc(i,t,e,n){const s=(tn(i*.16+n,t*.16-n,2)-.48)*.68+(se(i*.32-n*1.3,t*.32+n*.7,2)-.5)*.28,o=i*.024-t*.019+(se(i*.045+n,t*.045,2)-.5)*1.4,a=(e+o)/2.65,r=a-Math.floor(a),l=(ee(.1,.36,r)-r)*.34,c=Math.exp(-Math.pow((e-(_e-.45))/1.9,2))*.62;return{radialOffset:s+l+c,verticalLedgeOffset:l*.42}}const di={position:new E(4.45,0,.22),yaw:-.14},pi={position:new E(-4.45,0,-.22),yaw:.16};function Bi(i,t){const e=Math.hypot((i-4.45)/2.45,(t-.22)/1.95),n=Math.hypot((i+4.45)/2.45,(t+.22)/1.95),s=Math.min(e,n),o=ee(.84,1.32,s),a=ee(.72,1.18,s),r=(se(i*.065+3.1,t*.065-2.4,3)-.5)*5.6+(tn(i*.14-1.7,t*.14+4.3,2)-.48)*2.3,l=(se(i*.065-5.2,t*.065+1.9,3)-.5)*4.8+(tn(i*.15+2.9,t*.15-3.1,2)-.48)*2.1,c=i+a*r,h=t+a*l,u=Math.atan2(h+4.2,c),d=t>1.2?.66:t<-8?1.52:1+(-t+1.2)*.046,m=1+.19*Math.sin(u*2-.42)+.14*Math.sin(u*3+.72)+.1*Math.cos(u*5-1.15)+.06*Math.sin(u*7+.4),v=c/(15.8*m),g=(h+4.2)/(11.2*d*m);let f=Math.sqrt(v*v+g*g);if(t>.6){const O=Math.exp(-Math.pow((i-4.85)/2.65,2)-Math.pow((t-3.9)/3.4,2))*.21,H=Math.exp(-Math.pow((i+5.15)/2.75,2)-Math.pow((t-3.6)/3.2,2))*.19,Z=Math.exp(-Math.pow((i-.35)/1.75,2)-Math.pow((t-2.9)/2.8,2))*.17,q=Math.exp(-Math.pow((i-10.6)/2.4,2)-Math.pow((t-2.2)/3.2,2))*.18,$=Math.exp(-Math.pow((i+9.2)/1.9,2)-Math.pow((t-2.4)/2.9,2))*.15,X=(tn(i*.26+7.4,t*.26-3.8,2)-.48)*.11*ee(1.1,2.4,t);f+=-O-H+Z-q+$+X}let p=0;if(t<-3.5){const O=(c+17.5)/15.4,H=(h+25)/18.8,Z=Math.sqrt(O*O+H*H),q=Z*(.92+.16*se(i*.065+2.2,t*.065-1.4,3)),$=Math.max(0,1-Math.abs(f-q)/.52);f=Math.min(f,q)-.11*$*$;const X=Math.min(1,Z/.98*(Z/.98)),V=Math.pow(Math.max(0,1-X),1.18),et=G.clamp(.62-O*.38-H*.22,.26,1.12),it=V*et*(7.8+2.4*tn(i*.05+5.1,t*.05-3.2,2));p=jo(it,i*.04-t*.03,3.6,.52)}if(i>9&&t<-6.5){const O=(i-18.2)/6.2,H=(t+19.2)/7.2,Z=Math.exp(-(O*O+H*H))*.36;f+=Z}const w=1-.78*ee(-.4,4.2,t)*(1-ee(4.2,11.8,Math.abs(i))),_=((se(i*.095+4.2,t*.095-1.7,3)-.47)*1.35+(tn(i*.15-2.3,t*.15+6.1,2)-.48)*.52)*o*w,x=Math.max(0,(-t-6.2)/25),y=Math.pow(Math.min(1.22,x),1.32)/(1+.22*x*x),b=ee(39,9,Math.abs(i+3.2)),A=tn(i*.046+1.8,t*.042-2.7,2),T=y*b*(7.4+6.4*A+(se(i*.075-3.4,t*.075+1.9,2)-.5)*2.8),S=jo(T,i*.045+t*.028,4,.56,13.5),M=_+Math.max(S,p*o),C=.76+(.13*(tn(i*.12+3.7,t*.12-2.1,2)-.48)+.09*(se(Math.cos(u)*2.6+2.1,Math.sin(u)*2.6-1.3,3)-.5))*a;if(f<=C)return M;const R=1.48+.24*(se(Math.cos(u)*2.2-4.1,Math.sin(u)*2.2+3.3,2)-.5),F=ee(C,R,f),I=ee(R-.08,R+.78,f),k=se(i*.08+5.7,t*.08-4.3,2),N=_e-1.35+ee(.45,.85,k)*1.95,D=ar(M,N,F,i,t,7.3);return G.lerp(D,Vi,I)}function ps(i){const t=Math.cos(i.rotRad),e=Math.sin(i.rotRad),n=i.summitOffset?.dx??i.rx*.24*Math.sin(i.seed),s=i.summitOffset?.dz??i.rz*-.2*Math.cos(i.seed*1.3),o=i.seed*1.37,a=Math.cos(o),r=Math.sin(o);return(l,c)=>{const h=l-i.cx,u=c-i.cz,d=h*t-u*e,m=h*e+u*t,v=d+(se(d*.042+i.seed,m*.042-i.seed,3)-.5)*(i.rx*.48)+(tn(d*.095+i.seed,m*.095,2)-.48)*(i.rx*.18),g=m+(se(d*.042-i.seed,m*.042+i.seed,3)-.5)*(i.rz*.48)+(tn(d*.095-i.seed,m*.095+2.1,2)-.48)*(i.rz*.18),f=Math.atan2(g,v),p=1+.21*Math.sin(f*2+i.seed)+.15*Math.cos(f*3-i.seed*1.5)+.1*Math.sin(f*5+.9)+.06*Math.cos(f*7-i.seed*.6);let _=Math.sqrt(Math.pow(v/(i.rx*p),2)+Math.pow(g/(i.rz*p),2));const x=(v-n)*-r+(g-s)*a,y=(v-n)*a+(g-s)*r,b=Math.pow(x/(i.rx*p*1.28),2)+Math.pow(y/(i.rz*p*.88),2),A=(d*a+m*r)/Math.max(8,i.rx),T=G.clamp(.62+.38*A,.3,1.12),S=Math.pow(Math.max(0,1-Math.min(1,b)),1.38),M=1/(1+1.85*b*b);let P=i.peakY*(.2+.5*S*T+.24*M);if(i.secondaryLobe){const J=i.secondaryLobe,st=v-J.dx,Y=g-J.dz,j=Math.atan2(Y,st),ut=1+.18*Math.cos(j*2-i.seed)+.12*Math.sin(j*3+i.seed),tt=Math.sqrt(Math.pow(st/(J.rx*ut),2)+Math.pow(Y/(J.rz*ut),2)),z=J.lowSaddle?.44:.38,_t=Math.max(0,Math.min(1,.5+.5*(tt-_)/z));_=tt*(1-_t)+_*_t-z*_t*(1-_t);const xt=i.peakY*Math.min(J.peakScale,1.06),Ct=Math.min(1,tt*tt),Tt=Math.pow(Math.max(0,1-Ct),1.35),Nt=xt*(.22+.68*Tt),lt=J.lowSaddle?Math.sin(_t*Math.PI)*.44:Math.sin(_t*Math.PI)*.22;P=G.lerp(Nt,P,_t)*(1-lt)}const C=1-ee(.56,1.02,_),R=tn(d*.032+i.seed*1.3,m*.038-i.seed*.9,2),F=se(d*.045-i.seed*.7,m*.045+i.seed*1.4,3),I=P+(R-.48)*(i.peakY*.18)*(.35+.65*C)+(F-.48)*(i.peakY*.12)*C;let k=jo(I,d*.032*a+m*.032*r,Math.max(3.8,i.peakY*.22),.48,i.peakY),N=0;if(i.carveRiverToEast&&d>4.2){const J=Math.sin(d*.11+.35)*1.85,st=Math.abs(m-J),Y=ee(5.2,8.8,d)*(1-ee(.95,3.8,st));if(Y>.001){const tt=8.35-ee(5.5,10.4,d)*.75;k=G.lerp(k,Math.min(k,tt),Y)}const j=(se(d*.18+3.1,m*.18-1.9,2)-.5)*1.35,ut=Math.exp(-Math.pow((m-J+j*.35)/7.8,2));if(ut>.02&&d>7.2){const tt=10.55-1.15*ut+j*.35;N=ee(tt-.6,tt+.9,d)*ut,_=Math.max(_,.72+ee(tt-.2,tt+1.15,d)*.72*ut)}}const O=.66+(.13*(tn(d*.1+i.seed,m*.1-i.seed,2)-.48)+.1*(se(Math.cos(f)*2.5+i.seed,Math.sin(f)*2.5-i.seed,3)-.5))*(1-N*.65);if(_<=O)return k;const H=1.06+.18*(se(Math.cos(f)*2.3-i.seed,Math.sin(f)*2.3+i.seed,2)-.5),Z=G.lerp(H,O+.09,N),q=ee(O,Z,_),$=ee(G.lerp(H-.06,O+.07,N),G.lerp(H+.34,O+.24,N),_),X=se(l*.075+i.seed,c*.075-i.seed,2),V=_e-1.35+ee(.44,.84,X)*1.95,et=G.lerp(V,_e-5.8,N),it=N>.35?G.lerp(k,et,Math.pow(G.clamp(q+(se(l*.16,c*.16,2)-.5)*.18*Math.sin(q*Math.PI),0,1),.68)):ar(k,et,q,l,c,i.seed);return G.lerp(it,Vi,$)}}function pc(i){return(t,e)=>{const n=t-i.cx,s=e-i.cz,o=n+(se(n*.038+i.seed,s*.038-i.seed,3)-.5)*(i.ringRadius*.34)+(tn(n*.085+i.seed,s*.085,2)-.48)*3.8,a=s+(se(n*.038-i.seed,s*.038+i.seed,3)-.5)*(i.ringRadius*.34)+(tn(n*.085-i.seed,s*.085+1.7,2)-.48)*3.8,r=Math.hypot(o,a),l=Math.atan2(a,o),c=i.openAngleRad+Math.PI;let h=l-c;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const u=Math.abs(h),d=1-ee(i.arcHalfSpanRad*.72,i.arcHalfSpanRad*1.08,u),m=i.ringHalfWidth*(.72+.42*d+.18*Math.sin(h*2.6+i.seed)),v=r-i.ringRadius*1.06,g=v>=0?m*.72:m*1.28,p=Math.abs(v)/Math.max(3.5,g)+(1-d)*1.35,w=.72+.2*Math.cos(h*2.2+i.seed*.7)+.11*Math.sin(h*3.6-i.seed),_=tn(n*.036+i.seed,s*.036-i.seed,2),x=Math.min(1,p/.94*(p/.94)),y=v<0?Math.pow(Math.max(0,1-x),1.45):Math.pow(Math.max(0,1-x),1.05),b=i.peakY*(.24+.72*y)*(.58+.42*d)*w+(_-.48)*(i.peakY*.16)*d,A=jo(b,n*.03-s*.025,Math.max(3.6,i.peakY*.22),.46,i.peakY),T=(1-ee(i.ringRadius*.55,i.ringRadius*1.15,r))*.65,S=G.lerp(Vi,-16.2,T),M=.54+.13*(tn(n*.095+i.seed,s*.095-i.seed,2)-.48)+.08*(se(n*.06-i.seed,s*.06+i.seed,2)-.5);if(p<=M)return A;const P=1.06+.16*(se(Math.cos(l)*2.4+i.seed,Math.sin(l)*2.4,2)-.5),C=ee(M,P,p),R=ee(P-.06,P+.34,p),F=se(t*.08+i.seed,e*.08-i.seed,2),I=_e-1.35+ee(.45,.84,F)*1.9,k=ar(A,I,C,t,e,i.seed);return G.lerp(k,S,R)}}const ki=ps({cx:-66,cz:-32,rx:21.5,rz:25,peakY:18.4,summitOffset:{dx:-3.5,dz:-7.5},seed:5.7,rotRad:.18,secondaryLobe:{dx:-24.5,dz:-11.5,rx:17.5,rz:19.5,peakScale:1.24},carveRiverToEast:!0}),fc=pc({cx:88,cz:36,ringRadius:28,ringHalfWidth:12.6,peakY:16.8,openAngleRad:-2.45,arcHalfSpanRad:1.92,seed:22.9}),mc=ps({cx:88,cz:-56,rx:25,rz:31.5,peakY:22.4,summitOffset:{dx:4.2,dz:-6},seed:14.3,rotRad:-.34,secondaryLobe:{dx:-18,dz:33.5,rx:15,rz:17,peakScale:.74,lowSaddle:!0}}),Ku=ps({cx:-124,cz:-86,rx:33,rz:24.5,peakY:25.5,summitOffset:{dx:-7.5,dz:3},seed:37.8,rotRad:.42,secondaryLobe:{dx:21,dz:-10.5,rx:16.5,rz:15,peakScale:.72}}),Qu=ps({cx:-42,cz:-96,rx:17.5,rz:19.5,peakY:20.2,seed:31.6,rotRad:-.28,secondaryLobe:{dx:-19.5,dz:14,rx:12.5,rz:14,peakScale:.74}}),Ju=ps({cx:36,cz:-108,rx:19.5,rz:22,peakY:22.8,seed:44.1,rotRad:.52,secondaryLobe:{dx:18.5,dz:-14.5,rx:13.5,rz:15,peakScale:.78}}),td=pc({cx:-144,cz:78,ringRadius:38,ringHalfWidth:15.5,peakY:23.8,openAngleRad:.62,arcHalfSpanRad:1.84,seed:58.4}),ed=ps({cx:168,cz:122,rx:38,rz:32,peakY:29.5,seed:71.2,rotRad:-.48,secondaryLobe:{dx:-36,dz:-18,rx:24,rz:22,peakScale:.76}}),ux=ps({cx:-206,cz:-96,rx:42,rz:46,peakY:36.5,seed:83.9,rotRad:-.19,secondaryLobe:{dx:28,dz:34,rx:23,rz:25,peakScale:.7}}),dx=pc({cx:-8,cz:-222,ringRadius:52,ringHalfWidth:19.5,peakY:33.5,openAngleRad:1.52,arcHalfSpanRad:1.8,seed:96.3}),px=ps({cx:-18,cz:236,rx:34,rz:26,peakY:25.5,seed:109.7,rotRad:.15,secondaryLobe:{dx:38,dz:-12,rx:22,rz:18,peakScale:.78}}),Wl=[{name:"WestWaterfallDoubleIsland",centerX:-74,centerZ:-36,spanX:112,spanZ:102,gridSegs:168,hasFlora:!0,evalHeight:ki},{name:"StarboardCrescentLagoonAtoll",centerX:88,centerZ:36,spanX:124,spanZ:124,gridSegs:164,hasFlora:!0,evalHeight:fc},{name:"EastSerpentineTomboloIsland",centerX:84,centerZ:-46,spanX:118,spanZ:134,gridSegs:156,hasFlora:!0,evalHeight:mc},{name:"WestTraelanipaTableIsland",centerX:-124,centerZ:-86,spanX:116,spanZ:102,gridSegs:132,hasFlora:!0,evalHeight:Ku},{name:"NorthWestHolmPair",centerX:-48,centerZ:-92,spanX:92,spanZ:86,gridSegs:112,hasFlora:!0,evalHeight:Qu},{name:"NorthEastHeadlandTable",centerX:42,centerZ:-112,spanX:94,spanZ:90,gridSegs:112,hasFlora:!1,evalHeight:Ju},{name:"SouthWestBrokenCrescent",centerX:-144,centerZ:78,spanX:156,spanZ:152,gridSegs:120,hasFlora:!1,evalHeight:td},{name:"SouthEastTableSound",centerX:156,centerZ:116,spanX:168,spanZ:152,gridSegs:112,hasFlora:!1,evalHeight:ed},{name:"FarWestCliffMassif",centerX:-198,centerZ:-88,spanX:174,spanZ:168,gridSegs:108,hasFlora:!1,evalHeight:ux},{name:"NorthernSoundCrescentIsland",centerX:-8,centerZ:-222,spanX:196,spanZ:166,gridSegs:112,hasFlora:!1,evalHeight:dx},{name:"SouthHorizonHolms",centerX:-4,centerZ:232,spanX:166,spanZ:122,gridSegs:100,hasFlora:!1,evalHeight:px}],ti=[{x:43.5,z:14.5,rx:4.8,rz:4.2,topY:4.6,topSlopeX:-.08,rotY:.45,seed:14.2},{x:63,z:50.5,rx:7.5,rz:5.2,topY:-8.2,topSlopeX:.05,rotY:-.35,seed:23.8},{x:27.5,z:-10.5,rx:5.4,rz:4.4,topY:1.8,topSlopeX:.07,rotY:.22,seed:31.4},{x:-37.5,z:-22,rx:6.2,rz:4.8,topY:2.6,topSlopeX:-.09,rotY:-.52,seed:42.7},{x:-46.5,z:-15.5,rx:5.2,rz:4.2,topY:-6.8,topSlopeX:-.06,rotY:.61,seed:55.3},{x:-106,z:-49,rx:7.8,rz:6,topY:6.4,topSlopeX:-.1,rotY:.18,seed:68.9},{x:57.5,z:-22.5,rx:6.4,rz:5,topY:-5.4,topSlopeX:.08,rotY:-.44,seed:79.1},{x:-21.5,z:-79,rx:7.2,rz:5.8,topY:5.2,topSlopeX:-.07,rotY:.33,seed:92.6}],As=[{x:59.5,z:23,rotY:-.58,halfLength:14.5,halfThickness:4.6,plateauTopY:6.8,openingHalfSpan:5.4,vaultCrownY:.4,seed:17.3},{x:-95.5,z:-22.5,rotY:.88,halfLength:13,halfThickness:4.4,plateauTopY:6.2,openingHalfSpan:4.8,vaultCrownY:-.2,seed:49.8}];function Ti(i,t){let e=Vi;Math.abs(i)<54&&t>-66&&t<40&&(e=Math.max(e,Bi(i,t)));for(const n of Wl)Math.abs(i-n.centerX)<=n.spanX*.52&&Math.abs(t-n.centerZ)<=n.spanZ*.52&&(e=Math.max(e,n.evalHeight(i,t)));for(const n of As)Math.hypot(i-n.x,t-n.z)<n.halfLength+5&&(e=Math.max(e,n.plateauTopY+1));for(const n of ti){const s=Math.max(n.rx,n.rz),o=Math.hypot(i-n.x,t-n.z);if(o<s*1.45){const a=1-ee(.65,1.45,o/s);e=Math.max(e,Vi+(n.topY-Vi)*a)}}return e}function zh(i,t,e){i.computeVertexNormals();const n=i.getAttribute("position"),s=i.getAttribute("normal");for(let o=0;o<n.count;o++){const a=n.getX(o),r=n.getY(o),l=n.getZ(o),c=s.getX(o),h=s.getY(o),u=s.getZ(o);if(h>=.72||r<-23.5)continue;let d=1;if(e){const x=Math.hypot((a-4.45)/2.75,(l-.22)/2.25),y=Math.hypot((a+4.45)/2.75,(l+.22)/2.25);if(d=ee(.88,1.32,Math.min(x,y)),d<=.001)continue}const m=ee(.7,.22,h)*ee(-23.5,-16.5,r)*d;if(m<=.002)continue;const v=Math.hypot(c,u);if(v<1e-4)continue;const g=c/v,f=u/v,p=dc(a,l,r,t),w=G.clamp(p.radialOffset*m,-.13,.19),_=G.clamp(p.verticalLedgeOffset*m,-.22,.22);n.setXYZ(o,a+g*w,r+_,l+f*w)}i.computeVertexNormals()}function fx(i){const l=new Float32Array(28257),c=new Float32Array(9419*2);for(let v=0;v<=128;v++){const g=v/128,f=(g-.5)*2*i.halfLength,p=g<.5?-1:1,w=Math.min(g,1-g),_=Math.sin(g*Math.PI*1.65+i.seed)*2.65+Math.cos(g*Math.PI*2.9-i.seed*.7)*1.25+(se(g*4.2+i.seed,1.7,3)-.5)*2.35,x=ee(0,.24,w),y=x+.085*Math.sin(x*Math.PI*3+i.seed*.8)*Math.sin(x*Math.PI),b=G.clamp(y,0,1),A=ee(0,.035,w),T=(.5-g)*2.2+Math.sin(g*Math.PI)*.85,S=(se(f*.09+i.seed,_*.09,3)-.5)*1.35+(tn(f*.08+i.seed,2.3,2)-.48)*.85,M=i.plateauTopY+T+S,P=G.lerp(_e-18.5,M,b),C=f-i.openingHalfSpan*.06,R=Math.abs(C)/i.openingHalfSpan,F=1-ee(.74,1.18,R),I=Math.pow(Math.max(0,1-Math.min(1,R*R)),.88),k=(se(f*.35-i.seed,2.1,3)-.5)*.95,N=_e-5.2+(i.vaultCrownY+.35-(_e-5.2))*I+k,D=G.lerp(Vi,N,F),O=1+.48*(1-F)+.34*Math.sin(g*Math.PI*3.6+i.seed*1.3)+.3*(se(g*5.6+i.seed,6.2,3)-.5),H=i.halfThickness*O*(.28+.72*Math.pow(b,.65))*A;for(let Z=0;Z<=72;Z++){const q=Z/72,$=q*Math.PI*2,X=Math.sin($),V=Math.cos($),et=Math.sign(X)*Math.pow(Math.abs(X),.78),it=.5+.5*Math.sign(V)*Math.pow(Math.abs(V),.7),J=Math.pow(Math.abs(X),.88)*A,st=(.32-.42*et)*Math.max(0,V)*b;let Y=G.lerp(D,P,it)+st;V<-.22&&F>.05&&(Y+=(-V-.22)*(1-et*et)*1.15*F);const j=X>=0?i.seed+11.7:i.seed-19.3,ut=(se(f*.13+j,Y*.1,3)-.48)*3.15+(tn(f*.21-j,Y*.085+f*.04,2)-.48)*1.95+Math.sin(f*.36+Y*.18+j)*.65,tt=Math.sin(Y*1.05+f*.07+j)*.52+(Math.abs((Y*.28+10)%1-.5)-.25)*.75,z=Math.exp(-Math.pow((Y-(_e+.15))/2.3,2))*(1.95+1.25*se(f*.18+j,3.7,2))*(1-F*.72)*A,_t=dc(f,_+et*5,Y,j),xt=J*ee(-24,-14.5,Y),Ct=Math.max(0,H+z+(ut+tt+_t.radialOffset*1.05)*xt),Tt=(1-ee(.02,.3,w))*A,Nt=Math.pow(Math.max(0,1-Math.min(1,et*et*.85)),.75),lt=1-.55*ee(_e-1,i.plateauTopY,Y),W=p*Tt*(3.8*Nt*lt+(se(Y*.15+j,et*2.1+p*3.1,3)-.42)*2.85+(tn(et*2.8-j,Y*.12,2)-.45)*1.75),L=f+W+(se(Y*.14+j,g*4.8,3)-.5)*1.35*xt,rt=_*A+et*Ct,dt=Y+_t.verticalLedgeOffset*.68*J*A,yt=v*73+Z;l[yt*3]=L,l[yt*3+1]=dt,l[yt*3+2]=rt,c[yt*2]=g*3.8,c[yt*2+1]=q*2.6}}const h=9417,u=9418;l[h*3]=-i.halfLength,l[h*3+1]=_e-23,l[h*3+2]=0,c[h*2]=0,c[h*2+1]=.5,l[u*3]=i.halfLength,l[u*3+1]=_e-23,l[u*3+2]=0,c[u*2]=3.8,c[u*2+1]=.5;const d=[];for(let v=0;v<128;v++)for(let g=0;g<72;g++){const f=v*73+g,p=(v+1)*73+g,w=(v+1)*73+(g+1),_=v*73+(g+1);d.push(f,_,w,f,w,p)}for(let v=0;v<72;v++){d.push(h,v+1,v);const g=9344;d.push(u,g+v,g+v+1)}const m=new Zt;return m.setAttribute("position",new Q(l,3)),m.setAttribute("uv",new Q(c,2)),m.setIndex(d),m.computeVertexNormals(),m}function nd(i,t,e,n,s){const o=1+.1*Math.cos(e*2+s.seed*.7)+.07*Math.sin(e*4-s.seed*1.1+n*.6)+.04*Math.cos(e*6+s.seed*1.9),a=.86+.26*se(i*1.55+s.seed,t*1.55+n*2.1,3);return{lx:i*s.rx*o*a,lz:t*s.rz*o*a}}function Ha(i,t,e,n){const o=n.topY>_e+4?.58:.38,a=Math.sin(e*Math.PI*.5)*o,r=(se(i*.16+n.seed,t*.16-n.seed,3)-.5)*.82+(se(i*.42-n.seed*.6,t*.42+n.seed*.6,2)-.5)*.28,l=(i-n.x)*n.topSlopeX+(t-n.z)*(n.topSlopeX*.45);return n.topY+l+r+a}function mx(i){const r=new Float32Array(6912),l=new Float32Array(2304*2),c=Math.cos(i.rotY),h=Math.sin(i.rotY);for(let f=0;f<=46;f++){const p=f>36,w=Math.min(1,f/36),_=p?(f-36)/10:0;for(let x=0;x<=48;x++){const y=x/48,b=y*Math.PI*2,A=Math.cos(b),T=Math.sin(b),S=p?Math.cos(_*Math.PI*.5):1,M=nd(A,T,b,w,i),P=1.28-.3*Math.pow(w,.85)+.08*Math.cos(w*14+i.seed+T*1.4)+.05*Math.sin(b*4+w*9-i.seed),C=M.lx*P*S,R=M.lz*P*S,F=i.x+C*c-R*h,I=i.z+C*h+R*c,k=Ha(F,I,0,i),N=.034*Math.sin(w*18+i.seed+b*.5)*Math.sin(w*Math.PI),D=G.clamp(w+N,0,1),O=p?Ha(F,I,_,i):G.lerp(Vi,k,D),H=1+(.48+.24*T)*Math.exp(-Math.pow((O-(_e+.1))/2.1,2)),Z=dc(i.x+M.lx,i.z+M.lz,O,i.seed),q=ee(.12,.36,w)*(1-ee(.88,1,w))*S,$=P*H*S,X=M.lx*$+A*Z.radialOffset*.92*q,V=M.lz*$+T*Z.radialOffset*.92*q,et=i.x+X*c-V*h,it=i.z+X*h+V*c,J=f*49+x;r[J*3]=et,r[J*3+1]=O,r[J*3+2]=it,l[J*2]=y*2.4,l[J*2+1]=w*3+_*.4}}const u=2303;r[u*3]=i.x,r[u*3+1]=Ha(i.x,i.z,1,i),r[u*3+2]=i.z,l[u*2]=.5,l[u*2+1]=3.5;const d=[],m=46;for(let f=0;f<m;f++)for(let p=0;p<48;p++){const w=f*49+p,_=(f+1)*49+p,x=(f+1)*49+(p+1),y=f*49+(p+1);d.push(w,_,x,w,x,y)}const v=m*49;for(let f=0;f<48;f++)d.push(u,v+f+1,v+f);const g=new Zt;return g.setAttribute("position",new Q(r,3)),g.setAttribute("uv",new Q(l,2)),g.setIndex(d),g.computeVertexNormals(),g}function gx(){const i=[],t=a=>{const d=new Float32Array(822),m=new Float32Array(274*2),v=Math.cos(a.rotY),g=Math.sin(a.rotY),f=a.x+a.leanX*.55,p=a.z+a.leanZ*.55,w=(S,M,P)=>{const C=Math.sin(P*Math.PI*.5)*.36,R=(se(S*.32+a.seed,M*.32-a.seed,3)-.5)*.48-((S-f)*a.leanX+(M-p)*a.leanZ)*.28;return a.topY-.28+R+C};for(let S=0;S<=15;S++){const M=S>12,P=Math.min(1,S/12),C=M?(S-12)/3:0,R=M?Math.cos(C*Math.PI*.5):1,F=(1.16-.18*P+.16*Math.exp(-Math.pow((P-.78)/.16,2))+.11*Math.sin(P*11.5+a.seed))*R,I=a.leanX*(P-.45),k=a.leanZ*(P-.45);for(let N=0;N<=16;N++){const D=N/16,O=D*Math.PI*2,H=Math.cos(O),Z=Math.sin(O),q=.82+.34*se(H*1.7+a.seed,Z*1.7+P*2.4-a.seed,3)+.07*Math.cos(O*2+a.seed)+.05*Math.sin(O*4-a.seed+P*1.8),$=H*a.rx*F*q,X=Z*a.rz*F*q,V=a.x+I+$*v-X*g,et=a.z+k+$*g+X*v,it=w(V,et,0),J=M?w(V,et,C):G.lerp(a.botY,it,P),st=S*17+N;d[st*3]=V,d[st*3+1]=J,d[st*3+2]=et,m[st*2]=D*1.8,m[st*2+1]=P*2.2+C*.3}}const _=15,x=(_+1)*17,y=x+1;d[x*3]=a.x-a.leanX*.45,d[x*3+1]=a.botY,d[x*3+2]=a.z-a.leanZ*.45,m[x*2]=.5,m[x*2+1]=0,d[y*3]=f,d[y*3+1]=w(f,p,1),d[y*3+2]=p,m[y*2]=.5,m[y*2+1]=2.5;const b=[];for(let S=0;S<_;S++)for(let M=0;M<16;M++){const P=S*17+M,C=(S+1)*17+M,R=(S+1)*17+(M+1),F=S*17+(M+1);b.push(P,C,R,P,R,F)}const A=_*17;for(let S=0;S<16;S++)b.push(x,S,S+1),b.push(y,A+S+1,A+S);const T=new Zt;return T.setAttribute("position",new Q(d,3)),T.setAttribute("uv",new Q(m,2)),T.setIndex(b),T.computeVertexNormals(),T},e=[];for(let a=0;a<34;a++)e.push(.14*Math.PI+a/33*.72*Math.PI);for(let a=0;a<24;a++)e.push(-.88*Math.PI+a/23*1*Math.PI);for(let a=0;a<e.length;a++){const r=e[a]+(nt(a,19.4)-.5)*.045,l=Math.cos(r),c=Math.sin(r);let h=-1,u=0;for(let x=4.5;x<=34;x+=.35){const y=l*x,b=-4.2+c*x,A=Bi(y,b),T=Bi(y+l*1.1,b+c*1.1);if(A>-2.6&&A-T>1.25){h=x,u=A;break}}if(h<0)continue;const d=l*h,m=-4.2+c*h,v=Math.hypot((d-4.45)/2.65,(m-.22)/2.15),g=Math.hypot((d+4.45)/2.65,(m+.22)/2.15);if(Math.min(v,g)<1.02)continue;const p=m>-.2&&Math.abs(d)<13.5?Math.min(-.1,u-.06):u-.08+(nt(a,31.7)-.5)*.28,w=Math.max(_e-2.6,p-(4.8+nt(a,43.2)*5.4));i.push(t({x:d+l*.62,z:m+c*.62,topY:p,botY:w,rx:1.15+nt(a,51.3)*1.55,rz:.92+nt(a,63.8)*1.25,rotY:r+(nt(a,71.9)-.5)*.8,leanX:l*(.3+nt(a,83.1)*.45),leanZ:c*(.3+nt(a,83.1)*.45),seed:10+a*3.7}));const _=Math.min(p-.9,_e+3.2+nt(a,104.2)*3.8);i.push(t({x:d+l*(1.85+nt(a,112.6)*1.45),z:m+c*(1.85+nt(a,112.6)*1.45),topY:_,botY:_e-3.6,rx:1.35+nt(a,124.5)*1.75,rz:1.05+nt(a,137.1)*1.45,rotY:r+(nt(a,149.8)-.5)*.6,leanX:-l*.22,leanZ:-c*.22,seed:200+a*5.3}))}const n=Math.cos(.18),s=Math.sin(.18);for(const a of[-1,1])for(let r=0;r<4;r++){const l=9.2+r*1.35,h=Math.sin(l*.11+.35)*1.85+a*(8.8+r*2.15),u=-66+l*n+h*s,d=-32-l*s+h*n,m=ki(u,d);if(m<_e+1.5)continue;const v=Math.min(8.2-r*.9,Math.max(_e+3.8,m-.2));i.push(t({x:u,z:d,topY:v,botY:_e-4.2,rx:1.55+nt(r+a*7,31.2)*1.05,rz:1.35+nt(r+a*7,57.9)*.95,rotY:.18+r*.5,leanX:n*.32,leanZ:-s*.32,seed:410+a*37+r*9.1}))}const o=[{cx:-68,cz:-33,maxR:42,rays:26,evalH:ki,skipWaterfallCorridor:!0,seedBase:520},{cx:88,cz:36,maxR:48,rays:28,evalH:fc,seedBase:640},{cx:84,cz:-46,maxR:48,rays:26,evalH:mc,seedBase:760}];for(const a of o)for(let r=0;r<a.rays;r++){const l=r/a.rays*Math.PI*2+(nt(r,a.seedBase*.13)-.5)*.08,c=Math.cos(l),h=Math.sin(l);let u=0,d=0,m=-999;for(let p=8;p<=a.maxR;p+=.65){const w=a.cx+c*p,_=a.cz+h*p,x=a.evalH(w,_),y=a.evalH(w+c*1.4,_+h*1.4);if(x>_e+4.5&&x-y>1.85){u=w,d=_,m=x;break}}if(m<_e+4.5)continue;if(a.skipWaterfallCorridor){const p=u- -66,w=d- -32,_=p*n-w*s,x=p*s+w*n,y=Math.sin(Math.max(0,_)*.11+.35)*1.85;if(_>2.5&&Math.abs(x-y)<10.5)continue}const v=a.seedBase+r*4.3,g=m-.35-nt(r,v)*1.1,f=Math.max(_e-4,g-(8.5+nt(r,v+7.1)*9.5));i.push(t({x:u+c*.85,z:d+h*.85,topY:g,botY:f,rx:1.85+nt(r,v+13.4)*2.15,rz:1.45+nt(r,v+21.8)*1.75,rotY:l+(nt(r,v+29.2)-.5)*.7,leanX:c*.42,leanZ:h*.42,seed:v}))}return ds(i,!1)}function vx(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a),c=o-r,h=a-l,u=c*c*c*(c*(c*6-15)+10),d=h*h*h*(h*(h*6-15)+10),m=(r%e+e)%e,v=(m+1)%e,g=(l%n+n)%n,f=(g+1)%n,p=nt(m+s,g-s),w=nt(v+s,g-s),_=nt(m+s,f-s),x=nt(v+s,f-s);return p+(w-p)*u+(_-p)*d+(p-w-_+x)*u*d}function js(i,t,e,n,s,o){let a=0,r=.5,l=0,c=e,h=n;for(let u=0;u<s;u++)a+=r*vx(i,t,c,h,o+u*17.3),l+=r,c*=2,h*=2,r*=.5;return a/l}function Bh(i,t,e,n,s){const o=i*e,a=t*n,r=Math.floor(o),l=Math.floor(a);let c=1e9,h=1e9,u=0,d=0,m=0;for(let p=-1;p<=1;p++)for(let w=-1;w<=1;w++){const _=((r+w)%e+e)%e,x=((l+p)%n+n)%n,y=.16+.68*nt(_+s,x*1.7-s),b=.16+.68*nt(_*2.3-s,x+s),A=r+w+y,T=l+p+b,S=(A-o)*.85,M=(T-a)*1.25,P=Math.hypot(S,M);P<c?(h=c,c=P,u=nt(_*3.1+s,x*5.7+s),d=S,m=M):P<h&&(h=P)}const v=Math.max(0,h-c),g=u*Math.PI*2,f=(d*Math.cos(g)+m*Math.sin(g))*.55;return{edgeDist:v,cellTilt:f,cellId:u}}function xx(){const t=new Float32Array(262144),e=new Float32Array(512*512),n=new Float32Array(512*512),s=new Float32Array(512*512);for(let g=0;g<512;g++){const f=g/512;for(let p=0;p<512;p++){const w=p/512,_=g*512+p,x=w+(js(w,f,4,6,3,5.1)-.5)*.068,y=f+(js(w,f,6,4,3,13.7)-.5)*.032,b=Bh(x,y,5,15,21.4),A=Bh(x,y,11,28,57.9),T=js(w,f,6,10,3,44.8),S=(1-ee(.01,.085,b.edgeDist))*ee(.18,.78,T),M=(1-ee(.008,.07,A.edgeDist))*(.45+.55*T),P=js(x,y,3,22,4,33.2),C=Math.abs((y*14+P*.55)%1-.5)*2,R=1-ee(.04,.24,C),F=js(w,f,28,28,3,71.6),I=.52+b.cellTilt*.26+(b.cellId-.5)*.16+A.cellTilt*.15+(P-.5)*.4+(F-.5)*.16-R*.28-S*.32-M*.18;t[_]=Math.max(0,Math.min(1,I)),e[_]=Math.min(1,R*.52+S*.58+M*.36),n[_]=b.cellId*.65+A.cellId*.35;const k=js(w,f,8,8,4,93.4);s[_]=ee(.6,.84,k)*(1-S*.5)}}const o=document.createElement("canvas"),a=document.createElement("canvas"),r=document.createElement("canvas");for(const g of[o,a,r])g.width=512,g.height=512;const l=o.getContext("2d"),c=a.getContext("2d"),h=r.getContext("2d"),u=l.createImageData(512,512),d=c.createImageData(512,512),m=h.createImageData(512,512);for(let g=0;g<512;g++){const f=(g-1+512)%512,p=(g+1)%512;for(let w=0;w<512;w++){const _=(w-1+512)%512,x=(w+1)%512,y=g*512+w,b=y*4,A=(t[g*512+x]-t[g*512+_])*7.6,T=(t[p*512+w]-t[f*512+w])*7.6,S=1/Math.sqrt(A*A+T*T+1);d.data[b]=Math.round((-A*S*.5+.5)*255),d.data[b+1]=Math.round((T*S*.5+.5)*255),d.data[b+2]=Math.round((S*.5+.5)*255),d.data[b+3]=255;const M=t[y],P=e[y],C=n[y],R=s[y],F=ee(.62,.92,C),I=1-P*.56,k=(30+M*62+F*34)*I,N=(34+M*58+F*15)*I,D=(44+M*64-F*8)*I,O=44+M*28,H=78+M*38,Z=34+M*18;u.data[b]=Math.round(G.lerp(k,O,R*.56)),u.data[b+1]=Math.round(G.lerp(N,H,R*.56)),u.data[b+2]=Math.round(G.lerp(D,Z,R*.56)),u.data[b+3]=255;const q=.54+(1-M)*.28+P*.16,$=Math.round(G.clamp(G.lerp(q,.92,R),.15,.98)*255);m.data[b]=$,m.data[b+1]=$,m.data[b+2]=$,m.data[b+3]=255}}l.putImageData(u,0,0),c.putImageData(d,0,0),h.putImageData(m,0,0);const v=(g,f)=>(g.wrapS=Ci,g.wrapT=Ci,g.repeat.set(9,9),g.anisotropy=8,g.colorSpace=f?_n:ni,g.needsUpdate=!0,g);return{albedo:v(new Ln(o),!0),normal:v(new Ln(a),!1),roughness:v(new Ln(r),!1)}}function _x(i){const o=new Float32Array(37539);for(let u=0;u<=96;u++){const d=u/96,m=3200*Math.pow(d,2.05);for(let v=0;v<=128;v++){const f=v/128*Math.PI*2,p=Math.cos(f)*m,w=Math.sin(f)*m,_=(se(p*.015+3.7,w*.015-5.2,3)-.5)*3.2*(1-d*.7),x=cx+_,y=u*129+v;o[y*3]=p,o[y*3+1]=x,o[y*3+2]=w}}const a=new Uint32Array(12288*6);let r=0;for(let u=0;u<96;u++)for(let d=0;d<128;d++){const m=u*129+d,v=(u+1)*129+d,g=(u+1)*129+(d+1),f=u*129+(d+1);a[r++]=m,a[r++]=g,a[r++]=v,a[r++]=m,a[r++]=f,a[r++]=g}const l=new Zt;l.setAttribute("position",new Q(o,3)),l.setIndex(new Q(a,1)),l.computeVertexNormals();const c=new He({name:"NordicSubmarineBathymetry",uniforms:{...i},vertexShader:`
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
    `}),h=new Oe(l,c);return h.frustumCulled=!1,h.name="NordicSubmarineBathymetryFloor",h}function Mx(i){const t=[{cx:-480,cz:-280,rx:145,rz:95,peakY:56,offX:-22,rot:.4,seed:11.4},{cx:520,cz:-310,rx:165,rz:105,peakY:62,offX:28,rot:-.5,seed:23.8},{cx:-320,cz:-560,rx:135,rz:90,peakY:54,offX:18,rot:.2,seed:37.2},{cx:490,cz:340,rx:155,rz:98,peakY:52,offX:-24,rot:-.3,seed:46.5},{cx:-860,cz:-420,rx:240,rz:145,peakY:86,offX:-36,rot:.35,seed:51.9},{cx:880,cz:-460,rx:255,rz:155,peakY:82,offX:38,rot:-.42,seed:67.3},{cx:-740,cz:580,rx:220,rz:135,peakY:72,offX:-28,rot:.55,seed:76.4},{cx:140,cz:-1180,rx:290,rz:165,peakY:94,offX:42,rot:.15,seed:83.5},{cx:-1150,cz:-880,rx:310,rz:180,peakY:104,offX:-45,rot:-.28,seed:94.1},{cx:1080,cz:780,rx:285,rz:165,peakY:92,offX:36,rot:.38,seed:108.7}],e=[],n=28,s=52;for(const l of t){const c=(n+1)*(s+1),h=new Float32Array(c*3),u=Math.cos(l.rot),d=Math.sin(l.rot);for(let f=0;f<=n;f++){const p=f/n*1.42;for(let w=0;w<=s;w++){const _=w/s*Math.PI*2,x=1+.18*Math.sin(_*2+l.seed)+.11*Math.cos(_*3-l.seed),y=Math.cos(_)*l.rx*x*p,b=Math.sin(_)*l.rz*x*p,A=l.cx+y*u-b*d,T=l.cz+y*d+b*u,S=Math.min(1,Math.pow((y-l.offX*1.15)/(l.rx*1.05),2)+Math.pow(b/(l.rz*.96),2)),M=G.clamp(.6+y/Math.max(20,l.rx)*.36,.28,1.14),P=Math.pow(Math.max(0,1-S),1.32),C=1/(1+1.9*S*S),R=(tn(A*.008+l.seed,T*.01-l.seed,2)-.48)*(l.peakY*.18)*(1-ee(.55,1.05,p)),F=l.peakY*(.2+.48*P*M+.26*C)+R,I=jo(F,y*.02,Math.max(9,l.peakY*.2),.42),k=.66+.13*Math.sin(_*3-l.seed)+.08*Math.cos(_*5+l.seed),N=ee(k,1.06,p),D=ee(.98,1.38,p),O=_e-1.5,H=ar(I,O,N,A,T,l.seed),Z=G.lerp(H,Vi,D),q=f*(s+1)+w;h[q*3]=A,h[q*3+1]=Z,h[q*3+2]=T}}const m=new Uint32Array(n*s*6);let v=0;for(let f=0;f<n;f++)for(let p=0;p<s;p++){const w=f*(s+1)+p,_=(f+1)*(s+1)+p,x=(f+1)*(s+1)+(p+1),y=f*(s+1)+(p+1);m[v++]=w,m[v++]=x,m[v++]=_,m[v++]=w,m[v++]=y,m[v++]=x}const g=new Zt;g.setAttribute("position",new Q(h,3)),g.setIndex(new Q(m,1)),g.computeVertexNormals(),e.push(g)}const o=ds(e,!1),a=new He({name:"DistantFjordAerialMaterial",uniforms:{...i},vertexShader:`
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
    `}),r=new Oe(o,a);return r.frustumCulled=!1,r.name="DistantFjordArchipelago",r}function wx(){const i=[],t=[{dx:0,dz:0,h:.52,w:.021,bend:.16,rotY:.15,plume:!0},{dx:.022,dz:-.018,h:.44,w:.019,bend:.19,rotY:2.35,plume:!0},{dx:.036,dz:.022,h:.34,w:.018,bend:.14,rotY:1.15,plume:!1},{dx:-.034,dz:.026,h:.37,w:.018,bend:.15,rotY:3.65,plume:!1},{dx:-.026,dz:-.032,h:.31,w:.016,bend:.13,rotY:4.55,plume:!1},{dx:.044,dz:-.012,h:.28,w:.016,bend:.16,rotY:5.5,plume:!1},{dx:.018,dz:.042,h:.2,w:.015,bend:.11,rotY:.78,plume:!1},{dx:-.046,dz:-.006,h:.17,w:.014,bend:.1,rotY:2.95,plume:!1},{dx:.006,dz:-.046,h:.22,w:.015,bend:.12,rotY:5.05,plume:!1}];for(const e of t){const s=[],o=[],a=[],r=[],l=Math.cos(e.rotY),c=Math.sin(e.rotY);for(let u=0;u<=5;u++){const d=u/5,m=e.plume?Math.exp(-Math.pow((d-.82)/.11,2))*.65:0,v=e.w*(1-.9*Math.pow(d,1.28)+m),g=e.h*d,f=e.bend*d*d,p=.42+.72*Math.pow(d,.65),w=p*(1+(e.plume?.32:.14)*d*d),_=p*(1+.12*d),x=p*(.88+.08*d);for(const y of[-1,1]){const b=y*v,A=f+y*.0025*(1-d),T=e.dx+b*l-A*c,S=e.dz+b*c+A*l;s.push(T,g,S),o.push(-c*.28+y*l*.22,.91,l*.28+y*c*.22),a.push(w,_,x)}}for(let u=0;u<5;u++){const d=u*2,m=d+1,v=d+2,g=d+3;r.push(d,m,g,d,g,v)}const h=new Zt;h.setAttribute("position",new Kt(s,3)),h.setAttribute("normal",new Kt(o,3)),h.setAttribute("color",new Kt(a,3)),h.setIndex(r),i.push(h)}return ds(i,!1)}function Vo(i,t,e,n,s,o,a){const l=[],c=[],h=[],u=[],d=Math.cos(s),m=Math.sin(s);for(let g=0;g<=9;g++){const f=g/9,p=ee(.06,.24,f),w=Math.pow(Math.max(0,1-Math.pow(f,1.35)),.68),_=.74+.26*Math.abs(Math.sin(f*Math.PI*7.5)),x=t*p*w*_,y=n*Math.pow(f,.88)*(i/.45),b=e*(1.28*f-.52*f*f*f)+(a?i*.22*f:-.06*i*f*f),A=a?G.lerp(.36,.68,f):G.lerp(.24,.48,Math.pow(f,.85)),T=a?G.lerp(.32,.62,f):G.lerp(.28,.88,Math.pow(f,.7)),S=a?G.lerp(.14,.24,f):G.lerp(.1,.26,f),M=[-1,0,1];for(const P of M){const C=P*x+o*f*.025,R=Math.abs(P)*x*.26,F=Math.max(.005,b+R),I=y,k=C*d-I*m,N=C*m+I*d;l.push(k,F,N);const D=-P*.28,O=.92,H=.24;c.push(D*d-H*m,O,D*m+H*d);const Z=P===0?.82:1.04;h.push(A*Z,T*Z,S*Z)}}for(let g=0;g<9;g++){const f=g*3,p=(g+1)*3;u.push(f+0,f+1,p+1,f+0,p+1,p+0),u.push(f+1,f+2,p+2,f+1,p+2,p+1)}const v=new Zt;return v.setAttribute("position",new Kt(l,3)),v.setAttribute("normal",new Kt(c,3)),v.setAttribute("color",new Kt(h,3)),v.setIndex(u),v}function yx(){const i=[];for(let e=0;e<7;e++){const n=e/7*Math.PI*2+(e%2===0?.14:-.11),s=e%3===0,o=s?.34:.42,a=s?.068:.088,r=s?.32:.24,l=s?.24:.38;i.push(Vo(o,a,r,l,n,(e-3)*.3,!1))}return ds(i,!1)}function bx(){const i=[];for(let e=0;e<7;e++){const n=e/7*Math.PI*2+.22*Math.sin(e*2.1),s=e%2===0?1:.86;i.push(Vo(.72*s,.135*s,.64*s,.54*s,n,Math.cos(e*1.7)*.4,!1))}return i.push(Vo(.76,.068,.74,.22,.65,.15,!0)),i.push(Vo(.7,.064,.69,.2,3.85,-.15,!0)),ds(i,!1)}function ts(i){if(i.deleteAttribute("uv"),i.getAttribute("normal")||i.computeVertexNormals(),!i.index){const t=i.getAttribute("position").count,e=new Uint16Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new Q(e,1))}return i}function Sx(){const i=[],t=[{ox:0,oz:0,lx:.02,lz:.01,h:.24,r:.048},{ox:.055,oz:.032,lx:.08,lz:.05,h:.19,r:.044},{ox:-.052,oz:.038,lx:-.08,lz:.06,h:.2,r:.042},{ox:.032,oz:-.055,lx:.05,lz:-.08,h:.18,r:.04},{ox:-.048,oz:-.042,lx:-.07,lz:-.06,h:.17,r:.042}];for(const e of t){const n=ts(new bo(e.r,0));n.scale(1.25,.95,1.25),n.translate(e.ox+e.lx*.45,e.h*.45,e.oz+e.lz*.45);const s=n.getAttribute("position").count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=.16,o[a*3+1]=.28,o[a*3+2]=.12;n.setAttribute("color",new Q(o,3)),i.push(n);for(let a=0;a<3;a++){const r=.62+a*.18,l=ts(new ro(.012,.02,.028,5,1));l.translate(e.ox+e.lx*r+(a-1)*.012,e.h*r,e.oz+e.lz*r+(a%2-.5)*.014);const c=l.getAttribute("position").count,h=new Float32Array(c*3);for(let u=0;u<c;u++){const d=.88+.12*a;h[u*3]=d,h[u*3+1]=d,h[u*3+2]=d}l.setAttribute("color",new Q(h,3)),i.push(l)}}return ds(i,!1)}function Ax(){const i=[];for(let o=0;o<5;o++){const a=o/5*Math.PI*2+.3,r=ts(Vo(.14,.028,.055,.12,a,0,!1));i.push(r)}const t=[{ox:0,oz:0,h:.27,leanX:.025,leanZ:.018,r:.038,tiltX:.18,tiltZ:-.12},{ox:.052,oz:.028,h:.21,leanX:.055,leanZ:-.022,r:.032,tiltX:-.22,tiltZ:.24},{ox:-.044,oz:.034,h:.24,leanX:-.045,leanZ:.042,r:.034,tiltX:.25,tiltZ:.18}];for(const o of t){const a=o.ox+o.leanX,r=o.h,l=o.oz+o.leanZ,c=ts(new ro(.0038,.0058,o.h,4,1));c.translate(o.ox+o.leanX*.5,o.h*.5,o.oz+o.leanZ*.5);const h=c.getAttribute("position").count,u=new Float32Array(h*3);for(let f=0;f<h;f++)u[f*3]=.2,u[f*3+1]=.42,u[f*3+2]=.16;c.setAttribute("color",new Q(u,3)),i.push(c);const d=6;for(let f=0;f<d;f++){const p=f/d*Math.PI*2,w=[0,0,0,Math.cos(p-.34)*o.r*.62,o.r*.16,Math.sin(p-.34)*o.r*.62,Math.cos(p+.34)*o.r*.62,o.r*.16,Math.sin(p+.34)*o.r*.62,Math.cos(p)*o.r*1.12,o.r*.26,Math.sin(p)*o.r*1.12],_=[0,1,0,0,.94,0,0,.94,0,0,.88,0],x=[.78,.75,.78,1.02,1.02,1.02,1.02,1.02,1.02,1.14,1.14,1.14],y=new Zt;y.setAttribute("position",new Kt(w,3)),y.setAttribute("normal",new Kt(_,3)),y.setAttribute("color",new Kt(x,3)),y.setIndex([0,2,1,1,2,3]),y.rotateX(o.tiltX),y.rotateZ(o.tiltZ),y.translate(a,r,l),i.push(ts(y))}const m=ts(new ro(o.r*.24,o.r*.18,o.r*.2,6,1));m.rotateX(o.tiltX),m.rotateZ(o.tiltZ),m.translate(a,r+o.r*.08,l);const v=m.getAttribute("position").count,g=new Float32Array(v*3);for(let f=0;f<v;f++)g[f*3]=1.25,g[f*3+1]=.92,g[f*3+2]=.22;m.setAttribute("color",new Q(g,3)),i.push(m)}const e=ts(new ro(.003,.005,.34,4,1));e.translate(-.015,.17,-.025);const n=e.getAttribute("position").count,s=new Float32Array(n*3);for(let o=0;o<n;o++)s[o*3]=.18,s[o*3+1]=.38,s[o*3+2]=.15;e.setAttribute("color",new Q(s,3)),i.push(e);for(let o=0;o<4;o++){const a=.2+o*.042,r=.021*(1-o*.14),l=ts(new bo(r,0));l.scale(1.15,.82,1.15),l.translate(-.015+Math.sin(o*2.1)*.006,a,-.025+Math.cos(o*2.1)*.006);const c=l.getAttribute("position").count,h=new Float32Array(c*3);for(let u=0;u<c;u++){const d=.9+o*.07;h[u*3]=d,h[u*3+1]=d,h[u*3+2]=d}l.setAttribute("color",new Q(h,3)),i.push(l)}return ds(i,!1)}function Tx(i,t,e,n){const s=new xi;s.position.set(i,t,e);const o=[{rx:.44,ry:.17,rz:.38,dy:.08,rot:.2},{rx:.35,ry:.14,rz:.31,dy:.28,rot:1.1},{rx:.27,ry:.12,rz:.24,dy:.45,rot:2.3},{rx:.19,ry:.11,rz:.18,dy:.6,rot:.7},{rx:.12,ry:.1,rz:.11,dy:.73,rot:1.9}];for(const a of o){const r=new bo(1,1);r.scale(a.rx,a.ry,a.rz);const l=new Oe(r,n);l.position.set((Math.sin(a.rot*3)-.5)*.03,a.dy,(Math.cos(a.rot*2)-.5)*.03),l.rotation.y=a.rot,l.castShadow=!0,l.receiveShadow=!0,s.add(l)}return s}function Ex(i){const t=new xi;t.name="NordicCliffsideWorld";const e=xx(),n=(U,K)=>{const ft=new fi({name:K,map:e.albedo,normalMap:e.normal,normalScale:new $t(1.25,1.25),roughnessMap:e.roughness,roughness:.86,metalness:.04,envMapIntensity:.98});return ft.onBeforeCompile=mt=>{Object.assign(mt.uniforms,i),mt.vertexShader=mt.vertexShader.replace("#include <common>",`#include <common>
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

            float cliffSteepMask = ${U?"1.0 - smoothstep(0.36, 0.78, abs(wN.y))":"1.0"};
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
          ${U?`
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
          float meadowSmooth = ${U?"smoothstep(0.64, 0.88, wNRgh.y) * smoothstep(-4.0, 0.5, vRockWorldPos.y)":"0.0"};
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

            ${U?`
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
          gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, rHazeCol, clamp(rAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)},ft},s=n(!0,"NordicBasaltCliff_PBR"),o=n(!1,"NordicBareBasaltCrags_PBR");t.add(_x(i));const a=304,r=new xo(102,104,a,a);r.rotateX(-Math.PI*.5);const l=r.getAttribute("position"),c=r.getAttribute("uv");for(let U=0;U<l.count;U++){const K=l.getX(U)-4,ft=l.getZ(U)-14.5,mt=Bi(K,ft);l.setXYZ(U,K,mt,ft),c.setXY(U,K*.015,(ft+mt*.55)*.015)}zh(r,7.3,!0);const h=new Oe(r,s);h.receiveShadow=!0,h.castShadow=!0,h.name="HeroBasaltCliffPerch",t.add(h);const u=new Oe(gx(),o);u.castShadow=!0,u.receiveShadow=!0,u.name="HeroCliffBasaltCragOutcrops",t.add(u);const d=Bi(-8.65,-7.25);t.add(Tx(-8.65,d-.04,-7.25,o));const m=new xi;m.name="NordicArchipelago";for(let U=0;U<Wl.length;U++){const K=Wl[U],ft=new xo(K.spanX,K.spanZ,K.gridSegs,K.gridSegs);ft.rotateX(-Math.PI*.5);const mt=ft.getAttribute("position"),bt=ft.getAttribute("uv");for(let Et=0;Et<mt.count;Et++){const Dt=K.centerX+mt.getX(Et),Qt=K.centerZ+mt.getZ(Et),fe=K.evalHeight(Dt,Qt);mt.setXYZ(Et,Dt,fe,Qt),bt.setXY(Et,Dt*.015,(Qt+fe*.55)*.015)}zh(ft,19.1+U*13.7,!1);const ht=new Oe(ft,s);ht.receiveShadow=!0,ht.castShadow=!0,ht.name=K.name,m.add(ht)}for(let U=0;U<As.length;U++){const K=As[U],ft=new Oe(fx(K),s);ft.position.set(K.x,0,K.z),ft.rotation.y=K.rotY,ft.castShadow=!0,ft.receiveShadow=!0,ft.name=`FaroeseHeadlandSeaArch_${U}`,m.add(ft)}const v=ti.map(U=>mx(U)),g=new Oe(ds(v,!1),s);g.castShadow=!0,g.receiveShadow=!0,g.name="TabularFaroeseSeaStacks",m.add(g),t.add(m);const f=Math.cos(.18),p=Math.sin(.18),w=U=>{const K=Math.sin(U*.11+.35)*1.85,ft=-66+U*f+K*p,mt=-32-U*p+K*f,bt=ki(ft,mt);return new E(ft,bt,mt)};let _=9.4;for(let U=5;U<=16;U+=.05){const K=w(U),ft=w(U+1.35);if(K.y>5.5&&ft.y<_e-1.5){_=U;break}if(K.y<5.5){_=U-.15;break}}const x=w(_),y=1.2,b=ki(x.x+y,x.z)-ki(x.x-y,x.z),A=ki(x.x,x.z+y)-ki(x.x,x.z-y),T=new $t(-b,-A);T.lengthSq()<1e-4?T.set(f,-p):T.normalize();const S=new $t(-T.y,T.x),M=(U,K,ft,mt,bt)=>{const Dt=x.y-.12,Qt=_e-1.85,fe=Dt-Qt,pe=new Float32Array(1113*3),le=new Float32Array(1113*2);for(let me=0;me<=52;me++){const Ie=me/52,Ze=Dt-fe*Math.pow(Ie,1.62),bn=.22+ft*Math.pow(Ie,.72),Cn=G.lerp(U,K,Math.pow(Ie,.88)),Qn=bt*Ie*Ie;for(let Pi=0;Pi<=20;Pi++){const Eo=Pi/20,ia=(Eo-.5)*2*Cn+Qn,Yi=Math.sin(Eo*Math.PI)*(mt+.42*Ie);let cr=x.x+S.x*ia+T.x*(bn+Yi),hr=x.z+S.y*ia+T.y*(bn+Yi);for(let gc=0;gc<12;gc++){const vd=Ti(cr,hr);if(Ze>=vd+.52)break;cr+=T.x*.42,hr+=T.y*.42}const Co=me*21+Pi;pe[Co*3]=cr,pe[Co*3+1]=Ze,pe[Co*3+2]=hr,le[Co*2]=Eo,le[Co*2+1]=1-Ie}}const oe=[];for(let me=0;me<52;me++)for(let Ie=0;Ie<20;Ie++){const Ze=me*21+Ie,bn=(me+1)*21+Ie,Cn=(me+1)*21+(Ie+1),Qn=me*21+(Ie+1);oe.push(Ze,bn,Cn,Ze,Cn,Qn)}const de=new Zt;return de.setAttribute("position",new Q(pe,3)),de.setAttribute("uv",new Q(le,2)),de.setIndex(oe),de.computeVertexNormals(),de},P=3.85,C=M(.92,2.15,P,.34,.28),R=M(1.18,3.35,P+.55,.68,.72),F=Math.pow((x.y+.18-_e)/(x.y+.18-(_e-1.85)),1/1.62);let I=x.x+T.x*(.28+P*Math.pow(F,.72)+.55),k=x.z+T.y*(.28+P*Math.pow(F,.72)+.55);for(let U=0;U<12&&!(Ti(I,k)<_e-2.2);U++)I+=T.x*.55,k+=T.y*.55;const N={...i},D=U=>new He({name:"NordicWaterfallShader",transparent:!0,depthWrite:!1,side:on,uniforms:{...N,uVeilMode:{value:U?1:0}},vertexShader:`
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
      `}),O=D(!1),H=D(!0),Z=new Oe(C,O);Z.renderOrder=3;const q=new Oe(R,H);q.renderOrder=4,t.add(Z),t.add(q);const $=new sc(9.2,48);$.rotateX(-Math.PI*.5);const X=new He({transparent:!0,depthWrite:!1,uniforms:N,vertexShader:`
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
    `}),V=new Oe($,X);V.position.set(I,_e+.16,k),V.renderOrder=3,t.add(V);const et=1650,it=new Float32Array(et*3),J=new Float32Array(et*3),st=new Float32Array(et*3);for(let U=0;U<et;U++){const K=nt(U,5.7)*Math.PI*2,ft=.35+Math.pow(nt(U,13.1),.7)*2.85;it[U*3]=I+Math.cos(K)*ft+(nt(U,19.4)-.5)*.8,it[U*3+1]=_e+.05+nt(U,23.8)*.65,it[U*3+2]=k+Math.sin(K)*ft+(nt(U,29.2)-.5)*.8;const mt=K+(nt(U,37.6)-.5)*.85,bt=1.85+nt(U,41.9)*5.35;J[U*3]=Math.cos(mt)*bt+T.x*(1.1+nt(U,47.3)*1.8),J[U*3+1]=5.4+Math.pow(nt(U,53.1),.75)*8.4,J[U*3+2]=Math.sin(mt)*bt+T.y*(1.1+nt(U,59.7)*1.8),st[U*3]=nt(U,67.3),st[U*3+1]=.52+nt(U,73.9)*.46,st[U*3+2]=.55+nt(U,83.1)*1.15}const Y=new Zt;Y.setAttribute("position",new Q(it,3)),Y.setAttribute("aVelocity",new Q(J,3)),Y.setAttribute("aMeta",new Q(st,3));const j=new He({name:"WaterfallBallisticSplashDroplets",transparent:!0,depthWrite:!1,uniforms:N,vertexShader:`
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
    `}),ut=new to(Y,j);ut.renderOrder=4,ut.frustumCulled=!1,t.add(ut);const tt=420,z=new Float32Array(tt*3),_t=new Float32Array(tt);for(let U=0;U<tt;U++){const K=nt(U,11.3)*Math.PI*2,ft=Math.pow(nt(U,19.7),.65)*6.4;z[U*3]=I+Math.cos(K)*ft,z[U*3+1]=_e+nt(U,27.9)*11.5,z[U*3+2]=k+Math.sin(K)*ft,_t[U]=nt(U,61.7)}const xt=new Zt;xt.setAttribute("position",new Q(z,3)),xt.setAttribute("aSeed",new Q(_t,1));const Ct=new He({transparent:!0,depthWrite:!1,uniforms:N,vertexShader:`
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
    `}),Tt=new to(xt,Ct);Tt.renderOrder=4,Tt.frustumCulled=!1,t.add(Tt);const Nt=(U,K)=>{if(Math.hypot(U-I,K-k)<10.2||Math.hypot(U-x.x,K-x.z)<8.5)return!0;const ft=U-x.x,mt=K-x.z,bt=ft*T.x+mt*T.y,ht=Math.abs(ft*S.x+mt*S.y);return bt>-8&&bt<26&&ht<9.5},lt=new pn,W=new bo(.62,1),L=W.getAttribute("position");for(let U=0;U<L.count;U++){const K=L.getX(U);let ft=L.getY(U);const mt=L.getZ(U),bt=.82+.32*se(K*2.2+4.3,ft*2.2+mt*2.2,3);ft<-.1&&(ft=-.1+(ft+.1)*.35),L.setXYZ(U,K*bt*1.36,ft*bt*.62,mt*bt*1.22)}W.computeVertexNormals();const rt=(()=>{const bt=new Float32Array(411),ht=new Float32Array(274);for(let le=0;le<=14;le++){const oe=le/14,de=(oe-.5)*3.4,me=.58+.42*Math.sin(oe*Math.PI),Ie=Math.sin(oe*Math.PI*1.3+.4)*.18,Ze=-Math.pow(oe-.5,2)*.14;for(let bn=0;bn<=8;bn++){const Cn=bn/8,Qn=Cn*Math.PI*2,Pi=.84+.26*se(de*1.3+2.1,Math.cos(Qn)*1.7+Math.sin(Qn)*1.7,2),Eo=.3*me*Pi,ia=.38*me*Pi,Yi=le*9+bn;bt[Yi*3]=de,bt[Yi*3+1]=Ze+Math.sin(Qn)*Eo,bt[Yi*3+2]=Ie+Math.cos(Qn)*ia,ht[Yi*2]=oe*2.4,ht[Yi*2+1]=Cn}}const Et=135,Dt=Et+1;bt[Et*3]=-1.72,bt[Et*3+1]=-.04,bt[Et*3+2]=0,ht[Et*2]=0,ht[Et*2+1]=.5,bt[Dt*3]=1.72,bt[Dt*3+1]=-.04,bt[Dt*3+2]=0,ht[Dt*2]=2.4,ht[Dt*2+1]=.5;const Qt=[];for(let le=0;le<14;le++)for(let oe=0;oe<8;oe++){const de=le*9+oe,me=(le+1)*9+oe,Ie=(le+1)*9+(oe+1),Ze=le*9+(oe+1);Qt.push(de,me,Ie,de,Ie,Ze)}const fe=126;for(let le=0;le<8;le++)Qt.push(Et,le+1,le),Qt.push(Dt,fe+le,fe+le+1);const pe=new Zt;return pe.setAttribute("position",new Q(bt,3)),pe.setAttribute("uv",new Q(ht,2)),pe.setIndex(Qt),pe.computeVertexNormals(),pe})(),dt=[{cx:-3.5,cz:-14,spanX:64,spanZ:60,isHero:!0,evalH:Bi},{cx:-70,cz:-34,spanX:74,spanZ:64,isHero:!1,evalH:ki},{cx:88,cz:36,spanX:78,spanZ:78,isHero:!1,evalH:fc},{cx:84,cz:-46,spanX:74,spanZ:82,isHero:!1,evalH:mc},{cx:-124,cz:-86,spanX:74,spanZ:64,isHero:!1,evalH:Ku},{cx:-48,cz:-92,spanX:58,spanZ:54,isHero:!1,evalH:Qu},{cx:42,cz:-112,spanX:68,spanZ:66,isHero:!1,evalH:Ju},{cx:-144,cz:78,spanX:112,spanZ:108,isHero:!1,evalH:td},{cx:156,cz:116,spanX:116,spanZ:106,isHero:!1,evalH:ed}],yt=880,Mt=new vs(W,o,yt);Mt.castShadow=!0,Mt.receiveShadow=!0;let zt=0;const kt=210,Rt=new vs(rt,o,kt);Rt.castShadow=!0,Rt.receiveShadow=!0;let It=0;const Lt=new E(0,1,0),Ot=new E,jt=new rn,Ht=new rn;for(let U=0;U<dt.length;U++){const K=dt[U],ft=K.isHero?36:24;let mt=0;for(let bt=0;bt<900&&mt<ft&&zt<yt-6;bt++){const ht=7e3+U*1100+bt,Et=K.cx+(nt(ht,14.7)-.5)*(K.spanX*1.28),Dt=K.cz+(nt(ht,53.9)-.5)*(K.spanZ*1.28),Qt=K.evalH(Et,Dt);if(Qt<-16.2||Qt>-9.2||Nt(Et,Dt))continue;mt++;const fe=1.05+nt(ht,29.1)*1.85,pe=Math.max(Qt-.12,_e-.08+nt(ht,37.4)*.62);lt.position.set(Et,pe,Dt),lt.rotation.set((nt(ht,3.3)-.5)*.24,nt(ht,9.8)*Math.PI*2,(nt(ht,6.1)-.5)*.24),lt.scale.set(fe*(.92+nt(ht,4.4)*.45),fe*(.58+nt(ht,8.2)*.35),fe*(.88+nt(ht,11.6)*.42)),lt.updateMatrix(),Mt.setMatrixAt(zt++,lt.matrix);const le=2+Math.floor(nt(ht,45.2)*3);for(let oe=0;oe<le&&zt<yt;oe++){const de=ht*7+oe*19.3,me=nt(de,2.7)*Math.PI*2,Ie=1.15+nt(de,5.9)*3.4,Ze=Et+Math.cos(me)*Ie,bn=Dt+Math.sin(me)*Ie;if(Nt(Ze,bn))continue;const Cn=.48+nt(de,12.4)*.95,Qn=_e-.1+nt(de,18.8)*.44;lt.position.set(Ze,Qn,bn),lt.rotation.set((nt(de,21.1)-.5)*.32,nt(de,25.6)*Math.PI*2,(nt(de,29.3)-.5)*.32),lt.scale.set(Cn*(.95+nt(de,33.1)*.55),Cn*(.52+nt(de,37.7)*.32),Cn),lt.updateMatrix(),Mt.setMatrixAt(zt++,lt.matrix)}if(It<kt&&nt(ht,63.5)>.28){const oe=nt(ht,71.2)*Math.PI*2,de=Et+Math.cos(oe)*(1.2+nt(ht,77.8)*2.4),me=Dt+Math.sin(oe)*(1.2+nt(ht,81.4)*2.4);if(!Nt(de,me)){const Ie=.72+nt(ht,88.9)*1.15,Ze=.68+nt(ht,93.1)*.65,bn=Math.max(K.evalH(de,me)-.08,_e-.04+nt(ht,97.6)*.36),Cn=K.evalH(de+1,me)-K.evalH(de-1,me),Qn=K.evalH(de,me+1)-K.evalH(de,me-1),Pi=Math.atan2(Cn,-Qn)+(nt(ht,102.3)-.5)*.95;lt.position.set(de,bn,me),lt.rotation.set((nt(ht,108.7)-.5)*.16,Pi,(nt(ht,114.2)-.5)*.18),lt.scale.set(Ie,Ze,Ze*1.08),lt.updateMatrix(),Rt.setMatrixAt(It++,lt.matrix)}}}}for(let U=0;U<ti.length;U++){const K=ti[U];for(let ft=0;ft<6&&zt<yt;ft++){const mt=19e3+U*71+ft*13,bt=ft/6*Math.PI*2+(nt(mt,4.1)-.5)*.55,ht=Math.max(K.rx,K.rz)*(1.12+nt(mt,8.7)*.52),Et=K.x+Math.cos(bt)*ht,Dt=K.z+Math.sin(bt)*ht;if(Nt(Et,Dt))continue;const Qt=.65+nt(mt,15.3)*1.15;lt.position.set(Et,_e-.08+nt(mt,19.9)*.48,Dt),lt.rotation.set(.08,nt(mt,24.4)*Math.PI*2,-.06),lt.scale.set(Qt*1.25,Qt*.62,Qt),lt.updateMatrix(),Mt.setMatrixAt(zt++,lt.matrix),ft%2===0&&It<kt&&(lt.position.set(Et+Math.cos(bt+.6)*1.6,_e+.02+nt(mt,31.2)*.26,Dt+Math.sin(bt+.6)*1.6),lt.rotation.set(.05,bt+Math.PI*.5+(nt(mt,36.8)-.5)*.6,-.09),lt.scale.set(.75+nt(mt,41.5)*.85,.72,.78),lt.updateMatrix(),Rt.setMatrixAt(It++,lt.matrix))}}for(let U=0;U<dt.length;U++){const K=dt[U],ft=K.isHero?24:10;let mt=0;for(let bt=0;bt<400&&mt<ft&&zt<yt;bt++){const ht=U*500+bt,Et=K.cx+(nt(ht,41.2)-.5)*K.spanX,Dt=K.cz+(nt(ht,83.7)-.5)*K.spanZ;if(K.isHero){if(Math.sqrt(Math.pow(Et/10.2,2)+Math.pow((Dt+1)/6.4,2))<1)continue}else if(Nt(Et,Dt))continue;const Qt=K.evalH(Et,Dt);if(Qt<.25||Qt>34)continue;const fe=K.evalH(Et+.6,Dt),pe=K.evalH(Et-.6,Dt),le=K.evalH(Et,Dt+.6),oe=K.evalH(Et,Dt-.6),de=(fe-pe)/1.2,me=(le-oe)/1.2;if(Math.hypot(de,me)>.38||Math.min(fe,pe,le,oe)<0)continue;const Ze=(K.isHero?.38:.58)+nt(ht,19.4)*(K.isHero?.62:.95);Ot.set(-de,1,-me).normalize(),jt.setFromUnitVectors(Lt,Ot),Ht.setFromAxisAngle(Lt,nt(ht,8.9)*Math.PI*2),lt.quaternion.copy(jt).multiply(Ht),lt.position.set(Et,Qt-.14*Ze,Dt),lt.scale.set(Ze*(.95+nt(ht,2.3)*.32),Ze*.55,Ze),lt.updateMatrix(),Mt.setMatrixAt(zt++,lt.matrix),mt++}}const Ut=(U,K,ft)=>{const mt=.24+.74*K,bt=Math.cos(mt*Math.PI*.5),ht=ft*Math.PI*2,Et=Math.cos(ht),Dt=Math.sin(ht),Qt=nd(Et,Dt,ht,1,U),fe=.98+.08*Math.cos(14+U.seed+Dt*1.4)+.05*Math.sin(ht*4+9-U.seed),pe=Qt.lx*fe*bt*.86,le=Qt.lz*fe*bt*.86,oe=Math.cos(U.rotY),de=Math.sin(U.rotY),me=U.x+pe*oe-le*de,Ie=U.z+pe*de+le*oe,Ze=Ha(me,Ie,mt,U);return{wx:me,wy:Ze,wz:Ie}},ce=(U,K,ft)=>{const mt=.26+.48*K,bt=(mt-.5)*2*U.halfLength,ht=Math.sin(mt*Math.PI*1.65+U.seed)*2.65+Math.cos(mt*Math.PI*2.9-U.seed*.7)*1.25+(se(mt*4.2+U.seed,1.7,3)-.5)*2.35,Et=(.5-mt)*2.2+Math.sin(mt*Math.PI)*.85,Dt=(se(bt*.09+U.seed,ht*.09,3)-.5)*1.35+(tn(bt*.08+U.seed,2.3,2)-.48)*.85,Qt=(ft-.5)*U.halfThickness*1.15,fe=U.plateauTopY+Et+Dt+.28-.12*Qt,pe=Math.cos(U.rotY),le=Math.sin(U.rotY),oe=ht+Qt;return{wx:U.x+bt*pe+oe*le,wy:fe,wz:U.z-bt*le+oe*pe}};for(let U=0;U<ti.length;U++){const K=ti[U];if(!(K.topY<-3.5))for(let ft=0;ft<4&&zt<yt;ft++){const mt=31e3+U*43+ft*17,bt=Ut(K,nt(mt,3.1),nt(mt,7.9)),ht=.34+nt(mt,11.4)*.48;lt.position.set(bt.wx,bt.wy-.12*ht,bt.wz),lt.rotation.set((nt(mt,15.2)-.5)*.2,nt(mt,19.8)*Math.PI*2,(nt(mt,23.6)-.5)*.2),lt.scale.set(ht*1.15,ht*.52,ht),lt.updateMatrix(),Mt.setMatrixAt(zt++,lt.matrix)}}Mt.count=zt,Mt.instanceMatrix.needsUpdate=!0,t.add(Mt),Rt.count=It,Rt.instanceMatrix.needsUpdate=!0,Rt.name="ShorelineBasaltRockyLogs",t.add(Rt);const ne=wx(),Me=yx(),ot=bx(),Gt=Sx(),wt=Ax(),St={uTime:{value:0}},At=(U,K,ft,mt,bt)=>{U.onBeforeCompile=ht=>{Object.assign(ht.uniforms,i),ht.uniforms.uFloraTime=St.uTime,ht.vertexShader=ht.vertexShader.replace("#include <common>",`#include <common>
          uniform float uFloraTime;
          uniform float uWindStrength;
          uniform vec2 uWindDir;
          varying vec3 vFloraWorldPos;
          varying float vWindSheen;
          varying float vTipFrac;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float hFrac = clamp(position.y / ${K.toFixed(3)}, 0.0, 1.0);
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
          float steadyLean = pow(windStr, 1.12) * ${ft.toFixed(3)} * 0.44 * plantScaleH;
          float gustSurge = (0.04 + 0.68 * windStr) * ${ft.toFixed(3)} * gustPacket * plantScaleH;
          float crossEddy = sin(uFloraTime * (2.1 + 2.5 * windStr) + instW.x * 0.85 + instW.z * 1.05) * ${ft.toFixed(3)} * (0.03 + 0.15 * windStr) * plantScaleH;

          // Out-of-phase individual frond/blade/petal shiver so each frond in a fern stand dances independently!
          float frondPhase = position.x * 19.5 + position.z * 17.5 + instW.x * 3.7 + instW.z * 2.9;
          float flutter = sin(uFloraTime * (6.6 + 6.8 * windStr) + frondPhase) * ${mt.toFixed(4)} * (0.16 + 0.88 * windStr) * (0.45 + 0.55 * gustPacket) * hFrac;

          vec2 worldDispXZ =
            wDir * ((steadyLean + gustSurge) * bendProfile + flutter) +
            wPerp * (crossEddy * bendProfile + flutter * 0.55);

          // Length-preserving parabolic droop so bowed ferns & tall grasses arc naturally without stretching!
          float worldPlantH = max(${K.toFixed(3)} * plantScaleH, 0.14);
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
          vFloraWorldPos = fwPos.xyz;`),ht.fragmentShader=ht.fragmentShader.replace("#include <common>",`#include <common>
          ${Xn}
          uniform vec3 uSunColor;
          varying vec3 vFloraWorldPos;
          varying float vWindSheen;
          varying float vTipFrac;`).replace("#include <fog_fragment>",`vec3 fToFrag = vFloraWorldPos - cameraPosition;
          float fDist = length(fToFrag);
          vec3 fViewDir = fToFrag / max(fDist, 1e-4);
          // Backlit botanical subsurface translucency + traveling wind-ripple sheen + storm lightning rim!
          float sunTrans = pow(clamp(dot(fViewDir, normalize(uSunDir + vec3(0.0, 0.25, 0.0))), 0.0, 1.0), 2.2);
          vec3 sssGlow = diffuseColor.rgb * uSunColor * sunTrans * ${bt.toFixed(3)} * (0.35 + 0.65 * vTipFrac);
          vec3 gustSheen = mix(uHorizonAntiColor, uSunColor, 0.38) * vWindSheen * 0.22;
          vec3 boltRim = diffuseColor.rgb * vec3(0.75, 0.88, 1.0) * uLightningFlash * (0.45 + 0.55 * vTipFrac);
          gl_FragColor.rgb += sssGlow + gustSheen + boltRim;

          vec3 fHaze = evalHorizonHazeColor(fToFrag);
          float fAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * fDist, 1e-6), 1.26));
          gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, fHaze, clamp(fAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`)}},Vt=(U,K)=>se(U*.11+6.3,K*.11-4.7,3),ue=(U,K)=>se(U*.1-11.2,K*.1+8.4,3),Pe=new fi({name:"NordicVariedCoastalGrass",color:new Bt(16777215),vertexColors:!0,roughness:.74,metalness:0,side:on});At(Pe,.48,.38,.022,.65);const Ve=18500,he=new vs(ne,Pe,Ve);he.castShadow=!1,he.receiveShadow=!0,he.name="NordicVariedCoastalGrassInstanced";const en=new Bt;let Ne=0;const Hn=(U,K)=>{const ft=nt(U,17.1);K>.62&&ft>.42?en.setHSL(.13+(nt(U,19.4)-.5)*.025,.46,.28+nt(U,22.8)*.1):ft<.58?en.setHSL(.24+(nt(U,21.1)-.5)*.03,.48,.19+nt(U,23.7)*.1):ft<.86?en.setHSL(.16+(nt(U,25.3)-.5)*.025,.44,.25+nt(U,29.1)*.09):en.setHSL(.29+(nt(U,31.9)-.5)*.025,.32,.2+nt(U,37.4)*.08)};for(let U=0;U<dt.length;U++){const K=dt[U],ft=K.isHero?5600:1280;let mt=0,bt=0;for(;mt<ft&&bt<ft*6&&Ne<Ve-1200;){bt++;const ht=U*35e3+bt,Et=K.cx+(nt(ht,1.3)-.5)*K.spanX,Dt=K.cz+(nt(ht,7.9)-.5)*K.spanZ;if(K.isHero){const bn=Math.sqrt(Math.pow((Et-4.45)/2.35,2)+Math.pow((Dt+.85)/3.8,2)),Cn=Math.sqrt(Math.pow((Et+4.45)/2.35,2)+Math.pow((Dt+1.15)/3.8,2));if(bn<1||Cn<1)continue}const Qt=K.evalH(Et,Dt),fe=K.evalH(Et+.45,Dt),pe=K.evalH(Et,Dt+.45),le=Math.hypot(fe-Qt,pe-Qt)/.45;if(Qt<-.4||le>.58)continue;const oe=se(Et*.38+2.3,Dt*.38-4.1,3);if(oe<.28)continue;const de=ee(.56,.88,se(Et*.16-6.4,Dt*.16+9.2,3)),me=1-ee(.28,.54,oe),Ie=G.lerp(.54,.36,me)+nt(ht,3.7)*.46+de*(.48+nt(ht,6.4)*.32),Ze=.72+nt(ht,5.1)*.56+de*.16;lt.position.set(Et,Qt-.02,Dt),lt.scale.set(Ze,Ie,Ze),lt.rotation.set((nt(ht,9.2)-.5)*.14,nt(ht,11.4)*Math.PI*2,(nt(ht,13.8)-.5)*.14),lt.updateMatrix(),he.setMatrixAt(Ne,lt.matrix),Hn(ht,de),he.setColorAt(Ne,en),Ne++,mt++}}for(let U=0;U<ti.length;U++){const K=ti[U];if(!(K.topY<-3.5))for(let ft=0;ft<120&&Ne<Ve;ft++){const mt=51e4+U*310+ft,bt=Ut(K,Math.sqrt(nt(mt,2.1)),nt(mt,6.7));if(se(bt.wx*.55+1.9,bt.wz*.55-2.7,2)<.26)continue;const Et=.68+nt(mt,9.4)*.52,Dt=.42+nt(mt,12.8)*.55;lt.position.set(bt.wx,bt.wy-.02,bt.wz),lt.scale.set(Et,Dt,Et),lt.rotation.set(0,nt(mt,15.3)*Math.PI*2,0),lt.updateMatrix(),he.setMatrixAt(Ne,lt.matrix),Hn(mt,.35),he.setColorAt(Ne,en),Ne++}}for(let U=0;U<As.length;U++){const K=As[U];for(let ft=0;ft<240&&Ne<Ve;ft++){const mt=56e4+U*420+ft,bt=ce(K,nt(mt,3.4),nt(mt,8.2)),ht=.7+nt(mt,11.1)*.55,Et=.45+nt(mt,14.6)*.62;lt.position.set(bt.wx,bt.wy-.02,bt.wz),lt.scale.set(ht,Et,ht),lt.rotation.set(0,nt(mt,18.9)*Math.PI*2,0),lt.updateMatrix(),he.setMatrixAt(Ne,lt.matrix),Hn(mt,.42),he.setColorAt(Ne,en),Ne++}}he.count=Ne,he.instanceMatrix.needsUpdate=!0,he.instanceColor&&(he.instanceColor.needsUpdate=!0),t.add(he);const Mn=(U,K,ft,mt,bt)=>{const ht=U.isHero?-.22:-1.5,Et=U.isHero?-.34:-2.2,Dt=U.evalH(K,ft);if(Dt<ht)return null;const Qt=U.evalH(K+mt,ft),fe=U.evalH(K-mt,ft),pe=U.evalH(K,ft+mt),le=U.evalH(K,ft-mt);return Math.min(Qt,fe,pe,le)<Et||Math.hypot(Qt-fe,pe-le)/(2*mt)>bt?null:Dt},Ye=new fi({name:"NordicCoastalBrackenFerns",color:new Bt(16777215),vertexColors:!0,roughness:.64,metalness:0,side:on});At(Ye,.36,.34,.028,.78);const oi=2600,ln=new vs(Me,Ye,oi);ln.castShadow=!1,ln.receiveShadow=!0,ln.name="NordicCoastalBrackenFernsInstanced";const ai=new Bt;let Dn=0;for(let U=0;U<dt.length;U++){const K=dt[U],ft=K.isHero?480:210;let mt=0,bt=0;for(;mt<ft&&bt<ft*16&&Dn<oi;){bt++;const ht=41e4+U*22e3+bt,Et=K.cx+(nt(ht,3.1)-.5)*K.spanX,Dt=K.cz+(nt(ht,8.7)-.5)*K.spanZ;if(K.isHero){const de=Math.sqrt(Math.pow((Et-4.45)/2.95,2)+Math.pow((Dt+.85)/4.25,2)),me=Math.sqrt(Math.pow((Et+4.45)/2.95,2)+Math.pow((Dt+1.15)/4.25,2));if(de<1||me<1)continue}const Qt=Vt(Et,Dt);if(Qt<.49)continue;const fe=Mn(K,Et,Dt,.65,.44);if(fe===null)continue;const pe=.62+nt(ht,12.3)*.65,le=.55+nt(ht,15.9)*.72+ee(.5,.78,Qt)*.24;lt.position.set(Et,fe-.025,Dt),lt.scale.set(pe,le,pe),lt.rotation.set((nt(ht,19.1)-.5)*.14,nt(ht,23.4)*Math.PI*2,(nt(ht,27.8)-.5)*.14),lt.updateMatrix(),ln.setMatrixAt(Dn,lt.matrix),nt(ht,31.6)<.72?ai.setHSL(.25+(nt(ht,35.2)-.5)*.04,.52,.34+nt(ht,39.7)*.12):ai.setHSL(.16+(nt(ht,43.1)-.5)*.03,.54,.36+nt(ht,47.5)*.1),ln.setColorAt(Dn,ai),Dn++,mt++}}ln.count=Dn,ln.instanceMatrix.needsUpdate=!0,ln.instanceColor&&(ln.instanceColor.needsUpdate=!0),t.add(ln);const Xi=new fi({name:"NordicTallRoyalFernStands",color:new Bt(16777215),vertexColors:!0,roughness:.58,metalness:0,side:on});At(Xi,.72,.52,.038,.88);const An=1200,wn=new vs(ot,Xi,An);wn.castShadow=!0,wn.receiveShadow=!0,wn.name="NordicTallRoyalFernStandsInstanced";let Wn=0;for(let U=0;U<dt.length;U++){const K=dt[U],ft=K.isHero?185:95;let mt=0,bt=0;for(;mt<ft&&bt<ft*20&&Wn<An;){bt++;const ht=62e4+U*24e3+bt,Et=K.cx+(nt(ht,4.3)-.5)*K.spanX,Dt=K.cz+(nt(ht,9.6)-.5)*K.spanZ;if(K.isHero){const de=Math.sqrt(Math.pow((Et-4.45)/4.2,2)+Math.pow((Dt+.45)/5.4,2)),me=Math.sqrt(Math.pow((Et+4.45)/4.2,2)+Math.pow((Dt+.75)/5.4,2)),Ie=Math.sqrt(Math.pow(Et/5.5,2)+Math.pow((Dt-2.2)/5.8,2));if(de<1||me<1||Ie<1)continue}const Qt=Vt(Et,Dt);if(Qt<.54)continue;const fe=Mn(K,Et,Dt,.75,.38);if(fe===null)continue;const pe=.82+nt(ht,14.7)*.5+ee(.55,.8,Qt)*.22,le=.8+nt(ht,18.2)*.46;lt.position.set(Et,fe-.035,Dt),lt.scale.set(le,pe,le),lt.rotation.set((nt(ht,21.9)-.5)*.12,nt(ht,26.3)*Math.PI*2,(nt(ht,30.5)-.5)*.12),lt.updateMatrix(),wn.setMatrixAt(Wn,lt.matrix),nt(ht,34.8)<.76?ai.setHSL(.26+(nt(ht,38.1)-.5)*.035,.54,.36+nt(ht,42.6)*.12):ai.setHSL(.18+(nt(ht,46.9)-.5)*.03,.52,.38+nt(ht,50.4)*.1),wn.setColorAt(Wn,ai),Wn++,mt++}}wn.count=Wn,wn.instanceMatrix.needsUpdate=!0,wn.instanceColor&&(wn.instanceColor.needsUpdate=!0),t.add(wn);const Mi=new fi({name:"NordicHeatherShrubs",color:new Bt(16777215),vertexColors:!0,roughness:.72,metalness:0});At(Mi,.24,.18,.014,.48);const Zn=1600,yn=new vs(Gt,Mi,Zn);yn.castShadow=!1,yn.receiveShadow=!0,yn.name="NordicHeatherShrubsInstanced";const jn=new Bt;let Nn=0;for(let U=0;U<dt.length;U++){const K=dt[U],ft=K.isHero?260:125;let mt=0,bt=0;for(;mt<ft&&bt<ft*18&&Nn<Zn-160;){bt++;const ht=79e4+U*19e3+bt,Et=K.cx+(nt(ht,5.4)-.5)*K.spanX,Dt=K.cz+(nt(ht,10.8)-.5)*K.spanZ;if(K.isHero){const le=Math.sqrt(Math.pow((Et-4.45)/2.85,2)+Math.pow((Dt+.85)/4.2,2)),oe=Math.sqrt(Math.pow((Et+4.45)/2.85,2)+Math.pow((Dt+1.15)/4.2,2));if(le<1||oe<1)continue}if(Vt(Et,Dt)>.47||ue(Et,Dt)>.5||se(Et*.28+23.1,Dt*.28-9.7,3)<.43)continue;const fe=Mn(K,Et,Dt,.55,.46);if(fe===null)continue;const pe=.68+nt(ht,13.6)*.62;lt.position.set(Et,fe-.02,Dt),lt.scale.set(pe*1.12,pe*(.72+nt(ht,17.2)*.35),pe*1.12),lt.rotation.set((nt(ht,20.4)-.5)*.14,nt(ht,24.9)*Math.PI*2,(nt(ht,28.3)-.5)*.14),lt.updateMatrix(),yn.setMatrixAt(Nn,lt.matrix),jn.setHSL(.86+(nt(ht,37.1)-.5)*.05,.38,.44+nt(ht,41.2)*.12),yn.setColorAt(Nn,jn),Nn++,mt++}}for(let U=0;U<ti.length;U++){const K=ti[U];if(!(K.topY<-3.5))for(let ft=0;ft<14&&Nn<Zn;ft++){const mt=88e4+U*97+ft,bt=Ut(K,.25+nt(mt,4.1)*.65,nt(mt,8.9)),ht=.65+nt(mt,12.2)*.55;lt.position.set(bt.wx,bt.wy-.02,bt.wz),lt.scale.set(ht*1.1,ht*.78,ht*1.1),lt.rotation.set(0,nt(mt,16.7)*Math.PI*2,0),lt.updateMatrix(),yn.setMatrixAt(Nn,lt.matrix),jn.setHSL(.87,.36,.46+nt(mt,21.3)*.1),yn.setColorAt(Nn,jn),Nn++}}yn.count=Nn,yn.instanceMatrix.needsUpdate=!0,yn.instanceColor&&(yn.instanceColor.needsUpdate=!0),t.add(yn);const Ds=new fi({name:"NordicCliffWildflowers",vertexColors:!0,roughness:.56,metalness:0,side:on});At(Ds,.32,.3,.024,.62);const B=2400,at=new vs(wt,Ds,B);at.castShadow=!1,at.receiveShadow=!0,at.name="NordicCliffWildflowersInstanced";const pt=new Bt;let gt=0;for(let U=0;U<dt.length;U++){const K=dt[U],ft=K.isHero?540:195;let mt=0,bt=0;for(;mt<ft&&bt<ft*18&&gt<B;){bt++;const ht=9e4+U*26e3+bt,Et=K.cx+(nt(ht,2.7)-.5)*K.spanX,Dt=K.cz+(nt(ht,6.3)-.5)*K.spanZ;if(K.isHero){const le=Math.sqrt(Math.pow((Et-4.45)/2.85,2)+Math.pow((Dt+.85)/4.25,2)),oe=Math.sqrt(Math.pow((Et+4.45)/2.85,2)+Math.pow((Dt+1.15)/4.25,2));if(le<1||oe<1)continue}if(Vt(Et,Dt)>.48||ue(Et,Dt)<.5)continue;const Qt=Mn(K,Et,Dt,.7,.34);if(Qt===null)continue;const fe=.65+nt(ht,11.9)*.58;lt.position.set(Et,Qt-.015,Dt),lt.scale.set(fe,fe*(.82+nt(ht,14.2)*.38),fe),lt.rotation.set((nt(ht,18.5)-.5)*.12,nt(ht,22.1)*Math.PI*2,(nt(ht,26.8)-.5)*.12),lt.updateMatrix(),at.setMatrixAt(gt,lt.matrix);const pe=se(Et*.085+13.1,Dt*.085-9.4,2);pe<.44?pt.setHSL(.94+(nt(ht,31.1)-.5)*.03,.52,.68+nt(ht,33.7)*.1):pe<.76?pt.setHSL(.12,.12,.88+nt(ht,35.9)*.08):pt.setHSL(.13+(nt(ht,39.2)-.5)*.02,.78,.58+nt(ht,41.8)*.08),at.setColorAt(gt,pt),gt++,mt++}}at.count=gt,at.instanceMatrix.needsUpdate=!0,at.instanceColor&&(at.instanceColor.needsUpdate=!0),t.add(at),t.add(Mx(i));const Pt=lx([{x:-2,z:-8,radius:22.5},{x:-18,z:-26,radius:18},{x:27.5,z:-10.5,radius:6.5},{x:-37.5,z:-22,radius:7.2},{x:I,z:k,radius:5.8,boost:1},{x:-66,z:-32,radius:25.5},{x:-91,z:-42.5,radius:21},{x:88,z:36,radius:34.5},{x:59.5,z:23,radius:11},{x:43.5,z:14.5,radius:6.2},{x:63,z:50.5,radius:8.2},{x:88,z:-56,radius:30.5},{x:70,z:-22.5,radius:17.5},{x:-124,z:-86,radius:34},{x:-42,z:-96,radius:20},{x:36,z:-108,radius:22},{x:-144,z:78,radius:44},{x:168,z:122,radius:42},{x:-206,z:-96,radius:46},{x:-8,z:-222,radius:58},{x:-18,z:236,radius:32}],i);t.add(Pt.mesh);const Wt=[],qt=[{cx:-2,cz:-8,rMax:42,rays:84,boost:1.15},{cx:-68,cz:-33,rMax:44,rays:52,boost:1.05},{cx:88,cz:36,rMax:48,rays:44,boost:.95},{cx:84,cz:-46,rMax:48,rays:40,boost:.95},{cx:-124,cz:-86,rMax:46,rays:28,boost:.9}];for(let U=0;U<qt.length;U++){const K=qt[U];for(let ft=0;ft<K.rays;ft++){const mt=ft/K.rays*Math.PI*2+(nt(U*97+ft,13.7)-.5)*.05,bt=Math.cos(mt),ht=Math.sin(mt);for(let Et=K.rMax;Et>=4.5;Et-=.75){const Dt=K.cx+bt*Et,Qt=K.cz+ht*Et;if(Ti(Dt,Qt)>=_e-.35){Ti(Dt+bt*1.2,Qt+ht*1.2)<_e-.45&&Wt.push({x:Dt+bt*.25,z:Qt+ht*.25,landX:-bt,landZ:-ht,boost:K.boost});break}}}}for(let U=0;U<ti.length;U++){const K=ti[U];for(let ft=0;ft<10;ft++){const mt=ft/10*Math.PI*2+nt(U*31+ft,7.3)*.3,bt=(K.rx*Math.abs(Math.cos(mt))+K.rz*Math.abs(Math.sin(mt)))*.92+.6;Wt.push({x:K.x+Math.cos(mt)*bt,z:K.z+Math.sin(mt)*bt,landX:-Math.cos(mt),landZ:-Math.sin(mt),boost:1.12})}}for(let U=0;U<As.length;U++){const K=As[U],ft=Math.cos(K.rotY),mt=Math.sin(K.rotY);for(let bt=0;bt<16;bt++){const ht=-.82+bt/15*1.64;if(!(Math.abs(ht*K.halfLength)<K.openingHalfSpan*.72))for(const Et of[-1,1]){const Dt=ht*K.halfLength,Qt=Et*(K.halfThickness*1.15),fe=K.x+Dt*ft+Qt*mt,pe=K.z-Dt*mt+Qt*ft;Wt.push({x:fe,z:pe,landX:-Et*mt,landZ:-Et*ft,boost:1.1})}}}const Yt=2400,ie=new Float32Array(Yt*3),ae=new Float32Array(Yt*3),Jt=new Float32Array(Yt*3),ye=Math.max(1,Wt.length);for(let U=0;U<Yt;U++){const K=Wt[U%ye]??{x:0,z:12,landX:0,landZ:-1,boost:1},ft=-K.landZ,mt=K.landX,bt=(nt(U,9.1)-.5)*2.6,ht=(nt(U,15.4)-.4)*1.1;ie[U*3]=K.x+ft*bt+K.landX*ht,ie[U*3+1]=_e+.08+nt(U,21.8)*.45,ie[U*3+2]=K.z+mt*bt+K.landZ*ht;const Et=nt(U,28.3)<.72?1:-.45,Dt=(1.6+nt(U,34.7)*3.8)*Et*K.boost,Qt=(nt(U,41.2)-.5)*2.8;ae[U*3]=K.landX*Dt+ft*Qt,ae[U*3+1]=(4.4+Math.pow(nt(U,49.6),.72)*5.8)*K.boost,ae[U*3+2]=K.landZ*Dt+mt*Qt,Jt[U*3]=nt(U,57.3),Jt[U*3+1]=.48+nt(U,64.9)*.36,Jt[U*3+2]=.55+nt(U,73.1)*.95}const we=new Zt;we.setAttribute("position",new Q(ie,3)),we.setAttribute("aVelocity",new Q(ae,3)),we.setAttribute("aMeta",new Q(Jt,3));const $e={...i,uWaveEnergy:{value:1}},De=new He({name:"CoastalWaveRockSplashParticles",transparent:!0,depthWrite:!1,uniforms:$e,vertexShader:`
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
    `}),Ae=new to(we,De);Ae.renderOrder=4,Ae.frustumCulled=!1,t.add(Ae);const te=3200,ze=new Zt;ze.setAttribute("position",new Q(new Float32Array([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0]),3)),ze.setAttribute("uv",new Q(new Float32Array([0,0,1,0,1,1,0,1]),2)),ze.setIndex([0,1,2,0,2,3]);const Ce=new e0;Ce.index=ze.index,Ce.attributes.position=ze.attributes.position,Ce.attributes.uv=ze.attributes.uv;const an=new Float32Array(te*3),Un=new Float32Array(te*2);for(let U=0;U<te;U++)an[U*3]=(nt(U,3.7)-.5)*92,an[U*3+1]=(nt(U,11.9)-.5)*48,an[U*3+2]=(nt(U,19.3)-.5)*92,Un[U*2]=nt(U,29.1),Un[U*2+1]=nt(U,43.7);Ce.setAttribute("aRainOffset",new $a(an,3)),Ce.setAttribute("aRainSeed",new $a(Un,2)),Ce.instanceCount=te;const cn=new E(0,2.5,8),wi={...i,uCamCenter:{value:cn}},Ue=new He({name:"NordicPhysicalRainStreaks",transparent:!0,depthWrite:!1,side:on,uniforms:wi,vertexShader:`
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
    `}),nn=new Oe(Ce,Ue);nn.renderOrder=6,nn.frustumCulled=!1,t.add(nn);const vn=900,Qe=new Float32Array(vn*3),hn=new Float32Array(vn*2);for(let U=0;U<vn;U++){let K=0,ft=0,mt=0;U<540?(K=(nt(U,7.1)-.5)*44,mt=-12+(nt(U,15.9)-.5)*38,ft=Math.max(_e+.14,Bi(K,mt)+.04)):(K=(nt(U,23.4)-.5)*110,mt=-16+(nt(U,31.8)-.5)*110,ft=_e+.14),Qe[U*3]=K,Qe[U*3+1]=ft,Qe[U*3+2]=mt,hn[U*2]=nt(U,47.2),hn[U*2+1]=nt(U,61.5)}const yi=new Zt;yi.setAttribute("position",new Q(Qe,3)),yi.setAttribute("aSplashSeed",new Q(hn,2));const kn=new He({name:"NordicRaindropSurfaceSplashes",transparent:!0,depthWrite:!1,uniforms:wi,vertexShader:`
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
    `}),ri=new to(yi,kn);ri.renderOrder=5,ri.frustumCulled=!1,t.add(ri);const bi=1100,Kn=new Float32Array(bi*3),To=new Float32Array(bi);for(let U=0;U<bi;U++)Kn[U*3]=(nt(U,31.7)-.5)*76,Kn[U*3+1]=-9.5+nt(U,47.3)*32,Kn[U*3+2]=-22+nt(U,59.1)*64,To[U]=nt(U,73.9);const un=new Zt;un.setAttribute("position",new Q(Kn,3)),un.setAttribute("aSeed",new Q(To,1));const lr={uTime:{value:0},uColor:i.uSunColor,uWindStrength:i.uWindStrength,uWindDir:i.uWindDir,uLightningFlash:i.uLightningFlash},vt=new He({transparent:!0,depthWrite:!1,blending:Go,uniforms:lr,vertexShader:`
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
    `}),Ft=new to(un,vt);return Ft.renderOrder=5,Ft.frustumCulled=!1,t.add(Ft),{group:t,ocean:Pt,update(U,K){St.uTime.value=U,lr.uTime.value=U,Pt.update(U);const ft=Pt.params;$e.uWaveEnergy.value=.45+ft.waveAmplitude*(.55+.45*ft.seaChoppiness),K&&cn.copy(K);const mt=i.uRainIntensity.value>.005;nn.visible=mt,ri.visible=mt}}}const Je={neckArch:.16,neckYaw:.08,headPitch:-.04,headYaw:.14,headRoll:-.08,earPerk:.76,earAsymmetry:.06,cheekNubFlare:.5,eyeYaw:.06,eyePitch:.02,pupilDilation:.76,blink:0,squint:0,jawOpen:0,teethExtension:0,tongueExtend:.12,tongueCurl:.08,wingUnfurl:.46,wingFlap:.08,wingSweep:-.05,wingCamber:.3,wingWristFold:0,wingTipLag:0,pelvicFinFlare:.9,dorsalSpineSplit:.22,spineArch:.08,spineTwist:.02,forelegStance:.1,hindlegStance:.06,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:.2,tailPitch:.26,tailCurl:.16,tailWaveAmp:0,tailWavePhase:0,rightTailFinFlare:.24,leftProstheticFinFlare:.24,autoSyncProstheticTail:!0,subtleBreathing:!0,alphaGlow:.08,biolumGlow:0,lightningCloak:0},id=[{id:"hero-perch",label:"Hero Perch",subtitle:"Noble Alpha Sentinel",patch:{...Je}},{id:"gummy-smile",label:"Gummy Grin",subtitle:"Toothless Happy Smile",patch:{...Je,headYaw:.22,headPitch:-.06,headRoll:-.24,earPerk:.96,pupilDilation:.94,squint:.22,jawOpen:.34,teethExtension:0,tongueExtend:.58,tongueCurl:.26,tailYaw:.36}},{id:"courtship-cape",label:"Courtship Cape",subtitle:"Beach Wing-Display Dance",patch:{...Je,forelegStance:.52,neckArch:.48,headYaw:.28,headPitch:.08,headRoll:-.18,earPerk:1,pupilDilation:.96,jawOpen:.26,teethExtension:0,tongueExtend:.42,wingUnfurl:.96,wingFlap:.88,wingSweep:.44,wingCamber:.68,dorsalSpineSplit:.85}},{id:"curious-tilt",label:"Curious Tilt",subtitle:"Asymmetric Ear-Perk",patch:{...Je,headRoll:-.62,headYaw:.14,headPitch:.08,earPerk:.92,earAsymmetry:-.45,pupilDilation:.92,jawOpen:.05,teethExtension:0}},{id:"alpha-roar",label:"Alpha Roar",subtitle:"Split Spines & Cyan Fire",patch:{...Je,forelegStance:-.48,spineArch:.36,neckArch:-.22,headPitch:-.22,earPerk:.08,squint:.42,pupilDilation:.08,jawOpen:.88,teethExtension:1,tongueExtend:.52,tongueCurl:.46,wingUnfurl:.92,wingFlap:.46,wingSweep:.28,dorsalSpineSplit:1,alphaGlow:1,biolumGlow:.65,lightningCloak:.35}},{id:"lightning-storm",label:"Storm Skrill",subtitle:"Arc-Plasma Overload",patch:{...Je,forelegStance:-.35,wingUnfurl:.98,wingFlap:.62,wingCamber:.72,dorsalSpineSplit:1,pupilDilation:.16,jawOpen:.54,teethExtension:1,alphaGlow:1,biolumGlow:.92,lightningCloak:1}}];function Ks(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const Cx=new E(-.16,.985,.06).normalize(),Px=new E(.16,.985,.06).normalize(),sd=new E().crossVectors(Cx,Jo).normalize(),Rx=new E().crossVectors(Jo,sd).normalize(),od=new E().crossVectors(Px,ta).normalize(),Lx=new E().crossVectors(ta,od).normalize();class Ix{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new On;tmpQuat=new rn;tmpQuatB=new rn;tmpVecA=new E;tmpVecB=new E;tmpVecC=new E;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;prevHeadRoll=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...Je,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,Je),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.autoSyncProstheticTail&&(t.rightTailFinFlare!==void 0?this.state.leftProstheticFinFlare=t.rightTailFinFlare:t.leftProstheticFinFlare!==void 0?this.state.rightTailFinFlare=t.leftProstheticFinFlare:t.autoSyncProstheticTail===!0&&(this.state.leftProstheticFinFlare=this.state.rightTailFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0};const e=4.6,n=t%e,s=Math.floor(t/e);let o=0;n>3.85&&n<4.03?o=Math.sin((n-3.85)/.18*Math.PI):s%3===1&&n>4.12&&n<4.29&&(o=Math.sin((n-4.12)/.17*Math.PI));const a=(t+1.3)%6.2,r=a<.22?Math.sin(a/.22*Math.PI)*.085:0,l=(t+3.9)%7.4,c=l<.2?-Math.sin(l/.2*Math.PI)*.075:0,h=Math.sin(t*.72)*.032+Math.sin(t*1.95+1.1)*.014,u=Math.cos(t*.58+.4)*.022,d=Math.sin(t*1.15)*.025;return{autoBlink:o,earTwitchL:r,earTwitchR:c,gazeMicroX:h,gazeMicroY:u,pupilPulse:d}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const m=new re().copy(this.asset.rootGroup.matrixWorld).invert(),v=new re().multiplyMatrices(m,c.parent.matrixWorld),g=new E().setFromMatrixPosition(new re().multiplyMatrices(v,new re().makeTranslation(c.position.x,c.position.y,c.position.z))),f=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),w=l.bindWorldPositions.get(n),_=new E().subVectors(p,f),x=new E().subVectors(w,p),y=_.length(),b=x.length(),A=w.clone();a&&(A.add(a),A.y=Math.max(w.y,A.y));const T=new E().subVectors(A,g),S=T.length(),M=(y+b)*.968,P=Math.abs(y-b)+.085,C=G.clamp(S,P,M),R=T.normalize(),F=o.clone().addScaledVector(R,-o.dot(R)).normalize(),I=G.clamp((y*y+C*C-b*b)/(2*y*C),-1,1),k=Math.sqrt(Math.max(0,1-I*I)),N=g.clone().addScaledVector(R,y*I).addScaledVector(F,y*k),D=g.clone().addScaledVector(R,C),O=new E().subVectors(N,g).normalize(),H=new E().subVectors(D,N).normalize(),Z=new rn().setFromUnitVectors(_.clone().normalize(),O),q=new rn().setFromUnitVectors(x.clone().normalize(),H),$=new rn().setFromRotationMatrix(v);c.quaternion.copy($).invert().multiply(Z),h.quaternion.copy(Z).invert().multiply(q),u.quaternion.copy(q).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch,this.prevHeadRoll=this.state.headRoll;const o=68,a=11.5,r=G.clamp(-n*.055,-.28,.28),l=G.clamp(-s*.055,-.28,.28);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=G.clamp(e.airborneFactor,0,1),s=this.sampleLivingIdleMicros(t),o=e.subtleBreathing?Math.sin(t*1.55)*.8+Math.sin(t*3.1)*.2:0,a=e.subtleBreathing?Math.sin(t*1.15-.5)*.02:0,r=Ks(.02,.55,Math.abs(e.legFlightTuck))*(1-n),l=Math.max(n,r),c=1-l,h=e.forelegStance>=0?e.forelegStance*.055:e.forelegStance*.275,u=e.hindlegStance>=0?e.hindlegStance*.048:e.hindlegStance*.245,d=.52*h+.48*u,m=G.clamp((u-h)*.44,-.22,.24),v=G.clamp(e.limbStride,-1,1)*.045*c,g=r*.34;this.setBonePose("root",m*c,v,0,"XYZ",0,d*c+g+o*.004,0);const f=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+f,-e.spineTwist*.05-v*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+o*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+o*.008,e.spineTwist*.07,0),this.setBonePose("chest",-m*.32*c+o*.01-f*.6,e.spineTwist*.07+v*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const p=G.clamp(e.limbStride,-1,1),w=Math.max(0,-e.forelegStance),_=Math.max(0,-e.hindlegStance);for(const J of["L","R"]){const st=J==="L"?1:-1,Y=this.asset.rig.boneMap.get(`scapula_${J}`);if(this.setBonePose(`scapula_${J}`,0,0,0),Y.updateMatrixWorld(!0),l<.999){const j=st*p*.23,ut=-st*p*.22,tt=Math.max(0,st*p)*Math.sin(Math.abs(p)*Math.PI)*.042,z=Math.max(0,-st*p)*Math.sin(Math.abs(p)*Math.PI)*.038,_t=new E(st*w*.055,tt,j+w*.045),xt=new E(st*_*.05,z,ut-_*.04);this.asset.rootGroup.updateMatrixWorld(!1);const Ct=new re().copy(this.asset.rootGroup.matrixWorld).invert(),Tt=this.asset.rig.boneMap.get(`shoulder_${J}`);Tt.position.copy(this.restPos.get(`shoulder_${J}`)),Tt.updateMatrixWorld(!0);const Nt=this.tmpVecC.setFromMatrixPosition(Tt.matrixWorld).applyMatrix4(Ct),lt=this.asset.rig.bindWorldPositions.get(`wrist_${J}`).clone().add(_t),W=Nt.distanceTo(lt)-.675;W>0&&(this.setBonePose(`scapula_${J}`,0,0,0,"XYZ",0,-W*1.08*c,0),Y.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${J}`,`elbow_${J}`,`wrist_${J}`,`forepaw_${J}`,this.tmpVecA.set(st*(.2+.16*w),-.08+.18*w,-1).normalize(),_t,tt*2.2),this.solvePlantedLimbIK(`hip_${J}`,`knee_${J}`,`ankle_${J}`,`hindpaw_${J}`,this.tmpVecB.set(st*(.2+.14*_),.14+.16*_,1).normalize(),xt,z*2)}if(l>.001){const j=G.clamp(e.legFlightTuck,-1,1),ut=e.wingFlap*.082*l,tt=Math.sin(t*2.05+(J==="L"?0:1.25))*.052*l,z=Math.cos(t*1.58+(J==="L"?.7:2.2))*.046*l,_t=(j>=0?.86*j:-.44*-j)+ut*.65+tt*.5,xt=j>=0?-st*.06*j:0,Ct=(j>=0?st*.09*j:st*.05*-j)+st*z*.35,Tt=(j>=0?.34*j:.28*-j)-ut*.55+z*.65,Nt=(j>=0?.4*j:.2*-j)+tt*.7,lt=(j>=0?.36*j:-.1*-j)+z*.55,W=(j>=0?1.16*j:-.48*-j)+ut*.55+z*.55,L=(j>=0?-st*.05*j:0)+st*tt*.25,rt=(j>=0?st*.07*j:st*.05*-j)+st*tt*.3,dt=(j>=0?-.66*j:.34*-j)-ut*.5-tt*.65,yt=(j>=0?.78*j:-.16*-j)+ut*.45+z*.75,Mt=(j>=0?.62*j:.16*-j)+tt*.6,zt=(kt,Rt,It,Lt)=>{const Ot=this.asset.rig.boneMap.get(kt);this.tmpEuler.set(Rt,It,Lt,"XYZ"),this.tmpQuat.copy(this.restQuat.get(kt)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),l>=.999?(Ot.position.copy(this.restPos.get(kt)),Ot.quaternion.copy(this.tmpQuat)):Ot.quaternion.slerp(this.tmpQuat,l)};zt(`shoulder_${J}`,_t,xt,Ct),zt(`elbow_${J}`,Tt,0,0),zt(`wrist_${J}`,Nt,0,0),zt(`forepaw_${J}`,lt,0,0),zt(`hip_${J}`,W,L,rt),zt(`knee_${J}`,dt,0,0),zt(`ankle_${J}`,yt,0,0),zt(`hindpaw_${J}`,Mt,0,0)}}const x=Ks(.28,.85,e.jawOpen),y=-e.neckArch*.12-o*.009-x*.035,b=e.neckYaw*.13;this.setBonePose("neck_1",y+e.headPitch*.04,b+e.headYaw*.05,e.headRoll*.04,"YXZ"),this.setBonePose("neck_2",y+e.headPitch*.07,b+e.headYaw*.09,e.headRoll*.07,"YXZ"),this.setBonePose("neck_3",y*.9+e.headPitch*.1,b+e.headYaw*.14,e.headRoll*.11,"YXZ"),this.setBonePose("neck_4",y*.8+e.headPitch*.14,b*.85+e.headYaw*.19,e.headRoll*.15,"YXZ"),this.setBonePose("head",e.headPitch*.36+o*.01-x*.05,e.headYaw*.46,e.headRoll*.36,"YXZ");const A=G.clamp(e.earPerk-x*.28,0,1),T=(A-.5)*.72,S=e.headRoll*.18;for(const J of["L","R"]){const st=J==="L"?1:-1,Y=J==="L"?s.earTwitchL:s.earTwitchR,j=st*(e.earAsymmetry*.28+S)+Y,ut=T+j+this.earLagPitch*.65,tt=(1-A)*.36-st*this.earLagYaw*.55;this.setBonePose(`ear_${J}_1`,ut*.65,-st*tt,st*ut*.25,"YXZ"),this.setBonePose(`ear_${J}_2`,ut*.36+this.earLagPitch*.35,-st*tt*.35,0,"YXZ"),this.setBonePose(`ear_${J}_3`,ut*.24+this.earLagPitch*.25,0,0,"YXZ");const _t=(G.clamp(e.cheekNubFlare+x*.22,0,1)-.5)*.44;this.setBonePose(`cheekUpper_${J}_1`,_t*.3,-st*(_t*.55+this.earLagYaw*.25),0),this.setBonePose(`cheekLower_${J}_1`,_t*.2,-st*(_t*.45+this.earLagYaw*.2),0)}const M=G.clamp(e.eyeYaw+s.gazeMicroX,-1,1),P=G.clamp(e.eyePitch+s.gazeMicroY,-1,1),C=Math.max(e.blink,s.autoBlink*(1-e.blink)),R=G.clamp(e.squint+x*.26,0,1);for(const J of["L","R"]){const st=J==="L"?sd:od,Y=J==="L"?Rx:Lx;this.tmpQuat.setFromAxisAngle(Y,M*.34),this.tmpQuatB.setFromAxisAngle(st,-P*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${J}`,this.tmpQuat);const j=P>0?-P*.14:-P*.22,ut=P>0?P*.12:P*.08,tt=G.clamp(Math.max(C,R*.52)+j*(1-C),-.14,1),z=G.clamp(Math.max(C,R*.6)+ut*(1-C),-.1,1);this.tmpQuat.setFromAxisAngle(st,tt*.72),this.setBoneAxisQuat(`eyelidUpper_${J}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(st,-z*.64),this.setBoneAxisQuat(`eyelidLower_${J}`,this.tmpQuat)}const F=G.clamp(e.pupilDilation+s.pupilPulse-x*.25,0,1);this.asset.materials.eyeMaterials.uniforms.uPupilDilation.value=F,this.asset.materials.eyeMaterials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uTime.value=t,this.asset.materials.uniforms.uAlphaGlow.value=e.alphaGlow,this.asset.materials.uniforms.uBiolumGlow.value=e.biolumGlow,this.asset.materials.uniforms.uLightningCloak.value=e.lightningCloak,this.setBonePose("jaw",e.jawOpen*.66,0,0);const I=.28+.72*Ks(0,.14,e.jawOpen),N=1-e.teethExtension*I;this.setBonePose("teethUpper",0,0,0,"XYZ",0,N*.025,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-N*.023,0);const D=Ks(.06,.48,e.jawOpen),O=e.tongueExtend*.044*D;if(e.tongueCurl>=0){const J=-e.tongueCurl*(.018+.2*D);this.setBonePose("tongue_1",J*.35,0,0,"XYZ",0,0,O),this.setBonePose("tongue_2",J*.65,0,0),this.setBonePose("tongue_3",J*.95,0,0),this.setBonePose("tongue_4",J*1.15,0,0)}else{const J=D*Ks(.2,.95,e.tongueExtend),st=-e.tongueCurl*J;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,O),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",st*.13,0,0),this.setBonePose("tongue_4",st*.2,0,0)}const H=G.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),Z=G.lerp(.11,.74,l);for(const J of["L","R"]){const st=J==="L"?1:-1,Y=e.wingFlap*(.25+.75*e.wingUnfurl),j=st*(Y>=0?Y*.74:Y*Z),ut=Y<0?Y*G.lerp(.04,.26,n)*e.wingUnfurl:0,tt=st*e.wingSweep*.44,z=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${J}`,.05*H,st*.12*H,j*.18,"YXZ"),this.setBonePose(`wingShoulder_${J}`,e.wingCamber*.09,st*.82*H+tt,j-st*.22*H,"YXZ"),this.setBonePose(`wingElbow_${J}`,0,-st*(1.42*H+z*.45),st*.86*H+j*.22+st*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${J}`,-.35*H-e.wingCamber*.18,st*(1.32*H+z*.55)+tt*.35,st*.12*H+st*ut*.3+st*e.wingTipLag*.26,"YXZ");for(let xt=1;xt<=6;xt++){const Ct=(xt-1)/5,Tt=st*(-.38+Ct*.58)*H,Nt=-e.wingCamber*(.14+.18*(1-Ct))-.1*H,lt=e.wingTipLag*(.18+.26*Ct),W=Y>=0?-Y*.22:-Y*G.lerp(.06*Math.pow(Math.max(0,(Ct-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${J}_${xt}_a`,Nt,Tt,st*(W*.4+lt*.45),"YXZ"),this.setBonePose(`wingFinger_${J}_${xt}_b`,Nt*.5,Tt*.25,st*(W*.7+lt*.75),"YXZ")}const _t=1-e.pelvicFinFlare;for(let xt=1;xt<=3;xt++)this.setBonePose(`pelvicFin_${J}_${xt}`,0,0,-st*_t*1.18,"XYZ")}for(const J of this.asset.dorsalSpineMeshes)J.morphTargetInfluences&&J.morphTargetInfluences.length>0&&(J.morphTargetInfluences[0]=e.dorsalSpineSplit);const q=e.autoSyncProstheticTail?e.rightTailFinFlare:e.leftProstheticFinFlare,$=Math.min(e.rightTailFinFlare,q),X=$<0?Math.sin(Math.abs($)*1.38)*.53:.02;for(let J=1;J<=10;J++){const st=J/10,Y=J>=9,j=Y?0:e.tailYaw*.13+e.tailCurl*.18*Math.pow(st,1.4)+a*st,ut=Y?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-J*.48)*.085*(.4+.6*st);let tt=Y?0:e.tailPitch*.088*(.45+st)+ut;if(!Y&&n<.85&&J>=2&&J<=8){const z=Math.max(0,(X-.05)*.135)*(1-n);tt<z&&(tt=G.lerp(tt,z,Ks(1,5,J)))}if(this.setBonePose(`tail_${J}`,tt,j,0,"YXZ"),n<.85){const z=this.asset.rig.boneMap.get(`tail_${J}`);z.parent.updateMatrixWorld(!0),z.updateMatrixWorld(!0);const _t=this.tmpVecC.setFromMatrixPosition(z.matrixWorld),Ct=Bi(_t.x,_t.z)+(J>=8?.055+X:.065);if(_t.y<Ct&&J>1){const Tt=z.parent,Nt=z.position.length(),lt=Math.min(.45,(Ct-_t.y)/Math.max(.15,Nt))*(1-n);this.tmpEuler.set(lt,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),Tt.quaternion.multiply(this.tmpQuat),Tt.updateMatrixWorld(!0)}}}const V=1.38,et=e.rightTailFinFlare*V,it=q*V;this.setBonePose("tailFinHinge_R",0,0,-et,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,it,"XYZ");for(let J=1;J<=5;J++)this.setBonePose(`tailFin_R_${J}`,0,0,0),this.setBonePose(`tailFin_L_${J}`,0,0,0);this.setBonePose("prostheticCollar",0,0,it*.22),this.setBonePose("prostheticRod",0,0,0),this.asset.rig.rootBone.updateMatrixWorld(!0)}}function ad(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Oh(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Rs(i){const t=Math.max(0,Math.min(1,(i-1.44)/.625)),e=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(t-.78)/.22),2))),n=.054*Oh(t,.36,.23),s=-.046*ad(.5,.88,t),o=.013*Oh(t,.77,.13);return(.204+n+s+o)*e}function ls(i){const t=Math.max(0,Math.min(1,(i-1.55)/.5149999999999999)),e=.022*Math.pow(1-ad(0,.44,t),1.55),n=-.008*Math.sin(t*Math.PI);return 1.482+e+n}const rd=[{rootX:.018,rootY:.116,rootZ:-3.34,tipX:.34,tipY:.126,tipZ:-3.32},{rootX:.018,rootY:.116,rootZ:-3.5,tipX:.45,tipY:.13,tipZ:-3.52},{rootX:.018,rootY:.116,rootZ:-3.66,tipX:.44,tipY:.13,tipZ:-3.74},{rootX:.018,rootY:.116,rootZ:-3.82,tipX:.34,tipY:.125,tipZ:-3.96},{rootX:.018,rootY:.116,rootZ:-3.97,tipX:.18,tipY:.12,tipZ:-4.14}],ld=[{parentBone:"tail_1",rootX:.155,rootY:.7,rootZ:-.78,tipX:.37,tipY:.68,tipZ:-.92},{parentBone:"tail_2",rootX:.13,rootY:.62,rootZ:-1.02,tipX:.42,tipY:.59,tipZ:-1.19},{parentBone:"tail_2",rootX:.105,rootY:.55,rootZ:-1.24,tipX:.31,tipY:.52,tipZ:-1.42}],ea=new E(.415,.035,.909).normalize(),na=new E(-.415,.035,.909).normalize(),Ka=.075;function cd(i,t){const e=i==="L"?1:-1,n=t?`forepaw_${i}`:`hindpaw_${i}`,s=e*(t?.292:.274),o=t?.935:-.51,a=.036,r=t?.074:.069,l=[],c=[-.84,-.28,.28,.84];for(let h=0;h<4;h++){const u=c[h]+e*.05,d=h===1||h===2,m=(t?.106:.098)*(d?1:.86),v=(t?.054:.05)*(d?1:.88);l.push({pawBone:n,rootX:s+Math.sin(u)*r,rootY:a,rootZ:o+Math.cos(u)*.032,dirX:Math.sin(u)*.9,dirZ:Math.cos(u),toeLength:m,baseRadius:d?.037:.033,tipRadius:d?.024:.021,clawLength:v})}return l}function Fx(){const i=[{name:"root",parent:null,worldPos:[0,.79,.11]},{name:"pelvis",parent:"root",worldPos:[0,.77,-.5]},{name:"spine_1",parent:"root",worldPos:[0,.78,.13]},{name:"spine_2",parent:"spine_1",worldPos:[0,.84,.46]},{name:"chest",parent:"spine_2",worldPos:[0,.91,.79]},{name:"neck_1",parent:"chest",worldPos:[0,1.04,.99]},{name:"neck_2",parent:"neck_1",worldPos:[0,1.19,1.14]},{name:"neck_3",parent:"neck_2",worldPos:[0,1.35,1.28]},{name:"neck_4",parent:"neck_3",worldPos:[0,1.47,1.4]},{name:"head",parent:"neck_4",worldPos:[0,1.535,1.51]},{name:"eye_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eye_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidUpper_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidLower_L",parent:"head",worldPos:[.158,1.558,1.848]},{name:"eyelidUpper_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"eyelidLower_R",parent:"head",worldPos:[-.158,1.558,1.848]},{name:"teethUpper",parent:"head",worldPos:[0,1.495,1.8]},{name:"jaw",parent:"head",worldPos:[0,1.49,1.55]},{name:"teethLower",parent:"jaw",worldPos:[0,1.472,1.8]},{name:"tongue_1",parent:"jaw",worldPos:[0,1.472,1.62]},{name:"tongue_2",parent:"tongue_1",worldPos:[0,1.472,1.72]},{name:"tongue_3",parent:"tongue_2",worldPos:[0,1.472,1.82]},{name:"tongue_4",parent:"tongue_3",worldPos:[0,1.47,1.91]},{name:"ear_L_1",parent:"head",worldPos:[.118,1.665,1.48]},{name:"ear_L_2",parent:"ear_L_1",worldPos:[.142,1.748,1.38]},{name:"ear_L_3",parent:"ear_L_2",worldPos:[.156,1.815,1.29]},{name:"ear_R_1",parent:"head",worldPos:[-.118,1.665,1.48]},{name:"ear_R_2",parent:"ear_R_1",worldPos:[-.142,1.748,1.38]},{name:"ear_R_3",parent:"ear_R_2",worldPos:[-.156,1.815,1.29]},{name:"cheekUpper_L_1",parent:"head",worldPos:[.222,1.568,1.49]},{name:"cheekUpper_L_2",parent:"cheekUpper_L_1",worldPos:[.268,1.592,1.4]},{name:"cheekUpper_R_1",parent:"head",worldPos:[-.222,1.568,1.49]},{name:"cheekUpper_R_2",parent:"cheekUpper_R_1",worldPos:[-.268,1.592,1.4]}];for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`scapula_${e}`,parent:"chest",worldPos:[n*.2,.87,.81]},{name:`shoulder_${e}`,parent:`scapula_${e}`,worldPos:[n*.232,.75,.83]},{name:`elbow_${e}`,parent:`shoulder_${e}`,worldPos:[n*.278,.435,.74]},{name:`wrist_${e}`,parent:`elbow_${e}`,worldPos:[n*.288,.142,.87]},{name:`forepaw_${e}`,parent:`wrist_${e}`,worldPos:[n*.292,.04,.965]},{name:`hip_${e}`,parent:"pelvis",worldPos:[n*.192,.71,-.5]},{name:`knee_${e}`,parent:`hip_${e}`,worldPos:[n*.256,.425,-.32]},{name:`ankle_${e}`,parent:`knee_${e}`,worldPos:[n*.27,.215,-.61]},{name:`hindpaw_${e}`,parent:`ankle_${e}`,worldPos:[n*.274,.04,-.475]})}for(const e of["L","R"]){const n=e==="L"?1:-1;i.push({name:`wingClavicle_${e}`,parent:"chest",worldPos:[n*.21,.96,.69]},{name:`wingShoulder_${e}`,parent:`wingClavicle_${e}`,worldPos:[n*.34,1,.67]},{name:`wingElbow_${e}`,parent:`wingShoulder_${e}`,worldPos:[n*.88,1.05,.46]},{name:`wingWrist_${e}`,parent:`wingElbow_${e}`,worldPos:[n*1.56,1.11,.86]}),[{mid:[n*1.48,1.08,.16],tip:[n*1.4,.99,-.6]},{mid:[n*1.84,1.09,.22],tip:[n*2.04,1,-.56]},{mid:[n*2.18,1.11,.33],tip:[n*2.62,1.02,-.4]},{mid:[n*2.48,1.13,.48],tip:[n*3.14,1.05,-.14]},{mid:[n*2.78,1.15,.68],tip:[n*3.54,1.08,.22]},{mid:[n*2.94,1.17,.86],tip:[n*3.9,1.12,.7]}].forEach((o,a)=>{const r=a+1;i.push({name:`wingFinger_${e}_${r}_a`,parent:`wingWrist_${e}`,worldPos:o.mid},{name:`wingFinger_${e}_${r}_b`,parent:`wingFinger_${e}_${r}_a`,worldPos:o.tip})})}[[0,.72,-.76],[0,.63,-1.08],[0,.5,-1.43],[0,.36,-1.8],[0,.24,-2.18],[0,.16,-2.56],[0,.12,-2.94],[0,.116,-3.3],[0,.116,-3.66],[0,.116,-4.06]].forEach((e,n)=>{const s=n+1,o=n===0?"pelvis":`tail_${n}`;i.push({name:`tail_${s}`,parent:o,worldPos:e})});for(const e of["L","R"]){const n=e==="L"?1:-1;ld.forEach((s,o)=>{i.push({name:`pelvicFin_${e}_${o+1}`,parent:s.parentBone,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}i.push({name:"tailFinHinge_R",parent:"tail_9",worldPos:[-.02,.116,-3.65]},{name:"tailFinHinge_L",parent:"tail_9",worldPos:[.02,.116,-3.65]});for(const e of["L","R"]){const n=e==="L"?1:-1;rd.forEach((s,o)=>{i.push({name:`tailFin_${e}_${o+1}`,parent:`tailFinHinge_${e}`,worldPos:[n*s.rootX,s.rootY,s.rootZ]})})}return i}function Dx(){const i=Fx(),t=[],e=new Map,n=new Map,s=new Map;for(let r=0;r<i.length;r++){const l=i[r],c=new ec;c.name=l.name;const h=new E(...l.worldPos);if(s.set(l.name,h),l.parent===null)c.position.copy(h);else{const u=e.get(l.parent),d=s.get(l.parent);c.position.copy(h).sub(d),u.add(c)}t.push(c),e.set(l.name,c),n.set(l.name,r)}const o=e.get("root");return o.updateMatrixWorld(!0),{skeleton:new ir(t),rootBone:o,bones:t,boneMap:e,boneIndexMap:n,bindWorldPositions:s}}const je={neckArch:.24,neckYaw:-.1,headPitch:-.02,headYaw:-.18,headRoll:.16,earPerk:.82,earAsymmetry:.1,cheekNubFlare:.52,eyeYaw:-.08,eyePitch:.04,pupilDilation:.84,blink:0,squint:.08,jawOpen:0,teethExtension:0,tongueExtend:.1,tongueCurl:.05,wingUnfurl:.36,wingFlap:.06,wingSweep:-.08,wingCamber:.28,wingWristFold:0,wingTipLag:0,coyWingVeil:0,pelvicFinFlare:.88,dorsalSailFlex:.24,spineArch:.12,spineTwist:-.04,forelegStance:.14,hindlegStance:.08,limbStride:0,airborneFactor:0,legFlightTuck:0,tailYaw:-.26,tailPitch:.24,tailCurl:-.24,tailWaveAmp:0,tailWavePhase:0,rightHeartFinFlare:.18,leftHeartFinFlare:.18,syncHeartTailFlukes:!0,subtleBreathing:!0,iridescentShimmer:.78,pastelTint:.78,radiantGlow:.34,biolumGlow:0,plasmaGlow:.04,thermalCloak:0},hd=[{id:"serene-mate",label:"Serene Mate",subtitle:"Sweet Gaze & Heart Tail",patch:{...je}},{id:"curious-cat",label:"Curious Tilt",subtitle:"Adorable Head-Roll & Big Eyes",patch:{...je,headRoll:.68,headPitch:.1,headYaw:-.06,earPerk:.98,earAsymmetry:.42,pupilDilation:.96,squint:0,jawOpen:.06,teethExtension:0,coyWingVeil:0,thermalCloak:0,plasmaGlow:.08}},{id:"happy-purr",label:"Happy Purr",subtitle:"Blissful Feline Smile",patch:{...je,neckArch:.42,neckYaw:-.22,headYaw:-.28,headPitch:-.1,headRoll:.28,earPerk:.66,squint:.68,blink:.22,pupilDilation:.9,jawOpen:.14,teethExtension:0,tongueExtend:.35,tailYaw:-.45,tailCurl:-.48,rightHeartFinFlare:.04,leftHeartFinFlare:.04,coyWingVeil:0,thermalCloak:0,iridescentShimmer:.95}},{id:"coy-wing-veil",label:"Coy Wing Peek",subtitle:"Shy Wing-Curtain Pose",patch:{...je,headYaw:-.26,headPitch:-.12,headRoll:.34,eyeYaw:.22,eyePitch:.14,pupilDilation:.88,earPerk:.58,coyWingVeil:.92,wingUnfurl:.52,thermalCloak:0}},{id:"hidden-world-biolum",label:"Hidden World Glow",subtitle:"Neon Rose & Cyan Filigree",patch:{...je,wingUnfurl:.78,wingFlap:.22,neckArch:.34,headRoll:.22,pupilDilation:.94,iridescentShimmer:.96,radiantGlow:.64,biolumGlow:.96,plasmaGlow:.42,thermalCloak:0}},{id:"mirror-cloak",label:"Mirror Cloak",subtitle:"Plasma Silicate Stealth",patch:{...je,wingUnfurl:.72,wingFlap:.24,neckArch:.3,headPitch:.12,pupilDilation:.62,coyWingVeil:0,plasmaGlow:.78,iridescentShimmer:1,thermalCloak:.86}},{id:"strike-hiss",label:"Strike Hiss",subtitle:"Fangs & Orchid Plasma",patch:{...je,forelegStance:-.55,spineArch:.42,neckArch:-.18,headPitch:-.14,headRoll:-.08,earPerk:.06,squint:.48,pupilDilation:.06,jawOpen:.76,teethExtension:1,tongueExtend:.48,tongueCurl:.45,wingUnfurl:.84,wingFlap:.38,wingSweep:.32,coyWingVeil:0,dorsalSailFlex:1,plasmaGlow:.92,thermalCloak:0}}];function Qs(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const Nx=new E(-.19,.98,.06).normalize(),Ux=new E(.19,.98,.06).normalize(),ud=new E().crossVectors(Nx,ea).normalize(),kx=new E().crossVectors(ea,ud).normalize(),dd=new E().crossVectors(Ux,na).normalize(),zx=new E().crossVectors(na,dd).normalize();class Bx{state;asset;restPos=new Map;restQuat=new Map;tmpEuler=new On;tmpQuat=new rn;tmpQuatB=new rn;tmpVecA=new E;tmpVecB=new E;tmpVecC=new E;elapsed=0;prevHeadYaw=0;prevHeadPitch=0;earLagYaw=0;earLagYawVel=0;earLagPitch=0;earLagPitchVel=0;constructor(t,e){this.asset=t,this.state={...je,...e},this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;for(const n of t.rig.bones)this.restPos.set(n.name,n.position.clone()),this.restQuat.set(n.name,n.quaternion.clone());this.applyRigState(0)}resetToHeroPose(){Object.assign(this.state,je),this.earLagYaw=0,this.earLagYawVel=0,this.earLagPitch=0,this.earLagPitchVel=0,this.applyRigState(0)}setState(t){Object.assign(this.state,t),this.state.syncHeartTailFlukes&&(t.rightHeartFinFlare!==void 0?this.state.leftHeartFinFlare=t.rightHeartFinFlare:t.leftHeartFinFlare!==void 0?this.state.rightHeartFinFlare=t.leftHeartFinFlare:t.syncHeartTailFlukes===!0&&(this.state.leftHeartFinFlare=this.state.rightHeartFinFlare))}setBonePose(t,e=0,n=0,s=0,o="XYZ",a=0,r=0,l=0){const c=this.asset.rig.boneMap.get(t);if(!c)return;const h=this.restPos.get(t),u=this.restQuat.get(t);c.position.set(h.x+a,h.y+r,h.z+l),this.tmpEuler.set(e,n,s,o),this.tmpQuat.setFromEuler(this.tmpEuler),c.quaternion.copy(u).multiply(this.tmpQuat),c.scale.set(1,1,1)}setBoneAxisQuat(t,e){const n=this.asset.rig.boneMap.get(t);if(!n)return;const s=this.restPos.get(t),o=this.restQuat.get(t);n.position.copy(s),n.quaternion.copy(o).multiply(e),n.scale.set(1,1,1)}sampleLivingFelineIdleMicros(t){if(!this.state.subtleBreathing)return{autoBlink:0,earTwitchL:0,earTwitchR:0,gazeMicroX:0,gazeMicroY:0,pupilPulse:0,felineHeadMicroRoll:0};const e=(t+2.15)%4.35;let n=0;e<.16?n=Math.sin(e/.16*Math.PI):e>.25&&e<.4&&Math.floor((t+2.15)/4.35)%3===1&&(n=Math.sin((e-.25)/.15*Math.PI));const s=(t+.8)%5.6,o=s<.2?Math.sin(s/.2*Math.PI)*.095:0,a=(t+3.2)%6.8,r=a<.18?-Math.sin(a/.18*Math.PI)*.085:0,l=Math.sin(t*.68+1.4)*.03+Math.sin(t*1.85)*.012,c=Math.cos(t*.54+2.1)*.022,h=Math.sin(t*1.25+.8)*.028,u=Math.sin(t*.62+.7)*.026;return{autoBlink:n,earTwitchL:o,earTwitchR:r,gazeMicroX:l,gazeMicroY:c,pupilPulse:h,felineHeadMicroRoll:u}}solvePlantedLimbIK(t,e,n,s,o,a,r=0){const l=this.asset.rig,c=l.boneMap.get(t),h=l.boneMap.get(e),u=l.boneMap.get(n),d=l.boneMap.get(s);c.position.copy(this.restPos.get(t)),h.position.copy(this.restPos.get(e)),u.position.copy(this.restPos.get(n)),d.position.copy(this.restPos.get(s)),this.tmpEuler.set(r,0,0,"XYZ"),d.quaternion.setFromEuler(this.tmpEuler),c.parent.updateMatrixWorld(!0),this.asset.rootGroup.updateMatrixWorld(!1);const m=new re().copy(this.asset.rootGroup.matrixWorld).invert(),v=new re().multiplyMatrices(m,c.parent.matrixWorld),g=new E().setFromMatrixPosition(new re().multiplyMatrices(v,new re().makeTranslation(c.position.x,c.position.y,c.position.z))),f=l.bindWorldPositions.get(t),p=l.bindWorldPositions.get(e),w=l.bindWorldPositions.get(n),_=new E().subVectors(p,f),x=new E().subVectors(w,p),y=_.length(),b=x.length(),A=w.clone();a&&(A.add(a),A.y=Math.max(w.y,A.y));const T=new E().subVectors(A,g),S=T.length(),M=(y+b)*.968,P=Math.abs(y-b)+.08,C=G.clamp(S,P,M),R=T.normalize(),F=o.clone().addScaledVector(R,-o.dot(R)).normalize(),I=G.clamp((y*y+C*C-b*b)/(2*y*C),-1,1),k=Math.sqrt(Math.max(0,1-I*I)),N=g.clone().addScaledVector(R,y*I).addScaledVector(F,y*k),D=g.clone().addScaledVector(R,C),O=new E().subVectors(N,g).normalize(),H=new E().subVectors(D,N).normalize(),Z=new rn().setFromUnitVectors(_.clone().normalize(),O),q=new rn().setFromUnitVectors(x.clone().normalize(),H),$=new rn().setFromRotationMatrix(v);c.quaternion.copy($).invert().multiply(Z),h.quaternion.copy(Z).invert().multiply(q),u.quaternion.copy(q).invert()}update(t){this.elapsed+=t;const e=Math.max(.001,Math.min(t,.05)),n=(this.state.headYaw-this.prevHeadYaw)/e,s=(this.state.headPitch-this.prevHeadPitch)/e;this.prevHeadYaw=this.state.headYaw,this.prevHeadPitch=this.state.headPitch;const o=64,a=10.8,r=G.clamp(-n*.06,-.3,.3),l=G.clamp(-s*.06,-.3,.3);this.earLagYawVel+=((r-this.earLagYaw)*o-this.earLagYawVel*a)*e,this.earLagYaw+=this.earLagYawVel*e,this.earLagPitchVel+=((l-this.earLagPitch)*o-this.earLagPitchVel*a)*e,this.earLagPitch+=this.earLagPitchVel*e,this.applyRigState(this.elapsed)}applyRigState(t){const e=this.state,n=G.clamp(e.airborneFactor,0,1),s=this.sampleLivingFelineIdleMicros(t),o=e.subtleBreathing&&e.squint>.35?Math.sin(t*24)*.08*e.squint:0,a=e.subtleBreathing?Math.sin(t*1.68+.9)*.8+Math.sin(t*3.36+.9)*.2+o:0,r=e.subtleBreathing?Math.sin(t*1.28+1.2)*.026:0,l=Qs(.02,.55,Math.abs(e.legFlightTuck))*(1-n),c=Math.max(n,l),h=1-c,u=e.forelegStance>=0?e.forelegStance*.05:e.forelegStance*.255,d=e.hindlegStance>=0?e.hindlegStance*.044:e.hindlegStance*.23,m=.52*u+.48*d,v=G.clamp((d-u)*.44,-.22,.24),g=G.clamp(e.limbStride,-1,1)*.045*h,f=l*.34;this.setBonePose("root",v*h,g,0,"XYZ",0,m*h+f+a*.004,0);const p=e.tailWaveAmp*Math.sin(e.tailWavePhase)*.05;this.setBonePose("pelvis",e.spineArch*.06+p,-e.spineTwist*.05-g*.6,0),this.setBonePose("spine_1",-e.spineArch*.055+a*.007,e.spineTwist*.06,0),this.setBonePose("spine_2",-e.spineArch*.055+a*.008,e.spineTwist*.07,0),this.setBonePose("chest",-v*.32*h+a*.01-p*.6,e.spineTwist*.07+g*.8,0),this.asset.rig.rootBone.updateMatrixWorld(!0);const w=G.clamp(e.limbStride,-1,1),_=Math.max(0,-e.forelegStance),x=Math.max(0,-e.hindlegStance);for(const Y of["L","R"]){const j=Y==="L"?1:-1,ut=this.asset.rig.boneMap.get(`scapula_${Y}`);if(this.setBonePose(`scapula_${Y}`,0,0,0),ut.updateMatrixWorld(!0),c<.999){const tt=j*w*.21,z=-j*w*.2,_t=Math.max(0,j*w)*Math.sin(Math.abs(w)*Math.PI)*.038,xt=Math.max(0,-j*w)*Math.sin(Math.abs(w)*Math.PI)*.034,Ct=new E(j*_*.05,_t,tt+_*.04),Tt=new E(j*x*.045,xt,z-x*.036);this.asset.rootGroup.updateMatrixWorld(!1);const Nt=new re().copy(this.asset.rootGroup.matrixWorld).invert(),lt=this.asset.rig.boneMap.get(`shoulder_${Y}`);lt.position.copy(this.restPos.get(`shoulder_${Y}`)),lt.updateMatrixWorld(!0);const W=this.tmpVecC.setFromMatrixPosition(lt.matrixWorld).applyMatrix4(Nt),L=this.asset.rig.bindWorldPositions.get(`wrist_${Y}`).clone().add(Ct),rt=W.distanceTo(L)-.615;rt>0&&(this.setBonePose(`scapula_${Y}`,0,0,0,"XYZ",0,-rt*1.08*h,0),ut.updateMatrixWorld(!0)),this.solvePlantedLimbIK(`shoulder_${Y}`,`elbow_${Y}`,`wrist_${Y}`,`forepaw_${Y}`,this.tmpVecA.set(j*(.2+.16*_),-.08+.18*_,-1).normalize(),Ct,_t*2.2),this.solvePlantedLimbIK(`hip_${Y}`,`knee_${Y}`,`ankle_${Y}`,`hindpaw_${Y}`,this.tmpVecB.set(j*(.2+.14*x),.14+.16*x,1).normalize(),Tt,xt*2)}if(c>.001){const tt=G.clamp(e.legFlightTuck,-1,1),z=e.wingFlap*.075*c,_t=Math.sin(t*2.15+(Y==="L"?0:1.15))*.048*c,xt=Math.cos(t*1.65+(Y==="L"?.6:2.1))*.042*c,Ct=(tt>=0?.88*tt:-.44*-tt)+z*.65+_t*.5,Tt=tt>=0?-j*.06*tt:0,Nt=(tt>=0?j*.09*tt:j*.05*-tt)+j*xt*.35,lt=(tt>=0?.36*tt:.28*-tt)-z*.55+xt*.65,W=(tt>=0?.42*tt:.2*-tt)+_t*.7,L=(tt>=0?.38*tt:-.1*-tt)+xt*.55,rt=(tt>=0?1.18*tt:-.48*-tt)+z*.55+xt*.55,dt=(tt>=0?-j*.05*tt:0)+j*_t*.25,yt=(tt>=0?j*.07*tt:j*.05*-tt)+j*_t*.3,Mt=(tt>=0?-.68*tt:.34*-tt)-z*.5-_t*.65,zt=(tt>=0?.82*tt:-.16*-tt)+z*.45+xt*.75,kt=(tt>=0?.64*tt:.16*-tt)+_t*.6,Rt=(It,Lt,Ot,jt)=>{const Ht=this.asset.rig.boneMap.get(It);this.tmpEuler.set(Lt,Ot,jt,"XYZ"),this.tmpQuat.copy(this.restQuat.get(It)).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler)),c>=.999?(Ht.position.copy(this.restPos.get(It)),Ht.quaternion.copy(this.tmpQuat)):Ht.quaternion.slerp(this.tmpQuat,c)};Rt(`shoulder_${Y}`,Ct,Tt,Nt),Rt(`elbow_${Y}`,lt,0,0),Rt(`wrist_${Y}`,W,0,0),Rt(`forepaw_${Y}`,L,0,0),Rt(`hip_${Y}`,rt,dt,yt),Rt(`knee_${Y}`,Mt,0,0),Rt(`ankle_${Y}`,zt,0,0),Rt(`hindpaw_${Y}`,kt,0,0)}}const y=Qs(.32,.85,e.jawOpen),b=e.headRoll+s.felineHeadMicroRoll*(1-n),A=-e.neckArch*.12-a*.009-y*.032,T=e.neckYaw*.14;this.setBonePose("neck_1",A+e.headPitch*.04,T+e.headYaw*.05,b*.05,"YXZ"),this.setBonePose("neck_2",A+e.headPitch*.07,T+e.headYaw*.09,b*.08,"YXZ"),this.setBonePose("neck_3",A*.9+e.headPitch*.11,T+e.headYaw*.14,b*.12,"YXZ"),this.setBonePose("neck_4",A*.8+e.headPitch*.15,T*.85+e.headYaw*.19,b*.16,"YXZ"),this.setBonePose("head",e.headPitch*.36+a*.01-y*.045,e.headYaw*.46,b*.4,"YXZ");const S=G.clamp(e.earPerk-y*.32,0,1),M=(S-.5)*.68,P=b*.2;for(const Y of["L","R"]){const j=Y==="L"?1:-1,ut=Y==="L"?s.earTwitchL:s.earTwitchR,tt=j*(e.earAsymmetry*.28+P)+ut,z=M+tt+this.earLagPitch*.65,_t=(1-S)*.32-j*this.earLagYaw*.5;this.setBonePose(`ear_${Y}_1`,z*.6,-j*_t,j*z*.22,"YXZ"),this.setBonePose(`ear_${Y}_2`,z*.34+this.earLagPitch*.32,-j*_t*.32,0,"YXZ"),this.setBonePose(`ear_${Y}_3`,z*.22+this.earLagPitch*.22,0,0,"YXZ");const xt=(G.clamp(e.cheekNubFlare+y*.2,0,1)-.5)*.4;this.setBonePose(`cheekUpper_${Y}_1`,xt*.28,-j*(xt*.5+this.earLagYaw*.22),0)}const C=G.clamp(e.eyeYaw+s.gazeMicroX,-1,1),R=G.clamp(e.eyePitch+s.gazeMicroY,-1,1),F=Math.max(e.blink,s.autoBlink*(1-e.blink)),I=G.clamp(e.squint+y*.24,0,1);for(const Y of["L","R"]){const j=Y==="L"?ud:dd,ut=Y==="L"?kx:zx;this.tmpQuat.setFromAxisAngle(ut,C*.34),this.tmpQuatB.setFromAxisAngle(j,-R*.28),this.tmpQuat.multiply(this.tmpQuatB),this.setBoneAxisQuat(`eye_${Y}`,this.tmpQuat);const tt=R>0?-R*.14:-R*.22,z=R>0?R*.12:R*.08,_t=G.clamp(Math.max(F,I*.54)+tt*(1-F),-.14,1),xt=G.clamp(Math.max(F,I*.62)+z*(1-F),-.1,1);this.tmpQuat.setFromAxisAngle(j,_t*.72),this.setBoneAxisQuat(`eyelidUpper_${Y}`,this.tmpQuat),this.tmpQuat.setFromAxisAngle(j,-xt*.64),this.setBoneAxisQuat(`eyelidLower_${Y}`,this.tmpQuat)}const k=G.clamp(e.pupilDilation+s.pupilPulse-y*.28,0,1),N=this.asset.materials;N.eyeMaterials.uniforms.uPupilDilation.value=k,N.eyeMaterials.uniforms.uBiolumGlow.value=e.biolumGlow,N.eyeMaterials.uniforms.uPlasmaGlow.value=e.plasmaGlow,N.eyeMaterials.uniforms.uThermalCloak.value=e.thermalCloak,N.uniforms.uTime.value=t,N.uniforms.uIridescentShimmer.value=e.iridescentShimmer,N.uniforms.uPastelTint.value=e.pastelTint,N.uniforms.uRadiantGlow.value=e.radiantGlow,N.uniforms.uBiolumGlow.value=e.biolumGlow,N.uniforms.uPlasmaGlow.value=e.plasmaGlow,N.uniforms.uThermalCloak.value=e.thermalCloak;const D=N.syncCloakTransparency(e.thermalCloak);for(const Y of this.asset.hullDepthMeshes)Y.visible=D;this.setBonePose("jaw",e.jawOpen*.64,0,0);const O=.28+.72*Qs(0,.14,e.jawOpen),H=1-e.teethExtension*O;this.setBonePose("teethUpper",0,0,0,"XYZ",0,H*.022,0),this.setBonePose("teethLower",0,0,0,"XYZ",0,-H*.02,0);const Z=Qs(.06,.48,e.jawOpen),q=e.tongueExtend*.039*Z;if(e.tongueCurl>=0){const Y=-e.tongueCurl*(.016+.19*Z);this.setBonePose("tongue_1",Y*.35,0,0,"XYZ",0,0,q),this.setBonePose("tongue_2",Y*.65,0,0),this.setBonePose("tongue_3",Y*.95,0,0),this.setBonePose("tongue_4",Y*1.15,0,0)}else{const Y=Z*Qs(.2,.95,e.tongueExtend),j=-e.tongueCurl*Y;this.setBonePose("tongue_1",0,0,0,"XYZ",0,0,q),this.setBonePose("tongue_2",0,0,0),this.setBonePose("tongue_3",j*.12,0,0),this.setBonePose("tongue_4",j*.18,0,0)}const $=G.clamp(1-e.wingUnfurl+e.wingWristFold*.28,0,1),X=G.lerp(.11,.74,c);for(const Y of["L","R"]){const j=Y==="L"?1:-1,ut=Y==="R"?e.coyWingVeil*h:0,tt=e.wingFlap*(.25+.75*e.wingUnfurl),z=j*(tt>=0?tt*.74:tt*X),_t=tt<0?tt*G.lerp(.04,.26,c)*e.wingUnfurl:0,xt=j*(e.wingSweep*.44-ut*.68),Ct=e.wingWristFold*.46;this.setBonePose(`wingClavicle_${Y}`,.05*$+ut*.08,j*.12*$,z*.18,"YXZ"),this.setBonePose(`wingShoulder_${Y}`,e.wingCamber*.09+ut*.18,j*.82*$*(1-ut*.65)+xt,z-j*.22*$+j*ut*.32,"YXZ"),this.setBonePose(`wingElbow_${Y}`,ut*.12,-j*(1.42*$*(1-ut*.58)+Ct*.45-ut*.42),j*.86*$*(1-ut*.45)+z*.22+j*e.wingTipLag*.16,"YXZ"),this.setBonePose(`wingWrist_${Y}`,-.35*$-e.wingCamber*.18-ut*.28,j*(1.32*$*(1-ut*.6)+Ct*.55-ut*.48)+xt*.35,j*.12*$+j*_t*.3+j*e.wingTipLag*.26,"YXZ");for(let Nt=1;Nt<=6;Nt++){const lt=(Nt-1)/5,W=j*(-.38+lt*.58)*$*(1-ut*.6),L=-e.wingCamber*(.14+.18*(1-lt))-.1*$-ut*.24,rt=e.wingTipLag*(.18+.26*lt),dt=tt>=0?-tt*.22:-tt*G.lerp(.06*Math.pow(Math.max(0,(lt-.5)/.5),1.8),.24,n);this.setBonePose(`wingFinger_${Y}_${Nt}_a`,L,W,j*(dt*.4+rt*.45),"YXZ"),this.setBonePose(`wingFinger_${Y}_${Nt}_b`,L*.5,W*.25,j*(dt*.7+rt*.75),"YXZ")}const Tt=1-e.pelvicFinFlare;for(let Nt=1;Nt<=3;Nt++)this.setBonePose(`pelvicFin_${Y}_${Nt}`,0,0,-j*Tt*1.18,"XYZ")}for(const Y of this.asset.dorsalSailMeshes)Y.morphTargetInfluences&&Y.morphTargetInfluences.length>0&&(Y.morphTargetInfluences[0]=e.dorsalSailFlex);const V=e.syncHeartTailFlukes?e.rightHeartFinFlare:e.leftHeartFinFlare,et=Math.min(e.rightHeartFinFlare,V),it=et<0?Math.sin(Math.abs(et)*1.38)*.48:.02;this.asset.rootGroup.updateMatrixWorld(!1);for(let Y=1;Y<=10;Y++){const j=Y/10,ut=Y>=9,tt=ut?0:e.tailYaw*.14+e.tailCurl*.19*Math.pow(j,1.4)+r*j,z=ut?0:e.tailWaveAmp*Math.sin(e.tailWavePhase-Y*.48)*.085*(.4+.6*j);let _t=ut?0:e.tailPitch*.088*(.45+j)+z;if(!ut&&n<.85&&Y>=2&&Y<=8){const xt=Math.max(0,(it-.05)*.135)*(1-n);_t<xt&&(_t=G.lerp(_t,xt,Qs(1,5,Y)))}if(this.setBonePose(`tail_${Y}`,_t,tt,0,"YXZ"),n<.85){const xt=this.asset.rig.boneMap.get(`tail_${Y}`);xt.parent.updateMatrixWorld(!0),xt.updateMatrixWorld(!0);const Ct=this.tmpVecC.setFromMatrixPosition(xt.matrixWorld),Nt=Bi(Ct.x,Ct.z)+(Y>=8?.05+it:.058);if(Ct.y<Nt&&Y>1){const lt=xt.parent,W=xt.position.length(),L=Math.min(.45,(Nt-Ct.y)/Math.max(.14,W))*(1-n);this.tmpEuler.set(L,0,0,"XYZ"),this.tmpQuat.setFromEuler(this.tmpEuler),lt.quaternion.multiply(this.tmpQuat),lt.updateMatrixWorld(!0)}}}const J=-e.rightHeartFinFlare*1.38,st=V*1.38;this.setBonePose("tailFinHinge_R",0,0,J,"XYZ"),this.setBonePose("tailFinHinge_L",0,0,st,"XYZ");for(let Y=1;Y<=5;Y++)this.setBonePose(`tailFin_R_${Y}`,0,0,0),this.setBonePose(`tailFin_L_${Y}`,0,0,0);this.asset.rig.rootBone.updateMatrixWorld(!0)}}function os(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function qe(i,t,e,n,s){return i<=t||i>=s?0:i<e?os(t,e,i):i>n?1-os(n,s,i):1}function Bo(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function Ox(i,t,e){return i+Bo(t-i)*e}function Hx(i,t,e){const s=i/Math.max(1,64);let o=e;for(let a=0;a<64;a++){const r=(a+.5)*s,l=os(.4,2.4,r),c=qe(r,7.6,8.8,15.2,16.5),h=1-.18*os(18.5,22.5,r),u=G.lerp(4.45,5.18,l)*h,d=G.lerp(u,1.65,c)*t;o+=d*s}return o}class Cs{static DURATION_SEC=25;isPlaying=!1;isPaused=!1;loop=!1;followCamera=!0;subjectMode="duet";toothlessAsset;toothlessController;lightFuryAsset;lightFuryController;toothlessSpline;lightFurySpline;flightTime=0;tmpPos=new E;tmpPosAhead=new E;tmpPosBehind=new E;tmpPosLook=new E;tmpVel=new E;tmpEuler=new On;tmpQuat=new rn;prevWorldAnchor=new E(0,1.15,.35);constructor(t,e,n,s){this.toothlessAsset=t,this.toothlessController=e,this.lightFuryAsset=n,this.lightFuryController=s;const o=di.position.clone(),a=pi.position.clone();this.toothlessSpline=new si([o.clone(),new E(6.8,3.8,8.2),new E(16.4,11.4,19.5),new E(24.5,17.6,33.5),new E(12.5,19.6,44.5),new E(-6.5,17.2,39.5),new E(-19.5,6.8,29),new E(-22.5,-3.2,18.5),new E(-17.5,10.6,3.5),new E(-2.5,9.8,-5.8),new E(3.85,3.15,-2.15),o.clone()],!1,"centripetal",.5),this.lightFurySpline=new si([a.clone(),new E(-3.2,4.1,7.8),new E(6.2,12,20.4),new E(14.2,18.3,34.8),new E(2.2,20.2,46),new E(-16.8,17.8,41),new E(-29.8,7.4,30.2),new E(-32.8,-2.8,19.2),new E(-27.2,11.2,4.2),new E(-12.2,10.2,-5.8),new E(-5.15,3.05,-2.35),a.clone()],!1,"centripetal",.5)}setSubjectMode(t){this.subjectMode!==t&&(this.subjectMode=t,this.isPlaying&&(this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())))}resetDragonToPerch(t){t==="toothless"?(this.toothlessAsset.rootGroup.position.copy(di.position),this.toothlessAsset.rootGroup.rotation.set(0,di.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0),this.toothlessController.resetToHeroPose()):this.lightFuryAsset&&this.lightFuryController&&(this.lightFuryAsset.rootGroup.position.copy(pi.position),this.lightFuryAsset.rootGroup.rotation.set(0,pi.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0),this.lightFuryController.resetToHeroPose())}computeDesiredWorldFocus(){const t=this.toothlessAsset.rig.boneMap.get("chest"),e=new E().setFromMatrixPosition(t.matrixWorld);if(!this.lightFuryAsset)return e;const n=this.lightFuryAsset.rig.boneMap.get("chest"),s=new E().setFromMatrixPosition(n.matrixWorld);return this.subjectMode==="toothless"?e:this.subjectMode==="light-fury"?s:e.add(s).multiplyScalar(.5)}startFromBeginning(){this.flightTime=0,this.isPlaying=!0,this.isPaused=!1,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.applyAtTime(0),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}togglePlayPause(){if(!this.isPlaying){this.startFromBeginning();return}this.isPaused=!this.isPaused}stopAndResetToPerch(){this.isPlaying=!1,this.isPaused=!1,this.flightTime=0,this.resetDragonToPerch("toothless"),this.resetDragonToPerch("light-fury"),this.prevWorldAnchor.set(0,1.15,.35)}scrubToProgress(t){const e=G.clamp(t,0,1);this.isPlaying||(this.isPlaying=!0,this.isPaused=!0),this.flightTime=e*Cs.DURATION_SEC,this.applyAtTime(this.flightTime),this.prevWorldAnchor.copy(this.computeDesiredWorldFocus())}getPhaseInfo(){const t=this.flightTime,e=this.subjectMode==="duet";let n=e?"Twin Perch Ready":"Perched Ready";return this.isPlaying&&(t<2.8?n=e?"1/6 · Twin Courtship Cliff Leap":"1/6 · Launch Crouch & Cliff Leap":t<7.8?n="2/6 · Majestic Climbing Wingbeats":t<13?n=e?"3/6 · Wingtip Courtship Sky Soar":"3/6 · High-Altitude Sky Soar":t<17.4?n=e?"4/6 · Mirror-Cloak Ocean Skim":"4/6 · Peregrine Ocean Skim":t<21.8?n="5/6 · Cushioned Air-Brake Hover":n=e?"6/6 · Twin Touchdown & Settle":"6/6 · Four-Paw Landing & Settle"),{isPlaying:this.isPlaying,isPaused:this.isPaused,loop:this.loop,followCamera:this.followCamera,subjectMode:this.subjectMode,progress:G.clamp(t/Cs.DURATION_SEC,0,1),elapsedSec:t,durationSec:Cs.DURATION_SEC,phaseLabel:n}}update(t,e,n){if(!this.isPlaying)return this.prevWorldAnchor.set(0,1.15,.35),{worldFocus:this.prevWorldAnchor,isAirborne:!1};if(!this.isPaused&&(this.flightTime+=t,this.flightTime>=Cs.DURATION_SEC))if(this.loop)this.flightTime%=Cs.DURATION_SEC;else return this.stopAndResetToPerch(),{worldFocus:this.prevWorldAnchor,isAirborne:!1};this.applyAtTime(this.flightTime);const s=this.computeDesiredWorldFocus();if(this.followCamera){const r=s.clone().sub(this.prevWorldAnchor);n.add(r),e.position.add(r);const l=qe(this.flightTime,1.8,5.2,18.8,23.2),c=this.subjectMode==="duet"?9.4:4.95,h=this.subjectMode==="duet"?17.8:11.2,u=G.lerp(c,h,l),d=e.position.clone().sub(n),m=Math.max(.5,d.length()),v=G.lerp(m,u,1-Math.exp(-2.2*Math.max(.016,t)));d.setLength(v),e.position.copy(n).add(d);const g=Ti(e.position.x,e.position.z),f=Math.max(-8.8,g+1.8);e.position.y<f&&(e.position.y=f),n.lerp(s,1-Math.exp(-7.5*Math.max(.016,t)))}this.prevWorldAnchor.copy(s);const o=this.toothlessController.state.airborneFactor,a=this.lightFuryController?.state.airborneFactor??0;return{worldFocus:s,isAirborne:Math.max(o,a)>.15}}computeKinematicsAlongSpline(t,e,n,s,o,a){let h=0;if(s<=2.05)h=0;else if(s>=21.85)h=1;else{const F=(s-2.05)/19.8,I=F*F*(3-2*F),k=Math.sin(F*Math.PI*2-1.2)*.024*Math.sin(F*Math.PI);h=G.clamp(G.lerp(F,I,.38)+k,0,1)}const u=qe(s,2.05-.1,2.05+.72,21.85-.75,21.85+.08),d=qe(s,1.65,2.75,7.2,8.6),m=qe(s,7.8,9,12.2,13.4),v=qe(s,12.6,13.6,16.4,17.5),g=qe(s,15.8,16.8,18,19),f=qe(s,18,19.2,21.1,22.05),p=Hx(s,a,o),w=G.clamp(d*.94+g*.82+f*.88+(1-m)*(1-v)*.16,0,.96)*u,_=Math.sin(p),x=G.clamp(_+.14*Math.sin(p*2),-1,1),y=Math.cos(p),b=-y*.26*w,A=y*.056*w;let T=0,S=0,M=0,P=0;const C=e.clone(),R=new rn().setFromEuler(new On(0,n,0,"YXZ"));if(h>1e-4&&h<.9999){const I=Math.max(0,h-.008),k=Math.min(1,h+.008);t.getPointAt(h,this.tmpPos),t.getPointAt(I,this.tmpPosBehind),t.getPointAt(k,this.tmpPosAhead),this.tmpVel.subVectors(this.tmpPosAhead,this.tmpPosBehind).normalize();const N=Math.atan2(this.tmpVel.x,this.tmpVel.z),D=Math.max(0,h-.028),O=Math.min(1,h+.028),H=t.getTangentAt(D),Z=t.getTangentAt(O),q=Math.atan2(H.x,H.z),$=Math.atan2(Z.x,Z.z);T=Bo($-q)/Math.max(.005,O-D);const X=Math.min(1,h+.048);t.getTangentAt(X,this.tmpPosLook);const V=Math.atan2(this.tmpPosLook.x,this.tmpPosLook.z);S=Bo(V-N),P=-Math.asin(G.clamp(this.tmpVel.y,-.84,.84));const et=-.56*f,it=qe(h,.025,.11,.86,.98);M=G.clamp(-T*.24,-.74,.74)*it;const J=qe(h,0,.032,.962,1);C.lerpVectors(e,this.tmpPos,J),C.y+=b*it;const st=qe(h,.04,.09,.91,.96);if(st>.001){const tt=Ti(C.x,C.z),z=Ti(C.x-3.6,C.z),_t=Ti(C.x+3.6,C.z),xt=Math.max(tt,z,_t),Ct=Math.max(-7.2,xt+3.8*st);C.y<Ct&&(C.y=Ct)}const Y=Ox(n,N,J),j=(P*.86+et+A)*J,ut=M*J;this.tmpEuler.set(j,Y,ut,"YXZ"),R.setFromEuler(this.tmpEuler)}return{u:h,airborneEnv:u,climbEnv:d,glideEnv:m,diveEnv:v,pulloutEnv:g,brakeEnv:f,flapPhase:p,activeFlapAmp:w,flapSin:x,flapCos:y,lookAheadTurnDiff:S,bankRoll:M,pathClimbPitch:P,outPos:C,outQuat:R}}applyToothlessFlightAtTime(t,e){const n=this.computeKinematicsAlongSpline(this.toothlessSpline,di.position,di.yaw,t,0,1);this.toothlessAsset.rootGroup.position.copy(n.outPos),this.toothlessAsset.rootGroup.quaternion.copy(n.outQuat),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const s=qe(t,.35,1.15,1.68,2.1),o=qe(t,1.82,2.05,2.35,2.85),a=qe(t,19.2,20.2,21.75,22.25),r=qe(t,21.75,22.2,22.85,23.9),l=qe(t,23.1,23.65,24.35,24.95),c=e?.34*n.glideEnv+.36*l:-.22*l,h=Je.forelegStance*(1-s-r)-.88*s-.8*r+.18*l,u=Je.hindlegStance*(1-s-r)-.84*s-.76*r+.12*l,d=G.clamp(.82*n.airborneEnv-1.55*o-1.58*a,-.84,.88),m=G.lerp(Je.wingUnfurl+.34*s,1-.16*n.diveEnv,os(.95,2.15,t)*(1-os(22.1,24.1,t))),v=Math.max(0,n.flapCos)*.56*n.activeFlapAmp*(1-n.brakeEnv*.6),g=G.clamp(.68*s+n.flapSin*.92*n.activeFlapAmp+.14*n.glideEnv-.08*n.diveEnv,-1,1),f=-n.flapCos*.84*n.activeFlapAmp,p=G.clamp(Je.wingSweep*(1-n.airborneEnv)-.8*n.diveEnv+.74*n.brakeEnv-.16*s,-1,1),w=Math.max(0,-n.flapSin)*n.activeFlapAmp,_=G.clamp(.28+.46*w+.54*n.pulloutEnv+.64*n.brakeEnv-.18*n.diveEnv,.08,1),x=G.clamp(.22*(1-n.airborneEnv)+.95*n.glideEnv+.85*Math.min(1,Math.abs(n.bankRoll)*1.8)+.9*n.brakeEnv,.15,1),y=.24*(1-n.airborneEnv)+.18*n.climbEnv+.06*n.glideEnv+.42*n.diveEnv-.32*n.brakeEnv,b=G.clamp(n.bankRoll*.38,-.32,.32),A={airborneFactor:n.airborneEnv,forelegStance:h,hindlegStance:u,limbStride:0,legFlightTuck:d,spineArch:.2*s-.16*o+.24*n.brakeEnv+.08*(1-n.airborneEnv),spineTwist:G.clamp(-n.bankRoll*.35,-1,1),wingUnfurl:m,wingFlap:g,wingWristFold:v,wingTipLag:f,wingSweep:p,wingCamber:_,pelvicFinFlare:G.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.35*n.diveEnv,.3,1),dorsalSpineSplit:x,autoSyncProstheticTail:Math.abs(b)<.02,leftProstheticFinFlare:G.clamp(y+b,-1,1),rightTailFinFlare:G.clamp(y-b,-1,1),tailYaw:G.clamp(Je.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv+.28*l,-1,1),tailPitch:G.clamp(Je.tailPitch*(1-n.airborneEnv)-.34*n.brakeEnv+.15*n.pulloutEnv+.22*r,-1,1),tailCurl:.16*(1-n.diveEnv)+n.lookAheadTurnDiff*.8,tailWaveAmp:n.activeFlapAmp*.78+n.glideEnv*.16,tailWavePhase:n.flapPhase,neckArch:.16+.24*n.brakeEnv-.2*n.diveEnv,neckYaw:n.lookAheadTurnDiff*.95*n.airborneEnv+c*.45,headYaw:G.clamp(Je.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+c,-1,1),headPitch:G.clamp(Je.headPitch*(1-n.airborneEnv)-.34*s+n.pathClimbPitch*-.24*n.airborneEnv+.48*n.brakeEnv+.16*r,-1,1),headRoll:G.clamp(Je.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv-.22*l,-1,1),earPerk:G.clamp(.76+.2*s-.56*n.diveEnv-.2*n.climbEnv+.18*n.brakeEnv+.18*l,.12,1),earAsymmetry:n.bankRoll*.22+.12*l,cheekNubFlare:.5+.25*n.diveEnv,eyeYaw:G.clamp(n.lookAheadTurnDiff*1.7*n.airborneEnv+c*.55,-.85,.85),eyePitch:G.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:G.clamp(.76-.24*n.diveEnv+.16*l,.25,.96),squint:G.clamp(.36*n.diveEnv+.18*l,0,1),blink:qe(t,23.35,23.45,23.52,23.64),jawOpen:G.clamp(.2*o+.15*n.pulloutEnv+.26*l,0,1),teethExtension:0,tongueExtend:.4*l,tongueCurl:.2*l};Object.assign(this.toothlessController.state,A)}applyLightFuryFlightAtTime(t,e){if(!this.lightFuryAsset||!this.lightFuryController)return;const n=this.computeKinematicsAlongSpline(this.lightFurySpline,pi.position,pi.yaw,t,.95,1.03);this.lightFuryAsset.rootGroup.position.copy(n.outPos),this.lightFuryAsset.rootGroup.quaternion.copy(n.outQuat),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const s=qe(t,.32,1.12,1.65,2.08),o=qe(t,1.8,2.04,2.32,2.82),a=qe(t,19.2,20.2,21.75,22.25),r=qe(t,21.75,22.2,22.85,23.9),l=qe(t,23,23.6,24.4,24.96),c=qe(t,13.2,14.2,15.8,16.9),h=qe(t,8.2,9.4,12.2,13.4),u=qe(t,12.6,13.6,16,17.2),d=e?-.36*n.glideEnv-.34*l:-.18*l,m=je.forelegStance*(1-s-r)-.86*s-.78*r+.2*l,v=je.hindlegStance*(1-s-r)-.82*s-.74*r+.12*l,g=G.clamp(.82*n.airborneEnv-1.52*o-1.56*a,-.84,.88),f=G.lerp(je.wingUnfurl+.34*s,1-.18*n.diveEnv,os(.9,2.12,t)*(1-os(22.1,24.1,t))),p=Math.max(0,n.flapCos)*.54*n.activeFlapAmp*(1-n.brakeEnv*.6),w=G.clamp(.66*s+n.flapSin*.9*n.activeFlapAmp+.16*n.glideEnv-.08*n.diveEnv,-1,1),_=-n.flapCos*.86*n.activeFlapAmp,x=G.clamp(je.wingSweep*(1-n.airborneEnv)-.82*n.diveEnv+.74*n.brakeEnv-.15*s,-1,1),y=Math.max(0,-n.flapSin)*n.activeFlapAmp,b=G.clamp(.26+.44*y+.52*n.pulloutEnv+.62*n.brakeEnv-.16*n.diveEnv,.08,1),A=.18*(1-n.airborneEnv)+.12*n.climbEnv+.02*n.glideEnv+.38*n.diveEnv-.28*n.brakeEnv,T=G.clamp(n.bankRoll*.36,-.3,.3),S={airborneFactor:n.airborneEnv,forelegStance:m,hindlegStance:v,limbStride:0,legFlightTuck:g,coyWingVeil:0,spineArch:.22*s-.15*o+.24*n.brakeEnv+.12*(1-n.airborneEnv),spineTwist:G.clamp(-n.bankRoll*.36,-1,1),wingUnfurl:f,wingFlap:w,wingWristFold:p,wingTipLag:_,wingSweep:x,wingCamber:b,pelvicFinFlare:G.clamp(.88+.12*(n.glideEnv+n.brakeEnv)-.32*n.diveEnv,.32,1),dorsalSailFlex:G.clamp(.24*(1-n.airborneEnv)+.92*n.glideEnv+.85*n.brakeEnv+.65*Math.abs(n.bankRoll),.15,1),syncHeartTailFlukes:Math.abs(T)<.02,leftHeartFinFlare:G.clamp(A+T,-1,1),rightHeartFinFlare:G.clamp(A-T,-1,1),tailYaw:G.clamp(je.tailYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.35*n.airborneEnv-.36*l,-1,1),tailPitch:G.clamp(je.tailPitch*(1-n.airborneEnv)-.32*n.brakeEnv+.16*n.pulloutEnv+.2*r,-1,1),tailCurl:-.24*(1-n.airborneEnv)+n.lookAheadTurnDiff*.8-.26*l,tailWaveAmp:n.activeFlapAmp*.76+n.glideEnv*.18,tailWavePhase:n.flapPhase,neckArch:.24+.24*n.brakeEnv-.2*n.diveEnv+.14*l,neckYaw:n.lookAheadTurnDiff*.92*n.airborneEnv+d*.48,headYaw:G.clamp(je.headYaw*(1-n.airborneEnv)+n.lookAheadTurnDiff*1.55*n.airborneEnv+d,-1,1),headPitch:G.clamp(je.headPitch*(1-n.airborneEnv)-.32*s+n.pathClimbPitch*-.24*n.airborneEnv+.46*n.brakeEnv+.14*r,-1,1),headRoll:G.clamp(je.headRoll*(1-n.airborneEnv)-n.bankRoll*.46*n.airborneEnv+.28*l,-1,1),earPerk:G.clamp(.82+.16*s-.56*n.diveEnv-.2*n.climbEnv+.16*n.brakeEnv,.14,1),earAsymmetry:n.bankRoll*.24+.18*l,cheekNubFlare:.52+.22*n.diveEnv,eyeYaw:G.clamp(n.lookAheadTurnDiff*1.65*n.airborneEnv+d*.55,-.85,.85),eyePitch:G.clamp(.32*s-.44*n.brakeEnv,-.85,.85),pupilDilation:G.clamp(.84-.2*n.diveEnv+.1*l,.3,.96),squint:G.clamp(.3*n.diveEnv+.56*l,0,1),blink:qe(t,23.18,23.28,23.36,23.48),jawOpen:G.clamp(.14*o+.12*n.pulloutEnv+.14*l,0,1),teethExtension:0,tongueExtend:.28*l,tongueCurl:.12*l,iridescentShimmer:G.clamp(.78+.22*(n.glideEnv+c),0,1),radiantGlow:G.clamp(.34+.36*(n.glideEnv+c),0,1),biolumGlow:G.clamp(.58*h,0,1),plasmaGlow:G.clamp(.04+.78*u,0,1),thermalCloak:G.clamp(.78*c,0,1)};Object.assign(this.lightFuryController.state,S)}applyPerchedSpectatorGaze(t,e){if(t==="toothless"){this.toothlessAsset.rootGroup.position.copy(di.position),this.toothlessAsset.rootGroup.rotation.set(0,di.yaw,0),this.toothlessAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(di.position);n.y-=1.5;const s=Math.atan2(n.x,n.z),o=Bo(s-di.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.toothlessController.state,{...Je,neckYaw:G.clamp(o*.55,-.85,.85),headYaw:G.clamp(o*.85,-.95,.95),headPitch:G.clamp(-r*.95,-.85,.75),headRoll:G.clamp(-o*.18,-.45,.45),eyeYaw:G.clamp(o*.45,-.75,.75),eyePitch:G.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.88})}else if(this.lightFuryAsset&&this.lightFuryController){this.lightFuryAsset.rootGroup.position.copy(pi.position),this.lightFuryAsset.rootGroup.rotation.set(0,pi.yaw,0),this.lightFuryAsset.rootGroup.updateMatrixWorld(!0);const n=e.clone().sub(pi.position);n.y-=1.48;const s=Math.atan2(n.x,n.z),o=Bo(s-pi.yaw),a=Math.max(.8,Math.hypot(n.x,n.z)),r=Math.atan2(n.y,a);Object.assign(this.lightFuryController.state,{...je,neckYaw:G.clamp(o*.55,-.85,.85),headYaw:G.clamp(o*.85,-.95,.95),headPitch:G.clamp(-r*.95,-.85,.75),headRoll:G.clamp(.18-o*.18,-.5,.55),eyeYaw:G.clamp(o*.45,-.75,.75),eyePitch:G.clamp(r*.55,-.65,.65),earPerk:.94,pupilDilation:.9})}}applyAtTime(t){if(this.subjectMode==="duet")this.applyToothlessFlightAtTime(t,!0),this.applyLightFuryFlightAtTime(t,!0);else if(this.subjectMode==="toothless"){this.applyToothlessFlightAtTime(t,!1);const e=this.toothlessAsset.rig.boneMap.get("chest"),n=new E().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("light-fury",n)}else if(this.applyLightFuryFlightAtTime(t,!1),this.lightFuryAsset){const e=this.lightFuryAsset.rig.boneMap.get("chest"),n=new E().setFromMatrixPosition(e.matrixWorld);this.applyPerchedSpectatorGaze("toothless",n)}}}function Wx(i){return i-Math.floor(i)}function Hh(i,t){return Wx(Math.sin(i*127.1+t*311.7)*43758.5453123)}let Fa=null;function Vx(i=512){if(Fa)return Fa;const t=new Float32Array(i*i),e=76;for(let m=0;m<i;m++){const v=m/i*e,g=Math.floor(v),f=v-g;for(let p=0;p<i;p++){const w=p/i*e,_=Math.floor(w),x=w-_;let y=10;for(let A=-1;A<=1;A++)for(let T=-1;T<=1;T++){const S=((_+T)%e+e)%e,M=((g+A)%e+e)%e,P=T+.5+(Hh(S,M)-.5)*.68-x,C=A+.5+(Hh(M+19,S+7)-.5)*.68-f,R=Math.sqrt(P*P+C*C);R<y&&(y=R)}const b=Math.max(0,1-Math.pow(y*1.15,2.2));t[m*i+p]=b}}const n=document.createElement("canvas"),s=document.createElement("canvas"),o=document.createElement("canvas");for(const m of[n,s,o])m.width=i,m.height=i;const a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(i,i),h=r.createImageData(i,i),u=l.createImageData(i,i);for(let m=0;m<i;m++){const v=(m-1+i)%i,g=(m+1)%i;for(let f=0;f<i;f++){const p=(f-1+i)%i,w=(f+1)%i,_=m*i+f,x=_*4,y=t[_],b=(t[m*i+w]-t[m*i+p])*.24,A=(t[g*i+f]-t[v*i+f])*.24,T=1/Math.sqrt(b*b+A*A+1);h.data[x]=Math.round((-b*T*.5+.5)*255),h.data[x+1]=Math.round((-A*T*.5+.5)*255),h.data[x+2]=Math.round((T*.5+.5)*255),h.data[x+3]=255;const S=249+y*5;c.data[x]=Math.min(255,Math.round(S+.8)),c.data[x+1]=Math.round(S),c.data[x+2]=Math.min(255,Math.round(S+.6)),c.data[x+3]=255;const M=Math.round((.45-y*.07)*255);u.data[x]=M,u.data[x+1]=M,u.data[x+2]=M,u.data[x+3]=255}}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0);const d=(m,v)=>(m.wrapS=Ci,m.wrapT=Ci,m.anisotropy=8,m.colorSpace=v?_n:ni,m.needsUpdate=!0,m);return Fa={albedoMap:d(new Ln(n),!0),normalMap:d(new Ln(s),!1),roughnessMap:d(new Ln(o),!1)},Fa}let ys=null;function Gx(i=1024){if(ys)return ys;const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=i*.5;for(let o=0;o<i;o++){const a=(o-s)/s;for(let r=0;r<i;r++){const l=(r-s)/s,c=Math.sqrt(l*l+a*a),h=Math.atan2(a,l),u=(o*i+r)*4;if(c>.96){n.data[u]=14,n.data[u+1]=24,n.data[u+2]=42,n.data[u+3]=255;continue}const d=Math.sin(h*64+Math.sin(c*12)*.65),m=Math.sin(h*138-Math.cos(c*18)*.85),v=Math.sin(h*250+c*22),g=Math.sin(h*21+.9)*Math.cos(c*14-h*4),f=d*.42+m*.33+v*.15+g*.24,p=Math.exp(-Math.pow((c-.36)/.13,2)),w=Math.max(0,Math.min(1,(.95-c)/.17)),_=Math.max(0,Math.min(1,1-c*1.06)),x=.86+.28*f;let y=(32+128*_+58*p)*x*w,b=(118+114*_+36*p)*x*w,A=(205+48*_+20*p)*x*w;if(g<-.58&&c>.25&&c<.78){const T=Math.min(1,(-g-.58)*2.1);y*=1-.38*T,b*=1-.28*T,A*=1-.16*T}n.data[u]=Math.max(0,Math.min(255,Math.round(y))),n.data[u+1]=Math.max(0,Math.min(255,Math.round(b))),n.data[u+2]=Math.max(0,Math.min(255,Math.round(A))),n.data[u+3]=255}}return e.putImageData(n,0,0),ys=new Ln(t),ys.colorSpace=_n,ys.anisotropy=8,ys.needsUpdate=!0,ys}function Xx(){const i=Gx(1024),t={uPupilDilation:{value:.78},uLightDir:{value:new E(.45,.65,.6).normalize()},uBiolumGlow:{value:0},uPlasmaGlow:{value:0},uThermalCloak:{value:0}},e=new fi({name:"LightFury_SkyBlueIris_PBR",map:i,roughness:.48,metalness:0,envMapIntensity:.78});e.onBeforeCompile=s=>{Object.assign(s.uniforms,t),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(22.0));`)},{irisMaterial:e,corneaMaterial:n,uniforms:t}}function Wh(i,t,e){i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`)}}function Yx(){const i=Vx(512),t=Xx(),e={uTime:{value:0},uIridescentShimmer:{value:.76},uPastelTint:{value:.78},uRadiantGlow:{value:.34},uBiolumGlow:{value:0},uPlasmaGlow:{value:.04},uThermalCloak:{value:0},uSunDir:{value:new E(-.55,.38,-.74).normalize()},uSunColor:{value:new Bt(16765601)}},n=new In({name:"LightFury_SnowPearlHide_PBR",color:new Bt(16777215),map:i.albedoMap,normalMap:i.normalMap,normalScale:new $t(.05,.05),roughnessMap:i.roughnessMap,roughness:.46,metalness:.02,iridescence:.42,iridescenceIOR:1.38,iridescenceThicknessRange:[320,520],clearcoat:.34,clearcoatRoughness:.22,sheen:.28,sheenRoughness:.42,sheenColor:new Bt(16773366),envMapIntensity:1.22});Wh(n,e,!1);const s={albedo:i.albedoMap.clone(),normal:i.normalMap.clone(),rough:i.roughnessMap.clone()};for(const f of[s.albedo,s.normal,s.rough])f.repeat.set(3,3),f.needsUpdate=!0;const o=new In({name:"LightFury_IridescentWingPatagium_PBR",color:new Bt(16776445),map:s.albedo,normalMap:s.normal,normalScale:new $t(.028,.028),roughnessMap:s.rough,roughness:.42,metalness:.02,iridescence:.52,iridescenceIOR:1.4,iridescenceThicknessRange:[310,540],clearcoat:.28,clearcoatRoughness:.24,side:on,envMapIntensity:1.28});Wh(o,e,!0);const a=new In({name:"LightFury_SlatePearlClaws_PBR",color:new Bt(2633016),roughness:.24,metalness:.08,clearcoat:.84,clearcoatRoughness:.12,envMapIntensity:1.5}),r=new In({name:"LightFury_PearlyTeeth_PBR",color:new Bt(16447218),roughness:.14,metalness:0,clearcoat:.92,clearcoatRoughness:.08}),l=new In({name:"LightFury_RoseGums_PBR",color:new Bt(12084344),normalMap:i.normalMap,normalScale:new $t(.08,.08),roughness:.32,clearcoat:.82,clearcoatRoughness:.12,side:on}),c=new In({name:"LightFury_PinkTongue_PBR",color:new Bt(13924494),normalMap:i.normalMap,normalScale:new $t(.1,.1),roughness:.26,clearcoat:.88,clearcoatRoughness:.1}),h=new $o({name:"LightFury_OuterHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0}),u=new $o({name:"LightFury_WingHullDepthPrePass",colorWrite:!1,depthWrite:!0,depthTest:!0,transparent:!0,opacity:0,side:on}),d=[n,o,a],m=[r,l,c,t.irisMaterial];let v=!1;return{skinMaterial:n,wingMembraneMaterial:o,clawMaterial:a,teethMaterial:r,oralGumMaterial:l,tongueMaterial:c,hullDepthMaterial:h,doubleSidedHullDepthMaterial:u,eyeMaterials:t,uniforms:e,syncCloakTransparency:f=>{const p=f>.001;if(p!==v){v=p;for(const _ of d)_.transparent=p,_.depthWrite=!p,_.depthFunc=Hi,_.polygonOffset=p,_.polygonOffsetFactor=p?-1:0,_.polygonOffsetUnits=p?-2:0,_.needsUpdate=!0;for(const _ of m)_.transparent=p,_.depthWrite=!p,_.depthTest=!0,_.depthFunc=Hi,_.needsUpdate=!0}const w=G.smoothstep(f,0,.96);return a.opacity=1-w*.86,r.opacity=1-w*.9,l.opacity=1-w*.9,c.opacity=1-w*.9,t.corneaMaterial.opacity=G.lerp(.15,.03,w),p}}}function xe(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function ke(i,t,e){const n=(i-t)/e;return Math.exp(-.5*n*n)}function Vh(i,t,e,n,s,o){const a=(i-e)/s,r=(t-n)/o;return Math.exp(-.5*(a*a+r*r))}function Vl(i,t){const e=t.length;if(i<=t[0][0])return t[0][1];if(i>=t[e-1][0])return t[e-1][1];const n=new Array(e-1),s=new Array(e);for(let h=0;h<e-1;h++)n[h]=(t[h+1][1]-t[h][1])/(t[h+1][0]-t[h][0]);s[0]=n[0],s[e-1]=n[e-2];for(let h=1;h<e-1;h++)n[h-1]*n[h]<=0?s[h]=0:s[h]=(n[h-1]+n[h])*.5;for(let h=0;h<e-1;h++)if(Math.abs(n[h])<1e-8)s[h]=0,s[h+1]=0;else{const u=s[h]/n[h],d=s[h+1]/n[h],m=Math.hypot(u,d);if(m>3){const v=3/m;s[h]=v*u*n[h],s[h+1]=v*d*n[h]}}let o=0;for(let h=0;h<e-1;h++)if(i>=t[h][0]&&i<=t[h+1][0]){o=h;break}const a=t[o+1][0]-t[o][0],r=(i-t[o][0])/a,l=r*r,c=l*r;return(2*c-3*l+1)*t[o][1]+(c-2*l+r)*a*s[o]+(-2*c+3*l)*t[o+1][1]+(c-l)*a*s[o+1]}const $x=[[-4.18,.015],[-3.55,.048],[-2.75,.088],[-1.9,.146],[-1.25,.202],[-.82,.246],[-.5,.278],[-.08,.258],[.42,.312],[.72,.326],[.98,.254],[1.22,.21],[1.44,.198]],pd=[[-4.18,.014],[-3.55,.042],[-2.75,.076],[-1.9,.126],[-1.25,.172],[-.82,.204],[-.5,.228],[-.08,.214],[.42,.248],[.72,.26],[.98,.208],[1.22,.182],[1.44,.174]],qx=[[0,.116,-4.18],[0,.116,-3.72],[0,.116,-3.28],[0,.12,-2.82],[0,.175,-2.3],[0,.32,-1.78],[0,.51,-1.32],[0,.68,-.86],[0,.755,-.5],[0,.76,-.08],[0,.815,.38],[0,.885,.75],[0,1.03,.98],[0,1.24,1.19],[0,1.45,1.38],[0,1.54,1.54],[0,1.562,1.73],[0,1.538,1.9],[0,1.49,2.065]];let Kr=null;function fd(){return Kr||(Kr=new si(qx.map(([i,t,e])=>new E(i,t,e)),!1,"centripetal",.5)),Kr}function Zx(i){const t=fd();let e=0,n=1;for(let u=0;u<24;u++){const d=(e+n)*.5;t.getPointAt(d).z<i?e=d:n=d}const s=(e+n)*.5,o=t.getPointAt(s),a=t.getTangentAt(s).normalize(),r=new E(0,1,0),l=new E().copy(r).addScaledVector(a,-r.dot(a)).normalize(),c=o.z,h=Vl(c,pd)*xe(-4.18,-4.1,c);return{point:o.clone().addScaledVector(l,h),tangent:a,up:l}}function Gh(i,t,e){const n=i/e,s=t/e+.15,o=n*n+Math.pow(s-.58*Math.sqrt(Math.abs(n)+.04),2);return 1-xe(.62,1.15,o)}function jx(i,t,e,n){const s=t.boneIndexMap.get("head"),o=t.boneIndexMap.get("neck_4"),a=t.boneIndexMap.get("neck_3");if(i.z>=1.53)return{indices:[s,0,0,0],weights:[1,0,0,0]};if(i.z>=1.28){const r=xe(1.31,1.53,i.z),l=1-r,c=xe(1.26,1.45,i.z);return Xe([s,o,a,0],[r,l*(.52+.48*c),l*(.48-.48*c),0])}return _i(i,e,n,3.5)}function Kx(i,t){const e=[];return e.push(Qx(i,t)),e.push(...Jx(i,t)),e.push(...t2(i,t)),e.push(...e2(i,t)),Ke(e)}function Qx(i,t){const e=t===0?256:t===1?128:64,n=t===0?88:t===1?46:24,s=fd(),o=["tail_10","tail_9","tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest","neck_1","neck_2","neck_3","neck_4"],a=o.map(y=>i.boneIndexMap.get(y)),r=o.map(y=>i.bindWorldPositions.get(y)),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),m=new Float32Array(l*4),v=new E(0,1,0),g=i.bindWorldPositions.get("eye_L"),f=i.bindWorldPositions.get("eye_R"),p=[{center:g,fwd:ea,up:new E(-.19,.98,.06).normalize()},{center:f,fwd:na,up:new E(.19,.98,.06).normalize()}].map(y=>{const b=new E().crossVectors(y.up,y.fwd).normalize(),A=new E().crossVectors(y.fwd,b).normalize();return{center:y.center,fwd:y.fwd,right:b,up:A}});for(let y=0;y<=e;y++){const b=y/e,A=1-Math.pow(1-b,1.85),T=s.getPointAt(A),S=s.getTangentAt(A).normalize(),M=new E().copy(v).addScaledVector(S,-v.dot(S)).normalize(),P=new E().crossVectors(M,S).normalize(),C=T.z,R=xe(-4.18,-4.1,C),F=Vl(C,$x)*R,I=Vl(C,pd)*R,k=xe(1.36,1.5,C);let N=F,D=I;if(k>0){const O=Math.max(0,Math.min(1,(C-1.44)/.625)),H=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(O-.78)/.22),2))),Z=Rs(C),q=(.174+.018*ke(O,.36,.24)-.062*xe(.36,.94,O))*H;N=G.lerp(F,Z,k),D=G.lerp(I,q,k)}for(let O=0;O<=n;O++){const H=O/n,Z=H*Math.PI*2,q=Math.sin(Z),$=Math.cos(Z);let X=N*q,V=D*$,et=.08,it=0,J=0,st=0;if(C>-2.9&&C<1.6&&$<.12){const z=xe(-2.9,-.55,C)*(1-xe(1.36,1.6,C));J=xe(.12,-.68,$)*z}if(C>-.45&&C<.92){const z=ke(C,.3,.42)*ke(Math.abs(q),.88,.22)*ke($,.08,.36);st=Math.max(st,z*.28)}if($>.35&&C>-3.9&&C<1.6){const z=xe(.35,.92,$)*xe(.1,.85,C)*(1-xe(1.45,1.65,C)),_t=ke(q,0,.16)*xe(.55,.96,$),xt=Math.pow(Math.max(0,Math.sin(C*5.8+Math.abs(q)*3.4)),4)*ke($,.42,.24)*xe(-2.4,-.4,C)*(1-xe(.95,1.35,C));it=Math.max(it,z*.48,_t*.84,xt*.72)}if(C>-.78&&C<1.08){const z=ke(C,.68,.28),_t=ke(Math.abs(q),.44,.22)*xe(-.1,-.86,$);V-=.018*z*_t,X+=Math.sign(q)*.012*z*_t;const xt=ke(C,.78,.2)*ke(Math.abs(q),.7,.18)*xe(-.08,-.78,$),Ct=ke(C,-.49,.22)*ke(Math.abs(q),.68,.19)*xe(-.05,-.78,$);V-=.026*xt+.022*Ct}if(C>=1.42){const z=ke(C,1.842,.095),_t=ke(Math.abs(q),.62,.17)*xe(.18,.74,$);V+=.014*z*_t,X+=Math.sign(q)*.007*z*_t;const xt=ke(C,1.76,.12)*ke(Math.abs(q),.88,.17)*ke($,-.12,.25);if(X+=Math.sign(q)*.016*xt,$>.65&&C>1.56&&C<1.86){const Ct=Gh(X,C-1.745,.052),Tt=Gh(X,C-1.648,.038);it=Math.max(it,Math.max(Ct,Tt*.92))}C>1.98&&$>-.35&&$<.35&&(V-=.002*ke(q,0,.08)*xe(1.98,2.055,C)),et=.22+.24*xe(1.85,2.05,C)}const Y=new E().copy(T).addScaledVector(P,X).addScaledVector(M,V),j=xe(1.52,1.6,C);if(j>0&&$<.04){const z=ls(C),_t=Math.max(xe(.56,.9,Math.abs(q)),xe(1.96,2.04,C)),xt=z-.0042,Ct=z+.039*(1-xe(1.92,2.05,C)),Tt=G.lerp(Ct,xt,_t),Nt=j*xe(.04,-.26,$);Y.y=G.lerp(Y.y,Tt,Nt)}if(C>1.66&&C<2)for(const z of p){if(Math.sign(Y.x)!==Math.sign(z.center.x))continue;const _t=new E().subVectors(Y,z.center),xt=_t.dot(z.fwd),Ct=_t.dot(z.right),Tt=_t.dot(z.up);if(xt>0){const Nt=Math.exp(-.5*(Math.pow(Ct/.053,2)+Math.pow(Tt/.045,2)))*xe(0,.032,xt),lt=Ka-.022,W=G.lerp(xt,lt,Nt);xt>W&&Y.addScaledVector(z.fwd,W-xt)}}if(C>1.94&&C<2.065&&Y.y>1.48){const z=Vh(Y.x,Y.z,.054,2.018,.017,.02)*ke(Y.y,1.508,.014),_t=Vh(Y.x,Y.z,-.054,2.018,.017,.02)*ke(Y.y,1.508,.014),xt=Math.max(z,_t),Ct=xe(1.96,2.055,Y.z)*ke(Y.y,1.505,.032);st=Math.max(st,Ct*.65),xt>.05&&(Y.x*=1-.14*xt,Y.y-=.009*xt,Y.z-=.011*xt,st=Math.max(st,Math.min(1,.55+xt*.85)))}const ut=y*(n+1)+O;c[ut*3]=Y.x,c[ut*3+1]=Y.y,c[ut*3+2]=Y.z,h[ut*2]=A*5.2,h[ut*2+1]=H*1.6,u[ut*4]=et,u[ut*4+1]=it,u[ut*4+2]=J,u[ut*4+3]=st;const tt=jx(Y,i,a,r);d.set(tt.indices,ut*4),m.set(tt.weights,ut*4)}}const w=new Uint32Array(e*n*6);let _=0;for(let y=0;y<e;y++)for(let b=0;b<n;b++){const A=y*(n+1)+b,T=(y+1)*(n+1)+b,S=(y+1)*(n+1)+(b+1),M=y*(n+1)+(b+1);w[_++]=A,w[_++]=T,w[_++]=S,w[_++]=A,w[_++]=S,w[_++]=M}const x=new Zt;return x.setAttribute("position",new Q(c,3)),x.setAttribute("uv",new Q(h,2)),x.setAttribute("aAnatomyData",new Q(u,4)),x.setAttribute("skinIndex",new Ee(d,4)),x.setAttribute("skinWeight",new Kt(m,4)),x.setIndex(new Q(w,1)),x.computeVertexNormals(),rr(x,e,n),x}function Jx(i,t){const e=[],n=i.boneIndexMap.get("head"),s=[];for(const r of["L","R"]){const l=r==="L"?1:-1;s.push({boneNames:[`ear_${r}_1`,`ear_${r}_2`,`ear_${r}_3`],tipPos:[l*.162,1.848,1.24],maxWidth:.068,maxThick:.028,rollAngle:l*-.28,isPrimaryEar:!0}),s.push({boneNames:[`cheekUpper_${r}_1`,`cheekUpper_${r}_2`],tipPos:[l*.288,1.608,1.35],maxWidth:.032,maxThick:.017,rollAngle:l*-.82,isPrimaryEar:!1})}const o=t===0?22:t===1?14:8,a=t===0?24:t===1?16:10;for(const r of s){const l=r.boneNames.map(S=>i.bindWorldPositions.get(S).clone()),c=new E().subVectors(l[1],l[0]).normalize(),u=[l[0].clone().addScaledVector(c,-.055),...l,new E(...r.tipPos)],d=new si(u),m=r.boneNames.map(S=>i.boneIndexMap.get(S)),v=r.boneNames.map(S=>i.bindWorldPositions.get(S)),g=(o+1)*(a+1),f=new Float32Array(g*3),p=new Float32Array(g*2),w=new Float32Array(g*4),_=new Uint16Array(g*4),x=new Float32Array(g*4),y=new E(0,1,0);for(let S=0;S<=o;S++){const M=S/o,P=d.getPointAt(M),C=d.getTangentAt(M).normalize(),R=y.clone().addScaledVector(C,-y.dot(C)).normalize(),F=new E().crossVectors(R,C).normalize(),I=Math.cos(r.rollAngle),k=Math.sin(r.rollAngle),N=F.clone().multiplyScalar(I).addScaledVector(R,k),D=R.clone().multiplyScalar(I).addScaledVector(F,-k),O=r.isPrimaryEar?.72+.36*Math.sin(Math.pow(M,.75)*Math.PI*.88):Math.sin(Math.pow(M,.68)*Math.PI*.92),H=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(M-.76)/.24),2))),Z=r.maxWidth*O*H,q=r.maxThick*(.78+.28*Math.sin(M*Math.PI))*H;for(let $=0;$<=a;$++){const X=$/a,V=X*Math.PI*2,et=new E().copy(P).addScaledVector(N,Z*Math.cos(V)).addScaledVector(D,q*Math.sin(V)),it=S*(a+1)+$;f[it*3]=et.x,f[it*3+1]=et.y,f[it*3+2]=et.z,p[it*2]=M*.48,p[it*2+1]=X*.48,w[it*4]=.2,w[it*4+1]=xe(.55,.95,M)*.65,w[it*4+2]=0,w[it*4+3]=xe(.65,1,M)*.3;const J=_i(et,m,v,4),st=xe(.3,0,M),Y=Xe([n,J.indices[0],J.indices[1],J.indices[2]],[st,J.weights[0]*(1-st),J.weights[1]*(1-st),J.weights[2]*(1-st)]);_.set(Y.indices,it*4),x.set(Y.weights,it*4)}}const b=new Uint16Array(o*a*6);let A=0;for(let S=0;S<o;S++)for(let M=0;M<a;M++){const P=S*(a+1)+M,C=(S+1)*(a+1)+M,R=(S+1)*(a+1)+(M+1),F=S*(a+1)+(M+1);b[A++]=P,b[A++]=C,b[A++]=R,b[A++]=P,b[A++]=R,b[A++]=F}const T=new Zt;T.setAttribute("position",new Q(f,3)),T.setAttribute("uv",new Q(p,2)),T.setAttribute("aAnatomyData",new Q(w,4)),T.setAttribute("skinIndex",new Ee(_,4)),T.setAttribute("skinWeight",new Kt(x,4)),T.setIndex(new Q(b,1)),T.computeVertexNormals(),rr(T,o,a),e.push(T)}return e}function t2(i,t){const e=[],n=i.boneIndexMap.get("head"),s=t===0?28:t===1?18:10,o=t===0?10:t===1?6:4;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eyelidUpper_${a}`),h=i.boneIndexMap.get(`eyelidLower_${a}`),u=(a==="L"?ea:na).clone(),d=new E(r*-.19,.98,.06).normalize(),m=new E().crossVectors(u,d).normalize(),v=new E().crossVectors(m,u).normalize();for(const g of[!0,!1]){const f=g?c:h,p=(s+1)*(o+1),w=new Float32Array(p*3),_=new Float32Array(p*2),x=new Float32Array(p*4),y=new Uint16Array(p*4),b=new Float32Array(p*4),A=Ka+.0016;for(let P=0;P<=o;P++){const C=P/o,R=ke(C,.06,.08);for(let F=0;F<=s;F++){const I=F/s,k=G.degToRad(G.lerp(-65,65,I)),N=Math.sin(I*Math.PI),D=g?42*N:-38*N,O=g?78:-74,H=G.degToRad(G.lerp(D,O,C)),Z=A+.0016*R-.0026*C,q=new E().addScaledVector(u,Math.cos(H)*Math.cos(k)).addScaledVector(m,Math.cos(H)*Math.sin(k)).addScaledVector(v,Math.sin(H)).normalize(),$=new E().copy(l).addScaledVector(q,Z),X=P*(s+1)+F;w[X*3]=$.x,w[X*3+1]=$.y,w[X*3+2]=$.z,_[X*2]=I*.35,_[X*2+1]=C*.18,x[X*4]=.25;const V=N*(1-xe(.48,1,C)),et=Math.max(0,Math.min(1,V));y.set([f,n,0,0],X*4),b.set([et,1-et,0,0],X*4)}}const T=new Uint16Array(s*o*6);let S=0;for(let P=0;P<o;P++)for(let C=0;C<s;C++){const R=P*(s+1)+C,F=(P+1)*(s+1)+C,I=(P+1)*(s+1)+(C+1),k=P*(s+1)+(C+1);g?(T[S++]=R,T[S++]=I,T[S++]=F,T[S++]=R,T[S++]=k,T[S++]=I):(T[S++]=R,T[S++]=F,T[S++]=I,T[S++]=R,T[S++]=I,T[S++]=k)}const M=new Zt;M.setAttribute("position",new Q(w,3)),M.setAttribute("uv",new Q(_,2)),M.setAttribute("aAnatomyData",new Q(x,4)),M.setAttribute("skinIndex",new Ee(y,4)),M.setAttribute("skinWeight",new Kt(b,4)),M.setIndex(new Q(T,1)),M.computeVertexNormals(),e.push(M)}}return e}function e2(i,t){const e=[],n=t===0?40:t===1?24:14,s=t===0?32:t===1?20:12;for(const o of["L","R"]){const a=o==="L"?1:-1,r=[new E(a*.14,.89,.78),i.bindWorldPositions.get(`scapula_${o}`),i.bindWorldPositions.get(`shoulder_${o}`),i.bindWorldPositions.get(`elbow_${o}`),i.bindWorldPositions.get(`wrist_${o}`),new E(a*.292,.048,.925),new E(a*.292,.028,.992)],l=["chest",`scapula_${o}`,`shoulder_${o}`,`elbow_${o}`,`wrist_${o}`,`forepaw_${o}`];e.push(Yh(i,r,l,!0,a,n,s)),e.push(...Xh(i,o,!0,t));const c=[new E(a*.13,.75,-.49),i.bindWorldPositions.get(`hip_${o}`),i.bindWorldPositions.get(`knee_${o}`),i.bindWorldPositions.get(`ankle_${o}`),new E(a*.278,.046,-.506),new E(a*.278,.028,-.442)],h=["pelvis",`hip_${o}`,`knee_${o}`,`ankle_${o}`,`hindpaw_${o}`];e.push(Yh(i,c,h,!1,a,n,s)),e.push(...Xh(i,o,!1,t))}return e}function Xh(i,t,e,n){const s=[],o=cd(t,e),a=n===0?15:n===1?10:6,r=n===0?16:n===1?10:8;for(const l of o){const c=i.boneIndexMap.get(l.pawBone),h=(a+1)*(r+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4),f=Math.hypot(l.dirX,l.dirZ),p=l.dirX/f,w=l.dirZ/f,_=w,x=-p;for(let T=0;T<=a;T++){const S=T/a,M=G.lerp(-.36,1,S),P=Math.max(0,M),C=Math.max(0,-M)*.036,R=Math.sin(P*Math.PI)*.009-.008*P*P+C,F=l.rootX+p*l.toeLength*M,I=l.rootZ+w*l.toeLength*M,k=l.rootY+R,N=1+.42*Math.pow(1-xe(-.36,.18,M),1.5),D=1+.13*ke(P,.4,.18)+.11*ke(P,.84,.1),O=Math.sqrt(Math.max(.04,1-Math.pow(Math.max(0,(S-.89)/.11),2))),H=G.lerp(l.baseRadius,l.tipRadius,P)*N*D*O;for(let Z=0;Z<=r;Z++){const q=Z/r,$=q*Math.PI*2,X=Math.sin($),V=Math.cos($),et=1.1+.22*(1-xe(-.34,.2,M)),it=F+_*X*H*et,J=I+x*X*H*et;let st=k+V*H*.86;st<.003&&(st=.003+Math.max(0,st)*.14);const Y=T*(r+1)+Z;u[Y*3]=it,u[Y*3+1]=st,u[Y*3+2]=J,d[Y*2]=S*.36,d[Y*2+1]=q*.32,m[Y*4]=.28,m[Y*4+1]=V>.2?.52*xe(.2,.85,P):0,m[Y*4+2]=.35,v.set([c,0,0,0],Y*4),g.set([1,0,0,0],Y*4)}}const y=new Uint16Array(a*r*6);let b=0;for(let T=0;T<a;T++)for(let S=0;S<r;S++){const M=T*(r+1)+S,P=(T+1)*(r+1)+S,C=(T+1)*(r+1)+(S+1),R=T*(r+1)+(S+1);y[b++]=M,y[b++]=P,y[b++]=C,y[b++]=M,y[b++]=C,y[b++]=R}const A=new Zt;A.setAttribute("position",new Q(u,3)),A.setAttribute("uv",new Q(d,2)),A.setAttribute("aAnatomyData",new Q(m,4)),A.setAttribute("skinIndex",new Ee(v,4)),A.setAttribute("skinWeight",new Kt(g,4)),A.setIndex(new Q(y,1)),A.computeVertexNormals(),rr(A,a,r),s.push(A)}return s}function Yh(i,t,e,n,s,o,a){const r=new si(t,!1,"centripetal",.5),l=e.map(x=>i.boneIndexMap.get(x)),c=e.map(x=>i.bindWorldPositions.get(x)),h=(o+1)*(a+1),u=new Float32Array(h*3),d=new Float32Array(h*2),m=new Float32Array(h*4),v=new Uint16Array(h*4),g=new Float32Array(h*4),f=new E(0,0,1);for(let x=0;x<=o;x++){const b=1-x/o,A=r.getPointAt(b),T=r.getTangentAt(b).negate().normalize(),S=f.clone().addScaledVector(T,-f.dot(T)).normalize(),M=new E().crossVectors(S,T).normalize(),P=.5+.5*xe(0,.34,b),C=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(b-.91)/.09),2)))*P;let R=.08,F=.092;if(n){const N=ke(b,.54,.16)*.022,D=ke(b,.86,.12)*.072;R=(.076+N+D)*C,F=(.09+ke(b,.25,.18)*.028+N+D*.86)*C}else{const N=ke(b,.52,.15)*.026,D=ke(b,.86,.12)*.068;R=(.074+N+D)*C,F=(.094+ke(b,.26,.19)*.038+N*1.06+D*.84)*C}const I=xe(.7,.94,b),k=1-xe(.08,.42,b);for(let N=0;N<=a;N++){const D=N/a,O=D*Math.PI*2,H=Math.sin(O),Z=Math.cos(O),q=H*s>0?Math.abs(H):0,$=1-.28*k*q;let X=1;if(I>.01&&Z>-.35){const z=Math.atan2(H,Math.max(.05,Z+.25)),_t=Math.cos(z*3.6);X+=.14*I*Math.max(-.12,_t)*xe(-.35,.45,Z)}let V=0;if(n&&b>.28&&b<.84){const z=Math.max(0,H*s*.62-Z*.78);V=Math.pow(z,3.6)*Math.sin((b-.28)/.56*Math.PI)*.028}else if(!n&&b>.34&&b<.84){const z=Math.max(0,H*s*.58-Z*.81);V=Math.pow(z,3.8)*Math.sin((b-.34)/.5*Math.PI)*.022}const et=new E().copy(A).addScaledVector(M,(R*$*H+s*V*.65)*X).addScaledVector(S,(F*Z-V*.75)*X);b>.7&&et.y<.004&&(et.y=.002+Math.max(0,et.y)*.14);const it=x*(a+1)+N;u[it*3]=et.x,u[it*3+1]=et.y,u[it*3+2]=et.z,d[it*2]=b*1.35,d[it*2+1]=D*.85,m[it*4]=.22,m[it*4+1]=Math.min(1,V*22+Math.pow(Math.max(0,Math.sin(b*14)),4)*q*.65),m[it*4+2]=Math.max(xe(.65,.96,b)*.35,Math.max(0,-H*s)*.45);const J=_i(et,l,c,3.5),st=xe(.24,0,b)*.72,Y=l[l.length-1],j=xe(.74,.88,b),ut=(1-st)*(1-j),tt=Xe([Y,l[0],J.indices[0],J.indices[1]],[j,st*(1-j),J.weights[0]*ut,J.weights[1]*ut]);v.set(tt.indices,it*4),g.set(tt.weights,it*4)}}const p=new Uint16Array(o*a*6);let w=0;for(let x=0;x<o;x++)for(let y=0;y<a;y++){const b=x*(a+1)+y,A=(x+1)*(a+1)+y,T=(x+1)*(a+1)+(y+1),S=x*(a+1)+(y+1);p[w++]=b,p[w++]=A,p[w++]=T,p[w++]=b,p[w++]=T,p[w++]=S}const _=new Zt;return _.setAttribute("position",new Q(u,3)),_.setAttribute("uv",new Q(d,2)),_.setAttribute("aAnatomyData",new Q(m,4)),_.setAttribute("skinIndex",new Ee(v,4)),_.setAttribute("skinWeight",new Kt(g,4)),_.setIndex(new Q(p,1)),_.computeVertexNormals(),rr(_,o,a),_}function rr(i,t,e){const n=i.getAttribute("normal"),s=new E,o=new E;for(let a=0;a<=t;a++){const r=a*(e+1),l=a*(e+1)+e;s.fromBufferAttribute(n,r),o.fromBufferAttribute(n,l),s.lengthSq()>1e-6&&o.lengthSq()>1e-6&&(s.add(o).normalize(),n.setXYZ(r,s.x,s.y,s.z),n.setXYZ(l,s.x,s.y,s.z))}n.needsUpdate=!0}function Ui(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function n2(i,t){return{jawSkinGeometry:Ke([s2(i,t),...o2(i,t)]),oralGumsGeometry:a2(i,t),teethGeometry:r2(i,t),tongueGeometry:l2(i,t),irisGeometry:$h(i,t,!1),corneaGeometry:$h(i,t,!0),clawsGeometry:c2(i,t)}}function i2(i,t){const e=1.66+Math.cos(i)*(t?.355:.34),n=Math.max(.02,Rs(e)-(t?.022:.028));return{x:Math.sin(i)*n,z:e}}function s2(i,t){const e=t===0?40:t===1?26:16,n=t===0?38:t===1?24:16,s=i.boneIndexMap.get("jaw"),o=i.boneIndexMap.get("head"),a=i.boneIndexMap.get("neck_4"),r=i.boneIndexMap.get("neck_3"),l=(e+1)*(n+1),c=new Float32Array(l*3),h=new Float32Array(l*2),u=new Float32Array(l*4),d=new Uint16Array(l*4),m=new Float32Array(l*4);for(let p=0;p<=e;p++){const w=p/e,_=G.lerp(1.45,2.056,w),x=Rs(_),y=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(w-.87)/.13),2))),b=Math.max(.002,(x-.0032*Ui(1.55,1.65,_))*y),A=ls(_),T=.025*(1-Ui(1.45,1.59,_)),S=A+.0032+T,M=(.074-.03*w)*y;for(let P=0;P<=n;P++){const C=P/n,R=C*Math.PI*2,F=Math.sin(R),I=Math.cos(R),k=Math.exp(-Math.pow((w-.28)/.22,2))*.009,N=Math.exp(-Math.pow((w-.3)/.16,2))*Math.abs(F)*.008,D=(b+N)*F,O=-.019*I*(1-Math.pow(F,2))*Ui(1.57,1.66,_),H=I>=0?S+O:S+(M+k)*I,Z=p*(n+1)+P;c[Z*3]=D,c[Z*3+1]=H,c[Z*3+2]=_,h[Z*2]=w*.95,h[Z*2+1]=C*.85,u[Z*4]=.22,u[Z*4+1]=0,u[Z*4+2]=I<-.15?Ui(.92,.25,w)*-I*.72:0,u[Z*4+3]=w>.82?(w-.82)*2.2:0;const q=Ui(1.51,1.6,_),$=1-q,X=Ui(1.31,1.53,_),V=Ui(1.26,1.45,_),et=$*(1-X),it=Xe([s,o,a,r],[q,$*X,et*(.52+.48*V),et*(.48-.48*V)]);d.set(it.indices,Z*4),m.set(it.weights,Z*4)}}const v=new Uint16Array(e*n*6);let g=0;for(let p=0;p<e;p++)for(let w=0;w<n;w++){const _=p*(n+1)+w,x=(p+1)*(n+1)+w,y=(p+1)*(n+1)+(w+1),b=p*(n+1)+(w+1);v[g++]=_,v[g++]=x,v[g++]=y,v[g++]=_,v[g++]=y,v[g++]=b}const f=new Zt;return f.setAttribute("position",new Q(c,3)),f.setAttribute("uv",new Q(h,2)),f.setAttribute("aAnatomyData",new Q(u,4)),f.setAttribute("skinIndex",new Ee(d,4)),f.setAttribute("skinWeight",new Kt(m,4)),f.setIndex(new Q(v,1)),f.computeVertexNormals(),f}function o2(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?12:8,a=t===0?10:6;for(const r of["L","R"]){const l=r==="L"?1:-1,c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let w=0;w<=a;w++){const _=w/a;for(let x=0;x<=o;x++){const y=x/o,b=G.lerp(1.56,1.72,y),A=ls(b),T=G.lerp(A-.015,A+.018,_),S=Rs(b)-.008,M=-.005*Math.sin(y*Math.PI)*Math.sin(_*Math.PI),P=l*(S+M),C=w*(o+1)+x;h[C*3]=P,h[C*3+1]=T,h[C*3+2]=b,u[C*2]=y*.25,u[C*2+1]=_*.25,d[C*4]=.22;const R=Ui(0,1,_);m.set([n,s,0,0],C*4),v.set([R,1-R,0,0],C*4)}}const g=new Uint16Array(o*a*6);let f=0;for(let w=0;w<a;w++)for(let _=0;_<o;_++){const x=w*(o+1)+_,y=(w+1)*(o+1)+_,b=(w+1)*(o+1)+(_+1),A=w*(o+1)+(_+1);l>0?(g[f++]=x,g[f++]=b,g[f++]=y,g[f++]=x,g[f++]=A,g[f++]=b):(g[f++]=x,g[f++]=y,g[f++]=b,g[f++]=x,g[f++]=b,g[f++]=A)}const p=new Zt;p.setAttribute("position",new Q(h,3)),p.setAttribute("uv",new Q(u,2)),p.setAttribute("aAnatomyData",new Q(d,4)),p.setAttribute("skinIndex",new Ee(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new Q(g,1)),p.computeVertexNormals(),e.push(p)}return e}function a2(i,t){const e=[],n=i.boneIndexMap.get("head"),s=i.boneIndexMap.get("jaw"),o=t===0?28:16,a=t===0?18:10;{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let w=0;w<=o;w++){const _=w/o,x=G.lerp(1.58,2.025,_),y=Math.max(.014,Rs(x)-.018),b=ls(x),A=Math.sin(_*Math.PI*12)*.0022*Math.sin(_*Math.PI);for(let T=0;T<=a;T++){const S=T/a,M=(S-.5)*2,P=Math.cos(M*Math.PI*.5)*.028*(1-.45*_),C=-.002*Math.exp(-Math.pow(M/.12,2)),R=Math.exp(-Math.pow((Math.abs(M)-.88)/.12,2))*-.005,F=M*y,I=b+.007+P+A*(1-Math.abs(M)*.5)+C+R,k=w*(a+1)+T;h[k*3]=F,h[k*3+1]=I,h[k*3+2]=x,u[k*2]=_*2,u[k*2+1]=S*2,d[k*4+3]=(1-_)*.65,m.set([n,0,0,0],k*4),v.set([1,0,0,0],k*4)}}const g=new Uint16Array(o*a*6);let f=0;for(let w=0;w<o;w++)for(let _=0;_<a;_++){const x=w*(a+1)+_,y=(w+1)*(a+1)+_,b=(w+1)*(a+1)+(_+1),A=w*(a+1)+(_+1);g[f++]=x,g[f++]=b,g[f++]=y,g[f++]=x,g[f++]=A,g[f++]=b}const p=new Zt;p.setAttribute("position",new Q(h,3)),p.setAttribute("uv",new Q(u,2)),p.setAttribute("aAnatomyData",new Q(d,4)),p.setAttribute("skinIndex",new Ee(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new Q(g,1)),p.computeVertexNormals(),e.push(p)}{const c=(o+1)*(a+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let w=0;w<=o;w++){const _=w/o,x=G.lerp(1.58,2.015,_),y=Math.max(.012,Rs(x)-.022),b=ls(x);for(let A=0;A<=a;A++){const T=A/a,S=(T-.5)*2,M=-Math.cos(S*Math.PI*.5)*.016*(1-.35*_),P=Math.exp(-Math.pow((Math.abs(S)-.86)/.14,2))*.0055,C=S*y,R=b-.004+M+P,F=w*(a+1)+A;h[F*3]=C,h[F*3+1]=R,h[F*3+2]=x,u[F*2]=_*2,u[F*2+1]=T*2,d[F*4+3]=(1-_)*.55,m.set([s,0,0,0],F*4),v.set([1,0,0,0],F*4)}}const g=new Uint16Array(o*a*6);let f=0;for(let w=0;w<o;w++)for(let _=0;_<a;_++){const x=w*(a+1)+_,y=(w+1)*(a+1)+_,b=(w+1)*(a+1)+(_+1),A=w*(a+1)+(_+1);g[f++]=x,g[f++]=y,g[f++]=b,g[f++]=x,g[f++]=b,g[f++]=A}const p=new Zt;p.setAttribute("position",new Q(h,3)),p.setAttribute("uv",new Q(u,2)),p.setAttribute("aAnatomyData",new Q(d,4)),p.setAttribute("skinIndex",new Ee(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new Q(g,1)),p.computeVertexNormals(),e.push(p)}const r=t===0?18:10,l=t===0?12:8;{const c=(r+1)*(l+1),h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*4),m=new Uint16Array(c*4),v=new Float32Array(c*4);for(let w=0;w<=l;w++){const _=w/l;for(let x=0;x<=r;x++){const y=x/r,b=G.lerp(-Math.PI*.62,Math.PI*.62,y),A=1.66-Math.cos(b)*.1,T=Rs(Math.max(1.55,A))-.02,S=Math.sin(b)*T,M=ls(A),P=G.lerp(M-.016,M+.026,_),C=w*(r+1)+x;h[C*3]=S,h[C*3+1]=P,h[C*3+2]=A,u[C*2]=y*1.5,u[C*2+1]=_*1.5,d[C*4+3]=.95*Math.cos(b*.65);const R=Ui(0,1,_);m.set([n,s,0,0],C*4),v.set([R,1-R,0,0],C*4)}}const g=new Uint16Array(r*l*6);let f=0;for(let w=0;w<l;w++)for(let _=0;_<r;_++){const x=w*(r+1)+_,y=(w+1)*(r+1)+_,b=(w+1)*(r+1)+(_+1),A=w*(r+1)+(_+1);g[f++]=x,g[f++]=y,g[f++]=b,g[f++]=x,g[f++]=b,g[f++]=A}const p=new Zt;p.setAttribute("position",new Q(h,3)),p.setAttribute("uv",new Q(u,2)),p.setAttribute("aAnatomyData",new Q(d,4)),p.setAttribute("skinIndex",new Ee(m,4)),p.setAttribute("skinWeight",new Kt(v,4)),p.setIndex(new Q(g,1)),p.computeVertexNormals(),e.push(p)}return Ke(e)}function r2(i,t){const e=i.boneIndexMap.get("teethUpper"),n=i.boneIndexMap.get("teethLower"),s=[],o=t===0?8:5,a=t===0?10:6;for(const r of[!0,!1]){const l=r?16:14,c=r?e:n,h=r?-1:1;for(let u=0;u<l;u++){const d=(u+.5)/l,m=G.lerp(-Math.PI*.42,Math.PI*.42,d),v=i2(m,r),g=v.x,f=v.z,p=ls(f)+(r?.01:-.009),w=1+.3*Math.exp(-Math.pow((Math.abs(m)-.52)/.25,2)),_=.0195*w*(.78+.22*Math.cos(m)),x=.0054*w,y=(o+1)*(a+1),b=new Float32Array(y*3),A=new Float32Array(y*2),T=new Float32Array(y*4),S=new Uint16Array(y*4),M=new Float32Array(y*4),P=-Math.sin(m),C=-Math.cos(m);for(let k=0;k<=o;k++){const N=r?1-k/o:k/o,D=x*(1-.88*Math.pow(N,1.25)),O=.0045*N*N,H=g+P*O,Z=p+h*_*N,q=f+C*O-.0025*N*N;for(let $=0;$<=a;$++){const X=$/a,V=X*Math.PI*2,et=k*(a+1)+$;b[et*3]=H+Math.sin(V)*D,b[et*3+1]=Z,b[et*3+2]=q+Math.cos(V)*D,A[et*2]=N,A[et*2+1]=X,S.set([c,0,0,0],et*4),M.set([1,0,0,0],et*4)}}const R=new Uint16Array(o*a*6);let F=0;for(let k=0;k<o;k++)for(let N=0;N<a;N++){const D=k*(a+1)+N,O=(k+1)*(a+1)+N,H=(k+1)*(a+1)+(N+1),Z=k*(a+1)+(N+1);R[F++]=D,R[F++]=O,R[F++]=H,R[F++]=D,R[F++]=H,R[F++]=Z}const I=new Zt;I.setAttribute("position",new Q(b,3)),I.setAttribute("uv",new Q(A,2)),I.setAttribute("aAnatomyData",new Q(T,4)),I.setAttribute("skinIndex",new Ee(S,4)),I.setAttribute("skinWeight",new Kt(M,4)),I.setIndex(new Q(R,1)),I.computeVertexNormals(),s.push(I)}}return Ke(s)}function l2(i,t){const e=t===0?28:16,n=t===0?22:12,s=["tongue_1","tongue_2","tongue_3","tongue_4"],o=s.map(f=>i.boneIndexMap.get(f)),a=s.map(f=>i.bindWorldPositions.get(f)),r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*4),u=new Uint16Array(r*4),d=new Float32Array(r*4);for(let f=0;f<=e;f++){const p=f/e,w=G.lerp(1.62,1.96,p),_=ls(w)-.0035,x=Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(p-.76)/.24),2))),y=(.068+.01*Math.sin(p*Math.PI)-.02*p)*x,b=(.013-.004*p)*x;for(let A=0;A<=n;A++){const T=A/n,S=T*Math.PI*2,M=Math.sin(S),P=Math.cos(S),C=P>.35?-.0035*Math.exp(-Math.pow(M/.24,2)):0,R=P>.2?.001*Math.sin(p*Math.PI*26)*Math.cos(M*Math.PI*9)*x:0,F=new E(y*M,_+b*P+C+R,w),I=f*(n+1)+A;l[I*3]=F.x,l[I*3+1]=F.y,l[I*3+2]=F.z,c[I*2]=p*2.5,c[I*2+1]=T*1.8;const k=_i(F,o,a,3.8);u.set(k.indices,I*4),d.set(k.weights,I*4)}}const m=new Uint16Array(e*n*6);let v=0;for(let f=0;f<e;f++)for(let p=0;p<n;p++){const w=f*(n+1)+p,_=(f+1)*(n+1)+p,x=(f+1)*(n+1)+(p+1),y=f*(n+1)+(p+1);m[v++]=w,m[v++]=_,m[v++]=x,m[v++]=w,m[v++]=x,m[v++]=y}const g=new Zt;return g.setAttribute("position",new Q(l,3)),g.setAttribute("uv",new Q(c,2)),g.setAttribute("aAnatomyData",new Q(h,4)),g.setAttribute("skinIndex",new Ee(u,4)),g.setAttribute("skinWeight",new Kt(d,4)),g.setIndex(new Q(m,1)),g.computeVertexNormals(),g}function $h(i,t,e){const n=[],s=t===0?32:t===1?22:14,o=t===0?40:t===1?26:16;for(const a of["L","R"]){const r=a==="L"?1:-1,l=i.bindWorldPositions.get(`eye_${a}`),c=i.boneIndexMap.get(`eye_${a}`),h=(a==="L"?ea:na).clone(),u=new E(r*-.19,.98,.06).normalize(),d=new E().crossVectors(u,h).normalize(),m=new E().crossVectors(h,d).normalize(),v=e?Ka+8e-4:Ka,g=.94,f=(s+1)*(o+1),p=new Float32Array(f*3),w=new Float32Array(f*2),_=new Float32Array(f*4),x=new Uint16Array(f*4),y=new Float32Array(f*4);for(let S=0;S<=s;S++){const M=S/s*(e?Math.PI*.52:Math.PI*.88),P=Math.sin(M),C=Math.cos(M);for(let R=0;R<=o;R++){const F=R/o*Math.PI*2,I=Math.cos(F),k=Math.sin(F);let N=v;if(M<g){const q=1-M/g;N+=e?.0013*q*q:-.0025*q*q}const D=new E().addScaledVector(h,C).addScaledVector(d,P*I).addScaledVector(m,P*k).normalize(),O=new E().copy(l).addScaledVector(D,N),H=S*(o+1)+R;p[H*3]=O.x,p[H*3+1]=O.y,p[H*3+2]=O.z;const Z=Math.min(.498,M/g*.48);w[H*2]=.5+Z*I,w[H*2+1]=.5+Z*k,x.set([c,0,0,0],H*4),y.set([1,0,0,0],H*4)}}const b=new Uint16Array(s*o*6);let A=0;for(let S=0;S<s;S++)for(let M=0;M<o;M++){const P=S*(o+1)+M,C=(S+1)*(o+1)+M,R=(S+1)*(o+1)+(M+1),F=S*(o+1)+(M+1);b[A++]=P,b[A++]=C,b[A++]=R,b[A++]=P,b[A++]=R,b[A++]=F}const T=new Zt;T.setAttribute("position",new Q(p,3)),T.setAttribute("uv",new Q(w,2)),T.setAttribute("aAnatomyData",new Q(_,4)),T.setAttribute("skinIndex",new Ee(x,4)),T.setAttribute("skinWeight",new Kt(y,4)),T.setIndex(new Q(b,1)),T.computeVertexNormals(),n.push(T)}return Ke(n)}function c2(i,t){const e=[],n=t===0?10:6,s=t===0?12:8;for(const o of["L","R"])for(const a of[!0,!1]){const r=cd(o,a);for(const l of r){const c=i.boneIndexMap.get(l.pawBone),h=Math.hypot(l.dirX,l.dirZ),u=l.dirX/h,d=l.dirZ/h,m=d,v=-u,g=.74,f=l.rootX+u*l.toeLength*g,p=l.rootZ+d*l.toeLength*g,w=l.rootY+Math.sin(g*Math.PI)*.009-.008*g*g+.002,_=l.toeLength*(1-g)+l.clawLength,x=l.tipRadius*.72,y=(n+1)*(s+1),b=new Float32Array(y*3),A=new Float32Array(y*2),T=new Float32Array(y*4),S=new Uint16Array(y*4),M=new Float32Array(y*4);for(let F=0;F<=n;F++){const I=F/n,k=x*Math.sqrt(Math.max(.06,1-Math.pow(I,1.72))),N=f+u*_*I,D=p+d*_*I,O=Math.max(.004,w-.028*Math.pow(I,1.82)+.004*Math.sin(I*Math.PI));for(let H=0;H<=s;H++){const Z=H/s,q=Z*Math.PI*2,$=Math.sin(q),X=Math.cos(q),V=F*(s+1)+H;b[V*3]=N+m*$*k*.72,b[V*3+1]=Math.max(.002,O+X*k*1.04),b[V*3+2]=D+v*$*k*.72,A[V*2]=I,A[V*2+1]=Z,S.set([c,0,0,0],V*4),M.set([1,0,0,0],V*4)}}const P=new Uint16Array(n*s*6);let C=0;for(let F=0;F<n;F++)for(let I=0;I<s;I++){const k=F*(s+1)+I,N=(F+1)*(s+1)+I,D=(F+1)*(s+1)+(I+1),O=F*(s+1)+(I+1);P[C++]=k,P[C++]=N,P[C++]=D,P[C++]=k,P[C++]=D,P[C++]=O}const R=new Zt;R.setAttribute("position",new Q(b,3)),R.setAttribute("uv",new Q(A,2)),R.setAttribute("aAnatomyData",new Q(T,4)),R.setAttribute("skinIndex",new Ee(S,4)),R.setAttribute("skinWeight",new Kt(M,4)),R.setIndex(new Q(P,1)),R.computeVertexNormals(),e.push(R)}}return Ke(e)}function wo(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function h2(i,t){const e=[],n=[];for(const s of["L","R"]){const o=s==="L"?1:-1;e.push(...u2(i,s,o,t)),n.push(...d2(i,s,o,t)),e.push(...p2(i,s,t)),n.push(f2(i,s,t)),n.push(m2(i,s,o,t)),e.push(...g2(i,s,o,t)),n.push(v2(i,s,o,t))}return{wingSparsSkinGeometry:Ke(e),wingMembraneGeometry:Ke(n),dorsalSpinesGeometry:x2(i,t)}}function Qa(i,t,e,n,s,o,a=.42,r=.12){const l=new si(t),c=e.map(y=>i.boneIndexMap.get(y)),h=e.map(y=>i.bindWorldPositions.get(y)),u=(s+1)*(o+1),d=new Float32Array(u*3),m=new Float32Array(u*2),v=new Float32Array(u*4),g=new Uint16Array(u*4),f=new Float32Array(u*4),p=new E(0,1,0);for(let y=0;y<=s;y++){const b=y/s,A=l.getPointAt(b),T=l.getTangentAt(b).normalize();let S=p.clone().addScaledVector(T,-p.dot(T));S.lengthSq()<1e-4&&S.set(0,0,1),S.normalize();const M=new E().crossVectors(S,T).normalize(),P=b*(n.length-1),C=Math.min(n.length-2,Math.floor(P)),R=P-C;let F=G.lerp(n[C],n[C+1],R);b>.86&&(F*=Math.sqrt(Math.max(0,1-Math.pow((b-.86)/.14,2))));for(let I=0;I<=o;I++){const k=I/o,N=k*Math.PI*2,D=new E().copy(A).addScaledVector(M,F*Math.sin(N)).addScaledVector(S,F*a*Math.cos(N)),O=y*(o+1)+I;d[O*3]=D.x,d[O*3+1]=D.y,d[O*3+2]=D.z,m[O*2]=b*1.4,m[O*2+1]=k*.45,v[O*4]=.08,v[O*4+1]=wo(.3,.92,b)*.38,v[O*4+2]=r;const H=_i(D,c,h,3.8);g.set(H.indices,O*4),f.set(H.weights,O*4)}}const w=new Uint16Array(s*o*6);let _=0;for(let y=0;y<s;y++)for(let b=0;b<o;b++){const A=y*(o+1)+b,T=(y+1)*(o+1)+b,S=(y+1)*(o+1)+(b+1),M=y*(o+1)+(b+1);w[_++]=A,w[_++]=T,w[_++]=S,w[_++]=A,w[_++]=S,w[_++]=M}const x=new Zt;return x.setAttribute("position",new Q(d,3)),x.setAttribute("uv",new Q(m,2)),x.setAttribute("aAnatomyData",new Q(v,4)),x.setAttribute("skinIndex",new Ee(g,4)),x.setAttribute("skinWeight",new Kt(f,4)),x.setIndex(new Q(w,1)),x.computeVertexNormals(),x}function u2(i,t,e,n){const s=[],o=n===0?28:n===1?18:10,a=n===0?18:n===1?12:8,r=n===0?20:n===1?12:8,l=n===0?12:n===1?8:6,c=[new E(e*.16,.9,.68),i.bindWorldPositions.get(`wingClavicle_${t}`),i.bindWorldPositions.get(`wingShoulder_${t}`),i.bindWorldPositions.get(`wingElbow_${t}`),i.bindWorldPositions.get(`wingWrist_${t}`),i.bindWorldPositions.get(`wingFinger_${t}_6_a`),i.bindWorldPositions.get(`wingFinger_${t}_6_b`)],h=["chest",`wingClavicle_${t}`,`wingShoulder_${t}`,`wingElbow_${t}`,`wingWrist_${t}`,`wingFinger_${t}_6_a`,`wingFinger_${t}_6_b`];s.push(Qa(i,c,h,[.048,.052,.05,.042,.032,.02,.005],o,a,.58,.08));const u=i.bindWorldPositions.get(`wingWrist_${t}`);for(let d=1;d<=5;d++){const m=i.bindWorldPositions.get(`wingFinger_${t}_${d}_a`),v=i.bindWorldPositions.get(`wingFinger_${t}_${d}_b`);s.push(Qa(i,[u,m,v],[`wingWrist_${t}`,`wingFinger_${t}_${d}_a`,`wingFinger_${t}_${d}_b`],[.013,.0085,.0025],r,l,.34,.1))}return s}function co(i,t,e){const n=(i+1)*(t+1),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Float32Array(n*4),r=new Uint16Array(n*4),l=new Float32Array(n*4);for(let d=0;d<=t;d++){const m=d/t;for(let v=0;v<=i;v++){const g=v/i,f=e(g,m),p=d*(i+1)+v;s[p*3]=f.pos.x,s[p*3+1]=f.pos.y,s[p*3+2]=f.pos.z,o[p*2]=g*1.25,o[p*2+1]=m*1.25,a[p*4]=.06,a[p*4+1]=f.pinkStripe??0,a[p*4+2]=f.iceBlue??.14,a[p*4+3]=f.thinness,r.set(f.skin.indices,p*4),l.set(f.skin.weights,p*4)}}const c=new Uint16Array(i*t*6);let h=0;for(let d=0;d<t;d++)for(let m=0;m<i;m++){const v=d*(i+1)+m,g=(d+1)*(i+1)+m,f=(d+1)*(i+1)+(m+1),p=d*(i+1)+(m+1);c[h++]=v,c[h++]=g,c[h++]=f,c[h++]=v,c[h++]=f,c[h++]=p}const u=new Zt;return u.setAttribute("position",new Q(s,3)),u.setAttribute("uv",new Q(o,2)),u.setAttribute("uv1",new Q(o,2)),u.setAttribute("aAnatomyData",new Q(a,4)),u.setAttribute("skinIndex",new Ee(r,4)),u.setAttribute("skinWeight",new Kt(l,4)),u.setIndex(new Q(c,1)),u.computeVertexNormals(),u}function d2(i,t,e,n){const s=[],o=n===0?16:n===1?9:5,a=n===0?16:n===1?9:5,r=i.boneIndexMap.get(`wingWrist_${t}`),l=i.boneIndexMap.get(`wingElbow_${t}`),c=i.boneIndexMap.get(`wingShoulder_${t}`),h=i.boneIndexMap.get("chest"),u=i.boneIndexMap.get("spine_1"),d=i.boneIndexMap.get("pelvis"),m=i.bindWorldPositions.get(`wingWrist_${t}`),v=i.bindWorldPositions.get(`wingElbow_${t}`),g=i.bindWorldPositions.get(`wingShoulder_${t}`);s.push(co(o,Math.max(4,Math.floor(a*.5)),(x,y)=>{const b=new E().lerpVectors(new E(e*.25,.96,.74),m,x),A=x<.45?new E().lerpVectors(g,v,x/.45):new E().lerpVectors(v,m,(x-.45)/.55),T=new E().lerpVectors(A,b,y),S=Math.max(0,1-x*2.1),M=Math.max(0,(x-.45)*1.82),P=Math.max(0,1-S-M),C=Xe([c,l,r,0],[S,P,M,0]);return{pos:T,skin:C,thinness:.38+.34*y,pinkStripe:.18*y,iceBlue:.1}}));const f=i.bindWorldPositions.get(`wingFinger_${t}_1_a`),p=i.bindWorldPositions.get(`wingFinger_${t}_1_b`),w=i.boneIndexMap.get(`wingFinger_${t}_1_a`),_=i.boneIndexMap.get(`wingFinger_${t}_1_b`);s.push(co(o,a,(x,y)=>{const b=new E(e*.21,.9,.62),A=new E(e*.18,.75,-.44),T=new E().lerpVectors(b,A,y),S=y<.5?new E().lerpVectors(m,f,y*2):new E().lerpVectors(f,p,(y-.5)*2),M=x<.45?new E().lerpVectors(g,v,x/.45):new E().lerpVectors(v,m,(x-.45)/.55),P=new E().lerpVectors(T,S,x),C=new E().lerpVectors(M,P,Math.pow(y,.85));C.z+=Math.sin(x*Math.PI)*.045*Math.pow(y,1.8),C.y+=Math.sin(x*Math.PI)*Math.sin(y*Math.PI)*.022;const R=1-x,F=x,I=y<.36?h:y<.72?u:d,k=y<.25?l:y<.55?r:w,N=y<.55?w:_,D=y<.55?y/.55:(y-.55)/.45,O=Xe([I,k,N,c],[R*.88,F*(1-D),F*D,R*.12]),H=Math.pow(.5+.5*Math.sin(y*14+x*4.5),3)*.55;return{pos:C,skin:O,thinness:.55+.4*y,pinkStripe:H*x,iceBlue:(1-x)*.35+.08}}));for(let x=1;x<=5;x++){const y=i.bindWorldPositions.get(`wingFinger_${t}_${x}_a`),b=i.bindWorldPositions.get(`wingFinger_${t}_${x}_b`),A=i.bindWorldPositions.get(`wingFinger_${t}_${x+1}_a`),T=i.bindWorldPositions.get(`wingFinger_${t}_${x+1}_b`),S=i.boneIndexMap.get(`wingFinger_${t}_${x}_a`),M=i.boneIndexMap.get(`wingFinger_${t}_${x}_b`),P=i.boneIndexMap.get(`wingFinger_${t}_${x+1}_a`),C=i.boneIndexMap.get(`wingFinger_${t}_${x+1}_b`);s.push(co(o,a,(R,F)=>{const I=F<.5?new E().lerpVectors(m,y,F*2):new E().lerpVectors(y,b,(F-.5)*2),k=F<.5?new E().lerpVectors(m,A,F*2):new E().lerpVectors(A,T,(F-.5)*2),N=new E().lerpVectors(I,k,R),D=x===5?-.028:.042,O=new E().subVectors(m,N).normalize();N.addScaledVector(O,D*Math.sin(R*Math.PI)*Math.pow(F,2.2)),N.y+=Math.sin(R*Math.PI)*Math.sin(F*Math.PI)*.018;let H;if(F<.5){const $=F*2;H=Xe([r,S,P,0],[1-$,$*(1-R),$*R,0])}else{const $=(F-.5)*2;H=Xe([S,M,P,C],[(1-R)*(1-$),(1-R)*$,R*(1-$),R*$])}const Z=Math.sin(F*18-x*.65+Math.sin(R*Math.PI)*1.4),q=wo(.28,.94,Z)*wo(.14,.58,F)*.88;return{pos:N,skin:H,thinness:.62+.38*F,pinkStripe:q,iceBlue:(1-F)*.24+.06}}))}return s}function p2(i,t,e){const n=t==="L"?1:-1,s=[],o=e===0?10:6,a=e===0?8:6;return ld.forEach((r,l)=>{const c=`pelvicFin_${t}_${l+1}`,h=new E(n*r.rootX,r.rootY,r.rootZ),u=new E(n*r.tipX,r.tipY,r.tipZ);s.push(Qa(i,[h,u],[c],[.009,.0022],o,a,.35,.2))}),s}function f2(i,t,e){const n=t==="L"?1:-1,s=e===0?16:9,o=i.boneIndexMap.get(`pelvicFin_${t}_1`),a=i.boneIndexMap.get(`pelvicFin_${t}_2`),r=i.boneIndexMap.get(`pelvicFin_${t}_3`),l=new E(n*.16,.72,-.7),c=new E(n*.095,.52,-1.46);return co(s,s,(h,u)=>{const d=new E().lerpVectors(l,c,h),m=.29*Math.sin(Math.pow(h,.74)*Math.PI),v=d.clone().add(new E(n*m,-.025*m,-.08*Math.sin(h*Math.PI))),g=new E().lerpVectors(d,v,u),f=Math.max(0,1-h*2),p=Math.max(0,(h-.5)*2),w=Math.max(0,1-f-p),_=Xe([o,a,r,0],[f,w,p,0]);return{pos:g,skin:_,thinness:.52+.45*u,pinkStripe:u*.38,iceBlue:.26}})}function m2(i,t,e,n){const s=n===0?12:6,o=i.boneIndexMap.get("tail_7"),a=i.boneIndexMap.get("tail_8"),r=new E(e*.02,.12,-2.92),l=new E(e*.018,.116,-3.22);return co(s,s,(c,h)=>{const u=new E().lerpVectors(r,l,c),d=.115*Math.sin(Math.pow(c,.75)*Math.PI),m=u.clone().add(new E(e*d,.008*Math.sin(c*Math.PI),-.025*c)),v=new E().lerpVectors(u,m,h),g=Xe([o,a,0,0],[1-c,c,0,0]);return{pos:v,skin:g,thinness:.55+.4*h,pinkStripe:h*.35,iceBlue:.28}})}function g2(i,t,e,n){const s=[],o=n===0?10:6,a=n===0?8:6;return rd.forEach((r,l)=>{const c=`tailFin_${t}_${l+1}`,h=new E(e*r.rootX,r.rootY,r.rootZ),u=new E().lerpVectors(h,new E(e*r.tipX,r.tipY,r.tipZ),.92);s.push(Qa(i,[h,u],[c],[.0075,.0018],o,a,.34,.24))}),s}function v2(i,t,e,n){const s=n===0?28:n===1?16:10,o=n===0?16:n===1?10:6,a=i.boneIndexMap.get(`tailFinHinge_${t}`),r=i.boneIndexMap.get(`tailFin_${t}_1`),l=i.boneIndexMap.get(`tailFin_${t}_3`),c=i.boneIndexMap.get(`tailFin_${t}_5`),h=-3.22,u=-4.08;return co(s,o,(d,m)=>{const v=G.lerp(h,u,d),g=e*.016,f=.116,p=Math.sin(Math.pow(d,.6)*Math.PI),w=.455*p*(1+.1*Math.sin(d*Math.PI*2-.6)),_=.095*Math.sin(Math.min(1,d/.52)*Math.PI)*(d<.52?1:0),x=-.115*Math.sin(Math.max(0,(d-.5)/.5)*Math.PI),y=v+_+x,b=g+e*w,A=f+.012*p,T=Math.sin(d*Math.PI*5)*.0028*Math.sin(m*Math.PI)*p,S=new E(G.lerp(g,b,m),G.lerp(f,A,m)+T,G.lerp(v,y,m)),M=Math.max(0,1-d*2.2),P=Math.max(0,(d-.55)*2.2),C=Math.max(0,1-M-P),R=Xe([a,r,l,c],[.25,M*.75,C*.75,P*.75]);return{pos:S,skin:R,thinness:.54+.44*m,pinkStripe:wo(.32,.94,m)*.52,iceBlue:.34*(1-m*.35)}})}function x2(i,t){const e=t===0?84:t===1?48:28,n=t===0?10:6,s=["tail_8","tail_7","tail_6","tail_5","tail_4","tail_3","tail_2","tail_1","pelvis","spine_1","spine_2","chest"],o=s.map(w=>i.boneIndexMap.get(w)),a=s.map(w=>i.bindWorldPositions.get(w));new si([new E(0,.14,-3.02),new E(0,.23,-2.24),new E(0,.45,-1.5),new E(0,.82,-.78),new E(0,.94,-.32),new E(0,1.01,.18),new E(0,1.07,.6)]);const r=(e+1)*(n+1),l=new Float32Array(r*3),c=new Float32Array(r*3),h=new Float32Array(r*2),u=new Float32Array(r*4),d=new Uint16Array(r*4),m=new Float32Array(r*4);for(let w=0;w<=e;w++){const _=w/e,x=G.lerp(-3.02,.66,_),y=Zx(x),b=y.point,A=y.up,T=wo(0,.14,_)*wo(1,.82,_),S=(.012+.024*Math.sin(Math.pow(_,.78)*Math.PI))*T,M=.015*(.45+.55*T),P=_i(b,o,a,3.8);for(let C=0;C<=n;C++){const R=C/n,F=Math.sin(R*Math.PI),I=Math.cos(R*Math.PI)*M*(1-.55*F),k=-.016+(S+.016)*Math.pow(F,.9),N=b.clone().addScaledVector(A,k);N.x=I;const D=N.clone().addScaledVector(A,S*.35*F),O=w*(n+1)+C;l[O*3]=N.x,l[O*3+1]=N.y,l[O*3+2]=N.z,c[O*3]=D.x,c[O*3+1]=D.y,c[O*3+2]=D.z,h[O*2]=_*3,h[O*2+1]=R,u[O*4]=.08,u[O*4+1]=F*.72,u[O*4+2]=F*.28,u[O*4+3]=F*.88,d.set(P.indices,O*4),m.set(P.weights,O*4)}}const v=new Uint16Array(e*n*6);let g=0;for(let w=0;w<e;w++)for(let _=0;_<n;_++){const x=w*(n+1)+_,y=(w+1)*(n+1)+_,b=(w+1)*(n+1)+(_+1),A=w*(n+1)+(_+1);v[g++]=x,v[g++]=b,v[g++]=y,v[g++]=x,v[g++]=A,v[g++]=b}const f=new Zt;f.setAttribute("position",new Q(l,3)),f.setAttribute("uv",new Q(h,2)),f.setAttribute("uv1",new Q(h,2)),f.setAttribute("aAnatomyData",new Q(u,4)),f.setAttribute("skinIndex",new Ee(d,4)),f.setAttribute("skinWeight",new Kt(m,4)),f.setIndex(new Q(v,1));const p=new Q(c,3);return p.name="dorsalFlex",f.morphAttributes.position=[p],f.computeVertexNormals(),f}function _2(){const i=Dx(),t=Yx(),e=new xi;e.name="LightFury_HiddenWorld_Hybrid",e.add(i.rootBone),i.rootBone.updateMatrixWorld(!0),i.skeleton.calculateInverses();const n=[],s=[],o={},a={};for(const l of[0,1,2]){const c=new xi;c.name=`LightFury_LOD${l}`;const h=Kx(i,l),u=n2(i,l),d=h2(i,l),m=Ke([h,u.jawSkinGeometry,d.wingSparsSkinGeometry]),v=u.clawsGeometry,g=(R,F,I,k=!0,N=!0)=>{const D=new Lu(F,I);return D.name=`${R}_LOD${l}`,D.castShadow=k,D.receiveShadow=N,D.frustumCulled=!1,D.bind(i.skeleton,new re),D},f=g("LightFuryBodyAndHeadSkin",m,t.skinMaterial),p=g("LightFuryIridescentWingsAndHeartTail",d.wingMembraneGeometry,t.wingMembraneMaterial),w=g("LightFuryContinuousDorsalSail",d.dorsalSpinesGeometry,t.skinMaterial);n.push(w);const _=g("LightFuryOralGums",u.oralGumsGeometry,t.oralGumMaterial,!1,!0),x=g("LightFuryRetractableTeeth",u.teethGeometry,t.teethMaterial,!0,!0),y=g("LightFuryArticulatedTongue",u.tongueGeometry,t.tongueMaterial,!1,!0),b=g("LightFurySkyBlueIrises",u.irisGeometry,t.eyeMaterials.irisMaterial,!1,!1),A=g("LightFuryRefractiveCorneas",u.corneaGeometry,t.eyeMaterials.corneaMaterial,!1,!1),T=g("LightFurySlatePearlClaws",v,t.clawMaterial,!0,!0);for(const R of[f,w,T,_,x,y,b])R.renderOrder=11;A.renderOrder=12,p.renderOrder=13;const S=[f,p,w,_,x,y,b,A,T],M=[["LFDepth_BodySkin",m,t.hullDepthMaterial,!1],["LFDepth_WingMembrane",d.wingMembraneGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_DorsalSail",d.dorsalSpinesGeometry,t.hullDepthMaterial,!0],["LFDepth_Gums",u.oralGumsGeometry,t.doubleSidedHullDepthMaterial,!1],["LFDepth_Teeth",u.teethGeometry,t.hullDepthMaterial,!1],["LFDepth_Tongue",u.tongueGeometry,t.hullDepthMaterial,!1],["LFDepth_Irises",u.irisGeometry,t.hullDepthMaterial,!1],["LFDepth_Claws",v,t.hullDepthMaterial,!1]];for(const[R,F,I,k]of M){const N=g(R,F,I,!1,!1);N.renderOrder=10,N.visible=!1,N.userData.excludeFromExport=!0,c.add(N),s.push(N),k&&n.push(N)}let P=0,C=0;for(const R of S){c.add(R);const F=R.geometry.getIndex();P+=F?F.count/3:R.geometry.getAttribute("position").count/3,C+=R.geometry.getAttribute("position").count}c.visible=l===0,e.add(c),o[l]=c,a[l]={lod:l,triangles:Math.round(P),vertices:C,subMeshCount:S.length}}const r={rootGroup:e,rig:i,materials:t,lodGroups:o,dorsalSailMeshes:n,hullDepthMeshes:s,lodStats:a,activeLOD:0,autoLOD:!1,setActiveLOD(l){r.activeLOD=l;for(const c of[0,1,2])o[c].visible=c===l},updateAutoLOD(l){if(!r.autoLOD)return r.activeLOD;const c=l<9.5?0:l<20?1:2;return c!==r.activeLOD&&r.setActiveLOD(c),r.activeLOD}};return r}function Uo(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function Si(i){const t=id.find(e=>e.id===i);return{...Je,...t?t.patch:{}}}function ui(i){const t=hd.find(e=>e.id===i);return{...je,...t?t.patch:{}}}function qh(i,t,e,n){const s=Object.keys(t);for(let o=0;o<s.length;o++){const a=s[o],r=t[a],l=e[a];typeof r=="number"&&typeof l=="number"?i[a]=r+(l-r)*n:typeof l=="boolean"&&(i[a]=l)}}function M2(i,t,e,n,s,o,a,r,l){l.followCamera=!1,l.loop=!1;let c=Math.floor(Date.now()%864e5*1.37)+17389;const h=()=>(c=c*1664525+1013904223>>>0,c/4294967296),u=(D,O)=>D+(O-D)*h();let d=0,m=!1;const v=()=>{const D=d===0?.55:m?.25:.8,O=h()<D;m=O,d++;const H=O?{presetId:"stormy-squall",holdSec:u(18,23),fadeSec:12.5,sunDriftStartDeg:0,sunDriftEndDeg:1.5,ocean:{waveAmplitude:1.36,waveSpeed:1.44,seaChoppiness:.84}}:{presetId:"misty-overcast",holdSec:u(18,23),fadeSec:12,sunDriftStartDeg:-1.5,sunDriftEndDeg:2,ocean:{waveAmplitude:.82,waveSpeed:1.08,seaChoppiness:.58}};return[{presetId:"golden-hour",holdSec:u(21,25),fadeSec:12,sunDriftStartDeg:1.4,sunDriftEndDeg:-1.6,ocean:{...no}},{presetId:"dawn-dusk",holdSec:u(17,21),fadeSec:12.5,sunDriftStartDeg:1.2,sunDriftEndDeg:-1.4,ocean:{waveAmplitude:.38,waveSpeed:.8,seaChoppiness:.3}},{presetId:"starlit-night",holdSec:u(22,26),fadeSec:13,sunDriftStartDeg:-.8,sunDriftEndDeg:1.2,ocean:{waveAmplitude:.28,waveSpeed:.68,seaChoppiness:.22}},H,{presetId:"clear-day",holdSec:u(21,25),fadeSec:12.5,sunDriftStartDeg:-5,sunDriftEndDeg:-12,ocean:{waveAmplitude:.62,waveSpeed:.94,seaChoppiness:.44}}]};let g=v(),f=v(),p=0,w=0,_=0,x=0,y=0;const b={...Je},A={...je},T={...Je},S={...je},M={...Je},P={...je};let C=0;const R=()=>{if(C++,C===1)return"duet";const D=h();return C%2===1?D<.72?"duet":D<.86?"light-fury":"toothless":D<.42?"light-fury":D<.82?"toothless":"duet"},F=D=>{const O=[];if(O.push({name:"Noble Cliff Watch",durationSec:D?u(5.5,7):u(4.2,5.6),toothless:Si("hero-perch"),lightFury:ui("serene-mate")}),x>.35){const H=h()<.55?"lightning-storm":"alpha-roar";O.push({name:"Storm Alpha Display",durationSec:u(6.2,8),toothless:Si(H),lightFury:ui(h()<.5?"strike-hiss":"hidden-world-biolum")})}else if(_>.35)O.push({name:"Hidden World Bioluminescence",durationSec:u(6.8,8.6),toothless:{...Si("curious-tilt"),alphaGlow:.88,biolumGlow:.96,wingUnfurl:.68},lightFury:ui("hidden-world-biolum")}),h()<.75&&O.push({name:"Optical Mirror-Cloak Shimmer",durationSec:u(5.4,7),toothless:{...Si("gummy-smile"),alphaGlow:.62,biolumGlow:.88},lightFury:ui("mirror-cloak")});else{const H=h();H<.36?(O.push({name:"Courtship Wing-Cape & Coy Peek",durationSec:u(6,7.8),toothless:Si("courtship-cape"),lightFury:ui("coy-wing-veil")}),O.push({name:"Gummy Grin & Happy Purr",durationSec:u(5.5,7.2),toothless:Si("gummy-smile"),lightFury:ui("happy-purr")})):H<.72?(O.push({name:"Curious Feline Tilts",durationSec:u(5.6,7.2),toothless:Si("curious-tilt"),lightFury:ui("curious-cat")}),O.push({name:"Gummy Smile & Coy Wing Veil",durationSec:u(5.8,7.4),toothless:Si("gummy-smile"),lightFury:h()<.55?ui("happy-purr"):ui("coy-wing-veil")})):(O.push({name:"Light Fury Shimmer & Noble Gaze",durationSec:u(5.8,7.4),toothless:Si("curious-tilt"),lightFury:ui(y>.25?"mirror-cloak":"happy-purr")}),O.push({name:"Courtship Wing Display",durationSec:u(5.6,7.2),toothless:Si("courtship-cape"),lightFury:ui("curious-cat")}))}return O.push({name:"Pre-Flight Horizon Focus",durationSec:u(3.4,4.6),toothless:{...Je,forelegStance:-.18,earPerk:.92,wingUnfurl:.58},lightFury:{...je,forelegStance:-.16,earPerk:.9,wingUnfurl:.52}}),O};let I={kind:"perched-sequence",vignettes:F(!0),vIdx:0,vTimer:0,blendDur:2.2};const k=new E,N=new E;return{update(D,O){l.followCamera=!1;const H=g[p];p+1<g.length?g[p+1]:f[0];const Z=H.holdSec+H.fadeSec;w+=D,w>=Z&&(w-=Z,p++,p>=g.length&&(g=f,f=v(),p=0));const q=g[p],$=p+1<g.length?g[p+1]:f[0],X=q.holdSec+q.fadeSec,V=G.clamp(w/Math.max(.1,X),0,1),et=w<=q.holdSec?0:(w-q.holdSec)/Math.max(.1,q.fadeSec),it=Uo(et),J=G.lerp(q.sunDriftStartDeg,q.sunDriftEndDeg,Uo(V))*(1-it)+$.sunDriftStartDeg*it,st=Math.sin(O*.025)*4.5;if(e.blendPresets(q.presetId,$.presetId,it,i,t,J,st),n.setOceanParams({waveAmplitude:G.lerp(q.ocean.waveAmplitude,$.ocean.waveAmplitude,it),waveSpeed:G.lerp(q.ocean.waveSpeed,$.ocean.waveSpeed,it),seaChoppiness:G.lerp(q.ocean.seaChoppiness,$.ocean.seaChoppiness,it)}),_=e.sharedUniforms.uNightFactor.value,x=(q.presetId==="stormy-squall"?1-it:0)+($.presetId==="stormy-squall"?it:0),y=(q.presetId==="dawn-dusk"?1-it:0)+($.presetId==="dawn-dusk"?it:0),I.kind==="perched-sequence"){const Y=I.vignettes[I.vIdx];I.vTimer+=D;const j=Uo(I.vTimer/Math.max(.25,I.blendDur));qh(M,T,Y.toothless,j),qh(P,S,Y.lightFury,j);const ut=Math.sin(O*.62),tt=Math.cos(O*.47+1.1),z=Uo((_-.15)/.65)*.88+y*.24,_t=Uo(x)*.72;M.headYaw=G.clamp(M.headYaw+ut*.08,-1,1),M.tailYaw=G.clamp(M.tailYaw+tt*.1,-1,1),M.biolumGlow=Math.max(M.biolumGlow,z),M.alphaGlow=Math.max(M.alphaGlow,z*.65,_t),P.headYaw=G.clamp(P.headYaw-ut*.08,-1,1),P.tailYaw=G.clamp(P.tailYaw-tt*.11,-1,1),P.biolumGlow=Math.max(P.biolumGlow,z*.96),P.radiantGlow=Math.max(P.radiantGlow,.34+z*.34),o.setState(M),r.setState(P),I.vTimer>=Y.durationSec&&(Object.assign(T,M),Object.assign(S,P),I.vIdx++,I.vTimer=0,I.blendDur=u(2.1,2.9),I.vIdx>=I.vignettes.length&&(I={kind:"flight",mode:R(),started:!1}))}else if(!I.started)I.started=!0,l.setSubjectMode(I.mode),l.followCamera=!1,l.loop=!1,l.startFromBeginning();else if(!l.isPlaying)Object.assign(T,b),Object.assign(S,A),I={kind:"perched-sequence",vignettes:F(!1),vIdx:0,vTimer:0,blendDur:2.3};else if(I.mode!=="duet"){const Y=s.rig.boneMap.get("chest"),j=a.rig.boneMap.get("chest");if(Y&&j)if(I.mode==="light-fury"){j.getWorldPosition(k),Y.getWorldPosition(N);const ut=k.x-N.x,tt=k.y-N.y,z=k.z-N.z,_t=Math.max(.5,Math.hypot(ut,z)),xt=G.clamp(Math.atan2(ut,z)*.72,-.85,.85),Ct=G.clamp(Math.atan2(tt,_t)*.85,-.45,.72);o.setState({...Je,neckYaw:xt*.55,headYaw:xt*.85,headPitch:Ct,eyeYaw:G.clamp(xt*.5,-.6,.6),earPerk:.94,biolumGlow:Math.max(0,_*.85),alphaGlow:Math.max(.08,_*.55,x*.65)})}else{Y.getWorldPosition(k),j.getWorldPosition(N);const ut=k.x-N.x,tt=k.y-N.y,z=k.z-N.z,_t=Math.max(.5,Math.hypot(ut,z)),xt=G.clamp(Math.atan2(ut,z)*.72,-.85,.85),Ct=G.clamp(Math.atan2(tt,_t)*.85,-.45,.72);r.setState({...je,neckYaw:xt*.55,headYaw:xt*.85,headPitch:Ct,headRoll:.18,eyeYaw:G.clamp(xt*.5,-.6,.6),earPerk:.92,biolumGlow:Math.max(0,_*.9)})}}}}}function Zh(){return new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})})}function w2(){const i=document.getElementById("loading-curtain"),t=document.getElementById("lc-progress-fill"),e=document.getElementById("lc-stage-text"),n=document.getElementById("lc-pct-text"),s=Array.from(document.querySelectorAll("#lc-stage-pills .lc-stage-pill"));let o=4,a=2,r=0;const l=d=>{const m=d>=100?4:d>=84?3:d>=60?2:d>=36?1:0;s.forEach((v,g)=>{v.classList.toggle("is-done",g<m),v.classList.toggle("is-active",g===m)})},c=()=>{const d=o-a;Math.abs(d)>.15?a+=d*.24:a=o,t&&(t.style.width=`${a.toFixed(1)}%`),n&&(n.textContent=`${String(Math.round(a)).padStart(2,"0")}%`),l(a),(a<99.9||o<100)&&(r=requestAnimationFrame(c))};r=requestAnimationFrame(c);const h=d=>{!d||!e||e.textContent===d||(e.classList.add("is-switching"),window.setTimeout(()=>{e.textContent=d,e.classList.remove("is-switching")},95))},u=(d,m)=>{o=Math.max(o,Math.min(100,d)),t&&(t.style.width=`${o.toFixed(1)}%`),l(o),h(m)};return u(6,"Preparing WebGL2 twilight canvas…"),{async advanceTo(d,m){u(d,m),await Zh()},async completeAndDissolve(d){o=100,a=100,t&&(t.style.width="100%"),n&&(n.textContent="100%"),l(100),h("The horizon is ready."),await Zh(),await new Promise(m=>setTimeout(m,320)),i&&(i.classList.add("is-dissolving"),setTimeout(()=>{r&&cancelAnimationFrame(r),window.__stopLoadingAmbient?.(),i.remove()},1280)),d.classList.remove("hud-entering")}}}const jh={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Ja{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new L2(t)}),this.register(function(t){return new I2(t)}),this.register(function(t){return new U2(t)}),this.register(function(t){return new k2(t)}),this.register(function(t){return new z2(t)}),this.register(function(t){return new B2(t)}),this.register(function(t){return new F2(t)}),this.register(function(t){return new D2(t)}),this.register(function(t){return new N2(t)}),this.register(function(t){return new O2(t)}),this.register(function(t){return new H2(t)}),this.register(function(t){return new W2(t)}),this.register(function(t){return new V2(t)}),this.register(function(t){return new G2(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,s){const o=new R2,a=[];for(let r=0,l=this.pluginCallbacks.length;r<l;r++)a.push(this.pluginCallbacks[r](o));o.setPlugins(a),o.setTextureUtils(this.textureUtils),o.writeAsync(t,e,s).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(s,o){n.parse(t,s,o,e)})}}const Re={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Qr="KHR_mesh_quantization",qn={};qn[Bn]=Re.NEAREST;qn[du]=Re.NEAREST_MIPMAP_NEAREST;qn[ko]=Re.NEAREST_MIPMAP_LINEAR;qn[gi]=Re.LINEAR;qn[Da]=Re.LINEAR_MIPMAP_NEAREST;qn[is]=Re.LINEAR_MIPMAP_LINEAR;qn[ns]=Re.CLAMP_TO_EDGE;qn[Ci]=Re.REPEAT;qn[Wa]=Re.MIRRORED_REPEAT;const Kh={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},y2=new Bt,Qh=12,b2=1179937895,S2=2,Jh=8,A2=1313821514,T2=5130562;function Oo(i,t){return i.length===t.length&&i.every(function(e,n){return e===t[n]})}function E2(i){return new TextEncoder().encode(i).buffer}function C2(i){return Oo(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function P2(i,t,e){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let o=0;o<i.itemSize;o++){let a;i.itemSize>4?a=i.array[s*i.itemSize+o]:(o===0?a=i.getX(s):o===1?a=i.getY(s):o===2?a=i.getZ(s):o===3&&(a=i.getW(s)),i.normalized===!0&&(a=G.normalize(a,i.array))),n.min[o]=Math.min(n.min[o],a),n.max[o]=Math.max(n.max[o],a)}return n}function md(i){return Math.ceil(i/4)*4}function Jr(i,t=0){const e=md(i.byteLength);if(e!==i.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(i)),t!==0)for(let s=i.byteLength;s<e;s++)n[s]=t;return n.buffer}return i}function tu(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function eu(i,t){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),i.convertToBlob({type:t,quality:e})}class R2{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+tr}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const s=this,o=s.buffers,a=s.json;n=s.options;const r=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(o,{type:"application/octet-stream"}),h=Object.keys(r),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const m=Jr(d.result),v=new DataView(new ArrayBuffer(Jh));v.setUint32(0,m.byteLength,!0),v.setUint32(4,T2,!0);const g=Jr(E2(JSON.stringify(a)),32),f=new DataView(new ArrayBuffer(Jh));f.setUint32(0,g.byteLength,!0),f.setUint32(4,A2,!0);const p=new ArrayBuffer(Qh),w=new DataView(p);w.setUint32(0,b2,!0),w.setUint32(4,S2,!0);const _=Qh+f.byteLength+g.byteLength+v.byteLength+m.byteLength;w.setUint32(8,_,!0);const x=new Blob([p,f,g,v,m],{type:"application/octet-stream"}),y=new FileReader;y.readAsArrayBuffer(x),y.onloadend=function(){e(y.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const m=d.result;a.buffers[0].uri=m,e(a)}}else e(a)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const o=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&o.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const a in o.gltfExtensions)e.extensions[a]=o.gltfExtensions[a],s[a]=!0;delete o.gltfExtensions}Object.keys(o).length>0&&(e.extras=o)}catch(o){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+o.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new E;for(let s=0,o=t.count;s<o;s++)if(Math.abs(n.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),s=new E;for(let o=0,a=n.count;o<a;o++)s.fromBufferAttribute(n,o),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(o,s.x,s.y,s.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(s.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(m){return m.colorSpace===_n?function(g){return g<.04045?g*.0773993808:Math.pow(g*.9478672986+.0521327014,2.4)}:function(g){return g}}t instanceof Dr&&(t=await this.decompressTextureAsync(t)),e instanceof Dr&&(e=await this.decompressTextureAsync(e));const s=t?t.image:null,o=e?e.image:null,a=Math.max(s?s.width:0,o?o.width:0),r=Math.max(s?s.height:0,o?o.height:0),l=tu();l.width=a,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,r);const h=c.getImageData(0,0,a,r);if(s){c.drawImage(s,0,0,a,r);const m=n(t),v=c.getImageData(0,0,a,r).data;for(let g=2;g<v.length;g+=4)h.data[g]=m(v[g]/256)*256}if(o){c.drawImage(o,0,0,a,r);const m=n(e),v=c.getImageData(0,0,a,r).data;for(let g=1;g<v.length;g+=4)h.data[g]=m(v[g]/256)*256}c.putImageData(h,0,0);const d=(t||e).clone();return d.source=new nr(l),d.colorSpace=ni,d.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,s,o){const a=this.json;a.bufferViews||(a.bufferViews=[]);let r;switch(e){case Re.BYTE:case Re.UNSIGNED_BYTE:r=1;break;case Re.SHORT:case Re.UNSIGNED_SHORT:r=2;break;default:r=4}let l=t.itemSize*r;o===Re.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=md(s*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let v=n;v<n+s;v++){for(let g=0;g<t.itemSize;g++){let f;t.itemSize>4?f=t.array[v*t.itemSize+g]:(g===0?f=t.getX(v):g===1?f=t.getY(v):g===2?f=t.getZ(v):g===3&&(f=t.getW(v)),t.normalized===!0&&(f=G.normalize(f,t.array))),e===Re.FLOAT?h.setFloat32(u,f,!0):e===Re.INT?h.setInt32(u,f,!0):e===Re.UNSIGNED_INT?h.setUint32(u,f,!0):e===Re.SHORT?h.setInt16(u,f,!0):e===Re.UNSIGNED_SHORT?h.setUint16(u,f,!0):e===Re.BYTE?h.setInt8(u,f):e===Re.UNSIGNED_BYTE&&h.setUint8(u,f),u+=r}u%l!==0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return o!==void 0&&(d.target=o),o===Re.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const o=new FileReader;o.readAsArrayBuffer(t),o.onloadend=function(){const a=Jr(o.result),r={buffer:e.processBuffer(a),byteOffset:e.byteOffset,byteLength:a.byteLength};e.byteOffset+=a.byteLength,s(n.bufferViews.push(r)-1)}})}processAccessor(t,e,n,s){const o=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let r;if(t.array.constructor===Float32Array)r=Re.FLOAT;else if(t.array.constructor===Int32Array)r=Re.INT;else if(t.array.constructor===Uint32Array)r=Re.UNSIGNED_INT;else if(t.array.constructor===Int16Array)r=Re.SHORT;else if(t.array.constructor===Uint16Array)r=Re.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)r=Re.BYTE;else if(t.array.constructor===Uint8Array)r=Re.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;const l=P2(t,n,s);let c;e!==void 0&&(c=t===e.index?Re.ELEMENT_ARRAY_BUFFER:Re.ARRAY_BUFFER);const h=this.processBufferView(t,r,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:r,count:s,max:l.max,min:l.min,type:a[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),o.accessors||(o.accessors=[]),o.accessors.push(u)-1}processImage(t,e,n,s="image/png"){if(t!==null){const o=this,a=o.cache,r=o.json,l=o.options,c=o.pending;a.images.has(t)||a.images.set(t,{});const h=a.images.get(t),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];r.images||(r.images=[]);const d={mimeType:s},m=tu();m.width=Math.min(t.width,l.maxTextureSize),m.height=Math.min(t.height,l.maxTextureSize);const v=m.getContext("2d",{willReadFrequently:!0});if(n===!0&&(v.translate(0,m.height),v.scale(1,-1)),t.data!==void 0){e!==$n&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const f=new Uint8ClampedArray(t.height*t.width*4);for(let p=0;p<f.length;p+=4)f[p+0]=t.data[p+0],f[p+1]=t.data[p+1],f[p+2]=t.data[p+2],f[p+3]=t.data[p+3];v.putImageData(new ImageData(f,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)v.drawImage(t,0,0,m.width,m.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(eu(m,s).then(f=>o.processBufferViewImage(f)).then(f=>{d.bufferView=f})):m.toDataURL!==void 0?d.uri=m.toDataURL(s):c.push(eu(m,s).then(f=>new FileReader().readAsDataURL(f)).then(f=>{d.uri=f}));const g=r.images.push(d)-1;return h[u]=g,g}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:qn[t.magFilter],minFilter:qn[t.minFilter],wrapS:qn[t.wrapS],wrapT:qn[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,s=this.cache,o=this.json;if(s.textures.has(t))return s.textures.get(t);o.textures||(o.textures=[]),t instanceof Dr&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let a=t.userData.mimeType;a==="image/webp"&&(a="image/png");const r={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,a)};t.name&&(r.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,r)});const l=o.textures.push(r)-1;return s.textures.set(t,l),l}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const o=t.color.toArray().concat([t.opacity]);if(Oo(o,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=o),t.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=t.metalness,s.pbrMetallicRoughness.roughnessFactor=t.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const r=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(r),texCoord:r.channel};this.applyTextureTransform(l,r),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const r={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(r,t.map),s.pbrMetallicRoughness.baseColorTexture=r}if(t.emissive){const r=t.emissive;if(Math.max(r.r,r.g,r.b)>0&&(s.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const c={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(c,t.emissiveMap),s.emissiveTexture=c}}if(t.normalMap){const r={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(r.scale=t.normalScale.x),this.applyTextureTransform(r,t.normalMap),s.normalTexture=r}if(t.aoMap){const r={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(r.strength=t.aoMapIntensity),this.applyTextureTransform(r,t.aoMap),s.occlusionTexture=r}t.transparent?s.alphaMode="BLEND":t.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=t.alphaTest),t.side===on&&(s.doubleSided=!0),t.name!==""&&(s.name=t.name),this.serializeUserData(t,s),await this._invokeAllAsync(async function(r){r.writeMaterialAsync&&await r.writeMaterialAsync(t,s)});const a=n.materials.push(s)-1;return e.materials.set(t,a),a}async processMeshAsync(t){const e=this.cache,n=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let x=0,y=t.material.length;x<y;x++)s.push(t.material[x].uuid);else s.push(t.material.uuid);const o=s.join(":");if(e.meshes.has(o))return e.meshes.get(o);const a=t.geometry;let r;t.isLineSegments?r=Re.LINES:t.isLineLoop?r=Re.LINE_LOOP:t.isLine?r=Re.LINE_STRIP:t.isPoints?r=Re.POINTS:r=t.material.wireframe?Re.LINES:Re.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},m=a.getAttribute("normal");m!==void 0&&!this.isNormalizedNormalAttribute(m)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(m)));let v=null;for(let x in a.attributes){if(x.slice(0,5)==="morph")continue;const y=a.attributes[x];if(x=d[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),e.attributes.has(this.getUID(y))){c[x]=e.attributes.get(this.getUID(y));continue}v=null;const A=y.array;x==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),v=new Q(new Uint16Array(A),y.itemSize,y.normalized)):(A instanceof Uint32Array||A instanceof Int32Array)&&!x.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${x}" converted to type FLOAT.`),v=Ja.Utils.toFloat32BufferAttribute(y));const T=this.processAccessor(v||y,a);T!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,y),c[x]=T,e.attributes.set(this.getUID(y),T))}if(m!==void 0&&a.setAttribute("normal",m),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const x=[],y=[],b={};if(t.morphTargetDictionary!==void 0)for(const A in t.morphTargetDictionary)b[t.morphTargetDictionary[A]]=A;for(let A=0;A<t.morphTargetInfluences.length;++A){const T={};let S=!1;for(const M in a.morphAttributes){if(M!=="position"&&M!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}const P=a.morphAttributes[M][A],C=M.toUpperCase(),R=a.attributes[M];if(e.attributes.has(this.getUID(P,!0))){T[C]=e.attributes.get(this.getUID(P,!0));continue}const F=P.clone();if(!a.morphTargetsRelative)for(let I=0,k=P.count;I<k;I++)for(let N=0;N<P.itemSize;N++)N===0&&F.setX(I,P.getX(I)-R.getX(I)),N===1&&F.setY(I,P.getY(I)-R.getY(I)),N===2&&F.setZ(I,P.getZ(I)-R.getZ(I)),N===3&&F.setW(I,P.getW(I)-R.getW(I));T[C]=this.processAccessor(F,a),e.attributes.set(this.getUID(R,!0),T[C])}u.push(T),x.push(t.morphTargetInfluences[A]),t.morphTargetDictionary!==void 0&&y.push(b[A])}l.weights=x,y.length>0&&(l.extras={},l.extras.targetNames=y)}const g=Array.isArray(t.material);if(g&&a.groups.length===0)return null;let f=!1;if(g&&a.index===null){const x=[];for(let y=0,b=a.attributes.position.count;y<b;y++)x[y]=y;a.setIndex(x),f=!0}const p=g?t.material:[t.material],w=g?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,y=w.length;x<y;x++){const b={mode:r,attributes:c};if(this.serializeUserData(a,b),u.length>0&&(b.targets=u),a.index!==null){let T=this.getUID(a.index);(w[x].start!==void 0||w[x].count!==void 0)&&(T+=":"+w[x].start+":"+w[x].count),e.attributes.has(T)?b.indices=e.attributes.get(T):(b.indices=this.processAccessor(a.index,a,w[x].start,w[x].count),e.attributes.set(T,b.indices)),b.indices===null&&delete b.indices}const A=await this.processMaterialAsync(p[w[x].materialIndex]);A!==null&&(b.material=A),h.push(b)}f===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(x){x.writeMesh&&x.writeMesh(t,l)});const _=n.meshes.push(l)-1;return e.meshes.set(o,_),_}detectMeshQuantization(t,e){if(this.extensionsUsed[Qr])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const s=t.split("_",1)[0];jh[s]&&jh[s].includes(n)&&(this.extensionsUsed[Qr]=!0,this.extensionsRequired[Qr]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:G.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),t=Ja.Utils.mergeMorphTargetTracks(t.clone(),e);const o=t.tracks,a=[],r=[];for(let l=0;l<o.length;++l){const c=o[l],h=Fe.parseTrackName(c.name);let u=Fe.findNode(e,h.nodeName);const d=Kh[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const m=1;let v=c.values.length/c.times.length;d===Kh.morphTargetInfluences&&(v/=u.morphTargetInfluences.length);let g;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",v/=3):c.getInterpolation()===Hd?g="STEP":g="LINEAR",r.push({input:this.processAccessor(new Q(c.times,m)),output:this.processAccessor(new Q(c.values,v)),interpolation:g}),a.push({sampler:r.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:r,channels:a}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,s=e.nodes[n.get(t)],o=t.skeleton;if(o===void 0)return null;const a=t.skeleton.bones[0];if(a===void 0)return null;const r=[],l=new Float32Array(o.bones.length*16),c=new re;for(let u=0;u<o.bones.length;++u)r.push(n.get(o.bones[u])),c.copy(o.boneInverses[u]),c.multiply(t.bindMatrix).toArray(l,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new Q(l,16)),joints:r,skeleton:n.get(a)}),s.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,s=this.nodeMap;e.nodes||(e.nodes=[]);const o={};if(n.trs){const r=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();Oo(r,[0,0,0,1])||(o.rotation=r),Oo(l,[0,0,0])||(o.translation=l),Oo(c,[1,1,1])||(o.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),C2(t.matrix)===!1&&(o.matrix=t.matrix.elements);if(t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o),t.isMesh||t.isLine||t.isPoints){const r=await this.processMeshAsync(t);r!==null&&(o.mesh=r)}else t.isCamera&&(o.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const r=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&r.push(u)}}r.length>0&&(o.children=r)}await this._invokeAllAsync(function(r){r.writeNode&&r.writeNode(t,o)});const a=e.nodes.push(o)-1;return s.set(t,a),a}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);const o=[];for(let a=0,r=t.children.length;a<r;a++){const l=t.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&o.push(c)}}o.length>0&&(s.nodes=o),this.serializeUserData(t,s)}async processObjectsAsync(t){const e=new Ya;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});const n=[];for(let s=0;s<t.length;s++)t[s]instanceof Ya?await this.processSceneAsync(t[s]):n.push(t[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class L2{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,s=n.json,o=n.extensionsUsed,a={};t.name&&(a.name=t.name),a.color=t.color.toArray(),a.intensity=t.intensity,t.isDirectionalLight?a.type="directional":t.isPointLight?(a.type="point",t.distance>0&&(a.range=t.distance)):t.isSpotLight&&(a.type="spot",t.distance>0&&(a.range=t.distance),a.spot={},a.spot.innerConeAngle=(1-t.penumbra)*t.angle,a.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),o[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},o[this.name]=!0);const r=s.extensions[this.name].lights;r.push(a),e.extensions=e.extensions||{},e.extensions[this.name]={light:r.length-1}}}class I2{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class F2{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.clearcoatFactor=t.clearcoat,t.clearcoatMap){const a={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(a,t.clearcoatMap),o.clearcoatTexture=a}if(o.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,t.clearcoatRoughnessMap),o.clearcoatRoughnessTexture=a}if(t.clearcoatNormalMap){const a={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(a.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(a,t.clearcoatNormalMap),o.clearcoatNormalTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class D2{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const s=this.writer.extensionsUsed,o={};o.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class N2{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.iridescenceFactor=t.iridescence,t.iridescenceMap){const a={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(a,t.iridescenceMap),o.iridescenceTexture=a}if(o.iridescenceIor=t.iridescenceIOR,o.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const a={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(a,t.iridescenceThicknessMap),o.iridescenceThicknessTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class U2{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.transmissionFactor=t.transmission,t.transmissionMap){const a={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(a,t.transmissionMap),o.transmissionTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class k2{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,o={};if(o.thicknessFactor=t.thickness,t.thicknessMap){const a={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(a,t.thicknessMap),o.thicknessTexture=a}t.attenuationDistance!==1/0&&(o.attenuationDistance=t.attenuationDistance),o.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class z2{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const s=this.writer.extensionsUsed,o={};o.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class B2{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(y2)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.specularIntensityMap){const a={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(a,t.specularIntensityMap),o.specularTexture=a}if(t.specularColorMap){const a={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(a,t.specularColorMap),o.specularColorTexture=a}o.specularFactor=t.specularIntensity,o.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class O2{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.sheenRoughnessMap){const a={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(a,t.sheenRoughnessMap),o.sheenRoughnessTexture=a}if(t.sheenColorMap){const a={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(a,t.sheenColorMap),o.sheenColorTexture=a}o.sheenRoughnessFactor=t.sheenRoughness,o.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class H2{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.anisotropyMap){const a={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(a,t.anisotropyMap),o.anisotropyTexture=a}o.anisotropyStrength=t.anisotropy,o.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class W2{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,o={};o.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class V2{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,s=n.extensionsUsed,o={};if(t.bumpMap){const a={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(a,t.bumpMap),o.bumpTexture=a}o.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=o,s[this.name]=!0}}class G2{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,s=t,o=new Float32Array(s.count*3),a=new Float32Array(s.count*4),r=new Float32Array(s.count*3),l=new re,c=new E,h=new rn,u=new E;for(let m=0;m<s.count;m++)s.getMatrixAt(m,l),l.decompose(c,h,u),c.toArray(o,m*3),h.toArray(a,m*4),u.toArray(r,m*3);const d={TRANSLATION:n.processAccessor(new Q(o,3)),ROTATION:n.processAccessor(new Q(a,4)),SCALE:n.processAccessor(new Q(r,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Ja.Utils={insertKeyframe:function(i,t){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),o=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n));let r;if(i.times.length===0){s[0]=t;for(let l=0;l<n;l++)o[l]=0;r=0}else if(t<i.times[0]){if(Math.abs(i.times[0]-t)<.001)return 0;s[0]=t,s.set(i.times,1),o.set(a.evaluate(t),0),o.set(i.values,n),r=0}else if(t>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-t)<.001)return i.times.length-1;s[s.length-1]=t,s.set(i.times,0),o.set(i.values,0),o.set(a.evaluate(t),i.values.length),r=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-t)<.001)return l;if(i.times[l]<t&&i.times[l+1]>t){s.set(i.times.slice(0,l+1),0),s[l+1]=t,s.set(i.times.slice(l+1),l+2),o.set(i.values.slice(0,(l+1)*n),0),o.set(a.evaluate(t),(l+1)*n),o.set(i.values.slice((l+1)*n),(l+2)*n),r=l+1;break}}return i.times=s,i.values=o,r},mergeMorphTargetTracks:function(i,t){const e=[],n={},s=i.tracks;for(let o=0;o<s.length;++o){let a=s[o];const r=Fe.parseTrackName(a.name),l=Fe.findNode(t,r.nodeName);if(r.propertyName!=="morphTargetInfluences"||r.propertyIndex===void 0){e.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Wd)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[r.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+r.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const m=new u.ValueBufferType(c*u.times.length);for(let v=0;v<u.times.length;v++)m[v*c+h]=u.values[v];u.name=(r.nodeName||"")+".morphTargetInfluences",u.values=m,n[l.uuid]=u,e.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let m=0;m<u.times.length;m++)u.values[m*c+h]=d.evaluate(u.times[m]);for(let m=0;m<a.times.length;m++){const v=this.insertKeyframe(u,a.times[m]);u.values[v*c+h]=a.values[m]}}return i.tracks=e,i},toFloat32BufferAttribute:function(i){const t=new Q(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let e=0,n=i.count;e<n;e++)for(let s=0;s<i.itemSize;s++)t.setComponent(e,s,i.getComponent(e,s));return t}};async function X2(i,t){const e=new Ja;i.updateMatrixWorld(!0);const n=[];i.traverse(l=>{l.userData?.excludeFromExport&&l.visible&&(l.visible=!1,n.push(l))});let s;try{s=await new Promise((l,c)=>{e.parse(i,h=>{h instanceof ArrayBuffer?l(h):c(new Error("Expected binary ArrayBuffer from GLTFExporter"))},h=>c(h),{binary:!0,onlyVisible:!0,maxTextureSize:1024})})}finally{for(const l of n)l.visible=!0}const o=new Blob([s],{type:"model/gltf-binary"}),a=URL.createObjectURL(o),r=document.createElement("a");return r.href=a,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(a),5e3),{filename:t,sizeMB:s.byteLength/(1024*1024)}}async function gd(i,t,e=i.activeLOD){const n=i.activeLOD,s=i.autoLOD;i.autoLOD=!1,i.setActiveLOD(e);try{return await X2(i.rootGroup,`${t}-lod${e}.glb`)}finally{i.setActiveLOD(n),i.autoLOD=s}}async function Y2(i,t=i.activeLOD){return gd(i,"toothless-hidden-world",t)}async function $2(i,t=i.activeLOD){return gd(i,"light-fury-hidden-world",t)}const ho=[{id:"twin-pair",label:"Twin Furies Perch",position:new E(.05,2.75,11.4),target:new E(0,.98,-.12)},{id:"light-fury-hero",label:"Light Fury 3/4",position:new E(-6.85,1.68,3.15),target:new E(-4.42,1,.25)},{id:"light-fury-face",label:"Light Fury Portrait",position:new E(-3.65,1.64,2.38),target:new E(-4.22,1.5,1.55)},{id:"toothless-hero",label:"Toothless 3/4",position:new E(7.15,1.82,3.68),target:new E(4.42,1.06,.55)},{id:"toothless-paws-scales",label:"Scales & Claws Study",position:new E(6.15,.96,2.95),target:new E(4.52,.62,1.25)},{id:"waterfall-islands",label:"Waterfall Double-Isle",position:new E(14.5,8.2,16),target:new E(-56,-1.5,-28)},{id:"sea-arch-drangar",label:"Sea-Arch & Clett",position:new E(28,5.4,2.5),target:new E(54.5,-1.8,20.5)},{id:"crescent-lagoon",label:"Crescent Lagoon",position:new E(24,38,-12),target:new E(84,-6,34)},{id:"archipelago-aerial",label:"Archipelago Panorama",position:new E(18,68,108),target:new E(-4,-4,-24)}];function sn(i){const t=parseFloat(i.min||"0"),e=parseFloat(i.max||"1"),n=parseFloat(i.value||"0"),s=e>t?(n-t)/(e-t)*100:50;i.style.setProperty("--fill-pct",`${Math.max(0,Math.min(100,s)).toFixed(1)}%`)}function q2(i,t,e,n,s,o,a){let r=!1,l=window.innerWidth<=780,c=!0,h=1,u=null;i.classList.toggle("drawer-collapsed",l);const d=t.rig.bones.length+n.rig.bones.length,m=document.createElement("div");m.className="hud-toast",i.appendChild(m);const v=document.createElement("div");v.className="shutter-flash",i.appendChild(v);const g=vt=>{m.textContent=vt,m.classList.add("visible"),u!==null&&window.clearTimeout(u),u=window.setTimeout(()=>{m.classList.remove("visible")},2200)},f=()=>{v.classList.add("flash"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{v.classList.remove("flash")})})},p=document.createElement("div");p.className="hud-header",p.innerHTML=`
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
  `,i.appendChild(p);const w=p.querySelector("#tel-fps"),_=p.querySelector("#tel-lod"),x=p.querySelector("#btn-cursor-gaze"),y=p.querySelector("#btn-lightning-top"),b=p.querySelector("#btn-photo"),A=p.querySelector("#btn-fullscreen"),T=p.querySelector("#btn-help"),S=p.querySelector("#btn-toggle-hud"),M=()=>{a.onTriggerLightningStrike(),g("⚡ Forked Lightning Strike & Rolling Thunder")};y.addEventListener("click",M);const P=document.createElement("button");P.className="drawer-reopen-btn hud-collapsible",P.title="Open Character & Atmosphere Atelier [Tab]",P.innerHTML='<span>Open Atelier</span><span class="kbd-hint">Tab</span>',i.appendChild(P);const C=vt=>{l=vt,i.classList.toggle("drawer-collapsed",l)};P.addEventListener("click",()=>C(!1));const R=()=>{r=!r,i.classList.toggle("hud-hidden",r),S.innerHTML=r?'Show UI <span class="kbd-hint">H</span>':'Cinema <span class="kbd-hint">H</span>'};S.addEventListener("click",R);const F=()=>{c=!c,x.classList.toggle("is-active",c),a.onToggleCursorGaze(c),g(c?"Interactive Cursor Gaze enabled":"Sculpted Manual Gaze locked")};x.addEventListener("click",F),b.addEventListener("click",()=>{a.onCaptureSnapshot()});const I=()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})};A.addEventListener("click",I),document.addEventListener("fullscreenchange",()=>{A.classList.toggle("is-active",!!document.fullscreenElement)});const k=document.createElement("div");k.className="help-backdrop",k.innerHTML=`
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
  `,i.appendChild(k);const N=vt=>{const Ft=vt??!k.classList.contains("open");k.classList.toggle("open",Ft),T.classList.toggle("is-active",Ft)};T.addEventListener("click",()=>N()),k.querySelector("#btn-help-close").addEventListener("click",()=>N(!1)),k.addEventListener("click",vt=>{vt.target===k&&N(!1)});const D=document.createElement("div");D.className="flight-bar hud-collapsible",D.innerHTML=`
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
  `,i.appendChild(D);const O=D.querySelector("#btn-flight-play"),H=D.querySelector("#flight-play-icon"),Z=D.querySelector("#flight-play-text"),q=D.querySelector("#btn-flight-reset"),$=D.querySelector("#flight-phase-label"),X=D.querySelector("#flight-time-label"),V=D.querySelector("#flight-scrubber"),et=D.querySelector("#btn-flight-speed"),it=D.querySelector("#btn-flight-cam"),J=D.querySelector("#btn-flight-loop"),st=Array.from(D.querySelectorAll(".flight-mode-pill"));let Y=!1;const j=()=>{const vt=o.getPhaseInfo(),Ft=vt.isPlaying&&!vt.isPaused;D.classList.toggle("playing",Ft);const U=vt.subjectMode==="duet"?"Begin Courtship Flight":vt.subjectMode==="light-fury"?"Fly Light Fury":"Fly Toothless";vt.isPlaying?vt.isPaused?(H.innerHTML="&#9654;",Z.textContent="Resume Flight",$.textContent=`${vt.phaseLabel} (Paused)`):(H.innerHTML="&#10074;&#10074;",Z.textContent="Pause Flight",$.textContent=vt.phaseLabel):(H.innerHTML="&#9654;",Z.textContent=U,$.innerHTML=vt.subjectMode==="duet"?"Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown":"Perched Ready &mdash; Solo Takeoff, Sea Soar &amp; Landing"),X.textContent=`${vt.elapsedSec.toFixed(1)}s / ${vt.durationSec.toFixed(1)}s`,Y||(V.value=String(vt.progress),sn(V)),it.classList.toggle("active",vt.followCamera),J.classList.toggle("active",vt.loop),et.classList.toggle("active",h<.99),et.innerHTML=`${h.toFixed(1)}&times;`,st.forEach(K=>K.classList.toggle("active",K.dataset.fmode===vt.subjectMode))};et.addEventListener("click",()=>{h=h>.75?.5:1,a.onFlightSpeedChange(h),j(),g(h<.75?"0.5× Slow-Motion Wingbeat Study":"1.0× Natural Flight Speed")}),st.forEach(vt=>{vt.addEventListener("click",()=>{const Ft=vt.dataset.fmode;o.setSubjectMode(Ft),j(),un()})}),O.addEventListener("click",()=>{o.togglePlayPause(),j(),un()}),q.addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),j(),un()}),V.addEventListener("pointerdown",()=>{Y=!0}),window.addEventListener("pointerup",()=>{Y=!1}),V.addEventListener("input",()=>{sn(V),o.scrubToProgress(parseFloat(V.value)),e.applyRigState(0),s.applyRigState(0),j(),un()}),it.addEventListener("click",()=>{o.followCamera=!o.followCamera,j()}),J.addEventListener("click",()=>{o.loop=!o.loop,j()});const ut=document.createElement("div");ut.className="camera-bar hud-collapsible";const tt=[],z=vt=>{const Ft=ho[vt];Ft&&(o.isPlaying&&(o.stopAndResetToPerch(),j(),un()),tt.forEach((U,K)=>U.classList.toggle("active",K===vt)),tt[vt]?.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"}),Ft.id.startsWith("light-fury")?L("light-fury"):Ft.id.startsWith("toothless")&&L("toothless"),a.onSelectCameraBookmark(Ft))};ho.forEach((vt,Ft)=>{const U=document.createElement("button");U.className=`cam-btn${Ft===0?" active":""}`,U.title=`${vt.label} [Hotkey ${Ft+1}]`,U.innerHTML=`<span class="cam-btn-idx">${Ft+1}</span><span>${vt.label}</span>`,U.addEventListener("click",()=>z(Ft)),tt.push(U),ut.appendChild(U)}),i.appendChild(ut),window.addEventListener("keydown",vt=>{const Ft=document.activeElement?.tagName;if(!(Ft==="INPUT"||Ft==="TEXTAREA")){if(vt.key==="Escape"&&k.classList.contains("open")){N(!1);return}if(vt.key==="?"||vt.key==="/"&&vt.shiftKey){vt.preventDefault(),N();return}if(vt.key==="Tab"){vt.preventDefault(),C(!l);return}if(vt.key==="h"||vt.key==="H")R();else if(vt.key==="c"||vt.key==="C")F();else if(vt.key==="l"||vt.key==="L")M();else if(vt.key==="p"||vt.key==="P")a.onCaptureSnapshot();else if(vt.key==="f"||vt.key==="F")I();else if(vt.code==="Space")vt.preventDefault(),o.togglePlayPause(),j(),un();else if(vt.key>="1"&&vt.key<="9"&&!vt.ctrlKey&&!vt.metaKey&&!vt.altKey){const U=parseInt(vt.key,10)-1;U>=0&&U<ho.length&&z(U)}}});const _t=document.createElement("aside");_t.className="rig-drawer hud-collapsible",_t.innerHTML=`
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
  `,i.appendChild(_t),_t.querySelector("#btn-collapse-drawer").addEventListener("click",()=>{C(!0)});const xt=_t.querySelector("#moments-grid"),Ct=_t.querySelector("#tab-light-fury"),Tt=_t.querySelector("#tab-toothless"),Nt=_t.querySelector("#panel-light-fury"),lt=_t.querySelector("#panel-toothless"),W=_t.querySelector("#panel-shared-world");function L(vt){Ct.classList.toggle("active",vt==="light-fury"),Tt.classList.toggle("active",vt==="toothless"),Nt.style.display=vt==="light-fury"?"block":"none",lt.style.display=vt==="toothless"?"block":"none"}Ct.addEventListener("click",()=>L("light-fury")),Tt.addEventListener("click",()=>L("toothless"));const rt=[];function dt(vt,Ft,U=!1){const K=document.createElement("div");K.className=`accordion-section${U?" open":""}`;const ft=document.createElement("button");ft.className="accordion-header",ft.innerHTML=`<span>${Ft}</span><span class="accordion-chevron">&#9662;</span>`;const mt=document.createElement("div");mt.className="accordion-collapse";const bt=document.createElement("div");bt.className="accordion-collapse-inner";const ht=document.createElement("div");return ht.className="accordion-body",bt.appendChild(ht),mt.appendChild(bt),ft.addEventListener("click",()=>{K.classList.toggle("open")}),K.appendChild(ft),K.appendChild(mt),vt.appendChild(K),ht}function yt(vt,Ft,U,K,ft,mt,bt,ht=.01,Et=!1){const Dt=Number(U[ft]),Qt=document.createElement("div");Qt.className="control-row",Qt.title="Double-click slider to reset";const fe=document.createElement("span");fe.className="control-val";const pe=document.createElement("div");pe.className="control-label-line";const le=document.createElement("span");le.textContent=Ft,pe.appendChild(le),pe.appendChild(fe);const oe=document.createElement("input");oe.type="range",oe.min=String(mt),oe.max=String(bt),oe.step=String(ht);const de=()=>{const me=Number(U[ft]);oe.value=String(me),fe.textContent=me.toFixed(2),sn(oe)};de(),rt.push(de),oe.addEventListener("input",()=>{o.isPlaying&&!o.isPaused&&(o.isPaused=!0,j());const me=parseFloat(oe.value);K({[ft]:me}),fe.textContent=me.toFixed(2),sn(oe),Et&&un()}),oe.addEventListener("dblclick",()=>{K({[ft]:Dt}),de(),Et&&un(),g(`Reset ${Ft}`)}),Qt.appendChild(pe),Qt.appendChild(oe),vt.appendChild(Qt)}function Mt(vt,Ft,U,K,ft){const mt=document.createElement("label");mt.className="toggle-row";const bt=document.createElement("span");bt.textContent=Ft;const ht=document.createElement("input");ht.type="checkbox";const Et=()=>{ht.checked=!!U[ft]};Et(),rt.push(Et),ht.addEventListener("change",()=>{K({[ft]:ht.checked}),un()}),mt.appendChild(bt),mt.appendChild(ht),vt.appendChild(mt)}const zt=dt(Nt,"Light Fury Moods & Expressions",!0),kt=document.createElement("div");kt.className="weather-grid";const Rt=[];hd.forEach((vt,Ft)=>{const U=document.createElement("button");U.className=`weather-btn${Ft===0?" active":""}`,U.innerHTML=`
      <span class="weather-btn-title">${vt.label}</span>
      <span class="weather-btn-sub">${vt.subtitle}</span>
    `,U.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),j()),Rt.forEach(K=>K.classList.remove("active")),U.classList.add("active"),s.setState(vt.patch),un()}),Rt.push(U),kt.appendChild(U)}),zt.appendChild(kt);const It=(vt,Ft,U,K,ft,mt=.01,bt=!1)=>yt(vt,Ft,s.state,ht=>s.setState(ht),U,K,ft,mt,bt),Lt=(vt,Ft,U)=>Mt(vt,Ft,s.state,K=>s.setState(K),U),Ot=dt(Nt,"I. Bioluminescence, Shimmer & Cloak",!0);It(Ot,"Hidden World Neon Bioluminescence","biolumGlow",0,1),It(Ot,"Thermal-Mirror Optical Cloak","thermalCloak",0,1),It(Ot,"Stardust Glimmer & Opal Sheen","iridescentShimmer",0,1),It(Ot,"Radiant Partly-Glowing Skin","radiantGlow",0,1),It(Ot,"Underwing Rose & Ice Countershade","pastelTint",0,1),It(Ot,"Orchid-Cyan Plasma Charge","plasmaGlow",0,1);const jt=dt(Nt,"II. Gaze, Ears & Expression",!1);It(jt,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),It(jt,"Curious Head-Tilt (Roll)","headRoll",-1,1),It(jt,"Head Yaw (Swan-Neck Coupled)","headYaw",-1,1),It(jt,"Head Pitch","headPitch",-1,1),It(jt,"Eye Gaze Horizontal","eyeYaw",-1,1),It(jt,"Eye Gaze Vertical","eyePitch",-1,1),It(jt,"Affectionate Squint-Smile","squint",0,1),It(jt,"Almond Eyelid Blink","blink",0,1),It(jt,"Rounded Ear-Nubs Perk","earPerk",0,1),It(jt,"Ear Asymmetry","earAsymmetry",-1,1),It(jt,"Temple Cheek Nubs","cheekNubFlare",0,1);const Ht=dt(Nt,"III. Smile, Retractable Fangs & Tongue",!1);It(Ht,"Jaw Open","jawOpen",0,1),It(Ht,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),It(Ht,"Pink Tongue Extend","tongueExtend",0,1),It(Ht,"Tongue Curl","tongueCurl",-1,1);const Ut=document.createElement("button");Ut.className="action-btn secondary",Ut.textContent="Toggle Soft Gums vs. Strike Fangs";let ce=!1;Ut.addEventListener("click",()=>{ce=!ce,ce?s.setState({jawOpen:.68,teethExtension:1,pupilDilation:.1,squint:.36,earPerk:.14}):s.setState({jawOpen:.26,teethExtension:0,pupilDilation:.92,squint:.24,earPerk:.9}),un()}),Ht.appendChild(Ut);const ne=dt(Nt,"IV. Scalloped Wings, Veil & Sail",!1);It(ne,"Coy Wing-Veil Drape","coyWingVeil",0,1),It(ne,"Wing Unfurl (Cape ↔ 7.80m Span)","wingUnfurl",0,1),It(ne,"Wing Flap Elevation","wingFlap",-1,1),It(ne,"Wing Forward/Dive Sweep","wingSweep",-1,1),It(ne,"Airfoil Camber","wingCamber",0,1),It(ne,"Pelvic Glide Flukes","pelvicFinFlare",0,1),It(ne,"Continuous Dorsal Sail Flex","dorsalSailFlex",0,1);const Me=dt(Nt,"V. Symmetrical Heart-Tail Flukes",!1);Lt(Me,"Sync Heart-Tail Lobes","syncHeartTailFlukes"),It(Me,"Right Heart-Lobe Fold","rightHeartFinFlare",-1,1,.01,!0),It(Me,"Left Heart-Lobe Fold","leftHeartFinFlare",-1,1,.01,!0),It(Me,"Tail Horizontal Sweep","tailYaw",-1,1),It(Me,"Tail Vertical Lift","tailPitch",-1,1),It(Me,"Feline Tail Curl","tailCurl",-1,1);const ot=dt(Nt,"VI. Stance, 4-Paw IK & Flight Legs",!1);It(ot,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),It(ot,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),It(ot,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),It(ot,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),It(ot,"Swan Neck Arch","neckArch",-1,1),It(ot,"Neck Turn","neckYaw",-1,1),It(ot,"Spine Arch","spineArch",-1,1),It(ot,"Spine Twist","spineTwist",-1,1),Lt(ot,"Living Idle (Purr & Natural Blinks)","subtleBreathing");const Gt=dt(lt,"Toothless Moods & Expressions",!0),wt=document.createElement("div");wt.className="weather-grid";const St=[];id.forEach((vt,Ft)=>{const U=document.createElement("button");U.className=`weather-btn${Ft===0?" active":""}`,U.innerHTML=`
      <span class="weather-btn-title">${vt.label}</span>
      <span class="weather-btn-sub">${vt.subtitle}</span>
    `,U.addEventListener("click",()=>{o.isPlaying&&(o.stopAndResetToPerch(),j()),St.forEach(K=>K.classList.remove("active")),U.classList.add("active"),e.setState(vt.patch),un()}),St.push(U),wt.appendChild(U)}),Gt.appendChild(wt);const At=(vt,Ft,U,K,ft,mt=.01,bt=!1)=>yt(vt,Ft,e.state,ht=>e.setState(ht),U,K,ft,mt,bt),Vt=(vt,Ft,U)=>Mt(vt,Ft,e.state,K=>e.setState(K),U),ue=dt(lt,"I. Alpha Bioluminescence & Lightning",!0);At(ue,"Alpha Blue Plasma Glow","alphaGlow",0,1),At(ue,"Cavern Bioluminescent Markings","biolumGlow",0,1),At(ue,"Lightning-Cloak Mirror Arcs","lightningCloak",0,1);const Pe=dt(lt,"II. Head, Ear-Plates & Emerald Eyes",!1);At(Pe,"Pupil Dilation (Slit ↔ Wide)","pupilDilation",0,1),At(Pe,"Head Yaw (Cervical Coupled)","headYaw",-1,1),At(Pe,"Head Pitch","headPitch",-1,1),At(Pe,"Curious Head Roll","headRoll",-1,1),At(Pe,"Eye Gaze Horizontal","eyeYaw",-1,1),At(Pe,"Eye Gaze Vertical","eyePitch",-1,1),At(Pe,"Palpebral Eyelid Blink","blink",0,1),At(Pe,"Focus Squint","squint",0,1),At(Pe,"Primary Ear-Plates Perk","earPerk",0,1),At(Pe,"Ear-Plate Asymmetry","earAsymmetry",-1,1),At(Pe,"Secondary Cheek Nubs","cheekNubFlare",0,1);const Ve=dt(lt,"III. Jaw, Retractable Teeth & Tongue",!1);At(Ve,"Jaw Open","jawOpen",0,1),At(Ve,"Retractable Teeth (Gums ↔ Fangs)","teethExtension",0,1),At(Ve,"Tongue Extend","tongueExtend",0,1),At(Ve,"Tongue Curl","tongueCurl",-1,1);const he=document.createElement("button");he.className="action-btn secondary",he.textContent='Toggle "Toothless" Gums vs. Fangs';let en=!1;he.addEventListener("click",()=>{en=!en,en?e.setState({jawOpen:.72,teethExtension:1,pupilDilation:.14,squint:.32}):e.setState({jawOpen:.36,teethExtension:0,pupilDilation:.85,squint:0}),un()}),Ve.appendChild(he);const Ne=dt(lt,"IV. Wings, Fins & Flush V-Spines",!1);At(Ne,"Wing Unfurl (Cape ↔ 8.56m Span)","wingUnfurl",0,1),At(Ne,"Wing Flap Elevation","wingFlap",-1,1),At(Ne,"Wing Forward/Dive Sweep","wingSweep",-1,1),At(Ne,"Phalangeal Airfoil Camber","wingCamber",0,1),At(Ne,"Pelvic 3-Spar Glide Fins","pelvicFinFlare",0,1),At(Ne,"Dorsal V-Spine Split","dorsalSpineSplit",0,1);const Hn=dt(lt,"V. Prosthetic Tail & Mechanics",!1);Vt(Hn,"Auto-Sync Left Prosthetic Linkage","autoSyncProstheticTail"),At(Hn,"Left Prosthetic Fin Fold","leftProstheticFinFlare",-1,1,.01,!0),At(Hn,"Right Biological Fin Fold","rightTailFinFlare",-1,1,.01,!0),At(Hn,"Tail Horizontal Sweep","tailYaw",-1,1),At(Hn,"Tail Vertical Lift","tailPitch",-1,1),At(Hn,"Distal Tail Whip Curl","tailCurl",-1,1);const Mn=dt(lt,"VI. Stance, 4-Paw IK & Flight Legs",!1);At(Mn,"Foreleg Crouch ↔ Proud Lift","forelegStance",-1,1),At(Mn,"Hindleg Crouch ↔ Tall Haunches","hindlegStance",-1,1),At(Mn,"Crawl / Prowl Stride (4-Paw IK)","limbStride",-1,1),At(Mn,"Flight Leg Posture (Reach ↔ Swept)","legFlightTuck",-1,1),At(Mn,"Neck Arch","neckArch",-1,1),At(Mn,"Neck Turn","neckYaw",-1,1),At(Mn,"Spine Arch","spineArch",-1,1),At(Mn,"Spine Twist","spineTwist",-1,1),Vt(Mn,"Living Idle (Breath, Blinks & Twitches)","subtleBreathing");const Ye=dt(W,"Archipelago, Sky & North Sea",!0),oi=document.createElement("div");oi.className="control-label-line";const ln=ss[a.initialWeatherPreset]??ss["golden-hour"];oi.innerHTML=`<span>Coastal Atmosphere</span><span class="control-val" id="weather-preset-desc">${ln.subtitle}</span>`,Ye.appendChild(oi);const ai=oi.querySelector("#weather-preset-desc"),Dn=document.createElement("div");Dn.className="weather-grid";const Xi=[],An={...no},wn=[],Wn=[],Mi=document.createElement("div");Mi.className="control-row",Mi.innerHTML=`
    <div class="control-label-line">
      <span>Sun / Moon Elevation</span>
      <span class="control-val" id="elev-val">${ln.sunElevationDeg.toFixed(1)}&deg;</span>
    </div>
    <input type="range" id="elev-slider" min="2" max="55" step="0.5" value="${ln.sunElevationDeg}" />
  `;const Zn=Mi.querySelector("#elev-slider"),yn=Mi.querySelector("#elev-val");sn(Zn),Zn.addEventListener("input",()=>{const vt=parseFloat(Zn.value);yn.textContent=`${vt.toFixed(1)}°`,sn(Zn),a.onSunElevationChange(vt)});const jn=document.createElement("div");jn.className="control-row";const Nn=vt=>Math.min(1,Math.max(0,(vt-6e-4)/.0044)),Ds=vt=>6e-4+vt*.0044,B=Nn(ln.mistDensity);jn.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Mist &amp; Horizon Veil</span>
      <span class="control-val" id="mist-val">${B.toFixed(2)}</span>
    </div>
    <input type="range" id="mist-slider" min="0" max="1" step="0.01" value="${B.toFixed(2)}" />
  `;const at=jn.querySelector("#mist-slider"),pt=jn.querySelector("#mist-val");sn(at),at.addEventListener("input",()=>{const vt=parseFloat(at.value);pt.textContent=vt.toFixed(2),sn(at),a.onMistDensityChange(Ds(vt))});const gt=ln.rainIntensity,ct=document.createElement("div");ct.className="control-row",ct.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Rain &amp; Splash Physics</span>
      <span class="control-val" id="rain-val">${gt.toFixed(2)}</span>
    </div>
    <input type="range" id="rain-slider" min="0" max="1" step="0.01" value="${gt.toFixed(2)}" />
  `;const Pt=ct.querySelector("#rain-slider"),Wt=ct.querySelector("#rain-val");sn(Pt),Pt.addEventListener("input",()=>{const vt=parseFloat(Pt.value);Wt.textContent=vt.toFixed(2),sn(Pt),a.onRainIntensityChange(vt)});const qt=ln.windStrength,Yt=document.createElement("div");Yt.className="control-row",Yt.innerHTML=`
    <div class="control-label-line">
      <span>Coastal Wind (Ferns, Grass &amp; Sea)</span>
      <span class="control-val" id="wind-val">${qt.toFixed(2)}</span>
    </div>
    <input type="range" id="wind-slider" min="0.05" max="1.25" step="0.01" value="${qt.toFixed(2)}" />
  `;const ie=Yt.querySelector("#wind-slider"),ae=Yt.querySelector("#wind-val");sn(ie),ie.addEventListener("input",()=>{const vt=parseFloat(ie.value);ae.textContent=vt.toFixed(2),sn(ie),a.onWindStrengthChange(vt)});const Jt=ln.lightningFrequency,ye=document.createElement("div");ye.className="control-row",ye.innerHTML=`
    <div class="control-label-line">
      <span>Thunder &amp; Lightning Storm Rate</span>
      <span class="control-val" id="bolt-val">${Jt.toFixed(2)}</span>
    </div>
    <input type="range" id="bolt-slider" min="0" max="1" step="0.01" value="${Jt.toFixed(2)}" />
  `;const we=ye.querySelector("#bolt-slider"),$e=ye.querySelector("#bolt-val");sn(we),we.addEventListener("input",()=>{const vt=parseFloat(we.value);$e.textContent=vt.toFixed(2),sn(we),a.onLightningFrequencyChange(vt)});const De=document.createElement("button");De.className="action-btn",De.style.width="100%",De.style.marginTop="6px",De.innerHTML="&#9889; Strike Forked Lightning &amp; Thunder [L]",De.addEventListener("click",M);let Ae=null;const te=vt=>{const Ft=ss[vt];if(!Ft)return;Xi.forEach(({id:ft,btn:mt})=>mt.classList.toggle("active",ft===vt)),ai.textContent=Ft.subtitle,Zn.value=String(Ft.sunElevationDeg),yn.textContent=`${Ft.sunElevationDeg.toFixed(1)}°`,sn(Zn);const U=Nn(Ft.mistDensity);at.value=U.toFixed(2),pt.textContent=U.toFixed(2),sn(at),Pt.value=Ft.rainIntensity.toFixed(2),Wt.textContent=Ft.rainIntensity.toFixed(2),sn(Pt),ie.value=Ft.windStrength.toFixed(2),ae.textContent=Ft.windStrength.toFixed(2),sn(ie),we.value=Ft.lightningFrequency.toFixed(2),$e.textContent=Ft.lightningFrequency.toFixed(2),sn(we),a.onSelectWeatherPreset(Ft.id);let K=null;Ft.id==="stormy-squall"?(K={idx:3,desc:"Rogue Storm",params:{waveAmplitude:1.65,waveSpeed:1.68,seaChoppiness:.92}},a.onTriggerLightningStrike()):Ft.id==="starlit-night"||Ft.id==="dawn-dusk"?K={idx:0,desc:"Calm Fjord",params:{waveAmplitude:.3,waveSpeed:.72,seaChoppiness:.24}}:K={idx:1,desc:"Nordic Swell",params:{...no}},K&&(Wn.forEach((ft,mt)=>ft.classList.toggle("active",mt===K.idx)),Ae&&(Ae.textContent=K.desc),Object.assign(An,K.params),wn.forEach(ft=>ft()),a.onOceanParamsChange(K.params))};Object.values(ss).forEach(vt=>{const Ft=document.createElement("button");Ft.className=`weather-btn${vt.id===a.initialWeatherPreset?" active":""}`,Ft.innerHTML=`
      <span class="weather-btn-title">${vt.label}</span>
      <span class="weather-btn-sub">${vt.subtitle}</span>
    `,Ft.addEventListener("click",()=>{ze.forEach(U=>U.classList.remove("active")),te(vt.id)}),Xi.push({id:vt.id,btn:Ft}),Dn.appendChild(Ft)}),Ye.appendChild(Dn),Ye.appendChild(Mi),Ye.appendChild(jn),Ye.appendChild(ct),Ye.appendChild(Yt),Ye.appendChild(ye),Ye.appendChild(De);const ze=[];[{label:"Golden Dusk",toast:"Scene Moment — Golden Dusk Courtship",weather:"golden-hour",lfPatch:{biolumGlow:.12,thermalCloak:0,iridescentShimmer:.68,radiantGlow:.3,plasmaGlow:0},nfPatch:{alphaGlow:0,biolumGlow:.08,lightningCloak:0}},{label:"Biolum Night",toast:"Scene Moment — Hidden World Bioluminescence",weather:"starlit-night",lfPatch:{biolumGlow:.96,thermalCloak:0,iridescentShimmer:.85,radiantGlow:.72,plasmaGlow:.58},nfPatch:{alphaGlow:.92,biolumGlow:.95,lightningCloak:.24}},{label:"Mirror Cloak",toast:"Scene Moment — Light Fury Optical Cloak",weather:"dawn-dusk",lfPatch:{thermalCloak:.88,iridescentShimmer:.96,biolumGlow:.42,plasmaGlow:.32},nfPatch:{alphaGlow:.18,biolumGlow:.22,lightningCloak:0}},{label:"Storm Gale",toast:"Scene Moment — North Sea Lightning Squall",weather:"stormy-squall",lfPatch:{biolumGlow:.54,thermalCloak:0,plasmaGlow:.65,wingUnfurl:.58},nfPatch:{alphaGlow:.86,biolumGlow:.78,lightningCloak:.88,wingUnfurl:.62}}].forEach((vt,Ft)=>{const U=document.createElement("button");U.className=`moment-chip${Ft===0?" active":""}`,U.textContent=vt.label,U.addEventListener("click",()=>{ze.forEach((K,ft)=>K.classList.toggle("active",ft===Ft)),te(vt.weather),s.setState(vt.lfPatch),e.setState(vt.nfPatch),un(),g(vt.toast)}),ze.push(U),xt.appendChild(U)});const an=document.createElement("div");an.className="control-label-line",an.style.marginTop="11px",an.innerHTML='<span>Irregular North Sea Swells</span><span class="control-val" id="sea-preset-desc">Nordic Swell</span>',Ye.appendChild(an);const Un=an.querySelector("#sea-preset-desc");Ae=Un;const cn=document.createElement("div");cn.className="segmented-row";const wi=[{label:"Quiet",desc:"Glassy Fjord",params:{waveAmplitude:.14,waveSpeed:.52,seaChoppiness:.08}},{label:"Swell",desc:"Nordic Swell",params:{...no}},{label:"Rough",desc:"Crossed Sea",params:{waveAmplitude:1.18,waveSpeed:1.38,seaChoppiness:.8}},{label:"Storm",desc:"Rogue Storm",params:{waveAmplitude:1.72,waveSpeed:1.75,seaChoppiness:.96}}];function Ue(vt,Ft,U,K,ft=.01){const mt=no[Ft],bt=document.createElement("div");bt.className="control-row",bt.title="Double-click slider to reset",bt.innerHTML=`
      <div class="control-label-line">
        <span>${vt}</span>
        <span class="control-val">${An[Ft].toFixed(2)}</span>
      </div>
      <input type="range" min="${U}" max="${K}" step="${ft}" value="${An[Ft]}" />
    `;const ht=bt.querySelector(".control-val"),Et=bt.querySelector("input");sn(Et),wn.push(()=>{Et.value=String(An[Ft]),ht.textContent=An[Ft].toFixed(2),sn(Et)}),Et.addEventListener("input",()=>{const Dt=parseFloat(Et.value);An[Ft]=Dt,ht.textContent=Dt.toFixed(2),sn(Et),Wn.forEach(Qt=>Qt.classList.remove("active")),Un.textContent="Custom Swell",a.onOceanParamsChange({[Ft]:Dt})}),Et.addEventListener("dblclick",()=>{An[Ft]=mt,Et.value=String(mt),ht.textContent=mt.toFixed(2),sn(Et),a.onOceanParamsChange({[Ft]:mt}),g(`Reset ${vt}`)}),Ye.appendChild(bt)}wi.forEach((vt,Ft)=>{const U=document.createElement("button");U.className=`seg-btn${Ft===1?" active":""}`,U.textContent=vt.label,U.addEventListener("click",()=>{Wn.forEach(K=>K.classList.remove("active")),U.classList.add("active"),Un.textContent=vt.desc,Object.assign(An,vt.params),wn.forEach(K=>K()),a.onOceanParamsChange(vt.params)}),Wn.push(U),cn.appendChild(U)}),Ye.appendChild(cn),Ue("Swell & Rogue Wave Height","waveAmplitude",.05,3.2,.01),Ue("Current & Swell Velocity","waveSpeed",.15,2.5,.01),Ue("Cross-Chop & Whitecap Foam","seaChoppiness",0,1,.01);const nn=document.createElement("div");nn.className="control-label-line",nn.style.marginTop="11px",nn.innerHTML='<span>Mesh Level-of-Detail</span><span class="control-val" id="lod-mode-label">LOD0 Hero</span>',Ye.appendChild(nn);const vn=nn.querySelector("#lod-mode-label"),Qe=document.createElement("div");Qe.className="segmented-row";const hn=[{label:"LOD0",mode:"0",desc:"LOD0 Hero"},{label:"LOD1",mode:"1",desc:"LOD1 Mid"},{label:"LOD2",mode:"2",desc:"LOD2 Far"},{label:"Auto",mode:"auto",desc:"Auto Distance"}],yi=[];hn.forEach((vt,Ft)=>{const U=document.createElement("button");U.className=`seg-btn${Ft===0?" active":""}`,U.textContent=vt.label,U.addEventListener("click",()=>{if(yi.forEach(K=>K.classList.remove("active")),U.classList.add("active"),vn.textContent=vt.desc,vt.mode==="auto")t.autoLOD=!0,n.autoLOD=!0;else{const K=Number(vt.mode);t.autoLOD=!1,n.autoLOD=!1,t.setActiveLOD(K),n.setActiveLOD(K)}}),yi.push(U),Qe.appendChild(U)}),Ye.appendChild(Qe);const kn=document.createElement("div");kn.className="export-btn-grid";const ri=document.createElement("button");ri.className="action-btn",ri.textContent="Light Fury .GLB";const bi=document.createElement("button");bi.className="action-btn",bi.textContent="Toothless .GLB",kn.appendChild(ri),kn.appendChild(bi);const Kn=document.createElement("div");Kn.className="export-status";const To=async vt=>{ri.disabled=!0,bi.disabled=!0,Kn.style.color="",Kn.textContent="Packaging binary .GLB asset…";try{const Ft=vt==="light-fury"?await $2(n,n.activeLOD):await Y2(t,t.activeLOD);Kn.textContent=`Saved ${Ft.filename} (${Ft.sizeMB.toFixed(2)} MB)`,g(`Exported ${Ft.filename}`)}catch(Ft){Kn.style.color="#f09898",Kn.textContent=`Export failed: ${Ft.message}`}finally{ri.disabled=!1,bi.disabled=!1}};ri.addEventListener("click",()=>To("light-fury")),bi.addEventListener("click",()=>To("toothless")),Ye.appendChild(kn),Ye.appendChild(Kn);function un(){for(const vt of rt)vt()}return _t.querySelector("#btn-reset-pose").addEventListener("click",()=>{o.stopAndResetToPerch(),a.onFlightResetCamera(),Rt.forEach((vt,Ft)=>vt.classList.toggle("active",Ft===0)),St.forEach((vt,Ft)=>vt.classList.toggle("active",Ft===0)),ze.forEach((vt,Ft)=>vt.classList.toggle("active",Ft===0)),j(),un(),g("Reset Twin Furies to Hero Perch")}),j(),{updateTelemetry(vt,Ft){w.innerHTML=`<strong>${Math.round(vt)}</strong> FPS`;const U=t.lodStats[Ft].triangles+n.lodStats[Ft].triangles;_.innerHTML=`<strong>LOD${Ft}</strong> &middot; ${U.toLocaleString()} tris`},updateFlightUI:j,syncControlsFromRig:un,showToast:g,triggerShutterFlash:f,clearActiveCameraBookmark(){tt.forEach(vt=>vt.classList.remove("active"))}}}function Z2(i,t){i.innerHTML="",i.classList.add("ux-viewer-mode");const e=document.createElement("div");e.className="shutter-flash",e.setAttribute("aria-hidden","true"),i.appendChild(e);const n=document.createElement("div");n.className="hud-toast",n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),i.appendChild(n);let s=0;function o(T){n.textContent=T,n.classList.add("visible"),window.clearTimeout(s),s=window.setTimeout(()=>{n.classList.remove("visible")},2400)}function a(){e.classList.remove("is-flashing"),e.offsetWidth,e.classList.add("is-flashing")}const r=document.createElement("nav");r.className="ux-utility-bar",r.setAttribute("aria-label","Viewer tools"),r.innerHTML=`
    <button type="button" class="ux-pill-btn" id="ux-btn-snapshot" aria-label="Capture Snapshot (Shortcut P)" title="Capture Snapshot [P]">
      <svg class="ux-pill-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3.5 6.5A1.5 1.5 0 0 1 5 5h2l1.1-1.5h3.8L13 5h2a1.5 1.5 0 0 1 1.5 1.5v7.5A1.5 1.5 0 0 1 15 15.5H5A1.5 1.5 0 0 1 3.5 14V6.5Z" stroke="currentColor" stroke-width="1.35" />
        <circle cx="10" cy="10.25" r="2.6" stroke="currentColor" stroke-width="1.35" />
      </svg>
      <span>Snapshot</span>
    </button>
    <button type="button" class="ux-pill-btn" id="ux-btn-reset" aria-label="Reset Camera View (Shortcut R)" title="Reset Camera View [R]">
      <svg class="ux-pill-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4.5 10a5.5 5.5 0 1 1 1.4 3.65M4.5 6.2V10h3.8" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>Reset View</span>
    </button>
    <button type="button" class="ux-pill-btn" id="ux-btn-sound" aria-pressed="true" aria-label="Toggle Ambient Thunder Audio (Shortcut M)" title="Toggle Ambient Sound [M]">
      <svg class="ux-pill-icon" id="ux-sound-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4.2 8.2h2.6l3.4-2.8v9.2l-3.4-2.8H4.2V8.2Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" />
        <path d="M13 7.6a3.4 3.4 0 0 1 0 4.8M15 5.6a6.2 6.2 0 0 1 0 8.8" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
      </svg>
      <span id="ux-sound-label">Sound</span>
    </button>
    <button type="button" class="ux-pill-btn" id="ux-btn-fullscreen" aria-pressed="false" aria-label="Toggle Fullscreen (Shortcut F)" title="Toggle Fullscreen [F]">
      <svg class="ux-pill-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 7.5V4h3.5M16 7.5V4h-3.5M4 12.5V16h3.5M16 12.5V16h-3.5" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>Fullscreen</span>
    </button>
    <button type="button" class="ux-pill-btn" id="ux-btn-guide" aria-expanded="false" aria-controls="ux-guide-dialog" aria-label="Navigation Controls Guide (Shortcut ?)" title="Navigation Guide [?]">
      <svg class="ux-pill-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" stroke-width="1.35" />
        <path d="M8.4 8.1a1.75 1.75 0 1 1 2.4 1.62c-.55.25-.8.6-.8 1.18M10 13.5h.01" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      </svg>
      <span>Guide</span>
    </button>
  `,i.appendChild(r);const l=document.createElement("aside");l.className="ux-nav-coach",l.setAttribute("aria-label","Quick camera navigation tips"),l.innerHTML=`
    <div class="ux-coach-items">
      <div class="ux-coach-item">
        <span class="ux-coach-key">Drag</span>
        <span class="ux-coach-desc">Rotate</span>
      </div>
      <span class="ux-coach-sep" aria-hidden="true"></span>
      <div class="ux-coach-item">
        <span class="ux-coach-key">Right-Drag / 2-Finger</span>
        <span class="ux-coach-desc">Pan</span>
      </div>
      <span class="ux-coach-sep" aria-hidden="true"></span>
      <div class="ux-coach-item">
        <span class="ux-coach-key">Scroll / Pinch</span>
        <span class="ux-coach-desc">Zoom</span>
      </div>
      <span class="ux-coach-sep" aria-hidden="true"></span>
      <div class="ux-coach-item">
        <span class="ux-coach-key">WASD / Arrows</span>
        <span class="ux-coach-desc">Move</span>
      </div>
      <span class="ux-coach-sep" aria-hidden="true"></span>
      <div class="ux-coach-item">
        <span class="ux-coach-key">Double-Click</span>
        <span class="ux-coach-desc">Glide Closer</span>
      </div>
    </div>
    <button type="button" class="ux-coach-dismiss" aria-label="Dismiss navigation hint" title="Dismiss">&times;</button>
  `,i.appendChild(l);let c=window.setTimeout(()=>{l.classList.add("is-hidden")},13e3);l.addEventListener("pointerenter",()=>{window.clearTimeout(c)}),l.addEventListener("pointerleave",()=>{c=window.setTimeout(()=>{l.classList.add("is-hidden")},5500)}),l.querySelector(".ux-coach-dismiss").addEventListener("click",()=>{window.clearTimeout(c),l.classList.add("is-hidden")});const h=document.createElement("div");h.className="help-backdrop",h.id="ux-guide-dialog",h.innerHTML=`
    <div class="help-modal" role="dialog" aria-modal="true" aria-labelledby="ux-guide-title">
      <div class="help-modal-header">
        <div>
          <div class="brand-eyebrow">EXPLORING THE WORLD</div>
          <h2 class="help-modal-title" id="ux-guide-title">Camera Navigation &amp; Accessibility Guide</h2>
        </div>
        <button type="button" class="drawer-collapse-btn" id="ux-guide-close" aria-label="Close navigation guide" title="Close [Esc]">&times;</button>
      </div>
      <div class="help-grid">
        <div class="help-row"><span>Rotate View</span><kbd>Left-Drag / 1-Finger</kbd></div>
        <div class="help-row"><span>Pan Smoothly</span><kbd>Right-Drag / Shift+Drag</kbd></div>
        <div class="help-row"><span>Touch Pan &amp; Zoom</span><kbd>2-Finger Drag &amp; Pinch</kbd></div>
        <div class="help-row"><span>Zoom In / Out</span><kbd>Mouse Wheel / Trackpad</kbd></div>
        <div class="help-row"><span>Roam Forward / Side</span><kbd>W A S D / Arrow Keys</kbd></div>
        <div class="help-row"><span>Rise / Descend</span><kbd>E / Q</kbd></div>
        <div class="help-row"><span>Faster Roam</span><kbd>Hold Shift</kbd></div>
        <div class="help-row"><span>Glide to Any Point</span><kbd>Double-Click</kbd></div>
        <div class="help-row"><span>Reset Camera View</span><kbd>R</kbd></div>
        <div class="help-row"><span>Save HD Snapshot</span><kbd>P</kbd></div>
        <div class="help-row"><span>Toggle Fullscreen</span><kbd>F</kbd></div>
        <div class="help-row"><span>Toggle Sound</span><kbd>M</kbd></div>
      </div>
      <p class="help-footer-tip">
        Pan and zoom speeds automatically adapt to your distance for comfortable, effortless exploration while the living world unfolds around you.
      </p>
    </div>
  `,i.appendChild(h);const u=r.querySelector("#ux-btn-snapshot"),d=r.querySelector("#ux-btn-reset"),m=r.querySelector("#ux-btn-sound"),v=r.querySelector("#ux-sound-label"),g=r.querySelector("#ux-sound-icon"),f=r.querySelector("#ux-btn-fullscreen"),p=r.querySelector("#ux-btn-guide"),w=h.querySelector("#ux-guide-close");let _=!1;const x=T=>{_=T,h.classList.toggle("visible",_),p.setAttribute("aria-expanded",String(_)),p.classList.toggle("is-active",_),_?(l.classList.add("is-hidden"),w.focus()):p.focus()};p.addEventListener("click",()=>x(!_)),w.addEventListener("click",()=>x(!1)),h.addEventListener("click",T=>{T.target===h&&x(!1)}),u.addEventListener("click",()=>{t.onCaptureSnapshot()});const y=()=>{t.onResetView(),o("Camera smoothly returned to default view")};d.addEventListener("click",y);const b=()=>{const T=t.onToggleAudioMute();m.setAttribute("aria-pressed",String(!T)),m.classList.toggle("is-muted",T),v.textContent=T?"Muted":"Sound",g.innerHTML=T?`<path d="M4.2 8.2h2.6l3.4-2.8v9.2l-3.4-2.8H4.2V8.2Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" />
         <path d="M13 8l4 4M17 8l-4 4" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />`:`<path d="M4.2 8.2h2.6l3.4-2.8v9.2l-3.4-2.8H4.2V8.2Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" />
         <path d="M13 7.6a3.4 3.4 0 0 1 0 4.8M15 5.6a6.2 6.2 0 0 1 0 8.8" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />`,o(T?"Ambient audio muted":"Ambient audio enabled")};m.addEventListener("click",b);const A=()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})};return f.addEventListener("click",A),document.addEventListener("fullscreenchange",()=>{const T=!!document.fullscreenElement;f.classList.toggle("is-active",T),f.setAttribute("aria-pressed",String(T))}),window.addEventListener("keydown",T=>{const S=document.activeElement?.tagName;if(!(S==="INPUT"||S==="TEXTAREA")){if(T.code==="Escape"&&_){T.preventDefault(),x(!1);return}T.key==="?"||T.code==="Slash"&&T.shiftKey?(T.preventDefault(),x(!_)):T.code==="KeyP"&&!T.metaKey&&!T.ctrlKey?(T.preventDefault(),t.onCaptureSnapshot()):T.code==="KeyF"&&!T.metaKey&&!T.ctrlKey?(T.preventDefault(),A()):T.code==="KeyR"&&!T.metaKey&&!T.ctrlKey?(T.preventDefault(),y()):T.code==="KeyM"&&!T.metaKey&&!T.ctrlKey&&(T.preventDefault(),b())}}),{showToast:o,triggerShutterFlash:a}}function j2(){const i=window.__TWIN_FURIES_MODE__;return i==="developer"||i==="user"?i:"user"}async function K2(){const t=j2()==="user";if(t){document.title="Where Dusk Meets the Open Tide — Interactive 3D World";const L=document.querySelector(".lc-top-meta");L&&(L.innerHTML=`
        <span class="lc-live-coord">
          <span class="lc-live-dot"></span>
          INTERACTIVE 3D LIVING WORLD
        </span>
      `,L.style.justifyContent="center");const rt=document.querySelector(".lc-eyebrow");rt&&(rt.textContent="INTERACTIVE 3D SANCTUARY");const dt=document.querySelector(".lc-bottom-meta");dt&&(dt.innerHTML=`
        <span>DRAG TO ROTATE &middot; RIGHT-DRAG TO PAN &middot; SCROLL TO ZOOM</span>
        <span>WASD / ARROWS TO MOVE &middot; DOUBLE-CLICK TO GLIDE CLOSER</span>
      `)}const e=w2(),n=document.getElementById("canvas-container"),s=document.getElementById("hud-root");await e.advanceTo(14,"Initializing HDR WebGL2 post-processing pipeline…");const o=new K1({antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight),o.shadowMap.enabled=!0,o.shadowMap.type=iu,o.toneMapping=Gl,o.toneMappingExposure=1.14,n.appendChild(o.domElement);const a=new Ya,r=new ei(42,window.innerWidth/window.innerHeight,.12,9500);let l=ho[0];r.position.copy(l.position);const c=new J1(r,o.domElement);c.target.copy(l.target),c.enableDamping=!0,c.dampingFactor=t?.052:.065,c.screenSpacePanning=!0,c.rotateSpeed=t?.68:.78,c.panSpeed=t?.8:.85,c.zoomSpeed=t?.86:.92,c.minDistance=.45,c.maxDistance=320,c.maxPolarAngle=Math.PI*.56,c.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},c.update();const h=new ii(window.innerWidth*o.getPixelRatio(),window.innerHeight*o.getPixelRatio(),{type:Ei,samples:4}),u=new vv(o,h);u.addPass(new xv(a,r));const d=new _o(new $t(window.innerWidth,window.innerHeight),.26,.52,1.04);d.materialHighPassFilter.fragmentShader=`
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
  `,d.materialHighPassFilter.needsUpdate=!0,u.addPass(d);const m=new wv;m.material.fragmentShader=m.material.fragmentShader.replace("gl_FragColor = texture2D( tDiffuse, vUv );",`gl_FragColor = texture2D( tDiffuse, vUv );
     gl_FragColor.r = !(gl_FragColor.r >= 0.0) ? 0.0 : (!(gl_FragColor.r <= 65000.0) ? 32.0 : min(gl_FragColor.r, 32.0));
     gl_FragColor.g = !(gl_FragColor.g >= 0.0) ? 0.0 : (!(gl_FragColor.g <= 65000.0) ? 32.0 : min(gl_FragColor.g, 32.0));
     gl_FragColor.b = !(gl_FragColor.b >= 0.0) ? 0.0 : (!(gl_FragColor.b <= 65000.0) ? 32.0 : min(gl_FragColor.b, 32.0));
     gl_FragColor.a = 1.0;`),m.material.needsUpdate=!0,u.addPass(m),await e.advanceTo(34,"Sculpting Nordic archipelago ridges, sea-arches & North Sea swells…");const v="golden-hour",g=sx(o,a,v),f=Ex(g.sharedUniforms);a.add(f.group),await e.advanceTo(58,"Forging Night Fury armor scutes, flush dorsal spines & 117-bone rig…");const p=Jv();p.rootGroup.position.copy(di.position),p.rootGroup.rotation.set(0,di.yaw,0),a.add(p.rootGroup),p.rootGroup.updateMatrixWorld(!0);const w=new Ix(p);await e.advanceTo(82,"Weaving Light Fury pearl luminescence, mirror cloak & 111-bone rig…");const _=_2();_.rootGroup.position.copy(pi.position),_.rootGroup.rotation.set(0,pi.yaw,0),a.add(_.rootGroup),_.rootGroup.updateMatrixWorld(!0);const x=new Bx(_);await e.advanceTo(94,"Compiling shaders & calibrating twin courtship flight splines…");const y=new Cs(p,w,_,x);let b=null,A=1,T=!0,S=!1;c.addEventListener("start",()=>{b=null});let M=null,P=null,C=null;t?(C=M2(o,a,g,f.ocean,p,w,_,x,y),P=Z2(s,{onCaptureSnapshot(){S=!0},onResetView(){b={goalPos:ho[0].position.clone(),goalTarget:ho[0].target.clone()}},onToggleAudioMute(){const L=!g.isAudioMuted();return g.setAudioMuted(L),L}})):M=q2(s,p,w,_,x,y,{initialWeatherPreset:v,onSelectCameraBookmark(L){l=L,b={goalPos:L.position.clone(),goalTarget:L.target.clone()}},onFlightResetCamera(){b={goalPos:l.position.clone(),goalTarget:l.target.clone()}},onFlightSpeedChange(L){A=L},onToggleCursorGaze(L){T=L},onCaptureSnapshot(){S=!0},onSelectWeatherPreset(L){g.applyPreset(L,o,a)},onSunElevationChange(L){g.setSunElevation(L,o,a)},onMistDensityChange(L){g.setMistDensity(L)},onRainIntensityChange(L){g.setRainIntensity(L)},onWindStrengthChange(L){g.setWindStrength(L)},onLightningFrequencyChange(L){g.setLightningFrequency(L)},onTriggerLightningStrike(){g.triggerLightningStrike()},onOceanParamsChange(L){f.ocean.setOceanParams(L)}});const R=L=>{M?M.showToast(L):P&&P.showToast(L)},F=()=>{M?M.triggerShutterFlash():P&&P.triggerShutterFlash()},I=new Set,k=new E,N=new E,D=new E,O=new E;window.addEventListener("keydown",L=>{const rt=document.activeElement?.tagName;rt==="INPUT"||rt==="TEXTAREA"||I.add(L.code)}),window.addEventListener("keyup",L=>{I.delete(L.code)}),window.addEventListener("blur",()=>{I.clear()});const H=new d0,Z=new $t;o.domElement.addEventListener("dblclick",L=>{if(y.isPlaying&&!t)return;const rt=o.domElement.getBoundingClientRect();Z.x=(L.clientX-rt.left)/rt.width*2-1,Z.y=-((L.clientY-rt.top)/rt.height)*2+1,H.setFromCamera(Z,r);const dt=[_.rootGroup,p.rootGroup,f.group],Mt=H.intersectObjects(dt,!0).find(Ut=>Ut.distance<650&&!(Ut.object instanceof to)&&!Ut.object.userData?.excludeFromExport);if(!Mt)return;const zt=Mt.point.clone();let kt=!1,Rt=Mt.object,It="Coastal Landform";for(;Rt;){if(Rt===_.rootGroup){kt=!0,It="Light Fury";break}if(Rt===p.rootGroup){kt=!0,It="Toothless";break}if(Rt.name.startsWith("FaroeseHeadlandSeaArch")){It="Headland Sea-Arch";break}if(Rt.name==="TabularFaroeseSeaStacks"){It="Tabular Sea-Stack";break}if(Rt.name==="WestWaterfallDoubleIsland"){It="Waterfall Double-Island";break}if(Rt.name==="StarboardCrescentLagoonAtoll"){It="Crescent Lagoon";break}Rt=Rt.parent}const Lt=r.position.clone().sub(zt).normalize(),Ot=r.position.distanceTo(zt),jt=kt?G.clamp(Ot*.6,2.6,7.5):G.clamp(Ot*.55,10,68),Ht=zt.clone().addScaledVector(Lt,jt);Ht.y=Math.max(Ht.y,Ti(Ht.x,Ht.z)+1.2,-9.2),M&&M.clearActiveCameraBookmark(),b={goalPos:Ht,goalTarget:zt},M&&M.showToast(`Focused on ${It}`)});const q=new $t(0,0);let $=-10,X=!1,V=0,et=0,it=0;window.addEventListener("pointerdown",L=>{L.target===o.domElement&&(X=!0)}),window.addEventListener("pointerup",()=>{X=!1}),window.addEventListener("pointermove",L=>{X||(q.x=L.clientX/Math.max(1,window.innerWidth)*2-1,q.y=-(L.clientY/Math.max(1,window.innerHeight)*2+1),$=performance.now()*.001)});const J=p.rig.boneMap.get("head"),st=p.rig.boneMap.get("neck_03"),Y=p.rig.boneMap.get("eye_L"),j=p.rig.boneMap.get("eye_R"),ut=_.rig.boneMap.get("head"),tt=_.rig.boneMap.get("neck_03"),z=_.rig.boneMap.get("eye_L"),_t=_.rig.boneMap.get("eye_R");window.addEventListener("resize",()=>{const L=window.innerWidth,rt=window.innerHeight;r.aspect=L/rt,r.updateProjectionMatrix(),o.setSize(L,rt),u.setSize(L,rt),d.resolution.set(L,rt)}),w.update(.016),x.update(.016),g.update(0,new E(0,1.15,.35),r.position),f.update(0,r.position),u.render();const xt=new Nu;let Ct=0,Tt=0,Nt=60,lt=!1;function W(){requestAnimationFrame(W);const L=Math.min(xt.getDelta(),.05),rt=xt.elapsedTime;C&&C.update(L,rt);const dt=y.isPlaying,yt=y.update(L*A,r,c.target);if(c.maxPolarAngle=yt.isAirborne||t?Math.PI*.78:Math.PI*.56,t){const Ht=r.position.distanceTo(c.target),Ut=G.clamp((Ht-1.5)/28,0,1);c.rotateSpeed=G.lerp(.46,.72,Ut),c.panSpeed=G.lerp(.54,1.02,Ut),c.zoomSpeed=G.lerp(.68,.96,Ut)}if(lt&&!y.isPlaying&&M&&(b={goalPos:l.position.clone(),goalTarget:l.target.clone()},M.updateFlightUI(),M.syncControlsFromRig()),lt=y.isPlaying,dt&&M&&M.updateFlightUI(),O.set(0,0,0),!y.isPlaying||!y.followCamera||t){const Ht=(I.has("KeyW")||I.has("ArrowUp")?1:0)-(I.has("KeyS")||I.has("ArrowDown")?1:0),Ut=(I.has("KeyD")||I.has("ArrowRight")?1:0)-(I.has("KeyA")||I.has("ArrowLeft")?1:0),ce=(I.has("KeyE")?1:0)-(I.has("KeyQ")?1:0);if(Ht!==0||Ut!==0||ce!==0){b=null,r.getWorldDirection(N),D.crossVectors(N,r.up).normalize(),O.addScaledVector(N,Ht).addScaledVector(D,Ut),O.y+=ce*.85,O.lengthSq()>1e-5&&O.normalize();const ne=r.position.distanceTo(c.target),Me=G.clamp(ne*.78,5.5,30),ot=I.has("ShiftLeft")||I.has("ShiftRight")?2.2:1;O.multiplyScalar(Me*ot)}}if(k.lerp(O,1-Math.exp(-8.5*L)),k.lengthSq()>1e-4&&(r.position.addScaledVector(k,L),c.target.addScaledVector(k,L)),b&&(!y.isPlaying||t)){const Ht=1-Math.exp(-5*L);r.position.lerp(b.goalPos,Ht),c.target.lerp(b.goalTarget,Ht),r.position.distanceTo(b.goalPos)<.012&&c.target.distanceTo(b.goalTarget)<.012&&(b=null)}c.update();const Mt=Ti(r.position.x,r.position.z),zt=Math.max(-9.8,Mt+.55);r.position.y<zt&&(r.position.y=zt),w.update(L),x.update(L);const Rt=performance.now()*.001-$<4&&!X,It=r.position.distanceTo(new E(0,1.1,0))<26,Lt=T&&!y.isPlaying&&Rt&&It?1:0;if(it+=(Lt-it)*(1-Math.exp(-4.2*L)),V+=(q.x-V)*(1-Math.exp(-5.5*L)),et+=(q.y-et)*(1-Math.exp(-5.5*L)),it>.002){const Ht=V*.22*it,Ut=-et*.14*it,ce=-V*.07*it,ne=V*.14*it,Me=-et*.1*it;J&&(J.rotation.y+=Ht*.72,J.rotation.x+=Ut*.75,J.rotation.z+=ce),st&&(st.rotation.y+=Ht*.32,st.rotation.x+=Ut*.25),Y&&j&&(Y.rotation.y+=ne,j.rotation.y+=ne,Y.rotation.x+=Me,j.rotation.x+=Me),ut&&(ut.rotation.y+=Ht*.78,ut.rotation.x+=Ut*.78,ut.rotation.z+=ce*1.15),tt&&(tt.rotation.y+=Ht*.36,tt.rotation.x+=Ut*.28),z&&_t&&(z.rotation.y+=ne,_t.rotation.y+=ne,z.rotation.x+=Me,_t.rotation.x+=Me)}const Ot=r.position.distanceTo(yt.worldFocus),jt=p.updateAutoLOD(Ot);if(_.updateAutoLOD(Ot),g.update(rt,yt.worldFocus,r.position),f.update(rt,r.position),Ct+=L,Tt++,Ct>=.4){const Ht=Tt/Ct;Nt=Nt*.65+Ht*.35,M&&M.updateTelemetry(Nt,jt),Ct=0,Tt=0}if(u.render(),S){S=!1;try{const Ht=o.domElement.toDataURL("image/png"),Ut=document.createElement("a"),ce=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");Ut.download=t?`twin-furies-sanctuary-${ce}.png`:`twin-furies-atelier-${ce}.png`,Ut.href=Ht,Ut.click(),F(),R("Saved HD Snapshot (.PNG)")}catch{R("Snapshot unavailable on this device")}}}W(),await e.completeAndDissolve(s)}K2();
