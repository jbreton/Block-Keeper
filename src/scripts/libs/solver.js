!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.cubeSolver=t()}(this,function(){"use strict";var e=[],t=function t(n){return 0===n||1===n?1:e[n]>0?e[n]:(e[n]=t(n-1)*n,e[n])},n=[],r=function(e,t){if(t>e)return 0;for(;e>=n.length;){var r=n.length,o=[];o[0]=1;for(var i=1,a=r-1;i<r;i+=1)o[i]=n[a][i-1]+n[a][i];o[r]=1,n.push(o)}return n[e][t]},o=function(e,t){return Math.floor(Math.random()*(t-e)+1)+e},i=function(e,t,n){for(var r=e[t],o=t;o<n;o+=1)e[o]=e[o+1];e[n]=r},a=function(e,t,n){for(var r=e[n],o=n;o>t;o-=1)e[o]=e[o-1];e[t]=r},u=function(e,t){for(var n=0,r=0;r<e.length-1;r+=1)n=t*n+e[r];return n},f=function(e,t,n){for(var r=[],o=0,i=t-2;i>=0;i-=1){var a=e%n;e=Math.floor(e/n),r[i]=a,o+=a}return r[t-1]=(n-o%n)%n,r},s=function(e){for(var t=0,n=e.length-1;n>0;n-=1)for(var r=n-1;r>=0;r-=1)e[r]>e[n]&&(t+=1);return t%2},l=function(e,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.length-1,u=0,f=1,s=[];if(o)for(var l=e.length-1;l>=0;l-=1)n.indexOf(e[l])>=0&&(a=Math.min(a,e[l]),u+=r(e.length-1-l,f),s.unshift(e[l]),f+=1);else for(var c=0;c<e.length;c+=1)n.indexOf(e[c])>=0&&(a=Math.min(a,e[c]),u+=r(c,f),s.push(e[c]),f+=1);for(var v=0,h=s.length-1;h>0;h-=1){for(var d=0;s[h]!==n[h];)i(s,0,h),d+=1;v=(h+1)*v+d}return t(n.length)*u+v},c=function(e,n,o){for(var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=t(n.length),f=Math.floor(e/u),s=e%u,l=[],c=0;c<o;c+=1)l.push(-1);for(var v=1;v<n.length;v+=1){var h=s%(v+1);for(s=Math.floor(s/(v+1));h>0;)a(n,0,v),h-=1}var d=n.length-1;if(i)for(var m=0;m<o;m+=1){var g=r(o-1-m,d+1);f-g>=0&&(l[m]=n[n.length-1-d],f-=g,d-=1)}else for(var b=o-1;b>=0;b-=1){var p=r(b,d+1);f-p>=0&&(l[b]=n[d],f-=p,d-=1)}return l},v={"":0,2:1,"'":2},h=function(e){var t="";return e.forEach(function(e){switch(t+=" ",t+="FRUBLD".charAt(Math.floor(e/3)),e%3){case 1:t+="2";break;case 2:t+="'"}}),t.trim()},d=[[1,8,5,9],[0,11,4,8],[1,2,3,0],[3,10,7,11],[2,9,6,10],[5,4,7,6]],m=[[1,0,4,5],[0,3,7,4],[0,1,2,3],[3,2,6,7],[2,1,5,6],[5,4,7,6]],g=function(e,t){var n=e.slice(0);n[t[0]]=e[t[t.length-1]];for(var r=1;r<t.length;r+=1)n[t[r]]=e[t[r-1]];return n},b=function(e,t,n){for(var r=e,o=n[Math.floor(t/3)],i=t%3,a=0;a<=i;a+=1)r=g(r,o);return r},p=function(e,t){return b(e,t,d)},T=function(e,t){return b(e,t,m)},x=function(e,t){var n=Math.floor(t/3),r=d[n],o=t%3,i=p(e,t);if((0===n||3===n)&&o%2==0)for(var a=0;a<4;a+=1)i[r[a]]=(i[r[a]]+1)%2;return i},M=function(e,t){var n=Math.floor(t/3),r=m[n],o=t%3,i=T(e,t);if(2!==n&&5!==n&&o%2==0)for(var a=0;a<4;a+=1)i[r[a]]=(i[r[a]]+(a+1)%2+1)%3;return i},P=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},O=function(e,t,n){return function(r,o){var i=e(r);return i=t(i,o),n(i)}},E=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],z=function(){function e(t){var n=this;if(P(this,e),this.name=t.name,this.size=t.size,this.defaultIndex=t.defaultIndex||0,this.solvedIndexes=t.solvedIndexes||[this.defaultIndex],this.doMove=function(e,r){return t.doMove?t.doMove(n.table,e,r):n.table[e][r]},t.table)this.table=t.table;else{var r=O(t.getVector,t.cubieMove,t.getIndex);this.createMoveTable(t.size,r,t.moves)}}return y(e,[{key:"createMoveTable",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;this.table=[];for(var r=0;r<e;r+=1)this.table.push([]);for(var o=0;o<e;o+=1)for(var i=0;i<n.length;i+=1){var a=n[i];if(!this.table[o][a]){var u=t(o,a),f=a-a%3*2+2;this.table[o][a]=u,this.table[u][f]=o}}}}]),e}(),I=function(e){return new z({name:e.name,moves:e.moves,defaultIndex:l([0,1,2,3,4,5,6,7],e.affected,e.reversed),size:e.size||t(8)/t(8-e.affected.length),getVector:function(t){return c(t,e.affected.slice(),8,e.reversed)},cubieMove:T,getIndex:function(t){return l(t,e.affected,e.reversed)}})},D=function(e){return new z({name:e.name,moves:e.moves,defaultIndex:l([0,1,2,3,4,5,6,7,8,9,10,11],e.affected,e.reversed),size:e.size||t(12)/t(12-e.affected.length),getVector:function(t){return c(t,e.affected.slice(),12,e.reversed)},cubieMove:p,getIndex:function(t){return l(t,e.affected,e.reversed)}})},k=function(e,t,n){for(var r=[],o=Math.pow(n,t-1),i=Math.pow(n,t-e.length-1),a=function(o){var i=f(o,t,n);e.every(function(e){return 0===i[e]})&&r.push(o)},u=0;u<o&&r.length<i;u+=1)a(u);return r},C=function(e){return new z({name:e.name,size:2048,solvedIndexes:k(e.affected,12,2),getVector:function(e){return f(e,12,2)},cubieMove:x,getIndex:function(e){return u(e,2)}})},V=function(e){return new z({name:e.name,size:2187,solvedIndexes:k(e.affected,8,3),getVector:function(e){return f(e,8,3)},cubieMove:M,getIndex:function(e){return u(e,3)}})},F=function(){function e(t,n){P(this,e),this.computePruningTable(t,n)}return y(e,[{key:"setPruningValue",value:function(e,t){this.table[e>>3]^=(15^t)<<((7&e)<<2)}},{key:"getPruningValue",value:function(e){return this.table[e>>3]>>((7&e)<<2)&15}},{key:"computePruningTable",value:function(e,t){var n=e.reduce(function(e,t){return e*t.size},1);this.table=[];for(var r=0;r<n+7>>3;r+=1)this.table.push(-1);for(var o=0,i=0,a=[1],u=1;u<e.length;u+=1)a.push(e[u-1].size*a[u-1]);for(var f=function(e){var t=[],n=e.length-1;return function r(o,i){for(var a=0;a<e[i].length;a+=1){var u=o.slice(0);u.push(e[i][a]),i===n?t.push(u):r(u,i+1)}}([],0),t}(e.map(function(e){return e.solvedIndexes})),s=0;s<f.length;s+=1){for(var l=0,c=0;c<f[s].length;c+=1)l+=a[c]*f[s][c];this.setPruningValue(l,0),i+=1}for(;i!==n;){var v=i>n/2,h=v?15:o,d=v?o:15;o+=1;for(var m=0;m<n;m+=1)if(this.getPruningValue(m)===h)for(var g=0;g<t.length;g+=1){for(var b=t[g],p=m,T=0,x=a.length-1;x>=0;x-=1)T+=a[x]*e[x].doMove(Math.floor(p/a[x]),b),p%=a[x];if(this.getPruningValue(T)===d){if(i+=1,v){this.setPruningValue(m,o);break}this.setPruningValue(T,o)}}}}}]),e}(),R=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],U=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R;P(this,e),this.createTables=t,this.moves=n}return y(e,[{key:"initialize",value:function(){var e=this;this.initialized=!0;var t=this.createTables(),n=t.moveTables,r=t.pruningTables;this.moveTables=n,this.pruningTables=[],r.forEach(function(t){var n=t.map(function(t){return e.moveTables.map(function(e){return e.name}).indexOf(t)});n.sort(function(t,n){return e.moveTables[t].size-e.moveTables[n].size});var r=[];n.forEach(function(t){return r.push(e.moveTables[t])});var o=new F(r,e.moves);e.pruningTables.push({pruningTable:o,moveTableIndexes:n})})}},{key:"handleSolution",value:function(e,t){return{solution:e,indexes:t}}},{key:"search",value:function(e,t,n,r){for(var o=0,i=0;i<this.pruningTables.length;i+=1){for(var a=e[this.pruningTables[i].moveTableIndexes[0]],u=1,f=1;f<this.pruningTables[i].moveTableIndexes.length;f+=1)u*=this.moveTables[this.pruningTables[i].moveTableIndexes[f-1]].size,a+=e[this.pruningTables[i].moveTableIndexes[f]]*u;var s=this.pruningTables[i].pruningTable.getPruningValue(a);if(s>t)return!1;s>o&&(o=s)}if(0===o)return this.handleSolution(r,e);if(t>0)for(var l=0;l<this.moves.length;l+=1){var c=this.moves[l];if(Math.floor(c/3)!==Math.floor(n/3)&&Math.floor(c/3)!==Math.floor(n/3)-3){for(var v=[],h=0;h<e.length;h+=1)v.push(this.moveTables[h].doMove(e[h],c));var d=this.search(v,t-1,c,r.concat([c]));if(d)return d}}return!1}},{key:"solve",value:function(e){var t=this;this.initialized||this.initialize(),this.settings=Object.assign({maxDepth:22,lastMove:null,format:!0},e);var n=this.settings.indexes||[];if(this.settings.scramble){for(var r=function(e){if(!function(e){return/^([FRUBLD][2']?\s*)+$/.test(e)}(e))throw new Error("Invalid algorithm provided to algorithm parser");var t=[];return e.match(/[FRUBLD][2']?/g).forEach(function(e){var n="FRUBLD".indexOf(e.charAt(0)),r=v[e.charAt(1)];t.push(3*n+r)}),t}(this.settings.scramble),o=0;o<this.moveTables.length;o+=1)n.push(this.moveTables[o].defaultIndex);r.forEach(function(e){for(var r=0;r<n.length;r+=1)n[r]=t.moveTables[r].doMove(n[r],e)})}for(var i=0;i<=this.settings.maxDepth;i+=1){var a=this.search(n,i,this.settings.lastMove,[]);if(a)return this.settings.format?h(a.solution):a}return!1}}]),e}(),L=[1,10,4,13,6,7,8,15,16,17],S=void 0,j=void 0,_=void 0,A=void 0,B=new U(function(){var e=function(e,t){for(var n=c(e,[0,1,2],12),r=c(t,[3,4,5],12),o=0;o<8;o+=1)if(-1!==n[o]){if(-1!==r[o])return-1;r[o]=n[o]}return l(r,[0,1,2,3,4,5])};A=[];for(var t=0;t<336;t+=1){A.push([]);for(var n=0;n<336;n+=1)A[t][n]=e(t,n)}return{moveTables:[new z({name:"slicePermutation",size:24,table:_.table}),S,j,D({name:"URToDF",size:20160,moves:L,affected:[0,1,2,3,4,5]})],pruningTables:[["slicePermutation","parity","URFToDLF"],["slicePermutation","parity","URToDF"]]}},L),$=new(function(e){function t(){var e;P(this,t);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=w(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return i.maxDepth=22,i.solution=null,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,U),y(t,[{key:"handleSolution",value:function(e,t){var n=e.slice(-1)[0];if(n%2==0&&6===Math.floor(n/3)&&15===Math.floor(n/3))return!1;var r=B.solve({indexes:[t[3],t[4],t[5],A[t[6]][t[7]]],maxDepth:this.maxDepth-e.length,lastMove:n,format:!1});if(r){if(this.solution=e.concat(r.solution),this.maxDepth<=this.settings.maxDepth)return{solution:this.solution,indexes:t};this.maxDepth=this.solution.length-1}return!1}}]),t}())(function(){return S=new z({name:"parity",size:2,table:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]]}),j=I({name:"URFToDLF",affected:[0,1,2,3,4,5]}),_=D({name:"slice",affected:[8,9,10,11],reversed:!0}),B.initialize(),{moveTables:[new z({name:"slicePosition",size:495,table:_.table,doMove:function(e,t,n){return Math.floor(e[24*t][n]/24)}}),V({name:"twist",affected:[0,1,2,3,4,5,6,7]}),C({name:"flip",affected:[0,1,2,3,4,5,6,7,8,9,10,11]}),_,S,j,D({name:"URToUL",affected:[0,1,2]}),D({name:"UBToDF",affected:[3,4,5]})],pruningTables:[["slicePosition","flip"],["slicePosition","twist"]]}}),q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:22;return Array.isArray(e)?$.solve({indexes:e,maxDepth:t}):$.solve({scramble:e,maxDepth:t})},G=new U(function(){return{moveTables:[D({name:"EdgePermutation",affected:[4,5,6,7]}),C({name:"EdgeOrientation",affected:[4,5,6,7]})],pruningTables:[["EdgePermutation"],["EdgeOrientation"]]}}),H=new U(function(){return{moveTables:[C({name:"EdgeOrientation",affected:[6,9,10]}),V({name:"CornerOrientation",affected:[5,6]}),D({name:"EdgePermutation",affected:[6,9,10]}),I({name:"CornerPermutation",affected:[5,6]})],pruningTables:[["EdgeOrientation","CornerPermutation"],["CornerOrientation","CornerPermutation"],["EdgePermutation","CornerPermutation"]]}}),J=new U(function(){return{moveTables:[C({name:"EdgeOrientation",affected:[0,1,2,3,4,5,6,7,8,9,10,11]}),D({name:"EdgePermutation",affected:[5,7]})],pruningTables:[["EdgeOrientation"],["EdgePermutation"]]}}),K=new U(function(){return{moveTables:[C({name:"EdgeOrientation",affected:[4,5,6,7,8,9,10,11]}),V({name:"CornerOrientation",affected:[4,5,6,7]}),D({name:"EdgePermutation",affected:[4,5,6,7,8,9,10,11]}),I({name:"CornerPermutation",affected:[4,5,6,7]})],pruningTables:[["EdgeOrientation","CornerPermutation"],["CornerOrientation","CornerPermutation"],["EdgePermutation","CornerPermutation"]]}});return{solve:q,getRandomScramble:function(){var e=void 0,t=void 0,n=void 0,r=void 0;do{e=f(o(0,2048),12,2),n=f(o(0,2187),8,3),t=c(o(0,479001600),[0,1,2,3,4,5,6,7,8,9,10,11],12),r=c(o(0,40320),[0,1,2,3,4,5,6,7],8)}while(s(t)!==s(r));var i=[Math.floor(l(t,[8,9,10,11],!0)/24),u(n,3),u(e,2),l(t,[8,9,10,11],!0),s(r),l(r,[0,1,2,3,4,5]),l(t,[0,1,2]),l(t,[3,4,5])];return q(i)},crossSolver:function(e){return G.solve({scramble:e})},firstBlockSolver:function(e){return H.solve({scramble:e})},EOLineSolver:function(e){return J.solve({scramble:e})},OLLSolver:function(e){return K.solve({scramble:e})}}});